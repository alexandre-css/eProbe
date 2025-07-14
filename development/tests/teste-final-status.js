// 🚀 TESTE FINAL - Verificação das Funções de Status

console.log("🚀 TESTE FINAL: Verificando implementação das funções de status");
console.log("=".repeat(60));

// ✅ PASSO 1: Verificar se a extensão carregou
if (typeof window.SENT1_AUTO === "undefined") {
    console.error("❌ EXTENSÃO NÃO CARREGADA!");
    console.log("🔧 SOLUÇÃO:");
    console.log("1. Vá para edge://extensions/");
    console.log("2. Clique no ícone reload (↻) da extensão eProbe");
    console.log("3. Recarregue esta página do eProc");
    console.log("4. Execute este script novamente");
} else {
    console.log("✅ EXTENSÃO CARREGADA!");

    // ✅ PASSO 2: Verificar funções específicas
    const funcoes = [
        "testarSistemaStatusSessao",
        "debugPadroesStatusSessao",
        "forcarStatusSessao",
    ];

    let todasDisponiveis = true;

    console.log("\n📋 VERIFICANDO FUNÇÕES:");
    funcoes.forEach((funcao) => {
        if (typeof window.SENT1_AUTO[funcao] === "function") {
            console.log(`✅ ${funcao}: DISPONÍVEL`);
        } else {
            console.error(`❌ ${funcao}: FALTANDO`);
            todasDisponiveis = false;
        }
    });

    if (todasDisponiveis) {
        console.log("\n🎉 TODAS AS FUNÇÕES DISPONÍVEIS!");
        console.log("\n🧪 COMANDOS DE TESTE:");
        console.log("");
        console.log("// Testar sistema completo");
        console.log("window.SENT1_AUTO.testarSistemaStatusSessao()");
        console.log("");
        console.log("// Debug dos padrões de busca");
        console.log("window.SENT1_AUTO.debugPadroesStatusSessao()");
        console.log("");
        console.log("// Forçar status específico");
        console.log("window.SENT1_AUTO.forcarStatusSessao('julgado')");
        console.log("window.SENT1_AUTO.forcarStatusSessao('pautado')");
        console.log("window.SENT1_AUTO.forcarStatusSessao('retirado')");

        console.log("\n🚀 TESTE AUTOMÁTICO:");

        try {
            // Executar teste automático
            const resultado = window.SENT1_AUTO.testarSistemaStatusSessao();
            console.log("✅ Teste executado com sucesso!");
            console.log("📊 Resultado:", resultado);
        } catch (error) {
            console.error("❌ Erro no teste automático:", error);
        }
    } else {
        console.log("\n❌ ALGUMAS FUNÇÕES ESTÃO FALTANDO!");
        console.log("🔧 Recarregue a extensão em edge://extensions/");
    }
}

console.log("\n" + "=".repeat(60));
console.log("🏁 TESTE CONCLUÍDO");
