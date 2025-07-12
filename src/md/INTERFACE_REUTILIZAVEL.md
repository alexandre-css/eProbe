# Funções de Interface Reutilizável - eProbe

**🌐 Project Landing Page**: https://e-probe.vercel.app/

## 🎨 Visão Geral

O eProbe agora inclui funções reutilizáveis para criar botões com o mesmo estilo elegante e discreto usado no elemento "eprobe-data-sessao". Essas funções facilitam a criação de interfaces consistentes no sistema eProc.

## 🔧 Funções Disponíveis

### `criarBotaoEleganteeProc(id, className)`

Função principal para criar botões com estilo eProc elegante e discreto.

**Parâmetros:**

-   `id` (string): ID único do elemento
-   `className` (string, opcional): Classes CSS. Padrão: `"col-auto mr-2"`

**Retorna:** Elemento DOM configurado com estilos e eventos

### `botaoBrancoCapaProcesso(id, className)`

Alias mais descritivo para `criarBotaoEleganteeProc()`. Ideal para botões na capa dos processos.

**Parâmetros:** Idênticos à função principal

### `criarInfraButtonPrimary(id, innerHTML)`

Função para criar botões com estilo "infraButton btn-primary" do eProc (botões azuis de ação).

**Parâmetros:**

-   `id` (string): ID único do elemento
-   `innerHTML` (string, opcional): Conteúdo HTML interno do botão

**Retorna:** Elemento button configurado com classe infraButton btn-primary e eventos

### `botaoAzuleProc(id, innerHTML)`

Alias mais descritivo para `criarInfraButtonPrimary()`. Ideal para botões de ação azuis do eProc.

**Parâmetros:** Idênticos à função principal

## 🎨 Características dos Botões

### Estilo Visual

-   **Background**: `#f8fafc` (cinza muito claro)
-   **Border**: `1px solid #d1d5db` (cinza claro)
-   **Border-radius**: `4px` (cantos arredondados sutis)
-   **Padding**: `8px 12px` (espaçamento interno confortável)
-   **Box-shadow**: `0 1px 2px rgba(0,0,0,0.05)` (sombra sutil)

### Efeitos Interativos

-   **Hover discreto**: Mudança sutil de background e borda
-   **Transição suave**: `all 0.2s ease`
-   **Cursor pointer**: Indica interatividade

### Layout Flexível

-   **Display**: `flex` com `flex-direction: row`
-   **Align-items**: `center` (alinhamento vertical)
-   **Gap**: `8px` (espaçamento entre elementos internos)
-   **White-space**: `nowrap` (evita quebra de linha)

### Botões infraButton (Azuis)

-   **Background**: `#134377` (azul escuro eProc)
-   **Hover/Focus**: `#0f3a66` (azul mais escuro)
-   **Classe**: `infraButton btn-primary`
-   **Transições**: Suaves entre estados
-   **Eventos**: mouseenter, mouseleave, focus, blur

## 💻 Exemplos de Uso

### Uso Básico

```javascript
// Criar botão simples
const meuBotao = window.SENT1_AUTO.criarBotaoEleganteeProc("meu-botao-id");

// Adicionar conteúdo
meuBotao.innerHTML = `
    <svg style="width: 16px; height: 16px; color: #3b82f6;">
        <!-- SVG icon aqui -->
    </svg>
    <span>Meu Botão</span>
`;

// Adicionar ao DOM
document.querySelector(".container-fluid .row").appendChild(meuBotao);
```

### Usando o Alias Descritivo

```javascript
// Para botões na capa do processo
const botaoProcesso =
    window.SENT1_AUTO.botaoBrancoCapaProcesso("processo-info");

botaoProcesso.innerHTML = `
    <span style="font-weight: 500;">📋 Informações</span>
`;
```

### Personalização Avançada

```javascript
// Criar com classe personalizada
const botaoCustom = window.SENT1_AUTO.criarBotaoEleganteeProc(
    "botao-custom",
    "col-auto ml-2 custom-class"
);

// Personalizar estilo adicional
botaoCustom.style.border = "1px solid #059669"; // Verde
botaoCustom.innerHTML = `
    <svg style="width: 16px; height: 16px; color: #059669;">
        <!-- Ícone verde -->
    </svg>
    <span style="color: #059669;">Status OK</span>
