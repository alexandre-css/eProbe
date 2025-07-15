// Content script automatizado para DocumentosRelevantes
// 🔧 VERSÃO CORRIGIDA PARA MICROSOFT EDGE

// 🎯 TEMA SIMPLES: Aplicação básica delegada ao themeApply.js
// Removidas otimizações complexas que causavam problemas de performance

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
            "resize",
            "orientationchange",
            "contextmenu",
            "dragstart",
            "dragover",
            "drop",
        ];

        // 1. Interceptar addEventListener nativo
        const originalAddEventListener = EventTarget.prototype.addEventListener;
        EventTarget.prototype.addEventListener = function (
            type,
            listener,
            options
        ) {
            if (passiveEvents.includes(type)) {
                if (typeof options === "boolean") {
                    options = { capture: options, passive: true };
                } else if (typeof options === "object" && options !== null) {
                    options.passive = true;
                } else {
                    options = { passive: true };
                }
            }
            return originalAddEventListener.call(this, type, listener, options);
        };

        // 2. Interceptar jQuery quando disponível
        const interceptJQuery = () => {
            if (typeof $ !== "undefined" && $.fn && $.fn.on) {
                const originalJQueryOn = $.fn.on;
                $.fn.on = function (events, selector, data, handler) {
                    // Se for um string de eventos, verificar se algum é passivo
                    if (typeof events === "string") {
                        const eventList = events.split(" ");
                        const hasPassiveEvent = eventList.some((event) =>
                            passiveEvents.includes(event.split(".")[0])
                        );

                        if (hasPassiveEvent) {
                            // Para eventos passivos, adicionar através do addEventListener nativo
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

                    // Para outros eventos, usar comportamento original
                    return originalJQueryOn.apply(this, arguments);
                };

                console.log(
                    "✅ PERFORMANCE: jQuery interceptado para event listeners passivos"
                );
            }
        };

        // Tentar interceptar jQuery imediatamente e em intervalos
        interceptJQuery();
        setTimeout(interceptJQuery, 100);
        setTimeout(interceptJQuery, 500);
        setTimeout(interceptJQuery, 1000);

        // 3. Cache otimizado para getBoundingClientRect
        const rectCache = new WeakMap();
        const CACHE_DURATION = 150; // Aumentado para 150ms

        window.getCachedBoundingRect = function (element) {
            if (!element) return null;

            const now = Date.now();
            const cached = rectCache.get(element);

            if (cached && now - cached.timestamp < CACHE_DURATION) {
                return cached.rect;
            }

            const rect = element.getBoundingClientRect();
            rectCache.set(element, { rect, timestamp: now });
            return rect;
        };

        // 4. requestAnimationFrame otimizado com throttling
        let rafPending = false;
        window.scheduleLayoutOperation = function (callback) {
            if (rafPending) return;
            rafPending = true;

            requestAnimationFrame(() => {
                rafPending = false;
                try {
                    callback();
                } catch (e) {
                    console.warn("Erro em operação layout:", e);
                }
            });
        };

        // 5. INTERCEPTAÇÃO ULTRA-AGRESSIVA E DIRECIONADA PARA TIMEOUTS DO JQUERY
        const originalSetTimeout = window.setTimeout;
        const problematicDelays = [
            131, 165, 83, 56, 103, 141, 60, 53, 99, 142, 255,
        ]; // Delays específicos das violações
        let timeoutCounter = 0;

        window.setTimeout = function (callback, delay, ...args) {
            timeoutCounter++;

            // Interceptar especificamente os delays problemáticos detectados
            if (problematicDelays.includes(delay) || delay > 50) {
                if (window.performanceMetrics) {
                    window.performanceMetrics.timeoutsIntercepted++;
                }

                // Log apenas as primeiras 3 interceptações
                if (timeoutCounter <= 3) {
                    console.log(
                        `🎯 PERFORMANCE: setTimeout ${delay}ms interceptado (#${timeoutCounter})`
                    );
                }

                // Estratégia 1: requestIdleCallback prioritário para callbacks pesados
                if (window.requestIdleCallback && delay > 100) {
                    return window.requestIdleCallback(
                        (deadline) => {
                            const startTime = performance.now();
                            try {
                                // Executar callback em pequenos chunks durante idle time
                                let chunkStart = performance.now();
                                while (
                                    deadline.timeRemaining() > 0 &&
                                    performance.now() - chunkStart < 5
                                ) {
                                    callback.apply(this, args);
                                    break; // Executar uma vez e sair
                                }

                                const elapsed = performance.now() - startTime;
                                if (elapsed > 16) {
                                    console.warn(
                                        `⚠️ PERFORMANCE: Callback lento: ${elapsed}ms`
                                    );
                                }
                                // Removido log de sucesso para reduzir ruído
                            } catch (e) {
                                console.warn(
                                    "❌ PERFORMANCE: Erro em callback idle:",
                                    e
                                );
                            }
                        },
                        { timeout: delay }
                    );
                }

                // Estratégia 2: Fragmentação temporal para delays menores
                const targetChunkSize = 16; // 60fps
                const chunks = Math.ceil(delay / targetChunkSize);
                let currentChunk = 0;

                const executeChunk = () => {
                    currentChunk++;
                    if (currentChunk >= chunks) {
                        // Executar callback final com delay mínimo
                        return originalSetTimeout.call(
                            this,
                            () => {
                                const startTime = performance.now();
                                try {
                                    callback.apply(this, args);
                                    const elapsed =
                                        performance.now() - startTime;
                                    if (elapsed > 16) {
                                        console.warn(
                                            `⚠️ PERFORMANCE: Callback final ainda demorou ${elapsed}ms`
                                        );
                                    } else {
                                        console.log(
                                            `✅ PERFORMANCE: Callback fragmentado executado em ${elapsed}ms`
                                        );
                                    }
                                } catch (e) {
                                    console.warn(
                                        "❌ PERFORMANCE: Erro em callback fragmentado:",
                                        e
                                    );
                                }
                            },
                            1
                        ); // Delay mínimo
                    } else {
                        return originalSetTimeout.call(
                            this,
                            executeChunk,
                            targetChunkSize
                        );
                    }
                };

                return originalSetTimeout.call(this, executeChunk, 1);
            }

            // Normalizar delays muito pequenos
            if (delay < 4 && delay > 0) {
                delay = 4; // Mínimo técnico para setTimeout
            }

            return originalSetTimeout.call(this, callback, delay, ...args);
        };

        // 6. INTERCEPTAÇÃO MEGA-AGRESSIVA PARA TODAS AS VERSÕES DO JQUERY
        let jQueryIntercepted = false; // Flag para evitar spam de logs
        let jQueryDetectionCount = 0; // Contador de detecções

        const interceptJQueryMegaAggressive = () => {
            // Detectar jQuery por múltiplas estratégias
            let jQueryDetected = false;
            let jQueryInstance = null;
            jQueryDetectionCount++;

            // Estratégia 1: jQuery clássico
            if (typeof window.jQuery !== "undefined") {
                jQueryInstance = window.jQuery;
                jQueryDetected = true;
                if (!jQueryIntercepted) {
                    console.log("🎯 PERFORMANCE: jQuery clássico detectado");
                }
            }

            // Estratégia 2: $ global
            if (typeof window.$ !== "undefined" && window.$.fn) {
                jQueryInstance = window.$;
                jQueryDetected = true;
                if (!jQueryIntercepted) {
                    console.log("🎯 PERFORMANCE: $ global detectado");
                }
            }

            // Estratégia 3: Buscar jQuery minificado/hasheado nos scripts (só logar uma vez)
            const scripts = document.querySelectorAll('script[src*="jquery"]');
            if (scripts.length > 0 && !jQueryDetected) {
                console.log(
                    `🎯 PERFORMANCE: ${scripts.length} script(s) jQuery detectado(s)`
                );
                jQueryDetected = true;
            }

            // Estratégia 4: Interceptar através de propriedades conhecidas do jQuery
            for (const prop in window) {
                if (
                    window[prop] &&
                    typeof window[prop] === "function" &&
                    window[prop].fn &&
                    window[prop].fn.jquery
                ) {
                    jQueryInstance = window[prop];
                    jQueryDetected = true;
                    if (!jQueryIntercepted) {
                        console.log(
                            `🎯 PERFORMANCE: jQuery detectado via propriedade ${prop}`
                        );
                    }
                    break;
                }
            }

            if (jQueryDetected && jQueryInstance && !jQueryIntercepted) {
                const $ = jQueryInstance;

                // Interceptar jQuery.ready - fonte principal de problemas
                if ($.ready) {
                    const originalReady = $.ready;
                    $.ready = function (callback) {
                        if (!jQueryIntercepted) {
                            console.log(
                                "🎯 PERFORMANCE: Interceptando $.ready"
                            );
                        }
                        if (window.requestIdleCallback) {
                            return window.requestIdleCallback(() => {
                                try {
                                    callback.call(this);
                                } catch (e) {
                                    console.warn(
                                        "Erro em $.ready otimizado:",
                                        e
                                    );
                                }
                            });
                        } else {
                            return originalSetTimeout.call(window, callback, 1);
                        }
                    };
                }

                // Interceptar jQuery.fn.ready também
                if ($.fn && $.fn.ready) {
                    const originalFnReady = $.fn.ready;
                    $.fn.ready = function (callback) {
                        if (!jQueryIntercepted) {
                            console.log(
                                "🎯 PERFORMANCE: Interceptando $.fn.ready"
                            );
                        }
                        if (window.requestIdleCallback) {
                            window.requestIdleCallback(() => {
                                try {
                                    callback.call(this);
                                } catch (e) {
                                    console.warn(
                                        "Erro em $.fn.ready otimizado:",
                                        e
                                    );
                                }
                            });
                            return this;
                        } else {
                            return originalFnReady.call(this, callback);
                        }
                    };
                }

                // Interceptar jQuery.fn.on para event listeners passivos
                if ($.fn && $.fn.on) {
                    const originalOn = $.fn.on;
                    $.fn.on = function (events, selector, data, handler) {
                        if (typeof events === "string") {
                            const eventList = events.split(" ");
                            const hasPassiveEvent = eventList.some((event) =>
                                passiveEvents.includes(event.split(".")[0])
                            );

                            if (hasPassiveEvent && !jQueryIntercepted) {
                                console.log(
                                    `🎯 PERFORMANCE: Convertendo eventos ${events} para passivos`
                                );
                                return this.each(function () {
                                    eventList.forEach((eventName) => {
                                        const cleanType =
                                            eventName.split(".")[0];
                                        if (passiveEvents.includes(cleanType)) {
                                            const actualHandler =
                                                typeof selector === "function"
                                                    ? selector
                                                    : typeof data === "function"
                                                    ? data
                                                    : handler;
                                            if (actualHandler) {
                                                this.addEventListener(
                                                    cleanType,
                                                    actualHandler,
                                                    {
                                                        passive: true,
                                                        capture: false,
                                                    }
                                                );
                                            }
                                        }
                                    });
                                });
                            }
                        }
                        return originalOn.apply(this, arguments);
                    };
                }

                // Interceptar métodos de animação que causam timeouts longos
                const animationMethods = [
                    "animate",
                    "fadeIn",
                    "fadeOut",
                    "slideUp",
                    "slideDown",
                    "show",
                    "hide",
                ];
                animationMethods.forEach((method) => {
                    if ($.fn && $.fn[method]) {
                        const originalMethod = $.fn[method];
                        $.fn[method] = function (...args) {
                            // Limitar duração de animações para máximo 100ms
                            if (
                                args[0] &&
                                typeof args[0] === "number" &&
                                args[0] > 100
                            ) {
                                if (!jQueryIntercepted) {
                                    console.log(
                                        `🎯 PERFORMANCE: Limitando animação ${method} de ${args[0]}ms para 100ms`
                                    );
                                }
                                args[0] = 100;
                            }
                            // Se for string 'slow' ou 'fast', converter para números baixos
                            if (args[0] === "slow") args[0] = 100;
                            if (args[0] === "fast") args[0] = 50;

                            return originalMethod.apply(this, args);
                        };
                    }
                });

                // Interceptar jQuery queue system que pode causar timeouts
                if ($.fn && $.fn.queue) {
                    const originalQueue = $.fn.queue;
                    $.fn.queue = function (type, data) {
                        if (typeof data === "function") {
                            const originalFunction = data;
                            data = function () {
                                if (window.requestIdleCallback) {
                                    window.requestIdleCallback(() => {
                                        originalFunction.apply(this, arguments);
                                    });
                                } else {
                                    originalFunction.apply(this, arguments);
                                }
                            };
                        }
                        return originalQueue.call(this, type, data);
                    };
                }

                // Marcar como interceptado para evitar logs repetitivos
                jQueryIntercepted = true;
                console.log(
                    "✅ PERFORMANCE: jQuery MEGA-AGRESSIVO interceptado com sucesso"
                );
                return true;
            }

            return jQueryDetected; // Retornar sempre um booleano consistente
        };

        // Executar interceptação otimizada com limite
        let interceptAttempts = 0;
        const maxAttempts = 5; // Reduzido para 5 tentativas apenas
        let jQueryDetected = false; // IMPORTANTE: Declarar variável para evitar ReferenceError

        const optimizedIntercept = () => {
            interceptAttempts++;
            const success = interceptJQueryMegaAggressive();

            // Atualizar status de detecção baseado no sucesso
            if (success) {
                jQueryDetected = true;
            }

            // Log apenas nas primeiras tentativas
            if (success && !jQueryIntercepted) {
                console.log(
                    `✅ PERFORMANCE: jQuery interceptado na tentativa ${interceptAttempts}`
                );
                return; // Parar aqui se sucesso
            } else if (interceptAttempts <= 3) {
                console.log(
                    `🔍 PERFORMANCE: Tentativa ${interceptAttempts}/${maxAttempts} - jQuery não encontrado`
                );
            }

            // Parar após 5 tentativas ou se jQuery foi interceptado
            if (
                interceptAttempts < maxAttempts &&
                !jQueryIntercepted &&
                !jQueryDetected
            ) {
                const delay = 200 + interceptAttempts * 100; // 200ms, 300ms, 400ms, etc
                originalSetTimeout(optimizedIntercept, delay);
            } else {
                if (jQueryIntercepted || jQueryDetected) {
                    console.log(
                        `✅ PERFORMANCE: jQuery processado após ${interceptAttempts} tentativas`
                    );
                } else {
                    console.log(
                        `⚠️ PERFORMANCE: Limite atingido (${interceptAttempts} tentativas) - prosseguindo`
                    );
                }
            }
        };

        // Iniciar interceptação otimizada
        optimizedIntercept();

        console.log("🚀 PERFORMANCE: Sistema otimizado carregado");
        console.log(
            "🎯 PERFORMANCE: Interceptação jQuery limitada a 5 tentativas"
        );
    })();

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

    // 🛡️ CONTROLE DE REQUISIÇÕES - Prevenir spam e logout
    let tentativasCruzamento = 0;
    let ultimaTentativaCruzamento = 0;
    let cruzamentoEmAndamento = false;
    let cacheResultadoSessoes = null;
    let cacheValidoAte = 0;

    // 🔐 CONTROLE ÚNICO POR PROCESSO - Garantir apenas uma busca por processo
    let processosJaProcessados = new Set(); // Armazenar números de processos já processados

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

    // 🚀 CACHE INTELIGENTE PARA ELEMENTOS DOM
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
    `;
    document.head.appendChild(extensionStyle);

    // ===== INÍCIO DO SISTEMA DE PROCESSAMENTO DE DOCUMENTOS =====
    (function () {
        let debugMode = true;
        let isAutomationActive = false;

        // Configuração dos tipos de documentos relevantes
        const TIPOS_DOCUMENTO_RELEVANTE = {
            SENT1: { nome: "SENT1", descricao: "Sentença", dataNome: "SENT" },
            INIC1: {
                nome: "INIC1",
                descricao: "Petição Inicial",
                dataNome: "INIC",
            },
        };

        function log(message, ...args) {
            if (debugMode) {
                console.log("PROCESSAR DOCUMENTO:", message, ...args);
            }
        }

        // Detectar tipo de página e formato de documento
        function detectPageType() {
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
        }
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

            // Mostrar botão X apenas no hover do container
            containerTitulo.addEventListener("mouseenter", function () {
                botaoRemover.style.opacity = "1";
            });

            containerTitulo.addEventListener("mouseleave", function () {
                botaoRemover.style.opacity = "0";
            });

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

            // Adicionar hover
            opcaoSeparador.addEventListener("mouseenter", function () {
                this.style.backgroundColor = "#f8f9fa";
            });

            opcaoSeparador.addEventListener("mouseleave", function () {
                this.style.backgroundColor = "transparent";
            });

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
                            "⚠️ BOTÃO: Falha na criação, tentando novamente em 1s"
                        );
                        // Tentar novamente após 1 segundo
                        setTimeout(ensureButtonExists, 1000);
                    }
                }, 200);
            } else {
                console.log(
                    "❌ BOTÃO: Página não atende aos critérios, tentando novamente em 2s"
                );
                // Tentar novamente após 2 segundos em caso de página ainda carregando
                setTimeout(ensureButtonExists, 2000);
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

            // Construir seletor dinamicamente baseado nos tipos configurados
            const selectors = Object.values(TIPOS_DOCUMENTO_RELEVANTE)
                .map((tipo) => [
                    `a.infraLinkDocumento[data-nome="${tipo.dataNome}"]`,
                    `a[data-nome="${tipo.dataNome}"]`,
                ])
                .flat()
                .join(", ");

            const links = document.querySelectorAll(selectors);
            log(" Links de documentos relevantes encontrados:", links.length);

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

            return documentosRelevantes;
        }

        // Abrir documento relevante automaticamente (com suporte a múltiplos documentos)
        async function autoOpenDocumentoRelevante() {
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
        }

        // Extrair texto do documento
        async function autoExtractText() {
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
                        pdfCancelBtn.addEventListener("mouseenter", () => {
                            pdfCancelBtn.style.backgroundColor = "#91433d";
                            pdfCancelBtn.style.borderColor = "#91433d";
                        });

                        pdfCancelBtn.addEventListener("mouseleave", () => {
                            pdfCancelBtn.style.backgroundColor = "";
                            pdfCancelBtn.style.borderColor = "";
                        });

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
        }

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

        // Copiar para clipboard
        async function copyToClipboard(text) {
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

        // Copiar texto para clipboard com prefixo para IA
        async function copyToClipboardWithPrefix(texto) {
            try {
                const prefixo = `Faça um resumo extremamente sucinto do documento, em formato de apontamentos diretos (bullet points), para constar na capa do processo digital. Indique:

