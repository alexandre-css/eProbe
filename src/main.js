// Content script automatizado para DocumentosRelevantes
(function () {
    "use strict";

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
            console.log("🤖 PROCESSAR DOCUMENTO:", message, ...args);
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
                "✅ Página válida detectada: formulário #frmProcessoLista E título 'Consulta Processual - Detalhes do Processo' encontrados (página do processo)"
            );
            return true;
        }

        // Para compatibilidade com documento específico (página de visualização do documento)
        const pageType = detectPageType();
        if (pageType === "documento_especifico") {
            console.log("✅ Página válida detectada: documento específico");
            return true;
        }

        const url = window.location.href;
        console.log("❌ Página não é válida para o botão:", {
            url: url,
            pageType: pageType,
            hasFormProcessoLista: !!formProcessoLista,
            hasTituloCorreto: hasTituloCorreto,
            tituloAtual: tituloConsultaProcessual
                ? tituloConsultaProcessual.textContent
                : "não encontrado",
            hasTable: !!document.querySelector("table"),
            hasDocumentoRelevante:
                !!document.querySelector('[href*="SENT"]') ||
                !!document.querySelector('[href*="INIC"]'),
            hasEventDesc: !!document.querySelector(".infraEventoDescricao"),
        });
        return false;
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
                log(`🔍 Executando estratégia ${i + 1} para descrição...`);
                const result = strategies[i]();
                if (result && result.trim().length > 3) {
                    log(`✅ Estratégia ${i + 1} bem-sucedida:`, result);
                    return result.trim();
                }
            } catch (e) {
                log(`❌ Erro na estratégia ${i + 1}:`, e);
            }
        }

        log("❌ Nenhuma estratégia encontrou descrição válida");
        return "";
    }

    // Estratégia 1: Buscar na mesma linha do link
    function findEventDescriptionInSameRow(linkElement) {
        const currentRow = linkElement.closest("tr");
        if (!currentRow) return "";

        log("📍 Buscando na linha atual...");

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
                    log(`✅ Encontrado via seletor ${selector}:`, text);
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

        log("📍 Buscando em linhas anteriores...");

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
                            `✅ Encontrado em linha anterior (${attempts}):`,
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

        log("📍 Buscando por padrões de texto...");

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
                            log(`✅ Encontrado por padrão "${pattern}":`, text);
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

        log("📍 Analisando estrutura da tabela...");

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
                        `✅ Encontrado na estrutura da tabela (célula ${i}):`,
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
        log("📍 Buscando por proximidade...");

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
                    log(`✅ Encontrado por proximidade:`, text);
                    return text;
                }
            }
        }

        return "";
    } // Encontrar documentos relevantes com informações detalhadas
    function findDocumentosRelevantes() {
        const pageType = detectPageType();
        log(`📍 Tipo de página detectado: ${pageType}`);

        // Construir seletor dinamicamente baseado nos tipos configurados
        const selectors = Object.values(TIPOS_DOCUMENTO_RELEVANTE)
            .map((tipo) => [
                `a.infraLinkDocumento[data-nome="${tipo.dataNome}"]`,
                `a[data-nome="${tipo.dataNome}"]`,
            ])
            .flat()
            .join(", ");

        const links = document.querySelectorAll(selectors);
        log("📄 Links de documentos relevantes encontrados:", links.length);

        const documentosData = [];

        // PRIMEIRA ETAPA: Coletar informações básicas dos links
        links.forEach((link, i) => {
            const texto = link.textContent.trim();
            const href = link.getAttribute("href");

            log(`📋 DOC ${i + 1}:`, {
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
                        log("⚠️ Erro ao decodificar dadosIconLink:", e);
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
                    `🎯 Documento encontrado: ${texto} (${tipoEncontrado.descricao})!`,
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
                "🔍 Página da lista de documentos detectada - buscando descrições dos eventos..."
            );

            // Para cada documento relevante, encontrar a descrição na mesma linha (tr)
            documentosData.forEach((linkData, index) => {
                log(`🔍 Buscando descrição para documento #${index + 1}...`);

                let eventoDescricao = "";
                const linkElement = linkData.element; // Encontrar a linha (tr) do evento que contém o link
                // O link está em uma tabela aninhada, então precisamos buscar o tr principal
                const eventRow =
                    linkElement.closest("tr[id^='trEvento']") ||
                    linkElement.closest("tr[id*='Evento']") ||
                    linkElement.closest("tr[data-parte]");

                if (eventRow) {
                    log(
                        `🎯 Link está na linha do evento: ${
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
                            `✅ Descrição encontrada na linha do evento: "${eventoDescricao}"`
                        );
                    } else {
                        log(
                            "❌ Célula td.infraEventoDescricao não encontrada na linha do evento"
                        );

                        // Fallback: buscar qualquer elemento com classe infraEventoDescricao na linha
                        const fallbackDescElement = eventRow.querySelector(
                            ".infraEventoDescricao"
                        );
                        if (fallbackDescElement) {
                            eventoDescricao =
                                fallbackDescElement.textContent.trim();
                            log(
                                `⚠️ Descrição encontrada via fallback: "${eventoDescricao}"`
                            );
                        } else {
                            // Debug: mostrar todas as células da linha para entender a estrutura
                            const allCells = eventRow.querySelectorAll("td");
                            log(
                                `🔍 Debug - Total de células na linha: ${allCells.length}`
                            );
                            allCells.forEach((cell, index) => {
                                log(
                                    `🔍 Célula ${index + 1}: "${cell.textContent
                                        .trim()
                                        .substring(0, 50)}" (classe: ${
                                        cell.className
                                    })`
                                );
                            });
                        }
                    }
                } else {
                    log(
                        "❌ Não foi possível encontrar a linha (tr) do evento que contém o link do documento"
                    );

                    // Debug: verificar estrutura ao redor do link
                    log("🔍 Debug - Estrutura ao redor do link:");
                    let parent = linkElement.parentElement;
                    let level = 0;
                    while (parent && level < 5) {
                        log(
                            `🔍 Nível ${level}: ${parent.tagName} (id: ${
                                parent.id || "N/A"
                            }, classe: ${parent.className || "N/A"})`
                        );
                        parent = parent.parentElement;
                        level++;
                    }
                }

                // Adicionar a descrição encontrada ao objeto do link
                linkData.eventoDescricao =
                    eventoDescricao || linkData.tipo.descricao;
                log(
                    `📋 Descrição final para documento #${index + 1}: "${
                        linkData.eventoDescricao
                    }"`
                );
            });
        } else {
            log(
                "⚠️ Não é página de lista de documentos ou não há documentos relevantes - descrições não serão buscadas"
            );
            // Se não estivermos na lista de documentos, usar descrição padrão do tipo
            documentosData.forEach((linkData) => {
                linkData.eventoDescricao = linkData.tipo.descricao;
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
            index: linkData.index,
        }));

        return documentosRelevantes;
    }

    // Abrir documento relevante automaticamente (com suporte a múltiplos documentos)
    async function autoOpenDocumentoRelevante() {
        const pageType = detectPageType();
        log("📄 Tipo de página:", pageType);

        if (pageType !== "lista_documentos") {
            log("⚠️ Não está na página de lista de documentos");
            return false;
        }

        const documentosRelevantes = findDocumentosRelevantes();

        if (documentosRelevantes.length === 0) {
            log("❌ Nenhum documento relevante encontrado");
            showNotification(
                "❌ Nenhum documento relevante encontrado nesta página",
                "error"
            );
            return false;
        }

        let selectedDocument;

        if (documentosRelevantes.length === 1) {
            // Apenas um documento encontrado
            selectedDocument = documentosRelevantes[0];
            log("📄 Um documento encontrado, selecionando automaticamente");
        } else {
            // Múltiplos documentos encontrados
            log(
                `📄 ${documentosRelevantes.length} documentos encontrados, solicitando seleção do usuário`
            );

            log(
                "🔍 DEBUG: documentosRelevantes antes do modal:",
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
                log("❌ Usuário cancelou a seleção");
                return false;
            }
        }

        log("🚀 Abrindo documento selecionado:", selectedDocument.href);
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
        log("📄 Tipo de página:", pageType);

        if (
            ![
                "documento_html",
                "documento_pdf",
                "documento_especifico",
            ].includes(pageType)
        ) {
            log("⚠️ Não está na página do documento específico");
            showNotification(
                "❌ Execute na página do documento, não na lista",
                "error"
            );
            return null;
        }

        // Aguardar documento carregar completamente
        await waitForDocumentLoad();

        // Estratégia baseada no tipo de documento
        if (pageType === "documento_html") {
            return await extractTextFromHTML();
        } else if (pageType === "documento_pdf") {
            return await extractTextFromPDF();
        } else {
            // Fallback: tentar HTML primeiro, depois PDF
            const htmlText = await extractTextFromHTML();
            if (htmlText) return htmlText;

            const pdfText = await extractTextFromPDF();
            if (pdfText) return pdfText;

            showNotification(
                "❌ Não foi possível detectar o tipo de documento",
                "error"
            );
            return null;
        }
    }

    // Extrair texto de documento HTML (sentenças)
    async function extractTextFromHTML() {
        log("📄 Extraindo texto de documento HTML...");

        const sectionDocumento = document.querySelector(
            'section[data-nome="sentenca"]'
        );
        if (!sectionDocumento) {
            log("❌ Section do documento HTML não encontrada");
            return null;
        }

        log("✅ Página do documento HTML válida, prosseguindo com extração...");

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
            `📝 Encontrados ${paragrafosTexto.length} parágrafos com classes específicas`
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
                        `📄 P${idx + 1} (${
                            paragrafo.className
                        }): ${textoP.substring(0, 100)}...`
                    );
                }
            });
        } else {
            log("⚠️ Nenhum parágrafo com classes específicas encontrado");
            log("🔍 Tentando extração da seção completa...");

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
            log("❌ Nenhum texto válido encontrado");
            showNotification(
                "❌ Nenhum texto válido encontrado no documento",
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

        log("✅ Texto extraído:", texto.length, "caracteres");
        log("📄 Prévia do texto:", texto.substring(0, 200) + "...");

        if (texto.trim().length < 100) {
            log("⚠️ Texto muito pequeno");
            showNotification("⚠️ Texto extraído é muito pequeno", "warning");
            return null;
        }

        showNotification(
            `✅ Texto extraído: ${texto.length} caracteres`,
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
            log("📋 Texto copiado para clipboard");
            showNotification("📋 Texto copiado para clipboard!", "success");
            return true;
        } catch (error) {
            log("❌ Erro ao copiar:", error);
            showNotification("❌ Erro ao copiar texto", "error");
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

            log("🔍 Debug - Texto que será copiado:");
            log("📏 Tamanho:", textoCompleto.length, "caracteres");
            log(
                "📄 Prévia (primeiros 200 chars):",
                textoCompleto.substring(0, 200)
            );
            log(
                "📄 Final (últimos 200 chars):",
                textoCompleto.substring(textoCompleto.length - 200)
            );

            await navigator.clipboard.writeText(textoCompleto);

            // Verificar se realmente foi copiado
            setTimeout(async () => {
                try {
                    const clipboardContent =
                        await navigator.clipboard.readText();
                    log(
                        "✅ Verificação: Texto no clipboard:",
                        clipboardContent.length,
                        "caracteres"
                    );
                    log(
                        "🔍 Conteúdo real no clipboard:",
                        clipboardContent.substring(0, 200)
                    );

                    if (clipboardContent === textoCompleto) {
                        log("✅ Clipboard confirmado: Texto correto!");
                    } else {
                        log(
                            "❌ ERRO: Texto no clipboard é diferente do enviado!"
                        );
                        log("🔍 Debug diferença:");
                        log("📏 Esperado:", textoCompleto.length, "caracteres");
                        log("📏 Real:", clipboardContent.length, "caracteres");
                        log(
                            "📏 Diferença:",
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
                                "✅ Clipboard OK (apenas caracteres invisíveis diferentes)"
                            );
                        } else {
                            log("❌ Clipboard realmente diferente");
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
                                    log(
                                        `🔍 Primeira diferença na posição ${i}:`
                                    );
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
                    log("⚠️ Não foi possível verificar o clipboard:", e);
                }
            }, 100);

            log(
                `✅ Texto copiado com prefixo (${textoCompleto.length} caracteres)`
            );
            showNotification(
                `✅ Texto copiado com prefixo!\n${textoCompleto.length} caracteres prontos para o ChatGPT`,
                "success"
            );
            return true;
        } catch (error) {
            log("❌ Erro ao copiar texto com prefixo:", error);
            showNotification("❌ Erro ao copiar texto", "error");
            return false;
        }
    }

    // Enviar texto diretamente para Perplexity usando API
    async function sendToChatGPT(texto) {
        const requestId = Date.now().toString();

        try {
            debugApiCall(requestId, "INÍCIO", { textoLength: texto.length });
            log("🤖 Enviando texto para Perplexity via API...");
            showNotification("🤖 Enviando para Perplexity...", "info");

            const apiKey = await getStoredApiKey();
            if (!apiKey) {
                debugApiCall(requestId, "ERRO", "API key não encontrada");
                showNotification("❌ Erro ao obter chave API", "error");
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
                    log("⚠️ Resposta de erro não é JSON válido");
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
                    log("❌ Erro 401:", errorMsg);
                    showNotification(
                        `❌ ${errorMsg}. Configure uma nova chave API do Perplexity.`,
                        "error"
                    );
                    await removeStoredApiKey();
                    return false;
                } else if (response.status === 429) {
                    const rateLimitType =
                        errorJson?.error?.type || "rate_limit_exceeded";
                    const retryAfter = responseHeaders["retry-after"];

                    log("❌ Rate limit:", { type: rateLimitType, retryAfter });

                    if (rateLimitType === "insufficient_quota") {
                        showNotification(
                            "💳 Cota da API Perplexity esgotada. Verifique seus créditos em perplexity.ai/settings/api",
                            "error"
                        );
                    } else {
                        showNotification(
                            `⏳ Limite de requests atingido. Aguarde ${
                                retryAfter || "alguns minutos"
                            } antes de tentar novamente.`,
                            "warning"
                        );
                    }
                    return false;
                } else if (response.status === 403) {
                    const errorMsg =
                        errorJson?.error?.message || "Acesso negado";
                    log("❌ Erro 403:", errorMsg);
                    showNotification(
                        `🚫 ${errorMsg}. Usando método manual...`,
                        "warning"
                    );
                    return await fallbackToManual(texto);
                } else if (response.status >= 500) {
                    log("❌ Erro do servidor Perplexity:", response.status);
                    showNotification(
                        `🔧 Erro do servidor Perplexity (${response.status}). Usando método manual...`,
                        "warning"
                    );
                    return await fallbackToManual(texto);
                } else {
                    const errorMsg =
                        errorJson?.error?.message || `Erro ${response.status}`;
                    log("❌ Erro desconhecido:", errorMsg);
                    showNotification(
                        `❌ ${errorMsg}. Usando método manual...`,
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

            showNotification("✅ Resumo gerado com sucesso!", "success");

            await copyToClipboard(resumo);

            showNotification(
                "🎉 Resumo pronto!\n\nO resumo do documento está na sua área de transferência.",
                "success"
            );

            return true;
        } catch (error) {
            debugApiCall(requestId, "EXCEPTION", {
                errorName: error.name,
                errorMessage: error.message,
                errorStack: error.stack,
            });

            log("❌ Erro ao enviar para Perplexity:", error);
            showNotification(
                "⚠️ Erro de conexão na API. Usando método manual...",
                "warning"
            );

            return await fallbackToManual(texto);
        }
    }

    // Função auxiliar para fallback manual
    async function fallbackToManual(texto) {
        log("🔄 Executando fallback para método manual");
        const copied = await copyToClipboardWithPrefix(texto);
        if (copied) {
            setTimeout(() => {
                autoOpenChatGPT();
                showNotification(
                    "📋 Texto copiado! Cole no ChatGPT (Ctrl+V)",
                    "info"
                );
            }, 500);
        } else {
            log("❌ Falha ao copiar texto no fallback");
            showNotification("❌ Falha ao copiar texto", "error");
        }
        return false;
    }

    // Fallback: Abrir ChatGPT manualmente com clipboard
    function autoOpenChatGPT() {
        log("🤖 Abrindo ChatGPT...");
        showNotification("🤖 Abrindo ChatGPT...", "info");

        try {
            const url = "https://chatgpt.com/";
            const chatWindow = window.open(url, "_blank");

            if (chatWindow) {
                log("✅ ChatGPT aberto com sucesso");
                setTimeout(() => {
                    try {
                        chatWindow.focus();
                        log("✅ ChatGPT focado");
                    } catch (e) {
                        log("⚠️ Não foi possível focar na janela:", e);
                    }
                }, 1000);
            } else {
                log("❌ Falha ao abrir ChatGPT - popup bloqueado?");
                showNotification(
                    "❌ Não foi possível abrir ChatGPT. Verifique se popups estão bloqueados.",
                    "error"
                );
            }
        } catch (error) {
            log("❌ Erro ao abrir ChatGPT:", error);
            showNotification("❌ Erro ao abrir ChatGPT", "error");
        }
    }

    // Gerenciar chave API
    async function getStoredApiKey() {
        let apiKey = localStorage.getItem("perplexity_api_key");

        if (!apiKey) {
            // Chave codificada em Base64 para ofuscação básica
            const encodedKey =
                "cHBseC1LUEFHYXhYZVZ4Yk1wUWJ5QzNCNmpZUERPd1luSk1ka3Mxc0R6YmF1N2s3c05nbUo=";
            apiKey = atob(encodedKey);
            localStorage.setItem("perplexity_api_key", apiKey);
            log("🔑 API key do Perplexity configurada automaticamente");
        }

        return apiKey;
    }

    async function storeApiKey(apiKey) {
        if (!apiKey || !apiKey.startsWith("pplx-")) {
            throw new Error('Chave API inválida. Deve começar com "pplx-"');
        }
        localStorage.setItem("perplexity_api_key", apiKey);
        log("🔑 Chave API do Perplexity armazenada com sucesso");
    }

    async function removeStoredApiKey() {
        localStorage.removeItem("perplexity_api_key");
        log("🗑️ Chave API do Perplexity removida");
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

        // Calcular posição para evitar sair da tela
        const menuWidth = 200;
        const menuHeight = 400; // Estimativa
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

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
        menu.setAttribute("role", "menu");
        menu.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            z-index: 10001;
            min-width: ${menuWidth}px;
            overflow: auto;
            border-radius: 8px;
            border: 1px solid rgb(59 130 246);
            background: #134377;
            padding: 6px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15);
            font-family: system-ui, -apple-system, sans-serif;
        `;

        const pageType = detectPageType();

        if (pageType === "lista_documentos") {
            // Verificar quantos documentos existem para customizar o menu
            const documentosRelevantes = findDocumentosRelevantes();
            const documentCount = documentosRelevantes.length;

            let menuTitle = "Processar Documentos";
            let buttonColor = "#3b82f6";
            let titleIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5,3 19,12 5,21 12,12"/></svg>`;

            if (documentCount === 0) {
                menuTitle = "Nenhum Documento";
                buttonColor = "#ef4444";
                titleIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 6-12 12"/><path d="m6 6 12 12"/></svg>`;
            } else if (documentCount === 1) {
                const doc = documentosRelevantes[0];
                menuTitle = `1 ${doc.tipo.descricao} Encontrada`;
            } else {
                menuTitle = `${documentCount} Documentos Encontrados`;
                buttonColor = "#10b981";
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
                        showDocumentProcessingOptions();
                    } else {
                        runFullAutomation();
                    }
                });
            }
        } else if (pageType === "documento_especifico") {
            menu.innerHTML = `
                <li role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px; font-weight: 600; border-bottom: 1px solid rgb(148 163 184); margin-bottom: 6px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="5,3 19,12 5,21 12,12"/>
                    </svg>
                    API Perplexity (Recomendado)
                </li>
                <li id="manual-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                    </svg>
                    Método Manual
                </li>
                <li id="config-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                    Configurar API
                </li>
                <li id="test-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                    </svg>
                    Testar API Key
                </li>
                <li id="logs-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                        const usePreview = confirm(
                            "Deseja ver o preview do texto antes de copiar?\n\nClique 'OK' para preview ou 'Cancelar' para copiar diretamente."
                        );

                        if (usePreview) {
                            log("👁️ Usuário escolheu preview");
                            showTextPreview(texto);
                        } else {
                            log("⚡ Usuário escolheu cópia direta");
                            const copied = await copyToClipboardWithPrefix(
                                texto
                            );
                            if (copied) {
                                log("✅ Texto copiado, abrindo ChatGPT...");
                                setTimeout(() => {
                                    autoOpenChatGPT();
                                    showNotification(
                                        "🎉 Texto copiado! Cole no ChatGPT (Ctrl+V)",
                                        "success"
                                    );
                                }, 500);
                            } else {
                                log(
                                    "❌ Falha ao copiar texto no método manual direto"
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
        }

        document.body.appendChild(menu);

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
            font-family: system-ui, -apple-system, sans-serif;
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
            log("⚠️ Automação já está ativa");
            return;
        }

        isAutomationActive = true;
        log("🚀 Iniciando automação completa...");

        try {
            const pageType = detectPageType();

            if (pageType === "lista_documentos") {
                const opened = await autoOpenDocumentoRelevante();
                if (opened) {
                    showNotification(
                        "✅ Documento aberto! Aguarde carregar e execute novamente na nova aba",
                        "success"
                    );
                }
            } else if (pageType === "documento_especifico") {
                const texto = await autoExtractText();
                if (texto) {
                    const apiSent = await sendToChatGPT(texto);

                    if (!apiSent) {
                        log(
                            "⚠️ API falhou, usando método de clipboard como fallback"
                        );
                        showNotification(
                            "⚠️ Tentando método alternativo...",
                            "warning"
                        );

                        const copied = await copyToClipboardWithPrefix(texto);
                        if (copied) {
                            setTimeout(() => {
                                autoOpenChatGPT();
                                showNotification(
                                    "🎉 Texto copiado! Cole no ChatGPT (Ctrl+V)\n\nO texto já inclui o prefixo de instrução para IA",
                                    "success"
                                );
                            }, 2000);
                        }
                    }
                }
            } else {
                showNotification(
                    "❌ Página não reconhecida. Use na página do processo ou documento",
                    "error"
                );
            }
        } catch (error) {
            log("❌ Erro na automação:", error);
            showNotification("❌ Erro na automação: " + error.message, "error");
        } finally {
            isAutomationActive = false;
        }
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

        const notification = document.createElement("div");
        notification.id = "documento-relevante-notification";
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${
                type === "error"
                    ? "#dc3545"
                    : type === "warning"
                    ? "#ffc107"
                    : type === "success"
                    ? "#28a745"
                    : "#007bff"
            };
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            font-weight: bold;
            z-index: 10000;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            max-width: 300px;
            font-size: 14px;
            line-height: 1.4;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Remover após 5 segundos
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    // Criar botão de automação integrado na página
    function createAutomationButton() {
        console.log("🔧 Tentando criar botão integrado...");

        // Verificar se já existe
        if (document.getElementById("documento-relevante-auto-button")) {
            console.log("⚠️ Botão já existe, pulando criação");
            return;
        }

        // Verificar se a página é válida para mostrar o botão
        if (!isValidPageForButton()) {
            console.log(
                "⚠️ Página não é válida para o botão, cancelando criação"
            );
            return;
        }

        // Buscar container principal para integração
        const targetInfo = findTargetContainer();

        if (!targetInfo) {
            console.log(
                "⚠️ Container alvo não encontrado, usando posição fixa como fallback"
            );
            createFloatingButton();
            return;
        }

        // Extrair informações do container
        const targetContainer = targetInfo.container || targetInfo;
        const insertMethod = targetInfo.insertMethod || "append";
        const referenceElement = targetInfo.referenceElement;

        console.log("✅ Container encontrado, criando botão integrado...");
        const button = document.createElement("button");
        button.id = "documento-relevante-auto-button";
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px; vertical-align: middle;">
                <path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"/>
                <path d="M16.5 7.5 19 5"/>
                <path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"/>
                <path d="M9 21a6 6 0 0 0-6-6"/>
                <path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"/>
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

            log("🔧 Botão integrado clicado!");
            console.log("🔧 Debug: Botão RESUMIR DOCUMENTO clicado");

            // Adicionar feedback visual
            button.style.transform = "scale(0.95)";
            setTimeout(() => {
                button.style.transform = "";
            }, 150);

            const pageType = detectPageType();
            log("📄 Tipo de página detectado:", pageType);

            if (pageType === "lista_documentos") {
                showNotification("🚀 Abrindo documento...", "info");
                await runFullAutomation();
            } else if (pageType === "documento_especifico") {
                const rect = button.getBoundingClientRect();
                showOptionsMenu(rect.left, rect.bottom);
            } else {
                showNotification("❌ Página não reconhecida", "error");
            }
        });

        // Inserir no container usando o método apropriado
        if (insertMethod === "beforeDownload" && referenceElement) {
            try {
                console.log(
                    "🎯 Inserindo botão antes do Download Completo na barra de comandos..."
                );
                console.log(
                    "🎯 Reference element (Download button):",
                    referenceElement
                );
                console.log("🎯 Container (form):", targetContainer);

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
                    "✅ Botão inserido com sucesso antes do Download Completo"
                );
                console.log(
                    "✅ Posição final do botão:",
                    button.parentElement.parentElement
                );
            } catch (error) {
                console.log(
                    "⚠️ Erro ao inserir antes do Download Completo, usando fallback:",
                    error
                );
                // Fallback: inserir no início do container
                targetContainer.insertBefore(
                    button,
                    targetContainer.firstChild
                );
                console.log(
                    "✅ Botão inserido no início do container (fallback)"
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
            console.log("✅ Botão inserido no início do container");
        } else if (insertMethod === "beforePDPJ" && referenceElement) {
            try {
                // Estratégia 1: Inserir diretamente ao lado esquerdo da imagem usando insertAdjacentElement
                console.log(
                    "🎯 Tentando posicionar ao lado esquerdo da imagem PDPJ..."
                );
                console.log("🎯 Reference element:", referenceElement);
                console.log(
                    "🎯 Reference element tagName:",
                    referenceElement.tagName
                );
                console.log(
                    "🎯 Reference element parent:",
                    referenceElement.parentElement
                );

                // Usar insertAdjacentElement para posicionar exatamente ao lado esquerdo
                referenceElement.insertAdjacentElement("beforebegin", button);

                // Verificação final: garantir que o botão não está dentro de um link
                const buttonParent = button.parentElement;
                const isInsideLink = button.closest("a") !== null;

                if (isInsideLink) {
                    console.log(
                        "⚠️ PROBLEMA: Botão foi inserido dentro de um link!"
                    );
                    console.log("⚠️ Tentando mover para fora do link...");

                    // Encontrar o link pai
                    const linkElement = button.closest("a");
                    const linkContainer = linkElement.parentElement;

                    // Remover botão do local atual
                    button.remove();

                    // Inserir antes do link
                    linkContainer.insertBefore(button, linkElement);
                    console.log("✅ Botão movido para fora do link");
                }

                console.log(
                    "✅ Botão inserido ao lado esquerdo da imagem PDPJ"
                );
                console.log("✅ Posição final do botão:", button.parentElement);
                console.log(
                    "✅ Botão está dentro de link?",
                    button.closest("a") !== null ? "SIM" : "NÃO"
                );
            } catch (error) {
                console.log(
                    "⚠️ Erro ao inserir ao lado da imagem PDPJ, tentando estratégias alternativas:",
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
                        console.log("✅ Botão inserido antes da imagem PDPJ");
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
                                "✅ Botão inserido antes da imagem PDPJ (no pai direto)"
                            );
                        } else {
                            // Estratégia 4: Fallback - adicionar no final do container encontrado
                            targetContainer.appendChild(button);
                            console.log(
                                "✅ Botão adicionado ao container (fallback)"
                            );
                        }
                    }
                } catch (secondError) {
                    console.log(
                        "⚠️ Erro na segunda tentativa, usando fallback final:",
                        secondError
                    );
                    // Fallback final: adicionar no final do container
                    targetContainer.appendChild(button);
                    console.log(
                        "✅ Botão adicionado ao container (fallback final)"
                    );
                }
            }
        } else {
            // Método padrão - adicionar ao final do container
            targetContainer.appendChild(button);
            console.log(
                "✅ Botão integrado adicionado ao container:",
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
            console.log(
                "✅ Barra de comandos superior encontrada:",
                commandBar
            );

            // Procurar pelo formulário que contém o botão "Download Completo"
            const processForm = commandBar.querySelector("#frmProcessoLista");
            if (processForm) {
                console.log(
                    "✅ Formulário do processo encontrado:",
                    processForm
                );

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
                            `✅ Botão Download Completo encontrado com seletor: ${selector}`,
                            downloadButton
                        );
                        break;
                    }
                }

                // Se não encontrou, buscar por texto nos botões
                if (!downloadButton) {
                    console.log(
                        "🔍 Buscando botão Download Completo por texto..."
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
                                "✅ Botão Download Completo encontrado por texto:",
                                downloadButton
                            );
                            break;
                        }
                    }
                }

                if (downloadButton) {
                    console.log(
                        "✅ Inserindo antes do botão Download Completo na barra de comandos"
                    );
                    return {
                        container: processForm,
                        insertMethod: "beforeDownload",
                        referenceElement: downloadButton,
                    };
                } else {
                    // Se não encontrou o botão Download, inserir no início do formulário
                    console.log(
                        "⚠️ Botão Download Completo não encontrado, inserindo no início do formulário"
                    );
                    return {
                        container: processForm,
                        insertMethod: "prepend",
                    };
                }
            } else {
                // Se não encontrou o formulário, buscar diretamente na barra de comandos
                console.log(
                    "⚠️ Formulário não encontrado, buscando Download Completo diretamente na barra..."
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
                            `✅ Botão Download encontrado na barra: ${selector}`,
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
                            "✅ Botão Download encontrado por texto na barra:",
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
                    "⚠️ Botão Download não encontrado, inserindo na barra de comandos"
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
                "✅ Imagem PDPJ encontrada, buscando container pai adequado"
            );

            // Verificar se a imagem está dentro de um link <a>
            const linkParent = pdpjImage.closest("a");
            if (linkParent) {
                console.log(
                    "🔗 Imagem PDPJ está dentro de um link:",
                    linkParent
                );
                console.log(
                    "🔗 Link src/href:",
                    linkParent.href || linkParent.getAttribute("href")
                );
                const linkContainer = linkParent.parentElement;
                if (linkContainer) {
                    console.log("🔗 Container do link:", linkContainer);
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
                console.log(
                    "✅ Usando pai direto da imagem PDPJ:",
                    directParent
                );
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
                        "✅ Container da navbar/header encontrado para PDPJ:",
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
            console.log("✅ Usando container pai direto da imagem PDPJ");
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
                        `✅ Container navbar encontrado com seletor: ${selector}`
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
                console.log(`✅ Container encontrado com seletor: ${selector}`);
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
                    console.log(
                        `✅ Container fallback encontrado: ${selector}`
                    );
                    return { container: container, insertMethod: "append" };
                }
            }
        }

        console.log("❌ Nenhum container adequado encontrado");
        return null;
    }

    // Função de fallback para criar botão flutuante (caso container não seja encontrado)
    function createFloatingButton() {
        // Verificar se a página é válida para mostrar o botão
        if (!isValidPageForButton()) {
            console.log(
                "⚠️ Página não é válida para o botão flutuante, cancelando criação"
            );
            return;
        }

        console.log("✅ Criando botão flutuante como fallback...");
        const button = document.createElement("button");
        button.id = "sent1-auto-button";
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px; vertical-align: middle;">
                <path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"/>
                <path d="M16.5 7.5 19 5"/>
                <path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"/>
                <path d="M9 21a6 6 0 0 0-6-6"/>
                <path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"/>
            </svg>
            Resumir Documento
        `;

        // Usar estilo customizado próprio para o botão flutuante
        button.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            z-index: 99999;
            background-color: #134377;
            border: 1px solid #134377;
            color: white;
            padding: 8px 16px;
            border-radius: 4px;
            font-family: Arial, sans-serif;
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

            log("🔧 Botão flutuante clicado!");
            console.log("🔧 Debug: Botão RESUMIR DOCUMENTO clicado");

            const pageType = detectPageType();
            log("📄 Tipo de página detectado:", pageType);

            if (pageType === "lista_documentos") {
                showNotification("🚀 Abrindo documento...", "info");
                await runFullAutomation();
            } else if (pageType === "documento_especifico") {
                const rect = button.getBoundingClientRect();
                showOptionsMenu(rect.left, rect.bottom);
            } else {
                showNotification("❌ Página não reconhecida", "error");
            }
        });

        document.body.appendChild(button);
        console.log("✅ Botão flutuante adicionado ao DOM");
    }

    // Debug: verificar se o botão foi criado
    function debugButtonStatus() {
        setTimeout(() => {
            const button = document.getElementById("sent1-auto-button");
            if (button) {
                console.log("✅ Botão RESUMIR DOCUMENTO encontrado:", button);
                const isFloating = button.style.position === "fixed";
                console.log(
                    "📍 Tipo de botão:",
                    isFloating ? "Flutuante" : "Integrado"
                );

                if (isFloating) {
                    console.log("📍 Posição do botão flutuante:", {
                        top: button.style.top,
                        right: button.style.right,
                        zIndex: button.style.zIndex,
                        display: getComputedStyle(button).display,
                        visibility: getComputedStyle(button).visibility,
                    });
                } else {
                    console.log("📍 Informações do botão integrado:", {
                        parentElement: button.parentElement?.tagName,
                        parentClass: button.parentElement?.className,
                        display: getComputedStyle(button).display,
                        visibility: getComputedStyle(button).visibility,
                    });
                }
            } else {
                console.log("❌ Botão RESUMIR DOCUMENTO NÃO encontrado!");
            }
        }, 2000);
    }

    // Debug avançado da API com logging estruturado
    function debugApiCall(requestId, phase, data) {
        if (!debugMode) return;

        const timestamp = new Date().toISOString();
        const phaseColors = {
            INÍCIO: "🚀",
            REQUEST: "📤",
            RESPONSE_HEADERS: "📥",
            SUCCESS: "✅",
            ERROR_DETAILS: "❌",
            EXCEPTION: "💥",
            TEST_START: "🔍",
            TEST_RESPONSE: "📊",
            TEST_SUCCESS: "✅",
            TEST_ERROR: "❌",
        };

        const icon = phaseColors[phase] || "📋";

        console.group(`${icon} API Debug [ID: ${requestId}] - ${phase}`);
        console.log("⏰ Timestamp:", timestamp);

        if (phase === "REQUEST") {
            console.log("🌐 URL:", data.url);
            console.log("🤖 Model:", data.model);
            console.log("� Prompt Length:", data.promptLength);
            console.log("🎯 Max Tokens:", data.maxTokens);
        } else if (phase === "RESPONSE_HEADERS") {
            console.log("�📊 Status:", data.status, data.statusText);
            console.log("🆔 Request ID:", data.requestId);
            if (data.rateLimit) {
                console.log("⏱️ Rate Limits:");
                console.table(data.rateLimit);
            }
        } else if (phase === "SUCCESS") {
            console.log("🆔 Response ID:", data.responseId);
            console.log("🤖 Model Used:", data.model);
            console.log("📊 Usage:", data.usage);
            console.log("🏁 Finish Reason:", data.choices?.[0]?.finish_reason);
            console.log(
                "📏 Response Length:",
                data.choices?.[0]?.message?.content?.length
            );
        } else if (phase === "ERROR_DETAILS") {
            console.log("❌ Status:", data.status, data.statusText);
            console.log("📄 Error Text:", data.errorText);
            if (data.errorJson) {
                console.log("🔍 Error JSON:", data.errorJson);
            }
        } else if (phase === "EXCEPTION") {
            console.log("💥 Error Name:", data.errorName);
            console.log("📄 Error Message:", data.errorMessage);
            console.log("📚 Stack Trace:", data.errorStack);
        } else if (phase === "TEST_SUCCESS") {
            console.log("📊 Total Models:", data.totalModels);
            console.log("🤖 GPT Models:", data.gptModels);
            console.log("🏢 Organization:", data.organization);
            console.log("🚀 Has GPT-4:", data.hasGpt4);
        } else {
            console.log("📊 Data:", data);
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
                showNotification("❌ Nenhuma API key configurada", "error");
                return false;
            }

            log("🔑 Testando API key...");

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

                log("✅ API key válida! Modelo usado:", data.model || "sonar");

                debugApiCall(testId, "TEST_SUCCESS", {
                    model: data.model,
                    usage: data.usage,
                    responseContent: data.choices?.[0]?.message?.content,
                });

                showNotification(
                    `✅ API key válida!\nModelo: ${data.model || "sonar"}`,
                    "success"
                );
                return true;
            } else {
                const errorData = await response.text();
                let errorJson = null;

                try {
                    errorJson = JSON.parse(errorData);
                } catch (e) {
                    log("⚠️ Erro de resposta não é JSON válido");
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
                    showNotification(`🔑 ${errorMsg}`, "error");
                    await removeStoredApiKey();
                } else if (response.status === 429) {
                    const rateLimitType =
                        errorJson?.error?.type || "rate_limit_exceeded";

                    if (rateLimitType === "insufficient_quota") {
                        showNotification(
                            "💳 Cota da API Perplexity esgotada. Verifique em perplexity.ai/settings/api",
                            "error"
                        );
                        await removeStoredApiKey();
                    } else {
                        showNotification(
                            `⏳ Rate limit atingido no teste da API`,
                            "warning"
                        );
                    }
                } else if (response.status === 403) {
                    showNotification(
                        "🚫 Acesso negado. Verifique créditos da conta",
                        "error"
                    );
                } else {
                    const errorMsg =
                        errorJson?.error?.message || `Erro ${response.status}`;
                    showNotification(`❌ ${errorMsg}`, "error");
                }
                return false;
            }
        } catch (error) {
            log("❌ Erro de conexão no teste:", error);
            showNotification("🌐 Erro de conexão com Perplexity", "error");
            return false;
        }
    }

    // Mostrar modal para seleção de múltiplos documentos relevantes
    function showDocumentSelectionModal(documentosRelevantes) {
        log(
            "🔍 DEBUG MODAL: Recebido documentosRelevantes:",
            documentosRelevantes
        );
        log("🔍 DEBUG MODAL: Detalhes de cada documento:");
        documentosRelevantes.forEach((doc, i) => {
            log(`  DOC${i + 1}:`, {
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

                log(`🔍 DEBUG OPTION ${index + 1}:`, {
                    seqEvento,
                    tipoInfo,
                    eventoDesc,
                    tamanhoInfo,
                    original_eventoDescricao: documento.eventoDescricao,
                });

                documentOptions += `
                    <div style="margin-bottom: 12px; padding: 16px; border: 1px solid rgba(82, 82, 82, 0.3); border-radius: 8px; background: rgb(32, 39, 51); cursor: pointer; transition: all 0.2s ease; color: rgb(243, 246, 249);" 
                         class="document-option" data-index="${index}">
                        <div style="font-weight: 600; color: rgb(243, 246, 249); margin-bottom: 8px; display: flex; align-items: center; gap: 8px; font-size: 14px;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; color: rgb(101, 171, 255);">
                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                                <polyline points="14,2 14,8 20,8"/>
                                <line x1="16" y1="13" x2="8" y2="13"/>
                                <line x1="16" y1="17" x2="8" y2="17"/>
                                <polyline points="10,9 9,9 8,9"/>
                            </svg>
                            ${tipoInfo} - ${seqEvento}
                        </div>
                        <div style="font-size: 13px; color: rgb(101, 171, 255); margin-bottom: 6px; font-weight: 500; display: flex; align-items: center; gap: 8px;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                                <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                            </svg>
                            ${eventoDesc}
                        </div>
                        <div style="font-size: 12px; color: rgb(136, 152, 181); display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                            </svg>
                            Documento: ${documento.tipo}${
                    documento.index
                }${tamanhoInfo}
                        </div>
                        <div style="font-size: 11px; color: rgb(136, 152, 181); opacity: 0.8; display: flex; align-items: center; gap: 8px;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                            </svg>
                            ID: ${documento.eventoId.substring(0, 20)}...
                        </div>
                    </div>
                `;
            });

            modal.innerHTML = `
                <div style="background: rgb(19, 67, 119); border-radius: 8px; padding: 24px; max-width: 620px; width: 90%; max-height: 80%; overflow-y: auto; box-shadow: 0 8px 32px rgba(0,0,0,0.5); border: 1px solid rgba(82, 82, 82, 0.3);">
                    <div style="margin-bottom: 20px; text-align: center; border-bottom: 1px solid rgba(82, 82, 82, 0.3); padding-bottom: 16px;">
                        <h2 style="margin: 0; color: rgb(243, 246, 249); font-size: 18px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 10px; letter-spacing: -0.025em;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: rgb(101, 171, 255);">
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
                        option.style.borderColor = "rgba(101, 171, 255, 0.6)";
                        option.style.background = "rgb(47, 52, 61)";
                        option.style.transform = "translateY(-1px)";
                        option.style.boxShadow =
                            "0 4px 12px rgba(101, 171, 255, 0.25)";
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
                            `✅ Documento selecionado: ${selectedDocument.eventoDescricao} - Evento ${selectedDocument.seqEvento}`
                        );
                        showNotification(
                            `✅ Documento selecionado: ${selectedDocument.eventoDescricao}`,
                            "success"
                        );

                        modal.remove();
                        resolve(selectedDocument);
                    });
                });

            // Evento do botão cancelar
            modal
                .querySelector("#cancel-selection")
                .addEventListener("mouseover", () => {
                    modal.querySelector(
                        "#cancel-selection"
                    ).style.backgroundColor = "rgb(153, 40, 0)";
                });

            modal
                .querySelector("#cancel-selection")
                .addEventListener("mouseout", () => {
                    modal.querySelector(
                        "#cancel-selection"
                    ).style.backgroundColor = "rgb(32, 39, 51)";
                });

            modal
                .querySelector("#cancel-selection")
                .addEventListener("click", () => {
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
            <div style="background: rgb(19, 67, 119); border-radius: 8px; padding: 24px; max-width: 520px; width: 90%; box-shadow: 0 8px 32px rgba(0,0,0,0.5); border: 1px solid rgba(82, 82, 82, 0.3);">
                <div style="margin-bottom: 20px; text-align: center; border-bottom: 1px solid rgba(82, 82, 82, 0.3); padding-bottom: 16px;">
                    <h2 style="margin: 0; color: rgb(243, 246, 249); font-size: 18px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 10px; letter-spacing: -0.025em;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: rgb(101, 171, 255);">
                            <circle cx="12" cy="16" r="1"/>
                            <rect x="3" y="10" width="18" height="12" rx="2"/>
                            <path d="M7 10V7a5 5 0 0 1 10 0v3"/>
                        </svg>
                        Configurar API Key do Perplexity
                    </h2>
                </div>
                
                <div style="margin-bottom: 20px; padding: 16px; background: rgb(32, 39, 51); border-radius: 8px; font-size: 13px; line-height: 1.5; color: rgb(243, 246, 249); border: 1px solid rgba(82, 82, 82, 0.3);">
                    <strong style="color: rgb(101, 171, 255);">Como obter sua API Key do Perplexity:</strong><br>
                    1. Acesse: <a href="https://www.perplexity.ai/settings/api" target="_blank" style="color: rgb(101, 171, 255); text-decoration: none;">www.perplexity.ai/settings/api</a><br>
                    2. Faça login na sua conta Perplexity<br>
                    3. Clique em "Generate" para criar uma nova chave<br>
                    4. Copie a chave e cole abaixo
                </div>

                <div style="margin-bottom: 16px;">
                    <label style="display: block; margin-bottom: 6px; font-weight: 500; color: rgb(243, 246, 249); font-size: 13px;">API Key:</label>
                    <input type="password" id="api-key-input" placeholder="pplx-..." style="width: 100%; padding: 10px 12px; border: 1px solid rgba(82, 82, 82, 0.5); border-radius: 8px; font-family: monospace; background: rgb(32, 39, 51); color: rgb(243, 246, 249); font-size: 14px; transition: all 0.2s ease;" value="${
                        currentKey || ""
                    }" />
                </div>

                <div style="margin-bottom: 20px; padding: 12px; background: rgba(251, 191, 36, 0.1); border: 1px solid rgba(251, 191, 36, 0.3); border-radius: 8px; font-size: 12px; display: flex; align-items: flex-start; gap: 8px; color: rgb(251, 191, 36);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 1px;">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                        <path d="M12 9v4"/>
                        <path d="m12 17 .01 0"/>
                    </svg>
                    <span>Sua API Key é armazenada apenas localmente no seu navegador e não é compartilhada.</span>
                </div>

                <div style="text-align: center; display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
                    <button id="save-key" style="background: rgb(34, 197, 94); color: white; border: 1px solid rgb(34, 197, 94); padding: 12px 16px; border-radius: 8px; cursor: pointer; font-weight: 500; font-size: 14px; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s ease;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20,6 9,17 4,12"/>
                        </svg>
                        Salvar e Testar
                    </button>
                    <button id="remove-key" style="background: rgb(220, 38, 38); color: white; border: 1px solid rgb(220, 38, 38); padding: 12px 16px; border-radius: 8px; cursor: pointer; font-weight: 500; font-size: 14px; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s ease;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="3,6 5,6 21,6"/>
                            <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"/>
                        </svg>
                        Remover
                    </button>
                    <button id="cancel-config" style="background: rgb(32, 39, 51); color: rgb(243, 246, 249); border: 1px solid rgba(82, 82, 82, 0.5); padding: 12px 16px; border-radius: 8px; cursor: pointer; font-weight: 500; font-size: 14px; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s ease;">
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
            input.style.borderColor = "rgb(101, 171, 255)";
            input.style.boxShadow = "0 0 0 3px rgba(101, 171, 255, 0.1)";
        });

        input.addEventListener("blur", () => {
            input.style.borderColor = "rgba(82, 82, 82, 0.5)";
            input.style.boxShadow = "none";
        });

        input.focus();

        saveBtn.addEventListener("click", async () => {
            const newKey = input.value.trim();

            if (!newKey) {
                showNotification("❌ Digite uma API key", "error");
                return;
            }

            if (!(await validateApiKey(newKey))) {
                showNotification(
                    "❌ API key inválida. Deve começar com 'pplx-'",
                    "error"
                );
                return;
            }

            try {
                await storeApiKey(newKey);
                modal.remove();

                showNotification("🔑 Testando API key...", "info");

                const isValid = await testApiKey();
                if (isValid) {
                    showNotification(
                        "✅ API key configurada e validada!",
                        "success"
                    );
                } else {
                    showNotification(
                        "⚠️ API key salva, mas pode não estar funcionando",
                        "warning"
                    );
                }
            } catch (error) {
                showNotification(`❌ Erro: ${error.message}`, "error");
            }
        });

        removeBtn.addEventListener("click", async () => {
            await removeStoredApiKey();
            modal.remove();
            showNotification("🗑️ API key removida!", "info");
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: rgb(101, 171, 255);">
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
                <div style="font-family: 'Courier New', monospace; font-size: 12px; line-height: 1.4; color: rgb(243, 246, 249);">
                    ${logs
                        .map(
                            (log, i) => `
                        <div style="margin-bottom: 16px; padding: 12px; border: 1px solid rgba(82, 82, 82, 0.3); border-radius: 8px; background: rgb(32, 39, 51);">
                            <strong style="color: rgb(101, 171, 255);">Log ${
                                i + 1
                            } - ${log.timestamp}</strong><br>
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
                    <h2 style="margin: 0; color: #dc3545; font-size: 20px;">💳 Créditos da API Esgotados</h2>
                </div>
                
                <div style="margin-bottom: 20px; font-size: 14px; line-height: 1.6;">
                    <p><strong>Sua API key do Perplexity não possui créditos suficientes.</strong></p>
                    
                    <p><strong>Para resolver:</strong></p>
                    <ol>
                        <li>Acesse: <a href="https://www.perplexity.ai/settings/api" target="_blank" style="color: #007bff;">perplexity.ai/settings/api</a></li>
                        <li>Verifique seus créditos e limites</li>
                        <li>Se necessário, adicione créditos à sua conta</li>
                        <li>Ou aguarde a renovação dos créditos</li>
                    </ol>
                    
                    <p><strong>Alternativa:</strong> Use o método manual que copia o texto para você colar no ChatGPT web.</p>
                </div>

                <div style="text-align: center;">
                    <button id="open-billing" style="background: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px; cursor: pointer; font-weight: bold;">
                        💳 Abrir Configurações
                    </button>
                    <button id="config-new-key" style="background: #28a745; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px; cursor: pointer; font-weight: bold;">
                        🔑 Nova API Key
                    </button>
                    <button id="close-quota-info" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-weight: bold;">
                        ❌ Fechar
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
        const sent1Links = findSENT1Links();

        if (sent1Links.length === 0) {
            showNotification("❌ Nenhuma sentença encontrada", "error");
            return;
        }

        if (sent1Links.length === 1) {
            // Apenas uma sentença, abrir diretamente
            await autoOpenSENT1();
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
        const processChoice = confirm(
            "Como deseja processar o documento selecionado?\n\n" +
                "✅ OK = Abrir documento para processamento manual\n" +
                "❌ Cancelar = Processar diretamente via API (experimental)"
        );

        if (processChoice) {
            // Abrir o documento selecionado
            log("🚀 Abrindo documento selecionado:", selectedDocument.href);
            showNotification("🚀 Abrindo documento selecionado...", "info");
            window.open(selectedDocument.href, "_blank");
        } else {
            // Processar diretamente via API (funcionalidade experimental)
            showNotification(
                "🔬 Processamento direto via API ainda não implementado. Abrindo documento...",
                "warning"
            );
            window.open(selectedDocument.href, "_blank");
        }
    }

    // Debug completo da estrutura HTML ao redor do link SENT1
    function debugEventStructure(linkElement) {
        log("🔍 === DEBUG ESTRUTURA HTML ===");

        // 1. Informações sobre o próprio link
        log("📎 Link SENT1:");
        log(`  Texto: "${linkElement.textContent.trim()}"`);
        log(`  Classes: "${linkElement.className}"`);
        log(`  Atributos:`, {
            href: linkElement.getAttribute("href"),
            onclick: linkElement.getAttribute("onclick"),
            onmouseover: linkElement.getAttribute("onmouseover"),
            "data-nome": linkElement.getAttribute("data-nome"),
            "data-id": linkElement.getAttribute("data-id"),
        });

        // 2. Analisar a linha (tr) que contém o link
        const currentRow = linkElement.closest("tr");
        if (currentRow) {
            log("📋 Linha atual (TR):");
            log(`  Classes da linha: "${currentRow.className}"`);

            const cells = currentRow.querySelectorAll("td");
            log(`  Total de células: ${cells.length}`);

            cells.forEach((cell, index) => {
                const text = cell.textContent.trim();
                log(
                    `  Célula ${index}: "${text}" (classes: "${cell.className}")`
                );

                // Verificar se tem elementos filhos interessantes
                const labels = cell.querySelectorAll("label");
                const spans = cell.querySelectorAll("span");
                const divs = cell.querySelectorAll("div");

                if (labels.length > 0) {
                    labels.forEach((label, i) => {
                        log(
                            `    Label ${i}: "${label.textContent.trim()}" (classes: "${
                                label.className
                            }")`
                        );
                    });
                }
                if (spans.length > 0) {
                    spans.forEach((span, i) => {
                        log(
                            `    Span ${i}: "${span.textContent.trim()}" (classes: "${
                                span.className
                            }")`
                        );
                    });
                }
                if (divs.length > 0) {
                    divs.forEach((div, i) => {
                        log(
                            `    Div ${i}: "${div.textContent.trim()}" (classes: "${
                                div.className
                            }")`
                        );
                    });
                }
            });
        }

        // 3. Analisar linhas anteriores
        log("📋 Linhas anteriores:");
        let prevRow = currentRow?.previousElementSibling;
        let rowCount = 0;
        while (prevRow && rowCount < 3) {
            rowCount++;
            const prevCells = prevRow.querySelectorAll("td");
            log(`  Linha anterior ${rowCount}: ${prevCells.length} células`);

            prevCells.forEach((cell, index) => {
                const text = cell.textContent.trim();
                if (text.length > 10) {
                    log(`    Célula ${index}: "${text.substring(0, 100)}..."`);
                }
            });

            prevRow = prevRow.previousElementSibling;
        }

        // 4. Analisar a tabela completa
        const table = linkElement.closest("table");
        if (table) {
            log("📊 Tabela:");
            log(`  Classes da tabela: "${table.className}"`);
            log(`  ID da tabela: "${table.id}"`);

            // Procurar por cabeçalhos
            const headers = table.querySelectorAll("th");
            if (headers.length > 0) {
                log("  Cabeçalhos encontrados:");
                headers.forEach((header, index) => {
                    log(`    Header ${index}: "${header.textContent.trim()}"`);
                });
            }
        }

        log("🔍 === FIM DEBUG ESTRUTURA ===");
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
                log(`🔍 Executando estratégia ${i + 1} para descrição...`);
                const result = strategies[i]();
                if (result && result.trim().length > 3) {
                    log(`✅ Estratégia ${i + 1} bem-sucedida:`, result);
                    return result.trim();
                }
            } catch (e) {
                log(`❌ Erro na estratégia ${i + 1}:`, e);
            }
        }

        log("❌ Nenhuma estratégia encontrou descrição válida");
        return "";
    }

    // Estratégia 1: Buscar na mesma linha do link
    function findEventDescriptionInSameRow(linkElement) {
        const currentRow = linkElement.closest("tr");
        if (!currentRow) return "";

        log("📍 Buscando na linha atual...");

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
                    log(`✅ Encontrado via seletor ${selector}:`, text);
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

        log("📍 Buscando em linhas anteriores...");

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
                            `✅ Encontrado em linha anterior (${attempts}):`,
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

        log("📍 Buscando por padrões de texto...");

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
                            log(`✅ Encontrado por padrão "${pattern}":`, text);
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

        log("📍 Analisando estrutura da tabela...");

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
                        `✅ Encontrado na estrutura da tabela (célula ${i}):`,
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
        log("📍 Buscando por proximidade...");

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
                    log(`✅ Encontrado por proximidade:`, text);
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
                console.log("🔄 Navegação detectada:", currentUrl);
                lastUrl = currentUrl;

                // Recriar botão após navegação apenas em páginas válidas
                setTimeout(() => {
                    if (
                        !document.getElementById("sent1-auto-button") &&
                        isValidPageForButton()
                    ) {
                        console.log("🔄 Recriando botão após navegação...");
                        createAutomationButton();
                    } else if (!isValidPageForButton()) {
                        console.log("🔄 Nova página não é válida para o botão");
                    }
                }, 1500);
            }

            // Verificar se o botão ainda existe no DOM
            const buttonExists = document.getElementById("sent1-auto-button");
            if (!buttonExists) {
                // Verificar se a página é válida antes de recriar o botão
                if (isValidPageForButton()) {
                    console.log("🔄 Botão removido do DOM, recriando...");
                    setTimeout(createAutomationButton, 500);
                } else {
                    console.log(
                        "🔄 Página não é válida para o botão, não recriando"
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
                console.log("🔄 Popstate detectado, verificando botão...");
                if (
                    !document.getElementById("sent1-auto-button") &&
                    isValidPageForButton()
                ) {
                    createAutomationButton();
                } else if (!isValidPageForButton()) {
                    console.log("🔄 Página atual não é válida para o botão");
                }
            }, 1000);
        });
    }

    // Inicialização
    function init() {
        log("🚀 Iniciando content script automatizado");
        console.log("🚀 RESUMIR DOCUMENTO: Script iniciado");

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
            if (!document.getElementById("sent1-auto-button")) {
                console.log("🔄 Segunda tentativa de criação do botão...");
                createAutomationButton();
            }
        }, 3000);

        // Debug do botão
        debugButtonStatus();
    }

    // Inicializar
    init();

    // Expor funções para debug manual
    window.SENT1_AUTO = {
        runFullAutomation,
        autoOpenSENT1,
        autoExtractText,
        copyToClipboard,
        sendToChatGPT,
        autoOpenChatGPT,
        detectPageType,
        isValidPageForButton,
        findSENT1Links,
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
    };
})();
