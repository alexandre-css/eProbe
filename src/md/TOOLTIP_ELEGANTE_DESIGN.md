# 🎨 Tooltip Elegante - Design System eProbe

## 📋 Visão Geral

O tooltip elegante do eProbe foi redesenhado com um design minimalista e profissional, utilizando ícones Lucide SVG e uma paleta de cores sutil inspirada no Tailwind CSS.

## 🎨 Design System

### **Paleta de Cores**

```css
• Background: #ffffff (branco puro)
• Bordas: #e5e7eb (cinza 200)
• Texto Principal: #374151 (cinza 700)
• Texto Secundário: #6b7280 (cinza 500)
• Accent: #3b82f6 (azul 500)
• Hover: #f9fafb (cinza 50)
```

### **Typography**

```css
• Font Family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
• Header: 13px, font-weight 600
• Data: 12px, font-weight 500
• Status: 11px, normal
• Badge: 9px, font-weight 500, uppercase
```

### **Spacing & Layout**

```css
• Border Radius: 8px (tooltip), 4px (elementos internos)
• Padding: 12px-14px (header), 6px-14px (items)
• Gap: 8px-10px entre elementos
• Min Width: 240px
```

## 🔧 Componentes

### **1. Header**

```html
<div class="eprobe-tooltip-header">
    <svg><!-- Ícone de calendário Lucide --></svg>
    <span>Histórico de Sessões</span>
</div>
```

**Características:**

-   ✅ Ícone SVG de calendário (Lucide)
-   ✅ Tipografia consistente
-   ✅ Alinhamento perfeito

### **2. Divider**

```html
<div class="eprobe-tooltip-divider"></div>
```

**Características:**

-   ✅ Linha sutil de 1px
-   ✅ Cor #f3f4f6 (cinza 100)
-   ✅ Separação visual clara

### **3. Session Items**

```html
<div class="eprobe-tooltip-session current">
    <div class="session-icon"><!-- SVG Icon --></div>
    <div class="session-info">
        <div class="session-date">10/04/2025</div>
        <div class="session-status">Retirado</div>
    </div>
    <div class="session-badge">Atual</div>
</div>
```

**Características:**

-   ✅ Layout flexível bem estruturado
-   ✅ Ícone SVG específico por status
-   ✅ Badge azul para sessão atual
-   ✅ Hover effect suave

## 🎯 Ícones Lucide SVG

### **Status Icons Mapping**

```javascript
'Julgado' → Check icon (✓)
'Retirado' → X Circle icon (⊗)
'Sobrestado' → Alert Circle icon (!)
'Pedido de Vista' → Eye icon (👁)
'Pautado' → Clock icon (🕐)
Default → Info icon (ⓘ)
```

### **Especificações dos Ícones**

```css
• Tamanho: 12x12px
• Stroke: currentColor
• Stroke Width: 2px
• Estilo: outline (não preenchido)
```

## 🎨 Estados Visuais

### **Sessão Normal**

```css
• Background: transparente
• Hover: #f9fafb
• Ícone: background #f3f4f6, color #6b7280
• Data: color #1f2937
• Status: color #6b7280
```

### **Sessão Atual**

```css
• Background: #eff6ff (azul 50)
• Border Left: 3px solid #3b82f6 (azul 500)
• Ícone: background #dbeafe, color #3b82f6
• Data: color #1e40af (azul 700)
• Status: color #3b82f6 (azul 500)
• Badge: background #3b82f6, color white
```

## 📐 Layout Responsivo

### **Posicionamento Inteligente**

```javascript
1. Padrão: Centralizado acima do elemento
2. Fallback: Abaixo se não couber acima
3. Ajuste horizontal: Evita sair da tela
4. Margem: 12px de distância
```

### **Dimensões**

```css
• Min Width: 240px
• Max Width: Automático (baseado no conteúdo)
• Height: Automático (baseado no número de sessões)
```

## 🚀 Melhorias Implementadas

### **✅ Visual**

-   Remove emojis coloridos
-   Design clean e profissional
-   Consistência com design systems modernos
-   Hierarquia visual clara

### **✅ Funcional**

-   Hover effects suaves
-   Transições CSS elegantes
-   Posicionamento inteligente
-   Responsividade automática

### **✅ Acessibilidade**

-   Contraste adequado
-   Tamanhos de fonte legíveis
-   Espaçamento generoso
-   Indicações visuais claras

## 🧪 Como Testar

### **Teste Rápido**

```javascript
// No console do eProc
window.SENT1_AUTO.testarMultiplasSessoes();
```

**Resultado esperado:**

-   ✅ Card limpo com "4 sessões (passe o mouse para ver histórico)"
-   ✅ Tooltip branco elegante ao fazer hover
-   ✅ Ícones SVG apropriados para cada status
-   ✅ Badge "ATUAL" azul na primeira sessão
-   ✅ Hover effects suaves

### **Verificar Elementos**

1. **Header**: Ícone de calendário + "Histórico de Sessões"
2. **Divider**: Linha sutil de separação
3. **Sessões**: Layout estruturado com ícones SVG
4. **Badge**: "ATUAL" em azul na primeira sessão
5. **Hover**: Background cinza claro nos itens

## 🎯 Antes vs Depois

### **❌ Antes (Removido)**

-   Emojis coloridos (📅, 🔹, •)
-   Background escuro (#000000)
-   Cores excessivas por status
-   Design pesado e informal

### **✅ Depois (Implementado)**

-   Ícones SVG Lucide profissionais
-   Background branco limpo
-   Paleta de cores sutil
-   Design minimalista e elegante

## 🔧 Customização

### **Modificar Cores**

```css
/* Trocar tema azul por verde */
.eprobe-tooltip-session.current {
    background-color: #ecfdf5; /* green-50 */
    border-left: 3px solid #10b981; /* green-500 */
}
```

### **Ajustar Espaçamento**

```css
/* Aumentar padding interno */
.eprobe-tooltip-session {
    padding: 8px 16px; /* padrão: 6px 14px */
}
```

### **Personalizar Ícones**

```javascript
// Adicionar novo ícone para status específico
const icons = {
    "Novo Status": `<svg><!-- SVG customizado --></svg>`,
};
```

---

**Versão:** 3.0 - Tooltip Elegante  
**Data:** Julho 2025  
**Design:** Minimalista, Profissional, Lucide Icons  
**Status:** ✅ Implementado e Funcional
