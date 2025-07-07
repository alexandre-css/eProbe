javascript: (function () {
    var urlAtual = window.location.href;
    var numeroProcesso = "";

    var matchProcesso = urlAtual.match(/num_processo=([0-9]+)/);
    if (matchProcesso) {
        numeroProcesso = matchProcesso[1];
    } else {
        var matchTxtProcesso = urlAtual.match(/txtNumProcesso=([0-9]+)/);
        if (matchTxtProcesso) {
            numeroProcesso = matchTxtProcesso[1];
        } else {
            var matchHash = urlAtual.match(/([0-9]{20})/);
            if (matchHash) {
                numeroProcesso = matchHash[1];
            }
        }
    }

    if (!numeroProcesso) {
        console.log("Número do processo não encontrado na URL");
        alert(
            "Não foi possível identificar o número do processo. Certifique-se de estar em uma página de processo."
        );
    } else {
        console.log("Processo identificado:", numeroProcesso);
        console.log("Procurando documento SENT1...");

        procurarDocumentoSENT1();
    }

    function procurarDocumentoSENT1() {
        var linksSent = document.querySelectorAll(
            'a.infraLinkDocumento[data-nome="SENT"]'
        );
        console.log("Documentos SENT encontrados:", linksSent.length);

        var sent1Encontrado = null;
        for (var i = 0; i < linksSent.length; i++) {
            var texto = linksSent[i].textContent.trim();
            console.log("Documento encontrado:", texto);
            if (texto === "SENT1") {
                sent1Encontrado = linksSent[i];
                break;
            }
        }

        if (sent1Encontrado) {
            console.log("SENT1 encontrado! Baixando conteúdo...");
            var href = sent1Encontrado.getAttribute("href");

            baixarConteudoDocumento(href);
        } else {
            console.log("Documento SENT1 não encontrado");
            alert("Documento SENT1 não foi encontrado neste processo.");
        }
    }

    function baixarConteudoDocumento(url) {
        console.log("Fazendo requisição para:", url);

        fetch(url, {
            method: "GET",
            credentials: "same-origin",
            headers: {
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            },
        })
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Erro na requisição: " + response.status);
                }
                return response.text();
            })
            .then(function (html) {
                console.log("Conteúdo HTML baixado com sucesso!");
                extrairTextoDoHTML(html);
            })
            .catch(function (error) {
                console.log("Erro ao baixar documento:", error);

                console.log(
                    "Tentando abordagem alternativa - abrindo em nova aba..."
                );

                var modal = document.createElement("div");
                modal.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 500px;
                height: auto;
                background: white;
                border: 2px solid #333;
                box-shadow: 0 4px 8px rgba(0,0,0,0.3);
                z-index: 10000;
                padding: 20px;
                text-align: center;
                border-radius: 8px;
            `;

                modal.innerHTML = `
                <h3 style="color: #007cba; margin-bottom: 15px;">📄 Documento SENT1 Encontrado</h3>
                <p style="margin-bottom: 15px; line-height: 1.5;">
                    Clique no botão abaixo para abrir o documento<br>
                    em uma nova aba e copiar o conteúdo.
                </p>
                <div style="background: #f0f8ff; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
                    <p style="margin: 0; font-weight: bold; color: #333;">📋 Instruções:</p>
                    <p style="margin: 5px 0 0 0; font-size: 14px;">
                        1. Clique em "Abrir Documento" abaixo<br>
                        2. Na nova aba, pressione <kbd style="background: #eee; padding: 2px 5px; border-radius: 3px;">Ctrl+A</kbd> para selecionar tudo<br>
                        3. Pressione <kbd style="background: #eee; padding: 2px 5px; border-radius: 3px;">Ctrl+C</kbd> para copiar o conteúdo<br>
                        4. Cole onde precisar com <kbd style="background: #eee; padding: 2px 5px; border-radius: 3px;">Ctrl+V</kbd>
                    </p>
                </div>
                <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                    <button id="abrirDocumento" 
                            style="padding: 12px 25px; background: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer; font-weight: bold;">
                        📂 Abrir Documento
                    </button>
                    <button onclick="document.body.removeChild(this.closest('div[style*=fixed]'))" 
                            style="padding: 12px 25px; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">
                        ✓ Fechar
                    </button>
                </div>
                <div style="margin-top: 15px; padding: 10px; background: #fff3cd; border-radius: 5px; font-size: 12px;">
                    <strong>Link direto:</strong><br>
                    <a href="${url}" target="_blank" style="word-break: break-all; color: #007cba;">${url}</a>
                </div>
            `;

                document.body.appendChild(modal);

                document.getElementById("abrirDocumento").onclick =
                    function () {
                        console.log("Tentando abrir documento...");

                        try {
                            var novaJanela = window.open(
                                url,
                                "_blank",
                                "width=1200,height=800,scrollbars=yes,resizable=yes"
                            );

                            if (
                                !novaJanela ||
                                novaJanela.closed ||
                                typeof novaJanela.closed == "undefined"
                            ) {
                                console.log(
                                    "Popup bloqueado, tentando alternativa..."
                                );

                                var link = document.createElement("a");
                                link.href = url;
                                link.target = "_blank";
                                link.rel = "noopener noreferrer";
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);

                                console.log("Link clicado via elemento <a>");
                            } else {
                                console.log("Nova janela aberta com sucesso");
                                setTimeout(function () {
                                    novaJanela.focus();
                                }, 100);
                            }

                            this.textContent = "✓ Documento Aberto";
                            this.style.background = "#007cba";
                            this.disabled = true;
                        } catch (e) {
                            console.log("Erro ao abrir janela:", e);
                            alert(
                                "Erro ao abrir documento. Tente clicar no link direto abaixo do botão."
                            );
                        }
                    };
            });
    }

    function extrairTextoDoHTML(html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");

        var conteudoDiv = doc.querySelector(
            'div[style*="font-family"], .infraAreaTexto, body > div, body'
        );
        var conteudo = "";

        if (conteudoDiv) {
            conteudo = conteudoDiv.innerText || conteudoDiv.textContent || "";
            conteudo = conteudo.trim();
        }

        if (!conteudo) {
            conteudo = doc.body
                ? doc.body.innerText || doc.body.textContent || ""
                : "";
            conteudo = conteudo.trim();
        }

        if (conteudo) {
            console.log("Conteúdo extraído com sucesso!");
            console.log("Tamanho do conteúdo:", conteudo.length, "caracteres");
            console.log(
                "Primeiros 500 caracteres:",
                conteudo.substring(0, 500)
            );

            exibirConteudo(conteudo, null);
        } else {
            console.log("Não foi possível extrair o conteúdo do HTML");
            alert("Não foi possível extrair o conteúdo do documento SENT1.");
        }
    }

    function exibirConteudo(conteudo, janela) {
        var modal = document.createElement("div");
        modal.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            max-width: 800px;
            height: 80%;
            background: white;
            border: 2px solid #333;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            z-index: 10000;
            padding: 20px;
            overflow: auto;
        `;

        var header = document.createElement("div");
        header.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #ccc;
        `;

        var titulo = document.createElement("h3");
        titulo.textContent = "Conteúdo do Documento SENT1";
        titulo.style.margin = "0";

        var botaoFechar = document.createElement("button");
        botaoFechar.textContent = "Fechar";
        botaoFechar.style.cssText = `
            padding: 5px 15px;
            background: #007cba;
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        `;
        botaoFechar.onclick = function () {
            document.body.removeChild(modal);
        };

        var textArea = document.createElement("textarea");
        textArea.value = conteudo;
        textArea.style.cssText = `
            width: 100%;
            height: calc(100% - 80px);
            border: 1px solid #ccc;
            padding: 10px;
            font-family: monospace;
            font-size: 12px;
            resize: none;
        `;
        textArea.readOnly = true;

        header.appendChild(titulo);
        header.appendChild(botaoFechar);
        modal.appendChild(header);
        modal.appendChild(textArea);

        document.body.appendChild(modal);

        console.log("Modal de conteúdo exibido");
    }
})();
