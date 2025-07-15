// 🔥 TESTE RÁPIDO - MODO ULTRA-PERFORMANCE
// Cole este script no console do navegador para testar

console.log("🧪 TESTE RÁPIDO DO MODO ULTRA-PERFORMANCE");
console.log("=".repeat(50));

try {
    if (typeof window.SENT1_AUTO === "undefined") {
        console.log(
            "❌ ERRO: Extensão eProbe não carregada ou namespace não encontrado"
        );
        console.log("💡 SOLUÇÃO: Recarregue a página e tente novamente");
    } else {
        console.log("✅ Extensão eProbe detectada!");

        // Testar função de status
        if (
            typeof window.SENT1_AUTO.statusModoUltraPerformance === "function"
        ) {
            console.log("\n📊 STATUS ATUAL:");
            window.SENT1_AUTO.statusModoUltraPerformance();
        } else {
            console.log("⚠️ Função de status não encontrada");
        }

        // Testar ativação
        if (
            typeof window.SENT1_AUTO.ativarModoUltraPerformance === "function"
        ) {
            console.log("\n🔥 TESTANDO ATIVAÇÃO:");
            const resultado = window.SENT1_AUTO.ativarModoUltraPerformance();
            console.log(`Resultado da ativação: ${resultado}`);

            // Verificar se realmente ativou
            setTimeout(() => {
                console.log("\n📊 VERIFICAÇÃO PÓS-ATIVAÇÃO:");
                window.SENT1_AUTO.statusModoUltraPerformance();

                // Testar desativação
                console.log("\n✅ TESTANDO DESATIVAÇÃO:");
                const resultadoDesat =
                    window.SENT1_AUTO.desativarModoUltraPerformance();
                console.log(`Resultado da desativação: ${resultadoDesat}`);

                // Status final
                setTimeout(() => {
                    console.log("\n📊 STATUS FINAL:");
                    window.SENT1_AUTO.statusModoUltraPerformance();

                    console.log("\n🎯 TESTE CONCLUÍDO COM SUCESSO!");
                    console.log(
                        "🔥 Para usar em páginas lentas: window.SENT1_AUTO.ativarModoUltraPerformance()"
                    );
                    console.log(
                        "✅ Para restaurar funcionalidades: window.SENT1_AUTO.desativarModoUltraPerformance()"
                    );
                }, 100);
            }, 100);
        } else {
            console.log("⚠️ Função de ativação não encontrada");
        }
    }
} catch (error) {
    console.error("❌ ERRO durante o teste:", error);
    console.log(
        "💡 DICA: Certifique-se de que a extensão está carregada e a página foi recarregada"
    );
}
