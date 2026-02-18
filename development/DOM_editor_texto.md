<html lang="pt-br" style="font-size: 100%;" data-eprobe-page-type="processo" data-lt-installed="true"><head><style id="eprobe-instant-styles">
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
        
        /* Fontes carregadas via <link> nao-bloqueante (ver abaixo) */
        
        /* Alinhamento de icones agora em anti-flash.css */
        
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
<link rel="shortcut icon" href="imagens/icons/favicons/favicon_trf4P.ico"><meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"><style id="css-ddslick" type="text/css">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:10px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:10px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; }.dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{ position:relative;}​ .dd-selected-text { font-weight:bold}​</style><style>.cke{visibility:hidden;}</style><style>[vw] [vw-access-button]{display:none;flex-direction:row-reverse;width:40px;height:40px;cursor:pointer;overflow:hidden;position:absolute;border-radius:8px;transition:all 0.5s ease;right:0;left:auto}[vw] [vw-access-button] img{max-height:40px;transition:all 0.5s ease;border-radius:8px;opacity:1 !important;visibility:visible !important}[vw] [vw-access-button] .vp-access-button{width:40px;height:40px;z-index:1}[vw] [vw-access-button] .vp-pop-up{position:absolute;height:40px;min-width:150px;z-index:0;left:0;right:auto}[vw] [vw-access-button]:hover{width:200px}[vw] [vw-access-button].isLeft{flex-direction:row;left:0;right:auto}[vw] [vw-access-button].isLeft .vp-pop-up{left:auto;right:0}[vw] [vw-access-button].isTopOrBottom:hover{bottom:-20px;top:0;margin-right:-80px}[vw] [vw-access-button].active{display:flex}
</style><style>[vw].left [vw-plugin-wrapper]{float:left}[vw] [vw-plugin-wrapper]{position:relative;display:none;width:300px;height:100%;float:right;background:white;-webkit-box-shadow:0px 0px 15px rgba(0,0,0,0.2);-moz-box-shadow:0px 0px 15px rgba(0,0,0,0.2);box-shadow:0px 0px 15px rgba(0,0,0,0.2);border-radius:12px;-moz-border-radius:12px;-webkit-border-radius:12px}[vw] [vw-plugin-wrapper].active{display:-webkit-flex;display:flex;flex-direction:column;-webkit-flex-direction:column;height:450px;max-width:100%;min-height:100%}
</style><style>div[vw]{position:fixed;max-width:95vw;min-height:40px;min-width:40px;z-index:2147483645 !important;display:none;margin:10px !important}div[vw].enabled{display:block}div[vw].active{margin-top:-285px}div[vw].left{left:0;right:initial}
</style><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&amp;display=swap"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&amp;display=swap" media="all"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&amp;display=swap" media="all"><style>
        /* Roboto carregada via <link> nao-bloqueante */
        
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
        
        /* CORRECAO: Icones substituidos nao devem interceptar cliques */
        .substituted-icon:not(.clickable-icon) {
            pointer-events: none !important;
        }
        
        /* Material Icons substituidos tambem nao devem interceptar cliques */
        .material-symbols-outlined.substituted-icon:not(.clickable-icon) {
            pointer-events: none !important;
        }

        /* Containers de icones NAO bloqueiam cliques - herdam pointer-events do pai */

        /* SVGs de icones eProbe */
        svg.substituted-icon:not(.clickable-icon) {
            pointer-events: none !important;
        }
        
        svg.iconeFerramentas:not(.clickable-icon) {
            pointer-events: none !important;
        }
        
        /* Elementos com data-eprobe-icon-replaced */
        [data-eprobe-icon-replaced="true"]:not(.clickable-icon) {
            pointer-events: none !important;
        }
        
        /* Containers de icones eProbe devem ser clicaveis (herdam do link pai) */
        span[data-eprobe-icon-container] {
            pointer-events: auto !important;
        }

        /* Links e botoes devem ser clicaveis */
        a,
        button,
        a[data-eprobe-intercepted],
        .infraLegendObrigatorio a,
        .infraLegendObrigatorio button {
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
    </style><style id="eprobe-instant-performance">
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
                </style><script type="text/javascript" src="https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/config.js?t=1771276196539"></script><link rel="stylesheet" type="text/css" href="https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/skins/moono/editor.css?t=1771276196539"><script type="text/javascript" src="https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/lang/pt-br.js?t=1771276196539"></script><script type="text/javascript" src="https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/styles.js?t=1771276196539"></script><script type="text/javascript" src="https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1_plugins_externos/find/plugin.js?t=1771276196539"></script><script type="text/javascript" src="https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1_plugins_externos/base64image/plugin.js?t=1771276196539"></script><script type="text/javascript" src="https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1_plugins_externos/wsc/plugin.js?t=1771276196539"></script><link rel="stylesheet" type="text/css" href="https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/scayt/dialogs/dialog.css?t=1771276196539"><link rel="stylesheet" type="text/css" href="https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/tableselection/styles/tableselection.css?t=1771276196539"><link rel="stylesheet" type="text/css" href="https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/autocomplete/skins/default.css?t=1771276196539"><link rel="stylesheet" type="text/css" href="https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/dialog/styles/dialog.css?t=1771276196539"><link rel="stylesheet" type="text/css" href="https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/copyformatting/styles/copyformatting.css?t=1771276196539"><script type="text/javascript" src="https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1_plugins_externos/base64image/lang/pt-br.js?t=1771276196539"></script><script type="text/javascript" src="https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1_plugins_externos/find/lang/pt-br.js?t=1771276196539"></script><script type="text/javascript" src="https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1_plugins_externos/wsc/lang/pt-br.js?t=1771276196539"></script><style type="text/css">textarea.placeholder { color: #999; font-style: italic; }</style><style type="text/css">textarea.placeholder { color: #999; font-style: italic; }</style><style id="eprobe-pesquisa-navbar-style">
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
        </style></head><body onload="infraProcessarResize(); infraProcessarMouseDown(); inicializar();" class="bootstrap-styles instancia-2g" style="overflow-y: hidden;" data-eprobe-processo-page="true"><input id="url_log_erro_javascript" name="url_log_erro_javascript" type="hidden" value="controlador_ajax.php?acao_ajax=log_erro_javascript&amp;hash=20f965913c36d499d9f5863df8028043">
<meta content="IE=9; IE=10" http-equiv="X-UA-Compatible"><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<meta name="robots" content="noindex">
<title>:: Editando minuta RELATÓRIO/VOTO - 7379729 ::</title>
<link href="css/estilos-editor-integrado-leiaute.css?9.18.2.3-2.41.4" rel="stylesheet" type="text/css" media="all">
<link href="css/estilos-minuta-visualizar.css?9.18.2.3-2.41.4" rel="stylesheet" type="text/css" media="all">
<link href="css/calendario_videoconferencia.css?9.18.2.3-2.41.4" rel="stylesheet" type="text/css" media="all">
                <link rel="stylesheet" charset="utf-8" href="css/dist/bundle-bs4.css?9.18.2.3-2.41.4">
                <link rel="stylesheet" charset="utf-8" href="css/dist/bundle-bs4-contrast.css?9.18.2.3-2.41.4">
                <link rel="stylesheet" charset="utf-8" href="css/dist/bundle-global.css?9.18.2.3-2.41.4">
                <link rel="stylesheet" charset="utf-8" href="css/dist/bundle-infra.css?9.18.2.3-2.41.4">
                <link rel="stylesheet" charset="utf-8" href="css/dist/bundle-infra-contrast.css?9.18.2.3-2.41.4"><link href="infra_js/multiple-select/multiple-select.css?9.18.2.3-2.41.4" rel="stylesheet" type="text/css" media="all">
<link href="css/cor-capa.php" rel="stylesheet" type="text/css" media="screen">
<style>

  html, body{
  margin:0;
  padding:0;
  overflow:hidden;
  height: 100%;
  }

#lembrete {
	position: fixed;
	width: 19%;
    height: auto;
	overflow:scroll;
	overflow-x:hidden;
	overflow-y:auto;
	z-index:2;
    background-color: #c0c0c0;
}
#lembrete table.infraTable td {
    padding: 0.1rem;
    background-color: #f8f880;
    text-align:left;
   	font-size: 10pt;
	font-family: arial,verdana,helvetica,sans-serif;
	vertical-align:text-top;
	padding:1px;
	margin-top:0mm;
	margin-bottom:0mm;

}
#lembrete table.infraTable td label{
    text-align:left;
   	font-size: 10pt;
	font-family: arial,verdana,helvetica,sans-serif;
	vertical-align:text-top;
	padding:1px;
	margin-top:0mm;
	margin-bottom:0mm;

}
  .bootstrap-styles hr {
      margin-top: 0.1rem!important;
      margin-bottom: 0.1rem!important;
}
  .ui-dialog {
  overflow: visible;
  }
#infoMessage {
  cursor:pointer;
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
			</script><script type="text/javascript" charset="iso-8859-1" src="js/jquery.ui.datepicker-br.js?9.18.2.3-2.41.4"></script>
<script type="text/javascript" charset="iso-8859-1" src="js/he-master/he.js?9.18.2.3-2.41.4"></script>
<script type="text/javascript" charset="iso-8859-1" src="js/minuta_url_js.php?9.18.2.3-2.41.4"></script>
<script type="text/javascript" charset="iso-8859-1" src="js/minuta.js?9.18.2.3-2.41.4?9.18.2.3-2.41.4"></script>
<script type="text/javascript" charset="iso-8859-1" src="js/editorweb.js?9.18.2.3-2.41.4?9.18.2.3-2.41.4"></script>
<script type="text/javascript" charset="iso-8859-1" src="js/editorwebjs.php?9.18.2.3-2.41.4?9.18.2.3-2.41.4"></script>
<script type="text/javascript" charset="iso-8859-1" src="editor/ckeditor4_22_1/ckeditor.js?9.18.2.3-2.41.4"></script>
<script type="text/javascript" charset="iso-8859-1" src="view/templates/ementa_personalizada_ia/modal.js?9.18.2.3-2.41.4"></script>
<script type="text/javascript" charset="iso-8859-1" src="view/templates/ementa_personalizada_ia/listagem_prompts.js?9.18.2.3-2.41.4"></script>
<script type="text/javascript" charset="iso-8859-1" src="js/inteligencia_artificial/config_string_magica.js?9.18.2.3-2.41.4"></script>
<script type="text/javascript" charset="iso-8859-1" src="js/inteligencia_artificial/processar_string_magica.js?9.18.2.3-2.41.4"></script>
<script>


    var isCartaAr =  '';
    var numMaxHeightTextArea =  '520';
    var isModeloInstitucional =  '';
    var globalDataSizeMsg = '29.94 MBytes restantes/30 MBytes';
    var globalStrHtmlVersaoConteudoSecaoEditavelVazia = '<?xml version="1.0" encoding="ISO-8859-1"?><html lang="pt-br"><head><meta charset="ISO-8859-1"></meta><title>Documento:7379729</title><style></style></head><body><article data-id_documento="321770737414589209876472877413" data-cod_documento="7379729" data-id_modelo="41479478118717491014664380816" data-timestamp="1770748833" data-temidparagrafos="true"><header id="7379729_1"></header><section id="7379729_2" contentEditable="false" data-nome_apresentacao="Endereço" data-nome="endereco" data-sin_conteudo_obrigatorio="true" data-estilo_padrao="endereco"></section><section id="7379729_3" contentEditable="false" data-nome_apresentacao="Identificação do Processo" data-nome="identificacao_processo" data-sin_conteudo_obrigatorio="true" data-estilo_padrao="identificacao_processo"></section><section id="7379729_4" contentEditable="false" data-nome_apresentacao="Relator" data-nome="relator" data-sin_conteudo_obrigatorio="true"></section><section id="7379729_5" contentEditable="false" data-nome_apresentacao="Partes" data-nome="partes" data-sin_conteudo_obrigatorio="true"></section><section id="7379729_6" contentEditable="false" data-nome_apresentacao="Título Relatório" data-nome="titulo_relatorio" data-sin_conteudo_obrigatorio="true" data-estilo_padrao="titulo"></section><section id="7379729_7" contentEditable="true" data-nome_apresentacao="Relatório" data-nome="relatorio" data-sin_conteudo_obrigatorio="true" data-sin_permite_texto_padrao="true" data-estilo_padrao="paragrafo"></section><section id="7379729_8" contentEditable="false" data-nome_apresentacao="Título Voto" data-nome="titulo_voto" data-sin_conteudo_obrigatorio="true" data-sin_restringe_acesso_mpf="true" data-estilo_padrao="titulo"></section><section id="7379729_9" contentEditable="true" data-nome_apresentacao="Voto" data-nome="voto" data-sin_conteudo_obrigatorio="true" data-sin_permite_texto_padrao="true" data-estilo_padrao="paragrafo" data-sin_restringe_acesso_mpf="true" data-cod_recorte_obrigatorio="3"></section><section id="7379729_10" contentEditable="false" data-nome_apresentacao="Assinaturas" data-nome="assinaturas" data-estilo_padrao="tarja_assinatura"></section><section id="7379729_11" contentEditable="false" data-nome_apresentacao="Notas de fim de texto" data-nome="notas" data-estilo_padrao="notas"></section><footer id="7379729_12"><div class="rodape_esquerda"><span data-numero_processo_rodape="50294957220218240018" data-sin_numero_processo_rodape="true">5029495-72.2021.8.24.0018</span></div><div class="rodape_direita"><span data-codigo_documento_rodape="7379729" data-sin_codigo_documento_rodape="true">7379729</span><span data-versao_documento_rodape="5" data-sin_versao_documento_rodape="true">.V5</span><span data-usuario_criador_documento_rodape="SALESIO" data-sin_usuario_criador_documento_rodape="true">SALESIO©</span><span data-usuario_editor_documento_rodape="ALEXANDRESS" data-sin_usuario_editor_documento_rodape="true">ALEXANDRESS</span></div></footer></article></body></html>';
    const bolHabilitarLlmGeradorDeEmenta = '';
    const bolHabilitarLlmGeradorDeEmentaPersonalizado = '';

    json_urls_ajax = JSON.parse('{"url_func_inserir_marcacao":"controlador_ajax.php?acao_ajax=inserir_minuta_marcacao&acao_origem=minuta_editar&hash=2e3975ec0739d4318bdeb887c51b1de8", "url_func_aplicar_marcacao":"controlador_ajax.php?acao_ajax=obter_minuta_marcacao&acao_origem=minuta_editar&hash=1c309de728bddf420c5b28c59aa8a364","url_func_obter_indice_marcacoes":"controlador_ajax.php?acao_ajax=obter_indice_marcacao&acao_origem=minuta_editar&hash=bee8895ad867532da48acdb4a5827312","url_func_comparar_html":"controlador_ajax.php?acao_ajax=minuta_comparar_trecho_com_versao&acao_origem=minuta_editar&hash=b857c1bf568411e863b20a8a69d0c6d7","url_retornar_descricao_paragrafo":"controlador_ajax.php?acao_ajax=retornar_descricao_paragrafo&acao_origem=minuta_editar&hash=12ac1a9a6acc437b2096a005a4aaee03","url_func_persistir_precedente_relevante":"controlador_ajax.php?acao_ajax=atualizar_precedente_relevante&acao_origem=minuta_editar&hash=d44db1a0df5f0a3bbc04e7dc2b83ecef","url_func_persistir_perspectiva_genero":"controlador_ajax.php?acao_ajax=atualizar_protocolo_julgamento_perspectiva_genero&acao_origem=minuta_editar&hash=abd22f651aff7a0983f35944b081442e","url_func_persistir_perspectiva_racial":"controlador_ajax.php?acao_ajax=atualizar_protocolo_julgamento_perspectiva_racial&acao_origem=minuta_editar&hash=4d981b250e5499d084014d043327cb9e","url_func_persistir_remeter_jurisprudencia":"controlador_ajax.php?acao_ajax=atualizar_remeter_jurisprudencia&acao_origem=minuta_editar&hash=51871f82486c188be0e833de4339a5ad","url_buscar_estrutura_conteudo_aba_minuta":"controlador.php?acao=minuta/minuta_visualizacao/buscar_estrutura_conteudo_aba_minuta&acao_origem=minuta_editar&hash=ae2346d361875bf752e1a92bd42657e2","url_buscar_dados_complementares_da_minuta":"controlador.php?acao=minuta/minuta_visualizacao/buscar_dados_complementares_da_minuta&acao_origem=minuta_editar&hash=3fc15e04ea631a09dc899cf6325888be","url_buscar_submenu_alteracoes_marcacoes_da_minuta":"controlador.php?acao=minuta/minuta_visualizacao/buscar_submenu_alteracoes_marcacoes_da_minuta&acao_origem=minuta_editar&hash=f0a721298c8ee60f76cdbae6f86ce16b","url_buscar_menu_alteracoes_da_minuta":"controlador.php?acao=minuta/minuta_visualizacao/buscar_menu_alteracoes_da_minuta&acao_origem=minuta_editar&hash=7d92b7df545db5965ec5df19047e9dc0","url_buscar_alteracoes_da_minuta":"controlador.php?acao=minuta/minuta_visualizacao/buscar_alteracoes_da_minuta&acao_origem=minuta_editar&hash=13f580eb83f4f039b0485d6352f82c89","url_buscar_agendamentos_da_minuta":"controlador.php?acao=minuta/minuta_visualizacao/buscar_agendamentos_da_minuta&acao_origem=minuta_editar&hash=cb6f09251b9094cb45d5bfaeee231e4c","url_sessao_julgamento_v2_buscar_conteudo_origem_minuta_alteracoes":"controlador_ajax.php?acao_ajax=sessao_julgamento_v2_buscar_conteudo_origem_minuta_alteracoes&acao_origem=minuta_editar&hash=7c15e354ff2fb5640ac3a87a08ebda1c","url_func_buscar_lembretes_minuta":"controlador.php?acao=minuta/minuta_visualizacao/buscar_lembretes_da_minuta&acao_origem=minuta_editar&hash=2100cf3afd77b6310b4a9b3d0d2f4cfc","url_func_incluir_minuta_lembrete":"controlador_ajax.php?acao_ajax=minuta_incluir_lembrete&acao_origem=minuta_editar&hash=0840f98e05e0bf7caeec421728e62052","url_func_desativar_minuta_lembrete":"controlador_ajax.php?acao_ajax=minuta_desativar_lembrete&acao_origem=minuta_editar&hash=3137257bdd91ad69710c573ee3620d8b","url_func_salvar_minuta_lembrete":"controlador_ajax.php?acao_ajax=minuta_alterar_lembrete&acao_origem=minuta_editar&hash=64c9c4607e89f48776090f6827d10a40","url_func_montar_span_item_alterado":"controlador.php?acao=sessao_julgamento_v2_montar_span_item_alterado&acao_origem=minuta_editar&hash=b408074aa0a2430a825840b6d85dabbe","url_listar_minutas_do_processo":"controlador.php?acao=minuta/minuta_visualizacao/listar_minutas_do_processo&acao_origem=minuta_editar&hash=765988949d9d581aaf2ff74abaf0a8f5"}');

        map_nome_partes=new Map([['aa3c5600', {nome: 'SIDINEI ALBERTI', iniciais: 'S. A.'}]]);

    
function clearonbeforeunload(){
    window.onbeforeunload =  function (e) {return null;};
}

function fecharLembretes() {
		document.getElementById("lembrete").classList.add('d-none');
}
function buscarLembretesMinuta(id_minuta) {

	ajax = infraAjaxCriarRequest();

	ajax.open("POST", "controlador_ajax.php?acao_ajax=minuta_buscar_lembretes&hash=972a26a35be90f1420899f4184e90704", true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    ajax.onreadystatechange = function()
    {
  	     if(ajax.readyState == 4)
	     {
	     	var retorno = ajax.responseText;
	     	$( "#lembrete" ).append( retorno );
    	 }
    };
    var params = "id_minuta=" + id_minuta;
    ajax.send(params);
}

function editarMinutaLembrete(idMinutaLembrete){
	$('div[class="visualizarMinutaLembrete"][id="'+idMinutaLembrete+'"]').css('display','none');
	$('div[class="editarMinutaLembrete"][id="'+idMinutaLembrete+'"]').css('display','inline');
}
function incluirMinutaLembrete(){
	ajax = infraAjaxCriarRequest();
	ajax.open("POST", "controlador_ajax.php?acao_ajax=minuta_incluir_lembrete&hash=7e7b6db872dad05d3468cdda9db9d4c1", true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange = function()
    {
  	     if(ajax.readyState == 4)
	     {
	     	var retorno = ajax.responseText;
	     	if (retorno.lenght> 0) {
                log_erro(CKEDITOR.instances[current_editor()],'Erro ao inserir novo lembrete <br>'+retorno);
		    }else{
                showInfoMessage('Lembrete da minuta incluído com sucesso' , 'success', false);
		    	var t = setTimeout(function () {
                    showInfoMessage('Documento aberto para edição' , 'info', false);
                }, 1000);
                clearTimeout(t2);
		    	var t2 = setTimeout(function () {
		    			$( "#lembrete" ).html("");
				        buscarLembretesMinuta('321770737414589209876472877413');
		    	}, 1000);
		    }
    	 }
    };
    var params = "id_minuta=321770737414589209876472877413&textarea_minuta_lembrete=" + $('#textareaNovoMinutaLembrete').val();
    ajax.send(params);
}
function desativarMinutaLembrete(idMinutaLembrete){
    showInfoMessage('Desativando lembrete da minuta, aguarde...' , 'warning', true);
	ajax = infraAjaxCriarRequest();
	ajax.open("POST", "controlador_ajax.php?acao_ajax=minuta_desativar_lembrete&hash=2657f3f2460d750889b13a6a6305c197", true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange = function()
    {
  	     if(ajax.readyState == 4)
	     {
	     	var retorno = ajax.responseText;
	     	if (retorno.lenght> 0) {
                log_erro(CKEDITOR.instances[current_editor()],'Erro ao desativar lembrete <br>'+retorno);
		    }else{
                showInfoMessage('Lembrete da minuta desativado com sucesso' , 'success', false);
		    	var t = setTimeout(function () {
                    showInfoMessage('Documento aberto para edição' , 'info', false);
                    }, 1000);
                clearTimeout(t2);
		    	var t2 = setTimeout(function () {
	    			$( "#lembrete" ).html("");
			        buscarLembretesMinuta('321770737414589209876472877413');
	    		}, 1000);
		    }
    	 }
    };
    var params = "id_minuta_lembrete=" + idMinutaLembrete ;
    ajax.send(params);
}
function salvarMinutaLembrete(idMinutaLembrete){
	ajax = infraAjaxCriarRequest();
	ajax.open("POST", "controlador_ajax.php?acao_ajax=minuta_alterar_lembrete&hash=97afd24fc9256cd83cafbdbeb1114016", true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange = function()
    {
  	     if(ajax.readyState == 4)
	     {
	     	var retorno = ajax.responseText;
	     	if (retorno.lenght> 0) {
                log_erro(CKEDITOR.instances[current_editor()],'Erro ao alterar lembrete <br>'+retorno);
		    }else{
                showInfoMessage('Lembrete da minuta alterado com sucesso' , 'success', false);
		    	var t = setTimeout(function () {
                    showInfoMessage('Documento aberto para edição' , 'info', false);
                    }, 1000);
                clearTimeout(t2);
		    	var t2 = setTimeout(function () {
	    			$( "#lembrete" ).html("");
			        buscarLembretesMinuta('321770737414589209876472877413');
	    		}, 1000);
		    }
    	 }
    };
    var params = "id_minuta_lembrete=" + idMinutaLembrete + "&textarea_minuta_lembrete=" + $('#textareaMinutaLembrete'+idMinutaLembrete).val();
    ajax.send(params);
}

//monitora teclas de atalho
 function ckeditorKeyPress(event) {
   ckeditorKeyPress_comum(event);
   /*
     var oEditor = CKEDITOR.instances[current_editor()];
     switch (event.data.keyCode) {
         case CKEDITOR.ALT + 86: //ALT + V
         {

             if (oEditor) {
                 oEditor.execCommand("visualizartextopadrao");
                 event.cancel();
                 event.stop();
                 break;
             }
         }
     }
     */
 }
function isMinutaAcordao() {
    const ARR_COD_TIPO_DOC_MINUTA_ACORDAO = ["21"];

    if (!ARR_COD_TIPO_DOC_MINUTA_ACORDAO) {
        throw 'Tipos minuta acórdão não configurados no gerador de ementas.'
    }

    let codTipoDocumento = getCodTipoDocumento();

    return codTipoDocumento !== null && ARR_COD_TIPO_DOC_MINUTA_ACORDAO.includes(codTipoDocumento);
}

function getCodTipoDocumento() {
    return "108";
}

function getDadosGerarEmenta() {
    let dadosEnvio = {
        id_processo:        "321768409941203996622535734331",
        seq_processo:       "1",
        id_minuta:          "321770737414589209876472877413",
        cod_tipo_documento: getCodTipoDocumento(),
        id_julgamento:      "321770737414589209876472878316",
    };

    if (isMinutaAcordao()) {
        return dadosEnvio;
    }

    dadosEnvio.conteudo_secao_voto = getNomesSecaoDecisao()
        .map(nomeSecao => getEditorPorSecao(nomeSecao) ? getEditorPorSecao(nomeSecao).getData() : '')
        .join('');

    return dadosEnvio;
}

function getNomesSecaoDecisao() {
    const strNomesSecaoDecisao = '""';
    return JSON.parse(strNomesSecaoDecisao);
}

function getEditorPorSecao(nomeSecao) {
    const elSecao = $(`section[data-nome="${nomeSecao}"]`);
    return CKEDITOR.instances[elSecao.attr("id")];
}

function getParametrosAutoSalvamento() {
    return {
        text: "##data##",
        id_minuta: "321770737414589209876472877413",
        statusMinutaDesejado: $('#statusMinutaDesejado').val(),
        sbmCadastrarVersaoConteudo: "1",
        acao: "minuta_salvar",
        cod_tipo_salvamento_versao_conteudo: "3"
    };
}

function salvarMinutaPosGeracaoEmenta(editor, idLogDemandaLlm) {
    let parametros = getParametrosAutoSalvamento();
    parametros.idLogDemandaLlm = idLogDemandaLlm;

    salvarMinutaAutoSalvamentoIA(
        editor,
        parametros,
        function () {
            habilita_botoes_salvar(editor);
        }
    );
}

    function salvarMinutaPosColarTextoComStringMagica(editor, idTipoDemandaLlm, idLogInferenciaLlm, callback) {
        let parametros = getParametrosAutoSalvamento();
        parametros.idTipoDemandaLlm = idTipoDemandaLlm;

        if (idLogInferenciaLlm !== '') {
            parametros.idLogInferenciaLlm = idLogInferenciaLlm;
        }

        salvarMinutaAutoSalvamentoIA(
            editor,
            parametros,
            callback
        );
    }

    function salvarMinutaAutoSalvamentoIA(editor, parametros, callback) {
        const saveSubmitURL = 'controlador_ajax.php?acao_ajax=minuta_salvar&acao_origem=minuta_editar&hash=085c4e5cbc216b2350152849be92d068';

        desabilita_botoes_salvar(editor);

        salvar(
            editor,
            callback,
            saveSubmitURL,
            JSON.stringify(parametros)
        );
    }

function enviarDadosETratarResposta(dadosEnvio, editor) {
    const urlGerarEmenta = 'controlador.php?acao=inteligencia_artificial/llm_gerador_de_ementa/gerar_ementa&hash=6b9bffd4b0d45c3f7675f9556c1420da';

    $.ajax({
        url: urlGerarEmenta,
        type: 'POST',
        data: { dadosMinuta: JSON.stringify(dadosEnvio) },
    })
    .done(function (data) {
        if (!data || !data.ementa || _.isEmpty(data.ementa.textoEmenta)) {
            const mensagemErro = data?.msgErro ?? 'Erro desconhecido';
            const mensagemCompleta = `Não foi possível gerar a ementa. ${mensagemErro}`;
            window.setTimeout(function() {
                showInfoMessage(mensagemCompleta, 'danger', false)
            }, 20);
            return;
        }

        const TEXTO_COM_CAPUT_EMENTA_TRATADO = getComCaputEmentaTratado(data.ementa.textoEmenta);
        editor.insertHtml(TEXTO_COM_CAPUT_EMENTA_TRATADO);
        editor.execCommand("autogrow");

        atualizanotasdefimdetexto(function () {
            showInfoMessage('Ementa gerada com sucesso.', 'info', false)
        });

        salvarMinutaPosGeracaoEmenta(editor, data.ementa.idLogDemandaLlm);
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        const mensagemErro = 'Erro ao tentar gerar ementa: ' + textStatus + ' - ' + errorThrown;
        showInfoMessage(mensagemErro, 'danger', false)
    });
}

function getComCaputEmentaTratado(input) {
    const PARAGRAFOS = input.split('<p');
    const LINHA_SEM_TAG_P = PARAGRAFOS.shift();
    const TO_REPLACE = ' style=';

    const PRIMEIRO_PARAGRAFO = PARAGRAFOS.length ? (() => {
        let p = PARAGRAFOS.shift();
        if (p.indexOf(TO_REPLACE) !== -1) {
            return p.replace(TO_REPLACE, '<p class="caputEmenta" style=');
        } else if (p.trim().charAt(0) === '>') {
            return '<p class="caputEmenta" ' + p;
        } else {
            return p;
        }
    })() : '';

    const PARAGRAFOS_PADRAO = PARAGRAFOS.length
        ? PARAGRAFOS.map((p) => {
            if (p.indexOf(TO_REPLACE) !== -1) {
                return p.replace(TO_REPLACE, '<p class="paragrafoSemRecuo" style=');
            } else if (p.trim().charAt(0) === '>') {
                return '<p class="paragrafoSemRecuo" ' + p;
            } else {
                return p;
            }
        })
        : [];

    return LINHA_SEM_TAG_P + PRIMEIRO_PARAGRAFO + PARAGRAFOS_PADRAO.join('');
}

function llmGerarEmenta(editor) {
    let dadosEnvio = {};

    try {
        dadosEnvio = getDadosGerarEmenta();
        if (!dadosEnvio) {
            throw 'Ocorreu um erro ao preparar os dados para gerar a ementa.';
        }
    } catch (e) {
        alert(e);
        return;
    }

    window.setTimeout(function() {
         showInfoMessage('Gerando ementa, aguarde...', 'warning', true);
    }, 10);

    enviarDadosETratarResposta(dadosEnvio, editor)
}

let currentEditorEmentaPersonalizadaIA = {};
function llmGerarEmentaPersonalizada(editor) {
    currentEditorEmentaPersonalizadaIA = editor;
    $('#ementaPersonalizadaIAModal').modal();
}

//REGISTRA PLUGINS
//****************************************************************************************************************

function registraplugins(){

//var editortemp ;//instância temporária de ckeditor


  CKEDITOR.plugins.add('marcacoes',
      {
        init: function (editor) {
          editor.addCommand('marcacoesCMD',
              {
                exec: function (editor) {

                  if (check_dirty_editores()) {

                    $('#alterarstatus').val("0"); //"Manter a minuta no status atual";se está salvando uma minuta assinada retorna para rascunho
                    var saveSubmitURL = 'controlador_ajax.php?acao_ajax=minuta_salvar&acao_origem=minuta_editar&hash=085c4e5cbc216b2350152849be92d068';
                    var id_minuta= '321770737414589209876472877413';
                    var cod_tipo_salvamento_versao_conteudo = 27;//autosalvamento tabela tipo_salvamento_versao_conteudo
                    var parametros  = '{ "text":"##data##"," id_minuta":"'+ id_minuta+'","alterarstatus":"'+$('#alterarstatus').val()+'","statusMinutaDesejado":"'+$('#statusMinutaDesejado').val()+'","sbmCadastrarVersaoConteudo":"1","acao":"minuta_salvar","cod_tipo_salvamento_versao_conteudo":"'+cod_tipo_salvamento_versao_conteudo+'"}';
                    desabilita_botoes_salvar(editor);

                    salvar(
                        editor,
                        function(){
                          habilita_botoes_salvar(editor);
                            showInfoMessage('Carregando marcações, aguarde...' , 'warning', true);
                          exibirSubFrm('controlador.php?acao=minuta_visualizar&id_minuta=321770737414589209876472877413&acao_origem=minuta_editar&force_exibir_marcacoes=true&hash=61fce62a2b62644dc66c5f3b4112607f',screen.width-50,0.8*screen.height,false);                            showInfoMessage('' , 'warning', false);

                        }
                        ,saveSubmitURL
                        ,parametros
                        );

                  }else{

                      showInfoMessage('Carregando marcações, aguarde...' , 'warning', true);
                    exibirSubFrm('controlador.php?acao=minuta_visualizar&id_minuta=321770737414589209876472877413&acao_origem=minuta_editar&force_exibir_marcacoes=true&hash=61fce62a2b62644dc66c5f3b4112607f',screen.width-50,0.8*screen.height,false);                      showInfoMessage('' , 'warning', false);
                  }







                }
              });


          if (editor.contextMenu) {
            editor.contextMenu.addListener(function (element, selection) {

              if (editor.addMenuItem) {
                // A group menu is required
                // order, as second parameter, is not required
                editor.addMenuGroup('Ferramentas',5);

                // Create a manu item
                editor.addMenuItem('marcacoesitem', {
                  label: "Exibir Marcações",
                  command: 'marcacoesCMD',
                  icon: 'highlighter',
                  group: 'Ferramentas',
                  order: 5
                });
              }


             // return { marcacoesitem: CKEDITOR.TRISTATE_OFF };
            });
          }

          editor.ui.addButton('marcacoes',
              {
                // Toolbar button tooltip.
                label: 'Exibir Marcações',
                // Reference to the plugin command name.
                command: 'marcacoesCMD',
                // Button's icon file path.
                icon: 'highlighter'
              });

        }
      });

//salvar como texto padrao subform
CKEDITOR.plugins.add( 'salvarcomotextopadraosubform', {
       icons:'salvarcomotextopadraosubform',
       init: function( editor ) {
        editor.addCommand( 'salvarcomotextopadraosubform', {

        	exec : function(editor){
        		if (check_dirty_editores()) {

        		    					$('#alterarstatus').val("0"); //"Manter a minuta no status atual";se está salvando uma minuta assinada retorna para rascunho
									  	var saveSubmitURL = 'controlador_ajax.php?acao_ajax=minuta_salvar&acao_origem=minuta_editar&hash=085c4e5cbc216b2350152849be92d068';
						        		var id_minuta= '321770737414589209876472877413';
						        		var cod_tipo_salvamento_versao_conteudo = 13;//autosalvamento tabela tipo_salvamento_versao_conteudo
										var parametros  = '{ "text":"##data##"," id_minuta":"'+ id_minuta+'","alterarstatus":"'+$('#alterarstatus').val()+'","statusMinutaDesejado":"'+$('#statusMinutaDesejado').val()+'","sbmCadastrarVersaoConteudo":"1","acao":"minuta_salvar","cod_tipo_salvamento_versao_conteudo":"'+cod_tipo_salvamento_versao_conteudo+'"}';


                    desabilita_botoes_salvar(editor);

                    salvar(
										editor,
										function(){
                      habilita_botoes_salvar(editor);
											var txtTexto='';
        									var str = editor.getSelection().getSelectedText().trim();
											if (str.length > 0) {
												//salva seleção corrente da seção atual
										  		//guarda seleção
										  		//var bookmarks = editor.getSelection().createBookmarks();
										  		var rangesbefore = editor.getSelection().getRanges();

										  		var sel = editor.getSelection();
										  		var ranges = sel.getRanges();
												var el = new CKEDITOR.dom.element("div");
												for (var i = 0, len = ranges.length; i < len; ++i) {
												   el.append(ranges[i].cloneContents());
												}
												//aplica formatação do editor ao trecho copiado
												txtTexto = editor.dataProcessor.toDataFormat( el.getHtml().trim() );
												//retira essa tag do texto
												txtTexto = txtTexto.replace(/<span style="display:none">&#160;<\/span>/ig,'');
												txtTexto = txtTexto.replace(/<br>/i,'');
												//restaura seleção
												//editor.getSelection().selectBookmarks( bookmarks );
												editor.getSelection().selectRanges( rangesbefore );
												$("#hdnTextoPadraoSalvarComo").val(txtTexto);
								        		exibirSubFrm('controlador.php?acao=texto_padrao_cadastrar&from_editor=1&id_minuta=321770737414589209876472877413&acao_origem=minuta_editar&hash=a33232c8f8078f7ab439744b69fe0c17',900,600,false);											}else{
												//salva todo o conteúdo de todas as seções
												$( "section[contentEditable=true]" ).each(function( index ) {
											  		var editor = CKEDITOR.instances[$(this).attr("id")];
											  		txtTexto +=editor.getData();
											  		$("#hdnTextoPadraoSalvarComo").val(txtTexto);
								        			exibirSubFrm('controlador.php?acao=texto_padrao_cadastrar&from_editor=1&id_minuta=321770737414589209876472877413&acao_origem=minuta_editar&hash=a33232c8f8078f7ab439744b69fe0c17',900,600,false);												});
											}
											}
										,saveSubmitURL
										,parametros
										);

	                		}else{

	                			var txtTexto='';

								var str = editor.getSelection().getSelectedText().trim();
								if (str.length > 0) {
									//salva seleção corrente da seção atual
							  		//guarda seleção
							  		//var bookmarks = editor.getSelection().createBookmarks();
							  		var rangesbefore = editor.getSelection().getRanges();

							  		var sel = editor.getSelection();
							  		var ranges = sel.getRanges();
									var el = new CKEDITOR.dom.element("div");
									for (var i = 0, len = ranges.length; i < len; ++i) {
									   el.append(ranges[i].cloneContents());
									}
									//aplica formatação do editor ao trecho copiado
									txtTexto = editor.dataProcessor.toDataFormat( el.getHtml().trim() );
									//retira essa tag do texto
									txtTexto = txtTexto.replace(/<span style="display:none">&#160;<\/span>/ig,'');
									txtTexto = txtTexto.replace(/<br>/i,'');
									//restaura seleção
									//editor.getSelection().selectBookmarks( bookmarks );
									editor.getSelection().selectRanges( rangesbefore );
									$("#hdnTextoPadraoSalvarComo").val(txtTexto);
					        		exibirSubFrm('controlador.php?acao=texto_padrao_cadastrar&from_editor=1&id_minuta=321770737414589209876472877413&acao_origem=minuta_editar&hash=a33232c8f8078f7ab439744b69fe0c17',900,600,false);								}else{
									//salva todo o conteúdo de todas as seções
									$( "section[contentEditable=true]" ).each(function( index ) {
								  		var editor = CKEDITOR.instances[$(this).attr("id")];
								  		txtTexto +=editor.getData();
								  		$("#hdnTextoPadraoSalvarComo").val(txtTexto);
					        			exibirSubFrm('controlador.php?acao=texto_padrao_cadastrar&from_editor=1&id_minuta=321770737414589209876472877413&acao_origem=minuta_editar&hash=a33232c8f8078f7ab439744b69fe0c17',900,600,false);									});
								}

	                		}

        	}
    });
    	if (editor.contextMenu) {
	                    editor.contextMenu.addListener(function (element, selection) {

	                        var selectedText = selection.getSelectedText();

	                            if (editor.addMenuItem) {
	                                // A group menu is required
	                                // order, as second parameter, is not required
                                editor.addMenuGroup('GrupoSalvarComo',8);

	                                // Create a manu item
	                                editor.addMenuItem('salvarcomotextopadraosubformitem', {
	                                    label: "Salvar como Texto Padrão",
	                                    command: 'salvarcomotextopadraosubform',
	                                    icon: 'salvarcomotexto',
	                                    group: 'GrupoSalvarComo',
	                                    order: 1
	                                });
	                            }

	                        return { salvarcomotextopadraosubformitem: CKEDITOR.TRISTATE_OFF };
	                    });
	    }

        editor.ui.addButton( 'salvarcomotextopadraosubform', {
            label: 'Salvar como Texto Padrão',
            command: 'salvarcomotextopadraosubform',
            icon: 'salvarcomotexto'
           // toolbar: 'insert'
        });


    }
});

//ativa/desativa corretor ortografico nativo do navegador
CKEDITOR.plugins.add('spellcheckernativo',
	        {
	            init: function (editor) {
		            var strNomeCookieEspellCheckerNativo = "TRF4_Eproc_alexandress_spellchecker_nativo";
					var valorCookieEspellCheckerNativo = infraLerCookie(strNomeCookieEspellCheckerNativo);
	                editor.addCommand('spellcheckernativoCMD',
	                    {
	                        exec: function (editor) {


	                        	if (check_dirty_editores()) {

									    $('#alterarstatus').val("0"); //"Manter a minuta no status atual";se está salvando uma minuta assinada retorna para rascunho
									  	var saveSubmitURL = 'controlador_ajax.php?acao_ajax=minuta_salvar&acao_origem=minuta_editar&hash=085c4e5cbc216b2350152849be92d068';
						        		var id_minuta= '321770737414589209876472877413';
						        		var cod_tipo_salvamento_versao_conteudo = 14;//autosalvamento tabela tipo_salvamento_versao_conteudo
										var parametros  = '{ "text":"##data##"," id_minuta":"'+ id_minuta+'","alterarstatus":"'+$('#alterarstatus').val()+'","statusMinutaDesejado":"'+$('#statusMinutaDesejado').val()+'","sbmCadastrarVersaoConteudo":"1","acao":"minuta_salvar","cod_tipo_salvamento_versao_conteudo":"'+cod_tipo_salvamento_versao_conteudo+'"}';

										desabilita_botoes_salvar(editor);

										salvar(
										editor,
										function(){
                      habilita_botoes_salvar(editor);

											var strNomeCookieCorretor = "TRF4_Eproc_alexandress_corretor_editor";
											var strNomeCookieEspellCheckerNativo = "TRF4_Eproc_alexandress_spellchecker_nativo";
											var valorCookieEspellCheckerNativo = infraLerCookie(strNomeCookieEspellCheckerNativo);
											if (valorCookieEspellCheckerNativo=='habilitado'){
												valorCookieEspellCheckerNativo='desabilitado';
											}else{
												valorCookieEspellCheckerNativo='habilitado';
												//desabilita scayt
												infraCriarCookie(strNomeCookieCorretor, "desabilitado", 365);
											}
											//grava cookies
											infraCriarCookie(strNomeCookieEspellCheckerNativo, valorCookieEspellCheckerNativo, 365);

											reset_editores();
                                            clearonbeforeunload();
											location.reload();
											}
										,saveSubmitURL
										,parametros
										);

	                		}else{
	                				var strNomeCookieCorretor = "TRF4_Eproc_alexandress_corretor_editor";
	                				var strNomeCookieEspellCheckerNativo = "TRF4_Eproc_alexandress_spellchecker_nativo";
									var valorCookieEspellCheckerNativo = infraLerCookie(strNomeCookieEspellCheckerNativo);
									if (valorCookieEspellCheckerNativo=='habilitado'){
										valorCookieEspellCheckerNativo='desabilitado';
									}else{
										valorCookieEspellCheckerNativo='habilitado';
										//desabilita scayt
										infraCriarCookie(strNomeCookieCorretor, "desabilitado", 365);
		                			}
		                			//grava cookie
									infraCriarCookie(strNomeCookieEspellCheckerNativo, valorCookieEspellCheckerNativo, 365);
					                reset_editores();
                                    clearonbeforeunload();
									location.reload();
						   		 }
						    }
	                    });


                if (editor.contextMenu) {
                  editor.contextMenu.addListener(function (element, selection) {

                    if (editor.addMenuItem) {
                      // A group menu is required
                      // order, as second parameter, is not required
                      editor.addMenuGroup('LocalizarSubstituir',6);

                      // Create a menu item
                      editor.addMenuItem('spellcheckernativoitem', {
                        label: (valorCookieEspellCheckerNativo=="habilitado" ? "Desativa" : "Ativa") + " o corretor ortográfico nativo do navegador",
                        command: 'spellcheckernativoCMD',
                        icon: 'spellcheckernativo',
                        group: 'LocalizarSubstituir',
                        order: 1
                      });
                    }
                    return {spellcheckernativoitem: CKEDITOR.TRISTATE_OFF};
                  });
                }

                if((valorCookieEspellCheckerNativo=='habilitado' || globalCorretorScaytDesativadoNoConfig)){
                  editor.ui.addButton('spellcheckernativo',
                      {
                        // Toolbar button tooltip.
                        label: (valorCookieEspellCheckerNativo=="habilitado" ? "Desativa" : "Ativa") + " o corretor ortográfico nativo do navegador",
                        // Reference to the plugin command name.
                        command: 'spellcheckernativoCMD',
                        // Button's icon file path.
                        icon: 'spellcheckernativo'
                      });
                }

	     }
 });

//alterna fundo entre azul/branco
	CKEDITOR.plugins.add('backgroundcoloreditor',
	        {
	            init: function (editor) {
	                editor.addCommand('backgroundcoloreditorCMD',
	                    {
	                        exec: function (editor) {



	                        	if (check_dirty_editores()) {
								   $('#alterarstatus').val("0"); //"Manter a minuta no status atual";se está salvando uma minuta assinada retorna para rascunho
								  	var saveSubmitURL = 'controlador_ajax.php?acao_ajax=minuta_salvar&acao_origem=minuta_editar&hash=085c4e5cbc216b2350152849be92d068';
						        	var id_minuta= '321770737414589209876472877413';
						        	var cod_tipo_salvamento_versao_conteudo = 15;//autosalvamento tabela tipo_salvamento_versao_conteudo
									var parametros  = '{ "text":"##data##"," id_minuta":"'+ id_minuta+'","alterarstatus":"'+$('#alterarstatus').val()+'","statusMinutaDesejado":"'+$('#statusMinutaDesejado').val()+'","sbmCadastrarVersaoConteudo":"1","acao":"minuta_salvar","cod_tipo_salvamento_versao_conteudo":"'+cod_tipo_salvamento_versao_conteudo+'"}';

									desabilita_botoes_salvar(editor);

									salvar(
									editor,
									function(){
                    habilita_botoes_salvar(editor);
										var t = setTimeout(function () {
									            var strNomeCookieBackGroundColor = "TRF4_Eproc_alexandress_backgroundcolor_editor";
												var valorCookieBackgroundColor = infraLerCookie(strNomeCookieBackGroundColor);
												if (valorCookieBackgroundColor=='azul'){
													valorCookieBackgroundColor='branco';
												}else{
													valorCookieBackgroundColor='azul';
												}
												//grava cookie
												infraCriarCookie(strNomeCookieBackGroundColor, valorCookieBackgroundColor, 365);
                                                 reset_editores();
                                                 clearonbeforeunload();
												location.reload();
								          }, 500);
										}
									,saveSubmitURL
									,parametros
									);




	                		}else{
	                				var strNomeCookieBackGroundColor = "TRF4_Eproc_alexandress_backgroundcolor_editor";
									var valorCookieBackgroundColor = infraLerCookie(strNomeCookieBackGroundColor);
									if (valorCookieBackgroundColor=='azul'){
										valorCookieBackgroundColor='branco';
									}else{
										valorCookieBackgroundColor='azul';
									}
									//grava cookie
									infraCriarCookie(strNomeCookieBackGroundColor, valorCookieBackgroundColor, 365);
                                    reset_editores();
                                    clearonbeforeunload();
									location.reload();

	                		}





	                        }
	                    });


	                if (editor.contextMenu) {
	                    editor.contextMenu.addListener(function (element, selection) {

	                            if (editor.addMenuItem) {
	                                // A group menu is required
	                                // order, as second parameter, is not required
                                editor.addMenuGroup('Interface',6);

	                                // Create a manu item
	                                editor.addMenuItem('backgroundcoloreditoritem', {
	                                    label: "Alterna cor de fundo azul/branco",
	                                    command: 'backgroundcoloreditorCMD',
	                                     icon: 'azulbranco',
	                                    group: 'Interface',
	                                    order: 1
	                                });
	                            }


	                        //return { backgroundcoloreditoritem: CKEDITOR.TRISTATE_OFF };
	                    });
	                }
	                editor.ui.addButton('backgroundcoloreditor',
	                {
	                    // Toolbar button tooltip.
	                    label: 'Alterna cor de fundo azul/branco',
	                    // Reference to the plugin command name.
	                    command: 'backgroundcoloreditorCMD',
	                    // Button's icon file path.
	                   icon: 'azulbranco'
	                });

	            }
	 });

//salvar como texto padra subform
CKEDITOR.plugins.add( 'salvarcomomodelopadrao', {
       icons:'salvarcomomodelopadrao',
       init: function( editor ) {
        editor.addCommand( 'salvarcomomodelopadrao', {

        	exec : function(editor){

           	var SubmitURL = 'controlador_ajax.php?acao_ajax=buscar_recurso_minuta_para_plugin_editor&acao_origem=minuta_editar&hash=5547aa55b5220c26f912df7f204b3954';

			$.ajax({
	              url: SubmitURL,
			      type: 'POST',
			      data: {
			      	id_minuta:'321770737414589209876472877413',
			      	executa_em:'subform',
			      	recurso_minuta:'modelo_padrao_cadastrar'
			      }
			})

			.done(function(data, textStatus, jqXHR) {
		 		if(data.trim().length > 0){

        			var str = editor.getSelection().getSelectedText().trim();
					if (str.length > 0) {
						alert('Não é possível usar seleção de texto neste recurso!');
					}else{
						if (check_dirty_editores()) {
	        				$('#alterarstatus').val("0"); //"Manter a minuta no status atual";se está salvando uma minuta assinada retorna para rascunho
					        var saveSubmitURL = 'controlador_ajax.php?acao_ajax=minuta_salvar&acao_origem=minuta_editar&hash=085c4e5cbc216b2350152849be92d068';
				        	var id_minuta= '321770737414589209876472877413';
				        	var cod_tipo_salvamento_versao_conteudo = 16;//autosalvamento tabela tipo_salvamento_versao_conteudo
							var parametros  = '{ "text":"##data##"," id_minuta":"'+ id_minuta+'","alterarstatus":"'+$('#alterarstatus').val()+'","statusMinutaDesejado":"'+$('#statusMinutaDesejado').val()+'","sbmCadastrarVersaoConteudo":"1","acao":"minuta_salvar","cod_tipo_salvamento_versao_conteudo":"'+cod_tipo_salvamento_versao_conteudo+'"}';

              desabilita_botoes_salvar(editor);

							salvar(
							editor,
							function(){
                habilita_botoes_salvar(editor);
								var t = setTimeout(function () {
							                	exibirSubFrm('controlador.php?acao=modelo_padrao_cadastrar&id_minuta=321770737414589209876472877413&acao_origem=minuta_editar&hash=5146bce8424352feddc502070a79d55f',900,600,false);							                	 //Atualiza informações da minuta na janela de origem na função salvar
							                		 var t = setTimeout(function () {
														//Atualiza informações da minuta na janela de origem
								                		try{
																if (typeof(window.opener.atualizaInfoMinuta)=='function' || typeof(window.opener.atualizaInfoMinuta)=='object')
																{
																	window.opener.atualizaInfoMinuta(id_minuta);
																}
														}
														catch(e){}
													}, 10);
						          }, 500);
								}
							,saveSubmitURL
							,parametros
							);



	                	}else{
						 		exibirSubFrm('controlador.php?acao=modelo_padrao_cadastrar&id_minuta=321770737414589209876472877413&acao_origem=minuta_editar&hash=5146bce8424352feddc502070a79d55f',900,600,false);						}
					}
				}else{
					alert('Recurso indisponível.');
				}
			})
		}

    });

           if (!isModeloInstitucional) {

               if (editor.contextMenu) {
                   editor.contextMenu.addListener(function (element, selection) {

                       var selectedText = selection.getSelectedText();
                       if (!editor.widgets.selected[0] && selection && selectedText.trim() == '') { //só pode salvar como modelo se for o texto todo, sem seleção
                           if (editor.addMenuItem) {
                               // A group menu is required
                               // order, as second parameter, is not required
                             editor.addMenuGroup('GrupoSalvarComo',8);

                               // Create a manu item
                               editor.addMenuItem('salvarcomomodelopadraoitem', {
                                   label: "Salvar como Modelo",
                                   command: 'salvarcomomodelopadrao',
                                   icon: 'salvarcomomodelo',
                                   group: 'GrupoSalvarComo',
                                   order: 2
                               });
                           }
                       }
                       else {
                           return null; // No item
                       }
                       return {salvarcomomodelopadraoitem: CKEDITOR.TRISTATE_OFF};
                   });
               }

               editor.ui.addButton('salvarcomomodelopadrao', {
                   label: 'Salvar como Modelo',
                   command: 'salvarcomomodelopadrao',
                   icon: 'salvarcomomodelo'
                   // toolbar: 'insert'
               });
           }
    }
});


//ALTERAR Localizador
CKEDITOR.plugins.add( 'alterarlocalizador', {
       icons:'alterarlocalizador',
       init: function( editor ) {
        editor.addCommand( 'alterarlocalizador', {

        	exec : function(editor){

        		if (check_dirty_editores()) {
							$('#alterarstatus').val("0"); //"Manter a minuta no status atual";se está salvando uma minuta assinada retorna para rascunho
					        var saveSubmitURL = 'controlador_ajax.php?acao_ajax=minuta_salvar&acao_origem=minuta_editar&hash=085c4e5cbc216b2350152849be92d068';
				        	var id_minuta= '321770737414589209876472877413';
				        	var cod_tipo_salvamento_versao_conteudo = 18;//autosalvamento tabela tipo_salvamento_versao_conteudo
							var parametros  = '{ "text":"##data##"," id_minuta":"'+ id_minuta+'","alterarstatus":"'+$('#alterarstatus').val()+'","statusMinutaDesejado":"'+$('#statusMinutaDesejado').val()+'","sbmCadastrarVersaoConteudo":"1","acao":"minuta_salvar","cod_tipo_salvamento_versao_conteudo":"'+cod_tipo_salvamento_versao_conteudo+'"}';

              desabilita_botoes_salvar(editor);

							salvar(
							editor,
							function(){
                habilita_botoes_salvar(editor);
								var t = setTimeout(function () {
								            	exibirSubFrm('controlador.php?acao=subfrm_alterar_localizador_processo&id_minuta=321770737414589209876472877413&acao_origem=minuta_editar&hash=7c692058356cf32371a60f497cea21d7',900,600,false);							                	 //Atualiza informações da minuta na janela de origem na função salvar
							                		 var t = setTimeout(function () {
														//Atualiza informações da minuta na janela de origem
								                		try{
																if (typeof(window.opener.atualizaInfoMinuta)=='function' || typeof(window.opener.atualizaInfoMinuta)=='object')
																{
																	window.opener.atualizaInfoMinuta(id_minuta);
																}
														}
														catch(e){}
													}, 10);
						          }, 500);
								}
							,saveSubmitURL
							,parametros
							);



	                	}else{
						 		exibirSubFrm('controlador.php?acao=subfrm_alterar_localizador_processo&id_minuta=321770737414589209876472877413&acao_origem=minuta_editar&hash=7c692058356cf32371a60f497cea21d7',900,600,false);						}

        	}
    });

         if (editor.contextMenu) {
           editor.contextMenu.addListener(function (element, selection) {
             if (editor.addMenuItem) {
               // A group menu is required
               // order, as second parameter, is not required
               editor.addMenuGroup('Ferramentas', 5);

               // Create a manu item
               editor.addMenuItem('alterarlocalizadoritem', {
                 label: 'Alterar localizador',
                 command: 'alterarlocalizador',
                 icon: 'alterarlocalizador',
                 group: 'Ferramentas',
                 order: 4
               });
             }
            // return {alterarlocalizadoritem: CKEDITOR.TRISTATE_OFF};
           });
         }

        editor.ui.addButton( 'alterarlocalizador', {
            label: 'Alterar localizador',
            command: 'alterarlocalizador',
            icon: 'alterarlocalizador'
           // toolbar: 'insert'
        });


    }
});

//ALTERAR DADOS MINUTA
CKEDITOR.plugins.add( 'alterardados', {
       icons:'alterardados',
       init: function( editor ) {
        editor.addCommand( 'alterardados', {

        	exec : function(editor){
				
				var SubmitURL = 'controlador_ajax.php?acao_ajax=buscar_recurso_minuta_para_plugin_editor&acao_origem=minuta_editar&hash=5547aa55b5220c26f912df7f204b3954';

				$.ajax({
		              url: SubmitURL,
				      type: 'POST',
				      data: {
				      	id_minuta:'321770737414589209876472877413',
				      	executa_em:'subform',
				      	recurso_minuta:'minuta_alterar_dados'
				      }
				 })
				 .done(function(data, textStatus, jqXHR) {
				 		if(data.trim().length > 0){

				 			if (check_dirty_editores()) {
				 				$('#alterarstatus').val("0"); //"Manter a minuta no status atual";se está salvando uma minuta assinada retorna para rascunho
				  				var saveSubmitURL = 'controlador_ajax.php?acao_ajax=minuta_salvar&acao_origem=minuta_editar&hash=085c4e5cbc216b2350152849be92d068';
					        	var id_minuta= '321770737414589209876472877413';
					        	var cod_tipo_salvamento_versao_conteudo = 19;//autosalvamento tabela tipo_salvamento_versao_conteudo
								var parametros  = '{ "text":"##data##"," id_minuta":"'+ id_minuta+'","alterarstatus":"'+$('#alterarstatus').val()+'","statusMinutaDesejado":"'+$('#statusMinutaDesejado').val()+'","sbmCadastrarVersaoConteudo":"1","acao":"minuta_salvar","cod_tipo_salvamento_versao_conteudo":"'+cod_tipo_salvamento_versao_conteudo+'"}';

                desabilita_botoes_salvar(editor);

								salvar(
								editor,
								function(){
                  habilita_botoes_salvar(editor);
									var t = setTimeout(function () {
								                	eval(data);
								                	 //Atualiza informações da minuta na janela de origem na função salvar
								                		 var t = setTimeout(function () {
															//Atualiza informações da minuta na janela de origem
									                		try{
																	if (typeof(window.opener.atualizaInfoMinuta)=='function' || typeof(window.opener.atualizaInfoMinuta)=='object')
																	{
																		window.opener.atualizaInfoMinuta(id_minuta);
																	}
															}
															catch(e){}
														}, 10);
							          }, 500);
									}
								,saveSubmitURL
								,parametros
								);
	                		}else{
	                			eval(data);
							}
				 		}else{
				 			alert('Recurso indisponível.');
				 		}

				 })
				 .fail(function(xhr, status, error) {
                    log_erro(editor,'Erro ao alterar dados . <br>'+xhr.responseText);
				 });
        	}
    });

         if (editor.contextMenu) {
           editor.contextMenu.addListener(function (element, selection) {
             if (editor.addMenuItem) {
               // A group menu is required
               // order, as second parameter, is not required
               editor.addMenuGroup('Ferramentas', 5);

               // Create a manu item
               editor.addMenuItem('alterardadositem', {
                 label: 'Alterar dados',
                 command: 'alterardados',
                 icon: 'minuta_alterar',
                 group: 'Ferramentas',
                 order: 3
               });
             }
             //return {alterardadositem: CKEDITOR.TRISTATE_OFF};
           });
         }

        editor.ui.addButton( 'alterardados', {
            label: 'Alterar dados',
            command: 'alterardados',
            icon: 'minuta_alterar'
           // toolbar: 'insert'
        });


    }
});

//inserir lembrete
CKEDITOR.plugins.add( 'inserirlembrete', {
       icons:'inserirlembrete',
       init: function( editor ) {
        editor.addCommand( 'inserirlembrete', {

        	exec : function(editor){
				
				var SubmitURL = 'controlador_ajax.php?acao_ajax=buscar_recurso_minuta_para_plugin_editor&acao_origem=minuta_editar&hash=5547aa55b5220c26f912df7f204b3954';

				$.ajax({
		              url: SubmitURL,
				      type: 'POST',
				      data: {
				      	id_minuta:'321770737414589209876472877413',
				      	executa_em:'subform',
				      	recurso_minuta:'minuta_inserir_lembrete'
				      }
				 })
				 .done(function(data, textStatus, jqXHR) {

				 		if(data.trim().length > 0){
							 			//verifica se a minuta foi modificado
							 			if (check_dirty_editores()) {
							 							$('#alterarstatus').val("0"); //"Manter a minuta no status atual";se está salvando uma minuta assinada retorna para rascunho
		                   								var saveSubmitURL = 'controlador_ajax.php?acao_ajax=minuta_salvar&acao_origem=minuta_editar&hash=085c4e5cbc216b2350152849be92d068';
											        	var id_minuta= '321770737414589209876472877413';
											        	var cod_tipo_salvamento_versao_conteudo = 20;//autosalvamento tabela tipo_salvamento_versao_conteudo
														var parametros  = '{ "text":"##data##"," id_minuta":"'+ id_minuta+'","alterarstatus":"'+$('#alterarstatus').val()+'","statusMinutaDesejado":"'+$('#statusMinutaDesejado').val()+'","sbmCadastrarVersaoConteudo":"1","acao":"minuta_salvar","cod_tipo_salvamento_versao_conteudo":"'+cod_tipo_salvamento_versao_conteudo+'"}';

                      desabilita_botoes_salvar(editor);

														salvar(
														editor,
														function(){
                              habilita_botoes_salvar(editor);
															var t = setTimeout(function () {
														                	eval(data);
														                	 //Atualiza informações da minuta na janela de origem na função salvar
														                		 var t = setTimeout(function () {
																					//Atualiza informações da minuta na janela de origem
															                		try{
																							if (typeof(window.opener.atualizaInfoMinuta)=='function' || typeof(window.opener.atualizaInfoMinuta)=='object')
																							{
																								window.opener.atualizaInfoMinuta(id_minuta);
																							}
																					}
																					catch(e){}
																				}, 10);
													          }, 500);
															}
														,saveSubmitURL
														,parametros
														);
	                					}
							 			else{
								 			eval(data);
							 			}
							 		}else{
							 			alert('Recurso indisponível.');
							 		}





				 })
				 .fail(function(xhr, status, error) {
                    log_erro(editor,'Erro inserir lembrete . <br>'+xhr.responseText);
				 });
        	}
    });

         if (editor.contextMenu) {
           editor.contextMenu.addListener(function (element, selection) {

             if (editor.addMenuItem) {
               // A group menu is required
               // order, as second parameter, is not required
               editor.addMenuGroup('InserirTexto',5);

               // Create a manu item
               editor.addMenuItem('inserirlembreteitem', {
                 label: 'Inserir lembrete',
                 command: 'inserirlembrete',
                 icon:'minuta_lembrete',
                 group: 'InserirTexto',
                 order: 5
               });
             }
            // return { inserirlembreteitem: CKEDITOR.TRISTATE_OFF };
           });
         }

        editor.ui.addButton( 'inserirlembrete', {
            label: 'Inserir lembrete',
            command: 'inserirlembrete',
            icon: 'minuta_lembrete'
           // toolbar: 'insert'
        });


    }
});


//devolver minuta
CKEDITOR.plugins.add( 'devolver', {
       icons:'devolver',
       init: function( editor ) {
        editor.addCommand( 'devolver', {

        	exec : function(editor){
        		var SubmitURL = 'controlador_ajax.php?acao_ajax=buscar_recurso_minuta_para_plugin_editor&acao_origem=minuta_editar&hash=5547aa55b5220c26f912df7f204b3954';
        		var dataCmd='';
        		$.ajax({
			              url: SubmitURL,
					      type: 'POST',
					      data: {
					      	id_minuta:'321770737414589209876472877413',
					      	executa_em:'subform',
					      	recurso_minuta:'minuta_devolver'
					      }
					 })
					 .done(function(data, textStatus, jqXHR) {
					 		if( (data.trim().length > 0) && (data.trim() != '<div id=divListaRecursosMinuta></div>') ){
					 			if (check_dirty_editores()) {
									 $(function() {
											$( "#dialog-confirm" ).dialog({
												resizable: false,
												height:240,
												modal: true,
												buttons: {
												"Salvar antes de devolver": function() {
														$('#alterarstatus').val("0"); //"Manter a minuta no status atual";se está salvando uma minuta assinada retorna para rascunho
														var saveSubmitURL = 'controlador_ajax.php?acao_ajax=minuta_salvar&acao_origem=minuta_editar&hash=085c4e5cbc216b2350152849be92d068';
											        	var id_minuta= '321770737414589209876472877413';
											        	var cod_tipo_salvamento_versao_conteudo = 21;//autosalvamento tabela tipo_salvamento_versao_conteudo
														var parametros  = '{ "text":"##data##"," id_minuta":"'+ id_minuta+'","alterarstatus":"'+$('#alterarstatus').val()+'","statusMinutaDesejado":"'+$('#statusMinutaDesejado').val()+'","sbmCadastrarVersaoConteudo":"1","acao":"minuta_salvar","cod_tipo_salvamento_versao_conteudo":"'+cod_tipo_salvamento_versao_conteudo+'"}';

                          desabilita_botoes_salvar(editor);

														salvar(
														editor,
														function(){
                              habilita_botoes_salvar(editor);
															var t = setTimeout(function () {
														                	eval(data);
														                	 //Atualiza informações da minuta na janela de origem na função salvar
														                		 var t = setTimeout(function () {
																					//Atualiza informações da minuta na janela de origem
															                		try{
																							if (typeof(window.opener.atualizaInfoMinuta)=='function' || typeof(window.opener.atualizaInfoMinuta)=='object')
																							{
																								window.opener.atualizaInfoMinuta(id_minuta);
																							}
																					}
																					catch(e){}
																				}, 10);
													          }, 500);
															}
														,saveSubmitURL
														,parametros
														);

														$( this ).dialog( "close" );
												},
												"Devolver sem salvar": function() {
                                                    reset_editores();
                                                    clearonbeforeunload();
                                                    eval(data);
                                                    $(this).dialog("close");
                                                },
												"Cancelar": function() {
														$( this ).dialog( "close" );
												}
												}
											});
										});

					            }else{
									eval(data);
								}
					 		}else{
					 			alert('Recurso indisponível.');
					 			return;
					 		}
					 })
					 .fail(function(xhr, status, error) {
                        log_erro(editor,'Erro ao devolver minuta. <br>'+xhr.responseText);
					 });


        	}
    });
        editor.ui.addButton( 'devolver', {
            label: 'Devolver minuta',
            command: 'devolver',
            icon: 'minuta_devolver'
           // toolbar: 'insert'
        });


    }
});
//disponibilizar
CKEDITOR.plugins.add( 'disponibilizar', {
       icons:'disponibilizar',
       init: function( editor ) {
        editor.addCommand( 'disponibilizar', {

        	exec : function(editor){
				
				var SubmitURL = 'controlador_ajax.php?acao_ajax=buscar_recurso_minuta_para_plugin_editor&acao_origem=minuta_editar&hash=5547aa55b5220c26f912df7f204b3954';

				$.ajax({
		              url: SubmitURL,
				      type: 'POST',
				      data: {
				      	id_minuta:'321770737414589209876472877413',
				      	executa_em:'subform',
				      	recurso_minuta:'minuta_disponibilizar_painel'
				      }
				 })
				 .done(function(data, textStatus, jqXHR) {
				 		if(data.trim().length > 0){
				 			eval(data);
				 		}else{
				 			alert('Recurso indisponível.');
				 		}

				 })
				 .fail(function(xhr, status, error) {
                    log_erro(editor,'Erro ao disponibilizar . <br>'+xhr.responseText);
				 });
        	}
    });
        editor.ui.addButton( 'disponibilizar', {
            label: 'Disponibilizar',
            command: 'disponibilizar',
            icon: 'minuta_disponibilizar'
           // toolbar: 'insert'
        });


    }
});

//registro de ações
CKEDITOR.plugins.add( 'registroacoes', {
       icons:'registroacoes',
       init: function( editor ) {
        editor.addCommand( 'registroacoes', {

        	exec : function(editor){
				
				var SubmitURL = 'controlador_ajax.php?acao_ajax=buscar_recurso_minuta_para_plugin_editor&acao_origem=minuta_editar&hash=5547aa55b5220c26f912df7f204b3954';

				$.ajax({
		              url: SubmitURL,
				      type: 'POST',
				      data: {
				      	id_minuta:'321770737414589209876472877413',
				      	executa_em:'subform',
				      	recurso_minuta:'minuta_consultar_historico'
				      }
				 })
				 .done(function(data, textStatus, jqXHR) {
				 		if(data.trim().length > 0){
				 			eval(data);
				 		}else{
				 			alert('Recurso indisponível.');
				 		}

				 })
				 .fail(function(xhr, status, error) {
                    log_erro(editor,'Erro ao listar ações . <br>'+xhr.responseText);
				 });

        	}
    });
        editor.ui.addButton( 'registroacoes', {
            label: 'Registro de ações',
            command: 'registroacoes',
            icon: 'minuta_historico'
           // toolbar: 'insert'
        });


    }
});

//imprimir
CKEDITOR.plugins.add( 'imprimir', {
       icons:'imprimir',
       init: function( editor ) {
        editor.addCommand( 'imprimir', {

        	exec : function(editor){

	                	var SubmitURL = 'controlador_ajax.php?acao_ajax=buscar_recurso_minuta_para_plugin_editor&acao_origem=minuta_editar&hash=5547aa55b5220c26f912df7f204b3954';

							$.ajax({
					              url: SubmitURL,
							      type: 'POST',
							      data: {
							      	id_minuta:'321770737414589209876472877413',
							      	executa_em:'janela',
							      	recurso_minuta:'minuta_imprimir'
							      }
							 })
							 .done(function(data, textStatus, jqXHR) {
							 		if(data.trim().length > 0){
							 			if (check_dirty_editores()) {
		                    				//Salva a minuta
		                    							$('#alterarstatus').val("0"); //"Manter a minuta no status atual";se está salvando uma minuta assinada retorna para rascunho
		                    							var saveSubmitURL = 'controlador_ajax.php?acao_ajax=minuta_salvar&acao_origem=minuta_editar&hash=085c4e5cbc216b2350152849be92d068';
											        	var id_minuta= '321770737414589209876472877413';
											        	var cod_tipo_salvamento_versao_conteudo = 22;//autosalvamento tabela tipo_salvamento_versao_conteudo
														var parametros  = '{ "text":"##data##"," id_minuta":"'+ id_minuta+'","alterarstatus":"'+$('#alterarstatus').val()+'","statusMinutaDesejado":"'+$('#statusMinutaDesejado').val()+'","sbmCadastrarVersaoConteudo":"1","acao":"minuta_salvar","cod_tipo_salvamento_versao_conteudo":"'+cod_tipo_salvamento_versao_conteudo+'"}';

                      desabilita_botoes_salvar(editor);

														salvar(
														editor,
														function(){
                              habilita_botoes_salvar(editor);
															var t = setTimeout(function () {
														                	window.open(data);
														                	 //Atualiza informações da minuta na janela de origem na função salvar
														                		 var t = setTimeout(function () {
																					//Atualiza informações da minuta na janela de origem
															                		try{
																							if (typeof(window.opener.atualizaInfoMinuta)=='function' || typeof(window.opener.atualizaInfoMinuta)=='object')
																							{
																								window.opener.atualizaInfoMinuta(id_minuta);
																							}
																					}
																					catch(e){}
																				}, 10);
													          }, 500);
															}
														,saveSubmitURL
														,parametros
														);
	                					}
							 			else{
							 				window.open(data);
							 			}
							 		}else{
							 			alert('Recurso indisponível.');
							 		}

							 })
							 .fail(function(xhr, status, error) {
                                log_erro(editor, 'Erro ao imprimir . <br>'+xhr.responseText );
							 });



        	}
    });
        editor.ui.addButton( 'imprimir', {
            label: 'Imprimir',
            command: 'imprimir',
            icon: 'minuta_imprimir'
           // toolbar: 'insert'
        });


    }
});


    //visualizarpdfcartaar
    CKEDITOR.plugins.add('visualizarpdfcartaar', {
        icons: 'visualizarpdfcartaar',
        init: function (editor) {
          if (isCartaAr) {
            editor.on('change', function (e) {
              var contentSpace = editor.ui.space('contents'),
                  ckeditorFrameCollection = contentSpace.$.getElementsByTagName('iframe');
              var ckeditorFrame = ckeditorFrameCollection[0],
                  innerDoc = ckeditorFrame.contentDocument,
                  innerDocTextAreaHeight = $(innerDoc.body).height();
              var strMsg = "Possivelmente ultrapassou o limite de páginas! Confirme visualizando o pdf da carta.";

              if (innerDocTextAreaHeight && editor.config.intMaxHeightTextArea && innerDocTextAreaHeight>editor.config.intMaxHeightTextArea) {
                  showInfoMessage(strMsg , 'warning', false);
              } else {
                if ($("#infoMessage").text()==strMsg) {
                    showInfoMessage('' , 'info', false);
                }
              }
            });
          }
            editor.addCommand('visualizarpdfcartaar', {

                exec: function (editor) {

                    var SubmitURL = 'controlador_ajax.php?acao_ajax=buscar_recurso_minuta_para_plugin_editor&acao_origem=minuta_editar&hash=5547aa55b5220c26f912df7f204b3954';

                    $.ajax({
                        url: SubmitURL,
                        type: 'POST',
                        data: {
                            id_minuta: '321770737414589209876472877413',
                            executa_em: 'janela',
                            recurso_minuta: 'carta_ar/visualizar_pdf'
                        }
                    }).done(function (data, textStatus, jqXHR) {
                        if (data.trim().length > 0) {
                        	if (check_dirty_editores()) {
                                //Salva a minuta

                                var saveSubmitURL = 'controlador_ajax.php?acao_ajax=minuta_salvar&acao_origem=minuta_editar&hash=085c4e5cbc216b2350152849be92d068';
                                var id_minuta = '321770737414589209876472877413';
                                var cod_tipo_salvamento_versao_conteudo = 23;//autosalvamento tabela tipo_salvamento_versao_conteudo
                                var parametros = '{ "text":"##data##"," id_minuta":"' + id_minuta + '","alterarstatus":"' + $('#alterarstatus').val() + '","statusMinutaDesejado":"' + $('#statusMinutaDesejado').val() + '","sbmCadastrarVersaoConteudo":"1","acao":"minuta_salvar","cod_tipo_salvamento_versao_conteudo":"' + cod_tipo_salvamento_versao_conteudo+'","nomePlugin":"visualizarpdfcartaar"}';

                            desabilita_botoes_salvar(editor);

                                salvar(
                                    editor,
                                    function () {
                                      habilita_botoes_salvar(editor);
                                        var t = setTimeout(function () {
                                            window.open(data);
                                            //Atualiza informações da minuta na janela de origem na função salvar
                                            var t = setTimeout(function () {
                                                //Atualiza informações da minuta na janela de origem
                                                try {
                                                    if (typeof(window.opener.atualizaInfoMinuta) == 'function' || typeof(window.opener.atualizaInfoMinuta) == 'object') {
                                                        window.opener.atualizaInfoMinuta(id_minuta);
                                                    }
                                                }
                                                catch (e) {
                                                }
                                            }, 10);
                                        }, 500);
                                    }
                                    , saveSubmitURL
                                    , parametros
                                    );
                            }
                            else {
                                window.open(data);
                            }
                        } else {
                            alert('Recurso indisponível.');
                        }
                    }).fail(function (xhr, status, error) {
                           log_erro(editor, 'Erro ao visualizar PDF. <br>' + xhr.responseText);
                        });
                }
            });
            if (isCartaAr) {
                editor.ui.addButton('visualizarpdfcartaar', {
                    label: 'Visualizar PDF da Carta AR',
                    command: 'visualizarpdfcartaar',
                    icon: 'minuta_visualizar_pdf_carta_ar'
                });
            }
        }
    });

//minuta_assinar
CKEDITOR.plugins.add( 'assinar', {
  icons: 'assinar',
  init: function (editor) {
    editor.addCommand('assinar', {

      exec: function (editor) {

        var SubmitURL = 'controlador_ajax.php?acao_ajax=buscar_recurso_minuta_para_plugin_editor&acao_origem=minuta_editar&hash=5547aa55b5220c26f912df7f204b3954';

        $.ajax({
          url: SubmitURL,
          type: 'POST',
          data: {
            id_minuta: '321770737414589209876472877413',
            executa_em: 'subform',
            recurso_minuta: 'minuta_assinar'
          }
        })
            .done(function (data, textStatus, jqXHR) {
              if (data.trim().length>0) {
                //verifica se a minuta foi modificado ou se tem notas de fim de texto e se a seção notas está vazia para neste caso salvar a minuta antes de assinar
                // se for carta ar, força o salvamento para que seja verificado se a carta está no tamanho limite antes de assinar
                //se for processo com painel previdenciario salva antes de assinar para atualizar as tags
                let hdnUrlPainelPrevidenciario = document.getElementById('hdnUrlPainelPrevidenciario');
                if ((hdnUrlPainelPrevidenciario && infraTrim(hdnUrlPainelPrevidenciario.value) !== '') || check_dirty_editores() || isCartaAr || ($('span[class="rodape"]').length>0 && $('div[class="notas"]').val()=='')) {
                  $('#alterarstatus').val("0"); //"Manter a minuta no status atual";se está salvando uma minuta assinada retorna para rascunho
                  var saveSubmitURL = 'controlador_ajax.php?acao_ajax=minuta_salvar&acao_origem=minuta_editar&hash=085c4e5cbc216b2350152849be92d068';
                  var id_minuta = '321770737414589209876472877413';
                  var cod_tipo_salvamento_versao_conteudo = 24;//autosalvamento tabela tipo_salvamento_versao_conteudo
                  var parametros = '{ "text":"##data##"," id_minuta":"' + id_minuta + '","alterarstatus":"' + $('#alterarstatus').val() + '","statusMinutaDesejado":"' + $('#statusMinutaDesejado').val() + '","sbmCadastrarVersaoConteudo":"1","acao":"minuta_salvar","cod_tipo_salvamento_versao_conteudo":"' + cod_tipo_salvamento_versao_conteudo + '"}';

                  desabilita_botoes_salvar(editor);

                  salvar(
                      editor,
                      function () {
                        habilita_botoes_salvar(editor);
                        var t = setTimeout(function () {
                          eval(data);
                          //Atualiza informações da minuta na janela de origem na função salvar
                          var t = setTimeout(function () {
                            //Atualiza informações da minuta na janela de origem
                            try {
                                if(window.opener!==null) {
                                    if (typeof (window.opener.atualizaInfoMinuta) == 'function' || typeof (window.opener.atualizaInfoMinuta) == 'object') {
                                        window.opener.atualizaInfoMinuta(id_minuta);
                                    }
                                }
                            }
                            catch (e) {
                            }
                          }, 10);
                        }, 500);
                      }
                      , saveSubmitURL
                      , parametros
                  );
                }
                else {
                  eval(data);
                }
              } else {
                alert('Recurso indisponível.');
              }

            })
            .fail(function (xhr, status, error) {
              log_erro(editor, 'Erro assinar . <br>' + xhr.responseText);
            });
      }
    });
    editor.setKeystroke(CKEDITOR.ALT + 71 /*G*/, 'assinar');
    editor.ui.addButton('assinar', {
      label: 'Assinar',
      command: 'assinar',
      icon: 'minuta_assinar2'
      // toolbar: 'insert'
    });


  }
});

//atualizarcabecalho
CKEDITOR.plugins.add( 'atualizarcabecalho', {
       icons:'atualizarcabecalho',
       init: function( editor ) {
        editor.addCommand( 'atualizarcabecalho', {

        	exec : function(editor){
        					                	var SubmitURL = 'controlador_ajax.php?acao_ajax=buscar_recurso_minuta_para_plugin_editor&acao_origem=minuta_editar&hash=5547aa55b5220c26f912df7f204b3954';

							$.ajax({
					              url: SubmitURL,
							      type: 'POST',
							      data: {
							      	id_minuta:'321770737414589209876472877413',
							      	executa_em:'subform',
							      	recurso_minuta:'minuta_atualizar_cabecalho'
							      }
							 })
							 .done(function(data, textStatus, jqXHR) {
							 		if(data.trim().length > 0){
							 			if (check_dirty_editores()) {
							 							$('#alterarstatus').val("0"); //"Manter a minuta no status atual";se está salvando uma minuta assinada retorna para rascunho
		                   								var saveSubmitURL = 'controlador_ajax.php?acao_ajax=minuta_salvar&acao_origem=minuta_editar&hash=085c4e5cbc216b2350152849be92d068';
											        	var id_minuta= '321770737414589209876472877413';
											        	var cod_tipo_salvamento_versao_conteudo = 25;//autosalvamento tabela tipo_salvamento_versao_conteudo
														var parametros  = '{ "text":"##data##"," id_minuta":"'+ id_minuta+'","alterarstatus":"'+$('#alterarstatus').val()+'","statusMinutaDesejado":"'+$('#statusMinutaDesejado').val()+'","sbmCadastrarVersaoConteudo":"1","acao":"minuta_salvar","cod_tipo_salvamento_versao_conteudo":"'+cod_tipo_salvamento_versao_conteudo+'","nomePlugin":"atualizarcabecalho"}';

                            desabilita_botoes_salvar(editor);

														salvar(
														editor,
														function(){
                              habilita_botoes_salvar(editor);
															var t = setTimeout(function () {
														                	eval(data);
														                	 //Atualiza informações da minuta na janela de origem na função salvar
														                		 var t = setTimeout(function () {
																					//Atualiza informações da minuta na janela de origem
															                		try{
																							if (typeof(window.opener.atualizaInfoMinuta)=='function' || typeof(window.opener.atualizaInfoMinuta)=='object')
																							{
																								window.opener.atualizaInfoMinuta(id_minuta);
																							}
																					}
																					catch(e){}
																				}, 10);
													          }, 500);
															}
														,saveSubmitURL
														,parametros
														);
	                					}
							 			else{
								 			eval(data);
							 			}
							 		}else{
							 			alert('Recurso indisponível.');
							 		}

							 })
							 .fail(function(xhr, status, error) {
                                log_erro(editor, 'Erro ao atualizar cabeçalho . <br>'+xhr.responseText);
							 });


        	}
    });
        editor.ui.addButton( 'atualizarcabecalho', {
            label: 'Atualizar Cabeçalho',
            command: 'atualizarcabecalho',
            icon: 'minuta_atualizar_cabecalho'
           // toolbar: 'insert'
        });


    }
});


//Status Minuta
CKEDITOR.plugins.add('StatusMinutaDesejado',
{
  requires : ['richcombo'],
  init : function( editor )
  {
   	var strings = [];
   	var names = [];

   //acrescentar push dos candidatos a assinante
      strings.push(['0','Manter a minuta no status atual','Manter a minuta no status atual']);
      strings.push(['2','Encaminhar minuta para conferência','Encaminhar minuta para conferência']);
   strings.push(['3','Definir minuta como conferida','Definir minuta como conferida']);
   strings.push(['4','Encaminhar minuta para assinatura','Encaminhar minuta para assinatura']);
   strings.push(['1','Retornar minuta para rascunho','Retornar minuta para rascunho']);

    // add the menu to the editor
    editor.ui.addRichCombo('StatusMinutaDesejado',
    {
      label:     'Ao salvar e sair...',
      title:     'Ao salvar e sair...',
      voiceLabel: 'Ao salvar e sair...',
      className:   'StatusMinutaDesejado',
      multiSelect:false,
      panel:
      {
        css: [CKEDITOR.skin.getPath('editor')].concat(editor.config.contentsCss),
        multiSelect: false,
      },

      init: function()
      {
        this.startGroup( "Status desejado ao salvar" );
        for ( var i = 0 ; i < strings.length ; i++ )
        {
          this.add(strings[i][0], strings[i][1], strings[i][2]);
        }


		//Default value on first click
        							this.setValue('0', "Manter a minuta no status atual");
        $('#statusMinutaDesejado').val("0");
        

      },
      refresh: function() {
        for ( var i = 0 ; i < strings.length ; i++ )
        {
          if ( strings[i][0] == $('#statusMinutaDesejado').val()){
            this.setValue(strings[i][0],  strings[i][1]);
            break;
          }
        }
      },
      onClick: function( value )
      {
        for ( var i = 0 ; i < strings.length ; i++ )
        {
          if ( strings[i][0] == value){
          	this.setValue(value,  strings[i][1]);
          	break;
          	editor.focus();
          }
        }
        //marcar o campo hidden do status desejado após fechar
       $('#statusMinutaDesejado').val(value.toString());


      }
    });
  }
});


//salvar minuta e sair
CKEDITOR.plugins.add( 'salvarminutaesair', {
  icons: 'salvarminutaesair',
  init: function (editor) {
    editor.addCommand('salvarminutaesair', {

        exec: function (editor) {
            function __save(editor) {
//renumera notas 1,2,3...
                renumeranotas(editor,
                    function () {

                        $('#alterarstatus').val("1"); //altera o status conforme preferencia ou regra padrao ao salvar e sair

                        var saveSubmitURL = 'controlador_ajax.php?acao_ajax=minuta_salvar&acao_origem=minuta_editar&hash=085c4e5cbc216b2350152849be92d068';
                        var id_minuta = '321770737414589209876472877413';
                        var cod_tipo_salvamento_versao_conteudo = 6;//Salvo pelo Usuário ao sair do editor tabela tipo_salvamento_versao_conteudo
                        var parametros = '{ "text":"##data##"," id_minuta":"' + id_minuta + '","alterarstatus":"' + $('#alterarstatus').val() + '","statusMinutaDesejado":"' + $('#statusMinutaDesejado').val() + '","sbmCadastrarVersaoConteudo":"1","acao":"minuta_salvar","cod_tipo_salvamento_versao_conteudo":"' + cod_tipo_salvamento_versao_conteudo + '"}';
                        desabilita_botoes_salvar(editor);

                        salvar(
                            editor,
                            function () {
                                habilita_botoes_salvar(editor);
                                var t = setTimeout(function () {
                                    var id_minuta = '321770737414589209876472877413';
                                    var saveSubmitURL = 'controlador_ajax.php?acao_ajax=minuta_salvar&acao_origem=minuta_editar&hash=085c4e5cbc216b2350152849be92d068';
                                    reset_editores();
                                    clearonbeforeunload();

                                    $.ajax({
                                        url: saveSubmitURL,
                                        type: 'POST',
                                        data: {
                                            text: '', id: editor.name,
                                            id_minuta: id_minuta,
                                            sbmDesbloquear: 1
                                        }
                                    })
                                        .done(function (data, textStatus, jqXHR) {
                                            var patt = new RegExp("versao_conteudo_desbloqueada");
                                            if (patt.test(data)) {
                                                showInfoMessage('Documento desbloqueado. Aguarde, saindo... ', 'warning', true);
                                                //Atualiza informações da minuta na janela de origem na função salvar
                                                var t = setTimeout(function () {
                                                    //Atualiza informações da minuta na janela de origem
                                                    try {
                                                        if (typeof (window.opener.atualizaInfoMinuta) == 'function' || typeof (window.opener.atualizaInfoMinuta) == 'object') {
                                                            window.opener.atualizaInfoMinuta(id_minuta);
                                                        }
                                                    } catch (e) {
                                                    }
                                                }, 10);

                                                var t = setTimeout(function () {
                                                    window.open('', '_self', '');
                                                    window.close();
                                                }, 500);

                                            } else {
                                                log_erro(editor, 'Não foi possível desbloquear o documento.[' + data + ']');
                                                return;
                                            }


                                        })
                                        .fail(function (xhr, status, error) {
                                            habilita_botoes_salvar(editor);
                                            reiniciar_contagem_regressiva_avisar();
                                            reiniciar_contagem_regressiva_salvar();
                                            log_erro(editor, 'Erro ao salvar e sair.' + xhr.responseText);
                                        })
                                        .always(function () {
                                        });
                                }, 500);
                            }
                            , saveSubmitURL
                            , parametros
                        );
                    });
            }

            function modal_verificar_anonimizacao_ou__save(coockie, editor) {
                if (coockie.value == null) { // nao marcou check para ignorar o processo
                    // Verifica se tem nomes de partes não anonimizadas
                    let return_object = verificarPartesNaoAnonimizadas(editor,true);
                    if (return_object.has_unanonymized) {
                        // Define o valor do conteúdo do modal
                        $("#dialog-ignorar-processo-anonimizar .list_names").html(return_object.list_names);

                        // Abre o modal
                        $("#dialog-ignorar-processo-anonimizar").modal('show');
                        $('#check-unanonymized-alert').prop('checked', false);

                        // Configura os botões do modal
                        $("#btn_sim").off('click').on('click', function () {
                            if ($('#check-unanonymized-alert').is(':checked')) {
                                infraCriarCookie(coockie.name, 'true', 365);
                            } else {
                                infraRemoverCookie(coockie.name);
                            }
                            __save(editor);
                            fn_log_erro_editor (editor, 'Optado por não verificar parte não anonimizada ao salvar.');
                            $("#dialog-ignorar-processo-anonimizar").modal('hide');
                        });

                        $("#btn_cancelar").off('click').on('click', function () {
                            $("#dialog-ignorar-processo-anonimizar").modal('hide');
                        });
                    } else {
                        // nao tem partes nao anonimizadas ou o plugin anonimizar esta desativado
                        __save(editor);
                    }
                } else {
                    //marcou check para ignorar o processo
                    fn_log_erro_editor (editor, 'Optado por não verificar parte não anonimizada ao salvar.');
                    __save(editor);
                }
            }

            let coockie_ignorar_processo_anonimizar = 'TRF4_Eprocalexandress_ignorar_processo_anonimizar_50294957220218240018';
            let valor_coockie_ignorar_processo_anonimizar = infraLerCookie(coockie_ignorar_processo_anonimizar);
            let coockie = {
                'name': coockie_ignorar_processo_anonimizar,
                'value': valor_coockie_ignorar_processo_anonimizar
            }
            modal_verificar_anonimizacao_ou__save(coockie, editor);
        }
    });


//add the save button to the toolbar
    editor.setKeystroke(CKEDITOR.ALT + 90 /*Z*/, 'salvarminutaesair');
    editor.ui.addButton('salvarminutaesair', {
      label: 'Salvar Minuta e Sair',
      command: 'salvarminutaesair',
      icon: 'salvaresair'
      // toolbar: 'insert'
    });


  }
});


 //salvar minuta autosalvamento
CKEDITOR.plugins.add( 'autosalvamento', {
    icons: 'salvarminuta',
    init: function (editor) {
        editor.addCommand('autosalvamento', {

            exec: function (editor) {
                function __save(editor) {
                    $('#alterarstatus').val("0"); //"Manter a minuta no status atual";se está salvando uma minuta assinada retorna para rascunho
                    var saveSubmitURL = 'controlador_ajax.php?acao_ajax=minuta_salvar&acao_origem=minuta_editar&hash=085c4e5cbc216b2350152849be92d068';
                    var id_minuta = '321770737414589209876472877413';
                    var cod_tipo_salvamento_versao_conteudo = 26;//autosalvamento tabela tipo_salvamento_versao_conteudo
                    var parametros = '{ "text":"##data##"," id_minuta":"' + id_minuta + '","alterarstatus":"' + $('#alterarstatus').val() + '","statusMinutaDesejado":"' + $('#statusMinutaDesejado').val() + '","sbmCadastrarVersaoConteudo":"1","acao":"minuta_salvar","cod_tipo_salvamento_versao_conteudo":"' + cod_tipo_salvamento_versao_conteudo + '"}';

                    desabilita_botoes_salvar(editor);
                    showInfoMessage('Auto salvamento por limite de tempo excedido em progresso... ', 'warning', true);

                    salvar(
                        editor,
                        function () {
                            habilita_botoes_salvar(editor);
                            var t = setTimeout(function () {
                                showInfoMessage('Auto salvamento concluído', 'success', false);
                                //Atualiza informações da minuta na janela de origem na função salvar
                                var t = setTimeout(function () {
                                    //Atualiza informações da minuta na janela de origem
                                    try {
                                        if (typeof (window.opener.atualizaInfoMinuta) == 'function' || typeof (window.opener.atualizaInfoMinuta) == 'object') {
                                            window.opener.atualizaInfoMinuta(id_minuta);
                                        }
                                    } catch (e) {
                                    }
                                }, 10);
                            }, 500);
                        }
                        , saveSubmitURL
                        , parametros
                    );
                }

                function modal_verificar_anonimizacao_ou__save(coockie, editor) {
                    if (coockie.value == null) { // nao marcou check para ignorar o processo
                        // Verifica se tem nomes de partes não anonimizadas
                        let return_object = verificarPartesNaoAnonimizadas(editor,true);
                        if (return_object.has_unanonymized) {
                            // Define o valor do conteúdo do modal
                            $("#dialog-ignorar-processo-anonimizar .list_names").html(return_object.list_names);

                            // Abre o modal
                            $("#dialog-ignorar-processo-anonimizar").modal('show');
                            $('#check-unanonymized-alert').prop('checked', false);

                            // Configura os botões do modal
                            $("#btn_sim").off('click').on('click', function () {
                                if ($('#check-unanonymized-alert').is(':checked')) {
                                    infraCriarCookie(coockie.name, 'true', 365);
                                } else {
                                    infraRemoverCookie(coockie.name);
                                }
                                __save(editor);
                                fn_log_erro_editor (editor, 'Optado por não verificar parte não anonimizada ao salvar.');
                                $("#dialog-ignorar-processo-anonimizar").modal('hide');
                            });

                            $("#btn_cancelar").off('click').on('click', function () {
                                $("#dialog-ignorar-processo-anonimizar").modal('hide');
                            });
                        }else {
                            // nao tem partes nao anonimizadas ou o plugin anonimizar esta desativado
                            __save(editor);
                        }
                    } else {
                        //marcou check para ignorar o processo
                        fn_log_erro_editor (editor, 'Optado por não verificar parte não anonimizada ao salvar.');
                        __save(editor);
                    }
                }

                let coockie_ignorar_processo_anonimizar = 'TRF4_Eprocalexandress_ignorar_processo_anonimizar_50294957220218240018';
                let valor_coockie_ignorar_processo_anonimizar = infraLerCookie(coockie_ignorar_processo_anonimizar);
                let coockie = {
                    'name': coockie_ignorar_processo_anonimizar,
                    'value': valor_coockie_ignorar_processo_anonimizar
                }
                modal_verificar_anonimizacao_ou__save(coockie, editor);
            }
        });
    }
});

//salvar minuta
    CKEDITOR.plugins.add('salvarminuta', {
        icons: 'salvarminuta',
        init: function (editor) {
            editor.addCommand('salvarminuta', {

                exec: function (editor) {
                    function __save(editor){
                        $('#alterarstatus').val("0"); //"Manter a minuta no status atual";se está salvando uma minuta assinada retorna para rascunho
                        var saveSubmitURL = 'controlador_ajax.php?acao_ajax=minuta_salvar&acao_origem=minuta_editar&hash=085c4e5cbc216b2350152849be92d068';
                        var id_minuta = '321770737414589209876472877413';
                        var cod_tipo_salvamento_versao_conteudo = 2;//Salvo pelo Usuário tabela tipo_salvamento_versao_conteudo
                        var parametros = '{ "text":"##data##"," id_minuta":"' + id_minuta + '","alterarstatus":"' + $('#alterarstatus').val() + '","statusMinutaDesejado":"' + $('#statusMinutaDesejado').val() + '","sbmCadastrarVersaoConteudo":"1","acao":"minuta_salvar","cod_tipo_salvamento_versao_conteudo":"' + cod_tipo_salvamento_versao_conteudo + '"}';


                        desabilita_botoes_salvar(editor);
                        salvar(
                            editor,
                            function (a) {
                                habilita_botoes_salvar(editor);
                                var t = setTimeout(function () {
                                    //Atualiza informações da minuta na janela de origem na função salvar
                                    var t = setTimeout(function () {
                                        //Atualiza informações da minuta na janela de origem
                                        try {
                                            if (typeof (window.opener.atualizaInfoMinuta) == 'function' || typeof (window.opener.atualizaInfoMinuta) == 'object') {
                                                window.opener.atualizaInfoMinuta(id_minuta);
                                            }
                                        } catch (e) {
                                        }
                                    }, 10);
                                }, 500);
                            }
                            , saveSubmitURL
                            , parametros
                        );
                    }
                    function modal_verificar_anonimizacao_ou__save(coockie,editor){
                        if (coockie.value == null) { // nao marcou check para ignorar o processo
                            // Verifica se tem nomes de partes não anonimizadas
                            let return_object = verificarPartesNaoAnonimizadas(editor,true);
                            if (return_object.has_unanonymized) {
                                // Define o valor do conteúdo do modal
                                $("#dialog-ignorar-processo-anonimizar .list_names").html(return_object.list_names);

                                // Abre o modal
                                $("#dialog-ignorar-processo-anonimizar").modal('show');
                                $('#check-unanonymized-alert').prop('checked',false);

                                // Configura os botões do modal
                                $("#btn_sim").off('click').on('click', function() {
                                    if($('#check-unanonymized-alert').is(':checked')){
                                        infraCriarCookie(coockie.name, 'true', 365);
                                    }else{
                                        infraRemoverCookie(coockie.name);
                                    }
                                    __save(editor);
                                    fn_log_erro_editor (editor, 'Optado por não verificar parte não anonimizada ao salvar.');
                                    $("#dialog-ignorar-processo-anonimizar").modal('hide');
                                });

                                $("#btn_cancelar").off('click').on('click', function() {
                                    $("#dialog-ignorar-processo-anonimizar").modal('hide');
                                });
                            } else {
                                // nao tem partes nao anonimizadas ou o plugin anonimizar esta desativado
                                __save(editor);
                            }
                        } else {
                            //marcou check para ignorar o processo
                            fn_log_erro_editor (editor, 'Optado por não verificar parte não anonimizada ao salvar.');
                            __save(editor);
                        }
                    }

                    let coockie_ignorar_processo_anonimizar = 'TRF4_Eprocalexandress_ignorar_processo_anonimizar_50294957220218240018';
                    let valor_coockie_ignorar_processo_anonimizar= infraLerCookie(coockie_ignorar_processo_anonimizar);
                    let coockie = {
                        'name':coockie_ignorar_processo_anonimizar,
                        'value':valor_coockie_ignorar_processo_anonimizar
                    }
                    modal_verificar_anonimizacao_ou__save(coockie,editor);
                }
            });

            editor.setKeystroke(CKEDITOR.ALT + 66 /*B*/, 'salvarminuta');
            editor.setKeystroke(CKEDITOR.CTRL + 83 /*S*/, 'salvarminuta');

//add the save button to the toolbar

            editor.ui.addButton('salvarminuta', {
                label: 'Salvar Minuta (Alt + B)',
                command: 'salvarminuta',
                icon: 'salvar'
                // toolbar: 'insert'
            });


        }
    });


//FECHAR MINUTA
CKEDITOR.plugins.add( 'fecharminuta', {
  icons: 'fecharminuta',
  init: function (editor) {
    editor.addCommand('fecharminuta', {

      exec: function (editor) {

        //aqui temos os dados da seção corrente
        //var data = editor.getData();
        var continua = true;
        if (check_dirty_editores()) {
          if (confirm('O documento foi alterado. Ao sair as modificações serão perdidas!')) {
            continua = true;
          } else {
            continua = false;
          }
        }
        if (continua) {

                
                
				var data ;
				var id_minuta= '321770737414589209876472877413';
				var id_processo= '321768409941203996622535734331';
				
				editor.getCommand('fecharminuta').setState(CKEDITOR.TRISTATE_DISABLED);
                var versao; //versao após salvar
                var saveSubmitURL = 'controlador_ajax.php?acao_ajax=minuta_salvar&acao_origem=minuta_editar&hash=085c4e5cbc216b2350152849be92d068';
                $.ajax({
                    url: saveSubmitURL,
                    type: 'POST',
                    data: {
                        text: data, id: editor.name,
                        id_minuta:id_minuta,
                    	sbmDesbloquear:1
                      }
                })
                .done(function(data, textStatus, jqXHR) {
                   var patt = new RegExp("versao_conteudo_desbloqueada");
                	if(patt.test(data)){
                		//limpa informação de documento alterado
                        reset_editores();
                        clearonbeforeunload();
                        showInfoMessage('Documento desbloqueado' , 'success', false);
                		//Atualiza informações da minuta na janela de origem
						try{
							if (typeof(window.opener.atualizaInfoMinuta)=='function' || typeof(window.opener.atualizaInfoMinuta)=='object') 
							{ 
								window.opener.atualizaInfoMinuta(id_minuta);
							}		
						}
						catch(e){}
                		var t = setTimeout(function () {window.open('', '_self', ''); window.close(); }, 1000);
                	}
                	else{
                        log_erro(editor, 'Erro ao sair.'+data);
                	}
                	
					
                })
                .fail(function(xhr, status, error) {
                    log_erro(editor,'Erro ao fechar. Contate o suporte técnico <br>'+xhr.responseText);
                })
                .always(function() {
                });
               
                
                }
				

      }
    });
    editor.setKeystroke(CKEDITOR.ALT + 88 /*X*/, 'fecharminuta');
    editor.ui.addButton('fecharminuta', {
      label: 'Fechar Minuta',
      command: 'fecharminuta',
      icon: 'fechar'
      // toolbar: 'insert'
    });


  }
});

//LLM Gerar Ementa
if (bolHabilitarLlmGeradorDeEmenta) {
    CKEDITOR.skin.addIcon('ia', '../../imagens/ia.png');
    CKEDITOR.plugins.add('llmGerarEmenta', {
        icons: 'llmGerarEmenta',
        init: function (editor) {
            editor.addCommand('llmGerarEmenta', {
                exec: function (editor) {
                    llmGerarEmenta(editor);
                }
            });

            if (editor.contextMenu) {
                editor.contextMenu.addListener(function () {
                    if (editor.addMenuItem) {
                        editor.addMenuGroup('llm',1);

                        editor.addMenuItem('llmGerarEmenta', {
                            label: "Gerar Ementa por IA",
                            command: 'llmGerarEmenta',
                            icon: 'ia',
                            group: 'llm',
                            order: 1
                        });
                    }

                    return { llmGerarEmenta: CKEDITOR.TRISTATE_OFF };
                });
            }
        }
    });

    if (bolHabilitarLlmGeradorDeEmentaPersonalizado) {

    const EMENTA_PERSONALIZADA_CONFIG = {
        init: editor => {
            editor.addCommand('llmGerarEmentaPersonalizada', {exec: editor => llmGerarEmentaPersonalizada(editor)});

            if (editor.contextMenu) {
                editor.contextMenu.addListener(ementaPersonalizadaListener);

                function ementaPersonalizadaListener() {
                    if (editor.addMenuItem) {
                        const ITEM_CONFIG = {
                            label: "Gerar Ementa Personalizada por IA",
                            command: 'llmGerarEmentaPersonalizada',
                            icon: 'ia',
                            group: 'llm',
                            order: 2
                        };

                        editor.addMenuItem('llmGerarEmentaPersonalizada', ITEM_CONFIG);
                    }

                    return {llmGerarEmentaPersonalizada: CKEDITOR.TRISTATE_OFF};
                }
            }
        }
    };

    CKEDITOR.plugins.add('llmGerarEmentaPersonalizada', EMENTA_PERSONALIZADA_CONFIG);

    }
}
}

    function InitListenerTag() {
      var str = $('#txtTag').val();
      var boolRetornarValorTag = (str.substr(0,3) == '[V]');
      var tagNome = str.substr(4);
      insereConteudoTagEditor(tagNome, instancia_editor,'minuta_editar','321770737414589209876472877413','50294957220218240018',boolRetornarValorTag);
      $('#txtTag').val('');
      $('#hdnTag').val('');
    }

function InitListener() {
  insereTextoPadraoEditor($('#txtTextoPadrao1').val(),instancia_editor,'minuta_editar','321770737414589209876472877413','50294957220218240018');
  $('#txtTextoPadrao1').val('');
  $('#hdnTextoPadrao1').val('');
  $('#tabelaTextoPadrao').html('<table id="tabelaTextoPadrao" style="display: none;"><th></th><tr><td></td></tr></table>');
}

function InitListenerDocumentoBase() {
			var cod_minuta =  $('#txtDocumentoBase').val();
	 		$('#txtDocumentoBase').val('');
	 		$('#hdnIdDocumentoBase').val('');
	 		insereMinutaEditor(  instancia_editor, 	cod_minuta );
	 		instancia_editor.focus();
		}

function InitListenerModelo() {
	var cod_modelo =  $('#txtModelo').val().match(/([0-9]+)/i)[0];//pega só os digitos;
	 insereModeloEditor(  instancia_editor, 	cod_modelo );
	 $('#txtModelo').val('');
	 $('#hdnIdModelo').val('');
	 instancia_editor.focus();
}

//executa quando o documento estiver pronto
$(document).ready(function (){


  $( "#infoMessage" ).click(function() {

    var infoMessageIdConteudo = $(this).attr("data-idconteudo");
    var $head = $("iframe.cke_wysiwyg_frame ").contents().find("head");
    if (typeof infoMessageIdConteudo!="undefined") {
      if (infoMessageIdConteudo.length>=0) {
        var $style = $head.find('style[data-destacar="1"][id="' + infoMessageIdConteudo + '"]');
        if ($style && $style.length>0) {
          $style.remove();
        } else {
          $head.append(
              '<style data-destacar="1" id="' + infoMessageIdConteudo + '">' +
              'p[data-idconteudo="' + infoMessageIdConteudo + '"],' +
              'table[data-idconteudo="' + infoMessageIdConteudo + '"],' +
              'ul[data-idconteudo="' + infoMessageIdConteudo + '"],' +
              'ol[data-idconteudo="' + infoMessageIdConteudo + '"]{background-color:#eaeaea;color:black;}</style>');
        }
        $head.find('style[data-destacar="1"][id!="' + infoMessageIdConteudo + '"]').remove();
      }
      scrollToFirstElementWithIdConteudo(infoMessageIdConteudo);
    }else {
      var $style = $head.find('style[data-destacar="1"][id="digitadolivremente"]');
      if ($style && $style.length>0) {
        $style.remove();
      } else {
        $head.append(
            '<style data-destacar="1" id="digitadolivremente">' +
            'p:not([data-idconteudo]).caputEmenta,' +
            'p:not([data-idconteudo]).paragrafoPadrao,' +
            'p:not([data-idconteudo]).paragrafoSemRecuo,' +
            'p:not([data-idconteudo]).paragrafoComRecuo,' +
            'p:not([data-idconteudo]).paragrafoCentralizado,' +
            'p:not([data-idconteudo]).citacao,' +
            'p:not([data-idconteudo]).citacao2,' +
            'p:not([data-idconteudo]).tabela,' +
            'p:not([data-idconteudo]).destinatario,' +
            'p:not([data-idconteudo]).cartaPadrao,' +
            'p:not([data-idconteudo]).cartaComRecuo,' +
            'p:not([data-idconteudo]).cartaSemRecuo,' +
            'p:not([data-idconteudo]).cartaCompacta,' +
            'table:not([data-idconteudo]).caputEmenta,' +
            'table:not([data-idconteudo]).paragrafoPadrao,' +
            'table:not([data-idconteudo]).paragrafoSemRecuo,' +
            'table:not([data-idconteudo]).paragrafoComRecuo,' +
            'table:not([data-idconteudo]).paragrafoCentralizado,' +
            'table:not([data-idconteudo]).citacao,' +
            'table:not([data-idconteudo]).citacao2,' +
            'table:not([data-idconteudo]).tabela,' +
            'table:not([data-idconteudo]).destinatario,' +
            'table:not([data-idconteudo]).cartaPadrao,' +
            'table:not([data-idconteudo]).cartaComRecuo,' +
            'table:not([data-idconteudo]).cartaSemRecuo,' +
            'table:not([data-idconteudo]).cartaCompacta,' +
            'ul:not([data-idconteudo]).caputEmenta,' +
            'ul:not([data-idconteudo]).paragrafoPadrao,' +
            'ul:not([data-idconteudo]).paragrafoSemRecuo,' +
            'ul:not([data-idconteudo]).paragrafoComRecuo,' +
            'ul:not([data-idconteudo]).paragrafoCentralizado,' +
            'ul:not([data-idconteudo]).citacao,' +
            'ul:not([data-idconteudo]).citacao2,' +
            'ul:not([data-idconteudo]).tabela,' +
            'ul:not([data-idconteudo]).destinatario,' +
            'ul:not([data-idconteudo]).cartaPadrao,' +
            'ul:not([data-idconteudo]).cartaComRecuo,' +
            'ul:not([data-idconteudo]).cartaSemRecuo,' +
            'ul:not([data-idconteudo]).cartaCompacta,' +
            'ol:not([data-idconteudo]).caputEmenta,' +
            'ol:not([data-idconteudo]).paragrafoPadrao,' +
            'ol:not([data-idconteudo]).paragrafoSemRecuo,' +
            'ol:not([data-idconteudo]).paragrafoComRecuo,' +
            'ol:not([data-idconteudo]).paragrafoCentralizado,' +
            'ol:not([data-idconteudo]).citacao,' +
            'ol:not([data-idconteudo]).citacao2,' +
            'ol:not([data-idconteudo]).tabela,' +
            'ol:not([data-idconteudo]).destinatario,' +
            'ol:not([data-idconteudo]).cartaPadrao,' +
            'ol:not([data-idconteudo]).cartaComRecuo,' +
            'ol:not([data-idconteudo]).cartaSemRecuo,' +
            'ol:not([data-idconteudo]).cartaCompacta' +
            '{background-color:#eaeaea;color:black;}</style>');
      }
      $head.find('style[data-destacar="1"][id!="digitadolivremente"]').remove();
    }
  });

  $(document).on('keyup',function(evt) {
    if (evt.keyCode == 27) {
     // $( "#dialog-style-transform" ).dialog( "close" );

    }
  });

	//por padrão todos os estilos estão habilitados. Para retirar um estilo da lista ou impedir seu uso, utilize a função PermiteRecorte
	arrayObjAssociativoIdSecaoIdTipoDeRecorte = retornaArrayObjAssociativoIdSecaoIdTipoDeRecorte('7379729_9;3');

	//em editorweb.js
	inicializa_editor_web();

	//cor de fundo do editor
	var strNomeCookieBackGroundColor = "TRF4_Eproc_alexandress_backgroundcolor_editor";
	var valorCookieBackgroundColor = infraLerCookie(strNomeCookieBackGroundColor);
	var arrayContentsCss,arrayContentsCssReadOnly;
	if (valorCookieBackgroundColor=='azul'){
		arrayContentsCss =['controlador.php?acao=exibir_css&css_file=advertencia&hash=962d8634d48e994e07312070e6176760','css/estilos-editor-integrado.css'+ '?' + CKEDITOR.timestamp, 'css/estilos-editor-integrado-azul.css'+ '?' + CKEDITOR.timestamp];
		arrayContentsCssReadOnly =['controlador.php?acao=exibir_css&css_file=advertencia&hash=962d8634d48e994e07312070e6176760','css/estilos-editor-integrado-read-only.css'+ '?' + CKEDITOR.timestamp, 'css/estilos-editor-integrado-azul.css'+ '?' + CKEDITOR.timestamp];

    if('false'=='true'){
      arrayContentsCss.push('css/estilos-editor-integrado-azul-selection.css'+ '?' + CKEDITOR.timestamp);
      arrayContentsCssReadOnly.push('css/estilos-editor-integrado-azul-selection.css'+ '?' + CKEDITOR.timestamp);
    }
	}else{
		arrayContentsCss =['controlador.php?acao=exibir_css&css_file=advertencia&hash=962d8634d48e994e07312070e6176760','css/estilos-editor-integrado.css'+ '?' + CKEDITOR.timestamp, 'css/estilos-editor-integrado-branco.css'+ '?' + CKEDITOR.timestamp];
		arrayContentsCssReadOnly =['controlador.php?acao=exibir_css&css_file=advertencia&hash=962d8634d48e994e07312070e6176760','css/estilos-editor-integrado-read-only.css'+ '?' + CKEDITOR.timestamp, 'css/estilos-editor-integrado-branco.css'+ '?' + CKEDITOR.timestamp];

    if('false'=='true'){
      arrayContentsCss.push('css/estilos-editor-integrado-branco-selection.css'+ '?' + CKEDITOR.timestamp);
      arrayContentsCssReadOnly.push('css/estilos-editor-integrado-branco-selection.css'+ '?' + CKEDITOR.timestamp);
    }
	}

  var strNomeCookieEspellCheckerNativo = "TRF4_Eproc_alexandress_spellchecker_nativo";
	var valorCookieEspellCheckerNativo = infraLerCookie(strNomeCookieEspellCheckerNativo);

  //configuração para editores read only
  var config_readonly = {
    //skin:'moonocolor_blue',
    contentsCss : arrayContentsCssReadOnly,
    autoGrow_minHeight : 0,
    tabIndex: -1,
    allowedContent: true,
    sharedSpaces: {
      top: 'top',
      bottom: 'bottom'
    },
    toolbar: [
      { name: 'about', items: [ 'About' ] }
    ],
    stylesSet:'my_styles',
    saveSubmitURL : '',
    extraPlugins: 'sharedspace,autogrow,stylescombo',
    removePlugins: 'floatingspace,resize,maximize,image,scayt,scayt3'
    //removePlugins: 'sourcearea,floatingspace,resize,maximize'
  }
 	var config = {
    //skin:'moono_blue',
    intMaxHeightTextArea: numMaxHeightTextArea,
    monitoraPageUpDown: true,
    contentsCss: arrayContentsCss,
    contextmenu_contentsCss : [CKEDITOR.basePath + 'skins/moono/editor.css', 'css/estilos-editor-integrado-leiaute-menu-contexto.css'+ '?' + CKEDITOR.timestamp],
    autoGrow_minHeight: 0,
    startupFocus: false,
    placeholder: 'Digite aqui...',
    disallowedContent : '',
    allowedContent: globalAllowedContentEditorMinuta,
    sharedSpaces: {
      top: 'top',
      bottom: 'bottom'
    },
    toolbar: [
      {name: 'Salvar', items: ['salvarminuta', 'salvarminutaesair']},
      {name: 'SalvarStatusMinuta', items: ['StatusMinutaDesejado']},
      {name: 'Copiar e Colar', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', 'estiloAoColar']},
      {name: 'Desfazer e Refazer', items: ['Undo', 'Redo']},
      {name: 'Encontrar e Substituir', items: ['Find', 'Replace', 'ReplaceVariables','SelectAll', 'Scayt','spellcheckernativo']},
      {
        name: 'Formatação de Caracteres',
        items: ['Negrito', 'Italico', 'Sublinhado', 'Riscado', 'Subscript', 'Superscript','-','Dispositivo', 'Resumo', 'EmentaJulgamentoPerspectivaGenero', '-', 'RemoveFormat', 'Styles']
      },
      {
        name: 'Transformação de Caracteres',
        items: ['transformarMaiusculas', 'transformarMinusculas', 'transformarCapitalizado','agruparTexto']
      },
      {name: 'Listas', items: ['NumberedList', 'BulletedList']},
      {name: 'Suggestion', items: ['AddSuggestion']},
      {name: 'Inserção de Texto', items: ['insereTextoPadrao', 'inserirTextoBase', 'inserirModelo', 'visualizartextopadrao', 'notafimtexto','inserirlembrete','tabela_cumprimento_ceab']},
      {
        name: 'Recursos',
        items: ['extenso', 'renumeranotasdefimdetexto', 'alterardados', 'alterarlocalizador', 'marcacoes','registroacoes', 'imprimir', 'atualizarcabecalho', 'disponibilizar', 'visualizarpdfcartaar', 'assinar', 'devolver','anonimizar']
      },
      {name: 'Salvar como', items: ['salvarcomotextopadraosubform', 'salvarcomomodelopadrao']},
      {name: 'Inserir', items: ['Link', 'Unlink', 'Anchor', 'base64image', 'Table', 'HorizontalRule', 'SpecialChar']},
      {name: 'Exibir', items: ['backgroundcoloreditor', 'TextColor', 'BGColor', 'mostrarparagrafo']},
      {name: 'Tags', items: ['Tags']},
      { name: 'zoom', items: ['ZoomIn', 'ZoomOut', 'ResetZoom'] },
      {name: 'Fechar', items: ['About', 'atalhos', 'fecharminuta']},
      {name: 'Fonte', items: ['exibirfonte', 'registroerros']}
    ],
    stylesSet: 'my_styles',
    saveSubmitURL: '',
    extraPlugins: 'substituicoes,autopartefisica,anonimizar,tabela_periodo_controverso,tabela_cumprimento_ceab,basicstylesmarcacao,find,registroerros,marcacoes,autotag,aplicarEstiloCaputEmenta,' + (!(CKEDITOR.env.ie) || (CKEDITOR.env.ie && CKEDITOR.env.version>=10) ? 'widgetlinkdocumento,widgetlinkvideoaudienciaspan,widgetlinkvideoaudienciaa,base64image,confighelper,' : '') + 'autosalvamento,backgroundcoloreditor,atalhos,alterarlocalizador,Tags,zoom,aplicarEstiloParagrafoCentralizado,aplicarEstiloParagrafoComRecuo,renumeranotasdefimdetexto,inserirModelo,aplicarEstiloResumo,aplicarEstiloPerspectivaGenero,inserirTextoBase,aplicarEstiloParagrafoPadrao,aplicarEstiloParagrafoSemRecuo,aplicarEstiloCitacao,aplicarEstiloCitacao2,aplicarEstiloTitulo,aplicarEstiloSubTitulo,aplicarEstiloTabela,aplicarEstiloDispositivo,aplicarEstiloDestinatario,aplicarEstiloCartaPadrao,aplicarEstiloCartaComRecuo,aplicarEstiloCartaSemRecuo,aplicarEstiloCartaCompacta,devolver,assinar,disponibilizar,atualizarcabecalho,imprimir,visualizarpdfcartaar,registroacoes,salvarcomomodelopadrao,salvarcomotextopadraosubform,inserirlembrete,alterardados,insereTextoPadrao,textTransformUpperLowerCap,agruparTexto,extenso,spellcheckernativo,tableresize,fecharminuta,notafimtexto,sharedspace,salvarminuta,salvarminutaesair,autogrow,stylescombo,StatusMinutaDesejado,scayt3,wsc,estiloAoColar, visualizartextopadrao',//Sigilo,salvarComoTextoPadrao,atualizanotasdefimdetexto,sincronizaeditores
    removePlugins: 'scayt,' +
        ((CKEDITOR.env.ie && CKEDITOR.env.version<10) ? 'base64image,confighelper,' : '') +
        'smiley,floatingspace,resize,maximize,image,exportpdf' +
        ((valorCookieEspellCheckerNativo=='habilitado' || globalCorretorScaytDesativadoNoConfig) ? ',scayt3' : ''),
    on: {
      'key': ckeditorKeyPress, pluginsLoaded: function () {
        this.execCommand('autogrow');
      }
    }
  };

    if (bolHabilitarLlmGeradorDeEmenta) {
        setExtraPlugins('llmGerarEmenta');
        if (bolHabilitarLlmGeradorDeEmentaPersonalizado) {
            setExtraPlugins('llmGerarEmentaPersonalizada');
        }

        config.toolbar.push({
            name: 'IA',
            items: ['llmGerarEmenta']
        });
    }

    function setExtraPlugins(pluginName) {
        config.extraPlugins += config.extraPlugins.endsWith(',') ? pluginName : ',' + pluginName;
    }

    //configuração para editores read only
    var config_readonly = {
        contentsCss : arrayContentsCssReadOnly,
        autoGrow_minHeight : 0,
        tabIndex: -1,
        allowedContent: true,
        readOnly: true,
        versionCheck: false,
        toolbar: [],
        extraPlugins: 'sharedspace',
        removePlugins: 'exportpdf',
        sharedSpaces: {
            bottom: 'bottom'
        }
    }



  objLupaTag = new infraLupaText('txtTag' ,'hdnTag', 'controlador.php?acao=tag_selecionar&tipo_selecao=1&id_object=objLupaTag&target=minuta_editar&hash=5789afdb3f4f605d3f9013f523a89c4b');
  objLupaTag.finalizarSelecao = function() {
    window.setTimeout(function() {
      InitListenerTag()
    },1000);
  };


  objLupaTexto1 = new infraLupaTable('tabelaTextoPadrao','hdnTextoPadrao1','controlador.php?acao=texto_padrao_selecionar&tipo_selecao=1&id_object=objLupaTexto1&target=minuta_editar&comportamento_texto_padrao_selecionar=3&hash=6b2602449d38c872e1e747c382aac7d1',false);
  objLupaTexto1.finalizarSelecao = function() {
    window.setTimeout(function() {
        showInfoMessage('Inserindo texto padrão, aguarde...' , 'warning', true);
      InitListener()
    },1000);

  }
  objLupaTexto1.processarSelecao = function (item) {
    var itens = '';
    if (Array.isArray(item)) {
      item.forEach(function (elemento) {
        itens = itens + elemento.value + '|';
      });

      itens = itens.substring(0, (itens.length - 1));

      $("#txtTextoPadrao1").val(itens);
    }
    return true;
  }

  objLupaDocumentoBase =  new infraLupaText('txtDocumentoBase' ,'hdnIdDocumentoBase', 'controlador.php?acao=minuta_padrao_selecionar&tipo_selecao=1&id_object=objLupaDocumentoBase&hash=d17daa182838577a23ebf5200d665686');
  objLupaDocumentoBase.finalizarSelecao = function() {
    window.setTimeout(function() {
        showInfoMessage('Inserindo documento base, aguarde...' , 'warning', true);
      InitListenerDocumentoBase();
    },1000);
  };

  objLupaModelo =  new infraLupaText('txtModelo' ,'hdnIdModelo', 'controlador.php?acao=modelo_padrao_selecionar&acao_origem=minuta_editar&tipo_selecao=1&id_object=objLupaModelo&hash=50d7a07606fcd4b01a2911b0211114a6');
  objLupaModelo.finalizarSelecao = function() {
    window.setTimeout(function() {
        showInfoMessage('Inserindo modelo padrão, aguarde...' , 'warning', true);
      InitListenerModelo()
    },1000);
  };

  //prepara variaveis usadas pelo plugin registroerros
  prepara_tabela_erros();

	//carrega editores em editorwebjs.php
    setAssinatura();

	carrega_editores_web(config,config_readonly);

	//inicia monitoramento do tempo para aviso de salvamento
    let ocultarAvisoSalvar = false;
	avisa_salvamento(ocultarAvisoSalvar);

	//cor de fundo
	var strNomeCookieBackGroundColor = "TRF4_Eproc_alexandress_backgroundcolor_editor";
	var valorCookieBackgroundColor = infraLerCookie(strNomeCookieBackGroundColor);
	if (valorCookieBackgroundColor=='azul'){
		$('#Content').css('background-color','#000080');
	}

	$(document).on("click","a[title*='Estilos']",function() {
	 	var oEditor = instancia_editor;
	 	if (oEditor) {
            var selection = oEditor.getSelection();
            if (selection && selection.getType()==2 && selection.getSelectedText().length > 0) {
	 			oEditor.focus();
      	 		trimSelection(oEditor);
      	 	}
	      }
    });

	window.setTimeout(function() {
        for(name in CKEDITOR.instances)
		{
			var editor = CKEDITOR.instances[name];
			if(editor.config.startupFocus){
				editor.focus();
			}
		}
    },2500);

	$(document).on('blur', '.editarMinutaLembrete', function(){
		if($('#textareaMinutaLembrete'+$(this).attr("id")).val().length>0){
			if ($(this).css("display")=="inline"){
                //salva somente se o texto do lembrete foi alterado
                if($('.visualizarMinutaLembrete#'+$(this).attr("id")).text() !== $('#textareaMinutaLembrete'+$(this).attr("id")).val()){
                    salvarMinutaLembrete($(this).attr("id"));
                }
			}
		}else{
			if(confirm('Confirma desativação do lembrete?')){
				desativarMinutaLembrete($(this).attr("id"));
			}
		}
	});

	$(document).on('blur', '.novoMinutaLembrete', function(){
			incluirMinutaLembrete();
	});

    //esconde barra navbar
    const navbar = document.getElementById('navbar');
    navbar.classList.remove('d-flex');
    navbar.classList.remove('d-sm-flex');
    navbar.classList.remove('d-md-flex');
    navbar.classList.remove('d-lg-flex');
    navbar.classList.remove('d-xl-flex');
    navbar.classList.remove('d-xxl-flex');
    navbar.classList.add('d-none');

    //esconde botoes backTop e backBottom
    const backTop = document.getElementById('backTop');
    backTop.classList.add('d-none');
    const backBottom = document.getElementById('backBottom');
    backBottom.classList.add('d-none');

    /*resize para ajustar tela */
    window.dispatchEvent(new Event('resize'));
});

function atualizaInfoMinuta(id_minuta)
{
 try{
	if (window.opener)
	{
		if (typeof(window.opener.atualizaInfoMinuta)=='function' || typeof(window.opener.atualizaInfoMinuta)=='object')
		{
			window.opener.atualizaInfoMinuta(id_minuta);
		}
    if (typeof(window.opener.filtrarEventos)=='function' || typeof(window.opener.filtrarEventos)=='object')
    {
      window.opener.filtrarEventos('N');
    }
	}

	$( "#lembrete" ).html("");
    buscarLembretesMinuta('321770737414589209876472877413');

}
catch(e){}
}

function atualizaLocalizadores() {
    //atualização dos localizadores: a alteração de dados permite alteração de localizador
    if (typeof(window.opener.atualizaLocalizadores)=='function' || typeof(window.opener.atualizaLocalizadores)=='object') {
        window.opener.atualizaLocalizadores();
    }
}

function setAssinatura(){
    var $secao_assinatura = $('section[data-nome="assinaturas"]');
    $secao_assinatura.html('<p class="assinante_indicado">ALEXANDRE MORAIS DA ROSA</p><p class="assinante_indicado">Desembargador</p>');

}
function inicializar(){
	//Atualiza o bloqueio da minuta na janela de origem
	try{
		if (typeof(window.opener.atualizaInfoMinuta)=='function' || typeof(window.opener.atualizaInfoMinuta)=='object')
		{
			window.opener.atualizaInfoMinuta("321770737414589209876472877413");
		}
	}
	catch(e){}

	$( "#lembrete" ).html("");
	buscarLembretesMinuta('321770737414589209876472877413');

	//redimensiona_editores();


    $("#btn-aumentar-fonte").click(function () {

        const oEditor = CKEDITOR.instances[current_editor()];
        try {
            let content = oEditor.container.$.getElementsByClassName('cke_wysiwyg_frame')[0].contentDocument.body;
            let zoomLevel = 0.1;
            let currentZoom = content.style.zoom ? parseFloat(content.style.zoom) : 1;
            let newZoom = currentZoom + zoomLevel;

            // Verifica os limites do zoom
            if (newZoom >= 1 && newZoom <= 2.3) {
                    oEditor.execCommand("zoomIn");
            }else{
                oEditor.execCommand("zoomOut");
                window.setTimeout(function() {
                    oEditor.execCommand("zoomIn");
                },50);
            }
            /*resize para ajustar tela */
            window.dispatchEvent(new Event('resize'));
        } catch (e) {
        }
    });

    $("#btn-diminuir-fonte").click(function () {
        const oEditor = CKEDITOR.instances[current_editor()];
        try {
            let content = oEditor.container.$.getElementsByClassName('cke_wysiwyg_frame')[0].contentDocument.body;
            let zoomLevel = -0.1;
            let currentZoom = content.style.zoom ? parseFloat(content.style.zoom) : 1;
            let newZoom = currentZoom + zoomLevel;

            // Verificar limites do zoom
            if (newZoom >= 1 && newZoom <= 2.3) {
                oEditor.execCommand("zoomOut");
            }else{
                oEditor.execCommand("zoomIn");
                window.setTimeout(function() {
                    oEditor.execCommand("zoomOut");
                },50);
            }
            /*resize para ajustar tela */
            window.dispatchEvent(new Event('resize'));
        } catch (e) {
        }
    });

    if($("#navbar-accessibility").hasClass('show')){
        $("#navbar-accessibility").removeClass('d-none');
    }
    $("#fechar-barra-acessibilidade").click(function () {
        $("#navbar-accessibility").addClass('d-none');
        /*resize para ajustar tela */
        window.dispatchEvent(new Event('resize'));
    });

}

    $(document).on('change', 'input[name="chk-precedente-relevante"]', function () {
        if (this.checked) {
            persistirPrecedenteRelevante(this.getAttribute("data-id-minuta"),'S');
        }else {
            persistirPrecedenteRelevante(this.getAttribute("data-id-minuta"), 'N');
        }
    });
    $(document).on('change', 'input[name="chk-perspectiva-genero"]', function () {
        event.preventDefault();
        if (this.checked) {
            persistirProtocoloJulgamentoPerspectivaGenero(this.getAttribute("data-id-minuta"),'S');
        }else{
            persistirProtocoloJulgamentoPerspectivaGenero(this.getAttribute("data-id-minuta"),'N');
        }
    });

    $(document).on('change', 'input[name="chk-perspectiva-racial"]', function () {
        event.preventDefault();
        if (this.checked) {
            persistirProtocoloJulgamentoPerspectivaRacial(this.getAttribute("data-id-minuta"),'S');
        }else{
            persistirProtocoloJulgamentoPerspectivaRacial(this.getAttribute("data-id-minuta"),'N');
        }
    });

    $(document).on('change', 'input[name="chk-remeter-jurisprudencia"]', function () {
        if (this.checked) {
            persistirRemeterJurisprudencia(this.getAttribute("data-id-minuta"),'S');
        }else{
            persistirRemeterJurisprudencia(this.getAttribute("data-id-minuta"),'N');
        }
    });

    function persistirPrecedenteRelevante(idMinuta, precedenteRelevante) {
        var ajax = infraAjaxCriarRequest();
        ajax.open("POST", json_urls_ajax.url_func_persistir_precedente_relevante, true);
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        ajax.onreadystatechange = function () {
            if (ajax.readyState==4) {
                var retorno = ajax.responseText;
            }
        };
        var params = "id_minuta=" + idMinuta + "&precedente_relevante=" + precedenteRelevante;
        ajax.send(params);

    }

    function persistirProtocoloJulgamentoPerspectivaGenero(idMinuta, perspectivaGenero) {
        var ajax = infraAjaxCriarRequest();
        ajax.open("POST", json_urls_ajax.url_func_persistir_perspectiva_genero, true);
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        ajax.onreadystatechange = function () {
            if (ajax.readyState==4) {
                var retorno = ajax.responseText;
            }
        };
        var params = "id_minuta=" + idMinuta + "&protocolo_julgamento_perspectiva_genero=" + perspectivaGenero;
        ajax.send(params);

    }

    function persistirProtocoloJulgamentoPerspectivaRacial(idMinuta, perspectivaRacial) {
        var ajax = infraAjaxCriarRequest();
        ajax.open("POST", json_urls_ajax.url_func_persistir_perspectiva_racial, true);
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        ajax.onreadystatechange = function () {
            if (ajax.readyState==4) {
                var retorno = ajax.responseText;
            }
        };
        var params = "id_minuta=" + idMinuta + "&protocolo_julgamento_perspectiva_racial=" + perspectivaRacial;
        ajax.send(params);

    }

    function persistirRemeterJurisprudencia(idMinuta,remeterJurisprudencia){
        ajax = infraAjaxCriarRequest();
        ajax.open("POST",  json_urls_ajax.url_func_persistir_remeter_jurisprudencia, true);
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        ajax.onreadystatechange = function()
        {
            if(ajax.readyState == 4)
            {
                var retorno = ajax.responseText;
            }
        };
        var params = "id_minuta=" + idMinuta + "&remeter_jurisprudencia=" + remeterJurisprudencia;
        ajax.send(params);

    }

    function getArrTipoDemandaLlm() {
        const arrTipoDemandaLlm = '{"1":"RELATORIO","2":"RELATORIO TEST","3":"GERADOR EMENTA","4":"PLAYGROUND","5":"ASSISTENTE VIRTUAL","6":"EXTRAIR ENDERECO","7":"VALIDAR INFORMACOES","8":"RESUMO DOCUMENTO","9":"SUGESTAO PRECEDENTES QUALIFICADOS","40400000":"DESJUDICIALIZA PREV"}';
        return JSON.parse(arrTipoDemandaLlm);
    }
</script>



    

    <div id="divInfraAreaGlobal">
        
                    <div class="bootstrap-styles navbar-wrapper">
                <nav id="navbar-accessibility" class="accessibility-bar bg-instancia collapse" data-id="69" data-ativo="N" style="">
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
    <input type="hidden" id="link-usuario-configuracao-personalizacao" value="controlador_ajax.php?acao_ajax=usuario_configuracao_personalizacao&amp;hash=e7e5760ae4a8314c6b6e90c4b2650a01">
    <a href="controlador.php?acao=tutorial_acessibilidade&amp;hash=f5608557f8c14df64cf7dcd8c966b9b6" id="btn-pagina-acessibilidade" tabindex="0" title="Acessibilidade (Alt+F1)" class="item-acessibilidade">Acessibilidade</a>
            <a href="#/" id="fechar-barra-acessibilidade" data-toggle="collapse" data-target="#navbar-accessibility" tabindex="0" title="Fechar barra de acessibilidade" class="float-right item-acessibilidade collapsed" aria-expanded="false">
            <i class="material-icons icon-aligned-sm" aria-hidden="true">close</i>
        </a>
    </nav>                <nav id="navbar" class="navbar text-white bg-instancia d-none">
                    <div class="d-flex w-100 justify-content-between" style="font-size: 14px;">
    <div class="d-flex align-items-center">
                    <div style="padding: 8px">
                <a href="#" id="menu-btn" aria-label="Abrir menu" title="Abrir menu" class="">
                    <i class="material-icons navbar-icons">menu</i>
                </a>
            </div>
        
        			<div title="Painel Inicial" style="margin-left: 7px">
					<a href="principal.php?acao=principal&amp;home=1&amp;hash=716b132a4af07ab5d728dacf9d2c1976">
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
				<form method="post" class="mb-0 frm-lotacoes" action="controlador.php?acao=pessoa_usuario_selecionar&amp;hash=90875c0f08fdf43beb4d7fb8efc17692"><select class="custom-select custom-select-sm selInfraUnidades" id="selInfraUnidades" name="selInfraUnidades" onchange="mudarPerfil(this);" aria-label="Mudar perfil. Tecla de atalho: Alt+P" title="Tecla de atalho: Alt+P">
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
                                    <div class="d-none d-md-flex" style="margin-right: 8px">
                                                                                        <a aria-label="Página inicial do sistema" href="principal.php?acao=principal&amp;hash=67fa52a11674673e9cb718aabe4fb3d6" title="Página inicial do sistema">
                    <i class="material-icons navbar-icons" style="padding: 0;">home</i>
                </a>
                                                <a aria-label="Meus Localizadores" href="controlador.php?acao=usuario_tipo_monitoramento_localizador_listar&amp;acao_origem=minuta_editar&amp;acao_retorno=minuta_editar&amp;hash=31cbc5d6decae874ab8de8e5cb959d0f" role="button">
				<i class="material-icons navbar-icons" title="Meus Localizadores" style="padding: 0;">all_inbox</i>
			</a>
                                                                    </div>
                                                <div class="d-flex ">
                                                <a href="controlador.php?acao=minuta_area_trabalho&amp;hash=90dc56bd39742a0913fc4860f571db8f" role="button" id="atalhoRapido_1" accesskey="1" title="Área de Trabalho (Alt+1)" '=""><i class="material-icons navbar-icons" style="padding: 0;">looks_one</i></a><a href="controlador.php?acao=sessao_julgamento_listar&amp;hash=69b9f485c514016f84adc317191a72c5" role="button" id="atalhoRapido_2" accesskey="2" title="Cronograma de Sessões de Julgamento (Alt+2)" '=""><i class="material-icons navbar-icons" style="padding: 0;">looks_two</i></a><a href="controlador.php?acao=automatizar_localizadores&amp;hash=999ead7f423c69d80c03b91984a13ae3" role="button" id="atalhoRapido_3" accesskey="3" title="Automatizar Tramitação Processual (Alt+3)" '=""><i class="material-icons navbar-icons" style="padding: 0;">looks_3</i></a>
                                                </div>
                                                <div class="d-none d-md-block align-items-center" style="width: 280px;margin-left: 8px">						<form name="formPesquisaRapida" id="formPesquisaRapida" action="controlador.php?acao=processo_pesquisa_rapida&amp;hash=26838cd650a53593d563594a9686e73f" method="post" class="d-flex align-items-center searchbar">
							<input id="txtNumProcessoPesquisaRapida" accesskey="Z" type="search" name="txtNumProcessoPesquisaRapida" title="Pesquisar pelo número do processo (Ctrl + Shift + F)" aria-label="Pesquisar pelo número do processo (Ctrl + Shift + F)" class="form-control form-control-sm search-input" placeholder="digite o n. do processo" style="background-color: transparent">
                            <img src="infra_css/imagens/aguarde.gif" id="iconeAguardePesquisa" style="display: none; width: 28px; height: 28px; margin-top: 3px; margin-right:8px">
                            <button class="btn btn-link btn-pesquisar input-group-btn search-button" style="margin-left: 8px; padding: 4px; pointer-events: auto !important;" tabindex="0" name="btnPesquisaRapidaSubmit" type="submit" aria-label="Abrir na mesma janela (Enter) - Pesquisa rápida" title="Abrir na mesma janela (Enter)"><i class="material-icons icon-aligned pr-0">search</i></button>		
                            <button class="btn btn-link btn-pesquisar-nova-janela input-group-btn search-button" style="margin-left: 8px; padding: 4px; pointer-events: auto !important;" tabindex="0" name="btnPesquisaRapidaSubmitNovaAba" type="submit" formtarget="_blank" aria-label="Abrir em nova janela - Pesquisa rápida" title="Abrir em nova janela"><i class="material-icons icon-aligned pr-0">open_in_new</i></button>
                            <input type="hidden" name="acao_retorno_pesquisa_rapida" value="minuta_editar">                            
						</form>

                        <script>
                        
                            function testeCpfCnpj() {
                                let texto = $('input[name="txtNumProcessoPesquisaRapida"]').val().replace(/\D+/g, '');
                                return (texto.length == 11 || texto.length == 14) && (infraValidarCpf(texto) || infraValidarCnpj(texto));
                            }
                            
                            function preparaEnviaFormCpfCnpj() {
                                    let formPesquisa = document.getElementById('formPesquisaRapida');                                  
                                    formPesquisa.action = 'controlador.php?acao=pesquisa_processo_doc_parte&hash=ae81905675f3e40c623cbdac32478ada';
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
                                        url: 'controlador_ajax.php?acao_ajax=verifica_pesquisa_rapida_minuta_mandado&hash=c81d484a6b133f6f7406e12933d882a8',
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
                                <form method="post" class="mb-0 frm-lotacoes" action="controlador.php?acao=pessoa_usuario_selecionar&amp;hash=90875c0f08fdf43beb4d7fb8efc17692"><select class="custom-select custom-select-sm selInfraUnidades" id="selInfraUnidades" name="selInfraUnidades" onchange="mudarPerfil(this);" aria-label="Mudar perfil. Tecla de atalho: Alt+P" title="Tecla de atalho: Alt+P">
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
                                                                                                <a aria-label="Meus Localizadores" class="d-flex profile-item" href="controlador.php?acao=usuario_tipo_monitoramento_localizador_listar&amp;acao_origem=minuta_editar&amp;acao_retorno=minuta_editar&amp;hash=31cbc5d6decae874ab8de8e5cb959d0f" role="button">
				<div><i class="material-icons" title="Meus Localizadores">all_inbox</i></div>
				<div>Meus localizadores</div>
			</a>
                                                                                                                                <a href="controlador.php?acao=minuta_area_trabalho&amp;hash=90dc56bd39742a0913fc4860f571db8f" class="d-flex profile-item" role="button" id="atalhoRapidoMobile_1" accesskey="1" title="Área de Trabalho (Alt+1)"><div><i class="material-icons">looks_one</i></div><div>Área de Trabalho</div></a><a href="controlador.php?acao=sessao_julgamento_listar&amp;hash=69b9f485c514016f84adc317191a72c5" class="d-flex profile-item" role="button" id="atalhoRapidoMobile_2" accesskey="2" title="Cronograma de Sessões de Julgamento (Alt+2)"><div><i class="material-icons">looks_two</i></div><div>Cronograma de Sessões de Julgamento</div></a><a href="controlador.php?acao=automatizar_localizadores&amp;hash=999ead7f423c69d80c03b91984a13ae3" class="d-flex profile-item" role="button" id="atalhoRapidoMobile_3" accesskey="3" title="Automatizar Tramitação Processual (Alt+3)"><div><i class="material-icons">looks_3</i></div><div>Automatizar Tramitação Processual</div></a>
                                                                                        <div class="dropdown-divider"></div>
                            			<a class="d-flex profile-item" title="novidades" href="controlador.php?acao=novidades_sistema&amp;acao_origem=minuta_editar&amp;acao_retorno=minuta_editar&amp;hash=afd1aa6b0e4056967be1961c6d3f8f0b" target="_blank">
				<div><i class="material-icons  notification-badge success" aria-hidden="true">fiber_new</i></div>
				<div>Novidades - todas lidas</div>
			</a>			<a class="d-flex profile-item" title="" href="controlador.php?acao=usuario_personalizacao_configuracao&amp;hash=198ad223aedeaa81ee3d540085a7ae9f" target="_blank">
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
        </a><a id="btn-encerrar-sessao" class="d-flex profile-item" href="controlador.php?acao=sair&amp;hash=9c02798b70b3f6acb1f4bdc4a5dfa2ae"><div><i class="material-icons" aria-hidden="true">exit_to_app</i></div>Encerrar Sessão <span class="ml-1 text-muted font-italic">(Ctrl+Shift+F4)</span></a>
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
                                						<form name="formPesquisaRapida" id="formPesquisaRapida" action="controlador.php?acao=processo_pesquisa_rapida&amp;hash=26838cd650a53593d563594a9686e73f" method="post" class="d-flex align-items-center searchbar">
							<input id="txtNumProcessoPesquisaRapida" accesskey="Z" type="search" name="txtNumProcessoPesquisaRapida" title="Pesquisar pelo número do processo (Ctrl + Shift + F)" aria-label="Pesquisar pelo número do processo (Ctrl + Shift + F)" class="form-control form-control-sm search-input" placeholder="Nº de processo" style="background-color: transparent">
                            <img src="infra_css/imagens/aguarde.gif" id="iconeAguardePesquisa" style="display: none; width: 28px; height: 28px; margin-top: 3px; margin-right:8px">
                            <button class="btn btn-link btn-pesquisar input-group-btn search-button" style="margin-left: 8px; padding: 4px; pointer-events: auto !important;" tabindex="0" name="btnPesquisaRapidaSubmit" type="submit" aria-label="Abrir na mesma janela (Enter) - Pesquisa rápida" title="Abrir na mesma janela (Enter)"><i class="material-icons icon-aligned pr-0">search</i></button>		
                            <button class="btn btn-link btn-pesquisar-nova-janela input-group-btn search-button" style="margin-left: 8px; padding: 4px; pointer-events: auto !important;" tabindex="0" name="btnPesquisaRapidaSubmitNovaAba" type="submit" formtarget="_blank" aria-label="Abrir em nova janela - Pesquisa rápida" title="Abrir em nova janela"><i class="material-icons icon-aligned pr-0">open_in_new</i></button>
                            <input type="hidden" name="acao_retorno_pesquisa_rapida" value="minuta_editar">                            
						</form>

                        <script>
                        
                            function testeCpfCnpj() {
                                let texto = $('input[name="txtNumProcessoPesquisaRapida"]').val().replace(/\D+/g, '');
                                return (texto.length == 11 || texto.length == 14) && (infraValidarCpf(texto) || infraValidarCnpj(texto));
                            }
                            
                            function preparaEnviaFormCpfCnpj() {
                                    let formPesquisa = document.getElementById('formPesquisaRapida');                                  
                                    formPesquisa.action = 'controlador.php?acao=pesquisa_processo_doc_parte&hash=ae81905675f3e40c623cbdac32478ada';
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
                                        url: 'controlador_ajax.php?acao_ajax=verifica_pesquisa_rapida_minuta_mandado&hash=c81d484a6b133f6f7406e12933d882a8',
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

        <a href="controlador.php?acao=menu_textual&amp;hash=de69ef64326a100fc366692f14b6a558" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-106" aria-label="Menu Textual">
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

        <a href="controlador.php?acao=nomeacoes_ajg_listar&amp;hash=ae12eba8dc9b86eabceb7b4083f6ebf0" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-537" aria-label="Nomeações criadas (aguardando solicitar pagamento)">
            <span class="menu-item-text">Nomeações criadas (aguardando solicitar pagamento)</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=solicitacoes_pagamento_ajg_listar&amp;hash=37a1fe02994fa66873050c23b3829db5" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-538" aria-label="Solicitações criadas (aguardando validação)">
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

        <a href="controlador.php?acao=assinatura_digital&amp;hash=6e1a9408afadedffee09c597d9758044" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-201" aria-label="Assinar">
            <span class="menu-item-text">Assinar</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=validar_assinatura&amp;hash=f2801cd57729d2677e0946ca23f30017" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-262" aria-label="Validar">
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

        <a href="controlador.php?acao=audiencia_calendario&amp;hash=68cbdcd0a6b30c32264e537eae5a213e" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-787" aria-label="Calendário de Audiências">
            <span class="menu-item-text">Calendário de Audiências</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=sala_audiencia_orgao_listar&amp;hash=c6c9d463f901ba247d0e4f9936a250cf" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-121" aria-label="Gerenciamento de Salas">
            <span class="menu-item-text">Gerenciamento de Salas</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_audiencia_virtual_proposta&amp;hash=f750d5545dab69bcd33cd252fe60bbf7" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-467" aria-label="Propostas de Acordo das Audiências Virtuais">
            <span class="menu-item-text">Propostas de Acordo das Audiências Virtuais</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=audiencia_relatorio&amp;hash=b393f700ee5c49e9ebb59dc5a3c6e9ac" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-122" aria-label="Relatório de Audiências">
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

        <a href="controlador.php?acao=md_cj_calculo_listar&amp;hash=040869a1286150e12dbf47d4d9e23030" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-751" aria-label="Cálculos">
            <span class="menu-item-text">Cálculos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=IntegracaoCertidao/SelecionarProcesso&amp;hash=c83abd1d1d5109b2a937956534c5652d" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-817" aria-label="Certificar Antecedentes para fins Judiciais">
            <span class="menu-item-text">Certificar Antecedentes para fins Judiciais</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=desmembramento_processo_consultar&amp;hash=ebd2db55bd85f3a83e492e04e5c86a0e" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-384" aria-label="Cisão/Desmembramento de Processo">
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

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=consultar&amp;hash=fef6c39bfd1ec5f2aa057e00c4effb0e" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-4" aria-label="Consultar Processos">
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

        <a href="controlador.php?acao=consultaArquivados/pesquisardocumento&amp;hash=3d8695e5b78839bd7cd9a852d2285687" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-766" aria-label="Consulta de Documentos do SAJ">
            <span class="menu-item-text">Consulta de Documentos do SAJ</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=consultaArquivados/pesquisar&amp;hash=38320efdf4cbc805439e7a1f253ba581" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-765" aria-label="Consulta de Processos do SAJ">
            <span class="menu-item-text">Consulta de Processos do SAJ</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=consultaArquivados/pesquisarComChave&amp;hash=7b4ccbe417c1b06c8436ea388dd2d943" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-767" aria-label="Consulta de Processos do SAJ  com Chave">
            <span class="menu-item-text">Consulta de Processos do SAJ  com Chave</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=chavesDeAcesso/inicio&amp;hash=c702cf0e04520d6f438d5b907413c317" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-768" aria-label="Gerenciamento de Chaves de Processos do SAJ">
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

        <a href="controlador.php?acao=usuario_procurador_pessoa_juridica_cadastro_listar&amp;hash=919ef83c6bd00a5c4b086b851dcba013" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-184" aria-label="Associar Advogado-Titular">
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

        <a href="controlador.php?acao=advogado_cadastrado_listar&amp;hash=08cceae9ba33f7ce0f9aef933de676eb" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-68" aria-label="Advogados Cadastrados">
            <span class="menu-item-text">Advogados Cadastrados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=advogado_listar&amp;hash=d6e9863d2a4a1568ad52626c7273c48d" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-2" aria-label="Validar Advogado">
            <span class="menu-item-text">Validar Advogado</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=jus_postulandi_listar&amp;hash=2d9c8a052cca61099f45d9de07c3770b" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-423" aria-label="Validar Jus Postulandi">
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

        <a href="controlador.php?acao=feriado_secretaria_listar&amp;hash=c8c11d5739a658c588a7c3a4fc52a731" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-20" aria-label="Feriados (Secretaria)">
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

        <a href="controlador.php?acao=juizo_estadual_listar&amp;hash=2f22b55768215fcf0c3956bc891f35c4" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-670" aria-label="Cadastro de Juízos Externos">
            <span class="menu-item-text">Cadastro de Juízos Externos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=gerenciamento_partes_reu_sob_monitoramento_listar&amp;hash=a8ec65eaa17922ed0f9fcf072029636d" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-448" aria-label="Gerenciar Monitoramento de Réus">
            <span class="menu-item-text">Gerenciar Monitoramento de Réus</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=gerenciamento_partes_listar&amp;hash=3a2161d033c65141cf747d8dc3be99d2" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-80" aria-label="Gerenciar Partes">
            <span class="menu-item-text">Gerenciar Partes</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=representacao_partes_cadastrar&amp;hash=3d7d922cfff8b5f3031f26c032aee3c9" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-93" aria-label="Gerenciar Representação de Partes">
            <span class="menu-item-text">Gerenciar Representação de Partes</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=gerenciamento_partes_situacao_listar&amp;hash=aee0c2137ea8dc58644dbe8ecc45a91c" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-671" aria-label="Gerenciar Situação de Partes">
            <span class="menu-item-text">Gerenciar Situação de Partes</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=processo_relacionado_listar&amp;hash=b642ac4ed22c335f6a15512e0104968d" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-116" aria-label="Gerenciamento de Processos Relacionados">
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

        <a href="controlador.php?acao=plantao_magistrado_listar&amp;hash=cecb8a4c9b2a6319afd30c5548d3ba84" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-95" aria-label="Plantão Magistrado">
            <span class="menu-item-text">Plantão Magistrado</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=plantao_servidor_listar&amp;hash=20c3fb5e08b5045a323724868a4a043c" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-96" aria-label="Plantão Servidor">
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

        <a href="controlador.php?acao=mandados/gm_cargo_zona/listar&amp;hash=bb0dad636fe83afaca0016361236a3b4" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-634" aria-label="Cargos Zona">
            <span class="menu-item-text">Cargos Zona</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=mandados/vincularManualmenteConducao&amp;hash=58b0cb9c134029ed753d24bd006ab3c1" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-742" aria-label="Vincular Condução Manualmente">
            <span class="menu-item-text">Vincular Condução Manualmente</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=listar_formulario_personalizacao_grupo&amp;hash=dcacb2267b418f189bf62df3c9d2ca95" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-720" aria-label="Grupos de Preferências">
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

        <a href="controlador.php?acao=magistrado_impedimento_listar&amp;hash=dae1f68205ad49267d68f1d68c219ea8" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-146" aria-label="Cadastrar Impedimento Magistrados">
            <span class="menu-item-text">Cadastrar Impedimento Magistrados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=impedimentos&amp;hash=8b5033a10ad82d45f51a234a182c6465" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-144" aria-label="Verificar Impedimentos">
            <span class="menu-item-text">Verificar Impedimentos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=impedimentos_bloco&amp;hash=8f644ab64831f3496f225d07bcb0d4e3" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-145" aria-label="Verificar Impedimentos (em bloco)">
            <span class="menu-item-text">Verificar Impedimentos (em bloco)</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=md_tjsc_informe_rendimento_ajg_sidejud_listar&amp;hash=877871febcb2c247d30f87de1205af9c" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-675" aria-label="Informe de rendimentos">
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

        <a href="controlador.php?acao=inteligencia_artificial/llm_chat_playground/index&amp;hash=3062451b20265cc62b064fec1512bc56" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-782" aria-label="LLM Chat Playground">
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

        <a href="controlador.php?acao=localizador_acao_preferencial_listar&amp;hash=9cbcbac9913886d63eac7723aa9afc96" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-623" aria-label="Ações Preferenciais por Localizador">
            <span class="menu-item-text">Ações Preferenciais por Localizador</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processamento_em_massa/listar_localizadores&amp;hash=f26d4f3af888ee330d64a9e9ab17f434" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-799" aria-label="Alterar Localizador de Processos (em Massa)">
            <span class="menu-item-text">Alterar Localizador de Processos (em Massa)</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=automatizar_localizadores&amp;hash=999ead7f423c69d80c03b91984a13ae3" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-331" aria-label="Automatizar Tramitação Processual">
            <span class="menu-item-text">Automatizar Tramitação Processual</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=inteligencia_artificial/classificador_conteudo/listar&amp;hash=5c8f866ef5f7df52e02fbae2232ec469" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-731" aria-label="Classificador por conteúdo">
            <span class="menu-item-text">Classificador por conteúdo</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_localizador_historico&amp;hash=2f94a1d472a0b6e182cff73c90b288f7" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-776" aria-label="Histórico de Processos por Localizador">
            <span class="menu-item-text">Histórico de Processos por Localizador</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=localizador_processos_lista&amp;hash=099e7b391e033762a5256325d8fe4087" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-78" aria-label="Lista de Processos por Localizador">
            <span class="menu-item-text">Lista de Processos por Localizador</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=localizador_orgao_listar&amp;hash=356810db0ca9a12e6cb8eecf597d5d4b" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-25" aria-label="Localizadores do Órgão">
            <span class="menu-item-text">Localizadores do Órgão</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=usuario_tipo_monitoramento_localizador_listar&amp;hash=817b0f080d35aa9f3005b9d3981fa50f" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-124" aria-label="Meus Localizadores">
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

        <a href="controlador.php?acao=juizo_magistrado_listar&amp;hash=7bff7db6252d3a6a48a3a580ec1b9f81" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-29" aria-label="Associação de Magistrados">
            <span class="menu-item-text">Associação de Magistrados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=md_tjsc_afastamento_magistrado_auditoria&amp;hash=8eea9f5b62eadcdd8f57610c38d52c86" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-641" aria-label="Auditoria de Afastamentos de Magistrados">
            <span class="menu-item-text">Auditoria de Afastamentos de Magistrados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=md_tjsc_mapa_distribuicao_listar&amp;hash=486026c0a0010518c315fe97726af555" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-626" aria-label="Mapa de Distribuição">
            <span class="menu-item-text">Mapa de Distribuição</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=md_tjsc_afastamento_magistrado_relatorio&amp;hash=31660a3072b7daa6270554d614bbaa4b" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-645" aria-label="Relatório de Afastamentos de Magistrados">
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

        <a href="controlador.php?acao=caixa_mensagem_listar&amp;hash=2e99de4b1b6ad2697b3cf8f4908b402a" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-110" aria-label="Caixa de Mensagens">
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

        <a href="controlador.php?acao=md_mig_ajusta_documento&amp;hash=6c5307cd1f7f9b0ee699e9b24b6c44b3" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-682" aria-label="Reordenar Documentos">
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

        <a href="controlador.php?acao=minuta_area_trabalho&amp;hash=90dc56bd39742a0913fc4860f571db8f" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-343" aria-label="Área de Trabalho">
            <span class="menu-item-text">Área de Trabalho</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=minuta_bloqueio_listar&amp;hash=9d8e1d8a1ea964a628f692b9a32ee6ce" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-401" aria-label="Desbloquear">
            <span class="menu-item-text">Desbloquear</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_diario_eletronico_listar&amp;hash=943c0bde647b941e913ca688c63cea05" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-410" aria-label="Diário Eletrônico">
            <span class="menu-item-text">Diário Eletrônico</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=estatistica_minuta&amp;hash=f82c0827f551443cc14bd1f66aafa29b" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-429" aria-label="Estatística">
            <span class="menu-item-text">Estatística</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=lote_minuta_listar&amp;hash=ecd67c2c9f1578882b68806ba6cba492" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-402" aria-label="Lotes">
            <span class="menu-item-text">Lotes</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=modelo_padrao_listar&amp;hash=ea7c483304d65c5be2449279d15af4fa" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-403" aria-label="Modelos">
            <span class="menu-item-text">Modelos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=pesquisa_documento_processo_originario/pesquisar&amp;hash=71b6498df8bd9840a51ab4e2843eb795" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-755" aria-label="Pesquisa em documentos dos processos originários">
            <span class="menu-item-text">Pesquisa em documentos dos processos originários</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=tag_formulario_listar&amp;hash=410523253c683fc0e8dc126aa795441f" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-794" aria-label="Tags de Formulário">
            <span class="menu-item-text">Tags de Formulário</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=texto_padrao_listar&amp;hash=373e67f0158ab19509f3ac37c71831dc" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-344" aria-label="Textos Padrão">
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

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=processo_movimento_desativar_consulta&amp;hash=76e69f3ac93fc21c0c063236c30a4667" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-83" aria-label="Cancelamento da Movimentação Processual">
            <span class="menu-item-text">Cancelamento da Movimentação Processual</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=citacao_bloco_filtrar&amp;hash=6fd34b0d4dba78e24fc9b54d2faed4e1" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-113" aria-label="Citação em Bloco">
            <span class="menu-item-text">Citação em Bloco</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=intimacao_bloco_filtrar&amp;hash=cedac97ffd9aee0ac58cb8fc31e2fb44" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-128" aria-label="Intimação em Bloco">
            <span class="menu-item-text">Intimação em Bloco</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_movimento_filtrar&amp;hash=26843a91a14812f9f14b4476f6a7f4e1" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-32" aria-label="Movimentação Processual em Bloco">
            <span class="menu-item-text">Movimentação Processual em Bloco</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_movimentar&amp;hash=4459e63b9663abe6303b45bbcd26781f" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-31" aria-label="Movimentação Processual Individual">
            <span class="menu-item-text">Movimentação Processual Individual</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=tema_repetitivo_bloco_filtrar&amp;hash=253cd8aff57c70c82fd6a3a4d9ec5604" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-778" aria-label="Temas Repetitivos em Bloco">
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

        <a href="controlador.php?acao=oficio_requisitorio_requisicoes_cadastrar&amp;hash=6b4bc518c5c548eae206a6b2bf56e7a3" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-571" aria-label="Cadastrar Ofício Requisitório">
            <span class="menu-item-text">Cadastrar Ofício Requisitório</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=oficio_requisitorio_listar&amp;hash=c76ee14a6035a3480b91959e9800fe70" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-572" aria-label="Consultar Ofício Requisitório">
            <span class="menu-item-text">Consultar Ofício Requisitório</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=operacao_policia_federal_listar&amp;hash=130e9ee5ffa5cb5715732cd0a6dbd511" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-470" aria-label="Operações da Polícia">
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

        <a href="controlador.php?acao=convenios_orgao_sistema&amp;tipo_sistema=SPC&amp;hash=7f4a05d9b50d8fb25911e603b808ce2f" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-830" aria-label="SPC">
            <span class="menu-item-text">SPC</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=principal&amp;hash=67fa52a11674673e9cb718aabe4fb3d6" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-33" aria-label="Página Inicial">
            <span class="menu-item-text">Página Inicial</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=eprocsysadm_listar&amp;hash=6a67072191e41580343d447ac49237d6" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-104" aria-label="Paradas do Sistema">
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

        <a href="controlador.php?acao=exame_bloqueio_perito_listar&amp;hash=bef5dad3f6b5b92726f52e9284d52eef" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-655" aria-label="Bloqueios/impedimentos dos Peritos">
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

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=acesso_usuario_documento_listar_chave&amp;hash=0822e58f42d67ef210582c28cc411d36" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-334" aria-label="Gerar Chave de Documentos">
            <span class="menu-item-text">Gerar Chave de Documentos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=acesso_usuario_anexo_listar&amp;hash=5e33a8587f1d55bd28b57d37e26b2d1d" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-375" aria-label="Permissões no Anexo Eletrônico">
            <span class="menu-item-text">Permissões no Anexo Eletrônico</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=acesso_usuario_documento_listar&amp;hash=4451e093d3b93d1ac54dad2d57407310" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-141" aria-label="Permissões no Documento">
            <span class="menu-item-text">Permissões no Documento</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=acesso_usuario_processo_listar&amp;hash=d2f08ec2d54a6b9965424ae45a6eac35" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-102" aria-label="Permissões no Processo">
            <span class="menu-item-text">Permissões no Processo</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="externo_controlador.php?acao=jurisprudencia@jurisprudencia/pesquisar&amp;hash=a119ce45b786aae0bdfb2f64acf307e0" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-828" aria-label="Pesquisa de Jurisprudência" target="_blank">
            <span class="menu-item-text">Pesquisa de Jurisprudência</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_cadastrar&amp;hash=b1dd982f49ff6cd286ad156439ba5157" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-11" aria-label="Petição Inicial">
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

        <a href="controlador.php?acao=paradigma_judicial_listar&amp;hash=200a36e37739a9b9a43023ad58c6fd0c" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-361" aria-label="Consulta/Cadastro Precedentes Qualificados">
            <span class="menu-item-text">Consulta/Cadastro Precedentes Qualificados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_processos_paradigmas&amp;hash=f2e63932a663e86cc31277fafafb39c2" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-363" aria-label="Inclusão de Localizador e Associação de Temas em Bloco">
            <span class="menu-item-text">Inclusão de Localizador e Associação de Temas em Bloco</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatoriosNUGEP/incidentes&amp;hash=c27f20792ca2a6235e06268024aba20d" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-669" aria-label="Relatório de Incidentes (NUGEP)">
            <span class="menu-item-text">Relatório de Incidentes (NUGEP)</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatoriosNUGEP/ResultadoDessobrestamentoAgendamento&amp;hash=23f4dc7ce20cbd00c950ef94ee828737" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-719" aria-label="Relatório do Agendamento de Dessobrestamento">
            <span class="menu-item-text">Relatório do Agendamento de Dessobrestamento</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatoriosNUGEP/ProcessosTema&amp;hash=cf0d4351e7ca51062acc502c7ea983ee" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-718" aria-label="Relatório Lista Processos por Tema">
            <span class="menu-item-text">Relatório Lista Processos por Tema</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatoriosNUGEP/QuantitativoProcessosTema&amp;hash=2dbc68d49842b2377a33237c9546d885" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-716" aria-label="Relatório Quantitativo de Processos por Tema">
            <span class="menu-item-text">Relatório Quantitativo de Processos por Tema</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatoriosNUGEP/SobrestadosPorOrgao&amp;hash=a755f1150919b6ec23cdf5a356eaec9e" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-717" aria-label="Relatório Quantitativo de Sobrestados por Órgao Julgador">
            <span class="menu-item-text">Relatório Quantitativo de Sobrestados por Órgao Julgador</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=repercussao_paradigmas_listar&amp;hash=2c068057db402b599f0bd7d78dbf5d80" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-366" aria-label="Últimas Alterações">
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

        <a href="controlador.php?acao=prevencao_judicial_bloco&amp;hash=ad610da6cdcc4ba116d2637af2207d7a" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-90" aria-label="Prevenção em Bloco">
            <span class="menu-item-text">Prevenção em Bloco</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=prevencao_judicial&amp;hash=70c554b915b44dfdc17ec48a9597cc9a" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-89" aria-label="Prevenção Individual">
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

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=procurador_parte_listar&amp;hash=9d665991939199a2ede33785d6d9c512" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-69" aria-label="Gerenciar Procurador Parte">
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

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=redistribuicao_processo&amp;hash=9f55d216911baa803b4ddbf7fe8214e1" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-86" aria-label="Redistribuir Processo">
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

        <a href="controlador.php?acao=relatorio_certidao&amp;hash=63f94c65a1bbe1040e06653b21c060d5" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-151" aria-label="Certidão">
            <span class="menu-item-text">Certidão</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=certidao_processos_advogado/index&amp;hash=b4241d65e283cc2a075367160f0073f2" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-791" aria-label="Certidão Advogados">
            <span class="menu-item-text">Certidão Advogados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_digitalizados_recebidos&amp;hash=431b631763269f8fce7e131ea7c7fd7c" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-258" aria-label="Comunicações Recebidas do STF">
            <span class="menu-item-text">Comunicações Recebidas do STF</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_digitalizados_recebidos_stj&amp;hash=04275bb37c6c7596407a7733660ac2c8" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-365" aria-label="Comunicações Recebidas do STJ">
            <span class="menu-item-text">Comunicações Recebidas do STJ</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_controle_presc_penal&amp;hash=85d28b7fd630f0643dffa5367f9e2564" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-309" aria-label="Controle de Prescrição Penal">
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

        <a href="controlador.php?acao=RelatorioEnvioComunicacaoDomicilioEletronico/index&amp;hash=dd17cdbd69fa4738158cfb5d5e244d92" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-777" aria-label="Relatório de Comunicações enviadas ao Domicílio Eletrônico">
            <span class="menu-item-text">Relatório de Comunicações enviadas ao Domicílio Eletrônico</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_status_processo_evento_listar&amp;hash=70ad1750e3423959273899673d203480" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-208" aria-label="Eventos Lançáveis por Situação atual do Processo">
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

        <a href="controlador.php?acao=RelatorioEnvioComunicacaoIntimacaoDjen/index&amp;hash=4e999caa60c0ca28d4b6a4fb3aa5dab1" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-809" aria-label="Relatório de Intimações enviadas ao DJEN">
            <span class="menu-item-text">Relatório de Intimações enviadas ao DJEN</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=RelatorioAcessoProcesso/index&amp;hash=62196e9bc312323aee20dfeaf4baf785" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-382" aria-label="Log de Acesso ao Processo">
            <span class="menu-item-text">Log de Acesso ao Processo</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=RelatorioAcessoDocumento/index&amp;hash=72485dd31fbb1d6d2adcd6cc5720bd32" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-383" aria-label="Log de Acesso aos Documentos">
            <span class="menu-item-text">Log de Acesso aos Documentos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_sem_movimentacao_listar&amp;hash=5ebbbcd52c05a0c30c76a1a3b9317188" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-47" aria-label="Processos sem Movimentação nos Últimos N Dias">
            <span class="menu-item-text">Processos sem Movimentação nos Últimos N Dias</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processos_redistribuidos_listar&amp;hash=c33662ff9801f6102e9750c3686d9336" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-412" aria-label="Processos Sigilosos Redistribuídos">
            <span class="menu-item-text">Processos Sigilosos Redistribuídos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_processos_srec_listar&amp;hash=1b8537cb03d6d09ec1e7a2fbc53f7a9a" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-256" aria-label="Processos SREC">
            <span class="menu-item-text">Processos SREC</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=carta_ar/relatorio_carta_ar&amp;hash=5d3cc4cc8c1cf9c02290390a41a15d1e" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-540" aria-label="Relatório de Cartas AR">
            <span class="menu-item-text">Relatório de Cartas AR</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_processo_carta_precatoria_listar&amp;hash=b50aa221882c2bafb7e4a935f211c380" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-202" aria-label="Relatório de Cartas de Ordem Expedidas">
            <span class="menu-item-text">Relatório de Cartas de Ordem Expedidas</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_distribuicao_listar&amp;hash=dca85c1646d334771965c44c93d4f44a" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-123" aria-label="Relatório de Distribuição">
            <span class="menu-item-text">Relatório de Distribuição</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_distribuicao_listar&amp;hash=dca85c1646d334771965c44c93d4f44a" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-667" aria-label="Relatório de Processos Distribuídos">
            <span class="menu-item-text">Relatório de Processos Distribuídos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_processos_relacionados&amp;hash=027bba6b4e22fc4c980d5aa83f691b0f" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-577" aria-label="Relatório de Processos Relacionados">
            <span class="menu-item-text">Relatório de Processos Relacionados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_geral_listar&amp;hash=6722761350dec4e91fa4b5398cf2a0c7" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-48" aria-label="Relatório Geral">
            <span class="menu-item-text">Relatório Geral</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_processos_plantao&amp;hash=5f0fc955c3cb235a4703a5e936cdb28d" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-176" aria-label="Relatório Processos Plantão">
            <span class="menu-item-text">Relatório Processos Plantão</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_requisicoes_pagas_jef_listar&amp;hash=791cf800cdd325466017de29f639afcc" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-427" aria-label="Requisições Pagas para COJEF">
            <span class="menu-item-text">Requisições Pagas para COJEF</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_resumo_movimentacao_listar&amp;hash=791f87cd8deedce0bcab6ef791f0fb28" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-49" aria-label="Resumo da Movimentação por Dia/Período">
            <span class="menu-item-text">Resumo da Movimentação por Dia/Período</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_rol&amp;hash=583e5c421f88947395645e41e3969524" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-152" aria-label="Rol de Culpados">
            <span class="menu-item-text">Rol de Culpados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_situacao_processo_instancia_superior&amp;hash=05b4b9a8240911a0079c3c2a042017f3" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-564" aria-label="Situação de Processos Remetidos ao STF">
            <span class="menu-item-text">Situação de Processos Remetidos ao STF</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=renajud_restricao/listar&amp;hash=664729b9c97a9c4dcd85919a5b8d6f53" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-820" aria-label="Restrições Renajud">
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

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=alterar_cabecalho_peticao_listar&amp;hash=241d0877cd07f0cc92a1300288dd8bb4" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-424" aria-label="Alterar Cabeçalho Petição">
            <span class="menu-item-text">Alterar Cabeçalho Petição</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=documento_sigilo&amp;hash=ebd08594b0fe6ae08574db9404cd9b63" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-115" aria-label="Alterar Nível de Sigilo do Documento">
            <span class="menu-item-text">Alterar Nível de Sigilo do Documento</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=processo_consultar&amp;acao_origem=retificar&amp;hash=d583b7d0411fb260a5b7d61884fe02bf" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-18" aria-label="Retificação de Autuação">
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

        <a href="controlador.php?acao=sessao_julgamento_calendario&amp;hash=0e36367989a4e0c5bb22e2c049f9fbd6" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-480" aria-label="Calendário de Sessões de Julgamento">
            <span class="menu-item-text">Calendário de Sessões de Julgamento</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=sessao_julgamento_listar&amp;hash=69b9f485c514016f84adc317191a72c5" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-479" aria-label="Cronograma de Sessões de Julgamento">
            <span class="menu-item-text">Cronograma de Sessões de Julgamento</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=orgao_sessao_julgamento_cronograma_padrao_listar&amp;hash=03f5c4c787eb7e7ac6e32f440a60a96e" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-478" aria-label="Cronograma Padrão">
            <span class="menu-item-text">Cronograma Padrão</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=sessao_julgamento_pedidos/listar&amp;hash=58e5e256c7e2896ac90f084c2d1bf286" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-773" aria-label="Solicitações de Sustentação ou Preferência">
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

        <a href="controlador.php?acao=competencia_assunto_judicial_listar&amp;hash=8539b84c0ca7b744ac6906b73a6ca982" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-154" aria-label="Assuntos Judiciais">
            <span class="menu-item-text">Assuntos Judiciais</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=competencia_classe_judicial_listar&amp;hash=e4c6b4d8baac52698ab9e673bd36d704" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-155" aria-label="Classes Judiciais">
            <span class="menu-item-text">Classes Judiciais</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=orgao_endereco_listar&amp;hash=e50f9708836efdf3af38c5aae6fb8a6a" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-405" aria-label="Endereço do Órgão">
            <span class="menu-item-text">Endereço do Órgão</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=evento_peticao_tipo_documento_listar&amp;hash=9318fcc499e35971779facf4267620fd" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-211" aria-label="Evento/Petição Tipo Documento">
            <span class="menu-item-text">Evento/Petição Tipo Documento</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=eventos_comunicacao_listar&amp;hash=a7af73b0d68b7a4b0d4931f811f82037" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-257" aria-label="Eventos de Comunicação">
            <span class="menu-item-text">Eventos de Comunicação</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=evento_orgao_judicial_listar&amp;hash=506ecfc4c0ea48fa4aca5d235fc5d5dc" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-216" aria-label="Eventos Judiciais">
            <span class="menu-item-text">Eventos Judiciais</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=lista_eventos_migrados&amp;hash=1c1104166df9b2e23a9d3af3bc718132" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-701" aria-label="Lista de Eventos Migrados">
            <span class="menu-item-text">Lista de Eventos Migrados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=mapeamento_decisao_intimacao&amp;hash=e58526f7907bb2edec96f3c3482989d3" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-316" aria-label="Mapeamento Decisão/Intimação">
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

        <a href="controlador.php?acao=orgao_gabinete_listar&amp;hash=06cbc14a510d690e7035e47760c5d057" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-502" aria-label="Gerenciar a ordem dos gabinetes no colegiado">
            <span class="menu-item-text">Gerenciar a ordem dos gabinetes no colegiado</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=orgao_sessao_julgamento_listar&amp;hash=8749e8e3c750c94e246d4e3312adc00e" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-657" aria-label="Parâmetros da Sessão - Aviso na TV">
            <span class="menu-item-text">Parâmetros da Sessão - Aviso na TV</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=tipo_agrupamento_sessao_julgamento_orgao_listar&amp;hash=240c05c07bbda6ea5a829bf354da16f0" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-505" aria-label="Tipos de agrupamento do órgão">
            <span class="menu-item-text">Tipos de agrupamento do órgão</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=orgao_tipo_automacao_sessao_julgamento_listar&amp;hash=885443008dde59faf96818e9e33b170b" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-680" aria-label="Tipos de Automação do Órgão">
            <span class="menu-item-text">Tipos de Automação do Órgão</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=tipo_peticao_judicial_listar&amp;hash=7893d9fd831b8887d4b1b7065d799535" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-450" aria-label="Tipo Petição Judicial">
            <span class="menu-item-text">Tipo Petição Judicial</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=tipo_documento_listar&amp;hash=9e2ce4cf24a3729ac0c729a5b4dab68a" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-411" aria-label="Tipos de Documentos">
            <span class="menu-item-text">Tipos de Documentos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=orgao_configura_transferencia_minuta&amp;hash=d44d670f3e7a248d8054203fdaa1c6da" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-598" aria-label="Transferência de minutas na redistribuição de processos">
            <span class="menu-item-text">Transferência de minutas na redistribuição de processos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=md_tjsc_gc_valor_conducao_listar&amp;hash=ed5280a723d9947b757173aa154625eb" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-615" aria-label="Valor Condução">
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

        <a href="controlador.php?acao=tutorial_acessibilidade&amp;hash=f5608557f8c14df64cf7dcd8c966b9b6" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-770" aria-label="Acessibilidade">
            <span class="menu-item-text">Acessibilidade</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=tutorial_atalhos_teclado&amp;hash=dd4ee2faa3635a5e4b8c9c4364f093ef" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-458" aria-label="Atalhos de teclado">
            <span class="menu-item-text">Atalhos de teclado</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="?acao=tutorial_automacao_localizadores&amp;hash=dd0e1b81c54a6159272f91f1b89cbb43" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-562" aria-label="Automação de Localizadores">
            <span class="menu-item-text">Automação de Localizadores</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=tutorial_cartas_ar&amp;hash=aef195598cdba5df3792c4a6c7f45f52" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-541" aria-label="Manual de Cartas AR - VPost">
            <span class="menu-item-text">Manual de Cartas AR - VPost</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=tutorial_mandados_prisao&amp;hash=b18d667317a5d2449181e43dcbdda614" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-510" aria-label="Manual de Mandados de Prisão - BNMP">
            <span class="menu-item-text">Manual de Mandados de Prisão - BNMP</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=tutoriais_eproc_usuarios_externos&amp;hash=ee1ba9d0d59974cda64526da30ee02b5" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-663" aria-label="Tutoriais eproc usuários externos">
            <span class="menu-item-text">Tutoriais eproc usuários externos</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=tutoriais_eproc_usuarios_internos&amp;hash=4e106f0eb93702471c7c7e604be8ea6c" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-664" aria-label="Tutoriais eproc usuários internos">
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

        <a href="controlador.php?acao=pessoa_alterar&amp;hash=02bd7a277de679c44bec9dfc64a67b54" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-114" aria-label="Alteração de Dados Pessoais">
            <span class="menu-item-text">Alteração de Dados Pessoais</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=senha_alterar&amp;hash=e29675d82a6f8547c997a1c09fc7d65b" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-54" aria-label="Alterar Senha Pessoal">
            <span class="menu-item-text">Alterar Senha Pessoal</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=pessoa_juridica_cadastrar&amp;hash=a54d45ebe000d44a43d0394d70b21a18" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-181" aria-label="Cadastro de Sociedade de Advogados">
            <span class="menu-item-text">Cadastro de Sociedade de Advogados</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=usuario_listar&amp;hash=f36e0fc1130b119ee62154b308afc34a" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-55" aria-label="Cadastro de Usuários">
            <span class="menu-item-text">Cadastro de Usuários</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=usuario_listar_todos&amp;hash=1942223c6ae2fff02dd0f7ebaecb9d64" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-72" aria-label="Lista de Usuários">
            <span class="menu-item-text">Lista de Usuários</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=usuario_relatorio_acesso&amp;hash=b93fc782052aa014078b01bb81d02d71" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-159" aria-label="Relatório de acessos ao sistema">
            <span class="menu-item-text">Relatório de acessos ao sistema</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>

    <li class="">

        <a href="controlador.php?acao=relatorio_acessos_painel&amp;hash=0a90ddba8ae49a5f2e8bafffe6d1ecde" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-164" aria-label="Relatório de Acessos aos Painéis">
            <span class="menu-item-text">Relatório de Acessos aos Painéis</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
            </ul>
            </li>

    <li class="">

        <a href="controlador.php?acao=representante_legal_pj_listar&amp;hash=566a36c2a4b6c5fb0d6f7dcbf4086358" class="collapsed" tabindex="0" data-toggle="" data-target="#menu-ul-665" aria-label="Validar Representante Legal de PJ">
            <span class="menu-item-text">Validar Representante Legal de PJ</span>
            <span class="sub-arrow material-icons">arrow_drop_down</span>
        </a>

            </li>
                                            </ul>
                    <div id="empty-space" style="height: 200px"></div>
                </div>
                <div id="sidebar-wrapper-background"></div>
            </div>
                            <div id="page-content-wrapper" class="no-padding no-back-top-button bootstrap-styles">
                <div id="divInfraAreaTela" class="infraAreaTela mt-2">
                    <div id="divInfraAreaTelaD" class="container-fluid">
                                                <div id="top">
		<!-- This div will handle all toolbars -->
<div id="cke_7379729_7" class="cke cke_14 cke_reset_all cke_chrome cke_editor_7379729_7 cke_shared cke_detached cke_ltr cke_browser_webkit" dir="ltr" title="" lang="pt-br" role="presentation" style="user-select: none;"><div class="cke_inner"><div id="cke_14_top" class="cke_top" role="presentation"><span id="cke_328" class="cke_voice_label">Barra de Ferramentas do Editor</span><span id="cke_14_toolbox" class="cke_toolbox" role="group" aria-labelledby="cke_328" onmousedown="return false;"><span class="cke_toolbox_main"><span id="cke_333" class="cke_toolbar" aria-labelledby="cke_333_label" role="toolbar"><span id="cke_333_label" class="cke_voice_label">Salvar</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_334" class="cke_button cke_button__salvarminuta cke_button_off" href="javascript:void('Salvar Minuta (Alt + B)')" title="Salvar Minuta (Alt + B) (Ctrl+S)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_334_label" aria-describedby="cke_334_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(83,event);" onfocus="return CKEDITOR.tools.callFunction(84,event);" onclick="CKEDITOR.tools.callFunction(85,this);return false;"><span class="cke_button_icon cke_button__salvar_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/salvarminuta.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_334_label" class="cke_button_label cke_button__salvarminuta_label" aria-hidden="false">Salvar Minuta (Alt + B)</span><span id="cke_334_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+S</span></a><a id="cke_335" class="cke_button cke_button__salvarminutaesair cke_button_off" href="javascript:void('Salvar Minuta e Sair')" title="Salvar Minuta e Sair (Alt+Z)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_335_label" aria-describedby="cke_335_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(86,event);" onfocus="return CKEDITOR.tools.callFunction(87,event);" onclick="CKEDITOR.tools.callFunction(88,this);return false;"><span class="cke_button_icon cke_button__salvaresair_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/salvarminutaesair.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_335_label" class="cke_button_label cke_button__salvarminutaesair_label" aria-hidden="false">Salvar Minuta e Sair</span><span id="cke_335_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+Z</span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_336" class="cke_toolbar" aria-labelledby="cke_336_label" role="toolbar"><span id="cke_336_label" class="cke_voice_label">SalvarStatusMinuta</span><span class="cke_toolbar_start"></span><span id="cke_329" class="cke_combo cke_combo__statusminutadesejado StatusMinutaDesejado cke_combo_off" role="presentation"><span id="cke_329_label" class="cke_combo_label">Manter a minuta no status atual, Ao salvar e sair...</span><a class="cke_combo_button" title="Ao salvar e sair..." tabindex="-1" href="javascript:void('Ao salvar e sair...')" hidefocus="true" role="button" aria-labelledby="cke_329_label" aria-haspopup="listbox" onkeydown="return CKEDITOR.tools.callFunction(90,event,this);" onfocus="return CKEDITOR.tools.callFunction(91,event);" onclick="CKEDITOR.tools.callFunction(89,this);return false;" aria-expanded="false"><span id="cke_329_text" class="cke_combo_text">Manter a minuta no status atual</span><span class="cke_combo_open"><span class="cke_combo_arrow"></span></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_337" class="cke_toolbar" aria-labelledby="cke_337_label" role="toolbar"><span id="cke_337_label" class="cke_voice_label">Copiar e Colar</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_338" class="cke_button cke_button__cut cke_button_disabled " href="javascript:void('Recortar')" title="Recortar (Ctrl+X)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_338_label" aria-describedby="cke_338_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(92,event);" onfocus="return CKEDITOR.tools.callFunction(93,event);" onclick="CKEDITOR.tools.callFunction(94,this);return false;"><span class="cke_button_icon cke_button__cut_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -312px;background-size:auto;">&nbsp;</span><span id="cke_338_label" class="cke_button_label cke_button__cut_label" aria-hidden="false">Recortar</span><span id="cke_338_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+X</span></a><a id="cke_339" class="cke_button cke_button__copy cke_button_disabled " href="javascript:void('Copiar')" title="Copiar (Ctrl+C)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_339_label" aria-describedby="cke_339_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(95,event);" onfocus="return CKEDITOR.tools.callFunction(96,event);" onclick="CKEDITOR.tools.callFunction(97,this);return false;"><span class="cke_button_icon cke_button__copy_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -264px;background-size:auto;">&nbsp;</span><span id="cke_339_label" class="cke_button_label cke_button__copy_label" aria-hidden="false">Copiar</span><span id="cke_339_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+C</span></a><a id="cke_340" class="cke_button cke_button__paste cke_button_off" href="javascript:void('Colar')" title="Colar (Ctrl+V)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_340_label" aria-describedby="cke_340_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(98,event);" onfocus="return CKEDITOR.tools.callFunction(99,event);" onclick="CKEDITOR.tools.callFunction(100,this);return false;"><span class="cke_button_icon cke_button__paste_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -360px;background-size:auto;">&nbsp;</span><span id="cke_340_label" class="cke_button_label cke_button__paste_label" aria-hidden="false">Colar</span><span id="cke_340_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+V</span></a><a id="cke_341" class="cke_button cke_button__pastetext cke_button_off" href="javascript:void('Colar como Texto sem Formatação')" title="Colar como Texto sem Formatação (Ctrl+Shift+V)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_341_label" aria-describedby="cke_341_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(101,event);" onfocus="return CKEDITOR.tools.callFunction(102,event);" onclick="CKEDITOR.tools.callFunction(103,this);return false;"><span class="cke_button_icon cke_button__pastetext_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1488px;background-size:auto;">&nbsp;</span><span id="cke_341_label" class="cke_button_label cke_button__pastetext_label" aria-hidden="false">Colar como Texto sem Formatação</span><span id="cke_341_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+Shift+V</span></a><a id="cke_342" class="cke_button cke_button__pastefromword cke_button_off" href="javascript:void('Colar do Word')" title="Colar do Word" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_342_label" aria-describedby="cke_342_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(104,event);" onfocus="return CKEDITOR.tools.callFunction(105,event);" onclick="CKEDITOR.tools.callFunction(106,this);return false;"><span class="cke_button_icon cke_button__pastefromword_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1536px;background-size:auto;">&nbsp;</span><span id="cke_342_label" class="cke_button_label cke_button__pastefromword_label" aria-hidden="false">Colar do Word</span><span id="cke_342_description" class="cke_button_label" aria-hidden="false"></span></a></span><span id="cke_330" class="cke_combo cke_combo__estiloaocolar cke_format cke_combo_off" role="presentation"><span id="cke_330_label" class="cke_combo_label">escolha o estilo a ser aplicado ao colar texto, Estilo ao colar...</span><a class="cke_combo_button" title="Estilo ao colar..." tabindex="-1" href="javascript:void('Estilo ao colar...')" hidefocus="true" role="button" aria-labelledby="cke_330_label" aria-haspopup="listbox" onkeydown="return CKEDITOR.tools.callFunction(108,event,this);" onfocus="return CKEDITOR.tools.callFunction(109,event);" onclick="CKEDITOR.tools.callFunction(107,this);return false;" aria-expanded="false"><span id="cke_330_text" class="cke_combo_text">escolha o estilo a ser aplicado ao colar texto</span><span class="cke_combo_open"><span class="cke_combo_arrow"></span></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_343" class="cke_toolbar" aria-labelledby="cke_343_label" role="toolbar"><span id="cke_343_label" class="cke_voice_label">Desfazer e Refazer</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_344" class="cke_button cke_button__undo cke_button_disabled " href="javascript:void('Desfazer')" title="Desfazer (Ctrl+Z)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_344_label" aria-describedby="cke_344_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(110,event);" onfocus="return CKEDITOR.tools.callFunction(111,event);" onclick="CKEDITOR.tools.callFunction(112,this);return false;"><span class="cke_button_icon cke_button__undo_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1944px;background-size:auto;">&nbsp;</span><span id="cke_344_label" class="cke_button_label cke_button__undo_label" aria-hidden="false">Desfazer</span><span id="cke_344_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+Z</span></a><a id="cke_345" class="cke_button cke_button__redo cke_button_disabled " href="javascript:void('Refazer')" title="Refazer (Ctrl+Y)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_345_label" aria-describedby="cke_345_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(113,event);" onfocus="return CKEDITOR.tools.callFunction(114,event);" onclick="CKEDITOR.tools.callFunction(115,this);return false;"><span class="cke_button_icon cke_button__redo_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1896px;background-size:auto;">&nbsp;</span><span id="cke_345_label" class="cke_button_label cke_button__redo_label" aria-hidden="false">Refazer</span><span id="cke_345_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+Y</span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_346" class="cke_toolbar" aria-labelledby="cke_346_label" role="toolbar"><span id="cke_346_label" class="cke_voice_label">Encontrar e Substituir</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_347" class="cke_button cke_button__find cke_button_off" href="javascript:void('Localizar')" title="Localizar" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_347_label" aria-describedby="cke_347_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(116,event);" onfocus="return CKEDITOR.tools.callFunction(117,event);" onclick="CKEDITOR.tools.callFunction(118,this);return false;"><span class="cke_button_icon cke_button__find_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1_plugins_externos/find/icons/find.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_347_label" class="cke_button_label cke_button__find_label" aria-hidden="false">Localizar</span><span id="cke_347_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_348" class="cke_button cke_button__replace cke_button_off" href="javascript:void('Procurar/Substituir')" title="Procurar/Substituir" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_348_label" aria-describedby="cke_348_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(119,event);" onfocus="return CKEDITOR.tools.callFunction(120,event);" onclick="CKEDITOR.tools.callFunction(121,this);return false;"><span class="cke_button_icon cke_button__replace_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1_plugins_externos/find/icons/replace.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_348_label" class="cke_button_label cke_button__replace_label" aria-hidden="false">Procurar/Substituir</span><span id="cke_348_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_349" class="cke_button cke_button__replacevariables cke_button_off" href="javascript:void('Procurar/Substituir Variáveis')" title="Procurar/Substituir Variáveis" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_349_label" aria-describedby="cke_349_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(122,event);" onfocus="return CKEDITOR.tools.callFunction(123,event);" onclick="CKEDITOR.tools.callFunction(124,this);return false;"><span class="cke_button_icon cke_button__replacevariables_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/replace-variable.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_349_label" class="cke_button_label cke_button__replacevariables_label" aria-hidden="false">Procurar/Substituir Variáveis</span><span id="cke_349_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_350" class="cke_button cke_button__selectall cke_button_off" href="javascript:void('Selecionar Tudo')" title="Selecionar Tudo" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_350_label" aria-describedby="cke_350_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(125,event);" onfocus="return CKEDITOR.tools.callFunction(126,event);" onclick="CKEDITOR.tools.callFunction(127,this);return false;"><span class="cke_button_icon cke_button__selectall_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1680px;background-size:auto;">&nbsp;</span><span id="cke_350_label" class="cke_button_label cke_button__selectall_label" aria-hidden="false">Selecionar Tudo</span><span id="cke_350_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_351" class="cke_button cke_button__spellcheckernativo cke_button_off" href="javascript:void('Ativa o corretor ortográfico nativo do navegador')" title="Ativa o corretor ortográfico nativo do navegador" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_351_label" aria-describedby="cke_351_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(128,event);" onfocus="return CKEDITOR.tools.callFunction(129,event);" onclick="CKEDITOR.tools.callFunction(130,this);return false;"><span class="cke_button_icon cke_button__spellcheckernativo_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/spellcheckernativo.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_351_label" class="cke_button_label cke_button__spellcheckernativo_label" aria-hidden="false">Ativa o corretor ortográfico nativo do navegador</span><span id="cke_351_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_352" class="cke_toolbar" aria-labelledby="cke_352_label" role="toolbar"><span id="cke_352_label" class="cke_voice_label">Formatação de Caracteres</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_353" class="cke_button cke_button__negrito cke_button_off" href="javascript:void('Negrito (Alt+N)')" title="Negrito (Alt+N) (Ctrl+B)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_353_label" aria-describedby="cke_353_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(131,event);" onfocus="return CKEDITOR.tools.callFunction(132,event);" onclick="CKEDITOR.tools.callFunction(133,this);return false;"><span class="cke_button_icon cke_button__negrito_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/negrito.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_353_label" class="cke_button_label cke_button__negrito_label" aria-hidden="false">Negrito (Alt+N)</span><span id="cke_353_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+B</span></a><a id="cke_354" class="cke_button cke_button__italico cke_button_off" href="javascript:void('Itálico (Alt+I)')" title="Itálico (Alt+I) (Ctrl+I)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_354_label" aria-describedby="cke_354_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(134,event);" onfocus="return CKEDITOR.tools.callFunction(135,event);" onclick="CKEDITOR.tools.callFunction(136,this);return false;"><span class="cke_button_icon cke_button__italico_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/italico.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_354_label" class="cke_button_label cke_button__italico_label" aria-hidden="false">Itálico (Alt+I)</span><span id="cke_354_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+I</span></a><a id="cke_355" class="cke_button cke_button__sublinhado cke_button_off" href="javascript:void('Sublinhado (Alt+S)')" title="Sublinhado (Alt+S) (Ctrl+U)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_355_label" aria-describedby="cke_355_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(137,event);" onfocus="return CKEDITOR.tools.callFunction(138,event);" onclick="CKEDITOR.tools.callFunction(139,this);return false;"><span class="cke_button_icon cke_button__sublinhado_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/sublinhado.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_355_label" class="cke_button_label cke_button__sublinhado_label" aria-hidden="false">Sublinhado (Alt+S)</span><span id="cke_355_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+U</span></a><a id="cke_356" class="cke_button cke_button__riscado cke_button_off" href="javascript:void('Riscado (Alt+K)')" title="Riscado (Alt+K)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_356_label" aria-describedby="cke_356_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(140,event);" onfocus="return CKEDITOR.tools.callFunction(141,event);" onclick="CKEDITOR.tools.callFunction(142,this);return false;"><span class="cke_button_icon cke_button__riscado_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/riscado.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_356_label" class="cke_button_label cke_button__riscado_label" aria-hidden="false">Riscado (Alt+K)</span><span id="cke_356_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_357" class="cke_button cke_button__subscript cke_button_off" href="javascript:void('Subscrito')" title="Subscrito" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_357_label" aria-describedby="cke_357_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(143,event);" onfocus="return CKEDITOR.tools.callFunction(144,event);" onclick="CKEDITOR.tools.callFunction(145,this);return false;"><span class="cke_button_icon cke_button__subscript_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -96px;background-size:auto;">&nbsp;</span><span id="cke_357_label" class="cke_button_label cke_button__subscript_label" aria-hidden="false">Subscrito</span><span id="cke_357_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_358" class="cke_button cke_button__superscript cke_button_off" href="javascript:void('Sobrescrito')" title="Sobrescrito" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_358_label" aria-describedby="cke_358_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(146,event);" onfocus="return CKEDITOR.tools.callFunction(147,event);" onclick="CKEDITOR.tools.callFunction(148,this);return false;"><span class="cke_button_icon cke_button__superscript_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -120px;background-size:auto;">&nbsp;</span><span id="cke_358_label" class="cke_button_label cke_button__superscript_label" aria-hidden="false">Sobrescrito</span><span id="cke_358_description" class="cke_button_label" aria-hidden="false"></span></a><span class="cke_toolbar_separator" role="separator"></span><a id="cke_359" class="cke_button cke_button__removeformat cke_button_off" href="javascript:void('Remover Formatação')" title="Remover Formatação" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_359_label" aria-describedby="cke_359_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(149,event);" onfocus="return CKEDITOR.tools.callFunction(150,event);" onclick="CKEDITOR.tools.callFunction(151,this);return false;"><span class="cke_button_icon cke_button__removeformat_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1632px;background-size:auto;">&nbsp;</span><span id="cke_359_label" class="cke_button_label cke_button__removeformat_label" aria-hidden="false">Remover Formatação</span><span id="cke_359_description" class="cke_button_label" aria-hidden="false"></span></a></span><span id="cke_331" class="cke_combo cke_combo__styles cke_combo_off" role="presentation"><span id="cke_331_label" class="cke_combo_label">paragrafoPadrao (Alt + 1), Estilo</span><a class="cke_combo_button" title="Estilos de Formatação" tabindex="-1" href="javascript:void('Estilos de Formatação')" hidefocus="true" role="button" aria-labelledby="cke_331_label" aria-haspopup="listbox" onkeydown="return CKEDITOR.tools.callFunction(153,event,this);" onfocus="return CKEDITOR.tools.callFunction(154,event);" onclick="CKEDITOR.tools.callFunction(152,this);return false;" aria-expanded="false"><span id="cke_331_text" class="cke_combo_text">paragrafoPadrao (Alt + 1)</span><span class="cke_combo_open"><span class="cke_combo_arrow"></span></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_360" class="cke_toolbar" aria-labelledby="cke_360_label" role="toolbar"><span id="cke_360_label" class="cke_voice_label">Transformação de Caracteres</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_361" class="cke_button cke_button__transformarmaiusculas cke_button_off" href="javascript:void('MAIÚSCULAS')" title="MAIÚSCULAS (Alt+U)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_361_label" aria-describedby="cke_361_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(155,event);" onfocus="return CKEDITOR.tools.callFunction(156,event);" onclick="CKEDITOR.tools.callFunction(157,this);return false;"><span class="cke_button_icon cke_button__maiusculas_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/maiusculas.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_361_label" class="cke_button_label cke_button__transformarmaiusculas_label" aria-hidden="false">MAIÚSCULAS</span><span id="cke_361_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+U</span></a><a id="cke_362" class="cke_button cke_button__transformarminusculas cke_button_off" href="javascript:void('minúsculas')" title="minúsculas (Alt+L)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_362_label" aria-describedby="cke_362_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(158,event);" onfocus="return CKEDITOR.tools.callFunction(159,event);" onclick="CKEDITOR.tools.callFunction(160,this);return false;"><span class="cke_button_icon cke_button__minusculas_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/minusculas.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_362_label" class="cke_button_label cke_button__transformarminusculas_label" aria-hidden="false">minúsculas</span><span id="cke_362_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+L</span></a><a id="cke_363" class="cke_button cke_button__transformarcapitalizado cke_button_off" href="javascript:void('Capitalizar')" title="Capitalizar (Alt+C)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_363_label" aria-describedby="cke_363_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(161,event);" onfocus="return CKEDITOR.tools.callFunction(162,event);" onclick="CKEDITOR.tools.callFunction(163,this);return false;"><span class="cke_button_icon cke_button__capitalizado_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/capitalize.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_363_label" class="cke_button_label cke_button__transformarcapitalizado_label" aria-hidden="false">Capitalizar</span><span id="cke_363_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+C</span></a><a id="cke_364" class="cke_button cke_button__agrupartexto cke_button_off" href="javascript:void('AGRUPAR TEXTO')" title="AGRUPAR TEXTO" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_364_label" aria-describedby="cke_364_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(164,event);" onfocus="return CKEDITOR.tools.callFunction(165,event);" onclick="CKEDITOR.tools.callFunction(166,this);return false;"><span class="cke_button_icon cke_button__agrupartexto_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/agrupartexto.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_364_label" class="cke_button_label cke_button__agrupartexto_label" aria-hidden="false">AGRUPAR TEXTO</span><span id="cke_364_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_365" class="cke_toolbar" aria-labelledby="cke_365_label" role="toolbar"><span id="cke_365_label" class="cke_voice_label">Listas</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_366" class="cke_button cke_button__numberedlist cke_button_off" href="javascript:void('Lista numerada')" title="Lista numerada" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_366_label" aria-describedby="cke_366_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(167,event);" onfocus="return CKEDITOR.tools.callFunction(168,event);" onclick="CKEDITOR.tools.callFunction(169,this);return false;"><span class="cke_button_icon cke_button__numberedlist_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1320px;background-size:auto;">&nbsp;</span><span id="cke_366_label" class="cke_button_label cke_button__numberedlist_label" aria-hidden="false">Lista numerada</span><span id="cke_366_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_367" class="cke_button cke_button__bulletedlist cke_button_off" href="javascript:void('Lista sem números')" title="Lista sem números" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_367_label" aria-describedby="cke_367_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(170,event);" onfocus="return CKEDITOR.tools.callFunction(171,event);" onclick="CKEDITOR.tools.callFunction(172,this);return false;"><span class="cke_button_icon cke_button__bulletedlist_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1272px;background-size:auto;">&nbsp;</span><span id="cke_367_label" class="cke_button_label cke_button__bulletedlist_label" aria-hidden="false">Lista sem números</span><span id="cke_367_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_368" class="cke_toolbar" aria-labelledby="cke_368_label" role="toolbar"><span id="cke_368_label" class="cke_voice_label">Suggestion</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_369" class="cke_button cke_button__addsuggestion cke_button_off" href="javascript:void('Substituições')" title="Substituições" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_369_label" aria-describedby="cke_369_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(173,event);" onfocus="return CKEDITOR.tools.callFunction(174,event);" onclick="CKEDITOR.tools.callFunction(175,this);return false;"><span class="cke_button_icon cke_button__suggestions_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/suggestions.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_369_label" class="cke_button_label cke_button__addsuggestion_label" aria-hidden="false">Substituições</span><span id="cke_369_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_370" class="cke_toolbar" aria-labelledby="cke_370_label" role="toolbar"><span id="cke_370_label" class="cke_voice_label">Inserção de Texto</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_371" class="cke_button cke_button__inseretextopadrao cke_button_off" href="javascript:void('Inserir Texto Padrão ou TAG')" title="Inserir Texto Padrão ou TAG (Alt+T)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_371_label" aria-describedby="cke_371_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(176,event);" onfocus="return CKEDITOR.tools.callFunction(177,event);" onclick="CKEDITOR.tools.callFunction(178,this);return false;"><span class="cke_button_icon cke_button__inserirtextopadrao_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/inserirtextopadrao.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_371_label" class="cke_button_label cke_button__inseretextopadrao_label" aria-hidden="false">Inserir Texto Padrão ou TAG</span><span id="cke_371_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+T</span></a><a id="cke_372" class="cke_button cke_button__inserirtextobase cke_button_off" href="javascript:void('Inserir Documento Base')" title="Inserir Documento Base (Alt+A)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_372_label" aria-describedby="cke_372_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(179,event);" onfocus="return CKEDITOR.tools.callFunction(180,event);" onclick="CKEDITOR.tools.callFunction(181,this);return false;"><span class="cke_button_icon cke_button__inserirtextobase_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/inserirtextobase.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_372_label" class="cke_button_label cke_button__inserirtextobase_label" aria-hidden="false">Inserir Documento Base</span><span id="cke_372_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+A</span></a><a id="cke_373" class="cke_button cke_button__inserirmodelo cke_button_off" href="javascript:void('Inserir Modelo')" title="Inserir Modelo (Alt+M)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_373_label" aria-describedby="cke_373_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(182,event);" onfocus="return CKEDITOR.tools.callFunction(183,event);" onclick="CKEDITOR.tools.callFunction(184,this);return false;"><span class="cke_button_icon cke_button__inserirmodelo_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/inserirmodelo.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_373_label" class="cke_button_label cke_button__inserirmodelo_label" aria-hidden="false">Inserir Modelo</span><span id="cke_373_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+M</span></a><a id="cke_374" class="cke_button cke_button__visualizartextopadrao cke_button_off" href="javascript:void('Visualizar Texto Padrão')" title="Visualizar Texto Padrão (Alt+V)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_374_label" aria-describedby="cke_374_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(185,event);" onfocus="return CKEDITOR.tools.callFunction(186,event);" onclick="CKEDITOR.tools.callFunction(187,this);return false;"><span class="cke_button_icon cke_button__visualizartextopadrao_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/visualizartextopadrao.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_374_label" class="cke_button_label cke_button__visualizartextopadrao_label" aria-hidden="false">Visualizar Texto Padrão</span><span id="cke_374_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+V</span></a><a id="cke_375" class="cke_button cke_button__notafimtexto cke_button_off" href="javascript:void('Inserir/Editar nota de fim de texto')" title="Inserir/Editar nota de fim de texto" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_375_label" aria-describedby="cke_375_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(188,event);" onfocus="return CKEDITOR.tools.callFunction(189,event);" onclick="CKEDITOR.tools.callFunction(190,this);return false;"><span class="cke_button_icon cke_button__notasdefimdetexto_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/notasdefimdetexto.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_375_label" class="cke_button_label cke_button__notafimtexto_label" aria-hidden="false">Inserir/Editar nota de fim de texto</span><span id="cke_375_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_376" class="cke_button cke_button__inserirlembrete cke_button_off" href="javascript:void('Inserir lembrete')" title="Inserir lembrete" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_376_label" aria-describedby="cke_376_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(191,event);" onfocus="return CKEDITOR.tools.callFunction(192,event);" onclick="CKEDITOR.tools.callFunction(193,this);return false;"><span class="cke_button_icon cke_button__minuta_lembrete_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/minuta_lembrete.gif?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_376_label" class="cke_button_label cke_button__inserirlembrete_label" aria-hidden="false">Inserir lembrete</span><span id="cke_376_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_377" class="cke_button cke_button__tabela_cumprimento_ceab cke_button_off" href="javascript:void('Inserir tabela para cumprimento pela CEAB')" title="Inserir tabela para cumprimento pela CEAB" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_377_label" aria-describedby="cke_377_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(194,event);" onfocus="return CKEDITOR.tools.callFunction(195,event);" onclick="CKEDITOR.tools.callFunction(196,this);return false;"><span class="cke_button_icon cke_button__tabelacumprimentoceab_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/tabela_cumprimento_ceab.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_377_label" class="cke_button_label cke_button__tabela_cumprimento_ceab_label" aria-hidden="false">Inserir tabela para cumprimento pela CEAB</span><span id="cke_377_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_378" class="cke_toolbar" aria-labelledby="cke_378_label" role="toolbar"><span id="cke_378_label" class="cke_voice_label">Recursos</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_379" class="cke_button cke_button__extenso cke_button_off" href="javascript:void('Escrever por extenso')" title="Escrever por extenso (Alt+O)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_379_label" aria-describedby="cke_379_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(197,event);" onfocus="return CKEDITOR.tools.callFunction(198,event);" onclick="CKEDITOR.tools.callFunction(199,this);return false;"><span class="cke_button_icon cke_button__extenso_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/extenso.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_379_label" class="cke_button_label cke_button__extenso_label" aria-hidden="false">Escrever por extenso</span><span id="cke_379_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+O</span></a><a id="cke_380" class="cke_button cke_button__renumeranotasdefimdetexto cke_button_off" href="javascript:void('Renumerar notas de fim de texto')" title="Renumerar notas de fim de texto" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_380_label" aria-describedby="cke_380_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(200,event);" onfocus="return CKEDITOR.tools.callFunction(201,event);" onclick="CKEDITOR.tools.callFunction(202,this);return false;"><span class="cke_button_icon cke_button__renumeranotasdefimdetexto_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/renumeranotasdefimdetexto.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_380_label" class="cke_button_label cke_button__renumeranotasdefimdetexto_label" aria-hidden="false">Renumerar notas de fim de texto</span><span id="cke_380_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_381" class="cke_button cke_button__alterardados cke_button_off" href="javascript:void('Alterar dados')" title="Alterar dados" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_381_label" aria-describedby="cke_381_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(203,event);" onfocus="return CKEDITOR.tools.callFunction(204,event);" onclick="CKEDITOR.tools.callFunction(205,this);return false;"><span class="cke_button_icon cke_button__minuta_alterar_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/minuta_alterar.gif?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_381_label" class="cke_button_label cke_button__alterardados_label" aria-hidden="false">Alterar dados</span><span id="cke_381_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_382" class="cke_button cke_button__alterarlocalizador cke_button_off" href="javascript:void('Alterar localizador')" title="Alterar localizador" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_382_label" aria-describedby="cke_382_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(206,event);" onfocus="return CKEDITOR.tools.callFunction(207,event);" onclick="CKEDITOR.tools.callFunction(208,this);return false;"><span class="cke_button_icon cke_button__alterarlocalizador_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/alterar_localizador.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_382_label" class="cke_button_label cke_button__alterarlocalizador_label" aria-hidden="false">Alterar localizador</span><span id="cke_382_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_383" class="cke_button cke_button__marcacoes cke_button_off" href="javascript:void('Exibir Marcações')" title="Exibir Marcações" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_383_label" aria-describedby="cke_383_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(209,event);" onfocus="return CKEDITOR.tools.callFunction(210,event);" onclick="CKEDITOR.tools.callFunction(211,this);return false;"><span class="cke_button_icon cke_button__highlighter_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/highlighter.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_383_label" class="cke_button_label cke_button__marcacoes_label" aria-hidden="false">Exibir Marcações</span><span id="cke_383_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_384" class="cke_button cke_button__registroacoes cke_button_off" href="javascript:void('Registro de ações')" title="Registro de ações" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_384_label" aria-describedby="cke_384_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(212,event);" onfocus="return CKEDITOR.tools.callFunction(213,event);" onclick="CKEDITOR.tools.callFunction(214,this);return false;"><span class="cke_button_icon cke_button__minuta_historico_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/minuta_historico.gif?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_384_label" class="cke_button_label cke_button__registroacoes_label" aria-hidden="false">Registro de ações</span><span id="cke_384_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_385" class="cke_button cke_button__imprimir cke_button_off" href="javascript:void('Imprimir')" title="Imprimir" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_385_label" aria-describedby="cke_385_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(215,event);" onfocus="return CKEDITOR.tools.callFunction(216,event);" onclick="CKEDITOR.tools.callFunction(217,this);return false;"><span class="cke_button_icon cke_button__minuta_imprimir_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/minuta_imprimir.gif?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_385_label" class="cke_button_label cke_button__imprimir_label" aria-hidden="false">Imprimir</span><span id="cke_385_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_386" class="cke_button cke_button__atualizarcabecalho cke_button_off" href="javascript:void('Atualizar Cabeçalho')" title="Atualizar Cabeçalho" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_386_label" aria-describedby="cke_386_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(218,event);" onfocus="return CKEDITOR.tools.callFunction(219,event);" onclick="CKEDITOR.tools.callFunction(220,this);return false;"><span class="cke_button_icon cke_button__minuta_atualizar_cabecalho_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/minuta_atualizar_cabecalho.gif?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_386_label" class="cke_button_label cke_button__atualizarcabecalho_label" aria-hidden="false">Atualizar Cabeçalho</span><span id="cke_386_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_387" class="cke_button cke_button__disponibilizar cke_button_off" href="javascript:void('Disponibilizar')" title="Disponibilizar" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_387_label" aria-describedby="cke_387_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(221,event);" onfocus="return CKEDITOR.tools.callFunction(222,event);" onclick="CKEDITOR.tools.callFunction(223,this);return false;"><span class="cke_button_icon cke_button__minuta_disponibilizar_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/minuta_disponibilizar.gif?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_387_label" class="cke_button_label cke_button__disponibilizar_label" aria-hidden="false">Disponibilizar</span><span id="cke_387_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_388" class="cke_button cke_button__assinar cke_button_off" href="javascript:void('Assinar')" title="Assinar (Alt+G)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_388_label" aria-describedby="cke_388_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(224,event);" onfocus="return CKEDITOR.tools.callFunction(225,event);" onclick="CKEDITOR.tools.callFunction(226,this);return false;"><span class="cke_button_icon cke_button__minuta_assinar2_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/minuta_assinar2.gif?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_388_label" class="cke_button_label cke_button__assinar_label" aria-hidden="false">Assinar</span><span id="cke_388_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+G</span></a><a id="cke_389" class="cke_button cke_button__devolver cke_button_off" href="javascript:void('Devolver minuta')" title="Devolver minuta" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_389_label" aria-describedby="cke_389_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(227,event);" onfocus="return CKEDITOR.tools.callFunction(228,event);" onclick="CKEDITOR.tools.callFunction(229,this);return false;"><span class="cke_button_icon cke_button__minuta_devolver_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/minuta_devolver.gif?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_389_label" class="cke_button_label cke_button__devolver_label" aria-hidden="false">Devolver minuta</span><span id="cke_389_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_390" class="cke_button cke_button__anonimizar cke_button_off" href="javascript:void('Anonimizar/Desanonimizar Pessoa Física')" title="Anonimizar/Desanonimizar Pessoa Física" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_390_label" aria-describedby="cke_390_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(230,event);" onfocus="return CKEDITOR.tools.callFunction(231,event);" onclick="CKEDITOR.tools.callFunction(232,this);return false;"><span class="cke_button_icon cke_button__anonimizar_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/anonimizar.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_390_label" class="cke_button_label cke_button__anonimizar_label" aria-hidden="false">Anonimizar/Desanonimizar Pessoa Física</span><span id="cke_390_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_391" class="cke_toolbar" aria-labelledby="cke_391_label" role="toolbar"><span id="cke_391_label" class="cke_voice_label">Salvar como</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_392" class="cke_button cke_button__salvarcomotextopadraosubform cke_button_off" href="javascript:void('Salvar como Texto Padrão')" title="Salvar como Texto Padrão" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_392_label" aria-describedby="cke_392_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(233,event);" onfocus="return CKEDITOR.tools.callFunction(234,event);" onclick="CKEDITOR.tools.callFunction(235,this);return false;"><span class="cke_button_icon cke_button__salvarcomotexto_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/salvarcomotexto.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_392_label" class="cke_button_label cke_button__salvarcomotextopadraosubform_label" aria-hidden="false">Salvar como Texto Padrão</span><span id="cke_392_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_393" class="cke_button cke_button__salvarcomomodelopadrao cke_button_off" href="javascript:void('Salvar como Modelo')" title="Salvar como Modelo" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_393_label" aria-describedby="cke_393_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(236,event);" onfocus="return CKEDITOR.tools.callFunction(237,event);" onclick="CKEDITOR.tools.callFunction(238,this);return false;"><span class="cke_button_icon cke_button__salvarcomomodelo_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/salvarcomomodelo.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_393_label" class="cke_button_label cke_button__salvarcomomodelopadrao_label" aria-hidden="false">Salvar como Modelo</span><span id="cke_393_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_394" class="cke_toolbar" aria-labelledby="cke_394_label" role="toolbar"><span id="cke_394_label" class="cke_voice_label">Inserir</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_395" class="cke_button cke_button__link cke_button_off" href="javascript:void('Inserir/Editar Link')" title="Inserir/Editar Link (Ctrl+K)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_395_label" aria-describedby="cke_395_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(239,event);" onfocus="return CKEDITOR.tools.callFunction(240,event);" onclick="CKEDITOR.tools.callFunction(241,this);return false;"><span class="cke_button_icon cke_button__link_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1200px;background-size:auto;">&nbsp;</span><span id="cke_395_label" class="cke_button_label cke_button__link_label" aria-hidden="false">Inserir/Editar Link</span><span id="cke_395_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+K</span></a><a id="cke_396" class="cke_button cke_button__unlink cke_button_disabled " href="javascript:void('Remover Link')" title="Remover Link" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_396_label" aria-describedby="cke_396_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(242,event);" onfocus="return CKEDITOR.tools.callFunction(243,event);" onclick="CKEDITOR.tools.callFunction(244,this);return false;"><span class="cke_button_icon cke_button__unlink_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1224px;background-size:auto;">&nbsp;</span><span id="cke_396_label" class="cke_button_label cke_button__unlink_label" aria-hidden="false">Remover Link</span><span id="cke_396_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_397" class="cke_button cke_button__base64image cke_button_off" href="javascript:void('Inserir imagem local')" title="Inserir imagem local" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_397_label" aria-describedby="cke_397_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(245,event);" onfocus="return CKEDITOR.tools.callFunction(246,event);" onclick="CKEDITOR.tools.callFunction(247,this);return false;"><span class="cke_button_icon cke_button__base64image_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1_plugins_externos/base64image/icons/base64imageup.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_397_label" class="cke_button_label cke_button__base64image_label" aria-hidden="false">Inserir imagem local</span><span id="cke_397_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_398" class="cke_button cke_button__table cke_button_off" href="javascript:void('Tabela')" title="Tabela" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_398_label" aria-describedby="cke_398_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(248,event);" onfocus="return CKEDITOR.tools.callFunction(249,event);" onclick="CKEDITOR.tools.callFunction(250,this);return false;"><span class="cke_button_icon cke_button__table_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1848px;background-size:auto;">&nbsp;</span><span id="cke_398_label" class="cke_button_label cke_button__table_label" aria-hidden="false">Tabela</span><span id="cke_398_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_399" class="cke_button cke_button__horizontalrule cke_button_off" href="javascript:void('Inserir Linha Horizontal')" title="Inserir Linha Horizontal" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_399_label" aria-describedby="cke_399_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(251,event);" onfocus="return CKEDITOR.tools.callFunction(252,event);" onclick="CKEDITOR.tools.callFunction(253,this);return false;"><span class="cke_button_icon cke_button__horizontalrule_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -840px;background-size:auto;">&nbsp;</span><span id="cke_399_label" class="cke_button_label cke_button__horizontalrule_label" aria-hidden="false">Inserir Linha Horizontal</span><span id="cke_399_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_400" class="cke_button cke_button__specialchar cke_button_off" href="javascript:void('Inserir Caractere Especial')" title="Inserir Caractere Especial" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_400_label" aria-describedby="cke_400_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(254,event);" onfocus="return CKEDITOR.tools.callFunction(255,event);" onclick="CKEDITOR.tools.callFunction(256,this);return false;"><span class="cke_button_icon cke_button__specialchar_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1800px;background-size:auto;">&nbsp;</span><span id="cke_400_label" class="cke_button_label cke_button__specialchar_label" aria-hidden="false">Inserir Caractere Especial</span><span id="cke_400_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_401" class="cke_toolbar" aria-labelledby="cke_401_label" role="toolbar"><span id="cke_401_label" class="cke_voice_label">Exibir</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_402" class="cke_button cke_button__backgroundcoloreditor cke_button_off" href="javascript:void('Alterna cor de fundo azul/branco')" title="Alterna cor de fundo azul/branco" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_402_label" aria-describedby="cke_402_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(257,event);" onfocus="return CKEDITOR.tools.callFunction(258,event);" onclick="CKEDITOR.tools.callFunction(259,this);return false;"><span class="cke_button_icon cke_button__azulbranco_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/azulbranco.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_402_label" class="cke_button_label cke_button__backgroundcoloreditor_label" aria-hidden="false">Alterna cor de fundo azul/branco</span><span id="cke_402_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_403" class="cke_button cke_button__textcolor cke_button_expandable cke_button_off" href="javascript:void('Cor do Texto')" title="Cor do Texto" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_403_label" aria-describedby="cke_403_description" aria-haspopup="listbox" aria-disabled="false" aria-expanded="false" onkeydown="return CKEDITOR.tools.callFunction(260,event);" onfocus="return CKEDITOR.tools.callFunction(261,event);" onclick="CKEDITOR.tools.callFunction(262,this);return false;"><span class="cke_button_icon cke_button__textcolor_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -408px;background-size:auto;">&nbsp;</span><span id="cke_403_label" class="cke_button_label cke_button__textcolor_label" aria-hidden="false">Cor do Texto</span><span id="cke_403_description" class="cke_button_label" aria-hidden="false"></span><span class="cke_button_arrow"></span></a><a id="cke_404" class="cke_button cke_button__bgcolor cke_button_expandable cke_button_off" href="javascript:void('Cor do Plano de Fundo')" title="Cor do Plano de Fundo" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_404_label" aria-describedby="cke_404_description" aria-haspopup="listbox" aria-disabled="false" aria-expanded="false" onkeydown="return CKEDITOR.tools.callFunction(263,event);" onfocus="return CKEDITOR.tools.callFunction(264,event);" onclick="CKEDITOR.tools.callFunction(265,this);return false;"><span class="cke_button_icon cke_button__bgcolor_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -384px;background-size:auto;">&nbsp;</span><span id="cke_404_label" class="cke_button_label cke_button__bgcolor_label" aria-hidden="false">Cor do Plano de Fundo</span><span id="cke_404_description" class="cke_button_label" aria-hidden="false"></span><span class="cke_button_arrow"></span></a><a id="cke_405" class="cke_button cke_button__mostrarparagrafo cke_button_off" href="javascript:void('Mostrar parágrafos')" title="Mostrar parágrafos" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_405_label" aria-describedby="cke_405_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(266,event);" onfocus="return CKEDITOR.tools.callFunction(267,event);" onclick="CKEDITOR.tools.callFunction(268,this);return false;"><span class="cke_button_icon cke_button__showblocks_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1728px;background-size:auto;">&nbsp;</span><span id="cke_405_label" class="cke_button_label cke_button__mostrarparagrafo_label" aria-hidden="false">Mostrar parágrafos</span><span id="cke_405_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_406" class="cke_toolbar" aria-labelledby="cke_406_label" role="toolbar"><span id="cke_406_label" class="cke_voice_label">Tags</span><span class="cke_toolbar_start"></span><span id="cke_332" class="cke_combo cke_combo__tags Tags cke_combo_off" role="presentation"><span id="cke_332_label" class="cke_combo_label">Tags</span><a class="cke_combo_button" title="Tags" tabindex="-1" href="javascript:void('Tags')" hidefocus="true" role="button" aria-labelledby="cke_332_label" aria-haspopup="listbox" onkeydown="return CKEDITOR.tools.callFunction(270,event,this);" onfocus="return CKEDITOR.tools.callFunction(271,event);" onclick="CKEDITOR.tools.callFunction(269,this);return false;" aria-expanded="false"><span id="cke_332_text" class="cke_combo_text cke_combo_inlinelabel">Tags</span><span class="cke_combo_open"><span class="cke_combo_arrow"></span></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_407" class="cke_toolbar" aria-labelledby="cke_407_label" role="toolbar"><span id="cke_407_label" class="cke_voice_label">zoom</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_408" class="cke_button cke_button__zoomin cke_button_off" href="javascript:void('Aumentar o zoom')" title="Aumentar o zoom" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_408_label" aria-describedby="cke_408_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(272,event);" onfocus="return CKEDITOR.tools.callFunction(273,event);" onclick="CKEDITOR.tools.callFunction(274,this);return false;"><span class="cke_button_icon cke_button__zoomin_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/zoomin.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_408_label" class="cke_button_label cke_button__zoomin_label" aria-hidden="false">Aumentar o zoom</span><span id="cke_408_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_409" class="cke_button cke_button__zoomout cke_button_off" href="javascript:void('Diminuir o zoom')" title="Diminuir o zoom" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_409_label" aria-describedby="cke_409_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(275,event);" onfocus="return CKEDITOR.tools.callFunction(276,event);" onclick="CKEDITOR.tools.callFunction(277,this);return false;"><span class="cke_button_icon cke_button__zoomout_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/zoomout.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_409_label" class="cke_button_label cke_button__zoomout_label" aria-hidden="false">Diminuir o zoom</span><span id="cke_409_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_410" class="cke_button cke_button__resetzoom cke_button_off" href="javascript:void('Resetar o zoom')" title="Resetar o zoom" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_410_label" aria-describedby="cke_410_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(278,event);" onfocus="return CKEDITOR.tools.callFunction(279,event);" onclick="CKEDITOR.tools.callFunction(280,this);return false;"><span class="cke_button_icon cke_button__zoomreset_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/zoomreset.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_410_label" class="cke_button_label cke_button__resetzoom_label" aria-hidden="false">Resetar o zoom</span><span id="cke_410_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_411" class="cke_toolbar" aria-labelledby="cke_411_label" role="toolbar"><span id="cke_411_label" class="cke_voice_label">Fechar</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_412" class="cke_button cke_button__about cke_button_off" href="javascript:void('Sobre o CKEditor 4')" title="Sobre o CKEditor 4" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_412_label" aria-describedby="cke_412_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(281,event);" onfocus="return CKEDITOR.tools.callFunction(282,event);" onclick="CKEDITOR.tools.callFunction(283,this);return false;"><span class="cke_button_icon cke_button__about_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 0px;background-size:auto;">&nbsp;</span><span id="cke_412_label" class="cke_button_label cke_button__about_label" aria-hidden="false">Sobre o CKEditor 4</span><span id="cke_412_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_413" class="cke_button cke_button__atalhos cke_button_off" href="javascript:void('Teclas de Atalhos')" title="Teclas de Atalhos" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_413_label" aria-describedby="cke_413_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(284,event);" onfocus="return CKEDITOR.tools.callFunction(285,event);" onclick="CKEDITOR.tools.callFunction(286,this);return false;"><span class="cke_button_icon cke_button__atalhos_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/atalhos.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_413_label" class="cke_button_label cke_button__atalhos_label" aria-hidden="false">Teclas de Atalhos</span><span id="cke_413_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_414" class="cke_button cke_button__fecharminuta cke_button_off" href="javascript:void('Fechar Minuta')" title="Fechar Minuta (Alt+X)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_414_label" aria-describedby="cke_414_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(287,event);" onfocus="return CKEDITOR.tools.callFunction(288,event);" onclick="CKEDITOR.tools.callFunction(289,this);return false;"><span class="cke_button_icon cke_button__fechar_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/fecharminuta.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_414_label" class="cke_button_label cke_button__fecharminuta_label" aria-hidden="false">Fechar Minuta</span><span id="cke_414_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+X</span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_415" class="cke_toolbar cke_toolbar_last" aria-labelledby="cke_415_label" role="toolbar"><span id="cke_415_label" class="cke_voice_label">Fonte</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_416" class="cke_button cke_button__exibirfonte cke_button_off" href="javascript:void('Exibir código fonte')" title="Exibir código fonte" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_416_label" aria-describedby="cke_416_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(290,event);" onfocus="return CKEDITOR.tools.callFunction(291,event);" onclick="CKEDITOR.tools.callFunction(292,this);return false;"><span class="cke_button_icon cke_button__source_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1776px;background-size:auto;">&nbsp;</span><span id="cke_416_label" class="cke_button_label cke_button__exibirfonte_label" aria-hidden="false">Exibir código fonte</span><span id="cke_416_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_417" class="cke_button cke_button__registroerros cke_button_off" href="javascript:void('Registro de Mensagens')" title="Registro de Mensagens" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_417_label" aria-describedby="cke_417_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(293,event);" onfocus="return CKEDITOR.tools.callFunction(294,event);" onclick="CKEDITOR.tools.callFunction(295,this);return false;"><span class="cke_button_icon cke_button__registroerros_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/registroerros.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_417_label" class="cke_button_label cke_button__registroerros_label" aria-hidden="false">Registro de Mensagens</span><span id="cke_417_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span></span><a title="Diminuir Barra de Ferramentas" id="cke_14_toolbar_collapser" tabindex="-1" class="cke_toolbox_collapser" onclick="CKEDITOR.tools.callFunction(296)"><span class="cke_arrow">▲</span></a></span></div></div></div><div id="cke_7379729_9" class="cke cke_15 cke_reset_all cke_chrome cke_editor_7379729_9 cke_shared cke_detached cke_ltr cke_browser_webkit" dir="ltr" title="" lang="pt-br" role="presentation" style="display: none; user-select: none;"><div class="cke_inner"><div id="cke_15_top" class="cke_top" role="presentation"><span id="cke_436" class="cke_voice_label">Barra de Ferramentas do Editor</span><span id="cke_15_toolbox" class="cke_toolbox" role="group" aria-labelledby="cke_436" onmousedown="return false;"><span class="cke_toolbox_main"><span id="cke_441" class="cke_toolbar" aria-labelledby="cke_441_label" role="toolbar"><span id="cke_441_label" class="cke_voice_label">Salvar</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_442" class="cke_button cke_button__salvarminuta cke_button_off" href="javascript:void('Salvar Minuta (Alt + B)')" title="Salvar Minuta (Alt + B) (Ctrl+S)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_442_label" aria-describedby="cke_442_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(303,event);" onfocus="return CKEDITOR.tools.callFunction(304,event);" onclick="CKEDITOR.tools.callFunction(305,this);return false;"><span class="cke_button_icon cke_button__salvar_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/salvarminuta.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_442_label" class="cke_button_label cke_button__salvarminuta_label" aria-hidden="false">Salvar Minuta (Alt + B)</span><span id="cke_442_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+S</span></a><a id="cke_443" class="cke_button cke_button__salvarminutaesair cke_button_off" href="javascript:void('Salvar Minuta e Sair')" title="Salvar Minuta e Sair (Alt+Z)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_443_label" aria-describedby="cke_443_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(306,event);" onfocus="return CKEDITOR.tools.callFunction(307,event);" onclick="CKEDITOR.tools.callFunction(308,this);return false;"><span class="cke_button_icon cke_button__salvaresair_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/salvarminutaesair.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_443_label" class="cke_button_label cke_button__salvarminutaesair_label" aria-hidden="false">Salvar Minuta e Sair</span><span id="cke_443_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+Z</span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_444" class="cke_toolbar" aria-labelledby="cke_444_label" role="toolbar"><span id="cke_444_label" class="cke_voice_label">SalvarStatusMinuta</span><span class="cke_toolbar_start"></span><span id="cke_437" class="cke_combo cke_combo__statusminutadesejado StatusMinutaDesejado cke_combo_off" role="presentation"><span id="cke_437_label" class="cke_combo_label">Manter a minuta no status atual, Ao salvar e sair...</span><a class="cke_combo_button" title="Ao salvar e sair..." tabindex="-1" href="javascript:void('Ao salvar e sair...')" hidefocus="true" role="button" aria-labelledby="cke_437_label" aria-haspopup="listbox" onkeydown="return CKEDITOR.tools.callFunction(310,event,this);" onfocus="return CKEDITOR.tools.callFunction(311,event);" onclick="CKEDITOR.tools.callFunction(309,this);return false;" aria-expanded="false"><span id="cke_437_text" class="cke_combo_text">Manter a minuta no status atual</span><span class="cke_combo_open"><span class="cke_combo_arrow"></span></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_445" class="cke_toolbar" aria-labelledby="cke_445_label" role="toolbar"><span id="cke_445_label" class="cke_voice_label">Copiar e Colar</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_446" class="cke_button cke_button__cut cke_button_disabled " href="javascript:void('Recortar')" title="Recortar (Ctrl+X)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_446_label" aria-describedby="cke_446_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(312,event);" onfocus="return CKEDITOR.tools.callFunction(313,event);" onclick="CKEDITOR.tools.callFunction(314,this);return false;"><span class="cke_button_icon cke_button__cut_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -312px;background-size:auto;">&nbsp;</span><span id="cke_446_label" class="cke_button_label cke_button__cut_label" aria-hidden="false">Recortar</span><span id="cke_446_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+X</span></a><a id="cke_447" class="cke_button cke_button__copy cke_button_disabled " href="javascript:void('Copiar')" title="Copiar (Ctrl+C)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_447_label" aria-describedby="cke_447_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(315,event);" onfocus="return CKEDITOR.tools.callFunction(316,event);" onclick="CKEDITOR.tools.callFunction(317,this);return false;"><span class="cke_button_icon cke_button__copy_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -264px;background-size:auto;">&nbsp;</span><span id="cke_447_label" class="cke_button_label cke_button__copy_label" aria-hidden="false">Copiar</span><span id="cke_447_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+C</span></a><a id="cke_448" class="cke_button cke_button__paste cke_button_off" href="javascript:void('Colar')" title="Colar (Ctrl+V)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_448_label" aria-describedby="cke_448_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(318,event);" onfocus="return CKEDITOR.tools.callFunction(319,event);" onclick="CKEDITOR.tools.callFunction(320,this);return false;"><span class="cke_button_icon cke_button__paste_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -360px;background-size:auto;">&nbsp;</span><span id="cke_448_label" class="cke_button_label cke_button__paste_label" aria-hidden="false">Colar</span><span id="cke_448_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+V</span></a><a id="cke_449" class="cke_button cke_button__pastetext cke_button_off" href="javascript:void('Colar como Texto sem Formatação')" title="Colar como Texto sem Formatação (Ctrl+Shift+V)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_449_label" aria-describedby="cke_449_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(321,event);" onfocus="return CKEDITOR.tools.callFunction(322,event);" onclick="CKEDITOR.tools.callFunction(323,this);return false;"><span class="cke_button_icon cke_button__pastetext_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1488px;background-size:auto;">&nbsp;</span><span id="cke_449_label" class="cke_button_label cke_button__pastetext_label" aria-hidden="false">Colar como Texto sem Formatação</span><span id="cke_449_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+Shift+V</span></a><a id="cke_450" class="cke_button cke_button__pastefromword cke_button_off" href="javascript:void('Colar do Word')" title="Colar do Word" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_450_label" aria-describedby="cke_450_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(324,event);" onfocus="return CKEDITOR.tools.callFunction(325,event);" onclick="CKEDITOR.tools.callFunction(326,this);return false;"><span class="cke_button_icon cke_button__pastefromword_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1536px;background-size:auto;">&nbsp;</span><span id="cke_450_label" class="cke_button_label cke_button__pastefromword_label" aria-hidden="false">Colar do Word</span><span id="cke_450_description" class="cke_button_label" aria-hidden="false"></span></a></span><span id="cke_438" class="cke_combo cke_combo__estiloaocolar cke_format cke_combo_off" role="presentation"><span id="cke_438_label" class="cke_combo_label">escolha o estilo a ser aplicado ao colar texto, Estilo ao colar...</span><a class="cke_combo_button" title="Estilo ao colar..." tabindex="-1" href="javascript:void('Estilo ao colar...')" hidefocus="true" role="button" aria-labelledby="cke_438_label" aria-haspopup="listbox" onkeydown="return CKEDITOR.tools.callFunction(328,event,this);" onfocus="return CKEDITOR.tools.callFunction(329,event);" onclick="CKEDITOR.tools.callFunction(327,this);return false;" aria-expanded="false"><span id="cke_438_text" class="cke_combo_text">escolha o estilo a ser aplicado ao colar texto</span><span class="cke_combo_open"><span class="cke_combo_arrow"></span></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_451" class="cke_toolbar" aria-labelledby="cke_451_label" role="toolbar"><span id="cke_451_label" class="cke_voice_label">Desfazer e Refazer</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_452" class="cke_button cke_button__undo cke_button_disabled " href="javascript:void('Desfazer')" title="Desfazer (Ctrl+Z)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_452_label" aria-describedby="cke_452_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(330,event);" onfocus="return CKEDITOR.tools.callFunction(331,event);" onclick="CKEDITOR.tools.callFunction(332,this);return false;"><span class="cke_button_icon cke_button__undo_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1944px;background-size:auto;">&nbsp;</span><span id="cke_452_label" class="cke_button_label cke_button__undo_label" aria-hidden="false">Desfazer</span><span id="cke_452_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+Z</span></a><a id="cke_453" class="cke_button cke_button__redo cke_button_disabled " href="javascript:void('Refazer')" title="Refazer (Ctrl+Y)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_453_label" aria-describedby="cke_453_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(333,event);" onfocus="return CKEDITOR.tools.callFunction(334,event);" onclick="CKEDITOR.tools.callFunction(335,this);return false;"><span class="cke_button_icon cke_button__redo_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1896px;background-size:auto;">&nbsp;</span><span id="cke_453_label" class="cke_button_label cke_button__redo_label" aria-hidden="false">Refazer</span><span id="cke_453_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+Y</span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_454" class="cke_toolbar" aria-labelledby="cke_454_label" role="toolbar"><span id="cke_454_label" class="cke_voice_label">Encontrar e Substituir</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_455" class="cke_button cke_button__find cke_button_off" href="javascript:void('Localizar')" title="Localizar" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_455_label" aria-describedby="cke_455_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(336,event);" onfocus="return CKEDITOR.tools.callFunction(337,event);" onclick="CKEDITOR.tools.callFunction(338,this);return false;"><span class="cke_button_icon cke_button__find_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1_plugins_externos/find/icons/find.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_455_label" class="cke_button_label cke_button__find_label" aria-hidden="false">Localizar</span><span id="cke_455_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_456" class="cke_button cke_button__replace cke_button_off" href="javascript:void('Procurar/Substituir')" title="Procurar/Substituir" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_456_label" aria-describedby="cke_456_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(339,event);" onfocus="return CKEDITOR.tools.callFunction(340,event);" onclick="CKEDITOR.tools.callFunction(341,this);return false;"><span class="cke_button_icon cke_button__replace_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1_plugins_externos/find/icons/replace.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_456_label" class="cke_button_label cke_button__replace_label" aria-hidden="false">Procurar/Substituir</span><span id="cke_456_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_457" class="cke_button cke_button__replacevariables cke_button_off" href="javascript:void('Procurar/Substituir Variáveis')" title="Procurar/Substituir Variáveis" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_457_label" aria-describedby="cke_457_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(342,event);" onfocus="return CKEDITOR.tools.callFunction(343,event);" onclick="CKEDITOR.tools.callFunction(344,this);return false;"><span class="cke_button_icon cke_button__replacevariables_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/replace-variable.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_457_label" class="cke_button_label cke_button__replacevariables_label" aria-hidden="false">Procurar/Substituir Variáveis</span><span id="cke_457_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_458" class="cke_button cke_button__selectall cke_button_off" href="javascript:void('Selecionar Tudo')" title="Selecionar Tudo" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_458_label" aria-describedby="cke_458_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(345,event);" onfocus="return CKEDITOR.tools.callFunction(346,event);" onclick="CKEDITOR.tools.callFunction(347,this);return false;"><span class="cke_button_icon cke_button__selectall_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1680px;background-size:auto;">&nbsp;</span><span id="cke_458_label" class="cke_button_label cke_button__selectall_label" aria-hidden="false">Selecionar Tudo</span><span id="cke_458_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_459" class="cke_button cke_button__spellcheckernativo cke_button_off" href="javascript:void('Ativa o corretor ortográfico nativo do navegador')" title="Ativa o corretor ortográfico nativo do navegador" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_459_label" aria-describedby="cke_459_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(348,event);" onfocus="return CKEDITOR.tools.callFunction(349,event);" onclick="CKEDITOR.tools.callFunction(350,this);return false;"><span class="cke_button_icon cke_button__spellcheckernativo_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/spellcheckernativo.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_459_label" class="cke_button_label cke_button__spellcheckernativo_label" aria-hidden="false">Ativa o corretor ortográfico nativo do navegador</span><span id="cke_459_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_460" class="cke_toolbar" aria-labelledby="cke_460_label" role="toolbar"><span id="cke_460_label" class="cke_voice_label">Formatação de Caracteres</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_461" class="cke_button cke_button__negrito cke_button_off" href="javascript:void('Negrito (Alt+N)')" title="Negrito (Alt+N) (Ctrl+B)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_461_label" aria-describedby="cke_461_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(351,event);" onfocus="return CKEDITOR.tools.callFunction(352,event);" onclick="CKEDITOR.tools.callFunction(353,this);return false;"><span class="cke_button_icon cke_button__negrito_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/negrito.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_461_label" class="cke_button_label cke_button__negrito_label" aria-hidden="false">Negrito (Alt+N)</span><span id="cke_461_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+B</span></a><a id="cke_462" class="cke_button cke_button__italico cke_button_off" href="javascript:void('Itálico (Alt+I)')" title="Itálico (Alt+I) (Ctrl+I)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_462_label" aria-describedby="cke_462_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(354,event);" onfocus="return CKEDITOR.tools.callFunction(355,event);" onclick="CKEDITOR.tools.callFunction(356,this);return false;"><span class="cke_button_icon cke_button__italico_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/italico.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_462_label" class="cke_button_label cke_button__italico_label" aria-hidden="false">Itálico (Alt+I)</span><span id="cke_462_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+I</span></a><a id="cke_463" class="cke_button cke_button__sublinhado cke_button_off" href="javascript:void('Sublinhado (Alt+S)')" title="Sublinhado (Alt+S) (Ctrl+U)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_463_label" aria-describedby="cke_463_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(357,event);" onfocus="return CKEDITOR.tools.callFunction(358,event);" onclick="CKEDITOR.tools.callFunction(359,this);return false;"><span class="cke_button_icon cke_button__sublinhado_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/sublinhado.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_463_label" class="cke_button_label cke_button__sublinhado_label" aria-hidden="false">Sublinhado (Alt+S)</span><span id="cke_463_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+U</span></a><a id="cke_464" class="cke_button cke_button__riscado cke_button_off" href="javascript:void('Riscado (Alt+K)')" title="Riscado (Alt+K)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_464_label" aria-describedby="cke_464_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(360,event);" onfocus="return CKEDITOR.tools.callFunction(361,event);" onclick="CKEDITOR.tools.callFunction(362,this);return false;"><span class="cke_button_icon cke_button__riscado_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/riscado.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_464_label" class="cke_button_label cke_button__riscado_label" aria-hidden="false">Riscado (Alt+K)</span><span id="cke_464_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_465" class="cke_button cke_button__subscript cke_button_off" href="javascript:void('Subscrito')" title="Subscrito" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_465_label" aria-describedby="cke_465_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(363,event);" onfocus="return CKEDITOR.tools.callFunction(364,event);" onclick="CKEDITOR.tools.callFunction(365,this);return false;"><span class="cke_button_icon cke_button__subscript_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -96px;background-size:auto;">&nbsp;</span><span id="cke_465_label" class="cke_button_label cke_button__subscript_label" aria-hidden="false">Subscrito</span><span id="cke_465_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_466" class="cke_button cke_button__superscript cke_button_off" href="javascript:void('Sobrescrito')" title="Sobrescrito" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_466_label" aria-describedby="cke_466_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(366,event);" onfocus="return CKEDITOR.tools.callFunction(367,event);" onclick="CKEDITOR.tools.callFunction(368,this);return false;"><span class="cke_button_icon cke_button__superscript_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -120px;background-size:auto;">&nbsp;</span><span id="cke_466_label" class="cke_button_label cke_button__superscript_label" aria-hidden="false">Sobrescrito</span><span id="cke_466_description" class="cke_button_label" aria-hidden="false"></span></a><span class="cke_toolbar_separator" role="separator"></span><a id="cke_467" class="cke_button cke_button__removeformat cke_button_off" href="javascript:void('Remover Formatação')" title="Remover Formatação" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_467_label" aria-describedby="cke_467_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(369,event);" onfocus="return CKEDITOR.tools.callFunction(370,event);" onclick="CKEDITOR.tools.callFunction(371,this);return false;"><span class="cke_button_icon cke_button__removeformat_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1632px;background-size:auto;">&nbsp;</span><span id="cke_467_label" class="cke_button_label cke_button__removeformat_label" aria-hidden="false">Remover Formatação</span><span id="cke_467_description" class="cke_button_label" aria-hidden="false"></span></a></span><span id="cke_439" class="cke_combo cke_combo__styles cke_combo_off" role="presentation"><span id="cke_439_label" class="cke_combo_label">Estilo</span><a class="cke_combo_button" title="Estilos de Formatação" tabindex="-1" href="javascript:void('Estilos de Formatação')" hidefocus="true" role="button" aria-labelledby="cke_439_label" aria-haspopup="listbox" onkeydown="return CKEDITOR.tools.callFunction(373,event,this);" onfocus="return CKEDITOR.tools.callFunction(374,event);" onclick="CKEDITOR.tools.callFunction(372,this);return false;" aria-expanded="false"><span id="cke_439_text" class="cke_combo_text cke_combo_inlinelabel">Estilo</span><span class="cke_combo_open"><span class="cke_combo_arrow"></span></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_468" class="cke_toolbar" aria-labelledby="cke_468_label" role="toolbar"><span id="cke_468_label" class="cke_voice_label">Transformação de Caracteres</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_469" class="cke_button cke_button__transformarmaiusculas cke_button_off" href="javascript:void('MAIÚSCULAS')" title="MAIÚSCULAS (Alt+U)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_469_label" aria-describedby="cke_469_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(375,event);" onfocus="return CKEDITOR.tools.callFunction(376,event);" onclick="CKEDITOR.tools.callFunction(377,this);return false;"><span class="cke_button_icon cke_button__maiusculas_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/maiusculas.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_469_label" class="cke_button_label cke_button__transformarmaiusculas_label" aria-hidden="false">MAIÚSCULAS</span><span id="cke_469_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+U</span></a><a id="cke_470" class="cke_button cke_button__transformarminusculas cke_button_off" href="javascript:void('minúsculas')" title="minúsculas (Alt+L)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_470_label" aria-describedby="cke_470_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(378,event);" onfocus="return CKEDITOR.tools.callFunction(379,event);" onclick="CKEDITOR.tools.callFunction(380,this);return false;"><span class="cke_button_icon cke_button__minusculas_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/minusculas.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_470_label" class="cke_button_label cke_button__transformarminusculas_label" aria-hidden="false">minúsculas</span><span id="cke_470_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+L</span></a><a id="cke_471" class="cke_button cke_button__transformarcapitalizado cke_button_off" href="javascript:void('Capitalizar')" title="Capitalizar (Alt+C)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_471_label" aria-describedby="cke_471_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(381,event);" onfocus="return CKEDITOR.tools.callFunction(382,event);" onclick="CKEDITOR.tools.callFunction(383,this);return false;"><span class="cke_button_icon cke_button__capitalizado_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/capitalize.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_471_label" class="cke_button_label cke_button__transformarcapitalizado_label" aria-hidden="false">Capitalizar</span><span id="cke_471_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+C</span></a><a id="cke_472" class="cke_button cke_button__agrupartexto cke_button_off" href="javascript:void('AGRUPAR TEXTO')" title="AGRUPAR TEXTO" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_472_label" aria-describedby="cke_472_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(384,event);" onfocus="return CKEDITOR.tools.callFunction(385,event);" onclick="CKEDITOR.tools.callFunction(386,this);return false;"><span class="cke_button_icon cke_button__agrupartexto_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/agrupartexto.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_472_label" class="cke_button_label cke_button__agrupartexto_label" aria-hidden="false">AGRUPAR TEXTO</span><span id="cke_472_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_473" class="cke_toolbar" aria-labelledby="cke_473_label" role="toolbar"><span id="cke_473_label" class="cke_voice_label">Listas</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_474" class="cke_button cke_button__numberedlist cke_button_off" href="javascript:void('Lista numerada')" title="Lista numerada" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_474_label" aria-describedby="cke_474_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(387,event);" onfocus="return CKEDITOR.tools.callFunction(388,event);" onclick="CKEDITOR.tools.callFunction(389,this);return false;"><span class="cke_button_icon cke_button__numberedlist_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1320px;background-size:auto;">&nbsp;</span><span id="cke_474_label" class="cke_button_label cke_button__numberedlist_label" aria-hidden="false">Lista numerada</span><span id="cke_474_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_475" class="cke_button cke_button__bulletedlist cke_button_off" href="javascript:void('Lista sem números')" title="Lista sem números" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_475_label" aria-describedby="cke_475_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(390,event);" onfocus="return CKEDITOR.tools.callFunction(391,event);" onclick="CKEDITOR.tools.callFunction(392,this);return false;"><span class="cke_button_icon cke_button__bulletedlist_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1272px;background-size:auto;">&nbsp;</span><span id="cke_475_label" class="cke_button_label cke_button__bulletedlist_label" aria-hidden="false">Lista sem números</span><span id="cke_475_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_476" class="cke_toolbar" aria-labelledby="cke_476_label" role="toolbar"><span id="cke_476_label" class="cke_voice_label">Suggestion</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_477" class="cke_button cke_button__addsuggestion cke_button_off" href="javascript:void('Substituições')" title="Substituições" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_477_label" aria-describedby="cke_477_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(393,event);" onfocus="return CKEDITOR.tools.callFunction(394,event);" onclick="CKEDITOR.tools.callFunction(395,this);return false;"><span class="cke_button_icon cke_button__suggestions_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/suggestions.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_477_label" class="cke_button_label cke_button__addsuggestion_label" aria-hidden="false">Substituições</span><span id="cke_477_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_478" class="cke_toolbar" aria-labelledby="cke_478_label" role="toolbar"><span id="cke_478_label" class="cke_voice_label">Inserção de Texto</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_479" class="cke_button cke_button__inseretextopadrao cke_button_off" href="javascript:void('Inserir Texto Padrão ou TAG')" title="Inserir Texto Padrão ou TAG (Alt+T)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_479_label" aria-describedby="cke_479_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(396,event);" onfocus="return CKEDITOR.tools.callFunction(397,event);" onclick="CKEDITOR.tools.callFunction(398,this);return false;"><span class="cke_button_icon cke_button__inserirtextopadrao_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/inserirtextopadrao.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_479_label" class="cke_button_label cke_button__inseretextopadrao_label" aria-hidden="false">Inserir Texto Padrão ou TAG</span><span id="cke_479_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+T</span></a><a id="cke_480" class="cke_button cke_button__inserirtextobase cke_button_off" href="javascript:void('Inserir Documento Base')" title="Inserir Documento Base (Alt+A)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_480_label" aria-describedby="cke_480_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(399,event);" onfocus="return CKEDITOR.tools.callFunction(400,event);" onclick="CKEDITOR.tools.callFunction(401,this);return false;"><span class="cke_button_icon cke_button__inserirtextobase_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/inserirtextobase.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_480_label" class="cke_button_label cke_button__inserirtextobase_label" aria-hidden="false">Inserir Documento Base</span><span id="cke_480_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+A</span></a><a id="cke_481" class="cke_button cke_button__inserirmodelo cke_button_off" href="javascript:void('Inserir Modelo')" title="Inserir Modelo (Alt+M)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_481_label" aria-describedby="cke_481_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(402,event);" onfocus="return CKEDITOR.tools.callFunction(403,event);" onclick="CKEDITOR.tools.callFunction(404,this);return false;"><span class="cke_button_icon cke_button__inserirmodelo_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/inserirmodelo.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_481_label" class="cke_button_label cke_button__inserirmodelo_label" aria-hidden="false">Inserir Modelo</span><span id="cke_481_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+M</span></a><a id="cke_482" class="cke_button cke_button__visualizartextopadrao cke_button_off" href="javascript:void('Visualizar Texto Padrão')" title="Visualizar Texto Padrão (Alt+V)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_482_label" aria-describedby="cke_482_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(405,event);" onfocus="return CKEDITOR.tools.callFunction(406,event);" onclick="CKEDITOR.tools.callFunction(407,this);return false;"><span class="cke_button_icon cke_button__visualizartextopadrao_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/visualizartextopadrao.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_482_label" class="cke_button_label cke_button__visualizartextopadrao_label" aria-hidden="false">Visualizar Texto Padrão</span><span id="cke_482_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+V</span></a><a id="cke_483" class="cke_button cke_button__notafimtexto cke_button_off" href="javascript:void('Inserir/Editar nota de fim de texto')" title="Inserir/Editar nota de fim de texto" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_483_label" aria-describedby="cke_483_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(408,event);" onfocus="return CKEDITOR.tools.callFunction(409,event);" onclick="CKEDITOR.tools.callFunction(410,this);return false;"><span class="cke_button_icon cke_button__notasdefimdetexto_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/notasdefimdetexto.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_483_label" class="cke_button_label cke_button__notafimtexto_label" aria-hidden="false">Inserir/Editar nota de fim de texto</span><span id="cke_483_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_484" class="cke_button cke_button__inserirlembrete cke_button_off" href="javascript:void('Inserir lembrete')" title="Inserir lembrete" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_484_label" aria-describedby="cke_484_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(411,event);" onfocus="return CKEDITOR.tools.callFunction(412,event);" onclick="CKEDITOR.tools.callFunction(413,this);return false;"><span class="cke_button_icon cke_button__minuta_lembrete_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/minuta_lembrete.gif?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_484_label" class="cke_button_label cke_button__inserirlembrete_label" aria-hidden="false">Inserir lembrete</span><span id="cke_484_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_485" class="cke_button cke_button__tabela_cumprimento_ceab cke_button_off" href="javascript:void('Inserir tabela para cumprimento pela CEAB')" title="Inserir tabela para cumprimento pela CEAB" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_485_label" aria-describedby="cke_485_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(414,event);" onfocus="return CKEDITOR.tools.callFunction(415,event);" onclick="CKEDITOR.tools.callFunction(416,this);return false;"><span class="cke_button_icon cke_button__tabelacumprimentoceab_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/tabela_cumprimento_ceab.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_485_label" class="cke_button_label cke_button__tabela_cumprimento_ceab_label" aria-hidden="false">Inserir tabela para cumprimento pela CEAB</span><span id="cke_485_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_486" class="cke_toolbar" aria-labelledby="cke_486_label" role="toolbar"><span id="cke_486_label" class="cke_voice_label">Recursos</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_487" class="cke_button cke_button__extenso cke_button_off" href="javascript:void('Escrever por extenso')" title="Escrever por extenso (Alt+O)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_487_label" aria-describedby="cke_487_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(417,event);" onfocus="return CKEDITOR.tools.callFunction(418,event);" onclick="CKEDITOR.tools.callFunction(419,this);return false;"><span class="cke_button_icon cke_button__extenso_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/extenso.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_487_label" class="cke_button_label cke_button__extenso_label" aria-hidden="false">Escrever por extenso</span><span id="cke_487_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+O</span></a><a id="cke_488" class="cke_button cke_button__renumeranotasdefimdetexto cke_button_off" href="javascript:void('Renumerar notas de fim de texto')" title="Renumerar notas de fim de texto" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_488_label" aria-describedby="cke_488_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(420,event);" onfocus="return CKEDITOR.tools.callFunction(421,event);" onclick="CKEDITOR.tools.callFunction(422,this);return false;"><span class="cke_button_icon cke_button__renumeranotasdefimdetexto_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/renumeranotasdefimdetexto.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_488_label" class="cke_button_label cke_button__renumeranotasdefimdetexto_label" aria-hidden="false">Renumerar notas de fim de texto</span><span id="cke_488_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_489" class="cke_button cke_button__alterardados cke_button_off" href="javascript:void('Alterar dados')" title="Alterar dados" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_489_label" aria-describedby="cke_489_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(423,event);" onfocus="return CKEDITOR.tools.callFunction(424,event);" onclick="CKEDITOR.tools.callFunction(425,this);return false;"><span class="cke_button_icon cke_button__minuta_alterar_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/minuta_alterar.gif?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_489_label" class="cke_button_label cke_button__alterardados_label" aria-hidden="false">Alterar dados</span><span id="cke_489_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_490" class="cke_button cke_button__alterarlocalizador cke_button_off" href="javascript:void('Alterar localizador')" title="Alterar localizador" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_490_label" aria-describedby="cke_490_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(426,event);" onfocus="return CKEDITOR.tools.callFunction(427,event);" onclick="CKEDITOR.tools.callFunction(428,this);return false;"><span class="cke_button_icon cke_button__alterarlocalizador_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/alterar_localizador.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_490_label" class="cke_button_label cke_button__alterarlocalizador_label" aria-hidden="false">Alterar localizador</span><span id="cke_490_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_491" class="cke_button cke_button__marcacoes cke_button_off" href="javascript:void('Exibir Marcações')" title="Exibir Marcações" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_491_label" aria-describedby="cke_491_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(429,event);" onfocus="return CKEDITOR.tools.callFunction(430,event);" onclick="CKEDITOR.tools.callFunction(431,this);return false;"><span class="cke_button_icon cke_button__highlighter_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/highlighter.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_491_label" class="cke_button_label cke_button__marcacoes_label" aria-hidden="false">Exibir Marcações</span><span id="cke_491_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_492" class="cke_button cke_button__registroacoes cke_button_off" href="javascript:void('Registro de ações')" title="Registro de ações" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_492_label" aria-describedby="cke_492_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(432,event);" onfocus="return CKEDITOR.tools.callFunction(433,event);" onclick="CKEDITOR.tools.callFunction(434,this);return false;"><span class="cke_button_icon cke_button__minuta_historico_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/minuta_historico.gif?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_492_label" class="cke_button_label cke_button__registroacoes_label" aria-hidden="false">Registro de ações</span><span id="cke_492_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_493" class="cke_button cke_button__imprimir cke_button_off" href="javascript:void('Imprimir')" title="Imprimir" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_493_label" aria-describedby="cke_493_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(435,event);" onfocus="return CKEDITOR.tools.callFunction(436,event);" onclick="CKEDITOR.tools.callFunction(437,this);return false;"><span class="cke_button_icon cke_button__minuta_imprimir_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/minuta_imprimir.gif?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_493_label" class="cke_button_label cke_button__imprimir_label" aria-hidden="false">Imprimir</span><span id="cke_493_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_494" class="cke_button cke_button__atualizarcabecalho cke_button_off" href="javascript:void('Atualizar Cabeçalho')" title="Atualizar Cabeçalho" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_494_label" aria-describedby="cke_494_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(438,event);" onfocus="return CKEDITOR.tools.callFunction(439,event);" onclick="CKEDITOR.tools.callFunction(440,this);return false;"><span class="cke_button_icon cke_button__minuta_atualizar_cabecalho_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/minuta_atualizar_cabecalho.gif?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_494_label" class="cke_button_label cke_button__atualizarcabecalho_label" aria-hidden="false">Atualizar Cabeçalho</span><span id="cke_494_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_495" class="cke_button cke_button__disponibilizar cke_button_off" href="javascript:void('Disponibilizar')" title="Disponibilizar" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_495_label" aria-describedby="cke_495_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(441,event);" onfocus="return CKEDITOR.tools.callFunction(442,event);" onclick="CKEDITOR.tools.callFunction(443,this);return false;"><span class="cke_button_icon cke_button__minuta_disponibilizar_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/minuta_disponibilizar.gif?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_495_label" class="cke_button_label cke_button__disponibilizar_label" aria-hidden="false">Disponibilizar</span><span id="cke_495_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_496" class="cke_button cke_button__assinar cke_button_off" href="javascript:void('Assinar')" title="Assinar (Alt+G)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_496_label" aria-describedby="cke_496_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(444,event);" onfocus="return CKEDITOR.tools.callFunction(445,event);" onclick="CKEDITOR.tools.callFunction(446,this);return false;"><span class="cke_button_icon cke_button__minuta_assinar2_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/minuta_assinar2.gif?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_496_label" class="cke_button_label cke_button__assinar_label" aria-hidden="false">Assinar</span><span id="cke_496_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+G</span></a><a id="cke_497" class="cke_button cke_button__devolver cke_button_off" href="javascript:void('Devolver minuta')" title="Devolver minuta" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_497_label" aria-describedby="cke_497_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(447,event);" onfocus="return CKEDITOR.tools.callFunction(448,event);" onclick="CKEDITOR.tools.callFunction(449,this);return false;"><span class="cke_button_icon cke_button__minuta_devolver_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/minuta_devolver.gif?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_497_label" class="cke_button_label cke_button__devolver_label" aria-hidden="false">Devolver minuta</span><span id="cke_497_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_498" class="cke_button cke_button__anonimizar cke_button_off" href="javascript:void('Anonimizar/Desanonimizar Pessoa Física')" title="Anonimizar/Desanonimizar Pessoa Física" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_498_label" aria-describedby="cke_498_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(450,event);" onfocus="return CKEDITOR.tools.callFunction(451,event);" onclick="CKEDITOR.tools.callFunction(452,this);return false;"><span class="cke_button_icon cke_button__anonimizar_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/anonimizar.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_498_label" class="cke_button_label cke_button__anonimizar_label" aria-hidden="false">Anonimizar/Desanonimizar Pessoa Física</span><span id="cke_498_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_499" class="cke_toolbar" aria-labelledby="cke_499_label" role="toolbar"><span id="cke_499_label" class="cke_voice_label">Salvar como</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_500" class="cke_button cke_button__salvarcomotextopadraosubform cke_button_off" href="javascript:void('Salvar como Texto Padrão')" title="Salvar como Texto Padrão" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_500_label" aria-describedby="cke_500_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(453,event);" onfocus="return CKEDITOR.tools.callFunction(454,event);" onclick="CKEDITOR.tools.callFunction(455,this);return false;"><span class="cke_button_icon cke_button__salvarcomotexto_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/salvarcomotexto.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_500_label" class="cke_button_label cke_button__salvarcomotextopadraosubform_label" aria-hidden="false">Salvar como Texto Padrão</span><span id="cke_500_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_501" class="cke_button cke_button__salvarcomomodelopadrao cke_button_off" href="javascript:void('Salvar como Modelo')" title="Salvar como Modelo" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_501_label" aria-describedby="cke_501_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(456,event);" onfocus="return CKEDITOR.tools.callFunction(457,event);" onclick="CKEDITOR.tools.callFunction(458,this);return false;"><span class="cke_button_icon cke_button__salvarcomomodelo_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/salvarcomomodelo.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_501_label" class="cke_button_label cke_button__salvarcomomodelopadrao_label" aria-hidden="false">Salvar como Modelo</span><span id="cke_501_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_502" class="cke_toolbar" aria-labelledby="cke_502_label" role="toolbar"><span id="cke_502_label" class="cke_voice_label">Inserir</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_503" class="cke_button cke_button__link cke_button_off" href="javascript:void('Inserir/Editar Link')" title="Inserir/Editar Link (Ctrl+K)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_503_label" aria-describedby="cke_503_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(459,event);" onfocus="return CKEDITOR.tools.callFunction(460,event);" onclick="CKEDITOR.tools.callFunction(461,this);return false;"><span class="cke_button_icon cke_button__link_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1200px;background-size:auto;">&nbsp;</span><span id="cke_503_label" class="cke_button_label cke_button__link_label" aria-hidden="false">Inserir/Editar Link</span><span id="cke_503_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Ctrl+K</span></a><a id="cke_504" class="cke_button cke_button__unlink cke_button_disabled " href="javascript:void('Remover Link')" title="Remover Link" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_504_label" aria-describedby="cke_504_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(462,event);" onfocus="return CKEDITOR.tools.callFunction(463,event);" onclick="CKEDITOR.tools.callFunction(464,this);return false;"><span class="cke_button_icon cke_button__unlink_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1224px;background-size:auto;">&nbsp;</span><span id="cke_504_label" class="cke_button_label cke_button__unlink_label" aria-hidden="false">Remover Link</span><span id="cke_504_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_505" class="cke_button cke_button__base64image cke_button_off" href="javascript:void('Inserir imagem local')" title="Inserir imagem local" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_505_label" aria-describedby="cke_505_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(465,event);" onfocus="return CKEDITOR.tools.callFunction(466,event);" onclick="CKEDITOR.tools.callFunction(467,this);return false;"><span class="cke_button_icon cke_button__base64image_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1_plugins_externos/base64image/icons/base64imageup.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_505_label" class="cke_button_label cke_button__base64image_label" aria-hidden="false">Inserir imagem local</span><span id="cke_505_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_506" class="cke_button cke_button__table cke_button_off" href="javascript:void('Tabela')" title="Tabela" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_506_label" aria-describedby="cke_506_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(468,event);" onfocus="return CKEDITOR.tools.callFunction(469,event);" onclick="CKEDITOR.tools.callFunction(470,this);return false;"><span class="cke_button_icon cke_button__table_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1848px;background-size:auto;">&nbsp;</span><span id="cke_506_label" class="cke_button_label cke_button__table_label" aria-hidden="false">Tabela</span><span id="cke_506_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_507" class="cke_button cke_button__horizontalrule cke_button_off" href="javascript:void('Inserir Linha Horizontal')" title="Inserir Linha Horizontal" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_507_label" aria-describedby="cke_507_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(471,event);" onfocus="return CKEDITOR.tools.callFunction(472,event);" onclick="CKEDITOR.tools.callFunction(473,this);return false;"><span class="cke_button_icon cke_button__horizontalrule_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -840px;background-size:auto;">&nbsp;</span><span id="cke_507_label" class="cke_button_label cke_button__horizontalrule_label" aria-hidden="false">Inserir Linha Horizontal</span><span id="cke_507_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_508" class="cke_button cke_button__specialchar cke_button_off" href="javascript:void('Inserir Caractere Especial')" title="Inserir Caractere Especial" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_508_label" aria-describedby="cke_508_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(474,event);" onfocus="return CKEDITOR.tools.callFunction(475,event);" onclick="CKEDITOR.tools.callFunction(476,this);return false;"><span class="cke_button_icon cke_button__specialchar_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1800px;background-size:auto;">&nbsp;</span><span id="cke_508_label" class="cke_button_label cke_button__specialchar_label" aria-hidden="false">Inserir Caractere Especial</span><span id="cke_508_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_509" class="cke_toolbar" aria-labelledby="cke_509_label" role="toolbar"><span id="cke_509_label" class="cke_voice_label">Exibir</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_510" class="cke_button cke_button__backgroundcoloreditor cke_button_off" href="javascript:void('Alterna cor de fundo azul/branco')" title="Alterna cor de fundo azul/branco" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_510_label" aria-describedby="cke_510_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(477,event);" onfocus="return CKEDITOR.tools.callFunction(478,event);" onclick="CKEDITOR.tools.callFunction(479,this);return false;"><span class="cke_button_icon cke_button__azulbranco_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/azulbranco.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_510_label" class="cke_button_label cke_button__backgroundcoloreditor_label" aria-hidden="false">Alterna cor de fundo azul/branco</span><span id="cke_510_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_511" class="cke_button cke_button__textcolor cke_button_expandable cke_button_off" href="javascript:void('Cor do Texto')" title="Cor do Texto" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_511_label" aria-describedby="cke_511_description" aria-haspopup="listbox" aria-disabled="false" aria-expanded="false" onkeydown="return CKEDITOR.tools.callFunction(480,event);" onfocus="return CKEDITOR.tools.callFunction(481,event);" onclick="CKEDITOR.tools.callFunction(482,this);return false;"><span class="cke_button_icon cke_button__textcolor_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -408px;background-size:auto;">&nbsp;</span><span id="cke_511_label" class="cke_button_label cke_button__textcolor_label" aria-hidden="false">Cor do Texto</span><span id="cke_511_description" class="cke_button_label" aria-hidden="false"></span><span class="cke_button_arrow"></span></a><a id="cke_512" class="cke_button cke_button__bgcolor cke_button_expandable cke_button_off" href="javascript:void('Cor do Plano de Fundo')" title="Cor do Plano de Fundo" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_512_label" aria-describedby="cke_512_description" aria-haspopup="listbox" aria-disabled="false" aria-expanded="false" onkeydown="return CKEDITOR.tools.callFunction(483,event);" onfocus="return CKEDITOR.tools.callFunction(484,event);" onclick="CKEDITOR.tools.callFunction(485,this);return false;"><span class="cke_button_icon cke_button__bgcolor_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -384px;background-size:auto;">&nbsp;</span><span id="cke_512_label" class="cke_button_label cke_button__bgcolor_label" aria-hidden="false">Cor do Plano de Fundo</span><span id="cke_512_description" class="cke_button_label" aria-hidden="false"></span><span class="cke_button_arrow"></span></a><a id="cke_513" class="cke_button cke_button__mostrarparagrafo cke_button_off" href="javascript:void('Mostrar parágrafos')" title="Mostrar parágrafos" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_513_label" aria-describedby="cke_513_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(486,event);" onfocus="return CKEDITOR.tools.callFunction(487,event);" onclick="CKEDITOR.tools.callFunction(488,this);return false;"><span class="cke_button_icon cke_button__showblocks_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1728px;background-size:auto;">&nbsp;</span><span id="cke_513_label" class="cke_button_label cke_button__mostrarparagrafo_label" aria-hidden="false">Mostrar parágrafos</span><span id="cke_513_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_514" class="cke_toolbar" aria-labelledby="cke_514_label" role="toolbar"><span id="cke_514_label" class="cke_voice_label">Tags</span><span class="cke_toolbar_start"></span><span id="cke_440" class="cke_combo cke_combo__tags Tags cke_combo_off" role="presentation"><span id="cke_440_label" class="cke_combo_label">Tags</span><a class="cke_combo_button" title="Tags" tabindex="-1" href="javascript:void('Tags')" hidefocus="true" role="button" aria-labelledby="cke_440_label" aria-haspopup="listbox" onkeydown="return CKEDITOR.tools.callFunction(490,event,this);" onfocus="return CKEDITOR.tools.callFunction(491,event);" onclick="CKEDITOR.tools.callFunction(489,this);return false;" aria-expanded="false"><span id="cke_440_text" class="cke_combo_text cke_combo_inlinelabel">Tags</span><span class="cke_combo_open"><span class="cke_combo_arrow"></span></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_515" class="cke_toolbar" aria-labelledby="cke_515_label" role="toolbar"><span id="cke_515_label" class="cke_voice_label">zoom</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_516" class="cke_button cke_button__zoomin cke_button_off" href="javascript:void('Aumentar o zoom')" title="Aumentar o zoom" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_516_label" aria-describedby="cke_516_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(492,event);" onfocus="return CKEDITOR.tools.callFunction(493,event);" onclick="CKEDITOR.tools.callFunction(494,this);return false;"><span class="cke_button_icon cke_button__zoomin_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/zoomin.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_516_label" class="cke_button_label cke_button__zoomin_label" aria-hidden="false">Aumentar o zoom</span><span id="cke_516_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_517" class="cke_button cke_button__zoomout cke_button_off" href="javascript:void('Diminuir o zoom')" title="Diminuir o zoom" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_517_label" aria-describedby="cke_517_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(495,event);" onfocus="return CKEDITOR.tools.callFunction(496,event);" onclick="CKEDITOR.tools.callFunction(497,this);return false;"><span class="cke_button_icon cke_button__zoomout_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/zoomout.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_517_label" class="cke_button_label cke_button__zoomout_label" aria-hidden="false">Diminuir o zoom</span><span id="cke_517_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_518" class="cke_button cke_button__resetzoom cke_button_off" href="javascript:void('Resetar o zoom')" title="Resetar o zoom" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_518_label" aria-describedby="cke_518_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(498,event);" onfocus="return CKEDITOR.tools.callFunction(499,event);" onclick="CKEDITOR.tools.callFunction(500,this);return false;"><span class="cke_button_icon cke_button__zoomreset_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/zoomreset.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_518_label" class="cke_button_label cke_button__resetzoom_label" aria-hidden="false">Resetar o zoom</span><span id="cke_518_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_519" class="cke_toolbar" aria-labelledby="cke_519_label" role="toolbar"><span id="cke_519_label" class="cke_voice_label">Fechar</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_520" class="cke_button cke_button__about cke_button_off" href="javascript:void('Sobre o CKEditor 4')" title="Sobre o CKEditor 4" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_520_label" aria-describedby="cke_520_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(501,event);" onfocus="return CKEDITOR.tools.callFunction(502,event);" onclick="CKEDITOR.tools.callFunction(503,this);return false;"><span class="cke_button_icon cke_button__about_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 0px;background-size:auto;">&nbsp;</span><span id="cke_520_label" class="cke_button_label cke_button__about_label" aria-hidden="false">Sobre o CKEditor 4</span><span id="cke_520_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_521" class="cke_button cke_button__atalhos cke_button_off" href="javascript:void('Teclas de Atalhos')" title="Teclas de Atalhos" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_521_label" aria-describedby="cke_521_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(504,event);" onfocus="return CKEDITOR.tools.callFunction(505,event);" onclick="CKEDITOR.tools.callFunction(506,this);return false;"><span class="cke_button_icon cke_button__atalhos_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/atalhos.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_521_label" class="cke_button_label cke_button__atalhos_label" aria-hidden="false">Teclas de Atalhos</span><span id="cke_521_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_522" class="cke_button cke_button__fecharminuta cke_button_off" href="javascript:void('Fechar Minuta')" title="Fechar Minuta (Alt+X)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_522_label" aria-describedby="cke_522_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(507,event);" onfocus="return CKEDITOR.tools.callFunction(508,event);" onclick="CKEDITOR.tools.callFunction(509,this);return false;"><span class="cke_button_icon cke_button__fechar_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/fecharminuta.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_522_label" class="cke_button_label cke_button__fecharminuta_label" aria-hidden="false">Fechar Minuta</span><span id="cke_522_description" class="cke_button_label" aria-hidden="false">&nbsp;Atalho do teclado Alt+X</span></a></span><span class="cke_toolbar_end"></span></span><span id="cke_523" class="cke_toolbar cke_toolbar_last" aria-labelledby="cke_523_label" role="toolbar"><span id="cke_523_label" class="cke_voice_label">Fonte</span><span class="cke_toolbar_start"></span><span class="cke_toolgroup" role="presentation"><a id="cke_524" class="cke_button cke_button__exibirfonte cke_button_off" href="javascript:void('Exibir código fonte')" title="Exibir código fonte" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_524_label" aria-describedby="cke_524_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(510,event);" onfocus="return CKEDITOR.tools.callFunction(511,event);" onclick="CKEDITOR.tools.callFunction(512,this);return false;"><span class="cke_button_icon cke_button__source_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/plugins/icons.png?t=N5UC');background-position:0 -1776px;background-size:auto;">&nbsp;</span><span id="cke_524_label" class="cke_button_label cke_button__exibirfonte_label" aria-hidden="false">Exibir código fonte</span><span id="cke_524_description" class="cke_button_label" aria-hidden="false"></span></a><a id="cke_525" class="cke_button cke_button__registroerros cke_button_off" href="javascript:void('Registro de Mensagens')" title="Registro de Mensagens" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_525_label" aria-describedby="cke_525_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(513,event);" onfocus="return CKEDITOR.tools.callFunction(514,event);" onclick="CKEDITOR.tools.callFunction(515,this);return false;"><span class="cke_button_icon cke_button__registroerros_icon" style="background-image:url('https://eproc2g.tjsc.jus.br/eproc/editor/ckeditor4_22_1/../../imagens/icons/registroerros.png?t=1771276196539');background-position:0 0px;background-size:16px;">&nbsp;</span><span id="cke_525_label" class="cke_button_label cke_button__registroerros_label" aria-hidden="false">Registro de Mensagens</span><span id="cke_525_description" class="cke_button_label" aria-hidden="false"></span></a></span><span class="cke_toolbar_end"></span></span></span><a title="Diminuir Barra de Ferramentas" id="cke_15_toolbar_collapser" tabindex="-1" class="cke_toolbox_collapser" onclick="CKEDITOR.tools.callFunction(516)"><span class="cke_arrow">▲</span></a></span></div></div></div></div>
<div id="infoMessage" class="p-0 mb-0 alert alert-info" aria-live="polite" style="display: block;" data-current-section-value=""> <span aria-hidden="false"></span><span aria-hidden="true">Texto digitado livremente</span></div>
<div id="lembrete"><table width="100%" class="infraTable" summary="Lembretes">
<tbody><tr><th width="1%" class="infraTh">Lembretes <button type="button" accesskey="FF" name="btnFecharLembretes" id="btnFecharLembretes" onclick="fecharLembretes();" class="infraButton">Fechar</button></th></tr>
<tr><td><div class="novoMinutaLembrete" style="display:block;background-color:#ffffff"><label>Novo lembrete:</label><textarea id="textareaNovoMinutaLembrete" style="background-color:#ffffff; font-family: arial,verdana,helvetica,sans-serif;font-size: 10pt;width: 100%; border: 1px #D3D3D3;  border-style:groove; padding: 0px; color: black;;"></textarea></div></td></tr>
</tbody></table></div>
<div id="divInfraAreaDados" class="infraAreaDados" style="height: calc(-185.609px + 100vh);">
<input type="hidden" id="txtModelo" name="txtModelo" class="infraText" maxlength="100" value=""><input type="hidden" id="hdnIdModelo" name="hdnIdModelo" value=""><input type="hidden" id="txtDocumentoBase" name="txtDocumentoBase" class="infraText" maxlength="100" value=""><input type="hidden" id="hdnIdDocumentoBase" name="hdnIdDocumentoBase" value=""><input type="hidden" style="display:none" id="txtTextoPadrao1" name="txtTextoPadrao1" class="infraText" maxlength="100" value=""><input type="hidden" id="hdnTextoPadrao1" name="hdnTextoPadrao1" value=""><table id="tabelaTextoPadrao" style="display: none;"><thead><tr><th></th></tr></thead><tbody><tr><td></td></tr></tbody></table><input type="hidden" id="txtTag" name="txtTag"><input type="hidden" id="hdnTag" name="hdnTag"><input type="hidden" id="hdnNumProcessoLista" name="hdnNumProcessoLista" value="50294957220218240018"><input type="hidden" id="hdnTehdnIdMinutaListaxtoPadrao1" name="hdnIdMinutaLista" value="321770737414589209876472877413"><div id="Body"><div id="Content" style="width: 21cm;"><!--?xml version="1.0" encoding="ISO-8859-1"?-->

	
		<meta charset="ISO-8859-1">
		<title>Documento:7379729</title>
		<style>@media screen {
    .rodape {
        color: green;
        background-color: yellow;
        vertical-align: super;
        font-size: 8pt;
        text-align: left;
        font-family: 'Times New Roman', Georgia, Times, serif;
        cursor: pointer;
    }
    .cke_editable .destacado {
        background-color: #90a4ae;
        overflow: hidden !important;
    }
}
@media screen,print {
    .cke_editable
    {
        margin-top: 0;
        margin-right: 10%;
        margin-left: 15%;
        margin-bottom: 0;
        padding-bottom:20px;
        border-bottom-color:#caced0;
        border-bottom-style:dotted;
    }
    .widgetlinkdocumento{
        display: inline!important;
    }

    .widgetlinkvideoaudiencia{
        display: inline!important;
    }

    .cke_widget_inline {
        display: inline!important;
    }

    .cke_widget_inline {
        display: inline!important;
    }

    p
    {
        word-wrap:break-word;

    }


    .paragrafoPadrao
    {
        font-size: 13pt;
        text-indent: 0.98in;
        margin-right: 0.02in;
        font-family: 'Times New Roman', Georgia, Times, serif;
        text-align: justify;
        margin-top:5mm;
        margin-bottom:5mm;
        line-height: 1.2em;
    }
    p&gt;span,p&gt;strong,p&gt;em,p&gt;u,p&gt;strike{ text-indent: 0in;}

    .paragrafoComRecuo
    {
        font-size: 13pt;
        margin-left: 0.98in;
        margin-right: 0.02in;
        font-family: 'Times New Roman', Georgia, Times, serif;
        text-align: justify;
        margin-top:5mm;
        margin-bottom:5mm;
        line-height: 1.2em;
    }

    .paragrafoSemRecuo
    {
        font-size: 13pt;
        font-family: 'Times New Roman', Georgia, Times, serif;
        text-align: justify;
        margin-top:5mm;
        margin-bottom:5mm;
        line-height: 1.2em;
    }
    .paragrafoCentralizado
    {
        font-size: 13pt;
        font-family: 'Times New Roman', Georgia, Times, serif;
        text-align: center;
        margin-top:5mm;
        margin-bottom:5mm;
        line-height: 1.2em;
    }
    .destinatario
    {
        font-size: 11pt;
        font-family: 'Times New Roman', Georgia, Times, serif;
        text-align: justify;
        padding:0px;
        margin-top:0mm;
        margin-bottom:0mm;
    }
    .titulo
    {
        FONT-WEIGHT: bold;
        FONT-SIZE: 16pt;
        PADDING-BOTTOM: 10px;
        TEXT-TRANSFORM: uppercase;
        PADDING-TOP: 10px;
        TEXT-ALIGN: center;
        font-family: 'Times New Roman', Georgia, Times, serif;
    }
    .subtitulo
    {

        FONT-WEIGHT: bold;
        FONT-SIZE: 13pt;
        PADDING-BOTTOM: 5px;
        TEXT-TRANSFORM: uppercase;
        PADDING-TOP: 5px;
        TEXT-ALIGN: justify;
        font-family: 'Times New Roman', Georgia, Times, serif;
    }

    .citacao
    {
        font-size: 11pt;
        margin-left: 0.98in;
        font-style: italic;
        font-family: 'Times New Roman', Georgia, Times, serif;
        text-align: justify;
        margin-top:5mm;
        margin-bottom:5mm;
        line-height: 1.2em;
    }

    .citacao2
    {
        font-size: 11pt;
        margin-left: 1.18in;
        margin-right: 0.2in;
        font-style: italic;
        font-family: 'Times New Roman', Georgia, Times, serif;
        text-align: justify;
        margin-top:5mm;
        margin-bottom:5mm;
        line-height: 1.2em;
    }

    .tabela, td, th
    {
        font-size: 10pt;
        text-align: justify;
        vertical-align:text-top;
        padding:1px;
        margin-top: 0;
        margin-bottom: 0;
    }

    .caputEmenta
    {
        font-size: 13pt;
        margin-left: 0.98in;
        text-transform: uppercase;
        margin-right: 0.2in;
        font-family: 'Times New Roman', Georgia, Times, serif;
        text-align: justify;
        margin-top:5mm;
        margin-bottom:5mm;
        line-height: 1.2em;
    }

    .cartaPadrao
    {
        font-size: 10pt;
        font-family: 'Times New Roman', Georgia, Times, serif;
        text-align: justify;
        text-indent: 0.98in;
        margin-right: 0.02in;
        margin-top:2mm;
        margin-bottom:2mm;
        line-height: 11pt;
    }

    .cartaComRecuo
    {
        font-size: 10pt;
        font-family: 'Times New Roman', Georgia, Times, serif;
        text-align: justify;
        margin-left: 0.98in;
        margin-right: 0.02in;
        margin-top:2mm;
        margin-bottom:2mm;
        line-height: 11pt;
    }

    .cartaSemRecuo
    {
        font-size: 10pt;
        font-family: 'Times New Roman', Georgia, Times, serif;
        text-align: justify;
        margin-top:2mm;
        margin-bottom:2mm;
        line-height: 11pt;
    }

    .cartaCompacta
    {
        font-size: 9pt;
        font-family: 'Times New Roman', Georgia, Times, serif;
        text-align: justify;
        margin-top:1mm;
        margin-bottom:1mm;
        line-height: 9pt;
    }

} /* The declarations for print output */
@media print {
  * {color: black !important; text-shadow: none !important; filter:none !important; -ms-filter: none !important; } /* Black prints faster: h5bp.com/s */
  a, a:visited { text-decoration: underline; }
  /* a[href]:after { content: ' (' attr(href) ')'; } */
  abbr[title]:after { content: ' (' attr(title) ')'; }
  .ir a:after, a[href^='javascript:']:after, a[href^='#']:after { content: ''; }  /* Don't show links for images, or javascript/internal links */
  pre, blockquote { border: 1px solid #999; page-break-inside: avoid; }
  thead { display: table-header-group; } /* h5bp.com/t */
  tfoot { display: table-footer-group; }
  tr, img { page-break-inside: auto; }
  img { max-width: 100% !important; }
  p, h2, h3 { orphans: 3; widows: 3;}
  h2, h3 { page-break-after: avoid; }
  #envelope{   width:21cm; }
  #envelope thead tr td {width:21cm; margin-left: 0;margin-right:0; }
  #envelope tbody tr td {width:21cm; margin-left: 0;margin-right:0; }
  #envelope tfoot tr td {width:21cm; margin-left: 0;margin-right:0; }
  header{ margin-left:2.2cm; margin-right:1.46cm; }
  section{ margin-left:2.2cm; margin-right:1.46cm; }
  footer{ margin-left:2.2cm; margin-right:1.46cm; }

.resumo,.ementaJulgamentoPerspectivaGenero {
    background-color: unset !important;
}

.rodape {
	vertical-align: super;	
	font-size: 8pt;
    text-align: left;
	font-family: 'Times New Roman', Georgia, Times, serif;
}
.notas_fim_texo { 
	vertical-align: super;
	font-size: 10pt;
    text-align: justify;
	font-family: 'Times New Roman', Georgia, Times, serif;	
	word-wrap:break-word;
}
.timbre_mandado_carimbo_dados_complementares{
    display: none;
}

}

/*SCREEN*/
@media screen, print {
.cke_editable 
{ 
	margin-top:0px; 
	margin-right:10%; 
	margin-left:15%;
	margin-bottom: 0px; 	
	padding-bottom:0px;
	padding-top:0px;
}

.dispositivo{
	color: #6495ed !important;
} 
.dispositivo [style]{
    color: #6495ed !important;
}


div.decisaoExtrato {
    margin-top:20px;
    margin-bottom:20px;
}

div.decisaoAta {
    margin-top:20px;
    margin-bottom:20px;
    font-size: 10pt;
}

.notas_fim_texo {
	vertical-align: super;
	font-size: 10pt;
    text-align: justify;
	font-family: 'Times New Roman', Georgia, Times, serif;	
	word-wrap:break-word;
}

.timbre_brasao{
	margin: 0;
	text-align: center;
	display: inline-block;
	width:100%;
}

.timbre_brasao img{
	height:76px;
}
.timbre_instancia{
	font-weight: bold;
	font-size: 14pt;
	text-align: center;
	text-transform: uppercase;
	font-family: 'Times New Roman', Georgia, Times, serif;
	margin:0 auto;
	width:100%;
}
.timbre_secao_judiciaria,.timbre_poder,.timbre_orgao{
	font-weight: bold;
	font-size: 14pt;
	text-align: center;
	font-family: 'Times New Roman', Georgia, Times, serif;
	margin:0 auto;
	width:100%;
}
.timbre_orgao{
	font-weight: bold;
	font-size: 14pt;
	text-align: center;
	font-family: 'Times New Roman', Georgia, Times, serif;
	margin:0 auto;
	width:100%;
	margin-bottom:0.5em;
	margin-top:0.0em;
}

#timbre_brasao_ar img{
	display: inline;
	margin: -7px 0 0 0;
}
#timbre_brasao_ar_2 img{
    margin: -6px 0 0 0;
    width: 66px;
    height: 66px;
    text-align: center;
    display:block;
}
span.partes_ar{
	display: none;
}
section.partes_ar div div{
    font-size: 10pt;
	line-height: 11pt;
    margin-bottom:0;
}
#titulo_ar{
	font-size: 14pt;
	margin-bottom:1mm;
	margin-top:2mm;
	padding: 0;
}
section.titulo_ar p.titulo{
	font-size: 14pt;
	font-weight: bold;
	text-transform: uppercase;
	font-family: 'Times New Roman', Georgia, Times, serif;
	margin-bottom:0;
	margin-top:2mm;
	line-height:15pt;
	padding: 0;
}
section.identificacao_processo_ar p {
	font-size: 10pt;
    line-height: 11pt;
	margin-bottom: 2mm;
	margin-top: 2mm;
}
section.identificacao_processo_ar_2 p {
    font-size: 10pt;
    line-height: 11pt;
    margin-bottom: 3px;
    margin-top: 3px;
}
p.endereco_ar{
	font-size: 8pt;
    font-family: 'Times New Roman', Georgia, Times, serif;
    text-align: center;
    vertical-align:text-top;
    padding:1px;
    line-height: 8pt;
}
section.tarja_assinatura_ar {
    margin-top: 6px;
    margin-bottom: 3px;
}
section.tarja_assinatura_ar, section.tarja_assinatura_ar p.tarja_assinatura{
	font-size: 8pt;
	font-family: 'Times New Roman', Georgia, Times, serif;
	text-align: justify;
	line-height: 8pt;
}
section.tarja_assinatura_ar p.assinante_indicado, section.tarja_assinatura_ar p.tratamento_assinante_indicado{
	padding-bottom: 5px;
	padding-top: 5px;
}
section.tarja_assinatura_ar hr{
    margin-bottom: 0;
    margin-top: 0;
}
section.tarja_assinatura_ar br {
    display: none;
}
section.notas_ar hr{
    margin-bottom: 0;
    margin-top: 0;
}
section.notas_ar div.notas_fim_texo{
	font-size:8pt;
}
.footer_ar, div#rodape_esquerda_ar, div#rodape_direita_ar{
    display: none;
}

.identificacao_processo{
	font-size: 12pt;
	font-family: 'Times New Roman', Georgia, Times, serif; 
	font-weight: bold;
	text-transform: uppercase;
	margin-bottom:0.8em;
	margin-top:1em;
}
.identificacao_processo_originario{
	font-size: 10pt;
}
.label_processo_originario{
	font-weight: bold;
}
.autores, .reus, .outros{
	text-align: left;
	font-size: 10pt;
	font-family: 'Times New Roman', Georgia, Times, serif; 
}
.relatores{
    text-align: left;
    font-size: 10pt;
    font-family: 'Times New Roman', Georgia, Times, serif;
}
.parte_autor, .parte_re, .parte_outros{
	display:block;
	margin-bottom:0.5em;
}
.relator, .procurador, .pedido, .revisor {
    display:block;
    margin-bottom:0.5em;
    font-size: 10pt;
}
.parte, .representante{
	padding:0px;
}
.cabecalhoPauta {
    text-align: justify;
    font-size: 10pt;
    font-family: 'Times New Roman', Georgia, Times, serif;
}
.cabecalhoAta {
    text-align: justify;
    font-size: 12pt;
    font-family: 'Times New Roman', Georgia, Times, serif;
}
.identificacaoOrdemSessao {
    font-weight: bold;
}
.DataPauta, .DataAta {
    text-align: center;
    font-size: 10pt;
    font-family: 'Times New Roman', Georgia, Times, serif;

}
.AssinaturaPauta{
    text-align: center;
    font-size: 10pt;
    font-family: 'Times New Roman', Georgia, Times, serif;
}
p
{
	margin-bottom:0px;
	margin-top:0px;	
}

p+p[class='representante']
p+p[class='parte']
{
	margin-top:-0.5em;
	padding: 0px;
}

.tipo_parte_representante{
	font-weight: bold;
	/*display: inline-block;*/
	width: 100px;
	text-transform: uppercase;
}
.tipo_parte{
    font-weight: bold;
    /*display: inline-block;*/
    width: 100px;
    text-transform: uppercase;
}
.nome_parte{
    text-transform: uppercase;
}
.tipo_relator, .tipo_revisor{
    font-weight: bold;
    width: 100px;
    text-transform: uppercase;
}
.nome_relator, .nome_revisor{
    text-transform: uppercase;
}
.nome_parte_representante{
    text-transform: uppercase;
}
.legenda_apensos_art_28_LEF{
	font-weight: bold;
	font-size: 10pt;
	/*display: inline-block;*/
	text-transform: uppercase;
}

.apensos_art_28_LEF{
	/*display: inline-block;*/
	font-size: 10pt;
	text-transform: uppercase;
}
p[class='representante'] span[class='tipo_parte_representante']{
	margin-top:-0.5em;
	padding: 0px;
}

.titulo{
	font-weight: bold;
    font-size: 16pt;
    text-transform: uppercase;
    text-align: center;
	font-family: 'Times New Roman', Georgia, Times, serif;
	display:block;
	margin-bottom:1em;
	margin-top:1em;
}

.titulo_sublinhado {
    text-decoration: underline;
    font-weight: bold;
    font-size: 16pt;
    text-transform: uppercase;
    text-align: center;
    font-family: 'Times New Roman', Georgia, Times, serif;
    display: block;
    margin-bottom: 1em;
    margin-top: 1em;
}

.endereco
{
	font-size: 10pt;
    font-family: 'Times New Roman', Georgia, Times, serif;
    text-align: center;
    vertical-align:text-top;
    padding:1px;
}

footer{
	display: flex;
	justify-content: space-between;
}
.rodape_esquerda { 
	
	font-size: 11pt;
	font-family: 'Times New Roman', Georgia, Times, serif; 
	font-weight: bold; 
	float:left;
	padding:5px 0px 0px 0px;
	
}
.rodape_direita { 
	
	font-size: 11pt;
	font-family: 'Times New Roman', Georgia, Times, serif; 
	font-weight: bold; 
	float:right;
	padding:5px 0px 0px 0px;
	
}

.usuario_editor_documento_rodape
{ 
	margin-right: 15px;
}


    article a {
	
	text-decoration: none;
	
	font-weight: bold;
    text-align: center;
	font-family: 'Times New Roman', Georgia, Times, serif;
	
}

    article a:hover {
	color: green;
	
}
.notas {
	padding: 0 0 0 0;
}

div.rodape {
	margin: 0 0 15px 0;
}

.assinante_indicado
{
	font-size: 12pt;
	font-weight: bold;
    text-align: center;
	font-family: 'Times New Roman', Georgia, Times, serif;
}
.tratamento_assinante_indicado
{
	font-size: 12pt;
	font-weight: bold;
    text-align: center;
	font-family: 'Times New Roman', Georgia, Times, serif;
}
section[data-nome='assinaturas']{
	text-align:center;
}

.tarja_assinatura{
	font-size: 10pt;
    font-family: 'Times New Roman', Georgia, Times, serif;
    text-align: justify;

	}
.tarja_publicacao_prazos{
    font-weight: bold;
    font-size: 10pt;
    font-family: 'Times New Roman', Georgia, Times, serif;
    text-align: justify;
}
.timbre_tarja_publicacao_prazos {
    position:absolute;
    top:30px;
    left:65%;
    border:1px solid;
}
.tarja_sessao_julgamento{
    font-weight: bold;
    font-size: 10pt;
    font-family: 'Times New Roman', Georgia, Times, serif;
    text-align: center;
}
.timbre_tarja_sessao_julgamento {
    position:absolute;
    top:30px;
    left:65%;
    border:1px solid;
}
.timbre_mandado_carimbo_ceman {
    position:absolute;
    top:30px;
    left:20%;
}
.timbre_mandado_carimbo_dados_complementares{
    position:absolute;
    top:25px;
    left:65%;
    width: 100px;
    text-align: center;
}
.timbre_mandado_carimbo_urgencia {
	position:absolute;
	top:30px;
	left:79%;
    width: 100px;
    text-align: center;
}
.tarja_mandado_carimbo_urgencia{
    font-weight: bold;
    font-size: 12pt;
    font-family: 'Times New Roman', Georgia, Times, serif;
    text-align: center;
    border:1px solid;
    padding: 7px;
}
.tarja_mandado_carimbo_urgencia_prioridade_com_data, .tarja_mandado_carimbo_urgencia_prioridade_com_descricao {
    font-weight: bold;
    font-size: 12pt;
    font-family: 'Times New Roman', Georgia, Times, serif;
    text-align: center;
    position: absolute;
    z-index: 100;
}

.tarja_mandado_carimbo_urgencia_prioridade_com_data {
    top: 30px;
    left: 15px;
}

.tarja_mandado_carimbo_urgencia_prioridade_com_descricao {
    top: 20px;
    width: 100%;
}

article{
    position:relative;
}
} .cke_editable 
{ 
	background-color: #ffffff;
	border: 1px solid #ffffff;	
}
p
{
	color: #052229;
}

.resumo{
		background-color: #D3D3D3;
}
.texto_oculto {
    text-decoration-color: darkred;
    text-decoration-style: dashed;
    text-decoration-thickness: 1px;
    text-decoration-line: line-through;
}
.dispositivo{
	color: #0000FF !important;
}
.dispositivo [style]{
    color: #0000FF !important;
}
.ementaJulgamentoPerspectivaGenero{
    background-color: #ADD8E6;
}
 @media screen,print {
    article.naoassinada{
        background-size: 2rem !important;
        background: url('./imagens/carimbo_minuta_nao_assinada.png') repeat-y left top;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
        padding: 35px;
        margin-right: -30px;
    }
    article.naoanexada {
        background-size: 2rem !important;
        background: url('./imagens/carimbo_minuta_nao_anexada.png') repeat-y left top;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
        padding: 35px;
    }
}</style>
	
	
		<article class="naoassinada" data-id_documento="321770737414589209876472877413" data-cod_documento="7379729" data-id_modelo="41479478118717491014664380816" data-timestamp="1770748833" data-temidparagrafos="true"><div class="d-flex justify-content-between">
    <div class="ml-2 pl-4 precedente-relevante-da-minuta">
                
        
        
            </div>
    <div class="mr-2 pr-4 status-da-minuta">
        <div style="font-size: 10pt" class="badge badge-pill alert-success" role="status" aria-label="Conferida">Conferida</div>    </div>
</div>
<header id="7379729_1" style="visibility: hidden; display: none;">
				<div class="timbre_brasao"><img src="data:image/png;base64,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"></div> 
				<div class="timbre_poder">ESTADO DE SANTA CATARINA </div> 
				<div class="timbre_instancia">TRIBUNAL DE JUSTIÇA </div> 
                                <div class="timbre_tarja_sessao_julgamento" style="display:none;">
			</div></header><div id="cke_7379729_1" class="cke_5 cke cke_reset cke_chrome cke_editor_7379729_1 cke_ltr cke_browser_webkit" dir="ltr" lang="pt-br" role="application" aria-labelledby="cke_7379729_1_arialbl"><span id="cke_7379729_1_arialbl" class="cke_voice_label">Editor de Rich Text, 7379729_1</span><div class="cke_inner cke_reset" role="presentation"><div id="cke_5_contents" class="cke_contents cke_reset" role="presentation" style="height: 126px;"><span id="cke_67" class="cke_voice_label">Pressione ALT+0 para ajuda</span><iframe src="" frameborder="0" class="cke_wysiwyg_frame cke_reset" title="Editor, 7379729_1" aria-describedby="cke_67" tabindex="-1" allowtransparency="true" style="width: 100%; height: 100%;"></iframe></div></div></div>
<section id="7379729_2" contenteditable="false" data-nome_apresentacao="Endereço" data-nome="endereco" data-sin_conteudo_obrigatorio="true" data-estilo_padrao="endereco" style="visibility: hidden; display: none;">
				<p class="endereco">
			</p></section><div id="cke_7379729_2" class="cke_6 cke cke_reset cke_chrome cke_editor_7379729_2 cke_ltr cke_browser_webkit" dir="ltr" lang="pt-br" role="application" aria-labelledby="cke_7379729_2_arialbl"><span id="cke_7379729_2_arialbl" class="cke_voice_label">Editor de Rich Text, 7379729_2</span><div class="cke_inner cke_reset" role="presentation"><div id="cke_6_contents" class="cke_contents cke_reset" role="presentation" style="height: 20px;"><span id="cke_84" class="cke_voice_label">Pressione ALT+0 para ajuda</span><iframe src="" frameborder="0" class="cke_wysiwyg_frame cke_reset" title="Editor, 7379729_2" aria-describedby="cke_84" tabindex="-1" allowtransparency="true" style="width: 100%; height: 100%;"></iframe></div></div></div>
<section id="7379729_3" contenteditable="false" data-nome_apresentacao="Identificação do Processo" data-nome="identificacao_processo" data-sin_conteudo_obrigatorio="true" data-estilo_padrao="identificacao_processo" style="visibility: hidden; display: none;">
			<p class="identificacao_processo">
				</p><p class="identificacao_processo"><span data-classe_processo="94">Apelação Criminal </span><span data-numero_processo="50294957220218240018" data-sin_numero_processo="true"> Nº 5029495-72.2021.8.24.0018/</span><span data-origem_processo="SC">SC</span></p>
			<p></p>
                        </section><div id="cke_7379729_3" class="cke_7 cke cke_reset cke_chrome cke_editor_7379729_3 cke_ltr cke_browser_webkit" dir="ltr" lang="pt-br" role="application" aria-labelledby="cke_7379729_3_arialbl"><span id="cke_7379729_3_arialbl" class="cke_voice_label">Editor de Rich Text, 7379729_3</span><div class="cke_inner cke_reset" role="presentation"><div id="cke_7_contents" class="cke_contents cke_reset" role="presentation" style="height: 101px;"><span id="cke_101" class="cke_voice_label">Pressione ALT+0 para ajuda</span><iframe src="" frameborder="0" class="cke_wysiwyg_frame cke_reset" title="Editor, 7379729_3" aria-describedby="cke_101" tabindex="-1" allowtransparency="true" style="width: 100%; height: 100%;"></iframe></div></div></div>
<section id="7379729_4" contenteditable="false" data-nome_apresentacao="Relator" data-nome="relator" data-sin_conteudo_obrigatorio="true" style="visibility: hidden; display: none;">
				<div class="relatores"><p class="relator" data-cod_magistrado="8052" data-sin_relator="true"><span class="tipo_relator">RELATOR</span>: <span class="nome_relator">Desembargador ALEXANDRE MORAIS DA ROSA</span></p></div>
			</section><div id="cke_7379729_4" class="cke_8 cke cke_reset cke_chrome cke_editor_7379729_4 cke_ltr cke_browser_webkit" dir="ltr" lang="pt-br" role="application" aria-labelledby="cke_7379729_4_arialbl"><span id="cke_7379729_4_arialbl" class="cke_voice_label">Editor de Rich Text, 7379729_4</span><div class="cke_inner cke_reset" role="presentation"><div id="cke_8_contents" class="cke_contents cke_reset" role="presentation" style="height: 25px;"><span id="cke_118" class="cke_voice_label">Pressione ALT+0 para ajuda</span><iframe src="" frameborder="0" class="cke_wysiwyg_frame cke_reset" title="Editor, 7379729_4" aria-describedby="cke_118" tabindex="-1" allowtransparency="true" style="width: 100%; height: 100%;"></iframe></div></div></div>
<section id="7379729_5" contenteditable="false" data-nome_apresentacao="Partes" data-nome="partes" data-sin_conteudo_obrigatorio="true" style="visibility: hidden; display: none;">
				<div class="autores" data-polo="autores"><div class="parte_autor" data-sin_parte_principal="S" data-parte_polo="autor" data-sin_parte_entidade="false"><p class="parte" data-sin_parte="true" data-id_processo_parte="321768409941203996622535728664"><span class="tipo_parte">APELANTE</span>: <span class="nome_parte">SIDINEI ALBERTI (ACUSADO)</span></p></div></div><div class="reus" data-polo="reus"><div class="parte_re" data-sin_parte_principal="S" data-parte_polo="reu" data-sin_parte_entidade="true"><p class="parte" data-sin_parte="true" data-id_processo_parte="321768409941203996622535728662"><span class="tipo_parte">APELADO</span>: <span class="nome_parte">MINISTÉRIO PÚBLICO DO ESTADO DE SANTA CATARINA (AUTOR)</span></p></div></div>
			</section><div id="cke_7379729_5" class="cke_9 cke cke_reset cke_chrome cke_editor_7379729_5 cke_ltr cke_browser_webkit" dir="ltr" lang="pt-br" role="application" aria-labelledby="cke_7379729_5_arialbl"><span id="cke_7379729_5_arialbl" class="cke_voice_label">Editor de Rich Text, 7379729_5</span><div class="cke_inner cke_reset" role="presentation"><div id="cke_9_contents" class="cke_contents cke_reset" role="presentation" style="height: 47px;"><span id="cke_135" class="cke_voice_label">Pressione ALT+0 para ajuda</span><iframe src="" frameborder="0" class="cke_wysiwyg_frame cke_reset" title="Editor, 7379729_5" aria-describedby="cke_135" tabindex="-1" allowtransparency="true" style="width: 100%; height: 100%;"></iframe></div></div></div>
<section id="7379729_6" contenteditable="false" data-nome_apresentacao="Título Relatório" data-nome="titulo_relatorio" data-sin_conteudo_obrigatorio="true" data-estilo_padrao="titulo" style="visibility: hidden; display: none;">
                                <p class="titulo">RELATÓRIO</p>
                        </section><div id="cke_7379729_6" class="cke_10 cke cke_reset cke_chrome cke_editor_7379729_6 cke_ltr cke_browser_webkit" dir="ltr" lang="pt-br" role="application" aria-labelledby="cke_7379729_6_arialbl"><span id="cke_7379729_6_arialbl" class="cke_voice_label">Editor de Rich Text, 7379729_6</span><div class="cke_inner cke_reset" role="presentation"><div id="cke_10_contents" class="cke_contents cke_reset" role="presentation" style="height: 70px;"><span id="cke_152" class="cke_voice_label">Pressione ALT+0 para ajuda</span><iframe src="" frameborder="0" class="cke_wysiwyg_frame cke_reset" title="Editor, 7379729_6" aria-describedby="cke_152" tabindex="-1" allowtransparency="true" style="width: 100%; height: 100%;"></iframe></div></div></div>
<section id="7379729_7" contenteditable="true" data-nome_apresentacao="Relatório" data-nome="relatorio" data-sin_conteudo_obrigatorio="true" data-sin_permite_texto_padrao="true" data-estilo_padrao="paragrafo" style="visibility: hidden; display: none;">
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="dd67190b46c74bcbad9f9adcb162f32eabaa37914633390317fd0ab930a158d4" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_1" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_1">Trata-se de <strong>recurso de apelação</strong>&nbsp;interposto por&nbsp;<strong><span data-crc32b="aa3c5600" class="anonimizar">SIDINEI ALBERTI</span></strong>&nbsp;contra sentença que condenou o apelante pela prática do crime descrito no art. 2º, II, c/c art.&nbsp;12,&nbsp;I, ambos da Lei 8.137/1990, por vinte e três vezes, na forma do art. 71 do Código Penal.</p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="a10bddabbbc2f5f8b95d2c5786d7f5b7d39047fc7c62aeb76402686b83ad8b97" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_2" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_2">Em homenagem aos princípios da celeridade e da economia processual [<em>CR, art. 5º, LXXVIII</em>], adota-se o relatório da sentença como parte integrante deste acórdão:</p>
<table border="0" cellspacing="0" data-codtipoconteudo="4" data-hash="e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_3" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_3" style="background-color:#f9f9f9; border-collapse:collapse; font-family:Arial,sans-serif; margin-bottom:20px; text-align:left; width:591px"><tbody><tr><td style="background-color:#ffffff; border-color:#ffffff; width:90px"><p class="cartaSemRecuo">&nbsp;</p></td><td style="background-color:#f9f9f9; border-color:#f9f9f9; text-align:right; width:5px"><p class="cartaSemRecuo">&nbsp;</p></td><td style="background-color:#f9f9f9; border-color:#f9f9f9; text-align:right; width:465px"><p class="cartaSemRecuo">O&nbsp;<strong>Ministério Público do Estado de Santa Catarina</strong>, no uso e gozo de suas atribuições constitucionais (art. 129, I, da CF) e infraconstitucionais (art. 24 do CPP), ofereceu denúncia (art. 41 do CPP) contra&nbsp;<span data-crc32b="aa3c5600" class="anonimizar">SIDINEI ALBERTI</span>&nbsp;por ter infringido o disposto o art. 2º, inciso II, c/c art.&nbsp;12,&nbsp;I, ambos da Lei n. 8.137/90, c/c art. 71, caput, do Código Penal, conforme narrativa da denúncia de evento 1,&nbsp;<em>in verbis</em>:</p><p class="cartaSemRecuo" id="311764947208157509928866139277_3">O ICMS (Imposto sobre Operações Relativas à Circulação de Mercadorias e sobre Prestações de Serviços de Transporte Interestadual e Intermunicipal e de Comunicação) tem como fato gerador as operações relativas à circulação de mercadorias e serviços, o que obriga que sejam escrituradas em documentos e livros próprios todas as suas entradas e saídas no estabelecimento do contribuinte, a qualquer título.</p><p class="cartaSemRecuo" id="311764947208157509928866139277_4">Assim, deve o contribuinte remeter à repartição fazendária de seu domicílio uma via da GIA (Guia de Informação e Apuração do ICMS), na qual, a partir do movimento econômico, informa o saldo apurado em cada período e procede ao recolhimento do imposto entre o 10º e o 20º (variável, a depender tratar-se ou não de empresa sob o regime de tributação do Simples Nacional) dia do mês seguinte que ocorreram os fatos geradores. Destarte, a consumação deste delito ocorre no dia seguinte àquele em que o ICMS deveria ter sido recolhido ao Estado.</p><p class="cartaSemRecuo" id="311764947208157509928866139277_5">Nessa linha, na empresa AS Bebidas Eireli. (atual A.S. Transportes Eireli.)1 , CNPJ n. 07.342.939/0001-83 e Inscrição Estadual n. 25.496.032-4, com sede na Rua Borges de Medeiros, 1603-E, Bairro Passo dos Fortes, CEP 89805-570, nesta cidade e Comarca de Chapecó-SC, na época dos fatos administrada exclusivamente pelo denunciado&nbsp;<span data-crc32b="aa3c5600" class="anonimizar">Sidinei Alberti</span>&nbsp;conforme expressamente previsto na Cláusula 2ª da 7ª Alteração Contratual&nbsp;da&nbsp;Empresa2 , Cláusula 6ª da 8ª Alteração Contratual&nbsp;de&nbsp;Transformação&nbsp;em&nbsp;Eireli e Cláusula 6ª da 1ª Alteração Contratual Consolidada3 , e usufruindo dos poderes a ele conferidos, escriturou em documentos e em livro de apuração o tributo incidente sobre as operações tributáveis que realizou nos meses de junho, outubro&nbsp;de&nbsp;20184 , janeiro, março, abril, maio, junho, julho, agosto,&nbsp;setembro, outubro de 20195 , janeiro, fevereiro6 , março, abril, maio, junho, julho, agosto, setembro7 , outubro, novembro e dezembro de 20208 no importe de R$ 413.400,57, exclusivamente a título de imposto, de acordo com o demonstrativo de cálculo dos Termos de Inscrição em Dívida Ativa ns. 19047776243, 200001554673, 210005174058 e 210005189756, inscritos em 05.09.2019, 09.04.2020 e 12.07.2021, respectivamente.</p><p class="cartaSemRecuo" id="311764947208157509928866139277_6">Entretanto, apesar de devidamente escriturado, o sócioadministrador aqui denunciado não realizou e nem determinou o pagamento do tributo no vencimento, sendo que na qualidade de sujeito passivo da obrigação tributária deixou de efetuar, no prazo legal, o recolhimento do ICMS relativo às operações tributáveis que descontou ou cobrou dos destinatários e dos consumidores finais das mercadorias comercializadas e colocadas em circulação e dos tomadores da prestação de serviços de transporte, correspondente ao valor apurado, escriturado e declarado pelos próprios contribuintes em documentos e no Livro de Registro de Apuração do ICMS e na Guia de Informação e Apuração do ICMS e/ou DIME – Declaração do ICMS e do Movimento Econômico, cometendo apropriação indébita tributária.</p><p class="cartaSemRecuo" id="311764947208157509928866139277_7">Ademais, qualquer vantagem obtida pela respectiva empresa beneficia em especial e diretamente o denunciado&nbsp;<span data-crc32b="aa3c5600" class="anonimizar">Sidinei Alberti</span>, pois à época dos fatos que originaram os Termos de Inscrição em Dívida Ativa ns. 19047776243, 200001554673, 210005174058 e 210005189756, era ele que exercia o mister de administrá-la, com ciência e controle das transações e negócios realizados, inclusive obtendo lucro ou minimizando prejuízos com o não recolhimento do tributo devido.</p><p class="cartaSemRecuo" id="311764947208157509928866139277_8">Na qualidade de sócio e administrador, era o denunciado que mantinha o domínio do fato sobre as operações comerciais e empresariais, sendo o responsável pela regularidade das escriturações fiscais daquela pessoa jurídica, que assim atuava na condição de garantidor em relação à conduta de seus funcionários, contadores e prepostos, além de ser o responsável pela apuração e recolhimento do ICMS devido.</p><p class="cartaSemRecuo" id="311764947208157509928866139277_9">Oportuno consignar ainda que, mediante dolo e ardil, o&nbsp;denunciado&nbsp;<span data-crc32b="aa3c5600" class="anonimizar">Sidinei Alberti</span>&nbsp;não adimpliu a obrigação tributária e deixou de recolher o valor do imposto descontado ou cobrado e devido à correspondente circulação mercantil e aos serviços de transporte rodoviário efetuados pela referida empresa e assim lesou os cofres do Estado.</p><p class="cartaSemRecuo" id="311764947208157509928866139277_10">O débito decorrente dos Termos de Inscrição em Dívida Ativa ns. 19047776243, 200001554673, 210005174058 e 210005189756, tem o valor histórico de R$ 513.036,45 (quinhentos e treze mil, trinta e seis reais e quarenta e cinco centavos), correspondente a imposto + multa + juros, cujo valor atualizado, descontados os valores pagos no parcelamento cancelado, alcança o montante de R$ 525.510,54 (quinhentos e vinte e cinco mil, quinhentos e dez reais e cinquenta e quatro centavos), inscrito em "dívida ativas", não quitadas ou parceladas.</p><p class="cartaSemRecuo" id="311764947208157509928866139277_11">Registre-se que, diante desse expressivo valor sonegado e apropriado indevidamente pelo denunciado, com notável e grave dano à coletividade e ao Estado de Santa Catarina, faz-se necessária a incidência da causa especial de aumento de pena prevista no art. 12, inciso I, da Lei n. 8.137/90, que aduz: "São circunstâncias que podem agravar de 1/3 (um terço) até a metade as penas previstas nos arts. 1º, 2º e 4º a 7º: I – ocasionar grave dano à coletividade […]”, porquanto os Termos de Inscrição em Dívida Ativa acima relacionados e devidamente atualizados somam o valor de R$ 525.510,54 descontado ou cobrado, que foi apropriado criminosamente pelo denunciado ao deixar de recolher tais valores aos cofres públicos no prazo legal.</p><p class="cartaSemRecuo" id="311764947208157509928866139277_12">A denúncia&nbsp; recebida em 27/05/2022&nbsp; (ev. 4).</p><p class="cartaSemRecuo" id="311764947208157509928866139277_13">Citado pessoalmente (ev. 10), o acusado rejeitou a proposta de suspensão condicional do processo (ev. 15) e&nbsp;apresentou resposta à acusação (ev. 19), por intermédio de defensor constituído (ev. 11).</p><p class="cartaSemRecuo" id="311764947208157509928866139277_14">Não sendo hipótese de absolvição sumária, designou-se audiência de instrução e julgamento (ev. 22).</p><p class="cartaSemRecuo" id="311764947208157509928866139277_15">Durante a instrução, foi ouvida uma testemunha. Após, o réu foi interrogado. Nada foi requerido na fase do art. 402 do CPP (ev. 71).</p><p class="cartaSemRecuo" id="311764947208157509928866139277_16">O Ministério Público, em alegações finais por memoriais, requereu a procedência da pretensão acusatória, uma vez que a materialidade e autoria delitivas foram devidamente comprovadas pelas provas amealhadas aos autos (ev. 88).</p><p class="cartaSemRecuo" id="311764947208157509928866139277_17">A defesa, a seu turno, arguiu preliminarmente a prescrição e a inépcia da denúncia. No mérito, requereu a&nbsp;absolvição de&nbsp;<span data-crc32b="aa3c5600" class="anonimizar">Sidinei Alberti</span>, por atipicidade da conduta (art. 386, inciso III, do CPP), ante a ausência de enquadramento no art. 2º, inciso II, da Lei nº 8.137/1990, e por insuficiência de prova do dolo de apropriação (art. 386, inciso VII, do CPP). Subsidiariamente, a aplicação da pena no mínimo legal, com aumento de 1/2 pela continuidade delitiva (art. 71 do CP) e exclusão da agravante do art. 12, inciso I, da Lei nº 8.137/1990, ou sua aplicação no patamar mínimo (1/3). c) A concessão de suspensão condicional da pena (art. 77 do CP), caso condenado, se preenchidos os requisitos.</p></td><td style="background-color:#f9f9f9; border-color:#ffffff; text-align:right; width:5px">&nbsp;</td><td style="background-color:#ffffff; border-color:#ffffff; width:20px"><p class="cartaSemRecuo">&nbsp;</p></td></tr></tbody></table>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="3bef16afd28f67686a052bd505e437b8d35ce6796b67dd2184c3a23005cbbd4f" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_4" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_4"><strong>Sentença </strong>[ev. <span class="widgetlinkdocumento" data-iddocumento="311764952498809005488976218222" data-is2g="false" data-mimetype="html" data-numprocesso="50294957220218240018" data-page="" data-target="" data-uf="SC">100.1</span>]: o juízo de primeiro grau condenou os apelantes nos seguintes termos:</p>
<p class="citacao" id="321771237865452683411594702914_5">Ante o exposto,&nbsp;<strong>JULGO PROCEDENTE</strong>&nbsp;a denúncia para, com fulcro no artigo 387 do CPP, CONDENAR o réu&nbsp;<span data-crc32b="aa3c5600" class="anonimizar">SIDINEI ALBERTI</span>, qualificado nos autos, ao cumprimento&nbsp;<strong>de 1 (um) ano e 4 (quatro) meses de detenção e 26 (vinte e seis) dias-multa</strong>, à razão de 1/30 (um trigésimo) do salário-mínimo vigente à época dos fatos, pela prática do crime previsto no artigo 2º, inciso II c/c art.&nbsp;12,&nbsp;I, ambos da Lei 8.137/1990, em continuidade delitiva, por vinte e três vezes, na forma do artigo 71 do Código Penal.</p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="15681bfdca8c243973ee2542c567ca5603ea1f26ecf6d01d05071f4c4d1fe9e9" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_5" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_6"><strong>Razões da Apelação </strong>[ev. <span class="widgetlinkdocumento" data-iddocumento="311765801262831630039166491380" data-is2g="false" data-mimetype="pdf" data-numprocesso="50294957220218240018" data-page="1" data-target="" data-uf="SC">107.1</span>]:&nbsp;sustenta a ausência de provas suficientes da contumácia e dolo de apropriação necessários para configurar o delito, nos termos estabelecidos pelo Supremo Tribunal Federal.</p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="680a36bb02c6766d8974ea5765b42c0a62f226f1c5fc8e7abb650dc6cf0e49ed" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_6" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_7"><strong>Contrarrazões</strong> [ev. <span class="widgetlinkdocumento" data-iddocumento="311766000250556580238547903364" data-is2g="false" data-mimetype="pdf" data-numprocesso="50294957220218240018" data-page="1" data-target="" data-uf="SC">118.1</span>]:&nbsp;alega que o inadimplemento do tributo no prazo legal é suficiente para configurar a infração penal imputada. Requer a manutenção da sentença condenatória.</p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="47c7cbb3278b39f4fa9842df7df1697c81eed697cc1c4a880ddfaee069bde11e" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_7" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_8"><strong>Parecer da Procuradoria-Geral de Justiça </strong>[ev. <span class="widgetlinkdocumento" data-iddocumento="321768948128949169147655354594" data-is2g="true" data-mimetype="pdf" data-numprocesso="50294957220218240018" data-page="1" data-target="" data-uf="SC">8.1</span>]:&nbsp;manifesta-se pelo desprovimento do recurso,&nbsp;nos termos da argumentação do representante do Ministério Público de primeiro grau.</p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="2fc1020f88516cdbecb8c8033279c62307f82d3534cd6adc46d01db63b8034dd" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_8" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_9">É o breve relatório.</p></section><div id="cke_7379729_7" class="cke_14 cke cke_reset cke_chrome cke_editor_7379729_7 cke_ltr cke_browser_webkit" dir="ltr" lang="pt-br" role="application" aria-labelledby="cke_7379729_7_arialbl"><span id="cke_7379729_7_arialbl" class="cke_voice_label">Editor de Rich Text, 7379729_7</span><div class="cke_inner cke_reset" role="presentation"><div id="cke_14_contents" class="cke_contents cke_reset" role="presentation" style="height: 2277px;"><span id="cke_424" class="cke_voice_label">Pressione ALT+0 para ajuda</span><iframe src="" frameborder="0" class="cke_wysiwyg_frame cke_reset" title="Editor, 7379729_7" aria-describedby="cke_424" tabindex="0" allowtransparency="true" style="width: 100%; height: 100%;"></iframe></div></div></div>
<section id="7379729_8" contenteditable="false" data-nome_apresentacao="Título Voto" data-nome="titulo_voto" data-sin_conteudo_obrigatorio="true" data-sin_restringe_acesso_mpf="true" data-estilo_padrao="titulo" style="visibility: hidden; display: none;">
				<p class="titulo">VOTO</p>
			</section><div id="cke_7379729_8" class="cke_11 cke cke_reset cke_chrome cke_editor_7379729_8 cke_ltr cke_browser_webkit" dir="ltr" lang="pt-br" role="application" aria-labelledby="cke_7379729_8_arialbl"><span id="cke_7379729_8_arialbl" class="cke_voice_label">Editor de Rich Text, 7379729_8</span><div class="cke_inner cke_reset" role="presentation"><div id="cke_11_contents" class="cke_contents cke_reset" role="presentation" style="height: 70px;"><span id="cke_169" class="cke_voice_label">Pressione ALT+0 para ajuda</span><iframe src="" frameborder="0" class="cke_wysiwyg_frame cke_reset" title="Editor, 7379729_8" aria-describedby="cke_169" tabindex="-1" allowtransparency="true" style="width: 100%; height: 100%;"></iframe></div></div></div>
<section id="7379729_9" contenteditable="true" data-nome_apresentacao="Voto" data-nome="voto" data-sin_conteudo_obrigatorio="true" data-sin_permite_texto_padrao="true" data-estilo_padrao="paragrafo" data-sin_restringe_acesso_mpf="true" data-cod_recorte_obrigatorio="3" style="visibility: hidden; display: none;">
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="f275ed72c9b6575b228e933a2cd1672335bb79f0a4212ca6289413e3c676b1b6" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_9" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_10">1.&nbsp;<strong>ADMISSIBILIDADE</strong></p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="880114b812d1852deba13deb41dc7df261cca846f4046f551878686bf2f128d8" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_10" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_11">Conheço do recurso, por não vislumbrar nenhum óbice formal ou substancial ao seu prosseguimento.</p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="16536bdb736790794501fc9cf4f7d0113762bfbdf6b00aeae7eb904aae0e7d0c" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_11" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_12">2. <strong>MÉRITO</strong></p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="e68a84b52708e97b9607ea869355334877fbdf49b736e4c80d2fc90442b7688c" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_12" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_13">2.1. <strong>DOS PADRÕES DE VERIFICAÇÃO DA PREMISSA FÁTICA</strong></p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="6001cd459e8470ea5a6b09e75687fb15d3f9f00849941d152d23d442963f298a" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_13" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_14">Em geral, adotam-se quatro padrões de verificação da <em><strong>premissa fática </strong></em>[<em>PF</em>]:</p>
<table border="0" cellspacing="0" data-codtipoconteudo="4" data-hash="13b6044467967c6c61d954dd88c9046a11239e8a77fbe7bb5191842c14ebf4d8" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_14" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_15" style="background-color:#f9f9f9; border-collapse:collapse; box-sizing:border-box; color:#000000; font-family:Arial,sans-serif; font-size:14.08px; font-style:normal; font-variant-caps:normal; font-variant-ligatures:normal; font-weight:400; letter-spacing:normal; line-height:1; margin-bottom:20px; orphans:2; text-align:left; text-decoration-color:initial; text-decoration-style:initial; text-decoration-thickness:initial; text-transform:none; white-space:normal; widows:2; width:100%; word-spacing:0px"><tbody><tr><td style="background-color:#ffffff; border-color:#ffffff; box-sizing:border-box; font-size:10pt; margin-bottom:0px; margin-top:0px; padding:1px; text-align:justify; vertical-align:text-top; width:90px"><p class="cartaSemRecuo">&nbsp;</p></td><td style="background-color:#f9f9f9; border-color:#f9f9f9; box-sizing:border-box; font-size:10pt; margin-bottom:0px; margin-top:0px; padding:1px; text-align:right; vertical-align:text-top; width:5px"><p class="cartaSemRecuo">&nbsp;</p></td><td style="background-color:#f9f9f9; border-color:#f9f9f9; box-sizing:border-box; font-size:10pt; margin-bottom:0px; margin-top:0px; padding:1px; text-align:right; vertical-align:text-top; width:465px"><p class="cartaSemRecuo" id="321768403852890160216694922221_32">[1]&nbsp;<strong>Evidência Substancial</strong>. Denomina-se de Evidência Substancial [em geral no domínio do direito administrativo: multas e decisões do Executivo] o padrão de prova que exige algo mais do que a evidência formal do ato, isto é, algum suporte material [<em>substancial</em>]. A Suprema Corte dos EUA, em&nbsp;Richardson vs. Perales&nbsp;[<em>402 US 389; 1971</em>]&nbsp;definiu a evidência substancial [<em>relevante</em>] como a que uma pessoa razoável poderia aceitar como adequada para o fim de apoiar [<em>suportar</em>] uma conclusão válida, sólida e correta.</p><p class="cartaSemRecuo" id="321768403852890160216694922221_33">[2]&nbsp;<strong>Preponderância da Evidência</strong>. Denomina-se de Preponderância da Evidência o&nbsp;<em>standard&nbsp;</em>probatório orientado à atribuição do valor de verdade à hipótese que dentre as controvertidas apresentar, segundo o raciocínio lógico-jurídico empregado pelo órgão julgador, a probabilidade de verdade acima de 50%. A partir das hipóteses apresentadas e da prova produzida, o órgão julgador determina qual é a mais provável [<em>maior probabilidade; &gt; 50%</em>]. P. ex., acidente de trânsito. Se a prova favorecer ao autor acima de&nbsp;50%, o pedido será acolhido. Do contrário, será rejeitado.</p><p class="cartaSemRecuo" id="321768403852890160216694922221_34">[3]&nbsp;<strong>Evidências Claras e Convincentes</strong>. Denomina-se de Evidências Claras e Convincentes o padrão de prova aplicável em casos civis mais complexos e/ou delicados [restrições civis à liberdade; perda do poder familiar; tutelas, curatelas, interdições etc.], em que não basta a preponderância simples [acima de 50%], exigindo-se que as evidências sejam claras, convincentes, inequívocas, com força suficiente à conclusão de que a hipótese é mais provável [<em>verdadeira; certeza qualificada</em>] do que falsa, em geral acima de 70% de probabilidade [Corte Suprema EUA, Santosky vs. Kramer, <em>455 US 745; 1982</em>];</p><p class="cartaSemRecuo" id="321768403852890160216694922221_35">[4]&nbsp;<strong>Para Além da Dúvida Razoável</strong>. Denomina-se de Para Além da Dúvida Razoável o padrão de prova mais alto, exigido para atribuir o valor de verdade à hipótese acusatória [<em>HAc</em>] no domínio criminal, apto a alterar o&nbsp;<em>status&nbsp;</em>de inocente para condenado, em geral acima de 0,8 [80%]&nbsp;ou 0,9 [90%]&nbsp;de probabilidade de certeza [quase-certeza; por definição, afasta-se a possibilidade de se obter 100% de certeza; a decisão é probabilística]. Configura-se pela assertiva de que nenhuma pessoa razoável seria capaz de questionar a culpa do arguido diante do conjunto de provas válidas e sólidas que apoiam a inferência quanto ao valor de verdade da hipótese acusatória [<em>HAc</em>] - [Corte Suprema dos EUA,&nbsp;In Winship, <em>397 US 358, 364; 1970</em>].</p></td><td style="background-color:#f9f9f9; border-color:#ffffff; box-sizing:border-box; font-size:10pt; margin-bottom:0px; margin-top:0px; padding:1px; text-align:right; vertical-align:text-top; width:5px">&nbsp;</td><td style="background-color:#ffffff; border-color:#ffffff; box-sizing:border-box; font-size:10pt; margin-bottom:0px; margin-top:0px; padding:1px; text-align:justify; vertical-align:text-top; width:20px"><p class="cartaSemRecuo">&nbsp;</p></td></tr></tbody></table>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="371385829569e7069c43ad0f103fb20f4a3010fa952bda5ed6f2614e9a378e5e" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_15" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_16">Diante do estado inicial de inocência, o ônus da prova é de quem acusa, com força suficiente à alteração do estado inicial do acusado [<em>inocente para culpado</em>]. A pergunta a ser respondida é se do conjunto de provas [<em>análise holística</em>] pode-se inferir, para além da dúvida razoável, o valor de verdade da hipótese acusatória [<em>HAc</em>].&nbsp;</p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="1dd81093a526de6187a213cbdfa60870d65ae5cb80d5a254e88bbae27c46d238" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_16" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_17">Já a solidez da <em><strong>premissa fática</strong></em> [<em>PF</em>] exige a presença de prova válida e com magnitude [<em>força</em>] capaz de afastar a presunção de inocência, superando o&nbsp;<em>standard&nbsp;</em>probatório de referência, mediante provas robustas, coerentes e consistentes.</p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="456a84ef90a71621a38d2d561fbadeb79744738b6de2ecbe0cb6c8a0ebc92f9e" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_17" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_18">A depender do <em><strong>standard de prova</strong></em> adotado, nem sempre a existência de provas indiretas ou circunstanciais [antecedentes; concorrentes; subsequentes] será suficiente à alteração do valor de verdade da hipótese acusatória [<em>inicialmente falsa</em>].</p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="47f5e608ecf36f797063cb5dc1b2015e0a28a55dea43f0c2c7fdcfebe94f6a73" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_18" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_19">Em consequência, para fins penais, mostra-se necessária a <em><strong>superação da dúvida razoável</strong></em>.</p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="81f4e193a9622fc0fae4a1e5d33316df1d5d0a80026ea3793337be4adc991b34" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_19" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_20">2.2.&nbsp;<strong>APROPRIAÇÃO INDÉBITA TRIBUTÁRIA E DOLO ESPECÍFICO</strong></p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="62f7cda94d7319651acd85b3156e07af2513a9e7089188c17e2d86815103ee83" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_20" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_21">A responsabilização penal por crimes tributários orienta-se à punição de situações típicas de sonegação fiscal, com indicadores concretos da pretensão de realizar a conduta típica, não se confundindo com situações objetivas de inadimplemento.&nbsp;</p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="0d63cccec052b353cedd00f0c9412b1da98c0ad772584626a4be9cf8cfc47d6c" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_21" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_22">Se o agente frauda os documentos fiscais, incide no disposto no art. 1º da Lei n. 8.137/1990, apurando-se os atos concretos que pretenderam obter vantagem ilícita.&nbsp;</p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="9516505f97256d66899e68be74cd6a8aee5cc38fb34f1278b88891e52b8f70be" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_22" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_23">O contexto se altera quando não há fraude documental, mas sim inadimplência [<em>Lei 8.137/1990, art. 2º, II</em>], situação na qual o Pleno do Supremo Tribunal Federal, no julgamento do&nbsp;Recurso em <em><strong>Habeas Corpus 163334</strong></em>, estabeleceu vetores para a aferição do dolo necessário à configuração do delito de apropriação indébita tributária:</p>
<p class="citacao" data-codtipoconteudo="4" data-hash="5a69b39bdaa5adeaf02a00b93543b5e97be7ddad253aacfadc03ac5635697d82" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_23" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_24"><strong>Direito penal. Recurso em Habeas Corpus. Não recolhimento do valor de ICMS cobrado do adquirente da mercadoria ou serviço. Tipicidade.</strong></p>
<p class="citacao" data-codtipoconteudo="4" data-hash="9c7bb8cc3fb5e41a75ce31cd8cb7d5f24c8fd9bf36eaa9873f3daac5253f946d" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_24" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_25"><strong>1. O contribuinte que deixa de recolher o valor do ICMS cobrado do adquirente da mercadoria ou serviço apropria-se de valor de tributo, realizando o tipo penal do&nbsp;<em>art. 2º, II</em>, da Lei nº&nbsp;<em>8.137</em>/1990</strong>.&nbsp;</p>
<p class="citacao" data-codtipoconteudo="4" data-hash="0cfe8f2384b60c0537d1825b66976cac7edfaefb0d2b9c2ff8a7f96180d21d95" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_25" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_26">2. Em primeiro lugar, uma interpretação semântica e sistemática da regra penal indica a adequação típica da conduta, pois a lei não faz diferenciação entre as espécies de sujeitos passivos tributários, exigindo apenas a cobrança do valor do tributo seguida da falta de seu recolhimento aos cofres públicos.&nbsp;</p>
<p class="citacao" data-codtipoconteudo="4" data-hash="ca2488afe32d0e247a025367b875f49d10bd18c9a2516f56b7c7a68c430f3c57" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_26" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_27">3. Em segundo lugar, uma interpretação histórica, a partir dos trabalhos legislativos, demonstra a intenção do Congresso Nacional de tipificar a conduta. De igual modo, do ponto de vista do direito comparado, constata-se não se tratar de excentricidade brasileira, pois se encontram tipos penais assemelhados em países como Itália, Portugal e EUA.&nbsp;</p>
<p class="citacao" data-codtipoconteudo="4" data-hash="707609b2e5a572e16aba841c93ddad4e80677741382fb1a74106762e9791dd8e" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_27" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_28">4. Em terceiro lugar, uma interpretação teleológica voltada à proteção da&nbsp;ordem&nbsp;tributária e uma interpretação atenta às consequências da decisão conduzem ao reconhecimento da tipicidade da conduta. Por um lado, a apropriação indébita do ICMS, o tributo mais sonegado do País, gera graves danos ao erário e à livre concorrência. Por outro lado, é virtualmente impossível que alguém seja preso por esse delito.&nbsp;</p>
<p class="citacao" data-codtipoconteudo="4" data-hash="00e01cd6ae0a0557430925cb7f3a34ea46792c8bef84fe097fed3f6636959e6d" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_28" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_29"><u>5. Impõe-se, porém, uma interpretação restritiva do tipo, de modo que somente se considera criminosa a inadimplência sistemática, contumaz, verdadeiro modus operandi do empresário, seja para enriquecimento ilícito, para lesar a concorrência ou para financiar as próprias atividades.&nbsp;</u></p>
<p class="citacao" data-codtipoconteudo="4" data-hash="30af9e1192e20e41785950a3cf20f55d8bf98edb9c155e7819e51841be75ea3b" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_29" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_30"><u>6. A caracterização do&nbsp;crime&nbsp;depende da demonstração do dolo de apropriação, a ser apurado a partir de circunstâncias objetivas factuais, tais como o inadimplemento prolongado sem tentativa de regularização dos débitos, a venda de produtos abaixo do preço de custo, a criação de obstáculos à fiscalização, a utilização de “laranjas” no quadro societário, a falta de tentativa de regularização dos débitos, o encerramento irregular das suas atividades, a existência de débitos inscritos em dívida ativa em valor superior ao capital social integralizado etc.</u></p>
<p class="citacao" data-codtipoconteudo="4" data-hash="a7a4d7d3467f9edd8711a9b940faf0001c8a1af55bdbc055c3ae63b9365cd4dd" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_30" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_31">7. Recurso desprovido.&nbsp;</p>
<p class="citacao" data-codtipoconteudo="4" data-hash="175d6f181ff624f35f5535a34672a28e08775b660458b13fa7fdf48e8cb7c5e3" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_31" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_32"><strong>8. Fixação da seguinte tese: O contribuinte que deixa de recolher, de forma contumaz e com dolo de apropriação, o ICMS cobrado do adquirente da mercadoria ou serviço incide no tipo penal do&nbsp;<em>art. 2º, II</em>, da Lei nº&nbsp;<em>8.137</em>/1990"</strong><u>.</u>&nbsp;[STF, <strong>RHC 163334</strong>, Relator: ROBERTO BARROSO, Tribunal Pleno, julgado em 18/12/2019].</p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="93cb1a5d36e44f592137b8a5456cea542d730e87126034f8f72479c20fc8e2e6" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_32" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_33">Do corpo do voto, extrai-se:</p>
<table border="0" cellspacing="0" data-codtipoconteudo="4" data-hash="b80a1f2c9340f865722ca4e7d95030fb95b5f25da46970ada2a9d50320a61f50" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_33" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_34" style="background-color:#f9f9f9; border-collapse:collapse; font-family:Arial,sans-serif; margin-bottom:20px; text-align:left; width:591px"><tbody><tr><td style="background-color:#ffffff; border-color:#ffffff; width:90px"><p class="cartaSemRecuo">&nbsp;</p></td><td style="background-color:#f9f9f9; border-color:#f9f9f9; text-align:right; width:5px"><p class="cartaSemRecuo">&nbsp;</p></td><td style="background-color:#f9f9f9; border-color:#f9f9f9; text-align:right; width:465px"><p class="cartaSemRecuo">Como pontuou o Ministro-Presidente, proponho incluir na tese que não é quem deixou de pagar ICMS, eventualmente, em momento de dificuldade, ou pulou um, dois ou até três meses. É o devedor contumaz, que não paga quase que como estratégia empresarial, que lhe dá vantagem competitiva e permite que venda mais barato que os outros, induzindo os demais à mesma estratégia criminosa. O que estamos tentando enfrentar é o comportamento empresarial ilegítimo que gera concorrência desleal e, em muitos mercados, é muito evidente.</p></td><td style="background-color:#f9f9f9; border-color:#ffffff; text-align:right; width:5px">&nbsp;</td><td style="background-color:#ffffff; border-color:#ffffff; width:20px"><p class="cartaSemRecuo">&nbsp;</p></td></tr></tbody></table>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="da1113c2fd44c44904b78be63ecb02b80ded283fb3b9fb8fa469c21054711cf8" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_34" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_35">Sobre o referido julgado, destacando a necessidade de contumácia e dolo de apropriação para configurar o crime, dispõem <em><strong>Cézar Roberto Bitencourt</strong></em> e <em><strong>Luciana de Oliveira Monteiro</strong></em>:</p>
<table border="0" cellspacing="0" data-codtipoconteudo="4" data-hash="6e4aeaa44606424ffdb3ab2e09309d6940052b4667df80912e0e4b23e0dbd6ca" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_35" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_36" style="background-color:#f9f9f9; border-collapse:collapse; font-family:Arial,sans-serif; margin-bottom:20px; text-align:left; width:591px"><tbody><tr><td style="background-color:#ffffff; border-color:#ffffff; width:90px"><p class="cartaSemRecuo">&nbsp;</p></td><td style="background-color:#f9f9f9; border-color:#f9f9f9; text-align:right; width:5px"><p class="cartaSemRecuo">&nbsp;</p></td><td style="background-color:#f9f9f9; border-color:#f9f9f9; text-align:right; width:465px"><p class="cartaSemRecuo" id="321767880548549112627776069264_42">Neste aspecto, o reconhecimento, pelo Tribunal Pleno do STF, no julgamento do RHC 163.334, de que a caracterização do crime tipificado no art. 2º, II, “depende de demonstração do dolo de apropriação”, constitui uma importante contribuição jurisprudencial. É, de fato, relevante o esclarecimento, entre outros aspectos, de que “cabe ao Ministério Público, ao narrar a conduta, demonstrar que não se cuidou de um inadimplemento eventual do acusado, mas de ação premeditada dolosamente, voltada à lesão do erário em proveito próprio ou da empresa. Insuficiente, para a caracterização do dolo, alusão exclusivamente à escrituração e não recolhimento do ICMS, uma vez que a inobservância da técnica arrecadatória, por si só, não revela ânimo de prejudicar o Fisco”145.</p><p class="cartaSemRecuo" id="321767880548549112627776069264_43">No entanto, há de lamentar, como já explicitado anteriormente, o entendimento manifestado pela Corte Suprema, neste julgado paradigmático, ao apreciar o sentido da incriminação da conduta omissa “deixar de recolher, no prazo legal, valor de tributo cobrado”. Isso porque implicou em interpretação ampliativa da conduta típica, sem respaldo legal, ao estabelecer que: “o termo ‘cobrado’ deve ser compreendido nas relações tributárias havidas com tributos indiretos (incidentes sobre o consumo), de maneira que não possui relevância o fato de o ICMS ser próprio ou por substituição, porquanto, em qualquer hipótese, não haverá ônus financeiro para o contribuinte de direito”.</p><p class="cartaSemRecuo" id="321767880548549112627776069264_44">Demonstra-se o dolo do agente quando este efetivamente dispõe de dinheiro e não o recolhe como devido. Contudo, são amplamente discutidas na doutrina e na jurisprudência as hipóteses em que esse elemento subjetivo do tipo estaria realmente configurado e qual o seu alcance para efeito de caracterização da tipicidade, inclusive no que se refere aos meios de prova da finalidade de apropriação. Quanto a este último aspecto, a proposta do STF, no RHC 163.334/SC, é a de que o dolo de apropriação seja demonstrado a partir de circunstâncias objetivas factuais, isto é, com lastro nos dados do caso concreto, passíveis de comprovação empírica, não se admitindo, portanto, a presunção da caracterização do elemento subjetivo do tipo.</p><p class="cartaSemRecuo">&nbsp;</p><p class="cartaSemRecuo">[BITENCOURT, Cezar R.; MONTEIRO, Luciana de O.&nbsp;<strong>Crimes contra a ordem tributária</strong>. 2. ed. Rio de Janeiro: Saraiva Jur, 2023. E-book. p.177].</p></td><td style="background-color:#f9f9f9; border-color:#ffffff; text-align:right; width:5px">&nbsp;</td><td style="background-color:#ffffff; border-color:#ffffff; width:20px"><p class="cartaSemRecuo">&nbsp;</p></td></tr></tbody></table>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="2fb939c9e6785e70ac36e09074a4b02a125482d3186dcecbd8ad4e2cecaec233" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_36" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_37">Em suma, o mero inadimplemento de tributo, por si só, não configura crime, sendo ônus da acusação demonstrar a existência de <em><strong>contumácia </strong></em>e <em><strong>dolo de apropriação</strong></em>, conforme os vetores estabelecidos pelo STF, desde que descritos expressamente na denúncia. Se o precedente é obrigatório, a observância é cogente, impondo-se&nbsp;a descrição da conduta típica em conformidade com os pressupostos, requisitos e condições fixados pelo Supremo Tribunal Federal.&nbsp;</p>
<p class="paragrafoPadrao" id="321771237865452683411594702914_38">Nesse sentido, são os julgados desta Câmara:</p>
<p class="citacao" id="321771237865452683411594702914_39">CRIME CONTRA A ORDEM TRIBUTÁRIA. OMISSÃO NO RECOLHIMENTO DE ICMS [LEI N. 8.137/1990, ART. 2º, II]. PARÂMETROS FIXADOS PELO SUPREMO TRIBUNAL FEDERAL NO JULGAMENTO DO RHC 163.334. PARA O ACOLHIMENTO DA HIPÓTESE ACUSATÓRIA [HAC], O ÔNUS DA COMPROVAÇÃO DOS PARÂMETROS ESTABELECIDOS É DA ACUSAÇÃO. ACUSADA QUE NÃO VENDEU PRODUTOS ABAIXO DO PREÇO DE CUSTO, NÃO CRIOU OBSTÁCULOS À FISCALIZAÇÃO, NÃO SE UTILIZOU DE LARANJAS E NÃO ENCERROU AS ATIVIDADES DE FORMA IRREGULAR, ALÉM DE TER TENTADO, DENTRO DO POSSÍVEL, RECOLHER O TRIBUTO DEVIDO. INADIMPLEMENTO TRIBUTÁRIO DECORRENTE DE DIFICULDADES FINANCEIRAS DA PESSOA JURÍDICA, SEM O PREENCHIMENTO DOS PARÂMETROS FIXADOS PELO SUPREMO TRIBUNAL FEDERAL. AUSÊNCIA DE DOLO DE APROPRIAÇÃO. ABSOLVIÇÃO POR INSUFICIÊNCIA DE PROVAS [CPP, ART. 386, VII]. RECURSO DA DEFESA PROVIDO. RECURSO DA ACUSAÇÃO PREJUDICADO. 1. Para configuração do crime de apropriação indébita tributária [Lei 8.137/1990, art. 2º, II], nos termos do precedente do STF [RHC Habeas Corpus 163334, Min. Roberto Barroso], o ônus da prova cabe ao órgão acusador quanto à superação do standard probatório [para além da dúvida razoável] necessário à atribuição da função de verdade à hipótese acusatória [HAc], com a produção de prova suficiente à verificação dos parâmetros fixados pela Suprema Corte, consistentes em: [a] inadimplência reiterada; [b] venda de produtos abaixo do preço de custo; [c] criação de obstáculos à fiscalização; [d] utilização de laranjas; [e] falta de tentativa de regularização de situação fiscal; e, [f] o encerramento irregular de atividades com aberturas de outras empresas etc. 2. Incumprido o ônus da prova, preserva-se o estado constitucional de inocência. [TJSC,&nbsp;<strong>ApCrim 5015995-88.2021.8.24.0033</strong>, 6ª Câmara Criminal, Relator para Acórdão ALEXANDRE MORAIS DA ROSA, julgado em 03/02/2026]</p>
<p class="citacao" id="321771237865452683411594702914_40">CRIME CONTRA A ORDEM TRIBUTÁRIA. OMISSÃO NO RECOLHIMENTO DE ICMS [LEI N. 8.137/1990, ART. 2º, II]. PARÂMETROS FIXADOS PELO SUPREMO TRIBUNAL FEDERAL NO JULGAMENTO DO RHC 163.334. PARA O ACOLHIMENTO DA HIPÓTESE ACUSATÓRIA [HAC], O ÔNUS DA COMPROVAÇÃO DOS PARÂMETROS ESTABELECIDOS É DA ACUSAÇÃO. ACUSADA QUE NÃO VENDEU PRODUTOS ABAIXO DO PREÇO DE CUSTO, NÃO CRIOU OBSTÁCULOS À FISCALIZAÇÃO, NÃO SE UTILIZOU DE LARANJAS E NÃO ENCERROU AS ATIVIDADES DE FORMA IRREGULAR, ALÉM DE TER TENTADO, DENTRO DO POSSÍVEL, RECOLHER O TRIBUTO DEVIDO. INADIMPLEMENTO TRIBUTÁRIO DECORRENTE DE DIFICULDADES FINANCEIRAS DA PESSOA JURÍDICA, SEM O PREENCHIMENTO DOS PARÂMETROS FIXADOS PELO SUPREMO TRIBUNAL FEDERAL. AUSÊNCIA DE DOLO DE APROPRIAÇÃO. ABSOLVIÇÃO POR INSUFICIÊNCIA DE PROVAS [CPP, ART. 386, VII]. RECURSO DA DEFESA PROVIDO. RECURSO DA ACUSAÇÃO PREJUDICADO. 1. Para configuração do crime de apropriação indébita tributária [Lei 8.137/1990, art. 2º, II], nos termos do precedente do STF [RHC Habeas Corpus 163334, Min. Roberto Barroso], o ônus da prova cabe ao órgão acusador quanto à superação do standard probatório [para além da dúvida razoável] necessário à atribuição da função de verdade à hipótese acusatória [HAc], com a produção de prova suficiente à verificação dos parâmetros fixados pela Suprema Corte, consistentes em: [a] inadimplência reiterada; [b] venda de produtos abaixo do preço de custo; [c] criação de obstáculos à fiscalização; [d] utilização de laranjas; [e] falta de tentativa de regularização de situação fiscal; e, [f] o encerramento irregular de atividades com aberturas de outras empresas etc. 2. Incumprido o ônus da prova, preserva-se o estado constitucional de inocência. [TJSC,&nbsp;<strong>ApCrim 0900004-06.2019.8.24.0033</strong>, 6ª Câmara Criminal, Relator para Acórdão ALEXANDRE MORAIS DA ROSA, D.E. 03/02/2026]</p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="84348d27e6baf886ff6464d7e9bdc1e151439b848649eb9599800435aa7288e9" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_37" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_41">Dessa forma, o agente que deixa de recolher tributo por dificuldade financeira, em regra, não comete o crime, sendo punível apenas aquele que, possuindo recursos financeiros, opta por não pagar o tributo com a finalidade de obter enriquecimento ilícito.</p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="99d6f4d349ea26d0f2e0057d80c9bd7ecf8dc67733d81bcb3fb6415bd8d0921f" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_38" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_42">2.3. <strong>CASO DOS AUTOS</strong></p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="3d543ec97fe632f135be28284d1df03e7c040d8862c5d65677a0053d8dc6d34d" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_39" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_43">A definição jurídica atribuída à conduta pelo órgão acusador possui a seguinte previsão legal&nbsp;[<em>Lei n. 8.137/1990, art. 2º, II</em>]:</p>
<table border="0" cellspacing="0" data-codtipoconteudo="4" data-hash="9084e3799d5e79e08811f9f5e5fa7c950c2f185ab104017c12c731b1d65091e5" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_40" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_44" style="background-color:#f9f9f9; border-collapse:collapse; font-family:Arial,sans-serif; margin-bottom:20px; text-align:left; width:100%"><tbody><tr><td style="background-color:#ffffff; border-color:#ffffff; width:90px"><p class="cartaSemRecuo">&nbsp;</p></td><td style="background-color:#f9f9f9; border-color:#f9f9f9; text-align:right; width:5px"><p class="cartaSemRecuo">&nbsp;</p></td><td style="background-color:#f9f9f9; border-color:#f9f9f9; text-align:right; width:465px"><p class="cartaSemRecuo" id="321767880548549112627776069264_21">Art. 2° Constitui crime da mesma natureza:</p><p class="cartaSemRecuo" id="321767880548549112627776069264_22">[...]</p><p class="cartaSemRecuo" id="321767880548549112627776069264_23">II - deixar de recolher, no prazo legal, valor de tributo ou de contribuição social, descontado ou cobrado, na qualidade de sujeito passivo de obrigação e que deveria recolher aos cofres públicos;</p><p class="cartaSemRecuo" id="321767880548549112627776069264_24">[...]</p><p class="cartaSemRecuo" id="321767880548549112627776069264_25">Pena - detenção, de 6 (seis) meses a 2 (dois) anos, e multa.</p></td><td style="background-color:#f9f9f9; border-color:#ffffff; text-align:right; width:5px">&nbsp;</td><td style="background-color:#ffffff; border-color:#ffffff; width:20px"><p class="cartaSemRecuo">&nbsp;</p></td></tr></tbody></table>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="98bcd47b5c129045394767c9823dd24ce5065a0cd2b7a2c7b52cb377f91c01a8" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_41" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_45">Narra a denúncia que o apelante, na qualidade de sócio-administrador da pessoa jurídica "AS Bebidas Eireli",&nbsp;teria deixado de recolher o ICMS nos meses de&nbsp;junho/2018, outubro/2018, janeiro/2019, março/2019, abril/2019, maio/2019, junho/2019, julho/2019, agosto/2019, setembro/2019, outubro/2019, janeiro/2020, fevereiro/2020, março/2020, abril/2020, maio/2020, junho/2020, julho/2020, agosto/2020, setembro/2020, outubro/2020, novembro/2020 e dezembro/2020..</p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="402fab5428c0c24736c459e605992d66db7e3118d9e93facd66f2974534c6a0f" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_42" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_46">O conjunto probatório válido, produzido sob as garantias constitucionais [<em>imediação; acusação formalizada; contraditório; ampla defesa; direito ao confronto etc</em>.], confirma a inexistência de recolhimento do tributo no prazo legal.</p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="a04c35fdfa90bc5f90abb5425f1795fff52112a58491b131c50d27b96768173d" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_43" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_47">Não foram apresentadas, contudo, provas suficientes à atribuição do valor de verdade à hipótese da presença do&nbsp;<em><strong>dolo específico de apropriação</strong></em>, o que é indispensável à configuração da conduta típica em análise.</p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="30dd3b797ad995a90b5c9764cb9b3bf945a081994b56d437415b00034987a77e" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_44" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_48">Ainda que o tributo não tenha sido recolhido, não foi demonstrada a prática de atos correspondentes aos parâmetros fixados pelo Supremo Tribunal Federal [<em>ônus da acusação</em>], quais sejam: <em><strong>[a]</strong></em>&nbsp;inadimplência reiterada;&nbsp;<em><strong>[b]</strong></em>&nbsp;venda de produtos abaixo do preço de custo;&nbsp;<strong><em>[c]&nbsp;</em></strong>criação de obstáculos à fiscalização;&nbsp;<em><strong>[d]</strong></em>&nbsp;utilização de "laranjas";&nbsp;<em><strong>[e]</strong></em>&nbsp;falta de tentativa de regularização de situação fiscal; <em><strong>[f]</strong></em>&nbsp;encerramento irregular de atividades com aberturas de outras empresas, etc.</p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="3baa1ae34d7164e30458525c3626332e12cfdb86b7069fb1fcfeb08f0f55d8f1" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_45" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_49">Não há, ademais, informação sobre a venda de produtos abaixo do preço de custo, criação de obstáculos à fiscalização, utilização de laranjas ou encerramento irregular das atividades.&nbsp;O que se verifica é que a empresa passou por problemas financeiros no período dos fatos e, por essa razão, não foram pagos os tributos devidos.&nbsp;</p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="8c9b5536ca6996449817d9a2f89abfedcd13bf069138d1f8bf64609f04836f32" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_46" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_50">Assim é que, não demonstrado o dolo específico de apropriação, carga probatória da acusação, revela-se adequada a absolvição por insuficiência de provas [<em>CPP, art. 386, VII</em>].&nbsp;</p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="2d645a39ce23b89bfaf94f414a76553dc3af1a5a105af3116d8a4fd33561cc2a" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_47" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_51">3. <strong>DISPOSITIVO</strong></p>
<p class="paragrafoPadrao" data-codtipoconteudo="4" data-hash="127ce11a0df51ed790d25aaf87da2a14fcce792c65ff432315c64963310b2848" data-idconteudo="321769245901636941330567801999" data-idelementofonte="321769245901636941330856610105_48" data-idversaoconteudo="321769245901636941330856610105" data-timestamp="1770748833" id="321771237865452683411594702914_52">Por tais razões, voto por <strong>conhecer</strong> do recurso e <strong>dar-lhe</strong>&nbsp;<strong>provimento</strong> para absolver o apelante quanto ao crime de apropriação indébita tributária [<em>Lei n. 8.137/1990, art. 2º, II</em>], por insuficiência de provas [<em>CPP, art. 386, VII</em>].</p></section><div id="cke_7379729_9" class="cke_15 cke cke_reset cke_chrome cke_editor_7379729_9 cke_ltr cke_browser_webkit" dir="ltr" lang="pt-br" role="application" aria-labelledby="cke_7379729_9_arialbl"><span id="cke_7379729_9_arialbl" class="cke_voice_label">Editor de Rich Text, 7379729_9</span><div class="cke_inner cke_reset" role="presentation"><div id="cke_15_contents" class="cke_contents cke_reset" role="presentation" style="height: 5722px;"><span id="cke_531" class="cke_voice_label">Pressione ALT+0 para ajuda</span><iframe src="" frameborder="0" class="cke_wysiwyg_frame cke_reset" title="Editor, 7379729_9" aria-describedby="cke_531" tabindex="0" allowtransparency="true" style="width: 100%; height: 100%;"></iframe></div></div></div>
<section id="7379729_10" contenteditable="false" data-nome_apresentacao="Assinaturas" data-nome="assinaturas" data-estilo_padrao="tarja_assinatura" style="visibility: hidden; display: none;"><p class="assinante_indicado">ALEXANDRE MORAIS DA ROSA</p><p class="assinante_indicado">Desembargador</p></section><div id="cke_7379729_10" class="cke_12 cke cke_reset cke_chrome cke_editor_7379729_10 cke_ltr cke_browser_webkit" dir="ltr" lang="pt-br" role="application" aria-labelledby="cke_7379729_10_arialbl"><span id="cke_7379729_10_arialbl" class="cke_voice_label">Editor de Rich Text, 7379729_10</span><div class="cke_inner cke_reset" role="presentation"><div id="cke_12_contents" class="cke_contents cke_reset" role="presentation" style="height: 38px;"><span id="cke_186" class="cke_voice_label">Pressione ALT+0 para ajuda</span><iframe src="" frameborder="0" class="cke_wysiwyg_frame cke_reset" title="Editor, 7379729_10" aria-describedby="cke_186" tabindex="-1" allowtransparency="true" style="width: 100%; height: 100%;"></iframe></div></div></div>
<section id="7379729_11" contenteditable="false" data-nome_apresentacao="Notas de fim de texto" data-nome="notas" data-estilo_padrao="notas" style="visibility: hidden; display: none;">
<p class="notas">&nbsp;</p>
<hr>
<p>&nbsp;</p></section><div id="cke_7379729_11" class="cke_13 cke cke_reset cke_chrome cke_editor_7379729_11 cke_ltr cke_browser_webkit" dir="ltr" lang="pt-br" role="application" aria-labelledby="cke_7379729_11_arialbl"><span id="cke_7379729_11_arialbl" class="cke_voice_label">Editor de Rich Text, 7379729_11</span><div class="cke_inner cke_reset" role="presentation"><div id="cke_13_contents" class="cke_contents cke_reset" role="presentation" style="height: 56px;"><span id="cke_203" class="cke_voice_label">Pressione ALT+0 para ajuda</span><iframe src="" frameborder="0" class="cke_wysiwyg_frame cke_reset" title="Editor, 7379729_11" aria-describedby="cke_203" tabindex="-1" allowtransparency="true" style="width: 100%; height: 100%;"></iframe></div></div></div>
<footer id="7379729_12" style="visibility: hidden; display: none;">				
				<div class="rodape_esquerda">	
					<span data-numero_processo_rodape="50294957220218240018" data-sin_numero_processo_rodape="true">5029495-72.2021.8.24.0018</span>
				</div>	
				<div class="rodape_direita">	
					<span data-codigo_documento_rodape="7379729" data-sin_codigo_documento_rodape="true">7379729</span>
					<span data-versao_documento_rodape="5" data-sin_versao_documento_rodape="true">.V5</span>
					<span data-usuario_criador_documento_rodape="SALESIO" data-sin_usuario_criador_documento_rodape="true">SALESIO©</span>
					<span data-usuario_editor_documento_rodape="ALEXANDRESS" data-sin_usuario_editor_documento_rodape="true">ALEXANDRESS</span>
				</div>
			</footer><div id="cke_7379729_12" class="cke_16 cke cke_reset cke_chrome cke_editor_7379729_12 cke_ltr cke_browser_webkit" dir="ltr" lang="pt-br" role="application" aria-labelledby="cke_7379729_12_arialbl"><span id="cke_7379729_12_arialbl" class="cke_voice_label">Editor de Rich Text, 7379729_12</span><div class="cke_inner cke_reset" role="presentation"><div id="cke_16_contents" class="cke_contents cke_reset" role="presentation" style="height: 23px;"><span id="cke_220" class="cke_voice_label">Pressione ALT+0 para ajuda</span><iframe src="" frameborder="0" class="cke_wysiwyg_frame cke_reset" title="Editor, 7379729_12" aria-describedby="cke_220" tabindex="-1" allowtransparency="true" style="width: 100%; height: 100%;"></iframe></div></div></div></article></div></div><form name="frmEditorWeb" id="frmEditorWeb"><input type="hidden" id="alterarstatus" value="0"><input type="hidden" id="statusMinutaDesejado" value="0"><input type="hidden" id="hdnTextoPadraoSalvarComo" value=""><input type="hidden" id="hdnUrlPainelPrevidenciario" value=""></form><form name="frmAuxSubForm" method="post" id="frmAuxSubForm" action=""><input type="hidden" id="cod_texto_padrao" name="cod_texto_padrao" value=""></form></div>
 <div id="bottom">
		<!-- This div will handle all toolbars -->
<div id="cke_7379729_1" class="cke cke_5 cke_reset_all cke_chrome cke_editor_7379729_1 cke_shared cke_detached cke_ltr cke_browser_webkit" dir="ltr" title="" lang="pt-br" role="presentation" style="user-select: none; display: none;"><div class="cke_inner"><div id="cke_5_bottom" class="cke_bottom" role="presentation"><span id="cke_5_resizer" class="cke_resizer cke_resizer_vertical cke_resizer_ltr" title="Arraste para redimensionar" onmousedown="CKEDITOR.tools.callFunction(2, event)">◢</span><span id="cke_5_path_label" class="cke_voice_label">Caminho dos Elementos</span><span id="cke_5_path" class="cke_path" role="group" aria-labelledby="cke_5_path_label"><span class="cke_path_empty">&nbsp;</span></span><span class="spanPercent" id="spanPercent" style="float:right;"></span><span style="float:right;" class="cke_data_size_msg">29.94 MBytes restantes/30 MBytes</span></div></div></div><div id="cke_7379729_2" class="cke cke_6 cke_reset_all cke_chrome cke_editor_7379729_2 cke_shared cke_detached cke_ltr cke_browser_webkit" dir="ltr" title="" lang="pt-br" role="presentation" style="display: none; user-select: none;"><div class="cke_inner"><div id="cke_6_bottom" class="cke_bottom" role="presentation"><span id="cke_6_resizer" class="cke_resizer cke_resizer_vertical cke_resizer_ltr" title="Arraste para redimensionar" onmousedown="CKEDITOR.tools.callFunction(10, event)">◢</span><span id="cke_6_path_label" class="cke_voice_label">Caminho dos Elementos</span><span id="cke_6_path" class="cke_path" role="group" aria-labelledby="cke_6_path_label"><span class="cke_path_empty">&nbsp;</span></span><span class="spanPercent" id="spanPercent" style="float:right;"></span><span style="float:right;" class="cke_data_size_msg">29.94 MBytes restantes/30 MBytes</span></div></div></div><div id="cke_7379729_3" class="cke cke_7 cke_reset_all cke_chrome cke_editor_7379729_3 cke_shared cke_detached cke_ltr cke_browser_webkit" dir="ltr" title="" lang="pt-br" role="presentation" style="user-select: none;"><div class="cke_inner"><div id="cke_7_bottom" class="cke_bottom" role="presentation"><span id="cke_7_resizer" class="cke_resizer cke_resizer_vertical cke_resizer_ltr" title="Arraste para redimensionar" onmousedown="CKEDITOR.tools.callFunction(18, event)">◢</span><span id="cke_7_path_label" class="cke_voice_label">Caminho dos Elementos</span><span id="cke_7_path" class="cke_path" role="group" aria-labelledby="cke_7_path_label"><a id="cke_elementspath_95_0" href="javascript:void('body')" tabindex="-1" class="cke_path_item" title="Elemento body" hidefocus="true" draggable="false" ondragstart="return false;" onkeydown="return CKEDITOR.tools.callFunction(21,0, event );" onclick="CKEDITOR.tools.callFunction(20,0); return false;" role="button" aria-label="Elemento body">body</a><span class="cke_path_empty">&nbsp;</span></span><span class="spanPercent" id="spanPercent" style="float:right;"></span><span style="float:right;" class="cke_data_size_msg">29.94 MBytes restantes/30 MBytes</span></div></div></div><div id="cke_7379729_4" class="cke cke_8 cke_reset_all cke_chrome cke_editor_7379729_4 cke_shared cke_detached cke_ltr cke_browser_webkit" dir="ltr" title="" lang="pt-br" role="presentation" style="display: none; user-select: none;"><div class="cke_inner"><div id="cke_8_bottom" class="cke_bottom" role="presentation"><span id="cke_8_resizer" class="cke_resizer cke_resizer_vertical cke_resizer_ltr" title="Arraste para redimensionar" onmousedown="CKEDITOR.tools.callFunction(26, event)">◢</span><span id="cke_8_path_label" class="cke_voice_label">Caminho dos Elementos</span><span id="cke_8_path" class="cke_path" role="group" aria-labelledby="cke_8_path_label"><span class="cke_path_empty">&nbsp;</span></span><span class="spanPercent" id="spanPercent" style="float:right;"></span><span style="float:right;" class="cke_data_size_msg">29.94 MBytes restantes/30 MBytes</span></div></div></div><div id="cke_7379729_5" class="cke cke_9 cke_reset_all cke_chrome cke_editor_7379729_5 cke_shared cke_detached cke_ltr cke_browser_webkit" dir="ltr" title="" lang="pt-br" role="presentation" style="display: none; user-select: none;"><div class="cke_inner"><div id="cke_9_bottom" class="cke_bottom" role="presentation"><span id="cke_9_resizer" class="cke_resizer cke_resizer_vertical cke_resizer_ltr" title="Arraste para redimensionar" onmousedown="CKEDITOR.tools.callFunction(34, event)">◢</span><span id="cke_9_path_label" class="cke_voice_label">Caminho dos Elementos</span><span id="cke_9_path" class="cke_path" role="group" aria-labelledby="cke_9_path_label"><span class="cke_path_empty">&nbsp;</span></span><span class="spanPercent" id="spanPercent" style="float:right;"></span><span style="float:right;" class="cke_data_size_msg">29.94 MBytes restantes/30 MBytes</span></div></div></div><div id="cke_7379729_6" class="cke cke_10 cke_reset_all cke_chrome cke_editor_7379729_6 cke_shared cke_detached cke_ltr cke_browser_webkit" dir="ltr" title="" lang="pt-br" role="presentation" style="display: none; user-select: none;"><div class="cke_inner"><div id="cke_10_bottom" class="cke_bottom" role="presentation"><span id="cke_10_resizer" class="cke_resizer cke_resizer_vertical cke_resizer_ltr" title="Arraste para redimensionar" onmousedown="CKEDITOR.tools.callFunction(42, event)">◢</span><span id="cke_10_path_label" class="cke_voice_label">Caminho dos Elementos</span><span id="cke_10_path" class="cke_path" role="group" aria-labelledby="cke_10_path_label"><span class="cke_path_empty">&nbsp;</span></span><span class="spanPercent" id="spanPercent" style="float:right;"></span><span style="float:right;" class="cke_data_size_msg">29.94 MBytes restantes/30 MBytes</span></div></div></div><div id="cke_7379729_8" class="cke cke_11 cke_reset_all cke_chrome cke_editor_7379729_8 cke_shared cke_detached cke_ltr cke_browser_webkit" dir="ltr" title="" lang="pt-br" role="presentation" style="display: none; user-select: none;"><div class="cke_inner"><div id="cke_11_bottom" class="cke_bottom" role="presentation"><span id="cke_11_resizer" class="cke_resizer cke_resizer_vertical cke_resizer_ltr" title="Arraste para redimensionar" onmousedown="CKEDITOR.tools.callFunction(50, event)">◢</span><span id="cke_11_path_label" class="cke_voice_label">Caminho dos Elementos</span><span id="cke_11_path" class="cke_path" role="group" aria-labelledby="cke_11_path_label"><span class="cke_path_empty">&nbsp;</span></span><span class="spanPercent" id="spanPercent" style="float:right;"></span><span style="float:right;" class="cke_data_size_msg">29.94 MBytes restantes/30 MBytes</span></div></div></div><div id="cke_7379729_10" class="cke cke_12 cke_reset_all cke_chrome cke_editor_7379729_10 cke_shared cke_detached cke_ltr cke_browser_webkit" dir="ltr" title="" lang="pt-br" role="presentation" style="display: none; user-select: none;"><div class="cke_inner"><div id="cke_12_bottom" class="cke_bottom" role="presentation"><span id="cke_12_resizer" class="cke_resizer cke_resizer_vertical cke_resizer_ltr" title="Arraste para redimensionar" onmousedown="CKEDITOR.tools.callFunction(58, event)">◢</span><span id="cke_12_path_label" class="cke_voice_label">Caminho dos Elementos</span><span id="cke_12_path" class="cke_path" role="group" aria-labelledby="cke_12_path_label"><span class="cke_path_empty">&nbsp;</span></span><span class="spanPercent" id="spanPercent" style="float:right;"></span><span style="float:right;" class="cke_data_size_msg">29.94 MBytes restantes/30 MBytes</span></div></div></div><div id="cke_7379729_11" class="cke cke_13 cke_reset_all cke_chrome cke_editor_7379729_11 cke_shared cke_detached cke_ltr cke_browser_webkit" dir="ltr" title="" lang="pt-br" role="presentation" style="display: none; user-select: none;"><div class="cke_inner"><div id="cke_13_bottom" class="cke_bottom" role="presentation"><span id="cke_13_resizer" class="cke_resizer cke_resizer_vertical cke_resizer_ltr" title="Arraste para redimensionar" onmousedown="CKEDITOR.tools.callFunction(66, event)">◢</span><span id="cke_13_path_label" class="cke_voice_label">Caminho dos Elementos</span><span id="cke_13_path" class="cke_path" role="group" aria-labelledby="cke_13_path_label"><span class="cke_path_empty">&nbsp;</span></span><span class="spanPercent" id="spanPercent" style="float:right;"></span><span style="float:right;" class="cke_data_size_msg">29.94 MBytes restantes/30 MBytes</span></div></div></div><div id="cke_7379729_12" class="cke cke_16 cke_reset_all cke_chrome cke_editor_7379729_12 cke_shared cke_detached cke_ltr cke_browser_webkit" dir="ltr" title="" lang="pt-br" role="presentation" style="display: none; user-select: none;"><div class="cke_inner"><div id="cke_16_bottom" class="cke_bottom" role="presentation"><span id="cke_16_resizer" class="cke_resizer cke_resizer_vertical cke_resizer_ltr" title="Arraste para redimensionar" onmousedown="CKEDITOR.tools.callFunction(74, event)">◢</span><span id="cke_16_path_label" class="cke_voice_label">Caminho dos Elementos</span><span id="cke_16_path" class="cke_path" role="group" aria-labelledby="cke_16_path_label"><span class="cke_path_empty">&nbsp;</span></span><span class="spanPercent" id="spanPercent" style="float:right;"></span><span style="float:right;" class="cke_data_size_msg">29.94 MBytes restantes/30 MBytes</span></div></div></div><div id="cke_7379729_7" class="cke cke_14 cke_reset_all cke_chrome cke_editor_7379729_7 cke_shared cke_detached cke_ltr cke_browser_webkit" dir="ltr" title="" lang="pt-br" role="presentation" style="user-select: none; display: none;"><div class="cke_inner"><div id="cke_14_bottom" class="cke_bottom" role="presentation"><span id="cke_14_path_label" class="cke_voice_label">Caminho dos Elementos</span><span id="cke_14_path" class="cke_path" role="group" aria-labelledby="cke_14_path_label"><a id="cke_elementspath_327_1" href="javascript:void('body')" tabindex="-1" class="cke_path_item" title="Elemento body" hidefocus="true" draggable="false" ondragstart="return false;" onkeydown="return CKEDITOR.tools.callFunction(298,1, event );" onclick="CKEDITOR.tools.callFunction(297,1); return false;" role="button" aria-label="Elemento body">body</a><a id="cke_elementspath_327_0" href="javascript:void('p')" tabindex="-1" class="cke_path_item" title="Elemento p" hidefocus="true" draggable="false" ondragstart="return false;" onkeydown="return CKEDITOR.tools.callFunction(298,0, event );" onclick="CKEDITOR.tools.callFunction(297,0); return false;" role="button" aria-label="Elemento p">p</a><span class="cke_path_empty">&nbsp;</span></span><span class="spanPercent" id="spanPercent" style="float:right;"></span><span style="float:right;" class="cke_data_size_msg">29.94 MBytes restantes/30 MBytes</span></div></div></div><div id="cke_7379729_9" class="cke cke_15 cke_reset_all cke_chrome cke_editor_7379729_9 cke_shared cke_detached cke_ltr cke_browser_webkit" dir="ltr" title="" lang="pt-br" role="presentation" style="display: none; user-select: none;"><div class="cke_inner"><div id="cke_15_bottom" class="cke_bottom" role="presentation"><span id="cke_15_path_label" class="cke_voice_label">Caminho dos Elementos</span><span id="cke_15_path" class="cke_path" role="group" aria-labelledby="cke_15_path_label"><span class="cke_path_empty">&nbsp;</span></span><span class="spanPercent" id="spanPercent" style="float:right;"></span><span style="float:right;" class="cke_data_size_msg">29.94 MBytes restantes/30 MBytes</span></div></div></div></div>
<div style="display:none" id="dialog-confirm" title="Devolução de minuta">
<p><span class="ui-icon ui-icon-alert" style="float:left; margin:0 7px 20px 0;"></span>A minuta foi alterada</p>
</div>
<div style="display:none" id="dialog-text-transform" title="Transformação de texto">
<p><span class="ui-icon ui-icon-confirm" style="float:left; margin:0 7px 20px 0;"></span>Qual transformação deseja aplicar?</p>
</div>
<div style="display:none" id="dialog-style-transform" title="Estilo de parágrafo ao colar">
  <p style="margin:30px;"></p>
  <form id="dialog-style-transform-form">
    <fieldset style="border: 0px;">
      <select name="estiloAoColar" id="estiloAoColar" autofocus="">
      </select>
    </fieldset>
  </form>
</div>
<div style="display:none" id="dialog-textopadrao-tag" title="Texto Padrão ou TAG">
  <p style="margin:30px;"></p>
  <p><span class="ui-icon ui-icon-confirm" style="float:left; margin:0 7px 20px 0;"></span>Escolha o que deseja inserir...</p>
</div>
<div class="bootstrap-styles">
<div class="modal fade" id="dialog-ignorar-processo-anonimizar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-x w-50" role="document">
    <div class="modal-content">
      <div class="border row m-0 bg-light position-relative w-100">
        <div class="col-12 mt-2 d-flex justify-content-center">
          <h3 class="text-center w-100 pt-2" style="color: red; font-weight: bold; font-size: 16px;">ATENÇÃO!</h3>
        </div>
        <a href="#" data-bs-dismiss="modal" aria-label="close" title="Fechar" class="position-absolute" style="top: 10px; right: 10px;">
          <i class="material-icons">close</i>
        </a>
      </div>
      <div id="div_confirmacao" class="w-100 mt-2">
        <div class="container-fluid">
          <fieldset class="card card-body pb-0">
           <legend>
              Nome de parte encontrado no conteúdo da minuta:
            </legend>
            <div class="row">
              <div class="col-md-12">
                <div class="p-2 list_names" style="max-height: 300px;overflow-y: auto;"></div>
              </div>
            </div>
          </fieldset>
          <div class="d-flex flex-column justify-content-end mb-2">
            <div class="col-12 alert alert-danger mt-2">Salvar as partes acima sem anonimizar?</div>
            <div class="custom-control custom-checkbox custom-control-inline">
              <input type="checkbox" class="custom-control-input pl-2" id="check-unanonymized-alert"><label class="custom-control-label pl-2" for="check-unanonymized-alert">Não perguntar mais para este processo</label>
            </div>
          </div>
          <div id="div_botoes_confirmacao" class="d-flex flex-wrap my-4 justify-content-center">
            <input type="button" class="btn btn-primary m-1" value="SALVAR" id="btn_sim" title="Salvar, apesar de ter nome de parte não anonimizada">
            <input type="button" class="btn btn-secondary m-1" value="Cancelar" id="btn_cancelar" title="Cancelar a operação.">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div><input id="placeholderDecisao" name="placeholderDecisao" type="hidden" value="{TEXTO_DECISAO}">
<input id="urlGeracaoEmentaPersonalizadaIAField" name="urlGeracaoEmentaPersonalizadaIAField" type="hidden" value="controlador.php?acao=inteligencia_artificial/llm_gerador_de_ementa/gerar_ementa_personalizada&amp;hash=79ec40379fc4f0bd97bb455bfbab7966">
<input id="urlSalvamentoPromptEmentaPersonalizadaIAField" name="urlSalvamentoPromptEmentaPersonalizadaIAField" type="hidden" value="controlador.php?acao=inteligencia_artificial/llm_gerador_de_ementa/salvar_prompt&amp;hash=0f1f927668659e18a85907510a5d654d">
<input id="urlExclusaoPrompt" name="urlExclusaoPrompt" type="hidden" value="controlador.php?acao=prompt/excluir&amp;hash=a8f744fdff71f5f65658a4dfb08ece0d">
<input id="urlGetPrompt" name="urlGetPrompt" type="hidden" value="controlador.php?acao=prompt/obter&amp;hash=2f44631bea660c6eeb891dbd37c69ab8">
<input id="urlGerarEmentaByPromptId" name="urlGerarEmentaByPromptId" type="hidden" value="controlador.php?acao=inteligencia_artificial/llm_gerador_de_ementa/gerar_ementa_personalizada_by_prompt_id&amp;hash=c886b38ec914fe0657ab9e23d82571a9">
<input id="urlCopiarInstrucaoPadraoIA" name="urlCopiarInstrucaoPadraoIA" type="hidden" value="controlador.php?acao=inteligencia_artificial/llm_gerador_de_ementa/copiar_instrucao_padrao_ia&amp;hash=65ee23cf797645cf75ffaa385b9ed066">
<input id="urlCompartilharPrompt" name="urlCompartilharPrompt" type="hidden" value="controlador.php?acao=prompt/compartilhar&amp;hash=7f31712dbdf17fe33b64b9a7779330bc">
<input id="urlValidarIdLogInferenciaLlm" name="urlValidarIdLogInferenciaLlm" type="hidden" value="controlador.php?acao=inteligencia_artificial/auditoria_minuta_gerada_por_ia/validar_id_log_inferencia_llm&amp;hash=0280188207e1b0f98cfc94fac7ac3b15">

<div class="modal fade" id="ementaPersonalizadaIAModal" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title">Gerar Ementa Personalizada</h1>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body bg-light">
                        
                    <fieldset class="eproc-fieldset card-primary text-left d-none" id="novoPromptContainer">
                <legend class="text-primary" id="legendPrompt">
                    Novo Prompt
                </legend>
                <div class="d-flex">
                    <div class="flex-grow-1">
                        <div class="form-group"><label class="d-flex" for="promptNomeField">Nome:</label>
<input class="form-control form-control-sm" id="promptNomeField" name="promptNomeField" type="text" value="prompt_2026_02_16_18_09">
</div>

                    </div>
                    <div class="flex-grow-1 ml-3">
                        <fieldset class="eproc-fieldset">
                            <legend>
                                <small>
                                    Compartilhamento:
                                </small>
                            </legend>

                            
                            <div class="form-group"><span class="form-check form-check-inline pl-0"></span>
<div class="custom-control custom-radio custom-control-inline"><input checked="checked" class="custom-control-input" id="salvarIndividualOption" name="salvamentoOption" type="radio" value="individual">
<label class="custom-control-label" for="salvarIndividualOption">Somente para mim</label>
</div>
<div class="custom-control custom-radio custom-control-inline"><input class="custom-control-input" id="salvarUnidadeOption" name="salvamentoOption" type="radio" value="unidade">
<label class="custom-control-label" for="salvarUnidadeOption">Para a unidade</label>
</div>
</div>

                        </fieldset>
                    </div>
                </div>
                <div class="d-flex mt-3">
                    <div class="pt-2">
                        Instruções (prompt):
                    </div>
                    <div class="d-flex justify-content-end flex-grow-1">
                        <div class="mr-2">
                            <button class="btn btn-sm btn-secondary" id="inserirMarcadorEmentaPersonalizadaButton" onclick="inserirMarcadorEmentaPersonalizadaIA()" title="Marcador que será substituído pela decisão ou relatório/voto"><i class="material-icons icon-aligned">insert_page_break</i>
                                          Inserir Marcador para a Decisão</button>

                        </div>
                        <div class="mr-2">
                            <button class="btn btn-sm btn-secondary" id="copiarInstrucaoPadraoButton" onclick="copiarInstrucaoPadraoIA()"><i class="material-icons icon-aligned">restart_alt</i>
                                          Copiar Instrução Padrão</button>

                        </div>
                        <div>
                            <button class="btn btn-sm btn-secondary" id="limparEmentaPersonalizadaButton" onclick="limparEmentaPersonalizadaIA()"><i class="material-icons icon-aligned">cleaning_services</i>
                                          Limpar</button>

                        </div>
                    </div>
                </div>

                <div>
                    
                    <div class="form-group"><label class="d-flex" for="instrucoesField"></label>
<textarea class="form-control form-group w-100" id="instrucoesField" name="instrucoesField" onkeyup="processEmentaPersonalizadaFieldInput(this)" rows="8">    OBJETIVO: Criar ementas judiciais de acordo com as diretrizes do &lt;MANUAL&gt;&lt;/MANUAL&gt;. Você irá fazer isso a partir do texto da decisão informado no &lt;PROMPT_USUARIO&gt;[TEXTO_DECISAO]&lt;/PROMPT_USUARIO&gt;.

    &lt;MANUAL&gt;
    ORIENTAÇÕES GERAIS DE REDAÇÃO DAS EMENTAS

    Como citar dispositivos
    Conteúdo: remissão à toda a legislação citada no texto que for relevante para a solução do caso.
    Dispositivo: A citação deve conter o diploma normativo abreviado (ex: CF/1988, CPC, CC, CP, CPP, Lei nº 9.099/1995), seguido do dispositivo (ex: art. 1º, I, § 1º).

    Como citar jurisprudência
    A citação deve conter as seguintes informações:
    - nome da corte ou tribunal abreviado (ex: STF, STJ, TJSP, TRF1, TRT4);
    - classe processual, incluindo recurso ou incidente em julgamento (ex: AgR no RE);
    - número do processo;

    Estilo literário
    Use frases curtas. Evite o uso exagerado de vírgula, de aposto e de frases intercaladas. Evite colocar mais de uma ideia em uma mesma frase.

    A Criação de Ementas
    As ementas devem ser divididas em:
    - Cabeçalho;
    - Caso em exame;
    - Decisões;

    Cabeçalho
    O cabeçalho deverá conter:
    - o ramo do Direito (ex: Direito constitucional e administrativo);
    - a classe processual (ex: ação direta de inconstitucionalidade, mandado de segurança);
    Formatação: O cabeçalho da ementa deve ser escrito diferenciando letras maiúsculas e minúsculas. No caso do ramo do direito e da classe processual, apenas a inicial da primeira palavra deve ser redigida em letra maiúscula (ex:
Direito constitucional e direito administrativo"; "Mandado de segurança").

    Caso em exame
    Conteúdo: deve conter qual é a ação, o recurso ou o incidente que é objeto da decisão ou voto, com a sumária descrição do caso.

    Decisões
    Conteúdo: uma lista de alegações com fundamentos, decisão e citações de normas e jurisprudência.

    FORMATAÇÃO:
    1. Observe o &lt;EXEMPLOS_RESPOSTA&gt;&lt;/EXEMPLOS_RESPOSTA&gt; e o conteúdo dos &lt;exemplo_input&gt;&lt;/exemplo_input&gt; e o &lt;exemplo_output&gt;&lt;/exemplo_output&gt; correspondente para compreender o padrão de resposta esperado. É imprescindível que seja
aplicada a formatação html.

    &lt;EXEMPLOS_RESPOSTA&gt;
        &lt;exemplo_input&gt;
            RELATÓRIO
            Trata-se de apelação cível interposta por Banco Agibank S.A. (réu) nos autos da ação de revisão de contrato bancário ajuizada por Ivone Picolli da Costa Miranda (autora), inconformado com a sentença de procedência dos
pedidos (evento 20.1) lançada com o seguinte dispositivo: Pelo exposto, JULGO PROCEDENTES os pedidos formulados pela parte autora para o fim de limitar os juros remuneratórios do contrato de empréstimo nº 1242282794 à taxa média de mercado à época da contratação, de acordo com a taxa de juros estabelecida pelo Banco Central do Brasil na série 25464 (5,22% a.m.), afastando os efeitos da mora e condenando o réu à devolução dos valores cobrados em excesso, subtraindo-os, se for o caso, das parcelas vincendas, com a repetição simples do indébito caso exista crédito em favor da parte autora após a compensação dos valores. O valor deverá ser corrigido monetariamente pelo IGP-M a partir de cada desembolso e acrescido de juros de mora de 1% ao mês a contar da data da citação. Condeno o réu, como sucumbente, a arcar com as custas processuais e honorários do advogado da parte adversa. É o relatório.
            VOTO
            Colegas. Cuida-se de ação de revisão de contrato bancário ajuizada por Ivone Picolli da Costa Miranda contra Banco Agibank S.A., buscando a revisão dos juros remuneratórios do contrato de empréstimo pessoal n. 1242282794,
celebrado em 09/01/2023, no valor de R$3.548,64, para pagamento em 30 parcelas de R$358,54, sendo pactuados os juros de 9,49% ao mês e de 196,82% ao ano. Nesse sentido, anoto precedente da Corte Superior: AGRAVO INTERNO NO RECURSO ESPECIAL. AÇÃO REVISIONAL DE CONTRATO BANCÁRIO. CONCLUSÃO NO SENTIDO DA ABUSIVIDADE DA TAXA DE JUROS REMUNERATÓRIOS. LIMITAÇÃO À TAXA MÉDIA APURADA PELO BACEN. SÚMULA 7/STJ. INVIABILIDADE DE DESCARACTERIZAÇÃO DA MORA. SÚMULA 83/STJ. POSSIBILIDADE DE RESTITUIÇÃO/COMPENSAÇÃO DE VALORES. SÚMULA 7/STJ. AGRAVO INTERNO DESPROVIDO.

            1. Analisando o acervo fático-probatório e os termos do contrato objeto de revisão, a segunda instância entendeu que as taxas de juros remuneratórios seriam abusivas, logo seria caso de limitação em respeito ao regramento
protetivo do CDC. Nesse cenário, o aresto concluiu que a limitação desses juros à taxa média apurada pelo Bacen para o momento da contratação afastaria o montante excessivo. Aplicação das Súmulas 5 e 7/STJ, que incidem sobre ambas as alíneas do permissivo constitucional. 2. Consoante orientação deste Tribunal Superior, "é admitida a revisão das taxas de juros remuneratórios em situações excepcionais, desde que caracterizada a relação de consumo e que a abusividade capaz de colocar o consumidor em desvantagem exagerada (art. 51, § 1º, do CDC) fique cabalmente demonstrada, ante as peculiaridades do julgamento em concreto. Isso posto, voto por negar provimento à apelação, elevando-se a verba honorária para R$ 1.412,00, por força do §11 do artigo 85 do Código de Processo Civil.
        &lt;/exemplo_input&gt;

        &lt;exemplo_output&gt;
            &lt;div style="text-align: justify; line-height: 1.0;"&gt;
            &lt;p style="margin-bottom: 0.5em;"&gt;
                &lt;strong&gt;DIREITO CIVIL. APELAÇÃO CÍVEL. AÇÃO DE REVISÃO DE CONTRATO BANCÁRIO. JUROS REMUNERATÓRIOS ABUSIVOS. LIMITAÇÃO À TAXA MÉDIA DE MERCADO. DESPROVIMENTO DO RECURSO.&lt;/strong&gt;
            &lt;/p&gt;
            &lt;p style="margin-bottom: 0.5em;"&gt;
                &lt;strong&gt;I. CASO EM EXAME:&lt;/strong&gt;&lt;br&gt;
                &lt;span&gt;1.&lt;/span&gt; Apelação cível interposta contra sentença que julgou procedentes os pedidos de revisão de contrato bancário, limitando os juros remuneratórios do contrato de empréstimo à taxa média de mercado de 5,22% ao mês, conforme estabelecido pelo Banco Central do Brasil, e determinando a devolução dos valores pagos a maior, com correção monetária e juros de mora.
            &lt;/p&gt;
            &lt;p style="margin-bottom: 0.5em;"&gt;
                &lt;strong&gt;II. QUESTÃO EM DISCUSSÃO:&lt;/strong&gt;&lt;br&gt;
                &lt;span&gt;2.&lt;/span&gt; Há duas questões em discussão: (i) a abusividade dos juros remuneratórios pactuados no contrato de empréstimo; (ii) a possibilidade de devolução dos valores pagos a maior pela parte autora.&lt;/p&gt;
            &lt;p style="margin-bottom: 0.5em;"&gt;
                &lt;strong&gt;III. RAZÕES DE DECIDIR:&lt;/strong&gt;&lt;br&gt;
                &lt;span&gt;3.&lt;/span&gt; A abusividade dos juros remuneratórios foi comprovada, uma vez que a taxa contratada de 9,49% ao mês supera significativamente a taxa média de mercado, configurando desvantagem exagerada ao consumidor, conforme o art. 51, §1º, do CDC. &lt;br&gt;
                &lt;span&gt;4.&lt;/span&gt; O Superior Tribunal de Justiça admite a revisão de cláusulas contratuais abusivas, permitindo a limitação dos juros à taxa média apurada pelo Banco Central, conforme a jurisprudência consolidada. &lt;br&gt;
                &lt;span&gt;5.&lt;/span&gt; A alegação de que a taxa média não poderia ser o único indicador de abusividade não se sustenta, pois a taxa contratada é desproporcional em relação ao mercado, sem justificativa plausível para tal elevação. &lt;br&gt;
                &lt;span&gt;6.&lt;/span&gt; A devolução dos valores pagos a maior é consequência lógica da revisão contratual, visando evitar o enriquecimento sem causa do credor, sendo desnecessária a comprovação de erro no pagamento. &lt;br&gt;
                &lt;span&gt;7.&lt;/span&gt; A acusação de litigância de má-fé não se sustenta, pois a parte autora apenas buscou a revisão de cláusulas contratuais, o que é legítimo e amparado pela jurisprudência.&lt;/p&gt;
            &lt;p style="margin-bottom: 0.5em;"&gt;&lt;strong&gt;IV. DISPOSITIVO E TESE:&lt;/strong&gt;&lt;br&gt;
                &lt;span&gt;8.&lt;/span&gt; Recurso desprovido. &lt;br&gt;
                &lt;em&gt;Tese de julgamento:&lt;/em&gt; 9. A revisão de cláusulas contratuais é admissível quando demonstrada a abusividade dos juros remuneratórios, devendo ser limitada à taxa média de mercado, conforme estabelecido pelo Banco
Central do Brasil.
            &lt;/p&gt;
            &lt;/div&gt;
        &lt;/exemplo_output&gt;
    &lt;/EXEMPLOS_RESPOSTA&gt;

    Tarefa principal
    Leia cuidadosamente os textos a seguir e produza a ementa conforme o modelo apresentado. Não prefixe a resposta com crases triplas.
    &lt;/MANUAL&gt;

    Redija agora a ementa com base no caso informado em &lt;PROMPT_USUARIO&gt;{TEXTO_DECISAO}&lt;/PROMPT_USUARIO&gt;
</textarea>
</div>

                </div>

                <div id="spinnerContainer" class="spinner-border spinner-border-sm d-none" role="status">
                </div>

                <div id="salvamentoContainer">
                    <button class="btn btn-sm btn-primary" id="salvarEGerarEmentaPersonalizadaButton" onclick="salvarPromptEGerarEmentaPersonalizadaIA()">Salvar e Gerar</button>


                    <button class="btn btn-sm btn-secondary" id="salvarEmentaPersonalizadaButton" onclick="salvarPromptEmentaPersonalizadaIA()"><i class="material-icons icon-aligned">save</i>Salvar</button>


                    <button class="btn btn-sm btn-secondary" id="gerarEmentaPersonalizadaButton" onclick="gerarEmentaPersonalizadaIA()"><i class="material-icons icon-aligned">note_add</i>Gerar</button>

                </div>
            </fieldset>
        
            <fieldset class="eproc-fieldset card-primary text-left">
        <legend class="text-primary">
            Meus Prompts
        </legend>

        <div class="d-flex justify-content-end">
            <div class="mr-2">
                <button class="btn btn-sm btn-primary" id="novoPromptEmentaPersonalizadaButton" onclick="novoPrompt()"><i class="material-icons icon-aligned">description</i>Novo Prompt</button>

            </div>

            <div id="atualizarPromptsDaUnidadeButton" class="d-none mr-2">
                <button class="btn btn-sm btn-secondary" onclick="refreshPromptsEmenta('listagemPromptsCompartilhadosComigo')"><i class="material-icons icon-aligned">refresh</i>Atualizar</button>

            </div>

                    </div>

        <div id="spinnerPromptsContainer" class="spinner-border spinner-border-sm d-none" role="status">
        </div>

        <div class="h-50 overflow-auto text-left" id="promptsContainer">
            
            
            
            
            
    <div class="nav nav-tabs" role="tablist">
                                
                        
            <a class="nav-link active" id="tabPromptsIndividuais" data-toggle="tab" href="#tab-panel-tabPromptsIndividuais" role="tab" aria-controls="nav-home" aria-selected="true">Individual</a>
                                
                        
            <a class="nav-link " id="tabPromptsDaUnidade" data-toggle="tab" href="#tab-panel-tabPromptsDaUnidade" role="tab" aria-controls="nav-home" aria-selected="true">Unidade</a>
            </div>

    <div class="tab-content">
                                                        
            <div class="tab-pane fade show active" id="tab-panel-tabPromptsIndividuais" role="tabpanel" aria-labelledby="tab-label-tabPromptsIndividuais">
                                    
    
    
    
    <div>
    <div class="table-responsive mt-2">
        <div id="listagemPrompts_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"><div id="listagemPrompts_processing" class="dataTables_processing card" style="display: none;">Processando...<div><div></div><div></div><div></div><div></div></div></div><div class="row"><div class="col-sm-12 col-md-12"><div class="text-right container-acoes-bloco mt-1"></div></div></div><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="listagemPrompts_length"><label><select name="listagemPrompts_length" aria-controls="listagemPrompts" class="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> resultados por página</label></div></div><div class="col-sm-12 col-md-6"><div class="dataTables_paginate paging_simple_numbers" id="listagemPrompts_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="listagemPrompts_previous"><a aria-controls="listagemPrompts" aria-disabled="true" aria-role="link" data-dt-idx="previous" tabindex="0" class="page-link">Anterior</a></li><li class="paginate_button page-item next disabled" id="listagemPrompts_next"><a aria-controls="listagemPrompts" aria-disabled="true" aria-role="link" data-dt-idx="next" tabindex="0" class="page-link">Próximo</a></li></ul></div></div></div><div class="row"><div class="col-sm-12"><table id="listagemPrompts" class="eproc-table w-100 dataTable no-footer dtr-none" data-url="controlador.php?acao=prompt/listar_datatables&amp;funcionalidade-id=3&amp;dto=PromptDTO&amp;hash=4a2f7d7bb3b7ff0cd2a009bf1b4dcf38" aria-describedby="listagemPrompts_info" style="width: 0px;">
            <thead>
            <tr><th class="sorting" tabindex="0" aria-controls="listagemPrompts" rowspan="1" colspan="1" style="width: 0px;" aria-label="Nome: Ordenar colunas de forma ascendente">Nome</th><th class="sorting sorting_desc" tabindex="0" aria-controls="listagemPrompts" rowspan="1" colspan="1" style="width: 0px;" aria-sort="descending" aria-label="Data: Ordenar colunas de forma ascendente">Data</th><th class="acoes-table not-export-col sorting_disabled" rowspan="1" colspan="1" style="width: 0px;" aria-label="Ações">Ações</th></tr></thead><tbody><tr class="odd"><td valign="top" colspan="3" class="dataTables_empty">Nenhum registro encontrado</td></tr></tbody>
            <tfoot>
            </tfoot>
        </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="listagemPrompts_info" role="status" aria-live="polite">Nenhum registro encontrado.</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers"><ul class="pagination"><li class="paginate_button page-item previous disabled"><a aria-controls="listagemPrompts" aria-disabled="true" aria-role="link" data-dt-idx="previous" tabindex="0" class="page-link">Anterior</a></li><li class="paginate_button page-item next disabled"><a aria-controls="listagemPrompts" aria-disabled="true" aria-role="link" data-dt-idx="next" tabindex="0" class="page-link">Próximo</a></li></ul></div></div></div></div>
    </div>
    <script>
        $(function () {
            DataTableHelper.build({
                "tableId": "listagemPrompts",
                "tableTitle": "",
                "isResponsivoComDetalhe": false,
                "isSelecionavel": false,
                "columns": [
                    {
                        "title": "Nome",
                        "data": "Nome"
                    },
                    {
                        "title": "Data",
                        "data": "Inclusao"
                    }
                ],
                "allColumns": [],
                "ajaxData": {
                    "acoes": [
                        ["abrir", false],
                        ["gerarEmenta", false],
                        ["compartilharComAUnidade", false],
                        ["excluir", false]
                    ],
                    "paramsComuns": {
                        0: {
                            "name": "Id",
                            "type": "DTO",
                            "value": "Id"
                        }
                    },
                    "idFormParams": "Prompt"
                },
                "buttons": [],
                "colunaAcoes": function(data, type, row) {
                    return [
                        DataTableHelper.createAcao(
                            'abrir',
                            data[0],
                            '',
                            '',
                            'Abrir',
                            'O',
                            'menu_book'
                        ),
                        DataTableHelper.createAcao(
                            'gerarEmenta',
                            data[1],
                            '',
                            '',
                            'Gerar Ementa',
                            'O',
                            'note_add'
                        ),
                        DataTableHelper.createAcao(
                            'compartilharComAUnidade',
                            data[2],
                            '',
                            '',
                            'Compartilhar com a Unidade',
                            'O',
                            'share'
                        ),
                        DataTableHelper.createAcao(
                            'excluir',
                            data[3],
                            '',
                            '',
                            'Excluir',
                            'O',
                            'delete'
                        )
                    ];
                },
                "drawCallbacks": [],
                "otherDTAttributes": {
                    "paging": true,
                    "pageLength": 25,
                    "order": [1, "desc"]
                },
                "onSelectCallback": () => {}
            });
        });
    </script>
</div>

<div class="modal fade" id="listagemPrompts-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable" role="document" style="max-width: 86%;">
        <div class="modal-content">
        </div>
    </div>
</div>

            
            </div>
                                                        
            <div class="tab-pane fade show " id="tab-panel-tabPromptsDaUnidade" role="tabpanel" aria-labelledby="tab-label-tabPromptsDaUnidade">
                                    
    
    
    
    <div>
    <div class="table-responsive mt-2">
        <div id="listagemPromptsCompartilhadosComigo_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"><div id="listagemPromptsCompartilhadosComigo_processing" class="dataTables_processing card" style="display: none;">Processando...<div><div></div><div></div><div></div><div></div></div></div><div class="row"><div class="col-sm-12 col-md-12"><div class="text-right container-acoes-bloco mt-1"></div></div></div><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="listagemPromptsCompartilhadosComigo_length"><label><select name="listagemPromptsCompartilhadosComigo_length" aria-controls="listagemPromptsCompartilhadosComigo" class="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> resultados por página</label></div></div><div class="col-sm-12 col-md-6"><div class="dataTables_paginate paging_simple_numbers" id="listagemPromptsCompartilhadosComigo_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="listagemPromptsCompartilhadosComigo_previous"><a aria-controls="listagemPromptsCompartilhadosComigo" aria-disabled="true" aria-role="link" data-dt-idx="previous" tabindex="0" class="page-link">Anterior</a></li><li class="paginate_button page-item next disabled" id="listagemPromptsCompartilhadosComigo_next"><a aria-controls="listagemPromptsCompartilhadosComigo" aria-disabled="true" aria-role="link" data-dt-idx="next" tabindex="0" class="page-link">Próximo</a></li></ul></div></div></div><div class="row"><div class="col-sm-12"><table id="listagemPromptsCompartilhadosComigo" class="eproc-table w-100 dataTable no-footer dtr-none" data-url="controlador.php?acao=prompt/da_unidade_listar_datatables&amp;funcionalidade-id=3&amp;dto=PromptDTO&amp;hash=6afcf68396ffb5cf7c223e49ec2c711b" aria-describedby="listagemPromptsCompartilhadosComigo_info" style="width: 0px;">
            <thead>
            <tr><th class="sorting" tabindex="0" aria-controls="listagemPromptsCompartilhadosComigo" rowspan="1" colspan="1" style="width: 0px;" aria-label="Nome: Ordenar colunas de forma ascendente">Nome</th><th class="sorting sorting_desc" tabindex="0" aria-controls="listagemPromptsCompartilhadosComigo" rowspan="1" colspan="1" style="width: 0px;" aria-sort="descending" aria-label="Data de Criação: Ordenar colunas de forma ascendente">Data de Criação</th><th class="sorting" tabindex="0" aria-controls="listagemPromptsCompartilhadosComigo" rowspan="1" colspan="1" style="width: 0px;" aria-label="Compartilhado Por: Ordenar colunas de forma ascendente">Compartilhado Por</th><th class="acoes-table not-export-col sorting_disabled" rowspan="1" colspan="1" style="width: 0px;" aria-label="Ações">Ações</th></tr></thead><tbody><tr class="odd"><td valign="top" colspan="4" class="dataTables_empty">Nenhum registro encontrado</td></tr></tbody>
            <tfoot>
            </tfoot>
        </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="listagemPromptsCompartilhadosComigo_info" role="status" aria-live="polite">Nenhum registro encontrado.</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers"><ul class="pagination"><li class="paginate_button page-item previous disabled"><a aria-controls="listagemPromptsCompartilhadosComigo" aria-disabled="true" aria-role="link" data-dt-idx="previous" tabindex="0" class="page-link">Anterior</a></li><li class="paginate_button page-item next disabled"><a aria-controls="listagemPromptsCompartilhadosComigo" aria-disabled="true" aria-role="link" data-dt-idx="next" tabindex="0" class="page-link">Próximo</a></li></ul></div></div></div></div>
    </div>
    <script>
        $(function () {
            DataTableHelper.build({
                "tableId": "listagemPromptsCompartilhadosComigo",
                "tableTitle": "",
                "isResponsivoComDetalhe": false,
                "isSelecionavel": false,
                "columns": [
                    {
                        "title": "Nome",
                        "data": "Nome"
                    },
                    {
                        "title": "Data de Cria\u00e7\u00e3o",
                        "data": "Inclusao"
                    },
                    {
                        "title": "Compartilhado Por",
                        "data": "CompartilhadorNome"
                    }
                ],
                "allColumns": [],
                "ajaxData": {
                    "acoes": [
                        ["abrir", false],
                        ["gerarEmenta", false],
                        ["excluirCompartilhamento", false]
                    ],
                    "paramsComuns": {
                        0: {
                            "name": "Id",
                            "type": "DTO",
                            "value": "Id"
                        }
                    },
                    "idFormParams": "Prompt"
                },
                "buttons": [],
                "colunaAcoes": function(data, type, row) {
                    return [
                        DataTableHelper.createAcao(
                            'abrir',
                            data[0],
                            '',
                            '',
                            'Abrir',
                            'O',
                            'menu_book'
                        ),
                        DataTableHelper.createAcao(
                            'gerarEmenta',
                            data[1],
                            '',
                            '',
                            'Gerar Ementa',
                            'O',
                            'note_add'
                        ),
                        DataTableHelper.createAcao(
                            'excluirCompartilhamento',
                            data[2],
                            '',
                            '',
                            'Excluir',
                            'O',
                            'delete'
                        )
                    ];
                },
                "drawCallbacks": [],
                "otherDTAttributes": {
                    "paging": true,
                    "pageLength": 25,
                    "order": [1, "desc"]
                },
                "onSelectCallback": () => {}
            });
        });
    </script>
</div>

<div class="modal fade" id="listagemPromptsCompartilhadosComigo-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable" role="document" style="max-width: 86%;">
        <div class="modal-content">
        </div>
    </div>
</div>
            
            </div>
            </div>


        </div>
    </fieldset>
                </div>
            <div class="modal-footer">
                <div class="form-group row text-right">
                    <div class="col">
                        
                                            </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="ementaPersonalizadaIAConfiguracoesModal" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title">Configurações</h1>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body bg-light">
                                    <div class="eproc-card text-left">
                <div class="mr-2">
                    <div class="form-group"><label class="d-flex" for="modelosSelect">Escolha o modelo</label>
<div class="dropdown bootstrap-select"><select id="modelosSelect" name="modelosSelect" onchange="document.cookie = 'ementaModeloLinguagem=' + this.value" class=""><option value="GPT-4.1-mini">OpenAI GPT-4.1 mini</option>
</select><button type="button" tabindex="-1" class="dropdown-toggle form-control form-control-sm" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" data-id="modelosSelect" title="OpenAI GPT-4.1 mini"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">OpenAI GPT-4.1 mini</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-1" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
</div>
<script>UI.PHPHelper.select.init('modelosSelect', "");</script>
                </div>
            </div>
                        </div>
            <div class="modal-footer">
                <div class="form-group row text-right">
                    <div class="col">
                                            <button class="btn btn-sm btn-primary" onclick="$('#ementaPersonalizadaIAConfiguracoesModal').modal('hide')">Ok</button>

                                </div>
                </div>
            </div>
        </div>
    </div>
</div></div><script>
$(function(){
    CKEDITOR.on('instanceReady', function() { 
        // issue #9583 - Força configuração no ckeditor para não enviar html entities para o backend, mas tudo como &#xHEXA;
        CKEDITOR.config.entities_processNumerical ='force';

        // issue #2385 - Mantém as tags na mesma linha do texto, trocando o inline-block do wrapper por apenas inline, visto que está dentro de um <p>
        CKEDITOR.addCss(".cke_widget_inline { display:inline; }");
    });
});
</script>        <script>
        function mostrar_informacoes_de_desempenho() {
            alert(`
                - Usuário: alexandress / GCRI0602 \n
                - Acesso ao servidor [svmlx-eproc2gsrv-20] às 18:09:56 do dia 16/02/2026 \n
                - Tempo de Processamento: 0.134s \n
                - Utilização de Memória: 3472.76KB`);
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
        </div>
    

                        <div class="bootstrap-styles ">
                <button id="backTop" type="button" class="btn btn-light shadow-sm d-none" style="display:none;" aria-label="Navegar para início" tabindex="-1">
                    <i class="material-icons p-0">keyboard_arrow_up</i>
                </button>
                <button id="backBottom" type="button" class="btn btn-light shadow-sm d-none" style="display:none;" aria-label="Navegar para fim" tabindex="-1">
                    <i class="material-icons p-0">keyboard_arrow_down</i>
                </button>
            </div>
            
    <input type="hidden" id="hdnInfraPrefixoCookie" name="hdnInfraPrefixoCookie" value="TJSC_Eproc_alexandress">

                                                <input type="hidden" name="url_websocket" value="wss://eprocwebsocket.tjsc.jus.br:443">
            <input type="hidden" name="url_gerar_ticket" value="controlador_ajax.php?acao_ajax=controle_acesso_websocket_gerar_ticket&amp;hash=647e57da909639c7c254f733288aee7e">
            <input type="hidden" name="url_websocket_teste" value="controlador.php?acao=infra/teste_websocket/notificar&amp;hash=2b3be04432b0efff9f2681bf231f4161">
            
    <div id="infraDivImpressao" class="infraImpressao "></div>
    

    <div class="bootstrap-styles" aria-live="polite">
        <div id="toasts-container" class="d-block flex-column-reverse w-100 p-2 align-content-end h-100 w-100 fixed-bottom pe-none" style="pointer-events: none"></div>
    </div>

    <script src="js/siscom_desktop_icone.js"></script>





<div class="cke_screen_reader_only cke_copyformatting_notification"><div aria-live="polite"></div></div><div style="position: absolute; left: -9999px; top: -9999px; margin: 0px; padding: 0px; border: 0px; width: 5722.14px;"></div><ul id="cke_611" class="cke_autocomplete_panel" role="listbox" style="z-index: 9997;"></ul><ul id="cke_613" class="cke_autocomplete_panel" role="listbox" style="z-index: 9997;"></ul><ul id="cke_615" class="cke_autocomplete_panel" role="listbox" style="z-index: 9997;"></ul><ul id="cke_724" class="cke_autocomplete_panel" role="listbox" style="z-index: 9997;"></ul><ul id="cke_726" class="cke_autocomplete_panel" role="listbox" style="z-index: 9997;"></ul><ul id="cke_728" class="cke_autocomplete_panel" role="listbox" style="z-index: 9997;"></ul></body><lt-toolbar contenteditable="false" data-lt-adjust-appearance="true" data-cke-temp="1" data-lt-force-appearance="light" style="display: none;"><lt-div class="lt-toolbar__wrapper" style="left: 964px; position: fixed !important; top: auto !important; bottom: 12px !important; z-index: auto; opacity: 1 !important; pointer-events: all !important;"><lt-div class="lt-toolbar__status-icon lt-toolbar__status-icon--has-errors lt-toolbar__status-icon--has-15-errors"><lt-span class="lt-icon__tooltip lt-icon__tooltip--top-right"></lt-span></lt-div><lt-div class="lt-toolbar__premium-icon-dot"></lt-div></lt-div></lt-toolbar><lt-toolbar contenteditable="false" data-lt-adjust-appearance="true" data-cke-temp="1" data-lt-force-appearance="light" style="display: none;"><lt-div class="lt-toolbar__wrapper lt-toolbar__wrapper--hide"><lt-div class="lt-toolbar__status-icon lt-toolbar__status-icon--has-errors lt-toolbar__status-icon--has-25-errors"><lt-span class="lt-icon__tooltip lt-icon__tooltip--top-right"></lt-span></lt-div><lt-div class="lt-toolbar__premium-icon-dot"></lt-div></lt-div></lt-toolbar></html>