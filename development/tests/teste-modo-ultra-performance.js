// 🔥 TESTE DE MODO ULTRA-PERFORMANCE - eProbe Extension
// Este script testa as funcionalidades de controle de performance

console.log("🧪 INICIANDO TESTE DE PERFORMANCE...");

// Verificar se o namespace SENT1_AUTO existe
if (typeof window.SENT1_AUTO !== "undefined") {
    console.log("✅ Namespace SENT1_AUTO encontrado!");

    // Testar as funções de controle de performance
    console.log("\n🔥 TESTANDO CONTROLES DE PERFORMANCE:");

    // Status inicial
    console.log("📊 Status inicial:");
    if (typeof window.SENT1_AUTO.statusModoUltraPerformance === "function") {
        window.SENT1_AUTO.statusModoUltraPerformance();
    } else {
        console.log("⚠️ Função statusModoUltraPerformance não encontrada");
    }

    // Ativar modo ultra-performance
    console.log("\n🔥 Ativando modo ultra-performance:");
    if (typeof window.SENT1_AUTO.ativarModoUltraPerformance === "function") {
        const resultado = window.SENT1_AUTO.ativarModoUltraPerformance();
        console.log(`Resultado: ${resultado}`);
    } else {
        console.log("⚠️ Função ativarModoUltraPerformance não encontrada");
    }

    // Verificar status após ativação
    console.log("\n📊 Status após ativação:");
    if (typeof window.SENT1_AUTO.statusModoUltraPerformance === "function") {
        window.SENT1_AUTO.statusModoUltraPerformance();
    }

    // Desativar modo ultra-performance
    console.log("\n✅ Desativando modo ultra-performance:");
    if (typeof window.SENT1_AUTO.desativarModoUltraPerformance === "function") {
        const resultado = window.SENT1_AUTO.desativarModoUltraPerformance();
        console.log(`Resultado: ${resultado}`);
    } else {
        console.log("⚠️ Função desativarModoUltraPerformance não encontrada");
    }

    // Status final
    console.log("\n📊 Status final:");
    if (typeof window.SENT1_AUTO.statusModoUltraPerformance === "function") {
        window.SENT1_AUTO.statusModoUltraPerformance();
    }

    console.log("\n🎯 TESTE CONCLUÍDO! Verifique os logs acima.");
} else {
    console.log(
        "❌ Namespace SENT1_AUTO não encontrado! A extensão pode não estar carregada."
    );
}

// Instruções para o usuário
console.log(`
🔧 INSTRUÇÕES DE USO:

1. Para ATIVAR o modo ultra-performance:
   window.SENT1_AUTO.ativarModoUltraPerformance()

2. Para DESATIVAR o modo ultra-performance:
   window.SENT1_AUTO.desativarModoUltraPerformance()

3. Para verificar o STATUS atual:
   window.SENT1_AUTO.statusModoUltraPerformance()

⚡ BENEFÍCIOS DO MODO ULTRA-PERFORMANCE:
- Desabilita aplicação de CSS Material Design
- Pula inicializações custosas
- Reduz drasticamente o tempo de carregamento
- Mantém apenas funcionalidades essenciais

🎯 RECOMENDAÇÃO: Ative o modo antes de navegar para páginas do eProc
que estão demorando 45-70 segundos para carregar.
`);
