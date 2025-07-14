// 🔧 PATCH PARA LIVE SERVER - Simular ambiente Microsoft Edge
(function () {
    // Detectar se está rodando no Live Server (fora da extensão Edge)
    const isLiveServer = !window.chrome || !window.chrome.storage;

    if (isLiveServer) {
        console.log(
            "🚀 Live Server detectado - simulando ambiente Microsoft Edge"
        );

        // Simular API do Edge (baseado na API Chrome)
        window.chrome = {
            storage: {
                sync: {
                    get: function (keys, callback) {
                        // Valores padrão para demonstração no Edge
                        const mockData = {
                            selectedTheme: "blue",
                            "highlight-session-date": true,
                            "auto-session-requests": false,
                            selectedButtonTheme: "elegante",
                        };

                        // Tentar recuperar dados persistentes do localStorage
                        try {
                            const savedData = JSON.parse(
                                localStorage.getItem("eprobe-edge-storage") ||
                                    "{}"
                            );
                            Object.assign(mockData, savedData);
                        } catch (e) {
                            console.warn(
                                "⚠️ [Edge Live Server] Erro ao recuperar storage:",
                                e
                            );
                        }

                        if (typeof keys === "string") {
                            callback({ [keys]: mockData[keys] });
                        } else if (Array.isArray(keys)) {
                            const result = {};
                            keys.forEach(
                                (key) => (result[key] = mockData[key])
                            );
                            callback(result);
                        } else {
                            callback(mockData);
                        }
                    },
                    set: function (items, callback) {
                        console.log(
                            "💾 [Edge Live Server] Configurações salvas:",
                            items
                        );

                        // Persistir no localStorage para simular storage do Edge
                        try {
                            const currentData = JSON.parse(
                                localStorage.getItem("eprobe-edge-storage") ||
                                    "{}"
                            );
                            Object.assign(currentData, items);
                            localStorage.setItem(
                                "eprobe-edge-storage",
                                JSON.stringify(currentData)
                            );
                            console.log(
                                "✅ [Edge Live Server] Storage persistido:",
                                currentData
                            );
                        } catch (e) {
                            console.error(
                                "❌ [Edge Live Server] Erro ao salvar storage:",
                                e
                            );
                        }

                        if (callback) callback();
                    },
                },
            },
            tabs: {
                query: function (queryInfo, callback) {
                    // Tab fictícia simulando página do eProc no Edge
                    console.log("🔍 [Edge Live Server] Query tabs:", queryInfo);
                    callback([
                        {
                            id: 1,
                            url: "https://eproc1g.tjsc.jus.br/demo",
                            title: "eProc Demo - Microsoft Edge",
                        },
                    ]);
                },
                sendMessage: function (tabId, message, callback) {
                    console.log(
                        "📤 [Edge Live Server] Mensagem enviada para tab:",
                        tabId,
                        message
                    );

                    // Simular diferentes tipos de resposta baseado na ação
                    if (message.action === "applyTheme") {
                        console.log(
                            `🎨 [Edge Live Server] Aplicando tema ${message.theme} na página eProc`
                        );
                    } else if (message.action === "applyButtonTheme") {
                        console.log(
                            `💼 [Edge Live Server] Aplicando tema de botão ${message.theme}`
                        );
                    } else if (
                        message.action === "toggleSessionDateHighlight"
                    ) {
                        console.log(
                            `📅 [Edge Live Server] Destaque de data: ${
                                message.enabled ? "ativado" : "desativado"
                            }`
                        );
                    } else if (message.action === "toggleAutoSessionRequests") {
                        console.log(
                            `🔄 [Edge Live Server] Requisições automáticas: ${
                                message.enabled ? "ativadas" : "desativadas"
                            }`
                        );
                    }

                    if (callback)
                        callback({
                            success: true,
                            message: "Simulação Edge Live Server ativa",
                        });
                },
            },
            runtime: {
                getURL: function (path) {
                    console.log("🔗 [Edge Live Server] getURL:", path);
                    return path; // Retorna o caminho relativo
                },
            },
        };

        // Simular evento de extensão carregada
        setTimeout(() => {
            console.log(
                "✅ [Edge Live Server] Ambiente Microsoft Edge simulado ativo"
            );
            console.log(
                "🎯 [Edge Live Server] Accordeon e temas devem funcionar normalmente"
            );
        }, 100);

        // Adicionar indicador visual de que está em modo Live Server
        setTimeout(() => {
            const header = document.querySelector(".header");
            if (header) {
                const indicator = document.createElement("div");
                indicator.style.cssText = `
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    background: #ff6b6b;
                    color: white;
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 10px;
                    font-weight: bold;
                    z-index: 1000;
                `;
                indicator.textContent = "🔴 LIVE SERVER";
                indicator.title =
                    "Executando no Live Server com API Edge simulada";
                header.style.position = "relative";
                header.appendChild(indicator);
            }
        }, 500);
    } else {
        console.log("✅ Executando na extensão Microsoft Edge real");
    }
})();

