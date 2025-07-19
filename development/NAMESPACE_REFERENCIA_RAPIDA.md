# 📋 **REFERÊNCIA RÁPIDA - NAMESPACE CONSOLIDADO**

## ⚡ **REGRA CRÍTICA**

**SEMPRE adicionar novas funções ao namespace consolidado!**

## 📍 **Localização**:

-   **Arquivo**: `src/main.js`
-   **Linha**: ~19100
-   **Marcadores**:
    ```javascript
    // ##### INÍCIO DO NAMESPACE CONSOLIDADO #####
    window.SENT1_AUTO = {
        /* funções aqui */
    };
    // ##### FIM DO NAMESPACE CONSOLIDADO #####
    ```

## ✅ **Processo**:

1. **Declarar** função dentro da IIFE
2. **Adicionar** ao namespace consolidado
3. **Testar** no console: `window.SENT1_AUTO.minhaFuncao()`

## ❌ **NUNCA fazer**:

-   `window.SENT1_AUTO.funcao = funcao;` (fora do namespace)
-   Esquecer de adicionar ao namespace
-   Criar múltiplos namespaces espalhados

## 🔧 **Exemplo**:

```javascript
// 1. Declarar
function debugAlgo() {
    return { status: "ok" };
}

// 2. Adicionar ao namespace consolidado
window.SENT1_AUTO = {
    // ... outras funções...
    debugAlgo, // <- AQUI
};
```

---

**📚 Guia completo**: `src/md/NAMESPACE_CONSOLIDADO_GUIA.md`
