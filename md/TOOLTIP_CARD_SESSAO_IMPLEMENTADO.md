# Tooltip Card de Sessão - Implementado ✅

## ✅ Problemas Corrigidos

### 🚫 Problema: Card fechava ao clicar
**ANTES**: Card tinha event listener `onclick` que executava `card.remove()`
**DEPOIS**: Click agora alterna tooltip (mostra/oculta)

### 🛠️ Solução Implementada

#### 1. Event Listener Removido
```javascript
// ❌ ANTES (problemático):
card.onclick = (e) => {
    e.preventDefault();
    card.style.animation = "slideOutCard 0.2s ease-in forwards";
    setTimeout(() => card.remove(), 200);
};

// ✅ DEPOIS (funcional):
card.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (tooltip.style.display === 'block') {
        ocultarTooltip();
    } else {
        mostrarTooltip();
    }
};
```

#### 2. Sistema de Tooltip Implementado

**Estrutura HTML do Tooltip**:
```html
<div id="eprobe-tooltip-sessoes" style="...">
    <!-- Header com ícone clock e contador -->
    <div style="background: #F7F2FA; padding: 16px;">
        <svg>clock icon</svg>
        <div>Histórico de Sessões</div>
        <div>5 eventos encontrados</div>
    </div>
    
    <!-- Lista de sessões -->
    <div style="padding: 16px;">
        <div style="border: 1px solid #cor; border-radius: 8px;">
            <div>STATUS + badge ATUAL</div>
            <div>📅 data</div>
            <div>🏛️ orgao</div>
            <div>tipo</div>
        </div>
        <!-- ... outras sessões ... -->
    </div>
</div>
```

**Comportamento do Tooltip**:
- **Mouse hover**: Mostra tooltip após hover
- **Mouse leave**: Oculta tooltip após 200ms delay
- **Click no card**: Alterna tooltip (toggle)
- **Hover no tooltip**: Cancela ocultação
- **Leave do tooltip**: Oculta tooltip

#### 3. Dados de Entrada

**Estrutura esperada**:
```javascript
const cardInfo = {
    status: "PAUTADO",
    data: "28/01/2025", 
    orgao: "2ª CÂMARA",
    tipo: "Incluído em Pauta",
    sessoes: [ // Array de sessões históricas
        {
            status: "PAUTADO",
            data: "28/01/2025",
            orgao: "2ª CÂMARA", 
            tipo: "Incluído em Pauta",
            cor: "#5C85B4" // Cor específica do status
        },
        {
            status: "ADIADO", 
            data: "20/01/2025",
            orgao: "2ª CÂMARA",
            tipo: "Sessão Adiada",
            cor: "#F55D3E"
        }
        // ... mais sessões históricas
    ]
};
```

#### 4. Estilos CSS Aplicados

**Card principal**: Material Design 169px × 60px
**Tooltip**: 
- Position: absolute, top: 100%
- Background: #FFFBFE 
- Border: 1px solid #CAC4D0
- Border-radius: 12px
- Box-shadow: Material Design elevation
- Max-height: 300px com scroll
- Transition: opacity 0.2s

**Sessão atual**: Destacada com border colorida e badge "ATUAL"

## 🧪 Funções de Teste Atualizadas

### `testarCardFigmaAtualizado()`
Teste com 4 variações de status, cada uma com histórico de sessões diferente:
- PAUTADO: 3 sessões históricas
- JULGADO: 2 sessões históricas  
- RETIRADO: Sem histórico
- SOBRESTADO: 4 sessões históricas

### `testarTooltipSessoes()` ⭐ NOVA
Teste específico do tooltip com 5 sessões históricas completas.

**Como usar**:
```javascript
// No console do navegador (páginas eProc):
window.SENT1_AUTO.testarTooltipSessoes();

// Ou teste completo:
window.SENT1_AUTO.testarCardFigmaAtualizado();
```

## 🎯 Resultado Final

✅ **Card não fecha mais ao clicar**
✅ **Tooltip aparece no hover**  
✅ **Tooltip alterna no click**
✅ **Múltiplas sessões exibidas**
✅ **Sessão atual destacada**
✅ **Cores por status aplicadas**
✅ **Design Material consistente**

**Próximos passos**: Testar com dados reais do sistema eProc.
