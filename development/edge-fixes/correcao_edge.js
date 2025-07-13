// 🔧 CORREÇÃO ESPECÍFICA PARA MICROSOFT EDGE
// Execute este script no console para corrigir o problema do namespace

console.log("🔧 CORREÇÃO EDGE: Aplicando correção para Microsoft Edge...");

// 1. Aguardar APIs de extensão ficarem disponíveis
function aguardarAPIsExtensao() {
    return new Promise((resolve) => {
        let tentativas = 0;
        const maxTentativas = 50; // 5 segundos máximo

        function verificar() {
            tentativas++;

            // Verificar se chrome.runtime está disponível
            if (
                typeof chrome !== "undefined" &&
                chrome.runtime &&
                chrome.runtime.id
            ) {
                console.log(
                    `✅ CORREÇÃO: APIs de extensão disponíveis após ${
                        tentativas * 100
                    }ms`
                );
                resolve(true);
                return;
            }

            if (tentativas >= maxTentativas) {
                console.log(
                    "⚠️ CORREÇÃO: Timeout aguardando APIs - continuando sem elas"
                );
                resolve(false);
                return;
            }

            setTimeout(verificar, 100);
        }

        verificar();
    });
}

// 2. Forçar recriação do namespace
async function forcarRecriacaoNamespace() {
    console.log("🔄 CORREÇÃO: Forçando recriação do namespace...");

    // Aguardar APIs se necessário
    await aguardarAPIsExtensao();

    // Verificar se já existe
    if (typeof window.SENT1_AUTO !== "undefined") {
        console.log("✅ CORREÇÃO: Namespace já existe, mantendo versão atual");
        return window.SENT1_AUTO;
    }

    // Criar namespace vazio temporário
    window.SENT1_AUTO = {
        // Funções básicas sempre disponíveis
        status: () => {
            console.log("📊 STATUS: Namespace temporário ativo");
            console.log("   Para funções completas, recarregue a extensão");
            return {
                status: "temporario",
                apis: typeof chrome !== "undefined" && chrome.runtime,
            };
        },

        // Detectar se a IIFE principal já executou
        verificarExecucao: () => {
            const elementos = [
                document.getElementById("eprobe-data-sessao"),
                document.querySelector("#eprobe-theme-styles"),
                document.querySelector(".bootstrap-styles"),
            ].filter((el) => el !== null);

            console.log(
                `🔍 VERIFICAÇÃO: ${elementos.length} elementos da extensão encontrados`
            );
            return elementos.length > 0;
        },

        // Forçar re-execução da IIFE se necessário
        forcarReexecucao: async () => {
            console.log("🔄 FORCE: Tentando forçar re-execução da IIFE...");

            // Remover elementos existentes
            const elementosRemover = [
                "eprobe-data-sessao",
                "eprobe-theme-styles",
                "eprobe-estilo-botoes-eproc",
            ];

            elementosRemover.forEach((id) => {
                const elemento = document.getElementById(id);
                if (elemento) {
                    elemento.remove();
                    console.log(`🗑️ REMOVIDO: ${id}`);
                }
            });

            // Aguardar um pouco
            await new Promise((resolve) => setTimeout(resolve, 500));

            // Tentar recarregar o script principal
            console.log(
                "💡 DICA: Recarregue a extensão em edge://extensions/ para aplicar correções completas"
            );

            return false;
        },
    };

    console.log("✅ CORREÇÃO: Namespace temporário criado");
    return window.SENT1_AUTO;
}

