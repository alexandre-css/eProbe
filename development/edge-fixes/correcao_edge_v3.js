// 🔧 CORREÇÃO DEFINITIVA PARA MICROSOFT EDGE - VERSÃO 3.0
// Esta versão tenta realmente RECRIAR o namespace completo

console.log("🔧 CORREÇÃO EDGE v3.0: Tentando recuperação COMPLETA...");

// 1. Primeiro, verificar se algum namespace existe
console.log("🔍 VERIFICANDO: Estado atual do namespace...");
console.log(
    "window.SENT1_AUTO existe?",
    typeof window.SENT1_AUTO !== "undefined"
);

// 2. Limpar qualquer namespace parcial
if (typeof window.SENT1_AUTO !== "undefined") {
    console.log("🗑️ LIMPANDO: Namespace parcial existente...");
    delete window.SENT1_AUTO;
}

// 3. Verificar se a extensão realmente carregou elementos
function verificarElementosExtensao() {
    const elementos = [
        document.getElementById("eprobe-data-sessao"),
        document.querySelector("#eprobe-theme-styles"),
        document.querySelector(".bootstrap-styles"),
        document.querySelector('[class*="eprobe"]'),
    ].filter((el) => el !== null);

    console.log(
        `🔍 ELEMENTOS: ${elementos.length} elementos da extensão encontrados`
    );
    return elementos.length > 0;
}

// 4. Tentar forçar re-execução da IIFE principal
async function tentarReexecutarIIFE() {
    console.log("🔄 TENTANDO: Re-executar IIFE principal...");

    // Verificar se há scripts da extensão
    const scripts = Array.from(document.querySelectorAll("script"));
    const scriptExtensao = scripts.find(
        (s) =>
            s.src &&
            (s.src.includes("main.js") ||
                s.src.includes("extension://") ||
                s.src.includes("eprobe"))
    );

    if (scriptExtensao) {
        console.log(`📜 SCRIPT: Encontrado em ${scriptExtensao.src}`);

        // Tentar recarregar o script
        try {
            const response = await fetch(scriptExtensao.src);
            const codigo = await response.text();

            console.log(`📝 CÓDIGO: Carregado ${codigo.length} caracteres`);

            // Executar o código em um contexto seguro
            const scriptElement = document.createElement("script");
            scriptElement.textContent = codigo;
            document.head.appendChild(scriptElement);

            console.log("✅ SCRIPT: Re-executado com sucesso");

            // Aguardar um pouco para a execução
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Verificar se funcionou
            if (
                typeof window.SENT1_AUTO !== "undefined" &&
                typeof window.SENT1_AUTO.runFullAutomation === "function"
            ) {
                console.log("🎉 SUCESSO: Namespace completo recriado!");
                return true;
            }
        } catch (error) {
            console.log(
                "❌ ERRO: Não foi possível recarregar script:",
                error.message
            );
        }
    }

    return false;
}

