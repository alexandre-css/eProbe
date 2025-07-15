// Teste específico para o botão "Resumir Documento" - Margin-right
// Execute este script no console da página eProc para diagnosticar o problema

console.log("🧪 TESTE ESPECÍFICO: Botão Resumir Documento - Margin-right");

function testarBotaoResumirDocumento() {
    // Procurar o botão pelo ID
    const botao = document.querySelector("#documento-relevante-auto-button");

    if (!botao) {
        console.log(
            "❌ Botão 'Resumir Documento' não encontrado com ID #documento-relevante-auto-button"
        );
        return;
    }

    console.log("✅ Botão 'Resumir Documento' encontrado:", botao);

    // Verificar o SVG dentro do botão
    const svg = botao.querySelector("svg");

    if (!svg) {
        console.log("❌ SVG não encontrado dentro do botão");
        return;
    }

    console.log("✅ SVG encontrado:", svg);

    // Verificar o margin-right atual
    const computedStyle = window.getComputedStyle(svg);
    const marginRight = computedStyle.getPropertyValue("margin-right");

    console.log("📏 Margin-right computado:", marginRight);
    console.log("📏 Style attribute:", svg.getAttribute("style"));

    // Verificar se as regras CSS eProbe estão sendo aplicadas
    const styleSheets = Array.from(document.styleSheets);
    let regraEncontrada = false;

    styleSheets.forEach((sheet) => {
        try {
            const rules = Array.from(sheet.cssRules || sheet.rules || []);
            rules.forEach((rule) => {
                if (
                    rule.selectorText &&
                    rule.selectorText.includes(
                        "#documento-relevante-auto-button svg"
                    )
                ) {
                    console.log("✅ Regra CSS encontrada:", rule.selectorText);
                    console.log("  - CSS Text:", rule.cssText);
                    regraEncontrada = true;
                }
            });
        } catch (e) {
            // CSS cross-origin, ignorar
        }
    });

    if (!regraEncontrada) {
        console.log("❌ Nenhuma regra CSS específica encontrada para o botão");
    }

    // Verificar se há conflitos de especificidade
    console.log("\n🔍 DIAGNÓSTICO DE ESPECIFICIDADE:");

    // Aplicar margin-right diretamente para teste
    svg.style.setProperty("margin-right", "4px", "important");
    console.log("🧪 Aplicado margin-right: 4px !important via JavaScript");

    // Verificar novamente após aplicação
    setTimeout(() => {
        const novoMarginRight = window
            .getComputedStyle(svg)
            .getPropertyValue("margin-right");
        console.log("📏 Margin-right após aplicação forçada:", novoMarginRight);

        if (novoMarginRight === "4px") {
            console.log("✅ SUCCESS: Margin-right aplicado com sucesso!");
        } else {
            console.log("❌ FAILED: Margin-right ainda não está correto");
            console.log("🔍 Investigando possíveis conflitos...");

            // Verificar todos os estilos aplicados
            const allStyles = window.getComputedStyle(svg);
            console.log("📊 Todos os estilos computados do SVG:", {
                marginRight: allStyles.marginRight,
                marginLeft: allStyles.marginLeft,
                margin: allStyles.margin,
                display: allStyles.display,
                verticalAlign: allStyles.verticalAlign,
            });
        }
    }, 100);
}

// Função para forçar correção se necessário - VERSÃO UNSET HÍBRIDA
function forcarCorrecaoMargin() {
    console.log("🔧 FORÇANDO CORREÇÃO DO MARGIN-RIGHT COM UNSET...");

    const botao = document.querySelector("#documento-relevante-auto-button");
    if (botao) {
        const svg = botao.querySelector("svg");
        if (svg) {
            // ABORDAGEM UNSET: Limpar primeiro, depois aplicar
            console.log("🧪 Aplicando abordagem UNSET híbrida...");

            svg.style.setProperty("margin", "unset", "important");
            svg.style.setProperty("margin-right", "4px", "important");

            // Aplicar via cssText com unset
            svg.style.cssText =
                "margin: unset !important; margin-right: 4px !important; vertical-align: middle;";

            // Backup via setAttribute
            svg.setAttribute(
                "style",
                "margin: unset !important; margin-right: 4px !important; vertical-align: middle;"
            );

            // Verificar se funcionou
            setTimeout(() => {
                const verificacao = window.getComputedStyle(svg).marginRight;
                console.log(
                    "✅ Verificação final (UNSET):",
                    verificacao === "4px" ? "SUCCESS" : "FAILED"
                );

                if (verificacao !== "4px") {
                    console.log("📊 Diagnóstico pós-UNSET:", {
                        marginComputed: verificacao,
                        marginStyle: svg.style.marginRight,
                        fullStyle: svg.getAttribute("style"),
                    });
                }
            }, 50);
        }
    }
}

// Função adicional para testar apenas UNSET
function testarApenasUnset() {
    console.log("🧪 TESTANDO APENAS UNSET (sem valor específico)...");

    const botao = document.querySelector("#documento-relevante-auto-button");
    if (botao) {
        const svg = botao.querySelector("svg");
        if (svg) {
            // Aplicar apenas unset para ver o valor inicial
            svg.style.setProperty("margin", "unset", "important");

            setTimeout(() => {
                const marginAposUnset =
                    window.getComputedStyle(svg).marginRight;
                console.log(
                    "📏 Margin-right após UNSET puro:",
                    marginAposUnset
                );
                console.log("💡 Este é o valor inicial/padrão do elemento");
            }, 50);
        }
    }
}

// Executar teste
testarBotaoResumirDocumento();

// Disponibilizar funções de correção
window.forcarCorrecaoMargin = forcarCorrecaoMargin;
window.testarApenasUnset = testarApenasUnset;
console.log(
    "💡 Para forçar correção com UNSET, execute: forcarCorrecaoMargin()"
);
console.log("💡 Para testar apenas UNSET, execute: testarApenasUnset()");
console.log("💡 Para forçar correção, execute: forcarCorrecaoMargin()");
