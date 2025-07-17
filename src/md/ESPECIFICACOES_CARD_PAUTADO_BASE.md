# Especificações do Card "Pautado" - Layout Base

**Data de Criação**: 16 de julho de 2025  
**Versão**: 1.0  
**Status**: Layout Base Aprovado ✅

## Visão Geral

Este documento define as especificações completas do layout do ca## Lista dos 8 Cards de Status de Julgamento

Baseado no arquivo de especificações fornecido, os 8 status de julgamento são:

### 🎯 **Status Principais**

1. **PAUTADO** ✅ (Base implementada)

    - **Descrição**: Processo incluído em pauta para julgamento
    - **Cor Ícone**: `#5C85B4` (azul)
    - **Texto Card**: "PAUTADO"

2. **RETIRADO** (pendente - cor e texto)

    - **Descrição**: Processo retirado da pauta de julgamento
    - **Cor Ícone**: A definir
    - **Texto Card**: "RETIRADO"

3. **VISTA** (pendente - cor e texto)

    - **Descrição**: Processo em vista para análise
    - **Cor Ícone**: A definir
    - **Texto Card**: "VISTA"

4. **JULGADO** (pendente - cor e texto)
    - **Descrição**: Processo já julgado em sessão
    - **Cor Ícone**: A definir
    - **Texto Card**: "JULGADO"

### 🎯 **Status Especiais**

5. **ADIADO** (pendente - cor e texto)

    - **Descrição**: Julgamento adiado para data posterior
    - **Cor Ícone**: A definir
    - **Texto Card**: "ADIADO"

6. **ADIADO 935** (pendente - cor e texto)

    - **Descrição**: Adiamento específico (artigo 935)
    - **Cor Ícone**: A definir
    - **Texto Card**: "ADIADO 935"

7. **SOBRESTADO** (pendente - cor e texto)

    - **Descrição**: Processo sobrestado (suspenso)
    - **Cor Ícone**: A definir
    - **Texto Card**: "SOBRESTADO"

8. **DILIGÊNCIA** (pendente - cor e texto)
    - **Descrição**: Processo enviado em diligência
    - **Cor Ícone**: A definir
    - **Texto Card**: "DILIGÊNCIA"

### 🔧 **Configuração para Implementação**

````javascript
function obterConfigFigmaStatus(status) {
    const configs = {
        'PAUTADO': {
            iconColor: '#5C85B4',
            statusText: 'PAUTADO',
            data: getDataSessao()
        },
        'RETIRADO': {
            iconColor: '#???', // A definir
            statusText: 'RETIRADO',
            data: getDataSessao()
        },
        'VISTA': {
            iconColor: '#???', // A definir
            statusText: 'VISTA',
            data: getDataSessao()
        },
        'JULGADO': {
            iconColor: '#???', // A definir
            statusText: 'JULGADO',
            data: getDataSessao()
        },
        'ADIADO': {
            iconColor: '#???', // A definir
            statusText: 'ADIADO',
            data: getDataSessao()
        },
        'ADIADO_935': {
            iconColor: '#???', // A definir
            statusText: 'ADIADO 935',
            data: getDataSessao()
        },
        'SOBRESTADO': {
            iconColor: '#???', // A definir
            statusText: 'SOBRESTADO',
            data: getDataSessao()
        },
        'DILIGENCIA': {
            iconColor: '#???', // A definir
            statusText: 'DILIGÊNCIA',
            data: getDataSessao()
        }
    };

    return configs[status] || configs['PAUTADO'];
}
```o" que servirá como **template base** para todos os 8 cards de status de julgamento. O layout, dimensões, tipografia e posicionamento são **fixos** - apenas a **cor do ícone** e o **texto do status** variam entre os cards.

## Estrutura do Layout Base

### 🎨 **Material Design Card Container**

**SVG Base (Card Background)**:
```svg
<rect x="4" width="225" height="80" rx="12" fill="#FEF7FF"></rect>
````

**CSS Container Principal**:

