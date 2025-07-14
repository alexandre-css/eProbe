# 🧠 eProbe Semantic Kernel - Testes Experimentais

## 📋 Visão Geral

Esta implementação experimental adiciona capacidades de IA ao eProbe usando conceitos do Microsoft Semantic Kernel. O foco inicial é melhorar a detecção de datas de sessão usando processamento semântico em vez de apenas regex.

## 🎯 Funcionalidades Implementadas

### 1. Detecção Inteligente de Datas

-   **Objetivo**: Substituir regex por entendimento semântico
-   **Benefício**: Maior precisão na detecção de datas de sessão
-   **Fallback**: Sistema atual (regex) como backup

### 2. Controles de Segurança

-   **Limite de requests**: Máximo 5 chamadas para API por sessão
-   **Modo experimental**: Logs detalhados para análise
-   **Fallback garantido**: Se IA falhar, usa sistema atual

### 3. Integração Transparente

-   **Namespace**: `window.SENT1_AUTO.experimental`
-   **API key**: Reutiliza a mesma do ChatGPT do eProbe
-   **Validação**: Usa funções existentes do eProbe

## 🧪 Como Testar

### Pré-requisitos

1. Extensão eProbe carregada no Edge
2. API key do OpenAI configurada no popup da extensão
3. Página do eProc com informações de sessão aberta

### Comandos de Teste

#### 1. Teste Básico

```javascript
// No console do browser (F12)
window.SENT1_AUTO.experimental.testarIA();
```

#### 2. Ver Estatísticas

```javascript
window.SENT1_AUTO.experimental.statsIA();
```

#### 3. Habilitar/Desabilitar IA

```javascript
// Habilitar
window.SENT1_AUTO.experimental.toggleIA(true);

// Desabilitar
window.SENT1_AUTO.experimental.toggleIA(false);
```

#### 4. Testar Detecção Direta

```javascript
window.SENT1_AUTO.experimental.detectarDataSessaoComIA();
```

#### 5. Acessar Kernel Diretamente

```javascript
// Ver configurações do kernel
window.eProbeSemanticKernel.getStats();

// Resetar contador de requests
window.eProbeSemanticKernel.reset();
```

## 📊 Monitoramento

### Logs no Console

-   `🧠 SEMANTIC KERNEL`: Operações do kernel
-   `🧪 TESTE`: Resultados dos testes
-   `📊 Stats`: Estatísticas de uso
-   `✅/❌`: Sucessos e falhas

### Informações Capturadas

-   **Método de detecção**: IA vs regex
-   **Confiança da IA**: Score de 0.0 a 1.0
-   **Contexto**: Texto ao redor da data encontrada
-   **Contadores**: Requests usados/disponíveis

## 🔧 Configurações

### Limites de Segurança

```javascript
// Configurações padrão (editáveis no código)
maxRequests: 5,        // Máximo 5 requests por sessão
testMode: true,        // Logs detalhados habilitados
fallbackToRegex: true, // Sempre usar fallback se IA falhar
temperature: 0.1       // IA mais determinística
```

### Customização do Prompt

O prompt pode ser editado em `semanticKernel.js` na função `createDateDetectionPrompt()` para melhorar a precisão.

## 📈 Casos de Teste Recomendados

### 1. Teste com Data Clara

-   **Página**: Processo com "Data da sessão: 15/08/2025"
-   **Expectativa**: IA e regex devem encontrar a mesma data
-   **Verificação**: `metodoDeteccao` deve ser "semantic-kernel"

### 2. Teste com Data Ambígua

-   **Página**: Texto com múltiplas datas
-   **Expectativa**: IA deve escolher a data de sessão
-   **Verificação**: `confiancaIA` > 0.7

### 3. Teste sem Data

-   **Página**: Processo sem informação de sessão
-   **Expectativa**: Ambos (IA e regex) devem retornar null
-   **Verificação**: Fallback deve funcionar

### 4. Teste de Limite

-   **Ação**: Executar `testarIA()` 6 vezes seguidas
-   **Expectativa**: Após 5ª vez, deve usar apenas regex
-   **Verificação**: `requestsRemaining` deve chegar a 0

## 🚨 Solução de Problemas

### Erro: "API Key não encontrada"

1. Abrir popup da extensão
2. Ir em "Configurar API Key"
3. Inserir chave válida do OpenAI
4. Tentar novamente

### Erro: "API Error: 401"

-   API key inválida ou expirada
-   Verificar saldo na conta OpenAI

### Erro: "API Error: 429"

-   Limite de rate da OpenAI atingido
-   Aguardar ou usar conta com mais cota

### IA sempre retorna null

1. Verificar se a página tem texto sobre sessão
2. Testar com `window.SENT1_AUTO.experimental.statsIA()`
3. Verificar logs no console para detalhes

## 🔄 Comparação: Antes vs Depois

### Sistema Atual (Regex)

```javascript
// Padrões fixos
/(?:data\s*da\s*sess[aã]o|sess[aã]o\s*(?:de|em|para|:)?)\s*:?\s*(\d{1,2}\/\d{1,2}\/\d{4})/i;
```

### Sistema com IA

```javascript
// Entendimento contextual
"Encontrar a data da sessão de julgamento no texto fornecido"
+ validação com regex para segurança
```

## 📝 Resultados Esperados

### Melhorias Esperadas

1. **Maior precisão** na detecção de datas
2. **Menos falsos positivos** (datas que não são de sessão)
3. **Melhor handling** de variações textuais
4. **Logs detalhados** para análise

### Métricas de Sucesso

-   **Taxa de detecção**: Deve ser >= sistema atual
-   **Precisão**: Menos falsos positivos
-   **Confiabilidade**: Fallback sempre funciona
-   **Performance**: Máximo 2-3 segundos por detecção

## 🎯 Próximos Passos

### Se os testes forem bem-sucedidos:

1. **Expandir para extração de PDF**: IA para entender estrutura de documentos
2. **Análise de tipos de documento**: Classificação automática SENT1/INIC1
3. **Memória semântica**: Aprender padrões específicos do TJSC
4. **Orquestração completa**: Workflow automatizado completo

### Evolução do Módulo:

1. **Fase 1**: Detecção de datas ✅ (atual)
2. **Fase 2**: Extração de texto PDF
3. **Fase 3**: Classificação de documentos
4. **Fase 4**: Orquestração de workflows

## 📞 Suporte

Para questões sobre esta implementação experimental:

1. Verificar logs no console do browser
2. Testar funções de debug disponíveis
3. Comparar com sistema tradicional usando regex

---

**⚠️ Importante**: Esta é uma implementação experimental. O sistema tradicional permanece como fallback garantindo que a funcionalidade principal do eProbe não seja afetada.
