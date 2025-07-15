/* 🔥 VERIFICAÇÃO FINAL - MODO ULTRA-PERFORMANCE
 * Execute este script no console do navegador para testar tudo
 * Depois de carregar a extensão em uma página do eProc
 */

console.log("🔥 VERIFICAÇÃO FINAL DO MODO ULTRA-PERFORMANCE");
console.log("=".repeat(60));

// Função para verificar se uma função existe
function verificarFuncao(nome, funcao) {
    const existe = typeof funcao === "function";
    console.log(
        `${existe ? "✅" : "❌"} ${nome}: ${
            existe ? "DISPONÍVEL" : "NÃO ENCONTRADA"
        }`
    );
    return existe;
}

// Função para verificar variável
function verificarVariavel(nome, valor) {
    const existe = typeof valor !== "undefined";
    console.log(
        `${existe ? "✅" : "❌"} ${nome}: ${existe ? valor : "NÃO ENCONTRADA"}`
    );
    return existe;
}

let tudoOK = true;

try {
    console.log("\n🔍 VERIFICANDO NAMESPACE PRINCIPAL:");
    if (typeof window.SENT1_AUTO === "undefined") {
        console.log("❌ CRÍTICO: Namespace window.SENT1_AUTO não encontrado!");
        console.log(
            "💡 SOLUÇÃO: Recarregue a página e certifique-se de que a extensão está ativa"
        );
        tudoOK = false;
    } else {
        console.log("✅ Namespace window.SENT1_AUTO encontrado!");

        console.log("\n🔧 VERIFICANDO FUNÇÕES DE CONTROLE:");
        tudoOK &= verificarFuncao(
            "ativarModoUltraPerformance",
            window.SENT1_AUTO.ativarModoUltraPerformance
        );
        tudoOK &= verificarFuncao(
            "desativarModoUltraPerformance",
            window.SENT1_AUTO.desativarModoUltraPerformance
        );
        tudoOK &= verificarFuncao(
            "statusModoUltraPerformance",
            window.SENT1_AUTO.statusModoUltraPerformance
        );

        if (tudoOK) {
            console.log("\n🧪 EXECUTANDO TESTE FUNCIONAL:");

            // Status inicial
            console.log("📊 Status inicial:");
            window.SENT1_AUTO.statusModoUltraPerformance();

            // Teste de ativação
            console.log("\n🔥 Testando ativação:");
            const resultadoAtivacao =
                window.SENT1_AUTO.ativarModoUltraPerformance();
            console.log(`Resultado da ativação: ${resultadoAtivacao}`);

            // Verificar status após ativação
            console.log("\n📊 Status após ativação:");
            const statusAtivo = window.SENT1_AUTO.statusModoUltraPerformance();

            if (statusAtivo === true) {
                console.log(
                    "✅ SUCESSO: Modo ultra-performance foi ativado corretamente!"
                );
            } else {
                console.log(
                    "❌ ERRO: Modo ultra-performance não foi ativado corretamente!"
                );
                tudoOK = false;
            }

            // Teste de desativação
            console.log("\n✅ Testando desativação:");
            const resultadoDesativacao =
                window.SENT1_AUTO.desativarModoUltraPerformance();
            console.log(`Resultado da desativação: ${resultadoDesativacao}`);

            // Status final
            console.log("\n📊 Status final:");
            const statusFinal = window.SENT1_AUTO.statusModoUltraPerformance();

            if (statusFinal === false) {
                console.log(
                    "✅ SUCESSO: Modo ultra-performance foi desativado corretamente!"
                );
            } else {
                console.log(
                    "❌ ERRO: Modo ultra-performance não foi desativado corretamente!"
                );
                tudoOK = false;
            }
        }
    }

    console.log("\n" + "=".repeat(60));
    if (tudoOK) {
        console.log("🎉 VERIFICAÇÃO COMPLETA: TUDO FUNCIONANDO PERFEITAMENTE!");
        console.log("\n📋 COMANDOS PARA USO:");
        console.log(
            "🔥 Ativar: window.SENT1_AUTO.ativarModoUltraPerformance()"
        );
        console.log(
            "✅ Desativar: window.SENT1_AUTO.desativarModoUltraPerformance()"
        );
        console.log(
            "📊 Status: window.SENT1_AUTO.statusModoUltraPerformance()"
        );

        console.log("\n💡 DICA PARA PÁGINAS LENTAS:");
        console.log(
            "1. Ative o modo ANTES de navegar: window.SENT1_AUTO.ativarModoUltraPerformance()"
        );
        console.log("2. Navegue para a página do eProc");
        console.log("3. Observe a melhoria de performance");
        console.log("4. Desative se precisar da interface completa");
    } else {
        console.log(
            "❌ VERIFICAÇÃO FALHOU: Alguns componentes não estão funcionando!"
        );
        console.log("💡 Verifique se a extensão foi carregada corretamente");
    }
} catch (error) {
    console.error("❌ ERRO durante verificação:", error);
    console.log(
        "💡 Certifique-se de que está em uma página do eProc com a extensão carregada"
    );
}

console.log("\n🏁 VERIFICAÇÃO FINALIZADA");
