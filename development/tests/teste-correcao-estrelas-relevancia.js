console.log(
    "🧪 TESTE CRÍTICO: Verificando correção das estrelas de relevância"
);

// Teste 1: Verificar se a função existe
if (typeof window.SENT1_AUTO?.configurarAlternanciaEstrelas === "function") {
    console.log(
        "✅ Função configurarAlternanciaEstrelas encontrada no namespace global"
    );
} else {
    console.error(
        "❌ ERRO: Função configurarAlternanciaEstrelas não encontrada!"
    );
}

// Teste 2: Verificar links de relevância na página
const linksRelevancia = document.querySelectorAll(
    'a[href*="switchRelevanciaEvento"]'
);
console.log(
    `🔍 Encontrados ${linksRelevancia.length} links de relevância na página`
);

if (linksRelevancia.length > 0) {
    linksRelevancia.forEach((link, index) => {
        const href = link.getAttribute("href");
        const img = link.querySelector("img, svg");
        console.log(`Link ${index + 1}: ${href}`);
        if (img) {
            console.log(
                `  Elemento: ${img.tagName}, src: ${
                    img.src || "N/A"
                }, configurado: ${link.hasAttribute(
                    "data-eprobe-relevancia-configured"
                )}`
            );
        }
    });

    // Teste 3: Executar configuração
    console.log("🔧 Executando configuração de alternância...");
    try {
        const resultado = window.SENT1_AUTO.configurarAlternanciaEstrelas();
        console.log(
            `✅ Configuração executada com sucesso: ${resultado} estrelas configuradas`
        );

        // Teste 4: Verificar se foi aplicada
        const estrelasConfiguradas = document.querySelectorAll(
            "svg[data-estrela-estado]"
        );
        console.log(
            `🌟 Estrelas com estado configurado: ${estrelasConfiguradas.length}`
        );

        estrelasConfiguradas.forEach((estrela, index) => {
            const estado = estrela.getAttribute("data-estrela-estado");
            const tipoGrau = estrela.getAttribute("data-estrela-tipo-grau");
            const numSeq = estrela.getAttribute("data-estrela-num-seq");
            console.log(
                `  Estrela ${index + 1}: ${estado} (${tipoGrau}-${numSeq})`
            );
        });
    } catch (error) {
        console.error("❌ ERRO na configuração:", error);
    }
} else {
    console.log(
        "ℹ️ Nenhum link de relevância encontrado - página pode não ter estrelas"
    );
}

console.log("🧪 TESTE CONCLUÍDO - Verifique os logs acima para diagnóstico");
