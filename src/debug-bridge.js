// ============================================================
// eProbe Debug Bridge - Funcoes expostas ao contexto da pagina
// Roda em "world": "MAIN" para ser acessivel via console DevTools
// ============================================================
(function () {
    "use strict";

    // Inicializar namespace no contexto da pagina (se nao existir)
    if (!window.SENT1_AUTO) {
        window.SENT1_AUTO = {};
    }

    // Regex para redacao de dados sensiveis
    var regexProcessoFormatado = /\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4}/g;
    var regexProcessoNumerico = /\b\d{20}\b/g;
    var regexHash = /hash=[a-f0-9]{32}/gi;
    var regexNomeProprio = /[A-Z][a-z]+\s[A-Z][a-z]+(?:\s[A-Z][a-z]+)*/g;

    function redactar(texto) {
        if (!texto) return texto;
        return texto
            .replace(regexProcessoFormatado, "PROCESSO_REDACTED")
            .replace(regexProcessoNumerico, "NUM_REDACTED")
            .replace(regexHash, "hash=REDACTED")
            .replace(regexNomeProprio, "NOME_REDACTED");
    }

    /**
     * EXPORTAR ESTRUTURA DOM PARA DEBUG
     * Captura a estrutura DOM real do eProc com redacao de dados sensiveis.
     * Uso: window.SENT1_AUTO.exportarEstruturaDOM()
     * Retorna JSON estruturado pronto para documentacao.
     */
    function exportarEstruturaDOM() {
        try {
            var url = window.location.href;
            var urlObj = new URL(url);
            var acaoParam = urlObj.searchParams.get("acao") || "desconhecida";
            var dominio = urlObj.hostname;
            var grau = dominio.includes("eproc2g")
                ? "2o Grau"
                : dominio.includes("eproc1g")
                  ? "1o Grau"
                  : "Desconhecido";

            // Seletores criticos por tipo de pagina
            var seletoresPorPagina = {
                processo_selecionar: [
                    "#divInfraAreaProcesso",
                    "#conteudoMinutas",
                    "#fldMinutas",
                    "#tblEventos",
                    "#fldCapa",
                    "#divCapaProcesso",
                    "#divListaRecursosMinuta",
                    ".navbar.bg-instancia",
                    "#conteudoInternoMinutas_0",
                    "#LegNovaMinuta",
                ],
                minuta_editar: [
                    "#divInfraAreaProcesso",
                    "#frmEditor",
                    "#divEditor",
                    ".navbar.bg-instancia",
                    "fieldset.infraFieldset",
                    "#txtConteudo",
                    "#divInfraBarraComandosSuperior",
                ],
                sessao_julgamento_listar: [
                    "#divInfraAreaProcesso",
                    ".navbar.bg-instancia",
                    "#tblSessoes",
                    "fieldset.infraFieldset",
                    "#divInfraBarraComandosSuperior",
                ],
                sessao_julgamento_exibir_painel: [
                    "#divInfraAreaProcesso",
                    ".navbar.bg-instancia",
                    "#divPainel",
                    "fieldset.infraFieldset",
                ],
                usuario_tipo_monitoramento_localizador_listar: [
                    "#divInfraAreaProcesso",
                    ".navbar.bg-instancia",
                    "#tblLocalizadores",
                    "fieldset.infraFieldset",
                ],
            };

            // Selecionar seletores para a pagina atual
            var seletoresBase = [
                "#divInfraAreaProcesso",
                "#conteudoMinutas",
                "#fldMinutas",
                "#tblEventos",
                "#fldCapa",
                ".navbar.bg-instancia",
            ];
            var seletores = seletoresPorPagina[acaoParam] || seletoresBase;

            // Funcao para extrair arvore esqueleto (hierarquia sem conteudo)
            function extrairArvore(elemento, profundidade, maxProf) {
                if (!elemento || profundidade > (maxProf || 4)) return null;
                var filhos = [];
                var childElements = elemento.children;
                var maxFilhos = Math.min(childElements.length, 25);
                for (var i = 0; i < maxFilhos; i++) {
                    var filho = childElements[i];
                    var nodo = {
                        tag: filho.tagName.toLowerCase(),
                    };
                    if (filho.id) nodo.id = redactar(filho.id);
                    if (
                        filho.className &&
                        typeof filho.className === "string" &&
                        filho.className.trim()
                    ) {
                        nodo.classes = filho.className
                            .trim()
                            .split(/\s+/)
                            .slice(0, 8);
                    }
                    // Atributos data-*
                    var dataAttrs = {};
                    for (var j = 0; j < filho.attributes.length; j++) {
                        var attr = filho.attributes[j];
                        if (attr.name.startsWith("data-")) {
                            dataAttrs[attr.name] = redactar(
                                attr.value.substring(0, 80),
                            );
                        }
                    }
                    if (Object.keys(dataAttrs).length > 0)
                        nodo.dataAttrs = dataAttrs;
                    // Filhos recursivos
                    if (filho.children.length > 0) {
                        var subArvore = extrairArvore(
                            filho,
                            profundidade + 1,
                            maxProf,
                        );
                        if (subArvore && subArvore.length > 0)
                            nodo.filhos = subArvore;
                    }
                    filhos.push(nodo);
                }
                if (childElements.length > maxFilhos) {
                    filhos.push({
                        tag:
                            "...mais " +
                            (childElements.length - maxFilhos) +
                            " elementos",
                    });
                }
                return filhos;
            }

            // Coletar dados de cada seletor
            var elementos = {};
            seletores.forEach(function (sel) {
                var el = document.querySelector(sel);
                if (el) {
                    var info = {
                        encontrado: true,
                        tagName: el.tagName,
                        id: el.id || null,
                        classes:
                            el.className && typeof el.className === "string"
                                ? el.className.trim().split(/\s+/)
                                : [],
                        filhosDirectos: el.children.length,
                        filhosIDs: Array.from(el.children)
                            .slice(0, 30)
                            .map(function (c) {
                                return (
                                    (c.id
                                        ? "#" + redactar(c.id)
                                        : c.tagName.toLowerCase()) +
                                    (c.className &&
                                    typeof c.className === "string"
                                        ? "." +
                                          c.className
                                              .trim()
                                              .split(/\s+/)
                                              .slice(0, 3)
                                              .join(".")
                                        : "")
                                );
                            }),
                        arvore: extrairArvore(el, 0, 3),
                    };
                    // Atributos data-* do elemento raiz
                    var rootDataAttrs = {};
                    for (var j = 0; j < el.attributes.length; j++) {
                        var attr = el.attributes[j];
                        if (attr.name.startsWith("data-")) {
                            rootDataAttrs[attr.name] = redactar(
                                attr.value.substring(0, 80),
                            );
                        }
                    }
                    if (Object.keys(rootDataAttrs).length > 0)
                        info.dataAttrs = rootDataAttrs;
                    // Dimensoes
                    var rect = el.getBoundingClientRect();
                    info.dimensoes = {
                        width: Math.round(rect.width),
                        height: Math.round(rect.height),
                        visivel: rect.width > 0 && rect.height > 0,
                    };
                    // Estilos computados relevantes
                    var computed = window.getComputedStyle(el);
                    info.estilos = {
                        display: computed.display,
                        visibility: computed.visibility,
                        position: computed.position,
                    };
                    elementos[sel] = info;
                } else {
                    elementos[sel] = { encontrado: false };
                }
            });

            // Detectar elementos eProbe injetados
            var eprobeInjetados = {
                iconesSubstituidos: document.querySelectorAll(
                    "[data-eprobe-icon-replaced]",
                ).length,
                iconContainers: document.querySelectorAll(
                    "[data-eprobe-icon-container]",
                ).length,
                navbarElement: !!document.querySelector(
                    "#eprobe-navbar-element",
                ),
                botaoSent1: !!document.querySelector("#sent1-auto-button"),
                cardsEprobe: document.querySelectorAll(
                    '[class*="eprobe-figma"]',
                ).length,
                estilosEprobe: document.querySelectorAll('style[id*="eprobe"]')
                    .length,
            };

            // Colunas da tabela de eventos (se existir)
            var colunasEventos = null;
            var tblEventos = document.querySelector("#tblEventos thead tr");
            if (tblEventos) {
                colunasEventos = Array.from(tblEventos.children).map(
                    function (th, i) {
                        return {
                            indice: i + 1,
                            texto: redactar(th.textContent.trim()) || "(icone)",
                            width: th.getAttribute("width") || "auto",
                            classe: th.className || null,
                        };
                    },
                );
            }

            // Linhas de evento (amostra das 3 primeiras)
            var amostraEventos = null;
            var linhasEvento = document.querySelectorAll(
                "#tblEventos tbody tr",
            );
            if (linhasEvento.length > 0) {
                amostraEventos = {
                    totalLinhas: linhasEvento.length,
                    amostra: Array.from(linhasEvento)
                        .slice(0, 3)
                        .map(function (tr) {
                            return {
                                id: tr.id || null,
                                classes: tr.className,
                                dataParte:
                                    tr.getAttribute("data-parte") || null,
                                celulas: Array.from(tr.children).map(
                                    function (td) {
                                        return {
                                            classe: td.className || null,
                                            textoReduzido:
                                                redactar(
                                                    td.textContent
                                                        .trim()
                                                        .substring(0, 60),
                                                ) || "(vazio)",
                                        };
                                    },
                                ),
                            };
                        }),
                };
            }

            var resultado = {
                metadados: {
                    tipoPagina: acaoParam,
                    tribunal: "TJSC",
                    grau: grau,
                    dominio: dominio,
                    urlRedactada: redactar(url),
                    timestamp: new Date().toISOString(),
                    versaoFuncao: "1.0",
                },
                elementos: elementos,
                eprobeInjetados: eprobeInjetados,
                colunasEventos: colunasEventos,
                amostraEventos: amostraEventos,
            };

            console.log("=== ESTRUTURA DOM eProbe ===");
            console.log(JSON.stringify(resultado, null, 2));
            console.log("=== FIM ===");

            // Tentar copiar para clipboard via API do DevTools
            if (typeof copy === "function") {
                copy(JSON.stringify(resultado, null, 2));
                console.log(
                    "Resultado copiado para o clipboard automaticamente.",
                );
            }

            return resultado;
        } catch (error) {
            console.error("exportarEstruturaDOM: Erro:", error);
            return {
                erro: error.message,
                timestamp: new Date().toISOString(),
            };
        }
    }

    /**
     * EXPORTAR ESTRUTURA DOM EM FORMATO MARKDOWN
     * Gera output formatado em Markdown pronto para colar em documentacao.
     * Uso: window.SENT1_AUTO.exportarEstruturaDOM_copyMarkdown()
     */
    function exportarEstruturaDOM_copyMarkdown() {
        try {
            var dados = exportarEstruturaDOM();
            if (dados.erro) return dados;

            var md = [];
            var meta = dados.metadados;
            md.push("# DOM Snapshot - Estrutura Real do eProc");
            md.push("");
            md.push("**Pagina**: `" + meta.tipoPagina + "`");
            md.push(
                "**Tribunal**: " +
                    meta.tribunal +
                    " - " +
                    meta.grau +
                    " (" +
                    meta.dominio +
                    ")",
            );
            md.push("**Data da captura**: " + meta.timestamp);
            md.push("");

            // Funcao para renderizar arvore em formato indentado
            function renderArvore(nodes, indent) {
                if (!nodes) return;
                var prefixo = indent || "";
                for (var i = 0; i < nodes.length; i++) {
                    var node = nodes[i];
                    var isLast = i === nodes.length - 1;
                    var conector = isLast ? "L-- " : "|-- ";
                    var subPrefixo = isLast ? "    " : "|   ";
                    var desc = node.tag;
                    if (node.id) desc += "#" + node.id;
                    if (node.classes && node.classes.length > 0)
                        desc += "." + node.classes.join(".");
                    if (node.dataAttrs) {
                        var attrs = Object.keys(node.dataAttrs).map(
                            function (k) {
                                return k + '="' + node.dataAttrs[k] + '"';
                            },
                        );
                        desc += " [" + attrs.join(", ") + "]";
                    }
                    md.push(prefixo + conector + desc);
                    if (node.filhos) {
                        renderArvore(node.filhos, prefixo + subPrefixo);
                    }
                }
            }

            // Elementos encontrados
            var seletores = Object.keys(dados.elementos);
            for (var s = 0; s < seletores.length; s++) {
                var sel = seletores[s];
                var el = dados.elementos[sel];
                md.push("## " + sel);
                md.push("");
                if (!el.encontrado) {
                    md.push("**Nao encontrado na pagina.**");
                    md.push("");
                    continue;
                }
                md.push("- **Tag**: `" + el.tagName + "`");
                if (el.id) md.push("- **ID**: `" + el.id + "`");
                if (el.classes.length > 0)
                    md.push("- **Classes**: `" + el.classes.join("`, `") + "`");
                md.push("- **Filhos diretos**: " + el.filhosDirectos);
                md.push(
                    "- **Dimensoes**: " +
                        el.dimensoes.width +
                        "x" +
                        el.dimensoes.height +
                        "px (visivel: " +
                        el.dimensoes.visivel +
                        ")",
                );
                md.push(
                    "- **Display**: `" +
                        el.estilos.display +
                        "`, Visibility: `" +
                        el.estilos.visibility +
                        "`, Position: `" +
                        el.estilos.position +
                        "`",
                );
                if (el.dataAttrs) {
                    md.push(
                        "- **Data attrs**: " + JSON.stringify(el.dataAttrs),
                    );
                }
                md.push("");
                if (el.filhosIDs && el.filhosIDs.length > 0) {
                    md.push("### Filhos diretos");
                    md.push("");
                    el.filhosIDs.forEach(function (fid) {
                        md.push("- `" + fid + "`");
                    });
                    md.push("");
                }
                if (el.arvore && el.arvore.length > 0) {
                    md.push("### Hierarquia DOM");
                    md.push("");
                    md.push("```");
                    md.push(sel);
                    renderArvore(el.arvore, "");
                    md.push("```");
                    md.push("");
                }
            }

            // Colunas de eventos
            if (dados.colunasEventos) {
                md.push("## Tabela de Eventos (#tblEventos)");
                md.push("");
                md.push("| # | Texto | Width | Classe |");
                md.push("|---|-------|-------|--------|");
                dados.colunasEventos.forEach(function (col) {
                    md.push(
                        "| " +
                            col.indice +
                            " | " +
                            col.texto +
                            " | " +
                            col.width +
                            " | " +
                            (col.classe || "") +
                            " |",
                    );
                });
                md.push("");
            }

            // Amostra eventos
            if (dados.amostraEventos) {
                md.push(
                    "### Amostra de Linhas (" +
                        dados.amostraEventos.totalLinhas +
                        " total)",
                );
                md.push("");
                dados.amostraEventos.amostra.forEach(function (linha) {
                    md.push(
                        "- `" +
                            (linha.id || "sem-id") +
                            "` classes=`" +
                            linha.classes +
                            "` parte=`" +
                            (linha.dataParte || "N/A") +
                            "`",
                    );
                });
                md.push("");
            }

            // Elementos eProbe
            md.push("## Elementos eProbe Injetados");
            md.push("");
            var ep = dados.eprobeInjetados;
            md.push("| Elemento | Quantidade |");
            md.push("|----------|-----------|");
            md.push("| Icones substituidos | " + ep.iconesSubstituidos + " |");
            md.push("| Icon containers | " + ep.iconContainers + " |");
            md.push(
                "| Navbar eProbe | " +
                    (ep.navbarElement ? "Sim" : "Nao") +
                    " |",
            );
            md.push(
                "| Botao SENT1 | " + (ep.botaoSent1 ? "Sim" : "Nao") + " |",
            );
            md.push("| Cards Figma | " + ep.cardsEprobe + " |");
            md.push("| Estilos injetados | " + ep.estilosEprobe + " |");
            md.push("");

            var markdownFinal = md.join("\n");
            console.log(markdownFinal);

            if (typeof copy === "function") {
                copy(markdownFinal);
                console.log(
                    "Markdown copiado para o clipboard automaticamente.",
                );
            }

            return markdownFinal;
        } catch (error) {
            console.error("exportarEstruturaDOM_copyMarkdown: Erro:", error);
            return { erro: error.message };
        }
    }

    // Registrar funcoes no namespace
    window.SENT1_AUTO.exportarEstruturaDOM = exportarEstruturaDOM;
    window.SENT1_AUTO.exportarEstruturaDOM_copyMarkdown =
        exportarEstruturaDOM_copyMarkdown;

    // ============================================================
    // BRIDGE: Listener para abrir sessao de julgamento
    // main.js (ISOLATED) dispara CustomEvent -> debug-bridge (MAIN) executa
    // ============================================================
    document.addEventListener("eprobe-abrir-sessao-julgamento", function (e) {
        var urlHistorico = e.detail && e.detail.url;
        if (!urlHistorico) {
            console.log("CARD CLICAVEL BRIDGE: URL nao recebida no evento");
            return;
        }

        console.log(
            "CARD CLICAVEL BRIDGE: Evento recebido, abrindo historico...",
        );

        if (typeof exibirSubFrm !== "function") {
            console.log(
                "CARD CLICAVEL BRIDGE: exibirSubFrm nao disponivel, abrindo direto",
            );
            window.open(urlHistorico, "_blank", "width=1200,height=700");
            return;
        }

        // Abrir modal do historico de julgamento
        exibirSubFrm(urlHistorico, 1200, 700);
        console.log("CARD CLICAVEL BRIDGE: Modal aberto, aguardando links...");

        // Polling: esperar os links da sessao aparecerem no modal
        var tentativas = 0;
        var maxTentativas = 30;
        var intervalo = setInterval(function () {
            tentativas++;
            if (tentativas > maxTentativas) {
                clearInterval(intervalo);
                console.log(
                    "CARD CLICAVEL BRIDGE: Timeout - modal aberto para uso manual",
                );
                return;
            }

            // Buscar link da sessao no documento e em iframes
            var links = document.querySelectorAll(
                'a[href*="sessao_julgamento_exibir_painel"]',
            );

            if (links.length === 0) {
                var iframes = document.querySelectorAll("iframe");
                for (var i = 0; i < iframes.length; i++) {
                    try {
                        var iframeLinks = iframes[
                            i
                        ].contentDocument.querySelectorAll(
                            'a[href*="sessao_julgamento_exibir_painel"]',
                        );
                        if (iframeLinks.length > 0) {
                            links = iframeLinks;
                            break;
                        }
                    } catch (err) {
                        // iframe cross-origin, ignorar
                    }
                }
            }

            if (links.length > 0) {
                clearInterval(intervalo);
                var href = links[0].href || links[0].getAttribute("href");
                console.log(
                    "CARD CLICAVEL BRIDGE: Link encontrado! Navegando para sessao...",
                );

                // Fechar modal/subform
                if (typeof fecharSubFormModal === "function") {
                    try {
                        fecharSubFormModal();
                    } catch (err2) {}
                } else if (typeof fecharSubFrm === "function") {
                    try {
                        fecharSubFrm();
                    } catch (err3) {}
                }

                // Navegar para a sessao
                window.open(href, "_blank");
            }
        }, 200);
    });

    // ============================================================
    // BRIDGE GENERICO: Executar onclick de icones substituidos
    // main.js (ISOLATED) dispara CustomEvent -> debug-bridge (MAIN) executa
    // Suporta exibirSubFrm e qualquer funcao nativa do eProc
    // ============================================================
    document.addEventListener("eprobe-executar-onclick", function (e) {
        var onclickCode = e.detail && e.detail.onclick;
        if (!onclickCode) {
            console.log("BRIDGE ONCLICK: Codigo onclick nao recebido");
            return;
        }
        try {
            // Executar o onclick no contexto MAIN (tem acesso a exibirSubFrm etc)
            var fn = new Function(onclickCode);
            fn();
        } catch (err) {
            console.warn("BRIDGE ONCLICK: Erro ao executar onclick:", err);
        }
    });

    console.log(
        "eProbe Debug Bridge: exportarEstruturaDOM e exportarEstruturaDOM_copyMarkdown disponiveis no console",
    );
})();
