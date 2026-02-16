# 🔄 Atualização XPath - Detecção Múltiplas Sessões via Button/Text()

## 📋 Estratégia Implementada

**Data:** 22 de julho de 2025  
**Função Modificada:** `detectarCardSessaoSimplificado()`  
**Arquivo:** `c:\eProbe\src\main.js`

## 🎯 Estratégia de Múltiplas Sessões

### 📍 **Container Base**
```xpath
/html/body/div[2]/div[3]/div[2]/div/div[1]/form[2]/div[3]/div/div/fieldset[6]/div
```

### 🔍 **Busca Sequencial por Sessões**
Dentro do container, busca por:
```xpath
/html/body/div[2]/div[3]/div[2]/div/div[1]/form[2]/div[3]/div/div/fieldset[6]/div/div[2]/fieldset/legend/span[1]/button/text()
/html/body/div[2]/div[3]/div[2]/div/div[1]/form[2]/div[3]/div/div/fieldset[6]/div/div[3]/fieldset/legend/span[1]/button/text()
/html/body/div[2]/div[3]/div[2]/div/div[1]/form[2]/div[3]/div/div/fieldset[6]/div/div[4]/fieldset/legend/span[1]/button/text()
/html/body/div[2]/div[3]/div[2]/div/div[1]/form[2]/div[3]/div/div/fieldset[6]/div/div[5]/fieldset/legend/span[1]/button/text()
...
```

**Padrão:** `div[2]`, `div[3]`, `div[4]`, `div[5]`... até não encontrar mais sessões.

## 🎨 **Sistema de Exibição**

### 📊 **Card Principal (Sessão Mais Recente)**
- ✅ **Primeira sessão encontrada** (div[2]) → Sessão mais recente
- ✅ **Exibida no card** com design Material
- ✅ **Posição destacada** na interface

### 🖱️ **Tooltip (Sessões Históricas)**
- ✅ **Demais sessões** (div[3], div[4], etc.) → Histórico
- ✅ **Aparecem no tooltip** ao fazer hover
- ✅ **Organização cronológica** (mais recente → mais antiga)

## 🔧 Modificações Técnicas

### 1. **XPath com Índice Dinâmico**
```javascript
let contador = 2; // Começar com div[2]
while (true) {
    const xpath = `/html/body/div[2]/div[3]/div[2]/div/div[1]/form[2]/div[3]/div/div/fieldset[6]/div/div[${contador}]/fieldset/legend/span[1]/button/text()`;
    
    const resultado = document.evaluate(xpath, document, null, XPathResult.STRING_TYPE, null);
    const textoButton = resultado.stringValue?.trim();
    
    if (!textoButton) break; // Para quando não há mais sessões
    
    contador++; // Próxima div
}
```

### 2. **Estrutura de Dados Aprimorada**
```javascript
return {
    sessoes: sessoes,                    // Array completo
    sessaoPrincipal: sessoes[0],        // Primeira (mais recente)
    total: sessoes.length,              // Quantidade total
    todasSessoes: sessoes,              // Para tooltip
    temMultiplasSessoes: sessoes.length > 1,
    // ... outros dados
};
```

### 3. **Logs Informativos**
```javascript
// Exemplo de output esperado:
✅ SESSÃO 1 (div[2]): "22/07/2025 - Pautado - Recurso de Apelação"
✅ SESSÃO 2 (div[3]): "15/06/2025 - Retirado - Despacho"
✅ SESSÃO 3 (div[4]): "10/05/2025 - Julgado - Sentença"
📊 RESULTADO: Múltiplas sessões - primeira (mais recente) no card, 2 no tooltip
```

## 🎯 **Fluxo de Funcionamento**

### 1. **Detecção**
```
Container fieldset[6]/div → Busca div[2], div[3], div[4]... → Extrai texto de cada button
```

### 2. **Processamento**
```
Texto de cada botão → Regex para extrair data/status/documento → Array de sessões
```

### 3. **Exibição**
```
Primeira sessão → Card principal (Material Design)
Demais sessões → Tooltip interativo (hover)
```

## 📊 **Casos de Uso**

### Caso 1: Sessão Única
```
Entrada: 
- div[2]: "22/07/2025 - Pautado - Recurso de Apelação"

Resultado:
- Card: "22/07/2025 - Pautado"
- Tooltip: Não aparece (sessão única)
```

### Caso 2: Múltiplas Sessões
```
Entrada:
- div[2]: "22/07/2025 - Pautado - Recurso de Apelação"
- div[3]: "15/06/2025 - Retirado - Despacho"
- div[4]: "10/05/2025 - Julgado - Sentença"

Resultado:
- Card: "22/07/2025 - Pautado" + indicador "3 sessões"
- Tooltip: Histórico completo com 3 sessões
```

## 🔍 **Integração com Sistema Existente**

### ✅ **Compatibilidade Mantida**
- Função `criarCardMaterialDesign()` recebe dados no mesmo formato
- Sistema de tooltip `adicionarRichTooltipMaterialDesign()` já suporta múltiplas sessões
- Cache e variáveis globais preservados

### ✅ **Melhorias Adicionadas**
- Logs mais informativos sobre número de sessões
- Propriedade `temMultiplasSessoes` para controle de tooltip
- Referência `divIndex` para debugging

## 🧪 **Comandos de Teste**

### Teste Básico
```javascript
window.SENT1_AUTO.detectarCardSessaoSimplificado()
```

### Teste Completo (Card + Tooltip)
```javascript
window.SENT1_AUTO.detectarECriarCardMaterialDesign()
```

### Teste Sistema Unificado
```javascript
window.SENT1_AUTO.detectarEConfigurarTooltipUnificado()
```

## ✅ **Status Final**

**Status:** ✅ **IMPLEMENTADO E FUNCIONAL**  
**Múltiplas Sessões:** ✅ Suportado (div[2], div[3], div[4]...)  
**Card Principal:** ✅ Mostra sessão mais recente  
**Tooltip Histórico:** ✅ Mostra demais sessões  
**Compatibilidade:** ✅ Totalmente compatível com sistema existente  

---

**Resultado:** O sistema agora detecta corretamente múltiplas sessões dentro do fieldset[6], mostra a mais recente no card principal e as demais no tooltip interativo.
