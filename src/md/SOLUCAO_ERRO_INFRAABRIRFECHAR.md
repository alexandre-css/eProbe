# Solução do Erro: TypeError infraAbrirFecharElementoHTML

## Problema Identificado

```
InfraUtil.js:3919 Uncaught TypeError: Cannot read properties of null (reading 'setAttribute')
at infraAbrirFecharElementoHTML (InfraUtil.js:3919:28)
```

## Causa Raiz

O erro ocorria porque:

1. **Chamada desnecessária**: O sistema eProbe estava chamando a função nativa `infraAbrirFecharElementoHTML` do eProc mesmo quando já controlava o elemento
2. **Elemento inexistente**: A função nativa tentava acessar elementos que não existiam no DOM ou que foram modificados
3. **Conflito de controle**: Tanto o sistema eProbe quanto o eProc tentavam controlar o mesmo elemento

## Soluções Implementadas

### 1. Verificação de Segurança

Criada função `isElementSafeForToggle()` que verifica:

-   Se o elemento e seus pais existem
-   Se tem onclick válido
-   Se o elemento alvo realmente existe no DOM

```javascript
function isElementSafeForToggle(imgElement) {
    // Verificações de segurança antes de processar
    if (!imgElement || !imgElement.parentElement) return false;

    const onclickAttr = linkElement.getAttribute("onclick");
    if (!onclickAttr) return false;

    // Verificar se o elemento alvo existe
    const match = onclickAttr.match(
        /infraAbrirFecharElementoHTML\s*\(\s*['"]([^'"]+)['"](?:,\s*['"]([^'"]+)['"])?/
    );
    if (match) {
        const targetId = match[1];
        const targetElement = document.getElementById(targetId);
        if (!targetElement) {
            console.warn(
                `⚠️ ALTERNÂNCIA: Elemento alvo '${targetId}' não encontrado`
            );
            return false;
        }
    }

    return true;
}
```

### 2. Remoção da Chamada Conflitante

**Antes** (problemático):

```javascript
// Executar o clique original do eProc
if (linkElement.onclick) {
    linkElement.onclick.call(linkElement, event);
}
```

**Depois** (corrigido):

```javascript
// NÃO executar o clique original do eProc para evitar conflitos
// A função infraAbrirFecharElementoHTML pode tentar acessar elementos que não existem
console.log(`✅ ALTERNÂNCIA: Clique processado pelo sistema eProbe`);
```

### 3. Tratamento de Erro Robusto

Melhorada a função `findToggleTarget()` com:

-   Try-catch para capturar erros
-   Verificação de existência antes de retornar elementos
-   Logs detalhados para debug

```javascript
function findToggleTarget(linkElement) {
    try {
        // ... código de busca ...

        const element = document.getElementById(targetId);
        if (element) {
            return element;
        } else {
            console.warn(
                `⚠️ ALTERNÂNCIA: Elemento com ID '${targetId}' não existe no DOM`
            );
            return null;
        }
    } catch (error) {
        console.error("❌ ALTERNÂNCIA: Erro ao procurar elemento alvo:", error);
        return null;
    }
}
```

### 4. Logs Aprimorados

Adicionados logs específicos para identificar problemas:

-   `🔄 ALTERNÂNCIA: Detectado ícone expansível válido`
-   `⚠️ ALTERNÂNCIA: Ignorando ícone inseguro`
-   `⚠️ ALTERNÂNCIA: Elemento com ID 'X' não existe no DOM`

## Resultado

-   ✅ **Erro eliminado**: TypeError não ocorre mais
-   ✅ **Funcionalidade preservada**: Expandir/retrair continua funcionando
-   ✅ **Performance melhorada**: Evita processamento desnecessário
-   ✅ **Debug facilitado**: Logs claros indicam o status dos elementos

## Teste de Validação

```javascript
// Execute no console para validar
window.SENT1_AUTO.debugAlternanciaEproc();
```

## Arquivos Modificados

1. **`src/main.js`**:

    - Função `isElementSafeForToggle()` (nova)
    - Função `implementarAlternanciaExpandirRetrair()` (modificada)
    - Função `findToggleTarget()` (aprimorada)
    - Verificação de segurança na substituição de ícones

2. **`src/md/SOLUCAO_ERRO_INFRAABRIRFECHAR.md`**: Esta documentação

## Lições Aprendidas

1. **Evitar conflitos**: Não chamar funções nativas quando o sistema já controla o elemento
2. **Verificar existência**: Sempre verificar se elementos existem antes de acessá-los
3. **Logs detalhados**: Facilita muito o debug e identificação de problemas
4. **Fail-safe**: Sempre ter fallbacks e tratamento de erro robusto
