# 🔍 Guia de Diagnóstico Específico para Microsoft Edge

## Como usar o diagnóstico no Edge

### 1. Verificar Extensão no Edge

1. Abra o Microsoft Edge
2. Digite na barra de endereços: `edge://extensions/`
3. Verifique se a extensão **eProbe** está:
    - ✅ Listada
    - ✅ Ativada (toggle ligado)
    - ✅ Com permissões para o site eProc

### 2. Executar Diagnóstico Específico

1. Navegue para qualquer página do eProc no Edge
2. Abra o console (F12 → Console)
3. Copie e cole o conteúdo completo do arquivo `diagnostico_edge.js`
4. Pressione Enter

### 3. Analisar Resultados

O diagnóstico verificará:

#### 🌐 NAVEGADOR

-   Confirma se está executando no Microsoft Edge
-   Mostra informações do User Agent

#### 🔌 APIS EDGE

-   Verifica APIs disponíveis (chrome, browser, msBrowser)
-   Testa chrome.runtime.id e outras funções essenciais

#### 📜 SCRIPTS DE CONTEÚDO

-   Lista scripts de extensão carregados na página
-   Identifica problemas de carregamento

#### 🎯 NAMESPACE DETALHADO

-   Verifica se window.SENT1_AUTO existe
-   Lista funções disponíveis no namespace
-   Procura por vestígios de execução parcial

#### 🔄 EXECUÇÃO IIFE

-   Detecta erros JavaScript que podem interromper a IIFE
-   Verifica elementos criados pela extensão
-   Identifica problemas de execução

#### 🔒 CONTENT SECURITY POLICY

-   Verifica políticas CSP que podem bloquear a extensão
-   Analisa meta tags de segurança

### 4. Diagnósticos Esperados

#### ✅ Extensão Funcionando Normalmente

```
🌐 NAVEGADOR: É Edge? true
🔌 APIS EDGE: chrome: DISPONÍVEL, chrome.runtime.id: [ID da extensão]
🎯 NAMESPACE: window.SENT1_AUTO existe? true
🔄 EXECUÇÃO: Elementos da extensão encontrados: 1+
```

#### ❌ Extensão Não Carregada

```
🔌 APIS EDGE: chrome.runtime.id: undefined
🎯 NAMESPACE: window.SENT1_AUTO existe? false
📜 SCRIPTS: Scripts de extensão: 0
```

#### ⚠️ Extensão Carregada Mas Com Erro

```
🔌 APIS EDGE: chrome: DISPONÍVEL
🎯 NAMESPACE: window.SENT1_AUTO existe? false
🔄 EXECUÇÃO: Erros JavaScript detectados: 1+
```

### 5. Soluções Comuns

#### Problema: window.SENT1_AUTO undefined

**Causas Possíveis:**

1. IIFE não executou completamente devido a erro JavaScript
2. Extensão não injetou o content script
3. Conflito com CSP da página

**Soluções:**

1. Recarregar a extensão em `edge://extensions/`
2. Verificar erros no console
3. Tentar em modo privado/incógnito

#### Problema: chrome.runtime.id undefined

**Causas Possíveis:**

1. Extensão não está realmente ativada
2. Permissões insuficientes
3. Extensão corrompida

**Soluções:**

1. Desativar e reativar a extensão
2. Recarregar a extensão (botão reload)
3. Reinstalar a extensão

#### Problema: Scripts de extensão não carregados

**Causas Possíveis:**

1. Problema no manifest.json
2. Página não corresponde aos matches
3. CSP bloqueando execução

**Soluções:**

1. Verificar se a URL está nos content_scripts matches
2. Adicionar site às permissões da extensão
3. Verificar console por bloqueios CSP

### 6. Comandos de Debug Manual

Após executar o diagnóstico, você pode usar:

```javascript
// Verificar função específica
window.diagnosticoEdge();

// Tentar executar função da extensão
window.SENT1_AUTO?.runFullAutomation();

// Verificar elementos criados
document.getElementById("eprobe-data-sessao");

// Forçar detecção
window.SENT1_AUTO?.detectarDataSessao();
```

### 7. Diferenças Edge vs Chrome

O Microsoft Edge pode ter comportamentos específicos:

1. **API Compatibility**: Edge usa as mesmas APIs Chrome, mas pode ter pequenas diferenças
2. **CSP Handling**: Edge pode ser mais restritivo com CSP
3. **Extension Loading**: Timing de carregamento pode ser diferente
4. **Security Context**: Isolamento de contexto pode variar

### 8. Quando Procurar Ajuda

Se após executar o diagnóstico você encontrar:

-   ❌ chrome.runtime.id sempre undefined
-   ❌ window.SENT1_AUTO sempre undefined
-   ❌ Erros JavaScript consistentes
-   ❌ Elementos da extensão nunca criados

Então compartilhe:

1. Output completo do diagnóstico
2. Screenshot da página edge://extensions/
3. Screenshot dos erros no console
4. URL específica do eProc onde testou
