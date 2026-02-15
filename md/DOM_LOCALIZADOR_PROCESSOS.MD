<html lang="pt-br" style="font-size: 100%;" data-lt-installed="true"><head><style id="eprobe-navbar-instant-immediate">
                /* NAVBAR APLICADA IMEDIATAMENTE NO CARREGAMENTO DO SCRIPT */
                #navbar.navbar.bg-instancia,
                .navbar.bg-instancia,
                nav.navbar.bg-instancia,
                .navbar.text-white.bg-instancia,
                .navbar.text-white.d-xl-flex.bg-instancia {
                    background-image: linear-gradient(to left, #6b46c1, #4c1d95) !important;
                    display: flex !important;
                    align-items: center !important;
                    min-height: 50px !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                    transition: background-image 0.3s ease !important;
                }
                
                #navbar.navbar.bg-instancia > *,
                .navbar.bg-instancia > *,
                nav.navbar.bg-instancia > * {
                    display: flex !important; 
                    align-items: center !important;
                    min-height: 50px !important;
                }
                
                /* 🎯 REGRA CRÍTICA OBRIGATÓRIA: .d-none.d-md-flex SEMPRE FLEX */
                .d-none.d-md-flex,
                div.d-none.d-md-flex,
                .navbar .d-none.d-md-flex,
                #navbar .d-none.d-md-flex {
                    display: flex !important;
                    align-items: center !important;
                }
            </style><style id="eprobe-instant-styles">
        /* ===== ESTILOS INSTANTÂNEOS ANTI-FLASH ===== */
        
        /* Ocultar flash inicial com transição suave */
        body {
            transition: opacity 0.1s ease-in-out !important;
        }
        
        /* Preparar containers para elementos eProbe */
        .navbar, #navbar {
            display: flex !important; 
            align-items: center !important;
        }
        
        /* ANTI-FLASH NAVBAR INSTANTÂNEO */
        #navbar.navbar.bg-instancia,
        .navbar.bg-instancia,
        nav.navbar.bg-instancia {
            display: flex !important;
            align-items: center !important;
            min-height: 50px !important;
        }
        
        #navbar.navbar.bg-instancia > *,
        .navbar.bg-instancia > *,
        nav.navbar.bg-instancia > * {
            display: flex !important; 
            align-items: center !important;
            min-height: 50px !important;
            
        }
        
        /* Fontes críticas carregadas instantaneamente */
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap');
        
        /* 🎨 ALINHAMENTO PADRONIZADO DE ÍCONES SVG - eProbe */
        span[data-eprobe-icon-container] {
            display: inline-flex !important;
            align-items: center !important;
            vertical-align: middle !important;
            margin-right: 4px !important;
        }
        
        span[data-eprobe-icon-container] svg {
            flex-shrink: 0 !important;
            vertical-align: middle !important;
        }
        
        /* Alinhamento específico para ícones de ação */
        .iconeAcao,
        span:has(> svg.iconeAcao) {
            display: inline-flex !important;
            align-items: center !important;
            vertical-align: middle !important;
        }
        
        /* Cards de sessão unificados */
        .session-card {
            opacity: 1;
            transform: translateX(0);
        }
        
        /* Navbar sem animação */
        #eprobe-navbar-element {
            display: flex !important; 
            align-items: center !important;
            transition: all 0.3s ease !important;
        }
        
        /* Efeito hover na logo eProbe */
        #eprobe-navbar-element:hover {
            background-color: rgba(255, 255, 255, 0.2784313725) !important;
            border-radius: 5px !important;
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
            margin-right: 3px !important;
        }
        
        /* ===== MODAL E NOTIFICAÇÕES PREPARADAS ===== */
        .eprobe-modal,
        .eprobe-notification {
            opacity: 0;
            animation: fadeInElement 0.3s ease-out forwards;
        }
        
        /* ===== ESTILOS PARA ESTRELAS PERSONALIZADAS (SEM INTERFERIR NA FUNCIONALIDADE) ===== */
        .eprobe-estrela-personalizada:hover {
            transform: scale(1.1) !important;
            filter: brightness(1.5) contrast(1.3) drop-shadow(0 0 3px gold) !important;
        }
        
        /* ===== ESTILOS PARA LEMBRETES ===== */
        .divLembretePara {
            margin-bottom: 15px !important;
            justify-content: space-around !important;
            font-size: small !important;
            -webkit-font-smoothing: antialiased !important;
        }
        
        /* 🎯 REGRA CRÍTICA OBRIGATÓRIA: .d-none.d-md-flex SEMPRE FLEX - INSTANTÂNEO */
        .d-none.d-md-flex,
        div.d-none.d-md-flex,
        .navbar .d-none.d-md-flex,
        #navbar .d-none.d-md-flex,
        .navbar-nav .d-none.d-md-flex,
        .navbar-collapse .d-none.d-md-flex {
            display: flex !important;
            align-items: center !important;
            visibility: visible !important;
            opacity: 1 !important;
        }
        
        /* Classe do eProc - desLembrete com novos estilos */
        .desLembrete {
            margin: 25px 25px 25px 25px !important;
            align-items: baseline !important;
        }
        
        /* Classe do eProc - divLembretePara com novos estilos */
        .divLembretePara {
            justify-content: space-around !important;
            font-size: small !important;
            -webkit-font-smoothing: antialiased !important;
        }
    </style><style data-eprobe-ultra-critical="true">
            /* ===== ULTRA ANTI-FLASH CRITICAL STYLES ===== */
            
            /* 🎯 SISTEMA ANTI-FLASH PARA ELEMENTOS EPROBE - APLICADO PRIMEIRO */
            .eprobe-loading, 
            .eprobe-creating,
            [data-eprobe-state="loading"] {
                opacity: 0 !important;
                transition: opacity 0.15s ease-out !important;
                pointer-events: none !important;
                visibility: hidden !important;
            }

            .eprobe-ready {
                opacity: 1 !important;
                pointer-events: auto !important;
                visibility: visible !important;
            }

            /* 🚀 COORDENAÇÃO DE BATCH: Elementos aguardando revelação coordenada */
            .eprobe-batch-pending {
                opacity: 0 !important;
                transition: opacity 0.2s ease-out !important;
            }

            .eprobe-batch-ready {
                opacity: 1 !important;
            }

            /* Preparação instantânea do body */
            body {
                visibility: visible !important;
                opacity: 1 !important;
                transition: none !important;
            }

            /* INTERCEPTAÇÃO TOTAL: Divs de lembrete - estilos aplicados ANTES da renderização */
            div.divLembrete[style*="background-color:#efef8f"],
            div.divLembrete[style*="background-color: #efef8f"],
            div[style*="background-color:#efef8f"]:not([data-eprobe-processed]) {
                background: linear-gradient(#F9EFAF, #F7E98D) !important;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
                padding: 20px !important;
                min-width: 315px !important;
                min-height: 140px !important;
                transition: box-shadow 0.5s ease !important;
                -webkit-font-smoothing: subpixel-antialiased !important;
                visibility: visible !important;
                opacity: 1 !important;
            }

            div.divLembrete[style*="background-color:#efef8f"]:hover,
            div.divLembrete[style*="background-color: #efef8f"]:hover,
            div[style*="background-color:#efef8f"]:not([data-eprobe-processed]):hover {
                box-shadow: 0 5px 8px rgba(0,0,0,0.15) !important;
            }

            div.divLembrete[style*="background-color:#efef8f"]:focus,
            div.divLembrete[style*="background-color: #efef8f"]:focus,
            div[style*="background-color:#efef8f"]:not([data-eprobe-processed]):focus {
                box-shadow: 0 5px 12px !important;
            }

            div.divLembrete[style*="background-color:#db8080"],
            div.divLembrete[style*="background-color: #db8080"],
            div[style*="background-color:#db8080"]:not([data-eprobe-processed]) {
                background: linear-gradient(#FAAFAF, #F78D8D) !important;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
                padding: 20px !important;
                min-width: 315px !important;
                min-height: 140px !important;
                transition: box-shadow 0.5s ease !important;
                -webkit-font-smoothing: subpixel-antialiased !important;
                visibility: visible !important;
                opacity: 1 !important;
            }

            div.divLembrete[style*="background-color:#db8080"]:hover,
            div.divLembrete[style*="background-color: #db8080"]:hover,
            div[style*="background-color:#db8080"]:not([data-eprobe-processed]):hover {
                box-shadow: 0 5px 8px rgba(0,0,0,0.15) !important;
            }

            div.divLembrete[style*="background-color:#db8080"]:focus,
            div.divLembrete[style*="background-color: #db8080"]:focus,
            div[style*="background-color:#db8080"]:not([data-eprobe-processed]):focus {
                box-shadow: 0 5px 12px !important;
            }

            div.divLembrete[style*="background-color:#87adcd"],
            div.divLembrete[style*="background-color: #87adcd"],
            div[style*="background-color:#87adcd"]:not([data-eprobe-processed]) {
                background: linear-gradient(#AFCFFA, #8DC0F7) !important;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
                padding: 20px !important;
                min-width: 315px !important;
                min-height: 140px !important;
                transition: box-shadow 0.5s ease !important;
                -webkit-font-smoothing: subpixel-antialiased !important;
                visibility: visible !important;
                opacity: 1 !important;
            }

            div.divLembrete[style*="background-color:#87adcd"]:hover,
            div.divLembrete[style*="background-color: #87adcd"]:hover,
            div[style*="background-color:#87adcd"]:not([data-eprobe-processed]):hover {
                box-shadow: 0 5px 8px rgba(0,0,0,0.15) !important;
            }

            div.divLembrete[style*="background-color:#87adcd"]:focus,
            div.divLembrete[style*="background-color: #87adcd"]:focus,
            div[style*="background-color:#87adcd"]:not([data-eprobe-processed]):focus {
                box-shadow: 0 5px 12px !important;
            }

            div.divLembrete[style*="background-color:#a7eda7"],
            div.divLembrete[style*="background-color: #a7eda7"],
            div[style*="background-color:#a7eda7"]:not([data-eprobe-processed]) {
                background: linear-gradient(#AFFAB6, #8DF792) !important;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
                padding: 20px !important;
                min-width: 315px !important;
                min-height: 140px !important;
                transition: box-shadow 0.5s ease !important;
                -webkit-font-smoothing: subpixel-antialiased !important;
                visibility: visible !important;
                opacity: 1 !important;
            }

            div.divLembrete[style*="background-color:#a7eda7"]:hover,
            div.divLembrete[style*="background-color: #a7eda7"]:hover,
            div[style*="background-color:#a7eda7"]:not([data-eprobe-processed]):hover {
                box-shadow: 0 5px 8px rgba(0,0,0,0.15) !important;
            }

            div.divLembrete[style*="background-color:#a7eda7"]:focus,
            div.divLembrete[style*="background-color: #a7eda7"]:focus,
            div[style*="background-color:#a7eda7"]:not([data-eprobe-processed]):focus {
                box-shadow: 0 5px 12px !important;
            }

            div.divLembrete[style*="background-color:#f5b574"],
            div.divLembrete[style*="background-color: #f5b574"],
            div[style*="background-color:#f5b574"]:not([data-eprobe-processed]) {
                background: linear-gradient(#FAD3AF, #F7C68D) !important;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
                padding: 20px !important;
                min-width: 315px !important;
                min-height: 140px !important;
                transition: box-shadow 0.5s ease !important;
                -webkit-font-smoothing: subpixel-antialiased !important;
                visibility: visible !important;
                opacity: 1 !important;
            }

            div.divLembrete[style*="background-color:#f5b574"]:hover,
            div.divLembrete[style*="background-color: #f5b574"]:hover,
            div[style*="background-color:#f5b574"]:not([data-eprobe-processed]):hover {
                box-shadow: 0 5px 8px rgba(0,0,0,0.15) !important;
            }

            div.divLembrete[style*="background-color:#f5b574"]:focus,
            div.divLembrete[style*="background-color: #f5b574"]:focus,
            div[style*="background-color:#f5b574"]:not([data-eprobe-processed]):focus {
                box-shadow: 0 5px 12px !important;
            }

            /* INTERCEPTAÇÃO DE ELEMENTOS LISTA: Para estruturas .lista-lembretes */
            .lista-lembretes .lembrete[style*="background-color:#efef8f"],
            .lista-lembretes .lembrete[style*="background-color: #efef8f"] {
                background: linear-gradient(#F9EFAF, #F7E98D) !important;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
                padding: 20px !important;
                min-width: 315px !important;
                min-height: 140px !important;
                transition: box-shadow 0.5s ease !important;
                -webkit-font-smoothing: subpixel-antialiased !important;
                visibility: visible !important;
                opacity: 1 !important;
            }

            .lista-lembretes .lembrete[style*="background-color:#efef8f"]:hover,
            .lista-lembretes .lembrete[style*="background-color: #efef8f"]:hover {
                box-shadow: 0 5px 8px rgba(0,0,0,0.15) !important;
            }

            .lista-lembretes .lembrete[style*="background-color:#efef8f"]:focus,
            .lista-lembretes .lembrete[style*="background-color: #efef8f"]:focus {
                box-shadow: 0 5px 12px !important;
            }

            .lista-lembretes .lembrete[style*="background-color:#db8080"],
            .lista-lembretes .lembrete[style*="background-color: #db8080"] {
                background: linear-gradient(#FAAFAF, #F78D8D) !important;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
                padding: 20px !important;
                min-width: 315px !important;
                min-height: 140px !important;
                transition: box-shadow 0.5s ease !important;
                -webkit-font-smoothing: subpixel-antialiased !important;
                visibility: visible !important;
                opacity: 1 !important;
            }

            .lista-lembretes .lembrete[style*="background-color:#db8080"]:hover,
            .lista-lembretes .lembrete[style*="background-color: #db8080"]:hover {
                box-shadow: 0 5px 8px rgba(0,0,0,0.15) !important;
            }

            .lista-lembretes .lembrete[style*="background-color:#db8080"]:focus,
            .lista-lembretes .lembrete[style*="background-color: #db8080"]:focus {
                box-shadow: 0 5px 12px !important;
            }

            .lista-lembretes .lembrete[style*="background-color:#87adcd"],
            .lista-lembretes .lembrete[style*="background-color: #87adcd"] {
                background: linear-gradient(#AFCFFA, #8DC0F7) !important;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
                padding: 20px !important;
                min-width: 315px !important;
                min-height: 140px !important;
                transition: box-shadow 0.5s ease !important;
                -webkit-font-smoothing: subpixel-antialiased !important;
                visibility: visible !important;
                opacity: 1 !important;
            }

            .lista-lembretes .lembrete[style*="background-color:#87adcd"]:hover,
            .lista-lembretes .lembrete[style*="background-color: #87adcd"]:hover {
                box-shadow: 0 5px 8px rgba(0,0,0,0.15) !important;
            }

            .lista-lembretes .lembrete[style*="background-color:#87adcd"]:focus,
            .lista-lembretes .lembrete[style*="background-color: #87adcd"]:focus {
                box-shadow: 0 5px 12px !important;
            }

            .lista-lembretes .lembrete[style*="background-color:#a7eda7"],
            .lista-lembretes .lembrete[style*="background-color: #a7eda7"] {
                background: linear-gradient(#AFFAB6, #8DF792) !important;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
                padding: 20px !important;
                min-width: 315px !important;
                min-height: 140px !important;
                transition: box-shadow 0.5s ease !important;
                -webkit-font-smoothing: subpixel-antialiased !important;
                visibility: visible !important;
                opacity: 1 !important;
            }

            .lista-lembretes .lembrete[style*="background-color:#a7eda7"]:hover,
            .lista-lembretes .lembrete[style*="background-color: #a7eda7"]:hover {
                box-shadow: 0 5px 8px rgba(0,0,0,0.15) !important;
            }

            .lista-lembretes .lembrete[style*="background-color:#a7eda7"]:focus,
            .lista-lembretes .lembrete[style*="background-color: #a7eda7"]:focus {
                box-shadow: 0 5px 12px !important;
            }

            .lista-lembretes .lembrete[style*="background-color:#f5b574"],
            .lista-lembretes .lembrete[style*="background-color: #f5b574"] {
                background: linear-gradient(#FAD3AF, #F7C68D) !important;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
                padding: 20px !important;
                min-width: 315px !important;
                min-height: 140px !important;
                transition: box-shadow 0.5s ease !important;
                -webkit-font-smoothing: subpixel-antialiased !important;
                visibility: visible !important;
                opacity: 1 !important;
            }

            .lista-lembretes .lembrete[style*="background-color:#f5b574"]:hover,
            .lista-lembretes .lembrete[style*="background-color: #f5b574"]:hover {
                box-shadow: 0 5px 8px rgba(0,0,0,0.15) !important;
            }

            .lista-lembretes .lembrete[style*="background-color:#f5b574"]:focus,
            .lista-lembretes .lembrete[style*="background-color: #f5b574"]:focus {
                box-shadow: 0 5px 12px !important;
            }

            /* Spacing fixes para lembretes - aplicados instantaneamente */
            .divLembretePara, .lblLembretePara {
                margin-bottom: 15px !important;
                justify-content: space-around !important;
                font-size: small !important;
                -webkit-font-smoothing: antialiased !important;
            }

            .divLembreteData, .lblLembreteData {
                /* margin-top removido - sem mais forçar margem superior */
            }

            /* Novos estilos para classes do eProc */
            .desLembrete {
                margin: 15px 15px 15px 15px !important;
                align-items: baseline !important;
            }

            .divLembretePara {
                justify-content: space-around !important;
                font-size: small !important;
                -webkit-font-smoothing: antialiased !important;
            }

            /* INTERCEPTAÇÃO TOTAL: Botões de ler mais - ocultar ANTES da renderização */
            div.botaoLerMais:not([data-eprobe-expandir-replaced]):not([data-eprobe-processed]) {
                visibility: hidden !important;
                opacity: 0 !important;
                position: absolute !important;
                left: -9999px !important;
                pointer-events: none !important;
                margin-bottom: inherit !important;
            }

            /* Botões marcados para substituição - ocultar completamente */
            div.botaoLerMais[data-eprobe-will-replace="true"] {
                display: none !important;
                visibility: hidden !important;
            }

            /* Elementos eProbe - garantir visibilidade imediata */
            [id*="eprobe"], [class*="eprobe"], [data-eprobe-expandir-replaced] {
                visibility: visible !important;
                opacity: 1 !important;
                position: static !important;
                pointer-events: auto !important;
            }

            /* Navbar preparação - evitar interferência */
            .navbar, #navbar, .infraBarraComandos {
                align-items: center !important;
            }

            /* NAVBAR ANTI-FLASH INSTANTÂNEO */
            #navbar.navbar.bg-instancia,
            .navbar.bg-instancia,
            nav.navbar.bg-instancia,
            .navbar.text-white.bg-instancia,
            .navbar.text-white.d-xl-flex.bg-instancia {
                display: flex !important;
                align-items: center !important;
                min-height: 50px !important;
            }

            /* Alinhamento instantâneo dos elementos internos da navbar */
            #navbar.navbar.bg-instancia > *,
            .navbar.bg-instancia > *,
            nav.navbar.bg-instancia > * {
                display: flex !important;
                align-items: center !important;
                min-height: 50px !important;
            }

            /* ANTI-FLASH UNIVERSAL: Prevenir qualquer transição visível */
            .divLembrete, .lista-lembretes .lembrete {
                will-change: auto !important;
                backface-visibility: hidden !important;
                transform: translateZ(0) !important;
            }

            /* 🎯 REGRA CRÍTICA OBRIGATÓRIA: .d-none.d-md-flex SEMPRE FLEX - ULTRA PRIORITÁRIO */
            .d-none.d-md-flex,
            div.d-none.d-md-flex,
            .navbar .d-none.d-md-flex,
            #navbar .d-none.d-md-flex,
            .navbar-nav .d-none.d-md-flex,
            .navbar-collapse .d-none.d-md-flex {
                display: flex !important;
                align-items: center !important;
                visibility: visible !important;
                opacity: 1 !important;
            }

            /* ===== SISTEMA ANTI-FLASH ESPECÍFICO PARA PÁGINAS DE PROCESSO ===== */

            /* NOVA ABORDAGEM: APENAS ocultar ícones em div.divLembrete */
            .divLembrete .material-icons:not([data-eprobe-icon-replaced="true"]),
            .lista-lembretes .lembrete .material-icons:not([data-eprobe-icon-replaced="true"]) {
                display: none !important;
            }

            /* GARANTIR: Apenas ícones específicos do eProbe permanecem visíveis */
            .material-icons[data-eprobe-icon],
            .eprobe-icon .material-icons,
            [data-eprobe-container] .material-icons {
                display: inline-block !important;
                visibility: visible !important;
                opacity: 1 !important;
            }

            /* ===== ANTI-FLASH TOTAL PARA TODOS OS ELEMENTOS ===== */

            /* NAVBAR: Evitar flash da barra de navegação */
            .navbar,
            #navbar,
            .navbar-nav,
            .navbar-collapse,
            .navbar-brand {
                transition: none !important;
                will-change: auto !important;
                backface-visibility: hidden !important;
                transform: translateZ(0) !important;
            }

            /* BOTÕES: Evitar flash de botões que serão customizados */
            .botaoLerMais,
            .btn,
            button,
            input[type="button"],
            input[type="submit"] {
                transition: none !important;
                will-change: auto !important;
            }

            /* BOTÕES ESPECÍFICOS: Ocultar botões que serão substituídos */
            .botaoLerMais:not([data-eprobe-processed]) {
                opacity: 0.8 !important;
                transition: none !important;
            }

            /* ELEMENTOS EPROBE: Revelar apenas elementos processados */
            [data-eprobe-processed],
            [data-eprobe-personalized],
            .eprobe-custom-element {
                opacity: 1 !important;
                visibility: visible !important;
                transition: opacity 0.2s ease !important;
            }


            /* ESPECÍFICO: Elementos do eProc que causam flash */
            .infraFieldset,
            .infraLegendObrigatorio,
            #divInfraAreaGlobal {
                transition: none !important;
            }
        </style>

<link rel="shortcut icon" href="imagens/icons/favicons/favicon_trf4P.ico"><meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"><style id="css-ddslick" type="text/css">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:10px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:10px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; }.dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{ position:relative;}​ .dd-selected-text { font-weight:bold}​</style><style>[vw] [vw-access-button]{display:none;flex-direction:row-reverse;width:40px;height:40px;cursor:pointer;overflow:hidden;position:absolute;border-radius:8px;transition:all 0.5s ease;right:0;left:auto}[vw] [vw-access-button] img{max-height:40px;transition:all 0.5s ease;border-radius:8px;opacity:1 !important;visibility:visible !important}[vw] [vw-access-button] .vp-access-button{width:40px;height:40px;z-index:1}[vw] [vw-access-button] .vp-pop-up{position:absolute;height:40px;min-width:150px;z-index:0;left:0;right:auto}[vw] [vw-access-button]:hover{width:200px}[vw] [vw-access-button].isLeft{flex-direction:row;left:0;right:auto}[vw] [vw-access-button].isLeft .vp-pop-up{left:auto;right:0}[vw] [vw-access-button].isTopOrBottom:hover{bottom:-20px;top:0;margin-right:-80px}[vw] [vw-access-button].active{display:flex}
</style><style>[vw].left [vw-plugin-wrapper]{float:left}[vw] [vw-plugin-wrapper]{position:relative;display:none;width:300px;height:100%;float:right;background:white;-webkit-box-shadow:0px 0px 15px rgba(0,0,0,0.2);-moz-box-shadow:0px 0px 15px rgba(0,0,0,0.2);box-shadow:0px 0px 15px rgba(0,0,0,0.2);border-radius:12px;-moz-border-radius:12px;-webkit-border-radius:12px}[vw] [vw-plugin-wrapper].active{display:-webkit-flex;display:flex;flex-direction:column;-webkit-flex-direction:column;height:450px;max-width:100%;min-height:100%}
</style><style>div[vw]{position:fixed;max-width:95vw;min-height:40px;min-width:40px;z-index:2147483645 !important;display:none;margin:10px !important}div[vw].enabled{display:block}div[vw].active{margin-top:-285px}div[vw].left{left:0;right:initial}
</style><style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        
        /* Padronização da fonte Roboto APENAS para elementos da extensão eProbe */
        [id*="sent1"], [id*="documento-relevante"], [class*="eprobe"], 
        #sent1-auto-button, #documento-relevante-options-menu,
        #documento-relevante-selection-modal, #documento-relevante-preview-modal,
        #api-config-modal, #error-logs-modal, #api-key-config,
        .eprobe-notification, .eprobe-tooltip, .eprobe-modal, .eprobe-button, .eprobe-menu {
            font-family: "Roboto", -apple-system, system-ui, sans-serif !important;
        }
        
        /* Estilo específico para o botão documento-relevante-auto-button */
        #documento-relevante-auto-button {
            margin-right: 3px !important;
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

        /* PRESERVAR clicabilidade para ícones dentro de botões e links - CORREÇÃO CRÍTICA */
        button .substituted-icon,
        button .iconeFerramentas,
        button [data-eprobe-icon-replaced="true"],
        button span,
        a .substituted-icon,
        a .iconeFerramentas,
        a [data-eprobe-icon-replaced="true"],
        .infraLegendObrigatorio button .substituted-icon,
        .infraLegendObrigatorio button .iconeFerramentas,
        .infraLegendObrigatorio button [data-eprobe-icon-replaced="true"],
        .infraLegendObrigatorio button span,
        .infraLegendObrigatorio .substituted-icon,
        .infraLegendObrigatorio .iconeFerramentas,
        .infraLegendObrigatorio [data-eprobe-icon-replaced="true"] {
            pointer-events: auto !important;
        }

        /* 📏 DIMENSIONAMENTO ESPECÍFICO: Ícones em divListaRecursosMinuta devem ter 17.59x17.59 */
        #divListaRecursosMinuta svg[data-eprobe-icon-replaced="true"],
        #divListaRecursosMinuta [data-eprobe-recursos-minuta-sized="true"] {
            width: 17.59px !important;
            height: 17.59px !important;
            min-width: 17.59px !important;
            min-height: 17.59px !important;
            max-width: 17.59px !important;
            max-height: 17.59px !important;
            vertical-align: middle !important;
            display: inline-block !important;
        }

        /* ALINHAMENTO CRÍTICO: Garantir que containers estejam perfeitamente alinhados */
        #divListaRecursosMinuta span:has(svg[data-eprobe-icon-replaced="true"]) {
            width: 17.59px !important;
            height: 17.59px !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            vertical-align: middle !important;
            line-height: 1 !important;
            margin: 0 !important;
            padding: 0 !important;
        }

        /* CORREÇÃO DE ALINHAMENTO: Ícones originais e personalizados na mesma linha */
        #divListaRecursosMinuta img,
        #divListaRecursosMinuta svg[data-eprobe-icon-replaced="true"] {
            vertical-align: middle !important;
            display: inline-block !important;
            margin: 0 !important;
            padding: 0 !important;
        }

        /* GARANTIR consistência com ícones nativos do eProc */
        #divListaRecursosMinuta a,
        #divListaRecursosMinuta a img,
        #divListaRecursosMinuta a svg {
            vertical-align: middle !important;
            line-height: 1 !important;
            display: inline-flex !important;
            align-items: center !important;
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
            background-color: rgb(19, 67, 119) !important;
            border-color: rgb(19, 67, 119) !important;
            transform: translateY(-1px) !important;
        }

        .eprobe-button-hover:focus {
            background-color: rgb(19, 67, 119) !important;
            border-color: rgb(19, 67, 119) !important;
            outline: 2px solid #ffffffff !important;
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

        /* ⚡ ANTI-FLASH TOTAL: Sistema robusto para eliminar completamente o flash visual */

        /* 1. Ocultar QUALQUER elemento de lembrete até ser processado */
        .lista-lembretes .lembrete:not(.eprobe-lembrete-processado),
        div.divLembrete:not(.eprobe-lembrete-processado) {
            visibility: hidden !important;
            opacity: 0 !important;
            position: relative !important;
            min-width: 315px !important;
            min-height: 140px !important;
        }

        /* 2. Mostrar apenas elementos processados */
        .lista-lembretes .lembrete.eprobe-lembrete-processado,
        div.divLembrete.eprobe-lembrete-processado {
            visibility: visible !important;
            opacity: 1 !important;
            transition: opacity 0.2s ease-in-out !important;
            min-width: 315px !important;
            min-height: 140px !important;
        }

        /* 3. Pré-aplicar estilos ANTES do elemento aparecer */
        .lista-lembretes .lembrete.eprobe-lembrete-processado,
        div.divLembrete.eprobe-lembrete-processado {
            padding: 20px !important;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
            transition: box-shadow 0.5s ease !important;
            -webkit-font-smoothing: subpixel-antialiased !important;
            min-width: 315px !important;
            min-height: 140px !important;


        }

        /* 4. Material Icons são tratados pela regra global posterior */

        /* Botões de abertura otimizados */
        .eprobe-open-button:hover {
            background-color: rgba(148, 163, 184, 0.1) !important;
        }

        /* Container e botão de remoção otimizados - MÚLTIPLAS ESPECIFICIDADES */
        .eprobe-container-hover .eprobe-remove-button {
            opacity: 0 !important;
            transition: opacity 0.2s ease !important;
        }

        /* Forçar especificidade extra para garantir que funcione */
        div.eprobe-container-hover .eprobe-remove-button,
        .eprobe-container-hover button.eprobe-remove-button {
            opacity: 0 !important;
            transition: opacity 0.2s ease !important;
        }

        .eprobe-container-hover:hover .eprobe-remove-button {
            opacity: 1 !important;
        }

        /* Hover com especificidade extra */
        div.eprobe-container-hover:hover .eprobe-remove-button,
        .eprobe-container-hover:hover button.eprobe-remove-button {
            opacity: 1 !important;
        }

        /* Efeitos hover para o ícone SVG do botão de remover */
        .eprobe-remove-button {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: all 0.2s ease !important;
        }

        .eprobe-remove-button svg {
            transition: all 0.2s ease !important;
        }

        .eprobe-remove-button:hover svg {
        fill: #dc2626 !important;
        transform: scale(1.1) !important;
        }

        /* Opções de menu otimizadas */
        .eprobe-menu-option {
            background-color: transparent !important;
            transition: background-color 0.2s ease;
        }

        .eprobe-menu-option:hover {
            background-color: #f8f9fa !important;
        }
    </style><link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&amp;icon_names=history_2,gavel"><link rel="stylesheet" as="style" href="chrome-extension://glddgfhodpdiechdjcmalnfifahbmjaj/src/material-icons.css"><style id="eprobe-instant-performance">
                    /* Performance instantânea para elementos eProbe */
                    body { opacity: 1 !important; }
                    .navbar { opacity: 1 !important; }

                    /* Garantir que elementos críticos apareçam imediatamente */
                    #navbar.navbar.bg-instancia,
                    .navbar.bg-instancia {
                        opacity: 1 !important;
                        transition: all 0.3s ease !important;
                        display: flex !important;
                        align-items: center !important;
                    }

                    /* Aplicar estilos SVG Figma instantaneamente */
                    .eprobe-figma-card-svg {
                        display: inline-block !important;
                        margin: 8px 0 !important;
                        position: relative !important;
                    }
                </style><style data-eprobe-material-design="true">
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
                </style><style id="eprobe-estilo-botoes-eproc">
        /* 🎨 eProbe - Estilo Personalizado dos Botões do eProc - Tema: minimalista */

        /* 🎯 SINCRONIZAÇÃO: Elemento txtUnderline do eProc com mesma cor dos botões */
        #txtUnderline {
            color: #495057 !important;
        }

        /* Estilo base dos botões */
        .bootstrap-styles .btn:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close), .bootstrap-styles .eproc-button:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close), .bootstrap-styles .eproc-button-primary:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close), .bootstrap-styles .infraButton:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close), .bootstrap-styles .infraButton.btn-primary:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close), .bootstrap-styles .infraButton.eproc-button-primary:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close), .bootstrap-styles .infraArvore .infraButton.infraArvoreNoSelecionado:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close), button[class*="infra"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close), input[type="button"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close), input[type="submit"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close), button[onclick*="abrirVisualizacao"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close), button[onclick*="processo"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close) {
            background: #f8f9fa !important;
            color: #495057 !important;
            border: 1px solid #dee2e6 !important;
            border-radius: 4px !important;
            box-shadow: none !important;
            transition: all 0.2s ease !important;
            font-weight: 500 !important;
            cursor: pointer !important;
        }

        /* Estilo hover */
        .bootstrap-styles .btn:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):hover, .bootstrap-styles .eproc-button:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):hover, .bootstrap-styles .eproc-button-primary:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):hover, .bootstrap-styles .infraButton:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):hover, .bootstrap-styles .infraButton.btn-primary:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):hover, .bootstrap-styles .infraButton.eproc-button-primary:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):hover, .bootstrap-styles .infraArvore .infraButton.infraArvoreNoSelecionado:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):hover, button[class*="infra"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):hover, input[type="button"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):hover, input[type="submit"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):hover, button[onclick*="abrirVisualizacao"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):hover, button[onclick*="processo"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):hover {
            background-color: #e9ecef !important;
                border-color: #adb5bd !important;
        }

        /* Estilo focus */
        .bootstrap-styles .btn:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):focus, .bootstrap-styles .eproc-button:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):focus, .bootstrap-styles .eproc-button-primary:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):focus, .bootstrap-styles .infraButton:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):focus, .bootstrap-styles .infraButton.btn-primary:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):focus, .bootstrap-styles .infraButton.eproc-button-primary:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):focus, .bootstrap-styles .infraArvore .infraButton.infraArvoreNoSelecionado:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):focus, button[class*="infra"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):focus, input[type="button"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):focus, input[type="submit"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):focus, button[onclick*="abrirVisualizacao"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):focus, button[onclick*="processo"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):focus {
            border-color: #80bdff !important;
                box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25) !important;
        }

        /* Estilo disabled */
        .bootstrap-styles .btn:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):disabled, .bootstrap-styles .eproc-button:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):disabled, .bootstrap-styles .eproc-button-primary:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):disabled, .bootstrap-styles .infraButton:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):disabled, .bootstrap-styles .infraButton.btn-primary:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):disabled, .bootstrap-styles .infraButton.eproc-button-primary:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):disabled, .bootstrap-styles .infraArvore .infraButton.infraArvoreNoSelecionado:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):disabled, button[class*="infra"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):disabled, input[type="button"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):disabled, input[type="submit"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):disabled, button[onclick*="abrirVisualizacao"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):disabled, button[onclick*="processo"]:not(.btn-pesquisar):not(.btn-pesquisar-nova-janela):not(.search-button):not(#eprobe-navbar-element):not(#eprobe-navbar-element *):not(.infraLegendObrigatorio):not(.infraLegendObrigatorio *):not(.btn-link):not(.btn-sm):not(.select2-search-choice-close):disabled {
            opacity: 0.6 !important;
            cursor: not-allowed !important;
            transform: none !important;
        }


            /* 🛡️ EPROBE BUTTONS: Margin-right nos SVGs dos botões personalizados */
            #documento-relevante-auto-button svg { margin-right: 3px !important; }
            .infraButton svg { margin-right: 3px !important; }
            .btn-primary svg { margin-right: 3px !important; }
            .eprobe-button svg { margin-right: 3px !important; }

            /* 🛡️ PROTEÇÃO: Garantir espaçamento correto em todos os botões eProbe */
            button[id*="documento-relevante"] svg { margin-right: 3px !important; }


    /* 🎯 REGRA CRÍTICA OBRIGATÓRIA: .d-none.d-md-flex SEMPRE FLEX - ALTA PRIORIDADE */
    .d-none.d-md-flex,
    div.d-none.d-md-flex,
    .navbar .d-none.d-md-flex,
    #navbar .d-none.d-md-flex,
    .navbar-nav .d-none.d-md-flex,
    .navbar-collapse .d-none.d-md-flex {
        display: flex !important;
        align-items: center !important;
        visibility: visible !important;
        opacity: 1 !important;
        height: auto !important;
        width: auto !important;
    }

    /* 🛡️ PROTEÇÃO: Manter aparência original para elementos excluídos */
    .btn-pesquisar, .btn-pesquisar-nova-janela, .search-button,
    button[class*="btn-pesquisar"], .input-group-btn .btn,
    .btn-pesquisar::before, .btn-pesquisar::after,
    .btn-pesquisar-nova-janela::before, .btn-pesquisar-nova-janela::after,
    .search-button::before, .search-button::after,
    .infraLegendObrigatorio, .infraLegendObrigatorio *,
    legend.infraLegendObrigatorio, legend.infraLegendObrigatorio * {
        /* Preservar estilos originais sem resetar tudo */
    }

    /* 🛡️ INFRALEGEND: Garantir que infraLegendObrigatorio mantenha aparência original (EXCETO legMinutas) */
    .infraLegendObrigatorio:not(#legMinutas), legend.infraLegendObrigatorio:not(#legMinutas) {
        background: initial !important;
        color: initial !important;
        border: initial !important;
        border-radius: initial !important;
        box-shadow: initial !important;
        transition: initial !important;
        font-weight: initial !important;
        cursor: initial !important;
    }

</style><style id="eprobe-pesquisa-navbar-style">
/_ 🔍 PESQUISA NAVBAR: Placeholder quase invisível _/
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
        </style></head><body onload="infraProcessarResize(); infraProcessarMouseDown(); inicializar();" class="bootstrap-styles instancia-2g"><input id="url_log_erro_javascript" name="url_log_erro_javascript" type="hidden" value="controlador_ajax.php?acao_ajax=log_erro_javascript&amp;hash=a95070b11d5872c04ef81e7827c2c035">

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<meta name="robots" content="noindex">
<title>:: eproc -  - Lista de Processos por Localizador ::</title>
                <link rel="stylesheet" charset="utf-8" href="css/dist/bundle-bs4.css?9.18.2.3-2.41.4">
                <link rel="stylesheet" charset="utf-8" href="css/dist/bundle-bs4-contrast.css?9.18.2.3-2.41.4">
                <link rel="stylesheet" charset="utf-8" href="css/dist/bundle-global.css?9.18.2.3-2.41.4">
                <link rel="stylesheet" charset="utf-8" href="css/dist/bundle-infra.css?9.18.2.3-2.41.4">
                <link rel="stylesheet" charset="utf-8" href="css/dist/bundle-infra-contrast.css?9.18.2.3-2.41.4"><link href="infra_js/multiple-select/multiple-select.css?9.18.2.3-2.41.4" rel="stylesheet" type="text/css" media="all">
<link href="css/cor-capa.php" rel="stylesheet" type="text/css" media="screen">
<style>
    #tabelaLocalizadores {
        margin-top: -28px!important;
    }

    .modal-dialog {
        max-width: 80% !important;
    }

</style>
<script>var INFRA_PATH_CSS = "infra_css",
    INFRA_PATH_IMAGENS = "infra_css\/imagens",
    INFRA_PATH_JS = "infra_js",
    INFRA_PATH_SVG = "infra_css\/svg",
    INFRA_LUPA_TIPO_JANELA = 1,
    INFRA_BARRA_TIPO_JANELA = 1,
    INFRA_TIPO_ALERTA = 1,
    ENV = "prod",
    LOGAR_ERROS_JS = false;</script>				<script charset="utf-8" src="js/dist/runtime.29e3254c61c00a76ae7c.js"></script><script charset="utf-8" src="js/dist/npm.jquery-ui.5d40a3422adf6a4d9a47.js"></script><script charset="utf-8" src="js/dist/npm.jquery.c8329228cb1067b06681.js"></script><script charset="utf-8" src="js/dist/npm.js-cookie.e5af40950a2d13acfed7.js"></script><script charset="utf-8" src="js/dist/npm.jquery-contextmenu.815f614aec601237cfa2.js"></script><script charset="utf-8" src="js/dist/npm.expose-loader.370c01bb730bd4cf7283.js"></script><script charset="utf-8" src="js/dist/shared.3f40db3948bc5c0424a6.js"></script><script charset="utf-8" src="js/dist/3247.8bb6ac9bcdbce41b9548.js"></script><script charset="utf-8" src="js/dist/websocket.1998979585d98b2ec52f.js"></script><script charset="utf-8" src="js/dist/npm.lodash.5796a7d478236df54e3f.js"></script><script charset="utf-8" src="js/dist/npm.unorm.315b8b64961e5a1e979e.js"></script><script charset="utf-8" src="js/dist/npm.imask.59e0bc31aa1345ca0ff0.js"></script><script charset="utf-8" src="js/dist/npm.lodash.debounce.7779bfcead8798c9ab81.js"></script><script charset="utf-8" src="js/dist/npm.core-js.3fa1655ddc2ca0efc69e.js"></script><script charset="utf-8" src="js/dist/npm.moment.7f5d7d09fbe4c8325eef.js"></script><script charset="utf-8" src="js/dist/npm.bootstrap-fileinput.1b7b96ae42cd8a11405b.js"></script><script charset="utf-8" src="js/dist/npm.local-storage-fallback.fdeb25e82f9535ca82f3.js"></script><script charset="utf-8" src="js/dist/npm.bootstrap-select.4f890d72f13a79259d21.js"></script><script charset="utf-8" src="js/dist/npm.yaireo.6ee2a92918bc53e6d65c.js"></script><script charset="utf-8" src="js/dist/npm.axios.c4cd4ce2fbfa6539a335.js"></script><script charset="utf-8" src="js/dist/npm.tempusdominus-bootstrap-4.a1362c5dc7161ecd040e.js"></script><script charset="utf-8" src="js/dist/npm.regenerator-runtime.58f1def8d4ab41d513f8.js"></script><script charset="utf-8" src="js/dist/npm.popper.js.e75399309915172c4f00.js"></script><script charset="utf-8" src="js/dist/npm.lodash.throttle.505610caf1df2aae3d03.js"></script><script charset="utf-8" src="js/dist/npm.jstree.304583edfff95a8d6dfd.js"></script><script charset="utf-8" src="js/dist/npm.cookie.c1ec3358ae9c7d9c67be.js"></script><script charset="utf-8" src="js/dist/npm.bs-custom-file-input.a3b953ce2f9e715e7113.js"></script><script charset="utf-8" src="js/dist/npm.bootstrap.3ff3a65d985c2daa4257.js"></script><script charset="utf-8" src="js/dist/npm.abortcontroller-polyfill.f0b9bb26a9045797566d.js"></script><script charset="utf-8" src="js/dist/5298.672832933f81de9e4be6.js"></script><script charset="utf-8" src="js/dist/466.ad76689f21f121e64e47.js"></script><script charset="utf-8" src="js/dist/8901.7243d1049cfb72826ec6.js"></script><script charset="utf-8" src="js/dist/main.24efd9ac75753d174841.js"></script>
				<script type="text/javascript" charset="iso-8859-1" src="infra_js/InfraUtil.js?9.18.2.3-2.41.4"></script>
				<script type="text/javascript" charset="iso-8859-1" src="infra_js/InfraCookie.js?9.18.2.3-2.41.4"></script>
				<script type="text/javascript" charset="iso-8859-1" src="infra_js/InfraUpload.js?9.18.2.3-2.41.4"></script>
				<script type="text/javascript" charset="iso-8859-1" src="infra_js/InfraMenu.js?9.18.2.3-2.41.4"></script>
				<script type="text/javascript" charset="iso-8859-1" src="infra_js/InfraBotaoMenu.js?9.18.2.3-2.41.4"></script>
				<script type="text/javascript" charset="iso-8859-1" src="infra_js/InfraAcaoMenu.js?9.18.2.3-2.41.4"></script>
				<script type="text/javascript" charset="iso-8859-1" src="infra_js/InfraTabelaDinamica.js?9.18.2.3-2.41.4"></script>
				<script type="text/javascript" charset="iso-8859-1" src="infra_js/InfraLupas.js?9.18.2.3-2.41.4"></script>
				<script type="text/javascript" charset="iso-8859-1" src="infra_js/InfraSelectEditavel.js?9.18.2.3-2.41.4"></script>
				<script type="text/javascript" charset="iso-8859-1" src="infra_js/InfraAjax.js?9.18.2.3-2.41.4"></script>
				<script type="text/javascript" charset="iso-8859-1" src="infra_js/InfraTooltip.js?9.18.2.3-2.41.4"></script>
				<script type="text/javascript" charset="iso-8859-1" src="infra_js/InfraPagina.js?9.18.2.3-2.41.4"></script>
				<script type="text/javascript" charset="iso-8859-1" src="infra_js/calendario/v1/InfraCalendario.js?9.18.2.3-2.41.4"></script>
				<script type="text/javascript" charset="iso-8859-1" src="infra_js/arvore/InfraArvore.js?9.18.2.3-2.41.4"></script>
                <script type="text/javascript" charset="utf-8" src="js/exibir-aviso.js?9.18.2.3-2.41.4"></script><script type="text/javascript" charset="iso-8859-1" src="infra_js/infra_pagina_renderer/bs4/main.js?9.18.2.3-2.41.4"></script><script src="js/analisar_links.js" type="text/javascript"></script>
			<script type="text/javascript">
            	$(document).ready(function() {
					//verifica se nas "Configurações Personalizadas" a opção "Abrir processos selecionados em abas" está ativada
					//verifica se na página atual existe a tabela de listagem de processos com o link "controlador.php?acao=processo_selecionar&" e com
					 // o checkbox de seleção de processos.
					$('table').each(function() {
						var links = $(this).find('a[href^="controlador.php?acao=processo_selecionar&"],a[href^="controlador.php?acao=processo_selecionar_siapro&"]');
						//procurar o checkbox somente na primeira coluna da tabela. Evita colocar o link "Abrir os processos selecionados em abas/janelas" quando tiver algum checkbox em 
						//outras colunas
						var row = $(this);
						var trElement = row.find("tr");
						var tdElement = trElement.find("td:first");
						var objCheckboxPrimeiraColuna = tdElement.find('input[type="checkbox"]');
						//Se tiver checkbox na primeira coluna e o link acao=processo_selecionar& em alguma coluna da tabela e os números de checkbox e links forem iguais então
						//mostra link "Abrir os processo selecionados em abas/janelas"
						if ((links.length > 1) && (objCheckboxPrimeiraColuna.length > 0)) { 
						// adicionando o link apenas na div da respectiva tabela atual
						var strElementoLinkParaAbrirProcessosEmAbasJanelas = '<div name="divLinkAbreEmAbas" id="divLinkAbreEmAbas" style="margin:0.5em 0px"><a href="#" onclick="abreProcessosSelecionadosEmAbas();" title="Permite que, ao clicar, todos os processos que estejam selecionados sejam abertos em novas abas (um em cada aba). O bloqueador de pop-ups deve estar desativado. Obs.: Se você não quiser que esse link apareça nas listagens de processos, você pode desativá-lo em &quot;Configurações Personalizadas&quot;.">Abrir os processos selecionados em abas/janelas</a></div>'
							$(this).closest(".infraTable").before(strElementoLinkParaAbrirProcessosEmAbasJanelas).after(strElementoLinkParaAbrirProcessosEmAbasJanelas);                        
						}
					});
                });
			</script><script type="text/javascript" charset="iso-8859-1" src="js/analisar_docs.js?9.18.2.3-2.41.4"></script>
<script type="text/javascript" charset="iso-8859-1" src="js/modal.js?9.18.2.3-2.41.4"></script>
<script type="text/javascript" charset="iso-8859-1" src="js/localizadores/processo_localizador_alterar.js?9.18.2.3-2.41.4"></script>
    <script>
        var ABRIR_DOCUMENTOS_EM_JANELAS = false;
        var FECHAR_DOCUMENTOS_AO_SAIR = true;

        var nomeLocalizadores = {"321763997812353340348644597082":["* patrim\u00f4nio * - * patrim\u00f4nio *","N"],"321763997812353340348644597415":["* tr\u00e1fico * - * tr\u00e1fico *","N"],"321763997812353340348644595877":["* armas\/tr\u00e2nsito\/outros * - * armas\/tr\u00e2nsito\/outros *","N"],"321765894927640366818202416500":["* rese * - * rese *","N"],"321763997812353340348644595107":["* amb.\/cons.\/ECA\/honra\/paz\/preconceito * - * amb.\/cons.\/ECA\/honra\/paz\/preconceito *","N"],"321767275328932661495022786143":["<tt><b>[R\u00c9U PRESO]<\/b><\/tt> - <tt><b>[R\u00c9U PRESO]<\/b><\/tt>","N"],"321767275328932661495335051946":["[+ 200] - [+ 200]","N"],"321767630362011201739774582650":["[] AMR - VIDE - AMR - VIDE","N"],"321763997812353340348644590932":["[+ 120] - [+ 120]","N"],"321767889621726212567043193745":["2. ac\u00f3rd\u00e3os - conferidos - 2. ac\u00f3rd\u00e3os - conferidos","N"],"321763997812353340348649938050":["4. pautados - 4. pautados","N"],"321764669184350019842826155181":["2. ac\u00f3rd\u00e3os - ag. confer\u00eancia - 2. ac\u00f3rd\u00e3os - ag. confer\u00eancia","N"],"321763997812353340348644616429":["[] Cl\u00e1udia - [AMR] Cl\u00e1udia","N"]};

        $(document).ready(function () {
            $('.infraButton:contains("Alterar Localizador")').addClass('btn-primary');
        });

        function alterarLocalizador() {
            if (document.getElementById('selNovoLocalizador').value == 'null') {
                alert('Informe o novo localizador.');
                document.getElementById('selNovoLocalizador').focus();
            } else {
                $('#frmProcessoLista').attr("action", 'controlador.php?acao=localizador_processos_alterar&hash=aeb29050249fe0f77e3c39ce919181a1');

                infraExibirAviso(false);
                document.getElementById('frmProcessoLista').submit();
            }
        }

        function verificarImpedimentos() {
            $('#frmProcessoLista').attr("action", 'controlador.php?acao=impedimentos_bloco&hash=4e6b06cc241c183f2824d795524d27c3');

            document.getElementById('hdnSubAcao').value = 'consultar';
            document.getElementById('hdnAcaoOrigem').value = 'localizador';
            document.getElementById('frmProcessoLista').submit();
        }

        function gerarLoteMinutas() {
            if ($('#hdnInfraItensSelecionados').val() == '') {
                alert('Nenhum processo selecionado.');
                return false;
            }
            var arrItens = $('#hdnInfraItensSelecionados').val().split(",");
            var listaIdProcesso = "";
            for (i = 0; i < arrItens.length; i++) {
                var arrItens2 = arrItens[i].split("|");
                listaIdProcesso += "," + arrItens2[0];
            }
            listaIdProcesso = listaIdProcesso.substr(1);

            document.getElementById('hdnListaIdProcesso').value = listaIdProcesso;
            document.getElementById('frmLoteMinuta').submit();

            return true;
        }

        function incluirEmPauta() {
            if ($('#hdnInfraItensSelecionados').val() == '') {
                alert('Nenhum processo selecionado.');
                return false;
            }
            var arrItens = $('#hdnInfraItensSelecionados').val().split(",");
            var listaIdProcesso = "";
            for (i = 0; i < arrItens.length; i++) {
                var arrItens2 = arrItens[i].split("|");
                listaIdProcesso += (listaIdProcesso == "" ? arrItens2[0] : "," + arrItens2[0]);
    }
    var params = { hdnListaIdProcesso : listaIdProcesso };
    var url = $("#frmSessaoJulgamento").attr('action');
            $.ajax({
            type: 'post',
            data: params,
            url: url,
            success: function (data) {
            $(MODAL_SESSAO_JULGAMENTO_LISTA).find('.modal-content').html(data);
                $(MODAL_SESSAO_JULGAMENTO_LISTA).modal('show');
            }
        });
        }

        function filtrarLocalizador() {
            $('#frmProcessoLista').attr("action", 'controlador.php?acao=localizador_processos_lista&hash=6ccff71a26fbb06a6dbd5d537797932d');
            validarSelecaoForm();

            infraExibirAviso(false);
            document.getElementById('frmProcessoLista').submit();
        }

        function validarSelecaoForm() {
            $("#hdnInfraCampoOrd").val(null);

            var localizadoresSelecionados = $("#selLocalizador").val();

            $('#selLocalizadoresSelecionados').val(localizadoresSelecionados);

            if (localizadoresSelecionados == '') {
                alert('Selecione pelo menos um localizador.');
                document.getElementById('selLocalizador').focus();
                return false;
            }

            // Essa validação é feita em outro momentos também, porém quando o usuário clica em "Selecionar todos" ela acaba não acontecendo.
            // Por isso é melhor validar aqui também.
            if ($('#operadorE').is(':checked') && localizadoresSelecionados.length > 3) {
                alert('O operador "E" permite no máximo 3 localizadores simultâneos para pesquisa. Reduza a quantidade de localizadores selecionados ou alterne para o modo "OU".');
                document.getElementById('selLocalizador').focus();
                return false;
            }

            if ($('input[name=paginacao]:checked', '#frmProcessoLista').val() != '') {
              document.getElementById('hdnIndResetarPaginacao').value = 1;
            }

            return true;
        }

        function validarSelecao() {
            if ($('#hdnInfraItensSelecionados').val() == '') {
                alert('Selecione pelo menos um processo para desativar o localizador.');
                return false;
            }

            if ($('#selLocalizadorDesativar').val() == null) {
                alert('Selecione pelo menos um localizador para desativar.');
                return false;
            }

            var strValidacao = validaLocalizadores();
            if(strValidacao != 'ok') {
                alert(strValidacao);
                return false;
            }

            $('#frmProcessoLista').attr("action", 'controlador.php?acao=localizador_processos_desativar&hash=08fd95d4229601d3f1b2d3a9047fba62');

            infraExibirAviso(false);
            document.getElementById('frmProcessoLista').submit();
        }

        /**
         * Objetivo: Remover os cookies que iniciam com o parâmetro recebido.
         * @param comecaCom
         */
        function removerCookies(comecaCom) {
            var osCookies = document.cookie.split(';');
            for (var i = 0; i < osCookies.length; i++) {
                if (osCookies[i].startsWith(" " + comecaCom)) {
                    infraRemoverCookie(osCookies[i]);
                }
            }
        }

        function inicializar() {
            infraEfeitoImagens();
            infraEfeitoTabelas(true);
            let comecaCom = "cookieOrdem"
            let campoOrd = comecaCom + ('');
            if (campoOrd != comecaCom) {
                removerCookies(comecaCom);
                infraCriarCookie(campoOrd, (''), 365);
            }

            $("#selLocalizador").on('changed.bs.select',function(e,clickedIndex, newValue, oldValue) {
                var arr = $(this).val();
                if ($("#operadorE").is(":checked") && arr.length > 3) {
                    alert('Você pode selecionar até 3 Localizadores combinados.');
                    arr = oldValue;
                    $(this).val(arr);
                    $(this).selectpicker('refresh');
                }
            });

            var arrSels = '';
            if (arrSels != "") {
                $('#selFiltroPlantao').val(arrSels.split(','));
                $('#selFiltroPlantao').selectpicker('refresh');
            }

            if ($('#hdnGuardaLocalizadoresAtuais').val() != undefined) {
                selecionaCheckLocalizadores($('#hdnGuardaLocalizadoresAtuais').val());
            }

                            $("#selLocalizador").val("321763997812353340348649938050".split(','));
                $("#selLocalizador").selectpicker('refresh');

            $("#tdDocumentosOrig > a").attr({target:"_blank"});
        }

        function gerarExcel() {
            var form = document.getElementById('frmProcessoLista');
            var action = form.action;
            document.getElementById('hdnExcel').value = '1';
            form.action = 'controlador.php?acao=localizador_processos_lista&acao_origem=localizador_processos_lista&hash=524a1ca34d1960557eadab0e336514da';
            form.submit();
            document.getElementById('hdnExcel').value = '0';
            form.action = action;
        }

        function IncluirLembretesBloco() {
            if ($("input[name^='chkInfraItem']").is(":checked")) {
                var arrItensSelecionados = $('#hdnInfraItensSelecionados').val();
                var arrItens = arrItensSelecionados.split(',');
                var tamanho = arrItens.length;
                var i = 0;
                var arr = '';
                var arrNumProcessos = '';

                for (i = 0; i < tamanho; i++) {
                    arr = arrItens[i].split('|');
                    arrNumProcessos += arr[2];

                    if (i != (tamanho - 1)) {
                        arrNumProcessos += '|';
                    }
                }

                exibirSubFrm('controlador.php?acao=processo_lembrete_destino_cadastrar_bloco_subfrm&txtNumProcesso=' + arrNumProcessos, 900, 500);
            } else {
                alert('Selecione ao menos um processo para cadastrar o lembrete!');
            }
        }

        function confirmarMarcarLocalizadorPrincipal() {
            if (infraSelectSelecionado("selNovoLocalizador")) {
                marcarLocalizadorPrincipal();
            }
        }

        function validarAcao(tipoAcao) {
            var strLinkAcao;
            var arrItensSelecionados = $('#hdnInfraItensSelecionados').val();
            var arrItens = [];
            var arrAux = [];

            if (isBlank(arrItensSelecionados)) {
                alert('Pelo menos um processo precisa ser selecionado.');
                return false;
            } else {
                var arrSelecionados = arrItensSelecionados.split(',');
                for (var i = 0; i < arrSelecionados.length; i++) {

                    arrAux = arrSelecionados[i].split('|');
                    arrItens[i] = arrAux[2];
                }

                if (tipoAcao == 'movimentacao') {
                    strLinkAcao = 'controlador.php?acao=processo_consulta_listar&acao_origem=localizador_processos_lista&hash=0cac84dd4f772491bde8a6c13428de7a';
                    $('#frmAcao').find('#hdnInfraItensSelecionados').val(arrSelecionados);

                    var localizadoresSelecionados = $("#selLocalizador").val();
                    var localizadoresSelecionadosText = $("#selLocalizador option:selected").text();
                    $('#selLocalizador').val(localizadoresSelecionados);
                    $('#selLocalizadoresSelecionados').val(localizadoresSelecionados);
                    $('#selLocalizadorPrincipal_text').val(localizadoresSelecionadosText);
                    $('#selLocalizadoresSelecionados').appendTo('#frmAcao');

                } else if (tipoAcao == 'intimacao') {
                    strLinkAcao = 'controlador.php?acao=intimacao_bloco_consultar&acao_origem=localizador_processos_lista&hash=efe9c3c3dcee134b8fbbe2ca5d5a1971';
                    $('#frmAcao').find('#hdnInfraItensSelecionados').val(arrItens);
                    $('#frmAcao').find('#hdnProcessosItensSelecionados').val(arrItens);
                    $('#frmAcao').find('#selLocalizadorPrincipal').val('321763997812353340348649938050');

                } else if(tipoAcao == 'certidao_remessa_nudipro_em_bloco'){
                    strLinkAcao = 'controlador.php?acao=processo/certidao_autuacao/index&bolOriginarioEletronico=0&acao_origem=localizador_processos_lista&hash=ba2c4037c62c5cc03a93aaa0ac957f94';
                    $('#frmAcao').find('#hdnInfraItensSelecionados').val(arrItens);
                    $('#frmAcao').find('#hdnProcessosItensSelecionados').val(arrItens);
                } else if(tipoAcao == 'temas_repetitivos_em_bloco'){
                    strLinkAcao = 'controlador.php?acao=processo_tema_repetitivo_bloco&acao_origem=localizador_processos_lista&hash=09559a93cebf8d2818490f785185bb54';
                    $('#frmAcao').find('#hdnInfraItensSelecionados').val(arrItens);
                    $('#frmAcao').find('#hdnProcessosItensSelecionados').val(arrItens);
                }
                else if (tipoAcao == 'citacao') {
                    strLinkAcao = 'controlador.php?acao=citacao_bloco_consultar&acao_origem=localizador_processos_lista&hash=00649fe7c71bc9eaefb0dbb8694d296e';
                    $('#frmAcao').find('#hdnInfraItensSelecionados').val(arrItens);
                    $('#frmAcao').find('#hdnProcessosItensSelecionados').val(arrItens);
                } else if (tipoAcao == 'aps') {
                    strLinkAcao = 'controlador.php?acao=intimacao_aps_bloco_consultar&acao_origem=localizador_processos_lista&hash=012a03b2ac5e0578700ac79b237fb854';
                    $('#frmAcao').find('#hdnInfraItensSelecionados').val(arrItens);
                    $('#frmAcao').find('#hdnProcessosItensSelecionados').val(arrItens);

                } else if (tipoAcao == 'intimacao_mpf_parecer') {
                    strLinkAcao = 'controlador.php?acao=intimacao_mpf_parecer&acao_origem=localizador_processos_lista&hash=2dbde528ae96c07ee276073af7c0a6e1';
                    $('#frmAcao').find('#hdnInfraItensSelecionados').val(arrItens);
                    $('#frmAcao').find('#hdnProcessosItensSelecionados').val(arrItens);

                    var strLocalizadoresDesativar = '';
                    $('#selLocalizadorDesativar :selected').each(function(i, selected){
                        strLocalizadoresDesativar  += $(selected).val() + ',';
                    });
                    $('#frmAcao').append('<input type="text" name="hdnLocalizadoresDesativar" value="'+strLocalizadoresDesativar+'">');
                    $('#frmAcao').append('<input type="hidden" name="hdnLocalizadorIncluir" value="'+$('#selNovoLocalizador :selected').val()+'">');
                } else if (tipoAcao == 'alterar') {
                    alterarLocalizador();
                    return;
                } else if (tipoAcao == 'incluir_lembretes') {
                    IncluirLembretesBloco();
                    return;
                } else if (tipoAcao == 'gerenciamento_partes_buscar') {
                    strLinkAcao = 'controlador.php?acao=gerenciamento_partes_buscar&bolInclusaoPartesBloco=1&selLocalizador=321763997812353340348649938050&acao_origem=localizador_processos_lista&hash=6654513eae2decf57a527a12ed80fb67';
                    $('#frmAcao').find('#hdnInfraItensSelecionados').val(arrItens);
                    $('#frmAcao').find('#hdnProcessosItensSelecionados').val(arrItens);
                } else if (tipoAcao == 'verificar_impedimentos') {
                    verificarImpedimentos();
                    return;
                } else if (tipoAcao == 'criar_minutas') {
                    gerarLoteMinutas();
                    return;
                } else if (tipoAcao == 'incluir_processos_sessao') {
                    incluirEmPauta();
                    return;
                } else if (tipoAcao == 'pericias_bloco') {
                    strLinkAcao = 'controlador.php?acao=pericias_bloco&acao_origem=localizador_processos_lista&hash=1fb7c995ba7a3bd892f9044eb40e2c9c';
                    $('#frmAcao').find('#hdnInfraItensSelecionados').val(arrItens);
                    $('#frmAcao').find('#hdnProcessosItensSelecionados').val(arrItens);
                    $('#frmAcao').find('#selLocalizadorPrincipal').val('321763997812353340348649938050');
                } else if (tipoAcao == 'analisar_cda') {
                    strLinkAcao = 'controlador.php?acao=execucao_fiscal_analisar_cda&acao_origem=localizador_processos_lista&hash=4ae7fdd72a93e130d8e0e2f8e64a353b';
                    $('#frmAcao').find('#hdnInfraItensSelecionados').val(arrItens);
                    exibirSubFrm('', 800, 800, false, document.getElementById('frmAcao'));
                }
                else if(tipoAcao == 'junta_espelho_atualizado'){
                    if (confirm("Tem certeza que deseja juntar os espelhos de valores atualizados?")) {
                        infraExibirAviso(false);
                        strLinkAcao = 'controlador.php?acao=junta_espelho&acao_origem=localizador_processos_lista&hash=b5a36a0a41cc5466c26f5d060b2fb903';
                        $('#frmAcao').find('#hdnInfraItensSelecionados').val(arrItens);
                        $('#frmAcao').find('#hdnProcessosItensSelecionados').val(arrItens);
                        $('#frmAcao').find('#hdnEspelho').val('atualizado');
                    }
                    else{
                        alert("Nenhuma ação foi executada");
                    }
                }
                else if(tipoAcao == 'junta_espelho_cadastrado') {
                    if (confirm("Tem certeza que deseja juntar os espelhos de valores cadastrados?")) {
                        infraExibirAviso(false);
                        strLinkAcao = 'controlador.php?acao=junta_espelho&acao_origem=localizador_processos_lista&hash=b5a36a0a41cc5466c26f5d060b2fb903';
                        $('#frmAcao').find('#hdnInfraItensSelecionados').val(arrItens);
                        $('#frmAcao').find('#hdnProcessosItensSelecionados').val(arrItens);
                        $('#frmAcao').find('#hdnEspelho').val('cadastrado');
                    }
                    else{
                        alert("Nenhuma ação foi executada");
                    }
                }
                else if(tipoAcao == 'certidao_autuacao'){
                    var form  = $('<form method="post" target="_blank">'),
                        input = $('<input name="hdnListaIdProcesso">');

                    var arrItens = [];
                    form.attr('action','controlador.php?acao=gerar_certidao&hash=f2a16767523d9efb57e5e2aeb543998b');

                    $('#tabelaLocalizadores tr[data-situacao="M77"], tr[data-situacao="A00"]').find('input[name^="chkInfraItem"]:checked').each(function(i,e){
                      arrItens.push(e.value.split('|')[0]);
                    })

                    if(arrItens.length == 0){
                      alert('Processos selecionados não atendem a situação esperada para a geração da Certidão.');
                      return false;
                    }

                    input.val(arrItens);
                    form.append(input);
                    $('body').append(form);
                    form.submit();
                    return;
                }

                $('#frmAcao').attr('action', strLinkAcao);
                $('#frmAcao').submit();
            }
        }

        function fecharSubForm () {
            ocultarSubFrm();
        }

        $(document).on('click', 'input[id="operadorE"]', function () {
            if ($("#selLocalizador").val().length > 3) {
                $("#selLocalizador").val(null);
                $("#selLocalizador").selectpicker('refresh');
            }
        });

        $(document).ready(function() {
            $(document).bind("keydown", "Alt+n", function() {
                $('td a[href^="controlador.php?acao=processo_selecionar&"]')[0].focus();
            });
        });

        function guardaIdMultiSelect(){
            $('#selFiltroPlantaoSelecionados').val($("#selFiltroPlantao").val());
        }

        function validarPreferencias() {
            var localizadoresSelecionados = $("#selLocalizador").val();

            $('#selLocalizadoresSelecionados').val(localizadoresSelecionados);
            if (localizadoresSelecionados == '') {
                alert('Selecione pelo menos um localizador.');
                return false;
            }


            let boolPodeAvancar = true;
            if ($('#chkPainelInicial').is(':checked')) {
                $.ajax({
                    async: false,
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        iptIdFormularioPersonalizacao: $('#hdnPreferencia').val(),
                        iptAcaoPreferencia: $('#hdnAcaoPreferencia').val(),
                        strAcaoControlador: 'localizador_processos_lista',
                    },
                    url: 'controlador_ajax.php?acao_ajax=verifica_se_pode_salvar_preferencia_no_painel_inicial&hash=2fad1433161200c04ddb2c98a19cd69c',
                    success: function (boolPodeSalvarNoPainelInicial) {
                        if (boolPodeSalvarNoPainelInicial !== 1) {
                            boolPodeAvancar = false;
                            alert('São permitidas no máximo 9999 preferências no painel inicial.');
                        }
                    },
                    error: function () {
                        boolPodeAvancar = false;
                        alert('Falha na requisição!');
                    },
                    complete: function () {
                    }
                });
            }
            if (!boolPodeAvancar) {
                return false;
            }
            // INICIO HOTFIX TJSC
            //if ($('#chkPainelInicial').is(':checked') && $("input[name='rdPrefTipo']:checked").val() === 'U') {
            //  alert('Apenas preferências individuais podem ser exibidas no painel inicial.');
            //  return false;
            //} FIM HOTFIX TJSC

            var arrDados = [];
            var listaDados;
            var j = 0;

            arrTmp = ['optDocumentoSentencaRecurso','optJuizoOrigem','optDocumentoProcessoOrig','optJuizoOrigemOrgaoAux','optGabineteOrigem','optchkNumLinha','optDocumentoJulgamento','optAssunto','optEventoSentencaOrigem','optTipoEventoSentencaOrigem','optDocumentoEventoComDocumento','optLocalidadeReu','optAdvReusPrincipais','optLocalidadeAutor','optDataAutuacao','optAdvAutoresPrincipais','optDataAudiencia','optPrioridadeAtendimento','optAutoresPrincipais','optDocumentoEvento','optNdiasSituacao','optProcessoDigitalizado','optReusPrincipais','optchkcClasse','optchkcUltimoEvento','optJuizo','optTipoIntimacaoCEAB'];

            $.each(arrTmp, function (k, v) {
                var ipt = $("input[name='" + v + "']");
                arrDados[j] = v + '|' + (ipt.is(':checked') ? 'S' : 'N');
                j++;
            });

            arrTmp = ['paginacao','operador'];
            $.each(arrTmp, function (k, v) {
                var ipt = $("input[name='" + v + "']");
                var valor = ipt.filter(':checked').val();
                arrDados[j] = v + '|' + valor;
                j++;
            });

            arrTmp = ['selLocalizador','selIdOrgaoJuizo','selLocalizadorTipo','selIdRitoProcesso'];

            $.each(arrTmp, function (k, v) {
                var sel = $("select[name='" + v + "']");
                var valor;

                if(sel.hasClass('multipleSelect')) {
                    valor = sel.multipleSelect("getSelects");
                } else {
                    valor = sel.val();
                }

                var tipo = (typeof valor);

                if(!empty(valor)) {
                    if (tipo=='object') {
                        arrDados[j] = v + '|' + valor.join(';');
                    } else {
                        arrDados[j] = v + '|' + valor.replace(/\|+/g, ';');
                    }
                    j++;
                } else if (empty(valor) && (typeof eval(valor))=='number') {
                    if (v=='selIdSigilo') {
                        arrDados[j] = v + '|' + valor.replace(/\|+/g, ';');
                        j++;
                    }
                }
            });

            listaDados = arrDados.join(',');
            var StatusProcesso =  $("#chkStatusProcesso").is(':checked')?'S':'N';
            var TemasRepetitivos =  $("#chkTemasRepetitivos").is(':checked')?'S':'N';
            var arrCriterioExibicao = [];
            arrCriterioExibicao[0] = 'chkStatusProcesso|' + StatusProcesso;
            arrCriterioExibicao[1] = 'chkTemasRepetitivos|' + TemasRepetitivos;
            listaDados = listaDados + ',' + arrCriterioExibicao.join(',');
            gravarPreferencias(listaDados);
        }

        function limparCamposPreferencia() {
            $('#divCriterioExibicao').find('select, input, input[type=hidden]').each(function () { $(this).val('');});
            $("#selLocalizador").val(null);
            $("#selLocalizador").selectpicker('refresh');
            $("#selLocalizadorTipo option:selected").prop("selected", false);
            $("#selIdOrgaoJuizo option:selected").prop("selected", false);
            $("#selIdRitoProcesso option:selected").prop("selected", false);

            $(":radio[name='ordenacao'][value='NumProcesso']").prop("checked", true);
    $(":radio[name='paginacao'][value='25']").prop("checked", true);
    $("input[name='optchkNumLinha']").prop("checked", false);
    $("input[name='optchkcClasse']").prop("checked", true);
    $("input[name='optAssunto']").prop("checked", false);
    $("input[name='optAutoresPrincipais']").prop("checked", true);
    $("input[name='optReusPrincipais']").prop("checked", true);
    $("input[name='optchkcUltimoEvento']").prop("checked", true);
    $("input[name='optDocumentoEvento']").prop("checked", false);
    $("input[name='optDocumentoEventoComDocumento']").prop("checked", false);
    $("input[name='optNdiasSituacao']").prop("checked", false);
    $("input[name='optchkNumProcessoAdministrativo']").prop("checked", false);
    $("input[name='optLocalidadeAutor']").prop("checked", false);
    $("input[name='optJuizo']").prop("checked", false);
    $("input[name='optDataAutuacao']").prop("checked", false);
    $("input[name='optPrioridadeAtendimento']").prop("checked", false);
    $("input[name='optLocalidadeReu']").prop("checked", false);
    $("input[name='optAdvAutoresPrincipais']").prop("checked", false);
    $("input[name='optGabineteOrigem']").prop("checked", false);
    $("input[name='optAdvReusPrincipais']").prop("checked", false);
    $("input[name='optDocumentoSentencaRecurso']").prop("checked", false);
    $("input[name='optDocumentoProcessoOrig']").prop("checked", false);
    $("input[name='optDocumentoJulgamento']").prop("checked", false);
    $("input[name='optJuizoOrigem']").prop("checked", false);
    $("input[name='optJuizoOrigemOrgaoAux']").prop("checked", false);
    $("input[name='chkStatusProcesso']").prop("checked", false);
    $("input[name='optJuizoOrigemTRs']").prop("checked", false);
    $("input[name='chkTemasRepetitivos']").prop("checked", false);
    $("input[name='chkTemasRepetitivosIA']").prop("checked", false);
    $("input[name='chkTemasRepetitivosInformados']").prop("checked", false);
    $("input[name='chkRecursosTribunaisSuperiores']").prop("checked", false);
    $("input[name='optTipoEventoSentencaOrigem']").prop("checked", false);
    $("input[name='optEventoSentencaOrigem']").prop("checked", false);
    $("input[name='optDataAudiencia']").prop("checked", false);
    $("input[name='optTipoIntimacaoCEAB']").prop("checked", false);
    $("input[name='optDataAutuacaoOriginaria']").prop("checked", false);
    $("input[name='optSaude']").prop("checked", false);
    $("input[name='optConteudoLembrete']").prop("checked", false);
    $("input[name='optClasseOrigem']").prop("checked", false);

            apagarCookie();
            $('#selPreferencias').prop('selectedIndex', 0);
            $("#hdnNumIdValorSelecionadoCombo").val('');
        }

        function apagarCookie() {
            infraRemoverCookie('TRF4EprocLocalizadorProcessos321763996595175087898574576808');
        }
    </script>

            <style type="text/css">

                .infra-styles #fldPreferencias {

                        position: relative; width: 98%;
                        height: 50px; border: 1px solid #DDDDDD;
                        margin: 20px 0 2px 0; z-index: 5;

                }
                #divConteudoPreferencias, #divPrefOpcoes, #divSelecaoPreferencia, #divPrefOpcoes, #divPrefTipo,
                #divPrefLocalizadores, #divBotaoForm, #divOpt1, #divOpt2 {
                    width: 99%; float: left; padding: 2px; margin: 2px;
                }
                #lblPreferencias, #txtPreferencia, #listaPreferencias #lblListarPreferencia { display: initial; }
               #divInfraAjaxtxtPreferencia  { min-width: 500px;}

            #txtPreferencia, #divInfraAjaxtxtPreferencia {

            }

               #txtDescricaoCadastro {

            }



                .divPrefLabel{ border: 0px solid; float:left; width: 15%; text-align: right; clear: both}
                .divPrefInput{ border: 0px solid; float:left; margin-left: 1% }


                 #divBotaoForm{
                  font-size: 8pt;
                  padding: 1%;
                 }
            </style>        <script type="text/javascript">

            var idInicial = '';

            var exibeOcultaItens = function (bolExibir) {
                $('#divSelecaoPreferencia, #divInfraBarraComandosSuperior, #divInfraBarraComandosInferior').css('display', (bolExibir ? 'block' : 'none'));
            }

            $(document).ready(function () {
                var idPreferenciaInicial = $("#hdnPreferencia").val();
                idInicial.value = idPreferenciaInicial;
                var isGerente = ($("#hdnIsGerente").val() == 1);
                $("#divPrefOpcoes").hide();
                $('input[name=rdPrefTipo]').prop("disabled", !isGerente);
                $('#hdnPreferencia').change(function () {
                    changePreferencia();
                });
                $("#btnCancelarPreferencias").click(function () {
                    limparCpsFormPref();
                    exibeOcultaItens(true);
                });
                $("#btnSalvarPreferencias").click(function () {
                    exibirFormPreferencias('salvar');
                    $('#divPrefOpcoes').find('legend').text('Dados da nova preferência');
                    exibeOcultaItens(false);
                });
                $("#btnAtualizarPreferencias").click(function () {
                    exibirFormPreferencias('atualizar');
                    exibeOcultaItens(false);
                    $('#divPrefOpcoes').find('legend').text('Atualização de preferências');
                });
                $("#btnOK").click(function () {
                    if (declarouAFuncao('validarPreferencias')) {
                        validarPreferencias()
                    }
                });
                $('input:radio[name=rdPrefLocalizadores]').change(function () {
                    if (declarouAFuncao('changePrefLocalizador')) {
                        changePrefLocalizador();
                    }
                })

                $('input:radio[name=rdPrefLocalizadores_Agto]').change(function () {
                    if (declarouAFuncao('changePrefLocalizadorAgendamento')) {
                        changePrefLocalizadorAgendamento();
                    }
                })

                // Pedido 201664: grupo de preferências.
                $('input[type=radio][name=rdPrefTipo]').change(function () {
                    if (this.value === 'I') {
                        if ($("#avisoPreferenciaUnidade").length) {
                            $("#avisoPreferenciaUnidade").css('display', 'none');
                        }
                        if ($("#selFormularioPersonalizacaoGrupo").length) {
                            $("#selFormularioPersonalizacaoGrupo").prop('disabled', true);
                        }
                    } else if (this.value === 'U') {
                        if ($("#avisoPreferenciaUnidade").length) {
                            $("#avisoPreferenciaUnidade").css('display', 'block');
                        }
                        if ($("#selFormularioPersonalizacaoGrupo").length) {
                            $("#selFormularioPersonalizacaoGrupo").prop('disabled', false);
                        }
                    }
                });


                //Ao clicar na lista de preferências o sistema deverá listar todas as preferências cadastradas (como se tivesse clicado no listar todas)
                $('#txtPreferencia').click(function () {
                    if (isBlank($(this).val())) {
                        listarPreferencias();
                    }
                });

            });

            function declarouAFuncao(funcName) {
                return (typeof eval(funcName) !== 'undefined' && (typeof eval(funcName) === "function"))
            }

            function empty(str) {
                return ((str == "") || (str == null) || (str == "undefined") || (str == 'null') || (str == 0) || !str);
            }

            function changePreferencia() {
                var id_selecionado = $('#hdnPreferencia').val();
                var strPreferenciaSelecionada = $('#txtPreferencia').val();
                var strPreferenciaUsuario = $('#hdnPreferenciaUsuario').val();
                if (declarouAFuncao('limparCamposPreferencia')) {
                    limparCamposPreferencia();
                }
                infraExibirAviso(false, 'Aguarde...');// exibir div aguardando
                var form = document.getElementById('frmProcessoLista');
                $(form).find("input[name='hdnNumIdValorSelecionadoCombo'],input[name='isChangePreferencia']").remove();
                $('<input>').attr({type: 'hidden', name: 'hdnNumIdValorSelecionadoCombo'}).appendTo(form); // criar input hidden hdnNumIdValorSelecionadoCombo
                $('<input>').attr({type: 'hidden', name: 'hdnStrDescricaoPreferencia'}).appendTo(form);
                $('<input>').attr({type: 'hidden', name: 'hdnStrPreferenciaUsuario'}).appendTo(form);
                $('<input>').attr({type: 'hidden', name: 'isChangePreferencia'}).appendTo(form); // criar input hidden isChangePreferencia
                $("input[name='hdnNumIdValorSelecionadoCombo']").val(id_selecionado); // definir valor do input hidden hdnNumIdValorSelecionadoCombo
                $("input[name='hdnStrDescricaoPreferencia']").val(strPreferenciaSelecionada);
                $("input[name='hdnStrPreferenciaUsuario']").val(strPreferenciaUsuario);
                $("input[name='isChangePreferencia']").val(1); // definir valor do input hidden isChangePreferencia
                form.target = "_self";
                                form.submit(); // submeter o formulário
                $(form).find("input[name='hdnNumIdValorSelecionadoCombo'],input[name='isChangePreferencia'],input[name='hdnStrDescricaoPreferencia'],input[name='hdnStrPreferenciaUsuario']").remove(); // remover os inputs hidden criados
            }

            function exibirFormPreferencias(strTipo) {
                var isUnidade = false;
                var isCriador = false;
                var isPadrao = false;
                var isMovPref = false;
                var txtDescricao = $("#txtDescricaoCadastro");
                var divPrefOpcoes = $("#divPrefOpcoes");
                var fldPreferencias = $("#fldPreferencias");
                var selPref = $("#txtPreferencia");
                var lblListarTodos = $("#lblListarPreferencia");
                var botoes = $("#btnSalvarPreferencias,#btnAtualizarPreferencias");
                var opt = $("#hdnPreferenciaUsuario").val();
                var divListarTodos = $("#divInfraAjaxtxtPreferencia");
                var arrPref = opt.split(";");
                isUnidade = (arrPref[0] == 'U');
                isCriador = (arrPref[1] == 'S');
                isPadrao = (arrPref[2] == 'S');
                isMovPref = (arrPref[4] == 'S');
                var isGerente = ($("#hdnIsGerente").val() == 1);
                var isUnidadeParaIndividual = (isUnidade && !isGerente);

                // exibe comportamento de localizadores no agendamento de evento

                if ($('#chkEventoAgendamento').is(':checked') && ($("#selOpcaoLocalizador").val()==0)) {
                    $("#divLocAgendamento").css('display', 'block');
                } else {
                    $("#divLocAgendamento").css('display', 'none');
                }

                if (strTipo == 'salvar') {
                    divPrefOpcoes.hide();
                    selPref.prop("disabled", false);
                    fldPreferencias.css("height", "50px");
                    $("#hdnAcaoPreferencia,#txtDescricaoCadastro").val("");
                    botoes.show();
                    /*se ainda não existe nenhuma preferência, vem com o "marcar como padrão" selecionado */
                    if (divListarTodos.find("li").length == 0 && divListarTodos.has("li") == true) {
                        $("#chkValorPadrao").prop("checked", true);
                    } else {
                        $("#chkValorPadrao").prop("checked", false);
                    }

                    $("#rdIndividual").prop("checked", true);
                    desabilitarSelectGrupo();
                } else if (strTipo == 'atualizar') {
                    txtDescricao.val(selPref.val());
                    $('input[name=rdPrefLocalizadores]').prop("disabled", isUnidadeParaIndividual);
                    $('input[name=rdPrefTipo]').prop("disabled", !isGerente);
                    if (isUnidadeParaIndividual) {
                        txtDescricao.prop("disabled", true);
                    }
                }
                $("#hdnAcaoPreferencia").val(strTipo);
                divPrefOpcoes.show();
                selPref.prop("disabled", true);
                fldPreferencias.css("height", "auto");
                lblListarTodos.hide();
                botoes.hide();
                txtDescricao.focus();
            }

            // Pedido 201664: grupo de preferências.
            function desabilitarSelectGrupo() {
                if ($("#selFormularioPersonalizacaoGrupo").length) {
                    $('#selFormularioPersonalizacaoGrupo option').prop("selected", false);
                    $("#selFormularioPersonalizacaoGrupo").prop('disabled', true);
                }
            }

            function limparCpsFormPref() {
                var isGerente = ($("#hdnIsGerente").val() == 1);

// $("#lblValorPadrao").text('Marcar como padrão'); pedido 260898
$("#divPrefOpcoes").hide();
$("#btnSalvarPreferencias,#btnAtualizarPreferencias").show();
$("#lblListarPreferencia").show();
$("#hdnAcaoPreferencia,#txtDescricaoCadastro").val("");
$("#chkValorPadrao").prop("checked", false);
$("#rdIndividual").prop("checked", true);
$('input[name=rdPrefLocalizadores]').prop("disabled", false);
$('input[name=rdPrefLocalizadores_Agto]').prop("disabled", false);
$('input[name=rdPrefTipo]').prop("disabled", !isGerente);
$("#txtPreferencia, #txtDescricaoCadastro").prop("disabled", false);
desabilitarSelectGrupo();
}

            function gravarPreferencias(listaDados) {
                btnOK = $("#btnOK");
                btnOK.attr('disabled', 'disabled');

                var descricaoCadastro = $('#txtDescricaoCadastro');
                var chkValorPadrao = ($('#chkValorPadrao').is(":checked") ? 'S' : 'N');
                var chkMovPreferencial = (($('#chkMovPreferencial').length > 0 && $('#chkMovPreferencial').is(':visible') && $('#chkMovPreferencial').is(":checked")) ? 'S' : 'N');
                var numIdFormularioPersonalizacao = $('#hdnPreferencia').val();
                var rdPrefTipo = $("input[name=rdPrefTipo]:checked").val();
                var nomeAcao = 'localizador_processos_lista';
                var chkExibirNoPainel = ($('#chkPainelInicial').is(":checked") ? 'S' : 'N');
                // Pedido 201664: grupo de preferências.
                var selGrupo = 'null';
                if ($("#selFormularioPersonalizacaoGrupo").length && rdPrefTipo != "I") {
                    selGrupo = $('#selFormularioPersonalizacaoGrupo').find(":selected").val();
                }

                if (empty(descricaoCadastro.val())) {
                    alert('Informe a descrição da preferência.');
                    descricaoCadastro.focus();
                    btnOK.removeAttr('disabled');
                    return false;
                }
                numIdFormularioPersonalizacao = ((numIdFormularioPersonalizacao == 'null') ? "" : numIdFormularioPersonalizacao);
                var url = 'controlador_ajax.php?acao_ajax=gravar_preferencias_cadastrar_formulario&hash=325533601d9650ec75628d246673ea5a';
                var postar = {
                    listaDados: listaDados,
                    chkValorPadrao: chkValorPadrao,
                    chkMovPreferencial: chkMovPreferencial,
                    txtDescricaoCadastro:toHtmlEntityDecimal(descricaoCadastro.val()),
                    nomeAcao: nomeAcao,
                    rdPrefTipo: rdPrefTipo,
                    sinExibirPainel: chkExibirNoPainel,
                    selGrupo: selGrupo
                };
                if ($("#hdnAcaoPreferencia").val() == "atualizar") {
                    postar["numIdFormularioPersonalizacao"] = numIdFormularioPersonalizacao;
                }
                // Pedido 175028: validações quanto aos vínculos entre ações preferenciais e localizadores...
                var urlVinculo = 'controlador_ajax.php?acao_ajax=validar_acao_preferencial_vinculo_localizadores&hash=69b4b8a405b25988182d5e0fd7008a89';
                $.ajax({
                    type: 'POST',
                    url: urlVinculo,
                    data: postar,
                    success: function (data) {
                        var bolGravar = true;
                        if (data != '') {
                            var arrRet = data.split('|');
                            // Pergunta
                            if (arrRet[0] == 'P') {
                                if (!confirm(arrRet[1])) {
                                    bolGravar = false;
                                }
                            }
                            // Somente mensagem
                            if (arrRet[0] == 'M') {
                                alert(arrRet[1]);
                            }
                        }

                        if (bolGravar) {
                            $.post(url, postar, function (data/*, status*/) {
                                var obj = JSON.parse(data);
                                if (obj["sucesso"] != "true") {
                                    alert(obj["msg"]);
                                    btnOK.removeAttr('disabled');
                                } else {
                                    alert('Preferência ' + (($("#hdnAcaoPreferencia").val() == "atualizar") ?
                                        'atualizada!' : 'cadastrada!'));
                                    atualizaComboPreferencias(obj["idPreferencia"]);
                                    limparCpsFormPref();
                                    btnOK.removeAttr('disabled');
                                }
                            });
                        }
                    }
                });
            }

            function atualizaComboPreferencias(id_preferencia_padrao) {
                var sel = $("#hdnPreferencia");
                var valorAtual = sel.val();
                var url = 'controlador_ajax.php?acao_ajax=atualizar_combo_preferencias&nome_acao=localizador_processos_lista&hash=5ffcd61c5e46a80a189339a94afa8cf9';
                var postar = {
                    id_preferencia_padrao:
                        ((id_preferencia_padrao == "") ? valorAtual : id_preferencia_padrao)
                };
                $.post(url, postar, function (data/*, status*/) {
                    if (valorAtual != data) {
                        $("#hdnPreferencia").val(data);
                        changePreferencia();
                    }
                });
            }

            function atualizaPrefLocalizadores(pOpcao) {
                var radioDestino = $('input:radio[name=rdPrefLocalizadores][value=' + pOpcao + ']');
                var valorAntes = $('input:radio[name=rdPrefLocalizadores]:checked').val();
                if (valorAntes != pOpcao && radioDestino.is(':enabled')) {
                    radioDestino.prop('checked', true).trigger('change');
                }
            }

            function atualizaPrefLocalizadores_Agto(pOpcao) {
                var radioDestino = $('input:radio[name=rdPrefLocalizadores_Agto][value=' + pOpcao + ']');
                var valorAntes = $('input:radio[name=rdPrefLocalizadores_Agto]:checked').val();
                if (valorAntes != pOpcao && radioDestino.is(':enabled')) {
                    radioDestino.prop('checked', true).trigger('change');
                }
            }

            function changePrefLocalizador() {
                var valor = $('input:radio[name=rdPrefLocalizadores]:checked').val();
                if (valor == 'M') {
                    $("#lblLocDesMarcarTodos").trigger("click");
                } else if (valor == 'D') {
                    $("#lblLocDesDesmarcarTodos").trigger("click");
                }
            }

            function changePrefLocalizadorAgendamento() {
                var valor = $('input:radio[name=rdPrefLocalizadores_Agto]:checked').val();
                if (valor == 'M') {
                    $("#lblLocDesMarcarTodos_Agto").trigger("click");
                } else if (valor == 'D') {
                    $("#lblLocDesDesmarcarTodos_Agto").trigger("click");
                }
            }

            var entityMap = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': '&quot;',
                "'": '&#39;',
                "/": '&#x2F;',
                ",": '&#44;',
                ";": '&#59;'
            };

            function escapeHtml(string) {
                return String(string).replace(/[&<>"'\/,;]/g, function (s) {
                    return entityMap[s];
                });
            }

            function listarPreferencias() {
                document.getElementById('txtPreferencia').value = '';
                objAjaxAutoCompPreferencia.executar();
                document.getElementById('txtPreferencia').focus();
            }

            function selecionarPreferenciaSugerida(id, descricao, complemento) {
                $('#hdnPreferencia').val(id);
                $('#txtPreferencia').val(descricao);
                objAjaxAutoCompPreferencia.processarResultado(id, descricao, complemento);
                return false;
            }

            function selecionarDocumentoBaseSugerido(id, descricao, codDocumento, idDocumento) {
                objAjaxModelo.processarResultado(id, descricao, 'null');
                window.setTimeout(function () {
                    $('#txtDocumentoBase').val(codDocumento);
                    $('#hdnIdDocumentoBase').val(idDocumento);
                    $('#optDocumentoBase').click();
                    $('#txtModelo').trigger('blur');
                }, 1000);
                return false;
            }

            function selecionarModeloPadraoSugerido(id, descricao, complemento) {
                $('#txtModelo').val(descricao);
                objAjaxModelo.processarResultado(id, descricao, 'null');
                $('#txtModelo').trigger('blur');
                return false;
            }

            function selecionarTextoPadraoSugerido(id, descricao, codTextoPadrao1, codTextoPadrao2) {
                objAjaxModelo.processarResultado(id, descricao, 'null');
                window.setTimeout(function () {
                    $('#txtTextoPadrao1').val(codTextoPadrao1);
                    $('#txtTextoPadrao2').val(codTextoPadrao2);
                    $('#optTextoPadrao').click();
                    $('#txtModelo').trigger('blur');
                }, 1000);
                return false;
            }

        </script>





    <div id="divInfraAreaGlobal">

                    <div class="bootstrap-styles navbar-wrapper">
                <nav id="navbar-accessibility" class="accessibility-bar bg-instancia collapse" data-id="69" data-ativo="N">
    <a href="#divInfraBarraLocalizacao" id="ancora-conteudo" tabindex="0" title="Conteúdo principal da página (Alt+1 e ENTER)" class="item-acessibilidade">Ir para conteúdo</a>
    <a href="#sidebar-searchbox" id="ancora-menu" tabindex="0" title="(Alt+M)" class="item-acessibilidade">Ir para menu</a>
            <a href="#txtNumProcessoPesquisaRapida" id="ancora-pesquisa-processual" tabindex="0" title="(Ctrl+Shift+F)" class="item-acessibilidade">Pesquisa processual</a>
                <a href="#/" id="btn-aumentar-fonte" tabindex="0" title="Aumentar fonte (100%)" class="item-acessibilidade" data-id="70" data-ativo="N" data-numvalor="">
            <i class="material-icons icon-aligned-sm" aria-hidden="true">text_increase</i>
        </a>
        <a href="#/" id="btn-diminuir-fonte" tabindex="0" title="Diminuir fonte (100%)" class="item-acessibilidade" data-id="70" data-ativo="N" data-numvalor="">
            <i class="material-icons icon-aligned-sm" aria-hidden="true">text_decrease</i>
        </a>
        <a href="#/" id="btn-theme-contrast" tabindex="0" title="Alto contraste" data-id="68" data-ativo="N" class="item-acessibilidade">
        <i class="material-icons icon-aligned-sm" aria-hidden="true">contrast</i>
    </a>
    <a href="#/" id="btn-vlibras" tabindex="0" title="Habilitar o tradutor para libras" class="item-acessibilidade">
        <img src="imagens/icons/maos_libras.png" aria-hidden="true"> Libras
    </a>
    <input type="hidden" id="link-usuario-configuracao-personalizacao" value="controlador_ajax.php?acao_ajax=usuario_configuracao_personalizacao&amp;hash=a126269357b789c110d9381a39bc52f9">
    <a href="controlador.php?acao=tutorial_acessibilidade&amp;hash=596cde73589d69580f8f24d9591b0325" id="btn-pagina-acessibilidade" tabindex="0" title="Acessibilidade (Alt+F1)" class="item-acessibilidade">Acessibilidade</a>
            <a href="#/" id="fechar-barra-acessibilidade" data-toggle="collapse" data-target="#navbar-accessibility" tabindex="0" title="Fechar barra de acessibilidade" class="float-right item-acessibilidade collapsed" aria-expanded="false">
            <i class="material-icons icon-aligned-sm" aria-hidden="true">close</i>
        </a>
    </nav>                <nav id="navbar" class="navbar text-white d-xl-flex bg-instancia " style="background-image: linear-gradient(to left, rgb(107, 70, 193), rgb(76, 29, 149)) !important; display: flex !important; align-items: center !important; min-height: 50px !important;">
                    <div class="d-flex w-100 justify-content-between" style="font-size: 14px;">
    <div class="d-flex align-items-center">
                    <div style="padding: 8px">
                <a href="#" id="menu-btn" aria-label="Abrir menu" title="Abrir menu" class="">
                    <i class="material-icons navbar-icons">menu</i>
                </a>
            </div>

        			<div title="Painel Inicial" style="margin-left: 7px">
    				<a href="principal.php?acao=principal&amp;home=1&amp;hash=930bdf868f1c9572ffc38f7aa5f7ff7b">
    				<img class="navbar-logo" src="css/images/logo-eproc.png?h=456705ce8f4ed311f570ae63f000ec25" title="Painel Inicial">
    				</a>
    			</div>
    			<div style="margin: 0 13px 0 13px">
    			    <a aria-label="TJSC - Ir para http://www.tjsc.jus.br" href="http://www.tjsc.jus.br" title="http://www.tjsc.jus.br" target="_blank">
                        <span class="navbar-span">TJSC</span>
                    </a>
    			</div>
    			<a id="search-toggle" href="#/" data-toggle="modal" data-target="#modal-pesquisar-processo" class="d-block d-md-none">
    				<i class="material-icons navbar-icons" style="padding: 0">search</i>
    			</a>
    		<div class="d-none d-lg-block">
    			<form method="post" class="mb-0 frm-lotacoes" action="controlador.php?acao=pessoa_usuario_selecionar&amp;hash=a044aa8a2589d2875604b088e64ef2d1"><select class="custom-select custom-select-sm selInfraUnidades" id="selInfraUnidades" name="selInfraUnidades" onchange="mudarPerfil(this);" aria-label="Mudar perfil. Tecla de atalho: Alt+P" title="Tecla de atalho: Alt+P">
    <option title="SERVIDOR DE SECRETARIA (VARA 1o GRAU)" value="TJSC-311560177740257295226990345373">SERVIDOR DE SECRETARIA (VARA 1o GRAU)</option>

<option title="Gab. 02 - 6ª Câmara Criminal - GCRI0602/SECRETÁRIO" value="TJSC-321763996595175087898574576808" selected="selected">GCRI0602/SECRETÁRIO</option>
<option title="1º Grupo de Câmaras de Direito Criminal - Gab.12 - GG1CRI12/SECRETÁRIO" value="TJSC-321763996595175087898663946234">GG1CRI12/SECRETÁRIO</option>
<option title="Seção Criminal - Gab.22 - GSCRI22/SECRETÁRIO" value="TJSC-321763996595175087898719444045">GSCRI22/SECRETÁRIO</option>
<option title="Tribunal Pleno - Gabinete 100 - GTP100S/SECRETÁRIO" value="TJSC-321763999523915527988953684284">GTP100S/SECRETÁRIO</option>

</select>
&nbsp;
<script>
    function mudarPerfil(element) {
        var bolOutraInstancia = false;
        
        if (element.value.startsWith("TJSC")) {
            element.form.target = "_self";
        } else {
            element.form.target = "_blank";
            bolOutraInstancia = true;
        }
        
        element.form.submit();
        
        if (bolOutraInstancia) {
            element.value = 'TJSC-321763996595175087898574576808';
        }
    }
</script></form>

    		</div>
    </div>
    <div class="d-none d-flex align-items-center">
                                    <div class="d-none d-md-flex" style="margin-right: 8px; display: flex !important; align-items: center !important; visibility: visible !important; opacity: 1 !important;">
                                                                                        <a aria-label="Página inicial do sistema" href="principal.php?acao=principal&amp;hash=0d412444d836aac27780692eacbf1cbf" title="Página inicial do sistema">
                    <i class="material-icons navbar-icons" style="padding: 0;">home</i>
                </a>
                                                <a aria-label="Meus Localizadores" href="controlador.php?acao=usuario_tipo_monitoramento_localizador_listar&amp;acao_origem=localizador_processos_lista&amp;acao_retorno=localizador_processos_lista&amp;hash=38392253c9be9f6a1c74ad4a8cd5a98b" role="button">
    			<i class="material-icons navbar-icons" title="Meus Localizadores" style="padding: 0;">all_inbox</i>
    		</a>
                                                                    </div>
                                                <div class="d-flex ">
                                                <a href="controlador.php?acao=minuta_area_trabalho&amp;hash=d5c367d908b7a1074b54f34484b8c3b7" role="button" id="atalhoRapido_1" accesskey="1" title="Área de Trabalho (Alt+1)" '=""><i class="material-icons navbar-icons" style="padding: 0;">looks_one</i></a><a href="controlador.php?acao=sessao_julgamento_listar&amp;hash=379336d9b77d384c54f10f5299fe9952" role="button" id="atalhoRapido_2" accesskey="2" title="Cronograma de Sessões de Julgamento (Alt+2)" '=""><i class="material-icons navbar-icons" style="padding: 0;">looks_two</i></a><a href="controlador.php?acao=automatizar_localizadores&amp;hash=130121214908725ca5d46d24f67b90fc" role="button" id="atalhoRapido_3" accesskey="3" title="Automatizar Tramitação Processual (Alt+3)" '=""><i class="material-icons navbar-icons" style="padding: 0;">looks_3</i></a>
                                                </div>
                                                <div class="d-none d-md-block align-items-center" style="width: 280px;margin-left: 8px">						<form name="formPesquisaRapida" id="formPesquisaRapida" action="controlador.php?acao=processo_pesquisa_rapida&amp;hash=0b92caa48bee47a835fab0869cb72abb" method="post" class="d-flex align-items-center searchbar">
    						<input id="txtNumProcessoPesquisaRapida" accesskey="Z" type="search" name="txtNumProcessoPesquisaRapida" title="Pesquisar pelo número do processo (Ctrl + Shift + F)" aria-label="Pesquisar pelo número do processo (Ctrl + Shift + F)" class="form-control form-control-sm search-input" placeholder="digite o n. do processo" style="background-color: transparent">
                            <img src="infra_css/imagens/aguarde.gif" id="iconeAguardePesquisa" style="display: none; width: 28px; height: 28px; margin-top: 3px; margin-right:8px">
                            <button class="btn btn-link btn-pesquisar input-group-btn search-button" style="margin-left: 8px; padding: 4px; pointer-events: auto !important;" tabindex="0" name="btnPesquisaRapidaSubmit" type="submit" aria-label="Abrir na mesma janela (Enter) - Pesquisa rápida" title="Abrir na mesma janela (Enter)"><i class="material-icons icon-aligned pr-0">search</i></button>
                            <button class="btn btn-link btn-pesquisar-nova-janela input-group-btn search-button" style="margin-left: 8px; padding: 4px; pointer-events: auto !important;" tabindex="0" name="btnPesquisaRapidaSubmitNovaAba" type="submit" formtarget="_blank" aria-label="Abrir em nova janela - Pesquisa rápida" title="Abrir em nova janela"><i class="material-icons icon-aligned pr-0">open_in_new</i></button>
                            <input type="hidden" name="acao_retorno_pesquisa_rapida" value="localizador_processos_lista">
    					</form>

                        <script>

                            function testeCpfCnpj() {
                                let texto = $('input[name="txtNumProcessoPesquisaRapida"]').val().replace(/\D+/g, '');
                                return (texto.length == 11 || texto.length == 14) && (infraValidarCpf(texto) || infraValidarCnpj(texto));
                            }

                            function preparaEnviaFormCpfCnpj() {
                                    let formPesquisa = document.getElementById('formPesquisaRapida');
                                    formPesquisa.action = 'controlador.php?acao=pesquisa_processo_doc_parte&hash=d22f07da1336afaff5c9f397c8a4c310';
                                    var strDocParte = document.createElement('input');
                                    strDocParte.setAttribute('type','text');
                                    strDocParte.setAttribute('name','strDocParte');
                                    strDocParte.setAttribute('value',$('input[name="txtNumProcessoPesquisaRapida"]').val());
                                    formPesquisa.appendChild(strDocParte);

                                    var stracao = document.createElement('input');
                                    stracao.setAttribute('type','text');
                                    stracao.setAttribute('name','acao');
                                    stracao.setAttribute('value','pesquisa_processo_doc_parte');
                                    formPesquisa.appendChild(stracao);

                                    var autocarregar = document.createElement('input');
                                    autocarregar.setAttribute('type','text');
                                    autocarregar.setAttribute('name','autocarregar');
                                    autocarregar.setAttribute('value',true);
                                    formPesquisa.appendChild(autocarregar);
                                    formPesquisa.submit();
                            }

                            $(document).ready(function(){
                            document.getElementsByName("btnPesquisaRapidaSubmitNovaAba")[0].onclick = function(event) {
                                  if(testeCpfCnpj()) {
                                        preparaEnviaFormCpfCnpj();
                                  } else {
                                        return true;
                                  }
                                };

                                document.getElementsByName("btnPesquisaRapidaSubmit")[0].onclick = function(event) {
                                  $("#iconeAguardePesquisa").css("display", "block");
                                  event.stopPropagation();
                                  if(testeCpfCnpj()) {
                                        preparaEnviaFormCpfCnpj();
                                  } else {
                                      $.ajax({
                                        type: 'post',
                                        dataType: 'json',
                                        data: {txtNumProcessoPesquisaRapida: $('input[name="txtNumProcessoPesquisaRapida"]').val()},
                                        url: 'controlador_ajax.php?acao_ajax=verifica_pesquisa_rapida_minuta_mandado&hash=48bcde8f92e96445f9882bc2bacde514',
                                        async: false,
                                        success: function(dados){
                                            if(dados.erro){
                                                event.preventDefault();
                                                alert(dados.erro);
                                            }else if(dados.resultado && dados.resultado == 1){
                                                event.preventDefault();
                                                document.getElementsByName("btnPesquisaRapidaSubmitNovaAba")[0].click();
                                            }
                                        }
                                      });
                                  }
                                  $("#iconeAguardePesquisa").css("display", "none");
                                };
                            });
                    </script></div>

                    <div style="padding: 8px">
                <a id="btnProfile" role="button" tabindex="0" aria-label="Perfil do Usuário" title="Perfil do usuário (Ctrl + Shift + U)">
                    <i role="presentation" class="material-icons navbar-icons">account_circle</i>
                </a>
                <div id="frmProfile" class="profile">
                    <div class="profile-body">
                        <div class="header bg-gray-grad" style="background-color: black">
                            <div class="text-center font-weight-bold">
                                <span>ALEXANDRE CLAUDINO SIMAS SANTOS (alexandress) </span>
                            </div>
                            <div class="text-center mt-2 d-block d-lg-none">
                                <form method="post" class="mb-0 frm-lotacoes" action="controlador.php?acao=pessoa_usuario_selecionar&amp;hash=a044aa8a2589d2875604b088e64ef2d1"><select class="custom-select custom-select-sm selInfraUnidades" id="selInfraUnidades" name="selInfraUnidades" onchange="mudarPerfil(this);" aria-label="Mudar perfil. Tecla de atalho: Alt+P" title="Tecla de atalho: Alt+P">
    <option title="SERVIDOR DE SECRETARIA (VARA 1o GRAU)" value="TJSC-311560177740257295226990345373">SERVIDOR DE SECRETARIA (VARA 1o GRAU)</option>

<option title="Gab. 02 - 6ª Câmara Criminal - GCRI0602/SECRETÁRIO" value="TJSC-321763996595175087898574576808" selected="selected">GCRI0602/SECRETÁRIO</option>
<option title="1º Grupo de Câmaras de Direito Criminal - Gab.12 - GG1CRI12/SECRETÁRIO" value="TJSC-321763996595175087898663946234">GG1CRI12/SECRETÁRIO</option>
<option title="Seção Criminal - Gab.22 - GSCRI22/SECRETÁRIO" value="TJSC-321763996595175087898719444045">GSCRI22/SECRETÁRIO</option>
<option title="Tribunal Pleno - Gabinete 100 - GTP100S/SECRETÁRIO" value="TJSC-321763999523915527988953684284">GTP100S/SECRETÁRIO</option>

</select>
&nbsp;
<script>
    function mudarPerfil(element) {
        var bolOutraInstancia = false;
        
        if (element.value.startsWith("TJSC")) {
            element.form.target = "_self";
        } else {
            element.form.target = "_blank";
            bolOutraInstancia = true;
        }
        
        element.form.submit();
        
        if (bolOutraInstancia) {
            element.value = 'TJSC-321763996595175087898574576808';
        }
    }
</script></form>

                            </div>
                        </div>

                        <div style="padding: 10px; color: inherit">
                                                                                                <a aria-label="Meus Localizadores" class="d-flex profile-item" href="controlador.php?acao=usuario_tipo_monitoramento_localizador_listar&amp;acao_origem=localizador_processos_lista&amp;acao_retorno=localizador_processos_lista&amp;hash=38392253c9be9f6a1c74ad4a8cd5a98b" role="button">
    			<div><i class="material-icons" title="Meus Localizadores">all_inbox</i></div>
    			<div>Meus localizadores</div>
    		</a>
                                                                                                                                <a href="controlador.php?acao=minuta_area_trabalho&amp;hash=d5c367d908b7a1074b54f34484b8c3b7" class="d-flex profile-item" role="button" id="atalhoRapidoMobile_1" accesskey="1" title="Área de Trabalho (Alt+1)"><div><i class="material-icons">looks_one</i></div><div>Área de Trabalho</div></a><a href="controlador.php?acao=sessao_julgamento_listar&amp;hash=379336d9b77d384c54f10f5299fe9952" class="d-flex profile-item" role="button" id="atalhoRapidoMobile_2" accesskey="2" title="Cronograma de Sessões de Julgamento (Alt+2)"><div><i class="material-icons">looks_two</i></div><div>Cronograma de Sessões de Julgamento</div></a><a href="controlador.php?acao=automatizar_localizadores&amp;hash=130121214908725ca5d46d24f67b90fc" class="d-flex profile-item" role="button" id="atalhoRapidoMobile_3" accesskey="3" title="Automatizar Tramitação Processual (Alt+3)"><div><i class="material-icons">looks_3</i></div><div>Automatizar Tramitação Processual</div></a>
                                                                                        <div class="dropdown-divider"></div>
                            			<a class="d-flex profile-item" title="novidades" href="controlador.php?acao=novidades_sistema&amp;acao_origem=localizador_processos_lista&amp;acao_retorno=localizador_processos_lista&amp;hash=ccc81d52f0c055ad879474ac90f7eef1" target="_blank">
    			<div><i class="material-icons  notification-badge success" aria-hidden="true">fiber_new</i></div>
    			<div>Novidades - todas lidas</div>
    		</a>			<a class="d-flex profile-item" title="" href="controlador.php?acao=usuario_personalizacao_configuracao&amp;hash=1270e2bd23a296a47e0df79ce89601eb" target="_blank">
    			<div><i class="material-icons  " aria-hidden="true">settings</i></div>
    			<div>Configurações</div>
    		</a>
                            <a class="d-flex profile-item collapsed" href="#/" data-toggle="collapse" data-target="#navbar-accessibility" title="Mostrar/esconder barra de acessibilidade" aria-expanded="false">
                                <div><i class="material-icons">accessibility</i></div>
                                Barra de acessibilidade</a>

                            <div class="dropdown-divider"></div>
                            <div class="d-flex text-secondary">
                                <i class="material-icons">info</i>
                                Versão eproc: 9.18.2.3-2.41.4
                            </div>
                            <div class="dropdown-divider"></div>


        <a class="d-flex profile-item" title="" href="javascript:mostrar_informacoes_de_desempenho()">
            <div><i class="material-icons" aria-hidden="true">history</i></div>
            <div>Tempo de Processamento</div>
        </a><a id="btn-encerrar-sessao" class="d-flex profile-item" href="controlador.php?acao=sair&amp;hash=17ee7cc2e5b330dd77db0940e543a300"><div><i class="material-icons" aria-hidden="true">exit_to_app</i></div>Encerrar Sessão <span class="ml-1 text-muted font-italic">(Ctrl+Shift+F4)</span></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>

</div>
                </nav>
            </div>
            <!-- Modal -->
            <div class="bootstrap-styles">
                <div class="modal fade" id="modal-pesquisar-processo" tabindex="-1" aria-labelledby="pesquisaProcessoModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="pesquisaProcessoModalLabel">Pesquisar processo</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                						<form name="formPesquisaRapida" id="formPesquisaRapida" action="controlador.php?acao=processo_pesquisa_rapida&amp;hash=0b92caa48bee47a835fab0869cb72abb" method="post" class="d-flex align-items-center searchbar">
							<input id="txtNumProcessoPesquisaRapida" accesskey="Z" type="search" name="txtNumProcessoPesquisaRapida" title="Pesquisar pelo número do processo (Ctrl + Shift + F)" aria-label="Pesquisar pelo número do processo (Ctrl + Shift + F)" class="form-control form-control-sm search-input" placeholder="Nº de processo" style="background-color: transparent">
                            <img src="infra_css/imagens/aguarde.gif" id="iconeAguardePesquisa" style="display: none; width: 28px; height: 28px; margin-top: 3px; margin-right:8px">
                            <button class="btn btn-link btn-pesquisar input-group-btn search-button" style="margin-left: 8px; padding: 4px; pointer-events: auto !important;" tabindex="0" name="btnPesquisaRapidaSubmit" type="submit" aria-label="Abrir na mesma janela (Enter) - Pesquisa rápida" title="Abrir na mesma janela (Enter)"><i class="material-icons icon-aligned pr-0">search</i></button>		
                            <button class="btn btn-link btn-pesquisar-nova-janela input-group-btn search-button" style="margin-left: 8px; padding: 4px; pointer-events: auto !important;" tabindex="0" name="btnPesquisaRapidaSubmitNovaAba" type="submit" formtarget="_blank" aria-label="Abrir em nova janela - Pesquisa rápida" title="Abrir em nova janela"><i class="material-icons icon-aligned pr-0">open_in_new</i></button>
                            <input type="hidden" name="acao_retorno_pesquisa_rapida" value="localizador_processos_lista">                            
						</form>

                        <script>

                            function testeCpfCnpj() {
                                let texto = $('input[name="txtNumProcessoPesquisaRapida"]').val().replace(/\D+/g, '');
                                return (texto.length == 11 || texto.length == 14) && (infraValidarCpf(texto) || infraValidarCnpj(texto));
                            }

                            function preparaEnviaFormCpfCnpj() {
                                    let formPesquisa = document.getElementById('formPesquisaRapida');
                                    formPesquisa.action = 'controlador.php?acao=pesquisa_processo_doc_parte&hash=d22f07da1336afaff5c9f397c8a4c310';
                                    var strDocParte = document.createElement('input');
                                    strDocParte.setAttribute('type','text');
                                    strDocParte.setAttribute('name','strDocParte');
                                    strDocParte.setAttribute('value',$('input[name="txtNumProcessoPesquisaRapida"]').val());
                                    formPesquisa.appendChild(strDocParte);

                                    var stracao = document.createElement('input');
                                    stracao.setAttribute('type','text');
                                    stracao.setAttribute('name','acao');
                                    stracao.setAttribute('value','pesquisa_processo_doc_parte');
                                    formPesquisa.appendChild(stracao);

                                    var autocarregar = document.createElement('input');
                                    autocarregar.setAttribute('type','text');
                                    autocarregar.setAttribute('name','autocarregar');
                                    autocarregar.setAttribute('value',true);
                                    formPesquisa.appendChild(autocarregar);
                                    formPesquisa.submit();
                            }

                            $(document).ready(function(){
                            document.getElementsByName("btnPesquisaRapidaSubmitNovaAba")[0].onclick = function(event) {
                                  if(testeCpfCnpj()) {
                                        preparaEnviaFormCpfCnpj();
                                  } else {
                                        return true;
                                  }
                                };

                                document.getElementsByName("btnPesquisaRapidaSubmit")[0].onclick = function(event) {
                                  $("#iconeAguardePesquisa").css("display", "block");
                                  event.stopPropagation();
                                  if(testeCpfCnpj()) {
                                        preparaEnviaFormCpfCnpj();
                                  } else {
                                      $.ajax({
                                        type: 'post',
                                        dataType: 'json',
                                        data: {txtNumProcessoPesquisaRapida: $('input[name="txtNumProcessoPesquisaRapida"]').val()},
                                        url: 'controlador_ajax.php?acao_ajax=verifica_pesquisa_rapida_minuta_mandado&hash=48bcde8f92e96445f9882bc2bacde514',
                                        async: false,
                                        success: function(dados){
                                            if(dados.erro){
                                                event.preventDefault();
                                                alert(dados.erro);
                                            }else if(dados.resultado && dados.resultado == 1){
                                                event.preventDefault();
                                                document.getElementsByName("btnPesquisaRapidaSubmitNovaAba")[0].click();
                                            }
                                        }
                                      });
                                  }
                                  $("#iconeAguardePesquisa").css("display", "none");
                                };
                            });
                    </script>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="infraButton" data-dismiss="modal">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                    <div id="wrapper" class="toggled">

                    <div class="bootstrap-styles">
                <div id="sidebar-wrapper" class=" menu-dark ">
                    <div class="menu-searchbox input-group input-group-sm">
                        <input id="sidebar-searchbox" type="text" class="form-control menu-search-box" style="margin: 5px;" title="Pesquisar no menu (Alt + m)" placeholder="Pesquisar no Menu (Alt + m)">
                    </div>
                    <ul id="main-menu" class="sidebar-nav search-list">

    <li class="">

        <a href="controlador.php?acao=menu_textual&amp;hash=e66166436e22f39524daa516c6ca91f0" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-106" aria-label="Menu Textual">
            <span class="menu-item-text">Menu Textual</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-536" aria-label="AJG">
            <span class="menu-item-text">AJG</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-536">

    <li class="">

        <a href="controlador.php?acao=nomeacoes_ajg_listar&amp;hash=26385a62b21476bc49ce0fafe14f9082" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-537" aria-label="Nomeações criadas (aguardando solicitar pagamento)">
            <span class="menu-item-text">Nomeações criadas (aguardando solicitar pagamento)</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=solicitacoes_pagamento_ajg_listar&amp;hash=e39551ac756af9fa89a590153b7c7a78" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-538" aria-label="Solicitações criadas (aguardando validação)">
            <span class="menu-item-text">Solicitações criadas (aguardando validação)</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-261" aria-label="Assinador Digital de Documentos">
            <span class="menu-item-text">Assinador Digital de Documentos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-261">

    <li class="">

        <a href="controlador.php?acao=assinatura_digital&amp;hash=f9433d5ee7b57fc68150fe6d5f42f252" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-201" aria-label="Assinar">
            <span class="menu-item-text">Assinar</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=validar_assinatura&amp;hash=04d53617cbc05b13d72bc7d9142d6780" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-262" aria-label="Validar">
            <span class="menu-item-text">Validar</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-120" aria-label="Audiência">
            <span class="menu-item-text">Audiência</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-120">

    <li class="">

        <a href="controlador.php?acao=audiencia_calendario&amp;hash=335b71968ef71158d205f4ac616ecdbc" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-787" aria-label="Calendário de Audiências">
            <span class="menu-item-text">Calendário de Audiências</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=sala_audiencia_orgao_listar&amp;hash=2636814380bfd78f7fbd44198378e9a0" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-121" aria-label="Gerenciamento de Salas">
            <span class="menu-item-text">Gerenciamento de Salas</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_audiencia_virtual_proposta&amp;hash=eb0653489a9b7d47bbcbaca71bef4568" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-467" aria-label="Propostas de Acordo das Audiências Virtuais">
            <span class="menu-item-text">Propostas de Acordo das Audiências Virtuais</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=audiencia_relatorio&amp;hash=d4a3dfb692c59921e50bb05c4ebca2b1" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-122" aria-label="Relatório de Audiências">
            <span class="menu-item-text">Relatório de Audiências</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-745" aria-label="Cálculo Judicial">
            <span class="menu-item-text">Cálculo Judicial</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-745">

    <li class="">

        <a href="controlador.php?acao=md_cj_calculo_listar&amp;hash=a1c9cde8f63f5ad6531de40dea2f05b9" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-751" aria-label="Cálculos">
            <span class="menu-item-text">Cálculos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=IntegracaoCertidao/SelecionarProcesso&amp;hash=78e20aacf1e3000adad44ed2073c67e7" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-817" aria-label="Certificar Antecedentes para fins Judiciais">
            <span class="menu-item-text">Certificar Antecedentes para fins Judiciais</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=desmembramento_processo_consultar&amp;hash=c489d8d8d6cf00c5896b6d85b14fa591" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-384" aria-label="Cisão/Desmembramento de Processo">
            <span class="menu-item-text">Cisão/Desmembramento de Processo</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-3" aria-label="Consulta Processual">
            <span class="menu-item-text">Consulta Processual</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-3">

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=consultar&amp;hash=d55fe6cf7902c71a1046c66116fd3663" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-4" aria-label="Consultar Processos">
            <span class="menu-item-text">Consultar Processos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-764" aria-label="Consulta SAJ">
            <span class="menu-item-text">Consulta SAJ</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-764">

    <li class="">

        <a href="controlador.php?acao=consultaArquivados/pesquisardocumento&amp;hash=4ff220e2a68bc544c5fdb2670165d063" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-766" aria-label="Consulta de Documentos do SAJ">
            <span class="menu-item-text">Consulta de Documentos do SAJ</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=consultaArquivados/pesquisar&amp;hash=c1f06f11561b020250d7f636003467b2" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-765" aria-label="Consulta de Processos do SAJ">
            <span class="menu-item-text">Consulta de Processos do SAJ</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=consultaArquivados/pesquisarComChave&amp;hash=d136ddd59e0057324436419f4cc7b002" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-767" aria-label="Consulta de Processos do SAJ  com Chave">
            <span class="menu-item-text">Consulta de Processos do SAJ  com Chave</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=chavesDeAcesso/inicio&amp;hash=5a3cfef164cee495d2d14a90c851c2f8" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-768" aria-label="Gerenciamento de Chaves de Processos do SAJ">
            <span class="menu-item-text">Gerenciamento de Chaves de Processos do SAJ</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-183" aria-label="Gerenciamento da Sociedade de Advogados">
            <span class="menu-item-text">Gerenciamento da Sociedade de Advogados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-183">

    <li class="">

        <a href="controlador.php?acao=usuario_procurador_pessoa_juridica_cadastro_listar&amp;hash=a4b74f0f4c5e3b5d44d411dc8c241d1b" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-184" aria-label="Associar Advogado-Titular">
            <span class="menu-item-text">Associar Advogado-Titular</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-1" aria-label="Gerenciamento de Advogados">
            <span class="menu-item-text">Gerenciamento de Advogados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-1">

    <li class="">

        <a href="controlador.php?acao=advogado_cadastrado_listar&amp;hash=4d50d0cd12bf6af44385a7b2a0a24b13" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-68" aria-label="Advogados Cadastrados">
            <span class="menu-item-text">Advogados Cadastrados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=advogado_listar&amp;hash=49fb036bc2bc1db652b3c167b9ed9083" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-2" aria-label="Validar Advogado">
            <span class="menu-item-text">Validar Advogado</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=jus_postulandi_listar&amp;hash=55de2364230b609b2becf9ddd054d2fe" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-423" aria-label="Validar Jus Postulandi">
            <span class="menu-item-text">Validar Jus Postulandi</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-19" aria-label="Gerenciamento de Feriados e Suspensões">
            <span class="menu-item-text">Gerenciamento de Feriados e Suspensões</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-19">

    <li class="">

        <a href="controlador.php?acao=feriado_secretaria_listar&amp;hash=b62058b0b25ccf7896f9bcb773ea0451" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-20" aria-label="Feriados (Secretaria)">
            <span class="menu-item-text">Feriados (Secretaria)</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-73" aria-label="Gerenciamento de Partes">
            <span class="menu-item-text">Gerenciamento de Partes</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-73">

    <li class="">

        <a href="controlador.php?acao=juizo_estadual_listar&amp;hash=2ea6c15114848b8fe114f25584365645" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-670" aria-label="Cadastro de Juízos Externos">
            <span class="menu-item-text">Cadastro de Juízos Externos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=gerenciamento_partes_reu_sob_monitoramento_listar&amp;hash=20080bc8b73d7a06de86c39e86ae470f" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-448" aria-label="Gerenciar Monitoramento de Réus">
            <span class="menu-item-text">Gerenciar Monitoramento de Réus</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=gerenciamento_partes_listar&amp;hash=17d6fa92e1d449f2b1bb27f294ba1513" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-80" aria-label="Gerenciar Partes">
            <span class="menu-item-text">Gerenciar Partes</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=representacao_partes_cadastrar&amp;hash=6297a7a1246a3ea204ba2051295899a8" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-93" aria-label="Gerenciar Representação de Partes">
            <span class="menu-item-text">Gerenciar Representação de Partes</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=gerenciamento_partes_situacao_listar&amp;hash=f3cd08f33ca9b940601fa1547463e5e9" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-671" aria-label="Gerenciar Situação de Partes">
            <span class="menu-item-text">Gerenciar Situação de Partes</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=processo_relacionado_listar&amp;hash=b818b61b6a28ba7ba1ed95abd183b803" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-116" aria-label="Gerenciamento de Processos Relacionados">
            <span class="menu-item-text">Gerenciamento de Processos Relacionados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-94" aria-label="Gerenciamento do Plantão">
            <span class="menu-item-text">Gerenciamento do Plantão</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-94">

    <li class="">

        <a href="controlador.php?acao=plantao_magistrado_listar&amp;hash=e90cfaec5b521c6cabd89ed49d0730ef" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-95" aria-label="Plantão Magistrado">
            <span class="menu-item-text">Plantão Magistrado</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=plantao_servidor_listar&amp;hash=f2a29da8a30bccad920d9b5e46e9e8b9" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-96" aria-label="Plantão Servidor">
            <span class="menu-item-text">Plantão Servidor</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-628" aria-label="Gestão de Mandados">
            <span class="menu-item-text">Gestão de Mandados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-628">

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-629" aria-label="Cadastros">
            <span class="menu-item-text">Cadastros</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-629">

    <li class="">

        <a href="controlador.php?acao=mandados/gm_cargo_zona/listar&amp;hash=0194d75b57fef0ae262d8da4450dc1b3" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-634" aria-label="Cargos Zona">
            <span class="menu-item-text">Cargos Zona</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=mandados/vincularManualmenteConducao&amp;hash=b8e0e742cbb1f3e98dfa3a02b9797699" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-742" aria-label="Vincular Condução Manualmente">
            <span class="menu-item-text">Vincular Condução Manualmente</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=listar_formulario_personalizacao_grupo&amp;hash=9fa445ccfd6d790add9a2db537717e80" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-720" aria-label="Grupos de Preferências">
            <span class="menu-item-text">Grupos de Preferências</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-143" aria-label="Impedimento de Magistrados">
            <span class="menu-item-text">Impedimento de Magistrados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-143">

    <li class="">

        <a href="controlador.php?acao=magistrado_impedimento_listar&amp;hash=218bd3d549770d9b03b707e139352f7c" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-146" aria-label="Cadastrar Impedimento Magistrados">
            <span class="menu-item-text">Cadastrar Impedimento Magistrados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=impedimentos&amp;hash=5996f7f047b65a359da4bea718ed4b33" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-144" aria-label="Verificar Impedimentos">
            <span class="menu-item-text">Verificar Impedimentos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=impedimentos_bloco&amp;hash=4e6b06cc241c183f2824d795524d27c3" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-145" aria-label="Verificar Impedimentos (em bloco)">
            <span class="menu-item-text">Verificar Impedimentos (em bloco)</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=md_tjsc_informe_rendimento_ajg_sidejud_listar&amp;hash=78660af5b6ec198cf50552dfeb361551" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-675" aria-label="Informe de rendimentos">
            <span class="menu-item-text">Informe de rendimentos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-711" aria-label="Inteligência Artificial">
            <span class="menu-item-text">Inteligência Artificial</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-711">

    <li class="">

        <a href="controlador.php?acao=inteligencia_artificial/llm_chat_playground/index&amp;hash=79838f078688b528fe6ce9eacbf4169a" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-782" aria-label="LLM Chat Playground">
            <span class="menu-item-text">LLM Chat Playground</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-24" aria-label="Localizadores">
            <span class="menu-item-text">Localizadores</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-24">

    <li class="">

        <a href="controlador.php?acao=localizador_acao_preferencial_listar&amp;hash=895be252c42f9711df234d857b647274" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-623" aria-label="Ações Preferenciais por Localizador">
            <span class="menu-item-text">Ações Preferenciais por Localizador</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processamento_em_massa/listar_localizadores&amp;hash=32b29c694dd92671774d7908f3298e5e" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-799" aria-label="Alterar Localizador de Processos (em Massa)">
            <span class="menu-item-text">Alterar Localizador de Processos (em Massa)</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=automatizar_localizadores&amp;hash=130121214908725ca5d46d24f67b90fc" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-331" aria-label="Automatizar Tramitação Processual">
            <span class="menu-item-text">Automatizar Tramitação Processual</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=inteligencia_artificial/classificador_conteudo/listar&amp;hash=975e76446d6da93a276fb3a3eeb0cc8b" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-731" aria-label="Classificador por conteúdo">
            <span class="menu-item-text">Classificador por conteúdo</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_localizador_historico&amp;hash=9c86ba0c1cf9cd9e90a8e1791cce0958" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-776" aria-label="Histórico de Processos por Localizador">
            <span class="menu-item-text">Histórico de Processos por Localizador</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=localizador_processos_lista&amp;hash=6ccff71a26fbb06a6dbd5d537797932d" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-78" aria-label="Lista de Processos por Localizador">
            <span class="menu-item-text">Lista de Processos por Localizador</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=localizador_orgao_listar&amp;hash=56aba435af3d46199580b5dc13a7fbfa" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-25" aria-label="Localizadores do Órgão">
            <span class="menu-item-text">Localizadores do Órgão</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=usuario_tipo_monitoramento_localizador_listar&amp;hash=f9acd070195012bd156a5a9d215e2588" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-124" aria-label="Meus Localizadores">
            <span class="menu-item-text">Meus Localizadores</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-28" aria-label="Magistrados">
            <span class="menu-item-text">Magistrados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-28">

    <li class="">

        <a href="controlador.php?acao=juizo_magistrado_listar&amp;hash=2c97e8399efe2d40afce4949bcecef7b" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-29" aria-label="Associação de Magistrados">
            <span class="menu-item-text">Associação de Magistrados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=md_tjsc_afastamento_magistrado_auditoria&amp;hash=a7e7c7aaa123e1c5af73ae292b5768fb" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-641" aria-label="Auditoria de Afastamentos de Magistrados">
            <span class="menu-item-text">Auditoria de Afastamentos de Magistrados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=md_tjsc_mapa_distribuicao_listar&amp;hash=a9650f74c60e3d5c271a135d8807792f" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-626" aria-label="Mapa de Distribuição">
            <span class="menu-item-text">Mapa de Distribuição</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=md_tjsc_afastamento_magistrado_relatorio&amp;hash=7d8e01638cb299bdee28e2036cfa109f" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-645" aria-label="Relatório de Afastamentos de Magistrados">
            <span class="menu-item-text">Relatório de Afastamentos de Magistrados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-109" aria-label="Mensagens">
            <span class="menu-item-text">Mensagens</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-109">

    <li class="">

        <a href="controlador.php?acao=caixa_mensagem_listar&amp;hash=274037a9a9f57ec659cd17b50d2cecf5" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-110" aria-label="Caixa de Mensagens">
            <span class="menu-item-text">Caixa de Mensagens</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-648" aria-label="Migração Sistema Legado">
            <span class="menu-item-text">Migração Sistema Legado</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-648">

    <li class="">

        <a href="controlador.php?acao=md_mig_ajusta_documento&amp;hash=8b8ec63e77d0f62b1e299e938f7c3df1" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-682" aria-label="Reordenar Documentos">
            <span class="menu-item-text">Reordenar Documentos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-342" aria-label="Minutas">
            <span class="menu-item-text">Minutas</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-342">

    <li class="">

        <a href="controlador.php?acao=minuta_area_trabalho&amp;hash=d5c367d908b7a1074b54f34484b8c3b7" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-343" aria-label="Área de Trabalho">
            <span class="menu-item-text">Área de Trabalho</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=minuta_bloqueio_listar&amp;hash=f862a07e50bf15d4c85da70fe39d74e1" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-401" aria-label="Desbloquear">
            <span class="menu-item-text">Desbloquear</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_diario_eletronico_listar&amp;hash=086b1d138210cac5b14567c82e81c6eb" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-410" aria-label="Diário Eletrônico">
            <span class="menu-item-text">Diário Eletrônico</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=estatistica_minuta&amp;hash=a0e5486eb95c8dbc446acb26fd8789ce" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-429" aria-label="Estatística">
            <span class="menu-item-text">Estatística</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=lote_minuta_listar&amp;hash=3c5fc70a73bee8c0150a4c89548d047b" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-402" aria-label="Lotes">
            <span class="menu-item-text">Lotes</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=modelo_padrao_listar&amp;hash=6a82da2c2b07e360f4324c968fe5cf3a" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-403" aria-label="Modelos">
            <span class="menu-item-text">Modelos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=pesquisa_documento_processo_originario/pesquisar&amp;hash=4279e2355bcc618a6db117307218072a" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-755" aria-label="Pesquisa em documentos dos processos originários">
            <span class="menu-item-text">Pesquisa em documentos dos processos originários</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=tag_formulario_listar&amp;hash=430af5600c078a37bc3a1502594b8dc6" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-794" aria-label="Tags de Formulário">
            <span class="menu-item-text">Tags de Formulário</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=texto_padrao_listar&amp;hash=c3bf9a4b8be91f27fcbbbbe22a4c7c0f" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-344" aria-label="Textos Padrão">
            <span class="menu-item-text">Textos Padrão</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-30" aria-label="Movimentação Processual">
            <span class="menu-item-text">Movimentação Processual</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-30">

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=processo_movimento_desativar_consulta&amp;hash=2ce92116a2f8fe5a42ada978a913bbca" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-83" aria-label="Cancelamento da Movimentação Processual">
            <span class="menu-item-text">Cancelamento da Movimentação Processual</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=citacao_bloco_filtrar&amp;hash=e0696ff4cdf5a7634058ae74fad63937" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-113" aria-label="Citação em Bloco">
            <span class="menu-item-text">Citação em Bloco</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=intimacao_bloco_filtrar&amp;hash=a39e24c580e561e4834b54448eb97168" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-128" aria-label="Intimação em Bloco">
            <span class="menu-item-text">Intimação em Bloco</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_movimento_filtrar&amp;hash=8a5a4b2c555cf7807a6b882cbd7a2df4" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-32" aria-label="Movimentação Processual em Bloco">
            <span class="menu-item-text">Movimentação Processual em Bloco</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_movimentar&amp;hash=afe13848a4503d9cad271c0642435db7" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-31" aria-label="Movimentação Processual Individual">
            <span class="menu-item-text">Movimentação Processual Individual</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=tema_repetitivo_bloco_filtrar&amp;hash=6e998d4cfce709f20acb2b49359e4a2c" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-778" aria-label="Temas Repetitivos em Bloco">
            <span class="menu-item-text">Temas Repetitivos em Bloco</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-568" aria-label="Ofício Requisitório">
            <span class="menu-item-text">Ofício Requisitório</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-568">

    <li class="">

        <a href="controlador.php?acao=oficio_requisitorio_requisicoes_cadastrar&amp;hash=6dee45fbcdea33854db542ef72715a68" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-571" aria-label="Cadastrar Ofício Requisitório">
            <span class="menu-item-text">Cadastrar Ofício Requisitório</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=oficio_requisitorio_listar&amp;hash=7514e2457ed0c0914ac10fd97eec4d56" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-572" aria-label="Consultar Ofício Requisitório">
            <span class="menu-item-text">Consultar Ofício Requisitório</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=operacao_policia_federal_listar&amp;hash=5f826996a885a89bc4ca377a0a0532f1" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-470" aria-label="Operações da Polícia">
            <span class="menu-item-text">Operações da Polícia</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-829" aria-label="Ordens de Consulta/Restrição">
            <span class="menu-item-text">Ordens de Consulta/Restrição</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-829">

    <li class="">

        <a href="controlador.php?acao=convenios_orgao_sistema&amp;tipo_sistema=SPC&amp;hash=b3e39df48683233accd38d1d7a9ec7f8" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-830" aria-label="SPC">
            <span class="menu-item-text">SPC</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=principal&amp;hash=0d412444d836aac27780692eacbf1cbf" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-33" aria-label="Página Inicial">
            <span class="menu-item-text">Página Inicial</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=eprocsysadm_listar&amp;hash=8c93f28195803c22f6c2e38a90e8ef21" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-104" aria-label="Paradas do Sistema">
            <span class="menu-item-text">Paradas do Sistema</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-654" aria-label="Perícias">
            <span class="menu-item-text">Perícias</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-654">

    <li class="">

        <a href="controlador.php?acao=exame_bloqueio_perito_listar&amp;hash=2aa03a8ff4005decbc3336b92c505c2f" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-655" aria-label="Bloqueios/impedimentos dos Peritos">
            <span class="menu-item-text">Bloqueios/impedimentos dos Peritos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-140" aria-label="Permissões Expressas">
            <span class="menu-item-text">Permissões Expressas</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-140">

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=acesso_usuario_documento_listar_chave&amp;hash=1bab8fe02185b894afcc5f472b5493c2" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-334" aria-label="Gerar Chave de Documentos">
            <span class="menu-item-text">Gerar Chave de Documentos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=acesso_usuario_anexo_listar&amp;hash=c9f1fc966dd9d4185d1800902479c4a3" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-375" aria-label="Permissões no Anexo Eletrônico">
            <span class="menu-item-text">Permissões no Anexo Eletrônico</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=acesso_usuario_documento_listar&amp;hash=38e83867984195c8b0d642f322bc13a2" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-141" aria-label="Permissões no Documento">
            <span class="menu-item-text">Permissões no Documento</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=acesso_usuario_processo_listar&amp;hash=61377f79a2c6f542800e560ebab186f5" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-102" aria-label="Permissões no Processo">
            <span class="menu-item-text">Permissões no Processo</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="externo_controlador.php?acao=jurisprudencia@jurisprudencia/pesquisar&amp;hash=3d5d70fadb7513ff80def86c61af0784" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-828" aria-label="Pesquisa de Jurisprudência" target="_blank">
            <span class="menu-item-text">Pesquisa de Jurisprudência</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_cadastrar&amp;hash=e0541ab7683c1f937ffda04441b0b671" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-11" aria-label="Petição Inicial">
            <span class="menu-item-text">Petição Inicial</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-360" aria-label="Precedentes Qualificados">
            <span class="menu-item-text">Precedentes Qualificados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-360">

    <li class="">

        <a href="controlador.php?acao=paradigma_judicial_listar&amp;hash=9c6530c22e5c4e785a17643557c2d819" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-361" aria-label="Consulta/Cadastro Precedentes Qualificados">
            <span class="menu-item-text">Consulta/Cadastro Precedentes Qualificados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_processos_paradigmas&amp;hash=d034174db20d73366f53802944f2d671" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-363" aria-label="Inclusão de Localizador e Associação de Temas em Bloco">
            <span class="menu-item-text">Inclusão de Localizador e Associação de Temas em Bloco</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatoriosNUGEP/incidentes&amp;hash=96c1c5e2e1a0389f453d6900199f3f41" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-669" aria-label="Relatório de Incidentes (NUGEP)">
            <span class="menu-item-text">Relatório de Incidentes (NUGEP)</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatoriosNUGEP/ResultadoDessobrestamentoAgendamento&amp;hash=46822a881e9f180aa06ae6bab4901e3e" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-719" aria-label="Relatório do Agendamento de Dessobrestamento">
            <span class="menu-item-text">Relatório do Agendamento de Dessobrestamento</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatoriosNUGEP/ProcessosTema&amp;hash=9312cf10e5690267fc30125ec58a8451" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-718" aria-label="Relatório Lista Processos por Tema">
            <span class="menu-item-text">Relatório Lista Processos por Tema</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatoriosNUGEP/QuantitativoProcessosTema&amp;hash=79c4053bbe63ad7d85af5b5f913ddf3f" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-716" aria-label="Relatório Quantitativo de Processos por Tema">
            <span class="menu-item-text">Relatório Quantitativo de Processos por Tema</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatoriosNUGEP/SobrestadosPorOrgao&amp;hash=73ed8e57c027214686f31102ac2ff666" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-717" aria-label="Relatório Quantitativo de Sobrestados por Órgao Julgador">
            <span class="menu-item-text">Relatório Quantitativo de Sobrestados por Órgao Julgador</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=repercussao_paradigmas_listar&amp;hash=4ab77512a48c8ed62b7d1b3f8b63dca9" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-366" aria-label="Últimas Alterações">
            <span class="menu-item-text">Últimas Alterações</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-88" aria-label="Prevenção Judicial">
            <span class="menu-item-text">Prevenção Judicial</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-88">

    <li class="">

        <a href="controlador.php?acao=prevencao_judicial_bloco&amp;hash=b7d9a8fcda3c207278e18dc48208080f" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-90" aria-label="Prevenção em Bloco">
            <span class="menu-item-text">Prevenção em Bloco</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=prevencao_judicial&amp;hash=6500fd27c38b4179f980eb5e01d1d26b" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-89" aria-label="Prevenção Individual">
            <span class="menu-item-text">Prevenção Individual</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-70" aria-label="Procurador">
            <span class="menu-item-text">Procurador</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-70">

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=procurador_parte_listar&amp;hash=122512e6fcac9697e64d2bf02139789f" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-69" aria-label="Gerenciar Procurador Parte">
            <span class="menu-item-text">Gerenciar Procurador Parte</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-85" aria-label="Redistribuição de Processos">
            <span class="menu-item-text">Redistribuição de Processos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-85">

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=redistribuicao_processo&amp;hash=f1dfa95d59857128318207297d21b349" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-86" aria-label="Redistribuir Processo">
            <span class="menu-item-text">Redistribuir Processo</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-34" aria-label="Relatórios">
            <span class="menu-item-text">Relatórios</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-34">

    <li class="">

        <a href="controlador.php?acao=relatorio_certidao&amp;hash=4af2553fadee5d30e6fa6b6284624dfa" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-151" aria-label="Certidão">
            <span class="menu-item-text">Certidão</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=certidao_processos_advogado/index&amp;hash=4d4741fde0fbf90f33354df28ffb6bc5" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-791" aria-label="Certidão Advogados">
            <span class="menu-item-text">Certidão Advogados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_digitalizados_recebidos&amp;hash=42139fb6d9dc530bf577eb407c44f29a" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-258" aria-label="Comunicações Recebidas do STF">
            <span class="menu-item-text">Comunicações Recebidas do STF</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_digitalizados_recebidos_stj&amp;hash=d10c942ceba42c8f2505aea25e0828df" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-365" aria-label="Comunicações Recebidas do STJ">
            <span class="menu-item-text">Comunicações Recebidas do STJ</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_controle_presc_penal&amp;hash=171babe97a9e7c983806622484a938e9" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-309" aria-label="Controle de Prescrição Penal">
            <span class="menu-item-text">Controle de Prescrição Penal</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-780" aria-label="Domicílio Eletrônico">
            <span class="menu-item-text">Domicílio Eletrônico</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-780">

    <li class="">

        <a href="controlador.php?acao=RelatorioEnvioComunicacaoDomicilioEletronico/index&amp;hash=3cb04c161af3471d7d091fb2bb0669eb" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-777" aria-label="Relatório de Comunicações enviadas ao Domicílio Eletrônico">
            <span class="menu-item-text">Relatório de Comunicações enviadas ao Domicílio Eletrônico</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_status_processo_evento_listar&amp;hash=7ceb29623cf0d1c29c878a61ab385d86" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-208" aria-label="Eventos Lançáveis por Situação atual do Processo">
            <span class="menu-item-text">Eventos Lançáveis por Situação atual do Processo</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-808" aria-label="Intimações DJEN">
            <span class="menu-item-text">Intimações DJEN</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-808">

    <li class="">

        <a href="controlador.php?acao=RelatorioEnvioComunicacaoIntimacaoDjen/index&amp;hash=e3eb4c627a09543a20231c611321044f" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-809" aria-label="Relatório de Intimações enviadas ao DJEN">
            <span class="menu-item-text">Relatório de Intimações enviadas ao DJEN</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=RelatorioAcessoProcesso/index&amp;hash=c0ab016c345da61a8741d27215544a2e" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-382" aria-label="Log de Acesso ao Processo">
            <span class="menu-item-text">Log de Acesso ao Processo</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=RelatorioAcessoDocumento/index&amp;hash=3f6142a0767fb0ea3f25dcc1dd3afcd2" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-383" aria-label="Log de Acesso aos Documentos">
            <span class="menu-item-text">Log de Acesso aos Documentos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_sem_movimentacao_listar&amp;hash=da916b2cdd31470cbcf29e79b996d425" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-47" aria-label="Processos sem Movimentação nos Últimos N Dias">
            <span class="menu-item-text">Processos sem Movimentação nos Últimos N Dias</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processos_redistribuidos_listar&amp;hash=4e005892ad040956186344723f05c378" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-412" aria-label="Processos Sigilosos Redistribuídos">
            <span class="menu-item-text">Processos Sigilosos Redistribuídos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_processos_srec_listar&amp;hash=7396b6fd481c4f228d65745f118c2385" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-256" aria-label="Processos SREC">
            <span class="menu-item-text">Processos SREC</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=carta_ar/relatorio_carta_ar&amp;hash=da6dcfd546b3c6005d399c161a737364" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-540" aria-label="Relatório de Cartas AR">
            <span class="menu-item-text">Relatório de Cartas AR</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_processo_carta_precatoria_listar&amp;hash=dc36089e5cdfdb2228cefc83caf76c16" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-202" aria-label="Relatório de Cartas de Ordem Expedidas">
            <span class="menu-item-text">Relatório de Cartas de Ordem Expedidas</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_distribuicao_listar&amp;hash=24cc1eaf5576e88146a9b723d8d2b6c2" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-123" aria-label="Relatório de Distribuição">
            <span class="menu-item-text">Relatório de Distribuição</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_distribuicao_listar&amp;hash=24cc1eaf5576e88146a9b723d8d2b6c2" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-667" aria-label="Relatório de Processos Distribuídos">
            <span class="menu-item-text">Relatório de Processos Distribuídos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_processos_relacionados&amp;hash=c1dbc1e1049ca7ef9f8a1ab49b043ded" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-577" aria-label="Relatório de Processos Relacionados">
            <span class="menu-item-text">Relatório de Processos Relacionados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_geral_listar&amp;hash=699493dec54cfc93068972f46f03b650" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-48" aria-label="Relatório Geral">
            <span class="menu-item-text">Relatório Geral</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_processos_plantao&amp;hash=45e6bcf5fd00a890d8b1a0da9c828283" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-176" aria-label="Relatório Processos Plantão">
            <span class="menu-item-text">Relatório Processos Plantão</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_requisicoes_pagas_jef_listar&amp;hash=1aeed089e4ec9740036609b56e8437d4" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-427" aria-label="Requisições Pagas para COJEF">
            <span class="menu-item-text">Requisições Pagas para COJEF</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_resumo_movimentacao_listar&amp;hash=1a7dd019f6bffa920d7d7277609b4e38" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-49" aria-label="Resumo da Movimentação por Dia/Período">
            <span class="menu-item-text">Resumo da Movimentação por Dia/Período</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_rol&amp;hash=3c8a92dfcbac30b38f04b0937813b591" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-152" aria-label="Rol de Culpados">
            <span class="menu-item-text">Rol de Culpados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_situacao_processo_instancia_superior&amp;hash=20ac794fc5a0366e50ab5134b84ce748" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-564" aria-label="Situação de Processos Remetidos ao STF">
            <span class="menu-item-text">Situação de Processos Remetidos ao STF</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=renajud_restricao/listar&amp;hash=87d14d0eda9d1c528604340fd897a043" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-820" aria-label="Restrições Renajud">
            <span class="menu-item-text">Restrições Renajud</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-17" aria-label="Retifica Autuação">
            <span class="menu-item-text">Retifica Autuação</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-17">

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=alterar_cabecalho_peticao_listar&amp;hash=1b9aa58944a26ae4ee936510fc5514ab" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-424" aria-label="Alterar Cabeçalho Petição">
            <span class="menu-item-text">Alterar Cabeçalho Petição</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=documento_sigilo&amp;hash=d504076741bc29f104bdaaeb570e0d23" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-115" aria-label="Alterar Nível de Sigilo do Documento">
            <span class="menu-item-text">Alterar Nível de Sigilo do Documento</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=retificar&amp;hash=aefa42fd6ca30cb6f8937ccd84b4beb2" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-18" aria-label="Retificação de Autuação">
            <span class="menu-item-text">Retificação de Autuação</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-474" aria-label="Sessão de Julgamento">
            <span class="menu-item-text">Sessão de Julgamento</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-474">

    <li class="">

        <a href="controlador.php?acao=sessao_julgamento_calendario&amp;hash=6563e75857b934bd816bdcaf4456b48d" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-480" aria-label="Calendário de Sessões de Julgamento">
            <span class="menu-item-text">Calendário de Sessões de Julgamento</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=sessao_julgamento_listar&amp;hash=379336d9b77d384c54f10f5299fe9952" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-479" aria-label="Cronograma de Sessões de Julgamento">
            <span class="menu-item-text">Cronograma de Sessões de Julgamento</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=orgao_sessao_julgamento_cronograma_padrao_listar&amp;hash=55446b239d909d2003a298b39a417963" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-478" aria-label="Cronograma Padrão">
            <span class="menu-item-text">Cronograma Padrão</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=sessao_julgamento_pedidos/listar&amp;hash=752ea2a8220c0957728f7e5ab345f20e" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-773" aria-label="Solicitações de Sustentação ou Preferência">
            <span class="menu-item-text">Solicitações de Sustentação ou Preferência</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-42" aria-label="Tabelas Básicas">
            <span class="menu-item-text">Tabelas Básicas</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-42">

    <li class="">

        <a href="controlador.php?acao=competencia_assunto_judicial_listar&amp;hash=92cc9ace5e0043c2daed158e5ee0c967" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-154" aria-label="Assuntos Judiciais">
            <span class="menu-item-text">Assuntos Judiciais</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=competencia_classe_judicial_listar&amp;hash=f4bcfbba1885789a2b23d4b51f4f04f1" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-155" aria-label="Classes Judiciais">
            <span class="menu-item-text">Classes Judiciais</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=orgao_endereco_listar&amp;hash=be63ae83e54007978777bb654a62bfdb" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-405" aria-label="Endereço do Órgão">
            <span class="menu-item-text">Endereço do Órgão</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=evento_peticao_tipo_documento_listar&amp;hash=a8d83822e3974727688f537576da87a7" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-211" aria-label="Evento/Petição Tipo Documento">
            <span class="menu-item-text">Evento/Petição Tipo Documento</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=eventos_comunicacao_listar&amp;hash=af273919911012cb21b2bf1856b39a50" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-257" aria-label="Eventos de Comunicação">
            <span class="menu-item-text">Eventos de Comunicação</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=evento_orgao_judicial_listar&amp;hash=07ff26220cac384d69f97785187eae56" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-216" aria-label="Eventos Judiciais">
            <span class="menu-item-text">Eventos Judiciais</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=lista_eventos_migrados&amp;hash=ca683a352cd0aa639ab55a5788dc8530" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-701" aria-label="Lista de Eventos Migrados">
            <span class="menu-item-text">Lista de Eventos Migrados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=mapeamento_decisao_intimacao&amp;hash=9160b6c50ba32ec79f56f99e9c74e0f1" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-316" aria-label="Mapeamento Decisão/Intimação">
            <span class="menu-item-text">Mapeamento Decisão/Intimação</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-475" aria-label="Sessão de Julgamento">
            <span class="menu-item-text">Sessão de Julgamento</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-475">

    <li class="">

        <a href="controlador.php?acao=orgao_gabinete_listar&amp;hash=1557eee173358e426999a03d960b302d" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-502" aria-label="Gerenciar a ordem dos gabinetes no colegiado">
            <span class="menu-item-text">Gerenciar a ordem dos gabinetes no colegiado</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=orgao_sessao_julgamento_listar&amp;hash=55092a18cb86b38d396c567e2fafbe7d" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-657" aria-label="Parâmetros da Sessão - Aviso na TV">
            <span class="menu-item-text">Parâmetros da Sessão - Aviso na TV</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=tipo_agrupamento_sessao_julgamento_orgao_listar&amp;hash=8c0a6ea4fc2f6f27b24835928d024be7" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-505" aria-label="Tipos de agrupamento do órgão">
            <span class="menu-item-text">Tipos de agrupamento do órgão</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=orgao_tipo_automacao_sessao_julgamento_listar&amp;hash=2e18bfe34d702d356a894b266c7ce6f3" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-680" aria-label="Tipos de Automação do Órgão">
            <span class="menu-item-text">Tipos de Automação do Órgão</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=tipo_peticao_judicial_listar&amp;hash=5c1ccb8a07f00ade37b90e9673afc0e8" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-450" aria-label="Tipo Petição Judicial">
            <span class="menu-item-text">Tipo Petição Judicial</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=tipo_documento_listar&amp;hash=396808d0cb7613f185ae73974bc52646" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-411" aria-label="Tipos de Documentos">
            <span class="menu-item-text">Tipos de Documentos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=orgao_configura_transferencia_minuta&amp;hash=fb9c59c09ad3677d0edffa032de61031" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-598" aria-label="Transferência de minutas na redistribuição de processos">
            <span class="menu-item-text">Transferência de minutas na redistribuição de processos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=md_tjsc_gc_valor_conducao_listar&amp;hash=a2c208d7734d2b1468e58e6e28389e9f" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-615" aria-label="Valor Condução">
            <span class="menu-item-text">Valor Condução</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-319" aria-label="Tutorial">
            <span class="menu-item-text">Tutorial</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-319">

    <li class="">

        <a href="controlador.php?acao=tutorial_acessibilidade&amp;hash=596cde73589d69580f8f24d9591b0325" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-770" aria-label="Acessibilidade">
            <span class="menu-item-text">Acessibilidade</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=tutorial_atalhos_teclado&amp;hash=53c19e25778648ed15d511ee0bd4b7a9" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-458" aria-label="Atalhos de teclado">
            <span class="menu-item-text">Atalhos de teclado</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="?acao=tutorial_automacao_localizadores&amp;hash=3e542bc8eb43a6acd84f3b1dbc6800e3" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-562" aria-label="Automação de Localizadores">
            <span class="menu-item-text">Automação de Localizadores</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=tutorial_cartas_ar&amp;hash=786c31fcebe18c56d0bba232774b43ed" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-541" aria-label="Manual de Cartas AR - VPost">
            <span class="menu-item-text">Manual de Cartas AR - VPost</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=tutorial_mandados_prisao&amp;hash=d7185a76b9800a7e0c8aa8c2459953cd" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-510" aria-label="Manual de Mandados de Prisão - BNMP">
            <span class="menu-item-text">Manual de Mandados de Prisão - BNMP</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=tutoriais_eproc_usuarios_externos&amp;hash=ecacc293496935e0b9932f84fcbf33ad" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-663" aria-label="Tutoriais eproc usuários externos">
            <span class="menu-item-text">Tutoriais eproc usuários externos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=tutoriais_eproc_usuarios_internos&amp;hash=33087625eb85e6146cf844841c835d89" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-664" aria-label="Tutoriais eproc usuários internos">
            <span class="menu-item-text">Tutoriais eproc usuários internos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="has-submenu">

        <a href="#" class="collapsed" tabindex="0" data-toggle="collapse" data-target="#menu-ul-53" aria-label="Usuários">
            <span class="menu-item-text">Usuários</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

                    <ul class="collapse" id="menu-ul-53">

    <li class="">

        <a href="controlador.php?acao=pessoa_alterar&amp;hash=e43843f2bdcec3fe08ac0c36f0ec8736" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-114" aria-label="Alteração de Dados Pessoais">
            <span class="menu-item-text">Alteração de Dados Pessoais</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=senha_alterar&amp;hash=6a9406295113d81cfe3a12cb1dafbc4b" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-54" aria-label="Alterar Senha Pessoal">
            <span class="menu-item-text">Alterar Senha Pessoal</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=pessoa_juridica_cadastrar&amp;hash=d26b01e7a1d4161a9b88755f89e78679" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-181" aria-label="Cadastro de Sociedade de Advogados">
            <span class="menu-item-text">Cadastro de Sociedade de Advogados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=usuario_listar&amp;hash=95ae7472ce01c61297943636c25180d7" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-55" aria-label="Cadastro de Usuários">
            <span class="menu-item-text">Cadastro de Usuários</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=usuario_listar_todos&amp;hash=cddb0c0817127e23670ac8c47b6c55b3" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-72" aria-label="Lista de Usuários">
            <span class="menu-item-text">Lista de Usuários</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=usuario_relatorio_acesso&amp;hash=6b8acdaa42e4adab7cffa9e8973bf74c" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-159" aria-label="Relatório de acessos ao sistema">
            <span class="menu-item-text">Relatório de acessos ao sistema</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_acessos_painel&amp;hash=0d482fbb4ce95d176e15c42205c5138d" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-164" aria-label="Relatório de Acessos aos Painéis">
            <span class="menu-item-text">Relatório de Acessos aos Painéis</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=representante_legal_pj_listar&amp;hash=e33f33ad7396ac0c5c452775f0191212" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-665" aria-label="Validar Representante Legal de PJ">
            <span class="menu-item-text">Validar Representante Legal de PJ</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
                                            </ul>
                    <div id="empty-space" style="height: 200px"></div>
                </div>
                <div id="sidebar-wrapper-background"></div>
            </div>
                            <div id="page-content-wrapper" class="bootstrap-styles">
                <div id="divInfraAreaTela" class="infraAreaTela mt-2">
                    <div id="divInfraAreaTelaD" class="container-fluid" style="position: relative;">
                                                    <div class="bootstrap-styles" id="divInfraBarraLocalizacao">
    			<div class="pl-0 pr-0 pt-1 col-md-12 justify-content-between d-flex">
    				<h1>Lista de Processos por Localizador</h1>				<span class="dropleft">
    				<a id="dropdownMenuButton" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Ajuda">
    					<i class="material-icons justify-content-between">help_outline</i>
    				</a>
    				<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    					 <a href="#" class="dropdown-item" title="Clique aqui para acessar o arquivo de ajuda." onclick="window.open(&quot;controlador.php?acao=consultar_ajuda&amp;acao_origem=localizador_processos_lista&amp;hash=404facf209e341d69bd759d93ee4226b&quot;, &quot;page&quot;, &quot;left=200, scrollbars = yes, top=260, width=700, height=690, resizable=1&quot;);" alt="Ajuda">
                	Acessar Tutorial
                </a><a class="dropdown-item" href="#" onclick="eproc.hint.init(&quot;controlador_ajax.php?acao_ajax=buscar_dica&amp;hash=afc2883d1b3e9fcbb64159cca1d00fdb&quot;);">Rever dica</a>
    				</div>
    			</span>
    			</div>
    		</div>
                                                    <form id="frmProcessoLista" method="post" action="controlador.php?acao=localizador_processos_lista&amp;acao_origem=localizador_processos_lista&amp;sin_abrir_link_janela=1&amp;hash=5b48a9f1056305f8e927afc14a97e147">
        <div class="d-flex justify-content-center">
            <div class="modal fade" id="modal-sessao-julgamento-lista" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable" role="document">
                    <div class="modal-content">
                    </div>
                </div>
            </div>
        </div>

        <div class="eproc-barra-superior-flutuante mb-2"><input type="hidden" id="hdnInfraTipoPagina" name="hdnInfraTipoPagina" value="3">

<div id="divInfraBarraComandosSuperior" class="infraBarraComandos"><button id="documento-relevante-auto-button" class="infraButton btn-primary" style="background-color: rgb(248, 249, 250); border-color: rgb(248, 249, 250);">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 4px !important;">
 <rect width="18" height="18" x="3" y="3" rx="2"></rect>
 <path d="m9 8 6 4-6 4Z"></path>
 </svg>
 Resumir Documento
 </button>
<button tabindex="0" type="submit" accesskey="C" id="btnConsultar" value="Consultar" class="infraButton btn-primary" onclick="return validarSelecaoForm();">
	    <span class="infraTeclaAtalho">C</span>onsultar</button>&nbsp;
<button tabindex="0" type="button" accesskey="G" id="sbmExcel" value="Gerar Planilha" onclick="gerarExcel()" class="infraButton"><span class="infraTeclaAtalho">G</span>erar Planilha</button>&nbsp;
<button tabindex="0" type="button" accesskey="V" id="btnVoltar" onclick="location.href='controlador.php?acao=principal&amp;acao_origem=localizador_processos_lista&amp;hash=c8ef09297f5232db3271d583f1fbe0a0'" class="infraButton">
	            <span class="infraTeclaAtalho">V</span>oltar</button>&nbsp;
</div>
</div>
                <fieldset id="fldPreferencias" class="infraFieldset" aria-label="Preferências"><legend class="infraLegendObrigatorio">Preferências</legend>
                        <div class="row col-12">
                            <div id="divSelecaoPreferencia" class="col-12">                  
                                <input type="hidden" id="hdnIsGerente" name="hdnIsGerente" value="1">
                                <input type="hidden" id="hdnAcaoPreferencia" name="hdnAcaoPreferencia">
            <script>
            
            $(document).ready(function () {     
    
                // Atalhos de teclado
                var elements = "body, select, input";
        
          
                $(elements).bind("keydown", "Alt+r", function() {
                $("#txtPreferencia").focus();
                $("#lblListarPreferencia").click();
            });
          
            
            });
            </script>
               
                    <label id="lblPreferencias" for="selPreferencias" class="infraLabelOpcional mr-auto">
                        <span title="Tecla de atalho: Alt+R">P<span class="infraTeclaAtalho">r</span>eferência:</span></label>      
                    <input type="text" id="txtPreferencia" title="Tecla de atalho: Alt+R" name="txtPreferencia" class="infraText order-3 w-100 mr-0 col-xl-6 infraAutoCompletar" maxlength="300" value="" autocomplete="off">
                    <button aria-label="Listar Todos" title="Listar Todos" type="button" id="lblListarPreferencia" style="cursor: pointer; font-size: 12px; pointer-events: auto !important;" class="text-nowrap mr-1 p-0 btn btn-link" onclick="listarPreferencias();">Listar <span aria-hidden="true" class="infraTeclaAtalho" style="pointer-events: auto !important;">T</span>odos</button>
                    <input type="hidden" id="hdnPreferencia" name="hdnPreferencia" value="0">
                    <input type="hidden" id="hdnPreferenciaUsuario" name="hdnPreferenciaUsuario" value="">
        <span tabindex="0" role="button" type="button" aria-label="Editar Preferências" title="Editar Preferências" class="btn mr-2 p-0 btn-link justify-content-between" id="listaPreferencias" onclick="javascript:exibirSubFrm('controlador.php?acao=formulario_personalizacao_listar&amp;nome_acao=localizador_processos_lista&amp;acao_origem=&amp;hash=978eb85d44bdea726336220b4974e902',900,600,false);">
            <i aria-hidden="true" class="material-icons p-0" style="font-size:22px; cursor:pointer; padding: 0;">person</i>           
        </span>
            <button type="button" accesskey="V" name="btnSalvarPreferencias" id="btnSalvarPreferencias" value="Salvar Preferências" class="infraButton btn-primary order-4 ml-auto">
                        Sal<span class="infraTeclaAtalho">v</span>ar Nova Preferência
            </button>
                                        </div>
                                         
                            <div id="divPrefOpcoes" class="col-12" style="display: none">
                                        <fieldset class="infraFieldset">
                                          <legend class="infraLegend">Dados da nova preferência </legend>
                                    <div class="row">
                                        
                    <div class="col-12 mb-3">
                            <label class="infraLabelObrigatorio">Descrição: </label>
                            <input type="text" id="txtDescricaoCadastro" autocomplete="off" name="txtDescricaoCadastro" class="infraText col-12 col-lg-6" onkeypress="return infraMascaraTexto(this,event);" tabindex="">
                        </div>
                    <div class="col-12 mb-3">
                        
            <div class="d-flex">
                <div class="flex-grow-1" style="flex-basis: 0">
                    <label for="rdPrefTipo" class="infraLabelOpcional">Tipo de preferência:</label>
                    <label id="lblRdIndividual" for="rdIndividual" class="infraLabelOpcional">
                <input type="radio" name="rdPrefTipo" id="rdIndividual" value="I" checked="">
                        Individual
                    </label>
                    <label id="lblRdUnidade" for="rdUnidade" class="infraLabelOpcional">
                <input type="radio" name="rdPrefTipo" id="rdUnidade" value="U">
                        Unidade
                    </label>
                    
                </div>
                        <div class="flex-grow-1" style="flex-basis: 0">
                            <label id="lblGrupo" for="selFormularioPersonalizacaoGrupo" class="infraLabelOpcional w-100">Grupo:</label>
                            <select disabled="" id="selFormularioPersonalizacaoGrupo" name="selFormularioPersonalizacaoGrupo" class="infraSelect">
                                <option value="null" selected="selected"></option>

                            </select>
                        </div></div>
                    </div>
                    <div class="col-12 mb-3">
                        <label class="infraLabelOpcional mb-2">Opções:</label>
                        <label id="lblValorPadrao" for="chkValorPadrao" class="infraLabelOpcional w-100">
                            <input id="chkValorPadrao" name="chkValorPadrao" value="S" type="checkbox" class="infraCheckBox">
                            Marcar como padrão
                        </label>
                        <label id="lblPainelInicial" for="chkPainelInicial" class="infraLabelOpcional">
                            <input id="chkPainelInicial" name="chkPainelInicial" type="checkbox" class="infraCheckBox">
                            Exibir no Painel Inicial
                            <span id="lblPainelInicialOBS" class="infraLabelOpcional">
                            </span>
                        </label>
                    </div>
                    <div class="col-12 d-flex">
                        <button type="button" accesskey="O" name="btnOK" id="btnOK" value="Salvar Preferências" class="infraButton btn-primary mr-2">
                                Salvar preferência
                            </button>

                            <button type="button" accesskey="C" name="btnCancelarPreferencias" id="btnCancelarPreferencias" value="Cancelar Salvar Preferências" class="infraButton">
                                Cancelar
                            </button>
                        </div>
                                        </div>
                                </fieldset>
                            </div>
        <!--// Início div aguardando //-->
        <div id="aguardando" style="font-weight:bold;text-align:center;display:none;">
            <img src="infra_css/imagens/aguarde.gif">Aguarde...<br>
        </div>
        <!--// Fim div aguardando //-->

                        </div>
                    </fieldset>

            <script type="text/javascript">

                var objAjaxAutoCompPreferencia = null;
                var numIdPreferenciaAntigo = document.getElementById('hdnPreferencia').value;
                var txtPreferencia = document.getElementById('txtPreferencia').value;


                objAjaxAutoCompPreferencia = new infraAjaxAutoCompletar('hdnPreferencia', 'txtPreferencia', 'controlador_ajax.php?acao_ajax=preferencia_auto_completar&nomeAcao=localizador_processos_lista&hash=2fe16b6675f3fff74de7d0ff06f4c8c6');
                objAjaxAutoCompPreferencia.tamanhoMinimo = 3;
                objAjaxAutoCompPreferencia.limparCampo = true;
                objAjaxAutoCompPreferencia.mostrarComplemento = false;
                objAjaxAutoCompPreferencia.mostrarImagemVerificado = false;
                objAjaxAutoCompPreferencia.prepararExecucao = function () {
                    if (document.getElementById('txtPreferencia').value != '') {
                        return 'txtPreferencia=' + document.getElementById('txtPreferencia').value;
                    }
                };
                objAjaxAutoCompPreferencia.carregarResultado = function () {
                    window.setTimeout(function(){
                     //Altera cor da linha de preferencias do usuário.
                      var arrItens = objAjaxAutoCompPreferencia.arrItens;

                      $('#divInfraAjaxtxtPreferencia li').each(function(i){
                          var complemento = arrItens[i]['complemento'];
                          var alterarCor = complemento.split(';');
                          if (alterarCor[0] == 'U') {
                             this.style.backgroundColor = 'lightgray';
                          }
                      }) ;

                      },200);

                };

                objAjaxAutoCompPreferencia.processarResultado = function (id,descricao,complemento) {
                   var txtPreferenciaAtual = document.getElementById('txtPreferencia').value;
                    if ((document.getElementById('hdnPreferencia').value!='' &&  id != numIdPreferenciaAntigo )|| (txtPreferenciaAtual == '' && descricao!=txtPreferencia)) {
                        document.getElementById('hdnPreferenciaUsuario').value = complemento;
                        changePreferencia();
                    }
                };

            </script>        <div class="row">
            <div id="div_sel_localizador" class="col-5">
                <label id="lblLocalizador" for="selLocalizador" accesskey="z" class="infraLabelObrigatorio">Locali<span class="infraTeclaAtalho">z</span>ador:</label>
                <div class="dropdown bootstrap-select show-tick w-100 multiple"><select id="selLocalizador" name="selLocalizador" class="w-100 selectpicker multiple" multiple="true" data-actions-box="true" data-live-search="true" data-live-search-normalize="true" data-selected-text-format="count" data-container="#div_sel_localizador">
                    <option value="321763997812353340348641297548">❗ERRO NA AUTOMAÇÃO ❗ - [AMR] Erro Automação</option>

<option value="321765322095166388287499870944">⇆ Triagem ⇆ - [AMR] Triagem</option>
<option value="321769438024006309480515412735">⚠️[RETIRAR DE PAUTA]⚠️ - ⚠️[RETIRAR DE PAUTA]⚠️</option>
<option value="321763997812353340348644606662">* adm./justiça/econ./fé púb./trib./orcrim/resp. * - * adm./justiça/econ./fé púb./trib./orcrim/resp. *</option>
<option value="321763997812353340348644595107">* amb./cons./ECA/honra/paz/preconceito * - * amb./cons./ECA/honra/paz/preconceito *</option>
<option value="321763997812353340348644595877">* armas/trânsito/outros * - * armas/trânsito/outros *</option>
<option value="321763997812353340348644594796">* dign. sexual * - * dign. sexual *</option>
<option value="321763997812353340348644595470">* exec. penal * - * exec. penal *</option>
<option value="321765894927640366818185323239">* habeas corpus * - * habeas corpus *</option>
<option value="321765894927640366818189429475">* mandado de segurança * - * mandado de segurança *</option>
<option value="321763997812353340348644596672">* originária/sigilo * - * originária/sigilo *</option>
<option value="321763997812353340348644597082">* patrimônio * - * patrimônio *</option>
<option value="321765894927640366818202416500">* rese * - * rese *</option>
<option value="321763997812353340348644597415">* tráfico * - * tráfico *</option>
<option value="321763997812353340348644593887">* vida/liberdade/pessoa * - * vida/liberdade/pessoa *</option>
<option value="321763997812353340348644607235">* viol. doméstica * - * viol. doméstica *</option>
<option value="321763997812353340348641292100">0. ag. cumprimento desp/dec - 0. ag. cumprimento desp/dec</option>
<option value="321763997812353340348641292420">0. ag. trânsito - 0. ag. trânsito</option>
<option value="321763997812353340348649937551">0. DCDP - Ag. Redistribuição - 0. DCDP - Ag. Redistribuição</option>
<option value="321763997812353340348641290463">0. DCDP - Ag. Revisão - 0. DCDP - Ag. Revisão</option>
<option value="321763997812353340348649937811">0. inf. óbito - [AMR] Informação de Óbito</option>
<option value="321763997812353340348644604954">1. Ação Rescisória - [AMR] Ação Rescisória</option>
<option value="321764580304141191329938721599">1. Admissibilidade - [AMR] Admissibilidade</option>
<option value="321763997812353340348644598419">1. Agravo de Instrumento - [AMR] Agravo de Instrumento</option>
<option value="321763997812353340348644598108">1. Agravo Interno - [AMR] Agravo Interno</option>
<option value="321763997812353340348644605660">1. Analisar Gratuidade - [AMR] Analisar Gratuidade</option>
<option value="321763997812353340348644607587">1. Conflito de Jurisdição - [AMR] Conflito de Jurisdição</option>
<option value="321763997812353340348644607918">1. Cooperadores - [AMR] Cooperadores</option>
<option value="321763997812353340348644605306">1. Devolvidos 2ª Vice - [AMR] Devolvidos 2ª Vice</option>
<option value="321763997812353340348644593327">1. Embargos de Declaração - [AMR] Embargos de Declaração</option>
<option value="321763997812353340348644608252">1. Homologação Acordo/Desistência - [AMR] Homologação de Acordo/Desistência</option>
<option value="321763997812353340348644591739">1. Incompetência - [AMR] Incompetência</option>
<option value="321763997812353340348644608798">1. Inicial - Agravo de Instrumento - [AMR] Inicial - Agravo de Instrumento</option>
<option value="321763997812353340348644612880">1. Julg. Monocrático - [AMR] Julgamento Monocrático</option>
<option value="321763997812353340348644613486">1. Não Conhecimento - [AMR] Não Conhecimento</option>
<option value="321763997812353340348644613186">1. Recebidos MP - [AMR] Recebidos MP</option>
<option value="321763997812353340348644590725">1. Retorno despacho/decisão - [AMR] Retorno despacho/decisão</option>
<option value="321763997812353340348641290816">1. Urgente 🔴 - 1. Urgente</option>
<option value="321764669184350019842826155181">2. acórdãos - ag. conferência - 2. acórdãos - ag. conferência</option>
<option value="321767889621726212567043193745">2. acórdãos - conferidos - 2. acórdãos - conferidos</option>
<option value="321767955189985457146787763954">2. devolvido para correção - 2. devolvido para correção</option>
<option value="321763997812353340348649940501">2. monocráticas - ag. assinatura - 2. monocráticas - ag. assinatura</option>
<option value="321763997812353340348649940245">2. monocráticas - ag. conferência - 2. monocráticas - ag. conferência</option>
<option value="321765421534210567367928528151">3. pautar - 3. pautar</option>
<option value="321765421534210567367925950754">4. acórdãos - assinatura pós-sessão - 4. acórdãos - assinatura pós-sessão</option>
<option value="321765421534210567367932053125">4. adiados - 4. adiados</option>
<option value="321763997812353340348649939119">4. para voto divergente - 4. para voto divergente</option>
<option value="321763997812353340348649938281">4. para voto-vista - 4. para voto-vista</option>
<option value="321763997812353340348649938050">4. pautados - 4. pautados</option>
<option value="321765421534210567367935059513">4. pedido de vista - 4. pedido de vista</option>
<option value="321763997812353340348649938515">4. relator p/ acórdão - 4. relator p/ acórdão</option>
<option value="321765421534210567367937027680">4. retirados de pauta - 4. retirados de pauta</option>
<option value="321765934125521599334937586858">&lt;&gt; Baixar em Diligência &lt;&gt; - [AMR] Baixar em Diligência</option>
<option value="321764543206809176417083033622">&lt;&gt; Contrarrazões &lt;&gt; - [AMR] Contrarrazões</option>
<option value="321764580304141191329859989191">&lt;&gt; Dativo - Nomear &lt;&gt; - [AMR] Dativo - Nomear</option>
<option value="321764543206809176417167681321">&lt;&gt; PGJ &lt;&gt; - [AMR] PGJ</option>
<option value="321764580304141191329834982617">&lt;&gt; Razões - constituir novo defensor &lt;&gt; - [AMR] Razões - constituir novo defensor</option>
<option value="321766158145092759625303977268">&lt;&gt; Razões &lt;&gt; - [AMR] Razões</option>
<option value="321766134174252360563249059927">&lt;&gt; Secretaria &lt;&gt; - [AMR] Secretaria</option>
<option value="321767275328932661495022786143">&lt;tt&gt;&lt;b&gt;[RÉU PRESO]&lt;/b&gt;&lt;/tt&gt; - &lt;tt&gt;&lt;b&gt;[RÉU PRESO]&lt;/b&gt;&lt;/tt&gt;</option>
<option value="321763991294517580217895332375">ACÓRDÃOS - ACÓRDÃOS</option>
<option value="321763991294517580217895332475">ADM-AJG requerida - ADM-AJG requerida</option>
<option value="321763991294517580217895332474">ADM-Deserção - ADM-Deserção</option>
<option value="321763991294517580217895332473">ADM-Tempestividade - ADM-Tempestividade</option>
<option value="321763991294517580217895332385">ADMINISTRATIVO - ADMINISTRATIVO</option>
<option value="321763991294517580217895332486">AG. DIGITALIZAÇÃO - AGUARDA DIGITALIZAÇÃO</option>
<option value="321763991294517580217895332489">AGRAVO - AGRAVO</option>
<option value="321763991294517580217895332497">ALV SOLT CUMPRIDO - ALVARÁ DE SOLTURA CUMPRIDO</option>
<option value="321763991294517580217895332496">ALV SOLT CUMPRIDO EM TERMOS - ALVARÁ DE SOLTURA CUMPRIDO EM TERMOS</option>
<option value="321763991294517580217895332495">ALV SOLT DEVOLVIDO - ALVARÁ DE SOLTURA DEVOLVIDO SEM CUMPRIMENTO</option>
<option value="321763991294517580217895332498">ALV SOLT INFORMAÇÃO - ALVARÁ DE SOLTURA INFORMAÇÃO</option>
<option value="321763991294517580217895332499">ALV SOLT LIDO - ALVARÁ DE SOLTURA LIDO</option>
<option value="321770066818483901493934333734">AMR - Ato Infracional - Ato Infracional</option>
<option value="321770066818483901493937467301">AMR - Correição Parcial - Correição Parcial</option>
<option value="321770385676294988228546517507">AMR PAUTAR - AMR PAUTAR</option>
<option value="321763991294517580217895332520">APRECIACAO_JUDIC - APRECIAÇÃO JUDICIAL</option>
<option value="321763991294517580217895332395">AR ENTREGUE - CARTA AR ENTREGUE</option>
<option value="321763991294517580217895332396">AR NÃO ENTREGUE - CARTA AR NÃO ENTREGUE</option>
<option value="321763991294517580217895332408">AUTUADOS - AUTUADOS</option>
<option value="321763997812353340348641293823">AUTUADOS-AI - AUTUADOS-AI</option>
<option value="321763997812353340348641294203">AUTUADOS-HC - AUTUADOS-HC</option>
<option value="321763997812353340348641294538">AUTUADOS-MS - AUTUADOS-MS</option>
<option value="321763991294517580217895332371">BAIXADOS - BAIXADOS</option>
<option value="321763991294517580217895332459">BAIXADOS-GAB - BAIXADOS-GAB</option>
<option value="321763991294517580217895332458">BENS A CADASTRAR - BENS A CADASTRAR</option>
<option value="321763991294517580217895332544">BNMP REC - BNMP RECEBIDOS</option>
<option value="321763991294517580217895332545">BNMP RGL - REGULARIZAR BNMP</option>
<option value="321763991294517580217895332456">CAMP - ÓBITOS - NEGATIVO - CAMP - ÓBITOS - NEGATIVO</option>
<option value="321763991294517580217895332454">CAMP - ÓBITOS - PESQUISAR - CAMP - ÓBITOS - PESQUISAR</option>
<option value="321763991294517580217895332455">CAMP - ÓBITOS - POSITIVO - CAMP - ÓBITOS - POSITIVO</option>
<option value="321763991294517580217895332457">CAMP - PESQUISAR ENDEREÇOS - CAMP - PESQUISAR ENDEREÇOS</option>
<option value="321763991294517580217895332397">CANCELAMENTO - VERIFICAR CANCELAMENTO EVENTO</option>
<option value="321763991294517580217895332501">CARTA AR ENVIADA - CARTA AR ENVIADA</option>
<option value="321763991294517580217895332531">CARTA AR PAGAMENTO CONFIRMADO - CARTA AR PAGAMENTO CONFIRMADO</option>
<option value="321763991294517580217895332532">CARTA AR PAGAMENTO NÃO REALIZADO - CARTA AR PAGAMENTO NÃO REALIZADO</option>
<option value="321763991294517580217895332505">CARTAS Pr Or Rog - CARTAS Pr Or Rog</option>
<option value="321763991294517580217895332415">Cessado Sobrestamento - Cessado Sobrestamento</option>
<option value="321763991294517580217895332465">CI NÃO PAGAS - CUSTAS INICIAIS NÃO PAGAS</option>
<option value="321763991294517580217895332463">CI PEND - CUSTAS INICIAIS PEND</option>
<option value="321763991294517580217895332508">CONCILIAÇÃO - CONCILIAÇÃO</option>
<option value="321763991294517580217895332403">CONCILIACAO_COM_ACOR - CONCILIACAO_COM_ACORDO</option>
<option value="321763991294517580217895332402">CONCILIACAO_INICIADA - CONCILIACAO INICIADA</option>
<option value="321763991294517580217895332404">CONCILIACAO_SEM_ACOR - CONCILIACAO_SEM_ACORDO</option>
<option value="321763991294517580217895332460">CONTADORIA - CONTADORIA</option>
<option value="321763991294517580217895332466">CR NÃO PAGAS - CUSTAS RECURSAIS NÃO PAGAS</option>
<option value="321763991294517580217895332464">CR PEND - CUSTAS RECURSAIS PEN</option>
<option value="321763991294517580217895332412">CUSTAS-PEND - CUSTAS PENDENTES</option>
<option value="321763991294517580217895332413">CUSTAS-VENC - CUSTAS VENCIDAS</option>
<option value="321763991294517580217895332485">DECURSO DE PRAZO - DECURSO DE PRAZO</option>
<option value="321763991294517580217895332540">DEPÓSITO JUDICIAL - DEPÓSITO JUDICIAL</option>
<option value="321763991294517580217895332414">Desp/Dec Cumpridos - Desp/Dec Cumpridos AGG</option>
<option value="321763991294517580217895332381">DESPACHOS - DESPACHOS</option>
<option value="321763991294517580217895332535">DEVOLVIDOS OFICIAL DE JUSTIÇA - DEVOLVIDOS OFICIAL DE JUSTIÇA</option>
<option value="321763991294517580217895332521">DILAÇÃO DE PRAZO PF - PEDIDO DE DILAÇÃO DE PRAZO PF</option>
<option value="321763991294517580217895332370">DISTRIBUÍDOS - DISTRIBUÍDOS</option>
<option value="321763991294517580217895332390">DISTRIBUÍDOS-AI - DISTRIBUÍDOS - AGRAVO DE INSTRUMENTO</option>
<option value="321763991294517580217895332391">DISTRIBUÍDOS-HC - DISTRIBUÍDOS - HABEAS CORPUS</option>
<option value="321763997812353340348641295613">DISTRIBUÍDOS-MS - DISTRIBUÍDOS-MS</option>
<option value="321763991294517580217895332515">DRTS - Processos na DRTS</option>
<option value="321763991294517580217895332410">EM DIGITALIZACAO - EM DIGITALIZACAO</option>
<option value="321763991294517580217895332487">EMBDEC - EMBARGOS DE DECLARAÇÃO</option>
<option value="321763991294517580217895332488">EMBINFR - EMBARGOS INFRINGENTES</option>
<option value="321763991294517580217895332547">ERRO_ALTERA_DADO - ERRO_ALTERA_DADO</option>
<option value="321765899267464367877994576840">ERRO_ENVIO_DOMICILIO_ELETRONICO - ERRO_ENVIO_DOMICILIO_ELETRONICO</option>
<option value="321763991294517580217895332546">ERRO_ENVIO_INTIMACAO_DJEN - ERRO_ENVIO_INTIMACAO_DJEN</option>
<option value="321763991294517580217895332394">ERRO_INTIMA_AUTOMATI - ERRO_INTIMA_AUTOMATICO</option>
<option value="321763991294517580217895332407">FÓRUM HABILITADO - FÓRUM HABILITADO</option>
<option value="321763991294517580217895332522">IMPEDIMENTOS - IMPEDIMENTOS</option>
<option value="321763991294517580217895332393">INSPEÇÃO - INSPEÇÃO</option>
<option value="321763991294517580217895332529">LAUDO COMPLEMENTAR - LAUDO COMPLEMENTAR</option>
<option value="321763991294517580217895332528">LAUDO INCAPAZ PERM - LAUDO INCAPAZ PERM</option>
<option value="321763991294517580217895332526">LAUDO INCAPAZ PRET - LAUDO INCAPAZ PRET</option>
<option value="321763991294517580217895332525">LAUDO INCAPAZ REDUZ - LAUDO INCAPAZ REDUZ</option>
<option value="321763991294517580217895332527">LAUDO INCAPAZ TEMP - LAUDO INCAPAZ TEMP</option>
<option value="321763991294517580217895332492">MAND CUMPRIDO - MANDADO CUMPRIDO</option>
<option value="321763991294517580217895332534">MAND CUMPRIDO HORA CERTA - MANDADO CUMPRIDO HORA CERTA</option>
<option value="321763991294517580217895332493">MAND PARC CUMPRIDO - MANDADO PARCIALMENTE CUMPRIDO</option>
<option value="321763991294517580217895332500">MAND PRISÃO INFORMAÇÃO - MANDADO DE PRISÃO INFORMAÇÃO</option>
<option value="321763991294517580217895332494">MAND SEM CUMPRIMENTO - MANDADO SEM CUMPRIMENTO</option>
<option value="321763991294517580217895332429">MG DESPACHOS CUMPRIDOS - MIGRADOS Despachos/Decisões Cumpridos</option>
<option value="321763991294517580217895332422">MIG ADIADOS - MIGRADOS ADIADOS</option>
<option value="321763991294517580217895332416">MIG AG. CUMP - MIGRADOS CONTROLE - Ag. Cumprimento Desp./Dec. Int</option>
<option value="321763991294517580217895332417">MIG AG. CUMP. DILIGÊNCIAS - MIGRADOS CONTROLE - Ag Cumprimento de Diligência</option>
<option value="321763991294517580217895332424">MIG AGRAVOS REDIST. CCE - MIGRADOS Agravos Redistribuídos/CCE</option>
<option value="321763991294517580217895332423">MIG AI DISTRIBUÍDOS - MIGRADOS Agravos Distribuídos</option>
<option value="321763991294517580217895332425">MIG ALVARÁ - MIGRADOS Alvará - Análise/Assinatura</option>
<option value="321763991294517580217895332426">MIG Cessado Sobrestamento - MIGRADOS Cessado Sobrestamento</option>
<option value="321763991294517580217895332427">MIG conclusos - MIGRADOS Conclusos</option>
<option value="321763991294517580217895332428">MIG Conclusos Relator Designad - MIGRADOS Conclusos Relator Designado</option>
<option value="321763991294517580217895332430">MIG Distribuídos - MIGRADOS Distribuídos</option>
<option value="321763991294517580217895332431">MIG Incidentes Distribuídos - MIGRADOS Incidentes Distribuídos</option>
<option value="321763991294517580217895332432">MIG Julgados - MIGRADOS Julgados</option>
<option value="321763991294517580217895332433">MIG Julgados Declaração de Vot - MIGRADOS Julgados Declaração de Voto</option>
<option value="321763991294517580217895332434">MIG Julgados Relator Designado - MIGRADOS Julgados Relator Designado</option>
<option value="321763991294517580217895332448">MIG Julgados Votos a Declarar - MIGRADOS Julgados Votos a Declarar</option>
<option value="321763991294517580217895332438">MIG Pedido de Pauta c/ Pendênc - MIGRADOS Pedido de Pauta c/ Pendências</option>
<option value="321763991294517580217895332446">MIG Pedido Inclusão em Pauta - MIGRADOS Pedido Inclusão em Pauta</option>
<option value="321763991294517580217895332437">MIG Pedidos de Vista - MIGRADOS Pedidos de Vista</option>
<option value="321763991294517580217895332445">MIG Pet Juntadas p/ Análise - MIGRADOS Petições Juntadas para Análise</option>
<option value="321763991294517580217895332440">MIG Presidente do Órgão Julgad - MIGRADOS Presidente do Órgão Julgador</option>
<option value="321763991294517580217895332442">MIG Proc p/ Análise do SECRET - MIGRADOS Processos para Análise do Sec. Jurídico</option>
<option value="321763991294517580217895332451">MIG Proc. p/ Juízo de retrataç - MIGRADOS Proc. Receb. para Juízo de Retratação</option>
<option value="321763991294517580217895332443">MIG Processos p/ Análise do Of - MIGRADOS Processos para Análise do Of. Gabinete</option>
<option value="321763991294517580217895332439">MIG Processos p/ Análise julga - MIGRADOS Processos para Análise do Julgador</option>
<option value="321763991294517580217895332435">MIG Processos Pautados - MIGRADOS Processos Pautados</option>
<option value="321763991294517580217895332449">MIG Processos Pautados em Mesa - MIGRADOS Processos Pautados em Mesa</option>
<option value="321763991294517580217895332453">MIG Recebidos em Substituição - MIGRADOS Recebidos em Substituição</option>
<option value="321763991294517580217895332450">MIG Redist. CCE - Liminar Anal - MIGRADOS Redist. CCE - Liminar Analisada</option>
<option value="321763991294517580217895332436">MIG Relator Ag. Análise Petiçã - MIGRADOS Relator Ag. Análise Petição - Pós Julg.</option>
<option value="321763991294517580217895332441">MIG Retirados de Pauta - MIGRADOS Retirados de Pauta</option>
<option value="321763991294517580217895332447">MIG Revisor Pedido de Pauta - MIGRADOS Revisor Pedido de Pauta</option>
<option value="321763991294517580217895332444">MIG SOBRESTADOS - MIGRADOS SOBRESTADOS</option>
<option value="321763991294517580217895332452">MIG Sobrestados - Petições Jun - MIGRADOS Sobrestados - Petições Juntadas</option>
<option value="321763991294517580217895332419">MIG suspensos - MIGRADOS CONTROLE - Processos Suspensos</option>
<option value="321763991294517580217895332418">MIG VISTA MAIS DE 10 - MIGRADOS CONTROLE - Presidente - Vista mais de 10</option>
<option value="321763991294517580217895332420">MIG VISTA OUTRO DES. - MIGRADOS CONTROLE - Vista a outro Desembargador</option>
<option value="321763991294517580217895332421">MIG VISTA PGJ APÓS DISTRIBUIÇÃ - MIGRADOS CONTROLE - Vista à PGJ após a Distribuiçã</option>
<option value="321763991294517580217895332467">MIGRADOS - MIGRADOS</option>
<option value="321763991294517580217895332468">MIGRADOS_SANEAMENTO - MIGRADOS_SANEAMENTO</option>
<option value="321763991294517580217895332517">MP TRIAGEM - MP TRIAGEM</option>
<option value="321763991294517580217895332405">NÃO BAIXAR/REMETER - NÃO BAIXAR/REMETER</option>
<option value="321763991294517580217895332481">P REVISÃO - PARA REVISÃO</option>
<option value="321763991294517580217895332491">PARA ACÓRDÃO - PARA ACÓRDÃO</option>
<option value="321763991294517580217895332490">PARECER MP - PARECER MP</option>
<option value="321763991294517580217895332518">PEDIDO ARQ. MP - PEDIDO ARQUIVAMENTO MP</option>
<option value="321763991294517580217895332519">PEDIDO DECL. COMP. - PEDIDO DECLINAÇÃO COMPETÊNCIA</option>
<option value="321763991294517580217895332401">PEDIDO_DIA_RELATOR - PEDIDO DE DIA PELO RELATOR</option>
<option value="321763991294517580217895332374">PEDIDO_DIA_REVISOR - PEDIDO DE DIA PELO REVISOR</option>
<option value="321763991294517580217895332482">PETIÇÃO - PETIÇÃO</option>
<option value="321763991294517580217895332470">PETIÇÃO INI CAUTELAR - PETIÇÃO INICIAL CAUTELAR</option>
<option value="321763991294517580217895332469">PETIÇÃO INICIAL MS - PETIÇÃO INICIAL MS</option>
<option value="321763991294517580217895332372">PI - DEPENDÊNCIA - PI - DEPENDÊNCIA</option>
<option value="321763991294517580217895332479">PLANTÃO - PLANTÃO</option>
<option value="321763991294517580217895332511">PRECATÓRIO - PRECATÓRIO</option>
<option value="321763991294517580217895332512">PRECAT_OUTROS_ORÇAM - PRECATÓRIO - OUTROS ORÇAMENTOS</option>
<option value="321763991294517580217895332477">PREV-AJG requerida - PREV-AJG requerida</option>
<option value="321763991294517580217895332386">PREVIDENCIÁRIO - PREVIDENCIÁRIO</option>
<option value="321763991294517580217895332533">PROC ADV - PROCURAÇÃO ADV</option>
<option value="321763997812353340348644598781">PROCESSOS 2020 - PROCESSOS 2020</option>
<option value="321763997812353340348644599112">PROCESSOS 2021 - PROCESSOS 2021</option>
<option value="321763997812353340348644599452">PROCESSOS 2022 - PROCESSOS 2022</option>
<option value="321763997812353340348644599757">PROCESSOS 2023 - PROCESSOS 2023</option>
<option value="321763991294517580217895332411">PROCESSOS P/DISTRIBUIR - PROCESSOS P/DISTRIBUIR</option>
<option value="321763991294517580217895332398">PRONTOS - BAIXA ACÓR - PRONTOS - BAIXA ACÓRDÃO</option>
<option value="321763991294517580217895332399">PRONTOS - BAIXA DECI - PRONTOS - BAIXA DECISÃO</option>
<option value="321763991294517580217895332400">PRONTOS - REMESSA DRTS - PRONTOS - REMESSA DRTS</option>
<option value="321763991294517580217895332409">PRONTOS PARA DIGITAL - PRONTOS PARA DIGITALIZAR</option>
<option value="321763991294517580217895332523">PRONTOS_REM_COMARCA - PRONTOS REMESSA COMARCA ORIGEM</option>
<option value="321763991294517580217895332373">REATIVADOS - REATIVADOS</option>
<option value="321763991294517580217895332406">REC DELEGADA - RECEBIDOS-DELEGADA</option>
<option value="321763991294517580217895332480">RECEBIDOS - RECEBIDOS</option>
<option value="321763991294517580217895332516">Recebidos da DRTS - Recebidos da DRTS</option>
<option value="321763991294517580217895332484">RECEBIDOS-DIL./CONC. - RECEBIDOS-DILIG./CONCIL.</option>
<option value="321763991294517580217895332383">RECEBIDOS-RELATOR - RECEBIDOS RELATOR ACÓRDÃO</option>
<option value="321763991294517580217895332472">RECURSO EXTRAORDINÁR - RECURSO EXTRAORDINÁRIO</option>
<option value="321763991294517580217895332530">REDIST - Assento Reg. 18/2018 - REDIST - Assento Reg. 18/2018</option>
<option value="321763991294517580217895332541">REGISTRO DE ÓBITO - REGISTRO DE ÓBITO</option>
<option value="321763991294517580217895332392">REMETIDOS - REMETIDOS</option>
<option value="321763991294517580217895332483">REMETIDOS EM DILIGÊNCIA - REMETIDOS EM DILIGÊNCIA</option>
<option value="321763991294517580217895332382">REMETIDOS-RELATOR - REMETIDOS RELATOR ACÓRDÃO</option>
<option value="321763991294517580217895332461">REQ - PAGA - BLOQUEADA - REQ - PAGA - BLOQUEADA</option>
<option value="321763991294517580217895332462">REQ - PAGA - LIBERADA - REQ - PAGA - LIBERADA</option>
<option value="321763991294517580217895332538">REQ - SUPERPREFERENCIAL - PAGA - BLOQUEADA - REQ - SUPERPREFERENCIAL - PAGA - BLOQUEADA</option>
<option value="321763991294517580217895332539">REQ - SUPERPREFERENCIAL - PAGA - LIBERADA - REQ - SUPERPREFERENCIAL - PAGA - LIBERADA</option>
<option value="321763991294517580217895332537">REQ - SUPERPREFERENCIAL - PROCESSADA - REQ - SUPERPREFERENCIAL - PROCESSADA</option>
<option value="321763991294517580217895332510">REQ_PAGAMENTO - REQUISIÇÕES DE PAGAMENTO</option>
<option value="321763991294517580217895332379">RESTRITO AO JUIZ - RESTRITO AO JUIZ</option>
<option value="321763991294517580217895332513">RPV - REQUISIÇÃO DE PEQUENO VALOR</option>
<option value="321763991294517580217895332514">RPV-JEF - REQUISIÇÃO DE PEQUENO VALOR - JEF</option>
<option value="321763991294517580217895332509">S/CONCILIAÇÃO - SEM CONCILIAÇÃO</option>
<option value="321763991294517580217895332524">SOBRESTADOS - SOBRESTADOS</option>
<option value="321763991294517580217895332548">SPC-INSERÇÃO - SPC-INSERÇÃO</option>
<option value="321763991294517580217895332549">SPC-RETIRADA - SPC-RETIRADA</option>
<option value="321763991294517580217895332536">STF-DIST - STF-Distribuídos</option>
<option value="321763991294517580217895332389">STF-RECEBIDOS - STF-RECEBIDOS</option>
<option value="321763991294517580217895332380">STF-REM - STF REMETIDOS</option>
<option value="321763991294517580217895332388">STJ-RECEBIDOS - STJ-RECEBIDOS</option>
<option value="321763991294517580217895332377">STJ-REM - STJ REMETIDOS</option>
<option value="321763991294517580217895332506">SUSPENSOS - PROCESSOS SUSPENSOS</option>
<option value="321763991294517580217895332507">SUSPENSOS-RETORNO - RETORNADOS DE SUSPENSÃO</option>
<option value="321763991294517580217895332504">TJSC-BAIXADOS Se/Cesp - TJSC-BAIXADOS Se/Cesp</option>
<option value="321763991294517580217895332503">TJSC-DECISÃO Se/Cesp - TJSC-DECISÃO Se/Cesp</option>
<option value="321763991294517580217895332502">TJSC-JULGADOS Se/CEsp - TJSC-JULGADOS Se/CEsp</option>
<option value="321763991294517580217895332476">TRIB-AJG requerida - TRIB-AJG requerida</option>
<option value="321763991294517580217895332384">TRIBUTÁRIO - TRIBUTÁRIO</option>
<option value="321763991294517580217895332471">UNIFORMIZAÇÃO DE JUR - UNIFORMIZAÇÃO JURISPRUDÊNCIA</option>
<option value="321763991294517580217895332478">URGENTE - URGENTE</option>
<option value="321763991294517580217895332376">VERIFICAR - VERIFICAR LOCALIZADOR</option>
<option value="321763991294517580217895332542">VERIFICAR ASSUNTO - VERIFICAR ASSUNTO</option>
<option value="321763991294517580217895332543">VERIFICAR PARTES - VERIFICAR PARTES</option>
<option value="321763991294517580217895332378">VERIFICAR PROCURADOR - VERIFICAR PROCURADOR/ENTIDADE</option>
<option value="321763991294517580217895332387">VISTA ADV PROCESSO - VISTA ADV PROCESSO</option>
<option value="321763997812353340348644590932">[+ 120] - [+ 120]</option>
<option value="321767275328932661495335051946">[+ 200] - [+ 200]</option>
<option value="321766282868765581048539974201">[+ 365] - [+ 365]</option>
<option value="321763997812353340348644591539">[META 10] - [META 10]</option>
<option value="321763997812353340348644591133">[META 2] - [META 2]</option>
<option value="321763997812353340348644591354">[META 6] - [META 6]</option>
<option value="321763997812353340348644613884">[] Alexandre - [AMR] Alexandre</option>
<option value="321763997812353340348644614214">[] AMR - [AMR] AMR</option>
<option value="321767630362011201730334725995">[] AMR - Fazendo - AMR - Fazendo</option>
<option value="321767630362011201739774582650">[] AMR - VIDE - AMR - VIDE</option>
<option value="321763997812353340348644614555">[] Andreia - [AMR] Andreia</option>
<option value="321763997812353340348644614869">[] Andrezza - [AMR] Andrezza</option>
<option value="321763997812353340348649963626">[] Bianca - [AMR] Bianca</option>
<option value="321763997812353340348644615522">[] Bruna - [AMR] Bruna</option>
<option value="321763997812353340348644615817">[] Camila - [AMR] Camila</option>
<option value="321763997812353340348644616110">[] Clarice - [AMR] Clarice</option>
<option value="321763997812353340348644616429">[] Cláudia - [AMR] Cláudia</option>
<option value="321763997812353340348644616719">[] Condá - [AMR] Condá</option>
<option value="321763997812353340348644617378">[] Erick - [AMR] Erick</option>
<option value="321763997812353340348644618750">[] Gabriella - [AMR] Gabriella</option>
<option value="321763997812353340348644615213">[] Lucas - [AMR] Lucas</option>
<option value="321763997812353340348644617068">[] Luiza - [AMR] Luiza</option>
<option value="321763997812353340348644619530">[] Matheus - [AMR] Matheus</option>
<option value="321763997812353340348644619882">[] Salésio - [AMR] Salésio</option>
<option value="321763997812353340348644617706">[] Susane - [AMR] Susane</option>
<option value="321763997812353340348644619131">[] Thalita - [AMR] Thalita</option>
<option value="321763997812353340348644618097">[] Vitória - [AMR] Vitória</option>
<option value="321763997812353340348644618444">[] Yunes - [AMR] Yunes</option>
<option value="321763997812353340348703167905">¹Alexandre assinado - ¹Alexandre assinado</option>
<option value="321763997812353340348703168805">¹Andrezza assinado - ¹Andrezza assinado</option>
<option value="321763997812353340348649939781">¹Bianca assinado - ¹Bianca assinado</option>
<option value="321763997812353340348703177030">¹Camila assinado - ¹Camila assinado</option>
<option value="321763997812353340348703166919">¹Cláudia assinado - ¹Cláudia assinado</option>
<option value="321763997812353340348703169658">¹Condá assinado - ¹Condá assinado</option>
<option value="321763997812353340348703176250">¹Erick assinado - ¹Erick assinado</option>
<option value="321763997812353340348703170550">¹Gabriella assinado - ¹Gabriella assinado</option>
<option value="321763997812353340348703175515">¹Lucas assinado - ¹Lucas assinado</option>
<option value="321763997812353340348703174749">¹Matheus assinado - ¹Matheus assinado</option>
<option value="321763997812353340348703171536">¹Salésio assinado - ¹Salésio assinado</option>
<option value="321763997812353340348703172341">¹Susane assinado - ¹Susane assinado</option>
<option value="321763997812353340348703173168">¹Vitória assinado - ¹Vitória assinado</option>
<option value="321763997812353340348703173975">¹Yunes assinado - ¹Yunes assinado</option>
                </select><button type="button" tabindex="-1" class="dropdown-toggle form-control form-control-sm" data-toggle="dropdown" role="combobox" aria-owns="bs-select-3" aria-haspopup="listbox" aria-expanded="false" data-id="selLocalizador" title="4. pautados - 4. pautados"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">4. pautados - 4. pautados</div></div> </div></button><div class="dropdown-menu " style="max-height: 949.766px; overflow: hidden; min-height: 188px;"><div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off" role="combobox" aria-label="Search" aria-controls="bs-select-3" aria-autocomplete="list"></div><div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-light">Selecionar Todos</button><button type="button" class="actions-btn bs-deselect-all btn btn-light">Desmarcar Todos</button></div></div><div class="inner show" role="listbox" id="bs-select-3" tabindex="-1" aria-multiselectable="true" style="max-height: 850.766px; overflow-y: auto; min-height: 89px;"><ul class="dropdown-menu inner show" role="presentation" style="margin-top: 0px; margin-bottom: 0px;"><li><a role="option" class="dropdown-item" id="bs-select-3-0" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">❗ERRO NA AUTOMAÇÃO ❗ - [AMR] Erro Automação</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-1" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">⇆ Triagem ⇆ - [AMR] Triagem</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-2" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">⚠️[RETIRAR DE PAUTA]⚠️ - ⚠️[RETIRAR DE PAUTA]⚠️</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-3" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">* adm./justiça/econ./fé púb./trib./orcrim/resp. * - * adm./justiça/econ./fé púb./trib./orcrim/resp. *</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-4" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">* amb./cons./ECA/honra/paz/preconceito * - * amb./cons./ECA/honra/paz/preconceito *</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-5" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">* armas/trânsito/outros * - * armas/trânsito/outros *</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-6" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">* dign. sexual * - * dign. sexual *</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-7" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">* exec. penal * - * exec. penal *</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-8" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">* habeas corpus * - * habeas corpus *</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-9" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">* mandado de segurança * - * mandado de segurança *</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-10" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">* originária/sigilo * - * originária/sigilo *</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-11" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">* patrimônio * - * patrimônio *</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-12" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">* rese * - * rese *</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-13" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">* tráfico * - * tráfico *</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-14" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">* vida/liberdade/pessoa * - * vida/liberdade/pessoa *</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-15" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">* viol. doméstica * - * viol. doméstica *</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-16" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">0. ag. cumprimento desp/dec - 0. ag. cumprimento desp/dec</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-17" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">0. ag. trânsito - 0. ag. trânsito</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-18" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">0. DCDP - Ag. Redistribuição - 0. DCDP - Ag. Redistribuição</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-19" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">0. DCDP - Ag. Revisão - 0. DCDP - Ag. Revisão</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-20" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">0. inf. óbito - [AMR] Informação de Óbito</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-21" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">1. Ação Rescisória - [AMR] Ação Rescisória</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-22" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">1. Admissibilidade - [AMR] Admissibilidade</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-23" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">1. Agravo de Instrumento - [AMR] Agravo de Instrumento</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-24" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">1. Agravo Interno - [AMR] Agravo Interno</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-25" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">1. Analisar Gratuidade - [AMR] Analisar Gratuidade</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-26" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">1. Conflito de Jurisdição - [AMR] Conflito de Jurisdição</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-27" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">1. Cooperadores - [AMR] Cooperadores</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-28" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">1. Devolvidos 2ª Vice - [AMR] Devolvidos 2ª Vice</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-29" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">1. Embargos de Declaração - [AMR] Embargos de Declaração</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-30" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">1. Homologação Acordo/Desistência - [AMR] Homologação de Acordo/Desistência</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-31" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">1. Incompetência - [AMR] Incompetência</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-32" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">1. Inicial - Agravo de Instrumento - [AMR] Inicial - Agravo de Instrumento</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-33" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">1. Julg. Monocrático - [AMR] Julgamento Monocrático</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-34" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">1. Não Conhecimento - [AMR] Não Conhecimento</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-35" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">1. Recebidos MP - [AMR] Recebidos MP</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-36" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">1. Retorno despacho/decisão - [AMR] Retorno despacho/decisão</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-37" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">1. Urgente 🔴 - 1. Urgente</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-38" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">2. acórdãos - ag. conferência - 2. acórdãos - ag. conferência</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-39" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">2. acórdãos - conferidos - 2. acórdãos - conferidos</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-40" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">2. devolvido para correção - 2. devolvido para correção</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-41" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">2. monocráticas - ag. assinatura - 2. monocráticas - ag. assinatura</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-42" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">2. monocráticas - ag. conferência - 2. monocráticas - ag. conferência</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-43" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">3. pautar - 3. pautar</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-44" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">4. acórdãos - assinatura pós-sessão - 4. acórdãos - assinatura pós-sessão</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-45" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">4. adiados - 4. adiados</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-46" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">4. para voto divergente - 4. para voto divergente</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-47" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">4. para voto-vista - 4. para voto-vista</span></a></li><li class="selected"><a role="option" class="dropdown-item selected" id="bs-select-3-48" tabindex="0" aria-selected="true"><span class=" bs-ok-default check-mark"></span><span class="text">4. pautados - 4. pautados</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-49" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">4. pedido de vista - 4. pedido de vista</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-50" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">4. relator p/ acórdão - 4. relator p/ acórdão</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-51" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">4. retirados de pauta - 4. retirados de pauta</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-52" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">&lt;&gt; Baixar em Diligência &lt;&gt; - [AMR] Baixar em Diligência</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-53" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">&lt;&gt; Contrarrazões &lt;&gt; - [AMR] Contrarrazões</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-54" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">&lt;&gt; Dativo - Nomear &lt;&gt; - [AMR] Dativo - Nomear</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-55" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">&lt;&gt; PGJ &lt;&gt; - [AMR] PGJ</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-56" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">&lt;&gt; Razões - constituir novo defensor &lt;&gt; - [AMR] Razões - constituir novo defensor</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-57" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">&lt;&gt; Razões &lt;&gt; - [AMR] Razões</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-58" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">&lt;&gt; Secretaria &lt;&gt; - [AMR] Secretaria</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-59" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">&lt;tt&gt;&lt;b&gt;[RÉU PRESO]&lt;/b&gt;&lt;/tt&gt; - &lt;tt&gt;&lt;b&gt;[RÉU PRESO]&lt;/b&gt;&lt;/tt&gt;</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-60" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">ACÓRDÃOS - ACÓRDÃOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-61" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">ADM-AJG requerida - ADM-AJG requerida</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-62" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">ADM-Deserção - ADM-Deserção</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-63" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">ADM-Tempestividade - ADM-Tempestividade</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-64" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">ADMINISTRATIVO - ADMINISTRATIVO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-65" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">AG. DIGITALIZAÇÃO - AGUARDA DIGITALIZAÇÃO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-66" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">AGRAVO - AGRAVO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-67" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">ALV SOLT CUMPRIDO - ALVARÁ DE SOLTURA CUMPRIDO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-68" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">ALV SOLT CUMPRIDO EM TERMOS - ALVARÁ DE SOLTURA CUMPRIDO EM TERMOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-69" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">ALV SOLT DEVOLVIDO - ALVARÁ DE SOLTURA DEVOLVIDO SEM CUMPRIMENTO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-70" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">ALV SOLT INFORMAÇÃO - ALVARÁ DE SOLTURA INFORMAÇÃO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-71" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">ALV SOLT LIDO - ALVARÁ DE SOLTURA LIDO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-72" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">AMR - Ato Infracional - Ato Infracional</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-73" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">AMR - Correição Parcial - Correição Parcial</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-74" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">AMR PAUTAR - AMR PAUTAR</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-75" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">APRECIACAO_JUDIC - APRECIAÇÃO JUDICIAL</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-76" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">AR ENTREGUE - CARTA AR ENTREGUE</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-77" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">AR NÃO ENTREGUE - CARTA AR NÃO ENTREGUE</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-78" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">AUTUADOS - AUTUADOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-79" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">AUTUADOS-AI - AUTUADOS-AI</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-80" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">AUTUADOS-HC - AUTUADOS-HC</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-81" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">AUTUADOS-MS - AUTUADOS-MS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-82" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">BAIXADOS - BAIXADOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-83" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">BAIXADOS-GAB - BAIXADOS-GAB</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-84" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">BENS A CADASTRAR - BENS A CADASTRAR</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-85" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">BNMP REC - BNMP RECEBIDOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-86" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">BNMP RGL - REGULARIZAR BNMP</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-87" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">CAMP - ÓBITOS - NEGATIVO - CAMP - ÓBITOS - NEGATIVO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-88" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">CAMP - ÓBITOS - PESQUISAR - CAMP - ÓBITOS - PESQUISAR</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-89" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">CAMP - ÓBITOS - POSITIVO - CAMP - ÓBITOS - POSITIVO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-90" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">CAMP - PESQUISAR ENDEREÇOS - CAMP - PESQUISAR ENDEREÇOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-91" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">CANCELAMENTO - VERIFICAR CANCELAMENTO EVENTO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-92" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">CARTA AR ENVIADA - CARTA AR ENVIADA</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-93" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">CARTA AR PAGAMENTO CONFIRMADO - CARTA AR PAGAMENTO CONFIRMADO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-94" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">CARTA AR PAGAMENTO NÃO REALIZADO - CARTA AR PAGAMENTO NÃO REALIZADO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-95" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">CARTAS Pr Or Rog - CARTAS Pr Or Rog</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-96" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">Cessado Sobrestamento - Cessado Sobrestamento</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-97" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">CI NÃO PAGAS - CUSTAS INICIAIS NÃO PAGAS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-98" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">CI PEND - CUSTAS INICIAIS PEND</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-99" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">CONCILIAÇÃO - CONCILIAÇÃO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-100" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">CONCILIACAO_COM_ACOR - CONCILIACAO_COM_ACORDO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-101" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">CONCILIACAO_INICIADA - CONCILIACAO INICIADA</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-102" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">CONCILIACAO_SEM_ACOR - CONCILIACAO_SEM_ACORDO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-103" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">CONTADORIA - CONTADORIA</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-104" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">CR NÃO PAGAS - CUSTAS RECURSAIS NÃO PAGAS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-105" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">CR PEND - CUSTAS RECURSAIS PEN</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-106" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">CUSTAS-PEND - CUSTAS PENDENTES</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-107" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">CUSTAS-VENC - CUSTAS VENCIDAS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-108" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">DECURSO DE PRAZO - DECURSO DE PRAZO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-109" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">DEPÓSITO JUDICIAL - DEPÓSITO JUDICIAL</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-110" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">Desp/Dec Cumpridos - Desp/Dec Cumpridos AGG</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-111" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">DESPACHOS - DESPACHOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-112" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">DEVOLVIDOS OFICIAL DE JUSTIÇA - DEVOLVIDOS OFICIAL DE JUSTIÇA</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-113" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">DILAÇÃO DE PRAZO PF - PEDIDO DE DILAÇÃO DE PRAZO PF</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-114" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">DISTRIBUÍDOS - DISTRIBUÍDOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-115" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">DISTRIBUÍDOS-AI - DISTRIBUÍDOS - AGRAVO DE INSTRUMENTO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-116" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">DISTRIBUÍDOS-HC - DISTRIBUÍDOS - HABEAS CORPUS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-117" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">DISTRIBUÍDOS-MS - DISTRIBUÍDOS-MS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-118" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">DRTS - Processos na DRTS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-119" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">EM DIGITALIZACAO - EM DIGITALIZACAO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-120" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">EMBDEC - EMBARGOS DE DECLARAÇÃO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-121" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">EMBINFR - EMBARGOS INFRINGENTES</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-122" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">ERRO_ALTERA_DADO - ERRO_ALTERA_DADO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-123" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">ERRO_ENVIO_DOMICILIO_ELETRONICO - ERRO_ENVIO_DOMICILIO_ELETRONICO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-124" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">ERRO_ENVIO_INTIMACAO_DJEN - ERRO_ENVIO_INTIMACAO_DJEN</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-125" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">ERRO_INTIMA_AUTOMATI - ERRO_INTIMA_AUTOMATICO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-126" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">FÓRUM HABILITADO - FÓRUM HABILITADO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-127" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">IMPEDIMENTOS - IMPEDIMENTOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-128" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">INSPEÇÃO - INSPEÇÃO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-129" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">LAUDO COMPLEMENTAR - LAUDO COMPLEMENTAR</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-130" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">LAUDO INCAPAZ PERM - LAUDO INCAPAZ PERM</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-131" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">LAUDO INCAPAZ PRET - LAUDO INCAPAZ PRET</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-132" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">LAUDO INCAPAZ REDUZ - LAUDO INCAPAZ REDUZ</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-133" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">LAUDO INCAPAZ TEMP - LAUDO INCAPAZ TEMP</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-134" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MAND CUMPRIDO - MANDADO CUMPRIDO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-135" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MAND CUMPRIDO HORA CERTA - MANDADO CUMPRIDO HORA CERTA</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-136" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MAND PARC CUMPRIDO - MANDADO PARCIALMENTE CUMPRIDO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-137" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MAND PRISÃO INFORMAÇÃO - MANDADO DE PRISÃO INFORMAÇÃO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-138" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MAND SEM CUMPRIMENTO - MANDADO SEM CUMPRIMENTO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-139" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MG DESPACHOS CUMPRIDOS - MIGRADOS Despachos/Decisões Cumpridos</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-140" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG ADIADOS - MIGRADOS ADIADOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-141" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG AG. CUMP - MIGRADOS CONTROLE - Ag. Cumprimento Desp./Dec. Int</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-142" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG AG. CUMP. DILIGÊNCIAS - MIGRADOS CONTROLE - Ag Cumprimento de Diligência</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-143" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG AGRAVOS REDIST. CCE - MIGRADOS Agravos Redistribuídos/CCE</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-144" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG AI DISTRIBUÍDOS - MIGRADOS Agravos Distribuídos</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-145" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG ALVARÁ - MIGRADOS Alvará - Análise/Assinatura</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-146" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Cessado Sobrestamento - MIGRADOS Cessado Sobrestamento</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-147" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG conclusos - MIGRADOS Conclusos</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-148" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Conclusos Relator Designad - MIGRADOS Conclusos Relator Designado</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-149" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Distribuídos - MIGRADOS Distribuídos</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-150" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Incidentes Distribuídos - MIGRADOS Incidentes Distribuídos</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-151" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Julgados - MIGRADOS Julgados</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-152" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Julgados Declaração de Vot - MIGRADOS Julgados Declaração de Voto</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-153" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Julgados Relator Designado - MIGRADOS Julgados Relator Designado</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-154" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Julgados Votos a Declarar - MIGRADOS Julgados Votos a Declarar</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-155" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Pedido de Pauta c/ Pendênc - MIGRADOS Pedido de Pauta c/ Pendências</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-156" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Pedido Inclusão em Pauta - MIGRADOS Pedido Inclusão em Pauta</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-157" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Pedidos de Vista - MIGRADOS Pedidos de Vista</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-158" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Pet Juntadas p/ Análise - MIGRADOS Petições Juntadas para Análise</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-159" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Presidente do Órgão Julgad - MIGRADOS Presidente do Órgão Julgador</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-160" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Proc p/ Análise do SECRET - MIGRADOS Processos para Análise do Sec. Jurídico</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-161" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Proc. p/ Juízo de retrataç - MIGRADOS Proc. Receb. para Juízo de Retratação</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-162" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Processos p/ Análise do Of - MIGRADOS Processos para Análise do Of. Gabinete</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-163" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Processos p/ Análise julga - MIGRADOS Processos para Análise do Julgador</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-164" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Processos Pautados - MIGRADOS Processos Pautados</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-165" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Processos Pautados em Mesa - MIGRADOS Processos Pautados em Mesa</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-166" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Recebidos em Substituição - MIGRADOS Recebidos em Substituição</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-167" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Redist. CCE - Liminar Anal - MIGRADOS Redist. CCE - Liminar Analisada</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-168" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Relator Ag. Análise Petiçã - MIGRADOS Relator Ag. Análise Petição - Pós Julg.</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-169" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Retirados de Pauta - MIGRADOS Retirados de Pauta</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-170" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Revisor Pedido de Pauta - MIGRADOS Revisor Pedido de Pauta</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-171" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG SOBRESTADOS - MIGRADOS SOBRESTADOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-172" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG Sobrestados - Petições Jun - MIGRADOS Sobrestados - Petições Juntadas</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-173" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG suspensos - MIGRADOS CONTROLE - Processos Suspensos</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-174" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG VISTA MAIS DE 10 - MIGRADOS CONTROLE - Presidente - Vista mais de 10</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-175" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG VISTA OUTRO DES. - MIGRADOS CONTROLE - Vista a outro Desembargador</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-176" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIG VISTA PGJ APÓS DISTRIBUIÇÃ - MIGRADOS CONTROLE - Vista à PGJ após a Distribuiçã</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-177" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIGRADOS - MIGRADOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-178" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MIGRADOS_SANEAMENTO - MIGRADOS_SANEAMENTO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-179" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">MP TRIAGEM - MP TRIAGEM</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-180" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">NÃO BAIXAR/REMETER - NÃO BAIXAR/REMETER</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-181" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">P REVISÃO - PARA REVISÃO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-182" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PARA ACÓRDÃO - PARA ACÓRDÃO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-183" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PARECER MP - PARECER MP</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-184" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PEDIDO ARQ. MP - PEDIDO ARQUIVAMENTO MP</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-185" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PEDIDO DECL. COMP. - PEDIDO DECLINAÇÃO COMPETÊNCIA</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-186" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PEDIDO_DIA_RELATOR - PEDIDO DE DIA PELO RELATOR</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-187" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PEDIDO_DIA_REVISOR - PEDIDO DE DIA PELO REVISOR</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-188" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PETIÇÃO - PETIÇÃO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-189" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PETIÇÃO INI CAUTELAR - PETIÇÃO INICIAL CAUTELAR</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-190" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PETIÇÃO INICIAL MS - PETIÇÃO INICIAL MS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-191" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PI - DEPENDÊNCIA - PI - DEPENDÊNCIA</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-192" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PLANTÃO - PLANTÃO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-193" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PRECATÓRIO - PRECATÓRIO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-194" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PRECAT_OUTROS_ORÇAM - PRECATÓRIO - OUTROS ORÇAMENTOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-195" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PREV-AJG requerida - PREV-AJG requerida</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-196" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PREVIDENCIÁRIO - PREVIDENCIÁRIO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-197" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PROC ADV - PROCURAÇÃO ADV</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-198" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PROCESSOS 2020 - PROCESSOS 2020</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-199" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PROCESSOS 2021 - PROCESSOS 2021</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-200" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PROCESSOS 2022 - PROCESSOS 2022</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-201" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PROCESSOS 2023 - PROCESSOS 2023</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-202" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PROCESSOS P/DISTRIBUIR - PROCESSOS P/DISTRIBUIR</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-203" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PRONTOS - BAIXA ACÓR - PRONTOS - BAIXA ACÓRDÃO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-204" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PRONTOS - BAIXA DECI - PRONTOS - BAIXA DECISÃO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-205" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PRONTOS - REMESSA DRTS - PRONTOS - REMESSA DRTS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-206" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PRONTOS PARA DIGITAL - PRONTOS PARA DIGITALIZAR</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-207" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">PRONTOS_REM_COMARCA - PRONTOS REMESSA COMARCA ORIGEM</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-208" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">REATIVADOS - REATIVADOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-209" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">REC DELEGADA - RECEBIDOS-DELEGADA</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-210" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">RECEBIDOS - RECEBIDOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-211" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">Recebidos da DRTS - Recebidos da DRTS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-212" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">RECEBIDOS-DIL./CONC. - RECEBIDOS-DILIG./CONCIL.</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-213" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">RECEBIDOS-RELATOR - RECEBIDOS RELATOR ACÓRDÃO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-214" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">RECURSO EXTRAORDINÁR - RECURSO EXTRAORDINÁRIO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-215" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">REDIST - Assento Reg. 18/2018 - REDIST - Assento Reg. 18/2018</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-216" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">REGISTRO DE ÓBITO - REGISTRO DE ÓBITO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-217" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">REMETIDOS - REMETIDOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-218" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">REMETIDOS EM DILIGÊNCIA - REMETIDOS EM DILIGÊNCIA</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-219" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">REMETIDOS-RELATOR - REMETIDOS RELATOR ACÓRDÃO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-220" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">REQ - PAGA - BLOQUEADA - REQ - PAGA - BLOQUEADA</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-221" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">REQ - PAGA - LIBERADA - REQ - PAGA - LIBERADA</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-222" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">REQ - SUPERPREFERENCIAL - PAGA - BLOQUEADA - REQ - SUPERPREFERENCIAL - PAGA - BLOQUEADA</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-223" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">REQ - SUPERPREFERENCIAL - PAGA - LIBERADA - REQ - SUPERPREFERENCIAL - PAGA - LIBERADA</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-224" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">REQ - SUPERPREFERENCIAL - PROCESSADA - REQ - SUPERPREFERENCIAL - PROCESSADA</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-225" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">REQ_PAGAMENTO - REQUISIÇÕES DE PAGAMENTO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-226" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">RESTRITO AO JUIZ - RESTRITO AO JUIZ</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-227" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">RPV - REQUISIÇÃO DE PEQUENO VALOR</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-228" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">RPV-JEF - REQUISIÇÃO DE PEQUENO VALOR - JEF</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-229" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">S/CONCILIAÇÃO - SEM CONCILIAÇÃO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-230" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">SOBRESTADOS - SOBRESTADOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-231" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">SPC-INSERÇÃO - SPC-INSERÇÃO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-232" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">SPC-RETIRADA - SPC-RETIRADA</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-233" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">STF-DIST - STF-Distribuídos</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-234" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">STF-RECEBIDOS - STF-RECEBIDOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-235" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">STF-REM - STF REMETIDOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-236" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">STJ-RECEBIDOS - STJ-RECEBIDOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-237" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">STJ-REM - STJ REMETIDOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-238" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">SUSPENSOS - PROCESSOS SUSPENSOS</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-239" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">SUSPENSOS-RETORNO - RETORNADOS DE SUSPENSÃO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-240" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">TJSC-BAIXADOS Se/Cesp - TJSC-BAIXADOS Se/Cesp</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-241" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">TJSC-DECISÃO Se/Cesp - TJSC-DECISÃO Se/Cesp</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-242" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">TJSC-JULGADOS Se/CEsp - TJSC-JULGADOS Se/CEsp</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-243" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">TRIB-AJG requerida - TRIB-AJG requerida</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-244" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">TRIBUTÁRIO - TRIBUTÁRIO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-245" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">UNIFORMIZAÇÃO DE JUR - UNIFORMIZAÇÃO JURISPRUDÊNCIA</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-246" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">URGENTE - URGENTE</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-247" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">VERIFICAR - VERIFICAR LOCALIZADOR</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-248" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">VERIFICAR ASSUNTO - VERIFICAR ASSUNTO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-249" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">VERIFICAR PARTES - VERIFICAR PARTES</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-250" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">VERIFICAR PROCURADOR - VERIFICAR PROCURADOR/ENTIDADE</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-251" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">VISTA ADV PROCESSO - VISTA ADV PROCESSO</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-252" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[+ 120] - [+ 120]</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-253" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[+ 200] - [+ 200]</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-254" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[+ 365] - [+ 365]</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-255" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[META 10] - [META 10]</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-256" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[META 2] - [META 2]</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-257" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[META 6] - [META 6]</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-258" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] Alexandre - [AMR] Alexandre</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-259" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] AMR - [AMR] AMR</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-260" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] AMR - Fazendo - AMR - Fazendo</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-261" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] AMR - VIDE - AMR - VIDE</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-262" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] Andreia - [AMR] Andreia</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-263" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] Andrezza - [AMR] Andrezza</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-264" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] Bianca - [AMR] Bianca</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-265" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] Bruna - [AMR] Bruna</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-266" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] Camila - [AMR] Camila</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-267" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] Clarice - [AMR] Clarice</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-268" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] Cláudia - [AMR] Cláudia</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-269" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] Condá - [AMR] Condá</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-270" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] Erick - [AMR] Erick</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-271" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] Gabriella - [AMR] Gabriella</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-272" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] Lucas - [AMR] Lucas</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-273" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] Luiza - [AMR] Luiza</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-274" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] Matheus - [AMR] Matheus</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-275" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] Salésio - [AMR] Salésio</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-276" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] Susane - [AMR] Susane</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-277" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] Thalita - [AMR] Thalita</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-278" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] Vitória - [AMR] Vitória</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-279" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">[] Yunes - [AMR] Yunes</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-280" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">¹Alexandre assinado - ¹Alexandre assinado</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-281" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">¹Andrezza assinado - ¹Andrezza assinado</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-282" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">¹Bianca assinado - ¹Bianca assinado</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-283" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">¹Camila assinado - ¹Camila assinado</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-284" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">¹Cláudia assinado - ¹Cláudia assinado</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-285" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">¹Condá assinado - ¹Condá assinado</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-286" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">¹Erick assinado - ¹Erick assinado</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-287" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">¹Gabriella assinado - ¹Gabriella assinado</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-288" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">¹Lucas assinado - ¹Lucas assinado</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-289" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">¹Matheus assinado - ¹Matheus assinado</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-290" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">¹Salésio assinado - ¹Salésio assinado</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-291" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">¹Susane assinado - ¹Susane assinado</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-292" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">¹Vitória assinado - ¹Vitória assinado</span></a></li><li><a role="option" class="dropdown-item" id="bs-select-3-293" tabindex="0" aria-selected="false"><span class=" bs-ok-default check-mark"></span><span class="text">¹Yunes assinado - ¹Yunes assinado</span></a></li></ul></div></div></div>
            </div>
            <input type="hidden" name="selLocalizadoresSelecionados" id="selLocalizadoresSelecionados" value="321763997812353340348649938050">
            <div class="col-auto m-0 p-0 mt-4 align-items-center">
                <label id="lblOperadorE" for="operadorE" class="infraLabelOpcional">E</label>
                <input type="radio" name="operador" id="operadorE" value="e" class="infraRadio">
                <label id="lblOperadorOu" for="operadorOu" class="infraLabelOpcional">OU</label>
                <input type="radio" name="operador" id="operadorOu" value="ou" checked="checked" class="infraRadio">
            </div>
            <div class="col-5">
                <label id="lblOrgaoJuizo" for="selIdOrgaoJuizo" accesskey="j" class="infraLabelOpcional"><span class="infraTeclaAtalho">J</span>uízo:</label>
                <select id="selIdOrgaoJuizo" name="selIdOrgaoJuizo" class="infraSelect"><option value="null"></option>
<option value="202906">Gab. 02 - 6ª Câmara Criminal</option>
</select>
            </div>
        </div>

        <div class="row">
            <div class="col col-sm-auto">
                <label id="lblLocalizadorTipo" for="selLocalizadorTipo" accesskey="F" class="infraLabelOpcional"><span class="infraTeclaAtalho">F</span>iltrar por:</label><select id="selLocalizadorTipo" style="max-width: 240px" name="selLocalizadorTipo" class="infraSelect" onchange="filtrarLocalizador();"><option value="null"></option>

<option value="P">Localizadores Principais</option>
<option value="S">Localizadores Secundários</option>
</select>            </div>
            <div class="col col-sm-auto">
                <label id="lblRitoProcesso" for="selIdRitoProcesso" accesskey="j" class="infraLabelOpcional"><span class="infraTeclaAtalho">R</span>ito do Processo:</label>
                <select id="selIdRitoProcesso" style="max-width: 240px" name="selIdRitoProcesso" class="infraSelect"><option value="null"></option>
<option value="2">RITO ORDINÁRIO (COMUM)</option>
</select>
            </div>

                    </div>
        <input type="hidden" id="hdnSubAcao" name="hdnSubAcao" value="">
        <input type="hidden" id="hdnAcaoOrigem" name="hdnAcaoOrigem" value="">
            <style type="text/css">


        .infra-styles .fldAlterarLocalizadoresIntimacao {
            border: 1px solid #DDDDDD;
            left: 0;
            width: 99% !important;
            margin-top: 5px !important;
            position: relative;
            padding: 0;
            margin-left: auto;
            margin-right: auto;
        }


        .infra-styles #tbInfoProcesso {
            width: 99%;
        }


        .infra-styles #fldAlterarLocalizadores {
            border: 1px solid #DDDDDD;
            left: 0;
            width: 98%;
            margin-top: 25px;
            position: relative;
            padding: 0;
            margin-left: auto;
            margin-right: auto;
        }


        .infra-styles #conteudoAlterarLocalizadores {
            height: 185px;
            position: relative;
            width: 100%;
        }

        .infra-styles #lblLocalizadoresAtuais {
            font-weight: bold;
            position: absolute;
            left: 2%;
            top: 20px;
        }

        .infra-styles #selLocalizadorDesativar {
            width: 22%;
            position: absolute;
            left: 2%;
            top: 42px;
            width: 25%;
        }

        .infra-styles #lblLocDesMarcarTodos {
            position: absolute;
            left: 29%;
            top: 42px;
        }

        .infra-styles #lblLocDesDesmarcarTodos {
            position: absolute;
            left: 29%;
            top: 62px;
        }

        .infra-styles #lblLocDesAtencao {
            font-weight: bold;
            position: absolute;
            left: 29%;
            top: 93px;
            width: 22%;
        }

                .infra-styles #lblNovoLocalizador {
            position: absolute;
            left: 60%;
            top: 64px;
        }

        .infra-styles #selNovoLocalizador {
            position: absolute;
            left: 60%;
            top: 84px;
            width: 33%;
        }

        .infra-styles #chkLocalizadoresSecundarios {
            position: absolute;
            left: 60%;
            top: 110px;
        }

        .infra-styles #lblLocalizadoresSecundarios {
            position: absolute;
            left: 62%;
            top: 110px;
        }

        .infra-styles #selLocalizadorSecundario {
            position: absolute;
            left: 60%;
            width: 100%;
        }

        .infra-styles #divLocalizadorSecundario {
            position: absolute;
            left: 60%;
            top: 135px;
            width: 33%;
            display: none;
        }


        .infra-styles #lblAlterarLocalizadoresAberto {
            position: absolute;
            left: 2%;
            bottom: 1%;
        }

        .infra-styles #chkAlterarLocalizadoresAberto {
            position: absolute;
            left: 0%;
            bottom: 1%;
        }

    </style>

    <script type="text/javascript">

        // Guarda id do localizador que foi pesquisado para ser filtrado
        var idLocalizadorOrgaoPesquisado = '321763997812353340348649938050';
        var bolPrincipalDesmarcado = false;

        function manterInfoAdicionalAberto(checkbox) {
            infraCriarCookie("TRF4_Eproc_alexandress_chkManterAlterarLocAberto|localizador_processos_lista", checkbox.checked, 60 * 60 * 24 * 365);
        }

        function adicionaRemoveLabelInfAdicional() {
            if (document.getElementById('spnLabelPrevencao')) {
                if (document.getElementById('conteudoInfAdicional').style.display == 'block')
                    document.getElementById('spnLabelPrevencao').style.display = 'none';
                else
                    document.getElementById('spnLabelPrevencao').style.display = 'inline';
            }
        }

        // Salva/recupera valores selecionados dos localizadores que serão desativados
        function salvaLocalizadoresMarcados(recuperarValores, sufixo) {
            if (typeof sufixo == 'undefined' || sufixo == undefined) sufixo = '';

            var valoresMarcados = [];

            // Recupera valores do input hidden
            if (typeof recuperarValores != 'undefined' && recuperarValores) {
                var valores = $('#hdnGuardaLocalizadoresAtuais' + sufixo).val();

                valores = valores.split(';');
                if (valores.length > 1) {
                    if (valores[0] == '1') {
                        bolPrincipalDesmarcado = true;
                    } else {
                        bolPrincipalDesmarcado = false;
                    }

                    for (var i = 1; i < valores.length; i++) {
                        if (valores[i].length > 0) {
                            valoresMarcados.push(valores[i]);
                        }
                    }
                }
            }

            $('#selLocalizadorDesativar' + sufixo + ' option:selected').each(function () {
                valoresMarcados.push($(this).val());
            });

            //jquery.multiple.select.js
            $('input[name="selectItemselLocalizador"]:checked').each(function () {
                valoresMarcados.push($(this).val());
            });

            //bootstrap multiple select
            $('[name="selLocalizador"]').find('option:checked').each(function () {
                valoresMarcados.push($(this).val());
            });

            // Salva valores no input hidden
            $('#hdnGuardaLocalizadoresAtuais' + sufixo).val((bolPrincipalDesmarcado ? '1;' : '0;') + valoresMarcados.join(';'));

            return valoresMarcados;
        }

        function selecionaCheckLocalizadores(recuperarValores) {

            // Guarda localizadores dos processos selecionados
            var localizadoresLista = [];

            // Varre cada linha da tabela de localizadores
            $('#tabelaLocalizadores > tbody > tr').each(function () {
                // Procura por input marcado nesta linha
                if ($(this).find('input[type=checkbox]:checked').length > 0) {
                    $(this).find('input[name=numIdLocalizadorOrgao]').each(function () {
                        if ($.inArray($(this).val(), localizadoresLista) == -1) {
                            localizadoresLista.push($(this).val());
                        }
                    });
                }
            });

            if (localizadoresLista.length > 0) {
                // Ordena localizadores que poderão ser desativados
                var options = [];
                $.each(localizadoresLista, function (index, value) {
            options.push({'value': value, 'name': nomeLocalizadores[value][0], 'sinFixo': nomeLocalizadores[value][1]});
                });

                options.sort(function (a, b) {
                    var nameA = a.name.toLowerCase();
                    var nameB = b.name.toLowerCase();
                    if (nameA < nameB) {
                        return -1;
            } else
                if (nameA>nameB) {
                        return 1;
                    }

                    return 0;
                });

                // Grava localizadores marcados
                var valoresMarcados = salvaLocalizadoresMarcados(recuperarValores, '');

                // Limpa campo de localizadores que serão desativados
                $('#selLocalizadorDesativar').html('');

                // Popula campo de localizadores que serão desativados
                $.each(options, function (index, obj) {
                    var option = $('<option value="' + obj.value + '">' + obj.name + '</option>');

                    if ($.inArray(obj.value, valoresMarcados) >= 0) {
                        option.attr('selected', 'selected');
                    }

                    if (obj.sinFixo == 'S') {
                        option.attr({disabled: 'disabled', title: 'Localizador Fixo'});
                        option.css('opacity', '0.5');
                    }

                    $('#selLocalizadorDesativar').append(option);
                });
            } else {
                // Na tela de lista de processos por localizador, caso não tenha processo selecionado, limpa a lista
                var acaoIsRelatorioResumoMovimentacao = false;
                if (('localizador_processos_lista' == 'localizador_processos_lista' || acaoIsRelatorioResumoMovimentacao) && $('#hdnInfraItensSelecionados').val() == '') {
            $('#selLocalizadorDesativar').html('');''
                }
            }
            $(document).ready(function () {
                $("input[id^='chkLocalizadoresSecundarios']").each(function () {
                    if ($(this).prop('checked')) {
                        $(this).prop('disabled', false);
                        var strLblLocalizadoresSecundarios = $(this).attr('name');
                        strLblLocalizadoresSecundarios = strLblLocalizadoresSecundarios.replace("chkLocalizadoresSecundarios", "lblLocalizadoresSecundarios")
                        $('#' + strLblLocalizadoresSecundarios).prop('disabled', false);
                        var strSelLocalizadorSecundario = $(this).attr('name').replace("chkLocalizadoresSecundarios", "selLocalizadorSecundario");
                        $("#" + strSelLocalizadorSecundario + " option[value='null']").text("[Desmarcar todos]");
                        $('.infra-styles #' + strSelLocalizadorSecundario).multipleSelect({
                            showClear: true,
                            filter: true,
                            minimumCountSelected: 1,
                            selectAll: false,
                            maxHeight: 103,
                            position: 'top',
                            onClick: function (localizador) {
                                if (localizador.value == 'null' || !localizador.value || localizador.value == undefined) {
                                    $('.infra-styles #' + strSelLocalizadorSecundario).multipleSelect('uncheckAll');
                                }
                            }
                        });
                        $('.infra-styles #' + strSelLocalizadorSecundario).multipleSelect('enable');
                    } else {
                        var strSelNovoLocalizador = $(this).attr('name');
                        strSelNovoLocalizador = strSelNovoLocalizador.replace("chkLocalizadoresSecundarios", "selNovoLocalizador");
                        if ($('#' + strSelNovoLocalizador).val() != null && $('#' + strSelNovoLocalizador).val() != 'null') {
                            $(this).prop('disabled', false);
                        }
                    }
                });
            });
        }

        //CARREGA OS LOCALIZADORES NA MOVIMENTAÇÃO INDIVIDUAL
        function selecionaLocalizadores(recuperarValores, sufixo) {
            if (typeof sufixo == 'undefined' || sufixo == undefined) sufixo = '';


            // Guarda localizadores dos processos selecionados
            var localizadoresLista = [];

            // Varre cada linha da tabela de localizadores
            $('#tbInfoProcesso > tbody > tr').each(function () {
                // Procura por input marcado nesta linha
                $(this).find('input[name=numIdLocalizadorOrgao]').each(function () {
                    if ($.inArray($(this).val(), localizadoresLista) == -1) {
                        localizadoresLista.push($(this).val());
                    }
                });
            });
            $('#dvInfoProcesso').find('input[name=numIdLocalizadorOrgao]').each(function () {
                if ($.inArray($(this).val(), localizadoresLista) == -1) {
                    localizadoresLista.push($(this).val());
                }
            });

            // Ordena localizadores que poderão ser desativados
            var options = [];
            $.each(localizadoresLista, function (index, value) {
                options.push({'value': value, 'name': nomeLocalizadores[value][0], 'sinFixo': nomeLocalizadores[value][1]});
            });

            options.sort(function (a, b) {
                var nameA = a.name.toLowerCase();
                var nameB = b.name.toLowerCase();
                if (nameA < nameB) {
                    return -1;
                } else if (nameA > nameB) {
                    return 1;
                }

                return 0;
            });

            // Grava localizadores marcados
            var valoresMarcados = salvaLocalizadoresMarcados(recuperarValores, sufixo);

            // Limpa campo de localizadores que serão desativados
            $('#selLocalizadorDesativar' + sufixo).html('');

            // Popula campo de localizadores que serão desativados
            $.each(options, function (index, obj) {
                var option = $('<option value="' + obj.value + '">' + obj.name + '</option>');

                if ($.inArray(obj.value, valoresMarcados) >= 0) {
                    option.attr('selected', 'selected');
                }

                if (obj.sinFixo == 'S') {
                    option.attr({disabled: 'disabled', title: 'Localizador Fixo'});
                    option.css('opacity', '0.5');
                }

                $('#selLocalizadorDesativar' + sufixo).append(option);
            });

        }

        function habilitarLocalizadoresSecundarios(objComponente) {
            if (objComponente.name.substring(0,18) == 'selNovoLocalizador') {
                if (objComponente.value != 'null') {
                    var strChkLocalizadoresSecundarios = objComponente.name.replace("selNovoLocalizador", "chkLocalizadoresSecundarios");
                    $('#' + strChkLocalizadoresSecundarios).prop('disabled', false);
                    var strLblLocalizadoresSecundarios = objComponente.name.replace("selNovoLocalizador", "lblLocalizadoresSecundarios");
                    $('#' + strLblLocalizadoresSecundarios).prop('disabled', false);
                } else {
                    var strChkLocalizadoresSecundarios = objComponente.name.replace("selNovoLocalizador", "chkLocalizadoresSecundarios");
                    $('#' + strChkLocalizadoresSecundarios).prop('checked', false);
                    $('#' + strChkLocalizadoresSecundarios).prop('disabled', true);
                    var strLblLocalizadoresSecundarios = objComponente.name.replace("selNovoLocalizador", "lblLocalizadoresSecundarios");
                    $('#' + strLblLocalizadoresSecundarios).prop('disabled', true);
                    var strSelLocalizadorSecundario = objComponente.name.replace("selNovoLocalizador", "selLocalizadorSecundario");
                    $('.infra-styles #' + strSelLocalizadorSecundario).multipleSelect('uncheckAll');
                    $('.infra-styles #' + strSelLocalizadorSecundario).multipleSelect('disable');
                }
            }
        }

        function marcarLocalizadorPrincipal(objComponente) {
            // Grava localizadores marcados
            var valoresMarcados = salvaLocalizadoresMarcados('', '');

            // Se foi selecionado algum localizador para filtrar, seleciona ele por default, a não ser que tenha sido desmarcado alguma vez
            if (idLocalizadorOrgaoPesquisado.length > 0) {
                /*
                // Se localizador principal foi desmarcado
                if (($.inArray(idLocalizadorOrgaoPesquisado, valoresMarcados) == -1) && ($('#selLocalizadorDesativar option[value="'+idLocalizadorOrgaoPesquisado+'"]').length == 1)) {
                    bolPrincipalDesmarcado = true;
                }
                */

                if (!bolPrincipalDesmarcado) {
                    $('#selLocalizadorDesativar option[value="' + idLocalizadorOrgaoPesquisado + '"]').prop('selected', true);
                    selecionaCheckLocalizadores();
                }
            }
        }

        function marcarLocalizadorPrincipalIndividual(sufixo, objComponente) {
            // Grava localizadores marcados
            var valoresMarcados = salvaLocalizadoresMarcados('', '');

            // Se foi selecionado algum localizador para filtrar, seleciona ele por default, a não ser que tenha sido desmarcado alguma vez
            if (idLocalizadorOrgaoPesquisado.length > 0) {
                if (!bolPrincipalDesmarcado) {
                    $('#selLocalizadorDesativar' + sufixo + ' option[value="' + idLocalizadorOrgaoPesquisado + '"]').prop('selected', true);
                    selecionaLocalizadores('', sufixo);

                }
            }
        }

        function subirDescerTela(aumenta, diminui) {
            if (aumenta != '' && diminui != '') {
                if (document.getElementById('conteudoAlterarLocalizadores').style.display == 'none') {
                    document.getElementById('divInfraAreaDados').style.height = diminui + 'em';
                } else {
                    document.getElementById('divInfraAreaDados').style.height = aumenta + 'em';
                }
            }
        }

        function validaLocalizadores(sufixo) {
            if (typeof sufixo == 'undefined' || sufixo == undefined) sufixo = '';

            var arrLocalizadoresDesativados = $('#selLocalizadorDesativar' + sufixo).val();
            //var strNovoLocalizador = $('#selNovoLocalizador').val();
            if ($('#hdnInfraItensSelecionados').val() != null && $('#hdnInfraItensSelecionados').val() !== undefined && $('#hdnInfraItensSelecionados').val() != '') {
                var arrProcessos = $('#hdnInfraItensSelecionados').val();
            } else {
                var arrProcessos = $('#hdnNumProcessoLista').val();
            }
            var numProcesso = $('#txtNumProcesso').val();

            // Verifica se número do processo não está em outro campo (no caso da movimentação individual)
            if (typeof numProcesso == 'undefined' || numProcesso == undefined) {
                numProcesso = $('#hdnTxtNumProcesso').val();
            }

            var numTotalLocalizadoresDesativados = 0;
            var numTotalLocalizadoresDeTodosProcessos = $("#selLocalizadorDesativar" + sufixo + " option").length;

            if ($("#selLocalizadorDesativar" + sufixo).val()) {
                numTotalLocalizadoresDesativados = $("#selLocalizadorDesativar" + sufixo).val().length;
            }

            if ((numTotalLocalizadoresDeTodosProcessos - numTotalLocalizadoresDesativados) == 0) {
                var desativaTodos = 'S';
            } else {
                var desativaTodos = 'N';
            }
            var ret = 'ok';

            if ($('#selNovoLocalizador' + sufixo).val() == 'null' && $("#selLocalizadorDesativar" + sufixo).val() != '' && $("#selLocalizadorDesativar" + sufixo).val() != null) {

                //Se existir um numero de processo, quer dizer que a operação é única, em caso negativo, será um array de números de processos
                if (numProcesso != null && numProcesso !== undefined && numProcesso != '') {
                    arrProcessos = numProcesso;
                }

                var link = 'controlador_ajax.php?acao_ajax=validar_alteracao_processo_localizador&hash=813efb0b73c6ef0410260e790ca3b445';
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: link,
                    data: 'arrLocalizadoresDesativados=' + arrLocalizadoresDesativados + '&arrProcessos=' + arrProcessos + '&sinDesativarTodosLocalizadores=' + desativaTodos,
                    async: false,
                    success: function (retorno) {

                        switch (retorno.ret) {
    				case 1: ret = 'Você deve deixar ao menos 1(um) localizador ativo!\n';
                                break;

    				case 2: ret = 'Não é permitido desativar o localizador principal do processo \nsem selecionar um novo localizador.';
                                ret += '\n \n Localizador(es): ' + retorno.localizador;
                                ret += '\n Processo(s): ' + retorno.processos;
                                break;

    				case 3: ret = 'Não é permitido desativar TODOS os localizadores de um processo.\nProcesso(s) afetado(s): '+retorno.processos;
                                break;
                        }
                    }
                });
            }

            return ret;
        }

        setTimeout(function () {
            $(".infra-styles #selLocalizadorSecundario option[value='null']").text("[Desmarcar todos]");
            $(".infra-styles #selLocalizadorSecundario").multipleSelect({
                showClear: true,
                filter: true,
                minimumCountSelected: 1,
                selectAll: false,
                maxHeight: 103,
                position: 'top',
                onClick: function (localizador) {
                    if (localizador.value == 'null' || !localizador.value || localizador.value == undefined) {
                        $(".infra-styles #selLocalizadorSecundario").multipleSelect('uncheckAll');
                    }
                }
            });

}, 100);

function chkLocalizadoresSecundariosOnClick(chkObj, sufixo = ''){
var strSelLocalizadorSecundario = chkObj.name.replace("chkLocalizadoresSecundarios"+sufixo, "selLocalizadorSecundario"+sufixo);
$(".infra-styles #" + strSelLocalizadorSecundario + " option[value='null']").text("[Desmarcar todos]");
$(".bootstrap-styles #" + strSelLocalizadorSecundario + " option[value='null']").text("[Desmarcar todos]");
$('.infra-styles #' + strSelLocalizadorSecundario).multipleSelect({
showClear: true,
filter: true,
minimumCountSelected: 1,
selectAll: false,
maxHeight: 103,
position: 'top',
onClick: function (localizador) {
if (localizador.value == 'null' || !localizador.value || localizador.value == undefined) {
$('#' + strSelLocalizadorSecundario).multipleSelect('uncheckAll');
}
}
});
if (chkObj.checked == false) {
$('.infra-styles #' + strSelLocalizadorSecundario).multipleSelect('uncheckAll');
$('.infra-styles #' + strSelLocalizadorSecundario).multipleSelect('disable');
$('.bootstrap-styles #' + strSelLocalizadorSecundario).val(null);
$('.bootstrap-styles #' + strSelLocalizadorSecundario).attr('disabled',true);
} else {
$('.infra-styles #' + strSelLocalizadorSecundario).multipleSelect('enable');
$('.bootstrap-styles #' + strSelLocalizadorSecundario).attr('disabled',false);
}
$('.bootstrap-styles #' + strSelLocalizadorSecundario).selectpicker('refresh');

        }
    </script>

    <fieldset id="fldAlterarLocalizadores" class="infraFieldset">
        <legend class="infraLegendObrigatorio" onclick="infraAbrirFecharElementoHTML('conteudoAlterarLocalizadores', 'imgStatusAlterarLocalizadores'); adicionaRemoveLabelInfAdicional(); subirDescerTela('','');" style="cursor:pointer;">

              <img id="imgStatusAlterarLocalizadores" src="infra_css/imagens/ver_resumo.gif" title="Gerenciar Localizadores" alt="Gerenciar Localizadores" style="width:1.1em; height:1.1em; opacity:1; border-width:0;"> Gerenciar Localizadores        </legend>

        <div id="conteudoAlterarLocalizadores" style="display: block">
    	<input type="hidden" name="hdnGuardaLocalizadoresAtuais" id="hdnGuardaLocalizadoresAtuais" value="">
            <div class="row m-0 justify-content-between">
                <div class="col-12 col-md-6 col-lg-4">
                    <label id="lblLocalizadoresAtuais" for="optLocalizadoresAtuais" class="infraLabelRadio">Localizadores ATUAIS
                        <img style="border:0px;cursor:default;vertical-align:middle;" src="infra_css/imagens/ajuda.gif" onmouseout="return infraTooltipOcultar();" onmouseover="return infraTooltipMostrar('ATENÇÃO: Os localizadores ATUAIS marcados serão excluídos e os processos serão incluídos no Novo Localizador indicado. Utilize as teclas CTRL ou SHIFT para marcar/desmarcar mais de um localizador.')">
                    </label>
                    <div class="d-flex">
                        <select multiple="multiple" size="7" id="selLocalizadorDesativar" class="p-0" name="selLocalizadorDesativar[]" onchange="salvaLocalizadoresMarcados('','')" style="min-width: 300px"></select>
                        <div class="pl-1 text-nowrap">
                            <div class="">
                                <label id="lblLocDesMarcarTodos" class="infraLabelRadio text-primary mb-0" style="cursor:pointer;" onclick="$('#selLocalizadorDesativar option').prop('selected', true); $('#selLocalizadorDesativar').change(); if (typeof atualizaPrefLocalizadores == 'function') {atualizaPrefLocalizadores('M');}">Marcar todos</label>
                            </div>
                            <div class="">
                                <label id="lblLocDesDesmarcarTodos" class="infraLabelRadio text-primary" style="cursor:pointer;" onclick="$('#selLocalizadorDesativar option').prop('selected', false); $('#selLocalizadorDesativar').change(); if (typeof atualizaPrefLocalizadores == 'function') {atualizaPrefLocalizadores('D');}">Desmarcar todos</label>
                            </div>
                        </div>
                    </div>
                </div>
                                        <div class="col-12 col-md-6">
                            <div class="">
                                <label class="infraLabelObrigatorio" for="selNovoLocalizador" id="lblNovoLocalizador" title="Tecla de atalho: Alt+N"><span class="infraTeclaAtalho">N</span>ovo localizador:</label>
                                <select tabindex="606" class="infraSelect" name="selNovoLocalizador" id="selNovoLocalizador" onchange="marcarLocalizadorPrincipal(this);habilitarLocalizadoresSecundarios(this)" title="Tecla de atalho: Alt+N">
                                    <option value="null"></option>

<option value="321763997812353340348641297548">❗ERRO NA AUTOMAÇÃO ❗ - [AMR] Erro Automação</option>
<option value="321765322095166388287499870944">⇆ Triagem ⇆ - [AMR] Triagem</option>
<option value="321769438024006309480515412735">⚠️[RETIRAR DE PAUTA]⚠️ - ⚠️[RETIRAR DE PAUTA]⚠️</option>
<option value="321763997812353340348644606662">* adm./justiça/econ./fé púb./trib./orcrim/resp. * - * adm./justiça/econ./fé púb./trib./orcrim/resp. *</option>
<option value="321763997812353340348644595107">* amb./cons./ECA/honra/paz/preconceito * - * amb./cons./ECA/honra/paz/preconceito *</option>
<option value="321763997812353340348644595877">* armas/trânsito/outros * - * armas/trânsito/outros *</option>
<option value="321763997812353340348644594796">* dign. sexual * - * dign. sexual *</option>
<option value="321763997812353340348644595470">* exec. penal * - * exec. penal *</option>
<option value="321765894927640366818185323239">* habeas corpus * - * habeas corpus *</option>
<option value="321765894927640366818189429475">* mandado de segurança * - * mandado de segurança *</option>
<option value="321763997812353340348644596672">* originária/sigilo * - * originária/sigilo *</option>
<option value="321763997812353340348644597082">* patrimônio * - * patrimônio *</option>
<option value="321765894927640366818202416500">* rese * - * rese *</option>
<option value="321763997812353340348644597415">* tráfico * - * tráfico *</option>
<option value="321763997812353340348644593887">* vida/liberdade/pessoa * - * vida/liberdade/pessoa *</option>
<option value="321763997812353340348644607235">* viol. doméstica * - * viol. doméstica *</option>
<option value="321763997812353340348641292100">0. ag. cumprimento desp/dec - 0. ag. cumprimento desp/dec</option>
<option value="321763997812353340348641292420">0. ag. trânsito - 0. ag. trânsito</option>
<option value="321763997812353340348649937551">0. DCDP - Ag. Redistribuição - 0. DCDP - Ag. Redistribuição</option>
<option value="321763997812353340348641290463">0. DCDP - Ag. Revisão - 0. DCDP - Ag. Revisão</option>
<option value="321763997812353340348649937811">0. inf. óbito - [AMR] Informação de Óbito</option>
<option value="321763997812353340348644604954">1. Ação Rescisória - [AMR] Ação Rescisória</option>
<option value="321764580304141191329938721599">1. Admissibilidade - [AMR] Admissibilidade</option>
<option value="321763997812353340348644598419">1. Agravo de Instrumento - [AMR] Agravo de Instrumento</option>
<option value="321763997812353340348644598108">1. Agravo Interno - [AMR] Agravo Interno</option>
<option value="321763997812353340348644605660">1. Analisar Gratuidade - [AMR] Analisar Gratuidade</option>
<option value="321763997812353340348644607587">1. Conflito de Jurisdição - [AMR] Conflito de Jurisdição</option>
<option value="321763997812353340348644607918">1. Cooperadores - [AMR] Cooperadores</option>
<option value="321763997812353340348644605306">1. Devolvidos 2ª Vice - [AMR] Devolvidos 2ª Vice</option>
<option value="321763997812353340348644593327">1. Embargos de Declaração - [AMR] Embargos de Declaração</option>
<option value="321763997812353340348644608252">1. Homologação Acordo/Desistência - [AMR] Homologação de Acordo/Desistência</option>
<option value="321763997812353340348644591739">1. Incompetência - [AMR] Incompetência</option>
<option value="321763997812353340348644608798">1. Inicial - Agravo de Instrumento - [AMR] Inicial - Agravo de Instrumento</option>
<option value="321763997812353340348644612880">1. Julg. Monocrático - [AMR] Julgamento Monocrático</option>
<option value="321763997812353340348644613486">1. Não Conhecimento - [AMR] Não Conhecimento</option>
<option value="321763997812353340348644613186">1. Recebidos MP - [AMR] Recebidos MP</option>
<option value="321763997812353340348644590725">1. Retorno despacho/decisão - [AMR] Retorno despacho/decisão</option>
<option value="321763997812353340348641290816">1. Urgente 🔴 - 1. Urgente</option>
<option value="321764669184350019842826155181">2. acórdãos - ag. conferência - 2. acórdãos - ag. conferência</option>
<option value="321767889621726212567043193745">2. acórdãos - conferidos - 2. acórdãos - conferidos</option>
<option value="321767955189985457146787763954">2. devolvido para correção - 2. devolvido para correção</option>
<option value="321763997812353340348649940501">2. monocráticas - ag. assinatura - 2. monocráticas - ag. assinatura</option>
<option value="321763997812353340348649940245">2. monocráticas - ag. conferência - 2. monocráticas - ag. conferência</option>
<option value="321765421534210567367928528151">3. pautar - 3. pautar</option>
<option value="321765421534210567367925950754">4. acórdãos - assinatura pós-sessão - 4. acórdãos - assinatura pós-sessão</option>
<option value="321765421534210567367932053125">4. adiados - 4. adiados</option>
<option value="321763997812353340348649939119">4. para voto divergente - 4. para voto divergente</option>
<option value="321763997812353340348649938281">4. para voto-vista - 4. para voto-vista</option>
<option value="321763997812353340348649938050">4. pautados - 4. pautados</option>
<option value="321765421534210567367935059513">4. pedido de vista - 4. pedido de vista</option>
<option value="321763997812353340348649938515">4. relator p/ acórdão - 4. relator p/ acórdão</option>
<option value="321765421534210567367937027680">4. retirados de pauta - 4. retirados de pauta</option>
<option value="321765934125521599334937586858">&lt;&gt; Baixar em Diligência &lt;&gt; - [AMR] Baixar em Diligência</option>
<option value="321764543206809176417083033622">&lt;&gt; Contrarrazões &lt;&gt; - [AMR] Contrarrazões</option>
<option value="321764580304141191329859989191">&lt;&gt; Dativo - Nomear &lt;&gt; - [AMR] Dativo - Nomear</option>
<option value="321764543206809176417167681321">&lt;&gt; PGJ &lt;&gt; - [AMR] PGJ</option>
<option value="321764580304141191329834982617">&lt;&gt; Razões - constituir novo defensor &lt;&gt; - [AMR] Razões - constituir novo defensor</option>
<option value="321766158145092759625303977268">&lt;&gt; Razões &lt;&gt; - [AMR] Razões</option>
<option value="321766134174252360563249059927">&lt;&gt; Secretaria &lt;&gt; - [AMR] Secretaria</option>
<option value="321767275328932661495022786143">&lt;tt&gt;<b>[RÉU PRESO]</b> - <tt><b>[RÉU PRESO]</b></tt></option>
<option value="321763991294517580217895332375">ACÓRDÃOS - ACÓRDÃOS</option>
<option value="321763991294517580217895332475">ADM-AJG requerida - ADM-AJG requerida</option>
<option value="321763991294517580217895332474">ADM-Deserção - ADM-Deserção</option>
<option value="321763991294517580217895332473">ADM-Tempestividade - ADM-Tempestividade</option>
<option value="321763991294517580217895332385">ADMINISTRATIVO - ADMINISTRATIVO</option>
<option value="321763991294517580217895332486">AG. DIGITALIZAÇÃO - AGUARDA DIGITALIZAÇÃO</option>
<option value="321763991294517580217895332489">AGRAVO - AGRAVO</option>
<option value="321763991294517580217895332497">ALV SOLT CUMPRIDO - ALVARÁ DE SOLTURA CUMPRIDO</option>
<option value="321763991294517580217895332496">ALV SOLT CUMPRIDO EM TERMOS - ALVARÁ DE SOLTURA CUMPRIDO EM TERMOS</option>
<option value="321763991294517580217895332495">ALV SOLT DEVOLVIDO - ALVARÁ DE SOLTURA DEVOLVIDO SEM CUMPRIMENTO</option>
<option value="321763991294517580217895332498">ALV SOLT INFORMAÇÃO - ALVARÁ DE SOLTURA INFORMAÇÃO</option>
<option value="321763991294517580217895332499">ALV SOLT LIDO - ALVARÁ DE SOLTURA LIDO</option>
<option value="321770066818483901493934333734">AMR - Ato Infracional - Ato Infracional</option>
<option value="321770066818483901493937467301">AMR - Correição Parcial - Correição Parcial</option>
<option value="321770385676294988228546517507">AMR PAUTAR - AMR PAUTAR</option>
<option value="321763991294517580217895332520">APRECIACAO_JUDIC - APRECIAÇÃO JUDICIAL</option>
<option value="321763991294517580217895332395">AR ENTREGUE - CARTA AR ENTREGUE</option>
<option value="321763991294517580217895332396">AR NÃO ENTREGUE - CARTA AR NÃO ENTREGUE</option>
<option value="321763991294517580217895332408">AUTUADOS - AUTUADOS</option>
<option value="321763997812353340348641293823">AUTUADOS-AI - AUTUADOS-AI</option>
<option value="321763997812353340348641294203">AUTUADOS-HC - AUTUADOS-HC</option>
<option value="321763997812353340348641294538">AUTUADOS-MS - AUTUADOS-MS</option>
<option value="321763991294517580217895332371">BAIXADOS - BAIXADOS</option>
<option value="321763991294517580217895332459">BAIXADOS-GAB - BAIXADOS-GAB</option>
<option value="321763991294517580217895332458">BENS A CADASTRAR - BENS A CADASTRAR</option>
<option value="321763991294517580217895332544">BNMP REC - BNMP RECEBIDOS</option>
<option value="321763991294517580217895332545">BNMP RGL - REGULARIZAR BNMP</option>
<option value="321763991294517580217895332456">CAMP - ÓBITOS - NEGATIVO - CAMP - ÓBITOS - NEGATIVO</option>
<option value="321763991294517580217895332454">CAMP - ÓBITOS - PESQUISAR - CAMP - ÓBITOS - PESQUISAR</option>
<option value="321763991294517580217895332455">CAMP - ÓBITOS - POSITIVO - CAMP - ÓBITOS - POSITIVO</option>
<option value="321763991294517580217895332457">CAMP - PESQUISAR ENDEREÇOS - CAMP - PESQUISAR ENDEREÇOS</option>
<option value="321763991294517580217895332397">CANCELAMENTO - VERIFICAR CANCELAMENTO EVENTO</option>
<option value="321763991294517580217895332501">CARTA AR ENVIADA - CARTA AR ENVIADA</option>
<option value="321763991294517580217895332531">CARTA AR PAGAMENTO CONFIRMADO - CARTA AR PAGAMENTO CONFIRMADO</option>
<option value="321763991294517580217895332532">CARTA AR PAGAMENTO NÃO REALIZADO - CARTA AR PAGAMENTO NÃO REALIZADO</option>
<option value="321763991294517580217895332505">CARTAS Pr Or Rog - CARTAS Pr Or Rog</option>
<option value="321763991294517580217895332415">Cessado Sobrestamento - Cessado Sobrestamento</option>
<option value="321763991294517580217895332465">CI NÃO PAGAS - CUSTAS INICIAIS NÃO PAGAS</option>
<option value="321763991294517580217895332463">CI PEND - CUSTAS INICIAIS PEND</option>
<option value="321763991294517580217895332508">CONCILIAÇÃO - CONCILIAÇÃO</option>
<option value="321763991294517580217895332403">CONCILIACAO_COM_ACOR - CONCILIACAO_COM_ACORDO</option>
<option value="321763991294517580217895332402">CONCILIACAO_INICIADA - CONCILIACAO INICIADA</option>
<option value="321763991294517580217895332404">CONCILIACAO_SEM_ACOR - CONCILIACAO_SEM_ACORDO</option>
<option value="321763991294517580217895332460">CONTADORIA - CONTADORIA</option>
<option value="321763991294517580217895332466">CR NÃO PAGAS - CUSTAS RECURSAIS NÃO PAGAS</option>
<option value="321763991294517580217895332464">CR PEND - CUSTAS RECURSAIS PEN</option>
<option value="321763991294517580217895332412">CUSTAS-PEND - CUSTAS PENDENTES</option>
<option value="321763991294517580217895332413">CUSTAS-VENC - CUSTAS VENCIDAS</option>
<option value="321763991294517580217895332485">DECURSO DE PRAZO - DECURSO DE PRAZO</option>
<option value="321763991294517580217895332540">DEPÓSITO JUDICIAL - DEPÓSITO JUDICIAL</option>
<option value="321763991294517580217895332414">Desp/Dec Cumpridos - Desp/Dec Cumpridos AGG</option>
<option value="321763991294517580217895332381">DESPACHOS - DESPACHOS</option>
<option value="321763991294517580217895332535">DEVOLVIDOS OFICIAL DE JUSTIÇA - DEVOLVIDOS OFICIAL DE JUSTIÇA</option>
<option value="321763991294517580217895332521">DILAÇÃO DE PRAZO PF - PEDIDO DE DILAÇÃO DE PRAZO PF</option>
<option value="321763991294517580217895332370">DISTRIBUÍDOS - DISTRIBUÍDOS</option>
<option value="321763991294517580217895332390">DISTRIBUÍDOS-AI - DISTRIBUÍDOS - AGRAVO DE INSTRUMENTO</option>
<option value="321763991294517580217895332391">DISTRIBUÍDOS-HC - DISTRIBUÍDOS - HABEAS CORPUS</option>
<option value="321763997812353340348641295613">DISTRIBUÍDOS-MS - DISTRIBUÍDOS-MS</option>
<option value="321763991294517580217895332515">DRTS - Processos na DRTS</option>
<option value="321763991294517580217895332410">EM DIGITALIZACAO - EM DIGITALIZACAO</option>
<option value="321763991294517580217895332487">EMBDEC - EMBARGOS DE DECLARAÇÃO</option>
<option value="321763991294517580217895332488">EMBINFR - EMBARGOS INFRINGENTES</option>
<option value="321763991294517580217895332547">ERRO_ALTERA_DADO - ERRO_ALTERA_DADO</option>
<option value="321765899267464367877994576840">ERRO_ENVIO_DOMICILIO_ELETRONICO - ERRO_ENVIO_DOMICILIO_ELETRONICO</option>
<option value="321763991294517580217895332546">ERRO_ENVIO_INTIMACAO_DJEN - ERRO_ENVIO_INTIMACAO_DJEN</option>
<option value="321763991294517580217895332394">ERRO_INTIMA_AUTOMATI - ERRO_INTIMA_AUTOMATICO</option>
<option value="321763991294517580217895332407">FÓRUM HABILITADO - FÓRUM HABILITADO</option>
<option value="321763991294517580217895332522">IMPEDIMENTOS - IMPEDIMENTOS</option>
<option value="321763991294517580217895332393">INSPEÇÃO - INSPEÇÃO</option>
<option value="321763991294517580217895332529">LAUDO COMPLEMENTAR - LAUDO COMPLEMENTAR</option>
<option value="321763991294517580217895332528">LAUDO INCAPAZ PERM - LAUDO INCAPAZ PERM</option>
<option value="321763991294517580217895332526">LAUDO INCAPAZ PRET - LAUDO INCAPAZ PRET</option>
<option value="321763991294517580217895332525">LAUDO INCAPAZ REDUZ - LAUDO INCAPAZ REDUZ</option>
<option value="321763991294517580217895332527">LAUDO INCAPAZ TEMP - LAUDO INCAPAZ TEMP</option>
<option value="321763991294517580217895332492">MAND CUMPRIDO - MANDADO CUMPRIDO</option>
<option value="321763991294517580217895332534">MAND CUMPRIDO HORA CERTA - MANDADO CUMPRIDO HORA CERTA</option>
<option value="321763991294517580217895332493">MAND PARC CUMPRIDO - MANDADO PARCIALMENTE CUMPRIDO</option>
<option value="321763991294517580217895332500">MAND PRISÃO INFORMAÇÃO - MANDADO DE PRISÃO INFORMAÇÃO</option>
<option value="321763991294517580217895332494">MAND SEM CUMPRIMENTO - MANDADO SEM CUMPRIMENTO</option>
<option value="321763991294517580217895332429">MG DESPACHOS CUMPRIDOS - MIGRADOS Despachos/Decisões Cumpridos</option>
<option value="321763991294517580217895332422">MIG ADIADOS - MIGRADOS ADIADOS</option>
<option value="321763991294517580217895332416">MIG AG. CUMP - MIGRADOS CONTROLE - Ag. Cumprimento Desp./Dec. Int</option>
<option value="321763991294517580217895332417">MIG AG. CUMP. DILIGÊNCIAS - MIGRADOS CONTROLE - Ag Cumprimento de Diligência</option>
<option value="321763991294517580217895332424">MIG AGRAVOS REDIST. CCE - MIGRADOS Agravos Redistribuídos/CCE</option>
<option value="321763991294517580217895332423">MIG AI DISTRIBUÍDOS - MIGRADOS Agravos Distribuídos</option>
<option value="321763991294517580217895332425">MIG ALVARÁ - MIGRADOS Alvará - Análise/Assinatura</option>
<option value="321763991294517580217895332426">MIG Cessado Sobrestamento - MIGRADOS Cessado Sobrestamento</option>
<option value="321763991294517580217895332427">MIG conclusos - MIGRADOS Conclusos</option>
<option value="321763991294517580217895332428">MIG Conclusos Relator Designad - MIGRADOS Conclusos Relator Designado</option>
<option value="321763991294517580217895332430">MIG Distribuídos - MIGRADOS Distribuídos</option>
<option value="321763991294517580217895332431">MIG Incidentes Distribuídos - MIGRADOS Incidentes Distribuídos</option>
<option value="321763991294517580217895332432">MIG Julgados - MIGRADOS Julgados</option>
<option value="321763991294517580217895332433">MIG Julgados Declaração de Vot - MIGRADOS Julgados Declaração de Voto</option>
<option value="321763991294517580217895332434">MIG Julgados Relator Designado - MIGRADOS Julgados Relator Designado</option>
<option value="321763991294517580217895332448">MIG Julgados Votos a Declarar - MIGRADOS Julgados Votos a Declarar</option>
<option value="321763991294517580217895332438">MIG Pedido de Pauta c/ Pendênc - MIGRADOS Pedido de Pauta c/ Pendências</option>
<option value="321763991294517580217895332446">MIG Pedido Inclusão em Pauta - MIGRADOS Pedido Inclusão em Pauta</option>
<option value="321763991294517580217895332437">MIG Pedidos de Vista - MIGRADOS Pedidos de Vista</option>
<option value="321763991294517580217895332445">MIG Pet Juntadas p/ Análise - MIGRADOS Petições Juntadas para Análise</option>
<option value="321763991294517580217895332440">MIG Presidente do Órgão Julgad - MIGRADOS Presidente do Órgão Julgador</option>
<option value="321763991294517580217895332442">MIG Proc p/ Análise do SECRET - MIGRADOS Processos para Análise do Sec. Jurídico</option>
<option value="321763991294517580217895332451">MIG Proc. p/ Juízo de retrataç - MIGRADOS Proc. Receb. para Juízo de Retratação</option>
<option value="321763991294517580217895332443">MIG Processos p/ Análise do Of - MIGRADOS Processos para Análise do Of. Gabinete</option>
<option value="321763991294517580217895332439">MIG Processos p/ Análise julga - MIGRADOS Processos para Análise do Julgador</option>
<option value="321763991294517580217895332435">MIG Processos Pautados - MIGRADOS Processos Pautados</option>
<option value="321763991294517580217895332449">MIG Processos Pautados em Mesa - MIGRADOS Processos Pautados em Mesa</option>
<option value="321763991294517580217895332453">MIG Recebidos em Substituição - MIGRADOS Recebidos em Substituição</option>
<option value="321763991294517580217895332450">MIG Redist. CCE - Liminar Anal - MIGRADOS Redist. CCE - Liminar Analisada</option>
<option value="321763991294517580217895332436">MIG Relator Ag. Análise Petiçã - MIGRADOS Relator Ag. Análise Petição - Pós Julg.</option>
<option value="321763991294517580217895332441">MIG Retirados de Pauta - MIGRADOS Retirados de Pauta</option>
<option value="321763991294517580217895332447">MIG Revisor Pedido de Pauta - MIGRADOS Revisor Pedido de Pauta</option>
<option value="321763991294517580217895332444">MIG SOBRESTADOS - MIGRADOS SOBRESTADOS</option>
<option value="321763991294517580217895332452">MIG Sobrestados - Petições Jun - MIGRADOS Sobrestados - Petições Juntadas</option>
<option value="321763991294517580217895332419">MIG suspensos - MIGRADOS CONTROLE - Processos Suspensos</option>
<option value="321763991294517580217895332418">MIG VISTA MAIS DE 10 - MIGRADOS CONTROLE - Presidente - Vista mais de 10</option>
<option value="321763991294517580217895332420">MIG VISTA OUTRO DES. - MIGRADOS CONTROLE - Vista a outro Desembargador</option>
<option value="321763991294517580217895332421">MIG VISTA PGJ APÓS DISTRIBUIÇÃ - MIGRADOS CONTROLE - Vista à PGJ após a Distribuiçã</option>
<option value="321763991294517580217895332467">MIGRADOS - MIGRADOS</option>
<option value="321763991294517580217895332468">MIGRADOS_SANEAMENTO - MIGRADOS_SANEAMENTO</option>
<option value="321763991294517580217895332517">MP TRIAGEM - MP TRIAGEM</option>
<option value="321763991294517580217895332405">NÃO BAIXAR/REMETER - NÃO BAIXAR/REMETER</option>
<option value="321763991294517580217895332481">P REVISÃO - PARA REVISÃO</option>
<option value="321763991294517580217895332491">PARA ACÓRDÃO - PARA ACÓRDÃO</option>
<option value="321763991294517580217895332490">PARECER MP - PARECER MP</option>
<option value="321763991294517580217895332518">PEDIDO ARQ. MP - PEDIDO ARQUIVAMENTO MP</option>
<option value="321763991294517580217895332519">PEDIDO DECL. COMP. - PEDIDO DECLINAÇÃO COMPETÊNCIA</option>
<option value="321763991294517580217895332401">PEDIDO_DIA_RELATOR - PEDIDO DE DIA PELO RELATOR</option>
<option value="321763991294517580217895332374">PEDIDO_DIA_REVISOR - PEDIDO DE DIA PELO REVISOR</option>
<option value="321763991294517580217895332482">PETIÇÃO - PETIÇÃO</option>
<option value="321763991294517580217895332470">PETIÇÃO INI CAUTELAR - PETIÇÃO INICIAL CAUTELAR</option>
<option value="321763991294517580217895332469">PETIÇÃO INICIAL MS - PETIÇÃO INICIAL MS</option>
<option value="321763991294517580217895332372">PI - DEPENDÊNCIA - PI - DEPENDÊNCIA</option>
<option value="321763991294517580217895332479">PLANTÃO - PLANTÃO</option>
<option value="321763991294517580217895332511">PRECATÓRIO - PRECATÓRIO</option>
<option value="321763991294517580217895332512">PRECAT_OUTROS_ORÇAM - PRECATÓRIO - OUTROS ORÇAMENTOS</option>
<option value="321763991294517580217895332477">PREV-AJG requerida - PREV-AJG requerida</option>
<option value="321763991294517580217895332386">PREVIDENCIÁRIO - PREVIDENCIÁRIO</option>
<option value="321763991294517580217895332533">PROC ADV - PROCURAÇÃO ADV</option>
<option value="321763997812353340348644598781">PROCESSOS 2020 - PROCESSOS 2020</option>
<option value="321763997812353340348644599112">PROCESSOS 2021 - PROCESSOS 2021</option>
<option value="321763997812353340348644599452">PROCESSOS 2022 - PROCESSOS 2022</option>
<option value="321763997812353340348644599757">PROCESSOS 2023 - PROCESSOS 2023</option>
<option value="321763991294517580217895332411">PROCESSOS P/DISTRIBUIR - PROCESSOS P/DISTRIBUIR</option>
<option value="321763991294517580217895332398">PRONTOS - BAIXA ACÓR - PRONTOS - BAIXA ACÓRDÃO</option>
<option value="321763991294517580217895332399">PRONTOS - BAIXA DECI - PRONTOS - BAIXA DECISÃO</option>
<option value="321763991294517580217895332400">PRONTOS - REMESSA DRTS - PRONTOS - REMESSA DRTS</option>
<option value="321763991294517580217895332409">PRONTOS PARA DIGITAL - PRONTOS PARA DIGITALIZAR</option>
<option value="321763991294517580217895332523">PRONTOS_REM_COMARCA - PRONTOS REMESSA COMARCA ORIGEM</option>
<option value="321763991294517580217895332373">REATIVADOS - REATIVADOS</option>
<option value="321763991294517580217895332406">REC DELEGADA - RECEBIDOS-DELEGADA</option>
<option value="321763991294517580217895332480">RECEBIDOS - RECEBIDOS</option>
<option value="321763991294517580217895332516">Recebidos da DRTS - Recebidos da DRTS</option>
<option value="321763991294517580217895332484">RECEBIDOS-DIL./CONC. - RECEBIDOS-DILIG./CONCIL.</option>
<option value="321763991294517580217895332383">RECEBIDOS-RELATOR - RECEBIDOS RELATOR ACÓRDÃO</option>
<option value="321763991294517580217895332472">RECURSO EXTRAORDINÁR - RECURSO EXTRAORDINÁRIO</option>
<option value="321763991294517580217895332530">REDIST - Assento Reg. 18/2018 - REDIST - Assento Reg. 18/2018</option>
<option value="321763991294517580217895332541">REGISTRO DE ÓBITO - REGISTRO DE ÓBITO</option>
<option value="321763991294517580217895332392">REMETIDOS - REMETIDOS</option>
<option value="321763991294517580217895332483">REMETIDOS EM DILIGÊNCIA - REMETIDOS EM DILIGÊNCIA</option>
<option value="321763991294517580217895332382">REMETIDOS-RELATOR - REMETIDOS RELATOR ACÓRDÃO</option>
<option value="321763991294517580217895332461">REQ - PAGA - BLOQUEADA - REQ - PAGA - BLOQUEADA</option>
<option value="321763991294517580217895332462">REQ - PAGA - LIBERADA - REQ - PAGA - LIBERADA</option>
<option value="321763991294517580217895332538">REQ - SUPERPREFERENCIAL - PAGA - BLOQUEADA - REQ - SUPERPREFERENCIAL - PAGA - BLOQUEADA</option>
<option value="321763991294517580217895332539">REQ - SUPERPREFERENCIAL - PAGA - LIBERADA - REQ - SUPERPREFERENCIAL - PAGA - LIBERADA</option>
<option value="321763991294517580217895332537">REQ - SUPERPREFERENCIAL - PROCESSADA - REQ - SUPERPREFERENCIAL - PROCESSADA</option>
<option value="321763991294517580217895332510">REQ_PAGAMENTO - REQUISIÇÕES DE PAGAMENTO</option>
<option value="321763991294517580217895332379">RESTRITO AO JUIZ - RESTRITO AO JUIZ</option>
<option value="321763991294517580217895332513">RPV - REQUISIÇÃO DE PEQUENO VALOR</option>
<option value="321763991294517580217895332514">RPV-JEF - REQUISIÇÃO DE PEQUENO VALOR - JEF</option>
<option value="321763991294517580217895332509">S/CONCILIAÇÃO - SEM CONCILIAÇÃO</option>
<option value="321763991294517580217895332524">SOBRESTADOS - SOBRESTADOS</option>
<option value="321763991294517580217895332548">SPC-INSERÇÃO - SPC-INSERÇÃO</option>
<option value="321763991294517580217895332549">SPC-RETIRADA - SPC-RETIRADA</option>
<option value="321763991294517580217895332536">STF-DIST - STF-Distribuídos</option>
<option value="321763991294517580217895332389">STF-RECEBIDOS - STF-RECEBIDOS</option>
<option value="321763991294517580217895332380">STF-REM - STF REMETIDOS</option>
<option value="321763991294517580217895332388">STJ-RECEBIDOS - STJ-RECEBIDOS</option>
<option value="321763991294517580217895332377">STJ-REM - STJ REMETIDOS</option>
<option value="321763991294517580217895332506">SUSPENSOS - PROCESSOS SUSPENSOS</option>
<option value="321763991294517580217895332507">SUSPENSOS-RETORNO - RETORNADOS DE SUSPENSÃO</option>
<option value="321763991294517580217895332504">TJSC-BAIXADOS Se/Cesp - TJSC-BAIXADOS Se/Cesp</option>
<option value="321763991294517580217895332503">TJSC-DECISÃO Se/Cesp - TJSC-DECISÃO Se/Cesp</option>
<option value="321763991294517580217895332502">TJSC-JULGADOS Se/CEsp - TJSC-JULGADOS Se/CEsp</option>
<option value="321763991294517580217895332476">TRIB-AJG requerida - TRIB-AJG requerida</option>
<option value="321763991294517580217895332384">TRIBUTÁRIO - TRIBUTÁRIO</option>
<option value="321763991294517580217895332471">UNIFORMIZAÇÃO DE JUR - UNIFORMIZAÇÃO JURISPRUDÊNCIA</option>
<option value="321763991294517580217895332478">URGENTE - URGENTE</option>
<option value="321763991294517580217895332376">VERIFICAR - VERIFICAR LOCALIZADOR</option>
<option value="321763991294517580217895332542">VERIFICAR ASSUNTO - VERIFICAR ASSUNTO</option>
<option value="321763991294517580217895332543">VERIFICAR PARTES - VERIFICAR PARTES</option>
<option value="321763991294517580217895332378">VERIFICAR PROCURADOR - VERIFICAR PROCURADOR/ENTIDADE</option>
<option value="321763991294517580217895332387">VISTA ADV PROCESSO - VISTA ADV PROCESSO</option>
<option value="321763997812353340348644590932">[+ 120] - [+ 120]</option>
<option value="321767275328932661495335051946">[+ 200] - [+ 200]</option>
<option value="321766282868765581048539974201">[+ 365] - [+ 365]</option>
<option value="321763997812353340348644591539">[META 10] - [META 10]</option>
<option value="321763997812353340348644591133">[META 2] - [META 2]</option>
<option value="321763997812353340348644591354">[META 6] - [META 6]</option>
<option value="321763997812353340348644613884">[] Alexandre - [AMR] Alexandre</option>
<option value="321763997812353340348644614214">[] AMR - [AMR] AMR</option>
<option value="321767630362011201730334725995">[] AMR - Fazendo - AMR - Fazendo</option>
<option value="321767630362011201739774582650">[] AMR - VIDE - AMR - VIDE</option>
<option value="321763997812353340348644614555">[] Andreia - [AMR] Andreia</option>
<option value="321763997812353340348644614869">[] Andrezza - [AMR] Andrezza</option>
<option value="321763997812353340348649963626">[] Bianca - [AMR] Bianca</option>
<option value="321763997812353340348644615522">[] Bruna - [AMR] Bruna</option>
<option value="321763997812353340348644615817">[] Camila - [AMR] Camila</option>
<option value="321763997812353340348644616110">[] Clarice - [AMR] Clarice</option>
<option value="321763997812353340348644616429">[] Cláudia - [AMR] Cláudia</option>
<option value="321763997812353340348644616719">[] Condá - [AMR] Condá</option>
<option value="321763997812353340348644617378">[] Erick - [AMR] Erick</option>
<option value="321763997812353340348644618750">[] Gabriella - [AMR] Gabriella</option>
<option value="321763997812353340348644615213">[] Lucas - [AMR] Lucas</option>
<option value="321763997812353340348644617068">[] Luiza - [AMR] Luiza</option>
<option value="321763997812353340348644619530">[] Matheus - [AMR] Matheus</option>
<option value="321763997812353340348644619882">[] Salésio - [AMR] Salésio</option>
<option value="321763997812353340348644617706">[] Susane - [AMR] Susane</option>
<option value="321763997812353340348644619131">[] Thalita - [AMR] Thalita</option>
<option value="321763997812353340348644618097">[] Vitória - [AMR] Vitória</option>
<option value="321763997812353340348644618444">[] Yunes - [AMR] Yunes</option>
<option value="321763997812353340348703167905">¹Alexandre assinado - ¹Alexandre assinado</option>
<option value="321763997812353340348703168805">¹Andrezza assinado - ¹Andrezza assinado</option>
<option value="321763997812353340348649939781">¹Bianca assinado - ¹Bianca assinado</option>
<option value="321763997812353340348703177030">¹Camila assinado - ¹Camila assinado</option>
<option value="321763997812353340348703166919">¹Cláudia assinado - ¹Cláudia assinado</option>
<option value="321763997812353340348703169658">¹Condá assinado - ¹Condá assinado</option>
<option value="321763997812353340348703176250">¹Erick assinado - ¹Erick assinado</option>
<option value="321763997812353340348703170550">¹Gabriella assinado - ¹Gabriella assinado</option>
<option value="321763997812353340348703175515">¹Lucas assinado - ¹Lucas assinado</option>
<option value="321763997812353340348703174749">¹Matheus assinado - ¹Matheus assinado</option>
<option value="321763997812353340348703171536">¹Salésio assinado - ¹Salésio assinado</option>
<option value="321763997812353340348703172341">¹Susane assinado - ¹Susane assinado</option>
<option value="321763997812353340348703173168">¹Vitória assinado - ¹Vitória assinado</option>
<option value="321763997812353340348703173975">¹Yunes assinado - ¹Yunes assinado</option>
                                </select>
                            </div>
                                                            <div class="">
                                    <input type="checkbox" value="true" class="infraCheckbox" name="chkLocalizadoresSecundarios" id="chkLocalizadoresSecundarios" disabled="true" onclick="chkLocalizadoresSecundariosOnClick(this)">
                                    <label class="infraLabelObrigatorio" for="chkLocalizadoresSecundarios" id="lblLocalizadoresSecundarios" disabled="true">Incluir processo em outros localizadores</label>
                                    <div id="divLocalizadorSecundario" class="bootstrap-select w-100">
                                        <select id="selLocalizadorSecundario" name="selLocalizadorSecundario[]" multiple="multiple" class="w-100 infraSelect multipleSelect" disabled="true" data-actions-box="true" data-live-search="true" data-live-search-normalize="true" data-selected-text-format="count">
                                            <option value="321763997812353340348641297548">❗ERRO NA AUTOMAÇÃO ❗ - [AMR] Erro Automação</option>
<option value="321765322095166388287499870944">⇆ Triagem ⇆ - [AMR] Triagem</option>
<option value="321769438024006309480515412735">⚠️[RETIRAR DE PAUTA]⚠️ - ⚠️[RETIRAR DE PAUTA]⚠️</option>
<option value="321763997812353340348644606662">* adm./justiça/econ./fé púb./trib./orcrim/resp. * - * adm./justiça/econ./fé púb./trib./orcrim/resp. *</option>
<option value="321763997812353340348644595107">* amb./cons./ECA/honra/paz/preconceito * - * amb./cons./ECA/honra/paz/preconceito *</option>
<option value="321763997812353340348644595877">* armas/trânsito/outros * - * armas/trânsito/outros *</option>
<option value="321763997812353340348644594796">* dign. sexual * - * dign. sexual *</option>
<option value="321763997812353340348644595470">* exec. penal * - * exec. penal *</option>
<option value="321765894927640366818185323239">* habeas corpus * - * habeas corpus *</option>
<option value="321765894927640366818189429475">* mandado de segurança * - * mandado de segurança *</option>
<option value="321763997812353340348644596672">* originária/sigilo * - * originária/sigilo *</option>
<option value="321763997812353340348644597082">* patrimônio * - * patrimônio *</option>
<option value="321765894927640366818202416500">* rese * - * rese *</option>
<option value="321763997812353340348644597415">* tráfico * - * tráfico *</option>
<option value="321763997812353340348644593887">* vida/liberdade/pessoa * - * vida/liberdade/pessoa *</option>
<option value="321763997812353340348644607235">* viol. doméstica * - * viol. doméstica *</option>
<option value="321763997812353340348641292100">0. ag. cumprimento desp/dec - 0. ag. cumprimento desp/dec</option>
<option value="321763997812353340348641292420">0. ag. trânsito - 0. ag. trânsito</option>
<option value="321763997812353340348649937551">0. DCDP - Ag. Redistribuição - 0. DCDP - Ag. Redistribuição</option>
<option value="321763997812353340348641290463">0. DCDP - Ag. Revisão - 0. DCDP - Ag. Revisão</option>
<option value="321763997812353340348649937811">0. inf. óbito - [AMR] Informação de Óbito</option>
<option value="321763997812353340348644604954">1. Ação Rescisória - [AMR] Ação Rescisória</option>
<option value="321764580304141191329938721599">1. Admissibilidade - [AMR] Admissibilidade</option>
<option value="321763997812353340348644598419">1. Agravo de Instrumento - [AMR] Agravo de Instrumento</option>
<option value="321763997812353340348644598108">1. Agravo Interno - [AMR] Agravo Interno</option>
<option value="321763997812353340348644605660">1. Analisar Gratuidade - [AMR] Analisar Gratuidade</option>
<option value="321763997812353340348644607587">1. Conflito de Jurisdição - [AMR] Conflito de Jurisdição</option>
<option value="321763997812353340348644607918">1. Cooperadores - [AMR] Cooperadores</option>
<option value="321763997812353340348644605306">1. Devolvidos 2ª Vice - [AMR] Devolvidos 2ª Vice</option>
<option value="321763997812353340348644593327">1. Embargos de Declaração - [AMR] Embargos de Declaração</option>
<option value="321763997812353340348644608252">1. Homologação Acordo/Desistência - [AMR] Homologação de Acordo/Desistência</option>
<option value="321763997812353340348644591739">1. Incompetência - [AMR] Incompetência</option>
<option value="321763997812353340348644608798">1. Inicial - Agravo de Instrumento - [AMR] Inicial - Agravo de Instrumento</option>
<option value="321763997812353340348644612880">1. Julg. Monocrático - [AMR] Julgamento Monocrático</option>
<option value="321763997812353340348644613486">1. Não Conhecimento - [AMR] Não Conhecimento</option>
<option value="321763997812353340348644613186">1. Recebidos MP - [AMR] Recebidos MP</option>
<option value="321763997812353340348644590725">1. Retorno despacho/decisão - [AMR] Retorno despacho/decisão</option>
<option value="321763997812353340348641290816">1. Urgente 🔴 - 1. Urgente</option>
<option value="321764669184350019842826155181">2. acórdãos - ag. conferência - 2. acórdãos - ag. conferência</option>
<option value="321767889621726212567043193745">2. acórdãos - conferidos - 2. acórdãos - conferidos</option>
<option value="321767955189985457146787763954">2. devolvido para correção - 2. devolvido para correção</option>
<option value="321763997812353340348649940501">2. monocráticas - ag. assinatura - 2. monocráticas - ag. assinatura</option>
<option value="321763997812353340348649940245">2. monocráticas - ag. conferência - 2. monocráticas - ag. conferência</option>
<option value="321765421534210567367928528151">3. pautar - 3. pautar</option>
<option value="321765421534210567367925950754">4. acórdãos - assinatura pós-sessão - 4. acórdãos - assinatura pós-sessão</option>
<option value="321765421534210567367932053125">4. adiados - 4. adiados</option>
<option value="321763997812353340348649939119">4. para voto divergente - 4. para voto divergente</option>
<option value="321763997812353340348649938281">4. para voto-vista - 4. para voto-vista</option>
<option value="321763997812353340348649938050">4. pautados - 4. pautados</option>
<option value="321765421534210567367935059513">4. pedido de vista - 4. pedido de vista</option>
<option value="321763997812353340348649938515">4. relator p/ acórdão - 4. relator p/ acórdão</option>
<option value="321765421534210567367937027680">4. retirados de pauta - 4. retirados de pauta</option>
<option value="321765934125521599334937586858">&lt;&gt; Baixar em Diligência &lt;&gt; - [AMR] Baixar em Diligência</option>
<option value="321764543206809176417083033622">&lt;&gt; Contrarrazões &lt;&gt; - [AMR] Contrarrazões</option>
<option value="321764580304141191329859989191">&lt;&gt; Dativo - Nomear &lt;&gt; - [AMR] Dativo - Nomear</option>
<option value="321764543206809176417167681321">&lt;&gt; PGJ &lt;&gt; - [AMR] PGJ</option>
<option value="321764580304141191329834982617">&lt;&gt; Razões - constituir novo defensor &lt;&gt; - [AMR] Razões - constituir novo defensor</option>
<option value="321766158145092759625303977268">&lt;&gt; Razões &lt;&gt; - [AMR] Razões</option>
<option value="321766134174252360563249059927">&lt;&gt; Secretaria &lt;&gt; - [AMR] Secretaria</option>
<option value="321767275328932661495022786143">&lt;tt&gt;&lt;b&gt;[RÉU PRESO]&lt;/b&gt;&lt;/tt&gt; - &lt;tt&gt;&lt;b&gt;[RÉU PRESO]&lt;/b&gt;&lt;/tt&gt;</option>
<option value="321763991294517580217895332375">ACÓRDÃOS - ACÓRDÃOS</option>
<option value="321763991294517580217895332475">ADM-AJG requerida - ADM-AJG requerida</option>
<option value="321763991294517580217895332474">ADM-Deserção - ADM-Deserção</option>
<option value="321763991294517580217895332473">ADM-Tempestividade - ADM-Tempestividade</option>
<option value="321763991294517580217895332385">ADMINISTRATIVO - ADMINISTRATIVO</option>
<option value="321763991294517580217895332486">AG. DIGITALIZAÇÃO - AGUARDA DIGITALIZAÇÃO</option>
<option value="321763991294517580217895332489">AGRAVO - AGRAVO</option>
<option value="321763991294517580217895332497">ALV SOLT CUMPRIDO - ALVARÁ DE SOLTURA CUMPRIDO</option>
<option value="321763991294517580217895332496">ALV SOLT CUMPRIDO EM TERMOS - ALVARÁ DE SOLTURA CUMPRIDO EM TERMOS</option>
<option value="321763991294517580217895332495">ALV SOLT DEVOLVIDO - ALVARÁ DE SOLTURA DEVOLVIDO SEM CUMPRIMENTO</option>
<option value="321763991294517580217895332498">ALV SOLT INFORMAÇÃO - ALVARÁ DE SOLTURA INFORMAÇÃO</option>
<option value="321763991294517580217895332499">ALV SOLT LIDO - ALVARÁ DE SOLTURA LIDO</option>
<option value="321770066818483901493934333734">AMR - Ato Infracional - Ato Infracional</option>
<option value="321770066818483901493937467301">AMR - Correição Parcial - Correição Parcial</option>
<option value="321770385676294988228546517507">AMR PAUTAR - AMR PAUTAR</option>
<option value="321763991294517580217895332520">APRECIACAO_JUDIC - APRECIAÇÃO JUDICIAL</option>
<option value="321763991294517580217895332395">AR ENTREGUE - CARTA AR ENTREGUE</option>
<option value="321763991294517580217895332396">AR NÃO ENTREGUE - CARTA AR NÃO ENTREGUE</option>
<option value="321763991294517580217895332408">AUTUADOS - AUTUADOS</option>
<option value="321763997812353340348641293823">AUTUADOS-AI - AUTUADOS-AI</option>
<option value="321763997812353340348641294203">AUTUADOS-HC - AUTUADOS-HC</option>
<option value="321763997812353340348641294538">AUTUADOS-MS - AUTUADOS-MS</option>
<option value="321763991294517580217895332371">BAIXADOS - BAIXADOS</option>
<option value="321763991294517580217895332459">BAIXADOS-GAB - BAIXADOS-GAB</option>
<option value="321763991294517580217895332458">BENS A CADASTRAR - BENS A CADASTRAR</option>
<option value="321763991294517580217895332544">BNMP REC - BNMP RECEBIDOS</option>
<option value="321763991294517580217895332545">BNMP RGL - REGULARIZAR BNMP</option>
<option value="321763991294517580217895332456">CAMP - ÓBITOS - NEGATIVO - CAMP - ÓBITOS - NEGATIVO</option>
<option value="321763991294517580217895332454">CAMP - ÓBITOS - PESQUISAR - CAMP - ÓBITOS - PESQUISAR</option>
<option value="321763991294517580217895332455">CAMP - ÓBITOS - POSITIVO - CAMP - ÓBITOS - POSITIVO</option>
<option value="321763991294517580217895332457">CAMP - PESQUISAR ENDEREÇOS - CAMP - PESQUISAR ENDEREÇOS</option>
<option value="321763991294517580217895332397">CANCELAMENTO - VERIFICAR CANCELAMENTO EVENTO</option>
<option value="321763991294517580217895332501">CARTA AR ENVIADA - CARTA AR ENVIADA</option>
<option value="321763991294517580217895332531">CARTA AR PAGAMENTO CONFIRMADO - CARTA AR PAGAMENTO CONFIRMADO</option>
<option value="321763991294517580217895332532">CARTA AR PAGAMENTO NÃO REALIZADO - CARTA AR PAGAMENTO NÃO REALIZADO</option>
<option value="321763991294517580217895332505">CARTAS Pr Or Rog - CARTAS Pr Or Rog</option>
<option value="321763991294517580217895332415">Cessado Sobrestamento - Cessado Sobrestamento</option>
<option value="321763991294517580217895332465">CI NÃO PAGAS - CUSTAS INICIAIS NÃO PAGAS</option>
<option value="321763991294517580217895332463">CI PEND - CUSTAS INICIAIS PEND</option>
<option value="321763991294517580217895332508">CONCILIAÇÃO - CONCILIAÇÃO</option>
<option value="321763991294517580217895332403">CONCILIACAO_COM_ACOR - CONCILIACAO_COM_ACORDO</option>
<option value="321763991294517580217895332402">CONCILIACAO_INICIADA - CONCILIACAO INICIADA</option>
<option value="321763991294517580217895332404">CONCILIACAO_SEM_ACOR - CONCILIACAO_SEM_ACORDO</option>
<option value="321763991294517580217895332460">CONTADORIA - CONTADORIA</option>
<option value="321763991294517580217895332466">CR NÃO PAGAS - CUSTAS RECURSAIS NÃO PAGAS</option>
<option value="321763991294517580217895332464">CR PEND - CUSTAS RECURSAIS PEN</option>
<option value="321763991294517580217895332412">CUSTAS-PEND - CUSTAS PENDENTES</option>
<option value="321763991294517580217895332413">CUSTAS-VENC - CUSTAS VENCIDAS</option>
<option value="321763991294517580217895332485">DECURSO DE PRAZO - DECURSO DE PRAZO</option>
<option value="321763991294517580217895332540">DEPÓSITO JUDICIAL - DEPÓSITO JUDICIAL</option>
<option value="321763991294517580217895332414">Desp/Dec Cumpridos - Desp/Dec Cumpridos AGG</option>
<option value="321763991294517580217895332381">DESPACHOS - DESPACHOS</option>
<option value="321763991294517580217895332535">DEVOLVIDOS OFICIAL DE JUSTIÇA - DEVOLVIDOS OFICIAL DE JUSTIÇA</option>
<option value="321763991294517580217895332521">DILAÇÃO DE PRAZO PF - PEDIDO DE DILAÇÃO DE PRAZO PF</option>
<option value="321763991294517580217895332370">DISTRIBUÍDOS - DISTRIBUÍDOS</option>
<option value="321763991294517580217895332390">DISTRIBUÍDOS-AI - DISTRIBUÍDOS - AGRAVO DE INSTRUMENTO</option>
<option value="321763991294517580217895332391">DISTRIBUÍDOS-HC - DISTRIBUÍDOS - HABEAS CORPUS</option>
<option value="321763997812353340348641295613">DISTRIBUÍDOS-MS - DISTRIBUÍDOS-MS</option>
<option value="321763991294517580217895332515">DRTS - Processos na DRTS</option>
<option value="321763991294517580217895332410">EM DIGITALIZACAO - EM DIGITALIZACAO</option>
<option value="321763991294517580217895332487">EMBDEC - EMBARGOS DE DECLARAÇÃO</option>
<option value="321763991294517580217895332488">EMBINFR - EMBARGOS INFRINGENTES</option>
<option value="321763991294517580217895332547">ERRO_ALTERA_DADO - ERRO_ALTERA_DADO</option>
<option value="321765899267464367877994576840">ERRO_ENVIO_DOMICILIO_ELETRONICO - ERRO_ENVIO_DOMICILIO_ELETRONICO</option>
<option value="321763991294517580217895332546">ERRO_ENVIO_INTIMACAO_DJEN - ERRO_ENVIO_INTIMACAO_DJEN</option>
<option value="321763991294517580217895332394">ERRO_INTIMA_AUTOMATI - ERRO_INTIMA_AUTOMATICO</option>
<option value="321763991294517580217895332407">FÓRUM HABILITADO - FÓRUM HABILITADO</option>
<option value="321763991294517580217895332522">IMPEDIMENTOS - IMPEDIMENTOS</option>
<option value="321763991294517580217895332393">INSPEÇÃO - INSPEÇÃO</option>
<option value="321763991294517580217895332529">LAUDO COMPLEMENTAR - LAUDO COMPLEMENTAR</option>
<option value="321763991294517580217895332528">LAUDO INCAPAZ PERM - LAUDO INCAPAZ PERM</option>
<option value="321763991294517580217895332526">LAUDO INCAPAZ PRET - LAUDO INCAPAZ PRET</option>
<option value="321763991294517580217895332525">LAUDO INCAPAZ REDUZ - LAUDO INCAPAZ REDUZ</option>
<option value="321763991294517580217895332527">LAUDO INCAPAZ TEMP - LAUDO INCAPAZ TEMP</option>
<option value="321763991294517580217895332492">MAND CUMPRIDO - MANDADO CUMPRIDO</option>
<option value="321763991294517580217895332534">MAND CUMPRIDO HORA CERTA - MANDADO CUMPRIDO HORA CERTA</option>
<option value="321763991294517580217895332493">MAND PARC CUMPRIDO - MANDADO PARCIALMENTE CUMPRIDO</option>
<option value="321763991294517580217895332500">MAND PRISÃO INFORMAÇÃO - MANDADO DE PRISÃO INFORMAÇÃO</option>
<option value="321763991294517580217895332494">MAND SEM CUMPRIMENTO - MANDADO SEM CUMPRIMENTO</option>
<option value="321763991294517580217895332429">MG DESPACHOS CUMPRIDOS - MIGRADOS Despachos/Decisões Cumpridos</option>
<option value="321763991294517580217895332422">MIG ADIADOS - MIGRADOS ADIADOS</option>
<option value="321763991294517580217895332416">MIG AG. CUMP - MIGRADOS CONTROLE - Ag. Cumprimento Desp./Dec. Int</option>
<option value="321763991294517580217895332417">MIG AG. CUMP. DILIGÊNCIAS - MIGRADOS CONTROLE - Ag Cumprimento de Diligência</option>
<option value="321763991294517580217895332424">MIG AGRAVOS REDIST. CCE - MIGRADOS Agravos Redistribuídos/CCE</option>
<option value="321763991294517580217895332423">MIG AI DISTRIBUÍDOS - MIGRADOS Agravos Distribuídos</option>
<option value="321763991294517580217895332425">MIG ALVARÁ - MIGRADOS Alvará - Análise/Assinatura</option>
<option value="321763991294517580217895332426">MIG Cessado Sobrestamento - MIGRADOS Cessado Sobrestamento</option>
<option value="321763991294517580217895332427">MIG conclusos - MIGRADOS Conclusos</option>
<option value="321763991294517580217895332428">MIG Conclusos Relator Designad - MIGRADOS Conclusos Relator Designado</option>
<option value="321763991294517580217895332430">MIG Distribuídos - MIGRADOS Distribuídos</option>
<option value="321763991294517580217895332431">MIG Incidentes Distribuídos - MIGRADOS Incidentes Distribuídos</option>
<option value="321763991294517580217895332432">MIG Julgados - MIGRADOS Julgados</option>
<option value="321763991294517580217895332433">MIG Julgados Declaração de Vot - MIGRADOS Julgados Declaração de Voto</option>
<option value="321763991294517580217895332434">MIG Julgados Relator Designado - MIGRADOS Julgados Relator Designado</option>
<option value="321763991294517580217895332448">MIG Julgados Votos a Declarar - MIGRADOS Julgados Votos a Declarar</option>
<option value="321763991294517580217895332438">MIG Pedido de Pauta c/ Pendênc - MIGRADOS Pedido de Pauta c/ Pendências</option>
<option value="321763991294517580217895332446">MIG Pedido Inclusão em Pauta - MIGRADOS Pedido Inclusão em Pauta</option>
<option value="321763991294517580217895332437">MIG Pedidos de Vista - MIGRADOS Pedidos de Vista</option>
<option value="321763991294517580217895332445">MIG Pet Juntadas p/ Análise - MIGRADOS Petições Juntadas para Análise</option>
<option value="321763991294517580217895332440">MIG Presidente do Órgão Julgad - MIGRADOS Presidente do Órgão Julgador</option>
<option value="321763991294517580217895332442">MIG Proc p/ Análise do SECRET - MIGRADOS Processos para Análise do Sec. Jurídico</option>
<option value="321763991294517580217895332451">MIG Proc. p/ Juízo de retrataç - MIGRADOS Proc. Receb. para Juízo de Retratação</option>
<option value="321763991294517580217895332443">MIG Processos p/ Análise do Of - MIGRADOS Processos para Análise do Of. Gabinete</option>
<option value="321763991294517580217895332439">MIG Processos p/ Análise julga - MIGRADOS Processos para Análise do Julgador</option>
<option value="321763991294517580217895332435">MIG Processos Pautados - MIGRADOS Processos Pautados</option>
<option value="321763991294517580217895332449">MIG Processos Pautados em Mesa - MIGRADOS Processos Pautados em Mesa</option>
<option value="321763991294517580217895332453">MIG Recebidos em Substituição - MIGRADOS Recebidos em Substituição</option>
<option value="321763991294517580217895332450">MIG Redist. CCE - Liminar Anal - MIGRADOS Redist. CCE - Liminar Analisada</option>
<option value="321763991294517580217895332436">MIG Relator Ag. Análise Petiçã - MIGRADOS Relator Ag. Análise Petição - Pós Julg.</option>
<option value="321763991294517580217895332441">MIG Retirados de Pauta - MIGRADOS Retirados de Pauta</option>
<option value="321763991294517580217895332447">MIG Revisor Pedido de Pauta - MIGRADOS Revisor Pedido de Pauta</option>
<option value="321763991294517580217895332444">MIG SOBRESTADOS - MIGRADOS SOBRESTADOS</option>
<option value="321763991294517580217895332452">MIG Sobrestados - Petições Jun - MIGRADOS Sobrestados - Petições Juntadas</option>
<option value="321763991294517580217895332419">MIG suspensos - MIGRADOS CONTROLE - Processos Suspensos</option>
<option value="321763991294517580217895332418">MIG VISTA MAIS DE 10 - MIGRADOS CONTROLE - Presidente - Vista mais de 10</option>
<option value="321763991294517580217895332420">MIG VISTA OUTRO DES. - MIGRADOS CONTROLE - Vista a outro Desembargador</option>
<option value="321763991294517580217895332421">MIG VISTA PGJ APÓS DISTRIBUIÇÃ - MIGRADOS CONTROLE - Vista à PGJ após a Distribuiçã</option>
<option value="321763991294517580217895332467">MIGRADOS - MIGRADOS</option>
<option value="321763991294517580217895332468">MIGRADOS_SANEAMENTO - MIGRADOS_SANEAMENTO</option>
<option value="321763991294517580217895332517">MP TRIAGEM - MP TRIAGEM</option>
<option value="321763991294517580217895332405">NÃO BAIXAR/REMETER - NÃO BAIXAR/REMETER</option>
<option value="321763991294517580217895332481">P REVISÃO - PARA REVISÃO</option>
<option value="321763991294517580217895332491">PARA ACÓRDÃO - PARA ACÓRDÃO</option>
<option value="321763991294517580217895332490">PARECER MP - PARECER MP</option>
<option value="321763991294517580217895332518">PEDIDO ARQ. MP - PEDIDO ARQUIVAMENTO MP</option>
<option value="321763991294517580217895332519">PEDIDO DECL. COMP. - PEDIDO DECLINAÇÃO COMPETÊNCIA</option>
<option value="321763991294517580217895332401">PEDIDO_DIA_RELATOR - PEDIDO DE DIA PELO RELATOR</option>
<option value="321763991294517580217895332374">PEDIDO_DIA_REVISOR - PEDIDO DE DIA PELO REVISOR</option>
<option value="321763991294517580217895332482">PETIÇÃO - PETIÇÃO</option>
<option value="321763991294517580217895332470">PETIÇÃO INI CAUTELAR - PETIÇÃO INICIAL CAUTELAR</option>
<option value="321763991294517580217895332469">PETIÇÃO INICIAL MS - PETIÇÃO INICIAL MS</option>
<option value="321763991294517580217895332372">PI - DEPENDÊNCIA - PI - DEPENDÊNCIA</option>
<option value="321763991294517580217895332479">PLANTÃO - PLANTÃO</option>
<option value="321763991294517580217895332511">PRECATÓRIO - PRECATÓRIO</option>
<option value="321763991294517580217895332512">PRECAT_OUTROS_ORÇAM - PRECATÓRIO - OUTROS ORÇAMENTOS</option>
<option value="321763991294517580217895332477">PREV-AJG requerida - PREV-AJG requerida</option>
<option value="321763991294517580217895332386">PREVIDENCIÁRIO - PREVIDENCIÁRIO</option>
<option value="321763991294517580217895332533">PROC ADV - PROCURAÇÃO ADV</option>
<option value="321763997812353340348644598781">PROCESSOS 2020 - PROCESSOS 2020</option>
<option value="321763997812353340348644599112">PROCESSOS 2021 - PROCESSOS 2021</option>
<option value="321763997812353340348644599452">PROCESSOS 2022 - PROCESSOS 2022</option>
<option value="321763997812353340348644599757">PROCESSOS 2023 - PROCESSOS 2023</option>
<option value="321763991294517580217895332411">PROCESSOS P/DISTRIBUIR - PROCESSOS P/DISTRIBUIR</option>
<option value="321763991294517580217895332398">PRONTOS - BAIXA ACÓR - PRONTOS - BAIXA ACÓRDÃO</option>
<option value="321763991294517580217895332399">PRONTOS - BAIXA DECI - PRONTOS - BAIXA DECISÃO</option>
<option value="321763991294517580217895332400">PRONTOS - REMESSA DRTS - PRONTOS - REMESSA DRTS</option>
<option value="321763991294517580217895332409">PRONTOS PARA DIGITAL - PRONTOS PARA DIGITALIZAR</option>
<option value="321763991294517580217895332523">PRONTOS_REM_COMARCA - PRONTOS REMESSA COMARCA ORIGEM</option>
<option value="321763991294517580217895332373">REATIVADOS - REATIVADOS</option>
<option value="321763991294517580217895332406">REC DELEGADA - RECEBIDOS-DELEGADA</option>
<option value="321763991294517580217895332480">RECEBIDOS - RECEBIDOS</option>
<option value="321763991294517580217895332516">Recebidos da DRTS - Recebidos da DRTS</option>
<option value="321763991294517580217895332484">RECEBIDOS-DIL./CONC. - RECEBIDOS-DILIG./CONCIL.</option>
<option value="321763991294517580217895332383">RECEBIDOS-RELATOR - RECEBIDOS RELATOR ACÓRDÃO</option>
<option value="321763991294517580217895332472">RECURSO EXTRAORDINÁR - RECURSO EXTRAORDINÁRIO</option>
<option value="321763991294517580217895332530">REDIST - Assento Reg. 18/2018 - REDIST - Assento Reg. 18/2018</option>
<option value="321763991294517580217895332541">REGISTRO DE ÓBITO - REGISTRO DE ÓBITO</option>
<option value="321763991294517580217895332392">REMETIDOS - REMETIDOS</option>
<option value="321763991294517580217895332483">REMETIDOS EM DILIGÊNCIA - REMETIDOS EM DILIGÊNCIA</option>
<option value="321763991294517580217895332382">REMETIDOS-RELATOR - REMETIDOS RELATOR ACÓRDÃO</option>
<option value="321763991294517580217895332461">REQ - PAGA - BLOQUEADA - REQ - PAGA - BLOQUEADA</option>
<option value="321763991294517580217895332462">REQ - PAGA - LIBERADA - REQ - PAGA - LIBERADA</option>
<option value="321763991294517580217895332538">REQ - SUPERPREFERENCIAL - PAGA - BLOQUEADA - REQ - SUPERPREFERENCIAL - PAGA - BLOQUEADA</option>
<option value="321763991294517580217895332539">REQ - SUPERPREFERENCIAL - PAGA - LIBERADA - REQ - SUPERPREFERENCIAL - PAGA - LIBERADA</option>
<option value="321763991294517580217895332537">REQ - SUPERPREFERENCIAL - PROCESSADA - REQ - SUPERPREFERENCIAL - PROCESSADA</option>
<option value="321763991294517580217895332510">REQ_PAGAMENTO - REQUISIÇÕES DE PAGAMENTO</option>
<option value="321763991294517580217895332379">RESTRITO AO JUIZ - RESTRITO AO JUIZ</option>
<option value="321763991294517580217895332513">RPV - REQUISIÇÃO DE PEQUENO VALOR</option>
<option value="321763991294517580217895332514">RPV-JEF - REQUISIÇÃO DE PEQUENO VALOR - JEF</option>
<option value="321763991294517580217895332509">S/CONCILIAÇÃO - SEM CONCILIAÇÃO</option>
<option value="321763991294517580217895332524">SOBRESTADOS - SOBRESTADOS</option>
<option value="321763991294517580217895332548">SPC-INSERÇÃO - SPC-INSERÇÃO</option>
<option value="321763991294517580217895332549">SPC-RETIRADA - SPC-RETIRADA</option>
<option value="321763991294517580217895332536">STF-DIST - STF-Distribuídos</option>
<option value="321763991294517580217895332389">STF-RECEBIDOS - STF-RECEBIDOS</option>
<option value="321763991294517580217895332380">STF-REM - STF REMETIDOS</option>
<option value="321763991294517580217895332388">STJ-RECEBIDOS - STJ-RECEBIDOS</option>
<option value="321763991294517580217895332377">STJ-REM - STJ REMETIDOS</option>
<option value="321763991294517580217895332506">SUSPENSOS - PROCESSOS SUSPENSOS</option>
<option value="321763991294517580217895332507">SUSPENSOS-RETORNO - RETORNADOS DE SUSPENSÃO</option>
<option value="321763991294517580217895332504">TJSC-BAIXADOS Se/Cesp - TJSC-BAIXADOS Se/Cesp</option>
<option value="321763991294517580217895332503">TJSC-DECISÃO Se/Cesp - TJSC-DECISÃO Se/Cesp</option>
<option value="321763991294517580217895332502">TJSC-JULGADOS Se/CEsp - TJSC-JULGADOS Se/CEsp</option>
<option value="321763991294517580217895332476">TRIB-AJG requerida - TRIB-AJG requerida</option>
<option value="321763991294517580217895332384">TRIBUTÁRIO - TRIBUTÁRIO</option>
<option value="321763991294517580217895332471">UNIFORMIZAÇÃO DE JUR - UNIFORMIZAÇÃO JURISPRUDÊNCIA</option>
<option value="321763991294517580217895332478">URGENTE - URGENTE</option>
<option value="321763991294517580217895332376">VERIFICAR - VERIFICAR LOCALIZADOR</option>
<option value="321763991294517580217895332542">VERIFICAR ASSUNTO - VERIFICAR ASSUNTO</option>
<option value="321763991294517580217895332543">VERIFICAR PARTES - VERIFICAR PARTES</option>
<option value="321763991294517580217895332378">VERIFICAR PROCURADOR - VERIFICAR PROCURADOR/ENTIDADE</option>
<option value="321763991294517580217895332387">VISTA ADV PROCESSO - VISTA ADV PROCESSO</option>
<option value="321763997812353340348644590932">[+ 120] - [+ 120]</option>
<option value="321767275328932661495335051946">[+ 200] - [+ 200]</option>
<option value="321766282868765581048539974201">[+ 365] - [+ 365]</option>
<option value="321763997812353340348644591539">[META 10] - [META 10]</option>
<option value="321763997812353340348644591133">[META 2] - [META 2]</option>
<option value="321763997812353340348644591354">[META 6] - [META 6]</option>
<option value="321763997812353340348644613884">[] Alexandre - [AMR] Alexandre</option>
<option value="321763997812353340348644614214">[] AMR - [AMR] AMR</option>
<option value="321767630362011201730334725995">[] AMR - Fazendo - AMR - Fazendo</option>
<option value="321767630362011201739774582650">[] AMR - VIDE - AMR - VIDE</option>
<option value="321763997812353340348644614555">[] Andreia - [AMR] Andreia</option>
<option value="321763997812353340348644614869">[] Andrezza - [AMR] Andrezza</option>
<option value="321763997812353340348649963626">[] Bianca - [AMR] Bianca</option>
<option value="321763997812353340348644615522">[] Bruna - [AMR] Bruna</option>
<option value="321763997812353340348644615817">[] Camila - [AMR] Camila</option>
<option value="321763997812353340348644616110">[] Clarice - [AMR] Clarice</option>
<option value="321763997812353340348644616429">[] Cláudia - [AMR] Cláudia</option>
<option value="321763997812353340348644616719">[] Condá - [AMR] Condá</option>
<option value="321763997812353340348644617378">[] Erick - [AMR] Erick</option>
<option value="321763997812353340348644618750">[] Gabriella - [AMR] Gabriella</option>
<option value="321763997812353340348644615213">[] Lucas - [AMR] Lucas</option>
<option value="321763997812353340348644617068">[] Luiza - [AMR] Luiza</option>
<option value="321763997812353340348644619530">[] Matheus - [AMR] Matheus</option>
<option value="321763997812353340348644619882">[] Salésio - [AMR] Salésio</option>
<option value="321763997812353340348644617706">[] Susane - [AMR] Susane</option>
<option value="321763997812353340348644619131">[] Thalita - [AMR] Thalita</option>
<option value="321763997812353340348644618097">[] Vitória - [AMR] Vitória</option>
<option value="321763997812353340348644618444">[] Yunes - [AMR] Yunes</option>
<option value="321763997812353340348703167905">¹Alexandre assinado - ¹Alexandre assinado</option>
<option value="321763997812353340348703168805">¹Andrezza assinado - ¹Andrezza assinado</option>
<option value="321763997812353340348649939781">¹Bianca assinado - ¹Bianca assinado</option>
<option value="321763997812353340348703177030">¹Camila assinado - ¹Camila assinado</option>
<option value="321763997812353340348703166919">¹Cláudia assinado - ¹Cláudia assinado</option>
<option value="321763997812353340348703169658">¹Condá assinado - ¹Condá assinado</option>
<option value="321763997812353340348703176250">¹Erick assinado - ¹Erick assinado</option>
<option value="321763997812353340348703170550">¹Gabriella assinado - ¹Gabriella assinado</option>
<option value="321763997812353340348703175515">¹Lucas assinado - ¹Lucas assinado</option>
<option value="321763997812353340348703174749">¹Matheus assinado - ¹Matheus assinado</option>
<option value="321763997812353340348703171536">¹Salésio assinado - ¹Salésio assinado</option>
<option value="321763997812353340348703172341">¹Susane assinado - ¹Susane assinado</option>
<option value="321763997812353340348703173168">¹Vitória assinado - ¹Vitória assinado</option>
<option value="321763997812353340348703173975">¹Yunes assinado - ¹Yunes assinado</option>
                                        </select>
                                    </div>
                                </div>
                                                        </div>
                                </div>
                    </div>
        <div>
            <input type="checkbox" name="chkAlterarLocalizadoresAberto" onclick="manterInfoAdicionalAberto(this);" class="infraCheckbox" id="chkAlterarLocalizadoresAberto" checked="checked">
            <small id="lblAlterarLocalizadoresAberto" class="text-muted" for="chkAlterarLocalizadoresAberto">Manter Gerenciar Localizadores Aberto</small>
                    </div>
        <br>
    </fieldset>

    <script type="text/javascript">
        selecionaCheckLocalizadores(true);
    </script>
    <fieldset id="fldAcoes" class="infraFieldset mb-2"><legend class="infraLegendObrigatorio">Ações</legend><center><a class="infraButton mr-1 mb-1 btn-primary" href="javascript:validarAcao('alterar');void(0);">Alterar Localizador</a><a class="infraButton mr-1 mb-1" href="javascript:validarAcao('citacao');void(0);">Citação em Bloco</a><a class="infraButton mr-1 mb-1" href="javascript:validarAcao('criar_minutas');void(0);">Criar Minutas em Lote</a><a class="infraButton mr-1 mb-1" href="javascript:validarAcao('incluir_lembretes');void(0);">Incluir Lembretes em Bloco</a><a class="infraButton mr-1 mb-1" href="javascript:validarAcao('incluir_processos_sessao');void(0);">Incluir em Pauta/Mesa</a><a class="infraButton mr-1 mb-1" href="javascript:validarAcao('gerenciamento_partes_buscar');void(0);">Inclusão de Partes em Bloco</a><a class="infraButton mr-1 mb-1" href="javascript:validarAcao('intimacao');void(0);">Intimação em Bloco</a><a class="infraButton mr-1 mb-1" href="javascript:validarAcao('movimentacao');void(0);">Movimentação em Bloco</a><a class="infraButton mr-1 mb-1" href="javascript:validarAcao('aps');void(0);">Requisição CEAB/DJ em bloco</a><a class="infraButton mr-1 mb-1" href="javascript:validarAcao('temas_repetitivos_em_bloco');void(0);">Temas Repetitivos em Bloco</a><a class="infraButton mr-1 mb-1" href="javascript:validarAcao('verificar_impedimentos');void(0);">Verificar Impedimentos</a></center></fieldset>            <nav class="infraAreaPaginacao mt-0" id="divInfraAreaPaginacaoSuperior">
                <ul class="pagination pagination-sm justify-content-center mb-1">
                                        <li class="page-item disabled" disabled="disabled" id="lnkInfraPrimeiraPaginaSuperior">
                        <a href="javascript:void(0);" class="page-link pl-1 pr-1" title="Primeira Página" aria-label="Primeira Página" tabindex="0"><i aria-hidden="true" class="material-icons icon-aligned">first_page</i></a>
                    </li>
                                        <li class="page-item disabled" disabled="disabled" id="lnkInfraPaginaAnteriorSuperior">
                        <a href="javascript:void(0);" class="page-link pl-1 pr-1" title="Página Anterior" aria-label="Página Anterior" tabindex="0"><i aria-hidden="true" class="material-icons icon-aligned">navigate_before</i></a>
                    </li>
                                                <li class="page-item">
                                <div class="dropdown bootstrap-select form-control form-control-sm page-link"><select data-style="btn-primary" class="selectpicker form-control form-control-sm page-link" data-custom-title-format="{0} de {1}" id="selInfraPaginacaoSuperior" onchange="infraAcaoPaginar('=',this.value,'Infra', null);" tabindex="0">
                                    <option value="0" selected="selected">1</option>

<option value="1">2</option>

                                </select><button type="button" tabindex="-1" class="dropdown-toggle btn-primary" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" data-id="selInfraPaginacaoSuperior" title="1"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">1 de 2</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-1" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                            </li>
                            <script>
                                $(function (){
                                 $("#selInfraPaginacaoSuperior").selectpicker();
                                    infraBS4SelectAtivarPaginacao("#selInfraPaginacaoSuperior");
                                });
                            </script>
                                        <li class="page-item " id="lnkInfraProximaPaginaSuperior">
                        <a href="javascript:void(0);" class="page-link pl-1 pr-1" onclick="infraAcaoPaginar('+',0,'Infra', null);" title="Próxima Página" aria-label="Próxima Página" tabindex="0"><i aria-hidden="true" class="material-icons icon-aligned">navigate_next</i></a>
                    </li>
                                        <li class="page-item disabled" disabled="disabled" id="lnkInfraUltimaPaginaSuperior">
                        <a href="javascript:void(0);" class="page-link pl-1 pr-1" title="Última Página" aria-label="Última Página" tabindex="0"><i aria-hidden="true" class="material-icons icon-aligned">last_page</i></a>
                    </li>
                </ul>
            </nav><div id="divInfraAreaTabela" class="infraAreaTabela">

<div name="divLinkAbreEmAbas" id="divLinkAbreEmAbas" style="margin:0.5em 0px"><a href="#" onclick="abreProcessosSelecionadosEmAbas();" title="Permite que, ao clicar, todos os processos que estejam selecionados sejam abertos em novas abas (um em cada aba). O bloqueador de pop-ups deve estar desativado. Obs.: Se você não quiser que esse link apareça nas listagens de processos, você pode desativá-lo em &quot;Configurações Personalizadas&quot;.">Abrir os processos selecionados em abas/janelas</a></div><table width="99%" id="tabelaLocalizadores" class="infraTable" summary="Tabela de Processos por Localizador.">
<caption class="infraCaption p-0 mb-1">Lista de Processos por Localizador (72 registros - 1 a 50):</caption><tbody><tr><th class="infraTh" width="1%"><a href="javascript:void(0);" id="lnkInfraCheck" onclick="infraSelecaoMultipla('Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();" tabindex="0"><img src="infra_css/imagens/check.gif" id="imgInfraCheck" title="Selecionar Tudo" alt="Selecionar Tudo" class="infraImg"></a></th>
<th class="infraTh">
<table class="infraTableOrdenacao">
<tbody><tr class="infraTrOrdenacao">
<td width="1%" class="infraTdSetaOrdenacao"><a role="button" type="button" aria-description="Ordenar Coluna Número Processo Ascendente" href="javascript:void(0);" onclick="infraAcaoOrdenar('NumProcesso','ASC','Infra',null);" tabindex="0"><img aria-hidden="true" src="infra_css/imagens/seta_acima.gif" title="Ordenar Número Processo Ascendente" alt="Ordenar Número Processo Ascendente" class="infraImgOrdenacao"></a></td>
<td rowspan="2" valign="center" class="infraTdRotuloOrdenacao">Número Processo</td>
</tr>
<tr class="infraTrOrdenacao">
<td class="infraTdSetaOrdenacao"><a role="button" type="button" aria-description="Ordenar Coluna Número Processo Descendente" href="javascript:void(0);" onclick="infraAcaoOrdenar('NumProcesso','DESC','Infra',null);" tabindex="0"><img aria-hidden="true" src="infra_css/imagens/seta_abaixo.gif" title="Ordenar Número Processo Descendente" alt="Ordenar Número Processo Descendente" class="infraImgOrdenacao"></a></td></tr>
</tbody></table>

</th>
<th class="infraTh">
<table class="infraTableOrdenacao">
<tbody><tr class="infraTrOrdenacao">
<td width="1%" class="infraTdSetaOrdenacao"><a role="button" type="button" aria-description="Ordenar Coluna Data de Autuação Ascendente" href="javascript:void(0);" onclick="infraAcaoOrdenar('Autuacao','ASC','Infra',null);" tabindex="0"><img aria-hidden="true" src="infra_css/imagens/seta_acima_selecionada.gif" title="Ordenar Data de Autuação Ascendente" alt="Ordenar Data de Autuação Ascendente" class="infraImgOrdenacao"></a></td>
<td rowspan="2" valign="center" class="infraTdRotuloOrdenacao">Data de Autuação</td>
</tr>
<tr class="infraTrOrdenacao">
<td class="infraTdSetaOrdenacao"><a role="button" type="button" aria-description="Ordenar Coluna Data de Autuação Descendente" href="javascript:void(0);" onclick="infraAcaoOrdenar('Autuacao','DESC','Infra',null);" tabindex="0"><img aria-hidden="true" src="infra_css/imagens/seta_abaixo.gif" title="Ordenar Data de Autuação Descendente" alt="Ordenar Data de Autuação Descendente" class="infraImgOrdenacao"></a></td></tr>
</tbody></table>

</th>
<th class="infraTh">
<table class="infraTableOrdenacao">
<tbody><tr class="infraTrOrdenacao">
<td width="1%" class="infraTdSetaOrdenacao"><a role="button" type="button" aria-description="Ordenar Coluna Nº Dias Situação Ascendente" href="javascript:void(0);" onclick="infraAcaoOrdenar('DiasProcessoSituacao','ASC','Infra',null);" tabindex="0"><img aria-hidden="true" src="infra_css/imagens/seta_acima.gif" title="Ordenar Nº Dias Situação Ascendente" alt="Ordenar Nº Dias Situação Ascendente" class="infraImgOrdenacao"></a></td>
<td rowspan="2" valign="center" class="infraTdRotuloOrdenacao">Nº Dias Situação</td>
</tr>
<tr class="infraTrOrdenacao">
<td class="infraTdSetaOrdenacao"><a role="button" type="button" aria-description="Ordenar Coluna Nº Dias Situação Descendente" href="javascript:void(0);" onclick="infraAcaoOrdenar('DiasProcessoSituacao','DESC','Infra',null);" tabindex="0"><img aria-hidden="true" src="infra_css/imagens/seta_abaixo.gif" title="Ordenar Nº Dias Situação Descendente" alt="Ordenar Nº Dias Situação Descendente" class="infraImgOrdenacao"></a></td></tr>
</tbody></table>

</th>
<th class="infraTh">
<table class="infraTableOrdenacao">
<tbody><tr class="infraTrOrdenacao">
<td width="1%" class="infraTdSetaOrdenacao"><a role="button" type="button" aria-description="Ordenar Coluna Classe Ascendente" href="javascript:void(0);" onclick="infraAcaoOrdenar('DesClasseClasseJudicial','ASC','Infra',null);" tabindex="0"><img aria-hidden="true" src="infra_css/imagens/seta_acima.gif" title="Ordenar Classe Ascendente" alt="Ordenar Classe Ascendente" class="infraImgOrdenacao"></a></td>
<td rowspan="2" valign="center" class="infraTdRotuloOrdenacao">Classe</td>
</tr>
<tr class="infraTrOrdenacao">
<td class="infraTdSetaOrdenacao"><a role="button" type="button" aria-description="Ordenar Coluna Classe Descendente" href="javascript:void(0);" onclick="infraAcaoOrdenar('DesClasseClasseJudicial','DESC','Infra',null);" tabindex="0"><img aria-hidden="true" src="infra_css/imagens/seta_abaixo.gif" title="Ordenar Classe Descendente" alt="Ordenar Classe Descendente" class="infraImgOrdenacao"></a></td></tr>
</tbody></table>

</th>
<th class="infraTh">
<table class="infraTableOrdenacao">
<tbody><tr class="infraTrOrdenacao">
<td width="1%" class="infraTdSetaOrdenacao"><a role="button" type="button" aria-description="Ordenar Coluna Assunto Ascendente" href="javascript:void(0);" onclick="infraAcaoOrdenar('DesAssuntoAssuntoJudicial','ASC','Infra',null);" tabindex="0"><img aria-hidden="true" src="infra_css/imagens/seta_acima.gif" title="Ordenar Assunto Ascendente" alt="Ordenar Assunto Ascendente" class="infraImgOrdenacao"></a></td>
<td rowspan="2" valign="center" class="infraTdRotuloOrdenacao">Assunto</td>
</tr>
<tr class="infraTrOrdenacao">
<td class="infraTdSetaOrdenacao"><a role="button" type="button" aria-description="Ordenar Coluna Assunto Descendente" href="javascript:void(0);" onclick="infraAcaoOrdenar('DesAssuntoAssuntoJudicial','DESC','Infra',null);" tabindex="0"><img aria-hidden="true" src="infra_css/imagens/seta_abaixo.gif" title="Ordenar Assunto Descendente" alt="Ordenar Assunto Descendente" class="infraImgOrdenacao"></a></td></tr>
</tbody></table>

</th>
<th class="infraTh" width="15%">Autores Principais</th>
<th class="infraTh" width="15%">Réus Principais</th>
<th class="infraTh">
<table class="infraTableOrdenacao">
<tbody><tr class="infraTrOrdenacao">
<td width="1%" class="infraTdSetaOrdenacao"><a role="button" type="button" aria-description="Ordenar Coluna Localizadores  Ascendente" href="javascript:void(0);" onclick="infraAcaoOrdenar('SigLocalizadorLocalizadorOrgao','ASC','Infra',null);" tabindex="0"><img aria-hidden="true" src="infra_css/imagens/seta_acima.gif" title="Ordenar Localizadores  Ascendente" alt="Ordenar Localizadores  Ascendente" class="infraImgOrdenacao"></a></td>
<td rowspan="2" valign="center" class="infraTdRotuloOrdenacao">Localizadores </td>
</tr>
<tr class="infraTrOrdenacao">
<td class="infraTdSetaOrdenacao"><a role="button" type="button" aria-description="Ordenar Coluna Localizadores  Descendente" href="javascript:void(0);" onclick="infraAcaoOrdenar('SigLocalizadorLocalizadorOrgao','DESC','Infra',null);" tabindex="0"><img aria-hidden="true" src="infra_css/imagens/seta_abaixo.gif" title="Ordenar Localizadores  Descendente" alt="Ordenar Localizadores  Descendente" class="infraImgOrdenacao"></a></td></tr>
</tbody></table>

</th>
<th class="infraTh" width="9%">Último Lembrete</th>
<th class="infraTh">
<table class="infraTableOrdenacao">
<tbody><tr class="infraTrOrdenacao">
<td width="1%" class="infraTdSetaOrdenacao"><a role="button" type="button" aria-description="Ordenar Coluna Último Evento Ascendente" href="javascript:void(0);" onclick="infraAcaoOrdenar('EventoProcessoEvento','ASC','Infra',null);" tabindex="0"><img aria-hidden="true" src="infra_css/imagens/seta_acima.gif" title="Ordenar Último Evento Ascendente" alt="Ordenar Último Evento Ascendente" class="infraImgOrdenacao"></a></td>
<td rowspan="2" valign="center" class="infraTdRotuloOrdenacao">Último Evento</td>
</tr>
<tr class="infraTrOrdenacao">
<td class="infraTdSetaOrdenacao"><a role="button" type="button" aria-description="Ordenar Coluna Último Evento Descendente" href="javascript:void(0);" onclick="infraAcaoOrdenar('EventoProcessoEvento','DESC','Infra',null);" tabindex="0"><img aria-hidden="true" src="infra_css/imagens/seta_abaixo.gif" title="Ordenar Último Evento Descendente" alt="Ordenar Último Evento Descendente" class="infraImgOrdenacao"></a></td></tr>
</tbody></table>

</th>
<th class="infraTh">
<table class="infraTableOrdenacao">
<tbody><tr class="infraTrOrdenacao">
<td width="1%" class="infraTdSetaOrdenacao"><a role="button" type="button" aria-description="Ordenar Coluna Intimação CEAB/DJ Ascendente" href="javascript:void(0);" onclick="infraAcaoOrdenar('DesTipoIntimacaoCEAB','ASC','Infra',null);" tabindex="0"><img aria-hidden="true" src="infra_css/imagens/seta_acima.gif" title="Ordenar Intimação CEAB/DJ Ascendente" alt="Ordenar Intimação CEAB/DJ Ascendente" class="infraImgOrdenacao"></a></td>
<td rowspan="2" valign="center" class="infraTdRotuloOrdenacao">Intimação CEAB/DJ</td>
</tr>
<tr class="infraTrOrdenacao">
<td class="infraTdSetaOrdenacao"><a role="button" type="button" aria-description="Ordenar Coluna Intimação CEAB/DJ Descendente" href="javascript:void(0);" onclick="infraAcaoOrdenar('DesTipoIntimacaoCEAB','DESC','Infra',null);" tabindex="0"><img aria-hidden="true" src="infra_css/imagens/seta_abaixo.gif" title="Ordenar Intimação CEAB/DJ Descendente" alt="Ordenar Intimação CEAB/DJ Descendente" class="infraImgOrdenacao"></a></td></tr>
</tbody></table>

</th>
<th class="infraTh">
<table class="infraTableOrdenacao">
<tbody><tr class="infraTrOrdenacao">
<td width="1%" class="infraTdSetaOrdenacao"><a role="button" type="button" aria-description="Ordenar Coluna Inclusão no localizador Ascendente" href="javascript:void(0);" onclick="infraAcaoOrdenar('DthInclusaoProcessoLocalizador','ASC','Infra',null);" tabindex="0"><img aria-hidden="true" src="infra_css/imagens/seta_acima.gif" title="Ordenar Inclusão no localizador Ascendente" alt="Ordenar Inclusão no localizador Ascendente" class="infraImgOrdenacao"></a></td>
<td rowspan="2" valign="center" class="infraTdRotuloOrdenacao">Inclusão no localizador</td>
</tr>
<tr class="infraTrOrdenacao">
<td class="infraTdSetaOrdenacao"><a role="button" type="button" aria-description="Ordenar Coluna Inclusão no localizador Descendente" href="javascript:void(0);" onclick="infraAcaoOrdenar('DthInclusaoProcessoLocalizador','DESC','Infra',null);" tabindex="0"><img aria-hidden="true" src="infra_css/imagens/seta_abaixo.gif" title="Ordenar Inclusão no localizador Descendente" alt="Ordenar Inclusão no localizador Descendente" class="infraImgOrdenacao"></a></td></tr>
</tbody></table>

</th>
</tr>
<tr class="infraTrClara" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321743610677181999652557412820|321770886563244135556016051422|50006426120248240046" name="ID-321743610677181999652557412820|321770886563244135556016051422|50006426120248240046"></a><input class="infraCheckbox" id="chkInfraItem0" name="chkInfraItem0" tabindex="0" title="" type="checkbox" value="321743610677181999652557412820|321770886563244135556016051422|50006426120248240046" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50006426120248240046&amp;operador=ou&amp;hash=5e38e9615df11dfe210722b435675eec" target="">5000642-61.2024.8.24.0046</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 12/02/2026 19:29:25&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;03/03/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br><label class="text-danger">Segredo de Justiça (Nível 1)</label></td><td> 02/04/2025 17:52:21</td><td align="center">319</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span></td><td>Ameaça (Criminal)</td><td>IVAN ALBUQUERQUE<br>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA</td><td>OS MESMOS</td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321764669184350019842826155181">2. acórdãos - ag. conferência <a class="memoLocalizadorOrgao321764669184350019842826155181" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321764669184350019842826155181&amp;hash=9862f7dcd935bac15ab64e7bf20a6999')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>03/03/2026</button></td><td>13/02/2026 17:03:08<br>Intimação Eletrônica - Expedida/Certificada - Pauta</td><td> </td><td>12/02/2026 19:26:51</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321748365288444492629388238315|321770629484284422409304314724|50037596120248240078" name="ID-321748365288444492629388238315|321770629484284422409304314724|50037596120248240078"></a><input class="infraCheckbox" id="chkInfraItem1" name="chkInfraItem1" tabindex="0" title="" type="checkbox" value="321748365288444492629388238315|321770629484284422409304314724|50037596120248240078" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50037596120248240078&amp;operador=ou&amp;hash=1d9212e02c905994e724f1e336232bd1" target="">5003759-61.2024.8.24.0078</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;6&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 09/02/2026 20:41:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;5&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 01/01/2026 19:34:03&lt;/td&gt;&lt;td&gt;&lt;b&gt;Apelante&lt;/b&gt;: Cleber Henrique da Rosa Sartor&lt;p&gt;&lt;br/&gt;&lt;b&gt;Ação&lt;/b&gt;: Ação penal pública incondicionada&lt;p&gt;&lt;br/&gt;&lt;b&gt;Objeto do Recurso&lt;/b&gt;: Sentença que condenou o apelante à pena de 25 anos de reclusão e 12 dias-multa pela prática do crime de latrocínio (art. 157, § 3º, II, do Código Penal)&lt;p&gt;&lt;br/&gt;&lt;b&gt;Pedidos&lt;/b&gt;: reconhecimento da ilicitude da prova digital obtida do celular e desentranhamento dos elementos derivados, com absolvição (art. 386, II, CPP); reconhecimento da quebra da cadeia de custódia do celular, com nulidade das provas e absolvição; desclassificação do crime de latrocínio para homicídio simples, com remessa ao Tribunal do Júri; ajuste da fração de aumento na primeira fase da dosimetria para 1/3; reconhecimento da atenuante da confissão espontânea; revisão da prisão preventiva com substituição por medidas cautelares diversas; concessão da gratuidade da justiça; fixação de honorários advocatícios à defesa dativa&lt;p&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;4&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 01/01/2026 19:34:01&lt;/td&gt;&lt;td&gt;&lt;b&gt;Apelantes&lt;/b&gt;: Erika Regina Soratto e Evelin Soratto&lt;p&gt;&lt;br/&gt;&lt;b&gt;Ação&lt;/b&gt;: Ação penal pública incondicionada&lt;p&gt;&lt;br/&gt;&lt;b&gt;Objeto do Recurso&lt;/b&gt;: Sentença que condenou o réu à pena de 25 anos de reclusão e 12 dias-multa pela prática do crime de latrocínio consumado (art. 157, § 3º, II, do Código Penal), reconhecendo crime único&lt;p&gt;&lt;br/&gt;&lt;b&gt;Pedidos&lt;/b&gt;: reforma da sentença para afastar o reconhecimento de crime único; condenação do réu também pelo crime de roubo majorado na forma tentada (art. 157, § 2º, II e § 2º-A, I, c/c art. 14, II, do Código Penal), em concurso material com o latrocínio&lt;p&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 01/01/2026 19:33:58&lt;/td&gt;&lt;td&gt;&lt;b&gt;Apelante&lt;/b&gt;: Ministério Público do Estado de Santa Catarina&lt;p&gt;&lt;br/&gt;&lt;b&gt;Ação&lt;/b&gt;: Ação penal pública incondicionada&lt;p&gt;&lt;br/&gt;&lt;b&gt;Objeto do Recurso&lt;/b&gt;: Sentença que condenou o réu à pena de 25 anos de reclusão pelo crime de latrocínio consumado, reconhecendo crime único&lt;p&gt;&lt;br/&gt;&lt;b&gt;Pedidos&lt;/b&gt;: reforma da sentença para reconhecer a existência de crimes distintos; condenação do réu também pelo crime de roubo majorado tentado (art. 157, § 2º, II e § 2º-A, I, c/c art. 14, II, do Código Penal), em concurso material com o latrocínio&lt;p&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 01/01/2026 19:33:53&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#1b6b3a;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;&gt;DEFENSOR DATIVO&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandre.morais.rosa - 19/12/2025 20:04:37&lt;/td&gt;&lt;td&gt;Extinta punibilidade&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br><label class="text-danger">Segredo de Justiça (Nível 1)</label></td><td> 27/05/2025 14:01:28</td><td align="center">264</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Latrocínio</td><td>CLEBER HENRIQUE DA ROSA SARTOR<br>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA</td><td>OS MESMOS<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644597082">* patrimônio * <a class="memoLocalizadorOrgao321763997812353340348644597082" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644597082&amp;hash=c7bec21bc5d2f5fbf83a49d0961fcaf2')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767275328932661495022786143"><tt><b>[RÉU PRESO]</b></tt> <a class="memoLocalizadorOrgao321767275328932661495022786143" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767275328932661495022786143&amp;hash=94944512b4fc39cfe59563334a274408')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767275328932661495335051946">[+ 200] <a class="memoLocalizadorOrgao321767275328932661495335051946" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767275328932661495335051946&amp;hash=94caf39c8b111ab90f6c37efb1af2f16')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767630362011201739774582650">[] AMR - VIDE <a class="memoLocalizadorOrgao321767630362011201739774582650" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767630362011201739774582650&amp;hash=27bbacf50175aa89f76cc0b9a6354e6a')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>09/02/2026 20:41:08<br>Incluído em mesa para julgamento</td><td> </td><td>09/02/2026 20:41:08</td></tr>
<tr class="infraTrClara" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321737476896232515029001093009|321770886563244135556019609295|50032058820218240060" name="ID-321737476896232515029001093009|321770886563244135556019609295|50032058820218240060"></a><input class="infraCheckbox" id="chkInfraItem2" name="chkInfraItem2" tabindex="0" title="" type="checkbox" value="321737476896232515029001093009|321770886563244135556019609295|50032058820218240060" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50032058820218240060&amp;operador=ou&amp;hash=1da25c1622c917bbaec853cf885b6048" target="">5003205-88.2021.8.24.0060</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 12/02/2026 19:29:25&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;03/03/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 04/06/2025 16:39:19</td><td align="center">256</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span></td><td>Homicídio Simples (Criminal)</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br>TAIZA PAULINO</td><td></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321764669184350019842826155181">2. acórdãos - ag. conferência <a class="memoLocalizadorOrgao321764669184350019842826155181" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321764669184350019842826155181&amp;hash=9862f7dcd935bac15ab64e7bf20a6999')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>03/03/2026</button></td><td>13/02/2026 17:03:08<br>Intimação Eletrônica - Expedida/Certificada - Pauta</td><td> </td><td>12/02/2026 19:27:25</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321750437650937220798056384898|321769773521177763728298126979|50082423120248240080" name="ID-321750437650937220798056384898|321769773521177763728298126979|50082423120248240080"></a><input class="infraCheckbox" id="chkInfraItem3" name="chkInfraItem3" tabindex="0" title="" type="checkbox" value="321750437650937220798056384898|321769773521177763728298126979|50082423120248240080" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50082423120248240080&amp;operador=ou&amp;hash=05dc268fa70b18339453986ba4509063" target="">5008242-31.2024.8.24.0080</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;SECJE - 27/11/2025 15:57:47&lt;/td&gt;&lt;td&gt;A. COMPETÊNCIA TJ – OK&lt;br/&gt;&lt;br/&gt;B. Réu(s) condenado(s)? Qual(is) crime(s)? – JULIANA FELICIANO DOS SANTOS: artigo 33, caput, da Lei n. 11.343/2006, artigo 329, caput, do Código Penal e artigo 129, § 12, do mesmo Codex. (Evento 153, SENT1)&lt;br/&gt;&lt;br/&gt;C. Pena para cada delito –  9 (nove) anos, 8 (oito) meses e 20 (vinte) dias de reclusão e 10 (dez) meses e 14 (quatorze) dias de detenção +  972 (novecentos e setenta e dois) dias-multa. (Evento 153, SENT1)&lt;br/&gt;&lt;br/&gt;D. Regime prisional – Fechado. (Evento 153, SENT1)&lt;br/&gt;&lt;br/&gt;E. Parecer PGJ – Pelo conhecimento e desprovimento do recurso. (Evento 29, PROMOÇÃO1)&lt;br/&gt;&lt;br/&gt;F. Contrarrazões – MP. (Evento 25, PROMOÇÃO1)&lt;br/&gt;&lt;br/&gt;G. Interposição e Razões do recurso – Interposição (Evento 163, RAZAPELA1) e Razões (Evento 18, RAZAPELA1).&lt;br/&gt;&lt;br/&gt;H. Tempestividade – Tempestivo.&lt;br/&gt;&lt;br/&gt;I. Regularidade da representação (Procuração) – Constituído. (Evento 102, PROC1)&lt;br/&gt;&lt;br/&gt;J. Intimação da sentença do Defensor – Sim. (Evento 155, não gerou doc.)&lt;br/&gt;&lt;br/&gt;K. Intimação da sentença do Réu – Sim. (Evento 166, CERT1)&lt;br/&gt;&lt;br/&gt;L. Intimação do Assistente de acusação – ###&lt;br/&gt;&lt;br/&gt;M. Intimação da sentença do MP – Sim. (Evento 156, não gerou doc.)&lt;br/&gt;&lt;br/&gt;N. Data do fato –  Desde o dia 1º de novembro de 2024 (sexta-feira) até o dia 4 de novembro de 2024. (Evento 1, DENUNCIA1)&lt;br/&gt;&lt;br/&gt;O. Data do Recebimento da denúncia – 4/12/2024. (Evento 3, DESPADEC1)&lt;br/&gt;&lt;br/&gt;P. Data da pronúncia (Júri) – ###&lt;br/&gt;&lt;br/&gt;Q. Data da publicação da sentença – 28/5/2025. (Evento 153, SENT1)&lt;br/&gt;&lt;br/&gt;R. Prescrição retroativa – Não prescreveu. &lt;br/&gt;&lt;br/&gt;S. Prescrição superveniente – 28/5/2037&lt;br/&gt;&lt;br/&gt;T. Observações – A ré Franciele não recorreu.&lt;br/&gt;&lt;br/&gt;U. CPF do(s) réu(s) – 071.314.469-63.&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 20/06/2025 17:17:50</td><td align="center">240</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Tráfico de Drogas e Condutas Afins</td><td>JULIANA FELICIANO DOS SANTOS<br></td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644597415">* tráfico * <a class="memoLocalizadorOrgao321763997812353340348644597415" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644597415&amp;hash=014c57e44528a4ecb81dcab92d6370e6')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767275328932661495022786143"><tt><b>[RÉU PRESO]</b></tt> <a class="memoLocalizadorOrgao321767275328932661495022786143" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767275328932661495022786143&amp;hash=94944512b4fc39cfe59563334a274408')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767275328932661495335051946">[+ 200] <a class="memoLocalizadorOrgao321767275328932661495335051946" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767275328932661495335051946&amp;hash=94caf39c8b111ab90f6c37efb1af2f16')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767630362011201739774582650">[] AMR - VIDE <a class="memoLocalizadorOrgao321767630362011201739774582650" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767630362011201739774582650&amp;hash=27bbacf50175aa89f76cc0b9a6354e6a')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:13<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrClara" data-classe="94" data-competencia="26" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321750788092714640844452957492|321769773521177763728305687656|50010906320238240080" name="ID-321750788092714640844452957492|321769773521177763728305687656|50010906320238240080"></a><input class="infraCheckbox" id="chkInfraItem4" name="chkInfraItem4" tabindex="0" title="" type="checkbox" value="321750788092714640844452957492|321769773521177763728305687656|50010906320238240080" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50010906320238240080&amp;operador=ou&amp;hash=6ac318a90f306fa062e93be256012e83" target="">5001090-63.2023.8.24.0080</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;4&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;claudiac - 30/01/2026 19:03:56&lt;/td&gt;&lt;td&gt;esfarelou o osso dela&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;SECJE - 27/11/2025 15:57:48&lt;/td&gt;&lt;td&gt;ANTONIO ADELIR FERREIRA &lt;br/&gt;Matéria | Lesão corporal de natureza grave (fato 01) e Descumprimento de Medidas Protetivas de Urgência (fato 02)&lt;br/&gt;Defesa | constituído (14)&lt;br/&gt;Data do Fato | 28/12/2022 (1)&lt;br/&gt;Data do Recebimento | 21/02/2023 (4)&lt;br/&gt;Data da Publicação | 10/12/2024 (126)&lt;br/&gt;Prescreve em 8 anos (fato 01)| (Idade do réu na data do crime: 55 anos)&lt;br/&gt;Data da Prescrição | 10/12/2032&lt;br/&gt;Prescreve em 3 anos (fato 02)&lt;br/&gt;Data da Prescrição | 10/12/2027&lt;br/&gt;&lt;br/&gt;Razões do Réu | &lt;br/&gt;Contrarrazões do MP | &lt;br/&gt;&lt;br/&gt;Parecer da PGJ | &lt;br/&gt;&lt;br/&gt;Int. do MP: (129)&lt;br/&gt;Int. do Réu: (148)&lt;br/&gt;Int. do Def.: (131)&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;SECJE - 27/11/2025 15:57:48&lt;/td&gt;&lt;td&gt;Complexidade:&lt;br/&gt;2 Fatos&lt;br/&gt;1 Réu&lt;br/&gt;1 Recurso do réu&lt;br/&gt;0 Recurso do MP&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br><label class="text-danger">Segredo de Justiça (Nível 1)</label></td><td> 24/06/2025 17:42:56</td><td align="center">236</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="26" data-situacao="M00">Apelação Criminal</span></td><td>Grave (Maria da Penha)</td><td>ANTONIO ADELIR FERREIRA<br></td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA</td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745">2. acórdãos - conferidos <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:16<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:37:18</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321751643603671743733233744652|321770886563244135556419929685|50017514520248240003" name="ID-321751643603671743733233744652|321770886563244135556419929685|50017514520248240003"></a><input class="infraCheckbox" id="chkInfraItem5" name="chkInfraItem5" tabindex="0" title="" type="checkbox" value="321751643603671743733233744652|321770886563244135556419929685|50017514520248240003" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50017514520248240003&amp;operador=ou&amp;hash=051cde2ee5a135d53d31e4a9ce6dda66" target="">5001751-45.2024.8.24.0003</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;5&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 12/02/2026 20:31:26&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;03/03/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;4&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;salesio - 09/02/2026 16:55:13&lt;/td&gt;&lt;td&gt;Crime tributário. Não recolher ICMS no prazo legal [Lei 8.137/1990, art. 2º, II]. Não preenchimento dos requisitos estabelecidos pelo STF.&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;SECJE - 27/11/2025 15:57:51&lt;/td&gt;&lt;td&gt;MARCIO ALBERTO DUTRA&lt;br/&gt;Réu Preso? () sim - desde *; (x) não - posto em liberdade em *&lt;br/&gt;Réu menor de 21/Maior de 70? () sim, idade: *; (x) não - 51 anos&lt;br/&gt;RG: ; CPF: 70800383915 &lt;br/&gt;Data do Fato: meses de janeiro, março, abril, maio, junho, agosto, outubro, novembro e dezembro de 2021, e janeiro a agosto de 2022 ;&lt;br/&gt;Capitulação da denúncia: art. art. 2º, II, c/c art. 11, caput, todos da Lei nº 8.137/1990 (evento 1);&lt;br/&gt;Data do recebimento da denúncia: 13/11/2024 (evento 3);&lt;br/&gt;Data da sentença recorrida: 05/06/2025 (evento 72) - absolutória () condenatória (x);&lt;br/&gt;Capitulação da sentença: art. 2º, II, da Lei n. 8.137/1990, por 18 (dezoito) vezes, na forma continuada (CP, art. 71);&lt;br/&gt;Pena aplicada: pena privativa de liberdade de 1 (um) ano 1 (um) mês e 10 (dez) dias de detenção, em regime inicial ABERTO, e ao pagamento de 22 dias-multa, no valor individual de 1/30 do salário mínimo.;&lt;br/&gt;Data da publicação da sentença: 05/06/2025 (evento );&lt;br/&gt;Data da prescrição: 13/11/2028   (retroativa); 05/06/2029   (superveniente)&lt;br/&gt;Data e prova de Intimação: 1) Ministério Público:  05/06/2025 (evento 75); 2) Réu: 05/06/2025 (evento 73);&lt;br/&gt;Data da interposição da apelação: 16/06/2025 (evento 87); termo nos autos ()&lt;br/&gt;Data das razões recursais: 01/07/2025 (evento 97);&lt;br/&gt;Recorrente: () MP (x) Réu () Assistente;&lt;br/&gt;Prazo início: 10/06/2025; término: 16/06/2025;&lt;br/&gt;Recurso tempestivo? 5 ou 3  dias (x) sim ▪ () não;&lt;br/&gt;Contrarrazões: 03/07/2025 (evento 101);&lt;br/&gt;PGJ: 14/07/2025 (evento 14, E-proc 2°Grau);&lt;br/&gt;Distribuído por: (x) sorteio; ou () prevenção;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;SECJE - 27/11/2025 15:57:51&lt;/td&gt;&lt;td&gt;​ORIVAL FRANCISCO MACHADO​&lt;br/&gt;Réu Preso? () sim - desde *; (x) não - posto em liberdade em *&lt;br/&gt;Réu menor de 21/Maior de 70? () sim, idade: *; (x) não - 65 anos&lt;br/&gt;RG: ; CPF: 34649808987&lt;br/&gt;Data do Fato: meses de janeiro, março, abril, maio, junho, agosto, outubro, novembro e dezembro de 2021, e janeiro a agosto de 2022 ;&lt;br/&gt;Capitulação da denúncia: art. art. 2º, II, c/c art. 11, caput, todos da Lei nº 8.137/1990 (evento 1);&lt;br/&gt;Data do recebimento da denúncia: 13/11/2024 (evento 3);&lt;br/&gt;Data da sentença recorrida: 05/06/2025 (evento 72) - absolutória () condenatória (x);&lt;br/&gt;Capitulação da sentença: art. 2º, II, da Lei n. 8.137/1990, por 18 (dezoito) vezes, na forma continuada (CP, art. 71);&lt;br/&gt;Pena aplicada: pena privativa de liberdade de  1 (um) ano 3 (três) meses e 16 (dezesseis) dias de detenção, em regime inicial SEMIABERTO, e ao pagamento de 23 dias-multa, no valor individual de 1/30 do salário mínimo;&lt;br/&gt;Data da publicação da sentença: 05/06/2025 (evento );&lt;br/&gt;Data da prescrição: 13/11/2028   (retroativa); 05/06/2029   (superveniente)&lt;br/&gt;Data e prova de Intimação: 1) Ministério Público:  05/06/2025 (evento 75); 2) Réu: 05/06/2025 (evento 74);&lt;br/&gt;Data da interposição da apelação:  16/06/2025 (evento 89); termo nos autos ()&lt;br/&gt;Data das razões recursais: 01/07/2025 (evento 98);&lt;br/&gt;Recorrente: () MP (x) Réu () Assistente;&lt;br/&gt;Prazo início: 10/06/2025; término: 16/06/2025;&lt;br/&gt;Recurso tempestivo? 5 ou 3  dias (x) sim ▪ () não;&lt;br/&gt;Contrarrazões: 03/07/2025 (evento 101);&lt;br/&gt;PGJ: 14/07/2025 (evento 14, E-proc 2°Grau);&lt;br/&gt;Distribuído por: (x) sorteio; ou () prevenção;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;SECJE - 27/11/2025 15:57:51&lt;/td&gt;&lt;td&gt;D&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 04/07/2025 12:54:15</td><td align="center">226</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Idoso</label></td><td>Crimes contra a Ordem Tributária</td><td>MARCIO ALBERTO DUTRA<br>ORIVAL FRANCISCO MACHADO</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA</td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745">2. acórdãos - conferidos <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>03/03/2026</button></td><td>13/02/2026 17:03:08<br>Intimação Eletrônica - Expedida/Certificada - Pauta</td><td> </td><td>12/02/2026 20:31:03</td></tr>
<tr class="infraTrClara" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321753365467765224643989716956|321770886563244135556016054661|50072038720218240020" name="ID-321753365467765224643989716956|321770886563244135556016054661|50072038720218240020"></a><input class="infraCheckbox" id="chkInfraItem6" name="chkInfraItem6" tabindex="0" title="" type="checkbox" value="321753365467765224643989716956|321770886563244135556016054661|50072038720218240020" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50072038720218240020&amp;operador=ou&amp;hash=f7e119490ced589526d857d281c8c49b" target="">5007203-87.2021.8.24.0020</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 12/02/2026 19:29:25&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;03/03/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;salesio - 11/02/2026 16:23:47&lt;/td&gt;&lt;td&gt;Crime tributário [Lei 8137/1990, art. 1º, I, II e V].&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;SECJE - 27/11/2025 15:57:59&lt;/td&gt;&lt;td&gt;6A_CAMARA&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 24/07/2025 11:44:38</td><td align="center">206</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span></td><td>Crimes contra a Ordem Tributária</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br>PAULO HENRIQUE FRARON</td><td></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745">2. acórdãos - conferidos <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>03/03/2026</button></td><td>13/02/2026 17:03:08<br>Intimação Eletrônica - Expedida/Certificada - Pauta</td><td> </td><td>12/02/2026 19:26:51</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321755710561489959900686087582|321770050958749555784737786493|50008714420238240082" name="ID-321755710561489959900686087582|321770050958749555784737786493|50008714420238240082"></a><input class="infraCheckbox" id="chkInfraItem7" name="chkInfraItem7" tabindex="0" title="" type="checkbox" value="321755710561489959900686087582|321770050958749555784737786493|50008714420238240082" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50008714420238240082&amp;operador=ou&amp;hash=f40550f40e7f9d3ebabe8b42154e3b67" target="">5000871-44.2023.8.24.0082</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 02/02/2026 17:38:46&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;03/03/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 20/08/2025 17:15:58</td><td align="center">179</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span></td><td>Crimes contra a Ordem Tributária</td><td>RAMIRES LISBOA DA LUZ<br></td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA</td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745">2. acórdãos - conferidos <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>03/03/2026</button></td><td>13/02/2026 17:03:08<br>Intimação Eletrônica - Expedida/Certificada - Pauta</td><td> </td><td>02/02/2026 17:38:34</td></tr>
<tr class="infraTrClara" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321756137126321916015320297959|321770886563244135556419933668|50019078520228240073" name="ID-321756137126321916015320297959|321770886563244135556419933668|50019078520228240073"></a><input class="infraCheckbox" id="chkInfraItem8" name="chkInfraItem8" tabindex="0" title="" type="checkbox" value="321756137126321916015320297959|321770886563244135556419933668|50019078520228240073" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50019078520228240073&amp;operador=ou&amp;hash=43309b8ea8d1b021465198e90215510e" target="">5001907-85.2022.8.24.0073</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 12/02/2026 20:31:26&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;03/03/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;salesio - 09/02/2026 16:16:46&lt;/td&gt;&lt;td&gt;Crime tributário [Lei 8.137/1990, art. 2º, II].&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS OS ÓRGÃOS&lt;/td&gt;&lt;td&gt;alexandraoliveira - 29/08/2025 10:29:40&lt;/td&gt;&lt;td&gt;recurso defesa 2 réus- razões §4º art. 600 CPP&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 25/08/2025 15:29:45</td><td align="center">174</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span></td><td>Crimes contra a Ordem Tributária</td><td>ANDERSON REZINI<br>JOELMA VICENTE DE LIMA</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA</td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745">2. acórdãos - conferidos <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>03/03/2026</button></td><td>13/02/2026 17:03:08<br>Intimação Eletrônica - Expedida/Certificada - Pauta</td><td> </td><td>12/02/2026 20:31:03</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321758102187815855720941783613|321770886563244135556024648773|00000024520198240006" name="ID-321758102187815855720941783613|321770886563244135556024648773|00000024520198240006"></a><input class="infraCheckbox" id="chkInfraItem9" name="chkInfraItem9" tabindex="0" title="" type="checkbox" value="321758102187815855720941783613|321770886563244135556024648773|00000024520198240006" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=00000024520198240006&amp;operador=ou&amp;hash=e21717075567955881e93483fef082e1" target="">0000002-45.2019.8.24.0006</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 12/02/2026 19:29:25&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;03/03/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;SECJE - 27/11/2025 15:58:35&lt;/td&gt;&lt;td&gt;Proposta de ANPP recusada pelo MP (doc. 185 da ação penal).&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br><label class="text-danger">Segredo de Justiça (Nível 1)</label></td><td> 17/09/2025 08:13:03</td><td align="center">131</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span></td><td>Tráfico de Drogas e Condutas Afins</td><td>ROGERS CORREA FERNANDES</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA</td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321764669184350019842826155181">2. acórdãos - ag. conferência <a class="memoLocalizadorOrgao321764669184350019842826155181" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321764669184350019842826155181&amp;hash=9862f7dcd935bac15ab64e7bf20a6999')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>03/03/2026</button></td><td>13/02/2026 17:03:08<br>Intimação Eletrônica - Expedida/Certificada - Pauta</td><td> </td><td>12/02/2026 19:28:13</td></tr>
<tr class="infraTrClara" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321758127074895692242985752415|321769773521177763728298129533|50027176720248240533" name="ID-321758127074895692242985752415|321769773521177763728298129533|50027176720248240533"></a><input class="infraCheckbox" id="chkInfraItem10" name="chkInfraItem10" tabindex="0" title="" type="checkbox" value="321758127074895692242985752415|321769773521177763728298129533|50027176720248240533" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50027176720248240533&amp;operador=ou&amp;hash=9a6c66850d5b86f1b6cb5230300578b7" target="">5002717-67.2024.8.24.0533</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 11/02/2026 09:36:58&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 11/02/2026 09:36:46&lt;/td&gt;&lt;td&gt;__________________________________&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Apelante&lt;/b&gt;: Cleiton José Claus&lt;p&gt;&lt;br/&gt;&lt;b&gt;Ação&lt;/b&gt;: ação penal pública incondicionada&lt;p&gt;&lt;br/&gt;&lt;b&gt;Objeto do Recurso&lt;/b&gt;: sentença que julgou procedente a denúncia e condenou o Apelante por infração ao art. 155, § 4º, incisos I e IV, do Código Penal&lt;p&gt;&lt;br/&gt;&lt;b&gt;Pedidos&lt;/b&gt;: reforma da sentença para absolver o Apelante, nos termos do art. 386, VII, CPP; subsidiariamente, reconhecimento da tentativa de furto (art. 14, II, CP), com redução de pena em 2/3; sucessivamente, reforma da dosimetria para afastar valoração negativa da culpabilidade e circunstâncias do crime (repouso noturno), fixando pena-base em 2 anos e 4 meses; aplicação da detração do tempo de prisão domiciliar para reavaliação do regime prisional&lt;p&gt;&lt;br/&gt;__________________________________&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 17/09/2025 13:37:54</td><td align="center">151</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Furto Qualificado</td><td>CLEITON JOSE KLAUS</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644597082">* patrimônio * <a class="memoLocalizadorOrgao321763997812353340348644597082" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644597082&amp;hash=c7bec21bc5d2f5fbf83a49d0961fcaf2')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767275328932661495022786143"><tt><b>[RÉU PRESO]</b></tt> <a class="memoLocalizadorOrgao321767275328932661495022786143" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767275328932661495022786143&amp;hash=94944512b4fc39cfe59563334a274408')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644590932">[+ 120] <a class="memoLocalizadorOrgao321763997812353340348644590932" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644590932&amp;hash=2be40348dc8338e02d2f87e6722e9ef4')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767630362011201739774582650">[] AMR - VIDE <a class="memoLocalizadorOrgao321767630362011201739774582650" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767630362011201739774582650&amp;hash=27bbacf50175aa89f76cc0b9a6354e6a')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644616429">[] Cláudia <a class="memoLocalizadorOrgao321763997812353340348644616429" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644616429&amp;hash=bce50bad10f6c0c733de043f26dc2d62')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:13<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321758208955897427463378352722|321769773521177763728298131212|50017307620258240539" name="ID-321758208955897427463378352722|321769773521177763728298131212|50017307620258240539"></a><input class="infraCheckbox" id="chkInfraItem11" name="chkInfraItem11" tabindex="0" title="" type="checkbox" value="321758208955897427463378352722|321769773521177763728298131212|50017307620258240539" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50017307620258240539&amp;operador=ou&amp;hash=bd11e26db658b4c91162214a6bb14e51" target="">5001730-76.2025.8.24.0539</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 18/09/2025 17:09:46</td><td align="center">150</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Furto Qualificado</td><td>EDERSON ROCHA PEREIRA<br>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA</td><td>OS MESMOS<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644597082">* patrimônio * <a class="memoLocalizadorOrgao321763997812353340348644597082" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644597082&amp;hash=c7bec21bc5d2f5fbf83a49d0961fcaf2')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767275328932661495022786143"><tt><b>[RÉU PRESO]</b></tt> <a class="memoLocalizadorOrgao321767275328932661495022786143" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767275328932661495022786143&amp;hash=94944512b4fc39cfe59563334a274408')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644590932">[+ 120] <a class="memoLocalizadorOrgao321763997812353340348644590932" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644590932&amp;hash=2be40348dc8338e02d2f87e6722e9ef4')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767630362011201739774582650">[] AMR - VIDE <a class="memoLocalizadorOrgao321767630362011201739774582650" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767630362011201739774582650&amp;hash=27bbacf50175aa89f76cc0b9a6354e6a')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:13<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrClara" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321758558002127823038535312394|321770886563244135556419936873|50041003020238240076" name="ID-321758558002127823038535312394|321770886563244135556419936873|50041003020238240076"></a><input class="infraCheckbox" id="chkInfraItem12" name="chkInfraItem12" tabindex="0" title="" type="checkbox" value="321758558002127823038535312394|321770886563244135556419936873|50041003020238240076" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50041003020238240076&amp;operador=ou&amp;hash=62cb4155ac83b3e1a3377644e0dcb510" target="">5004100-30.2023.8.24.0076</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 12/02/2026 20:31:26&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;03/03/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;SECJE - 27/11/2025 15:58:40&lt;/td&gt;&lt;td&gt;&lt;b&gt;TRIAGEM APELAÇÃO - 🔹Prescrição: ?&lt;/b&gt;&lt;br/&gt;🔹Receb. den.: ? ev ?&lt;br/&gt;🔹Susp. art. 366: ? ev ?&lt;br/&gt;🔹Citação pessoal/revogação 366: ? ev ?&lt;br/&gt;🔹Sentença ?: ? ev ?▪️Pena: ?, regime, art. ? CP, ? substituição&lt;br/&gt;🔹Apelação (?): ev ?- Teses: ?&lt;br/&gt;🔹Contrarrazões (?): ev ?&lt;br/&gt;🔹Parecer PGJ: ev ?&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS OS ÓRGÃOS&lt;/td&gt;&lt;td&gt;alexandraoliveira - 22/09/2025 14:32:28&lt;/td&gt;&lt;td&gt;recurso defesa - razões e contrarrazões ok&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 22/09/2025 14:17:50</td><td align="center">146</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Idoso</label></td><td>Destruição ou Degradação</td><td>SEBASTIAO JOSE PAULINO</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA</td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745">2. acórdãos - conferidos <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>03/03/2026</button></td><td>13/02/2026 17:03:08<br>Intimação Eletrônica - Expedida/Certificada - Pauta</td><td> </td><td>12/02/2026 20:31:03</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321758644876461412038907163811|321769773521177763728298133112|50017062920258240028" name="ID-321758644876461412038907163811|321769773521177763728298133112|50017062920258240028"></a><input class="infraCheckbox" id="chkInfraItem13" name="chkInfraItem13" tabindex="0" title="" type="checkbox" value="321758644876461412038907163811|321769773521177763728298133112|50017062920258240028" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50017062920258240028&amp;operador=ou&amp;hash=8ee8619e0a516bf24ca3dddf19dea810" target="">5001706-29.2025.8.24.0028</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 23/09/2025 17:46:23</td><td align="center">145</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Receptação</td><td>DJONATAH FARACO GARCIA</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644597082">* patrimônio * <a class="memoLocalizadorOrgao321763997812353340348644597082" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644597082&amp;hash=c7bec21bc5d2f5fbf83a49d0961fcaf2')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767275328932661495022786143"><tt><b>[RÉU PRESO]</b></tt> <a class="memoLocalizadorOrgao321767275328932661495022786143" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767275328932661495022786143&amp;hash=94944512b4fc39cfe59563334a274408')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644590932">[+ 120] <a class="memoLocalizadorOrgao321763997812353340348644590932" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644590932&amp;hash=2be40348dc8338e02d2f87e6722e9ef4')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767630362011201739774582650">[] AMR - VIDE <a class="memoLocalizadorOrgao321767630362011201739774582650" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767630362011201739774582650&amp;hash=27bbacf50175aa89f76cc0b9a6354e6a')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:13<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrClara" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321758642701318407329312865384|321770886563244135556419940662|50029658120258240538" name="ID-321758642701318407329312865384|321770886563244135556419940662|50029658120258240538"></a><input class="infraCheckbox" id="chkInfraItem14" name="chkInfraItem14" tabindex="0" title="" type="checkbox" value="321758642701318407329312865384|321770886563244135556419940662|50029658120258240538" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50029658120258240538&amp;operador=ou&amp;hash=0a13e574d63722aaa331a1468d462a96" target="">5002965-81.2025.8.24.0538</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 12/02/2026 20:31:26&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;03/03/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 23/09/2025 18:50:52</td><td align="center">145</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Tráfico de Drogas e Condutas Afins</td><td>RODRIGO DOS SANTOS FERREIRA<br></td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745"><u><b>2. acórdãos - conferidos</b></u> <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>03/03/2026</button></td><td>13/02/2026 17:03:08<br>Intimação Eletrônica - Expedida/Certificada - Pauta</td><td> </td><td>12/02/2026 20:31:03</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321758814436051519055144397218|321769773521177763728298136565|50001077420248240518" name="ID-321758814436051519055144397218|321769773521177763728298136565|50001077420248240518"></a><input class="infraCheckbox" id="chkInfraItem15" name="chkInfraItem15" tabindex="0" title="" type="checkbox" value="321758814436051519055144397218|321769773521177763728298136565|50001077420248240518" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50001077420248240518&amp;operador=ou&amp;hash=d6892589a850aacc6b3ca3250e4b6362" target="">5000107-74.2024.8.24.0518</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br><label class="text-danger">Segredo de Justiça (Nível 1)</label></td><td> 25/09/2025 12:47:13</td><td align="center">143</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Tráfico de Drogas e Condutas Afins</td><td>ADAILTON FIDELIS<br></td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321767275328932661495022786143"><tt><b>[RÉU PRESO]</b></tt> <a class="memoLocalizadorOrgao321767275328932661495022786143" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767275328932661495022786143&amp;hash=94944512b4fc39cfe59563334a274408')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644590932">[+ 120] <a class="memoLocalizadorOrgao321763997812353340348644590932" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644590932&amp;hash=2be40348dc8338e02d2f87e6722e9ef4')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321764669184350019842826155181">2. acórdãos - ag. conferência <a class="memoLocalizadorOrgao321764669184350019842826155181" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321764669184350019842826155181&amp;hash=9862f7dcd935bac15ab64e7bf20a6999')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:14<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrClara" data-classe="000808" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321758819252060377625565742898|321769773521177763728298141494|50775792220258240000" name="ID-321758819252060377625565742898|321769773521177763728298141494|50775792220258240000"></a><input class="infraCheckbox" id="chkInfraItem16" name="chkInfraItem16" tabindex="0" title="" type="checkbox" value="321758819252060377625565742898|321769773521177763728298141494|50775792220258240000" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50775792220258240000&amp;operador=ou&amp;hash=ee52b1637ca1ef4841c93e930b78471e" target="">5077579-22.2025.8.24.0000</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 25/09/2025 13:54:12</td><td align="center">143</td><td><span class="span-classe-judicial-contraste" data-classe="000808" data-competencia="24" data-situacao="M00">Ação Penal - Procedimento Ordinário</span></td><td>Crimes de Responsabilidade</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA</td><td>EVERALDO DOS SANTOS<br></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745"><u><b>2. acórdãos - conferidos</b></u> <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:14<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321758814892676810486154407663|321769773521177763728298138227|50011711520258240024" name="ID-321758814892676810486154407663|321769773521177763728298138227|50011711520258240024"></a><input class="infraCheckbox" id="chkInfraItem17" name="chkInfraItem17" tabindex="0" title="" type="checkbox" value="321758814892676810486154407663|321769773521177763728298138227|50011711520258240024" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50011711520258240024&amp;operador=ou&amp;hash=9eaf674db6f5d26f1d00a7b7e604b623" target="">5001171-15.2025.8.24.0024</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandre.morais.rosa - 30/01/2026 14:26:54&lt;/td&gt;&lt;td&gt;furto bebida e salgadinhos. AMR&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 16/12/2025 06:22:43&lt;/td&gt;&lt;td&gt;JÁ REMETIDO À PGJ - DECURSO DE PRAZO&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br><label class="text-danger">Segredo de Justiça (Nível 1)</label></td><td> 25/09/2025 15:27:46</td><td align="center">143</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Furto Qualificado</td><td>MARCELO FERREIRA DA SILVA</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644597082">* patrimônio * <a class="memoLocalizadorOrgao321763997812353340348644597082" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644597082&amp;hash=c7bec21bc5d2f5fbf83a49d0961fcaf2')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767275328932661495022786143"><tt><b>[RÉU PRESO]</b></tt> <a class="memoLocalizadorOrgao321767275328932661495022786143" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767275328932661495022786143&amp;hash=94944512b4fc39cfe59563334a274408')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644590932">[+ 120] <a class="memoLocalizadorOrgao321763997812353340348644590932" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644590932&amp;hash=2be40348dc8338e02d2f87e6722e9ef4')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767630362011201739774582650">[] AMR - VIDE <a class="memoLocalizadorOrgao321767630362011201739774582650" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767630362011201739774582650&amp;hash=27bbacf50175aa89f76cc0b9a6354e6a')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:14<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrClara" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321758891345284191056351224443|321769773521177763728302843218|50019953320258240166" name="ID-321758891345284191056351224443|321769773521177763728302843218|50019953320258240166"></a><input class="infraCheckbox" id="chkInfraItem18" name="chkInfraItem18" tabindex="0" title="" type="checkbox" value="321758891345284191056351224443|321769773521177763728302843218|50019953320258240166" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50019953320258240166&amp;operador=ou&amp;hash=e161c19f9f8bb8497d155007557ad81d" target="">5001995-33.2025.8.24.0166</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br><label class="text-danger">Segredo de Justiça (Nível 1)</label></td><td> 26/09/2025 18:28:30</td><td align="center">142</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Crimes de Trânsito</td><td>MAICON DA SILVA</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745">2. acórdãos - conferidos <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:16<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:51</td></tr>
<tr class="infraTrEscura" data-classe="272" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321759280552164403374147962238|321769438024006309480353447715|50000858120258240582" name="ID-321759280552164403374147962238|321769438024006309480353447715|50000858120258240582"></a><input class="infraCheckbox" id="chkInfraItem19" name="chkInfraItem19" tabindex="0" title="" type="checkbox" value="321759280552164403374147962238|321769438024006309480353447715|50000858120258240582" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50000858120258240582&amp;operador=ou&amp;hash=76d5e9c0184d42503d8b39412bdcb6dd" target="">5000085-81.2025.8.24.0582</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;4&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 26/01/2026 15:05:22&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;03/03/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 28/12/2025 12:27:41&lt;/td&gt;&lt;td&gt;&lt;b&gt;Impetrantes&lt;/b&gt;: Sandra Rita Menegatti de Lima; Tainá Helena da Silva Ratuchniak&lt;p&gt;&lt;br/&gt;    &lt;b&gt;Paciente&lt;/b&gt;: Heric de Oliveira dos Reis&lt;p&gt;&lt;br/&gt;    &lt;b&gt;Ação&lt;/b&gt;: Inquérito policial por suposta prática dos crimes previstos nos arts. 33 e 35 da Lei nº 11.343/2006&lt;p&gt;&lt;br/&gt;    &lt;b&gt;Objeto do Recurso&lt;/b&gt;: decisão que decretou prisão preventiva do paciente, após revogação da prisão temporária, fundamentada em conversas extraídas do celular, sem fatos novos ou contemporâneos&lt;p&gt;&lt;br/&gt;    &lt;b&gt;Pedidos&lt;/b&gt;: concessão liminar e definitiva da ordem para revogar a prisão preventiva; expedição de alvará de soltura; aplicação de medidas cautelares diversas da prisão, se necessárias; reconhecimento do excesso de prazo na conclusão do inquérito policial&lt;p&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandre.morais.rosa - 15/12/2025 00:09:54&lt;/td&gt;&lt;td&gt;Andrezza. Prisão Domiciliar. Filho TEA. Ver resolução do CNJ sobre Vulneráveis. Em princípio, manter. Aloquei você para aproveitar a fundamentação do TEA. A da prisão te repasso.  Resoluçao 369, https://www.cnj.jus.br/wp-content/uploads/2022/01/manual-resolucao-369.pdf &lt;br/&gt;AMR&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;SECJE - 27/11/2025 15:59:56&lt;/td&gt;&lt;td&gt;sorteio&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br><label class="text-danger">Segredo de Justiça (Nível 1)</label></td><td> 30/09/2025 22:36:08</td><td align="center">138</td><td><span class="span-classe-judicial-contraste" data-classe="272" data-competencia="24" data-situacao="M00">Recurso em Sentido Estrito</span><br><label class="text-danger">Petição Urgente</label><br><label class="text-danger">Réu Preso</label></td><td>Promoção, constituição, financiamento ou integração de Organização Criminosa</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA</td><td>JEFERSON PAULO DE MELO<br><br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>03/03/2026</button></td><td>13/02/2026 17:03:09<br>Intimação Eletrônica - Expedida/Certificada - Pauta</td><td> </td><td>26/01/2026 15:04:57</td></tr>
<tr class="infraTrClara" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321759341235882399581579621373|321769773521177763728298145202|50010829020258240541" name="ID-321759341235882399581579621373|321769773521177763728298145202|50010829020258240541"></a><input class="infraCheckbox" id="chkInfraItem20" name="chkInfraItem20" tabindex="0" title="" type="checkbox" value="321759341235882399581579621373|321769773521177763728298145202|50010829020258240541" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50010829020258240541&amp;operador=ou&amp;hash=f179a10542e534e3e5b29dff6bd2d9ba" target="">5001082-90.2025.8.24.0541</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 01/10/2025 18:17:22</td><td align="center">137</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Tráfico de Drogas e Condutas Afins</td><td>TONI GABRIEL DIAS MACHADO</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321767275328932661495022786143"><tt><b>[RÉU PRESO]</b></tt> <a class="memoLocalizadorOrgao321767275328932661495022786143" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767275328932661495022786143&amp;hash=94944512b4fc39cfe59563334a274408')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745">2. acórdãos - conferidos <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:14<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321760023437220105773085671444|321769773521177763728298147033|50028434620258240125" name="ID-321760023437220105773085671444|321769773521177763728298147033|50028434620258240125"></a><input class="infraCheckbox" id="chkInfraItem21" name="chkInfraItem21" tabindex="0" title="" type="checkbox" value="321760023437220105773085671444|321769773521177763728298147033|50028434620258240125" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50028434620258240125&amp;operador=ou&amp;hash=32d2ce31328d0ab8e31fcb0d2e786622" target="">5002843-46.2025.8.24.0125</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;SECJE - 27/11/2025 15:59:03&lt;/td&gt;&lt;td&gt;adm&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;SECJE - 27/11/2025 15:59:03&lt;/td&gt;&lt;td&gt;2 - 30/10&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 09/10/2025 15:42:55</td><td align="center">129</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Furto Qualificado</td><td>DARLAN ISRAEL STUBER DE OLIVEIRA<br>JOHAN PHABLO ALBUQUERQUE DE LIMA<br></td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644597082">* patrimônio * <a class="memoLocalizadorOrgao321763997812353340348644597082" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644597082&amp;hash=c7bec21bc5d2f5fbf83a49d0961fcaf2')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767275328932661495022786143"><tt><b>[RÉU PRESO]</b></tt> <a class="memoLocalizadorOrgao321767275328932661495022786143" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767275328932661495022786143&amp;hash=94944512b4fc39cfe59563334a274408')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767630362011201739774582650">[] AMR - VIDE <a class="memoLocalizadorOrgao321767630362011201739774582650" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767630362011201739774582650&amp;hash=27bbacf50175aa89f76cc0b9a6354e6a')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644590932">[+ 120] <a class="memoLocalizadorOrgao321763997812353340348644590932" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644590932&amp;hash=2be40348dc8338e02d2f87e6722e9ef4')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:14<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrClara" data-classe="272" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321760036821771708074026982228|321769773521177763728298148648|50468803120258240038" name="ID-321760036821771708074026982228|321769773521177763728298148648|50468803120258240038"></a><input class="infraCheckbox" id="chkInfraItem22" name="chkInfraItem22" tabindex="0" title="" type="checkbox" value="321760036821771708074026982228|321769773521177763728298148648|50468803120258240038" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50468803120258240038&amp;operador=ou&amp;hash=68999c361dd16a1464872d38604ba274" target="">5046880-31.2025.8.24.0038</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandre.morais.rosa - 05/01/2026 14:11:48&lt;/td&gt;&lt;td&gt;Processo prestes a ser julgado. COm alegações finais. OBJETO MEDIDAS CAUTELARES. AMR 05/01/2026&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br><label class="text-danger">Segredo de Justiça (Nível 1)</label></td><td> 09/10/2025 18:12:34</td><td align="center">129</td><td><span class="span-classe-judicial-contraste" data-classe="272" data-competencia="24" data-situacao="M00">Recurso em Sentido Estrito</span></td><td>Injúria (Criminal)</td><td>FABRICIO CORRENTE</td><td>ANTONIO MACHADO</td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321765894927640366818202416500">* rese * <a class="memoLocalizadorOrgao321765894927640366818202416500" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321765894927640366818202416500&amp;hash=f9619f01353568b7b50886b7729af625')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644595107"><u><b>* amb./cons./ECA/honra/paz/preconceito *</b></u> <a class="memoLocalizadorOrgao321763997812353340348644595107" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644595107&amp;hash=1da263cb9fc387cf9a0ec03ef9133a9b')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767630362011201739774582650">[] AMR - VIDE <a class="memoLocalizadorOrgao321767630362011201739774582650" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767630362011201739774582650&amp;hash=27bbacf50175aa89f76cc0b9a6354e6a')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644590932">[+ 120] <a class="memoLocalizadorOrgao321763997812353340348644590932" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644590932&amp;hash=2be40348dc8338e02d2f87e6722e9ef4')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:14<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321760120916087415222095386216|321770886563244135556016058408|50014895320258240523" name="ID-321760120916087415222095386216|321770886563244135556016058408|50014895320258240523"></a><input class="infraCheckbox" id="chkInfraItem23" name="chkInfraItem23" tabindex="0" title="" type="checkbox" value="321760120916087415222095386216|321770886563244135556016058408|50014895320258240523" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50014895320258240523&amp;operador=ou&amp;hash=fbadc8e667e2d3fbbfc004788e083256" target="">5001489-53.2025.8.24.0523</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 12/02/2026 19:29:25&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;03/03/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS OS ÓRGÃOS&lt;/td&gt;&lt;td&gt;SECJE - 09/12/2025 10:58:52&lt;/td&gt;&lt;td&gt;AVISO DE SISTEMA&lt;BR&gt;REGRA DE AUTOMATIZAÇÃO  171 (GRUPO [AMR] Secretaria)&lt;BR/&gt;&lt;BR/&gt;&lt;button disabled style=background:#503DE0;color:white;font-size:18px;margin:10px;border:none;padding:6px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:inline-block;&gt;À SECRETARIA:&lt;br/&gt;Para contrarrazões &lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 03/12/2025 22:24:13&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#1b6b3a;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;&gt;DEFENSOR DATIVO&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 10/10/2025 15:34:59</td><td align="center">128</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Tráfico de Drogas e Condutas Afins</td><td>ERICK VARELA<br>WILLIAN RAFAEL LAURINDO FONTES</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321764669184350019842826155181">2. acórdãos - ag. conferência <a class="memoLocalizadorOrgao321764669184350019842826155181" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321764669184350019842826155181&amp;hash=9862f7dcd935bac15ab64e7bf20a6999')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>03/03/2026</button></td><td>13/02/2026 17:03:09<br>Intimação Eletrônica - Expedida/Certificada - Pauta</td><td> </td><td>12/02/2026 19:26:51</td></tr>
<tr class="infraTrClara" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321760627772392347805960453685|321769773521177763728298151746|50015568920258240564" name="ID-321760627772392347805960453685|321769773521177763728298151746|50015568920258240564"></a><input class="infraCheckbox" id="chkInfraItem24" name="chkInfraItem24" tabindex="0" title="" type="checkbox" value="321760627772392347805960453685|321769773521177763728298151746|50015568920258240564" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50015568920258240564&amp;operador=ou&amp;hash=cc859c9007c243ebbbfb1866c132c339" target="">5001556-89.2025.8.24.0564</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;5&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;4&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;SECJE - 27/11/2025 15:59:10&lt;/td&gt;&lt;td&gt;Distribuição por sorteio&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;TODOS OS ÓRGÃOS&lt;/td&gt;&lt;td&gt;SECJE - 23/10/2025 14:59:54&lt;/td&gt;&lt;td&gt;A parte LUAN MIRANDA DA SILVA RUFINO foi excluída no outro grau. Verifique a situação e modifique conforme a necessidade.&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS OS ÓRGÃOS&lt;/td&gt;&lt;td&gt;SECJE - 23/10/2025 14:46:14&lt;/td&gt;&lt;td&gt;Advogado alterado no 1G&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS OS ÓRGÃOS&lt;/td&gt;&lt;td&gt;ester.franciele - 16/10/2025 16:18:34&lt;/td&gt;&lt;td&gt;⚠️ A/C DRI:&lt;br/&gt;Por favor devolver os autos para CAMCRI2 (lancei a movimentação errada e a automatização remeteu para vocês)!&lt;br/&gt;Obrigada!&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 16/10/2025 14:16:35</td><td align="center">122</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Crimes do Sistema Nacional de Armas</td><td>LUAN MIRANDA DA SILVA RUFINO<br>RENATO BRUNO NOVAES MANITO</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321767275328932661495022786143"><tt><b>[RÉU PRESO]</b></tt> <a class="memoLocalizadorOrgao321767275328932661495022786143" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767275328932661495022786143&amp;hash=94944512b4fc39cfe59563334a274408')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745">2. acórdãos - conferidos <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:14<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321760714130011150654350709283|321770886563244135556016061278|50013745820218240010" name="ID-321760714130011150654350709283|321770886563244135556016061278|50013745820218240010"></a><input class="infraCheckbox" id="chkInfraItem25" name="chkInfraItem25" tabindex="0" title="" type="checkbox" value="321760714130011150654350709283|321770886563244135556016061278|50013745820218240010" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50013745820218240010&amp;operador=ou&amp;hash=676c8fa42f1bdfd045e2e6a34484708a" target="">5001374-58.2021.8.24.0010</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;4&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 12/02/2026 19:29:25&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;03/03/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;TODOS OS ÓRGÃOS&lt;/td&gt;&lt;td&gt;raphaela - 04/02/2026 08:57:22&lt;/td&gt;&lt;td&gt;TERMO DE ANÁLISE - FAVOR NÃO APAGAR&lt;br/&gt;Baixa remessa - absolvição e extinção da punibilidade (prescrição)&lt;br/&gt;Fixados honorários&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 22/01/2026 21:09:36&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;03/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandre.morais.rosa - 15/12/2025 00:18:03&lt;/td&gt;&lt;td&gt;Tributário&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 17/10/2025 12:30:14</td><td align="center">121</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span></td><td>Crimes contra a Ordem Tributária</td><td>ARLINDO PASCHOAL SCHWENGBER ALVES DE OLIVEIRA<br></td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA</td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745">2. acórdãos - conferidos <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>03/03/2026</button></td><td>14/02/2026 09:05:53<br>Confirmada a intimação eletrônica</td><td> </td><td>12/02/2026 19:26:51</td></tr>
<tr class="infraTrClara" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321760723843712984966384260367|321769773521177763728298153346|00004254620198240057" name="ID-321760723843712984966384260367|321769773521177763728298153346|00004254620198240057"></a><input class="infraCheckbox" id="chkInfraItem26" name="chkInfraItem26" tabindex="0" title="" type="checkbox" value="321760723843712984966384260367|321769773521177763728298153346|00004254620198240057" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=00004254620198240057&amp;operador=ou&amp;hash=f896e79f0a39200e7f50d5d2a3c08528" target="">0000425-46.2019.8.24.0057</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 17/10/2025 17:53:27</td><td align="center">121</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span></td><td>Crimes do Sistema Nacional de Armas</td><td>DILSON FRITZEN<br></td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA</td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644595877">* armas/trânsito/outros * <a class="memoLocalizadorOrgao321763997812353340348644595877" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644595877&amp;hash=46b36446ccee5f16b66663138ce7a606')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767630362011201739774582650">[] AMR - VIDE <a class="memoLocalizadorOrgao321767630362011201739774582650" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767630362011201739774582650&amp;hash=27bbacf50175aa89f76cc0b9a6354e6a')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644590932">[+ 120] <a class="memoLocalizadorOrgao321763997812353340348644590932" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644590932&amp;hash=2be40348dc8338e02d2f87e6722e9ef4')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:14<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321761064840404138681032783449|321769773521177763728298154948|50047137020248240058" name="ID-321761064840404138681032783449|321769773521177763728298154948|50047137020248240058"></a><input class="infraCheckbox" id="chkInfraItem27" name="chkInfraItem27" tabindex="0" title="" type="checkbox" value="321761064840404138681032783449|321769773521177763728298154948|50047137020248240058" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50047137020248240058&amp;operador=ou&amp;hash=13f17238269e974c09ed83b448d7a03a" target="">5004713-70.2024.8.24.0058</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;SECJE - 27/11/2025 15:59:16&lt;/td&gt;&lt;td&gt;Caso acolhido o recurso do MP, observar a menoridade relativa do acusado na época dos fatos e a sua repercussão na pena (atenuante) e eventual cálculo de prescrição.&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 21/10/2025 13:40:40</td><td align="center">117</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span></td><td>Furto Qualificado</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA</td><td>GUILHERME DEMARCHI DA SILVA<br></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644597082">* patrimônio * <a class="memoLocalizadorOrgao321763997812353340348644597082" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644597082&amp;hash=c7bec21bc5d2f5fbf83a49d0961fcaf2')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767630362011201739774582650">[] AMR - VIDE <a class="memoLocalizadorOrgao321767630362011201739774582650" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767630362011201739774582650&amp;hash=27bbacf50175aa89f76cc0b9a6354e6a')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:14<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrClara" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321761149426168490720246976729|321769773521177763728298156489|50052449520228240004" name="ID-321761149426168490720246976729|321769773521177763728298156489|50052449520228240004"></a><input class="infraCheckbox" id="chkInfraItem28" name="chkInfraItem28" tabindex="0" title="" type="checkbox" value="321761149426168490720246976729|321769773521177763728298156489|50052449520228240004" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50052449520228240004&amp;operador=ou&amp;hash=8e759c93b56d477e1bff988c43bc92dc" target="">5005244-95.2022.8.24.0004</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br><label class="text-danger">Segredo de Justiça (Nível 1)</label></td><td> 22/10/2025 14:05:13</td><td align="center">116</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span></td><td>Roubo Majorado</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA</td><td>OS MESMOS<br>VIVIAN ZOMER BOMBAZAR</td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644597082">* patrimônio * <a class="memoLocalizadorOrgao321763997812353340348644597082" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644597082&amp;hash=c7bec21bc5d2f5fbf83a49d0961fcaf2')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767630362011201739774582650">[] AMR - VIDE <a class="memoLocalizadorOrgao321767630362011201739774582650" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767630362011201739774582650&amp;hash=27bbacf50175aa89f76cc0b9a6354e6a')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:15<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321761237702895815929158704617|321770886563244135556016064159|50003377920258240519" name="ID-321761237702895815929158704617|321770886563244135556016064159|50003377920258240519"></a><input class="infraCheckbox" id="chkInfraItem29" name="chkInfraItem29" tabindex="0" title="" type="checkbox" value="321761237702895815929158704617|321770886563244135556016064159|50003377920258240519" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50003377920258240519&amp;operador=ou&amp;hash=6a1b127f12301c72c5c9b59e431dff65" target="">5000337-79.2025.8.24.0519</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 12/02/2026 19:29:25&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;03/03/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandre.morais.rosa - 14/12/2025 23:24:34&lt;/td&gt;&lt;td&gt;Absurso. Sem mandado judicial. AMR&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 23/10/2025 13:41:42</td><td align="center">115</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Tráfico de Drogas e Condutas Afins</td><td>FABRICIO BAU</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321764669184350019842826155181">2. acórdãos - ag. conferência <a class="memoLocalizadorOrgao321764669184350019842826155181" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321764669184350019842826155181&amp;hash=9862f7dcd935bac15ab64e7bf20a6999')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>03/03/2026</button></td><td>13/02/2026 17:03:09<br>Intimação Eletrônica - Expedida/Certificada - Pauta</td><td> </td><td>12/02/2026 19:26:51</td></tr>
<tr class="infraTrClara" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321761325361923569859992405540|321769773521177763728298159549|50010615820248240086" name="ID-321761325361923569859992405540|321769773521177763728298159549|50010615820248240086"></a><input class="infraCheckbox" id="chkInfraItem30" name="chkInfraItem30" tabindex="0" title="" type="checkbox" value="321761325361923569859992405540|321769773521177763728298159549|50010615820248240086" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50010615820248240086&amp;operador=ou&amp;hash=ac9c712bee178afbfaad5206eefe2913" target="">5001061-58.2024.8.24.0086</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 24/10/2025 18:23:41</td><td align="center">114</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span></td><td>Crimes de Trânsito</td><td>PAULO ESTEVAO DEBIAZI</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA</td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745">2. acórdãos - conferidos <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:15<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321761674760124538904987431816|321770886563244135556419944306|50114645120248240033" name="ID-321761674760124538904987431816|321770886563244135556419944306|50114645120248240033"></a><input class="infraCheckbox" id="chkInfraItem31" name="chkInfraItem31" tabindex="0" title="" type="checkbox" value="321761674760124538904987431816|321770886563244135556419944306|50114645120248240033" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50114645120248240033&amp;operador=ou&amp;hash=278f14dfa4f462ff1c4ed3984e07f2fc" target="">5011464-51.2024.8.24.0033</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 12/02/2026 20:31:26&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;03/03/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;salesio - 09/02/2026 16:22:59&lt;/td&gt;&lt;td&gt;Crime tributário [Lei n. 8.137/1990, art. 2º, II].&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 28/10/2025 15:06:00</td><td align="center">110</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span></td><td>Crimes contra a Ordem Tributária</td><td>PAMELA LUCENA BARRETTO<br>ROBERTO MAURICIO ROSA<br></td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA</td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745">2. acórdãos - conferidos <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>03/03/2026</button></td><td>13/02/2026 17:03:08<br>Intimação Eletrônica - Expedida/Certificada - Pauta</td><td> </td><td>12/02/2026 20:31:03</td></tr>
<tr class="infraTrClara" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321761835266443891462237082432|321769773521177763728298161129|50245828120218240039" name="ID-321761835266443891462237082432|321769773521177763728298161129|50245828120218240039"></a><input class="infraCheckbox" id="chkInfraItem32" name="chkInfraItem32" tabindex="0" title="" type="checkbox" value="321761835266443891462237082432|321769773521177763728298161129|50245828120218240039" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50245828120218240039&amp;operador=ou&amp;hash=de7a00b967705401381b9c6fbc87c211" target="">5024582-81.2021.8.24.0039</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;4&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;SECJE - 27/11/2025 15:59:28&lt;/td&gt;&lt;td&gt;FABIO GRALHA&lt;br/&gt;&lt;br/&gt;Matéria | apropriação indébita (artigo 168, §1º, inciso III, CP) (1)&lt;br/&gt;Defesa | constituída (8)&lt;br/&gt;Data do Fato | 16/04/2014 (1)&lt;br/&gt;Data do Recebimento | 11/01/2022 (4)&lt;br/&gt;Data da Publicação | 29/08/2025 (203)&lt;br/&gt;Prescreve em 4 anos| (Idade do réu na data do crime: 40 anos)&lt;br/&gt;Data da Prescrição | 29/08/2029&lt;br/&gt;&lt;br/&gt;Razões do Réu | pendente&lt;br/&gt;Contrarrazões do MP | pendente&lt;br/&gt;&lt;br/&gt;Razões do MP | 235&lt;br/&gt;Contrarrazões do Réu | 243&lt;br/&gt;&lt;br/&gt;Parecer da PGJ | pendente&lt;br/&gt;&lt;br/&gt;Int. do MP: 210&lt;br/&gt;Int. do Réu: 207&lt;br/&gt;Int. do Def.: 207&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;SECJE - 27/11/2025 15:59:28&lt;/td&gt;&lt;td&gt;Complexidade:&lt;br/&gt;1 Fato&lt;br/&gt;1 Réu&lt;br/&gt;1 Recurso do réu&lt;br/&gt;1 Recurso do MP&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;SECJE - 27/11/2025 15:59:28&lt;/td&gt;&lt;td&gt;Verificar prescrição (4 anos):&lt;br/&gt;data do fato: 16/05/2014&lt;br/&gt;data do recebimento da denúncia: 11/01/2022&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 30/10/2025 12:47:45</td><td align="center">108</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span></td><td>Apropriação indébita</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA</td><td>FABIO GRALHA</td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745">2. acórdãos - conferidos <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:15<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321761836936817552793485891462|321769773521177763728298164154|50013075320258240075" name="ID-321761836936817552793485891462|321769773521177763728298164154|50013075320258240075"></a><input class="infraCheckbox" id="chkInfraItem33" name="chkInfraItem33" tabindex="0" title="" type="checkbox" value="321761836936817552793485891462|321769773521177763728298164154|50013075320258240075" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50013075320258240075&amp;operador=ou&amp;hash=660a63a8abee3800aa33edf352fb3ef3" target="">5001307-53.2025.8.24.0075</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 30/10/2025 16:06:14</td><td align="center">108</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Tráfico de Drogas e Condutas Afins</td><td>GABRIEL CARLOS</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:15<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrClara" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321761845931492431564177052585|321770629484284422404898222441|50011293620258240518" name="ID-321761845931492431564177052585|321770629484284422404898222441|50011293620258240518"></a><input class="infraCheckbox" id="chkInfraItem34" name="chkInfraItem34" tabindex="0" title="" type="checkbox" value="321761845931492431564177052585|321770629484284422404898222441|50011293620258240518" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50011293620258240518&amp;operador=ou&amp;hash=01da84fb09f483e31885dbba79cd5066" target="">5001129-36.2025.8.24.0518</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 09/02/2026 09:02:05&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br><label class="text-danger">Segredo de Justiça (Nível 1)</label></td><td> 30/10/2025 17:56:06</td><td align="center">108</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Roubo Majorado</td><td>ERICK PEREIRA</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>11/02/2026 10:14:39<br>Retificado o movimento - Tipo de Petição</td><td> </td><td>09/02/2026 09:00:48</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="26" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321761922953225057031178898223|321769773521177763728298167199|50029427720258240040" name="ID-321761922953225057031178898223|321769773521177763728298167199|50029427720258240040"></a><input class="infraCheckbox" id="chkInfraItem35" name="chkInfraItem35" tabindex="0" title="" type="checkbox" value="321761922953225057031178898223|321769773521177763728298167199|50029427720258240040" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50029427720258240040&amp;operador=ou&amp;hash=f7fb9e363acc4ddc0f820f89cbdb4621" target="">5002942-77.2025.8.24.0040</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;claudiac - 29/01/2026 18:00:20&lt;/td&gt;&lt;td&gt;ler a denúncia, sentença e apelação p/ dar ok.&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;claudiac - 29/01/2026 17:59:58&lt;/td&gt;&lt;td&gt;PENAL E PROCESSO PENAL. VIOLÊNCIA DOMÉSTICA. APELAÇÃO CRIMINAL. AMEAÇAS. DESCUMPRIMENTO DE MEDIDAS PROTETIVAS. ROUBO. INVASÃO DE DISPOSITIVO INFORMÁTICO. PALAVRA DA VÍTIMA RELEVANTE EM CONTEXTO DE VIOLÊNCIA DE GÊNERO. PROVAS SUFICIENTES DE MATERIALIDADE E AUTORIA. CONTINUIDADE DELITIVA RECONHECIDA NOS FATOS DE AMEAÇA [FATOS 1 E 7] E DESCUMPRIMENTO DE MEDIDAS PROTETIVAS [FATOS 2 E 6]. TESE DE INSUFICIÊNCIA PROBATÓRIA AFASTADA. VIOLAÇÃO DE DOMICÍLIO ABSORVIDA PELO ROUBO PELO PRINCÍPIO DA CONSUNÇÃO. MANUTENÇÃO DA CONDENAÇÃO PELOS DEMAIS DELITOS. DOSIMETRIA. AUSÊNCIA DE BIS IN IDEM ENTRE CULPABILIDADE E REINCIDÊNCIA. NECESSIDADE DE READEQUAÇÃO PARCIAL DA PENA. DETRAÇÃO INSUFICIENTE PARA ALTERAÇÃO DO REGIME. REGIME FECHADO MANTIDO PARA A RECLUSÃO E ABERTO PARA A DETENÇÃO. RECURSO DESPROVIDO. READEQUAÇÃO DA PENA DE OFÍCIO.&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br><label class="text-danger">Segredo de Justiça (Nível 1)</label></td><td> 31/10/2025 12:29:01</td><td align="center">107</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="26" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Violação de domicílio (Maria da Penha)</td><td>EDUARDO VINICIUS DE ANDRADE</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321764669184350019842826155181">2. acórdãos - ag. conferência <a class="memoLocalizadorOrgao321764669184350019842826155181" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321764669184350019842826155181&amp;hash=9862f7dcd935bac15ab64e7bf20a6999')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:15<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrClara" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321762192509207717789277326155|321770886563244135556419947735|50025906220238240017" name="ID-321762192509207717789277326155|321770886563244135556419947735|50025906220238240017"></a><input class="infraCheckbox" id="chkInfraItem36" name="chkInfraItem36" tabindex="0" title="" type="checkbox" value="321762192509207717789277326155|321770886563244135556419947735|50025906220238240017" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50025906220238240017&amp;operador=ou&amp;hash=69fbbe742ab5631f61de2391fdc587c9" target="">5002590-62.2023.8.24.0017</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 12/02/2026 20:31:26&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;03/03/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;salesio - 09/02/2026 16:29:19&lt;/td&gt;&lt;td&gt;Crime tributário [Lei n. 8.137/1990, art. 2º, II].&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 03/11/2025 14:55:09</td><td align="center">104</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span></td><td>Crimes contra a Ordem Tributária</td><td>JOSE ALFONSO SCHULTZ</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA</td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745">2. acórdãos - conferidos <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>03/03/2026</button></td><td>13/02/2026 17:03:08<br>Intimação Eletrônica - Expedida/Certificada - Pauta</td><td> </td><td>12/02/2026 20:31:03</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321762536792613141716062976471|321770886563244135556419951312|50050411520228240011" name="ID-321762536792613141716062976471|321770886563244135556419951312|50050411520228240011"></a><input class="infraCheckbox" id="chkInfraItem37" name="chkInfraItem37" tabindex="0" title="" type="checkbox" value="321762536792613141716062976471|321770886563244135556419951312|50050411520228240011" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50050411520228240011&amp;operador=ou&amp;hash=c84d04f34f3b033437ab143b7618a91c" target="">5005041-15.2022.8.24.0011</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 12/02/2026 20:31:26&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;03/03/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;salesio - 09/02/2026 16:30:43&lt;/td&gt;&lt;td&gt;Crime tributário [Lei n. 8.137/1990, art. 2º, II].&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 07/11/2025 16:22:04</td><td align="center">100</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span></td><td>Crimes contra a Ordem Tributária</td><td>OSMAR VIEIRA ELAUTERIO</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA</td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745">2. acórdãos - conferidos <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>03/03/2026</button></td><td>13/02/2026 17:03:08<br>Intimação Eletrônica - Expedida/Certificada - Pauta</td><td> </td><td>12/02/2026 20:31:03</td></tr>
<tr class="infraTrClara" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321762889117902293992331671156|321770886563244135556016067044|50022214920258240518" name="ID-321762889117902293992331671156|321770886563244135556016067044|50022214920258240518"></a><input class="infraCheckbox" id="chkInfraItem38" name="chkInfraItem38" tabindex="0" title="" type="checkbox" value="321762889117902293992331671156|321770886563244135556016067044|50022214920258240518" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50022214920258240518&amp;operador=ou&amp;hash=9185389d7365efc1378336c664999319" target="">5002221-49.2025.8.24.0518</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 12/02/2026 19:29:25&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;03/03/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 11/11/2025 16:26:48</td><td align="center">96</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Tráfico de Drogas e Condutas Afins</td><td>ANDRE LUIS DA SILVA<br>RODRIGO ZATT</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321764669184350019842826155181">2. acórdãos - ag. conferência <a class="memoLocalizadorOrgao321764669184350019842826155181" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321764669184350019842826155181&amp;hash=9862f7dcd935bac15ab64e7bf20a6999')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>03/03/2026</button></td><td>13/02/2026 17:03:09<br>Intimação Eletrônica - Expedida/Certificada - Pauta</td><td> </td><td>12/02/2026 19:26:51</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321763392650188601865121253222|321769773521177763728298170255|50014425220258240144" name="ID-321763392650188601865121253222|321769773521177763728298170255|50014425220258240144"></a><input class="infraCheckbox" id="chkInfraItem39" name="chkInfraItem39" tabindex="0" title="" type="checkbox" value="321763392650188601865121253222|321769773521177763728298170255|50014425220258240144" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50014425220258240144&amp;operador=ou&amp;hash=0a45954e49f50eef4f4c3f41a971dace" target="">5001442-52.2025.8.24.0144</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 17/11/2025 12:17:30</td><td align="center">90</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Tráfico de Drogas e Condutas Afins</td><td>JOÃO VITOR DA SILVA</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321767275328932661495022786143"><tt><b>[RÉU PRESO]</b></tt> <a class="memoLocalizadorOrgao321767275328932661495022786143" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767275328932661495022786143&amp;hash=94944512b4fc39cfe59563334a274408')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745">2. acórdãos - conferidos <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:15<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrClara" data-classe="588" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321764423339765589703198537123|321770886563244135556419955027|80022074420258240023" name="ID-321764423339765589703198537123|321770886563244135556419955027|80022074420258240023"></a><input class="infraCheckbox" id="chkInfraItem40" name="chkInfraItem40" tabindex="0" title="" type="checkbox" value="321764423339765589703198537123|321770886563244135556419955027|80022074420258240023" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=80022074420258240023&amp;operador=ou&amp;hash=2a06daadc8cbbb58697779653e996bb6" target="">8002207-44.2025.8.24.0023</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 12/02/2026 20:31:26&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;03/03/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;vitoriasilva - 05/02/2026 13:39:20&lt;/td&gt;&lt;td&gt;PAUTAR C/ O 8002314-88.2025.8.24.0023&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;vitoriasilva - 05/02/2026 13:39:18&lt;/td&gt;&lt;td&gt;Trabalho externo&lt;br/&gt;&lt;br/&gt;Pedido [seq. 101.1]&lt;br/&gt;Manifestação do MP [seq. 107.1]&lt;br/&gt;Decisão [seq. 110.1/ev. 1.1] - indeferimento&lt;br/&gt;Agravo [ev. 1.2]&lt;br/&gt;Contrarrazões [ev. 1.4]&lt;br/&gt;Parecer [ev. 7]&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 29/11/2025 10:35:40</td><td align="center">78</td><td><span class="span-classe-judicial-contraste" data-classe="588" data-competencia="24" data-situacao="M00">Agravo de Execução Penal</span><br><label class="text-danger">Réu Preso</label></td><td>Pena Privativa de Liberdade</td><td>HUDSON ANTONIO ROGERIO</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745"><u><b>2. acórdãos - conferidos</b></u> <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>03/03/2026</button></td><td>13/02/2026 17:03:08<br>Intimação Eletrônica - Expedida/Certificada - Pauta</td><td> </td><td>12/02/2026 20:31:03</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321764606471431661913533302904|321769773521177763728298171855|50027211820258240518" name="ID-321764606471431661913533302904|321769773521177763728298171855|50027211820258240518"></a><input class="infraCheckbox" id="chkInfraItem41" name="chkInfraItem41" tabindex="0" title="" type="checkbox" value="321764606471431661913533302904|321769773521177763728298171855|50027211820258240518" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50027211820258240518&amp;operador=ou&amp;hash=2d9fb453bb3a7fd13eef56b55f43ac7a" target="">5002721-18.2025.8.24.0518</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 01/12/2025 16:28:02</td><td align="center">76</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Furto Qualificado</td><td>DEBDERSON RICARDO DADALT HUGEN<br>MAURICIO MIRANDA PORTES</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644597082">* patrimônio * <a class="memoLocalizadorOrgao321763997812353340348644597082" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644597082&amp;hash=c7bec21bc5d2f5fbf83a49d0961fcaf2')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767275328932661495022786143"><u><b><tt><b>[RÉU PRESO]</b></tt></b></u> <a class="memoLocalizadorOrgao321767275328932661495022786143" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767275328932661495022786143&amp;hash=94944512b4fc39cfe59563334a274408')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767630362011201739774582650">[] AMR - VIDE <a class="memoLocalizadorOrgao321767630362011201739774582650" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767630362011201739774582650&amp;hash=27bbacf50175aa89f76cc0b9a6354e6a')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:15<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrClara" data-classe="000108" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321764685739276456192465937772|321770886563244135556436660827|51011857920258240000" name="ID-321764685739276456192465937772|321770886563244135556436660827|51011857920258240000"></a><input class="infraCheckbox" id="chkInfraItem42" name="chkInfraItem42" tabindex="0" title="" type="checkbox" value="321764685739276456192465937772|321770886563244135556436660827|51011857920258240000" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=51011857920258240000&amp;operador=ou&amp;hash=1b81237343809a44cd99469f0a23e1bc" target="">5101185-79.2025.8.24.0000</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 12/02/2026 20:34:12&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;claudiac - 09/02/2026 15:37:06&lt;/td&gt;&lt;td&gt;dispositivo: não consegui fazer em tópicos&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;claudiac - 09/02/2026 15:36:35&lt;/td&gt;&lt;td&gt;acrescentei: DETERMINO, em estrita observância aos arts. 10 e 18 da Resolução n. 425/2021 do CNJ, o imediato encaminhamento do paciente à rede de assistência social do município [CRAS/CREAS], para que seja garantido o seu acesso aos direitos fundamentais e viabilizado o cumprimento das medidas cautelares impostas..... Minha irmã trabalha no CREAS/CRAS/PAEFI e eles tratam de casos assim&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 02/12/2025 16:07:51</td><td align="center">75</td><td><span class="span-classe-judicial-contraste" data-classe="000108" data-competencia="24" data-situacao="M00">Habeas Corpus Criminal</span><br><label class="text-danger">Antecipação de Tutela</label></td><td>Tráfico de Drogas e Condutas Afins</td><td>OSVALDO DE OLIVEIRA PINTO NETO</td><td>Juízo da 2ª Vara da Comarca de Barra Velha</td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745"><u><b>2. acórdãos - conferidos</b></u> <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>12/02/2026 20:33:42<br>Incluído em mesa para julgamento</td><td> </td><td>12/02/2026 20:33:42</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321764868018540783370594500327|321770886563244135556016070692|50048959220258240067" name="ID-321764868018540783370594500327|321770886563244135556016070692|50048959220258240067"></a><input class="infraCheckbox" id="chkInfraItem43" name="chkInfraItem43" tabindex="0" title="" type="checkbox" value="321764868018540783370594500327|321770886563244135556016070692|50048959220258240067" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50048959220258240067&amp;operador=ou&amp;hash=67788f0f7efdc52a47c04a7915736d06" target="">5004895-92.2025.8.24.0067</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 12/02/2026 19:29:25&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;03/03/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 04/12/2025 16:09:18</td><td align="center">73</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Tráfico de Drogas e Condutas Afins</td><td>DANIEL LICHACK<br></td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321764669184350019842826155181"><u><b>2. acórdãos - ag. conferência</b></u> <a class="memoLocalizadorOrgao321764669184350019842826155181" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321764669184350019842826155181&amp;hash=9862f7dcd935bac15ab64e7bf20a6999')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>03/03/2026</button></td><td>13/02/2026 17:03:09<br>Intimação Eletrônica - Expedida/Certificada - Pauta</td><td> </td><td>12/02/2026 19:26:51</td></tr>
<tr class="infraTrClara" data-classe="000108" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321765584959802505225023225607|321770886563244135556436670759|51051402120258240000" name="ID-321765584959802505225023225607|321770886563244135556436670759|51051402120258240000"></a><input class="infraCheckbox" id="chkInfraItem44" name="chkInfraItem44" tabindex="0" title="" type="checkbox" value="321765584959802505225023225607|321770886563244135556436670759|51051402120258240000" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=51051402120258240000&amp;operador=ou&amp;hash=a494498e0e445877b5785b8dca7808fe" target="">5105140-21.2025.8.24.0000</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 12/02/2026 20:34:12&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS OS ÓRGÃOS&lt;/td&gt;&lt;td&gt;SECJE - 12/12/2025 21:19:27&lt;/td&gt;&lt;td&gt;&lt;div style=text-align: justify&gt;&lt;div style=display: none&gt;JGR_321765584959802505220463504537&lt;/div&gt;A parte RICHARD DE JESUS VALENTIM solicitou justiça gratuita.&lt;br&gt;Este lembrete será removido quando a situação for alterada.&lt;/div&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 12/12/2025 21:19:27</td><td align="center">65</td><td><span class="span-classe-judicial-contraste" data-classe="000108" data-competencia="24" data-situacao="M00">Habeas Corpus Criminal</span><br><label class="text-danger">Antecipação de Tutela</label><br><label class="text-danger">Pessoa com deficiência</label></td><td>Tráfico de Drogas e Condutas Afins</td><td>RICHARD DE JESUS VALENTIM</td><td>Juízo da 1ª Vara Criminal da Comarca da Capital</td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745"><u><b>2. acórdãos - conferidos</b></u> <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>12/02/2026 20:33:42<br>Incluído em mesa para julgamento</td><td> </td><td>12/02/2026 20:33:43</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321765812654759192078877305729|321769773521177763728298173496|50060006820258240079" name="ID-321765812654759192078877305729|321769773521177763728298173496|50060006820258240079"></a><input class="infraCheckbox" id="chkInfraItem45" name="chkInfraItem45" tabindex="0" title="" type="checkbox" value="321765812654759192078877305729|321769773521177763728298173496|50060006820258240079" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50060006820258240079&amp;operador=ou&amp;hash=7bb96f1680a63bb58d4b2dc0d1bbf95d" target="">5006000-68.2025.8.24.0079</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 15/12/2025 12:30:54</td><td align="center">62</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Roubo Majorado</td><td>EDILSON ALVES DOS SANTOS</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644597082"><u><b>* patrimônio *</b></u> <a class="memoLocalizadorOrgao321763997812353340348644597082" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644597082&amp;hash=c7bec21bc5d2f5fbf83a49d0961fcaf2')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767275328932661495022786143"><tt><b>[RÉU PRESO]</b></tt> <a class="memoLocalizadorOrgao321767275328932661495022786143" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767275328932661495022786143&amp;hash=94944512b4fc39cfe59563334a274408')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767630362011201739774582650">[] AMR - VIDE <a class="memoLocalizadorOrgao321767630362011201739774582650" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767630362011201739774582650&amp;hash=27bbacf50175aa89f76cc0b9a6354e6a')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:15<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrClara" data-classe="588" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321765821286596396249784101791|321770395510194341940390228517|80022980720258240033" name="ID-321765821286596396249784101791|321770395510194341940390228517|80022980720258240033"></a><input class="infraCheckbox" id="chkInfraItem46" name="chkInfraItem46" tabindex="0" title="" type="checkbox" value="321765821286596396249784101791|321770395510194341940390228517|80022980720258240033" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=80022980720258240033&amp;operador=ou&amp;hash=f1ec9ce0d99132ff0f50569bdffb6fbb" target="">8002298-07.2025.8.24.0033</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;vitoriasilva - 23/01/2026 12:49:12&lt;/td&gt;&lt;td&gt;Direito de visita&lt;br/&gt;&lt;br/&gt;Ofício [seq. 21.1]: indeferiu a autorização de visita ao agravante por sua companheira&lt;br/&gt;Decisão [seq. 28.1/ev. 1.1]: homologou a decisão administrativa&lt;br/&gt;Agravo [ev. 1.2]: a negativa carece de fundamentação concreta, baseando-se em risco abstrato pela condição de corré da companheira, que está em liberdade provisória sem nenhuma medida cautelar; a restrição impede o contato com sua filha; a decisão viola a nova redação do art. 41, § 1º, da LEP, que reserva exclusivamente ao juiz, e não à administração prisional, a competência para restringir tal direito&lt;br/&gt;Contrarrazões [ev. 1.8]: a visitação por pessoa condenada no mesmo contexto fático revela risco potencial à segurança e à disciplina internas&lt;br/&gt;Parecer [ev. 9.1]: opina pelo desprovimento, ao argumento de que a exigência de ato motivado do juiz para restrição do direito de visita foi observada, a autorização de visitas possibilitaria a retomada do canal direto de comunicação entre agentes que atuaram de forma conjunta e habitual no tráfico de drogas, não há impedimento de que o filho realize visitas acompanhada de outro familiar responsável&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 15/12/2025 14:54:46</td><td align="center">62</td><td><span class="span-classe-judicial-contraste" data-classe="588" data-competencia="24" data-situacao="M00">Agravo de Execução Penal</span><br><label class="text-danger">Réu Preso</label></td><td>Pena Privativa de Liberdade</td><td>LUCAS GABRIEL GRAF</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050"><u><b>4. pautados</b></u> <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:15<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>06/02/2026 16:05:22</td></tr>
<tr class="infraTrEscura" data-classe="94" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321765849303220219872720006168|321769773521177763728298178093|50016890620258240541" name="ID-321765849303220219872720006168|321769773521177763728298178093|50016890620258240541"></a><input class="infraCheckbox" id="chkInfraItem47" name="chkInfraItem47" tabindex="0" title="" type="checkbox" value="321765849303220219872720006168|321769773521177763728298178093|50016890620258240541" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=50016890620258240541&amp;operador=ou&amp;hash=6b5e051630dfd3c97537f2a70714a6b6" target="">5001689-06.2025.8.24.0541</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 30/01/2026 19:34:23&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 15/12/2025 22:41:43</td><td align="center">62</td><td><span class="span-classe-judicial-contraste" data-classe="94" data-competencia="24" data-situacao="M00">Apelação Criminal</span><br><label class="text-danger">Réu Preso</label></td><td>Furto Qualificado</td><td>ANDERSON ANDERSEN</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348644597082"><u><b>* patrimônio *</b></u> <a class="memoLocalizadorOrgao321763997812353340348644597082" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348644597082&amp;hash=c7bec21bc5d2f5fbf83a49d0961fcaf2')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767275328932661495022786143"><tt><b>[RÉU PRESO]</b></tt> <a class="memoLocalizadorOrgao321767275328932661495022786143" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767275328932661495022786143&amp;hash=94944512b4fc39cfe59563334a274408')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321767630362011201739774582650">[] AMR - VIDE <a class="memoLocalizadorOrgao321767630362011201739774582650" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767630362011201739774582650&amp;hash=27bbacf50175aa89f76cc0b9a6354e6a')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>04/02/2026 02:07:15<br>Disponibilizado no Diário Eletrônico - Pauta</td><td> </td><td>30/01/2026 19:36:06</td></tr>
<tr class="infraTrClara" data-classe="000108" data-competencia="26" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321766165528200054545936938641|321770838344216504068771437220|51077150220258240000" name="ID-321766165528200054545936938641|321770838344216504068771437220|51077150220258240000"></a><input class="infraCheckbox" id="chkInfraItem48" name="chkInfraItem48" tabindex="0" title="" type="checkbox" value="321766165528200054545936938641|321770838344216504068771437220|51077150220258240000" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=51077150220258240000&amp;operador=ou&amp;hash=95cab454faa65e0cafc68deda9570849" target="">5107715-02.2025.8.24.0000</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 12/02/2026 20:32:35&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;24/02/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br><label class="text-danger">Segredo de Justiça (Nível 1)</label></td><td> 19/12/2025 14:41:25</td><td align="center">58</td><td><span class="span-classe-judicial-contraste" data-classe="000108" data-competencia="26" data-situacao="M00">Habeas Corpus Criminal</span><br><label class="text-danger">Antecipação de Tutela</label><br><label class="text-danger">Réu Preso</label></td><td>Crime de Descumprimento de Medida Protetiva  de Urgência</td><td>MARCELO DA ROCHA</td><td>Juízo da Vara Criminal da Comarca de Xanxerê<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745">2. acórdãos - conferidos <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050"><u><b>4. pautados</b></u> <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>24/02/2026</button></td><td>11/02/2026 09:57:56<br>Incluído em mesa para julgamento</td><td> </td><td>12/02/2026 00:15:21</td></tr>
<tr class="infraTrEscura" data-classe="588" data-competencia="24" data-situacao="M00"><td valign="top"><a id="lnkInfraID-321766170390547998956390241114|321770886563244135556419958482|80023148820258240023" name="ID-321766170390547998956390241114|321770886563244135556419958482|80023148820258240023"></a><input class="infraCheckbox" id="chkInfraItem49" name="chkInfraItem49" tabindex="0" title="" type="checkbox" value="321766170390547998956390241114|321770886563244135556419958482|80023148820258240023" onclick="infraSelecionarItens(this,'Infra'); selecionaCheckLocalizadores();confirmarMarcarLocalizadorPrincipal();"></td><td><a href="controlador.php?acao=processo_selecionar&amp;acao_origem=localizador_processos_lista&amp;selIdOrgaoJuizo=&amp;selLocalizador=321763997812353340348649938050&amp;num_processo=80023148820258240023&amp;operador=ou&amp;hash=ed488b76b4f31310c21c1d86ecd57a06" target="">8002314-88.2025.8.24.0023</a><a onmouseover="return infraTooltipMostrar('&lt;table class=&quot;infraTable&quot;&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;alexandress - 12/02/2026 20:31:26&lt;/td&gt;&lt;td&gt;&lt;button disabled style=background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;&gt;PAUTADO&lt;br&gt;03/03/2026&lt;/button&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrEscura&quot;&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;vitoriasilva - 05/02/2026 13:37:10&lt;/td&gt;&lt;td&gt;PAUTAR C/ O 8002207-44.2025.8.24.0023&lt;/td&gt;&lt;/tr&gt;&lt;tr class=&quot;infraTrClara&quot;&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;TODOS DO ÓRGÃO&lt;/td&gt;&lt;td&gt;vitoriasilva - 05/02/2026 13:36:42&lt;/td&gt;&lt;td&gt;Detração&lt;br/&gt;&lt;br/&gt;Decisão [seq. 131.1/ev. 1.2]: detração de 784 dias, correspondentes ao período de recolhimento domicilar noturno compreendido entre 03/11/2018 e 20/10/2022&lt;br/&gt;Agravo [ev. 1.1]: o dispositivo prevê a detração apenas nos casos em que houve efetiva privação da liberdade do apenado, não se aplicando às medidas cautelares diversas da prisão&lt;br/&gt;Contrarrazões [ev. 1.4]&lt;br/&gt;Parecer [ev. 7]: opina pelo desprovimento&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;','Lembretes',400);" onmouseout="return infraTooltipOcultar();"><img src="infra_css/imagens/balao.gif" style="width:0.9em; height:0.9em; opacity:1; border-width:0;"></a>&nbsp;<br>Sem Sigilo (Nível 0)</td><td> 19/12/2025 15:53:10</td><td align="center">58</td><td><span class="span-classe-judicial-contraste" data-classe="588" data-competencia="24" data-situacao="M00">Agravo de Execução Penal</span><br><label class="text-danger">Réu Preso</label></td><td>Pena Privativa de Liberdade</td><td>MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA</td><td>HUDSON ANTONIO ROGERIO<br><label class="text-danger font-weight-bold">PROCESSO C/ RÉU PRESO</label></td><td align="center"><input type="hidden" name="numIdLocalizadorOrgao" value="321767889621726212567043193745"><u><b>2. acórdãos - conferidos</b></u> <a class="memoLocalizadorOrgao321767889621726212567043193745" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321767889621726212567043193745&amp;hash=4bc6c54eee417611aa5f9a8f912f6e60')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a> - <input type="hidden" name="numIdLocalizadorOrgao" value="321763997812353340348649938050">4. pautados <a class="memoLocalizadorOrgao321763997812353340348649938050" href="javascript:exibirSubFrm('controlador.php?acao=localizador_orgao_tooltip_cadastrar_subform&amp;id_localizador_orgao=321763997812353340348649938050&amp;hash=daac26b0450f28141377f3ec091c7ac3')" title="Incluir Memo em localizador" aria-label="Incluir Memo em localizador"><img alt="Incluir Memo em localizador" aria-hidden="true" class="infraImgNormal" src="infra_css/imagens/tooltip.gif" border-width:0;=""></a></td><td align="left"><button disabled="" style="background:#236e8e;color:white;font-size:20px;margin:10px;border:none;padding:12px" 16px;border-radius:4px;font-weight:bold;text-align:center;min-width:220px;display:block;="">PAUTADO<br>03/03/2026</button></td><td>13/02/2026 17:03:08<br>Intimação Eletrônica - Expedida/Certificada - Pauta</td><td> </td><td>12/02/2026 20:31:03</td></tr>
</tbody></table><div name="divLinkAbreEmAbas" id="divLinkAbreEmAbas" style="margin:0.5em 0px"><a href="#" onclick="abreProcessosSelecionadosEmAbas();" title="Permite que, ao clicar, todos os processos que estejam selecionados sejam abertos em novas abas (um em cada aba). O bloqueador de pop-ups deve estar desativado. Obs.: Se você não quiser que esse link apareça nas listagens de processos, você pode desativá-lo em &quot;Configurações Personalizadas&quot;.">Abrir os processos selecionados em abas/janelas</a></div>
</div>

<input type="hidden" id="hdnInfraNroItens" name="hdnInfraNroItens" value="50">
<input type="hidden" id="hdnInfraItemId" name="hdnInfraItemId" value="">
<input type="hidden" id="hdnInfraItens" name="hdnInfraItens" value="321743610677181999652557412820|321770886563244135556016051422|50006426120248240046,321748365288444492629388238315|321770629484284422409304314724|50037596120248240078,321737476896232515029001093009|321770886563244135556019609295|50032058820218240060,321750437650937220798056384898|321769773521177763728298126979|50082423120248240080,321750788092714640844452957492|321769773521177763728305687656|50010906320238240080,321751643603671743733233744652|321770886563244135556419929685|50017514520248240003,321753365467765224643989716956|321770886563244135556016054661|50072038720218240020,321755710561489959900686087582|321770050958749555784737786493|50008714420238240082,321756137126321916015320297959|321770886563244135556419933668|50019078520228240073,321758102187815855720941783613|321770886563244135556024648773|00000024520198240006,321758127074895692242985752415|321769773521177763728298129533|50027176720248240533,321758208955897427463378352722|321769773521177763728298131212|50017307620258240539,321758558002127823038535312394|321770886563244135556419936873|50041003020238240076,321758644876461412038907163811|321769773521177763728298133112|50017062920258240028,321758642701318407329312865384|321770886563244135556419940662|50029658120258240538,321758814436051519055144397218|321769773521177763728298136565|50001077420248240518,321758819252060377625565742898|321769773521177763728298141494|50775792220258240000,321758814892676810486154407663|321769773521177763728298138227|50011711520258240024,321758891345284191056351224443|321769773521177763728302843218|50019953320258240166,321759280552164403374147962238|321769438024006309480353447715|50000858120258240582,321759341235882399581579621373|321769773521177763728298145202|50010829020258240541,321760023437220105773085671444|321769773521177763728298147033|50028434620258240125,321760036821771708074026982228|321769773521177763728298148648|50468803120258240038,321760120916087415222095386216|321770886563244135556016058408|50014895320258240523,321760627772392347805960453685|321769773521177763728298151746|50015568920258240564,321760714130011150654350709283|321770886563244135556016061278|50013745820218240010,321760723843712984966384260367|321769773521177763728298153346|00004254620198240057,321761064840404138681032783449|321769773521177763728298154948|50047137020248240058,321761149426168490720246976729|321769773521177763728298156489|50052449520228240004,321761237702895815929158704617|321770886563244135556016064159|50003377920258240519,321761325361923569859992405540|321769773521177763728298159549|50010615820248240086,321761674760124538904987431816|321770886563244135556419944306|50114645120248240033,321761835266443891462237082432|321769773521177763728298161129|50245828120218240039,321761836936817552793485891462|321769773521177763728298164154|50013075320258240075,321761845931492431564177052585|321770629484284422404898222441|50011293620258240518,321761922953225057031178898223|321769773521177763728298167199|50029427720258240040,321762192509207717789277326155|321770886563244135556419947735|50025906220238240017,321762536792613141716062976471|321770886563244135556419951312|50050411520228240011,321762889117902293992331671156|321770886563244135556016067044|50022214920258240518,321763392650188601865121253222|321769773521177763728298170255|50014425220258240144,321764423339765589703198537123|321770886563244135556419955027|80022074420258240023,321764606471431661913533302904|321769773521177763728298171855|50027211820258240518,321764685739276456192465937772|321770886563244135556436660827|51011857920258240000,321764868018540783370594500327|321770886563244135556016070692|50048959220258240067,321765584959802505225023225607|321770886563244135556436670759|51051402120258240000,321765812654759192078877305729|321769773521177763728298173496|50060006820258240079,321765821286596396249784101791|321770395510194341940390228517|80022980720258240033,321765849303220219872720006168|321769773521177763728298178093|50016890620258240541,321766165528200054545936938641|321770838344216504068771437220|51077150220258240000,321766170390547998956390241114|321770886563244135556419958482|80023148820258240023">
<input type="hidden" id="hdnInfraItensHash" name="hdnInfraItensHash" value="26c884e7e9d3aeed3037366a3e5538e2">
<input type="hidden" id="hdnInfraItensSelecionados" name="hdnInfraItensSelecionados" value="">

<input type="hidden" id="hdnInfraSelecoes" name="hdnInfraSelecoes" value="Infra">

<input type="hidden" id="hdnInfraCampoOrd" name="hdnInfraCampoOrd" value="Autuacao">
<input type="hidden" id="hdnInfraTipoOrd" name="hdnInfraTipoOrd" value="ASC">
            <nav class="infraAreaPaginacao mb-2" id="divInfraAreaPaginacaoInferior">
                <ul class="pagination pagination-sm justify-content-center mb-1">
                                        <li class="page-item disabled" disabled="disabled" id="lnkInfraPrimeiraPaginaInferior">
                        <a href="javascript:void(0);" class="page-link pl-1 pr-1" title="Primeira Página" aria-label="Primeira Página" tabindex="0"><i aria-hidden="true" class="material-icons icon-aligned">first_page</i></a>
                    </li>
                                        <li class="page-item disabled" disabled="disabled" id="lnkInfraPaginaAnteriorInferior">
                        <a href="javascript:void(0);" class="page-link pl-1 pr-1" title="Página Anterior" aria-label="Página Anterior" tabindex="0"><i aria-hidden="true" class="material-icons icon-aligned">navigate_before</i></a>
                    </li>
                                                <li class="page-item">
                                <div class="dropdown bootstrap-select form-control form-control-sm page-link"><select data-style="btn-primary" class="selectpicker form-control form-control-sm page-link" data-custom-title-format="{0} de {1}" id="selInfraPaginacaoInferior" onchange="infraAcaoPaginar('=',this.value,'Infra', null);" tabindex="0">
                                    <option value="0" selected="selected">1</option>
<option value="1">2</option>

                                </select><button type="button" tabindex="-1" class="dropdown-toggle btn-primary" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" data-id="selInfraPaginacaoInferior" title="1"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">1 de 2</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-2" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                            </li>
                            <script>
                                $(function (){
                                 $("#selInfraPaginacaoInferior").selectpicker();
                                    infraBS4SelectAtivarPaginacao("#selInfraPaginacaoInferior");
                                });
                            </script>
                                        <li class="page-item " id="lnkInfraProximaPaginaInferior">
                        <a href="javascript:void(0);" class="page-link pl-1 pr-1" onclick="infraAcaoPaginar('+',0,'Infra', null);" title="Próxima Página" aria-label="Próxima Página" tabindex="0"><i aria-hidden="true" class="material-icons icon-aligned">navigate_next</i></a>
                    </li>
                                        <li class="page-item disabled" disabled="disabled" id="lnkInfraUltimaPaginaInferior">
                        <a href="javascript:void(0);" class="page-link pl-1 pr-1" title="Última Página" aria-label="Última Página" tabindex="0"><i aria-hidden="true" class="material-icons icon-aligned">last_page</i></a>
                    </li>
                </ul>
            </nav>

<input type="hidden" id="hdnInfraPaginaAtual" name="hdnInfraPaginaAtual" value="0">
<input type="hidden" id="hdnInfraHashCriterios" name="hdnInfraHashCriterios" value="7cbff1954d24ef11bf27a9a79a012591">
<div id="divCamposFiltro" class="eproc-card mt-3"><div class="row"><div class="col-12 col-sm-6 col-xl-3 border-right"><div id="divPaginacao"><div class="font-weight-bold" id="divDesPaginacao">Tipo de paginação</div><div><input type="radio" name="paginacao" id="optPaginacao25" value="25" class="infraRadio mr-2"><label id="lblPaginacao25" for="optPaginacao25" class="infraRadio mr-2" "="">25 processos por página </label></div><div><input type="radio" name="paginacao" id="optPaginacao50" value="50" class="infraRadio mr-2" checked="checked"><label id="lblPaginacao50" for="optPaginacao50" class="infraRadio mr-2" "="">50 processos por página </label></div><div><input type="radio" name="paginacao" id="optPaginacao100" value="100" class="infraRadio mr-2"><label id="lblPaginacao100" for="optPaginacao100" class="infraRadio mr-2" "="">100 processos por página </label></div></div></div><div class="col-11 col-md-5 mt-xs-3 mt-sm-3 mt-xl-0"><div id="divCriterioExibicao"><div class="font-weight-bold" id="divDesCriterioExibicao">Critério de Exibição</div><div class="row"><div class="col-6"><label id="lbloptchkcClasse" for="optchkcClasse" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optchkcClasse" id="optchkcClasse" value="S" class="classDetalhes infraLabelCheckbox mr-2" checked="checked">Classe </label></div><div class="col-6"><label id="lbloptAssunto" for="optAssunto" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optAssunto" id="optAssunto" value="S" class="classDetalhes infraLabelCheckbox mr-2" checked="checked">Assunto </label></div><div class="col-6"><label id="lbloptAutoresPrincipais" for="optAutoresPrincipais" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optAutoresPrincipais" id="optAutoresPrincipais" value="S" class="classDetalhes infraLabelCheckbox mr-2" checked="checked">Autores Principais </label></div><div class="col-6"><label id="lbloptAdvAutoresPrincipais" for="optAdvAutoresPrincipais" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optAdvAutoresPrincipais" id="optAdvAutoresPrincipais" value="S" class="classDetalhes infraLabelCheckbox mr-2">Advogado Autores </label></div><div class="col-6"><label id="lbloptLocalidadeAutor" for="optLocalidadeAutor" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optLocalidadeAutor" id="optLocalidadeAutor" value="S" class="classDetalhes infraLabelCheckbox mr-2">Localidade Autores </label></div><div class="col-6"><label id="lbloptJuizo" for="optJuizo" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optJuizo" id="optJuizo" value="S" class="classDetalhes infraLabelCheckbox mr-2">Juízo </label></div><div class="col-6"><label id="lbloptDataAutuacao" for="optDataAutuacao" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optDataAutuacao" id="optDataAutuacao" value="S" class="classDetalhes infraLabelCheckbox mr-2" checked="checked">Data Autuação </label></div><div class="col-6"><label id="lbloptDataAudiencia" for="optDataAudiencia" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optDataAudiencia" id="optDataAudiencia" value="S" class="classDetalhes infraLabelCheckbox mr-2">Data da Audiência </label></div><div class="col-6"><label id="lbloptGabineteOrigem" for="optGabineteOrigem" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optGabineteOrigem" id="optGabineteOrigem" value="S" class="classDetalhes infraLabelCheckbox mr-2">Gabinete Origem </label></div><div class="col-6"><label id="lbloptPrioridadeAtendimento" for="optPrioridadeAtendimento" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optPrioridadeAtendimento" id="optPrioridadeAtendimento" value="S" class="classDetalhes infraLabelCheckbox mr-2">Prioridade de Atendimento </label></div><div class="col-6"><label id="lbloptReusPrincipais" for="optReusPrincipais" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optReusPrincipais" id="optReusPrincipais" value="S" class="classDetalhes infraLabelCheckbox mr-2" checked="checked">Réus Principais </label></div><div class="col-6"><label id="lbloptAdvReusPrincipais" for="optAdvReusPrincipais" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optAdvReusPrincipais" id="optAdvReusPrincipais" value="S" class="classDetalhes infraLabelCheckbox mr-2">Advogado Réus </label></div><div class="col-6"><label id="lbloptLocalidadeReu" for="optLocalidadeReu" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optLocalidadeReu" id="optLocalidadeReu" value="S" class="classDetalhes infraLabelCheckbox mr-2">Localidade Réus </label></div><div class="col-6"><label id="lbloptchkcUltimoEvento" for="optchkcUltimoEvento" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optchkcUltimoEvento" id="optchkcUltimoEvento" value="S" class="classDetalhes infraLabelCheckbox mr-2" checked="checked">Último Evento </label></div><div class="col-6"><label id="lbloptDocumentoEventoComDocumento" for="optDocumentoEventoComDocumento" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optDocumentoEventoComDocumento" id="optDocumentoEventoComDocumento" value="S" class="classDetalhes infraLabelCheckbox mr-2">Últimos documentos juntados </label></div><div class="col-6"><label id="lbloptNdiasSituacao" for="optNdiasSituacao" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optNdiasSituacao" id="optNdiasSituacao" value="S" class="classDetalhes infraLabelCheckbox mr-2" checked="checked">Nº Dias Situação </label></div><div class="col-6"><label id="lbloptTipoEventoSentencaOrigem" for="optTipoEventoSentencaOrigem" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optTipoEventoSentencaOrigem" id="optTipoEventoSentencaOrigem" value="S" class="classDetalhes infraLabelCheckbox mr-2">Tipo de Evento de Sentença na Origem </label></div><div class="col-6"><label id="lbloptEventoSentencaOrigem" for="optEventoSentencaOrigem" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optEventoSentencaOrigem" id="optEventoSentencaOrigem" value="S" class="classDetalhes infraLabelCheckbox mr-2">Evento de Sentença na Origem </label></div><div class="col-6"><label id="lbloptDocumentoProcessoOrig" for="optDocumentoProcessoOrig" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optDocumentoProcessoOrig" id="optDocumentoProcessoOrig" value="S" class="classDetalhes infraLabelCheckbox mr-2">Docs. do Processo Originário </label></div><div class="col-6"><label id="lbloptDocumentoJulgamento" for="optDocumentoJulgamento" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optDocumentoJulgamento" id="optDocumentoJulgamento" value="S" class="classDetalhes infraLabelCheckbox mr-2">Docs. do Julgamento </label></div><div class="col-6"><label id="lblchkStatusProcesso" for="chkStatusProcesso" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="chkStatusProcesso" id="chkStatusProcesso" value="S" class="classDetalhes infraLabelCheckbox mr-2">Situação Processo </label></div><div class="col-6"><label id="lblchkTemasRepetitivos" for="chkTemasRepetitivos" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="chkTemasRepetitivos" id="chkTemasRepetitivos" value="S" class="classDetalhes infraLabelCheckbox mr-2">Precedentes Vinculados </label></div><div class="col-6"><label id="lblchkTemasRepetitivosIA" for="chkTemasRepetitivosIA" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="chkTemasRepetitivosIA" id="chkTemasRepetitivosIA" value="S" class="classDetalhes infraLabelCheckbox mr-2">Precedentes por IA </label></div><div class="col-6"><label id="lblchkTemasRepetitivosInformados" for="chkTemasRepetitivosInformados" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="chkTemasRepetitivosInformados" id="chkTemasRepetitivosInformados" value="S" class="classDetalhes infraLabelCheckbox mr-2">Precedentes pelo Peticionante </label></div><div class="col-6"><label id="lblchkRecursosTribunaisSuperiores" for="chkRecursosTribunaisSuperiores" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="chkRecursosTribunaisSuperiores" id="chkRecursosTribunaisSuperiores" value="S" class="classDetalhes infraLabelCheckbox mr-2">Recursos Trib. Superiores </label></div><div class="col-6"><label id="lbloptJuizoOrigem" for="optJuizoOrigem" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optJuizoOrigem" id="optJuizoOrigem" value="S" class="classDetalhes infraLabelCheckbox mr-2">Juizo de Origem </label></div><div class="col-6"><label id="lbloptJuizoOrigemOrgaoAux" for="optJuizoOrigemOrgaoAux" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optJuizoOrigemOrgaoAux" id="optJuizoOrigemOrgaoAux" value="S" class="classDetalhes infraLabelCheckbox mr-2">Juízo de Origem (Órgão auxílio) </label></div><div class="col-6"><label id="lbloptClasseOrigem" for="optClasseOrigem" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optClasseOrigem" id="optClasseOrigem" value="S" class="classDetalhes infraLabelCheckbox mr-2">Classe do Processo de Origem </label></div><div class="col-6"><label id="lbloptchkNumLinha" for="optchkNumLinha" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optchkNumLinha" id="optchkNumLinha" value="S" class="classDetalhes infraLabelCheckbox mr-2">Nº linha </label></div><div class="col-6"><label id="lbloptTipoIntimacaoCEAB" for="optTipoIntimacaoCEAB" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optTipoIntimacaoCEAB" id="optTipoIntimacaoCEAB" value="S" class="classDetalhes infraLabelCheckbox mr-2" checked="checked">Tipo de Intimação CEAB/DJ </label></div><div class="col-6"><label id="lbloptConteudoLembrete" for="optConteudoLembrete" class="classDetalhes infraLabelCheckbox mr-2" "=""><input type="checkbox" name="optConteudoLembrete" id="optConteudoLembrete" value="S" class="classDetalhes infraLabelCheckbox mr-2" checked="checked">Último lembrete </label></div></div></div></div></div></div><div id="divInfraBarraComandosInferior" class="infraBarraComandos 1 mt-2">
<button type="submit" accesskey="C" id="btnConsultar" value="Consultar" class="infraButton btn-primary" onclick="return validarSelecaoForm();">
	    <span class="infraTeclaAtalho">C</span>onsultar</button>&nbsp;
<button type="button" accesskey="G" id="sbmExcel" value="Gerar Planilha" onclick="gerarExcel()" class="infraButton"><span class="infraTeclaAtalho">G</span>erar Planilha</button>&nbsp;
<button type="button" accesskey="V" id="btnVoltar" onclick="location.href='controlador.php?acao=principal&amp;acao_origem=localizador_processos_lista&amp;hash=c8ef09297f5232db3271d583f1fbe0a0'" class="infraButton">
	            <span class="infraTeclaAtalho">V</span>oltar</button>&nbsp;
</div>
        <input type="hidden" id="hdnExcel" name="hdnExcel" value="0">
        <input type="hidden" id="hdnIndResetarPaginacao" name="hdnIndResetarPaginacao" value="0">
        <input type="hidden" id="hdnIdSessaoJulgamento" name="hdnIdSessaoJulgamento" value="">
    </form><div id="divInfraAjaxtxtPreferencia" class="infraAjaxAutoCompletar"></div>

    <form id="frmAcao" method="post">
        <input type="hidden" id="paginacao" name="paginacao" value="50">
        <input type="hidden" id="bolAcaoLocalizador" name="bolAcaoLocalizador" value="true">
        <input type="hidden" id="hdnInfraItensSelecionados" name="hdnInfraItensSelecionados" value="">
        <input type="hidden" id="hdnProcessosItensSelecionados" name="hdnProcessosItensSelecionados" value="">
        <input type="hidden" id="selLocalizadorPrincipal" name="selLocalizadorPrincipal" class="infraSelect" value="">
        <input type="hidden" id="hdnEspelho" name="hdnEspelho" value="">
        <input type="hidden" id="selLocalizadorPrincipal_text" name="selLocalizadorPrincipal_text" value="">
                    <input type="hidden" id="selLocalizadorPrincipal" name="selLocalizadorPrincipal" class="infraSelect" value="321763997812353340348649938050">

    </form>

    <form id="frmLoteMinuta" method="post" target="_blank" action="controlador.php?acao=minuta_cadastrar_lote&amp;sin_abrir_link_janela=S&amp;hash=2d779fc19fa72911830ff88ce4011329">
        <input type="hidden" id="hdnListaIdProcesso" name="hdnListaIdProcesso" value="">
    </form>
    <form id="frmSessaoJulgamento" method="post" action="controlador.php?acao=sessao_julgamento_item/cadastrar_bloco&amp;id_sessao_julgamento=&amp;hash=57f216dbf905bee2dd1e5428c54d48a8">
    </form>

</div>
<script>
    $('a[data-doc]').on('click', function () {
        $('a[data-doc]').removeClass('extraUltimoLinkClicado');
        $(this).addClass('extraUltimoLinkClicado');
    });
</script>
<style>
    .extraUltimoLinkClicado {
        background: #ff3;
        color: #444;
        border: dotted 1px #fca;
    }
</style><style type="text/css">
    [draggable=true] {
        cursor: move;
    }

    #divBoxPreview {
        display: none;
        position: fixed;
        margin: auto;
        width: 50%;
        height: 50%;
        min-height: 400px;
        padding-bottom: 20px;
        padding-top: 30px;
        border: 5px solid #ddd;
        background: #ddd;
        box-shadow: 0 0 4px 1px #666;
        z-index: 9999;
    }

    #fraBoxPreview {
        background: #fff;
        border: none;
        width: 100%;
        height: 100%;
    }

    .btnPreview {
        cursor: pointer;
        width: 35px;
        height: 25px;
        position: absolute;
        color: #fff;
        font-weight: bold;
        text-align: center;
        line-height: 25px;
        margin-right: 1%;
        border-radius: 3px;
        border: 1px solid #bbb;
        font-size: 1em;
        text-shadow: #0e0e0e 1px 1px 2px;
    }

    .frameOverlay {
        height: 100%;
        width: 100%;
        background: rgba(34, 34, 34, 0.5);
        position: absolute;
        top: 0;
        left: 0;
        display: none;
    }

</style>

<div draggable="true" id="divBoxPreview">
    <div class="btnPreview" style="top:0px; right:40px;">
        <a id="linkOpenNew" target="_blank">
            <img tabindex="52" src="imagens/transferir_item.png" style="box-sizing:border-box; padding: 7px 12px; display:block;width:100%; height:100%;-webkit-filter: invert(100%); filter: invert(100%);" width="12" height="12" title="Abrir documento em nova aba" alt="Abrir documento em nova aba">
        </a>
    </div>
    <div id="divClosePreview" style="top:0px; right:0px;text-align: center;" title="Fechar pré-visualização" class="btnPreview infraBarraTribunal">X
    </div>
    <div class="frameOverlay"></div>
    <iframe id="fraBoxPreview" src=""></iframe>
</div>
            <script>
                $(document).ready(function () {
                    var parent = $('#tabelaLocalizadores'),
                        seletor = 'a[data-doc]',
                        previsualizacao = new PrevisualizacaoDocumento(parent, seletor);
                    previsualizacao.iniciar();
                    })
                    
        </script></div><script>
    $("#selNovoLocalizador option").map(function() {
        var el=$(this);
        el.html(el.text().replace('<','&lt;'));
    });
</script>
        <script>
        function mostrar_informacoes_de_desempenho() {
            alert(`
                - Usuário: alexandress / GCRI0602 \n
                - Acesso ao servidor [svmlx-eproc2gsrv-22] às 10:23:51 do dia 15/02/2026 \n
                - Tempo de Processamento: 0.429s \n
                - Utilização de Memória: 21432.45KB`);
        }
        $("#frmProfile .profile-body a#btn-encerrar-sessao").before(`
               
        <a class="d-flex profile-item" title="" href="javascript:mostrar_informacoes_de_desempenho()">
            <div><i class="material-icons" aria-hidden="true">history</i></div>
            <div>Tempo de Processamento</div>
        </a>`);
        </script>
            <div id="vlibras-container" vw="" style="left: initial; right: 0px; top: 50%; bottom: initial; transform: translateY(calc(-50% - 10px));">
        <div id="vlibras-access-button" vw-access-button="" class="active" style=""><img class="vp-access-button" data-src="assets/access_icon.svg" alt="Conteúdo acessível em Libras usando o VLibras Widget com opções dos Avatares Ícaro, Hosana ou Guga." src="https://vlibras.gov.br/app//assets/access_icon.svg">
<img class="vp-pop-up" data-src="assets/access_popup.jpg" alt="Conteúdo acessível em Libras usando o VLibras Widget com opções dos Avatares Ícaro, Hosana ou Guga." src="https://vlibras.gov.br/app//assets/access_popup.jpg">
</div>
        <div vw-plugin-wrapper=""><div vp="">
  <div vp-box=""></div>
  <div vp-message-box=""></div>
  <div vp-settings=""></div>
  <div vp-dictionary=""></div>
  <div vp-settings-btn=""></div>
  <div vp-info-screen=""></div>
  <div vp-suggestion-screen=""></div>
  <div vp-translator-screen=""></div>
  <div vp-more-options-screen=""></div>
  <div vp-emotions-tooltip=""></div>
  <div vp-main-guide-screen=""></div>
  <div vp-suggestion-button=""></div>
  <div vp-rate-box=""></div>
  <div vp-change-avatar=""></div>
  <div vp-aux-controls=""></div>
  <div vp-controls=""></div>
  <span vp-click-blocker=""></span>
</div>
</div>
    </div>
    <script defer="defer" src="https://vlibras.gov.br/app/vlibras-plugin.js" charset="UTF-8" onload="new window.VLibras.Widget('https://vlibras.gov.br/app');">
    </script>                <link rel="stylesheet" href="css/dist/bundle-jquery-ui.css?9.18.2.3-2.41.4">
                <script charset="utf-8" src="js/dist/npm.lodash.5796a7d478236df54e3f.js"></script><script charset="utf-8" src="js/dist/npm.marked.19e55f4aba11385b2755.js"></script><script charset="utf-8" src="js/dist/npm.unorm.315b8b64961e5a1e979e.js"></script><script charset="utf-8" src="js/dist/npm.lodash.debounce.7779bfcead8798c9ab81.js"></script><script charset="utf-8" src="js/dist/npm.datatables.net-buttons.74e5d664423ec12c6777.js"></script><script charset="utf-8" src="js/dist/npm.pdfmake.d87c3e800f7e5c281b9d.js"></script><script charset="utf-8" src="js/dist/npm.datatables.net.8b7763f3e2c605f99197.js"></script><script charset="utf-8" src="js/dist/npm.datatables.net-select.95d81a3a4c689efaa609.js"></script><script charset="utf-8" src="js/dist/npm.datatables.net-select-bs4.79be88935ba4f35b2256.js"></script><script charset="utf-8" src="js/dist/npm.datatables.net-rowgroup.93ba3420cdba631aea19.js"></script><script charset="utf-8" src="js/dist/npm.datatables.net-rowgroup-bs4.9e84b03ed914f52a1724.js"></script><script charset="utf-8" src="js/dist/npm.datatables.net-responsive.ecdf2ed1cf37d84fc7bb.js"></script><script charset="utf-8" src="js/dist/npm.datatables.net-responsive-bs4.054c4b66d217da398913.js"></script><script charset="utf-8" src="js/dist/npm.datatables.net-buttons-bs4.aa6d097ed02d4e3a2db4.js"></script><script charset="utf-8" src="js/dist/npm.datatables.net-bs4.bac12b9c70f4806f457d.js"></script><script charset="utf-8" src="js/dist/npm.plupload.610157adc73e9698a59e.js"></script><script charset="utf-8" src="js/dist/npm.jszip.11f1704c42eb3d6f182b.js"></script><script charset="utf-8" src="js/dist/npm.focus-within-polyfill.46e5d5951e08a913a20e.js"></script><script charset="utf-8" src="js/dist/5298.672832933f81de9e4be6.js"></script><script charset="utf-8" src="js/dist/466.ad76689f21f121e64e47.js"></script><script charset="utf-8" src="js/dist/8901.7243d1049cfb72826ec6.js"></script><script charset="utf-8" src="js/dist/4312.2dc563324727b497bab2.js"></script><script charset="utf-8" src="js/dist/main-pos.d3242dc667881a16389e.js"></script>                
			<link href="infra_css/infra-barra-progresso.css?9.18.2.3-2.41.4" rel="stylesheet" type="text/css" media="all"><link href="infra_css/infra-impressao-global.css?9.18.2.3-2.41.4" rel="stylesheet" type="text/css" media="print">
	<link href="infra_css/infra-ajax.css?9.18.2.3-2.41.4" rel="stylesheet" type="text/css" media="all">
				<link href="infra_js/calendario/v1/infra-calendario.css?9.18.2.3-2.41.4" rel="stylesheet" type="text/css" media="all">
				<link href="infra_js/mapa/infra-mapa.css?9.18.2.3-2.41.4" rel="stylesheet" type="text/css" media="all">
		                        <div class="bootstrap-styles">
                            
                        </div>
                    </div>
                </div>
                            </div>

                        <div class="bootstrap-styles ">
                <button id="backTop" type="button" class="btn btn-light shadow-sm" style="display: none;" aria-label="Navegar para início" tabindex="-1">
                    <i class="material-icons p-0">keyboard_arrow_up</i>
                </button>
                <button id="backBottom" type="button" class="btn btn-light shadow-sm" style="" aria-label="Navegar para fim" tabindex="-1">
                    <i class="material-icons p-0">keyboard_arrow_down</i>
                </button>
            </div>

    <input type="hidden" id="hdnInfraPrefixoCookie" name="hdnInfraPrefixoCookie" value="TJSC_Eproc_alexandress">

                                                <input type="hidden" name="url_websocket" value="wss://eprocwebsocket.tjsc.jus.br:443">
            <input type="hidden" name="url_gerar_ticket" value="controlador_ajax.php?acao_ajax=controle_acesso_websocket_gerar_ticket&amp;hash=0c7f7758e06e47dc70ff26eb39c96813">
            <input type="hidden" name="url_websocket_teste" value="controlador.php?acao=infra/teste_websocket/notificar&amp;hash=b7f86d2d5ca3ce0bb26e5b29afa85861">

    <div id="infraDivImpressao" class="infraImpressao "></div>


    <div class="bootstrap-styles" aria-live="polite">
        <div id="toasts-container" class="d-block flex-column-reverse w-100 p-2 align-content-end h-100 w-100 fixed-bottom pe-none" style="pointer-events: none"></div>
    </div>

    <script src="js/siscom_desktop_icone.js"></script>

</body></html>
