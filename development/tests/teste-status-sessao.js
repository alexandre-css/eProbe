// 🧪 Script de Teste para Funções de Status de Sessão eProbe
// Para usar: cole este código no console do navegador em uma página do eProc

console.log("🚀 INICIANDO TESTES DAS FUNÇÕES DE STATUS");

// Verificar se o namespace existe
if (typeof window.SENT1_AUTO === "undefined") {
    console.error("❌ window.SENT1_AUTO não está definido!");
    console.log("ℹ️ Certifique-se de que:");
    console.log("1. A extensão eProbe está carregada");
    console.log("2. Você está em uma página do eProc");
    console.log("3. A página terminou de carregar completamente");
} else {
    console.log("✅ Namespace window.SENT1_AUTO encontrado!");

    // Listar funções disponíveis
    console.log("\n📋 FUNÇÕES DISPONÍVEIS:");
    const funcoes = Object.keys(window.SENT1_AUTO);
    funcoes.forEach((funcao) => {
        console.log(`   - ${funcao}`);
    });

    // Testar funções específicas de status
    console.log("\n🔍 TESTANDO FUNÇÕES DE STATUS:");

    // 1. Testar detecção de status
    if (typeof window.SENT1_AUTO.detectarStatusSessao === "function") {
        console.log("✅ detectarStatusSessao: DISPONÍVEL");
        try {
            const status = window.SENT1_AUTO.detectarStatusSessao();
            console.log("📊 Status detectado:", status);
        } catch (e) {
            console.log("⚠️ Erro ao detectar status:", e.message);
        }
    } else {
        console.log("❌ detectarStatusSessao: NÃO DISPONÍVEL");
    }

    // 2. Testar função de teste completo
    if (typeof window.SENT1_AUTO.testarSistemaStatusSessao === "function") {
        console.log("✅ testarSistemaStatusSessao: DISPONÍVEL");
    } else {
        console.log("❌ testarSistemaStatusSessao: NÃO DISPONÍVEL");
    }

    // 3. Testar função de debug de padrões
    if (typeof window.SENT1_AUTO.debugPadroesStatusSessao === "function") {
        console.log("✅ debugPadroesStatusSessao: DISPONÍVEL");
    } else {
        console.log("❌ debugPadroesStatusSessao: NÃO DISPONÍVEL");
    }

    // 4. Testar função de forçar status
    if (typeof window.SENT1_AUTO.forcarStatusSessao === "function") {
        console.log("✅ forcarStatusSessao: DISPONÍVEL");
    } else {
        console.log("❌ forcarStatusSessao: NÃO DISPONÍVEL");
    }

    console.log("\n🎯 COMANDOS PARA TESTAR:");
    console.log("// Testar sistema completo");
    console.log("window.SENT1_AUTO.testarSistemaStatusSessao()");
    console.log("");
    console.log("// Debug dos padrões regex");
    console.log("window.SENT1_AUTO.debugPadroesStatusSessao()");
    console.log("");
    console.log("// Forçar status específico");
    console.log("window.SENT1_AUTO.forcarStatusSessao('julgado')");
    console.log("window.SENT1_AUTO.forcarStatusSessao('pautado')");
    console.log("window.SENT1_AUTO.forcarStatusSessao('retirado')");
}

console.log("\n🏁 TESTE CONCLUÍDO");
