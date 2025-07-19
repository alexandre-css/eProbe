// 🎨 TESTE RÁPIDO - DESIGNS FIGMA EPROBE
// Execute este código no console do navegador em uma página do eProc

// 1. TESTE SIMPLES - CARD ÚNICO
console.log("🎨 INICIANDO TESTE DOS DESIGNS FIGMA...");

// Testar um card com status "Julgado"
window.SENT1_AUTO.testarDesignFigma("Julgado");

// 2. TESTE COMPLETO - TODOS OS DESIGNS
// Descomente a linha abaixo para ver todos os 8 designs simultaneamente:
// window.SENT1_AUTO.testarTodosDesignsFigma();

// 3. TESTE DE CONFIGURAÇÃO
console.log("📊 TESTANDO CONFIGURAÇÕES DE STATUS:");

const statusParaTeste = [
    "Julgado",
    "Retirado",
    "Sobrestado (art. 942)",
    "Pedido de Vista",
    "Pautado",
    "Adiado (art. 935)",
    "Adiado",
    "Conv. em Diligência",
];

statusParaTeste.forEach((status) => {
    const config = window.SENT1_AUTO.obterConfigFigmaStatus(status);
    console.log(`🎨 ${status}:`, {
        cor: config.cor,
        fundo: config.corFundo,
        descricao: config.descricao,
    });
});

// 4. TESTE COM MÚLTIPLAS SESSÕES
console.log("🔄 TESTANDO MÚLTIPLAS SESSÕES:");

const dadosMultiplos = {
    data: "15/01/2025",
    status: "Julgado",
    statusOriginal: "Julgado",
    totalSessoes: 4,
    todasSessoes: [
        {
            data: "15/01/2025",
            status: "Julgado",
            statusOriginal: "Julgado",
        },
        {
            data: "08/01/2025",
            status: "Pautado",
            statusOriginal: "Pautado",
        },
        {
            data: "20/12/2024",
            status: "Adiado",
            statusOriginal: "Adiado em Pauta",
        },
        {
            data: "10/12/2024",
            status: "Retirado",
            statusOriginal: "Retirado de Pauta",
        },
    ],
};

const cardMultiplo = window.SENT1_AUTO.criarCardMaterialDesign(dadosMultiplos);
console.log("✅ CARD COM MÚLTIPLAS SESSÕES:", cardMultiplo);

// 5. INSTRUÇÕES PARA TESTAR OUTROS STATUS
console.log("\n🎯 COMO TESTAR OUTROS STATUS:");
console.log("window.SENT1_AUTO.testarDesignFigma('Retirado')");
console.log("window.SENT1_AUTO.testarDesignFigma('Sobrestado (art. 942)')");
console.log("window.SENT1_AUTO.testarDesignFigma('Pedido de Vista')");
console.log("window.SENT1_AUTO.testarDesignFigma('Pautado')");
console.log("window.SENT1_AUTO.testarDesignFigma('Adiado (art. 935)')");
console.log("window.SENT1_AUTO.testarDesignFigma('Adiado')");
console.log("window.SENT1_AUTO.testarDesignFigma('Conv. em Diligência')");

console.log("\n✅ TESTE CONCLUÍDO! Cards Figma implementados com sucesso!");
