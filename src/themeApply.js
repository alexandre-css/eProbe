// eProbe Theme Auto-Apply Script
// Aplica automaticamente o tema salvo quando a página do eProc carrega

/*
========================================
FUNCIONALIDADES DE STATUS DE SESSÃO
========================================

O eProbe agora detecta automaticamente o status da sessão do processo:

📋 STATUS DETECTADOS:
• "Processo Pautado" - Incluído em Pauta em [data]
• "Processo Julgado" - Julgado em Pauta em [data] 
• "Processo Retirado de Pauta" - Retirado em Pauta em [data]

🎨 INTERFACE DINÂMICA:
• Cores automáticas baseadas no status:
  - Azul (#3b82f6) para Pautado
  - Verde (#16a34a) para Julgado
  - Vermelho (#dc2626) para Retirado

🔍 FUNÇÕES DE DEBUG:
• window.SENT1_AUTO.debugDeteccaoStatusSessao() - Detectar status manualmente
• window.SENT1_AUTO.debugStatusSessao() - Mostrar informações do status
• window.SENT1_AUTO.getStatusSessao() - Obter dados do status atual

⚙️ IMPLEMENTAÇÃO:
• Detecção automática via regex nas minutas do processo
• Fallback para detecção padrão se status específico não for encontrado
• Interface atualizada automaticamente com cores e textos dinâmicos
*/

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

// Verifica configuração inicial da data da sessão - OTIMIZADA
if (typeof chrome !== "undefined" && chrome.storage) {
    chrome.storage.sync.get(["highlightSessionDate"], function (result) {
        const isEnabled = result.highlightSessionDate !== false; // default true
        console.log(
            `💾 Configuração inicial do destaque da data da sessão: ${
                isEnabled ? "ATIVO" : "INATIVO"
            }`
        );

        // Aplica a configuração imediatamente se o elemento já existir
        toggleSessionDateDisplay(isEnabled);
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
    } // Aplica o estilo IMEDIATAMENTE via CSS inline para evitar qualquer delay
    const navbar =
        document.querySelector("#navbar.navbar.bg-instancia") ||
        document.querySelector(".navbar.bg-instancia") ||
        document.querySelector("nav.navbar.bg-instancia");

    if (navbar) {
        navbar.style.backgroundImage = theme.navbar;
        navbar.style.transition = "background-image 0.3s ease";
        console.log(`🎨 Estilo aplicado diretamente na navbar: ${theme.name}`);
    }

    // Cria elemento de estilo para garantir que persista
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
        
        /* Efeitos de hover para o elemento eProbe na navbar - CORRIGIDO para ser mais visível como o nativo */
        #eprobe-navbar-element {
            transition: all 0.2s ease !important;
            position: relative !important;
            font-family: 'Exo 2', 'Exo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
            font-weight: 500 !important;
            font-display: swap !important;
        }
        
        #eprobe-navbar-element:hover {
            background-color: rgba(255, 255, 255, 0.15) !important;
            color: #ffffff !important;
            opacity: 1 !important;
            text-decoration: none !important;
            border-radius: 4px !important;
        }
        
        #eprobe-navbar-element:active {
            background-color: rgba(255, 255, 255, 0.2) !important;
            opacity: 1 !important;
            border-radius: 4px !important;
        }
        
        /* Garantir que mantém a mesma aparência dos outros links da navbar */
        #eprobe-navbar-element:focus {
            outline: none !important;
            background-color: rgba(255, 255, 255, 0.15) !important;
            opacity: 1 !important;
            border-radius: 4px !important;
        }
    `;

    // Adiciona o estilo ao head da página
    document.head.appendChild(styleElement);

    console.log(`✅ Tema ${theme.name} aplicado automaticamente!`);
}

(function () {
    "use strict";

    console.log("🎨 eProbe Theme Script carregado");

    // Função para verificar e aplicar tema salvo - OTIMIZADA
    function loadAndApplyTheme() {
        // Primeiro tentar localStorage para aplicação instantânea
        try {
            const localTheme = localStorage.getItem("eprobe_selected_theme");
            if (localTheme) {
                console.log(
                    `⚡ Tema local encontrado: ${localTheme} - aplicando instantaneamente`
                );
                applyThemeStyles(localTheme);
            }
        } catch (e) {
            console.warn("⚠️ Erro ao acessar localStorage:", e);
        }

        // Depois verificar chrome.storage para sincronização
        if (typeof chrome !== "undefined" && chrome.storage) {
            chrome.storage.sync.get(["selectedTheme"], function (result) {
                const savedTheme = result.selectedTheme || "blue";
                console.log(`💾 Tema sincronizado encontrado: ${savedTheme}`);

                // Salvar no localStorage para próxima vez
                try {
                    localStorage.setItem("eprobe_selected_theme", savedTheme);
                } catch (e) {
                    console.warn("⚠️ Erro ao salvar no localStorage:", e);
                }

                applyThemeStyles(savedTheme);
            });
        } else {
            // Fallback: aplicar tema blue se não há chrome.storage
            console.log("🔄 Chrome storage não disponível, usando tema blue");
            applyThemeStyles("blue");
        }
    }

    // Aplica tema IMEDIATAMENTE para evitar delay visual
    loadAndApplyTheme();

    // Também aplica quando o DOM estiver pronto como backup
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", loadAndApplyTheme);
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
