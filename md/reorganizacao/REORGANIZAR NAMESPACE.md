        // ##### NAMESPACE #####

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
            // 🎨 NOVAS FUNÇÕES FIGMA
            criarCardMaterialDesign,
            obterConfigFigmaStatus,
            adicionarTooltipInterativo,
            adicionarRichTooltipMaterialDesign,
            // 🔧 FUNÇÕES DE TOOLTIP CORRIGIDAS
            criarTooltipSimplificado,
            testarFuncaoTooltip,
            // Funções da navbar foram centralizadas em gerenciarNavbarEprobe()
        };

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
        // 🔄 FUNÇÕES DE DEBUG PARA ALTERNÂNCIA
        window.SENT1_AUTO.debugAlternanciaEproc = function () {
            console.log("🧪 TESTE: Iniciando teste de alternância no eProc");
        window.SENT1_AUTO.findToggleTarget = findToggleTarget;
        window.SENT1_AUTO.implementarAlternanciaExpandirRetrair =
            implementarAlternanciaExpandirRetrair;
        window.SENT1_AUTO.isElementSafeForToggle = isElementSafeForToggle;
        // 🧪 FUNÇÃO DE TESTE MATERIAL BASE
        window.SENT1_AUTO.testarMaterialBaseLayout = function () {
            console.log(
                "🧪 TESTE MATERIAL BASE: Verificando especificações CSS exatas"
            );

            try {
                // Dados de teste
                const dadosTeste = {
                    status: "PAUTADO",
                    data: "29/01/2025",
                    orgao: "2ª Câmara de Direito Civil",
                };
