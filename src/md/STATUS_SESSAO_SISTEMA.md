# Sistema de Detecção de Status de Sessão - eProbe

## 📋 Funcionalidades Implementadas

O eProbe agora detecta automaticamente diferentes tipos de status de sessão dos processos baseado nas minutas do eProc/TJSC.

### 🎯 Status Detectados

1. **"Processo Pautado"** - Detecta padrão: `Incluído em Pauta em [data]`
2. **"Processo Julgado"** - Detecta padrão: `Julgado em Pauta em [data]`
3. **"Processo Retirado de Pauta"** - Detecta padrão: `Retirado em Pauta em [data]`

### 🎨 Interface Dinâmica

O card na capa do processo agora se adapta automaticamente baseado no status:

-   **🔵 Azul (#3b82f6)** - Processo Pautado
-   **🟢 Verde (#16a34a)** - Processo Julgado
-   **🔴 Vermelho (#dc2626)** - Processo Retirado de Pauta

### 📊 Estrutura de Dados

Cada status detectado contém:

```javascript
{
    status: "Pautado|Julgado|Retirado",
    descricao: "Processo [Status]",
    tipoProcesso: "Mérito|Declaração|Preliminar|etc",
    data: {dataFormatada, dataOriginal, dia, mes, ano, timestamp},
    orgao: "CAMPUB5|etc",
    textoCompleto: "Texto original da minuta"
}
```

## 🔧 Funções Principais

### Detecção Automática

-   `detectarStatusSessao()` - Detecta status baseado nas minutas
-   `detectarDataSessaoComStatus()` - Detecção combinada de data + status
-   `detectarDataSessao()` - Função principal atualizada (usa detecção de status primeiro)

### Interface

-   `obterTextoCardPorStatus(status)` - Retorna texto apropriado para o card
-   `obterCorCardPorStatus(status)` - Retorna cor apropriada para o card
-   `inserirDataSessaoNaInterface()` - Função atualizada com suporte a status

### Gerenciamento de Estado

-   `getStatusSessao()` - Obtém status atual
-   `hasStatusSessao()` - Verifica se há status detectado
-   `resetStatusSessao()` - Limpa status armazenado
-   `showStatusSessaoInfo()` - Exibe informações do status

## 🧪 Funções de Teste e Debug

### Testes Completos

```javascript
// Teste completo do sistema
window.SENT1_AUTO.testarSistemaStatusSessao();

// Debug de padrões no texto da página
window.SENT1_AUTO.debugPadroesStatusSessao();
```

### Debug Específico

```javascript
// Detectar status manualmente
window.SENT1_AUTO.debugDeteccaoStatusSessao();

// Mostrar informações do status atual
window.SENT1_AUTO.debugStatusSessao();

// Verificar estado geral da detecção
window.SENT1_AUTO.debugDeteccaoDataSessao();
```

## 🎯 Regex Patterns Utilizados

### Processo Pautado

```regex
/([A-Za-zÀ-ÿ\s]+(?:Interno|Declaração|Mérito|Preliminar|Cautelar))\s*\(Incluído em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/gi
```

### Processo Julgado

```regex
/([A-Za-zÀ-ÿ\s]+(?:Interno|Declaração|Mérito|Preliminar|Cautelar))\s*\(Julgado em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/gi
```

### Processo Retirado

```regex
/([A-Za-zÀ-ÿ\s]+(?:Interno|Declaração|Mérito|Preliminar|Cautelar))\s*\(Retirado em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/gi
```

## 📝 Exemplos de Uso

### Testar Detecção

```javascript
// Abrir console do navegador na página do processo
// Executar teste completo
const resultado = window.SENT1_AUTO.testarSistemaStatusSessao();
console.log(resultado);
```

### Verificar Status Atual

```javascript
// Verificar se há status detectado
if (window.SENT1_AUTO.hasStatusSessao()) {
    const status = window.SENT1_AUTO.getStatusSessao();
    console.log("Status atual:", status);
}
```

### Debug de Problemas

```javascript
// Se a detecção não estiver funcionando
window.SENT1_AUTO.debugPadroesStatusSessao();
```

## 🔄 Fluxo de Funcionamento

1. **Inicialização**: Página carrega → `detectarDataSessao()` é chamada
2. **Detecção Prioritária**: Tenta `detectarStatusSessao()` primeiro
3. **Status Encontrado**: Usa dados específicos do status
4. **Fallback**: Se não encontrar status, usa detecção genérica de data
5. **Interface**: Atualiza card com texto e cor baseados no status
6. **Cache**: Armazena informações para uso posterior

## ⚠️ Notas Importantes

-   A detecção de status tem **prioridade** sobre a detecção genérica
-   O sistema mantém **compatibilidade** com processos sem status específico
-   As cores e textos são **configuráveis** através das funções utilitárias
-   Todos os **regex patterns** são case-insensitive e suportam acentos
-   O sistema funciona tanto para **detecção inicial** quanto **re-detecção**

## 🚀 Próximos Passos

-   [ ] Adicionar mais tipos de status se necessário
-   [ ] Implementar configuração de cores personalizadas
-   [ ] Adicionar animações de transição entre status
-   [ ] Criar relatório de estatísticas de status detectados
