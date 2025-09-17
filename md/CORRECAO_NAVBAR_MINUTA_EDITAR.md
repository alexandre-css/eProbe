# CORREÇÃO: Navbar não deve aparecer na tela de edição de minutas

## Problema

A navbar do eProbe estava aparecendo indevidamente na tela de edição de minutas (URL: `acao=minuta_editar`).

## Solução Implementada

Adicionada verificação em todas as funções que aplicam estilos da navbar e temas para **NÃO** executar quando a URL contém `acao=minuta_editar`.

## Funções Modificadas

### 1. `aplicarNavbarInstantaneo()` - Linha ~1395

-   **Local**: Aplicação instantânea da navbar antes de qualquer flash
-   **Alteração**: Adicionada verificação de URL no início da função
-   **Comportamento**: Retorna imediatamente se for página de edição de minutas

### 2. `applyThemeStyles()` - Linha ~5049

-   **Local**: Função principal de aplicação de temas
-   **Alteração**: Adicionada verificação de URL no início da função
-   **Comportamento**: Retorna imediatamente se for página de edição de minutas

### 3. Event Listener `eprobe-theme-changed` - Linha ~1531

-   **Local**: Listener para eventos de mudança de tema
-   **Alteração**: Adicionada verificação de URL no início do listener
-   **Comportamento**: Retorna imediatamente se for página de edição de minutas

### 4. `forcarFlexboxNavbar()` - Linha ~2723

-   **Local**: Função que força flexbox na navbar
-   **Alteração**: Adicionada verificação de URL no início da função
-   **Comportamento**: Retorna imediatamente se for página de edição de minutas

### 5. `aplicarEstiloBotoesEproc()` - Linha ~25618

-   **Local**: Função que aplica temas aos botões do eProc
-   **Alteração**: Adicionada verificação de URL no início da função
-   **Comportamento**: Retorna imediatamente se for página de edição de minutas

### 6. `restaurarTemaBotoesEproc()` - Linha ~25826

-   **Local**: Função que restaura tema salvo dos botões
-   **Alteração**: Adicionada verificação de URL no início da função
-   **Comportamento**: Retorna `false` se for página de edição de minutas

### 7. `gerenciarNavbarEprobe()` - Linha ~25916

-   **Local**: Função principal de gerenciamento da navbar
-   **Alteração**: Adicionada verificação de URL no início da função
-   **Comportamento**: Retorna imediatamente se for página de edição de minutas

### 8. Execução Automática da Navbar - Linha ~25996

-   **Local**: Código que executa automaticamente o gerenciamento da navbar
-   **Alteração**: Envolvida toda a execução em verificação de URL
-   **Comportamento**: Não executa nenhuma função de navbar se for página de edição de minutas

## Padrão de Verificação Utilizado

```javascript
// 🚨 VERIFICAÇÃO CRÍTICA: NÃO aplicar [função] na tela de edição de minutas
const currentUrl = window.location.href;
if (currentUrl.includes("acao=minuta_editar")) {
    console.log(
        "🚫 eProbe: [Descrição] desabilitado na tela de edição de minutas"
    );
    return; // Sair imediatamente
}
```

## Resultado Esperado

-   ✅ Navbar não deve aparecer na tela de edição de minutas
-   ✅ Temas não devem ser aplicados na tela de edição de minutas
-   ✅ Botões de tema não devem ser estilizados na tela de edição de minutas
-   ✅ Todas as outras páginas do eProc continuam funcionando normalmente
-   ✅ Logs de console informam quando funções são desabilitadas na página de edição

## Como Testar

1. Carregue a extensão no navegador
2. Navegue para uma página normal do eProc - deve aparecer a navbar
3. Navegue para `https://eproc2g.tjsc.jus.br/eproc/controlador.php?acao=minuta_editar`
4. Verifique que a navbar NÃO aparece
5. Verifique no console as mensagens "🚫 eProbe: ... desabilitado na tela de edição de minutas"
