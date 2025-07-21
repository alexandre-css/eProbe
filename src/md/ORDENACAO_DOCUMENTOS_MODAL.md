# 📅 Ordenação de Documentos por Data de Assinatura no Modal

## 🎯 Funcionalidade Implementada

O modal **"MÚLTIPLOS DOCUMENTOS ENCONTRADOS"** agora apresenta os documentos em **ordem decrescente por data de assinatura**, garantindo que o documento mais recente apareça sempre no topo da lista.

## 🔧 Como Funciona

### Algoritmo de Ordenação

1. **Extração de Data**: A função `parseDataBrasileira()` converte datas no formato brasileiro (DD/MM/YYYY ou DD/MM/YY) para objetos Date JavaScript.

2. **Critérios de Ordenação**:
    - **Prioridade 1**: Documentos com datas válidas são ordenados por data (mais recente primeiro)
    - **Prioridade 2**: Documentos com data aparecem antes dos sem data
    - **Prioridade 3**: Para documentos sem data, ordena por número de sequência do evento (decrescente)

### Exemplo Visual

```
ANTES (ordem original):
1. SENTENÇA ANTIGA - 15/01/2024
2. SENTENÇA RECENTE - 20/07/2025
3. SENTENÇA MÉDIA - 10/06/2025
4. DOCUMENTO SEM DATA - (sem data)

APÓS ORDENAÇÃO (mais novo → mais antigo):
1. SENTENÇA RECENTE - 20/07/2025   ⬆️ MAIS RECENTE
2. SENTENÇA MÉDIA - 10/06/2025
3. SENTENÇA ANTIGA - 15/01/2024
4. DOCUMENTO SEM DATA - (sem data) ⬇️ SEM DATA (por seq)
```

## 🧪 Testando a Funcionalidade

### Teste Automatizado

Execute no console do navegador (em uma página do eProc):

```javascript
window.SENT1_AUTO.testarOrdenacaoDocumentosPorData();
```

### Resultado Esperado

```
🧪 TESTE: Validando ordenação de documentos por data de assinatura...

📋 ANTES DA ORDENAÇÃO:
  1. SENTENÇA MAIS ANTIGA - 15/01/2024
  2. SENTENÇA MAIS RECENTE - 20/07/2025
  3. SENTENÇA MÉDIA - 10/06/2025
  4. DOCUMENTO SEM DATA - Sem data

🔄 APÓS A ORDENAÇÃO (mais novo → mais antigo):
  1. SENTENÇA MAIS RECENTE - 20/07/2025
  2. SENTENÇA MÉDIA - 10/06/2025
  3. SENTENÇA MAIS ANTIGA - 15/01/2024
  4. DOCUMENTO SEM DATA - Sem data

✅ VALIDAÇÃO DA ORDENAÇÃO:
  ✅ primeiroEhMaisRecente: PASSOU
  ✅ segundoEhMedio: PASSOU
  ✅ terceiroEhMaisAntigo: PASSOU
  ✅ ultimoEhSemData: PASSOU

🎯 RESULTADO FINAL: ✅ TODOS OS TESTES PASSARAM
```

## 📍 Arquivos Modificados

### `src/main.js` - Função `showDocumentSelectionModal()`

**Linhas ~5598-5650**: Implementada ordenação automática no início da função.

**Principais mudanças**:

1. **Array de cópia**: `[...documentosRelevantes]` para não modificar o array original
2. **Função de parse de data**: Converte formato brasileiro DD/MM/YYYY para Date
3. **Tratamento de anos com 2 dígitos**: 25 → 2025
4. **Logs de debug**: Mostra ordem antes/depois da ordenação
5. **Fallback inteligente**: Documentos sem data usam ordem por sequência de evento

### Namespace - Nova Função de Teste

**`testarOrdenacaoDocumentosPorData()`**: Função completa para validar o algoritmo de ordenação com dados de teste sintéticos.

## 🎨 Experiência do Usuário

### Comportamento Visual

-   **Documento mais recente**: Aparece sempre no topo com destaque visual
-   **Ordenação intuitiva**: Lista cronológica reversa (timeline decrescente)
-   **Preservação de dados**: Todos os metadados (magistrado, vara, tamanho) mantidos
-   **Performance**: Ordenação executada apenas uma vez ao abrir modal

### Indicadores Visuais

O modal mantém todos os elementos visuais originais:

-   📄 Ícone de documento
-   📋 Descrição do evento
-   📁 Informações do arquivo
-   👨‍⚖️ Magistrado responsável
-   🏛️ Vara/órgão
-   ✍️ **"Assinado em [data]"** - agora usado para ordenação

## ⚙️ Configuração e Manutenção

### Formatos de Data Suportados

-   `DD/MM/YYYY` (formato completo): `20/07/2025`
-   `DD/MM/YY` (formato abreviado): `20/07/25`
-   **Auto-correção**: Anos com 2 dígitos assumem século 21 (20XX)

### Tratamento de Casos Especiais

1. **Documentos sem data**: Ficam no final, ordenados por sequência de evento
2. **Datas inválidas**: Tratadas como "sem data"
3. **Formatos inesperados**: Fallback seguro para ordem original

## 📊 Logs de Debug

Durante desenvolvimento, os logs mostram:

```
🔄 ORDENAÇÃO: Documentos ordenados por data (mais novo → mais antigo):
  1. SENTENÇA DE PROCEDÊNCIA - 20/07/2025 (Evento 30)
  2. DESPACHO DE SANEAMENTO - 10/06/2025 (Evento 20)
  3. INICIAL - 15/01/2024 (Evento 10)
  4. PROCURAÇÃO - Sem data (Evento 5)
```

## ✅ Validação e Qualidade

### Critérios de Sucesso

-   [x] Documentos mais recentes aparecem primeiro
-   [x] Datas brasileiras são parseadas corretamente
-   [x] Documentos sem data ficam no final
-   [x] Ordem original preservada como fallback
-   [x] Performance otimizada (uma ordenação por modal)
-   [x] Compatibilidade com todos os tipos de documento
-   [x] Logs informativos para debug

### Teste de Regressão

A ordenação não afeta:

-   Funcionamento do modal original
-   Seleção e abertura de documentos
-   Metadados e informações extras
-   Eventos de clique e hover
-   Estilização e layout

## 🚀 Próximos Passos

### Possíveis Melhorias Futuras

1. **Configuração do usuário**: Permitir escolher ordem ascendente/descendente
2. **Filtros adicionais**: Por tipo de documento, magistrado, etc.
3. **Agrupamento**: Por data ou período (mesmo mês/ano)
4. **Indicadores visuais**: Badge "MAIS RECENTE" no primeiro documento

---

**Data da implementação**: 21 de julho de 2025  
**Versão**: eProbe v2025.07.21  
**Desenvolvedor**: GitHub Copilot  
**Status**: ✅ Implementado e testado
