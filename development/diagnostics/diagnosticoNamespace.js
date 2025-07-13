// 🔍 DIAGNÓSTICO AVANÇADO DO NAMESPACE SENT1_AUTO
// Execute este código no console do Edge para diagnosticar problemas

console.log("🔍 INICIANDO DIAGNÓSTICO AVANÇADO DO NAMESPACE...");

// 1. Verificar se a extensão foi carregada
console.log("\n📋 1. VERIFICAÇÃO DE SCRIPTS DA EXTENSÃO:");
const scriptsExtensao = Array.from(document.scripts).filter(
    (script) =>
        script.src.includes("chrome-extension") ||
        (script.src.includes("main.js") && script.src.includes("eProbe"))
);

console.log(`   - Scripts da extensão encontrados: ${scriptsExtensao.length}`);
scriptsExtensao.forEach((script, i) => {
    console.log(`   ${i + 1}. ${script.src}`);
});

// 2. Verificar erros de JavaScript na página
console.log("\n🚨 2. VERIFICAÇÃO DE ERROS JAVASCRIPT:");
let errosDetectados = [];

const originalError = window.onerror;
window.onerror = function (message, source, lineno, colno, error) {
    errosDetectados.push({
        message,
        source,
        lineno,
        colno,
        error: error?.toString(),
    });
    console.log("🚨 Erro JavaScript:", { message, source, lineno, colno });
    if (originalError) originalError.apply(this, arguments);
};

// 3. Verificar se o namespace está sendo criado
console.log("\n🔧 3. VERIFICAÇÃO DO NAMESPACE:");
console.log(`   - window existe: ${typeof window}`);
console.log(`   - SENT1_AUTO existe: ${typeof window.SENT1_AUTO}`);

if (typeof window.SENT1_AUTO === "undefined") {
    console.log("❌ SENT1_AUTO não foi criado - investigando...");

    // Tentar encontrar vestígios da extensão
    const funcoes = Object.getOwnPropertyNames(window).filter(
        (prop) =>
            prop.includes("SENT") ||
            prop.includes("eProbe") ||
            prop.includes("AUTO")
    );

    console.log("🔍 Propriedades relacionadas no window:", funcoes);

    // Verificar se há alguma propriedade global da extensão
    const propriedadesGlobais = Object.getOwnPropertyNames(window).filter(
        (prop) =>
            typeof window[prop] === "function" &&
            (prop.includes("detectar") || prop.includes("processar"))
    );

    console.log("🔍 Funções potenciais da extensão:", propriedadesGlobais);
} else {
    console.log("✅ SENT1_AUTO foi criado com sucesso!");
    console.log("📋 Funções disponíveis:", Object.keys(window.SENT1_AUTO));
}

// 4. Verificar Content Security Policy
console.log("\n🔒 4. VERIFICAÇÃO DE CSP (Content Security Policy):");
const metaCsp = document.querySelector(
    'meta[http-equiv="Content-Security-Policy"]'
);
if (metaCsp) {
    console.log("   - CSP encontrado:", metaCsp.content);
} else {
    console.log("   - Nenhuma meta tag CSP encontrada");
}

// Verificar CSP via headers (se possível)
try {
    fetch(window.location.href, { method: "HEAD" })
        .then((response) => {
            const csp = response.headers.get("content-security-policy");
            if (csp) {
                console.log("   - CSP via header:", csp);
            } else {
                console.log("   - Nenhum CSP via header");
            }
        })
        .catch(() =>
            console.log("   - Não foi possível verificar headers CSP")
        );
} catch (e) {
    console.log("   - Erro ao verificar CSP:", e.message);
}

// 5. Tentar executar um teste simples de injeção de script
console.log("\n🧪 5. TESTE DE INJEÇÃO DE SCRIPT:");
try {
    const testScript = document.createElement("script");
    testScript.textContent = `
        console.log('✅ Script de teste executado com sucesso');
        window.TESTE_INJECAO = { sucesso: true, timestamp: Date.now() };
    `;
    document.head.appendChild(testScript);

    setTimeout(() => {
        if (typeof window.TESTE_INJECAO !== "undefined") {
            console.log(
                "✅ Injeção de script funcionando:",
                window.TESTE_INJECAO
            );
        } else {
            console.log("❌ Injeção de script não funcionou");
        }
    }, 100);
} catch (e) {
    console.log("❌ Erro na injeção de script:", e.message);
}

// 6. Verificar se há eventos de erro sendo capturados
console.log("\n👂 6. MONITORAMENTO DE ERROS:");
let contadorErros = 0;

window.addEventListener("error", (e) => {
    contadorErros++;
    console.log(`🚨 Erro ${contadorErros}:`, {
        message: e.message,
        filename: e.filename,
        lineno: e.lineno,
        colno: e.colno,
        error: e.error?.toString(),
    });
});

// 7. Informações do ambiente
console.log("\n🌐 7. INFORMAÇÕES DO AMBIENTE:");
console.log("   - User Agent:", navigator.userAgent);
console.log("   - URL atual:", window.location.href);
console.log("   - Domínio:", window.location.hostname);
console.log("   - Protocolo:", window.location.protocol);

// 8. Aguardar um tempo e fazer relatório final
setTimeout(() => {
    console.log("\n📊 RELATÓRIO FINAL DO DIAGNÓSTICO:");
    console.log(`   - Scripts da extensão: ${scriptsExtensao.length}`);
    console.log(
        `   - SENT1_AUTO criado: ${typeof window.SENT1_AUTO !== "undefined"}`
    );
    console.log(`   - Erros JavaScript detectados: ${errosDetectados.length}`);
    console.log(
        `   - Teste de injeção: ${typeof window.TESTE_INJECAO !== "undefined"}`
    );

    if (errosDetectados.length > 0) {
        console.log("\n🚨 ERROS DETECTADOS:");
        errosDetectados.forEach((erro, i) => {
            console.log(
                `   ${i + 1}. ${erro.message} (${erro.source}:${erro.lineno})`
            );
        });
    }

    // Tentar uma abordagem diferente se SENT1_AUTO não existir
    if (typeof window.SENT1_AUTO === "undefined") {
        console.log("\n🔧 TENTANDO ABORDAGEM ALTERNATIVA...");

        // Verificar se há alguma extensão carregada
        if (typeof chrome !== "undefined" && chrome.runtime) {
            console.log("✅ API do Chrome disponível");
            console.log("   - Extension ID:", chrome.runtime.id);
        } else {
            console.log("❌ API do Chrome não disponível");
        }

        // Tentar encontrar elementos criados pela extensão
        const elementosExtensao = document.querySelectorAll(
            '[id*="sent1"], [id*="eprobe"], [class*="eprobe"]'
        );
        console.log(
            `🔍 Elementos da extensão encontrados: ${elementosExtensao.length}`
        );
        elementosExtensao.forEach((el) => {
            console.log(`   - ${el.tagName}#${el.id}.${el.className}`);
        });
    }

    console.log("\n🏁 DIAGNÓSTICO CONCLUÍDO");
}, 2000);

console.log("⏱️ Aguardando 2 segundos para relatório final...");
