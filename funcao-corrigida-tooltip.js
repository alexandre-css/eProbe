// 🚨 VERSÃO CORRIGIDA DA FUNÇÃO QUE CAUSA LOOP
// Substituição segura para detectarEConfigurarTooltipUnificado

// Esta função substitui temporariamente a versão problemática
function detectarEConfigurarTooltipUnificado_SEGURA() {
    console.log("🔍 TOOLTIP SEGURO: Iniciando detecção sem loops");

    try {
        // XPath direto sem chamadas recursivas
        const xpath =
            "/html/body/div[2]/div[3]/div[2]/div/div[1]/form[2]/div[3]/div/div/fieldset[6]/div/div[2]/div/fieldset/legend/span[1]";
        const resultado = document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        );

        if (!resultado.singleNodeValue) {
            console.log("ℹ️ TOOLTIP: Elemento não encontrado via XPath");
            return null;
        }

        const elemento = resultado.singleNodeValue;
        const textoCompleto = elemento.textContent || elemento.innerText || "";

        if (!textoCompleto.trim()) {
            console.log("ℹ️ TOOLTIP: Elemento encontrado mas sem texto");
            return null;
        }

        console.log(`📝 TOOLTIP: Texto detectado: "${textoCompleto}"`);

        // Detecção simples de múltiplas sessões
        const padraoMultiplasSessoes = /\b\d{1,2}\/\d{1,2}\/\d{4}\b/g;
        const datasEncontradas = textoCompleto.match(padraoMultiplasSessoes);

        let dadosProcessados = null;

        if (datasEncontradas && datasEncontradas.length > 1) {
            console.log(
                `🎯 TOOLTIP: Múltiplas sessões detectadas (${datasEncontradas.length})`
            );

            dadosProcessados = {
                tipo: "multiplas_sessoes",
                totalSessoes: datasEncontradas.length,
                datas: datasEncontradas,
                textoCompleto: textoCompleto,
                temTooltip: true,
                tooltipTipo: "rico",
                statusPrincipal: "Múltiplas Sessões",
                dataFormatada: `${datasEncontradas.length} sessões`,
            };
        } else if (datasEncontradas && datasEncontradas.length === 1) {
            const dataUnica = datasEncontradas[0];
            console.log(`📅 TOOLTIP: Sessão única detectada: ${dataUnica}`);

            dadosProcessados = {
                tipo: "sessao_unica",
                totalSessoes: 1,
                datas: [dataUnica],
                textoCompleto: textoCompleto,
                temTooltip: true,
                tooltipTipo: "simples",
                statusPrincipal: "Pautado",
                dataFormatada: dataUnica,
            };
        } else {
            console.log("ℹ️ TOOLTIP: Nenhuma data de sessão válida encontrada");
            return null;
        }

        console.log("✅ TOOLTIP: Detecção segura concluída:", dadosProcessados);
        return dadosProcessados;
    } catch (error) {
        console.error("❌ TOOLTIP: Erro na detecção segura:", error);
        return null;
    }
}

// Substituir função problemática se existir
if (typeof window.SENT1_AUTO === "object" && window.SENT1_AUTO) {
    window.SENT1_AUTO.detectarEConfigurarTooltipUnificado =
        detectarEConfigurarTooltipUnificado_SEGURA;
    console.log(
        "✅ CORREÇÃO: Função problemática substituída por versão segura"
    );
}

console.log("🔧 CORREÇÃO: Arquivo de correção carregado com sucesso");
