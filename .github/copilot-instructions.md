# eProbe - AI Coding Instructions

## Project Overview

eProbe is a Chrome extension that automates document detection and text extraction from the Brazilian court system (eProc/TJSC). It intelligently identifies legal documents (SENT1, INIC1), extracts text content, and facilitates AI-powered document analysis.

**🌐 Project Landing Page**: https://e-probe.vercel.app/

## Architecture & Core Components

### Main Entry Points

-   **`src/main.js`**: Primary content script (8005 lines) - handles all automation logic and message handling
-   **`src/popup.js`**: Extension popup interface with functional theme system and configuration switches (332 lines)
-   **`src/themeApply.js`**: Real-time theme application with global applyThemeStyles() function (88 lines)
-   **`src/popup.html`**: Clean popup interface without inline scripts (CSP compliant) (164 lines)
-   **`manifest.json`**: Chrome extension configuration with eProc domain permissions (31 lines)
-   **`index.html`**: Project landing page with comprehensive feature showcase (986 lines) - https://e-probe.vercel.app/

### Key Architectural Patterns

#### Global Namespace Design

All public functions are exposed via `window.SENT1_AUTO` namespace for debugging and external access:

```javascript
window.SENT1_AUTO = {
    runFullAutomation, // Main workflow orchestrator
    detectarDataSessao, // Session date detection from court minutes
    getDadosCompletosMinutas, // Extract complete session data
    debugTextoMinutas, // Debug function for text analysis
    // ... 50+ other functions
};
```

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

**Namespace Access Errors**: Functions must be explicitly added to `window.SENT1_AUTO`:

```javascript
window.SENT1_AUTO.debugTextoMinutas = debugTextoMinutas;
```

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

-   **Documentation files**: All `.md` files should be saved in `src/md/` directory
-   **Code files**: JavaScript, HTML, CSS in `src/` root
-   **Backup files**: Legacy/old versions in `src/old/`
-   **Configuration**: Extension manifest and settings in project root

### Current Documentation Structure

-   `src/md/Anotações.md` - Domain requirements for session detection
-   `src/md/BUSCA_DADOS_SESSAO.md` - Session data extraction specifications
-   `src/md/EXTRACAO_MINUTAS_DETALHADAS.md` - Court minutes extraction details
-   **New documentation**: Should follow this pattern and be placed in `src/md/`

## File Priority for Understanding

1. `manifest.json` - Extension permissions and content script configuration
2. `src/popup.js` - Theme system and user interface patterns (clean, CSP-compliant version)
3. `src/themeApply.js` - Global theme application functions
4. `src/main.js` - Content script with message handlers
5. `src/md/Anotações.md` - Domain requirements for session detection
6. `src/md/*.md` - Additional documentation (all markdown files organized in md folder)

## Recent Updates & Architecture Changes

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
