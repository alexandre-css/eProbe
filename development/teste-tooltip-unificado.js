/**
 * 🧪 TESTE COMPLETO DO SISTEMA UNIFICADO DE TOOLTIP
 * Script para testar o novo sistema de tooltip unificado no eProbe
 */

console.log("🧪 INICIANDO TESTE DO SISTEMA TOOLTIP UNIFICADO");

// Aguardar o carregamento completo da extensão
setTimeout(() => {
    if (typeof window.SENT1_AUTO === "undefined") {
        console.error("❌ ERRO: Namespace SENT1_AUTO não encontrado!");
        return;
    }

    console.log("✅ Namespace SENT1_AUTO encontrado");
    console.log("📊 Total de funções:", Object.keys(window.SENT1_AUTO).length);

    // Verificar se as funções unificadas estão disponíveis
    const funcoesUnificadas = [
        "detectarEConfigurarTooltipUnificado",
        "configurarTooltipPorTipo",
        "criarCardComTooltipIntegrado",
        "testarSistemaTooltipUnificado",
    ];

    console.log("🔍 VERIFICANDO FUNÇÕES UNIFICADAS:");
    funcoesUnificadas.forEach((funcao) => {
        const existe = typeof window.SENT1_AUTO[funcao] === "function";
        console.log(
            `  ${existe ? "✅" : "❌"} ${funcao}: ${
                existe ? "DISPONÍVEL" : "NÃO ENCONTRADA"
            }`
        );
    });

    // Executar teste completo se todas as funções estão disponíveis
    const todasDisponíveis = funcoesUnificadas.every(
        (funcao) => typeof window.SENT1_AUTO[funcao] === "function"
    );

    if (todasDisponíveis) {
        console.log("🚀 EXECUTANDO TESTE COMPLETO DO SISTEMA UNIFICADO");

        try {
            const resultado = window.SENT1_AUTO.testarSistemaTooltipUnificado();
            console.log("🎯 RESULTADO DO TESTE:", resultado);

            if (resultado.deteccao) {
                console.log(
                    "✅ SISTEMA FUNCIONANDO: Detecção e tooltip configurados com sucesso!"
                );
            } else {
                console.log(
                    "ℹ️ SEM DADOS: Nenhuma sessão detectada na página atual"
                );
            }
        } catch (error) {
            console.error("❌ ERRO NO TESTE:", error);
        }
    } else {
        console.error(
            "❌ ERRO: Algumas funções unificadas não estão disponíveis"
        );
    }
}, 2000);

// Função para testar manualmente (pode ser chamada no console)
window.testarTooltipManual = function () {
    console.log("🔧 TESTE MANUAL: Executando teste do tooltip");

    if (window.SENT1_AUTO && window.SENT1_AUTO.testarSistemaTooltipUnificado) {
        return window.SENT1_AUTO.testarSistemaTooltipUnificado();
    } else {
        console.error("❌ Função de teste não encontrada");
        return null;
    }
};

console.log(
    "💡 DICA: Execute window.testarTooltipManual() no console para testar manualmente"
);
