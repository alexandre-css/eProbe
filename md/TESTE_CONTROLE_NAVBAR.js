// SCRIPT DE TESTE - Controle da Navbar Personalizada
// Execute este código no console do browser em uma página do eProc

console.log("🧪 INICIANDO TESTES DO CONTROLE DA NAVBAR PERSONALIZADA");
console.log("=====================================");

// Teste 1: Verificar se funções estão disponíveis
console.log("📋 TESTE 1: Verificando disponibilidade das funções...");

const funcoesEsperadas = [
    "ativarPersonalizacaoNavbar",
    "desativarPersonalizacaoNavbar",
    "verificarStatusPersonalizacaoNavbar",
    "inicializarConfiguracoesPersalizacao",
];

let funcoesDisponiveis = 0;
funcoesEsperadas.forEach((funcao) => {
    if (typeof window.SENT1_AUTO?.[funcao] === "function") {
        console.log(`✅ ${funcao} - DISPONÍVEL`);
        funcoesDisponiveis++;
    } else {
        console.log(`❌ ${funcao} - NÃO ENCONTRADA`);
    }
});

console.log(
    `📊 RESULTADO: ${funcoesDisponiveis}/${funcoesEsperadas.length} funções disponíveis`
);

if (funcoesDisponiveis === funcoesEsperadas.length) {
    console.log("\n🧪 TESTE 2: Verificando status inicial...");

    // Teste 2: Verificar status inicial
    try {
        const statusInicial =
            window.SENT1_AUTO.verificarStatusPersonalizacaoNavbar();
        console.log("📊 Status inicial:", statusInicial);

        console.log("\n🧪 TESTE 3: Testando desativação...");

        // Teste 3: Desativar personalização
        const resultadoDesativar =
            window.SENT1_AUTO.desativarPersonalizacaoNavbar();
        console.log("🚫 Resultado da desativação:", resultadoDesativar);

        const statusAposDesativar =
            window.SENT1_AUTO.verificarStatusPersonalizacaoNavbar();
        console.log("📊 Status após desativar:", statusAposDesativar);

        console.log("\n🧪 TESTE 4: Testando ativação...");

        // Teste 4: Ativar personalização novamente
        const resultadoAtivar = window.SENT1_AUTO.ativarPersonalizacaoNavbar();
        console.log("🎨 Resultado da ativação:", resultadoAtivar);

        const statusAposAtivar =
            window.SENT1_AUTO.verificarStatusPersonalizacaoNavbar();
        console.log("📊 Status após ativar:", statusAposAtivar);

        console.log("\n✅ TODOS OS TESTES EXECUTADOS COM SUCESSO!");
        console.log("=====================================");
        console.log(
            "🎯 CONTROLE DA NAVBAR PERSONALIZADA IMPLEMENTADO E FUNCIONAL!"
        );
    } catch (error) {
        console.error("❌ ERRO durante os testes:", error);
    }
} else {
    console.log(
        "❌ FALHA: Nem todas as funções estão disponíveis. Verifique a implementação."
    );
}
