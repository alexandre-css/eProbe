// TESTE RÁPIDO - Copiar e colar no console do navegador (página eProc)
// Verificar se ReferenceError foi corrigido

// 1. Testar processosJaProcessados
try {
    const result = window.SENT1_AUTO.processoJaFoiProcessado("123456789");
    console.log("✅ processoJaFoiProcessado funcionou! Resultado:", result);
} catch (error) {
    console.log("❌ ReferenceError ainda existe:", error.message);
}

// 2. Testar buttonCreationAttempts (via ensureButtonExists)
try {
    const hasFunction =
        typeof window.SENT1_AUTO.ensureButtonExists === "function";
    console.log("✅ ensureButtonExists existe:", hasFunction);
} catch (error) {
    console.log("❌ Erro com ensureButtonExists:", error.message);
}
