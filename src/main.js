// Content script automatizado para DocumentosRelevantes
(function () {
    "use strict";

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
                            /Tipo Documento:.*?<font[^>]*>([^<]+)/i
                        );
                        const tamanhoMatch = tooltipContent.match(
                            /Tamanho:.*?<font[^>]*>([^<]+)/i
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
                                    /infraTooltipMostrar\(['"]([^'"]+)['"]\)/i
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
    } // =====================================================================
    // FUNÇÃO DE DETECÇÃO DE DATA DA SESSÃO (em implementação por etapas)
    // =====================================================================    // MICRO-ETAPA 2: Declaração da função vazia
    function detectarDataSessao() {
        // MICRO-ETAPA 3: Log básico para confirmar execução
        log("🔍 DETECÇÃO SESSÃO: Função detectarDataSessao() iniciada");

        // NAVEGAÇÃO HIERÁRQUICA PELA ESTRUTURA DOM DO eProc
        log(
            "🎯 DETECÇÃO SESSÃO: Navegando pela hierarquia DOM específica do eProc"
        );

        // PASSO 1: Encontrar divInfraAreaTelaD
        log("📍 PASSO 1: Procurando <div id='divInfraAreaTelaD'>");
        const divInfraAreaTelaD = document.querySelector("#divInfraAreaTelaD");

        if (!divInfraAreaTelaD) {
            log("❌ ERRO PASSO 1: divInfraAreaTelaD não encontrado");
            return {
                encontrada: false,
                motivo: "Elemento #divInfraAreaTelaD não encontrado - página incompatível",
                passo: 1,
            };
        }
        log("✅ PASSO 1: divInfraAreaTelaD encontrado");

        // PASSO 2: Encontrar frmProcessoLista dentro da área
        log(
            "📍 PASSO 2: Procurando <form id='frmProcessoLista'> dentro de divInfraAreaTelaD"
        );
        const frmProcessoLista =
            divInfraAreaTelaD.querySelector("#frmProcessoLista");

        if (!frmProcessoLista) {
            log(
                "❌ ERRO PASSO 2: frmProcessoLista não encontrado dentro de divInfraAreaTelaD"
            );
            return {
                encontrada: false,
                motivo: "Elemento #frmProcessoLista não encontrado na área principal",
                passo: 2,
            };
        }
        log("✅ PASSO 2: frmProcessoLista encontrado");

        // PASSO 3: Encontrar fieldset fldMinutas (DIRETO no formulário, SEM fldCapa)
        log(
            "📍 PASSO 3: Procurando <fieldset id='fldMinutas'> dentro do formulário"
        );
        const fldMinutas = frmProcessoLista.querySelector("#fldMinutas");

        if (!fldMinutas) {
            log(
                "❌ ERRO PASSO 3: fldMinutas não encontrado dentro do formulário"
            );
            return {
                encontrada: false,
                motivo: "Elemento #fldMinutas não encontrado no formulário",
                passo: 3,
            };
        }
        log("✅ PASSO 3: fldMinutas encontrado");

        // PASSO 4: Encontrar div conteudoMinutas
        log(
            "📍 PASSO 4: Procurando <div id='conteudoMinutas'> dentro de fldMinutas"
        );
        const conteudoMinutas = fldMinutas.querySelector("#conteudoMinutas");

        if (!conteudoMinutas) {
            log(
                "❌ ERRO PASSO 4: conteudoMinutas não encontrado dentro de fldMinutas"
            );
            return {
                encontrada: false,
                motivo: "Elemento #conteudoMinutas não encontrado nas minutas",
                passo: 4,
            };
        }
        log("✅ PASSO 4: conteudoMinutas encontrado");

        // PASSO 5: Encontrar legend com aria-label="Histórico"
        log(
            "📍 PASSO 5: Procurando <legend aria-label='Histórico' id='legMinutas'> dentro de conteudoMinutas"
        );
        const legMinutas = conteudoMinutas.querySelector(
            "legend[aria-label='Histórico']#legMinutas"
        );

        if (!legMinutas) {
            log(
                "❌ ERRO PASSO 5: legend com aria-label='Histórico' e id='legMinutas' não encontrado dentro de conteudoMinutas"
            );
            return {
                encontrada: false,
                motivo: "Elemento legend[aria-label='Histórico']#legMinutas não encontrado no conteúdo das minutas",
                passo: 5,
            };
        }
        log("✅ PASSO 5: legend com aria-label='Histórico' encontrado");

        // PASSO 6: Encontrar botão com class="infraLegendObrigatorio" dentro da legend
        log(
            "📍 PASSO 6: Procurando <button class='infraLegendObrigatorio'> dentro da legend"
        );
        const botaoInfraLegend = legMinutas.querySelector(
            "button.infraLegendObrigatorio"
        );

        if (!botaoInfraLegend) {
            log(
                "❌ ERRO PASSO 6: botão com class='infraLegendObrigatorio' não encontrado dentro da legend"
            );
            return {
                encontrada: false,
                motivo: "Elemento button.infraLegendObrigatorio não encontrado na legend",
                passo: 6,
            };
        }

        log(
            "🎉 PASSO 6: BOTÃO infraLegendObrigatorio ENCONTRADO! NAVEGAÇÃO COMPLETA!"
        );
        log("📋 DETECÇÃO SESSÃO: Detalhes do elemento encontrado:");
        log("  • Tag:", botaoInfraLegend.tagName);
        log("  • Classes:", botaoInfraLegend.className || "nenhuma");
        log(
            "  • Texto visível:",
            (botaoInfraLegend.textContent || "").substring(0, 200) + "..."
        );

        // Verificar todos os atributos
        const attrs = botaoInfraLegend.attributes;
        log(`  • Total de atributos: ${attrs.length}`);
        for (let i = 0; i < attrs.length; i++) {
            const attr = attrs[i];
            log(
                `    - ${attr.name}: ${attr.value.substring(0, 100)}${
                    attr.value.length > 100 ? "..." : ""
                }`
            );
        }

        // AGORA QUE ENCONTRAMOS O BOTÃO, BUSCAR O TEXTO DA DATA NA REGIÃO PRÓXIMA
        log(
            "🎯 DETECÇÃO SESSÃO: PRIORIDADE 2 - Buscar texto 'Mérito (Incluído em Pauta em' na região próxima"
        );

        // ESTRATÉGIA 1: Verificar se o texto está no próprio botão
        const textoBotao =
            botaoInfraLegend.textContent || botaoInfraLegend.innerText || "";
        log(`📋 DETECÇÃO SESSÃO: Texto do botão: "${textoBotao}"`);

        // ESTRATÉGIA 2: Buscar na legend pai e elementos próximos
        let textoParaBusca = "";
        let fonteUsada = "";

        if (textoBotao.includes("Mérito (Incluído em Pauta em")) {
            log("✅ DETECÇÃO SESSÃO: Texto encontrado diretamente no botão");
            textoParaBusca = textoBotao.trim();
            fonteUsada = "button.textContent";
        } else {
            log(
                "🔍 DETECÇÃO SESSÃO: Texto não está no botão, buscando na região próxima..."
            );

            // Buscar na legend pai
            const textoLegend =
                legMinutas.textContent || legMinutas.innerText || "";
            log(
                `📋 DETECÇÃO SESSÃO: Texto da legend: "${textoLegend.substring(
                    0,
                    200
                )}${textoLegend.length > 200 ? "..." : ""}"`
            );

            if (textoLegend.includes("Mérito (Incluído em Pauta em")) {
                log("✅ DETECÇÃO SESSÃO: Texto encontrado na legend pai");
                textoParaBusca = textoLegend.trim();
                fonteUsada = "legend.textContent";
            } else {
                // Buscar no fieldset pai (fldMinutas)
                const textoFieldset =
                    fldMinutas.textContent || fldMinutas.innerText || "";
                log(
                    `📋 DETECÇÃO SESSÃO: Texto do fieldset: "${textoFieldset.substring(
                        0,
                        200
                    )}${textoFieldset.length > 200 ? "..." : ""}"`
                );

                if (textoFieldset.includes("Mérito (Incluído em Pauta em")) {
                    log("✅ DETECÇÃO SESSÃO: Texto encontrado no fieldset pai");
                    textoParaBusca = textoFieldset.trim();
                    fonteUsada = "fieldset.textContent";
                } else {
                    // Buscar no conteudoMinutas
                    const textoConteudo =
                        conteudoMinutas.textContent ||
                        conteudoMinutas.innerText ||
                        "";
                    log(
                        `📋 DETECÇÃO SESSÃO: Texto do conteudoMinutas: "${textoConteudo.substring(
                            0,
                            200
                        )}${textoConteudo.length > 200 ? "..." : ""}"`
                    );

                    if (
                        textoConteudo.includes("Mérito (Incluído em Pauta em")
                    ) {
                        log(
                            "✅ DETECÇÃO SESSÃO: Texto encontrado no conteudoMinutas"
                        );
                        textoParaBusca = textoConteudo.trim();
                        fonteUsada = "conteudoMinutas.textContent";
                    } else {
                        // Última tentativa: buscar em todo o formulário
                        const textoFormulario =
                            frmProcessoLista.textContent ||
                            frmProcessoLista.innerText ||
                            "";
                        log(
                            `📋 DETECÇÃO SESSÃO: Texto do formulário: "${textoFormulario.substring(
                                0,
                                200
                            )}${textoFormulario.length > 200 ? "..." : ""}"`
                        );

                        if (
                            textoFormulario.includes(
                                "Mérito (Incluído em Pauta em"
                            )
                        ) {
                            log(
                                "✅ DETECÇÃO SESSÃO: Texto encontrado no formulário completo"
                            );
                            textoParaBusca = textoFormulario.trim();
                            fonteUsada = "formulario.textContent";
                        } else {
                            log(
                                "❌ DETECÇÃO SESSÃO: Texto 'Mérito (Incluído em Pauta em' não encontrado em nenhuma região"
                            );
                            return {
                                encontrada: false,
                                motivo: "Texto 'Mérito (Incluído em Pauta em' não encontrado na estrutura DOM",
                                elemento:
                                    "button.infraLegendObrigatorio encontrado mas texto não localizado",
                            };
                        }
                    }
                }
            }
        }

        // FALLBACK: Se não encontrou o texto específico, tentar fontes do botão
        if (!textoParaBusca && textoBotao.trim().length > 0) {
            log(
                "🔄 DETECÇÃO SESSÃO: Fallback - usando texto do botão mesmo sem padrão específico"
            );
            textoParaBusca = textoBotao.trim();
            fonteUsada = "button.textContent.fallback";
        } else if (!textoParaBusca) {
            // Verificar atributos do botão como fallback final
            const onmouseoverAttr =
                botaoInfraLegend.getAttribute("onmouseover");
            const titleAttr = botaoInfraLegend.getAttribute("title") || "";

            if (onmouseoverAttr && onmouseoverAttr.trim().length > 0) {
                textoParaBusca = onmouseoverAttr;
                fonteUsada = "button.onmouseover.fallback";
                log(
                    "� DETECÇÃO SESSÃO: Fallback final - usando onmouseover do botão"
                );

                // Se é infraTooltipMostrar, extrair primeiro argumento
                if (onmouseoverAttr.includes("infraTooltipMostrar(")) {
                    const regexTooltip =
                        /infraTooltipMostrar\s*\(\s*'([^']*)'[^)]*\)/;
                    const matchTooltip = onmouseoverAttr.match(regexTooltip);
                    if (matchTooltip && matchTooltip[1]) {
                        textoParaBusca = matchTooltip[1];
                        log(
                            "✅ DETECÇÃO SESSÃO: Primeiro argumento extraído do tooltip"
                        );
                    }
                }
            } else if (titleAttr.trim().length > 0) {
                textoParaBusca = titleAttr.trim();
                fonteUsada = "button.title.fallback";
                log(
                    "🔄 DETECÇÃO SESSÃO: Fallback final - usando title do botão"
                );
            } else {
                log(
                    "❌ DETECÇÃO SESSÃO: Nenhuma fonte de dados válida encontrada"
                );
                return {
                    encontrada: false,
                    motivo: "Nenhuma fonte de dados válida encontrada após busca extensiva",
                    elemento:
                        "button.infraLegendObrigatorio encontrado mas sem dados utilizáveis",
                };
            }
        }

        log(
            `🎯 DETECÇÃO SESSÃO: Usando fonte "${fonteUsada}" para busca de data`
        );
        log(`📋 DETECÇÃO SESSÃO: Texto para análise: "${textoParaBusca}"`);

        // MICRO-ETAPA 8: Analisar formato do texto para identificar padrões de data
        log("🔍 DETECÇÃO SESSÃO: Iniciando análise de padrões de data...");

        // Padrões específicos para datas em português (incluindo contexto de pauta)
        const padroesBrasil = [
            /(?:em|Em)\s+(\d{1,2}\/\d{1,2}\/\d{4})/g, // "em 15/07/2025"
            /(?:Pauta|pauta)\s+(?:em|Em)\s+(\d{1,2}\/\d{1,2}\/\d{4})/g, // "Pauta em 15/07/2025"
            /(?:Incluído|incluído)\s+(?:em|Em)\s+(?:Pauta|pauta)\s+(?:em|Em)\s+(\d{1,2}\/\d{1,2}\/\d{4})/g, // "Incluído em Pauta em 15/07/2025"
            /\d{1,2}\/\d{1,2}\/\d{4}/g, // dd/mm/aaaa padrão geral
            /\d{1,2}-\d{1,2}-\d{4}/g, // dd-mm-aaaa
            /\d{1,2}\.\d{1,2}\.\d{4}/g, // dd.mm.aaaa
        ];

        let datasEncontradas = [];

        padroesBrasil.forEach((padrao, index) => {
            const matches = textoParaBusca.match(padrao);
            if (matches) {
                log(
                    `📅 DETECÇÃO SESSÃO: Padrão ${index + 1} encontrou: ${
                        matches.length
                    } data(s)`
                );
                matches.forEach((match) => {
                    // Para padrões que capturam grupos, usar o grupo capturado
                    const dataEncontrada = match.includes("(")
                        ? (match.match(/(\d{1,2}\/\d{1,2}\/\d{4})/) || [
                              match,
                          ])[0]
                        : match;
                    log(
                        `📅 DETECÇÃO SESSÃO: Data encontrada: "${dataEncontrada}"`
                    );
                    datasEncontradas.push(dataEncontrada);
                });
            }
        });

        if (datasEncontradas.length === 0) {
            log(
                "❌ DETECÇÃO SESSÃO: Nenhuma data encontrada nos padrões brasileiros"
            );
            return {
                encontrada: false,
                motivo: `Nenhuma data encontrada nos padrões brasileiros. Fonte: ${fonteUsada}`,
                elemento: "historico encontrado mas sem data válida",
                textoAnalisado: textoParaBusca,
            };
        } else {
            log(
                `✅ DETECÇÃO SESSÃO: Total de ${datasEncontradas.length} data(s) identificada(s)`
            );

            // MICRO-ETAPA 9: Validar e filtrar datas encontradas
            log("🔍 DETECÇÃO SESSÃO: Iniciando validação das datas...");

            const datasValidas = [];

            datasEncontradas.forEach((dataStr, index) => {
                log(
                    `🔍 DETECÇÃO SESSÃO: Validando data ${
                        index + 1
                    }: "${dataStr}"`
                );

                // Normalizar separadores para /
                const dataNormalizada = dataStr.replace(/[-\.]/g, "/");

                // Dividir em partes
                const partes = dataNormalizada.split("/");

                if (partes.length === 3) {
                    const dia = parseInt(partes[0], 10);
                    const mes = parseInt(partes[1], 10);
                    const ano = parseInt(partes[2], 10);

                    // Validações básicas
                    const diaValido = dia >= 1 && dia <= 31;
                    const mesValido = mes >= 1 && mes <= 12;
                    const anoValido = ano >= 1900 && ano <= 2030;

                    log(
                        `📅 DETECÇÃO SESSÃO: Partes da data: dia=${dia}, mes=${mes}, ano=${ano}`
                    );
                    log(
                        `📅 DETECÇÃO SESSÃO: Validações: dia=${diaValido}, mes=${mesValido}, ano=${anoValido}`
                    );

                    if (diaValido && mesValido && anoValido) {
                        // Criar objeto Date para validação mais rigorosa
                        const dataObj = new Date(ano, mes - 1, dia);
                        const dataEhValida =
                            dataObj.getFullYear() === ano &&
                            dataObj.getMonth() === mes - 1 &&
                            dataObj.getDate() === dia;

                        if (dataEhValida) {
                            datasValidas.push({
                                original: dataStr,
                                normalizada: dataNormalizada,
                                dia: dia,
                                mes: mes,
                                ano: ano,
                                dataObj: dataObj,
                            });
                            log(
                                `✅ DETECÇÃO SESSÃO: Data válida: "${dataStr}"`
                            );
                        } else {
                            log(
                                `❌ DETECÇÃO SESSÃO: Data inválida (Date object): "${dataStr}"`
                            );
                        }
                    } else {
                        log(
                            `❌ DETECÇÃO SESSÃO: Data com valores fora da faixa: "${dataStr}"`
                        );
                    }
                } else {
                    log(
                        `❌ DETECÇÃO SESSÃO: Formato inválido (${partes.length} partes): "${dataStr}"`
                    );
                }
            });

            log(
                `📊 DETECÇÃO SESSÃO: ${datasValidas.length} de ${datasEncontradas.length} datas são válidas`
            );

            // MICRO-ETAPA 10: Selecionar a data mais relevante
            if (datasValidas.length > 0) {
                log("🔍 DETECÇÃO SESSÃO: Selecionando data mais relevante...");

                let dataSelecionada = null;

                if (datasValidas.length === 1) {
                    // Apenas uma data válida
                    dataSelecionada = datasValidas[0];
                    log(
                        "📅 DETECÇÃO SESSÃO: Apenas uma data válida, selecionando automaticamente"
                    );
                } else {
                    // Múltiplas datas válidas - escolher a mais recente
                    log(
                        `📅 DETECÇÃO SESSÃO: ${datasValidas.length} datas válidas encontradas, selecionando a mais recente`
                    );

                    dataSelecionada = datasValidas.reduce(
                        (maisRecente, atual) => {
                            return atual.dataObj > maisRecente.dataObj
                                ? atual
                                : maisRecente;
                        }
                    );

                    log("📋 DETECÇÃO SESSÃO: Comparação das datas:");
                    datasValidas.forEach((data, idx) => {
                        const ehSelecionada = data === dataSelecionada;
                        log(
                            `📅 Data ${idx + 1}: ${
                                data.original
                            } (${data.dataObj.toLocaleDateString("pt-BR")}) ${
                                ehSelecionada ? "← SELECIONADA" : ""
                            }`
                        );
                    });
                }

                log(
                    `✅ DETECÇÃO SESSÃO: Data da sessão selecionada: "${dataSelecionada.original}"`
                );
                log(
                    `📅 DETECÇÃO SESSÃO: Data formatada: ${dataSelecionada.dataObj.toLocaleDateString(
                        "pt-BR"
                    )}`
                );
                log(
                    `📅 DETECÇÃO SESSÃO: Componentes: ${dataSelecionada.dia}/${dataSelecionada.mes}/${dataSelecionada.ano}`
                );

                // Retornar dados da sessão para uso futuro
                return {
                    encontrada: true,
                    metodo: "navegacao_hierarquica",
                    fonte: fonteUsada,
                    dataOriginal: dataSelecionada.original,
                    dataNormalizada: dataSelecionada.normalizada,
                    dataFormatada:
                        dataSelecionada.dataObj.toLocaleDateString("pt-BR"),
                    dia: dataSelecionada.dia,
                    mes: dataSelecionada.mes,
                    ano: dataSelecionada.ano,
                    dataObj: dataSelecionada.dataObj,
                    textoAnalisado: textoParaBusca,
                };
            } else {
                log(
                    "❌ DETECÇÃO SESSÃO: Nenhuma data válida encontrada para seleção"
                );
                return {
                    encontrada: false,
                    motivo: `Nenhuma data válida após validação. Fonte: ${fonteUsada}`,
                    elemento: "historico encontrado mas datas inválidas",
                    textoAnalisado: textoParaBusca,
                };
            }
        }
    }

    // DEBUG: Confirmar que o script está pronto para detecção de sessão
    log("🔧 Script carregado - pronto para implementar detecção de sessão");

    // MICRO-ETAPA 11: Testar a função de detecção de data da sessão
    setTimeout(() => {
        log("🧪 TESTE: Executando detecção de data da sessão...");

        try {
            const resultadoDeteccao = detectarDataSessao();

            if (resultadoDeteccao.encontrada) {
                log("🎉 TESTE: Data da sessão detectada com sucesso!");
                log("📅 TESTE: Resultado:", {
                    dataOriginal: resultadoDeteccao.dataOriginal,
                    dataFormatada: resultadoDeteccao.dataFormatada,
                    dia: resultadoDeteccao.dia,
                    mes: resultadoDeteccao.mes,
                    ano: resultadoDeteccao.ano,
                });

                // Exibir notificação visual para o usuário
                if (typeof showNotification === "function") {
                    showNotification(
                        `📅 Data da sessão detectada: ${resultadoDeteccao.dataFormatada}`,
                        "success"
                    );
                } else {
                    log(
                        "🎉 TESTE: Notificação visual: Data da sessão detectada:",
                        resultadoDeteccao.dataFormatada
                    );
                }
            } else {
                log("⚠️ TESTE: Não foi possível detectar data da sessão");
                log("❌ TESTE: Motivo:", resultadoDeteccao.motivo);

                // Notificar que não foi detectada (apenas para debug)
                if (debugMode) {
                    if (typeof showNotification === "function") {
                        showNotification(
                            `ℹ️ Debug: Data da sessão não detectada\nMotivo: ${resultadoDeteccao.motivo}`,
                            "info"
                        );
                    } else {
                        log(
                            "ℹ️ TESTE: Debug - Data da sessão não detectada. Motivo:",
                            resultadoDeteccao.motivo
                        );
                    }
                }
            }
        } catch (error) {
            log("💥 TESTE: Erro ao executar detecção de sessão:", error);
            console.error("Erro na detecção de sessão:", error);
        }
    }, 2000); // Aguardar 2 segundos para a página carregar completamente
})();