tipo de ação,

partes,

pedido(s) do autor,

decisão (improcedente/procedente/parcialmente procedente),

fundamentos centrais,

condenação (custas/honorários se houver).
Seja objetivo e direto, sem redação em texto corrido.

DOCUMENTO:

`;
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

        // Enviar texto diretamente para Perplexity usando API
        async function sendToPerplexity(texto) {
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

                const prompt = `Faça um resumo extremamente sucinto do documento, em formato de apontamentos diretos (bullet points), para constar na capa do processo digital. Indique:

tipo de ação,

partes,

pedido(s) do autor,

decisão (improcedente/procedente/parcialmente procedente),

fundamentos centrais,

condenação (custas/honorários se houver).
Seja objetivo e direto, sem redação em texto corrido.

DOCUMENTO:

${texto}`;

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
        }

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
                    openBtn.addEventListener("mouseenter", () => {
                        openBtn.style.backgroundColor =
                            "rgba(148, 163, 184, 0.1)";
                    });
                    openBtn.addEventListener("mouseleave", () => {
                        openBtn.style.backgroundColor = "transparent";
                    });
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
            cancelBtn.addEventListener("mouseenter", () => {
                cancelBtn.style.backgroundColor = "#4b5563";
            });
            cancelBtn.addEventListener("mouseleave", () => {
                cancelBtn.style.backgroundColor = "#6b7280";
            });
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
            processAllBtn.addEventListener("mouseenter", () => {
                processAllBtn.style.backgroundColor = "#047857";
            });
            processAllBtn.addEventListener("mouseleave", () => {
                processAllBtn.style.backgroundColor = "#059669";
            });
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

        // Automação completa
        async function runFullAutomation() {
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
        }

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

        // Função para configurar o observer de mudanças na interface
        function setupInterfaceObserver() {
            // Observer para detectar mudanças nos elementos da interface
            const observer = new MutationObserver((mutations) => {
                let shouldCheckOverlap = false;

                mutations.forEach((mutation) => {
                    // Se elementos foram adicionados ou removidos
                    if (mutation.type === "childList") {
                        mutation.addedNodes.forEach((node) => {
                            if (node.nodeType === Node.ELEMENT_NODE) {
                                const id = node.id;
                                if (
                                    id === "sent1-auto-button" ||
                                    id === "documento-relevante-notification" ||
                                    id === "documento-relevante-options-menu"
                                ) {
                                    shouldCheckOverlap = true;
                                }
                            }
                        });
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
                });

                if (shouldCheckOverlap) {
                    setTimeout(preventElementOverlap, 50);
                }
            });

            // Observar mudanças no body
            observer.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ["style"],
            });

            return observer;
        }

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

            // Adicionar eventos para hover e focus
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
                });
            });

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
     documento.magistradoInfo && documento.magistradoInfo.tipo === "magistrado"
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
           documento.magistradoInfo.tipo === "advogado"
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

            // Detecção de data da sessão otimizada
            setTimeout(() => {
                console.log(
                    "🔍 Tentando detectar data da sessão automaticamente..."
                );
                detectarDataSessao();
            }, 500); // Reduzido de 800ms para 500ms

            // Segunda tentativa de detecção otimizada
            setTimeout(() => {
                if (!hasDataSessaoPautado()) {
                    console.log(
                        "🔍 Segunda tentativa de detecção da data da sessão..."
                    );
                    detectarDataSessao();
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

            // Adicionar eventos para hover, focus e blur
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

        // 🧪 FUNÇÃO EXPERIMENTAL - Detecção de data da sessão com Semantic Kernel
        async function detectarDataSessaoExperimental() {
            console.log(
                "🧪 EXPERIMENTAL: Iniciando detecção de data da sessão com Semantic Kernel"
            );

            try {
                // Verificar se o Semantic Kernel está disponível
                if (typeof window.eProbeSemanticKernel !== "undefined") {
                    console.log(
                        "🤖 Semantic Kernel disponível - tentando detecção inteligente"
                    );

                    const textoCompleto =
                        document.body.innerText ||
                        document.body.textContent ||
                        "";

                    // Usar o Semantic Kernel para detecção inteligente
                    const resultadoIA =
                        await window.eProbeSemanticKernel.detectarDataSessao(
                            textoCompleto
                        );

                    if (resultadoIA && resultadoIA.dataEncontrada) {
                        console.log(
                            "✅ EXPERIMENTAL: Data detectada via IA:",
                            resultadoIA.dataFormatada
                        );

                        // Validar a data detectada
                        if (validarDataBrasileira(resultadoIA.dataFormatada)) {
                            // Salvar resultado usando a mesma estrutura da função original
                            dataSessaoPautado = {
                                dataOriginal: resultadoIA.dataFormatada,
                                dataFormatada: resultadoIA.dataFormatada,
                                contextoEncontrado:
                                    resultadoIA.contexto || "Detectado via IA",
                                metodoDeteccao: "semantic-kernel",
                                confianca: resultadoIA.confianca || 0.8,
                            };

                            processoComDataSessao = processoAtual;
                            console.log(
                                "✅ EXPERIMENTAL: Data da sessão salva via Semantic Kernel"
                            );

                            return dataSessaoPautado;
                        } else {
                            console.log(
                                "❌ EXPERIMENTAL: Data detectada via IA não é válida:",
                                resultadoIA.dataFormatada
                            );
                        }
                    } else {
                        console.log(
                            "⚠️ EXPERIMENTAL: Semantic Kernel não encontrou data da sessão"
                        );
                    }
                } else {
                    console.log(
                        "❌ EXPERIMENTAL: Semantic Kernel não está disponível"
                    );
                }

                // Fallback para método tradicional
                console.log(
                    "🔄 EXPERIMENTAL: Usando fallback para método tradicional"
                );
                return detectarDataSessao();
            } catch (error) {
                console.error(
                    "🚨 EXPERIMENTAL: Erro na detecção experimental:",
                    error
                );

                // Fallback para método tradicional em caso de erro
                console.log(
                    "🔄 EXPERIMENTAL: Fallback para método tradicional devido a erro"
                );
                return detectarDataSessao();
            }
        }

        // Inicializar - VERSÃO SEGURA (sem interferência na navbar)
        init();

        // Expor funções para debug manual
        window.SENT1_AUTO = {
            runFullAutomation,
            autoOpenDocumentoRelevante,
            autoExtractText,
            copyToClipboard,
            sendToPerplexity,
            detectPageType,
            isValidPageForButton,
            findDocumentosRelevantes,
            showDocumentSelectionModal,
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
            extractTextFromPDF,
            // Novas funções de detecção de data de sessão
            detectarDataSessao,
            getDataSessaoPautado,
            hasDataSessaoPautado,
            resetDataSessaoPautado,
            showDataSessaoPautadoInfo,
            validarDataBrasileira,
            // Funções de interface para data da sessão
            inserirDataSessaoNaInterface,
            removerDataSessaoDaInterface,
            atualizarDataSessaoNaInterface,
            forcarInsercaoCardSemValidacao, // <-- Adiciona a função ao namespace global
            // Funções de cruzamento de dados de sessão
            buscarDadosSessoes,
            parsearDadosSessoes,
            extrairDadosLinhaSessao,
            buscarSessaoPorData,
            cruzarDadosDataSessao,
            cruzarDadosDataSessao,
            getDadosCompletosSessionJulgamento,
            hasDadosCompletosSessionJulgamento,
            resetDadosCompletosSessionJulgamento,
            showDadosCompletosSessionJulgamento,
            // Funções de debug
            debugDeteccaoDataSessao,
            forcarDeteccaoDataSessao,
            // Função experimental com Semantic Kernel
            detectarDataSessaoExperimental,
            // Funções de interface reutilizável
            criarBotaoEleganteeProc,
            botaoBrancoCapaProcesso,
            criarInfraButtonPrimary,
            botaoAzuleProc,
            // Funções de localizadores
            detectarPaginaLocalizadores,
            processarTabelaLocalizadores,
            destacarLocalizadoresUrgentes,
            // Funções de status de sessão
            detectarStatusSessao,
            detectarDataSessaoComStatus,
            obterTextoCardPorStatus,
            obterCorCardPorStatus,
            getStatusSessao,
            hasStatusSessao,
            resetStatusSessao,
            showStatusSessaoInfo,
            // Nova função simplificada de cards
            detectarCardSessaoSimplificado,
            // Funções da navbar foram centralizadas em gerenciarNavbarEprobe()
        };

        // 🔍 FUNÇÕES DE DEBUG
        window.SENT1_AUTO.debugDeteccaoDataSessao = debugDeteccaoDataSessao;
        window.SENT1_AUTO.forcarDeteccaoDataSessao = forcarDeteccaoDataSessao;
        // 🔍 FUNÇÕES DE DEBUG PARA STATUS
        window.SENT1_AUTO.debugDeteccaoStatusSessao = detectarStatusSessao;
        window.SENT1_AUTO.debugPadraoRetirado = debugPadraoRetirado;
        window.SENT1_AUTO.debugStatusCompleto = debugStatusCompleto;
        window.SENT1_AUTO.forcarAtualizacaoStatus = forcarAtualizacaoStatus;
        window.SENT1_AUTO.testarCasoRetirado = testarCasoRetirado;
        window.SENT1_AUTO.debugStatusSessao = showStatusSessaoInfo;
        window.SENT1_AUTO.testarSistemaStatusSessao = testarSistemaStatusSessao;
        // 🧪 FUNÇÕES DE TESTE SIMPLIFICADO
        // window.SENT1_AUTO.testarDeteccaoSimplificada = testarDeteccaoSimplificada; // FUNÇÃO NÃO DEFINIDA - REMOVIDA
        window.SENT1_AUTO.debugPadroesStatusSessao = debugPadroesStatusSessao;
        window.SENT1_AUTO.forcarStatusSessao = forcarStatusSessao;
        window.SENT1_AUTO.encontrarTextoRetirado = encontrarTextoRetirado;
        window.SENT1_AUTO.forcarDeteccaoCompleta = forcarDeteccaoCompleta;

        // 🔍 FUNÇÕES DE DIAGNÓSTICO E CORREÇÃO
        window.SENT1_AUTO.diagnosticarCompleto = diagnosticarCompleto;
        window.SENT1_AUTO.corrigirProblemas = corrigirProblemas;
        window.SENT1_AUTO.forcarReaplicacaoIcones = forcarReaplicacaoIcones;
        window.SENT1_AUTO.inicializarSubstituicaoIcones =
            inicializarSubstituicaoIcones;
        window.SENT1_AUTO.diagnosticarIconesCSS = diagnosticarIconesCSS;

        // 🔧 FUNÇÕES DE DEBUG PARA CRIAÇÃO DE BOTÃO
        window.SENT1_AUTO.debugButtonCreation = debugButtonCreation;
        window.SENT1_AUTO.forceCreateButton = forceCreateButton;
        window.SENT1_AUTO.ensureButtonExists = ensureButtonExists;
        window.SENT1_AUTO.shouldShowIntegratedButton =
            shouldShowIntegratedButton;
        window.SENT1_AUTO.shouldShowFloatingButton = shouldShowFloatingButton;

        // 🌐 FUNÇÕES GLOBAIS PARA DADOS DA SESSÃO
        window.SENT1_AUTO.getTipoJulgamentoProcessoPautado =
            getTipoJulgamentoProcessoPautado;
        window.SENT1_AUTO.setTipoJulgamentoProcessoPautado =
            setTipoJulgamentoProcessoPautado;
        window.SENT1_AUTO.getStatusJulgamento = getStatusJulgamento;
        window.SENT1_AUTO.setStatusJulgamento = setStatusJulgamento;
        window.SENT1_AUTO.getDataSessao = getDataSessao;
        window.SENT1_AUTO.setDataSessao = setDataSessao;
        window.SENT1_AUTO.resetDadosGlobaisSessao = resetDadosGlobaisSessao;
        window.SENT1_AUTO.showDadosGlobaisSessao = showDadosGlobaisSessao;
        window.SENT1_AUTO.examinarEstruturaHTMLDados =
            examinarEstruturaHTMLDados;
        window.SENT1_AUTO.buscarPadroesEspecificosImagens =
            buscarPadroesEspecificosImagens;

        // 🔧 FUNÇÕES DE DIAGNÓSTICO DE ÍCONES CSS
        window.SENT1_AUTO.diagnosticarIconesCSS = diagnosticarIconesCSS;
        window.SENT1_AUTO.forcarReaplicacaoIcones = forcarReaplicacaoIcones;
        window.SENT1_AUTO.forcarRecriacaoCardSessao = forcarRecriacaoCardSessao;
        window.SENT1_AUTO.encontrarContainerParaCard =
            encontrarContainerParaCard;

        // 🔥 FUNÇÕES DE CONTROLE DE PERFORMANCE ULTRA
        window.SENT1_AUTO.ativarModoUltraPerformance = function () {
            MODO_ULTRA_PERFORMANCE = true;
            console.log(
                "🔥 PERFORMANCE: Modo ultra-performance ATIVADO - operações custosas desabilitadas"
            );
            return true;
        };

        window.SENT1_AUTO.desativarModoUltraPerformance = function () {
            MODO_ULTRA_PERFORMANCE = false;
            console.log(
                "✅ PERFORMANCE: Modo ultra-performance DESATIVADO - todas as operações habilitadas"
            );
            return false;
        };

        window.SENT1_AUTO.statusModoUltraPerformance = function () {
            const status = MODO_ULTRA_PERFORMANCE ? "ATIVO" : "INATIVO";
            console.log(
                `📊 PERFORMANCE: Modo ultra-performance está ${status}`
            );
            return MODO_ULTRA_PERFORMANCE;
        };

        // 📋 NAMESPACE ESPECÍFICO PARA LOCALIZADORES
        // Estrutura preparada para futuras funcionalidades da página de localizadores
        window.SENT1_AUTO.localizadores = {
            detectarPagina: detectarPaginaLocalizadores,
            processarTabela: processarTabelaLocalizadores,
            destacarUrgentes: destacarLocalizadoresUrgentes,
            criarDivisor: criarDivisorEditavel,
            adicionarInterface: adicionarInterfaceSeparadores,
            adicionarTextoInformativo: adicionarTextoInformativoSeparadores,
            adicionarMenuContexto: adicionarMenuContextoLinhas,
            mostrarMenuContexto: mostrarMenuContextoSeparador,
            debug: debugLocalizadores,
            // Funções de persistência de separadores
            salvarSeparadores: salvarSeparadores,
            carregarSeparadores: carregarSeparadores,
            restaurarSeparadores: restaurarSeparadores,
            limparTodosSeparadores: limparTodosSeparadores,
            salvarAlteracaoSeparador: salvarAlteracaoSeparador,
            // Funções para gerenciar separadores removidos
            salvarSeparadoresRemovidos: salvarSeparadoresRemovidos,
            carregarSeparadoresRemovidos: carregarSeparadoresRemovidos,
            // Espaço reservado para futuras funções:
            // processarEmLote: null,
            // criarDashboard: null,
            // adicionarFiltros: null,
        };

        // 🔍 FUNÇÕES DE DEBUG - Para investigar problemas com o card
        function debugDeteccaoDataSessao() {
            console.log(
                "🔍 DEBUG: Iniciando debug da detecção de data da sessão"
            );

            // 1. Verificar estado atual
            console.log("📊 Estado atual:");
            console.log(
                `   - Data detectada: ${
                    hasDataSessaoPautado()
                        ? getDataSessaoPautado().dataFormatada
                        : "NÃO"
                }`
            );
            console.log(
                `   - Processo atual: ${processoAtual || "não identificado"}`
            );
            console.log(
                `   - Já processado: ${
                    processoAtual
                        ? processoJaFoiProcessado(processoAtual)
                        : "N/A"
                }`
            );
            console.log(
                `   - Card na interface: ${
                    document.getElementById("eprobe-data-sessao")
                        ? "SIM"
                        : "NÃO"
                }`
            );

            // 2. Verificar texto da página
            const textoCompleto = document.body.innerText;
            console.log(
                `📄 Texto da página: ${textoCompleto.length} caracteres`
            );

            // 3. Testar padrões de busca
            const padroes = [
                /(?:data\s*da\s*sess[aã]o|sess[aã]o\s*(?:de|em|para|:)?)\s*:?\s*(\d{1,2}\/\d{1,2}\/\d{4})/i,
                /(?:julgamento\s*(?:em|para|:)|para\s*julgamento)\s*:?\s*(\d{1,2}\/\d{1,2}\/\d{4})/i,
                /(?:pautado|agendar|agendado|marcado).*?(\d{1,2}\/\d{1,2}\/\d{4})/i,
            ];

            padroes.forEach((padrao, index) => {
                const match = textoCompleto.match(padrao);
                if (match) {
                    console.log(
                        `✅ Padrão ${index + 1}: Encontrado "${match[1]}"`
                    );
                } else {
                    console.log(`❌ Padrão ${index + 1}: Não encontrado`);
                }
            });

            // 4. Verificar container alvo
            const container = document.querySelector(
                "#frmProcessoLista #divInfraAreaDados #divInfraAreaProcesso #fldCapa #divCapaProcesso .row.mt-2"
            );
            console.log(
                `🎯 Container alvo: ${
                    container ? "ENCONTRADO" : "NÃO ENCONTRADO"
                }`
            );

            if (container) {
                console.log(`   - TagName: ${container.tagName}`);
                console.log(`   - ID: ${container.id}`);
                console.log(`   - Classes: ${container.className}`);
                console.log(`   - Filhos: ${container.children.length}`);
            }

            // 5. Listar containers alternativos
            const alternativas = [
                "#frmProcessoLista #divInfraAreaDados #divInfraAreaProcesso #fldCapa #divCapaProcesso",
                "#divCapaProcesso .row",
                "#fldCapa .row",
                ".row.mt-2",
            ];

            console.log("🔍 Containers alternativos:");
            alternativas.forEach((seletor, index) => {
                const elemento = document.querySelector(seletor);
                console.log(
                    `   ${index + 1}. ${seletor}: ${
                        elemento ? "ENCONTRADO" : "NÃO ENCONTRADO"
                    }`
                );
            });

            // 6. Testar inserção do card
            if (hasDataSessaoPautado()) {
                console.log("🧪 Testando inserção do card...");
                const resultadoInsercao = inserirDataSessaoNaInterface();
                console.log(
                    `🎯 Resultado da inserção: ${
                        resultadoInsercao ? "SUCESSO" : "FALHA"
                    }`
                );
            }
        }

        function forcarDeteccaoDataSessao() {
            console.log("🔄 FORÇA: Forçando nova detecção de data da sessão");

            // 1. Resetar estado
            resetDataSessaoPautado();
            processoAtual = null;

            // 2. Remover card se existir
            const cardExistente = document.getElementById("eprobe-data-sessao");
            if (cardExistente) {
                cardExistente.remove();
                console.log("🗑️ Card existente removido");
            }

            // 3. Forçar detecção
            const dataDetectada = detectarDataSessao();

            if (dataDetectada) {
                console.log(
                    `✅ Data detectada: ${dataDetectada.dataFormatada}`
                );

                // 4. Tentar inserir card imediatamente
                const sucesso = inserirDataSessaoNaInterface();
                console.log(
                    `🎯 Inserção do card: ${sucesso ? "SUCESSO" : "FALHA"}`
                );

                if (sucesso) {
                    // Marcar processo como processado apenas após inserção bem-sucedida
                    marcarProcessoComoProcessado(processoAtual);
                    console.log(
                        "🔐 Processo marcado como processado após inserção do card"
                    );
                }
            } else {
                console.log("❌ Nenhuma data detectada");
            }
        }

        // 🧪 FUNÇÃO DE TESTE PARA VERIFICAR INSERÇÃO DO CARD
        function testarInsercaoCard() {
            console.log("🧪 TESTE: Verificando inserção do card");

            // 1. Verificar se há data detectada
            if (!hasDataSessaoPautado()) {
                console.log(
                    "❌ TESTE: Nenhuma data detectada - forçando detecção"
                );
                forcarDeteccaoDataSessao();
                return;
            }

            console.log(
                `✅ TESTE: Data detectada: ${
                    getDataSessaoPautado().dataFormatada
                }`
            );

            // 2. Remover card existente se houver
            const cardExistente = document.getElementById("eprobe-data-sessao");
            if (cardExistente) {
                cardExistente.remove();
                console.log("🗑️ TESTE: Card existente removido");
            }

            // 3. Tentar inserir card
            console.log("🎯 TESTE: Tentando inserir card...");
            const sucesso = inserirDataSessaoNaInterface();

            if (sucesso) {
                console.log("✅ TESTE: Card inserido com sucesso!");
                const cardInserido =
                    document.getElementById("eprobe-data-sessao");
                if (cardInserido) {
                    console.log("✅ TESTE: Card confirmado no DOM");
                    console.log("🎯 TESTE: Elemento:", cardInserido);
                    return true;
                } else {
                    console.log(
                        "❌ TESTE: Card não encontrado no DOM após inserção"
                    );
                    return false;
                }
            } else {
                console.log("❌ TESTE: Falha na inserção do card");
                return false;
            }
        }

        // 🚨 FUNÇÃO PARA FORÇAR INSERÇÃO DO CARD SEM VALIDAÇÃO
        function forcarInsercaoCardSemValidacao() {
            console.log("🚨 FORÇA: Forçando inserção do card sem validações");

            // 1. Verificar se há data detectada
            if (!hasDataSessaoPautado()) {
                console.log(
                    "❌ FORÇA: Nenhuma data detectada - tentando detectar"
                );

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
                const dataDetectada = detectarDataSessao();

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
        // VARIÁVEIS GLOBAIS PARA DADOS DE SESSÃO
        // ========================================

        // ========================================
        // FUNÇÕES DE ANÁLISE DE ESTRUTURA HTML
        // ========================================

        /**
         * 🔍 FUNÇÃO PARA EXAMINAR ESTRUTURA HTML DOS DADOS
         * Analisa a estrutura específica dos dados de minutas conforme aparece no DOM
         */
        function examinarEstruturaHTMLDados() {
            console.log(
                "🔍 EXAME: Analisando estrutura HTML dos dados de minutas"
            );

            // 1. Procurar por elementos com padrão imgMinutas_
            const elementosImgMinutas = document.querySelectorAll(
                '[id*="imgMinutas_"]'
            );
            console.log(
                `📊 EXAME: Encontrados ${elementosImgMinutas.length} elementos imgMinutas_`
            );

            elementosImgMinutas.forEach((img, index) => {
                console.log(`📷 IMG ${index + 1}:`, {
                    id: img.id,
                    src: img.src,
                    style: img.getAttribute("style"),
                    parent: img.parentElement?.tagName,
                    parentId: img.parentElement?.id,
                });
            });

            // 2. Procurar por elementos com padrão carregandoMinutas_
            const elementosCarregando = document.querySelectorAll(
                '[id*="carregandoMinutas_"]'
            );
            console.log(
                `⏳ EXAME: Encontrados ${elementosCarregando.length} elementos carregandoMinutas_`
            );

            elementosCarregando.forEach((elem, index) => {
                console.log(`⏳ CARREGANDO ${index + 1}:`, {
                    id: elem.id,
                    tagName: elem.tagName,
                    innerHTML: elem.innerHTML.substring(0, 200) + "...",
                    style: elem.getAttribute("style"),
                });
            });

            // 3. Procurar por elementos relacionados a minutas
            const elementosMinutas = document.querySelectorAll(
                '[id*="Minutas"], [class*="minutas"]'
            );
            console.log(
                `📋 EXAME: Encontrados ${elementosMinutas.length} elementos relacionados a minutas`
            );

            elementosMinutas.forEach((elem, index) => {
                console.log(`📋 MINUTAS ${index + 1}:`, {
                    id: elem.id,
                    className: elem.className,
                    tagName: elem.tagName,
                    textContent: elem.textContent?.substring(0, 100) + "...",
                });
            });

            // 4. Procurar especificamente pelo fieldset #fldMinutas
            const fieldsetMinutas = document.getElementById("fldMinutas");
            if (fieldsetMinutas) {
                console.log("📁 FIELDSET #fldMinutas encontrado:");
                console.log(
                    "   innerHTML:",
                    fieldsetMinutas.innerHTML.substring(0, 500) + "..."
                );
                console.log(
                    "   textContent:",
                    fieldsetMinutas.textContent?.substring(0, 200) + "..."
                );

                // Analisar filhos diretos
                const filhosDirectos = Array.from(fieldsetMinutas.children);
                console.log(`👶 FILHOS DIRETOS (${filhosDirectos.length}):`);
                filhosDirectos.forEach((filho, index) => {
                    console.log(
                        `   ${index + 1}. ${filho.tagName}#${
                            filho.id || "sem-id"
                        }.${filho.className || "sem-classe"}`
                    );
                });
            } else {
                console.log("❌ FIELDSET #fldMinutas NÃO encontrado");
            }

            // 5. Procurar por URLs com padrão /emf2wls/image/
            const elementosEmf2wls = document.querySelectorAll(
                '[src*="/emf2wls/image/"], [href*="/emf2wls/image/"]'
            );
            console.log(
                `🖼️ EXAME: Encontrados ${elementosEmf2wls.length} elementos com /emf2wls/image/`
            );

            elementosEmf2wls.forEach((elem, index) => {
                console.log(`🖼️ EMF2WLS ${index + 1}:`, {
                    tagName: elem.tagName,
                    src: elem.src || elem.href,
                    id: elem.id,
                    parentId: elem.parentElement?.id,
                });
            });

            // 6. Verificar se há textos que contêm padrões de data e status
            const textoCompleto = document.body.innerText;
            const padroesRelevantes = [
                /Incluído em Pauta em \d{1,2}\/\d{1,2}\/\d{4}/gi,
                /Julgado em Pauta em \d{1,2}\/\d{1,2}\/\d{4}/gi,
                /Retirado em Pauta em \d{1,2}\/\d{1,2}\/\d{4}/gi,
            ];

            console.log(
                "🎯 EXAME: Procurando padrões de status no texto da página:"
            );
            padroesRelevantes.forEach((padrao, index) => {
                const matches = textoCompleto.match(padrao);
                if (matches) {
                    console.log(
                        `   Padrão ${index + 1}: ${matches.length} ocorrências`
                    );
                    matches.slice(0, 3).forEach((match, i) => {
                        console.log(`      ${i + 1}. "${match}"`);
                    });
                }
            });

            return {
                imgMinutas: elementosImgMinutas.length,
                carregandoMinutas: elementosCarregando.length,
                elementosMinutas: elementosMinutas.length,
                fieldsetMinutas: !!fieldsetMinutas,
                emf2wlsElements: elementosEmf2wls.length,
            };
        }

        /**
         * 🕵️ FUNÇÃO PARA BUSCAR PADRÕES ESPECÍFICOS DAS IMAGENS
         * Procura especificamente pelos elementos e padrões mostrados nas capturas de tela
         */
        function buscarPadroesEspecificosImagens() {
            console.log(
                "🕵️ BUSCA: Procurando padrões específicos das imagens fornecidas"
            );

            // 1. Buscar elementos com IDs numéricos longos (como nas imagens)
            const elementosComIDsNumericos = document.querySelectorAll(
                '[id*="32175467189847165351355856"], [id*="3217424566125742584153747693"]'
            );
            console.log(
                `🔢 BUSCA: Encontrados ${elementosComIDsNumericos.length} elementos com IDs numéricos longos`
            );

            elementosComIDsNumericos.forEach((elem, index) => {
                console.log(`🔢 ELEMENTO ${index + 1}:`, {
                    id: elem.id,
                    tagName: elem.tagName,
                    src: elem.src || "N/A",
                    parentId: elem.parentElement?.id,
                    nextSibling:
                        elem.nextSibling?.textContent?.substring(0, 50) ||
                        "N/A",
                });
            });

            // 2. Buscar especificamente imagens com src="/emf2wls/image/gif"
            const imagensEmf2wls = document.querySelectorAll(
                'img[src*="/emf2wls/image/gif"]'
            );
            console.log(
                `🖼️ BUSCA: Encontradas ${imagensEmf2wls.length} imagens emf2wls/gif`
            );

            imagensEmf2wls.forEach((img, index) => {
                console.log(`🖼️ IMAGEM ${index + 1}:`, {
                    id: img.id,
                    src: img.src,
                    style: img.getAttribute("style"),
                    width: img.style.width,
                    height: img.style.height,
                    opacity: img.style.opacity,
                    contextoPai:
                        img.parentElement?.innerHTML?.substring(0, 100) + "...",
                });

                // Verificar se há texto próximo que contenha informações de sessão
                const elementoPai = img.parentElement;
                if (elementoPai) {
                    const textoContexto = elementoPai.textContent || "";
                    const padroesRelevantes = [
                        /Mérito.*Retirado.*Pauta.*\d{1,2}\/\d{1,2}\/\d{4}/i,
                        /Mérito.*Incluído.*Pauta.*\d{1,2}\/\d{1,2}\/\d{4}/i,
                        /Mérito.*Julgado.*Pauta.*\d{1,2}\/\d{1,2}\/\d{4}/i,
                    ];

                    padroesRelevantes.forEach((padrao, pIndex) => {
                        if (padrao.test(textoContexto)) {
                            console.log(
                                `   ✅ Padrão ${
                                    pIndex + 1
                                } encontrado no contexto:`,
                                textoContexto.match(padrao)[0]
                            );
                        }
                    });
                }
            });

            // 3. Buscar elementos com onclick contendo "harliamentorHTML"
            const elementosComHarliament = document.querySelectorAll(
                '[onclick*="harliamentorHTML"]'
            );
            console.log(
                `🏛️ BUSCA: Encontrados ${elementosComHarliament.length} elementos com harliamentorHTML`
            );

            elementosComHarliament.forEach((elem, index) => {
                console.log(`🏛️ HARLIAMENT ${index + 1}:`, {
                    tagName: elem.tagName,
                    onclick: elem.getAttribute("onclick"),
                    id: elem.id,
                    textContent: elem.textContent?.substring(0, 100) + "...",
                });
            });

            // 4. Buscar especificamente pelo padrão "Mérito (Retirado em Pauta em 10/04/2025 - CAMPUB5)"
            const textoCompleto = document.body.innerText;
            const padraoEspecifico =
                /Mérito\s*\(Retirado\s+em\s+Pauta\s+em\s+(\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/gi;
            const matchesEspecificos = textoCompleto.match(padraoEspecifico);

            console.log(
                "🎯 BUSCA: Procurando padrão específico 'Mérito (Retirado em Pauta em...':"
            );
            if (matchesEspecificos) {
                console.log(
                    `   ✅ Encontradas ${matchesEspecificos.length} ocorrências:`
                );
                matchesEspecificos.forEach((match, index) => {
                    console.log(`      ${index + 1}. "${match}"`);
                });
            } else {
                console.log("   ❌ Padrão específico não encontrado");
            }

            // 5. Buscar por todos os elementos que contêm texto relacionado a datas de sessão
            const elementosComDatasSessao = [];
            document.querySelectorAll("*").forEach((elem) => {
                const texto = elem.textContent || "";
                if (
                    /\d{2}\/\d{2}\/\d{4}.*(?:CAMPUB|TJSC)/i.test(texto) &&
                    elem.children.length === 0
                ) {
                    elementosComDatasSessao.push({
                        elemento: elem,
                        texto: texto.trim(),
                        tagName: elem.tagName,
                        id: elem.id,
                        className: elem.className,
                    });
                }
            });

            console.log(
                `📅 BUSCA: Encontrados ${elementosComDatasSessao.length} elementos com datas de sessão:`
            );
            elementosComDatasSessao.slice(0, 5).forEach((item, index) => {
                console.log(
                    `   ${index + 1}. ${item.tagName}#${
                        item.id
                    }: "${item.texto.substring(0, 80)}..."`
                );
            });

            return {
                elementosIDsNumericos: elementosComIDsNumericos.length,
                imagensEmf2wls: imagensEmf2wls.length,
                elementosHarliament: elementosComHarliament.length,
                padraoEspecificoEncontrado: !!matchesEspecificos,
                quantidadeMatchesEspecificos: matchesEspecificos?.length || 0,
                elementosComDatasSessao: elementosComDatasSessao.length,
            };
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
                timestamp: new Date().toLocaleString("pt-BR"),
                url: window.location.href,
                modoUltraPerformance: MODO_ULTRA_PERFORMANCE,
                funcionalidades: {},
            };

            // 1. Verificar detecção de data da sessão
            console.log("📅 Verificando detecção de data da sessão...");
            const temDataSessao = hasDataSessaoPautado();
            diagnostico.funcionalidades.dataSessao = {
                detectada: temDataSessao,
                valor: temDataSessao ? getDataSessaoPautado() : null,
                processoAtual: processoAtual,
            };

            // 2. Verificar botão "Resumir Documento"
            console.log("🔘 Verificando botão Resumir Documento...");
            const botaoExiste =
                document.getElementById("eprobe-btn") !== null ||
                document.getElementById("documento-relevante-auto-button") !==
                    null ||
                document.getElementById("sent1-auto-button") !== null;

            const botaoID = document.getElementById("eprobe-btn")
                ? "eprobe-btn"
                : document.getElementById("documento-relevante-auto-button")
                ? "documento-relevante-auto-button"
                : document.getElementById("sent1-auto-button")
                ? "sent1-auto-button"
                : "nenhum";

            diagnostico.funcionalidades.botaoResumir = {
                existe: botaoExiste,
                id: botaoID,
                elemento: botaoExiste ? "Encontrado" : "Não encontrado",
            };

            // 3. Verificar substituição de ícones
            console.log("🎨 Verificando substituição de ícones...");
            const iconeSubstituido =
                document.querySelector("[data-eprobe-icon-replaced]") !== null;
            diagnostico.funcionalidades.substituicaoIcones = {
                aplicada: iconeSubstituido,
                quantidade: document.querySelectorAll(
                    "[data-eprobe-icon-replaced]"
                ).length,
            };

            // 4. Verificar sistema de temas
            console.log("🎨 Verificando sistema de temas...");
            const temaTemaAplicado =
                document.querySelector(".eprobe-theme-applied") !== null;
            diagnostico.funcionalidades.sistemaTheme = {
                aplicado: temaTemaAplicado,
                funcaoDisponivel: typeof window.applyThemeStyles === "function",
            };

            // 5. Verificar namespace SENT1_AUTO
            console.log("📦 Verificando namespace SENT1_AUTO...");
            diagnostico.namespace = {
                existe: typeof window.SENT1_AUTO === "object",
                funcoes: window.SENT1_AUTO
                    ? Object.keys(window.SENT1_AUTO).length
                    : 0,
            };

            console.log("📊 DIAGNÓSTICO COMPLETO:", diagnostico);
            return diagnostico;
        }

        /**
         * Função de correção automática para problemas detectados
         * Tenta resolver os problemas mais comuns automaticamente
         */
        function corrigirProblemas() {
            console.log(
                "🔧 CORREÇÃO: Iniciando correção automática de problemas"
            );

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
                document.querySelectorAll("[data-eprobe-icon-replaced]")
                    .length === 0
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
                    const dataDetectada = detectarDataSessao();
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
                    console.log(
                        "🎨 Reaplicando ícones no fieldset de ações..."
                    );
                    substituirIconesFieldsetAcoes();
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
            const fieldsetAcoes = document.querySelector(
                "#fldAcoes.infraFieldset"
            );
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
            console.log(
                "   Tipo de Julgamento:",
                TipoJulgamentoProcessoPautado
            );
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
                // MÉTODO SIMPLIFICADO: Buscar primeiro pelo botão infraLegendObrigatorio
                const resultadoSimplificado = detectarCardSessaoSimplificado();
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
                    console.log(
                        "⚠️ STATUS: Usando página completa como fallback"
                    );
                }

                if (!textoCompleto || textoCompleto.trim() === "") {
                    console.log(
                        "❌ STATUS: Nenhum texto encontrado para análise"
                    );
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

                // Buscar padrões
                for (const padrao of padroes) {
                    padrao.regex.lastIndex = 0;
                    const match = textoCompleto.match(padrao.regex);

                    if (match) {
                        padrao.regex.lastIndex = 0;
                        const detalhes = padrao.regex.exec(textoCompleto);

                        if (detalhes) {
                            const tipoProcesso = detalhes[1]?.trim();
                            const dataEncontrada = detalhes[2];
                            const orgao = detalhes[3];

                            console.log(
                                `✅ STATUS: ${padrao.status} encontrado - Tipo: ${tipoProcesso}, Data: ${dataEncontrada}`
                            );

                            const dataValidada =
                                validarDataBrasileira(dataEncontrada);
                            if (dataValidada) {
                                // Salvar nas funções globais
                                setTipoJulgamentoProcessoPautado(tipoProcesso);
                                setStatusJulgamento(padrao.statusCompleto);
                                setDataSessao(dataEncontrada);

                                return {
                                    status: padrao.status,
                                    tipoProcesso: tipoProcesso,
                                    data: dataValidada,
                                    orgao: orgao,
                                    textoCompleto: detalhes[0],
                                };
                            }
                        }
                    }
                }

                console.log("❌ STATUS: Nenhum padrão encontrado");
                return null;
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

        /**
         * Atualiza a função principal de detecção para incluir status
         * @returns {Object|null} - Dados da sessão com status
         */
        function detectarDataSessaoComStatus() {
            console.log("🔍 SESSÃO+STATUS: Detectando data e status da sessão");

            // Primeiro detectar o status
            const statusSessao = detectarStatusSessao();

            if (statusSessao) {
                console.log(
                    `✅ SESSÃO+STATUS: Status detectado: ${statusSessao.status}`
                );

                // Se encontrou status, usar a data do status
                dataSessaoPautado = statusSessao.data;
                processoComDataSessao = processoAtual;

                // Adicionar informações de status à data
                dataSessaoPautado.statusSessao = statusSessao;

                return statusSessao;
            } else {
                // Fallback para detecção original sem status específico
                console.log(
                    "ℹ️ SESSÃO+STATUS: Status específico não encontrado, usando detecção padrão"
                );
                return detectarDataSessao();
            }
        }

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
            console.log(
                "🧪 DEBUG STATUS COMPLETO: Verificando detecção de status"
            );

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
            const textoTeste =
                "Mérito (Retirado em Pauta em 10/04/2025 - CAMPUB5)";
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
                console.log(
                    "🔍 Texto 'retirado em pauta' encontrado na página"
                );
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
            console.log(
                "🧪 TESTE: Iniciando teste completo do sistema de status"
            );

            try {
                // 1. Verificar se há data de sessão detectada
                const temDataSessao = hasDataSessaoPautado();
                console.log(
                    `📊 Data de sessão detectada: ${
                        temDataSessao ? "SIM" : "NÃO"
                    }`
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
                    console.log(
                        `📅 Data: ${statusDetectado.data.dataFormatada}`
                    );
                    console.log(`🏛️ Órgão: ${statusDetectado.orgao}`);
                }

                // 3. Testar funções de texto e cor
                const textoCard = obterTextoCardPorStatus(statusDetectado);
                const corCard = obterCorCardPorStatus(statusDetectado);

                console.log(`🎨 Texto do card: "${textoCard}"`);
                console.log(`🎨 Cor do card: ${corCard}`);

                // 4. Verificar interface
                const cardExiste =
                    document.getElementById("eprobe-data-sessao");
                console.log(
                    `🖼️ Card na interface: ${cardExiste ? "SIM" : "NÃO"}`
                );

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
                            `✅ MATCH ENCONTRADO! (${
                                matches.length
                            } ocorrência${matches.length > 1 ? "s" : ""})`
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
                        `   "${termo}": ${
                            matches ? matches.length : 0
                        } ocorrência${
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
                console.error(
                    "❌ DEBUG: Erro durante debug dos padrões:",
                    error
                );
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
                    console.log(
                        "🖼️ Atualizando interface com status forçado..."
                    );

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
                const cardExistente =
                    document.getElementById("eprobe-data-sessao");
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
                console.error(
                    "❌ Erro ao forçar atualização de status:",
                    error
                );
                return null;
            }
        }

        /**
         * Testa especificamente o caso "Retirado em Pauta"
         */
        function testarCasoRetirado() {
            console.log(
                "🧪 TESTE: Testando caso específico 'Retirado em Pauta'"
            );

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
                console.log(
                    "❌ FALHA: Regex não funcionou com o texto de exemplo"
                );
            }

            // Buscar na seção específica das minutas
            console.log("🔍 Procurando na seção de minutas...");
            const minutasElement = document.getElementById("fldMinutas");
            if (minutasElement) {
                const textoMinutas =
                    minutasElement.innerText ||
                    minutasElement.textContent ||
                    "";
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
                        console.log(
                            "✅ RESULTADO DAS MINUTAS:",
                            resultadoMinutas
                        );
                        return resultadoMinutas;
                    }
                } else {
                    console.log(
                        "❌ Padrão 'Retirado' não encontrado nas minutas"
                    );

                    // Verificar padrões mais simples
                    if (/retirado/i.test(textoMinutas)) {
                        console.log(
                            "⚠️ Palavra 'retirado' encontrada nas minutas"
                        );
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
                    console.log(
                        "❌ Palavra 'retirado' não encontrada na página"
                    );
                }
            }

            return null;
        }

        /**
         * Debug completo do status da sessão
         */
        function debugStatusCompleto() {
            console.log(
                "🧪 DEBUG STATUS COMPLETO: Verificando detecção de status"
            );

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
            const textoTeste =
                "Mérito (Retirado em Pauta em 10/04/2025 - CAMPUB5)";
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
                console.log(
                    "🔍 Texto 'retirado em pauta' encontrado na página"
                );
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
                    const texto =
                        elemento.innerText || elemento.textContent || "";
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
                        .filter(
                            (item) => item.str && item.str.trim().length > 0
                        )
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
                        .filter(
                            (item) => item.str && item.str.trim().length > 0
                        )
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
                        if (
                            navigator.clipboard &&
                            navigator.clipboard.readText
                        ) {
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
            const isMagistrado =
                /juiz|juíz|magistrad|vara|gabinete|comarca/i.test(textoLimpo);

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
                                palavra.charAt(0).toUpperCase() +
                                palavra.slice(1)
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
                                palavra.charAt(0).toUpperCase() +
                                palavra.slice(1)
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

        // Inicializar observer para prevenir sobreposições
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", () => {
                setupInterfaceObserver();
            });
        } else {
            setupInterfaceObserver();
        }

        // Função auxiliar para validar data brasileira
        // 🔍 IDENTIFICAR PROCESSO - Extrair número do processo atual
        function obterNumeroProcesso() {
            console.log("🔍 PROCESSO: Tentando identificar número do processo");

            // Buscar em diferentes lugares da página
            const selectors = [
                'span:contains("Processo nº")',
                'div:contains("Processo nº")',
                'span:contains("Processo:")',
                'div:contains("Processo:")',
                '[id*="processo"]',
                '[class*="processo"]',
                'span[title*="processo"]',
                'div[title*="processo"]',
            ];

            // Buscar no texto completo da página
            const textoCompleto = document.body.innerText;

            // Padrões para encontrar número do processo
            const padroes = [
                /processo\s*n[º°]?\s*:?\s*(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})/i,
                /processo\s*:?\s*(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})/i,
                /n[º°]\s*(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})/i,
                /(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})/i,
                /processo\s*[\s\S]*?(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})/i,
            ];

            for (const padrao of padroes) {
                const match = textoCompleto.match(padrao);
                if (match) {
                    const numeroProcesso = match[1];
                    console.log(`✅ PROCESSO: Encontrado: ${numeroProcesso}`);
                    return numeroProcesso;
                }
            }

            // Tentar buscar na URL
            const url = window.location.href;
            const urlMatch = url.match(
                /(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})/
            );
            if (urlMatch) {
                const numeroProcesso = urlMatch[1];
                console.log(
                    `✅ PROCESSO: Encontrado na URL: ${numeroProcesso}`
                );
                return numeroProcesso;
            }

            // Tentar buscar no título da página
            const titulo = document.title;
            const tituloMatch = titulo.match(
                /(\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4})/
            );
            if (tituloMatch) {
                const numeroProcesso = tituloMatch[1];
                console.log(
                    `✅ PROCESSO: Encontrado no título: ${numeroProcesso}`
                );
                return numeroProcesso;
            }

            console.log(
                "⚠️ PROCESSO: Não foi possível identificar o número do processo"
            );
            return null;
        }

        // 🔐 VERIFICAR SE PROCESSO JÁ FOI PROCESSADO
        function processoJaFoiProcessado(numeroProcesso) {
            if (!numeroProcesso) return false;

            const jaProcessado = processosJaProcessados.has(numeroProcesso);
            console.log(
                `🔐 VERIFICAÇÃO: Processo ${numeroProcesso} já processado? ${jaProcessado}`
            );
            return jaProcessado;
        }

        // 🔐 MARCAR PROCESSO COMO PROCESSADO
        function marcarProcessoComoProcessado(numeroProcesso) {
            if (!numeroProcesso) return;

            processosJaProcessados.add(numeroProcesso);
            console.log(
                `🔐 MARCADO: Processo ${numeroProcesso} marcado como processado`
            );
            console.log(
                `🔐 TOTAL: ${processosJaProcessados.size} processos processados nesta sessão`
            );
        }

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

        // Função principal para detectar data da sessão - VERSÃO OTIMIZADA
        function detectarDataSessao() {
            console.log("🔍 INICIANDO: Detecção da data da sessão (otimizada)");

            // 🔐 VERIFICAÇÃO DE PROCESSO
            processoAtual = obterNumeroProcesso();
            if (!processoAtual) {
                console.log(
                    "❌ BLOQUEIO: Não foi possível identificar o número do processo"
                );
                return null;
            }

            // 🔓 VERIFICAR CACHE EXISTENTE
            if (
                hasDataSessaoPautado() &&
                processoComDataSessao === processoAtual
            ) {
                console.log(
                    `ℹ️ CACHE: Data já detectada para processo ${processoAtual}: ${
                        getDataSessaoPautado().dataFormatada
                    }`
                );
                return getDataSessaoPautado();
            }

            // 🧹 LIMPAR CACHE DE PROCESSO ANTERIOR
            if (dataSessaoPautado && processoComDataSessao !== processoAtual) {
                console.log(
                    `⚠️ CACHE: Limpando dados do processo anterior (${processoComDataSessao})`
                );
                resetDataSessaoPautado();
            }

            console.log(`🔍 DETECÇÃO: Analisando processo ${processoAtual}...`);

            // 🎯 PRIORIDADE 1: Detectar com status específico (mais rápido)
            const statusDetectado = detectarStatusSessao();
            if (statusDetectado) {
                console.log(`✅ STATUS: ${statusDetectado.status} detectado`);

                dataSessaoPautado = statusDetectado.data;
                dataSessaoPautado.statusSessao = statusDetectado;
                processoComDataSessao = processoAtual;

                // 🔐 MARCAR PROCESSO COMO PROCESSADO
                marcarProcessoComoProcessado(processoAtual);

                // Interface com debounce
                debounceGlobal(
                    () => {
                        inserirDataSessaoNaInterface();
                    },
                    "interface-update",
                    300
                );

                return dataSessaoPautado;
            }

            // 🔍 BUSCA OTIMIZADA: Usar cache de texto quando possível
            const textoCompleto = document.body.innerText;
            if (!textoCompleto || textoCompleto.length < 100) {
                console.log("❌ DETECÇÃO: Conteúdo da página insuficiente");
                return null;
            }

            // Padrões otimizados (combinados em uma única passada)
            const padroes = [
                /(?:data\s*da\s*sess[aã]o|sess[aã]o\s*(?:de|em|para|:)?)\s*:?\s*(\d{1,2}\/\d{1,2}\/\d{4})/i,
                /(?:julgamento\s*(?:em|para|:)|para\s*julgamento)\s*:?\s*(\d{1,2}\/\d{1,2}\/\d{4})/i,
                /(?:incluído\s*em\s*pauta\s*em)\s*(\d{1,2}\/\d{1,2}\/\d{4})/i,
            ];

            for (const [index, padrao] of padroes.entries()) {
                const match = textoCompleto.match(padrao);
                if (match) {
                    const dataEncontrada = match[1];
                    console.log(
                        `✅ PADRÃO ${
                            index + 1
                        }: Data encontrada: ${dataEncontrada}`
                    );

                    const dataValidada = validarDataBrasileira(dataEncontrada);
                    if (dataValidada) {
                        // Tentar detectar status mesmo no fallback
                        const statusDetectadoFallback = detectarStatusSessao();
                        if (statusDetectadoFallback) {
                            dataValidada.statusSessao = statusDetectadoFallback;
                        }

                        dataSessaoPautado = dataValidada;
                        processoComDataSessao = processoAtual;

                        // 🔐 MARCAR PROCESSO COMO PROCESSADO
                        marcarProcessoComoProcessado(processoAtual);

                        console.log(
                            `✅ SUCESSO: Data detectada para processo ${processoAtual}: ${dataValidada.dataFormatada}`
                        );

                        // � CRUZAMENTO AUTOMÁTICO COM DEBOUNCE
                        debounceGlobal(
                            async () => {
                                try {
                                    console.log(
                                        "🔄 CRUZAMENTO: Iniciando busca de dados completos..."
                                    );
                                    const resultado =
                                        await cruzarDadosDataSessao();
                                    if (resultado) {
                                        console.log(
                                            "✅ CRUZAMENTO: Dados completos obtidos!"
                                        );
                                        atualizarDataSessaoNaInterface();
                                    }
                                } catch (error) {
                                    console.warn(
                                        "⚠️ CRUZAMENTO: Erro controlado:",
                                        error.message
                                    );
                                }
                            },
                            "cruzamento-auto",
                            1500
                        );

                        return dataValidada;
                    }
                }
            }

            console.log("❌ DETECÇÃO: Nenhuma data de sessão encontrada");
            return null;
        }

        // Função para inserir data da sessão na interface do eProc
        function inserirDataSessaoNaInterface() {
            console.log(
                "🎯 INSERIR: Tentando inserir data da sessão na interface"
            );

            // Verificar se há data detectada
            if (!hasDataSessaoPautado()) {
                console.log("❌ INSERIR: Nenhuma data detectada para inserir");
                return false;
            }

            // Buscar o elemento container alvo com cache
            const targetContainer = getCachedElement(
                "#frmProcessoLista #divInfraAreaDados #divInfraAreaProcesso #fldCapa #divCapaProcesso .row.mt-2"
            );

            if (!targetContainer) {
                console.log("❌ INSERIR: Container alvo não encontrado");
                return false;
            }

            // Verificar se já existe o elemento da data da sessão
            if (document.getElementById("eprobe-data-sessao")) {
                console.log(
                    "ℹ️ INSERIR: Data da sessão já inserida na interface"
                );
                return true;
            }

            // Criar elemento usando a função reutilizável
            const dataSessaoElement = criarBotaoEleganteeProc(
                "eprobe-data-sessao",
                "col-auto mr-2"
            );
            processoComDataSessao = processoAtual;
            console.log(
                `✅ SUCESSO: Data da sessão detectada e armazenada para processo ${processoAtual}: ${dataValidada.dataFormatada}`
            );

            // � MARCAR PROCESSO COMO PROCESSADO ANTES DO CRUZAMENTO
            marcarProcessoComoProcessado(processoAtual);

            // �🚀 INTEGRAÇÃO AUTOMÁTICA CONTROLADA: Apenas uma tentativa
            setTimeout(async () => {
                try {
                    console.log(
                        "� CRUZAMENTO: Tentativa automática única e controlada"
                    );
                    const resultado = await cruzarDadosDataSessao();
                    if (resultado) {
                        console.log("✅ CRUZAMENTO: Sucesso!");
                        atualizarDataSessaoNaInterface();
                    } else {
                        console.log("ℹ️ CRUZAMENTO: Dados não encontrados");
                        console.log(
                            "💡 Use window.SENT1_AUTO.debugPaginaSessoes() para debug manual"
                        );
                    }
                } catch (error) {
                    console.warn(
                        "⚠️ CRUZAMENTO: Erro controlado:",
                        error.message
                    );
                }
            }, 3000); // Delay maior
        }

        // Funções utilitárias para gerenciar data da sessão
        function getDataSessaoPautado() {
            return dataSessaoPautado;
        }

        function hasDataSessaoPautado() {
            return (
                dataSessaoPautado !== null &&
                processoComDataSessao === processoAtual
            );
        }

        function resetDataSessaoPautado() {
            console.log("🔄 RESET: Limpando data da sessão armazenada");
            dataSessaoPautado = null;
            processoComDataSessao = null;
        }

        // 🛡️ FUNÇÃO PARA RESETAR CONTROLES DE REQUISIÇÃO
        function resetControlesRequisicao() {
            console.log("🔄 RESET: Limpando controles de requisição");
            tentativasCruzamento = 0;
            ultimaTentativaCruzamento = 0;
            cruzamentoEmAndamento = false;
            cacheResultadoSessoes = null;
            cacheValidoAte = 0;
            console.log(
                "✅ RESET: Controles resetados - sistema pronto para nova tentativa"
            );
        }

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
                    (DELAY_ENTRE_TENTATIVAS -
                        (agora - ultimaTentativaCruzamento)) /
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

        // Função para inserir data da sessão na interface do eProc
        function inserirDataSessaoNaInterface() {
            console.log(
                "🎯 INSERIR: Tentando inserir data da sessão na interface (otimizado)"
            );

            // Verificar se há data detectada
            if (!hasDataSessaoPautado()) {
                console.log("❌ INSERIR: Nenhuma data detectada para inserir");
                return false;
            }

            // Buscar o elemento container alvo com cache
            const targetContainer = getCachedElement(
                "#frmProcessoLista #divInfraAreaDados #divInfraAreaProcesso #fldCapa #divCapaProcesso .row.mt-2"
            );

            if (!targetContainer) {
                console.log("❌ INSERIR: Container alvo não encontrado");
                return false;
            }

            // Verificar se já existe o elemento da data da sessão
            const existingElement =
                document.getElementById("eprobe-data-sessao");
            if (existingElement) {
                console.log(
                    "ℹ️ INSERIR: Data da sessão já inserida, verificando se precisa atualizar"
                );

                // Verificar se os dados mudaram para decidir se atualiza
                const currentData = getDataSessaoPautado();
                const elementData =
                    existingElement.getAttribute("data-processo");

                if (elementData !== processoAtual) {
                    console.log("🔄 INSERIR: Processo mudou, atualizando card");
                    existingElement.remove();
                } else {
                    return true;
                }
            }

            // Criar elemento usando a função reutilizável
            const dataSessaoElement = criarBotaoEleganteeProc(
                "eprobe-data-sessao",
                "col-auto mr-2"
            );

            // Adicionar identificação do processo para controle de cache
            dataSessaoElement.setAttribute("data-processo", processoAtual);

            // 🎨 INTERFACE DINÂMICA: Verificar se há dados completos da sessão
            const dadosCompletos = getDadosCompletosSessionJulgamento();

            if (dadosCompletos) {
                // Interface RICA com dados completos
                console.log("🎨 INTERFACE: Usando dados completos da sessão");
                dataSessaoElement.innerHTML = `
                <svg style="width: 16px; height: 16px; color: #3b82f6; flex-shrink: 0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 1.5h9A.75.75 0 0 1 17.25 2.25v.5h3A.75.75 0 0 1 21 3.5v15a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 .75-.75h3v-.5zm1.5.75v.5h7.5v-.5h-7.5zM4.5 5.25h15v11.5h-15v-11.5z" clip-rule="evenodd"/>
                    <path d="M8.25 8.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75zM8.25 11.25a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75zM8.25 14a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75z"/>
                </svg>
                <div style="display: flex; flex-direction: column; gap: 1px;">
                    <span style="font-weight: 600; font-size: 10px; color: #6b7280; line-height: 1;">${
                        dadosCompletos.orgaoJulgador
                    }</span>
                    <span style="font-weight: 700; font-size: 12px; color: #1f2937; line-height: 1;">${
                        dadosCompletos.dataHoraCompleta
                    } | ${dadosCompletos.tipoSessao}</span>
                    <span style="font-weight: 500; font-size: 9px; color: ${
                        dadosCompletos.statusSessao
                            .toLowerCase()
                            .includes("encerrada")
                            ? "#dc2626"
                            : "#16a34a"
                    }; line-height: 1;">${dadosCompletos.statusSessao}</span>
                </div>
            `;

                // Tooltip com informações completas
                dataSessaoElement.title = `Dados Completos da Sessão

🏛️ Órgão: ${dadosCompletos.orgaoJulgador}
📅 Data/Hora: ${dadosCompletos.dataHoraCompleta}
🖥️ Tipo: ${dadosCompletos.tipoSessao}
📍 Local: ${dadosCompletos.localSessao}
📋 Status: ${dadosCompletos.statusSessao}

📅 Limites:
• Pauta: ${dadosCompletos.dataLimitePauta}
• Mesa: ${dadosCompletos.dataLimiteMesa}
• Minutas: ${dadosCompletos.dataLimiteMinutas}

🆔 ID: ${dadosCompletos.id}
Dados obtidos automaticamente pelo eProbe`;
            } else {
                // Interface BÁSICA apenas com data detectada
                console.log("🎨 INTERFACE: Usando dados básicos (apenas data)");

                // 🎯 DETECTAR STATUS DA SESSÃO PARA INTERFACE DINÂMICA
                const statusSessao = getStatusSessao();
                const textoCard = obterTextoCardPorStatus(statusSessao);
                const corCard = obterCorCardPorStatus(statusSessao);

                console.log(
                    `🎨 INTERFACE: Usando status "${
                        statusSessao?.status || "padrão"
                    }" para o card`
                );

                dataSessaoElement.innerHTML = `
                <svg style="width: 16px; height: 16px; color: ${corCard}; flex-shrink: 0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 1.5h9A.75.75 0 0 1 17.25 2.25v.5h3A.75.75 0 0 1 21 3.5v15a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 .75-.75h3v-.5zm1.5.75v.5h7.5v-.5h-7.5zM4.5 5.25h15v11.5h-15v-11.5z" clip-rule="evenodd"/>
                    <path d="M8.25 8.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75zM8.25 11.25a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75zM8.25 14a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75z"/>
                </svg>
                <div style="display: flex; flex-direction: column; gap: 1px;">
                    <span style="font-weight: 600; font-size: 11px; color: #6b7280; line-height: 1;">${textoCard}</span>
                    <span style="font-weight: 700; font-size: 13px; color: #1f2937; line-height: 1;">${dataSessaoPautado.dataFormatada}</span>
                </div>
            `;

                // Tooltip dinâmico baseado no status
                let tooltipBase = `Clique para mais informações`;

                dataSessaoElement.title = tooltipBase;
            }

            // 🔗 ADICIONAR LISTENER DE CLIQUE OTIMIZADO - Com debounce
            dataSessaoElement.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();

                // Usar debounce para evitar cliques múltiplos
                debounceGlobal(
                    async () => {
                        console.log(
                            "🖱️ CLIQUE: Usuário clicou na data da sessão"
                        );

                        // Verificar se já há dados completos
                        if (getDadosCompletosSessionJulgamento()) {
                            console.log(
                                "ℹ️ CLIQUE: Mostrando dados completos existentes"
                            );
                            showDadosCompletosSessionJulgamento();
                            return;
                        }

                        // Feedback visual rápido
                        const elementoOriginal = this.innerHTML;
                        this.style.opacity = "0.7";
                        this.style.transform = "scale(0.95)";

                        try {
                            console.log(
                                "🔄 CLIQUE: Iniciando cruzamento de dados"
                            );
                            const resultado = await cruzarDadosDataSessao(
                                null,
                                true
                            );

                            if (resultado) {
                                console.log(
                                    "✅ CLIQUE: Dados obtidos com sucesso"
                                );
                                // Atualizar interface com delay mínimo
                                setTimeout(() => {
                                    atualizarDataSessaoNaInterface();
                                }, 200);
                            } else {
                                console.log(
                                    "ℹ️ CLIQUE: Nenhum dado adicional encontrado"
                                );
                            }
                        } catch (error) {
                            console.warn(
                                "⚠️ CLIQUE: Erro no cruzamento:",
                                error.message
                            );
                        } finally {
                            // Restaurar visual
                            this.style.opacity = "1";
                            this.style.transform = "scale(1)";
                        }
                    },
                    "click-cruzamento",
                    500
                );
            });

            // Inserir o elemento no container
            targetContainer.appendChild(dataSessaoElement);

            console.log(
                `✅ INSERIR: Data da sessão inserida na interface: ${dataSessaoPautado.dataFormatada}`
            );
            return true;
        }

        // Função para remover data da sessão da interface
        function removerDataSessaoDaInterface() {
            console.log(
                "🗑️ REMOVER: Tentando remover data da sessão da interface"
            );

            const elemento = document.getElementById("eprobe-data-sessao");
            if (elemento) {
                elemento.remove();
                console.log("✅ REMOVER: Data da sessão removida da interface");
                return true;
            } else {
                console.log(
                    "ℹ️ REMOVER: Elemento da data da sessão não encontrado"
                );
                return false;
            }
        }

        // Função para atualizar data da sessão na interface
        function atualizarDataSessaoNaInterface() {
            console.log(
                "🔄 ATUALIZAR: Atualizando data da sessão na interface"
            );

            // Verificar se já existe na interface antes de remover
            const elementoExistente = document.getElementById(
                "eprobe-data-sessao-pautado"
            );
            if (!elementoExistente) {
                console.log("ℹ️ ATUALIZAR: Elemento não existe, criando novo");
                return inserirDataSessaoNaInterface();
            }

            // Remover elemento existente apenas se necessário
            removerDataSessaoDaInterface();

            // Inserir elemento atualizado
            const resultado = inserirDataSessaoNaInterface();

            // NÃO atualizar card Material Design automaticamente para evitar sobreposição
            console.log(
                "ℹ️ ATUALIZAR: Card Material Design mantido para evitar sobreposição"
            );

            return resultado;
        }

        // 🚨 FUNÇÃO PARA FORÇAR INSERÇÃO DO CARD MESMO PARA PROCESSOS PROCESSADOS
        function forcarInsercaoCardSemValidacao() {
            console.log("🚨 FORÇA: Forçando inserção do card sem validações");

            // 1. Verificar se há data detectada
            if (!hasDataSessaoPautado()) {
                console.log(
                    "❌ FORÇA: Nenhuma data detectada - tentando detectar"
                );

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
                const dataDetectada = detectarDataSessao();

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
                    (DELAY_ENTRE_TENTATIVAS -
                        (agora - ultimaTentativaCruzamento)) /
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
                console.error(
                    `❌ SESSÕES: Erro ao buscar dados: ${error.message}`
                );
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
                console.log(
                    "📋 PARSE DEBUG: Analisando estrutura da página..."
                );

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
                    const tableResponsive =
                        doc.querySelector(".table-responsive");
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
                console.log(
                    `📋 PARSE: ${linhasSessoes.length} linhas encontradas`
                );

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
                const dataMatch = dataHoraSessao.match(
                    /(\d{1,2}\/\d{1,2}\/\d{4})/
                );
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
                console.error(
                    `❌ LINHA: Erro ao extrair dados: ${error.message}`
                );
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
            console.log(
                `🎯 BUSCA: Procurando sessão para data: ${dataProcurada}`
            );

            try {
                // Buscar todas as sessões
                const sessoes = await buscarDadosSessoes(hash);

                if (sessoes.length === 0) {
                    console.log(
                        "❌ BUSCA: Nenhuma sessão encontrada na listagem"
                    );
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
            console.log(
                "🔄 CRUZAMENTO: Iniciando cruzamento de dados da sessão"
            );

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
                    console.log(
                        "❌ CRUZAMENTO: Não foi possível cruzar os dados"
                    );
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

            // Execução imediata sem delay desnecessário
            try {
                // 1. Detectar data da sessão de forma não-bloqueante
                if (!hasDataSessaoPautado()) {
                    console.log(
                        "🔍 INICIALIZAÇÃO: Tentando detectar data da sessão..."
                    );

                    // Usar requestIdleCallback para não bloquear a UI
                    if (window.requestIdleCallback) {
                        requestIdleCallback(() => {
                            detectarDataSessao();
                        });
                    } else {
                        // Fallback para navegadores que não suportam requestIdleCallback
                        setTimeout(() => detectarDataSessao(), 100);
                    }
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
                    detectarDataSessao();

                    if (hasDataSessaoPautado()) {
                        console.log("✅ TESTE: Data detectada com sucesso!");
                        showDataSessaoPautadoInfo();

                        // 3. Testar inserção na interface
                        console.log(
                            "🎨 TESTE: Testando inserção na interface..."
                        );
                        inserirDataSessaoNaInterface();

                        // 4. Testar cruzamento de dados
                        console.log(
                            "🔄 TESTE: Testando cruzamento de dados..."
                        );
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
                            console.log(
                                "⚠️ TESTE: Cruzamento não encontrou dados"
                            );
                            resolve(false);
                        }
                    } else {
                        console.log(
                            "❌ TESTE: Nenhuma data de sessão detectada"
                        );
                        resolve(false);
                    }
                } catch (error) {
                    console.error("❌ TESTE: Erro durante teste:", error);
                    resolve(false);
                }
            });
        }

        // Adicionar função de teste ao namespace global para debug
        if (window.SENT1_AUTO) {
            window.SENT1_AUTO.testarSistemaCompleto = testarSistemaCompleto;
            window.SENT1_AUTO.debugPaginaSessoes = debugPaginaSessoes;
            window.SENT1_AUTO.resetControlesRequisicao =
                resetControlesRequisicao;
            window.SENT1_AUTO.statusControlesRequisicao =
                statusControlesRequisicao;

            // 🔐 CONTROLES ÚNICOS POR PROCESSO
            window.SENT1_AUTO.obterNumeroProcesso = obterNumeroProcesso;
            window.SENT1_AUTO.obterProcessoAtual = () => processoAtual;
            window.SENT1_AUTO.listarProcessosProcessados = () =>
                Array.from(processosJaProcessados);
            window.SENT1_AUTO.resetProcessosProcessados = () => {
                processosJaProcessados.clear();
                cachePorProcesso.clear();
                processoAtual = null;
                console.log("🔄 RESET: Controles de processo resetados");
            };
            window.SENT1_AUTO.statusProcessos = () => {
                console.log("🔐 STATUS PROCESSOS:");
                console.log(
                    `   Processo atual: ${processoAtual || "não identificado"}`
                );
                console.log(
                    `   Processos processados: ${processosJaProcessados.size}`
                );
                console.log(
                    `   Lista: ${Array.from(processosJaProcessados).join(", ")}`
                );
                console.log(
                    `   Cache por processo: ${cachePorProcesso.size} entradas`
                );
            };

            // 🚫 CONTROLES DE REQUISIÇÕES AUTOMÁTICAS
            window.SENT1_AUTO.statusRequisicoes = () => {
                console.log("🚫 STATUS REQUISIÇÕES:");
                console.log(
                    `   Requisições automáticas: ${
                        REQUISICOES_AUTOMATICAS_DESABILITADAS
                            ? "DESABILITADAS"
                            : "HABILITADAS"
                    }`
                );
                console.log(
                    `   Tentativas realizadas: ${tentativasCruzamento}/${MAX_TENTATIVAS_CRUZAMENTO}`
                );
                console.log(
                    `   Delay entre tentativas: ${
                        DELAY_ENTRE_TENTATIVAS / 1000
                    }s`
                );
                console.log(`   Cache válido por: ${CACHE_DURATION / 1000}s`);
            };

            window.SENT1_AUTO.desabilitarRequisicoes = () => {
                REQUISICOES_AUTOMATICAS_DESABILITADAS = true;
                console.log(
                    "🚫 REQUISIÇÕES: Requisições automáticas desabilitadas"
                );
            };

            window.SENT1_AUTO.habilitarRequisicoes = () => {
                REQUISICOES_AUTOMATICAS_DESABILITADAS = false;
                console.log(
                    "✅ REQUISIÇÕES: Requisições automáticas habilitadas"
                );
                console.log("⚠️ ATENÇÃO: Use com moderação para evitar logout");
            };

            window.SENT1_AUTO.forcarCruzamento = async () => {
                console.log(
                    "🔄 FORÇA: Forçando cruzamento ignorando bloqueios..."
                );
                const estadoOriginal = REQUISICOES_AUTOMATICAS_DESABILITADAS;
                REQUISICOES_AUTOMATICAS_DESABILITADAS = false;

                try {
                    const resultado = await cruzarDadosDataSessao();
                    console.log(
                        `🔄 FORÇA: Resultado: ${
                            resultado ? "SUCESSO" : "FALHA"
                        }`
                    );
                    return resultado;
                } finally {
                    REQUISICOES_AUTOMATICAS_DESABILITADAS = estadoOriginal;
                }
            };

            console.log(
                "🧪 TESTE: Função testarSistemaCompleto() disponível em window.SENT1_AUTO"
            );
            console.log(
                "🧪 DEBUG: Função debugPaginaSessoes() disponível em window.SENT1_AUTO"
            );
            console.log(
                "🔐 CONTROLE: Funções de controle único por processo disponíveis em window.SENT1_AUTO"
            );
        }

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
                console.log(
                    `📊 DEBUG: ${allTables.length} tabelas encontradas`
                );

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
                        console.log(
                            `📋 DEBUG: ${dataRows.length} linhas de dados`
                        );

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

                console.log(
                    "✅ DEBUG: Análise completa! Verifique os logs acima."
                );
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

            console.log(
                "📨 HANDLER: Listener de mensagens do popup registrado"
            );
        }

        // Executar inicialização automática quando a página carregar
        if (document.readyState === "loading") {
            document.addEventListener(
                "DOMContentLoaded",
                inicializarAutomaticamente
            );
        } else {
            // Se a página já carregou, executar imediatamente
            inicializarAutomaticamente();
        }
    })(); // Fechamento da IIFE de detecção de sessão

    // ===== HELPERS PARA EVENT LISTENERS PASSIVOS =====

    /**
     * Helper para adicionar event listeners com opção passive quando apropriado
     * Previne violações de performance no console
     */
    function addPassiveEventListener(element, event, handler, options = {}) {
        const passiveEvents = [
            "scroll",
            "wheel",
            "touchstart",
            "touchmove",
            "touchend",
            "mouseenter",
            "mouseleave",
            "mousedown",
            "mouseup",
            "mouseover",
            "mouseout",
        ];

        if (passiveEvents.includes(event)) {
            options.passive = true;
        }

        element.addEventListener(event, handler, options);
    }

    // ===== CONTROLE DE ESTADO DOS CARDS =====

    /**
     * Estado global para controle dos cards Material Design
     */
    let materialDesignState = {
        cardAtivo: null,
        ultimaDeteccao: null,
        timeoutAtualizar: null,
        evitarRecriacaoCard: false,
    };

    /**
     * Verifica se deve recriar o card ou apenas atualizar
     */
    function deveRecriarCard(novosDados) {
        if (!materialDesignState.cardAtivo) return true;

        if (!materialDesignState.ultimaDeteccao) return true;

        // Se os dados mudaram significativamente, recriar
        const dadosAtuais = materialDesignState.ultimaDeteccao;
        if (dadosAtuais.status !== novosDados.status) return true;
        if (dadosAtuais.data?.dataFormatada !== novosDados.data?.dataFormatada)
            return true;

        return false;
    }

    /**
     * Controle inteligente de criação/atualização de cards
     */
    function gerenciarCardMaterialDesign(dadosSessao) {
        // Evitar múltiplas atualizações simultâneas
        if (materialDesignState.evitarRecriacaoCard) {
            console.log("🔒 MATERIAL: Recriação temporariamente bloqueada");
            return;
        }

        materialDesignState.evitarRecriacaoCard = true;

        // Liberar bloqueio após 1 segundo
        setTimeout(() => {
            materialDesignState.evitarRecriacaoCard = false;
        }, 1000);

        if (deveRecriarCard(dadosSessao)) {
            console.log("🔄 MATERIAL: Dados mudaram, recriando card");
            atualizarCardMaterialDesign(dadosSessao);
            materialDesignState.ultimaDeteccao = dadosSessao;
            materialDesignState.cardAtivo = true;
        } else {
            console.log("ℹ️ MATERIAL: Card já atualizado, mantendo estado");
        }
    }

    // ===== FIM DOS HELPERS =====

    // =============================================
    // MATERIAL DESIGN - CARD DE DADOS DE SESSÃO
    // =============================================

    // =============================================
    // DETECÇÃO SIMPLIFICADA DE CARDS DE SESSÃO
    // =============================================

    /**
     * Função simplificada para detectar cards de sessão
     * Busca especificamente pelo botão infraLegendObrigatorio e analisa o conteúdo nas próximas linhas
     */
    function detectarCardSessaoSimplificado() {
        console.log("🔍 CARD SESSÃO: Iniciando detecção simplificada");

        try {
            // Buscar o botão específico mencionado pelo usuário
            const botaoInfra = document.querySelector(
                'button[type="button"].infraLegendObrigatorio.btn.btn-link.btn-sm.p-0'
            );

            if (!botaoInfra) {
                console.log(
                    "❌ CARD SESSÃO: Botão infraLegendObrigatorio não encontrado"
                );
                return null;
            }

            console.log(
                "✅ CARD SESSÃO: Botão infraLegendObrigatorio encontrado"
            );

            // Obter o container pai para buscar o texto nas próximas linhas
            let containerTexto = botaoInfra.parentElement;
            let nivelPai = 0;

            // Subir até 3 níveis para encontrar um container com texto relevante
            while (containerTexto && nivelPai < 3) {
                const textoContainer =
                    containerTexto.textContent ||
                    containerTexto.innerText ||
                    "";

                if (textoContainer.length > 50) {
                    console.log(
                        `📝 CARD SESSÃO: Texto encontrado no nível ${nivelPai}:`,
                        textoContainer.substring(0, 200)
                    );
                    break;
                }

                containerTexto = containerTexto.parentElement;
                nivelPai++;
            }

            if (!containerTexto) {
                console.log(
                    "❌ CARD SESSÃO: Nenhum container com texto encontrado"
                );
                return null;
            }

            const textoCompleto =
                containerTexto.textContent || containerTexto.innerText || "";

            // Padrões simplificados já configurados
            const padroes = [
                {
                    regex: /\(Retirado em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\)/i,
                    status: "Retirado",
                    statusCompleto: "Retirado em Pauta",
                },
                {
                    regex: /\(Julgado em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\)/i,
                    status: "Julgado",
                    statusCompleto: "Julgado em Pauta",
                },
                {
                    regex: /\(Incluído em Pauta em (\d{1,2}\/\d{1,2}\/\d{4})\)/i,
                    status: "Pautado",
                    statusCompleto: "Incluído em Pauta",
                },
            ];

            // Buscar padrões no texto
            for (const padrao of padroes) {
                const match = textoCompleto.match(padrao.regex);

                if (match) {
                    const dataEncontrada = match[1];
                    console.log(
                        `✅ CARD SESSÃO: ${padrao.status} encontrado - Data: ${dataEncontrada}`
                    );

                    // Validar data
                    const dataValidada = validarDataBrasileira(dataEncontrada);
                    if (dataValidada) {
                        const dadosSessao = {
                            status: padrao.status,
                            statusCompleto: padrao.statusCompleto,
                            data: dataValidada,
                            textoOriginal: match[0],
                            timestamp: new Date().toISOString(),
                        };

                        console.log(
                            "✅ CARD SESSÃO: Dados detectados com sucesso:",
                            dadosSessao
                        );

                        // Criar/atualizar o card
                        atualizarCardMaterialDesign(dadosSessao);

                        return dadosSessao;
                    }
                }
            }

            console.log(
                "❌ CARD SESSÃO: Nenhum padrão de data encontrado no texto"
            );
            return null;
        } catch (error) {
            console.error(
                "❌ CARD SESSÃO: Erro na detecção simplificada:",
                error
            );
            return null;
        }
    }

    // ...existing code...

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
            return '<span class="material-icons">gavel</span>';
        } else if (
            statusLower.includes("retirado") ||
            statusLower.includes("suspenso")
        ) {
            return '<span class="material-icons">pause_circle</span>';
        }

        return '<span class="material-icons">info</span>';
    }

    /**
     * Cria um card Material Design SIMPLIFICADO para exibir dados de sessão
     * VERSÃO MINIMALISTA - Apenas status e data, com ícones Lucide
     * @param {Object} dadosSessao - Dados da sessão detectada
     * @returns {HTMLElement} - Elemento do card criado
     */
    function criarCardMaterialDesign(dadosSessao) {
        console.log(
            "🎨 MATERIAL: Criando card minimalista para dados de sessão"
        );

        // Container principal do card
        const card = document.createElement("div");
        card.id = "eprobe-data-sessao";
        card.className = "eprobe-material-card-minimal";

        // Determinar status e cor
        const status = dadosSessao?.status || "Desconhecido";
        const statusClass = obterClasseStatusPorTipo(status);

        // Determinar ícone baseado no status (CSS icons)
        let iconeClass = "eprobe-icon-info";
        if (status.toLowerCase().includes("julgado"))
            iconeClass = "eprobe-icon-check";
        else if (status.toLowerCase().includes("pautado"))
            iconeClass = "eprobe-icon-info";
        else if (status.toLowerCase().includes("retirado"))
            iconeClass = "eprobe-icon-alert";

        // HTML simplificado e compacto
        card.innerHTML = `
        <div class="eprobe-card-minimal-content">
            <div class="eprobe-status-row">
                <span class="eprobe-status-icon ${statusClass} ${iconeClass}"></span>
                <span class="eprobe-status-text">${status}</span>
            </div>
            ${
                dadosSessao?.data?.dataFormatada
                    ? `
                <div class="eprobe-date-row">
                    <span class="eprobe-date-icon eprobe-icon-calendar"></span>
                    <span class="eprobe-date-label">Sessão:</span>
                    <span class="eprobe-date-text">${dadosSessao.data.dataFormatada}</span>
                </div>
            `
                    : ""
            }
        </div>
    `;

        console.log(
            `✅ MATERIAL: Card minimalista criado com status "${status}"`
        );
        return card;
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
     * Atualiza o card existente com novos dados
     * VERSÃO OTIMIZADA - Evita remoção/recriação desnecessária
     * @param {Object} dadosSessao - Novos dados da sessão
     */
    function atualizarCardMaterialDesign(dadosSessao) {
        const cardExistente = document.getElementById("eprobe-data-sessao");

        if (cardExistente) {
            console.log(
                "🔄 MATERIAL: Card existente encontrado, verificando se precisa atualizar"
            );

            // Verificar se os dados realmente mudaram
            const statusAtual = cardExistente.querySelector(
                ".eprobe-status-text"
            )?.textContent;
            const dataAtual =
                cardExistente.querySelector(".eprobe-date-text")?.textContent;

            if (
                statusAtual === dadosSessao?.status &&
                dataAtual === dadosSessao?.data?.dataFormatada
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
            const novoCard = criarCardMaterialDesign(dadosSessao);
            inserirCardNaInterface(novoCard);

            materialDesignState.cardAtivo = true;
            materialDesignState.ultimaDeteccao = dadosSessao;
        } else {
            console.log("🆕 MATERIAL: Criando novo card Material Design");
            const novoCard = criarCardMaterialDesign(dadosSessao);
            inserirCardNaInterface(novoCard);

            materialDesignState.cardAtivo = true;
            materialDesignState.ultimaDeteccao = dadosSessao;
        }
    }

    /**
     * Insere o card na interface ao lado do lblMagistrado na row mt-2
     * VERSÃO CORRIGIDA - Posicionamento específico conforme solicitado
     * @param {HTMLElement} card - Elemento do card a ser inserido
     */
    function inserirCardNaInterface(card) {
        console.log(
            "🎯 MATERIAL: Iniciando inserção do card ao lado do lblMagistrado..."
        );

        // Estratégia 1: POSIÇÃO CORRETA - Ao lado do lblMagistrado na row mt-2
        const lblMagistrado = document.querySelector("#lblMagistrado");
        if (lblMagistrado) {
            // Encontrar a row mt-2 que contém o lblMagistrado
            const rowMt2 = lblMagistrado.closest(".row.mt-2");
            if (rowMt2) {
                // Inserir o card como uma nova coluna na mesma row
                card.classList.add("col-md-6", "col-lg-4"); // Responsivo
                rowMt2.appendChild(card);
                console.log(
                    "✅ MATERIAL: Card inserido na row mt-2 ao lado do lblMagistrado"
                );
                return true;
            }

            // Fallback: inserir após o elemento lblMagistrado
            lblMagistrado.parentElement.insertBefore(
                card,
                lblMagistrado.nextSibling
            );
            console.log(
                "✅ MATERIAL: Card inserido após lblMagistrado (fallback)"
            );
            return true;
        }

        // Estratégia 2: Procurar por qualquer .row.mt-2 na página
        const rowMt2 = document.querySelector(".row.mt-2");
        if (rowMt2) {
            card.classList.add("col-md-6", "col-lg-4");
            rowMt2.appendChild(card);
            console.log("✅ MATERIAL: Card inserido em .row.mt-2 encontrada");
            return true;
        }

        // Estratégia 3: Na área do processo
        const areaProcesso = document.querySelector("#divInfraAreaProcesso");
        if (areaProcesso) {
            // Criar uma row para manter o layout Bootstrap
            const novaRow = document.createElement("div");
            novaRow.className = "row mt-2";
            card.classList.add("col-md-6", "col-lg-4");
            novaRow.appendChild(card);
            areaProcesso.insertBefore(novaRow, areaProcesso.firstChild);
            console.log(
                "✅ MATERIAL: Card inserido em nova row na área do processo"
            );
            return true;
        }

        // Estratégia 4: FALLBACK ABSOLUTO - Posição fixa no topo direito
        console.log("⚠️ MATERIAL: Usando fallback - posição fixa no topo");
        card.style.position = "fixed";
        card.style.top = "80px";
        card.style.right = "20px";
        card.style.zIndex = "9999";
        card.style.maxWidth = "280px";
        card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
        document.body.appendChild(card);
        console.log("✅ MATERIAL: Card inserido no body (fallback garantido)");
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
    function detectarECriarCardMaterialDesign() {
        console.log(
            "🔍 MATERIAL: Iniciando detecção SIMPLIFICADA de card Material Design"
        );

        try {
            // NOVA ABORDAGEM SIMPLIFICADA: Usar a detecção direta do botão infraLegendObrigatorio
            const dadosDetectados = detectarCardSessaoSimplificado();

            if (dadosDetectados) {
                console.log(
                    "✅ MATERIAL: Dados detectados via método simplificado"
                );
                return dadosDetectados;
            }

            // FALLBACK 1: Verificar se já existem dados processados
            if (
                window.SENT1_AUTO &&
                typeof window.SENT1_AUTO.hasDadosCompletosSessionJulgamento ===
                    "function"
            ) {
                if (window.SENT1_AUTO.hasDadosCompletosSessionJulgamento()) {
                    const dadosExistentes =
                        window.SENT1_AUTO.getDadosCompletosSessionJulgamento();
                    if (dadosExistentes) {
                        console.log(
                            "✅ MATERIAL: Usando dados já processados da sessão"
                        );
                        atualizarCardMaterialDesign(dadosExistentes);
                        return dadosExistentes;
                    }
                }
            }

            // FALLBACK 2: Método original como último recurso
            if (
                window.SENT1_AUTO &&
                typeof window.SENT1_AUTO.debugDeteccaoStatusSessao ===
                    "function"
            ) {
                const statusDetectado =
                    window.SENT1_AUTO.debugDeteccaoStatusSessao();
                if (statusDetectado) {
                    console.log(
                        "✅ MATERIAL: Detectando dados via método original"
                    );
                    atualizarCardMaterialDesign(statusDetectado);
                    return statusDetectado;
                }
            }

            console.log(
                "ℹ️ MATERIAL: Nenhum dado detectado - card não será criado"
            );
            return null;
        } catch (error) {
            console.error("❌ MATERIAL: Erro na detecção simplificada:", error);
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
                    "🔍 MATERIAL: Executando detecção simplificada única"
                );

                // Usar a nova função simplificada
                const resultado = detectarCardSessaoSimplificado();

                if (resultado) {
                    console.log(
                        "✅ MATERIAL: Card criado via detecção simplificada"
                    );
                } else {
                    console.log(
                        "ℹ️ MATERIAL: Nenhum dado detectado na página atual"
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
                    const novoCard = criarCardMaterialDesign(dadosCard);

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

        // Seletores para todos os tipos de botões do eProc (INCLUINDO botões eProbe - EXCLUINDO apenas pesquisa, navbar, infraLegendObrigatorio)
        const seletoresBotoes = [
            ".bootstrap-styles .btn:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *)",
            ".bootstrap-styles .eproc-button:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *)",
            ".bootstrap-styles .eproc-button-primary:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *)",
            ".bootstrap-styles .infraButton:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *)",
            ".bootstrap-styles .infraButton.btn-primary:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *)",
            ".bootstrap-styles .infraButton.eproc-button-primary:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *)",
            ".bootstrap-styles .infraArvore .infraButton.infraArvoreNoSelecionado:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *)",
            'button[class*="infra"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *)',
            'input[type="button"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *)',
            'input[type="submit"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *)',
            'button[onclick*="abrirVisualizacao"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *)',
            'button[onclick*="processo"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *)',
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
    `;

        // Adicionar proteção específica para botões de pesquisa, navbar E infraLegendObrigatorio
        css +=
            '\n\n    /* 🎯 ALINHAMENTO: Centralizar navbar flexbox */\n    .d-none.d-md-flex {\n        align-items: center !important;\n    }\n\n    /* 🛡️ PROTEÇÃO TOTAL: Resetar estilos para elementos excluídos */\n    .btn-pesquisar, .btn-pesquisar-nova-janela, .search-button,\n    button[class*="btn-pesquisar"], .input-group-btn .btn,\n    .btn-pesquisar::before, .btn-pesquisar::after,\n    .btn-pesquisar-nova-janela::before, .btn-pesquisar-nova-janela::after,\n    .search-button::before, .search-button::after,\n    .infraLegendObrigatorio, .infraLegendObrigatorio *,\n    legend.infraLegendObrigatorio, legend.infraLegendObrigatorio * {\n        all: unset !important;\n    }\n\n    /* 🛡️ INFRALEGEND: Garantir que infraLegendObrigatorio mantenha aparência original */\n    .infraLegendObrigatorio, legend.infraLegendObrigatorio {\n        background: initial !important;\n        color: initial !important;\n        border: initial !important;\n        border-radius: initial !important;\n        box-shadow: initial !important;\n        transition: initial !important;\n        font-weight: initial !important;\n        cursor: initial !important;\n    }\n\n    ';

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
            observer.observe(document.body, { childList: true, subtree: true });
        }
    };

    // 🚀 EXECUÇÃO SIMPLIFICADA - Executar apenas uma vez quando necessário
    setTimeout(() => {
        window.gerenciarNavbarEprobe();
    }, 500);

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
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench-icon lucide-wrench"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
            selector: 'img[alt="acoes preferenciais"]',
        },
        // Atualizar/Refresh
        refresh: {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-ccw-icon lucide-refresh-ccw"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>',
            selector: 'img[id="refresh"]',
        },
        // Histórico/Lista
        historico: {
            newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-plus-icon lucide-list-plus"><path d="M11 12H3"/><path d="M16 6H3"/><path d="M16 18H3"/><path d="M18 9v6"/><path d="M21 12h-6"/></svg>',
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

    // Função para substituir ícones no fieldset de ações
    function substituirIconesFieldsetAcoes() {
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
                const container = document.createElement("span");
                container.innerHTML = replacement.newSvg;
                container.style.display = "inline-flex";
                container.style.alignItems = "center";
                container.style.marginRight = "4px";

                // Preservar classes e atributos importantes
                const svg = container.firstElementChild;
                if (svg) {
                    svg.classList.add("iconeAcao");
                    svg.style.width = "18px";
                    svg.style.height = "18px";
                }

                img.parentNode.replaceChild(container, img);
                substituicoesRealizadas++;
                console.log(`✅ ÍCONES: Substituído ícone ${img.alt}`);
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
                            const container = document.createElement("span");
                            container.innerHTML = replacement.newSvg;
                            container.style.display = "inline-flex";
                            container.style.alignItems = "center";
                            container.style.marginRight = "4px";

                            const svg = container.firstElementChild;
                            if (svg) {
                                svg.classList.add("iconeAcao");
                                svg.style.width = "18px";
                                svg.style.height = "18px";
                                svg.setAttribute(
                                    "data-eprobe-icon-replaced",
                                    "true"
                                );
                                svg.setAttribute("data-original-text", text);
                            }

                            img.parentNode.replaceChild(container, img);
                            substituicoesRealizadas++;
                            console.log(
                                `✅ ÍCONES: Substituído ícone para "${text}"`
                            );
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
                newSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench-icon lucide-wrench"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
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

    // Função para substituir ícones de ferramentas em toda a página
    function substituirIconesFerramentas() {
        console.log(
            "🎨 ÍCONES: Iniciando substituição de ícones de ferramentas"
        );

        let substituicoesRealizadas = 0;
        let errosEncontrados = [];

        try {
            // ===============================
            // DEFINIÇÃO DOS ÍCONES DE FERRAMENTAS
            // ===============================
            const ferramentasIcones = {
                "Nova Minuta": {
                    selector: 'img[src*="novo.gif"][alt="Nova Minuta"]',
                    newSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-plus-2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M3 15h6"/><path d="M6 12v6"/></svg>`,
                },
            };

            // ===============================
            // SUBSTITUIÇÃO PRINCIPAL
            // ===============================
            Object.entries(ferramentasIcones).forEach(([nome, config]) => {
                try {
                    const elementos = document.querySelectorAll(
                        config.selector
                    );
                    elementos.forEach((img) => {
                        // Verificar se já foi substituído
                        if (
                            img.hasAttribute("data-eprobe-icon-replaced") ||
                            img.classList.contains("substituted-icon")
                        ) {
                            return;
                        }

                        // Criar container SVG
                        const container = document.createElement("span");
                        container.innerHTML = config.newSvg;
                        container.style.display = "inline-flex";
                        container.style.alignItems = "center";
                        container.style.marginRight = "4px";

                        const svg = container.firstElementChild;
                        if (svg) {
                            // Preservar dimensões e estilos originais
                            svg.style.width = img.style.width || "0.9em";
                            svg.style.height = img.style.height || "0.9em";
                            svg.style.opacity = img.style.opacity || "1";

                            // Adicionar classes e atributos de controle
                            svg.classList.add(
                                "iconeFerramentas",
                                "substituted-icon"
                            );
                            svg.setAttribute(
                                "data-eprobe-icon-replaced",
                                "true"
                            );
                            svg.setAttribute("data-original-name", nome);
                            svg.setAttribute(
                                "aria-hidden",
                                img.getAttribute("aria-hidden") || "true"
                            );

                            // Preservar eventos se existirem
                            if (img.onclick) {
                                svg.onclick = img.onclick;
                            }

                            // Realizar substituição
                            img.parentNode.replaceChild(container, img);
                            substituicoesRealizadas++;
                            console.log(
                                `✅ ÍCONES: Substituído ícone "${nome}"`
                            );
                        }
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
                    src: img.src,
                    alt: img.alt,
                    className: img.className,
                    width: img.style.width,
                    height: img.style.height,
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
                src: img.src,
                alt: img.alt,
                parentElement: img.parentElement.tagName,
                parentText: img.parentElement.textContent
                    ?.trim()
                    .substring(0, 50),
            });
        });

        // Analisar todos os ícones GIF na página
        const todosGifs = document.querySelectorAll('img[src*=".gif"]');
        console.log(
            `🔍 DEBUG: ${todosGifs.length} ícones GIF encontrados na página`
        );

        const gifsSumario = {};
        todosGifs.forEach((img) => {
            const nomeArquivo = img.src.split("/").pop();
            if (!gifsSumario[nomeArquivo]) {
                gifsSumario[nomeArquivo] = 0;
            }
            gifsSumario[nomeArquivo]++;
        });

        console.log("🔍 DEBUG: Resumo de GIFs por arquivo:", gifsSumario);
    }

    // Expor função globalmente para debug
    window.SENT1_AUTO = window.SENT1_AUTO || {};
    window.SENT1_AUTO.substituirIconesFieldsetAcoes =
        substituirIconesFieldsetAcoes;
    window.SENT1_AUTO.substituirIconesFerramentas = substituirIconesFerramentas;
    window.SENT1_AUTO.inicializarSubstituicaoIcones =
        inicializarSubstituicaoIcones;
    window.SENT1_AUTO.testarFuncoesIcones = testarFuncoesIcones;
    window.SENT1_AUTO.debugIconesNaPagina = debugIconesNaPagina;

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

    // Expor função de debug globalmente
    window.SENT1_AUTO = window.SENT1_AUTO || {};
    window.SENT1_AUTO.debugIncluirPautaMesa = debugIncluirPautaMesa;

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
})(); // Fechamento da IIFE principal
