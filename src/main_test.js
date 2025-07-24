// main_test.js - Versão simplificada para teste
const logCritical = console.log.bind(console);
const logError = console.error.bind(console);
const log = console.log.bind(console);

(async function () {
    try {
        logCritical("🚀 IIFE: Iniciando execução da IIFE principal");

        // 2.5. FUNÇÃO DEBOUNCE GLOBAL PARA PERFORMANCE
        window.debounce = (func, delay) => {
            let timeoutId;
            const debounced = function (...args) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => func.apply(this, args), delay);
            };
            debounced.cancel = () => {
                clearTimeout(timeoutId);
            };
            return debounced;
        };

        // 🔧 AGUARDAR APIS DE EXTENSÃO (SIMULADO)
        function aguardarAPIsExtensao() {
            return new Promise((resolve) => {
                // Simular aguarda sem APIs reais
                setTimeout(resolve, 10);
            });
        }

        await aguardarAPIsExtensao();

        // FUNÇÕES AUXILIARES
        function traduzirStatusSessao(statusCompleto) {
            if (!statusCompleto)
                return { status: "Desconhecido", cor: "#6B7280" };

            const statusUpper = statusCompleto.toUpperCase();
            const mapeamentoStatus = {
                "INCLUÍDO EM PAUTA": { status: "PAUTADO", cor: "#5C85B4" },
                "JULGADO EM PAUTA": { status: "JULGADO", cor: "#3AB795" },
                "RETIRADO DE PAUTA": { status: "RETIRADO", cor: "#CE2D4F" },
                "PEDIDO DE VISTA": { status: "VISTA", cor: "#FFBF46" },
                ADIADO: { status: "ADIADO", cor: "#F55D3E" },
                SOBRESTADO: { status: "SOBRESTADO", cor: "#FCB0B3" },
            };

            for (const [key, value] of Object.entries(mapeamentoStatus)) {
                if (statusUpper.includes(key)) {
                    return value;
                }
            }
            return { status: statusCompleto, cor: "#6B7280" };
        }

        function extrairDadosCardSessaoGlobal(texto) {
            log(
                "🔍 EXTRAÇÃO NOVA: Analisando tooltip:",
                texto.substring(0, 200)
            );

            const padraoGeral =
                /(\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([^-]+?)\s*-\s*([^(]+?)\s*\((\d+)\)/g;
            const sessoes = [];
            let match;

            while ((match = padraoGeral.exec(texto)) !== null) {
                const data = match[1];
                const statusOriginal = match[2].trim();
                const documento = match[3].trim();
                const codigo = match[4];
                const statusTraduzido = traduzirStatusSessao(statusOriginal);

                log(
                    `📅 SESSÃO: ${data} - ${statusOriginal} → ${statusTraduzido.status}`
                );

                sessoes.push({
                    data: data,
                    statusOriginal: statusOriginal,
                    status: statusTraduzido.status,
                    statusCompleto: statusTraduzido.statusCompleto,
                    documento: documento,
                    codigo: codigo,
                    cor: statusTraduzido.cor,
                });
            }

            if (sessoes.length === 0) {
                return null;
            }

            const sessaoMaisRecente = sessoes[0];
            log(
                `📊 EXTRAÇÃO: ${sessoes.length} sessões encontradas, usando mais recente`
            );

            const dadosSessao = {
                status: sessaoMaisRecente.status,
                statusCompleto: sessaoMaisRecente.statusCompleto,
                statusOriginal: sessaoMaisRecente.statusOriginal,
                tipoProcesso: sessaoMaisRecente.documento,
                data: sessaoMaisRecente.data,
                codigo: sessaoMaisRecente.codigo,
                cor: sessaoMaisRecente.cor,
                textoOriginal: `${sessaoMaisRecente.data} - ${sessaoMaisRecente.statusOriginal} - ${sessaoMaisRecente.documento} (${sessaoMaisRecente.codigo})`,
                timestamp: new Date().toISOString(),
                todasSessoes: sessoes,
                totalSessoes: sessoes.length,
            };

            log(
                "✅ EXTRAÇÃO NOVA: Dados extraídos da sessão mais recente:",
                dadosSessao
            );
            return dadosSessao;
        }

        // NAMESPACE SIMPLIFICADO
        const eProbeNamespaceFunctions = {
            // 🚀 AUTOMAÇÃO PRINCIPAL
            runFullAutomation: () => log("runFullAutomation simulado"),
            autoOpenDocumentoRelevante: () =>
                log("autoOpenDocumentoRelevante simulado"),
            autoExtractText: () => log("autoExtractText simulado"),

            // 📅 DETECÇÃO DE DATA DE SESSÃO
            detectarDataSessao: () => log("detectarDataSessao simulado"),
            extrairDadosCardSessaoGlobal,
            traduzirStatusSessao,

            // 🔧 DEBUG E TESTES
            debugTextoMinutas: () => log("debugTextoMinutas simulado"),
            testarSistemaCompleto: () => log("testarSistemaCompleto simulado"),
            testarDeteccaoRobusta: () => log("testarDeteccaoRobusta simulado"),
            diagnosticarEstruturaDOMMinutas: () =>
                log("diagnosticarEstruturaDOMMinutas simulado"),

            // 🎨 INTERFACE
            criarCardSessaoMaterial: () =>
                log("criarCardSessaoMaterial simulado"),
            detectarCardSessaoSimplificado: () =>
                log("detectarCardSessaoSimplificado simulado"),

            // 📊 VERSÃO E INFO
            versao: "1.0.0-teste-simplificado",
            status: "funcionando",
            totalFuncoes: 0,
        };

        // Contar funções
        eProbeNamespaceFunctions.totalFuncoes = Object.keys(
            eProbeNamespaceFunctions
        ).filter(
            (k) => typeof eProbeNamespaceFunctions[k] === "function"
        ).length;

        // EXPOSIÇÃO GLOBAL DO NAMESPACE
        window.SENT1_AUTO = eProbeNamespaceFunctions;

        logCritical(
            "✅ eProbe Extension carregada com sucesso - Sistema simplificado inicializado!"
        );

        // TESTE IMEDIATO
        setTimeout(() => {
            try {
                if (typeof window.SENT1_AUTO === "object") {
                    const funcoesCriticas = [
                        "extrairDadosCardSessaoGlobal",
                        "traduzirStatusSessao",
                        "testarDeteccaoRobusta",
                    ];
                    const resultados = funcoesCriticas.map((nome) => {
                        const existe =
                            typeof window.SENT1_AUTO[nome] === "function";
                        return `${existe ? "✅" : "❌"} ${nome}: ${
                            existe ? "OK" : "AUSENTE"
                        }`;
                    });

                    logCritical("🔍 TESTE NAMESPACE IMEDIATO:");
                    resultados.forEach((r) => logCritical(`  ${r}`));
                    logCritical(
                        `📊 Total de funções: ${window.SENT1_AUTO.totalFuncoes}`
                    );
                    logCritical(`🎯 Versão: ${window.SENT1_AUTO.versao}`);

                    if (resultados.every((r) => r.includes("✅"))) {
                        logCritical(
                            "🎉 SUCESSO: Todas as funções críticas estão disponíveis!"
                        );
                    } else {
                        console.error(
                            "❌ PROBLEMA: Algumas funções estão ausentes no namespace"
                        );
                    }
                } else {
                    console.error(
                        "❌ CRÍTICO: window.SENT1_AUTO não foi criado!"
                    );
                }
            } catch (error) {
                console.error("❌ ERRO no teste de namespace:", error);
            }
        }, 100);

        // SUCESSO
        logCritical(
            "✅ IIFE: Execução completada com sucesso - criando namespace simplificado"
        );
    } catch (error) {
        logError("💥 IIFE: ERRO CRÍTICO durante execução:", error);
        logError("📍 ERRO em:", error.stack);
        throw error;
    }
})();
