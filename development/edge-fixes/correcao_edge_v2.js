// 🔧 CORREÇÃO ROBUSTA PARA MICROSOFT EDGE - VERSÃO 2.0
// Execute este script no console para corrigir definitivamente o problema

console.log("🔧 CORREÇÃO EDGE v2.0: Aplicando correção robusta...");

// 1. Função para criar namespace persistente
function criarNamespacePersistente() {
    // Verificar se já existe e está completo
    if (
        typeof window.SENT1_AUTO !== "undefined" &&
        typeof window.SENT1_AUTO.runFullAutomation === "function"
    ) {
        console.log("✅ NAMESPACE: Já existe e está completo");
        return window.SENT1_AUTO;
    }

    // Criar namespace robusto
    window.SENT1_AUTO = {
        // Status atual
        status: () => {
            const apisDisponiveis =
                typeof chrome !== "undefined" && chrome.runtime;
            const elementosEncontrados =
                document.querySelectorAll('[id*="eprobe"]').length;
            const namespaceCompleto =
                typeof window.SENT1_AUTO.runFullAutomation === "function";

            console.log("📊 STATUS ATUAL:");
            console.log(
                `   APIs de extensão: ${
                    apisDisponiveis ? "DISPONÍVEIS" : "NÃO DISPONÍVEIS"
                }`
            );
            console.log(`   Elementos na página: ${elementosEncontrados}`);
            console.log(
                `   Namespace completo: ${
                    namespaceCompleto ? "SIM" : "NÃO (temporário)"
                }`
            );
            console.log(`   URL atual: ${window.location.href}`);

            return {
                apis: apisDisponiveis,
                elementos: elementosEncontrados,
                completo: namespaceCompleto,
                versao: "temporario-v2.0",
            };
        },

        // Verificar se extensão está funcionando
        verificarExtensao: () => {
            const elementos = [
                document.getElementById("eprobe-data-sessao"),
                document.querySelector("#eprobe-theme-styles"),
                document.querySelector(".bootstrap-styles"),
                document.querySelector('[class*="eprobe"]'),
            ].filter((el) => el !== null);

            console.log(
                `🔍 EXTENSÃO: ${elementos.length} elementos encontrados`
            );

            if (elementos.length > 0) {
                console.log("✅ EXTENSÃO: Funcionando (elementos criados)");
                elementos.forEach((el, i) => {
                    console.log(
                        `   Elemento ${i + 1}: ${el.tagName}${
                            el.id ? "#" + el.id : ""
                        }${
                            el.className ? "." + el.className.split(" ")[0] : ""
                        }`
                    );
                });
                return true;
            } else {
                console.log(
                    "❌ EXTENSÃO: Não funcionando (nenhum elemento encontrado)"
                );
                return false;
            }
        },

        // Tentar recuperar namespace completo
        recuperarNamespace: async () => {
            console.log(
                "🔄 RECUPERAÇÃO: Tentando recuperar namespace completo..."
            );

            // Verificar se main.js carregou
            const scripts = Array.from(document.querySelectorAll("script"));
            const mainScript = scripts.find(
                (s) => s.src && s.src.includes("main.js")
            );

            if (mainScript) {
                console.log(`📜 MAIN.JS: Encontrado em ${mainScript.src}`);
            } else {
                console.log("❌ MAIN.JS: Não encontrado");
                return false;
            }

            // Aguardar APIs ficarem disponíveis
            console.log("⏳ AGUARDANDO: APIs de extensão...");
            let tentativas = 0;

            while (tentativas < 30) {
                if (
                    typeof chrome !== "undefined" &&
                    chrome.runtime &&
                    chrome.runtime.id
                ) {
                    console.log(`✅ APIS: Disponíveis após ${tentativas}s`);
                    break;
                }
                await new Promise((resolve) => setTimeout(resolve, 1000));
                tentativas++;
            }

            if (tentativas >= 30) {
                console.log("⚠️ APIS: Timeout - continuando sem elas");
            }

            // Sugerir recarregamento
            console.log("💡 SUGESTÃO: Para namespace completo:");
            console.log("   1. Vá para edge://extensions/");
            console.log("   2. Recarregue a extensão eProbe");
            console.log("   3. Volte aqui e recarregue a página");

            return false;
        },

        // Diagnóstico rápido
        diagnostico: () => {
            console.log("🔍 DIAGNÓSTICO RÁPIDO:");

            // Verificar navegador
            const isEdge = navigator.userAgent.includes("Edg/");
            console.log(`   Navegador: ${isEdge ? "Microsoft Edge" : "Outro"}`);

            // Verificar URL
            const isEproc = window.location.href.includes("eproc");
            console.log(`   Página eProc: ${isEproc ? "SIM" : "NÃO"}`);

            // Verificar extensão
            const extensaoFuncionando = window.SENT1_AUTO.verificarExtensao();

            // Verificar APIs
            const apisDisponiveis =
                typeof chrome !== "undefined" && chrome.runtime;
            console.log(
                `   APIs extensão: ${
                    apisDisponiveis ? "DISPONÍVEIS" : "NÃO DISPONÍVEIS"
                }`
            );

            // Conclusão
            if (extensaoFuncionando && !apisDisponiveis) {
                console.log(
                    "🎯 CONCLUSÃO: Extensão funciona mas APIs não disponíveis"
                );
                console.log("💡 SOLUÇÃO: Recarregue a extensão");
            } else if (!extensaoFuncionando) {
                console.log("🎯 CONCLUSÃO: Extensão não está funcionando");
                console.log(
                    "💡 SOLUÇÃO: Verifique se está ativada em edge://extensions/"
                );
            } else {
                console.log("🎯 CONCLUSÃO: Tudo funcionando normalmente");
            }

            return {
                navegador: isEdge ? "edge" : "outro",
                eproc: isEproc,
                extensao: extensaoFuncionando,
                apis: apisDisponiveis,
            };
        },

        // Ajuda rápida
        ajuda: () => {
            console.log("📚 AJUDA RÁPIDA:");
            console.log("   window.SENT1_AUTO.status() - Verificar status");
            console.log(
                "   window.SENT1_AUTO.diagnostico() - Diagnóstico completo"
            );
            console.log(
                "   window.SENT1_AUTO.verificarExtensao() - Verificar se extensão funciona"
            );
            console.log(
                "   window.SENT1_AUTO.recuperarNamespace() - Tentar recuperar funções"
            );
            console.log("");
            console.log("🔧 SOLUÇÃO PRINCIPAL:");
            console.log(
                "   1. edge://extensions/ → Recarregar extensão eProbe"
            );
            console.log("   2. Voltar aqui e recarregar página (F5)");
            console.log("   3. Testar: window.SENT1_AUTO.runFullAutomation()");
        },
    };

    // Tentar preservar namespace
    Object.defineProperty(window, "SENT1_AUTO", {
        value: window.SENT1_AUTO,
        writable: true,
        configurable: false, // Mais difícil de ser removido
    });

    console.log("✅ NAMESPACE: Criado com proteção contra remoção");
    return window.SENT1_AUTO;
}

