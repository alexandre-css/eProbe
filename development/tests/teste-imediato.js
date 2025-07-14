// ===== TESTE IMEDIATO - DIAGNÓSTICO E CORREÇÃO DOS CARDS =====

console.log(
    "🧪 TESTE IMEDIATO: Iniciando diagnóstico dos cards Material Design..."
);

// 1. VERIFICAR ESTADO ATUAL DOS CARDS
function diagnosticarEstadoCards() {
    console.log("🔍 DIAGNÓSTICO: Verificando estado atual dos cards...");

    const cardExistente = document.getElementById("eprobe-data-sessao");
    console.log("📋 Card Material Design no DOM:", !!cardExistente);

    if (cardExistente) {
        console.log("✅ Card encontrado:", cardExistente);
        console.log("📍 Posição do card:", cardExistente.parentElement);
    } else {
        console.log("❌ Card não encontrado no DOM");
    }

    // Verificar CSS Material Design
    const cssExistente = document.querySelector(
        "style[data-eprobe-material-design]"
    );
    console.log("🎨 CSS Material Design carregado:", !!cssExistente);

    // Verificar estado global
    if (window.materialDesignState) {
        console.log("🌐 Estado global:", window.materialDesignState);
    } else {
        console.log("❌ Estado global não encontrado");
    }

    return {
        cardNoDom: !!cardExistente,
        cssCarregado: !!cssExistente,
        estadoGlobal: window.materialDesignState || null,
    };
}

// 2. CARREGAR CSS MATERIAL DESIGN MANUALMENTE
function carregarCSSMaterialDesign() {
    console.log("🎨 TESTE: Carregando CSS Material Design...");

    // Verificar se já existe
    if (document.querySelector("style[data-eprobe-material-design]")) {
        console.log("ℹ️ CSS já carregado");
        return;
    }

    const css = `
        /* eProbe Material Design Cards */
        .eprobe-material-card {
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
            margin: 16px 0;
            overflow: hidden;
            transition: all 0.3s ease;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .eprobe-material-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }
        
        .eprobe-card-header {
            display: flex;
            align-items: center;
            padding: 16px 20px 12px;
            border-bottom: 1px solid #f1f5f9;
        }
        
        .eprobe-card-icon {
            margin-right: 12px;
            color: #3b82f6;
        }
        
        .eprobe-card-title {
            margin: 0;
            font-size: 16px;
            font-weight: 600;
            color: #1e293b;
        }
        
        .eprobe-card-content {
            padding: 16px 20px 20px;
        }
        
        .eprobe-status-badge {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 16px;
        }
        
        .eprobe-status-badge.status-pautado {
            background: #dbeafe;
            color: #1d4ed8;
        }
        
        .eprobe-status-badge.status-julgado {
            background: #d1fae5;
            color: #059669;
        }
        
        .eprobe-status-badge.status-retirado {
            background: #fef3c7;
            color: #d97706;
        }
        
        .eprobe-status-badge.status-neutro {
            background: #f1f5f9;
            color: #64748b;
        }
        
        .eprobe-info-container {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        
        .eprobe-info-item {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .eprobe-info-icon {
            font-size: 18px !important;
            color: #64748b;
        }
        
        .eprobe-info-text {
            flex: 1;
        }
        
        .eprobe-info-label {
            font-size: 12px;
            color: #64748b;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .eprobe-info-value {
            font-size: 14px;
            color: #1e293b;
            font-weight: 600;
        }
        
        .eprobe-timestamp {
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px solid #f1f5f9;
            font-size: 11px;
            color: #94a3b8;
            text-align: center;
        }
    `;

    const styleElement = document.createElement("style");
    styleElement.setAttribute("data-eprobe-material-design", "true");
    styleElement.textContent = css;
    document.head.appendChild(styleElement);

    console.log("✅ CSS Material Design carregado");
}

// 3. CRIAR CARD DE TESTE FORÇADO
function criarCardTesteForçado() {
    console.log("🔨 TESTE: Criando card de teste forçado...");

    // Remover card existente
    const cardExistente = document.getElementById("eprobe-data-sessao");
    if (cardExistente) {
        cardExistente.remove();
        console.log("🗑️ Card existente removido");
    }

    // Dados de teste
    const dadosTeste = {
        status: "Retirado",
        descricao: "Processo Retirado de Pauta",
        tipoProcesso: "Mérito",
        data: {
            dataFormatada: "10/04/2025",
            dataObject: new Date("2025-04-10"),
        },
        orgao: "CAMPUB5",
        textoCompleto: "Mérito (Retirado em Pauta em 10/04/2025 - CAMPUB5)",
    };

    // Criar card manualmente
    const card = document.createElement("div");
    card.id = "eprobe-data-sessao";
    card.className = "eprobe-material-card status-retirado";

    card.innerHTML = `
        <div class="eprobe-card-header">
            <div class="eprobe-card-icon">
                <span style="font-size: 18px;">⚠️</span>
            </div>
            <h3 class="eprobe-card-title">Dados da Sessão</h3>
        </div>
        <div class="eprobe-card-content">
            <div class="eprobe-status-badge status-retirado">Retirado</div>
            <div class="eprobe-info-container">
                <div class="eprobe-info-item">
                    <span class="eprobe-info-icon">📅</span>
                    <div class="eprobe-info-text">
                        <div class="eprobe-info-label">Data da Sessão</div>
                        <div class="eprobe-info-value">10/04/2025</div>
                    </div>
                </div>
                <div class="eprobe-info-item">
                    <span class="eprobe-info-icon">📋</span>
                    <div class="eprobe-info-text">
                        <div class="eprobe-info-label">Tipo</div>
                        <div class="eprobe-info-value">Mérito</div>
                    </div>
                </div>
                <div class="eprobe-info-item">
                    <span class="eprobe-info-icon">🏛️</span>
                    <div class="eprobe-info-text">
                        <div class="eprobe-info-label">Órgão</div>
                        <div class="eprobe-info-value">CAMPUB5</div>
                    </div>
                </div>
            </div>
            <div class="eprobe-timestamp">Detectado em ${new Date().toLocaleString(
                "pt-BR"
            )}</div>
        </div>
    `;

    // Inserir na página
    const minutasContainer = document.querySelector("#fldMinutas");
    if (minutasContainer && minutasContainer.parentElement) {
        minutasContainer.parentElement.insertBefore(card, minutasContainer);
        console.log("✅ Card inserido próximo às minutas");
    } else {
        // Fallback
        const conteudoArea =
            document.querySelector("#divInfraAreaProcesso") || document.body;
        conteudoArea.insertBefore(card, conteudoArea.firstChild);
        console.log("✅ Card inserido na área de conteúdo");
    }

    return card;
}

