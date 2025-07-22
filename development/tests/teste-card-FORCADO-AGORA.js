// 🧪 TESTE FORÇADO - CRIAÇÃO DIRETA DO CARD
console.log("🧪 TESTE FORÇADO: Iniciando criação direta do card...");

// Função para criar card de teste imediatamente
function testarCardForcadoAgora() {
    try {
        console.log("🎯 TESTE: Criando card forçado AGORA");

        // Dados de teste simulados
        const cardInfo = {
            data: "15/01/2025",
            tipo: "Julgamento",
            status: "Pautado",
            orgao: "CAMCIV2",
            cor: "#1976D2"
        };

        console.log("📋 DADOS DO CARD:", cardInfo);

        // Verificar se função existe
        if (typeof window.SENT1_AUTO?.criarCardSessaoMaterial === 'function') {
            console.log("✅ FUNÇÃO: criarCardSessaoMaterial encontrada");
            const resultado = window.SENT1_AUTO.criarCardSessaoMaterial(cardInfo);
            console.log("🎯 RESULTADO:", resultado);
            return resultado;
        } else {
            console.log("❌ FUNÇÃO: criarCardSessaoMaterial NÃO encontrada");
            console.log("🔍 NAMESPACE DISPONÍVEL:", Object.keys(window.SENT1_AUTO || {}));
            return false;
        }

    } catch (error) {
        console.error("❌ TESTE: Erro ao criar card forçado:", error);
        return false;
    }
}

// Executar teste imediatamente
const resultadoTeste = testarCardForcadoAgora();
console.log("🎯 RESULTADO FINAL DO TESTE:", resultadoTeste);

// Verificar se card foi criado no DOM
setTimeout(() => {
    const cardNoDom = document.getElementById("eprobe-card-sessao-material");
    if (cardNoDom) {
        console.log("✅ SUCESSO: Card encontrado no DOM!");
        console.log("📍 POSIÇÃO:", cardNoDom.style.position, cardNoDom.style.top, cardNoDom.style.right);
    } else {
        console.log("❌ FALHA: Card NÃO encontrado no DOM");
        console.log("🔍 ELEMENTS COM ID eprobe:", document.querySelectorAll('[id*="eprobe"]'));
    }
}, 1000);
