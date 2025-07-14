// 🚀 TESTE ESPECÍFICO PARA MICROSOFT EDGE - Verificação das Funções de Status

console.log("🚀 TESTE EDGE: Verificando implementação das funções de status");
console.log("=".repeat(60));

// ✅ PASSO 1: Verificar se a extensão carregou
if (typeof window.SENT1_AUTO === "undefined") {
    console.error("❌ EXTENSÃO NÃO CARREGADA!");
    console.log("🔧 SOLUÇÃO PARA MICROSOFT EDGE:");
    console.log("1. Vá para edge://extensions/");
    console.log("2. Ative o 'Modo de desenvolvedor' se não estiver ativado");
    console.log("3. Clique no ícone reload (↻) da extensão eProbe");
    console.log("4. Recarregue esta página do eProc");
    console.log("5. Execute este script novamente");
    console.log("");
    console.log("📖 DIAGNÓSTICO ADICIONAL:");
    console.log("- Verifique se o Edge permite extensões de desenvolvedor");
    console.log("- Certifique-se de que o manifest.json está válido");
    console.log("- Verifique o console do Edge para erros de carregamento");
} else {
    console.log("✅ EXTENSÃO CARREGADA NO MICROSOFT EDGE!");

    // ✅ PASSO 2: Verificar funções específicas
    const funcoes = [
        "testarSistemaStatusSessao",
        "debugPadroesStatusSessao",
        "forcarStatusSessao",
        "detectarStatusSessao",
        "obterTextoCardPorStatus",
        "obterCorCardPorStatus",
    ];

    let todasDisponiveis = true;

    console.log("\n📋 VERIFICANDO FUNÇÕES DE STATUS:");
    funcoes.forEach((funcao) => {
        if (typeof window.SENT1_AUTO[funcao] === "function") {
            console.log(`✅ ${funcao}: DISPONÍVEL`);
        } else {
            console.error(`❌ ${funcao}: FALTANDO`);
            todasDisponiveis = false;
        }
    });

    // ✅ PASSO 3: Verificar funções auxiliares do namespace
    const funcoesAuxiliares = [
        "detectarDataSessao",
        "inserirDataSessaoNaInterface",
        "obterNumeroProcesso",
    ];

    console.log("\n📋 VERIFICANDO FUNÇÕES AUXILIARES:");
    funcoesAuxiliares.forEach((funcao) => {
        if (typeof window.SENT1_AUTO[funcao] === "function") {
            console.log(`✅ ${funcao}: DISPONÍVEL`);
        } else {
            console.log(`⚠️ ${funcao}: NÃO DISPONÍVEL (pode ser normal)`);
        }
    });

    if (todasDisponiveis) {
        console.log("\n🎉 TODAS AS FUNÇÕES DE STATUS DISPONÍVEIS!");
        console.log("\n🧪 COMANDOS DE TESTE PARA EDGE:");
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

        console.log("\n🚀 TESTE AUTOMÁTICO NO EDGE:");

        try {
            // Executar teste automático
            const resultado = window.SENT1_AUTO.testarSistemaStatusSessao();
            console.log("✅ Teste executado com sucesso no Edge!");
            console.log("📊 Resultado:", resultado);
        } catch (error) {
            console.error("❌ Erro no teste automático:", error);
            console.log("🔧 Possíveis soluções:");
            console.log("- Verifique se está em uma página do eProc");
            console.log(
                "- Certifique-se de que há dados de processo na página"
            );
            console.log("- Tente recarregar a extensão");
        }

        // ✅ PASSO 4: Verificar integração com Edge APIs
        console.log("\n🔌 VERIFICANDO APIS DO EDGE:");
        if (typeof chrome !== "undefined") {
            console.log("✅ chrome API: DISPONÍVEL");
            if (chrome.runtime) {
                console.log("✅ chrome.runtime: DISPONÍVEL");
                if (chrome.runtime.id) {
                    console.log(`✅ Extension ID: ${chrome.runtime.id}`);
                } else {
                    console.log("⚠️ chrome.runtime.id: undefined");
                }
            } else {
                console.log("❌ chrome.runtime: NÃO DISPONÍVEL");
            }
        } else {
            console.log("❌ chrome API: NÃO DISPONÍVEL");
        }
    } else {
        console.log("\n❌ ALGUMAS FUNÇÕES ESTÃO FALTANDO!");
        console.log("🔧 Soluções para Edge:");
        console.log("1. Recarregue a extensão em edge://extensions/");
        console.log("2. Verifique o console do Edge para erros");
        console.log("3. Certifique-se de que o content script foi injetado");
        console.log("4. Tente navegar para uma nova página do eProc");
    }
}

console.log("\n" + "=".repeat(60));
console.log("🏁 TESTE EDGE CONCLUÍDO");
console.log("📅 Data: " + new Date().toLocaleString("pt-BR"));
console.log("🌐 User Agent: " + navigator.userAgent.substr(0, 100) + "...");