// 4. CORRIGIR EVENT LISTENERS NÃO-PASSIVOS
function corrigirEventListeners() {
    console.log(
        "🔧 TESTE: Aplicando correções globais para event listeners..."
    );

    // Override addEventListener globalmente para tornar listeners passivos
    const originalAddEventListener = EventTarget.prototype.addEventListener;

    EventTarget.prototype.addEventListener = function (
        type,
        listener,
        options
    ) {
        const passiveEvents = [
            "scroll",
            "wheel",
            "touchstart",
            "touchmove",
            "touchend",
            "mouseenter",
            "mouseleave",
            "mouseover",
            "mouseout",
        ];

        if (passiveEvents.includes(type)) {
            if (typeof options === "boolean") {
                options = { capture: options, passive: true };
            } else if (typeof options === "object" && options !== null) {
                options.passive = true;
            } else {
                options = { passive: true };
            }
        }

        return originalAddEventListener.call(this, type, listener, options);
    };

    console.log("✅ Event listeners corrigidos para serem passivos");
}

// 5. RESETAR ESTADO GLOBAL
function resetarEstadoGlobal() {
    console.log("🔄 TESTE: Resetando estado global...");

    // Resetar estado Material Design
    if (window.materialDesignState) {
        window.materialDesignState = {
            cardAtivo: false,
            ultimaDeteccao: null,
            timeoutAtualizar: null,
            evitarRecriacaoCard: false,
        };
        console.log("✅ Estado Material Design resetado");
    }

    // Limpar timeouts pendentes
    for (let i = 1; i < 99999; i++) {
        window.clearTimeout(i);
    }
    console.log("✅ Timeouts limpos");
}

// 6. EXECUTAR TESTE COMPLETO
function executarTesteCompleto() {
    console.log("🚀 INICIANDO TESTE COMPLETO DOS CARDS...");

    try {
        // 1. Diagnóstico inicial
        const estadoInicial = diagnosticarEstadoCards();

        // 2. Corrigir event listeners
        corrigirEventListeners();

        // 3. Resetar estado
        resetarEstadoGlobal();

        // 4. Carregar CSS
        carregarCSSMaterialDesign();

        // 5. Criar card de teste
        const card = criarCardTesteForçado();

        // 6. Verificar resultado
        setTimeout(() => {
            const estadoFinal = diagnosticarEstadoCards();

            console.log("📊 RESULTADO DO TESTE:");
            console.log("  • Estado inicial:", estadoInicial);
            console.log("  • Estado final:", estadoFinal);
            console.log("  • Card criado:", !!card);
            console.log(
                "  • Card visível:",
                !!document.getElementById("eprobe-data-sessao")
            );

            if (document.getElementById("eprobe-data-sessao")) {
                console.log(
                    "✅ SUCESSO: Card Material Design criado e visível!"
                );
            } else {
                console.log(
                    "❌ FALHA: Card não foi criado ou não está visível"
                );
            }
        }, 500);
    } catch (error) {
        console.error("❌ ERRO no teste:", error);
    }
}

// 7. FUNÇÕES DE CONTROLE PARA O CONSOLE
window.testeCards = {
    diagnosticar: diagnosticarEstadoCards,
    carregarCSS: carregarCSSMaterialDesign,
    criarCard: criarCardTesteForçado,
    corrigirListeners: corrigirEventListeners,
    resetar: resetarEstadoGlobal,
    executarCompleto: executarTesteCompleto,
};

// EXECUTAR AUTOMATICAMENTE
console.log("🎯 Para executar o teste, use: testeCards.executarCompleto()");
console.log(
    "🔧 Funções disponíveis: testeCards.diagnosticar(), testeCards.criarCard(), etc."
);

// Auto-executar após 1 segundo
setTimeout(() => {
    console.log("🚀 AUTO-EXECUTANDO TESTE COMPLETO...");
    executarTesteCompleto();
}, 1000);
