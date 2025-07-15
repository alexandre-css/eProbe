// =============================================================================
// 🔍 TESTE DE DIAGNÓSTICO E CORREÇÃO AUTOMÁTICA - VERSÃO FINAL
// =============================================================================
//
// Este script testa as novas funções de diagnóstico e correção automática
// que foram adicionadas ao sistema para resolver os problemas de execução inconsistente.
//
// COMO USAR:
// 1. Abra uma página do eProc
// 2. Copie e cole este código no console
// 3. Execute step by step ou rode tudo de uma vez
//
// =============================================================================

console.log("🚀 TESTE: Iniciando teste de diagnóstico e correção automática");

// PASSO 1: Verificar se as funções existem no namespace
console.log("\n📦 PASSO 1: Verificando disponibilidade das funções...");

const funcoesTeste = [
    "diagnosticarCompleto",
    "corrigirProblemas",
    "ensureButtonExists",
    "substituirIconesFieldsetAcoes",
];

funcoesTeste.forEach((funcao) => {
    const existe = typeof window.SENT1_AUTO?.[funcao] === "function";
    console.log(
        `   ${existe ? "✅" : "❌"} ${funcao}: ${
            existe ? "DISPONÍVEL" : "NÃO ENCONTRADA"
        }`
    );
});

// PASSO 2: Executar diagnóstico completo
console.log("\n🔍 PASSO 2: Executando diagnóstico completo...");

let diagnostico = null;
try {
    if (typeof window.SENT1_AUTO?.diagnosticarCompleto === "function") {
        diagnostico = window.SENT1_AUTO.diagnosticarCompleto();
        console.log("✅ Diagnóstico executado com sucesso");
    } else {
        console.log("❌ Função diagnosticarCompleto não disponível");
    }
} catch (error) {
    console.error("❌ Erro no diagnóstico:", error);
}

// PASSO 3: Executar correção automática
console.log("\n🔧 PASSO 3: Executando correção automática...");

let correcao = null;
try {
    if (typeof window.SENT1_AUTO?.corrigirProblemas === "function") {
        correcao = window.SENT1_AUTO.corrigirProblemas();
        console.log("✅ Correção executada com sucesso");
    } else {
        console.log("❌ Função corrigirProblemas não disponível");
    }
} catch (error) {
    console.error("❌ Erro na correção:", error);
}

// PASSO 4: Verificar se os problemas foram resolvidos
console.log("\n🎯 PASSO 4: Verificando resultados após correção...");

setTimeout(() => {
    // Verificar botão
    const botaoExiste = document.getElementById("eprobe-btn") !== null;
    console.log(
        `   🔘 Botão "Resumir Documento": ${
            botaoExiste ? "✅ PRESENTE" : "❌ AUSENTE"
        }`
    );

    // Verificar ícones substituídos
    const iconesSubstituidos = document.querySelectorAll(
        "[data-eprobe-icon-replaced]"
    ).length;
    console.log(`   🎨 Ícones substituídos: ${iconesSubstituidos} elementos`);

    // Verificar namespace
    const namespaceFunciona = typeof window.SENT1_AUTO === "object";
    console.log(
        `   📦 Namespace SENT1_AUTO: ${
            namespaceFunciona ? "✅ FUNCIONANDO" : "❌ INDISPONÍVEL"
        }`
    );

    // Resumo final
    console.log("\n📊 RESUMO FINAL:");
    console.log("================");
    if (diagnostico) {
        console.log("🔍 Diagnóstico:", diagnostico);
    }
    if (correcao) {
        console.log("🔧 Correção:", correcao);
    }

    const problemas = [];
    if (!botaoExiste) problemas.push("Botão ausente");
    if (iconesSubstituidos === 0) problemas.push("Ícones não substituídos");
    if (!namespaceFunciona) problemas.push("Namespace indisponível");

    if (problemas.length === 0) {
        console.log("🎉 SUCESSO: Todos os componentes estão funcionando!");
    } else {
        console.log(`⚠️ PROBLEMAS PENDENTES: ${problemas.join(", ")}`);
    }
}, 2000);

console.log("\n⏳ Aguardando 2 segundos para verificar resultados...");
