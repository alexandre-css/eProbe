# PADRÃO DE IMPLEMENTAÇÃO - FUNÇÕES DE ESTILIZAÇÃO/PERSONALIZAÇÃO

## 🎯 OBJETIVO

Documentar o padrão **CORRETO E TESTADO** para implementar novas funções de estilização/personalização no eProbe, baseado no sucesso da implementação de gradientes na capa do processo e sistema de lembretes.

## 🚨 REGRAS CRÍTICAS ABSOLUTAS

### 🔴 REGRA #1: SEGUIR PADRÃO EXISTENTE

**NUNCA inventar novo padrão quando há um funcionando!**

-   ✅ Copiar exatamente o padrão das funções que JÁ FUNCIONAM
-   ❌ Criar abordagens "inovadoras" que quebram a arquitetura

### 🔴 REGRA #2: LOCALIZAÇÃO OBRIGATÓRIA

**Funções DEVEM ser implementadas nos locais CORRETOS:**

-   ✅ Definição: Junto com outras funções similares (~linha 25000)
-   ✅ Namespace intermediário: Seção de estilização (~linha 30800)
-   ✅ Execução automática: Inicialização da extensão (~linha 20500)
-   ✅ Namespace principal: Criado automaticamente pelo sistema

### 🔴 REGRA #3: VERIFICAÇÃO OBRIGATÓRIA

**SEMPRE verificar se funções existem no namespace antes de sugerir:**

```javascript
console.log("Funções disponíveis:", Object.keys(window.SENT1_AUTO));
```

## 📋 PADRÃO IMPLEMENTAÇÃO - PASSO A PASSO

### PASSO 1: DEFINIR AS FUNÇÕES (Localização: ~linha 25000)

```javascript
/**
 * 🎨 FUNÇÃO PRINCIPAL DE ESTILIZAÇÃO
 * Descrição clara do que faz
 * Baseado na documentação "arquivo.md"
 */
function minhaFuncaoEstilizacao() {
    log("🎨 MINHA ESTILIZAÇÃO: Iniciando...");

    // Verificações de pré-condições
    if (!condicaoNecessaria()) {
        log("❌ MINHA ESTILIZAÇÃO: Condição não atendida");
        return false;
    }

    // Buscar elementos
    const elemento = document.querySelector("seletor");
    if (!elemento) {
        log("❌ MINHA ESTILIZAÇÃO: Elemento não encontrado");
        return false;
    }

    log("✅ MINHA ESTILIZAÇÃO: Elemento encontrado:", elemento);

    // Aplicar estilização
    try {
        elemento.style.setProperty("propriedade", "valor", "important");
        log("✅ MINHA ESTILIZAÇÃO: Aplicada com sucesso!");

        return {
            sucesso: true,
            elemento: elemento,
            detalhes: "informações relevantes",
        };
    } catch (error) {
        logError("❌ MINHA ESTILIZAÇÃO: Erro ao aplicar:", error);
        return false;
    }
}

/**
 * 🔄 VERSÃO ROBUSTA COM RETRY AUTOMÁTICO
 */
function minhaFuncaoEstilizacaoRobusta() {
    log("🔄 MINHA ESTILIZAÇÃO ROBUSTA: Iniciando...");

    // Verificação de pré-condições
    if (!condicaoNecessaria()) {
        log("ℹ️ MINHA ESTILIZAÇÃO ROBUSTA: Condição não atendida");
        return false;
    }

    let tentativas = 0;
    const maxTentativas = 5;
    const intervalTentativas = 1000; // 1 segundo

    const tentarAplicar = () => {
        tentativas++;
        log(`🎯 MINHA ESTILIZAÇÃO: Tentativa ${tentativas}/${maxTentativas}`);

        const resultado = minhaFuncaoEstilizacao();
        const sucesso = resultado && resultado.sucesso;

        if (!sucesso && tentativas < maxTentativas) {
            log(`⏳ MINHA ESTILIZAÇÃO: Aguardando ${intervalTentativas}ms...`);
            setTimeout(tentarAplicar, intervalTentativas);
        } else if (sucesso) {
            log("✅ MINHA ESTILIZAÇÃO ROBUSTA: Aplicada com sucesso!");
            log(`📊 RESULTADOS:`, resultado);
        } else {
            log(
                "⚠️ MINHA ESTILIZAÇÃO ROBUSTA: Falhou após todas as tentativas"
            );
        }
    };

    // Iniciar primeira tentativa
    tentarAplicar();

    // Verificação pós-carregamento
    if (document.readyState !== "complete") {
        window.addEventListener("load", () => {
            setTimeout(() => {
                log("🔄 MINHA ESTILIZAÇÃO: Verificação pós-carregamento...");
                minhaFuncaoEstilizacao();
            }, 500);
        });
    }

    return true;
}
```

### PASSO 2: ADICIONAR AO NAMESPACE INTERMEDIÁRIO (Localização: ~linha 30800)

```javascript
// 🎨 FUNÇÕES DE ESTILIZAÇÃO - MINHA NOVA FUNCIONALIDADE
minhaFuncaoEstilizacao, // 🎯 NOVA: Aplica estilização específica
minhaFuncaoEstilizacaoRobusta, // 🔄 NOVA: Versão robusta com retry
```

### PASSO 3: ADICIONAR EXECUÇÃO AUTOMÁTICA (Localização: ~linha 20500)

```javascript
// Aplicar minha estilização automaticamente
if (typeof minhaFuncaoEstilizacaoRobusta === "function") {
    minhaFuncaoEstilizacaoRobusta();
    log("✅ INICIALIZAÇÃO: Minha estilização robusta iniciada");
}
```

