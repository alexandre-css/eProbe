# 🧪 Funções de Teste - Card de Sessão eProbe

## 📋 Resumo Executivo

Esta documentação apresenta as **3 funções principais** criadas para diagnosticar e resolver o problema de criação do card de sessão no eProbe.

## 🚀 Funções Disponíveis

### 1. 🩺 Diagnóstico Completo

```javascript
window.SENT1_AUTO.diagnosticoCompletoCard();
```

**Objetivo**: Análise completa de todos os componentes necessários para criação do card.

**O que verifica**:

-   ✅ Página atual (se é eProc)
-   ✅ Detecção de data de sessão
-   ✅ Containers disponíveis (8 estratégias)
-   ✅ Card existente no DOM
-   ✅ Funções necessárias
-   ✅ Elementos DOM críticos

**Retorna**: Relatório completo com conclusões e recomendações.

### 2. 🧪 Teste de Criação Robusta

```javascript
window.SENT1_AUTO.testarCriacaoCard();
```

**Objetivo**: Teste completo do processo de criação do card com múltiplas validações.

**O que faz**:

-   🔍 Verifica dados detectados
-   🎯 Tenta detectar se não houver dados
-   📦 Testa containers disponíveis
-   🗑️ Remove card existente
-   🎴 Força criação do card
-   ✅ Valida resultado final

**Retorna**: Status detalhado do teste com propriedades do card criado.

### 3. 🚀 Criação Forçada

```javascript
window.SENT1_AUTO.forcarInsercaoCardSemValidacao();
```

**Objetivo**: Criação do card **sem nenhuma validação** - método de último recurso.

**O que faz**:

-   🚫 Ignora todas as validações
-   🎭 Cria data fictícia se necessário
-   📦 Tenta 9 estratégias de container
-   🎯 Fallback para posição fixa
-   ✨ Adiciona animação de destaque

**Retorna**: Confirmação de criação com método usado.

## 📊 Fluxo de Diagnóstico Recomendado

### Passo 1: Diagnóstico Inicial

```javascript
// Execute primeiro para entender o estado atual
const relatorio = window.SENT1_AUTO.diagnosticoCompletoCard();
console.log(relatorio);
```

### Passo 2: Teste Normal

```javascript
// Se o diagnóstico mostrar condições adequadas
const resultado = window.SENT1_AUTO.testarCriacaoCard();
console.log(resultado);
```

### Passo 3: Força Bruta (se necessário)

```javascript
// Se o teste normal falhar
const forcado = window.SENT1_AUTO.forcarInsercaoCardSemValidacao();
console.log(forcado);
```

## 🎯 Estratégias de Container

As funções utilizam **9 estratégias progressivas** para encontrar onde inserir o card:

1. `#frmProcessoLista #divInfraAreaDados #divInfraAreaProcesso #fldCapa #divCapaProcesso .row.mt-2`
2. `#divInfraAreaProcesso #fldCapa #divCapaProcesso .row.mt-2`
3. `#fldCapa #divCapaProcesso .row.mt-2`
4. `#divCapaProcesso .row.mt-2`
5. `.row.mt-2`
6. `#fldCapa .row`
7. `#divCapaProcesso`
8. `#fldCapa`
9. **Fallback**: Posição fixa no `body`

## 🚨 Cenários de Erro Comum

### ❌ "Card não foi criado"

```javascript
// Execute diagnóstico primeiro
window.SENT1_AUTO.diagnosticoCompletoCard();

// Se containers estão disponíveis, use teste normal
window.SENT1_AUTO.testarCriacaoCard();

// Se falhar, use força bruta
window.SENT1_AUTO.forcarInsercaoCardSemValidacao();
```

### ❌ "Sem data detectada"

```javascript
// Force detecção de data primeiro
window.SENT1_AUTO.detectarDataSessao();

// Depois teste criação
window.SENT1_AUTO.testarCriacaoCard();
```

### ❌ "Containers não encontrados"

```javascript
// Use criação forçada que inclui fallback
window.SENT1_AUTO.forcarInsercaoCardSemValidacao();
```

## 📝 Logs e Debugging

Todas as funções produzem logs detalhados no console:

-   🩺 **Diagnóstico**: Relatório completo com emojis
-   🧪 **Teste**: Log passo-a-passo da criação
-   🚀 **Força**: Log de cada tentativa de container

## ⚡ Resolução Rápida

**Para resolver imediatamente o problema do card**:

```javascript
// Comando único que resolve na maioria dos casos
window.SENT1_AUTO.forcarInsercaoCardSemValidacao();
```

Este comando:

-   ✅ Funciona mesmo sem data detectada
-   ✅ Funciona mesmo sem containers ideais
-   ✅ Usa posição fixa como fallback
-   ✅ Cria visual atrativo com animação

## 🎯 Casos de Sucesso

Após qualquer função bem-sucedida, você deve ver:

1. **Card visível** na interface do eProc
2. **Log de sucesso** no console
3. **Animação** de destaque (função forçada)
4. **Dados de sessão** exibidos corretamente

## 🔧 Manutenção

Estas funções são **auto-contidas** e não afetam o funcionamento normal do eProbe. Podem ser executadas quantas vezes necessário para debug e teste.

---

_Documentação criada em: Janeiro 2025_  
_Funções implementadas para resolver: "o card de sessão não foi criado"_
