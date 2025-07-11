# eProbe - AI Coding Instructions

## Project Overview

eProbe is a Chrome extension that automates document detection and text extraction from the Brazilian court system (eProc/TJSC). It intelligently identifies legal documents (SENT1, INIC1), extracts text content, and facilitates AI-powered document analysis.

## Architecture & Core Components

### Main Entry Points

-   **`src/main.js`**: Primary content script (7943 lines) - handles all automation logic
-   **`src/popup.js`**: Extension popup interface with theme management
-   **`src/themeApply.js`**: Real-time theme application and session date highlighting
-   **`manifest.json`**: Chrome extension configuration with eProc domain permissions

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
# 1. Open Chrome → chrome://extensions/
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

## File Priority for Understanding

1. `src/main.js` (lines 2757-2800: `runFullAutomation`, 6580-6660: `detectarDataSessao`)
2. `manifest.json` - Extension permissions and content script configuration
3. `src/md/Anotações.md` - Domain requirements for session detection
4. `src/popup.js` - Theme system and user interface patterns
