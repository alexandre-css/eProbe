// Teste de verificação do margin-right nos botões eProbe (VERSÃO ATUALIZADA)
// Este script verifica se o CSS está sendo aplicado corretamente COM TEMAS FUNCIONANDO

console.log(
    "🧪 Teste de CSS - Verificação margin-right dos botões eProbe (Versão Balanceada)"
);
console.log(
    "📝 Agora os temas devem funcionar nos botões + margin-right deve ser preservado"
);

// Função para testar os estilos
function testarMarginBotoes() {
    const botoes = ["#documento-relevante-auto-button", "#sent1-auto-button"];

    botoes.forEach((seletor) => {
        const botao = document.querySelector(seletor);
        if (botao) {
            // Testar se o botão tem estilos de tema aplicados
            const botaoStyle = window.getComputedStyle(botao);
            console.log(
                `🎨 ${seletor} background-color: ${botaoStyle.backgroundColor}`
            );
            console.log(`🎨 ${seletor} color: ${botaoStyle.color}`);

            const svg = botao.querySelector("svg");
            if (svg) {
                const style = window.getComputedStyle(svg);
                const marginRight = style.getPropertyValue("margin-right");
                console.log(`📏 ${seletor} SVG margin-right: ${marginRight}`);

                if (marginRight === "4px") {
                    console.log(
                        `✅ ${seletor}: Margin-right aplicado corretamente!`
                    );
                } else {
                    console.log(
                        `❌ ${seletor}: Margin-right falhou. Esperado: 4px, Encontrado: ${marginRight}`
                    );
                }
            } else {
                console.log(`⚠️ ${seletor}: SVG não encontrado no botão`);
            }
        } else {
            console.log(`⚠️ ${seletor}: Botão não encontrado`);
        }
    });
}

// Executar teste
testarMarginBotoes();

// Testar se os botões eProbe estão sendo estilizados pelos temas (NOVA ABORDAGEM)
function testarAplicacaoTemas() {
    console.log(
        "\n🎨 Verificando se os temas estão sendo aplicados aos botões eProbe..."
    );

    const testSelector =
        ".bootstrap-styles .infraButton:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *)";

    const elementos = document.querySelectorAll(testSelector);
    const botaoDoc = document.querySelector("#documento-relevante-auto-button");
    const botaoSent = document.querySelector("#sent1-auto-button");

    let documentoIncluido = false;
    let sent1Incluido = false;

    elementos.forEach((el) => {
        if (el === botaoDoc) documentoIncluido = true;
        if (el === botaoSent) sent1Incluido = true;
    });

    if (documentoIncluido && sent1Incluido) {
        console.log(
            "✅ Temas funcionando: Botões eProbe estão sendo estilizados pelos seletores CSS"
        );
    } else {
        console.log(
            "❌ Temas não funcionando: Botões eProbe não estão sendo estilizados pelos seletores CSS"
        );
        if (!documentoIncluido)
            console.log(
                "  - #documento-relevante-auto-button não está sendo estilizado"
            );
        if (!sent1Incluido)
            console.log("  - #sent1-auto-button não está sendo estilizado");
    }
}

// Executar teste de aplicação de temas
testarAplicacaoTemas();

// Verificar se existe o CSS específico para os botões eProbe
function verificarCssEspecifico() {
    console.log("\n🎯 Verificando CSS específico para botões eProbe...");

    const styles = document.querySelectorAll('style[id*="eprobe"]');
    let cssEncontrado = false;

    styles.forEach((style) => {
        if (
            style.textContent.includes("#documento-relevante-auto-button") ||
            style.textContent.includes("#sent1-auto-button")
        ) {
            cssEncontrado = true;
            console.log("✅ CSS específico encontrado para botões eProbe");
        }
    });

    if (!cssEncontrado) {
        console.log("❌ CSS específico não encontrado para botões eProbe");
    }
}

// Executar verificação de CSS específico
verificarCssEspecifico();

console.log("\n🏁 Teste concluído!");
