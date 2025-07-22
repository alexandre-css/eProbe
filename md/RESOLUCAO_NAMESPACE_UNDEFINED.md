# 🚨 **RESOLUÇÃO: window.SENT1_AUTO is undefined**

## 🎯 **PROBLEMA**

```
❌ ERRO:
VM222006:1 Uncaught TypeError: Cannot read properties of undefined (reading 'detectarCardSessaoSimplificado')
    at <anonymous>:1:19
```

**Causa**: O namespace `window.SENT1_AUTO` não está sendo criado ou há erro na IIFE principal.

## 🔧 **SOLUÇÕES IMPLEMENTADAS**

### 1. **🚨 Fallback de Emergência**
- **Adicionado** sistema de fallback que cria namespace mesmo se IIFE falhar
- **Localização**: Final do main.js (~linha 21470)
- **Funcionalidade**: `.catch()` na IIFE + timeout de verificação

### 2. **⏰ Verificação com Timeout**  
- **Timer de 1 segundo** para verificar se namespace foi criado
- **Namespace básico** criado como último recurso
- **Logs detalhados** para debug

### 3. **🧪 Script de Teste**
- **Arquivo**: `teste-console-namespace.js`
- **Uso**: Copiar e colar no console do navegador
- **Funcionalidade**: Verifica namespace em tempo real

## 🚀 **COMO TESTAR**

### **Método 1: Console do Navegador**

1. **Abra** a página do eProc
2. **Pressione** F12 (DevTools)
3. **Vá** para a aba Console
4. **Cole** este código:

```javascript
// Verificação rápida
console.log("window.SENT1_AUTO:", typeof window.SENT1_AUTO);
if (window.SENT1_AUTO) {
    console.log("✅ NAMESPACE OK - Funções:", Object.keys(window.SENT1_AUTO).length);
    window.SENT1_AUTO.detectarCardSessaoSimplificado();
} else {
    console.log("❌ NAMESPACE NÃO ENCONTRADO");
}
```

### **Método 2: Teste Completo**

1. **Copie** todo o conteúdo de `teste-console-namespace.js`
2. **Cole** no console
3. **Aguarde** os resultados automáticos

### **Método 3: Verificação Manual**

```javascript
// Aguardar carregamento
setTimeout(() => {
    if (window.SENT1_AUTO?.detectarCardSessaoSimplificado) {
        console.log("✅ Função disponível!");
        window.SENT1_AUTO.detectarCardSessaoSimplificado();
    } else {
        console.log("❌ Ainda não disponível");
    }
}, 3000);
```

## 🔍 **DIAGNÓSTICO DE PROBLEMAS**

### **Se AINDA não funcionar:**

1. **Verificar erros no console**:
   ```javascript
   // Procurar por mensagens de erro vermelhas
   ```

2. **Verificar se extensão está carregada**:
   - Vá para `edge://extensions/`
   - Verifique se eProbe está ativa
   - Clique em "Recarregar" se necessário

3. **Verificar página correta**:
   - URL deve conter `eproc1g.tjsc.jus.br` ou `eproc2g.tjsc.jus.br`
   - Página deve ser de processo específico

4. **Forçar recriação do namespace**:
   ```javascript
   // No console
   delete window.SENT1_AUTO;
   location.reload(); // Recarregar página
   ```

## ✅ **RESULTADO ESPERADO**

Após as correções, você deve ver:

```
✅ VERIFICAÇÃO: Namespace window.SENT1_AUTO confirmado
📊 Funções disponíveis: 150+ 
✅ detectarCardSessaoSimplificado DISPONÍVEL
```

E o comando deve funcionar:
```javascript
window.SENT1_AUTO.detectarCardSessaoSimplificado()
```

## 🎯 **STATUS DAS CORREÇÕES**

- ✅ **Fallback de emergência** implementado
- ✅ **Timeout de verificação** adicionado  
- ✅ **Sistema de logs** melhorado
- ✅ **Testes de verificação** criados
- ✅ **Sintaxe validada** (sem erros)

---

**💡 DICA**: Se problema persistir, use o arquivo `teste-console-namespace.js` para diagnóstico detalhado!
