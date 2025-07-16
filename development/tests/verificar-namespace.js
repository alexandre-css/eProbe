// 🔍 SCRIPT PARA VERIFICAR NAMESPACE eProbe
// Execute este script no console da página do eProc

console.log("🔍 VERIFICANDO NAMESPACE eProbe");
console.log("===============================");

// 1. Verificar se window.SENT1_AUTO existe
console.log("\n📦 1. VERIFICAÇÃO DO NAMESPACE");
console.log("window.SENT1_AUTO existe:", typeof window.SENT1_AUTO);
console.log("É um objeto:", typeof window.SENT1_AUTO === "object");

if (typeof window.SENT1_AUTO === "undefined") {
    console.log("❌ PROBLEMA: window.SENT1_AUTO não existe!");
    console.log("💡 SOLUÇÃO: Recarregue a página ou reinstale a extensão");
    return;
}

// 2. Verificar funções principais esperadas
console.log("\n🔧 2. VERIFICAÇÃO DE FUNÇÕES PRINCIPAIS");
const funcoesEsperadas = [
    "detectarDataSessao",
    "getDataSessaoPautado",
    "hasDataSessaoPautado",
    "inserirDataSessaoNaInterface",
    "testarCriacaoCard",
    "forcarInsercaoCardSemValidacao",
    "diagnosticoCompletoCard",
    "forcarDeteccaoDataSessao",
];

const statusFuncoes = {};
funcoesEsperadas.forEach((funcao) => {
    const existe = typeof window.SENT1_AUTO[funcao];
    statusFuncoes[funcao] = existe;
    const icone = existe === "function" ? "✅" : "❌";
    console.log(`${icone} ${funcao}: ${existe}`);
});

// 3. Contar total de funções disponíveis
console.log("\n📊 3. ESTATÍSTICAS DO NAMESPACE");
const todasFuncoes = Object.keys(window.SENT1_AUTO);
const funcoesFuncionais = todasFuncoes.filter(
    (key) => typeof window.SENT1_AUTO[key] === "function"
);
const funcoesFaltando = funcoesEsperadas.filter(
    (f) => typeof window.SENT1_AUTO[f] !== "function"
);

console.log(`Total de propriedades: ${todasFuncoes.length}`);
console.log(`Funções funcionais: ${funcoesFuncionais.length}`);
console.log(`Funções esperadas: ${funcoesEsperadas.length}`);
console.log(`Funções faltando: ${funcoesFaltando.length}`);

if (funcoesFaltando.length > 0) {
    console.log("❌ FUNÇÕES FALTANDO:", funcoesFaltando);
}

// 4. Verificar se content script foi carregado
console.log("\n🌐 4. VERIFICAÇÃO DO CONTENT SCRIPT");
console.log("URL atual:", window.location.href);
console.log("É página eProc:", window.location.href.includes("eproc"));
console.log("Extension context:", typeof chrome?.runtime);

// 5. Tentar funções básicas que devem funcionar
console.log("\n🧪 5. TESTE DE FUNÇÕES BÁSICAS");

try {
    if (typeof window.SENT1_AUTO.hasDataSessaoPautado === "function") {
        const hasData = window.SENT1_AUTO.hasDataSessaoPautado();
        console.log("✅ hasDataSessaoPautado():", hasData);
    } else {
        console.log("❌ hasDataSessaoPautado não está disponível");
    }

    if (typeof window.SENT1_AUTO.getDataSessaoPautado === "function") {
        const getData = window.SENT1_AUTO.getDataSessaoPautado();
        console.log("✅ getDataSessaoPautado():", getData);
    } else {
        console.log("❌ getDataSessaoPautado não está disponível");
    }
} catch (error) {
    console.log("❌ ERRO ao testar funções básicas:", error.message);
}

// 6. Instruções de correção
console.log("\n🔧 6. INSTRUÇÕES DE CORREÇÃO");

if (funcoesFaltando.length === 0) {
    console.log("✅ Todas as funções estão disponíveis!");
    console.log("💡 Você pode executar:");
    console.log("   window.SENT1_AUTO.testarCriacaoCard()");
    console.log("   window.SENT1_AUTO.diagnosticoCompletoCard()");
} else {
    console.log("❌ Algumas funções estão faltando.");
    console.log("💡 SOLUÇÕES:");
    console.log("1. Recarregue a página (F5)");
    console.log("2. Desabilite e reabilite a extensão");
    console.log("3. Reinstale a extensão se necessário");
    console.log("4. Verifique se está em uma página do eProc");
}

// 7. Exportar resultado para debug
window.debugNamespace = {
    existe: typeof window.SENT1_AUTO !== "undefined",
    statusFuncoes,
    funcoesFaltando,
    totalFuncoes: todasFuncoes.length,
    funcoesFuncionais: funcoesFuncionais.length,
};

console.log("\n📋 RESULTADO SALVO EM: window.debugNamespace");
console.log(window.debugNamespace);
