// Content script automatizado para SENT1
(function () {
    "use strict";

    let debugMode = true;
    let isAutomationActive = false;

    function log(message, ...args) {
        if (debugMode) {
            console.log("🤖 AUTOMAÇÃO SENT1:", message, ...args);
        }
    }

    // Detectar tipo de página
    function detectPageType() {
        const url = window.location.href;

        if (url.includes("processo_selecionar")) {
            return "lista_documentos";
        } else if (
            url.includes("acessar_documento") ||
            url.includes("processo_consultar_externo_documento")
        ) {
            return "documento_especifico";
        }

        return "desconhecida";
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
    } // Encontrar links SENT1 com informações detalhadas
    function findSENT1Links() {
        const pageType = detectPageType();
        log(`📍 Tipo de página detectado: ${pageType}`);

        const links = document.querySelectorAll(
            'a.infraLinkDocumento[data-nome="SENT"], a[data-nome="SENT"]'
        );
        log("📄 Links SENT encontrados:", links.length);

        const sent1LinksData = [];

        // PRIMEIRA ETAPA: Coletar informações básicas dos links SENT1
        links.forEach((link, i) => {
            const texto = link.textContent.trim();
            const href = link.getAttribute("href");

            log(`📋 SENT ${i + 1}:`, {
                texto: texto,
                href: href,
                dataId: link.getAttribute("data-id"),
                onClick: link.getAttribute("onclick"),
                element: link,
            });

            if (texto === "SENT1" || texto.includes("SENT1")) {
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
                sent1LinksData.push({
                    element: link,
                    href: href,
                    texto: texto,
                    eventoId: eventoMatch?.[1] || "",
                    docId: docMatch?.[1] || "",
                    seqEvento: seqEvento || seqEventoMatch?.[1] || "",
                    tipoDocumento: tipoDocumento || "SENTENÇA",
                    tamanho: tamanho || "",
                    index: i + 1,
                });

                log("🎯 SENT1 encontrado!", {
                    index: i + 1,
                    url: href,
                    eventoId: eventoMatch?.[1],
                    seqEvento: seqEvento,
                    tipoDocumento: tipoDocumento,
                    tamanho: tamanho,
                });
            }
        });

        // SEGUNDA ETAPA: Se estivermos na página da lista de documentos, buscar as descrições dos eventos
        if (pageType === "lista_documentos" && sent1LinksData.length > 0) {
            log(
                "🔍 Página da lista de documentos detectada - buscando descrições dos eventos..."
            );

            // Para cada link SENT1, encontrar a descrição na mesma linha (tr)
            sent1LinksData.forEach((linkData, index) => {
                log(`🔍 Buscando descrição para SENT1 #${index + 1}...`);

                let eventoDescricao = "";
                const linkElement = linkData.element; // Encontrar a linha (tr) do evento que contém o link SENT1
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
                        "❌ Não foi possível encontrar a linha (tr) do evento que contém o link SENT1"
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
                linkData.eventoDescricao = eventoDescricao || "Sentença";
                log(
                    `📋 Descrição final para SENT1 #${index + 1}: "${
                        linkData.eventoDescricao
                    }"`
                );
            });
        } else {
            log(
                "⚠️ Não é página de lista de documentos ou não há links SENT1 - descrições não serão buscadas"
            );
            // Se não estivermos na lista de documentos, usar descrição padrão
            sent1LinksData.forEach((linkData) => {
                linkData.eventoDescricao = "Sentença";
            });
        }

        // Converter dados coletados para o formato final
        const sent1Links = sent1LinksData.map((linkData) => ({
            element: linkData.element,
            href: linkData.href,
            texto: linkData.texto,
            eventoId: linkData.eventoId,
            docId: linkData.docId,
            seqEvento: linkData.seqEvento,
            tipoDocumento: linkData.tipoDocumento,
            tamanho: linkData.tamanho,
            eventoDescricao: linkData.eventoDescricao,
            index: linkData.index,
        }));

        return sent1Links;
    }

    // Abrir SENT1 automaticamente (com suporte a múltiplas sentenças)
    async function autoOpenSENT1() {
        const pageType = detectPageType();
        log("📄 Tipo de página:", pageType);

        if (pageType !== "lista_documentos") {
            log("⚠️ Não está na página de lista de documentos");
            return false;
        }

        const sent1Links = findSENT1Links();

        if (sent1Links.length === 0) {
            log("❌ Nenhum SENT1 encontrado");
            showNotification(
                "❌ Nenhum SENT1 encontrado nesta página",
                "error"
            );
            return false;
        }

        let selectedSent1;

        if (sent1Links.length === 1) {
            // Apenas uma sentença encontrada
            selectedSent1 = sent1Links[0];
            log("� Uma sentença encontrada, selecionando automaticamente");
        } else {
            // Múltiplas sentenças encontradas
            log(
                `📄 ${sent1Links.length} sentenças encontradas, solicitando seleção do usuário`
            );
            showNotification(
                `📄 ${sent1Links.length} sentenças encontradas. Selecione qual processar.`,
                "info"
            );

            log(
                "🔍 DEBUG: sent1Links antes do modal:",
                sent1Links.map((s) => ({
                    index: s.index,
                    eventoDescricao: s.eventoDescricao,
                    seqEvento: s.seqEvento,
                }))
            );
            selectedSent1 = await showSentenceSelectionModal(sent1Links);

            if (!selectedSent1) {
                log("❌ Usuário cancelou a seleção");
                showNotification("❌ Seleção cancelada", "warning");
                return false;
            }
        }

        log("🚀 Abrindo sentença selecionada:", selectedSent1.href);
        showNotification("🚀 Abrindo sentença selecionada...", "info");

        // Abrir em uma nova aba
        window.open(selectedSent1.href, "_blank");

        return true;
    }

    // Extrair texto do documento
    async function autoExtractText() {
        const pageType = detectPageType();
        log("📄 Tipo de página:", pageType);

        if (pageType !== "documento_especifico") {
            log("⚠️ Não está na página do documento específico");
            showNotification(
                "❌ Execute na página do documento SENT1, não na lista",
                "error"
            );
            return null;
        }

        // Aguardar documento carregar completamente
        await waitForDocumentLoad();

        // Verificar se há seção da sentença
        const sectionSentenca = document.querySelector(
            'section[data-nome="sentenca"]'
        );
        if (!sectionSentenca) {
            log("❌ Section da sentença não encontrada");
            showNotification("❌ Conteúdo da sentença não encontrado", "error");
            return null;
        }

        // VERIFICAÇÃO REMOVIDA - estava rejeitando páginas válidas de documento
        // Os indicadores como "processo:", "SENT1", etc. aparecem legitimamente nas páginas de sentença
        log("✅ Página do documento válida, prosseguindo com extração...");

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
            sectionSentenca.querySelectorAll(seletorParagrafos);
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
            const elementoLimpo = sectionSentenca.cloneNode(true);

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
            const prefixo =
                "Faça um resumo geral deste documento jurídico:\n\n";
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

            const prompt = `Faça um resumo geral deste documento jurídico:\n\n${texto}`;

            const requestBody = {
                model: "sonar",
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
                max_tokens: 1500,
                temperature: 0.7,
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

            setTimeout(() => {
                const chatWindow = window.open(
                    "https://chatgpt.com/",
                    "_blank"
                );
                if (chatWindow) {
                    setTimeout(() => chatWindow.focus(), 1000);
                }
                showNotification(
                    "🎉 Resumo copiado e ChatGPT aberto!\n\nO resumo está na sua área de transferência.",
                    "success"
                );
            }, 1000);

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
            // Configurar a chave fornecida pelo usuário
            apiKey = "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";
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
        const existing = document.getElementById("sent1-options-menu");
        if (existing) {
            existing.remove();
            return;
        }

        const menu = document.createElement("div");
        menu.id = "sent1-options-menu";
        menu.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y + 10}px;
            background: white;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10001;
            padding: 10px;
            min-width: 200px;
        `;

        const pageType = detectPageType();

        if (pageType === "lista_documentos") {
            // Verificar quantas sentenças existem para customizar o menu
            const sent1Links = findSENT1Links();
            const sentenceCount = sent1Links.length;

            let menuTitle = "🚀 Processar Sentenças";
            let buttonText = "📄 Processar Sentenças";
            let buttonBg = "#007bff";

            if (sentenceCount === 0) {
                menuTitle = "❌ Nenhuma Sentença";
                buttonText = "❌ Nenhuma SENT1 encontrada";
                buttonBg = "#dc3545";
            } else if (sentenceCount === 1) {
                menuTitle = "📄 1 Sentença Encontrada";
                buttonText = `📄 Processar SENT1`;
            } else {
                menuTitle = `📄 ${sentenceCount} Sentenças Encontradas`;
                buttonText = `📄 Escolher entre ${sentenceCount} sentenças`;
                buttonBg = "#28a745";
            }

            menu.innerHTML = `
                <div style="padding: 10px; border-bottom: 1px solid #eee; margin-bottom: 10px; font-weight: bold; color: #333;">
                    ${menuTitle}
                </div>
                <button id="open-sent1-btn" style="width: 100%; padding: 10px; border: none; background: ${buttonBg}; color: white; border-radius: 5px; cursor: pointer; margin-bottom: 5px;" ${
                sentenceCount === 0 ? "disabled" : ""
            }>
                    ${buttonText}
                </button>
                ${
                    sentenceCount > 1
                        ? `
                <div style="padding: 5px; font-size: 11px; color: #666; text-align: center; border-top: 1px solid #eee; margin-top: 5px;">
                    💡 Sistema detectou múltiplas sentenças
                </div>
                `
                        : ""
                }
            `;

            menu.querySelector("#open-sent1-btn").addEventListener(
                "click",
                () => {
                    menu.remove();
                    if (sentenceCount > 1) {
                        showSentenceProcessingOptions();
                    } else {
                        runFullAutomation();
                    }
                }
            );
        } else if (pageType === "documento_especifico") {
            menu.innerHTML = `
                <div style="padding: 10px; border-bottom: 1px solid #eee; margin-bottom: 10px; font-weight: bold; color: #333;">
                    🤖 Processar SENT1
                </div>
                <button id="api-btn" style="width: 100%; padding: 10px; border: none; background: #28a745; color: white; border-radius: 5px; cursor: pointer; margin-bottom: 5px;">
                    🚀 API Perplexity (Recomendado)
                </button>
                <button id="manual-btn" style="width: 100%; padding: 10px; border: none; background: #6c757d; color: white; border-radius: 5px; cursor: pointer; margin-bottom: 5px;">
                    📋 Método Manual
                </button>
                <button id="config-btn" style="width: 100%; padding: 10px; border: none; background: #ffc107; color: black; border-radius: 5px; cursor: pointer; margin-bottom: 5px;">
                    ⚙️ Configurar API
                </button>
                <button id="test-btn" style="width: 100%; padding: 10px; border: none; background: #17a2b8; color: white; border-radius: 5px; cursor: pointer; margin-bottom: 5px;">
                    🔍 Testar API Key
                </button>
                <button id="logs-btn" style="width: 100%; padding: 10px; border: none; background: #6f42c1; color: white; border-radius: 5px; cursor: pointer;">
                    📋 Ver Logs de Erro
                </button>
            `;

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
                        // Perguntar se quer preview ou cópia direta
                        const usePreview = confirm(
                            "Deseja ver o preview do texto antes de copiar?\n\nClique 'OK' para preview ou 'Cancelar' para copiar diretamente."
                        );

                        if (usePreview) {
                            log("👁️ Usuário escolheu preview");
                            showTextPreview(texto);
                        } else {
                            log("⚡ Usuário escolheu cópia direta");
                            // Cópia direta
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
                const opened = await autoOpenSENT1();
                if (opened) {
                    showNotification(
                        "✅ SENT1 aberto! Aguarde carregar e execute novamente na nova aba",
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
                    "❌ Página não reconhecida. Use na página do processo ou documento SENT1",
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
        const existing = document.getElementById("sent1-notification");
        if (existing) {
            existing.remove();
        }

        const notification = document.createElement("div");
        notification.id = "sent1-notification";
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

    // Criar botão de automação
    function createAutomationButton() {
        console.log("🔧 Tentando criar botão...");

        // Verificar se já existe
        if (document.getElementById("sent1-auto-button")) {
            console.log("⚠️ Botão já existe, pulando criação");
            return;
        }

        console.log("✅ Criando novo botão...");
        const button = document.createElement("button");
        button.id = "sent1-auto-button";
        button.innerHTML = "🤖 AUTOMAÇÃO SENT1";
        button.style.cssText = `
            position: fixed !important;
            top: 80px !important;
            right: 20px !important;
            background: linear-gradient(45deg, #007bff, #0056b3) !important;
            color: white !important;
            border: none !important;
            padding: 15px 20px !important;
            border-radius: 8px !important;
            font-weight: bold !important;
            font-size: 14px !important;
            cursor: pointer !important;
            z-index: 99999 !important;
            box-shadow: 0 4px 12px rgba(0,123,255,0.3) !important;
            transition: all 0.3s ease !important;
        `;

        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.05)";
            button.style.boxShadow = "0 6px 16px rgba(0,123,255,0.4)";
        });

        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
            button.style.boxShadow = "0 4px 12px rgba(0,123,255,0.3)";
        });

        button.addEventListener("click", async (e) => {
            e.preventDefault();
            e.stopPropagation();

            log("🔧 Botão clicado!");
            console.log("🔧 Debug: Botão AUTOMAÇÃO SENT1 clicado");

            const pageType = detectPageType();
            log("📄 Tipo de página detectado:", pageType);

            if (pageType === "lista_documentos") {
                showNotification("🚀 Abrindo SENT1...", "info");
                await runFullAutomation();
            } else if (pageType === "documento_especifico") {
                const rect = button.getBoundingClientRect();
                showOptionsMenu(rect.left, rect.bottom);
            } else {
                showNotification("❌ Página não reconhecida", "error");
            }
        });

        document.body.appendChild(button);
        console.log("✅ Botão adicionado ao DOM");

        const pageType = detectPageType();
        if (pageType === "lista_documentos") {
            showNotification(
                "🤖 Automação SENT1 carregada! Clique no botão para começar",
                "info"
            );
        } else if (pageType === "documento_especifico") {
            showNotification(
                "🤖 Automação SENT1 carregada! Clique para extrair e enviar ao ChatGPT",
                "info"
            );
        }
    }

    // Debug: verificar se o botão foi criado
    function debugButtonStatus() {
        setTimeout(() => {
            const button = document.getElementById("sent1-auto-button");
            if (button) {
                console.log("✅ Botão AUTOMAÇÃO SENT1 encontrado:", button);
                console.log("📍 Posição do botão:", {
                    top: button.style.top,
                    right: button.style.right,
                    zIndex: button.style.zIndex,
                    display: getComputedStyle(button).display,
                    visibility: getComputedStyle(button).visibility,
                });
            } else {
                console.log("❌ Botão AUTOMAÇÃO SENT1 NÃO encontrado!");
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

    // Mostrar modal para seleção de múltiplas sentenças
    function showSentenceSelectionModal(sent1Links) {
        log("🔍 DEBUG MODAL: Recebido sent1Links:", sent1Links);
        log("🔍 DEBUG MODAL: Detalhes de cada link:");
        sent1Links.forEach((link, i) => {
            log(`  SENT${i + 1}:`, {
                eventoDescricao: link.eventoDescricao,
                seqEvento: link.seqEvento,
                tipoDocumento: link.tipoDocumento,
            });
        });

        return new Promise((resolve) => {
            // Remover modal anterior se existir
            const existing = document.getElementById(
                "sentence-selection-modal"
            );
            if (existing) {
                existing.remove();
            }

            const modal = document.createElement("div");
            modal.id = "sentence-selection-modal";
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.7);
                z-index: 100010;
                display: flex;
                align-items: center;
                justify-content: center;
            `;

            let sentenceOptions = "";
            sent1Links.forEach((sent1, index) => {
                const seqEvento = sent1.seqEvento
                    ? `Evento ${sent1.seqEvento}`
                    : `Sentença ${index + 1}`;
                const tamanhoInfo = sent1.tamanho ? ` (${sent1.tamanho})` : "";
                const tipoInfo = sent1.tipoDocumento || "SENTENÇA";
                const eventoDesc = sent1.eventoDescricao || "Sentença";

                log(`🔍 DEBUG OPTION ${index + 1}:`, {
                    seqEvento,
                    tipoInfo,
                    eventoDesc,
                    tamanhoInfo,
                    original_eventoDescricao: sent1.eventoDescricao,
                });

                sentenceOptions += `
                    <div style="margin-bottom: 15px; padding: 15px; border: 2px solid #ddd; border-radius: 8px; background: #f8f9fa; cursor: pointer; transition: all 0.3s;" 
                         class="sentence-option" data-index="${index}">
                        <div style="font-weight: bold; color: #333; margin-bottom: 8px;">
                            📄 ${tipoInfo} - ${seqEvento}
                        </div>
                        <div style="font-size: 13px; color: #007bff; margin-bottom: 5px; font-weight: 500;">
                            📋 ${eventoDesc}
                        </div>
                        <div style="font-size: 12px; color: #666;">
                            🗂️ Documento: SENT${sent1.index}${tamanhoInfo}
                        </div>
                        <div style="font-size: 11px; color: #888; margin-top: 5px;">
                            🔗 ID: ${sent1.eventoId.substring(0, 20)}...
                        </div>
                    </div>
                `;
            });

            modal.innerHTML = `
                <div style="background: white; border-radius: 12px; padding: 25px; max-width: 600px; width: 90%; max-height: 80%; overflow-y: auto; box-shadow: 0 15px 35px rgba(0,0,0,0.3);">
                    <div style="margin-bottom: 20px; text-align: center;">
                        <h2 style="margin: 0; color: #333; font-size: 20px;">📄 Múltiplas Sentenças Encontradas</h2>
                        <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">
                            Foram encontradas ${sent1Links.length} sentenças neste processo. Selecione qual deseja processar:
                        </p>
                    </div>
                    
                    <div id="sentence-options">
                        ${sentenceOptions}
                    </div>

                    <div style="text-align: center; margin-top: 20px; padding-top: 15px; border-top: 1px solid #eee;">
                        <button id="cancel-selection" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-weight: bold;">
                            ❌ Cancelar
                        </button>
                    </div>
                </div>
            `;

            document.body.appendChild(modal);

            // Adicionar eventos de clique nas opções
            modal
                .querySelectorAll(".sentence-option")
                .forEach((option, index) => {
                    option.addEventListener("mouseover", () => {
                        option.style.borderColor = "#007bff";
                        option.style.background = "#e3f2fd";
                        option.style.transform = "translateY(-2px)";
                        option.style.boxShadow =
                            "0 4px 12px rgba(0,123,255,0.3)";
                    });

                    option.addEventListener("mouseout", () => {
                        option.style.borderColor = "#ddd";
                        option.style.background = "#f8f9fa";
                        option.style.transform = "translateY(0)";
                        option.style.boxShadow = "none";
                    });

                    option.addEventListener("click", () => {
                        const selectedIndex = parseInt(
                            option.getAttribute("data-index")
                        );
                        const selectedSent1 = sent1Links[selectedIndex];

                        log(
                            `✅ Sentença selecionada: ${selectedSent1.eventoDescricao} - Evento ${selectedSent1.seqEvento}`
                        );
                        showNotification(
                            `✅ Sentença selecionada: ${selectedSent1.eventoDescricao}`,
                            "success"
                        );

                        modal.remove();
                        resolve(selectedSent1);
                    });
                });

            // Evento do botão cancelar
            modal
                .querySelector("#cancel-selection")
                .addEventListener("click", () => {
                    modal.remove();
                    resolve(null);
                });

            // Fechar ao clicar fora (no fundo do modal)
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
            background: rgba(0,0,0,0.5);
            z-index: 100001;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        modal.innerHTML = `
            <div style="background: white; border-radius: 10px; padding: 30px; max-width: 500px; width: 90%; box-shadow: 0 10px 25px rgba(0,0,0,0.3);">
                <div style="margin-bottom: 20px; text-align: center;">
                    <h2 style="margin: 0; color: #333; font-size: 20px;">🔑 Configurar API Key do Perplexity</h2>
                </div>
                
                <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 5px; font-size: 14px; line-height: 1.5;">
                    <strong>Como obter sua API Key do Perplexity:</strong><br>
                    1. Acesse: <a href="https://www.perplexity.ai/settings/api" target="_blank" style="color: #007bff;">www.perplexity.ai/settings/api</a><br>
                    2. Faça login na sua conta Perplexity<br>
                    3. Clique em "Generate" para criar uma nova chave<br>
                    4. Copie a chave e cole abaixo
                </div>

                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px; font-weight: bold;">API Key:</label>
                    <input type="password" id="api-key-input" placeholder="pplx-..." style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; font-family: monospace;" value="${
                        currentKey || ""
                    }" />
                </div>

                <div style="margin-bottom: 20px; padding: 10px; background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 5px; font-size: 12px;">
                    ⚠️ Sua API Key é armazenada apenas localmente no seu navegador e não é compartilhada.
                </div>

                <div style="text-align: center;">
                    <button id="save-key" style="background: #28a745; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px; cursor: pointer; font-weight: bold;">
                        ✅ Salvar e Testar
                    </button>
                    <button id="remove-key" style="background: #dc3545; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px; cursor: pointer; font-weight: bold;">
                        🗑️ Remover
                    </button>
                    <button id="cancel-config" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-weight: bold;">
                        ❌ Cancelar
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const input = modal.querySelector("#api-key-input");
        const saveBtn = modal.querySelector("#save-key");
        const removeBtn = modal.querySelector("#remove-key");
        const cancelBtn = modal.querySelector("#cancel-config");

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
            showNotification("📋 Nenhum log de erro encontrado", "info");
            return;
        }

        const modal = document.createElement("div");
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            z-index: 100002;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        modal.innerHTML = `
            <div style="background: white; border-radius: 10px; padding: 20px; max-width: 80%; max-height: 80%; overflow-y: auto; box-shadow: 0 10px 25px rgba(0,0,0,0.3);">
                <div style="margin-bottom: 20px; text-align: center;">
                    <h2 style="margin: 0; color: #333;">🔍 Logs de Erro da API</h2>
                    <button id="clear-logs" style="background: #dc3545; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer; margin-top: 10px;">
                        🗑️ Limpar Logs
                    </button>
                </div>
                <div style="font-family: monospace; font-size: 12px; line-height: 1.4;">
                    ${logs
                        .map(
                            (log, i) => `
                        <div style="margin-bottom: 15px; padding: 10px; border: 1px solid #ddd; border-radius: 5px; background: #f8f9fa;">
                            <strong>Log ${i + 1} - ${log.timestamp}</strong><br>
                            <strong>Request ID:</strong> ${log.requestId}<br>
                            <strong>Phase:</strong> ${log.phase}<br>
                            <strong>Data:</strong><br>
                            <pre style="background: #e9ecef; padding: 10px; border-radius: 3px; overflow-x: auto; white-space: pre-wrap;">${JSON.stringify(
                                log.data,
                                null,
                                2
                            )}</pre>
                        </div>
                    `
                        )
                        .join("")}
                </div>
                <div style="text-align: center; margin-top: 20px;">
                    <button id="close-logs" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                        ❌ Fechar
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
            showNotification("🗑️ Logs de erro limpos", "info");
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
        const selectedSent1 = await showSentenceSelectionModal(sent1Links);

        if (!selectedSent1) {
            return; // Usuário cancelou
        }

        // Perguntar o que fazer com a sentença selecionada
        const processChoice = confirm(
            "Como deseja processar a sentença selecionada?\n\n" +
                "✅ OK = Abrir sentença para processamento manual\n" +
                "❌ Cancelar = Processar diretamente via API (experimental)"
        );

        if (processChoice) {
            // Abrir a sentença selecionada
            log("🚀 Abrindo sentença selecionada:", selectedSent1.href);
            showNotification("🚀 Abrindo sentença selecionada...", "info");
            window.open(selectedSent1.href, "_blank");
        } else {
            // Processar diretamente via API (funcionalidade experimental)
            showNotification(
                "🔬 Processamento direto via API ainda não implementado. Abrindo sentença...",
                "warning"
            );
            window.open(selectedSent1.href, "_blank");
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

    // Inicialização
    function init() {
        log("🚀 Iniciando content script automatizado");
        console.log("🚀 AUTOMAÇÃO SENT1: Script iniciado");

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
        findSENT1Links,
        showSentenceSelectionModal,
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
