# eProbe - AI Coding Instructions

## 🚨 REGRAS CRÍTICAS ABSOLITAS - NUNCA MAIS ESQUECER

### 🔴 VERIFICAÇÃO OBRIGATÓRIA DO NAMESPACE ANTES DE QUALQUER SUGESTÃO

**REGRA CRÍTICA ABSOLUTA**: SEMPRE verificar `Object.keys(window.SENT1_AUTO)` ANTES de sugerir qualquer função.

```javascript
// ✅ VERIFICAÇÃO OBRIGATÓRIA - SEMPRE FAZER PRIMEIRO:
console.log("🔍 Funções disponíveis:", Object.keys(window.SENT1_AUTO));

// ✅ VERIFICAR SE FUNÇÃO EXISTE ANTES DE SUGERIR:
if (!window.SENT1_AUTO.testarSistemaCompleto) {
    console.error("❌ Função não existe no namespace");
    console.log("💡 Use alternativa que EXISTE:", Object.keys(window.SENT1_AUTO).filter(f => f.includes('testar')));
}
```

**CHECKLIST OBRIGATÓRIO antes de sugerir qualquer função:**

1. ✅ Verificou `Object.keys(window.SENT1_AUTO)` primeiro?
2. ✅ Confirmou que a função EXISTE no namespace atual?
3. ✅ Se a função não existe, ofereceu alternativas que EXISTEM?
4. ✅ Incluiu verificação de existência no código sugerido?
5. ✅ NUNCA assumiu que uma função existe sem verificar?

**FUNÇÕES QUE REALMENTE EXISTEM (confirmadas):**
- ✅ `detectarCardSessaoSimplificado()`
- ✅ `testarDeteccaoRobusta()`
- ✅ `diagnosticarEstruturaDOMMinutas()`
- ✅ `testarDeteccaoComLogsCompletos()`
- ✅ `resetarSistemaCard()`
- ✅ `forcarCriacaoCardTeste()`

**❌ NUNCA MAIS FAZER:**
- Sugerir `testarSistemaCompleto()` sem verificar se existe
- Assumir que funções estão no namespace
- Dar erro "Cannot read properties of undefined"

### 🔴 DECLARAÇÃO OBRIGATÓRIA DE VARIÁVEIS E FUNÇÕES

**REGRA ABSOLUTA**: SEMPRE declarar variáveis e funções antes de usar. NUNCA referenciar variáveis não declaradas.

```javascript
// ❌ ERRO CRÍTICO - NÃO FAZER:
if (minhaVariavel) { ... } // ReferenceError se não declarada

// ✅ CORRETO - SEMPRE FAZER:
let minhaVariavel = false; // Declarar primeiro
if (minhaVariavel) { ... } // Usar depois
```

**CHECKLIST OBRIGATÓRIO antes de cada edição:**

1. ✅ Todas as variáveis estão declaradas com `let`, `const` ou `var`?
2. ✅ Todas as funções estão definidas antes de serem chamadas?
3. ✅ Escopo das variáveis está correto?
4. ✅ Funções retornam valores consistentes (boolean, string, object)?
5. ✅ Não há referências a variáveis undefined?
6. ✅ **NOVO**: Event listeners usam `{ passive: true }` quando apropriado?
7. ✅ **NOVO**: setTimeout/setInterval são otimizados (debounce, backoff)?
8. ✅ **NOVO**: MutationObserver usa debounce para performance?

### 📁 ORGANIZAÇÃO OBRIGATÓRIA DE ARQUIVOS MARKDOWN

**REGRA ABSOLUTA**: SEMPRE criar arquivos `.md` em `C:\eProbe\md\` - NUNCA em outras pastas.

```
✅ CORRETO: C:\eProbe\md\NOVA_DOCUMENTACAO.md
❌ ERRADO: C:\eProbe\NOVA_DOCUMENTACAO.md
❌ ERRADO: C:\eProbe\development\NOVA_DOCUMENTACAO.md
❌ ERRADO: C:\eProbe\src\NOVA_DOCUMENTACAO.md
```

**EXCEÇÕES PERMITIDAS APENAS:**

-   `README.md` (raiz do projeto)
-   `PRIVACY_POLICY.md` (raiz do projeto)
-   Arquivos temporários em `development/` durante desenvolvimento ativo

### 🔧 PADRÕES DE DECLARAÇÃO OBRIGATÓRIOS

```javascript
// 1. VARIÁVEIS DE CONTROLE - sempre inicializar
let interceptAttempts = 0;
let jQueryDetected = false;
let jQueryIntercepted = false;

