# 🎯 Sistema de Tooltip com Posicionamento Inteligente

## 📋 RESUMO

Implementado sistema avançado de posicionamento de tooltip que usa o **card de sessão como referência** para determinar automaticamente a melhor posição de exibição.

## ✨ NOVOS RECURSOS IMPLEMENTADOS

### 🎯 Posicionamento Inteligente Relativo ao Card

- **Referência**: Card de sessão (`#eprobe-data-sessao`)
- **Algoritmo**: Calcula automaticamente a melhor posição baseada no card
- **Prioridades**: Sistema de posições preferenciais com fallback inteligente

### 📐 Posições Suportadas (por ordem de prioridade)

1. **Acima do card** (preferencial)
   - Centralizado horizontalmente
   - 12px de distância vertical

2. **À direita do card**
   - Centralizado verticalmente
   - 12px de distância horizontal

3. **À esquerda do card**
   - Centralizado verticalmente
   - 12px de distância horizontal

4. **Abaixo do card** (último recurso)
   - Centralizado horizontalmente
   - 12px de distância vertical

### 🛡️ Detecção de Bordas da Tela

- **Margem segura**: 15px das bordas da viewport
- **Ajuste automático**: Se tooltip sair da tela, posição é ajustada
- **Viewport responsivo**: Considera scroll e redimensionamento

### 🎨 Animações Suaves

- **Entrada**: Fade-in suave (0.2s)
- **Saída**: Fade-out suave (0.2s)
- **Performance**: Usa `requestAnimationFrame` para animações fluidas

## 🔧 IMPLEMENTAÇÃO TÉCNICA

### Função Principal: `posicionarTooltipRelativoAoCard()`

```javascript
function posicionarTooltipRelativoAoCard(tooltip, cardElement) {
    // 1. Calcula viewport e scroll
    // 2. Obtém posição e dimensões do card
    // 3. Testa posições por ordem de prioridade
    // 4. Verifica se tooltip fica dentro da tela
    // 5. Aplica ajustes se necessário
    // 6. Posiciona com coordenadas precisas
}
```

### Melhorias na Função `aplicarTooltipUnificado()`

- **Tooltip otimizado**: CSS com `opacity: 0` inicial
- **Posicionamento**: Chama `posicionarTooltipRelativoAoCard()`
- **Animação**: `requestAnimationFrame` para fade-in suave
- **Event listeners**: `passive: true` para performance

### Algoritmo de Posicionamento

1. **Coleta dados**:
   - Viewport (largura, altura, scroll)
   - Card (posição, dimensões, centro)
   - Tooltip (largura, altura)

2. **Testa posições**:
   - Verifica se cada posição candidata fica dentro da viewport
   - Seleciona primeira posição viável por ordem de prioridade

3. **Fallback inteligente**:
   - Se nenhuma posição ideal, ajusta automaticamente
   - Mantém tooltip sempre visível na tela

## 🎯 BENEFÍCIOS

### Para o Usuário
- **Tooltip sempre visível**: Nunca sai da tela
- **Posicionamento consistente**: Sempre relativo ao card
- **Animações suaves**: Experiência visual agradável
- **Responsivo**: Funciona em qualquer tamanho de tela

### Para o Sistema
- **Performance otimizada**: Event listeners passivos
- **Código limpo**: Função única centralizada
- **Manutenível**: Algoritmo claro e comentado
- **Escalável**: Fácil adicionar novas posições

## 🧪 TESTE E VALIDAÇÃO

### Como Testar
```javascript
// No console do navegador (página do eProc):
window.SENT1_AUTO.diagnosticarSistemaCompleto();
```

### Cenários de Teste
1. **Card no centro da página**: Tooltip aparece acima
2. **Card próximo ao topo**: Tooltip aparece à direita ou abaixo
3. **Card próximo à lateral**: Tooltip se ajusta automaticamente
4. **Tela pequena**: Tooltip sempre fica visível

### Logs de Debug
- `🎯 POSICIONAMENTO: Calculando posição ótima...`
- `✅ POSICIONAMENTO: Posição "acima" selecionada`
- `⚠️ POSICIONAMENTO: Usando posição fallback...`

## 📊 COMPARAÇÃO: ANTES vs DEPOIS

### ❌ ANTES (Posicionamento Fixo)
```javascript
tooltip.style.left = rect.left - 10 + "px";
tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + "px";
```
- Posição fixa relativa ao card
- Tooltip podia sair da tela
- Sem animações
- Não considerava viewport

