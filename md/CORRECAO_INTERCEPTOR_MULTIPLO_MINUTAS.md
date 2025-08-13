# CORREÇÃO: Interceptor Múltiplo - Botões Individuais de Minutas

## 🚨 PROBLEMA IDENTIFICADO

**Situação**: A correção anterior funcionava apenas para o botão principal `id="atualizaMinutas"`, mas **não funcionava** para os múltiplos botões individuais de cada minuta que possuem apenas `aria-label="Atualizar Minutas"`.

**Diferença entre botões**:
- ✅ **Botão Principal**: `<a id="atualizaMinutas" aria-label="Atualizar Minutas">` → **FUNCIONAVA**
- ❌ **Botões Individuais**: `<a href="javascript:void(0)" aria-label="Atualizar Minutas">` → **NÃO FUNCIONAVAM**

**Causa**: O interceptor original buscava apenas por `getElementById("atualizaMinutas")`, ignorando os botões sem ID específico.

## ✅ SOLUÇÃO IMPLEMENTADA

### Nova Função: `setupInterceptorTodosBotoesAtualizar()`

**Localização**: `src/main.js` (linha ~25136)

**Funcionalidade**: Intercepta **TODOS** os botões com `aria-label="Atualizar Minutas"`, incluindo os individuais de cada minuta.

```javascript
function setupInterceptorTodosBotoesAtualizar() {
    // Buscar TODOS os botões de atualizar (principal + individuais)
    const botoesAtualizar = document.querySelectorAll(
        'a[aria-label="Atualizar Minutas"]'
    );
    
    let interceptadosCount = 0;
    
    botoesAtualizar.forEach((botao, index) => {
        // Verificar se já foi interceptado
        if (botao.hasAttribute("data-eprobe-intercepted")) {
            return;
        }
        
        // Configurar interceptor individual
        botao.onclick = function (event) {
            // 1. Executar função original (CSP-safe)
            // 2. Aguardar AJAX completar
            // 3. Reaplicar ícones com reaplicarIconesAposAtualizacao()
        };
        
        // Marcar como interceptado
        botao.setAttribute("data-eprobe-intercepted", "true");
        botao.setAttribute("data-eprobe-interceptor-index", index);
        
        interceptadosCount++;
    });
    
    return interceptadosCount;
}
```

### Características da Solução

#### ✅ **Cobertura Completa**
- Intercepta **botão principal** + **todos os botões individuais**
- Usa `querySelectorAll('a[aria-label="Atualizar Minutas"]')`
- Não depende de IDs específicos

#### ✅ **CSP Compliance**
- **Sem `eval()`** - usa chamada direta `window.atualizaMinutas()`
- Extração segura de parâmetros via regex
- Compatível com Content Security Policy

#### ✅ **Proteção contra Duplicação**
- Verifica `data-eprobe-intercepted` antes de interceptar
- Adiciona índice único: `data-eprobe-interceptor-index`
- Evita múltiplas interceptações no mesmo botão

#### ✅ **Reaplicação de Ícones**
- Chama `reaplicarIconesAposAtualizacao()` após AJAX
- Corrige alinhamento com `corrigirAlinhamentoRecursosMinuta()`
- Log detalhado para debugging

## 🎯 INTEGRAÇÃO NO SISTEMA

### 1. Adicionada ao Namespace
```javascript
// window.SENT1_AUTO
setupInterceptorTodosBotoesAtualizar: setupInterceptorTodosBotoesAtualizar,
```

### 2. Chamada Automaticamente
```javascript
// Configurar interceptor para TODOS os botões de minutas individuais
if (typeof setupInterceptorTodosBotoesAtualizar === "function") {
    const botoesInterceptados = setupInterceptorTodosBotoesAtualizar();
    if (botoesInterceptados > 0) {
        log(`✅ MINUTAS MÚLTIPLAS: ${botoesInterceptados} botões individuais interceptados`);
    }
}
```

### 3. Execução no Init
- Executada automaticamente durante inicialização
- Roda **depois** do interceptor principal
- Delay de 2.5 segundos para garantir que DOM está carregado

## 🧪 TESTES

### Cenário de Teste
1. **Acesse página de processo** com múltiplas minutas
2. **Observe**: Cada minuta tem seu próprio botão "Atualizar"
3. **Clique em qualquer botão individual** (não apenas o principal)
4. **Resultado esperado**: Ícones permanecem personalizados

### Verificação via Console
```javascript
// Contar botões interceptados
const interceptados = document.querySelectorAll('a[data-eprobe-intercepted="true"]');
console.log(`Botões interceptados: ${interceptados.length}`);

// Testar função diretamente
const resultado = window.SENT1_AUTO.setupInterceptorTodosBotoesAtualizar();
console.log(`Novos botões interceptados: ${resultado}`);
```

### Logs Esperados
```
🎯 MINUTAS MÚLTIPLAS: Configurando interceptor para botão 0
🎯 MINUTAS MÚLTIPLAS: Configurando interceptor para botão 1
🎯 MINUTAS MÚLTIPLAS: Configurando interceptor para botão 2
✅ MINUTAS MÚLTIPLAS: 3 botões interceptados de 3 encontrados
```

## 📊 IMPACTO DA CORREÇÃO

### Antes (Problema)
- ❌ Apenas 1 botão interceptado (principal com ID)
- ❌ Botões individuais de minutas ignorados
- ❌ Ícones desapareciam ao clicar em botões individuais
- ❌ Experiência inconsistente

### Depois (Solução)
- ✅ TODOS os botões interceptados (principal + individuais)
- ✅ Detecção por `aria-label` (independente de ID)
- ✅ Ícones persistem em qualquer botão clicado
- ✅ Experiência consistente em toda a interface

## 🛡️ BENEFÍCIOS ADICIONAIS

### Robustez
- Funciona mesmo se estrutura do DOM mudar
- Não depende de IDs específicos
- Resiliência a mudanças na interface do eProc

### Performance
- Interceptação única por botão (evita duplicação)
- Execução eficiente com early exit
- Logs organizados por índice de botão

### Manutenibilidade
- Código modular e reutilizável
- Logs claros para debugging
- Fácil extensão para novos tipos de botão

---

**Data da Correção**: 12 de agosto de 2025  
**Status**: ✅ IMPLEMENTADO E TESTADO  
**Cobertura**: Botão principal + todos os botões individuais de minutas  
**Impacto**: Solução completa para persistência de ícones em TODOS os botões de atualizar
