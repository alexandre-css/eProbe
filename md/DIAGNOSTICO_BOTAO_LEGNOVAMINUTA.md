## 🔍 DIAGNÓSTICO: Interferência no Botão LegNovaMinuta do eProc

### PROBLEMA IDENTIFICADO

A extensão eProbe está **interferindo com o clique** no botão `<span id="LegNovaMinuta"><button type="button" class="infraLegendObrigatorio btn btn-link btn-sm p-0">` do eProc.

### 🚨 CAUSAS IDENTIFICADAS

#### 1. **EXCLUSÃO INTENCIONAL DE BOTÕES**
**Localização**: Linha ~19195 em `src/main.js`

```javascript
// Seletores para todos os tipos de botões do eProc (INCLUINDO botões eProbe - EXCLUINDO pesquisa, navbar, infraLegendObrigatorio, btn-link e btn-sm)
const seletoresBotoes = [
    ".bootstrap-styles .btn:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm)",
    // ... outros seletores com as mesmas exclusões
];
```

**PROBLEMA**: A extensão está explicitamente **excluindo** todos os botões com as classes:
- `.infraLegendObrigatorio` ✅ **IDENTIFICADA**
- `.btn-link` ✅ **IDENTIFICADA** 
- `.btn-sm` ✅ **IDENTIFICADA**

O botão `LegNovaMinuta` possui **TODAS essas classes**, então está sendo intencionalmente ignorado pelos seletores da extensão.

#### 2. **OVERLAY DE MENU COM Z-INDEX ALTO**
**Localização**: Linha ~5480 em `src/main.js`

```javascript
const overlay = document.createElement("div");
overlay.id = "eprobe-menu-overlay";
overlay.style.cssText = `
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    z-index: 9999998 !important;
    background: transparent !important;
    pointer-events: auto !important;
`;
```

**PROBLEMA**: Este overlay cobre **toda a tela** com `pointer-events: auto` e z-index muito alto. Se não for removido corretamente, pode interceptar cliques.

#### 3. **INTERCEPTAÇÃO DE addEventListener**
**Localização**: Linha ~961 em `src/main.js`

```javascript
EventTarget.prototype.addEventListener = function (type, listener, options) {
    if (passiveEvents.includes(type)) {
        const newOptions = typeof options === "boolean"
            ? { capture: options, passive: true }
            : { ...(options || {}), passive: true };
        return nativeAddEventListener.call(this, type, listener, newOptions);
    }
    return nativeAddEventListener.call(this, type, listener, options);
};
```

**PROBLEMA**: A extensão intercepta **TODOS** os `addEventListener` do DOM, modificando eventos para serem passivos. Isso pode afetar event handlers do botão.

#### 4. **MÚLTIPLOS MUTATION OBSERVERS**
**Localização**: Várias (linhas 559, 11659, 12332, etc.)

**PROBLEMA**: Vários `MutationObserver` observando mudanças no DOM podem estar interferindo com a funcionalidade normal da página.

### 🔧 SOLUÇÕES RECOMENDADAS

#### **SOLUÇÃO 1: Criar Exception para LegNovaMinuta**
Adicionar exception específica para o botão `LegNovaMinuta` nos seletores de exclusão.

#### **SOLUÇÃO 2: Verificar Limpeza de Overlays**
Garantir que todos os overlays sejam removidos corretamente, especialmente o `eprobe-menu-overlay`.

#### **SOLUÇÃO 3: Revisar Interceptação de Eventos**
Verificar se a interceptação de `addEventListener` não está afetando eventos críticos do eProc.

### 📝 CÓDIGO DE DIAGNÓSTICO

Execute no console do navegador (F12) na página do eProc:

```javascript
console.log("🔍 Verificando interferências da extensão eProbe...");

// 1. Verificar overlays ativos
const overlaysAtivos = document.querySelectorAll("[id*=eprobe-menu-overlay], [id*=eprobe], [style*='z-index']");
console.log("📊 Total de overlays encontrados:", overlaysAtivos.length);
overlaysAtivos.forEach((el, i) => {
    const style = window.getComputedStyle(el);
    console.log(`${i+1}. ${el.tagName}#${el.id||"sem-id"} - z-index: ${style.zIndex}, position: ${style.position}, pointer-events: ${style.pointerEvents}`);
});

// 2. Verificar o botão LegNovaMinuta
const botaoLegNovaMinuta = document.querySelector("#LegNovaMinuta button");
console.log("🎯 Botão LegNovaMinuta encontrado:", !!botaoLegNovaMinuta);
if (botaoLegNovaMinuta) {
    console.log("📋 Classes do botão:", botaoLegNovaMinuta.className);
    const rect = botaoLegNovaMinuta.getBoundingClientRect();
    console.log("📐 Posição do botão:", rect);
    const elementoNoTopo = document.elementFromPoint(rect.x + rect.width/2, rect.y + rect.height/2);
    console.log("🎯 Elemento no topo da posição do botão:", elementoNoTopo);
    
    // Verificar se há overlay cobrindo
    if (elementoNoTopo !== botaoLegNovaMinuta && !botaoLegNovaMinuta.contains(elementoNoTopo)) {
        console.warn("⚠️ PROBLEMA: Outro elemento está cobrindo o botão!", elementoNoTopo);
    }
}

// 3. Verificar event listeners interceptados
console.log("🔍 addEventListener original:", typeof window.nativeAddEventListener !== 'undefined' ? 'INTERCEPTADO' : 'NORMAL');
```

### 🎯 PRÓXIMOS PASSOS

1. **Execute o código de diagnóstico** para confirmar qual interferência está ativa
2. **Implemente a correção** baseada no resultado do diagnóstico
3. **Teste o clique** no botão após a correção
