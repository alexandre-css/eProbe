// Popup script simplificado - funcionalidades removidas
document.addEventListener("DOMContentLoaded", function () {
    const helpBtn = document.getElementById("help");
    const statusDiv = document.getElementById("status");

    function showStatus(message, type = "info", showSpinner = false) {
        const statusText = statusDiv.querySelector(".status-text");
        const spinner = statusDiv.querySelector(".loading-spinner");

        if (statusText) {
            statusText.textContent = message;
        } else {
            statusDiv.textContent = message;
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

    // Ajuda
    helpBtn.addEventListener("click", function () {
        // Criar modal customizado ao invés de alert
        const helpModal = document.createElement("div");
        helpModal.className = "help-modal-overlay";
        helpModal.innerHTML = `
            <div class="help-modal">
                <div class="help-modal-header">
                    <h2>
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <path d="m12 17 .01 0" />
                        </svg>
                        Sobre a Extensão eProbe
                    </h2>
                    <button class="help-close-btn">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m18 6-12 12" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                </div>
                <div class="help-modal-content">
                    <div class="help-section">
                        <h3>
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="3" />
                                <path d="M12 1v6m0 6v6" />
                                <path d="m21 12-6 0m-6 0-6 0" />
                            </svg>
                            STATUS ATUAL
                        </h3>
                        <ul>
                            <li><strong>Em desenvolvimento:</strong> A extensão está sendo reestruturada</li>
                            <li><strong>Funcionalidades removidas:</strong> Botões de automação foram temporariamente desabilitados</li>
                            <li><strong>Próximas atualizações:</strong> Novas funcionalidades serão implementadas em breve</li>
                        </ul>
                    </div>
                    <div class="help-section">
                        <h3>
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 8V4H8" />
                                <rect width="16" height="12" x="4" y="8" rx="2" />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                            </svg>
                            OBJETIVO DA EXTENSÃO
                        </h3>
                        <ul>
                            <li>Automatizar tarefas repetitivas no eProc</li>
                            <li>Extrair texto de documentos SENT1</li>
                            <li>Integrar com ferramentas de IA para análise</li>
                            <li>Melhorar produtividade de advogados e servidores</li>
                        </ul>
                    </div>
                    <div class="help-section">
                        <h3>
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 16v-4" />
                                <path d="m12 8 .01 0" />
                            </svg>
                            INFORMAÇÕES IMPORTANTES
                        </h3>
                        <ul>
                            <li><strong>Suporte:</strong> Entre em contato para dúvidas ou sugestões</li>
                            <li><strong>Atualizações:</strong> Verifique periodicamente por novas versões</li>
                            <li><strong>Uso responsável:</strong> Use apenas em páginas oficiais do eProc</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(helpModal);

        // Fechar modal
        const closeBtn = helpModal.querySelector(".help-close-btn");
        const overlay = helpModal;

        const closeModal = () => {
            document.body.removeChild(helpModal);
        };

        closeBtn.addEventListener("click", closeModal);
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) closeModal();
        });
    });

    // Verificar estado inicial - removido por enquanto
    showStatus(
        "🄯 Alexandre Claudino Simas Santos\n          ✉ alexandress@tjsc.jus.br",
        "info"
    );
});
