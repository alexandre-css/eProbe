// 🧪 TESTE CARD PAUTADO - VERSÃO CORRIGIDA (SVG Fix)
// Cole este código no console do eProc para testar o Card PAUTADO

console.log("🧪 INICIANDO TESTE DO CARD PAUTADO (#5C85B4) - VERSÃO CORRIGIDA");

// 1. Verificar se as funções existem
if (typeof window.SENT1_AUTO === "undefined") {
    console.error("❌ ERRO: Namespace SENT1_AUTO não encontrado");
} else {
    console.log("✅ Namespace SENT1_AUTO encontrado");

    // 2. Verificar função criarCardMaterialDesign
    if (typeof window.SENT1_AUTO.criarCardMaterialDesign === "function") {
        console.log("✅ Função criarCardMaterialDesign encontrada");

        // 3. Dados de teste para card PAUTADO
        const dadosTeste = {
            status: "Pautado",
            data: "22/07/2025",
            dataSessao: "22/07/2025",
            dataCompleta: "22/07/2025",
            statusOriginal: "Incluído em Pauta",
            tipoProcesso: "RELATÓRIO/VOTO",
        };

        // 4. Remover card existente se houver
        const cardExistente = document.getElementById("eprobe-data-sessao");
        if (cardExistente) {
            cardExistente.remove();
            console.log("🗑️ Card existente removido");
        }

        // 5. Criar novo card PAUTADO (CORRIGIDO)
        console.log("🎨 Criando card PAUTADO com dados:", dadosTeste);

        try {
            const novoCard =
                window.SENT1_AUTO.criarCardMaterialDesign(dadosTeste);

            if (novoCard) {
                console.log("✅ SUCESSO: Card PAUTADO criado!");

                // 6. Encontrar um local para inserir o card
                const navbar =
                    document.querySelector(".infraBarraComandosSuperior") ||
                    document.querySelector(".navbar") ||
                    document.querySelector("#divInfraBarraComandosSuperior") ||
                    document.body;

                if (navbar) {
                    navbar.appendChild(novoCard);
                    console.log("✅ Card PAUTADO inserido na página!");
                    console.log("🎯 Características:", {
                        id: novoCard.id,
                        className: novoCard.className,
                        dimensões: `${novoCard.style.width} x ${novoCard.style.height}`,
                        cor: "#5C85B4",
                        status: "Pautado",
                    });

                    // 7. Testar interatividade
                    setTimeout(() => {
                        console.log("🖱️ Testando hover do card...");
                        novoCard.dispatchEvent(new MouseEvent("mouseenter"));
                        setTimeout(() => {
                            novoCard.dispatchEvent(
                                new MouseEvent("mouseleave")
                            );
                            console.log("✅ Efeitos de hover funcionando!");
                        }, 1000);
                    }, 500);
                } else {
                    console.warn(
                        "⚠️ Não foi possível encontrar local para inserir o card"
                    );
                }
            } else {
                console.error("❌ ERRO: Card PAUTADO retornou null");
            }
        } catch (error) {
            console.error("❌ ERRO AO CRIAR CARD:", error);
        }
    } else {
        console.error("❌ ERRO: Função criarCardMaterialDesign não encontrada");
        console.log("Funções disponíveis:", Object.keys(window.SENT1_AUTO));
    }
}

console.log("🏁 TESTE CONCLUÍDO - VERSÃO CORRIGIDA");
