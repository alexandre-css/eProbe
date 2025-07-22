// Performance Test Script para eProbe
// Execute no console do DevTools em uma página do eProc

console.log("🔍 INICIANDO TESTE DE PERFORMANCE EPROBE");

// 1. Verificar se otimizações estão ativas
const testOptimizations = () => {
    console.log("=== VERIFICAÇÃO DE OTIMIZAÇÕES ===");

    // Verificar debounce global
    const hasDebounce = typeof window.debounce === "function";
    console.log("✅ Debounce global:", hasDebounce ? "ATIVO" : "❌ INATIVO");

    // Verificar namespace consolidado
    const hasNamespace = typeof window.SENT1_AUTO === "object";
    console.log(
        "✅ Namespace SENT1_AUTO:",
        hasNamespace ? "ATIVO" : "❌ INATIVO"
    );

    // Verificar passive event listener helper
    const hasPassiveHelper =
        typeof window.addPassiveEventListener === "function";
    console.log(
        "✅ Helper Passive Events:",
        hasPassiveHelper ? "ATIVO" : "❌ INATIVO"
    );

    return { hasDebounce, hasNamespace, hasPassiveHelper };
};

// 2. Medir tempo de carregamento da extensão
const measureLoadTime = () => {
    console.log("=== MEDIÇÃO DE TEMPO DE CARREGAMENTO ===");

    performance.mark("eprobe-load-start");

    // Simular operações típicas da extensão
    const operations = [
        () => document.querySelector("#sent1-auto-button"),
        () => document.querySelector(".material-symbols-outlined"),
        () => window.SENT1_AUTO?.debugTextoMinutas !== undefined,
        () => document.querySelectorAll('[class*="infra"]').length,
    ];

    const results = operations.map((op, index) => {
        const start = performance.now();
        const result = op();
        const end = performance.now();
        const duration = end - start;

        console.log(`⏱️ Operação ${index + 1}: ${duration.toFixed(3)}ms`);
        return { operation: index + 1, duration, result: !!result };
    });

    performance.mark("eprobe-load-end");
    performance.measure(
        "eprobe-total-load",
        "eprobe-load-start",
        "eprobe-load-end"
    );

    const totalTime =
        performance.getEntriesByName("eprobe-total-load")[0].duration;
    console.log(`🎯 TEMPO TOTAL: ${totalTime.toFixed(3)}ms`);

    return { results, totalTime };
};

// 3. Teste de Memory Usage
const measureMemoryUsage = () => {
    console.log("=== MEDIÇÃO DE USO DE MEMÓRIA ===");

    if ("memory" in performance) {
        const memory = performance.memory;
        console.log("💾 Memória utilizada:", {
            usedJSHeapSize: `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(
                2
            )} MB`,
            totalJSHeapSize: `${(memory.totalJSHeapSize / 1024 / 1024).toFixed(
                2
            )} MB`,
            jsHeapSizeLimit: `${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(
                2
            )} MB`,
        });

        return memory;
    } else {
        console.log("❌ Performance.memory não disponível neste browser");
        return null;
    }
};

// 4. Teste de Event Listeners
const testEventListeners = () => {
    console.log("=== TESTE DE EVENT LISTENERS ===");

    // Verificar se botão existe e tem listeners
    const button = document.querySelector("#sent1-auto-button");
    if (button) {
        console.log("✅ Botão eProbe encontrado");

        // Simular hover para testar performance do mouseenter
        const startHover = performance.now();
        button.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));
        const endHover = performance.now();

        console.log(
            `⏱️ Tempo de resposta mouseenter: ${(endHover - startHover).toFixed(
                3
            )}ms`
        );

        // Cleanup
        button.dispatchEvent(new MouseEvent("mouseleave", { bubbles: true }));

        return { hasButton: true, hoverTime: endHover - startHover };
    } else {
        console.log("❌ Botão eProbe não encontrado");
        return { hasButton: false, hoverTime: null };
    }
};

// 5. Teste de Debounce Performance
const testDebouncePerformance = () => {
    console.log("=== TESTE DE PERFORMANCE DO DEBOUNCE ===");

    if (typeof window.debounce !== "function") {
        console.log("❌ Debounce não disponível");
        return null;
    }

    let callCount = 0;
    const testFunction = () => callCount++;
    const debouncedFunction = window.debounce(testFunction, 100);

    const startTime = performance.now();

    // Simular múltiplas chamadas rápidas (spam)
    for (let i = 0; i < 100; i++) {
        debouncedFunction();
    }

    const endTime = performance.now();
    const setupTime = endTime - startTime;

    // Aguardar o debounce executar
    setTimeout(() => {
        console.log(`📊 Debounce Results:
        - Setup time para 100 calls: ${setupTime.toFixed(3)}ms
        - Execuções efetivas: ${callCount}
        - Eficiência: ${(((100 - callCount) / 100) * 100).toFixed(
            1
        )}% spam prevention`);
    }, 150);

    return { setupTime, initialCallCount: callCount };
};

// Executar todos os testes
const runFullPerformanceTest = async () => {
    console.log("🚀 EXECUTANDO TESTE COMPLETO DE PERFORMANCE");
    console.log("================================================");

    const optimizations = testOptimizations();
    console.log("\n");

    const loadTime = measureLoadTime();
    console.log("\n");

    const memory = measureMemoryUsage();
    console.log("\n");

    const eventListeners = testEventListeners();
    console.log("\n");

    const debounce = testDebouncePerformance();
    console.log("\n");

    // Aguardar debounce test completar
    await new Promise((resolve) => setTimeout(resolve, 200));

    console.log("📋 RESUMO DO TESTE:");
    console.log("==================");
    console.log(
        "✅ Otimizações ativas:",
        Object.values(optimizations).every(Boolean)
    );
    console.log(
        "⏱️ Tempo total de operações:",
        `${loadTime.totalTime.toFixed(3)}ms`
    );
    console.log("🎯 Event listeners funcionando:", eventListeners.hasButton);
    console.log("🔧 Debounce ativo:", debounce !== null);

    if (loadTime.totalTime < 1.0) {
        console.log("🏆 PERFORMANCE EXCELENTE: Tempo < 1ms");
    } else if (loadTime.totalTime < 5.0) {
        console.log("✅ PERFORMANCE BOA: Tempo < 5ms");
    } else {
        console.log("⚠️ PERFORMANCE REGULAR: Tempo > 5ms");
    }

    return {
        optimizations,
        loadTime,
        memory,
        eventListeners,
        debounce,
    };
};

// Auto-executar o teste
runFullPerformanceTest().then((results) => {
    console.log("🎉 TESTE DE PERFORMANCE CONCLUÍDO");
    console.log("💾 Dados salvos na variável window.eProbePerformanceResults");
    window.eProbePerformanceResults = results;
});

// Funções auxiliares para debug
window.eProbeDebug = {
    testOptimizations,
    measureLoadTime,
    measureMemoryUsage,
    testEventListeners,
    testDebouncePerformance,
    runFullPerformanceTest,
};

console.log(
    "💡 DICA: Use window.eProbeDebug.runFullPerformanceTest() para repetir o teste"
);
