chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
            const novoBtn = document.querySelector("a[title='Novo Lembrete']");
            if (novoBtn) {
                novoBtn.click();
            }
        },
    });
});
