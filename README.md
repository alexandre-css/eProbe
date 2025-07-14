# eProbe - Automação eProc TJSC

Extensão do Chrome que automatiza a detecção, extração e processamento de documentos judiciais no sistema eProc do TJSC.

**🌐 Landing Page**: https://e-probe.vercel.app/

## 🎯 Funcionalidades Principais

-   **Detecção automática**: Identifica documentos SENT1 e INIC1 nas páginas do eProc
-   **Extração de texto**: Extrai conteúdo de sentenças e petições (HTML e PDF)
-   **Organização inteligente**: Separadores personalizáveis para localizadores
-   **IA opcional**: Integração com Perplexity para resumos automáticos
-   **Sistema de temas**: Interface personalizable integrada ao eProc
-   **Cache inteligente**: Evita requisições desnecessárias ao sistema
-   **Privacidade**: Processamento local prioritário, conformidade com LGPD

## � Disponibilidade

### Chrome Web Store (Oficial)

🔄 **Em revisão** - Em breve disponível na loja oficial do Chrome

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
    - Opcionalmente gerar resumo via IA
4. **Use** o texto extraído para análise processual

## 🛡️ Privacidade e Segurança

### ✅ Conformidade Total

-   **Chrome Web Store**: Todas as políticas seguidas rigorosamente
-   **LGPD**: Conformidade com Lei Geral de Proteção de Dados
-   **Manifest V3**: Tecnologia mais segura e moderna

### 🔒 Proteção de Dados

-   **Processamento local**: Dados permanecem no seu dispositivo
-   **API opcional**: Perplexity usada apenas com consentimento explícito
-   **Sem coleta desnecessária**: Apenas dados necessários para funcionalidade
-   **Controle total**: Usuário decide quando e como usar cada recurso

### 📋 Transparência

-   **Código aberto**: Todo o funcionamento é auditável
-   **Política clara**: Disponível em `PRIVACY_POLICY.md`
-   **Documentação completa**: Análise de conformidade em `CHROME_STORE_COMPLIANCE_REPORT.md`

## 🎨 Demonstração

Para visualizar todas as funcionalidades da interface:

-   **Demonstração Completa**: Abra o arquivo `tests/demonstracao.html` no navegador
-   **Testes Específicos**: Arquivos de teste estão disponíveis na pasta `tests/demo/`
-   **Live Server**: Use `tests/teste-popup-liveserver.html` para testes interativos

A demonstração inclui:

-   Interface completa do popup
-   Sistema de acordeão de configurações
-   4 temas de interface (azul, escuro, claro, violeta)
-   5 temas de botões personalizáveis
-   Controles de configuração avançados

## 📋 Requisitos

-   Microsoft Edge 88+
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
