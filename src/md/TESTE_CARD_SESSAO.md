# 🧪 Teste do Card de Sessão - Guia Completo

## ⚡ Teste Rápido

Para testar imediatamente o card de sessão, execute no console da página do eProc:

```javascript
window.SENT1_AUTO.testarCardSessaoAgora();
```

## 🔍 Diagnósticos

### 1. Verificar Status do Sistema

```javascript
window.SENT1_AUTO.debugStatusCard();
```

### 2. Verificar Página Atual

```javascript
window.SENT1_AUTO.verificarPaginaAtual();
```

### 3. Resetar Sistema Completamente

```javascript
window.SENT1_AUTO.resetarSistemaCard();
```

## 🎯 Teste Passo a Passo

### Passo 1: Verificar Implementação

```javascript
// Verificar se funções estão disponíveis
console.log(
    "obterNumeroProcesso:",
    typeof window.SENT1_AUTO.obterNumeroProcesso
);
console.log(
    "hasDataSessaoPautado:",
    typeof window.SENT1_AUTO.hasDataSessaoPautado
);
console.log(
    "detectarCardSessaoSimplificado:",
    typeof window.SENT1_AUTO.detectarCardSessaoSimplificado
);
console.log(
    "inserirDataSessaoNaInterface:",
    typeof window.SENT1_AUTO.inserirDataSessaoNaInterface
);
```

### Passo 2: Teste de Detecção

```javascript
// Tentar detecção real
const dados = window.SENT1_AUTO.detectarCardSessaoSimplificado();
console.log("Dados detectados:", dados);
```

### Passo 3: Teste de Criação Manual

```javascript
// Forçar criação do card
const cardCriado = window.SENT1_AUTO.inserirDataSessaoNaInterface();
console.log("Card criado:", cardCriado);
```

### Passo 4: Verificar DOM

```javascript
// Verificar se card existe no DOM
const cardExiste = !!document.getElementById("eprobe-data-sessao");
console.log("Card existe:", cardExiste);
```

## 📋 Problemas Comuns e Soluções

### ❌ Card não aparece

**Problema:** `testarCardSessaoAgora()` retorna `cardCriado: false`

**Soluções:**

1. Verificar se está em página válida do eProc
2. Executar `window.SENT1_AUTO.resetarSistemaCard()` primeiro
3. Verificar console para erros específicos

### ❌ Dados não são detectados

**Problema:** `detectarCardSessaoSimplificado()` retorna `null`

**Soluções:**

1. Verificar se fieldset[6] existe na página
2. Verificar se há datas no formato DD/MM/AAAA no texto
3. Tentar em página de processo específico

### ❌ ReferenceError em funções

**Problema:** Funções básicas não estão definidas

**Solução:**

```javascript
// Recarregar extensão
chrome.runtime.reload(); // Se em página de extensões
// OU recarregar página do eProc
location.reload();
```

## 🎯 Resultado Esperado

Após executar `window.SENT1_AUTO.testarCardSessaoAgora()`, você deve ver:

1. ✅ Card criado: `true`
2. ✅ Card existe no DOM: `true`
3. 🎯 Card visível no canto superior direito da página
4. 📊 Card azul com informações da sessão

## 📍 Localização do Card

O card aparece:

-   **Posição:** Canto superior direito
-   **Cor:** Azul (#2563eb)
-   **Conteúdo:** Data da sessão + status
-   **ID:** `eprobe-data-sessao`

## 🔧 Debug Avançado

### Verificar Implementação de Funções Essenciais

```javascript
// Testar função por função
console.log(
    "1. obterNumeroProcesso():",
    window.SENT1_AUTO.obterNumeroProcesso()
);
console.log(
    "2. hasDataSessaoPautado():",
    window.SENT1_AUTO.hasDataSessaoPautado()
);
console.log(
    "3. getDataSessaoPautado():",
    window.SENT1_AUTO.getDataSessaoPautado()
);
```

### Verificar Variáveis Globais

```javascript
// Variáveis internas (podem não estar acessíveis)
console.log(
    "dataSessaoPautado:",
    typeof dataSessaoPautado !== "undefined"
        ? dataSessaoPautado
        : "não acessível"
);
console.log(
    "processoComDataSessao:",
    typeof processoComDataSessao !== "undefined"
        ? processoComDataSessao
        : "não acessível"
);
```

### Testar XPath Diretamente

```javascript
// Verificar se fieldset[6] existe
const xpath =
    "/html/body/div[2]/div[3]/div[2]/div/div[1]/form[2]/div[3]/div/div/fieldset[6]";
const resultado = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
);
console.log("Fieldset[6] encontrado:", !!resultado.singleNodeValue);
if (resultado.singleNodeValue) {
    console.log(
        "Texto do fieldset:",
        resultado.singleNodeValue.textContent.substring(0, 200) + "..."
    );
}
```

## 📞 Suporte

Se o teste não funcionar:

1. Verifique se está em página do eProc com processo específico
2. Abra o console do navegador (F12 → Console)
3. Execute `window.SENT1_AUTO.testarCardSessaoAgora()`
4. Copie e cole a saída completa do console
5. Verifique se há erros em vermelho no console
