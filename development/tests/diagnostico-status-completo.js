// 🔧 Script de Diagnóstico Avançado para eProbe
// Este script verifica se todas as funções estão carregadas corretamente
// Para usar: cole no console do navegador em uma página do eProc

console.log("🚀 DIAGNÓSTICO AVANÇADO - eProbe Status de Sessão");
console.log("=".repeat(60));

// 1. Verificar se o script principal foi carregado
console.log("\n📋 ETAPA 1: Verificando carregamento do script principal");
if (typeof window.SENT1_AUTO === "undefined") {
    console.error("❌ FALHA CRÍTICA: window.SENT1_AUTO não existe!");
    console.log("🔧 SOLUÇÕES:");
    console.log("1. Verifique se a extensão eProbe está ativa");
    console.log("2. Recarregue a página do eProc");
    console.log("3. Verifique se você está em uma página válida do eProc");
    console.log("4. Abra chrome://extensions/ e recarregue a extensão");
} else {
    console.log("✅ window.SENT1_AUTO encontrado");

    // 2. Verificar funções específicas de status
    console.log("\n📋 ETAPA 2: Verificando funções de status de sessão");

    const funcoesEssenciais = [
        "detectarStatusSessao",
        "testarSistemaStatusSessao",
        "debugPadroesStatusSessao",
        "forcarStatusSessao",
        "obterTextoCardPorStatus",
        "obterCorCardPorStatus",
    ];

    funcoesEssenciais.forEach((funcao) => {
        if (typeof window.SENT1_AUTO[funcao] === "function") {
            console.log(`✅ ${funcao}: DISPONÍVEL`);
        } else {
            console.error(`❌ ${funcao}: NÃO DISPONÍVEL`);
        }
    });

    // 3. Testar carregamento das funções globais necessárias
    console.log("\n📋 ETAPA 3: Verificando funções de suporte");

    const funcoesSupporte = [
        "inserirDataSessaoNaInterface",
        "detectarDataSessao",
        "hasDataSessaoPautado",
        "getDataSessaoPautado",
    ];

    funcoesSupporte.forEach((funcao) => {
        if (typeof window.SENT1_AUTO[funcao] === "function") {
            console.log(`✅ ${funcao}: DISPONÍVEL`);
        } else {
            console.error(`❌ ${funcao}: NÃO DISPONÍVEL`);
        }
    });

    // 4. Listar todas as funções disponíveis
    console.log("\n📋 ETAPA 4: Inventário completo de funções");
    const todasFuncoes = Object.keys(window.SENT1_AUTO).filter(
        (key) => typeof window.SENT1_AUTO[key] === "function"
    );
    console.log(`📊 Total de funções: ${todasFuncoes.length}`);

    // Funções relacionadas a status
    const funcoesStatus = todasFuncoes.filter(
        (f) =>
            f.toLowerCase().includes("status") ||
            f.toLowerCase().includes("sessao") ||
            f.toLowerCase().includes("testar") ||
            f.toLowerCase().includes("debug")
    );

    if (funcoesStatus.length > 0) {
        console.log("\n🎯 FUNÇÕES DE STATUS E DEBUG ENCONTRADAS:");
        funcoesStatus.forEach((f) => console.log(`   - ${f}`));
    }

    // 5. Teste rápido de funcionalidade
    console.log("\n📋 ETAPA 5: Teste básico de funcionalidade");

    try {
        if (typeof window.SENT1_AUTO.forcarStatusSessao === "function") {
            console.log("🧪 Testando forcarStatusSessao...");
            const resultado = window.SENT1_AUTO.forcarStatusSessao("pautado");
            if (resultado) {
                console.log("✅ forcarStatusSessao funcionando!");
                console.log("📊 Resultado:", resultado);
            } else {
                console.log("⚠️ forcarStatusSessao retornou null");
            }
        }
    } catch (error) {
        console.error("❌ Erro ao testar forcarStatusSessao:", error);
    }

    // 6. Comandos prontos para usar
    console.log("\n📋 ETAPA 6: Comandos prontos para teste");
    console.log("🎯 COPIE E EXECUTE OS COMANDOS ABAIXO:");
    console.log("");
    console.log("// Testar sistema completo");
    console.log("window.SENT1_AUTO.testarSistemaStatusSessao()");
    console.log("");
    console.log("// Debug de padrões");
    console.log("window.SENT1_AUTO.debugPadroesStatusSessao()");
    console.log("");
    console.log("// Forçar status específico");
    console.log("window.SENT1_AUTO.forcarStatusSessao('julgado')");
    console.log("window.SENT1_AUTO.forcarStatusSessao('pautado')");
    console.log("window.SENT1_AUTO.forcarStatusSessao('retirado')");
}

console.log("\n" + "=".repeat(60));
console.log("🏁 DIAGNÓSTICO CONCLUÍDO");
