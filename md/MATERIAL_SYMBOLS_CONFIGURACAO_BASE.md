# 🎯 Configuração Material Symbols - Base de Referência eProbe

## ✅ CONFIGURAÇÃO FUNCIONAL DEFINITIVA

Esta é a configuração **TESTADA e FUNCIONANDO** para Material Symbols com `font-variation-settings` aplicando corretamente o preenchimento (FILL=1).

### 📋 Componentes Essenciais

#### 1. **Import da Fonte Variável**

```css
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");
```

#### 2. **@font-face Explícito (CRÍTICO)**

```css
@font-face {
    font-family: "Material Symbols Outlined Variable";
    src: url("https://fonts.gstatic.com/s/materialsymbolsoutlined/v193/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY3JI.woff2")
        format("woff2-variations");
    font-weight: 100 700;
    font-style: normal;
    font-display: swap;
}
```

#### 3. **Configuração Base (FILL=0 por padrão)**

```css
.material-symbols-outlined {
    font-family: "Material Symbols Outlined Variable",
        "Material Symbols Outlined" !important;
    font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24 !important;
    font-weight: normal !important;
    font-style: normal !important;
    font-size: 18px !important;
    font-feature-settings: "liga" 1 !important;
    -webkit-text-stroke: 0.1px black !important;
    line-height: 1;
    vertical-align: middle;
    display: inline-block;
    -webkit-user-select: none;
    user-select: none;
    pointer-events: none;
}
```

#### 4. **Template para Ícones Preenchidos**

```css
.material-symbols-outlined.COR_PERSONALIZADA {
    font-family: "Material Symbols Outlined Variable",
        "Material Symbols Outlined" !important;
    color: #HEX_COLOR !important;
    font-variation-settings: "FILL" 1, "wght" 600, "GRAD" 0, "opsz" 24 !important;
    -webkit-text-stroke: 0.3px black !important;
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3)) !important;

    /* Debug: Força atualização visual */
    transform: translateZ(0) !important;
    will-change: font-variation-settings !important;
}
```

### 🎨 Exemplos Implementados

#### Cream (chat_bubble)

```css
.material-symbols-outlined.cream {
    color: #f8ffd6 !important;
    font-variation-settings: "FILL" 1, "wght" 600, "GRAD" 0, "opsz" 24 !important;
}
```

#### Orange (edit_document)

```css
.material-symbols-outlined.orange {
    color: #ff8a65 !important;
    font-variation-settings: "FILL" 1, "wght" 600, "GRAD" 0, "opsz" 24 !important;
}
```

### 🔧 Parâmetros dos Eixos Variáveis

| Eixo     | Valores                       | Descrição                                        |
| -------- | ----------------------------- | ------------------------------------------------ |
| **FILL** | `0` = vazio, `1` = preenchido | Controla preenchimento do ícone                  |
| **wght** | `100-700`                     | Espessura do traço (300=fino, 600=grosso)        |
| **GRAD** | `-50 a 200`                   | Gradação para ajuste fino da espessura           |
| **opsz** | `20-48`                       | Tamanho óptico (ajusta para diferentes tamanhos) |

### ⚠️ PONTOS CRÍTICOS para Funcionar

1. **USAR FONTE VARIÁVEL**: URL deve incluir ranges dos eixos
2. **@font-face OBRIGATÓRIO**: Define fonte variável explicitamente
3. **font-family DUPLO**: Variável primeiro, padrão como fallback
4. **font-feature-settings "liga"**: Essencial para ligaduras dos nomes
5. **transform: translateZ(0)**: Força rendering no browser
6. **will-change**: Otimiza mudanças de font-variation-settings

### 🚀 Como Adicionar Novos Ícones Preenchidos

1. **Copie o template** da seção 4
2. **Substitua COR_PERSONALIZADA** pelo nome da classe
3. **Defina #HEX_COLOR** com a cor desejada
4. **Ajuste wght** se necessário (300=fino, 600=forte)
5. **Use no HTML**: `<span class="material-symbols-outlined NOVA_COR">nome_icone</span>`

### 📝 Manifest.json - Recursos Web

```json
"web_accessible_resources": [
    {
        "resources": ["src/material-icons.css"],
        "matches": ["https://eproc1g.tjsc.jus.br/*", "https://eproc2g.tjsc.jus.br/*"]
    }
]
```

### 🎯 Resultado Final

-   ✅ **Ícones preenchidos** com FILL=1 funcionando
-   ✅ **Cores customizadas** mantidas
-   ✅ **Contorno preto** para definição
-   ✅ **Drop shadow** para profundidade
-   ✅ **Compatibilidade** com Chrome/Edge
-   ✅ **Performance otimizada** com will-change

---

**📅 Criado em**: 22 de julho de 2025  
**🔧 Status**: TESTADO e FUNCIONANDO  
**🎯 Projeto**: eProbe Chrome Extension  
**📋 Uso**: Referência para implementação de novos Material Symbols preenchidos