`;

// Adicionar evento personalizado
botaoCustom.addEventListener("click", function () {
    console.log("Botão customizado clicado!");
});
```

### Usando Botões infraButton (Azuis)

```javascript
// Criar botão de ação azul estilo eProc
const botaoResumir = window.SENT1_AUTO.criarInfraButtonPrimary(
    "resumir-doc",
    `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 6px;">
        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-2V2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM9 3h6v1H9V3zm9 16H6V6h2v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6h2v13z"/>
    </svg>
    Processar Documento
`
);

// Adicionar evento de clique
botaoResumir.addEventListener("click", function () {
    console.log("Processando documento...");
});

// Inserir na interface
document.querySelector(".infraAreaGlobal").appendChild(botaoResumir);
```

### Usando o Alias dos Botões Azuis

```javascript
// Para ações principais do eProc
const botaoExportar = window.SENT1_AUTO.botaoAzuleProc(
    "exportar-dados",
    `
    <svg width="16" height="16" fill="currentColor" style="margin-right: 6px;">
        <path d="M8 12l-4-4h3V4h2v4h3l-4 4z"/>
        <path d="M2 16h12v2H2z"/>
    </svg>
    Exportar Dados
`
);

// Adicionar à interface
botaoExportar.addEventListener("click", exportarDados);
document.querySelector(".container-fluid").appendChild(botaoExportar);
```

## 🔍 Debug e Teste

As funções estão disponíveis globalmente via `window.SENT1_AUTO`:

```javascript
// Testar no console do navegador (F12)
const testeBotao = window.SENT1_AUTO.criarBotaoEleganteeProc("teste");
testeBotao.innerHTML = "<span>🧪 Teste</span>";
document.body.appendChild(testeBotao);
```

## 🎯 Casos de Uso Recomendados

### 1. Botões de Ação na Capa do Processo

```javascript
const botaoExportar =
    window.SENT1_AUTO.botaoBrancoCapaProcesso("exportar-dados");
botaoExportar.innerHTML = `
    <svg><!-- Ícone de download --></svg>
    <span>Exportar</span>
`;
```

### 2. Indicadores de Status

```javascript
const indicadorStatus =
    window.SENT1_AUTO.criarBotaoEleganteeProc("status-processo");
indicadorStatus.innerHTML = `
    <div style="width: 8px; height: 8px; background: #10b981; border-radius: 50%;"></div>
    <span>Ativo</span>
`;
```

### 3. Filtros e Controles

```javascript
const filtroTipo = window.SENT1_AUTO.criarBotaoEleganteeProc("filtro-tipo");
filtroTipo.innerHTML = `
    <span>📁 SENT1</span>
    <svg style="width: 12px; height: 12px;"><!-- Seta dropdown --></svg>
`;
```

## 🔄 Vantagens da Abordagem

-   **Consistência**: Todos os botões têm o mesmo visual elegante (brancos discretos ou azuis de ação)
-   **Manutenibilidade**: Mudanças no estilo se propagam automaticamente
-   **Reutilização**: Evita duplicação de código CSS e JavaScript
-   **Flexibilidade**: Personalização fácil mantendo a base consistente
-   **Debug**: Acesso via console para testes rápidos
-   **Padronização eProc**: Segue os padrões visuais do sistema eProc/TJSC

## 📝 Notas Técnicas

-   As funções são adicionadas ao namespace `window.SENT1_AUTO`
-   O elemento criado já inclui todos os event listeners de hover
-   Compatível com o sistema de classes do Bootstrap usado no eProc
-   Funciona em qualquer página do sistema eProc/TJSC

## 🚀 Próximos Passos

1. **Teste** as funções em diferentes páginas do eProc
2. **Documente** novos botões criados com essas funções
3. **Padronize** outros elementos da interface usando essa base
4. **Expanda** com variações de cores/temas conforme necessário
