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

    // Encontrar links SENT1
    function findSENT1Links() {
        const links = document.querySelectorAll(
            'a.infraLinkDocumento[data-nome="SENT"], a[data-nome="SENT"]'
        );
        log("📄 Links SENT encontrados:", links.length);

        const sent1Links = [];
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
                sent1Links.push({
                    element: link,
                    href: href,
                    texto: texto,
                });
                log("🎯 SENT1 encontrado!", {
                    url: href,
                    urlCompleta: href,
                });
            }
        });

        return sent1Links;
    }

    // Abrir SENT1 automaticamente
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

        // Usar o primeiro SENT1 encontrado
        const sent1 = sent1Links[0];
        log("🚀 Abrindo SENT1 automaticamente:", sent1.href);

        showNotification("🚀 Abrindo SENT1 automaticamente...", "info");

        // Abrir em uma nova aba
        window.open(sent1.href, "_blank");

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

    // Copiar texto para clipboard com prefixo do ChatGPT
    async function copyToClipboardWithPrefix(texto) {
        try {
            const prefixo =
                "Faça um resumo geral deste documento jurídico:\n\n";
            const textoCompleto = prefixo + texto;

            await navigator.clipboard.writeText(textoCompleto);
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

    // Abrir ChatGPT automaticamente com prefixo
    function autoOpenChatGPT() {
        log("🤖 Abrindo ChatGPT...");
        showNotification("🤖 Abrindo ChatGPT...", "info");

        // Aguardar um pouco mais para garantir que o clipboard foi atualizado
        setTimeout(() => {
            const url = `https://chatgpt.com/`;
            const chatWindow = window.open(url, "_blank");

            // Focar na nova aba após um delay maior
            if (chatWindow) {
                setTimeout(() => {
                    chatWindow.focus();
                }, 3000);
            }
        }, 1000);
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
                // Passo 1: Abrir SENT1
                const opened = await autoOpenSENT1();
                if (opened) {
                    showNotification(
                        "✅ SENT1 aberto! Aguarde carregar e execute novamente na nova aba",
                        "success"
                    );
                }
            } else if (pageType === "documento_especifico") {
                // Passo 2: Extrair texto
                const texto = await autoExtractText();
                if (texto) {
                    // Passo 3: Copiar texto com prefixo para ChatGPT
                    const copied = await copyToClipboardWithPrefix(texto);
                    if (copied) {
                        // Passo 4: Abrir ChatGPT após aguardar clipboard ser atualizado
                        setTimeout(() => {
                            autoOpenChatGPT();
                            showNotification(
                                "🎉 Automação completa! Cole o texto no ChatGPT (Ctrl+V)\n\nO texto já inclui o prefixo de instrução para IA",
                                "success"
                            );
                        }, 2000); // Aumentado de 1000 para 2000ms
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
        // Verificar se já existe
        if (document.getElementById("sent1-auto-button")) {
            return;
        }

        const button = document.createElement("button");
        button.id = "sent1-auto-button";
        button.innerHTML = "🤖 AUTOMAÇÃO SENT1";
        button.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: linear-gradient(45deg, #007bff, #0056b3);
            color: white;
            border: none;
            padding: 15px 20px;
            border-radius: 8px;
            font-weight: bold;
            font-size: 14px;
            cursor: pointer;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0,123,255,0.3);
            transition: all 0.3s ease;
        `;

        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.05)";
            button.style.boxShadow = "0 6px 16px rgba(0,123,255,0.4)";
        });

        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
            button.style.boxShadow = "0 4px 12px rgba(0,123,255,0.3)";
        });

        button.addEventListener("click", runFullAutomation);

        document.body.appendChild(button);

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

    // Inicialização
    function init() {
        log("🚀 Iniciando content script automatizado");

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
    }

    // Inicializar
    init();

    // Expor funções para debug manual
    window.SENT1_AUTO = {
        runFullAutomation,
        autoOpenSENT1,
        autoExtractText,
        copyToClipboard,
        autoOpenChatGPT,
        detectPageType,
        findSENT1Links,
    };
})();
