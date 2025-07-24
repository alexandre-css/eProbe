# Correção: Tradução de Sigla do Órgão Julgador

## 🐛 Problema Identificado

O órgão julgador estava aparecendo como sigla (ex: "CAMPUB5") em vez do nome completo ("5ª Câmara de Direito Público") no card de sessão e tooltip.

## 🔍 Causa Raiz

A função `detectarCardSessaoSimplificado()` não estava utilizando a função `traduzirSiglaOrgao()` que já existe no código para converter siglas para nomes completos.

### Código Problemático:
```javascript
// ❌ ANTES: Usava sigla diretamente
orgao: sessaoPrincipal.orgao,  // Resultado: "CAMPUB5"
```

### Função de Tradução Disponível:
```javascript
// ✅ FUNÇÃO EXISTENTE: traduzirSiglaOrgao (linha 1616)
const mapaOrgaosTJSC = {
    CAMPUB1: "1ª Câmara de Direito Público",
    CAMPUB2: "2ª Câmara de Direito Público", 
    CAMPUB3: "3ª Câmara de Direito Público",
    CAMPUB4: "4ª Câmara de Direito Público",
    CAMPUB5: "5ª Câmara de Direito Público", // ← Mapeamento correto
    // ... outros órgãos
};

function traduzirSiglaOrgao(sigla) {
    if (!sigla) return "Órgão não identificado";
    sigla = sigla.trim().toUpperCase();
    
    // Match exato no mapa oficial
    if (mapaOrgaosTJSC[sigla]) {
        return mapaOrgaosTJSC[sigla];
    }
    
    // Fallback para códigos não mapeados
    return `${sigla} (Órgão)`;
}
```

## ✅ Solução Implementada

Aplicada a função `traduzirSiglaOrgao()` em **dois locais** da função `detectarCardSessaoSimplificado()`:

### 1. Órgão Principal do Card:
```javascript
// ✅ CORRIGIDO: Usar tradução de sigla
orgao: traduzirSiglaOrgao(sessaoPrincipal.orgao),
```

### 2. Órgãos do Array de Sessões (para tooltip):
```javascript
// ✅ CORRIGIDO: Usar tradução de sigla  
orgao: traduzirSiglaOrgao(sessao.orgao),
```

## 🎯 Resultado

### Antes:
- **Card principal**: "CAMPUB5"
- **Tooltip**: "🏛️ CAMPUB5"

### Depois:
- **Card principal**: "5ª Câmara de Direito Público"
- **Tooltip**: "🏛️ 5ª Câmara de Direito Público"

## 📊 Mapeamento Completo Suportado

A função já suporta todas as câmaras e órgãos do TJSC:

**Câmaras de Direito Público:**
- CAMPUB1 → "1ª Câmara de Direito Público"
- CAMPUB2 → "2ª Câmara de Direito Público"
- CAMPUB3 → "3ª Câmara de Direito Público"
- CAMPUB4 → "4ª Câmara de Direito Público"
- CAMPUB5 → "5ª Câmara de Direito Público"

**Outras câmaras:**
- CAMCIV1-8 → "Xª Câmara de Direito Civil"
- CAMCOM1-6 → "Xª Câmara de Direito Comercial"
- CAMCRI1-5 → "Xª Câmara Criminal"
- E muitos outros...

## 🧪 Como Testar

1. Execute a detecção:
   ```javascript
   window.SENT1_AUTO.detectarCardSessaoSimplificado()
   ```

2. Verifique o card criado - deve mostrar o nome completo do órgão

3. Passe o mouse sobre o card para ver o tooltip - deve mostrar o nome completo também

## 🔧 Arquivos Modificados

- **`src/main.js`**: 
  - Função `detectarCardSessaoSimplificado()` - linhas ~2030-2070
  - Aplicação de `traduzirSiglaOrgao()` no órgão principal e no array de sessões

## ✅ Status

**PROBLEMA RESOLVIDO** - Órgãos agora aparecem com nome completo em vez de sigla tanto no card quanto no tooltip.

## 📝 Observações

- A função `traduzirSiglaOrgao()` já estava implementada e no namespace `window.SENT1_AUTO`
- O mapeamento de órgãos é oficial e completo para todos os órgãos do TJSC
- A correção é retrocompatível - siglas não mapeadas mostram fallback legível
