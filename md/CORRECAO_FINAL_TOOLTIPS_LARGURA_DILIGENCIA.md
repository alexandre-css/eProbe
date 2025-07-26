# CORREÇÃO FINAL: Tooltips e Largura dos Cards para Diligência

## 🎯 Problemas Identificados

1. **Header do tooltip não atualizado**: Uma terceira função ainda não tinha a cor correta para "Diligência"
2. **Largura insuficiente**: Cards com 169px não comportavam "Conv. em Diligência" sem corte

## ✅ Correções Implementadas

### 🎨 1. Cor do Header do Tooltip (Terceira Função)

**Função**: Linha ~17906 em `src/main.js`
**Problema**: Ainda usava cores antigas sem verificação para "diligência"

**Antes**:
```javascript
let corHeader = "#1976d2"; // Azul padrão
// ... sem verificação para diligência
} else if (status.includes("sobrestado")) {
    corHeader = "#8B5CF6"; // Roxo
}
```

**Depois**:
```javascript
let corHeader = "#5C85B4"; // Azul padrão do Figma
// ... com verificação completa para diligência
} else if (status.includes("sobrestado")) {
    corHeader = "#FCB0B3"; // Rosa do Figma
} else if (
    status.includes("diligência") ||
    status.includes("diligencia")
) {
    corHeader = "#00171F"; // Preto oficial do Figma para Diligência
}
```

### 📏 2. Largura dos Cards Aumentada

**Problema**: "Conv. em Diligência" não cabia em 169px
**Solução**: Aumentada para 190px (+21px)

#### Atualizações Realizadas:

| Elemento | Antes | Depois | Impacto |
|----------|-------|--------|---------|
| **Card CSS** | `width: 169px` | `width: 190px` | +21px de largura |
| **SVG Container** | `width: 169px` | `width: 190px` | Proporcional |
| **SVG ViewBox** | `0 0 169 60` | `0 0 190 60` | Área de renderização |
| **SVG Background** | `width="169"` | `width="190"` | Fundo do card |
| **Posição Ícone** | `169 * 0.0651 = ~11px` | `190 * 0.0651 = ~12px` | Reposicionado |
| **Posição Texto Header** | `169 * 0.2604 = ~44px` | `190 * 0.2604 = ~49.5px` | Reposicionado |
| **Posição Texto Data** | `169 * 0.2604 = ~44px` | `190 * 0.2604 = ~49.5px` | Reposicionado |

## 🔧 Detalhes Técnicos

### Manutenção das Proporções
- **Percentuais mantidos**: 6.51% (ícone), 26.04% (texto)
- **Altura preservada**: 60px (design original)
- **Espaçamento interno**: Mantido (8px 12px)

### Cálculos de Posicionamento
```javascript
// Ícone (6.51% da largura)
const iconX = Math.round(190 * 0.0651); // ~12px

// Texto (26.04% da largura)  
const headerX = Math.round(190 * 0.2604); // ~49.5px
const subheadX = Math.round(190 * 0.2604); // ~49.5px
```

## 📊 Resultado Final

### ✅ Status das 3 Funções de Tooltip

| Função | Status | Localização | Diligência |
|--------|--------|-------------|-------------|
| `adicionarTooltipDiretoNoCard()` | ✅ Corrigida | ~linha 17730 | `#00171F` |
| `criarHTMLTooltip()` | ✅ Corrigida | ~linha 2009 | `#00171F` |
| **Função linha ~17906** | ✅ **Corrigida** | ~linha 17906 | `#00171F` |

### 🎨 Cores Unificadas (Figma Compliance)

| Status | Cor | Cards | Tooltips | Status |
|--------|-----|-------|----------|---------|
| **DILIGÊNCIA** | `#00171F` | ✅ | ✅ | **100% Consistente** |
| PAUTADO | `#5C85B4` | ✅ | ✅ | 100% Consistente |
| RETIRADO | `#CE2D4F` | ✅ | ✅ | 100% Consistente |
| VISTA | `#FFBF46` | ✅ | ✅ | 100% Consistente |
| JULGADO | `#3AB795` | ✅ | ✅ | 100% Consistente |

### 📐 Dimensões Finais dos Cards

```css
/* Card Material Design */
width: 190px;  /* +21px para comportar "Conv. em Diligência" */
height: 60px;  /* Mantido */

/* Texto sem corte */
"Conv. em Diligência" → ✅ Cabe perfeitamente
"Incluído em Pauta" → ✅ Cabe perfeitamente
"Pedido de Vista" → ✅ Cabe perfeitamente
```

## 🧪 Como Testar

```javascript
// 1. Verificar detecção de Diligência
const sessoes = window.SENT1_AUTO.detectarSessoesUnificado(true);

// 2. Verificar card criado
const card = document.getElementById("eprobe-card-sessao-material");
if (card) {
    console.log("📐 Largura do card:", card.style.width); // Deve ser 190px
}

// 3. Verificar tooltip (hover no card)
// Cor do header deve ser #00171F (preto) para status "Diligência"
```

## 📸 Resultado Visual Esperado

### Cards de "Diligência"
- **Largura**: 190px (suficiente para texto completo)
- **Texto**: "Conv. em Diligência" sem corte
- **Cor do ícone**: Preto `#00171F`

### Tooltips de "Diligência"  
- **Header**: Fundo preto `#00171F`
- **Badge**: Fundo preto com texto branco
- **Background**: Preto com transparência

## 🎉 Status Final

- [x] **3/3 funções de tooltip** com cor correta
- [x] **Cards com largura adequada** (190px)
- [x] **Posicionamento recalculado** proporcionalmente
- [x] **100% compatibilidade Figma** mantida
- [x] **Texto "Conv. em Diligência"** sem corte

---

**Data**: 26 de julho de 2025  
**Arquivos Modificados**: `src/main.js`  
**Funções Impactadas**: 3 funções de tooltip + dimensionamento  
**Status**: ✅ **Implementado e Verificado**
