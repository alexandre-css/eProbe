# Estrutura de Arquivos do eProbe

Organização final após reorganização em 12/07/2025

## 📁 Estrutura Principal

```
eProbe/
├── 📁 src/              # Código fonte da extensão
│   ├── main.js          # Script principal da extensão
│   ├── popup.html       # Interface do popup
│   ├── popup.js         # Lógica do popup
│   ├── popup.css        # Estilos da interface
│   ├── themeApply.js    # Sistema de temas
│   └── 📁 old/          # Códigos legados
│
├── 📁 assets/           # Recursos visuais
│   ├── icon16.png       # Ícone 16x16 (barra)
│   ├── icon48.png       # Ícone 48x48 (extensões)
│   ├── icon128.png      # Ícone 128x128 (store)
│   ├── iconmain.png     # Ícone principal
│   ├── icons.css        # Estilos de ícones
│   └── README.md        # Documentação dos assets
│
├── 📁 docs/             # Documentação completa
│   ├── BUSCA_DADOS_SESSAO.md
│   ├── EXTRACAO_MINUTAS_DETALHADAS.md
│   ├── ORGANIZACAO_DEMOS.md
│   ├── TESTE_TEMAS.md
│   ├── VALIDACAO_FINAL.md
│   ├── PRIVACY_POLICY.md
│   └── README.md        # Índice da documentação
│
├── 📁 tests/            # Testes e demonstrações
│   ├── teste-popup-liveserver.html  # Teste Live Server
│   ├── demonstracao.html            # Demo principal
│   ├── demos.html                   # Navegação demos
│   ├── 📁 demo/                     # Demos específicos
│   └── README.md                    # Guia de testes
│
├── 📁 .github/          # Configurações GitHub
├── 📁 .vscode/          # Configurações VS Code
├── manifest.json        # Configuração da extensão
├── index.html           # Landing page
├── README.md            # Documentação principal
└── ESTRUTURA.md         # Este arquivo
```

## 🔄 Mudanças Realizadas

### ✅ Reorganização Completa

1. **Movimentação de Arquivos**:

    - Ícones: `src/` → `assets/`
    - Documentação: raiz → `docs/`
    - Testes: raiz → `tests/`
    - Demos: raiz → `tests/demo/`

2. **Atualizações de Referências**:

    - `manifest.json`: Caminhos dos ícones
    - `popup.html`: Caminho do ícone principal
    - `README.md`: Caminhos das demonstrações

3. **Documentação Criada**:
    - `README.md` em cada pasta
    - Explicação da estrutura
    - Guias de uso específicos

### 📋 Benefícios da Nova Estrutura

-   **Organização Lógica**: Separação clara por tipo de arquivo
-   **Facilidade de Manutenção**: Localização intuitiva dos recursos
-   **Desenvolvimento Ágil**: Testes isolados em pasta específica
-   **Documentação Centralizada**: Todos os guides em um local
-   **Assets Organizados**: Recursos visuais em pasta dedicada

### 🔧 Como Usar Após Reorganização

1. **Desenvolvimento**: Edite arquivos em `src/`
2. **Testes**: Use arquivos em `tests/`
3. **Documentação**: Consulte `docs/`
4. **Assets**: Adicione novos recursos em `assets/`

### 🚀 Próximos Passos

-   Testar extensão após mudanças
-   Validar todos os caminhos de arquivos
-   Confirmar funcionamento completo
-   Atualizar landing page se necessário

## 📞 Suporte

Se algum caminho estiver quebrado após a reorganização:

1. Verifique as referências em `manifest.json`
2. Confirme caminhos em `popup.html`
3. Teste a extensão no Chrome
4. Valide demos no Live Server
