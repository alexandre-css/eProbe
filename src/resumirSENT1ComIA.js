javascript: !(function () {
    var e = window.location.href,
        t = "",
        o = e.match(/num_processo=([0-9]+)/);
    if (o) t = o[1];
    else {
        var n = e.match(/txtNumProcesso=([0-9]+)/);
        if (n) t = n[1];
        else {
            var i = e.match(/([0-9]{20})/);
            i && (t = i[1]);
        }
    }
    function r(e, t) {
        var o = {
                geral: "Faça um resumo geral deste documento jurídico:",
                juridico: "Faça um resumo jurídico detalhado:",
                dispositivo: "Extraia a parte dispositiva:",
                fundamentos: "Resuma os fundamentos jurídicos:",
            },
            n = o[t] || o.geral,
            i = "https://chatgpt.com/",
            r = document.createElement("div");
        (r.style.cssText =
            "position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);width: 600px;background: white;border: 2px solid #28a745;z-index: 10000;padding: 20px;border-radius: 8px;"),
            (r.innerHTML =
                '<div style="text-align: center;"><h3 style="color: #28a745;">🚀 Preparando ChatGPT...</h3><p style="margin-bottom: 15px;">Texto copiado automaticamente. Cole no ChatGPT!</p><textarea readonly style="width: 100%; height: 150px; font-size: 12px; padding: 8px; border: 1px solid #ddd; margin-bottom: 15px;" id="textoCompleto">' +
                n +
                "\n\n" +
                e +
                '</textarea><div style="display: flex; gap: 10px; justify-content: center;"><button id="copiarTexto" style="padding: 10px 20px; background: #007cba; color: white; border: none; border-radius: 3px;">📋 Copiar Texto</button><button id="abrirChatGPT" style="padding: 10px 20px; background: #28a745; color: white; border: none; border-radius: 3px;">🔗 Abrir ChatGPT</button><button onclick="document.body.removeChild(this.closest(\'div[style*=fixed]\'))" style="padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 3px;">Fechar</button></div></div>'),
            document.body.appendChild(r);
        var d = document.getElementById("textoCompleto").value;
        try {
            navigator.clipboard
                .writeText(d)
                .then(function () {
                    document.getElementById("copiarTexto").textContent =
                        "✓ Copiado!";
                })
                .catch(function () {});
        } catch (e) {}
        (document.getElementById("copiarTexto").onclick = function () {
            try {
                document.getElementById("textoCompleto").select(),
                    document.execCommand("copy"),
                    (this.textContent = "✓ Copiado!");
            } catch (e) {
                alert("Erro ao copiar. Selecione o texto manualmente.");
            }
        }),
            (document.getElementById("abrirChatGPT").onclick = function () {
                try {
                    window.open(i, "_blank"),
                        navigator.clipboard.writeText(d).then(function () {
                            setTimeout(function () {
                                alert(
                                    "Texto copiado! Cole no ChatGPT que acabou de abrir (Ctrl+V)"
                                );
                            }, 1e3);
                        });
                } catch (e) {
                    window.open(i, "_blank"),
                        alert(
                            "Abra o ChatGPT e cole manualmente o texto da caixa acima"
                        );
                }
            }),
            setTimeout(function () {
                document.body.contains(r) && document.body.removeChild(r);
            }, 25e3);
    }
    async function d(e, t) {
        var o,
            n =
                (((o = document.createElement("div")).style.cssText =
                    "position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);width: 300px;height: 150px;background: white;border: 2px solid #333;box-shadow: 0 4px 8px rgba(0,0,0,0.3);z-index: 10001;padding: 20px;text-align: center;border-radius: 8px;display: flex;flex-direction: column;justify-content: center;"),
                (o.innerHTML =
                    '<div style="font-size: 24px; margin-bottom: 15px;">🤖</div><h4 style="margin: 0 0 10px 0; color: #007cba;">Processando com IA...</h4><p style="margin: 0; color: #666;">Aguarde enquanto resumimos o documento</p><div style="margin-top: 15px;"><div style="display: inline-block; width: 20px; height: 20px; border: 3px solid #f3f3f3; border-top: 3px solid #007cba; border-radius: 50%; animation: spin 1s linear infinite;"></div></div><style>@keyframes spin {0% { transform: rotate(0deg); }100% { transform: rotate(360deg); }}</style>'),
                o);
        document.body.appendChild(n);
        try {
            await new Promise(function (e) {
                return setTimeout(e, 1e3);
            }),
                document.body.removeChild(n),
                r(e, t);
        } catch (o) {
            document.body.removeChild(n), r(e, t);
        }
    }
    if (t) {
        for (
            var a = document.querySelectorAll(
                    'a.infraLinkDocumento[data-nome="SENT"]'
                ),
                c = null,
                l = 0;
            l < a.length;
            l++
        )
            if ("SENT1" === a[l].textContent.trim()) {
                c = a[l];
                break;
            }
        if (c) {
            var s = c.getAttribute("href");
            (function (e) {
                return new Promise(function (t, o) {
                    var n = [
                        function () {
                            return fetch(e, {
                                method: "GET",
                                credentials: "same-origin",
                                mode: "cors",
                            });
                        },
                        function () {
                            return fetch(e, {
                                method: "GET",
                                credentials: "include",
                                mode: "no-cors",
                            });
                        },
                        function () {
                            var t = new XMLHttpRequest();
                            return (
                                t.open("GET", e, !0),
                                (t.withCredentials = !0),
                                new Promise(function (e, o) {
                                    (t.onload = function () {
                                        return e({
                                            ok: 200 === t.status,
                                            text: function () {
                                                return Promise.resolve(
                                                    t.responseText
                                                );
                                            },
                                        });
                                    }),
                                        (t.onerror = o),
                                        t.send();
                                })
                            );
                        },
                        function () {
                            var t = document.createElement("iframe");
                            return (
                                (t.style.display = "none"),
                                (t.src = e),
                                document.body.appendChild(t),
                                new Promise(function (e, o) {
                                    (t.onload = function () {
                                        try {
                                            var o =
                                                    t.contentDocument ||
                                                    t.contentWindow.document,
                                                n = "",
                                                i = o.querySelector(
                                                    'section[data-nome="sentenca"]'
                                                );
                                            if (i) n = i.innerHTML;
                                            else {
                                                var r = o.querySelector(
                                                    'section[data-nome_apresentacao="Sentença"]'
                                                );
                                                if (r) n = r.innerHTML;
                                                else {
                                                    var d =
                                                        o.querySelector(
                                                            "article"
                                                        );
                                                    if (d) n = d.innerHTML;
                                                    else {
                                                        for (
                                                            var a = [
                                                                    "main",
                                                                    ".documento-conteudo",
                                                                    ".sentenca",
                                                                    ".decisao",
                                                                    ".conteudo-principal",
                                                                    "#conteudo",
                                                                    ".texto-decisao",
                                                                    "section",
                                                                ],
                                                                c = 0;
                                                            c < a.length;
                                                            c++
                                                        ) {
                                                            var l =
                                                                o.querySelector(
                                                                    a[c]
                                                                );
                                                            if (l) {
                                                                n = l.innerHTML;
                                                                break;
                                                            }
                                                        }
                                                        !n.trim() &&
                                                            o.body &&
                                                            (n =
                                                                o.body
                                                                    .innerHTML);
                                                    }
                                                }
                                            }
                                            document.body.removeChild(t),
                                                e({
                                                    ok: !0,
                                                    text: function () {
                                                        return Promise.resolve(
                                                            n
                                                        );
                                                    },
                                                });
                                        } catch (e) {
                                            document.body.removeChild(t), o(e);
                                        }
                                    }),
                                        (t.onerror = function () {
                                            document.body.removeChild(t),
                                                o(new Error("Iframe falhou"));
                                        });
                                })
                            );
                        },
                    ];
                    !(async function e(i) {
                        if (i >= n.length) o(new Error("CORS_BLOCKED"));
                        else
                            try {
                                var r = await n[i]();
                                if (r.ok) {
                                    var d = await r.text();
                                    t(d);
                                } else e(i + 1);
                            } catch (t) {
                                e(i + 1);
                            }
                    })(0);
                });
            })(s)
                .then(function (e) {
                    var t = new DOMParser().parseFromString(e, "text/html"),
                        o = "",
                        n = t.querySelector('section[data-nome="sentenca"]');
                    if (n) o = n.innerText || n.textContent || "";
                    else {
                        var i = t.querySelector(
                            'section[data-nome_apresentacao="Sentença"]'
                        );
                        if (i) o = i.innerText || i.textContent || "";
                        else {
                            var r = t.querySelector("article");
                            if (r) o = r.innerText || r.textContent || "";
                            else {
                                for (
                                    var a = [
                                            "main",
                                            ".documento-conteudo",
                                            ".sentenca",
                                            ".decisao",
                                            ".conteudo-principal",
                                            "#conteudo",
                                            ".texto-decisao",
                                            "section",
                                        ],
                                        c = 0;
                                    c < a.length;
                                    c++
                                ) {
                                    var l;
                                    if ((l = t.querySelector(a[c]))) {
                                        o = l.innerText || l.textContent || "";
                                        break;
                                    }
                                }
                                !o.trim() &&
                                    t.body &&
                                    (o =
                                        t.body.innerText ||
                                        t.body.textContent ||
                                        "");
                            }
                        }
                    }
                    o.trim()
                        ? (((l = document.createElement("div")).style.cssText =
                              "position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);width: 600px;background: white;border: 2px solid #333;z-index: 10000;padding: 20px;border-radius: 8px;"),
                          (l.innerHTML =
                              '<h3 style="color: #007cba;">🤖 Resumo com IA - SENT1</h3><p>Conteúdo extraído! (' +
                              o.length +
                              ' caracteres)</p><select id="tipoResumo" style="width: 100%; padding: 8px; margin: 10px 0;"><option value="geral">📄 Resumo Geral</option><option value="juridico">⚖️ Resumo Jurídico</option><option value="dispositivo">📋 Parte Dispositiva</option><option value="fundamentos">🏛️ Fundamentos</option></select><div style="display: flex; gap: 10px; justify-content: center;"><button id="resumir" style="padding: 12px 25px; background: #007cba; color: white; border: none; border-radius: 3px; font-weight: bold;">🤖 Resumir</button><button onclick="document.body.removeChild(this.closest(\'div[style*=fixed]\'))" style="padding: 12px 25px; background: #6c757d; color: white; border: none; border-radius: 3px;">✗ Cancelar</button></div>'),
                          document.body.appendChild(l),
                          (document.getElementById("resumir").onclick =
                              function () {
                                  var e =
                                      document.getElementById(
                                          "tipoResumo"
                                      ).value;
                                  document.body.removeChild(l), d(o, e);
                              }))
                        : r(s);
                })
                .catch(function () {
                    window.open(s, "_blank", "width=1200,height=800"),
                        (function (e) {
                            var t = document.createElement("div");
                            (t.style.cssText =
                                "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);width: 600px; background: white; border: 2px solid #333;box-shadow: 0 4px 8px rgba(0,0,0,0.3); z-index: 10000;padding: 20px; border-radius: 8px;"),
                                (t.innerHTML =
                                    '<h3 style="color: #007cba; margin-bottom: 15px;">🤖 Resumo com IA - SENT1</h3><p style="margin-bottom: 15px;">O documento foi aberto em nova aba. Cole o conteúdo abaixo:</p><textarea id="conteudoTexto" placeholder="Cole aqui o conteúdo do SENT1..." style="width: 100%; height: 200px; border: 1px solid #ccc; padding: 10px; margin-bottom: 15px;"></textarea><select id="tipoResumo" style="width: 100%; padding: 8px; margin-bottom: 15px;"><option value="geral">📄 Resumo Geral</option><option value="juridico">⚖️ Resumo Jurídico</option><option value="dispositivo">📋 Parte Dispositiva</option><option value="fundamentos">🏛️ Fundamentos</option></select><div style="display: flex; gap: 10px; justify-content: center;"><button id="resumirTexto" style="padding: 12px 25px; background: #007cba; color: white; border: none; border-radius: 3px; cursor: pointer;">🤖 Resumir com IA</button><button onclick="document.body.removeChild(this.closest(\'div[style*=fixed]\'))" style="padding: 12px 25px; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">✗ Cancelar</button></div>'),
                                document.body.appendChild(t),
                                (document.getElementById(
                                    "resumirTexto"
                                ).onclick = function () {
                                    var e = document
                                            .getElementById("conteudoTexto")
                                            .value.trim(),
                                        o =
                                            document.getElementById(
                                                "tipoResumo"
                                            ).value;
                                    e
                                        ? (document.body.removeChild(t),
                                          d(e, o))
                                        : alert(
                                              "Cole o conteúdo do documento primeiro."
                                          );
                                });
                        })();
                });
        } else alert("Documento SENT1 não encontrado.");
    } else alert("Número do processo não identificado.");
})();
