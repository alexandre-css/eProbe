// 🎨 FUNÇÃO PARA CRIAR CARD MATERIAL DESIGN FIGMA (ESPECIFICAÇÕES EXATAS)
function criarCardMaterialDesign(status, dadosSessao, processo) {
    try {
        // ⚠️ VALIDAÇÃO CRÍTICA: Card só deve aparecer se houver dados da sessão
        if (!dadosSessao) {
            console.log("❌ CARD NÃO CRIADO: Sem dados da sessão");
            return {
                sucesso: false,
                erro: "Dados da sessão não fornecidos",
                sugestao:
                    "Card só deve ser exibido quando houver data da sessão",
            };
        }

        console.log("🎨 CRIANDO: Card Material Design Figma EXATO", {
            status,
            dadosSessao,
            processo,
        });

        // SVG Container principal - EXATO do Figma: 205×96 com filtros
        const svgContainer = document.createElement("div");
        svgContainer.id = "eprobe-data-sessao"; // ID para detecção no main.js
        svgContainer.style.cssText = `
            width: 205px;
            height: 96px;
            position: relative;
            margin: 5px;
        `;

        // SVG com EXATAMENTE as especificações do Figma
        const svg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );
        svg.setAttribute("width", "205");
        svg.setAttribute("height", "96");
        svg.setAttribute("viewBox", "0 0 205 96");
        svg.setAttribute("fill", "none");

        // Definições dos filtros EXATOS do Figma
        const defs = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "defs"
        );

        // Filter M3/Elevation Light/5 - EXATO
        const filter0 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "filter"
        );
        filter0.setAttribute("id", "filter0_dd_76_366");
        filter0.setAttribute("x", "0");
        filter0.setAttribute("y", "0");
        filter0.setAttribute("width", "205");
        filter0.setAttribute("height", "96");
        filter0.setAttribute("filterUnits", "userSpaceOnUse");
        filter0.setAttribute("color-interpolation-filters", "sRGB");

        filter0.innerHTML = `
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_76_366"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="6" operator="dilate" in="SourceAlpha" result="effect2_dropShadow_76_366"/>
            <feOffset dy="8"/>
            <feGaussianBlur stdDeviation="6"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_76_366" result="effect2_dropShadow_76_366"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_76_366" result="shape"/>
        `;

        const filter1 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "filter"
        );
        filter1.setAttribute("id", "filter1_d_76_366");
        filter1.setAttribute("x", "14.9992");
        filter1.setAttribute("y", "10");
        filter1.setAttribute("width", "175.002");
        filter1.setAttribute("height", "66.0017");
        filter1.setAttribute("filterUnits", "userSpaceOnUse");
        filter1.setAttribute("color-interpolation-filters", "sRGB");

        filter1.innerHTML = `
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="3.00083"/>
            <feGaussianBlur stdDeviation="1.50042"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_76_366"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_76_366" result="shape"/>
        `;

        defs.appendChild(filter0);
        defs.appendChild(filter1);

        // Grupo principal com filter0
        const g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g1.setAttribute("filter", "url(#filter0_dd_76_366)");

        // Grupo interno com filter1
        const g2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g2.setAttribute("filter", "url(#filter1_d_76_366)");

        // Retângulo do card - EXATAS especificações Figma
        const rect = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "rect"
        );
        rect.setAttribute("x", "18");
        rect.setAttribute("y", "10");
        rect.setAttribute("width", "169");
        rect.setAttribute("height", "60");
        rect.setAttribute("rx", "9.0025");
        rect.setAttribute("fill", "#FEF7FF");
        rect.setAttribute("stroke", "#CAC4D0");
        rect.setAttribute("stroke-width", "0.750208");

        // Ícone SVG - EXATO do Figma (#5C85B4)
        const iconPath = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );
        iconPath.setAttribute(
            "d",
            "M31.0024 50.4084C30.3177 50.4084 29.7318 50.1778 29.2446 49.7166C28.7575 49.2554 28.5135 48.7002 28.5126 48.0512V31.5512C28.5126 30.903 28.7566 30.3483 29.2446 29.8871C29.7326 29.4259 30.3185 29.1949 31.0024 29.1941H32.2472V26.837H34.737V29.1941H44.6959V26.837H47.1856V29.1941H48.4305C49.1152 29.1941 49.7015 29.4251 50.1895 29.8871C50.6775 30.3491 50.921 30.9038 50.9202 31.5512V37.0611C50.9202 37.395 50.8007 37.6751 50.5617 37.9014C50.3227 38.1277 50.0272 38.2404 49.6754 38.2396C49.3235 38.2388 49.028 38.1257 48.789 37.9002C48.55 37.6747 48.4305 37.395 48.4305 37.0611V36.2655H31.0024V48.0512H38.2226C38.5753 48.0512 38.8712 48.1644 39.1102 48.3907C39.3492 48.617 39.4683 48.8967 39.4675 49.2298C39.4666 49.563 39.3471 49.8431 39.1089 50.0701C38.8707 50.2972 38.5753 50.41 38.2226 50.4084H31.0024ZM47.1856 51.587C45.4636 51.587 43.9959 51.0122 42.7825 49.8627C41.5692 48.7132 40.9621 47.3237 40.9613 45.6941C40.9605 44.0645 41.5675 42.675 42.7825 41.5255C43.9975 40.376 45.4652 39.8012 47.1856 39.8012C48.906 39.8012 50.3741 40.376 51.59 41.5255C52.8058 42.675 53.4124 44.0645 53.4099 45.6941C53.4075 47.3237 52.8004 48.7136 51.5887 49.8639C50.377 51.0142 48.9093 51.5885 47.1856 51.587ZM49.2708 48.4932L50.1422 47.6682L47.8081 45.4584V42.1584H46.5632V45.9298L49.2708 48.4932Z"
        );
        iconPath.setAttribute("fill", "#5C85B4");

        // Header - EXATAS especificações Figma (left: 26.19%, top: 23.74%)
        const textSessao = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
        );
        // Calculando X: 26.19% de 169px + 18px (rect x) = 62.26px
        textSessao.setAttribute("x", "62.26");
        // Calculando Y: 23.74% de 60px + 10px (rect y) + baseline ajust = 28.24px
        textSessao.setAttribute("y", "28.24");
        textSessao.setAttribute("font-family", "Roboto");
        textSessao.setAttribute("font-weight", "380");
        textSessao.setAttribute("font-size", "13.5037"); // Tamanho EXATO do Figma
        textSessao.setAttribute("line-height", "16");
        textSessao.setAttribute("fill", "#1D1B20");
        textSessao.setAttribute("text-anchor", "start");
        textSessao.setAttribute("class", "eprobe-status-text");
        textSessao.textContent = status || "Pautado";

        // Subhead - EXATAS especificações Figma (left: 26.19%, top: 49.99%)
        const textData = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
        );
        // Mesma posição X do Header
        textData.setAttribute("x", "62.26");
        // Calculando Y: 49.99% de 60px + 10px (rect y) + baseline ajust = 49.99px
        textData.setAttribute("y", "49.99");
        textData.setAttribute("font-family", "Roboto");
        textData.setAttribute("font-weight", "400");
        textData.setAttribute("font-size", "10.5029"); // Tamanho EXATO do Figma
        textData.setAttribute("line-height", "15");
        textData.setAttribute("letter-spacing", "0.187552px"); // Letter spacing EXATO
        textData.setAttribute("fill", "#1D1B20");
        textData.setAttribute("text-anchor", "start");
        textData.setAttribute("class", "eprobe-date-text");
        textData.textContent = `Sessão: ${dadosSessao}`;

        // Montagem do SVG
        g2.appendChild(rect);
        g2.appendChild(iconPath);
        g2.appendChild(textSessao);
        g2.appendChild(textData);
        g1.appendChild(g2);
        svg.appendChild(defs);
        svg.appendChild(g1);
        svgContainer.appendChild(svg);

        console.log(
            "✅ SUCESSO: Card Figma EXATO criado - 205×96px com filtros M3"
        );

        return {
            sucesso: true,
            elemento: svgContainer,
            especificacoes: {
                dimensoes: "205×96px (SVG container), 169×60px (card)",
                background: "#FEF7FF",
                borda: "0.750208px solid #CAC4D0",
                borderRadius: "9.0025px",
                filtros: "M3/Elevation Light/5 (duplos)",
                icone: "#5C85B4 calendário",
                tipografia: "Roboto 380/400 exata",
            },
        };
    } catch (error) {
        console.error("❌ ERRO ao criar card Figma:", error);
        return {
            sucesso: false,
            erro: error.message,
            sugestao: "Verifique especificações SVG do Figma",
        };
    }
}

// 🧪 FUNÇÃO DE TESTE PARA VALIDAR CARD FIGMA EXATO
window.SENT1_AUTO = window.SENT1_AUTO || {};

// Exportar a função principal para uso no main.js
window.SENT1_AUTO.criarCardMaterialDesign = criarCardMaterialDesign;

window.SENT1_AUTO.testarCardFigmaExato = function () {
    console.log("🧪 TESTE: Criando card com especificações EXATAS do Figma");

    // Teste com dados válidos da sessão
    const resultado = criarCardMaterialDesign(
        "Pautado",
        "29/01/2025", // Data obrigatória para exibir o card
        "processo-teste"
    );

    if (resultado.sucesso) {
        document.body.appendChild(resultado.elemento);
        console.log(
            "✅ TESTE SUCESSO: Card Figma exato criado",
            resultado.especificacoes
        );
    } else {
        console.error("❌ TESTE FALHOU:", resultado);
    }

    return resultado;
};
