// ============================================================================
// 🚀 TESTE VERIFICAÇÃO - autoOpenDocumentoRelevante
// ============================================================================
// Objetivo: Verificar se a função está acessível e funcionando
// Usar: Cole este código no console do navegador em uma página do eProc
// ============================================================================

console.log("🔍 TESTE: Verificando autoOpenDocumentoRelevante...");

// 1. Verificar se o namespace existe
if (typeof window.SENT1_AUTO === "undefined") {
    console.log("❌ ERRO: Namespace window.SENT1_AUTO não encontrado");
} else {
    console.log("✅ Namespace window.SENT1_AUTO encontrado");
}

// 2. Verificar se a função específica existe
if (typeof window.SENT1_AUTO.autoOpenDocumentoRelevante === "undefined") {
    console.log(
        "❌ ERRO: Função autoOpenDocumentoRelevante não encontrada no namespace"
    );
} else {
    console.log("✅ Função autoOpenDocumentoRelevante encontrada no namespace");
    console.log(
        "📋 Tipo:",
        typeof window.SENT1_AUTO.autoOpenDocumentoRelevante
    );
}

// 3. Listar todas as funções disponíveis no namespace
console.log("📋 FUNÇÕES DISPONÍVEIS NO NAMESPACE:");
if (typeof window.SENT1_AUTO !== "undefined") {
    Object.keys(window.SENT1_AUTO).forEach((funcName) => {
        console.log(`   • ${funcName}: ${typeof window.SENT1_AUTO[funcName]}`);
    });
}

// 4. Teste de execução (apenas se não estivermos em página de documentos)
console.log("🔧 TESTE DE EXECUÇÃO:");
try {
    if (typeof window.SENT1_AUTO.autoOpenDocumentoRelevante === "function") {
        console.log("✅ Função é chamável");
        console.log(
            "💡 Para testar execução, vá para uma página de lista de documentos e execute:"
        );
        console.log("   window.SENT1_AUTO.autoOpenDocumentoRelevante()");
    } else {
        console.log("❌ Função não é chamável");
    }
} catch (error) {
    console.log("❌ Erro ao verificar função:", error);
}

console.log("🎯 TESTE CONCLUÍDO");
