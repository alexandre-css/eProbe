// 🧪 TESTE CARD PAUTADO - VERSÃO FINAL CORRIGIDA
// Execute este script no console de uma página do eProc

console.log("🧪 INICIANDO TESTE DO CARD PAUTADO CORRIGIDO...");

// 1. Verificar namespace
if (typeof window.SENT1_AUTO === "undefined") {
    console.error("❌ ERRO: Namespace SENT1_AUTO não encontrado");
    console.log(
        "💡 SOLUÇÃO: Recarregue a página ou verifique se a extensão está ativa"
    );
} else {
    console.log("✅ Namespace SENT1_AUTO disponível");

    // 2. Verificar função principal
    if (typeof window.SENT1_AUTO.criarCardMaterialDesign === "function") {
        console.log("✅ Função criarCardMaterialDesign disponível");

        // 3. Dados de teste para card PAUTADO
        const dadosTeste = {
            status: "PAUTADO",
            data: "15/01/2025",
            processo: "1234567-89.2024.8.24.0001",
        };

        console.log("🎯 Testando card PAUTADO com dados:", dadosTeste);

        try {
            // 4. Criar card
            const resultado =
                window.SENT1_AUTO.criarCardMaterialDesign(dadosTeste);

            if (resultado) {
                console.log("✅ Card criado com sucesso!");
                console.log("📊 Resultado:", resultado);

                // 5. Verificar se é elemento SVG
                if (resultado.tagName === "svg") {
                    console.log("✅ Elemento SVG criado corretamente");
                    console.log(
                        "📐 Dimensões:",
                        resultado.getAttribute("width"),
                        "x",
                        resultado.getAttribute("height")
                    );

                    // 6. Tentar inserir na página para teste visual
                    const container = document.body;
                    if (container) {
                        resultado.style.position = "fixed";
                        resultado.style.top = "20px";
                        resultado.style.right = "20px";
                        resultado.style.zIndex = "9999";
                        resultado.style.border = "2px solid red";
                        resultado.style.background = "white";

                        container.appendChild(resultado);
                        console.log(
                            "✅ Card inserido na página para teste visual (canto superior direito)"
                        );

                        // 7. Teste de hover
                        console.log("🎯 Testando hover effect...");
                        resultado.dispatchEvent(new MouseEvent("mouseenter"));

                        setTimeout(() => {
                            console.log("✅ TESTE COMPLETO!");
                            console.log("📋 VERIFICAÇÕES:");
                            console.log(
                                "   - Card visível no canto superior direito com borda vermelha"
                            );
                            console.log(
                                "   - Cor do ícone deve ser #5C85B4 (azul)"
                            );
                            console.log(
                                "   - Texto 'Pautado' deve estar visível"
                            );
                            console.log(
                                "   - Data '15/01/2025' deve aparecer embaixo"
                            );
                            console.log(
                                "   - Hover deve causar elevação e sombra"
                            );

                            // Remover após 10 segundos
                            setTimeout(() => {
                                if (resultado.parentNode) {
                                    resultado.parentNode.removeChild(resultado);
                                    console.log(
                                        "🧹 Card de teste removido da página"
                                    );
                                }
                            }, 10000);
                        }, 1000);
                    } else {
                        console.warn(
                            "⚠️ Não foi possível inserir na página para teste visual"
                        );
                    }
                } else {
                    console.error("❌ ERRO: Resultado não é um elemento SVG");
                    console.log("🔍 Tipo retornado:", typeof resultado);
                }
            } else {
                console.error("❌ ERRO: Função retornou null/undefined");
                console.log("🔍 Verificar implementação da função");
            }
        } catch (erro) {
            console.error("❌ ERRO durante criação do card:", erro);
            console.log("🔍 Stack trace:", erro.stack);
        }
    } else {
        console.error("❌ ERRO: Função criarCardMaterialDesign não encontrada");
        console.log("💡 Funções disponíveis:", Object.keys(window.SENT1_AUTO));
    }
}

console.log("🏁 TESTE CONCLUÍDO");
