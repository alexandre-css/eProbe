# Sistema de Alternância Expandir/Retrair - eProc

## Visão Geral

O sistema de alternância foi aprimorado para trabalhar especificamente com elementos do eProc, focando nos elementos de minutas e outros conteúdos que usam a função `infraAbrirFecharElementoHTML`.

## Funcionalidades Implementadas

### 1. Detecção Inteligente de Elementos

A função `findToggleTarget()` foi otimizada para:

-   **Elementos específicos de minutas**: Busca por IDs como `conteudoInternoMinutas_0`, `conteudoInternoMinutas_1`, etc.
-   **Análise de onclick**: Extrai IDs de elementos do atributo `onclick` que contém `infraAbrirFecharElementoHTML`
-   **Fieldsets e containers**: Procura por elementos relacionados na estrutura DOM
-   **Elementos irmãos**: Busca elementos adjacentes que podem ser alternados

### 2. Integração com eProc

#### Estrutura HTML Esperada

```html
<div id="conteudoMinutas">
    <div id="conteudoInternoMinutas_0">
        <!-- Conteúdo das minutas que será expandido/retraído -->
    </div>
</div>
```

#### Função do eProc

```javascript
// Função nativa do eProc
infraAbrirFecharElementoHTML("conteudoInternoMinutas_0", "imgMinutas_0");
```

### 3. Substituição de Ícones

Os ícones originais (`mais.gif`, `menos.gif`) são substituídos por:

-   **Expandido**: Chevron para baixo (⌄)
-   **Retraído**: Chevron para direita (>)

## Como Testar

### 1. Teste Automático

Execute o arquivo de teste no console do navegador:

```javascript
// Copie e cole o conteúdo de:
// c:\eProbe\development\tests\teste-alternancia-eproc.js
```

### 2. Teste Manual

1. **Navegue para uma página do eProc** com elementos de minutas
2. **Abra o console** do navegador (F12)
3. **Execute os comandos**:

    ```javascript
    // Verificar se as funções existem
    console.log("Namespace:", typeof window.SENT1_AUTO);

    // Buscar elementos de minutas
    const minutas = document.getElementById("conteudoInternoMinutas_0");
    console.log("Elemento minutas:", minutas);

    // Buscar elementos com onclick
    const elementos = document.querySelectorAll(
        '[onclick*="infraAbrirFecharElementoHTML"]'
    );
    console.log("Elementos com onclick:", elementos);
    ```

### 3. Verificação Visual

1. **Identifique ícones substituídos**: Devem ser chevrons SVG ao invés de imagens GIF
2. **Teste o clique**: Clique no ícone e verifique se o conteúdo expande/retrai
3. **Verifique o console**: Deve aparecer logs começando com "🔄 ALTERNÂNCIA"

## Estrutura de Logs

### Logs de Sucesso

```
🔄 ALTERNÂNCIA: Implementando funcionalidade para mais.gif
🎯 ALTERNÂNCIA: Encontrado elemento alvo: conteudoInternoMinutas_0
✅ ALTERNÂNCIA: Configurado mais.gif - Estado inicial: retraído
🔄 ALTERNÂNCIA: Conteúdo expandido
```

### Logs de Debug

```
📞 Chamando infraAbrirFecharElementoHTML('conteudoInternoMinutas_0', 'imgMinutas_0')
🔄 ALTERNÂNCIA: Detectado infraAbrirFecharElementoHTML, executando...
```

### Logs de Erro

```
⚠️ ALTERNÂNCIA: Elemento alvo não encontrado para [element]
⚠️ ALTERNÂNCIA: Função infraAbrirFecharElementoHTML não encontrada
⚠️ ALTERNÂNCIA: Erro ao executar onclick original: [error]
```

## Solução de Problemas

### Problema: TypeError com infraAbrirFecharElementoHTML

**Causa**: A função nativa do eProc não está disponível ou tem parâmetros incorretos.

**Solução**:

1. Verificar se a página do eProc carregou completamente
2. Verificar se existe a função global: `typeof window.infraAbrirFecharElementoHTML`
3. Verificar se os parâmetros estão corretos no onclick

### Problema: Elemento alvo não encontrado

**Causa**: O elemento que deve ser expandido/retraído não existe ou tem ID diferente.

**Solução**:

1. Verificar se o elemento existe: `document.getElementById('conteudoInternoMinutas_0')`
2. Verificar se o onclick contém o ID correto
3. Adicionar o ID específico na lista de `minutasTargets` se necessário

### Problema: Ícone não aparece

**Causa**: O elemento original não foi detectado pelo sistema.

**Solução**:

1. Verificar se o seletor da imagem está correto
2. Verificar se a imagem contém "mais.gif" ou "menos.gif" no src
3. Verificar se não há conflitos com outros sistemas

## Arquivos Relacionados

-   **`src/main.js`**: Contém as funções principais
    -   `implementarAlternanciaExpandirRetrair()`
    -   `findToggleTarget()`
-   **`development/tests/teste-alternancia-eproc.js`**: Script de teste
-   **`src/md/ALTERNANCIA_EXPANDIR_RETRAIR.md`**: Esta documentação

## Próximos Passos

1. **Teste em diferentes páginas** do eProc
2. **Adicionar novos IDs** conforme necessário
3. **Otimizar performance** se houver muitos elementos
4. **Adicionar animações** para melhor experiência do usuário
