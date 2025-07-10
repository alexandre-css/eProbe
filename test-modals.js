// Script de teste para verificar se os modais funcionam corretamente
// Execute este script no console do navegador em uma página do eProc

console.log("🧪 Iniciando teste dos modais customizados da extensão eProbe...");

// Testar showAlert
setTimeout(async () => {
    console.log("Testando modal showAlert...");
    try {
        await showAlert(
            "Este é um teste do modal showAlert!\n\nO modal deve aparecer com visual premium e animações suaves.",
            "info"
        );
        console.log("✅ Modal showAlert funcionou corretamente");

        // Testar showConfirm
        console.log("Testando modal showConfirm...");
        const result = await showConfirm(
            "Deseja continuar com o teste?\n\nEste é o modal de confirmação personalizado.",
            "Teste de Confirmação"
        );
        console.log(
            `✅ Modal showConfirm funcionou corretamente. Resultado: ${
                result ? "Confirmado" : "Cancelado"
            }`
        );

        console.log(
            "🎉 Todos os testes dos modais foram concluídos com sucesso!"
        );
    } catch (error) {
        console.error("❌ Erro durante o teste dos modais:", error);
    }
}, 1000);
