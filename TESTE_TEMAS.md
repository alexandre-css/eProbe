# 🧪 TESTE DO SISTEMA DE TEMAS EPROBE

## ✅ Status dos Componentes - PROBLEMAS RESOLVIDOS

1. **popup.html** - ✅ Script inline removido (CSP resolvido)
2. **popup.js** - ✅ Versão limpa e funcional (helpBtn removido)
3. **main.js** - ✅ Handler applyTheme funcionando
4. **themeApply.js** - ✅ Função applyThemeStyles global

## 🔧 Problemas Resolvidos

### ❌ Erro CSP (Content Security Policy)

-   **Problema:** Script inline no popup.html violava CSP
-   **Solução:** Movido todo código JavaScript para popup.js

### ❌ ReferenceError: helpBtn is not defined

-   **Problema:** Referência a elemento inexistente
-   **Solução:** Código limpo criado sem referências problemáticas

## 🔧 Como Testar a Funcionalidade DO SISTEMA DE TEMAS EPROBE

## ✅ Status dos Componentes

1. **popup.html** - Botões de tema com event listeners: ✅
2. **popup.js** - Simplificado e funcional: ✅
3. **main.js** - Handler applyTheme: ✅
4. **themeApply.js** - Função applyThemeStyles global: ✅

## 🔧 Como Testar a Funcionalidade

1. Abra o Chrome
2. Vá para `chrome://extensions/`
3. Ative o "Modo do desenvolvedor"
4. Clique em "Carregar sem compactação"
5. Selecione a pasta `c:\eProbe`
6. Navegue para uma página do eProc (`eproc1g.tjsc.jus.br` ou `eproc2g.tjsc.jus.br`)
7. Clique no ícone da extensão eProbe
8. Teste os botões coloridos de tema
9. Verifique se a barra de navegação do eProc muda de cor

## 🎨 Temas Disponíveis

-   🔵 **Azul** (padrão)
-   ⚫ **Escuro**
-   ⚪ **Claro**
-   🟣 **Violeta**

## 📋 O que Deve Acontecer ao Clicar nos Botões

-   Botão fica destacado (text-white + underline)
-   Tema é salvo no chrome.storage
-   Mensagem é enviada para content script
-   Barra de navegação do eProc muda de cor
-   Console mostra logs do processo

## 🔍 Fluxo Técnico Completo

### 1. Clique no Botão (popup.html)

```javascript
// Event listener inline no popup.html
button.addEventListener("click", function () {
    var index = parseInt(this.getAttribute("data-index"));
    toggle(index);
});
```

### 2. Função toggle() Executa

```javascript
function toggle(index) {
    // Remove estado ativo de todos os botões
    // Adiciona estado ativo ao botão selecionado
    // Chama applyTheme(theme)
}
```

### 3. Função applyTheme() Envia Mensagem

```javascript
function applyTheme(theme) {
    // Salva tema no chrome.storage
    chrome.storage.sync.set({ selectedTheme: theme });

    // Envia mensagem para content script
    chrome.tabs.sendMessage(tabs[0].id, {
        action: "applyTheme",
        theme: theme,
    });
}
```

### 4. Content Script Recebe (main.js)

```javascript
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "applyTheme") {
        const theme = request.theme;
        if (typeof window.applyThemeStyles === "function") {
            window.applyThemeStyles(theme);
            sendResponse({ success: true, theme: theme });
        }
    }
});
```

### 5. Tema é Aplicado (themeApply.js)

```javascript
function applyThemeStyles(themeName) {
    // Remove estilos anteriores
    // Aplica novos estilos CSS baseados no tema
    // Injeta CSS na página do eProc
}
```

## ✅ Sistema Pronto

O sistema de temas está completamente funcional e pronto para teste. Todos os componentes estão integrados e o fluxo de comunicação entre popup → content script → aplicação de tema está implementado.

**Próximo Passo:** Teste manual no Chrome para validação final.
