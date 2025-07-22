# 🔧 GUIA DE INSTALAÇÃO E TESTE DA EXTENSÃO EPROBE

## 🚀 PASSOS PARA INSTALAR A EXTENSÃO NO EDGE

### 1. Recarregar a Extensão (Se Já Estava Instalada)

1. Abra o Edge
2. Vá para `edge://extensions/`
3. Encontre a extensão **eProbe**
4. Clique em **"Recarregar"** ou **"Remover"** e instale novamente

### 2. Instalar Nova Extensão

1. Abra o Edge
2. Vá para `edge://extensions/`
3. Ative o **"Modo de desenvolvedor"** (canto superior direito)
4. Clique em **"Carregar descompactado"**
5. Selecione a pasta `c:\eProbe`
6. Verifique se a extensão aparece na lista

### 3. Verificar Instalação

Após carregar, você deve ver:

-   ✅ **Nome**: eProbe - Automação eproc
-   ✅ **Status**: Ativado
-   ✅ **ID**: Um ID alfanumérico
-   ✅ **Detalhes**: Versão 1.0.0

## 🧪 TESTE DE FUNCIONAMENTO

### 1. Navegar para o eProc

1. Vá para: `https://eproc2g.tjsc.jus.br/eproc/`
2. Faça login normalmente
3. Navegue para qualquer processo

### 2. Executar Teste no Console

Abra o Console do Edge (F12) e execute:

```javascript
// 🔍 TESTE RÁPIDO DE INSTALAÇÃO
console.log("🔍 TESTE DE INSTALAÇÃO DA EXTENSÃO EPROBE");
console.log("1. chrome existe?", typeof chrome);
console.log("2. chrome.runtime existe?", typeof chrome?.runtime);
console.log("3. Extension ID:", chrome?.runtime?.id);
console.log("4. SENT1_AUTO existe?", typeof window.SENT1_AUTO);

// Verificar scripts carregados
const scriptsExtensao = Array.from(document.scripts).filter((script) =>
    script.src.includes("chrome-extension")
);
console.log("5. Scripts da extensão carregados:", scriptsExtensao.length);
scriptsExtensao.forEach((script, i) => {
    console.log(`   ${i + 1}. ${script.src.split("/").slice(-2).join("/")}`);
});

// Verificar elementos criados pela extensão
const elementosExtensao = document.querySelectorAll(
    '[id*="sent1"], [id*="eprobe"], [class*="eprobe"]'
);
console.log("6. Elementos da extensão encontrados:", elementosExtensao.length);

if (typeof window.SENT1_AUTO !== "undefined") {
    console.log("✅ EXTENSÃO FUNCIONANDO CORRETAMENTE!");
    console.log(
        "📋 Funções disponíveis:",
        Object.keys(window.SENT1_AUTO).length
    );
} else {
    console.log("❌ EXTENSÃO NÃO ESTÁ FUNCIONANDO");
    console.log("💡 Verifique se a extensão foi recarregada corretamente");
}
```

### 3. Resultado Esperado

Se tudo estiver funcionando, você deve ver:

-   ✅ `chrome.runtime.id` com um ID válido
-   ✅ `SENT1_AUTO existe? object`
-   ✅ Scripts da extensão carregados: 3 (main.js, themeApply.js, semanticKernel.js)
-   ✅ Mensagem: "EXTENSÃO FUNCIONANDO CORRETAMENTE!"

## 🚨 SOLUÇÃO DE PROBLEMAS

### Se a extensão não aparecer:

1. Verifique se o arquivo `manifest.json` está na raiz da pasta
2. Certifique-se de que selecionou a pasta `c:\eProbe` (não uma subpasta)
3. Verifique se há erros na aba "Erros" da página de extensões

### Se `SENT1_AUTO` for `undefined`:

1. Recarregue a extensão em `edge://extensions/`
2. Atualize a página do eProc (F5)
3. Aguarde alguns segundos para o script carregar
4. Execute novamente o teste no console

### Se persistir o problema:

1. Remova completamente a extensão
2. Feche e reabra o Edge
3. Instale a extensão novamente
4. Teste em uma nova aba do eProc

## 📞 PRÓXIMOS PASSOS

Após confirmar que a extensão está funcionando:

1. Execute: `window.SENT1_AUTO.detectarDataSessao()`
2. Execute: `window.SENT1_AUTO.debugDeteccaoDataSessao()`
3. Teste as funções experimentais do Semantic Kernel

---

**🎯 OBJETIVO**: Confirmar que `typeof window.SENT1_AUTO` retorna `"object"` em vez de `"undefined"`
