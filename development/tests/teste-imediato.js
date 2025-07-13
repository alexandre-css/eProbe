// 🚨 TESTE IMEDIATO - Cole este código no console do eProc

// Verificar se a extensão está carregada
if (typeof window.SENT1_AUTO === "undefined") {
    console.error("❌ EXTENSÃO NÃO CARREGADA!");
    console.log("🔧 FAÇA ISSO:");
    console.log("1. Vá para chrome://extensions/");
    console.log("2. Clique no ícone reload (↻) da extensão eProbe");
    console.log("3. Recarregue esta página do eProc");
    console.log("4. Aguarde 10 segundos e tente novamente");
} else {
    console.log("✅ EXTENSÃO CARREGADA!");

    // Verificar funções específicas
    const funcoesStatus = [
        "testarSistemaStatusSessao",
        "debugPadroesStatusSessao",
        "forcarStatusSessao",
    ];
    let todasDisponiveis = true;

    console.log("\n📋 VERIFICANDO FUNÇÕES DE STATUS:");
    funcoesStatus.forEach((funcao) => {
        if (typeof window.SENT1_AUTO[funcao] === "function") {
            console.log(`✅ ${funcao}: OK`);
        } else {
            console.error(`❌ ${funcao}: FALTANDO`);
            todasDisponiveis = false;
        }
    });

    if (todasDisponiveis) {
        console.log("\n🎉 TUDO PRONTO! Execute estes comandos:");
        console.log("");
        console.log("window.SENT1_AUTO.testarSistemaStatusSessao()");
        console.log("window.SENT1_AUTO.debugPadroesStatusSessao()");
        console.log("window.SENT1_AUTO.forcarStatusSessao('julgado')");
    } else {
        console.log("\n❌ ALGUMAS FUNÇÕES ESTÃO FALTANDO!");
        console.log("🔧 Recarregue a extensão e tente novamente");
    }
}
