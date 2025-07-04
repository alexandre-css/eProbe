# Eproc Extension

Este projeto é uma extensão de navegador destinada a facilitar a interação com o sistema eproc.

## Estrutura do Projeto

- `src/background.js`: Código de fundo da extensão.
- `src/content.js`: Código injetado nas páginas da web.
- `src/manifest.json`: Manifesto da extensão.

## Instalação

1. Clone este repositório ou baixe os arquivos.
2. Abra o navegador e vá para a página de extensões (chrome://extensions/ para Chrome).
3. Ative o "Modo de desenvolvedor".
4. Clique em "Carregar sem compactação" e selecione a pasta `eproc-extension/src`.

## Uso

Após a instalação, a extensão estará disponível para uso nas páginas do eproc. O código injetado permitirá a execução de funcionalidades específicas conforme definido no `content.js`. 

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções.