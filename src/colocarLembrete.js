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

        exibirSubFrm(
            "controlador.php?acao=processo_lembrete_destino_cadastrar&txtNumProcesso=" +
                numeroProcesso +
                "&sin_abrir_link_janela=S&pagina=processo_selecionar&hash=" +
                window.location.hash.replace("#", ""),
            1200,
            600
        );

        setTimeout(function () {
            tentarPreencherLembrete(1);
        }, 1000);
    }
    function tentarPreencherLembrete(tentativa) {
        if (tentativa > 10) {
            console.log("Máximo de tentativas atingido");
            return;
        }

        var frames = document.querySelectorAll("iframe");
        var sucesso = false;

        for (var i = 0; i < frames.length; i++) {
            try {
                var doc = frames[i].contentWindow.document;
                var txa = doc.getElementById("txaDescricao");
                if (txa && doc.readyState === "complete") {
                    console.log("Preenchendo campo de descrição...");
                    txa.value = "TEMA 1184";
                    txa.dispatchEvent(new Event("input", { bubbles: true }));
                    txa.dispatchEvent(new Event("change", { bubbles: true }));
                    txa.focus();

                    var orgaoSelect = doc.getElementById("selOrgaoDestino");
                    if (orgaoSelect && orgaoSelect.selectedIndex === 0) {
                        console.log("Selecionando órgão padrão...");
                        orgaoSelect.selectedIndex = 1;
                        orgaoSelect.dispatchEvent(
                            new Event("change", { bubbles: true })
                        );
                    }

                    setTimeout(function () {
                        console.log("Verificando campos obrigatórios...");
                        console.log("Descrição:", txa.value);
                        console.log(
                            "Órgão selecionado:",
                            orgaoSelect ? orgaoSelect.selectedIndex : "N/A"
                        );

                        var btn = doc.getElementById("sbmSalvar");
                        if (btn) {
                            console.log("Tentando salvar lembrete...");

                            if (
                                typeof doc.defaultView.validarCadastro ===
                                "function"
                            ) {
                                var validacao =
                                    doc.defaultView.validarCadastro();
                                console.log(
                                    "Resultado da validação:",
                                    validacao
                                );
                                if (validacao === false) {
                                    console.log(
                                        "Validação falhou - verificando campos..."
                                    );
                                    var camposObrigatorios =
                                        doc.querySelectorAll(
                                            "input[required], select[required], textarea[required]"
                                        );
                                    for (
                                        var j = 0;
                                        j < camposObrigatorios.length;
                                        j++
                                    ) {
                                        if (!camposObrigatorios[j].value) {
                                            console.log(
                                                "Campo obrigatório vazio:",
                                                camposObrigatorios[j].id ||
                                                    camposObrigatorios[j].name
                                            );
                                        }
                                    }
                                    return;
                                }
                            }

                            btn.focus();
                            setTimeout(function () {
                                console.log("Clicando no botão salvar...");

                                var clicado = false;

                                function tentarSalvar() {
                                    if (clicado) return;
                                    clicado = true;

                                    var clickEvent = new MouseEvent("click", {
                                        view: doc.defaultView,
                                        bubbles: true,
                                        cancelable: true,
                                        button: 0,
                                    });

                                    console.log(
                                        "Disparando evento de clique..."
                                    );
                                    btn.dispatchEvent(clickEvent);

                                    setTimeout(function () {
                                        console.log(
                                            "Tentando clique nativo..."
                                        );
                                        btn.click();
                                    }, 100);

                                    setTimeout(function () {
                                        if (
                                            typeof doc.defaultView
                                                .validarCadastro === "function"
                                        ) {
                                            if (
                                                doc.defaultView.validarCadastro()
                                            ) {
                                                var form =
                                                    btn.form ||
                                                    btn.closest("form") ||
                                                    doc.querySelector("form");
                                                if (form) {
                                                    console.log(
                                                        "Submetendo formulário..."
                                                    );
                                                    form.submit();
                                                }
                                            }
                                        }
                                    }, 200);
                                }

                                tentarSalvar();
                            }, 200);
                            setTimeout(function () {
                                var msgSucesso = doc.querySelector(
                                    '.infraMensagem, .mensagem-sucesso, [class*="sucesso"]'
                                );
                                var msgErro = doc.querySelector(
                                    '.infraMensagemAlerta, .mensagem-erro, [class*="erro"]:not([class*="lt-toolbar"])'
                                );

                                var tabelaLembretes =
                                    doc.querySelector("table.infraTable");
                                if (tabelaLembretes) {
                                    var linhas =
                                        tabelaLembretes.querySelectorAll("tr");
                                    if (linhas.length > 1) {
                                        console.log(
                                            "Lembrete criado com sucesso! Total de lembretes:",
                                            linhas.length - 1
                                        );
                                        return;
                                    }
                                }

                                if (
                                    msgSucesso &&
                                    msgSucesso.textContent.trim()
                                ) {
                                    console.log("Lembrete salvo com sucesso!");
                                } else if (
                                    msgErro &&
                                    !msgErro.className.includes("lt-toolbar")
                                ) {
                                    console.log(
                                        "Erro ao salvar:",
                                        msgErro.textContent.trim()
                                    );
                                } else {
                                    console.log(
                                        "Lembrete provavelmente salvo - verificar tabela de lembretes"
                                    );
                                }
                            }, 1000);
                        }
                    }, 500);

                    sucesso = true;
                    break;
                }
            } catch (e) {
                console.log("Erro ao acessar iframe:", e.message);
            }
        }

        if (!sucesso) {
            setTimeout(function () {
                tentarPreencherLembrete(tentativa + 1);
            }, 1000);
        }
    }
})();
