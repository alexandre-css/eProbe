# 🎯 GUIA DE USO - Sistema eProbe v2.0 Melhorado

## 📋 Resumo das Melhorias Implementadas

### ✅ **Funcionalidades Adicionadas**

-   **Sistema de Diagnóstico Automático**: Identifica problemas automaticamente
-   **Correção Automática**: Resolve problemas sem intervenção manual
-   **Reaplicação Forçada de Ícones**: Sistema robusto para substituição de ícones
-   **Verificação Robusta de Botões**: Suporte a múltiplos IDs de botão
-   **Controle de Performance Ultra**: Sistema otimizado para páginas lentas

### 🧪 **Scripts de Teste Disponíveis**

1. `validacao-final-completa.js` - Validação completa do sistema
2. `teste-final-iterativo.js` - Teste com pontuação 0-100
3. `diagnostico-correcao-imediata.js` - Diagnóstico e correção rápidos
4. `teste-verificacao-rapida.js` - Verificação express

---

## 🚀 COMO USAR

### 1. **Testando a Extensão**

#### Método 1: Via Task do VS Code

```bash
# No VS Code, pressione Ctrl+Shift+P
# Digite: "Tasks: Run Task"
# Selecione: "Testar Extensão eProbe"
```

#### Método 2: Manual

1. Abra o Edge (ou Chrome)
2. Vá para `edge://extensions/`
3. Ative "Modo do desenvolvedor"
4. Clique em "Carregar sem compactação"
5. Selecione a pasta `c:\eProbe`

### 2. **Validação Completa do Sistema**

```javascript
// 1. Abra uma página do eProc
// 2. Abra o console do navegador (F12)
// 3. Cole e execute:

// Validação completa (recomendado)
fetch("file:///c:/eProbe/development/tests/validacao-final-completa.js")
    .then((r) => r.text())
    .then((code) => eval(code));

// OU copie o conteúdo do arquivo e cole diretamente
```

### 3. **Comandos de Diagnóstico**

```javascript
// Diagnóstico geral
window.SENT1_AUTO.diagnosticarCompleto();

// Correção automática de problemas
window.SENT1_AUTO.corrigirProblemas();

// Diagnóstico específico de ícones
window.SENT1_AUTO.diagnosticarIconesCSS();

// Forçar reaplicação de ícones
window.SENT1_AUTO.forcarReaplicacaoIcones();

// Verificar modo ultra-performance
window.SENT1_AUTO.statusModoUltraPerformance();
```

### 4. **Controle de Performance**

```javascript
// Ativar modo ultra-performance (para páginas lentas)
window.SENT1_AUTO.ativarModoUltraPerformance();

// Desativar modo ultra-performance
window.SENT1_AUTO.desativarModoUltraPerformance();

// Verificar status
window.SENT1_AUTO.statusModoUltraPerformance();
```

---

## 🔍 RESOLUÇÃO DE PROBLEMAS

### ❌ **Problema: Botão "Resumir Documento" não aparece**

**Diagnóstico:**

```javascript
window.SENT1_AUTO.debugButtonCreation();
```

**Correção:**

```javascript
window.SENT1_AUTO.ensureButtonExists();
// OU
window.SENT1_AUTO.forceCreateButton();
```

### ❌ **Problema: Ícones não foram substituídos**

**Diagnóstico:**

```javascript
window.SENT1_AUTO.diagnosticarIconesCSS();
```

**Correção:**

```javascript
window.SENT1_AUTO.forcarReaplicacaoIcones();
// OU
window.SENT1_AUTO.inicializarSubstituicaoIcones();
```

### ❌ **Problema: Sistema não executa automaticamente**

**Verificação:**

```javascript
// Verificar se modo ultra-performance está bloqueando
window.SENT1_AUTO.statusModoUltraPerformance();

// Se estiver ativo, desativar:
window.SENT1_AUTO.desativarModoUltraPerformance();

// Executar correção
window.SENT1_AUTO.corrigirProblemas();
```

### ❌ **Problema: Extensão não carregou**

**Verificação:**

```javascript
// Verificar namespace
console.log(typeof window.SENT1_AUTO);
// Deve retornar: "object"

// Se retornar "undefined":
// 1. Recarregue a página
// 2. Verifique se extensão está ativada
// 3. Reinstale a extensão se necessário
```

---

## 📊 INTERPRETANDO OS RESULTADOS

### 🎯 **Pontuação de Validação**

-   **90-100**: 🎉 Sistema perfeito
-   **75-89**: ✅ Sistema funcionando bem
-   **60-74**: ⚠️ Sistema funcional com ajustes
-   **0-59**: ❌ Sistema com problemas graves

### 🔍 **Status do Diagnóstico**

```javascript
const diagnostico = window.SENT1_AUTO.diagnosticarCompleto();
console.log(diagnostico);

// Verificar:
// - dataSessao.detectada: true/false
// - botaoResumir.existe: true/false
// - substituicaoIcones.aplicada: true/false
// - sistemaTheme.aplicado: true/false
```

---

## 🛠️ MANUTENÇÃO E DEBUG

### **Comandos de Debug Avançado**

```javascript
// Debug detecção de data da sessão
window.SENT1_AUTO.debugDeteccaoDataSessao();

// Debug status de sessão
window.SENT1_AUTO.debugStatusCompleto();

// Forçar detecção de data
window.SENT1_AUTO.forcarDeteccaoDataSessao();

// Examinar estrutura HTML
window.SENT1_AUTO.examinarEstruturaHTMLDados();
```

### **Limpeza e Reset**

```javascript
// Reset dados de sessão
window.SENT1_AUTO.resetDataSessaoPautado();

// Reset dados globais
window.SENT1_AUTO.resetDadosGlobaisSessao();

// Reset status de sessão
window.SENT1_AUTO.resetStatusSessao();
```

---

## 📱 COMPATIBILIDADE

### **Navegadores Suportados**

-   ✅ Microsoft Edge (recomendado)
-   ✅ Google Chrome
-   ❓ Firefox (não testado)

### **Páginas do eProc Suportadas**

-   ✅ Lista de documentos
-   ✅ Visualização de documento PDF
-   ✅ Visualização de documento HTML
-   ✅ Detalhes do processo
-   ✅ Página de localizadores

---

## 🆘 SUPORTE

### **Em caso de problemas:**

1. **Execute validação completa**:

    ```javascript
    // Cole no console:
    fetch("file:///c:/eProbe/development/tests/validacao-final-completa.js")
        .then((r) => r.text())
        .then((code) => eval(code));
    ```

2. **Execute correção automática**:

    ```javascript
    window.SENT1_AUTO.corrigirProblemas();
    ```

3. **Se problema persistir**:
    - Recarregue a página
    - Reinstale a extensão
    - Execute diagnóstico novamente

### **Logs e Debugging**

-   Todos os logs aparecem no console do navegador
-   Use F12 para abrir o console
-   Procure por mensagens com emojis (🎨, 🔍, 🔧, etc.)

---

**📅 Última atualização**: 15 de julho de 2025  
**🔧 Versão**: eProbe v2.0 - Sistema de Diagnóstico e Correção Automática
