# eProbe - AI Coding Instructions

> Chrome extension automating legal document detection & extraction from Brazilian court system (eProc/TJSC). Focus: minimal surgical changes, strict syntax validation, consolidated namespace architecture.

## Project Quickstart

**Tech Stack**: Manifest V3 Chrome Extension | Vanilla JS | eProc DOM manipulation | Brazilian court API integration  
**Main Files**: `src/main.js` (39K lines), `src/popup.js`, `src/themeApply.js`  
**Target**: `eproc1g.tjsc.jus.br`, `eproc2g.tjsc.jus.br`  
**Landing Page**: https://e-probe.vercel.app/

## Critical Rules - Read First

### Rule 1: Syntax Validation ALWAYS

### Rule 1: Syntax Validation ALWAYS

**Before ANY edit**: Check balanced braces, complete try-catch blocks, closed IIFEs, no orphaned code.

```javascript
// ✅ Complete structures
function myFunc() { /*...*/ }  // Closed
try { /*...*/ } catch(e) { /*...*/ }  // Complete pair
(function() { /*...*/ })();  // Closed IIFE

// ❌ Fatal errors
} catch(e) { /*...*/ }  // Orphaned catch
function incomplete() { /*...*/ // Missing }
```

### Rule 2: Minimal Surgical Changes ONLY

**Never refactor working code**. Fix ONLY the specific reported issue. Ask before large changes.

```javascript
// ❌ Wrong: Rewrite entire function
function existingWorkingFunction() {
    /* complete rewrite */
}

// ✅ Correct: Add only the needed line
function existingWorkingFunction() {
    // ...existing code unchanged...
    newLineToFixBug(); // <- Surgical addition
    // ...rest unchanged...
}
```

### Rule 3: UTF-8 Only - NO Emojis in Code

**Forbidden**: ❌ ✅ 🎯 📋 🔧 and ALL emojis/special Unicode in JS code  
**Allowed**: a-z A-Z 0-9 basic punctuation only

### Rule 4: Consolidated Namespace Architecture

**Two-layer namespace system** in `src/main.js`:

