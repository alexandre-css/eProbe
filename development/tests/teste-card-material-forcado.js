/**
 * 🧪 TESTE DO CARD MATERIAL DESIGN MELHORADO
 * Executa teste completo do sistema de detecção e criação de card
 */

console.log("🧪 INICIANDO TESTE DO CARD MATERIAL DESIGN...");

// Forçar criação do card
function testarCardMaterialForcado() {
    console.log("🚀 TESTE: Forçando criação do card Material Design");
    
    try {
        // Executar detecção de sessões
        console.log("1️⃣ Executando detecção de sessões...");
        const dados = window.SENT1_AUTO.detectarCardSessaoSimplificado();
        console.log("📊 Dados detectados:", dados);
        
        // Verificar se a função de criar card existe
        console.log("2️⃣ Verificando função de criar card...");
        if (typeof window.SENT1_AUTO.inserirDataSessaoNaInterface === 'function') {
            console.log("✅ Função encontrada!");
            
            // Executar criação do card
            console.log("3️⃣ Criando card...");
            const sucesso = window.SENT1_AUTO.inserirDataSessaoNaInterface();
            console.log("🎯 Resultado:", sucesso ? "✅ SUCESSO" : "❌ FALHOU");
            
            // Verificar se o card foi criado no DOM
            const cardCriado = document.getElementById("eprobe-data-sessao");
            console.log("4️⃣ Card no DOM:", cardCriado ? "✅ ENCONTRADO" : "❌ NÃO ENCONTRADO");
            
            if (cardCriado) {
                console.log("🎉 TESTE COMPLETO: Card Material Design criado com sucesso!");
                return true;
            } else {
                console.log("⚠️ PROBLEMA: Card não apareceu no DOM");
                return false;
            }
        } else {
            console.log("❌ Função inserirDataSessaoNaInterface não encontrada");
            return false;
        }
    } catch (error) {
        console.error("💥 ERRO no teste:", error);
        return false;
    }
}

// Executar teste
console.log("🎬 EXECUTANDO TESTE...");
const resultado = testarCardMaterialForcado();
console.log(`🏁 RESULTADO FINAL: ${resultado ? "✅ SUCESSO" : "❌ FALHOU"}`);

// Se falhou, tentar debug adicional
if (!resultado) {
    console.log("🔍 DEBUG ADICIONAL:");
    console.log("- Namespace disponível:", typeof window.SENT1_AUTO);
    console.log("- Função detectar:", typeof window.SENT1_AUTO?.detectarCardSessaoSimplificado);
    console.log("- Função inserir:", typeof window.SENT1_AUTO?.inserirDataSessaoNaInterface);
    console.log("- Dados em cache:", window.SENT1_AUTO?.hasDataSessaoPautado?.());
}