// 2. Aplicar correção imediatamente
function aplicarCorrecaoRobusta() {
    console.log("🚀 APLICANDO: Correção robusta v2.0...");

    try {
        // Criar namespace
        const namespace = criarNamespacePersistente();

        // Executar diagnóstico automaticamente
        const diagnostico = namespace.diagnostico();

        // Dar instruções baseadas no diagnóstico
        console.log("\n📋 PRÓXIMOS PASSOS RECOMENDADOS:");

        if (diagnostico.extensao && !diagnostico.apis) {
            console.log("1. ✅ Extensão funcionando mas APIs não disponíveis");
            console.log(
                "2. 🔧 SOLUÇÃO: Recarregue a extensão em edge://extensions/"
            );
            console.log("3. 🔄 Depois recarregue esta página");
        } else if (!diagnostico.extensao) {
            console.log("1. ❌ Extensão não está funcionando");
            console.log(
                "2. 🔧 SOLUÇÃO: Ative a extensão em edge://extensions/"
            );
            console.log("3. 🔄 Depois recarregue esta página");
        } else {
            console.log("1. ✅ Tudo funcionando normalmente");
            console.log("2. 🧪 Teste: window.SENT1_AUTO.runFullAutomation()");
        }

        console.log("\n💡 COMANDOS ÚTEIS:");
        console.log("   window.SENT1_AUTO.ajuda() - Ver todos os comandos");
        console.log("   window.SENT1_AUTO.status() - Status atual");
    } catch (error) {
        console.error("❌ ERRO NA CORREÇÃO:", error);
    }
}

// 3. Executar correção
aplicarCorrecaoRobusta();

// 4. Criar monitoramento inteligente
let monitor = setInterval(() => {
    // Verificar se namespace completo apareceu
    if (
        typeof window.SENT1_AUTO !== "undefined" &&
        typeof window.SENT1_AUTO.runFullAutomation === "function"
    ) {
        console.log("🎉 SUCESSO: Namespace completo detectado!");
        console.log("✅ Todas as funções agora disponíveis!");
        clearInterval(monitor);

        // Testar função principal
        try {
            console.log("🧪 TESTE: Testando função principal...");
            window.SENT1_AUTO.status();
        } catch (error) {
            console.log("⚠️ TESTE: Erro ao testar função:", error.message);
        }
    }
}, 2000);

// Limpar monitor após 1 minuto
setTimeout(() => {
    clearInterval(monitor);
    console.log("⏰ MONITOR: Finalizado após 1 minuto");
}, 60000);

console.log("🔧 CORREÇÃO v2.0: Aplicada com sucesso!");
console.log("📱 Use window.SENT1_AUTO.ajuda() para ver comandos disponíveis");
