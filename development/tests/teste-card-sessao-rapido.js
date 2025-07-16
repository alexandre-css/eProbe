// 🧪 SCRIPT DE TESTE RÁPIDO - Card de Sessão eProbe
// Execute este script no console do navegador na página do eProc

console.log("🚀 INICIANDO TESTE RÁPIDO DO CARD DE SESSÃO");
console.log("============================================");

// Função auxiliar para aguardar
const aguardar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Função principal de teste
async function testeRapidoCard() {
    try {
        console.log("\n📊 1. DIAGNÓSTICO INICIAL");
        console.log("═══════════════════════");

        // Verificar se as funções estão disponíveis
        const funcoesDisponiveis = {
            diagnostico: typeof window.SENT1_AUTO?.diagnosticoCompletoCard,
            teste: typeof window.SENT1_AUTO?.testarCriacaoCard,
            forca: typeof window.SENT1_AUTO?.forcarInsercaoCardSemValidacao,
            detectar: typeof window.SENT1_AUTO?.detectarDataSessao,
        };

        console.log("Funções disponíveis:", funcoesDisponiveis);

        if (funcoesDisponiveis.diagnostico !== "function") {
            console.log("❌ ERRO: Funções de teste não estão disponíveis!");
            console.log("💡 SOLUÇÃO: Recarregue a página e tente novamente");
            return { erro: "Funções não disponíveis" };
        }

        console.log("\n🩺 2. EXECUTANDO DIAGNÓSTICO COMPLETO");
        console.log("═══════════════════════════════════");

        const diagnostico = window.SENT1_AUTO.diagnosticoCompletoCard();
        console.log("Diagnóstico completo:", diagnostico);

        // Analisar diagnóstico
        const problemas = diagnostico.conclusoes || [];

        if (problemas.length === 0) {
            console.log("\n✅ 3. TUDO OK - TESTANDO CRIAÇÃO NORMAL");
            console.log("═════════════════════════════════════");

            const resultado = window.SENT1_AUTO.testarCriacaoCard();
            console.log("Resultado do teste:", resultado);

            if (resultado.sucesso) {
                console.log("\n🎉 SUCESSO! Card criado com sucesso!");
                return { sucesso: true, metodo: "normal", resultado };
            } else {
                console.log(
                    "\n⚠️ Teste normal falhou, tentando método forçado..."
                );
            }
        } else {
            console.log("\n⚠️ 3. PROBLEMAS DETECTADOS - USANDO MÉTODO FORÇADO");
            console.log("════════════════════════════════════════════════");
            console.log("Problemas encontrados:", problemas);
        }

        console.log("\n🚀 4. EXECUTANDO CRIAÇÃO FORÇADA");
        console.log("══════════════════════════════");

        const forcado = window.SENT1_AUTO.forcarInsercaoCardSemValidacao();
        console.log("Resultado forçado:", forcado);

        if (forcado.sucesso) {
            console.log("\n🎉 SUCESSO! Card criado com método forçado!");
            return { sucesso: true, metodo: "forcado", resultado: forcado };
        } else {
            console.log(
                "\n❌ FALHA CRÍTICA: Nem mesmo o método forçado funcionou!"
            );
            return { erro: "Falha crítica", diagnostico, forcado };
        }
    } catch (error) {
        console.error("\n💥 ERRO CRÍTICO NO TESTE:", error);
        return { erro: error.message, stack: error.stack };
    }
}

// Função para verificar resultado visual
function verificarCardVisual() {
    const card = document.getElementById("eprobe-data-sessao");
    if (!card) {
        console.log("❌ Card não encontrado no DOM");
        return false;
    }

    const visivel = card.offsetWidth > 0 && card.offsetHeight > 0;
    const posicao = card.style.position || "static";
    const pai = card.parentElement?.tagName || "N/A";

    console.log("✅ Card encontrado:");
    console.log(`   - Visível: ${visivel}`);
    console.log(`   - Posição: ${posicao}`);
    console.log(`   - Container pai: ${pai}`);
    console.log(`   - Data processo: ${card.getAttribute("data-processo")}`);

    return visivel;
}

// Executar teste automaticamente
console.log("\n🏁 INICIANDO TESTE AUTOMÁTICO...");
testeRapidoCard().then((resultado) => {
    console.log("\n📋 RESULTADO FINAL:");
    console.log("══════════════════");
    console.log(resultado);

    if (resultado.sucesso) {
        console.log("\n🔍 VERIFICAÇÃO VISUAL:");
        console.log("═══════════════════");
        verificarCardVisual();

        console.log("\n🎯 TESTE CONCLUÍDO COM SUCESSO!");
        console.log("O card de sessão deve estar visível na página.");
    } else {
        console.log("\n💔 TESTE FALHOU!");
        console.log("Verifique os logs acima para mais detalhes.");
        console.log("\n🔧 SUGESTÕES DE DEBUG:");
        console.log("1. Verifique se está na página correta do eProc");
        console.log("2. Recarregue a página e tente novamente");
        console.log(
            "3. Execute manualmente: window.SENT1_AUTO.forcarInsercaoCardSemValidacao()"
        );
    }
});

// Exportar funções para uso manual
window.testeRapidoCard = testeRapidoCard;
window.verificarCardVisual = verificarCardVisual;

console.log("\n💡 FUNÇÕES DISPONÍVEIS PARA TESTE MANUAL:");
console.log("- testeRapidoCard() - Teste completo automático");
console.log("- verificarCardVisual() - Verificar se card está visível");
console.log(
    "- window.SENT1_AUTO.diagnosticoCompletoCard() - Diagnóstico detalhado"
);
console.log(
    "- window.SENT1_AUTO.forcarInsercaoCardSemValidacao() - Criação forçada"
);