### PASSO 4: VERIFICAR NAMESPACE PRINCIPAL (Automático)

O sistema criará automaticamente as entradas no `window.SENT1_AUTO`:

```javascript
minhaFuncaoEstilizacao: typeof minhaFuncaoEstilizacao === "function"
    ? minhaFuncaoEstilizacao
    : () => console.log("minhaFuncaoEstilizacao não disponível"),
```

## 🧪 CHECKLIST DE VERIFICAÇÃO

### ✅ Antes da Implementação:

-   [ ] Estudei como funções similares estão implementadas?
-   [ ] Identifiquei a localização correta para cada parte?
-   [ ] Verifiquei se não estou reinventando funcionalidade existente?

### ✅ Durante a Implementação:

-   [ ] Função principal definida no local correto (~linha 25000)?
-   [ ] Função adicionada ao namespace intermediário (~linha 30800)?
-   [ ] Execução automática adicionada na inicialização (~linha 20500)?
-   [ ] Uso padrão de logging (log, logError)?
-   [ ] Verificações de pré-condições implementadas?
-   [ ] Try-catch para tratamento de erros?
-   [ ] Retorno consistente (objeto com sucesso/detalhes)?

### ✅ Após a Implementação:

-   [ ] Função aparece em `Object.keys(window.SENT1_AUTO)`?
-   [ ] Execução manual funciona: `window.SENT1_AUTO.minhaFuncao()`?
-   [ ] Execução automática ocorre na inicialização?
-   [ ] Logs aparecem no console conforme esperado?
-   [ ] Não há erros de ReferenceError ou undefined?

## 📚 EXEMPLOS DE SUCESSO

### ✅ PADRÃO QUE FUNCIONA:

1. **Função de Lembretes** (`aplicarEstilizacaoLembretesRobusta`)
2. **Função de Gradientes** (`aplicarGradientesCapaProcessoRobusta`)

### ❌ ANTI-PADRÕES QUE FALHAM:

1. **Definir funções fora do escopo correto**
2. **Criar namespace personalizado separado**
3. **Implementar lógica de execução própria**
4. **Não seguir padrão de logging estabelecido**
5. **Esquecer de adicionar ao namespace intermediário**

## 🔧 DEBUGGING COMUM

### Problema: "função não disponível"

```javascript
// ❌ Causa: Função não foi adicionada ao namespace intermediário
// ✅ Solução: Adicionar na seção ~linha 30800

minhaNovaFuncao, // <- ADICIONAR AQUI
```

### Problema: "ReferenceError: função is not defined"

```javascript
// ❌ Causa: Função chamada antes de ser definida
// ✅ Solução: Mover definição para ANTES do namespace (~linha 25000)
```

### Problema: "Função não executa automaticamente"

```javascript
// ❌ Causa: Não foi adicionada na inicialização
// ✅ Solução: Adicionar na seção ~linha 20500

if (typeof minhaFuncaoRobusta === "function") {
    minhaFuncaoRobusta();
    log("✅ INICIALIZAÇÃO: Minha função iniciada");
}
```

## 🎯 TEMPLATE RÁPIDO

Para criar nova função de estilização rapidamente:

```javascript
// 1. DEFINIR (~linha 25000)
function novaFuncao() {
    log("🎨 NOVA: Iniciando...");
    // implementação
    return { sucesso: true };
}

function novaFuncaoRobusta() {
    log("🔄 NOVA ROBUSTA: Iniciando...");
    // implementação com retry
    return true;
}

// 2. NAMESPACE (~linha 30800)
novaFuncao,
novaFuncaoRobusta,

// 3. EXECUÇÃO (~linha 20500)
if (typeof novaFuncaoRobusta === "function") {
    novaFuncaoRobusta();
    log("✅ INICIALIZAÇÃO: Nova função iniciada");
}
```

## 💡 DICAS AVANÇADAS

### Padrões de Seleção de Elementos:

```javascript
// Múltiplos seletores com fallback
const seletores = [
    "seletor.principal",
    "seletor.alternativo",
    "seletor.fallback",
];

let elemento = null;
for (const seletor of seletores) {
    elemento = document.querySelector(seletor);
    if (elemento) break;
}
```

### Padrões de Detecção de Página:

```javascript
function isMinhaPageEspecifica() {
    const url = window.location.href;
    const patterns = [
        "pagina_especifica",
        "acao=minha_acao",
        "contexto_especifico",
    ];
    return patterns.some((pattern) => url.includes(pattern));
}
```

### Padrões de Aplicação de CSS:

```javascript
// Método direto (preferido)
elemento.style.setProperty("propriedade", "valor", "important");

// Método via stylesheet (para múltiplos elementos)
const style = document.createElement("style");
style.textContent = `
    .minha-classe {
        propriedade: valor !important;
    }
`;
document.head.appendChild(style);
```

## 🔄 VERSIONING

-   **v1.0** - Agosto 2025: Padrão inicial baseado no sucesso dos gradientes
-   **Próximas versões**: Refinamentos baseados em novas implementações

## ⚠️ OBSERVAÇÕES IMPORTANTES

1. **SEMPRE testar** com `Object.keys(window.SENT1_AUTO)` antes de finalizar
2. **NUNCA assumir** que função existe - sempre verificar
3. **SEGUIR logging** padrão para consistência
4. **DOCUMENTAR** qualquer desvio do padrão com justificativa
5. **ATUALIZAR** este documento se padrão evoluir

---

**📄 Arquivo criado em**: 15 de agosto de 2025  
**🎯 Baseado no sucesso de**: Implementação de gradientes na capa do processo  
**✅ Status**: Padrão testado e funcional
