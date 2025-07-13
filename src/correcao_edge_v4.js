// 🔧 CORREÇÃO ULTRA ROBUSTA PARA MICROSOFT EDGE - VERSÃO 4.0
// Esta versão resiste à remoção do namespace e se auto-restaura

console.log("🔧 CORREÇÃO EDGE v4.0: Versão ULTRA ROBUSTA iniciando...");

// 1. Função para criar namespace resistente à remoção
function criarNamespaceResistente() {
    console.log("🛡️ CRIANDO: Namespace resistente...");

    // Namespace com funcionalidades completas
    const namespace = {
        // Informações do sistema
        versao: "4.0-ultra-robusta",
        edge: true,
        criadoEm: Date.now(),

        // Status detalhado
        status: function () {
            console.log("📊 STATUS ULTRA ROBUSTA v4.0:");
            console.log(`   Versão: ${this.versao}`);
            console.log(
                `   Criado há: ${((Date.now() - this.criadoEm) / 1000).toFixed(
                    1
                )}s`
            );
            console.log(
                `   APIs extensão: ${
                    typeof chrome !== "undefined" && chrome.runtime
                        ? "DISPONÍVEIS"
                        : "NÃO DISPONÍVEIS"
                }`
            );
            console.log(
                `   Elementos: ${
                    document.querySelectorAll('[id*="eprobe"]').length
                }`
            );
            console.log(`   URL: ${window.location.href}`);
            return {
                versao: this.versao,
                idade: Date.now() - this.criadoEm,
                apis: typeof chrome !== "undefined" && chrome.runtime,
                elementos: document.querySelectorAll('[id*="eprobe"]').length,
            };
        },

        // Detecção robusta de data da sessão
        detectarDataSessao: function () {
            console.log("🔍 DETECTANDO: Data da sessão (versão robusta)...");

            try {
                const textoCompleto = document.body.innerText;
                console.log(
                    `📄 TEXTO: Analisando ${textoCompleto.length} caracteres`
                );

                // Padrões mais específicos para eProc
                const padroes = [
                    // Padrão 1: Data da sessão direta
                    /(?:data\s*da\s*sess[aã]o|sess[aã]o\s*(?:de|em|para)?)\s*:?\s*(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{4})/i,

                    // Padrão 2: Julgamento em data
                    /(?:julgamento\s*(?:em|para|:)|para\s*julgamento)\s*:?\s*(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{4})/i,

                    // Padrão 3: Pautado/marcado para data
                    /(?:pautado|agendar|agendado|marcado).*?(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{4})/i,

                    // Padrão 4: Incluído em pauta em data (específico eProc)
                    /incluído\s+em\s+pauta\s+em\s+(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{4})/i,

                    // Padrão 5: Qualquer data no formato brasileiro
                    /(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{4})/g,
                ];

                const datasEncontradas = [];

                for (let i = 0; i < padroes.length; i++) {
                    const padrao = padroes[i];
                    const matches = textoCompleto.match(padrao);

                    if (matches) {
                        if (i === 4) {
                            // Último padrão retorna todas as datas
                            // Pegar só as primeiras 5 datas para não sobrecarregar
                            for (
                                let j = 0;
                                j < Math.min(5, matches.length);
                                j++
                            ) {
                                datasEncontradas.push({
                                    data: matches[j],
                                    padrao: `Padrão ${i + 1} (posição ${
                                        j + 1
                                    })`,
                                    contexto: "data_generica",
                                });
                            }
                        } else {
                            datasEncontradas.push({
                                data: matches[1] || matches[0],
                                padrao: `Padrão ${i + 1}`,
                                contexto:
                                    i === 0
                                        ? "data_sessao"
                                        : i === 1
                                        ? "julgamento"
                                        : i === 2
                                        ? "pautado"
                                        : "incluido_pauta",
                            });
                        }
                    }
                }

                if (datasEncontradas.length > 0) {
                    console.log(
                        `✅ DATAS: ${datasEncontradas.length} datas encontradas:`
                    );
                    datasEncontradas.forEach((item, index) => {
                        console.log(
                            `   ${index + 1}. ${item.data} (${item.padrao} - ${
                                item.contexto
                            })`
                        );
                    });

                    // Retornar a primeira data mais específica (não genérica)
                    const dataEspecifica = datasEncontradas.find(
                        (d) => d.contexto !== "data_generica"
                    );
                    if (dataEspecifica) {
                        console.log(
                            `🎯 MELHOR MATCH: ${dataEspecifica.data} (${dataEspecifica.contexto})`
                        );
                        return dataEspecifica.data;
                    } else {
                        console.log(
                            `📅 USANDO GENÉRICA: ${datasEncontradas[0].data}`
                        );
                        return datasEncontradas[0].data;
                    }
                } else {
                    console.log(
                        "❌ NENHUMA DATA: Nenhuma data encontrada na página"
                    );
                    return null;
                }
            } catch (error) {
                console.error("❌ ERRO DETECÇÃO:", error);
                return null;
            }
        },

        // Automação completa
        runFullAutomation: function () {
            console.log("🤖 AUTOMAÇÃO ULTRA ROBUSTA: Iniciando...");

            try {
                // 1. Detectar data da sessão
                const dataSessao = this.detectarDataSessao();

                // 2. Verificar elementos da extensão
                const elementos = document.querySelectorAll('[id*="eprobe"]');

                // 3. Simular clique no botão se existir
                const botaoDataSessao =
                    document.getElementById("eprobe-data-sessao");

                console.log("📊 RESUMO DA AUTOMAÇÃO:");
                console.log(`   Data detectada: ${dataSessao || "Nenhuma"}`);
                console.log(`   Elementos encontrados: ${elementos.length}`);
                console.log(
                    `   Botão eProbe: ${
                        botaoDataSessao ? "Encontrado" : "Não encontrado"
                    }`
                );

                if (botaoDataSessao) {
                    console.log(
                        "🖱️ SIMULANDO: Clique no botão da data da sessão..."
                    );
                    botaoDataSessao.click();
                }

                if (dataSessao) {
                    console.log(
                        "📅 RESULTADO: Data da sessão detectada e processada"
                    );
                    return {
                        sucesso: true,
                        data: dataSessao,
                        elementos: elementos.length,
                        versao: "ultra-robusta",
                    };
                } else {
                    console.log("⚠️ RESULTADO: Nenhuma data encontrada");
                    return {
                        sucesso: false,
                        motivo: "sem_data_sessao",
                        elementos: elementos.length,
                        versao: "ultra-robusta",
                    };
                }
            } catch (error) {
                console.error("❌ ERRO AUTOMAÇÃO:", error);
                return {
                    sucesso: false,
                    erro: error.message,
                    versao: "ultra-robusta",
                };
            }
        },

        // Função de ajuda expandida
        ajuda: function () {
            console.log("📚 COMANDOS ULTRA ROBUSTOS v4.0:");
            console.log("   window.SENT1_AUTO.status() - Status detalhado");
            console.log(
                "   window.SENT1_AUTO.detectarDataSessao() - Detectar datas"
            );
            console.log(
                "   window.SENT1_AUTO.runFullAutomation() - Automação completa"
            );
            console.log(
                "   window.SENT1_AUTO.testePagina() - Testar página atual"
            );
            console.log(
                "   window.SENT1_AUTO.restaurar() - Auto-restaurar se removido"
            );
            console.log(
                "   window.SENT1_AUTO.habilitarRequisicoes() - Habilitar requisições automáticas"
            );
            console.log(
                "   window.SENT1_AUTO.desabilitarRequisicoes() - Desabilitar requisições automáticas"
            );
            console.log(
                "   window.SENT1_AUTO.statusRequisicoes() - Status das requisições"
            );
            console.log("   window.SENT1_AUTO.ajuda() - Esta ajuda");
            console.log("");
            console.log("🔧 CARACTERÍSTICAS:");
            console.log("   ✅ Resistente à remoção");
            console.log("   ✅ Auto-restauração");
            console.log("   ✅ Detecção robusta de datas");
            console.log("   ✅ Controle de requisições automáticas");
            console.log("   ✅ Compatível com Edge");
        },

        // Teste da página atual
        testePagina: function () {
            console.log("🧪 TESTANDO: Página atual...");

            const isEproc = window.location.href.includes("eproc");
            const temElementos =
                document.querySelectorAll('[id*="eprobe"]').length > 0;
            const textoSize = document.body.innerText.length;

            console.log(`   É página eProc: ${isEproc}`);
            console.log(`   Tem elementos eProbe: ${temElementos}`);
            console.log(`   Tamanho do texto: ${textoSize} caracteres`);

            if (isEproc && temElementos) {
                console.log("✅ PÁGINA: Ideal para usar a extensão");
                console.log(
                    "🎯 SUGESTÃO: Execute window.SENT1_AUTO.runFullAutomation()"
                );
            } else if (isEproc && !temElementos) {
                console.log("⚠️ PÁGINA: eProc mas sem elementos da extensão");
                console.log("🔧 SUGESTÃO: Recarregue a extensão");
            } else {
                console.log("❌ PÁGINA: Não é ideal para a extensão");
            }

            return { eproc: isEproc, elementos: temElementos, textoSize };
        },

        // Função de auto-restauração
        restaurar: function () {
            console.log("🔄 RESTAURANDO: Namespace ultra robusta...");
            // Re-executar a criação
            criarNamespaceUltraRobusta();
            return "Namespace restaurado!";
        },

        // Habilitar requisições automáticas
        habilitarRequisicoes: function () {
            console.log("🔓 HABILITANDO: Requisições automáticas...");

            try {
                // Tentar habilitar através do storage da extensão
                if (typeof chrome !== "undefined" && chrome.storage) {
                    chrome.storage.sync.set(
                        { "auto-session-requests": true },
                        () => {
                            console.log(
                                "✅ STORAGE: Requisições habilitadas no storage"
                            );
                        }
                    );
                }

                // Simular clique no switch se existir
                const switchRequisicoes = document.querySelector(
                    '[data-config="auto-session-requests"]'
                );
                if (switchRequisicoes && !switchRequisicoes.checked) {
                    switchRequisicoes.click();
                    console.log(
                        "✅ SWITCH: Clique simulado no switch de requisições"
                    );
                }

                // Verificar se existe a função global da extensão
                if (
                    typeof window.SENT1_AUTO_ORIGINAL !== "undefined" &&
                    typeof window.SENT1_AUTO_ORIGINAL.habilitarRequisicoes ===
                        "function"
                ) {
                    window.SENT1_AUTO_ORIGINAL.habilitarRequisicoes();
                    console.log("✅ ORIGINAL: Função original chamada");
                }

                console.log(
                    "🎯 RESULTADO: Tentativa de habilitar requisições automáticas concluída"
                );
                console.log(
                    "💡 DICA: Se não funcionou, tente recarregar a página ou extensão"
                );

                return {
                    sucesso: true,
                    metodos: ["storage", "switch", "funcao_original"],
                    versao: "ultra-robusta",
                };
            } catch (error) {
                console.error("❌ ERRO HABILITAÇÃO:", error);
                return {
                    sucesso: false,
                    erro: error.message,
                    versao: "ultra-robusta",
                };
            }
        },

        // Desabilitar requisições automáticas
        desabilitarRequisicoes: function () {
            console.log("🔒 DESABILITANDO: Requisições automáticas...");

            try {
                // Tentar desabilitar através do storage da extensão
                if (typeof chrome !== "undefined" && chrome.storage) {
                    chrome.storage.sync.set(
                        { "auto-session-requests": false },
                        () => {
                            console.log(
                                "✅ STORAGE: Requisições desabilitadas no storage"
                            );
                        }
                    );
                }

                // Simular clique no switch se existir
                const switchRequisicoes = document.querySelector(
                    '[data-config="auto-session-requests"]'
                );
                if (switchRequisicoes && switchRequisicoes.checked) {
                    switchRequisicoes.click();
                    console.log(
                        "✅ SWITCH: Clique simulado no switch de requisições"
                    );
                }

                console.log(
                    "🎯 RESULTADO: Requisições automáticas desabilitadas"
                );

                return {
                    sucesso: true,
                    acao: "desabilitado",
                    versao: "ultra-robusta",
                };
            } catch (error) {
                console.error("❌ ERRO DESABILITAÇÃO:", error);
                return {
                    sucesso: false,
                    erro: error.message,
                    versao: "ultra-robusta",
                };
            }
        },

        // Status das requisições
        statusRequisicoes: function () {
            console.log("📊 STATUS: Verificando requisições automáticas...");

            try {
                const switchRequisicoes = document.querySelector(
                    '[data-config="auto-session-requests"]'
                );
                const statusSwitch = switchRequisicoes
                    ? switchRequisicoes.checked
                    : "não encontrado";

                console.log(
                    `   Switch encontrado: ${switchRequisicoes ? "SIM" : "NÃO"}`
                );
                console.log(`   Status do switch: ${statusSwitch}`);

                // Verificar storage se disponível
                if (typeof chrome !== "undefined" && chrome.storage) {
                    chrome.storage.sync.get(
                        ["auto-session-requests"],
                        (result) => {
                            console.log(
                                `   Storage: ${
                                    result["auto-session-requests"]
                                        ? "HABILITADO"
                                        : "DESABILITADO"
                                }`
                            );
                        }
                    );
                }

                return {
                    switch_encontrado: !!switchRequisicoes,
                    switch_status: statusSwitch,
                    versao: "ultra-robusta",
                };
            } catch (error) {
                console.error("❌ ERRO STATUS:", error);
                return {
                    sucesso: false,
                    erro: error.message,
                    versao: "ultra-robusta",
                };
            }
        },
    };

    return namespace;
}

