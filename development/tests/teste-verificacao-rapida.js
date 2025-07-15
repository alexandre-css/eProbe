// =============================================================================
// 🎯 TESTE RÁPIDO: VERIFICAÇÃO DE EXECUÇÃO CONSISTENTE
// =============================================================================
//
// Este script verifica se todas as funcionalidades estão executando conforme
// esperado após os timeouts automáticos da extensão.
//
// COMO USAR:
// 1. Recarregue a página do eProc
// 2. Aguarde 6 segundos para os timeouts executarem
// 3. Cole este código no console
//
// =============================================================================

console.log("🎯 VERIFICAÇÃO: Iniciando teste de execução consistente");
console.log("📍 URL atual:", window.location.href);
console.log("⏰ Timestamp:", new Date().toLocaleString("pt-BR"));

// 1. Verificar modo ultra-performance
const modoUltraAtivo = window.SENT1_AUTO?.statusModoUltraPerformance
    ? window.SENT1_AUTO.statusModoUltraPerformance()
    : "INDISPONÍVEL";
console.log(`🔥 Modo Ultra-Performance: ${modoUltraAtivo}`);

// 2. Verificar logs dos sistemas automáticos
console.log("\n📝 LOGS ESPERADOS:");
console.log(
    "   - Deve aparecer: '🎨 ÍCONES: Iniciando sistema automaticamente...'"
);
console.log(
    "   - Deve aparecer: '🔧 ROBUSTA: Verificação e correção de inconsistências...'"
);

// 3. Verificar elementos na página
console.log("\n🔍 VERIFICAÇÃO DOS ELEMENTOS:");

// Botão Resumir Documento
const botoes = [
    document.getElementById("documento-relevante-auto-button"),
    document.getElementById("sent1-auto-button"),
    document.getElementById("eprobe-btn"),
].filter(Boolean);

console.log(`🔘 Botões encontrados: ${botoes.length}`);
botoes.forEach((btn, i) => {
    console.log(`   ${i + 1}. ID: ${btn.id}, Classes: ${btn.className}`);
});

// Fieldset de ações
const fieldsetAcoes = document.querySelector("#fldAcoes.infraFieldset");
if (fieldsetAcoes) {
    const iconesGIF = fieldsetAcoes.querySelectorAll('img[src*=".gif"]');
    const iconesSVG = fieldsetAcoes.querySelectorAll("svg.lucide");

    console.log(`🎨 Fieldset #fldAcoes encontrado:`);
    console.log(`   - Ícones GIF restantes: ${iconesGIF.length}`);
    console.log(`   - Ícones SVG (novos): ${iconesSVG.length}`);

    if (iconesGIF.length > 0) {
        console.log("⚠️ Ainda há ícones GIF não substituídos:");
        iconesGIF.forEach((img, i) => {
            console.log(`   ${i + 1}. src: ${img.src.split("/").pop()}`);
        });
    }
} else {
    console.log("❌ Fieldset #fldAcoes não encontrado");
}

// Ícones marcados como substituídos
const iconesSubstituidos = document.querySelectorAll(
    "[data-eprobe-icon-replaced]"
);
console.log(
    `🎨 Ícones marcados como substituídos: ${iconesSubstituidos.length}`
);

// 4. Verificar namespace SENT1_AUTO
const funcoesDiagnostico = ["diagnosticarCompleto", "corrigirProblemas"];
console.log("\n📦 FUNÇÕES DE DIAGNÓSTICO:");
funcoesDiagnostico.forEach((func) => {
    const existe = typeof window.SENT1_AUTO?.[func] === "function";
    console.log(
        `   ${existe ? "✅" : "❌"} ${func}: ${
            existe ? "DISPONÍVEL" : "INDISPONÍVEL"
        }`
    );
});

// 5. Resumo de status
console.log("\n📊 RESUMO DE STATUS:");
const status = {
    botaoPresente: botoes.length > 0,
    iconesSubstituidos: iconesSubstituidos.length > 0,
    fieldsetEncontrado: !!fieldsetAcoes,
    namespaceDisponivel: typeof window.SENT1_AUTO === "object",
};

Object.entries(status).forEach(([chave, valor]) => {
    console.log(
        `   ${valor ? "✅" : "❌"} ${chave}: ${valor ? "OK" : "PROBLEMA"}`
    );
});

// 6. Executar diagnóstico se disponível
if (typeof window.SENT1_AUTO?.diagnosticarCompleto === "function") {
    console.log("\n🔍 EXECUTANDO DIAGNÓSTICO AUTOMÁTICO:");
    try {
        const resultado = window.SENT1_AUTO.diagnosticarCompleto();
        console.log("✅ Diagnóstico concluído - veja detalhes acima");
    } catch (error) {
        console.error("❌ Erro no diagnóstico:", error);
    }
} else {
    console.log("\n❌ Função de diagnóstico não disponível");
}

console.log("\n🎯 VERIFICAÇÃO CONCLUÍDA");
console.log("=".repeat(50));
