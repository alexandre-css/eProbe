/**
 * MODELO DE CARD MATERIAL DESIGN - CardMaterial v2.0
 * Template de referência para implementação de outros cards no eProbe
 *
 * Este arquivo serve como modelo base para criação de novos cards
 * seguindo os padrões Material Design implementados no sistema.
 *
 * CORREÇÕES DA v2.0:
 * ✅ Declarações de variáveis movidas para o topo
 * ✅ Ordem correta de funções antes do namespace
 * ✅ Integração com sistema existente validada
 * ✅ Auto-inicialização implementada
 */

// ============================================
// MODELO BASE - CardMaterial
// ============================================

/**
 * Modelo base para criação de cards Material Design
 * @param {Object} config - Configuração do card
 * @param {string} config.id - ID único do card
 * @param {string} config.titulo - Título do card
 * @param {string} config.tipo - Tipo do card (para classes CSS)
 * @param {Array} config.dados - Array de objetos com dados para exibir
 * @param {Object} config.opcoes - Opções adicionais
 * @returns {HTMLElement} - Elemento do card criado
 */
function criarCardMaterialBase(config) {
    const { id, titulo, tipo = "neutro", dados = [], opcoes = {} } = config;

    // Container principal do card
    const card = document.createElement("div");
    card.id = id;
    card.className = `eprobe-material-card ${tipo}`;

    // Header do card
    const header = document.createElement("div");
    header.className = "eprobe-card-header";

    const tituloEl = document.createElement("h3");
    tituloEl.className = "eprobe-card-title";
    tituloEl.textContent = titulo;

    const icone = document.createElement("div");
    icone.className = "eprobe-card-icon";
    icone.innerHTML =
        opcoes.icone || '<span class="material-icons">info</span>';

    header.appendChild(icone);
    header.appendChild(tituloEl);

    // Conteúdo do card
    const conteudo = document.createElement("div");
    conteudo.className = "eprobe-card-content";

    // Status badge (opcional)
    if (opcoes.status) {
        const statusBadge = document.createElement("div");
        statusBadge.className = `eprobe-status-badge ${tipo}`;
        statusBadge.textContent = opcoes.status;
        conteudo.appendChild(statusBadge);
    }

    // Container de informações
    const infoContainer = document.createElement("div");
    infoContainer.className = "eprobe-info-container";

    // Adicionar dados
    dados.forEach((item) => {
        const infoItem = criarItemInformacaoBase(item);
        infoContainer.appendChild(infoItem);
    });

    conteudo.appendChild(infoContainer);

    // Timestamp (opcional)
    if (opcoes.mostrarTimestamp !== false) {
        const timestamp = document.createElement("div");
        timestamp.className = "eprobe-timestamp";
        timestamp.textContent = `Criado em ${new Date().toLocaleString(
            "pt-BR"
        )}`;
        conteudo.appendChild(timestamp);
    }

    // Ações (opcional)
    if (opcoes.acoes && opcoes.acoes.length > 0) {
        const acoesContainer = criarContainerAcoes(opcoes.acoes);
        conteudo.appendChild(acoesContainer);
    }

    card.appendChild(header);
    card.appendChild(conteudo);

    return card;
}

/**
 * Cria um item de informação base
 * @param {Object} item - Dados do item
 * @param {string} item.label - Rótulo
 * @param {string} item.valor - Valor
 * @param {string} item.icone - Ícone Material
 * @param {string} item.tipo - Tipo para formatação especial
 * @returns {HTMLElement} - Elemento do item
 */
function criarItemInformacaoBase(item) {
    const { label, valor, icone = "info", tipo = "texto" } = item;

    const itemEl = document.createElement("div");
    itemEl.className = `eprobe-info-item tipo-${tipo}`;

    const iconeEl = document.createElement("span");
    iconeEl.className = "material-icons eprobe-info-icon";
    iconeEl.textContent = icone;

    const textoContainer = document.createElement("div");
    textoContainer.className = "eprobe-info-text";

    const labelEl = document.createElement("div");
    labelEl.className = "eprobe-info-label";
    labelEl.textContent = label;

    const valorEl = document.createElement("div");
    valorEl.className = "eprobe-info-value";

    // Formatação especial por tipo
    switch (tipo) {
        case "data":
            valorEl.textContent = formatarData(valor);
            break;
        case "numero":
            valorEl.textContent = formatarNumero(valor);
            break;
        case "moeda":
            valorEl.textContent = formatarMoeda(valor);
            break;
        default:
            valorEl.textContent = valor;
    }

    textoContainer.appendChild(labelEl);
    textoContainer.appendChild(valorEl);

    itemEl.appendChild(iconeEl);
    itemEl.appendChild(textoContainer);

    return itemEl;
}

/**
 * Cria container de ações para o card
 * @param {Array} acoes - Array de ações
 * @returns {HTMLElement} - Container de ações
 */
function criarContainerAcoes(acoes) {
    const container = document.createElement("div");
    container.className = "eprobe-card-actions";

    acoes.forEach((acao) => {
        const botao = document.createElement("button");
        botao.className = `eprobe-action-button ${acao.tipo || "secondary"}`;
        botao.textContent = acao.texto;

        if (acao.icone) {
            const icone = document.createElement("span");
            icone.className = "material-icons";
            icone.textContent = acao.icone;
            botao.insertBefore(icone, botao.firstChild);
        }

        if (acao.callback) {
            botao.addEventListener("click", acao.callback);
        }

        container.appendChild(botao);
    });

    return container;
}

