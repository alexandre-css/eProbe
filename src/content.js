var frames = document.querySelectorAll("iframe");
setTimeout(function () {
    for (var i = 0; i < frames.length; i++) {
        try {
            var doc = frames[i].contentWindow.document;
            var txa = doc.getElementById("txaDescricao");
            if (txa) {
                txa.value = "Tema 1184";
                txa.dispatchEvent(new Event("input"));
                var btn = doc.getElementById("sbmSalvar");
                if (btn) {
                    btn.click();
                }
                break;
            }
        } catch (e) {}
    }
}, 2000);
exibirSubFrm(
    "controlador.php?acao=processo_lembrete_destino_cadastrar&txtNumProcesso=50000442220008240023&sin_abrir_link_janela=S&pagina=processo_selecionar&hash=2e908282b82360eb36b05cee3b91cd62",
    1200,
    600
);