/**
 * TESTE SUPER SIMPLES - Card Material Design
 * Execute no console do eProc:
 * 1. Copie este código
 * 2. Cole no console
 * 3. Pressione Enter
 *
 * Deve aparecer um card Material Design na página
 */

console.log("🧪 INICIANDO TESTE SIMPLES DO CARD");

// 1. CSS básico para garantir que o card apareça
const cssBasico = `
#teste-card-simples {
    position: fixed !important;
    top: 20px !important;
    right: 20px !important;
    z-index: 99999 !important;
    background: white !important;
    border: 2px solid #1976d2 !important;
    border-radius: 8px !important;
    padding: 16px !important;
    box-shadow: 0 4px 16px rgba(0,0,0,0.2) !important;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    font-size: 14px !important;
    max-width: 300px !important;
    color: #333 !important;
}

#teste-card-simples .header {
    font-weight: bold !important;
    color: #1976d2 !important;
    margin-bottom: 8px !important;
    display: flex !important;
    align-items: center !important;
    gap: 8px !important;
}

#teste-card-simples .status {
    background: #e3f2fd !important;
    color: #1976d2 !important;
    padding: 4px 8px !important;
    border-radius: 4px !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    margin: 8px 0 !important;
}

#teste-card-simples .info {
    margin: 4px 0 !important;
    font-size: 13px !important;
}

#teste-card-simples .close {
    position: absolute !important;
    top: 8px !important;
    right: 8px !important;
    background: none !important;
    border: none !important;
    font-size: 16px !important;
    cursor: pointer !important;
    color: #666 !important;
}
`;

// 2. Aplicar CSS
const style = document.createElement("style");
style.textContent = cssBasico;
document.head.appendChild(style);
console.log("✅ CSS aplicado");

// 3. Remover card existente se houver
const cardExistente = document.getElementById("teste-card-simples");
if (cardExistente) {
    cardExistente.remove();
    console.log("🗑️ Card anterior removido");
}

// 4. Criar card super simples
const card = document.createElement("div");
card.id = "teste-card-simples";
card.innerHTML = `
    <button class="close" onclick="this.parentElement.remove()">×</button>
    <div class="header">
        <span>📋</span>
        <span>Teste Card eProbe</span>
    </div>
    <div class="status">TESTE ATIVO</div>
    <div class="info"><strong>Data:</strong> ${new Date().toLocaleString(
        "pt-BR"
    )}</div>
    <div class="info"><strong>Status:</strong> Card funcionando!</div>
    <div class="info"><strong>Tipo:</strong> Teste Material Design</div>
    <div style="margin-top: 12px; font-size: 11px; color: #666; border-top: 1px solid #eee; padding-top: 8px;">
        ✅ Se você está vendo isto, o card está funcionando!
    </div>
`;

// 5. Inserir no body (método garantido)
document.body.appendChild(card);

console.log("✅ TESTE CONCLUÍDO - Card inserido!");
console.log("📍 Procure o card no canto superior direito da página");
console.log(
    "❌ Para remover: clique no X ou execute: document.getElementById('teste-card-simples').remove()"
);

// 6. Verificação automática
setTimeout(() => {
    const cardVerif = document.getElementById("teste-card-simples");
    if (cardVerif) {
        const rect = cardVerif.getBoundingClientRect();
        console.log("📏 Card encontrado! Dimensões:", {
            largura: rect.width,
            altura: rect.height,
            visível: rect.width > 0 && rect.height > 0,
        });

        // Piscar para chamar atenção
        cardVerif.style.animation = "blink 0.5s 3 alternate";
        const blinkStyle = document.createElement("style");
        blinkStyle.textContent = `
            @keyframes blink {
                0% { opacity: 1; }
                100% { opacity: 0.3; }
            }
        `;
        document.head.appendChild(blinkStyle);
    } else {
        console.log("❌ ERRO: Card não encontrado após inserção!");
    }
}, 500);
