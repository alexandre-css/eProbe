# 🧪 GUIA DE TESTE - Correção de Estrelas de Relevância

## 🚨 TESTE CRÍTICO IMPLEMENTADO

A funcionalidade de **relevância de documentos** (estrelas) foi **restaurada** após identificarmos que a substituição por ícones SVG quebrou o sistema original do eProc.

## 📋 CHECKLIST DE TESTE

### 1. Carregar a Extensão Atualizada

```bash
# Use o task do VS Code
Ctrl+Shift+P → "Tasks: Run Task" → "Testar Extensão eProbe"
```

### 2. Navegar para Página com Documentos

Acesse uma página do eProc que contenha **documentos com estrelas de relevância**, como:

-   Lista de documentos de um processo
-   Página de resultados de pesquisa
-   Qualquer tela onde aparecem ícones de estrela

### 3. Verificar Logs no Console

Abra o **Console do Navegador** (F12) e procure por:

```
🌟 ESTRELAS: Configurando sistema de alternância de relevância
✅ ESTRELAS: X estrelas de relevância configuradas com sucesso
```

### 4. Teste Manual das Estrelas

1. **Identifique uma estrela** na interface
2. **Clique na estrela**
3. **Verifique se alterna** entre:
    - 🌟 **Acesa**: Dourada preenchida
    - ☆ **Apagada**: Apenas contorno

### 5. Verificar Logs de Funcionamento

No console, você deve ver:

```
🌟 ESTRELAS: Alternado para estado "acesa" (1-123)
🌟 ESTRELAS: Executada função original - switchRelevanciaEvento(...)
```

## 🧪 TESTE AUTOMATIZADO

Cole no **Console do Navegador**:

```javascript
// Executar teste completo
fetch(
    "https://raw.githubusercontent.com/user/eProbe/main/development/tests/teste-correcao-estrelas-relevancia.js"
)
    .then((r) => r.text())
    .then((code) => eval(code));
```

**OU** execute direto:

```javascript
// Teste rápido manual
console.log("🧪 TESTE: Verificando estrelas...");
const links = document.querySelectorAll('a[href*="switchRelevanciaEvento"]');
console.log(`Encontrados ${links.length} links de relevância`);

if (links.length > 0 && window.SENT1_AUTO?.configurarAlternanciaEstrelas) {
    const resultado = window.SENT1_AUTO.configurarAlternanciaEstrelas();
    console.log(`✅ ${resultado} estrelas configuradas`);
} else {
    console.log("⚠️ Nenhuma estrela ou função não encontrada");
}
```

## ✅ RESULTADO ESPERADO

### Funcionamento Correto

-   ✅ **Visual**: Estrela alterna entre dourada preenchida (acesa) e contorno (apagada)
-   ✅ **Backend**: Sistema eProc registra a mudança de relevância
-   ✅ **Logs**: Console mostra configuração e alternância
-   ✅ **Performance**: Sem travamentos ou erros

### Sinais de Problema

-   ❌ **Estrela não alterna** visualmente
-   ❌ **Erros no console** relacionados a switchRelevanciaEvento
-   ❌ **Relevância não persiste** após recarregar página
-   ❌ **Função não encontrada** no namespace

## 🐛 TROUBLESHOOTING

### Problema: "Função não encontrada"

```javascript
// Verificar namespace
console.log(Object.keys(window.SENT1_AUTO || {}));
```

### Problema: "Estrelas não alternando"

```javascript
// Reconfigurar manualmente
window.SENT1_AUTO.configurarAlternanciaEstrelas();
```

### Problema: "Erros no console"

```javascript
// Debug detalhado
window.SENT1_AUTO.debugIconesSubstituicao();
```

## 📞 SUPORTE

Se encontrar problemas:

1. **Copie os logs do console** completos
2. **Identifique a URL** da página onde testou
3. **Descreva o comportamento** observado vs esperado

---

**🎯 OBJETIVO**: Confirmar que a funcionalidade crítica de relevância foi **100% restaurada** mantendo os ícones modernos SVG.
