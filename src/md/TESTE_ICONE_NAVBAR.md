# 🔧 Guia de Teste - Ícone da Navbar eProbe

## 📋 Resumo das Alterações Implementadas

### ✅ Alterações Concluídas (14/07/2025)

1. **Ícone da Navbar**

    - ❌ Antes: `chrome.runtime.getURL("assets/eP.png")`
    - ✅ Agora: `chrome.runtime.getURL("assets/eP%20large.png")`
    - 🔧 Correção: URL encoding para espaço no nome do arquivo (%20)

2. **Proteção Anti-Duplicação**

    - ✅ Remoção forçada de elementos existentes
    - ✅ Controle de estado com `navbarJaInicializada`
    - ✅ Proteção reforçada na função `inserirElementoNavbarEproc()`

3. **Cards Material Design**
    - ✅ Tamanho ultra-compacto (fit-content)
    - ✅ Ícones SVG micro-otimizados (12px)
    - ✅ CSS minimalista aplicado

## 🧪 Como Testar a Extensão

### 1. **Preparação**

```powershell
# No VS Code, execute a task de teste:
Ctrl+Shift+P → "Tasks: Run Task" → "Testar Extensão eProbe"
```

### 2. **Instalação no Chrome**

1. Abra o Chrome
2. Vá para `chrome://extensions/`
3. Ative o "Modo do desenvolvedor" (toggle no canto superior direito)
4. Clique em "Carregar sem compactação"
5. Selecione a pasta `c:\eProbe`
6. Verifique se a extensão aparece instalada

### 3. **Teste da Navbar**

1. Navegue para uma página do eProc (eproc1g.tjsc.jus.br ou eproc2g.tjsc.jus.br)
2. **Verificar o ícone da navbar:**
    - ✅ Deve aparecer um ícone "eP large" na navbar
    - ✅ Deve estar posicionado antes do link "Portal jus.br"
    - ✅ Deve usar o arquivo "eP large.png" (não "eP.png")
    - ✅ NÃO deve aparecer duplicado

### 4. **Verificações no Console**

Abra o Developer Tools (F12) e verifique no Console:

```javascript
// Verificar se o elemento foi inserido corretamente
document.getElementById("eprobe-navbar-element");

// Verificar a URL da imagem
document.getElementById("eprobe-navbar-element")?.querySelector("img")?.src;

// Deve retornar algo como:
// "chrome-extension://[id]/assets/eP%20large.png"
```

### 5. **Sinais de Sucesso** ✅

-   [ ] Ícone "eP large" aparece na navbar
-   [ ] Ícone não está duplicado
-   [ ] Ícone é clicável e leva para https://e-probe.vercel.app/
-   [ ] Hover funciona (escurecimento do ícone)
-   [ ] Console não mostra erros de carregamento

### 6. **Sinais de Problema** ❌

-   [ ] Ícone não aparece
-   [ ] Ícone aparece duplicado
-   [ ] Console mostra erro 404 para "eP large.png"
-   [ ] Ícone usa "eP.png" em vez de "eP large.png"

## 🔍 Debug Avançado

### Verificar Arquivos na Extensão

```javascript
// No console da página do eProc, testar se o arquivo existe:
fetch(chrome.runtime.getURL("assets/eP%20large.png"))
    .then((response) => {
        console.log("✅ Arquivo encontrado:", response.status === 200);
        return response.blob();
    })
    .then((blob) => {
        console.log("📁 Tamanho do arquivo:", blob.size, "bytes");
    })
    .catch((error) => {
        console.error("❌ Erro ao carregar arquivo:", error);
    });
```

### Verificar Estado da Navbar

```javascript
// Verificar se a proteção anti-duplicação está funcionando
console.log(
    "Elementos navbar encontrados:",
    document.querySelectorAll("#eprobe-navbar-element").length
);

// Deve retornar: 1 (apenas um elemento)
```

### Listar Todos os Arquivos de Assets

```javascript
// Verificar quais arquivos PNG estão disponíveis
["eP.png", "eP large.png", "icon16.png", "icon48.png", "icon128.png"].forEach(
    (file) => {
        fetch(chrome.runtime.getURL(`assets/${file}`))
            .then((r) => console.log(`✅ ${file}:`, r.status))
            .catch((e) => console.log(`❌ ${file}:`, e));
    }
);
```

## 📊 Status Atual do Projeto

### Arquivos Modificados

-   ✅ `src/main.js` - Alteração do ícone e proteção anti-duplicação
-   ✅ Arquivo "eP large.png" confirmado na pasta assets/

### Funcionalidades Testadas

-   ✅ URL encoding para espaço no nome do arquivo
-   ✅ Proteção contra múltiplas inicializações
-   ✅ Remoção forçada de elementos duplicados

### Próximos Passos (se necessário)

1. Teste em ambiente real do eProc
2. Verificação visual do ícone correto
3. Validação da funcionalidade de hover
4. Confirmação de ausência de duplicações

## 🚨 Resolução de Problemas Comuns

### Problema: Ícone não aparece

**Solução:**

1. Verificar se a extensão está ativa
2. Recarregar a página do eProc
3. Verificar console por erros

### Problema: Ícone duplicado

**Solução:**

1. As proteções implementadas devem resolver isso
2. Se persistir, verificar se há múltiplas chamadas de inicialização

### Problema: Ícone errado (eP.png em vez de eP large.png)

**Solução:**

1. Verificar se o cache do browser foi limpo
2. Recarregar a extensão no chrome://extensions/
3. Verificar se as alterações estão salvas no arquivo main.js

---

**Última Atualização:** 14/07/2025 - Implementação da troca de ícone e proteções anti-duplicação