// 2. Função principal de criação ultra robusta
function criarNamespaceUltraRobusta() {
    try {
        // Criar namespace
        const novoNamespace = criarNamespaceResistente();

        // Verificar se SENT1_AUTO já existe
        if (typeof window.SENT1_AUTO !== "undefined") {
            console.log("� ATUALIZANDO: Namespace existente...");

            // Tentar deletar propriedade existente primeiro
            try {
                delete window.SENT1_AUTO;
                console.log("🗑️ REMOVIDO: Namespace anterior deletado");
            } catch (deleteError) {
                console.log(
                    "⚠️ AVISO: Não foi possível deletar namespace anterior"
                );
                // Se não conseguir deletar, sobrescrever diretamente
                try {
                    window.SENT1_AUTO = novoNamespace;
                    console.log(
                        "✅ SOBRESCRITO: Namespace atualizado diretamente"
                    );
                    window.SENT1_AUTO_BACKUP = novoNamespace;
                    return true;
                } catch (overwriteError) {
                    console.log("⚠️ FALLBACK: Usando backup como alternativa");
                    window.SENT1_AUTO_BACKUP = novoNamespace;
                    // Usar backup como namespace principal
                    window.SENT1_AUTO_ULTRA = novoNamespace;
                    console.log(
                        "✅ CRIADO: window.SENT1_AUTO_ULTRA como alternativa"
                    );
                    return true;
                }
            }
        }

        // Definir namespace com proteção (se não existia antes)
        try {
            Object.defineProperty(window, "SENT1_AUTO", {
                value: novoNamespace,
                writable: true, // Mudança: permitir escrita para atualizações futuras
                enumerable: true,
                configurable: true, // Mudança: permitir reconfiguração
            });
            console.log("✅ DEFINIDO: Com Object.defineProperty");
        } catch (defineError) {
            // Fallback: atribuição direta
            window.SENT1_AUTO = novoNamespace;
            console.log("✅ FALLBACK: Atribuição direta");
        }

        // Criar backup em outra variável
        window.SENT1_AUTO_BACKUP = novoNamespace;

        console.log("✅ NAMESPACE: Ultra robusta v4.0 criado!");
        console.log("🛡️ PROTEÇÃO: Configurada (flexível para atualizações)");
        console.log("📦 BACKUP: Criado em window.SENT1_AUTO_BACKUP");

        return true;
    } catch (error) {
        console.error("❌ ERRO CRÍTICO:", error);

        // Último recurso: criar namespace alternativo
        try {
            const novoNamespace = criarNamespaceResistente();
            window.SENT1_AUTO_ULTRA = novoNamespace;
            window.SENT1_AUTO_BACKUP = novoNamespace;
            console.log("🚨 EMERGÊNCIA: Criado window.SENT1_AUTO_ULTRA");
            console.log(
                "💡 USE: window.SENT1_AUTO_ULTRA ao invés de window.SENT1_AUTO"
            );
            return true;
        } catch (emergencyError) {
            console.error("💥 FALHA TOTAL:", emergencyError);
            return false;
        }
    }
}

