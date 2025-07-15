/* 🔧 DIAGNÓSTICO E CORREÇÃO IMEDIATA - eProbe
 * Execute este script no console para diagnosticar e corrigir problemas
 */

console.log("🔧 DIAGNÓSTICO: Verificando problemas do eProbe");
console.log("=".repeat(60));

function diagnosticarECorrigirEprobe() {
    let problemas = [];
    let correcoes = [];

    try {
        // 1. Verificar se extensão está carregada
        if (typeof window.SENT1_AUTO === "undefined") {
            problemas.push("❌ Namespace SENT1_AUTO não encontrado");
            return { problemas, correcoes };
        }

        console.log("✅ DIAGNÓSTICO: Namespace SENT1_AUTO encontrado");

        // 2. Verificar modo ultra-performance
        if (
            typeof window.SENT1_AUTO.statusModoUltraPerformance === "function"
        ) {
            const modoUltraAtivo =
                window.SENT1_AUTO.statusModoUltraPerformance();
            if (modoUltraAtivo) {
                problemas.push(
                    "⚠️ MODO ULTRA-PERFORMANCE ATIVO - bloqueando funções"
                );
                console.log(
                    "🔧 CORREÇÃO: Desativando modo ultra-performance..."
                );
                window.SENT1_AUTO.desativarModoUltraPerformance();
                correcoes.push("✅ Modo ultra-performance desativado");
            } else {
                console.log(
                    "✅ DIAGNÓSTICO: Modo ultra-performance está inativo"
                );
            }
        }

        // 3. Verificar substituição de ícones
        console.log("\n🎨 DIAGNÓSTICO: Verificando substituição de ícones...");
        const fieldsetAcoes = document.querySelector("#fldAcoes.infraFieldset");
        if (fieldsetAcoes) {
            console.log("✅ DIAGNÓSTICO: Fieldset de ações encontrado");

            // Procurar por ícones antigos (GIF)
            const iconesGIF =
                fieldsetAcoes.querySelectorAll('img[src*=".gif"]');
            const iconesSVG = fieldsetAcoes.querySelectorAll("svg.lucide");

            console.log(
                `📊 DIAGNÓSTICO: ${iconesGIF.length} ícones GIF encontrados, ${iconesSVG.length} ícones SVG encontrados`
            );

            if (iconesGIF.length > 0 && iconesSVG.length === 0) {
                problemas.push(
                    `⚠️ ${iconesGIF.length} ícones não foram substituídos`
                );

                if (
                    typeof window.SENT1_AUTO.forcarReaplicacaoIcones ===
                    "function"
                ) {
                    console.log(
                        "🔧 CORREÇÃO: Forçando substituição de ícones..."
                    );
                    window.SENT1_AUTO.forcarReaplicacaoIcones();
                    correcoes.push("✅ Substituição de ícones forçada");
                } else {
                    problemas.push(
                        "❌ Função de substituição de ícones não encontrada"
                    );
                }
            } else if (iconesSVG.length > 0) {
                console.log("✅ DIAGNÓSTICO: Ícones SVG já aplicados");
            }
        } else {
            console.log(
                "ℹ️ DIAGNÓSTICO: Fieldset de ações não encontrado (normal em algumas páginas)"
            );
        }

        // 4. Verificar botão "Resumir Documento"
        console.log("\n📄 DIAGNÓSTICO: Verificando botão Resumir Documento...");
        const botaoResumir =
            document.getElementById("documento-relevante-auto-button") ||
            document.getElementById("sent1-auto-button");

        if (!botaoResumir) {
            problemas.push("❌ Botão 'Resumir Documento' não encontrado");

            // Tentar forçar criação do botão
            if (typeof window.SENT1_AUTO.forceCreateButton === "function") {
                console.log("🔧 CORREÇÃO: Forçando criação do botão...");
                window.SENT1_AUTO.forceCreateButton();
                correcoes.push("✅ Criação de botão forçada");
            } else {
                console.log(
                    "⚠️ DIAGNÓSTICO: Função de criação forçada não encontrada"
                );
                // Tentar método alternativo
                if (typeof ensureButtonExists === "function") {
                    console.log("🔧 CORREÇÃO: Tentando método alternativo...");
                    ensureButtonExists();
                    correcoes.push(
                        "✅ Método alternativo de criação executado"
                    );
                }
            }
        } else {
            console.log("✅ DIAGNÓSTICO: Botão 'Resumir Documento' encontrado");
        }

        // 5. Verificar se há links de documentos relevantes na página
        console.log("\n🔍 DIAGNÓSTICO: Verificando documentos relevantes...");
        const linksDocumentos = document.querySelectorAll(
            '[href*="acessar_documento"]'
        );
        const linksSENT = document.querySelectorAll('[href*="SENT"]');
        const linksINIC = document.querySelectorAll('[href*="INIC"]');

        console.log(
            `📊 DIAGNÓSTICO: ${linksDocumentos.length} links de documento, ${linksSENT.length} SENT, ${linksINIC.length} INIC`
        );

        if (linksDocumentos.length === 0) {
            console.log(
                "ℹ️ DIAGNÓSTICO: Nenhum documento relevante encontrado (normal em páginas de lista)"
            );
        }

        // 6. Executar correções imediatas
        console.log("\n🔧 CORREÇÃO: Executando inicializações...");

        // Forçar substituição de ícones se necessário
        if (
            typeof window.SENT1_AUTO.inicializarSubstituicaoIcones ===
            "function"
        ) {
            console.log("🔧 CORREÇÃO: Executando inicialização de ícones...");
            window.SENT1_AUTO.inicializarSubstituicaoIcones();
            correcoes.push("✅ Inicialização de ícones executada");
        }

        // Aguardar e verificar novamente
        setTimeout(() => {
            console.log("\n🔄 VERIFICAÇÃO PÓS-CORREÇÃO:");
            const iconesGIFApos = fieldsetAcoes
                ? fieldsetAcoes.querySelectorAll('img[src*=".gif"]').length
                : 0;
            const iconesSVGApos = fieldsetAcoes
                ? fieldsetAcoes.querySelectorAll("svg.lucide").length
                : 0;
            const botaoResumir =
                document.getElementById("documento-relevante-auto-button") ||
                document.getElementById("sent1-auto-button");

            console.log(
                `📊 RESULTADO: ${iconesGIFApos} ícones GIF, ${iconesSVGApos} ícones SVG`
            );
            console.log(
                `📄 RESULTADO: Botão Resumir ${
                    botaoResumir ? "ENCONTRADO" : "NÃO ENCONTRADO"
                }`
            );
        }, 2000);
    } catch (error) {
        problemas.push(`❌ Erro durante diagnóstico: ${error.message}`);
        console.error("❌ ERRO:", error);
    }

    return { problemas, correcoes };
}

