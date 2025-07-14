// ========================================
// 🎯 FUNÇÃO CRÍTICA - BACKUP FUNCIONANDO ✅
// Data: 14/07/2025
// Status: TESTADA E APROVADA PELO USUÁRIO
// ========================================

/**
 * 🔍 FUNÇÃO PARA EXAMINAR ESTRUTURA HTML DOS DADOS
 * Analisa a estrutura específica dos dados de minutas conforme aparece no DOM
 *
 * ⚠️ IMPORTANTE: Esta função foi testada e está funcionando perfeitamente!
 * NÃO MODIFICAR sem backup e testes extensivos.
 */
function examinarEstruturaHTMLDados() {
    console.log("🔍 EXAME: Analisando estrutura HTML dos dados de minutas");

    // 1. Procurar por elementos com padrão imgMinutas_
    const elementosImgMinutas = document.querySelectorAll(
        '[id*="imgMinutas_"]'
    );
    console.log(
        `📊 EXAME: Encontrados ${elementosImgMinutas.length} elementos imgMinutas_`
    );

    elementosImgMinutas.forEach((img, index) => {
        console.log(`📷 IMG ${index + 1}:`, {
            id: img.id,
            src: img.src,
            style: img.getAttribute("style"),
            parent: img.parentElement?.tagName,
            parentId: img.parentElement?.id,
        });
    });

    // 2. Procurar por elementos com padrão carregandoMinutas_
    const elementosCarregando = document.querySelectorAll(
        '[id*="carregandoMinutas_"]'
    );
    console.log(
        `⏳ EXAME: Encontrados ${elementosCarregando.length} elementos carregandoMinutas_`
    );

    elementosCarregando.forEach((elem, index) => {
        console.log(`⏳ CARREGANDO ${index + 1}:`, {
            id: elem.id,
            tagName: elem.tagName,
            innerHTML: elem.innerHTML.substring(0, 200) + "...",
            style: elem.getAttribute("style"),
        });
    });

    // 3. Procurar por elementos relacionados a minutas
    const elementosMinutas = document.querySelectorAll(
        '[id*="Minutas"], [class*="minutas"]'
    );
    console.log(
        `📋 EXAME: Encontrados ${elementosMinutas.length} elementos relacionados a minutas`
    );

    elementosMinutas.forEach((elem, index) => {
        console.log(`📋 MINUTAS ${index + 1}:`, {
            id: elem.id,
            className: elem.className,
            tagName: elem.tagName,
            textContent: elem.textContent?.substring(0, 100) + "...",
        });
    });

    // 4. Procurar especificamente pelo fieldset #fldMinutas
    const fieldsetMinutas = document.getElementById("fldMinutas");
    if (fieldsetMinutas) {
        console.log("📁 FIELDSET #fldMinutas encontrado:");
        console.log(
            "   innerHTML:",
            fieldsetMinutas.innerHTML.substring(0, 500) + "..."
        );
        console.log(
            "   textContent:",
            fieldsetMinutas.textContent?.substring(0, 200) + "..."
        );

        // Analisar filhos diretos
        const filhosDirectos = Array.from(fieldsetMinutas.children);
        console.log(`👶 FILHOS DIRETOS (${filhosDirectos.length}):`);
        filhosDirectos.forEach((filho, index) => {
            console.log(
                `   ${index + 1}. ${filho.tagName}#${filho.id || "sem-id"}.${
                    filho.className || "sem-classe"
                }`
            );
        });
    } else {
        console.log("❌ FIELDSET #fldMinutas NÃO encontrado");
    }

    // 5. Procurar por URLs com padrão /emf2wls/image/
    const elementosEmf2wls = document.querySelectorAll(
        '[src*="/emf2wls/image/"], [href*="/emf2wls/image/"]'
    );
    console.log(
        `🖼️ EXAME: Encontrados ${elementosEmf2wls.length} elementos com /emf2wls/image/`
    );

    elementosEmf2wls.forEach((elem, index) => {
        console.log(`🖼️ EMF2WLS ${index + 1}:`, {
            tagName: elem.tagName,
            src: elem.src || elem.href,
            id: elem.id,
            parentId: elem.parentElement?.id,
        });
    });

    // 6. Verificar se há textos que contêm padrões de data e status
    const textoCompleto = document.body.innerText;
    const padroesRelevantes = [
        /Incluído em Pauta em \d{1,2}\/\d{1,2}\/\d{4}/gi,
        /Julgado em Pauta em \d{1,2}\/\d{1,2}\/\d{4}/gi,
        /Retirado em Pauta em \d{1,2}\/\d{1,2}\/\d{4}/gi,
    ];

    console.log("🎯 EXAME: Procurando padrões de status no texto da página:");
    padroesRelevantes.forEach((padrao, index) => {
        const matches = textoCompleto.match(padrao);
        if (matches) {
            console.log(
                `   Padrão ${index + 1}: ${matches.length} ocorrências`
            );
            matches.slice(0, 3).forEach((match, i) => {
                console.log(`      ${i + 1}. "${match}"`);
            });
        }
    });

    return {
        imgMinutas: elementosImgMinutas.length,
        carregandoMinutas: elementosCarregando.length,
        elementosMinutas: elementosMinutas.length,
        fieldsetMinutas: !!fieldsetMinutas,
        emf2wlsElements: elementosEmf2wls.length,
    };
}

