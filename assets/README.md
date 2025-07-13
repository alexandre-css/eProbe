# Assets do eProbe

Esta pasta contém todos os recursos visuais e arquivos de estilo da extensão eProbe.

## 🎨 Ícones

### Ícones da Extensão

-   `icon16.png` - Ícone 16x16px (barra do navegador)
-   `icon48.png` - Ícone 48x48px (página de extensões)
-   `icon128.png` - Ícone 128x128px (Chrome Web Store)
-   `iconmain.png` - Ícone principal da aplicação

### Estilos de Ícones

-   `icons.css` - Folha de estilos para ícones customizados

## 📐 Especificações Técnicas

### Tamanhos de Ícones

-   **16x16**: Para barra de ferramentas do navegador
-   **48x48**: Para página de gerenciamento de extensões
-   **128x128**: Para Chrome Web Store e detalhes da extensão

### Formatos Suportados

-   PNG com transparência
-   Otimizados para diferentes densidades de tela
-   Compatível com temas claro e escuro

## 🎯 Uso

Os ícones são referenciados automaticamente pelo `manifest.json`:

```json
{
    "icons": {
        "16": "assets/icon16.png",
        "48": "assets/icon48.png",
        "128": "assets/icon128.png"
    }
}
```

## 🔧 Manutenção

Para atualizar ícones:

1. Mantenha as dimensões exatas
2. Use PNG com transparência
3. Teste em diferentes temas do navegador
4. Otimize para tamanho de arquivo

## 🔗 Links Relacionados

-   [Código fonte](../src/) - Implementação da extensão
-   [Testes](../tests/) - Validação visual
-   [Documentação](../docs/) - Guias de desenvolvimento
