// =====================================================================
// FUNÇÃO DE DETECÇÃO DE DATA DA SESSÃO - eProbe
// =====================================================================
// Esta função detecta a data da sessão no eProc e armazena na variável global
// dataSessaoPautado para uso posterior na extensão.
// =====================================================================

(function () {
    "use strict";

    // Variável global para armazenar a data da sessão (deve estar definida no main.js)
    // let dataSessaoPautado = null;

    // Função principal de detecção da data da sessão
    function detectarDataSessao() {
        console.log("🔍 DETECÇÃO SESSÃO: Função detectarDataSessao() iniciada");

        // NAVEGAÇÃO HIERÁRQUICA PELA ESTRUTURA DOM DO eProc
        console.log(
            "🎯 DETECÇÃO SESSÃO: Navegando pela hierarquia DOM específica do eProc"
        );

        // PASSO 1: Encontrar divInfraAreaTelaD
        console.log("📍 PASSO 1: Procurando <div id='divInfraAreaTelaD'>");
        const divInfraAreaTelaD = document.querySelector("#divInfraAreaTelaD");

        if (!divInfraAreaTelaD) {
            console.log("❌ ERRO PASSO 1: divInfraAreaTelaD não encontrado");
            return {
                encontrada: false,
                motivo: "Elemento #divInfraAreaTelaD não encontrado - página incompatível",
                passo: 1,
            };
        }
        console.log("✅ PASSO 1: divInfraAreaTelaD encontrado");

        // PASSO 2: Encontrar frmProcessoLista dentro da área
        console.log(
            "📍 PASSO 2: Procurando <form id='frmProcessoLista'> dentro de divInfraAreaTelaD"
        );
        const frmProcessoLista =
            divInfraAreaTelaD.querySelector("#frmProcessoLista");

        if (!frmProcessoLista) {
            console.log(
                "❌ ERRO PASSO 2: frmProcessoLista não encontrado dentro de divInfraAreaTelaD"
            );
            return {
                encontrada: false,
                motivo: "Elemento #frmProcessoLista não encontrado na área principal",
                passo: 2,
            };
        }
        console.log("✅ PASSO 2: frmProcessoLista encontrado");

        // PASSO 3: Encontrar fieldset fldMinutas (DIRETO no formulário, SEM fldCapa)
        console.log(
            "📍 PASSO 3: Procurando <fieldset id='fldMinutas'> dentro do formulário"
        );
        const fldMinutas = frmProcessoLista.querySelector("#fldMinutas");

        if (!fldMinutas) {
            console.log(
                "❌ ERRO PASSO 3: fldMinutas não encontrado dentro do formulário"
            );
            return {
                encontrada: false,
                motivo: "Elemento #fldMinutas não encontrado no formulário",
                passo: 3,
            };
        }
        console.log("✅ PASSO 3: fldMinutas encontrado");

        // PASSO 4: Encontrar div conteudoMinutas
        console.log(
            "📍 PASSO 4: Procurando <div id='conteudoMinutas'> dentro de fldMinutas"
        );
        const conteudoMinutas = fldMinutas.querySelector("#conteudoMinutas");

        if (!conteudoMinutas) {
            console.log(
                "❌ ERRO PASSO 4: conteudoMinutas não encontrado dentro de fldMinutas"
            );
            return {
                encontrada: false,
                motivo: "Elemento #conteudoMinutas não encontrado nas minutas",
                passo: 4,
            };
        }
        console.log("✅ PASSO 4: conteudoMinutas encontrado");

        // PASSO 5: Encontrar legend com aria-label="Histórico"
        console.log(
            "📍 PASSO 5: Procurando <legend aria-label='Histórico' id='legMinutas'> dentro de conteudoMinutas"
        );
        const legMinutas = conteudoMinutas.querySelector(
            "legend[aria-label='Histórico']#legMinutas"
        );

        if (!legMinutas) {
            console.log(
                "❌ ERRO PASSO 5: legend com aria-label='Histórico' e id='legMinutas' não encontrado dentro de conteudoMinutas"
            );
            return {
                encontrada: false,
                motivo: "Elemento legend[aria-label='Histórico']#legMinutas não encontrado no conteúdo das minutas",
                passo: 5,
            };
        }
        console.log("✅ PASSO 5: legend com aria-label='Histórico' encontrado");

        // PASSO 6: Encontrar botão com class="infraLegendObrigatorio" dentro da legend
        console.log(
            "📍 PASSO 6: Procurando <button class='infraLegendObrigatorio'> dentro da legend"
        );
        const botaoInfraLegend = legMinutas.querySelector(
            "button.infraLegendObrigatorio"
        );

        if (!botaoInfraLegend) {
            console.log(
                "❌ ERRO PASSO 6: botão com class='infraLegendObrigatorio' não encontrado dentro da legend"
            );
            return {
                encontrada: false,
                motivo: "Elemento button.infraLegendObrigatorio não encontrado na legend",
                passo: 6,
            };
        }

        console.log(
            "🎉 PASSO 6: BOTÃO infraLegendObrigatorio ENCONTRADO! NAVEGAÇÃO COMPLETA!"
        );
        console.log("📋 DETECÇÃO SESSÃO: Detalhes do elemento encontrado:");
        console.log("  • Tag:", botaoInfraLegend.tagName);
        console.log("  • Classes:", botaoInfraLegend.className || "nenhuma");
        console.log(
            "  • Texto visível:",
            (botaoInfraLegend.textContent || "").substring(0, 200) + "..."
        );

        // Verificar todos os atributos
        const attrs = botaoInfraLegend.attributes;
        console.log(`  • Total de atributos: ${attrs.length}`);
        for (let i = 0; i < attrs.length; i++) {
            const attr = attrs[i];
            console.log(
                `    - ${attr.name}: ${attr.value.substring(0, 100)}${
                    attr.value.length > 100 ? "..." : ""
                }`
            );
        }

        // AGORA QUE ENCONTRAMOS O BOTÃO, BUSCAR O TEXTO DA DATA NA REGIÃO PRÓXIMA
        console.log(
            "🎯 DETECÇÃO SESSÃO: PRIORIDADE 2 - Buscar texto 'Mérito (Incluído em Pauta em' na região próxima"
        );

        // ESTRATÉGIA 1: Verificar se o texto está no próprio botão
        const textoBotao =
            botaoInfraLegend.textContent || botaoInfraLegend.innerText || "";
        console.log(`📋 DETECÇÃO SESSÃO: Texto do botão: "${textoBotao}"`);

        // ESTRATÉGIA 2: Buscar na legend pai e elementos próximos
        let textoParaBusca = "";
        let fonteUsada = "";

        if (textoBotao.includes("Mérito (Incluído em Pauta em")) {
            console.log(
                "✅ DETECÇÃO SESSÃO: Texto encontrado diretamente no botão"
            );
            textoParaBusca = textoBotao.trim();
            fonteUsada = "button.textContent";
        } else {
            console.log(
                "🔍 DETECÇÃO SESSÃO: Texto não está no botão, buscando na região próxima..."
            );

            // Buscar na legend pai
            const textoLegend =
                legMinutas.textContent || legMinutas.innerText || "";
            console.log(
                `📋 DETECÇÃO SESSÃO: Texto da legend: "${textoLegend.substring(
                    0,
                    200
                )}${textoLegend.length > 200 ? "..." : ""}"`
            );

            if (textoLegend.includes("Mérito (Incluído em Pauta em")) {
                console.log(
                    "✅ DETECÇÃO SESSÃO: Texto encontrado na legend pai"
                );
                textoParaBusca = textoLegend.trim();
                fonteUsada = "legend.textContent";
            } else {
                // Buscar no fieldset pai (fldMinutas)
                const textoFieldset =
                    fldMinutas.textContent || fldMinutas.innerText || "";
                console.log(
                    `📋 DETECÇÃO SESSÃO: Texto do fieldset: "${textoFieldset.substring(
                        0,
                        200
                    )}${textoFieldset.length > 200 ? "..." : ""}"`
                );

                if (textoFieldset.includes("Mérito (Incluído em Pauta em")) {
                    console.log(
                        "✅ DETECÇÃO SESSÃO: Texto encontrado no fieldset pai"
                    );
                    textoParaBusca = textoFieldset.trim();
                    fonteUsada = "fieldset.textContent";
                } else {
                    // Buscar no div conteudoMinutas
                    const textoConteudo =
                        conteudoMinutas.textContent ||
                        conteudoMinutas.innerText ||
                        "";
                    console.log(
                        `📋 DETECÇÃO SESSÃO: Texto do conteúdo: "${textoConteudo.substring(
                            0,
                            200
                        )}${textoConteudo.length > 200 ? "..." : ""}"`
                    );

                    if (
                        textoConteudo.includes("Mérito (Incluído em Pauta em")
                    ) {
                        console.log(
                            "✅ DETECÇÃO SESSÃO: Texto encontrado no div conteudoMinutas"
                        );
                        textoParaBusca = textoConteudo.trim();
                        fonteUsada = "conteudoMinutas.textContent";
                    }
                }
            }
        }

        // FALLBACK: Se não encontrou o texto específico, tentar fontes do botão
        if (!textoParaBusca && textoBotao.trim().length > 0) {
            console.log(
                "🔄 DETECÇÃO SESSÃO: Fallback - usando texto do botão mesmo sem padrão específico"
            );
            textoParaBusca = textoBotao.trim();
            fonteUsada = "button.textContent.fallback";
        } else if (!textoParaBusca) {
            console.log(
                "❌ DETECÇÃO SESSÃO: ERRO - Nenhum texto encontrado para análise"
            );
            return {
                encontrada: false,
                motivo: "Nenhum texto encontrado nas regiões próximas ao botão infraLegendObrigatorio",
                passo: 7,
            };
        }

        console.log(
            `🎯 DETECÇÃO SESSÃO: Usando fonte "${fonteUsada}" para busca de data`
        );
        console.log(
            `📋 DETECÇÃO SESSÃO: Texto para análise: "${textoParaBusca}"`
        );

        // ANÁLISE DE PADRÕES DE DATA
        console.log(
            "🔍 DETECÇÃO SESSÃO: Iniciando análise de padrões de data..."
        );

        // Padrões específicos para datas em português (incluindo contexto de pauta)
        const padroesBrasil = [
            /(?:em|Em)\s+(\d{1,2}\/\d{1,2}\/\d{4})/g, // "em 15/07/2025"
            /(?:Pauta|pauta)\s+(?:em|Em)\s+(\d{1,2}\/\d{1,2}\/\d{4})/g, // "Pauta em 15/07/2025"
            /(?:Incluído|incluído)\s+(?:em|Em)\s+(?:Pauta|pauta)\s+(?:em|Em)\s+(\d{1,2}\/\d{1,2}\/\d{4})/g, // "Incluído em Pauta em 15/07/2025"
            /\d{1,2}\/\d{1,2}\/\d{4}/g, // "15/07/2025" (direto)
            /\d{1,2}-\d{1,2}-\d{4}/g, // "15-07-2025"
            /\d{1,2}\.\d{1,2}\.\d{4}/g, // "15.07.2025"
        ];

        let datasEncontradas = [];

        padroesBrasil.forEach((padrao, index) => {
            console.log(
                `🔍 DETECÇÃO SESSÃO: Testando padrão ${index + 1}: ${
                    padrao.source
                }`
            );

            // Reset do lastIndex para garantir busca do início
            padrao.lastIndex = 0;
            let match;

            while ((match = padrao.exec(textoParaBusca)) !== null) {
                const dataEncontrada = match[1] || match[0]; // Captura grupo ou match completo
                console.log(
                    `📅 DETECÇÃO SESSÃO: Data encontrada com padrão ${
                        index + 1
                    }: "${dataEncontrada}"`
                );

                // Validar se é uma data válida
                const dataValidada = validarDataBrasileira(dataEncontrada);
                if (dataValidada) {
                    datasEncontradas.push({
                        original: dataEncontrada,
                        validada: dataValidada,
                        padrao: index + 1,
                        fonte: fonteUsada,
                    });
                    console.log(
                        `✅ DETECÇÃO SESSÃO: Data válida adicionada: ${dataValidada.dataFormatada}`
                    );
                } else {
                    console.log(
                        `❌ DETECÇÃO SESSÃO: Data inválida rejeitada: "${dataEncontrada}"`
                    );
                }
            }
        });

        if (datasEncontradas.length === 0) {
            console.log(
                "❌ DETECÇÃO SESSÃO: ERRO - Nenhuma data válida encontrada no texto"
            );
            return {
                encontrada: false,
                motivo: "Nenhuma data válida encontrada no texto analisado",
                passo: 8,
                textoAnalisado: textoParaBusca.substring(0, 200),
                fonte: fonteUsada,
            };
        } else {
            console.log(
                `📅 DETECÇÃO SESSÃO: ${datasEncontradas.length} data(s) válida(s) encontrada(s)`
            );

            // Se há múltiplas datas, escolher a mais recente e válida
            let dataSelecionada;

            if (datasEncontradas.length === 1) {
                dataSelecionada = datasEncontradas[0].validada;
                console.log(
                    "📅 DETECÇÃO SESSÃO: Apenas uma data válida, selecionando automaticamente"
                );
            } else {
                console.log(
                    "📅 DETECÇÃO SESSÃO: Múltiplas datas encontradas, selecionando a mais recente..."
                );

                // Ordenar por timestamp (mais recente primeiro)
                datasEncontradas.sort(
                    (a, b) => b.validada.timestamp - a.validada.timestamp
                );
                dataSelecionada = datasEncontradas[0].validada;

                console.log(
                    `📅 DETECÇÃO SESSÃO: Data mais recente selecionada: ${dataSelecionada.dataFormatada}`
                );

                // Log de todas as datas para debug
                datasEncontradas.forEach((item, idx) => {
                    console.log(
                        `  ${idx + 1}. ${item.validada.dataFormatada} (padrão ${
                            item.padrao
                        }, fonte: ${item.fonte})`
                    );
                });
            }

            // ARMAZENAR NA VARIÁVEL GLOBAL
            if (typeof window.dataSessaoPautado !== "undefined") {
                window.dataSessaoPautado = dataSelecionada;
                console.log(
                    "✅ DETECÇÃO SESSÃO: Data armazenada na variável global window.dataSessaoPautado"
                );
            } else if (typeof dataSessaoPautado !== "undefined") {
                dataSessaoPautado = dataSelecionada;
                console.log(
                    "✅ DETECÇÃO SESSÃO: Data armazenada na variável global dataSessaoPautado"
                );
            } else {
                // Criar a variável se não existir
                window.dataSessaoPautado = dataSelecionada;
                console.log(
                    "✅ DETECÇÃO SESSÃO: Variável global criada e data armazenada em window.dataSessaoPautado"
                );
            }

            console.log(
                "🎉 DETECÇÃO SESSÃO: SUCESSO! Data da sessão detectada e armazenada:"
            );
            console.log(`  📅 Data Original: ${dataSelecionada.dataOriginal}`);
            console.log(
                `  📅 Data Formatada: ${dataSelecionada.dataFormatada}`
            );
            console.log(`  📅 Dia: ${dataSelecionada.dia}`);
            console.log(`  📅 Mês: ${dataSelecionada.mes}`);
            console.log(`  📅 Ano: ${dataSelecionada.ano}`);
            console.log(`  📅 Timestamp: ${dataSelecionada.timestamp}`);

            return {
                encontrada: true,
                data: dataSelecionada,
                totalDatasEncontradas: datasEncontradas.length,
                fonte: fonteUsada,
                textoAnalisado: textoParaBusca.substring(0, 200),
            };
        }
    }

    // Função auxiliar para validar data brasileira
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

    // Funções utilitárias para acessar a data da sessão
    function getDataSessaoPautado() {
        return window.dataSessaoPautado || dataSessaoPautado || null;
    }

    function hasDataSessaoPautado() {
        const data = getDataSessaoPautado();
        return data !== null && data !== undefined;
    }

    function resetDataSessaoPautado() {
        if (typeof window.dataSessaoPautado !== "undefined") {
            window.dataSessaoPautado = null;
        }
        if (typeof dataSessaoPautado !== "undefined") {
            dataSessaoPautado = null;
        }
        console.log("🔄 DETECÇÃO SESSÃO: Variável global resetada");
    }

    function showDataSessaoPautadoInfo() {
        const data = getDataSessaoPautado();
        if (data) {
            console.log("📅 INFO DATA SESSÃO:");
            console.log(`  • Data Original: ${data.dataOriginal}`);
            console.log(`  • Data Formatada: ${data.dataFormatada}`);
            console.log(`  • Dia: ${data.dia}`);
            console.log(`  • Mês: ${data.mes}`);
            console.log(`  • Ano: ${data.ano}`);
            console.log(`  • Timestamp: ${data.timestamp}`);
            return data;
        } else {
            console.log("❌ INFO DATA SESSÃO: Nenhuma data detectada ainda");
            return null;
        }
    }

    // Exportar funções se estiver sendo usado como módulo
    if (typeof module !== "undefined" && module.exports) {
        module.exports = {
            detectarDataSessao,
            getDataSessaoPautado,
            hasDataSessaoPautado,
            resetDataSessaoPautado,
            showDataSessaoPautadoInfo,
            validarDataBrasileira,
        };
    }

    // Disponibilizar funções globalmente para teste
    window.detectarDataSessao = detectarDataSessao;
    window.getDataSessaoPautado = getDataSessaoPautado;
    window.hasDataSessaoPautado = hasDataSessaoPautado;
    window.resetDataSessaoPautado = resetDataSessaoPautado;
    window.showDataSessaoPautadoInfo = showDataSessaoPautadoInfo;

    console.log(
        "✅ DETECÇÃO SESSÃO: Módulo carregado e funções disponibilizadas globalmente"
    );
})();
