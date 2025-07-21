// TESTE DE CORREÇÃO DE ReferenceError - VARIÁVEIS DE ESCOPO
// Executar no console do navegador (eProc) após carregar extensão

console.log("🧪 INICIANDO TESTE DE CORREÇÃO DE ReferenceError...");

// Teste 1: Verificar se processosJaProcessados existe
console.log("1. Testando processosJaProcessados:");
try {
    if (typeof window.processosJaProcessados !== "undefined") {
        console.log("✅ processosJaProcessados está definido globalmente");
    } else {
        console.log("❌ processosJaProcessados NÃO está definido globalmente");

        // Verificar através da função que a usa
        const testResult = window.SENT1_AUTO.processoJaFoiProcessado
            ? "✅ Função processoJaFoiProcessado existe"
            : "❌ Função processoJaFoiProcessado NÃO existe";
        console.log(testResult);
    }
} catch (error) {
    console.log("❌ Erro ao testar processosJaProcessados:", error.message);
}

// Teste 2: Verificar se buttonCreationAttempts existe
console.log("\n2. Testando buttonCreationAttempts:");
try {
    if (typeof window.buttonCreationAttempts !== "undefined") {
        console.log("✅ buttonCreationAttempts está definido globalmente");
    } else {
        console.log("❌ buttonCreationAttempts NÃO está definido globalmente");

        // Verificar através da função que a usa
        const testResult = window.SENT1_AUTO.ensureButtonExists
            ? "✅ Função ensureButtonExists existe"
            : "❌ Função ensureButtonExists NÃO existe";
        console.log(testResult);
    }
} catch (error) {
    console.log("❌ Erro ao testar buttonCreationAttempts:", error.message);
}

// Teste 3: Verificar se MAX_BUTTON_CREATION_ATTEMPTS existe
console.log("\n3. Testando MAX_BUTTON_CREATION_ATTEMPTS:");
try {
    if (typeof window.MAX_BUTTON_CREATION_ATTEMPTS !== "undefined") {
        console.log(
            "✅ MAX_BUTTON_CREATION_ATTEMPTS está definido globalmente"
        );
    } else {
        console.log(
            "❌ MAX_BUTTON_CREATION_ATTEMPTS NÃO está definido globalmente"
        );
    }
} catch (error) {
    console.log(
        "❌ Erro ao testar MAX_BUTTON_CREATION_ATTEMPTS:",
        error.message
    );
}

// Teste 4: Executar função que teve ReferenceError
console.log("\n4. Testando execução de função problemática:");
try {
    if (window.SENT1_AUTO.processoJaFoiProcessado) {
        const processo = "123456789"; // Número fake para teste
        const result = window.SENT1_AUTO.processoJaFoiProcessado(processo);
        console.log(
            "✅ processoJaFoiProcessado executou sem ReferenceError, resultado:",
            result
        );
    } else {
        console.log("❌ Função processoJaFoiProcessado não encontrada");
    }
} catch (error) {
    console.log("❌ ReferenceError ainda existe:", error.message);
}

// Teste 5: Executar função ensureButtonExists
console.log("\n5. Testando ensureButtonExists:");
try {
    if (window.SENT1_AUTO.ensureButtonExists) {
        console.log("⚠️ Função ensureButtonExists encontrada no namespace");
        // Não executamos pois pode criar botões desnecessários
        console.log("✅ (Não executado para evitar efeitos colaterais)");
    } else {
        console.log("❌ Função ensureButtonExists não encontrada no namespace");
        console.log("ℹ️ Verificando se existe globalmente...");
        if (typeof ensureButtonExists !== "undefined") {
            console.log(
                "⚠️ ensureButtonExists existe globalmente mas não no namespace"
            );
        } else {
            console.log("❌ ensureButtonExists não existe em lugar algum");
        }
    }
} catch (error) {
    console.log("❌ Erro ao testar ensureButtonExists:", error.message);
}

console.log("\n🏁 TESTE CONCLUÍDO");
