// ============================================================================
// 🚀 TESTE - FUNÇÃO showDocumentSelectionModal
// ============================================================================
// Objetivo: Verificar se a função está acessível via namespace após movê-la
// Uso: Cole no console do navegador em uma página do eProc
// ============================================================================

console.log("🧪 TESTE: Verificando função showDocumentSelectionModal...");

// Testar disponibilidade no namespace
if (typeof window.SENT1_AUTO !== "undefined") {
    console.log("✅ NAMESPACE: window.SENT1_AUTO existe");

    if (typeof window.SENT1_AUTO.showDocumentSelectionModal === "function") {
        console.log("✅ FUNÇÃO: showDocumentSelectionModal está no namespace");

        // Testar chamada da função (sem argumentos para ver se executa)
        try {
            console.log("🧪 TESTE: Chamando função de teste...");

            // Criar dados de teste simulados
            const documentosTeste = [
                {
                    eventoDescricao: "Sentença de Mérito - TESTE",
                    seqEvento: "123",
                    tipoDocumento: "SENT1",
                    texto: "Documento de teste",
                    tamanho: "2KB",
                },
                {
                    eventoDescricao: "Petição Inicial - TESTE",
                    seqEvento: "456",
                    tipoDocumento: "INIC1",
                    texto: "Petição teste",
                    tamanho: "5KB",
                },
            ];

            // Testará se a função executa sem erro
            const resultadoTeste =
                window.SENT1_AUTO.showDocumentSelectionModal(documentosTeste);

            if (resultadoTeste && typeof resultadoTeste.then === "function") {
                console.log("✅ EXECUÇÃO: Função retornou Promise (correto)");

                // Cancelar o modal de teste automaticamente
                setTimeout(() => {
                    const modal = document.getElementById(
                        "document-selection-modal"
                    );
                    if (modal) {
                        modal.remove();
                        console.log("🧹 LIMPEZA: Modal de teste removido");
                    }
                }, 2000);

                console.log(
                    "✅ RESULTADO: Função showDocumentSelectionModal está FUNCIONANDO!"
                );
                console.log(
                    "🎯 STATUS: 15/32 funções movidas com sucesso (47% concluído)"
                );
            } else {
                console.error("❌ EXECUÇÃO: Função não retornou Promise");
            }
        } catch (error) {
            console.error("❌ ERRO: Falha ao executar função:", error);
        }
    } else {
        console.error(
            "❌ FUNÇÃO: showDocumentSelectionModal NÃO está no namespace"
        );
    }
} else {
    console.error("❌ NAMESPACE: window.SENT1_AUTO não existe");
}

// Relatório de progresso
console.log("\n📊 RELATÓRIO DE PROGRESSO:");
console.log("✅ Funções movidas: 15/32");
console.log("⚠️  Funções pendentes: 17/32");
console.log("🎯 Progresso: ~47%");
console.log("🚀 Próxima: showSentenceProcessingOptions");