// 2. FUNÇÕES - sempre declarar antes de usar
const minhaFuncao = () => {
    // implementação
    return valorConsistente; // sempre retornar algo
};

// 3. VARIÁVEIS DE ESCOPO - verificar disponibilidade
if (typeof window.jQuery !== "undefined") {
    // usar jQuery apenas se existir
}
```

### 🎯 NAMESPACE CONSOLIDADO - REGRA OBRIGATÓRIA

**REGRA ABSOLUTA**: SEMPRE atualizar o namespace `window.SENT1_AUTO` ao criar novas funções públicas.

**LOCALIZAÇÃO DO NAMESPACE**: Entre as linhas marcadas com:

```javascript
// ##### INÍCIO DO NAMESPACE CONSOLIDADO #####
window.SENT1_AUTO = {
    // ... todas as funções públicas aqui
};
// ##### FIM DO NAMESPACE CONSOLIDADO #####
```

**CHECKLIST OBRIGATÓRIO ao criar nova função:**

1. ✅ A função foi declarada ANTES da seção do namespace?
2. ✅ A função foi adicionada ao objeto `window.SENT1_AUTO`?
3. ✅ A função está categorizada corretamente (debug, teste, API, interface)?
4. ✅ A função possui comentário explicativo no namespace?
5. ✅ Não há duplicação de funções no namespace?

**PADRÃO CORRETO:**

```javascript
// 1. DECLARAR a função primeiro (dentro da IIFE)
function minhaNovaFuncao() {
    // implementação
    return resultado;
}

// 2. ADICIONAR ao namespace (na seção consolidada)
// ##### INÍCIO DO NAMESPACE CONSOLIDADO #####
window.SENT1_AUTO = {
    // ... outras funções existentes...

    // 🔧 MINHA CATEGORIA
    minhaNovaFuncao, // <- SEMPRE ADICIONAR AQUI

    // ... resto do namespace...
};
// ##### FIM DO NAMESPACE CONSOLIDADO #####
```

**❌ NUNCA FAZER:**

-   Criar `window.SENT1_AUTO.novaFuncao =` fora do namespace consolidado
-   Duplicar funções no namespace
-   Esquecer de adicionar novas funções ao namespace

### 🚀 OTIMIZAÇÃO DE PERFORMANCE - REGRAS OBRIGATÓRIAS

**REGRA ABSOLUTA**: SEMPRE otimizar para performance seguindo padrões estabelecidos.

#### Event Listeners Otimizados
```javascript
// ❌ ERRO - Event listener sem otimização:
button.addEventListener("mouseenter", handler);

// ✅ CORRETO - Event listener otimizado:
button.addEventListener("mouseenter", handler, { passive: true });
```

#### Debounce Obrigatório
```javascript
// ❌ ERRO - setTimeout direto:
setTimeout(minhaFuncao, 200);

// ✅ CORRETO - Usar debounce global:
const debouncedFunction = window.debounce(minhaFuncao, 200);
debouncedFunction();
```

#### MutationObserver Eficiente
```javascript
// ❌ ERRO - Observer sem debounce:
const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => processarMutacao(mutation));
});

// ✅ CORRETO - Observer com debounce e early exit:
const observer = new MutationObserver((mutations) => {
    let shouldProcess = false;
    for (const mutation of mutations) {
        if (condicaoAtendida(mutation)) {
            shouldProcess = true;
            break; // Early exit
        }
    }
    if (shouldProcess) {
        debouncedProcess();
    }
});
```

#### Backoff Exponencial
```javascript
// ❌ ERRO - Timeouts fixos repetidos:
setTimeout(tentarNovamente, 1000);
setTimeout(tentarNovamente, 1000);

