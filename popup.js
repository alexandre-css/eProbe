document.getElementById("execute-script").addEventListener("click", () => {
    const lembreteTexto = document.getElementById("lembrete-texto").value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: (texto) => {
                const frames = document.querySelectorAll("iframe");
                for (let i = 0; i < frames.length; i++) {
                    try {
                        const doc = frames[i].contentWindow.document;
                        const txa = doc.getElementById("txaDescricao");
                        if (txa) {
                            txa.value = texto;
                            txa.dispatchEvent(new Event("input"));
                            const btn = doc.getElementById("sbmSalvar");
                            if (btn) {
                                btn.click();
                            }
                            break;
                        }
                    } catch (e) {}
                }
            },
            args: [lembreteTexto],
        });
    });
});
