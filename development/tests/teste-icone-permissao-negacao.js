/* 🎨 TESTE ESPECÍFICO - SUBSTITUIÇÃO ÍCONE PERMISSÃO/NEGAÇÃO
 * Execute este script no console para testar a substituição do ícone
 * "Permissão/Negação Expressa" (menos.gif → lucide ban icon)
 */

console.log("🎨 TESTE: Substituição do ícone Permissão/Negação Expressa");
console.log("=".repeat(60));

function testarSubstituicaoIconePermissao() {
    try {
        // Verificar se a extensão está carregada
        if (typeof window.SENT1_AUTO === "undefined") {
            console.log("❌ ERRO: Extensão eProbe não carregada");
            return false;
        }

        console.log("✅ Extensão eProbe detectada");

        // Procurar o botão de Permissão/Negação Expressa
        const botaoPermissao = Array.from(
            document.querySelectorAll("a.infraButton")
        ).find((a) => a.textContent.includes("Permissão/Negação"));

        if (!botaoPermissao) {
            console.log(
                "⚠️ AVISO: Botão 'Permissão/Negação Expressa' não encontrado na página atual"
            );
            console.log(
                "💡 DICA: Este teste funciona apenas em páginas de processo que possuem este botão"
            );
            return false;
        }

        console.log(
            "✅ Botão 'Permissão/Negação Expressa' encontrado:",
            botaoPermissao
        );

        // Verificar se o ícone original existe
        const iconOriginal = botaoPermissao.querySelector(
            'img[src*="menos.gif"]'
        );
        const iconSvg = botaoPermissao.querySelector("svg.lucide-ban");

        console.log("🔍 Status do ícone:");
        console.log(
            `  - Ícone original (menos.gif): ${
                iconOriginal ? "ENCONTRADO" : "NÃO ENCONTRADO"
            }`
        );
        console.log(
            `  - Ícone SVG (lucide-ban): ${
                iconSvg ? "ENCONTRADO" : "NÃO ENCONTRADO"
            }`
        );

        if (iconSvg) {
            console.log("✅ SUCESSO: Ícone já foi substituído pelo SVG!");
            console.log("📏 Dimensões do SVG:", {
                width: iconSvg.style.width || iconSvg.getAttribute("width"),
                height: iconSvg.style.height || iconSvg.getAttribute("height"),
            });
            return true;
        }

        if (iconOriginal) {
            console.log(
                "🔄 STATUS: Ícone original encontrado, substituição ainda não aplicada"
            );

            // Verificar se as funções de substituição existem
            if (
                typeof window.SENT1_AUTO.forcarReaplicacaoIcones === "function"
            ) {
                console.log("🔧 Executando substituição forçada...");
                window.SENT1_AUTO.forcarReaplicacaoIcones();

                // Aguardar um momento e verificar novamente
                setTimeout(() => {
                    const iconSvgApos =
                        botaoPermissao.querySelector("svg.lucide-ban");
                    if (iconSvgApos) {
                        console.log(
                            "✅ SUCESSO: Ícone substituído com sucesso após forçar reaplcação!"
                        );
                    } else {
                        console.log(
                            "❌ ERRO: Substituição não funcionou mesmo após forçar"
                        );
                    }
                }, 500);
            } else {
                console.log(
                    "⚠️ AVISO: Função de substituição forçada não encontrada"
                );
            }

            return false;
        }

        console.log(
            "❓ STATUS: Nem ícone original nem SVG encontrados - estrutura inesperada"
        );
        return false;
    } catch (error) {
        console.error("❌ ERRO durante o teste:", error);
        return false;
    }
}

// Executar teste principal
const resultado = testarSubstituicaoIconePermissao();

console.log("\n" + "=".repeat(60));
console.log(`🎯 RESULTADO FINAL: ${resultado ? "SUCESSO" : "PENDENTE/ERRO"}`);

if (!resultado) {
    console.log("\n💡 DICAS PARA RESOLUÇÃO:");
    console.log("1. Certifique-se de estar em uma página de processo do eProc");
    console.log(
        "2. Verifique se o botão 'Permissão/Negação Expressa' existe na página"
    );
    console.log("3. Execute: window.SENT1_AUTO.forcarReaplicacaoIcones()");
    console.log("4. Aguarde alguns segundos e execute este teste novamente");
}

console.log("\n🔧 COMANDOS ÚTEIS:");
console.log(
    "• Forçar substituição: window.SENT1_AUTO.forcarReaplicacaoIcones()"
);
console.log(
    "• Verificar todos os ícones: window.SENT1_AUTO.diagnosticarIconesCSS()"
);
console.log("• Executar este teste novamente: Execute este script novamente");