// eProbe Popup Script - Sistema de Temas Funcional
document.addEventListener("DOMContentLoaded", function () {
    const statusDiv = document.getElementById("status");

    // Verifica se os elementos existem antes de tentar usá-los
    if (!statusDiv) {
        console.warn("❌ POPUP.JS: Elemento #status não encontrado");
        return;
    }

    console.log("✅ POPUP.JS: Script carregado e inicializado");

    // ========================================
    // SISTEMA DE TEMAS
    // ========================================

    function toggle(index) {
        var buttons = document.getElementById(
            "interface_themes_container"
        ).children;

        // Verificar se é o botão de reset
        if (buttons[index].classList.contains("reset-interface-theme")) {
            // Reset dos temas de interface - volta para o tema azul padrão
            console.log("🔄 POPUP: Reset de tema de interface solicitado");

            // Remove estado ativo de todos os botões
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove("theme-active");
            }

            // Ativa o tema azul (índice 0)
            if (buttons[0]) {
                buttons[0].classList.add("theme-active");
            }

            // Remove o tema salvo e aplica o padrão
            chrome.storage.sync.remove("selectedTheme", function () {
                console.log(
                    "🗑️ POPUP: Tema salvo removido, voltando ao padrão"
                );
                applyTheme("blue");

                // Feedback visual temporário para o botão de reset
                const resetButton = buttons[index];
                const originalText = resetButton.title;
                const originalColor = resetButton.style.color;

                // Feedback visual de reset executado
                resetButton.title = "✅ Reset aplicado!";
                resetButton.style.transform = "scale(1.1)";
                resetButton.style.color = "rgb(var(--color-success-600))";
                resetButton.classList.add("theme-active");

                setTimeout(() => {
                    resetButton.title = originalText;
                    resetButton.style.transform = "";
                    resetButton.style.color = originalColor;
                    resetButton.classList.remove("theme-active");
                }, 1500);
            });

            return;
        }

        // Remove estado ativo de todos os botões
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("theme-active");
        }

        // Adiciona estado ativo ao botão selecionado
        buttons[index].classList.add("theme-active");

        // Aplica o tema selecionado
        var theme = buttons[index].getAttribute("data-theme");
        console.log("🎨 POPUP: Tema selecionado:", theme);
        applyTheme(theme);
    }

    // Função para aplicar o tema
    function applyTheme(theme) {
        console.log("🎨 POPUP: Iniciando aplicação do tema:", theme);

        // Salva a preferência do tema
        chrome.storage.sync.set({ selectedTheme: theme }, function () {
            console.log("✅ POPUP: Tema salvo no storage:", theme);
        });

        // Envia mensagem para o content script aplicar o tema
        chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
                if (tabs[0]) {
                    console.log(
                        "📤 POPUP: Enviando mensagem para tab:",
                        tabs[0].id
                    );
                    chrome.tabs.sendMessage(
                        tabs[0].id,
                        {
                            action: "applyTheme",
                            theme: theme,
                        },
                        function (response) {
                            if (chrome.runtime.lastError) {
                                console.log(
                                    "❌ POPUP: Erro na comunicação:",
                                    chrome.runtime.lastError.message
                                );
                            } else {
                                console.log(
                                    "✅ POPUP: Resposta recebida:",
                                    response
                                );
                            }
                        }
                    );
                } else {
                    console.log("❌ POPUP: Nenhuma aba ativa encontrada");
                }
            }
        );
    }

    // ========================================
    // FUNÇÃO DE STATUS
    // ========================================
    function showStatus(
        message,
        type = "info",
        showSpinner = false,
        isHTML = false
    ) {
        const statusText = statusDiv.querySelector(".status-text");
        const spinner = statusDiv.querySelector(".loading-spinner");

        if (statusText) {
            if (isHTML) {
                statusText.innerHTML = message;
            } else {
                statusText.textContent = message;
            }
        } else {
            if (isHTML) {
                statusDiv.innerHTML = message;
            } else {
                statusDiv.textContent = message;
            }
        }

        statusDiv.className = `status ${type}`;
        statusDiv.classList.remove("hidden");

        if (spinner) {
            if (showSpinner) {
                spinner.classList.remove("hidden");
            } else {
                spinner.classList.add("hidden");
            }
        }
    }

    // ========================================
    // CONFIGURAÇÕES DOS SWITCHES
    // ========================================

    // Switch para destaque da data da sessão
    const highlightSessionDateSwitch = document.getElementById(
        "highlight-session-date"
    );
    if (highlightSessionDateSwitch) {
        // Carregar estado inicial
        chrome.storage.sync.get(["highlightSessionDate"], function (result) {
            highlightSessionDateSwitch.checked =
                result.highlightSessionDate !== false; // default true
            console.log(
                "💾 POPUP: Estado inicial do destaque da data da sessão:",
                highlightSessionDateSwitch.checked
            );
        });

        // Listener para mudanças
        highlightSessionDateSwitch.addEventListener("change", function () {
            const enabled = this.checked;
            console.log(
                "🎯 POPUP: Mudança no destaque da data da sessão:",
                enabled
            );

            // Salvar preferência
            chrome.storage.sync.set(
                { highlightSessionDate: enabled },
                function () {
                    console.log(
                        "✅ POPUP: Preferência de destaque salva:",
                        enabled
                    );
                }
            );

            // Enviar mensagem para o content script
            chrome.tabs.query(
                { active: true, currentWindow: true },
                function (tabs) {
                    if (tabs[0]) {
                        chrome.tabs.sendMessage(
                            tabs[0].id,
                            {
                                action: "toggleSessionDateHighlight",
                                enabled: enabled,
                            },
                            function (response) {
                                if (chrome.runtime.lastError) {
                                    console.log(
                                        "❌ POPUP: Erro na comunicação:",
                                        chrome.runtime.lastError.message
                                    );
                                } else {
                                    console.log(
                                        "✅ POPUP: Resposta recebida:",
                                        response
                                    );
                                }
                            }
                        );
                    }
                }
            );
        });
    }

    // Switch para requisições automáticas de sessão
    const autoSessionRequestsSwitch = document.getElementById(
        "auto-session-requests"
    );
    if (autoSessionRequestsSwitch) {
        // Carregar estado inicial
        chrome.storage.sync.get(["autoSessionRequests"], function (result) {
            autoSessionRequestsSwitch.checked =
                result.autoSessionRequests !== false; // default true
            console.log(
                "💾 POPUP: Estado inicial das requisições automáticas:",
                autoSessionRequestsSwitch.checked
            );
        });

        // Listener para mudanças
        autoSessionRequestsSwitch.addEventListener("change", function () {
            const enabled = this.checked;
            console.log(
                "🔄 POPUP: Mudança nas requisições automáticas:",
                enabled
            );

            // Salvar preferência
            chrome.storage.sync.set(
                { autoSessionRequests: enabled },
                function () {
                    console.log(
                        "✅ POPUP: Preferência de requisições salva:",
                        enabled
                    );
                }
            );

            // Enviar mensagem para o content script
            chrome.tabs.query(
                { active: true, currentWindow: true },
                function (tabs) {
                    if (tabs[0]) {
                        chrome.tabs.sendMessage(
                            tabs[0].id,
                            {
                                action: "toggleAutoSessionRequests",
                                enabled: enabled,
                            },
                            function (response) {
                                if (chrome.runtime.lastError) {
                                    console.log(
                                        "❌ POPUP: Erro na comunicação:",
                                        chrome.runtime.lastError.message
                                    );
                                } else {
                                    console.log(
                                        "✅ POPUP: Resposta recebida:",
                                        response
                                    );
                                }
                            }
                        );
                    }
                }
            );
        });
    }

    // ========================================
    // INICIALIZAÇÃO DOS BOTÕES DE TEMA
    // ========================================

    console.log(
        "🚀 POPUP: Configurando event listeners para botões de tema..."
    );

    // Adicionar event listeners para os botões de tema
    const buttons = document.getElementById(
        "interface_themes_container"
    ).children;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            const index = parseInt(this.getAttribute("data-index"));
            console.log(
                "🖱️ POPUP: Botão clicado, índice:",
                index,
                "tema:",
                this.getAttribute("data-theme")
            );
            toggle(index);
        });
    }
    console.log(
        "✅ POPUP: Event listeners adicionados a",
        buttons.length,
        "botões"
    );

    // Carrega tema salvo ou usa azul como padrão
    chrome.storage.sync.get(["selectedTheme"], function (result) {
        const savedTheme = result.selectedTheme || "blue";
        console.log("💾 POPUP: Tema salvo encontrado:", savedTheme);

        // Encontra o botão do tema salvo e o ativa
        let themeFound = false;
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].getAttribute("data-theme") === savedTheme) {
                console.log(
                    "🎯 POPUP: Ativando tema salvo:",
                    savedTheme,
                    "índice:",
                    i
                );
                toggle(i);
                themeFound = true;
                break;
            }
        }

        // Se nenhum tema foi encontrado, ativa o azul (padrão) no índice 0
        if (!themeFound) {
            console.log("🔵 POPUP: Ativando tema padrão azul (índice 0)");
            toggle(0);
        }
    });

    // ============================================
    // ACORDEÃO DE CONFIGURAÇÕES
    // ============================================

    // Funcionalidade do acordeão
    function initConfigAccordion() {
        console.log("🔍 POPUP: Iniciando configuração do acordeão...");

        const configHeader = document.querySelector(".config-header");
        const configContent = document.querySelector(".config-content");
        const configChevron = document.querySelector(".config-chevron");

        console.log("🔍 POPUP: Elementos encontrados:", {
            header: !!configHeader,
            content: !!configContent,
            chevron: !!configChevron,
            headerElement: configHeader,
            contentElement: configContent,
            chevronElement: configChevron,
        });

        if (!configHeader || !configContent || !configChevron) {
            console.warn("⚠️ POPUP: Elementos do acordeão não encontrados");
            console.warn(
                "⚠️ POPUP: Verificar se os IDs config-header, config-content e config-chevron existem no HTML"
            );
            return;
        }

        configHeader.addEventListener("click", function () {
            console.log("👆 POPUP: Click detectado no header do acordeão!");
            const isExpanded = configContent.classList.contains("expanded");
            console.log("🔍 POPUP: Estado atual - expanded:", isExpanded);

            if (isExpanded) {
                // Fechar acordeão
                configContent.classList.remove("expanded");
                configHeader.classList.remove("active");
                configChevron.classList.remove("rotated");
                console.log("📤 POPUP: Acordeão fechado");
            } else {
                // Abrir acordeão
                configContent.classList.add("expanded");
                configHeader.classList.add("active");
                configChevron.classList.add("rotated");
                console.log("📥 POPUP: Acordeão aberto");
            }
        });

        console.log(
            "✅ POPUP: Acordeão de configurações inicializado com sucesso"
        );
    }

    // ============================================
    // TEMAS DE BOTÕES
    // ============================================

    // Aplicar tema de botão
    function applyButtonTheme(themeName) {
        // Salvar tema no storage
        chrome.storage.sync.set(
            { selectedButtonTheme: themeName },
            function () {
                console.log(`💼 POPUP: Tema de botão salvo: ${themeName}`);
            }
        );

        // Enviar mensagem para content script aplicar o tema
        chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
                if (tabs[0]) {
                    chrome.tabs.sendMessage(
                        tabs[0].id,
                        {
                            action: "applyButtonTheme",
                            theme: themeName,
                        },
                        function (response) {
                            if (chrome.runtime.lastError) {
                                console.log(
                                    "ℹ️ POPUP: Página não é do eProc ou não tem content script ativo"
                                );
                            } else {
                                console.log(
                                    "✅ POPUP: Comando de tema de botão enviado"
                                );
                            }
                        }
                    );
                }
            }
        );

        // Atualizar visual do seletor
        updateButtonThemeSelector(themeName);
    }

    // Atualizar seletor visual de tema de botão
    function updateButtonThemeSelector(activeTheme) {
        const options = document.querySelectorAll(".button-theme-option");

        options.forEach((option) => {
            if (
                activeTheme === "reset" &&
                option.classList.contains("reset-button-theme")
            ) {
                option.classList.add("active");
            } else if (activeTheme !== "reset") {
                const themeName = option.getAttribute("data-button-theme");
                if (themeName === activeTheme) {
                    option.classList.add("active");
                } else {
                    option.classList.remove("active");
                }
            } else {
                option.classList.remove("active");
            }
        });
    }

    // Inicializar temas de botões
    function initButtonThemes() {
        const buttonThemeOptions = document.querySelectorAll(
            ".button-theme-option"
        );

        buttonThemeOptions.forEach((option) => {
            option.addEventListener("click", function () {
                // Verificar se é o botão de reset
                if (this.classList.contains("reset-button-theme")) {
                    // Reset dos temas de botões
                    applyButtonTheme("reset");
                } else {
                    // Pegar tema do atributo data-button-theme
                    const themeName = this.getAttribute("data-button-theme");
                    if (themeName) {
                        // Aplicar tema específico
                        applyButtonTheme(themeName);
                    }
                }
            });
        });

        // Carregar tema salvo
        chrome.storage.sync.get(["selectedButtonTheme"], function (result) {
            let savedButtonTheme = result.selectedButtonTheme || "reset";

            // TEMPORARIAMENTE DESABILITADO - Verificar se o tema material está sendo carregado
            if (savedButtonTheme === "material") {
                console.log(
                    "⚠️ POPUP: Tema 'material' temporariamente desabilitado, usando tema padrão 'elegante'"
                );
                savedButtonTheme = "elegante";
                // Atualizar o storage para não carregar material na próxima vez
                chrome.storage.sync.set({ selectedButtonTheme: "elegante" });
            }

            updateButtonThemeSelector(savedButtonTheme);
            console.log(
                `🎨 POPUP: Tema de botão carregado: ${savedButtonTheme}`
            );
        });

        console.log("✅ POPUP: Seletores de tema de botão inicializados");
    }

    // ============================================
    // INICIALIZAÇÃO COMPLETA
    // ============================================

    // Função para garantir que os elementos existem antes de inicializar
    function waitForElements() {
        const maxAttempts = 10;
        let attempts = 0;

        function tryInit() {
            attempts++;
            console.log(
                `🔄 POPUP: Tentativa de inicialização ${attempts}/${maxAttempts}`
            );

            const configHeader = document.querySelector(".config-header");
            const buttonsContainer = document.querySelector(
                "#interface_themes_container"
            );

            if (configHeader && buttonsContainer) {
                console.log(
                    "✅ POPUP: Elementos encontrados, inicializando..."
                );
                initConfigAccordion();
                initButtonThemes();
                console.log("✅ POPUP: Inicialização completa bem-sucedida");
            } else {
                console.log("⏳ POPUP: Elementos não encontrados ainda...", {
                    configHeader: !!configHeader,
                    buttonsContainer: !!buttonsContainer,
                });

                if (attempts < maxAttempts) {
                    setTimeout(tryInit, 100);
                } else {
                    console.error(
                        "❌ POPUP: Falha na inicialização após",
                        maxAttempts,
                        "tentativas"
                    );
                }
            }
        }

        tryInit();
    }

    // Inicializar com verificação de elementos
    waitForElements();

    console.log("✅ POPUP: Listeners de configuração e tema registrados");

    // ============================================
    // ANTI-EPROC: REMOVER INJEÇÃO CSS DINÂMICA
    // ============================================

    /**
     * Remove dinamicamente a injeção CSS do eProc que afeta o tema material
     * Esta função monitora e remove qualquer <style> injetado que contenha #144CFF
     */
    function removeEprocInjection() {
        // Função para remover styles específicos que contenham #144CFF
        function removeEprocStyles() {
            const styleElements = document.querySelectorAll("style");

            styleElements.forEach((style) => {
                if (
                    style.textContent &&
                    style.textContent.includes("#144CFF")
                ) {
                    console.log(
                        "🚫 [Anti-eProc] Removendo injeção CSS:",
                        style.textContent.substring(0, 100) + "..."
                    );
                    style.remove();
                }
            });
        }

        // Remover imediatamente
        removeEprocStyles();

        // Monitorar mudanças no DOM para interceptar novas injeções
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "childList") {
                    mutation.addedNodes.forEach((node) => {
                        if (
                            node.nodeType === Node.ELEMENT_NODE &&
                            (node.tagName === "STYLE" ||
                                node.querySelector("style"))
                        ) {
                            // Aguardar um tick para o conteúdo ser carregado
                            setTimeout(removeEprocStyles, 0);
                        }
                    });
                }
            });
        });

        // Observar todo o documento
        observer.observe(document, {
            childList: true,
            subtree: true,
        });

        // Executar periodicamente como backup
        setInterval(removeEprocStyles, 500);

        console.log(
            "✅ [Anti-eProc] Sistema de remoção de injeção CSS ativado"
        );
    }

    // Ativar anti-eProc quando o DOM estiver pronto
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", removeEprocInjection);
    } else {
        removeEprocInjection();
    }
});
