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
        var buttons = document.getElementById("buttons_container").children;

        // Remove estado ativo de todos os botões
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("text-white");
            buttons[i].classList.remove("underline");
        }

        // Adiciona estado ativo ao botão selecionado
        buttons[index].classList.add("text-white");
        buttons[index].classList.add("underline");

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
    const buttons = document.getElementById("buttons_container").children;
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
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].getAttribute("data-theme") === savedTheme) {
                console.log(
                    "🎯 POPUP: Ativando tema salvo:",
                    savedTheme,
                    "índice:",
                    i
                );
                toggle(i);
                break;
            }
        }

        // Se nenhum tema foi encontrado, ativa o azul (padrão)
        if (savedTheme === "blue") {
            console.log("🔵 POPUP: Ativando tema padrão azul");
            toggle(0);
        }
    });

    // Inicialização padrão - mostrar status inicial
    showStatus(
        `<div style="text-align: center; font-size: 11px; line-height: 1.3; color: rgba(255,255,255,0.7);">
        <div style="display: flex; align-items: center; justify-content: center; gap: 4px; margin-bottom: 1px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.17 14.83a4 4 0 1 0 0-5.66"/>
            </svg>
            <span>Alexandre Claudino Simas Santos</span>
        </div>
        <div style="display: flex; align-items: center; justify-content: center; gap: 4px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/>
                <rect x="2" y="4" width="20" height="16" rx="2"/>
            </svg>
            <span>alexandress@tjsc.jus.br</span>
        </div>
    </div>`,
        "info",
        false,
        true
    );

    console.log("✅ POPUP: Listeners de configuração e tema registrados");
});
