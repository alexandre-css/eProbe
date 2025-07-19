// 🧪 TESTE ESPECÍFICO - showSentenceProcessingOptions
// Arquivo: development/tests/teste-funcao-showsentenceprocessingoptions.js

console.log("🧪 TESTE: Verificando função showSentenceProcessingOptions");

// 1. Verificar se o namespace SENT1_AUTO existe
if (typeof window.SENT1_AUTO === "undefined") {
    console.error("❌ Namespace SENT1_AUTO não encontrado!");
} else {
    console.log("✅ Namespace SENT1_AUTO encontrado");

    // 2. Verificar se a função está disponível no namespace
    if (
        typeof window.SENT1_AUTO.showSentenceProcessingOptions === "undefined"
    ) {
        console.error(
            "❌ Função showSentenceProcessingOptions não encontrada no namespace!"
        );
    } else {
        console.log(
            "✅ Função showSentenceProcessingOptions encontrada no namespace"
        );
        console.log(
            "Tipo:",
            typeof window.SENT1_AUTO.showSentenceProcessingOptions
        );

        // 3. Tentar executar a função (com mock dos elementos necessários)
        try {
            console.log("🧪 Testando execução da função...");

            // Mock da função findDocumentosRelevantes se não existir
            if (
                typeof window.SENT1_AUTO.findDocumentosRelevantes ===
                "undefined"
            ) {
                console.warn(
                    "⚠️ findDocumentosRelevantes não encontrada, criando mock..."
                );
                window.mockDocumentos = [
                    { href: "http://exemplo1.com", textContent: "Sentença 1" },
                    { href: "http://exemplo2.com", textContent: "Sentença 2" },
                ];
                window.SENT1_AUTO.findDocumentosRelevantes = () =>
                    window.mockDocumentos;
            }

            // Mock da função showNotification se não existir
            if (typeof window.SENT1_AUTO.showNotification === "undefined") {
                console.warn(
                    "⚠️ showNotification não encontrada, criando mock..."
                );
                window.SENT1_AUTO.showNotification = (msg, type) => {
                    console.log(`🔔 Mock Notification [${type}]: ${msg}`);
                };
            }

            // Tentar chamar a função
            window.SENT1_AUTO.showSentenceProcessingOptions();
            console.log("✅ Função executada sem erros imediatos");
        } catch (error) {
            console.error("❌ Erro ao executar função:", error);
        }
    }
}

console.log("🏁 Teste showSentenceProcessingOptions concluído");