// ============================================
// FUNÇÕES DE FORMATAÇÃO
// ============================================

function formatarData(data) {
    if (!data) return "-";
    try {
        const dataObj = typeof data === "string" ? new Date(data) : data;
        return dataObj.toLocaleDateString("pt-BR");
    } catch {
        return data.toString();
    }
}

function formatarNumero(numero) {
    if (numero === null || numero === undefined) return "-";
    return Number(numero).toLocaleString("pt-BR");
}

function formatarMoeda(valor) {
    if (valor === null || valor === undefined) return "-";
    return Number(valor).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}

// ============================================
// EXEMPLOS DE USO DO MODELO
// ============================================

/**
 * Exemplo 1: Card de Dados Pessoais
 */
function exemploCardDadosPessoais() {
    const config = {
        id: "card-dados-pessoais",
        titulo: "Dados Pessoais",
        tipo: "info",
        dados: [
            { label: "Nome", valor: "João Silva", icone: "person" },
            { label: "CPF", valor: "123.456.789-00", icone: "badge" },
            { label: "Email", valor: "joao@email.com", icone: "email" },
        ],
        opcoes: {
            icone: '<span class="material-icons">person</span>',
            status: "Ativo",
        },
    };

    return criarCardMaterialBase(config);
}

/**
 * Exemplo 2: Card de Processo
 */
function exemploCardProcesso() {
    const config = {
        id: "card-processo",
        titulo: "Dados do Processo",
        tipo: "processo",
        dados: [
            {
                label: "Número",
                valor: "1234567-89.2024.8.24.0001",
                icone: "gavel",
            },
            {
                label: "Data de Distribuição",
                valor: "2024-01-15",
                tipo: "data",
                icone: "calendar_today",
            },
            {
                label: "Valor da Causa",
                valor: 50000,
                tipo: "moeda",
                icone: "attach_money",
            },
        ],
        opcoes: {
            icone: '<span class="material-icons">folder</span>',
            status: "Em Andamento",
            acoes: [
                {
                    texto: "Ver Detalhes",
                    tipo: "primary",
                    icone: "visibility",
                    callback: () => console.log("Ver detalhes"),
                },
                {
                    texto: "Baixar PDF",
                    tipo: "secondary",
                    icone: "download",
                    callback: () => console.log("Baixar PDF"),
                },
            ],
        },
    };

    return criarCardMaterialBase(config);
}

/**
 * Exemplo 3: Card de Status com métricas
 */
function exemploCardStatus() {
    const config = {
        id: "card-status",
        titulo: "Status do Sistema",
        tipo: "success",
        dados: [
            {
                label: "Processos Analisados",
                valor: 150,
                tipo: "numero",
                icone: "analytics",
            },
            {
                label: "Última Atualização",
                valor: new Date(),
                tipo: "data",
                icone: "update",
            },
            { label: "Taxa de Sucesso", valor: "98.5%", icone: "trending_up" },
        ],
        opcoes: {
            icone: '<span class="material-icons">check_circle</span>',
            status: "Online",
            mostrarTimestamp: false,
        },
    };

    return criarCardMaterialBase(config);
}

// ============================================
// ORDEM CORRETA DE DECLARAÇÕES - IMPORTANTE
// ============================================

/**
 * ATENÇÃO: Para evitar ReferenceError, sempre siga esta ordem:
 *
 * 1. VARIÁVEIS GLOBAIS (var/let/const) - NO TOPO DO ARQUIVO
 * 2. FUNÇÕES AUXILIARES (que serão usadas por outras funções)
 * 3. FUNÇÕES PRINCIPAIS (que usam as auxiliares)
 * 4. NAMESPACE GLOBAL (window.SENT1_AUTO.funcaoNome = funcaoNome)
 * 5. AUTO-INICIALIZAÇÃO (se necessário)
 *
 * EXEMPLO CORRETO:
 *
 * var MinhaVariavelGlobal = null; // 1. Variável primeiro
 *
 * function funcaoAuxiliar() {     // 2. Função auxiliar
 *     return "auxiliar";
 * }
 *
 * function funcaoPrincipal() {    // 3. Função principal
 *     return funcaoAuxiliar();    // Pode usar a auxiliar
 * }
 *
 * window.SENT1_AUTO.funcaoPrincipal = funcaoPrincipal; // 4. Namespace
 *
 * inicializarSistema(); // 5. Auto-inicialização
 */
// ============================================
// EXPORTAÇÃO DO MODELO
// ============================================

// Modelo CardMaterial para referência
const CardMaterial = {
    criarCard: criarCardMaterialBase,
    criarItem: criarItemInformacaoBase,
    criarAcoes: criarContainerAcoes,
    formatadores: {
        data: formatarData,
        numero: formatarNumero,
        moeda: formatarMoeda,
    },
    exemplos: {
        dadosPessoais: exemploCardDadosPessoais,
        processo: exemploCardProcesso,
        status: exemploCardStatus,
    },
};

// Para uso em outros arquivos (se necessário)
if (typeof module !== "undefined" && module.exports) {
    module.exports = CardMaterial;
}

// Para uso global no browser
if (typeof window !== "undefined") {
    window.CardMaterial = CardMaterial;
}

console.log("📋 MODELO: CardMaterial carregado e disponível para uso");
