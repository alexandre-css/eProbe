// 🎯 TESTE RÁPIDO - Cole no console do eProc

console.log("🎯 TESTE: Criando card direto...");

// Remover cards existentes
document.querySelectorAll('[id*="eprobe"], [id*="teste"]').forEach(el => el.remove());

// Criar card simples
const cardTeste = document.createElement("div");
cardTeste.id = "card-teste-direto";
cardTeste.style.cssText = "position:fixed;top:80px;right:20px;background:white;border:2px solid #1976d2;border-radius:12px;padding:16px;z-index:10000;min-width:300px;box-shadow:0 8px 24px rgba(0,0,0,0.15);font-family:system-ui;";

cardTeste.innerHTML = `
<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;color:#1976d2;font-weight:600;">
    📅 <span>Sessão Detectada</span>
    <button onclick="this.closest('div').remove()" style="margin-left:auto;background:none;border:none;font-size:18px;cursor:pointer;color:#666;">×</button>
</div>
<div style="border-top:1px solid #eee;padding-top:12px;">
    <div style="margin-bottom:8px;"><strong>Data:</strong> 19/03/2024</div>
    <div style="margin-bottom:8px;"><strong>Status:</strong> Julgado em Pauta</div>
    <div style="margin-bottom:8px;"><strong>Órgão:</strong> 5ª Câmara de Direito Público</div>
    <div><strong>Tipo:</strong> Embargos de Declaração</div>
</div>
`;

document.body.appendChild(cardTeste);

// Verificar se foi inserido
setTimeout(() => {
    const verificar = document.getElementById("card-teste-direto");
    if (verificar) {
        console.log("✅ SUCESSO: Card criado e visível!");
        console.log("📍 Elemento:", verificar);
        console.log("📊 Posição:", verificar.getBoundingClientRect());
    } else {
        console.log("❌ ERRO: Card não encontrado!");
    }
}, 100);

console.log("🎯 Verifique o canto superior direito da página!");
