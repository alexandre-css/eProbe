// 🔍 VERIFICAÇÃO ULTRA-SIMPLES DA EXTENSÃO
// Cole este código no console da página do eProc

console.log("🔍 VERIFICAÇÃO BÁSICA DA EXTENSÃO eProbe");
console.log("=========================================");

// 1. Verificar URL
console.log("📍 URL atual:", window.location.href);
console.log("📍 É eProc:", window.location.href.includes("eproc"));

// 2. Verificar contexto da extensão
console.log("🔌 Chrome disponível:", typeof chrome !== "undefined");
console.log("🔌 Runtime disponível:", typeof chrome?.runtime !== "undefined");

// 3. Verificar se content script carregou
console.log("📜 window.SENT1_AUTO:", typeof window.SENT1_AUTO);

if (typeof window.SENT1_AUTO === "undefined") {
    console.log("\n❌ PROBLEMA: Content script NÃO foi carregado!");
    console.log("\n🔧 SOLUÇÕES:");
    console.log("1. Verifique se está em uma página do eProc");
    console.log("2. Pressione F5 para recarregar a página");
    console.log("3. Vá em edge://extensions/ e verifique se eProbe está ativo");
    console.log("4. Clique no botão 'Atualizar' da extensão se necessário");
    console.log("5. Se persistir, desabilite e reabilite a extensão");

    console.log("\n🚨 CRIANDO NAMESPACE DE EMERGÊNCIA...");

    // Criar namespace mínimo
    window.SENT1_AUTO = {
        status: "emergencia",
        carregado: new Date().toISOString(),

        // Função básica para criar card
        criarCard: function () {
            console.log("🚨 Criando card de emergência...");

            const card = document.createElement("div");
            card.id = "eprobe-data-sessao";
            card.innerHTML = `
                <div style="
                    position: fixed; 
                    top: 20px; 
                    right: 20px; 
                    background: #fff3cd; 
                    border: 1px solid #ffeaa7; 
                    border-radius: 8px; 
                    padding: 15px; 
                    max-width: 300px; 
                    z-index: 99999;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    font-family: Arial, sans-serif;
                ">
                    <h6 style="margin: 0 0 10px 0; color: #856404;">
                        ⚠️ eProbe - Modo Emergência
                    </h6>
                    <p style="margin: 0 0 5px 0; font-size: 14px;">
                        Content script não carregou corretamente
                    </p>
                    <small style="color: #6c757d;">
                        Recarregue a página ou reinstale a extensão
                    </small>
                </div>
            `;

            document.body.appendChild(card);
            console.log("✅ Card de emergência criado!");

            // Remover após 10 segundos
            setTimeout(() => {
                if (card && card.parentNode) {
                    card.remove();
                    console.log("🗑️ Card de emergência removido");
                }
            }, 10000);

            return true;
        },

        // Função de diagnóstico
        diagnostico: function () {
            return {
                url: window.location.href,
                eProc: window.location.href.includes("eproc"),
                chrome: typeof chrome !== "undefined",
                runtime: typeof chrome?.runtime !== "undefined",
                timestamp: new Date().toISOString(),
            };
        },
    };

    console.log("✅ Namespace de emergência criado!");
    console.log("📋 COMANDOS DISPONÍVEIS:");
    console.log("- window.SENT1_AUTO.criarCard()");
    console.log("- window.SENT1_AUTO.diagnostico()");
} else {
    console.log("\n✅ SUCESSO: Content script foi carregado!");

    // Verificar quantas funções estão disponíveis
    const totalFuncoes = Object.keys(window.SENT1_AUTO).length;
    console.log(`📊 Total de propriedades: ${totalFuncoes}`);

    // Verificar funções específicas
    const funcoesImportantes = [
        "testarCriacaoCard",
        "forcarInsercaoCardSemValidacao",
        "hasDataSessaoPautado",
        "detectarDataSessao",
    ];

    console.log("🔍 FUNÇÕES IMPORTANTES:");
    let funcionaisCount = 0;
    funcoesImportantes.forEach((funcao) => {
        const existe = typeof window.SENT1_AUTO[funcao] === "function";
        if (existe) funcionaisCount++;
        console.log(`${existe ? "✅" : "❌"} ${funcao}`);
    });

    if (funcionaisCount === funcoesImportantes.length) {
        console.log("\n🎉 PERFEITO! Todas as funções estão disponíveis!");
        console.log("🚀 EXECUTE AGORA:");
        console.log("window.SENT1_AUTO.testarCriacaoCard()");
    } else {
        console.log(
            `\n⚠️ ATENÇÃO: ${funcionaisCount}/${funcoesImportantes.length} funções disponíveis`
        );
        console.log("💡 Tente recarregar a página");
    }
}

console.log("\n" + "=".repeat(50));
console.log("✅ VERIFICAÇÃO CONCLUÍDA");
