# 🔧 eProbe - Arquivos de Desenvolvimento

Esta pasta contém todos os arquivos criados durante o desenvolvimento e testes da extensão eProbe, organizados por categoria.

## 📁 Estrutura das Pastas

### `/edge-fixes/`

Correções progressivas para compatibilidade com Microsoft Edge:

-   `correcao_edge.js` - Versão 1.0 (inicial)
-   `correcao_edge_v2.js` - Versão 2.0 (melhorias)
-   `correcao_edge_v3.js` - Versão 3.0 (estabilidade)

**Nota**: A versão final v4.0 está em `src/correcao_edge_v4.js` (arquivo de produção)

### `/diagnostics/`

Ferramentas de diagnóstico para troubleshooting:

-   `diagnosticoNamespace.js` - Diagnóstico do namespace SENT1_AUTO
-   `diagnostico_edge.js` - Diagnóstico específico para Edge

### `/tests/`

Arquivos de teste e versões experimentais:

-   `test.js` - Testes gerais
-   `popup_clean.js` - Versão limpa do popup
-   `test-simple.js` - Testes simples
-   `tests-original/` - Pasta de testes original

### `/demos-html/`

Demonstrações HTML e testes de interface:

-   `test-popup.html` - Teste do popup
-   `teste-accordion.html` - Teste de accordion
-   `teste-header-centralizado.html` - Teste de header
-   `teste-interface-completa.html` - Interface completa
-   `teste-popup-liveserver.html` - Popup para live server
-   `demonstracao.html` - Arquivo de demonstração
-   `demo-accordion.html` - Demo accordion
-   `demos.html` - Página de demos

## 🎯 Arquivos de Produção (Pasta Principal)

Os seguintes arquivos permanecem na pasta `src/` pois são usados em produção:

-   `main.js` - Script principal da extensão
-   `popup.js` - Script do popup (versão final)
-   `popup.html` - Interface do popup
-   `popup.css` - Estilos do popup
-   `themeApply.js` - Sistema de temas
-   `correcao_edge_v4.js` - Correção final para Edge (FUNCIONAL)
-   `semanticKernel.js` - Integração com Semantic Kernel

## 📝 Histórico de Desenvolvimento

1. **Fase 1**: Desenvolvimento inicial e testes básicos
2. **Fase 2**: Correções para Edge (v1.0 - v3.0)
3. **Fase 3**: Diagnósticos e troubleshooting
4. **Fase 4**: Versão final ultra robusta (v4.0)
5. **Fase 5**: Organização e limpeza (atual)

## 🚀 Como Usar

-   **Para desenvolvimento**: Consulte os arquivos nesta pasta
-   **Para produção**: Use apenas os arquivos da pasta `src/`
-   **Para Edge**: Use `src/correcao_edge_v4.js` (versão ultra robusta funcional)

---

**Organizado em**: 13 de julho de 2025  
**Status**: ✅ Projeto organizado e funcional
