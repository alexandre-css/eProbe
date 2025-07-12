// eProbe Theme Auto-Apply Script
// Aplica automaticamente o tema salvo quando a página do eProc carrega

// Escuta mudanças no storage para aplicar temas em tempo real
if (typeof chrome !== "undefined" && chrome.storage) {
    chrome.storage.onChanged.addListener(function (changes, area) {
        console.log(
            "🔄 STORAGE: Mudança detectada no storage:",
            changes,
            "área:",
            area
        );
        if (area === "sync") {
            // Mudança de tema
            if (changes.selectedTheme) {
                const newTheme = changes.selectedTheme.newValue;
                console.log(`🔄 Tema alterado para: ${newTheme}`);
                applyThemeStyles(newTheme);
            }

            // Mudança no destaque da data da sessão
            if (changes.highlightSessionDate) {
                const isEnabled = changes.highlightSessionDate.newValue;
                console.log(
                    `🔄 Destaque da data da sessão alterado para: ${
                        isEnabled ? "ATIVO" : "INATIVO"
                    }`
                );
                toggleSessionDateDisplay(isEnabled);
            }
        }
    });
    console.log("✅ STORAGE: Listener de mudanças registrado");
}

// Função para controlar exibição da data da sessão
function toggleSessionDateDisplay(isEnabled) {
    const sessionDateElement = document.getElementById("eprobe-data-sessao");

    if (sessionDateElement) {
        if (isEnabled) {
            sessionDateElement.style.display = "flex";
            console.log("✅ Data da sessão exibida");
        } else {
            sessionDateElement.style.display = "none";
            console.log("❌ Data da sessão ocultada");
        }
    } else {
        console.log("ℹ️ Elemento da data da sessão não encontrado na página");
    }
}

// Verifica configuração inicial da data da sessão
if (typeof chrome !== "undefined" && chrome.storage) {
    chrome.storage.sync.get(["highlightSessionDate"], function (result) {
        const isEnabled = result.highlightSessionDate !== false; // default true
        console.log(
            `💾 Configuração inicial do destaque da data da sessão: ${
                isEnabled ? "ATIVO" : "INATIVO"
            }`
        );

        // Aplica a configuração após um delay para garantir que a página carregou
        setTimeout(() => {
            toggleSessionDateDisplay(isEnabled);
        }, 1000);
    });
}

// Função para aplicar estilos do tema (definida globalmente)
function applyThemeStyles(themeName) {
    console.log(`🎨 Aplicando tema ${themeName} automaticamente...`);

    // Remove estilos de tema anteriores
    const existingThemeStyle = document.getElementById("eprobe-theme-styles");
    if (existingThemeStyle) {
        existingThemeStyle.remove();
    }

    // Define as cores dos temas
    const themeColors = {
        blue: {
            navbar: "linear-gradient(to left, #0d1c2c, #007ebd)",
            name: "Azul",
        },
        dark: {
            navbar: "linear-gradient(to left, #1a1a1a, #696363)",
            name: "Escuro",
        },
        light: {
            navbar: "linear-gradient(to top, #7BC6CC, #BE93C5)",
            name: "Claro",
        },
        violet: {
            navbar: "linear-gradient(to left, #6b46c1, #4c1d95)",
            name: "Violeta",
        },
    };

    const theme = themeColors[themeName];
    if (!theme) {
        console.log(`❌ Tema ${themeName} não encontrado`);
        return;
    }

    // Cria elemento de estilo
    const styleElement = document.createElement("style");
    styleElement.id = "eprobe-theme-styles";
    styleElement.textContent = `
        /* eProbe Theme: ${theme.name} */
        #navbar.navbar.bg-instancia {
            background-image: ${theme.navbar} !important;
            transition: background-image 0.3s ease !important;
        }
        
        .navbar.bg-instancia {
            background-image: ${theme.navbar} !important;
            transition: background-image 0.3s ease !important;
        }
        
        /* Para compatibilidade com diferentes versões do eProc */
        nav.navbar.bg-instancia,
        .navbar.text-white.bg-instancia,
        .navbar.text-white.d-xl-flex.bg-instancia {
            background-image: ${theme.navbar} !important;
            transition: background-image 0.3s ease !important;
        }
    `;

    // Adiciona o estilo ao head da página
    document.head.appendChild(styleElement);

    console.log(`✅ Tema ${theme.name} aplicado automaticamente!`);
}

(function () {
    "use strict";

    console.log("🎨 eProbe Theme Script carregado");

    // Função para verificar e aplicar tema salvo
    function loadAndApplyTheme() {
        if (typeof chrome !== "undefined" && chrome.storage) {
            chrome.storage.sync.get(["selectedTheme"], function (result) {
                const savedTheme = result.selectedTheme || "blue";
                console.log(`💾 Tema salvo encontrado: ${savedTheme}`);
                applyThemeStyles(savedTheme);
            });
        }
    }

    // Aplica tema quando o DOM estiver pronto
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", loadAndApplyTheme);
    } else {
        loadAndApplyTheme();
    }

    // Escuta mudanças no storage para aplicar temas em tempo real
    if (typeof chrome !== "undefined" && chrome.storage) {
        chrome.storage.onChanged.addListener(function (changes, area) {
            if (area === "sync" && changes.selectedTheme) {
                const newTheme = changes.selectedTheme.newValue;
                console.log(`🔄 Tema alterado para: ${newTheme}`);
                applyThemeStyles(newTheme);
            }
        });
    }

    // Exposição da função para chamada direta (debugging)
    window.applyThemeStyles = applyThemeStyles;
    window.testVioletTheme = function () {
        console.log("🧪 TESTE: Aplicando tema violeta diretamente...");
        applyThemeStyles("violet");
    };
    console.log("🌐 GLOBAL: Funções de tema expostas globalmente");
    console.log(
        "🧪 TESTE: Use window.testVioletTheme() para testar o tema violeta"
    );
})();
