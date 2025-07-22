# Material Symbols no Tooltip - Implementado ✅

## ✅ Emojis Removidos e Substituídos

### 🔄 Alterações Realizadas

#### 1. Ícone de Data: 📅 → `event_repeat`
```html
<!-- ANTES (emoji): -->
📅 ${sessao.data}

<!-- DEPOIS (Material Symbol): -->
<span class="material-symbols-outlined" style="font-size: 14px; vertical-align: middle; margin-right: 4px;">event_repeat</span>${sessao.data}
```

#### 2. Ícone de Órgão: 🏛️ → `gavel`
```html
<!-- ANTES (emoji): -->
🏛️ ${sessao.orgao}

<!-- DEPOIS (Material Symbol): -->
<span class="material-symbols-outlined" style="font-size: 14px; vertical-align: middle; margin-right: 4px;">gavel</span>${sessao.orgao}
```

#### 3. Estado Vazio: 📅 → `event_repeat`
```html
<!-- ANTES (emoji): -->
<div style="font-size: 14px; margin-bottom: 8px;">📅</div>

<!-- DEPOIS (Material Symbol): -->
<span class="material-symbols-outlined" style="font-size: 24px; margin-bottom: 8px; color: #79747E;">event_repeat</span>
```

### 🎨 Estilização dos Ícones

**Propriedades aplicadas**:
- `font-size: 14px` (ícones inline) / `24px` (ícone central)
- `vertical-align: middle` (alinhamento com texto)
- `margin-right: 4px` (espaçamento do texto)
- `color: #79747E` (cor específica quando necessário)

### 📦 Carregamento dos Material Symbols

**CSS importado automaticamente**:
```javascript
const materialIconsHistory = document.createElement("link");
materialIconsHistory.rel = "stylesheet";
materialIconsHistory.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=event_repeat,gavel";
document.head.appendChild(materialIconsHistory);
```

**Ícones específicos carregados**:
- `event_repeat`: Para datas de sessão
- `gavel`: Para órgãos julgadores

### 🔧 Implementação Técnica

**Localização das mudanças**: `src/main.js`
- **Linhas ~712-715**: Ícones inline no tooltip das sessões
- **Linha ~726**: Ícone central no estado vazio
- **Linhas ~1217-1222**: Carregamento do CSS dos Material Symbols

**Classes utilizadas**:
- `material-symbols-outlined`: Variante outlined dos Material Symbols
- Estilos inline para controle preciso de tamanho e espaçamento

### 🎯 Resultado Visual

**Antes**: 📅 28/01/2025 | 🏛️ 2ª CÂMARA
**Depois**: ⟨event_repeat⟩ 28/01/2025 | ⟨gavel⟩ 2ª CÂMARA

**Benefícios**:
- ✅ Consistência visual com Material Design
- ✅ Ícones vetoriais escaláveis
- ✅ Melhor legibilidade
- ✅ Alinhamento perfeito com texto
- ✅ Cores controláveis via CSS

### 🧪 Como Testar

```javascript
// No console do navegador (páginas eProc):
window.SENT1_AUTO.testarTooltipSessoes();

// Ou teste completo:
window.SENT1_AUTO.testarCardFigmaAtualizado();
```

O tooltip agora exibe ícones Material Symbols profissionais em vez de emojis.
