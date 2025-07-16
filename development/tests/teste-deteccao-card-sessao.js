// 🧪 TESTE IMEDIATO - Detecção de Card de Sessão
// Execute este código no console da página do eProc para testar

console.log("🚀 TESTE: Iniciando teste de detecção de card de sessão");

// 1. Verificar se namespace existe
if (typeof window.SENT1_AUTO === "undefined") {
    console.log("❌ ERRO: window.SENT1_AUTO não está definido");
    console.log("💡 SOLUÇÃO: Recarregue a página ou carregue a extensão");
} else {
    console.log("✅ NAMESPACE: window.SENT1_AUTO encontrado");
    console.log("📋 FUNÇÕES:", Object.keys(window.SENT1_AUTO));
}

// 2. Testar detecção direta
console.log(
    "\n🔍 TESTE: Verificando botões infraLegendObrigatorio.btn.btn-link.btn-sm.p-0..."
);
const botoesInfra = document.querySelectorAll(
    "button.infraLegendObrigatorio.btn.btn-link.btn-sm.p-0"
);
console.log(`📊 RESULTADO: ${botoesInfra.length} botões encontrados`);

if (botoesInfra.length > 0) {
    botoesInfra.forEach((botao, index) => {
        const texto = botao.textContent || botao.innerText || "";
        console.log(`\n📄 BOTÃO ${index + 1}:`);
        console.log(`   Texto: ${texto.substring(0, 200)}...`);

        if (texto.includes("em Pauta em")) {
            console.log("   ✅ PADRÃO ENCONTRADO!");

            // Testar todos os padrões de regex
            const padroes = [
                {
                    regex: /([A-Za-zÀ-ÿ\s]+)\s*\(Retirado em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/i,
                    status: "Retirado",
                },
                {
                    regex: /([A-Za-zÀ-ÿ\s]+)\s*\(Julgado em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/i,
                    status: "Julgado",
                },
                {
                    regex: /([A-Za-zÀ-ÿ\s]+)\s*\(Incluído em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/i,
                    status: "Pautado",
                },
            ];

            for (const padrao of padroes) {
                const match = texto.match(padrao.regex);
                if (match) {
                    console.log(`   🎯 REGEX MATCH! Status: ${padrao.status}`);
                    console.log(`   - Tipo: ${match[1].trim()}`);
                    console.log(`   - Data: ${match[2]}`);
                    console.log(`   - Órgão: ${match[3]}`);
                    break;
                }
            }
        } else {
            console.log("   ⚪ Padrão não encontrado");
        }
    });
} else {
    console.log("⚠️ FALLBACK: Testando todos os botões...");
    const todosBotoes = document.querySelectorAll("button");
    let encontrado = false;

    for (let botao of todosBotoes) {
        const texto = botao.textContent || botao.innerText || "";
        if (texto.includes("em Pauta em")) {
            console.log(`\n✅ FALLBACK SUCESSO - Botão ${index + 1}:`);
            console.log(`   ${texto.substring(0, 200)}...`);

            // Verificar qual padrão específico
            if (texto.includes("Retirado em Pauta em")) {
                console.log("   🔴 STATUS: Retirado em Pauta");
            } else if (texto.includes("Julgado em Pauta em")) {
                console.log("   🟢 STATUS: Julgado em Pauta");
            } else if (texto.includes("Incluído em Pauta em")) {
                console.log("   🔵 STATUS: Incluído em Pauta");
            }

            encontrado = true;
        }
    }

    if (!encontrado) {
        console.log("❌ NENHUM botão com padrão encontrado");
    }
}

// 3. Testar função específica se existir
if (window.SENT1_AUTO && window.SENT1_AUTO.testarDeteccaoCard) {
    console.log("\n🧪 EXECUTANDO: window.SENT1_AUTO.testarDeteccaoCard()");
    const resultado = window.SENT1_AUTO.testarDeteccaoCard();
    console.log("📊 RESULTADO DO TESTE:", resultado);
} else {
    console.log("\n❌ Função testarDeteccaoCard não disponível");
}

// 4. Verificar se card já existe
const cardExistente = document.getElementById("eprobe-data-sessao");
if (cardExistente) {
    console.log("\n✅ CARD: Card de sessão já existe na página");
    console.log("📋 DADOS:", {
        id: cardExistente.id,
        visivel:
            cardExistente.offsetWidth > 0 && cardExistente.offsetHeight > 0,
        processo: cardExistente.getAttribute("data-processo"),
        posicao: cardExistente.style.position || "static",
    });
} else {
    console.log("\n❌ CARD: Nenhum card de sessão encontrado");
}

console.log("\n🏁 TESTE CONCLUÍDO");
