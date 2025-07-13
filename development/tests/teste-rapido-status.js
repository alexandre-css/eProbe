// ⚡ TESTE RÁPIDO - Status de Sessão eProbe
// Cole este código no console do navegador em uma página do eProc

console.log("⚡ TESTE RÁPIDO - Status de Sessão");

// Verificar se o namespace existe
if (typeof window.SENT1_AUTO === "undefined") {
    console.error("❌ window.SENT1_AUTO não carregado!");
    console.log("🔧 Recarregue a extensão em chrome://extensions/");
} else {
    console.log("✅ window.SENT1_AUTO carregado");

    // Testar funções principais
    const funcoesStatus = [
        "testarSistemaStatusSessao",
        "debugPadroesStatusSessao",
        "forcarStatusSessao",
    ];

    console.log("\n📋 Verificando funções:");
    funcoesStatus.forEach((funcao) => {
        if (typeof window.SENT1_AUTO[funcao] === "function") {
            console.log(`✅ ${funcao}: OK`);
        } else {
            console.error(`❌ ${funcao}: FALTANDO`);
        }
    });

    console.log("\n🎯 COMANDOS PARA TESTE:");
    console.log("window.SENT1_AUTO.testarSistemaStatusSessao()");
    console.log("window.SENT1_AUTO.debugPadroesStatusSessao()");
    console.log("window.SENT1_AUTO.forcarStatusSessao('julgado')");
}