// 5. Criar namespace completo manualmente
function criarNamespaceCompletoManual() {
    console.log("🛠️ CRIANDO: Namespace completo manualmente...");

    // Funções básicas que sabemos que devem existir
    window.SENT1_AUTO = {
        // Status
        status: () => {
            console.log("📊 STATUS NAMESPACE MANUAL:");
            console.log("   Tipo: Manual/Reconstruído");
            console.log(
                "   APIs extensão:",
                typeof chrome !== "undefined" && chrome.runtime
                    ? "DISPONÍVEIS"
                    : "NÃO DISPONÍVEIS"
            );
            console.log(
                "   Elementos:",
                document.querySelectorAll('[id*="eprobe"]').length
            );
            return { tipo: "manual", completo: false };
        },

        // Tentar detectar data da sessão manualmente
        detectarDataSessao: () => {
            console.log("🔍 DETECTANDO: Data da sessão manualmente...");

            const textoCompleto = document.body.innerText;
            const padroes = [
                /(?:data\s*da\s*sess[aã]o|sess[aã]o\s*(?:de|em|para|:)?)\s*:?\s*(\d{1,2}\/\d{1,2}\/\d{4})/i,
                /(?:julgamento\s*(?:em|para|:)|para\s*julgamento)\s*:?\s*(\d{1,2}\/\d{1,2}\/\d{4})/i,
                /(?:pautado|agendar|agendado|marcado).*?(\d{1,2}\/\d{1,2}\/\d{4})/i,
            ];

            for (const padrao of padroes) {
                const match = textoCompleto.match(padrao);
                if (match) {
                    console.log(
                        `✅ DATA ENCONTRADA: ${match[1]} (padrão: ${padrao})`
                    );
                    return match[1];
                }
            }

            console.log("❌ DATA: Nenhuma data de sessão encontrada");
            return null;
        },

        // Função simulada de automação
        runFullAutomation: () => {
            console.log("🤖 AUTOMAÇÃO: Executando versão manual...");
            console.log("⚠️ AVISO: Esta é uma versão limitada");
            console.log(
                "💡 SOLUÇÃO: Recarregue a extensão para versão completa"
            );

            // Tentar detectar data
            const data = window.SENT1_AUTO.detectarDataSessao();
            if (data) {
                console.log(`📅 SESSÃO: Data detectada: ${data}`);
            }

            return { sucesso: false, motivo: "versao_manual" };
        },

        // Função de ajuda
        ajuda: () => {
            console.log("📚 NAMESPACE MANUAL - COMANDOS DISPONÍVEIS:");
            console.log("   window.SENT1_AUTO.status() - Status atual");
            console.log(
                "   window.SENT1_AUTO.detectarDataSessao() - Detectar data"
            );
            console.log(
                "   window.SENT1_AUTO.runFullAutomation() - Automação básica"
            );
            console.log(
                "   window.SENT1_AUTO.forcarRecarregamento() - Tentar recarregar"
            );
            console.log("");
            console.log("🔧 PARA VERSÃO COMPLETA:");
            console.log("   1. edge://extensions/ → Recarregar extensão");
            console.log("   2. Recarregar esta página");
        },

        // Tentar forçar recarregamento
        forcarRecarregamento: async () => {
            console.log("🔄 FORÇANDO: Recarregamento da extensão...");

            const sucesso = await tentarReexecutarIIFE();
            if (sucesso) {
                console.log("✅ SUCESSO: Extensão recarregada!");
                return true;
            } else {
                console.log("❌ FALHA: Não foi possível recarregar");
                console.log(
                    "💡 SOLUÇÃO: Recarregue manualmente em edge://extensions/"
                );
                return false;
            }
        },
    };

    // Proteger namespace
    Object.defineProperty(window, "SENT1_AUTO", {
        value: window.SENT1_AUTO,
        writable: false,
        configurable: false,
    });

    console.log("✅ NAMESPACE: Criado manualmente com proteção");
    return window.SENT1_AUTO;
}

// 6. Executar correção principal
async function executarCorrecaoDefinitiva() {
    console.log("🚀 INICIANDO: Correção definitiva v3.0...");

    try {
        // Verificar elementos
        const temElementos = verificarElementosExtensao();

        if (!temElementos) {
            console.log("❌ PROBLEMA: Extensão não criou elementos");
            console.log(
                "💡 SOLUÇÃO: Verifique se está ativada em edge://extensions/"
            );
            return false;
        }

        console.log("✅ ELEMENTOS: Extensão funcionando");

        // Tentar re-executar IIFE
        console.log("🔄 TENTANDO: Re-executar IIFE...");
        const iifeSuccesso = await tentarReexecutarIIFE();

        if (iifeSuccesso) {
            console.log("🎉 SUCESSO TOTAL: Namespace completo restaurado!");
            return true;
        }

        // Se falhou, criar versão manual
        console.log("⚠️ FALLBACK: Criando namespace manual...");
        criarNamespaceCompletoManual();

        console.log("📋 PRÓXIMOS PASSOS:");
        console.log("1. Teste: window.SENT1_AUTO.status()");
        console.log(
            "2. Para versão completa: window.SENT1_AUTO.forcarRecarregamento()"
        );
        console.log("3. Ou recarregue a extensão manualmente");

        return true;
    } catch (error) {
        console.error("❌ ERRO FATAL:", error);
        return false;
    }
}

// 7. Executar correção
executarCorrecaoDefinitiva().then((sucesso) => {
    if (sucesso) {
        console.log("✅ CORREÇÃO v3.0: Concluída!");
        console.log("🧪 TESTE: window.SENT1_AUTO.status()");
    } else {
        console.log("❌ CORREÇÃO v3.0: Falhou");
    }
});

console.log("⏳ AGUARDE: Correção v3.0 em andamento...");
