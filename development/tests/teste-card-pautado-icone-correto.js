// 🧪 TESTE CARD PAUTADO - ÍCONE CALENDÁRIO CORRETO
// Execute este script no console de uma página do eProc

console.log("🧪 INICIANDO TESTE DO CARD PAUTADO COM ÍCONE CALENDÁRIO...");

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

        console.log(
            "🎯 Testando card PAUTADO com ÍCONE CALENDÁRIO:",
            dadosTeste
        );

        try {
            // 4. Criar card
            const resultado =
                window.SENT1_AUTO.criarCardMaterialDesign(dadosTeste);

            if (resultado) {
                console.log("✅ Card criado com sucesso!");
                console.log("📊 Resultado:", resultado);

                // 5. Inserir na página para teste visual
                const container = document.body;
                if (container) {
                    resultado.style.position = "fixed";
                    resultado.style.top = "20px";
                    resultado.style.right = "20px";
                    resultado.style.zIndex = "9999";
                    resultado.style.border = "2px solid red";

                    container.appendChild(resultado);
                    console.log(
                        "✅ Card inserido na página para teste visual (canto superior direito)"
                    );

                    // 6. Verificações específicas do ícone
                    const iconGroup = resultado.querySelector(
                        'g[transform*="translate(12, 15)"]'
                    );
                    if (iconGroup) {
                        const calendarBase = iconGroup.querySelector(
                            'rect[fill="#5C85B4"]'
                        );
                        const lines = iconGroup.querySelectorAll(
                            'line[stroke="#FFFFFF"]'
                        );
                        const holes =
                            iconGroup.querySelectorAll('rect[height="6"]');

                        console.log("🔍 VERIFICAÇÃO DO ÍCONE CALENDÁRIO:");
                        console.log(
                            "   📅 Base do calendário:",
                            calendarBase ? "✅ Encontrada" : "❌ Não encontrada"
                        );
                        console.log(
                            "   📏 Linhas internas:",
                            lines.length,
                            "linhas encontradas (esperado: 3)"
                        );
                        console.log(
                            "   🕳️ Furos de encadernação:",
                            holes.length,
                            "furos encontrados (esperado: 2)"
                        );

                        if (
                            calendarBase &&
                            lines.length === 3 &&
                            holes.length === 2
                        ) {
                            console.log(
                                "✅ ÍCONE CALENDÁRIO IMPLEMENTADO CORRETAMENTE!"
                            );
                        } else {
                            console.warn(
                                "⚠️ Ícone pode não estar completamente correto"
                            );
                        }
                    } else {
                        console.error("❌ Grupo do ícone não encontrado");
                    }

                    // 7. Teste de hover com Material Design Elevation
                    console.log("🎯 Testando hover effects Material Design...");
                    resultado.dispatchEvent(new MouseEvent("mouseenter"));

                    setTimeout(() => {
                        console.log("✅ TESTE COMPLETO!");
                        console.log("📋 VERIFICAÇÕES VISUAIS:");
                        console.log(
                            "   - Card visível no canto superior direito com borda vermelha"
                        );
                        console.log(
                            "   - Ícone deve ser um CALENDÁRIO na cor #5C85B4 (azul)"
                        );
                        console.log("   - Texto 'Pautado' deve estar visível");
                        console.log(
                            "   - Data '15/01/2025' deve aparecer embaixo"
                        );
                        console.log(
                            "   - Hover deve causar elevação Material Design com sombras"
                        );
                        console.log(
                            "   - Sombras padrão: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3))"
                        );
                        console.log(
                            "   - Sombras hover: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.35))"
                        );

                        // Remover após 15 segundos
                        setTimeout(() => {
                            if (resultado.parentNode) {
                                resultado.parentNode.removeChild(resultado);
                                console.log(
                                    "🧹 Card de teste removido da página"
                                );
                            }
                        }, 15000);
                    }, 1000);
                } else {
                    console.warn(
                        "⚠️ Não foi possível inserir na página para teste visual"
                    );
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

console.log("🏁 TESTE CONCLUÍDO - AGUARDANDO VISUALIZAÇÃO");
console.log("👀 Observe o card no canto superior direito da página");
