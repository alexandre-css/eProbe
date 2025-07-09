// Popup script para automação completa
document.addEventListener("DOMContentLoaded", function () {
    const runAutomationBtn = document.getElementById("runAutomation");
    const openSENT1Btn = document.getElementById("openSENT1");
    const extractOnlyBtn = document.getElementById("extractOnly");
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

    async function executeInActiveTab(functionName, ...args) {
        try {
            const [tab] = await chrome.tabs.query({
                active: true,
                currentWindow: true,
            });

            const result = await chrome.tabs.sendMessage(tab.id, {
                action: functionName,
                args: args,
            });

            return result;
        } catch (error) {
            console.error("Erro ao executar no tab ativo:", error);
            showStatus(
                "Erro: Certifique-se de estar na página do eProc",
                "error"
            );
            return null;
        }
    }

    // Automação completa
    runAutomationBtn.addEventListener("click", async function () {
        showStatus("Iniciando automação completa...", "info", true);

        try {
            const [tab] = await chrome.tabs.query({
                active: true,
                currentWindow: true,
            });

            await chrome.tabs.sendMessage(tab.id, {
                action: "runFullAutomation",
            });

            showStatus(
                "✅ Automação iniciada! Verifique as notificações na página",
                "success"
            );

            // Fechar popup após 2 segundos
            setTimeout(() => {
                window.close();
            }, 2000);
        } catch (error) {
            console.error("Erro na automação:", error);
            showStatus(
                "❌ Erro: Certifique-se de estar numa página do eProc",
                "error"
            );
        }
    });

    // Apenas abrir SENT1
    openSENT1Btn.addEventListener("click", async function () {
        showStatus("Procurando e abrindo SENT1...", "info", true);

        try {
            const [tab] = await chrome.tabs.query({
                active: true,
                currentWindow: true,
            });

            const result = await chrome.tabs.sendMessage(tab.id, {
                action: "autoOpenSENT1",
            });

            if (result && result.success) {
                showStatus("✅ SENT1 aberto em nova aba!", "success");
            } else {
                showStatus("❌ SENT1 não encontrado nesta página", "error");
            }
        } catch (error) {
            console.error("Erro ao abrir SENT1:", error);
            showStatus(
                "❌ Erro: Certifique-se de estar na página do processo",
                "error"
            );
        }
    });

    // Apenas extrair texto
    extractOnlyBtn.addEventListener("click", async function () {
        showStatus("Extraindo texto...", "info", true);

        try {
            const [tab] = await chrome.tabs.query({
                active: true,
                currentWindow: true,
            });

            const result = await chrome.tabs.sendMessage(tab.id, {
                action: "autoExtractText",
            });

            if (result && result.success && result.text) {
                // Copiar para clipboard
                await navigator.clipboard.writeText(result.text);
                showStatus(
                    `✅ Texto extraído e copiado! (${result.text.length} chars)`,
                    "success"
                );
            } else {
                showStatus("❌ Não foi possível extrair o texto", "error");
            }
        } catch (error) {
            console.error("Erro na extração:", error);
            showStatus(
                "❌ Erro: Certifique-se de estar na página do documento",
                "error"
            );
        }
    });

    // Ajuda
    helpBtn.addEventListener("click", function () {
        const helpText = `
🤖 COMO USAR A AUTOMAÇÃO SENT1:

📍 PASSO 1: Na página do processo
• Acesse a página de detalhes do processo no eProc
• Clique em "🚀 Executar Automação Completa"
• A extensão abrirá o SENT1 automaticamente

📍 PASSO 2: Na página do documento
• Aguarde o documento SENT1 carregar
• Execute a automação novamente
• O texto será extraído e copiado automaticamente
• O ChatGPT será aberto para colar o texto

🔧 AÇÕES INDIVIDUAIS:
• "📄 Apenas Abrir SENT1" - Só abre o documento
• "📋 Apenas Extrair Texto" - Só extrai e copia

💡 DICAS:
• Sempre execute na página correta do eProc
• Aguarde as notificações na tela
• Use Ctrl+V para colar no ChatGPT
        `;

        alert(helpText);
    });

    // Verificar estado inicial
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tab = tabs[0];

        if (tab.url.includes("eproc")) {
            if (tab.url.includes("processo_selecionar")) {
                showStatus("📋 Página de processo detectada", "info");
            } else if (tab.url.includes("acessar_documento")) {
                showStatus("📄 Página de documento detectada", "info");
            } else {
                showStatus("⚠️ Navegue até a página do processo", "info");
            }
        } else {
            showStatus("⚠️ Acesse uma página do eProc primeiro", "error");
        }
    });
});
