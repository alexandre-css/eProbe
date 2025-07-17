# Correção do Texto do Card Material Design Figma

## 📝 Problema Identificado

O card estava exibindo apenas "Sessão" como texto principal, mas conforme as especificações e imagens fornecidas pelo usuário, deveria mostrar:

-   **Texto Principal**: Status do processo (ex: "Pautado")
-   **Texto Secundário**: "Sessão: [data]" como subtítulo

## 🔧 Correções Implementadas

### 1. Correção do Texto Principal (CardMaterialFigma.js)

**Antes:**

```javascript
textSessao.textContent = "Sessão";
```

**Depois:**

```javascript
textSessao.textContent = status || "Pautado";
```

### 2. Correção do Formato da Data (CardMaterialFigma.js)

**Antes:**

```javascript
textData.textContent = dadosSessao || "22/07/2025";
```

**Depois:**

```javascript
textData.textContent = dadosSessao
    ? `Sessão: ${dadosSessao}`
    : "Sessão: 22/07/2025";
```

### 3. Exportação da Função (CardMaterialFigma.js)

**Adicionado:**

```javascript
// Exportar a função principal para uso no main.js
window.SENT1_AUTO.criarCardMaterialDesign = criarCardMaterialDesign;
```

### 4. Correção das Chamadas no main.js

**Antes:**

```javascript
const resultadoCard = criarCardMaterialDesign(
    dadosSessao?.status || "Pautado",
    dadosSessao?.data || "22/07/2025",
    dadosSessao?.processo || "processo-teste"
);
```

**Depois:**

```javascript
const resultadoCard = window.SENT1_AUTO.criarCardMaterialDesign(
    dadosSessao?.status || "Pautado",
    dadosSessao?.data || "22/07/2025",
    dadosSessao?.processo || "processo-teste"
);
```

## 📊 Resultado Esperado

Com essas correções, o card agora deve exibir:

```
[Ícone] Pautado
        Sessão: 29/01/2025
```

Onde:

-   **"Pautado"** é o texto principal (dinâmico baseado no status)
-   **"Sessão: 29/01/2025"** é o subtítulo com formato consistente

## 🔍 Arquivos Modificados

1. **`c:\eProbe\src\CardMaterialFigma.js`**

    - Linha 136: Correção do texto principal
    - Linha 154: Correção do formato da data
    - Linha 194: Exportação da função

2. **`c:\eProbe\src\main.js`**
    - Linha 13696: Correção da chamada em `atualizarCardMaterialDesign`
    - Linha 13717: Correção da segunda chamada na mesma função
    - Linha 14375: Correção em função de correção de card
    - Linha 16928: Correção em função de teste

## ✅ Validação

Para testar as correções:

1. Recarregar a extensão no Edge
2. Navegar para uma página do eProc
3. Verificar se o card exibe o texto correto:
    - Status como cabeçalho principal
    - "Sessão: [data]" como subtítulo

## 🎯 Conformidade com Especificações

-   ✅ Texto principal dinâmico baseado no status
-   ✅ Formato "Sessão: [data]" para subtítulo
-   ✅ Função exportada corretamente
-   ✅ Chamadas usando namespace correto
-   ✅ Especificações tipográficas do Figma mantidas
