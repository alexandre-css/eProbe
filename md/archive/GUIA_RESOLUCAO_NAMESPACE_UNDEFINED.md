# 🚨 GUIA DE RESOLUÇÃO: window.SENT1_AUTO Undefined

## 🔍 DIAGNÓSTICO RÁPIDO

**Sintoma**: `Uncaught TypeError: Cannot read properties of undefined (reading 'hasDataSessaoPautado')`

**Causa**: O content script da extensão eProbe não foi carregado na página.

## 🚀 SOLUÇÕES EM ORDEM DE PRIORIDADE

### ✅ SOLUÇÃO 1: Verificação Básica (2 minutos)

1. **Verifique se está em uma página do eProc**:

    - URL deve conter `eproc1g.tjsc.jus.br` ou `eproc2g.tjsc.jus.br`
    - ❌ **NÃO funciona** em outras páginas

2. **Execute verificação ultra-simples**:
    ```javascript
    // Cole no console:
    console.log("URL:", window.location.href);
    console.log("É eProc:", window.location.href.includes("eproc"));
    console.log("Namespace:", typeof window.SENT1_AUTO);
    ```

### ✅ SOLUÇÃO 2: Recarregamento da Página (30 segundos)

1. **Pressione F5** ou Ctrl+R para recarregar
2. **Aguarde 3-5 segundos** para carregamento completo
3. **Teste novamente**:
    ```javascript
    window.SENT1_AUTO.debugRapido();
    ```

### ✅ SOLUÇÃO 3: Verificação da Extensão (1 minuto)

1. **Abra**: `edge://extensions/` (ou `chrome://extensions/`)
2. **Localize**: "eProbe - Automação eProc TJSC"
3. **Verifique**:
    - ✅ Extensão está **ativada**
    - ✅ Botão toggle está **azul/verde**
4. **Se desativada**: Clique no toggle para ativar

### ✅ SOLUÇÃO 4: Atualização da Extensão (1 minuto)

1. **Na página de extensões**:
    - Clique no botão **"Atualizar"** da extensão eProbe
    - Ou clique nos **3 pontinhos** → **"Recarregar"**
2. **Volte para a página do eProc**
3. **Pressione F5** para recarregar
4. **Teste novamente**

### ✅ SOLUÇÃO 5: Script de Emergência (Imediato)

Se todas as soluções acima falharem, use o script de emergência:

```javascript
// Cole este código no console da página do eProc:

console.log("🚨 CRIANDO NAMESPACE DE EMERGÊNCIA");
window.SENT1_AUTO = window.SENT1_AUTO || {};

window.SENT1_AUTO.criarCardEmergencia = function () {
    const card = document.createElement("div");
    card.id = "eprobe-data-sessao";
    card.innerHTML = `
        <div style="position: fixed; top: 20px; right: 20px; background: #d4edda; border: 1px solid #c3e6cb; border-radius: 8px; padding: 15px; max-width: 300px; z-index: 99999; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
            <h6 style="margin: 0 0 10px 0; color: #155724;">✅ eProbe - Card de Emergência</h6>
            <p style="margin: 0 0 5px 0;">Card criado manualmente</p>
            <small>Processo: ${
                window.location.href.match(
                    /(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})/
                )
                    ? window.location.href.match(
                          /(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})/
                      )[1]
                    : "N/A"
            }</small>
        </div>
    `;
    document.body.appendChild(card);
    console.log("✅ Card de emergência criado!");
    return true;
};

// Execute para criar o card:
window.SENT1_AUTO.criarCardEmergencia();
```

### ✅ SOLUÇÃO 6: Reinstalação da Extensão (5 minutos)

**Se nada funcionar**:

1. **Remover extensão**:

    - Vá em `edge://extensions/`
    - Clique **"Remover"** na extensão eProbe

2. **Reinstalar**:

    - Clique **"Carregar sem compactação"**
    - Selecione a pasta `c:\eProbe`
    - Confirme a instalação

3. **Testar**:
    - Navegue para página do eProc
    - Pressione F5
    - Teste: `window.SENT1_AUTO.debugRapido()`

## 🔧 SCRIPTS DE DIAGNÓSTICO

### Script 1: Verificação Ultra-Simples

```javascript
// Arquivo: development/tests/verificacao-ultra-simples.js
// Diagnóstico básico e criação de namespace de emergência
```

### Script 2: Script de Emergência Completo

```javascript
// Arquivo: development/tests/script-emergencia-namespace.js
// Criação forçada de funções básicas se content script falhar
```

### Script 3: Teste de Disponibilidade

```javascript
// Arquivo: development/tests/teste-disponibilidade-funcoes.js
// Verificação detalhada de todas as funções disponíveis
```

## 📊 INDICADORES DE SUCESSO

### ✅ Funcionando Corretamente:

```javascript
window.SENT1_AUTO.debugRapido();
// Retorna: { namespace: "object", totalFuncoes: 50+, eProc: true }
```

### ❌ Ainda com Problema:

```javascript
typeof window.SENT1_AUTO;
// Retorna: "undefined"
```

## 🎯 PRÓXIMOS PASSOS

**Após resolver o namespace**:

1. **Teste básico**: `window.SENT1_AUTO.debugRapido()`
2. **Teste de card**: `window.SENT1_AUTO.testarCriacaoCard()`
3. **Força criação**: `window.SENT1_AUTO.forcarInsercaoCardSemValidacao()`

## 🆘 SUPORTE ADICIONAL

**Se nenhuma solução funcionar**:

1. Verifique se está na **página correta** do eProc
2. Teste em uma **nova aba** do eProc
3. **Reinicie o navegador** completamente
4. Verifique se não há **bloqueadores de script** ativos

---

_Guia criado em: 16 de julho de 2025_  
_Para resolução do erro: window.SENT1_AUTO undefined_
