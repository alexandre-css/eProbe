// 🔍 DIAGNÓSTICO ESPECÍFICO PARA MICROSOFT EDGE
// Execute este script no console de uma página do eProc no Edge

console.log(
    "🔍 DIAGNÓSTICO EDGE: Iniciando análise específica para Microsoft Edge..."
);

// 1. Verificar se estamos no Edge
function verificarNavegador() {
    const userAgent = navigator.userAgent;
    const isEdge = userAgent.includes("Edg/");
    const isChrome = userAgent.includes("Chrome/");
    const isChromium = userAgent.includes("Chromium/");

    console.log("🌐 NAVEGADOR:");
    console.log(`   User Agent: ${userAgent}`);
    console.log(`   É Edge? ${isEdge}`);
    console.log(`   É Chrome? ${isChrome}`);
    console.log(`   É Chromium? ${isChromium}`);

    if (!isEdge) {
        console.warn(
            "⚠️ ATENÇÃO: Este diagnóstico foi feito para Microsoft Edge!"
        );
    }

    return { isEdge, isChrome, isChromium };
}

// 2. Verificar APIs específicas do Edge
function verificarAPIsEdge() {
    console.log("🔌 APIS EDGE:");

    // APIs comuns de extensão
    const apis = [
        "chrome",
        "chrome.runtime",
        "chrome.storage",
        "chrome.tabs",
        "browser", // API WebExtensions padrão
        "browser.runtime",
        "msBrowser", // API específica do Edge antigo
    ];

    apis.forEach((api) => {
        try {
            const existe = eval(`typeof ${api} !== 'undefined'`);
            console.log(
                `   ${api}: ${existe ? "DISPONÍVEL" : "NÃO DISPONÍVEL"}`
            );

            if (existe && api === "chrome" && chrome.runtime) {
                console.log(
                    `   chrome.runtime.id: ${chrome.runtime.id || "undefined"}`
                );
                console.log(
                    `   chrome.runtime.getManifest: ${typeof chrome.runtime
                        .getManifest}`
                );
            }
        } catch (error) {
            console.log(`   ${api}: ERRO - ${error.message}`);
        }
    });
}

// 3. Verificar scripts de conteúdo carregados
function verificarScriptsConteudo() {
    console.log("📜 SCRIPTS DE CONTEÚDO:");

    // Verificar scripts na página
    const scripts = document.querySelectorAll("script");
    const scriptsExtensao = [];

    scripts.forEach((script, index) => {
        const src = script.src;
        if (
            src &&
            (src.includes("extension://") ||
                src.includes("moz-extension://") ||
                src.includes("ms-browser-extension://"))
        ) {
            scriptsExtensao.push({ index, src, tipo: "extensão" });
        }
    });

    console.log(`   Total de scripts: ${scripts.length}`);
    console.log(`   Scripts de extensão: ${scriptsExtensao.length}`);

    if (scriptsExtensao.length > 0) {
        scriptsExtensao.forEach((script) => {
            console.log(`   Script ${script.index}: ${script.src}`);
        });
    }

    // Verificar se há erros de carregamento
    const scriptErrors = [];
    scripts.forEach((script, index) => {
        script.addEventListener("error", (e) => {
            scriptErrors.push({ index, error: e });
        });
    });

    return scriptsExtensao;
}

// 4. Verificar namespace window.SENT1_AUTO com detalhamento específico
function verificarNamespaceDetalhado() {
    console.log("🎯 NAMESPACE DETALHADO:");

    // Verificar se window.SENT1_AUTO existe
    const existe = typeof window.SENT1_AUTO !== "undefined";
    console.log(`   window.SENT1_AUTO existe? ${existe}`);

    if (!existe) {
        // Verificar se há algum vestígio do namespace
        const windowKeys = Object.keys(window);
        const relacionados = windowKeys.filter(
            (key) =>
                key.toLowerCase().includes("sent1") ||
                key.toLowerCase().includes("auto") ||
                key.toLowerCase().includes("eprobe")
        );

        console.log(
            `   Chaves relacionadas no window: ${
                relacionados.length > 0 ? relacionados.join(", ") : "nenhuma"
            }`
        );

        // Verificar se há funções globais que deveriam estar no namespace
        const funcoesPossiveis = [
            "runFullAutomation",
            "detectarDataSessao",
            "autoExtractText",
            "criarBotaoEleganteeProc",
        ];

        const funcoesEncontradas = [];
        funcoesPossiveis.forEach((func) => {
            if (typeof window[func] !== "undefined") {
                funcoesEncontradas.push(func);
            }
        });

        console.log(
            `   Funções globais encontradas: ${
                funcoesEncontradas.length > 0
                    ? funcoesEncontradas.join(", ")
                    : "nenhuma"
            }`
        );

        return false;
    }

    // Se existe, analisar conteúdo
    const funcoes = Object.keys(window.SENT1_AUTO);
    console.log(`   Funções disponíveis: ${funcoes.length}`);
    console.log(
        `   Lista: ${funcoes.slice(0, 10).join(", ")}${
            funcoes.length > 10 ? "..." : ""
        }`
    );

    return true;
}

