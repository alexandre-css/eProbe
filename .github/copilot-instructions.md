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

### Rule 7: Execution Worlds - ISOLATED vs MAIN

**`main.js` roda no mundo ISOLATED** (default do Manifest V3). **`debug-bridge.js` roda no mundo MAIN** (`"world": "MAIN"` no manifest).

Isso significa:

- `main.js` **NAO tem acesso** a funcoes nativas do eProc (`exibirSubFrm`, `fecharSubFrm`, `infraTooltipMostrar`, etc.)
- `main.js` **NAO pode** injetar `<script>` inline (CSP bloqueia)
- `debug-bridge.js` **TEM acesso** a tudo do contexto da pagina
- Ambos compartilham o mesmo DOM - **CustomEvent funciona entre mundos**

**Para executar funcoes do eProc a partir de main.js, use CustomEvent bridge:**

```javascript
// Em main.js (ISOLATED) - DISPARAR evento:
document.dispatchEvent(
    new CustomEvent("eprobe-meu-evento", {
        detail: { param1: "valor1" },
    }),
);

// Em debug-bridge.js (MAIN) - RECEBER e executar:
document.addEventListener("eprobe-meu-evento", function (e) {
    var param1 = e.detail.param1;
    // Aqui TEM acesso a funcoes do eProc
    exibirSubFrm(url, 1200, 700);
});
```

**NUNCA fazer:**

```javascript
// Em main.js:
var script = document.createElement("script");
script.textContent = "exibirSubFrm(...)"; // CSP BLOQUEIA!
document.body.appendChild(script);

// Em main.js:
if (typeof exibirSubFrm === "function") // SEMPRE false no ISOLATED!
```

### Rule 8: Escopos e Closures em main.js

**main.js tem multiplos escopos aninhados.** Funcoes definidas dentro da IIFE #10 (indentacao 12 espacos) NAO sao visiveis no escopo externo (indentacao 8 espacos), e vice-versa.

**Se uma funcao precisa ser chamada de um escopo**, ela DEVE ser definida nesse escopo ou em um escopo pai.

```javascript
// ESCOPO EXTERNO (8 espacos) - criarCardSessaoMaterial() vive aqui
function minhaFuncao() {
    /* ... */
}
function criarCardSessaoMaterial() {
    minhaFuncao(); // OK - mesmo escopo
}

// IIFE #10 (12 espacos) - namespace vive aqui
function outraFuncao() {
    /* ... */
}
const eProbeNamespaceFunctions = {
    outraFuncao: outraFuncao,
    minhaFuncao: minhaFuncao, // OK - closure do escopo pai
};
```

**try-catch engole erros de escopo!** Se uma funcao e chamada dentro de try-catch e nao existe naquele escopo, o erro `ReferenceError` e silenciado e parece que "nada aconteceu".

### Rule 9: Hashes do eProc sao por Acao

**Cada acao no eProc tem seu proprio hash.** O hash da URL atual (ex: `processo_selecionar`) NAO funciona para outras acoes (ex: `julgamento_historico_listar`).

**Para obter o hash correto de outra acao:**

- Extrair do atributo `onclick` de elementos DOM que ja usam essa acao
- NUNCA reusar `window.location.href.match(/hash=([a-f0-9]+)/)`

```javascript
// ERRADO: hash da pagina atual
var hashMatch = window.location.href.match(/hash=([a-f0-9]+)/);
var url = "controlador.php?acao=OUTRA_ACAO&hash=" + hashMatch[1]; // INVALIDO!

// CORRETO: extrair do onclick que ja tem o hash certo
var el = document.querySelector('[onclick*="OUTRA_ACAO"]');
var onclick = el.getAttribute("onclick");
var urlMatch = onclick.match(/exibirSubFrm\s*\(\s*'([^']+)'/);
var urlCorreta = urlMatch[1]; // Ja tem hash valido!
```

## Architecture Essentials

### Entry Points & Message Flow

**Content Script**: `src/main.js` injected at document_end (world: **ISOLATED**)

- Anti-flash injection via `document.write` before DOM render (lines 1-60)
- Ultra-early eProc function interception
- Global namespace `window.SENT1_AUTO` with fallback system
- **NAO tem acesso a funcoes nativas do eProc** (usar CustomEvent bridge)

**Debug Bridge**: `src/debug-bridge.js` injected at document_idle (world: **MAIN**)

- Acesso completo ao contexto da pagina e funcoes do eProc
- Listener de CustomEvent para executar acoes solicitadas por main.js
- Funcoes de debug expostas no console (`exportarEstruturaDOM`, etc.)

**Popup**: `src/popup.html` + `src/popup.js` (CSP-compliant, no inline scripts)

- Message passing: `chrome.tabs.sendMessage()` -> `main.js` listener
- Theme system: popup.js -> main.js -> `window.applyThemeStyles()` in themeApply.js

**Theme Application**: `src/themeApply.js` exposes `window.applyThemeStyles(themeName)`

### Communication Between Worlds

```
main.js (ISOLATED)  ---CustomEvent--->  debug-bridge.js (MAIN)
                    <---DOM sharing---
```

**Padrao implementado:** Card de sessao clicavel usa `eprobe-abrir-sessao-julgamento` CustomEvent.

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
❌ `document.createElement("script")` com `textContent` em main.js (CSP bloqueia no ISOLATED)  
❌ `window.SENT1_AUTO.func =` outside consolidated section  
❌ Assuming jQuery availability without checking  
❌ Assuming eProc native functions exist in main.js (`exibirSubFrm`, `fecharSubFrm` - mundo ISOLATED!)  
❌ Reusing URL hash for different eProc actions (each action has its own hash)  
❌ Defining function in IIFE #10 and calling from outer scope without namespace  
❌ Using try-catch around function calls without logging the error (silences ReferenceErrors)  
❌ Using `fetch()` for eProc pages that load content via AJAX (HTML returned has no dynamic data)  
❌ Reprocessing same document multiple times (check `processosJaProcessados` Set)  
❌ Emojis or special Unicode in JavaScript code  
❌ Extensive refactoring of working code  
❌ Creating `.md` files outside `md/` directory

## Recent Updates (Feb 2026)

**Card Sessao Clicavel**: Card de sessao abre sessao de julgamento com 1 clique

- CustomEvent bridge entre mundos ISOLATED (main.js) e MAIN (debug-bridge.js)
- Extrai URL do onclick do SVG no DOM (hash correto por acao)
- Polling no modal para encontrar link da sessao mais recente
- Fallback: deixa modal aberto para uso manual se timeout

**Licoes aprendidas:**

1. main.js roda em ISOLATED - nao tem acesso a funcoes do eProc
2. Script injection via createElement("script") e bloqueado por CSP
3. CustomEvent e o canal correto entre mundos (compartilham DOM)
4. Hashes do eProc sao unicos por acao - nao reusar hash da URL
5. try-catch sem log engole ReferenceError e parece "nada aconteceu"
6. Funcoes em escopos diferentes nao se enxergam - verificar indentacao
7. fetch de paginas eProc retorna HTML sem dados dinamicos (AJAX)

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