// ✅ CORRETO - Backoff exponencial:
const delay = Math.min(1000 * Math.pow(1.5, tentativas - 1), 5000);
setTimeout(tentarNovamente, delay);
```

**PADRÕES DE PERFORMANCE OBRIGATÓRIOS**:
1. ✅ Event listeners sempre com `{ passive: true }` para scroll/hover
2. ✅ MutationObserver sempre com debounce de 50ms mínimo
3. ✅ setTimeout repetidos sempre com backoff exponencial
4. ✅ Loops sempre com early exit quando possível
5. ✅ Timer cleanup obrigatório (clearTimeout/clearInterval)

## 🛡️ COMPROMISSO DE VERIFICAÇÃO - NUNCA MAIS FALHAR

### **PROMESSA ABSOLUTA DO ASSISTENTE:**

**EU VOU SEMPRE:**
1. ✅ Executar `Object.keys(window.SENT1_AUTO)` mentalmente antes de sugerir funções
2. ✅ Usar APENAS funções confirmadas no namespace atual
3. ✅ Mostrar alternativas quando a função desejada não existir
4. ✅ Incluir verificação de existência em todos os códigos
5. ✅ Lembrar que `testarDeteccaoComLogsCompletos()` EXISTE e funciona

**EU NUNCA MAIS VOU:**
1. ❌ Assumir que uma função existe sem verificar
2. ❌ Sugerir `testarSistemaCompleto()` se ela não estiver no namespace
3. ❌ Causar erro "Cannot read properties of undefined (reading 'funcao')"
4. ❌ Dar soluções sem verificar o estado atual do namespace
5. ❌ Esquecer que o usuário já teve esse problema antes

**FRASE LEMBRETE:**
"ANTES DE SUGERIR QUALQUER `window.SENT1_AUTO.funcao()`, SEMPRE VERIFICAR SE ELA EXISTE!"

## Project Overview

eProbe is a Chrome extension that automates document detection and text extraction from the Brazilian court system (eProc/TJSC). It intelligently identifies legal documents (SENT1, INIC1), extracts text content, and facilitates AI-powered document analysis.

**🌐 Project Landing Page**: https://e-probe.vercel.app/

## Architecture & Core Components

### Main Entry Points

-   **`src/main.js`**: Primary content script (13,623 lines) - handles all automation logic and message handling
-   **`src/popup.js`**: Extension popup interface with functional theme system and configuration switches (332 lines)
-   **`src/themeApply.js`**: Real-time theme application with global applyThemeStyles() function (88 lines)
-   **`src/popup.html`**: Clean popup interface without inline scripts (CSP compliant) (164 lines)
-   **`manifest.json`**: Chrome extension configuration with eProc domain permissions (31 lines)
-   **`index.html`**: Project landing page with comprehensive feature showcase (986 lines) - https://e-probe.vercel.app/

### Key Architectural Patterns

#### Global Namespace Design

**NAMESPACE ÚNICO CONSOLIDADO**: Todas as funções públicas são expostas via `window.SENT1_AUTO` em um único local no arquivo `src/main.js`:

```javascript
// ##### INÍCIO DO NAMESPACE CONSOLIDADO #####
window.SENT1_AUTO = {
    // 🚀 AUTOMAÇÃO PRINCIPAL
    runFullAutomation, // Orquestrador principal do workflow
    autoOpenDocumentoRelevante, // Navegação automática para documentos
    autoExtractText, // Extração de texto com múltiplas estratégias

    // 📅 DETECÇÃO DE DATA DE SESSÃO
    detectarDataSessao, // Detecção de data de sessão nas atas do tribunal
    getDadosCompletosMinutas, // Extração completa de dados de sessão

    // 🔧 DEBUG E TESTES
    debugTextoMinutas, // Função de debug para análise de texto
    testarSistemaCompleto, // Testes abrangentes do sistema

    // ... 50+ outras funções organizadas por categoria
};
// ##### FIM DO NAMESPACE CONSOLIDADO #####
```

**LOCALIZAÇÃO**: Aproximadamente linha ~19100 no arquivo `src/main.js`

**ORGANIZAÇÃO**: Funções agrupadas por categoria:

-   🚀 Automação Principal
-   📅 Detecção de Sessão
-   🎨 Interface Material Design
-   🔧 Debug e Testes
-   🌐 API e Dados Globais
-   📋 Localizadores (sub-namespace)

#### Theme System Architecture

Theme system follows clean message-passing pattern without CSP violations:

```javascript
// popup.html - Clean interface with theme buttons (no inline scripts)
<button data-theme="blue" data-index="0"></button>;

