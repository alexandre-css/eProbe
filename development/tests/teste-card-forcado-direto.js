/**
 * 🎯 TESTE FORÇADO DO CARD - DIAGNÓSTICO COMPLETO
 * Cria card diretamente no console sem depender da detecção
 */

console.log("🎯 TESTE FORÇADO: Iniciando criação direta do card...");

// 1. REMOVER CARDS EXISTENTES
console.log("\n🗑️ 1. LIMPEZA:");
const cardsExistentes = document.querySelectorAll('[id*="eprobe"], [id*="sessao"], [id*="data"]');
console.log(`📊 Cards existentes encontrados: ${cardsExistentes.length}`);
cardsExistentes.forEach((card, index) => {
    console.log(`  ${index + 1}. ${card.id} (${card.tagName})`);
    card.remove();
});

// 2. CRIAR CARD MATERIAL DESIGN DIRETAMENTE
console.log("\n🎨 2. CRIAÇÃO DIRETA DO CARD:");

const card = document.createElement("div");
card.id = "eprobe-card-teste-forcado";
card.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    z-index: 10000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    min-width: 320px;
    max-width: 380px;
    overflow: hidden;
    animation: slideIn 0.3s ease-out;
`;

card.innerHTML = `
    <style>
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    </style>
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 16px; position: relative;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 20px;">📅</span>
            <div>
                <div style="font-weight: 600; font-size: 16px;">Sessão Detectada</div>
                <div style="font-size: 14px; opacity: 0.9;">19/03/2024</div>
            </div>
        </div>
        <button onclick="this.closest('div[id*=eprobe]').remove()" style="
            position: absolute;
            top: 8px;
            right: 8px;
            background: rgba(255,255,255,0.2);
            border: none;
            color: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 16px;
            opacity: 0.8;
        ">×</button>
    </div>
    <div style="padding: 16px;">
        <div style="margin-bottom: 12px;">
            <div style="font-size: 12px; color: #6b7280; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Tipo</div>
            <div style="font-size: 14px; color: #374151; font-weight: 500;">Embargos de Declaração</div>
        </div>
        <div style="margin-bottom: 12px;">
            <div style="font-size: 12px; color: #6b7280; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Status</div>
            <div style="font-size: 14px; color: #374151; font-weight: 500;">Julgado em Pauta</div>
        </div>
        <div>
            <div style="font-size: 12px; color: #6b7280; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Órgão</div>
            <div style="font-size: 14px; color: #374151; font-weight: 500;">5ª Câmara de Direito Público</div>
        </div>
    </div>
`;

// 3. INSERIR NO DOM
console.log("📍 Inserindo card no DOM...");
document.body.appendChild(card);

// 4. VERIFICAR SE FOI INSERIDO
setTimeout(() => {
    console.log("\n✅ 3. VERIFICAÇÃO:");
    const cardInserido = document.getElementById("eprobe-card-teste-forcado");
    if (cardInserido) {
        console.log("✅ SUCESSO: Card inserido e encontrado no DOM!");
        console.log("📍 Posição:", cardInserido.getBoundingClientRect());
        console.log("🎨 Estilos aplicados:", {
            position: cardInserido.style.position,
            top: cardInserido.style.top,
            right: cardInserido.style.right,
            zIndex: cardInserido.style.zIndex,
            display: getComputedStyle(cardInserido).display
        });
        
        // 5. TESTAR DADOS ORIGINAIS
        console.log("\n📊 4. DADOS ORIGINAIS DO SISTEMA:");
        console.log("dataSessaoPautado:", window.dataSessaoPautado);
        console.log("processoComDataSessao:", window.processoComDataSessao);
        console.log("dadosCompletosMinutas:", window.dadosCompletosMinutas);
        
        if (window.SENT1_AUTO) {
            console.log("hasDataSessaoPautado():", window.SENT1_AUTO.hasDataSessaoPautado?.());
            console.log("getDataSessaoPautado():", window.SENT1_AUTO.getDataSessaoPautado?.());
        }
        
    } else {
        console.log("❌ ERRO: Card não encontrado no DOM após inserção!");
        
        // Debug: listar todos os elementos no body
        console.log("🔍 Elementos no body:");
        Array.from(document.body.children).forEach((el, i) => {
            console.log(`  ${i + 1}. ${el.tagName}#${el.id || 'sem-id'}.${el.className || 'sem-class'}`);
        });
    }
}, 1000);

console.log("\n🎯 TESTE CONCLUÍDO - Verificar card no canto superior direito!");
console.log("💡 DICA: Se o card aparecer, o problema é na função de detecção, não na criação do card.");