```css
/* Card Pautado - Material Design 3
Cards are versatile containers, holding anything from images to headlines, 
supporting text, buttons, lists, and other components. */

box-sizing: border-box;
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

/* M3/sys/light/surface */
background: #fef7ff;
/* M3/sys/light/outline-variant */
border: 1px solid #cac4d0;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 12px;

/* Layout automático */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;

/* State-layer (oculto por padrão) */
position: absolute;
visibility: hidden;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
```

### 🎨 **SVG Container Principal (Complementar)**

```svg
<svg width="263" height="161" viewBox="0 0 263 161" fill="none" xmlns="http://www.w3.org/2000/svg">
```

**Características Fixas**:

-   **Dimensões**: 263px × 161px
-   **ViewBox**: 0 0 263 161
-   **Namespace**: SVG padrão
-   **Fill**: none (transparente)

### 🔵 **Área do Ícone (IconAzul)**

**Posicionamento CSS**:

```css
position: absolute;
left: 6.22%;
right: 79.05%;
top: 28.07%;
bottom: 30.68%;
```

**Características Visuais**:

-   **Background**: #5C85B4 (azul - APENAS PARA PAUTADO)
-   **Border-radius**: Não especificado (retangular)
-   **Dimensões Calculadas**: ~14.73% largura × ~41.25% altura

**⚠️ VARIAÇÃO ENTRE CARDS**:

-   Esta é a **ÚNICA** área que muda de cor entre os 8 cards
-   Cada status terá sua cor específica de ícone

### 📝 **Área do Header (Título)**

**Posicionamento CSS**:

```css
position: absolute;
left: 26.19%;
right: 6.39%;
top: 23.75%;
bottom: 50%;
```

**Características Visuais**:

-   **Border**: 0.5px solid #000000
-   **Background**: Transparente
-   **Dimensões Calculadas**: ~67.42% largura × ~26.25% altura

**Conteúdo Fixo**:

-   **Texto**: "DATA DA SESSÃO"
-   **Tipografia**: M3/body/medium
-   **Cor**: #000000 (preto)
-   **Alinhamento**: Centralizado

### 📄 **Área do Subhead (Status)**

**Posicionamento CSS**:

```css
position: absolute;
left: 26.19%;
right: 12.64%;
top: 50%;
bottom: 24.03%;
```

**Características Visuais**:

-   **Border**: Nenhuma
-   **Background**: Transparente
-   **Dimensões Calculadas**: ~61.17% largura × ~25.97% altura

**⚠️ VARIAÇÃO ENTRE CARDS**:

-   Esta é a **SEGUNDA** área que muda entre os 8 cards
-   Cada status terá seu texto específico (ex: "PAUTADO", "JULGADO", "RETIRADO", etc.)

**Conteúdo para Card "Pautado"**:

-   **Texto**: "PAUTADO"
-   **Tipografia**: M3/body/medium
-   **Cor**: #000000 (preto)
-   **Alinhamento**: Centralizado

## Especificações Técnicas de Implementação

### 🔧 **Função Base - criarCardMaterialDesign()**

