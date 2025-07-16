// 🚨 SCRIPT DE EMERGÊNCIA - FORÇAR CRIAÇÃO DO NAMESPACE
// Execute este script se window.SENT1_AUTO estiver undefined

console.log("🚨 SCRIPT DE EMERGÊNCIA: Criando namespace eProbe");

// 1. CRIAR NAMESPACE FORÇADAMENTE
window.SENT1_AUTO = window.SENT1_AUTO || {};

// 2. VERIFICAR SE CONTENT SCRIPT FOI CARREGADO
if (Object.keys(window.SENT1_AUTO).length === 0) {
    console.log("⚠️ Content script não carregado. Criando funções básicas...");

    // 3. CRIAR FUNÇÃO DE FORÇA BRUTA PARA CARD
    window.SENT1_AUTO.criarCardEmergencia = function () {
        console.log("🚨 EMERGÊNCIA: Criando card de sessão");

        // Remover card existente
        const cardExistente = document.getElementById("eprobe-data-sessao");
        if (cardExistente) {
            cardExistente.remove();
        }

        // Obter data atual
        const agora = new Date().toLocaleDateString("pt-BR");

        // Obter número do processo se possível
        let processo = "N/A";
        try {
            const match = window.location.href.match(
                /(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})/
            );
            if (match) processo = match[1];
        } catch (e) {}

        // HTML do card
        const cardHTML = `
            <div id="eprobe-data-sessao" class="alert alert-info" style="
                position: fixed !important; 
                top: 20px !important; 
                right: 20px !important; 
                z-index: 99999 !important;
                max-width: 400px !important;
                box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important;
                border-left: 4px solid #007bff !important;
            ">
                <h6><i class="fas fa-calendar-check"></i> Data da Sessão (Emergência)</h6>
                <p><strong>⚠️ Content script não carregado</strong></p>
                <p>Processo: ${processo}</p>
                <p>Criado em: ${agora}</p>
                <small>eProbe - Modo Emergência</small>
            </div>
        `;

        // Inserir no body
        document.body.insertAdjacentHTML("beforeend", cardHTML);

        const card = document.getElementById("eprobe-data-sessao");
        if (card) {
            console.log("✅ EMERGÊNCIA: Card criado com sucesso!");

            // Destacar temporariamente
            card.style.animation = "pulse 3s ease-in-out";
            setTimeout(() => {
                if (card) card.style.animation = "";
            }, 3000);

            return { sucesso: true, metodo: "emergencia" };
        } else {
            console.log("❌ EMERGÊNCIA: Falha ao criar card");
            return { sucesso: false };
        }
    };

    // 4. FUNÇÃO DE DIAGNÓSTICO DE EMERGÊNCIA
    window.SENT1_AUTO.diagnosticoEmergencia = function () {
        console.log("🔍 DIAGNÓSTICO DE EMERGÊNCIA");
        console.log("============================");

        const diagnostico = {
            url: window.location.href,
            eProc: window.location.href.includes("eproc"),
            contentScript: Object.keys(window.SENT1_AUTO).length > 2,
            extensionContext:
                typeof chrome !== "undefined" &&
                typeof chrome.runtime !== "undefined",
            containers: {
                fldCapa: !!document.querySelector("#fldCapa"),
                divCapaProcesso: !!document.querySelector("#divCapaProcesso"),
                body: !!document.body,
            },
        };

        console.log("📊 Diagnóstico:", diagnostico);

        if (!diagnostico.eProc) {
            console.log("❌ PROBLEMA: Não está em uma página do eProc");
            console.log("💡 SOLUÇÃO: Navegue para uma página do eProc");
        }

        if (!diagnostico.extensionContext) {
            console.log("❌ PROBLEMA: Contexto da extensão não disponível");
            console.log(
                "💡 SOLUÇÃO: Verifique se a extensão está instalada e ativa"
            );
        }

        if (!diagnostico.contentScript) {
            console.log("❌ PROBLEMA: Content script não foi carregado");
            console.log(
                "💡 SOLUÇÃO: Recarregue a página (F5) ou reinstale a extensão"
            );
        }

        return diagnostico;
    };

    // 5. FUNÇÃO DE RECARREGAMENTO FORÇADO
    window.SENT1_AUTO.recarregarExtensao = function () {
        console.log("🔄 RECARREGANDO: Forçando recarregamento da extensão");

        // Tentar recarregar via chrome.runtime
        if (typeof chrome !== "undefined" && chrome.runtime) {
            try {
                chrome.runtime.reload();
                console.log("✅ Extensão recarregada via chrome.runtime");
                return { sucesso: true, metodo: "chrome.runtime" };
            } catch (e) {
                console.log(
                    "❌ Erro ao recarregar via chrome.runtime:",
                    e.message
                );
            }
        }

        // Fallback: recarregar página
        console.log("🔄 Recarregando página como fallback...");
        setTimeout(() => {
            window.location.reload();
        }, 1000);

        return { sucesso: true, metodo: "page-reload" };
    };

    console.log("✅ EMERGÊNCIA: Funções básicas criadas");
    console.log("📋 COMANDOS DISPONÍVEIS:");
    console.log("- window.SENT1_AUTO.criarCardEmergencia()");
    console.log("- window.SENT1_AUTO.diagnosticoEmergencia()");
    console.log("- window.SENT1_AUTO.recarregarExtensao()");
} else {
    console.log(
        "✅ Content script foi carregado. Funções normais disponíveis."
    );

    // Verificar funções específicas
    const funcoesPrincipais = [
        "testarCriacaoCard",
        "forcarInsercaoCardSemValidacao",
        "diagnosticoCompletoCard",
        "hasDataSessaoPautado",
    ];

    console.log("🔍 VERIFICANDO FUNÇÕES PRINCIPAIS:");
    funcoesPrincipais.forEach((funcao) => {
        const disponivel = typeof window.SENT1_AUTO[funcao] === "function";
        console.log(`${disponivel ? "✅" : "❌"} ${funcao}`);
    });
}

// 6. VERIFICAÇÃO FINAL
console.log("\n📊 STATUS FINAL:");
console.log("- Namespace existe:", typeof window.SENT1_AUTO);
console.log("- É objeto:", typeof window.SENT1_AUTO === "object");
console.log("- Funções disponíveis:", Object.keys(window.SENT1_AUTO).length);
console.log("- URL atual:", window.location.href);
console.log("- É eProc:", window.location.href.includes("eproc"));

// 7. INSTRUÇÕES AUTOMÁTICAS
if (typeof window.SENT1_AUTO.testarCriacaoCard === "function") {
    console.log("\n🎯 PRONTO! Execute agora:");
    console.log("window.SENT1_AUTO.testarCriacaoCard()");
} else {
    console.log("\n🚨 EXECUTE PARA CRIAR CARD:");
    console.log("window.SENT1_AUTO.criarCardEmergencia()");
}
