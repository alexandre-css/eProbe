# Correções para Microsoft Edge

## ⚠️ Importante: Usuário Utiliza Microsoft Edge

Este projeto foi corrigido para funcionar especificamente com **Microsoft Edge** ao invés de Google Chrome.

## URLs Corretas

### ✅ CORRETO (Edge)

```
edge://extensions/
```

### ❌ INCORRETO (Chrome)

```
chrome://extensions/
```

## Arquivos Corrigidos

### Scripts de Teste

-   ✅ `development/tests/teste-imediato.js`
-   ✅ `development/tests/guia-completo-teste.js`
-   ✅ `development/tests/diagnostico-status-completo.js`
-   ✅ `development/tests/teste-rapido-status.js`

### Documentação

-   ✅ `README.md`
-   ✅ `src/md/QUICK_TEST_GUIDE.md`

### Configuração

-   ✅ `.vscode/tasks.json`

## Instruções de Instalação (Edge)

1. **Abrir Edge Extensions**

    ```
    edge://extensions/
    ```

2. **Ativar Modo Desenvolvedor**

    - Clique no botão "Modo do desenvolvedor" no canto inferior esquerdo

3. **Carregar Extensão**

    - Clique em "Carregar sem compactação"
    - Selecione a pasta `c:\eProbe`

4. **Verificar Instalação**
    - A extensão "eProbe" deve aparecer na lista
    - Ícone de reload (↻) deve estar disponível

## Scripts de Teste Atualizados

### Teste Imediato

```javascript
// Cole no console do eProc após carregar a extensão
// Arquivo: development/tests/teste-imediato.js

if (typeof window.SENT1_AUTO === "undefined") {
    console.error("❌ EXTENSÃO NÃO CARREGADA!");
    console.log("🔧 FAÇA ISSO:");
    console.log("1. Vá para edge://extensions/");
    console.log("2. Clique no ícone reload (↻) da extensão eProbe");
    console.log("3. Recarregue esta página do eProc");
    console.log("4. Aguarde 10 segundos e tente novamente");
}
```

### Guia Completo

```javascript
// Arquivo: development/tests/guia-completo-teste.js
console.log("1. Abra uma nova aba no Edge");
console.log("2. Digite: edge://extensions/");
console.log("3. Encontre a extensão 'eProbe'");
console.log("4. Clique no ícone de reload (↻) na extensão");
```

## Compatibilidade

A extensão eProbe foi desenvolvida usando APIs padrão do Chrome Extension que são **100% compatíveis** com Microsoft Edge, incluindo:

-   `chrome.runtime.*`
-   `chrome.tabs.*`
-   `chrome.storage.*`
-   Content Scripts
-   Background Scripts

## Resolução de Problemas (Edge)

### Extensão não carrega

1. Vá para `edge://extensions/`
2. Clique no botão reload (↻) da extensão eProbe
3. Recarregue a página do eProc
4. Aguarde 10 segundos

### Namespace não disponível

```javascript
// Verificar no console do eProc
if (typeof window.SENT1_AUTO === "undefined") {
    console.log("❌ Namespace não carregado - recarregue extensão");
} else {
    console.log("✅ Namespace carregado com sucesso");
}
```

## Notas Técnicas

-   Edge usa o mesmo engine (Chromium) que o Chrome
-   APIs de extensão são idênticas
-   Única diferença é a URL de gerenciamento: `edge://extensions/`
-   Todos os testes e funcionalidades permanecem iguais

## Status da Correção

-   ✅ Todos os arquivos de teste corrigidos
-   ✅ Documentação atualizada
-   ✅ Task do VS Code corrigida
-   ✅ Scripts funcionais para Edge

**Data da Correção**: 13 de julho de 2025
**Motivo**: Usuário utiliza Microsoft Edge como navegador padrão
