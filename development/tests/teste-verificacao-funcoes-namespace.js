// ============================================================================
// 🚀 TESTE VERIFICAÇÃO - FUNÇÕES EM ESCOPO INCORRETO
// ============================================================================
// Objetivo: Verificar se as funções estão acessíveis via namespace
// Usar: Cole este código no console do navegador em uma página do eProc
// ============================================================================

console.log("🔍 TESTE: Verificando funções no namespace...");

const funcoesParaTestar = [
    "autoExtractText",
    "copyToClipboard",
    "sendToPerplexity",
    "isValidPageForButton",
    "findDocumentosRelevantes",
    "testApiKey",
    "debugApiCall",
    "showDocumentSelectionModal",
    "showSentenceProcessingOptions",
    "getStoredApiKey",
    "storeApiKey",
    "removeStoredApiKey",
    "showErrorLogs",
    "showApiQuotaInfo",
    "cleanInvisibleChars",
    "debugEventStructure",
    "detectarDataSessaoExperimental",
    "criarBotaoEleganteeProc",
    "botaoBrancoCapaProcesso",
    "criarInfraButtonPrimary",
    "botaoAzuleProc",
    "detectarPaginaLocalizadores",
    "processarTabelaLocalizadores",
    "destacarLocalizadoresUrgentes",
    "debugButtonCreation",
    "forceCreateButton",
    "ensureButtonExists",
    "shouldShowIntegratedButton",
    "shouldShowFloatingButton",
];

// 1. Verificar se o namespace existe
if (typeof window.SENT1_AUTO === "undefined") {
    console.log("❌ ERRO: Namespace window.SENT1_AUTO não encontrado");
    return;
} else {
    console.log("✅ Namespace window.SENT1_AUTO encontrado");
}

// 2. Verificar cada função
const resultados = {
    encontradas: [],
    faltando: [],
    total: funcoesParaTestar.length,
};

funcoesParaTestar.forEach((nomeFuncao) => {
    if (typeof window.SENT1_AUTO[nomeFuncao] === "function") {
        resultados.encontradas.push(nomeFuncao);
        console.log(`   ✅ ${nomeFuncao}: function`);
    } else {
        resultados.faltando.push(nomeFuncao);
        console.log(
            `   ❌ ${nomeFuncao}: ${
                typeof window.SENT1_AUTO[nomeFuncao] || "undefined"
            }`
        );
    }
});

// 3. Resumo dos resultados
console.log("📊 RESUMO DOS RESULTADOS:");
console.log(
    `   ✅ Encontradas: ${resultados.encontradas.length}/${resultados.total}`
);
console.log(
    `   ❌ Faltando: ${resultados.faltando.length}/${resultados.total}`
);

if (resultados.faltando.length > 0) {
    console.log("❌ FUNÇÕES FALTANDO:");
    resultados.faltando.forEach((func) => console.log(`     • ${func}`));
}

if (resultados.encontradas.length > 0) {
    console.log("✅ FUNÇÕES ENCONTRADAS:");
    resultados.encontradas
        .slice(0, 5)
        .forEach((func) => console.log(`     • ${func}`));
    if (resultados.encontradas.length > 5) {
        console.log(
            `     ... e mais ${resultados.encontradas.length - 5} funções`
        );
    }
}

// 4. Teste específico das funções principais já movidas
console.log("🧪 TESTE ESPECÍFICO - FUNÇÕES PRINCIPAIS:");

// Testar autoExtractText
if (typeof window.SENT1_AUTO.autoExtractText === "function") {
    console.log("   ✅ autoExtractText: Disponível e callable");
} else {
    console.log("   ❌ autoExtractText: Não disponível");
}

// Testar copyToClipboard
if (typeof window.SENT1_AUTO.copyToClipboard === "function") {
    console.log("   ✅ copyToClipboard: Disponível e callable");
} else {
    console.log("   ❌ copyToClipboard: Não disponível");
}

// Testar testApiKey
if (typeof window.SENT1_AUTO.testApiKey === "function") {
    console.log("   ✅ testApiKey: Disponível e callable");
} else {
    console.log("   ❌ testApiKey: Não disponível");
}

// Testar debugApiCall
if (typeof window.SENT1_AUTO.debugApiCall === "function") {
    console.log("   ✅ debugApiCall: Disponível e callable");
} else {
    console.log("   ❌ debugApiCall: Não disponível");
}

console.log("🎯 TESTE CONCLUÍDO");
console.log(
    `📌 STATUS: ${resultados.encontradas.length}/${resultados.total} funções disponíveis`
);

// Retornar resultados para usar programaticamente
return resultados;
