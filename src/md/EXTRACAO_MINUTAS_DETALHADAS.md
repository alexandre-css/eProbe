# 📋 Extração de Minutas Detalhadas - eProbe

## Objetivo

Implementar extração automática de textos detalhados das minutas (ACÓRDÃO e RELATÓRIO/VOTO) para integração ao modal de dados da sessão existente.

## Especificação Técnica

### 1. Localização dos Dados

**Página Base:** "Consulta Processual - Detalhes do Processo"
```html
<h1>Consulta Processual - Detalhes do Processo</h1>
```

**Tabela de Minutas:**
```html
<table class="infraTable" id="tblMinutas_*">
    <!-- Links para minutas individuais -->
</table>
```

**Links de Minuta:**
```html
<a onclick="window.open('controlador.php?acao=minuta_inteiro_teor&amp;acao_origem=processo_selecionar&amp;acao_retorno=processo_selecionar&amp;id_minuta=XXXXX')">
```

### 2. Estrutura da Página de Minuta

**Formulário Principal:**
```html
<form id="frmVisualizarInteiroTeor">
    <article data-id_documento="...">
        <!-- ACÓRDÃO -->
        <section data-nome_apresentacao="Ementa">
            <!-- TEXTO DA EMENTA A SER EXTRAÍDO -->
        </section>
    </article>
    
    <article data-id_documento="...">
        <!-- RELATÓRIO/VOTO -->
        <section data-nome_apresentacao="Voto">
            <!-- TEXTO DO VOTO A SER EXTRAÍDO -->
        </section>
    </article>
</form>
```

## Implementação

### 1. Estrutura de Dados Global

```javascript
// Variáveis globais para armazenar dados das minutas
let dadosCompletosMinutasTexto = null;
let processoComDadosMinutasTexto = null;

// Estrutura dos dados
dadosCompletosMinutasTexto = {
    processo: "numero-do-processo",
    minutas: [
        {
            id: "id_minuta_123",
            acorda: "texto completo da ementa...",
            relatorioVoto: "texto completo do voto...",
            timestamp: Date.now(),
            url: "url_da_minuta"
        }
    ],
    resumo: {
        totalMinutas: 1,
        temAcordao: true,
        temRelatorioVoto: true
    },
    timestamp: Date.now()
};
```

### 2. Funções Principais

#### 2.1. Detecção e Extração
```javascript
function detectarLinksMinutas()
function extrairDadosMinutasDetalhadas()
function processarPaginaMinuta(url, minutaId)
function extrairTextoSecao(nomeApresentacao)
```

#### 2.2. Funções Utilitárias (Padrão get/has/reset/show)
```javascript
function getDadosCompletosMinutasTexto()
function hasDadosCompletosMinutasTexto() 
function resetDadosCompletosMinutasTexto()
function showDadosCompletosMinutasTexto()
```

#### 2.3. Funções Globais Específicas
```javascript
function MinutaEmentaCapaProcesso()      // Retorna texto da ementa
function MinutaRelatorioVotoCapaProcesso() // Retorna texto do voto
```

### 3. Integração ao Modal Existente

#### 3.1. Modificar `showDadosCompletosMinutas()`
- Adicionar seção de acordeão após os dados da sessão
- Duas abas expansíveis:
  - **"ACÓRDÃO"** → `dados.minutas[].acorda`
  - **"RELATÓRIO/VOTO"** → `dados.minutas[].relatorioVoto`

#### 3.2. CSS do Acordeão
```css
.eprobe-accordion {
    background: rgb(32, 39, 51);
    border: 1px solid rgba(82, 82, 82, 0.3);
    border-radius: 8px;
}

.eprobe-accordion-header {
    background: rgb(19, 67, 119);
    color: rgb(243, 246, 249);
    cursor: pointer;
}

.eprobe-accordion-content {
    max-height: 300px;
    overflow-y: auto;
    padding: 16px;
}
```

### 4. Fluxo de Execução

#### 4.1. Integração ao `runFullAutomation()`
```javascript
// Após detectarDataSessao() e getDadosCompletosMinutas()
if (hasDadosCompletosMinutas()) {
    await extrairDadosMinutasDetalhadas();
    
    if (hasDadosCompletosMinutasTexto()) {
        // Atualizar modal para incluir dados das minutas
        showDadosCompletosMinutas(); // Versão expandida
    }
}
```

#### 4.2. Estratégia de Extração
1. **Detectar Links**: Buscar tabela `tblMinutas_*` e extrair `id_minuta`
2. **Abrir Minutas**: Para cada ID, abrir URL em iframe oculto ou nova aba
3. **Aguardar Carregamento**: Esperar `frmVisualizarInteiroTeor` estar disponível
4. **Extrair Textos**: Buscar seções por `data-nome_apresentacao`
5. **Consolidar Dados**: Armazenar em estrutura global
6. **Atualizar Interface**: Expandir modal com acordeão

### 5. Tratamento de Erros

#### 5.1. Cenários de Falha
- Minuta não encontrada (404)
- Seção "Ementa" ou "Voto" ausente
- Timeout no carregamento
- Problemas de cross-origin

#### 5.2. Fallbacks
- Log detalhado de cada etapa
- Continuar extração mesmo com falhas parciais
- Exibir apenas seções disponíveis no acordeão
- Indicadores visuais de dados não disponíveis

### 6. Performance e Cache

#### 6.1. Cache por Processo
- Armazenar dados extraídos por processo
- Evitar re-extração desnecessária
- Cache invalidado apenas ao trocar de processo

#### 6.2. Otimizações
- Extração em paralelo (máx 2-3 simultâneas)
- Timeout configurável (10-15 segundos)
- Limpeza de iframes/abas após extração

## Exposição Global (window.SENT1_AUTO)

```javascript
window.SENT1_AUTO = {
    // ...funções existentes...
    
    // Novas funções de minutas
    extrairDadosMinutasDetalhadas,
    getDadosCompletosMinutasTexto,
    hasDadosCompletosMinutasTexto,
    resetDadosCompletosMinutasTexto,
    showDadosCompletosMinutasTexto,
    
    // Funções específicas solicitadas
    MinutaEmentaCapaProcesso,
    MinutaRelatorioVotoCapaProcesso,
    
    // Debug
    debugExtracao MinutasTexto,
    forcarExtracaoMinutasTexto
};
```

## Exemplo de Uso

```javascript
// Extração automática (integrada ao fluxo)
window.SENT1_AUTO.runFullAutomation();

// Acesso aos dados
const ementa = window.SENT1_AUTO.MinutaEmentaCapaProcesso();
const voto = window.SENT1_AUTO.MinutaRelatorioVotoCapaProcesso();

// Debug
window.SENT1_AUTO.debugExtracaoMinutasTexto();
```

## Arquivos a Modificar

1. **`src/main.js`**:
   - Adicionar variáveis globais
   - Implementar funções de extração
   - Modificar `showDadosCompletosMinutas()`
   - Integrar ao `runFullAutomation()`
   - Adicionar ao `window.SENT1_AUTO`

2. **CSS inline** (dentro do próprio main.js):
   - Estilos do acordeão
   - Animações de expansão

## Critérios de Sucesso

- ✅ Extração automática funcionando
- ✅ Dados integrados ao modal existente
- ✅ Acordeão funcional e responsivo
- ✅ Funções globais `MinutaEmentaCapaProcesso()` e `MinutaRelatorioVotoCapaProcesso()` disponíveis
- ✅ Cache por processo funcionando
- ✅ Tratamento de erros robusto
- ✅ Performance adequada (< 30 segundos para múltiplas minutas)