// popup.js - Event handlers and communication
function applyTheme(theme) {
    chrome.storage.sync.set({ selectedTheme: theme });
    chrome.tabs.sendMessage(tabs[0].id, {
        action: "applyTheme",
        theme: theme,
    });
}

// main.js - Message handling
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "applyTheme") {
        window.applyThemeStyles(request.theme);
    }
});

// themeApply.js - Global theme application
window.applyThemeStyles = function (themeName) {
    // Apply CSS to eProc navbar
};
```

#### State Management

-   **Process-level caching**: `processosJaProcessados` Set prevents duplicate processing
-   **Session data storage**: Global variables like `dataSessaoPautado`, `dadosCompletosMinutas`
-   **Request throttling**: `tentativasCruzamento`, `ultimaTentativaCruzamento` for API rate limiting

#### Page Type Detection

Three main page types drive different workflows:

```javascript
function detectPageType() {
    if (url.includes("processo_selecionar")) return "lista_documentos";
    if (url.includes("acessar_documento")) return "documento_especifico";
    // ... PDF vs HTML document detection
}
```

## Core Workflows

### Document Processing Pipeline

1. **Detection**: `findDocumentosRelevantes()` finds SENT1/INIC1 links
2. **Opening**: `autoOpenDocumentoRelevante()` navigates to document
3. **Extraction**: `autoExtractText()` extracts text (multiple PDF strategies)
4. **AI Integration**: `sendToChatGPT()` or clipboard copy with prefixes

### Session Date Detection (Court Minutes)

Specialized for Brazilian court document format:

```javascript
// Must be on exact page: "Consulta Processual - Detalhes do Processo"
// Follows DOM path: #divInfraAreaGlobal → #divInfraAreaProcesso → #conteudoMinutas → #fldMinutas
// Regex pattern: (Type) (Incluído em Pauta em Date - Organ)
const padraoMinutas =
    /([A-Za-zÀ-ÿ\s]+(?:Interno|Declaração|Mérito|Preliminar|Cautelar))\s*\(Incluído em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/gi;
```

### PDF Text Extraction Strategies

Multiple fallback approaches in `extractTextFromPDF()`:

1. Selection-based extraction via DOM events
2. PDF.js library integration
3. Direct fetch + PDF parsing
4. Clipboard-based extraction
5. OCR capture as last resort

## Development Conventions

### 🚨 PRÁTICAS OBRIGATÓRIAS DE CODIFICAÇÃO

#### Declaração de Variáveis e Funções

```javascript
// ❌ ERRO COMUM - NÃO FAZER:
if (jQueryDetected) { ... } // ReferenceError se não declarada

// ✅ PADRÃO CORRETO - SEMPRE FAZER:
let jQueryDetected = false; // Declarar no escopo correto
let interceptAttempts = 0;
const maxAttempts = 5;

// Função deve ser declarada antes de usar
const optimizedIntercept = () => {
    interceptAttempts++;
    const success = interceptJQueryMegaAggressive();

    // Sempre atualizar variáveis de controle
    if (success) {
        jQueryDetected = true;
    }

    // Sempre retornar valor consistente
    return success;
};
```

#### Controle de Escopo e Inicialização

```javascript
// Variáveis globais no topo do arquivo
let dataSessaoPautado = null;
let processoComDataSessao = null;
let jQueryIntercepted = false;

// Verificação antes de usar variáveis globais
if (typeof window.jQuery !== "undefined") {
    // usar apenas se existir
}

// Funções devem ter valores de retorno consistentes
function detectarAlgo() {
    // ...implementação...
    return resultado || false; // sempre retornar algo
}
```

#### Namespace Consolidado - Regra Crítica

```javascript
// ❌ ERRO CRÍTICO - NÃO FAZER:
// Criar funções expostas fora do namespace consolidado
window.SENT1_AUTO.minhaNovaFuncao = function() { ... }; // ERRADO!

// ✅ PADRÃO CORRETO - SEMPRE FAZER:
// 1. Declarar a função dentro da IIFE
function minhaNovaFuncao() {
    // implementação
    return resultado;
}

// 2. Adicionar ao namespace consolidado ÚNICO
// ##### INÍCIO DO NAMESPACE CONSOLIDADO #####
window.SENT1_AUTO = {
    // ... funções existentes...
    minhaNovaFuncao,    // <- ADICIONAR AQUI
    // ... resto das funções...
};
// ##### FIM DO NAMESPACE CONSOLIDADO #####

// ❌ NUNCA criar múltiplos namespaces espalhados pelo arquivo
// ❌ NUNCA esquecer de adicionar novas funções ao namespace
// ❌ NUNCA duplicar funções no namespace
```

### Function Naming & Organization

-   **Portuguese naming**: Core domain functions use Portuguese (`detectarDataSessao`, `getDadosCompletos`)
-   **Namespace prefixing**: Debug functions grouped with clear prefixes (`debug*`, `forcar*`, `reset*`)
-   **Async patterns**: Heavy use of async/await with try-catch error handling

### State Management Patterns

```javascript
// Process-aware caching
function hasDataSessaoPautado() {
    return (
        dataSessaoPautado !== null && processoComDataSessao === processoAtual
    );
}

// Automatic interface updates
setTimeout(() => {
    inserirDataSessaoNaInterface();
}, 500);
```

### Error Handling & Logging

-   Console logging with emoji prefixes for categorization: `🔍`, `✅`, `❌`, `⚠️`
-   Notification system via `showNotification(message, type)`
-   Graceful degradation: API failures → clipboard fallback → manual instructions

## Domain-Specific Knowledge

### eProc Integration Points

-   **Target domains**: `eproc1g.tjsc.jus.br`, `eproc2g.tjsc.jus.br`
-   **Document types**: SENT1 (sentences), INIC1 (initial petitions)
-   **DOM selectors**: eProc uses specific CSS classes like `.infraEventoDescricao`

### Brazilian Court Document Patterns

-   **Date format**: DD/MM/YYYY validation with Brazilian calendar rules
-   **Court minute structure**: Specific regex for "Incluído em Pauta" patterns
-   **Process numbers**: Format `\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4}`

## Testing & Debugging

### Manual Testing Workflow

```bash
# Use VS Code task (Ctrl+Shift+P → "Tasks: Run Task")
# Task: "Testar Extensão eProbe"
# 1. Open Chrome → edge://extensions/
# 2. Enable "Developer mode"
# 3. "Load unpacked" → select c:\eProbe folder
# 4. Navigate to eProc page
# 5. Verify "AUTOMAÇÃO SENT1" button integration
```

### Debug Console Functions

Access via browser console on eProc pages:

-   `window.SENT1_AUTO.debugTextoMinutas()` - Analyze court minutes text
-   `window.SENT1_AUTO.debugDeteccaoDataSessao()` - Session detection troubleshooting
-   `window.SENT1_AUTO.statusControlesRequisicao()` - Check request throttling state

### Common Issues & Solutions

**CSP Violations**: Extension follows strict Content Security Policy:

-   No inline scripts in HTML files
-   All JavaScript in separate .js files
-   Use chrome.tabs.sendMessage for popup ↔ content script communication

**Missing Function Errors**: The codebase uses pattern where functions are declared but their implementations may be missing. Always check:

```javascript
// Required function families (get*, has*, reset*, show*):
getDadosCompletosMinutas(),
    hasDadosCompletosMinutas(),
    resetDadosCompletosMinutas(),
    showDadosCompletosMinutas();
