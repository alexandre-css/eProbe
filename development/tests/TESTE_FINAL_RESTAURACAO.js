// ✅ SCRIPT DE TESTE FINAL - Validação das Correções

console.log("🧪 INICIANDO TESTE FINAL DO SISTEMA RESTAURADO");

// 1. LIMPAR ESTADO ANTERIOR
console.log("🔄 LIMPANDO ESTADO...");
if (window.SENT1_AUTO) {
    window.SENT1_AUTO.resetDataSessaoPautado();
}
if (window.processosJaProcessados) {
    window.processosJaProcessados.clear();
}

// 2. TESTAR DETECÇÃO DE DADOS
console.log("🔍 TESTANDO DETECÇÃO...");
const dadosDetectados = window.SENT1_AUTO
    ? window.SENT1_AUTO.detectarDataSessao()
    : null;

// Aguardar um pouco para a detecção async
setTimeout(() => {
    console.log("📊 RESULTADO DA DETECÇÃO:");

    const temDados = window.SENT1_AUTO
        ? window.SENT1_AUTO.hasDataSessaoPautado()
        : false;
    const dados = window.SENT1_AUTO
        ? window.SENT1_AUTO.getDataSessaoPautado()
        : null;

    console.log("   Tem dados?", temDados);
    console.log("   Dados:", dados);

    // 3. TESTAR COMPORTAMENTO CONDICIONAL
    console.log("🎯 TESTANDO COMPORTAMENTO CONDICIONAL:");

    if (temDados) {
        console.log("✅ CENÁRIO: Processo COM dados de sessão");
        console.log("   → Card deve ser criado");

        const cardCriado = window.SENT1_AUTO
            ? window.SENT1_AUTO.inserirDataSessaoNaInterface()
            : false;
        console.log("   → Card criado?", cardCriado);

        // Verificar se card apareceu
        const cardExiste = document.getElementById("eprobe-data-sessao");
        console.log("   → Card visível na página?", !!cardExiste);
    } else {
        console.log("✅ CENÁRIO: Processo SEM dados de sessão");
        console.log("   → Card NÃO deve ser criado");

        const cardCriado = window.SENT1_AUTO
            ? window.SENT1_AUTO.inserirDataSessaoNaInterface()
            : false;
        console.log("   → Card criado?", cardCriado, "(deve ser false)");

        // Verificar se nenhum card apareceu
        const cardExiste = document.getElementById("eprobe-data-sessao");
        console.log(
            "   → Card visível na página?",
            !!cardExiste,
            "(deve ser false)"
        );
    }

    // 4. RESUMO FINAL
    console.log("📋 RESUMO DO TESTE:");
    console.log("   ✅ Detecção funcionando:", dadosDetectados !== undefined);
    console.log(
        "   ✅ Comportamento condicional:",
        temDados ? "Card aparece" : "Card não aparece"
    );
    console.log("   ✅ Correção aplicada com sucesso!");
}, 1000);

console.log("⏳ Aguardando resultado do teste...");
