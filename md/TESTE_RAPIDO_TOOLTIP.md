# 🧪 TESTE RÁPIDO PARA TOOLTIP - JULHO 2025

## 🚀 COMANDOS PARA EXECUTAR NO CONSOLE

Execute estes comandos **um por vez** no console do navegador (F12):

### 1. **Verificar se funções existem**
```javascript
console.log("🔍 Funções disponíveis:", Object.keys(window.SENT1_AUTO));
```

### 2. **Testar função específica de tooltip**
```javascript
window.SENT1_AUTO.testarFuncaoTooltip();
```

### 3. **Executar diagnóstico completo**
```javascript
window.SENT1_AUTO.diagnosticarECorrigirTooltip();
```

### 4. **Verificar se card existe**
```javascript
console.log("Card de sessão:", document.getElementById("eprobe-data-sessao"));
```

### 5. **Verificar tooltip existente**
```javascript
console.log("Tooltip existente:", document.querySelector(".eprobe-tooltip-sessoes"));
```

### 6. **Forçar criação de card para teste**
```javascript
window.SENT1_AUTO.forcarCriacaoCardTeste();
```

## 🔧 SE AS FUNÇÕES NÃO EXISTIREM

Se você receber `"Cannot read properties of undefined"`, execute:

```javascript
console.log("Namespace:", window.SENT1_AUTO);
console.log("Tipo:", typeof window.SENT1_AUTO);
```

## 📋 RESULTADO ESPERADO

- ✅ Todas as funções devem existir no namespace
- ✅ `testarFuncaoTooltip()` deve mostrar logs detalhados
- ✅ Card deve ser encontrado na página
- ✅ Tooltip deve aparecer **abaixo** do card no hover

## 🚨 SE CONTINUAR NÃO FUNCIONANDO

Me informe **exatamente** qual erro aparece no console quando você executa os comandos acima.

**Possíveis erros**:
- `Cannot read properties of undefined` = função não existe
- `Card não encontrado` = elemento não criado na página
- `Tooltip não posiciona corretamente` = problema de CSS
- Outros erros = me informe o erro exato

---

**Data**: 24 de julho de 2025  
**Status**: Pronto para teste  
**Ação**: Execute comandos no console e me informe resultado
