// TESTE DE VALIDAÇÃO - ERRO INFRAABRIRFECHAR CORRIGIDO
// Copie e cole este código no console do navegador na página do eProc

console.log(
    "🔧 TESTE: Validando correção do erro infraAbrirFecharElementoHTML"
);

// 1. Verificar se as funções de segurança estão disponíveis
if (typeof window.SENT1_AUTO !== "undefined") {
    console.log("✅ Namespace SENT1_AUTO carregado");

    const funcoesSeguranca = [
        "isElementSafeForToggle",
        "findToggleTarget",
        "debugAlternanciaEproc",
    ];

    funcoesSeguranca.forEach((funcao) => {
        if (window.SENT1_AUTO[funcao]) {
            console.log(`✅ Função ${funcao} disponível`);
        } else {
            console.log(`❌ Função ${funcao} não encontrada`);
        }
    });
} else {
    console.log("❌ Namespace SENT1_AUTO não carregado");
}

// 2. Testar elementos com onclick problemático
const elementosOnclick = document.querySelectorAll(
    '[onclick*="infraAbrirFecharElementoHTML"]'
);
console.log(
    `🔍 Encontrados ${elementosOnclick.length} elementos com onclick infraAbrirFecharElementoHTML`
);

let elementosSegurosCont = 0;
let elementosInsegurosCont = 0;

elementosOnclick.forEach((element, index) => {
    console.log(`\n📝 Testando elemento ${index + 1}:`);
    console.log(`   onclick: ${element.getAttribute("onclick")}`);

    // Testar se o elemento é seguro
    if (window.SENT1_AUTO && window.SENT1_AUTO.isElementSafeForToggle) {
        const img = element.querySelector("img") || element;
        const seguro = window.SENT1_AUTO.isElementSafeForToggle(img);

        if (seguro) {
            console.log(`   ✅ Elemento SEGURO para processar`);
            elementosSegurosCont++;
        } else {
            console.log(`   ⚠️ Elemento INSEGURO - será ignorado`);
            elementosInsegurosCont++;
        }
    } else {
        console.log(`   ❓ Não foi possível testar segurança`);
    }

    // Extrair e verificar ID do elemento alvo
    const onclick = element.getAttribute("onclick");
    const match = onclick.match(
        /infraAbrirFecharElementoHTML\s*\(\s*['"]([^'"]+)['"](?:,\s*['"]([^'"]+)['"])?/
    );
    if (match) {
        const targetId = match[1];
        const targetElement = document.getElementById(targetId);
        console.log(`   🎯 Target ID: ${targetId}`);
        console.log(
            `   ${targetElement ? "✅" : "❌"} Elemento alvo ${
                targetElement ? "EXISTE" : "NÃO EXISTE"
            }`
        );
    }
});

// 3. Verificar containers já processados
const containers = document.querySelectorAll("div[data-expanded]");
console.log(
    `\n📊 Encontrados ${containers.length} containers já processados pelo sistema`
);

// 4. Resumo final
console.log(`\n📋 RESUMO DO TESTE:`);
console.log(`   - Elementos com onclick: ${elementosOnclick.length}`);
console.log(`   - Elementos seguros: ${elementosSegurosCont}`);
console.log(`   - Elementos inseguros: ${elementosInsegurosCont}`);
console.log(`   - Containers processados: ${containers.length}`);

// 5. Teste de erro - simular clique em elemento seguro
if (elementosSegurosCont > 0) {
    console.log(
        `\n🧪 TESTE DE CLIQUE: Procurando elemento seguro para simular clique...`
    );

    const elementoSeguro = Array.from(elementosOnclick).find((element) => {
        const img = element.querySelector("img") || element;
        return (
            window.SENT1_AUTO &&
            window.SENT1_AUTO.isElementSafeForToggle &&
            window.SENT1_AUTO.isElementSafeForToggle(img)
        );
    });

    if (elementoSeguro) {
        console.log(
            `✅ Elemento seguro encontrado. Clique manual pode ser testado.`
        );
        console.log(`   Elemento:`, elementoSeguro);
    }
} else {
    console.log(`\n⚠️ Nenhum elemento seguro encontrado para teste de clique`);
}

console.log("\n🏁 TESTE FINALIZADO");
console.log("📖 Se não houver erros no console, a correção foi bem-sucedida!");
