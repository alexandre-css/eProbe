# CORREÇÃO: Tooltips com Cores de Diligência do Figma

## 🎯 Problema Identificado

O sistema de tooltips não estava refletindo as cores corretas para o status "Diligência" conforme especificações do Figma.

### ❌ Situação Anterior
- **Cards**: Diligência com cor preta #00171F ✅ (correto)
- **Tooltips**: Diligência sem cor específica ❌ (usando cor padrão cinza)

### ✅ Solução Implementada

Atualizadas **2 funções principais** do sistema de tooltips:

## 📝 Funções Corrigidas

### 1. `adicionarTooltipDiretoNoCard()`
**Localização**: `src/main.js` ~linha 17730

**Antes**:
```javascript
// Sem verificação para diligência
} else if (status.includes("sobrestado")) {
    corStatus = "#8B5CF6"; // Roxo
}
```

**Depois**:
```javascript
} else if (status.includes("sobrestado")) {
    corStatus = "#FCB0B3"; // Rosa do Figma
} else if (
    status.includes("diligência") ||
    status.includes("diligencia")
) {
    corStatus = "#00171F"; // Preto oficial do Figma para Diligência
}
```

### 2. `criarHTMLTooltip()`
**Localização**: `src/main.js` ~linha 2007

**Antes**:
```javascript
// Sem verificação para diligência
} else if (status.includes("sobrestado")) {
    corHeader = "#8B5CF6"; // Roxo
}
```

**Depois**:
```javascript
} else if (status.includes("sobrestado")) {
    corHeader = "#FCB0B3"; // Rosa do Figma
} else if (
    status.includes("diligência") ||
    status.includes("diligencia")
) {
    corHeader = "#00171F"; // Preto oficial do Figma para Diligência
}
```

## 🎨 Mapeamento Completo de Cores (Figma)

| Status | Cor Hex | Aplicação |
|--------|---------|-----------|
| **PAUTADO/INCLUÍDO** | `#5C85B4` | Azul padrão |
| **RETIRADO** | `#CE2D4F` | Vermelho |
| **VISTA** | `#FFBF46` | Amarelo |
| **JULGADO** | `#3AB795` | Verde |
| **ADIADO** | `#F55D3E` | Laranja |
| **SOBRESTADO** | `#FCB0B3` | Rosa |
| **DILIGÊNCIA** | `#00171F` | **Preto** ← Corrigido |

## 🔧 Detalhes Técnicos

### Verificação Dupla para Acentos
O sistema verifica tanto a versão com acento quanto sem acento:
```javascript
status.includes("diligência") || status.includes("diligencia")
```

### Aplicação no Tooltip
- **Background**: Cor do status com 15% de transparência
- **Border**: Cor sólida do status
- **Badge**: Cor sólida do status como fundo
- **Ícones**: Cor sólida do status

## ✅ Status da Correção

- [x] `adicionarTooltipDiretoNoCard()` corrigida
- [x] `criarHTMLTooltip()` corrigida  
- [x] Cores do Figma implementadas
- [x] Verificação de acentos implementada
- [x] Documentação criada

## 🧪 Como Testar

```javascript
// 1. Verificar namespace atual
console.log("🔍 Funções disponíveis:", Object.keys(window.SENT1_AUTO));

// 2. Detectar sessões
const sessoes = window.SENT1_AUTO.detectarSessoesUnificado(true);

// 3. Verificar se há sessões com Diligência
if (sessoes && sessoes.todasSessoes) {
    const diligencias = sessoes.todasSessoes.filter(s => 
        s.status && s.status.toLowerCase().includes('diligência')
    );
    console.log("📋 Sessões de Diligência:", diligencias);
}
```

## 📸 Resultado Esperado

Após a correção, tooltips de sessões com status "Diligência" devem exibir:
- **Cor principal**: Preto #00171F
- **Background**: Preto com transparência
- **Badge "ATUAL"**: Fundo preto com texto branco
- **Bordas**: Preto sólido

---

**Data**: 26 de julho de 2025  
**Arquivos Modificados**: `src/main.js`  
**Funções Impactadas**: 2 funções de tooltip  
**Status**: ✅ Implementado e testado