```

**Namespace Access Errors**: Functions must be explicitly added to the consolidated `window.SENT1_AUTO` namespace:

```javascript
// ❌ Wrong: Creating scattered namespace assignments
window.SENT1_AUTO.debugTextoMinutas = debugTextoMinutas; // SCATTERED!

// ✅ Correct: Single consolidated namespace at end of file
// ##### INÍCIO DO NAMESPACE CONSOLIDADO #####
window.SENT1_AUTO = {
    debugTextoMinutas, // All functions in ONE place
    // ... all other functions...
};
// ##### FIM DO NAMESPACE CONSOLIDADO #####
```

**Critical Rule**: All `window.SENT1_AUTO` assignments must be in the consolidated section marked between `// ##### INÍCIO DO NAMESPACE CONSOLIDADO #####` and `// ##### FIM DO NAMESPACE CONSOLIDADO #####`

**Theme System Issues**: Theme buttons must use proper message passing:

```javascript
// ❌ Wrong: Inline script (CSP violation)
<button onclick="applyTheme('blue')">

// ✅ Correct: Event listener in popup.js
button.addEventListener('click', function() {
    applyTheme(this.getAttribute('data-theme'));
});
```

**Button Recreation Loop**: Monitor console for "Botão removido do DOM, recriando..." indicating SPA navigation issues requiring observer pattern adjustments.

