// 🔧 GUIA DE INSTALAÇÃO E TESTE - Status de Sessão eProbe
// Siga este passo-a-passo para testar as funcionalidades

console.log("🚀 GUIA DE INSTALAÇÃO E TESTE - eProbe Status de Sessão");
console.log("=".repeat(60));

// ========================================
// PASSO 1: RECARREGAR A EXTENSÃO
// ========================================
console.log("\n📋 PASSO 1: Recarregar a extensão eProbe");
console.log("1. Abra uma nova aba no Edge");
console.log("2. Digite: edge://extensions/");
console.log("3. Encontre a extensão 'eProbe'");
console.log("4. Clique no ícone de reload (↻) na extensão");
console.log("5. Aguarde alguns segundos");

// ========================================
// PASSO 2: NAVEGAR PARA EPROC
// ========================================
console.log("\n📋 PASSO 2: Navegar para página do eProc");
console.log(
    "1. Vá para uma página do eProc (eproc1g.tjsc.jus.br ou eproc2g.tjsc.jus.br)"
);
console.log("2. Abra um processo específico");
console.log("3. Aguarde a página carregar completamente");

// ========================================
// PASSO 3: TESTAR O NAMESPACE
// ========================================
console.log("\n📋 PASSO 3: Verificar se o namespace carregou");
console.log("Cole este código no console:");
console.log("");
console.log("if (typeof window.SENT1_AUTO === 'undefined') {");
console.log("    console.error('❌ EXTENSÃO NÃO CARREGADA!');");
console.log("    console.log('🔧 Solução: Recarregue a extensão e a página');");
console.log("} else {");
console.log("    console.log('✅ EXTENSÃO CARREGADA COM SUCESSO!');");
console.log(
    "    console.log('📊 Funções disponíveis: ' + Object.keys(window.SENT1_AUTO).length);"
);
console.log("}");

// ========================================
// PASSO 4: TESTAR FUNÇÕES DE STATUS
// ========================================
console.log("\n📋 PASSO 4: Testar funções de status de sessão");
console.log("Se a extensão carregou corretamente, teste:");
console.log("");
console.log("// Verificar se as funções de status estão disponíveis");
console.log(
    "const funcoes = ['testarSistemaStatusSessao', 'debugPadroesStatusSessao', 'forcarStatusSessao'];"
);
console.log("funcoes.forEach(f => {");
console.log("    if (typeof window.SENT1_AUTO[f] === 'function') {");
console.log("        console.log('✅ ' + f + ': DISPONÍVEL');");
console.log("    } else {");
console.log("        console.error('❌ ' + f + ': NÃO DISPONÍVEL');");
console.log("    }");
console.log("});");

// ========================================
// PASSO 5: EXECUTAR TESTES
// ========================================
console.log("\n📋 PASSO 5: Executar testes das funcionalidades");
console.log("Se todas as funções estiverem disponíveis:");
console.log("");
console.log("// Teste 1: Sistema completo");
console.log("window.SENT1_AUTO.testarSistemaStatusSessao()");
console.log("");
console.log("// Teste 2: Debug de padrões");
console.log("window.SENT1_AUTO.debugPadroesStatusSessao()");
console.log("");
console.log("// Teste 3: Forçar status específico");
console.log("window.SENT1_AUTO.forcarStatusSessao('julgado')");
console.log("window.SENT1_AUTO.forcarStatusSessao('pautado')");
console.log("window.SENT1_AUTO.forcarStatusSessao('retirado')");

// ========================================
// SOLUÇÃO DE PROBLEMAS
// ========================================
console.log("\n📋 SOLUÇÃO DE PROBLEMAS COMUNS:");
console.log("");
console.log("❌ PROBLEMA: 'window.SENT1_AUTO não carregado'");
console.log("🔧 SOLUÇÕES:");
console.log("   1. Recarregue a extensão em edge://extensions/");
console.log("   2. Feche e abra novamente a aba do eProc");
console.log("   3. Aguarde 5-10 segundos após carregar a página");
console.log("   4. Verifique se você está em uma página válida do eProc");
console.log("");
console.log("❌ PROBLEMA: Funções de status não disponíveis");
console.log("🔧 SOLUÇÕES:");
console.log("   1. Recarregue a extensão");
console.log("   2. Aguarde mais tempo para o script carregar");
console.log("   3. Verifique o console por erros de JavaScript");
console.log("");
console.log("❌ PROBLEMA: Erro de sintaxe no console");
console.log("🔧 SOLUÇÕES:");
console.log("   1. Copie e cole exatamente como mostrado");
console.log("   2. Aguarde cada comando terminar antes do próximo");
console.log("   3. Use F12 para abrir as ferramentas de desenvolvedor");

console.log("\n🏁 FIM DO GUIA - Sucesso na implementação! 🚀");
