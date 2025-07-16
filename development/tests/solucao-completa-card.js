// 🚀 SOLUÇÃO COMPLETA - eProbe Card de Sessão
// Execute este script no console da página do eProc para resolver todos os problemas

console.log("🚀 SOLUÇÃO COMPLETA eProbe - Card de Sessão");
console.log("============================================");

// FASE 1: DIAGNÓSTICO INICIAL
console.log("🔍 FASE 1: Diagnóstico inicial...");

const diagnostico = {
    url: window.location.href,
    eProc: window.location.href.includes("eproc"),
    namespace: typeof window.SENT1_AUTO,
    chrome: typeof chrome !== "undefined",
};

console.log("📊 Diagnóstico:", diagnostico);

// FASE 2: RESOLVER NAMESPACE
if (typeof window.SENT1_AUTO === "undefined") {
    console.log("\n🚨 FASE 2: Resolvendo namespace undefined...");

    window.SENT1_AUTO = {
        status: "criado-manualmente",
        timestamp: new Date().toISOString(),
    };

    console.log("✅ Namespace criado manualmente");
} else {
    console.log("\n✅ FASE 2: Namespace já existe");
}

// FASE 3: CRIAR FUNÇÕES ESSENCIAIS
console.log("\n🔧 FASE 3: Criando funções essenciais...");

// Função para criar card de emergência
window.SENT1_AUTO.criarCardSessao = function (dataCustom = null) {
    console.log("🎯 Criando card de sessão...");

    // Remover card existente
    const cardExistente = document.getElementById("eprobe-data-sessao");
    if (cardExistente) {
        cardExistente.remove();
        console.log("🗑️ Card existente removido");
    }

    // Obter dados do processo
    let processo = "N/A";
    let dataAtual = dataCustom || new Date().toLocaleDateString("pt-BR");

    try {
        // Tentar extrair número do processo da URL ou título
        const urlMatch = window.location.href.match(
            /(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})/
        );
        const titleMatch = document.title.match(
            /(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})/
        );
        processo = urlMatch?.[1] || titleMatch?.[1] || "N/A";

        // Tentar detectar data das minutas se não fornecida
        if (!dataCustom) {
            const minutasElement = document.querySelector("#fldMinutas");
            if (minutasElement) {
                const textMinutas =
                    minutasElement.textContent || minutasElement.innerText;
                const dataMatch = textMinutas.match(
                    /Incluído em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})/
                );
                if (dataMatch) {
                    dataAtual = dataMatch[1];
                    console.log("📅 Data detectada das minutas:", dataAtual);
                }
            }
        }
    } catch (e) {
        console.log("⚠️ Erro ao extrair dados:", e.message);
    }

    // HTML do card
    const cardHTML = `
        <div id="eprobe-data-sessao" class="card mt-3" style="
            border-left: 4px solid #007bff; 
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        " data-processo="${processo}">
            <div class="card-body py-2">
                <div class="d-flex align-items-center">
                    <i class="fas fa-calendar-check me-2" style="color: #007bff; font-size: 1.1em;"></i>
                    <div class="flex-grow-1">
                        <h6 class="card-title mb-1" style="color: #495057; font-weight: 600;">
                            📅 Data da Sessão de Julgamento
                        </h6>
                        <p class="card-text mb-0" style="color: #6c757d; font-size: 0.95em;">
                            <strong style="color: #007bff;">${dataAtual}</strong>
                            <span class="badge bg-secondary ms-2">eProbe</span>
                        </p>
                    </div>
                    <div class="text-muted" style="font-size: 0.8em;">
                        <i class="fas fa-robot me-1"></i>Auto
                    </div>
                </div>
            </div>
        </div>
    `;

    // Tentar inserir em containers do eProc
    const containers = [
        "#fldCapa #divCapaProcesso .row.mt-2",
        "#divCapaProcesso .row.mt-2",
        "#fldCapa .row",
        "#divCapaProcesso",
        "#fldCapa",
    ];

    let inserido = false;
    for (const seletor of containers) {
        const container = document.querySelector(seletor);
        if (container) {
            try {
                container.insertAdjacentHTML("beforeend", cardHTML);
                console.log(`✅ Card inserido em: ${seletor}`);
                inserido = true;
                break;
            } catch (e) {
                console.log(`❌ Erro ao inserir em ${seletor}:`, e.message);
            }
        }
    }

    // Fallback: posição fixa
    if (!inserido) {
        console.log("⚠️ Containers não encontrados, usando posição fixa...");
        const cardElement = document.createElement("div");
        cardElement.innerHTML = cardHTML;
        cardElement.firstElementChild.style.cssText += `
            position: fixed !important;
            top: 20px !important;
            right: 20px !important;
            z-index: 10000 !important;
            max-width: 350px !important;
        `;
        document.body.appendChild(cardElement.firstElementChild);
        inserido = true;
        console.log("✅ Card criado em posição fixa");
    }

    // Verificar resultado
    const cardCriado = document.getElementById("eprobe-data-sessao");
    if (cardCriado) {
        // Animação de destaque
        cardCriado.style.animation = "pulse 2s ease-in-out";
        setTimeout(() => {
            if (cardCriado) cardCriado.style.animation = "";
        }, 2000);

        console.log("🎉 Card criado com sucesso!");
        return {
            sucesso: true,
            processo: processo,
            data: dataAtual,
            posicao: inserido ? "integrado" : "fixa",
        };
    } else {
        console.log("❌ Falha ao criar card");
        return { sucesso: false };
    }
};

