# Funções de Estilização de divLembrete

## 📋 Visão Geral

Este conjunto de funções aplica estilos avançados aos elementos `divLembrete` do eProc com diferentes cores de background, transformando-os em cards Material Design com gradientes e efeitos hover.

## 🎨 Funções Disponíveis

### Funções Específicas por Cor

#### 1. `estilizarDivLembrete()` - AMARELO

-   **Background detectado:** `#efef8f`
-   **Gradiente aplicado:** Mantém estilo original com borda dourada
-   **Seletor:** `div.divLembrete[style*="background-color:#efef8f"]`

#### 2. `estilizarDivLembreteVermelho()` - VERMELHO

-   **Background detectado:** `#db8080`
-   **Gradiente aplicado:** `linear-gradient(#FAAFAF, #F78D8D)`
-   **Seletor:** `div.divLembrete[style*="background-color:#db8080"]`
-   **Borda:** `2px solid #d42626`
-   **Sombra:** `rgba(212, 38, 38, 0.3)`

#### 3. `estilizarDivLembreteAzul()` - AZUL

-   **Background detectado:** `#87adcd`
-   **Gradiente aplicado:** `linear-gradient(#AFCFFA, #8DC0F7)`
-   **Seletor:** `div.divLembrete[style*="background-color:#87adcd"]`
-   **Borda:** `2px solid #2663d4`
-   **Sombra:** `rgba(38, 99, 212, 0.3)`

#### 4. `estilizarDivLembreteVerde()` - VERDE

-   **Background detectado:** `#a7eda7`
-   **Gradiente aplicado:** `linear-gradient(#AFFAB6, #8DF792)`
-   **Seletor:** `div.divLembrete[style*="background-color:#a7eda7"]`
-   **Borda:** `2px solid #26d454`
-   **Sombra:** `rgba(38, 212, 84, 0.3)`

#### 5. `estilizarDivLembreteLaranja()` - LARANJA

-   **Background detectado:** `#f5b574`
-   **Gradiente aplicado:** `linear-gradient(#FAD3AF, #F7C68D)`
-   **Seletor:** `div.divLembrete[style*="background-color:#f5b574"]`
-   **Borda:** `2px solid #d4851a`
-   **Sombra:** `rgba(212, 133, 26, 0.3)`

### Funções Complementares

#### 6. `estilizarTodosDivLembrete()` - FUNÇÃO MASTER

-   **Descrição:** Aplica todas as estilizações de uma só vez
-   **Retorno:** Objeto com contadores por cor e total
-   **Uso:** Ideal para aplicação em massa

#### 7. `debugTodosDivLembrete()` - DEBUG MASTER

-   **Descrição:** Identifica e lista todos os divLembrete coloridos
-   **Retorno:** Resumo detalhado com contadores e informações
-   **Uso:** Diagnóstico completo da página

## 🚀 Como Usar

### No Console do Navegador (eProc)

```javascript
// Aplicar estilo a uma cor específica
window.SENT1_AUTO.estilizarDivLembreteVermelho();

// Aplicar estilos a todas as cores
window.SENT1_AUTO.estilizarTodosDivLembrete();

// Debug completo - ver todos os elementos
window.SENT1_AUTO.debugTodosDivLembrete();

// Debug específico para amarelos (função original)
window.SENT1_AUTO.debugDivLembrete();
```

### Exemplo de Resultado da Função Master

```javascript
// Resultado de estilizarTodosDivLembrete()
{
    amarelos: 2,
    vermelhos: 1,
    azuis: 3,
    verdes: 0,
    laranjas: 1,
    total: 7
}
```

## 🎯 Características dos Estilos Aplicados

### Efeitos Comuns a Todos

-   **Border-radius:** 8px
-   **Padding:** 12px
-   **Margin:** 8px 0
-   **Transição:** all 0.3s ease
-   **Hover:** Scale 1.02x com sombra intensificada
-   **Box-shadow:** Específica para cada cor

### Gradientes Material Design

Todos os gradientes seguem o padrão Material Design com cores harmonizadas:

-   Tom mais claro no topo
-   Tom mais saturado na base
-   Transição suave entre as cores

## 🔧 Integração com o Sistema

### Namespace Global

Todas as funções estão disponíveis via:

```javascript
window.SENT1_AUTO.{nomeDaFuncao}
```

### Detecção Automática

-   As funções detectam automaticamente os elementos na página
-   Aplicam estilos apenas aos elementos encontrados
-   Retornam `true` se elementos foram estilizados, `false` caso contrário

### Compatibilidade

-   Funciona em todas as páginas do eProc
-   Não interfere com funcionalidades existentes
-   Aplicação não destrutiva (pode ser revertida)

## 📊 Monitoramento e Debug

### Logs Detalhados

Todas as funções fornecem logs coloridos no console:

-   🎨 Início da estilização
-   ✅ Elementos estilizados com sucesso
-   ❌ Nenhum elemento encontrado
-   📋 Detalhes de cada elemento processado

### Contadores

-   Elementos encontrados por cor
-   Total de elementos processados
-   Status de sucesso/falha por função

## ⚠️ Notas Importantes

1. **Especificidade CSS:** Os estilos aplicados têm alta especificidade
2. **Performance:** Funções otimizadas para execução rápida
3. **Reversibilidade:** Estilos podem ser removidos recarregando a página
4. **Compatibilidade:** Testado em Chrome/Edge com extensão eProbe

## 🔄 Atualizações Futuras

-   Suporte a novas cores conforme demanda
-   Animações CSS mais elaboradas
-   Temas customizáveis por usuário
-   Persistência de configurações