// 3. Aplicar correção imediata
async function aplicarCorrecaoImediata() {
    console.log("🚀 CORREÇÃO: Iniciando correção imediata...");

    try {
        // Criar namespace temporário
        await forcarRecriacaoNamespace();

        // Verificar se elementos existem
        const temElementos = window.SENT1_AUTO.verificarExecucao();

        if (temElementos) {
            console.log(
                "✅ CORREÇÃO: Extensão está funcionando, apenas namespace estava ausente"
            );
            console.log("💡 SOLUÇÃO: Namespace temporário criado com sucesso");
            console.log("\n📋 PRÓXIMOS PASSOS:");
            console.log(
                "1. Use window.SENT1_AUTO.status() para verificar status"
            );
            console.log(
                "2. Para funcionalidade completa, recarregue a extensão"
            );
            console.log(
                "3. Ou recarregue esta página após recarregar a extensão"
            );
        } else {
            console.log(
                "⚠️ CORREÇÃO: Extensão pode não estar executando corretamente"
            );
            console.log(
                "💡 SOLUÇÃO: Recarregue a extensão em edge://extensions/"
            );
        }

        // Tentar detectar se main.js carregou mas falhou
        const scripts = document.querySelectorAll("script");
        let mainJsEncontrado = false;

        scripts.forEach((script) => {
            if (script.src && script.src.includes("main.js")) {
                mainJsEncontrado = true;
                console.log(`📜 ENCONTRADO: main.js em ${script.src}`);
            }
        });

        if (!mainJsEncontrado) {
            console.log(
                "❌ PROBLEMA: main.js não foi encontrado nos scripts da página"
            );
            console.log(
                "💡 SOLUÇÃO: Verifique se a extensão está ativada e com permissões corretas"
            );
        }
    } catch (error) {
        console.error("❌ ERRO NA CORREÇÃO:", error);
    }
}

// 4. Criar função de monitoramento contínuo
function criarMonitoramentoContinuo() {
    console.log("👀 MONITOR: Criando monitoramento contínuo...");

    // Verificar periodicamente se o namespace aparece
    let verificacoes = 0;
    const maxVerificacoes = 30; // 30 segundos

    const intervalo = setInterval(() => {
        verificacoes++;

        // Verificar se namespace completo apareceu
        if (
            typeof window.SENT1_AUTO !== "undefined" &&
            typeof window.SENT1_AUTO.runFullAutomation === "function"
        ) {
            console.log("✅ MONITOR: Namespace completo detectado!");
            clearInterval(intervalo);
            return;
        }

        // Verificar se APIs ficaram disponíveis
        if (
            typeof chrome !== "undefined" &&
            chrome.runtime &&
            chrome.runtime.id
        ) {
            console.log("✅ MONITOR: APIs de extensão agora disponíveis");
            console.log(
                "💡 DICA: Recarregue a página para reaplicar a extensão"
            );
        }

        if (verificacoes >= maxVerificacoes) {
            console.log("⏰ MONITOR: Tempo limite atingido");
            clearInterval(intervalo);
        }
    }, 1000);

    // Limpar após 30 segundos
    setTimeout(() => {
        clearInterval(intervalo);
    }, 30000);
}

// Executar correção automaticamente
aplicarCorrecaoImediata();
criarMonitoramentoContinuo();

// Exportar funções para uso manual
window.correcaoEdge = {
    aplicar: aplicarCorrecaoImediata,
    aguardarAPIs: aguardarAPIsExtensao,
    forcarNamespace: forcarRecriacaoNamespace,
    status: () => {
        console.log("📊 STATUS DA CORREÇÃO:");
        console.log(
            `   APIs disponíveis: ${
                typeof chrome !== "undefined" && chrome.runtime
            }`
        );
        console.log(
            `   Namespace existe: ${typeof window.SENT1_AUTO !== "undefined"}`
        );
        console.log(
            `   Namespace completo: ${
                typeof window.SENT1_AUTO?.runFullAutomation === "function"
            }`
        );
        console.log(
            `   Elementos na página: ${
                document.querySelectorAll('[id*="eprobe"]').length
            }`
        );
    },
};

console.log("🔧 CORREÇÃO EDGE: Script de correção carregado!");
console.log(
    "Use window.correcaoEdge.status() para verificar status a qualquer momento"
);
