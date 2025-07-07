document.querySelector("a[title='Novo Lembrete']").click();
setTimeout(() => {
    const frames = document.querySelectorAll("iframe");
    for (let i = 0; i < frames.length; i++) {
        try {
            const doc = frames[i].contentWindow.document;
            const txa = doc.getElementById("txaDescricao");
            if (txa) {
                txa.value = "Texto do lembrete";
                txa.dispatchEvent(new Event("input"));
                const btn = doc.getElementById("sbmSalvar");
                if (btn) {
                    btn.click();
                }
                break;
            }
        } catch (e) {}
    }
}, 2000);