// 5. Verificar execução de IIFE
function verificarExecucaoIIFE() {
    console.log("🔄 EXECUÇÃO IIFE:");

    // Verificar se há erros no console
    const originalError = console.error;
    const erros = [];

    console.error = function (...args) {
        erros.push(args.join(" "));
        originalError.apply(console, args);
    };

    // Aguardar um momento para capturar erros
    setTimeout(() => {
        console.error = originalError;

        if (erros.length > 0) {
            console.log(`   Erros JavaScript detectados: ${erros.length}`);
            erros.forEach((erro, index) => {
                console.log(`   Erro ${index + 1}: ${erro}`);
            });
        } else {
            console.log("   Nenhum erro JavaScript detectado recentemente");
        }
    }, 1000);

    // Verificar se há elementos criados pela extensão
    const elementosExtensao = [
        document.getElementById("eprobe-data-sessao"),
        document.querySelector('[id*="eprobe"]'),
        document.querySelector('[class*="eprobe"]'),
        document.querySelector(".bootstrap-styles"),
        document.querySelector("#eprobe-estilo-botoes-eproc"),
    ].filter((el) => el !== null);

    console.log(
        `   Elementos da extensão encontrados: ${elementosExtensao.length}`
    );

    if (elementosExtensao.length > 0) {
        elementosExtensao.forEach((el, index) => {
            console.log(
                `   Elemento ${index + 1}: ${el.tagName}${
                    el.id ? "#" + el.id : ""
                }${el.className ? "." + el.className : ""}`
            );
        });
    }

    return elementosExtensao;
}

// 6. Teste específico de carregamento da extensão
function testarCarregamentoExtensao() {
    console.log("🧪 TESTE DE CARREGAMENTO:");

    return new Promise((resolve) => {
        // Tentar carregar um script de teste
        const scriptTeste = document.createElement("script");
        scriptTeste.textContent = `
            console.log('🧪 TESTE: Script de teste carregado com sucesso');
            if (typeof window.SENT1_AUTO !== 'undefined') {
                console.log('✅ TESTE: window.SENT1_AUTO está disponível no contexto de script');
            } else {
                console.log('❌ TESTE: window.SENT1_AUTO NÃO está disponível no contexto de script');
            }
        `;

        document.head.appendChild(scriptTeste);

        setTimeout(() => {
            document.head.removeChild(scriptTeste);
            resolve();
        }, 500);
    });
}

// 7. Verificar Content Security Policy
function verificarCSP() {
    console.log("🔒 CONTENT SECURITY POLICY:");

    // Verificar meta tags CSP
    const metaCSP = document.querySelectorAll(
        'meta[http-equiv="Content-Security-Policy"]'
    );
    if (metaCSP.length > 0) {
        metaCSP.forEach((meta, index) => {
            console.log(`   Meta CSP ${index + 1}: ${meta.content}`);
        });
    } else {
        console.log("   Nenhuma meta tag CSP encontrada");
    }

    // Verificar headers CSP (se disponível)
    try {
        const response = window.performance.getEntriesByType("navigation")[0];
        if (response) {
            console.log(
                "   Verificar CSP nos headers da resposta (abra DevTools > Network)"
            );
        }
    } catch (error) {
        console.log(
            "   Não foi possível verificar headers CSP automaticamente"
        );
    }
}

// 8. Executar diagnóstico completo
async function executarDiagnosticoCompleto() {
    console.log("🚀 INICIANDO DIAGNÓSTICO COMPLETO PARA EDGE...\n");

    try {
        verificarNavegador();
        console.log("");

        verificarAPIsEdge();
        console.log("");

        verificarScriptsConteudo();
        console.log("");

        verificarNamespaceDetalhado();
        console.log("");

        verificarExecucaoIIFE();
        console.log("");

        verificarCSP();
        console.log("");

        await testarCarregamentoExtensao();
        console.log("");

        console.log("✅ DIAGNÓSTICO CONCLUÍDO!");
        console.log("\n📋 PRÓXIMOS PASSOS:");
        console.log(
            "1. Verifique se a extensão está realmente ativada em edge://extensions/"
        );
        console.log(
            "2. Se window.SENT1_AUTO não existir, pode haver erro na execução da IIFE"
        );
        console.log("3. Verifique o console por erros JavaScript específicos");
        console.log("4. Considere recarregar a extensão em edge://extensions/");
    } catch (error) {
        console.error("❌ ERRO DURANTE DIAGNÓSTICO:", error);
    }
}

// Executar automaticamente
executarDiagnosticoCompleto();

// Exportar função para execução manual
window.diagnosticoEdge = executarDiagnosticoCompleto;