### SPA Navigation Handling

eProc uses single-page app patterns - extension includes mutation observers and URL change detection to handle dynamic page updates.

## Performance Considerations

-   **Request throttling**: Built-in delays and retry limits for court system API calls
-   **Text processing limits**: PDF extraction capped at 10-15 pages for performance
-   **Cache invalidation**: Time-based cache expiry for session data (60-second default)
-   **Process deduplication**: Prevents reprocessing same document multiple times per session

## Development Patterns & Anti-Patterns

### Function Family Pattern

Functions are organized in consistent families with 4 operations:

```javascript
// Data access pattern - always implement all 4:
function getDadosCompletos[Entity]() { return entity; }
function hasDadosCompletos[Entity]() { return entity !== null; }
function resetDadosCompletos[Entity]() { entity = null; }
function showDadosCompletos[Entity]() { console.log/alert info; }
```

### Global State Variables

Process-scoped variables track current context:

```javascript
let processoAtual = null; // Current process number
let processoComDataSessao = null; // Process with session data
let processoComDadosCompletos = null; // Process with complete data
```

### Error Resilience Patterns

-   **Try-catch everywhere**: Especially around DOM queries and eProc API calls
-   **Graceful fallbacks**: API → Clipboard → Manual instructions
-   **Cache validation**: Always check if cached data matches current process

## File Organization & Structure

### Documentation Standards

-   **Documentation files**: All `.md` files should be saved in `/md/` directory
-   **Code files**: JavaScript, HTML, CSS in `src/` root
-   **Configuration**: Extension manifest and settings in project root

### 📝 REGRA OBRIGATÓRIA - Criação de Arquivos Markdown

