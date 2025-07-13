# 📁 Reorganização do Projeto eProbe

## ✅ ESTRUTURA ATUAL ORGANIZADA

### 📦 Arquivos de Produção (`/src/`)

```
src/
├── main.js                    # Script principal da extensão
├── popup.js                   # Interface do popup (versão final)
├── popup.html                 # HTML do popup
├── popup.css                  # Estilos do popup
├── themeApply.js              # Sistema de temas
├── correcao_edge_v4.js        # ⭐ CORREÇÃO FINAL EDGE (FUNCIONAL)
├── semanticKernel.js          # Integração Semantic Kernel
├── md/                        # Documentações markdown
└── old/                       # Arquivos legados originais
```

### 🔧 Arquivos de Desenvolvimento (`/development/`)

```
development/
├── edge-fixes/               # Correções Edge (v1.0-v3.0)
│   ├── correcao_edge.js
│   ├── correcao_edge_v2.js
│   └── correcao_edge_v3.js
├── diagnostics/              # Ferramentas de diagnóstico
│   ├── diagnosticoNamespace.js
│   └── diagnostico_edge.js
├── tests/                    # Testes e experimentos
│   ├── test.js
│   ├── popup_clean.js
│   └── test-simple.js
├── demos-html/              # Demos HTML e interfaces
│   ├── test-popup.html
│   ├── teste-*.html
│   └── demonstracao.html
└── tests-original/          # Pasta de testes original
```

## 🎯 ARQUIVOS MANTIDOS NA RAIZ

### Arquivos Essenciais

-   `manifest.json` - Configuração da extensão
-   `index.html` - Landing page do projeto
-   `README.md` - Documentação principal
-   Arquivos de configuração (`.gitignore`, workspace, etc.)

### Pastas Importantes

-   `docs/` - Documentação completa
-   `assets/` - Recursos visuais
-   `.github/` - Configurações GitHub

## 🚀 COMO USAR APÓS REORGANIZAÇÃO

### Para Desenvolvimento

```bash
# Arquivos de teste
cd development/tests/

# Correções Edge históricas
cd development/edge-fixes/

# Diagnósticos
cd development/diagnostics/
```

### Para Produção

```bash
# Todos os arquivos funcionais estão em:
cd src/

# Correção Edge funcional:
src/correcao_edge_v4.js
```

## ⭐ DESTAQUE: CORREÇÃO EDGE v4.0

O arquivo **`src/correcao_edge_v4.js`** é a versão FINAL e FUNCIONAL:

-   ✅ Namespace `window.SENT1_AUTO` 100% funcional
-   ✅ Detecção robusta de datas (5 padrões)
-   ✅ Automação completa
-   ✅ Sistema de proteção e monitoramento
-   ✅ Compatibilidade total com Microsoft Edge

## 📋 MUDANÇAS REALIZADAS

### ✅ Movidos para `/development/`:

-   Todas as versões de teste Edge (v1.0-v3.0)
-   Arquivos de diagnóstico
-   Testes experimentais
-   Demos HTML
-   Pasta `tests/` original

### ✅ Mantidos em `/src/`:

-   Arquivos de produção funcionais
-   Versão final Edge v4.0
-   Scripts principais da extensão

### ✅ Estrutura Limpa:

-   Separação clara: produção vs. desenvolvimento
-   Documentação organizada
-   Facilita manutenção futura

---

**Data da Reorganização**: 13 de julho de 2025  
**Status**: ✅ Projeto completamente organizado e funcional
