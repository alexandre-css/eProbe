# Teste do Layout Figma Correto

## 🎯 RESULTADO ESPERADO

O card deve aparecer **EXATAMENTE** como nas imagens fornecidas:

### **Estrutura HORIZONTAL:**

```
[📅] PAUTADO              <- FIXO (Header do status)
     Sessão: 29/01/2025   <- VARIÁVEL (Data da sessão)
```

## 🧪 COMO TESTAR

Abra o console do navegador em uma página do eProc e execute:

```javascript
// Testar layout com status "Pautado"
window.SENT1_AUTO.testarMaterialBaseLayout();

// Testar layout com XPath + Material Design
window.SENT1_AUTO.testarXPathMaterialDesign();
```

## ✅ VALIDAÇÃO

O card deve ter:

1. **Layout horizontal** (ícone à esquerda + texto à direita)
2. **Ícone colorido** conforme status (#5C85B4 para Pautado)
3. **Texto principal**: Nome do status (ex: "Pautado")
4. **Texto secundário**: "Sessão: DD/MM/AAAA"
5. **Dimensões**: 225×80px
6. **Background**: #FEF7FF
7. **Border**: 1px solid #CAC4D0

## 🎨 STATUS DISPONÍVEIS

1. **PAUTADO** - Ícone: #5C85B4 - "Pautado"
2. **RETIRADO** - Ícone: #CE2D4F - "Retirado de Pauta"
3. **VISTA** - Ícone: #FFBF46 - "Pedido de Vista"
4. **JULGADO** - Ícone: #3AB795 - "Julgado"
5. **ADIADO** - Ícone: #F55D3E - "Adiado"
6. **ADIADO_935** - Ícone: #731963 - "Adiado (art. 935)"
7. **SOBRESTADO** - Ícone: #FCB0B3 - "Sobrestado (art. 942)"
8. **DILIGENCIA** - Ícone: #00171F - "Conv. em Diligência"

## 🚀 STATUS

✅ Layout corrigido para estrutura horizontal  
✅ Status fixo por tipo (conforme Figma)  
✅ Data variável por processo  
✅ 8 configurações de status implementadas  
✅ Cores corretas das especificações Figma

**Agora o card deve ficar IGUAL às imagens fornecidas!**
