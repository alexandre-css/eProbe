// Content script automatizado para DocumentosRelevantes
(function () {
    "use strict";

    // Armazenar a data da sessão quando detectada
    let dataSessaoPautado = null;

    // Variável para armazenar qual processo tem a data da sessão detectada
    let processoComDataSessao = null;

    // Armazenar dados completos da sessão obtidos do cruzamento
    let dadosCompletosSessionJulgamento = null;

    // 🛡️ CONTROLE DE REQUISIÇÕES - Prevenir spam e logout
    let tentativasCruzamento = 0;
    let ultimaTentativaCruzamento = 0;
    let cruzamentoEmAndamento = false;
    let cacheResultadoSessoes = null;
    let cacheValidoAte = 0;

    // 🔐 CONTROLE ÚNICO POR PROCESSO - Garantir apenas uma busca por processo
    let processosJaProcessados = new Set(); // Armazenar números de processos já processados
    let processoAtual = null; // Processo atual sendo visualizado
    let cachePorProcesso = new Map(); // Cache específico por processo
    let inicializacaoExecutada = false; // Controle de inicialização única
    let timeoutsAtivos = new Set(); // Controle de timeouts ativos

    // 🚫 CONTROLE GLOBAL DE REQUISIÇÕES
    let REQUISICOES_AUTOMATICAS_DESABILITADAS = true; // DESABILITAR TODAS AS REQUISIÇÕES AUTOMÁTICAS

    // Configurações de segurança MAIS RIGOROSAS
    const MAX_TENTATIVAS_CRUZAMENTO = 1; // REDUZIDO: Máximo 1 tentativa por processo
    const DELAY_ENTRE_TENTATIVAS = 60000; // AUMENTADO: 1 minuto entre tentativas
    const CACHE_DURATION = 600000; // AUMENTADO: Cache válido por 10 minutos

    // Injetar CSS apenas para elementos da extensão eProbe
    const extensionStyle = document.createElement("style");
    extensionStyle.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        
        /* Padronização da fonte Roboto APENAS para elementos da extensão eProbe */
        [id*="sent1"], [id*="documento-relevante"], [class*="eprobe"], 
        #sent1-auto-button, #documento-relevante-options-menu,
        #documento-relevante-selection-modal, #documento-relevante-preview-modal,
        #api-config-modal, #error-logs-modal, #api-key-config,
        .eprobe-notification, .eprobe-tooltip, .eprobe-modal, .eprobe-button, .eprobe-menu {
            font-family: "Roboto", -apple-system, system-ui, sans-serif !important;
        }
        
        /* Elementos criados dinamicamente pela extensão */
        [id*="sent1"] *, [id*="documento-relevante"] *, [class*="eprobe"] *,
        #sent1-auto-button *, #documento-relevante-options-menu *,
        #documento-relevante-selection-modal *, #documento-relevante-preview-modal *,
        #api-config-modal *, #error-logs-modal *, #api-key-config *,
        .eprobe-notification *, .eprobe-tooltip *, .eprobe-modal *, .eprobe-button *, .eprobe-menu * {
            font-family: "Roboto", -apple-system, system-ui, sans-serif !important;
        }
    `;
    document.head.appendChild(extensionStyle);

    let debugMode = true;
    let isAutomationActive = false;

    // Configuração dos tipos de documentos relevantes
    const TIPOS_DOCUMENTO_RELEVANTE = {
        SENT1: { nome: "SENT1", descricao: "Sentença", dataNome: "SENT" },
        INIC1: {
            nome: "INIC1",
            descricao: "Petição Inicial",
            dataNome: "INIC",
        },
    };

    function log(message, ...args) {
        if (debugMode) {
            console.log("PROCESSAR DOCUMENTO:", message, ...args);
        }
    }

    // Detectar tipo de página e formato de documento
    function detectPageType() {
        const url = window.location.href;
        log("🔍 Detectando tipo de página. URL:", url);

        if (url.includes("processo_selecionar")) {
            return "lista_documentos";
        } else if (
            url.includes("acessar_documento") ||
            url.includes("processo_consultar_externo_documento")
        ) {
            // Detectar se é documento HTML (sentença) ou PDF (petição inicial)
            const sectionSentenca = document.querySelector(
                'section[data-nome="sentenca"]'
            );

            // Buscar PDFs com múltiplos seletores
            const pdfSelectors = [
                'embed[type="application/pdf"]',
                'iframe[src*=".pdf"]',
                'object[type="application/pdf"]',
                'iframe[title*="PDF"]',
                'embed[src*=".pdf"]',
                'object[data*=".pdf"]',
                'iframe[src*="pdf"]',
                'embed[src*="pdf"]',
                ".pdf-viewer",
                "#pdf-viewer",
                '[class*="pdf"]',
                '[id*="pdf"]',
            ];

            let pdfViewer = null;

            // Testar cada seletor
            for (const selector of pdfSelectors) {
                pdfViewer = document.querySelector(selector);
                if (pdfViewer) {
                    log(
                        `📄 PDF encontrado com seletor: ${selector}`,
                        pdfViewer
                    );
                    break;
                }
            }

            // Debug: listar todos os iframes e embeds
            const allIframes = document.querySelectorAll("iframe");
            const allEmbeds = document.querySelectorAll("embed");
            const allObjects = document.querySelectorAll("object");

            log("🔍 Debug - Total de elementos encontrados:", {
                iframes: allIframes.length,
                embeds: allEmbeds.length,
                objects: allObjects.length,
            });

            // Verificar se algum iframe/embed tem características de PDF
            [...allIframes, ...allEmbeds, ...allObjects].forEach(
                (element, index) => {
                    const src = element.src || element.data || "";
                    const type = element.type || "";
                    const title = element.title || "";

                    log(`🔍 Elemento ${index + 1}: ${element.tagName}`, {
                        src: src.substring(0, 100),
                        type: type,
                        title: title,
                        className: element.className,
                        id: element.id,
                    });

                    // Se contém características de PDF
                    if (
                        src.toLowerCase().includes("pdf") ||
                        type.toLowerCase().includes("pdf") ||
                        title.toLowerCase().includes("pdf")
                    ) {
                        pdfViewer = element;
                        log("📄 PDF detectado por características:", element);
                    }
                }
            );

            if (sectionSentenca) {
                log("📄 Documento HTML detectado (sentença)");
                return "documento_html";
            } else if (pdfViewer) {
                log("📄 Documento PDF detectado");
                return "documento_pdf";
            } else {
                log(
                    "📄 Documento específico (tipo indefinido) - verificando conteúdo..."
                );

                // Verificar se há conteúdo típico de documento
                const hasDocumentContent =
                    document.querySelector(".documento") ||
                    document.querySelector(".conteudo") ||
                    document.querySelector(".texto") ||
                    document.querySelector("main") ||
                    document.querySelector("article") ||
                    document.body.textContent.length > 1000;

                if (hasDocumentContent) {
                    log(
                        "📄 Conteúdo de documento detectado - assumindo documento específico"
                    );
                    return "documento_especifico";
                } else {
                    log("❌ Nenhum conteúdo de documento detectado");
                    return "desconhecida";
                }
            }
        }

        return "desconhecida";
    }
    function isValidPageForButton() {
        // Verificar se está na página do processo (formulário frmProcessoLista + título específico)
        const formProcessoLista = document.querySelector("#frmProcessoLista");
        const tituloConsultaProcessual = document.querySelector("h1");

        const hasTituloCorreto =
            tituloConsultaProcessual &&
            tituloConsultaProcessual.textContent.includes(
                "Consulta Processual - Detalhes do Processo"
            );

        if (formProcessoLista && hasTituloCorreto) {
            console.log(
                "Página válida detectada: formulário #frmProcessoLista E título 'Consulta Processual - Detalhes do Processo' encontrados (página do processo)"
            );
            return true;
        }

        // Para compatibilidade com documento específico (página de visualização do documento)
        const pageType = detectPageType();
        if (
            pageType === "documento_especifico" ||
            pageType === "documento_html" ||
            pageType === "documento_pdf"
        ) {
            console.log("Página válida detectada: documento específico");
            return true;
        }

        // Verificar URLs específicas do eProc que podem conter documentos
        const url = window.location.href;
        if (
            url.includes("eproc") &&
            (url.includes("documento") || url.includes("processo"))
        ) {
            console.log(
                "Página válida detectada: URL contém eproc e documento/processo"
            );
            return true;
        }

        // Verificar se há tabelas com links de documentos relevantes (SENT, INIC, etc.)
        const hasDocumentLinks = !!(
            document.querySelector('[href*="SENT"]') ||
            document.querySelector('[href*="INIC"]') ||
            document.querySelector('[href*="DECI"]') ||
            document.querySelector('[href*="DESP"]')
        );

        if (hasDocumentLinks) {
            console.log(
                "Página válida detectada: contém links de documentos relevantes"
            );
            return true;
        }

        console.log("Página não é válida para o botão:", {
            url: url,
            pageType: pageType,
            hasFormProcessoLista: !!formProcessoLista,
            hasTituloCorreto: hasTituloCorreto,
            tituloAtual: tituloConsultaProcessual
                ? tituloConsultaProcessual.textContent
                : "não encontrado",
            hasTable: !!document.querySelector("table"),
            hasDocumentLinks: hasDocumentLinks,
            hasEventDesc: !!document.querySelector(".infraEventoDescricao"),
        });
        return false;
    }

    // Função específica para verificar se deve mostrar o botão flutuante
    function shouldShowFloatingButton() {
        // Verificar se há links para documentos HTML ou PDF no código da página
        const pageHTML = document.documentElement.outerHTML;

        // Buscar por padrões específicos que indicam documentos
        const hasDocumentHtml = pageHTML.includes("acessar_documento&id");
        const hasDocumentPdf = pageHTML.includes("acessar_documento&amp");

        console.log(" Verificando critérios para botão flutuante:", {
            hasDocumentHtml: hasDocumentHtml,
            hasDocumentPdf: hasDocumentPdf,
            shouldShow: hasDocumentHtml || hasDocumentPdf,
        });

        return hasDocumentHtml || hasDocumentPdf;
    }

    // Função aprimorada para encontrar descrição do evento
    function findEventDescription(linkElement) {
        const strategies = [
            () => findEventDescriptionInSameRow(linkElement),
            () => findEventDescriptionInPreviousRows(linkElement),
            () => findEventDescriptionByTextPattern(linkElement),
            () => findEventDescriptionInTableStructure(linkElement),
            () => findEventDescriptionByProximity(linkElement),
        ];

        for (let i = 0; i < strategies.length; i++) {
            try {
                log(`Executando estratégia ${i + 1} para descrição...`);
                const result = strategies[i]();
                if (result && result.trim().length > 3) {
                    log(`Estratégia ${i + 1} bem-sucedida:`, result);
                    return result.trim();
                }
            } catch (e) {
                log(`Erro na estratégia ${i + 1}:`, e);
            }
        }

        log("Nenhuma estratégia encontrou descrição válida");
        return "";
    }

    // Estratégia 1: Buscar na mesma linha do link
    function findEventDescriptionInSameRow(linkElement) {
        const currentRow = linkElement.closest("tr");
        if (!currentRow) return "";

        log("Buscando na linha atual...");

        // Buscar por seletores conhecidos
        const selectors = [
            "td.infraEventoDescricao",
            "label.infraEventoDescricao",
            "td[class*='evento'][class*='descricao']",
            "td[class*='Evento'][class*='Descricao']",
        ];

        for (const selector of selectors) {
            const element = currentRow.querySelector(selector);
            if (element) {
                const text = element.textContent.trim();
                if (text && !text.toLowerCase().includes("sent")) {
                    log(`Encontrado via seletor ${selector}:`, text);
                    return text;
                }
            }
        }

        return "";
    }

    // Estratégia 2: Buscar em linhas anteriores (evento pode estar em linha separada)
    function findEventDescriptionInPreviousRows(linkElement) {
        const currentRow = linkElement.closest("tr");
        if (!currentRow) return "";

        log("Buscando em linhas anteriores...");

        let previousRow = currentRow.previousElementSibling;
        let attempts = 0;

        while (previousRow && attempts < 10) {
            attempts++;

            // Verificar se esta linha contém descrição de evento
            const eventDescSelectors = [
                "td.infraEventoDescricao",
                "label.infraEventoDescricao",
                "td[class*='evento']",
                "td[class*='Evento']",
            ];

            for (const selector of eventDescSelectors) {
                const element = previousRow.querySelector(selector);
                if (element) {
                    const text = element.textContent.trim();
                    if (
                        text &&
                        text.length > 5 &&
                        !text.toLowerCase().includes("sent")
                    ) {
                        log(
                            `Encontrado em linha anterior (${attempts}):`,
                            text
                        );
                        return text;
                    }
                }
            }

            previousRow = previousRow.previousElementSibling;
        }

        return "";
    }

    // Estratégia 3: Buscar por padrões de texto típicos de descrição de evento
    function findEventDescriptionByTextPattern(linkElement) {
        const currentRow = linkElement.closest("tr");
        if (!currentRow) return "";

        log("Buscando por padrões de texto...");

        // Expandir busca para linhas próximas
        const rowsToCheck = [];

        // Adicionar linha atual
        rowsToCheck.push(currentRow);

        // Adicionar linhas anteriores
        let prevRow = currentRow.previousElementSibling;
        for (let i = 0; i < 5 && prevRow; i++) {
            rowsToCheck.unshift(prevRow);
            prevRow = prevRow.previousElementSibling;
        }

        // Adicionar linhas posteriores
        let nextRow = currentRow.nextElementSibling;
        for (let i = 0; i < 2 && nextRow; i++) {
            rowsToCheck.push(nextRow);
            nextRow = nextRow.nextElementSibling;
        }

        // Padrões que indicam descrição de evento judicial
        const eventPatterns = [
            /julgamento/i,
            /decisão/i,
            /sentença/i,
            /prolação/i,
            /publicação/i,
            /audiência/i,
            /despacho/i,
            /determinação/i,
            /intimação/i,
            /citação/i,
            /distribuição/i,
            /remessa/i,
            /devolução/i,
            /conclusão/i,
        ];

        for (const row of rowsToCheck) {
            const cells = row.querySelectorAll("td");
            for (const cell of cells) {
                const text = cell.textContent.trim();

                // Verificar se o texto tem tamanho razoável e contém padrões de evento
                if (text.length > 10 && text.length < 200) {
                    for (const pattern of eventPatterns) {
                        if (
                            pattern.test(text) &&
                            !text.toLowerCase().includes("sent1")
                        ) {
                            log(`Encontrado por padrão "${pattern}":`, text);
                            return text;
                        }
                    }
                }
            }
        }

        return "";
    }

    // Estratégia 4: Analisar estrutura da tabela para encontrar coluna de descrição
    function findEventDescriptionInTableStructure(linkElement) {
        const table = linkElement.closest("table");
        if (!table) return "";

        log("Analisando estrutura da tabela...");

        const currentRow = linkElement.closest("tr");
        const linkCellIndex = Array.from(currentRow.cells).findIndex((cell) =>
            cell.contains(linkElement)
        );

        // Buscar na mesma linha, mas em células que podem conter descrição
        for (let i = 0; i < currentRow.cells.length; i++) {
            if (i === linkCellIndex) continue; // Pular célula do link

            const cell = currentRow.cells[i];
            const text = cell.textContent.trim();

            // Verificar se parece uma descrição (texto médio, não apenas números/datas)
            if (text.length > 15 && text.length < 150) {
                // Verificar se não é apenas data, números ou links
                if (
                    !/^\d+[\d\/\-\s]*$/.test(text) &&
                    !text.toLowerCase().includes("sent") &&
                    !/^https?:\/\//.test(text)
                ) {
                    log(
                        `Encontrado na estrutura da tabela (célula ${i}):`,
                        text
                    );
                    return text;
                }
            }
        }

        return "";
    }

    // Estratégia 5: Buscar por proximidade usando XPath-like logic
    function findEventDescriptionByProximity(linkElement) {
        log("Buscando por proximidade...");

        // Buscar elementos próximos que podem conter descrição
        const parent = linkElement.closest("td") || linkElement.closest("tr");
        if (!parent) return "";

        // Buscar em elementos irmãos
        const siblings = parent.parentElement
            ? Array.from(parent.parentElement.children)
            : [];

        for (const sibling of siblings) {
            if (sibling === parent) continue;

            const text = sibling.textContent.trim();
            if (
                text.length > 20 &&
                text.length < 200 &&
                !text.toLowerCase().includes("sent") &&
                !/^\d+[\d\/\-\s]*$/.test(text)
            ) {
                // Verificar se contém palavras típicas de processo judicial
                if (
                    /julgamento|decisão|sentença|audiência|despacho|intimação|publicação|prolação/i.test(
                        text
                    )
                ) {
                    log(`Encontrado por proximidade:`, text);
                    return text;
                }
            }
        }

        return "";
    } // Encontrar documentos relevantes com informações detalhadas
    function findDocumentosRelevantes() {
        const pageType = detectPageType();
        log(` Tipo de página detectado: ${pageType}`);

        // Construir seletor dinamicamente baseado nos tipos configurados
        const selectors = Object.values(TIPOS_DOCUMENTO_RELEVANTE)
            .map((tipo) => [
                `a.infraLinkDocumento[data-nome="${tipo.dataNome}"]`,
                `a[data-nome="${tipo.dataNome}"]`,
            ])
            .flat()
            .join(", ");

        const links = document.querySelectorAll(selectors);
        log(" Links de documentos relevantes encontrados:", links.length);

        const documentosData = [];

        // PRIMEIRA ETAPA: Coletar informações básicas dos links
        links.forEach((link, i) => {
            const texto = link.textContent.trim();
            const href = link.getAttribute("href");

            log(` DOC ${i + 1}:`, {
                texto: texto,
                href: href,
                dataId: link.getAttribute("data-id"),
                onClick: link.getAttribute("onclick"),
                element: link,
            });

            // Verificar se é um dos tipos configurados
            const tipoEncontrado = Object.values(
                TIPOS_DOCUMENTO_RELEVANTE
            ).find((tipo) => texto === tipo.nome || texto.includes(tipo.nome));

            if (tipoEncontrado) {
                // Extrair informações do tooltip para diferenciar as sentenças
                const onmouseover = link.getAttribute("onmouseover") || "";
                const dadosIconLink =
                    href.match(/dadosIconLink=([^&]+)/)?.[1] || "";

                // Tentar extrair número do evento da URL
                const eventoMatch = href.match(/evento=([^&]+)/);
                const docMatch = href.match(/doc=([^&]+)/);
                const seqEventoMatch = href.match(/numSeqEvento.*?(\d+)/);

                // Extrair informações do tooltip se disponível
                let tipoDocumento = "";
                let tamanho = "";
                let seqEvento = "";

                if (onmouseover.includes("infraTooltipMostrar")) {
                    const tooltipMatch = onmouseover.match(
                        /infraTooltipMostrar\('([^']+)'/
                    );
                    if (tooltipMatch) {
                        const tooltipContent = tooltipMatch[1];
                        const tipoMatch = tooltipContent.match(
                            /Tipo Documento:.*?<font[^>]*>([^<]+)/
                        );
                        const tamanhoMatch = tooltipContent.match(
                            /Tamanho:.*?<font[^>]*>([^<]+)/
                        );

                        if (tipoMatch) tipoDocumento = tipoMatch[1].trim();
                        if (tamanhoMatch) tamanho = tamanhoMatch[1].trim();
                    }
                }

                // Tentar extrair sequência do evento dos dados codificados
                if (dadosIconLink) {
                    try {
                        const decoded = atob(dadosIconLink);
                        const seqMatch = decoded.match(
                            /"numSeqEvento";s:\d+:"(\d+)"/
                        );
                        if (seqMatch) seqEvento = seqMatch[1];
                    } catch (e) {
                        log(" Erro ao decodificar dadosIconLink:", e);
                    }
                }

                // Armazenar dados básicos do link
                documentosData.push({
                    element: link,
                    href: href,
                    texto: texto,
                    tipo: tipoEncontrado,
                    eventoId: eventoMatch?.[1] || "",
                    docId: docMatch?.[1] || "",
                    seqEvento: seqEvento || seqEventoMatch?.[1] || "",
                    tipoDocumento: tipoDocumento || tipoEncontrado.descricao,
                    tamanho: tamanho || "",
                    index: i + 1,
                });

                log(
                    ` Documento encontrado: ${texto} (${tipoEncontrado.descricao})!`,
                    {
                        index: i + 1,
                        url: href,
                        eventoId: eventoMatch?.[1],
                        seqEvento: seqEvento,
                        tipoDocumento: tipoDocumento,
                        tamanho: tamanho,
                    }
                );
            }
        });

        // SEGUNDA ETAPA: Se estivermos na página da lista de documentos, buscar as descrições dos eventos
        if (pageType === "lista_documentos" && documentosData.length > 0) {
            log(
                " Página da lista de documentos detectada - buscando descrições dos eventos..."
            );

            // Para cada documento relevante, encontrar a descrição na mesma linha (tr)
            documentosData.forEach((linkData, index) => {
                log(` Buscando descrição para documento #${index + 1}...`);

                let eventoDescricao = "";
                let eventoData = "";
                let eventoMagistrado = "";
                const linkElement = linkData.element; // Encontrar a linha (tr) do evento que contém o link
                // O link está em uma tabela aninhada, então precisamos buscar o tr principal
                const eventRow =
                    linkElement.closest("tr[id^='trEvento']") ||
                    linkElement.closest("tr[id*='Evento']") ||
                    linkElement.closest("tr[data-parte]");

                if (eventRow) {
                    log(
                        ` Link está na linha do evento: ${
                            eventRow.id ||
                            eventRow.getAttribute("data-parte") ||
                            "identificador não encontrado"
                        }`
                    );

                    // Buscar a célula de descrição do evento na mesma linha
                    const eventDescCell = eventRow.querySelector(
                        "td.infraEventoDescricao"
                    );

                    if (eventDescCell) {
                        eventoDescricao = eventDescCell.textContent.trim();
                        log(
                            `📝 Descrição encontrada na linha do evento: "${eventoDescricao}"`
                        );
                    } else {
                        log(
                            "⚠️ Célula td.infraEventoDescricao não encontrada na linha do evento"
                        );

                        // Fallback: buscar qualquer elemento com classe infraEventoDescricao na linha
                        const fallbackDescElement = eventRow.querySelector(
                            ".infraEventoDescricao"
                        );
                        if (fallbackDescElement) {
                            eventoDescricao =
                                fallbackDescElement.textContent.trim();
                            log(
                                `📝 Descrição encontrada via fallback: "${eventoDescricao}"`
                            );
                        } else {
                            // Debug: mostrar todas as células da linha para entender a estrutura
                            const allCells = eventRow.querySelectorAll("td");
                            log(
                                `🔍 Debug - Total de células na linha: ${allCells.length}`
                            );
                            allCells.forEach((cell, index) => {
                                log(
                                    `📋 Célula ${index + 1}: "${cell.textContent
                                        .trim()
                                        .substring(0, 50)}" (classe: ${
                                        cell.className
                                    })`
                                );
                            });
                        }
                    }

                    // Buscar informações do magistrado/vara
                    const magistradoCell =
                        eventRow.querySelector("label.infraEventoUsuario") ||
                        eventRow.querySelector("td.infraEventoUsuario");

                    log(
                        `🔍 Debug Magistrado - Célula encontrada: ${!!magistradoCell} (${
                            magistradoCell
                                ? magistradoCell.tagName.toLowerCase()
                                : "N/A"
                        })`
                    );
                    if (magistradoCell) {
                        log(
                            `🔍 Debug Magistrado - Elemento: <${magistradoCell.tagName.toLowerCase()}> com classe: ${
                                magistradoCell.className
                            }`
                        );
                        log(
                            `🔍 Debug Magistrado - Conteúdo da célula: "${magistradoCell.textContent.trim()}"`
                        );

                        const onmouseoverAttr =
                            magistradoCell.getAttribute("onmouseover");
                        const titleAttr = magistradoCell.getAttribute("title");
                        const tooltipAttr =
                            magistradoCell.getAttribute("data-tooltip");

                        log(
                            `🔍 Debug Magistrado - Atributo onmouseover: ${!!onmouseoverAttr}`
                        );
                        log(
                            `🔍 Debug Magistrado - Atributo title: ${!!titleAttr}`
                        );
                        log(
                            `🔍 Debug Magistrado - Atributo data-tooltip: ${!!tooltipAttr}`
                        );

                        // Tentar extrair de onmouseover primeiro
                        if (onmouseoverAttr) {
                            log(
                                `🔍 Debug Magistrado - Conteúdo onmouseover: "${onmouseoverAttr}"`
                            );

                            // Estratégias múltiplas para extrair o texto do magistrado
                            let magistradoEncontrado = false;

                            // Estratégia 1: Texto entre aspas simples ou duplas
                            const magistradoMatch1 =
                                onmouseoverAttr.match(/['"]([^'"]+)['"]/);
                            if (magistradoMatch1 && magistradoMatch1[1]) {
                                eventoMagistrado = magistradoMatch1[1].trim();
                                magistradoEncontrado = true;
                                log(
                                    `🔍 Estratégia 1 - Magistrado/Vara encontrado: "${eventoMagistrado}"`
                                );
                            }

                            // Estratégia 2: Texto após "infraTooltipMostrar"
                            if (!magistradoEncontrado) {
                                const magistradoMatch2 = onmouseoverAttr.match(
                                    /infraTooltipMostrar\(['"]([^'"]+)['"]\)/
                                );
                                if (magistradoMatch2 && magistradoMatch2[1]) {
                                    eventoMagistrado =
                                        magistradoMatch2[1].trim();
                                    magistradoEncontrado = true;
                                    log(
                                        `🔍 Estratégia 2 - Magistrado/Vara encontrado: "${eventoMagistrado}"`
                                    );
                                }
                            }

                            // Estratégia 3: Qualquer texto que pareça nome/cargo entre parênteses ou tags
                            if (!magistradoEncontrado) {
                                const magistradoMatch3 = onmouseoverAttr.match(
                                    />\s*([^<>]+(?:juiz|magistrad|vara|gabinete)[^<>]*)\s*</i
                                );
                                if (magistradoMatch3 && magistradoMatch3[1]) {
                                    eventoMagistrado =
                                        magistradoMatch3[1].trim();
                                    magistradoEncontrado = true;
                                    log(
                                        `🔍 Estratégia 3 - Magistrado/Vara encontrado: "${eventoMagistrado}"`
                                    );
                                }
                            }

                            // Estratégia 4: Fallback - qualquer texto substancial
                            if (!magistradoEncontrado) {
                                const magistradoMatch4 = onmouseoverAttr.match(
                                    />\s*([A-Za-zÀ-ÿ\s]{10,})\s*</
                                );
                                if (magistradoMatch4 && magistradoMatch4[1]) {
                                    eventoMagistrado =
                                        magistradoMatch4[1].trim();
                                    magistradoEncontrado = true;
                                    log(
                                        `🔍 Estratégia 4 - Magistrado/Vara encontrado: "${eventoMagistrado}"`
                                    );
                                }
                            }

                            if (!magistradoEncontrado) {
                                log(
                                    `❌ Nenhuma estratégia conseguiu extrair texto do onmouseover`
                                );
                            }
                        }

                        // Se não conseguiu pelo onmouseover, tentar title
                        if (!eventoMagistrado && titleAttr) {
                            log(
                                `🔍 Tentando extrair do atributo title: "${titleAttr}"`
                            );
                            if (titleAttr.length > 5) {
                                eventoMagistrado = titleAttr.trim();
                                log(
                                    `🔍 Magistrado/Vara encontrado no title: "${eventoMagistrado}"`
                                );
                            }
                        }

                        // Se não conseguiu pelo title, tentar data-tooltip
                        if (!eventoMagistrado && tooltipAttr) {
                            log(
                                `🔍 Tentando extrair do atributo data-tooltip: "${tooltipAttr}"`
                            );
                            if (tooltipAttr.length > 5) {
                                eventoMagistrado = tooltipAttr.trim();
                                log(
                                    `🔍 Magistrado/Vara encontrado no data-tooltip: "${eventoMagistrado}"`
                                );
                            }
                        }

                        // Fallback final: usar o texto da própria célula se tiver conteúdo
                        if (!eventoMagistrado) {
                            const cellText = magistradoCell.textContent.trim();
                            if (
                                cellText &&
                                cellText.length > 3 &&
                                !cellText.match(/^\d+$/)
                            ) {
                                eventoMagistrado = cellText;
                                log(
                                    `🔍 Magistrado/Vara encontrado no texto da célula: "${eventoMagistrado}"`
                                );
                            }
                        }

                        // Formatar informações do magistrado/advogado
                        if (eventoMagistrado) {
                            const magistradoFormatado =
                                formatarMagistradoAdvogado(eventoMagistrado);
                            if (
                                typeof magistradoFormatado === "object" &&
                                magistradoFormatado.tipo
                            ) {
                                // Armazenar informações estruturadas
                                linkData.magistradoInfo = magistradoFormatado;
                                eventoMagistrado = magistradoFormatado.nome;
                            } else {
                                eventoMagistrado = magistradoFormatado;
                            }
                            log(
                                `🔍 Informações formatadas: "${eventoMagistrado}"`
                            );
                        }

                        if (!eventoMagistrado) {
                            log(
                                `❌ Nenhuma informação de magistrado/advogado encontrada`
                            );
                        }
                    } else {
                        log(
                            `❌ Elemento label.infraEventoUsuario OU td.infraEventoUsuario não encontrado`
                        );

                        // Debug: verificar todas as células da linha para encontrar possíveis alternativas
                        const allCells = eventRow.querySelectorAll("td, label");
                        log(
                            `🔍 Debug - Verificando todos os ${allCells.length} elementos (td/label) da linha:`
                        );
                        allCells.forEach((cell, idx) => {
                            log(
                                `📋 Elemento ${
                                    idx + 1
                                }: <${cell.tagName.toLowerCase()}> classe="${
                                    cell.className
                                }", texto="${cell.textContent
                                    .trim()
                                    .substring(
                                        0,
                                        30
                                    )}", onmouseover="${!!cell.getAttribute(
                                    "onmouseover"
                                )}"`
                            );
                        });
                    }

                    // Buscar a célula de data do evento na mesma linha (geralmente é a 3ª coluna)
                    const eventCells = eventRow.querySelectorAll("td");
                    if (eventCells.length >= 3) {
                        // A data geralmente está na 3ª célula (índice 2)
                        const dateCell = eventCells[2];
                        if (dateCell) {
                            const dateText = dateCell.textContent.trim();
                            // Verificar se parece uma data (formato XX/XX/XXXX)
                            if (dateText.match(/\d{2}\/\d{2}\/\d{4}/)) {
                                eventoData = dateText;
                                log(
                                    `📅 Data encontrada na linha do evento: "${eventoData}"`
                                );
                            }
                        }
                    }

                    if (!eventoData) {
                        // Fallback: buscar qualquer texto que pareça uma data na linha
                        const allText = eventRow.textContent;
                        const dateMatch = allText.match(
                            /(\d{2}\/\d{2}\/\d{4}[\s\d:]*)/
                        );
                        if (dateMatch) {
                            eventoData = dateMatch[1].trim();
                            log(
                                `📅 Data encontrada via fallback: "${eventoData}"`
                            );
                        }
                    }
                } else {
                    log(
                        " Não foi possível encontrar a linha (tr) do evento que contém o link do documento"
                    );

                    // Debug: verificar estrutura ao redor do link
                    log(" Debug - Estrutura ao redor do link:");
                    let parent = linkElement.parentElement;
                    let level = 0;
                    while (parent && level < 5) {
                        log(
                            ` Nível ${level}: ${parent.tagName} (id: ${
                                parent.id || "N/A"
                            }, classe: ${parent.className || "N/A"})`
                        );
                        parent = parent.parentElement;
                        level++;
                    }
                }

                // Adicionar a descrição, data e magistrado encontrados ao objeto do link
                linkData.eventoDescricao =
                    eventoDescricao || linkData.tipo.descricao;
                linkData.eventoData = eventoData || "";
                linkData.eventoMagistrado = eventoMagistrado || "";
                log(
                    `📋 Dados finais para documento #${
                        index + 1
                    }: Descrição: "${linkData.eventoDescricao}", Data: "${
                        linkData.eventoData
                    }", Magistrado: "${linkData.eventoMagistrado}"`
                );
            });
        } else {
            log(
                " Não é página de lista de documentos ou não há documentos relevantes - descrições não serão buscadas"
            );
            // Se não estivermos na lista de documentos, usar descrição padrão do tipo
            documentosData.forEach((linkData) => {
                linkData.eventoDescricao = linkData.tipo.descricao;
                linkData.eventoData = "";
                linkData.eventoMagistrado = "";
            });
        }

        // Converter dados coletados para o formato final
        const documentosRelevantes = documentosData.map((linkData) => ({
            element: linkData.element,
            href: linkData.href,
            texto: linkData.texto,
            tipo: linkData.tipo,
            eventoId: linkData.eventoId,
            docId: linkData.docId,
            seqEvento: linkData.seqEvento,
            tipoDocumento: linkData.tipoDocumento,
            tamanho: linkData.tamanho,
            eventoDescricao: linkData.eventoDescricao,
            eventoData: linkData.eventoData,
            eventoMagistrado: linkData.eventoMagistrado,
            magistradoInfo: linkData.magistradoInfo, // Informações estruturadas
            index: linkData.index,
        }));

        return documentosRelevantes;
    }

    // Abrir documento relevante automaticamente (com suporte a múltiplos documentos)
    async function autoOpenDocumentoRelevante() {
        const pageType = detectPageType();
        log(" Tipo de página:", pageType);

        if (pageType !== "lista_documentos") {
            log(" Não está na página de lista de documentos");
            return false;
        }

        const documentosRelevantes = findDocumentosRelevantes();

        if (documentosRelevantes.length === 0) {
            log(" Nenhum documento relevante encontrado");
            showNotification(
                "Nenhum documento relevante encontrado nesta página",
                "error"
            );
            return false;
        }

        let selectedDocument;

        if (documentosRelevantes.length === 1) {
            // Apenas um documento encontrado
            selectedDocument = documentosRelevantes[0];
            log(" Um documento encontrado, selecionando automaticamente");
        } else {
            // Múltiplos documentos encontrados
            log(
                ` ${documentosRelevantes.length} documentos encontrados, solicitando seleção do usuário`
            );

            log(
                " DEBUG: documentosRelevantes antes do modal:",
                documentosRelevantes.map((doc) => ({
                    index: doc.index,
                    tipo: doc.tipo.descricao,
                    eventoDescricao: doc.eventoDescricao,
                    seqEvento: doc.seqEvento,
                }))
            );
            selectedDocument = await showDocumentSelectionModal(
                documentosRelevantes
            );

            if (!selectedDocument) {
                log(" Usuário cancelou a seleção");
                return false;
            }
        }

        log(" Abrindo documento selecionado:", selectedDocument.href);
        showNotification(
            `Abrindo ${selectedDocument.tipo.descricao} selecionada...`,
            "info"
        );

        // Abrir em uma nova aba
        window.open(selectedDocument.href, "_blank");

        return true;
    }

    // Extrair texto do documento
    async function autoExtractText() {
        const pageType = detectPageType();
        log(" Tipo de página:", pageType);

        // Aceitar múltiplos tipos de página de documento
        const validDocumentTypes = [
            "documento_especifico",
            "documento_html",
            "documento_pdf",
        ];

        if (!validDocumentTypes.includes(pageType)) {
            // Se não é um tipo de documento reconhecido, verificar se há documentos na página
            const pageHTML = document.documentElement.outerHTML;
            const hasDocumentHtml = pageHTML.includes("acessar_documento&id");
            const hasDocumentPdf = pageHTML.includes("acessar_documento&amp");

            console.log(" Verificação adicional para página não reconhecida:", {
                pageType: pageType,
                hasDocumentHtml: hasDocumentHtml,
                hasDocumentPdf: hasDocumentPdf,
            });

            if (!hasDocumentHtml && !hasDocumentPdf) {
                log(" Não está na página do documento específico");
                showNotification(
                    "Execute na página do documento, não na lista",
                    "error"
                );
                return null;
            } else {
                log(" Página contém documentos, prosseguindo com extração...");
            }
        }

        // Aguardar documento carregar completamente
        await waitForDocumentLoad();

        // DETECTAR SE É PDF PRIMEIRO (múltiplas estratégias)
        log(" Verificando tipo de documento...");

        // ESTRATÉGIA PRINCIPAL: Verificar padrão específico do eProc para PDF
        const urlCurrentPage = window.location.href;
        const pageContainsPdfPattern = urlCurrentPage.includes(
            "acao=acessar_documento&doc="
        );

        // ESTRATÉGIA SECUNDÁRIA: Verificar se há links/formulários para PDF na página
        const pageHasPdfLinks = document.body.innerHTML.includes(
            "acao=acessar_documento&doc="
        );

        log(" Detecção eProc específica:", {
            currentUrl: urlCurrentPage,
            hasPdfPattern: pageContainsPdfPattern,
            hasPdfLinksInPage: pageHasPdfLinks,
        });

        // Estratégias complementares (mantidas como fallback)
        // Estratégia 3: Embed com PDF
        const pdfEmbed = document.querySelector(
            'embed[type="application/x-google-chrome-pdf"]'
        );

        // Estratégia 4: Object com PDF
        const pdfObject = document.querySelector(
            'object[type="application/pdf"]'
        );

        // Estratégia 5: Iframe com PDF
        const pdfIframe = document.querySelector('iframe[src*=".pdf"]');

        // Estratégia 6: Verificar se URL atual contém outros indicadores de PDF
        const urlContainsPdf =
            window.location.href.includes(".pdf") ||
            document.title.toLowerCase().includes("pdf");

        // Estratégia 7: Verificar se há elementos que indicam visualização de PDF
        const hasPdfViewer =
            document.querySelector("#plugin") ||
            document.querySelector('[id*="pdf"]') ||
            document.querySelector('[class*="pdf"]');

        // DECISÃO FINAL: eProc específico tem prioridade
        const isPdfDocument =
            pageContainsPdfPattern ||
            pageHasPdfLinks ||
            pdfEmbed ||
            pdfObject ||
            pdfIframe ||
            urlContainsPdf ||
            hasPdfViewer;

        log(` Detecção de PDF: ${isPdfDocument ? "SIM" : "NÃO"}`, {
            eproc_currentUrl: pageContainsPdfPattern,
            eproc_pageLinks: pageHasPdfLinks,
            pdfEmbed: !!pdfEmbed,
            pdfObject: !!pdfObject,
            pdfIframe: !!pdfIframe,
            urlContainsPdf: urlContainsPdf,
            hasPdfViewer: !!hasPdfViewer,
        });

        if (isPdfDocument) {
            log(" PDF detectado!");

            // Modal customizado para opções de PDF
            const userChoice = await showPdfOptionsModal();
            // Modal customizado para opções de PDF
            function showPdfOptionsModal() {
                return new Promise((resolve) => {
                    const overlay = document.createElement("div");
                    overlay.className = "help-modal-overlay";
                    overlay.innerHTML = `
 <div class="help-modal" style="max-width: 400px;">
 <div class="help-modal-header">
 <h2 style="font-size:1.1rem;display:flex;align-items:center;gap:8px;">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.2em;height:1.2em;">
 <rect width="16" height="12" x="4" y="8" rx="2" />
 <path d="M2 14h2" />
 <path d="M20 14h2" />
 </svg>
 PDF detectado!
 </h2>
 <button class="help-close-btn" aria-label="Fechar" style="margin-left:auto;">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 6-12 12" /><path d="m6 6 12 12" /></svg>
 </button>
 </div>
 <div class="help-modal-content" style="padding:24px 20px 20px 20px;">
 <div style="margin-bottom:18px;display:flex;align-items:center;gap:8px;">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.1em;height:1.1em;color:#134377;"><rect width="16" height="12" x="4" y="8" rx="2" /></svg>
 <span style="color:var(--color-text-main);font-size:1rem;">PDF detectado nesta página.</span>
 </div>
 <div style="margin-bottom:20px;">
 <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1em;height:1em;color:#134377;"><polyline points="20 6 9 17 4 12" /></svg>
 <span style="color:var(--color-text-main);">Tentar extrair texto diretamente do PDF</span>
 </div>
 <div style="display:flex;align-items:center;gap:8px;">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1em;height:1em;color:#e57373;"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
 <span style="color:var(--color-text-main);">Baixar PDF e usar ChatGPT com upload</span>
 </div>
 </div>
 <div style="display:flex;gap:12px;justify-content:flex-end;">
 <button class="btn primary" id="pdf-ok-btn" style="min-width:90px;">OK</button>
 <button class="btn" id="pdf-cancel-btn" style="min-width:90px;">Cancelar</button>
 </div>
 </div>
 </div>
 `;
                    document.body.appendChild(overlay);
                    const close = (result) => {
                        document.body.removeChild(overlay);
                        resolve(result);
                    };
                    overlay.querySelector(".help-close-btn").onclick = () =>
                        close(false);
                    overlay.querySelector("#pdf-ok-btn").onclick = () =>
                        close(true);

                    const pdfCancelBtn =
                        overlay.querySelector("#pdf-cancel-btn");

                    // Adicionar hover vermelho no botão cancelar PDF
                    pdfCancelBtn.addEventListener("mouseenter", () => {
                        pdfCancelBtn.style.backgroundColor = "#91433d";
                        pdfCancelBtn.style.borderColor = "#91433d";
                    });

                    pdfCancelBtn.addEventListener("mouseleave", () => {
                        pdfCancelBtn.style.backgroundColor = "";
                        pdfCancelBtn.style.borderColor = "";
                    });

                    pdfCancelBtn.onclick = () => close(false);

                    overlay.addEventListener("click", (e) => {
                        if (e.target === overlay) close(false);
                    });
                });
            }

            if (!userChoice) {
                showNotification(
                    "PDF detectado!\n\n" +
                        "Para processar este documento:\n" +
                        "1. Clique com botão direito → 'Salvar como'\n" +
                        "2. Abra ChatGPT, Claude ou Gemini\n" +
                        "3. Faça upload do arquivo PDF\n" +
                        "4. Solicite um resumo do documento\n\n" +
                        "Esta é a forma mais confiável para PDFs!",
                    "info"
                );
                return null;
            }

            // Se usuário escolheu extração direta, prosseguir para extração de texto
            log(" Usuário escolheu extração direta de texto");
            const pdfElement = pdfEmbed || pdfObject || pdfIframe;

            if (!pdfElement) {
                showNotification(
                    " PDF detectado mas elemento não acessível!\n\n" +
                        "Solução:\n" +
                        "1. Baixe o PDF manualmente\n" +
                        "2. Use ChatGPT/Claude com upload do arquivo\n\n" +
                        " Limitação técnica do navegador.",
                    "warning"
                );
                return null;
            }

            const textoExtraido = await extractTextFromPDF(pdfElement);

            if (!textoExtraido) {
                log(
                    " Extração direta falhou, retornando null para parar processamento"
                );
                // Não continuar para processamento HTML quando extração direta falha
                return null;
            }

            return textoExtraido;
        }

        // SE NÃO É PDF, PROCESSAR COMO DOCUMENTO HTML NORMAL
        log(" Documento HTML detectado, processando...");

        // Verificar se há seção do documento (para sentenças HTML)
        const sectionDocumento = document.querySelector(
            'section[data-nome="sentenca"]'
        );
        if (!sectionDocumento) {
            log(" Section do documento não encontrada");

            // Verificar se pode ser um PDF que não foi detectado
            const bodyText = document.body.textContent.toLowerCase();
            const bodyHtml = document.body.innerHTML;

            // Usar a mesma detecção específica do eProc
            const possiblePdf =
                bodyText.includes("pdf") ||
                bodyText.includes("adobe") ||
                bodyText.includes("acrobat") ||
                bodyHtml.includes("acao=acessar_documento&doc=") || // eProc específico
                document.querySelector("embed, object") ||
                window.location.href.includes("doc=") ||
                window.location.href.includes("documento");

            if (possiblePdf) {
                showNotification(
                    "Possível PDF detectado!\n\n" +
                        "Se este é um documento PDF:\n" +
                        "1. Recarregue a página e tente novamente\n" +
                        "2. Ou baixe o PDF e use ChatGPT com upload\n\n" +
                        "Se for HTML: verifique se o documento carregou completamente",
                    "warning"
                );
            } else {
                showNotification(
                    " Conteúdo do documento não encontrado\n\n" +
                        "Possíveis causas:\n" +
                        "• Documento ainda está carregando\n" +
                        "• Formato não suportado\n" +
                        "• Página de erro ou acesso negado\n\n" +
                        " Tente recarregar a página",
                    "error"
                );
            }
            return null;
        }

        // VERIFICAÇÃO REMOVIDA - estava rejeitando páginas válidas de documento
        // Os indicadores como "processo:", "SENT1", etc. aparecem legitimamente nas páginas de sentença
        log(" Página do documento válida, prosseguindo com extração...");

        // Extrair usando classes específicas do eProc
        const seletorParagrafos = [
            "p.paragrafoPadrao",
            "p.paragrafoComRecuo",
            "p.paragrafoCentralizado",
            "p.paragrafoSemRecuo",
            "p.citacao",
            "p.citacao2",
            "span.dispositivo",
            "div.paragrafoPadrao",
            "div.paragrafoComRecuo",
            "div.paragrafoCentralizado",
            "div.paragrafoSemRecuo",
        ].join(", ");

        const paragrafosTexto =
            sectionDocumento.querySelectorAll(seletorParagrafos);
        log(
            ` Encontrados ${paragrafosTexto.length} parágrafos com classes específicas`
        );

        let textosParágrafos = [];

        if (paragrafosTexto.length > 0) {
            // Extrair texto dos parágrafos com classes específicas
            paragrafosTexto.forEach((paragrafo, idx) => {
                const textoP =
                    paragrafo.innerText || paragrafo.textContent || "";
                if (textoP.trim().length > 0) {
                    textosParágrafos.push(textoP.trim());
                    log(
                        ` P${idx + 1} (${
                            paragrafo.className
                        }): ${textoP.substring(0, 100)}...`
                    );
                }
            });
        } else {
            log(" Nenhum parágrafo com classes específicas encontrado");
            log(" Tentando extração da seção completa...");

            // Fallback: extrair texto completo da seção (limpo)
            const elementoLimpo = sectionDocumento.cloneNode(true);

            // Remover elementos indesejados
            const elementosParaRemover = elementoLimpo.querySelectorAll(
                "nav, header, footer, .menu, .navbar, .breadcrumb, .navigation, " +
                    '[class*="link"], [class*="menu"], [class*="nav"], [class*="toolbar"], ' +
                    '[class*="button"], [class*="btn"], [id*="menu"], [id*="nav"], ' +
                    "a, button, input, select, textarea, script, style, " +
                    '[class*="infra"], [id*="infra"], [class*="processo"], [id*="processo"], ' +
                    '[class*="evento"], [id*="evento"], [class*="documento"], [id*="documento"], ' +
                    ".fechar, .copiar, .print, .imprimir, .voltar, .close"
            );

            elementosParaRemover.forEach((el) => el.remove());

            const textoCompleto =
                elementoLimpo.innerText || elementoLimpo.textContent || "";
            if (textoCompleto.trim().length > 0) {
                textosParágrafos.push(textoCompleto.trim());
            }
        }

        if (textosParágrafos.length === 0) {
            log(" Nenhum texto válido encontrado");
            showNotification(
                " Nenhum texto válido encontrado no documento",
                "error"
            );
            return null;
        }

        const textoFinal = textosParágrafos.join("\n\n");

        // Limpeza final de metadados residuais
        const texto = textoFinal
            .replace(/processo\s+\d+[-\d.]+\/\w+/gi, "") // Remove números de processo
            .replace(/evento\s+\d+/gi, "") // Remove referências a eventos
            .replace(/SENT\d+/gi, "") // Remove referências SENT
            .replace(/DOC\d+/gi, "") // Remove referências DOC
            .replace(/\d+\.\d+/g, "") // Remove números de seção
            .replace(/Fechar|Copiar|Print|Imprimir|Voltar/gi, "") // Remove textos de botões
            .replace(/Copiar link para documento:/gi, "") // Remove texto específico
            .replace(/^\s*[^\w\s]*\s*/, "") // Remove caracteres especiais do início
            .replace(/\s+/g, " ") // Normaliza espaços
            .trim();

        log(" Texto extraído:", texto.length, "caracteres");
        log(" Prévia do texto:", texto.substring(0, 200) + "...");

        if (texto.trim().length < 100) {
            log(" Texto muito pequeno");
            showNotification("Texto extraído é muito pequeno", "warning");
            return null;
        }

        showNotification(
            ` Texto extraído: ${texto.length} caracteres`,
            "success"
        );
        return texto.trim();
    }

    // Extrair texto de documento PDF (petições iniciais)
    async function extractTextFromPDF() {
        log("📄 Tentando extrair texto de documento PDF...");

        // Buscar elementos PDF na página com seletores mais abrangentes
        const pdfSelectors = [
            'embed[type="application/pdf"]',
            'iframe[src*=".pdf"]',
            'object[type="application/pdf"]',
            'iframe[title*="PDF"]',
            'embed[src*=".pdf"]',
            'object[data*=".pdf"]',
            'iframe[src*="pdf"]',
            'embed[src*="pdf"]',
            ".pdf-viewer",
            "#pdf-viewer",
            '[class*="pdf"]',
            '[id*="pdf"]',
        ];

        let pdfElements = [];

        // Testar cada seletor
        for (const selector of pdfSelectors) {
            const elements = document.querySelectorAll(selector);
            if (elements.length > 0) {
                log(
                    `📄 Encontrados ${elements.length} elemento(s) PDF com seletor: ${selector}`
                );
                pdfElements.push(...elements);
            }
        }

        // Se não encontrou com seletores específicos, buscar por características
        if (pdfElements.length === 0) {
            log("🔍 Buscando PDFs por características...");

            const allElements = [
                ...document.querySelectorAll("iframe"),
                ...document.querySelectorAll("embed"),
                ...document.querySelectorAll("object"),
            ];

            allElements.forEach((element) => {
                const src = element.src || element.data || "";
                const type = element.type || "";
                const title = element.title || "";

                if (
                    src.toLowerCase().includes("pdf") ||
                    type.toLowerCase().includes("pdf") ||
                    title.toLowerCase().includes("pdf")
                ) {
                    pdfElements.push(element);
                }
            });
        }

        if (pdfElements.length === 0) {
            log("❌ Nenhum elemento PDF encontrado na página");
            log("🔍 Tentando fallback para extração genérica...");

            // Fallback: se a URL sugere PDF, ainda tentar processo manual
            const url = window.location.href;
            if (
                url.toLowerCase().includes("pdf") ||
                url.includes("acessar_documento") ||
                url.includes("processo_consultar_externo_documento")
            ) {
                log("🔄 URL sugere documento - tentando processo manual");
            } else {
                showNotification("❌ Documento PDF não detectado", "error");
                return null;
            }
        } else {
            log(`📄 ${pdfElements.length} elemento(s) PDF encontrado(s)`);
        }

        // Para PDFs incorporados, não é possível extrair texto automaticamente
        // Orientar o usuário para processo manual
        const confirmAction = confirm(
            "🔍 DOCUMENTO PDF DETECTADO\n\n" +
                "Para documentos PDF, você precisa:\n\n" +
                "1. Selecionar todo o texto do PDF (Ctrl+A)\n" +
                "2. Copiar o texto selecionado (Ctrl+C)\n" +
                "3. Clicar 'OK' para processar o texto copiado\n\n" +
                "Continuar?"
        );

        if (!confirmAction) {
            log("❌ Usuário cancelou o processo manual");
            return null;
        }

        // Aguardar um momento para o usuário copiar
        showNotification(
            "⏳ Aguardando... Copie o texto do PDF agora!\n\nSelecione todo o texto (Ctrl+A) e copie (Ctrl+C)",
            "info"
        );

        // Aguardar 5 segundos para dar mais tempo ao usuário
        await new Promise((resolve) => setTimeout(resolve, 5000));

        try {
            // Tentar ler do clipboard
            const clipboardText = await navigator.clipboard.readText();

            if (!clipboardText || clipboardText.trim().length < 50) {
                throw new Error("Texto insuficiente no clipboard");
            }

            log(
                `✅ Texto obtido do clipboard: ${clipboardText.length} caracteres`
            );
            showNotification(
                `✅ Texto PDF processado: ${clipboardText.length} caracteres`,
                "success"
            );

            return clipboardText.trim();
        } catch (error) {
            log("❌ Erro ao ler clipboard:", error);
            showNotification(
                "❌ Não foi possível ler o texto copiado.\n\n" +
                    "Certifique-se de:\n" +
                    "• Selecionar todo o texto do PDF (Ctrl+A)\n" +
                    "• Copiar o texto selecionado (Ctrl+C)\n" +
                    "• Permitir acesso ao clipboard quando solicitado\n\n" +
                    "Tente novamente!",
                "error"
            );
            return null;
        }
    }

    // Aguardar documento carregar completamente
    function waitForDocumentLoad() {
        return new Promise((resolve) => {
            if (document.readyState === "complete") {
                resolve();
            } else {
                window.addEventListener("load", resolve);
            }
        });
    }

    // Copiar para clipboard
    async function copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            log(" Texto copiado para clipboard");
            showNotification("Texto copiado para clipboard!", "success");
            return true;
        } catch (error) {
            log(" Erro ao copiar:", error);
            showNotification("Erro ao copiar texto", "error");
            return false;
        }
    }

    // Limpar caracteres invisíveis que podem causar problemas no clipboard
    function cleanInvisibleChars(text) {
        return text
            .replace(/[\u200B-\u200D\uFEFF]/g, "") // Remove zero-width chars
            .replace(/[\u00A0]/g, " ") // Replace non-breaking space with regular space
            .replace(/[\u2000-\u200A]/g, " ") // Replace various unicode spaces
            .replace(/[\u2028\u2029]/g, "\n") // Replace line/paragraph separators
            .trim();
    }

    // Copiar texto para clipboard com prefixo do ChatGPT
    async function copyToClipboardWithPrefix(texto) {
        try {
            const prefixo = `Faça um resumo extremamente sucinto do documento, em formato de apontamentos diretos (bullet points), para constar na capa do processo digital. Indique:

tipo de ação,

partes,

pedido(s) do autor,

decisão (improcedente/procedente/parcialmente procedente),

fundamentos centrais,

condenação (custas/honorários se houver).
Seja objetivo e direto, sem redação em texto corrido.

DOCUMENTO:

`;
            const textoLimpo = cleanInvisibleChars(texto);
            const textoCompleto = cleanInvisibleChars(prefixo + textoLimpo);

            log(" Debug - Texto que será copiado:");
            log(" Tamanho:", textoCompleto.length, "caracteres");
            log(
                " Prévia (primeiros 200 chars):",
                textoCompleto.substring(0, 200)
            );
            log(
                " Final (últimos 200 chars):",
                textoCompleto.substring(textoCompleto.length - 200)
            );

            await navigator.clipboard.writeText(textoCompleto);

            // Verificar se realmente foi copiado
            setTimeout(async () => {
                try {
                    const clipboardContent =
                        await navigator.clipboard.readText();
                    log(
                        " Verificação: Texto no clipboard:",
                        clipboardContent.length,
                        "caracteres"
                    );
                    log(
                        " Conteúdo real no clipboard:",
                        clipboardContent.substring(0, 200)
                    );

                    if (clipboardContent === textoCompleto) {
                        log(" Clipboard confirmado: Texto correto!");
                    } else {
                        log(
                            " ERRO: Texto no clipboard é diferente do enviado!"
                        );
                        log(" Debug diferença:");
                        log(" Esperado:", textoCompleto.length, "caracteres");
                        log(" Real:", clipboardContent.length, "caracteres");
                        log(
                            " Diferença:",
                            Math.abs(
                                clipboardContent.length - textoCompleto.length
                            ),
                            "caracteres"
                        );

                        // Verificar se é apenas uma diferença de caracteres invisíveis
                        const textoLimpo = textoCompleto.replace(
                            /[\u200B-\u200D\uFEFF]/g,
                            ""
                        );
                        const clipboardLimpo = clipboardContent.replace(
                            /[\u200B-\u200D\uFEFF]/g,
                            ""
                        );

                        if (textoLimpo === clipboardLimpo) {
                            log(
                                " Clipboard OK (apenas caracteres invisíveis diferentes)"
                            );
                        } else {
                            log(" Clipboard realmente diferente");
                            // Encontrar primeiro caractere diferente
                            for (
                                let i = 0;
                                i <
                                Math.min(
                                    textoCompleto.length,
                                    clipboardContent.length
                                );
                                i++
                            ) {
                                if (textoCompleto[i] !== clipboardContent[i]) {
                                    log(` Primeira diferença na posição ${i}:`);
                                    log(
                                        `Esperado: "${textoCompleto.substring(
                                            i - 5,
                                            i + 5
                                        )}"`
                                    );
                                    log(
                                        `Real: "${clipboardContent.substring(
                                            i - 5,
                                            i + 5
                                        )}"`
                                    );
                                    break;
                                }
                            }
                        }
                    }
                } catch (e) {
                    log(" Não foi possível verificar o clipboard:", e);
                }
            }, 100);

            log(
                ` Texto copiado com prefixo (${textoCompleto.length} caracteres)`
            );
            showNotification(
                ` Texto copiado com prefixo!\n${textoCompleto.length} caracteres prontos para o ChatGPT`,
                "success"
            );
            return true;
        } catch (error) {
            log(" Erro ao copiar texto com prefixo:", error);
            showNotification(" Erro ao copiar texto", "error");
            return false;
        }
    }

    // Enviar texto diretamente para Perplexity usando API
    async function sendToChatGPT(texto) {
        const requestId = Date.now().toString();

        try {
            debugApiCall(requestId, "INÍCIO", { textoLength: texto.length });
            log(" Enviando texto para Perplexity via API...");
            showNotification("Enviando para Perplexity...", "info");

            const apiKey = await getStoredApiKey();
            if (!apiKey) {
                debugApiCall(requestId, "ERRO", "API key não encontrada");
                showNotification(" Erro ao obter chave API", "error");
                return false;
            }

            const prompt = `Faça um resumo extremamente sucinto do documento, em formato de apontamentos diretos (bullet points), para constar na capa do processo digital. Indique:

tipo de ação,

partes,

pedido(s) do autor,

decisão (improcedente/procedente/parcialmente procedente),

fundamentos centrais,

condenação (custas/honorários se houver).
Seja objetivo e direto, sem redação em texto corrido.

DOCUMENTO:

${texto}`;

            const requestBody = {
                model: "sonar",
                messages: [
                    {
                        role: "system",
                        content:
                            "Você é um assistente especializado em resumir documentos judiciais de forma extremamente objetiva e sucinta para capas de processos digitais. Sempre responda em bullet points diretos.",
                    },
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
                max_tokens: 1200,
                temperature: 0.1,
                top_p: 0.9,
            };

            debugApiCall(requestId, "REQUEST", {
                url: "https://api.perplexity.ai/chat/completions",
                model: requestBody.model,
                promptLength: prompt.length,
                maxTokens: requestBody.max_tokens,
            });

            const response = await fetch(
                "https://api.perplexity.ai/chat/completions",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${apiKey}`,
                        "User-Agent": "eProbe-Extension/1.0",
                    },
                    body: JSON.stringify(requestBody),
                }
            );

            const responseHeaders = Object.fromEntries(
                response.headers.entries()
            );
            debugApiCall(requestId, "RESPONSE_HEADERS", {
                status: response.status,
                statusText: response.statusText,
                headers: responseHeaders,
                requestId: responseHeaders["x-request-id"] || "N/A",
                rateLimit: {
                    remaining:
                        responseHeaders["x-ratelimit-remaining-requests"],
                    resetRequests:
                        responseHeaders["x-ratelimit-reset-requests"],
                    remainingTokens:
                        responseHeaders["x-ratelimit-remaining-tokens"],
                    resetTokens: responseHeaders["x-ratelimit-reset-tokens"],
                },
            });

            if (!response.ok) {
                const errorData = await response.text();
                let errorJson = null;

                try {
                    errorJson = JSON.parse(errorData);
                } catch (e) {
                    log(" Resposta de erro não é JSON válido");
                }

                debugApiCall(requestId, "ERROR_DETAILS", {
                    status: response.status,
                    statusText: response.statusText,
                    errorText: errorData,
                    errorJson: errorJson,
                    headers: responseHeaders,
                });

                if (response.status === 401) {
                    const errorMsg =
                        errorJson?.error?.message || "Chave API inválida";
                    log(" Erro 401:", errorMsg);
                    showNotification(
                        ` ${errorMsg}. Configure uma nova chave API do Perplexity.`,
                        "error"
                    );
                    await removeStoredApiKey();
                    return false;
                } else if (response.status === 429) {
                    const rateLimitType =
                        errorJson?.error?.type || "rate_limit_exceeded";
                    const retryAfter = responseHeaders["retry-after"];

                    log(" Rate limit:", { type: rateLimitType, retryAfter });

                    if (rateLimitType === "insufficient_quota") {
                        showNotification(
                            " Cota da API Perplexity esgotada. Verifique seus créditos em perplexity.ai/settings/api",
                            "error"
                        );
                    } else {
                        showNotification(
                            ` Limite de requests atingido. Aguarde ${
                                retryAfter || "alguns minutos"
                            } antes de tentar novamente.`,
                            "warning"
                        );
                    }
                    return false;
                } else if (response.status === 403) {
                    const errorMsg =
                        errorJson?.error?.message || "Acesso negado";
                    log(" Erro 403:", errorMsg);
                    showNotification(
                        ` ${errorMsg}. Usando método manual...`,
                        "warning"
                    );
                    return await fallbackToManual(texto);
                } else if (response.status >= 500) {
                    log(" Erro do servidor Perplexity:", response.status);
                    showNotification(
                        ` Erro do servidor Perplexity (${response.status}). Usando método manual...`,
                        "warning"
                    );
                    return await fallbackToManual(texto);
                } else {
                    const errorMsg =
                        errorJson?.error?.message || `Erro ${response.status}`;
                    log(" Erro desconhecido:", errorMsg);
                    showNotification(
                        ` ${errorMsg}. Usando método manual...`,
                        "warning"
                    );
                    return await fallbackToManual(texto);
                }
            }

            const data = await response.json();

            debugApiCall(requestId, "SUCCESS", {
                responseId: responseHeaders["x-request-id"],
                model: data.model,
                usage: data.usage,
                finishReason: data.choices?.[0]?.finish_reason,
                responseLength: data.choices?.[0]?.message?.content?.length,
            });

            const resumo = data.choices[0].message.content;

            showNotification("Resumo gerado com sucesso!", "success");

            await copyToClipboard(resumo);

            showNotification(
                " Resumo pronto!\n\nO resumo do documento está na sua área de transferência.",
                "success"
            );

            return true;
        } catch (error) {
            debugApiCall(requestId, "EXCEPTION", {
                errorName: error.name,
                errorMessage: error.message,
                errorStack: error.stack,
            });

            log(" Erro ao enviar para Perplexity:", error);
            showNotification(
                " Erro de conexão na API. Usando método manual...",
                "warning"
            );

            return await fallbackToManual(texto);
        }
    }

    // Função auxiliar para fallback manual
    async function fallbackToManual(texto) {
        log(" Executando fallback para método manual");
        const copied = await copyToClipboardWithPrefix(texto);
        if (copied) {
            setTimeout(() => {
                autoOpenChatGPT();
                showNotification(
                    " Texto copiado! Cole no ChatGPT (Ctrl+V)",
                    "info"
                );
            }, 500);
        } else {
            log(" Falha ao copiar texto no fallback");
            showNotification(" Falha ao copiar texto", "error");
        }
        return false;
    }

    // Fallback: Abrir ChatGPT manualmente com clipboard
    function autoOpenChatGPT() {
        log(" Abrindo ChatGPT...");
        showNotification("Abrindo ChatGPT...", "info");

        try {
            const url = "https://chatgpt.com/";
            const chatWindow = window.open(url, "_blank");

            if (chatWindow) {
                log(" ChatGPT aberto com sucesso");
                setTimeout(() => {
                    try {
                        chatWindow.focus();
                        log(" ChatGPT focado");
                    } catch (e) {
                        log(" Não foi possível focar na janela:", e);
                    }
                }, 1000);
            } else {
                log(" Falha ao abrir ChatGPT - popup bloqueado?");
                showNotification(
                    " Não foi possível abrir ChatGPT. Verifique se popups estão bloqueados.",
                    "error"
                );
            }
        } catch (error) {
            log(" Erro ao abrir ChatGPT:", error);
            showNotification(" Erro ao abrir ChatGPT", "error");
        }
    }

    // Gerenciar chave API
    async function getStoredApiKey() {
        let apiKey = localStorage.getItem("perplexity_api_key");

        if (!apiKey) {
            // Chave codificada em Base64 para ofuscação básica
            const encodedKey =
                "cHBseC1LUEFHYXhYZVZ4Yk1wUWJ5QzNCNmpZUERPd1luSk1ka3MxcUR6YmF1N2s3c05nbUo=";
            apiKey = atob(encodedKey);
            localStorage.setItem("perplexity_api_key", apiKey);
            log(" API key do Perplexity configurada automaticamente");
        }

        return apiKey;
    }

    async function storeApiKey(apiKey) {
        if (!apiKey || !apiKey.startsWith("pplx-")) {
            throw new Error('Chave API inválida. Deve começar com "pplx-"');
        }
        localStorage.setItem("perplexity_api_key", apiKey);
        log(" Chave API do Perplexity armazenada com sucesso");
    }

    async function removeStoredApiKey() {
        localStorage.removeItem("perplexity_api_key");
        log(" Chave API do Perplexity removida");
    }

    async function validateApiKey(apiKey) {
        if (!apiKey) return false;
        if (!apiKey.startsWith("pplx-")) return false;
        if (apiKey.length < 40) return false;
        return true;
    }

    // Menu de opções
    function showOptionsMenu(x, y) {
        const existing = document.getElementById(
            "documento-relevante-options-menu"
        );
        if (existing) {
            existing.remove();
            return;
        }

        // Verificar se há botão flutuante e ajustar posição se necessário
        const floatingButton = document.getElementById("sent1-auto-button");
        const isFloatingButtonVisible =
            floatingButton && floatingButton.style.display !== "none";

        // Calcular posição para evitar sair da tela
        const menuWidth = 200;
        const menuHeight = 400; // Estimativa
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        // Se o menu vai aparecer perto do botão flutuante, ajustar posição
        if (isFloatingButtonVisible && x > screenWidth - 220 && y < 200) {
            // Mover menu para a esquerda do botão flutuante
            x = screenWidth - 240;
        }

        // Ajustar X se o menu sair da tela pela direita
        if (x + menuWidth > screenWidth) {
            x = screenWidth - menuWidth - 20;
        }

        // Ajustar Y se o menu sair da tela por baixo
        if (y + menuHeight > screenHeight) {
            y = screenHeight - menuHeight - 20;
        }

        // Garantir que não saia pela esquerda ou topo
        x = Math.max(10, x);
        y = Math.max(10, y);

        const menu = document.createElement("ul");
        menu.id = "documento-relevante-options-menu";
        menu.className = "eprobe-menu";
        menu.setAttribute("role", "menu");
        menu.style.cssText = `
 position: fixed;
 left: ${x}px;
 top: ${y}px;
 z-index: 10001;
 min-width: ${menuWidth}px;
 overflow: auto;
 border-radius: 8px;
 border: 1px solid rgb(19 67 119);
 background: #134377;
 padding: 6px;
 box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15);
 font-family: "Roboto", -apple-system, system-ui, sans-serif;
 `;

        const pageType = detectPageType();

        console.log(" Debug showOptionsMenu - pageType detectado:", pageType);
        console.log(" Debug showOptionsMenu - Posição do menu:", { x, y });

        if (pageType === "lista_documentos") {
            // Verificar quantos documentos existem para customizar o menu
            const documentosRelevantes = findDocumentosRelevantes();
            const documentCount = documentosRelevantes.length;

            let menuTitle = "Processar Documentos";
            let buttonColor = "#134377";
            let titleIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu-icon lucide-cpu"><path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>`;

            if (documentCount === 0) {
                menuTitle = "Nenhum Documento";
                buttonColor = "#ef4444";
                titleIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 6-12 12"/><path d="m6 6 12 12"/></svg>`;
            } else if (documentCount === 1) {
                const doc = documentosRelevantes[0];
                menuTitle = `1 ${doc.tipo.descricao} Encontrada`;
            } else {
                menuTitle = `${documentCount} Documentos Encontrados`;
                buttonColor = "#134377";
            }

            menu.innerHTML = `
 <li role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px; font-weight: 600; border-bottom: 1px solid rgb(148 163 184); margin-bottom: 6px;">
 ${titleIcon}
 ${menuTitle}
 </li>
 <li id="open-documento-btn" role="menuitem" style="cursor: ${
     documentCount === 0 ? "not-allowed" : "pointer"
 }; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px; ${
                documentCount === 0 ? "opacity: 0.5;" : ""
            }" ${documentCount === 0 ? 'data-disabled="true"' : ""}>
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${buttonColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
 <polyline points="14,2 14,8 20,8"/>
 <line x1="16" y1="13" x2="8" y2="13"/>
 <line x1="16" y1="17" x2="8" y2="17"/>
 <polyline points="10,9 9,9 8,9"/>
 </svg>
 ${
     documentCount === 0
         ? "Nenhum documento encontrado"
         : documentCount === 1
         ? `Processar ${documentosRelevantes[0].tipo.descricao}`
         : `Escolher entre ${documentCount} documentos`
 }
 </li>
 `;

            const openBtn = menu.querySelector("#open-documento-btn");
            if (documentCount > 0) {
                openBtn.addEventListener("mouseenter", () => {
                    openBtn.style.backgroundColor = "rgba(148, 163, 184, 0.1)";
                });
                openBtn.addEventListener("mouseleave", () => {
                    openBtn.style.backgroundColor = "transparent";
                });
                openBtn.addEventListener("click", () => {
                    menu.remove();
                    if (documentCount > 1) {
                        showSentenceProcessingOptions();
                    } else {
                        runFullAutomation();
                    }
                });
            }
        } else if (
            pageType === "documento_especifico" ||
            pageType === "documento_html" ||
            pageType === "documento_pdf"
        ) {
            // Menu para páginas de documento específico
            console.log(" Mostrando menu para documento específico");
            menu.innerHTML = `
 <li role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px; font-weight: 600; border-bottom: 1px solid rgb(148 163 184); margin-bottom: 6px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu-icon lucide-cpu"><path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>
 Processar Documento
 </li>
 <li id="api-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" stroke="none">
 <path d="M19.785 0v7.272H22.5V17.62h-2.935V24l-7.037-6.194v6.145h-1.091v-6.152L4.392 24v-6.465H1.5V7.188h2.884V0l7.053 6.494V.19h1.09v6.49L19.786 0zm-7.257 9.044v7.319l5.946 5.234V14.44l-5.946-5.397zm-1.099-.08l-5.946 5.398v7.235l5.946-5.234V8.965zm8.136 7.58h1.844V8.349H13.46l6.105 5.54v2.655zm-8.982-8.28H2.59v8.195h1.8v-2.576l6.192-5.62zM5.475 2.476v4.71h5.115l-5.115-4.71zm13.219 0l-5.115 4.71h5.115v-4.71z"/>
 </svg>
 API Perplexity
 </li>
 <li id="manual-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
 <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
 </svg>
 Método Manual
 </li>
 <li id="config-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
 <circle cx="12" cy="12" r="3"/>
 </svg>
 Configurar API
 </li>
 <li id="test-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <path d="m14.5 9.5 1 1"/>
 <path d="m15.5 8.5-4 4"/>
 <path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"/>
 <path d="M3 3v5h5"/>
 <circle cx="10" cy="14" r="2"/>
 </svg>
 Testar API Key
 </li>
 <li id="logs-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
 <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
 <line x1="9" y1="9" x2="15" y2="9"/>
 <line x1="9" y1="13" x2="15" y2="13"/>
 <line x1="9" y1="17" x2="13" y2="17"/>
 </svg>
 Ver Logs de Erro
 </li>
 `;

            // Adicionar eventos de hover e click para todos os botões
            const menuItems = menu.querySelectorAll("li[id]");
            menuItems.forEach((item) => {
                item.addEventListener("mouseenter", () => {
                    item.style.backgroundColor = "rgba(148, 163, 184, 0.1)";
                });
                item.addEventListener("mouseleave", () => {
                    item.style.backgroundColor = "transparent";
                });
            });

            menu.querySelector("#api-btn").addEventListener(
                "click",
                async () => {
                    menu.remove();
                    const texto = await autoExtractText();
                    if (texto) {
                        await sendToChatGPT(texto);
                    }
                }
            );

            menu.querySelector("#manual-btn").addEventListener(
                "click",
                async () => {
                    menu.remove();
                    const texto = await autoExtractText();
                    if (texto) {
                        const usePreview = await showPreviewOptionsModal();

                        if (usePreview) {
                            log(" Usuário escolheu preview");
                            showTextPreview(texto);
                        } else {
                            log("Usuário escolheu cópia direta");
                            const copied = await copyToClipboardWithPrefix(
                                texto
                            );
                            if (copied) {
                                log(" Texto copiado, abrindo ChatGPT...");
                                setTimeout(() => {
                                    autoOpenChatGPT();
                                    showNotification(
                                        " Texto copiado! Cole no ChatGPT (Ctrl+V)",
                                        "success"
                                    );
                                }, 500);
                            } else {
                                log(
                                    " Falha ao copiar texto no método manual direto"
                                );
                            }
                        }
                    }
                }
            );

            menu.querySelector("#config-btn").addEventListener(
                "click",
                async () => {
                    menu.remove();
                    await showApiKeyConfig();
                }
            );

            menu.querySelector("#test-btn").addEventListener(
                "click",
                async () => {
                    menu.remove();
                    await testApiKey();
                }
            );

            menu.querySelector("#logs-btn").addEventListener("click", () => {
                menu.remove();
                showErrorLogs();
            });
        } else {
            // Página não reconhecida, mas vamos verificar se há documentos
            const pageHTML = document.documentElement.outerHTML;
            const hasDocumentHtml = pageHTML.includes("acessar_documento&id");
            const hasDocumentPdf = pageHTML.includes("acessar_documento&amp");

            console.log(" Página não reconhecida, verificando documentos:", {
                hasDocumentHtml: hasDocumentHtml,
                hasDocumentPdf: hasDocumentPdf,
            });

            if (hasDocumentHtml || hasDocumentPdf) {
                // Há documentos, mostrar menu como se fosse documento específico
                console.log(
                    " Há documentos, mostrando menu de documento específico"
                );
                menu.innerHTML = `
 <li role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px; font-weight: 600; border-bottom: 1px solid rgb(148 163 184); margin-bottom: 6px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <path d="M12 8V4H8"/>
 <rect width="16" height="12" x="4" y="8" rx="2"/>
 <path d="M2 14h2"/>
 <path d="M20 14h2"/>
 <path d="M15 13v2"/>
 <path d="M9 13v2"/>
 </svg>
 Processar Documento
 </li>
 <li id="api-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" stroke="none">
 <path d="M19.785 0v7.272H22.5V17.62h-2.935V24l-7.037-6.194v6.145h-1.091v-6.152L4.392 24v-6.465H1.5V7.188h2.884V0l7.053 6.494V.19h1.09v6.49L19.786 0zm-7.257 9.044v7.319l5.946 5.234V14.44l-5.946-5.397zm-1.099-.08l-5.946 5.398v7.235l5.946-5.234V8.965zm8.136 7.58h1.844V8.349H13.46l6.105 5.54v2.655zm-8.982-8.28H2.59v8.195h1.8v-2.576l6.192-5.62zM5.475 2.476v4.71h5.115l-5.115-4.71zm13.219 0l-5.115 4.71h5.115v-4.71z"/>
 </svg>
 API Perplexity
 </li>
 <li id="manual-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
 <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
 </svg>
 Método Manual
 </li>
 <li id="config-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l-.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
 <circle cx="12" cy="12" r="3"/>
 </svg>
 Configurar API
 </li>
 <li id="test-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <path d="m14.5 9.5 1 1"/>
 <path d="m15.5 8.5-4 4"/>
 <path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"/>
 <path d="M3 3v5h5"/>
 <circle cx="10" cy="14" r="2"/>
 </svg>
 Testar API Key
 </li>
 <li id="logs-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
 <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
 <line x1="9" y1="9" x2="15" y2="9"/>
 <line x1="9" y1="13" x2="15" y2="13"/>
 <line x1="9" y1="17" x2="13" y2="17"/>
 </svg>
 Ver Logs de Erro
 </li>
 `;

                // Adicionar eventos de hover e click para todos os botões
                const menuItems = menu.querySelectorAll("li[id]");
                menuItems.forEach((item) => {
                    item.addEventListener("mouseenter", () => {
                        item.style.backgroundColor = "rgba(148, 163, 184, 0.1)";
                    });
                    item.addEventListener("mouseleave", () => {
                        item.style.backgroundColor = "transparent";
                    });
                });

                menu.querySelector("#api-btn").addEventListener(
                    "click",
                    async () => {
                        menu.remove();
                        const texto = await autoExtractText();
                        if (texto) {
                            await sendToChatGPT(texto);
                        }
                    }
                );

                menu.querySelector("#manual-btn").addEventListener(
                    "click",
                    async () => {
                        menu.remove();
                        const texto = await autoExtractText();
                        if (texto) {
                            const usePreview = await showPreviewOptionsModal();

                            if (usePreview) {
                                log(" Usuário escolheu preview");
                                showTextPreview(texto);
                            } else {
                                log("Usuário escolheu cópia direta");
                                const copied = await copyToClipboardWithPrefix(
                                    texto
                                );
                                if (copied) {
                                    log(" Texto copiado, abrindo ChatGPT...");
                                    setTimeout(() => {
                                        autoOpenChatGPT();
                                        showNotification(
                                            " Texto copiado! Cole no ChatGPT (Ctrl+V)",
                                            "success"
                                        );
                                    }, 500);
                                } else {
                                    log(
                                        " Falha ao copiar texto no método manual direto"
                                    );
                                }
                            }
                        }
                    }
                );

                menu.querySelector("#config-btn").addEventListener(
                    "click",
                    async () => {
                        menu.remove();
                        await showApiKeyConfig();
                    }
                );

                menu.querySelector("#test-btn").addEventListener(
                    "click",
                    async () => {
                        menu.remove();
                        await testApiKey();
                    }
                );

                menu.querySelector("#logs-btn").addEventListener(
                    "click",
                    () => {
                        menu.remove();
                        showErrorLogs();
                    }
                );
            } else {
                // Não há documentos, mostrar mensagem de erro
                console.log(" Não há documentos, não criando menu");
                return;
            }
        }

        document.body.appendChild(menu);

        // Verificar e prevenir sobreposições após um pequeno delay
        setTimeout(() => {
            preventElementOverlap();
        }, 100);

        document.addEventListener("click", function closeMenu(e) {
            if (!menu.contains(e.target)) {
                menu.remove();
                document.removeEventListener("click", closeMenu);
            }
        });
    }

    // Opções de processamento quando há múltiplos documentos
    function showDocumentProcessingOptions() {
        const documentosRelevantes = findDocumentosRelevantes();

        if (documentosRelevantes.length === 0) {
            showNotification(
                "❌ Nenhum documento relevante encontrado",
                "error"
            );
            return;
        }

        const existing = document.getElementById(
            "documento-relevante-selection-modal"
        );
        if (existing) {
            existing.remove();
        }

        const overlay = document.createElement("div");
        overlay.id = "documento-relevante-selection-modal";
        overlay.className = "eprobe-modal";
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 10002;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: "Roboto", -apple-system, system-ui, sans-serif;
        `;

        const modal = document.createElement("div");
        modal.style.cssText = `
            background: #1e293b;
            border-radius: 12px;
            padding: 24px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
            border: 1px solid #334155;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            color: #f8fafc;
        `;

        const title = document.createElement("h2");
        title.style.cssText = `
            margin: 0 0 20px 0;
            color: #3b82f6;
            font-size: 20px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
        `;
        title.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14,2 14,8 20,8"/>
            </svg>
            Escolher Documento (${documentosRelevantes.length} encontrados)
        `;

        const subtitle = document.createElement("p");
        subtitle.style.cssText = `
            margin: 0 0 20px 0;
            color: #94a3b8;
            font-size: 14px;
            line-height: 1.5;
        `;
        subtitle.textContent = "Selecione o documento que deseja processar:";

        const list = document.createElement("div");
        list.style.cssText = `
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 20px;
        `;

        documentosRelevantes.forEach((doc, index) => {
            const item = document.createElement("div");
            item.style.cssText = `
                border: 1px solid #475569;
                border-radius: 8px;
                padding: 16px;
                cursor: pointer;
                transition: all 0.2s ease;
                background: #334155;
            `;

            item.innerHTML = `
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="color: ${doc.tipo.cor}; font-size: 18px;">
                        ${doc.tipo.icone}
                    </div>
                    <div style="flex: 1;">
                        <div style="font-weight: 600; color: #f8fafc; margin-bottom: 4px;">
                            ${doc.tipo.descricao}
                        </div>
                        <div style="font-size: 12px; color: #94a3b8;">
                            ${doc.nome}
                        </div>
                    </div>
                    <div style="color: #3b82f6;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9,18 15,12 9,6"/>
                        </svg>
                    </div>
                </div>
            `;

            item.addEventListener("mouseenter", () => {
                item.style.backgroundColor = "#475569";
                item.style.borderColor = "#3b82f6";
            });

            item.addEventListener("mouseleave", () => {
                item.style.backgroundColor = "#334155";
                item.style.borderColor = "#475569";
            });

            item.addEventListener("click", () => {
                overlay.remove();
                autoOpenSpecificDocument(doc);
            });

            list.appendChild(item);
        });

        const buttons = document.createElement("div");
        buttons.style.cssText = `
            display: flex;
            justify-content: space-between;
            gap: 12px;
        `;

        const cancelBtn = document.createElement("button");
        cancelBtn.style.cssText = `
            background: #6b7280;
            color: white;
            border: none;
            border-radius: 6px;
            padding: 10px 20px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            transition: background 0.2s ease;
        `;
        cancelBtn.textContent = "Cancelar";
        cancelBtn.addEventListener("mouseenter", () => {
            cancelBtn.style.backgroundColor = "#4b5563";
        });
        cancelBtn.addEventListener("mouseleave", () => {
            cancelBtn.style.backgroundColor = "#6b7280";
        });
        cancelBtn.addEventListener("click", () => {
            overlay.remove();
        });

        const processAllBtn = document.createElement("button");
        processAllBtn.style.cssText = `
            background: #059669;
            color: white;
            border: none;
            border-radius: 6px;
            padding: 10px 20px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            transition: background 0.2s ease;
        `;
        processAllBtn.textContent = "Processar Primeiro";
        processAllBtn.addEventListener("mouseenter", () => {
            processAllBtn.style.backgroundColor = "#047857";
        });
        processAllBtn.addEventListener("mouseleave", () => {
            processAllBtn.style.backgroundColor = "#059669";
        });
        processAllBtn.addEventListener("click", () => {
            overlay.remove();
            autoOpenSpecificDocument(documentosRelevantes[0]);
        });

        buttons.appendChild(cancelBtn);
        buttons.appendChild(processAllBtn);

        modal.appendChild(title);
        modal.appendChild(subtitle);
        modal.appendChild(list);
        modal.appendChild(buttons);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        });
    }

    // Abrir documento específico
    async function autoOpenSpecificDocument(documento) {
        log("🔗 Abrindo documento específico:", documento);

        try {
            showNotification("📄 Abrindo documento...", "info");

            const link = documento.elemento.querySelector("a");
            if (!link) {
                log("❌ Link não encontrado no documento");
                showNotification(
                    "❌ Erro: Link do documento não encontrado",
                    "error"
                );
                return false;
            }

            const url = link.href;
            if (!url) {
                log("❌ URL não encontrada no link");
                showNotification(
                    "❌ Erro: URL do documento não encontrada",
                    "error"
                );
                return false;
            }

            log("🌐 URL do documento:", url);

            const newTab = window.open(url, "_blank");
            if (newTab) {
                log("✅ Documento aberto em nova aba");
                showNotification(
                    "✅ Documento aberto! Execute a extensão novamente na nova aba",
                    "success"
                );
                return true;
            } else {
                log("❌ Falha ao abrir nova aba - popup bloqueado?");
                showNotification(
                    "❌ Não foi possível abrir o documento. Verifique se popups estão bloqueados.",
                    "error"
                );
                return false;
            }
        } catch (error) {
            log("❌ Erro ao abrir documento específico:", error);
            showNotification(
                "❌ Erro ao abrir documento: " + error.message,
                "error"
            );
            return false;
        }
    }

    // Automação completa
    async function runFullAutomation() {
        if (isAutomationActive) {
            log(" Automação já está ativa");
            return;
        }

        isAutomationActive = true;
        log(" Iniciando automação completa...");

        try {
            const pageType = detectPageType();

            if (pageType === "lista_documentos") {
                const opened = await autoOpenDocumentoRelevante();
                if (opened) {
                    showNotification(
                        " Documento aberto! Aguarde carregar e execute novamente na nova aba",
                        "success"
                    );
                }
            } else if (pageType === "documento_especifico") {
                const texto = await autoExtractText();
                if (texto) {
                    const apiSent = await sendToChatGPT(texto);

                    if (!apiSent) {
                        log(
                            " API falhou, usando método de clipboard como fallback"
                        );
                        showNotification(
                            " Tentando método alternativo...",
                            "warning"
                        );

                        const copied = await copyToClipboardWithPrefix(texto);
                        if (copied) {
                            setTimeout(() => {
                                autoOpenChatGPT();
                                showNotification(
                                    " Texto copiado! Cole no ChatGPT (Ctrl+V)\n\nO texto já inclui o prefixo de instrução para IA",
                                    "success"
                                );
                            }, 2000);
                        }
                    }
                }
            } else {
                showNotification(
                    " Página não reconhecida. Use na página do processo ou documento",
                    "error"
                );
            }
        } catch (error) {
            log(" Erro na automação:", error);
            showNotification(" Erro na automação: " + error.message, "error");
        } finally {
            isAutomationActive = false;
        }
    }

    // Função para prevenir sobreposição de elementos da interface
    function preventElementOverlap() {
        const floatingButton = document.getElementById("sent1-auto-button");
        const notification = document.getElementById(
            "documento-relevante-notification"
        );
        const optionsMenu = document.getElementById(
            "documento-relevante-options-menu"
        );

        if (!floatingButton || floatingButton.style.display === "none") {
            return; // Botão flutuante não está visível
        }

        // Verificar sobreposição com notificação
        if (notification) {
            const buttonRect = floatingButton.getBoundingClientRect();
            const notificationRect = notification.getBoundingClientRect();

            // Se há sobreposição, mover notificação
            if (
                buttonRect.left < notificationRect.right + 10 &&
                buttonRect.top < notificationRect.bottom + 10 &&
                buttonRect.bottom > notificationRect.top - 10
            ) {
                log(
                    "🔧 Ajustando posição da notificação para evitar sobreposição"
                );
                notification.style.right = "240px"; // Mover mais à esquerda
            }
        }

        // Verificar sobreposição com menu de opções
        if (optionsMenu) {
            const buttonRect = floatingButton.getBoundingClientRect();
            const menuRect = optionsMenu.getBoundingClientRect();

            // Se há sobreposição, mover menu
            if (
                buttonRect.left < menuRect.right + 10 &&
                buttonRect.top < menuRect.bottom + 10 &&
                buttonRect.bottom > menuRect.top - 10
            ) {
                log("🔧 Ajustando posição do menu para evitar sobreposição");
                const newLeft = Math.max(
                    10,
                    buttonRect.left - menuRect.width - 10
                );
                optionsMenu.style.left = newLeft + "px";
            }
        }
    }

    // Função para configurar o observer de mudanças na interface
    function setupInterfaceObserver() {
        // Observer para detectar mudanças nos elementos da interface
        const observer = new MutationObserver((mutations) => {
            let shouldCheckOverlap = false;

            mutations.forEach((mutation) => {
                // Se elementos foram adicionados ou removidos
                if (mutation.type === "childList") {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            const id = node.id;
                            if (
                                id === "sent1-auto-button" ||
                                id === "documento-relevante-notification" ||
                                id === "documento-relevante-options-menu"
                            ) {
                                shouldCheckOverlap = true;
                            }
                        }
                    });
                }

                // Se atributos de estilo mudaram
                if (
                    mutation.type === "attributes" &&
                    mutation.attributeName === "style" &&
                    mutation.target.id &&
                    (mutation.target.id === "sent1-auto-button" ||
                        mutation.target.id ===
                            "documento-relevante-notification" ||
                        mutation.target.id ===
                            "documento-relevante-options-menu")
                ) {
                    shouldCheckOverlap = true;
                }
            });

            if (shouldCheckOverlap) {
                setTimeout(preventElementOverlap, 50);
            }
        });

        // Observar mudanças no body
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["style"],
        });

        return observer;
    }

    // Sistema de notificações
    function showNotification(message, type = "info") {
        // Remover notificação anterior se existir
        const existing = document.getElementById(
            "documento-relevante-notification"
        );
        if (existing) {
            existing.remove();
        }

        // Verificar se existe botão flutuante para ajustar posição
        const floatingButton = document.getElementById("sent1-auto-button");
        const isFloatingButtonVisible =
            floatingButton &&
            floatingButton.style.display !== "none" &&
            floatingButton.offsetParent !== null; // Verifica se está realmente visível

        // Posição dinâmica baseada na presença do botão flutuante
        let notificationTop = "20px";
        let notificationRight = "20px";

        if (isFloatingButtonVisible) {
            // Se há botão flutuante, calcular posição para evitar sobreposição
            const buttonRect = floatingButton.getBoundingClientRect();
            const windowWidth = window.innerWidth;

            // Se há espaço à esquerda do botão, colocar a notificação lá
            if (buttonRect.left > 300) {
                notificationRight = windowWidth - buttonRect.left + 10 + "px";
            } else {
                // Se não há espaço, colocar acima ou abaixo do botão
                if (buttonRect.top > 100) {
                    notificationTop = buttonRect.top - 80 + "px";
                    notificationRight = "20px";
                } else {
                    notificationTop = buttonRect.bottom + 10 + "px";
                    notificationRight = "20px";
                }
            }
        }

        const notification = document.createElement("div");
        notification.id = "documento-relevante-notification";
        notification.className = "eprobe-notification";
        notification.style.cssText = `
 position: fixed;
 top: ${notificationTop};
 right: ${notificationRight};
 background: ${
     type === "error"
         ? "#dc3545"
         : type === "warning"
         ? "#ffc107"
         : type === "success"
         ? "#134377"
         : "#134377"
 };
 color: white;
 padding: 15px 20px;
 border-radius: 5px;
 font-weight: bold;
 z-index: 10000;
 box-shadow: 0 4px 8px rgba(0,0,0,0.3);
 max-width: 280px;
 font-size: 14px;
 line-height: 1.4;
 `;
        // Verificar se deve mostrar spinner
        if (message.includes("Enviando para Perplexity")) {
            notification.innerHTML = `
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="position: relative; width: 24px; height: 24px;">
                        <div style="width: 24px; height: 24px; border-top: 3px solid rgba(255,255,255,0.3); border-bottom: 3px solid rgba(255,255,255,0.3); border-radius: 50%; position: absolute; top: 0; left: 0;"></div>
                        <div style="width: 24px; height: 24px; border-top: 3px solid white; border-bottom: 3px solid white; border-radius: 50%; position: absolute; top: 0; left: 0; animation: spin 1s linear infinite;"></div>
                    </div>
                    <span>${message}</span>
                </div>
                <style>
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                </style>
            `;
        } else {
            notification.textContent = message;
        }

        document.body.appendChild(notification);

        // Verificar e prevenir sobreposições após um pequeno delay
        setTimeout(() => {
            preventElementOverlap();
        }, 100);

        // Remover após 5 segundos
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    // Verificar se a página deve mostrar o botão integrado (critério específico)
    function shouldShowIntegratedButton() {
        const h1Element = document.querySelector("h1");
        if (!h1Element) {
            console.log(" Elemento h1 não encontrado");
            return false;
        }

        const titleText = h1Element.textContent.trim();
        const hasCorrectTitle =
            titleText === "Consulta Processual - Detalhes do Processo";

        console.log(" Verificando título para botão integrado:", {
            titleFound: titleText,
            isCorrect: hasCorrectTitle,
        });

        return hasCorrectTitle;
    }

    // Criar botão de automação integrado na página
    function createAutomationButton() {
        console.log(" Tentando criar botão integrado...");

        // Verificar se já existe (verificar todos os IDs possíveis)
        if (
            document.getElementById("documento-relevante-auto-button") ||
            document.getElementById("sent1-auto-button")
        ) {
            console.log(" Botão já existe, pulando criação");
            return;
        }

        // CRITÉRIO ESPECÍFICO: Verificar se a página tem o título exato
        if (!shouldShowIntegratedButton()) {
            console.log(
                " Página não possui o título correto para botão integrado, verificando critério para botão flutuante..."
            );
            // Se não tem o título correto mas deve mostrar o botão flutuante, criar botão flutuante
            if (shouldShowFloatingButton()) {
                createFloatingButton();
            } else {
                console.log(" Página não atende critérios para nenhum botão");
            }
            return;
        }

        // Buscar container principal para integração
        const targetInfo = findTargetContainer();

        if (!targetInfo) {
            console.log(
                " Container alvo não encontrado, usando posição fixa como fallback"
            );
            createFloatingButton();
            return;
        }

        // Extrair informações do container
        const targetContainer = targetInfo.container || targetInfo;
        const insertMethod = targetInfo.insertMethod || "append";
        const referenceElement = targetInfo.referenceElement;

        console.log(" Container encontrado, criando botão integrado...");
        const button = document.createElement("button");
        button.id = "documento-relevante-auto-button";
        button.innerHTML = `
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px; vertical-align: middle;">
 <rect width="18" height="18" x="3" y="3" rx="2"/>
 <path d="m9 8 6 4-6 4Z"/>
 </svg>
 Resumir Documento
 `;
        button.className = "infraButton btn-primary";

        // Aplicar apenas a cor azul personalizada
        button.style.backgroundColor = "#134377";
        button.style.borderColor = "#134377";

        // Adicionar eventos para hover e focus
        button.addEventListener("mouseenter", () => {
            button.style.backgroundColor = "#0f3a66";
            button.style.borderColor = "#0f3a66";
        });

        button.addEventListener("mouseleave", () => {
            button.style.backgroundColor = "#134377";
            button.style.borderColor = "#134377";
        });

        button.addEventListener("focus", () => {
            button.style.backgroundColor = "#0f3a66";
            button.style.borderColor = "#0f3a66";
        });

        button.addEventListener("blur", () => {
            button.style.backgroundColor = "#134377";
            button.style.borderColor = "#134377";
        });

        // Adicionar espaçamento quando posicionado ao lado do PDPJ
        if (insertMethod === "beforePDPJ") {
            button.style.marginRight = "15px";
        }

        // Adicionar evento de click
        button.addEventListener("click", async (e) => {
            e.preventDefault();
            e.stopPropagation();

            log(" Botão integrado clicado!");
            console.log(" Debug: Botão Resumir Documento clicado");

            // Adicionar feedback visual
            button.style.transform = "scale(0.95)";
            setTimeout(() => {
                button.style.transform = "";
            }, 150);

            const pageType = detectPageType();
            log(" Tipo de página detectado:", pageType);

            if (pageType === "lista_documentos") {
                showNotification(" Abrindo documento...", "info");
                await runFullAutomation();
            } else if (pageType === "documento_especifico") {
                const rect = button.getBoundingClientRect();
                showOptionsMenu(rect.left, rect.bottom);
            } else {
                showNotification(" Página não reconhecida", "error");
            }
        });

        // Inserir no container usando o método apropriado
        if (insertMethod === "beforeDownload" && referenceElement) {
            try {
                console.log(
                    " Inserindo botão antes do Download Completo na barra de comandos..."
                );
                console.log(
                    " Reference element (Download button):",
                    referenceElement
                );
                console.log(" Container (form):", targetContainer);

                // Criar um wrapper para melhor alinhamento na barra de comandos
                const buttonWrapper = document.createElement("span");
                buttonWrapper.style.cssText =
                    "margin-right: 8px; display: inline-block;";
                buttonWrapper.appendChild(button);

                // Inserir o wrapper antes do botão Download Completo
                referenceElement.insertAdjacentElement(
                    "beforebegin",
                    buttonWrapper
                );

                console.log(
                    " Botão inserido com sucesso antes do Download Completo"
                );
                console.log(
                    " Posição final do botão:",
                    button.parentElement.parentElement
                );
            } catch (error) {
                console.log(
                    " Erro ao inserir antes do Download Completo, usando fallback:",
                    error
                );
                // Fallback: inserir no início do container
                targetContainer.insertBefore(
                    button,
                    targetContainer.firstChild
                );
                console.log(
                    " Botão inserido no início do container (fallback)"
                );
            }
        } else if (insertMethod === "prepend") {
            // Inserir no início do container
            const firstChild = targetContainer.firstChild;
            if (firstChild) {
                targetContainer.insertBefore(button, firstChild);
            } else {
                targetContainer.appendChild(button);
            }
            console.log(" Botão inserido no início do container");
        } else if (insertMethod === "beforePDPJ" && referenceElement) {
            try {
                // Estratégia 1: Inserir diretamente ao lado esquerdo da imagem usando insertAdjacentElement
                console.log(
                    " Tentando posicionar ao lado esquerdo da imagem PDPJ..."
                );
                console.log(" Reference element:", referenceElement);
                console.log(
                    " Reference element tagName:",
                    referenceElement.tagName
                );
                console.log(
                    " Reference element parent:",
                    referenceElement.parentElement
                );

                // Usar insertAdjacentElement para posicionar exatamente ao lado esquerdo
                referenceElement.insertAdjacentElement("beforebegin", button);

                // Verificação final: garantir que o botão não está dentro de um link
                const buttonParent = button.parentElement;
                const isInsideLink = button.closest("a") !== null;

                if (isInsideLink) {
                    console.log(
                        " PROBLEMA: Botão foi inserido dentro de um link!"
                    );
                    console.log(" Tentando mover para fora do link...");

                    // Encontrar o link pai
                    const linkElement = button.closest("a");
                    const linkContainer = linkElement.parentElement;

                    // Remover botão do local atual
                    button.remove();

                    // Inserir antes do link
                    linkContainer.insertBefore(button, linkElement);
                    console.log(" Botão movido para fora do link");
                }

                console.log(" Botão inserido ao lado esquerdo da imagem PDPJ");
                console.log(" Posição final do botão:", button.parentElement);
                console.log(
                    " Botão está dentro de link?",
                    button.closest("a") !== null ? "SIM" : "NÃO"
                );
            } catch (error) {
                console.log(
                    " Erro ao inserir ao lado da imagem PDPJ, tentando estratégias alternativas:",
                    error
                );

                try {
                    // Estratégia 2: Verificar se a imagem é realmente filha direta do container
                    if (
                        Array.from(targetContainer.children).includes(
                            referenceElement
                        )
                    ) {
                        // Inserir antes da imagem PDPJ (ao lado esquerdo)
                        targetContainer.insertBefore(button, referenceElement);
                        console.log(" Botão inserido antes da imagem PDPJ");
                    } else {
                        // Estratégia 3: A imagem não é filha direta, usar o pai direto da imagem
                        const directParent = referenceElement.parentElement;
                        if (
                            directParent &&
                            Array.from(directParent.children).includes(
                                referenceElement
                            )
                        ) {
                            directParent.insertBefore(button, referenceElement);
                            console.log(
                                " Botão inserido antes da imagem PDPJ (no pai direto)"
                            );
                        } else {
                            // Estratégia 4: Fallback - adicionar no final do container encontrado
                            targetContainer.appendChild(button);
                            console.log(
                                " Botão adicionado ao container (fallback)"
                            );
                        }
                    }
                } catch (secondError) {
                    console.log(
                        " Erro na segunda tentativa, usando fallback final:",
                        secondError
                    );
                    // Fallback final: adicionar no final do container
                    targetContainer.appendChild(button);
                    console.log(
                        " Botão adicionado ao container (fallback final)"
                    );
                }
            }
        } else {
            // Método padrão - adicionar ao final do container
            targetContainer.appendChild(button);
            console.log(
                " Botão integrado adicionado ao container:",
                targetContainer
            );
        }
    }

    // Função para encontrar o container alvo na página
    function findTargetContainer() {
        // Prioridade 1: Buscar o botão "Download Completo" na barra de comandos superior do eProc
        const commandBar = document.getElementById(
            "divInfraBarraComandosSuperior"
        );
        if (commandBar) {
            console.log(" Barra de comandos superior encontrada:", commandBar);

            // Procurar pelo formulário que contém o botão "Download Completo"
            const processForm = commandBar.querySelector("#frmProcessoLista");
            if (processForm) {
                console.log(" Formulário do processo encontrado:", processForm);

                // Buscar o botão "Download Completo" por diferentes estratégias
                const downloadSelectors = [
                    'button[id*="btnDownloadCompleto"]',
                    'input[id*="btnDownloadCompleto"]',
                    'button[aria-label*="Download Completo"]',
                    'input[aria-label*="Download Completo"]',
                    'button[value*="Download Completo"]',
                    'input[value*="Download Completo"]',
                    'button[title*="Download Completo"]',
                    'input[title*="Download Completo"]',
                    'button:contains("Download Completo")',
                    '*[onclick*="download_completo"]',
                    '*[onclick*="downloadCompleto"]',
                    '*[onclick*="download"]',
                ];

                let downloadButton = null;

                // Primeiro tentar seletores diretos
                for (const selector of downloadSelectors) {
                    if (selector.includes(":contains(")) continue; // Pular seletores que não funcionam com querySelector
                    downloadButton = processForm.querySelector(selector);
                    if (downloadButton) {
                        console.log(
                            ` Botão Download Completo encontrado com seletor: ${selector}`,
                            downloadButton
                        );
                        break;
                    }
                }

                // Se não encontrou, buscar por texto nos botões
                if (!downloadButton) {
                    console.log(
                        " Buscando botão Download Completo por texto..."
                    );
                    const allButtons = processForm.querySelectorAll(
                        'button, input[type="submit"], input[type="button"]'
                    );
                    for (const btn of allButtons) {
                        const text =
                            btn.textContent ||
                            btn.value ||
                            btn.getAttribute("aria-label") ||
                            "";
                        if (
                            text.toLowerCase().includes("download") &&
                            text.toLowerCase().includes("completo")
                        ) {
                            downloadButton = btn;
                            console.log(
                                " Botão Download Completo encontrado por texto:",
                                downloadButton
                            );
                            break;
                        }
                    }
                }

                if (downloadButton) {
                    console.log(
                        " Inserindo antes do botão Download Completo na barra de comandos"
                    );
                    return {
                        container: processForm,
                        insertMethod: "beforeDownload",
                        referenceElement: downloadButton,
                    };
                } else {
                    // Se não encontrou o botão Download, inserir no início do formulário
                    console.log(
                        " Botão Download Completo não encontrado, inserindo no início do formulário"
                    );
                    return {
                        container: processForm,
                        insertMethod: "prepend",
                    };
                }
            } else {
                // Se não encontrou o formulário, buscar diretamente na barra de comandos
                console.log(
                    " Formulário não encontrado, buscando Download Completo diretamente na barra..."
                );

                const downloadSelectors = [
                    'button[id*="btnDownloadCompleto"]',
                    'input[id*="btnDownloadCompleto"]',
                    'button[aria-label*="Download Completo"]',
                    'input[aria-label*="Download Completo"]',
                    'button[value*="Download Completo"]',
                    'input[value*="Download Completo"]',
                ];

                let downloadButton = null;
                for (const selector of downloadSelectors) {
                    downloadButton = commandBar.querySelector(selector);
                    if (downloadButton) {
                        console.log(
                            ` Botão Download encontrado na barra: ${selector}`,
                            downloadButton
                        );
                        return {
                            container: commandBar,
                            insertMethod: "beforeDownload",
                            referenceElement: downloadButton,
                        };
                    }
                }

                // Buscar por texto nos botões da barra
                const allButtons = commandBar.querySelectorAll(
                    'button, input[type="submit"], input[type="button"]'
                );
                for (const btn of allButtons) {
                    const text =
                        btn.textContent ||
                        btn.value ||
                        btn.getAttribute("aria-label") ||
                        "";
                    if (
                        text.toLowerCase().includes("download") &&
                        text.toLowerCase().includes("completo")
                    ) {
                        console.log(
                            " Botão Download encontrado por texto na barra:",
                            btn
                        );
                        return {
                            container: commandBar,
                            insertMethod: "beforeDownload",
                            referenceElement: btn,
                        };
                    }
                }

                // Se não encontrou nada, inserir na barra de comandos
                console.log(
                    " Botão Download não encontrado, inserindo na barra de comandos"
                );
                return {
                    container: commandBar,
                    insertMethod: "prepend",
                };
            }
        }

        // Prioridade 2: Buscar pela imagem PDPJ e posicionar ao lado esquerdo (fallback)
        const pdpjImage = document.querySelector(
            'img[src*="pdpj-logotipo_3.png"], img[src*="pdpj-logotipo"]'
        );
        if (pdpjImage) {
            console.log(
                " Imagem PDPJ encontrada, buscando container pai adequado"
            );

            // Verificar se a imagem está dentro de um link <a>
            const linkParent = pdpjImage.closest("a");
            if (linkParent) {
                console.log("Imagem PDPJ está dentro de um link:", linkParent);
                console.log(
                    "Link src/href:",
                    linkParent.href || linkParent.getAttribute("href")
                );
                const linkContainer = linkParent.parentElement;
                if (linkContainer) {
                    console.log("Container do link:", linkContainer);
                    return {
                        container: linkContainer,
                        insertMethod: "beforePDPJ",
                        referenceElement: linkParent, // Usar o link como referência, não a imagem
                    };
                }
            }

            // Primeiro tentar o pai direto da imagem se não estiver em um link
            const directParent = pdpjImage.parentElement;
            if (directParent) {
                console.log(" Usando pai direto da imagem PDPJ:", directParent);
                return {
                    container: directParent,
                    insertMethod: "beforePDPJ",
                    referenceElement: pdpjImage,
                };
            }

            // Buscar o container pai que permite inserir o botão ao lado esquerdo
            let parent = pdpjImage.parentElement;
            while (parent && parent !== document.body) {
                const styles = window.getComputedStyle(parent);

                // Verificar se é um container flexível ou que permita posicionamento
                if (
                    styles.display === "flex" ||
                    parent.classList.contains("navbar") ||
                    parent.classList.contains("header") ||
                    parent.classList.contains("d-flex") ||
                    parent.tagName === "NAV" ||
                    parent.tagName === "HEADER"
                ) {
                    console.log(
                        " Container da navbar/header encontrado para PDPJ:",
                        parent
                    );

                    // Retornar um objeto especial indicando posicionamento próximo à imagem PDPJ
                    return {
                        container: parent,
                        insertMethod: "beforePDPJ",
                        referenceElement: pdpjImage,
                    };
                }
                parent = parent.parentElement;
            }

            // Se não encontrou container flex, usar o pai direto da imagem como fallback
            console.log(" Usando container pai direto da imagem PDPJ");
            return {
                container: pdpjImage.parentElement,
                insertMethod: "beforePDPJ",
                referenceElement: pdpjImage,
            };
        }

        // Prioridade 2: Buscar containers da navbar/header
        const navbarSelectors = [
            ".navbar",
            ".nav",
            ".header",
            ".top-bar",
            '[class*="navbar"]',
            '[class*="header"]',
            '[class*="top-bar"]',
        ];

        for (const selector of navbarSelectors) {
            const container = document.querySelector(selector);
            if (container) {
                const rect = container.getBoundingClientRect();
                // Verificar se está na parte superior da página
                if (rect.top < 100 && rect.width > 300) {
                    console.log(
                        ` Container navbar encontrado com seletor: ${selector}`
                    );
                    return { container: container, insertMethod: "append" };
                }
            }
        }

        // Prioridade 3: Lista atualizada de seletores com foco no eProc
        const containerSelectors = [
            "#divInfraBarraComandosSuperior", // Barra de comandos superior do eProc
            ".infraBarraComandos", // Barra de comandos geral do eProc
            "#frmProcessoLista", // Formulário da lista de processos
            ".d-flex.w-100.justify-content-between",
            ".d-flex.justify-content-between",
            ".d-flex.w-100",
            '[class*="d-flex"][class*="justify-content-between"]',
            ".toolbar",
            ".action-bar",
            ".header-actions",
            ".page-header .d-flex",
            ".container-fluid .d-flex",
            "#barraComandos",
            ".infra-barra-comandos",
        ];

        for (const selector of containerSelectors) {
            const container = document.querySelector(selector);
            if (container) {
                console.log(` Container encontrado com seletor: ${selector}`);
                return { container: container, insertMethod: "append" };
            }
        }

        // Fallback: buscar containers que possam ser adequados
        const fallbackSelectors = [
            'div[class*="d-flex"]',
            'div[class*="toolbar"]',
            'div[class*="header"]',
            'div[class*="action"]',
        ];

        for (const selector of fallbackSelectors) {
            const containers = document.querySelectorAll(selector);
            for (const container of containers) {
                // Verificar se o container está visível e tem tamanho adequado
                const rect = container.getBoundingClientRect();
                if (rect.width > 200 && rect.height > 20 && rect.top < 300) {
                    console.log(` Container fallback encontrado: ${selector}`);
                    return { container: container, insertMethod: "append" };
                }
            }
        }

        console.log(" Nenhum container adequado encontrado");
        return null;
    }

    // Função de fallback para criar botão flutuante (caso container não seja encontrado)
    function createFloatingButton() {
        // Verificar se já existe um botão
        if (document.getElementById("sent1-auto-button")) {
            console.log(" Botão flutuante já existe, cancelando criação");
            return;
        }

        // Verificar se a página é válida para mostrar o botão
        if (!shouldShowFloatingButton()) {
            console.log(
                " Página não atende critérios para o botão flutuante, cancelando criação"
            );
            return;
        }

        console.log(" Criando botão flutuante como fallback...");
        const button = document.createElement("button");
        button.id = "sent1-auto-button";
        button.className = "eprobe-button";
        button.innerHTML = `
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px; vertical-align: middle;">
 <rect width="18" height="18" x="3" y="3" rx="2"/>
 <path d="m9 8 6 4-6 4Z"/>
 </svg>
 Resumir Documento
 `;

        // Usar estilo customizado próprio para o botão flutuante
        button.style.cssText = `
 position: fixed;
 top: 120px;
 right: 20px;
 z-index: 99999;
 background-color: #134377;
 border: 1px solid #134377;
 color: white;
 padding: 8px 16px;
 border-radius: 4px;
 font-family: "Roboto", -apple-system, system-ui, sans-serif;
 font-size: 14px;
 font-weight: normal;
 cursor: pointer;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 text-decoration: none;
 white-space: nowrap;
 box-shadow: 0 2px 4px rgba(0,0,0,0.2);
 transition: background-color 0.2s ease;
 `;

        // Adicionar eventos para hover e focus
        button.addEventListener("mouseenter", () => {
            button.style.backgroundColor = "#0f3a66";
            button.style.borderColor = "#0f3a66";
        });

        button.addEventListener("mouseleave", () => {
            button.style.backgroundColor = "#134377";
            button.style.borderColor = "#134377";
        });

        button.addEventListener("focus", () => {
            button.style.backgroundColor = "#0f3a66";
            button.style.borderColor = "#0f3a66";
        });

        button.addEventListener("blur", () => {
            button.style.backgroundColor = "#134377";
            button.style.borderColor = "#134377";
        });

        button.addEventListener("click", async (e) => {
            e.preventDefault();
            e.stopPropagation();

            log(" Botão flutuante clicado!");
            console.log(" Debug: Botão Resumir Documento clicado");

            // Adicionar feedback visual
            button.style.transform = "scale(0.95)";
            setTimeout(() => {
                button.style.transform = "";
            }, 150);

            const pageType = detectPageType();
            log(" Tipo de página detectado:", pageType);

            // Lógica específica para o botão flutuante
            // Como o botão flutuante só aparece quando há documentos específicos,
            // podemos assumir que estamos em uma página de documento
            if (pageType === "lista_documentos") {
                showNotification(" Abrindo documento...", "info");
                await runFullAutomation();
            } else if (
                pageType === "documento_especifico" ||
                pageType === "documento_html" ||
                pageType === "documento_pdf"
            ) {
                // Página de documento específico - mostrar menu de opções
                const rect = button.getBoundingClientRect();
                showOptionsMenu(rect.left, rect.bottom);
            } else {
                // Para o botão flutuante, se chegou até aqui é porque deve haver um documento
                // Vamos verificar se há elementos que indicam documento na página
                const pageHTML = document.documentElement.outerHTML;
                const hasDocumentHtml = pageHTML.includes(
                    "acessar_documento&id"
                );
                const hasDocumentPdf = pageHTML.includes(
                    "acessar_documento&amp"
                );

                console.log(
                    " Debug: Verificação de documento na página não reconhecida:",
                    {
                        hasDocumentHtml: hasDocumentHtml,
                        hasDocumentPdf: hasDocumentPdf,
                        url: window.location.href,
                    }
                );

                if (hasDocumentHtml || hasDocumentPdf) {
                    // Há documento, mas a página não foi reconhecida - tratar como documento específico
                    console.log(
                        " Página contém documento mas não foi reconhecida - tratando como documento específico"
                    );
                    const rect = button.getBoundingClientRect();
                    console.log(
                        " Debug: Chamando showOptionsMenu com coordenadas:",
                        {
                            x: rect.left,
                            y: rect.bottom,
                        }
                    );
                    showOptionsMenu(rect.left, rect.bottom);
                } else {
                    // Realmente não há documento reconhecível
                    showNotification(
                        " Página não reconhecida ou sem documento válido",
                        "error"
                    );
                }
            }
        });

        document.body.appendChild(button);
        console.log(" Botão flutuante adicionado ao DOM");

        // Verificar e prevenir sobreposições após um pequeno delay
        setTimeout(() => {
            preventElementOverlap();
        }, 100);
    }

    // Debug: verificar se o botão foi criado
    function debugButtonStatus() {
        setTimeout(() => {
            const button = document.getElementById("sent1-auto-button");
            const integratedButton = document.getElementById(
                "documento-relevante-auto-button"
            );

            console.log("=== DEBUG STATUS DO BOTÃO ===");
            console.log("Página atual:", window.location.href);
            console.log("Tipo de página detectado:", detectPageType());
            console.log("Página é válida para botão:", isValidPageForButton());

            if (button) {
                console.log(" Botão SENT1 encontrado:", button);
                const isFloating = button.style.position === "fixed";
                console.log(
                    " Tipo de botão:",
                    isFloating ? "Flutuante" : "Integrado"
                );

                if (isFloating) {
                    console.log(" Posição do botão flutuante:", {
                        top: button.style.top,
                        right: button.style.right,
                        zIndex: button.style.zIndex,
                        display: getComputedStyle(button).display,
                        visibility: getComputedStyle(button).visibility,
                    });
                } else {
                    console.log(" Informações do botão integrado:", {
                        parentElement: button.parentElement?.tagName,
                        parentClass: button.parentElement?.className,
                        display: getComputedStyle(button).display,
                        visibility: getComputedStyle(button).visibility,
                    });
                }
            } else if (integratedButton) {
                console.log(" Botão integrado encontrado:", integratedButton);
            } else {
                console.log(" NENHUM BOTÃO ENCONTRADO!");
                console.log(" Tentando criar botão agora...");

                // Tentar criar botão imediatamente no debug
                if (shouldShowIntegratedButton()) {
                    console.log(
                        " Página atende critérios para botão integrado - tentando criar..."
                    );
                    createAutomationButton();
                } else if (shouldShowFloatingButton()) {
                    console.log(
                        " Página atende critérios para botão flutuante - tentando criar..."
                    );
                    createFloatingButton();
                } else {
                    console.log(
                        " Página não atende critérios para nenhum botão"
                    );
                }
            }
            console.log("=== FIM DEBUG STATUS ===");
        }, 2000);
    }

    // Debug avançado da API com logging estruturado
    function debugApiCall(requestId, phase, data) {
        if (!debugMode) return;

        const timestamp = new Date().toISOString();
        const phaseColors = {
            INÍCIO: "",
            REQUEST: "",
            RESPONSE_HEADERS: "",
            SUCCESS: "",
            ERROR_DETAILS: "",
            EXCEPTION: "",
            TEST_START: "",
            TEST_RESPONSE: "",
            TEST_SUCCESS: "",
            TEST_ERROR: "",
        };

        const icon = phaseColors[phase] || "";

        console.group(`${icon} API Debug [ID: ${requestId}] - ${phase}`);
        console.log(" Timestamp:", timestamp);

        if (phase === "REQUEST") {
            console.log(" URL:", data.url);
            console.log(" Model:", data.model);
            console.log("� Prompt Length:", data.promptLength);
            console.log(" Max Tokens:", data.maxTokens);
        } else if (phase === "RESPONSE_HEADERS") {
            console.log("� Status:", data.status, data.statusText);
            console.log(" Request ID:", data.requestId);
            if (data.rateLimit) {
                console.log(" Rate Limits:");
                console.table(data.rateLimit);
            }
        } else if (phase === "SUCCESS") {
            console.log(" Response ID:", data.responseId);
            console.log(" Model Used:", data.model);
            console.log(" Usage:", data.usage);
            console.log("🏁 Finish Reason:", data.choices?.[0]?.finish_reason);
            console.log(
                " Response Length:",
                data.choices?.[0]?.message?.content?.length
            );
        } else if (phase === "ERROR_DETAILS") {
            console.log(" Status:", data.status, data.statusText);
            console.log(" Error Text:", data.errorText);
            if (data.errorJson) {
                console.log(" Error JSON:", data.errorJson);
            }
        } else if (phase === "EXCEPTION") {
            console.log(" Error Name:", data.errorName);
            console.log(" Error Message:", data.errorMessage);
            console.log("📚 Stack Trace:", data.errorStack);
        } else if (phase === "TEST_SUCCESS") {
            console.log(" Total Models:", data.totalModels);
            console.log(" GPT Models:", data.gptModels);
            console.log("🏢 Organization:", data.organization);
            console.log(" Has GPT-4:", data.hasGpt4);
        } else {
            console.log(" Data:", data);
        }

        console.groupEnd();

        // Salvar logs críticos no localStorage para debug posterior
        if (phase === "ERROR_DETAILS" || phase === "EXCEPTION") {
            const errorLogs = JSON.parse(
                localStorage.getItem("eprobe_error_logs") || "[]"
            );
            errorLogs.push({
                requestId,
                phase,
                timestamp,
                data,
            });

            // Manter apenas os últimos 10 logs de erro
            if (errorLogs.length > 10) {
                errorLogs.splice(0, errorLogs.length - 10);
            }

            localStorage.setItem(
                "eprobe_error_logs",
                JSON.stringify(errorLogs)
            );
        }
    }

    // Verificar status da API key com informações detalhadas
    async function testApiKey() {
        try {
            const apiKey = await getStoredApiKey();
            if (!apiKey) {
                showNotification(" Nenhuma API key configurada", "error");
                return false;
            }

            log(" Testando API key...");

            const testId = Date.now().toString();
            debugApiCall(testId, "TEST_START", {
                keyPreview: apiKey.substring(0, 10) + "...",
            });

            const response = await fetch(
                "https://api.perplexity.ai/chat/completions",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                        "Content-Type": "application/json",
                        "User-Agent": "eProbe-Extension/1.0",
                    },
                    body: JSON.stringify({
                        model: "sonar",
                        messages: [
                            { role: "user", content: "Teste de conexão" },
                        ],
                        max_tokens: 10,
                    }),
                }
            );

            const responseHeaders = Object.fromEntries(
                response.headers.entries()
            );

            debugApiCall(testId, "TEST_RESPONSE", {
                status: response.status,
                headers: responseHeaders,
                requestId: responseHeaders["x-request-id"] || "N/A",
            });

            if (response.ok) {
                const data = await response.json();

                log(" API key válida! Modelo usado:", data.model || "sonar");

                debugApiCall(testId, "TEST_SUCCESS", {
                    model: data.model,
                    usage: data.usage,
                    responseContent: data.choices?.[0]?.message?.content,
                });

                showNotification(
                    ` API key válida!\nModelo: ${data.model || "sonar"}`,
                    "success"
                );
                return true;
            } else {
                const errorData = await response.text();
                let errorJson = null;

                try {
                    errorJson = JSON.parse(errorData);
                } catch (e) {
                    log(" Erro de resposta não é JSON válido");
                }

                debugApiCall(testId, "TEST_ERROR", {
                    status: response.status,
                    errorText: errorData,
                    errorJson: errorJson,
                });

                if (response.status === 401) {
                    const errorMsg =
                        errorJson?.error?.message ||
                        "API key inválida ou expirada";
                    showNotification(` ${errorMsg}`, "error");
                    await removeStoredApiKey();
                } else if (response.status === 429) {
                    const rateLimitType =
                        errorJson?.error?.type || "rate_limit_exceeded";

                    if (rateLimitType === "insufficient_quota") {
                        showNotification(
                            " Cota da API Perplexity esgotada. Verifique em perplexity.ai/settings/api",
                            "error"
                        );
                        await removeStoredApiKey();
                    } else {
                        showNotification(
                            ` Rate limit atingido no teste da API`,
                            "warning"
                        );
                    }
                } else if (response.status === 403) {
                    showNotification(
                        " Acesso negado. Verifique créditos da conta",
                        "error"
                    );
                } else {
                    const errorMsg =
                        errorJson?.error?.message || `Erro ${response.status}`;
                    showNotification(` ${errorMsg}`, "error");
                }
                return false;
            }
        } catch (error) {
            log(" Erro de conexão no teste:", error);
            showNotification(" Erro de conexão com Perplexity", "error");
            return false;
        }
    }

    // Mostrar modal para seleção de múltiplos documentos relevantes
    function showDocumentSelectionModal(documentosRelevantes) {
        log(
            " DEBUG MODAL: Recebido documentosRelevantes:",
            documentosRelevantes
        );
        log(" DEBUG MODAL: Detalhes de cada documento:");
        documentosRelevantes.forEach((doc, i) => {
            log(` DOC${i + 1}:`, {
                eventoDescricao: doc.eventoDescricao,
                seqEvento: doc.seqEvento,
                tipoDocumento: doc.tipoDocumento,
            });
        });

        return new Promise((resolve) => {
            // Remover modal anterior se existir
            const existing = document.getElementById(
                "document-selection-modal"
            );
            if (existing) {
                existing.remove();
            }

            const modal = document.createElement("div");
            modal.id = "document-selection-modal";
            modal.style.cssText = `
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background: rgba(0,0,0,0.8);
 z-index: 100010;
 display: flex;
 align-items: center;
 justify-content: center;
 backdrop-filter: blur(4px);
 `;

            let documentOptions = "";
            documentosRelevantes.forEach((documento, index) => {
                const seqEvento = documento.seqEvento
                    ? `Evento ${documento.seqEvento}`
                    : `Documento ${index + 1}`;
                const tamanhoInfo = documento.tamanho
                    ? ` (${documento.tamanho})`
                    : "";
                const tipoInfo =
                    documento.tipoDocumento ||
                    TIPOS_DOCUMENTO_RELEVANTE[documento.tipo]?.descricao ||
                    "DOCUMENTO";
                const eventoDesc = documento.eventoDescricao || "Documento";

                log(` DEBUG OPTION ${index + 1}:`, {
                    seqEvento,
                    tipoInfo,
                    eventoDesc,
                    tamanhoInfo,
                    eventoMagistrado: documento.eventoMagistrado, // Debug magistrado
                    original_eventoDescricao: documento.eventoDescricao,
                });

                documentOptions += `
 <div style="margin-bottom: 12px; padding: 16px; border: 1px solid rgba(82, 82, 82, 0.3); border-radius: 8px; background: rgb(32, 39, 51); cursor: pointer; transition: all 0.2s ease; color: rgb(243, 246, 249);" 
 class="document-option" data-index="${index}">
 <div style="font-weight: 600; color: rgb(243, 246, 249); margin-bottom: 8px; display: flex; align-items: center; gap: 8px; font-size: 14px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; color: rgb(133, 190, 255);">
 <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
 <polyline points="14,2 14,8 20,8"/>
 <line x1="16" y1="13" x2="8" y2="13"/>
 <line x1="16" y1="17" x2="8" y2="17"/>
 <polyline points="10,9 9,9 8,9"/>
 </svg>
 ${tipoInfo} - ${seqEvento}
 </div>
 <div style="font-size: 13px; color: rgb(243, 246, 249); margin-bottom: 6px; font-weight: 500; display: flex; align-items: center; gap: 8px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
 <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
 <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
 </svg>
 ${eventoDesc}
 </div>
 <div style="font-size: 12px; color: rgb(136, 152, 181); display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
 <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
 </svg>
 Documento: ${documento.texto}${tamanhoInfo}
 </div>${
     documento.magistradoInfo && documento.magistradoInfo.tipo === "magistrado"
         ? `
 <div style="font-size: 11px; color: rgb(136, 152, 181); opacity: 0.9; display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
 <path d="M11.5 15H7a4 4 0 0 0-4 4v2"/>
 <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>
 <circle cx="10" cy="7" r="4"/>
 </svg>
 ${documento.magistradoInfo.nome}
 </div>${
     documento.magistradoInfo.vara
         ? `
 <div style="font-size: 11px; color: rgb(136, 152, 181); opacity: 0.9; display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
 <path d="M10 18v-7"/>
 <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"/>
 <path d="M14 18v-7"/>
 <path d="M18 18v-7"/>
 <path d="M3 22h18"/>
 <path d="M6 18v-7"/>
 </svg>
 ${documento.magistradoInfo.vara}
 </div>`
         : ""
 }`
         : documento.magistradoInfo &&
           documento.magistradoInfo.tipo === "advogado"
         ? `
 <div style="font-size: 11px; color: rgb(136, 152, 181); opacity: 0.9; display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
 <path d="M11.5 15H7a4 4 0 0 0-4 4v2"/>
 <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>
 <circle cx="10" cy="7" r="4"/>
 </svg>
 ${documento.magistradoInfo.nome}
 </div>`
         : documento.eventoMagistrado
         ? `
 <div style="font-size: 11px; color: rgb(136, 152, 181); opacity: 0.9; display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
 <path d="M11.5 15H7a4 4 0 0 0-4 4v2"/>
 <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>
 <circle cx="10" cy="7" r="4"/>
 </svg>
 ${documento.eventoMagistrado}
 </div>`
         : ""
 }${
                    documento.eventoData
                        ? `
 <div style="font-size: 11px; color: rgb(136, 152, 181); opacity: 0.9; display: flex; align-items: center; gap: 8px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
 <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"/>
 <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"/>
 <path d="m2.3 2.3 7.286 7.286"/>
 <circle cx="11" cy="11" r="2"/>
 </svg>
 Assinado em ${documento.eventoData}
 </div>`
                        : ""
                }
 </div>
 `;
            });

            modal.innerHTML = `
 <div style="background: rgb(19, 67, 119); border-radius: 8px; padding: 24px; max-width: 620px; width: 90%; max-height: 80%; overflow-y: auto; box-shadow: 0 8px 32px rgba(0,0,0,0.5); border: 1px solid rgba(82, 82, 82, 0.3);">
 <div style="margin-bottom: 20px; text-align: center; border-bottom: 1px solid rgba(82, 82, 82, 0.3); padding-bottom: 16px;">
 <h2 style="margin: 0; color: rgb(243, 246, 249); font-size: 18px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 10px; letter-spacing: -0.025em;">
 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: rgb(133, 190, 255);">
 <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
 <polyline points="14,2 14,8 20,8"/>
 <line x1="16" y1="13" x2="8" y2="13"/>
 <line x1="16" y1="17" x2="8" y2="17"/>
 <polyline points="10,9 9,9 8,9"/>
 </svg>
 Múltiplos Documentos Encontrados
 </h2>
 <p style="margin: 8px 0 0 0; color: rgb(136, 152, 181); font-size: 13px; font-weight: 400;">
 Foram encontrados ${documentosRelevantes.length} documentos relevantes neste processo. Selecione qual deseja processar:
 </p>
 </div>
 
 <div id="document-options" style="margin-bottom: 20px;">
 ${documentOptions}
 </div>

 <div style="text-align: center; padding-top: 16px; border-top: 1px solid rgba(82, 82, 82, 0.3);">
 <button id="cancel-selection" style="background: rgb(32, 39, 51); color: rgb(243, 246, 249); border: 1px solid rgba(82, 82, 82, 0.5); padding: 12px 16px; border-radius: 8px; cursor: pointer; font-weight: 500; font-size: 14px; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s ease; min-height: 44px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <path d="m18 6-12 12"/>
 <path d="m6 6 12 12"/>
 </svg>
 Cancelar
 </button>
 </div>
 </div>
 `;

            document.body.appendChild(modal);

            // Adicionar eventos de clique nas opções
            modal
                .querySelectorAll(".document-option")
                .forEach((option, index) => {
                    option.addEventListener("mouseover", () => {
                        option.style.borderColor = "rgba(19, 67, 119, 0.6)";
                        option.style.background = "rgb(47, 52, 61)";
                        option.style.transform = "translateY(-1px)";
                        option.style.boxShadow =
                            "0 4px 12px rgba(19, 67, 119, 0.25)";
                    });

                    option.addEventListener("mouseout", () => {
                        option.style.borderColor = "rgba(82, 82, 82, 0.3)";
                        option.style.background = "rgb(32, 39, 51)";
                        option.style.transform = "translateY(0)";
                        option.style.boxShadow = "none";
                    });

                    option.addEventListener("click", () => {
                        const selectedIndex = parseInt(
                            option.getAttribute("data-index")
                        );
                        const selectedDocument =
                            documentosRelevantes[selectedIndex];

                        log(
                            ` Documento selecionado: ${selectedDocument.eventoDescricao} - Evento ${selectedDocument.seqEvento}`
                        );
                        showNotification(
                            ` Documento selecionado: ${selectedDocument.eventoDescricao}`,
                            "success"
                        );

                        modal.remove();
                        resolve(selectedDocument);
                    });
                });

            // Evento do botão cancelar
            const cancelBtn = modal.querySelector("#cancel-selection");

            // Adicionar hover vermelho no botão cancelar
            cancelBtn.addEventListener("mouseenter", () => {
                cancelBtn.style.backgroundColor = "#91433d";
                cancelBtn.style.borderColor = "#91433d";
            });

            cancelBtn.addEventListener("mouseleave", () => {
                cancelBtn.style.backgroundColor = "rgb(32, 39, 51)";
                cancelBtn.style.borderColor = "rgba(82, 82, 82, 0.5)";
            });

            cancelBtn.addEventListener("click", () => {
                modal.remove();
                resolve(null);
            });

            modal.addEventListener("click", (e) => {
                if (e.target === modal) {
                    modal.remove();
                    resolve(null);
                }
            });
        });
    }

    // Interface melhorada para configuração da API key
    async function showApiKeyConfig() {
        const existing = document.getElementById("api-key-config");
        if (existing) {
            existing.remove();
            return;
        }

        const currentKey = localStorage.getItem("perplexity_api_key");

        const modal = document.createElement("div");
        modal.id = "api-key-config";
        modal.className = "eprobe-modal";
        modal.style.cssText = `
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background: rgba(0,0,0,0.8);
 z-index: 100001;
 display: flex;
 align-items: center;
 justify-content: center;
 backdrop-filter: blur(4px);
 `;

        modal.innerHTML = `
 <div style="background: #134377; border-radius: 12px; padding: 32px; max-width: 560px; width: 90%; box-shadow: 0 12px 40px rgba(0,0,0,0.6); border: 1px solid rgba(255, 255, 255, 0.1);">
 <div style="margin-bottom: 24px; text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.15); padding-bottom: 20px;">
 <h2 style="margin: 0; color: rgb(255, 255, 255); font-size: 20px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 12px; letter-spacing: -0.025em;">
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(133, 190, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <circle cx="12" cy="16" r="1"/>
 <rect x="3" y="10" width="18" height="12" rx="2"/>
 <path d="M7 10V7a5 5 0 0 1 10 0v3"/>
 </svg>
 Configurar API Key do Perplexity
 </h2>
 </div>
 
 <div style="margin-bottom: 24px; padding: 20px; background: rgba(32, 39, 51, 0.6); border-radius: 10px; font-size: 14px; line-height: 1.6; color: rgb(255, 255, 255); border: 1px solid rgba(255, 255, 255, 0.1);">
 <div style="margin-bottom: 12px;">
 <strong style="color: rgb(133, 190, 255); font-size: 15px;">Como obter sua API Key do Perplexity:</strong>
 </div>
 <div style="padding-left: 8px; color: rgb(226, 232, 240);">
 <div style="margin-bottom: 8px;">1. Acesse: <a href="https://www.perplexity.ai/settings/api" target="_blank" style="color: rgb(133, 190, 255); text-decoration: underline; font-weight: 500;">www.perplexity.ai/settings/api</a></div>
 <div style="margin-bottom: 8px;">2. Faça login na sua conta Perplexity</div>
 <div style="margin-bottom: 8px;">3. Clique em "Generate" para criar uma nova chave</div>
 <div>4. Copie a chave e cole abaixo</div>
 </div>
 </div>

 <div style="margin-bottom: 20px;">
 <label style="display: block; margin-bottom: 8px; font-weight: 600; color: rgb(255, 255, 255); font-size: 14px;">API Key:</label>
 <input type="password" id="api-key-input" placeholder="pplx-..." style="width: 100%; padding: 12px 16px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 8px; font-family: 'Roboto', monospace, sans-serif; background: rgba(32, 39, 51, 0.5); color: rgb(255, 255, 255); font-size: 14px; transition: all 0.2s ease; box-sizing: border-box;" value="${
     currentKey || ""
 }" />
 </div>

 <div style="margin-bottom: 24px; padding: 16px; background: rgba(251, 191, 36, 0.15); border: 1px solid rgba(251, 191, 36, 0.4); border-radius: 10px; font-size: 13px; display: flex; align-items: flex-start; gap: 12px; color: rgb(254, 240, 138);">
 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;">
 <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
 <path d="M12 9v4"/>
 <path d="m12 17 .01 0"/>
 </svg>
 <span style="line-height: 1.5;"><strong>Privacidade:</strong> Sua API Key é armazenada apenas localmente no seu navegador e não é compartilhada.</span>
 </div>

 <div style="text-align: center; display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
 <button id="save-key" style="background: rgb(133, 190, 255); color: #134377; border: 1px solid rgb(133, 190, 255); padding: 14px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 14px; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s ease; min-width: 140px; justify-content: center;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <polyline points="20,6 9,17 4,12"/>
 </svg>
 Salvar e Testar
 </button>
 <button id="remove-key" style="background: rgb(145, 67, 61); color: white; border: 1px solid rgb(145, 67, 61); padding: 14px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 14px; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s ease; min-width: 120px; justify-content: center;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <polyline points="3,6 5,6 21,6"/>
 <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"/>
 </svg>
 Remover
 </button>
 <button id="cancel-config" style="background: rgba(255, 255, 255, 0.1); color: rgb(255, 255, 255); border: 1px solid rgba(255, 255, 255, 0.2); padding: 14px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 14px; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s ease; min-width: 100px; justify-content: center;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <path d="m18 6-12 12"/>
 <path d="m6 6 12 12"/>
 </svg>
 Cancelar
 </button>
 </div>
 </div>
 `;

        document.body.appendChild(modal);

        const input = modal.querySelector("#api-key-input");
        const saveBtn = modal.querySelector("#save-key");
        const removeBtn = modal.querySelector("#remove-key");
        const cancelBtn = modal.querySelector("#cancel-config");

        // Adicionar eventos de focus/blur para o input
        input.addEventListener("focus", () => {
            input.style.borderColor = "rgb(19, 67, 119)";
            input.style.boxShadow = "0 0 0 3px rgba(19, 67, 119, 0.1)";
        });

        input.addEventListener("blur", () => {
            input.style.borderColor = "rgba(82, 82, 82, 0.5)";
            input.style.boxShadow = "none";
        });

        input.focus();

        saveBtn.addEventListener("click", async () => {
            const newKey = input.value.trim();

            if (!newKey) {
                showNotification("Digite uma API key", "error");
                return;
            }

            if (!(await validateApiKey(newKey))) {
                showNotification(
                    "API key inválida. Deve começar com 'pplx-'",
                    "error"
                );
                return;
            }

            try {
                await storeApiKey(newKey);
                modal.remove();

                showNotification("Testando API key...", "info");

                const isValid = await testApiKey();
                if (isValid) {
                    showNotification(
                        "API key configurada e validada!",
                        "success"
                    );
                } else {
                    showNotification(
                        "API key salva, mas pode não estar funcionando",
                        "warning"
                    );
                }
            } catch (error) {
                showNotification(`Erro: ${error.message}`, "error");
            }
        });

        removeBtn.addEventListener("click", async () => {
            await removeStoredApiKey();
            modal.remove();
            showNotification("API key removida!", "info");
        });

        // Adicionar eventos de hover para os botões
        saveBtn.addEventListener("mouseenter", () => {
            saveBtn.style.backgroundColor = "rgb(107, 170, 255)";
            saveBtn.style.color = "#134377";
            saveBtn.style.transform = "translateY(-1px)";
        });

        saveBtn.addEventListener("mouseleave", () => {
            saveBtn.style.backgroundColor = "rgb(133, 190, 255)";
            saveBtn.style.color = "#134377";
            saveBtn.style.transform = "translateY(0)";
        });

        removeBtn.addEventListener("mouseenter", () => {
            removeBtn.style.backgroundColor = "rgb(120, 55, 50)";
            removeBtn.style.transform = "translateY(-1px)";
        });

        removeBtn.addEventListener("mouseleave", () => {
            removeBtn.style.backgroundColor = "rgb(145, 67, 61)";
            removeBtn.style.transform = "translateY(0)";
        });

        // Adicionar hover para o botão cancelar
        cancelBtn.addEventListener("mouseenter", () => {
            cancelBtn.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
            cancelBtn.style.borderColor = "rgba(255, 255, 255, 0.3)";
            cancelBtn.style.transform = "translateY(-1px)";
        });

        cancelBtn.addEventListener("mouseleave", () => {
            cancelBtn.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            cancelBtn.style.borderColor = "rgba(255, 255, 255, 0.2)";
            cancelBtn.style.transform = "translateY(0)";
        });

        cancelBtn.addEventListener("click", () => {
            modal.remove();
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        input.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                saveBtn.click();
            }
        });
    }

    // Função para visualizar logs de erro
    function showErrorLogs() {
        const logs = JSON.parse(
            localStorage.getItem("eprobe_error_logs") || "[]"
        );

        if (logs.length === 0) {
            showNotification("Nenhum log de erro encontrado", "info");
            return;
        }

        const modal = document.createElement("div");
        modal.className = "eprobe-modal";
        modal.style.cssText = `
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background: rgba(0,0,0,0.8);
 z-index: 100002;
 display: flex;
 align-items: center;
 justify-content: center;
 backdrop-filter: blur(4px);
 `;

        modal.innerHTML = `
 <div style="background: rgb(19, 67, 119); border-radius: 8px; padding: 24px; max-width: 80%; max-height: 80%; overflow-y: auto; box-shadow: 0 8px 32px rgba(0,0,0,0.5); border: 1px solid rgba(82, 82, 82, 0.3);">
 <div style="margin-bottom: 20px; text-align: center; border-bottom: 1px solid rgba(82, 82, 82, 0.3); padding-bottom: 16px;">
 <h2 style="margin: 0; color: rgb(243, 246, 249); font-size: 18px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 10px; letter-spacing: -0.025em;">
 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: rgb(19, 67, 119);">
 <circle cx="11" cy="11" r="8"/>
 <path d="m21 21-4.35-4.35"/>
 </svg>
 Logs de Erro da API
 </h2>
 <button id="clear-logs" style="background: rgb(220, 38, 38); color: white; border: 1px solid rgb(220, 38, 38); padding: 8px 12px; border-radius: 6px; cursor: pointer; margin-top: 12px; display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 500; transition: all 0.2s ease;">
 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <polyline points="3,6 5,6 21,6"/>
 <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"/>
 </svg>
 Limpar Logs
 </button>
 </div>
 <div style="font-family: 'Roboto', monospace, sans-serif; font-size: 12px; line-height: 1.4; color: rgb(243, 246, 249);">
 ${logs
     .map(
         (log, i) => `
 <div style="margin-bottom: 16px; padding: 12px; border: 1px solid rgba(82, 82, 82, 0.3); border-radius: 8px; background: rgb(32, 39, 51);">
 <strong style="color: rgb(19, 67, 119);">Log ${i + 1} - ${
             log.timestamp
         }</strong><br>
 <strong style="color: rgb(136, 152, 181);">Request ID:</strong> <span style="color: rgb(243, 246, 249);">${
     log.requestId
 }</span><br>
 <strong style="color: rgb(136, 152, 181);">Phase:</strong> <span style="color: rgb(243, 246, 249);">${
     log.phase
 }</span><br>
 <strong style="color: rgb(136, 152, 181);">Data:</strong><br>
 <pre style="background: rgb(18, 26, 39); padding: 10px; border-radius: 6px; overflow-x: auto; white-space: pre-wrap; color: rgb(243, 246, 249); border: 1px solid rgba(82, 82, 82, 0.2); margin-top: 8px;">${JSON.stringify(
     log.data,
     null,
     2
 )}</pre>
 </div>
 `
     )
     .join("")}
 </div>
 <div style="text-align: center; margin-top: 20px; padding-top: 16px; border-top: 1px solid rgba(82, 82, 82, 0.3);">
 <button id="close-logs" style="background: rgb(32, 39, 51); color: rgb(243, 246, 249); border: 1px solid rgba(82, 82, 82, 0.5); padding: 12px 16px; border-radius: 8px; cursor: pointer; font-weight: 500; font-size: 14px; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s ease;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <path d="m18 6-12 12"/>
 <path d="m6 6 12 12"/>
 </svg>
 Fechar
 </button>
 </div>
 </div>
 `;

        document.body.appendChild(modal);

        modal.querySelector("#close-logs").addEventListener("click", () => {
            modal.remove();
        });

        modal.querySelector("#clear-logs").addEventListener("click", () => {
            localStorage.removeItem("eprobe_error_logs");
            modal.remove();
            showNotification("Logs de erro limpos", "info");
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    // Mostrar informações sobre quota da API
    function showApiQuotaInfo() {
        const modal = document.createElement("div");
        modal.style.cssText = `
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background: rgba(0,0,0,0.7);
 z-index: 100003;
 display: flex;
 align-items: center;
 justify-content: center;
 `;

        modal.innerHTML = `
 <div style="background: white; border-radius: 10px; padding: 30px; max-width: 500px; width: 90%; box-shadow: 0 10px 25px rgba(0,0,0,0.3);">
 <div style="margin-bottom: 20px; text-align: center;">
 <h2 style="margin: 0; color: #dc3545; font-size: 20px;"> Créditos da API Esgotados</h2>
 </div>
 
 <div style="margin-bottom: 20px; font-size: 14px; line-height: 1.6;">
 <p><strong>Sua API key do Perplexity não possui créditos suficientes.</strong></p>
 
 <p><strong>Para resolver:</strong></p>
 <ol>
 <li>Acesse: <a href="https://www.perplexity.ai/settings/api" target="_blank" style="color: #134377;">perplexity.ai/settings/api</a></li>
 <li>Verifique seus créditos e limites</li>
 <li>Se necessário, adicione créditos à sua conta</li>
 <li>Ou aguarde a renovação dos créditos</li>
 </ol>
 
 <p><strong>Alternativa:</strong> Use o método manual que copia o texto para você colar no ChatGPT web.</p>
 </div>

 <div style="text-align: center;">
 <button id="open-billing" style="background: #134377; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px; cursor: pointer; font-weight: bold;">
 Abrir Configurações
 </button>
 <button id="config-new-key" style="background: #134377; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px; cursor: pointer; font-weight: bold;">
 Nova API Key
 </button>
 <button id="close-quota-info" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-weight: bold;">
 Fechar
 </button>
 </div>
 </div>
 `;

        document.body.appendChild(modal);

        modal.querySelector("#open-billing").addEventListener("click", () => {
            window.open("https://www.perplexity.ai/settings/api", "_blank");
            modal.remove();
        });

        modal.querySelector("#config-new-key").addEventListener("click", () => {
            modal.remove();
            showApiKeyConfig();
        });

        modal
            .querySelector("#close-quota-info")
            .addEventListener("click", () => {
                modal.remove();
            });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    // Mostrar opções de processamento para página de lista com múltiplas sentenças
    async function showSentenceProcessingOptions() {
        const documentosRelevantes = findDocumentosRelevantes();

        if (documentosRelevantes.length === 0) {
            showNotification("Nenhuma sentença encontrada", "error");
            return;
        }

        if (documentosRelevantes.length === 1) {
            // Apenas uma sentença, abrir diretamente
            await autoOpenDocumentoRelevante();
            return;
        }

        // Múltiplas sentenças, mostrar opções
        const selectedDocument = await showDocumentSelectionModal(
            documentosRelevantes
        );

        if (!selectedDocument) {
            return; // Usuário cancelou
        }

        // Perguntar o que fazer com o documento selecionado
        const processChoice = await showDocumentProcessingModal();

        if (processChoice) {
            // Abrir o documento selecionado
            log(" Abrindo documento selecionado:", selectedDocument.href);
            showNotification(" Abrindo documento selecionado...", "info");
            window.open(selectedDocument.href, "_blank");
        } else {
            // Processar diretamente via API (funcionalidade experimental)
            showNotification(
                " Processamento direto via API ainda não implementado. Abrindo documento...",
                "warning"
            );
            window.open(selectedDocument.href, "_blank");
        }
    }

    // Debug completo da estrutura HTML ao redor do link SENT1
    function debugEventStructure(linkElement) {
        log(" === DEBUG ESTRUTURA HTML ===");

        // 1. Informações sobre o próprio link
        log(" Link SENT1:");
        log(` Texto: "${linkElement.textContent.trim()}"`);
        log(` Classes: "${linkElement.className}"`);
        log(` Atributos:`, {
            href: linkElement.getAttribute("href"),
            onclick: linkElement.getAttribute("onclick"),
            onmouseover: linkElement.getAttribute("onmouseover"),
            "data-nome": linkElement.getAttribute("data-nome"),
            "data-id": linkElement.getAttribute("data-id"),
        });

        // 2. Analisar a linha (tr) que contém o link
        const currentRow = linkElement.closest("tr");
        if (currentRow) {
            log(" Linha atual (TR):");
            log(` Classes da linha: "${currentRow.className}"`);

            const cells = currentRow.querySelectorAll("td");
            log(` Total de células: ${cells.length}`);

            cells.forEach((cell, index) => {
                const text = cell.textContent.trim();
                log(
                    ` Célula ${index}: "${text}" (classes: "${cell.className}")`
                );

                // Verificar se tem elementos filhos interessantes
                const labels = cell.querySelectorAll("label");
                const spans = cell.querySelectorAll("span");
                const divs = cell.querySelectorAll("div");

                if (labels.length > 0) {
                    labels.forEach((label, i) => {
                        log(
                            ` Label ${i}: "${label.textContent.trim()}" (classes: "${
                                label.className
                            }")`
                        );
                    });
                }
                if (spans.length > 0) {
                    spans.forEach((span, i) => {
                        log(
                            ` Span ${i}: "${span.textContent.trim()}" (classes: "${
                                span.className
                            }")`
                        );
                    });
                }
                if (divs.length > 0) {
                    divs.forEach((div, i) => {
                        log(
                            ` Div ${i}: "${div.textContent.trim()}" (classes: "${
                                div.className
                            }")`
                        );
                    });
                }
            });
        }

        // 3. Analisar linhas anteriores
        log(" Linhas anteriores:");
        let prevRow = currentRow?.previousElementSibling;
        let rowCount = 0;
        while (prevRow && rowCount < 3) {
            rowCount++;
            const prevCells = prevRow.querySelectorAll("td");
            log(` Linha anterior ${rowCount}: ${prevCells.length} células`);

            prevCells.forEach((cell, index) => {
                const text = cell.textContent.trim();
                if (text.length > 10) {
                    log(` Célula ${index}: "${text.substring(0, 100)}..."`);
                }
            });

            prevRow = prevRow.previousElementSibling;
        }

        // 4. Analisar a tabela completa
        const table = linkElement.closest("table");
        if (table) {
            log(" Tabela:");
            log(` Classes da tabela: "${table.className}"`);
            log(` ID da tabela: "${table.id}"`);

            // Procurar por cabeçalhos
            const headers = table.querySelectorAll("th");
            if (headers.length > 0) {
                log(" Cabeçalhos encontrados:");
                headers.forEach((header, index) => {
                    log(` Header ${index}: "${header.textContent.trim()}"`);
                });
            }
        }

        log(" === FIM DEBUG ESTRUTURA ===");
    }

    // Função aprimorada para encontrar descrição do evento
    function findEventDescription(linkElement) {
        const strategies = [
            () => findEventDescriptionInSameRow(linkElement),
            () => findEventDescriptionInPreviousRows(linkElement),
            () => findEventDescriptionByTextPattern(linkElement),
            () => findEventDescriptionInTableStructure(linkElement),
            () => findEventDescriptionByProximity(linkElement),
        ];

        for (let i = 0; i < strategies.length; i++) {
            try {
                log(`Executando estratégia ${i + 1} para descrição...`);
                const result = strategies[i]();
                if (result && result.trim().length > 3) {
                    log(`Estratégia ${i + 1} bem-sucedida:`, result);
                    return result.trim();
                }
            } catch (e) {
                log(`Erro na estratégia ${i + 1}:`, e);
            }
        }

        log("Nenhuma estratégia encontrou descrição válida");
        return "";
    }

    // Estratégia 1: Buscar na mesma linha do link
    function findEventDescriptionInSameRow(linkElement) {
        const currentRow = linkElement.closest("tr");
        if (!currentRow) return "";

        log("Buscando na linha atual...");

        // Buscar por seletores conhecidos
        const selectors = [
            "td.infraEventoDescricao",
            "label.infraEventoDescricao",
            "td[class*='evento'][class*='descricao']",
            "td[class*='Evento'][class*='Descricao']",
        ];

        for (const selector of selectors) {
            const element = currentRow.querySelector(selector);
            if (element) {
                const text = element.textContent.trim();
                if (text && !text.toLowerCase().includes("sent")) {
                    log(`Encontrado via seletor ${selector}:`, text);
                    return text;
                }
            }
        }

        return "";
    }

    // Estratégia 2: Buscar em linhas anteriores (evento pode estar em linha separada)
    function findEventDescriptionInPreviousRows(linkElement) {
        const currentRow = linkElement.closest("tr");
        if (!currentRow) return "";

        log("Buscando em linhas anteriores...");

        let previousRow = currentRow.previousElementSibling;
        let attempts = 0;

        while (previousRow && attempts < 10) {
            attempts++;

            // Verificar se esta linha contém descrição de evento
            const eventDescSelectors = [
                "td.infraEventoDescricao",
                "label.infraEventoDescricao",
                "td[class*='evento']",
                "td[class*='Evento']",
            ];

            for (const selector of eventDescSelectors) {
                const element = previousRow.querySelector(selector);
                if (element) {
                    const text = element.textContent.trim();
                    if (
                        text &&
                        text.length > 5 &&
                        !text.toLowerCase().includes("sent")
                    ) {
                        log(
                            `Encontrado em linha anterior (${attempts}):`,
                            text
                        );
                        return text;
                    }
                }
            }

            previousRow = previousRow.previousElementSibling;
        }

        return "";
    }

    // Estratégia 3: Buscar por padrões de texto típicos de descrição de evento
    function findEventDescriptionByTextPattern(linkElement) {
        const currentRow = linkElement.closest("tr");
        if (!currentRow) return "";

        log("Buscando por padrões de texto...");

        // Expandir busca para linhas próximas
        const rowsToCheck = [];

        // Adicionar linha atual
        rowsToCheck.push(currentRow);

        // Adicionar linhas anteriores
        let prevRow = currentRow.previousElementSibling;
        for (let i = 0; i < 5 && prevRow; i++) {
            rowsToCheck.unshift(prevRow);
            prevRow = prevRow.previousElementSibling;
        }

        // Adicionar linhas posteriores
        let nextRow = currentRow.nextElementSibling;
        for (let i = 0; i < 2 && nextRow; i++) {
            rowsToCheck.push(nextRow);
            nextRow = nextRow.nextElementSibling;
        }

        // Padrões que indicam descrição de evento judicial
        const eventPatterns = [
            /julgamento/i,
            /decisão/i,
            /sentença/i,
            /prolação/i,
            /publicação/i,
            /audiência/i,
            /despacho/i,
            /determinação/i,
            /intimação/i,
            /citação/i,
            /distribuição/i,
            /remessa/i,
            /devolução/i,
            /conclusão/i,
        ];

        for (const row of rowsToCheck) {
            const cells = row.querySelectorAll("td");
            for (const cell of cells) {
                const text = cell.textContent.trim();

                // Verificar se o texto tem tamanho razoável e contém padrões de evento
                if (text.length > 10 && text.length < 200) {
                    for (const pattern of eventPatterns) {
                        if (
                            pattern.test(text) &&
                            !text.toLowerCase().includes("sent1")
                        ) {
                            log(`Encontrado por padrão "${pattern}":`, text);
                            return text;
                        }
                    }
                }
            }
        }

        return "";
    }

    // Estratégia 4: Analisar estrutura da tabela para encontrar coluna de descrição
    function findEventDescriptionInTableStructure(linkElement) {
        const table = linkElement.closest("table");
        if (!table) return "";

        log("Analisando estrutura da tabela...");

        const currentRow = linkElement.closest("tr");
        const linkCellIndex = Array.from(currentRow.cells).findIndex((cell) =>
            cell.contains(linkElement)
        );

        // Buscar na mesma linha, mas em células que podem conter descrição
        for (let i = 0; i < currentRow.cells.length; i++) {
            if (i === linkCellIndex) continue; // Pular célula do link

            const cell = currentRow.cells[i];
            const text = cell.textContent.trim();

            // Verificar se parece uma descrição (texto médio, não apenas números/datas)
            if (text.length > 15 && text.length < 150) {
                // Verificar se não é apenas data, números ou links
                if (
                    !/^\d+[\d\/\-\s]*$/.test(text) &&
                    !text.toLowerCase().includes("sent") &&
                    !/^https?:\/\//.test(text)
                ) {
                    log(
                        `Encontrado na estrutura da tabela (célula ${i}):`,
                        text
                    );
                    return text;
                }
            }
        }

        return "";
    }

    // Estratégia 5: Buscar por proximidade usando XPath-like logic
    function findEventDescriptionByProximity(linkElement) {
        log("Buscando por proximidade...");

        // Buscar elementos próximos que podem conter descrição
        const parent = linkElement.closest("td") || linkElement.closest("tr");
        if (!parent) return "";

        // Buscar em elementos irmãos
        const siblings = parent.parentElement
            ? Array.from(parent.parentElement.children)
            : [];

        for (const sibling of siblings) {
            if (sibling === parent) continue;

            const text = sibling.textContent.trim();
            if (
                text.length > 20 &&
                text.length < 200 &&
                !text.toLowerCase().includes("sent") &&
                !/^\d+[\d\/\-\s]*$/.test(text)
            ) {
                // Verificar se contém palavras típicas de processo judicial
                if (
                    /julgamento|decisão|sentença|audiência|despacho|intimação|publicação|prolação/i.test(
                        text
                    )
                ) {
                    log(`Encontrado por proximidade:`, text);
                    return text;
                }
            }
        }

        return "";
    }

    // Observador de mudanças na página para detectar navegação SPA
    function setupPageObserver() {
        let lastUrl = window.location.href;

        // Observar mudanças no DOM
        const observer = new MutationObserver((mutations) => {
            const currentUrl = window.location.href;

            // Verificar se a URL mudou (navegação SPA)
            if (currentUrl !== lastUrl) {
                console.log(" Navegação detectada:", currentUrl);
                lastUrl = currentUrl;

                // Recriar botão após navegação apenas em páginas válidas
                setTimeout(() => {
                    if (
                        !document.getElementById("sent1-auto-button") &&
                        isValidPageForButton()
                    ) {
                        console.log(" Recriando botão após navegação...");
                        createAutomationButton();
                    } else if (!isValidPageForButton()) {
                        console.log(" Nova página não é válida para o botão");
                    }
                }, 1500);
            }

            // Verificar se o botão ainda existe no DOM
            const buttonExists = document.getElementById("sent1-auto-button");
            if (!buttonExists) {
                // Verificar se a página é válida antes de recriar o botão
                if (isValidPageForButton()) {
                    console.log(" Botão removido do DOM, recriando...");
                    setTimeout(createAutomationButton, 500);
                } else {
                    console.log(
                        " Página não é válida para o botão, não recriando"
                    );
                }
            }
        });

        // Configurar observador
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: false,
        });

        // Observar mudanças de URL via popstate
        window.addEventListener("popstate", () => {
            setTimeout(() => {
                console.log(" Popstate detectado, verificando botão...");
                if (
                    !document.getElementById("sent1-auto-button") &&
                    isValidPageForButton()
                ) {
                    createAutomationButton();
                } else if (!isValidPageForButton()) {
                    console.log(" Página atual não é válida para o botão");
                }
            }, 1000);
        });
    }

    // Inicialização
    function init() {
        log(" Iniciando content script automatizado");
        console.log(" Resumir Documento: Script iniciado");

        // Configurar observador de página
        setupPageObserver();

        // Criar botão após a página carregar
        if (document.readyState === "loading") {
            document.addEventListener(
                "DOMContentLoaded",
                createAutomationButton
            );
        } else {
            createAutomationButton();
        }

        // Criar botão também após um delay para garantir
        setTimeout(createAutomationButton, 1000);

        // Tentar novamente após mais tempo para SPAs
        setTimeout(() => {
            if (
                !document.getElementById("sent1-auto-button") &&
                !document.getElementById("documento-relevante-auto-button")
            ) {
                console.log(" Segunda tentativa de criação do botão...");
                createAutomationButton();
            }
        }, 3000);

        // Tentativa final com botão flutuante forçado se necessário
        setTimeout(() => {
            if (
                !document.getElementById("sent1-auto-button") &&
                !document.getElementById("documento-relevante-auto-button")
            ) {
                console.log(
                    " Terceira tentativa - verificando critérios para criação do botão..."
                );
                if (shouldShowIntegratedButton()) {
                    console.log(" Tentando criar botão integrado...");
                    createAutomationButton();
                } else if (shouldShowFloatingButton()) {
                    console.log(" Tentando criar botão flutuante...");
                    createFloatingButton();
                } else {
                    console.log(
                        " Página não atende critérios para nenhum botão"
                    );
                }
            }
        }, 5000);

        // Debug do botão
        debugButtonStatus();

        // Tentar detectar data da sessão após a página carregar completamente
        setTimeout(() => {
            console.log(
                "🔍 Tentando detectar data da sessão automaticamente..."
            );
            detectarDataSessao();
        }, 2000);

        // Segunda tentativa de detecção de data após mais tempo (para SPAs)
        setTimeout(() => {
            if (!hasDataSessaoPautado()) {
                console.log(
                    "🔍 Segunda tentativa de detecção da data da sessão..."
                );
                detectarDataSessao();
            }
        }, 5000);

        // �️ INTEGRAÇÃO AUTOMÁTICA DESABILITADA - Prevenindo logout por excesso de requisições
        setTimeout(async () => {
            if (hasDataSessaoPautado()) {
                console.log(
                    "ℹ️ CRUZAMENTO: Modo automático desabilitado para prevenir logout"
                );
                console.log(
                    "💡 Use window.SENT1_AUTO.cruzarDadosDataSessao() para busca manual"
                );
            }
        }, 6000);

        // ⚠️ TENTATIVA FINAL TAMBÉM DESABILITADA
        setTimeout(async () => {
            if (
                hasDataSessaoPautado() &&
                !hasDadosCompletosSessionJulgamento()
            ) {
                console.log(
                    "ℹ️ CRUZAMENTO: Tentativa final desabilitada - use modo manual"
                );
                console.log(
                    "🔧 Execute: window.SENT1_AUTO.debugPaginaSessoes() para investigar"
                );
            }
        }, 10000);
    }

    // Inicializar
    init();

    // Expor funções para debug manual
    window.SENT1_AUTO = {
        runFullAutomation,
        autoOpenDocumentoRelevante,
        autoExtractText,
        copyToClipboard,
        sendToChatGPT,
        autoOpenChatGPT,
        detectPageType,
        isValidPageForButton,
        findDocumentosRelevantes,
        showDocumentSelectionModal,
        showSentenceProcessingOptions,
        getStoredApiKey,
        storeApiKey,
        removeStoredApiKey,
        testApiKey,
        showErrorLogs,
        debugApiCall,
        showApiQuotaInfo,
        cleanInvisibleChars,
        debugEventStructure,
        extractTextFromPDF,
        // Novas funções de detecção de data de sessão
        detectarDataSessao,
        getDataSessaoPautado,
        hasDataSessaoPautado,
        resetDataSessaoPautado,
        showDataSessaoPautadoInfo,
        validarDataBrasileira,
        // Funções de interface para data da sessão
        inserirDataSessaoNaInterface,
        removerDataSessaoDaInterface,
        atualizarDataSessaoNaInterface,
        forcarInsercaoCardSemValidacao, // <-- Adiciona a função ao namespace global
        // Funções de cruzamento de dados de sessão
        buscarDadosSessoes,
        parsearDadosSessoes,
        extrairDadosLinhaSessao,
        buscarSessaoPorData,
        cruzarDadosDataSessao,
        cruzarDadosDataSessao,
        getDadosCompletosSessionJulgamento,
        hasDadosCompletosSessionJulgamento,
        resetDadosCompletosSessionJulgamento,
        showDadosCompletosSessionJulgamento,
        // Funções de debug
        debugDeteccaoDataSessao,
        forcarDeteccaoDataSessao,
    };

    // 🔍 FUNÇÕES DE DEBUG
    window.SENT1_AUTO.debugDeteccaoDataSessao = debugDeteccaoDataSessao;
    window.SENT1_AUTO.forcarDeteccaoDataSessao = forcarDeteccaoDataSessao;

    // 🔍 FUNÇÕES DE DEBUG - Para investigar problemas com o card
    function debugDeteccaoDataSessao() {
        console.log("🔍 DEBUG: Iniciando debug da detecção de data da sessão");

        // 1. Verificar estado atual
        console.log("📊 Estado atual:");
        console.log(
            `   - Data detectada: ${
                hasDataSessaoPautado()
                    ? getDataSessaoPautado().dataFormatada
                    : "NÃO"
            }`
        );
        console.log(
            `   - Processo atual: ${processoAtual || "não identificado"}`
        );
        console.log(
            `   - Já processado: ${
                processoAtual ? processoJaFoiProcessado(processoAtual) : "N/A"
            }`
        );
        console.log(
            `   - Card na interface: ${
                document.getElementById("eprobe-data-sessao") ? "SIM" : "NÃO"
            }`
        );

        // 2. Verificar texto da página
        const textoCompleto = document.body.innerText;
        console.log(`📄 Texto da página: ${textoCompleto.length} caracteres`);

        // 3. Testar padrões de busca
        const padroes = [
            /(?:data\s*da\s*sess[aã]o|sess[aã]o\s*(?:de|em|para|:)?)\s*:?\s*(\d{1,2}\/\d{1,2}\/\d{4})/i,
            /(?:julgamento\s*(?:em|para|:)|para\s*julgamento)\s*:?\s*(\d{1,2}\/\d{1,2}\/\d{4})/i,
            /(?:pautado|agendar|agendado|marcado).*?(\d{1,2}\/\d{1,2}\/\d{4})/i,
        ];

        padroes.forEach((padrao, index) => {
            const match = textoCompleto.match(padrao);
            if (match) {
                console.log(`✅ Padrão ${index + 1}: Encontrado "${match[1]}"`);
            } else {
                console.log(`❌ Padrão ${index + 1}: Não encontrado`);
            }
        });

        // 4. Verificar container alvo
        const container = document.querySelector(
            "#frmProcessoLista #divInfraAreaDados #divInfraAreaProcesso #fldCapa #divCapaProcesso .row.mt-2"
        );
        console.log(
            `🎯 Container alvo: ${container ? "ENCONTRADO" : "NÃO ENCONTRADO"}`
        );

        if (container) {
            console.log(`   - TagName: ${container.tagName}`);
            console.log(`   - ID: ${container.id}`);
            console.log(`   - Classes: ${container.className}`);
            console.log(`   - Filhos: ${container.children.length}`);
        }

        // 5. Listar containers alternativos
        const alternativas = [
            "#frmProcessoLista #divInfraAreaDados #divInfraAreaProcesso #fldCapa #divCapaProcesso",
            "#divCapaProcesso .row",
            "#fldCapa .row",
            ".row.mt-2",
        ];

        console.log("🔍 Containers alternativos:");
        alternativas.forEach((seletor, index) => {
            const elemento = document.querySelector(seletor);
            console.log(
                `   ${index + 1}. ${seletor}: ${
                    elemento ? "ENCONTRADO" : "NÃO ENCONTRADO"
                }`
            );
        });

        // 6. Testar inserção do card
        if (hasDataSessaoPautado()) {
            console.log("🧪 Testando inserção do card...");
            const resultadoInsercao = inserirDataSessaoNaInterface();
            console.log(
                `🎯 Resultado da inserção: ${
                    resultadoInsercao ? "SUCESSO" : "FALHA"
                }`
            );
        }
    }

    function forcarDeteccaoDataSessao() {
        console.log("🔄 FORÇA: Forçando nova detecção de data da sessão");

        // 1. Resetar estado
        resetDataSessaoPautado();
        processoAtual = null;

        // 2. Remover card se existir
        const cardExistente = document.getElementById("eprobe-data-sessao");
        if (cardExistente) {
            cardExistente.remove();
            console.log("🗑️ Card existente removido");
        }

        // 3. Forçar detecção
        const dataDetectada = detectarDataSessao();

        if (dataDetectada) {
            console.log(`✅ Data detectada: ${dataDetectada.dataFormatada}`);

            // 4. Tentar inserir card imediatamente
            const sucesso = inserirDataSessaoNaInterface();
            console.log(
                `🎯 Inserção do card: ${sucesso ? "SUCESSO" : "FALHA"}`
            );

            if (sucesso) {
                // Marcar processo como processado apenas após inserção bem-sucedida
                marcarProcessoComoProcessado(processoAtual);
                console.log(
                    "🔐 Processo marcado como processado após inserção do card"
                );
            }
        } else {
            console.log("❌ Nenhuma data detectada");
        }
    }

    // 🧪 FUNÇÃO DE TESTE PARA VERIFICAR INSERÇÃO DO CARD
    function testarInsercaoCard() {
        console.log("🧪 TESTE: Verificando inserção do card");

        // 1. Verificar se há data detectada
        if (!hasDataSessaoPautado()) {
            console.log("❌ TESTE: Nenhuma data detectada - forçando detecção");
            forcarDeteccaoDataSessao();
            return;
        }

        console.log(
            `✅ TESTE: Data detectada: ${getDataSessaoPautado().dataFormatada}`
        );

        // 2. Remover card existente se houver
        const cardExistente = document.getElementById("eprobe-data-sessao");
        if (cardExistente) {
            cardExistente.remove();
            console.log("🗑️ TESTE: Card existente removido");
        }

        // 3. Tentar inserir card
        console.log("🎯 TESTE: Tentando inserir card...");
        const sucesso = inserirDataSessaoNaInterface();

        if (sucesso) {
            console.log("✅ TESTE: Card inserido com sucesso!");
            const cardInserido = document.getElementById("eprobe-data-sessao");
            if (cardInserido) {
                console.log("✅ TESTE: Card confirmado no DOM");
                console.log("🎯 TESTE: Elemento:", cardInserido);
                return true;
            } else {
                console.log(
                    "❌ TESTE: Card não encontrado no DOM após inserção"
                );
                return false;
            }
        } else {
            console.log("❌ TESTE: Falha na inserção do card");
            return false;
        }
    }

    // 🚨 FUNÇÃO PARA FORÇAR INSERÇÃO DO CARD SEM VALIDAÇÃO
    function forcarInsercaoCardSemValidacao() {
        console.log("🚨 FORÇA: Forçando inserção do card sem validações");

        // 1. Verificar se há data detectada
        if (!hasDataSessaoPautado()) {
            console.log("❌ FORÇA: Nenhuma data detectada - tentando detectar");

            // Forçar detecção mesmo para processo já processado
            const processoAnterior = processoAtual;
            const jaProcessadoAnterior = processoAnterior
                ? processosJaProcessados.has(processoAnterior)
                : false;

            if (jaProcessadoAnterior) {
                console.log(
                    "🔄 FORÇA: Removendo processo da lista de processados temporariamente"
                );
                processosJaProcessados.delete(processoAnterior);
            }

            // Detectar data
            const dataDetectada = detectarDataSessao();

            if (!dataDetectada) {
                console.log("❌ FORÇA: Falha na detecção da data");
                if (jaProcessadoAnterior) {
                    processosJaProcessados.add(processoAnterior);
                }
                return false;
            }
        }

        // 2. Remover card existente
        const cardExistente = document.getElementById("eprobe-data-sessao");
        if (cardExistente) {
            cardExistente.remove();
            console.log("🗑️ FORÇA: Card existente removido");
        }

        // 3. Forçar inserção
        console.log("🎯 FORÇA: Tentando inserir card...");
        const sucesso = inserirDataSessaoNaInterface();

        if (sucesso) {
            console.log("✅ FORÇA: Card inserido com sucesso!");
            return true;
        } else {
            console.log("❌ FORÇA: Falha na inserção do card");
            return false;
        }
    }

    // ========================================
    // FUNÇÕES DE EXTRAÇÃO DIRETA DE TEXTO PDF
    // ========================================

    /**
     * Extrai texto de PDF usando estratégias de extração direta
     * @param {HTMLElement} pdfElement - Elemento do PDF
     * @returns {Promise<string|null>} - Texto extraído ou null se falhar
     */
    async function extractTextFromPDF(pdfElement) {
        log("� Iniciando extração de texto do PDF...");

        try {
            showNotification("� Extraindo texto do PDF...", "info");

            // ESTRATÉGIA 1: Seleção automática de texto no PDF
            const textFromSelection = await tryExtractTextViaSelection(
                pdfElement
            );
            if (textFromSelection && textFromSelection.length > 100) {
                log(
                    ` Texto extraído via seleção: ${textFromSelection.length} caracteres`
                );
                showNotification(
                    ` Texto extraído com sucesso! ${textFromSelection.length} caracteres`,
                    "success"
                );
                return cleanExtractedText(textFromSelection);
            }

            // ESTRATÉGIA 2: PDF.js para extrair texto estruturado
            const textFromPdfJs = await tryExtractTextViaPdfJs(pdfElement);
            if (textFromPdfJs && textFromPdfJs.length > 100) {
                log(
                    ` Texto extraído via PDF.js: ${textFromPdfJs.length} caracteres`
                );
                showNotification(
                    ` Texto extraído com sucesso! ${textFromPdfJs.length} caracteres`,
                    "success"
                );
                return cleanExtractedText(textFromPdfJs);
            }

            // ESTRATÉGIA 3: Fetch direto do PDF e processamento
            const textFromFetch = await tryExtractTextViaFetch(pdfElement);
            if (textFromFetch && textFromFetch.length > 100) {
                log(
                    ` Texto extraído via fetch: ${textFromFetch.length} caracteres`
                );
                showNotification(
                    ` Texto extraído com sucesso! ${textFromFetch.length} caracteres`,
                    "success"
                );
                return cleanExtractedText(textFromFetch);
            }

            // ESTRATÉGIA 4: Clipboard após comando de cópia
            const textFromClipboard = await tryExtractTextViaClipboard(
                pdfElement
            );
            if (textFromClipboard && textFromClipboard.length > 100) {
                log(
                    ` Texto extraído via clipboard: ${textFromClipboard.length} caracteres`
                );
                showNotification(
                    ` Texto extraído com sucesso! ${textFromClipboard.length} caracteres`,
                    "success"
                );
                return cleanExtractedText(textFromClipboard);
            }

            // Se todas as estratégias diretas falharam, oferecer alternativas
            throw new Error(
                "Não foi possível extrair texto diretamente do PDF"
            );
        } catch (error) {
            log(` Erro na extração de texto: ${error.message}`);
            return await handleTextExtractionError(error, pdfElement);
        }
    }

    /**
     * ESTRATÉGIA 1: Extrair texto via seleção automática
     */
    async function tryExtractTextViaSelection(pdfElement) {
        try {
            log("� Tentando extração via seleção automática...");

            // Focar no elemento PDF
            pdfElement.focus();
            await new Promise((resolve) => setTimeout(resolve, 500));

            // Simular Ctrl+A para selecionar todo o texto
            const selectAllEvent = new KeyboardEvent("keydown", {
                key: "a",
                code: "KeyA",
                ctrlKey: true,
                metaKey: false,
                bubbles: true,
                cancelable: true,
            });

            pdfElement.dispatchEvent(selectAllEvent);
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Tentar obter texto selecionado
            const selectedText = window.getSelection().toString();
            if (selectedText && selectedText.length > 50) {
                log(" Texto obtido via getSelection()");
                return selectedText;
            }

            // Simular Ctrl+C para copiar
            const copyEvent = new KeyboardEvent("keydown", {
                key: "c",
                code: "KeyC",
                ctrlKey: true,
                metaKey: false,
                bubbles: true,
                cancelable: true,
            });

            pdfElement.dispatchEvent(copyEvent);
            await new Promise((resolve) => setTimeout(resolve, 500));

            // Tentar ler do clipboard
            try {
                const clipboardText = await navigator.clipboard.readText();
                if (clipboardText && clipboardText.length > 50) {
                    log(" Texto obtido via clipboard após Ctrl+C");
                    return clipboardText;
                }
            } catch (clipError) {
                log(" Acesso negado ao clipboard");
            }

            return null;
        } catch (error) {
            log(` Erro na seleção automática: ${error.message}`);
            return null;
        }
    }

    /**
     * ESTRATÉGIA 2: Extrair texto via PDF.js
     */
    async function tryExtractTextViaPdfJs(pdfElement) {
        try {
            log("📚 Tentando extração via PDF.js...");

            const pdfUrl = pdfElement.src;
            if (
                !pdfUrl ||
                pdfUrl.startsWith("blob:") ||
                pdfUrl.startsWith("data:")
            ) {
                log(" URL do PDF não é adequada para PDF.js");
                return null;
            }

            // Carregar PDF.js se necessário
            if (typeof pdfjsLib === "undefined") {
                log("📦 Carregando PDF.js...");
                await loadPdfJsLibrary();
            }

            log(`� Processando PDF: ${pdfUrl}`);
            const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
            let fullText = "";

            // Extrair texto de todas as páginas (limitado a 10 páginas para performance)
            const numPages = Math.min(pdf.numPages, 10);
            for (let pageNum = 1; pageNum <= numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const textContent = await page.getTextContent();

                const pageText = textContent.items
                    .filter((item) => item.str && item.str.trim().length > 0)
                    .map((item) => item.str)
                    .join(" ");

                if (pageText.trim()) {
                    fullText += pageText + "\n\n";
                }

                // Mostrar progresso
                if (numPages > 1) {
                    showNotification(
                        ` Processando página ${pageNum}/${numPages}...`,
                        "info"
                    );
                }
            }

            if (fullText.trim().length > 50) {
                log(
                    ` PDF.js extraiu ${fullText.length} caracteres de ${numPages} páginas`
                );
                return fullText.trim();
            }

            return null;
        } catch (error) {
            log(` Erro no PDF.js: ${error.message}`);
            return null;
        }
    }

    /**
     * ESTRATÉGIA 3: Fetch direto do PDF
     */
    async function tryExtractTextViaFetch(pdfElement) {
        try {
            log(" Tentando extração via fetch direto...");

            const pdfUrl = pdfElement.src;
            if (
                !pdfUrl ||
                pdfUrl.startsWith("blob:") ||
                pdfUrl.startsWith("data:")
            ) {
                log(" URL do PDF não é adequada para fetch");
                return null;
            }

            // Carregar PDF.js se necessário
            if (typeof pdfjsLib === "undefined") {
                await loadPdfJsLibrary();
            }

            showNotification(" Baixando PDF...", "info");

            // Fetch do PDF com timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

            const response = await fetch(pdfUrl, {
                signal: controller.signal,
                headers: {
                    Accept: "application/pdf",
                },
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(
                    `HTTP ${response.status}: ${response.statusText}`
                );
            }

            const arrayBuffer = await response.arrayBuffer();
            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;

            let fullText = "";
            const numPages = Math.min(pdf.numPages, 15); // Limite maior para fetch direto

            for (let pageNum = 1; pageNum <= numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const textContent = await page.getTextContent();

                const pageText = textContent.items
                    .filter((item) => item.str && item.str.trim().length > 0)
                    .map((item) => item.str)
                    .join(" ");

                if (pageText.trim()) {
                    fullText += pageText + "\n\n";
                }

                showNotification(
                    ` Processando página ${pageNum}/${numPages}...`,
                    "info"
                );
            }

            if (fullText.trim().length > 50) {
                log(
                    ` Fetch extraiu ${fullText.length} caracteres de ${numPages} páginas`
                );
                return fullText.trim();
            }

            return null;
        } catch (error) {
            log(` Erro no fetch: ${error.message}`);
            return null;
        }
    }

    /**
     * ESTRATÉGIA 4: Extrair via clipboard com comandos específicos
     */
    async function tryExtractTextViaClipboard(pdfElement) {
        try {
            log(" Tentando extração via clipboard...");

            // Limpar clipboard primeiro
            try {
                await navigator.clipboard.writeText("");
            } catch (e) {
                log(" Não foi possível limpar clipboard");
            }

            // Focar e tentar diferentes combinações de teclas
            pdfElement.focus();
            await new Promise((resolve) => setTimeout(resolve, 500));

            // Tentar Ctrl+A seguido de Ctrl+C
            document.execCommand("selectAll");
            await new Promise((resolve) => setTimeout(resolve, 300));
            document.execCommand("copy");
            await new Promise((resolve) => setTimeout(resolve, 500));

            // Verificar clipboard
            try {
                const clipboardText = await navigator.clipboard.readText();
                if (clipboardText && clipboardText.trim().length > 50) {
                    log(" Texto obtido via execCommand");
                    return clipboardText.trim();
                }
            } catch (clipError) {
                log(" Acesso negado ao clipboard após execCommand");
            }

            return null;
        } catch (error) {
            log(` Erro na extração via clipboard: ${error.message}`);
            return null;
        }
    }

    /**
     * Carrega a biblioteca PDF.js dinamicamente
     */
    async function loadPdfJsLibrary() {
        if (typeof pdfjsLib !== "undefined") {
            return;
        }

        log("📦 Carregando PDF.js...");

        // Carregar PDF.js da CDN
        const script = document.createElement("script");
        script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
        document.head.appendChild(script);

        await new Promise((resolve, reject) => {
            script.onload = () => {
                log(" PDF.js carregado com sucesso");
                // Configurar worker
                if (typeof pdfjsLib !== "undefined") {
                    pdfjsLib.GlobalWorkerOptions.workerSrc =
                        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
                }
                resolve();
            };
            script.onerror = () => {
                log(" Erro ao carregar PDF.js");
                reject(new Error("Falha ao carregar PDF.js"));
            };
        });

        // Aguardar inicialização
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    /**
     * Limpa e normaliza texto extraído de PDF
     */
    function cleanExtractedText(text) {
        return text
            .replace(/\r\n/g, "\n") // Normalizar quebras de linha
            .replace(/\r/g, "\n") // Normalizar quebras de linha
            .replace(/\n{3,}/g, "\n\n") // Reduzir quebras de linha excessivas
            .replace(/\s+/g, " ") // Normalizar espaços múltiplos
            .replace(/([.!?])\s*([A-ZÁÊÇ])/g, "$1\n\n$2") // Quebrar em parágrafos
            .trim();
    }

    /**
     * Trata erros na extração de texto e oferece soluções
     */
    async function handleTextExtractionError(error, pdfElement) {
        const pdfUrl = pdfElement?.src || "";

        log(" Tentativas diretas falharam, oferecendo alternativas");

        showNotification(
            " Extração automática não foi possível!\n\n" +
                "Métodos alternativos:\n" +
                "1. Selecione o texto manualmente no PDF (Ctrl+A, Ctrl+C)\n" +
                "2. Baixe o PDF e use ChatGPT/Claude com upload\n" +
                "3. Use ferramenta de conversão PDF para texto\n\n" +
                " Alguns PDFs têm proteções que impedem extração automática.",
            "warning"
        );

        // Tentar iniciar download automático como fallback
        await tryAutoDownloadPDF(pdfUrl);

        return null;
    }

    /**
     * Tenta extrair texto direto do PDF usando APIs nativas
     */
    async function tryExtractDirectPdfText(pdfElement) {
        try {
            log(" Tentando extração direta de texto do PDF...");

            // Verificar se é um PDF embedado do Chrome
            if (
                pdfElement.type === "application/pdf" ||
                pdfElement.type === "application/x-google-chrome-pdf"
            ) {
                // Tentar selecionar tudo no PDF e copiar
                pdfElement.focus();

                // Simular Ctrl+A para selecionar todo o texto
                const selectAllEvent = new KeyboardEvent("keydown", {
                    key: "a",
                    ctrlKey: true,
                    bubbles: true,
                });
                pdfElement.dispatchEvent(selectAllEvent);

                await new Promise((resolve) => setTimeout(resolve, 500));

                // Tentar ler da clipboard se possível
                try {
                    if (navigator.clipboard && navigator.clipboard.readText) {
                        const clipboardText =
                            await navigator.clipboard.readText();
                        if (clipboardText && clipboardText.length > 100) {
                            log(" Texto extraído via clipboard");
                            return clipboardText;
                        }
                    }
                } catch (clipboardError) {
                    log(" Acesso ao clipboard negado");
                }
            }

            // Tentar outras abordagens para PDFs
            const pdfUrl = pdfElement.src;
            if (pdfUrl && !pdfUrl.startsWith("blob:")) {
                // Tentar carregar PDF.js se disponível
                if (typeof pdfjsLib !== "undefined") {
                    log("📚 Tentando PDF.js para extração...");
                    const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
                    const page = await pdf.getPage(1);
                    const textContent = await page.getTextContent();

                    const text = textContent.items
                        .map((item) => item.str)
                        .join(" ");
                    if (text.length > 100) {
                        log(" Texto extraído via PDF.js");
                        return text;
                    }
                }
            }

            return null;
        } catch (error) {
            log(` Extração direta falhou: ${error.message}`);
            return null;
        }
    }

    /**
     * Captura imagem do PDF para OCR usando múltiplas estratégias
     */
    async function captureImageForOCR(pdfElement) {
        try {
            showNotification("� Capturando imagem do PDF...", "info");

            // Método 1: html2canvas (mais confiável)
            const canvasFromHtml2Canvas = await tryHtml2Canvas(pdfElement);
            if (canvasFromHtml2Canvas) {
                log(" Captura via html2canvas bem-sucedida");
                return canvasFromHtml2Canvas;
            }

            // Método 2: Canvas nativo
            log(" Tentando captura via canvas nativo...");
            const canvasNativo = await tryNativeCanvas(pdfElement);
            if (canvasNativo) {
                log(" Captura via canvas nativo bem-sucedida");
                return canvasNativo;
            }

            // Método 3: Usar screenshot da viewport
            log(" Tentando captura da viewport...");
            const viewportCanvas = await tryViewportCapture(pdfElement);
            if (viewportCanvas) {
                log(" Captura da viewport bem-sucedida");
                return viewportCanvas;
            }

            throw new Error("Todos os métodos de captura falharam");
        } catch (error) {
            log(` Erro na captura de imagem: ${error.message}`);
            return null;
        }
    }

    /**
     * Tenta download automático do PDF
     */
    async function tryAutoDownloadPDF(pdfUrl) {
        if (
            !pdfUrl ||
            pdfUrl.startsWith("blob:") ||
            pdfUrl.startsWith("chrome-extension:")
        ) {
            return;
        }

        try {
            log(" Tentando download automático do PDF...");
            const link = document.createElement("a");
            link.href = pdfUrl;
            link.download = "documento-eproc.pdf";
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            showNotification(
                "Download iniciado! Use o arquivo com ChatGPT/Claude.",
                "info"
            );
        } catch (downloadError) {
            log(` Download automático falhou: ${downloadError.message}`);
        }
    }

    // Modal customizado para opções de preview
    function showPreviewOptionsModal() {
        return new Promise((resolve) => {
            const overlay = document.createElement("div");
            overlay.className = "help-modal-overlay";
            overlay.innerHTML = `
 <div class="help-modal" style="max-width: 420px;">
 <div class="help-modal-header">
 <h2 style="font-size:1.1rem;display:flex;align-items:center;gap:8px;">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.2em;height:1.2em;">
 <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
 <circle cx="12" cy="12" r="3"/>
 </svg>
 Texto Extraído
 </h2>
 <button class="help-close-btn" aria-label="Fechar">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 6-12 12" /><path d="m6 6 12 12" /></svg>
 </button>
 </div>
 <div class="help-modal-content" style="padding:24px 20px 20px 20px;">
 <div style="margin-bottom:18px;display:flex;align-items:center;gap:8px;">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.1em;height:1.1em;color:#134377;"><polyline points="20 6 9 17 4 12" /></svg>
 <span style="color:rgb(var(--color-text-main));font-size:1rem;">Texto extraído com sucesso!</span>
 </div>
 <p style="color:rgb(var(--color-text-muted));margin-bottom:20px;line-height:1.5;">Deseja visualizar o preview do texto antes de copiar?</p>
 <div style="display:flex;gap:12px;justify-content:flex-end;">
 <button class="btn primary" id="preview-yes-btn" style="min-width:100px;">Ver Preview</button>
 <button class="btn" id="preview-no-btn" style="min-width:120px;">Copiar Direto</button>
 </div>
 </div>
 </div>
 `;
            document.body.appendChild(overlay);
            const close = (result) => {
                document.body.removeChild(overlay);
                resolve(result);
            };
            overlay.querySelector(".help-close-btn").onclick = () =>
                close(false);
            overlay.querySelector("#preview-yes-btn").onclick = () =>
                close(true);
            overlay.querySelector("#preview-no-btn").onclick = () =>
                close(false);
            overlay.addEventListener("click", (e) => {
                if (e.target === overlay) close(false);
            });
        });
    }

    // Modal customizado para opções de processamento de documento
    function showDocumentProcessingModal() {
        return new Promise((resolve) => {
            const overlay = document.createElement("div");
            overlay.className = "help-modal-overlay";
            overlay.innerHTML = `
 <div class="help-modal" style="max-width: 450px;">
 <div class="help-modal-header">
 <h2 style="font-size:1.1rem;display:flex;align-items:center;gap:8px;">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.2em;height:1.2em;">
 <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
 <polyline points="14,2 14,8 20,8"/>
 <line x1="16" y1="13" x2="8" y2="13"/>
 <line x1="16" y1="17" x2="8" y2="17"/>
 <polyline points="10,9 9,9 8,9"/>
 </svg>
 Documento Selecionado
 </h2>
 <button class="help-close-btn" aria-label="Fechar">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 6-12 12" /><path d="m6 6 12 12" /></svg>
 </button>
 </div>
 <div class="help-modal-content" style="padding:24px 20px 20px 20px;">
 <p style="color:rgb(var(--color-text-main));margin-bottom:20px;line-height:1.5;">Como deseja processar o documento selecionado?</p>
 <div style="margin-bottom:20px;">
 <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;padding:12px;border-radius:8px;background:rgb(var(--color-background-alt3));">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.2em;height:1.2em;color:#134377;flex-shrink:0;">
 <path d="M15 3h6v6"/>
 <path d="M10 14 21 3"/>
 <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
 </svg>
 <div>
 <div style="color:rgb(var(--color-text-main));font-weight:500;margin-bottom:4px;">Processamento Manual</div>
 <div style="color:rgb(var(--color-text-muted));font-size:0.9rem;">Abre o documento em nova aba para extração manual</div>
 </div>
 </div>
 <div style="display:flex;align-items:center;gap:12px;padding:12px;border-radius:8px;background:rgb(var(--color-background-alt3));">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.2em;height:1.2em;color:#f59e0b;flex-shrink:0;">
 <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
 <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
 <line x1="12" y1="19" x2="12" y2="22"/>
 <line x1="8" y1="22" x2="16" y2="22"/>
 </svg>
 <div>
 <div style="color:rgb(var(--color-text-main));font-weight:500;margin-bottom:4px;">Processamento via API</div>
 <div style="color:rgb(var(--color-text-muted));font-size:0.9rem;">Tenta processar diretamente (experimental)</div>
 </div>
 </div>
 </div>
 <div style="display:flex;gap:12px;justify-content:flex-end;">
 <button class="btn primary" id="process-manual-btn" style="min-width:120px;">Manual</button>
 <button class="btn" id="process-api-btn" style="min-width:100px;">Via API</button>
 </div>
 </div>
 </div>
 `;
            document.body.appendChild(overlay);
            const close = (result) => {
                document.body.removeChild(overlay);
                resolve(result);
            };
            overlay.querySelector(".help-close-btn").onclick = () =>
                close(true);
            overlay.querySelector("#process-manual-btn").onclick = () =>
                close(true);
            overlay.querySelector("#process-api-btn").onclick = () =>
                close(false);
            overlay.addEventListener("click", (e) => {
                if (e.target === overlay) close(true);
            });
        });
    }

    // Formatar informações de magistrado/advogado
    function formatarMagistradoAdvogado(texto) {
        if (!texto || texto.trim().length === 0) {
            return "";
        }

        let textoLimpo = texto.trim();

        // Remover tags HTML (incluindo <br/> e <br>)
        textoLimpo = textoLimpo.replace(/<br\s*\/?>/gi, "\n");
        textoLimpo = textoLimpo.replace(/<[^>]*>/g, "");

        // Separar em linhas e filtrar conteúdo útil
        const linhas = textoLimpo
            .split(/\n/)
            .map((l) => l.trim())
            .filter((l) => l.length > 0)
            .filter((l) => !l.match(/^(MAGISTRADO|ADVOGADO)$/i)); // Remover labels extras

        // Detectar se é magistrado ou advogado baseado em palavras-chave
        const isMagistrado = /juiz|juíz|magistrad|vara|gabinete|comarca/i.test(
            textoLimpo
        );

        if (isMagistrado) {
            // Para magistrados: procurar nome da pessoa e informação da vara
            let nomePessoa = "";
            let infoVara = "";

            for (const linha of linhas) {
                // Se a linha contém palavras típicas de vara/gabinete, é info de vara
                if (/\d+[ªº]?\s*(vara|gabinete|comarca)/i.test(linha)) {
                    infoVara = linha;
                }
                // Se é um nome de pessoa (contém pelo menos 2 palavras com letras)
                else if (
                    /^[A-ZÁÊÇÕÜÀÁÉÊÍÓÔÚÂÃ\s]{3,}$/i.test(linha) &&
                    linha.split(" ").length >= 2
                ) {
                    // Capitalizar corretamente o nome (primeira letra maiúscula, resto minúscula)
                    nomePessoa = linha
                        .toLowerCase()
                        .split(" ")
                        .map(
                            (palavra) =>
                                palavra.charAt(0).toUpperCase() +
                                palavra.slice(1)
                        )
                        .join(" ");
                }
            }

            // Se encontrou nome e vara, retornar objeto com ambos
            if (nomePessoa && infoVara) {
                return {
                    tipo: "magistrado",
                    nome: `Magistrado(a): ${nomePessoa}`,
                    vara: infoVara,
                };
            }
            // Se só encontrou nome
            else if (nomePessoa) {
                return {
                    tipo: "magistrado",
                    nome: `Magistrado(a): ${nomePessoa}`,
                    vara: null,
                };
            }
            // Se só encontrou vara
            else if (infoVara) {
                return {
                    tipo: "magistrado",
                    nome: `Magistrado(a): ${infoVara}`,
                    vara: null,
                };
            }
            // Fallback: usar primeira linha útil
            else if (linhas.length > 0) {
                const primeiraLinha = linhas[0]
                    .toLowerCase()
                    .split(" ")
                    .map(
                        (palavra) =>
                            palavra.charAt(0).toUpperCase() + palavra.slice(1)
                    )
                    .join(" ");
                return {
                    tipo: "magistrado",
                    nome: `Magistrado(a): ${primeiraLinha}`,
                    vara: null,
                };
            }
        } else {
            // Para advogados: usar a primeira linha que parece um nome
            let nomeAdvogado =
                linhas.find(
                    (linha) =>
                        /^[A-ZÁÊÇÕÜÀÁÉÊÍÓÔÚÂÃ\s]{3,}$/i.test(linha) &&
                        linha.split(" ").length >= 2
                ) || linhas[0];

            if (nomeAdvogado) {
                // Capitalizar corretamente o nome do advogado
                nomeAdvogado = nomeAdvogado
                    .toLowerCase()
                    .split(" ")
                    .map(
                        (palavra) =>
                            palavra.charAt(0).toUpperCase() + palavra.slice(1)
                    )
                    .join(" ");
                return {
                    tipo: "advogado",
                    nome: `Advogado(a): ${nomeAdvogado}`,
                    vara: null,
                };
            }
        }

        // Fallback final
        return textoLimpo;
    }

    // Inicializar observer para prevenir sobreposições
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
            setupInterfaceObserver();
        });
    } else {
        setupInterfaceObserver();
    }

    // Função auxiliar para validar data brasileira
    // 🔍 IDENTIFICAR PROCESSO - Extrair número do processo atual
    function obterNumeroProcesso() {
        console.log("🔍 PROCESSO: Tentando identificar número do processo");

        // Buscar em diferentes lugares da página
        const selectors = [
            'span:contains("Processo nº")',
            'div:contains("Processo nº")',
            'span:contains("Processo:")',
            'div:contains("Processo:")',
            '[id*="processo"]',
            '[class*="processo"]',
            'span[title*="processo"]',
            'div[title*="processo"]',
        ];

        // Buscar no texto completo da página
        const textoCompleto = document.body.innerText;

        // Padrões para encontrar número do processo
        const padroes = [
            /processo\s*n[º°]?\s*:?\s*(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})/i,
            /processo\s*:?\s*(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})/i,
            /n[º°]\s*(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})/i,
            /(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})/i,
            /processo\s*[\s\S]*?(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})/i,
        ];

        for (const padrao of padroes) {
            const match = textoCompleto.match(padrao);
            if (match) {
                const numeroProcesso = match[1];
                console.log(`✅ PROCESSO: Encontrado: ${numeroProcesso}`);
                return numeroProcesso;
            }
        }

        // Tentar buscar na URL
        const url = window.location.href;
        const urlMatch = url.match(/(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})/);
        if (urlMatch) {
            const numeroProcesso = urlMatch[1];
            console.log(`✅ PROCESSO: Encontrado na URL: ${numeroProcesso}`);
            return numeroProcesso;
        }

        // Tentar buscar no título da página
        const titulo = document.title;
        const tituloMatch = titulo.match(
            /(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})/
        );
        if (tituloMatch) {
            const numeroProcesso = tituloMatch[1];
            console.log(`✅ PROCESSO: Encontrado no título: ${numeroProcesso}`);
            return numeroProcesso;
        }

        console.log(
            "⚠️ PROCESSO: Não foi possível identificar o número do processo"
        );
        return null;
    }

    // 🔐 VERIFICAR SE PROCESSO JÁ FOI PROCESSADO
    function processoJaFoiProcessado(numeroProcesso) {
        if (!numeroProcesso) return false;

        const jaProcessado = processosJaProcessados.has(numeroProcesso);
        console.log(
            `🔐 VERIFICAÇÃO: Processo ${numeroProcesso} já processado? ${jaProcessado}`
        );
        return jaProcessado;
    }

    // 🔐 MARCAR PROCESSO COMO PROCESSADO
    function marcarProcessoComoProcessado(numeroProcesso) {
        if (!numeroProcesso) return;

        processosJaProcessados.add(numeroProcesso);
        console.log(
            `🔐 MARCADO: Processo ${numeroProcesso} marcado como processado`
        );
        console.log(
            `🔐 TOTAL: ${processosJaProcessados.size} processos processados nesta sessão`
        );
    }

    function validarDataBrasileira(dataString) {
        console.log(`📅 VALIDAÇÃO: Validando data "${dataString}"`);

        // Limpar e normalizar a string da data
        const dataLimpa = dataString.trim().replace(/[^\d\/\-\.]/g, "");
        console.log(`📅 VALIDAÇÃO: Data limpa: "${dataLimpa}"`);

        // Tentar diferentes separadores
        const separadores = ["/", "-", "."];
        let partesData = null;
        let separadorUsado = "";

        for (const sep of separadores) {
            if (dataLimpa.includes(sep)) {
                partesData = dataLimpa.split(sep);
                separadorUsado = sep;
                break;
            }
        }

        if (!partesData || partesData.length !== 3) {
            console.log(
                `❌ VALIDAÇÃO: Formato inválido - esperado 3 partes separadas por ${separadores.join(
                    ", "
                )}`
            );
            return null;
        }

        // Assumir formato brasileiro: DD/MM/AAAA
        const dia = parseInt(partesData[0], 10);
        const mes = parseInt(partesData[1], 10);
        const ano = parseInt(partesData[2], 10);

        console.log(
            `📅 VALIDAÇÃO: Partes extraídas - Dia: ${dia}, Mês: ${mes}, Ano: ${ano}`
        );

        // Validações básicas
        if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
            console.log("❌ VALIDAÇÃO: Partes não são números válidos");
            return null;
        }

        if (dia < 1 || dia > 31) {
            console.log(
                `❌ VALIDAÇÃO: Dia inválido: ${dia} (deve estar entre 1 e 31)`
            );
            return null;
        }

        if (mes < 1 || mes > 12) {
            console.log(
                `❌ VALIDAÇÃO: Mês inválido: ${mes} (deve estar entre 1 e 12)`
            );
            return null;
        }

        if (ano < 2020 || ano > 2030) {
            console.log(
                `❌ VALIDAÇÃO: Ano inválido: ${ano} (deve estar entre 2020 e 2030)`
            );
            return null;
        }

        // Criar objeto Date para validação mais rigorosa
        const dataObj = new Date(ano, mes - 1, dia); // mes-1 porque Date usa 0-based months

        if (
            dataObj.getFullYear() !== ano ||
            dataObj.getMonth() !== mes - 1 ||
            dataObj.getDate() !== dia
        ) {
            console.log(
                `❌ VALIDAÇÃO: Data inexistente no calendário: ${dia}/${mes}/${ano}`
            );
            return null;
        }

        console.log(
            `✅ VALIDAÇÃO: Data válida confirmada: ${dia}/${mes}/${ano}`
        );

        // Criar objeto de retorno com informações estruturadas
        const dataValidada = {
            dataOriginal: dataString,
            dataFormatada: `${dia.toString().padStart(2, "0")}/${mes
                .toString()
                .padStart(2, "0")}/${ano}`,
            dia: dia,
            mes: mes,
            ano: ano,
            timestamp: dataObj.getTime(),
            dataObj: dataObj,
        };

        console.log(`✅ VALIDAÇÃO: Objeto de data criado:`, dataValidada);
        return dataValidada;
    }

    // Função principal para detectar data da sessão
    function detectarDataSessao() {
        console.log("🔍 INICIANDO: Detecção da data da sessão");

        // 🔐 VERIFICAÇÃO DE PROCESSO
        processoAtual = obterNumeroProcesso();
        if (!processoAtual) {
            console.log(
                "❌ BLOQUEIO: Não foi possível identificar o número do processo"
            );
            return null;
        }

        // 🔓 PERMITIR MÚLTIPLAS DETECÇÕES - Verificar se já há data detectada
        if (hasDataSessaoPautado()) {
            console.log(
                `ℹ️ DETECÇÃO: Data da sessão já detectada para o processo ${processoAtual}: ${
                    getDataSessaoPautado().dataFormatada
                }`
            );
            console.log(
                `🔍 DEBUG: Processo com data armazenada: ${processoComDataSessao}`
            );
            return getDataSessaoPautado();
        }

        console.log(
            `🔍 DETECÇÃO: Analisando processo ${processoAtual} pela primeira vez...`
        );
        console.log(
            `🔍 DEBUG: Processo anterior com data: ${processoComDataSessao}`
        );

        // Verificar se há data armazenada de outro processo
        if (dataSessaoPautado && processoComDataSessao !== processoAtual) {
            console.log(
                `⚠️ CACHE: Limpando data de processo anterior (${processoComDataSessao}): ${dataSessaoPautado.dataFormatada}`
            );
            resetDataSessaoPautado();
        }

        // Buscar em todo o texto da página
        const textoCompleto = document.body.innerText;

        // Primeiro padrão: buscar por texto que contém data da sessão
        const padrao1 =
            /(?:data\s*da\s*sess[aã]o|sess[aã]o\s*(?:de|em|para|:)?)\s*:?\s*(\d{1,2}\/\d{1,2}\/\d{4})/i;

        const match1 = textoCompleto.match(padrao1);
        if (match1) {
            const dataEncontrada = match1[1];
            console.log(`✅ PADRÃO 1: Data encontrada: ${dataEncontrada}`);

            const dataValidada = validarDataBrasileira(dataEncontrada);
            if (dataValidada) {
                dataSessaoPautado = dataValidada;
                processoComDataSessao = processoAtual;
                console.log(
                    `✅ SUCESSO: Data da sessão detectada e armazenada para processo ${processoAtual}: ${dataValidada.dataFormatada}`
                );

                // � MARCAR PROCESSO COMO PROCESSADO ANTES DO CRUZAMENTO
                marcarProcessoComoProcessado(processoAtual);

                // �🚀 INTEGRAÇÃO AUTOMÁTICA CONTROLADA: Apenas uma tentativa
                setTimeout(async () => {
                    try {
                        console.log(
                            "� CRUZAMENTO: Tentativa automática única e controlada"
                        );
                        const resultado = await cruzarDadosDataSessao();
                        if (resultado) {
                            console.log("✅ CRUZAMENTO: Sucesso!");
                            atualizarDataSessaoNaInterface();
                        } else {
                            console.log("ℹ️ CRUZAMENTO: Dados não encontrados");
                            console.log(
                                "💡 Use window.SENT1_AUTO.debugPaginaSessoes() para debug manual"
                            );
                        }
                    } catch (error) {
                        console.warn(
                            "⚠️ CRUZAMENTO: Erro controlado:",
                            error.message
                        );
                    }
                }, 3000); // Delay maior

                return dataValidada;
            }
        }

        // Segundo padrão: julgamento em [data]
        const padrao2 =
            /(?:julgamento\s*(?:em|para|:)|para\s*julgamento)\s*:?\s*(\d{1,2}\/\d{1,2}\/\d{4})/i;

        const match2 = textoCompleto.match(padrao2);
        if (match2) {
            const dataEncontrada = match2[1];
            console.log(`✅ PADRÃO 2: Data encontrada: ${dataEncontrada}`);

            const dataValidada = validarDataBrasileira(dataEncontrada);
            if (dataValidada) {
                dataSessaoPautado = dataValidada;
                console.log(
                    `✅ SUCESSO: Data da sessão detectada e armazenada: ${dataValidada.dataFormatada}`
                );

                // 🔐 MARCAR PROCESSO COMO PROCESSADO
                marcarProcessoComoProcessado(processoAtual);

                // Interface inserida automaticamente
                setTimeout(() => {
                    inserirDataSessaoNaInterface();
                }, 500);

                // ⚠️ CRUZAMENTO AUTOMÁTICO DESABILITADO - Prevenindo spam de requisições

                return dataValidada;
            }
        }

        // Terceiro padrão: data isolada próxima de palavras-chave
        const padrao3 =
            /(?:pautado|agendar|agendado|marcado).*?(\d{1,2}\/\d{1,2}\/\d{4})/i;

        const match3 = textoCompleto.match(padrao3);
        if (match3) {
            const dataEncontrada = match3[1];
            console.log(`✅ PADRÃO 3: Data encontrada: ${dataEncontrada}`);

            const dataValidada = validarDataBrasileira(dataEncontrada);
            if (dataValidada) {
                dataSessaoPautado = dataValidada;
                processoComDataSessao = processoAtual;
                console.log(
                    `✅ SUCESSO: Data da sessão detectada e armazenada para processo ${processoAtual}: ${dataValidada.dataFormatada}`
                );

                // 🔐 MARCAR PROCESSO COMO PROCESSADO
                marcarProcessoComoProcessado(processoAtual);

                // Interface inserida automaticamente
                setTimeout(() => {
                    inserirDataSessaoNaInterface();
                }, 500);

                // ⚠️ CRUZAMENTO AUTOMÁTICO DESABILITADO - Prevenindo múltiplas requisições

                return dataValidada;
            }
        }

        console.log("❌ Nenhuma data válida encontrada em todos os padrões");
        return null;
    }

    // Funções utilitárias para gerenciar data da sessão
    function getDataSessaoPautado() {
        return dataSessaoPautado;
    }

    function hasDataSessaoPautado() {
        return (
            dataSessaoPautado !== null &&
            processoComDataSessao === processoAtual
        );
    }

    function resetDataSessaoPautado() {
        console.log("🔄 RESET: Limpando data da sessão armazenada");
        dataSessaoPautado = null;
        processoComDataSessao = null;
    }

    // 🛡️ FUNÇÃO PARA RESETAR CONTROLES DE REQUISIÇÃO
    function resetControlesRequisicao() {
        console.log("🔄 RESET: Limpando controles de requisição");
        tentativasCruzamento = 0;
        ultimaTentativaCruzamento = 0;
        cruzamentoEmAndamento = false;
        cacheResultadoSessoes = null;
        cacheValidoAte = 0;
        console.log(
            "✅ RESET: Controles resetados - sistema pronto para nova tentativa"
        );
    }

    // 🔍 FUNÇÃO PARA VERIFICAR STATUS DOS CONTROLES
    function statusControlesRequisicao() {
        const agora = Date.now();
        const info = {
            tentativasRealizadas: tentativasCruzamento,
            tentativasRestantes:
                MAX_TENTATIVAS_CRUZAMENTO - tentativasCruzamento,
            emAndamento: cruzamentoEmAndamento,
            proximaTentativaEm: Math.max(
                0,
                (DELAY_ENTRE_TENTATIVAS - (agora - ultimaTentativaCruzamento)) /
                    1000
            ),
            temCache: !!cacheResultadoSessoes,
            cacheValidoPor: Math.max(0, (cacheValidoAte - agora) / 1000),
        };

        console.log("📊 STATUS DOS CONTROLES:", info);
        return info;
    }

    function showDataSessaoPautadoInfo() {
        if (hasDataSessaoPautado()) {
            const info = `📅 DATA DA SESSÃO DETECTADA:
            
Data Original: ${dataSessaoPautado.dataOriginal}
Data Formatada: ${dataSessaoPautado.dataFormatada}
Dia: ${dataSessaoPautado.dia}
Mês: ${dataSessaoPautado.mes}  
Ano: ${dataSessaoPautado.ano}
Timestamp: ${dataSessaoPautado.timestamp}`;

            console.log(info);
            alert(info);
            return dataSessaoPautado;
        } else {
            const msg = "❌ Nenhuma data da sessão foi detectada ainda.";
            console.log(msg);
            alert(msg);
            return null;
        }
    }

    // Função para inserir data da sessão na interface do eProc
    function inserirDataSessaoNaInterface() {
        console.log("🎯 INSERIR: Tentando inserir data da sessão na interface");

        // Verificar se há data detectada
        if (!hasDataSessaoPautado()) {
            console.log("❌ INSERIR: Nenhuma data detectada para inserir");
            return false;
        }

        // Buscar o elemento container alvo
        const targetContainer = document.querySelector(
            "#frmProcessoLista #divInfraAreaDados #divInfraAreaProcesso #fldCapa #divCapaProcesso .row.mt-2"
        );

        if (!targetContainer) {
            console.log("❌ INSERIR: Container alvo não encontrado");
            return false;
        }

        // Verificar se já existe o elemento da data da sessão
        if (document.getElementById("eprobe-data-sessao")) {
            console.log("ℹ️ INSERIR: Data da sessão já inserida na interface");
            return true;
        }

        // Criar elemento para exibir a data da sessão
        const dataSessaoElement = document.createElement("div");
        dataSessaoElement.id = "eprobe-data-sessao";
        dataSessaoElement.className = "col-auto mr-2";
        dataSessaoElement.style.cssText = `
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
            border: 1px solid #d1d5db;
            padding: 8px 12px;
            border-radius: 4px;
            background-color: #f8fafc;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            transition: all 0.2s ease;
            cursor: pointer;
            white-space: nowrap;
            max-width: fit-content;
        `;

        // Adicionar efeitos hover
        dataSessaoElement.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "#e1f5fe";
            this.style.borderColor = "#3b82f6";
            this.style.boxShadow = "0 4px 8px 0 rgba(59, 130, 246, 0.1)";
        });

        dataSessaoElement.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "#f8fafc";
            this.style.borderColor = "#d1d5db";
            this.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
        });

        // 🎨 INTERFACE DINÂMICA: Verificar se há dados completos da sessão
        const dadosCompletos = getDadosCompletosSessionJulgamento();

        if (dadosCompletos) {
            // Interface RICA com dados completos
            console.log("🎨 INTERFACE: Usando dados completos da sessão");
            dataSessaoElement.innerHTML = `
                <svg style="width: 16px; height: 16px; color: #3b82f6; flex-shrink: 0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 1.5h9A.75.75 0 0 1 17.25 2.25v.5h3A.75.75 0 0 1 21 3.5v15a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 .75-.75h3v-.5zm1.5.75v.5h7.5v-.5h-7.5zM4.5 5.25h15v11.5h-15v-11.5z" clip-rule="evenodd"/>
                    <path d="M8.25 8.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75zM8.25 11.25a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75zM8.25 14a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75z"/>
                </svg>
                <div style="display: flex; flex-direction: column; gap: 1px;">
                    <span style="font-weight: 600; font-size: 10px; color: #6b7280; line-height: 1;">${
                        dadosCompletos.orgaoJulgador
                    }</span>
                    <span style="font-weight: 700; font-size: 12px; color: #1f2937; line-height: 1;">${
                        dadosCompletos.dataHoraCompleta
                    } | ${dadosCompletos.tipoSessao}</span>
                    <span style="font-weight: 500; font-size: 9px; color: ${
                        dadosCompletos.statusSessao
                            .toLowerCase()
                            .includes("encerrada")
                            ? "#dc2626"
                            : "#16a34a"
                    }; line-height: 1;">${dadosCompletos.statusSessao}</span>
                </div>
            `;

            // Tooltip com informações completas
            dataSessaoElement.title = `Dados Completos da Sessão

🏛️ Órgão: ${dadosCompletos.orgaoJulgador}
📅 Data/Hora: ${dadosCompletos.dataHoraCompleta}
🖥️ Tipo: ${dadosCompletos.tipoSessao}
📍 Local: ${dadosCompletos.localSessao}
📋 Status: ${dadosCompletos.statusSessao}

📅 Limites:
• Pauta: ${dadosCompletos.dataLimitePauta}
• Mesa: ${dadosCompletos.dataLimiteMesa}
• Minutas: ${dadosCompletos.dataLimiteMinutas}

🆔 ID: ${dadosCompletos.id}
Dados obtidos automaticamente pelo eProbe`;
        } else {
            // Interface BÁSICA apenas com data detectada
            console.log("🎨 INTERFACE: Usando dados básicos (apenas data)");
            dataSessaoElement.innerHTML = `
                <svg style="width: 16px; height: 16px; color: #3b82f6; flex-shrink: 0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 1.5h9A.75.75 0 0 1 17.25 2.25v.5h3A.75.75 0 0 1 21 3.5v15a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 .75-.75h3v-.5zm1.5.75v.5h7.5v-.5h-7.5zM4.5 5.25h15v11.5h-15v-11.5z" clip-rule="evenodd"/>
                    <path d="M8.25 8.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75zM8.25 11.25a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75zM8.25 14a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75z"/>
                </svg>
                <div style="display: flex; flex-direction: column; gap: 1px;">
                    <span style="font-weight: 600; font-size: 11px; color: #6b7280; line-height: 1;">Processo Pautado</span>
                    <span style="font-weight: 700; font-size: 13px; color: #1f2937; line-height: 1;">${dataSessaoPautado.dataFormatada}</span>
                </div>
            `;

            // Tooltip básico
            dataSessaoElement.title = `Data da Sessão Detectada

Data Original: ${dataSessaoPautado.dataOriginal}
Formatada: ${dataSessaoPautado.dataFormatada}
Detectada automaticamente pelo eProbe

🖱️ Clique para buscar dados completos da sessão`;
        }

        // 🔗 ADICIONAR LISTENER DE CLIQUE - Cruzamento de dados acionado pelo usuário
        dataSessaoElement.addEventListener("click", async function (event) {
            event.preventDefault();
            event.stopPropagation();

            console.log(
                "🖱️ CLIQUE: Usuário clicou na data da sessão - iniciando cruzamento de dados"
            );

            // Verificar se já há dados completos
            if (getDadosCompletosSessionJulgamento()) {
                console.log(
                    "ℹ️ CLIQUE: Dados completos já disponíveis - mostrando informações"
                );
                showDadosCompletosSessionJulgamento();
                return;
            }

            // Mostrar feedback visual de carregamento
            const elementoOriginal = this.innerHTML;
            this.innerHTML = `
                <svg style="width: 16px; height: 16px; color: #3b82f6; flex-shrink: 0; animation: spin 1s linear infinite;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
                <div style="display: flex; flex-direction: column; gap: 1px;">
                    <span style="font-weight: 600; font-size: 11px; color: #6b7280; line-height: 1;">Buscando dados...</span>
                    <span style="font-weight: 700; font-size: 13px; color: #1f2937; line-height: 1;">Aguarde...</span>
                </div>
            `;

            // Adicionar animação de rotação
            const style = document.createElement("style");
            style.textContent = `
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `;
            if (!document.head.querySelector("style[data-eprobe-spin]")) {
                style.setAttribute("data-eprobe-spin", "true");
                document.head.appendChild(style);
            }

            try {
                // Forçar cruzamento de dados independente do toggle
                console.log(
                    "🔄 CLIQUE: Forçando cruzamento de dados da sessão"
                );
                const resultado = await cruzarDadosDataSessao(null, true);

                if (resultado) {
                    console.log(
                        "✅ CLIQUE: Cruzamento realizado com sucesso - atualizando interface"
                    );
                    // A interface será atualizada automaticamente pelo cruzamento
                    setTimeout(() => {
                        atualizarDataSessaoNaInterface();
                    }, 500);
                } else {
                    console.log(
                        "⚠️ CLIQUE: Cruzamento não retornou dados - restaurando interface"
                    );
                    // Restaurar conteúdo original
                    this.innerHTML = elementoOriginal;

                    // Mostrar notificação
                    alert(
                        "Não foi possível obter dados completos da sessão.\n\nPossíveis causas:\n• Sessão não encontrada na lista\n• Problemas de conectividade\n• Limite de tentativas atingido"
                    );
                }
            } catch (error) {
                console.error("❌ CLIQUE: Erro durante cruzamento:", error);
                // Restaurar conteúdo original
                this.innerHTML = elementoOriginal;

                // Mostrar erro
                alert(`Erro ao buscar dados da sessão:\n${error.message}`);
            }
        });

        // Inserir o elemento no container
        targetContainer.appendChild(dataSessaoElement);

        console.log(
            `✅ INSERIR: Data da sessão inserida na interface: ${dataSessaoPautado.dataFormatada}`
        );
        return true;
    }

    // Função para remover data da sessão da interface
    function removerDataSessaoDaInterface() {
        console.log("🗑️ REMOVER: Tentando remover data da sessão da interface");

        const elemento = document.getElementById("eprobe-data-sessao");
        if (elemento) {
            elemento.remove();
            console.log("✅ REMOVER: Data da sessão removida da interface");
            return true;
        } else {
            console.log(
                "ℹ️ REMOVER: Elemento da data da sessão não encontrado"
            );
            return false;
        }
    }

    // Função para atualizar data da sessão na interface
    function atualizarDataSessaoNaInterface() {
        console.log("🔄 ATUALIZAR: Atualizando data da sessão na interface");

        // Remover elemento existente
        removerDataSessaoDaInterface();

        // Inserir elemento atualizado
        return inserirDataSessaoNaInterface();
    }

    // 🚨 FUNÇÃO PARA FORÇAR INSERÇÃO DO CARD MESMO PARA PROCESSOS PROCESSADOS
    function forcarInsercaoCardSemValidacao() {
        console.log("🚨 FORÇA: Forçando inserção do card sem validações");

        // 1. Verificar se há data detectada
        if (!hasDataSessaoPautado()) {
            console.log("❌ FORÇA: Nenhuma data detectada - tentando detectar");

            // Forçar detecção mesmo para processo já processado
            const processoAnterior = processoAtual;
            const jaProcessadoAnterior = processoAnterior
                ? processosJaProcessados.has(processoAnterior)
                : false;

            if (jaProcessadoAnterior) {
                console.log(
                    "🔄 FORÇA: Removendo processo da lista de processados temporariamente"
                );
                processosJaProcessados.delete(processoAnterior);
            }

            // Detectar data
            const dataDetectada = detectarDataSessao();

            if (!dataDetectada) {
                console.log("❌ FORÇA: Falha na detecção da data");
                if (jaProcessadoAnterior) {
                    processosJaProcessados.add(processoAnterior);
                }
                return false;
            }
        }

        // 2. Remover card existente
        const cardExistente = document.getElementById("eprobe-data-sessao");
        if (cardExistente) {
            cardExistente.remove();
            console.log("🗑️ FORÇA: Card existente removido");
        }

        // 3. Forçar inserção
        console.log("🎯 FORÇA: Tentando inserir card...");
        const sucesso = inserirDataSessaoNaInterface();

        if (sucesso) {
            console.log("✅ FORÇA: Card inserido com sucesso!");
            return true;
        } else {
            console.log("❌ FORÇA: Falha na inserção do card");
            return false;
        }
    }

    // ========================================
    // FUNÇÕES DE CRUZAMENTO DE DADOS DE SESSÃO
    // ========================================

    /**
     * Busca dados das sessões de julgamento no eProc
     * @param {string} hash - Hash da página de sessões (opcional)
     * @returns {Promise<Array>} - Array com dados das sessões
     */
    async function buscarDadosSessoes(hash = null) {
        console.log("🔍 SESSÕES: Iniciando busca de dados das sessões");

        // 🛡️ VERIFICAR CACHE PRIMEIRO
        const agora = Date.now();
        if (cacheResultadoSessoes && agora < cacheValidoAte) {
            console.log(
                "📦 SESSÕES: Usando dados do cache (evitando nova requisição)"
            );
            return cacheResultadoSessoes;
        }

        // 🛡️ VERIFICAR SE JÁ ESTÁ EM ANDAMENTO
        if (cruzamentoEmAndamento) {
            console.log("⏳ SESSÕES: Busca já em andamento, aguardando...");
            return [];
        }

        // 🛡️ VERIFICAR LIMITE DE TENTATIVAS
        if (tentativasCruzamento >= MAX_TENTATIVAS_CRUZAMENTO) {
            console.log(
                `🚫 SESSÕES: Limite de ${MAX_TENTATIVAS_CRUZAMENTO} tentativas atingido`
            );
            console.log(
                "💡 SESSÕES: Use window.SENT1_AUTO.debugPaginaSessoes() para debug manual"
            );
            return [];
        }

        // 🛡️ VERIFICAR DELAY ENTRE TENTATIVAS
        if (agora - ultimaTentativaCruzamento < DELAY_ENTRE_TENTATIVAS) {
            const tempoRestante = Math.ceil(
                (DELAY_ENTRE_TENTATIVAS - (agora - ultimaTentativaCruzamento)) /
                    1000
            );
            console.log(
                `⏰ SESSÕES: Aguardando ${tempoRestante}s antes da próxima tentativa`
            );
            return [];
        }

        try {
            // Marcar início da busca
            cruzamentoEmAndamento = true;
            tentativasCruzamento++;
            ultimaTentativaCruzamento = agora;

            console.log(
                `🔄 SESSÕES: Tentativa ${tentativasCruzamento}/${MAX_TENTATIVAS_CRUZAMENTO}`
            );

            // Construir URL da página de sessões
            const baseUrl = window.location.origin;
            const urlSessoes = hash
                ? `${baseUrl}/eproc/controlador.php?acao=sessao_julgamento_listar&hash=${hash}`
                : `${baseUrl}/eproc/controlador.php?acao=sessao_julgamento_listar`;

            console.log(`🌐 SESSÕES: Buscando URL: ${urlSessoes}`);

            // Fazer fetch da página
            const response = await fetch(urlSessoes, {
                credentials: "same-origin",
                headers: {
                    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                },
            });

            if (!response.ok) {
                throw new Error(
                    `HTTP ${response.status}: ${response.statusText}`
                );
            }

            const htmlContent = await response.text();
            console.log("✅ SESSÕES: Página carregada com sucesso");

            // Fazer parse dos dados
            const dadosSessoes = await parsearDadosSessoes(htmlContent);
            console.log(
                `📊 SESSÕES: ${dadosSessoes.length} sessões encontradas`
            );

            // 📦 ARMAZENAR NO CACHE
            if (dadosSessoes.length > 0) {
                cacheResultadoSessoes = dadosSessoes;
                cacheValidoAte = agora + CACHE_DURATION;
                console.log(
                    "📦 SESSÕES: Resultado armazenado no cache por 5 minutos"
                );
            }

            return dadosSessoes;
        } catch (error) {
            console.error(`❌ SESSÕES: Erro ao buscar dados: ${error.message}`);
            return [];
        } finally {
            // Sempre limpar flag de andamento
            cruzamentoEmAndamento = false;
        }
    }

    /**
     * Faz parse dos dados das sessões do HTML
     * @param {string} htmlContent - Conteúdo HTML da página
     * @returns {Array} - Array com dados estruturados das sessões
     */
    async function parsearDadosSessoes(htmlContent) {
        console.log("🔍 PARSE: Iniciando parse dos dados das sessões");

        try {
            // Criar parser DOM
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlContent, "text/html");

            // 🔍 DEBUG: Verificar estrutura da página
            console.log("📋 PARSE DEBUG: Analisando estrutura da página...");

            // Verificar se a página foi carregada corretamente
            const title =
                doc.querySelector("title")?.textContent || "sem título";
            console.log(`📋 PARSE DEBUG: Título da página: "${title}"`);

            // Verificar se há redirecionamento para login
            if (
                title.toLowerCase().includes("login") ||
                title.toLowerCase().includes("acesso")
            ) {
                console.log(
                    "❌ PARSE DEBUG: Página de login detectada - sessão expirada"
                );
                return [];
            }

            // Buscar diferentes seletores possíveis para a tabela
            const seletoresTabela = [
                "#divInfraAreaTelaD .table-responsive table.table",
                "#divInfraAreaTelaD table.table",
                ".table-responsive table.table",
                "table.table",
                "#divInfraAreaTelaD table",
                ".table-responsive table",
                "table",
                "#frmLista table",
                "#divInfraAreaTelaE table",
            ];

            let tabela = null;
            let seletorUsado = "";

            for (const seletor of seletoresTabela) {
                tabela = doc.querySelector(seletor);
                if (tabela) {
                    seletorUsado = seletor;
                    console.log(
                        `✅ PARSE DEBUG: Tabela encontrada com seletor: "${seletor}"`
                    );
                    break;
                }
            }

            if (!tabela) {
                // Debug mais detalhado se não encontrar tabela
                console.log(
                    "🔍 PARSE DEBUG: Nenhuma tabela encontrada, analisando estrutura..."
                );

                // Verificar elementos principais
                const divInfraAreaTelaD =
                    doc.querySelector("#divInfraAreaTelaD");
                const tableResponsive = doc.querySelector(".table-responsive");
                const allTables = doc.querySelectorAll("table");
                const allDivs = doc.querySelectorAll("div[id*='Area']");

                console.log(
                    `📋 PARSE DEBUG: #divInfraAreaTelaD encontrado: ${!!divInfraAreaTelaD}`
                );
                console.log(
                    `📋 PARSE DEBUG: .table-responsive encontrado: ${!!tableResponsive}`
                );
                console.log(
                    `📋 PARSE DEBUG: Total de tabelas: ${allTables.length}`
                );
                console.log(
                    `📋 PARSE DEBUG: Divs com 'Area' no ID: ${allDivs.length}`
                );

                // Listar todas as tabelas encontradas
                allTables.forEach((table, index) => {
                    const tableId = table.id || "sem-id";
                    const tableClass = table.className || "sem-class";
                    const rowCount = table.querySelectorAll("tr").length;
                    console.log(
                        `📋 PARSE DEBUG: Tabela ${
                            index + 1
                        }: id="${tableId}", class="${tableClass}", linhas=${rowCount}`
                    );
                });

                // Listar divs com Area no ID
                allDivs.forEach((div, index) => {
                    console.log(
                        `📋 PARSE DEBUG: Div ${index + 1}: id="${
                            div.id
                        }", class="${div.className}"`
                    );
                });

                // Verificar se há erro específico na página
                const errorElements = doc.querySelectorAll(
                    ".alert-danger, .error, .erro, [class*='erro'], [class*='error']"
                );
                if (errorElements.length > 0) {
                    console.log(
                        "❌ PARSE DEBUG: Elementos de erro encontrados:"
                    );
                    errorElements.forEach((error, index) => {
                        console.log(
                            `📋 PARSE DEBUG: Erro ${
                                index + 1
                            }: "${error.textContent.trim()}"`
                        );
                    });
                }

                console.log(
                    "❌ PARSE: Tabela de sessões não encontrada em nenhum seletor"
                );
                return [];
            }

            // Buscar todas as linhas de dados (tbody > tr)
            const linhasSessoes = tabela.querySelectorAll(
                'tbody tr[id^="tr_"]'
            );
            console.log(`📋 PARSE: ${linhasSessoes.length} linhas encontradas`);

            const sessoes = [];

            for (const linha of linhasSessoes) {
                try {
                    const sessao = await extrairDadosLinhaSessao(linha);
                    if (sessao) {
                        sessoes.push(sessao);
                    }
                } catch (error) {
                    console.warn(
                        `⚠️ PARSE: Erro ao processar linha: ${error.message}`
                    );
                }
            }

            console.log(
                `✅ PARSE: ${sessoes.length} sessões processadas com sucesso`
            );
            return sessoes;
        } catch (error) {
            console.error(`❌ PARSE: Erro no parse: ${error.message}`);
            return [];
        }
    }

    /**
     * Extrai dados de uma linha específica da tabela de sessões
     * @param {Element} linha - Elemento tr da linha
     * @returns {Object|null} - Objeto com dados da sessão ou null
     */
    async function extrairDadosLinhaSessao(linha) {
        try {
            const id = linha.getAttribute("id");
            const colunas = linha.querySelectorAll("td");

            if (colunas.length < 8) {
                console.warn(
                    `⚠️ LINHA: Linha ${id} tem ${colunas.length} colunas, esperado >= 8`
                );
                return null;
            }

            // Extrair dados conforme a estrutura HTML fornecida
            const orgaoJulgador = colunas[1]?.textContent?.trim() || "";
            const dataHoraSessao = colunas[2]?.textContent?.trim() || "";
            const tipoSessao = colunas[3]?.textContent?.trim() || "";
            const localSessao = colunas[4]?.textContent?.trim() || "";
            const dataLimitePauta = colunas[5]?.textContent?.trim() || "";
            const dataLimiteMesa = colunas[6]?.textContent?.trim() || "";
            const dataLimiteMinutas = colunas[7]?.textContent?.trim() || "";
            const statusSessao = colunas[8]?.textContent?.trim() || "";

            // Extrair só a data da string "03/06/2025 14:00"
            const dataMatch = dataHoraSessao.match(/(\d{1,2}\/\d{1,2}\/\d{4})/);
            const dataSessao = dataMatch ? dataMatch[1] : "";

            // Extrair só o horário
            const horaMatch = dataHoraSessao.match(/(\d{1,2}:\d{2})/);
            const horaSessao = horaMatch ? horaMatch[1] : "";

            const sessao = {
                id: id,
                orgaoJulgador: orgaoJulgador,
                dataSessao: dataSessao,
                horaSessao: horaSessao,
                dataHoraCompleta: dataHoraSessao,
                tipoSessao: tipoSessao,
                localSessao: localSessao,
                dataLimitePauta: dataLimitePauta,
                dataLimiteMesa: dataLimiteMesa,
                dataLimiteMinutas: dataLimiteMinutas,
                statusSessao: statusSessao,
                // Dados adicionais
                dataDetectada: new Date(),
                validData: !!dataSessao,
            };

            console.log(
                `📋 LINHA: Sessão extraída - ${orgaoJulgador} em ${dataSessao}`
            );
            return sessao;
        } catch (error) {
            console.error(`❌ LINHA: Erro ao extrair dados: ${error.message}`);
            return null;
        }
    }

    /**
     * Busca sessão específica por data
     * @param {string} dataProcurada - Data no formato DD/MM/AAAA
     * @param {string} hash - Hash da página (opcional)
     * @returns {Promise<Object|null>} - Dados da sessão encontrada ou null
     */
    async function buscarSessaoPorData(dataProcurada, hash = null) {
        console.log(`🎯 BUSCA: Procurando sessão para data: ${dataProcurada}`);

        try {
            // Buscar todas as sessões
            const sessoes = await buscarDadosSessoes(hash);

            if (sessoes.length === 0) {
                console.log("❌ BUSCA: Nenhuma sessão encontrada na listagem");
                return null;
            }

            // Procurar sessão com a data específica
            const sessaoEncontrada = sessoes.find(
                (sessao) => sessao.dataSessao === dataProcurada
            );

            if (sessaoEncontrada) {
                console.log(`✅ BUSCA: Sessão encontrada!`);
                console.log(
                    `📋 BUSCA: ${sessaoEncontrada.orgaoJulgador} - ${sessaoEncontrada.dataHoraCompleta}`
                );

                // Armazenar na variável global
                dadosCompletosSessionJulgamento = sessaoEncontrada;

                return sessaoEncontrada;
            } else {
                console.log(
                    `❌ BUSCA: Nenhuma sessão encontrada para a data ${dataProcurada}`
                );

                // Log das datas disponíveis para debug
                const datasDisponiveis = sessoes
                    .map((s) => s.dataSessao)
                    .filter((d) => d);
                console.log(
                    `📅 BUSCA: Datas disponíveis: ${datasDisponiveis.join(
                        ", "
                    )}`
                );

                return null;
            }
        } catch (error) {
            console.error(`❌ BUSCA: Erro na busca: ${error.message}`);
            return null;
        }
    }

    /**
     * Realiza cruzamento automático da data detectada com os dados das sessões
     * @param {string} hash - Hash da página (opcional)
     * @returns {Promise<boolean>} - true se encontrou e cruzou dados
     */
    async function cruzarDadosDataSessao(
        hash = null,
        forcarRequisicao = false
    ) {
        console.log("🔄 CRUZAMENTO: Iniciando cruzamento de dados da sessão");

        // � VERIFICAR SE REQUISIÇÕES AUTOMÁTICAS ESTÃO DESABILITADAS
        if (REQUISICOES_AUTOMATICAS_DESABILITADAS) {
            console.log(
                "🚫 CRUZAMENTO: Requisições automáticas desabilitadas globalmente"
            );
            console.log(
                "💡 Para habilitar: window.SENT1_AUTO.habilitarRequisicoes()"
            );
            return false;
        }

        // �🔐 VERIFICAÇÃO DUPLA: Processo atual deve estar marcado como processado
        if (!processoAtual) {
            console.log("❌ CRUZAMENTO: Processo atual não identificado");
            return false;
        }

        if (!processoJaFoiProcessado(processoAtual)) {
            console.log(
                `❌ CRUZAMENTO: Processo ${processoAtual} não foi marcado como processado`
            );
            return false;
        }

        if (!hasDataSessaoPautado()) {
            console.log(
                "❌ CRUZAMENTO: Nenhuma data de sessão detectada para cruzar"
            );
            return false;
        }

        const dataFormatada = dataSessaoPautado.dataFormatada;
        console.log(
            `🎯 CRUZAMENTO: Buscando dados para: ${dataFormatada} (Processo: ${processoAtual})`
        );

        try {
            const sessaoEncontrada = await buscarSessaoPorData(
                dataFormatada,
                hash
            );

            if (sessaoEncontrada) {
                console.log("✅ CRUZAMENTO: Dados cruzados com sucesso!");

                // Atualizar interface se estiver sendo exibida
                setTimeout(() => {
                    atualizarDataSessaoNaInterface();
                }, 500);

                return true;
            } else {
                console.log("❌ CRUZAMENTO: Não foi possível cruzar os dados");
                return false;
            }
        } catch (error) {
            console.error(
                `❌ CRUZAMENTO: Erro no cruzamento: ${error.message}`
            );
            return false;
        }
    }

    /**
     * Retorna os dados completos da sessão (se disponíveis)
     * @returns {Object|null} - Dados da sessão ou null
     */
    function getDadosCompletosSessionJulgamento() {
        return dadosCompletosSessionJulgamento;
    }

    /**
     * Verifica se há dados completos da sessão disponíveis
     * @returns {boolean} - true se há dados disponíveis
     */
    function hasDadosCompletosSessionJulgamento() {
        return dadosCompletosSessionJulgamento !== null;
    }

    /**
     * Reseta os dados completos da sessão
     */
    function resetDadosCompletosSessionJulgamento() {
        console.log("🔄 RESET: Limpando dados completos da sessão");
        dadosCompletosSessionJulgamento = null;
    }

    /**
     * Mostra informações completas da sessão
     */
    function showDadosCompletosSessionJulgamento() {
        if (hasDadosCompletosSessionJulgamento()) {
            const dados = dadosCompletosSessionJulgamento;
            const info = `📋 DADOS COMPLETOS DA SESSÃO:

🏛️ Órgão Julgador: ${dados.orgaoJulgador}
📅 Data da Sessão: ${dados.dataSessao}
⏰ Horário: ${dados.horaSessao}
🖥️ Tipo: ${dados.tipoSessao}
📍 Local: ${dados.localSessao}
📋 Status: ${dados.statusSessao}

📅 Data Limite Pauta: ${dados.dataLimitePauta}
📅 Data Limite Mesa: ${dados.dataLimiteMesa}
📅 Data Limite Minutas: ${dados.dataLimiteMinutas}

🆔 ID: ${dados.id}`;

            console.log(info);
            alert(info);
            return dados;
        } else {
            const msg =
                "❌ Nenhum dado completo de sessão foi encontrado ainda.";
            console.log(msg);
            alert(msg);
            return null;
        }
    }

    // 🚀 INICIALIZAÇÃO AUTOMÁTICA - Executar automáticamente após carregamento da página
    function inicializarAutomaticamente() {
        console.log(
            "🚀 INICIALIZAÇÃO: Iniciando detecção automática de sessão..."
        );

        // Aguardar um pouco para garantir que a página carregou completamente
        setTimeout(() => {
            try {
                // 1. Detectar data da sessão
                if (!hasDataSessaoPautado()) {
                    console.log(
                        "🔍 INICIALIZAÇÃO: Tentando detectar data da sessão..."
                    );
                    detectarDataSessao();
                }

                // 2. Se detectou data, inserir na interface
                if (hasDataSessaoPautado()) {
                    console.log(
                        "✅ INICIALIZAÇÃO: Data detectada, inserindo na interface..."
                    );
                    inserirDataSessaoNaInterface();

                    // 3. Cruzar dados automaticamente
                    console.log(
                        "🔄 INICIALIZAÇÃO: Iniciando cruzamento automático de dados..."
                    );
                    cruzarDadosDataSessao()
                        .then(() => {
                            console.log(
                                "✅ INICIALIZAÇÃO: Processo completo finalizado com sucesso!"
                            );
                            // Atualizar interface com dados completos se disponíveis
                            atualizarDataSessaoNaInterface();
                        })
                        .catch((error) => {
                            console.warn(
                                "⚠️ INICIALIZAÇÃO: Erro no cruzamento automático:",
                                error
                            );
                        });
                } else {
                    console.log(
                        "ℹ️ INICIALIZAÇÃO: Nenhuma data de sessão detectada nesta página"
                    );
                }
            } catch (error) {
                console.error(
                    "❌ INICIALIZAÇÃO: Erro na inicialização automática:",
                    error
                );
            }
        }, 1000); // Aguardar 1 segundo
    }

    // 🧪 FUNÇÃO DE TESTE - Para validação durante desenvolvimento
    function testarSistemaCompleto() {
        console.log(
            "🧪 TESTE: Iniciando teste completo do sistema de sessões..."
        );

        return new Promise(async (resolve) => {
            try {
                // 1. Resetar estado
                console.log("🔄 TESTE: Resetando estado...");
                resetDataSessaoPautado();
                resetDadosCompletosSessionJulgamento();

                // 2. Testar detecção de data
                console.log("🔍 TESTE: Testando detecção de data...");
                detectarDataSessao();

                if (hasDataSessaoPautado()) {
                    console.log("✅ TESTE: Data detectada com sucesso!");
                    showDataSessaoPautadoInfo();

                    // 3. Testar inserção na interface
                    console.log("🎨 TESTE: Testando inserção na interface...");
                    inserirDataSessaoNaInterface();

                    // 4. Testar cruzamento de dados
                    console.log("🔄 TESTE: Testando cruzamento de dados...");
                    const resultado = await cruzarDadosDataSessao();

                    if (resultado) {
                        console.log(
                            "✅ TESTE: Cruzamento realizado com sucesso!"
                        );
                        showDadosCompletosSessionJulgamento();

                        // 5. Testar atualização da interface
                        console.log(
                            "🎨 TESTE: Testando atualização da interface..."
                        );
                        atualizarDataSessaoNaInterface();

                        console.log(
                            "🎉 TESTE: Teste completo finalizado com SUCESSO!"
                        );
                        resolve(true);
                    } else {
                        console.log("⚠️ TESTE: Cruzamento não encontrou dados");
                        resolve(false);
                    }
                } else {
                    console.log("❌ TESTE: Nenhuma data de sessão detectada");
                    resolve(false);
                }
            } catch (error) {
                console.error("❌ TESTE: Erro durante teste:", error);
                resolve(false);
            }
        });
    }

    // Adicionar função de teste ao namespace global para debug
    if (window.SENT1_AUTO) {
        window.SENT1_AUTO.testarSistemaCompleto = testarSistemaCompleto;
        window.SENT1_AUTO.debugPaginaSessoes = debugPaginaSessoes;
        window.SENT1_AUTO.resetControlesRequisicao = resetControlesRequisicao;
        window.SENT1_AUTO.statusControlesRequisicao = statusControlesRequisicao;

        // 🔐 CONTROLES ÚNICOS POR PROCESSO
        window.SENT1_AUTO.obterNumeroProcesso = obterNumeroProcesso;
        window.SENT1_AUTO.obterProcessoAtual = () => processoAtual;
        window.SENT1_AUTO.listarProcessosProcessados = () =>
            Array.from(processosJaProcessados);
        window.SENT1_AUTO.resetProcessosProcessados = () => {
            processosJaProcessados.clear();
            cachePorProcesso.clear();
            processoAtual = null;
            console.log("🔄 RESET: Controles de processo resetados");
        };
        window.SENT1_AUTO.statusProcessos = () => {
            console.log("🔐 STATUS PROCESSOS:");
            console.log(
                `   Processo atual: ${processoAtual || "não identificado"}`
            );
            console.log(
                `   Processos processados: ${processosJaProcessados.size}`
            );
            console.log(
                `   Lista: ${Array.from(processosJaProcessados).join(", ")}`
            );
            console.log(
                `   Cache por processo: ${cachePorProcesso.size} entradas`
            );
        };

        // 🚫 CONTROLES DE REQUISIÇÕES AUTOMÁTICAS
        window.SENT1_AUTO.statusRequisicoes = () => {
            console.log("🚫 STATUS REQUISIÇÕES:");
            console.log(
                `   Requisições automáticas: ${
                    REQUISICOES_AUTOMATICAS_DESABILITADAS
                        ? "DESABILITADAS"
                        : "HABILITADAS"
                }`
            );
            console.log(
                `   Tentativas realizadas: ${tentativasCruzamento}/${MAX_TENTATIVAS_CRUZAMENTO}`
            );
            console.log(
                `   Delay entre tentativas: ${DELAY_ENTRE_TENTATIVAS / 1000}s`
            );
            console.log(`   Cache válido por: ${CACHE_DURATION / 1000}s`);
        };

        window.SENT1_AUTO.desabilitarRequisicoes = () => {
            REQUISICOES_AUTOMATICAS_DESABILITADAS = true;
            console.log(
                "🚫 REQUISIÇÕES: Requisições automáticas desabilitadas"
            );
        };

        window.SENT1_AUTO.habilitarRequisicoes = () => {
            REQUISICOES_AUTOMATICAS_DESABILITADAS = false;
            console.log("✅ REQUISIÇÕES: Requisições automáticas habilitadas");
            console.log("⚠️ ATENÇÃO: Use com moderação para evitar logout");
        };

        window.SENT1_AUTO.forcarCruzamento = async () => {
            console.log("🔄 FORÇA: Forçando cruzamento ignorando bloqueios...");
            const estadoOriginal = REQUISICOES_AUTOMATICAS_DESABILITADAS;
            REQUISICOES_AUTOMATICAS_DESABILITADAS = false;

            try {
                const resultado = await cruzarDadosDataSessao();
                console.log(
                    `🔄 FORÇA: Resultado: ${resultado ? "SUCESSO" : "FALHA"}`
                );
                return resultado;
            } finally {
                REQUISICOES_AUTOMATICAS_DESABILITADAS = estadoOriginal;
            }
        };

        console.log(
            "🧪 TESTE: Função testarSistemaCompleto() disponível em window.SENT1_AUTO"
        );
        console.log(
            "🧪 DEBUG: Função debugPaginaSessoes() disponível em window.SENT1_AUTO"
        );
        console.log(
            "🔐 CONTROLE: Funções de controle único por processo disponíveis em window.SENT1_AUTO"
        );
    }

    // 🔍 FUNÇÃO DE DEBUG - Para investigar estrutura da página de sessões
    async function debugPaginaSessoes() {
        console.log("🔍 DEBUG: Iniciando debug da página de sessões...");

        try {
            const baseUrl = window.location.origin;
            const urlSessoes = `${baseUrl}/eproc/controlador.php?acao=sessao_julgamento_listar`;

            console.log(`🌐 DEBUG: Fazendo fetch para: ${urlSessoes}`);

            const response = await fetch(urlSessoes, {
                credentials: "same-origin",
                headers: {
                    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                },
            });

            if (!response.ok) {
                console.error(
                    `❌ DEBUG: Erro HTTP ${response.status}: ${response.statusText}`
                );
                return;
            }

            const htmlContent = await response.text();
            console.log(
                `✅ DEBUG: Página carregada, tamanho: ${htmlContent.length} caracteres`
            );

            // Fazer parse
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlContent, "text/html");

            // Debug básico
            const title =
                doc.querySelector("title")?.textContent || "sem título";
            console.log(`📋 DEBUG: Título: "${title}"`);

            // Verificar se foi redirecionado para login
            if (
                title.toLowerCase().includes("login") ||
                htmlContent.includes("frmLogin")
            ) {
                console.warn(
                    "⚠️ DEBUG: Parece que foi redirecionado para página de login!"
                );
                console.warn(
                    "💡 DEBUG: Tente acessar a URL manualmente no navegador primeiro"
                );
                return;
            }

            // Analisar estrutura
            const allTables = doc.querySelectorAll("table");
            console.log(`📊 DEBUG: ${allTables.length} tabelas encontradas`);

            allTables.forEach((table, index) => {
                const id = table.id || "sem-id";
                const className = table.className || "sem-class";
                const rows = table.querySelectorAll("tr").length;
                const hasSessionData =
                    table.innerHTML.includes("Órgão Julgador") ||
                    table.innerHTML.includes("Data da Sessão") ||
                    table.innerHTML.includes("sessao");

                console.log(`📋 DEBUG: Tabela ${index + 1}:`);
                console.log(`  - ID: "${id}"`);
                console.log(`  - Class: "${className}"`);
                console.log(`  - Linhas: ${rows}`);
                console.log(
                    `  - Parece ter dados de sessão: ${hasSessionData}`
                );

                if (hasSessionData && rows > 1) {
                    console.log(
                        `🎯 DEBUG: Esta tabela parece promissora! Analisando mais...`
                    );

                    // Pegar headers
                    const headers = Array.from(
                        table.querySelectorAll("th, thead td")
                    ).map((th) => th.textContent.trim());
                    console.log(
                        `📋 DEBUG: Headers: ${JSON.stringify(headers)}`
                    );

                    // Pegar algumas linhas de exemplo
                    const dataRows = table.querySelectorAll("tbody tr");
                    console.log(`📋 DEBUG: ${dataRows.length} linhas de dados`);

                    Array.from(dataRows)
                        .slice(0, 3)
                        .forEach((row, rowIndex) => {
                            const cells = Array.from(
                                row.querySelectorAll("td")
                            ).map((td) => td.textContent.trim());
                            console.log(
                                `📋 DEBUG: Linha ${
                                    rowIndex + 1
                                }: ${JSON.stringify(cells)}`
                            );
                        });
                }
            });

            // Salvar HTML para inspeção manual
            console.log(
                "💾 DEBUG: HTML da página salvo em window.debugPageHTML (use console para inspecionar)"
            );
            window.debugPageHTML = htmlContent;

            console.log("✅ DEBUG: Análise completa! Verifique os logs acima.");
        } catch (error) {
            console.error("❌ DEBUG: Erro durante debug:", error);
        }
    }

    // 📨 HANDLER DE MENSAGENS - Para comunicação com o popup
    if (
        typeof chrome !== "undefined" &&
        chrome.runtime &&
        chrome.runtime.onMessage
    ) {
        chrome.runtime.onMessage.addListener(function (
            request,
            sender,
            sendResponse
        ) {
            console.log("📨 MENSAGEM: Recebida do popup:", request);

            if (request.action === "toggleAutoSessionRequests") {
                const enabled = request.enabled;

                if (enabled) {
                    console.log(
                        "🔓 POPUP: Habilitando requisições automáticas de sessão"
                    );
                    REQUISICOES_AUTOMATICAS_DESABILITADAS = false;
                } else {
                    console.log(
                        "🔒 POPUP: Desabilitando requisições automáticas de sessão"
                    );
                    REQUISICOES_AUTOMATICAS_DESABILITADAS = true;
                }

                console.log(
                    `⚙️ POPUP: REQUISICOES_AUTOMATICAS_DESABILITADAS = ${REQUISICOES_AUTOMATICAS_DESABILITADAS}`
                );

                // Enviar resposta de confirmação
                sendResponse({
                    success: true,
                    message: enabled
                        ? "Requisições automáticas habilitadas"
                        : "Requisições automáticas desabilitadas",
                    currentState: !REQUISICOES_AUTOMATICAS_DESABILITADAS,
                });
            }

            // Manter o handler para outras mensagens se necessário
            if (request.action === "toggleSessionDateHighlight") {
                console.log(
                    "🎯 POPUP: Toggle para destaque da data da sessão:",
                    request.enabled
                );

                // Aqui você pode adicionar a lógica para o destaque da data da sessão
                // Por enquanto, apenas confirmar recebimento
                sendResponse({
                    success: true,
                    message: request.enabled
                        ? "Destaque ativado"
                        : "Destaque desativado",
                });
            }

            return true; // Indica que a resposta será enviada de forma assíncrona
        });

        console.log("📨 HANDLER: Listener de mensagens do popup registrado");
    }

    // Executar inicialização automática quando a página carregar
    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            inicializarAutomaticamente
        );
    } else {
        // Se a página já carregou, executar imediatamente
        inicializarAutomaticamente();
    }
})();