```javascript
function criarCardMaterialDesign(statusConfig) {
    const { iconColor, statusText, data } = statusConfig;

    // Container principal (FIXO) - Material Design 3
    const card = document.createElement("div");
    card.id = "eprobe-card-sessao";
    card.style.cssText = `
        box-sizing: border-box;
        position: absolute;
        width: 263px;
        height: 161px;
        font-family: Roboto, sans-serif;
        
        /* M3/sys/light/surface */
        background: #FEF7FF;
        /* M3/sys/light/outline-variant */
        border: 1px solid #CAC4D0;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 12px;
        
        /* Layout automático */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        gap: 10px;
    `;

    // SVG Base (FIXO) - Card Background
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "263");
    svg.setAttribute("height", "161");
    svg.setAttribute("viewBox", "0 0 263 161");
    svg.setAttribute("fill", "none");

    // Rect background (Material Design)
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", "4");
    rect.setAttribute("width", "225");
    rect.setAttribute("height", "80");
    rect.setAttribute("rx", "12");
    rect.setAttribute("fill", "#FEF7FF");
    svg.appendChild(rect);

    // IconAzul - COR VARIÁVEL
    const iconDiv = document.createElement("div");
    iconDiv.style.cssText = `
        position: absolute;
        left: 6.22%;
        right: 79.05%;
        top: 28.07%;
        bottom: 30.68%;
        background: ${iconColor}; /* VARIÁVEL */
    `;

    // Header - FIXO
    const headerDiv = document.createElement("div");
    headerDiv.textContent = "DATA DA SESSÃO"; // FIXO
    headerDiv.style.cssText = `
        position: absolute;
        left: 26.19%;
        right: 6.39%;
        top: 23.75%;
        bottom: 50%;
        border: 0.5px solid #000000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Roboto;
        font-weight: 500;
        color: #000000;
    `;

    // Subhead - TEXTO VARIÁVEL
    const subheadDiv = document.createElement("div");
    subheadDiv.textContent = statusText; // VARIÁVEL
    subheadDiv.style.cssText = `
        position: absolute;
        left: 26.19%;
        right: 12.64%;
        top: 50%;
        bottom: 24.03%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Roboto;
        font-weight: 500;
        color: #000000;
    `;

    // Montar card
    card.appendChild(svg);
    card.appendChild(iconDiv);
    card.appendChild(headerDiv);
    card.appendChild(subheadDiv);

    return card;
}
```

### 🎨 **Configurações Material Design 3 (Fixas para todos os 8 cards)**

**Estas configurações devem ser preservadas em TODOS os cards:**

```css
/* Material Design 3 - Card Base */
background: #fef7ff; /* M3/sys/light/surface */
border: 1px solid #cac4d0; /* M3/sys/light/outline-variant */
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 12px;

/* Layout Flexbox */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;

/* Tipografia M3/body/medium */
font-family: Roboto, sans-serif;
font-weight: 500;
color: #000000;

/* Posicionamento */
box-sizing: border-box;
position: absolute;
```

**SVG Background (Fixo para todos os 8 cards)**:

```svg
<rect x="4" width="225" height="80" rx="12" fill="#FEF7FF"></rect>
```

### 🎯 **Função de Configuração por Status**

```javascript
function obterConfigFigmaStatus(status) {
    const configs = {
        PAUTADO: {
            iconColor: "#5C85B4",
            statusText: "PAUTADO",
            data: getDataSessao(),
        },
        // Outros 7 status serão adicionados aqui
        // 'JULGADO': { iconColor: '#...', statusText: 'JULGADO', ... },
        // 'RETIRADO': { iconColor: '#...', statusText: 'RETIRADO', ... },
        // etc.
    };

    return configs[status] || configs["PAUTADO"];
}
```

## Posicionamento na Interface

### 🎯 **Localização Target**

-   **XPath**: `/html/body/div[2]/div[3]/div[2]/div/div[1]/form[2]/div[3]/div/div/fieldset[1]/div/div[1]/div[4]`
-   **Estratégia**: Posicionamento à direita do elemento target
-   **Método**: `position: absolute` com `document.evaluate()`

### 🔒 **Posicionamento Fixo (Colado na Tela)**

```css
position: fixed;
top: [target.rect.top]px;
left: [target.rect.right + 15]px;
z-index: 9999;
pointer-events: auto;
transition: all 0.3s ease;
```

**Características do Posicionamento Fixo**:

-   **Position**: `fixed` - Card fica "colado" na tela, não se move com scroll
-   **Referência**: Baseado na posição do elemento XPath na viewport
-   **Fallback**: Canto superior direito `top: 20px, right: 20px` se XPath não encontrado
-   **Z-index**: 9999 para ficar acima de outros elementos
-   **Transição**: Suave para mudanças de posição

## Tipografia Padrão

### 📝 **M3/body/medium (Figma)**

