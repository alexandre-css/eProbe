# 🆕 NOVOS ÍCONES DE INTERFACE - eProbe

## ✅ 3 NOVOS ÍCONES ADICIONADOS

### ❓ Ícones de Interface e Controle

#### 1. **Ajuda (Interrogação)**

```html
<!-- ANTES -->
<img alt="Ajuda localizadores" height:="" 12px;="" width:=""
style="border:0px;cursor:default;" src="imagens/duvida.png"

<!-- DEPOIS -->
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2.25"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"
>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
</svg>
```

#### 2. **Ocultar (Ver Resumo)**

```html
<!-- ANTES -->
<img src="infra_css/imagens/ver_resumo.gif" />

<!-- DEPOIS -->
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2.25"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-square-minus-icon lucide-square-minus"
>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M8 12h8" />
</svg>
```

#### 3. **Mostrar (Ver Tudo)**

```html
<!-- ANTES -->
<img src="infra_css/imagens/ver_tudo.gif" />

<!-- DEPOIS -->
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2.25"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-square-plus-icon lucide-square-plus"
>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M8 12h8" />
    <path d="M12 8v8" />
</svg>
```

## 🎯 IMPLEMENTAÇÃO TÉCNICA

### Seletores Implementados

Cada ícone possui múltiplos seletores para máxima detecção:

```javascript
// Ícone de Ajuda
selectors: [
    'img[src*="duvida.png"]', // Por arquivo
    'img[alt*="Ajuda"]', // Por alt text
    'img[title*="Ajuda"]', // Por título
];

// Ícone de Ocultar
selectors: [
    'img[src*="ver_resumo.gif"]', // Por arquivo
    'img[title*="Ocultar"]', // Por título
    'img[alt*="Resumo"]', // Por alt text
];

// Ícone de Mostrar
selectors: [
    'img[src*="ver_tudo.gif"]', // Por arquivo
    'img[title*="Mostrar"]', // Por título
    'img[alt*="Ver Tudo"]', // Por alt text
];
```

## 🔧 ONDE FORAM IMPLEMENTADOS

### 1. Função `substituirIconesFerramentas()`

Os 3 novos ícones foram adicionados ao objeto `ferramentasIcones`:

```javascript
// Ícones de ajuda/interrogação
"Ajuda": {
    selectors: [
        'img[src*="duvida.png"]',
        'img[alt*="Ajuda"]',
        'img[title*="Ajuda"]',
    ],
    newSvg: `<svg>...</svg>`
},
// Ícones de ocultar/resumo
"Ocultar": {
    selectors: [
        'img[src*="ver_resumo.gif"]',
        'img[title*="Ocultar"]',
        'img[alt*="Resumo"]',
    ],
    newSvg: `<svg>...</svg>`
},
// Ícones de mostrar/ver tudo
"Mostrar": {
    selectors: [
        'img[src*="ver_tudo.gif"]',
        'img[title*="Mostrar"]',
        'img[alt*="Ver Tudo"]',
    ],
    newSvg: `<svg>...</svg>`
}
```

### 2. Função `substituirIconesGlobalmente()`

Os 3 novos ícones foram adicionados ao array `iconesGlobais`:

```javascript
{
    // Ícones de ajuda/interrogação
    selectors: ['img[src*="duvida.png"]', 'img[alt*="Ajuda"]', 'img[title*="Ajuda"]'],
    newSvg: '<svg>...</svg>',
    name: "Ajuda",
},
{
    // Ícones de ocultar/resumo
    selectors: ['img[src*="ver_resumo.gif"]', 'img[title*="Ocultar"]', 'img[alt*="Resumo"]'],
    newSvg: '<svg>...</svg>',
    name: "Ocultar",
},
{
    // Ícones de mostrar/ver tudo
    selectors: ['img[src*="ver_tudo.gif"]', 'img[title*="Mostrar"]', 'img[alt*="Ver Tudo"]'],
    newSvg: '<svg>...</svg>',
    name: "Mostrar",
}
```

### 3. Função `substituirIconesFieldsetAcoes()`

Os 3 novos ícones foram adicionados ao array `imgsBySrc`:

```javascript
{
    selector: 'img[src*="duvida.png"]',
    newSvg: '<svg>...</svg>',
},
{
    selector: 'img[src*="ver_resumo.gif"]',
    newSvg: '<svg>...</svg>',
},
{
    selector: 'img[src*="ver_tudo.gif"]',
    newSvg: '<svg>...</svg>',
}
```

### 4. Função `debugIconesSubstituicao()`

9 novos seletores de teste foram adicionados:

```javascript
const iconesTeste = [
    // ... ícones existentes ...
    'img[src*="duvida.png"]', // ⭐ NOVO
    'img[src*="ver_resumo.gif"]', // ⭐ NOVO
    'img[src*="ver_tudo.gif"]', // ⭐ NOVO
    'img[title*="Ajuda"]', // ⭐ NOVO
    'img[title*="Ocultar"]', // ⭐ NOVO
    'img[title*="Mostrar"]', // ⭐ NOVO
    'img[alt*="Ajuda"]', // ⭐ NOVO
    'img[alt*="Resumo"]', // ⭐ NOVO
    'img[alt*="Ver Tudo"]', // ⭐ NOVO
];
```

## 🧪 TESTE COMPLETO

### Comando de Teste

```javascript
// Execute no console da página do eProc
window.SENT1_AUTO.debugIconesSubstituicao();
```

### Novos Seletores Testados

O sistema agora testa **30 seletores diferentes** (incluindo os 9 novos).

## 🎨 CARACTERÍSTICAS DOS NOVOS ÍCONES

### Design Consistente

-   **Ícone de Ajuda**: Círculo com ponto de interrogação (stroke-width: 2.25px)
-   **Ícone de Ocultar**: Quadrado com símbolo de menos (stroke-width: 2.25px)
-   **Ícone de Mostrar**: Quadrado com símbolo de mais (stroke-width: 2.25px)

### Dimensões

-   **Ajuda, Ocultar, Mostrar**: 24px x 24px (ligeiramente maiores para melhor visibilidade)

### Cores e Estilos

-   **Cor**: `currentColor` (herda cor do elemento pai)
-   **Preenchimento**: `none` (apenas contorno)
-   **Bordas**: Arredondadas (`stroke-linecap="round"`)

## 📊 RESUMO DA ATUALIZAÇÃO

### Total de Ícones Suportados

**ANTES**: 13 tipos de ícones
**DEPOIS**: **16 tipos de ícones** (+ 3 novos)

### Novos Ícones por Categoria

1. **Interface**: Ajuda (interrogação)
2. **Controle**: Ocultar (ver resumo)
3. **Controle**: Mostrar (ver tudo)

### Cobertura de Detecção

-   **Por arquivo**: 3 novos seletores `img[src*="..."]`
-   **Por título**: 3 novos seletores `img[title*="..."]`
-   **Por alt text**: 3 novos seletores `img[alt*="..."]`

---

**🚀 STATUS**: 3 novos ícones de interface implementados com sucesso em todas as funções de substituição.
