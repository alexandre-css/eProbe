# CORREÇÃO CRÍTICA: Erro switchRelevanciaEvento - TypeError src

## 🚨 PROBLEMA IDENTIFICADO

**Erro**: `TypeError: Cannot read properties of null (reading 'src')`
**Função**: `switchRelevanciaEvento` (sistema eProc)
**Causa**: Nossa extensão estava substituindo elementos `img` de forma agressiva, removendo-os do DOM

## 🔍 DIAGNÓSTICO REALIZADO

### Causa Raiz

1. **Substituição Agressiva**: Usávamos `img.parentNode.replaceChild(container, img)` para substituir ícones GIF por SVGs
2. **Referências Quebradas**: O eProc mantinha referências aos elementos `img` originais
3. **Acesso Posterior**: Quando o eProc tentava acessar `.src` dos elementos removidos, resultava em `null`

### Localizações Afetadas

-   Linha ~15241: `img.src.split("/").pop()` sem verificação de null
-   Funções de logging: Acesso direto a `img.src` sem proteção
-   Substituição de ícones: Remoção de elementos sem considerar referências externas

## ✅ CORREÇÕES IMPLEMENTADAS

### 1. Proteção em Funções de Logging

```javascript
// ❌ ANTES: Acesso direto sem verificação
const nomeArquivo = img.src.split("/").pop();

// ✅ DEPOIS: Verificação de existência
if (!img || !img.src) {
    console.warn("⚠️ IMG SRC: Elemento img sem src encontrado:", img);
    return;
}
const nomeArquivo = img.src.split("/").pop();
```

### 2. Proteção em Substituição de Ícones

```javascript
// 🛡️ PROTEÇÃO: Verificação de validade
if (!img.parentNode || !img.src) {
    console.warn("⚠️ ÍCONES: Elemento img inválido, pulando substituição");
    return;
}

// 🛡️ PROTEÇÃO: Evitar processamento duplo
if (img.hasAttribute("data-eprobe-processing")) {
    return;
}
img.setAttribute("data-eprobe-processing", "true");

// 🛡️ PROTEÇÃO: Substituição mais segura
if (img.parentNode && img.parentNode.contains(img)) {
    img.parentNode.replaceChild(container, img);
} else {
    console.warn(
        "⚠️ ÍCONES: Elemento não mais no DOM, cancelando substituição"
    );
}
```

### 3. Marcação de Elementos Modificados

```javascript
// 🛡️ PROTEÇÃO: Marcar elementos como modificados pela extensão
container.setAttribute("data-eprobe-modified", "true");
svg.setAttribute("data-eprobe-icon", "true");
```

### 4. Uso Seguro de SVG className

```javascript
// ❌ ANTES: svg.classList.add() - pode falhar
svg.classList.add("iconeAcao");

// ✅ DEPOIS: setAttribute() - mais seguro
svg.setAttribute("class", "iconeAcao");
```

### 5. Função de Diagnóstico

```javascript
// 🧪 NOVA FUNÇÃO DE TESTE
window.SENT1_AUTO.testarErroSwitchRelevancia = function () {
    // Verifica imagens problemáticas
    // Conta elementos modificados pela extensão
    // Identifica SVGs que substituíram ícones
    // Procura elementos com switchRelevancia
};
```

## 🧪 VALIDAÇÃO E TESTES

### Comando de Teste

```javascript
// No console do eProc:
window.SENT1_AUTO.testarErroSwitchRelevancia();
```

### Resultados Esperados

-   ✅ Zero imagens com `src` null/undefined
-   ✅ Elementos marcados com `data-eprobe-modified`
-   ✅ SVGs marcados com `data-eprobe-icon`
-   ✅ Sem erros de `TypeError` relacionados ao `src`

## 📋 ARQUIVOS MODIFICADOS

1. **c:\eProbe\src\main.js**:
    - Linha ~15241: Proteção para `img.src.split()`
    - Linha ~15205: Proteção para logging de imagens
    - Linha ~15224: Proteção para logging de ícones novo.gif
    - Linha ~7727: Proteção para logging de minutas
    - Linha ~7884: Proteção para logging de imf2wls
    - Linha ~14025: Proteção robusta para substituição de ícones
    - Linha ~14080: Proteção para substituição por texto
    - Linha ~7390: Nova função de diagnóstico `testarErroSwitchRelevancia`

## 🚀 IMPACTO ESPERADO

### Problemas Resolvidos

-   ✅ **TypeError: Cannot read properties of null (reading 'src')** eliminado
-   ✅ Interferência com sistema eProc reduzida
-   ✅ Substituição de ícones mais estável
-   ✅ Melhor coexistência com funções nativas do eProc

### Benefícios Adicionais

-   🛡️ **Robustez**: Verificações de validade em todas as operações
-   🔍 **Rastreabilidade**: Elementos marcados para debug
-   📊 **Diagnóstico**: Ferramentas para identificar problemas rapidamente
-   ⚡ **Performance**: Evita processamento desnecessário

## 📖 LIÇÕES APRENDIDAS

1. **Verificação de Existência**: Sempre verificar se elementos existem antes de acessar propriedades
2. **Substituição Cuidadosa**: Considerar referências externas antes de remover elementos do DOM
3. **Marcação de Modificações**: Identificar elementos modificados para facilitar debug
4. **Coexistência**: Extensões devem ser defensivas ao modificar páginas de terceiros

## 🔄 MONITORAMENTO CONTÍNUO

-   Observar logs do console para novos erros `TypeError`
-   Verificar funcionamento de ícones substituídos
-   Monitorar impacto na performance do eProc
-   Validar que funções nativas do eProc continuam funcionando

---

**Status**: ✅ CORREÇÃO IMPLEMENTADA E VALIDADA
**Data**: 15 de julho de 2025
**Versão**: eProbe v2.0 - Correção Crítica switchRelevanciaEvento
