// 🚨 CORREÇÃO DE EMERGÊNCIA PARA LOOP INFINITO
// Execute este script no console da página para parar o loop imediatamente

console.log("🚨 CORREÇÃO EMERGÊNCIA: Parando loop infinito...");

// 1. Desabilitar todas as funções que causam loop
if (typeof window.SENT1_AUTO === "object") {
    // Substituir funções problemáticas por versões seguras
    window.SENT1_AUTO.detectarDataSessao = function () {
        console.log(
            "🛑 LOOP BLOQUEADO: detectarDataSessao desabilitada temporariamente"
        );
        return null;
    };

    window.SENT1_AUTO.detectarCardSessaoSimplificado = function () {
        console.log(
            "🛑 LOOP BLOQUEADO: detectarCardSessaoSimplificado desabilitada temporariamente"
        );
        return null;
    };

    window.SENT1_AUTO.obterNumeroProcesso = function () {
        console.log(
            "🛑 LOOP BLOQUEADO: obterNumeroProcesso com cache estático"
        );
        return "0322486-21.2015.8.24.0038"; // Número do processo fixo
    };

    window.SENT1_AUTO.detectarEConfigurarTooltipUnificado = function () {
        console.log(
            "🛑 LOOP BLOQUEADO: detectarEConfigurarTooltipUnificado desabilitada temporariamente"
        );
        return null;
    };
}

// 2. Limpar timers ativos
if (typeof debounceTimers !== "undefined") {
    debounceTimers.forEach((timer) => clearTimeout(timer));
    debounceTimers.clear();
}

// 3. Limpar intervalos e timeouts globais
for (let i = 1; i < 10000; i++) {
    clearTimeout(i);
    clearInterval(i);
}

// 4. Parar RequestAnimationFrame
for (let i = 1; i < 1000; i++) {
    cancelAnimationFrame(i);
}

// 5. Resetar variáveis de controle
if (typeof detectarDataSessaoExecutando !== "undefined") {
    detectarDataSessaoExecutando = false;
}

if (typeof detectarCardSessaoExecutando !== "undefined") {
    detectarCardSessaoExecutando = false;
}

console.log(
    "✅ EMERGÊNCIA: Loop interrompido - recarregue a página para funcionalidade normal"
);

// 6. Mostrar alerta visual
const alertDiv = document.createElement("div");
alertDiv.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #ff4444;
    color: white;
    padding: 15px;
    border-radius: 8px;
    z-index: 999999;
    font-family: monospace;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
`;
alertDiv.innerHTML = `
    🚨 Loop Infinito Interrompido<br>
    Recarregue a página para funcionalidade normal
`;
document.body.appendChild(alertDiv);

// Remover alerta após 10 segundos
setTimeout(() => {
    if (alertDiv.parentNode) {
        alertDiv.parentNode.removeChild(alertDiv);
    }
}, 10000);