// 3. Sistema de monitoramento e auto-restauração
function iniciarMonitoramento() {
    console.log("👀 MONITOR: Iniciando sistema de vigilância...");

    let verificacoes = 0;

    const intervalo = setInterval(() => {
        verificacoes++;

        // Verificar se namespace principal ainda existe
        const namespaceExiste = typeof window.SENT1_AUTO !== "undefined";
        const namespaceUltraExiste =
            typeof window.SENT1_AUTO_ULTRA !== "undefined";
        const backupExiste = typeof window.SENT1_AUTO_BACKUP !== "undefined";

        if (!namespaceExiste && !namespaceUltraExiste) {
            console.log("🚨 ALERTA: Namespace removido! Restaurando...");

            // Tentar restaurar do backup
            if (backupExiste) {
                try {
                    window.SENT1_AUTO = window.SENT1_AUTO_BACKUP;
                    console.log("✅ RESTAURADO: window.SENT1_AUTO do backup");
                } catch (restoreError) {
                    window.SENT1_AUTO_ULTRA = window.SENT1_AUTO_BACKUP;
                    console.log(
                        "✅ RESTAURADO: window.SENT1_AUTO_ULTRA do backup"
                    );
                }
            } else {
                // Recriar completamente
                console.log("🔄 RECRIANDO: Namespace completamente...");
                criarNamespaceUltraRobusta();
            }
        }

        // Log de status a cada 30 segundos
        if (verificacoes % 30 === 0) {
            console.log(
                `⏰ MONITOR: ${verificacoes}s - SENT1_AUTO: ${
                    namespaceExiste ? "✅" : "❌"
                }, ULTRA: ${namespaceUltraExiste ? "✅" : "❌"}`
            );
        }

        // Parar após 2 minutos
        if (verificacoes >= 120) {
            clearInterval(intervalo);
            console.log("⏰ MONITOR: Finalizado após 2 minutos");
            console.log(
                `📊 FINAL - SENT1_AUTO: ${
                    typeof window.SENT1_AUTO !== "undefined" ? "✅" : "❌"
                }`
            );
            console.log(
                `📊 FINAL - SENT1_AUTO_ULTRA: ${
                    typeof window.SENT1_AUTO_ULTRA !== "undefined" ? "✅" : "❌"
                }`
            );
        }
    }, 1000); // Verificar a cada segundo

    console.log("✅ MONITOR: Sistema ativo (verifica a cada 1s por 2 minutos)");
}

