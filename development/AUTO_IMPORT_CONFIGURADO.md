# 🚀 Auto Import Configurado para eProbe

## ✅ Configurações Aplicadas

### 📦 Extensões Instaladas:

-   **Auto Import - ES6, TS, JSX, TSX** (`steoates.autoimport`)
-   **Error Lens** (`usernamehw.errorlens`)
-   **Todo Tree** (`gruntfuggly.todo-tree`)

### ⚙️ Configurações Adicionadas ao Settings.json:

-   Auto Import habilitado para JavaScript/TypeScript
-   Error Lens configurado para destacar ReferenceError
-   Todo Tree configurado para tags personalizadas (NAMESPACE, DECLARE, etc.)
-   JavaScript InlayHints habilitado
-   Bracket pair colorization melhorado

## 🎯 Como Usar o Auto Import no eProbe

### 1. **Detecção de ReferenceError**

```javascript
// ❌ ANTES: Error Lens destacará em vermelho
if (variavelNaoDeclarada) { ... }

// ✅ DEPOIS: Auto Import sugerirá declarar
let variavelNaoDeclarada = false;
if (variavelNaoDeclarada) { ... }
```

### 2. **Autocomplete de Funções do Namespace**

```javascript
// Digite no VS Code:
window.SENT1_AUTO.auto...
// Autocomplete mostrará:
// - autoExtractText
// - autoOpenDocumentoRelevante
// - etc.
```

### 3. **Snippets Personalizados**

No VS Code, digite os prefixos:

| Prefixo                 | Descrição                     |
| ----------------------- | ----------------------------- |
| `eprobe-function`       | Nova função com padrão eProbe |
| `eprobe-var`            | Declaração segura de variável |
| `eprobe-namespace-add`  | Template para namespace       |
| `eprobe-check-function` | Verificação de função         |
| `eprobe-debug`          | Template de debug             |
| `eprobe-test`           | Função de teste completa      |

### 4. **Tags TODO Personalizadas**

```javascript
// TODO: NAMESPACE - Adicionar função ao window.SENT1_AUTO
// TODO: DECLARE - Verificar se variável foi declarada
// MOVIDA: Função foi movida para escopo principal
// EPROBE: Específico do projeto eProbe
```

### 5. **Tasks Disponíveis**

Use `Ctrl+Shift+P` → "Tasks: Run Task":

-   **Testar Extensão eProbe**: Instruções para testar extensão
-   **Verificar Namespace eProbe**: Lista funções e namespace
-   **Detectar ReferenceError Potenciais**: Encontra variáveis problemáticas

## 🔍 Atalhos Úteis

| Ação                  | Atalho         | Descrição                     |
| --------------------- | -------------- | ----------------------------- |
| **Autocomplete**      | `Ctrl+Space`   | Lista funções do namespace    |
| **Ir para definição** | `F12`          | Vai onde função está definida |
| **Ver referências**   | `Shift+F12`    | Mostra todos os usos          |
| **Quick Fix**         | `Ctrl+.`       | Sugestões de correção         |
| **Command Palette**   | `Ctrl+Shift+P` | Executar tasks                |

## 🎨 Cores Personalizadas

-   **NAMESPACE**: 🔵 Azul - Função precisa ser adicionada ao namespace
-   **DECLARE**: 🔴 Vermelho - Variável precisa ser declarada
-   **MOVIDA**: 🟢 Verde - Função foi movida com sucesso
-   **EPROBE**: 🟣 Roxo - Específico do projeto

## 🧪 Arquivo de Teste

Execute o arquivo `teste-auto-import-configurado.js` no console do navegador (página eProc) para verificar se tudo está funcionando.

## 📁 Arquivos Criados/Modificados

### Configurações:

-   `settings.json` (global) - Configurações Auto Import
-   `.vscode/settings.json` - Configurações específicas do workspace
-   `.vscode/eprobe.code-snippets` - Snippets personalizados
-   `.vscode/tasks.json` - Tasks de verificação

### Testes:

-   `development/tests/teste-auto-import-configurado.js` - Teste completo

## ✅ Problemas Resolvidos

-   ✅ **ReferenceError**: Error Lens destacará variáveis não declaradas
-   ✅ **Namespace**: Autocomplete mostrará funções disponíveis
-   ✅ **Função faltando**: Tasks verificarão se função está no namespace
-   ✅ **Declaração duplicada**: Detectará múltiplas declarações
-   ✅ **Escopo incorreto**: InlayHints mostrará tipos de variáveis

## 🚀 Resultado Final

Com essa configuração, você terá:

1. **Detecção automática** de variáveis não declaradas (ReferenceError)
2. **Autocomplete inteligente** das funções do `window.SENT1_AUTO`
3. **Snippets personalizados** seguindo padrões eProbe
4. **Tasks automatizadas** para verificar namespace
5. **Highlights visuais** para TODOs de namespace
6. **Navegação rápida** entre funções e definições

A extensão eProbe agora terá desenvolvimento muito mais seguro e organizado! 🎉