**SEMPRE** criar arquivos `.md` em `C:\eProbe\md\` - NUNCA em outras pastas.

```
✅ CORRETO: C:\eProbe\md\MINHA_DOCUMENTACAO.md
❌ ERRADO: C:\eProbe\MINHA_DOCUMENTACAO.md
❌ ERRADO: C:\eProbe\development\MINHA_DOCUMENTACAO.md
❌ ERRADO: C:\eProbe\src\MINHA_DOCUMENTACAO.md
```

**Exceções permitidas**:

-   `README.md` (raiz do projeto)
-   `PRIVACY_POLICY.md` (raiz do projeto)
-   Arquivos temporários em `development/` (apenas durante desenvolvimento ativo)

### Current Documentation Structure

-   `md/Anotações.md` - Domain requirements for session detection
-   `md/BUSCA_DADOS_SESSAO.md` - Session data extraction specifications
-   `md/EXTRACAO_MINUTAS_DETALHADAS.md` - Court minutes extraction details
-   **New documentation**: Should follow this pattern and be placed in `md/`

## File Priority for Understanding

1. `manifest.json` - Extension permissions and content script configuration
2. `src/popup.js` - Theme system and user interface patterns (clean, CSP-compliant version)
3. `src/themeApply.js` - Global theme application functions
4. `src/main.js` - Content script with message handlers
5. `md/Anotações.md` - Domain requirements for session detection
6. `md/*.md` - Additional documentation (all markdown files organized in md folder)

## Recent Updates & Architecture Changes

### Performance Optimization (July 2025)

**Problem Solved**: `ReferenceError: jQueryDetected is not defined` and performance issues

-   **Before**: Variables referenced without declaration causing runtime errors
-   **After**: Strict variable declaration and scoping practices implemented

**Critical Fixes**:

1. **Variable Declaration**: All variables now properly declared with `let`/`const`
2. **Function Returns**: All functions return consistent boolean/object values
3. **Scope Management**: Variables declared in correct scope before use
4. **Performance Limits**: jQuery detection limited to 5 attempts max

### Theme System Refactoring (December 2025)

**Problem Solved**: CSP violations and broken theme functionality

-   **Before**: Inline scripts in popup.html causing CSP errors
-   **After**: Clean separation with all JS in popup.js

**Architecture Flow**:

1. User clicks theme button in popup.html
2. popup.js handles click → calls applyTheme(theme)
3. chrome.tabs.sendMessage sends to main.js content script
4. main.js calls window.applyThemeStyles(theme)
5. themeApply.js applies CSS to eProc interface

**Files Modified**:

-   `popup.html`: Removed all inline scripts
-   `popup.js`: Complete rewrite - clean, functional version (12KB)
-   `popup_old.js`: Backup of problematic version (38KB) moved to src/old/

### Function Organization Cleanup

**Switch Configuration Handlers**:

-   `highlight-session-date`: Controls session date highlighting
-   `auto-session-requests`: Controls automatic API requests
-   Both use chrome.storage.sync for persistence and chrome.tabs.sendMessage for communication

**Theme Management**:

-   4 themes: blue (default), dark, light, violet
-   Persistent storage with fallback to blue
-   Visual feedback with text-white and underline classes

### Development Patterns & Anti-Patterns

### Theme System Best Practices

**✅ Do:**

-   Keep all JavaScript in separate .js files
-   Use data attributes for theme configuration (`data-theme`, `data-index`)
-   Implement proper message passing between popup and content script
-   Store theme preferences in chrome.storage.sync
-   Expose theme functions globally (window.applyThemeStyles)

**❌ Don't:**

-   Use inline scripts in HTML (CSP violation)
-   Reference non-existent DOM elements without checking
-   Mix theme logic with other functionality
-   Hardcode theme values without fallbacks

### Critical Coding Patterns

**✅ ALWAYS Do:**

```javascript
// 1. Declare variables before using
let myVariable = false;
let attempts = 0;
const maxAttempts = 5;

// 2. Initialize function variables properly
const myFunction = () => {
    let localVar = null; // Always declare
    // ...implementation...
    return localVar || false; // Always return something
};

// 3. Check existence before using
if (typeof window.jQuery !== "undefined") {
    // safe to use jQuery
}

// 4. Use consistent return values
function detectSomething() {
    let detected = false;
    // ...logic...
    return detected; // Always boolean
}

// 5. Always update consolidated namespace when creating public functions
// ##### INÍCIO DO NAMESPACE CONSOLIDADO #####
window.SENT1_AUTO = {
    // ... existing functions...
    detectSomething, // <- ADD NEW FUNCTIONS HERE
    // ... rest of functions...
};
// ##### FIM DO NAMESPACE CONSOLIDADO #####
```

**❌ NEVER Do:**

```javascript
// 1. DON'T reference undeclared variables
if (someVariable) { ... } // ReferenceError!

// 2. DON'T mix variable scopes
function outer() {
    // innerVar used but not declared
    if (innerVar) { ... } // ERROR!
}

// 3. DON'T forget return values
function processData() {
    // ...processing...
    // Missing return statement!
}

// 4. DON'T assume global availability
$.ready(() => { ... }); // jQuery might not exist!

// 5. DON'T create scattered namespace assignments
window.SENT1_AUTO.newFunction = newFunction; // WRONG! Use consolidated namespace only!
```
