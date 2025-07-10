# Toggle de Requisições Automáticas - eProbe

## 📋 Descrição

Foi adicionado um novo toggle no popup da extensão para controlar as requisições automáticas de sessão.

## 🔧 Como Funciona

### Interface do Popup

-   **Localização**: Abaixo do toggle "Data da sessão em destaque"
-   **Texto**: "Requisições automáticas de sessão"
-   **Estado padrão**: DESABILITADO (por segurança)

### Funcionalidade

-   **Habilitado**: Permite que a extensão faça requisições automáticas para buscar dados de sessão
-   **Desabilitado**: Bloqueia todas as requisições automáticas (comportamento padrão)

## ⚙️ Implementação

### Arquivos Modificados

1. **popup.html**: Adicionado novo toggle na seção de configurações
2. **popup.js**: Implementada lógica de controle do toggle
3. **main.js**: Adicionado handler de mensagens para comunicação com o popup

### Código Adicionado

#### popup.html

```html
<div class="setting-item">
    <label class="switch" for="auto-session-requests">
        <input type="checkbox" id="auto-session-requests" />
        <span class="slider"></span>
    </label>
    <label class="setting-label" for="auto-session-requests">
        Requisições automáticas de sessão
    </label>
</div>
```

#### popup.js

-   Handler para o toggle `auto-session-requests`
-   Salvamento do estado no `chrome.storage.local`
-   Comunicação com o content script via mensagens

#### main.js

-   Handler de mensagens `toggleAutoSessionRequests`
-   Controle da variável `REQUISICOES_AUTOMATICAS_DESABILITADAS`
-   Logs para debug

## 🧪 Como Testar

1. **Carregar a Extensão**:

    - Abra o Chrome
    - Vá para `chrome://extensions/`
    - Ative "Modo desenvolvedor"
    - Clique "Carregar sem compactação"
    - Selecione a pasta `c:\eProbe`

2. **Testar o Toggle**:

    - Navegue para uma página do eProc
    - Clique no ícone da extensão
    - Observe o toggle "Requisições automáticas de sessão"
    - Teste ligar/desligar e verificar o feedback

3. **Verificar Funcionamento**:
    - Abra o Console do navegador (F12)
    - Procure por mensagens como:
        - `📨 MENSAGEM: Recebida do popup:`
        - `🔓 POPUP: Habilitando requisições automáticas`
        - `🔒 POPUP: Desabilitando requisições automáticas`

## 🔐 Segurança

-   **Padrão seguro**: O toggle inicia sempre DESABILITADO
-   **Controle do usuário**: Apenas o usuário pode habilitar requisições automáticas
-   **Prevenção de logout**: Mantém a proteção contra requisições excessivas

## 📊 Estado do Sistema

Para verificar o estado atual das requisições, execute no console:

```javascript
window.SENT1_AUTO.statusRequisicoes();
```

## 🚀 Próximos Passos

1. Testar a integração end-to-end
2. Verificar se o estado persiste entre sessões
3. Adicionar mais opções de controle se necessário
4. Documentar comportamento para usuários finais
