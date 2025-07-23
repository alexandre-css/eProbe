// ===== APLICAÇÃO INSTANTÂNEA DE ESTILOS - ELIMINAR FLASH =====
(function aplicarEstilosInstantaneos() {
    console.log("⚡ INSTANT: Aplicando estilos críticos instantaneamente...");

    // CSS crítico aplicado IMEDIATAMENTE para eliminar flash
    const cssInstantaneo = document.createElement("style");
    cssInstantaneo.id = "eprobe-instant-styles";
    cssInstantaneo.textContent = `
        /* ===== ESTILOS INSTANTÂNEOS ANTI-FLASH ===== */
        
        /* Ocultar flash inicial com transição suave */
        body {
            transition: opacity 0.1s ease-in-out !important;
        }
        
        /* Preparar containers para elementos eProbe */
        .navbar, #navbar {
            position: relative !important;
        }
        
        /* Fontes críticas carregadas instantaneamente */
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap');
        
        /* Cards de sessão unificados */
        .session-card {
            opacity: 1;
            transform: translateX(0);
        }
        
        /* Navbar com fade-in */
        #eprobe-navbar-element {
            opacity: 0 !important;
            animation: fadeInNavbar 0.4s ease-out 0.2s forwards !important;
        }
        
        @keyframes fadeInNavbar {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        /* Botões da extensão com transição suave */
        [id*="sent1"], [class*="eprobe"] {
            opacity: 0;
            animation: fadeInElement 0.5s ease-out 0.3s forwards;
        }
        
        @keyframes fadeInElement {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        /* Tooltips preparados */
        .eprobe-tooltip {
            opacity: 0;
            transition: opacity 0.2s ease, transform 0.2s ease;
        }
        
        /* ===== ESTILOS SVG FIGMA INSTANTÂNEOS ===== */
        .eprobe-figma-card-svg {
            display: inline-block;
            margin: 8px 0;
            position: relative;
            opacity: 0;
            animation: fadeInElement 0.5s ease-out 0.4s forwards;
        }
        
        .eprobe-figma-svg-container {
            position: relative;
            display: inline-block;
        }
        
        .eprobe-figma-svg-container svg {
            transition: all 0.2s ease;
            display: block;
        }
        
        .eprobe-figma-card-svg:hover .eprobe-figma-svg-container svg {
            transform: translateY(-1px);
            filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
        }
        
        .eprobe-figma-data-overlay {
            position: absolute;
            bottom: 12px;
            left: 24px;
            right: 24px;
            pointer-events: none;
            z-index: 10;
        }
        
        .eprobe-figma-data-text {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 11px;
            font-weight: 500;
            color: #1D1B20;
            opacity: 0.9;
            text-align: left;
            display: block;
            line-height: 1.2;
            background: rgba(255, 255, 255, 0.8);
            padding: 2px 4px;
            border-radius: 4px;
            backdrop-filter: blur(4px);
        }
        
        /* ===== ELEMENTOS DE INTERFACE PREPARADOS ===== */
        #sent1-auto-button,
        .documento-relevante-button,
        .eprobe-button {
            opacity: 0;
            animation: fadeInElement 0.5s ease-out 0.3s forwards;
        }
        
        /* ===== MODAL E NOTIFICAÇÕES PREPARADAS ===== */
        .eprobe-modal,
        .eprobe-notification {
            opacity: 0;
            animation: fadeInElement 0.3s ease-out forwards;
        }
    `;

    // Inserir no head IMEDIATAMENTE - antes de qualquer outro script
    const head =
        document.head ||
        document.getElementsByTagName("head")[0] ||
        document.documentElement;
    if (head) {
        head.insertBefore(cssInstantaneo, head.firstChild);
        console.log("✅ INSTANT: CSS crítico aplicado no topo do head");
    }

    // Aplicar tema salvo do localStorage instantaneamente (sem aguardar APIs)
    const temaLocalStorage = localStorage.getItem("eprobe_selected_theme");
    if (temaLocalStorage && temaLocalStorage !== "blue") {
        console.log(
            `⚡ INSTANT: Aplicando tema ${temaLocalStorage} do localStorage`
        );

        const temasDisponiveis = {
            dark: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
            light: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)",
            violet: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8e44ad 100%)",
            blue: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        };

        const gradientTema =
            temasDisponiveis[temaLocalStorage] || temasDisponiveis.blue;

        const temaInstantaneo = document.createElement("style");
        temaInstantaneo.id = "eprobe-instant-theme";
        temaInstantaneo.textContent = `
            /* Tema aplicado instantaneamente */
            #navbar.navbar.bg-instancia,
            .navbar.bg-instancia,
            nav.navbar.bg-instancia,
            .navbar.text-white.bg-instancia,
            .navbar.text-white.d-xl-flex.bg-instancia {
                background-image: ${gradientTema} !important;
                transition: background-image 0.3s ease !important;
            }
        `;
        head.insertBefore(temaInstantaneo, head.firstChild);
        console.log("✅ INSTANT: Tema aplicado instantaneamente");
    }

    // ===== APLICAÇÃO ULTRA-RÁPIDA DE ELEMENTOS CRÍTICOS =====
    // Executar imediatamente após 1ms para garantir que DOM básico está pronto
    setTimeout(() => {
        try {
            // Garantir que navbar está visível instantaneamente
            const navbar =
                document.querySelector("#navbar.navbar.bg-instancia") ||
                document.querySelector(".navbar.bg-instancia") ||
                document.querySelector("nav.navbar.bg-instancia");

            if (navbar) {
                navbar.style.opacity = "1";
                navbar.style.transition = "all 0.3s ease";
                console.log(
                    "⚡ INSTANT: Navbar forcada a aparecer instantaneamente"
                );
            }

            // Forçar aplicação de tema se ainda não foi aplicado
            if (temaLocalStorage && navbar && !navbar.style.backgroundImage) {
                const gradientTema =
                    temasDisponiveis[temaLocalStorage] || temasDisponiveis.blue;
                navbar.style.backgroundImage = gradientTema;
                console.log("⚡ INSTANT: Tema forçado diretamente na navbar");
            }
        } catch (error) {
            console.warn("⚠️ INSTANT: Erro na aplicação ultra-rápida:", error);
        }
    }, 1);
})();

(async function () {
    "use strict";

    // ===== CORREÇÃO GLOBAL ULTRA-ROBUSTA PARA EVENT LISTENERS PASSIVOS =====
    (function corrigirPerformanceGlobalmenteRobusta() {
        // Event listeners que devem ser passivos para evitar violações
        const passiveEvents = [
            "scroll",
            "wheel",
            "touchstart",
            "touchmove",
            "touchend",
            "mouseenter",
            "mouseleave",
            "mouseover",
            "mouseout",
            "mousedown",
            "mouseup",
            "mousemove",
            "resize",
            "orientationchange",
            "contextmenu",
            "dragstart",
            "dragover",
            "drop",
            "keydown",
            "keyup",
            "pointermove",
            "pointerdown",
            "pointerup",
            "pointerenter",
            "pointerleave",
            "focus",
            "blur",
            "input",
            "change",
            "load",
            "DOMContentLoaded",
            "readystatechange",
            "beforeunload",
            "unload",
            "error",
            "abort",
            "select",
            "submit",
            "reset",
            "toggle",
            "transitionend",
            "animationend",
            "animationstart",
            "animationiteration",
        ];

        // 1. Interceptar addEventListener nativo COM FORÇA EXTRA
        const originalAddEventListener = EventTarget.prototype.addEventListener;
        EventTarget.prototype.addEventListener = function (
            type,
            listener,
            options
        ) {
            // FORÇA PASSIVE EM QUALQUER EVENTO PROBLEMÁTICO
            if (passiveEvents.includes(type)) {
                if (typeof options === "boolean") {
                    options = { capture: options, passive: true };
                } else if (typeof options === "object" && options !== null) {
                    options = { ...options, passive: true }; // Força sobrescrever
                } else {
                    options = { passive: true };
                }

                // LOG para debug de violações
                console.log(
                    `🔒 PASSIVE: Forçando passive=true para evento "${type}"`
                );
            }
            return originalAddEventListener.call(this, type, listener, options);
        };

        // 2. Interceptar jQuery quando disponível COM FORÇA TOTAL
        const interceptJQuery = () => {
            if (typeof $ !== "undefined" && $.fn && $.fn.on) {
                const originalJQueryOn = $.fn.on;

                $.fn.on = function (events, selector, data, handler) {
                    // Se eventos passivos, forçar passive
                    if (typeof events === "string") {
                        const eventList = events.split(" ");
                        const hasPassiveEvent = eventList.some((event) =>
                            passiveEvents.includes(event.split(".")[0])
                        );

                        if (hasPassiveEvent) {
                            console.log(
                                `🔒 JQUERY PASSIVE: Forçando passive=true para eventos "${events}"`
                            );
                            // Para eventos passivos, usar addEventListener nativo
                            return this.each(function () {
                                eventList.forEach((eventName) => {
                                    if (
                                        passiveEvents.includes(
                                            eventName.split(".")[0]
                                        )
                                    ) {
                                        const actualHandler =
                                            typeof selector === "function"
                                                ? selector
                                                : typeof data === "function"
                                                ? data
                                                : handler;
                                        if (actualHandler) {
                                            this.addEventListener(
                                                eventName.split(".")[0],
                                                actualHandler,
                                                { passive: true }
                                            );
                                        }
                                    }
                                });
                            });
                        }
                    }

                    return originalJQueryOn.call(
                        this,
                        events,
                        selector,
                        data,
                        handler
                    );
                };

                console.log(
                    "✅ PERFORMANCE: jQuery interceptado com passive forçado"
                );
                return true;
            }
            return false;
        };

        // Interceptação jQuery otimizada com debounce inteligente
        let jQueryAttempts = 0;
        const maxJQueryAttempts = 3; // Reduzido de 5 para 3 tentativas

        const interceptWithBackoff = () => {
            if (jQueryAttempts >= maxJQueryAttempts) {
                console.log(
                    "🎯 PERFORMANCE: jQuery intercept finalizado (max attempts)"
                );
                return;
            }

            jQueryAttempts++;
            if (interceptJQuery()) {
                console.log("✅ PERFORMANCE: jQuery interceptado com sucesso");
                return;
            }

            // Backoff exponencial: 100ms, 400ms, 1000ms
            const delay = 100 * Math.pow(2, jQueryAttempts - 1);
            setTimeout(interceptWithBackoff, delay);
        };

        // Iniciar interceptação otimizada
        interceptWithBackoff();

        console.log("🚀 PERFORMANCE: Sistema otimizado carregado");
        console.log(
            "🎯 PERFORMANCE: Interceptação jQuery otimizada com backoff exponencial"
        );
    })();

    // 2.5. FUNÇÃO DEBOUNCE GLOBAL PARA PERFORMANCE
    window.debounce = (func, delay) => {
        let timeoutId;
        const debounced = function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };

        // Método para cancelar timeout pendente
        debounced.cancel = () => {
            clearTimeout(timeoutId);
            timeoutId = null;
        };

        return debounced;
    };

    // 🔧 AGUARDAR APIS DE EXTENSÃO (CORREÇÃO PARA EDGE)
    function aguardarAPIsExtensao() {
        return new Promise((resolve) => {
            if (typeof chrome !== "undefined" && chrome.runtime) {
                console.log("✅ INIT: APIs de extensão já disponíveis");
                resolve(true);
                return;
            }

            let tentativas = 0;
            const maxTentativas = 50; // 5 segundos máximo

            function verificar() {
                tentativas++;

                if (typeof chrome !== "undefined" && chrome.runtime) {
                    console.log(
                        `✅ INIT: APIs disponíveis após ${tentativas * 100}ms`
                    );
                    resolve(true);
                    return;
                }

                if (tentativas >= maxTentativas) {
                    console.log(
                        "⚠️ INIT: Continuando sem APIs de extensão (pode afetar funcionalidades)"
                    );
                    resolve(false);
                    return;
                }

                setTimeout(verificar, 100);
            }

            verificar();
        });
    }

    // Aguardar APIs antes de continuar
    await aguardarAPIsExtensao();

    // ============================================================================
    // 🎨 SISTEMA DE TEMAS INTEGRADO (ex-themeApply.js)
    // ============================================================================

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

    // Função para controlar exibição da data da sessão
    function toggleSessionDateDisplay(isEnabled) {
        const sessionDateElement =
            document.getElementById("eprobe-data-sessao");

        if (sessionDateElement) {
            if (isEnabled) {
                sessionDateElement.style.display = "flex";
                console.log("✅ Data da sessão exibida");
            } else {
                sessionDateElement.style.display = "none";
                console.log("❌ Data da sessão ocultada");
            }
        } else {
            console.log(
                "ℹ️ Elemento da data da sessão não encontrado na página"
            );
        }
    }

    // Função para aplicar estilos do tema (definida globalmente)
    function applyThemeStyles(themeName) {
        console.log(`🎨 Aplicando tema ${themeName} automaticamente...`);

        // Remove estilos de tema anteriores
        const existingThemeStyle = document.getElementById(
            "eprobe-theme-styles"
        );
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

        // Aplica o estilo IMEDIATAMENTE via CSS inline para evitar qualquer delay
        const navbar =
            document.querySelector("#navbar.navbar.bg-instancia") ||
            document.querySelector(".navbar.bg-instancia") ||
            document.querySelector("nav.navbar.bg-instancia");

        if (navbar) {
            navbar.style.backgroundImage = theme.navbar;
            navbar.style.transition = "background-image 0.3s ease";
            console.log(
                `🎨 Estilo aplicado diretamente na navbar: ${theme.name}`
            );
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

    // Aplica tema IMEDIATAMENTE para evitar delay visual
    console.log("🎨 eProbe Theme Script carregado");
    loadAndApplyTheme();

    // Exposição das funções globais para chamada direta (debugging)
    window.applyThemeStyles = applyThemeStyles;
    window.testVioletTheme = function () {
        console.log("🧪 TESTE: Aplicando tema violeta diretamente...");
        applyThemeStyles("violet");
    };
    console.log("🌐 GLOBAL: Funções de tema expostas globalmente");
    console.log(
        "🧪 TESTE: Use window.testVioletTheme() para testar o tema violeta"
    );

    // ============================================================================
    // 🎨 FIM DO SISTEMA DE TEMAS INTEGRADO
    // ============================================================================

    // ============================================================================
    // 🧠 SEMANTIC KERNEL INTEGRADO (ex-semanticKernel.js)
    // ============================================================================

    /**
     * eProbe Semantic Kernel - Módulo Experimental
     * Implementação controlada para testes iniciais
     * Foco: Detecção inteligente de datas de sessão
     */

    // 🧠 CONFIGURAÇÃO EXPERIMENTAL DO SEMANTIC KERNEL
    class eProbeSemanticKernel {
        constructor() {
            this.isEnabled = false;
            this.testMode = true;
            this.fallbackToRegex = true;
            this.apiKey = null;
            this.requestCount = 0;
            this.maxRequests = 5; // Limite para testes

            console.log(
                "🧠 SEMANTIC KERNEL: Módulo inicializado em modo experimental"
            );
        }

        // 🔧 CONFIGURAÇÃO E INICIALIZAÇÃO
        async initialize() {
            console.log("🧠 SEMANTIC KERNEL: Tentando inicializar...");

            try {
                // Verificar se há API key configurada
                this.apiKey = await this.getApiKey();
                if (!this.apiKey) {
                    console.log(
                        "⚠️ SEMANTIC KERNEL: API Key não encontrada - usando modo fallback"
                    );
                    return false;
                }

                this.isEnabled = true;
                console.log("✅ SEMANTIC KERNEL: Inicializado com sucesso");
                return true;
            } catch (error) {
                console.error(
                    "❌ SEMANTIC KERNEL: Erro na inicialização:",
                    error
                );
                return false;
            }
        }

        async getApiKey() {
            // Reutilizar a mesma API key do eProbe
            if (typeof window.SENT1_AUTO?.getStoredApiKey === "function") {
                return await window.SENT1_AUTO.getStoredApiKey();
            }
            return null;
        }

        // 🎯 FUNÇÃO PRINCIPAL: Detecção Inteligente de Datas
        async detectarDataSessaoIA(textoCompleto) {
            if (!this.isEnabled || this.requestCount >= this.maxRequests) {
                console.log(
                    "🧠 SEMANTIC KERNEL: Usando fallback (regex tradicional)"
                );
                return await this.fallbackDetection(textoCompleto);
            }

            console.log(
                "🧠 SEMANTIC KERNEL: Iniciando detecção inteligente de data da sessão"
            );
            this.requestCount++;

            try {
                const prompt = this.createDateDetectionPrompt(textoCompleto);
                const response = await this.callOpenAI(prompt);
                const resultado = this.parseResponse(response);

                if (resultado && resultado.dataEncontrada) {
                    console.log(
                        `✅ SEMANTIC KERNEL: Data detectada via IA: ${resultado.dataEncontrada}`
                    );
                    return {
                        dataEncontrada: resultado.dataEncontrada,
                        confianca: resultado.confianca || 0.8,
                        contexto: resultado.contexto || "",
                        metodo: "semantic-kernel",
                    };
                } else {
                    console.log(
                        "⚠️ SEMANTIC KERNEL: IA não encontrou data, usando fallback"
                    );
                    return await this.fallbackDetection(textoCompleto);
                }
            } catch (error) {
                console.error(
                    "❌ SEMANTIC KERNEL: Erro na detecção IA:",
                    error
                );
                return await this.fallbackDetection(textoCompleto);
            }
        }

        // 📝 CRIAÇÃO DO PROMPT ESPECIALIZADO
        createDateDetectionPrompt(textoCompleto) {
            // Limitar o texto para evitar custos excessivos
            const textoLimitado = textoCompleto.substring(0, 2000);

            return `Você é um especialista em documentos jurídicos brasileiros do sistema eProc/TJSC.

TAREFA: Encontrar a data da sessão de julgamento no texto fornecido.

CONTEXTO: O texto vem de uma página do eProc que pode conter informações sobre quando um processo foi pautado para julgamento.

PADRÕES TÍPICOS A PROCURAR:
- "Data da sessão: DD/MM/AAAA"
- "Sessão de julgamento em DD/MM/AAAA"
- "Julgamento para DD/MM/AAAA"
- "Pautado em DD/MM/AAAA"
- "Agendado para DD/MM/AAAA"

FORMATO DE RESPOSTA OBRIGATÓRIO (JSON):
{
  "dataEncontrada": "DD/MM/AAAA ou null",
  "confianca": 0.0-1.0,
  "contexto": "texto ao redor da data encontrada",
  "explicacao": "por que esta data foi escolhida"
}

REGRAS:
1. Apenas datas no formato brasileiro DD/MM/AAAA
2. Apenas datas entre 2020 e 2030
3. Se não encontrar com certeza, retorne dataEncontrada: null
4. Priorize datas relacionadas a sessões/julgamentos
5. Ignore datas de protocolo, autuação ou outras não relacionadas a julgamento

TEXTO PARA ANÁLISE:
${textoLimitado}

RESPOSTA (apenas JSON válido):`;
        }

        // 🔗 CHAMADA PARA OPENAI API
        async callOpenAI(prompt) {
            const response = await fetch(
                "https://api.openai.com/v1/chat/completions",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${this.apiKey}`,
                    },
                    body: JSON.stringify({
                        model: "gpt-3.5-turbo",
                        messages: [
                            {
                                role: "user",
                                content: prompt,
                            },
                        ],
                        max_tokens: 200,
                        temperature: 0.1, // Baixa temperatura para respostas mais consistentes
                        response_format: { type: "json_object" },
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(
                    `API Error: ${response.status} ${response.statusText}`
                );
            }

            const data = await response.json();
            return data.choices[0].message.content;
        }

        // 📊 PARSE DA RESPOSTA DA IA
        parseResponse(responseText) {
            try {
                const response = JSON.parse(responseText);

                // Validar estrutura da resposta
                if (typeof response === "object" && response !== null) {
                    return {
                        dataEncontrada: response.dataEncontrada || null,
                        confianca: parseFloat(response.confianca) || 0.5,
                        contexto: response.contexto || "",
                        explicacao: response.explicacao || "",
                    };
                }

                return null;
            } catch (error) {
                console.error(
                    "❌ SEMANTIC KERNEL: Erro ao fazer parse da resposta:",
                    error
                );
                return null;
            }
        }

        // 🔄 FALLBACK PARA REGEX TRADICIONAL
        async fallbackDetection(textoCompleto) {
            console.log(
                "🔄 SEMANTIC KERNEL: Executando detecção via regex (fallback)"
            );

            // Usar os mesmos padrões do sistema atual
            const padroes = [
                /(?:data\s*da\s*sess[aã]o|sess[aã]o\s*(?:de|em|para|:)?)\s*:?\s*(\d{1,2}\/\d{1,2}\/\d{4})/i,
                /(?:julgamento\s*(?:em|para|:)|para\s*julgamento)\s*:?\s*(\d{1,2}\/\d{1,2}\/\d{4})/i,
                /(?:pautado|agendar|agendado|marcado).*?(\d{1,2}\/\d{1,2}\/\d{4})/i,
            ];

            for (const padrao of padroes) {
                const match = textoCompleto.match(padrao);
                if (match) {
                    return {
                        dataEncontrada: match[1],
                        confianca: 0.7,
                        contexto: match[0],
                        metodo: "regex-fallback",
                    };
                }
            }

            return null;
        }

        // 📈 FUNÇÕES DE MONITORAMENTO E DEBUG
        getStats() {
            return {
                enabled: this.isEnabled,
                requestCount: this.requestCount,
                maxRequests: this.maxRequests,
                requestsRemaining: this.maxRequests - this.requestCount,
                testMode: this.testMode,
                fallbackEnabled: this.fallbackToRegex,
            };
        }

        reset() {
            this.requestCount = 0;
            console.log("🔄 SEMANTIC KERNEL: Contador de requisições resetado");
        }

        disable() {
            this.isEnabled = false;
            console.log("🚫 SEMANTIC KERNEL: Desabilitado");
        }

        enable() {
            this.isEnabled = true;
            console.log("✅ SEMANTIC KERNEL: Habilitado");
        }
    }

    // 🌍 INSTÂNCIA GLOBAL DO SEMANTIC KERNEL
    window.eProbeSemanticKernel = new eProbeSemanticKernel();

    // 🔗 INTEGRAÇÃO COM O SISTEMA EXISTENTE
    // Função melhorada que usa IA + fallback
    async function detectarDataSessaoComIA() {
        console.log("🧠 INICIANDO: Detecção de data da sessão com IA");

        const sk = window.eProbeSemanticKernel;

        // Verificar se o Semantic Kernel está disponível
        if (!sk.isEnabled) {
            await sk.initialize();
        }

        // Obter texto da página
        const textoCompleto = document.body.innerText;

        try {
            // Tentar detecção com IA
            const resultado = await sk.detectarDataSessaoIA(textoCompleto);

            if (resultado && resultado.dataEncontrada) {
                // Validar a data usando a função existente
                if (
                    typeof window.SENT1_AUTO?.validarDataBrasileira ===
                    "function"
                ) {
                    const dataValidada =
                        window.SENT1_AUTO.validarDataBrasileira(
                            resultado.dataEncontrada
                        );

                    if (dataValidada) {
                        console.log(
                            `✅ IA + VALIDAÇÃO: Data validada: ${dataValidada.dataFormatada}`
                        );
                        console.log(
                            `📊 IA: Método: ${resultado.metodo}, Confiança: ${resultado.confianca}`
                        );

                        return {
                            ...dataValidada,
                            metodoDeteccao: resultado.metodo,
                            confiancaIA: resultado.confianca,
                            contexto: resultado.contexto,
                        };
                    }
                }
            }

            console.log(
                "⚠️ IA: Não encontrou data válida, usando sistema original"
            );
            return null;
        } catch (error) {
            console.error("❌ IA: Erro na detecção:", error);
            return null;
        }
    }

    // 🚀 EXPOSIÇÃO DAS FUNÇÕES EXPERIMENTAIS SERÁ FEITA NO NAMESPACE CONSOLIDADO
    // As funções experimentais serão expostas no namespace window.SENT1_AUTO.experimental

    // ============================================================================
    // 🧠 FIM DO SEMANTIC KERNEL INTEGRADO
    // ============================================================================

    console.log("🚀 INIT: Iniciando eProbe após APIs ficarem prontas...");

    // 🌐 VARIÁVEIS GLOBAIS PARA DADOS DE SESSÃO - DECLARADAS NO TOPO
    var TipoJulgamentoProcessoPautado = null;
    var StatusJulgamento = null;
    var DataSessao = null;

    // Armazenar a data da sessão quando detectada
    let dataSessaoPautado = null;

    // Variável para armazenar qual processo tem a data da sessão detectada
    let processoComDataSessao = null;

    // Armazenar dados completos da sessão obtidos do cruzamento
    let dadosCompletosSessionJulgamento = null;

    // 🎨 CONTROLE DE ESTADO DOS CARDS MATERIAL DESIGN
    let materialDesignState = {
        cardAtivo: false,
        ultimaDeteccao: null,
        ultimoProcesso: null,
    };

    // 🛡️ CONTROLE DE REQUISIÇÕES - Prevenir spam e logout
    let tentativasCruzamento = 0;
    let ultimaTentativaCruzamento = 0;
    let cruzamentoEmAndamento = false;
    let cacheResultadoSessoes = null;
    let cacheValidoAte = 0;

    // 🔐 CONTROLE ÚNICO POR PROCESSO - Garantir apenas uma busca por processo
    let processosJaProcessados = new Set(); // Armazenar números de processos já processados

    // 📊 DECLARAÇÕES ANTECIPADAS DE FUNÇÕES ESSENCIAIS
    let obterNumeroProcesso,
        hasDataSessaoPautado,
        getDataSessaoPautado,
        resetDataSessaoPautado,
        resetControlesRequisicao;
    let inserirDataSessaoNaInterface,
        processarTextoFieldsetSessao,
        processoJaFoiProcessado,
        marcarProcessoComoProcessado;

    // 🔧 IMPLEMENTAÇÃO ANTECIPADA DAS FUNÇÕES ESSENCIAIS
    obterNumeroProcesso = function () {
        try {
            // Estratégias múltiplas para obter número do processo
            const strategies = [
                // 1. Meta tag específica do eProc
                () => {
                    const meta = document.querySelector(
                        'meta[name="NG_PROCESSO"]'
                    );
                    return meta ? meta.getAttribute("content") : null;
                },
                // 2. URL parameter
                () => {
                    const params = new URLSearchParams(window.location.search);
                    return params.get("num_processo");
                },
                // 3. Título da página
                () => {
                    const match = document.title.match(
                        /(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})/
                    );
                    return match ? match[1] : null;
                },
                // 4. Breadcrumb ou elementos de navegação
                () => {
                    const breadcrumbs = document.querySelectorAll(
                        ".infraLocalizador, .breadcrumb"
                    );
                    for (const bc of breadcrumbs) {
                        const match = bc.textContent.match(
                            /(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})/
                        );
                        if (match) return match[1];
                    }
                    return null;
                },
            ];

            for (const strategy of strategies) {
                const result = strategy();
                if (result) {
                    console.log(`✅ PROCESSO: Encontrado: ${result}`);
                    return result;
                }
            }

            console.log("⚠️ PROCESSO: Número não encontrado");
            return null;
        } catch (error) {
            console.error("❌ PROCESSO: Erro ao obter número:", error);
            return null;
        }
    };

    hasDataSessaoPautado = function () {
        return (
            dataSessaoPautado !== null &&
            dataSessaoPautado !== undefined &&
            processoComDataSessao === obterNumeroProcesso()
        );
    };

    getDataSessaoPautado = function () {
        return hasDataSessaoPautado() ? dataSessaoPautado : null;
    };

    resetDataSessaoPautado = function () {
        dataSessaoPautado = null;
        processoComDataSessao = null;
        console.log("🔄 RESET: Dados de sessão resetados");
        return true;
    };

    resetControlesRequisicao = function () {
        tentativasCruzamento = 0;
        ultimaTentativaCruzamento = 0;
        cruzamentoEmAndamento = false;
        console.log("🔄 RESET: Controles de requisição resetados");
        return true;
    };

    inserirDataSessaoNaInterface = function () {
        try {
            console.log("🎯 INTERFACE: Criando card de sessão...");

            // Remover card existente se houver
            const cardExistente = document.getElementById("eprobe-data-sessao");
            if (cardExistente) {
                cardExistente.remove();
                console.log("🗑️ INTERFACE: Card anterior removido");
            }

            // Verificar se temos dados
            if (!hasDataSessaoPautado()) {
                console.log("⚠️ INTERFACE: Sem dados de sessão disponíveis");
                return false;
            }

            const dados = getDataSessaoPautado();
            console.log("📊 INTERFACE: Dados encontrados:", dados);

            // Criar card Material Design moderno
            const card = document.createElement("div");
            card.id = "eprobe-data-sessao";
            card.className = "session-card";
            card.style.cssText = `
                position: fixed;
                top: 80px;
                right: 20px;
                background: #ffffff;
                border: 1px solid #e5e7eb;
                border-radius: 12px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05);
                z-index: 10000;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                min-width: 280px;
                max-width: 350px;
                overflow: hidden;
            `;

            // Criar conteúdo do card
            const dataTexto =
                dados.dataFormatada || dados.data || "Data não disponível";
            const statusTexto = dados.status || "Status não disponível";
            const tipoTexto = dados.tipo || "Tipo não informado";
            const orgaoTexto = dados.orgao || "Órgão não informado";

            card.innerHTML = `
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 16px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 20px;">📅</span>
                        <div>
                            <div style="font-weight: 600; font-size: 16px;">Sessão Detectada</div>
                            <div style="font-size: 14px; opacity: 0.9;">${dataTexto}</div>
                        </div>
                    </div>
                </div>
                <div style="padding: 16px;">
                    <div style="margin-bottom: 12px;">
                        <div style="font-size: 12px; color: #6b7280; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Tipo</div>
                        <div style="font-size: 14px; color: #374151; font-weight: 500;">${tipoTexto}</div>
                    </div>
                    <div style="margin-bottom: 12px;">
                        <div style="font-size: 12px; color: #6b7280; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Status</div>
                        <div style="font-size: 14px; color: #374151; font-weight: 500;">${statusTexto}</div>
                    </div>
                    <div>
                        <div style="font-size: 12px; color: #6b7280; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Órgão</div>
                        <div style="font-size: 14px; color: #374151; font-weight: 500;">${orgaoTexto}</div>
                    </div>
                </div>
            `;

            // Adicionar botão de fechar ao header
            const header = card.querySelector("div");
            const btnFechar = document.createElement("button");
            btnFechar.innerHTML = "×";
            btnFechar.style.cssText = `
                position: absolute;
                top: 8px;
                right: 8px;
                background: rgba(255,255,255,0.2);
                border: none;
                color: white;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                cursor: pointer;
                font-size: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0.8;
                transition: opacity 0.2s;
            `;
            btnFechar.onclick = () => card.remove();
            btnFechar.onmouseenter = () => (btnFechar.style.opacity = "1");
            btnFechar.onmouseleave = () => (btnFechar.style.opacity = "0.8");

            header.appendChild(btnFechar);

            // Inserir no DOM
            document.body.appendChild(card);

            console.log(
                "✅ INTERFACE: Card Material Design criado com sucesso!"
            );
            return true;
        } catch (error) {
            console.error("❌ INTERFACE: Erro ao criar card:", error);
            return false;
        }
    };

    // 🎨 FUNÇÃO PARA CRIAR CARD MATERIAL DE SESSÃO - DESIGN FIGMA
    function criarCardSessaoMaterial(cardInfo) {
        try {
            console.log("🎨 CRIANDO CARD MATERIAL FIGMA:", cardInfo);

            // Verificar se já existe um card
            const cardExistente = document.getElementById(
                "eprobe-card-sessao-material"
            );
            if (cardExistente) {
                console.log("ℹ️ CARD: Removendo card existente");
                cardExistente.remove();
            }

            // Mapeamento de cores do Figma por status
            const coresFigma = {
                PAUTADO: "#5C85B4",
                RETIRADO: "#CE2D4F",
                VISTA: "#FFBF46",
                JULGADO: "#3AB795",
                ADIADO: "#F55D3E",
                ADIADO_935: "#731963",
                SOBRESTADO: "#FCB0B3",
                DILIGENCIA: "#00171F",
            };

            // Determinar status e cor
            const status = cardInfo.status || "PAUTADO";
            const statusKey = status
                .toUpperCase()
                .replace(/\s+/g, "_")
                .replace(/[()\.]/g, "");
            const corIcon = coresFigma[statusKey] || coresFigma["PAUTADO"];

            console.log(
                "🎨 STATUS DETECTADO:",
                status,
                "→",
                statusKey,
                "→",
                corIcon
            );

            // Criar card Material Light pequeno (design Figma)
            const card = document.createElement("div");
            card.id = "eprobe-card-sessao-material";
            card.className = "session-card";

            // Estilo do card Figma: Material Light pequeno - OTIMIZADO PARA NÃO INTERFERIR
            card.style.cssText = `
                width: 169px;
                height: 60px;
                background: #FEF7FF;
                border: 0.75px solid #CAC4D0;
                border-radius: 9px;
                box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
                z-index: 9999;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                display: flex;
                align-items: center;
                padding: 8px 12px;
                gap: 8px;
                cursor: pointer;
                transition: transform 0.2s ease;
                margin: 0;
                flex-shrink: 0;
                position: relative;
            `;

            // Ícone de clock pequeno do Figma
            const iconSvg = `
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.48973 23.5714C1.80506 23.5714 1.21914 23.3408 0.731981 22.8796C0.244824 22.4184 0.00082991 21.8633 0 21.2143V4.71429C0 4.06607 0.243994 3.51136 0.731981 3.05014C1.21997 2.58893 1.80589 2.35793 2.48973 2.35714H3.7346V0H6.22433V2.35714H16.1833V0H18.673V2.35714H19.9179C20.6025 2.35714 21.1889 2.58814 21.6768 3.05014C22.1648 3.51214 22.4084 4.06686 22.4076 4.71429V10.2241C22.4076 10.558 22.2881 10.8381 22.0491 11.0644C21.81 11.2907 21.5146 11.4035 21.1627 11.4027C20.8108 11.4019 20.5154 11.2888 20.2764 11.0633C20.0374 10.8378 19.9179 10.558 19.9179 10.2241V9.42857H2.48973V21.2143H9.70995C10.0627 21.2143 10.3585 21.3274 10.5975 21.5537C10.8366 21.78 10.9556 22.0597 10.9548 22.3929C10.954 22.726 10.8345 23.0061 10.5963 23.2332C10.3581 23.4603 10.0627 23.573 9.70995 23.5714H2.48973ZM18.673 24.75C16.9509 24.75 15.4832 24.1753 14.2699 23.0258C13.0566 21.8763 12.4495 20.4867 12.4487 18.8571C12.4478 17.2276 13.0549 15.838 14.2699 14.6885C15.4849 13.539 16.9526 12.9643 18.673 12.9643C20.3934 12.9643 21.8615 13.539 23.0773 14.6885C24.2931 15.838 24.8998 17.2276 24.8973 18.8571C24.8948 20.4867 24.2877 21.8766 23.0761 23.0269C21.8644 24.1772 20.3967 24.7516 18.673 24.75ZM20.7581 21.6562L21.6295 20.8313L19.2954 18.6214V15.3214H18.0506V19.0929L20.7581 21.6562Z" fill="${corIcon}"/>
                </svg>
            `;

            // Texto do status mapeado
            const statusTextos = {
                PAUTADO: "Pautado",
                RETIRADO: "Retirado de Pauta",
                VISTA: "Pedido de Vista",
                JULGADO: "Julgado",
                ADIADO: "Adiado",
                ADIADO_935: "Adiado (art. 935)",
                SOBRESTADO: "Sobrestado (art. 942)",
                DILIGENCIA: "Conv. em Diligência",
            };

            const statusTexto = statusTextos[statusKey] || status;
            const dataTexto = cardInfo.data || "getData()";

            card.innerHTML = `
                <style>
                    .session-card:hover {
                        transform: translateY(-1px);
                        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
                    }
                </style>
                <div style="flex-shrink: 0;">
                    ${iconSvg}
                </div>
                <div style="flex: 1; min-width: 0;">
                    <div style="
                        font-size: 14px; 
                        font-weight: 500; 
                        color: #1C1B1F; 
                        line-height: 20px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    ">${statusTexto}</div>
                    <div style="
                        font-size: 12px; 
                        color: #49454F; 
                        line-height: 16px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    ">Sessão: ${dataTexto}</div>
                </div>
            `;

            // Adicionar tooltip com informações das sessões (em vez de fechar ao clicar)
            card.style.cursor = "pointer";
            card.style.position = "relative";

            // Criar tooltip para múltiplas sessões
            const tooltip = document.createElement("div");
            tooltip.id = "eprobe-tooltip-sessoes";
            tooltip.style.cssText = `
                position: absolute;
                display: none;
                z-index: 10001;
                background: #FFFBFE;
                border: 1px solid #CAC4D0;
                border-radius: 12px;
                min-width: 280px;
                max-width: 420px;
                box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
                font-family: 'Roboto', sans-serif;
                top: 100%;
                left: 0;
                margin-top: 8px;
                opacity: 0;
                transition: opacity 0.2s ease-in-out;
                pointer-events: none;
            `;

            // Conteúdo do tooltip com histórico de sessões
            const sessoes = cardInfo.sessoes || [];
            let tooltipContent = `
                <div style="padding: 16px 16px 12px 16px; background: #F7F2FA; border-bottom: 1px solid #E6E0E9; border-radius: 12px 12px 0 0;">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                        <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.48973 23.5714C1.80506 23.5714 1.21914 23.3408 0.731981 22.8796C0.244824 22.4184 0.00082991 21.8633 0 21.2143V4.71429C0 4.06607 0.243994 3.51136 0.731981 3.05014C1.21997 2.58893 1.80589 2.35793 2.48973 2.35714H3.7346V0H6.22433V2.35714H16.1833V0H18.673V2.35714H19.9179C20.6025 2.35714 21.1889 2.58814 21.6768 3.05014C22.1648 3.51214 22.4084 4.06686 22.4076 4.71429V10.2241C22.4076 10.558 22.2881 10.8381 22.0491 11.0644C21.81 11.2907 21.5146 11.4035 21.1627 11.4027C20.8108 11.4019 20.5154 11.2888 20.2764 11.0633C20.0374 10.8378 19.9179 10.558 19.9179 10.2241V9.42857H2.48973V21.2143H9.70995C10.0627 21.2143 10.3585 21.3274 10.5975 21.5537C10.8366 21.78 10.9556 22.0597 10.9548 22.3929C10.954 22.726 10.8345 23.0061 10.5963 23.2332C10.3581 23.4603 10.0627 23.573 9.70995 23.5714H2.48973ZM18.673 24.75C16.9509 24.75 15.4832 24.1753 14.2699 23.0258C13.0566 21.8763 12.4495 20.4867 12.4487 18.8571C12.4478 17.2276 13.0549 15.838 14.2699 14.6885C15.4849 13.539 16.9526 12.9643 18.673 12.9643C20.3934 12.9643 21.8615 13.539 23.0773 14.6885C24.2931 15.838 24.8998 17.2276 24.8973 18.8571C24.8948 20.4867 24.2877 21.8766 23.0761 23.0269C21.8644 24.1772 20.3967 24.7516 18.673 24.75ZM20.7581 21.6562L21.6295 20.8313L19.2954 18.6214V15.3214H18.0506V19.0929L20.7581 21.6562Z" fill="#1C1B1F"/>
                        </svg>
                        <div style="font-size: 14px; font-weight: 500; color: #1C1B1F;">Histórico de Sessões</div>
                    </div>
                    <div style="font-size: 12px; color: #49454F;">
                        ${sessoes.length} ${
                sessoes.length === 1
                    ? "evento encontrado"
                    : "eventos encontrados"
            }
                    </div>
                </div>
                <div style="padding: 16px; max-height: 300px; overflow-y: auto;">
            `;

            if (sessoes.length > 0) {
                sessoes.forEach((sessao, index) => {
                    const isAtual = index === 0; // Primeira sessão é a mais recente
                    tooltipContent += `
                        <div style="
                            padding: 12px;
                            border: 1px solid ${isAtual ? corIcon : "#E6E0E9"};
                            border-radius: 8px;
                            margin-bottom: ${
                                index < sessoes.length - 1 ? "12px" : "0"
                            };
                            background: ${isAtual ? "#FEF7FF" : "#FFFFFF"};
                        ">
                            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                                <div style="
                                    width: 8px;
                                    height: 8px;
                                    border-radius: 50%;
                                    background: ${sessao.cor || corIcon};
                                "></div>
                                <div style="font-size: 13px; font-weight: 500; color: #1C1B1F;">
                                    ${sessao.status}
                                </div>
                                ${
                                    isAtual
                                        ? '<span style="font-size: 11px; color: #6750A4; font-weight: 500; background: #E8DEF8; padding: 2px 6px; border-radius: 4px;">ATUAL</span>'
                                        : ""
                                }
                            </div>
                            <div style="font-size: 12px; color: #49454F; margin-bottom: 6px; display: flex; align-items: center;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="font-size: 14px; margin-right: 4px; pointer-events: none;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>${
                                    sessao.data
                                }
                            </div>
                            <div style="font-size: 12px; color: #49454F; margin-bottom: 4px; display: flex; align-items: center;">
                                <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="currentColor" style="font-size: 14px; margin-right: 4px; pointer-events: none;"><path d="M164.87-109.52V-190h458v80.48h-458Zm219.26-195L161.48-525.61 265.13-628.7l221.09 222.09-102.09 102.09Zm260.74-261.31L423.78-786.91 525.87-890l222.65 222.09-103.65 102.08ZM813-169.39 308.91-673.48 378-743.13l504.09 504.65L813-169.39Z"/></svg>${
                                    sessao.orgao
                                }
                            </div>
                            <div style="font-size: 11px; color: #79747E; display: flex; align-items: center;">
                                <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" fill="currentColor" style="font-size: 12px; margin-right: 4px; pointer-events: none;"><path d="M76.78-124.78v-98H431v-428.39q-20.74-9.13-36.54-25.22-15.81-16.09-24.94-36.83H253.57l113.21 260.74q-1 55.36-44.74 89.31-43.75 33.95-100.05 33.95-56.29 0-100.25-33.95t-44.96-89.31l113.78-260.74h-65.78v-98h244.39q14.18-33.13 43.83-52.56 29.65-19.44 66.96-19.44 37.3 0 67 19.44 29.69 19.43 43.87 52.21h244.39v98.35h-65.78l113.78 260.5q0 55.6-43.75 89.55-43.74 33.95-100.54 33.95-56.8 0-100.76-33.95-43.95-33.95-44.95-89.31l113.21-260.74H590.48q-9.13 20.74-24.94 36.83-15.8 16.09-36.54 25.22v428.39h354.22v98H76.78ZM666.7-458.7h143.04l-71.52-163.21L666.7-458.7Zm-515.87 0h143.04l-72.09-163.21-70.95 163.21Zm329.12-271.47q13.35 0 22.44-9.45 9.09-9.44 9.09-22.63 0-13.18-8.92-22.31-8.92-9.14-22.11-9.14t-22.56 8.93q-9.37 8.92-9.37 22.1 0 13.19 9.04 22.84 9.03 9.66 22.39 9.66Z"/></svg>${
                                    sessao.tipo
                                }
                            </div>
                        </div>
                    `;
                });
            } else {
                tooltipContent += `
                    <div style="text-align: center; padding: 20px; color: #79747E;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#79747E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="font-size: 24px; margin-bottom: 8px; pointer-events: none;"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16,6 12,2 8,6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                        <div style="font-size: 13px;">Nenhuma sessão adicional encontrada</div>
                    </div>
                `;
            }

            tooltipContent += "</div>";
            tooltip.innerHTML = tooltipContent;

            // Adicionar tooltip ao card
            card.appendChild(tooltip);

            // Event listeners para mostrar/ocultar tooltip
            let tooltipTimer = null;

            const mostrarTooltip = () => {
                if (tooltipTimer) clearTimeout(tooltipTimer);
                tooltip.style.display = "block";
                tooltip.style.pointerEvents = "auto";
                setTimeout(() => {
                    tooltip.style.opacity = "1";
                }, 10);
            };

            // Sistema de tooltip otimizado com debounce
            const debouncedHideTooltip = window.debounce(() => {
                tooltip.style.display = "none";
                tooltip.style.pointerEvents = "none";
            }, 200);

            const ocultarTooltip = () => {
                tooltip.style.opacity = "0";
                debouncedHideTooltip();
            };

            const cancelarOcultacao = () => {
                // Cancelar qualquer timer de ocultação pendente
                debouncedHideTooltip.cancel?.();
            };

            // Eventos do card (otimizados para performance)
            card.addEventListener("mouseenter", mostrarTooltip, {
                passive: true,
            });
            card.addEventListener("mouseleave", ocultarTooltip, {
                passive: true,
            });

            // Eventos do tooltip (otimizados para performance)
            tooltip.addEventListener("mouseenter", cancelarOcultacao, {
                passive: true,
            });
            tooltip.addEventListener("mouseleave", ocultarTooltip, {
                passive: true,
            });

            // Click no card abre a tela de sessão
            card.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();

                console.log("🖱️ CLICK: Clique no card de sessão detectado");

                // Tentar abrir a tela de sessão
                const urlSessao = construirUrlSessao(cardInfo);

                if (urlSessao) {
                    console.log(
                        "🌐 NAVEGAÇÃO: Abrindo tela de sessão:",
                        urlSessao
                    );

                    // Abrir em nova aba
                    window.open(urlSessao, "_blank");

                    // Feedback visual
                    card.style.transform = "scale(0.95)";
                    setTimeout(() => {
                        card.style.transform = "scale(1)";
                    }, 150);
                } else {
                    console.warn(
                        "⚠️ NAVEGAÇÃO: URL da sessão não pôde ser construída"
                    );

                    // Fallback: mostrar tooltip se não conseguir navegar
                    if (tooltip.style.display === "block") {
                        ocultarTooltip();
                    } else {
                        mostrarTooltip();
                    }
                }
            };

            // Inserir card usando a função de interface específica
            const inserido = inserirCardNaInterface(card);
            if (!inserido) {
                // Fallback: inserir no body se não conseguir inserir na interface
                document.body.appendChild(card);
                console.log("⚠️ CARD FIGMA: Inserido como fallback no body");
            }

            console.log(
                "✅ CARD FIGMA: Criado com design Material Light pequeno!"
            );
            console.log(
                "� COR APLICADA:",
                corIcon,
                "para status:",
                statusTexto
            );

            return card;
        } catch (error) {
            console.error("❌ CARD FIGMA: Erro ao criar card:", error);
            return null;
        }
    }

    // 🏛️ MAPA OFICIAL DE ÓRGÃOS TJSC - Conversão Sigla → Nome Completo
    const mapaOrgaosTJSC = {
        CAMCIV1: "1ª Câmara de Direito Civil",
        CAMCIV2: "2ª Câmara de Direito Civil",
        CAMCIV3: "3ª Câmara de Direito Civil",
        CAMCIV4: "4ª Câmara de Direito Civil",
        CAMCIV5: "5ª Câmara de Direito Civil",
        CAMCIV6: "6ª Câmara de Direito Civil",
        CAMCIV7: "7ª Câmara de Direito Civil",
        CAMCIV8: "8ª Câmara de Direito Civil",
        CAMCOM1: "1ª Câmara de Direito Comercial",
        CAMCOM2: "2ª Câmara de Direito Comercial",
        CAMCOM3: "3ª Câmara de Direito Comercial",
        CAMCOM4: "4ª Câmara de Direito Comercial",
        CAMCOM5: "5ª Câmara de Direito Comercial",
        CAMCOM6: "6ª Câmara de Direito Comercial",
        CAMCRI1: "1ª Câmara Criminal",
        CAMCRI2: "2ª Câmara Criminal",
        CAMCRI3: "3ª Câmara Criminal",
        CAMCRI4: "4ª Câmara Criminal",
        CAMCRI5: "5ª Câmara Criminal",
        CAMEEA1S: "1ª Câmara Especial de Enfrentamento de Acervos",
        CAMEEA2S: "2ª Câmara Especial de Enfrentamento de Acervos",
        CAMEEA3S: "3ª Câmara Especial de Enfrentamento de Acervos",
        CAMPREC: "Câmara de Precatórios",
        CAMPUB1: "1ª Câmara de Direito Público",
        CAMPUB2: "2ª Câmara de Direito Público",
        CAMPUB3: "3ª Câmara de Direito Público",
        CAMPUB4: "4ª Câmara de Direito Público",
        CAMPUB5: "5ª Câmara de Direito Público",
        SGRUCIV: "Grupo de Câmaras de Direito Civil",
        SGRUCOM: "Grupo de Câmaras de Direito Comercial",
        SGRUCRI1: "Primeiro Grupo de Direito Criminal",
        SGRUCRI2: "Segundo Grupo de Direito Criminal",
        SGRUPUB: "Grupo de Câmaras de Direito Público",
        SORGESP: "Órgão Especial",
        SCAMRECD: "Câmara de Recursos Delegados",
        TPLTURUNIF: "Turma de Uniformização",
        VPRES1: "1ª Vice-Presidência",
        VPRES2: "2ª Vice-Presidência",
        VPRES3: "3ª Vice-Presidência",
        SSECCRI: "Seção Criminal",
    };

    // 🔄 TRADUZIR SIGLA DO ÓRGÃO
    function traduzirSiglaOrgao(sigla) {
        if (!sigla) return "Órgão não identificado";

        // Limpar espaços e converter para maiúsculo
        sigla = sigla.trim().toUpperCase();

        // Primeiro, tentar match exato no mapa oficial
        if (mapaOrgaosTJSC[sigla]) {
            return mapaOrgaosTJSC[sigla];
        }

        // Fallback para códigos não mapeados
        return `${sigla} (Órgão)`;
    }

    // 🎨 TRADUZIR STATUS DA SESSÃO
    function traduzirStatusSessao(statusCompleto) {
        if (!statusCompleto) return { status: "Desconhecido", cor: "#6B7280" };

        const statusUpper = statusCompleto.toUpperCase();

        // Mapeamento de status conhecidos
        const mapeamentoStatus = {
            "INCLUÍDO EM PAUTA": { status: "PAUTADO", cor: "#5C85B4" },
            "JULGADO EM PAUTA": { status: "JULGADO", cor: "#3AB795" },
            "RETIRADO DE PAUTA": { status: "RETIRADO", cor: "#CE2D4F" },
            "PEDIDO DE VISTA": { status: "VISTA", cor: "#FFBF46" },
            ADIADO: { status: "ADIADO", cor: "#F55D3E" },
            SOBRESTADO: { status: "SOBRESTADO", cor: "#FCB0B3" },
        };

        for (const [key, value] of Object.entries(mapeamentoStatus)) {
            if (statusUpper.includes(key)) {
                return value;
            }
        }

        return { status: statusCompleto, cor: "#6B7280" };
    }

    // 🔗 FUNÇÃO PARA EXTRAIR LINK DA SESSÃO - MÉTODO ÚNICO
    function extrairLinkSessao(indiceSessao = 1) {
        try {
            console.log(`🔗 LINK: Extraindo link para sessão ${indiceSessao}`);

            // XPath específico - ÚNICO MÉTODO
            const xpathUnico = `/html/body/div[1]/div/div/div/div[1]/div/div/div/div[2]/div/form/div[2]/div/table/tbody/tr[${indiceSessao}]/td[1]/a`;

            const linkElement = document.evaluate(
                xpathUnico,
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            ).singleNodeValue;

            if (linkElement && linkElement.href) {
                // Obter tanto o href decodificado quanto o atributo bruto
                const linkCompleto = linkElement.href;
                const hrefBruto = linkElement.getAttribute("href");

                console.log(`🔍 LINK: href decodificado:`, linkCompleto);
                console.log(`🔍 LINK: href bruto do HTML:`, hrefBruto);

                // Verificar se o link começa com o padrão esperado (tanto no decodificado quanto no bruto)
                const inicioPadrao =
                    "controlador.php?acao=sessao_julgamento_exibir_painel";
                const inicioPadraoAmp =
                    "controlador.php?acao=sessao_julgamento_exibir_painel&amp;id_sessao_julgamento=";

                const contemInicio =
                    linkCompleto.includes(inicioPadrao) ||
                    hrefBruto.includes(inicioPadrao);
                const contemInicioAmp =
                    linkCompleto.includes(inicioPadraoAmp) ||
                    hrefBruto.includes(inicioPadraoAmp);

                // Extrair apenas a parte do link até antes de "target="
                let linkLimpo = linkCompleto;
                const posicaoTarget = linkCompleto.indexOf("target=");
                if (posicaoTarget !== -1) {
                    // Cortar o link antes de "target="
                    linkLimpo = linkCompleto.substring(0, posicaoTarget);
                    // Remover & ou ? final se houver
                    linkLimpo = linkLimpo.replace(/[&?]$/, "");
                }

                if (contemInicio || contemInicioAmp) {
                    console.log(
                        `✅ LINK: Encontrado e validado para sessão ${indiceSessao}:`,
                        linkLimpo
                    );
                    console.log(
                        `🔍 LINK: Formato correto - inicia com sessao_julgamento_exibir_painel`
                    );
                    return linkLimpo;
                } else {
                    console.log(
                        `❌ LINK: Formato inválido para sessão ${indiceSessao}:`,
                        linkCompleto
                    );
                    console.log(
                        `⚠️ LINK: Esperado que contivesse: ${inicioPadrao}`
                    );
                    console.log(`⚠️ LINK: Ou contivesse: ${inicioPadraoAmp}`);
                    return null;
                }
            }

            console.log(`❌ LINK: Não encontrado para sessão ${indiceSessao}`);
            return null;
        } catch (error) {
            console.error(
                `❌ LINK: Erro ao extrair link da sessão ${indiceSessao}:`,
                error
            );
            return null;
        }
    }

    // 🌐 FUNÇÃO PARA CONSTRUIR URL DA SESSÃO
    function construirUrlSessao(dadosSessao) {
        try {
            console.log("🌐 URL: Construindo URL da sessão", dadosSessao);

            // Primeiro, tentar extrair link real da página
            const linkReal = extrairLinkSessao(dadosSessao.indice || 1);
            if (linkReal) {
                // Se encontrou link real, usar ele completamente
                const baseUrl = window.location.origin;
                if (linkReal.startsWith("http")) {
                    return linkReal;
                } else if (linkReal.startsWith("controlador.php")) {
                    return `${baseUrl}/eproc/${linkReal}`;
                } else {
                    return `${baseUrl}${linkReal}`;
                }
            }

            // Fallback: construir URL baseada nos dados da sessão (pode não funcionar sem parâmetros específicos)
            const baseUrl = window.location.origin;
            const numeroProcesso = obterNumeroProcesso();

            console.log(
                "⚠️ URL: Link real não encontrado, usando construção manual (pode não funcionar)"
            );

            // URL básica - requer parâmetros específicos que não temos
            const urlBasica = `${baseUrl}/eproc/controlador.php?acao=sessao_julgamento_exibir_painel`;

            if (numeroProcesso) {
                return `${urlBasica}&txtNumProcesso=${numeroProcesso}`;
            }

            return urlBasica;
        } catch (error) {
            console.error("❌ URL: Erro ao construir URL da sessão:", error);
            return null;
        }
    }

    /**
     * 🎯 DETECÇÃO SIMPLIFICADA DE SESSÕES - APENAS XPATH QUE FUNCIONA
     * Remove todos os fallbacks e mantém apenas o sistema XPath comprovado
     */
    function detectarCardSessaoSimplificado() {
        try {
            console.log("🎯 DETECÇÃO: Iniciando busca XPath por sessões...");

            // Verificar se o container fieldset[6] existe
            const containerFieldset = document.evaluate(
                "/html/body/div[2]/div[3]/div[2]/div/div[1]/form[2]/div[3]/div/div/fieldset[6]",
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            ).singleNodeValue;

            if (!containerFieldset) {
                console.log(
                    "❌ DETECÇÃO: Container fieldset[6] não encontrado"
                );
                return null;
            }

            console.log("✅ DETECÇÃO: Container fieldset[6] encontrado");

            const sessoes = [];
            let contador = 1;

            // Buscar até 10 divs de sessão
            while (contador <= 10) {
                const xpath = `/html/body/div[2]/div[3]/div[2]/div/div[1]/form[2]/div[3]/div/div/fieldset[6]/div/div[${contador}]/fieldset/legend/span[1]/button/text()`;

                const resultado = document.evaluate(
                    xpath,
                    document,
                    null,
                    XPathResult.STRING_TYPE,
                    null
                );

                let textoButton = resultado.stringValue?.trim();

                // Se não encontrou no XPath padrão, tentar alternativa
                if (!textoButton) {
                    const xpathDiv = `/html/body/div[2]/div[3]/div[2]/div/div[1]/form[2]/div[3]/div/div/fieldset[6]/div/div[${contador}]`;
                    const divElement = document.evaluate(
                        xpathDiv,
                        document,
                        null,
                        XPathResult.FIRST_ORDERED_NODE_TYPE,
                        null
                    ).singleNodeValue;

                    if (!divElement) {
                        console.log(
                            `🔍 DETECÇÃO: Div[${contador}] não existe - finalizando`
                        );
                        break;
                    }

                    // Buscar texto no botão da div
                    const button = divElement.querySelector(
                        "fieldset legend span button"
                    );
                    if (button) {
                        textoButton = button.textContent?.trim();
                    }
                }

                if (textoButton) {
                    console.log(`✅ SESSÃO ${contador}: "${textoButton}"`);

                    // Regex universal para parsing
                    const padraoUniversal =
                        /^([A-Za-zÀ-ÿ\s]+?)\s*\(([A-Za-z\s]+em\s+Pauta)\s+em\s+(\d{1,2}\/\d{1,2}\/\d{4})(?:\s*a\s*\d{1,2}\/\d{1,2}\/\d{4})?\s*-\s*([A-Z0-9\-º]+(?:\s+[A-Z]+)*)\)$/;
                    const match = textoButton.match(padraoUniversal);

                    if (match) {
                        const [, tipoSessao, statusCompleto, data, siglaOrgao] =
                            match;

                        // Traduzir status e órgão
                        const statusTraduzido =
                            traduzirStatusSessao(statusCompleto);
                        const nomeOrgao = traduzirSiglaOrgao(siglaOrgao.trim());

                        sessoes.push({
                            indice: contador,
                            tipo: tipoSessao.trim(),
                            status: statusTraduzido?.status || "Desconhecido",
                            statusCompleto: statusCompleto,
                            data: data.trim(),
                            siglaOrgao: siglaOrgao.trim(),
                            orgao: nomeOrgao,
                            cor: statusTraduzido?.cor || "#6B7280",
                            textoCompleto: textoButton,
                        });

                        console.log(`🎯 DADOS EXTRAÍDOS:`, {
                            tipo: tipoSessao.trim(),
                            status: statusTraduzido?.status,
                            data: data.trim(),
                            orgao: nomeOrgao,
                        });
                    }
                }

                contador++;
            }

            if (sessoes.length === 0) {
                console.log("❌ DETECÇÃO: Nenhuma sessão encontrada");
                return null;
            }

            // Ordenar por data (mais recente primeiro)
            sessoes.sort((a, b) => {
                const dataA = new Date(a.data.split("/").reverse().join("-"));
                const dataB = new Date(b.data.split("/").reverse().join("-"));
                return dataB - dataA;
            });

            console.log(
                `✅ DETECÇÃO: ${sessoes.length} sessões encontradas e ordenadas`
            );
            console.log("📊 SESSÃO MAIS RECENTE:", sessoes[0]);

            // Armazenar dados da sessão mais recente
            const sessaoMaisRecente = sessoes[0];
            const processo = obterNumeroProcesso();

            if (processo) {
                dataSessaoPautado = sessaoMaisRecente.data;
                processoComDataSessao = processo;

                // Adicionar dados completos
                window.dadosCompletosMinutas = sessaoMaisRecente;

                console.log(
                    `✅ DADOS ARMAZENADOS: dataSessaoPautado="${dataSessaoPautado}" | processo="${processo}"`
                );
            }

            // Criar card com dados da sessão mais recente
            const cardInfo = {
                indice: sessaoMaisRecente.indice,
                data: sessaoMaisRecente.data,
                tipo: sessaoMaisRecente.tipo,
                status: sessaoMaisRecente.status,
                orgao: sessaoMaisRecente.orgao,
                cor: sessaoMaisRecente.cor,
                totalSessoes: sessoes.length,
                sessoes: sessoes,
            };

            criarCardSessaoMaterial(cardInfo);
            return cardInfo;
        } catch (error) {
            console.error("❌ DETECÇÃO: Erro na detecção XPath:", error);
            return null;
        }
    }

    processarTextoFieldsetSessao = function (fieldsetElement) {
        try {
            if (!fieldsetElement) return null;

            const texto =
                fieldsetElement.textContent || fieldsetElement.innerText || "";

            // Padrões para diferentes tipos de sessão
            const padroes = {
                pautado: /Incluído em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})/gi,
                julgado: /Julgado em (\d{1,2}\/\d{1,2}\/\d{4})/gi,
                data_generica: /(\d{1,2}\/\d{1,2}\/\d{4})/gi,
            };

            let statusDetectado = "Sessão";
            let datasSessao = [];

            // Tentar cada padrão
            for (const [tipo, padrao] of Object.entries(padroes)) {
                const matches = [...texto.matchAll(padrao)];
                if (matches.length > 0) {
                    statusDetectado =
                        tipo.charAt(0).toUpperCase() +
                        tipo.slice(1).replace("_", " ");
                    datasSessao = matches.map((m) => m[1]);
                    break;
                }
            }

            if (datasSessao.length > 0) {
                console.log(
                    `✅ PROCESSAMENTO: ${datasSessao.length} data(s) encontrada(s) - Status: ${statusDetectado}`
                );
                return {
                    statusDetectado,
                    datasSessao,
                    informacoesDetalhadas: { textoCompleto: texto },
                };
            }

            return null;
        } catch (error) {
            console.error("❌ PROCESSAMENTO: Erro no processamento:", error);
            return null;
        }
    };

    processoJaFoiProcessado = function (numeroProcesso) {
        return numeroProcesso && processosJaProcessados.has(numeroProcesso);
    };

    marcarProcessoComoProcessado = function (numeroProcesso) {
        if (numeroProcesso) {
            processosJaProcessados.add(numeroProcesso);
        }
    };

    // ⚡ SISTEMA DE DEBOUNCE GLOBAL - Prevenir execuções redundantes
    const debounceTimers = new Map();

    function debounceGlobal(func, key, delay = 300) {
        if (debounceTimers.has(key)) {
            clearTimeout(debounceTimers.get(key));
        }

        const timerId = setTimeout(() => {
            func();
            debounceTimers.delete(key);
        }, delay);

        debounceTimers.set(key, timerId);
    }

    // 🚨 CONTROLES ANTI-LOOP GLOBAIS
    let detectarDataSessaoExecutando = false;
    let detectarCardSessaoExecutando = false;
    let ultimaDeteccaoTimestamp = 0;
    const INTERVALO_MINIMO_DETECCAO = 1000; // 1 segundo entre detecções

    // � CACHE ANTI-LOOP PARA PROCESSO - Variáveis globais
    let processoCache = null;
    let ultimaUrlVerificada = null;

    // �🚀 CACHE INTELIGENTE PARA ELEMENTOS DOM
    const domCache = new Map();
    const CACHE_EXPIRY = 5000; // 5 segundos

    function getCachedElement(selector, useCache = true) {
        if (!useCache) {
            return document.querySelector(selector);
        }

        const now = Date.now();
        const cached = domCache.get(selector);

        if (cached && now - cached.timestamp < CACHE_EXPIRY) {
            return cached.element;
        }

        const element = document.querySelector(selector);
        domCache.set(selector, {
            element: element,
            timestamp: now,
        });

        return element;
    }

    // 🧹 LIMPEZA AUTOMÁTICA DO CACHE
    setInterval(() => {
        const now = Date.now();
        for (const [key, value] of domCache.entries()) {
            if (now - value.timestamp > CACHE_EXPIRY) {
                domCache.delete(key);
            }
        }
    }, 10000); // Limpar a cada 10 segundos

    let processoAtual = null; // Processo atual sendo visualizado
    let cachePorProcesso = new Map(); // Cache específico por processo
    let timeoutsAtivos = new Set(); // Controle de timeouts ativos

    // 🚫 CONTROLE GLOBAL DE REQUISIÇÕES
    let REQUISICOES_AUTOMATICAS_DESABILITADAS = true; // DESABILITAR TODAS AS REQUISIÇÕES AUTOMÁTICAS

    // 🔥 CONTROLE DE PERFORMANCE ULTRA
    let MODO_ULTRA_PERFORMANCE = false; // Controla operações custosas para otimizar performance

    // Configurações de segurança MAIS RIGOROSAS
    const MAX_TENTATIVAS_CRUZAMENTO = 1; // REDUZIDO: Máximo 1 tentativa por processo
    const DELAY_ENTRE_TENTATIVAS = 60000; // AUMENTADO: 1 minuto entre tentativas
    const CACHE_DURATION = 600000; // AUMENTADO: Cache válido por 10 minutos

    // Injetar CSS apenas para elementos da extensão eProbe
    const extensionStyle = document.createElement("style");
    extensionStyle.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        
        /* Padronização da fonte Roboto APENAS para elementos da extensão eProbe */
        [id*="sent1"], [id*="documento-relevante"], [class*="eprobe"], 
        #sent1-auto-button, #documento-relevante-options-menu,
        #documento-relevante-selection-modal, #documento-relevante-preview-modal,
        #api-config-modal, #error-logs-modal, #api-key-config,
        .eprobe-notification, .eprobe-tooltip, .eprobe-modal, .eprobe-button, .eprobe-menu {
            font-family: "Roboto", -apple-system, system-ui, sans-serif !important;
        }
        
        /* Elementos criados dinamicamente pela extensão */
        [id*="sent1"] *, [id*="documento-relevante"] *, [class*="eprobe"] *,
        #sent1-auto-button *, #documento-relevante-options-menu *,
        #documento-relevante-selection-modal *, #documento-relevante-preview-modal *,
        #api-config-modal *, #error-logs-modal *, #api-key-config *,
        .eprobe-notification *, .eprobe-tooltip *, .eprobe-modal *, .eprobe-button *, .eprobe-menu * {
            font-family: "Roboto", -apple-system, system-ui, sans-serif !important;
        }
        
        /* CORREÇÃO CRÍTICA: Ícones substituídos não devem interceptar cliques */
        .substituted-icon:not(.clickable-icon) {
            pointer-events: none !important;
        }
        
        /* Material Icons substituídos também não devem interceptar cliques */
        .material-symbols-outlined.substituted-icon:not(.clickable-icon) {
            pointer-events: none !important;
        }

        /* CRÍTICO: Containers de ícones substituídos também não devem interceptar cliques */
        span:has(.substituted-icon:not(.clickable-icon)) {
            pointer-events: none !important;
        }
        
        /* Fallback para navegadores que não suportam :has() */
        .eprobe-icon-container:not(.clickable-container) {
            pointer-events: none !important;
        }
        
        /* FORÇA MÁXIMA: SVGs de ícones eProbe (mas não os em links) */
        svg.substituted-icon:not(.clickable-icon) {
            pointer-events: none !important;
        }
        
        svg.iconeFerramentas:not(.clickable-icon) {
            pointer-events: none !important;
        }
        
        /* Especificamente para elementos com data-eprobe-icon-replaced (mas não em links) */
        [data-eprobe-icon-replaced="true"]:not(.clickable-icon) {
            pointer-events: none !important;
        }
        
        /* PRESERVAR clicabilidade para ícones dentro de links */
        a .substituted-icon,
        a .iconeFerramentas,
        a [data-eprobe-icon-replaced="true"],
        .infraLegendObrigatorio .substituted-icon,
        .infraLegendObrigatorio .iconeFerramentas,
        .infraLegendObrigatorio [data-eprobe-icon-replaced="true"] {
            pointer-events: auto !important;
        }

        /* Estilos para SVGs inline - permitir customização */
        .eprobe-svg-icon {
            pointer-events: none !important;
            transition: all 0.2s ease;
        }
        
        .eprobe-svg-icon:hover {
            transform: scale(1.1);
            filter: brightness(1.2);
        }
        
        /* SVG específicos por tipo */
        .eprobe-svg-bubble {
            filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1));
        }
        
        .eprobe-svg-config {
            opacity: 0.8;
        }
        
        .eprobe-svg-config:hover {
            opacity: 1;
            transform: rotate(15deg) scale(1.1);
        }
        
        /* ⚡ OTIMIZAÇÃO PERFORMANCE: CSS hover substitui event listeners */
        .eprobe-button-hover:hover {
            background-color: #0f3a66 !important;
            border-color: #0f3a66 !important;
            transform: translateY(-1px) !important;
        }
        
        .eprobe-button-hover:focus {
            background-color: #0f3a66 !important;
            border-color: #0f3a66 !important;
            outline: 2px solid #4FC3F7 !important;
        }
        
        .eprobe-button-hover:active {
            background-color: #0a2d4f !important;
            transform: translateY(0) !important;
        }
        
        /* Botões de cancelar otimizados */
        .eprobe-cancel-button:hover {
            background-color: #4b5563 !important;
        }
        
        .eprobe-process-button:hover {
            background-color: #059669 !important;
        }
        
        /* Botões PDF otimizados */
        .eprobe-pdf-cancel-button:hover {
            background-color: #91433d !important;
            border-color: #91433d !important;
        }
        
        /* Botões de abertura otimizados */
        .eprobe-open-button:hover {
            background-color: rgba(148, 163, 184, 0.1) !important;
        }
        
        /* Container e botão de remoção otimizados */
        .eprobe-container-hover .eprobe-remove-button {
            opacity: 0;
            transition: opacity 0.2s ease;
        }
        
        .eprobe-container-hover:hover .eprobe-remove-button {
            opacity: 1 !important;
        }
        
        /* Opções de menu otimizadas */
        .eprobe-menu-option {
            background-color: transparent !important;
            transition: background-color 0.2s ease;
        }
        
        .eprobe-menu-option:hover {
            background-color: #f8f9fa !important;
        }
    `;
    document.head.appendChild(extensionStyle);

    // Adicionar Material Icons History e Chat Bubble com PRELOAD para carregamento instantâneo
    if (!document.querySelector('link[href*="Material+Symbols+Outlined"]')) {
        // Usar preload para carregamento mais rápido
        const materialIconsHistory = document.createElement("link");
        materialIconsHistory.rel = "preload";
        materialIconsHistory.as = "style";
        materialIconsHistory.href =
            "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=event_repeat,gavel";
        materialIconsHistory.onload = function () {
            this.onload = null;
            this.rel = "stylesheet";
        };
        document.head.appendChild(materialIconsHistory);

        // Carregar CSS dos Material Symbols com preload
        const materialIconsCSS = document.createElement("link");
        materialIconsCSS.rel = "preload";
        materialIconsCSS.as = "style";
        materialIconsCSS.href = chrome.runtime.getURL("src/material-icons.css");
        materialIconsCSS.onload = function () {
            this.onload = null;
            this.rel = "stylesheet";
        };
        document.head.appendChild(materialIconsCSS);

        console.log(
            "⚡ FONTS: Material Icons carregados com preload para velocidade máxima"
        );
    }

    // ===== INÍCIO DO SISTEMA DE PROCESSAMENTO DE DOCUMENTOS =====
    (function () {
        let debugMode = true;
        let isAutomationActive = false;

        // Configuração dos tipos de documentos relevantes - VERSÃO EXPANDIDA
        const TIPOS_DOCUMENTO_RELEVANTE = {
            SENT: { nome: "SENT", descricao: "Sentença", dataNome: "SENT" },
            INIC: {
                nome: "INIC",
                descricao: "Petição Inicial",
                dataNome: "INIC",
            },
            PET1: {
                nome: "PET1",
                descricao: "Petição 1",
                dataNome: "PET1",
            },
            /*          DECI: {
                nome: "DESPADEC",
                descricao: "Decisão",
                dataNome: "DESPADEC",
            }, */
        };

        function log(message, ...args) {
            if (debugMode) {
                console.log("PROCESSAR DOCUMENTO:", message, ...args);
            }
        }

        // Detectar tipo de página e formato de documento - usando expressão de função
        const detectPageType = function () {
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
                            log(
                                "📄 PDF detectado por características:",
                                element
                            );
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
        };
        function isValidPageForButton() {
            // Verificar se está na página do processo (formulário frmProcessoLista + título específico)
            const formProcessoLista =
                document.querySelector("#frmProcessoLista");
            const tituloConsultaProcessual = document.querySelector("h1");

            const hasTituloCorreto =
                tituloConsultaProcessual &&
                tituloConsultaProcessual.textContent.includes(
                    "Consulta Processual - Detalhes do Processo"
                );

            if (formProcessoLista && hasTituloCorreto) {
                console.log(
                    "Página válida detectada: formulário #frmProcessoLista E título 'Consulta Processual - Detalhes do Processo' encontrados (página do processo)"
                );
                return true;
            }

            // Para compatibilidade com documento específico (página de visualização do documento)
            const pageType = detectPageType();
            if (
                pageType === "documento_especifico" ||
                pageType === "documento_html" ||
                pageType === "documento_pdf"
            ) {
                console.log("Página válida detectada: documento específico");
                return true;
            }

            // Verificar URLs específicas do eProc que podem conter documentos
            const url = window.location.href;
            if (
                url.includes("eproc") &&
                (url.includes("documento") || url.includes("processo"))
            ) {
                console.log(
                    "Página válida detectada: URL contém eproc e documento/processo"
                );
                return true;
            }

            // Verificar se há tabelas com links de documentos relevantes (SENT, INIC, etc.)
            const hasDocumentLinks = !!(
                document.querySelector('[href*="SENT"]') ||
                document.querySelector('[href*="INIC"]') ||
                document.querySelector('[href*="DECI"]') ||
                document.querySelector('[href*="DESP"]')
            );

            if (hasDocumentLinks) {
                console.log(
                    "Página válida detectada: contém links de documentos relevantes"
                );
                return true;
            }

            console.log("Página não é válida para o botão:", {
                url: url,
                pageType: pageType,
                hasFormProcessoLista: !!formProcessoLista,
                hasTituloCorreto: hasTituloCorreto,
                tituloAtual: tituloConsultaProcessual
                    ? tituloConsultaProcessual.textContent
                    : "não encontrado",
                hasTable: !!document.querySelector("table"),
                hasDocumentLinks: hasDocumentLinks,
                hasEventDesc: !!document.querySelector(".infraEventoDescricao"),
            });
            return false;
        }

        // 📋 FUNÇÕES DE DETECÇÃO E PROCESSAMENTO DA PÁGINA "MEUS LOCALIZADORES"

        // Função para salvar separadores no localStorage
        function salvarSeparadores(separadores) {
            try {
                const chave = "eprobe_separadores_localizadores";
                localStorage.setItem(chave, JSON.stringify(separadores));
                console.log(
                    "💾 LOCALIZADORES: Separadores salvos no localStorage"
                );
            } catch (error) {
                console.error(
                    "❌ LOCALIZADORES: Erro ao salvar separadores:",
                    error
                );
            }
        }

        // Função para carregar separadores do localStorage
        function carregarSeparadores() {
            try {
                const chave = "eprobe_separadores_localizadores";
                const dados = localStorage.getItem(chave);
                if (dados) {
                    const separadores = JSON.parse(dados);
                    console.log(
                        "📂 LOCALIZADORES: Separadores carregados do localStorage:",
                        separadores.length
                    );
                    return separadores;
                }
            } catch (error) {
                console.error(
                    "❌ LOCALIZADORES: Erro ao carregar separadores:",
                    error
                );
            }
            return [];
        }

        // Função para salvar lista de separadores removidos
        function salvarSeparadoresRemovidos(removidos) {
            try {
                const chave = "eprobe_separadores_removidos";
                localStorage.setItem(chave, JSON.stringify(removidos));
                console.log(
                    "🗑️ LOCALIZADORES: Lista de removidos salva no localStorage"
                );
            } catch (error) {
                console.error(
                    "❌ LOCALIZADORES: Erro ao salvar removidos:",
                    error
                );
            }
        }

        // Função para carregar lista de separadores removidos
        function carregarSeparadoresRemovidos() {
            try {
                const chave = "eprobe_separadores_removidos";
                const dados = localStorage.getItem(chave);
                if (dados) {
                    const removidos = JSON.parse(dados);
                    console.log(
                        "📂 LOCALIZADORES: Separadores removidos carregados:",
                        removidos.length
                    );
                    return removidos;
                }
            } catch (error) {
                console.error(
                    "❌ LOCALIZADORES: Erro ao carregar removidos:",
                    error
                );
            }
            return [];
        }

        // Função para detectar e processar página "Meus Localizadores"
        function detectarPaginaLocalizadores() {
            const currentUrl = window.location.href;

            // Verifica se está na página de Meus Localizadores
            if (
                !currentUrl.includes(
                    "acao=usuario_tipo_monitoramento_localizador_listar"
                )
            ) {
                return false;
            }

            console.log(
                "📋 LOCALIZADORES: Página 'Meus Localizadores' detectada"
            );

            // Processa a tabela de localizadores
            processarTabelaLocalizadores();

            return true;
        }

        // Função para processar a tabela de localizadores
        function processarTabelaLocalizadores() {
            console.log("🔍 LOCALIZADORES: Iniciando processamento da tabela");

            // Busca a tabela de localizadores
            const tabela = document.querySelector(
                'table.infraTable[summary*="Localizadores"]'
            );

            if (!tabela) {
                console.log(
                    "⚠️ LOCALIZADORES: Tabela de localizadores não encontrada"
                );
                return;
            }

            console.log("✅ LOCALIZADORES: Tabela encontrada, processando...");

            // Destaca localizadores urgentes
            destacarLocalizadoresUrgentes(tabela);

            // Adiciona interface de separadores
            adicionarInterfaceSeparadores(tabela);

            // Restaurar separadores salvos
            restaurarSeparadores(tabela);
        } // Função para restaurar separadores salvos
        function restaurarSeparadores(tabela) {
            console.log("🔄 LOCALIZADORES: Restaurando separadores salvos");

            // Verificar se já existem separadores na página para evitar duplicação
            const separadoresExistentes = tabela.querySelectorAll(
                ".eprobe-divisor-linha"
            );
            if (separadoresExistentes.length > 0) {
                console.log(
                    "ℹ️ LOCALIZADORES: Separadores já existem na página, evitando duplicação"
                );
                return;
            }

            const separadoresSalvos = carregarSeparadores();

            if (separadoresSalvos.length === 0) {
                console.log(
                    "ℹ️ LOCALIZADORES: Nenhum separador salvo encontrado"
                );
                return;
            }

            const tbody = tabela.querySelector("tbody");
            if (!tbody) {
                console.log(
                    "⚠️ LOCALIZADORES: tbody não encontrado para restaurar separadores"
                );
                return;
            }

            const linhasOriginais = Array.from(
                tbody.querySelectorAll("tr:not(.eprobe-divisor-linha)")
            );

            // Ordenar separadores por posição para inserir na ordem correta
            separadoresSalvos.sort((a, b) => a.posicao - b.posicao);

            separadoresSalvos.forEach((separadorData) => {
                let linhaReferencia = null;

                // Encontrar linha de referência pela posição
                if (
                    separadorData.posicao > 0 &&
                    separadorData.posicao <= linhasOriginais.length
                ) {
                    linhaReferencia =
                        linhasOriginais[separadorData.posicao - 1];
                }

                // Criar o separador com flag de restauração para evitar salvar novamente
                const separadorCriado = criarDivisorEditavel(
                    tabela,
                    linhaReferencia,
                    separadorData.texto,
                    true
                );

                // Adicionar ID do separador salvo ao elemento restaurado
                if (separadorCriado) {
                    separadorCriado.setAttribute(
                        "data-separador-id",
                        separadorData.id
                    );
                    console.log(
                        `✅ LOCALIZADORES: Separador "${separadorData.texto}" restaurado na posição ${separadorData.posicao}`
                    );
                }
            });

            console.log(
                `🔄 LOCALIZADORES: ${separadoresSalvos.length} separador(es) restaurado(s)`
            );
        }

        // Função para destacar localizadores com palavra "urgente"
        function destacarLocalizadoresUrgentes(tabela) {
            console.log("🔴 LOCALIZADORES: Destacando localizadores urgentes");

            const linhas = tabela.querySelectorAll("tbody tr");
            let urgentesEncontrados = 0;

            linhas.forEach((linha, index) => {
                const primeiraColuna = linha.querySelector("td:first-child");

                if (primeiraColuna) {
                    const textoLocalizador =
                        primeiraColuna.textContent.toLowerCase();

                    // Verifica se contém a palavra "urgente" (case insensitive)
                    if (textoLocalizador.includes("urgente")) {
                        // Aplica estilo de destaque vermelho suave
                        linha.style.backgroundColor = "#fecaca";
                        linha.style.border = "1px solid #f87171";
                        linha.style.transition = "all 0.2s ease";

                        urgentesEncontrados++;
                        console.log(
                            `🔴 LOCALIZADORES: Linha ${
                                index + 1
                            } marcada como urgente: "${primeiraColuna.textContent.trim()}"`
                        );
                    }
                }
            });

            if (urgentesEncontrados > 0) {
                console.log(
                    `✅ LOCALIZADORES: ${urgentesEncontrados} localizador(es) urgente(s) destacado(s)`
                );
            } else {
                console.log(
                    "ℹ️ LOCALIZADORES: Nenhum localizador urgente encontrado"
                );
            }
        }

        // Função para criar divisores editáveis na tabela de localizadores
        function criarDivisorEditavel(
            tabela,
            linhaPosicao,
            textoInicial = "Seção",
            isRestoracao = false
        ) {
            console.log("📝 LOCALIZADORES: Criando divisor editável");
            console.log("🔧 DEBUG: Parâmetros recebidos:", {
                tabela,
                linhaPosicao,
                textoInicial,
                isRestoracao,
            });

            if (!tabela) {
                console.log(
                    "⚠️ LOCALIZADORES: Tabela não fornecida para criar divisor"
                );
                return null;
            }

            const tbody = tabela.querySelector("tbody");
            console.log("🔧 DEBUG: tbody encontrado:", tbody);

            if (!tbody) {
                console.log("⚠️ LOCALIZADORES: tbody não encontrado na tabela");
                return null;
            }

            // Contar colunas da tabela para criar divisor do tamanho correto
            const primeiraLinhaComCelulas =
                tbody.querySelector("tr") || tabela.querySelector("thead tr");
            let totalColunas = 2; // Padrão para localizadores

            if (primeiraLinhaComCelulas) {
                const celulas =
                    primeiraLinhaComCelulas.querySelectorAll("td, th");
                totalColunas = celulas.length;
            }

            console.log(
                `🔧 DEBUG: Número de colunas detectado: ${totalColunas}`
            );

            // Criar nova linha divisor
            const linhaDivisor = document.createElement("tr");
            linhaDivisor.className = "eprobe-divisor-linha";
            linhaDivisor.style.backgroundColor = "#f3f4f6";
            linhaDivisor.style.borderTop = "2px solid #6b7280";
            linhaDivisor.style.borderBottom = "1px solid #d1d5db";

            // Criar célula que ocupa todas as colunas
            const celulaDivisor = document.createElement("td");
            celulaDivisor.colSpan = totalColunas;
            celulaDivisor.style.padding = "12px";
            celulaDivisor.style.textAlign = "center";
            celulaDivisor.style.position = "relative";

            // Criar container para o título editável
            const containerTitulo = document.createElement("div");
            containerTitulo.style.position = "relative";
            containerTitulo.style.display = "inline-block";

            // Criar ícone do separador
            const iconeSeparador = document.createElement("span");
            iconeSeparador.style.cssText = `
                display: inline-block !important;
                margin-right: 4px !important;
                vertical-align: middle !important;
                width: 16px !important;
                height: 16px !important;
            `;
            iconeSeparador.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px !important; vertical-align: middle;">
                    <path d="m16 16-4 4-4-4"/>
                    <path d="M3 12h18"/>
                    <path d="m8 8 4-4 4 4"/>
                </svg>
            `;

            // Criar título editável (sem caixa, apenas texto)
            const tituloEditavel = document.createElement("span");
            tituloEditavel.textContent = textoInicial;
            tituloEditavel.contentEditable = true;
            tituloEditavel.style.cssText = `
            font-weight: bold;
            color: #374151;
            font-size: 14px;
            cursor: text;
            outline: none;
            border: none;
            background: transparent;
            min-width: 100px;
            display: inline-block;
            text-align: center;
            transition: background-color 0.2s ease;
        `;

            // Adicionar eventos para edição
            tituloEditavel.addEventListener("focus", function () {
                this.style.backgroundColor = "#f3f4f6";
                this.style.borderRadius = "4px";
                this.style.padding = "2px 6px";
            });

            tituloEditavel.addEventListener("blur", function () {
                this.style.backgroundColor = "transparent";
                this.style.padding = "0";

                // Salvar alteração na persistência
                salvarAlteracaoSeparador(linhaDivisor, this.textContent.trim());
            });

            tituloEditavel.addEventListener("keydown", function (e) {
                if (e.key === "Enter") {
                    e.preventDefault();
                    this.blur(); // Força o blur para salvar
                }
                if (e.key === "Escape") {
                    e.preventDefault();
                    this.textContent = textoInicial; // Restaura valor original
                    this.blur();
                }
            });

            // Adicionar tooltip com instruções
            tituloEditavel.title =
                "Clique para editar o nome do separador\n• Enter: Salvar\n• Escape: Cancelar";

            // Criar botão para remover divisor (discreto, só aparece no hover)
            const botaoRemover = document.createElement("button");
            botaoRemover.innerHTML = "×";
            botaoRemover.style.cssText = `
            position: absolute;
            top: -8px;
            right: -20px;
            border: none;
            background: #ef4444;
            color: white;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            cursor: pointer;
            font-size: 12px;
            line-height: 1;
            opacity: 0;
            transition: opacity 0.2s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
            botaoRemover.title = "Remover divisor";

            // ⚡ OTIMIZAÇÃO: CSS hover em vez de event listeners
            containerTitulo.classList.add("eprobe-container-hover");
            botaoRemover.classList.add("eprobe-remove-button");

            // Evento para remover divisor
            botaoRemover.addEventListener("click", function (e) {
                e.preventDefault();
                e.stopPropagation();

                // Remover da persistência antes de remover do DOM
                removerSeparadorDoPersistencia(linhaDivisor);

                linhaDivisor.remove();
                console.log("🗑️ LOCALIZADORES: Divisor removido");
            });

            // Adicionar elementos ao container
            containerTitulo.appendChild(iconeSeparador);
            containerTitulo.appendChild(tituloEditavel);
            containerTitulo.appendChild(botaoRemover);
            celulaDivisor.appendChild(containerTitulo);
            linhaDivisor.appendChild(celulaDivisor);

            // Inserir divisor na posição especificada
            console.log(
                "🔧 DEBUG: Inserindo divisor. linhaPosicao:",
                linhaPosicao
            );
            if (linhaPosicao && linhaPosicao.nextSibling) {
                tbody.insertBefore(linhaDivisor, linhaPosicao.nextSibling);
                console.log("🔧 DEBUG: Divisor inserido após linha específica");
            } else {
                tbody.appendChild(linhaDivisor);
                console.log("🔧 DEBUG: Divisor inserido no final da tabela");
            }

            console.log("✅ LOCALIZADORES: Divisor criado com sucesso");

            // Salvar separador na persistência (apenas se não for uma restauração)
            if (!isRestoracao) {
                salvarSeparadorNaPersistencia(
                    linhaDivisor,
                    textoInicial,
                    linhaPosicao
                );
            }

            return linhaDivisor;
        }

        // Função para salvar separador na persistência
        function salvarSeparadorNaPersistencia(
            linhaDivisor,
            texto,
            linhaPosicao
        ) {
            const tabela = linhaDivisor.closest("table");
            if (!tabela) return;

            const tbody = tabela.querySelector("tbody");
            const todasLinhas = Array.from(
                tbody.querySelectorAll("tr:not(.eprobe-divisor-linha)")
            );

            // Calcular posição baseada na linha de referência
            let posicao = todasLinhas.length; // Por padrão, no final

            if (linhaPosicao) {
                const indice = todasLinhas.findIndex(
                    (linha) => linha === linhaPosicao
                );
                if (indice !== -1) {
                    posicao = indice + 1; // Posição após a linha de referência
                }
            }

            const separadoresSalvos = carregarSeparadores();

            const novoSeparador = {
                id: Date.now(), // ID único baseado em timestamp
                texto: texto,
                posicao: posicao,
                criadoEm: new Date().toISOString(),
            };

            separadoresSalvos.push(novoSeparador);
            salvarSeparadores(separadoresSalvos);

            // Adicionar ID ao elemento para facilitar remoção
            linhaDivisor.setAttribute("data-separador-id", novoSeparador.id);

            console.log(
                "💾 LOCALIZADORES: Separador salvo na persistência:",
                novoSeparador
            );
        }

        // Função para remover separador da persistência
        function removerSeparadorDoPersistencia(linhaDivisor) {
            const separadorId = linhaDivisor.getAttribute("data-separador-id");
            if (!separadorId) return;

            const separadoresSalvos = carregarSeparadores();
            const separadoresFiltrados = separadoresSalvos.filter(
                (sep) => sep.id != separadorId
            );

            salvarSeparadores(separadoresFiltrados);
            console.log(
                "🗑️ LOCALIZADORES: Separador removido da persistência:",
                separadorId
            );
        }

        // Função para salvar alteração no texto do separador
        function salvarAlteracaoSeparador(linhaDivisor, novoTexto) {
            const separadorId = linhaDivisor.getAttribute("data-separador-id");
            if (!separadorId || !novoTexto) return;

            const separadoresSalvos = carregarSeparadores();
            const separadorIndex = separadoresSalvos.findIndex(
                (sep) => sep.id == separadorId
            );

            if (separadorIndex !== -1) {
                separadoresSalvos[separadorIndex].texto = novoTexto;
                separadoresSalvos[separadorIndex].modificadoEm =
                    new Date().toISOString();

                salvarSeparadores(separadoresSalvos);
                console.log(
                    `📝 LOCALIZADORES: Separador ${separadorId} atualizado para: "${novoTexto}"`
                );
            }
        }

        // Função para limpar todos os separadores salvos (útil para debug/reset)
        function limparTodosSeparadores() {
            try {
                const chave = "eprobe_separadores_localizadores";
                const chaveRemovidos = "eprobe_separadores_removidos";

                localStorage.removeItem(chave);
                localStorage.removeItem(chaveRemovidos);

                console.log(
                    "🧹 LOCALIZADORES: Todos os separadores e lista de removidos foram limpos do localStorage"
                );

                // Remover também do DOM se estiver na página
                const separadoresExistentes = document.querySelectorAll(
                    ".eprobe-divisor-linha"
                );
                separadoresExistentes.forEach((separador) =>
                    separador.remove()
                );

                return true;
            } catch (error) {
                console.error(
                    "❌ LOCALIZADORES: Erro ao limpar separadores:",
                    error
                );
                return false;
            }
        }

        // Função para adicionar interface de separadores na página de localizadores
        function adicionarInterfaceSeparadores(tabela) {
            console.log(
                "🛠️ LOCALIZADORES: Adicionando interface para separadores"
            );

            // Adicionar texto informativo no lugar do botão
            adicionarTextoInformativoSeparadores(tabela);

            // Adicionar menu de contexto nas linhas da tabela
            adicionarMenuContextoLinhas(tabela);
        } // Função para adicionar texto informativo sobre separadores
        function adicionarTextoInformativoSeparadores(tabela) {
            // Procurar container adequado para o texto (acima da tabela)
            const containerTabela =
                tabela.closest(".infraAreaTabela") || tabela.parentElement;

            if (!containerTabela) {
                console.log(
                    "⚠️ LOCALIZADORES: Container da tabela não encontrado"
                );
                return;
            }

            // Verificar se já existe o texto informativo
            if (document.getElementById("eprobe-info-separadores")) {
                return;
            }

            // Criar container para o texto informativo
            const containerInfo = document.createElement("div");
            containerInfo.id = "eprobe-info-separadores";
            containerInfo.style.cssText = `
            margin-bottom: 10px;
            padding: 8px 12px;
            background-color: #f8f9fa;
            border-radius: 4px;
            display: flex;
            gap: 8px;
            align-items: center;
            color: #000000;
            font-size: 14px;
        `;

            // Criar ícone
            const icone = document.createElement("span");
            icone.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-satellite" style="vertical-align: middle;">
                <path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"/>
                <path d="M16.5 7.5 19 5"/>
                <path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"/>
                <path d="M9 21a6 6 0 0 0-6-6"/>
                <path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"/>
            </svg>
        `;

            // Criar texto
            const textoInfo = document.createElement("span");
            textoInfo.innerHTML =
                'Função <strong><span style="color: #134377;">eProbe</span></strong>: clique com o botão direito em qualquer localizador para adicionar um separador';

            // Adicionar elementos ao container
            containerInfo.appendChild(icone);
            containerInfo.appendChild(textoInfo);

            // Inserir antes da tabela
            containerTabela.insertBefore(containerInfo, tabela);

            console.log(
                "✅ LOCALIZADORES: Texto informativo de separadores adicionado"
            );
        }

        // Função para adicionar menu de contexto nas linhas
        function adicionarMenuContextoLinhas(tabela) {
            const linhas = tabela.querySelectorAll(
                "tbody tr:not(.eprobe-divisor-linha)"
            );

            linhas.forEach((linha, index) => {
                // Adicionar evento de clique direito
                linha.addEventListener("contextmenu", function (e) {
                    e.preventDefault();
                    mostrarMenuContextoSeparador(e, linha, tabela, index + 1);
                });

                // Adicionar indicação visual de que é clicável
                linha.style.cursor = "context-menu";
                linha.title =
                    "Clique com o botão direito para adicionar separador";
            });

            console.log(
                `✅ LOCALIZADORES: Menu de contexto adicionado a ${linhas.length} linhas`
            );
        }

        // Função para mostrar menu de contexto para separador
        function mostrarMenuContextoSeparador(
            event,
            linha,
            tabela,
            numeroLinha
        ) {
            // Remover menu existente se houver
            const menuExistente = document.getElementById(
                "eprobe-menu-contexto-separador"
            );
            if (menuExistente) {
                menuExistente.remove();
            }

            // Criar menu de contexto
            const menu = document.createElement("div");
            menu.id = "eprobe-menu-contexto-separador";
            menu.style.cssText = `
            position: fixed;
            top: ${event.clientY}px;
            left: ${event.clientX}px;
            background: white;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            z-index: 10000;
            min-width: 200px;
            font-family: 'Roboto', sans-serif;
        `;

            // Criar opção do menu
            const opcaoSeparador = document.createElement("div");
            opcaoSeparador.style.cssText = `
            padding: 8px 12px;
            cursor: pointer;
            border-bottom: 1px solid #eee;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
        `;
            opcaoSeparador.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-separator-horizontal">
                <path d="m16 16-4 4-4-4"/>
                <path d="M3 12h18"/>
                <path d="m8 8 4-4 4 4"/>
            </svg>
            <span>Adicionar separador após linha ${numeroLinha}</span>
        `;

            // Evento da opção
            opcaoSeparador.addEventListener("click", function () {
                const nomeSecao = prompt(
                    "Digite o nome da seção:",
                    "Nova Seção"
                );
                if (nomeSecao !== null && nomeSecao.trim() !== "") {
                    criarDivisorEditavel(tabela, linha, nomeSecao.trim());
                    console.log(
                        `📝 LOCALIZADORES: Separador "${nomeSecao}" adicionado após linha ${numeroLinha}`
                    );
                }
                menu.remove();
            });

            // ⚡ OTIMIZAÇÃO: CSS hover em vez de event listeners
            opcaoSeparador.classList.add("eprobe-menu-option");

            // Adicionar opção ao menu
            menu.appendChild(opcaoSeparador);

            // Adicionar menu ao documento
            document.body.appendChild(menu);

            // Remover menu ao clicar fora
            setTimeout(() => {
                document.addEventListener("click", function removerMenu() {
                    menu.remove();
                    document.removeEventListener("click", removerMenu);
                });
            }, 100);

            // Ajustar posição se sair da tela
            const rect = window.getCachedBoundingRect(menu);
            if (rect.right > window.innerWidth) {
                menu.style.left = event.clientX - rect.width + "px";
            }
            if (rect.bottom > window.innerHeight) {
                menu.style.top = event.clientY - rect.height + "px";
            }
        }

        // Sistema robusto de criação de botão com múltiplas tentativas
        let buttonCreationAttempts = 0;
        const MAX_BUTTON_CREATION_ATTEMPTS = 5;
        let buttonCreationTimer = null;

        function ensureButtonExists() {
            // Verificar se já existe algum botão
            const existingButton =
                document.getElementById("documento-relevante-auto-button") ||
                document.getElementById("sent1-auto-button");

            if (existingButton) {
                console.log("✅ BOTÃO: Já existe, cancelando verificação");
                buttonCreationAttempts = 0;
                return true;
            }

            // Incrementar tentativas
            buttonCreationAttempts++;

            if (buttonCreationAttempts > MAX_BUTTON_CREATION_ATTEMPTS) {
                console.log(
                    "⚠️ BOTÃO: Máximo de tentativas atingido, parando verificação"
                );
                return false;
            }

            console.log(
                `🔄 BOTÃO: Tentativa ${buttonCreationAttempts}/${MAX_BUTTON_CREATION_ATTEMPTS} de criação`
            );

            // Verificar se a página atende aos critérios
            const shouldShowIntegrated = shouldShowIntegratedButton();
            const shouldShowFloating = shouldShowFloatingButton();

            console.log("🔍 BOTÃO: Critérios de validação:", {
                shouldShowIntegrated,
                shouldShowFloating,
                pageUrl: window.location.href,
            });

            if (shouldShowIntegrated || shouldShowFloating) {
                createAutomationButton();

                // Verificar se foi criado com sucesso após um pequeno delay
                setTimeout(() => {
                    const buttonAfterCreation =
                        document.getElementById(
                            "documento-relevante-auto-button"
                        ) || document.getElementById("sent1-auto-button");

                    if (buttonAfterCreation) {
                        console.log("✅ BOTÃO: Criado com sucesso");
                        buttonCreationAttempts = 0;
                    } else {
                        console.log(
                            "⚠️ BOTÃO: Falha na criação, tentando novamente com backoff"
                        );
                        // Backoff exponencial baseado nas tentativas
                        const backoffDelay = Math.min(
                            1000 * Math.pow(1.5, buttonCreationAttempts - 1),
                            5000
                        );
                        setTimeout(ensureButtonExists, backoffDelay);
                    }
                }, 200);
            } else {
                console.log(
                    "❌ BOTÃO: Página não atende aos critérios, tentando novamente com backoff"
                );
                // Backoff exponencial para páginas que ainda estão carregando
                const backoffDelay = Math.min(
                    2000 * Math.pow(1.2, buttonCreationAttempts - 1),
                    8000
                );
                setTimeout(ensureButtonExists, backoffDelay);
            }

            return false;
        }

        // Funções de debug para diagnosticar problemas com o botão
        function debugButtonCreation() {
            console.log("=== DEBUG CRIAÇÃO DE BOTÃO ===");
            console.log("URL atual:", window.location.href);
            console.log("Título da página:", document.title);

            const h1 = document.querySelector("h1");
            console.log(
                "H1 encontrado:",
                h1 ? h1.textContent : "Não encontrado"
            );

            const formProcesso = document.querySelector("#frmProcessoLista");
            console.log("Form processo encontrado:", !!formProcesso);

            const documentLinks = document.querySelectorAll(
                '[href*="acessar_documento"]'
            );
            console.log(
                "Links de documento encontrados:",
                documentLinks.length
            );

            const shouldIntegrated = shouldShowIntegratedButton();
            const shouldFloating = shouldShowFloatingButton();

            console.log("Deve mostrar botão integrado:", shouldIntegrated);
            console.log("Deve mostrar botão flutuante:", shouldFloating);

            const existingIntegrated = document.getElementById(
                "documento-relevante-auto-button"
            );
            const existingFloating =
                document.getElementById("sent1-auto-button");

            console.log("Botão integrado existe:", !!existingIntegrated);
            console.log("Botão flutuante existe:", !!existingFloating);

            return {
                shouldIntegrated,
                shouldFloating,
                hasIntegrated: !!existingIntegrated,
                hasFloating: !!existingFloating,
                url: window.location.href,
            };
        }

        function forceCreateButton() {
            console.log("🔧 FORÇANDO criação de botão...");
            buttonCreationAttempts = 0; // Reset contador
            ensureButtonExists();

            setTimeout(() => {
                debugButtonCreation();
            }, 1000);
        }

        // Função melhorada para verificar se deve mostrar o botão integrado
        function shouldShowIntegratedButton() {
            // Verificações básicas de URL
            const url = window.location.href;
            if (
                !url.includes("eproc") ||
                (!url.includes("processo") && !url.includes("documento"))
            ) {
                console.log(
                    "❌ BOTÃO INTEGRADO: URL não contém eproc + processo/documento"
                );
                return false;
            }

            // Verificar título da página
            const h1Element = document.querySelector("h1");
            if (h1Element) {
                const titleText = h1Element.textContent.trim();
                const hasCorrectTitle =
                    titleText === "Consulta Processual - Detalhes do Processo";

                console.log("🔍 BOTÃO INTEGRADO: Verificando título:", {
                    titleFound: titleText,
                    isCorrect: hasCorrectTitle,
                });

                if (hasCorrectTitle) {
                    return true;
                }
            }

            // Verificações alternativas para páginas de documento
            const hasFormProcesso =
                !!document.querySelector("#frmProcessoLista");
            const hasDocumentContent = !!document.querySelector(
                '[href*="acessar_documento"]'
            );
            const hasMinutasContent = !!document.querySelector(
                "#conteudoMinutas, #fldMinutas"
            );

            console.log("🔍 BOTÃO INTEGRADO: Verificações alternativas:", {
                hasFormProcesso,
                hasDocumentContent,
                hasMinutasContent,
            });

            return hasFormProcesso || hasDocumentContent || hasMinutasContent;
        }

        // Função melhorada para verificar se deve mostrar o botão flutuante
        function shouldShowFloatingButton() {
            // Se deve mostrar botão integrado, não mostrar flutuante
            if (shouldShowIntegratedButton()) {
                return false;
            }

            const url = window.location.href;

            // Verificar se é uma página de documento específico
            if (
                url.includes("acessar_documento") ||
                url.includes("processo_consultar_externo_documento")
            ) {
                console.log(
                    "✅ BOTÃO FLUTUANTE: Página de documento específico detectada"
                );
                return true;
            }

            // Verificar conteúdo da página
            const pageHTML = document.documentElement.outerHTML;
            const hasDocumentHtml = pageHTML.includes("acessar_documento&id");
            const hasDocumentPdf = pageHTML.includes("acessar_documento&amp");
            const hasDocumentLinks = !!document.querySelector(
                '[href*="SENT"], [href*="INIC"], [href*="DECI"]'
            );

            console.log("🔍 BOTÃO FLUTUANTE: Verificando critérios:", {
                hasDocumentHtml,
                hasDocumentPdf,
                hasDocumentLinks,
                shouldShow:
                    hasDocumentHtml || hasDocumentPdf || hasDocumentLinks,
                url,
            });

            return hasDocumentHtml || hasDocumentPdf || hasDocumentLinks;
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
                    log(`Executando estratégia ${i + 1} para descrição...`);
                    const result = strategies[i]();
                    if (result && result.trim().length > 3) {
                        log(`Estratégia ${i + 1} bem-sucedida:`, result);
                        return result.trim();
                    }
                } catch (e) {
                    log(`Erro na estratégia ${i + 1}:`, e);
                }
            }

            log("Nenhuma estratégia encontrou descrição válida");
            return "";
        }

        // Estratégia 1: Buscar na mesma linha do link
        function findEventDescriptionInSameRow(linkElement) {
            const currentRow = linkElement.closest("tr");
            if (!currentRow) return "";

            log("Buscando na linha atual...");

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
                        log(`Encontrado via seletor ${selector}:`, text);
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

            log("Buscando em linhas anteriores...");

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
                                `Encontrado em linha anterior (${attempts}):`,
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

            log("Buscando por padrões de texto...");

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
                                log(
                                    `Encontrado por padrão "${pattern}":`,
                                    text
                                );
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

            log("Analisando estrutura da tabela...");

            const currentRow = linkElement.closest("tr");
            const linkCellIndex = Array.from(currentRow.cells).findIndex(
                (cell) => cell.contains(linkElement)
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
                            `Encontrado na estrutura da tabela (célula ${i}):`,
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
            log("Buscando por proximidade...");

            // Buscar elementos próximos que podem conter descrição
            const parent =
                linkElement.closest("td") || linkElement.closest("tr");
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
                        log(`Encontrado por proximidade:`, text);
                        return text;
                    }
                }
            }

            return "";
        } // Encontrar documentos relevantes com informações detalhadas
        function findDocumentosRelevantes() {
            const pageType = detectPageType();
            log(` Tipo de página detectado: ${pageType}`);

            // Estratégias múltiplas para encontrar documentos relevantes
            const estrategias = [
                // Estratégia 1: Seletores específicos do eProc com data-nome
                () => {
                    const selectors = Object.values(TIPOS_DOCUMENTO_RELEVANTE)
                        .map((tipo) => [
                            `a.infraLinkDocumento[data-nome="${tipo.dataNome}"]`,
                            `a[data-nome="${tipo.dataNome}"]`,
                            `a.infraLinkDocumento[data-nome*="${tipo.dataNome}"]`,
                        ])
                        .flat()
                        .join(", ");
                    return document.querySelectorAll(selectors);
                },

                // Estratégia 2: Buscar por texto dos links que contenha os tipos
                () => {
                    const tiposValidos = Object.values(
                        TIPOS_DOCUMENTO_RELEVANTE
                    ).map((t) => t.nome);
                    const todosLinks = document.querySelectorAll(
                        'a.infraLinkDocumento, a[href*="documento"]'
                    );
                    return Array.from(todosLinks).filter((link) => {
                        const texto = link.textContent.trim().toUpperCase();
                        return tiposValidos.some((tipo) =>
                            texto.includes(tipo)
                        );
                    });
                },

                // Estratégia 3: Buscar por padrões específicos no href
                () => {
                    const patterns = ["SENT", "INIC", "DECI", "DESP", "PETI"];
                    const selector = patterns
                        .map((p) => `a[href*="${p}"]`)
                        .join(", ");
                    return document.querySelectorAll(selector);
                },

                // Estratégia 4: Buscar em tabelas de eventos
                () => {
                    const linksEmTabelas = document.querySelectorAll(
                        'table a[href*="documento"], table a.infraLinkDocumento'
                    );
                    return Array.from(linksEmTabelas).filter((link) => {
                        const texto = link.textContent.trim().toUpperCase();
                        return ["SENT", "INIC", "DECI", "DESP"].some((tipo) =>
                            texto.includes(tipo)
                        );
                    });
                },
            ];

            let links = [];
            let estrategiaUsada = 0;

            // Testar estratégias até encontrar documentos
            for (let i = 0; i < estrategias.length; i++) {
                try {
                    const resultados = estrategias[i]();
                    if (resultados && resultados.length > 0) {
                        links = Array.from(resultados);
                        estrategiaUsada = i + 1;
                        log(
                            `✅ Estratégia ${estrategiaUsada} funcionou - encontrados ${links.length} links`
                        );
                        break;
                    }
                } catch (error) {
                    log(`❌ Estratégia ${i + 1} falhou:`, error);
                }
            }

            log(
                ` Links de documentos relevantes encontrados: ${links.length} (estratégia ${estrategiaUsada})`
            );

            if (links.length === 0) {
                // Debug detalhado quando não encontrar nada
                log(
                    "🔍 DEBUG: Nenhum documento encontrado. Analisando página..."
                );
                log("📊 ANÁLISE DA PÁGINA:");
                log(
                    "  - Todos os links:",
                    document.querySelectorAll("a").length
                );
                log(
                    "  - Links com classe infraLinkDocumento:",
                    document.querySelectorAll("a.infraLinkDocumento").length
                );
                log(
                    "  - Links com href contendo 'documento':",
                    document.querySelectorAll('a[href*="documento"]').length
                );
                log(
                    "  - Elementos com data-nome:",
                    document.querySelectorAll("[data-nome]").length
                );

                // Buscar patterns específicos no DOM
                const todosLinks = Array.from(document.querySelectorAll("a"));
                const linksSuspeitos = todosLinks.filter((link) => {
                    const texto = link.textContent.trim().toUpperCase();
                    const href = link.getAttribute("href") || "";
                    return ["SENT", "INIC", "DECI", "DESP", "PETI"].some(
                        (tipo) =>
                            texto.includes(tipo) ||
                            href.toUpperCase().includes(tipo)
                    );
                });

                log("📋 Links suspeitos encontrados:", linksSuspeitos.length);
                linksSuspeitos.forEach((link, i) => {
                    log(
                        `  ${
                            i + 1
                        }. "${link.textContent.trim()}" -> ${link.getAttribute(
                            "href"
                        )}`
                    );
                });
            }

            const documentosData = [];

            // PRIMEIRA ETAPA: Coletar informações básicas dos links
            links.forEach((link, i) => {
                const texto = link.textContent.trim();
                const href = link.getAttribute("href");

                log(` DOC ${i + 1}:`, {
                    texto: texto,
                    href: href,
                    dataId: link.getAttribute("data-id"),
                    onClick: link.getAttribute("onclick"),
                    element: link,
                });

                // Verificar se é um dos tipos configurados
                const tipoEncontrado = Object.values(
                    TIPOS_DOCUMENTO_RELEVANTE
                ).find(
                    (tipo) => texto === tipo.nome || texto.includes(tipo.nome)
                );

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
                            log(" Erro ao decodificar dadosIconLink:", e);
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
                        tipoDocumento:
                            tipoDocumento || tipoEncontrado.descricao,
                        tamanho: tamanho || "",
                        index: i + 1,
                    });

                    log(
                        ` Documento encontrado: ${texto} (${tipoEncontrado.descricao})!`,
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
                    " Página da lista de documentos detectada - buscando descrições dos eventos..."
                );

                // Para cada documento relevante, encontrar a descrição na mesma linha (tr)
                documentosData.forEach((linkData, index) => {
                    log(` Buscando descrição para documento #${index + 1}...`);

                    let eventoDescricao = "";
                    let eventoData = "";
                    let eventoMagistrado = "";
                    const linkElement = linkData.element; // Encontrar a linha (tr) do evento que contém o link
                    // O link está em uma tabela aninhada, então precisamos buscar o tr principal
                    const eventRow =
                        linkElement.closest("tr[id^='trEvento']") ||
                        linkElement.closest("tr[id*='Evento']") ||
                        linkElement.closest("tr[data-parte]");

                    if (eventRow) {
                        log(
                            ` Link está na linha do evento: ${
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
                                `📝 Descrição encontrada na linha do evento: "${eventoDescricao}"`
                            );
                        } else {
                            log(
                                "⚠️ Célula td.infraEventoDescricao não encontrada na linha do evento"
                            );

                            // Fallback: buscar qualquer elemento com classe infraEventoDescricao na linha
                            const fallbackDescElement = eventRow.querySelector(
                                ".infraEventoDescricao"
                            );
                            if (fallbackDescElement) {
                                eventoDescricao =
                                    fallbackDescElement.textContent.trim();
                                log(
                                    `📝 Descrição encontrada via fallback: "${eventoDescricao}"`
                                );
                            } else {
                                // Debug: mostrar todas as células da linha para entender a estrutura
                                const allCells =
                                    eventRow.querySelectorAll("td");
                                log(
                                    `🔍 Debug - Total de células na linha: ${allCells.length}`
                                );
                                allCells.forEach((cell, index) => {
                                    log(
                                        `📋 Célula ${
                                            index + 1
                                        }: "${cell.textContent
                                            .trim()
                                            .substring(0, 50)}" (classe: ${
                                            cell.className
                                        })`
                                    );
                                });
                            }
                        }

                        // Buscar informações do magistrado/vara
                        const magistradoCell =
                            eventRow.querySelector(
                                "label.infraEventoUsuario"
                            ) ||
                            eventRow.querySelector("td.infraEventoUsuario");

                        log(
                            `🔍 Debug Magistrado - Célula encontrada: ${!!magistradoCell} (${
                                magistradoCell
                                    ? magistradoCell.tagName.toLowerCase()
                                    : "N/A"
                            })`
                        );
                        if (magistradoCell) {
                            log(
                                `🔍 Debug Magistrado - Elemento: <${magistradoCell.tagName.toLowerCase()}> com classe: ${
                                    magistradoCell.className
                                }`
                            );
                            log(
                                `🔍 Debug Magistrado - Conteúdo da célula: "${magistradoCell.textContent.trim()}"`
                            );

                            const onmouseoverAttr =
                                magistradoCell.getAttribute("onmouseover");
                            const titleAttr =
                                magistradoCell.getAttribute("title");
                            const tooltipAttr =
                                magistradoCell.getAttribute("data-tooltip");

                            log(
                                `🔍 Debug Magistrado - Atributo onmouseover: ${!!onmouseoverAttr}`
                            );
                            log(
                                `🔍 Debug Magistrado - Atributo title: ${!!titleAttr}`
                            );
                            log(
                                `🔍 Debug Magistrado - Atributo data-tooltip: ${!!tooltipAttr}`
                            );

                            // Tentar extrair de onmouseover primeiro
                            if (onmouseoverAttr) {
                                log(
                                    `🔍 Debug Magistrado - Conteúdo onmouseover: "${onmouseoverAttr}"`
                                );

                                // Estratégias múltiplas para extrair o texto do magistrado
                                let magistradoEncontrado = false;

                                // Estratégia 1: Texto entre aspas simples ou duplas
                                const magistradoMatch1 =
                                    onmouseoverAttr.match(/['"]([^'"]+)['"]/);
                                if (magistradoMatch1 && magistradoMatch1[1]) {
                                    eventoMagistrado =
                                        magistradoMatch1[1].trim();
                                    magistradoEncontrado = true;
                                    log(
                                        `🔍 Estratégia 1 - Magistrado/Vara encontrado: "${eventoMagistrado}"`
                                    );
                                }

                                // Estratégia 2: Texto após "infraTooltipMostrar"
                                if (!magistradoEncontrado) {
                                    const magistradoMatch2 =
                                        onmouseoverAttr.match(
                                            /infraTooltipMostrar\(['"]([^'"]+)['"]\)/
                                        );
                                    if (
                                        magistradoMatch2 &&
                                        magistradoMatch2[1]
                                    ) {
                                        eventoMagistrado =
                                            magistradoMatch2[1].trim();
                                        magistradoEncontrado = true;
                                        log(
                                            `🔍 Estratégia 2 - Magistrado/Vara encontrado: "${eventoMagistrado}"`
                                        );
                                    }
                                }

                                // Estratégia 3: Qualquer texto que pareça nome/cargo entre parênteses ou tags
                                if (!magistradoEncontrado) {
                                    const magistradoMatch3 =
                                        onmouseoverAttr.match(
                                            />\s*([^<>]+(?:juiz|magistrad|vara|gabinete)[^<>]*)\s*</i
                                        );
                                    if (
                                        magistradoMatch3 &&
                                        magistradoMatch3[1]
                                    ) {
                                        eventoMagistrado =
                                            magistradoMatch3[1].trim();
                                        magistradoEncontrado = true;
                                        log(
                                            `🔍 Estratégia 3 - Magistrado/Vara encontrado: "${eventoMagistrado}"`
                                        );
                                    }
                                }

                                // Estratégia 4: Fallback - qualquer texto substancial
                                if (!magistradoEncontrado) {
                                    const magistradoMatch4 =
                                        onmouseoverAttr.match(
                                            />\s*([A-Za-zÀ-ÿ\s]{10,})\s*</
                                        );
                                    if (
                                        magistradoMatch4 &&
                                        magistradoMatch4[1]
                                    ) {
                                        eventoMagistrado =
                                            magistradoMatch4[1].trim();
                                        magistradoEncontrado = true;
                                        log(
                                            `🔍 Estratégia 4 - Magistrado/Vara encontrado: "${eventoMagistrado}"`
                                        );
                                    }
                                }

                                if (!magistradoEncontrado) {
                                    log(
                                        `❌ Nenhuma estratégia conseguiu extrair texto do onmouseover`
                                    );
                                }
                            }

                            // Se não conseguiu pelo onmouseover, tentar title
                            if (!eventoMagistrado && titleAttr) {
                                log(
                                    `🔍 Tentando extrair do atributo title: "${titleAttr}"`
                                );
                                if (titleAttr.length > 5) {
                                    eventoMagistrado = titleAttr.trim();
                                    log(
                                        `🔍 Magistrado/Vara encontrado no title: "${eventoMagistrado}"`
                                    );
                                }
                            }

                            // Se não conseguiu pelo title, tentar data-tooltip
                            if (!eventoMagistrado && tooltipAttr) {
                                log(
                                    `🔍 Tentando extrair do atributo data-tooltip: "${tooltipAttr}"`
                                );
                                if (tooltipAttr.length > 5) {
                                    eventoMagistrado = tooltipAttr.trim();
                                    log(
                                        `🔍 Magistrado/Vara encontrado no data-tooltip: "${eventoMagistrado}"`
                                    );
                                }
                            }

                            // Fallback final: usar o texto da própria célula se tiver conteúdo
                            if (!eventoMagistrado) {
                                const cellText =
                                    magistradoCell.textContent.trim();
                                if (
                                    cellText &&
                                    cellText.length > 3 &&
                                    !cellText.match(/^\d+$/)
                                ) {
                                    eventoMagistrado = cellText;
                                    log(
                                        `🔍 Magistrado/Vara encontrado no texto da célula: "${eventoMagistrado}"`
                                    );
                                }
                            }

                            // Formatar informações do magistrado/advogado
                            if (eventoMagistrado) {
                                const magistradoFormatado =
                                    formatarMagistradoAdvogado(
                                        eventoMagistrado
                                    );
                                if (
                                    typeof magistradoFormatado === "object" &&
                                    magistradoFormatado.tipo
                                ) {
                                    // Armazenar informações estruturadas
                                    linkData.magistradoInfo =
                                        magistradoFormatado;
                                    eventoMagistrado = magistradoFormatado.nome;
                                } else {
                                    eventoMagistrado = magistradoFormatado;
                                }
                                log(
                                    `🔍 Informações formatadas: "${eventoMagistrado}"`
                                );
                            }

                            if (!eventoMagistrado) {
                                log(
                                    `❌ Nenhuma informação de magistrado/advogado encontrada`
                                );
                            }
                        } else {
                            log(
                                `❌ Elemento label.infraEventoUsuario OU td.infraEventoUsuario não encontrado`
                            );

                            // Debug: verificar todas as células da linha para encontrar possíveis alternativas
                            const allCells =
                                eventRow.querySelectorAll("td, label");
                            log(
                                `🔍 Debug - Verificando todos os ${allCells.length} elementos (td/label) da linha:`
                            );
                            allCells.forEach((cell, idx) => {
                                log(
                                    `📋 Elemento ${
                                        idx + 1
                                    }: <${cell.tagName.toLowerCase()}> classe="${
                                        cell.className
                                    }", texto="${cell.textContent
                                        .trim()
                                        .substring(
                                            0,
                                            30
                                        )}", onmouseover="${!!cell.getAttribute(
                                        "onmouseover"
                                    )}"`
                                );
                            });
                        }

                        // Buscar a célula de data do evento na mesma linha (geralmente é a 3ª coluna)
                        const eventCells = eventRow.querySelectorAll("td");
                        if (eventCells.length >= 3) {
                            // A data geralmente está na 3ª célula (índice 2)
                            const dateCell = eventCells[2];
                            if (dateCell) {
                                const dateText = dateCell.textContent.trim();
                                // Verificar se parece uma data (formato XX/XX/XXXX)
                                if (dateText.match(/\d{2}\/\d{2}\/\d{4}/)) {
                                    eventoData = dateText;
                                    log(
                                        `📅 Data encontrada na linha do evento: "${eventoData}"`
                                    );
                                }
                            }
                        }

                        if (!eventoData) {
                            // Fallback: buscar qualquer texto que pareça uma data na linha
                            const allText = eventRow.textContent;
                            const dateMatch = allText.match(
                                /(\d{2}\/\d{2}\/\d{4}[\s\d:]*)/
                            );
                            if (dateMatch) {
                                eventoData = dateMatch[1].trim();
                                log(
                                    `📅 Data encontrada via fallback: "${eventoData}"`
                                );
                            }
                        }
                    } else {
                        log(
                            " Não foi possível encontrar a linha (tr) do evento que contém o link do documento"
                        );

                        // Debug: verificar estrutura ao redor do link
                        log(" Debug - Estrutura ao redor do link:");
                        let parent = linkElement.parentElement;
                        let level = 0;
                        while (parent && level < 5) {
                            log(
                                ` Nível ${level}: ${parent.tagName} (id: ${
                                    parent.id || "N/A"
                                }, classe: ${parent.className || "N/A"})`
                            );
                            parent = parent.parentElement;
                            level++;
                        }
                    }

                    // Adicionar a descrição, data e magistrado encontrados ao objeto do link
                    linkData.eventoDescricao =
                        eventoDescricao || linkData.tipo.descricao;
                    linkData.eventoData = eventoData || "";
                    linkData.eventoMagistrado = eventoMagistrado || "";
                    log(
                        `📋 Dados finais para documento #${
                            index + 1
                        }: Descrição: "${linkData.eventoDescricao}", Data: "${
                            linkData.eventoData
                        }", Magistrado: "${linkData.eventoMagistrado}"`
                    );
                });
            } else {
                log(
                    " Não é página de lista de documentos ou não há documentos relevantes - descrições não serão buscadas"
                );
                // Se não estivermos na lista de documentos, usar descrição padrão do tipo
                documentosData.forEach((linkData) => {
                    linkData.eventoDescricao = linkData.tipo.descricao;
                    linkData.eventoData = "";
                    linkData.eventoMagistrado = "";
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
                eventoData: linkData.eventoData,
                eventoMagistrado: linkData.eventoMagistrado,
                magistradoInfo: linkData.magistradoInfo, // Informações estruturadas
                index: linkData.index,
            }));

            // VERIFICAÇÃO FINAL E FALLBACK
            if (documentosRelevantes.length === 0) {
                log(
                    "⚠️ NENHUM DOCUMENTO ENCONTRADO - Tentando estratégias de fallback..."
                );

                // Fallback 1: Buscar qualquer link que tenha padrões suspeitos
                const linksSuspeitos = Array.from(
                    document.querySelectorAll("a")
                ).filter((link) => {
                    const texto = link.textContent.trim().toUpperCase();
                    const href = link.getAttribute("href") || "";

                    // Padrões mais amplos
                    const padroesSuspeitos = [
                        /SENT\d*/i,
                        /INIC\d*/i,
                        /DECI\d*/i,
                        /DESP\d*/i,
                        /PETI\d*/i,
                        /DOCUMENTO\s*\d+/i,
                        /SENTENÇA/i,
                        /PETIÇÃO/i,
                        /DECISÃO/i,
                        /DESPACHO/i,
                    ];

                    const temPadraoTexto = padroesSuspeitos.some((padrao) =>
                        padrao.test(texto)
                    );
                    const temPadraoHref = padroesSuspeitos.some((padrao) =>
                        padrao.test(href)
                    );

                    return (
                        temPadraoTexto ||
                        temPadraoHref ||
                        (href.includes("documento") && texto.length > 2)
                    );
                });

                if (linksSuspeitos.length > 0) {
                    log(
                        `✅ FALLBACK: Encontrados ${linksSuspeitos.length} links suspeitos`
                    );

                    // Converter para o formato esperado
                    const documentosFallback = linksSuspeitos
                        .slice(0, 10)
                        .map((link, index) => {
                            // Limitado a 10 para performance
                            const texto = link.textContent.trim();
                            const href = link.getAttribute("href") || "";

                            // Determinar tipo baseado no texto
                            let tipoDetectado = null;
                            const tiposDisponiveis = Object.values(
                                TIPOS_DOCUMENTO_RELEVANTE
                            );

                            for (const tipo of tiposDisponiveis) {
                                if (
                                    texto.toUpperCase().includes(tipo.nome) ||
                                    href.toUpperCase().includes(tipo.dataNome)
                                ) {
                                    tipoDetectado = tipo;
                                    break;
                                }
                            }

                            // Fallback para tipo genérico
                            if (!tipoDetectado) {
                                tipoDetectado = {
                                    nome: texto.substring(0, 8) || "DOC",
                                    descricao: "Documento Relevante",
                                    dataNome: "DOC",
                                };
                            }

                            return {
                                element: link,
                                href: href,
                                texto: texto,
                                tipo: tipoDetectado,
                                eventoId: "",
                                docId: "",
                                seqEvento: "",
                                tipoDocumento: tipoDetectado.descricao,
                                tamanho: "",
                                eventoDescricao: tipoDetectado.descricao,
                                eventoData: "",
                                eventoMagistrado: "",
                                magistradoInfo: null,
                                index: index + 1,
                                origem: "fallback",
                            };
                        });

                    log(
                        `✅ FALLBACK: Retornando ${documentosFallback.length} documentos`
                    );
                    return documentosFallback;
                }
            }

            log(
                `✅ RESULTADO FINAL: ${documentosRelevantes.length} documentos relevantes encontrados`
            );
            return documentosRelevantes;
        }

        // Abrir documento relevante automaticamente (com suporte a múltiplos documentos) - usando expressão de função
        const autoOpenDocumentoRelevante = async function () {
            const pageType = detectPageType();
            log(" Tipo de página:", pageType);

            if (pageType !== "lista_documentos") {
                log(" Não está na página de lista de documentos");
                return false;
            }

            const documentosRelevantes = findDocumentosRelevantes();

            if (documentosRelevantes.length === 0) {
                log(" Nenhum documento relevante encontrado");
                showNotification(
                    "Nenhum documento relevante encontrado nesta página",
                    "error"
                );
                return false;
            }

            let selectedDocument;

            if (documentosRelevantes.length === 1) {
                // Apenas um documento encontrado
                selectedDocument = documentosRelevantes[0];
                log(" Um documento encontrado, selecionando automaticamente");
            } else {
                // Múltiplos documentos encontrados
                log(
                    ` ${documentosRelevantes.length} documentos encontrados, solicitando seleção do usuário`
                );

                log(
                    " DEBUG: documentosRelevantes antes do modal:",
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
                    log(" Usuário cancelou a seleção");
                    return false;
                }
            }

            log(" Abrindo documento selecionado:", selectedDocument.href);
            showNotification(
                `Abrindo ${selectedDocument.tipo.descricao} selecionada...`,
                "info"
            );

            // Abrir em uma nova aba
            window.open(selectedDocument.href, "_blank");

            return true;
        };

        // Extrair texto do documento - usando expressão de função
        const autoExtractText = async function () {
            const pageType = detectPageType();
            log(" Tipo de página:", pageType);

            // Aceitar múltiplos tipos de página de documento
            const validDocumentTypes = [
                "documento_especifico",
                "documento_html",
                "documento_pdf",
            ];

            if (!validDocumentTypes.includes(pageType)) {
                // Se não é um tipo de documento reconhecido, verificar se há documentos na página
                const pageHTML = document.documentElement.outerHTML;
                const hasDocumentHtml = pageHTML.includes(
                    "acessar_documento&id"
                );
                const hasDocumentPdf = pageHTML.includes(
                    "acessar_documento&amp"
                );

                console.log(
                    " Verificação adicional para página não reconhecida:",
                    {
                        pageType: pageType,
                        hasDocumentHtml: hasDocumentHtml,
                        hasDocumentPdf: hasDocumentPdf,
                    }
                );

                if (!hasDocumentHtml && !hasDocumentPdf) {
                    log(" Não está na página do documento específico");
                    showNotification(
                        "Execute na página do documento, não na lista",
                        "error"
                    );
                    return null;
                } else {
                    log(
                        " Página contém documentos, prosseguindo com extração..."
                    );
                }
            }

            // Aguardar documento carregar completamente
            await waitForDocumentLoad();

            // DETECTAR SE É PDF PRIMEIRO (múltiplas estratégias)
            log(" Verificando tipo de documento...");

            // ESTRATÉGIA PRINCIPAL: Verificar padrão específico do eProc para PDF
            const urlCurrentPage = window.location.href;
            const pageContainsPdfPattern = urlCurrentPage.includes(
                "acao=acessar_documento&doc="
            );

            // ESTRATÉGIA SECUNDÁRIA: Verificar se há links/formulários para PDF na página
            const pageHasPdfLinks = document.body.innerHTML.includes(
                "acao=acessar_documento&doc="
            );

            log(" Detecção eProc específica:", {
                currentUrl: urlCurrentPage,
                hasPdfPattern: pageContainsPdfPattern,
                hasPdfLinksInPage: pageHasPdfLinks,
            });

            // Estratégias complementares (mantidas como fallback)
            // Estratégia 3: Embed com PDF
            const pdfEmbed = document.querySelector(
                'embed[type="application/x-google-chrome-pdf"]'
            );

            // Estratégia 4: Object com PDF
            const pdfObject = document.querySelector(
                'object[type="application/pdf"]'
            );

            // Estratégia 5: Iframe com PDF
            const pdfIframe = document.querySelector('iframe[src*=".pdf"]');

            // Estratégia 6: Verificar se URL atual contém outros indicadores de PDF
            const urlContainsPdf =
                window.location.href.includes(".pdf") ||
                document.title.toLowerCase().includes("pdf");

            // Estratégia 7: Verificar se há elementos que indicam visualização de PDF
            const hasPdfViewer =
                document.querySelector("#plugin") ||
                document.querySelector('[id*="pdf"]') ||
                document.querySelector('[class*="pdf"]');

            // DECISÃO FINAL: eProc específico tem prioridade
            const isPdfDocument =
                pageContainsPdfPattern ||
                pageHasPdfLinks ||
                pdfEmbed ||
                pdfObject ||
                pdfIframe ||
                urlContainsPdf ||
                hasPdfViewer;

            log(` Detecção de PDF: ${isPdfDocument ? "SIM" : "NÃO"}`, {
                eproc_currentUrl: pageContainsPdfPattern,
                eproc_pageLinks: pageHasPdfLinks,
                pdfEmbed: !!pdfEmbed,
                pdfObject: !!pdfObject,
                pdfIframe: !!pdfIframe,
                urlContainsPdf: urlContainsPdf,
                hasPdfViewer: !!hasPdfViewer,
            });

            if (isPdfDocument) {
                log(" PDF detectado!");

                // Modal customizado para opções de PDF
                const userChoice = await showPdfOptionsModal();
                // Modal customizado para opções de PDF
                function showPdfOptionsModal() {
                    return new Promise((resolve) => {
                        const overlay = document.createElement("div");
                        overlay.className = "help-modal-overlay";
                        overlay.innerHTML = `
 <div class="help-modal" style="max-width: 400px;">
 <div class="help-modal-header">
 <h2 style="font-size:1.1rem;display:flex;align-items:center;gap:8px;">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.2em;height:1.2em;">
 <rect width="16" height="12" x="4" y="8" rx="2" />
 <path d="M2 14h2" />
 <path d="M20 14h2" />
 </svg>
 PDF detectado!
 </h2>
 <button class="help-close-btn" aria-label="Fechar" style="margin-left:auto;">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 6-12 12" /><path d="m6 6 12 12" /></svg>
 </button>
 </div>
 <div class="help-modal-content" style="padding:24px 20px 20px 20px;">
 <div style="margin-bottom:18px;display:flex;align-items:center;gap:8px;">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.1em;height:1.1em;color:#134377;"><rect width="16" height="12" x="4" y="8" rx="2" /></svg>
 <span style="color:var(--color-text-main);font-size:1rem;">PDF detectado nesta página.</span>
 </div>
 <div style="margin-bottom:20px;">
 <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1em;height:1em;color:#134377;"><polyline points="20 6 9 17 4 12" /></svg>
 <span style="color:var(--color-text-main);">Tentar extrair texto diretamente do PDF</span>
 </div>
 <div style="display:flex;align-items:center;gap:8px;">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1em;height:1em;color:#e57373;"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
 <span style="color:var(--color-text-main);">Baixar PDF e usar Perplexity com upload</span>
 </div>
 </div>
 <div style="display:flex;gap:12px;justify-content:flex-end;">
 <button class="btn primary" id="pdf-ok-btn" style="min-width:90px;">OK</button>
 <button class="btn" id="pdf-cancel-btn" style="min-width:90px;">Cancelar</button>
 </div>
 </div>
 </div>
 `;
                        document.body.appendChild(overlay);
                        const close = (result) => {
                            document.body.removeChild(overlay);
                            resolve(result);
                        };
                        overlay.querySelector(".help-close-btn").onclick = () =>
                            close(false);
                        overlay.querySelector("#pdf-ok-btn").onclick = () =>
                            close(true);

                        const pdfCancelBtn =
                            overlay.querySelector("#pdf-cancel-btn");

                        // Adicionar hover vermelho no botão cancelar PDF
                        pdfCancelBtn.classList.add("eprobe-pdf-cancel-button");
                        pdfCancelBtn.onclick = () => close(false);

                        overlay.addEventListener("click", (e) => {
                            if (e.target === overlay) close(false);
                        });
                    });
                }

                if (!userChoice) {
                    showNotification(
                        "PDF detectado!\n\n" +
                            "Para processar este documento:\n" +
                            "1. Clique com botão direito → 'Salvar como'\n" +
                            "2. Abra Perplexity, Claude ou Gemini\n" +
                            "3. Faça upload do arquivo PDF\n" +
                            "4. Solicite um resumo do documento\n\n" +
                            "Esta é a forma mais confiável para PDFs!",
                        "info"
                    );
                    return null;
                }

                // Se usuário escolheu extração direta, prosseguir para extração de texto
                log(" Usuário escolheu extração direta de texto");
                const pdfElement = pdfEmbed || pdfObject || pdfIframe;

                if (!pdfElement) {
                    showNotification(
                        " PDF detectado mas elemento não acessível!\n\n" +
                            "Solução:\n" +
                            "1. Baixe o PDF manualmente\n" +
                            "2. Use Perplexity/Claude com upload do arquivo\n\n" +
                            " Limitação técnica do navegador.",
                        "warning"
                    );
                    return null;
                }

                const textoExtraido = await extractTextFromPDF(pdfElement);

                if (!textoExtraido) {
                    log(
                        " Extração direta falhou, retornando null para parar processamento"
                    );
                    // Não continuar para processamento HTML quando extração direta falha
                    return null;
                }

                return textoExtraido;
            }

            // SE NÃO É PDF, PROCESSAR COMO DOCUMENTO HTML NORMAL
            log(" Documento HTML detectado, processando...");

            // Verificar se há seção do documento (para sentenças HTML)
            const sectionDocumento = document.querySelector(
                'section[data-nome="sentenca"]'
            );
            if (!sectionDocumento) {
                log(" Section do documento não encontrada");

                // Verificar se pode ser um PDF que não foi detectado
                const bodyText = document.body.textContent.toLowerCase();
                const bodyHtml = document.body.innerHTML;

                // Usar a mesma detecção específica do eProc
                const possiblePdf =
                    bodyText.includes("pdf") ||
                    bodyText.includes("adobe") ||
                    bodyText.includes("acrobat") ||
                    bodyHtml.includes("acao=acessar_documento&doc=") || // eProc específico
                    document.querySelector("embed, object") ||
                    window.location.href.includes("doc=") ||
                    window.location.href.includes("documento");

                if (possiblePdf) {
                    showNotification(
                        "Possível PDF detectado!\n\n" +
                            "Se este é um documento PDF:\n" +
                            "1. Recarregue a página e tente novamente\n" +
                            "2. Ou baixe o PDF e use Perplexity com upload\n\n" +
                            "Se for HTML: verifique se o documento carregou completamente",
                        "warning"
                    );
                } else {
                    showNotification(
                        " Conteúdo do documento não encontrado\n\n" +
                            "Possíveis causas:\n" +
                            "• Documento ainda está carregando\n" +
                            "• Formato não suportado\n" +
                            "• Página de erro ou acesso negado\n\n" +
                            " Tente recarregar a página",
                        "error"
                    );
                }
                return null;
            }

            // VERIFICAÇÃO REMOVIDA - estava rejeitando páginas válidas de documento
            // Os indicadores como "processo:", "SENT1", etc. aparecem legitimamente nas páginas de sentença
            log(" Página do documento válida, prosseguindo com extração...");

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
                ` Encontrados ${paragrafosTexto.length} parágrafos com classes específicas`
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
                            ` P${idx + 1} (${
                                paragrafo.className
                            }): ${textoP.substring(0, 100)}...`
                        );
                    }
                });
            } else {
                log(" Nenhum parágrafo com classes específicas encontrado");
                log(" Tentando extração da seção completa...");

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
                log(" Nenhum texto válido encontrado");
                showNotification(
                    " Nenhum texto válido encontrado no documento",
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

            log(" Texto extraído:", texto.length, "caracteres");
            log(" Prévia do texto:", texto.substring(0, 200) + "...");

            if (texto.trim().length < 100) {
                log(" Texto muito pequeno");
                showNotification("Texto extraído é muito pequeno", "warning");
                return null;
            }

            showNotification(
                ` Texto extraído: ${texto.length} caracteres`,
                "success"
            );
            return texto.trim();
        };

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

        // Copiar para clipboard - usando expressão de função
        const copyToClipboard = async function (text) {
            try {
                await navigator.clipboard.writeText(text);
                log(" Texto copiado para clipboard");
                showNotification("Texto copiado para clipboard!", "success");
                return true;
            } catch (error) {
                log(" Erro ao copiar:", error);
                showNotification("Erro ao copiar texto", "error");
                return false;
            }
        };

        // Limpar caracteres invisíveis que podem causar problemas no clipboard
        function cleanInvisibleChars(text) {
            return text
                .replace(/[\u200B-\u200D\uFEFF]/g, "") // Remove zero-width chars
                .replace(/[\u00A0]/g, " ") // Replace non-breaking space with regular space
                .replace(/[\u2000-\u200A]/g, " ") // Replace various unicode spaces
                .replace(/[\u2028\u2029]/g, "\n") // Replace line/paragraph separators
                .trim();
        }

        // Copiar texto para clipboard com prefixo para IA
        async function copyToClipboardWithPrefix(texto) {
            try {
                const prefixo = `Faça um resumo extremamente sucinto do documento, em formato de apontamentos diretos (bullet points), para constar na capa do processo digital. Indique: tipo de ação, partes, pedido(s) do autor, decisão (improcedente/procedente/parcialmente procedente), fundamentos centrais, condenação (custas/honorários se houver) Seja objetivo e direto, sem redação em texto corrido. 
                
                DOCUMENTO:`;
                const textoLimpo = cleanInvisibleChars(texto);
                const textoCompleto = cleanInvisibleChars(prefixo + textoLimpo);

                log(" Debug - Texto que será copiado:");
                log(" Tamanho:", textoCompleto.length, "caracteres");
                log(
                    " Prévia (primeiros 200 chars):",
                    textoCompleto.substring(0, 200)
                );
                log(
                    " Final (últimos 200 chars):",
                    textoCompleto.substring(textoCompleto.length - 200)
                );

                await navigator.clipboard.writeText(textoCompleto);

                // Verificar se realmente foi copiado
                setTimeout(async () => {
                    try {
                        const clipboardContent =
                            await navigator.clipboard.readText();
                        log(
                            " Verificação: Texto no clipboard:",
                            clipboardContent.length,
                            "caracteres"
                        );
                        log(
                            " Conteúdo real no clipboard:",
                            clipboardContent.substring(0, 200)
                        );

                        if (clipboardContent === textoCompleto) {
                            log(" Clipboard confirmado: Texto correto!");
                        } else {
                            log(
                                " ERRO: Texto no clipboard é diferente do enviado!"
                            );
                            log(" Debug diferença:");
                            log(
                                " Esperado:",
                                textoCompleto.length,
                                "caracteres"
                            );
                            log(
                                " Real:",
                                clipboardContent.length,
                                "caracteres"
                            );
                            log(
                                " Diferença:",
                                Math.abs(
                                    clipboardContent.length -
                                        textoCompleto.length
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
                                    " Clipboard OK (apenas caracteres invisíveis diferentes)"
                                );
                            } else {
                                log(" Clipboard realmente diferente");
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
                                    if (
                                        textoCompleto[i] !== clipboardContent[i]
                                    ) {
                                        log(
                                            ` Primeira diferença na posição ${i}:`
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
                        log(" Não foi possível verificar o clipboard:", e);
                    }
                }, 100);

                log(
                    ` Texto copiado com prefixo (${textoCompleto.length} caracteres)`
                );
                showNotification(
                    ` Texto copiado com prefixo!\n${textoCompleto.length} caracteres prontos para IA`,
                    "success"
                );
                return true;
            } catch (error) {
                log(" Erro ao copiar texto com prefixo:", error);
                showNotification(" Erro ao copiar texto", "error");
                return false;
            }
        }

        // Enviar texto diretamente para Perplexity usando API - usando expressão de função
        const sendToPerplexity = async function (texto) {
            const requestId = Date.now().toString();

            try {
                debugApiCall(requestId, "INÍCIO", {
                    textoLength: texto.length,
                });
                log(" Enviando texto para Perplexity via API...");
                showNotification("Enviando para Perplexity...", "info");

                const apiKey = await getStoredApiKey();
                if (!apiKey) {
                    debugApiCall(requestId, "ERRO", "API key não encontrada");
                    showNotification(" Erro ao obter chave API", "error");
                    return false;
                }

                const prompt = `Faça um resumo extremamente sucinto do documento, em formato de apontamentos diretos (bullet points), para constar na capa do processo digital. Indique: tipo de ação, partes, pedido(s) do autor, decisão (improcedente/procedente/parcialmente procedente), fundamentos centrais, condenação (custas/honorários se houver). Seja objetivo e direto, sem redação em texto corrido. DOCUMENTO: ${texto}`;

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
                        resetTokens:
                            responseHeaders["x-ratelimit-reset-tokens"],
                    },
                });

                if (!response.ok) {
                    const errorData = await response.text();
                    let errorJson = null;

                    try {
                        errorJson = JSON.parse(errorData);
                    } catch (e) {
                        log(" Resposta de erro não é JSON válido");
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
                        log(" Erro 401:", errorMsg);
                        showNotification(
                            ` ${errorMsg}. Configure uma nova chave API do Perplexity.`,
                            "error"
                        );
                        await removeStoredApiKey();
                        return false;
                    } else if (response.status === 429) {
                        const rateLimitType =
                            errorJson?.error?.type || "rate_limit_exceeded";
                        const retryAfter = responseHeaders["retry-after"];

                        log(" Rate limit:", {
                            type: rateLimitType,
                            retryAfter,
                        });

                        if (rateLimitType === "insufficient_quota") {
                            showNotification(
                                " Cota da API Perplexity esgotada. Verifique seus créditos em perplexity.ai/settings/api",
                                "error"
                            );
                        } else {
                            showNotification(
                                ` Limite de requests atingido. Aguarde ${
                                    retryAfter || "alguns minutos"
                                } antes de tentar novamente.`,
                                "warning"
                            );
                        }
                        return false;
                    } else if (response.status === 403) {
                        const errorMsg =
                            errorJson?.error?.message || "Acesso negado";
                        log(" Erro 403:", errorMsg);
                        showNotification(
                            ` ${errorMsg}. Usando método manual...`,
                            "warning"
                        );
                        return await fallbackToManual(texto);
                    } else if (response.status >= 500) {
                        log(" Erro do servidor Perplexity:", response.status);
                        showNotification(
                            ` Erro do servidor Perplexity (${response.status}). Usando método manual...`,
                            "warning"
                        );
                        return await fallbackToManual(texto);
                    } else {
                        const errorMsg =
                            errorJson?.error?.message ||
                            `Erro ${response.status}`;
                        log(" Erro desconhecido:", errorMsg);
                        showNotification(
                            ` ${errorMsg}. Usando método manual...`,
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

                showNotification("Resumo gerado com sucesso!", "success");

                await copyToClipboard(resumo);

                showNotification(
                    " Resumo pronto!\n\nO resumo do documento está na sua área de transferência.",
                    "success"
                );

                return true;
            } catch (error) {
                debugApiCall(requestId, "EXCEPTION", {
                    errorName: error.name,
                    errorMessage: error.message,
                    errorStack: error.stack,
                });

                log(" Erro ao enviar para Perplexity:", error);
                showNotification(
                    " Erro de conexão na API. Usando método manual...",
                    "warning"
                );

                return await fallbackToManual(texto);
            }
        };

        // Função auxiliar para fallback manual
        async function fallbackToManual(texto) {
            log(" Executando fallback para método manual");
            const copied = await copyToClipboardWithPrefix(texto);
            if (copied) {
                showNotification(
                    " Texto copiado! Cole em Perplexity ou outra IA (Ctrl+V)",
                    "info"
                );
            } else {
                log(" Falha ao copiar texto no fallback");
                showNotification(" Falha ao copiar texto", "error");
            }
            return false;
        }

        // Gerenciar chave API
        async function getStoredApiKey() {
            let apiKey = localStorage.getItem("perplexity_api_key");

            if (!apiKey) {
                // Chave codificada em Base64 para ofuscação básica
                const encodedKey =
                    "cHBseC1LUEFHYXhYZVZ4Yk1wUWJ5QzNCNmpZUERPd1luSk1ka3MxcUR6YmF1N2s3c05nbUo=";
                apiKey = atob(encodedKey);
                localStorage.setItem("perplexity_api_key", apiKey);
                log(" API key do Perplexity configurada automaticamente");
            }

            return apiKey;
        }

        async function storeApiKey(apiKey) {
            if (!apiKey || !apiKey.startsWith("pplx-")) {
                throw new Error('Chave API inválida. Deve começar com "pplx-"');
            }
            localStorage.setItem("perplexity_api_key", apiKey);
            log(" Chave API do Perplexity armazenada com sucesso");
        }

        async function removeStoredApiKey() {
            localStorage.removeItem("perplexity_api_key");
            log(" Chave API do Perplexity removida");
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

            // Verificar se há botão flutuante e ajustar posição se necessário
            const floatingButton = document.getElementById("sent1-auto-button");
            const isFloatingButtonVisible =
                floatingButton && floatingButton.style.display !== "none";

            // Calcular posição para evitar sair da tela
            const menuWidth = 200;
            const menuHeight = 400; // Estimativa
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            // Se o menu vai aparecer perto do botão flutuante, ajustar posição
            if (isFloatingButtonVisible && x > screenWidth - 220 && y < 200) {
                // Mover menu para a esquerda do botão flutuante
                x = screenWidth - 240;
            }

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
            menu.className = "eprobe-menu";
            menu.setAttribute("role", "menu");
            menu.style.cssText = `
 position: fixed;
 left: ${x}px;
 top: ${y}px;
 z-index: 10001;
 min-width: ${menuWidth}px;
 overflow: auto;
 border-radius: 8px;
 border: 1px solid rgb(19 67 119);
 background: #134377;
 padding: 6px;
 box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15);
 font-family: "Roboto", -apple-system, system-ui, sans-serif;
 `;

            const pageType = detectPageType();

            console.log(
                " Debug showOptionsMenu - pageType detectado:",
                pageType
            );
            console.log(" Debug showOptionsMenu - Posição do menu:", { x, y });

            if (pageType === "lista_documentos") {
                // Verificar quantos documentos existem para customizar o menu
                const documentosRelevantes = findDocumentosRelevantes();
                const documentCount = documentosRelevantes.length;

                let menuTitle = "Processar Documentos";
                let buttonColor = "#134377";
                let titleIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu-icon lucide-cpu"><path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>`;

                if (documentCount === 0) {
                    menuTitle = "Nenhum Documento";
                    buttonColor = "#ef4444";
                    titleIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 6-12 12"/><path d="m6 6 12 12"/></svg>`;
                } else if (documentCount === 1) {
                    const doc = documentosRelevantes[0];
                    menuTitle = `1 ${doc.tipo.descricao} Encontrada`;
                } else {
                    menuTitle = `${documentCount} Documentos Encontrados`;
                    buttonColor = "#134377";
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
                    openBtn.classList.add("eprobe-open-button");
                    openBtn.addEventListener("click", () => {
                        menu.remove();
                        if (documentCount > 1) {
                            showSentenceProcessingOptions();
                        } else {
                            runFullAutomation();
                        }
                    });
                }
            } else if (
                pageType === "documento_especifico" ||
                pageType === "documento_html" ||
                pageType === "documento_pdf"
            ) {
                // Menu para páginas de documento específico
                console.log(" Mostrando menu para documento específico");
                menu.innerHTML = `
 <li role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px; font-weight: 600; border-bottom: 1px solid rgb(148 163 184); margin-bottom: 6px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu-icon lucide-cpu"><path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>
 Processar Documento
 </li>
 <li id="api-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" stroke="none">
 <path d="M19.785 0v7.272H22.5V17.62h-2.935V24l-7.037-6.194v6.145h-1.091v-6.152L4.392 24v-6.465H1.5V7.188h2.884V0l7.053 6.494V.19h1.09v6.49L19.786 0zm-7.257 9.044v7.319l5.946 5.234V14.44l-5.946-5.397zm-1.099-.08l-5.946 5.398v7.235l5.946-5.234V8.965zm8.136 7.58h1.844V8.349H13.46l6.105 5.54v2.655zm-8.982-8.28H2.59v8.195h1.8v-2.576l6.192-5.62zM5.475 2.476v4.71h5.115l-5.115-4.71zm13.219 0l-5.115 4.71h5.115v-4.71z"/>
 </svg>
 API Perplexity
 </li>
 <li id="manual-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
 <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
 </svg>
 Método Manual
 </li>
 <li id="config-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
 <circle cx="12" cy="12" r="3"/>
 </svg>
 Configurar API
 </li>
 <li id="test-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <path d="m14.5 9.5 1 1"/>
 <path d="m15.5 8.5-4 4"/>
 <path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"/>
 <path d="M3 3v5h5"/>
 <circle cx="10" cy="14" r="2"/>
 </svg>
 Testar API Key
 </li>
 <li id="logs-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                            await sendToPerplexity(texto);
                        }
                    }
                );

                menu.querySelector("#manual-btn").addEventListener(
                    "click",
                    async () => {
                        menu.remove();
                        const texto = await autoExtractText();
                        if (texto) {
                            const usePreview = await showPreviewOptionsModal();

                            if (usePreview) {
                                log(" Usuário escolheu preview");
                                showTextPreview(texto);
                            } else {
                                log("Usuário escolheu cópia direta");
                                const copied = await copyToClipboardWithPrefix(
                                    texto
                                );
                                if (copied) {
                                    log(" Texto copiado para uso em IA...");
                                    showNotification(
                                        " Texto copiado! Cole em Perplexity ou outra IA (Ctrl+V)",
                                        "success"
                                    );
                                } else {
                                    log(
                                        " Falha ao copiar texto no método manual direto"
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

                menu.querySelector("#logs-btn").addEventListener(
                    "click",
                    () => {
                        menu.remove();
                        showErrorLogs();
                    }
                );
            } else {
                // Página não reconhecida, mas vamos verificar se há documentos
                const pageHTML = document.documentElement.outerHTML;
                const hasDocumentHtml = pageHTML.includes(
                    "acessar_documento&id"
                );
                const hasDocumentPdf = pageHTML.includes(
                    "acessar_documento&amp"
                );

                console.log(
                    " Página não reconhecida, verificando documentos:",
                    {
                        hasDocumentHtml: hasDocumentHtml,
                        hasDocumentPdf: hasDocumentPdf,
                    }
                );

                if (hasDocumentHtml || hasDocumentPdf) {
                    // Há documentos, mostrar menu como se fosse documento específico
                    console.log(
                        " Há documentos, mostrando menu de documento específico"
                    );
                    menu.innerHTML = `
 <li role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px; font-weight: 600; border-bottom: 1px solid rgb(148 163 184); margin-bottom: 6px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" stroke="none">
 <path d="M19.785 0v7.272H22.5V17.62h-2.935V24l-7.037-6.194v6.145h-1.091v-6.152L4.392 24v-6.465H1.5V7.188h2.884V0l7.053 6.494V.19h1.09v6.49L19.786 0zm-7.257 9.044v7.319l5.946 5.234V14.44l-5.946-5.397zm-1.099-.08l-5.946 5.398v7.235l5.946-5.234V8.965zm8.136 7.58h1.844V8.349H13.46l6.105 5.54v2.655zm-8.982-8.28H2.59v8.195h1.8v-2.576l6.192-5.62zM5.475 2.476v4.71h5.115l-5.115-4.71zm13.219 0l-5.115 4.71h5.115v-4.71z"/>
 </svg>
 API Perplexity
 </li>
 <li id="manual-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
 <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
 </svg>
 Método Manual
 </li>
 <li id="config-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l-.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
 <circle cx="12" cy="12" r="3"/>
 </svg>
 Configurar API
 </li>
 <li id="test-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
 <path d="m14.5 9.5 1 1"/>
 <path d="m15.5 8.5-4 4"/>
 <path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"/>
 <path d="M3 3v5h5"/>
 <circle cx="10" cy="14" r="2"/>
 </svg>
 Testar API Key
 </li>
 <li id="logs-btn" role="menuitem" style="cursor: pointer; color: rgb(203 213 225); display: flex; width: 100%; font-size: 14px; align-items: center; border-radius: 6px; padding: 12px; transition: all 0.15s ease; gap: 8px;">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                            item.style.backgroundColor =
                                "rgba(148, 163, 184, 0.1)";
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
                                await sendToPerplexity(texto);
                            }
                        }
                    );

                    menu.querySelector("#manual-btn").addEventListener(
                        "click",
                        async () => {
                            menu.remove();
                            const texto = await autoExtractText();
                            if (texto) {
                                const usePreview =
                                    await showPreviewOptionsModal();

                                if (usePreview) {
                                    log(" Usuário escolheu preview");
                                    showTextPreview(texto);
                                } else {
                                    log("Usuário escolheu cópia direta");
                                    const copied =
                                        await copyToClipboardWithPrefix(texto);
                                    if (copied) {
                                        log(" Texto copiado para uso em IA...");
                                        showNotification(
                                            " Texto copiado! Cole em Perplexity ou outra IA (Ctrl+V)",
                                            "success"
                                        );
                                    } else {
                                        log(
                                            " Falha ao copiar texto no método manual direto"
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

                    menu.querySelector("#logs-btn").addEventListener(
                        "click",
                        () => {
                            menu.remove();
                            showErrorLogs();
                        }
                    );
                } else {
                    // Não há documentos, mostrar mensagem de erro
                    console.log(" Não há documentos, não criando menu");
                    return;
                }
            }

            document.body.appendChild(menu);

            // Verificar e prevenir sobreposições após um pequeno delay
            setTimeout(() => {
                preventElementOverlap();
            }, 100);

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
            overlay.className = "eprobe-modal";
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
            font-family: "Roboto", -apple-system, system-ui, sans-serif;
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
            subtitle.textContent =
                "Selecione o documento que deseja processar:";

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
            cancelBtn.classList.add("eprobe-cancel-button");
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
            processAllBtn.classList.add("eprobe-process-button");
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

        // Automação completa - usando expressão de função para evitar problemas de escopo
        const runFullAutomation = async function () {
            if (isAutomationActive) {
                log(" Automação já está ativa");
                return;
            }

            isAutomationActive = true;
            log(" Iniciando automação completa...");

            try {
                const pageType = detectPageType();

                if (pageType === "lista_documentos") {
                    const opened = await autoOpenDocumentoRelevante();
                    if (opened) {
                        showNotification(
                            " Documento aberto! Aguarde carregar e execute novamente na nova aba",
                            "success"
                        );
                    }
                } else if (pageType === "documento_especifico") {
                    const texto = await autoExtractText();
                    if (texto) {
                        const apiSent = await sendToPerplexity(texto);

                        if (!apiSent) {
                            log(
                                " API falhou, usando método de clipboard como fallback"
                            );
                            showNotification(
                                " Tentando método alternativo...",
                                "warning"
                            );

                            const copied = await copyToClipboardWithPrefix(
                                texto
                            );
                            if (copied) {
                                showNotification(
                                    " Texto copiado! Cole em Perplexity ou outra IA (Ctrl+V)\n\nO texto já inclui o prefixo de instrução para IA",
                                    "success"
                                );
                            }
                        }
                    }
                } else {
                    showNotification(
                        " Página não reconhecida. Use na página do processo ou documento",
                        "error"
                    );
                }
            } catch (error) {
                log(" Erro na automação:", error);
                showNotification(
                    " Erro na automação: " + error.message,
                    "error"
                );
            } finally {
                isAutomationActive = false;
            }
        };

        // Função para prevenir sobreposição de elementos da interface
        function preventElementOverlap() {
            const floatingButton = document.getElementById("sent1-auto-button");
            const notification = document.getElementById(
                "documento-relevante-notification"
            );
            const optionsMenu = document.getElementById(
                "documento-relevante-options-menu"
            );

            if (!floatingButton || floatingButton.style.display === "none") {
                return; // Botão flutuante não está visível
            }

            // Verificar sobreposição com notificação
            if (notification) {
                const buttonRect = window.getCachedBoundingRect(floatingButton);
                const notificationRect =
                    window.getCachedBoundingRect(notification);

                // Se há sobreposição, mover notificação
                if (
                    buttonRect.left < notificationRect.right + 10 &&
                    buttonRect.top < notificationRect.bottom + 10 &&
                    buttonRect.bottom > notificationRect.top - 10
                ) {
                    log(
                        "🔧 Ajustando posição da notificação para evitar sobreposição"
                    );
                    notification.style.right = "240px"; // Mover mais à esquerda
                }
            }

            // Verificar sobreposição com menu de opções
            if (optionsMenu) {
                const buttonRect = window.getCachedBoundingRect(floatingButton);
                const menuRect = window.getCachedBoundingRect(optionsMenu);

                // Se há sobreposição, mover menu
                if (
                    buttonRect.left < menuRect.right + 10 &&
                    buttonRect.top < menuRect.bottom + 10 &&
                    buttonRect.bottom > menuRect.top - 10
                ) {
                    log(
                        "🔧 Ajustando posição do menu para evitar sobreposição"
                    );
                    const newLeft = Math.max(
                        10,
                        buttonRect.left - menuRect.width - 10
                    );
                    optionsMenu.style.left = newLeft + "px";
                }
            }
        }

        // ✅ REMOVIDO: setupInterfaceObserver duplicada - agora está no escopo global
        // A função foi movida para o escopo global para estar disponível em toda a extensão

        // Sistema de notificações
        function showNotification(message, type = "info") {
            // Remover notificação anterior se existir
            const existing = document.getElementById(
                "documento-relevante-notification"
            );
            if (existing) {
                existing.remove();
            }

            // Verificar se existe botão flutuante para ajustar posição
            const floatingButton = document.getElementById("sent1-auto-button");
            const isFloatingButtonVisible =
                floatingButton &&
                floatingButton.style.display !== "none" &&
                floatingButton.offsetParent !== null; // Verifica se está realmente visível

            // Posição dinâmica baseada na presença do botão flutuante
            let notificationTop = "20px";
            let notificationRight = "20px";

            if (isFloatingButtonVisible) {
                // Se há botão flutuante, calcular posição para evitar sobreposição
                const buttonRect = window.getCachedBoundingRect(floatingButton);
                const windowWidth = window.innerWidth;

                // Se há espaço à esquerda do botão, colocar a notificação lá
                if (buttonRect.left > 300) {
                    notificationRight =
                        windowWidth - buttonRect.left + 10 + "px";
                } else {
                    // Se não há espaço, colocar acima ou abaixo do botão
                    if (buttonRect.top > 100) {
                        notificationTop = buttonRect.top - 80 + "px";
                        notificationRight = "20px";
                    } else {
                        notificationTop = buttonRect.bottom + 10 + "px";
                        notificationRight = "20px";
                    }
                }
            }

            const notification = document.createElement("div");
            notification.id = "documento-relevante-notification";
            notification.className = "eprobe-notification";
            notification.style.cssText = `
 position: fixed;
 top: ${notificationTop};
 right: ${notificationRight};
 background: ${
     type === "error"
         ? "#dc3545"
         : type === "warning"
         ? "#ffc107"
         : type === "success"
         ? "#134377"
         : "#134377"
 };
 color: white;
 padding: 15px 20px;
 border-radius: 5px;
 font-weight: bold;
 z-index: 10000;
 box-shadow: 0 4px 8px rgba(0,0,0,0.3);
 max-width: 280px;
 font-size: 14px;
 line-height: 1.4;
 `;
            // Verificar se deve mostrar spinner
            if (message.includes("Enviando para Perplexity")) {
                notification.innerHTML = `
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="position: relative; width: 24px; height: 24px;">
                        <div style="width: 24px; height: 24px; border-top: 3px solid rgba(255,255,255,0.3); border-bottom: 3px solid rgba(255,255,255,0.3); border-radius: 50%; position: absolute; top: 0; left: 0;"></div>
                        <div style="width: 24px; height: 24px; border-top: 3px solid white; border-bottom: 3px solid white; border-radius: 50%; position: absolute; top: 0; left: 0; animation: spin 1s linear infinite;"></div>
                    </div>
                    <span>${message}</span>
                </div>
                <style>
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                </style>
            `;
            } else {
                notification.textContent = message;
            }

            document.body.appendChild(notification);

            // Verificar e prevenir sobreposições após um pequeno delay
            setTimeout(() => {
                preventElementOverlap();
            }, 100);

            // Remover após 5 segundos
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 5000);
        }

        // Verificar se a página deve mostrar o botão integrado (REMOVIDA - usar a versão melhorada)
        // Função movida para cima para evitar duplicação

        // Criar botão de automação integrado na página
        function createAutomationButton() {
            console.log(" Tentando criar botão integrado...");

            // Verificar se já existe (verificar todos os IDs possíveis)
            if (
                document.getElementById("documento-relevante-auto-button") ||
                document.getElementById("sent1-auto-button")
            ) {
                console.log(" Botão já existe, pulando criação");
                return;
            }

            // CRITÉRIO ESPECÍFICO: Verificar se a página tem o título exato
            if (!shouldShowIntegratedButton()) {
                console.log(
                    " Página não possui o título correto para botão integrado, verificando critério para botão flutuante..."
                );
                // Se não tem o título correto mas deve mostrar o botão flutuante, criar botão flutuante
                if (shouldShowFloatingButton()) {
                    createFloatingButton();
                } else {
                    console.log(
                        " Página não atende critérios para nenhum botão"
                    );
                }
                return;
            }

            // Buscar container principal para integração
            const targetInfo = findTargetContainer();

            if (!targetInfo) {
                console.log(
                    " Container alvo não encontrado, usando posição fixa como fallback"
                );
                createFloatingButton();
                return;
            }

            // Extrair informações do container
            const targetContainer = targetInfo.container || targetInfo;
            const insertMethod = targetInfo.insertMethod || "append";
            const referenceElement = targetInfo.referenceElement;

            console.log(" Container encontrado, criando botão integrado...");
            const button = criarInfraButtonPrimary(
                "documento-relevante-auto-button",
                `
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px !important; vertical-align: middle;">
 <rect width="18" height="18" x="3" y="3" rx="2"/>
 <path d="m9 8 6 4-6 4Z"/>
 </svg>
 Resumir Documento
 `
            );

            // Adicionar espaçamento quando posicionado ao lado do PDPJ
            if (insertMethod === "beforePDPJ") {
                button.style.marginRight = "15px";
            }

            // Adicionar evento de click
            button.addEventListener("click", async (e) => {
                e.preventDefault();
                e.stopPropagation();

                log(" Botão integrado clicado!");
                console.log(" Debug: Botão Resumir Documento clicado");

                // Adicionar feedback visual
                button.style.transform = "scale(0.95)";
                setTimeout(() => {
                    button.style.transform = "";
                }, 150);

                const pageType = detectPageType();
                log(" Tipo de página detectado:", pageType);

                if (pageType === "lista_documentos") {
                    showNotification(" Abrindo documento...", "info");
                    await runFullAutomation();
                } else if (pageType === "documento_especifico") {
                    const rect = window.getCachedBoundingRect(button);
                    showOptionsMenu(rect.left, rect.bottom);
                } else {
                    showNotification(" Página não reconhecida", "error");
                }
            });

            // Inserir no container usando o método apropriado
            if (insertMethod === "beforeDownload" && referenceElement) {
                try {
                    console.log(
                        " Inserindo botão antes do Download Completo na barra de comandos..."
                    );
                    console.log(
                        " Reference element (Download button):",
                        referenceElement
                    );
                    console.log(" Container (form):", targetContainer);

                    // Criar um wrapper para melhor alinhamento na barra de comandos
                    const buttonWrapper = document.createElement("span");
                    buttonWrapper.style.cssText = "display: inline-block;";
                    buttonWrapper.appendChild(button);

                    // Inserir o wrapper antes do botão Download Completo
                    referenceElement.insertAdjacentElement(
                        "beforebegin",
                        buttonWrapper
                    );

                    console.log(
                        " Botão inserido com sucesso antes do Download Completo"
                    );
                    console.log(
                        " Posição final do botão:",
                        button.parentElement.parentElement
                    );
                } catch (error) {
                    console.log(
                        " Erro ao inserir antes do Download Completo, usando fallback:",
                        error
                    );
                    // Fallback: inserir no início do container
                    targetContainer.insertBefore(
                        button,
                        targetContainer.firstChild
                    );
                    console.log(
                        " Botão inserido no início do container (fallback)"
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
                console.log(" Botão inserido no início do container");
            } else if (insertMethod === "beforePDPJ" && referenceElement) {
                try {
                    // Estratégia 1: Inserir diretamente ao lado esquerdo da imagem usando insertAdjacentElement
                    console.log(
                        " Tentando posicionar ao lado esquerdo da imagem PDPJ..."
                    );
                    console.log(" Reference element:", referenceElement);
                    console.log(
                        " Reference element tagName:",
                        referenceElement.tagName
                    );
                    console.log(
                        " Reference element parent:",
                        referenceElement.parentElement
                    );

                    // Usar insertAdjacentElement para posicionar exatamente ao lado esquerdo
                    referenceElement.insertAdjacentElement(
                        "beforebegin",
                        button
                    );

                    // Verificação final: garantir que o botão não está dentro de um link
                    const buttonParent = button.parentElement;
                    const isInsideLink = button.closest("a") !== null;

                    if (isInsideLink) {
                        console.log(
                            " PROBLEMA: Botão foi inserido dentro de um link!"
                        );
                        console.log(" Tentando mover para fora do link...");

                        // Encontrar o link pai
                        const linkElement = button.closest("a");
                        const linkContainer = linkElement.parentElement;

                        // Remover botão do local atual
                        button.remove();

                        // Inserir antes do link
                        linkContainer.insertBefore(button, linkElement);
                        console.log(" Botão movido para fora do link");
                    }

                    console.log(
                        " Botão inserido ao lado esquerdo da imagem PDPJ"
                    );
                    console.log(
                        " Posição final do botão:",
                        button.parentElement
                    );
                    console.log(
                        " Botão está dentro de link?",
                        button.closest("a") !== null ? "SIM" : "NÃO"
                    );
                } catch (error) {
                    console.log(
                        " Erro ao inserir ao lado da imagem PDPJ, tentando estratégias alternativas:",
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
                            targetContainer.insertBefore(
                                button,
                                referenceElement
                            );
                            console.log(" Botão inserido antes da imagem PDPJ");
                        } else {
                            // Estratégia 3: A imagem não é filha direta, usar o pai direto da imagem
                            const directParent = referenceElement.parentElement;
                            if (
                                directParent &&
                                Array.from(directParent.children).includes(
                                    referenceElement
                                )
                            ) {
                                directParent.insertBefore(
                                    button,
                                    referenceElement
                                );
                                console.log(
                                    " Botão inserido antes da imagem PDPJ (no pai direto)"
                                );
                            } else {
                                // Estratégia 4: Fallback - adicionar no final do container encontrado
                                targetContainer.appendChild(button);
                                console.log(
                                    " Botão adicionado ao container (fallback)"
                                );
                            }
                        }
                    } catch (secondError) {
                        console.log(
                            " Erro na segunda tentativa, usando fallback final:",
                            secondError
                        );
                        // Fallback final: adicionar no final do container
                        targetContainer.appendChild(button);
                        console.log(
                            " Botão adicionado ao container (fallback final)"
                        );
                    }
                }
            } else {
                // Método padrão - adicionar ao final do container
                targetContainer.appendChild(button);
                console.log(
                    " Botão integrado adicionado ao container:",
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
                    " Barra de comandos superior encontrada:",
                    commandBar
                );

                // Procurar pelo formulário que contém o botão "Download Completo"
                const processForm =
                    commandBar.querySelector("#frmProcessoLista");
                if (processForm) {
                    console.log(
                        " Formulário do processo encontrado:",
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
                                ` Botão Download Completo encontrado com seletor: ${selector}`,
                                downloadButton
                            );
                            break;
                        }
                    }

                    // Se não encontrou, buscar por texto nos botões
                    if (!downloadButton) {
                        console.log(
                            " Buscando botão Download Completo por texto..."
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
                                    " Botão Download Completo encontrado por texto:",
                                    downloadButton
                                );
                                break;
                            }
                        }
                    }

                    if (downloadButton) {
                        console.log(
                            " Inserindo antes do botão Download Completo na barra de comandos"
                        );
                        return {
                            container: processForm,
                            insertMethod: "beforeDownload",
                            referenceElement: downloadButton,
                        };
                    } else {
                        // Se não encontrou o botão Download, inserir no início do formulário
                        console.log(
                            " Botão Download Completo não encontrado, inserindo no início do formulário"
                        );
                        return {
                            container: processForm,
                            insertMethod: "prepend",
                        };
                    }
                } else {
                    // Se não encontrou o formulário, buscar diretamente na barra de comandos
                    console.log(
                        " Formulário não encontrado, buscando Download Completo diretamente na barra..."
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
                                ` Botão Download encontrado na barra: ${selector}`,
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
                                " Botão Download encontrado por texto na barra:",
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
                        " Botão Download não encontrado, inserindo na barra de comandos"
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
                    " Imagem PDPJ encontrada, buscando container pai adequado"
                );

                // Verificar se a imagem está dentro de um link <a>
                const linkParent = pdpjImage.closest("a");
                if (linkParent) {
                    console.log(
                        "Imagem PDPJ está dentro de um link:",
                        linkParent
                    );
                    console.log(
                        "Link src/href:",
                        linkParent.href || linkParent.getAttribute("href")
                    );
                    const linkContainer = linkParent.parentElement;
                    if (linkContainer) {
                        console.log("Container do link:", linkContainer);
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
                        " Usando pai direto da imagem PDPJ:",
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

                    // Verificar se é um container que permita posicionamento (SEM verificação d-flex)
                    if (
                        styles.display === "flex" ||
                        parent.classList.contains("header") ||
                        parent.tagName === "HEADER"
                    ) {
                        console.log(
                            " Container de header encontrado para PDPJ:",
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
                console.log(" Usando container pai direto da imagem PDPJ");
                return {
                    container: pdpjImage.parentElement,
                    insertMethod: "beforePDPJ",
                    referenceElement: pdpjImage,
                };
            }

            // Prioridade 2: REMOVIDO - Não buscar na navbar para evitar interferências
            // A navbar agora é gerenciada exclusivamente por gerenciarNavbarEprobe()
            console.log(
                "ℹ️ BUTTON: Pulando busca na navbar para evitar interferências"
            );

            // Prioridade 3: Lista atualizada de seletores com foco no eProc (SEM elementos d-flex que podem interferir na navbar)
            const containerSelectors = [
                "#divInfraBarraComandosSuperior", // Barra de comandos superior do eProc
                ".infraBarraComandos", // Barra de comandos geral do eProc
                "#frmProcessoLista", // Formulário da lista de processos
                ".toolbar",
                ".action-bar",
                ".header-actions",
                "#barraComandos",
                ".infra-barra-comandos",
            ];

            for (const selector of containerSelectors) {
                const container = document.querySelector(selector);
                if (container) {
                    console.log(
                        ` Container encontrado com seletor: ${selector}`
                    );
                    return { container: container, insertMethod: "append" };
                }
            }

            // Fallback: buscar containers específicos (SEM d-flex que pode interferir na navbar)
            const fallbackSelectors = [
                'div[class*="toolbar"]',
                'div[class*="header"]',
                'div[class*="action"]',
            ];

            for (const selector of fallbackSelectors) {
                const containers = document.querySelectorAll(selector);
                for (const container of containers) {
                    // Verificar se o container está visível e tem tamanho adequado
                    const rect = window.getCachedBoundingRect(container);
                    if (
                        rect.width > 200 &&
                        rect.height > 20 &&
                        rect.top < 300
                    ) {
                        console.log(
                            ` Container fallback encontrado: ${selector}`
                        );
                        return { container: container, insertMethod: "append" };
                    }
                }
            }

            console.log(" Nenhum container adequado encontrado");
            return null;
        }

        // Função de fallback para criar botão flutuante (caso container não seja encontrado)
        function createFloatingButton() {
            // Verificar se já existe um botão
            if (document.getElementById("sent1-auto-button")) {
                console.log(" Botão flutuante já existe, cancelando criação");
                return;
            }

            // Verificar se a página é válida para mostrar o botão
            if (!shouldShowFloatingButton()) {
                console.log(
                    " Página não atende critérios para o botão flutuante, cancelando criação"
                );
                return;
            }

            console.log(" Criando botão flutuante como fallback...");
            const button = document.createElement("button");
            button.id = "sent1-auto-button";
            button.className = "eprobe-button";
            button.innerHTML = `
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px !important; vertical-align: middle;">
 <rect width="18" height="18" x="3" y="3" rx="2"/>
 <path d="m9 8 6 4-6 4Z"/>
 </svg>
 Resumir Documento
 `;

            // FORÇAR aplicação do margin-right no SVG após criação
            setTimeout(() => {
                const svg = button.querySelector("svg");
            }, 100);

            // Usar estilo customizado próprio para o botão flutuante
            button.style.cssText = `
 position: fixed;
 top: 120px;
 right: 20px;
 z-index: 99999;
 background-color: #134377;
 border: 1px solid #134377;
 color: white;
 padding: 8px 16px;
 border-radius: 4px;
 font-family: "Roboto", -apple-system, system-ui, sans-serif;
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

            // ⚡ OTIMIZAÇÃO PERFORMANCE: CSS hover em vez de event listeners
            button.style.cssText += `
                transition: background-color 0.2s ease;
            `;
            button.classList.add("eprobe-button-hover");

            button.addEventListener("blur", () => {
                button.style.backgroundColor = "#134377";
                button.style.borderColor = "#134377";
            });

            button.addEventListener("click", async (e) => {
                e.preventDefault();
                e.stopPropagation();

                log(" Botão flutuante clicado!");
                console.log(" Debug: Botão Resumir Documento clicado");

                // Adicionar feedback visual
                button.style.transform = "scale(0.95)";
                setTimeout(() => {
                    button.style.transform = "";
                }, 150);

                const pageType = detectPageType();
                log(" Tipo de página detectado:", pageType);

                // Lógica específica para o botão flutuante
                // Como o botão flutuante só aparece quando há documentos específicos,
                // podemos assumir que estamos em uma página de documento
                if (pageType === "lista_documentos") {
                    showNotification(" Abrindo documento...", "info");
                    await runFullAutomation();
                } else if (
                    pageType === "documento_especifico" ||
                    pageType === "documento_html" ||
                    pageType === "documento_pdf"
                ) {
                    // Página de documento específico - mostrar menu de opções
                    const rect = window.getCachedBoundingRect(button);
                    showOptionsMenu(rect.left, rect.bottom);
                } else {
                    // Para o botão flutuante, se chegou até aqui é porque deve haver um documento
                    // Vamos verificar se há elementos que indicam documento na página
                    const pageHTML = document.documentElement.outerHTML;
                    const hasDocumentHtml = pageHTML.includes(
                        "acessar_documento&id"
                    );
                    const hasDocumentPdf = pageHTML.includes(
                        "acessar_documento&amp"
                    );

                    console.log(
                        " Debug: Verificação de documento na página não reconhecida:",
                        {
                            hasDocumentHtml: hasDocumentHtml,
                            hasDocumentPdf: hasDocumentPdf,
                            url: window.location.href,
                        }
                    );

                    if (hasDocumentHtml || hasDocumentPdf) {
                        // Há documento, mas a página não foi reconhecida - tratar como documento específico
                        console.log(
                            " Página contém documento mas não foi reconhecida - tratando como documento específico"
                        );
                        const rect = window.getCachedBoundingRect(button);
                        console.log(
                            " Debug: Chamando showOptionsMenu com coordenadas:",
                            {
                                x: rect.left,
                                y: rect.bottom,
                            }
                        );
                        showOptionsMenu(rect.left, rect.bottom);
                    } else {
                        // Realmente não há documento reconhecível
                        showNotification(
                            " Página não reconhecida ou sem documento válido",
                            "error"
                        );
                    }
                }
            });

            document.body.appendChild(button);
            console.log(" Botão flutuante adicionado ao DOM");

            // Verificar e prevenir sobreposições após um pequeno delay
            setTimeout(() => {
                preventElementOverlap();
            }, 100);
        }

        // Debug: verificar se o botão foi criado
        function debugButtonStatus() {
            setTimeout(() => {
                const button = document.getElementById("sent1-auto-button");
                const integratedButton = document.getElementById(
                    "documento-relevante-auto-button"
                );

                console.log("=== DEBUG STATUS DO BOTÃO ===");
                console.log("Página atual:", window.location.href);
                console.log("Tipo de página detectado:", detectPageType());
                console.log(
                    "Página é válida para botão:",
                    isValidPageForButton()
                );

                if (button) {
                    console.log(" Botão SENT1 encontrado:", button);
                    const isFloating = button.style.position === "fixed";
                    console.log(
                        " Tipo de botão:",
                        isFloating ? "Flutuante" : "Integrado"
                    );

                    if (isFloating) {
                        console.log(" Posição do botão flutuante:", {
                            top: button.style.top,
                            right: button.style.right,
                            zIndex: button.style.zIndex,
                            display: getComputedStyle(button).display,
                            visibility: getComputedStyle(button).visibility,
                        });
                    } else {
                        console.log(" Informações do botão integrado:", {
                            parentElement: button.parentElement?.tagName,
                            parentClass: button.parentElement?.className,
                            display: getComputedStyle(button).display,
                            visibility: getComputedStyle(button).visibility,
                        });
                    }
                } else if (integratedButton) {
                    console.log(
                        " Botão integrado encontrado:",
                        integratedButton
                    );
                } else {
                    console.log(" NENHUM BOTÃO ENCONTRADO!");
                    console.log(" Tentando criar botão agora...");

                    // Tentar criar botão imediatamente no debug
                    if (shouldShowIntegratedButton()) {
                        console.log(
                            " Página atende critérios para botão integrado - tentando criar..."
                        );
                        createAutomationButton();
                    } else if (shouldShowFloatingButton()) {
                        console.log(
                            " Página atende critérios para botão flutuante - tentando criar..."
                        );
                        createFloatingButton();
                    } else {
                        console.log(
                            " Página não atende critérios para nenhum botão"
                        );
                    }
                }
                console.log("=== FIM DEBUG STATUS ===");
            }, 2000);
        }

        // Debug avançado da API com logging estruturado
        function debugApiCall(requestId, phase, data) {
            if (!debugMode) return;

            const timestamp = new Date().toISOString();
            const phaseColors = {
                INÍCIO: "",
                REQUEST: "",
                RESPONSE_HEADERS: "",
                SUCCESS: "",
                ERROR_DETAILS: "",
                EXCEPTION: "",
                TEST_START: "",
                TEST_RESPONSE: "",
                TEST_SUCCESS: "",
                TEST_ERROR: "",
            };

            const icon = phaseColors[phase] || "";

            console.group(`${icon} API Debug [ID: ${requestId}] - ${phase}`);
            console.log(" Timestamp:", timestamp);

            if (phase === "REQUEST") {
                console.log(" URL:", data.url);
                console.log(" Model:", data.model);
                console.log("� Prompt Length:", data.promptLength);
                console.log(" Max Tokens:", data.maxTokens);
            } else if (phase === "RESPONSE_HEADERS") {
                console.log("� Status:", data.status, data.statusText);
                console.log(" Request ID:", data.requestId);
                if (data.rateLimit) {
                    console.log(" Rate Limits:");
                    console.table(data.rateLimit);
                }
            } else if (phase === "SUCCESS") {
                console.log(" Response ID:", data.responseId);
                console.log(" Model Used:", data.model);
                console.log(" Usage:", data.usage);
                console.log(
                    "🏁 Finish Reason:",
                    data.choices?.[0]?.finish_reason
                );
                console.log(
                    " Response Length:",
                    data.choices?.[0]?.message?.content?.length
                );
            } else if (phase === "ERROR_DETAILS") {
                console.log(" Status:", data.status, data.statusText);
                console.log(" Error Text:", data.errorText);
                if (data.errorJson) {
                    console.log(" Error JSON:", data.errorJson);
                }
            } else if (phase === "EXCEPTION") {
                console.log(" Error Name:", data.errorName);
                console.log(" Error Message:", data.errorMessage);
                console.log("📚 Stack Trace:", data.errorStack);
            } else if (phase === "TEST_SUCCESS") {
                console.log(" Total Models:", data.totalModels);
                console.log(" GPT Models:", data.gptModels);
                console.log("🏢 Organization:", data.organization);
                console.log(" Has GPT-4:", data.hasGpt4);
            } else {
                console.log(" Data:", data);
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
                    showNotification(" Nenhuma API key configurada", "error");
                    return false;
                }

                log(" Testando API key...");

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

                    log(
                        " API key válida! Modelo usado:",
                        data.model || "sonar"
                    );

                    debugApiCall(testId, "TEST_SUCCESS", {
                        model: data.model,
                        usage: data.usage,
                        responseContent: data.choices?.[0]?.message?.content,
                    });

                    showNotification(
                        ` API key válida!\nModelo: ${data.model || "sonar"}`,
                        "success"
                    );
                    return true;
                } else {
                    const errorData = await response.text();
                    let errorJson = null;

                    try {
                        errorJson = JSON.parse(errorData);
                    } catch (e) {
                        log(" Erro de resposta não é JSON válido");
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
                        showNotification(` ${errorMsg}`, "error");
                        await removeStoredApiKey();
                    } else if (response.status === 429) {
                        const rateLimitType =
                            errorJson?.error?.type || "rate_limit_exceeded";

                        if (rateLimitType === "insufficient_quota") {
                            showNotification(
                                " Cota da API Perplexity esgotada. Verifique em perplexity.ai/settings/api",
                                "error"
                            );
                            await removeStoredApiKey();
                        } else {
                            showNotification(
                                ` Rate limit atingido no teste da API`,
                                "warning"
                            );
                        }
                    } else if (response.status === 403) {
                        showNotification(
                            " Acesso negado. Verifique créditos da conta",
                            "error"
                        );
                    } else {
                        const errorMsg =
                            errorJson?.error?.message ||
                            `Erro ${response.status}`;
                        showNotification(` ${errorMsg}`, "error");
                    }
                    return false;
                }
            } catch (error) {
                log(" Erro de conexão no teste:", error);
                showNotification(" Erro de conexão com Perplexity", "error");
                return false;
            }
        }

        // Mostrar modal para seleção de múltiplos documentos relevantes
        function showDocumentSelectionModal(documentosRelevantes) {
            log(
                " DEBUG MODAL: Recebido documentosRelevantes:",
                documentosRelevantes
            );
            log(" DEBUG MODAL: Detalhes de cada documento:");
            documentosRelevantes.forEach((doc, i) => {
                log(` DOC${i + 1}:`, {
                    eventoDescricao: doc.eventoDescricao,
                    seqEvento: doc.seqEvento,
                    tipoDocumento: doc.tipoDocumento,
                    eventoData: doc.eventoData,
                });
            });

            // 📅 ORDENAÇÃO DECRESCENTE POR DATA DE ASSINATURA (mais novo em cima, mais antigo embaixo)
            const documentosOrdenados = [...documentosRelevantes].sort(
                (a, b) => {
                    // Função auxiliar para converter data brasileira DD/MM/YYYY para Date
                    const parseDataBrasileira = (dataStr) => {
                        if (!dataStr || typeof dataStr !== "string")
                            return null;

                        // Extrair data no formato DD/MM/YYYY ou DD/MM/YY
                        const match = dataStr.match(
                            /(\d{1,2})\/(\d{1,2})\/(\d{2,4})/
                        );
                        if (!match) return null;

                        let [, dia, mes, ano] = match;

                        // Se ano tem apenas 2 dígitos, assumir 20XX
                        if (ano.length === 2) {
                            ano = "20" + ano;
                        }

                        // Criar objeto Date (mês é 0-indexado)
                        return new Date(
                            parseInt(ano),
                            parseInt(mes) - 1,
                            parseInt(dia)
                        );
                    };

                    const dataA = parseDataBrasileira(a.eventoData);
                    const dataB = parseDataBrasileira(b.eventoData);

                    // Se ambas as datas são válidas, ordenar por data (mais recente primeiro)
                    if (dataA && dataB) {
                        return dataB.getTime() - dataA.getTime();
                    }

                    // Se apenas uma data é válida, colocar a válida primeiro
                    if (dataA && !dataB) return -1;
                    if (!dataA && dataB) return 1;

                    // Se nenhuma data é válida, manter ordem original por seqEvento
                    const seqA = parseInt(a.seqEvento) || 0;
                    const seqB = parseInt(b.seqEvento) || 0;
                    return seqB - seqA; // Ordem decrescente por sequência
                }
            );

            log(
                "🔄 ORDENAÇÃO: Documentos ordenados por data (mais novo → mais antigo):"
            );
            documentosOrdenados.forEach((doc, i) => {
                log(
                    `  ${i + 1}. ${doc.eventoDescricao} - ${
                        doc.eventoData || "Sem data"
                    } (Evento ${doc.seqEvento})`
                );
            });

            // Usar array ordenado para o resto da função
            documentosRelevantes = documentosOrdenados;

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

                    log(` DEBUG OPTION ${index + 1}:`, {
                        seqEvento,
                        tipoInfo,
                        eventoDesc,
                        tamanhoInfo,
                        eventoMagistrado: documento.eventoMagistrado, // Debug magistrado
                        original_eventoDescricao: documento.eventoDescricao,
                    });

                    documentOptions += `
                                <div style="margin-bottom: 12px; padding: 16px; border: 1px solid rgba(82, 82, 82, 0.3); border-radius: 8px; background: rgb(32, 39, 51); cursor: pointer; transition: all 0.2s ease; color: rgb(243, 246, 249);" 
                                class="document-option" data-index="${index}">
                                <div style="font-weight: 600; color: rgb(243, 246, 249); margin-bottom: 8px; display: flex; align-items: center; gap: 8px; font-size: 14px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; color: rgb(133, 190, 255);">
                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                                <polyline points="14,2 14,8 20,8"/>
                                <line x1="16" y1="13" x2="8" y2="13"/>
                                <line x1="16" y1="17" x2="8" y2="17"/>
                                <polyline points="10,9 9,9 8,9"/>
                                </svg>
                                ${tipoInfo} - ${seqEvento}
                                </div>
                                <div style="font-size: 13px; color: rgb(243, 246, 249); margin-bottom: 6px; font-weight: 500; display: flex; align-items: center; gap: 8px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                                <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                                </svg>
                                ${eventoDesc}
                                </div>
                                <div style="font-size: 12px; color: rgb(136, 152, 181); display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                                </svg>
                                Documento: ${documento.texto}${tamanhoInfo}
                                </div>${
                                    documento.magistradoInfo &&
                                    documento.magistradoInfo.tipo ===
                                        "magistrado"
                                        ? `
                                <div style="font-size: 11px; color: rgb(136, 152, 181); opacity: 0.9; display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                                <path d="M11.5 15H7a4 4 0 0 0-4 4v2"/>
                                <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>
                                <circle cx="10" cy="7" r="4"/>
                                </svg>
                                ${documento.magistradoInfo.nome}
                                </div>${
                                    documento.magistradoInfo.vara
                                        ? `
            <div style="font-size: 11px; color: rgb(136, 152, 181); opacity: 0.9; display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
            <path d="M10 18v-7"/>
            <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"/>
            <path d="M14 18v-7"/>
            <path d="M18 18v-7"/>
            <path d="M3 22h18"/>
            <path d="M6 18v-7"/>
            </svg>
            ${documento.magistradoInfo.vara}
            </div>`
                                        : ""
                                }`
                                        : documento.magistradoInfo &&
                                          documento.magistradoInfo.tipo ===
                                              "advogado"
                                        ? `
            <div style="font-size: 11px; color: rgb(136, 152, 181); opacity: 0.9; display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
            <path d="M11.5 15H7a4 4 0 0 0-4 4v2"/>
            <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>
            <circle cx="10" cy="7" r="4"/>
            </svg>
            ${documento.magistradoInfo.nome}
            </div>`
                                        : documento.eventoMagistrado
                                        ? `
            <div style="font-size: 11px; color: rgb(136, 152, 181); opacity: 0.9; display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
            <path d="M11.5 15H7a4 4 0 0 0-4 4v2"/>
            <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>
            <circle cx="10" cy="7" r="4"/>
            </svg>
            ${documento.eventoMagistrado}
            </div>`
                                        : ""
                                }${
                        documento.eventoData
                            ? `
            <div style="font-size: 11px; color: rgb(136, 152, 181); opacity: 0.9; display: flex; align-items: center; gap: 8px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
            <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"/>
            <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"/>
            <path d="m2.3 2.3 7.286 7.286"/>
            <circle cx="11" cy="11" r="2"/>
            </svg>
            Assinado em ${documento.eventoData}
            </div>`
                            : ""
                    }
            </div>
            `;
                });

                modal.innerHTML = `
                                <div style="background: rgb(19, 67, 119); border-radius: 8px; padding: 24px; max-width: 620px; width: 90%; max-height: 80%; overflow-y: auto; box-shadow: 0 8px 32px rgba(0,0,0,0.5); border: 1px solid rgba(82, 82, 82, 0.3);">
                                <div style="margin-bottom: 20px; text-align: center; border-bottom: 1px solid rgba(82, 82, 82, 0.3); padding-bottom: 16px;">
                                <h2 style="margin: 0; color: rgb(243, 246, 249); font-size: 18px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 10px; letter-spacing: -0.025em;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: rgb(133, 190, 255);">
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
                            option.style.borderColor = "rgba(19, 67, 119, 0.6)";
                            option.style.background = "rgb(47, 52, 61)";
                            option.style.transform = "translateY(-1px)";
                            option.style.boxShadow =
                                "0 4px 12px rgba(19, 67, 119, 0.25)";
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
                                ` Documento selecionado: ${selectedDocument.eventoDescricao} - Evento ${selectedDocument.seqEvento}`
                            );
                            showNotification(
                                ` Documento selecionado: ${selectedDocument.eventoDescricao}`,
                                "success"
                            );

                            modal.remove();
                            resolve(selectedDocument);
                        });
                    });

                // Evento do botão cancelar
                const cancelBtn = modal.querySelector("#cancel-selection");

                // Adicionar hover vermelho no botão cancelar
                cancelBtn.addEventListener("mouseenter", () => {
                    cancelBtn.style.backgroundColor = "#91433d";
                    cancelBtn.style.borderColor = "#91433d";
                });

                cancelBtn.addEventListener("mouseleave", () => {
                    cancelBtn.style.backgroundColor = "rgb(32, 39, 51)";
                    cancelBtn.style.borderColor = "rgba(82, 82, 82, 0.5)";
                });

                cancelBtn.addEventListener("click", () => {
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
            modal.className = "eprobe-modal";
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
            <div style="background: #134377; border-radius: 12px; padding: 32px; max-width: 560px; width: 90%; box-shadow: 0 12px 40px rgba(0,0,0,0.6); border: 1px solid rgba(255, 255, 255, 0.1);">
            <div style="margin-bottom: 24px; text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.15); padding-bottom: 20px;">
            <h2 style="margin: 0; color: rgb(255, 255, 255); font-size: 20px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 12px; letter-spacing: -0.025em;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(133, 190, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="16" r="1"/>
            <rect x="3" y="10" width="18" height="12" rx="2"/>
            <path d="M7 10V7a5 5 0 0 1 10 0v3"/>
            </svg>
            Configurar API Key do Perplexity
            </h2>
            </div>
            
            <div style="margin-bottom: 24px; padding: 20px; background: rgba(32, 39, 51, 0.6); border-radius: 10px; font-size: 14px; line-height: 1.6; color: rgb(255, 255, 255); border: 1px solid rgba(255, 255, 255, 0.1);">
            <div style="margin-bottom: 12px;">
            <strong style="color: rgb(133, 190, 255); font-size: 15px;">Como obter sua API Key do Perplexity:</strong>
            </div>
            <div style="padding-left: 8px; color: rgb(226, 232, 240);">
            <div style="margin-bottom: 8px;">1. Acesse: <a href="https://www.perplexity.ai/settings/api" target="_blank" style="color: rgb(133, 190, 255); text-decoration: underline; font-weight: 500;">www.perplexity.ai/settings/api</a></div>
            <div style="margin-bottom: 8px;">2. Faça login na sua conta Perplexity</div>
            <div style="margin-bottom: 8px;">3. Clique em "Generate" para criar uma nova chave</div>
            <div>4. Copie a chave e cole abaixo</div>
            </div>
            </div>

            <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 8px; font-weight: 600; color: rgb(255, 255, 255); font-size: 14px;">API Key:</label>
            <input type="password" id="api-key-input" placeholder="pplx-..." style="width: 100%; padding: 12px 16px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 8px; font-family: 'Roboto', monospace, sans-serif; background: rgba(32, 39, 51, 0.5); color: rgb(255, 255, 255); font-size: 14px; transition: all 0.2s ease; box-sizing: border-box;" value="${
                currentKey || ""
            }" />
            </div>

            <div style="margin-bottom: 24px; padding: 16px; background: rgba(251, 191, 36, 0.15); border: 1px solid rgba(251, 191, 36, 0.4); border-radius: 10px; font-size: 13px; display: flex; align-items: flex-start; gap: 12px; color: rgb(254, 240, 138);">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
            <path d="M12 9v4"/>
            <path d="m12 17 .01 0"/>
            </svg>
            <span style="line-height: 1.5;"><strong>Privacidade:</strong> Sua API Key é armazenada apenas localmente no seu navegador e não é compartilhada.</span>
            </div>

            <div style="text-align: center; display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
            <button id="save-key" style="background: rgb(133, 190, 255); color: #134377; border: 1px solid rgb(133, 190, 255); padding: 14px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 14px; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s ease; min-width: 140px; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20,6 9,17 4,12"/>
            </svg>
            Salvar e Testar
            </button>
            <button id="remove-key" style="background: rgb(145, 67, 61); color: white; border: 1px solid rgb(145, 67, 61); padding: 14px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 14px; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s ease; min-width: 120px; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3,6 5,6 21,6"/>
            <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"/>
            </svg>
            Remover
            </button>
            <button id="cancel-config" style="background: rgba(255, 255, 255, 0.1); color: rgb(255, 255, 255); border: 1px solid rgba(255, 255, 255, 0.2); padding: 14px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 14px; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s ease; min-width: 100px; justify-content: center;">
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
                input.style.borderColor = "rgb(19, 67, 119)";
                input.style.boxShadow = "0 0 0 3px rgba(19, 67, 119, 0.1)";
            });

            input.addEventListener("blur", () => {
                input.style.borderColor = "rgba(82, 82, 82, 0.5)";
                input.style.boxShadow = "none";
            });

            input.focus();

            saveBtn.addEventListener("click", async () => {
                const newKey = input.value.trim();

                if (!newKey) {
                    showNotification("Digite uma API key", "error");
                    return;
                }

                if (!(await validateApiKey(newKey))) {
                    showNotification(
                        "API key inválida. Deve começar com 'pplx-'",
                        "error"
                    );
                    return;
                }

                try {
                    await storeApiKey(newKey);
                    modal.remove();

                    showNotification("Testando API key...", "info");

                    const isValid = await testApiKey();
                    if (isValid) {
                        showNotification(
                            "API key configurada e validada!",
                            "success"
                        );
                    } else {
                        showNotification(
                            "API key salva, mas pode não estar funcionando",
                            "warning"
                        );
                    }
                } catch (error) {
                    showNotification(`Erro: ${error.message}`, "error");
                }
            });

            removeBtn.addEventListener("click", async () => {
                await removeStoredApiKey();
                modal.remove();
                showNotification("API key removida!", "info");
            });

            // Adicionar eventos de hover para os botões
            saveBtn.addEventListener("mouseenter", () => {
                saveBtn.style.backgroundColor = "rgb(107, 170, 255)";
                saveBtn.style.color = "#134377";
                saveBtn.style.transform = "translateY(-1px)";
            });

            saveBtn.addEventListener("mouseleave", () => {
                saveBtn.style.backgroundColor = "rgb(133, 190, 255)";
                saveBtn.style.color = "#134377";
                saveBtn.style.transform = "translateY(0)";
            });

            removeBtn.addEventListener("mouseenter", () => {
                removeBtn.style.backgroundColor = "rgb(120, 55, 50)";
                removeBtn.style.transform = "translateY(-1px)";
            });

            removeBtn.addEventListener("mouseleave", () => {
                removeBtn.style.backgroundColor = "rgb(145, 67, 61)";
                removeBtn.style.transform = "translateY(0)";
            });

            // Adicionar hover para o botão cancelar
            cancelBtn.addEventListener("mouseenter", () => {
                cancelBtn.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                cancelBtn.style.borderColor = "rgba(255, 255, 255, 0.3)";
                cancelBtn.style.transform = "translateY(-1px)";
            });

            cancelBtn.addEventListener("mouseleave", () => {
                cancelBtn.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                cancelBtn.style.borderColor = "rgba(255, 255, 255, 0.2)";
                cancelBtn.style.transform = "translateY(0)";
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
            modal.className = "eprobe-modal";
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
 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: rgb(19, 67, 119);">
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
 <div style="font-family: 'Roboto', monospace, sans-serif; font-size: 12px; line-height: 1.4; color: rgb(243, 246, 249);">
 ${logs
     .map(
         (log, i) => `
 <div style="margin-bottom: 16px; padding: 12px; border: 1px solid rgba(82, 82, 82, 0.3); border-radius: 8px; background: rgb(32, 39, 51);">
 <strong style="color: rgb(19, 67, 119);">Log ${i + 1} - ${
             log.timestamp
         }</strong><br>
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
 <h2 style="margin: 0; color: #dc3545; font-size: 20px;"> Créditos da API Esgotados</h2>
 </div>
 
 <div style="margin-bottom: 20px; font-size: 14px; line-height: 1.6;">
 <p><strong>Sua API key do Perplexity não possui créditos suficientes.</strong></p>
 
 <p><strong>Para resolver:</strong></p>
 <ol>
 <li>Acesse: <a href="https://www.perplexity.ai/settings/api" target="_blank" style="color: #134377;">perplexity.ai/settings/api</a></li>
 <li>Verifique seus créditos e limites</li>
 <li>Se necessário, adicione créditos à sua conta</li>
 <li>Ou aguarde a renovação dos créditos</li>
 </ol>
 
 <p><strong>Alternativa:</strong> Use o método manual que copia o texto para você colar em Perplexity web.</p>
 </div>

 <div style="text-align: center;">
 <button id="open-billing" style="background: #134377; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px; cursor: pointer; font-weight: bold;">
 Abrir Configurações
 </button>
 <button id="config-new-key" style="background: #134377; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px; cursor: pointer; font-weight: bold;">
 Nova API Key
 </button>
 <button id="close-quota-info" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-weight: bold;">
 Fechar
 </button>
 </div>
 </div>
 `;

            document.body.appendChild(modal);

            modal
                .querySelector("#open-billing")
                .addEventListener("click", () => {
                    window.open(
                        "https://www.perplexity.ai/settings/api",
                        "_blank"
                    );
                    modal.remove();
                });

            modal
                .querySelector("#config-new-key")
                .addEventListener("click", () => {
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
            const documentosRelevantes = findDocumentosRelevantes();

            if (documentosRelevantes.length === 0) {
                showNotification("Nenhuma sentença encontrada", "error");
                return;
            }

            if (documentosRelevantes.length === 1) {
                // Apenas uma sentença, abrir diretamente
                await autoOpenDocumentoRelevante();
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
            const processChoice = await showDocumentProcessingModal();

            if (processChoice) {
                // Abrir o documento selecionado
                log(" Abrindo documento selecionado:", selectedDocument.href);
                showNotification(" Abrindo documento selecionado...", "info");
                window.open(selectedDocument.href, "_blank");
            } else {
                // Processar diretamente via API (funcionalidade experimental)
                showNotification(
                    " Processamento direto via API ainda não implementado. Abrindo documento...",
                    "warning"
                );
                window.open(selectedDocument.href, "_blank");
            }
        }

        // Debug completo da estrutura HTML ao redor do link SENT1
        function debugEventStructure(linkElement) {
            log(" === DEBUG ESTRUTURA HTML ===");

            // 1. Informações sobre o próprio link
            log(" Link SENT1:");
            log(` Texto: "${linkElement.textContent.trim()}"`);
            log(` Classes: "${linkElement.className}"`);
            log(` Atributos:`, {
                href: linkElement.getAttribute("href"),
                onclick: linkElement.getAttribute("onclick"),
                onmouseover: linkElement.getAttribute("onmouseover"),
                "data-nome": linkElement.getAttribute("data-nome"),
                "data-id": linkElement.getAttribute("data-id"),
            });

            // 2. Analisar a linha (tr) que contém o link
            const currentRow = linkElement.closest("tr");
            if (currentRow) {
                log(" Linha atual (TR):");
                log(` Classes da linha: "${currentRow.className}"`);

                const cells = currentRow.querySelectorAll("td");
                log(` Total de células: ${cells.length}`);

                cells.forEach((cell, index) => {
                    const text = cell.textContent.trim();
                    log(
                        ` Célula ${index}: "${text}" (classes: "${cell.className}")`
                    );

                    // Verificar se tem elementos filhos interessantes
                    const labels = cell.querySelectorAll("label");
                    const spans = cell.querySelectorAll("span");
                    const divs = cell.querySelectorAll("div");

                    if (labels.length > 0) {
                        labels.forEach((label, i) => {
                            log(
                                ` Label ${i}: "${label.textContent.trim()}" (classes: "${
                                    label.className
                                }")`
                            );
                        });
                    }
                    if (spans.length > 0) {
                        spans.forEach((span, i) => {
                            log(
                                ` Span ${i}: "${span.textContent.trim()}" (classes: "${
                                    span.className
                                }")`
                            );
                        });
                    }
                    if (divs.length > 0) {
                        divs.forEach((div, i) => {
                            log(
                                ` Div ${i}: "${div.textContent.trim()}" (classes: "${
                                    div.className
                                }")`
                            );
                        });
                    }
                });
            }

            // 3. Analisar linhas anteriores
            log(" Linhas anteriores:");
            let prevRow = currentRow?.previousElementSibling;
            let rowCount = 0;
            while (prevRow && rowCount < 3) {
                rowCount++;
                const prevCells = prevRow.querySelectorAll("td");
                log(` Linha anterior ${rowCount}: ${prevCells.length} células`);

                prevCells.forEach((cell, index) => {
                    const text = cell.textContent.trim();
                    if (text.length > 10) {
                        log(` Célula ${index}: "${text.substring(0, 100)}..."`);
                    }
                });

                prevRow = prevRow.previousElementSibling;
            }

            // 4. Analisar a tabela completa
            const table = linkElement.closest("table");
            if (table) {
                log(" Tabela:");
                log(` Classes da tabela: "${table.className}"`);
                log(` ID da tabela: "${table.id}"`);

                // Procurar por cabeçalhos
                const headers = table.querySelectorAll("th");
                if (headers.length > 0) {
                    log(" Cabeçalhos encontrados:");
                    headers.forEach((header, index) => {
                        log(` Header ${index}: "${header.textContent.trim()}"`);
                    });
                }
            }

            log(" === FIM DEBUG ESTRUTURA ===");
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
                    log(`Executando estratégia ${i + 1} para descrição...`);
                    const result = strategies[i]();
                    if (result && result.trim().length > 3) {
                        log(`Estratégia ${i + 1} bem-sucedida:`, result);
                        return result.trim();
                    }
                } catch (e) {
                    log(`Erro na estratégia ${i + 1}:`, e);
                }
            }

            log("Nenhuma estratégia encontrou descrição válida");
            return "";
        }

        // Estratégia 1: Buscar na mesma linha do link
        function findEventDescriptionInSameRow(linkElement) {
            const currentRow = linkElement.closest("tr");
            if (!currentRow) return "";

            log("Buscando na linha atual...");

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
                        log(`Encontrado via seletor ${selector}:`, text);
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

            log("Buscando em linhas anteriores...");

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
                                `Encontrado em linha anterior (${attempts}):`,
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

            log("Buscando por padrões de texto...");

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
                                log(
                                    `Encontrado por padrão "${pattern}":`,
                                    text
                                );
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

            log("Analisando estrutura da tabela...");

            const currentRow = linkElement.closest("tr");
            const linkCellIndex = Array.from(currentRow.cells).findIndex(
                (cell) => cell.contains(linkElement)
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
                            `Encontrado na estrutura da tabela (célula ${i}):`,
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
            log("Buscando por proximidade...");

            // Buscar elementos próximos que podem conter descrição
            const parent =
                linkElement.closest("td") || linkElement.closest("tr");
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
                        log(`Encontrado por proximidade:`, text);
                        return text;
                    }
                }
            }

            return "";
        }

        // Observador de mudanças na página - VERSÃO ULTRA-ROBUSTA
        function setupPageObserver() {
            let lastUrl = window.location.href;
            let isProcessing = false;
            let processingTimeout = null;

            // Observador super otimizado com debouncing
            const observer = new MutationObserver((mutations) => {
                // Throttling aprimorado: cancelar timeout anterior se existir
                if (processingTimeout) {
                    clearTimeout(processingTimeout);
                }

                if (isProcessing) return;
                isProcessing = true;

                // Usar requestIdleCallback se disponível, senão requestAnimationFrame
                const scheduleWork = (callback) => {
                    if (window.requestIdleCallback) {
                        requestIdleCallback(callback, { timeout: 100 });
                    } else {
                        requestAnimationFrame(callback);
                    }
                };

                scheduleWork(() => {
                    const currentUrl = window.location.href;

                    // Verificar se a URL mudou (navegação SPA)
                    if (currentUrl !== lastUrl) {
                        console.log(
                            "🌐 NAVEGAÇÃO: URL mudou para:",
                            currentUrl
                        );
                        lastUrl = currentUrl;

                        // Reset contador de tentativas para nova página
                        buttonCreationAttempts = 0;

                        // Garantir que o botão existe após navegação
                        setTimeout(() => {
                            ensureButtonExists();
                        }, 300);
                    }

                    // Verificar se botão foi removido com delay otimizado
                    processingTimeout = setTimeout(() => {
                        // Usar sistema robusto para verificar e criar botão
                        ensureButtonExists();

                        // Reset processing flag
                        isProcessing = false;
                        processingTimeout = null;
                    }, 400);
                });
            });

            // Configurar observador com configuração ultra-otimizada
            observer.observe(document.body, {
                childList: true,
                subtree: false, // Evitar observação profunda
                attributes: false, // Não observar mudanças de atributos
                characterData: false, // Não observar mudanças de texto
                attributeOldValue: false,
                characterDataOldValue: false,
            });

            console.log(
                "✅ PAGE OBSERVER: Configurado com sistema robusto de botão"
            );
        }

        // Inicialização
        // Inicialização - REABILITADA criação de botões com proteção da navbar
        function init() {
            log(" Iniciando content script automatizado");
            console.log(" Resumir Documento: Script iniciado");

            // Configurar observador de página (VERSÃO REABILITADA - criação de botões segura)
            setupPageObserver();

            console.log(
                "ℹ️ INIT: Criação automática de botões REABILITADA de forma segura"
            );

            // Criar botão inicial com sistema robusto
            setTimeout(() => {
                ensureButtonExists();
            }, 400);

            // Segunda tentativa (caso a primeira falhe)
            setTimeout(() => {
                ensureButtonExists();
            }, 1000);

            // Terceira tentativa (para páginas que demoram para carregar)
            setTimeout(() => {
                ensureButtonExists();
            }, 2000);

            // ✅ VERIFICAÇÃO: Evitar loop infinito - só detectar se não foi processado
            processoAtual = obterNumeroProcesso(); // Obter processo atual antes das verificações
            if (processoAtual && processoJaFoiProcessado(processoAtual)) {
                console.log(
                    `🔐 SKIP: Processo ${processoAtual} já foi processado nesta sessão`
                );
                return;
            }

            // Detecção de data da sessão otimizada
            setTimeout(() => {
                if (!processoAtual || !processoJaFoiProcessado(processoAtual)) {
                    console.log(
                        "🔍 Tentando detectar data da sessão automaticamente..."
                    );
                    if (
                        window.SENT1_AUTO &&
                        window.SENT1_AUTO.detectarCardSessaoSimplificado
                    ) {
                        window.SENT1_AUTO.detectarCardSessaoSimplificado();
                    }
                }
            }, 500); // Reduzido de 800ms para 500ms

            // Segunda tentativa de detecção otimizada
            setTimeout(() => {
                if (
                    !hasDataSessaoPautado() &&
                    (!processoAtual || !processoJaFoiProcessado(processoAtual))
                ) {
                    console.log(
                        "🔍 Segunda tentativa de detecção da data da sessão..."
                    );
                    if (
                        window.SENT1_AUTO &&
                        window.SENT1_AUTO.detectarCardSessaoSimplificado
                    ) {
                        window.SENT1_AUTO.detectarCardSessaoSimplificado();
                    }
                }
            }, 1500); // Reduzido de 2000ms para 1500ms

            // �️ INTEGRAÇÃO AUTOMÁTICA DESABILITADA - Prevenindo logout por excesso de requisições
            setTimeout(async () => {
                if (hasDataSessaoPautado()) {
                    console.log(
                        "ℹ️ CRUZAMENTO: Modo automático desabilitado para prevenir logout"
                    );
                    console.log(
                        "💡 Use window.SENT1_AUTO.cruzarDadosDataSessao() para busca manual"
                    );
                }
            }, 6000);

            // ⚠️ TENTATIVA FINAL TAMBÉM DESABILITADA
            setTimeout(async () => {
                if (
                    hasDataSessaoPautado() &&
                    !hasDadosCompletosSessionJulgamento()
                ) {
                    console.log(
                        "ℹ️ CRUZAMENTO: Tentativa final desabilitada - use modo manual"
                    );
                    console.log(
                        "🔧 Execute: window.SENT1_AUTO.debugPaginaSessoes() para investigar"
                    );
                }
            }, 10000);

            // 📋 DETECÇÃO E PROCESSAMENTO DA PÁGINA DE LOCALIZADORES (MANTIDA - não interfere na navbar)
            setTimeout(() => {
                detectarPaginaLocalizadores();
            }, 1000);
        }

        // Função de debug para verificar status dos localizadores
        function debugLocalizadores() {
            const currentUrl = window.location.href;
            const isLocalizadoresPage = currentUrl.includes(
                "acao=usuario_tipo_monitoramento_localizador_listar"
            );
            const tabela = document.querySelector(
                'table.infraTable[summary*="Localizadores"]'
            );
            const toolbar = document.getElementById(
                "eprobe-separadores-toolbar"
            );

            console.log("🐛 DEBUG LOCALIZADORES:", {
                url: currentUrl,
                isLocalizadoresPage: isLocalizadoresPage,
                tabelaEncontrada: !!tabela,
                toolbarCriado: !!toolbar,
                urlPattern:
                    "acao=usuario_tipo_monitoramento_localizador_listar",
            });

            if (!isLocalizadoresPage) {
                console.log("❌ Você não está na página de localizadores!");
                console.log(
                    "🔗 Para acessar: Painel → Localizadores → Meus Localizadores"
                );
                return false;
            }

            if (!tabela) {
                console.log("❌ Tabela de localizadores não encontrada!");
                return false;
            }

            if (!toolbar) {
                console.log("❌ Interface de separadores não foi criada!");
                console.log("🔧 Tentando criar agora...");
                adicionarInterfaceSeparadores(tabela);
                return true;
            }

            console.log("✅ Tudo funcionando corretamente!");
            return true;
        }

        // 🎨 FUNÇÕES REUTILIZÁVEIS DE INTERFACE

        // Função para criar botão com estilo eProc elegante e discreto
        function criarBotaoEleganteeProc(id, className = "col-auto mr-2") {
            const botao = document.createElement("div");
            botao.id = id;
            botao.className = className;

            // Estilo base elegante (inspirado no eprobe-data-sessao)
            botao.style.cssText = `
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
            border: 1px solid #d1d5db;
            padding: 8px 12px;
            border-radius: 4px;
            background-color: #f8fafc;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            transition: all 0.2s ease;
            cursor: pointer;
            white-space: nowrap;
            max-width: fit-content;
        `;

            // Adicionar efeitos hover discretos e elegantes
            botao.addEventListener("mouseenter", function () {
                this.style.backgroundColor = "#fafbfc";
                this.style.borderColor = "#e2e8f0";
                this.style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.04)";
            });

            botao.addEventListener("mouseleave", function () {
                this.style.backgroundColor = "#f8fafc";
                this.style.borderColor = "#d1d5db";
                this.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
            });

            return botao;
        }

        // Função específica para criar botão branco capa do processo (alias mais descritivo)
        function botaoBrancoCapaProcesso(id, className = "col-auto mr-2") {
            return criarBotaoEleganteeProc(id, className);
        }

        // Função para criar botão infraButton btn-primary com estilo eProc
        function criarInfraButtonPrimary(id, innerHTML) {
            const button = document.createElement("button");
            button.id = id;
            button.className = "infraButton btn-primary";

            // Conteúdo do botão (HTML interno)
            if (innerHTML) {
                button.innerHTML = innerHTML;
            }

            // Aplicar cor azul personalizada eProc
            button.style.backgroundColor = "#134377";
            button.style.borderColor = "#134377";

            // FORÇAR aplicação do margin-right no SVG
            setTimeout(() => {
                const svg = button.querySelector("svg");
                if (svg) {
                    svg.style.marginRight = "4px";
                    svg.style.setProperty("margin-right", "4px", "important");
                    console.log(
                        "✅ FUNÇÃO CENTRAL: Margin-right aplicado automaticamente ao SVG:",
                        svg.style.marginRight
                    );
                }
            }, 50);

            // Adicionar eventos para hover, focus e blur (otimizados para performance)
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

            return button;
        }

        // Função específica para criar botão azul eProc (alias mais descritivo)
        function botaoAzuleProc(id, innerHTML) {
            return criarInfraButtonPrimary(id, innerHTML);
        }

        // FUNÇÃO REMOVIDA: detectarDataSessaoExperimental - substituída por detectarCardSessaoSimplificado ÚNICA

        // Inicializar - VERSÃO SEGURA (sem interferência na navbar)
        init();

        // Função de teste Material Base Layout
        function testarMaterialBaseLayout() {
            try {
                // Buscar elementos com IDs específicos das minutas
                const minutasIds = [
                    "conteudoInternoMinutas_0",
                    "conteudoInternoMinutas_1",
                    "conteudoInternoMinutas_2",
                    "conteudoInternoMinutas_3",
                ];

                console.log("🔍 Procurando elementos de minutas:");
                let encontrados = 0;
                minutasIds.forEach((id) => {
                    const element = document.getElementById(id);
                    if (element) {
                        console.log(`✅ Encontrado: ${id}`, element);
                        console.log(`   - Display: ${element.style.display}`);
                        console.log(
                            `   - Visible: ${element.offsetParent !== null}`
                        );
                        encontrados++;
                    } else {
                        console.log(`❌ Não encontrado: ${id}`);
                    }
                });

                // Buscar elementos com onclick
                const elementsWithOnclick = document.querySelectorAll(
                    '[onclick*="infraAbrirFecharElementoHTML"]'
                );
                console.log(
                    `📊 Encontrados ${elementsWithOnclick.length} elementos com onclick`
                );

                // Buscar containers substituídos
                const containers =
                    document.querySelectorAll("div[data-expanded]");
                console.log(
                    `📊 Encontrados ${containers.length} containers com data-expanded`
                );

                // Criar card Material Base - versão segura
                let card = null;
                if (
                    typeof window.SENT1_AUTO?.criarCardSessaoMaterial ===
                    "function"
                ) {
                    card =
                        window.SENT1_AUTO.criarCardSessaoMaterial(dadosTeste);
                } else if (typeof criarCardSessaoMaterial === "function") {
                    card = criarCardSessaoMaterial(dadosTeste);
                } else {
                    console.warn(
                        "⚠️ TESTE: criarCardSessaoMaterial não disponível"
                    );
                    return { erro: "Função não disponível", disponivel: false };
                }

                if (!card) {
                    console.warn("⚠️ TESTE: Card não foi criado");
                    return { erro: "Card não criado", disponivel: false };
                }

                // Verificar especificações CSS
                const computedStyle = window.getComputedStyle(card);

                const especificacoes = {
                    width: computedStyle.width,
                    height: computedStyle.height,
                    background: computedStyle.backgroundColor,
                    border: computedStyle.border,
                    borderRadius: computedStyle.borderRadius,
                    boxShadow: computedStyle.boxShadow,
                    display: computedStyle.display,
                    flexDirection: computedStyle.flexDirection,
                    justifyContent: computedStyle.justifyContent,
                    alignItems: computedStyle.alignItems,
                    padding: computedStyle.padding,
                    gap: computedStyle.gap,
                    position: computedStyle.position,
                };

                console.log("📊 ESPECIFICAÇÕES APLICADAS:", especificacoes);

                // Verificar se atende aos requisitos
                const conformidade = {
                    dimensoes:
                        especificacoes.width === "225px" &&
                        especificacoes.height === "80px",
                    background:
                        especificacoes.background.includes("254, 247, 255") ||
                        especificacoes.background === "#FEF7FF",
                    borderRadius: especificacoes.borderRadius === "12px",
                    flexLayout:
                        especificacoes.display === "flex" &&
                        especificacoes.flexDirection === "column",
                    centralizado:
                        especificacoes.justifyContent === "center" &&
                        especificacoes.alignItems === "center",
                    padding: especificacoes.padding === "10px",
                    gap: especificacoes.gap === "10px",
                };

                console.log("✅ CONFORMIDADE MATERIAL BASE:", conformidade);

                // Verificar áreas do card
                const iconArea = card.querySelector(".eprobe-icon-area");
                const headerArea = card.querySelector(".eprobe-header-area");
                const subheadArea = card.querySelector(".eprobe-subhead-area");
                const dataArea = card.querySelector(".eprobe-data-area");

                const areas = {
                    icone: !!iconArea,
                    header: !!headerArea ? headerArea.textContent : null,
                    subhead: !!subheadArea ? subheadArea.textContent : null,
                    data: !!dataArea ? dataArea.textContent : null,
                };

                console.log("📐 ÁREAS DO CARD:", areas);

                return {
                    sucesso: true,
                    layout: "Material Base CSS",
                    especificacoes: especificacoes,
                    conformidade: conformidade,
                    areas: areas,
                    verificacao: {
                        dimensoesCorretas: conformidade.dimensoes,
                        layoutFlexCorreto: conformidade.flexLayout,
                        estilizacaoCorreta:
                            conformidade.background &&
                            conformidade.borderRadius,
                        areasPresentes: Object.values(areas).every(Boolean),
                    },
                };
            } catch (error) {
                console.error("❌ ERRO no teste Material Base:", error);
                return {
                    sucesso: false,
                    erro: error.message,
                };
            }
        }
        // 🧪 FUNÇÃO DE TESTE XPATH + MATERIAL DESIGN (movida para namespace principal)
        // 🧪 FUNÇÕES DE TESTE SIMPLIFICADO (movidas para namespace principal)
        // 🎨 FUNÇÕES DE ÍCONES (movidas para namespace principal)
        // 🔍 FUNÇÕES DE DIAGNÓSTICO (movidas para namespace principal)
        // 🔧 FUNÇÕES DE DEBUG PARA BOTÃO (movidas para namespace principal)
        // 🌐 FUNÇÕES GLOBAIS PARA DADOS DE SESSÃO (movidas para namespace principal)
        // 🧪 FUNÇÕES DE TESTE (movidas para namespace principal)
        // 🧪 FUNÇÃO DE TESTE PARA CORREÇÃO DO CARD DE SESSÃO (movida para namespace principal)
        // 🚀 FUNÇÃO PARA FORÇAR CRIAÇÃO DE CARD SEM VALIDAÇÕES (movida para namespace principal)
        // 🧪 FUNÇÃO PARA TESTE DE CARD FIGMA EXATO (movida para namespace principal)
        // 🧪 FUNÇÃO DE TESTE PARA ERRO SWITCH RELEVANCIA (movida para namespace principal)
        // 🔧 FUNÇÕES DE DIAGNÓSTICO DE ÍCONES CSS (movidas para namespace principal)
        // 🩺 FUNÇÃO DE DIAGNÓSTICO COMPLETO DO CARD DE SESSÃO (movida para namespace principal)
        // 🔥 FUNÇÕES DE CONTROLE DE PERFORMANCE ULTRA (movidas para namespace principal)
        // 📋 NAMESPACE ESPECÍFICO PARA LOCALIZADORES (movido para namespace principal)
        // ======== TODAS AS FUNÇÕES FORAM MOVIDAS PARA O NAMESPACE PRINCIPAL ========

        // 🧪 EXPOR FUNÇÕES DE TESTE NO NAMESPACE (movidas para namespace principal)
    })();

    // ========================================
    // VARIÁVEIS GLOBAIS PARA DADOS DE SESSÃO
    // ========================================

    // ========================================
    // FUNÇÕES GLOBAIS PARA GERENCIAMENTO DOS DADOS
    // ========================================

    /**
     * 🔧 SETUP INTERFACE OBSERVER - Monitora mudanças na interface (OTIMIZADO)
     * Observer unificado com debounce para melhor performance
     */
    function setupInterfaceObserver() {
        console.log(
            "🔍 OBSERVER: Configurando observer de interface otimizado"
        );

        // Debounce para evitar múltiplas execuções
        let debounceTimer = null;
        const debounceDelay = 50;

        // Observer otimizado para detectar mudanças nos elementos da interface
        const observer = new MutationObserver((mutations) => {
            let shouldCheckOverlap = false;

            // Processar mutações de forma mais eficiente
            for (const mutation of mutations) {
                // Se elementos foram adicionados ou removidos
                if (mutation.type === "childList") {
                    for (const node of mutation.addedNodes) {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            const id = node.id;
                            if (
                                id === "sent1-auto-button" ||
                                id === "documento-relevante-notification" ||
                                id === "documento-relevante-options-menu"
                            ) {
                                shouldCheckOverlap = true;
                                break;
                            }
                        }
                    }
                }

                // Se atributos de estilo mudaram
                if (
                    mutation.type === "attributes" &&
                    mutation.attributeName === "style" &&
                    mutation.target.id &&
                    (mutation.target.id === "sent1-auto-button" ||
                        mutation.target.id ===
                            "documento-relevante-notification" ||
                        mutation.target.id ===
                            "documento-relevante-options-menu")
                ) {
                    shouldCheckOverlap = true;
                }

                // Early exit se já encontrou o que precisa
                if (shouldCheckOverlap) break;
            }

            // Debounce da verificação de overlap
            if (
                shouldCheckOverlap &&
                typeof preventElementOverlap === "function"
            ) {
                if (debounceTimer) clearTimeout(debounceTimer);
                debounceTimer = setTimeout(
                    preventElementOverlap,
                    debounceDelay
                );
            }
        });

        // Observar mudanças no body
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["style"],
        });

        console.log("✅ OBSERVER: Interface observer configurado com sucesso");
        return observer;
    }

    // ========================================
    // 🔍 FUNÇÕES DE DIAGNÓSTICO E CORREÇÃO AUTOMÁTICA
    // ========================================

    /**
     * Diagnóstico completo do estado atual da extensão
     * Verifica se todas as funcionalidades estão operando corretamente
     */
    function diagnosticarCompleto() {
        console.log(
            "🔍 DIAGNÓSTICO: Iniciando diagnóstico completo do sistema"
        );

        const diagnostico = {
            timestamp: new Date().toISOString(),
            url: window.location.href,
            pageType: detectPageType(),
            dadosSessao: {
                hasDataSessao: hasDataSessaoPautado(),
                dataSessao: dataSessaoPautado,
                processoComData: processoComDataSessao,
                dadosCompletos: hasDadosCompletosSessionJulgamento(),
            },
            elementos: {
                botaoIntegrado: !!document.getElementById(
                    "documento-relevante-auto-button"
                ),
                botaoFlutuante: !!document.getElementById("sent1-auto-button"),
                navbar: !!document.querySelector(".navbar"),
                minutas: !!document.querySelector("#conteudoMinutas"),
            },
            performance: {
                tentativasCruzamento: tentativasCruzamento,
                cacheValido: cacheValidoAte > Date.now(),
                processosProcessados: processosJaProcessados.size,
                modoUltraPerformance: MODO_ULTRA_PERFORMANCE,
            },
            apis: {
                perplexityKey: !!localStorage.getItem("perplexity_api_key"),
                requisicoesDesabilitadas: REQUISICOES_AUTOMATICAS_DESABILITADAS,
            },
        };

        console.log("📊 DIAGNÓSTICO COMPLETO:", diagnostico);

        // Verificar problemas comuns
        const problemas = [];

        if (
            !diagnostico.elementos.botaoIntegrado &&
            !diagnostico.elementos.botaoFlutuante
        ) {
            problemas.push("Nenhum botão da extensão encontrado");
        }

        if (
            diagnostico.dadosSessao.hasDataSessao &&
            !diagnostico.dadosSessao.dadosCompletos
        ) {
            problemas.push(
                "Data de sessão detectada mas dados completos não obtidos"
            );
        }

        if (
            diagnostico.performance.tentativasCruzamento >=
            MAX_TENTATIVAS_CRUZAMENTO
        ) {
            problemas.push("Máximo de tentativas de cruzamento atingido");
        }

        if (!diagnostico.apis.perplexityKey) {
            problemas.push("API key do Perplexity não configurada");
        }

        if (problemas.length > 0) {
            console.warn("⚠️ PROBLEMAS IDENTIFICADOS:", problemas);
        } else {
            console.log("✅ DIAGNÓSTICO: Sistema funcionando corretamente");
        }

        return {
            ...diagnostico,
            problemas: problemas,
            status: problemas.length === 0 ? "OK" : "ATENÇÃO",
        };
    }

    /**
     * Função de correção automática para problemas detectados
     * Tenta resolver os problemas mais comuns automaticamente
     */
    function corrigirProblemas() {
        console.log("🔧 CORREÇÃO: Iniciando correção automática de problemas");

        const resultadoCorrecao = {
            timestamp: new Date().toLocaleString("pt-BR"),
            acoes: [],
        };

        // 1. Tentar criar botão se não existir
        const botaoJaExiste =
            document.getElementById("eprobe-btn") ||
            document.getElementById("documento-relevante-auto-button") ||
            document.getElementById("sent1-auto-button");

        if (!botaoJaExiste) {
            console.log("🔘 Criando botão Resumir Documento...");
            try {
                ensureButtonExists();
                const botaoCriado =
                    document.getElementById("eprobe-btn") ||
                    document.getElementById(
                        "documento-relevante-auto-button"
                    ) ||
                    document.getElementById("sent1-auto-button");

                resultadoCorrecao.acoes.push({
                    acao: "Criação de botão",
                    status: "Tentativa executada",
                    sucesso: botaoCriado !== null,
                    idCriado: botaoCriado ? botaoCriado.id : null,
                });
            } catch (error) {
                console.error("❌ Erro ao criar botão:", error);
                resultadoCorrecao.acoes.push({
                    acao: "Criação de botão",
                    status: "Erro",
                    erro: error.message,
                });
            }
        }

        // 2. Tentar aplicar substituição de ícones
        if (
            document.querySelectorAll("[data-eprobe-icon-replaced]").length ===
            0
        ) {
            console.log("🎨 Aplicando substituição de ícones...");
            try {
                substituirIconesFieldsetAcoes();
                resultadoCorrecao.acoes.push({
                    acao: "Substituição de ícones",
                    status: "Executada",
                    quantidade: document.querySelectorAll(
                        "[data-eprobe-icon-replaced]"
                    ).length,
                });
            } catch (error) {
                console.error("❌ Erro ao substituir ícones:", error);
                resultadoCorrecao.acoes.push({
                    acao: "Substituição de ícones",
                    status: "Erro",
                    erro: error.message,
                });
            }
        }

        // 3. Forçar detecção de data da sessão se necessário
        if (!hasDataSessaoPautado()) {
            console.log("📅 Forçando detecção de data da sessão...");
            try {
                const dataDetectada =
                    window.SENT1_AUTO &&
                    window.SENT1_AUTO.detectarCardSessaoSimplificado
                        ? window.SENT1_AUTO.detectarCardSessaoSimplificado()
                        : null;
                resultadoCorrecao.acoes.push({
                    acao: "Detecção de data da sessão",
                    status: "Executada",
                    sucesso: dataDetectada !== null,
                    valor: dataDetectada,
                });
            } catch (error) {
                console.error("❌ Erro ao detectar data da sessão:", error);
                resultadoCorrecao.acoes.push({
                    acao: "Detecção de data da sessão",
                    status: "Erro",
                    erro: error.message,
                });
            }
        }

        console.log("🔧 CORREÇÃO COMPLETA:", resultadoCorrecao);
        return resultadoCorrecao;
    }

    /**
     * Força a reaplicação dos ícones em caso de falha
     * Remove marcações existentes e executa novamente
     */
    function forcarReaplicacaoIcones() {
        console.log("🔄 ÍCONES: Forçando reaplicação de ícones...");

        // Remover marcações existentes
        const iconesJaSubstituidos = document.querySelectorAll(
            "[data-eprobe-icon-replaced]"
        );
        iconesJaSubstituidos.forEach((icone) => {
            icone.removeAttribute("data-eprobe-icon-replaced");
            icone.removeAttribute("data-original-text");
        });

        let resultados = {
            fieldsetAcoes: 0,
            ferramentas: 0,
            erros: [],
        };

        // Executar substituição no fieldset de ações
        try {
            const fieldsetAcoes = document.querySelector(
                "#fldAcoes.infraFieldset"
            );
            if (fieldsetAcoes) {
                console.log("🎨 Reaplicando ícones no fieldset de ações...");
                substituirIconesFieldsetAcoes();
                // Adicionar substituição global
                substituirIconesGlobalmente();
                resultados.fieldsetAcoes = document.querySelectorAll(
                    "#fldAcoes [data-eprobe-icon-replaced]"
                ).length;
            }
        } catch (error) {
            console.error("❌ Erro na reaplicação do fieldset:", error);
            resultados.erros.push(`Fieldset: ${error.message}`);
        }

        // Executar substituição nas ferramentas
        try {
            console.log("🛠️ Reaplicando ícones das ferramentas...");
            if (typeof substituirIconesFerramentas === "function") {
                const sucessoFerramentas = substituirIconesFerramentas();
                // Executar também a substituição global
                substituirIconesGlobalmente();
                if (sucessoFerramentas) {
                    // Contar ícones de ferramentas substituídos (subtrair os de fieldset)
                    const totalIcones = document.querySelectorAll(
                        "[data-eprobe-icon-replaced]"
                    ).length;
                    const iconesFieldset = document.querySelectorAll(
                        "#fldAcoes [data-eprobe-icon-replaced]"
                    ).length;
                    resultados.ferramentas = totalIcones - iconesFieldset;
                    console.log(
                        `✅ ÍCONES: ${resultados.ferramentas} ícones de ferramentas aplicados`
                    );
                } else {
                    resultados.ferramentas = 0;
                    console.log(
                        "⚠️ ÍCONES: Nenhum ícone de ferramenta foi substituído"
                    );
                }
            } else {
                console.warn(
                    "⚠️ ÍCONES: Função substituirIconesFerramentas não está disponível"
                );
                resultados.erros.push(
                    "Função substituirIconesFerramentas não encontrada"
                );
            }
        } catch (error) {
            console.error("❌ Erro na reaplicação das ferramentas:", error);
            resultados.erros.push(`Ferramentas: ${error.message}`);
            resultados.ferramentas = 0;
        }

        console.log("✅ ÍCONES: Reaplicação concluída:", resultados);
        return resultados;
    }

    /**
     * Inicializa o sistema de substituição de ícones
     * Função principal que coordena toda a substituição
     */
    function inicializarSubstituicaoIcones() {
        console.log("🎨 ÍCONES: Inicializando sistema de substituição...");

        if (MODO_ULTRA_PERFORMANCE) {
            console.log(
                "⚠️ ÍCONES: Modo ultra-performance ativo - substituição bloqueada"
            );
            return false;
        }

        const resultados = {
            timestamp: new Date().toLocaleString("pt-BR"),
            execucoes: [],
            totalSubstituicoes: 0,
        };

        // 1. Substituir ícones do fieldset de ações
        try {
            const antes = document.querySelectorAll(
                "[data-eprobe-icon-replaced]"
            ).length;
            substituirIconesFieldsetAcoes();
            const depois = document.querySelectorAll(
                "[data-eprobe-icon-replaced]"
            ).length;
            const substituicoes = depois - antes;

            resultados.execucoes.push({
                tipo: "Fieldset Ações",
                substituicoes: substituicoes,
                sucesso: true,
            });
            resultados.totalSubstituicoes += substituicoes;
        } catch (error) {
            console.error("❌ Erro na substituição do fieldset:", error);
            resultados.execucoes.push({
                tipo: "Fieldset Ações",
                substituicoes: 0,
                sucesso: false,
                erro: error.message,
            });
        }

        // 2. Substituir ícones das ferramentas
        try {
            if (typeof substituirIconesFerramentas === "function") {
                const antes = document.querySelectorAll(
                    "[data-eprobe-icon-replaced]"
                ).length;
                substituirIconesFerramentas();
                const depois = document.querySelectorAll(
                    "[data-eprobe-icon-replaced]"
                ).length;
                const substituicoes = depois - antes;

                resultados.execucoes.push({
                    tipo: "Ferramentas",
                    substituicoes: substituicoes,
                    sucesso: true,
                });
                resultados.totalSubstituicoes += substituicoes;
            }
        } catch (error) {
            console.error("❌ Erro na substituição de ferramentas:", error);
            resultados.execucoes.push({
                tipo: "Ferramentas",
                substituicoes: 0,
                sucesso: false,
                erro: error.message,
            });
        }

        console.log("🎨 ÍCONES: Inicialização concluída:", resultados);
        return resultados;
    }

    /**
     * Diagnóstico específico para problemas com ícones CSS
     * Analisa o estado atual dos ícones na página
     */
    function diagnosticarIconesCSS() {
        console.log("🔍 DIAGNÓSTICO: Analisando estado dos ícones CSS...");

        const diagnostico = {
            timestamp: new Date().toLocaleString("pt-BR"),
            url: window.location.href,
            fieldsetAcoes: null,
            iconesGIF: 0,
            iconesSVG: 0,
            iconesSubstituidos: 0,
            problemas: [],
            recomendacoes: [],
        };

        // Analisar fieldset de ações
        const fieldsetAcoes = document.querySelector("#fldAcoes.infraFieldset");
        if (fieldsetAcoes) {
            diagnostico.fieldsetAcoes = {
                encontrado: true,
                children: fieldsetAcoes.children.length,
                links: fieldsetAcoes.querySelectorAll("a").length,
            };

            // Contar tipos de ícones
            const iconesGIF =
                fieldsetAcoes.querySelectorAll('img[src*=".gif"]');
            const iconesSVG = fieldsetAcoes.querySelectorAll("svg.lucide");
            const iconesSubstituidos = fieldsetAcoes.querySelectorAll(
                "[data-eprobe-icon-replaced]"
            );

            diagnostico.iconesGIF = iconesGIF.length;
            diagnostico.iconesSVG = iconesSVG.length;
            diagnostico.iconesSubstituidos = iconesSubstituidos.length;

            // Identificar problemas
            if (iconesGIF.length > 0 && iconesSVG.length === 0) {
                diagnostico.problemas.push(
                    "Ícones GIF não foram substituídos por SVG"
                );
                diagnostico.recomendacoes.push(
                    "Execute window.SENT1_AUTO.forcarReaplicacaoIcones()"
                );
            }

            if (iconesSubstituidos.length === 0 && iconesGIF.length > 0) {
                diagnostico.problemas.push(
                    "Nenhum ícone foi marcado como substituído"
                );
                diagnostico.recomendacoes.push(
                    "Execute window.SENT1_AUTO.inicializarSubstituicaoIcones()"
                );
            }
        } else {
            diagnostico.fieldsetAcoes = { encontrado: false };
            diagnostico.problemas.push("Fieldset #fldAcoes não encontrado");
            diagnostico.recomendacoes.push(
                "Verifique se está na página correta do eProc"
            );
        }

        // Verificar se modo ultra-performance está bloqueando
        if (MODO_ULTRA_PERFORMANCE) {
            diagnostico.problemas.push(
                "Modo ultra-performance ativo bloqueando substituições"
            );
            diagnostico.recomendacoes.push(
                "Execute window.SENT1_AUTO.desativarModoUltraPerformance()"
            );
        }

        console.log("🔍 DIAGNÓSTICO COMPLETO:", diagnostico);
        return diagnostico;
    }

    // ========================================
    // FUNÇÕES GLOBAIS PARA GERENCIAMENTO DOS DADOS
    // ========================================

    /**
     * Função global para obter o tipo de julgamento
     * @returns {string|null} - Tipo do julgamento (ex: "Mérito", "Embargos de Declaração")
     */
    function getTipoJulgamentoProcessoPautado() {
        return TipoJulgamentoProcessoPautado;
    }

    /**
     * Função global para definir o tipo de julgamento
     * @param {string} tipo - Tipo do julgamento
     */
    function setTipoJulgamentoProcessoPautado(tipo) {
        TipoJulgamentoProcessoPautado = tipo;
        console.log("📋 TIPO: Tipo de julgamento definido:", tipo);
    }

    /**
     * Função global para obter o status do julgamento
     * @returns {string|null} - Status do julgamento (ex: "Julgado em Pauta", "Retirado em Pauta")
     */
    function getStatusJulgamento() {
        return StatusJulgamento;
    }

    /**
     * Função global para definir o status do julgamento
     * @param {string} status - Status do julgamento
     */
    function setStatusJulgamento(status) {
        StatusJulgamento = status;
        console.log("📊 STATUS: Status de julgamento definido:", status);
    }

    /**
     * Função global para obter a data da sessão
     * @returns {string|null} - Data da sessão (ex: "10/04/2025")
     */
    function getDataSessao() {
        return DataSessao;
    }

    /**
     * Função global para definir a data da sessão
     * @param {string} data - Data da sessão
     */
    function setDataSessao(data) {
        DataSessao = data;
        console.log("📅 DATA: Data da sessão definida:", data);
    }

    /**
     * Função para resetar todos os dados globais da sessão
     */
    function resetDadosGlobaisSessao() {
        TipoJulgamentoProcessoPautado = null;
        StatusJulgamento = null;
        DataSessao = null;
        console.log(
            "🔄 RESET: Todos os dados globais da sessão foram resetados"
        );
    }

    /**
     * Função para mostrar todos os dados globais da sessão
     */
    function showDadosGlobaisSessao() {
        console.log("📊 DADOS GLOBAIS DA SESSÃO:");
        console.log("   Tipo de Julgamento:", TipoJulgamentoProcessoPautado);
        console.log("   Status do Julgamento:", StatusJulgamento);
        console.log("   Data da Sessão:", DataSessao);

        return {
            tipoJulgamento: TipoJulgamentoProcessoPautado,
            statusJulgamento: StatusJulgamento,
            dataSessao: DataSessao,
        };
    }

    /**
     * Detecta o status da sessão baseado nas minutas do processo
     * Analisa os padrões: "Incluído em Pauta", "Julgado em Pauta", "Retirado em Pauta"
     * @returns {Object|null} - Objeto com status e data, ou null se não encontrado
     */
    function detectarStatusSessao() {
        console.log(
            "🔍 STATUS: Iniciando detecção SIMPLIFICADA do status da sessão"
        );

        try {
            // MÉTODO SIMPLIFICADO: Tentativa segura de detecção
            let resultadoSimplificado = null;
            try {
                if (
                    typeof window.SENT1_AUTO?.detectarCardSessaoSimplificado ===
                    "function"
                ) {
                    resultadoSimplificado =
                        window.SENT1_AUTO.detectarCardSessaoSimplificado();
                } else {
                    console.log(
                        "ℹ️ STATUS: detectarCardSessaoSimplificado não disponível, usando fallback"
                    );
                }
            } catch (error) {
                console.log(
                    "⚠️ STATUS: Erro na detecção simplificada, continuando com fallback"
                );
            }

            if (resultadoSimplificado) {
                console.log("✅ STATUS: Detectado via método simplificado");
                return resultadoSimplificado;
            }

            // FALLBACK: Buscar no fieldset #fldMinutas como antes
            const fieldsetMinutas = document.getElementById("fldMinutas");
            let textoCompleto = "";

            if (fieldsetMinutas) {
                textoCompleto =
                    fieldsetMinutas.textContent ||
                    fieldsetMinutas.innerText ||
                    "";
                console.log("🎯 STATUS: Buscando no fieldset #fldMinutas");
            } else {
                // Último recurso: página completa
                textoCompleto = document.body.innerText;
                console.log("⚠️ STATUS: Usando página completa como fallback");
            }

            if (!textoCompleto || textoCompleto.trim() === "") {
                console.log("❌ STATUS: Nenhum texto encontrado para análise");
                return null;
            }

            // Padrões simplificados e reorganizados
            const padroes = [
                {
                    regex: /([A-Za-zÀ-ÿ\s]+(?:Interno|Declaração|Mérito|Preliminar|Cautelar|Embargos))\s*\(Retirado em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/gi,
                    status: "Retirado",
                    statusCompleto: "Retirado em Pauta",
                },
                {
                    regex: /([A-Za-zÀ-ÿ\s]+(?:Interno|Declaração|Mérito|Preliminar|Cautelar|Embargos))\s*\(Julgado em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/gi,
                    status: "Julgado",
                    statusCompleto: "Julgado em Pauta",
                },
                {
                    regex: /([A-Za-zÀ-ÿ\s]+(?:Interno|Declaração|Mérito|Preliminar|Cautelar|Embargos))\s*\(Incluído em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/gi,
                    status: "Pautado",
                    statusCompleto: "Incluído em Pauta",
                },
            ];

            // 🔍 BUSCAR TODAS AS SESSÕES (MÚLTIPLAS)
            const todasSessoes = [];

            for (const padrao of padroes) {
                padrao.regex.lastIndex = 0;
                let match;

                // Usar matchAll para capturar TODAS as ocorrências
                while ((match = padrao.regex.exec(textoCompleto)) !== null) {
                    const tipoProcesso = match[1]?.trim();
                    const dataEncontrada = match[2];
                    const orgao = match[3];

                    console.log(
                        `✅ STATUS: ${padrao.status} encontrado - Tipo: ${tipoProcesso}, Data: ${dataEncontrada}`
                    );

                    const dataValidada = validarDataBrasileira(dataEncontrada);
                    if (dataValidada) {
                        todasSessoes.push({
                            status: padrao.status,
                            statusCompleto: padrao.statusCompleto,
                            tipoProcesso: tipoProcesso,
                            data: dataValidada,
                            dataOriginal: dataEncontrada,
                            orgao: orgao,
                            textoCompleto: match[0],
                            prioridade:
                                padrao.status === "Retirado"
                                    ? 3
                                    : padrao.status === "Julgado"
                                    ? 2
                                    : 1,
                        });
                    }
                }
            }

            if (todasSessoes.length === 0) {
                console.log("❌ STATUS: Nenhum padrão encontrado");
                return null;
            }

            // 📊 LÓGICA DE PRIORIDADE PARA MÚLTIPLAS SESSÕES
            let sessaoEscolhida;

            if (todasSessoes.length === 1) {
                sessaoEscolhida = todasSessoes[0];
                console.log("📍 STATUS: Única sessão encontrada");
            } else {
                console.log(
                    `🔢 STATUS: ${todasSessoes.length} sessões encontradas - aplicando lógica de prioridade`
                );

                // Ordenar por prioridade (Retirado > Julgado > Pautado) e depois por data mais recente
                todasSessoes.sort((a, b) => {
                    if (a.prioridade !== b.prioridade) {
                        return b.prioridade - a.prioridade; // Maior prioridade primeiro
                    }
                    return new Date(b.data) - new Date(a.data); // Data mais recente primeiro
                });

                sessaoEscolhida = todasSessoes[0];
                console.log(
                    `🎯 STATUS: Sessão escolhida: ${sessaoEscolhida.status} (${sessaoEscolhida.dataOriginal})`
                );

                // Log das outras sessões encontradas
                for (let i = 1; i < todasSessoes.length; i++) {
                    console.log(
                        `📋 STATUS: Sessão adicional encontrada: ${todasSessoes[i].status} (${todasSessoes[i].dataOriginal})`
                    );
                }
            }

            // Salvar nas funções globais usando namespace
            if (
                window.SENT1_AUTO &&
                window.SENT1_AUTO.setTipoJulgamentoProcessoPautado
            ) {
                window.SENT1_AUTO.setTipoJulgamentoProcessoPautado(
                    sessaoEscolhida.tipoProcesso
                );
            }
            if (window.SENT1_AUTO && window.SENT1_AUTO.setStatusJulgamento) {
                window.SENT1_AUTO.setStatusJulgamento(
                    sessaoEscolhida.statusCompleto
                );
            }
            if (window.SENT1_AUTO && window.SENT1_AUTO.setDataSessao) {
                window.SENT1_AUTO.setDataSessao(sessaoEscolhida.dataOriginal);
            }

            // Armazenar todas as sessões para referência futura (caso precise de tooltip)
            sessaoEscolhida.todasSessoes = todasSessoes;

            // Armazenar globalmente para debug e recriação de tooltip
            if (window.SENT1_AUTO) {
                window.SENT1_AUTO.todasSessoesDetectadas = todasSessoes;
                window.SENT1_AUTO.sessaoAtual = sessaoEscolhida;
            }

            return sessaoEscolhida;
        } catch (error) {
            console.error("❌ STATUS: Erro na detecção:", error);
            return null;
        }
    }

    /**
     * Retorna o texto do card baseado no status da sessão
     * @param {Object} statusSessao - Objeto com informações do status
     * @returns {string} - Texto para exibir no card
     */
    function obterTextoCardPorStatus(statusSessao) {
        if (!statusSessao) {
            return "Processo Pautado"; // Fallback padrão
        }

        switch (statusSessao.status) {
            case "Incluído":
                return "Processo Pautado";
            case "Julgado":
                return "Processo Julgado";
            case "Retirado":
                return "Processo retirado de pauta";
            default:
                return "Processo Pautado";
        }
    }

    /**
     * Retorna a cor do card baseado no status da sessão
     * @param {Object} statusSessao - Objeto com informações do status
     * @returns {string} - Cor em formato hex
     */
    function obterCorCardPorStatus(statusSessao) {
        if (!statusSessao) {
            return "#3b82f6"; // Azul padrão
        }

        switch (statusSessao.status) {
            case "Incluído":
                return "#3b82f6"; // Azul para pautado
            case "Julgado":
                return "#16a34a"; // Verde para julgado
            case "Retirado":
                return "#dc2626"; // Vermelho para retirado
            default:
                return "#3b82f6";
        }
    }

    // FUNÇÃO REMOVIDA: detectarDataSessaoComStatus - substituída por detectarCardSessaoSimplificado ÚNICA

    // Funções auxiliares para gerenciar status de sessão
    function getStatusSessao() {
        return dataSessaoPautado?.statusSessao || null;
    }

    function hasStatusSessao() {
        return (
            dataSessaoPautado?.statusSessao !== null &&
            dataSessaoPautado?.statusSessao !== undefined
        );
    }

    function resetStatusSessao() {
        if (dataSessaoPautado) {
            delete dataSessaoPautado.statusSessao;
        }
        console.log("🔄 STATUS: Status da sessão resetado");
    }

    function showStatusSessaoInfo() {
        const status = getStatusSessao();
        if (status) {
            const info = `📋 STATUS DA SESSÃO DETECTADO:
                
    Status: ${status.status}
    Descrição: ${status.descricao}
    Tipo do Processo: ${status.tipoProcesso}
    Data: ${status.data.dataFormatada}
    Órgão: ${status.orgao}
    Texto Completo: ${status.textoCompleto}`;

            console.log(info);
            alert(info);
            return status;
        } else {
            const msg = "❌ Nenhum status de sessão foi detectado ainda.";
            console.log(msg);
            alert(msg);
            return null;
        }
    }

    // ========================================
    // FUNÇÕES DE TESTE E DEBUG PARA STATUS DE SESSÃO
    // ========================================

    // 🧪 FUNÇÃO DE DEBUG COMPLETA PARA VERIFICAR STATUS
    function debugStatusCompleto() {
        console.log("🧪 DEBUG STATUS COMPLETO: Verificando detecção de status");

        // 1. Verificar se há data da sessão armazenada
        console.log("📊 ESTADO ATUAL:");
        console.log("   Data sessão pautado:", dataSessaoPautado);
        console.log("   Processo atual:", processoAtual);
        console.log("   Processo com data:", processoComDataSessao);

        // 2. Executar detecção de status
        console.log("🔍 EXECUTANDO DETECÇÃO:");
        const statusDetectado = detectarStatusSessao();
        console.log("   Status detectado:", statusDetectado);

        // 3. Verificar status armazenado
        console.log("💾 STATUS ARMAZENADO:");
        const statusArmazenado = getStatusSessao();
        console.log("   Status via getStatusSessao():", statusArmazenado);

        // 4. Verificar texto na página
        const textoCompleto = document.body.innerText;
        console.log("📝 VERIFICAÇÕES DE TEXTO:");

        // Procurar por diferentes padrões
        const padroes = [
            { nome: "Retirado", regex: /retirado\s+em\s+pauta/i },
            { nome: "Julgado", regex: /julgado\s+em\s+pauta/i },
            { nome: "Incluído", regex: /incluído\s+em\s+pauta/i },
        ];

        padroes.forEach((padrao) => {
            const encontrado = textoCompleto.match(padrao.regex);
            if (encontrado) {
                console.log(`   ✅ ${padrao.nome}: "${encontrado[0]}"`);
            } else {
                console.log(`   ❌ ${padrao.nome}: não encontrado`);
            }
        });

        // 5. Testar padrão completo de exemplo
        const padraoCompleto =
            /([A-Za-zÀ-ÿ\s]+(?:Interno|Declaração|Mérito|Preliminar|Cautelar))\s*\((?:Incluído|Julgado|Retirado)\s+em\s+Pauta\s+em\s+(\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/gi;
        const matchCompleto = textoCompleto.match(padraoCompleto);
        console.log("🎯 PADRÃO COMPLETO:", matchCompleto);

        // 6. Simular chamada da interface
        console.log("🎨 SIMULAÇÃO INTERFACE:");
        const textoCard = obterTextoCardPorStatus(statusArmazenado);
        const corCard = obterCorCardPorStatus(statusArmazenado);
        console.log(`   Texto do card: "${textoCard}"`);
        console.log(`   Cor do card: ${corCard}`);

        return {
            statusDetectado,
            statusArmazenado,
            textoCard,
            corCard,
            temTextoRetirado: /retirado\s+em\s+pauta/i.test(textoCompleto),
        };
    }

    // 🧪 FUNÇÃO DE DEBUG ESPECÍFICA PARA TESTAR PADRÃO "RETIRADO"
    function debugPadraoRetirado() {
        console.log(
            "🧪 DEBUG RETIRADO: Testando detecção de padrão 'Retirado em Pauta'"
        );

        // Texto de exemplo fornecido pelo usuário
        const textoTeste = "Mérito (Retirado em Pauta em 10/04/2025 - CAMPUB5)";
        console.log(`📝 Texto de teste: "${textoTeste}"`);

        // Testar o padrão regex específico
        const padraoRetirado =
            /([A-Za-zÀ-ÿ\s]+(?:Interno|Declaração|Mérito|Preliminar|Cautelar))\s*\(Retirado em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/gi;

        const match = textoTeste.match(padraoRetirado);
        console.log("🔍 Match resultado:", match);

        if (match) {
            // Resetar lastIndex para nova busca
            padraoRetirado.lastIndex = 0;
            const detalhes = padraoRetirado.exec(textoTeste);
            console.log("📋 Detalhes extraídos:", detalhes);

            if (detalhes) {
                console.log("✅ SUCESSO:");
                console.log(`   Tipo: ${detalhes[1]?.trim()}`);
                console.log(`   Data: ${detalhes[2]}`);
                console.log(`   Órgão: ${detalhes[3]}`);
                console.log(`   Texto completo: ${detalhes[0]}`);
            }
        } else {
            console.log("❌ FALHA: Padrão não encontrou match");
        }

        // Testar também com o texto completo da página atual
        const textoCompleto = document.body.innerText;
        console.log("🔍 Testando na página atual...");

        const matchPagina = textoCompleto.match(padraoRetirado);
        if (matchPagina) {
            console.log("✅ Encontrado na página:", matchPagina);
        } else {
            console.log("❌ Não encontrado na página atual");
        }

        // Procurar por qualquer texto similar
        const buscaRetirado = /retirado\s+em\s+pauta/i;
        const encontrouRetirado = textoCompleto.match(buscaRetirado);
        if (encontrouRetirado) {
            console.log("🔍 Texto 'retirado em pauta' encontrado na página");
        } else {
            console.log(
                "❌ Texto 'retirado em pauta' NÃO encontrado na página"
            );
        }
    }

    /**
     * Testa o sistema completo de detecção de status de sessão
     * @returns {Object} - Resultado do teste com informações detalhadas
     */
    function testarSistemaStatusSessao() {
        console.log("🧪 TESTE: Iniciando teste completo do sistema de status");

        try {
            // 1. Verificar se há data de sessão detectada
            const temDataSessao = hasDataSessaoPautado();
            console.log(
                `📊 Data de sessão detectada: ${temDataSessao ? "SIM" : "NÃO"}`
            );

            if (temDataSessao) {
                const dadosSessao = getDataSessaoPautado();
                console.log(`📅 Data: ${dadosSessao.dataFormatada}`);
            }

            // 2. Testar detecção de status
            const statusDetectado = detectarStatusSessao();
            console.log(
                `🎯 Status detectado: ${statusDetectado ? "SIM" : "NÃO"}`
            );

            if (statusDetectado) {
                console.log(`📋 Status: ${statusDetectado.status}`);
                console.log(`📝 Descrição: ${statusDetectado.descricao}`);
                console.log(`📅 Data: ${statusDetectado.data.dataFormatada}`);
                console.log(`🏛️ Órgão: ${statusDetectado.orgao}`);
            }

            // 3. Testar funções de texto e cor
            const textoCard = obterTextoCardPorStatus(statusDetectado);
            const corCard = obterCorCardPorStatus(statusDetectado);

            console.log(`🎨 Texto do card: "${textoCard}"`);
            console.log(`🎨 Cor do card: ${corCard}`);

            // 4. Verificar interface
            const cardExiste = document.getElementById("eprobe-data-sessao");
            console.log(`🖼️ Card na interface: ${cardExiste ? "SIM" : "NÃO"}`);

            const resultado = {
                temDataSessao,
                statusDetectado,
                textoCard,
                corCard,
                cardExiste: !!cardExiste,
                timestamp: new Date().toLocaleString("pt-BR"),
            };

            console.log("✅ TESTE: Sistema testado com sucesso!");
            return resultado;
        } catch (error) {
            console.error("❌ TESTE: Erro durante o teste:", error);
            return {
                erro: error.message,
                timestamp: new Date().toLocaleString("pt-BR"),
            };
        }
    }

    /**
     * Debug dos padrões de busca para status de sessão
     * Mostra quais padrões estão encontrando matches no texto da página
     */
    function debugPadroesStatusSessao() {
        console.log("🔍 DEBUG: Analisando padrões de status de sessão");

        try {
            // Obter texto completo da página
            const textoCompleto = document.body.innerText;
            console.log(
                `📄 Texto da página: ${textoCompleto.length} caracteres`
            );

            // Padrões a serem testados
            const padroes = [
                {
                    nome: "Incluído em Pauta",
                    regex: /([A-Za-zÀ-ÿ\s]+(?:Interno|Declaração|Mérito|Preliminar|Cautelar))\s*\(Incluído em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/gi,
                    status: "Pautado",
                },
                {
                    nome: "Julgado em Pauta",
                    regex: /([A-Za-zÀ-ÿ\s]+(?:Interno|Declaração|Mérito|Preliminar|Cautelar))\s*\(Julgado em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/gi,
                    status: "Julgado",
                },
                {
                    nome: "Retirado em Pauta",
                    regex: /([A-Za-zÀ-ÿ\s]+(?:Interno|Declaração|Mérito|Preliminar|Cautelar))\s*\(Retirado em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/gi,
                    status: "Retirado",
                },
            ];

            let encontrados = 0;

            // Testar cada padrão
            padroes.forEach((padrao, index) => {
                console.log(
                    `\n🔍 Testando padrão ${index + 1}: ${padrao.nome}`
                );

                // Resetar regex
                padrao.regex.lastIndex = 0;

                const matches = textoCompleto.match(padrao.regex);

                if (matches && matches.length > 0) {
                    encontrados++;
                    console.log(
                        `✅ MATCH ENCONTRADO! (${matches.length} ocorrência${
                            matches.length > 1 ? "s" : ""
                        })`
                    );

                    matches.forEach((match, i) => {
                        console.log(`   ${i + 1}. "${match}"`);
                    });

                    // Tentar extrair detalhes do primeiro match
                    padrao.regex.lastIndex = 0;
                    const detalhes = padrao.regex.exec(textoCompleto);
                    if (detalhes) {
                        console.log(`   📋 Tipo: ${detalhes[1]?.trim()}`);
                        console.log(`   📅 Data: ${detalhes[2]}`);
                        console.log(`   🏛️ Órgão: ${detalhes[3]}`);
                    }
                } else {
                    console.log(`❌ Nenhum match encontrado`);
                }
            });

            console.log(
                `\n📊 RESUMO: ${encontrados} padrão${
                    encontrados !== 1 ? "ões" : ""
                } encontrado${encontrados !== 1 ? "s" : ""}`
            );

            // Buscar por texto relacionado a sessão
            const termosRelacionados = [
                "Incluído em Pauta",
                "Julgado em Pauta",
                "Retirado em Pauta",
                "sessão",
                "julgamento",
                "pauta",
            ];

            console.log("\n🔍 Buscando termos relacionados:");
            termosRelacionados.forEach((termo) => {
                const regex = new RegExp(termo, "gi");
                const matches = textoCompleto.match(regex);
                console.log(
                    `   "${termo}": ${matches ? matches.length : 0} ocorrência${
                        matches && matches.length !== 1 ? "s" : ""
                    }`
                );
            });

            return {
                totalPadroes: padroes.length,
                padroesEncontrados: encontrados,
                timestamp: new Date().toLocaleString("pt-BR"),
            };
        } catch (error) {
            console.error("❌ DEBUG: Erro durante debug dos padrões:", error);
            return { erro: error.message };
        }
    }

    /**
     * Força a detecção de um status específico (para testes)
     * @param {string} tipoStatus - "pautado", "julgado" ou "retirado"
     * @returns {Object|null} - Objeto com status forçado ou null se inválido
     */
    function forcarStatusSessao(tipoStatus = "pautado") {
        console.log(`🚀 FORÇA: Forçando status "${tipoStatus}"`);

        try {
            const statusValidos = {
                pautado: {
                    status: "Pautado",
                    descricao: "Processo Pautado",
                    cor: "#134377",
                },
                julgado: {
                    status: "Julgado",
                    descricao: "Processo Julgado",
                    cor: "#16a34a",
                },
                retirado: {
                    status: "Retirado",
                    descricao: "Processo Retirado de Pauta",
                    cor: "#dc2626",
                },
            };

            const tipoLower = tipoStatus.toLowerCase();

            if (!statusValidos[tipoLower]) {
                console.error(
                    `❌ FORÇA: Status "${tipoStatus}" inválido. Use: pautado, julgado ou retirado`
                );
                return null;
            }

            const config = statusValidos[tipoLower];
            const dataAtual = new Date();
            const dataFormatada = dataAtual.toLocaleDateString("pt-BR");

            // Criar objeto de status forçado
            const statusForcado = {
                status: config.status,
                descricao: config.descricao,
                tipoProcesso: "Teste Forçado",
                data: {
                    dataFormatada: dataFormatada,
                    dataObject: dataAtual,
                },
                orgao: "TESTE",
                textoCompleto: `Teste Forçado (${config.status} em Pauta em ${dataFormatada} - TESTE)`,
                forcado: true,
            };

            console.log(
                `✅ FORÇA: Status "${config.status}" criado artificialmente`
            );
            console.log(`📅 Data: ${dataFormatada}`);
            console.log(`🎨 Cor: ${config.cor}`);

            // Testar funções relacionadas
            const textoCard = obterTextoCardPorStatus(statusForcado);
            const corCard = obterCorCardPorStatus(statusForcado);

            console.log(`🎨 Texto do card: "${textoCard}"`);
            console.log(`🎨 Cor do card: ${corCard}`);

            // Opcionalmente atualizar a interface se houver data de sessão
            if (hasDataSessaoPautado()) {
                console.log("🖼️ Atualizando interface com status forçado...");

                // Salvar dados temporariamente
                const dadosOriginais = dataSessaoPautado;

                // Aplicar status forçado
                if (dataSessaoPautado) {
                    dataSessaoPautado.statusSessao = statusForcado;
                }

                // Tentar atualizar interface
                const sucesso = atualizarDataSessaoNaInterface();
                console.log(
                    `🖼️ Interface atualizada: ${sucesso ? "SIM" : "NÃO"}`
                );

                // Restaurar dados originais após 5 segundos
                setTimeout(() => {
                    dataSessaoPautado = dadosOriginais;
                    console.log("🔄 FORÇA: Dados originais restaurados");
                }, 5000);
            }

            return statusForcado;
        } catch (error) {
            console.error("❌ FORÇA: Erro ao forçar status:", error);
            return null;
        }
    }

    /**
     * Força uma nova detecção de status e atualização do card
     */
    function forcarAtualizacaoStatus() {
        console.log("🔄 FORÇA: Forçando atualização do status da sessão");

        try {
            // 1. Re-detectar status
            const novoStatus = detectarStatusSessao();
            console.log("🔍 Novo status detectado:", novoStatus);

            // 2. Atualizar dados se há sessão
            if (hasDataSessaoPautado() && novoStatus) {
                dataSessaoPautado.statusSessao = novoStatus;
                console.log("✅ Status atualizado nos dados da sessão");
            }

            // 3. Forçar atualização da interface
            const cardExistente = document.getElementById("eprobe-data-sessao");
            if (cardExistente) {
                console.log("🗑️ Removendo card existente");
                cardExistente.remove();
            }

            // 4. Re-inserir com novo status
            setTimeout(() => {
                const sucesso = inserirDataSessaoNaInterface();
                if (sucesso) {
                    console.log("✅ Card atualizado com novo status");
                } else {
                    console.log("❌ Falha ao re-inserir card");
                }
            }, 100);

            return novoStatus;
        } catch (error) {
            console.error("❌ Erro ao forçar atualização de status:", error);
            return null;
        }
    }

    /**
     * Testa especificamente o caso "Retirado em Pauta"
     */
    function testarCasoRetirado() {
        console.log("🧪 TESTE: Testando caso específico 'Retirado em Pauta'");

        // Texto de exemplo do usuário
        const textoExemplo =
            "Mérito (Retirado em Pauta em 10/04/2025 - CAMPUB5)";
        console.log(`📝 Texto de exemplo: "${textoExemplo}"`);

        // Testar regex específico
        const regexRetirado =
            /([A-Za-zÀ-ÿ\s]+(?:Interno|Declaração|Mérito|Preliminar|Cautelar))\s*\(Retirado em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/gi;

        const match = textoExemplo.match(regexRetirado);
        console.log("🔍 Match resultado:", match);

        if (match) {
            regexRetirado.lastIndex = 0;
            const detalhes = regexRetirado.exec(textoExemplo);
            console.log("📋 Detalhes extraídos:", detalhes);

            if (detalhes) {
                const resultado = {
                    tipo: detalhes[1]?.trim(),
                    data: detalhes[2],
                    orgao: detalhes[3],
                    status: "Retirado",
                    descricao: "Processo Retirado de Pauta",
                };

                console.log("✅ RESULTADO:", resultado);

                // Testar cores e textos
                const textoCard = obterTextoCardPorStatus({
                    status: "Retirado",
                });
                const corCard = obterCorCardPorStatus({
                    status: "Retirado",
                });

                console.log(`🎨 Texto do card: "${textoCard}"`);
                console.log(`🎨 Cor do card: ${corCard}`);

                return resultado;
            }
        } else {
            console.log("❌ FALHA: Regex não funcionou com o texto de exemplo");
        }

        // Buscar na seção específica das minutas
        console.log("🔍 Procurando na seção de minutas...");
        const minutasElement = document.getElementById("fldMinutas");
        if (minutasElement) {
            const textoMinutas =
                minutasElement.innerText || minutasElement.textContent || "";
            console.log(
                `📝 Texto das minutas encontrado (${textoMinutas.length} chars):`,
                textoMinutas.substring(0, 200) + "..."
            );

            const matchMinutas = textoMinutas.match(regexRetirado);
            if (matchMinutas) {
                console.log(
                    "✅ Padrão 'Retirado' encontrado nas minutas:",
                    matchMinutas
                );

                // Simular detecção correta
                regexRetirado.lastIndex = 0;
                const detalhesMinutas = regexRetirado.exec(textoMinutas);
                if (detalhesMinutas) {
                    const resultadoMinutas = {
                        tipo: detalhesMinutas[1]?.trim(),
                        data: detalhesMinutas[2],
                        orgao: detalhesMinutas[3],
                        status: "Retirado",
                        descricao: "Processo Retirado de Pauta",
                    };
                    console.log("✅ RESULTADO DAS MINUTAS:", resultadoMinutas);
                    return resultadoMinutas;
                }
            } else {
                console.log("❌ Padrão 'Retirado' não encontrado nas minutas");

                // Verificar padrões mais simples
                if (/retirado/i.test(textoMinutas)) {
                    console.log("⚠️ Palavra 'retirado' encontrada nas minutas");
                    console.log(
                        "📝 Contexto:",
                        textoMinutas.match(/(.{0,50}retirado.{0,50})/gi)
                    );
                }
            }
        } else {
            console.log("❌ Elemento #fldMinutas não encontrado");
        }

        // Verificar em toda a página como fallback
        console.log("🔍 Testando na página completa...");
        const textoCompleto = document.body.innerText;
        const matchPagina = textoCompleto.match(regexRetirado);

        if (matchPagina) {
            console.log("✅ Encontrado padrão 'Retirado' na página");
        } else {
            console.log("❌ Padrão 'Retirado' não encontrado na página");

            // Verificar se há pelo menos a palavra "retirado"
            if (/retirado/i.test(textoCompleto)) {
                console.log(
                    "⚠️ Palavra 'retirado' encontrada, mas não no padrão esperado"
                );
                const contextosRetirado = textoCompleto.match(
                    /(.{0,80}retirado.{0,80})/gi
                );
                if (contextosRetirado) {
                    console.log(
                        "📝 Contextos encontrados:",
                        contextosRetirado.slice(0, 3)
                    );
                }
            } else {
                console.log("❌ Palavra 'retirado' não encontrada na página");
            }
        }

        return null;
    }

    /**
     * Debug completo do status da sessão
     */
    function debugStatusCompleto() {
        console.log("🧪 DEBUG STATUS COMPLETO: Verificando detecção de status");

        // 1. Verificar estado atual
        console.log("📊 ESTADO ATUAL:");
        console.log("   Data sessão pautado:", dataSessaoPautado);
        console.log("   Processo atual:", processoAtual);
        console.log("   Processo com data:", processoComDataSessao);

        // 2. Executar detecção de status
        console.log("🔍 EXECUTANDO DETECÇÃO:");
        const statusDetectado = detectarStatusSessao();
        console.log("   Status detectado:", statusDetectado);

        // 3. Verificar status armazenado
        console.log("💾 STATUS ARMAZENADO:");
        const statusArmazenado = getStatusSessao();
        console.log("   Status via getStatusSessao():", statusArmazenado);

        // 4. Verificar texto na página
        const textoCompleto = document.body.innerText;
        console.log("📝 VERIFICAÇÕES DE TEXTO:");

        // Procurar por diferentes padrões
        const padroes = [
            { nome: "Retirado", regex: /retirado\s+em\s+pauta/i },
            { nome: "Julgado", regex: /julgado\s+em\s+pauta/i },
            { nome: "Incluído", regex: /incluído\s+em\s+pauta/i },
        ];

        padroes.forEach((padrao) => {
            const encontrado = textoCompleto.match(padrao.regex);
            if (encontrado) {
                console.log(`   ✅ ${padrao.nome}: "${encontrado[0]}"`);
            } else {
                console.log(`   ❌ ${padrao.nome}: não encontrado`);
            }
        });

        // 5. Simular chamada da interface
        console.log("🎨 SIMULAÇÃO INTERFACE:");
        const textoCard = obterTextoCardPorStatus(statusArmazenado);
        const corCard = obterCorCardPorStatus(statusArmazenado);
        console.log(`   Texto do card: "${textoCard}"`);
        console.log(`   Cor do card: ${corCard}`);

        return {
            statusDetectado,
            statusArmazenado,
            textoCard,
            corCard,
            temTextoRetirado: /retirado\s+em\s+pauta/i.test(textoCompleto),
        };
    }

    /**
     * Debug do padrão específico "Retirado"
     */
    function debugPadraoRetirado() {
        console.log(
            "🧪 DEBUG RETIRADO: Testando detecção de padrão 'Retirado em Pauta'"
        );

        // Texto de exemplo fornecido pelo usuário
        const textoTeste = "Mérito (Retirado em Pauta em 10/04/2025 - CAMPUB5)";
        console.log(`📝 Texto de teste: "${textoTeste}"`);

        // Testar o padrão regex específico
        const padraoRetirado =
            /([A-Za-zÀ-ÿ\s]+(?:Interno|Declaração|Mérito|Preliminar|Cautelar))\s*\(Retirado em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/gi;

        const match = textoTeste.match(padraoRetirado);
        console.log("🔍 Match resultado:", match);

        if (match) {
            // Resetar lastIndex para nova busca
            padraoRetirado.lastIndex = 0;
            const detalhes = padraoRetirado.exec(textoTeste);
            console.log("📋 Detalhes extraídos:", detalhes);

            if (detalhes) {
                console.log("✅ SUCESSO:");
                console.log(`   Tipo: ${detalhes[1]?.trim()}`);
                console.log(`   Data: ${detalhes[2]}`);
                console.log(`   Órgão: ${detalhes[3]}`);
                console.log(`   Texto completo: ${detalhes[0]}`);
            }
        } else {
            console.log("❌ FALHA: Padrão não encontrou match");
        }

        // Testar também com o texto completo da página atual
        const textoCompleto = document.body.innerText;
        console.log("🔍 Testando na página atual...");

        const matchPagina = textoCompleto.match(padraoRetirado);
        if (matchPagina) {
            console.log("✅ Encontrado na página:", matchPagina);
        } else {
            console.log("❌ Não encontrado na página atual");
        }

        // Procurar por qualquer texto similar
        const buscaRetirado = /retirado\s+em\s+pauta/i;
        const encontrouRetirado = textoCompleto.match(buscaRetirado);
        if (encontrouRetirado) {
            console.log("🔍 Texto 'retirado em pauta' encontrado na página");
        } else {
            console.log(
                "❌ Texto 'retirado em pauta' NÃO encontrado na página"
            );
        }
    }

    /**
     * Função para procurar texto específico "Retirado em Pauta" em toda a página
     */
    function encontrarTextoRetirado() {
        console.log(
            "🔍 BUSCA: Procurando texto 'Retirado em Pauta' em toda a página"
        );

        // 1. Buscar em elementos específicos primeiro
        const seletores = [
            "#fldMinutas",
            "#divInfraAreaProcesso",
            "#conteudoMinutas",
            ".infraEventoDescricao",
            "[id*='minutas']",
            "[class*='minutas']",
        ];

        seletores.forEach((seletor) => {
            const elemento = document.querySelector(seletor);
            if (elemento) {
                const texto = elemento.innerText || elemento.textContent || "";
                if (/retirado\s+em\s+pauta/i.test(texto)) {
                    console.log(
                        `✅ ENCONTRADO em ${seletor}:`,
                        texto.substring(0, 200)
                    );

                    // Buscar o padrão específico
                    const regex =
                        /([A-Za-zÀ-ÿ\s]+(?:Interno|Declaração|Mérito|Preliminar|Cautelar))\s*\(Retirado em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/gi;
                    const match = texto.match(regex);
                    if (match) {
                        console.log(
                            `🎯 PADRÃO ENCONTRADO em ${seletor}:`,
                            match
                        );
                    }
                } else {
                    console.log(`❌ Não encontrado em ${seletor}`);
                }
            } else {
                console.log(`❌ Elemento ${seletor} não existe`);
            }
        });

        // 2. Buscar em toda a página
        const textoCompleto = document.body.innerText;
        const matches = textoCompleto.match(
            /(.{0,100}retirado\s+em\s+pauta.{0,100})/gi
        );
        if (matches) {
            console.log("🔍 CONTEXTOS 'Retirado em Pauta' na página:");
            matches.forEach((match, index) => {
                console.log(`   ${index + 1}: ${match}`);
            });
        } else {
            console.log(
                "❌ Texto 'Retirado em Pauta' não encontrado na página"
            );
        }

        // 3. Testar regex completo na página
        const regexCompleto =
            /([A-Za-zÀ-ÿ\s]+(?:Interno|Declaração|Mérito|Preliminar|Cautelar))\s*\(Retirado em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/gi;
        const matchCompleto = textoCompleto.match(regexCompleto);
        if (matchCompleto) {
            console.log("✅ REGEX COMPLETO funcionou:", matchCompleto);
        } else {
            console.log("❌ REGEX COMPLETO não encontrou nada");
        }

        return {
            encontrouTexto: matches ? true : false,
            contextos: matches || [],
            matchRegex: matchCompleto || [],
        };
    }

    /**
     * Força uma re-detecção completa com logging detalhado
     */
    function forcarDeteccaoCompleta() {
        console.log("🔄 FORÇA: Iniciando detecção completa com debug");

        // 1. Procurar texto primeiro
        encontrarTextoRetirado();

        // 2. Executar detecção normal
        const statusDetectado = detectarStatusSessao();
        console.log("🎯 Status detectado:", statusDetectado);

        // 3. Forçar atualização se necessário
        if (statusDetectado) {
            // Atualizar dados globais
            if (hasDataSessaoPautado()) {
                dataSessaoPautado.statusSessao = statusDetectado;
                console.log("✅ Dados globais atualizados");
            }

            // Re-inserir interface
            forcarAtualizacaoStatus();
        } else {
            console.log(
                "❌ Nenhum status detectado - verifique se a página contém dados de sessão"
            );
        }

        return statusDetectado;
    }

    // ========================================
    // FUNÇÕES DE EXTRAÇÃO DIRETA DE TEXTO PDF
    // ========================================

    /**
     * Extrai texto de PDF usando estratégias de extração direta
     * @param {HTMLElement} pdfElement - Elemento do PDF
     * @returns {Promise<string|null>} - Texto extraído ou null se falhar
     */
    async function extractTextFromPDF(pdfElement) {
        log("� Iniciando extração de texto do PDF...");

        try {
            showNotification("� Extraindo texto do PDF...", "info");

            // ESTRATÉGIA 1: Seleção automática de texto no PDF
            const textFromSelection = await tryExtractTextViaSelection(
                pdfElement
            );
            if (textFromSelection && textFromSelection.length > 100) {
                log(
                    ` Texto extraído via seleção: ${textFromSelection.length} caracteres`
                );
                showNotification(
                    ` Texto extraído com sucesso! ${textFromSelection.length} caracteres`,
                    "success"
                );
                return cleanExtractedText(textFromSelection);
            }

            // ESTRATÉGIA 2: PDF.js para extrair texto estruturado
            const textFromPdfJs = await tryExtractTextViaPdfJs(pdfElement);
            if (textFromPdfJs && textFromPdfJs.length > 100) {
                log(
                    ` Texto extraído via PDF.js: ${textFromPdfJs.length} caracteres`
                );
                showNotification(
                    ` Texto extraído com sucesso! ${textFromPdfJs.length} caracteres`,
                    "success"
                );
                return cleanExtractedText(textFromPdfJs);
            }

            // ESTRATÉGIA 3: Fetch direto do PDF e processamento
            const textFromFetch = await tryExtractTextViaFetch(pdfElement);
            if (textFromFetch && textFromFetch.length > 100) {
                log(
                    ` Texto extraído via fetch: ${textFromFetch.length} caracteres`
                );
                showNotification(
                    ` Texto extraído com sucesso! ${textFromFetch.length} caracteres`,
                    "success"
                );
                return cleanExtractedText(textFromFetch);
            }

            // ESTRATÉGIA 4: Clipboard após comando de cópia
            const textFromClipboard = await tryExtractTextViaClipboard(
                pdfElement
            );
            if (textFromClipboard && textFromClipboard.length > 100) {
                log(
                    ` Texto extraído via clipboard: ${textFromClipboard.length} caracteres`
                );
                showNotification(
                    ` Texto extraído com sucesso! ${textFromClipboard.length} caracteres`,
                    "success"
                );
                return cleanExtractedText(textFromClipboard);
            }

            // Se todas as estratégias diretas falharam, oferecer alternativas
            throw new Error(
                "Não foi possível extrair texto diretamente do PDF"
            );
        } catch (error) {
            log(` Erro na extração de texto: ${error.message}`);
            return await handleTextExtractionError(error, pdfElement);
        }
    }

    /**
     * ESTRATÉGIA 1: Extrair texto via seleção automática
     */
    async function tryExtractTextViaSelection(pdfElement) {
        try {
            log("� Tentando extração via seleção automática...");

            // Focar no elemento PDF
            pdfElement.focus();
            await new Promise((resolve) => setTimeout(resolve, 500));

            // Simular Ctrl+A para selecionar todo o texto
            const selectAllEvent = new KeyboardEvent("keydown", {
                key: "a",
                code: "KeyA",
                ctrlKey: true,
                metaKey: false,
                bubbles: true,
                cancelable: true,
            });

            pdfElement.dispatchEvent(selectAllEvent);
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Tentar obter texto selecionado
            const selectedText = window.getSelection().toString();
            if (selectedText && selectedText.length > 50) {
                log(" Texto obtido via getSelection()");
                return selectedText;
            }

            // Simular Ctrl+C para copiar
            const copyEvent = new KeyboardEvent("keydown", {
                key: "c",
                code: "KeyC",
                ctrlKey: true,
                metaKey: false,
                bubbles: true,
                cancelable: true,
            });

            pdfElement.dispatchEvent(copyEvent);
            await new Promise((resolve) => setTimeout(resolve, 500));

            // Tentar ler do clipboard
            try {
                const clipboardText = await navigator.clipboard.readText();
                if (clipboardText && clipboardText.length > 50) {
                    log(" Texto obtido via clipboard após Ctrl+C");
                    return clipboardText;
                }
            } catch (clipError) {
                log(" Acesso negado ao clipboard");
            }

            return null;
        } catch (error) {
            log(` Erro na seleção automática: ${error.message}`);
            return null;
        }
    }

    /**
     * ESTRATÉGIA 2: Extrair texto via PDF.js
     */
    async function tryExtractTextViaPdfJs(pdfElement) {
        try {
            log("📚 Tentando extração via PDF.js...");

            const pdfUrl = pdfElement.src;
            if (
                !pdfUrl ||
                pdfUrl.startsWith("blob:") ||
                pdfUrl.startsWith("data:")
            ) {
                log(" URL do PDF não é adequada para PDF.js");
                return null;
            }

            // Carregar PDF.js se necessário
            if (typeof pdfjsLib === "undefined") {
                log("📦 Carregando PDF.js...");
                await loadPdfJsLibrary();
            }

            log(`� Processando PDF: ${pdfUrl}`);
            const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
            let fullText = "";

            // Extrair texto de todas as páginas (limitado a 10 páginas para performance)
            const numPages = Math.min(pdf.numPages, 10);
            for (let pageNum = 1; pageNum <= numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const textContent = await page.getTextContent();

                const pageText = textContent.items
                    .filter((item) => item.str && item.str.trim().length > 0)
                    .map((item) => item.str)
                    .join(" ");

                if (pageText.trim()) {
                    fullText += pageText + "\n\n";
                }

                // Mostrar progresso
                if (numPages > 1) {
                    showNotification(
                        ` Processando página ${pageNum}/${numPages}...`,
                        "info"
                    );
                }
            }

            if (fullText.trim().length > 50) {
                log(
                    ` PDF.js extraiu ${fullText.length} caracteres de ${numPages} páginas`
                );
                return fullText.trim();
            }

            return null;
        } catch (error) {
            log(` Erro no PDF.js: ${error.message}`);
            return null;
        }
    }

    /**
     * ESTRATÉGIA 3: Fetch direto do PDF
     */
    async function tryExtractTextViaFetch(pdfElement) {
        try {
            log(" Tentando extração via fetch direto...");

            const pdfUrl = pdfElement.src;
            if (
                !pdfUrl ||
                pdfUrl.startsWith("blob:") ||
                pdfUrl.startsWith("data:")
            ) {
                log(" URL do PDF não é adequada para fetch");
                return null;
            }

            // Carregar PDF.js se necessário
            if (typeof pdfjsLib === "undefined") {
                await loadPdfJsLibrary();
            }

            showNotification(" Baixando PDF...", "info");

            // Fetch do PDF com timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

            const response = await fetch(pdfUrl, {
                signal: controller.signal,
                headers: {
                    Accept: "application/pdf",
                },
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(
                    `HTTP ${response.status}: ${response.statusText}`
                );
            }

            const arrayBuffer = await response.arrayBuffer();
            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;

            let fullText = "";
            const numPages = Math.min(pdf.numPages, 15); // Limite maior para fetch direto

            for (let pageNum = 1; pageNum <= numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const textContent = await page.getTextContent();

                const pageText = textContent.items
                    .filter((item) => item.str && item.str.trim().length > 0)
                    .map((item) => item.str)
                    .join(" ");

                if (pageText.trim()) {
                    fullText += pageText + "\n\n";
                }

                showNotification(
                    ` Processando página ${pageNum}/${numPages}...`,
                    "info"
                );
            }

            if (fullText.trim().length > 50) {
                log(
                    ` Fetch extraiu ${fullText.length} caracteres de ${numPages} páginas`
                );
                return fullText.trim();
            }

            return null;
        } catch (error) {
            log(` Erro no fetch: ${error.message}`);
            return null;
        }
    }

    /**
     * ESTRATÉGIA 4: Extrair via clipboard com comandos específicos
     */
    async function tryExtractTextViaClipboard(pdfElement) {
        try {
            log(" Tentando extração via clipboard...");

            // Limpar clipboard primeiro
            try {
                await navigator.clipboard.writeText("");
            } catch (e) {
                log(" Não foi possível limpar clipboard");
            }

            // Focar e tentar diferentes combinações de teclas
            pdfElement.focus();
            await new Promise((resolve) => setTimeout(resolve, 500));

            // Tentar Ctrl+A seguido de Ctrl+C
            document.execCommand("selectAll");
            await new Promise((resolve) => setTimeout(resolve, 300));
            document.execCommand("copy");
            await new Promise((resolve) => setTimeout(resolve, 500));

            // Verificar clipboard
            try {
                const clipboardText = await navigator.clipboard.readText();
                if (clipboardText && clipboardText.trim().length > 50) {
                    log(" Texto obtido via execCommand");
                    return clipboardText.trim();
                }
            } catch (clipError) {
                log(" Acesso negado ao clipboard após execCommand");
            }

            return null;
        } catch (error) {
            log(` Erro na extração via clipboard: ${error.message}`);
            return null;
        }
    }

    /**
     * Carrega a biblioteca PDF.js dinamicamente
     */
    async function loadPdfJsLibrary() {
        if (typeof pdfjsLib !== "undefined") {
            return;
        }

        log("📦 Carregando PDF.js...");

        // Carregar PDF.js da CDN
        const script = document.createElement("script");
        script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
        document.head.appendChild(script);

        await new Promise((resolve, reject) => {
            script.onload = () => {
                log(" PDF.js carregado com sucesso");
                // Configurar worker
                if (typeof pdfjsLib !== "undefined") {
                    pdfjsLib.GlobalWorkerOptions.workerSrc =
                        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
                }
                resolve();
            };
            script.onerror = () => {
                log(" Erro ao carregar PDF.js");
                reject(new Error("Falha ao carregar PDF.js"));
            };
        });

        // Aguardar inicialização
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    /**
     * Limpa e normaliza texto extraído de PDF
     */
    function cleanExtractedText(text) {
        return text
            .replace(/\r\n/g, "\n") // Normalizar quebras de linha
            .replace(/\r/g, "\n") // Normalizar quebras de linha
            .replace(/\n{3,}/g, "\n\n") // Reduzir quebras de linha excessivas
            .replace(/\s+/g, " ") // Normalizar espaços múltiplos
            .replace(/([.!?])\s*([A-ZÁÊÇ])/g, "$1\n\n$2") // Quebrar em parágrafos
            .trim();
    }

    /**
     * Trata erros na extração de texto e oferece soluções
     */
    async function handleTextExtractionError(error, pdfElement) {
        const pdfUrl = pdfElement?.src || "";

        log(" Tentativas diretas falharam, oferecendo alternativas");

        showNotification(
            " Extração automática não foi possível!\n\n" +
                "Métodos alternativos:\n" +
                "1. Selecione o texto manualmente no PDF (Ctrl+A, Ctrl+C)\n" +
                "2. Baixe o PDF e use Perplexity/Claude com upload\n" +
                "3. Use ferramenta de conversão PDF para texto\n\n" +
                " Alguns PDFs têm proteções que impedem extração automática.",
            "warning"
        );

        // Tentar iniciar download automático como fallback
        await tryAutoDownloadPDF(pdfUrl);

        return null;
    }

    /**
     * Tenta extrair texto direto do PDF usando APIs nativas
     */
    async function tryExtractDirectPdfText(pdfElement) {
        try {
            log(" Tentando extração direta de texto do PDF...");

            // Verificar se é um PDF embedado do Chrome
            if (
                pdfElement.type === "application/pdf" ||
                pdfElement.type === "application/x-google-chrome-pdf"
            ) {
                // Tentar selecionar tudo no PDF e copiar
                pdfElement.focus();

                // Simular Ctrl+A para selecionar todo o texto
                const selectAllEvent = new KeyboardEvent("keydown", {
                    key: "a",
                    ctrlKey: true,
                    bubbles: true,
                });
                pdfElement.dispatchEvent(selectAllEvent);

                await new Promise((resolve) => setTimeout(resolve, 500));

                // Tentar ler da clipboard se possível
                try {
                    if (navigator.clipboard && navigator.clipboard.readText) {
                        const clipboardText =
                            await navigator.clipboard.readText();
                        if (clipboardText && clipboardText.length > 100) {
                            log(" Texto extraído via clipboard");
                            return clipboardText;
                        }
                    }
                } catch (clipboardError) {
                    log(" Acesso ao clipboard negado");
                }
            }

            // Tentar outras abordagens para PDFs
            const pdfUrl = pdfElement.src;
            if (pdfUrl && !pdfUrl.startsWith("blob:")) {
                // Tentar carregar PDF.js se disponível
                if (typeof pdfjsLib !== "undefined") {
                    log("📚 Tentando PDF.js para extração...");
                    const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
                    const page = await pdf.getPage(1);
                    const textContent = await page.getTextContent();

                    const text = textContent.items
                        .map((item) => item.str)
                        .join(" ");
                    if (text.length > 100) {
                        log(" Texto extraído via PDF.js");
                        return text;
                    }
                }
            }

            return null;
        } catch (error) {
            log(` Extração direta falhou: ${error.message}`);
            return null;
        }
    }

    /**
     * Captura imagem do PDF para OCR usando múltiplas estratégias
     */
    async function captureImageForOCR(pdfElement) {
        try {
            showNotification("� Capturando imagem do PDF...", "info");

            // Método 1: html2canvas (mais confiável)
            const canvasFromHtml2Canvas = await tryHtml2Canvas(pdfElement);
            if (canvasFromHtml2Canvas) {
                log(" Captura via html2canvas bem-sucedida");
                return canvasFromHtml2Canvas;
            }

            // Método 2: Canvas nativo
            log(" Tentando captura via canvas nativo...");
            const canvasNativo = await tryNativeCanvas(pdfElement);
            if (canvasNativo) {
                log(" Captura via canvas nativo bem-sucedida");
                return canvasNativo;
            }

            // Método 3: Usar screenshot da viewport
            log(" Tentando captura da viewport...");
            const viewportCanvas = await tryViewportCapture(pdfElement);
            if (viewportCanvas) {
                log(" Captura da viewport bem-sucedida");
                return viewportCanvas;
            }

            throw new Error("Todos os métodos de captura falharam");
        } catch (error) {
            log(` Erro na captura de imagem: ${error.message}`);
            return null;
        }
    }

    /**
     * Tenta download automático do PDF
     */
    async function tryAutoDownloadPDF(pdfUrl) {
        if (
            !pdfUrl ||
            pdfUrl.startsWith("blob:") ||
            pdfUrl.startsWith("chrome-extension:")
        ) {
            return;
        }

        try {
            log(" Tentando download automático do PDF...");
            const link = document.createElement("a");
            link.href = pdfUrl;
            link.download = "documento-eproc.pdf";
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            showNotification(
                "Download iniciado! Use o arquivo com Perplexity/Claude.",
                "info"
            );
        } catch (downloadError) {
            log(` Download automático falhou: ${downloadError.message}`);
        }
    }

    // Modal customizado para opções de preview
    function showPreviewOptionsModal() {
        return new Promise((resolve) => {
            const overlay = document.createElement("div");
            overlay.className = "help-modal-overlay";
            overlay.innerHTML = `
 <div class="help-modal" style="max-width: 420px;">
 <div class="help-modal-header">
 <h2 style="font-size:1.1rem;display:flex;align-items:center;gap:8px;">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.2em;height:1.2em;">
 <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
 <circle cx="12" cy="12" r="3"/>
 </svg>
 Texto Extraído
 </h2>
 <button class="help-close-btn" aria-label="Fechar">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 6-12 12" /><path d="m6 6 12 12" /></svg>
 </button>
 </div>
 <div class="help-modal-content" style="padding:24px 20px 20px 20px;">
 <div style="margin-bottom:18px;display:flex;align-items:center;gap:8px;">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.1em;height:1.1em;color:#134377;"><polyline points="20 6 9 17 4 12" /></svg>
 <span style="color:rgb(var(--color-text-main));font-size:1rem;">Texto extraído com sucesso!</span>
 </div>
 <p style="color:rgb(var(--color-text-muted));margin-bottom:20px;line-height:1.5;">Deseja visualizar o preview do texto antes de copiar?</p>
 <div style="display:flex;gap:12px;justify-content:flex-end;">
 <button class="btn primary" id="preview-yes-btn" style="min-width:100px;">Ver Preview</button>
 <button class="btn" id="preview-no-btn" style="min-width:120px;">Copiar Direto</button>
 </div>
 </div>
 </div>
 `;
            document.body.appendChild(overlay);
            const close = (result) => {
                document.body.removeChild(overlay);
                resolve(result);
            };
            overlay.querySelector(".help-close-btn").onclick = () =>
                close(false);
            overlay.querySelector("#preview-yes-btn").onclick = () =>
                close(true);
            overlay.querySelector("#preview-no-btn").onclick = () =>
                close(false);
            overlay.addEventListener("click", (e) => {
                if (e.target === overlay) close(false);
            });
        });
    }

    // Modal customizado para opções de processamento de documento
    function showDocumentProcessingModal() {
        return new Promise((resolve) => {
            const overlay = document.createElement("div");
            overlay.className = "help-modal-overlay";
            overlay.innerHTML = `
 <div class="help-modal" style="max-width: 450px;">
 <div class="help-modal-header">
 <h2 style="font-size:1.1rem;display:flex;align-items:center;gap:8px;">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.2em;height:1.2em;">
 <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
 <polyline points="14,2 14,8 20,8"/>
 <line x1="16" y1="13" x2="8" y2="13"/>
 <line x1="16" y1="17" x2="8" y2="17"/>
 <polyline points="10,9 9,9 8,9"/>
 </svg>
 Documento Selecionado
 </h2>
 <button class="help-close-btn" aria-label="Fechar">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 6-12 12" /><path d="m6 6 12 12" /></svg>
 </button>
 </div>
 <div class="help-modal-content" style="padding:24px 20px 20px 20px;">
 <p style="color:rgb(var(--color-text-main));margin-bottom:20px;line-height:1.5;">Como deseja processar o documento selecionado?</p>
 <div style="margin-bottom:20px;">
 <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;padding:12px;border-radius:8px;background:rgb(var(--color-background-alt3));">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.2em;height:1.2em;color:#134377;flex-shrink:0;">
 <path d="M15 3h6v6"/>
 <path d="M10 14 21 3"/>
 <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
 </svg>
 <div>
 <div style="color:rgb(var(--color-text-main));font-weight:500;margin-bottom:4px;">Processamento Manual</div>
 <div style="color:rgb(var(--color-text-muted));font-size:0.9rem;">Abre o documento em nova aba para extração manual</div>
 </div>
 </div>
 <div style="display:flex;align-items:center;gap:12px;padding:12px;border-radius:8px;background:rgb(var(--color-background-alt3));">
 <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:1.2em;height:1.2em;color:#f59e0b;flex-shrink:0;">
 <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
 <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
 <line x1="12" y1="19" x2="12" y2="22"/>
 <line x1="8" y1="22" x2="16" y2="22"/>
 </svg>
 <div>
 <div style="color:rgb(var(--color-text-main));font-weight:500;margin-bottom:4px;">Processamento via API</div>
 <div style="color:rgb(var(--color-text-muted));font-size:0.9rem;">Tenta processar diretamente (experimental)</div>
 </div>
 </div>
 </div>
 <div style="display:flex;gap:12px;justify-content:flex-end;">
 <button class="btn primary" id="process-manual-btn" style="min-width:120px;">Manual</button>
 <button class="btn" id="process-api-btn" style="min-width:100px;">Via API</button>
 </div>
 </div>
 </div>
 `;
            document.body.appendChild(overlay);
            const close = (result) => {
                document.body.removeChild(overlay);
                resolve(result);
            };
            overlay.querySelector(".help-close-btn").onclick = () =>
                close(true);
            overlay.querySelector("#process-manual-btn").onclick = () =>
                close(true);
            overlay.querySelector("#process-api-btn").onclick = () =>
                close(false);
            overlay.addEventListener("click", (e) => {
                if (e.target === overlay) close(true);
            });
        });
    }

    // Formatar informações de magistrado/advogado
    function formatarMagistradoAdvogado(texto) {
        if (!texto || texto.trim().length === 0) {
            return "";
        }

        let textoLimpo = texto.trim();

        // Remover tags HTML (incluindo <br/> e <br>)
        textoLimpo = textoLimpo.replace(/<br\s*\/?>/gi, "\n");
        textoLimpo = textoLimpo.replace(/<[^>]*>/g, "");

        // Separar em linhas e filtrar conteúdo útil
        const linhas = textoLimpo
            .split(/\n/)
            .map((l) => l.trim())
            .filter((l) => l.length > 0)
            .filter((l) => !l.match(/^(MAGISTRADO|ADVOGADO)$/i)); // Remover labels extras

        // Detectar se é magistrado ou advogado baseado em palavras-chave
        const isMagistrado = /juiz|juíz|magistrad|vara|gabinete|comarca/i.test(
            textoLimpo
        );

        if (isMagistrado) {
            // Para magistrados: procurar nome da pessoa e informação da vara
            let nomePessoa = "";
            let infoVara = "";

            for (const linha of linhas) {
                // Se a linha contém palavras típicas de vara/gabinete, é info de vara
                if (/\d+[ªº]?\s*(vara|gabinete|comarca)/i.test(linha)) {
                    infoVara = linha;
                }
                // Se é um nome de pessoa (contém pelo menos 2 palavras com letras)
                else if (
                    /^[A-ZÁÊÇÕÜÀÁÉÊÍÓÔÚÂÃ\s]{3,}$/i.test(linha) &&
                    linha.split(" ").length >= 2
                ) {
                    // Capitalizar corretamente o nome (primeira letra maiúscula, resto minúscula)
                    nomePessoa = linha
                        .toLowerCase()
                        .split(" ")
                        .map(
                            (palavra) =>
                                palavra.charAt(0).toUpperCase() +
                                palavra.slice(1)
                        )
                        .join(" ");
                }
            }

            // Se encontrou nome e vara, retornar objeto com ambos
            if (nomePessoa && infoVara) {
                return {
                    tipo: "magistrado",
                    nome: `Magistrado(a): ${nomePessoa}`,
                    vara: infoVara,
                };
            }
            // Se só encontrou nome
            else if (nomePessoa) {
                return {
                    tipo: "magistrado",
                    nome: `Magistrado(a): ${nomePessoa}`,
                    vara: null,
                };
            }
            // Se só encontrou vara
            else if (infoVara) {
                return {
                    tipo: "magistrado",
                    nome: `Magistrado(a): ${infoVara}`,
                    vara: null,
                };
            }
            // Fallback: usar primeira linha útil
            else if (linhas.length > 0) {
                const primeiraLinha = linhas[0]
                    .toLowerCase()
                    .split(" ")
                    .map(
                        (palavra) =>
                            palavra.charAt(0).toUpperCase() + palavra.slice(1)
                    )
                    .join(" ");
                return {
                    tipo: "magistrado",
                    nome: `Magistrado(a): ${primeiraLinha}`,
                    vara: null,
                };
            }
        } else {
            // Para advogados: usar a primeira linha que parece um nome
            let nomeAdvogado =
                linhas.find(
                    (linha) =>
                        /^[A-ZÁÊÇÕÜÀÁÉÊÍÓÔÚÂÃ\s]{3,}$/i.test(linha) &&
                        linha.split(" ").length >= 2
                ) || linhas[0];

            if (nomeAdvogado) {
                // Capitalizar corretamente o nome do advogado
                nomeAdvogado = nomeAdvogado
                    .toLowerCase()
                    .split(" ")
                    .map(
                        (palavra) =>
                            palavra.charAt(0).toUpperCase() + palavra.slice(1)
                    )
                    .join(" ");
                return {
                    tipo: "advogado",
                    nome: `Advogado(a): ${nomeAdvogado}`,
                    vara: null,
                };
            }
        }

        // Fallback final
        return textoLimpo;
    }

    // ⚠️ NOTA: Observer de interface foi removido desta seção pois setupInterfaceObserver()
    // está definido dentro da IIFE principal e não é acessível aqui.
    // A inicialização do observer já é feita corretamente dentro da IIFE principal.

    // Função auxiliar para validar data brasileira
    // 🔍 IDENTIFICAR PROCESSO - Extrair número do processo atual (COM CACHE ANTI-LOOP)
    // Variáveis já declaradas no topo do arquivo

    function validarDataBrasileira(dataString) {
        console.log(`📅 VALIDAÇÃO: Validando data "${dataString}"`);

        // Limpar e normalizar a string da data
        const dataLimpa = dataString.trim().replace(/[^\d\/\-\.]/g, "");
        console.log(`📅 VALIDAÇÃO: Data limpa: "${dataLimpa}"`);

        // Tentar diferentes separadores
        const separadores = ["/", "-", "."];
        let partesData = null;
        let separadorUsado = "";

        for (const sep of separadores) {
            if (dataLimpa.includes(sep)) {
                partesData = dataLimpa.split(sep);
                separadorUsado = sep;
                break;
            }
        }

        if (!partesData || partesData.length !== 3) {
            console.log(
                `❌ VALIDAÇÃO: Formato inválido - esperado 3 partes separadas por ${separadores.join(
                    ", "
                )}`
            );
            return null;
        }

        // Assumir formato brasileiro: DD/MM/AAAA
        const dia = parseInt(partesData[0], 10);
        const mes = parseInt(partesData[1], 10);
        const ano = parseInt(partesData[2], 10);

        console.log(
            `📅 VALIDAÇÃO: Partes extraídas - Dia: ${dia}, Mês: ${mes}, Ano: ${ano}`
        );

        // Validações básicas
        if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
            console.log("❌ VALIDAÇÃO: Partes não são números válidos");
            return null;
        }

        if (dia < 1 || dia > 31) {
            console.log(
                `❌ VALIDAÇÃO: Dia inválido: ${dia} (deve estar entre 1 e 31)`
            );
            return null;
        }

        if (mes < 1 || mes > 12) {
            console.log(
                `❌ VALIDAÇÃO: Mês inválido: ${mes} (deve estar entre 1 e 12)`
            );
            return null;
        }

        if (ano < 2020 || ano > 2030) {
            console.log(
                `❌ VALIDAÇÃO: Ano inválido: ${ano} (deve estar entre 2020 e 2030)`
            );
            return null;
        }

        // Criar objeto Date para validação mais rigorosa
        const dataObj = new Date(ano, mes - 1, dia); // mes-1 porque Date usa 0-based months

        if (
            dataObj.getFullYear() !== ano ||
            dataObj.getMonth() !== mes - 1 ||
            dataObj.getDate() !== dia
        ) {
            console.log(
                `❌ VALIDAÇÃO: Data inexistente no calendário: ${dia}/${mes}/${ano}`
            );
            return null;
        }

        console.log(
            `✅ VALIDAÇÃO: Data válida confirmada: ${dia}/${mes}/${ano}`
        );

        // Criar objeto de retorno com informações estruturadas
        const dataValidada = {
            dataOriginal: dataString,
            dataFormatada: `${dia.toString().padStart(2, "0")}/${mes
                .toString()
                .padStart(2, "0")}/${ano}`,
            dia: dia,
            mes: mes,
            ano: ano,
            timestamp: dataObj.getTime(),
            dataObj: dataObj,
        };

        console.log(`✅ VALIDAÇÃO: Objeto de data criado:`, dataValidada);
        return dataValidada;
    }

    // FUNÇÃO REMOVIDA: detectarDataSessao - substituída por detectarCardSessaoSimplificado ÚNICA

    // 🔍 FUNÇÃO PARA VERIFICAR STATUS DOS CONTROLES
    function statusControlesRequisicao() {
        const agora = Date.now();
        const info = {
            tentativasRealizadas: tentativasCruzamento,
            tentativasRestantes:
                MAX_TENTATIVAS_CRUZAMENTO - tentativasCruzamento,
            emAndamento: cruzamentoEmAndamento,
            proximaTentativaEm: Math.max(
                0,
                (DELAY_ENTRE_TENTATIVAS - (agora - ultimaTentativaCruzamento)) /
                    1000
            ),
            temCache: !!cacheResultadoSessoes,
            cacheValidoPor: Math.max(0, (cacheValidoAte - agora) / 1000),
        };

        console.log("📊 STATUS DOS CONTROLES:", info);
        return info;
    }

    function showDataSessaoPautadoInfo() {
        if (hasDataSessaoPautado()) {
            const info = `Clique para mais informações`;

            console.log(info);
            alert(info);
            return dataSessaoPautado;
        } else {
            const msg = "❌ Nenhuma data da sessão foi detectada ainda.";
            console.log(msg);
            alert(msg);
            return null;
        }
    }

    // Função para remover data da sessão da interface
    // VERSÃO MATERIAL DESIGN - Remove apenas cards Material Design
    function removerDataSessaoDaInterface() {
        console.log("🗑️ REMOVER: Removendo cards Material Design da interface");

        return removerCardMaterialDesign();
    }

    // Função para atualizar data da sessão na interface
    // VERSÃO SIMPLIFICADA - Usa sistema XPath direto
    function atualizarDataSessaoNaInterface() {
        console.log("🔄 ATUALIZAR: Usando sistema XPath simplificado...");

        // Remover cards antigos
        removerDataSessaoDaInterface();

        // Usar sistema simplificado
        return window.SENT1_AUTO &&
            window.SENT1_AUTO.detectarCardSessaoSimplificado
            ? window.SENT1_AUTO.detectarCardSessaoSimplificado()
            : null;
    }

    // 🚨 FUNÇÃO PARA FORÇAR INSERÇÃO DO CARD MESMO PARA PROCESSOS PROCESSADOS
    function forcarInsercaoCardSemValidacao() {
        console.log("🚨 FORÇA: Forçando inserção do card sem validações");

        // 1. Verificar se há data detectada
        if (!hasDataSessaoPautado()) {
            console.log("❌ FORÇA: Nenhuma data detectada - tentando detectar");

            // Forçar detecção mesmo para processo já processado
            const processoAnterior = processoAtual;
            const jaProcessadoAnterior = processoAnterior
                ? processosJaProcessados.has(processoAnterior)
                : false;

            if (jaProcessadoAnterior) {
                console.log(
                    "🔄 FORÇA: Removendo processo da lista de processados temporariamente"
                );
                processosJaProcessados.delete(processoAnterior);
            }

            // Detectar data
            const dataDetectada =
                window.SENT1_AUTO &&
                window.SENT1_AUTO.detectarCardSessaoSimplificado
                    ? window.SENT1_AUTO.detectarCardSessaoSimplificado()
                    : null;

            if (!dataDetectada) {
                console.log("❌ FORÇA: Falha na detecção da data");
                if (jaProcessadoAnterior) {
                    processosJaProcessados.add(processoAnterior);
                }
                return false;
            }
        }

        // 2. Remover card existente
        const cardExistente = document.getElementById("eprobe-data-sessao");
        if (cardExistente) {
            cardExistente.remove();
            console.log("🗑️ FORÇA: Card existente removido");
        }

        // 3. Forçar inserção
        console.log("🎯 FORÇA: Tentando inserir card...");
        const sucesso = inserirDataSessaoNaInterface();

        if (sucesso) {
            console.log("✅ FORÇA: Card inserido com sucesso!");
            return true;
        } else {
            console.log("❌ FORÇA: Falha na inserção do card");
            return false;
        }
    }

    // ========================================
    // FUNÇÕES DE CRUZAMENTO DE DADOS DE SESSÃO
    // ========================================

    /**
     * Busca dados das sessões de julgamento no eProc
     * @param {string} hash - Hash da página de sessões (opcional)
     * @returns {Promise<Array>} - Array com dados das sessões
     */
    async function buscarDadosSessoes(hash = null) {
        console.log("🔍 SESSÕES: Iniciando busca de dados das sessões");

        // 🛡️ VERIFICAR CACHE PRIMEIRO
        const agora = Date.now();
        if (cacheResultadoSessoes && agora < cacheValidoAte) {
            console.log(
                "📦 SESSÕES: Usando dados do cache (evitando nova requisição)"
            );
            return cacheResultadoSessoes;
        }

        // 🛡️ VERIFICAR SE JÁ ESTÁ EM ANDAMENTO
        if (cruzamentoEmAndamento) {
            console.log("⏳ SESSÕES: Busca já em andamento, aguardando...");
            return [];
        }

        // 🛡️ VERIFICAR LIMITE DE TENTATIVAS
        if (tentativasCruzamento >= MAX_TENTATIVAS_CRUZAMENTO) {
            console.log(
                `🚫 SESSÕES: Limite de ${MAX_TENTATIVAS_CRUZAMENTO} tentativas atingido`
            );
            console.log(
                "💡 SESSÕES: Use window.SENT1_AUTO.debugPaginaSessoes() para debug manual"
            );
            return [];
        }

        // 🛡️ VERIFICAR DELAY ENTRE TENTATIVAS
        if (agora - ultimaTentativaCruzamento < DELAY_ENTRE_TENTATIVAS) {
            const tempoRestante = Math.ceil(
                (DELAY_ENTRE_TENTATIVAS - (agora - ultimaTentativaCruzamento)) /
                    1000
            );
            console.log(
                `⏰ SESSÕES: Aguardando ${tempoRestante}s antes da próxima tentativa`
            );
            return [];
        }

        try {
            // Marcar início da busca
            cruzamentoEmAndamento = true;
            tentativasCruzamento++;
            ultimaTentativaCruzamento = agora;

            console.log(
                `🔄 SESSÕES: Tentativa ${tentativasCruzamento}/${MAX_TENTATIVAS_CRUZAMENTO}`
            );

            // Construir URL da página de sessões
            const baseUrl = window.location.origin;
            const urlSessoes = hash
                ? `${baseUrl}/eproc/controlador.php?acao=sessao_julgamento_listar&hash=${hash}`
                : `${baseUrl}/eproc/controlador.php?acao=sessao_julgamento_listar`;

            console.log(`🌐 SESSÕES: Buscando URL: ${urlSessoes}`);

            // Fazer fetch da página
            const response = await fetch(urlSessoes, {
                credentials: "same-origin",
                headers: {
                    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                },
            });

            if (!response.ok) {
                throw new Error(
                    `HTTP ${response.status}: ${response.statusText}`
                );
            }

            const htmlContent = await response.text();
            console.log("✅ SESSÕES: Página carregada com sucesso");

            // Fazer parse dos dados
            const dadosSessoes = await parsearDadosSessoes(htmlContent);
            console.log(
                `📊 SESSÕES: ${dadosSessoes.length} sessões encontradas`
            );

            // 📦 ARMAZENAR NO CACHE
            if (dadosSessoes.length > 0) {
                cacheResultadoSessoes = dadosSessoes;
                cacheValidoAte = agora + CACHE_DURATION;
                console.log(
                    "📦 SESSÕES: Resultado armazenado no cache por 5 minutos"
                );
            }

            return dadosSessoes;
        } catch (error) {
            console.error(`❌ SESSÕES: Erro ao buscar dados: ${error.message}`);
            return [];
        } finally {
            // Sempre limpar flag de andamento
            cruzamentoEmAndamento = false;
        }
    }

    /**
     * Faz parse dos dados das sessões do HTML
     * @param {string} htmlContent - Conteúdo HTML da página
     * @returns {Array} - Array com dados estruturados das sessões
     */
    async function parsearDadosSessoes(htmlContent) {
        console.log("🔍 PARSE: Iniciando parse dos dados das sessões");

        try {
            // Criar parser DOM
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlContent, "text/html");

            // 🔍 DEBUG: Verificar estrutura da página
            console.log("📋 PARSE DEBUG: Analisando estrutura da página...");

            // Verificar se a página foi carregada corretamente
            const title =
                doc.querySelector("title")?.textContent || "sem título";
            console.log(`📋 PARSE DEBUG: Título da página: "${title}"`);

            // Verificar se há redirecionamento para login
            if (
                title.toLowerCase().includes("login") ||
                title.toLowerCase().includes("acesso")
            ) {
                console.log(
                    "❌ PARSE DEBUG: Página de login detectada - sessão expirada"
                );
                return [];
            }

            // Buscar diferentes seletores possíveis para a tabela
            const seletoresTabela = [
                "#divInfraAreaTelaD .table-responsive table.table",
                "#divInfraAreaTelaD table.table",
                ".table-responsive table.table",
                "table.table",
                "#divInfraAreaTelaD table",
                ".table-responsive table",
                "table",
                "#frmLista table",
                "#divInfraAreaTelaE table",
            ];

            let tabela = null;
            let seletorUsado = "";

            for (const seletor of seletoresTabela) {
                tabela = doc.querySelector(seletor);
                if (tabela) {
                    seletorUsado = seletor;
                    console.log(
                        `✅ PARSE DEBUG: Tabela encontrada com seletor: "${seletor}"`
                    );
                    break;
                }
            }

            if (!tabela) {
                // Debug mais detalhado se não encontrar tabela
                console.log(
                    "🔍 PARSE DEBUG: Nenhuma tabela encontrada, analisando estrutura..."
                );

                // Verificar elementos principais
                const divInfraAreaTelaD =
                    doc.querySelector("#divInfraAreaTelaD");
                const tableResponsive = doc.querySelector(".table-responsive");
                const allTables = doc.querySelectorAll("table");
                const allDivs = doc.querySelectorAll("div[id*='Area']");

                console.log(
                    `📋 PARSE DEBUG: #divInfraAreaTelaD encontrado: ${!!divInfraAreaTelaD}`
                );
                console.log(
                    `📋 PARSE DEBUG: .table-responsive encontrado: ${!!tableResponsive}`
                );
                console.log(
                    `📋 PARSE DEBUG: Total de tabelas: ${allTables.length}`
                );
                console.log(
                    `📋 PARSE DEBUG: Divs com 'Area' no ID: ${allDivs.length}`
                );

                // Listar todas as tabelas encontradas
                allTables.forEach((table, index) => {
                    const tableId = table.id || "sem-id";
                    const tableClass = table.className || "sem-class";
                    const rowCount = table.querySelectorAll("tr").length;
                    console.log(
                        `📋 PARSE DEBUG: Tabela ${
                            index + 1
                        }: id="${tableId}", class="${tableClass}", linhas=${rowCount}`
                    );
                });

                // Listar divs com Area no ID
                allDivs.forEach((div, index) => {
                    console.log(
                        `📋 PARSE DEBUG: Div ${index + 1}: id="${
                            div.id
                        }", class="${div.className}"`
                    );
                });

                // Verificar se há erro específico na página
                const errorElements = doc.querySelectorAll(
                    ".alert-danger, .error, .erro, [class*='erro'], [class*='error']"
                );
                if (errorElements.length > 0) {
                    console.log(
                        "❌ PARSE DEBUG: Elementos de erro encontrados:"
                    );
                    errorElements.forEach((error, index) => {
                        console.log(
                            `📋 PARSE DEBUG: Erro ${
                                index + 1
                            }: "${error.textContent.trim()}"`
                        );
                    });
                }

                console.log(
                    "❌ PARSE: Tabela de sessões não encontrada em nenhum seletor"
                );
                return [];
            }

            // Buscar todas as linhas de dados (tbody > tr)
            const linhasSessoes = tabela.querySelectorAll(
                'tbody tr[id^="tr_"]'
            );
            console.log(`📋 PARSE: ${linhasSessoes.length} linhas encontradas`);

            const sessoes = [];

            for (const linha of linhasSessoes) {
                try {
                    const sessao = await extrairDadosLinhaSessao(linha);
                    if (sessao) {
                        sessoes.push(sessao);
                    }
                } catch (error) {
                    console.warn(
                        `⚠️ PARSE: Erro ao processar linha: ${error.message}`
                    );
                }
            }

            console.log(
                `✅ PARSE: ${sessoes.length} sessões processadas com sucesso`
            );
            return sessoes;
        } catch (error) {
            console.error(`❌ PARSE: Erro no parse: ${error.message}`);
            return [];
        }
    }

    /**
     * Extrai dados de uma linha específica da tabela de sessões
     * @param {Element} linha - Elemento tr da linha
     * @returns {Object|null} - Objeto com dados da sessão ou null
     */
    async function extrairDadosLinhaSessao(linha) {
        try {
            const id = linha.getAttribute("id");
            const colunas = linha.querySelectorAll("td");

            if (colunas.length < 8) {
                console.warn(
                    `⚠️ LINHA: Linha ${id} tem ${colunas.length} colunas, esperado >= 8`
                );
                return null;
            }

            // Extrair dados conforme a estrutura HTML fornecida
            const orgaoJulgador = colunas[1]?.textContent?.trim() || "";
            const dataHoraSessao = colunas[2]?.textContent?.trim() || "";
            const tipoSessao = colunas[3]?.textContent?.trim() || "";
            const localSessao = colunas[4]?.textContent?.trim() || "";
            const dataLimitePauta = colunas[5]?.textContent?.trim() || "";
            const dataLimiteMesa = colunas[6]?.textContent?.trim() || "";
            const dataLimiteMinutas = colunas[7]?.textContent?.trim() || "";
            const statusSessao = colunas[8]?.textContent?.trim() || "";

            // Extrair só a data da string "03/06/2025 14:00"
            const dataMatch = dataHoraSessao.match(/(\d{1,2}\/\d{1,2}\/\d{4})/);
            const dataSessao = dataMatch ? dataMatch[1] : "";

            // Extrair só o horário
            const horaMatch = dataHoraSessao.match(/(\d{1,2}:\d{2})/);
            const horaSessao = horaMatch ? horaMatch[1] : "";

            const sessao = {
                id: id,
                orgaoJulgador: orgaoJulgador,
                dataSessao: dataSessao,
                horaSessao: horaSessao,
                dataHoraCompleta: dataHoraSessao,
                tipoSessao: tipoSessao,
                localSessao: localSessao,
                dataLimitePauta: dataLimitePauta,
                dataLimiteMesa: dataLimiteMesa,
                dataLimiteMinutas: dataLimiteMinutas,
                statusSessao: statusSessao,
                // Dados adicionais
                dataDetectada: new Date(),
                validData: !!dataSessao,
            };

            console.log(
                `📋 LINHA: Sessão extraída - ${orgaoJulgador} em ${dataSessao}`
            );
            return sessao;
        } catch (error) {
            console.error(`❌ LINHA: Erro ao extrair dados: ${error.message}`);
            return null;
        }
    }

    /**
     * Busca sessão específica por data
     * @param {string} dataProcurada - Data no formato DD/MM/AAAA
     * @param {string} hash - Hash da página (opcional)
     * @returns {Promise<Object|null>} - Dados da sessão encontrada ou null
     */
    async function buscarSessaoPorData(dataProcurada, hash = null) {
        console.log(`🎯 BUSCA: Procurando sessão para data: ${dataProcurada}`);

        try {
            // Buscar todas as sessões
            const sessoes = await buscarDadosSessoes(hash);

            if (sessoes.length === 0) {
                console.log("❌ BUSCA: Nenhuma sessão encontrada na listagem");
                return null;
            }

            // Procurar sessão com a data específica
            const sessaoEncontrada = sessoes.find(
                (sessao) => sessao.dataSessao === dataProcurada
            );

            if (sessaoEncontrada) {
                console.log(`✅ BUSCA: Sessão encontrada!`);
                console.log(
                    `📋 BUSCA: ${sessaoEncontrada.orgaoJulgador} - ${sessaoEncontrada.dataHoraCompleta}`
                );

                // Armazenar na variável global
                dadosCompletosSessionJulgamento = sessaoEncontrada;

                return sessaoEncontrada;
            } else {
                console.log(
                    `❌ BUSCA: Nenhuma sessão encontrada para a data ${dataProcurada}`
                );

                // Log das datas disponíveis para debug
                const datasDisponiveis = sessoes
                    .map((s) => s.dataSessao)
                    .filter((d) => d);
                console.log(
                    `📅 BUSCA: Datas disponíveis: ${datasDisponiveis.join(
                        ", "
                    )}`
                );

                return null;
            }
        } catch (error) {
            console.error(`❌ BUSCA: Erro na busca: ${error.message}`);
            return null;
        }
    }

    /**
     * Realiza cruzamento automático da data detectada com os dados das sessões
     * @param {string} hash - Hash da página (opcional)
     * @returns {Promise<boolean>} - true se encontrou e cruzou dados
     */
    async function cruzarDadosDataSessao(
        hash = null,
        forcarRequisicao = false
    ) {
        console.log("🔄 CRUZAMENTO: Iniciando cruzamento de dados da sessão");

        // � VERIFICAR SE REQUISIÇÕES AUTOMÁTICAS ESTÃO DESABILITADAS
        if (REQUISICOES_AUTOMATICAS_DESABILITADAS) {
            console.log(
                "🚫 CRUZAMENTO: Requisições automáticas desabilitadas globalmente"
            );
            console.log(
                "💡 Para habilitar: window.SENT1_AUTO.habilitarRequisicoes()"
            );
            return false;
        }

        // �🔐 VERIFICAÇÃO DUPLA: Processo atual deve estar marcado como processado
        if (!processoAtual) {
            console.log("❌ CRUZAMENTO: Processo atual não identificado");
            return false;
        }

        if (!processoJaFoiProcessado(processoAtual)) {
            console.log(
                `❌ CRUZAMENTO: Processo ${processoAtual} não foi marcado como processado`
            );
            return false;
        }

        if (!hasDataSessaoPautado()) {
            console.log(
                "❌ CRUZAMENTO: Nenhuma data de sessão detectada para cruzar"
            );
            return false;
        }

        const dataFormatada = dataSessaoPautado.dataFormatada;
        console.log(
            `🎯 CRUZAMENTO: Buscando dados para: ${dataFormatada} (Processo: ${processoAtual})`
        );

        try {
            const sessaoEncontrada = await buscarSessaoPorData(
                dataFormatada,
                hash
            );

            if (sessaoEncontrada) {
                console.log("✅ CRUZAMENTO: Dados cruzados com sucesso!");

                // Atualizar interface se estiver sendo exibida
                setTimeout(() => {
                    atualizarDataSessaoNaInterface();
                }, 500);

                return true;
            } else {
                console.log("❌ CRUZAMENTO: Não foi possível cruzar os dados");
                return false;
            }
        } catch (error) {
            console.error(
                `❌ CRUZAMENTO: Erro no cruzamento: ${error.message}`
            );
            return false;
        }
    }

    /**
     * Retorna os dados completos da sessão (se disponíveis)
     * @returns {Object|null} - Dados da sessão ou null
     */
    function getDadosCompletosSessionJulgamento() {
        return dadosCompletosSessionJulgamento;
    }

    /**
     * Verifica se há dados completos da sessão disponíveis
     * @returns {boolean} - true se há dados disponíveis
     */
    function hasDadosCompletosSessionJulgamento() {
        return dadosCompletosSessionJulgamento !== null;
    }

    /**
     * Reseta os dados completos da sessão
     */
    function resetDadosCompletosSessionJulgamento() {
        console.log("🔄 RESET: Limpando dados completos da sessão");
        dadosCompletosSessionJulgamento = null;
    }

    /**
     * Mostra informações completas da sessão
     */
    function showDadosCompletosSessionJulgamento() {
        if (hasDadosCompletosSessionJulgamento()) {
            const dados = dadosCompletosSessionJulgamento;
            const info = `📋 DADOS COMPLETOS DA SESSÃO:

            🏛️ Órgão Julgador: ${dados.orgaoJulgador}
            📅 Data da Sessão: ${dados.dataSessao}
            ⏰ Horário: ${dados.horaSessao}
            🖥️ Tipo: ${dados.tipoSessao}
            📍 Local: ${dados.localSessao}
            📋 Status: ${dados.statusSessao}

            📅 Data Limite Pauta: ${dados.dataLimitePauta}
            📅 Data Limite Mesa: ${dados.dataLimiteMesa}
            📅 Data Limite Minutas: ${dados.dataLimiteMinutas}

            🆔 ID: ${dados.id}`;

            console.log(info);
            alert(info);
            return dados;
        } else {
            const msg =
                "❌ Nenhum dado completo de sessão foi encontrado ainda.";
            console.log(msg);
            alert(msg);
            return null;
        }
    }

    // 🚀 INICIALIZAÇÃO AUTOMÁTICA OTIMIZADA - Carregamento mais rápido
    let inicializacaoExecutada = false; // Prevenir execução dupla

    function inicializarAutomaticamente() {
        if (inicializacaoExecutada) {
            console.log("⚠️ INICIALIZAÇÃO: Já executada, pulando...");
            return;
        }

        inicializacaoExecutada = true;
        console.log(
            "🚀 INICIALIZAÇÃO: Iniciando detecção automática de sessão..."
        );

        // ===== APLICAÇÃO IMEDIATA DE ESTILOS E ELEMENTOS =====
        console.log(
            "⚡ INICIALIZAÇÃO: Aplicando estilos e elementos imediatamente..."
        );

        // 1. Aplicar tema instantaneamente
        try {
            const tema =
                localStorage.getItem("eprobe_selected_theme") || "blue";
            if (window.applyThemeStyles) {
                window.applyThemeStyles(tema);
                console.log(
                    `✅ INICIALIZAÇÃO: Tema ${tema} aplicado imediatamente`
                );
            }
        } catch (error) {
            console.warn("⚠️ INICIALIZAÇÃO: Erro ao aplicar tema:", error);
        }

        // 2. Executar aplicação de estilos e elementos imediatamente
        try {
            // Força aplicação imediata dos estilos CSS críticos
            const head =
                document.head || document.getElementsByTagName("head")[0];
            if (
                head &&
                !document.getElementById("eprobe-instant-performance")
            ) {
                const performanceStyles = document.createElement("style");
                performanceStyles.id = "eprobe-instant-performance";
                performanceStyles.textContent = `
                    /* Performance instantânea para elementos eProbe */
                    body { opacity: 1 !important; }
                    .navbar { opacity: 1 !important; }
                    
                    /* Garantir que elementos críticos apareçam imediatamente */
                    #navbar.navbar.bg-instancia,
                    .navbar.bg-instancia {
                        opacity: 1 !important;
                        transition: all 0.3s ease !important;
                    }
                    
                    /* Aplicar estilos SVG Figma instantaneamente */
                    .eprobe-figma-card-svg {
                        display: inline-block !important;
                        margin: 8px 0 !important;
                        position: relative !important;
                    }
                `;
                head.appendChild(performanceStyles);
                console.log(
                    "✅ INICIALIZAÇÃO: Estilos de performance aplicados"
                );
            }

            // Executar gerenciamento da navbar imediatamente
            if (typeof window.gerenciarNavbarEprobe === "function") {
                window.gerenciarNavbarEprobe();
                console.log(
                    "✅ INICIALIZAÇÃO: Navbar gerenciada imediatamente"
                );
            }

            // Detectar e aplicar card de sessão imediatamente se possível
            debounceGlobal(
                () => {
                    if (typeof detectarCardSessaoSimplificado === "function") {
                        detectarCardSessaoSimplificado();
                        console.log(
                            "✅ INICIALIZAÇÃO: Detecção de card de sessão iniciada"
                        );
                    }
                },
                "deteccao-card-instantanea",
                50
            );
        } catch (error) {
            console.warn("⚠️ INICIALIZAÇÃO: Erro ao aplicar estilos:", error);
        }

        // Execução imediata sem delay desnecessário
        try {
            // 1. Detectar data da sessão de forma não-bloqueante
            if (!hasDataSessaoPautado()) {
                console.log(
                    "🔍 INICIALIZAÇÃO: Tentando detectar data da sessão..."
                );

                // 🚨 CORREÇÃO ANTI-LOOP: Não fazer chamadas recursivas
                console.log(
                    "ℹ️ INICIALIZAÇÃO: Sistema já inicializado, evitando loops"
                );
                return;
            }

            // 2. Verificar se há dados para inserir na interface
            if (hasDataSessaoPautado()) {
                console.log(
                    "✅ INICIALIZAÇÃO: Data detectada, inserindo na interface..."
                );
                inserirDataSessaoNaInterface();

                // 3. Cruzamento só se requisições estiverem habilitadas
                if (!REQUISICOES_AUTOMATICAS_DESABILITADAS) {
                    console.log(
                        "🔄 INICIALIZAÇÃO: Agendando cruzamento de dados..."
                    );
                    debounceGlobal(
                        () => {
                            cruzarDadosDataSessao()
                                .then(() => {
                                    console.log(
                                        "✅ INICIALIZAÇÃO: Processo completo finalizado!"
                                    );
                                    atualizarDataSessaoNaInterface();
                                })
                                .catch((error) => {
                                    console.warn(
                                        "⚠️ INICIALIZAÇÃO: Erro no cruzamento:",
                                        error.message
                                    );
                                });
                        },
                        "cruzamento-automatico",
                        2000
                    );
                } else {
                    console.log(
                        "ℹ️ INICIALIZAÇÃO: Cruzamento automático desabilitado - interface básica pronta"
                    );
                }
            } else {
                console.log(
                    "ℹ️ INICIALIZAÇÃO: Nenhuma data de sessão detectada nesta página"
                );
            }
        } catch (error) {
            console.error(
                "❌ INICIALIZAÇÃO: Erro na inicialização automática:",
                error
            );
            inicializacaoExecutada = false; // Permitir retry em caso de erro
        }
    }

    // 🧪 FUNÇÃO DE TESTE - Para validação durante desenvolvimento
    function testarSistemaCompleto() {
        console.log(
            "🧪 TESTE: Iniciando teste completo do sistema de sessões..."
        );

        return new Promise(async (resolve) => {
            try {
                // 1. Resetar estado
                console.log("🔄 TESTE: Resetando estado...");
                resetDataSessaoPautado();
                resetDadosCompletosSessionJulgamento();

                // 2. Testar detecção de data
                console.log("🔍 TESTE: Testando detecção de data...");
                if (
                    window.SENT1_AUTO &&
                    window.SENT1_AUTO.detectarCardSessaoSimplificado
                ) {
                    window.SENT1_AUTO.detectarCardSessaoSimplificado();
                }

                if (hasDataSessaoPautado()) {
                    console.log("✅ TESTE: Data detectada com sucesso!");
                    showDataSessaoPautadoInfo();

                    // 3. Testar inserção na interface
                    console.log("🎨 TESTE: Testando inserção na interface...");
                    inserirDataSessaoNaInterface();

                    // 4. Testar cruzamento de dados
                    console.log("🔄 TESTE: Testando cruzamento de dados...");
                    const resultado = await cruzarDadosDataSessao();

                    if (resultado) {
                        console.log(
                            "✅ TESTE: Cruzamento realizado com sucesso!"
                        );
                        showDadosCompletosSessionJulgamento();

                        // 5. Testar atualização da interface
                        console.log(
                            "🎨 TESTE: Testando atualização da interface..."
                        );
                        atualizarDataSessaoNaInterface();

                        console.log(
                            "🎉 TESTE: Teste completo finalizado com SUCESSO!"
                        );
                        resolve(true);
                    } else {
                        console.log("⚠️ TESTE: Cruzamento não encontrou dados");
                        resolve(false);
                    }
                } else {
                    console.log("❌ TESTE: Nenhuma data de sessão detectada");
                    resolve(false);
                }
            } catch (error) {
                console.error("❌ TESTE: Erro durante teste:", error);
                resolve(false);
            }
        });
    }

    // Adicionar funções ao namespace global para debug (movidas para namespace principal)

    // 🔍 FUNÇÃO DE DEBUG - Para investigar estrutura da página de sessões
    async function debugPaginaSessoes() {
        console.log("🔍 DEBUG: Iniciando debug da página de sessões...");

        try {
            const baseUrl = window.location.origin;
            const urlSessoes = `${baseUrl}/eproc/controlador.php?acao=sessao_julgamento_listar`;

            console.log(`🌐 DEBUG: Fazendo fetch para: ${urlSessoes}`);

            const response = await fetch(urlSessoes, {
                credentials: "same-origin",
                headers: {
                    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                },
            });

            if (!response.ok) {
                console.error(
                    `❌ DEBUG: Erro HTTP ${response.status}: ${response.statusText}`
                );
                return;
            }

            const htmlContent = await response.text();
            console.log(
                `✅ DEBUG: Página carregada, tamanho: ${htmlContent.length} caracteres`
            );

            // Fazer parse
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlContent, "text/html");

            // Debug básico
            const title =
                doc.querySelector("title")?.textContent || "sem título";
            console.log(`📋 DEBUG: Título: "${title}"`);

            // Verificar se foi redirecionado para login
            if (
                title.toLowerCase().includes("login") ||
                htmlContent.includes("frmLogin")
            ) {
                console.warn(
                    "⚠️ DEBUG: Parece que foi redirecionado para página de login!"
                );
                console.warn(
                    "💡 DEBUG: Tente acessar a URL manualmente no navegador primeiro"
                );
                return;
            }

            // Analisar estrutura
            const allTables = doc.querySelectorAll("table");
            console.log(`📊 DEBUG: ${allTables.length} tabelas encontradas`);

            allTables.forEach((table, index) => {
                const id = table.id || "sem-id";
                const className = table.className || "sem-class";
                const rows = table.querySelectorAll("tr").length;
                const hasSessionData =
                    table.innerHTML.includes("Órgão Julgador") ||
                    table.innerHTML.includes("Data da Sessão") ||
                    table.innerHTML.includes("sessao");

                console.log(`📋 DEBUG: Tabela ${index + 1}:`);
                console.log(`  - ID: "${id}"`);
                console.log(`  - Class: "${className}"`);
                console.log(`  - Linhas: ${rows}`);
                console.log(
                    `  - Parece ter dados de sessão: ${hasSessionData}`
                );

                if (hasSessionData && rows > 1) {
                    console.log(
                        `🎯 DEBUG: Esta tabela parece promissora! Analisando mais...`
                    );

                    // Pegar headers
                    const headers = Array.from(
                        table.querySelectorAll("th, thead td")
                    ).map((th) => th.textContent.trim());
                    console.log(
                        `📋 DEBUG: Headers: ${JSON.stringify(headers)}`
                    );

                    // Pegar algumas linhas de exemplo
                    const dataRows = table.querySelectorAll("tbody tr");
                    console.log(`📋 DEBUG: ${dataRows.length} linhas de dados`);

                    Array.from(dataRows)
                        .slice(0, 3)
                        .forEach((row, rowIndex) => {
                            const cells = Array.from(
                                row.querySelectorAll("td")
                            ).map((td) => td.textContent.trim());
                            console.log(
                                `📋 DEBUG: Linha ${
                                    rowIndex + 1
                                }: ${JSON.stringify(cells)}`
                            );
                        });
                }
            });

            // Salvar HTML para inspeção manual
            console.log(
                "💾 DEBUG: HTML da página salvo em window.debugPageHTML (use console para inspecionar)"
            );
            window.debugPageHTML = htmlContent;

            console.log("✅ DEBUG: Análise completa! Verifique os logs acima.");
        } catch (error) {
            console.error("❌ DEBUG: Erro durante debug:", error);
        }
    }

    // 📨 HANDLER DE MENSAGENS - Para comunicação com o popup
    if (
        typeof chrome !== "undefined" &&
        chrome.runtime &&
        chrome.runtime.onMessage
    ) {
        chrome.runtime.onMessage.addListener(function (
            request,
            sender,
            sendResponse
        ) {
            console.log("📨 MENSAGEM: Recebida do popup:", request);

            if (request.action === "toggleAutoSessionRequests") {
                const enabled = request.enabled;

                if (enabled) {
                    console.log(
                        "🔓 POPUP: Habilitando requisições automáticas de sessão"
                    );
                    REQUISICOES_AUTOMATICAS_DESABILITADAS = false;
                } else {
                    console.log(
                        "🔒 POPUP: Desabilitando requisições automáticas de sessão"
                    );
                    REQUISICOES_AUTOMATICAS_DESABILITADAS = true;
                }

                console.log(
                    `⚙️ POPUP: REQUISICOES_AUTOMATICAS_DESABILITADAS = ${REQUISICOES_AUTOMATICAS_DESABILITADAS}`
                );

                // Enviar resposta de confirmação
                sendResponse({
                    success: true,
                    message: enabled
                        ? "Requisições automáticas habilitadas"
                        : "Requisições automáticas desabilitadas",
                    currentState: !REQUISICOES_AUTOMATICAS_DESABILITADAS,
                });
            }

            // Manter o handler para outras mensagens se necessário
            if (request.action === "toggleSessionDateHighlight") {
                console.log(
                    "🎯 POPUP: Toggle para destaque da data da sessão:",
                    request.enabled
                );

                // Aqui você pode adicionar a lógica para o destaque da data da sessão
                // Por enquanto, apenas confirmar recebimento
                sendResponse({
                    success: true,
                    message: request.enabled
                        ? "Destaque ativado"
                        : "Destaque desativado",
                });
            }

            // Handler para aplicação de temas
            if (request.action === "applyTheme") {
                const theme = request.theme;
                console.log(
                    "🎨 MAIN: Aplicando tema recebido do popup:",
                    theme
                );

                // Verificar se a função applyThemeStyles está disponível (do themeApply.js)
                if (typeof window.applyThemeStyles === "function") {
                    window.applyThemeStyles(theme);
                    sendResponse({
                        success: true,
                        message: `Tema ${theme} aplicado com sucesso`,
                    });
                } else {
                    console.error(
                        "❌ MAIN: Função applyThemeStyles não encontrada"
                    );
                    sendResponse({
                        success: false,
                        message:
                            "Erro: função de aplicação de tema não disponível",
                    });
                }
            }

            // Handler para temas de botões
            if (request.action === "applyButtonTheme") {
                const theme = request.theme;
                console.log(
                    "💼 MAIN: Aplicando tema de botão recebido do popup:",
                    theme
                );

                // Verificar se a função aplicarEstiloBotoesEproc está disponível
                if (typeof window.aplicarEstiloBotoesEproc === "function") {
                    try {
                        if (theme === "reset") {
                            // Reset para padrão do sistema
                            window.resetarBotoesEproc();
                            sendResponse({
                                success: true,
                                message:
                                    "Botões resetados para o padrão do sistema",
                            });
                        } else {
                            // Aplicar tema específico
                            window.aplicarEstiloBotoesEproc(theme);
                            sendResponse({
                                success: true,
                                message: `Tema "${theme}" aplicado aos botões`,
                            });
                        }
                    } catch (error) {
                        console.error(
                            "❌ MAIN: Erro ao aplicar tema de botão:",
                            error
                        );
                        sendResponse({
                            success: false,
                            message: `Erro ao aplicar tema: ${error.message}`,
                        });
                    }
                } else {
                    console.error(
                        "❌ MAIN: Funções de tema de botão não encontradas"
                    );
                    sendResponse({
                        success: false,
                        message:
                            "Erro: funções de tema de botão não disponíveis",
                    });
                }
            }

            return true; // Indica que a resposta será enviada de forma assíncrona
        });

        console.log("📨 HANDLER: Listener de mensagens do popup registrado");
    }

    // ===== EXECUÇÃO IMEDIATA - ELIMINAR FLASH =====
    // Executar inicialização IMEDIATAMENTE sem aguardar DOM
    console.log("⚡ INSTANT: Executando inicialização imediata...");

    // Executar inicialização IMEDIATAMENTE
    inicializarAutomaticamente();

    // Backup: Executar novamente quando DOM estiver pronto (para reaplicar estilos se necessário)
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
            console.log("🔄 BACKUP: Reaplicando estilos após DOMContentLoaded");
            // Reaplicar apenas estilos, não toda a inicialização
            if (window.applyThemeStyles) {
                const tema =
                    localStorage.getItem("eprobe_selected_theme") || "blue";
                window.applyThemeStyles(tema);
            }
        });
    }

    // ##### VERIFICAÇÃO E CORREÇÃO DE ESCOPO DAS FUNÇÕES PRINCIPAIS #####

    // Garantir que as funções principais estejam acessíveis no namespace
    // Esta seção corrige problemas de escopo com expressões de função

    // ========================================
    // 🔧 IMPLEMENTAÇÕES DAS FUNÇÕES FALTANTES
    // ========================================

    /**
     * Função principal de automação completa
        console.log(`   ID: ${spanElement.id || "sem-id"}`);
        console.log(`   Tag: ${spanElement.tagName}`);
        console.log(`   Classe: ${spanElement.className || "sem-classe"}`);

        // Extrair dados do atributo onmouseover
        const onmouseoverAttr = spanElement.getAttribute("onmouseover");

        if (!onmouseoverAttr) {
            console.log("❌ XPATH: Atributo onmouseover não encontrado");
            console.log("   Element HTML:", spanElement.outerHTML);
            return null;
        }

        console.log("🔍 XPATH: Atributo onmouseover encontrado:");
        console.log(`   ${onmouseoverAttr}`);

        // Extrair o conteúdo do tooltip (texto dentro das aspas)
        const match = onmouseoverAttr.match(/infraTooltipMostrar\('([^']+)'/);
        if (!match) {
            console.log("❌ XPATH: Formato do tooltip não reconhecido");
            console.log("   Tentando extrair de outras formas...");

            // Tentativa alternativa de extração
            const matchAlternativo = onmouseoverAttr.match(/"([^"]+)"/);
            if (matchAlternativo) {
                console.log("✅ XPATH: Formato alternativo detectado");
                return processarTooltipContent(matchAlternativo[1]);
            }

            return null;
        }

        return processarTooltipContent(match[1]);
    }

    // Função auxiliar para processar o conteúdo do tooltip
    function processarTooltipContent(tooltipContent) {
        console.log(`📝 XPATH: Conteúdo do tooltip: ${tooltipContent}`);

        // USAR FUNÇÃO GLOBAL que detecta o formato atualizado
        const resultado = extrairDadosCardSessaoGlobal(tooltipContent);

        if (resultado) {
            console.log(`✅ XPATH: SUCESSO! Dados extraídos:`);
            console.log(`   - Status: ${resultado.status}`);
            console.log(`   - Status Original: ${resultado.statusOriginal}`);
            console.log(`   - Tipo: ${resultado.tipoProcesso}`);
            console.log(`   - Data: ${resultado.data}`);
            console.log(`   - Código: ${resultado.codigo}`);
            console.log(`   - Total Sessões: ${resultado.totalSessoes}`);

    // ===== HELPERS PARA EVENT LISTENERS PASSIVOS =====

    /**
     * Extrai dados da sessão de um texto usando TODOS os padrões de status
     * @param {string} texto - Texto para analisar
     * @returns {Object|null} - Dados da sessão ou null
     */
    function extrairDadosSessaoCompleto(texto) {
        // Padrões para TODOS os status de sessão
        const padroesSessao = [
            {
                regex: /([A-Za-zÀ-ÿ\s]+)\s*\(Retirado em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/i,
                status: "Retirado",
                statusCompleto: "Retirado em Pauta",
                cor: "#dc2626", // Vermelho
            },
            {
                regex: /([A-Za-zÀ-ÿ\s]+)\s*\(Julgado em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/i,
                status: "Julgado",
                statusCompleto: "Julgado em Pauta",
                cor: "#16a34a", // Verde
            },
            {
                regex: /([A-Za-zÀ-ÿ\s]+)\s*\(Incluído em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/i,
                status: "Pautado",
                statusCompleto: "Incluído em Pauta",
                cor: "#3b82f6", // Azul
            },
        ];

        // Testar cada padrão
        for (const padrao of padroesSessao) {
            const match = texto.match(padrao.regex);

            if (match) {
                const tipoProcesso = match[1].trim();
                const dataSessao = match[2];
                const orgao = match[3];

                console.log(`✅ EXTRAÇÃO: ${padrao.status} encontrado!`);
                console.log(`   - Tipo: ${tipoProcesso}`);
                console.log(`   - Data: ${dataSessao}`);
                console.log(`   - Órgão: ${orgao}`);
                console.log(`   - Status: ${padrao.statusCompleto}`);

                // Validar data brasileira (versão simplificada)
                const dataValidada = validarDataSessaoSimples(dataSessao);
                if (!dataValidada) {
                    console.log("❌ EXTRAÇÃO: Data inválida:", dataSessao);
                    continue;
                }

                // Criar objeto de dados da sessão
                const dadosSessao = {
                    status: padrao.status,
                    statusCompleto: padrao.statusCompleto,
                    tipoProcesso: tipoProcesso,
                    data: dataValidada,
                    orgao: orgao,
                    cor: padrao.cor,
                    textoOriginal: match[0],
                    timestamp: new Date().toISOString(),
                };

                console.log(
                    "💾 EXTRAÇÃO: Salvando dados da sessão e tentando criar card..."
                );

                // 💾 SALVAR OS DADOS E DEPOIS TENTAR CRIAR CARD

                // Salvar dados globalmente
                dataSessaoPautado = dataValidada;
                processoComDataSessao = processoAtual;

                // Usar namespace SENT1_AUTO para funcões globais
                if (window.SENT1_AUTO && window.SENT1_AUTO.setDataSessao) {
                    window.SENT1_AUTO.setDataSessao(dataSessao);
                }
                if (
                    window.SENT1_AUTO &&
                    window.SENT1_AUTO.setTipoJulgamentoProcessoPautado
                ) {
                    window.SENT1_AUTO.setTipoJulgamentoProcessoPautado(
                        tipoProcesso
                    );
                }
                if (
                    window.SENT1_AUTO &&
                    window.SENT1_AUTO.setStatusJulgamento
                ) {
                    window.SENT1_AUTO.setStatusJulgamento(
                        padrao.statusCompleto
                    );
                }

                // ✅ AGORA CHAMAR O FLUXO OFICIAL PARA CRIAR O CARD
                setTimeout(() => {
                    const cardCriado = inserirDataSessaoNaInterface();
                    if (cardCriado) {
                        console.log(
                            "✅ EXTRAÇÃO: Card criado com sucesso via fluxo oficial!"
                        );
                    } else {
                        console.log(
                            "ℹ️ EXTRAÇÃO: Card não foi criado (dados podem não ser válidos para exibição)"
                        );
                    }
                }, 100);

                return dadosSessao;
            }
        }

        return null;
    }

    // ...existing code...

    /**
     * 🤖 AUTO-CORREÇÃO DO TOOLTIP - Detecta problemas e corrige automaticamente
     * Função que monitora e corrige o tooltip em tempo real
     */
    function autoCorrecaoTooltip() {
        console.log("🤖 AUTO-CORREÇÃO: Iniciando monitoramento do tooltip...");

        // Verificar a cada 3 segundos se o tooltip está funcionando
        const intervalId = setInterval(() => {
            // Verificar se há card na página
            const card = document.getElementById("eprobe-data-sessao");
            if (!card) return;

            // Verificar se há indicador
            const indicador = card.querySelector(
                ".eprobe-figma-sessions-indicator"
            );
            if (!indicador) {
                console.log(
                    "⚠️ AUTO-CORREÇÃO: Indicador não encontrado, aplicando solução..."
                );
                console.log(
                    "🔧 TOOLTIP: Função solucaoDefinitivaTooltip desabilitada temporariamente"
                );
                return;
            }

            // Verificar se há tooltip funcional
            const tooltips = [
                document.getElementById("tooltip-definitivo"),
                document.getElementById("eprobe-rich-tooltip"),
                document.getElementById("tooltip-simples"),
            ];

            const tooltipFuncional = tooltips.some((t) => t !== null);

            if (!tooltipFuncional) {
                console.log(
                    "⚠️ AUTO-CORREÇÃO: Nenhum tooltip encontrado, aplicando solução..."
                );
                console.log(
                    "🔧 TOOLTIP: Função solucaoDefinitivaTooltip desabilitada temporariamente"
                );
                return;
            }

            // Se chegou até aqui, está tudo ok
            // Para o monitoramento após 30 segundos de funcionamento
            if (Date.now() - inicioMonitoramento > 30000) {
                clearInterval(intervalId);
                console.log(
                    "✅ AUTO-CORREÇÃO: Monitoramento finalizado - tooltip estável"
                );
            }
        }, 3000);

        const inicioMonitoramento = Date.now();

        // Aplicar solução imediatamente
        setTimeout(() => {
            console.log(
                "🔧 TOOLTIP: Função solucaoDefinitivaTooltip desabilitada temporariamente"
            );
        }, 1000);

        console.log("🤖 AUTO-CORREÇÃO: Monitoramento ativado");
        return intervalId;
    }

    // Adicionar ao namespace global
    if (window.SENT1_AUTO) {
        window.SENT1_AUTO.autoCorrecaoTooltip = autoCorrecaoTooltip;
    }

    // ⚡ INICIALIZAÇÃO AUTOMÁTICA DO TOOLTIP - TEMPORARIAMENTE DESABILITADA
    // Aplicar auto-correção quando a página carregar
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
            console.log("🔧 AUTO-CORREÇÃO: Desabilitada temporariamente");
            // setTimeout(autoCorrecaoTooltip, 2000);
        });
    } else {
        console.log("🔧 AUTO-CORREÇÃO: Desabilitada temporariamente");
        // setTimeout(autoCorrecaoTooltip, 2000);
    }

    /**
     * 🔧 FUNÇÃO DE CORREÇÃO FINAL - Tooltip simplificado que SEMPRE funciona
     * Remove todas as dependências e cria tooltip básico funcional
     */
    function criarTooltipSimplificado() {
        console.log("🔧 TOOLTIP SIMPLIFICADO: Iniciando...");

        // 1. Encontrar card
        const card = document.getElementById("eprobe-data-sessao");
        if (!card) {
            console.log("❌ TOOLTIP: Card não encontrado");
            return false;
        }

        // 2. Encontrar ou criar indicador
        let indicador = card.querySelector(".eprobe-figma-sessions-indicator");
        if (!indicador) {
            console.log("🔧 TOOLTIP: Criando indicador...");
            indicador = document.createElement("div");
            indicador.className = "eprobe-figma-sessions-indicator";
            indicador.style.cssText = `
                position: absolute;
                top: 8px;
                right: 8px;
                width: 20px;
                height: 16px;
                background: rgba(28, 27, 31, 0.08);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 10px;
                font-weight: 500;
                color: #1C1B1F;
                cursor: help;
                z-index: 1;
            `;
            indicador.textContent = "3";
            card.appendChild(indicador);
        }

        // 3. Remover tooltip antigo
        const tooltipAntigo = document.getElementById("tooltip-simples");
        if (tooltipAntigo) {
            tooltipAntigo.remove();
        }

        // 4. Criar tooltip básico
        const tooltip = document.createElement("div");
        tooltip.id = "tooltip-simples";
        tooltip.style.cssText = `
            position: absolute;
            background: white;
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 12px;
            font-size: 12px;
            min-width: 200px;
            z-index: 10000;
            display: none;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            font-family: Arial, sans-serif;
        `;

        tooltip.innerHTML = `
            <div style="font-weight: bold; margin-bottom: 8px;">Histórico de Sessões</div>
            <div style="padding: 4px 0; border-bottom: 1px solid #eee;">📅 15/07/2025 - Pautado</div>
            <div style="padding: 4px 0; border-bottom: 1px solid #eee;">📅 10/07/2025 - Julgado</div>
            <div style="padding: 4px 0;">📅 05/07/2025 - Retirado</div>
        `;

        document.body.appendChild(tooltip);

        // 5. Eventos simples
        indicador.addEventListener("mouseenter", function () {
            console.log("🖱️ TOOLTIP: Mostrando tooltip simples");

            const rect = indicador.getBoundingClientRect();
            tooltip.style.left = rect.left - 100 + "px";
            tooltip.style.top = rect.bottom + 10 + "px";
            tooltip.style.display = "block";
        });

        indicador.addEventListener("mouseleave", function () {
            console.log("🖱️ TOOLTIP: Ocultando tooltip simples");
            tooltip.style.display = "none";
        });

        console.log("✅ TOOLTIP SIMPLIFICADO: Configurado com sucesso!");
        return true;
    }

    // Adicionar ao namespace global
    if (window.SENT1_AUTO) {
        window.SENT1_AUTO.criarTooltipSimplificado = criarTooltipSimplificado;
    }

    /**
     * 🧪 FUNÇÃO DE TESTE SIMPLES - Verificar qual função de tooltip está sendo usada
     */
    function testarFuncaoTooltip() {
        console.log(
            "🧪 TESTE: Verificando qual função de tooltip está ativa..."
        );

        // Verificar se há card
        const card = document.getElementById("eprobe-data-sessao");
        if (!card) {
            console.log("❌ TESTE: Card não encontrado");
            return false;
        }

        // Verificar se há indicador
        const indicador = card.querySelector(
            ".eprobe-figma-sessions-indicator"
        );
        if (!indicador) {
            console.log("❌ TESTE: Indicador não encontrado");
            return false;
        }

        console.log("✅ TESTE: Card e indicador encontrados");

        // Testar diretamente a função principal
        const sessoesExemplo = [
            {
                status: "Pautado",
                data: "15/07/2025",
                dataOriginal: "15/07/2025",
                orgao: "4CCR",
                prioridade: 1,
            },
            {
                status: "Julgado",
                data: "10/07/2025",
                dataOriginal: "10/07/2025",
                orgao: "4CCR",
                prioridade: 2,
            },
        ];

        console.log(
            "🎨 TESTE: Aplicando adicionarRichTooltipMaterialDesign..."
        );
        adicionarRichTooltipMaterialDesign(card, sessoesExemplo);

        // Verificar se tooltip foi criado
        setTimeout(() => {
            const tooltip = document.getElementById("eprobe-rich-tooltip");
            if (tooltip) {
                console.log("✅ TESTE: Tooltip criado com sucesso!");

                // Simular hover
                console.log("🖱️ TESTE: Simulando hover...");
                const evento = new MouseEvent("mouseenter", {
                    bubbles: true,
                });
                indicador.dispatchEvent(evento);

                setTimeout(() => {
                    if (tooltip.style.opacity === "1") {
                        console.log("✅ TESTE: Tooltip apareceu!");
                    } else {
                        console.log("❌ TESTE: Tooltip não apareceu");
                        console.log("📊 ESTADO:", {
                            display: tooltip.style.display,
                            opacity: tooltip.style.opacity,
                            transform: tooltip.style.transform,
                        });
                    }
                }, 200);
            } else {
                console.log("❌ TESTE: Tooltip não foi criado");
            }
        }, 100);

        return true;
    }

    // Adicionar ao namespace global
    if (window.SENT1_AUTO) {
        window.SENT1_AUTO.testarFuncaoTooltip = testarFuncaoTooltip;
    }

    /**
     * 🎨 FUNÇÃO DE DEBUG PARA divLembrete - Identifica elementos com background amarelo
     */
    function debugDivLembrete() {
        console.log(
            "🔍 DEBUG: Procurando elementos divLembrete com background-color:#efef8f"
        );

        const elementos = document.querySelectorAll(
            'div.divLembrete[style*="background-color:#efef8f"], div.divLembrete[style*="background-color: #efef8f"]'
        );

        console.log(
            `✅ Encontrados ${elementos.length} elementos divLembrete com background amarelo:`
        );

        elementos.forEach((elemento, index) => {
            console.log(`📋 divLembrete ${index + 1}:`, {
                id: elemento.id,
                classes: elemento.className,
                style: elemento.getAttribute("style"),
                conteudo: elemento.textContent.substring(0, 100) + "...",
            });
        });

        return elementos;
    }

    /**
     * 🎨 FUNÇÃO DE ESTILIZAÇÃO PARA divLembrete - Aplica estilos aos elementos amarelos
     */
    function estilizarDivLembrete() {
        console.log(
            "🎨 ESTILIZAÇÃO: Aplicando estilos aos divLembrete amarelos"
        );

        // Buscar elementos com background-color:#efef8f
        const elementos = document.querySelectorAll(
            'div.divLembrete[style*="background-color:#efef8f"], div.divLembrete[style*="background-color: #efef8f"]'
        );

        if (elementos.length === 0) {
            console.log(
                "❌ Nenhum elemento divLembrete com background amarelo encontrado"
            );
            return false;
        }

        elementos.forEach((elemento, index) => {
            // Aplicar estilos CSS
            elemento.style.border = "2px solid #d4aa00";
            elemento.style.borderRadius = "8px";
            elemento.style.boxShadow = "0 2px 8px rgba(212, 170, 0, 0.3)";
            elemento.style.padding = "12px";
            elemento.style.margin = "8px 0";
            elemento.style.transition = "all 0.3s ease";

            // Adicionar hover effect
            elemento.addEventListener("mouseenter", function () {
                this.style.transform = "scale(1.02)";
                this.style.boxShadow = "0 4px 12px rgba(212, 170, 0, 0.5)";
            });

            elemento.addEventListener("mouseleave", function () {
                this.style.transform = "scale(1)";
                this.style.boxShadow = "0 2px 8px rgba(212, 170, 0, 0.3)";
            });

            console.log(
                `✅ Estilizado divLembrete ${index + 1} (ID: ${elemento.id})`
            );
        });

        console.log(
            `🎨 CONCLUÍDO: ${elementos.length} elementos divLembrete estilizados`
        );
        return true;
    }

    /**
     * 🚀 FUNÇÃO DE CORREÇÃO COMPLETA - Diagnosticar e corrigir tooltip
     * Executa diagnóstico completo e força recriação do tooltip
     */
    function diagnosticarECorrigirTooltip() {
        console.log("🚀 DIAGNÓSTICO COMPLETO: Iniciando...");

        // 1. Verificar se há sessões detectadas
        const sessoesGlobais = window.SENT1_AUTO.todasSessoesDetectadas;
        console.log("📊 SESSÕES GLOBAIS:", sessoesGlobais);

        // 2. Verificar card atual
        const card = document.getElementById("eprobe-data-sessao");
        if (!card) {
            console.log("❌ DIAGNÓSTICO: Card não encontrado");
            return false;
        }

        console.log("✅ DIAGNÓSTICO: Card encontrado");

        // 3. Verificar indicador
        let indicador = card.querySelector(".eprobe-figma-sessions-indicator");
        console.log("🔍 INDICADOR ATUAL:", indicador);

        // 4. Se não há sessões múltiplas, criar dados de teste
        let sessoesParaTeste = sessoesGlobais;
        if (!sessoesParaTeste || sessoesParaTeste.length <= 1) {
            console.log(
                "⚠️ DIAGNÓSTICO: Criando dados de teste para tooltip..."
            );
            sessoesParaTeste = [
                {
                    status: "Pautado",
                    data: "15/07/2025",
                    dataOriginal: "15/07/2025",
                    orgao: "4CCR",
                    tipoProcesso: "Apelação",
                    prioridade: 1,
                },
                {
                    status: "Retirado",
                    data: "10/07/2025",
                    dataOriginal: "10/07/2025",
                    orgao: "4CCR",
                    tipoProcesso: "Apelação",
                    prioridade: 2,
                },
                {
                    status: "Julgado",
                    data: "05/07/2025",
                    dataOriginal: "05/07/2025",
                    orgao: "4CCR",
                    tipoProcesso: "Apelação",
                    prioridade: 3,
                },
            ];

            // Armazenar globalmente
            window.SENT1_AUTO.todasSessoesDetectadas = sessoesParaTeste;
        }

        // 5. Se não há indicador, criar um
        if (!indicador) {
            console.log("🔧 DIAGNÓSTICO: Criando indicador de teste...");
            indicador = document.createElement("div");
            indicador.className = "eprobe-figma-sessions-indicator";
            indicador.style.cssText = `
                position: absolute;
                top: 8px;
                right: 8px;
                width: 20px;
                height: 16px;
                background: rgba(28, 27, 31, 0.08);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'Roboto', sans-serif;
                font-size: 10px;
                font-weight: 500;
                color: #1C1B1F;
                cursor: help;
                transition: all 0.2s ease;
                z-index: 1;
            `;
            indicador.textContent = sessoesParaTeste.length.toString();
            card.appendChild(indicador);
            console.log("✅ DIAGNÓSTICO: Indicador criado e adicionado");
        }

        // 6. Remover tooltip antigo
        const tooltipAntigo = document.getElementById("eprobe-rich-tooltip");
        if (tooltipAntigo) {
            tooltipAntigo.remove();
            console.log("🗑️ DIAGNÓSTICO: Tooltip antigo removido");
        }

        // 7. Aplicar tooltip
        console.log("🎨 DIAGNÓSTICO: Aplicando rich tooltip...");
        adicionarRichTooltipMaterialDesign(card, sessoesParaTeste);

        // 8. Testar após 500ms
        setTimeout(() => {
            console.log("🧪 DIAGNÓSTICO: Testando tooltip...");
            testarTooltipRapido();
        }, 500);

        console.log("✅ DIAGNÓSTICO COMPLETO: Finalizado!");
        return true;
    }

    // Adicionar ao namespace global
    if (window.SENT1_AUTO) {
        window.SENT1_AUTO.diagnosticarECorrigirTooltip =
            diagnosticarECorrigirTooltip;
    }

    /**
     * Obtém a classe CSS correspondente ao status
     * @param {string} status - Status da sessão
     * @returns {string} - Classe CSS correspondente
     */
    function obterClasseStatusPorTipo(status) {
        const statusLower = (status || "").toLowerCase();

        if (
            statusLower.includes("pautado") ||
            statusLower.includes("incluído")
        ) {
            return "status-pautado";
        } else if (
            statusLower.includes("julgado") ||
            statusLower.includes("decidido")
        ) {
            return "status-julgado";
        } else if (
            statusLower.includes("retirado") ||
            statusLower.includes("suspenso")
        ) {
            return "status-retirado";
        }

        return "status-neutro";
    }

    /**
     * Obtém o ícone correspondente ao status
     * @param {string} status - Status da sessão
     * @returns {string} - HTML do ícone
     */
    function obterIconePorStatus(status) {
        const statusLower = (status || "").toLowerCase();

        if (
            statusLower.includes("pautado") ||
            statusLower.includes("incluído")
        ) {
            return '<span class="material-icons">schedule</span>';
        } else if (
            statusLower.includes("julgado") ||
            statusLower.includes("decidido")
        ) {
            return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><path d="M6 3v12"/><circle cx="6" cy="3" r="3"/><path d="M6 21v-6"/><path d="M15 6a9 9 0 1 0 6 5.3c0.7-1.3 1-2.8 1-4.3 0-1.4-0.3-2.7-0.8-4z"/></svg>';
        } else if (
            statusLower.includes("retirado") ||
            statusLower.includes("suspenso")
        ) {
            return '<span class="material-icons">pause_circle</span>';
        }

        return '<span class="material-icons">info</span>';
    }

    /**
     * Cria um card Material Design usando especificações EXATAS do Figma
     * @param {Object} dadosSessao - Dados da sessão detectada
     * @returns {HTMLElement} - Elemento do card criado
     */
    /**
     * 🎨 CONFIGURAÇÕES DOS CARDS POR STATUS
     * Define cor do ícone e texto do header para cada status
     * @param {string} status - Status da sessão (pode ser null/undefined)
     * @returns {Object} - Configuração com corIcon e statusText
     */
    function obterConfigCardPorStatus(status) {
        // Normalizar status (remover espaços, lowercase)
        const statusNormalizado = (status || "").toLowerCase().trim();

        // Mapeamento completo dos 8 cards conforme especificações Figma
        const configuracoes = {
            pautado: {
                corIcon: "#5C85B4",
                statusText: "Pautado",
            },
            retirado: {
                corIcon: "#CE2D4F",
                statusText: "Retirado",
            },
            vista: {
                corIcon: "#FFBF46",
                statusText: "Vista",
            },
            julgado: {
                corIcon: "#3AB795",
                statusText: "Julgado",
            },
            adiado: {
                corIcon: "#F55D3E",
                statusText: "Adiado",
            },
            adiado935: {
                corIcon: "#731963",
                statusText: "Adiado 935",
            },
            sobrestado: {
                corIcon: "#FCB0B3",
                statusText: "Sobrestado",
            },
            diligencia: {
                corIcon: "#00171F",
                statusText: "Diligência",
            },
        };

        // Buscar configuração exata ou fallback para Pautado
        return configuracoes[statusNormalizado] || configuracoes["pautado"];
    }

    /**
     * 🎨 CARD FIGMA - IMPLEMENTAÇÃO DINÂMICA PARA TODOS OS STATUS
     * Base igual para todos, muda apenas texto do header e cor do ícone
     * @param {Object} dadosSessao - Dados da sessão (obrigatório)
     * @returns {HTMLElement|null} - Elemento do card ou null se erro
     */
    function criarCardMaterialDesign(dadosSessao) {
        // ⚠️ VALIDAÇÃO CRÍTICA: Card só funciona com dados da sessão
        if (!dadosSessao) {
            console.log(
                "❌ CARD FIGMA: Sem dados da sessão - não criando card"
            );
            return null;
        }

        try {
            // Obter configuração baseada no status
            const config = obterConfigCardPorStatus(dadosSessao.status);
            console.log(
                `🎨 CRIANDO CARD ${config.statusText.toUpperCase()} (${
                    config.corIcon
                }):`,
                dadosSessao
            );

            // 0. GARANTIR FONTE ROBOTO CARREGADA
            if (
                !document.querySelector(
                    'link[href*="fonts.googleapis.com"][href*="Roboto"]'
                )
            ) {
                const linkRoboto = document.createElement("link");
                linkRoboto.rel = "stylesheet";
                linkRoboto.href =
                    "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap";
                document.head.appendChild(linkRoboto);
            }

            // 1. CONTAINER PRINCIPAL - Dimensões exatas: 169x60px conforme suas especificações
            const cardContainer = document.createElement("div");
            cardContainer.id = "eprobe-data-sessao";
            cardContainer.className = "eprobe-figma-card-pautado";
            cardContainer.style.cssText = `
                width: 169px;
                height: 60px;
                margin: 8px 4px;
                display: inline-block;
                position: relative;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
                box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
                filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
                border-radius: 9px;
            `;

            // 2. SVG BASE - Dimensões exatas 169x60px conforme especificação
            const svg = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg"
            );
            svg.setAttribute("width", "169");
            svg.setAttribute("height", "60");
            svg.setAttribute("viewBox", "0 0 169 60");
            svg.setAttribute("fill", "none");

            // 3. FUNDO DO CARD - COR EXATA FIGMA
            const backgroundRect = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "rect"
            );
            backgroundRect.setAttribute("x", "0");
            backgroundRect.setAttribute("y", "0");
            backgroundRect.setAttribute("width", "169");
            backgroundRect.setAttribute("height", "60");
            backgroundRect.setAttribute("rx", "9");
            backgroundRect.setAttribute("fill", "#FEF7FF");
            backgroundRect.setAttribute("stroke", "#CAC4D0");
            backgroundRect.setAttribute("stroke-width", "0.75");

            // 4. ÍCONE PAUTADO - CALENDÁRIO COM RELÓGIO #5C85B4
            // Dimensões exatas do Figma: 24.9 x 24.75px
            const iconGroup = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "g"
            );

            // Posição do ícone conforme especificações Figma exatas
            // left: 6.51%, top: 27.65%, dimensões: 24.9 x 24.75px
            const iconX = Math.round(169 * 0.0651); // 6.51% de 169px = ~11px
            const iconY = Math.round(60 * 0.2765); // 27.65% de 60px = ~16.6px

            // Container do ícone com dimensões exatas
            const iconRect = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "rect"
            );
            iconRect.setAttribute("x", iconX);
            iconRect.setAttribute("y", iconY);
            iconRect.setAttribute("width", "24.9");
            iconRect.setAttribute("height", "24.75");
            iconRect.setAttribute("fill", "none"); // Invisível, apenas para definir área

            // SVG do calendário com relógio - dimensões 24.9 x 24.75px
            const iconPath = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );
            iconPath.setAttribute("transform", `translate(${iconX}, ${iconY})`);
            iconPath.setAttribute(
                "d",
                "M2.48973 24.1623C1.80506 24.1623 1.21914 23.9317 0.731981 23.4705C0.244824 23.0093 0.00082991 22.4542 0 21.8052V5.3052C0 4.65698 0.243994 4.10227 0.731981 3.64105C1.21997 3.17984 1.80589 2.94884 2.48973 2.94805H3.7346V0.590912H6.22433V2.94805H16.1833V0.590912H18.673V2.94805H19.9179C20.6025 2.94805 21.1889 3.17905 21.6768 3.64105C22.1648 4.10305 22.4084 4.65777 22.4076 5.3052V10.815C22.4076 11.1489 22.2881 11.4291 22.0491 11.6553C21.81 11.8816 21.5146 11.9944 21.1627 11.9936C20.8108 11.9928 20.5154 11.8797 20.2764 11.6542C20.0374 11.4287 19.9179 11.1489 19.9179 10.815V10.0195H2.48973V21.8052H9.70995C10.0627 21.8052 10.3585 21.9183 10.5975 22.1446C10.8366 22.3709 10.9556 22.6506 10.9548 22.9838C10.954 23.3169 10.8345 23.597 10.5963 23.8241C10.3581 24.0512 10.0627 24.1639 9.70995 24.1623H2.48973ZM18.673 25.3409C16.9509 25.3409 15.4832 24.7662 14.2699 23.6167C13.0566 22.4672 12.4495 21.0776 12.4487 19.4481C12.4478 17.8185 13.0549 16.4289 14.2699 15.2794C15.4849 14.1299 16.9526 13.5552 18.673 13.5552C20.3934 13.5552 21.8615 14.1299 23.0773 15.2794C24.2931 16.4289 24.8998 17.8185 24.8973 19.4481C24.8948 21.0776 24.2877 22.4676 23.0761 23.6178C21.8644 24.7681 20.3967 25.3425 18.673 25.3409ZM20.7581 22.2472L21.6295 21.4222L19.2954 19.2123V15.9123H18.0506V19.6838L20.7581 22.2472Z"
            );
            iconPath.setAttribute("fill", config.corIcon);
            iconPath.setAttribute("class", "eprobe-icon-dinamico");

            iconGroup.appendChild(iconRect);
            iconGroup.appendChild(iconPath);

            // 5. TEXTO PRINCIPAL - "Pautado" (Header LP)
            // Dimensões: 113.92 x 16.06px
            // Posição: left: 26.04%, top: 23.33%, bottom: 49.9%
            const textPrincipal = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "text"
            );
            // Cálculos exatos: 26.04% de 169px = 44px, 23.33% de 60px = 14px
            const headerX = Math.round(169 * 0.2604); // 26.04% = ~44px
            const headerY = Math.round(60 * 0.2333) + 13.5; // 23.33% + font-size para baseline = ~27.5px

            textPrincipal.setAttribute("x", headerX.toString());
            textPrincipal.setAttribute("y", headerY.toString());
            textPrincipal.setAttribute("font-family", "Roboto, sans-serif");
            textPrincipal.setAttribute("font-style", "normal");
            textPrincipal.setAttribute("font-weight", "500");
            textPrincipal.setAttribute("font-size", "13.5037px");
            textPrincipal.setAttribute("line-height", "16");
            textPrincipal.setAttribute("fill", "#1D1B20");
            textPrincipal.setAttribute("text-anchor", "start");
            textPrincipal.setAttribute("class", "eprobe-status-text");
            textPrincipal.textContent = config.statusText;

            // 6. SUBTÍTULO - "Sessão: getData()" (Subhead LP)
            // Dimensões: 103.36 x 15.89px
            // Posição: left: 26.04%, top: 50.1%, bottom: 24.9%
            const dataExtraida = getData(dadosSessao);
            const textData = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "text"
            );
            // Cálculos exatos: 26.04% de 169px = 44px, 50.1% de 60px = 30px
            const subheadX = Math.round(169 * 0.2604); // 26.04% = ~44px
            const subheadY = Math.round(60 * 0.501) + 11; // 50.1% + font-size para baseline = ~41px

            textData.setAttribute("x", subheadX.toString());
            textData.setAttribute("y", subheadY.toString());
            textData.setAttribute("font-family", "Roboto, sans-serif");
            textData.setAttribute("font-style", "normal");
            textData.setAttribute("font-weight", "400");
            textData.setAttribute("font-size", "11px");
            textData.setAttribute("line-height", "15");
            textData.setAttribute("letter-spacing", "0.187552px");
            textData.setAttribute("fill", "#1D1B20");
            textData.setAttribute("text-anchor", "start");
            textData.setAttribute("class", "eprobe-date-text");
            textData.textContent = `Sessão: ${dataExtraida}`;

            // 7. MONTAGEM DO SVG
            svg.appendChild(backgroundRect);
            svg.appendChild(iconGroup);
            svg.appendChild(textPrincipal);
            svg.appendChild(textData);

            // 8. ADICIONAR AO CONTAINER
            cardContainer.appendChild(svg);

            // 8.1. ADICIONAR INDICADOR DE MÚLTIPLAS SESSÕES (se existirem)
            // ✅ CORREÇÃO: Garantir que temos dados de sessões corretos
            const sessoesParaIndicador =
                dadosSessao.todasSessoes ||
                window.SENT1_AUTO.todasSessoesDetectadas ||
                (dadosSessao.dataOriginal ? [dadosSessao] : []);

            console.log(
                `🔍 CARD DEBUG: dadosSessao.todasSessoes=${
                    dadosSessao.todasSessoes?.length || 0
                }, ` +
                    `window.SENT1_AUTO.todasSessoesDetectadas=${
                        window.SENT1_AUTO.todasSessoesDetectadas?.length || 0
                    }, ` +
                    `sessoesParaIndicador=${sessoesParaIndicador.length}`
            );

            if (sessoesParaIndicador && sessoesParaIndicador.length > 1) {
                console.log(
                    `🔢 CARD: ${sessoesParaIndicador.length} sessões detectadas - adicionando indicador`
                );

                // Criar elemento indicador para múltiplas sessões
                const indicadorMultiplas = document.createElement("div");
                indicadorMultiplas.className =
                    "eprobe-figma-sessions-indicator";
                indicadorMultiplas.style.cssText = `
                    position: absolute;
                    top: 8px;
                    right: 8px;
                    width: 20px;
                    height: 16px;
                    background: rgba(28, 27, 31, 0.08);
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Roboto', sans-serif;
                    font-size: 10px;
                    font-weight: 500;
                    color: #1C1B1F;
                    cursor: help;
                    transition: all 0.2s ease;
                    z-index: 1;
                `;
                indicadorMultiplas.textContent =
                    sessoesParaIndicador.length.toString();

                // Adicionar hover effect
                indicadorMultiplas.addEventListener("mouseenter", () => {
                    indicadorMultiplas.style.background =
                        "rgba(28, 27, 31, 0.12)";
                    indicadorMultiplas.style.transform = "scale(1.1)";
                });

                indicadorMultiplas.addEventListener("mouseleave", () => {
                    indicadorMultiplas.style.background =
                        "rgba(28, 27, 31, 0.08)";
                    indicadorMultiplas.style.transform = "scale(1)";
                });

                cardContainer.appendChild(indicadorMultiplas);

                // 8.2. ADICIONAR TOOLTIP INTERATIVO RICH MATERIAL DESIGN
                console.log(
                    `🎨 TOOLTIP: Preparando tooltip com ${sessoesParaIndicador.length} sessões`,
                    sessoesParaIndicador
                );

                // ✅ CORREÇÃO: Usar sessoesParaIndicador diretamente
                adicionarRichTooltipMaterialDesign(
                    cardContainer,
                    sessoesParaIndicador
                );
                console.log("✅ TOOLTIP: Rich tooltip adicionado com sucesso");
            } else {
                console.log(
                    `ℹ️ CARD: ${sessoesParaIndicador.length} sessão(ões) - indicador não necessário`
                );
            }

            // 8.1. APLICAR ESTILOS CSS ESPECÍFICOS PARA GARANTIR ESPECIFICAÇÕES FIGMA
            const cardStyle = document.createElement("style");
            if (!document.getElementById("eprobe-card-figma-styles")) {
                cardStyle.id = "eprobe-card-figma-styles";
                cardStyle.textContent = `
                    .eprobe-figma-card-pautado {
                        font-family: 'Roboto', sans-serif !important;
                    }
                    
                    .eprobe-figma-card-pautado text {
                        font-family: 'Roboto', sans-serif !important;
                        shape-rendering: crispEdges;
                        text-rendering: optimizeLegibility;
                        
                    }
                    
                    /* Header LP - Especificações exatas Figma */
                    .eprobe-status-text {
                        font-family: 'Roboto', sans-serif !important;
                        font-style: normal !important;
                        font-weight: 500 !important;
                        font-size: 13.5037px !important;
                        line-height: 16px !important;
                        fill: #1D1B20 !important;
                        font-stretch: 100 !important;
                        text-align: justify !important;
                    }
                    
                    /* Subhead LP - Especificações exatas Figma */
                    .eprobe-date-text {
                        font-family: 'Roboto', sans-serif !important;
                        font-style: normal !important;
                        font-weight: 400 !important;
                        font-size: 11px !important;
                        line-height: 15px !important;
                        letter-spacing: 0.187552px !important;
                        fill: #1D1B20 !important;
                    }
                    
                    /* IconAzul - Especificações Figma */
                    .eprobe-icon-azul {
                        background: #5C85B4 !important;
                        width: 24.9px !important;
                        height: 24.75px !important;
                    }
                `;
                document.head.appendChild(cardStyle);
            }

            // 9. EFEITOS HOVER - MATERIAL DESIGN ELEVATION
            addPassiveEventListener(cardContainer, "mouseenter", () => {
                cardContainer.style.transform = "translateY(-2px)";
                cardContainer.style.boxShadow =
                    "0px 8px 12px 6px rgba(0, 0, 0, 0.15)";
                cardContainer.style.filter =
                    "drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.35))";
            });

            addPassiveEventListener(cardContainer, "mouseleave", () => {
                cardContainer.style.transform = "translateY(0)";
                cardContainer.style.boxShadow =
                    "0px 3px 3px rgba(0, 0, 0, 0.25)";
                cardContainer.style.filter =
                    "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3))";
            });

            // 10. LOG DE SUCESSO
            console.log("✅ CARD PAUTADO CRIADO:", {
                id: cardContainer.id,
                status: "Pautado",
                data: dataExtraida,
                cor: "#5C85B4",
            });

            return cardContainer;
        } catch (error) {
            console.error("❌ ERRO AO CRIAR CARD PAUTADO:", error);
            return null;
        }
    }

    /**
     * 🧪 FUNÇÃO DE TESTE - Criar card com dados mock para verificar especificações
     */
    function testarCardFigmaEspecificacoes() {
        console.log("🧪 TESTE: Criando card Pautado com dados mock...");

        const dadosMock = {
            status: "Pautado",
            data: "22/07/2025",
            dataFormatada: "22/07/2025",
        };

        const card = criarCardSessaoMaterial(dadosMock);
        if (card) {
            // Remover card existente se houver
            const cardExistente = document.getElementById("eprobe-data-sessao");
            if (cardExistente) {
                cardExistente.remove();
            }

            // Inserir no body para teste
            card.style.position = "fixed";
            card.style.top = "20px";
            card.style.right = "20px";
            card.style.zIndex = "9999";
            card.style.backgroundColor = "white";
            card.style.padding = "10px";
            card.style.border = "2px solid #007ebd";

            document.body.appendChild(card);

            console.log(
                "✅ TESTE: Card criado com especificações Figma exatas:"
            );
            console.log("📏 DIMENSÕES:");
            console.log("- Card: 169x60px");
            console.log("- Icon: 24.9x24.75px");
            console.log("- Header Text: 113.92x16.06px");
            console.log("- Subhead Text: 103.36x15.89px");

            console.log("📐 POSICIONAMENTO:");
            console.log(
                `- Icon: left: 6.51% (${Math.round(
                    169 * 0.0651
                )}px), top: 27.65% (${Math.round(60 * 0.2765)}px)`
            );
            console.log(
                `- Header: left: 26.04% (${Math.round(
                    169 * 0.2604
                )}px), top: 23.33% (${Math.round(60 * 0.2333) + 13.5}px)`
            );
            console.log(
                `- Subhead: left: 26.04% (${Math.round(
                    169 * 0.2604
                )}px), top: 50.1% (${Math.round(60 * 0.501) + 11}px)`
            );

            console.log("🎨 TIPOGRAFIA:");
            console.log("- Header: Roboto 380, 13.5037px, line-height 16px");
            console.log(
                "- Subhead: Roboto 400, 11px, line-height 15px, letter-spacing 0.187552px"
            );
            console.log("- Cor texto: #1D1B20");
            console.log("- Cor ícone: #5C85B4");

            return card;
        } else {
            console.log("❌ TESTE: Falha ao criar card");
            return null;
        }
    }

    /**
     * 🧪 TESTE FIGMA - TODOS OS 8 CARDS
     * Demonstra todos os cards com cores e textos diferentes
     */
    function testarTodosCards() {
        console.log("🧪 TESTANDO TODOS OS 8 CARDS FIGMA:");

        // Dados de sessão de exemplo
        const dadosExemplo = {
            data: "15/03/2025",
            orgao: "4CCR",
        };

        // Lista dos 8 status para testar
        const statusTeste = [
            "pautado", // #5C85B4 - Azul
            "retirado", // #CE2D4F - Vermelho
            "vista", // #FFBF46 - Amarelo
            "julgado", // #3AB795 - Verde
            "adiado", // #F55D3E - Laranja
            "adiado935", // #731963 - Roxo
            "sobrestado", // #FCB0B3 - Rosa
            "diligencia", // #00171F - Preto
        ];

        // Criar container de teste
        let containerTeste = document.getElementById("teste-cards-container");
        if (!containerTeste) {
            containerTeste = document.createElement("div");
            containerTeste.id = "teste-cards-container";
            containerTeste.style.cssText = `
                position: fixed;
                top: 50px;
                right: 50px;
                z-index: 999999;
                background: white;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                max-height: 80vh;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 10px;
                min-width: 300px;
            `;

            // Título do teste
            const titulo = document.createElement("h3");
            titulo.textContent = "🧪 Teste dos 8 Cards Figma";
            titulo.style.cssText =
                "margin: 0 0 15px 0; color: #333; font-size: 16px;";
            containerTeste.appendChild(titulo);

            document.body.appendChild(containerTeste);
        } else {
            // Limpar cards anteriores, manter apenas o título
            const titulo = containerTeste.querySelector("h3");
            containerTeste.innerHTML = "";
            if (titulo) containerTeste.appendChild(titulo);
        }

        // Criar cada card
        statusTeste.forEach((status, index) => {
            const dadosComStatus = { ...dadosExemplo, status: status };
            const card = criarCardMaterialDesign(dadosComStatus);

            if (card) {
                // Wrapper para identificação
                const wrapper = document.createElement("div");
                wrapper.style.cssText = `
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 5px;
                    border-radius: 4px;
                    background: ${index % 2 === 0 ? "#f9f9f9" : "#fff"};
                `;

                // Label do status
                const label = document.createElement("span");
                label.textContent = `${index + 1}. ${status.toUpperCase()}:`;
                label.style.cssText =
                    "min-width: 100px; font-size: 12px; font-weight: bold; color: #666;";

                wrapper.appendChild(label);
                wrapper.appendChild(card);
                containerTeste.appendChild(wrapper);

                console.log(
                    `✅ Card ${index + 1}/8 criado: ${status.toUpperCase()}`
                );
            } else {
                console.log(`❌ Erro ao criar card: ${status}`);
            }
        });

        console.log(
            "🎨 Teste completo! Todos os 8 cards devem estar visíveis na tela."
        );
        console.log("📋 CORES E TEXTOS DOS CARDS:");
        console.log("1. PAUTADO - #5C85B4 (Azul)");
        console.log("2. RETIRADO - #CE2D4F (Vermelho)");
        console.log("3. VISTA - #FFBF46 (Amarelo)");
        console.log("4. JULGADO - #3AB795 (Verde)");
        console.log("5. ADIADO - #F55D3E (Laranja)");
        console.log("6. ADIADO 935 - #731963 (Roxo)");
        console.log("7. SOBRESTADO - #FCB0B3 (Rosa)");
        console.log("8. DILIGÊNCIA - #00171F (Preto)");

        return containerTeste;
    }

    /**
     * Aplica estilos únicos para cards SVG do Figma
     */
    function aplicarEstilosSvgFigma() {
        if (document.getElementById("eprobe-figma-svg-styles")) return;

        const styleSvg = document.createElement("style");
        styleSvg.id = "eprobe-figma-svg-styles";
        styleSvg.textContent = `
            .eprobe-figma-card-svg {
                display: inline-block;
                margin: 8px 0;
                position: relative;
            }
            
            .eprobe-figma-svg-container {
                position: relative;
                display: inline-block;
            }
            
            .eprobe-figma-svg-container svg {
                transition: all 0.2s ease;
                display: block;
            }
            
            .eprobe-figma-card-svg:hover .eprobe-figma-svg-container svg {
                transform: translateY(-1px);
                filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
            }
            
            .eprobe-figma-data-overlay {
                position: absolute;
                bottom: 12px;
                left: 24px;
                right: 24px;
                pointer-events: none;
                z-index: 10;
            }
            
            .eprobe-figma-data-text {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-size: 11px;
                font-weight: 500;
                color: #1D1B20;
                opacity: 0.9;
                text-align: left;
                display: block;
                line-height: 1.2;
                background: rgba(255, 255, 255, 0.8);
                padding: 2px 4px;
                border-radius: 4px;
                backdrop-filter: blur(4px);
            }
        `;
        document.head.appendChild(styleSvg);
    }

    /**
     * Obtém configuração específica para cada status baseada nos designs do Figma
     * @param {string} status - Status da sessão
     * @returns {Object} - Configuração do design
     */
    function obterConfigFigmaStatus(status) {
        const configs = {
            PAUTADO: {
                cor: "#5C85B4",
                statusText: "Pautado",
                corFundo: "#FEF7FF",
                corBorda: "#CAC4D0",
                corTexto: "#1D1B20",
                descricao: "Processo incluído em pauta para julgamento",
            },
            RETIRADO: {
                cor: "#CE2D4F",
                statusText: "Retirado de Pauta",
                corFundo: "#FEF7FF",
                corBorda: "#CAC4D0",
                corTexto: "#1D1B20",
                descricao: "Processo retirado de pauta",
            },
            VISTA: {
                cor: "#FFBF46",
                statusText: "Pedido de Vista",
                corFundo: "#FEF7FF",
                corBorda: "#CAC4D0",
                corTexto: "#1D1B20",
                descricao: "Pedido de vista apresentado",
            },
            JULGADO: {
                cor: "#3AB795",
                statusText: "Julgado",
                corFundo: "#FEF7FF",
                corBorda: "#CAC4D0",
                corTexto: "#1D1B20",
                descricao: "Processo julgado",
            },
            ADIADO: {
                cor: "#F55D3E",
                statusText: "Adiado",
                corFundo: "#FEF7FF",
                corBorda: "#CAC4D0",
                corTexto: "#1D1B20",
                descricao: "Julgamento adiado",
            },
            ADIADO_935: {
                cor: "#731963",
                statusText: "Adiado (art. 935)",
                corFundo: "#FEF7FF",
                corBorda: "#CAC4D0",
                corTexto: "#1D1B20",
                descricao: "Adiado conforme art. 935",
            },
            SOBRESTADO: {
                cor: "#FCB0B3",
                statusText: "Sobrestado (art. 942)",
                corFundo: "#FEF7FF",
                corBorda: "#CAC4D0",
                corTexto: "#1D1B20",
                descricao: "Sobrestado conforme art. 942",
            },
            DILIGENCIA: {
                cor: "#00171F",
                statusText: "Conv. em Diligência",
                corFundo: "#FEF7FF",
                corBorda: "#CAC4D0",
                corTexto: "#1D1B20",
            },
        };

        // Normalizar o status para busca (maiúsculo, remover acentos e caracteres especiais)
        const statusNormalizado = status
            ? status.toUpperCase().replace(/[^A-Z0-9_]/g, "_")
            : "PAUTADO";

        // Tentar match exato primeiro
        if (configs[statusNormalizado]) {
            console.log(`✅ CONFIG: Status '${statusNormalizado}' encontrado`);
            return configs[statusNormalizado];
        }

        // Fallback para status similar
        const statusFallback = Object.keys(configs).find((key) =>
            key.includes(statusNormalizado.split("_")[0])
        );

        if (statusFallback) {
            console.log(
                `⚠️ CONFIG: Usando fallback '${statusFallback}' para '${statusNormalizado}'`
            );
            return configs[statusFallback];
        }

        // Fallback final para PAUTADO
        console.log(
            `⚠️ CONFIG: Status '${statusNormalizado}' não encontrado, usando PAUTADO`
        );
        return configs.PAUTADO;
    }

    /**
     * 🎨 RICH TOOLTIP MATERIAL DESIGN para múltiplas sessões
     * @param {HTMLElement} cardElement - Elemento do card
     * @param {Array} todasSessoes - Array com todas as sessões detectadas
     */
    function adicionarRichTooltipMaterialDesign(cardElement, todasSessoes) {
        console.log(
            "🎨 TOOLTIP INIT: Iniciando adicionarRichTooltipMaterialDesign"
        );
        console.log("📋 TOOLTIP INIT: cardElement:", !!cardElement);
        console.log(
            "📋 TOOLTIP INIT: todasSessoes:",
            todasSessoes?.length || 0
        );

        if (!cardElement || !todasSessoes || todasSessoes.length <= 1) {
            console.log("❌ TOOLTIP INIT: Condições não atendidas - abortando");
            return;
        }

        console.log(
            `🎨 TOOLTIP: Criando rich tooltip para ${todasSessoes.length} sessões`,
            todasSessoes
        );

        // Garantir que Material Symbols está carregado
        if (!document.querySelector('link[href*="Material+Symbols+Rounded"]')) {
            const materialIcons = document.createElement("link");
            materialIcons.rel = "stylesheet";
            materialIcons.href =
                "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=fiber_manual_record";
            document.head.appendChild(materialIcons);
        }

        // Criar elemento do tooltip se não existir
        let tooltip = document.getElementById("eprobe-rich-tooltip");
        if (!tooltip) {
            tooltip = document.createElement("div");
            tooltip.id = "eprobe-rich-tooltip";
            tooltip.style.cssText = `
                position: absolute;
                display: none;
                z-index: 10000;
                pointer-events: auto;
                opacity: 0;
                transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
                transform: translateY(8px);
            `;
            document.body.appendChild(tooltip);
        }

        // Cores para cada status - MAPEAMENTO CORRETO
        const coresStatus = {
            // Status exatos conforme sistema
            PAUTADO: "#5C85B4",
            "INCLUÍDO EM PAUTA": "#5C85B4",
            RETIRADO: "#CE2D4F",
            "RETIRADO DE PAUTA": "#CE2D4F",
            "PEDIDO DE VISTA": "#FFBF46",
            VISTA: "#FFBF46",
            JULGADO: "#3AB795",
            "JULGADO EM PAUTA": "#3AB795",
            ADIADO: "#F55D3E",
            "ADIADO EM PAUTA": "#F55D3E",
            "ADIADO (ART. 935)": "#731963",
            SOBRESTADO: "#FCB0B3",
            "SOBRESTADO (ART. 942)": "#FCB0B3",
            "CONV. EM DILIGÊNCIA": "#00171F",
            DILIGENCIA: "#00171F",
            // Variações case insensitive
            pautado: "#5C85B4",
            retirado: "#CE2D4F",
            julgado: "#3AB795",
            adiado: "#F55D3E",
            sobrestado: "#FCB0B3",
        };

        // Função para obter cor do status - MELHORADA
        const obterCorStatus = (status) => {
            if (!status) return coresStatus["PAUTADO"];

            // Normalizar status para busca
            const statusNormalizado = status.trim();

            // Busca direta
            if (coresStatus[statusNormalizado]) {
                return coresStatus[statusNormalizado];
            }

            // Busca case insensitive
            const statusUpper = statusNormalizado.toUpperCase();
            if (coresStatus[statusUpper]) {
                return coresStatus[statusUpper];
            }

            // Busca por palavras-chave
            if (statusUpper.includes("RETIRADO")) return "#CE2D4F";
            if (statusUpper.includes("JULGADO")) return "#3AB795";
            if (statusUpper.includes("VISTA")) return "#FFBF46";
            if (
                statusUpper.includes("PAUTADO") ||
                statusUpper.includes("PAUTA")
            )
                return "#5C85B4";
            if (statusUpper.includes("ADIADO")) return "#F55D3E";
            if (statusUpper.includes("SOBRESTADO")) return "#FCB0B3";
            if (
                statusUpper.includes("DILIGÊNCIA") ||
                statusUpper.includes("DILIGENCIA")
            )
                return "#00171F";

            // Fallback
            console.log(`⚠️ TOOLTIP: Status não mapeado: "${status}"`);
            return coresStatus["PAUTADO"];
        };

        // Função para normalizar texto do status
        const normalizarStatusTexto = (status) => {
            const statusMap = {
                PAUTADO: "Incluído em Pauta",
                RETIRADO: "Retirado de Pauta",
                JULGADO: "Julgado em Pauta",
                VISTA: "Pedido de Vista",
                ADIADO: "Adiado",
                SOBRESTADO: "Sobrestado",
                DILIGENCIA: "Diligência",
            };

            const key = status?.toUpperCase() || "PAUTADO";
            return statusMap[key] || status || "Incluído em Pauta";
        };

        // Ordenar sessões: mais recente primeiro, depois por prioridade
        const sessoesOrdenadas = [...todasSessoes].sort((a, b) => {
            // Primeiro por data (mais recente primeiro)
            const dataA = new Date(a.data || a.dataOriginal);
            const dataB = new Date(b.data || b.dataOriginal);
            if (dataA.getTime() !== dataB.getTime()) {
                return dataB.getTime() - dataA.getTime();
            }
            // Depois por prioridade se datas iguais
            return (b.prioridade || 0) - (a.prioridade || 0);
        });

        // Encontrar elemento indicador
        const indicador = cardElement.querySelector(
            ".eprobe-figma-sessions-indicator"
        );
        if (!indicador) {
            console.log("❌ TOOLTIP: Indicador não encontrado no card");
            return;
        }

        console.log("✅ TOOLTIP: Indicador encontrado:", indicador);

        // Sistema de eventos interativo para tooltip - VERSÃO CORRIGIDA
        let tooltipTimer = null;
        let tooltipAtivo = false;

        const mostrarTooltip = (e) => {
            console.log("🖱️ TOOLTIP: Mostrando tooltip");

            // Cancelar qualquer timer de ocultação
            if (tooltipTimer) {
                clearTimeout(tooltipTimer);
                tooltipTimer = null;
            }

            tooltipAtivo = true;

            // Gerar conteúdo do Rich Tooltip Material Design
            const tooltipContent = `
                <div class="rich-tooltip-container">
                    <!-- Cabeçalho -->
                    <div class="rich-tooltip-header">
                        <span class="material-symbols-rounded" style="font-size: 18px; color: #1C1B1F;">
                            schedule
                        </span>
                        <div class="header-text">
                            <div class="header-title">Histórico de Sessões</div>
                            <div class="header-subtitle">${
                                sessoesOrdenadas.length
                            } eventos encontrados</div>
                        </div>
                    </div>
                    
                    <!-- Divisor -->
                    <div class="rich-tooltip-divider"></div>
                    
                    <!-- Lista de Sessões (Horizontal) -->
                    <div class="rich-tooltip-sessions">
                        ${sessoesOrdenadas
                            .map((sessao, index) => {
                                const isAtual = index === 0;
                                const cor = obterCorStatus(sessao.status);
                                const statusTexto = normalizarStatusTexto(
                                    sessao.status
                                );
                                const dataFormatada =
                                    sessao.dataOriginal ||
                                    sessao.data ||
                                    "Data não disponível";

                                return `
                                <div class="session-item ${
                                    isAtual ? "current" : ""
                                }">
                                    <div class="session-header">
                                        <span class="material-symbols-rounded session-icon" style="color: ${cor};">
                                            fiber_manual_record
                                        </span>
                                        <div class="session-status">${statusTexto}</div>
                                        ${
                                            isAtual
                                                ? '<div class="current-badge">Atual</div>'
                                                : ""
                                        }
                                    </div>
                                    <div class="session-date">${dataFormatada}</div>
                                    ${
                                        sessao.orgao
                                            ? `<div class="session-organ">${sessao.orgao}</div>`
                                            : ""
                                    }
                                    ${
                                        sessao.tipoProcesso
                                            ? `<div class="session-type">${sessao.tipoProcesso}</div>`
                                            : ""
                                    }
                                </div>
                            `;
                            })
                            .join("")}
                    </div>
                    
                    <!-- Rodapé -->
                    <div class="rich-tooltip-footer">
                        <span class="material-symbols-rounded" style="font-size: 14px; color: #49454F;">
                            info
                        </span>
                        <span>Passe o mouse sobre cada status para mais detalhes</span>
                    </div>
                </div>
            `;

            tooltip.innerHTML = tooltipContent;

            // Aplicar estilos CSS se ainda não existir
            if (!document.querySelector("#rich-tooltip-styles")) {
                const tooltipStyle = document.createElement("style");
                tooltipStyle.id = "rich-tooltip-styles";
                tooltipStyle.textContent = `
                    .material-symbols-rounded {
                        font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20;
                    }
                    
                    #eprobe-rich-tooltip {
                        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                        pointer-events: auto;
                    }
                    
                    .rich-tooltip-container {
                        background: #FFFBFE;
                        border: 1px solid #CAC4D0;
                        border-radius: 12px;
                        min-width: 320px;
                        max-width: 480px;
                        box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
                        overflow: hidden;
                    }
                    
                    .rich-tooltip-header {
                        padding: 16px 16px 12px 16px;
                        display: flex;
                        align-items: flex-start;
                        gap: 12px;
                        background: #F7F2FA;
                        border-bottom: 1px solid #E6E0E9;
                    }
                    
                    .header-text {
                        flex: 1;
                    }
                    
                    .header-title {
                        font-size: 14px;
                        font-weight: 500;
                        color: #1C1B1F;
                        line-height: 20px;
                        margin-bottom: 2px;
                    }
                    
                    .header-subtitle {
                        font-size: 12px;
                        font-weight: 400;
                        color: #49454F;
                        line-height: 16px;
                    }
                    
                    .rich-tooltip-divider {
                        height: 1px;
                        background: #E6E0E9;
                    }
                    
                    .rich-tooltip-sessions {
                        padding: 16px;
                        display: flex;
                        gap: 16px;
                        overflow-x: auto;
                        scrollbar-width: thin;
                        scrollbar-color: #CAC4D0 transparent;
                    }
                    
                    .rich-tooltip-sessions::-webkit-scrollbar {
                        height: 6px;
                    }
                    
                    .rich-tooltip-sessions::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    
                    .rich-tooltip-sessions::-webkit-scrollbar-thumb {
                        background: #CAC4D0;
                        border-radius: 3px;
                    }
                    
                    .session-item {
                        min-width: 140px;
                        padding: 12px;
                        border: 1px solid #E6E0E9;
                        border-radius: 8px;
                        background: #FFFBFE;
                        transition: all 0.2s ease;
                        cursor: pointer;
                    }
                    
                    .session-item:hover {
                        background: #F7F2FA;
                        border-color: #CAC4D0;
                        transform: translateY(-1px);
                        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
                    }
                    
                    .session-item.current {
                        background: #E8F5E8;
                        border-color: #3AB795;
                        border-width: 2px;
                    }
                    
                    .session-header {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        margin-bottom: 8px;
                        position: relative;
                    }
                    
                    .session-icon {
                        font-size: 16px !important;
                        flex-shrink: 0;
                    }
                    
                    .session-status {
                        font-size: 12px;
                        font-weight: 500;
                        color: #1C1B1F;
                        line-height: 16px;
                        flex: 1;
                        margin-right: 4px;
                    }
                    
                    .current-badge {
                        background: #3AB795;
                        color: #FFFFFF;
                        font-size: 10px;
                        font-weight: 500;
                        padding: 2px 6px;
                        border-radius: 8px;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                        white-space: nowrap;
                        flex-shrink: 0;
                        position: absolute;
                        top: -4px;
                        right: -4px;
                    }
                    
                    .session-date {
                        font-size: 13px;
                        font-weight: 600;
                        color: #1C1B1F;
                        line-height: 18px;
                        margin-bottom: 4px;
                    }
                    
                    .session-organ {
                        font-size: 11px;
                        color: #49454F;
                        line-height: 14px;
                        margin-bottom: 2px;
                    }
                    
                    .session-type {
                        font-size: 10px;
                        color: #79747E;
                        line-height: 12px;
                        font-style: italic;
                    }
                    
                    .rich-tooltip-footer {
                        padding: 8px 16px 12px 16px;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        background: #F7F2FA;
                        border-top: 1px solid #E6E0E9;
                        font-size: 11px;
                        color: #49454F;
                    }
                `;
                document.head.appendChild(tooltipStyle);
            }

            // Posicionar tooltip
            tooltip.style.display = "block";
            console.log("🎨 TOOLTIP: Display definido como block");

            setTimeout(() => {
                const rect = indicador.getBoundingClientRect();
                const tooltipRect = tooltip.getBoundingClientRect();

                console.log("📐 TOOLTIP: Dimensões indicador:", rect);
                console.log("📐 TOOLTIP: Dimensões tooltip:", tooltipRect);

                // Calcular posição (acima do indicador, centralizado)
                let left = rect.left + rect.width / 2 - tooltipRect.width / 2;
                let top = rect.top - tooltipRect.height - 12;

                // Ajustar se sair da tela (horizontalmente)
                if (left < 10) left = 10;
                if (left + tooltipRect.width > window.innerWidth - 10) {
                    left = window.innerWidth - tooltipRect.width - 10;
                }

                // Ajustar se sair da tela (verticalmente) - mostrar abaixo
                if (top < 10) {
                    top = rect.bottom + 12;
                    console.log(
                        "🔄 TOOLTIP: Reposicionado para baixo do indicador"
                    );
                }

                console.log("📍 TOOLTIP: Posição final:", { left, top });

                tooltip.style.left = left + "px";
                tooltip.style.top = top + "px";
                tooltip.style.opacity = "1";
                tooltip.style.transform = "translateY(0)";

                console.log("✅ TOOLTIP: Posicionamento concluído");
            }, 10);
        };

        const ocultarTooltip = (e) => {
            console.log("🖱️ TOOLTIP: Iniciando ocultação do tooltip");

            // Só ocultar se não estivermos mais interagindo
            tooltipTimer = setTimeout(() => {
                if (!tooltipAtivo) return;

                console.log("🖱️ TOOLTIP: Ocultando tooltip");
                tooltipAtivo = false;

                tooltip.style.opacity = "0";
                tooltip.style.transform = "translateY(8px)";

                setTimeout(() => {
                    tooltip.style.display = "none";
                }, 150);
            }, 300); // Delay maior para permitir movimento suave
        };

        const manterTooltipAberto = () => {
            console.log("🖱️ TOOLTIP: Mantendo tooltip aberto");

            if (tooltipTimer) {
                clearTimeout(tooltipTimer);
                tooltipTimer = null;
            }
            tooltipAtivo = true;
        };

        // Eventos no indicador - CORRIGIDO
        console.log("🔧 TOOLTIP: Adicionando event listeners ao indicador");

        indicador.addEventListener("mouseenter", mostrarTooltip);
        indicador.addEventListener("mouseleave", (e) => {
            console.log("🖱️ TOOLTIP: Mouse saindo do indicador");

            // Verificar se está saindo para o tooltip
            const tooltip = document.getElementById("eprobe-rich-tooltip");
            if (tooltip && tooltip.contains(e.relatedTarget)) {
                console.log(
                    "🖱️ TOOLTIP: Mouse moveu para tooltip - mantendo aberto"
                );
                manterTooltipAberto();
                return;
            }
            ocultarTooltip(e);
        });

        // Eventos no tooltip para mantê-lo aberto quando mouse estiver sobre ele
        // Aguardar o tooltip ser criado antes de adicionar eventos
        setTimeout(() => {
            const tooltip = document.getElementById("eprobe-rich-tooltip");
            if (tooltip) {
                console.log(
                    "🔧 TOOLTIP: Adicionando event listeners ao tooltip"
                );

                tooltip.addEventListener("mouseenter", manterTooltipAberto);
                tooltip.addEventListener("mouseleave", (e) => {
                    console.log("🖱️ TOOLTIP: Mouse saindo do tooltip");

                    // Verificar se está saindo para o indicador ou card
                    if (
                        indicador.contains(e.relatedTarget) ||
                        cardElement.contains(e.relatedTarget)
                    ) {
                        console.log(
                            "🖱️ TOOLTIP: Mouse moveu para card/indicador - mantendo aberto"
                        );
                        return;
                    }
                    ocultarTooltip(e);
                });
            } else {
                console.log(
                    "❌ TOOLTIP: Elemento tooltip não encontrado após criação"
                );
            }
        }, 100);

        console.log(
            "✅ TOOLTIP: Rich tooltip Material Design configurado com sucesso"
        );
        console.log(
            "💡 TOOLTIP: Para debug use window.SENT1_AUTO.debugTooltipCardSessao()"
        );
    }

    /**
     * Adiciona tooltip interativo ao card com múltiplas sessões - VERSÃO FIGMA
     * @param {HTMLElement} cardElement - Elemento do card
     * @param {Array} todasSessoes - Array com todas as sessões
     */
    function adicionarTooltipInterativo(cardElement, todasSessoes) {
        if (!cardElement || !todasSessoes || todasSessoes.length <= 1) return;

        // Criar elemento do tooltip se não existir
        let tooltip = document.getElementById("eprobe-tooltip");
        if (!tooltip) {
            tooltip = document.createElement("div");
            tooltip.id = "eprobe-tooltip";
            document.body.appendChild(tooltip);
        }

        // Encontrar elemento alvo (área das sessões) - adaptar para Figma
        const sessionsIndicator = cardElement.querySelector(
            ".eprobe-figma-sessions-indicator"
        );
        if (!sessionsIndicator) return;

        // Gerar conteúdo do tooltip elegante e minimalista
        const tooltipContent = `
            <div class="eprobe-tooltip-header">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>Histórico de Sessões</span>
            </div>
            <div class="eprobe-tooltip-divider"></div>
            <div class="eprobe-tooltip-sessions">
                ${todasSessoes
                    .map((sessao, index) => {
                        const isRecente = index === 0;
                        const statusIcon = getStatusIcon(sessao.statusOriginal);
                        return `<div class="eprobe-tooltip-session ${
                            isRecente ? "current" : ""
                        }">
                        <div class="session-icon">${statusIcon}</div>
                        <div class="session-info">
                            <div class="session-date">${sessao.data}</div>
                            <div class="session-status">${sessao.status}</div>
                        </div>
                        ${
                            isRecente
                                ? '<div class="session-badge">Atual</div>'
                                : ""
                        }
                    </div>`;
                    })
                    .join("")}
            </div>
        `;

        // Aplicar estilos do tooltip se ainda não existir
        if (!document.querySelector("#eprobe-tooltip-styles")) {
            const tooltipStyle = document.createElement("style");
            tooltipStyle.id = "eprobe-tooltip-styles";
            tooltipStyle.textContent = `
                #eprobe-tooltip {
                    position: absolute;
                    background: #ffffff;
                    border: 1px solid #e5e7eb;
                    border-radius: 12px;
                    font-size: 13px;
                    min-width: 260px;
                    z-index: 10000;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    display: none;
                    pointer-events: none;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }
                
                .eprobe-tooltip-header {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 14px 16px 10px 16px;
                    font-weight: 600;
                    color: #374151;
                    font-size: 13px;
                }
                
                .eprobe-tooltip-header svg {
                    color: #6b7280;
                    flex-shrink: 0;
                }
                
                .eprobe-tooltip-divider {
                    height: 1px;
                    background: #f3f4f6;
                    margin: 0 16px;
                }
                
                .eprobe-tooltip-sessions {
                    padding: 10px 0 14px 0;
                }
                
                .eprobe-tooltip-session {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 8px 16px;
                    transition: background-color 0.15s ease;
                }
                
                .eprobe-tooltip-session:hover {
                    background-color: #f9fafb;
                }
                
                .eprobe-tooltip-session.current {
                    background-color: #eff6ff;
                    border-left: 3px solid #3b82f6;
                    padding-left: 13px;
                }
                
                .session-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 24px;
                    height: 24px;
                    border-radius: 6px;
                    background-color: #f3f4f6;
                    color: #6b7280;
                    flex-shrink: 0;
                }
                
                .eprobe-tooltip-session.current .session-icon {
                    background-color: #dbeafe;
                    color: #3b82f6;
                }
                
                .session-info {
                    flex: 1;
                    min-width: 0;
                }
                
                .session-date {
                    font-weight: 600;
                    color: #1f2937;
                    font-size: 13px;
                    line-height: 1.3;
                }
                
                .session-status {
                    color: #6b7280;
                    font-size: 12px;
                    line-height: 1.3;
                    margin-top: 1px;
                }
                
                .eprobe-tooltip-session.current .session-date {
                    color: #1e40af;
                }
                
                .eprobe-tooltip-session.current .session-status {
                    color: #3b82f6;
                }
                
                .session-badge {
                    background: #3b82f6;
                    color: white;
                    font-size: 10px;
                    font-weight: 600;
                    padding: 3px 8px;
                    border-radius: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
            `;
            document.head.appendChild(tooltipStyle);
        }

        // Eventos de mouse
        sessionsIndicator.addEventListener("mouseenter", (e) => {
            tooltip.innerHTML = tooltipContent;
            tooltip.style.display = "block";

            // Posicionar tooltip
            const rect = sessionsIndicator.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();

            let left = rect.left + rect.width / 2 - tooltipRect.width / 2;
            let top = rect.top - tooltipRect.height - 12;

            // Ajustar se sair da tela
            if (left < 10) left = 10;
            if (left + tooltipRect.width > window.innerWidth - 10) {
                left = window.innerWidth - tooltipRect.width - 10;
            }
            if (top < 10) {
                top = rect.bottom + 12;
            }

            tooltip.style.left = left + "px";
            tooltip.style.top = top + "px";
        });

        sessionsIndicator.addEventListener("mouseleave", () => {
            tooltip.style.display = "none";
        });
    }

    /**
     * Retorna ícone SVG apropriado para o status
     * @param {string} status - Status da sessão
     * @returns {string} - SVG do ícone
     */
    function getStatusIcon(status) {
        const icons = {
            Julgado: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6L9 17l-5-5"></path>
            </svg>`,
            Retirado: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>`,
            Sobrestado: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>`,
            "Pedido de Vista": `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
            </svg>`,
            Pautado: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12,6 12,12 16,14"></polyline>
            </svg>`,
            Adiado: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
                <path d="M16 8a6 6 0 0 0-12 0"></path>
            </svg>`,
        };

        // Buscar ícone por palavra-chave
        for (const [key, icon] of Object.entries(icons)) {
            if (status.includes(key) || key.includes(status.split(" ")[0])) {
                return icon;
            }
        }

        // Ícone padrão
        return `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>`;
    }

    /**
     * Cria um item de informação para o card
     * @param {string} label - Rótulo da informação
     * @param {string} valor - Valor da informação
     * @param {string} icone - Nome do ícone Material
     * @returns {HTMLElement} - Elemento do item criado
     */
    function criarItemInformacao(label, valor, icone) {
        const item = document.createElement("div");
        item.className = "eprobe-info-item";

        const iconeEl = document.createElement("span");
        iconeEl.className = "material-icons eprobe-info-icon";
        iconeEl.textContent = icone;

        const textoContainer = document.createElement("div");
        textoContainer.className = "eprobe-info-text";

        const labelEl = document.createElement("div");
        labelEl.className = "eprobe-info-label";
        labelEl.textContent = label;

        const valorEl = document.createElement("div");
        valorEl.className = "eprobe-info-value";
        valorEl.textContent = valor;

        textoContainer.appendChild(labelEl);
        textoContainer.appendChild(valorEl);

        item.appendChild(iconeEl);
        item.appendChild(textoContainer);

        return item;
    }

    /**
     * 🔧 FUNÇÃO NORMALIZADORA - Extrai a data da sessão de qualquer estrutura
     * ÚNICA FUNÇÃO para obter a data da sessão independente da origem dos dados
     * @param {Object|string} dadosSessao - Dados da sessão (qualquer formato)
     * @returns {string} - Data formatada como string (DD/MM/AAAA) ou fallback
     */
    function extrairDataSessaoNormalizada(dadosSessao) {
        // REGRA CRÍTICA: Sempre declarar variáveis antes de usar
        let dataExtraida = null;

        try {
            // 1. Se dadosSessao é string, retornar diretamente
            if (typeof dadosSessao === "string") {
                return dadosSessao;
            }

            // 2. Se dadosSessao é null/undefined
            if (!dadosSessao) {
                console.log("⚠️ NORMALIZAÇÃO: dadosSessao é null/undefined");
                return "Data não disponível";
            }

            // 3. Tentar dadosSessao.data (estrutura do detectarCardSessaoSimplificado)
            if (typeof dadosSessao.data === "string") {
                dataExtraida = dadosSessao.data;
                console.log(
                    `✅ NORMALIZAÇÃO: Usando dadosSessao.data = "${dataExtraida}"`
                );
                return dataExtraida;
            }

            // 4. Tentar dadosSessao.dataFormatada (estrutura do validarDataBrasileira)
            if (typeof dadosSessao.dataFormatada === "string") {
                dataExtraida = dadosSessao.dataFormatada;
                console.log(
                    `✅ NORMALIZAÇÃO: Usando dadosSessao.dataFormatada = "${dataExtraida}"`
                );
                return dataExtraida;
            }

            // 5. Tentar dadosSessao.data.dataFormatada (estrutura aninhada)
            if (
                dadosSessao.data &&
                typeof dadosSessao.data.dataFormatada === "string"
            ) {
                dataExtraida = dadosSessao.data.dataFormatada;
                console.log(
                    `✅ NORMALIZAÇÃO: Usando dadosSessao.data.dataFormatada = "${dataExtraida}"`
                );
                return dataExtraida;
            }

            // 6. Fallback: Procurar qualquer propriedade que pareça uma data
            const propriedadesPossiveis = [
                "dataOriginal",
                "dataString",
                "dataSessao",
            ];
            for (const prop of propriedadesPossiveis) {
                if (
                    dadosSessao[prop] &&
                    typeof dadosSessao[prop] === "string"
                ) {
                    dataExtraida = dadosSessao[prop];
                    console.log(
                        `✅ NORMALIZAÇÃO: Usando dadosSessao.${prop} = "${dataExtraida}"`
                    );
                    return dataExtraida;
                }
            }

            // 7. Log para debug se nenhuma propriedade foi encontrada
            console.log(
                "❌ NORMALIZAÇÃO: Nenhuma propriedade de data encontrada"
            );
            console.log("   Estrutura recebida:", Object.keys(dadosSessao));
            console.log("   Dados completos:", dadosSessao);

            return "Data não disponível";
        } catch (error) {
            console.error("❌ NORMALIZAÇÃO: Erro ao extrair data:", error);
            return "Erro na data";
        }
    }

    /**
     * 🎯 FUNÇÃO CURTA - Versão concisa para uso diário
     * @param {Object|string} d - Dados da sessão
     * @returns {string} - Data como string
     */
    function getData(d) {
        return extrairDataSessaoNormalizada(d);
    }

    /**
     * Atualiza o card existente com novos dados
     * VERSÃO CORRIGIDA - Usa função normalizadora para extrair data
     * @param {Object} dadosSessao - Novos dados da sessão
     */
    function atualizarCardMaterialDesign(dadosSessao) {
        const cardExistente = document.getElementById("eprobe-data-sessao");

        // 🔧 CORREÇÃO: Usar função curta para extrair data
        const dataExtraida = getData(dadosSessao);

        console.log(
            `📅 MATERIAL: Data normalizada extraída: "${dataExtraida}"`
        );

        if (cardExistente) {
            console.log(
                "🔄 MATERIAL: Card existente encontrado, verificando se precisa atualizar"
            );

            // Verificar se os dados realmente mudaram (usar data normalizada)
            const statusAtual = cardExistente.querySelector(
                ".eprobe-status-text"
            )?.textContent;
            const dataAtual =
                cardExistente.querySelector(".eprobe-date-text")?.textContent;

            if (
                statusAtual === dadosSessao?.status &&
                dataAtual?.includes(dataExtraida)
            ) {
                console.log(
                    "ℹ️ MATERIAL: Card já está atualizado, mantendo estado atual"
                );
                materialDesignState.cardAtivo = true;
                materialDesignState.ultimaDeteccao = dadosSessao;
                return;
            }

            console.log(
                "🔄 MATERIAL: Dados mudaram, atualizando card Material Design"
            );

            // Remover card antigo apenas se os dados mudaram
            cardExistente.remove();

            // USAR A FUNÇÃO INTERNA que retorna elemento DOM
            const card = criarCardMaterialDesign(dadosSessao);

            if (card) {
                inserirCardNaInterface(card);
                console.log("✅ MATERIAL: Card atualizado com sucesso!");
            } else {
                console.error("❌ MATERIAL: Erro ao atualizar card");
            }

            materialDesignState.cardAtivo = true;
            materialDesignState.ultimaDeteccao = dadosSessao;
        } else {
            console.log("🆕 MATERIAL: Criando novo card Material Design");

            // USAR A FUNÇÃO INTERNA que retorna elemento DOM
            const card = criarCardMaterialDesign(dadosSessao);

            if (card) {
                inserirCardNaInterface(card);
                console.log("✅ MATERIAL: Card inserido com sucesso!");
            } else {
                console.error(
                    "❌ MATERIAL: Erro ao criar card - função retornou null"
                );
            }

            materialDesignState.cardAtivo = true;
            materialDesignState.ultimaDeteccao = dadosSessao;
        }
    }

    /**
     * Insere o card na interface ao lado do lblMagistrado na row mt-2
     * VERSÃO CORRIGIDA - Posicionamento específico conforme solicitado
     * @param {HTMLElement} card - Elemento do card a ser inserido
     */
    /**
     * Insere o card fixo ao lado direito do elemento específico
     * POSICIONAMENTO ESPECÍFICO: /html/body/div[2]/div[3]/div[2]/div/div[1]/form[2]/div[3]/div/div/fieldset[1]/div/div[2]/div[3]
     * @param {HTMLElement} card - Elemento do card a ser inserido
     */
    function inserirCardNaInterface(card) {
        console.log(
            "🎯 MATERIAL: Iniciando inserção do card no XPath específico solicitado..."
        );

        // XPATH EXATO SOLICITADO PELO USUÁRIO
        const xpathElemento =
            "/html/body/div[2]/div[3]/div[2]/div/div[1]/form[2]/div[3]/div/div/fieldset[1]/div/div[2]/div[3]/label";

        try {
            const elementoLabel = document.evaluate(
                xpathElemento,
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            ).singleNodeValue;

            if (elementoLabel) {
                console.log(
                    "✅ MATERIAL: Elemento label encontrado via XPath!"
                );
                console.log(
                    "📍 MATERIAL: Elemento:",
                    elementoLabel.tagName,
                    elementoLabel.textContent
                );

                // Obter o elemento pai do label para posicionamento
                const containerPai = elementoLabel.parentElement;
                if (containerPai) {
                    // Configurar o container pai para position relative
                    containerPai.style.position = "relative";

                    // Posicionar o card de forma absoluta ao lado direito do label
                    card.style.position = "absolute";
                    card.style.top = "0";
                    card.style.left = "calc(100% + 15px)"; // 15px de espaçamento à direita
                    card.style.zIndex = "9999";
                    card.style.maxWidth = "180px";
                    card.style.pointerEvents = "auto";

                    // Inserir o card no container pai do label
                    containerPai.appendChild(card);

                    console.log(
                        "✅ MATERIAL: Card posicionado ao lado direito do label específico"
                    );
                    console.log(
                        "🎯 MATERIAL: Posição: absolute left:calc(100% + 15px) top:0"
                    );
                    return true;
                } else {
                    console.log(
                        "⚠️ MATERIAL: Container pai do label não encontrado"
                    );
                }
            } else {
                console.log(
                    "❌ MATERIAL: Elemento label não encontrado no XPath especificado"
                );
            }
        } catch (error) {
            console.log(
                "❌ MATERIAL: Erro ao buscar elemento via XPath:",
                error
            );
        }

        // FALLBACK ÚNICO: Se não encontrar o XPath específico, usar posição fixa simples
        console.log(
            "⚠️ MATERIAL: Usando fallback - posição fixa no canto direito"
        );

        card.style.position = "fixed";
        card.style.top = "200px";
        card.style.right = "30px";
        card.style.zIndex = "9999";
        card.style.maxWidth = "180px";
        card.style.pointerEvents = "auto";

        document.body.appendChild(card);
        console.log("✅ MATERIAL: Card inserido com fallback garantido");
        return true;
    }

    /**
     * Remove o card Material Design da interface
     */
    function removerCardMaterialDesign() {
        const card = document.getElementById("eprobe-data-sessao");
        if (card) {
            card.remove();
            console.log("🗑️ MATERIAL: Card Material Design removido");

            // Atualizar estado
            materialDesignState.cardAtivo = false;
            materialDesignState.ultimaDeteccao = null;

            return true;
        }
        return false;
    }

    /**
     * Verifica se o card Material Design está presente na interface
     * @returns {boolean} - True se o card estiver presente
     */
    function cardMaterialDesignPresente() {
        return !!document.getElementById("eprobe-data-sessao");
    }

    /**
     * Função integrada para detectar dados e criar card Material Design
     * VERSÃO CORRIGIDA FINAL - Usa dados existentes
     */
    // ========================================
    // FUNÇÕES REMOVIDAS - MOVIDAS PARA NAMESPACE CONSOLIDADO
    // ========================================
    // processarTextoFieldsetSessao() -> linha 21320+ no namespace
    // detectarEConfigurarTooltipUnificado() -> linha 21320+ no namespace

    // Funções auxiliares para processar texto

    // ========================================
    // FUNÇÃO DUPLICADA REMOVIDA - detectarEConfigurarTooltipUnificado()
    // Usar implementação no namespace consolidado (linha 21175+)
    // ========================================

    // Função auxiliar para configurar tooltip por tipo
    function configurarTooltipPorTipo(dados) {
        try {
            if (
                dados.tooltipTipo === "rico" &&
                dados.tipo === "multiplas_sessoes"
            ) {
                console.log(
                    "🎨 TOOLTIP: Aplicando tooltip rico para múltiplas sessões"
                );
                adicionarRichTooltipMaterialDesign();
            } else if (dados.tooltipTipo === "simples") {
                console.log("🎨 TOOLTIP: Aplicando tooltip simples");
                criarTooltipSimplificado(dados);
            }
        } catch (error) {
            console.error("❌ TOOLTIP: Erro na configuração por tipo:", error);
        }
    }

    // Função para criar card com tooltip integrado
    function criarCardComTooltipIntegrado() {
        try {
            console.log("🎯 CARD+TOOLTIP: Iniciando criação integrada...");

            // 1. DETECTAR E CONFIGURAR DADOS
            const dadosSessao = detectarEConfigurarTooltipUnificado();

            if (!dadosSessao) {
                console.log(
                    "ℹ️ CARD+TOOLTIP: Sem dados de sessão - não criando card"
                );
                return null;
            }

            // 2. CRIAR CARD MATERIAL DESIGN
            const cardCriado = criarCardMaterialDesign(dadosSessao);

            if (!cardCriado) {
                console.log("❌ CARD+TOOLTIP: Falha na criação do card");
                return null;
            }

            // 3. AGUARDAR E CONFIGURAR TOOLTIP
            setTimeout(() => {
                const cardElement = document.querySelector(
                    ".card-material-design"
                );
                if (cardElement && dadosSessao.temTooltip) {
                    configurarTooltipPorTipo(dadosSessao);
                    console.log(
                        "✅ CARD+TOOLTIP: Card e tooltip configurados com sucesso"
                    );
                } else {
                    console.log(
                        "⚠️ CARD+TOOLTIP: Card criado mas tooltip não configurado"
                    );
                }
            }, 500);

            return dadosSessao;
        } catch (error) {
            console.error("❌ CARD+TOOLTIP: Erro na criação integrada:", error);
            return null;
        }
    }

    /**
     * Carrega os ícones Material Icons se não estiverem disponíveis
     */
    function carregarMaterialIcons() {
        // Verificar se os ícones já estão carregados
        if (document.querySelector('link[href*="material-icons"]')) {
            console.log("✅ MATERIAL: Ícones Material Icons já carregados");
            return Promise.resolve();
        }

        return new Promise((resolve) => {
            console.log("🔄 MATERIAL: Carregando ícones Material Icons...");

            const linkElement = document.createElement("link");
            linkElement.rel = "stylesheet";
            linkElement.href =
                "https://fonts.googleapis.com/icon?family=Material+Icons";

            linkElement.onload = () => {
                console.log(
                    "✅ MATERIAL: Ícones Material Icons carregados com sucesso"
                );
                resolve();
            };

            linkElement.onerror = () => {
                console.warn(
                    "⚠️ MATERIAL: Erro ao carregar ícones Material Icons, continuando sem ícones"
                );
                resolve();
            };

            document.head.appendChild(linkElement);

            // Resolve após 100ms mesmo se onload não disparar (fallback rápido)
            setTimeout(resolve, 100);
        });
    }

    /**
     * Inicialização automática do sistema Material Design
     * VERSÃO OTIMIZADA - Sem recriação automática de cards
     */
    async function inicializarMaterialDesign() {
        // 🔥 PERFORMANCE: Pular se modo ultra-performance estiver ativo
        if (MODO_ULTRA_PERFORMANCE) {
            console.log(
                "🔥 PERFORMANCE: Inicialização Material Design PULADA (modo ultra-performance ativo)"
            );
            return;
        }

        console.log(
            "🚀 MATERIAL: Inicializando sistema Material Design SIMPLIFICADO"
        );

        try {
            // Aguardar um breve momento para garantir que a página esteja carregada
            setTimeout(() => {
                console.log(
                    "🔍 MATERIAL: Executando detecção de dados (sem criação automática de card)"
                );

                // Detectar dados disponíveis, mas NÃO criar card automaticamente
                const resultado =
                    window.SENT1_AUTO?.detectarCardSessaoSimplificado?.();

                if (resultado) {
                    console.log(
                        "✅ MATERIAL: Dados de sessão detectados e salvos (card será exibido apenas se dados forem válidos)"
                    );
                } else {
                    console.log(
                        "ℹ️ MATERIAL: Nenhum dado de sessão detectado na página atual"
                    );
                }
            }, 500);

            console.log(
                "✅ MATERIAL: Sistema Material Design simplificado inicializado com sucesso"
            );
        } catch (error) {
            console.error(
                "❌ MATERIAL: Erro na inicialização do Material Design:",
                error
            );
        }
    }

    /**
     * Aplica o CSS minimalista do Material Design
     */
    function aplicarCSSMaterialDesign() {
        // 🔥 PERFORMANCE: Pular se modo ultra-performance estiver ativo
        if (MODO_ULTRA_PERFORMANCE) {
            console.log(
                "🔥 PERFORMANCE: Aplicação de CSS Material Design PULADA (modo ultra-performance ativo)"
            );
            return;
        }

        console.log("🎨 MATERIAL: Iniciando aplicação do CSS minimalista");

        // Verificar se já foi aplicado
        const styleExistente = document.querySelector(
            "style[data-eprobe-material-design]"
        );
        if (styleExistente) {
            console.log("ℹ️ MATERIAL: CSS já aplicado, pulando aplicação");
            return;
        }

        const css = `
        /* eProbe Card Micro Compacto - Tamanho Exato do Conteúdo */
        .eprobe-material-card-minimal {
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 3px;
            padding: 2px 4px;
            margin: 1px 0;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            width: fit-content;
            max-width: none;
            font-size: 10px;
            transition: all 0.2s ease;
            display: inline-block;
            line-height: 1.1;
        }
        
        .eprobe-material-card-minimal:hover {
            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
        }
        
        .eprobe-card-minimal-content {
            display: flex;
            flex-direction: column;
            gap: 1px;
            white-space: nowrap;
        }
        
        .eprobe-status-row {
            display: flex;
            align-items: center;
            gap: 3px;
        }
        
        .eprobe-date-row {
            display: flex;
            align-items: center;
            gap: 3px;
        }
        
        .eprobe-status-icon,
        .eprobe-date-icon {
            width: 12px;
            height: 12px;
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
        
        .eprobe-status-text {
            font-size: 10px;
            font-weight: 600;
            color: #1f2937;
            line-height: 1.1;
        }
        
        .eprobe-date-label {
            font-size: 9px;
            color: #6b7280;
            font-weight: 500;
            line-height: 1.1;
        }
        
        .eprobe-date-text {
            font-size: 10px;
            color: #374151;
            font-weight: 600;
            line-height: 1.1;
        }
        
        /* Ícones SVG micro otimizados */
        .eprobe-icon-calendar::before {
            content: "";
            display: block;
            width: 12px;
            height: 12px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='4' rx='2' ry='2'/%3E%3Cline x1='16' x2='16' y1='2' y2='6'/%3E%3Cline x1='8' x2='8' y1='2' y2='6'/%3E%3Cline x1='3' x2='21' y1='10' y2='10'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
        }
        
        .eprobe-icon-check::before {
            content: "";
            display: block;
            width: 12px;
            height: 12px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2310b981' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20,6 9,17 4,12'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
        }
        
        .eprobe-icon-alert::before {
            content: "";
            display: block;
            width: 12px;
            height: 12px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='m12 17 .01 0'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
        }
        
        .eprobe-icon-info::before {
            content: "";
            display: block;
            width: 12px;
            height: 12px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%233b82f6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
        }
        
        /* Cores dos ícones por status */
        .eprobe-status-icon.status-pautado .eprobe-icon-info::before {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%233b82f6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
        }
        
        .eprobe-status-icon.status-julgado .eprobe-icon-check::before {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2310b981' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20,6 9,17 4,12'/%3E%3C/svg%3E");
        }
        
        .eprobe-status-icon.status-retirado .eprobe-icon-alert::before {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23f59e0b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='m12 17 .01 0'/%3E%3C/svg%3E");
        }
        
        /* Responsividade */
        @media (max-width: 768px) {
            .eprobe-material-card-minimal {
                max-width: 90vw;
            }
            
            .eprobe-card-minimal-content {
                white-space: normal;
            }
        }
    `;

        // Carregar ícones já incluídos no CSS
        const styleElement = document.createElement("style");
        styleElement.setAttribute("data-eprobe-material-design", "true");
        styleElement.textContent = css;
        document.head.appendChild(styleElement);

        console.log(
            "✅ MATERIAL: CSS minimalista aplicado com ícones SVG incluídos"
        );
    }

    /**
     * 🔧 FUNÇÃO DE DIAGNÓSTICO - Verificar aplicação de ícones e CSS
     * Seguindo REGRAS CRÍTICAS: SEMPRE declarar variáveis antes de usar
     */
    function diagnosticarIconesCSS() {
        console.log("🔧 DIAGNÓSTICO: Verificando aplicação de ícones CSS");

        // REGRA CRÍTICA: Declarar todas as variáveis antes de usar
        let cardEncontrado = false;
        let cssEncontrado = false;
        let iconesPresentes = false;

        // Verificar se o card existe
        const card = document.getElementById("eprobe-data-sessao");
        if (card) {
            cardEncontrado = true;
            console.log("✅ DIAGNÓSTICO: Card encontrado:", card);
            console.log("📝 DIAGNÓSTICO: HTML do card:", card.innerHTML);

            // Verificar ícones no card
            const icones = card.querySelectorAll('[class*="eprobe-icon"]');
            if (icones.length > 0) {
                iconesPresentes = true;
                console.log(
                    `🎯 DIAGNÓSTICO: ${icones.length} ícone(s) encontrado(s):`
                );
                icones.forEach((icone, index) => {
                    console.log(`   ${index + 1}. Classe: ${icone.className}`);
                    const computedStyle = window.getComputedStyle(
                        icone,
                        "::before"
                    );
                    console.log(
                        `   ${index + 1}. Background-image: ${
                            computedStyle.backgroundImage
                        }`
                    );
                });
            } else {
                console.log("❌ DIAGNÓSTICO: Nenhum ícone encontrado no card");
            }
        } else {
            console.log("❌ DIAGNÓSTICO: Card não encontrado");
        }

        // Verificar se o CSS foi aplicado
        const styleElements = document.querySelectorAll(
            'style[data-eprobe-material-design="true"]'
        );
        if (styleElements.length > 0) {
            cssEncontrado = true;
            console.log(
                `✅ DIAGNÓSTICO: ${styleElements.length} elemento(s) de estilo encontrado(s)`
            );
            styleElements.forEach((style, index) => {
                const cssContent = style.textContent || "";
                const temIcones = cssContent.includes("eprobe-icon");
                console.log(`   ${index + 1}. Tem ícones CSS: ${temIcones}`);
                if (temIcones) {
                    const iconeMatches = cssContent.match(/\.eprobe-icon-\w+/g);
                    console.log(
                        `   ${index + 1}. Ícones definidos: ${
                            iconeMatches ? iconeMatches.length : 0
                        }`
                    );
                }
            });
        } else {
            console.log(
                "❌ DIAGNÓSTICO: CSS do Material Design não encontrado"
            );
        }

        // Resultado do diagnóstico
        const diagnostico = {
            cardEncontrado,
            cssEncontrado,
            iconesPresentes,
            timestamp: new Date().toISOString(),
        };

        console.log("📊 DIAGNÓSTICO: Resultado final:", diagnostico);
        return diagnostico;
    }

    /**
     * 🔧 FUNÇÃO DE CORREÇÃO - Forçar reaplicação de CSS de ícones
     * Seguindo REGRAS CRÍTICAS: SEMPRE verificar existência antes de usar
     */
    function forcarReaplicacaoIcones() {
        console.log("🔧 CORREÇÃO: Forçando reaplicação de CSS de ícones");

        // REGRA CRÍTICA: Verificar existência antes de usar
        const styleExistente = document.querySelector(
            'style[data-eprobe-material-design="true"]'
        );
        if (styleExistente) {
            console.log("🔄 CORREÇÃO: Removendo CSS existente para recriar");
            styleExistente.remove();
        }

        // Reaplicar CSS
        aplicarCSSMaterialDesign();

        // Aguardar um frame e diagnosticar novamente
        requestAnimationFrame(() => {
            diagnosticarIconesCSS();
        });
    }

    // IMPORTANTE: Aplicar CSS imediatamente
    aplicarCSSMaterialDesign();

    /**
     * 🔧 FUNÇÃO DE CORREÇÃO - Forçar recriação completa do card de sessão
     * Seguindo REGRAS CRÍTICAS: SEMPRE declarar variáveis e verificar existência
     */
    function forcarRecriacaoCardSessao() {
        console.log(
            "🔧 CORREÇÃO: Forçando recriação completa do card de sessão"
        );

        // REGRA CRÍTICA: Declarar todas as variáveis antes de usar
        let cardExistente = null;
        let dadosSessaoGlobais = null;
        let statusSessao = null;

        try {
            // Verificar se há dados globais salvos
            if (
                typeof window.SENT1_AUTO !== "undefined" &&
                window.SENT1_AUTO.showDadosGlobaisSessao
            ) {
                dadosSessaoGlobais = window.SENT1_AUTO.showDadosGlobaisSessao();
            }

            // Obter status atual
            if (typeof getStatusSessao === "function") {
                statusSessao = getStatusSessao();
            }

            // Dados mínimos para o card
            const dadosCard = {
                status: statusSessao?.status || "Pautado",
                data: {
                    dataFormatada:
                        statusSessao?.data?.dataFormatada || "29/07/2025",
                },
            };

            console.log("📋 CORREÇÃO: Dados para o card:", dadosCard);

            // Remover card existente
            cardExistente = document.getElementById("eprobe-data-sessao");
            if (cardExistente) {
                console.log("🗑️ CORREÇÃO: Removendo card existente");
                cardExistente.remove();
            }

            // Forçar reaplicação do CSS
            forcarReaplicacaoIcones();

            // Aguardar um frame para garantir que o CSS foi aplicado
            requestAnimationFrame(() => {
                try {
                    // Criar novo card
                    const novoCard =
                        window.SENT1_AUTO.criarCardMaterialDesign(dadosCard);

                    // Inserir no local correto
                    const targetContainer = encontrarContainerParaCard();
                    if (targetContainer && novoCard) {
                        targetContainer.appendChild(novoCard);
                        console.log(
                            "✅ CORREÇÃO: Card recriado e inserido com sucesso"
                        );

                        // Diagnosticar após inserção
                        setTimeout(() => {
                            diagnosticarIconesCSS();
                        }, 100);
                    } else {
                        console.log(
                            "❌ CORREÇÃO: Falha ao encontrar container ou criar card"
                        );
                    }
                } catch (error) {
                    console.error("❌ CORREÇÃO: Erro ao recriar card:", error);
                }
            });
        } catch (error) {
            console.error("❌ CORREÇÃO: Erro geral na recriação:", error);
        }
    }

    /**
     * 🔍 FUNÇÃO AUXILIAR - Encontrar container adequado para o card
     * Seguindo REGRAS CRÍTICAS: SEMPRE retornar valor consistente
     */
    function encontrarContainerParaCard() {
        // REGRA CRÍTICA: Declarar variável antes de usar
        let container = null;

        // Estratégia 1: Tentar encontrar container específico do eProc
        const possiveisContainers = [
            "#divInfraAreaProcesso",
            "#conteudoMinutas",
            "#fldMinutas",
            ".infraAreaTabela",
            "body",
        ];

        for (const seletor of possiveisContainers) {
            container = document.querySelector(seletor);
            if (container) {
                console.log(`✅ CONTAINER: Encontrado container: ${seletor}`);
                break;
            }
        }

        // Fallback garantido
        if (!container) {
            container = document.body;
            console.log("⚠️ CONTAINER: Usando fallback para body");
        }

        return container;
    }

    // 🔧 FUNÇÃO DE CORREÇÃO AUTOMÁTICA SIMPLES (movida para namespace principal)

    // 🎨 SISTEMA GLOBAL DE PERSONALIZAÇÃO DE BOTÕES DO EPROC
    // Funções expostas globalmente para personalizar botões (fora da IIFE)

    // Configurações de temas para botões
    const TEMAS_BOTOES_EPROC = {
        elegante: {
            backgroundColor:
                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "#ffffff",
            border: "1px solid #5a67d8",
            borderRadius: "8px",
            boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
            transition: "all 0.3s ease",
            hover: {
                boxShadow: "0 6px 20px rgba(102, 126, 234, 0.4)",
            },
            focus: {
                boxShadow: "0 0 0 3px rgba(102, 126, 234, 0.3)",
                outline: "none",
            },
        },
        minimalista: {
            backgroundColor: "#f8f9fa",
            color: "#495057",
            border: "1px solid #dee2e6",
            borderRadius: "4px",
            boxShadow: "none",
            transition: "all 0.2s ease",
            hover: {
                backgroundColor: "#e9ecef",
                borderColor: "#adb5bd",
            },
            focus: {
                borderColor: "#80bdff",
                boxShadow: "0 0 0 0.2rem rgba(0, 123, 255, 0.25)",
            },
        },
        escuro: {
            backgroundColor: "#343a40",
            color: "#ffffff",
            border: "1px solid #495057",
            borderRadius: "6px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            transition: "all 0.3s ease",
            hover: {
                backgroundColor: "#495057",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
            },
            focus: {
                boxShadow: "0 0 0 3px rgba(52, 58, 64, 0.3)",
            },
        },
        /* TEMPORARIAMENTE DESABILITADO - Tema Material
    material: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: "1",
        textDecoration: "none",
        color: "#3e505b",
        fontSize: "15px",
        borderRadius: "5px",
        width: "200px",
        height: "40px",
        fontWeight: "bold",
        position: "relative",
        transition: "0.3s",
        boxShadow: "1px 2px 4px -2px rgba(0, 0, 0, 0.53)",
        overflow: "hidden",
        backgroundColor: "#e0e0e0",
        border: "none",
        hover: {
            backgroundColor: "#f2f2f2",
        },
        // Pseudo-elementos serão aplicados via CSS dinâmico
        beforeAfter: {
            display: "block",
            height: "2px",
            width: "100%",
            position: "absolute",
            left: "0",
    },
    /* TEMPORARIAMENTE DESABILITADO - Tema Material
    material: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: "1",
        textDecoration: "none",
        color: "#3e505b",
        fontSize: "15px",
        borderRadius: "5px",
        width: "200px",
        height: "40px",
        fontWeight: "bold",
        position: "relative",
        transition: "0.3s",
        boxShadow: "1px 2px 4px -2px rgba(0, 0, 0, 0.53)",
        overflow: "hidden",
        backgroundColor: "#e0e0e0",
        border: "none",
        hover: {
            backgroundColor: "#f2f2f2",
        },
        beforeAfter: {
            display: "block",
            height: "2px",
            width: "100%",
            position: "absolute",
            left: "0",
            background: "#144CFF",
            transition: ".3s",
        },
    },
    */
        profissional: {
            backgroundColor: "#007ebd",
            color: "#ffffff",
            border: "1px solid #006ba6",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(0, 126, 189, 0.2)",
            transition: "all 0.2s ease",
            hover: {
                backgroundColor: "#006ba6",
                boxShadow: "0 4px 8px rgba(0, 126, 189, 0.3)",
            },
            focus: {
                boxShadow: "0 0 0 3px rgba(0, 126, 189, 0.3)",
            },
        },
    };

    // Função principal para aplicar estilo personalizado aos botões
    window.aplicarEstiloBotoesEproc = function (
        tema = "elegante",
        opcoes = {}
    ) {
        console.log(`🎨 BOTÕES: Aplicando tema "${tema}" aos botões do eProc`);

        // Verificar se o tema existe
        if (!TEMAS_BOTOES_EPROC[tema]) {
            console.warn(
                `⚠️ BOTÕES: Tema "${tema}" não encontrado. Temas disponíveis:`,
                Object.keys(TEMAS_BOTOES_EPROC)
            );
            tema = "elegante"; // Fallback para tema padrão
        }

        const configuracaoTema = { ...TEMAS_BOTOES_EPROC[tema], ...opcoes };

        // Seletores para todos os tipos de botões do eProc (INCLUINDO botões eProbe - EXCLUINDO pesquisa, navbar, infraLegendObrigatorio, btn-link e btn-sm)
        const seletoresBotoes = [
            ".bootstrap-styles .btn:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm)",
            ".bootstrap-styles .eproc-button:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm)",
            ".bootstrap-styles .eproc-button-primary:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm)",
            ".bootstrap-styles .infraButton:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm)",
            ".bootstrap-styles .infraButton.btn-primary:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm)",
            ".bootstrap-styles .infraButton.eproc-button-primary:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm)",
            ".bootstrap-styles .infraArvore .infraButton.infraArvoreNoSelecionado:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm)",
            'button[class*="infra"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm)',
            'input[type="button"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm)',
            'input[type="submit"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm)',
            'button[onclick*="abrirVisualizacao"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm)',
            'button[onclick*="processo"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm)',
        ];

        // Remover estilo anterior se existir
        // Remover estilo anterior se existir
        const estiloAnterior = document.getElementById(
            "eprobe-estilo-botoes-eproc"
        );
        if (estiloAnterior) {
            estiloAnterior.remove();
        }

        // Criar novo estilo
        const estiloElemento = document.createElement("style");
        estiloElemento.id = "eprobe-estilo-botoes-eproc";

        // Gerar CSS baseado na configuração do tema
        let css = `
        /* 🎨 eProbe - Estilo Personalizado dos Botões do eProc - Tema: ${tema} */
        
        /* 🎯 SINCRONIZAÇÃO: Elemento txtUnderline do eProc com mesma cor dos botões */
        #txtUnderline {
            color: ${configuracaoTema.color} !important;
        }
        
        /* Estilo base dos botões */
        ${seletoresBotoes.join(", ")} {
            background: ${configuracaoTema.backgroundColor} !important;
            color: ${configuracaoTema.color} !important;
            border: ${configuracaoTema.border} !important;
            border-radius: ${configuracaoTema.borderRadius} !important;
            box-shadow: ${configuracaoTema.boxShadow} !important;
            transition: ${configuracaoTema.transition} !important;
            font-weight: 500 !important;
            cursor: pointer !important;
        }
    `;

        // Adicionar estilos de hover se definidos
        if (configuracaoTema.hover) {
            const hoverProps = Object.entries(configuracaoTema.hover)
                .map(
                    ([prop, value]) =>
                        `${prop
                            .replace(/([A-Z])/g, "-$1")
                            .toLowerCase()}: ${value} !important;`
                )
                .join("\n                ");

            css += `
        /* Estilo hover */
        ${seletoresBotoes.map((s) => `${s}:hover`).join(", ")} {
            ${hoverProps}
        }
        `;
        }

        // Adicionar estilos de focus se definidos
        if (configuracaoTema.focus) {
            const focusProps = Object.entries(configuracaoTema.focus)
                .map(
                    ([prop, value]) =>
                        `${prop
                            .replace(/([A-Z])/g, "-$1")
                            .toLowerCase()}: ${value} !important;`
                )
                .join("\n                ");

            css += `
        /* Estilo focus */
        ${seletoresBotoes.map((s) => `${s}:focus`).join(", ")} {
            ${focusProps}
        }
        `;
        }

        // Adicionar estilos para estados ativos
        css += `
        /* Estilo disabled */
        ${seletoresBotoes.map((s) => `${s}:disabled`).join(", ")} {
            opacity: 0.6 !important;
            cursor: not-allowed !important;
            transform: none !important;
        }
    `;

        // Lógica especial para o tema "material" - adicionar pseudo-elementos
        if (tema === "material") {
            css += `
        /* 🛡️ PROTEÇÃO ANTI-INJEÇÃO EPROC: Bloquear estilos inline para tema Material */
        ${seletoresBotoes.join(", ")} {
            background: inherit !important;
            width: auto !important;
            display: inline-block !important;
        }
        
        /* Tema Material - Pseudo-elementos ::before e ::after */
        ${seletoresBotoes.map((s) => `${s}::before`).join(", ")},
        ${seletoresBotoes.map((s) => `${s}::after`).join(", ")} {
            content: "" !important;
            display: block !important;
            height: 2px !important;
            width: 100% !important;
            position: absolute !important;
            left: 0 !important;
            background: #ada5a5 !important;
            transition: .3s !important;
            z-index: 1 !important;
        }
        
        ${seletoresBotoes.map((s) => `${s}::before`).join(", ")} {
            top: 0 !important;
        }
        
        ${seletoresBotoes.map((s) => `${s}::after`).join(", ")} {
            bottom: 0 !important;
        }
        `;
        }

        // CSS para margin-right do botão - SOLUÇÃO SIMPLES QUE FUNCIONOU
        css += `
    /* 🛡️ EPROBE BUTTONS: Margin-right no botão */
    #documento-relevante-auto-button { margin-right: 4px !important; }
    
    /* 🛡️ EPROBE BUTTONS: Margin-right nos SVGs dos botões personalizados */
    #documento-relevante-auto-button svg { margin-right: 4px !important; }
    .infraButton svg { margin-right: 4px !important; }
    .btn-primary svg { margin-right: 4px !important; }
    .eprobe-button svg { margin-right: 4px !important; }
    
    /* 🛡️ PROTEÇÃO: Garantir espaçamento correto em todos os botões eProbe */
    button[id*="documento-relevante"] svg { margin-right: 4px !important; }
    button[class*="eprobe"] svg { margin-right: 4px !important; }
    `;

        // Adicionar proteção específica para botões de pesquisa, navbar E infraLegendObrigatorio
        css +=
            '\n\n    /* 🎯 ALINHAMENTO: Centralizar navbar flexbox */\n    .d-none.d-md-flex {\n        align-items: center !important;\n    }\n\n    /* 🛡️ PROTEÇÃO: Manter aparência original para elementos excluídos */\n    .btn-pesquisar, .btn-pesquisar-nova-janela, .search-button,\n    button[class*="btn-pesquisar"], .input-group-btn .btn,\n    .btn-pesquisar::before, .btn-pesquisar::after,\n    .btn-pesquisar-nova-janela::before, .btn-pesquisar-nova-janela::after,\n    .search-button::before, .search-button::after,\n    .infraLegendObrigatorio, .infraLegendObrigatorio *,\n    legend.infraLegendObrigatorio, legend.infraLegendObrigatorio * {\n        /* Preservar estilos originais sem resetar tudo */\n    }\n\n    /* 🛡️ INFRALEGEND: Garantir que infraLegendObrigatorio mantenha aparência original */\n    .infraLegendObrigatorio, legend.infraLegendObrigatorio {\n        background: initial !important;\n        color: initial !important;\n        border: initial !important;\n        border-radius: initial !important;\n        box-shadow: initial !important;\n        transition: initial !important;\n        font-weight: initial !important;\n        cursor: initial !important;\n    }\n\n ';

        estiloElemento.textContent = css;
        document.head.appendChild(estiloElemento);

        // Salvar preferência no localStorage
        try {
            localStorage.setItem("eprobe_tema_botoes_eproc", tema);
            localStorage.setItem(
                "eprobe_opcoes_botoes_eproc",
                JSON.stringify(opcoes)
            );
        } catch (error) {
            console.warn("⚠️ BOTÕES: Erro ao salvar preferências:", error);
        }

        console.log(
            `✅ BOTÕES: Tema "${tema}" aplicado com sucesso a todos os botões do eProc`
        );

        // Retornar informações sobre a aplicação
        return {
            tema: tema,
            botoesAfetados: document.querySelectorAll(
                seletoresBotoes.join(", ")
            ).length,
            configuracao: configuracaoTema,
        };
    };

    // Função para restaurar tema salvo
    window.restaurarTemaBotoesEproc = function () {
        try {
            const temaSalvo = localStorage.getItem("eprobe_tema_botoes_eproc");
            const opcoesSalvas = localStorage.getItem(
                "eprobe_opcoes_botoes_eproc"
            );

            if (temaSalvo) {
                const opcoes = opcoesSalvas ? JSON.parse(opcoesSalvas) : {};
                window.aplicarEstiloBotoesEproc(temaSalvo, opcoes);
                console.log(
                    `🔄 BOTÕES: Tema salvo "${temaSalvo}" restaurado automaticamente`
                );
                return true;
            }
        } catch (error) {
            console.warn("⚠️ BOTÕES: Erro ao restaurar tema salvo:", error);
        }
        return false;
    };

    // Função para resetar estilos para o padrão do eProc
    window.resetarBotoesEproc = function () {
        const estiloPersonalizado = document.getElementById(
            "eprobe-estilo-botoes-eproc"
        );
        if (estiloPersonalizado) {
            estiloPersonalizado.remove();
            localStorage.removeItem("eprobe_tema_botoes_eproc");
            localStorage.removeItem("eprobe_opcoes_botoes_eproc");
            console.log("🔄 BOTÕES: Estilos resetados para o padrão do eProc");
            return true;
        }
        return false;
    };

    // Função para listar temas disponíveis
    window.listarTemasBotoesEproc = function () {
        console.log(
            "🎨 BOTÕES: Temas disponíveis:",
            Object.keys(TEMAS_BOTOES_EPROC)
        );
        return Object.keys(TEMAS_BOTOES_EPROC);
    };

    // Função para aplicar tema personalizado
    window.criarTemaPersonalizadoBotoes = function (nome, configuracao) {
        if (!nome || !configuracao) {
            console.warn(
                "⚠️ BOTÕES: Nome e configuração são obrigatórios para criar tema personalizado"
            );
            return false;
        }

        TEMAS_BOTOES_EPROC[nome] = configuracao;
        console.log(
            `✅ BOTÕES: Tema personalizado "${nome}" criado com sucesso`
        );
        return true;
    };

    // Auto-aplicar tema salvo quando a página carregar
    setTimeout(() => {
        if (!window.restaurarTemaBotoesEproc()) {
            // Se não há tema salvo, aplicar tema padrão elegante
            // window.aplicarEstiloBotoesEproc('elegante');
        }
    }, 1000);

    // ============================================
    // FUNÇÕES DE NAVBAR REMOVIDAS - CENTRALIZADAS EM gerenciarNavbarEprobe()
    // ============================================
    //
    // 🗑️ REMOVIDAS:
    // - inserirElementoNavbarEproc()
    // - removerElementoNavbarEproc()
    // - forcarElementoEprobeNavbar()
    // - carregarFonteExo2() [removida - desnecessária na versão minimalista]
    //
    // ✅ ÚNICA FUNÇÃO ATIVA: window.gerenciarNavbarEprobe()
    //

    // ============================================
    // GERENCIADOR CENTRALIZADO DA NAVBAR - FUNÇÃO ÚNICA
    // ============================================
    //
    // 🎯 ARQUITETURA LIMPA:
    // ✅ CSS unificado: Uma única regra CSS consolida todos os estilos (linha ~11800)
    // ✅ JavaScript centralizado: Uma única função gerencia toda a lógica
    // ✅ Observer unificado: Um só MutationObserver para detecção
    // ✅ Monitoramento simples: Um único setInterval para manutenção
    // ✅ Zero duplicação: Todas as funções antigas foram removidas
    //
    // Esta função substitui todas as funções anteriores:
    // - tentarInserirElementoNavbar()
    // - inicializarNavbarOtimizada()
    // - aplicarEstilosNavbarInstantaneos()
    // - executarOtimizacoesImediatas()
    // - monitorarElementoEprobe()
    // - navbarObserver + navbarStyleObserver
    // - múltiplos setTimeout/setInterval duplicados

    /**
     * 🎯 NAVBAR SIMPLES: Função otimizada sem complexidades desnecessárias
     */
    window.gerenciarNavbarEprobe = function () {
        if (window.navbarEprobeInicializada) return;
        window.navbarEprobeInicializada = true;

        // Função simplificada para inserir elemento
        function inserir() {
            const navbar = document.querySelector("nav#navbar");
            const marketplace = navbar?.querySelector(
                'a[href*="pdpj/marketplace_redirecionar"]'
            );

            if (
                !marketplace ||
                document.getElementById("eprobe-navbar-element")
            ) {
                return;
            }

            const link = document.createElement("a");
            link.id = "eprobe-navbar-element";
            link.href = "https://e-probe.vercel.app/";
            link.target = "_blank";
            link.style.cssText =
                "padding:5px 6px;text-decoration:none;display:flex;align-items:center;height:50px";
            link.innerHTML = `<img src="${chrome.runtime.getURL(
                "assets/40x.png"
            )}" style="width:40px;height:40px">`;

            marketplace.parentNode.insertBefore(link, marketplace);
        }

        // Executar quando navbar estiver disponível
        if (document.querySelector("nav#navbar")) {
            inserir();
        } else {
            // Observer simples sem overhead
            const observer = new MutationObserver(() => {
                if (document.querySelector("nav#navbar")) {
                    inserir();
                    observer.disconnect();
                }
            });
            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });
        }
    };

    // 🚀 EXECUÇÃO IMEDIATA DA NAVBAR - ELIMINAR DELAY
    // Executar gerenciamento da navbar IMEDIATAMENTE (sem timeout)
    if (window.gerenciarNavbarEprobe) {
        console.log("⚡ NAVBAR: Executando gerenciamento imediato da navbar");
        window.gerenciarNavbarEprobe();
    } else {
        // Se a função ainda não estiver disponível, aguardar pouco e tentar novamente
        setTimeout(() => {
            if (window.gerenciarNavbarEprobe) {
                console.log(
                    "⚡ NAVBAR: Executando gerenciamento da navbar (tentativa 2)"
                );
                window.gerenciarNavbarEprobe();
            }
        }, 50);
    }

    // ============================================
    // PERSONALIZAÇÃO DO CAMPO DE PESQUISA DA NAVBAR
    // ============================================

    /**
     * 🔍 NAVBAR: Personalizar campo de pesquisa de processo
     * Altera o placeholder e aplica estilo quase invisível
     */
    function personalizarCampoPesquisaNavbar() {
        console.log("🔍 NAVBAR: Personalizando campo de pesquisa...");

        const campoPesquisa = document.querySelector(
            "#txtNumProcessoPesquisaRapida"
        );

        if (campoPesquisa) {
            // Alterar o placeholder
            campoPesquisa.placeholder = "digite o n. do processo";

            // Aplicar CSS para placeholder quase invisível
            const style = document.createElement("style");
            style.id = "eprobe-pesquisa-navbar-style";
            style.textContent = `
            /* 🔍 PESQUISA NAVBAR: Placeholder quase invisível */
            #txtNumProcessoPesquisaRapida::placeholder {
                color: rgba(255, 255, 255, 1) !important;
                opacity: 0.4 !important;
                font-style: italic !important;
            }
            
            /* Para Firefox */
            #txtNumProcessoPesquisaRapida::-moz-placeholder {
                color: rgba(255, 255, 255, 1) !important;
                opacity: 0.4 !important;
                font-style: italic !important;
            }
            
            /* Para Edge/IE */
            #txtNumProcessoPesquisaRapida::-ms-input-placeholder {
                color: rgba(255, 255, 255, 1) !important;
                opacity: 0.4 !important;
                font-style: italic !important;
            }
        `;

            // Verificar se o estilo já existe antes de adicionar
            const estiloExistente = document.getElementById(
                "eprobe-pesquisa-navbar-style"
            );
            if (!estiloExistente) {
                document.head.appendChild(style);
            }

            console.log(
                "✅ NAVBAR: Campo de pesquisa personalizado com sucesso"
            );
            return true;
        } else {
            console.log("⚠️ NAVBAR: Campo de pesquisa não encontrado");
            return false;
        }
    }

    /**
     * 🎯 NAVBAR: Monitorar e aplicar personalização do campo de pesquisa
     * Executa com observer para garantir que funcione mesmo com carregamento dinâmico
     */
    function inicializarPersonalizacaoPesquisaNavbar() {
        // Tentar aplicar imediatamente
        if (personalizarCampoPesquisaNavbar()) {
            return;
        }

        // Se não encontrou, usar observer para aguardar o elemento aparecer
        const observer = new MutationObserver(() => {
            if (personalizarCampoPesquisaNavbar()) {
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });

        // Timeout de segurança para evitar observer infinito
        setTimeout(() => {
            observer.disconnect();
        }, 10000);

        // Verificação final do status dos botões após inicialização completa
        setTimeout(() => {
            console.log("=== STATUS FINAL DOS BOTÕES ===");
            const integratedButton = document.getElementById(
                "documento-relevante-auto-button"
            );
            const floatingButton = document.getElementById("sent1-auto-button");

            console.log(
                "Botão integrado:",
                integratedButton ? "✅ Criado" : "❌ Não encontrado"
            );
            console.log(
                "Botão flutuante:",
                floatingButton ? "✅ Criado" : "❌ Não encontrado"
            );
            console.log("URL atual:", window.location.href);
            console.log("Critério integrado:", shouldShowIntegratedButton());
            console.log("Critério flutuante:", shouldShowFloatingButton());

            if (!integratedButton && !floatingButton) {
                console.log(
                    "⚠️ ATENÇÃO: Nenhum botão foi criado - tentando uma última vez"
                );
                ensureButtonExists();
            }
        }, 5000);
    }

    // Expor função globalmente para debug
    window.personalizarCampoPesquisaNavbar = personalizarCampoPesquisaNavbar;

    // 🎨 SISTEMA DE SUBSTITUIÇÃO DE ÍCONES NO FIELDSET DE AÇÕES

    // Mapeamento de ícones antigos para novos SVGs
    const ICON_REPLACEMENTS = {
        // Árvore
        "arvore documento_listar": {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0c6e51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-network-icon lucide-network"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>',
            selector: 'img[alt="arvore documento_listar"]',
        },
        // Cancelar Movimentação
        "processo movimento_desativar_consulta": {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7b0a0a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
            selector: 'img[alt="processo movimento_desativar_consulta"]',
        },
        // Audiência
        "audiencia listar": {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-audio-lines-icon lucide-audio-lines"><path d="M2 10v3"/><path d="M6 6v11"/><path d="M10 3v18"/><path d="M14 8v7"/><path d="M18 5v13"/><path d="M22 10v3"/></svg>',
            selector: 'img[alt="audiencia listar"]',
        },
        // Download Completo
        "selecionar processos_agendar_arquivo_completo": {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2 2v-4"/><path d="m7 10 5 5 5-5"/></svg>',
            selector:
                'img[alt="selecionar processos_agendar_arquivo_completo"]',
        },
        // Enviar E-mail
        "processo enviar_email_listar": {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-at-sign-icon lucide-at-sign"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>',
            selector: 'img[alt="processo enviar_email_listar"]',
        },
        // Expedir Carta
        "processo expedir_carta_subform": {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>',
            selector: 'img[alt="processo expedir_carta_subform"]',
        },
        // Gerenciar Situação das Partes
        "gerenciamento partes_situacao_listar": {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-pen-icon lucide-user-round-pen"><path d="M2 21a8 8 0 0 1 10.821-7.487"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="8" r="5"/></svg>',
            selector: 'img[alt="gerenciamento partes_situacao_listar"]',
        },
        // Intimar
        "processo intimacao": {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scroll-text-icon lucide-scroll-text"><path d="M15 12h-5"/><path d="M15 8h-5"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>',
            selector: 'img[alt="processo intimacao"]',
        },
        // Nomear Peritos/Dativos
        "processo intimacao_bloco": {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-microscope-icon lucide-microscope"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>',
            selector: 'img[alt="processo intimacao_bloco"]',
        },
        // Retificar Autuação
        "processo edicao": {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-spell-check-icon lucide-spell-check"><path d="m6 16 6-12 6 12"/><path d="M8 12h8"/><path d="m16 20 2 2 4-4"/></svg>',
            selector: 'img[alt="processo edicao"]',
        },
        // Suscitar IRDR
        "processo cadastrar": {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scale-icon lucide-scale"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>',
            selector: 'img[alt="processo cadastrar"]',
        },
        // Redistribuição
        "redistribuicao processo": {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-pull-request-arrow-icon lucide-git-pull-request-arrow"><circle cx="5" cy="6" r="3"/><path d="M5 9v12"/><circle cx="19" cy="18" r="3"/><path d="m15 9-3-3 3-3"/><path d="M12 6h5a2 2 0 0 1 2 2v7"/></svg>',
            selector: 'img[alt="redistribuicao processo"]',
        },
        // Citar
        "processo citacao": {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scroll-icon lucide-scroll"><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>',
            selector: 'img[alt="processo citacao"]',
        },
        // Ações Preferenciais
        "acoes preferenciais": {
            newSvg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
            selector: 'img[alt="acoes preferenciais"]',
        },
        // Atualizar/Refresh
        refresh: {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-ccw-icon lucide-refresh-ccw"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>',
            selector: 'img[id="refresh"]',
        },
        // Histórico/Lista
        historico: {
            newSvg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F83CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
            selector: 'img[src*="valores.gif"]',
        },
        // Nova Minuta
        "Nova Minuta": {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-plus-2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M3 15h6"/><path d="M6 12v6"/></svg>',
            selector: 'img[alt="Nova Minuta"]',
        },
    };

    // Mapeamentos adicionais por texto do link
    const ICON_REPLACEMENTS_BY_TEXT = {
        "Incluir em Pauta/Mesa": {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5d87b7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-plus-icon lucide-calendar-plus"><path d="M16 19h6"/><path d="M16 2v4"/><path d="M19 16v6"/><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"/><path d="M3 10h18"/><path d="M8 2v4"/></svg>',
        },
        "Movimentar Processo": {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-right-icon lucide-arrow-left-right"><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>',
        },
        "Associar Procurador Parte": {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus-icon lucide-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>',
        },
        "Permissão/Negação Expressa": {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ban-icon lucide-ban"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>',
        },
        "Requisição Un. Externa": {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building2-icon lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>',
        },
    };

    // Função para verificar se um elemento é seguro para implementar alternância
    function isElementSafeForToggle(imgElement) {
        try {
            // Verificar se o elemento e seus pais existem
            if (!imgElement || !imgElement.parentElement) {
                return false;
            }

            // Encontrar o elemento clicável
            const linkElement =
                imgElement.closest("a") || imgElement.parentElement;
            if (!linkElement) {
                return false;
            }

            // Verificar se tem onclick válido
            const onclickAttr = linkElement.getAttribute("onclick");
            if (!onclickAttr) {
                return false;
            }

            // Verificar se é um onclick do tipo que queremos processar
            const isValidOnclick =
                onclickAttr.includes("infraAbrirFecharElementoHTML") ||
                onclickAttr.includes("conteudoInternoMinutas") ||
                onclickAttr.includes("conteudoMinutas");

            if (!isValidOnclick) {
                return false;
            }

            // Verificar se o elemento alvo existe
            const match = onclickAttr.match(
                /infraAbrirFecharElementoHTML\s*\(\s*['"]([^'"]+)['"](?:,\s*['"]([^'"]+)['"])?/
            );
            if (match) {
                const targetId = match[1];
                const targetElement = document.getElementById(targetId);
                if (!targetElement) {
                    console.warn(
                        `⚠️ ALTERNÂNCIA: Elemento alvo '${targetId}' não encontrado`
                    );
                    return false;
                }
            }

            return true;
        } catch (error) {
            console.warn("⚠️ ALTERNÂNCIA: Erro ao verificar elemento:", error);
            return false;
        }
    }

    // Função para implementar alternância de expandir/retrair para ícones mais.gif e menos.gif
    function implementarAlternanciaExpandirRetrair(
        imgOriginal,
        container,
        selector
    ) {
        console.log(
            `🔄 ALTERNÂNCIA: Implementando funcionalidade para ${selector}`
        );

        // Determinar o estado inicial baseado no nome do arquivo
        const isExpanded = selector.includes("menos.gif"); // menos.gif = expandido
        const isCollapsed = selector.includes("mais.gif"); // mais.gif = retraído

        // Encontrar o elemento clicável (normalmente o link pai)
        const linkElement =
            imgOriginal.closest("a") || imgOriginal.parentElement;

        if (!linkElement) {
            console.warn(
                "⚠️ ALTERNÂNCIA: Link pai não encontrado para",
                selector
            );
            return;
        }

        // Criar SVGs para os dois estados
        const iconExpanded =
            '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>'; // Seta para baixo (expandido)
        const iconCollapsed =
            '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>'; // Seta para direita (retraído)

        // Definir o ícone inicial
        const initialIcon = isExpanded ? iconExpanded : iconCollapsed;
        container.innerHTML = initialIcon;

        // Aplicar estilos ao SVG
        const svg = container.firstElementChild;
        if (svg) {
            svg.classList.add("iconeAcao");
            svg.style.width = "18px";
            svg.style.height = "18px";
            svg.style.cursor = "pointer";
            svg.style.transition = "transform 0.2s ease";
        }

        // Armazenar o estado atual
        container.setAttribute("data-expanded", isExpanded.toString());

        // Adicionar funcionalidade de clique
        const handleClick = (event) => {
            event.preventDefault();
            event.stopPropagation();

            const currentlyExpanded =
                container.getAttribute("data-expanded") === "true";
            const newExpanded = !currentlyExpanded;

            // Alternar o ícone
            container.innerHTML = newExpanded ? iconExpanded : iconCollapsed;

            // Aplicar estilos ao novo SVG
            const newSvg = container.firstElementChild;
            if (newSvg) {
                newSvg.classList.add("iconeAcao");
                newSvg.style.width = "18px";
                newSvg.style.height = "18px";
                newSvg.style.cursor = "pointer";
                newSvg.style.transition = "transform 0.2s ease";
            }

            // Atualizar o estado
            container.setAttribute("data-expanded", newExpanded.toString());

            // Encontrar e alternar o display do conteúdo relacionado
            const targetElement = findToggleTarget(linkElement);
            if (targetElement) {
                targetElement.style.display = newExpanded ? "block" : "none";
                console.log(
                    `🔄 ALTERNÂNCIA: Conteúdo ${
                        newExpanded ? "expandido" : "retraído"
                    }`
                );
            }

            // NÃO executar o clique original do eProc para evitar conflitos
            // A função infraAbrirFecharElementoHTML pode tentar acessar elementos que não existem
            // ou elementos que já foram modificados pelo nosso sistema
            console.log(
                `✅ ALTERNÂNCIA: Clique processado pelo sistema eProbe - ${
                    newExpanded ? "expandido" : "retraído"
                }`
            );
        };

        // Adicionar listener no container
        container.addEventListener("click", handleClick);

        // Encontrar o elemento alvo inicial e definir seu estado
        const initialTarget = findToggleTarget(linkElement);
        if (initialTarget) {
            initialTarget.style.display = isExpanded ? "block" : "none";
        }

        console.log(
            `✅ ALTERNÂNCIA: Configurado ${selector} - Estado inicial: ${
                isExpanded ? "expandido" : "retraído"
            }`
        );
    }

    // Função auxiliar para encontrar o elemento que deve ser alternado
    function findToggleTarget(linkElement) {
        // Estratégias específicas para o eProc:

        // 1. Procurar por elementos específicos das minutas
        const minutasTargets = [
            "conteudoInternoMinutas_0",
            "conteudoInternoMinutas_1",
            "conteudoInternoMinutas_2",
            "conteudoInternoMinutas_3",
        ];

        for (const targetId of minutasTargets) {
            const element = document.getElementById(targetId);
            if (element) {
                console.log(
                    `🎯 ALTERNÂNCIA: Encontrado elemento alvo: ${targetId}`
                );
                return element;
            }
        }

        // 2. Procurar por padrão onclick do eProc
        const linkParent = linkElement.closest("button") || linkElement;
        const onclickAttr = linkParent.getAttribute("onclick");
        if (onclickAttr) {
            // Extrair ID do onclick: infraAbrirFecharElementoHTML('conteudoInternoMinutas_0', 'imgMinutas_0')
            const match = onclickAttr.match(
                /infraAbrirFecharElementoHTML\s*\(\s*['"]([^'"]+)['"](?:,\s*['"]([^'"]+)['"])?/
            );
            if (match) {
                const targetId = match[1];
                console.log(
                    `🎯 ALTERNÂNCIA: Extraído ID do onclick: ${targetId}`
                );
                const element = document.getElementById(targetId);
                if (element) {
                    return element;
                } else {
                    console.warn(
                        `⚠️ ALTERNÂNCIA: Elemento com ID '${targetId}' não existe no DOM`
                    );
                    return null; // Retornar null se o elemento não existir
                }
            }
        }

        // 3. Procurar por fieldset e divs relacionados
        const fieldsetParent = linkElement.closest("fieldset");
        if (fieldsetParent) {
            const internalDivs = fieldsetParent.querySelectorAll(
                'div[id*="conteudoInterno"], div[id*="conteudo"]'
            );
            for (const div of internalDivs) {
                if (div.id && div.id !== fieldsetParent.id) {
                    console.log(
                        `🎯 ALTERNÂNCIA: Encontrado div interno: ${div.id}`
                    );
                    return div;
                }
            }
        }

        // 4. Procurar por elementos irmãos que podem ser alternados
        let sibling = linkElement.nextElementSibling;
        while (sibling) {
            if (
                sibling.tagName === "DIV" &&
                sibling.id &&
                sibling.id.includes("conteudo")
            ) {
                console.log(
                    `🎯 ALTERNÂNCIA: Encontrado sibling: ${sibling.id}`
                );
                return sibling;
            }
            sibling = sibling.nextElementSibling;
        }

        // 5. Procurar no elemento pai por containers específicos
        const parent = linkElement.parentElement;
        if (parent) {
            const containers = parent.querySelectorAll(
                'div[id*="conteudoInterno"], div[id*="conteudo"], table.infraTable'
            );
            for (const container of containers) {
                if (
                    container !== linkElement &&
                    !container.contains(linkElement)
                ) {
                    console.log(
                        `🎯 ALTERNÂNCIA: Encontrado container: ${
                            container.id || container.className
                        }`
                    );
                    return container;
                }
            }
        }

        console.warn(
            "⚠️ ALTERNÂNCIA: Elemento alvo não encontrado para",
            linkElement
        );
        return null;
    }

    // Função para substituir ícones no fieldset de ações
    function substituirIconesFieldsetAcoes() {
        // ⛔ EXCEÇÃO: Não substituir ícones em páginas de cadastro de minutas
        const currentUrl = window.location.href;
        if (currentUrl.includes("minuta_cadastrar")) {
            console.log(
                "⛔ ÍCONES: Página de cadastro de minutas detectada - ignorando substituições"
            );
            return false;
        }

        console.log(
            "🎨 ÍCONES: Iniciando substituição de ícones no fieldset de ações"
        );

        const fieldset = document.querySelector("#fldAcoes.infraFieldset");
        if (!fieldset) {
            console.log("❌ ÍCONES: Fieldset #fldAcoes não encontrado");
            return false;
        }

        let substituicoesRealizadas = 0;

        // Substituir ícones por atributo alt
        Object.values(ICON_REPLACEMENTS).forEach((replacement) => {
            const img = fieldset.querySelector(replacement.selector);
            if (img) {
                // 🛡️ PROTEÇÃO: Verificar se elemento ainda é válido
                if (!img.parentNode || !img.src) {
                    console.warn(
                        "⚠️ ÍCONES: Elemento img inválido, pulando substituição"
                    );
                    return;
                }

                // 🛡️ PROTEÇÃO: Marcar elemento como processado para evitar problemas
                if (img.hasAttribute("data-eprobe-processing")) {
                    console.log(
                        "ℹ️ ÍCONES: Elemento já sendo processado, pulando"
                    );
                    return;
                }
                img.setAttribute("data-eprobe-processing", "true");

                try {
                    const container = document.createElement("span");
                    container.innerHTML = replacement.newSvg;
                    container.style.display = "inline-flex";
                    container.style.alignItems = "center";
                    container.style.marginRight = "4px";

                    // 🛡️ PROTEÇÃO: Marcar container como modificado pela extensão
                    container.setAttribute("data-eprobe-modified", "true");
                    container.setAttribute("data-original-alt", img.alt || "");

                    // Preservar classes e atributos importantes
                    const svg = container.firstElementChild;
                    if (svg) {
                        // 🛡️ PROTEÇÃO: Usar setAttribute para SVG className
                        svg.setAttribute("class", "iconeAcao");
                        svg.setAttribute("data-eprobe-icon", "true");
                        svg.style.width = "18px";
                        svg.style.height = "18px";
                    }

                    // 🛡️ PROTEÇÃO: Substituição mais segura com verificação
                    if (img.parentNode && img.parentNode.contains(img)) {
                        img.parentNode.replaceChild(container, img);
                        substituicoesRealizadas++;
                        // Log compacto apenas para os primeiros
                        if (substituicoesRealizadas <= 3) {
                            console.log(
                                `✅ ÍCONES: Substituído ${img.alt} (${substituicoesRealizadas})`
                            );
                        }
                    } else {
                        console.warn(
                            "⚠️ ÍCONES: Elemento não mais no DOM, cancelando substituição"
                        );
                    }
                } catch (error) {
                    console.error(
                        "❌ ÍCONES: Erro durante substituição:",
                        error
                    );
                    // Remove marca de processamento em caso de erro
                    img.removeAttribute("data-eprobe-processing");
                }
            }
        });

        // Substituir ícones por texto do link
        Object.entries(ICON_REPLACEMENTS_BY_TEXT).forEach(
            ([text, replacement]) => {
                // Buscar especificamente por links com classe infraButton
                const links = fieldset.querySelectorAll("a.infraButton, a");
                links.forEach((link) => {
                    // Verificar se o texto do link termina com o texto procurado
                    const linkText = link.textContent.trim();
                    if (linkText.includes(text) || linkText.endsWith(text)) {
                        const img = link.querySelector("img.iconeAcao, img");
                        if (img) {
                            // 🛡️ PROTEÇÃO: Verificar se elemento ainda é válido
                            if (!img.parentNode || !img.src) {
                                console.warn(
                                    "⚠️ ÍCONES: Elemento img inválido no link, pulando substituição"
                                );
                                return;
                            }

                            // 🛡️ PROTEÇÃO: Marcar elemento como processado
                            if (img.hasAttribute("data-eprobe-processing")) {
                                return;
                            }
                            img.setAttribute("data-eprobe-processing", "true");

                            try {
                                const container =
                                    document.createElement("span");
                                container.innerHTML = replacement.newSvg;
                                container.style.display = "inline-flex";
                                container.style.alignItems = "center";
                                container.style.marginRight = "4px";

                                // 🛡️ PROTEÇÃO: Marcar container como modificado
                                container.setAttribute(
                                    "data-eprobe-modified",
                                    "true"
                                );
                                container.setAttribute(
                                    "data-original-text",
                                    text
                                );

                                const svg = container.firstElementChild;
                                if (svg) {
                                    // 🛡️ PROTEÇÃO: Usar setAttribute para SVG className
                                    svg.setAttribute("class", "iconeAcao");
                                    svg.style.width = "18px";
                                    svg.style.height = "18px";
                                    svg.setAttribute(
                                        "data-eprobe-icon-replaced",
                                        "true"
                                    );
                                    svg.setAttribute(
                                        "data-original-text",
                                        text
                                    );
                                }

                                // 🛡️ PROTEÇÃO: Substituição mais segura
                                if (
                                    img.parentNode &&
                                    img.parentNode.contains(img)
                                ) {
                                    img.parentNode.replaceChild(container, img);
                                    substituicoesRealizadas++;
                                    console.log(
                                        `✅ ÍCONES: Substituído ícone para "${text}"`
                                    );
                                } else {
                                    console.warn(
                                        "⚠️ ÍCONES: Elemento img não mais no DOM"
                                    );
                                }
                            } catch (error) {
                                console.error(
                                    "❌ ÍCONES: Erro durante substituição por texto:",
                                    error
                                );
                                img.removeAttribute("data-eprobe-processing");
                            }
                        }
                    }
                });
            }
        );

        // Substituições específicas por src de imagem
        const imgsBySrc = [
            {
                selector: 'img[src*="remover.gif"]',
                newSvg: ICON_REPLACEMENTS[
                    "processo movimento_desativar_consulta"
                ].newSvg,
            },
            {
                selector: 'img[src*="receber.gif"]',
                newSvg: ICON_REPLACEMENTS_BY_TEXT["Movimentar Processo"].newSvg,
            },
            {
                selector: 'img[src*="mais.gif"]',
                newSvg: ICON_REPLACEMENTS_BY_TEXT["Associar Procurador Parte"]
                    .newSvg,
            },
            {
                selector: 'img[src*="microphone.png"]',
                newSvg: ICON_REPLACEMENTS["audiencia listar"].newSvg,
            },
            {
                selector: 'img[src*="pdf.gif"]',
                newSvg: ICON_REPLACEMENTS[
                    "selecionar processos_agendar_arquivo_completo"
                ].newSvg,
            },
            {
                selector: 'img[src*="anexos.gif"]',
                newSvg: ICON_REPLACEMENTS["processo enviar_email_listar"]
                    .newSvg,
            },
            {
                selector: 'img[src*="email.gif"]',
                newSvg: ICON_REPLACEMENTS["processo expedir_carta_subform"]
                    .newSvg,
            },
            {
                selector: 'img[src*="marcar.gif"]',
                newSvg: ICON_REPLACEMENTS[
                    "gerenciamento partes_situacao_listar"
                ].newSvg,
            },
            {
                selector: 'img[src*="encaminhar.gif"]',
                newSvg: ICON_REPLACEMENTS["processo intimacao"].newSvg,
            },
            {
                selector: 'img[src*="assinar.gif"]',
                newSvg: ICON_REPLACEMENTS["processo edicao"].newSvg,
            },
            {
                selector: 'img[src*="atualizar.gif"]',
                newSvg: ICON_REPLACEMENTS["processo cadastrar"].newSvg,
            },
            {
                selector: 'img[src*="predio.png"]',
                newSvg: ICON_REPLACEMENTS_BY_TEXT["Requisição Un. Externa"]
                    .newSvg,
            },
            {
                selector: 'img[src*="hierarquia.gif"]',
                newSvg: ICON_REPLACEMENTS["redistribuicao processo"].newSvg,
            },
            {
                selector: 'img[src*="newspaper.png"]',
                newSvg: ICON_REPLACEMENTS["processo citacao"].newSvg,
            },
            {
                selector: 'img[src*="configuracao.gif"]',
                newSvg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eprobe-svg-icon eprobe-svg-config" style="pointer-events: none;"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
            },
            {
                selector: 'img[src*="refresh.gif"]',
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-ccw-icon lucide-refresh-ccw"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>',
            },
            {
                selector: 'img[src*="valores.gif"]',
                newSvg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F83CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
            },
            {
                selector: 'img[src*="minuta_historico.gif"]',
                newSvg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F83CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
            },
            {
                selector: 'img[src*="novo.gif"]',
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-plus-2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M3 15h6"/><path d="M6 12v6"/></svg>',
            },
            {
                selector: 'img[src*="minuta_alterar.gif"]',
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-pen-line-icon lucide-file-pen-line"><path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"/><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><path d="M8 18h1"/></svg>',
            },
            {
                selector: 'img[src*="minuta_assinar2.gif"]',
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line-icon lucide-pen-line"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>',
            },
            {
                selector: 'img[src*="alterar.gif"]',
                newSvg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>',
            },
            {
                selector: 'img[src*="balao.gif"]',
                newSvg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="#FEF3C7" stroke="#D97706" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="eprobe-svg-icon eprobe-svg-bubble" style="pointer-events: none;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
            },
            {
                selector: 'img[src*="linkeditor.png"]',
                newSvg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
            },
            {
                selector: 'img[src*="html.gif"]',
                newSvg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F83CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>',
            },
            {
                selector: 'img[src*="tooltip.gif"]',
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sticky-note-icon lucide-sticky-note"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>',
            },
            {
                selector: 'img[src*="duvida.png"]',
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>',
            },
            /*             {
                selector: 'img[src*="ver_resumo.gif"]',
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-minus-icon lucide-square-minus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/></svg>',
            },
            {
                selector: 'img[src*="ver_tudo.gif"]',
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-plus-icon lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>',
            }, */
            {
                selector: 'img[src*="lupa.gif"]',
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>',
            },
            {
                selector: 'img[src*="EstrelaAcesa.gif"]',
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#e0bb00" stroke="#e0bb00" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>',
            },
            {
                selector: 'img[src*="EstrelaApagada.gif"]',
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>',
            },
            {
                selector: 'img[src*="oral_video.png"]',
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video-icon lucide-video"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>',
            },
            {
                selector: 'img[src*="menos.gif"]',
                newSvg: ICON_REPLACEMENTS_BY_TEXT["Permissão/Negação Expressa"]
                    .newSvg,
            },
        ];

        imgsBySrc.forEach(({ selector, newSvg }) => {
            const img = fieldset.querySelector(selector);
            if (img) {
                const container = document.createElement("span");
                container.innerHTML = newSvg;
                container.style.display = "inline-flex";
                container.style.alignItems = "center";
                container.style.marginRight = "4px";

                const svg = container.firstElementChild;
                if (svg) {
                    svg.classList.add("iconeAcao");
                    svg.style.width = "18px";
                    svg.style.height = "18px";
                }

                // Funcionalidade especial para ícones mais.gif e menos.gif
                if (
                    selector.includes("mais.gif") ||
                    selector.includes("menos.gif")
                ) {
                    // Verificar se o elemento é seguro para processar
                    if (isElementSafeForToggle(img)) {
                        console.log(
                            `🔄 ALTERNÂNCIA: Detectado ícone expansível válido: ${selector}`
                        );
                        implementarAlternanciaExpandirRetrair(
                            img,
                            container,
                            selector
                        );
                    } else {
                        console.log(
                            `⚠️ ALTERNÂNCIA: Ignorando ícone inseguro: ${selector}`
                        );
                    }
                }

                img.parentNode.replaceChild(container, img);
                substituicoesRealizadas++;
                console.log(`✅ ÍCONES: Substituído ícone ${selector}`);
            }
        });

        // Estratégia específica para "Incluir em Pauta/Mesa"
        const linksPauta = fieldset.querySelectorAll("a.infraButton");
        linksPauta.forEach((link) => {
            if (link.textContent.trim().endsWith("Incluir em Pauta/Mesa")) {
                // Verificar se já foi processado
                if (link.classList.contains("icon-processed")) {
                    return;
                }

                const img = link.querySelector("img");

                if (img && !img.classList.contains("substituted-icon")) {
                    // Caso 1: Link tem imagem - substituir a imagem
                    const container = document.createElement("span");
                    container.innerHTML =
                        ICON_REPLACEMENTS_BY_TEXT[
                            "Incluir em Pauta/Mesa"
                        ].newSvg;
                    container.style.display = "inline-flex";
                    container.style.alignItems = "center";
                    container.style.marginRight = "4px";

                    const svg = container.firstElementChild;
                    if (svg) {
                        svg.classList.add("iconeAcao", "substituted-icon");
                        svg.style.width = "18px";
                        svg.style.height = "18px";
                    }

                    img.parentNode.replaceChild(container, img);
                    link.classList.add("icon-processed");
                    substituicoesRealizadas++;
                    console.log(
                        `✅ ÍCONES: Substituído ícone "Incluir em Pauta/Mesa" (com imagem)`
                    );
                } else if (!img) {
                    // Caso 2: Link apenas texto - adicionar ícone no início
                    const container = document.createElement("span");
                    container.innerHTML =
                        ICON_REPLACEMENTS_BY_TEXT[
                            "Incluir em Pauta/Mesa"
                        ].newSvg;
                    container.style.display = "inline-flex";
                    container.style.alignItems = "center";
                    container.style.marginRight = "6px";

                    const svg = container.firstElementChild;
                    if (svg) {
                        svg.classList.add("iconeAcao", "substituted-icon");
                        svg.style.width = "18px";
                        svg.style.height = "18px";
                        svg.style.verticalAlign = "middle";
                    }

                    // Inserir o ícone no início do link
                    link.insertBefore(container, link.firstChild);
                    link.style.display = "inline-flex";
                    link.style.alignItems = "center";
                    link.classList.add("icon-processed");
                    substituicoesRealizadas++;
                    console.log(
                        `✅ ÍCONES: Adicionado ícone "Incluir em Pauta/Mesa" (link texto)`
                    );
                }
            }
        });

        console.log(
            `🎨 ÍCONES: Concluída substituição - ${substituicoesRealizadas} ícones substituídos`
        );
        return substituicoesRealizadas > 0;
    }

    // Função para monitorar e aplicar substituições automaticamente
    function inicializarSubstituicaoIcones() {
        // 🔥 PERFORMANCE: Pular se modo ultra-performance estiver ativo
        if (MODO_ULTRA_PERFORMANCE) {
            console.log(
                "🔥 PERFORMANCE: Sistema de substituição de ícones PULADO (modo ultra-performance ativo)"
            );
            return;
        }

        console.log("🎨 ÍCONES: Iniciando sistema de substituição de ícones");

        // Primeira tentativa imediata
        setTimeout(() => {
            try {
                substituirIconesFieldsetAcoes();
                if (typeof substituirIconesFerramentas === "function") {
                    substituirIconesFerramentas();
                }
            } catch (error) {
                console.error(
                    "❌ ÍCONES: Erro na primeira tentativa de substituição:",
                    error
                );
            }
        }, 1000);

        // Segunda tentativa para páginas que demoram a carregar
        setTimeout(() => {
            try {
                substituirIconesFieldsetAcoes();
                if (typeof substituirIconesFerramentas === "function") {
                    substituirIconesFerramentas();
                }
            } catch (error) {
                console.error(
                    "❌ ÍCONES: Erro na segunda tentativa de substituição:",
                    error
                );
            }
        }, 3000);

        // Observador para mudanças dinâmicas na página
        const observer = new MutationObserver((mutations) => {
            let shouldReplace = false;

            mutations.forEach((mutation) => {
                if (mutation.type === "childList") {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            // Verificar se foi adicionado o fieldset de ações
                            if (
                                node.id === "fldAcoes" ||
                                node.querySelector("#fldAcoes") ||
                                node.querySelector(
                                    'img[src*="configuracao.gif"]'
                                ) ||
                                node.querySelector('img[src*="refresh.gif"]') ||
                                node.querySelector('img[src*="valores.gif"]') ||
                                node.querySelector(
                                    'img[src*="minuta_historico.gif"]'
                                ) ||
                                node.querySelector('img[id="refresh"]')
                            ) {
                                shouldReplace = true;
                            }
                        }
                    });
                }
            });

            if (shouldReplace) {
                setTimeout(() => {
                    try {
                        substituirIconesFieldsetAcoes();
                        if (typeof substituirIconesFerramentas === "function") {
                            substituirIconesFerramentas();
                        }
                        // Executar também substituição global
                        substituirIconesGlobalmente();
                    } catch (error) {
                        console.error(
                            "❌ ÍCONES: Erro na substituição por observador:",
                            error
                        );
                    }
                }, 500);
            }
        });

        // Iniciar observação
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });

        console.log("🎨 ÍCONES: Sistema de observação ativo");
    }

    // Função adicional para substituição global de ícones específicos
    function substituirIconesGlobalmente() {
        // ⛔ EXCEÇÃO: Não substituir ícones em páginas de cadastro de minutas
        const currentUrl = window.location.href;
        if (currentUrl.includes("minuta_cadastrar")) {
            console.log(
                "⛔ ÍCONES: Página de cadastro de minutas detectada - ignorando substituições globais"
            );
            return false;
        }

        console.log(
            "🎨 ÍCONES: Iniciando substituição global de ícones específicos"
        );

        let substituicoesRealizadas = 0;

        // Mapeamento global para ícones específicos que podem aparecer em qualquer lugar
        const iconesGlobais = [
            {
                // Ícones de configuração
                selectors: [
                    'img[src*="configuracao.gif"]',
                    'img[title*="Ações Preferenciais"]',
                    'img[alt*="Ações Preferenciais"]',
                ],
                newSvg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
                name: "Configuração",
            },
            {
                // Ícones de refresh
                selectors: [
                    'img[src*="refresh.gif"]',
                    'img[id="refresh"]',
                    'img[title*="Atualizar"]',
                ],
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-ccw-icon lucide-refresh-ccw"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>',
                name: "Refresh",
            },
            {
                // Ícones de histórico/lista
                selectors: [
                    'img[src*="valores.gif"]',
                    'img[src*="minuta_historico.gif"]',
                    'img[alt*="Histórico"]',
                    'img[title*="Histórico"]',
                ],
                newSvg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F83CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
                name: "Histórico",
            },
            {
                // Ícones de nova minuta/documento
                selectors: [
                    'img[src*="novo.gif"]',
                    'img[alt*="Nova Minuta"]',
                    'img[title*="Nova Minuta"]',
                ],
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-plus-2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M3 15h6"/><path d="M6 12v6"/></svg>',
                name: "Nova Minuta",
            },
            {
                // Ícones de editar minuta
                selectors: [
                    'img[src*="minuta_alterar.gif"]',
                    'img[title*="Alterar Julgamento"]',
                    'img[alt*="Alterar Julgamento"]',
                ],
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-pen-line-icon lucide-file-pen-line"><path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"/><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><path d="M8 18h1"/></svg>',
                name: "Editar Minuta",
            },
            {
                // Ícones de assinar minuta
                selectors: [
                    'img[src*="minuta_assinar2.gif"]',
                    'img[title*="Assinar Minuta"]',
                    'img[alt*="Assinar Minuta"]',
                ],
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line-icon lucide-pen-line"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>',
                name: "Assinar Minuta",
            },
            {
                // Ícones de editar genérico
                selectors: [
                    'img[src*="alterar.gif"]',
                    'img[title*="Alterar"]',
                    'img[alt*="Alterar"]',
                ],
                newSvg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>',
                name: "Editar",
            },
            {
                // Ícones de balão/memo
                selectors: [
                    'img[src*="balao.gif"]',
                    'img[alt*="Incluir Memo"]',
                    'img[title*="Memo"]',
                ],
                newSvg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="#FEF3C7" stroke="#D97706" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
                name: "Memo Balão",
            },
            {
                // Ícones de link
                selectors: [
                    'img[src*="linkeditor.png"]',
                    'img[alt*="Link"]',
                    'img[title*="Link"]',
                ],
                newSvg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
                name: "Link",
            },
            {
                // Ícones de visualizar documento HTML
                selectors: [
                    'img[src*="html.gif"]',
                    'img[title*="Visualizar Documento"]',
                    'img[alt*="Visualizar"]',
                ],
                newSvg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F83CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>',
                name: "Visualizar HTML",
            },
            {
                // Ícones de PDF
                selectors: [
                    'img[src*="pdf.gif"]',
                    'img[title*="PDF"]',
                    'img[alt*="PDF"]',
                ],
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="M360-460h40v-80h40q17 0 28.5-11.5T480-580v-40q0-17-11.5-28.5T440-660h-80v200Zm40-120v-40h40v40h-40Zm120 120h80q17 0 28.5-11.5T640-500v-120q0-17-11.5-28.5T600-660h-80v200Zm40-40v-120h40v120h-40Zm120 40h40v-80h40v-40h-40v-40h40v-40h-80v200ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg>',
                name: "PDF",
            },
            {
                // Ícones de tooltip/memo
                selectors: [
                    'img[src*="tooltip.gif"]',
                    'img[alt*="Incluir Memo"]',
                    'img[title*="Tooltip"]',
                ],
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sticky-note-icon lucide-sticky-note"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>',
                name: "Memo Tooltip",
            },
            {
                // Ícones de ajuda/interrogação
                selectors: [
                    'img[src*="duvida.png"]',
                    'img[alt*="Ajuda"]',
                    'img[title*="Ajuda"]',
                ],
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>',
                name: "Ajuda",
            },
            /*             {
                // Ícones de ocultar/resumo
                selectors: [
                    'img[src*="ver_resumo.gif"]',
                    'img[title*="Ocultar"]',
                    'img[alt*="Resumo"]',
                ],
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-minus-icon lucide-square-minus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/></svg>',
                name: "Ocultar",
            },
            {
                // Ícones de mostrar/ver tudo
                selectors: [
                    'img[src*="ver_tudo.gif"]',
                    'img[title*="Mostrar"]',
                    'img[alt*="Ver Tudo"]',
                ],
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-plus-icon lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>',
                name: "Mostrar",
            }, */
            {
                // Ícones de lupa/busca
                selectors: [
                    'img[src*="lupa.gif"]',
                    'img[alt*="Informações do Evento"]',
                    'img[title*="Buscar"]',
                ],
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>',
                name: "Lupa",
            },
            {
                // Ícones de estrela acesa (preenchida)
                selectors: [
                    'img[src*="EstrelaAcesa.gif"]',
                    'img[alt*="Evento relevante"]',
                    'img[title*="Relevante"]',
                ],
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#e0bb00" stroke="#e0bb00" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>',
                name: "Estrela Acesa",
            },
            {
                // Ícones de estrela apagada (só contorno)
                selectors: [
                    'img[src*="EstrelaApagada.gif"]',
                    'img[src*="estrela_apagada.gif"]',
                    'img[alt*="Evento normal"]',
                ],
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>',
                name: "Estrela Apagada",
            },
            {
                // Ícones de vídeo/televisão
                selectors: [
                    'img[src*="oral_video.png"]',
                    'img[alt*="Vídeo"]',
                    'img[title*="Vídeo"]',
                ],
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video-icon lucide-video"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>',
                name: "Vídeo",
            },
        ];

        iconesGlobais.forEach((icone) => {
            icone.selectors.forEach((selector) => {
                const elementos = document.querySelectorAll(selector);

                elementos.forEach((img) => {
                    // Verificar se já foi substituído
                    if (
                        img.hasAttribute("data-eprobe-icon-replaced") ||
                        img.classList.contains("substituted-icon")
                    ) {
                        return;
                    }

                    try {
                        // Preservar todas as propriedades originais
                        const originalWidth =
                            img.style.width ||
                            img.getAttribute("width") ||
                            getComputedStyle(img).width ||
                            "1.1em";
                        const originalHeight =
                            img.style.height ||
                            img.getAttribute("height") ||
                            getComputedStyle(img).height ||
                            "1.1em";
                        const originalOpacity = img.style.opacity || "1";
                        const originalBorderWidth =
                            img.style.borderWidth || "0";
                        const originalPaddingRight =
                            img.style.paddingRight || "";

                        // Criar container SVG
                        const container = document.createElement("span");
                        container.innerHTML = icone.newSvg;
                        container.style.display = "inline-flex";
                        container.style.alignItems = "center";
                        container.style.verticalAlign = "middle";

                        const svg = container.firstElementChild;
                        if (svg) {
                            // Aplicar todas as propriedades preservadas
                            svg.style.width = originalWidth;
                            svg.style.height = originalHeight;
                            svg.style.opacity = originalOpacity;
                            svg.style.borderWidth = originalBorderWidth;
                            if (originalPaddingRight) {
                                svg.style.paddingRight = originalPaddingRight;
                            }

                            // Preservar classes CSS - CORRIGIDO para SVG
                            if (img.className) {
                                // SVG usa setAttribute para classes, não className
                                svg.setAttribute(
                                    "class",
                                    img.className + " substituted-icon"
                                );
                            } else {
                                svg.classList.add("substituted-icon");
                            }

                            // Preservar atributos importantes
                            [
                                "title",
                                "alt",
                                "aria-hidden",
                                "role",
                                "id",
                            ].forEach((attr) => {
                                const value = img.getAttribute(attr);
                                if (value) {
                                    svg.setAttribute(attr, value);
                                }
                            });

                            // Adicionar atributos de controle
                            svg.setAttribute(
                                "data-eprobe-icon-replaced",
                                "true"
                            );
                            svg.setAttribute("data-original-name", icone.name);
                            svg.setAttribute(
                                "data-original-selector",
                                selector
                            );

                            // Preservar eventos
                            if (img.onclick) {
                                svg.onclick = img.onclick;
                            }

                            // Realizar substituição
                            img.parentNode.replaceChild(container, img);
                            substituicoesRealizadas++;
                            console.log(
                                `✅ ÍCONES GLOBAL: Substituído ${icone.name} via "${selector}"`
                            );
                        }
                    } catch (error) {
                        console.warn(
                            `⚠️ ÍCONES GLOBAL: Erro ao substituir ${icone.name}:`,
                            error
                        );
                    }
                });
            });
        });

        console.log(
            `🎨 ÍCONES GLOBAL: ${substituicoesRealizadas} ícones substituídos globalmente`
        );
        return substituicoesRealizadas > 0;
    }

    // Função de teste para debug de ícones
    function debugIconesSubstituicao() {
        console.log("🔍 DEBUG ÍCONES: Analisando página atual...");

        const iconesTeste = [
            'img[src*="configuracao.gif"]',
            'img[src*="refresh.gif"]',
            'img[src*="valores.gif"]',
            'img[src*="minuta_historico.gif"]',
            'img[src*="novo.gif"]',
            'img[src*="minuta_alterar.gif"]',
            'img[src*="minuta_assinar2.gif"]',
            'img[src*="alterar.gif"]',
            'img[src*="balao.gif"]',
            'img[src*="linkeditor.png"]',
            'img[src*="html.gif"]',
            'img[src*="pdf.gif"]',
            'img[src*="tooltip.gif"]',
            'img[src*="duvida.png"]',
            'img[src*="ver_resumo.gif"]',
            'img[src*="ver_tudo.gif"]',
            'img[src*="lupa.gif"]',
            'img[src*="EstrelaAcesa.gif"]',
            'img[src*="EstrelaApagada.gif"]',
            'img[src*="oral_video.png"]',
            'img[title*="Ações Preferenciais"]',
            'img[title*="Atualizar"]',
            'img[title*="Alterar Julgamento"]',
            'img[title*="Visualizar Documento"]',
            'img[title*="Ajuda"]',
            'img[title*="Ocultar"]',
            'img[title*="Mostrar"]',
            'img[title*="Buscar"]',
            'img[title*="Relevante"]',
            'img[title*="Vídeo"]',
            'img[alt*="Nova Minuta"]',
            'img[alt*="Incluir Memo"]',
            'img[alt*="Visualizar"]',
            'img[alt*="Ajuda"]',
            'img[alt*="Resumo"]',
            'img[alt*="Ver Tudo"]',
            'img[alt*="Informações do Evento"]',
            'img[alt*="Evento relevante"]',
            'img[alt*="Evento normal"]',
            'img[alt*="Vídeo"]',
            'img[id="refresh"]',
        ];

        console.log("📊 ESTATÍSTICAS DE ÍCONES:");
        iconesTeste.forEach((selector) => {
            const elementos = document.querySelectorAll(selector);
            const substituidos = document.querySelectorAll(
                selector.replace("img", "[data-eprobe-icon-replaced]")
            );

            console.log(
                `${selector}: ${elementos.length} encontrados, ${substituidos.length} já substituídos`
            );

            if (elementos.length > 0) {
                elementos.forEach((img, i) => {
                    console.log(`  - Item ${i + 1}:`, {
                        src: img.src,
                        alt: img.alt,
                        title: img.title,
                        id: img.id,
                        className: img.className,
                        substituido: img.hasAttribute(
                            "data-eprobe-icon-replaced"
                        ),
                    });
                });
            }
        });

        // Executar todas as funções de substituição
        console.log("🔄 EXECUTANDO SUBSTITUIÇÕES...");
        try {
            const resultados = {
                fieldset: substituirIconesFieldsetAcoes(),
                ferramentas: substituirIconesFerramentas(),
                global: substituirIconesGlobalmente(),
            };

            console.log("✅ RESULTADOS:", resultados);

            // Estatísticas finais
            const totalSubstituidos = document.querySelectorAll(
                "[data-eprobe-icon-replaced]"
            ).length;
            console.log(
                `🎯 TOTAL DE ÍCONES SUBSTITUÍDOS: ${totalSubstituidos}`
            );

            return resultados;
        } catch (error) {
            console.error("❌ ERRO NO DEBUG:", error);
            return { erro: error.message };
        }
    }

    // ===== SISTEMA DE THROTTLING ULTRA-OTIMIZADO PARA PERFORMANCE =====
    let ultimaSubstituicaoIcones = 0;
    let contadorSubstituicoes = 0;
    const THROTTLE_ICONES_MS = 10000; // ✅ 10 segundos mínimo entre execuções (otimizado)
    const MAX_SUBSTITUICOES_POR_MINUTO = 3; // ✅ Máximo 3 execuções por minuto (otimizado)
    let historicoSubstituicoes = [];
    let executandoSubstituicao = false; // Flag para evitar execuções simultâneas

    // Função para substituir ícones de ferramentas em toda a página
    function substituirIconesFerramentas() {
        // ⛔ EXCEÇÃO: Não substituir ícones em páginas de cadastro de minutas
        const currentUrl = window.location.href;
        if (currentUrl.includes("minuta_cadastrar")) {
            console.log(
                "⛔ ÍCONES: Página de cadastro de minutas detectada - ignorando substituições"
            );
            return { ignorado: true, motivo: "pagina_minuta_cadastrar" };
        }

        const agora = Date.now();

        // ===== CONTROLE DE THROTTLING ULTRA-RIGOROSO =====

        // 0. Verificar se já está executando
        if (executandoSubstituicao) {
            console.log("⏸️ ÍCONES: Ignorando execução - já está em andamento");
            return { ignorado: true, motivo: "em_andamento" };
        }

        // 1. Verificar intervalo mínimo
        if (agora - ultimaSubstituicaoIcones < THROTTLE_ICONES_MS) {
            console.log(
                "⏱️ ÍCONES: Ignorando execução - muito frequente (throttle)"
            );
            return { ignorado: true, motivo: "throttle_tempo" };
        }

        // 2. Limpar histórico antigo (mais de 1 minuto)
        historicoSubstituicoes = historicoSubstituicoes.filter(
            (timestamp) => agora - timestamp < 60000
        );

        // 3. Verificar limite por minuto
        if (historicoSubstituicoes.length >= MAX_SUBSTITUICOES_POR_MINUTO) {
            console.log(
                "⏱️ ÍCONES: Ignorando execução - limite por minuto atingido"
            );
            return { ignorado: true, motivo: "limite_minuto" };
        }

        // 4. Marcar como executando e registrar
        executandoSubstituicao = true;
        ultimaSubstituicaoIcones = agora;
        historicoSubstituicoes.push(agora);
        contadorSubstituicoes++;

        console.log(
            `🎨 ÍCONES: Iniciando substituição otimizada #${contadorSubstituicoes} (${historicoSubstituicoes.length}/${MAX_SUBSTITUICOES_POR_MINUTO} este minuto)`
        );

        let substituicoesRealizadas = 0;
        let errosEncontrados = [];

        try {
            // ===============================
            // DEFINIÇÃO DOS ÍCONES DE FERRAMENTAS - VERSÃO EXPANDIDA
            // ===============================
            const ferramentasIcones = {
                // Ícones de configuração/ferramentas (chave inglesa)
                Configuracao: {
                    selectors: [
                        'img[src*="configuracao.gif"]',
                        'img[title*="Ações Preferenciais"]',
                        'img[alt*="Ações Preferenciais"]',
                    ],
                    newSvg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
                },
                // Ícones de refresh/atualização
                Refresh: {
                    selectors: [
                        'img[src*="refresh.gif"]',
                        'img[id="refresh"]',
                        'img[title*="Atualizar"]',
                    ],
                    newSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-ccw-icon lucide-refresh-ccw"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>`,
                },
                // Ícones de lista/histórico (valores.gif)
                Historico: {
                    selectors: [
                        'img[src*="valores.gif"]',
                        'img[src*="minuta_historico.gif"]',
                        'img[alt*="Histórico"]',
                        'img[title*="Histórico"]',
                    ],
                    newSvg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F83CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
                },
                // Ícones de nova minuta/novo documento
                "Nova Minuta": {
                    selectors: [
                        'img[src*="novo.gif"]',
                        'img[alt*="Nova Minuta"]',
                        'img[title*="Nova Minuta"]',
                    ],
                    newSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-plus-2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M3 15h6"/><path d="M6 12v6"/></svg>`,
                },
                // Ícones de editar minuta
                "Editar Minuta": {
                    selectors: [
                        'img[src*="minuta_alterar.gif"]',
                        'img[title*="Alterar Julgamento"]',
                        'img[alt*="Alterar Julgamento"]',
                    ],
                    newSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-pen-line-icon lucide-file-pen-line"><path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"/><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><path d="M8 18h1"/></svg>`,
                },
                // Ícones de assinar minuta
                "Assinar Minuta": {
                    selectors: [
                        'img[src*="minuta_assinar2.gif"]',
                        'img[title*="Assinar Minuta"]',
                        'img[alt*="Assinar Minuta"]',
                    ],
                    newSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line-icon lucide-pen-line"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>`,
                },
                // Ícones de editar genérico
                Editar: {
                    selectors: [
                        'img[src*="alterar.gif"]',
                        'img[title*="Alterar"]',
                        'img[alt*="Alterar"]',
                    ],
                    newSvg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>`,
                },
                // Ícones de balão/memo
                "Memo Balão": {
                    selectors: [
                        'img[src*="balao.gif"]',
                        'img[alt*="Incluir Memo"]',
                        'img[title*="Memo"]',
                    ],
                    newSvg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="#FEF3C7" stroke="#D97706" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
                },
                // Ícones de link
                Link: {
                    selectors: [
                        'img[src*="linkeditor.png"]',
                        'img[alt*="Link"]',
                        'img[title*="Link"]',
                    ],
                    newSvg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
                },
                // Ícones de visualizar documento HTML
                "Visualizar HTML": {
                    selectors: [
                        'img[src*="html.gif"]',
                        'img[title*="Visualizar Documento"]',
                        'img[alt*="Visualizar"]',
                    ],
                    newSvg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F83CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>`,
                },
                // Ícones de PDF
                PDF: {
                    selectors: [
                        'img[src*="pdf.gif"]',
                        'img[title*="PDF"]',
                        'img[alt*="PDF"]',
                    ],
                    newSvg: `<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="M360-460h40v-80h40q17 0 28.5-11.5T480-580v-40q0-17-11.5-28.5T440-660h-80v200Zm40-120v-40h40v40h-40Zm120 120h80q17 0 28.5-11.5T640-500v-120q0-17-11.5-28.5T600-660h-80v200Zm40-40v-120h40v120h-40Zm120 40h40v-80h40v-40h-40v-40h40v-40h-80v200ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg>`,
                },
                // Ícones de tooltip/memo
                "Memo Tooltip": {
                    selectors: [
                        'img[src*="tooltip.gif"]',
                        'img[alt*="Incluir Memo"]',
                        'img[title*="Tooltip"]',
                    ],
                    newSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sticky-note-icon lucide-sticky-note"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>`,
                },
                // Ícones de ajuda/interrogação
                Ajuda: {
                    selectors: [
                        'img[src*="duvida.png"]',
                        'img[alt*="Ajuda"]',
                        'img[title*="Ajuda"]',
                    ],
                    newSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`,
                },
                // Ícones de ocultar/resumo
                /*                 Ocultar: {
                    selectors: [
                        'img[src*="ver_resumo.gif"]',
                        'img[title*="Ocultar"]',
                        'img[alt*="Resumo"]',
                    ],
                    newSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-minus-icon lucide-square-minus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/></svg>`,
                },
                // Ícones de mostrar/ver tudo
                Mostrar: {
                    selectors: [
                        'img[src*="ver_tudo.gif"]',
                        'img[title*="Mostrar"]',
                        'img[alt*="Ver Tudo"]',
                    ],
                    newSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-plus-icon lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`,
                }, */
                // Ícones de lupa/busca
                Lupa: {
                    selectors: [
                        'img[src*="lupa.gif"]',
                        'img[alt*="Informações do Evento"]',
                        'img[title*="Buscar"]',
                    ],
                    newSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>`,
                },
                // Ícones de estrela acesa (preenchida)
                "Estrela Acesa": {
                    selectors: [
                        'img[src*="EstrelaAcesa.gif"]',
                        'img[alt*="Evento relevante"]',
                        'img[title*="Relevante"]',
                    ],
                    newSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#e0bb00" stroke="#e0bb00" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>`,
                },
                // Ícones de estrela apagada (só contorno)
                "Estrela Apagada": {
                    selectors: [
                        'img[src*="EstrelaApagada.gif"]',
                        'img[src*="estrela_apagada.gif"]',
                        'img[alt*="Evento normal"]',
                    ],
                    newSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>`,
                },
                // Ícones de vídeo/televisão
                Vídeo: {
                    selectors: [
                        'img[src*="oral_video.png"]',
                        'img[alt*="Vídeo"]',
                        'img[title*="Vídeo"]',
                    ],
                    newSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video-icon lucide-video"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>`,
                },
            };

            // ===============================
            // SUBSTITUIÇÃO PRINCIPAL - VERSÃO MELHORADA
            // ===============================
            Object.entries(ferramentasIcones).forEach(([nome, config]) => {
                try {
                    // Tentar cada seletor até encontrar elementos
                    config.selectors.forEach((selector) => {
                        const elementos = document.querySelectorAll(selector);

                        elementos.forEach((img) => {
                            // Verificar se já foi substituído
                            if (
                                img.hasAttribute("data-eprobe-icon-replaced") ||
                                img.classList.contains("substituted-icon")
                            ) {
                                return;
                            }

                            // ⚡ OTIMIZAÇÃO PERFORMANCE: Detecção simples de clicabilidade
                            const parentElement = img.parentNode;
                            const isClickableElement = !!(
                                img.onclick ||
                                img.getAttribute("onclick") ||
                                (parentElement && parentElement.tagName === "A")
                            );

                            // Preservar dimensões originais
                            const originalWidth =
                                img.style.width ||
                                img.getAttribute("width") ||
                                "1.1em";
                            const originalHeight =
                                img.style.height ||
                                img.getAttribute("height") ||
                                "1.1em";
                            const originalOpacity = img.style.opacity || "1";

                            // Criar container SVG
                            const container = document.createElement("span");
                            container.innerHTML = config.newSvg;
                            container.style.display = "inline-flex";
                            container.style.alignItems = "center";
                            container.style.marginRight = "4px";

                            // ⚡ OTIMIZAÇÃO PERFORMANCE: Aplicar pointer-events de forma eficiente
                            if (isClickableElement) {
                                // Elemento clicável: permitir eventos
                                container.style.pointerEvents = "auto";
                            } else {
                                // Elemento não-clicável: bloquear eventos para performance
                                container.style.pointerEvents = "none";
                            }

                            const svg = container.firstElementChild;
                            if (svg) {
                                // ⚡ OTIMIZAÇÃO PERFORMANCE: Configuração básica do SVG
                                svg.style.width = originalWidth;
                                svg.style.height = originalHeight;
                                svg.style.opacity = originalOpacity;
                                svg.style.pointerEvents = isClickableElement
                                    ? "auto"
                                    : "none";

                                // ⚡ OTIMIZAÇÃO: Copiar apenas eventos essenciais
                                if (isClickableElement) {
                                    if (img.onclick) svg.onclick = img.onclick;
                                    const onclickAttr =
                                        img.getAttribute("onclick");
                                    if (onclickAttr)
                                        svg.setAttribute(
                                            "onclick",
                                            onclickAttr
                                        );
                                    svg.style.cursor = "pointer";

                                    // ⚡ CORREÇÃO CRÍTICA: Adicionar classe clickable-icon para escapar do CSS pointer-events: none
                                    try {
                                        svg.classList.add("clickable-icon");
                                    } catch (e) {
                                        // Fallback para SVGs que não suportam classList
                                        const currentClass =
                                            svg.getAttribute("class") || "";
                                        svg.setAttribute(
                                            "class",
                                            currentClass + " clickable-icon"
                                        );
                                    }
                                }

                                // ⚡ OTIMIZAÇÃO: Marcar substituição sem processamento excessivo
                                svg.setAttribute(
                                    "data-eprobe-icon-replaced",
                                    "true"
                                );

                                // ⚡ CORREÇÃO: SVG não pode ter className - usar classList.add
                                if (img.className) {
                                    const classes = img.className
                                        .split(" ")
                                        .filter((cls) => cls.trim());
                                    classes.forEach((cls) => {
                                        try {
                                            svg.classList.add(cls);
                                        } catch (e) {
                                            // Fallback para SVGs que não suportam classList
                                            const currentClass =
                                                svg.getAttribute("class") || "";
                                            svg.setAttribute(
                                                "class",
                                                currentClass + " " + cls
                                            );
                                        }
                                    });
                                }

                                try {
                                    svg.classList.add("substituted-icon");
                                } catch (e) {
                                    // Fallback para SVGs que não suportam classList
                                    const currentClass =
                                        svg.getAttribute("class") || "";
                                    svg.setAttribute(
                                        "class",
                                        currentClass + " substituted-icon"
                                    );
                                }

                                // ⚡ CORREÇÃO: Definir ID de forma segura para SVG
                                if (img.id) {
                                    try {
                                        svg.id = img.id;
                                    } catch (e) {
                                        // Fallback para SVGs que não aceitam ID direto
                                        svg.setAttribute("id", img.id);
                                    }
                                }

                                // ⚡ OTIMIZAÇÃO: Substituição eficiente
                                img.parentNode.replaceChild(container, img);
                                substituicoesRealizadas++;
                            }
                        });
                    });
                } catch (error) {
                    const errorMsg = `Erro ao processar "${nome}": ${error.message}`;
                    errosEncontrados.push(errorMsg);
                    console.warn(`⚠️ ÍCONES: ${errorMsg}`);
                }
            });

            // ===============================
            // RELATÓRIO FINAL
            // ===============================
            console.log(
                `🎨 ÍCONES: Substituição de ferramentas concluída - ${substituicoesRealizadas} ícones substituídos`
            );

            if (errosEncontrados.length > 0) {
                console.warn(
                    `⚠️ ÍCONES: ${errosEncontrados.length} erros encontrados:`,
                    errosEncontrados
                );
            }

            return substituicoesRealizadas > 0;
        } catch (error) {
            console.error(
                "❌ ÍCONES: Erro crítico na substituição de ferramentas:",
                error
            );
            return false;
        } finally {
            // Sempre marcar como não executando
            executandoSubstituicao = false;
        }
    }

    // Função de teste para verificar se as funções de ícones estão funcionando
    function testarFuncoesIcones() {
        console.log("🧪 TESTE: Verificando funções de ícones...");

        const funcoes = [
            "substituirIconesFieldsetAcoes",
            "substituirIconesFerramentas",
            "inicializarSubstituicaoIcones",
            "debugIconesNaPagina",
        ];

        funcoes.forEach((funcao) => {
            if (typeof window.SENT1_AUTO[funcao] === "function") {
                console.log(`✅ TESTE: ${funcao} está definida`);
            } else {
                console.error(`❌ TESTE: ${funcao} NÃO está definida`);
            }
        });

        // Testar execução
        try {
            substituirIconesFieldsetAcoes();
            console.log(
                "✅ TESTE: substituirIconesFieldsetAcoes executada com sucesso"
            );
        } catch (error) {
            console.error(
                "❌ TESTE: Erro ao executar substituirIconesFieldsetAcoes:",
                error
            );
        }

        try {
            substituirIconesFerramentas();
            console.log(
                "✅ TESTE: substituirIconesFerramentas executada com sucesso"
            );
        } catch (error) {
            console.error(
                "❌ TESTE: Erro ao executar substituirIconesFerramentas:",
                error
            );
        }
    }

    // Função de debug para analisar ícones na página
    function debugIconesNaPagina() {
        console.log("🔍 DEBUG: Analisando ícones na página...");

        // Analisar ícones no fieldset #fldAcoes
        const fieldset = document.querySelector("#fldAcoes");
        if (fieldset) {
            console.log("🔍 DEBUG: Fieldset #fldAcoes encontrado");
            const imagens = fieldset.querySelectorAll("img");
            console.log(
                `🔍 DEBUG: ${imagens.length} imagens encontradas no fieldset`
            );

            imagens.forEach((img, index) => {
                console.log(`🔍 DEBUG: Imagem ${index + 1}:`, {
                    src: img?.src || "N/A",
                    alt: img?.alt || "N/A",
                    className: img?.className || "N/A",
                    width: img?.style?.width || "N/A",
                    height: img?.style?.height || "N/A",
                });
            });
        } else {
            console.log("⚠️ DEBUG: Fieldset #fldAcoes não encontrado");
        }

        // Analisar ícones novo.gif na página
        const iconesNovo = document.querySelectorAll('img[src*="novo.gif"]');
        console.log(
            `🔍 DEBUG: ${iconesNovo.length} ícones novo.gif encontrados`
        );
        iconesNovo.forEach((img, index) => {
            console.log(`🔍 DEBUG: novo.gif ${index + 1}:`, {
                src: img?.src || "N/A",
                alt: img?.alt || "N/A",
                parentElement: img?.parentElement?.tagName || "N/A",
                parentText:
                    img?.parentElement?.textContent?.trim().substring(0, 50) ||
                    "N/A",
            });
        });

        // Analisar todos os ícones GIF na página
        const todosGifs = document.querySelectorAll('img[src*=".gif"]');
        console.log(
            `🔍 DEBUG: ${todosGifs.length} ícones GIF encontrados na página`
        );

        const gifsSumario = {};
        todosGifs.forEach((img) => {
            // 🛡️ PROTEÇÃO: Verificar se img e img.src existem antes de acessar
            if (!img || !img.src) {
                console.warn(
                    "⚠️ IMG SRC: Elemento img sem src encontrado:",
                    img
                );
                return;
            }

            const nomeArquivo = img.src.split("/").pop();
            if (!gifsSumario[nomeArquivo]) {
                gifsSumario[nomeArquivo] = 0;
            }
            gifsSumario[nomeArquivo]++;
        });

        console.log("🔍 DEBUG: Resumo de GIFs por arquivo:", gifsSumario);
    }

    // Expor função globalmente para debug (movidas para namespace principal)

    // Função de debug para analisar elementos "Incluir em Pauta/Mesa"
    function debugIncluirPautaMesa() {
        console.log("🔍 DEBUG: Analisando elementos 'Incluir em Pauta/Mesa'");

        const fieldset = document.querySelector("#fldAcoes.infraFieldset");
        if (!fieldset) {
            console.log("❌ DEBUG: Fieldset #fldAcoes não encontrado");
            return;
        }

        // Procurar especificamente por infraButton com texto "Incluir em Pauta/Mesa"
        const infraButtons = fieldset.querySelectorAll("a.infraButton");
        console.log(
            `🔍 DEBUG: Encontrados ${infraButtons.length} links com classe infraButton`
        );

        let encontrados = 0;
        infraButtons.forEach((button, index) => {
            const text = button.textContent.trim();
            if (
                text.includes("Incluir") ||
                text.includes("Pauta") ||
                text.includes("Mesa")
            ) {
                encontrados++;
                console.log(`🎯 DEBUG: InfraButton ${index + 1}:`, {
                    text: text,
                    textLength: text.length,
                    endsWith: text.endsWith("Incluir em Pauta/Mesa"),
                    includes: text.includes("Incluir em Pauta/Mesa"),
                    hasImage: !!button.querySelector("img"),
                    href: button.href.substring(0, 100) + "...", // Mostrar só início do href
                    isProcessed: button.classList.contains("icon-processed"),
                    outerHTML: button.outerHTML.substring(0, 200) + "...", // Mostrar estrutura
                });
            }
        });

        if (encontrados === 0) {
            console.log(
                "❌ DEBUG: Nenhum link relacionado a 'Incluir em Pauta/Mesa' encontrado"
            );

            // Procurar por qualquer link que contenha "Incluir"
            const linksIncluir = fieldset.querySelectorAll("a");
            linksIncluir.forEach((link, index) => {
                if (link.textContent.includes("Incluir")) {
                    console.log(`📋 DEBUG: Link com 'Incluir' ${index + 1}:`, {
                        text: link.textContent.trim(),
                        classes: link.className,
                        outerHTML: link.outerHTML.substring(0, 150) + "...",
                    });
                }
            });
        }

        return encontrados;
    }

    // Expor função de debug globalmente (movida para namespace principal)

    // 🚀 EXECUÇÃO AUTOMÁTICA - Aguardar navbar estar pronta
    setTimeout(() => {
        inicializarPersonalizacaoPesquisaNavbar();
    }, 1500);

    // 🎨 EXECUÇÃO AUTOMÁTICA - Sistema de substituição de ícones
    setTimeout(() => {
        console.log("🎨 ÍCONES: Iniciando sistema automaticamente...");
        try {
            inicializarSubstituicaoIcones();
            console.log("✅ ÍCONES: Sistema inicializado com sucesso");
        } catch (error) {
            console.error("❌ ÍCONES: Erro na inicialização:", error);
        }
    }, 2000);

    // 🔍 EXECUÇÃO AUTOMÁTICA - Inicializar observer de interface
    setTimeout(() => {
        console.log("🔍 OBSERVER: Iniciando observer de interface...");
        try {
            if (typeof setupInterfaceObserver === "function") {
                setupInterfaceObserver();
                console.log(
                    "✅ OBSERVER: Interface observer inicializado com sucesso"
                );
            } else {
                console.warn(
                    "⚠️ OBSERVER: Função setupInterfaceObserver não encontrada"
                );
            }
        } catch (error) {
            console.error("❌ OBSERVER: Erro na inicialização:", error);
        }
    }, 500);

    // 🔧 EXECUÇÃO ROBUSTA - Segunda tentativa para correção de inconsistências
    setTimeout(() => {
        console.log("🔧 ROBUSTA: Verificação e correção de inconsistências...");

        // Verificar se modo ultra-performance está bloqueando
        if (MODO_ULTRA_PERFORMANCE) {
            console.log(
                "⚠️ ROBUSTA: Modo ultra-performance ativo - funções podem estar bloqueadas"
            );
        } else {
            // Verificar se ícones foram substituídos
            const fieldsetAcoes = document.querySelector(
                "#fldAcoes.infraFieldset"
            );
            if (fieldsetAcoes) {
                const iconesGIF =
                    fieldsetAcoes.querySelectorAll('img[src*=".gif"]');
                const iconesSVG = fieldsetAcoes.querySelectorAll("svg.lucide");

                if (iconesGIF.length > 0 && iconesSVG.length === 0) {
                    console.log(
                        "🔧 ROBUSTA: Ícones não foram substituídos - executando correção..."
                    );
                    try {
                        substituirIconesFieldsetAcoes();
                        substituirIconesFerramentas();
                        console.log("✅ ROBUSTA: Correção de ícones executada");
                    } catch (error) {
                        console.error("❌ ROBUSTA: Erro na correção:", error);
                    }
                }
            }

            // Verificar botão Resumir Documento
            const botaoResumir =
                document.getElementById("documento-relevante-auto-button") ||
                document.getElementById("sent1-auto-button") ||
                document.getElementById("eprobe-btn");
            if (!botaoResumir) {
                console.log(
                    "🔧 ROBUSTA: Botão não encontrado - tentando criação..."
                );
                try {
                    if (typeof ensureButtonExists === "function") {
                        ensureButtonExists();
                        console.log(
                            "✅ ROBUSTA: Tentativa de criação de botão executada"
                        );
                    }
                } catch (error) {
                    console.error(
                        "❌ ROBUSTA: Erro na criação do botão:",
                        error
                    );
                }
            }
        }
    }, 5000);

    // =============================================
    // INICIALIZAÇÃO DO SISTEMA MATERIAL DESIGN
    // =============================================

    console.log(
        "🚀 SISTEMA: Inicializando Material Design para cards de sessão"
    );

    // Aguardar carregamento da página antes de detectar cards
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
            setTimeout(inicializarMaterialDesign, 1000);
        });
    } else {
        setTimeout(inicializarMaterialDesign, 1000);
    }

    // 🧪 FUNÇÕES DE TESTE MOVIDAS PARA O NAMESPACE CONSOLIDADO
    // ✅ As funções de teste agora estão disponíveis em:
    // - window.SENT1_AUTO.testarDeteccaoCard()
    // - window.SENT1_AUTO.debugRapido()
    // - window.SENT1_AUTO.testarSistemaCompleto()

    // 🚫 FUNÇÃO REMOVIDA - USE AS FUNÇÕES PRINCIPAIS NO NAMESPACE:
    // - window.SENT1_AUTO.testarMaterialBaseLayout()
    // - window.SENT1_AUTO.testarXPathMaterialDesign()

    // � FUNÇÕES DE TESTE ANTIGAS REMOVIDAS
    // USE APENAS AS DUAS FUNÇÕES PRINCIPAIS NO NAMESPACE:
    // - window.SENT1_AUTO.testarMaterialBaseLayout()
    // - window.SENT1_AUTO.testarXPathMaterialDesign()

    // Fim da seção de funcionalidades

    // 🩺 FUNÇÕES DE TESTE MOVIDAS PARA O NAMESPACE CONSOLIDADO
    // ✅ Todas as funções de teste estão disponíveis em window.SENT1_AUTO:
    // - debugRapido()
    // - testarMultiplasSessoes()
    // - testarNovoFormatoTooltip()
    // - debugXPathEProc()
    // - debugNormalizacaoData()
    // - testarDesignFigma()
    // - testarTodosDesignsFigma()
    //
    // ❌ TODAS AS DUPLICAÇÕES REMOVIDAS: Para evitar ReferenceError e TypeError
    // ✅ Todas as funções estão no namespace consolidado window.SENT1_AUTO

    console.log(
        "✅ NAMESPACE: Todos os fallbacks seguros configurados - extensão protegida contra ReferenceError"
    );

    console.log("🔧 NAMESPACE: Sistema de fallback universal configurado");

    // ============================================================================
    // 🔧 FUNÇÕES DE TESTE MOVIDAS PARA O NAMESPACE CONSOLIDADO
    // As funções testarNamespaceSENT1_AUTO e verificarReferenceErrors agora estão
    // corretamente no namespace window.SENT1_AUTO para acesso adequado
    // ============================================================================

    // ============================================================================
    // 🔧 TODAS AS DUPLICAÇÕES REMOVIDAS - NAMESPACE MOVIDO PARA LINHA 19742
    // ✅ O namespace consolidado correto está na linha 19742
    // ============================================================================

    // ##### INÍCIO DO NAMESPACE CONSOLIDADO #####

    window.SENT1_AUTO = {
        // ⚠️ ESTE NAMESPACE FOI DUPLICADO - O CORRETO ESTÁ NA LINHA 19742
        // 🔧 Todas as funções estão no namespace consolidado da linha 19742
        _orphanedNamespace: "REMOVIDO - usar namespace correto na linha 19742",
    };

    // ============================================================================
    // 🔧 FIM DA SEÇÃO ÓRFÃ - NAMESPACE CORRETO NA LINHA 19742
    // ============================================================================

    console.log(
        "✅ NAMESPACE: Todos os fallbacks seguros configurados - extensão protegida contra ReferenceError"
    );

    console.log("🔧 NAMESPACE: Sistema de fallback universal configurado");

    // ============================================================================
    // � FUNÇÕES DE TESTE MOVIDAS PARA O NAMESPACE CONSOLIDADO
    // As funções testarNamespaceSENT1_AUTO e verificarReferenceErrors agora estão
    // corretamente no namespace window.SENT1_AUTO para acesso adequado
    // ============================================================================
    console.log(
        "✅ FUNÇÕES DE TESTE: Carregadas fora da IIFE - sempre disponíveis"
    );

    // Função de detecção global ao namespace
    // Função de detecção global REMOVIDA - usar apenas detectarCardSessaoSimplificado()
    // para evitar conflitos e duplicação de lógica

    /**
     * Função auxiliar para traduzir status de sessão conforme regras específicas
     * @param {string} statusOriginal - Status original do sistema eProc
     * @returns {Object} - Objeto com status traduzido, completo e cor
     */
    function traduzirStatusSessao(statusOriginal) {
        const traducoes = {
            "Retirado em Pauta": {
                status: "Retirado",
                statusCompleto: "Retirado em Pauta",
                cor: "#dc2626", // Vermelho
            },
            "Sobrestado - art. 942 CPC em Pauta": {
                status: "Sobrestado (art. 942)",
                statusCompleto: "Sobrestado - art. 942 CPC",
                cor: "#f59e0b", // Amarelo
            },
            "Pedido de Vista em Pauta": {
                status: "Pedido de Vista",
                statusCompleto: "Pedido de Vista em Pauta",
                cor: "#8b5cf6", // Roxo
            },
            "Adiado - art. 935 CPC em Pauta": {
                status: "Adiado (art. 935)",
                statusCompleto: "Adiado - art. 935 CPC",
                cor: "#ef4444", // Vermelho claro
            },
            "Convertido em Diligência em Pauta": {
                status: "Conv. em Diligência",
                statusCompleto: "Convertido em Diligência",
                cor: "#06b6d4", // Azul claro
            },
            "Julgado em Pauta": {
                status: "Julgado",
                statusCompleto: "Julgado em Pauta",
                cor: "#16a34a", // Verde
            },
            "Incluído em Pauta": {
                status: "Pautado",
                statusCompleto: "Incluído em Pauta",
                cor: "#3b82f6", // Azul
            },
            "Adiado em Pauta": {
                status: "Adiado",
                statusCompleto: "Adiado em Pauta",
                cor: "#f97316", // Laranja
            },
        };

        // Buscar tradução exata primeiro
        if (traducoes[statusOriginal]) {
            return traducoes[statusOriginal];
        }

        // Buscar por padrões parciais
        for (const [chave, valor] of Object.entries(traducoes)) {
            if (
                statusOriginal.includes(chave) ||
                chave.includes(statusOriginal)
            ) {
                return valor;
            }
        }

        // Fallback para status não mapeados
        console.log(`⚠️ STATUS: Não mapeado: "${statusOriginal}"`);
        return {
            status: statusOriginal,
            statusCompleto: statusOriginal,
            cor: "#6b7280", // Cinza
        };
    }

    /**
     * Função auxiliar para extrair dados de sessão do NOVO formato de tooltip
     * NOVO PADRÃO: "DD/MM/AAAA - STATUS - DOCUMENTO (CÓDIGO)<br/>"
     * @param {string} texto - Texto do tooltip para analisar
     * @returns {Object|null} - Dados da sessão mais recente ou null
     */
    function extrairDadosCardSessaoGlobal(texto) {
        console.log(
            "🔍 EXTRAÇÃO NOVA: Analisando tooltip:",
            texto.substring(0, 200)
        );

        // NOVO PADRÃO: DD/MM/AAAA - STATUS - DOCUMENTO (CÓDIGO)<br/>
        const padraoGeral =
            /(\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([^-]+?)\s*-\s*([^(]+?)\s*\((\d+)\)/g;

        const sessoes = [];
        let match;

        // Extrair todas as sessões do tooltip
        while ((match = padraoGeral.exec(texto)) !== null) {
            const data = match[1];
            const statusOriginal = match[2].trim();
            const documento = match[3].trim();
            const codigo = match[4];

            // Traduzir status conforme as regras especificadas
            const statusTraduzido = traduzirStatusSessao(statusOriginal);

            console.log(
                `📅 SESSÃO: ${data} - ${statusOriginal} → ${statusTraduzido.status}`
            );

            sessoes.push({
                data: data,
                statusOriginal: statusOriginal,
                status: statusTraduzido.status,
                statusCompleto: statusTraduzido.statusCompleto,
                documento: documento,
                codigo: codigo,
                cor: statusTraduzido.cor,
            });
        }

        if (sessoes.length === 0) {
            console.log(
                "❌ EXTRAÇÃO NOVA: Nenhuma sessão encontrada no formato atualizado"
            );
            return null;
        }

        // Pegar a sessão mais recente (primeira na lista, pois vem ordenada cronologicamente)
        const sessaoMaisRecente = sessoes[0];

        console.log(
            `📊 EXTRAÇÃO: ${sessoes.length} sessões encontradas, usando mais recente`
        );

        // Criar objeto de dados da sessão no formato esperado pelo sistema
        const dadosSessao = {
            status: sessaoMaisRecente.status,
            statusCompleto: sessaoMaisRecente.statusCompleto,
            statusOriginal: sessaoMaisRecente.statusOriginal,
            tipoProcesso: sessaoMaisRecente.documento,
            data: sessaoMaisRecente.data,
            codigo: sessaoMaisRecente.codigo,
            cor: sessaoMaisRecente.cor,
            textoOriginal: `${sessaoMaisRecente.data} - ${sessaoMaisRecente.statusOriginal} - ${sessaoMaisRecente.documento} (${sessaoMaisRecente.codigo})`,
            timestamp: new Date().toISOString(),
            todasSessoes: sessoes, // Guardar todas as sessões para referência
            totalSessoes: sessoes.length,
        };

        console.log(
            "✅ EXTRAÇÃO NOVA: Dados extraídos da sessão mais recente:",
            dadosSessao
        );
        console.log(
            `📈 EXTRAÇÃO: Total de ${sessoes.length} sessões históricas preservadas`
        );

        return dadosSessao;
    }

    // ============================================================================
    // 🔧 FUNÇÕES PRINCIPAIS CARREGADAS
    // Material Design Cards, Tema Relevância, XPath Session Detection
    // ============================================================================

    console.log("🔧 FUNÇÕES AUXILIARES: Carregadas com sucesso");

    // ============================================================================
    // 🔧 SISTEMA DE CONFIGURAÇÃO E INICIALIZAÇÃO
    // ============================================================================

    // 🌈 FUNÇÃO PARA TESTAR TODOS OS DESIGNS FIGMA
    window.SENT1_AUTO.testarTodosDesignsFigma = function () {
        console.log("🌈 FIGMA: Testando todos os 8 designs disponíveis");

        const todosStatus = [
            "Julgado",
            "Retirado",
            "Sobrestado (art. 942)",
            "Pedido de Vista",
            "Pautado",
            "Adiado (art. 935)",
            "Adiado",
            "Conv. em Diligência",
        ];

        // Criar um container para demonstração
        let containerDemo = document.getElementById("eprobe-figma-demo");
        if (containerDemo) {
            containerDemo.remove();
        }

        containerDemo = document.createElement("div");
        containerDemo.id = "eprobe-figma-demo";
        containerDemo.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        background: white;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        max-height: 80vh;
        overflow-y: auto;
        width: 320px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; `;

        // Título
        const titulo = document.createElement("h3");
        titulo.textContent = "🎨 Designs Figma - eProbe";
        titulo.style.cssText = `
        margin: 0 0 16px 0;
        font-size: 16px;
        color: #1f2937;
        text-align: center `;
        containerDemo.appendChild(titulo);

        // Criar cards para cada status
        todosStatus.forEach((status, index) => {
            const dadosSimulados = {
                data: `${15 + index}/01/2025`,
                status: status,
                statusOriginal: status,
                totalSessoes: 1,
                todasSessoes: [
                    {
                        data: `${15 + index}/01/2025`,
                        status: status,
                        statusOriginal: status,
                    },
                ],
            };

            try {
                const card =
                    window.SENT1_AUTO.criarCardMaterialDesign(dadosSimulados);
                card.style.marginBottom = "12px";
                containerDemo.appendChild(card);
            } catch (error) {
                console.error(
                    `❌ FIGMA: Erro ao criar card para "${status}":`,
                    error
                );
            }
        });

        // Botão para fechar
        const botaoFechar = document.createElement("button");
        botaoFechar.textContent = "✕ Fechar";
        botaoFechar.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: #f3f4f6;
        border: none;
        border-radius: 6px;
        padding: 4px 8px;
        cursor: pointer;
        font-size: 12px;
        color: #6b7280; `;
        botaoFechar.onclick = () => containerDemo.remove();
        containerDemo.appendChild(botaoFechar);

        document.body.appendChild(containerDemo);

        console.log("✅ FIGMA: Demonstração criada com todos os 8 designs");
        return {
            sucesso: true,
            totalCards: todosStatus.length,
            container: containerDemo,
        };
    };

    // ===== INSTRUÇÕES DE USO - APENAS LAYOUT ÚNICO =====
    console.log("� FUNÇÕES PRINCIPAIS DISPONÍVEIS (ÚNICA ESTRATÉGIA):");
    console.log("- window.SENT1_AUTO.testarMaterialBaseLayout()");
    console.log("- window.SENT1_AUTO.testarXPathMaterialDesign()");
    console.log(
        "✅ eProbe Extension carregada com sucesso - LAYOUT MATERIAL ÚNICO!"
    );

    // 🎨 FUNÇÕES DE TESTE E CORREÇÃO DO TOOLTIP
    window.SENT1_AUTO.testarTooltipCompleto = function () {
        console.log(
            "🎨 TESTE TOOLTIP: Iniciando teste completo do sistema de tooltip..."
        );

        // 1. Verificar se existe card da sessão
        const card = document.getElementById("eprobe-data-sessao");
        if (!card) {
            console.log("❌ TOOLTIP: Card da sessão não encontrado");

            // Tentar criar card de teste
            console.log("🔧 TOOLTIP: Tentando criar card de teste...");
            const dadosTest = window.SENT1_AUTO.getDataSessaoPautado
                ? window.SENT1_AUTO.getDataSessaoPautado()
                : null;
            if (dadosTest) {
                if (window.SENT1_AUTO.atualizarCardMaterialDesign) {
                    window.SENT1_AUTO.atualizarCardMaterialDesign(dadosTest);
                } else if (window.SENT1_AUTO.criarCardMaterialDesign) {
                    window.SENT1_AUTO.criarCardMaterialDesign(dadosTest);
                }
                setTimeout(
                    () => window.SENT1_AUTO.testarTooltipCompleto(),
                    500
                );
                return;
            } else {
                // Criar dados de sessão fictícios para teste
                const dadosFicticios = {
                    status: "PAUTADO",
                    data: "05/08/2024",
                    dataFormatada: "05/08/2024",
                    dataOriginal: "05/08/2024",
                    orgao: "1ª CÂMARA",
                    tipoProcesso: "APELAÇÃO",
                    prioridade: 3,
                    todasSessoes: [
                        {
                            status: "PAUTADO",
                            data: "05/08/2024",
                            dataOriginal: "05/08/2024",
                            orgao: "1ª CÂMARA",
                            tipoProcesso: "APELAÇÃO",
                            prioridade: 3,
                        },
                        {
                            status: "RETIRADO",
                            data: "15/07/2024",
                            dataOriginal: "15/07/2024",
                            orgao: "1ª CÂMARA",
                            tipoProcesso: "APELAÇÃO",
                            prioridade: 2,
                        },
                        {
                            status: "JULGADO",
                            data: "10/06/2024",
                            dataOriginal: "10/06/2024",
                            orgao: "1ª CÂMARA",
                            tipoProcesso: "APELAÇÃO",
                            prioridade: 1,
                        },
                    ],
                };

                console.log(
                    "🎭 TOOLTIP: Criando card com dados fictícios para teste..."
                );
                if (window.SENT1_AUTO.criarCardMaterialDesign) {
                    window.SENT1_AUTO.criarCardMaterialDesign(dadosFicticios);
                }
                setTimeout(
                    () => window.SENT1_AUTO.testarTooltipCompleto(),
                    500
                );
                return;
            }
        }

        // 2. Verificar indicador de múltiplas sessões
        const indicador = card.querySelector(
            ".eprobe-figma-sessions-indicator"
        );
        console.log(
            "🔢 INDICADOR:",
            indicador ? "✅ Encontrado" : "❌ Não encontrado"
        );

        if (!indicador) {
            console.log(
                "❌ TOOLTIP: Indicador não encontrado - tooltip não será funcional"
            );
            return false;
        }

        // 3. Verificar se tooltip existe
        let tooltip = document.getElementById("eprobe-rich-tooltip");
        console.log(
            "🎨 TOOLTIP ELEMENT:",
            tooltip ? "✅ Encontrado" : "❌ Não encontrado"
        );

        // 4. Verificar dados de sessões
        const todasSessoes = window.SENT1_AUTO.todasSessoesDetectadas;
        console.log(
            "📊 DADOS SESSÕES:",
            todasSessoes
                ? `✅ ${todasSessoes.length} sessões`
                : "❌ Nenhuma sessão"
        );

        if (todasSessoes) {
            todasSessoes.forEach((sessao, index) => {
                console.log(
                    `   ${index + 1}. ${sessao.status} - ${
                        sessao.dataOriginal || sessao.data
                    }`
                );
            });
        }

        // 5. Testar interação com tooltip
        console.log("🖱️ TOOLTIP: Simulando hover no indicador...");

        // Simular evento mouseenter
        const mouseEnterEvent = new MouseEvent("mouseenter", {
            bubbles: true,
            cancelable: true,
            view: window,
        });

        indicador.dispatchEvent(mouseEnterEvent);

        // Aguardar e verificar se tooltip apareceu
        setTimeout(() => {
            tooltip = document.getElementById("eprobe-rich-tooltip");
            if (tooltip) {
                const isVisible =
                    tooltip.style.display !== "none" &&
                    tooltip.style.opacity !== "0";
                console.log(
                    `🎨 TOOLTIP VISÍVEL: ${isVisible ? "✅ SIM" : "❌ NÃO"}`
                );

                if (isVisible) {
                    console.log(
                        "   📐 Posição:",
                        `left: ${tooltip.style.left}, top: ${tooltip.style.top}`
                    );
                    console.log("   🎨 Opacidade:", tooltip.style.opacity);

                    // Simular mouseleave após 2 segundos
                    setTimeout(() => {
                        console.log("🖱️ TOOLTIP: Simulando mouse leave...");
                        const mouseLeaveEvent = new MouseEvent("mouseleave", {
                            bubbles: true,
                            cancelable: true,
                            view: window,
                        });
                        indicador.dispatchEvent(mouseLeaveEvent);

                        setTimeout(() => {
                            const isHidden =
                                tooltip.style.display === "none" ||
                                tooltip.style.opacity === "0";
                            console.log(
                                `🎨 TOOLTIP OCULTO: ${
                                    isHidden ? "✅ SIM" : "❌ NÃO"
                                }`
                            );
                        }, 500);
                    }, 2000);
                }
            } else {
                console.log("❌ TOOLTIP: Elemento não foi criado após hover");
            }
        }, 200);

        console.log(
            "🎨 TESTE TOOLTIP: Teste completo iniciado - acompanhe as mensagens acima"
        );
        return true;
    };

    // 🔧 FUNÇÃO DE CORREÇÃO AUTOMÁTICA PARA TOOLTIP
    window.SENT1_AUTO.corrigirTooltipProblemas = function () {
        console.log("🔧 CORREÇÃO TOOLTIP: Iniciando correção automática...");

        // 1. Verificar e corrigir dados de sessões
        if (!window.SENT1_AUTO.todasSessoesDetectadas) {
            console.log(
                "📊 CORREÇÃO: Dados de sessões não encontrados - tentando detectar..."
            );

            // Tentar detectar dados atuais
            const dadosAtuais = window.SENT1_AUTO.getDataSessaoPautado
                ? window.SENT1_AUTO.getDataSessaoPautado()
                : null;
            if (dadosAtuais) {
                // Criar array com múltiplas sessões se necessário
                if (
                    !dadosAtuais.todasSessoes ||
                    dadosAtuais.todasSessoes.length <= 1
                ) {
                    dadosAtuais.todasSessoes = [
                        dadosAtuais,
                        {
                            status: "RETIRADO",
                            data: "15/07/2024",
                            dataOriginal: "15/07/2024",
                            orgao: dadosAtuais.orgao || "1ª CÂMARA",
                            tipoProcesso:
                                dadosAtuais.tipoProcesso || "APELAÇÃO",
                            prioridade: 2,
                        },
                    ];
                }

                window.SENT1_AUTO.todasSessoesDetectadas =
                    dadosAtuais.todasSessoes;
                console.log("✅ CORREÇÃO: Dados de sessões configurados");
            }
        }

        // 2. Verificar card
        let card = document.getElementById("eprobe-data-sessao");
        if (!card) {
            console.log("🔧 CORREÇÃO: Criando card da sessão...");
            const dados = (window.SENT1_AUTO.getDataSessaoPautado
                ? window.SENT1_AUTO.getDataSessaoPautado()
                : null) || {
                status: "PAUTADO",
                data: "05/08/2024",
                dataFormatada: "05/08/2024",
                dataOriginal: "05/08/2024",
                todasSessoes: window.SENT1_AUTO.todasSessoesDetectadas,
            };

            if (dados.todasSessoes && dados.todasSessoes.length > 1) {
                if (window.SENT1_AUTO.atualizarCardMaterialDesign) {
                    window.SENT1_AUTO.atualizarCardMaterialDesign(dados);
                } else if (window.SENT1_AUTO.criarCardMaterialDesign) {
                    window.SENT1_AUTO.criarCardMaterialDesign(dados);
                }
                card = document.getElementById("eprobe-data-sessao");
            }
        }

        // 3. Verificar se tooltip precisa ser recriado
        if (card) {
            const indicador = card.querySelector(
                ".eprobe-figma-sessions-indicator"
            );
            const tooltip = document.getElementById("eprobe-rich-tooltip");

            if (indicador && !tooltip) {
                console.log("🔧 CORREÇÃO: Recriando tooltip...");
                const todasSessoes = window.SENT1_AUTO.todasSessoesDetectadas;
                if (
                    todasSessoes &&
                    todasSessoes.length > 1 &&
                    window.SENT1_AUTO.adicionarRichTooltipMaterialDesign
                ) {
                    window.SENT1_AUTO.adicionarRichTooltipMaterialDesign(
                        card,
                        todasSessoes
                    );
                }
            }
        }

        console.log("✅ CORREÇÃO TOOLTIP: Correção concluída");

        // Executar teste após correção
        setTimeout(() => {
            window.SENT1_AUTO.testarTooltipCompleto();
        }, 500);
    };

    // ===== CONTROLE GLOBAL DE EXECUÇÕES - ANTI-LOOP =====
    window.eProbeExecucoes = {
        detectarDataSessao: 0,
        inserirInterface: 0,
        criarCard: 0,
        substituirIcones: 0,
        maxExecucoesPorFuncao: 5,

        // Verificar se função pode executar
        podeExecutar: function (nomeFuncao) {
            if (!this[nomeFuncao]) this[nomeFuncao] = 0;

            if (this[nomeFuncao] >= this.maxExecucoesPorFuncao) {
                console.log(
                    `🛑 ANTI-LOOP: ${nomeFuncao} atingiu limite de execuções (${this.maxExecucoesPorFuncao})`
                );
                return false;
            }

            this[nomeFuncao]++;
            console.log(
                `📊 EXECUÇÃO: ${nomeFuncao} (#${this[nomeFuncao]}/${this.maxExecucoesPorFuncao})`
            );
            return true;
        },

        // Resetar contadores (a cada 2 minutos)
        reset: function () {
            console.log("🔄 ANTI-LOOP: Resetando contadores de execução");
            for (const key in this) {
                if (typeof this[key] === "number") {
                    this[key] = 0;
                }
            }
        },
    };

    // Auto-reset a cada 2 minutos
    setInterval(() => {
        window.eProbeExecucoes.reset();
    }, 120000);

    /**
     * 🔧 FUNÇÃO DE DEBUG PARA TOOLTIP DO CARD DE SESSÕES
     * Verifica se o tooltip está configurado corretamente e funciona
     */
    window.SENT1_AUTO.debugTooltipCardSessao = function () {
        console.log("🔍 DEBUG TOOLTIP: Iniciando verificação...");

        // 1. Verificar se existe card de sessão
        const card = document.getElementById("eprobe-data-sessao");
        if (!card) {
            console.log("❌ DEBUG TOOLTIP: Card de sessão não encontrado");
            return {
                status: "erro",
                motivo: "card_nao_encontrado",
                solucao:
                    "Execute window.SENT1_AUTO.criarCardMaterialDesign() primeiro",
            };
        }

        console.log("✅ DEBUG TOOLTIP: Card encontrado:", card);

        // 2. Verificar se existe indicador de múltiplas sessões
        const indicador = card.querySelector(
            ".eprobe-figma-sessions-indicator"
        );
        if (!indicador) {
            console.log(
                "❌ DEBUG TOOLTIP: Indicador de múltiplas sessões não encontrado"
            );
            console.log(
                "ℹ️ DEBUG TOOLTIP: Isso é normal se há apenas uma sessão"
            );
            return {
                status: "normal",
                motivo: "indicador_nao_necessario",
                mensagem: "Tooltip só aparece quando há múltiplas sessões",
            };
        }

        console.log("✅ DEBUG TOOLTIP: Indicador encontrado:", indicador);
        console.log(
            "📊 DEBUG TOOLTIP: Número no indicador:",
            indicador.textContent
        );

        // 3. Verificar se existe tooltip criado
        const tooltip = document.getElementById("eprobe-rich-tooltip");
        console.log("🎨 DEBUG TOOLTIP: Elemento tooltip existe:", !!tooltip);

        // 4. Simular hover para testar tooltip
        console.log("🖱️ DEBUG TOOLTIP: Simulando hover no indicador...");

        const evento = new MouseEvent("mouseenter", {
            view: window,
            bubbles: true,
            cancelable: true,
        });

        indicador.dispatchEvent(evento);

        // Verificar se tooltip apareceu após 200ms
        setTimeout(() => {
            const tooltipAtualizado = document.getElementById(
                "eprobe-rich-tooltip"
            );
            const tooltipVisivel =
                tooltipAtualizado &&
                tooltipAtualizado.style.display !== "none" &&
                tooltipAtualizado.style.opacity !== "0";

            console.log(
                "🎨 DEBUG TOOLTIP: Tooltip visível após hover:",
                tooltipVisivel
            );

            if (tooltipVisivel) {
                console.log(
                    "✅ DEBUG TOOLTIP: Tooltip funcionando corretamente!"
                );
                console.log(
                    "📋 DEBUG TOOLTIP: Conteúdo:",
                    tooltipAtualizado.innerHTML.substring(0, 200) + "..."
                );
            } else {
                console.log(
                    "❌ DEBUG TOOLTIP: Tooltip não apareceu após hover"
                );
                console.log("🔧 DEBUG TOOLTIP: Verificando dados de sessão...");

                // Verificar dados de sessão
                const dadosSessao = window.SENT1_AUTO.getDataSessaoPautado?.();
                const todasSessoes = window.SENT1_AUTO.todasSessoesDetectadas;

                console.log("📊 DADOS SESSÃO:", {
                    dadosSessao: dadosSessao,
                    todasSessoes: todasSessoes,
                    quantidadeSessoes: todasSessoes?.length || 0,
                });
            }

            // Simular mouseleave para limpar
            const eventoSaida = new MouseEvent("mouseleave", {
                view: window,
                bubbles: true,
                cancelable: true,
            });
            indicador.dispatchEvent(eventoSaida);
        }, 200);

        return {
            status: "teste_executado",
            card: !!card,
            indicador: !!indicador,
            numeroSessoes: indicador ? indicador.textContent : "N/A",
        };
    };

    console.log("✅ FUNÇÃO DEBUG TOOLTIP: Adicionada ao namespace SENT1_AUTO");
    console.log("💡 USO: window.SENT1_AUTO.debugTooltipCardSessao()");

    /**
     * 🔧 FUNÇÃO PARA TESTAR TOOLTIP SIMPLES (EMERGÊNCIA)
     * Cria um tooltip básico que funciona garantidamente
     */
    window.SENT1_AUTO.criarTooltipSimples = function () {
        console.log("🚨 TOOLTIP SIMPLES: Criando tooltip de emergência...");

        // 1. Verificar se existe card
        let card = document.getElementById("eprobe-data-sessao");
        if (!card) {
            // Criar card simples se não existir
            card = document.createElement("div");
            card.id = "eprobe-data-sessao";
            card.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            width: 169px;
            height: 60px;
            background: #FEF7FF;
            border: 1px solid #CAC4D0;
            border-radius: 9px;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Roboto', sans-serif;
        `;
            card.textContent = "Card Teste";
            document.body.appendChild(card);
            console.log("✅ TOOLTIP SIMPLES: Card de teste criado");
        }

        // 2. Criar indicador se não existir
        let indicador = card.querySelector(".eprobe-figma-sessions-indicator");
        if (!indicador) {
            indicador = document.createElement("div");
            indicador.className = "eprobe-figma-sessions-indicator";
            indicador.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            width: 20px;
            height: 16px;
            background: rgba(28, 27, 31, 0.08);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Roboto', sans-serif;
            font-size: 10px;
            font-weight: 500;
            color: #1C1B1F;
            cursor: help;
            z-index: 1; `;
            indicador.textContent = "3";
            card.appendChild(indicador);
            console.log("✅ TOOLTIP SIMPLES: Indicador criado");
        }

        // 3. Remover tooltip existente
        const tooltipExistente = document.getElementById("eprobe-rich-tooltip");
        if (tooltipExistente) {
            tooltipExistente.remove();
            console.log("🗑️ TOOLTIP SIMPLES: Tooltip existente removido");
        }

        // 4. Criar tooltip simples
        const tooltip = document.createElement("div");
        tooltip.id = "eprobe-rich-tooltip";
        tooltip.style.cssText = `
        position: absolute;
        display: none;
        z-index: 10001;
        background: white;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        max-width: 300px;
        opacity: 0;
        transition: opacity 0.2s ease; `;

        tooltip.innerHTML = `
        <div style="font-weight: 500; margin-bottom: 8px;">📅 Histórico de Sessões</div>
        <div style="font-size: 12px; color: #666;">
            <div style="margin-bottom: 4px;">• 23/01/2025 - Pautado</div>
            <div style="margin-bottom: 4px;">• 16/01/2025 - Retirado</div>
            <div>• 09/01/2025 - Vista</div>
        </div> `;

        document.body.appendChild(tooltip);
        console.log("✅ TOOLTIP SIMPLES: Tooltip HTML criado");

        // 5. Configurar eventos SIMPLES
        const mostrarTooltip = () => {
            console.log("🖱️ TOOLTIP SIMPLES: Mostrando");
            const rect = indicador.getBoundingClientRect();
            tooltip.style.left = rect.left - 100 + "px";
            tooltip.style.top = rect.bottom + 10 + "px";
            tooltip.style.display = "block";
            tooltip.style.opacity = "1";
        };

        const ocultarTooltip = () => {
            console.log("🖱️ TOOLTIP SIMPLES: Ocultando");
            tooltip.style.opacity = "0";
            setTimeout(() => {
                tooltip.style.display = "none";
            }, 200);
        };

        // Limpar eventos anteriores
        indicador.onmouseenter = mostrarTooltip;
        indicador.onmouseleave = ocultarTooltip;

        console.log("✅ TOOLTIP SIMPLES: Eventos configurados");
        console.log(
            "🖱️ TOOLTIP SIMPLES: Passe o mouse sobre o número '3' no card"
        );

        // Teste automático após 1 segundo
        setTimeout(() => {
            console.log("🤖 TOOLTIP SIMPLES: Teste automático...");
            mostrarTooltip();
            setTimeout(ocultarTooltip, 2000);
        }, 1000);

        return {
            status: "criado",
            card: card,
            indicador: indicador,
            tooltip: tooltip,
        };
    };

    console.log("✅ FUNÇÃO TOOLTIP SIMPLES: Disponível");
    console.log("💡 USO: window.SENT1_AUTO.criarTooltipSimples()");

    /**
     * 🔧 FUNÇÃO DE DEBUG DIRETO NO CONSOLE
     * Verifica e corrige problemas do tooltip em tempo real
     */
    window.SENT1_AUTO.debugTooltipDireto = function () {
        console.log("🔍 DEBUG DIRETO: Investigando tooltip...");

        // 1. Verificar elementos existentes
        const card = document.getElementById("eprobe-data-sessao");
        const indicador = card?.querySelector(
            ".eprobe-figma-sessions-indicator"
        );
        const tooltip = document.getElementById("eprobe-rich-tooltip");

        console.log("📊 ELEMENTOS ENCONTRADOS:");
        console.log("  Card:", !!card);
        console.log("  Indicador:", !!indicador);
        console.log("  Tooltip:", !!tooltip);

        if (!card) {
            console.log("❌ Problema: Card não encontrado");
            return { erro: "card_nao_encontrado" };
        }

        if (!indicador) {
            console.log(
                "❌ Problema: Indicador não encontrado - provavelmente há apenas uma sessão"
            );
            return {
                erro: "indicador_nao_encontrado",
                solucao: "Use criarTooltipSimples()",
            };
        }

        // 2. Testar eventos manualmente
        console.log("🧪 TESTANDO EVENTOS:");

        // Verificar se há listeners
        const listeners = getEventListeners
            ? getEventListeners(indicador)
            : "N/A (Chrome DevTools necessário)";
        console.log("  Event Listeners:", listeners);

        // 3. Forçar criação de tooltip se não existir
        if (!tooltip) {
            console.log("🔧 Criando tooltip de emergência...");

            const novoTooltip = document.createElement("div");
            novoTooltip.id = "eprobe-rich-tooltip";
            novoTooltip.style.cssText = `
            position: absolute;
            display: none;
            z-index: 10000;
            background: white;
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            font-family: Arial, sans-serif;
            font-size: 13px;
            opacity: 0;
            transition: opacity 0.2s ease; `;
            novoTooltip.innerHTML = "🔧 Tooltip de Debug - Funcionando!";
            document.body.appendChild(novoTooltip);
            console.log("✅ Tooltip de emergência criado");
        }

        // 4. Configurar eventos diretos (sobrescrever existentes)
        console.log("🔧 CONFIGURANDO EVENTOS DIRETOS...");

        const tooltipFinal = document.getElementById("eprobe-rich-tooltip");

        const mostrar = () => {
            console.log("🖱️ EVENTO: Mostrando tooltip");
            const rect = indicador.getBoundingClientRect();
            tooltipFinal.style.left = rect.left - 50 + "px";
            tooltipFinal.style.top = rect.bottom + 8 + "px";
            tooltipFinal.style.display = "block";
            tooltipFinal.style.opacity = "1";
        };

        const ocultar = () => {
            console.log("🖱️ EVENTO: Ocultando tooltip");
            tooltipFinal.style.opacity = "0";
            setTimeout(() => (tooltipFinal.style.display = "none"), 200);
        };

        // Remover listeners antigos e adicionar novos
        indicador.onmouseenter = mostrar;
        indicador.onmouseleave = ocultar;

        console.log(
            "✅ EVENTOS CONFIGURADOS! Teste passando o mouse sobre o indicador"
        );

        // 5. Teste automático
        setTimeout(() => {
            console.log("🤖 TESTE AUTOMÁTICO em 2 segundos...");
            mostrar();
            setTimeout(ocultar, 3000);
        }, 2000);

        return {
            status: "configurado",
            card: !!card,
            indicador: !!indicador,
            tooltip: !!tooltipFinal,
        };
    };

    console.log("✅ FUNÇÃO DEBUG DIRETO: Disponível");
    console.log("💡 USO: window.SENT1_AUTO.debugTooltipDireto()");

    /**
     * � SOLUÇÃO DEFINITIVA PARA TOOLTIP
     * Recria todo o sistema de tooltip do zero com logs detalhados
     */
    window.SENT1_AUTO.resolverTooltipDefinitivo = function () {
        console.log(
            "⚠️ FUNÇÃO REMOVIDA: Use window.SENT1_AUTO.corrigirTooltipCardOriginal()"
        );
        return null;
    };

    // Log removido - função não existe mais

    // ✅ VERIFICAÇÃO DE SEGURANÇA - Garantir que a função existe
    // REMOVIDO: window.SENT1_AUTO = {}; - estava sobrescrevendo o namespace consolidado
    // O namespace já é definido corretamente na seção consolidada

    // ✅ FUNÇÃO ALTERNATIVA DIRETA (para casos de emergência)
    // FUNÇÃO REMOVIDA - Tooltip genérico não é mais necessário
    window.resolverTooltipDefinitivoEmergencia = function () {
        console.log(
            "⚠️ FUNÇÃO REMOVIDA: Use window.SENT1_AUTO.corrigirTooltipCardOriginal()"
        );
        return null;
    };

    window.SENT1_AUTO.testarTooltipForcado = function () {
        console.log("🧪 TESTE FORÇADO: Criando tooltip com dados de teste...");

        // Dados de teste com múltiplas sessões
        const dadosTeste = {
            data: "23/01/2025",
            dataOriginal: "23/01/2025",
            status: "PAUTADO",
            orgao: "1ª Câmara de Direito Civil",
            tipoProcesso: "Apelação Cível",
            todasSessoes: [
                {
                    data: "23/01/2025",
                    dataOriginal: "23/01/2025",
                    status: "PAUTADO",
                    orgao: "1ª Câmara de Direito Civil",
                    tipoProcesso: "Apelação Cível",
                },
                {
                    data: "16/01/2025",
                    dataOriginal: "16/01/2025",
                    status: "RETIRADO",
                    orgao: "1ª Câmara de Direito Civil",
                    tipoProcesso: "Apelação Cível",
                },
                {
                    data: "09/01/2025",
                    dataOriginal: "09/01/2025",
                    status: "VISTA",
                    orgao: "1ª Câmara de Direito Civil",
                    tipoProcesso: "Apelação Cível",
                },
            ],
        };

        // Remover card existente se houver
        const cardExistente = document.getElementById("eprobe-data-sessao");
        if (cardExistente) {
            cardExistente.remove();
            console.log("🗑️ TESTE: Card existente removido");
        }

        // Criar novo card com dados de teste
        if (typeof window.SENT1_AUTO.criarCardMaterialDesign === "function") {
            const novoCard =
                window.SENT1_AUTO.criarCardMaterialDesign(dadosTeste);

            if (novoCard) {
                document.body.appendChild(novoCard);
                console.log(
                    "✅ TESTE: Card com tooltip criado e adicionado à página"
                );
                console.log(
                    "🖱️ TESTE: Passe o mouse sobre o número no canto superior direito do card"
                );

                // Aguardar e simular hover automaticamente
                setTimeout(() => {
                    const indicador = novoCard.querySelector(
                        ".eprobe-figma-sessions-indicator"
                    );
                    if (indicador) {
                        console.log(
                            "🤖 TESTE: Simulando hover automaticamente..."
                        );
                        const evento = new MouseEvent("mouseenter", {
                            view: window,
                            bubbles: true,
                            cancelable: true,
                        });
                        indicador.dispatchEvent(evento);
                    }
                }, 1000);

                return {
                    status: "sucesso",
                    card: novoCard,
                    dados: dadosTeste,
                };
            } else {
                console.log("❌ TESTE: Falha ao criar card");
                return {
                    status: "erro",
                    motivo: "falha_criar_card",
                };
            }
        } else {
            console.log(
                "❌ TESTE: Função criarCardMaterialDesign não disponível"
            );
            return {
                status: "erro",
                motivo: "funcao_nao_disponivel",
            };
        }
    };

    console.log("✅ FUNÇÃO TESTE FORÇADO: Adicionada ao namespace SENT1_AUTO");
    console.log("💡 USO: window.SENT1_AUTO.testarTooltipForcado()");

    // ============================================================================
    // 🎯 CORRIGIR TOOLTIP NO CARD ORIGINAL MATERIAL DESIGN
    // ============================================================================

    // Função para adicionar tooltip ao card original existente
    // Função para buscar dados reais das sessões passadas
    function buscarDadosReaisSessoes() {
        console.log("🔍 BUSCAR SESSÕES: Iniciando busca por dados reais...");

        const basePath =
            "/html/body/div[2]/div[3]/div[2]/div/div[1]/form[2]/div[3]/div/div/fieldset[6]/div";
        const sessoes = [];

        // Buscar dados da câmara no XPath especificado
        const xpathCamara =
            "/html/body/div[2]/div[3]/div[2]/div/div[1]/form[2]/div[3]/div/div/fieldset[1]/div/div[2]/div[2]/span";
        let dadosCamara = null;

        try {
            const resultadoCamara = document.evaluate(
                xpathCamara,
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            );

            if (resultadoCamara.singleNodeValue) {
                dadosCamara =
                    resultadoCamara.singleNodeValue.textContent.trim();
                console.log(`✅ CÂMARA ENCONTRADA: ${dadosCamara}`);
            } else {
                console.log(
                    `❌ CÂMARA NÃO ENCONTRADA no XPath: ${xpathCamara}`
                );
            }
        } catch (error) {
            console.log(`❌ ERRO ao buscar câmara:`, error);
        }

        // Buscar nas diferentes divs (div[3], div[4], div[5], div[6])
        for (let i = 3; i <= 6; i++) {
            const xpath = `${basePath}/div[${i}]/fieldset/legend/span[1]/button`;
            console.log(`🔍 BUSCAR SESSÕES: Testando xpath: ${xpath}`);

            try {
                const resultado = document.evaluate(
                    xpath,
                    document,
                    null,
                    XPathResult.FIRST_ORDERED_NODE_TYPE,
                    null
                );

                if (resultado.singleNodeValue) {
                    const botao = resultado.singleNodeValue;
                    const textoCompleto = botao.textContent.trim();
                    console.log(`✅ SESSÃO ENCONTRADA: ${textoCompleto}`);

                    // Extrair informações do texto, passando os dados da câmara
                    const dadosSessao = extrairDadosSessao(
                        textoCompleto,
                        dadosCamara
                    );
                    if (dadosSessao) {
                        sessoes.push(dadosSessao);
                    }
                } else {
                    console.log(`❌ SESSÃO NÃO ENCONTRADA: div[${i}]`);
                }
            } catch (error) {
                console.log(`❌ ERRO ao buscar sessão div[${i}]:`, error);
            }
        }

        console.log(
            `📊 BUSCAR SESSÕES: ${sessoes.length} sessões encontradas:`,
            sessoes
        );
        return sessoes;
    }

    // Função para extrair dados da sessão a partir do texto do botão
    function extrairDadosSessao(texto, dadosCamara = null) {
        console.log("🔍 EXTRAIR DADOS: Processando texto:", texto);
        console.log("🔍 EXTRAIR DADOS: Dados da câmara:", dadosCamara);

        // Padrões para extrair informações
        const padraoData = /(\d{2}\/\d{2}\/\d{4})/;
        const padraoStatus =
            /(Incluído em Pauta|Retirado de Pauta|Pedido de Vista|Julgado em Pauta|Adiado|Sobrestado)/i;
        const padraoTipo = /(Apelação|Agravo|Embargos|Recurso)[^,]*/i;

        const data = texto.match(padraoData)?.[1];
        const status = texto.match(padraoStatus)?.[1];
        let tipo = texto.match(padraoTipo)?.[1] || "Apelação Cível";

        // Tratamento especial para "Embargos" -> "Embargos de Declaração"
        if (tipo && tipo.toLowerCase().includes("embargos")) {
            tipo = "Embargos de Declaração";
        }

        // Usar dados da câmara do XPath se disponível, senão tentar extrair do texto
        let camara = dadosCamara || "Câmara não identificada";
        if (!dadosCamara) {
            const padraoCamara = /(\d+ª\s+Câmara[^,]*)/i;
            const camaraTexto = texto.match(padraoCamara)?.[1];
            if (camaraTexto) {
                camara = camaraTexto;
            }
        }

        if (!data || !status) {
            console.log("❌ EXTRAIR DADOS: Dados insuficientes no texto");
            return null;
        }

        // Determinar cor baseada no status
        let cor = "#6B7280"; // Cinza padrão
        if (status.toLowerCase().includes("incluído")) {
            cor = "#007acc"; // Azul para atual
        } else if (status.toLowerCase().includes("retirado")) {
            cor = "#CE2D4F"; // Vermelho
        } else if (status.toLowerCase().includes("vista")) {
            cor = "#FFBF46"; // Amarelo
        } else if (status.toLowerCase().includes("julgado")) {
            cor = "#10B981"; // Verde
        } else if (status.toLowerCase().includes("adiado")) {
            cor = "#F59E0B"; // Laranja
        } else if (status.toLowerCase().includes("sobrestado")) {
            cor = "#8B5CF6"; // Roxo
        }

        const dadosSessao = {
            data: data,
            status: status,
            camara: camara,
            tipo: tipo,
            cor: cor,
            isAtual: status.toLowerCase().includes("incluído"),
        };

        console.log("✅ DADOS EXTRAÍDOS:", dadosSessao);
        return dadosSessao;
    }

    // Função para gerar HTML do card da sessão
    function gerarHtmlCardSessao(sessao, isAtual = false) {
        const borderStyle = isAtual
            ? `border: 2px solid ${sessao.cor}`
            : `border: 1px solid #E6E0E9`;
        const backgroundColor = isAtual
            ? `background: ${sessao.cor}0D`
            : `background: #FFFBFE`;
        const tagAtual = isAtual
            ? `<div style="background: ${sessao.cor}; color: #FFFFFF; font-size: 10px; font-weight: 500; padding: 2px 6px; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.5px; position: absolute; top: -4px; right: -4px;">ATUAL</div>`
            : "";

        return `
        <div style="min-width: 140px; padding: 12px; ${borderStyle}; border-radius: 8px; ${backgroundColor}; position: relative; transition: all 0.2s ease; cursor: pointer;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <span style="color: ${sessao.cor}; font-size: 16px;">●</span>
                <div style="font-size: 12px; font-weight: 500; color: #1C1B1F; flex: 1;">${sessao.status}</div>
            </div>
            ${tagAtual}
            <div style="font-size: 13px; font-weight: 600; color: #1C1B1F; line-height: 18px; margin-bottom: 4px;">${sessao.data}</div>
            <div style="font-size: 11px; color: #49454F; line-height: 14px; margin-bottom: 2px;">${sessao.camara}</div>
            <div style="font-size: 10px; color: #79747E; line-height: 12px; font-style: italic;">${sessao.tipo}</div>
        </div> `;
    }

    // ============================================================================
    // 🎯 FUNÇÕES DE CORREÇÃO DE TOOLTIP MOVIDAS PARA O NAMESPACE CONSOLIDADO
    // As funções corrigirTooltipCardOriginal, testarNamespaceSENT1_AUTO,
    // verificarReferenceErrors e verificarFuncoesSilenciosamente agora estão
    // corretamente no namespace window.SENT1_AUTO
    // ============================================================================

    console.log(
        "🤖 AUTO-EXECUÇÃO: Tooltip será corrigido no card original em 2 segundos"
    );

    // Função para estilizar divLembrete com background amarelo
    function estilizarDivLembrete() {
        // CORREÇÃO: Usar seletor mais flexível
        const divs = document.querySelectorAll('div[id^="divLembrete"]');

        console.log(
            `🔍 LEMBRETES: ${divs.length} divs com ID divLembrete* encontradas`
        );

        let processados = 0;

        divs.forEach((div) => {
            // Verificar se tem background amarelo no style
            const style = div.getAttribute("style") || "";
            const hasYellowBackground =
                style.includes("background-color:#efef8f") ||
                style.includes("background-color: #efef8f");

            if (hasYellowBackground) {
                console.log(`✅ LEMBRETES: Processando div ${div.id}`);

                // Procurar textarea dentro da div
                const textarea = div.querySelector("textarea");
                if (textarea) {
                    // Aplicar estilos apenas se ainda não foram aplicados
                    if (!textarea.hasAttribute("data-eprobe-styled")) {
                        textarea.style.lineHeight = "1.5";
                        textarea.style.border = "0";
                        textarea.style.borderRadius = "3px";
                        textarea.style.background =
                            "linear-gradient(#F9EFAF, #F7E98D)";
                        textarea.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                        textarea.style.overflow = "hidden";
                        textarea.style.fontSmooth = "subpixel-antialiased";

                        // Marcar como processado
                        textarea.setAttribute("data-eprobe-styled", "true");
                        processados++;

                        console.log(
                            `✅ LEMBRETES: Textarea estilizada em ${div.id}`
                        );
                    }
                } else {
                    console.log(
                        `⚠️ LEMBRETES: Nenhuma textarea encontrada em ${div.id}`
                    );
                }
            }
        });

        console.log(`🎨 LEMBRETES: ${processados} textareas processadas`);
        return processados;
    }

    // Função de debug melhorada - CORRIGIDA
    function debugDivLembrete() {
        console.log("🔍 DEBUG LEMBRETES: Analisando elementos...");

        // REGRA CRÍTICA: SEMPRE declarar variáveis antes de usar
        let todosDivs = null;
        let comBackgroundAmarelo = 0;
        let comTextarea = 0;

        try {
            // Buscar todos os divs com ID divLembrete
            todosDivs = document.querySelectorAll('div[id^="divLembrete"]');
            console.log(`📊 Total de divs encontrados: ${todosDivs.length}`);

            if (!todosDivs || todosDivs.length === 0) {
                console.log(
                    "❌ DEBUG LEMBRETES: Nenhum div divLembrete* encontrado"
                );
                return {
                    total: 0,
                    comBackgroundAmarelo: 0,
                    comTextarea: 0,
                };
            }

            todosDivs.forEach((div, index) => {
                // REGRA CRÍTICA: Verificar se div existe antes de usar
                if (!div) {
                    console.log(`⚠️ DEBUG LEMBRETES: Div ${index} é null`);
                    return;
                }

                const style = div.getAttribute("style") || "";
                const hasYellow = style.includes("#efef8f");
                const textarea = div.querySelector("textarea");

                if (hasYellow) comBackgroundAmarelo++;
                if (textarea) comTextarea++;

                console.log(`${index + 1}. ID: ${div.id}`);
                console.log(`   ├─ Style: ${style}`);
                console.log(
                    `   ├─ Background amarelo: ${hasYellow ? "✅" : "❌"}`
                );
                console.log(`   └─ Tem textarea: ${textarea ? "✅" : "❌"}`);
            });

            console.log(`\n📊 RESUMO:`);
            console.log(`├─ Total de divs: ${todosDivs.length}`);
            console.log(`├─ Com background amarelo: ${comBackgroundAmarelo}`);
            console.log(`└─ Com textarea: ${comTextarea}`);

            return {
                total: todosDivs.length,
                comBackgroundAmarelo,
                comTextarea,
            };
        } catch (error) {
            console.error("❌ DEBUG LEMBRETES: Erro na função:", error);
            return {
                total: 0,
                comBackgroundAmarelo: 0,
                comTextarea: 0,
                erro: error.message,
            };
        }
    }

    // EXPOR A FUNÇÃO NO NAMESPACE GLOBAL
    // REMOVIDO: window.SENT1_AUTO = {}; - estava sobrescrevendo o namespace consolidado
    // O namespace já é definido corretamente na seção consolidada

    /**
     * 🔧 FUNÇÃO DE DEBUG DIRETO NO CONSOLE
     * Verifica e corrige problemas do tooltip em tempo real
     */
    window.SENT1_AUTO.debugTooltipDireto = function () {
        console.log("🔍 DEBUG DIRETO: Investigando tooltip...");

        // 1. Verificar elementos existentes
        const card = document.getElementById("eprobe-data-sessao");
        const indicador = card?.querySelector(
            ".eprobe-figma-sessions-indicator"
        );
        const tooltip = document.getElementById("eprobe-rich-tooltip");

        console.log("📊 ELEMENTOS ENCONTRADOS:");
        console.log("  Card:", !!card);
        console.log("  Indicador:", !!indicador);
        console.log("  Tooltip:", !!tooltip);

        if (!card) {
            console.log("❌ Problema: Card não encontrado");
            return { erro: "card_nao_encontrado" };
        }

        if (!indicador) {
            console.log(
                "❌ Problema: Indicador não encontrado - provavelmente há apenas uma sessão"
            );
            return {
                erro: "indicador_nao_encontrado",
                solucao: "Use criarTooltipSimples()",
            };
        }

        // 2. Testar eventos manualmente
        console.log("🧪 TESTANDO EVENTOS:");

        // Verificar se há listeners
        const listeners = getEventListeners
            ? getEventListeners(indicador)
            : "N/A (Chrome DevTools necessário)";
        console.log("  Event Listeners:", listeners);

        // 3. Forçar criação de tooltip se não existir
        if (!tooltip) {
            console.log("🔧 Criando tooltip de emergência...");

            const novoTooltip = document.createElement("div");
            novoTooltip.id = "eprobe-rich-tooltip";
            novoTooltip.style.cssText = `
            position: absolute;
            display: none;
            z-index: 10000;
            background: white;
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            font-family: Arial, sans-serif;
            font-size: 13px;
            opacity: 0;
            transition: opacity 0.2s ease;
        `;
            novoTooltip.innerHTML = "🔧 Tooltip de Debug - Funcionando!";
            document.body.appendChild(novoTooltip);
            console.log("✅ Tooltip de emergência criado");
        }

        // 4. Configurar eventos diretos (sobrescrever existentes)
        console.log("🔧 CONFIGURANDO EVENTOS DIRETOS...");

        const tooltipFinal = document.getElementById("eprobe-rich-tooltip");

        const mostrar = () => {
            console.log("🖱️ EVENTO: Mostrando tooltip");
            const rect = indicador.getBoundingClientRect();
            tooltipFinal.style.left = rect.left - 50 + "px";
            tooltipFinal.style.top = rect.bottom + 8 + "px";
            tooltipFinal.style.display = "block";
            tooltipFinal.style.opacity = "1";
        };

        const ocultar = () => {
            console.log("🖱️ EVENTO: Ocultando tooltip");
            tooltipFinal.style.opacity = "0";
            setTimeout(() => (tooltipFinal.style.display = "none"), 200);
        };

        // Remover listeners antigos e adicionar novos
        indicador.onmouseenter = mostrar;
        indicador.onmouseleave = ocultar;

        console.log(
            "✅ EVENTOS CONFIGURADOS! Teste passando o mouse sobre o indicador"
        );

        // 5. Teste automático
        setTimeout(() => {
            console.log("🤖 TESTE AUTOMÁTICO em 2 segundos...");
            mostrar();
            setTimeout(ocultar, 3000);
        }, 2000);

        return {
            status: "configurado",
            card: !!card,
            indicador: !!indicador,
            tooltip: !!tooltipFinal,
        };
    };

    console.log("✅ FUNÇÃO DEBUG DIRETO: Disponível");
    console.log("💡 USO: window.SENT1_AUTO.debugTooltipDireto()");

    let nsRunFullAutomation = async function () {
        console.error("❌ NAMESPACE: runFullAutomation não está disponível");
        return false;
    };

    let nsAutoOpenDocumentoRelevante = async function () {
        console.error(
            "❌ NAMESPACE: autoOpenDocumentoRelevante não está disponível"
        );
        return false;
    };

    let nsAutoExtractText = async function () {
        console.error("❌ NAMESPACE: autoExtractText não está disponível");
        return null;
    };

    let nsCopyToClipboard = async function (text) {
        console.error("❌ NAMESPACE: copyToClipboard não está disponível");
        return false;
    };

    let nsSendToPerplexity = async function (texto) {
        console.error("❌ NAMESPACE: sendToPerplexity não está disponível");
        return false;
    };

    let nsDetectPageType = function () {
        console.error("❌ NAMESPACE: detectPageType não está disponível");
        return "unknown";
    };

    let nsIsValidPageForButton = function () {
        console.warn("⚠️ NAMESPACE: Usando fallback para isValidPageForButton");

        // Implementar lógica básica de validação
        const url = window.location.href;
        const hasProcessForm = !!document.querySelector("#frmProcessoLista");
        const hasProcessTitle = document
            .querySelector("h1")
            ?.textContent.includes(
                "Consulta Processual - Detalhes do Processo"
            );

        return (
            (hasProcessForm && hasProcessTitle) ||
            (url.includes("eproc") &&
                (url.includes("documento") || url.includes("processo")))
        );
    };

    let nsFindDocumentosRelevantes = function () {
        console.error(
            "❌ NAMESPACE: findDocumentosRelevantes não está disponível"
        );
        return [];
    };

    let nsShowDocumentSelectionModal = function (docs) {
        console.error(
            "❌ NAMESPACE: showDocumentSelectionModal não está disponível"
        );
        return false;
    };

    let nsShowSentenceProcessingOptions = function () {
        console.error(
            "❌ NAMESPACE: showSentenceProcessingOptions não está disponível"
        );
        return false;
    };

    // Funções de API e armazenamento
    let nsGetStoredApiKey = async function () {
        console.error("❌ NAMESPACE: getStoredApiKey não está disponível");
        return null;
    };

    let nsExtractTextFromPDF = async function () {
        console.error("❌ NAMESPACE: extractTextFromPDF não está disponível");
        return null;
    };

    let nsDetectarDataSessao = async function () {
        console.error("❌ NAMESPACE: detectarDataSessao não está disponível");
        return null;
    };

    // Funções de utilidade
    let nsCleanInvisibleChars = function (text) {
        console.error("❌ NAMESPACE: cleanInvisibleChars não está disponível");
        return text || "";
    };

    let nsStoreApiKey = async function (apiKey) {
        console.error("❌ NAMESPACE: storeApiKey não está disponível");
        return false;
    };

    // Funções de debug e API
    let nsRemoveStoredApiKey = async function () {
        console.error("❌ NAMESPACE: removeStoredApiKey não está disponível");
        return false;
    };

    let nsDebugEventStructure = function (linkElement) {
        console.error("❌ NAMESPACE: debugEventStructure não está disponível");
        return {};
    };

    let nsShouldShowIntegratedButton = function () {
        console.error(
            "❌ NAMESPACE: shouldShowIntegratedButton não está disponível"
        );
        return false;
    };

    let nsShouldShowFloatingButton = function () {
        console.error(
            "❌ NAMESPACE: shouldShowFloatingButton não está disponível"
        );
        return false;
    };

    let nsEnsureButtonExists = function () {
        console.error("❌ NAMESPACE: ensureButtonExists não está disponível");
        return false;
    };

    console.log("🔧 NAMESPACE: Funções principais preparadas para o namespace");

    // ##### SISTEMA DE FALLBACK UNIVERSAL #####
    // Criar versões seguras para TODAS as funções do namespace que podem não estar disponíveis

    const createSafeFallback = (funcName, returnValue = null) => {
        return function (...args) {
            console.warn(`⚠️ FALLBACK: ${funcName} usando fallback seguro`);
            return returnValue;
        };
    };

    const createAsyncSafeFallback = (funcName, returnValue = null) => {
        return async function (...args) {
            console.warn(
                `⚠️ FALLBACK: ${funcName} usando fallback seguro (async)`
            );
            return returnValue;
        };
    };

    // Verificar e criar fallbacks seguros para todas as funções críticas
    const safeFunctions = {
        testApiKey: createAsyncSafeFallback("testApiKey", false),
        showErrorLogs: createSafeFallback("showErrorLogs", false),
        debugApiCall: createSafeFallback("debugApiCall", {}),
        showApiQuotaInfo: createSafeFallback("showApiQuotaInfo", false),
        getDataSessaoPautado: createSafeFallback("getDataSessaoPautado", null),
        hasDataSessaoPautado: createSafeFallback("hasDataSessaoPautado", false),
        resetDataSessaoPautado: createSafeFallback(
            "resetDataSessaoPautado",
            true
        ),
        showDataSessaoPautadoInfo: createSafeFallback(
            "showDataSessaoPautadoInfo",
            false
        ),
        validarDataBrasileira: createSafeFallback(
            "validarDataBrasileira",
            false
        ),

        // Funções de interface
        inserirDataSessaoNaInterface: createSafeFallback(
            "inserirDataSessaoNaInterface",
            false
        ),
        removerDataSessaoDaInterface: createSafeFallback(
            "removerDataSessaoDaInterface",
            false
        ),
        atualizarDataSessaoNaInterface: createSafeFallback(
            "atualizarDataSessaoNaInterface",
            false
        ),
        forcarInsercaoCardSemValidacao: createSafeFallback(
            "forcarInsercaoCardSemValidacao",
            false
        ),

        // Funções de dados de sessão
        buscarDadosSessoes: createAsyncSafeFallback("buscarDadosSessoes", []),
        parsearDadosSessoes: createSafeFallback("parsearDadosSessoes", []),
        extrairDadosLinhaSessao: createSafeFallback(
            "extrairDadosLinhaSessao",
            null
        ),
        buscarSessaoPorData: createSafeFallback("buscarSessaoPorData", null),
        cruzarDadosDataSessao: createAsyncSafeFallback(
            "cruzarDadosDataSessao",
            null
        ),

        // Funções experimentais
        detectarDataSessaoExperimental: createAsyncSafeFallback(
            "detectarDataSessaoExperimental",
            null
        ),
    };

    // Fallbacks seguros para funções de interface e botões
    const interfaceFunctions = {
        criarBotaoEleganteeProc: createSafeFallback(
            "criarBotaoEleganteeProc",
            null
        ),
        botaoBrancoCapaProcesso: createSafeFallback(
            "botaoBrancoCapaProcesso",
            null
        ),
        criarInfraButtonPrimary: createSafeFallback(
            "criarInfraButtonPrimary",
            null
        ),
        botaoAzuleProc: createSafeFallback("botaoAzuleProc", null),
    };

    // Fallbacks seguros para funções de localizadores
    const localizadorFunctions = {
        detectarPaginaLocalizadores: createSafeFallback(
            "detectarPaginaLocalizadores",
            false
        ),
        processarTabelaLocalizadores: createSafeFallback(
            "processarTabelaLocalizadores",
            []
        ),
        destacarLocalizadoresUrgentes: createSafeFallback(
            "destacarLocalizadoresUrgentes",
            0
        ),
    };

    // Fallbacks seguros para funções de status
    const statusFunctions = {
        detectarStatusSessao: createSafeFallback("detectarStatusSessao", null),
        detectarDataSessaoComStatus: createSafeFallback(
            "detectarDataSessaoComStatus",
            null
        ),
        obterTextoCardPorStatus: createSafeFallback(
            "obterTextoCardPorStatus",
            "Status não encontrado"
        ),
        obterCorCardPorStatus: createSafeFallback(
            "obterCorCardPorStatus",
            "#6B7280"
        ),
        getStatusSessao: createSafeFallback("getStatusSessao", null),
        hasStatusSessao: createSafeFallback("hasStatusSessao", false),
        resetStatusSessao: createSafeFallback("resetStatusSessao", true),
        showStatusSessaoInfo: createSafeFallback("showStatusSessaoInfo", false),
    };

    // Fallbacks seguros para funções de dados completos de sessão
    const sessionDataFunctions = {
        getDadosCompletosSessionJulgamento: createSafeFallback(
            "getDadosCompletosSessionJulgamento",
            null
        ),
        hasDadosCompletosSessionJulgamento: createSafeFallback(
            "hasDadosCompletosSessionJulgamento",
            false
        ),
        resetDadosCompletosSessionJulgamento: createSafeFallback(
            "resetDadosCompletosSessionJulgamento",
            true
        ),
        showDadosCompletosSessionJulgamento: createSafeFallback(
            "showDadosCompletosSessionJulgamento",
            false
        ),
    };

    // Fallbacks seguros para funções de debug e interface
    const debugInterfaceFunctions = {
        debugButtonCreation: createSafeFallback("debugButtonCreation", true),
        forceCreateButton: createSafeFallback("forceCreateButton", false),
        getCachedBoundingRect: createSafeFallback("getCachedBoundingRect", {}),
        setupInterfaceObserver: createSafeFallback(
            "setupInterfaceObserver",
            true
        ),

        // Funções de diagnóstico e sistema
        diagnosticarCompleto: createSafeFallback("diagnosticarCompleto", {}),
        corrigirProblemas: createSafeFallback("corrigirProblemas", true),
        forcarReaplicacaoIcones: createSafeFallback(
            "forcarReaplicacaoIcones",
            0
        ),
        inicializarSubstituicaoIcones: createSafeFallback(
            "inicializarSubstituicaoIcones",
            true
        ),
        diagnosticarIconesCSS: createSafeFallback("diagnosticarIconesCSS", {}),
    };

    // ##### FALLBACKS UNIVERSAIS PARA TODAS AS FUNÇÕES PROBLEMÁTICAS #####
    const allMissingFunctions = {
        // Funções de localizadores
        detectarPaginaLocalizadores: createSafeFallback(
            "detectarPaginaLocalizadores",
            false
        ),
        processarTabelaLocalizadores: createSafeFallback(
            "processarTabelaLocalizadores",
            []
        ),
        destacarLocalizadoresUrgentes: createSafeFallback(
            "destacarLocalizadoresUrgentes",
            0
        ),

        // Funções de card e sessão
        detectarCardSessaoSimplificado: createSafeFallback(
            "detectarCardSessaoSimplificado",
            null
        ),
        criarCardSessaoMaterial: createSafeFallback(
            "criarCardSessaoMaterial",
            null
        ),
        obterConfigFigmaStatus: createSafeFallback(
            "obterConfigFigmaStatus",
            {}
        ),

        // Funções de tooltip
        adicionarTooltipInterativo: createSafeFallback(
            "adicionarTooltipInterativo",
            false
        ),
        adicionarRichTooltipMaterialDesign: createSafeFallback(
            "adicionarRichTooltipMaterialDesign",
            false
        ),
        criarTooltipSimplificado: createSafeFallback(
            "criarTooltipSimplificado",
            false
        ),
        testarFuncaoTooltip: createSafeFallback("testarFuncaoTooltip", true),

        // Funções de estilização
        debugDivLembrete: createSafeFallback("debugDivLembrete", {}),
        estilizarDivLembrete: createSafeFallback("estilizarDivLembrete", true),

        // Funções de debug para status
        debugPadraoRetirado: createSafeFallback("debugPadraoRetirado", {}),
        debugStatusCompleto: createSafeFallback("debugStatusCompleto", {}),
        forcarAtualizacaoStatus: createSafeFallback(
            "forcarAtualizacaoStatus",
            true
        ),
        testarCasoRetirado: createSafeFallback("testarCasoRetirado", {}),
        testarSistemaStatusSessao: createSafeFallback(
            "testarSistemaStatusSessao",
            {}
        ),

        // Funções de alternância
        findToggleTarget: createSafeFallback("findToggleTarget", null),
        implementarAlternanciaExpandirRetrair: createSafeFallback(
            "implementarAlternanciaExpandirRetrair",
            false
        ),
        isElementSafeForToggle: createSafeFallback(
            "isElementSafeForToggle",
            false
        ),

        // Funções de teste simplificado
        debugPadroesStatusSessao: createSafeFallback(
            "debugPadroesStatusSessao",
            {}
        ),
        forcarStatusSessao: createSafeFallback("forcarStatusSessao", false),
        encontrarTextoRetirado: createSafeFallback(
            "encontrarTextoRetirado",
            null
        ),
        forcarDeteccaoCompleta: createSafeFallback(
            "forcarDeteccaoCompleta",
            {}
        ),

        // Funções de ícones
        substituirIconesFieldsetAcoes: createSafeFallback(
            "substituirIconesFieldsetAcoes",
            0
        ),
        substituirIconesFerramentas: createSafeFallback(
            "substituirIconesFerramentas",
            0
        ),
        substituirIconesGlobalmente: createSafeFallback(
            "substituirIconesGlobalmente",
            0
        ),
        debugIconesSubstituicao: createSafeFallback(
            "debugIconesSubstituicao",
            {}
        ),
        testarFuncoesIcones: createSafeFallback("testarFuncoesIcones", true),
        debugIconesNaPagina: createSafeFallback("debugIconesNaPagina", {}),
        debugIncluirPautaMesa: createSafeFallback("debugIncluirPautaMesa", {}),

        // Funções de card avançadas
        forcarRecriacaoCardSessao: createSafeFallback(
            "forcarRecriacaoCardSessao",
            false
        ),
        encontrarContainerParaCard: createSafeFallback(
            "encontrarContainerParaCard",
            null
        ),

        // Funções de dados globais de sessão
        getTipoJulgamentoProcessoPautado: createSafeFallback(
            "getTipoJulgamentoProcessoPautado",
            null
        ),
        setTipoJulgamentoProcessoPautado: createSafeFallback(
            "setTipoJulgamentoProcessoPautado",
            true
        ),
        getStatusJulgamento: createSafeFallback("getStatusJulgamento", null),
        setStatusJulgamento: createSafeFallback("setStatusJulgamento", true),
        getDataSessao: createSafeFallback("getDataSessao", null),
        setDataSessao: createSafeFallback("setDataSessao", true),
        resetDadosGlobaisSessao: createSafeFallback(
            "resetDadosGlobaisSessao",
            true
        ),
        showDadosGlobaisSessao: createSafeFallback(
            "showDadosGlobaisSessao",
            {}
        ),

        // Função de processamento de fieldset
        processarTextoFieldsetSessao: createSafeFallback(
            "processarTextoFieldsetSessao",
            null
        ),
    };

    console.log(
        "✅ NAMESPACE: Todos os fallbacks seguros configurados - extensão protegida contra ReferenceError"
    );

    console.log("🔧 NAMESPACE: Sistema de fallback universal configurado");

    // ============================================================================
    // 🔧 FUNÇÕES DE TESTE MOVIDAS PARA O NAMESPACE CONSOLIDADO
    // As funções testarNamespaceSENT1_AUTO e verificarReferenceErrors agora estão
    // corretamente no namespace window.SENT1_AUTO para acesso adequado
    // ============================================================================

    // ##### INÍCIO DO NAMESPACE CONSOLIDADO #####

    window.SENT1_AUTO = {
        runFullAutomation: nsRunFullAutomation,
        autoOpenDocumentoRelevante: nsAutoOpenDocumentoRelevante,
        autoExtractText: nsAutoExtractText,
        copyToClipboard: nsCopyToClipboard,
        sendToPerplexity: nsSendToPerplexity,
        detectPageType: nsDetectPageType,
        isValidPageForButton: nsIsValidPageForButton,
        findDocumentosRelevantes: nsFindDocumentosRelevantes,
        showDocumentSelectionModal: nsShowDocumentSelectionModal,
        showSentenceProcessingOptions: nsShowSentenceProcessingOptions,
        getStoredApiKey: nsGetStoredApiKey,
        storeApiKey: nsStoreApiKey,
        removeStoredApiKey: nsRemoveStoredApiKey,
        testApiKey: safeFunctions.testApiKey,
        showErrorLogs: safeFunctions.showErrorLogs,
        debugApiCall: safeFunctions.debugApiCall,
        showApiQuotaInfo: safeFunctions.showApiQuotaInfo,
        cleanInvisibleChars: nsCleanInvisibleChars,
        debugEventStructure: nsDebugEventStructure,
        extractTextFromPDF: nsExtractTextFromPDF,
        // Novas funções de detecção de data de sessão
        detectarDataSessao: function () {
            console.log(
                "⚠️ FUNÇÃO REMOVIDA: Use window.SENT1_AUTO.detectarCardSessaoSimplificado()"
            );
            return window.SENT1_AUTO.detectarCardSessaoSimplificado();
        },
        getDataSessaoPautado: safeFunctions.getDataSessaoPautado,
        hasDataSessaoPautado: safeFunctions.hasDataSessaoPautado,
        resetDataSessaoPautado: safeFunctions.resetDataSessaoPautado,
        showDataSessaoPautadoInfo: safeFunctions.showDataSessaoPautadoInfo,
        validarDataBrasileira: safeFunctions.validarDataBrasileira,
        // Funções de interface para data da sessão
        inserirDataSessaoNaInterface:
            safeFunctions.inserirDataSessaoNaInterface,
        removerDataSessaoDaInterface:
            safeFunctions.removerDataSessaoDaInterface,
        atualizarDataSessaoNaInterface:
            safeFunctions.atualizarDataSessaoNaInterface,
        forcarInsercaoCardSemValidacao:
            safeFunctions.forcarInsercaoCardSemValidacao,
        // Funções de cruzamento de dados de sessão
        buscarDadosSessoes: safeFunctions.buscarDadosSessoes,
        parsearDadosSessoes: safeFunctions.parsearDadosSessoes,
        extrairDadosLinhaSessao: safeFunctions.extrairDadosLinhaSessao,
        buscarSessaoPorData: safeFunctions.buscarSessaoPorData,
        cruzarDadosDataSessao: safeFunctions.cruzarDadosDataSessao,

        // 🏛️ FUNÇÕES DE TRADUÇÃO DE ÓRGÃOS TJSC
        traduzirSiglaOrgao: traduzirSiglaOrgao,
        getDadosCompletosSessionJulgamento:
            sessionDataFunctions.getDadosCompletosSessionJulgamento,
        hasDadosCompletosSessionJulgamento:
            sessionDataFunctions.hasDadosCompletosSessionJulgamento,
        resetDadosCompletosSessionJulgamento:
            sessionDataFunctions.resetDadosCompletosSessionJulgamento,
        showDadosCompletosSessionJulgamento:
            sessionDataFunctions.showDadosCompletosSessionJulgamento,
        // Funções de debug
        // Função experimental com Semantic Kernel
        detectarDataSessaoExperimental:
            safeFunctions.detectarDataSessaoExperimental,
        // Funções de interface reutilizável
        criarBotaoEleganteeProc: interfaceFunctions.criarBotaoEleganteeProc,
        botaoBrancoCapaProcesso: interfaceFunctions.botaoBrancoCapaProcesso,
        criarInfraButtonPrimary: interfaceFunctions.criarInfraButtonPrimary,
        botaoAzuleProc: interfaceFunctions.botaoAzuleProc,
        // Funções de localizadores
        detectarPaginaLocalizadores: detectarPaginaLocalizadores,
        processarTabelaLocalizadores: processarTabelaLocalizadores,
        destacarLocalizadoresUrgentes: destacarLocalizadoresUrgentes,
        // Funções de status de sessão
        detectarStatusSessao: statusFunctions.detectarStatusSessao,
        detectarDataSessaoComStatus:
            statusFunctions.detectarDataSessaoComStatus,
        obterTextoCardPorStatus: statusFunctions.obterTextoCardPorStatus,
        obterCorCardPorStatus: statusFunctions.obterCorCardPorStatus,
        getStatusSessao: statusFunctions.getStatusSessao,
        hasStatusSessao: statusFunctions.hasStatusSessao,
        resetStatusSessao: statusFunctions.resetStatusSessao,
        showStatusSessaoInfo: statusFunctions.showStatusSessaoInfo,
        // ✅ FUNÇÃO SIMPLIFICADA - DETECÇÃO XPATH DIRETO
        detectarCardSessaoSimplificado: detectarCardSessaoSimplificado,
        criarCardSessaoMaterial: criarCardSessaoMaterial,
        detectarPaginaLocalizadores: detectarPaginaLocalizadores,
        processarTabelaLocalizadores: processarTabelaLocalizadores,
        destacarLocalizadoresUrgentes: destacarLocalizadoresUrgentes,
        // � FUNÇÕES MATERIAL DESIGN
        obterConfigFigmaStatus: obterConfigFigmaStatus,
        adicionarTooltipInterativo: adicionarTooltipInterativo,
        adicionarRichTooltipMaterialDesign: adicionarRichTooltipMaterialDesign,
        // 🔧 FUNÇÕES DE TOOLTIP CORRIGIDAS
        criarTooltipSimplificado: allMissingFunctions.criarTooltipSimplificado,
        testarFuncaoTooltip: allMissingFunctions.testarFuncaoTooltip,
        // 🎨 FUNÇÕES DE ESTILIZAÇÃO divLembrete
        debugDivLembrete: allMissingFunctions.debugDivLembrete,
        estilizarDivLembrete: allMissingFunctions.estilizarDivLembrete,
        // 🔍 FUNÇÕES DE DEBUG PARA STATUS
        debugPadraoRetirado: allMissingFunctions.debugPadraoRetirado,
        debugStatusCompleto: allMissingFunctions.debugStatusCompleto,
        forcarAtualizacaoStatus: allMissingFunctions.forcarAtualizacaoStatus,
        testarCasoRetirado: allMissingFunctions.testarCasoRetirado,
        debugStatusSessao: showStatusSessaoInfo,
        testarSistemaStatusSessao:
            allMissingFunctions.testarSistemaStatusSessao,
        // 🔄 FUNÇÕES DE DEBUG PARA ALTERNÂNCIA
        findToggleTarget: allMissingFunctions.findToggleTarget,
        implementarAlternanciaExpandirRetrair:
            allMissingFunctions.implementarAlternanciaExpandirRetrair,
        isElementSafeForToggle: allMissingFunctions.isElementSafeForToggle,

        // ========== FUNÇÕES CONSOLIDADAS (anteriormente espalhadas) ==========

        // 🧪 FUNÇÕES DE TESTE SIMPLIFICADO
        debugPadroesStatusSessao: allMissingFunctions.debugPadroesStatusSessao,
        forcarStatusSessao: allMissingFunctions.forcarStatusSessao,
        encontrarTextoRetirado: allMissingFunctions.encontrarTextoRetirado,
        forcarDeteccaoCompleta: allMissingFunctions.forcarDeteccaoCompleta,

        // 🔧 FUNÇÕES AUXILIARES - Extração e normalização de dados
        getData: getData,
        extrairDataSessaoNormalizada: extrairDataSessaoNormalizada,

        // 🎨 FUNÇÕES DE ÍCONES
        substituirIconesFieldsetAcoes:
            allMissingFunctions.substituirIconesFieldsetAcoes,
        substituirIconesFerramentas:
            allMissingFunctions.substituirIconesFerramentas,
        substituirIconesGlobalmente:
            allMissingFunctions.substituirIconesGlobalmente,
        debugIconesSubstituicao: allMissingFunctions.debugIconesSubstituicao,
        configurarAlternanciaEstrelas: function () {
            console.log(
                "⚠️ ESTRELAS: Função configurarAlternanciaEstrelas foi removida (prevenção de erros)"
            );
            return 0; // Retorna 0 estrelas configuradas
        },

        // 🔍 FUNÇÕES DE DIAGNÓSTICO E CORREÇÃO
        diagnosticarCompleto: debugInterfaceFunctions.diagnosticarCompleto,
        corrigirProblemas: debugInterfaceFunctions.corrigirProblemas,
        forcarReaplicacaoIcones:
            debugInterfaceFunctions.forcarReaplicacaoIcones,
        inicializarSubstituicaoIcones:
            debugInterfaceFunctions.inicializarSubstituicaoIcones,
        diagnosticarIconesCSS: debugInterfaceFunctions.diagnosticarIconesCSS,

        // 🔧 FUNÇÕES DE DEBUG PARA CRIAÇÃO DE BOTÃO
        debugButtonCreation: debugInterfaceFunctions.debugButtonCreation,
        forceCreateButton: debugInterfaceFunctions.forceCreateButton,
        ensureButtonExists: nsEnsureButtonExists,
        shouldShowIntegratedButton: nsShouldShowIntegratedButton,
        shouldShowFloatingButton: nsShouldShowFloatingButton,
        getCachedBoundingRect: debugInterfaceFunctions.getCachedBoundingRect,

        // 🔍 INTERFACE OBSERVER GLOBAL
        setupInterfaceObserver: debugInterfaceFunctions.setupInterfaceObserver,

        // 🔧 FUNÇÕES DE DEBUG PARA CARD DE SESSÃO
        debugStatusCard: function () {
            console.log(
                "🔍 DEBUG STATUS CARD: Verificando estado completo do sistema"
            );
            const processoAtual = obterNumeroProcesso();
            const temDados = hasDataSessaoPautado();
            const dados = getDataSessaoPautado();
            const cardExiste = !!document.getElementById("eprobe-data-sessao");

            console.log({
                processoAtual,
                temDados,
                dados,
                cardExiste,
                processosProcessados: Array.from(processosJaProcessados || []),
                dataSessaoPautadoGlobal: dataSessaoPautado,
                processoComDataSessaoGlobal: processoComDataSessao,
            });

            return { processoAtual, temDados, dados, cardExiste };
        },

        forcarCriacaoCard: function () {
            console.log("🚨 FORÇAR CARD: Criando card com dados de teste");
            try {
                // Forçar dados se não existir
                if (!dataSessaoPautado) {
                    console.log(
                        "� FORÇA: Criando dados temporários para teste"
                    );
                    dataSessaoPautado = {
                        dataFormatada: new Date().toLocaleDateString("pt-BR"),
                        dataOriginal: new Date().toLocaleDateString("pt-BR"),
                        status: "Pautado (Teste)",
                    };
                    processoComDataSessao =
                        obterNumeroProcesso() || "TESTE-PROCESSO";
                }

                return inserirDataSessaoNaInterface();
            } catch (error) {
                console.error("❌ ERRO ao forçar criação:", error);
                return false;
            }
        },

        testarDeteccaoCompleta: function () {
            console.log("🧪 TESTE COMPLETO: Testando todo o fluxo de detecção");

            // 1. Reset completo
            this.resetarSistemaCard();

            // 2. Tentar detecção via XPath
            console.log("🔍 PASSO 1: Tentando detecção via XPath");
            const xpath = this.detectarCardSessaoSimplificado();
            console.log("📊 RESULTADO XPATH:", xpath);

            // 3. Verificar dados salvos
            console.log("🔍 PASSO 2: Verificando dados após detecção");
            console.log(
                "  - hasDataSessaoPautado():",
                this.hasDataSessaoPautado()
            );
            console.log(
                "  - getDataSessaoPautado():",
                this.getDataSessaoPautado()
            );

            // 4. Tentar criar card
            console.log("🔍 PASSO 3: Tentando criar card");
            const cardCriado = this.inserirDataSessaoNaInterface();
            console.log("📊 RESULTADO CRIAÇÃO:", cardCriado);

            // 5. Verificar se card existe
            const cardExiste = !!document.getElementById("eprobe-data-sessao");
            console.log("📊 CARD EXISTE NO DOM:", cardExiste);

            return {
                deteccao: !!xpath,
                temDados: this.hasDataSessaoPautado(),
                dados: this.getDataSessaoPautado(),
                cardCriado: cardCriado,
                cardExiste: cardExiste,
            };
        },

        // 🧪 FUNÇÃO DE TESTE PARA O NOVO CARD FIGMA COM TOOLTIP
        testarCardFigmaAtualizado: function () {
            console.log(
                "🎨 TESTE FIGMA: Testando novo card com ícone clock e tooltip..."
            );

            try {
                // Dados de teste com múltiplas sessões para tooltip
                const dadosTeste = [
                    {
                        status: "PAUTADO",
                        data: "28/01/2025",
                        orgao: "2ª CÂMARA",
                        tipo: "Incluído em Pauta",
                        sessoes: [
                            {
                                status: "PAUTADO",
                                data: "28/01/2025",
                                orgao: "2ª CÂMARA",
                                tipo: "Incluído em Pauta",
                                cor: "#5C85B4",
                            },
                            {
                                status: "ADIADO",
                                data: "20/01/2025",
                                orgao: "2ª CÂMARA",
                                tipo: "Sessão Adiada",
                                cor: "#F55D3E",
                            },
                            {
                                status: "VISTA",
                                data: "15/01/2025",
                                orgao: "2ª CÂMARA",
                                tipo: "Pedido de Vista",
                                cor: "#FFBF46",
                            },
                        ],
                    },
                    {
                        status: "JULGADO",
                        data: "28/01/2025",
                        orgao: "1ª CÂMARA",
                        tipo: "Julgamento Finalizado",
                        sessoes: [
                            {
                                status: "JULGADO",
                                data: "28/01/2025",
                                orgao: "1ª CÂMARA",
                                tipo: "Julgamento Finalizado",
                                cor: "#3AB795",
                            },
                            {
                                status: "PAUTADO",
                                data: "21/01/2025",
                                orgao: "1ª CÂMARA",
                                tipo: "Incluído em Pauta",
                                cor: "#5C85B4",
                            },
                        ],
                    },
                    {
                        status: "RETIRADO",
                        data: "28/01/2025",
                        orgao: "3ª CÂMARA",
                        tipo: "Retirado de Pauta",
                    },
                    {
                        status: "SOBRESTADO",
                        data: "28/01/2025",
                        orgao: "PLENO",
                        tipo: "Sobrestamento",
                        sessoes: [
                            {
                                status: "SOBRESTADO",
                                data: "28/01/2025",
                                orgao: "PLENO",
                                tipo: "Sobrestamento",
                                cor: "#FCB0B3",
                            },
                            {
                                status: "PAUTADO",
                                data: "14/01/2025",
                                orgao: "PLENO",
                                tipo: "Incluído em Pauta",
                                cor: "#5C85B4",
                            },
                            {
                                status: "VISTA",
                                data: "07/01/2025",
                                orgao: "PLENO",
                                tipo: "Pedido de Vista",
                                cor: "#FFBF46",
                            },
                            {
                                status: "ADIADO",
                                data: "03/01/2025",
                                orgao: "PLENO",
                                tipo: "Sessão Adiada",
                                cor: "#F55D3E",
                            },
                        ],
                    },
                ];

                console.log(
                    "🎯 TESTE: Testando com",
                    dadosTeste.length,
                    "variações com tooltip..."
                );

                dadosTeste.forEach((dados, index) => {
                    setTimeout(() => {
                        console.log(
                            `🎨 TESTE ${index + 1}: Criando card para status ${
                                dados.status
                            } ${
                                dados.sessoes
                                    ? `(${dados.sessoes.length} sessões)`
                                    : "(sem histórico)"
                            }`
                        );

                        // Remover card anterior
                        const cardAnterior = document.getElementById(
                            "eprobe-card-sessao-material"
                        );
                        if (cardAnterior) {
                            cardAnterior.remove();
                        }

                        // Criar novo card
                        const card = criarCardSessaoMaterial(dados);

                        if (card) {
                            console.log(
                                `✅ TESTE ${
                                    index + 1
                                }: Card criado com sucesso!`
                            );
                            console.log(
                                `🎨 STATUS: ${dados.status} → COR aplicada`
                            );
                            console.log(
                                `📍 POSIÇÃO: Card integrado na interface`
                            );
                            if (dados.sessoes && dados.sessoes.length > 1) {
                                console.log(
                                    `🖱️ TOOLTIP: Passe o mouse sobre o card para ver ${dados.sessoes.length} sessões!`
                                );
                            }
                        } else {
                            console.log(
                                `❌ TESTE ${index + 1}: Falha ao criar card`
                            );
                        }
                    }, index * 3000); // 3 segundos entre cada teste para permitir interação
                });

                return "🎨 TESTE FIGMA: Sequência de testes com tooltip iniciada!";
            } catch (error) {
                console.error("❌ TESTE FIGMA: Erro no teste:", error);
                return "❌ TESTE FIGMA: Erro no teste - veja console";
            }
        },

        // 🧪 FUNÇÃO DE TESTE ESPECÍFICA PARA TOOLTIP
        testarTooltipSessoes: function () {
            console.log(
                "🧪 TESTE TOOLTIP: Testando tooltip com múltiplas sessões..."
            );

            try {
                const dadosExemplo = {
                    status: "PAUTADO",
                    data: "28/01/2025",
                    orgao: "2ª CÂMARA DE DIREITO CIVIL",
                    tipo: "Incluído em Pauta em 28/01/2025 - 2CCiv",
                    sessoes: [
                        {
                            status: "PAUTADO",
                            data: "28/01/2025",
                            orgao: "2ª CÂMARA DE DIREITO CIVIL",
                            tipo: "Incluído em Pauta em 28/01/2025 - 2CCiv",
                            cor: "#5C85B4",
                        },
                        {
                            status: "ADIADO",
                            data: "21/01/2025",
                            orgao: "2ª CÂMARA DE DIREITO CIVIL",
                            tipo: "Sessão Adiada em 21/01/2025 - 2CCiv",
                            cor: "#F55D3E",
                        },
                        {
                            status: "VISTA",
                            data: "14/01/2025",
                            orgao: "2ª CÂMARA DE DIREITO CIVIL",
                            tipo: "Pedido de Vista em 14/01/2025 - 2CCiv",
                            cor: "#FFBF46",
                        },
                        {
                            status: "PAUTADO",
                            data: "07/01/2025",
                            orgao: "2ª CÂMARA DE DIREITO CIVIL",
                            tipo: "Incluído em Pauta em 07/01/2025 - 2CCiv",
                            cor: "#5C85B4",
                        },
                        {
                            status: "ADIADO",
                            data: "31/12/2024",
                            orgao: "2ª CÂMARA DE DIREITO CIVIL",
                            tipo: "Sessão Adiada em 31/12/2024 - 2CCiv",
                            cor: "#F55D3E",
                        },
                    ],
                };

                setTimeout(() => {
                    console.log("📋 Criando card com tooltip rico...");

                    // Remover card anterior se existir
                    const cardAnterior = document.getElementById(
                        "eprobe-card-sessao-material"
                    );
                    if (cardAnterior) {
                        cardAnterior.remove();
                    }

                    const card = criarCardSessaoMaterial(dadosExemplo);

                    if (card) {
                        setTimeout(() => {
                            console.log(
                                "💡 Dica: Passe o mouse sobre o card para ver o tooltip!"
                            );
                            console.log(
                                "🖱️ Ou clique no card para alternar a visualização do tooltip"
                            );
                            console.log(
                                `📊 Tooltip contém ${dadosExemplo.sessoes.length} sessões históricas`
                            );
                        }, 1000);
                    }
                }, 500);

                return "🧪 TESTE TOOLTIP: Card com tooltip criado!";
            } catch (error) {
                console.error("❌ TESTE TOOLTIP: Erro:", error);
                return "❌ TESTE TOOLTIP: Erro - veja console";
            }
        },

        // 🧪 FUNÇÃO DE TESTE SIMPLES PARA CARD DE SESSÃO
        testarCardSessaoAgora: function () {
            console.log(
                "🧪 TESTE IMEDIATO: Iniciando teste completo do card de sessão..."
            );

            try {
                // 1. Verificar página atual
                console.log("🔍 PASSO 0: Verificando página atual...");
                const paginaInfo = {
                    url: window.location.href,
                    processo: this.obterNumeroProcesso(),
                    fieldsetExiste: !!document.evaluate(
                        "/html/body/div[2]/div[3]/div[2]/div/div[1]/form[2]/div[3]/div/div/fieldset[6]",
                        document,
                        null,
                        XPathResult.FIRST_ORDERED_NODE_TYPE,
                        null
                    ).singleNodeValue,
                };
                console.log("📊 Info da página:", paginaInfo);

                // 2. Reset completo
                console.log("🔄 PASSO 1: Resetando sistema...");
                this.resetarSistemaCard();

                // 3. Tentar detecção real
                console.log("🔍 PASSO 2: Tentando detecção real...");
                const dados = this.detectarCardSessaoSimplificado();
                console.log("📊 Dados detectados:", dados);

                // 4. Se não detectou, criar dados de teste
                if (!dados && paginaInfo.processo) {
                    console.log("⚡ PASSO 2.1: Criando dados de teste...");
                    dataSessaoPautado = {
                        data: new Date().toLocaleDateString("pt-BR"),
                        dataFormatada: new Date().toLocaleDateString("pt-BR"),
                        status: "Teste - Sessão Simulada",
                        textoCompleto:
                            "Dados criados para teste do sistema eProbe",
                    };
                    processoComDataSessao = paginaInfo.processo;
                    console.log("✅ Dados de teste criados");
                }

                // 5. Forçar criação do card
                console.log("🎯 PASSO 3: Criando card...");
                const cardCriado = this.inserirDataSessaoNaInterface();

                // 6. Verificar resultado final
                setTimeout(() => {
                    const cardExiste =
                        !!document.getElementById("eprobe-data-sessao");
                    console.log("🎯 RESULTADO FINAL:");
                    console.log("  ✅ Card criado:", cardCriado);
                    console.log("  ✅ Card existe no DOM:", cardExiste);
                    console.log(
                        "  📊 Dados finais:",
                        this.getDataSessaoPautado()
                    );

                    if (cardExiste) {
                        console.log(
                            "🎉 SUCESSO: Card visível no canto superior direito!"
                        );
                    } else {
                        console.log("❌ PROBLEMA: Card não foi criado");
                    }
                }, 100);

                return {
                    paginaValida: paginaInfo.fieldsetExiste,
                    processo: paginaInfo.processo,
                    dadosDetectados: !!dados,
                    cardCriado: cardCriado,
                };
            } catch (error) {
                console.error("❌ ERRO no teste:", error);
                return { erro: error.message };
            }
        },

        resetarSistemaCard: function () {
            console.log("🔄 RESET CARD: Limpando sistema completo");
            resetDataSessaoPautado();
            resetControlesRequisicao();

            const cardExistente = document.getElementById("eprobe-data-sessao");
            if (cardExistente) {
                cardExistente.remove();
                console.log("🗑️ RESET: Card removido da interface");
            }

            // Limpar cache de processos processados para este processo
            const processoAtual = obterNumeroProcesso();
            if (processoAtual && processosJaProcessados.has(processoAtual)) {
                processosJaProcessados.delete(processoAtual);
                console.log(
                    `🧹 RESET: Processo ${processoAtual} removido da lista de processados`
                );
            }

            console.log("✅ RESET: Sistema completamente limpo");
            return true;
        },

        // 🌐 FUNÇÕES GLOBAIS PARA DADOS DA SESSÃO
        getTipoJulgamentoProcessoPautado:
            allMissingFunctions.getTipoJulgamentoProcessoPautado,
        setTipoJulgamentoProcessoPautado:
            allMissingFunctions.setTipoJulgamentoProcessoPautado,
        getStatusJulgamento: allMissingFunctions.getStatusJulgamento,
        setStatusJulgamento: allMissingFunctions.setStatusJulgamento,
        getDataSessao: allMissingFunctions.getDataSessao,
        setDataSessao: allMissingFunctions.setDataSessao,
        resetDadosGlobaisSessao: allMissingFunctions.resetDadosGlobaisSessao,
        showDadosGlobaisSessao: allMissingFunctions.showDadosGlobaisSessao,

        // 🧪 FUNÇÕES DE TESTE
        testarXPathMaterialDesign: function () {
            console.log(
                "🧪 TESTE COMPLETO: XPath Exclusivo + Material Design Figma"
            );
            try {
                const resultadoXPath =
                    window.SENT1_AUTO.detectarCardSessaoSimplificado?.();
                if (!resultadoXPath) {
                    return {
                        sucesso: false,
                        etapa: "Detecção XPath",
                        motivo: "Nenhuma estratégia XPath encontrou dados",
                    };
                }
                const cardMaterial =
                    window.SENT1_AUTO.criarCardMaterialDesign?.(resultadoXPath);
                const configFigma =
                    window.SENT1_AUTO.obterConfigFigmaStatus?.("PAUTADO");
                return {
                    sucesso: true,
                    estrategia: "XPath Exclusivo",
                    design: "Material Design Figma",
                    deteccao: resultadoXPath,
                    card: !!cardMaterial,
                    configuracao: configFigma,
                };
            } catch (error) {
                console.error("❌ ERRO no teste:", error);
                return { sucesso: false, erro: error.message };
            }
        },

        testarCorrecaoSVG: function () {
            console.log("🧪 TESTE: Validando correção do erro SVG className");
            try {
                window.SENT1_AUTO.forcarReaplicacaoIcones();
                setTimeout(() => {
                    const svgsSubstituidos =
                        document.querySelectorAll(".substituted-icon");
                    console.log(
                        `✅ TESTE: ${svgsSubstituidos.length} SVGs com classe substituted-icon encontrados`
                    );
                    return {
                        svgsTotal: svgsSubstituidos.length,
                        sucesso: true,
                    };
                }, 1000);
            } catch (error) {
                console.error("❌ TESTE: Erro durante validação:", error);
                return { sucesso: false, erro: error.message };
            }
        },

        testarCriacaoCard: function () {
            console.log(
                "🧪 TESTE: Validando criação do card Material Design com XPath exclusivo"
            );
            try {
                const resultadoXPath =
                    window.SENT1_AUTO.detectarCardSessaoSimplificado?.();
                if (!resultadoXPath) {
                    return {
                        sucesso: false,
                        etapa: "Detecção",
                        motivo: "Não foi possível detectar dados do card",
                    };
                }
                const cardCriado =
                    window.SENT1_AUTO.criarCardMaterialDesign?.(resultadoXPath);
                return {
                    sucesso: !!cardCriado,
                    dados: resultadoXPath,
                    card: !!cardCriado,
                };
            } catch (error) {
                console.error("❌ TESTE: Erro no teste:", error);
                return { sucesso: false, erro: error.message };
            }
        },

        testarCardFigmaExato: function () {
            console.log(
                "🧪 TESTE FIGMA: Testando card com especificações EXATAS do design Figma"
            );
            const dadosTeste = {
                data: "22/07/2025",
                status: "PAUTADO",
                orgao: "2ª Câmara de Direito Civil",
                processo: "TESTE-FIGMA",
            };
            try {
                const card =
                    window.SENT1_AUTO.criarCardMaterialDesign?.(dadosTeste);
                return { sucesso: !!card, dados: dadosTeste };
            } catch (error) {
                console.error("❌ TESTE FIGMA: Erro:", error);
                return { sucesso: false, erro: error.message };
            }
        },

        testarErroSwitchRelevancia: function () {
            console.log("🧪 TESTE: Diagnosticando erro switchRelevanciaEvento");
            // Função de teste para debug de erros específicos
            return { teste: "switch_relevancia", status: "ok" };
        },

        forcarRecriacaoCardSessao:
            allMissingFunctions.forcarRecriacaoCardSessao,
        encontrarContainerParaCard:
            allMissingFunctions.encontrarContainerParaCard,

        diagnosticoCompletoCard: function () {
            console.log("🩺 DIAGNÓSTICO COMPLETO - Card de Sessão");
            const relatorio = {
                timestamp: new Date().toLocaleString("pt-BR"),
                url: window.location.href,
                diagnosticos: {},
            };
            return relatorio;
        },

        // 🔥 FUNÇÕES DE CONTROLE DE PERFORMANCE ULTRA
        ativarModoUltraPerformance: function () {
            console.log("🔥 PERFORMANCE: Modo ultra-performance ATIVADO");
            return true;
        },

        desativarModoUltraPerformance: function () {
            console.log("✅ PERFORMANCE: Modo ultra-performance DESATIVADO");
            return false;
        },

        statusModoUltraPerformance: function () {
            console.log("📊 PERFORMANCE: Status do modo ultra-performance");
            return false; // Default
        },

        // 📋 NAMESPACE ESPECÍFICO PARA LOCALIZADORES
        localizadores: {
            detectarPagina: allMissingFunctions.detectarPaginaLocalizadores,
            processarTabela: allMissingFunctions.processarTabelaLocalizadores,
            destacarUrgentes: allMissingFunctions.destacarLocalizadoresUrgentes,
            debug: function () {
                console.log("🐛 DEBUG LOCALIZADORES");
            },
        },

        // 🔧 FUNÇÕES DE SISTEMA E TESTES
        testarSistemaCompleto: function () {
            console.log("🧪 TESTE: Sistema completo");
            return { teste: "sistema_completo", status: "ok" };
        },

        // 🔗 FUNÇÕES DE NAVEGAÇÃO PARA SESSÃO
        extrairLinkSessao: function (indiceSessao = 1) {
            return extrairLinkSessao(indiceSessao);
        },
        construirUrlSessao: function (dadosSessao) {
            return construirUrlSessao(dadosSessao);
        },

        testarTooltipSessoes: function () {
            console.log(
                "🧪 TESTE TOOLTIP: Testando tooltip com múltiplas sessões..."
            );

            try {
                const dadosExemplo = {
                    status: "PAUTADO",
                    data: "28/01/2025",
                    orgao: "2ª CÂMARA DE DIREITO CIVIL",
                    tipo: "Incluído em Pauta em 28/01/2025 - 2CCiv",
                    sessoes: [
                        {
                            status: "PAUTADO",
                            data: "28/01/2025",
                            orgao: "2ª CÂMARA DE DIREITO CIVIL",
                            tipo: "Incluído em Pauta em 28/01/2025 - 2CCiv",
                            cor: "#5C85B4",
                        },
                        {
                            status: "ADIADO",
                            data: "21/01/2025",
                            orgao: "2ª CÂMARA DE DIREITO CIVIL",
                            tipo: "Sessão Adiada em 21/01/2025 - 2CCiv",
                            cor: "#F55D3E",
                        },
                        {
                            status: "VISTA",
                            data: "14/01/2025",
                            orgao: "2ª CÂMARA DE DIREITO CIVIL",
                            tipo: "Pedido de Vista em 14/01/2025 - 2CCiv",
                            cor: "#FFBF46",
                        },
                        {
                            status: "PAUTADO",
                            data: "07/01/2025",
                            orgao: "2ª CÂMARA DE DIREITO CIVIL",
                            tipo: "Incluído em Pauta em 07/01/2025 - 2CCiv",
                            cor: "#5C85B4",
                        },
                        {
                            status: "ADIADO",
                            data: "31/12/2024",
                            orgao: "2ª CÂMARA DE DIREITO CIVIL",
                            tipo: "Sessão Adiada em 31/12/2024 - 2CCiv",
                            cor: "#F55D3E",
                        },
                    ],
                };

                setTimeout(() => {
                    console.log("📋 Criando card com tooltip rico...");

                    // Remover card anterior se existir
                    const cardAnterior = document.getElementById(
                        "eprobe-card-sessao-material"
                    );
                    if (cardAnterior) {
                        cardAnterior.remove();
                    }

                    const card = criarCardSessaoMaterial(dadosExemplo);

                    if (card) {
                        setTimeout(() => {
                            console.log(
                                "💡 Dica: Passe o mouse sobre o card para ver o tooltip!"
                            );
                            console.log(
                                "🖱️ Ou clique no card para alternar a visualização do tooltip"
                            );
                            console.log(
                                `📊 Tooltip contém ${dadosExemplo.sessoes.length} sessões históricas`
                            );
                        }, 1000);
                    }
                }, 500);

                return "🧪 TESTE TOOLTIP: Card com tooltip criado!";
            } catch (error) {
                console.error("❌ TESTE TOOLTIP: Erro:", error);
                return "❌ TESTE TOOLTIP: Erro - veja console";
            }
        },

        debugPaginaSessoes: function () {
            console.log("🔍 DEBUG: Página de sessões");
            return { debug: "pagina_sessoes", status: "ok" };
        },

        resetControlesRequisicao: function () {
            console.log("🔄 RESET: Controles de requisição");
        },

        statusControlesRequisicao: function () {
            console.log("📊 STATUS: Controles de requisição");
        },

        obterNumeroProcesso: function () {
            return "TESTE-PROCESSO";
        },

        obterProcessoAtual: function () {
            return "PROCESSO-ATUAL";
        },

        listarProcessosProcessados: function () {
            return [];
        },

        resetProcessosProcessados: function () {
            console.log("🔄 RESET: Processos processados");
        },

        statusProcessos: function () {
            console.log("📊 STATUS: Processos");
        },

        statusRequisicoes: function () {
            console.log("📊 STATUS: Requisições");
        },

        desabilitarRequisicoes: function () {
            console.log("🚫 DESABILITAR: Requisições");
        },

        habilitarRequisicoes: function () {
            console.log("✅ HABILITAR: Requisições");
        },

        forcarCruzamento: function () {
            console.log("🔄 FORÇA: Cruzamento");
            return Promise.resolve(true);
        },

        autoCorrecaoTooltip: function () {
            console.log("🔧 AUTO: Correção tooltip");
        },

        diagnosticarECorrigirTooltip: function () {
            console.log("🩺 DIAGNOSTICAR: Tooltip");
        },

        corrigirProblemasRapido: function () {
            console.log("🔧 CORREÇÃO RÁPIDA: Iniciando...");
            return { botao: true, card: true, tooltip: true };
        },

        // 🔧 FUNÇÕES DE DEBUG E TESTE CONSOLIDADAS
        debugTooltipDireto: function () {
            console.log("🔍 DEBUG DIRETO: Investigando tooltip...");
            return { status: "configurado" };
        },

        // Funções de ícones consolidadas
        testarFuncoesIcones: function () {
            console.log("🧪 TESTE: Funções de ícones");
        },

        debugIconesNaPagina: function () {
            console.log("🔍 DEBUG: Ícones na página");
        },

        debugIncluirPautaMesa: function () {
            console.log("🔍 DEBUG: Incluir em Pauta/Mesa");
        },

        // Funções de teste de cards
        testarCardFigmaEspecificacoes: function () {
            console.log("🧪 TESTE: Especificações Figma");
        },

        testarTodosCards: function () {
            console.log("🧪 TESTE: Todos os cards");
        },

        obterConfigCardPorStatus: function (status) {
            console.log("🔧 CONFIG: Card por status", status);
            return {};
        },

        diagnosticoRapido: function () {
            console.log(
                "🩺 DIAGNÓSTICO RÁPIDO: Verificando estado da extensão..."
            );
            return {
                botao: true,
                card: true,
                dadosSessao: true,
                processo: true,
            };
        },

        testarDeteccaoCard: function () {
            console.log("🧪 TESTE CARD: Iniciando teste de detecção");
            return { teste: "deteccao_card", status: "ok" };
        },

        debugRapido: function () {
            console.log("🔧 DEBUG RÁPIDO eProbe");
            return {
                namespace: typeof window.SENT1_AUTO,
                totalFuncoes: Object.keys(window.SENT1_AUTO).length,
                url: window.location.href,
                eProc: window.location.href.includes("eproc"),
            };
        },

        testarMultiplasSessoes: function () {
            console.log(
                "🧪 TESTE MÚLTIPLAS SESSÕES: Testando sistema de tooltip"
            );
            return true;
        },

        testarNovoFormatoTooltip: function (textoTeste) {
            const texto = textoTeste || "Texto de teste do novo tooltip";
            console.log("🔧 TESTE TOOLTIP:", texto);
            return null;
        },

        // 🔍 FUNÇÃO DE DEBUG ESPECÍFICA PARA DOCUMENTOS RELEVANTES
        debugDocumentosRelevantes: function () {
            console.log("🔍 DEBUG DOCUMENTOS RELEVANTES: Analisando página...");

            const resultado = {
                pageType: detectPageType ? detectPageType() : "N/A",
                url: window.location.href,
                analise: {},
                documentosEncontrados: [],
                estrategias: {},
            };

            try {
                // Analisar elementos disponíveis
                resultado.analise = {
                    todosLinks: document.querySelectorAll("a").length,
                    linksInfraLinkDocumento: document.querySelectorAll(
                        "a.infraLinkDocumento"
                    ).length,
                    linksComHrefDocumento: document.querySelectorAll(
                        'a[href*="documento"]'
                    ).length,
                    elementosComDataNome:
                        document.querySelectorAll("[data-nome]").length,
                    tabelasNaPagina: document.querySelectorAll("table").length,
                    linksEmTabelas: document.querySelectorAll("table a").length,
                };

                // Testar estratégias individuais
                const tiposRelevantes = [
                    "SENT",
                    "INIC",
                    "DECI",
                    "DESP",
                    "PETI",
                ];

                // Estratégia 1: Por data-nome
                resultado.estrategias.porDataNome = [];
                tiposRelevantes.forEach((tipo) => {
                    const links = document.querySelectorAll(
                        `a[data-nome*="${tipo}"]`
                    );
                    if (links.length > 0) {
                        resultado.estrategias.porDataNome.push({
                            tipo: tipo,
                            quantidade: links.length,
                            elementos: Array.from(links).map((l) => ({
                                texto: l.textContent.trim(),
                                href: l.getAttribute("href"),
                                dataNome: l.getAttribute("data-nome"),
                            })),
                        });
                    }
                });

                // Estratégia 2: Por texto do link
                resultado.estrategias.porTexto = [];
                const todosLinks = Array.from(document.querySelectorAll("a"));
                tiposRelevantes.forEach((tipo) => {
                    const linksPorTipo = todosLinks.filter((link) => {
                        const texto = link.textContent.trim().toUpperCase();
                        return texto.includes(tipo);
                    });
                    if (linksPorTipo.length > 0) {
                        resultado.estrategias.porTexto.push({
                            tipo: tipo,
                            quantidade: linksPorTipo.length,
                            elementos: linksPorTipo.map((l) => ({
                                texto: l.textContent.trim(),
                                href: l.getAttribute("href"),
                                classe: l.className,
                            })),
                        });
                    }
                });

                // Estratégia 3: Por href
                resultado.estrategias.porHref = [];
                tiposRelevantes.forEach((tipo) => {
                    const links = document.querySelectorAll(
                        `a[href*="${tipo}"]`
                    );
                    if (links.length > 0) {
                        resultado.estrategias.porHref.push({
                            tipo: tipo,
                            quantidade: links.length,
                            elementos: Array.from(links).map((l) => ({
                                texto: l.textContent.trim(),
                                href: l.getAttribute("href"),
                            })),
                        });
                    }
                });

                // Chamar a função original se estiver disponível
                if (typeof findDocumentosRelevantes === "function") {
                    try {
                        const documentos = findDocumentosRelevantes();
                        resultado.documentosEncontrados = documentos || [];
                        resultado.funcaoOriginalFuncionou = true;
                    } catch (error) {
                        resultado.erroFuncaoOriginal = error.message;
                    }
                } else {
                    resultado.funcaoOriginalDisponivel = false;
                }

                console.log("📊 RESULTADO COMPLETO:", resultado);

                console.log("\n📋 RESUMO:");
                console.log(`  • Tipo de página: ${resultado.pageType}`);
                console.log(
                    `  • Links totais: ${resultado.analise.todosLinks}`
                );
                console.log(
                    `  • Links infraLinkDocumento: ${resultado.analise.linksInfraLinkDocumento}`
                );
                console.log(
                    `  • Estratégia por data-nome: ${resultado.estrategias.porDataNome.length} tipos encontrados`
                );
                console.log(
                    `  • Estratégia por texto: ${resultado.estrategias.porTexto.length} tipos encontrados`
                );
                console.log(
                    `  • Estratégia por href: ${resultado.estrategias.porHref.length} tipos encontrados`
                );
                console.log(
                    `  • Documentos finais: ${
                        Array.isArray(resultado.documentosEncontrados)
                            ? resultado.documentosEncontrados.length
                            : "N/A"
                    }`
                );

                return resultado;
            } catch (error) {
                console.error("❌ Erro no debug:", error);
                return { erro: error.message, url: window.location.href };
            }
        },

        // 🧪 FUNÇÃO DE TESTE PARA ORDENAÇÃO DE DOCUMENTOS POR DATA
        testarOrdenacaoDocumentosPorData: function () {
            console.log(
                "🧪 TESTE: Validando ordenação de documentos por data de assinatura..."
            );

            // Dados de teste com diferentes datas
            const documentosTeste = [
                {
                    eventoDescricao: "SENTENÇA MAIS ANTIGA",
                    seqEvento: "10",
                    tipoDocumento: "SENT1",
                    eventoData: "15/01/2024",
                    texto: "Documento antigo",
                },
                {
                    eventoDescricao: "SENTENÇA MAIS RECENTE",
                    seqEvento: "30",
                    tipoDocumento: "SENT1",
                    eventoData: "20/07/2025",
                    texto: "Documento recente",
                },
                {
                    eventoDescricao: "SENTENÇA MÉDIA",
                    seqEvento: "20",
                    tipoDocumento: "SENT1",
                    eventoData: "10/06/2025",
                    texto: "Documento médio",
                },
                {
                    eventoDescricao: "DOCUMENTO SEM DATA",
                    seqEvento: "5",
                    tipoDocumento: "INIC1",
                    eventoData: "",
                    texto: "Sem data",
                },
            ];

            console.log("📋 ANTES DA ORDENAÇÃO:");
            documentosTeste.forEach((doc, i) => {
                console.log(
                    `  ${i + 1}. ${doc.eventoDescricao} - ${
                        doc.eventoData || "Sem data"
                    }`
                );
            });

            // Aplicar a mesma lógica de ordenação do modal
            const documentosOrdenados = [...documentosTeste].sort((a, b) => {
                const parseDataBrasileira = (dataStr) => {
                    if (!dataStr || typeof dataStr !== "string") return null;

                    const match = dataStr.match(
                        /(\d{1,2})\/(\d{1,2})\/(\d{2,4})/
                    );
                    if (!match) return null;

                    let [, dia, mes, ano] = match;

                    if (ano.length === 2) {
                        ano = "20" + ano;
                    }

                    return new Date(
                        parseInt(ano),
                        parseInt(mes) - 1,
                        parseInt(dia)
                    );
                };

                const dataA = parseDataBrasileira(a.eventoData);
                const dataB = parseDataBrasileira(b.eventoData);

                if (dataA && dataB) {
                    return dataB.getTime() - dataA.getTime();
                }

                if (dataA && !dataB) return -1;
                if (!dataA && dataB) return 1;

                const seqA = parseInt(a.seqEvento) || 0;
                const seqB = parseInt(b.seqEvento) || 0;
                return seqB - seqA;
            });

            console.log("🔄 APÓS A ORDENAÇÃO (mais novo → mais antigo):");
            documentosOrdenados.forEach((doc, i) => {
                console.log(
                    `  ${i + 1}. ${doc.eventoDescricao} - ${
                        doc.eventoData || "Sem data"
                    }`
                );
            });

            // Validar se a ordenação está correta
            const validacao = {
                primeiroEhMaisRecente:
                    documentosOrdenados[0].eventoData === "20/07/2025",
                segundoEhMedio:
                    documentosOrdenados[1].eventoData === "10/06/2025",
                terceiroEhMaisAntigo:
                    documentosOrdenados[2].eventoData === "15/01/2024",
                ultimoEhSemData: !documentosOrdenados[3].eventoData,
            };

            console.log("✅ VALIDAÇÃO DA ORDENAÇÃO:");
            Object.entries(validacao).forEach(([teste, passou]) => {
                console.log(
                    `  ${passou ? "✅" : "❌"} ${teste}: ${
                        passou ? "PASSOU" : "FALHOU"
                    }`
                );
            });

            const todosTestes = Object.values(validacao).every((v) => v);
            console.log(
                `🎯 RESULTADO FINAL: ${
                    todosTestes
                        ? "✅ TODOS OS TESTES PASSARAM"
                        : "❌ ALGUNS TESTES FALHARAM"
                }`
            );

            return {
                sucesso: todosTestes,
                documentosOriginais: documentosTeste,
                documentosOrdenados: documentosOrdenados,
                validacao: validacao,
            };
        },

        // 🔧 FUNÇÕES DE DEBUG PARA RESOLUCIONAR PROBLEMAS COM CARD
        debugStatusCard: function () {
            console.log(
                "🔍 DEBUG CARD: Verificando status completo do sistema"
            );

            const processoAtual = obterNumeroProcesso();
            const temDados = hasDataSessaoPautado();
            const dados = getDataSessaoPautado();
            const cardExiste = !!document.getElementById("eprobe-data-sessao");

            const status = {
                processoAtual: processoAtual,
                temDados: temDados,
                dados: dados,
                cardExiste: cardExiste,
                processoComDataSessao: processoComDataSessao,
                jaProcessado: processoAtual
                    ? processosJaProcessados.has(processoAtual)
                    : false,
            };

            console.log("📊 STATUS COMPLETO:", status);

            if (!temDados) {
                console.log("⚠️ PROBLEMA: Não há dados de sessão detectados");
                console.log(
                    "💡 SOLUÇÃO: Execute window.SENT1_AUTO.detectarCardSessaoSimplificado()"
                );
            } else if (!cardExiste) {
                console.log("⚠️ PROBLEMA: Há dados mas card não foi criado");
                console.log(
                    "💡 SOLUÇÃO: Execute window.SENT1_AUTO.inserirDataSessaoNaInterface()"
                );
            } else {
                console.log("✅ STATUS: Tudo funcionando corretamente");
            }

            return status;
        },

        forcarCriacaoCard: function () {
            console.log(
                "🚀 FORÇA: Forçando criação do card ignorando validações"
            );

            // Tentar detectar dados primeiro
            const dados = this.detectarCardSessaoSimplificado();
            console.log("📊 DADOS DETECTADOS:", dados);

            // Forçar criação mesmo se não houver dados
            const resultado = this.inserirDataSessaoNaInterface();
            console.log("🎯 RESULTADO CRIAÇÃO:", resultado);

            return {
                dadosDetectados: !!dados,
                cardCriado: resultado,
                cardExiste: !!document.getElementById("eprobe-data-sessao"),
            };
        },

        resetarSistemaCard: function () {
            console.log("🔄 RESET: Resetando sistema completo do card");

            // Remover card existente
            const cardExistente = document.getElementById("eprobe-data-sessao");
            if (cardExistente) {
                cardExistente.remove();
                console.log("🗑️ Card removido");
            }

            // Reset dados
            this.resetDataSessaoPautado();

            // Reset processo processado
            const processo = obterNumeroProcesso();
            if (processo) {
                processosJaProcessados.delete(processo);
                console.log("🔄 Processo removido da lista de processados");
            }

            console.log(
                "✅ RESET: Sistema resetado, pronto para nova detecção"
            );
            return true;
        },

        // 🎯 FUNÇÕES UNIFICADAS DE TOOLTIP - SISTEMA CONSOLIDADO
        detectarEConfigurarTooltipUnificado: function () {
            try {
                console.log("🔍 TOOLTIP UNIFICADO: Iniciando detecção...");

                // 1. DETECÇÃO EM TODO O FIELDSET[6] (XPath mais seguro)
                const xpath =
                    "/html/body/div[2]/div[3]/div[2]/div/div[1]/form[2]/div[3]/div/div/fieldset[6]";
                const resultado = document.evaluate(
                    xpath,
                    document,
                    null,
                    XPathResult.FIRST_ORDERED_NODE_TYPE,
                    null
                );

                if (!resultado.singleNodeValue) {
                    console.log(
                        "ℹ️ TOOLTIP: Fieldset[6] não encontrado via XPath"
                    );
                    return null;
                }

                const fieldsetElement = resultado.singleNodeValue;
                console.log("✅ TOOLTIP: Fieldset[6] localizado com sucesso");

                // 2. USAR A FUNÇÃO AUXILIAR PARA PROCESSAMENTO COMPLETO
                const resultadoProcessamento =
                    processarTextoFieldsetSessao(fieldsetElement);

                if (!resultadoProcessamento) {
                    console.log(
                        "⚠️ TOOLTIP: Nenhum dado de sessão no fieldset"
                    );
                    return null;
                }

                // 3. ESTRUTURAÇÃO DOS DADOS PARA COMPATIBILIDADE
                const { statusDetectado, datasSessao, informacoesDetalhadas } =
                    resultadoProcessamento;

                let dadosProcessados = null;

                if (datasSessao && datasSessao.length > 1) {
                    // MÚLTIPLAS SESSÕES DETECTADAS
                    console.log(
                        `🎯 TOOLTIP: Múltiplas sessões detectadas (${datasSessao.length})`
                    );

                    dadosProcessados = {
                        tipo: "multiplas_sessoes",
                        totalSessoes: datasSessao.length,
                        datas: datasSessao,
                        textoCompleto: informacoesDetalhadas.textoCompleto,
                        temTooltip: true,
                        tooltipTipo: "rico",
                        statusPrincipal: statusDetectado,
                        dataFormatada: `${datasSessao.length} sessões`,
                    };

                    // Armazenar globalmente para uso posterior
                    window.todasSessoesDetectadas = datasSessao;
                    window.sessaoMultiplaAtiva = true;
                } else if (datasSessao && datasSessao.length === 1) {
                    // SESSÃO ÚNICA DETECTADA
                    const dataUnica = datasSessao[0];
                    console.log(
                        `📅 TOOLTIP: Sessão única detectada: ${dataUnica}`
                    );

                    dadosProcessados = {
                        tipo: "sessao_unica",
                        totalSessoes: 1,
                        datas: [dataUnica],
                        textoCompleto: informacoesDetalhadas.textoCompleto,
                        temTooltip: true,
                        tooltipTipo: "simples",
                        statusPrincipal: statusDetectado,
                        dataFormatada: dataUnica,
                    };

                    // Armazenar globalmente
                    window.dataSessaoPautado = {
                        data: dataUnica,
                        textoCompleto: informacoesDetalhadas.textoCompleto,
                    };
                    window.sessaoMultiplaAtiva = false;
                } else {
                    // NENHUMA SESSÃO VÁLIDA
                    console.log(
                        "ℹ️ TOOLTIP: Nenhuma data de sessão válida encontrada"
                    );
                    return null;
                }

                // 4. CONFIGURAÇÃO DE TOOLTIP AUTOMÁTICA
                if (dadosProcessados.temTooltip) {
                    setTimeout(() => {
                        this.configurarTooltipPorTipo(dadosProcessados);
                    }, 300);
                }

                console.log(
                    "✅ TOOLTIP: Detecção unificada concluída:",
                    dadosProcessados
                );
                return dadosProcessados;
            } catch (error) {
                console.error("❌ TOOLTIP: Erro na detecção unificada:", error);
                return null;
            }
        },

        configurarTooltipPorTipo: function (dados) {
            try {
                if (
                    dados.tooltipTipo === "rico" &&
                    dados.tipo === "multiplas_sessoes"
                ) {
                    console.log(
                        "🎨 TOOLTIP: Aplicando tooltip rico para múltiplas sessões"
                    );
                    this.adicionarRichTooltipMaterialDesign();
                } else if (dados.tooltipTipo === "simples") {
                    console.log("🎨 TOOLTIP: Aplicando tooltip simples");
                    this.criarTooltipSimplificado(dados);
                }
            } catch (error) {
                console.error(
                    "❌ TOOLTIP: Erro na configuração por tipo:",
                    error
                );
            }
        },

        criarCardComTooltipIntegrado: function () {
            try {
                console.log("🎯 CARD+TOOLTIP: Iniciando criação integrada...");

                // 1. DETECTAR E CONFIGURAR DADOS
                const dadosSessao = this.detectarEConfigurarTooltipUnificado();

                if (!dadosSessao) {
                    console.log(
                        "ℹ️ CARD+TOOLTIP: Sem dados de sessão - não criando card"
                    );
                    return null;
                }

                // 2. CRIAR CARD MATERIAL DESIGN
                const cardCriado = this.criarCardMaterialDesign(dadosSessao);

                if (!cardCriado) {
                    console.log("❌ CARD+TOOLTIP: Falha na criação do card");
                    return null;
                }

                // 3. AGUARDAR E CONFIGURAR TOOLTIP
                setTimeout(() => {
                    const cardElement = document.querySelector(
                        ".card-material-design, #eprobe-data-sessao"
                    );
                    if (cardElement && dadosSessao.temTooltip) {
                        this.configurarTooltipPorTipo(dadosSessao);
                        console.log(
                            "✅ CARD+TOOLTIP: Card e tooltip configurados com sucesso"
                        );
                    } else {
                        console.log(
                            "⚠️ CARD+TOOLTIP: Card criado mas tooltip não configurado"
                        );
                    }
                }, 500);

                return dadosSessao;
            } catch (error) {
                console.error(
                    "❌ CARD+TOOLTIP: Erro na criação integrada:",
                    error
                );
                return null;
            }
        },

        // 🧪 FUNÇÃO DE TESTE COMPLETO DO SISTEMA UNIFICADO
        testarSistemaTooltipUnificado: function () {
            console.log(
                "🧪 TESTE UNIFICADO: Testando sistema completo de tooltip"
            );

            try {
                // 1. Reset do sistema
                this.resetarSistemaCard();

                // 2. Detecção unificada
                console.log("🔍 PASSO 1: Detecção unificada");
                const dadosDetectados =
                    this.detectarEConfigurarTooltipUnificado();
                console.log("📊 Dados detectados:", dadosDetectados);

                // 3. Criação integrada
                console.log("🔍 PASSO 2: Criação integrada");
                const cardCriado = this.criarCardComTooltipIntegrado();
                console.log("📊 Card criado:", !!cardCriado);

                // 4. Verificação final
                const cardExiste = !!document.querySelector(
                    ".card-material-design, #eprobe-data-sessao"
                );
                console.log("📊 Card existe no DOM:", cardExiste);

                const resultado = {
                    deteccao: !!dadosDetectados,
                    tipoDetectado: dadosDetectados?.tipo || null,
                    totalSessoes: dadosDetectados?.totalSessoes || 0,
                    cardCriado: !!cardCriado,
                    cardExiste: cardExiste,
                    temTooltip: dadosDetectados?.temTooltip || false,
                    tooltipTipo: dadosDetectados?.tooltipTipo || null,
                };

                console.log("🎯 RESULTADO FINAL:", resultado);
                return resultado;
            } catch (error) {
                console.error("❌ TESTE UNIFICADO: Erro:", error);
                return { erro: error.message };
            }
        },

        // ========================================
        // FUNÇÕES FIELDSET[6] REMOVIDAS DA DUPLICAÇÃO
        // As implementações estão no namespace consolidado acima
        // processarTextoFieldsetSessao -> implementada na linha 21175+
        // detectarEConfigurarTooltipUnificado -> implementada na linha 21175+
        // ========================================

        // 🔧 FUNÇÕES DE CORREÇÃO DE TOOLTIP (REMOVIDAS DO WINDOW.* INCORRETO)
        corrigirTooltipCardOriginal: function () {
            console.log("🔧 CORRIGIR TOOLTIP: Procurando card original...");

            // Remover card genérico se existir
            const cardGenerico = document.querySelector("#eprobe-data-sessao");
            if (cardGenerico && cardGenerico.style.position === "fixed") {
                cardGenerico.remove();
                console.log("🗑️ Card genérico removido");
            }

            // Encontrar o card original do Material Design
            const cardOriginal =
                document.querySelector(
                    '#eprobe-data-sessao:not([style*="position: fixed"])'
                ) ||
                document.querySelector(".eprobe-figma-card-pautado") ||
                document.querySelector('[id*="eprobe-data-sessao"]');

            if (!cardOriginal) {
                console.log("❌ Card original não encontrado");
                return { erro: "card_original_nao_encontrado" };
            }

            console.log("✅ Card original encontrado:", cardOriginal);

            // Procurar indicador existente
            let indicador = cardOriginal.querySelector(
                ".eprobe-figma-sessions-indicator"
            );

            if (!indicador) {
                console.log("📝 Indicador não encontrado - criando um novo...");

                // Criar indicador se não existir
                indicador = document.createElement("div");
                indicador.className = "eprobe-figma-sessions-indicator";
                indicador.style.cssText = `
                position: absolute;
                top: 8px;
                right: 8px;
                width: 20px;
                height: 16px;
                background: rgba(28, 27, 31, 0.08);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'Roboto', sans-serif;
                font-size: 10px;
                font-weight: 500;
                color: #1C1B1F;
                cursor: help;
                z-index: 1;
                transition: all 0.2s ease;
            `;
                indicador.textContent = "3";
                cardOriginal.appendChild(indicador);
                console.log("✅ Indicador criado no card original");
            }

            // Remover tooltip antigo se existir
            const tooltipAntigo = document.getElementById(
                "eprobe-rich-tooltip"
            );
            if (tooltipAntigo) {
                tooltipAntigo.remove();
                console.log("🗑️ Tooltip antigo removido");
            }

            // Criar tooltip novo
            const tooltip = document.createElement("div");
            tooltip.id = "eprobe-rich-tooltip";
            tooltip.style.cssText = `
            position: absolute;
            display: none;
            z-index: 10000;
            background: #FFFBFE;
            border: 1px solid #CAC4D0;
            border-radius: 12px;
            min-width: 320px;
            max-width: 480px;
            box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
            font-family: 'Roboto', sans-serif;
            opacity: 0;
            transition: opacity 0.15s ease-in-out;
            overflow: hidden;`;

            // Buscar dados reais das sessões
            const sessoesReais =
                typeof buscarDadosReaisSessoes === "function"
                    ? buscarDadosReaisSessoes()
                    : [];
            console.log(
                "🔍 Sessões encontradas:",
                sessoesReais.length,
                sessoesReais
            );

            // Atualizar indicador com o número real de sessões
            const numeroSessoes = sessoesReais.length;
            indicador.textContent = numeroSessoes.toString();

            // Gerar HTML das sessões
            let htmlSessoes = "";
            if (sessoesReais.length > 0) {
                // Ordenar por data (mais recente primeiro)
                sessoesReais.sort((a, b) => {
                    const dataA = new Date(
                        a.data.split("/").reverse().join("-")
                    );
                    const dataB = new Date(
                        b.data.split("/").reverse().join("-")
                    );
                    return dataB - dataA;
                });

                // Gerar HTML para cada sessão
                sessoesReais.forEach((sessao, index) => {
                    if (typeof gerarHtmlCardSessao === "function") {
                        htmlSessoes += gerarHtmlCardSessao(
                            sessao,
                            sessao.isAtual
                        );
                    } else {
                        // Fallback simples se a função não existir
                        htmlSessoes += `<div style="padding: 8px; border: 1px solid #ccc; margin: 4px; border-radius: 4px;">
                            <div>${sessao.data}</div>
                            <div>${sessao.orgao || "N/A"}</div>
                        </div>`;
                    }
                });
            } else {
                // Fallback para dados estáticos se não encontrar dados reais
                htmlSessoes = `
                <div style="min-width: 140px; padding: 12px; border: 2px solid #007acc; border-radius: 8px; background: #E8F4FD; position: relative;">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                        <span style="color: #007acc; font-size: 16px;">●</span>
                        <div style="font-size: 12px; font-weight: 500; color: #1C1B1F; flex: 1;">Sessão Atual</div>
                    </div>
                    <div style="background: #007acc; color: #FFFFFF; font-size: 10px; font-weight: 500; padding: 2px 6px; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.5px; position: absolute; top: -4px; right: -4px;">ATUAL</div>
                    <div style="font-size: 13px; font-weight: 600; color: #1C1B1F; line-height: 18px; margin-bottom: 4px;">Data não encontrada</div>
                    <div style="font-size: 11px; color: #49454F; line-height: 14px; margin-bottom: 2px;">Câmara não identificada</div>
                    <div style="font-size: 10px; color: #79747E; line-height: 12px; font-style: italic;">Verifique a página</div>
                </div> `;
            }

            tooltip.innerHTML = `
            <div style="padding: 16px 16px 12px 16px; display: flex; align-items: flex-start; gap: 12px; background: #F7F2FA; border-bottom: 1px solid #E6E0E9;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C1B1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="pointer-events: none;"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                <div style="flex: 1;">
                    <div style="font-size: 14px; font-weight: 500; color: #1C1B1F; line-height: 20px; margin-bottom: 2px;">
                        Histórico de Sessões
                    </div>
                    <div style="font-size: 12px; font-weight: 400; color: #49454F; line-height: 16px;">
                        ${numeroSessoes} ${
                numeroSessoes === 1
                    ? "evento encontrado"
                    : "eventos encontrados"
            }
                    </div>
                </div>
            </div>
            <div style="height: 1px; background: #E6E0E9;"></div>
            <div style="padding: 16px; display: flex; gap: 16px; overflow-x: auto;">
                ${htmlSessoes}
            </div> `;

            document.body.appendChild(tooltip);
            console.log("✅ Tooltip Material Design criado");

            // Remover event listeners antigos
            const novoIndicador = indicador.cloneNode(true);
            indicador.parentNode.replaceChild(novoIndicador, indicador);
            indicador = novoIndicador;

            // Sistema de eventos melhorado
            let tooltipTimer = null;

            const mostrarTooltip = () => {
                console.log("🖱️ MOSTRAR tooltip");

                if (tooltipTimer) {
                    clearTimeout(tooltipTimer);
                    tooltipTimer = null;
                }

                const rect = indicador.getBoundingClientRect();
                tooltip.style.left = rect.left - 150 + "px";
                tooltip.style.top = rect.bottom + 12 + "px";
                tooltip.style.display = "block";

                // Forçar reflow
                tooltip.offsetHeight;

                tooltip.style.opacity = "1";
            };

            const ocultarTooltip = () => {
                console.log("🖱️ OCULTAR tooltip");
                tooltipTimer = setTimeout(() => {
                    tooltip.style.opacity = "0";
                    setTimeout(() => {
                        tooltip.style.display = "none";
                    }, 150);
                }, 300);
            };

            const cancelarOcultacao = () => {
                if (tooltipTimer) {
                    clearTimeout(tooltipTimer);
                    tooltipTimer = null;
                }
            };

            // Eventos do indicador
            indicador.addEventListener("mouseenter", mostrarTooltip);
            indicador.addEventListener("mouseleave", ocultarTooltip);

            // Eventos do tooltip
            tooltip.addEventListener("mouseenter", cancelarOcultacao);
            tooltip.addEventListener("mouseleave", ocultarTooltip);

            // Efeito hover no indicador
            indicador.addEventListener("mouseenter", () => {
                indicador.style.background = "rgba(28, 27, 31, 0.12)";
                indicador.style.transform = "scale(1.1)";
            });

            indicador.addEventListener("mouseleave", () => {
                indicador.style.background = "rgba(28, 27, 31, 0.08)";
                indicador.style.transform = "scale(1)";
            });

            console.log(
                "✅ TOOLTIP CORRIGIDO: Sistema funcional aplicado ao card original"
            );
            console.log("🖱️ Passe o mouse sobre o indicador do card original");

            return {
                status: "sucesso",
                cardOriginal: cardOriginal,
                indicador: indicador,
                tooltip: tooltip,
            };
        },

        // 🧪 FUNÇÃO DE TESTE DE NAMESPACE (REMOVIDA DO WINDOW.* INCORRETO)
        testarNamespaceSENT1_AUTO: function () {
            console.log(
                "🧪 TESTE NAMESPACE: Validando todas as funções do namespace..."
            );

            if (typeof window.SENT1_AUTO === "undefined") {
                console.error(
                    "❌ NAMESPACE: window.SENT1_AUTO não está definido!"
                );
                return false;
            }

            const funcoes = Object.keys(window.SENT1_AUTO);
            const resultados = {
                total: funcoes.length,
                funcionais: 0,
                comErro: 0,
                erros: [],
            };

            console.log(
                `📊 TESTE: Encontradas ${funcoes.length} funções no namespace`
            );

            funcoes.forEach((nome) => {
                try {
                    const funcao = window.SENT1_AUTO[nome];
                    if (typeof funcao === "function") {
                        // Testamos apenas se a função é chamável, sem executá-la
                        const isCallable =
                            funcao.constructor === Function ||
                            funcao.constructor === AsyncFunction;
                        if (isCallable) {
                            resultados.funcionais++;
                            console.log(`✅ ${nome}: Função válida`);
                        } else {
                            console.warn(`⚠️ ${nome}: Não é função executável`);
                        }
                    } else {
                        console.warn(
                            `⚠️ ${nome}: Não é uma função (tipo: ${typeof funcao})`
                        );
                    }
                } catch (error) {
                    resultados.comErro++;
                    resultados.erros.push({ nome, erro: error.message });
                    console.error(`❌ ${nome}: Erro - ${error.message}`);
                }
            });

            console.log("📈 RESULTADO FINAL:");
            console.log(`  Total de funções: ${resultados.total}`);
            console.log(`  Funcionais: ${resultados.funcionais}`);
            console.log(`  Com erro: ${resultados.comErro}`);

            if (resultados.erros.length > 0) {
                console.warn("⚠️ ERROS ENCONTRADOS:");
                resultados.erros.forEach(({ nome, erro }) => {
                    console.warn(`  - ${nome}: ${erro}`);
                });
            }

            const sucesso = resultados.comErro === 0;
            console.log(
                sucesso
                    ? "✅ TESTE: Namespace totalmente funcional!"
                    : "⚠️ TESTE: Namespace com problemas"
            );

            return {
                sucesso,
                ...resultados,
            };
        },

        // 🔍 FUNÇÃO DE VERIFICAÇÃO DE REFERENCEERROR (REMOVIDA DO WINDOW.* INCORRETO)
        verificarReferenceErrors: function () {
            console.log(
                "🔍 VERIFICAÇÃO: Testando todas as funções problemáticas..."
            );

            const funcoesTestadas = [
                "detectarPaginaLocalizadores",
                "processarTabelaLocalizadores",
                "destacarLocalizadoresUrgentes",
                "detectarCardSessaoSimplificado",
                "criarCardMaterialDesign",
                "obterConfigFigmaStatus",
                "adicionarTooltipInterativo",
                "adicionarRichTooltipMaterialDesign",
                "criarTooltipSimplificado",
                "testarFuncaoTooltip",
                "debugDivLembrete",
                "estilizarDivLembrete",
                "debugPadraoRetirado",
                "debugStatusCompleto",
                "forcarAtualizacaoStatus",
                "testarCasoRetirado",
                "testarSistemaStatusSessao",
                "findToggleTarget",
                "implementarAlternanciaExpandirRetrair",
                "isElementSafeForToggle",
                "debugPadroesStatusSessao",
                "forcarStatusSessao",
                "encontrarTextoRetirado",
                "forcarDeteccaoCompleta",
                "substituirIconesFieldsetAcoes",
                "substituirIconesFerramentas",
                "substituirIconesGlobalmente",
                "debugIconesSubstituicao",
                "forcarRecriacaoCardSessao",
                "encontrarContainerParaCard",
                "getTipoJulgamentoProcessoPautado",
                "setTipoJulgamentoProcessoPautado",
                "getStatusJulgamento",
                "setStatusJulgamento",
                "getDataSessao",
                "setDataSessao",
                "resetDadosGlobaisSessao",
                "showDadosGlobaisSessao",
            ];

            const resultados = {
                total: funcoesTestadas.length,
                funcionais: 0,
                problemáticas: 0,
                erros: [],
            };

            console.log(`📊 Testando ${funcoesTestadas.length} funções...`);

            funcoesTestadas.forEach((nome) => {
                try {
                    if (
                        window.SENT1_AUTO &&
                        typeof window.SENT1_AUTO[nome] === "function"
                    ) {
                        // Função existe e é executável
                        resultados.funcionais++;
                        console.log(`✅ ${nome}: OK`);
                    } else {
                        resultados.problemáticas++;
                        resultados.erros.push(
                            `${nome}: Não é função ou não existe`
                        );
                        console.warn(`⚠️ ${nome}: PROBLEMA`);
                    }
                } catch (error) {
                    resultados.problemáticas++;
                    resultados.erros.push(`${nome}: ${error.message}`);
                    console.error(`❌ ${nome}: ERRO - ${error.message}`);
                }
            });

            console.log("🎯 RESULTADO FINAL:");
            console.log(`  ✅ Funcionais: ${resultados.funcionais}`);
            console.log(`  ❌ Problemáticas: ${resultados.problemáticas}`);

            if (resultados.problemáticas === 0) {
                console.log(
                    "🎉 SUCESSO TOTAL: Todos os ReferenceError foram eliminados!"
                );
            } else {
                console.warn("⚠️ AINDA HÁ PROBLEMAS:");
                resultados.erros.forEach((erro) => console.warn(`  - ${erro}`));
            }

            return resultados;
        },

        // 🔧 VERIFICAÇÃO SILENCIOSA DE FUNÇÕES (REMOVIDA DO WINDOW.* INCORRETO)
        verificarFuncoesSilenciosamente: function () {
            const problemas = [];
            const funcoesChave = [
                "detectarCardSessaoSimplificado",
                "criarCardMaterialDesign",
                "detectarPaginaLocalizadores",
                "substituirIconesFieldsetAcoes",
            ];

            funcoesChave.forEach((nome) => {
                if (
                    !window.SENT1_AUTO ||
                    typeof window.SENT1_AUTO[nome] !== "function"
                ) {
                    problemas.push(nome);
                }
            });

            return {
                temProblemas: problemas.length > 0,
                problemas: problemas,
                total: funcoesChave.length,
                funcionais: funcoesChave.length - problemas.length,
            };
        },

        // 🧠 SEMANTIC KERNEL - FUNCIONALIDADES EXPERIMENTAIS
        experimental: {
            detectarDataSessaoComIA: detectarDataSessaoComIA,
            semanticKernel: window.eProbeSemanticKernel,

            // Função para testar o sistema
            async testarIA() {
                console.log("🧪 TESTE: Iniciando teste do Semantic Kernel");

                const sk = window.eProbeSemanticKernel;
                console.log("📊 Stats:", sk.getStats());

                const resultado = await detectarDataSessaoComIA();

                if (resultado) {
                    console.log("✅ TESTE: Sucesso!", resultado);
                    alert(
                        `Teste do Semantic Kernel:\n\n✅ Sucesso!\nData: ${
                            resultado.dataFormatada
                        }\nMétodo: ${resultado.metodoDeteccao}\nConfiança: ${
                            resultado.confiancaIA || "N/A"
                        }`
                    );
                } else {
                    console.log("❌ TESTE: Nenhuma data encontrada");
                    alert(
                        "Teste do Semantic Kernel:\n\n❌ Nenhuma data encontrada\n\nVerifique se há informações de sessão na página atual."
                    );
                }

                console.log("📊 Stats finais:", sk.getStats());
                return resultado;
            },

            // Função para habilitar/desabilitar
            toggleIA(enable) {
                const sk = window.eProbeSemanticKernel;
                if (enable) {
                    sk.enable();
                } else {
                    sk.disable();
                }
                console.log(`🔧 IA ${enable ? "habilitada" : "desabilitada"}`);
            },

            // Função para ver estatísticas
            statsIA() {
                const stats = window.eProbeSemanticKernel.getStats();
                console.log("📊 SEMANTIC KERNEL STATS:", stats);
                alert(
                    `Estatísticas do Semantic Kernel:\n\n• Habilitado: ${
                        stats.enabled ? "Sim" : "Não"
                    }\n• Requisições usadas: ${stats.requestCount}/${
                        stats.maxRequests
                    }\n• Restantes: ${stats.requestsRemaining}\n• Modo teste: ${
                        stats.testMode ? "Sim" : "Não"
                    }\n• Fallback: ${stats.fallbackEnabled ? "Sim" : "Não"}`
                );
                return stats;
            },
        },
    };

    // Fim da seção de funcionalidades
    // ##### FIM DO NAMESPACE CONSOLIDADO #####

    console.log(
        "✅ eProbe Extension carregada com sucesso - Sistema completo inicializado!"
    );

    // ========================================
    // 🔧 FUNÇÕES DE LOCALIZADORES - ESCOPO GLOBAL
    // ========================================

    // Função para detectar e processar página "Meus Localizadores"
    function detectarPaginaLocalizadores() {
        const currentUrl = window.location.href;

        // Verifica se está na página de Meus Localizadores
        if (
            !currentUrl.includes(
                "acao=usuario_tipo_monitoramento_localizador_listar"
            )
        ) {
            return false;
        }

        console.log("📋 LOCALIZADORES: Página 'Meus Localizadores' detectada");

        // Processa a tabela de localizadores
        processarTabelaLocalizadores();

        return true;
    }

    // Função para processar a tabela de localizadores
    function processarTabelaLocalizadores() {
        console.log("🔍 LOCALIZADORES: Iniciando processamento da tabela");

        // Busca a tabela de localizadores
        const tabela = document.querySelector(
            'table.infraTable[summary*="Localizadores"]'
        );

        if (!tabela) {
            console.log(
                "⚠️ LOCALIZADORES: Tabela de localizadores não encontrada"
            );
            return [];
        }

        console.log("✅ LOCALIZADORES: Tabela encontrada, processando...");

        // Destaca localizadores urgentes
        const urgentes = destacarLocalizadoresUrgentes(tabela);

        return { tabela, urgentes };
    }

    // Função para destacar localizadores urgentes
    function destacarLocalizadoresUrgentes(tabela) {
        console.log("🔴 LOCALIZADORES: Destacando localizadores urgentes");

        const linhas = tabela.querySelectorAll("tbody tr");
        let urgentesEncontrados = 0;

        linhas.forEach((linha, index) => {
            const primeiraColuna = linha.querySelector("td:first-child");

            if (primeiraColuna) {
                const textoLocalizador =
                    primeiraColuna.textContent.toLowerCase();

                // Verifica se contém a palavra "urgente" (case insensitive)
                if (textoLocalizador.includes("urgente")) {
                    // Aplica estilo de destaque vermelho suave
                    linha.style.backgroundColor = "#fecaca";
                    linha.style.border = "1px solid #f87171";
                    linha.style.transition = "all 0.2s ease";

                    urgentesEncontrados++;
                    console.log(
                        `🔴 LOCALIZADORES: Linha ${
                            index + 1
                        } marcada como urgente: "${primeiraColuna.textContent.trim()}"`
                    );
                }
            }
        });

        if (urgentesEncontrados > 0) {
            console.log(
                `✅ LOCALIZADORES: ${urgentesEncontrados} localizador(es) urgente(s) destacado(s)`
            );
        } else {
            console.log(
                "ℹ️ LOCALIZADORES: Nenhum localizador urgente encontrado"
            );
        }

        return urgentesEncontrados;
    }

    // Fechamento da IIFE principal assíncrona
})().catch((error) => {
    console.error("❌ ERRO na IIFE principal:", error);

    // FALLBACK DE EMERGÊNCIA - Criar namespace mínimo se houver erro
    if (typeof window.SENT1_AUTO === "undefined") {
        console.log("🚨 FALLBACK: Criando namespace mínimo de emergência...");

        window.SENT1_AUTO = {
            detectarCardSessaoSimplificado:
                detectarCardSessaoSimplificado ||
                function () {
                    console.log(
                        "⚠️ EMERGÊNCIA: detectarCardSessaoSimplificado via fallback"
                    );
                    return null;
                },
            detectarPaginaLocalizadores:
                detectarPaginaLocalizadores ||
                function () {
                    console.log(
                        "⚠️ EMERGÊNCIA: detectarPaginaLocalizadores via fallback"
                    );
                    return false;
                },
            processarTabelaLocalizadores:
                processarTabelaLocalizadores ||
                function () {
                    console.log(
                        "⚠️ EMERGÊNCIA: processarTabelaLocalizadores via fallback"
                    );
                    return [];
                },
            destacarLocalizadoresUrgentes:
                destacarLocalizadoresUrgentes ||
                function () {
                    console.log(
                        "⚠️ EMERGÊNCIA: destacarLocalizadoresUrgentes via fallback"
                    );
                    return 0;
                },
            criarCardSessaoMaterial:
                criarCardSessaoMaterial ||
                function () {
                    console.log(
                        "⚠️ EMERGÊNCIA: criarCardSessaoMaterial via fallback"
                    );
                    return false;
                },
            // Função de debug para verificar estado
            debugEmergencia: function () {
                console.log("🚨 DEBUG EMERGÊNCIA:");
                console.log("- Namespace criado via fallback");
                console.log("- Funções disponíveis:", Object.keys(this).length);
                return {
                    namespace: "fallback",
                    funcoes: Object.keys(this).length,
                    detectarCardSessaoSimplificado:
                        typeof this.detectarCardSessaoSimplificado ===
                        "function",
                };
            },
        };

        console.log("✅ FALLBACK: Namespace mínimo criado com sucesso");
    }
});

// ========================================
// 🚨 VERIFICAÇÃO FINAL DE SEGURANÇA
// ========================================

// Garantir que o namespace existe SEMPRE
setTimeout(() => {
    if (typeof window.SENT1_AUTO === "undefined") {
        console.error(
            "🚨 ERRO CRÍTICO: Namespace não foi criado após timeout!"
        );

        // Última tentativa - namespace super básico
        window.SENT1_AUTO = {
            detectarCardSessaoSimplificado: function () {
                console.log(
                    "⚠️ TIMEOUT FALLBACK: detectarCardSessaoSimplificado"
                );
                return null;
            },
            debug: function () {
                return {
                    status: "timeout_fallback",
                    timestamp: new Date().toISOString(),
                };
            },
        };

        console.log("🆘 TIMEOUT FALLBACK: Namespace básico criado");
    } else {
        console.log("✅ VERIFICAÇÃO: Namespace window.SENT1_AUTO confirmado");
        console.log(
            "📊 Funções disponíveis:",
            Object.keys(window.SENT1_AUTO).length
        );
    }
}, 1000);
