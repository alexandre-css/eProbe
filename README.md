# eProbe - Automação ePROC

Extensão para Chrome que automatiza a detecção, extração e processamento de documentos judiciais no sistema eProc do TJSC.

## 🎯 Funcionalidades

-   **Detecção automática**: Identifica documentos SENT1 e INIC1 nas páginas do eProc
-   **Extração de texto**: Extrai conteúdo de sentenças e petições automaticamente
-   **Cópia inteligente**: Copia texto com formatação adequada para análise por IA
-   **Interface moderna**: Botões integrados à interface do eProc
-   **Segurança**: Não coleta dados pessoais, processamento 100% local

## 🔧 Instalação

### Via Chrome Web Store (Recomendado)

1. Acesse a Chrome Web Store
2. Pesquise por "eProbe"
3. Clique em "Adicionar ao Chrome"

### Instalação Manual (Desenvolvimento)

1. Baixe ou clone este repositório
2. Abra `chrome://extensions/` no Chrome
3. Ative o "Modo do desenvolvedor"
4. Clique em "Carregar sem compactação"
5. Selecione a pasta `eProbe`

## 🚀 Como Usar

1. **Navegue** até uma página de processo no eProc (eproc1g.tjsc.jus.br ou eproc2g.tjsc.jus.br)
2. **Clique** no botão "AUTOMAÇÃO SENT1" que aparece na página
3. **Aguarde** a extensão processar automaticamente:
    - Detectar documentos disponíveis
    - Extrair texto do documento
    - Copiar para área de transferência
4. **Cole** o texto em ChatGPT, Claude ou outra IA para gerar resumo

## 📋 Requisitos

-   Google Chrome 88+
-   Acesso ao sistema eProc do TJSC
-   Permissões para:
    -   Acessar páginas do eProc
    -   Copiar texto para área de transferência
    -   Abrir novas abas quando necessário

## 🔒 Privacidade

-   **Não coleta dados** pessoais dos usuários
-   **Não envia informações** para servidores externos
-   **Processamento local**: Todo o trabalho é feito no seu navegador
-   **Código aberto**: Você pode verificar exatamente o que a extensão faz

## 🛠️ Desenvolvimento

### Estrutura do Projeto

```
eProbe/
├── src/
│   ├── main.js          # Lógica principal da extensão
│   ├── utils.js         # Funções utilitárias
│   ├── popup.html       # Interface do popup
│   ├── popup.css        # Estilos do popup
│   ├── popup.js         # Lógica do popup
│   └── ícones/          # Ícones da extensão
├── manifest.json        # Configuração da extensão
└── PRIVACY_POLICY.md    # Política de privacidade
```

### Contribuindo

1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Faça commit das suas alterações
4. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🆘 Suporte

Para suporte técnico ou dúvidas:

-   Abra uma issue no GitHub
-   Entre em contato: [seu-email@exemplo.com]

## 🏛️ Aviso Legal

Esta extensão é desenvolvida de forma independente e não possui afiliação oficial com o Tribunal de Justiça de Santa Catarina (TJSC). Use com responsabilidade e de acordo com as políticas de uso do eProc.
