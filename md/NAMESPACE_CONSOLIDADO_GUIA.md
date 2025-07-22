# 📋 **NAMESPACE CONSOLIDADO - GUIA DEFINITIVO**

## ⚠️ **REGRA CRÍTICA ABSOLUTA**

**TODAS as funções públicas devem ser adicionadas ao namespace consolidado único localizado no final do arquivo `src/main.js`.**

## 📍 **LOCALIZAÇÃO DO NAMESPACE**

O namespace consolidado está localizado nas linhas finais do arquivo `src/main.js`, entre os marcadores:

```javascript
// ##### INÍCIO DO NAMESPACE CONSOLIDADO #####
window.SENT1_AUTO = {
    // ... todas as funções públicas aqui
};
// ##### FIM DO NAMESPACE CONSOLIDADO #####
```

**Localização aproximada**: Linha ~19100 no arquivo `src/main.js`

## 🔧 **PROCESSO OBRIGATÓRIO AO CRIAR NOVA FUNÇÃO**

### ✅ **PASSO-A-PASSO CORRETO:**

1. **Declarar a função** dentro da IIFE principal:

```javascript
// Dentro da IIFE assíncrona
function minhaNovaFuncao() {
    // implementação aqui
    return resultado;
}
```

2. **Adicionar ao namespace consolidado** (sempre no final do arquivo):

```javascript
// ##### INÍCIO DO NAMESPACE CONSOLIDADO #####
window.SENT1_AUTO = {
    // ... funções existentes...

    // 🔧 SUA CATEGORIA AQUI
    minhaNovaFuncao, // <- SEMPRE ADICIONAR AQUI

    // ... resto das funções...
};
// ##### FIM DO NAMESPACE CONSOLIDADO #####
```

### ❌ **NUNCA FAZER:**

```javascript
// ❌ ERRADO: Criar namespace espalhado
window.SENT1_AUTO.minhaNovaFuncao = function() { ... };

// ❌ ERRADO: Múltiplos namespaces no arquivo
window.SENT1_AUTO = { /* algumas funções */ };
// ... código ...
window.SENT1_AUTO.outraFuncao = outraFuncao; // ESPALHADO!

// ❌ ERRADO: Esquecer de adicionar ao namespace
function funcaoEsquecida() { ... } // Não exposta!
```

## 🎯 **ORGANIZAÇÃO DAS CATEGORIAS**

O namespace está organizado por categorias funcionais:

```javascript
window.SENT1_AUTO = {
    // 🚀 AUTOMAÇÃO PRINCIPAL
    runFullAutomation,
    autoOpenDocumentoRelevante,
    autoExtractText,

    // 📅 DETECÇÃO DE DATA DE SESSÃO
    detectarDataSessao,
    getDadosCompletosMinutas,

    // 🎨 INTERFACE MATERIAL DESIGN
    criarCardMaterialDesign,
    obterConfigFigmaStatus,

    // 🔧 DEBUG E TESTES
    debugTextoMinutas,
    testarSistemaCompleto,

    // 🌐 API E DADOS GLOBAIS
    getStoredApiKey,
    sendToPerplexity,

    // 📋 SUB-NAMESPACE LOCALIZADORES
    localizadores: {
        detectarPagina: detectarPaginaLocalizadores,
        processarTabela: processarTabelaLocalizadores,
        destacarUrgentes: destacarLocalizadoresUrgentes,
    },
};
```

## 🧪 **EXEMPLOS PRÁTICOS**

### ✅ **Exemplo Correto - Função de Debug**

```javascript
// 1. Declarar função dentro da IIFE
function debugMinhaFuncionalidade() {
    console.log("🔍 DEBUG: Minha funcionalidade");
    return { status: "ok", dados: obterDados() };
}

// 2. Adicionar ao namespace consolidado
// ##### INÍCIO DO NAMESPACE CONSOLIDADO #####
window.SENT1_AUTO = {
    // ... outras funções...

    // 🔧 DEBUG E TESTES
    debugTextoMinutas,
    testarSistemaCompleto,
    debugMinhaFuncionalidade, // <- NOVA FUNÇÃO AQUI

    // ... resto das funções...
};
// ##### FIM DO NAMESPACE CONSOLIDADO #####
```

### ✅ **Exemplo Correto - Função de API**

```javascript
// 1. Declarar função
async function chamarMinhaAPI(parametros) {
    try {
        const resultado = await fetch("/api/minha-endpoint", {
            method: "POST",
            body: JSON.stringify(parametros),
        });
        return await resultado.json();
    } catch (error) {
        console.error("❌ API Error:", error);
        return null;
    }
}

// 2. Adicionar ao namespace
window.SENT1_AUTO = {
    // ... outras funções...

    // 🌐 API E DADOS GLOBAIS
    getStoredApiKey,
    sendToPerplexity,
    chamarMinhaAPI, // <- NOVA FUNÇÃO AQUI

    // ... resto...
};
```

## 🔍 **VALIDAÇÃO E TESTES**

### **Verificar se função foi adicionada corretamente:**

```javascript
// No console do navegador:
console.log(Object.keys(window.SENT1_AUTO).length); // Total de funções
console.log("minhaNovaFuncao" in window.SENT1_AUTO); // Deve ser true
window.SENT1_AUTO.minhaNovaFuncao(); // Deve funcionar
```

### **Verificar organização do namespace:**

```javascript
// Listar todas as funções por categoria
Object.keys(window.SENT1_AUTO).forEach((funcao) => {
    console.log(`📋 ${funcao}:`, typeof window.SENT1_AUTO[funcao]);
});
```

## ⚡ **BENEFÍCIOS DO NAMESPACE CONSOLIDADO**

1. **🔍 Facilita Debug**: Todas as funções em um local único
2. **🧪 Simplifica Testes**: Acesso consistente a todas as funcionalidades
3. **📚 Documenta automaticamente**: Serve como índice das funcionalidades
4. **🚫 Previne Conflitos**: Evita poluição do namespace global
5. **🔧 Manutenção Simples**: Organização clara e previsível

## 🚨 **CHECKLIST FINAL**

Antes de submeter código, sempre verificar:

-   [ ] ✅ Função declarada dentro da IIFE
-   [ ] ✅ Função adicionada ao namespace consolidado
-   [ ] ✅ Função categorizada corretamente
-   [ ] ✅ Nome da função é descritivo e consistente
-   [ ] ✅ Função retorna valor consistente (não undefined)
-   [ ] ✅ Não há duplicação de funções no namespace
-   [ ] ✅ Testada no console do navegador

## 📞 **EXECUÇÃO DE FUNÇÕES**

Todas as funções expostas no namespace podem ser executadas via console:

```javascript
// Execução no console do navegador (F12)
window.SENT1_AUTO.runFullAutomation();
window.SENT1_AUTO.detectarDataSessao();
window.SENT1_AUTO.debugTextoMinutas();
window.SENT1_AUTO.testarSistemaCompleto();

// Para sub-namespaces:
window.SENT1_AUTO.localizadores.detectarPagina();
window.SENT1_AUTO.localizadores.processarTabela();
```

---

**📋 Este documento serve como referência definitiva para o sistema de namespace consolidado do eProbe Extension.**
