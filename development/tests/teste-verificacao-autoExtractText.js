// ============================================================================
// 🚀 TESTE VERIFICAÇÃO - autoExtractText
// ============================================================================
// Objetivo: Verificar se a função está acessível e funcionando
// Usar: Cole este código no console do navegador em uma página do eProc
// ============================================================================

console.log("🔍 TESTE: Verificando autoExtractText...");

// 1. Verificar se o namespace existe
if (typeof window.SENT1_AUTO === "undefined") {
    console.log("❌ ERRO: Namespace window.SENT1_AUTO não encontrado");
} else {
    console.log("✅ Namespace window.SENT1_AUTO encontrado");
}

// 2. Verificar se a função específica existe
if (typeof window.SENT1_AUTO.autoExtractText === "undefined") {
    console.log("❌ ERRO: Função autoExtractText não encontrada no namespace");
} else {
    console.log("✅ Função autoExtractText encontrada no namespace");
    console.log("📋 Tipo:", typeof window.SENT1_AUTO.autoExtractText);
}

// 3. Verificar funções relacionadas
const funcoesRelacionadas = [
    "autoOpenDocumentoRelevante",
    "copyToClipboard",
    "detectPageType",
    "showNotification",
];

console.log("📋 FUNÇÕES RELACIONADAS:");
funcoesRelacionadas.forEach((funcName) => {
    if (typeof window.SENT1_AUTO[funcName] !== "undefined") {
        console.log(`   ✅ ${funcName}: ${typeof window.SENT1_AUTO[funcName]}`);
    } else {
        console.log(`   ❌ ${funcName}: não encontrada`);
    }
});

// 4. Listar todas as funções disponíveis no namespace (resumo)
console.log("📋 TOTAL DE FUNÇÕES NO NAMESPACE:");
if (typeof window.SENT1_AUTO !== "undefined") {
    const totalFuncoes = Object.keys(window.SENT1_AUTO).length;
    console.log(`   Total: ${totalFuncoes} funções disponíveis`);

    // Mostrar apenas as primeiras 10 para não poluir o console
    console.log("   Primeiras funções:");
    Object.keys(window.SENT1_AUTO)
        .slice(0, 10)
        .forEach((funcName) => {
            console.log(`   • ${funcName}`);
        });

    if (totalFuncoes > 10) {
        console.log(`   ... e mais ${totalFuncoes - 10} funções`);
    }
}

// 5. Teste específico da função autoExtractText
console.log("🔧 TESTE ESPECÍFICO:");
try {
    if (typeof window.SENT1_AUTO.autoExtractText === "function") {
        console.log("✅ Função é chamável");
        console.log(
            "💡 Para testar execução, vá para uma página de documento e execute:"
        );
        console.log("   await window.SENT1_AUTO.autoExtractText()");

        // Testar se detectPageType funciona (função auxiliar)
        if (typeof window.SENT1_AUTO.detectPageType === "function") {
            const pageType = window.SENT1_AUTO.detectPageType();
            console.log(`📍 Tipo de página atual: "${pageType}"`);
        }
    } else {
        console.log("❌ Função não é chamável");
    }
} catch (error) {
    console.log("❌ Erro ao verificar função:", error);
}

console.log("🎯 TESTE CONCLUÍDO - autoExtractText");
console.log(
    "📌 STATUS:",
    typeof window.SENT1_AUTO?.autoExtractText === "function"
        ? "FUNCIONANDO"
        : "COM PROBLEMAS"
);
