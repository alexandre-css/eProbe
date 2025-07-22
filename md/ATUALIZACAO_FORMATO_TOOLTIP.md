# 🔄 Atualização do Formato de Tooltip - eProbe

## 📋 Resumo das Mudanças

Esta atualização adapta o sistema de detecção de sessões do eProbe para o **novo formato de tooltip** implementado no sistema eProc, que agora inclui múltiplas sessões históricas com status traduzidos.

## 🆕 Novo Formato de Tooltip

### Estrutura Anterior

```
RELATÓRIO/VOTO (Incluído em Pauta em 10/04/2025 - 5a01)
```

### Nova Estrutura

```
10/04/2025 - Retirado em Pauta - RELATÓRIO/VOTO (5201740)<br/>
06/02/2025 - Sobrestado - art. 942 CPC em Pauta - RELATÓRIO/VOTO (5201740)<br/>
```

## ⚙️ Funcionalidades Implementadas

### 1. Sistema de Tradução de Status

```javascript
function traduzirStatusSessao(statusOriginal)
```

**Mapeamentos implementados:**

-   `"Sobrestado - art. 942 CPC em Pauta"` → `"Sobrestado (art. 942)"`
-   `"Retirado em Pauta"` → `"Retirado"`
-   `"Julgado"` → `"Julgado"`
-   `"Em Pauta"` → `"Pautado"`

**Sistema de cores:**

-   ✅ Verde: Julgado
-   🔴 Vermelho: Retirado
-   🟡 Amarelo: Sobrestado
-   🔵 Azul: Pautado

### 2. Extração de Múltiplas Sessões

```javascript
function extrairDadosCardSessaoGlobal(texto)
```

**Características:**

-   Detecta **todas** as sessões no tooltip
-   Retorna a **sessão mais recente** (primeira na lista)
-   Preserva histórico completo para referência
-   Suporta códigos de sessão de 7 dígitos

### 3. Regex Atualizada

```javascript
const padraoGeral =
    /(\d{2}\/\d{2}\/\d{4})\s*-\s*([^-]+?)\s*-\s*([^(]+?)\s*\((\d{7})\)/g;
```

**Captura:**

1. Data: `10/04/2025`
2. Status: `Retirado em Pauta`
3. Documento: `RELATÓRIO/VOTO`
4. Código: `5201740`

## 🔧 Funções de Teste Adicionadas

### Teste do Novo Formato

```javascript
window.SENT1_AUTO.testarNovoFormatoTooltip();
```

Testa a extração com exemplos do novo formato

### Teste XPath Real

```javascript
window.SENT1_AUTO.testarXPathTooltipReal();
```

Extrai e processa o tooltip atual da página eProc

## 📊 Estrutura de Dados Retornada

```javascript
{
    status: "Retirado",                    // Status traduzido
    statusCompleto: "Retirado em Pauta",   // Status completo traduzido
    statusOriginal: "Retirado em Pauta",   // Status original do eProc
    tipoProcesso: "RELATÓRIO/VOTO",        // Tipo do documento
    data: "10/04/2025",                    // Data da sessão mais recente
    codigo: "5201740",                     // Código da sessão
    cor: "red",                            // Cor para interface
    totalSessoes: 2,                       // Total de sessões encontradas
    todasSessoes: [...]                    // Array com todas as sessões
}
```

## 🎯 Integração com Interface

### Card Material Design Atualizado

-   Exibe status traduzido com cor apropriada
-   Mostra data da sessão mais recente
-   Indica quantidade total de sessões quando > 1
-   Mantém design minimalista e responsivo

### Compatibilidade Global

-   Mantém compatibilidade com `dataSessaoPautado`
-   Integra com namespace `window.SENT1_AUTO`
-   Preserva funções de callback existentes

## 🧪 Como Testar

1. **Abrir página do eProc** com processo em pauta
2. **Executar no console:**
    ```javascript
    window.SENT1_AUTO.testarXPathTooltipReal();
    ```
3. **Verificar detecção automática:**
    ```javascript
    window.SENT1_AUTO.detectarCardSessaoSimplificado();
    ```

## ⚠️ Observações Importantes

### Retrocompatibilidade

-   ✅ Mantém suporte ao formato anterior
-   ✅ Fallback para padrões antigos
-   ✅ Não quebra funcionalidades existentes

### Performance

-   🔥 Regex otimizada para múltiplas capturas
-   🔥 Processamento prioritário da sessão mais recente
-   🔥 Cache de dados para evitar reprocessamento

### Robustez

-   🛡️ Validação de datas brasileiras
-   🛡️ Sanitização de status para tradução
-   🛡️ Tratamento de casos edge (sessão única, múltiplas)

## 📈 Próximos Passos

1. **Monitoramento** do novo formato em produção
2. **Expansão** do sistema de tradução conforme novos status apareçam
3. **Otimização** baseada em feedback de uso real
4. **Documentação** de novos padrões identificados

---

**Versão:** 1.0 - Formato Tooltip Múltiplas Sessões  
**Data:** Janeiro 2025  
**Compatibilidade:** eProc TJSC (eproc1g/eproc2g)  
**Status:** ✅ Implementado e Funcional
