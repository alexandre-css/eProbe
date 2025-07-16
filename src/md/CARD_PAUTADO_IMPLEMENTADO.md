# Card PAUTADO - Implementação Completa do Design Figma

## ✅ STATUS: IMPLEMENTADO

O card **PAUTADO** foi completamente implementado usando o design exato extraído do Figma, incluindo o SVG completo com todas as especificações visuais.

## 🎨 Mudanças Implementadas

### 1. SVG Completo do Figma

-   **Arquivo**: `src/main.js` → função `obterConfigFigmaStatus()`
-   **Implementação**: SVG completo de 233x88px com design exato do Figma
-   **Cores**:
    -   Ícone: `#5C85B4` (azul do relógio)
    -   Fundo: `#FEF7FF` (rosa claro)
    -   Borda: `#CAC4D0` (cinza claro)
    -   Texto: `#1D1B20` (preto)

### 2. Sistema Dual de Renderização

A função `criarCardMaterialDesign()` agora suporta dois modos:

#### Modo SVG (Para cards com design Figma completo)

```javascript
if (configStatus.svgCompleto) {
    // Usa SVG completo do Figma
    // Container: .eprobe-figma-card-svg
    // Substituição automática da data na sessão
    // Hover effects personalizados
}
```

#### Modo CSS Fallback (Para outros status temporariamente)

```javascript
// Design CSS tradicional
// Container: .eprobe-figma-card
// Ícones Lucide + estilos Material Design
```

### 3. Personalização de Data

-   **Funcionalidade**: Substituição automática da data no SVG
-   **Padrão**: "Sessão: 29/01/2025" → "Sessão: [DATA_DETECTADA]"
-   **Implementação**: `configStatus.svgCompleto.replace()`

### 4. Estilos Específicos para SVG

```css
.eprobe-figma-card-svg {
    display: inline-block;
    margin: 8px 0;
}

.eprobe-figma-card-svg:hover svg {
    transform: translateY(-1px);
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
}
```

## 🔧 Detalhes Técnicos

### Função Principal

-   **Nome**: `criarCardMaterialDesign(dadosSessao)`
-   **Lógica**: Verifica se `configStatus.svgCompleto` existe
-   **SVG**: Renderiza diretamente o design do Figma
-   **CSS**: Fallback para outros status não implementados

### Configuração do Status

-   **Arquivo**: `src/main.js` → linha ~13530
-   **Estrutura**:

```javascript
Pautado: {
    svgCompleto: `<svg width="233" height="88"...`,
    cor: "#5C85B4",
    corFundo: "#FEF7FF",
    corBorda: "#CAC4D0",
    corTexto: "#1D1B20",
    descricao: "Pautado",
}
```

### Tooltip Multi-Sessão

-   **Compatibilidade**: Mantida para sessões múltiplas
-   **Implementação**: `adicionarTooltipInterativo(card, dadosSessao.todasSessoes)`

## 🎯 Resultado

### Antes (Design Genérico)

-   Ícone Lucide básico
-   Cores Material Design
-   Layout CSS responsivo

### Depois (Design Figma Exato) ✨

-   SVG completo com design profissional
-   Ícone de relógio customizado em paths
-   Tipografia "Pautado" em paths vetoriais
-   Cores e efeitos exatos do Figma
-   Sombra e bordas conforme especificação

## 📋 Próximos Passos

### Cards Pendentes (7 restantes):

1. **Vista** - `Pedido de Vista`
2. **Adiado** - `Adiado` / `Adiado (art. 935)`
3. **Julgado** - `Julgado`
4. **Diligência** - `Conv. em Diligência`
5. **Sobrestado** - `Sobrestado (art. 942)`
6. **Retirado** - `Retirado`

### Processo de Implementação:

1. **Aprovar** card PAUTADO atual
2. **Implementar** próximo card com SVG do Figma
3. **Testar** cada card individualmente
4. **Repetir** até todos os 8 cards estarem completos

## 🔍 Validação

### Como Testar:

1. Abrir página do eProc com processo pautado
2. Verificar se card aparece com design SVG do Figma
3. Confirmar cores e tipografia corretas
4. Testar hover effects
5. Validar data personalizada

### Console Debug:

```javascript
// Logs específicos para identificar modo de renderização:
"✨ FIGMA: Usando SVG completo para status Pautado";
"✅ FIGMA: Card SVG criado com design personalizado para status Pautado";
```

---

**Status**: ✅ **PAUTADO IMPLEMENTADO** - Aguardando aprovação do usuário para prosseguir com os próximos cards.
