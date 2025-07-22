# Guia do Sistema Material Design - eProbe

## Overview

O sistema Material Design foi implementado para exibir dados de sessão do eProc com uma interface moderna e profissional, seguindo os princípios do Material Design 3.0.

## 🎨 Características Visuais

### Design System

-   **Framework**: Material Design 3.0
-   **Fonte**: Roboto (carregada automaticamente)
-   **Ícones**: Material Icons (carregados automaticamente)
-   **Responsividade**: Adaptativo para desktop e mobile
-   **Temas**: Suporte a modo claro e escuro

### Componentes

-   **Cards elevados** com sombras em camadas
-   **Status badges** com cores semânticas
-   **Ícones contextuais** para cada tipo de informação
-   **Animações sutis** de hover e focus
-   **Typography** hierárquica e legível

## 🚀 Funcionalidades Implementadas

### Detecção Automática

```javascript
// Inicialização automática quando a página carrega
window.SENT1_AUTO.inicializarMaterialDesign();

// Detecção e criação manual
window.SENT1_AUTO.detectarECriarCardMaterialDesign();
```

### Criação Manual de Cards

```javascript
// Criar card com dados específicos
const dadosSessao = {
    status: "Processo Pautado",
    tipoProcesso: "Recurso de Apelação",
    data: { dataFormatada: "15/04/2025" },
    orgao: "CAMARA1",
};

window.SENT1_AUTO.criarCardMaterialDesign(dadosSessao);
```

### Funções de Teste

```javascript
// Teste rápido com dados simulados
window.SENT1_AUTO.testarCardMaterialDesign();

// Teste de diferentes status
window.SENT1_AUTO.testarStatusMaterialDesign("pautado");
window.SENT1_AUTO.testarStatusMaterialDesign("julgado");
window.SENT1_AUTO.testarStatusMaterialDesign("retirado");
```

### Gerenciamento de Cards

```javascript
// Verificar se card está presente
window.SENT1_AUTO.cardMaterialDesignPresente();

// Atualizar card existente
window.SENT1_AUTO.atualizarCardMaterialDesign(novosDados);

// Remover card
window.SENT1_AUTO.removerCardMaterialDesign();
```

## 🎯 Status Suportados

### Processo Pautado

-   **Cor**: Verde (#4CAF50)
-   **Ícone**: schedule (relógio)
-   **Descrição**: Processo incluído em pauta para julgamento

### Processo Julgado

-   **Cor**: Azul (#2196F3)
-   **Ícone**: gavel (martelo)
-   **Descrição**: Processo decidido em sessão

### Processo Retirado de Pauta

-   **Cor**: Laranja (#FF9800)
-   **Ícone**: pause_circle (pausa)
-   **Descrição**: Processo retirado de pauta

### Status Neutro

-   **Cor**: Cinza (#607D8B)
-   **Ícone**: info (informação)
-   **Descrição**: Status não identificado

## 🔧 Configuração CSS

O CSS está implementado em `src/popup.css` com:

-   **Seletores específicos**: `#eprobe-data-sessao`
-   **Responsive breakpoints**: 768px para mobile
-   **CSS moderno**: backdrop-filter, grid, flexbox
-   **Animações**: transitions suaves (0.3s ease)
-   **Acessibilidade**: focus states e contraste adequado

## 📱 Responsive Design

### Desktop (>768px)

-   Cards com largura fixa (400px)
-   Margens adequadas para leitura
-   Hover effects completos

### Mobile (≤768px)

-   Cards ocupam 100% da largura
-   Margens reduzidas (12px)
-   Touch-friendly interactions

## 🧪 Como Testar

### 1. Teste Básico

```javascript
// No console do navegador (em página do eProc)
window.SENT1_AUTO.testarCardMaterialDesign();
```

### 2. Teste de Status Específico

```javascript
// Testar status "retirado"
window.SENT1_AUTO.testarStatusMaterialDesign("retirado");
```

### 3. Teste de Detecção Automática

```javascript
// Em página com dados de minutas
window.SENT1_AUTO.detectarECriarCardMaterialDesign();
```

### 4. Limpar Interface

```javascript
// Remover todos os cards de teste
window.SENT1_AUTO.removerCardMaterialDesign();
```

## 🐛 Debug e Troubleshooting

### Verificar Inicialização

```javascript
// Verificar se sistema foi inicializado
console.log(typeof window.SENT1_AUTO.inicializarMaterialDesign);
```

### Verificar Recursos Carregados

```javascript
// Verificar Material Icons
console.log(!!document.querySelector('link[href*="material-icons"]'));

// Verificar CSS personalizado
console.log(!!document.querySelector("#eprobe-estilo-personalizado"));
```

### Debug de Dados

```javascript
// Último dado detectado
console.log(window.SENT1_AUTO.ultimoDadosSessao);

// Timestamp da última detecção
console.log(window.SENT1_AUTO.timestampUltimaDeteccao);
```

## 🔄 Integração com Sistema Existente

O Material Design se integra perfeitamente com:

-   **Sistema de detecção**: Usa `detectarStatusSessao()` existente
-   **Funções de status**: Compatível com `obterTextoCardPorStatus()` e `obterCorCardPorStatus()`
-   **Namespace global**: Todas as funções em `window.SENT1_AUTO`
-   **Sistema de temas**: Respeita tema selecionado na extensão

## 📋 Próximos Passos

-   [ ] Adicionar mais tipos de status
-   [ ] Implementar notificações toast
-   [ ] Adicionar animações de entrada/saída
-   [ ] Criar dashboard com múltiplos cards
-   [ ] Integrar com sistema de filtros

---

**Criado**: Abril 2025  
**Versão**: 1.0  
**Compatibilidade**: Chrome Extension eProbe v1.0.1
