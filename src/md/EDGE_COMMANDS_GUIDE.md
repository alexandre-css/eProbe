# 🌐 Guia para Usar Comandos eProbe no Microsoft Edge

## 📋 Passo a Passo Detalhado

### 1️⃣ Carregar a Extensão no Edge

1. **Abra o Microsoft Edge**
2. **Digite na barra de endereços**: `edge://extensions/`
3. **Ative o "Modo de desenvolvedor"** (canto superior direito)
4. **Clique em "Carregar sem compactação"**
5. **Selecione a pasta**: `c:\eProbe`
6. **Verifique se apareceu**: "eProbe" na lista de extensões

### 2️⃣ Navegar para uma Página do eProc

1. **Acesse qualquer página do eProc**:
    - `eproc1g.tjsc.jus.br`
    - `eproc2g.tjsc.jus.br`
2. **Exemplo de páginas válidas**:
    - Lista de processos
    - Detalhes de um processo específico
    - Página de documentos

### 3️⃣ Abrir o Console do Desenvolvedor no Edge

**MÉTODO 1** (Recomendado):

-   Pressione `F12`

**MÉTODO 2**:

-   Pressione `Ctrl + Shift + I`

**MÉTODO 3**:

-   Clique com botão direito na página → "Inspecionar elemento"
-   Vá para a aba "Console"

### 4️⃣ Verificar se a Extensão Carregou

Digite no console e pressione Enter:

```javascript
typeof window.SENT1_AUTO;
```

**Resultado esperado**: `"object"`

Se aparecer `"undefined"`, a extensão não carregou corretamente.

### 5️⃣ Comandos Disponíveis para Teste

#### 🔍 Verificar Funcionalidades Básicas

```javascript
// Ver todas as funções disponíveis
Object.keys(window.SENT1_AUTO);
```

#### 🧠 Testar Semantic Kernel (NOVO)

```javascript
// Verificar se o módulo experimental está carregado
window.SENT1_AUTO.experimental;
```

```javascript
// Testar detecção de data com IA
window.SENT1_AUTO.experimental.testarIA();
```

```javascript
// Ver estatísticas do Semantic Kernel
window.SENT1_AUTO.experimental.estatisticas();
```

#### 📅 Testar Detecção de Data (Método Tradicional)

```javascript
// Forçar detecção de data da sessão
window.SENT1_AUTO.forcarDeteccaoDataSessao();
```

```javascript
// Debug da detecção de data
window.SENT1_AUTO.debugDeteccaoDataSessao();
```

#### 🔧 Testar Funções de Interface

```javascript
// Testar inserção manual do card
window.SENT1_AUTO.forcarInsercaoCardSemValidacao();
```

### 6️⃣ Solução de Problemas Comuns

#### ❌ "window.SENT1_AUTO is undefined"

**Possíveis causas e soluções**:

1. **Extensão não carregou**:

    - Recarregue a página: `Ctrl + F5`
    - Verifique se está em uma página do eProc (domínio correto)

2. **Erro na extensão**:

    - Vá para `edge://extensions/`
    - Clique em "Erros" na extensão eProbe
    - Veja se há mensagens de erro

3. **Cache do navegador**:
    - Desabilite e reabilite a extensão
    - Ou recarregue a extensão clicando no ícone de atualização

#### ❌ "experimental is undefined"

**Solução**:

```javascript
// Verificar se o arquivo semanticKernel.js carregou
console.log(
    "Semantic Kernel carregado:",
    typeof window.SENT1_AUTO?.experimental
);
```

Se não existir, verifique se o arquivo `semanticKernel.js` está listado em `manifest.json`.

#### ❌ Comandos não funcionam

**Verificações**:

1. **Certifique-se que está na aba "Console"** (não "Elements" ou "Network")
2. **Cole o comando completo** (não digite manualmente)
3. **Pressione Enter após cada comando**
4. **Aguarde a resposta** (alguns comandos são assíncronos)

### 7️⃣ Comandos de Diagnóstico Avançado

#### 🔬 Verificar Estado Completo da Extensão

```javascript
console.log("Estado da extensão:", {
    namespace: typeof window.SENT1_AUTO,
    experimental: typeof window.SENT1_AUTO?.experimental,
    localizadores: typeof window.SENT1_AUTO?.localizadores,
    totalFuncoes: Object.keys(window.SENT1_AUTO || {}).length,
});
```

#### 🧪 Testar API Key do Perplexity

```javascript
// Verificar se há API key configurada
window.SENT1_AUTO.testApiKey();
```

#### 📊 Ver Logs da Extensão

```javascript
// Ver logs de erro da API
window.SENT1_AUTO.showErrorLogs();
```

### 8️⃣ Comandos para Uso Real (Após Testes)

#### 🚀 Automação Completa

```javascript
// Executar fluxo completo de automação
window.SENT1_AUTO.runFullAutomation();
```

#### 📄 Extrair Texto de Documento

```javascript
// Extrair texto do PDF/documento atual
window.SENT1_AUTO.autoExtractText();
```

#### 📋 Copiar para Clipboard

```javascript
// Copiar texto formatado para o clipboard
window.SENT1_AUTO.copyToClipboard("Seu texto aqui");
```

## 🎯 Teste Rápido Recomendado

Cole este bloco completo no console para um teste rápido:

```javascript
// TESTE RÁPIDO EPROBE + SEMANTIC KERNEL
console.log("🧪 INICIANDO TESTE RÁPIDO...");

// 1. Verificar extensão
console.log("1️⃣ Extensão carregada:", typeof window.SENT1_AUTO !== "undefined");

// 2. Verificar Semantic Kernel
console.log(
    "2️⃣ Semantic Kernel:",
    typeof window.SENT1_AUTO?.experimental !== "undefined"
);

// 3. Listar funcionalidades disponíveis
if (window.SENT1_AUTO) {
    console.log("3️⃣ Funcionalidades:", Object.keys(window.SENT1_AUTO));

    // 4. Testar função experimental se disponível
    if (window.SENT1_AUTO.experimental) {
        console.log("4️⃣ Testando Semantic Kernel...");
        window.SENT1_AUTO.experimental.estatisticas();
    }
}

console.log("✅ TESTE CONCLUÍDO");
```

## ⚠️ Dicas Importantes

1. **Sempre esteja em uma página do eProc** (domínio tjsc.jus.br)
2. **Use F12 para abrir o console** (mais confiável que Ctrl+Shift+I)
3. **Cole os comandos ao invés de digitar** (evita erros de sintaxe)
4. **Aguarde as respostas** (alguns comandos são assíncronos)
5. **Se algo não funcionar, recarregue a página** com Ctrl+F5

## 📞 Se Ainda Não Funcionar

Se mesmo seguindo todos os passos os comandos não funcionarem, me envie:

1. **Captura de tela do console** com o erro
2. **URL da página** onde está testando
3. **Resultado do comando**: `typeof window.SENT1_AUTO`
4. **Lista de extensões carregadas** em `edge://extensions/`

Assim posso te ajudar a diagnosticar o problema específico.
