javascript: !(function () {
    var e = window.location.href,
        t = "",
        a = e.match(/num_processo=([0-9]+)/);
    if (a) t = a[1];
    else {
        var o = e.match(/txtNumProcesso=([0-9]+)/);
        if (o) t = o[1];
        else {
            var n = e.match(/([0-9]{20})/);
            n && (t = n[1]);
        }
    }
    function r(e) {
        if (!(e > 10)) {
            for (
                var t = document.querySelectorAll("iframe"), a = !1, o = 0;
                o < t.length;
                o++
            )
                try {
                    var n = t[o].contentWindow.document,
                        s = n.getElementById("txaDescricao");
                    if (s && "complete" === n.readyState) {
                        (s.value = "TEMA 1184"),
                            s.dispatchEvent(
                                new Event("input", { bubbles: !0 })
                            ),
                            s.dispatchEvent(
                                new Event("change", { bubbles: !0 })
                            ),
                            s.focus();
                        var i = n.getElementById("selOrgaoDestino");
                        i &&
                            0 === i.selectedIndex &&
                            ((i.selectedIndex = 1),
                            i.dispatchEvent(
                                new Event("change", { bubbles: !0 })
                            )),
                            setTimeout(function () {
                                var e = n.getElementById("sbmSalvar");
                                if (e) {
                                    if (
                                        "function" ==
                                        typeof n.defaultView.validarCadastro
                                    )
                                        if (
                                            !1 ===
                                            n.defaultView.validarCadastro()
                                        ) {
                                            for (
                                                var t = n.querySelectorAll(
                                                        "input[required], select[required], textarea[required]"
                                                    ),
                                                    a = 0;
                                                a < t.length;
                                                a++
                                            )
                                                t[a].value;
                                            return;
                                        }
                                    e.focus(),
                                        setTimeout(function () {
                                            var t = new MouseEvent(
                                                "mousedown",
                                                {
                                                    view: n.defaultView,
                                                    bubbles: !0,
                                                    cancelable: !0,
                                                    button: 0,
                                                }
                                            );
                                            e.dispatchEvent(t),
                                                setTimeout(function () {
                                                    var t = new MouseEvent(
                                                        "mouseup",
                                                        {
                                                            view: n.defaultView,
                                                            bubbles: !0,
                                                            cancelable: !0,
                                                            button: 0,
                                                        }
                                                    );
                                                    e.dispatchEvent(t),
                                                        setTimeout(function () {
                                                            var t =
                                                                new MouseEvent(
                                                                    "click",
                                                                    {
                                                                        view: n.defaultView,
                                                                        bubbles:
                                                                            !0,
                                                                        cancelable:
                                                                            !0,
                                                                        button: 0,
                                                                    }
                                                                );
                                                            e.dispatchEvent(t);
                                                            setTimeout(
                                                                function () {
                                                                    e.click(),
                                                                        setTimeout(
                                                                            function () {
                                                                                if (
                                                                                    n
                                                                                        .defaultView
                                                                                        .validarCadastro &&
                                                                                    n.defaultView.validarCadastro()
                                                                                ) {
                                                                                    var t =
                                                                                        e.form ||
                                                                                        e.closest(
                                                                                            "form"
                                                                                        ) ||
                                                                                        n.querySelector(
                                                                                            "form"
                                                                                        );
                                                                                    if (
                                                                                        t
                                                                                    ) {
                                                                                        var a =
                                                                                            new Event(
                                                                                                "submit",
                                                                                                {
                                                                                                    bubbles:
                                                                                                        !0,
                                                                                                    cancelable:
                                                                                                        !0,
                                                                                                }
                                                                                            );
                                                                                        t.dispatchEvent(
                                                                                            a
                                                                                        ) &&
                                                                                            t.submit();
                                                                                    }
                                                                                }
                                                                            },
                                                                            100
                                                                        );
                                                                },
                                                                100
                                                            );
                                                        }, 50);
                                                }, 50);
                                        }, 200),
                                        setTimeout(function () {
                                            var e = n.querySelector(
                                                    '.infraMensagem, .mensagem-sucesso, [class*="sucesso"]'
                                                ),
                                                t = n.querySelector(
                                                    '.infraMensagemAlerta, .mensagem-erro, [class*="erro"]:not([class*="lt-toolbar"])'
                                                ),
                                                a =
                                                    n.querySelector(
                                                        "table.infraTable"
                                                    );
                                            if (
                                                a &&
                                                a.querySelectorAll("tr")
                                                    .length > 1
                                            )
                                                return;
                                            (e && e.textContent.trim()) ||
                                                (t &&
                                                    t.className.includes(
                                                        "lt-toolbar"
                                                    ));
                                        }, 2e3);
                                }
                            }, 1e3),
                            (a = !0);
                        break;
                    }
                } catch (e) {}
            a ||
                setTimeout(function () {
                    r(e + 1);
                }, 1e3);
        }
    }
    t
        ? (exibirSubFrm(
              "controlador.php?acao=processo_lembrete_destino_cadastrar&txtNumProcesso=" +
                  t +
                  "&sin_abrir_link_janela=S&pagina=processo_selecionar&hash=" +
                  window.location.hash.replace("#", ""),
              1200,
              600
          ),
          setTimeout(function () {
              r(1);
          }, 2e3))
        : alert(
              "Não foi possível identificar o número do processo. Certifique-se de estar em uma página de processo."
          );
})();