/**
 * 🕵️ FUNÇÃO PARA BUSCAR PADRÕES ESPECÍFICOS DAS IMAGENS
 * Procura especificamente pelos elementos e padrões mostrados nas capturas de tela
 *
 * ⚠️ IMPORTANTE: Esta função também foi testada e aprovada!
 */
function buscarPadroesEspecificosImagens() {
    console.log(
        "🕵️ BUSCA: Procurando padrões específicos das imagens fornecidas"
    );

    // 1. Buscar elementos com IDs numéricos longos (como nas imagens)
    const elementosComIDsNumericos = document.querySelectorAll(
        '[id*="32175467189847165351355856"], [id*="3217424566125742584153747693"]'
    );
    console.log(
        `🔢 BUSCA: Encontrados ${elementosComIDsNumericos.length} elementos com IDs numéricos longos`
    );

    elementosComIDsNumericos.forEach((elem, index) => {
        console.log(`🔢 ELEMENTO ${index + 1}:`, {
            id: elem.id,
            tagName: elem.tagName,
            src: elem.src || "N/A",
            parentId: elem.parentElement?.id,
            nextSibling:
                elem.nextSibling?.textContent?.substring(0, 50) || "N/A",
        });
    });

    // 2. Buscar especificamente imagens com src="/emf2wls/image/gif"
    const imagensEmf2wls = document.querySelectorAll(
        'img[src*="/emf2wls/image/gif"]'
    );
    console.log(
        `🖼️ BUSCA: Encontradas ${imagensEmf2wls.length} imagens emf2wls/gif`
    );

    imagensEmf2wls.forEach((img, index) => {
        console.log(`🖼️ IMAGEM ${index + 1}:`, {
            id: img.id,
            src: img.src,
            style: img.getAttribute("style"),
            width: img.style.width,
            height: img.style.height,
            opacity: img.style.opacity,
            contextoPai:
                img.parentElement?.innerHTML?.substring(0, 100) + "...",
        });

        // Verificar se há texto próximo que contenha informações de sessão
        const elementoPai = img.parentElement;
        if (elementoPai) {
            const textoContexto = elementoPai.textContent || "";
            const padroesRelevantes = [
                /Mérito.*Retirado.*Pauta.*\d{1,2}\/\d{1,2}\/\d{4}/i,
                /Mérito.*Incluído.*Pauta.*\d{1,2}\/\d{1,2}\/\d{4}/i,
                /Mérito.*Julgado.*Pauta.*\d{1,2}\/\d{1,2}\/\d{4}/i,
            ];

            padroesRelevantes.forEach((padrao, pIndex) => {
                if (padrao.test(textoContexto)) {
                    console.log(
                        `   ✅ Padrão ${pIndex + 1} encontrado no contexto:`,
                        textoContexto.match(padrao)[0]
                    );
                }
            });
        }
    });

    // 3. Buscar elementos com onclick contendo "harliamentorHTML"
    const elementosComHarliament = document.querySelectorAll(
        '[onclick*="harliamentorHTML"]'
    );
    console.log(
        `🏛️ BUSCA: Encontrados ${elementosComHarliament.length} elementos com harliamentorHTML`
    );

    elementosComHarliament.forEach((elem, index) => {
        console.log(`🏛️ HARLIAMENT ${index + 1}:`, {
            tagName: elem.tagName,
            onclick: elem.getAttribute("onclick"),
            id: elem.id,
            textContent: elem.textContent?.substring(0, 100) + "...",
        });
    });

    // 4. Buscar especificamente pelo padrão "Mérito (Retirado em Pauta em 10/04/2025 - CAMPUB5)"
    const textoCompleto = document.body.innerText;
    const padraoEspecifico =
        /Mérito\s*\(Retirado\s+em\s+Pauta\s+em\s+(\d{1,2}\/\d{1,2}\/\d{4})\s*-\s*([A-Z0-9]+)\)/gi;
    const matchesEspecificos = textoCompleto.match(padraoEspecifico);

    console.log(
        "🎯 BUSCA: Procurando padrão específico 'Mérito (Retirado em Pauta em...':"
    );
    if (matchesEspecificos) {
        console.log(
            `   ✅ Encontradas ${matchesEspecificos.length} ocorrências:`
        );
        matchesEspecificos.forEach((match, index) => {
            console.log(`      ${index + 1}. "${match}"`);
        });
    } else {
        console.log("   ❌ Padrão específico não encontrado");
    }

    // 5. Buscar por todos os elementos que contêm texto relacionado a datas de sessão
    const elementosComDatasSessao = [];
    document.querySelectorAll("*").forEach((elem) => {
        const texto = elem.textContent || "";
        if (
            /\d{2}\/\d{2}\/\d{4}.*(?:CAMPUB|TJSC)/i.test(texto) &&
            elem.children.length === 0
        ) {
            elementosComDatasSessao.push({
                elemento: elem,
                texto: texto.trim(),
                tagName: elem.tagName,
                id: elem.id,
                className: elem.className,
            });
        }
    });

    console.log(
        `📅 BUSCA: Encontrados ${elementosComDatasSessao.length} elementos com datas de sessão:`
    );
    elementosComDatasSessao.slice(0, 5).forEach((item, index) => {
        console.log(
            `   ${index + 1}. ${item.tagName}#${
                item.id
            }: "${item.texto.substring(0, 80)}..."`
        );
    });

    return {
        elementosIDsNumericos: elementosComIDsNumericos.length,
        imagensEmf2wls: imagensEmf2wls.length,
        elementosHarliament: elementosComHarliament.length,
        padraoEspecificoEncontrado: !!matchesEspecificos,
        quantidadeMatchesEspecificos: matchesEspecificos?.length || 0,
        elementosComDatasSessao: elementosComDatasSessao.length,
    };
}

// ========================================
// VARIÁVEIS GLOBAIS CRÍTICAS - ORDEM IMPORTANTE
// ========================================

// ESTAS VARIÁVEIS DEVEM ESTAR NO TOPO DO ARQUIVO MAIN.JS
var TipoJulgamentoProcessoPautado = null;
var StatusJulgamento = null;
var DataSessao = null;

// ========================================
// NAMESPACE - EXPOR AS FUNÇÕES
// ========================================

// ESTAS LINHAS DEVEM ESTAR APÓS AS DECLARAÇÕES DAS FUNÇÕES
window.SENT1_AUTO.examinarEstruturaHTMLDados = examinarEstruturaHTMLDados;
window.SENT1_AUTO.buscarPadroesEspecificosImagens =
    buscarPadroesEspecificosImagens;

// ========================================
// COMANDOS DE TESTE FUNCIONAIS ✅
// ========================================

/*
COMANDOS TESTADOS E APROVADOS:

window.SENT1_AUTO.examinarEstruturaHTMLDados()
window.SENT1_AUTO.buscarPadroesEspecificosImagens()
window.SENT1_AUTO.detectarStatusSessao()
window.SENT1_AUTO.showDadosGlobaisSessao()

*/
