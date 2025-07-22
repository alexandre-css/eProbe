# 🎯 Sistema de Múltiplas Sessões - eProbe

## 📋 Visão Geral

O sistema de múltiplas sessões permite que o eProbe exiba não apenas a sessão mais recente, mas também o histórico completo de todas as sessões de julgamento de um processo através de um tooltip interativo.

## 🔧 Funcionalidades Implementadas

### 1. **Detecção da Sessão Principal**

-   ✅ **Prioridade**: Sempre usa a **primeira sessão** (mais recente) como principal
-   ✅ **Exibição**: Mostra status e data da sessão atual no card principal
-   ✅ **Indicador**: Exibe quantidade total de sessões quando > 1

### 2. **Tooltip Interativo de Histórico**

-   ✅ **Ativação**: Aparece ao passar o mouse sobre a linha "X sessões (passe o mouse para ver histórico)"
-   ✅ **Conteúdo**: Lista todas as sessões ordenadas cronologicamente (mais recente primeiro)
-   ✅ **Diferenciação**: Sessão atual marcada com 🔹 e texto "(atual)"
-   ✅ **Cores**: Cada status tem sua cor específica no tooltip

### 3. **Sistema de Cores por Status**

```javascript
Cores implementadas:
🔴 Vermelho (#dc2626): Retirado
🟡 Amarelo (#f59e0b): Sobrestado
🟣 Roxo (#8b5cf6): Pedido de Vista
🔵 Azul (#3b82f6): Pautado
🟢 Verde (#16a34a): Julgado
⚪ Cinza (#6b7280): Status não mapeado
```

## 🎨 Interface do Usuário

### Card Principal (Sessão Única)

```
📅 Data da Sessão
🔹 Julgado
Sessão: 10/04/2025
```

### Card Principal (Múltiplas Sessões)

```
📅 Data da Sessão
🔹 Retirado
Sessão: 10/04/2025
ℹ️ 4 sessões (passe o mouse para ver histórico)
```

### Tooltip de Histórico

```
📅 Histórico de Sessões
🔹 10/04/2025 - Retirado (atual)
• 06/02/2025 - Sobrestado (art. 942)
• 05/12/2024 - Pedido de Vista
• 19/11/2024 - Retirado
```

## 🧪 Funções de Teste

### Teste Completo do Sistema

```javascript
window.SENT1_AUTO.testarMultiplasSessoes();
```

**Resultado esperado:**

-   ✅ Remove card existente se houver
-   ✅ Cria card com 4 sessões de exemplo
-   ✅ Ativa tooltip interativo
-   ✅ Exibe instruções de uso

### Teste com Dados Reais

```javascript
window.SENT1_AUTO.testarXPathTooltipReal();
```

**Funcionalidade:**

-   Extrai tooltip real da página eProc
-   Processa múltiplas sessões se existirem
-   Retorna dados estruturados

## 📊 Estrutura de Dados

### Objeto Principal

```javascript
{
    status: "Retirado",                    // Status da sessão mais recente
    data: "10/04/2025",                    // Data da sessão mais recente
    totalSessoes: 4,                       // Total de sessões encontradas
    todasSessoes: [                        // Array com todas as sessões
        {
            data: "10/04/2025",
            status: "Retirado",
            statusOriginal: "Retirado em Pauta",
            cor: "#dc2626"
        },
        // ... outras sessões
    ]
}
```

### Array de Sessões

```javascript
todasSessoes: [
    {
        data: "10/04/2025", // Data formatada
        status: "Retirado", // Status traduzido
        statusOriginal: "Retirado em Pauta", // Status original eProc
        documento: "RELATÓRIO/VOTO", // Tipo do documento
        codigo: "5201740", // Código da sessão
        cor: "#dc2626", // Cor para interface
    },
];
```

## ⚙️ Configuração CSS

### Estilos do Tooltip

```css
#eprobe-tooltip {
    position: absolute;
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 10px;
    border-radius: 6px;
    font-size: 12px;
    max-width: 300px;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Hover Effects

```css
.eprobe-sessions-row:hover {
    background-color: rgba(0, 123, 255, 0.1);
    border-radius: 4px;
}
```

## 🔄 Fluxo de Funcionamento

### 1. **Detecção**

```
Tooltip eProc → extrairDadosCardSessaoGlobal() → Array de sessões
```

### 2. **Processamento**

```
Array completo → Primeira sessão (principal) → Dados estruturados
```

### 3. **Exibição**

```
Card principal → Sessão atual
Tooltip → Histórico completo (hover)
```

### 4. **Interação**

```
Mouse enter → Posicionar tooltip → Mostrar histórico
Mouse leave → Ocultar tooltip
```

## 🎯 Posicionamento do Tooltip

### Lógica de Posicionamento

1. **Padrão**: Acima do elemento alvo
2. **Fallback**: Abaixo se não couber acima
3. **Lateral**: Ajusta se sair da tela horizontalmente
4. **Margem**: Mantém 10px de distância das bordas

### Coordenadas

```javascript
// Centrado horizontalmente no elemento
left = rect.left + rect.width / 2 - tooltipRect.width / 2;

// Acima do elemento com margem
top = rect.top - tooltipRect.height - 10;
```

## 📈 Vantagens do Sistema

### ✅ **Usabilidade**

-   Interface limpa com sessão principal destacada
-   Histórico completo acessível via hover
-   Cores diferenciadas por status

### ✅ **Performance**

-   Tooltip criado apenas quando necessário
-   CSS otimizado para hover suave
-   Remoção automática de elementos duplicados

### ✅ **Compatibilidade**

-   Funciona com sessão única (sem tooltip)
-   Mantém retrocompatibilidade com código existente
-   Integração transparente com sistema atual

### ✅ **Robustez**

-   Posicionamento inteligente do tooltip
-   Tratamento de casos edge (bordas da tela)
-   Limpeza automática de elementos órfãos

## 🧪 Como Testar

### 1. **Teste Rápido**

```javascript
// No console do eProc
window.SENT1_AUTO.testarMultiplasSessoes();
```

### 2. **Verificar Tooltip**

-   Passe o mouse sobre "X sessões (passe o mouse para ver histórico)"
-   Verifique se o histórico aparece
-   Teste movimentação do mouse para confirmar hide/show

### 3. **Teste com Dados Reais**

```javascript
// Extrair dados reais da página
window.SENT1_AUTO.testarXPathTooltipReal();

// Executar detecção normal
window.SENT1_AUTO.detectarCardSessaoSimplificado();
```

## 🔍 Troubleshooting

### ❌ **Tooltip não aparece**

**Solução:** Verificar se `totalSessoes > 1` e se CSS foi injetado

### ❌ **Tooltip fora da tela**

**Solução:** Lógica de posicionamento ajusta automaticamente

### ❌ **Sessão errada no card**

**Solução:** Sistema sempre usa primeira sessão do array (mais recente)

### ❌ **Cores não aparecem**

**Solução:** Verificar mapeamento de status em `traduzirStatusSessao()`

---

**Versão:** 2.0 - Sistema de Múltiplas Sessões  
**Data:** Julho 2025  
**Status:** ✅ Funcional e Testado  
**Compatibilidade:** eProc TJSC (todas as versões)