**Layer 1 (IIFE #10 - internal async)**: `eProbeNamespaceFunctions` object, exported as `window.SENT1_AUTO` before the IIFE closes. Contains ~150 functions from the internal scope.

**Layer 2 (IIFE #9 - external)**: `Object.assign(window.SENT1_AUTO, {...})` adds functions defined in the outer scope (gradients, process control, theme).

**To add a NEW public function:**

1. Define the function inside the IIFE #10 (between `// INICIO DO SISTEMA DE PROCESSAMENTO` and `// FIM DO NAMESPACE CONSOLIDADO`)
2. Add it to the `eProbeNamespaceFunctions` object (search for `##### INICIO DO NAMESPACE CONSOLIDADO #####`)
3. Done - it will be available via `window.SENT1_AUTO.myFunction`

```javascript
// Inside IIFE #10, define your function:
function myNewFunction() {
    /* implementation */
}

// Then add to eProbeNamespaceFunctions:
const eProbeNamespaceFunctions = {
    // ...existing functions...
    myNewFunction: myNewFunction, // <- ADD HERE
    // ...rest...
};
```

**If the function needs variables from the OUTER scope (IIFE #9)**:
Add it to `Object.assign(window.SENT1_AUTO, {...})` instead (search for `Object.assign(window.SENT1_AUTO`).

```javascript
// NEVER do these:
window.SENT1_AUTO.newFunc = ...;  // scattered assignment
window._myGlobalFunc = ...;       // global workaround
window.SENT1_AUTO = { ... };      // overwrite entire namespace
```

### Rule 5: Variable Declaration Required

```javascript
// ❌ ReferenceError risk
if (undeclaredVar) {
    /*...*/
}

// ✅ Always declare first
let myVar = false;
if (myVar) {
    /*...*/
}
```

### Rule 6: Namespace Function Verification

**Before suggesting ANY function call**:

```javascript
// ✅ REQUIRED verification
console.log("Available:", Object.keys(window.SENT1_AUTO));
if (window.SENT1_AUTO.functionName) {
    window.SENT1_AUTO.functionName();
}
```

**Confirmed working functions**:

- `detectarCardSessaoSimplificado()`
- `testarDeteccaoRobusta()`
- `diagnosticarEstruturaDOMMinutas()`

❌ Never assume a function exists without checking

## Architecture Essentials

### Entry Points & Message Flow

**Content Script**: `src/main.js` injected at document_end

- Anti-flash injection via `document.write` before DOM render (lines 1-60)
- Ultra-early eProc function interception
- Global namespace `window.SENT1_AUTO` with fallback system

**Popup**: `src/popup.html` + `src/popup.js` (CSP-compliant, no inline scripts)

- Message passing: `chrome.tabs.sendMessage()` → `main.js` listener
- Theme system: popup.js → main.js → `window.applyThemeStyles()` in themeApply.js

**Theme Application**: `src/themeApply.js` exposes `window.applyThemeStyles(themeName)`

### Core Systems

**1. Anti-Flash System** (lines 1-60): Injects CSS before page render to eliminate visual flash  
**2. Function Interception**: Replaces problematic eProc functions ultra-early  
**3. Document Detection**: `findDocumentosRelevantes()` finds SENT1/INIC1 legal docs  
**4. PDF Extraction**: 5 fallback strategies in `extractTextFromPDF()`  
**5. Session Date Detection**: Brazilian court format parsing with regex

### Performance Critical Patterns

```javascript
// ✅ Required optimizations
button.addEventListener("mouseenter", handler, { passive: true });

const debounced = window.debounce(myFunc, 300); // Use global debounce
debounced();

const observer = new MutationObserver((mutations) => {
    if (someCondition) return; // Early exit
    debouncedProcess();
});
```

**Backoff exponential for retries**:

```javascript
const delay = Math.min(1000 * Math.pow(1.5, attempts - 1), 5000);
setTimeout(retry, delay);
```

## Domain-Specific Knowledge

### eProc Integration

**URL patterns**: `processo_selecionar`, `acessar_documento`  
**DOM selectors**: `.infraEventoDescricao`, `#divInfraAreaProcesso`, `#conteudoMinutas`  
**Process number format**: `\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4}`

### Brazilian Court Minutes Pattern

**Exact page**: "Consulta Processual - Detalhes do Processo"  
**DOM path**: `#divInfraAreaGlobal → #divInfraAreaProcesso → #conteudoMinutas → #fldMinutas`  
**Regex**: `/(Type)\s*\(Incluído em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/gi`

### Theme System Architecture

**4 themes**: blue (default), dark, light, violet  
**Storage**: `chrome.storage.sync` with fallback to blue  
**Flow**: User click → popup.js → sendMessage → main.js → themeApply.js applies CSS

## Development Workflows

### Testing Extension

```powershell
# Use VS Code task: Ctrl+Shift+P → "Tasks: Run Task" → "Testar Extensão eProbe"
# OR manually:
# 1. edge://extensions/
# 2. Enable "Developer mode"
# 3. "Load unpacked" → c:\Apps\eProbe
# 4. Navigate to eProc page
# 5. Verify "AUTOMAÇÃO SENT1" button appears
```

### Debug Console Functions

On eProc pages, access via browser console:

```javascript
window.SENT1_AUTO.debugTextoMinutas();
window.SENT1_AUTO.debugDeteccaoDataSessao();
window.SENT1_AUTO.statusControlesRequisicao();
```

### Namespace Verification Task

```powershell
# VS Code task: "Verificar Namespace eProbe"
# Checks all functions are in consolidated namespace
```

## File Organization

**Documentation**: ALL `.md` files → `md/` directory  
**Exceptions**: `README.md`, `PRIVACY_POLICY.md` (root only)

```
✅ c:\Apps\eProbe\md\MY_DOC.md
❌ c:\Apps\eProbe\MY_DOC.md
❌ c:\Apps\eProbe\src\MY_DOC.md
```

## Common Patterns

### Function Family Pattern

Complete 4-operation set for entities:

```javascript
function getDadosCompletos[Entity]() { return entity; }
function hasDadosCompletos[Entity]() { return entity !== null; }
function resetDadosCompletos[Entity]() { entity = null; }
function showDadosCompletos[Entity]() { console.log(entity); }
```

### Process-Scoped State

```javascript
let processoAtual = null;
let processoComDataSessao = null; // Process with session data
let processoComDadosCompletos = null;

function hasDataSessaoPautado() {
    return (
        dataSessaoPautado !== null && processoComDataSessao === processoAtual
    );
}
```

### Error Resilience

- Try-catch everywhere around DOM queries and eProc API calls
- Fallback chain: API → Clipboard → Manual instructions
- Cache validation: Always check cached data matches current process

## Anti-Patterns - Never Do This

❌ Inline scripts in HTML (CSP violation)  
❌ `window.SENT1_AUTO.func =` outside consolidated section  
❌ Assuming jQuery availability without checking  
❌ Reprocessing same document multiple times (check `processosJaProcessados` Set)  
❌ Emojis or special Unicode in JavaScript code  
❌ Extensive refactoring of working code  
❌ Creating `.md` files outside `md/` directory

## Recent Updates (Dec 2025)

**Performance**: Variables properly scoped, jQuery detection capped at 5 attempts  
**Theme System**: Full CSP compliance, no inline scripts, clean message passing  
**Anti-Flash**: `document.write` injection eliminates all visual flash  
**Namespace**: Fallback system ensures functionality even with errors

**Stable Features**:

- Ultra-early function interception
- Instant theme application
- Robust eProc page detection
- Emergency namespace fallback

---

**Remember**: Syntax first, minimal changes always, verify namespace before suggesting functions.

### Current Documentation Structure

- `md/Anotações.md` - Domain requirements for session detection
- `md/BUSCA_DADOS_SESSAO.md` - Session data extraction specifications
- `md/EXTRACAO_MINUTAS_DETALHADAS.md` - Court minutes extraction details
- **New documentation**: Should follow this pattern and be placed in `md/`

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

- **Before**: Variables referenced without declaration causing runtime errors
- **After**: Strict variable declaration and scoping practices implemented

**Critical Fixes**:

1. **Variable Declaration**: All variables now properly declared with `let`/`const`
2. **Function Returns**: All functions return consistent boolean/object values
3. **Scope Management**: Variables declared in correct scope before use
4. **Performance Limits**: jQuery detection limited to 5 attempts max

### Theme System Refactoring (December 2025)

**Problem Solved**: CSP violations and broken theme functionality

- **Before**: Inline scripts in popup.html causing CSP errors
- **After**: Clean separation with all JS in popup.js

**Architecture Flow**:

1. User clicks theme button in popup.html
2. popup.js handles click → calls applyTheme(theme)
3. chrome.tabs.sendMessage sends to main.js content script
4. main.js calls window.applyThemeStyles(theme)
5. themeApply.js applies CSS to eProc interface

**Files Modified**:

- `popup.html`: Removed all inline scripts
- `popup.js`: Complete rewrite - clean, functional version (12KB)
- `popup_old.js`: Backup of problematic version (38KB) moved to src/old/

### Function Organization Cleanup

**Switch Configuration Handlers**:

- `highlight-session-date`: Controls session date highlighting
- `auto-session-requests`: Controls automatic API requests
- Both use chrome.storage.sync for persistence and chrome.tabs.sendMessage for communication

**Theme Management**:

- 4 themes: blue (default), dark, light, violet
- Persistent storage with fallback to blue
- Visual feedback with text-white and underline classes

### Development Patterns & Anti-Patterns

### Theme System Best Practices

**✅ Do:**

- Keep all JavaScript in separate .js files
- Use data attributes for theme configuration (`data-theme`, `data-index`)
- Implement proper message passing between popup and content script
- Store theme preferences in chrome.storage.sync
- Expose theme functions globally (window.applyThemeStyles)

## Recent Updates & Lessons Learned (Agosto 2025)

### 🔧 Problemas Resolvidos Recentemente

1. **Erros de Sintaxe Fatais**: Múltiplas correções de estruturas órfãs e fechamentos incorretos
2. **Namespace Fallback**: Sistema implementado para garantir funcionalidade mesmo com erros
3. **Interceptação Ultra-Precoce**: Sistema robusto para substituir funções problemáticas do eProc
4. **Anti-Flash Multicamadas**: Eliminação completa de flash visual durante carregamento

### 📚 Lições Críticas Aprendidas

**❌ NUNCA MAIS FAZER:**

- Modificações extensivas em código que já funciona
- Adicionar complexidade desnecessária a sistemas simples
- Ignorar erros de sintaxe durante desenvolvimento
- Assumir que funções existem sem verificar

**✅ SEMPRE FAZER:**

- Mudanças cirúrgicas e mínimas
- Verificar sintaxe antes de cada commit
- Preservar arquiteturas funcionais existentes
- Testar funções do namespace antes de sugerir

### 🎯 Foco Atual do Projeto

**Prioridades:**

1. Manter estabilidade da interceptação de funções
2. Garantir que namespace principal funcione sem fallback
3. Preservar sistema anti-flash existente
4. Manter compatibilidade com todas as páginas do eProc

**Funcionalidades Estáveis:**

- Sistema de interceptação ultra-precoce
- Aplicação de temas instantânea
- Detecção robusta de páginas do eProc
- Namespace com fallback de emergência

### 📋 Status de Desenvolvimento

- **Extensão**: ✅ Totalmente funcional
- **Sintaxe**: ✅ Sem erros críticos
- **Performance**: ✅ Otimizada com debounce e anti-flash
- **Compatibilidade**: ✅ eProc1g e eProc2g
- **Temas**: ✅ 4 temas disponíveis (blue, dark, light, violet)
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

````

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
````
