// 🧪 TESTE CARD PAUTADO - PRIMEIRO CARD FIGMA IMPLEMENTADO
// Cole este código no console do eProc para testar o Card PAUTADO

console.log("🧪 INICIANDO TESTE DO CARD PAUTADO (#5C85B4)");

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
            status: "PAUTADO",
            data: "29/01/2025",
            dataSessao: "29/01/2025",
            dataCompleta: "29/01/2025",
        };

        // 4. Remover card existente se houver
        const cardExistente = document.getElementById("eprobe-data-sessao");
        if (cardExistente) {
            cardExistente.remove();
            console.log("🗑️ Card existente removido");
        }

        // 5. Criar novo card PAUTADO
        console.log("🎨 Criando card PAUTADO com dados:", dadosTeste);
        const novoCard = window.SENT1_AUTO.criarCardMaterialDesign(dadosTeste);

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
            } else {
                console.warn(
                    "⚠️ Não foi possível encontrar local para inserir o card"
                );
            }
        } else {
            console.error("❌ ERRO: Card PAUTADO não foi criado");
        }
    } else {
        console.error("❌ ERRO: Função criarCardMaterialDesign não encontrada");
        console.log("Funções disponíveis:", Object.keys(window.SENT1_AUTO));
    }
}

console.log("🏁 TESTE CONCLUÍDO");
