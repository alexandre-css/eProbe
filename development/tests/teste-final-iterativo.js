// =============================================================================
// 🎯 TESTE FINAL ITERATIVO - VALIDAÇÃO COMPLETA DO SISTEMA eProbe
// =============================================================================
//
// Este é o teste final que valida todas as melhorias implementadas:
// ✅ Diagnóstico completo
// ✅ Correção automática
// ✅ Funções de reaplicação de ícones
// ✅ Verificação robusta de botões
// ✅ Sistema de inicialização
//
// EXECUTE APÓS CARREGAR UMA PÁGINA DO ePROC
// =============================================================================

console.clear();
console.log("🎯 TESTE FINAL ITERATIVO - Sistema eProbe v2.0");
console.log("=".repeat(60));
console.log("⏰ Timestamp:", new Date().toLocaleString("pt-BR"));
console.log("🌐 URL:", window.location.href);

async function testeCompleto() {
    console.log("\n🔄 INICIANDO TESTE COMPLETO...\n");

    // FASE 1: Verificar disponibilidade das funções
    console.log("📦 FASE 1: Verificando namespace e funções");
    console.log("-".repeat(40));

    const funcoesCriticas = [
        "diagnosticarCompleto",
        "corrigirProblemas",
        "forcarReaplicacaoIcones",
        "inicializarSubstituicaoIcones",
        "diagnosticarIconesCSS",
        "statusModoUltraPerformance",
        "ensureButtonExists",
    ];

    let funcoesDisponiveis = 0;
    funcoesCriticas.forEach((funcao) => {
        const disponivel = typeof window.SENT1_AUTO?.[funcao] === "function";
        const status = disponivel ? "✅" : "❌";
        console.log(
            `${status} ${funcao}: ${disponivel ? "DISPONÍVEL" : "INDISPONÍVEL"}`
        );
        if (disponivel) funcoesDisponiveis++;
    });

    const percentualDisponibilidade = (
        (funcoesDisponiveis / funcoesCriticas.length) *
        100
    ).toFixed(1);
    console.log(
        `\n📊 Disponibilidade: ${funcoesDisponiveis}/${funcoesCriticas.length} (${percentualDisponibilidade}%)`
    );

    if (funcoesDisponiveis < funcoesCriticas.length) {
        console.log("❌ FALHA: Nem todas as funções estão disponíveis");
        return false;
    }

    // FASE 2: Verificar modo ultra-performance
    console.log("\n🔥 FASE 2: Verificando modo ultra-performance");
    console.log("-".repeat(40));

    const modoUltraAtivo = window.SENT1_AUTO.statusModoUltraPerformance();
    console.log(
        `Modo ultra-performance: ${modoUltraAtivo ? "🔴 ATIVO" : "🟢 INATIVO"}`
    );

    if (modoUltraAtivo) {
        console.log("⚠️ Desativando modo ultra-performance para testes...");
        window.SENT1_AUTO.desativarModoUltraPerformance();
    }

    // FASE 3: Executar diagnóstico completo
    console.log("\n🔍 FASE 3: Executando diagnóstico completo");
    console.log("-".repeat(40));

    let diagnostico;
    try {
        diagnostico = window.SENT1_AUTO.diagnosticarCompleto();
        console.log("✅ Diagnóstico executado com sucesso");

        // Analisar resultados do diagnóstico
        console.log("\n📋 Resultados do diagnóstico:");
        console.log(
            `   📅 Data da sessão: ${
                diagnostico.funcionalidades.dataSessao.detectada ? "✅" : "❌"
            }`
        );
        console.log(
            `   🔘 Botão resumir: ${
                diagnostico.funcionalidades.botaoResumir.existe ? "✅" : "❌"
            } (ID: ${diagnostico.funcionalidades.botaoResumir.id || "nenhum"})`
        );
        console.log(
            `   🎨 Ícones substituídos: ${
                diagnostico.funcionalidades.substituicaoIcones.aplicada
                    ? "✅"
                    : "❌"
            } (${
                diagnostico.funcionalidades.substituicaoIcones.quantidade
            } elementos)`
        );
        console.log(
            `   🎨 Sistema de temas: ${
                diagnostico.funcionalidades.sistemaTheme.aplicado ? "✅" : "❌"
            }`
        );
    } catch (error) {
        console.error("❌ Erro no diagnóstico:", error);
        return false;
    }

    // FASE 4: Executar diagnóstico específico de ícones CSS
    console.log("\n🎨 FASE 4: Diagnóstico específico de ícones");
    console.log("-".repeat(40));

    try {
        const diagnosticoIcones = window.SENT1_AUTO.diagnosticarIconesCSS();
        console.log("✅ Diagnóstico de ícones executado");

        console.log(
            `   🖼️ Ícones GIF encontrados: ${diagnosticoIcones.iconesGIF}`
        );
        console.log(
            `   🎯 Ícones SVG encontrados: ${diagnosticoIcones.iconesSVG}`
        );
        console.log(
            `   ✅ Ícones substituídos: ${diagnosticoIcones.iconesSubstituidos}`
        );
        console.log(`   ⚠️ Problemas: ${diagnosticoIcones.problemas.length}`);

        if (diagnosticoIcones.problemas.length > 0) {
            console.log("   📝 Problemas detectados:");
            diagnosticoIcones.problemas.forEach((problema) =>
                console.log(`      • ${problema}`)
            );
        }
    } catch (error) {
        console.error("❌ Erro no diagnóstico de ícones:", error);
    }

    // FASE 5: Executar correção automática
    console.log("\n🔧 FASE 5: Executando correção automática");
    console.log("-".repeat(40));

    try {
        const resultadoCorrecao = window.SENT1_AUTO.corrigirProblemas();
        console.log("✅ Correção automática executada");

        if (resultadoCorrecao.acoes.length > 0) {
            console.log("   📝 Ações executadas:");
            resultadoCorrecao.acoes.forEach((acao) => {
                const status = acao.sucesso
                    ? "✅"
                    : acao.status === "Erro"
                    ? "❌"
                    : "⚠️";
                console.log(`      ${status} ${acao.acao}: ${acao.status}`);
            });
        } else {
            console.log("   ℹ️ Nenhuma correção necessária");
        }
    } catch (error) {
        console.error("❌ Erro na correção:", error);
    }

    // FASE 6: Forçar reaplicação de ícones se necessário
    console.log("\n🔄 FASE 6: Testando reaplicação de ícones");
    console.log("-".repeat(40));

    const fieldsetAcoes = document.querySelector("#fldAcoes.infraFieldset");
    if (fieldsetAcoes) {
        const iconesGIF = fieldsetAcoes.querySelectorAll('img[src*=".gif"]');
        const iconesSVG = fieldsetAcoes.querySelectorAll("svg.lucide");

        console.log(
            `   📊 Estado atual: ${iconesGIF.length} GIF, ${iconesSVG.length} SVG`
        );

        if (iconesGIF.length > 0) {
            console.log("   🔄 Executando reaplicação forçada...");
            try {
                const resultadoReaplicacao =
                    window.SENT1_AUTO.forcarReaplicacaoIcones();
                console.log(
                    "   ✅ Reaplicação executada:",
                    resultadoReaplicacao
                );
            } catch (error) {
                console.error("   ❌ Erro na reaplicação:", error);
            }
        } else {
            console.log("   ✅ Ícones já aplicados corretamente");
        }
    } else {
        console.log(
            "   ℹ️ Fieldset de ações não encontrado (normal em algumas páginas)"
        );
    }

    // FASE 7: Aguardar e verificar resultados finais
    console.log("\n⏳ FASE 7: Aguardando e verificando resultados finais...");
    console.log("-".repeat(40));

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("🎯 VERIFICAÇÃO FINAL:");

            // Verificar botão final
            const botaoFinal =
                document.getElementById("eprobe-btn") ||
                document.getElementById("documento-relevante-auto-button") ||
                document.getElementById("sent1-auto-button");
            console.log(
                `   🔘 Botão presente: ${botaoFinal ? "✅ SIM" : "❌ NÃO"} ${
                    botaoFinal ? `(ID: ${botaoFinal.id})` : ""
                }`
            );

            // Verificar ícones final
            const iconesSubstituidosFinal = document.querySelectorAll(
                "[data-eprobe-icon-replaced]"
            ).length;
            console.log(
                `   🎨 Ícones substituídos: ${iconesSubstituidosFinal} elementos`
            );

            // Verificar namespace final
            const namespaceFinal =
                typeof window.SENT1_AUTO === "object" &&
                Object.keys(window.SENT1_AUTO).length > 0;
            console.log(
                `   📦 Namespace: ${
                    namespaceFinal ? "✅ FUNCIONANDO" : "❌ PROBLEMA"
                }`
            );

            // Calcular score final
            let pontuacao = 0;
            if (botaoFinal) pontuacao += 25;
            if (iconesSubstituidosFinal > 0) pontuacao += 25;
            if (namespaceFinal) pontuacao += 25;
            if (funcoesDisponiveis === funcoesCriticas.length) pontuacao += 25;

            console.log(`\n🏆 PONTUAÇÃO FINAL: ${pontuacao}/100`);

            if (pontuacao >= 90) {
                console.log("🎉 EXCELENTE: Sistema funcionando perfeitamente!");
            } else if (pontuacao >= 70) {
                console.log(
                    "✅ BOM: Sistema funcionando com pequenos problemas"
                );
            } else if (pontuacao >= 50) {
                console.log("⚠️ REGULAR: Sistema funcionando parcialmente");
            } else {
                console.log("❌ CRÍTICO: Sistema com problemas graves");
            }

            resolve(pontuacao >= 70);
        }, 2000);
    });
}

// Executar teste
testeCompleto().then((sucesso) => {
    console.log("\n" + "=".repeat(60));
    console.log(`🎯 TESTE FINAL: ${sucesso ? "APROVADO ✅" : "REPROVADO ❌"}`);
    console.log("=".repeat(60));
});

console.log("\n⏳ Executando teste completo... aguarde os resultados...");
