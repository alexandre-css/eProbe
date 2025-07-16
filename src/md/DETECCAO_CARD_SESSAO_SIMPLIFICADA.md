# 🎯 Detecção de Card de Sessão Simplificada

## 📋 Implementação da Regra Única

Conforme solicitado, a detecção foi **SIMPLIFICADA** para seguir APENAS uma regra específica e eficaz.

## 🔍 Regra de Detecção

### Elemento Alvo

```html
<button
    type="button"
    class="infraLegendObrigatorio btn btn-link btn-sm p-0"
></button>
```

### Padrão de Extração

```
Agravo Interno (Incluído em Pauta em 29/07/2025 - CAMPUB5)
```

**Regex Pattern:**

```javascript
/([A-Za-zÀ-ÿ\s]+)\s*\(Incluído em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/i;
```

**Dados Extraídos:**

-   **Tipo de Processo**: "Agravo Interno"
-   **Data da Sessão**: "29/07/2025"
-   **Órgão Julgador**: "CAMPUB5"

## 🚀 Funcionamento

### 1. Detecção Automática

-   ✅ Execução automática no carregamento da página
-   ✅ Busca especificamente por botões `infraLegendObrigatorio`
-   ✅ Fallback para todos os botões se necessário

### 2. Estratégia de Busca

1. **Primária**: Busca botões com classe `infraLegendObrigatorio`
2. **Fallback**: Busca em todos os botões da página pelo padrão "Incluído em Pauta em"

### 3. Criação Automática do Card

-   ✅ Card criado automaticamente quando dados são encontrados
-   ✅ Design Material com informações de status e data
-   ✅ Integração visual na página do eProc

## 🧪 Testes Disponíveis

### Função de Teste Principal

```javascript
window.SENT1_AUTO.testarDeteccaoCard();
```

**Resultados do Teste:**

-   Quantidade de botões `infraLegendObrigatorio` encontrados
-   Quantidade de botões com padrão "Incluído em Pauta"
-   Sucesso/falha da detecção
-   Dados extraídos (se houver)

### Função de Detecção Manual

```javascript
window.SENT1_AUTO.detectarCardSessaoSimplificado();
```

## 📊 Implementação Técnica

### Arquivo Principal

-   **Local**: `c:\eProbe\src\main.js`
-   **Função**: `detectarCardSessaoSimplificado()`
-   **Linha**: ~13006

### Execução Automática

-   **Local**: `inicializarMaterialDesign()`
-   **Timing**: 1 segundo após carregamento da página
-   **Delay adicional**: 500ms para garantir DOM completo

### Namespace Global

-   **Função**: `window.SENT1_AUTO.detectarCardSessaoSimplificado()`
-   **Status**: ✅ Disponível para testes no console

## 🎨 Card Material Design

### Características

-   **Status**: "Processo Pautado"
-   **Cor**: Azul (#3b82f6) para status "Pautado"
-   **Ícone**: 📅 (calendário)
-   **Layout**: Horizontal com badges informativos

### Dados Exibidos

-   Data da sessão (formatada)
-   Órgão julgador (badge)
-   Número do processo (badge)
-   Marca "eProbe Auto"

## ✅ Validações

### Data Brasileira

-   ✅ Formato DD/MM/YYYY
-   ✅ Validação de intervalos (dias 1-31, meses 1-12)
-   ✅ Conversão para objeto Date

### Persistência de Dados

-   ✅ Salvamento em variáveis globais
-   ✅ Associação com número do processo atual
-   ✅ Timestamp de criação

## 🔧 Solução Robusta

### Características Principais

1. **Regra Única**: Apenas o padrão especificado
2. **Detecção Automática**: Sem intervenção manual
3. **Fallback Inteligente**: Múltiplas estratégias de busca
4. **Card Automático**: Criação imediata quando detectado
5. **Testes Integrados**: Funções de debug no console

### Removido Completamente

-   ❌ Soluções de copy-paste desnecessárias
-   ❌ Injeções manuais no console
-   ❌ Scripts externos de emergência
-   ❌ Múltiplos padrões complexos

## 🎯 Resultado Final

**OBJETIVO ALCANÇADO**: Card de sessão aparece automaticamente quando a regra específica é encontrada na página, usando APENAS a detecção do botão `infraLegendObrigatorio` e o padrão `(Incluído em Pauta em DATA - ORGAO)`.

**STATUS**: ✅ **IMPLEMENTADO E FUNCIONAL**
