// 🚨 COMANDO DE EMERGÊNCIA - COPIE E COLE NO CONSOLE DO NAVEGADOR
// Use este comando para parar o loop IMEDIATAMENTE

console.log("🛑 PARANDO LOOPS IMEDIATAMENTE...");

// Parar todos os timeouts e intervals ativos
for (let i = 1; i < 10000; i++) {
    clearTimeout(i);
    clearInterval(i);
}

// Substituir funções que causam loop por versões vazias
if (typeof window.SENT1_AUTO === "object" && window.SENT1_AUTO) {
    window.SENT1_AUTO.detectarDataSessao = function () {
        console.log("🔧 FUNÇÃO DESABILITADA: detectarDataSessao");
        return null;
    };

    window.SENT1_AUTO.detectarCardSessaoSimplificado = function () {
        console.log("🔧 FUNÇÃO DESABILITADA: detectarCardSessaoSimplificado");
        return null;
    };

    window.SENT1_AUTO.detectarEConfigurarTooltipUnificado = function () {
        console.log(
            "🔧 FUNÇÃO DESABILITADA: detectarEConfigurarTooltipUnificado"
        );
        return null;
    };

    window.SENT1_AUTO.obterNumeroProcesso = function () {
        console.log("🔧 FUNÇÃO DESABILITADA: obterNumeroProcesso");
        return null;
    };
}

// Parar possíveis execuções diretas
window.detectarDataSessao = function () {
    return null;
};
window.detectarCardSessaoSimplificado = function () {
    return null;
};
window.detectarEConfigurarTooltipUnificado = function () {
    return null;
};
window.obterNumeroProcesso = function () {
    return null;
};

console.log(
    "✅ LOOP PARADO! Todas as funções problemáticas foram desabilitadas."
);
console.log("🔄 RECARREGUE A PÁGINA para voltar ao funcionamento normal.");
