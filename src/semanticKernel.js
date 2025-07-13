/**
 * eProbe Semantic Kernel - Módulo Experimental
 * Implementação controlada para testes iniciais
 * Foco: Detecção inteligente de datas de sessão
 */

(function () {
    "use strict";

    // 🧠 CONFIGURAÇÃO EXPERIMENTAL DO SEMANTIC KERNEL
    class eProbeSemanticKernel {
        constructor() {
            this.isEnabled = false;
            this.testMode = true;
            this.fallbackToRegex = true;
            this.apiKey = null;
            this.requestCount = 0;
            this.maxRequests = 5; // Limite para testes

            console.log(
                "🧠 SEMANTIC KERNEL: Módulo inicializado em modo experimental"
            );
        }

        // 🔧 CONFIGURAÇÃO E INICIALIZAÇÃO
        async initialize() {
            console.log("🧠 SEMANTIC KERNEL: Tentando inicializar...");

            try {
                // Verificar se há API key configurada
                this.apiKey = await this.getApiKey();
                if (!this.apiKey) {
                    console.log(
                        "⚠️ SEMANTIC KERNEL: API Key não encontrada - usando modo fallback"
                    );
                    return false;
                }

                this.isEnabled = true;
                console.log("✅ SEMANTIC KERNEL: Inicializado com sucesso");
                return true;
            } catch (error) {
                console.error(
                    "❌ SEMANTIC KERNEL: Erro na inicialização:",
                    error
                );
                return false;
            }
        }

        async getApiKey() {
            // Reutilizar a mesma API key do eProbe
            if (typeof window.SENT1_AUTO?.getStoredApiKey === "function") {
                return await window.SENT1_AUTO.getStoredApiKey();
            }
            return null;
        }

        // 🎯 FUNÇÃO PRINCIPAL: Detecção Inteligente de Datas
        async detectarDataSessaoIA(textoCompleto) {
            if (!this.isEnabled || this.requestCount >= this.maxRequests) {
                console.log(
                    "🧠 SEMANTIC KERNEL: Usando fallback (regex tradicional)"
                );
                return await this.fallbackDetection(textoCompleto);
            }

            console.log(
                "🧠 SEMANTIC KERNEL: Iniciando detecção inteligente de data da sessão"
            );
            this.requestCount++;

            try {
                const prompt = this.createDateDetectionPrompt(textoCompleto);
                const response = await this.callOpenAI(prompt);
                const resultado = this.parseResponse(response);

                if (resultado && resultado.dataEncontrada) {
                    console.log(
                        `✅ SEMANTIC KERNEL: Data detectada via IA: ${resultado.dataEncontrada}`
                    );
                    return {
                        dataEncontrada: resultado.dataEncontrada,
                        confianca: resultado.confianca || 0.8,
                        contexto: resultado.contexto || "",
                        metodo: "semantic-kernel",
                    };
                } else {
                    console.log(
                        "⚠️ SEMANTIC KERNEL: IA não encontrou data, usando fallback"
                    );
                    return await this.fallbackDetection(textoCompleto);
                }
            } catch (error) {
                console.error(
                    "❌ SEMANTIC KERNEL: Erro na detecção IA:",
                    error
                );
                return await this.fallbackDetection(textoCompleto);
            }
        }

        // 📝 CRIAÇÃO DO PROMPT ESPECIALIZADO
        createDateDetectionPrompt(textoCompleto) {
            // Limitar o texto para evitar custos excessivos
            const textoLimitado = textoCompleto.substring(0, 2000);

            return `Você é um especialista em documentos jurídicos brasileiros do sistema eProc/TJSC.

TAREFA: Encontrar a data da sessão de julgamento no texto fornecido.

CONTEXTO: O texto vem de uma página do eProc que pode conter informações sobre quando um processo foi pautado para julgamento.

PADRÕES TÍPICOS A PROCURAR:
- "Data da sessão: DD/MM/AAAA"
- "Sessão de julgamento em DD/MM/AAAA"
- "Julgamento para DD/MM/AAAA"
- "Pautado em DD/MM/AAAA"
- "Agendado para DD/MM/AAAA"

FORMATO DE RESPOSTA OBRIGATÓRIO (JSON):
{
  "dataEncontrada": "DD/MM/AAAA ou null",
  "confianca": 0.0-1.0,
  "contexto": "texto ao redor da data encontrada",
  "explicacao": "por que esta data foi escolhida"
}

REGRAS:
1. Apenas datas no formato brasileiro DD/MM/AAAA
2. Apenas datas entre 2020 e 2030
3. Se não encontrar com certeza, retorne dataEncontrada: null
4. Priorize datas relacionadas a sessões/julgamentos
5. Ignore datas de protocolo, autuação ou outras não relacionadas a julgamento

TEXTO PARA ANÁLISE:
${textoLimitado}

RESPOSTA (apenas JSON válido):`;
        }

        // 🔗 CHAMADA PARA OPENAI API
        async callOpenAI(prompt) {
            const response = await fetch(
                "https://api.openai.com/v1/chat/completions",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${this.apiKey}`,
                    },
                    body: JSON.stringify({
                        model: "gpt-3.5-turbo",
                        messages: [
                            {
                                role: "user",
                                content: prompt,
                            },
                        ],
                        max_tokens: 200,
                        temperature: 0.1, // Baixa temperatura para respostas mais consistentes
                        response_format: { type: "json_object" },
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(
                    `API Error: ${response.status} ${response.statusText}`
                );
            }

            const data = await response.json();
            return data.choices[0].message.content;
        }

        // 📊 PARSE DA RESPOSTA DA IA
        parseResponse(responseText) {
            try {
                const response = JSON.parse(responseText);

                // Validar estrutura da resposta
                if (typeof response === "object" && response !== null) {
                    return {
                        dataEncontrada: response.dataEncontrada || null,
                        confianca: parseFloat(response.confianca) || 0.5,
                        contexto: response.contexto || "",
                        explicacao: response.explicacao || "",
                    };
                }

                return null;
            } catch (error) {
                console.error(
                    "❌ SEMANTIC KERNEL: Erro ao fazer parse da resposta:",
                    error
                );
                return null;
            }
        }

        // 🔄 FALLBACK PARA REGEX TRADICIONAL
        async fallbackDetection(textoCompleto) {
            console.log(
                "🔄 SEMANTIC KERNEL: Executando detecção via regex (fallback)"
            );

            // Usar os mesmos padrões do sistema atual
            const padroes = [
                /(?:data\s*da\s*sess[aã]o|sess[aã]o\s*(?:de|em|para|:)?)\s*:?\s*(\d{1,2}\/\d{1,2}\/\d{4})/i,
                /(?:julgamento\s*(?:em|para|:)|para\s*julgamento)\s*:?\s*(\d{1,2}\/\d{1,2}\/\d{4})/i,
                /(?:pautado|agendar|agendado|marcado).*?(\d{1,2}\/\d{1,2}\/\d{4})/i,
            ];

            for (const padrao of padroes) {
                const match = textoCompleto.match(padrao);
                if (match) {
                    return {
                        dataEncontrada: match[1],
                        confianca: 0.7,
                        contexto: match[0],
                        metodo: "regex-fallback",
                    };
                }
            }

            return null;
        }

        // 📈 FUNÇÕES DE MONITORAMENTO E DEBUG
        getStats() {
            return {
                enabled: this.isEnabled,
                requestCount: this.requestCount,
                maxRequests: this.maxRequests,
                requestsRemaining: this.maxRequests - this.requestCount,
                testMode: this.testMode,
                fallbackEnabled: this.fallbackToRegex,
            };
        }

        reset() {
            this.requestCount = 0;
            console.log("🔄 SEMANTIC KERNEL: Contador de requisições resetado");
        }

        disable() {
            this.isEnabled = false;
            console.log("🚫 SEMANTIC KERNEL: Desabilitado");
        }

        enable() {
            this.isEnabled = true;
            console.log("✅ SEMANTIC KERNEL: Habilitado");
        }
    }

    // 🌍 INSTÂNCIA GLOBAL DO SEMANTIC KERNEL
    window.eProbeSemanticKernel = new eProbeSemanticKernel();

    // 🔗 INTEGRAÇÃO COM O SISTEMA EXISTENTE
    // Função melhorada que usa IA + fallback
    async function detectarDataSessaoComIA() {
        console.log("🧠 INICIANDO: Detecção de data da sessão com IA");

        const sk = window.eProbeSemanticKernel;

        // Verificar se o Semantic Kernel está disponível
        if (!sk.isEnabled) {
            await sk.initialize();
        }

        // Obter texto da página
        const textoCompleto = document.body.innerText;

        try {
            // Tentar detecção com IA
            const resultado = await sk.detectarDataSessaoIA(textoCompleto);

            if (resultado && resultado.dataEncontrada) {
                // Validar a data usando a função existente
                if (
                    typeof window.SENT1_AUTO?.validarDataBrasileira ===
                    "function"
                ) {
                    const dataValidada =
                        window.SENT1_AUTO.validarDataBrasileira(
                            resultado.dataEncontrada
                        );

                    if (dataValidada) {
                        console.log(
                            `✅ IA + VALIDAÇÃO: Data validada: ${dataValidada.dataFormatada}`
                        );
                        console.log(
                            `📊 IA: Método: ${resultado.metodo}, Confiança: ${resultado.confianca}`
                        );

                        return {
                            ...dataValidada,
                            metodoDeteccao: resultado.metodo,
                            confiancaIA: resultado.confianca,
                            contexto: resultado.contexto,
                        };
                    }
                }
            }

            console.log(
                "⚠️ IA: Não encontrou data válida, usando sistema original"
            );
            return null;
        } catch (error) {
            console.error("❌ IA: Erro na detecção:", error);
            return null;
        }
    }

    // 🚀 EXPOSIÇÃO DAS FUNÇÕES EXPERIMENTAIS
    if (window.SENT1_AUTO) {
        // Adicionar funções experimentais ao namespace
        window.SENT1_AUTO.experimental = {
            detectarDataSessaoComIA: detectarDataSessaoComIA,
            semanticKernel: window.eProbeSemanticKernel,

            // Função para testar o sistema
            async testarIA() {
                console.log("🧪 TESTE: Iniciando teste do Semantic Kernel");

                const sk = window.eProbeSemanticKernel;
                console.log("📊 Stats:", sk.getStats());

                const resultado = await detectarDataSessaoComIA();

                if (resultado) {
                    console.log("✅ TESTE: Sucesso!", resultado);
                    alert(
                        `Teste do Semantic Kernel:\n\n✅ Sucesso!\nData: ${
                            resultado.dataFormatada
                        }\nMétodo: ${resultado.metodoDeteccao}\nConfiança: ${
                            resultado.confiancaIA || "N/A"
                        }`
                    );
                } else {
                    console.log("❌ TESTE: Nenhuma data encontrada");
                    alert(
                        "Teste do Semantic Kernel:\n\n❌ Nenhuma data encontrada\n\nVerifique se há informações de sessão na página atual."
                    );
                }

                console.log("📊 Stats finais:", sk.getStats());
                return resultado;
            },

            // Função para habilitar/desabilitar
            toggleIA(enable) {
                const sk = window.eProbeSemanticKernel;
                if (enable) {
                    sk.enable();
                } else {
                    sk.disable();
                }
                console.log(`🔧 IA ${enable ? "habilitada" : "desabilitada"}`);
            },

            // Função para ver estatísticas
            statsIA() {
                const stats = window.eProbeSemanticKernel.getStats();
                console.log("📊 SEMANTIC KERNEL STATS:", stats);
                alert(
                    `Estatísticas do Semantic Kernel:\n\n• Habilitado: ${
                        stats.enabled ? "Sim" : "Não"
                    }\n• Requisições usadas: ${stats.requestCount}/${
                        stats.maxRequests
                    }\n• Restantes: ${stats.requestsRemaining}\n• Modo teste: ${
                        stats.testMode ? "Sim" : "Não"
                    }\n• Fallback: ${stats.fallbackEnabled ? "Sim" : "Não"}`
                );
                return stats;
            },
        };

        console.log(
            "🧠 SEMANTIC KERNEL: Funcionalidades experimentais adicionadas ao namespace SENT1_AUTO.experimental"
        );
        console.log(
            "🧪 Para testar: window.SENT1_AUTO.experimental.testarIA()"
        );
    }
})();
