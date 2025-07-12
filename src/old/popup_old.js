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
        var buttons = document.getElementById('buttons_container').children;

        // Remove estado ativo de todos os botões
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('text-white');
            buttons[i].classList.remove('underline');
        }

        // Adiciona estado ativo ao botão selecionado
        buttons[index].classList.add('text-white');
        buttons[index].classList.add('underline');

        // Aplica o tema selecionado
        var theme = buttons[index].getAttribute('data-theme');
        console.log('🎨 POPUP: Tema selecionado:', theme);
        applyTheme(theme);
    }

    // Função para aplicar o tema
    function applyTheme(theme) {
        console.log('🎨 POPUP: Iniciando aplicação do tema:', theme);

        // Salva a preferência do tema
        chrome.storage.sync.set({ selectedTheme: theme }, function () {
            console.log('✅ POPUP: Tema salvo no storage:', theme);
        });

        // Envia mensagem para o content script aplicar o tema
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (tabs[0]) {
                console.log('📤 POPUP: Enviando mensagem para tab:', tabs[0].id);
                chrome.tabs.sendMessage(tabs[0].id, {
                    action: 'applyTheme',
                    theme: theme
                }, function (response) {
                    if (chrome.runtime.lastError) {
                        console.log('❌ POPUP: Erro na comunicação:', chrome.runtime.lastError.message);
                    } else {
                        console.log('✅ POPUP: Resposta recebida:', response);
                    }
                });
            } else {
                console.log('❌ POPUP: Nenhuma aba ativa encontrada');
            }
        });
    }

    // ========================================
    // FUNÇÕES DE MODAL CUSTOMIZADAS
    // ========================================

    // Função para substituir alert() - cria modal personalizado
    function showAlert(message, type = "info") {
        return new Promise((resolve) => {
            const modal = document.createElement("div");
            modal.className = "eprobe-alert-modal";
            modal.style.cssText = `
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                background: rgba(0, 0, 0, 0.8) !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                z-index: 999999 !important;
                font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
                backdrop-filter: blur(8px) !important;
                margin: 0 !important;
                padding: 20px !important;
                box-sizing: border-box !important;
            `;

            const content = document.createElement("div");
            content.style.cssText = `
                background: linear-gradient(135deg, rgb(30, 41, 59) 0%, rgb(15, 23, 42) 100%) !important;
                padding: 0 !important;
                border-radius: 16px !important;
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1) !important;
                max-width: 520px !important;
                width: 100% !important;
                max-height: 85vh !important;
                overflow: hidden !important;
                text-align: left !important;
                font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif !important;
                animation: modalEnter 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
                margin: 0 !important;
                box-sizing: border-box !important;
                position: relative !important;
            `;

            // Definir ícones SVG seguindo o padrão do app
            const getIcon = (type) => {
                switch (type) {
                    case "error":
                        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(248, 113, 113)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="15" y1="9" x2="9" y2="15"/>
                            <line x1="9" y1="9" x2="15" y2="15"/>
                        </svg>`;
                    case "success":
                        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(34, 197, 94)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20,6 9,17 4,12"/>
                        </svg>`;
                    default:
                        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(96, 165, 250)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="16" x2="12" y2="12"/>
                            <line x1="12" y1="8" x2="12.01" y2="8"/>
                        </svg>`;
                }
            };

            content.innerHTML = `
                <div style="
                    background: linear-gradient(135deg, rgb(51, 65, 85) 0%, rgb(30, 41, 59) 100%) !important;
                    padding: 24px 28px !important;
                    border-radius: 16px 16px 0 0 !important;
                    border-bottom: 1px solid rgba(148, 163, 184, 0.2) !important;
                    display: flex !important;
                    align-items: flex-start !important;
                    gap: 16px !important;
                    margin: 0 !important;
                    box-sizing: border-box !important;
                    position: relative !important;
                ">
                    <div style="
                        flex-shrink: 0 !important; 
                        margin-top: 4px !important;
                        background: rgba(96, 165, 250, 0.1) !important;
                        border-radius: 12px !important;
                        padding: 12px !important;
                        border: 1px solid rgba(96, 165, 250, 0.2) !important;
                    ">
                        ${getIcon(type)}
                    </div>
                    <div style="flex: 1 !important; overflow: hidden !important;">
                        <div style="
                            font-size: 16px !important; 
                            line-height: 1.6 !important; 
                            color: rgb(248, 250, 252) !important;
                            font-weight: 400 !important;
                            margin: 0 !important;
                            padding: 0 !important;
                            overflow-wrap: break-word !important;
                        ">
                            ${message.replace(/\n/g, "<br>")}
                        </div>
                    </div>
                    <button id="eprobe-alert-close" style="
                        position: absolute !important;
                        top: 20px !important;
                        right: 20px !important;
                        background: rgba(148, 163, 184, 0.1) !important;
                        border: 1px solid rgba(148, 163, 184, 0.2) !important;
                        color: rgb(203, 213, 225) !important;
                        width: 32px !important;
                        height: 32px !important;
                        border-radius: 8px !important;
                        cursor: pointer !important;
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        transition: all 0.2s ease !important;
                        padding: 0 !important;
                        margin: 0 !important;
                        font-size: 16px !important;
                        line-height: 1 !important;
                    ">×</button>
                </div>
                <div style="
                    background: linear-gradient(135deg, rgb(30, 41, 59) 0%, rgb(15, 23, 42) 100%) !important;
                    padding: 20px 28px 28px 28px !important;
                    border-radius: 0 0 16px 16px !important;
                    text-align: right !important;
                    margin: 0 !important;
                    box-sizing: border-box !important;
                    border-top: 1px solid rgba(148, 163, 184, 0.1) !important;
                ">
                    <button id="eprobe-alert-ok" style="
                        background: linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(37, 99, 235) 100%) !important;
                        color: white !important;
                        border: 1px solid rgb(59, 130, 246) !important;
                        padding: 12px 32px !important;
                        border-radius: 10px !important;
                        cursor: pointer !important;
                        font-size: 14px !important;
                        font-weight: 600 !important;
                        min-width: 100px !important;
                        min-height: 44px !important;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                        font-family: inherit !important;
                        margin: 0 !important;
                        box-sizing: border-box !important;
                        box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3) !important;
                        letter-spacing: 0.025em !important;
                    ">Entendi</button>
                </div>
            `;

            // Adicionar animação CSS
            const style = document.createElement("style");
            style.textContent = `
                @keyframes modalEnter {
                    from {
                        opacity: 0;
                        transform: translateY(30px) scale(0.9);
                        filter: blur(4px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                        filter: blur(0);
                    }
                }
                
                @keyframes modalExit {
                    from {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                        filter: blur(0);
                    }
                    to {
                        opacity: 0;
                        transform: translateY(-20px) scale(0.95);
                        filter: blur(2px);
                    }
                }
                
                .eprobe-alert-modal {
                    isolation: isolate !important;
                }
                
                .eprobe-alert-modal * {
                    box-sizing: border-box !important;
                }
            `;
            document.head.appendChild(style);

            modal.appendChild(content);

            // Garantir que o modal seja anexado ao document.body
            if (document.body) {
                document.body.appendChild(modal);
            } else {
                document.documentElement.appendChild(modal);
            }

            // Função para remover o modal com animação
            const removeModal = () => {
                try {
                    content.style.animation =
                        "modalExit 0.3s ease-out forwards";
                    modal.style.opacity = "0";
                    setTimeout(() => {
                        if (modal.parentNode) {
                            modal.parentNode.removeChild(modal);
                        }
                        if (style.parentNode) {
                            style.parentNode.removeChild(style);
                        }
                    }, 300);
                } catch (e) {
                    console.warn("Erro ao remover modal:", e);
                }
                resolve();
            };

            // Adicionar eventos aos botões
            const okButton = content.querySelector("#eprobe-alert-ok");
            const closeButton = content.querySelector("#eprobe-alert-close");

            if (okButton) {
                okButton.addEventListener("click", removeModal);
            }

            if (closeButton) {
                closeButton.addEventListener("click", removeModal);
            }

            // Adicionar efeitos hover elegantes
            if (okButton) {
                okButton.addEventListener("mouseenter", () => {
                    okButton.style.background =
                        "linear-gradient(135deg, rgb(96, 165, 250) 0%, rgb(59, 130, 246) 100%)";
                    okButton.style.borderColor = "rgb(96, 165, 250)";
                    okButton.style.transform = "translateY(-2px)";
                    okButton.style.boxShadow =
                        "0 8px 25px rgba(59, 130, 246, 0.4)";
                });
                okButton.addEventListener("mouseleave", () => {
                    okButton.style.background =
                        "linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(37, 99, 235) 100%)";
                    okButton.style.borderColor = "rgb(59, 130, 246)";
                    okButton.style.transform = "translateY(0)";
                    okButton.style.boxShadow =
                        "0 4px 14px rgba(59, 130, 246, 0.3)";
                });
            }

            if (closeButton) {
                closeButton.addEventListener("mouseenter", () => {
                    closeButton.style.background = "rgba(248, 113, 113, 0.2)";
                    closeButton.style.borderColor = "rgba(248, 113, 113, 0.4)";
                    closeButton.style.color = "rgb(248, 113, 113)";
                    closeButton.style.transform = "scale(1.1)";
                });
                closeButton.addEventListener("mouseleave", () => {
                    closeButton.style.background = "rgba(148, 163, 184, 0.1)";
                    closeButton.style.borderColor = "rgba(148, 163, 184, 0.2)";
                    closeButton.style.color = "rgb(203, 213, 225)";
                    closeButton.style.transform = "scale(1)";
                });
            }

            // Fechar com ESC
            const handleKeydown = (e) => {
                if (e.key === "Escape") {
                    document.removeEventListener("keydown", handleKeydown);
                    removeModal();
                }
            };
            document.addEventListener("keydown", handleKeydown);

            // Fechar clicando fora do modal
            modal.addEventListener("click", (e) => {
                if (e.target === modal) {
                    removeModal();
                }
            });

            // Focar no modal
            modal.setAttribute("tabindex", "-1");
            setTimeout(() => {
                modal.focus();
            }, 100);
        });
    }

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

    // Ajuda - só adiciona event listener se o botão existir
    if (helpBtn) {
        helpBtn.addEventListener("click", async function () {
            // Modal de ajuda com visual limpo e profissional
            await showAlert(
                `
            <div style="text-align: left; line-height: 1.5; color: rgb(243, 246, 249);">
                <div style="
                    text-align: center; 
                    margin-bottom: 24px; 
                    padding-bottom: 16px; 
                    border-bottom: 1px solid rgba(82, 82, 82, 0.3);
                ">
                    <h3 style="
                        color: rgb(243, 246, 249); 
                        margin: 0 0 8px 0; 
                        font-size: 18px; 
                        font-weight: 600;
                        letter-spacing: 0.5px;
                    ">
                        Sobre a Extensão eProbe
                    </h3>
                    <p style="
                        margin: 0; 
                        font-size: 13px; 
                        color: rgba(243, 246, 249, 0.7);
                        font-weight: 400;
                    ">
                        Automação para processos do eProc
                    </p>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h4 style="
                        color: rgb(133, 190, 255); 
                        margin: 0 0 12px 0; 
                        font-size: 14px; 
                        font-weight: 600;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                            <line x1="8" y1="21" x2="16" y2="21"/>
                            <line x1="12" y1="17" x2="12" y2="21"/>
                        </svg>
                        Funcionalidades
                    </h4>
                    <ul style="
                        margin: 0 0 0 24px; 
                        padding: 0; 
                        font-size: 13px; 
                        line-height: 1.6;
                        color: rgba(243, 246, 249, 0.9);
                    ">
                        <li style="margin-bottom: 4px;">Detecta dados de sessão no eProc</li>
                        <li style="margin-bottom: 4px;">Extrai informações de processos</li>
                        <li style="margin-bottom: 4px;">Copia dados para área de transferência</li>
                        <li style="margin-bottom: 4px;">Gera resumos com IA</li>
                    </ul>
                </div>

                <div style="margin-bottom: 20px;">
                    <h4 style="
                        color: rgb(133, 190, 255); 
                        margin: 0 0 12px 0; 
                        font-size: 14px; 
                        font-weight: 600;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="3"/>
                            <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                        </svg>
                        Configurações
                    </h4>
                    <ul style="
                        margin: 0 0 0 24px; 
                        padding: 0; 
                        font-size: 13px; 
                        line-height: 1.6;
                        color: rgba(243, 246, 249, 0.9);
                    ">
                        <li style="margin-bottom: 4px;">
                            <strong style="color: rgb(243, 246, 249);">Data da sessão em destaque:</strong> 
                            Realça visualmente as datas de sessão
                        </li>
                        <li style="margin-bottom: 4px;">
                            <strong style="color: rgb(243, 246, 249);">Requisições automáticas:</strong> 
                            Busca dados automaticamente
                        </li>
                    </ul>
                </div>

                <div style="margin-bottom: 20px;">
                    <h4 style="
                        color: rgb(133, 190, 255); 
                        margin: 0 0 12px 0; 
                        font-size: 14px; 
                        font-weight: 600;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 11l3 3 8-8"/>
                            <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.12 0 4.07.74 5.61 1.98"/>
                        </svg>
                        Como Usar
                    </h4>
                    <ol style="
                        margin: 0 0 0 24px; 
                        padding: 0; 
                        font-size: 13px; 
                        line-height: 1.6;
                        color: rgba(243, 246, 249, 0.9);
                    ">
                        <li style="margin-bottom: 4px;">Navegue até uma página do eProc</li>
                        <li style="margin-bottom: 4px;">Clique no botão "AUTOMAÇÃO SENT1"</li>
                        <li style="margin-bottom: 4px;">Aguarde a detecção automática</li>
                        <li style="margin-bottom: 4px;">Use os dados extraídos conforme necessário</li>
                    </ol>
                </div>

                <div style="
                    background: rgba(58, 88, 196, 0.15); 
                    padding: 16px; 
                    border-radius: 6px; 
                    border: 1px solid rgba(58, 88, 196, 0.3);
                    margin-top: 16px;
                ">
                    <div style="
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        margin-bottom: 8px;
                    ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(133, 190, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                            <line x1="9" y1="9" x2="9.01" y2="9"/>
                            <line x1="15" y1="9" x2="15.01" y2="9"/>
                        </svg>
                        <h4 style="
                            color: rgb(133, 190, 255); 
                            margin: 0; 
                            font-size: 14px; 
                            font-weight: 600;
                        ">Dica</h4>
                    </div>
                    <p style="
                        margin: 0; 
                        font-size: 13px; 
                        color: rgba(243, 246, 249, 0.9);
                        line-height: 1.5;
                    ">
                        Mantenha as configurações ativas para melhor experiência de uso.
                    </p>
                </div>
            </div>
            `,
                "info",
                function () {
                    // Callback quando modal é fechado
                    if (chrome.tabs) {
                        chrome.tabs.query(
                            { active: true, currentWindow: true },
                            function (tabs) {
                                if (tabs[0]) {
                                    chrome.tabs.sendMessage(
                                        tabs[0].id,
                                        { action: "executeAutomation" },
                                        function (response) {
                                            if (chrome.runtime.lastError) {
                                                console.log(
                                                    "Erro ao comunicar com a página:",
                                                    chrome.runtime.lastError
                                                        .message
                                                );
                                                showStatus(
                                                    "Erro de comunicação. Recarregue a página.",
                                                    "error"
                                                );
                                            } else if (
                                                response &&
                                                response.success
                                            ) {
                                                showStatus(
                                                    "Automação executada com sucesso!",
                                                    "success"
                                                );
                                            } else {
                                                showStatus(
                                                    "Navegue até uma página do eProc para usar a automação",
                                                    "info"
                                                );
                                            }
                                        }
                                    );
                                } else {
                                    showStatus(
                                        "Nenhuma aba ativa encontrada",
                                        "info"
                                    );
                                }

                                // Limpar status após 2 segundos
                                setTimeout(() => {
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
                                }, 2000);
                            }
                        );
                    }
                }
            );
        });

        // Verificar estado inicial - removido por enquanto
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
    } else {
        console.warn(
            "❌ POPUP.JS: Botão help não encontrado, mas continuando normalmente"
        );
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

    console.log('🚀 POPUP: Configurando event listeners para botões de tema...');

    // Adicionar event listeners para os botões de tema
    const buttons = document.getElementById('buttons_container').children;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'));
            console.log('🖱️ POPUP: Botão clicado, índice:', index, 'tema:', this.getAttribute('data-theme'));
            toggle(index);
        });
    }
    console.log('✅ POPUP: Event listeners adicionados a', buttons.length, 'botões');

    // Carrega tema salvo ou usa azul como padrão
    chrome.storage.sync.get(['selectedTheme'], function (result) {
        const savedTheme = result.selectedTheme || 'blue';
        console.log('💾 POPUP: Tema salvo encontrado:', savedTheme);

        // Encontra o botão do tema salvo e o ativa
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].getAttribute('data-theme') === savedTheme) {
                console.log('🎯 POPUP: Ativando tema salvo:', savedTheme, 'índice:', i);
                toggle(i);
                break;
            }
        }

        // Se nenhum tema foi encontrado, ativa o azul (padrão)
        if (savedTheme === 'blue') {
            console.log('🔵 POPUP: Ativando tema padrão azul');
            toggle(0);
        }
    });

    console.log("✅ POPUP: Listeners de configuração e tema registrados");
});