// Função de teste completo
window.SENT1_AUTO.testeCompleto = function () {
    console.log("🧪 TESTE COMPLETO DO SISTEMA");
    console.log("============================");

    const resultado = {
        timestamp: new Date().toISOString(),
        tests: {},
    };

    // Teste 1: Verificar página
    resultado.tests.pagina = {
        url: window.location.href,
        eProc: window.location.href.includes("eproc"),
        status: window.location.href.includes("eproc") ? "✅" : "❌",
    };

    // Teste 2: Verificar containers
    const containers = ["#fldCapa", "#divCapaProcesso", ".row.mt-2"];
    resultado.tests.containers = {};
    containers.forEach((sel) => {
        const existe = !!document.querySelector(sel);
        resultado.tests.containers[sel] = {
            existe: existe,
            status: existe ? "✅" : "❌",
        };
    });

    // Teste 3: Criar card
    try {
        const cardResult = window.SENT1_AUTO.criarCardSessao();
        resultado.tests.card = {
            criado: cardResult.sucesso,
            status: cardResult.sucesso ? "✅" : "❌",
            detalhes: cardResult,
        };
    } catch (e) {
        resultado.tests.card = {
            criado: false,
            status: "❌",
            erro: e.message,
        };
    }

    console.log("📊 RESULTADO DO TESTE:", resultado);
    return resultado;
};

// Função de debug rápido
window.SENT1_AUTO.debug = function () {
    return {
        namespace: typeof window.SENT1_AUTO,
        url: window.location.href,
        eProc: window.location.href.includes("eproc"),
        containers: {
            fldCapa: !!document.querySelector("#fldCapa"),
            divCapaProcesso: !!document.querySelector("#divCapaProcesso"),
        },
        cardExiste: !!document.getElementById("eprobe-data-sessao"),
    };
};

console.log("✅ Funções criadas com sucesso!");

// FASE 4: EXECUÇÃO AUTOMÁTICA
console.log("\n🚀 FASE 4: Executando criação automática...");

if (diagnostico.eProc) {
    console.log("📍 Página do eProc detectada, criando card...");

    setTimeout(() => {
        const resultado = window.SENT1_AUTO.criarCardSessao();

        if (resultado.sucesso) {
            console.log("🎉 SUCESSO TOTAL!");
            console.log("📋 Card de sessão criado e funcionando!");
        } else {
            console.log("⚠️ Problema na criação automática");
            console.log(
                "💡 Execute manualmente: window.SENT1_AUTO.criarCardSessao()"
            );
        }
    }, 1000);
} else {
    console.log("❌ Não é uma página do eProc");
    console.log("💡 Navegue para uma página do eProc e execute novamente");
}

// FASE 5: DISPONIBILIZAR COMANDOS
console.log("\n📋 COMANDOS DISPONÍVEIS:");
console.log("- window.SENT1_AUTO.criarCardSessao() // Criar card");
console.log("- window.SENT1_AUTO.testeCompleto()   // Teste completo");
console.log("- window.SENT1_AUTO.debug()           // Debug rápido");

console.log("\n" + "=".repeat(50));
console.log("✅ SOLUÇÃO COMPLETA EXECUTADA!");
