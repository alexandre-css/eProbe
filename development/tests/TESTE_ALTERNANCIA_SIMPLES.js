// COMANDO SIMPLES PARA TESTAR A ALTERNÂNCIA NO ePROC
// Copie e cole este código no console do navegador na página do eProc

// Teste rápido da alternância
console.log("🔄 TESTE ALTERNÂNCIA: Iniciando...");

// 1. Verificar se o sistema foi carregado
if (
    typeof window.SENT1_AUTO !== "undefined" &&
    window.SENT1_AUTO.debugAlternanciaEproc
) {
    console.log("✅ Sistema carregado, executando teste...");
    const resultado = window.SENT1_AUTO.debugAlternanciaEproc();
    console.log("📊 Resultado:", resultado);
} else {
    console.log(
        "❌ Sistema não carregado. Verificando elementos manualmente..."
    );

    // Verificação manual
    const minutas = document.getElementById("conteudoInternoMinutas_0");
    const onclick = document.querySelectorAll(
        '[onclick*="infraAbrirFecharElementoHTML"]'
    );
    const containers = document.querySelectorAll("div[data-expanded]");

    console.log(`📊 Elementos encontrados:`);
    console.log(`   - Minutas: ${minutas ? "✅" : "❌"}`);
    console.log(`   - Onclick: ${onclick.length}`);
    console.log(`   - Containers: ${containers.length}`);
}

// 2. Teste do findToggleTarget se disponível
if (
    typeof window.SENT1_AUTO !== "undefined" &&
    window.SENT1_AUTO.findToggleTarget
) {
    console.log("🎯 Testando findToggleTarget...");
    const testElements = document.querySelectorAll(
        '[onclick*="infraAbrirFecharElementoHTML"]'
    );
    testElements.forEach((element, index) => {
        console.log(`Teste ${index + 1}:`, element);
        try {
            const target = window.SENT1_AUTO.findToggleTarget(element);
            console.log(`   ${target ? "✅" : "❌"} Target:`, target);
        } catch (error) {
            console.log(`   ⚠️ Erro:`, error.message);
        }
    });
}

console.log("🏁 TESTE FINALIZADO");
