// 🧪 TESTE CARD PAUTADO - VERSÃO FINAL CORRIGIDA
// Cole este código no console do eProc para testar o Card PAUTADO

console.log("🧪 INICIANDO TESTE FINAL DO CARD PAUTADO (#5C85B4)");

// 1. Verificar se as funções existem
if (typeof window.SENT1_AUTO === "undefined") {
    console.error("❌ ERRO: Namespace SENT1_AUTO não encontrado");
} else {
    console.log("✅ Namespace SENT1_AUTO encontrado");

    // 2. Verificar função criarCardMaterialDesign
    if (typeof window.SENT1_AUTO.criarCardMaterialDesign === "function") {
        console.log("✅ Função criarCardMaterialDesign encontrada");

        // 3. Dados de teste para card PAUTADO (formato real)
        const dadosTeste = {
            status: "Pautado",
            statusCompleto: "Incluído em Pauta",
            statusOriginal: "Incluído em Pauta",
            data: "22/07/2025",
            dataSessao: "22/07/2025",
            dataCompleta: "22/07/2025",
            tipoProcesso: "RELATÓRIO/VOTO",
            codigo: "6412050",
            totalSessoes: 1,
        };

        // 4. Remover cards existentes
        const cardsExistentes = document.querySelectorAll(
            "#eprobe-data-sessao"
        );
        cardsExistentes.forEach((card) => {
            card.remove();
            console.log("🗑️ Card existente removido");
        });

        // 5. Teste da função de normalização de data
        if (typeof window.SENT1_AUTO.getData === "function") {
            const dataExtraida = window.SENT1_AUTO.getData(dadosTeste);
            console.log("📅 Teste de extração de data:", dataExtraida);
        }

        // 6. Criar novo card PAUTADO (VERSÃO FINAL)
        console.log("🎨 Criando card PAUTADO com dados:", dadosTeste);

        try {
            const novoCard =
                window.SENT1_AUTO.criarCardMaterialDesign(dadosTeste);

            if (novoCard && novoCard instanceof HTMLElement) {
                console.log("✅ SUCESSO: Card PAUTADO criado!");
                console.log("🎯 Tipo do elemento:", novoCard.constructor.name);
                console.log("🎯 ID:", novoCard.id);
                console.log("🎯 Classes:", novoCard.className);

                // 7. Inserir na página
                const targetLocation =
                    document.querySelector(".infraBarraComandosSuperior") ||
                    document.querySelector("#divInfraBarraComandosSuperior") ||
                    document.body;

                if (targetLocation) {
                    targetLocation.appendChild(novoCard);
                    console.log("✅ Card PAUTADO inserido na página!");

                    // 8. Verificar visibilidade
                    const rect = novoCard.getBoundingClientRect();
                    console.log("📐 Posição e tamanho:", {
                        width: rect.width,
                        height: rect.height,
                        top: rect.top,
                        left: rect.left,
                        visible: rect.width > 0 && rect.height > 0,
                    });

                    // 9. Testar interatividade após um delay
                    setTimeout(() => {
                        console.log("🖱️ Testando efeitos hover...");
                        novoCard.dispatchEvent(
                            new MouseEvent("mouseenter", { bubbles: true })
                        );
                        setTimeout(() => {
                            novoCard.dispatchEvent(
                                new MouseEvent("mouseleave", { bubbles: true })
                            );
                            console.log("✅ Efeitos de hover testados!");
                        }, 1000);
                    }, 500);
                } else {
                    console.warn(
                        "⚠️ Não foi possível encontrar local para inserir o card"
                    );
                    document.body.appendChild(novoCard);
                    console.log("✅ Card inserido no body como fallback");
                }
            } else {
                console.error(
                    "❌ ERRO: Card retornou valor inválido:",
                    typeof novoCard,
                    novoCard
                );
            }
        } catch (error) {
            console.error("❌ ERRO AO CRIAR CARD:", error);
            console.error("Stack trace:", error.stack);
        }
    } else {
        console.error("❌ ERRO: Função criarCardMaterialDesign não encontrada");
        console.log("Funções disponíveis:", Object.keys(window.SENT1_AUTO));
    }
}

console.log("🏁 TESTE FINAL CONCLUÍDO");
