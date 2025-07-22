/**
 * 🎯 TESTE FINAL DO SISTEMA SIMPLIFICADO
 * Versão limpa sem fallbacks, apenas XPath que funciona
 */

console.log("🎯 TESTE SISTEMA SIMPLIFICADO: Iniciando validação final...");

// 1. VERIFICAR DISPONIBILIDADE DAS FUNÇÕES
console.log("\n📋 1. VERIFICAÇÃO DE FUNÇÕES DISPONÍVEIS:");

const funcoesEssenciais = [
    'detectarCardSessaoSimplificado',
    'criarCardSessaoMaterial', 
    'traduzirStatusSessao',
    'traduzirSiglaOrgao',
    'obterNumeroProcesso'
];

let todasFuncoesDisponiveis = true;

funcoesEssenciais.forEach(funcao => {
    const disponivel = typeof window.SENT1_AUTO?.[funcao] === 'function';
    console.log(`${disponivel ? '✅' : '❌'} ${funcao}: ${disponivel ? 'OK' : 'FALTANDO'}`);
    if (!disponivel) todasFuncoesDisponiveis = false;
});

if (!todasFuncoesDisponiveis) {
    console.log("❌ ERRO: Algumas funções essenciais não estão disponíveis!");
    console.log("💡 SOLUÇÃO: Execute primeiro window.SENT1_AUTO para carregar as funções");
}

// 2. TESTAR DETECÇÃO XPATH SIMPLIFICADA  
console.log("\n🔍 2. TESTE DE DETECÇÃO XPATH:");

try {
    const resultadoDeteccao = window.SENT1_AUTO.detectarCardSessaoSimplificado();
    
    if (resultadoDeteccao) {
        console.log("✅ DETECÇÃO: Dados encontrados!");
        console.log("📊 RESULTADO:", {
            data: resultadoDeteccao.data,
            status: resultadoDeteccao.status,
            orgao: resultadoDeteccao.orgao,
            totalSessoes: resultadoDeteccao.totalSessoes
        });
        
        // 3. VERIFICAR SE CARD FOI CRIADO
        console.log("\n🎨 3. VERIFICAÇÃO DO CARD:");
        
        setTimeout(() => {
            const cardElement = document.getElementById('eprobe-card-sessao-material');
            if (cardElement) {
                console.log("✅ CARD: Card Material Design encontrado!");
                console.log("📍 POSIÇÃO:", cardElement.getBoundingClientRect());
                console.log("🎨 ESTILOS:", {
                    display: cardElement.style.display,
                    position: cardElement.style.position,
                    zIndex: cardElement.style.zIndex
                });
            } else {
                console.log("❌ CARD: Card não encontrado no DOM");
                
                // Listar todos os elementos com IDs relacionados
                const elementosRelacionados = document.querySelectorAll('[id*="eprobe"], [id*="sessao"], [id*="material"]');
                console.log(`🔍 ELEMENTOS RELACIONADOS (${elementosRelacionados.length}):`, 
                    Array.from(elementosRelacionados).map(el => ({
                        id: el.id,
                        class: el.className,
                        tag: el.tagName
                    }))
                );
            }
        }, 1000);
        
    } else {
        console.log("❌ DETECÇÃO: Nenhum dado detectado");
        
        // Debug do XPath
        console.log("\n🔧 DEBUG XPATH:");
        const xpath = "/html/body/div[2]/div[3]/div[2]/div/div[1]/form[2]/div[3]/div/div/fieldset[6]";
        const resultado = document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        );
        
        if (resultado.singleNodeValue) {
            console.log("✅ XPATH: Container fieldset[6] encontrado");
            const divs = resultado.singleNodeValue.querySelectorAll('div > div');
            console.log(`📊 DIVS FILHAS: ${divs.length} encontradas`);
        } else {
            console.log("❌ XPATH: Container fieldset[6] não encontrado");
            console.log("💡 DICA: Verifique se está na página correta do eProc");
        }
    }
    
} catch (error) {
    console.error("❌ ERRO na detecção:", error);
}

// 4. VERIFICAR DADOS GLOBAIS
console.log("\n🌐 4. VERIFICAÇÃO DE DADOS GLOBAIS:");

const dadosGlobais = {
    dataSessaoPautado: window.dataSessaoPautado,
    processoComDataSessao: window.processoComDataSessao,
    dadosCompletosMinutas: window.dadosCompletosMinutas
};

Object.entries(dadosGlobais).forEach(([chave, valor]) => {
    console.log(`${valor ? '✅' : '❌'} ${chave}:`, valor || 'null');
});

// 5. TESTAR MAPEAMENTO DE ÓRGÃOS
console.log("\n🏛️ 5. TESTE DE MAPEAMENTO DE ÓRGÃOS:");

const orgaosTeste = ['CAMPUB5', 'CAMCIV1', 'CAMCOM3', 'SGRUCIV', 'VPRES1'];
orgaosTeste.forEach(sigla => {
    const nomeCompleto = window.SENT1_AUTO.traduzirSiglaOrgao?.(sigla) || 'Função não disponível';
    console.log(`🔍 ${sigla} → ${nomeCompleto}`);
});

// 6. RESUMO FINAL
setTimeout(() => {
    console.log("\n📋 RESUMO FINAL:");
    console.log("==================");
    console.log(`✅ Funções disponíveis: ${todasFuncoesDisponiveis ? 'SIM' : 'NÃO'}`);
    console.log(`✅ Detecção funcionando: ${window.dataSessaoPautado ? 'SIM' : 'NÃO'}`);
    console.log(`✅ Card no DOM: ${document.getElementById('eprobe-card-sessao-material') ? 'SIM' : 'NÃO'}`);
    console.log(`✅ Dados completos: ${window.dadosCompletosMinutas ? 'SIM' : 'NÃO'}`);
    
    if (todasFuncoesDisponiveis && window.dataSessaoPautado) {
        console.log("🎉 SUCESSO: Sistema simplificado funcionando!");
    } else {
        console.log("⚠️ ATENÇÃO: Verificar problemas identificados acima");
    }
}, 2000);

console.log("\n🎯 TESTE CONCLUÍDO: Verificar resultados acima em 2 segundos...");