### ✅ DEPOIS (Posicionamento Inteligente)
```javascript
posicionarTooltipRelativoAoCard(tooltip, cardElement);
```
- 4 posições candidatas com prioridades
- Detecção automática de bordas
- Animações suaves entrada/saída
- Totalmente responsivo

## 🔧 CORREÇÃO CRÍTICA FINAL: Posicionamento Estático Eliminado

### ❌ **Problema Persistente Identificado**
Mesmo após as correções, o tooltip ainda estava aparecendo com:
- `position: absolute` 
- `left: 15px, top: 12px` (coordenadas estáticas)
- Não estava usando o posicionamento inteligente

### 🔍 **Causa Raiz Descoberta**
1. **Múltiplas funções** criando tooltips com mesmo ID
2. **CSS inicial** definindo coordenadas estáticas
3. **Sequência inadequada** de aplicação do posicionamento

### ✅ **Correções Finais Implementadas**

#### 1. **CSS Inicial Neutralizado**
```javascript
// ❌ ANTES: Sem coordenadas iniciais
tooltip.style.cssText = `
    position: absolute !important;
    // ... outras propriedades
`;

// ✅ DEPOIS: Coordenadas zeradas
tooltip.style.cssText = `
    position: absolute !important;
    left: 0;
    top: 0;
    // ... outras propriedades
`;
```

#### 2. **Sequência de Posicionamento Corrigida**
```javascript
// ❌ ANTES: Posicionamento antes das dimensões
tooltip.style.display = "block";
posicionarTooltipRelativoAoCard(tooltip, cardElement);

// ✅ DEPOIS: Aguardar dimensões reais
tooltip.style.display = "block";
tooltip.style.opacity = "0";
requestAnimationFrame(() => {
    posicionarTooltipRelativoAoCard(tooltip, cardElement);
    tooltip.style.opacity = "1";
});
```

#### 3. **Duplicação de Funções Resolvida**
- `aplicarTooltipUnificado()` - Função principal unificada
- `adicionarTooltipDiretoNoCard()` - Função específica para cards
- Ambas agora usam o mesmo sistema de posicionamento inteligente
```

### 🧪 **Função de Teste no Console**
Para verificar se o posicionamento está funcionando corretamente:

```javascript
// No console do navegador (página do eProc):
window.SENT1_AUTO.aplicarTooltipUnificado(
    document.querySelector('#eprobe-data-sessao'),
    [{
        data: "15/01/2025",
        status: "Pautado", 
        orgao: "1ª Câmara de Direito Civil",
        cor: "#5C85B4"
    }]
);

// Ou testar o sistema completo:
window.SENT1_AUTO.diagnosticarSistemaCompleto();
```

### 📊 **Logs de Debug Esperados**
```
🎯 POSICIONAMENTO: Calculando posição ótima do tooltip relativo ao card
✅ POSICIONAMENTO: Posição "acima" selecionada  
🎯 POSICIONAMENTO: Tooltip posicionado em (X, Y) relativo ao card
```

## 🔧 CONFIGURAÇÕES AJUSTÁVEIS
```javascript
const MARGEM_BORDA = 15;        // Distância mínima das bordas
const DISTANCIA_CARD = 12;      // Distância do card
const TEMPO_ANIMACAO = 200;     // Duração da animação (ms)
```

### Personalização de Posições
- Fácil adicionar novas posições no array `posicoesCandidatas`
- Prioridades configuráveis (1 = maior prioridade)
- Distâncias ajustáveis por posição

## 🚀 PRÓXIMOS PASSOS

1. **Tooltip responsivo**: Adaptar conteúdo ao espaço disponível
2. **Múltiplos cards**: Suporte a tooltip em vários cards simultaneamente
3. **Gestos touch**: Otimizar para dispositivos móveis
4. **Temas de tooltip**: Integrar com sistema de temas do eProbe

## 📝 NOTAS TÉCNICAS

- **Compatibilidade**: Funciona em todos os navegadores modernos
- **Performance**: Event listeners otimizados com `passive: true`
- **Memory leaks**: Cleanup automático de tooltips removidos
- **Z-index**: Tooltip sempre no topo (`z-index: 10000`)

---

**Status**: ✅ Implementado e funcional  
**Versão**: 1.0  
**Data**: 25/07/2025  
**Teste**: Aguardando validação do usuário
