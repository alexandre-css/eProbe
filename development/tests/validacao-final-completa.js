// =============================================================================
// 🎯 VALIDAÇÃO FINAL COMPLETA - Sistema eProbe v2.0
// =============================================================================
//
// Este script valida todas as implementações da iteração atual:
// ✅ Namespace SENT1_AUTO completo
// ✅ Funções de diagnóstico e correção
// ✅ Sistema de ícones melhorado
// ✅ Verificação robusta de botões
// ✅ Execução automática confiável
//
// EXECUTE EM UMA PÁGINA DO ePROC PARA VALIDAÇÃO COMPLETA
// =============================================================================

console.clear();
console.log("🎯 VALIDAÇÃO FINAL COMPLETA - Sistema eProbe v2.0");
console.log("=".repeat(70));
console.log("📅 Data:", new Date().toLocaleString("pt-BR"));
console.log("🌐 URL:", window.location.href);

// =============================================================================
// 📋 LISTA COMPLETA DE FUNÇÕES ESPERADAS
// =============================================================================

const funcoesCriticas = {
    "Core Functions": [
        "runFullAutomation",
        "autoOpenDocumentoRelevante",
        "autoExtractText",
        "detectPageType",
        "findDocumentosRelevantes",
    ],
    "Session Detection": [
        "detectarDataSessao",
        "getDataSessaoPautado",
        "hasDataSessaoPautado",
        "resetDataSessaoPautado",
        "inserirDataSessaoNaInterface",
    ],
    "Button Management": [
        "ensureButtonExists",
        "forceCreateButton",
        "debugButtonCreation",
        "shouldShowIntegratedButton",
        "shouldShowFloatingButton",
    ],
    "Icon System": [
        "forcarReaplicacaoIcones",
        "inicializarSubstituicaoIcones",
        "diagnosticarIconesCSS",
    ],
    "Diagnostic & Correction": ["diagnosticarCompleto", "corrigirProblemas"],
    "Performance Control": [
        "ativarModoUltraPerformance",
        "desativarModoUltraPerformance",
        "statusModoUltraPerformance",
    ],
    "Debug Functions": [
        "debugDeteccaoDataSessao",
        "forcarDeteccaoDataSessao",
        "debugDeteccaoStatusSessao",
        "debugStatusCompleto",
    ],
};

