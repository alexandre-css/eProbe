// 🧪 DEMONSTRAÇÃO DO AUTO IMPORT CONFIGURADO PARA EPROBE
// Copiar e colar no console do navegador (página eProc) para testar

console.log("🚀 TESTANDO CONFIGURAÇÃO AUTO IMPORT EPROBE");

// ========================================
// 1. TESTE DE DETECÇÃO DE FUNÇÃO DISPONÍVEL
// ========================================
console.log("\n1. 🔍 Testando detecção de funções do namespace...");

// Ao digitar 'window.SENT1_AUTO.' no VS Code, Auto Import mostrará:
// - autoExtractText
// - autoOpenDocumentoRelevante
// - runFullAutomation
// - detectarDataSessao
// - etc...

// ========================================
// 2. TESTE DE DETECÇÃO DE VARIÁVEL NÃO DECLARADA
// ========================================
console.log("\n2. ⚠️ Testando detecção de ReferenceError...");

// No VS Code, se você digitar uma variável sem declarar:
// if (variavelNaoDeclarada) { ... }  // ❌ Error Lens destacará em vermelho

// Auto Import sugerirá declarar:
let variavelNaoDeclarada = false; // ✅ Sugestão do Auto Import

// ========================================
// 3. TESTE DE FUNÇÃO DO NAMESPACE
// ========================================
console.log("\n3. 🎯 Testando acesso às funções do namespace...");

// Função que estava causando ReferenceError (agora corrigida)
try {
    if (window.SENT1_AUTO && window.SENT1_AUTO.processoJaFoiProcessado) {
        const resultado =
            window.SENT1_AUTO.processoJaFoiProcessado("123456789");
        console.log("✅ processoJaFoiProcessado funcionou:", resultado);
    } else {
        console.log("❌ processoJaFoiProcessado não encontrada no namespace");
    }
} catch (error) {
    console.log("❌ ReferenceError ainda existe:", error.message);
}

// ========================================
// 4. TESTE DE AUTOCOMPLETE DE FUNÇÕES
// ========================================
console.log("\n4. 🔧 Listando funções disponíveis no namespace...");

if (window.SENT1_AUTO) {
    const funcoes = Object.keys(window.SENT1_AUTO);
    console.log(`📊 Total de funções no namespace: ${funcoes.length}`);

    // Mostrar algumas funções importantes
    const funcoesImportantes = [
        "runFullAutomation",
        "autoExtractText",
        "detectarDataSessao",
        "processoJaFoiProcessado",
        "ensureButtonExists",
    ];

    funcoesImportantes.forEach((funcao) => {
        if (funcoes.includes(funcao)) {
            console.log(`✅ ${funcao} - disponível`);
        } else {
            console.log(`❌ ${funcao} - FALTANDO no namespace`);
        }
    });
} else {
    console.log("❌ window.SENT1_AUTO não encontrado");
}

// ========================================
// 5. DEMONSTRAÇÃO DE SNIPPETS PERSONALIZADOS
// ========================================
console.log("\n5. 📝 Snippets disponíveis no VS Code:");
console.log("- eprobe-function: Cria nova função com padrão eProbe");
console.log("- eprobe-var: Declara variável seguindo padrão seguro");
console.log("- eprobe-namespace-add: Template para adicionar ao namespace");
console.log("- eprobe-check-function: Verifica se função existe");
console.log("- eprobe-debug: Template de debug com emojis");
console.log("- eprobe-test: Cria função de teste completa");

console.log("\n🎉 CONFIGURAÇÃO AUTO IMPORT CONCLUÍDA!");
console.log("💡 Agora no VS Code você terá:");
console.log("- ✅ Detecção automática de ReferenceError");
console.log("- ✅ Autocomplete das funções do namespace");
console.log("- ✅ Snippets personalizados para eProbe");
console.log("- ✅ Highlights de TODO para namespace");
console.log("- ✅ Tasks para verificar namespace");
