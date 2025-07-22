/**
 * 🧪 TESTE DO MAPEAMENTO OFICIAL DE ÓRGÃOS TJSC
 * Verifica se todos os órgãos oficiais estão sendo traduzidos corretamente
 */

console.log("🔍 TESTANDO MAPEAMENTO OFICIAL DE ÓRGÃOS TJSC...");
console.log("=====================================");

// Lista de todos os códigos oficiais para testar
const codigosParaTeste = [
    // Códigos novos oficiais
    "CAMCIV1",
    "CAMCIV2",
    "CAMCIV3",
    "CAMCIV4",
    "CAMCIV5",
    "CAMCIV6",
    "CAMCOM1",
    "CAMCOM2",
    "CAMCOM3",
    "CAMCRI1",
    "CAMCRI2",
    "CAMCRI3",
    "CAMCRI4",
    "CAMPUB1",
    "CAMPUB2",
    "CAMPUB3",
    "CAMPUB4",
    "CAMPUB5",
    "CAMTRA1",
    "CAMTRA2",
    "GCIV1",
    "GCIV2",
    "GCIV3",
    "GCRI1",
    "GCRI2",
    "TREC1",
    "TREC2",
    "TREC3",
    "TREC4",
    "TREC5",
    "TREC6",
    "ORGESO",
    "TPLENO",
    "CONSMA",
    "CORREG",
    "SSECCIV",
    "SSECCRI",

    // Códigos antigos/alternativos para compatibilidade
    "GCIV01",
    "GCIV02",
    "GCIV03",
    "GCIV04",
    "GCIV05",
    "GCIV06",
    "GCOM01",
    "GCOM02",
    "GCOM03",
    "GCOM04",
    "GCOM05",
    "GCOM06",
    "GCRI01",
    "GCRI02",
    "GCRI03",
    "GCRI04",
    "GCRI05",

    // Casos especiais encontrados no sistema
    "CAMPUB5", // O mais comum nos testes anteriores
];

// Função de teste
function testarMapeamentoOrgaos() {
    let sucessos = 0;
    let falhas = 0;
    let problemas = [];

    console.log("📊 RESULTADOS DO TESTE:");
    console.log("----------------------");

    codigosParaTeste.forEach((codigo) => {
        try {
            const resultado = window.SENT1_AUTO.traduzirSiglaOrgao(codigo);

            if (resultado === codigo) {
                // Se retornou o próprio código, significa que não foi traduzido
                console.log(`❌ ${codigo} → ${resultado} (não traduzido)`);
                falhas++;
                problemas.push(`${codigo}: não foi traduzido`);
            } else if (resultado === "Órgão não identificado") {
                console.log(`❌ ${codigo} → ${resultado}`);
                falhas++;
                problemas.push(`${codigo}: não identificado`);
            } else {
                console.log(`✅ ${codigo} → ${resultado}`);
                sucessos++;
            }
        } catch (error) {
            console.log(`💥 ${codigo} → ERRO: ${error.message}`);
            falhas++;
            problemas.push(`${codigo}: erro ${error.message}`);
        }
    });

    console.log("=====================================");
    console.log("📈 RESUMO DOS TESTES:");
    console.log(`✅ Sucessos: ${sucessos}`);
    console.log(`❌ Falhas: ${falhas}`);
    console.log(
        `📊 Taxa de sucesso: ${(
            (sucessos / codigosParaTeste.length) *
            100
        ).toFixed(1)}%`
    );

    if (problemas.length > 0) {
        console.log("\n⚠️ PROBLEMAS ENCONTRADOS:");
        problemas.forEach((problema) => console.log(`   - ${problema}`));
    }

    return {
        sucessos,
        falhas,
        total: codigosParaTeste.length,
        taxa: (sucessos / codigosParaTeste.length) * 100,
        problemas,
    };
}

// Teste específico com os dados reais do eProc (caso anterior)
function testarCasoReal() {
    console.log("\n🎯 TESTE COM CASO REAL DO EPROC:");
    console.log("================================");

    const textoReal =
        "Embargos de Declaração (Julgado em Pauta em 19/03/2024 - CAMPUB5)";
    const regexParsing =
        /^([A-Za-zÀ-ÿ\s]+?)\s*\(([A-Za-z\s]+em\s+Pauta)\s+em\s+(\d{1,2}\/\d{1,2}\/\d{4})(?:\s*a\s*\d{1,2}\/\d{1,2}\/\d{4})?\s*-\s*([A-Z0-9\-º]+(?:\s+[A-Z]+)*)\)$/;

    const match = textoReal.match(regexParsing);
    if (match) {
        const [, tipo, status, data, orgao] = match;
        console.log(`📝 Tipo: ${tipo}`);
        console.log(`📅 Data: ${data}`);
        console.log(`📋 Status: ${status}`);
        console.log(`🏛️ Órgão (código): ${orgao}`);

        const orgaoTraduzido = window.SENT1_AUTO.traduzirSiglaOrgao(orgao);
        console.log(`🏛️ Órgão (traduzido): ${orgaoTraduzido}`);

        if (orgaoTraduzido !== orgao) {
            console.log("✅ Tradução realizada com sucesso!");
            return true;
        } else {
            console.log("❌ Tradução falhou - retornou código original");
            return false;
        }
    } else {
        console.log("❌ Regex não conseguiu fazer parse do texto");
        return false;
    }
}

// Executar testes
if (
    typeof window !== "undefined" &&
    window.SENT1_AUTO &&
    window.SENT1_AUTO.traduzirSiglaOrgao
) {
    const resultados = testarMapeamentoOrgaos();
    const casoReal = testarCasoReal();

    console.log("\n🎉 TESTE CONCLUÍDO!");
    console.log(
        `Sistema está ${
            resultados.taxa >= 90
                ? "funcionando corretamente"
                : "precisando de ajustes"
        }`
    );

    if (casoReal) {
        console.log("🎯 Caso real do eProc validado com sucesso!");
    }
} else {
    console.error(
        "❌ Sistema não disponível. Certifique-se de que está numa página do eProc com a extensão ativa."
    );
    console.log("💡 Para executar este teste:");
    console.log("1. Navegue para uma página do eProc");
    console.log("2. Abra o console do desenvolvedor (F12)");
    console.log("3. Cole e execute este código");
}