async function validacaoCompleta() {
    console.log("\n🔍 FASE 1: VALIDAÇÃO DO NAMESPACE");
    console.log("-".repeat(50));

    // Verificar se namespace existe
    if (typeof window.SENT1_AUTO !== "object") {
        console.log(
            "❌ FALHA CRÍTICA: Namespace window.SENT1_AUTO não encontrado!"
        );
        return false;
    }

    console.log("✅ Namespace SENT1_AUTO encontrado");

    // Contar funções disponíveis
    const funcoesDisponiveis = Object.keys(window.SENT1_AUTO);
    console.log(
        `📊 Total de funções no namespace: ${funcoesDisponiveis.length}`
    );

    // Verificar cada categoria
    let totalEsperadas = 0;
    let totalEncontradas = 0;

    for (const [categoria, funcoes] of Object.entries(funcoesCriticas)) {
        console.log(`\n📂 ${categoria}:`);
        totalEsperadas += funcoes.length;

        let encontradasCategoria = 0;
        funcoes.forEach((funcao) => {
            const existe = typeof window.SENT1_AUTO[funcao] === "function";
            const status = existe ? "✅" : "❌";
            console.log(`   ${status} ${funcao}`);

            if (existe) {
                encontradasCategoria++;
                totalEncontradas++;
            }
        });

        const percentual = (
            (encontradasCategoria / funcoes.length) *
            100
        ).toFixed(1);
        console.log(
            `   📊 ${categoria}: ${encontradasCategoria}/${funcoes.length} (${percentual}%)`
        );
    }

    const percentualTotal = ((totalEncontradas / totalEsperadas) * 100).toFixed(
        1
    );
    console.log(
        `\n🎯 TOTAL GERAL: ${totalEncontradas}/${totalEsperadas} (${percentualTotal}%)`
    );

    // =============================================================================
    // 🧪 FASE 2: TESTE FUNCIONAL
    // =============================================================================

    console.log("\n🧪 FASE 2: TESTE FUNCIONAL");
    console.log("-".repeat(50));

    const resultadosTeste = {
        namespace: percentualTotal >= 90,
        diagnostico: false,
        correcao: false,
        icones: false,
        performance: false,
    };

    // Teste 1: Diagnóstico completo
    if (typeof window.SENT1_AUTO.diagnosticarCompleto === "function") {
        try {
            console.log("🔍 Testando diagnóstico completo...");
            const diagnostico = window.SENT1_AUTO.diagnosticarCompleto();

            if (diagnostico && typeof diagnostico === "object") {
                console.log("✅ Diagnóstico executado com sucesso");
                resultadosTeste.diagnostico = true;

                // Mostrar resumo do diagnóstico
                console.log("   📊 Resumo do diagnóstico:");
                if (diagnostico.funcionalidades) {
                    console.log(
                        `      - Data sessão: ${
                            diagnostico.funcionalidades.dataSessao?.detectada
                                ? "✅"
                                : "❌"
                        }`
                    );
                    console.log(
                        `      - Botão: ${
                            diagnostico.funcionalidades.botaoResumir?.existe
                                ? "✅"
                                : "❌"
                        }`
                    );
                    console.log(
                        `      - Ícones: ${
                            diagnostico.funcionalidades.substituicaoIcones
                                ?.aplicada
                                ? "✅"
                                : "❌"
                        }`
                    );
                }
            }
        } catch (error) {
            console.log("❌ Erro no diagnóstico:", error.message);
        }
    } else {
        console.log("❌ Função diagnosticarCompleto não disponível");
    }

    // Teste 2: Sistema de correção
    if (typeof window.SENT1_AUTO.corrigirProblemas === "function") {
        try {
            console.log("🔧 Testando sistema de correção...");
            const correcao = window.SENT1_AUTO.corrigirProblemas();

            if (correcao && typeof correcao === "object") {
                console.log("✅ Correção executada com sucesso");
                resultadosTeste.correcao = true;

                if (correcao.acoes && correcao.acoes.length > 0) {
                    console.log(
                        `   📊 ${correcao.acoes.length} ações de correção executadas`
                    );
                }
            }
        } catch (error) {
            console.log("❌ Erro na correção:", error.message);
        }
    } else {
        console.log("❌ Função corrigirProblemas não disponível");
    }

    // Teste 3: Diagnóstico de ícones
    if (typeof window.SENT1_AUTO.diagnosticarIconesCSS === "function") {
        try {
            console.log("🎨 Testando diagnóstico de ícones...");
            const diagnosticoIcones = window.SENT1_AUTO.diagnosticarIconesCSS();

            if (diagnosticoIcones && typeof diagnosticoIcones === "object") {
                console.log("✅ Diagnóstico de ícones executado");
                resultadosTeste.icones = true;

                console.log(
                    `   📊 GIF: ${diagnosticoIcones.iconesGIF || 0}, SVG: ${
                        diagnosticoIcones.iconesSVG || 0
                    }`
                );
            }
        } catch (error) {
            console.log("❌ Erro no diagnóstico de ícones:", error.message);
        }
    } else {
        console.log("❌ Função diagnosticarIconesCSS não disponível");
    }

    // Teste 4: Controle de performance
    if (typeof window.SENT1_AUTO.statusModoUltraPerformance === "function") {
        try {
            console.log("🔥 Testando controle de performance...");
            const status = window.SENT1_AUTO.statusModoUltraPerformance();
            console.log(
                `✅ Modo ultra-performance: ${status ? "ATIVO" : "INATIVO"}`
            );
            resultadosTeste.performance = true;
        } catch (error) {
            console.log("❌ Erro no controle de performance:", error.message);
        }
    } else {
        console.log("❌ Função statusModoUltraPerformance não disponível");
    }

    // =============================================================================
    // 🎯 FASE 3: VALIDAÇÃO DE ELEMENTOS DA PÁGINA
    // =============================================================================

    console.log("\n🎯 FASE 3: VALIDAÇÃO DE ELEMENTOS");
    console.log("-".repeat(50));

    // Verificar presença de botões
    const botoesIds = [
        "eprobe-btn",
        "documento-relevante-auto-button",
        "sent1-auto-button",
    ];
    const botoesEncontrados = botoesIds.filter(
        (id) => document.getElementById(id) !== null
    );

    console.log(
        `🔘 Botões encontrados: ${botoesEncontrados.length}/${botoesIds.length}`
    );
    botoesEncontrados.forEach((id) => console.log(`   ✅ ${id}`));

    // Verificar ícones substituídos
    const iconesSubstituidos = document.querySelectorAll(
        "[data-eprobe-icon-replaced]"
    );
    console.log(
        `🎨 Ícones substituídos: ${iconesSubstituidos.length} elementos`
    );

    // Verificar fieldset de ações
    const fieldsetAcoes = document.querySelector("#fldAcoes.infraFieldset");
    if (fieldsetAcoes) {
        const iconesGIF = fieldsetAcoes.querySelectorAll('img[src*=".gif"]');
        const iconesSVG = fieldsetAcoes.querySelectorAll("svg.lucide");
        console.log(
            `🎯 Fieldset ações: ${iconesGIF.length} GIF, ${iconesSVG.length} SVG`
        );
    } else {
        console.log(
            "ℹ️ Fieldset de ações não encontrado (normal em algumas páginas)"
        );
    }

    // =============================================================================
    // 📊 FASE 4: PONTUAÇÃO FINAL E RECOMENDAÇÕES
    // =============================================================================

    console.log("\n📊 FASE 4: AVALIAÇÃO FINAL");
    console.log("-".repeat(50));

    let pontuacaoFinal = 0;

    // Critérios de pontuação
    if (resultadosTeste.namespace) pontuacaoFinal += 30; // Namespace completo
    if (resultadosTeste.diagnostico) pontuacaoFinal += 20; // Diagnóstico funcionando
    if (resultadosTeste.correcao) pontuacaoFinal += 20; // Correção funcionando
    if (resultadosTeste.icones) pontuacaoFinal += 15; // Ícones funcionando
    if (resultadosTeste.performance) pontuacaoFinal += 10; // Performance funcionando
    if (botoesEncontrados.length > 0) pontuacaoFinal += 5; // Botões presentes

    console.log(`🏆 PONTUAÇÃO FINAL: ${pontuacaoFinal}/100`);

    // Determinar status
    let status, emoji, recomendacoes;

    if (pontuacaoFinal >= 90) {
        status = "EXCELENTE";
        emoji = "🎉";
        recomendacoes = [
            "Sistema funcionando perfeitamente!",
            "Todas as funcionalidades estão operacionais",
            "Pronto para uso em produção",
        ];
    } else if (pontuacaoFinal >= 75) {
        status = "BOM";
        emoji = "✅";
        recomendacoes = [
            "Sistema funcionando bem com pequenos ajustes",
            "Funcionalidades principais operacionais",
            "Considere executar correção automática",
        ];
    } else if (pontuacaoFinal >= 60) {
        status = "REGULAR";
        emoji = "⚠️";
        recomendacoes = [
            "Sistema parcialmente funcional",
            "Execute: window.SENT1_AUTO.corrigirProblemas()",
            "Recarregue a página se necessário",
        ];
    } else {
        status = "CRÍTICO";
        emoji = "❌";
        recomendacoes = [
            "Sistema com problemas graves",
            "Recarregue a página completamente",
            "Verifique se a extensão está carregada",
            "Execute diagnóstico manual",
        ];
    }

    console.log(`\n${emoji} STATUS: ${status}`);
    console.log("\n💡 RECOMENDAÇÕES:");
    recomendacoes.forEach((rec) => console.log(`   • ${rec}`));

    // =============================================================================
    // 🛠️ COMANDOS ÚTEIS
    // =============================================================================

    console.log("\n🛠️ COMANDOS ÚTEIS:");
    console.log("-".repeat(30));
    console.log("• Diagnóstico: window.SENT1_AUTO.diagnosticarCompleto()");
    console.log("• Correção: window.SENT1_AUTO.corrigirProblemas()");
    console.log("• Ícones: window.SENT1_AUTO.forcarReaplicacaoIcones()");
    console.log(
        "• Performance: window.SENT1_AUTO.statusModoUltraPerformance()"
    );
    console.log("• Debug: window.SENT1_AUTO.debugDeteccaoDataSessao()");

    console.log("\n" + "=".repeat(70));
    console.log(`🎯 VALIDAÇÃO COMPLETA: ${status} (${pontuacaoFinal}/100)`);
    console.log("=".repeat(70));

    return pontuacaoFinal >= 75;
}

// Executar validação
console.log("\n⏳ Iniciando validação completa...");
validacaoCompleta().then((sucesso) => {
    console.log(
        `\n🏁 RESULTADO FINAL: ${
            sucesso ? "APROVADO ✅" : "NECESSITA AJUSTES ⚠️"
        }`
    );
});
