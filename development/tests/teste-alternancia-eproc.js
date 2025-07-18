// Teste para verificar se o sistema de alternância está funcionando com o eProc
// Execute este código no console do navegador na página do eProc

console.log("🧪 TESTE: Iniciando teste de alternância no eProc");

// 1. Verificar se as funções existem
console.log("✅ Verificando namespace:", typeof window.SENT1_AUTO);
console.log("✅ Verificando findToggleTarget:", typeof findToggleTarget);

// 2. Buscar elementos com IDs específicos das minutas
const minutasIds = [
    "conteudoInternoMinutas_0",
    "conteudoInternoMinutas_1",
    "conteudoInternoMinutas_2",
    "conteudoInternoMinutas_3",
];

console.log("🔍 Procurando elementos de minutas:");
minutasIds.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
        console.log(`✅ Encontrado: ${id}`, element);
        console.log(`   - Display: ${element.style.display}`);
        console.log(`   - Visible: ${element.offsetParent !== null}`);
    } else {
        console.log(`❌ Não encontrado: ${id}`);
    }
});

// 3. Buscar elementos com onclick contendo infraAbrirFecharElementoHTML
console.log(
    "🔍 Procurando elementos com onclick infraAbrirFecharElementoHTML:"
);
const elementsWithOnclick = document.querySelectorAll(
    '[onclick*="infraAbrirFecharElementoHTML"]'
);
console.log(
    `📊 Encontrados ${elementsWithOnclick.length} elementos com onclick`
);

elementsWithOnclick.forEach((element, index) => {
    console.log(`${index + 1}. Elemento:`, element);
    console.log(`   - onclick: ${element.getAttribute("onclick")}`);

    // Extrair o ID do onclick
    const onclick = element.getAttribute("onclick");
    const match = onclick.match(
        /infraAbrirFecharElementoHTML\s*\(\s*['"]([^'"]+)['"](?:,\s*['"]([^'"]+)['"])?/
    );
    if (match) {
        const targetId = match[1];
        const imageId = match[2];
        console.log(`   - Target ID: ${targetId}`);
        console.log(`   - Image ID: ${imageId}`);

        // Verificar se o elemento alvo existe
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            console.log(`   ✅ Elemento alvo encontrado:`, targetElement);
        } else {
            console.log(`   ❌ Elemento alvo não encontrado: ${targetId}`);
        }
    }
});

// 4. Buscar imagens de mais/menos que foram substituídas
console.log("🔍 Procurando containers de ícones substituídos:");
const containers = document.querySelectorAll("div[data-expanded]");
console.log(`📊 Encontrados ${containers.length} containers com data-expanded`);

containers.forEach((container, index) => {
    console.log(`${index + 1}. Container:`, container);
    console.log(
        `   - data-expanded: ${container.getAttribute("data-expanded")}`
    );
    console.log(`   - Conteúdo:`, container.innerHTML);
});

// 5. Teste manual de findToggleTarget
if (typeof findToggleTarget === "function") {
    console.log("🧪 Teste manual de findToggleTarget:");
    elementsWithOnclick.forEach((element, index) => {
        console.log(`Testando elemento ${index + 1}:`);
        try {
            const target = findToggleTarget(element);
            if (target) {
                console.log(`   ✅ Target encontrado:`, target);
                console.log(`   - ID: ${target.id}`);
                console.log(`   - Display: ${target.style.display}`);
            } else {
                console.log(`   ❌ Target não encontrado`);
            }
        } catch (error) {
            console.log(`   ⚠️ Erro:`, error);
        }
    });
} else {
    console.log("❌ Função findToggleTarget não encontrada");
}

console.log("🏁 TESTE: Finalizado");