// 4. Executar criação ultra robusta
console.log("🚀 INICIANDO: Criação ultra robusta...");

const sucesso = criarNamespaceUltraRobusta();

if (sucesso) {
    console.log("🎉 SUCESSO: Namespace ultra robusta v4.0 ativo!");

    // Verificar qual namespace está disponível
    if (typeof window.SENT1_AUTO !== "undefined") {
        console.log("✅ PRINCIPAL: window.SENT1_AUTO disponível");
        console.log("🧪 TESTE: window.SENT1_AUTO.status()");
        console.log("📚 AJUDA: window.SENT1_AUTO.ajuda()");
    } else if (typeof window.SENT1_AUTO_ULTRA !== "undefined") {
        console.log("✅ ALTERNATIVO: window.SENT1_AUTO_ULTRA disponível");
        console.log("🧪 TESTE: window.SENT1_AUTO_ULTRA.status()");
        console.log("📚 AJUDA: window.SENT1_AUTO_ULTRA.ajuda()");
        console.log("💡 DICA: Use SENT1_AUTO_ULTRA ao invés de SENT1_AUTO");
    }

    // Iniciar monitoramento
    iniciarMonitoramento();

    // Teste automático
    setTimeout(() => {
        console.log("🧪 TESTE AUTOMÁTICO: Verificando funcionalidades...");
        if (typeof window.SENT1_AUTO !== "undefined") {
            window.SENT1_AUTO.testePagina();
        } else if (typeof window.SENT1_AUTO_ULTRA !== "undefined") {
            window.SENT1_AUTO_ULTRA.testePagina();
        }
    }, 2000);
} else {
    console.log("❌ FALHA: Não foi possível criar namespace ultra robusta");
    console.log(
        "🔍 VERIFICAR: Talvez window.SENT1_AUTO_BACKUP esteja disponível"
    );
}

console.log("⭐ CORREÇÃO v4.0: Ultra robusta carregada!");
console.log("📋 NAMESPACES DISPONÍVEIS:");
console.log(
    `   window.SENT1_AUTO: ${
        typeof window.SENT1_AUTO !== "undefined" ? "✅ SIM" : "❌ NÃO"
    }`
);
console.log(
    `   window.SENT1_AUTO_ULTRA: ${
        typeof window.SENT1_AUTO_ULTRA !== "undefined" ? "✅ SIM" : "❌ NÃO"
    }`
);
console.log(
    `   window.SENT1_AUTO_BACKUP: ${
        typeof window.SENT1_AUTO_BACKUP !== "undefined" ? "✅ SIM" : "❌ NÃO"
    }`
);
