// 🚀 TESTE RÁPIDO DE DISPONIBILIDADE DAS FUNÇÕES
// Cole este código no console da página do eProc

console.log("🚀 TESTANDO DISPONIBILIDADE DAS FUNÇÕES eProbe");
console.log("===============================================");

// Verificar namespace principal
if (typeof window.SENT1_AUTO === "undefined") {
    console.log("❌ ERRO: window.SENT1_AUTO não existe!");
    console.log("💡 RECARREGUE A PÁGINA (F5) e tente novamente");
} else {
    console.log("✅ window.SENT1_AUTO existe");

    // Verificar funções específicas
    const funcoesTeste = [
        "testarCriacaoCard",
        "forcarInsercaoCardSemValidacao",
        "diagnosticoCompletoCard",
        "debugRapido",
    ];

    console.log("\n🔧 VERIFICANDO FUNÇÕES DE TESTE:");
    funcoesTeste.forEach((funcao) => {
        const existe = typeof window.SENT1_AUTO[funcao] === "function";
        console.log(
            `${existe ? "✅" : "❌"} ${funcao}: ${typeof window.SENT1_AUTO[
                funcao
            ]}`
        );
    });

    // Verificar funções principais
    const funcoesprincipais = [
        "hasDataSessaoPautado",
        "getDataSessaoPautado",
        "detectarDataSessao",
        "inserirDataSessaoNaInterface",
    ];

    console.log("\n🏗️ VERIFICANDO FUNÇÕES PRINCIPAIS:");
    funcoesprincipais.forEach((funcao) => {
        const existe = typeof window.SENT1_AUTO[funcao] === "function";
        console.log(
            `${existe ? "✅" : "❌"} ${funcao}: ${typeof window.SENT1_AUTO[
                funcao
            ]}`
        );
    });

    // Tentar executar debug rápido
    console.log("\n🧪 EXECUTANDO DEBUG RÁPIDO:");
    try {
        const resultado = window.SENT1_AUTO.debugRapido();
        console.log("✅ Debug executado com sucesso:", resultado);
    } catch (error) {
        console.log("❌ Erro no debug:", error.message);
    }
}

console.log(
    "\n💡 PRÓXIMO PASSO: Se todas as funções estão disponíveis, execute:"
);
console.log("window.SENT1_AUTO.testarCriacaoCard()");