-   **Font-family**: Roboto
-   **Font-size**: 14px (estimado)
-   **Font-weight**: 500 (medium)
-   **Line-height**: Normal
-   **Color**: #000000

## Lista dos 8 Cards a Implementar

1. **PAUTADO** ✅ (Base implementada)
2. **JULGADO** (pendente - cor e texto)
3. **RETIRADO** (pendente - cor e texto)
4. **ADIADO** (pendente - cor e texto)
5. **SUSPENSO** (pendente - cor e texto)
6. **REDISTRIBUÍDO** (pendente - cor e texto)
7. **CONVERTIDO** (pendente - cor e texto)
8. **CANCELADO** (pendente - cor e texto)

## Arquivos de Implementação

### 📂 **Funções Principais**

-   **Arquivo**: `c:\eProbe\src\main.js`
-   **Funções Base**:
    -   `criarCardMaterialDesign(statusConfig)`
    -   `obterConfigFigmaStatus(status)`
    -   `aplicarEstilosSvgFigma()`
    -   `inserirCardNaInterface()`

### 🔧 **Namespace Global**

```javascript
window.SENT1_AUTO.criarCardMaterialDesign = criarCardMaterialDesign;
window.SENT1_AUTO.obterConfigFigmaStatus = obterConfigFigmaStatus;
```

## Status de Implementação

-   ✅ **Layout Base**: Implementado e aprovado
-   ✅ **Material Design 3**: Configurações CSS salvas e documentadas
-   ✅ **SVG Structure**: Configuração fixa definida
-   ✅ **Posicionamento**: XPath targeting implementado
-   ✅ **Card "Pautado"**: Funcionando perfeitamente
-   ✅ **Configurações Base**: Documentadas para futuros cards
-   ⏳ **7 Cards Restantes**: Aguardando especificações de cor e texto

## 📦 **Configurações Salvas para Futuros Cards**

### 🎨 **Material Design Card Base (PRESERVAR)**

```css
/* Background e bordas */
background: #fef7ff; /* M3/sys/light/surface */
border: 1px solid #cac4d0; /* M3/sys/light/outline-variant */
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 12px;

/* Layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;
```

### 📐 **SVG Background (PRESERVAR)**

```svg
<rect x="4" width="225" height="80" rx="12" fill="#FEF7FF"></rect>
```

### 🔧 **Dimensões e Posicionamento (PRESERVAR)**

```css
box-sizing: border-box;
position: absolute;
width: 263px;
height: 161px;
```

### 📝 **Tipografia Base (PRESERVAR)**

```css
font-family: Roboto, sans-serif;
font-weight: 500; /* M3/body/medium */
color: #000000;
```

### 🎯 **Áreas de Conteúdo (PRESERVAR POSIÇÕES)**

```css
/* Ícone - COR VARIÁVEL */
.icon-area {
    position: absolute;
    left: 6.22%;
    right: 79.05%;
    top: 28.07%;
    bottom: 30.68%;
}

/* Header - FIXO */
.header-area {
    position: absolute;
    left: 26.19%;
    right: 6.39%;
    top: 23.75%;
    bottom: 50%;
    border: 0.5px solid #000000;
}

/* Subhead - TEXTO VARIÁVEL */
.subhead-area {
    position: absolute;
    left: 26.19%;
    right: 12.64%;
    top: 50%;
    bottom: 24.03%;
}
```

## Próximos Passos

1. **Receber especificações** dos 7 status restantes:

    - Cor do ícone para cada status (hex color)
    - Texto exato para cada status

2. **Implementar função `obterConfigFigmaStatus()`** com todos os 8 casos

3. **Preservar todas as configurações Material Design 3** documentadas

4. **Testar cada card** individualmente

5. **Implementar detecção automática** do status atual do processo

6. **Integrar com sistema de detecção** de dados da sessão existente

---

**✅ LAYOUT BASE APROVADO E DOCUMENTADO**  
**Pronto para implementação dos 7 cards restantes**
