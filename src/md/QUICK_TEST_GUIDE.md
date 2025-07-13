# 🧪 Guia Rápido de Teste - Semantic Kernel

## 🚀 Teste em 5 Minutos

### 1. Carregar a Extensão

```
1. Abra Chrome → chrome://extensions/
2. Ative "Modo desenvolvedor"
3. "Carregar sem compactação" → selecione pasta c:\eProbe
4. Verifique se aparece "eProbe - Automação eproc"
```

### 2. Configurar API Key

```
1. Clique no ícone da extensão
2. "Configurar API Key"
3. Cole sua chave da OpenAI
4. "Salvar"
```

### 3. Testar em Página do eProc

```
1. Acesse qualquer processo no eProc
2. Pressione F12 → Console
3. Digite: window.SENT1_AUTO.experimental.testarIA()
4. Pressione Enter
```

## 📊 Interpretando Resultados

### ✅ Sucesso - IA Funcionou

```
🧠 SEMANTIC KERNEL: Data detectada via IA: 15/08/2025
✅ IA + VALIDAÇÃO: Data validada: 15/08/2025

📊 IA: Método: semantic-kernel, Confiança: 0.9
```

### 🔄 Sucesso - Fallback Funcionou

```
⚠️ SEMANTIC KERNEL: IA não encontrou data, usando fallback

🔄 SEMANTIC KERNEL: Executando detecção via regex (fallback)
📊 IA: Método: regex-fallback, Confiança: 0.7
```

### ❌ Nenhuma Data Encontrada

```

❌ TESTE: Nenhuma data encontrada
```

## 🔧 Comandos Úteis

### Ver Status do Sistema

```javascript
window.SENT1_AUTO.experimental.statsIA();
```

### Forçar Uso da IA

```javascript
window.SENT1_AUTO.experimental.toggleIA(true);
window.SENT1_AUTO.experimental.testarIA();
```

### Resetar Contadores

```javascript
window.eProbeSemanticKernel.reset();
```

## 🎯 O Que Observar

### Comparação de Métodos

-   **semantic-kernel**: IA entendeu o contexto
-   **regex-fallback**: IA falhou, regex funcionou
-   **Confiança > 0.8**: IA muito confiante

-   **Confiança < 0.5**: IA incerta

### Performance

-   **Tempo**: IA leva 2-3 segundos, regex é instantâneo
-   **Precisão**: IA deve ser mais precisa em casos ambíguos

-   **Reliability**: Fallback garante que sempre funciona

## 🚨 Troubleshooting Rápido

### Erro: "experimental is not defined"

```
- Extensão não carregou o semanticKernel.js
- Recarregue a extensão no chrome://extensions/
```

### Erro: "API Key não encontrada"

```
- Configure API key no popup da extensão primeiro
```

### IA sempre usa fallback

```
- Verifique saldo da conta OpenAI

- Teste: window.eProbeSemanticKernel.getStats()
```

## 📈 Casos de Teste Interessantes

### Teste 1: Data Clara

-   **Página**: Processo com "Sessão de julgamento: 20/12/2025"
-   **Esperado**: IA e regex encontram a mesma data

### Teste 2: Múltiplas Datas

-   **Página**: Processo com data de protocolo E data de sessão
-   **Esperado**: IA escolhe corretamente a data de sessão

### Teste 3: Variação Textual

-   **Página**: "Agendado para julgamento em 05/09/2025"
-   **Esperado**: IA entende melhor que regex

---

**💡 Dica**: Execute `testarIA()` em diferentes tipos de página do eProc para comparar resultados!