// Executar diagnóstico
const resultado = diagnosticarECorrigirEprobe();

console.log("\n" + "=".repeat(60));
console.log("📋 RESUMO DO DIAGNÓSTICO:");

if (resultado.problemas.length > 0) {
    console.log("\n❌ PROBLEMAS ENCONTRADOS:");
    resultado.problemas.forEach((problema) => console.log(`  ${problema}`));
}

if (resultado.correcoes.length > 0) {
    console.log("\n✅ CORREÇÕES APLICADAS:");
    resultado.correcoes.forEach((correcao) => console.log(`  ${correcao}`));
}

if (resultado.problemas.length === 0) {
    console.log("🎉 TUDO FUNCIONANDO CORRETAMENTE!");
} else {
    console.log("\n💡 PRÓXIMOS PASSOS:");
    console.log("1. Aguarde 2-3 segundos para verificação pós-correção");
    console.log("2. Recarregue a página se problemas persistirem");
    console.log("3. Execute este diagnóstico novamente");
}

console.log("\n🔧 COMANDOS ÚTEIS:");
console.log(
    "• Status ultra-performance: window.SENT1_AUTO.statusModoUltraPerformance()"
);
console.log("• Forçar ícones: window.SENT1_AUTO.forcarReaplicacaoIcones()");
console.log("• Diagnóstico ícones: window.SENT1_AUTO.diagnosticarIconesCSS()");
console.log(
    "• Executar este diagnóstico novamente: Execute este script novamente"
);

console.log("\n🏁 DIAGNÓSTICO FINALIZADO");
