# 🚨 CORREÇÃO CRÍTICA - Erro de Sintaxe main.js

## ❌ **PROBLEMA IDENTIFICADO**

**Erro**: `Uncaught SyntaxError: Missing catch or finally after try (at main.js:13116:13)`

## 🔍 **CAUSA**

Código fragmentado misturado na função `detectarCardSessaoSimplificado()`:

-   Há um bloco `if (resultado)` órfão sem início adequado
-   Variáveis `textoBotao` e `i` referenciadas sem declaração
-   Mistura de lógica antiga (botões CSS) com nova (XPath)

## 🔧 **LOCALIZAÇÃO**

Linhas **13067-13115** em `c:\eProbe\src\main.js`:

```javascript
// CÓDIGO ÓRFÃO PROBLEMÁTICO:
console.log(
    `🔍 DETECÇÃO: Analisando botão ${
        i + 1 // ❌ variável 'i' não declarada
    }: ${textoBotao.substring(0, 100)}...` // ❌ variável 'textoBotao' não declarada
);

// USAR FUNÇÃO COMPLETA que detecta TODOS os padrões
const resultado = extrairDadosSessaoCompleto(textoBotao); // ❌ textoBotao undefined

if (resultado) {
    // ... resto do código órfão
}
```

## ✅ **SOLUÇÃO APLICADA**

Substituir o código órfão pela lógica XPath correta:

```javascript
// CÓDIGO CORRETO - XPATH:
console.log("🔍 XPATH: Atributo onmouseover encontrado:");
console.log(`   ${onmouseoverAttr}`);

// Extrair o conteúdo do tooltip (texto dentro das aspas)
const match = onmouseoverAttr.match(/infraTooltipMostrar\('([^']+)'/);
if (!match) {
    console.log("❌ XPATH: Formato do tooltip não reconhecido");
    return null;
}

const tooltipContent = match[1];
console.log(`📝 XPATH: Conteúdo do tooltip: ${tooltipContent}`);

// USAR FUNÇÃO COMPLETA que detecta TODOS os padrões
const resultado = extrairDadosSessaoCompleto(tooltipContent); // ✅ tooltipContent definido
```

## 🎯 **CORREÇÃO MANUAL NECESSÁRIA**

**Substituir nas linhas 13067-13115**:

**DE:**

```javascript
console.log(
    `🔍 DETECÇÃO: Analisando botão ${i + 1}: ${textoBotao.substring(0, 100)}...`
);

// USAR FUNÇÃO COMPLETA que detecta TODOS os padrões
const resultado = extrairDadosSessaoCompleto(textoBotao);
```

**PARA:**

```javascript
console.log("🔍 XPATH: Atributo onmouseover encontrado:");
console.log(`   ${onmouseoverAttr}`);

// Extrair o conteúdo do tooltip (texto dentro das aspas)
const match = onmouseoverAttr.match(/infraTooltipMostrar\('([^']+)'/);
if (!match) {
    console.log("❌ XPATH: Formato do tooltip não reconhecido");
    return null;
}

const tooltipContent = match[1];
console.log(`📝 XPATH: Conteúdo do tooltip: ${tooltipContent}`);

// USAR FUNÇÃO COMPLETA que detecta TODOS os padrões
const resultado = extrairDadosSessaoCompleto(tooltipContent);
```

## 🧪 **VALIDAÇÃO**

Após correção, testar:

```javascript
window.SENT1_AUTO.detectarCardSessaoSimplificado();
```

## ⚡ **STATUS**

-   ❌ **ERRO IDENTIFICADO**: Sintaxe inválida linha 13116
-   🔄 **CORREÇÃO PENDENTE**: Substituição manual necessária
-   ✅ **SOLUÇÃO DOCUMENTADA**: Código correto especificado

**PRÓXIMO PASSO**: Aplicar correção manual nas linhas indicadas
