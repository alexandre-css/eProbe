# Correcao: pointer-events em Icones Substituidos (Fev 2026)

## Problema

Apos a substituicao de `<img>` por `<span><svg></span>` pelo sistema unificado de icones do eProbe, os icones ficavam **nao-clicaveis**. Dois problemas distintos foram identificados e corrigidos.

## Problema 1: pointer-events bloqueando containers

### Diagnostico

246 spans com `data-eprobe-icon-container` tinham `pointer-events: none` aplicado por CSS e JS, impedindo que cliques chegassem ao link `<a>` pai.

### Causa raiz

Tres fontes de `pointer-events: none` competiam:

1. **CSS injetado (estilo principal):** Regra `.eprobe-icon-container:not(...)` com `pointer-events: none`
2. **CSS "PRESERVAR clicabilidade":** 19 seletores incluindo `a > span`, `a span[data-eprobe-icon-container]`, `button span` - todos com `pointer-events: none !important` (contraditorio com o nome)
3. **JS `corrigirElementoClicavel()`:** `querySelectorAll("span, svg, img, ...")` aplicava `pointer-events: none` inline em spans

### Correcao aplicada

**CSS (linha ~6532):** Removida regra `.eprobe-icon-container` que bloqueava. Adicionada regra explicita:

```css
span[data-eprobe-icon-container] {
    pointer-events: auto !important;
}
```

**CSS (linhas ~6550-6580):** Bloco "PRESERVAR clicabilidade" simplificado - removidos todos seletores de span.

**JS `corrigirElementoClicavel()` (linha ~18270):** Alterado para aplicar `none` apenas em `svg, img, [data-eprobe-icon-replaced]`. Spans com `data-eprobe-icon-container` recebem `pointer-events: auto` explicitamente.

### Logica do fluxo de clique

```
Clique no SVG (pointer-events: none) -> ignora SVG
    -> Bubble para span container (pointer-events: auto) -> recebe evento
        -> Bubble para <a> pai (pointer-events: auto) -> dispara onclick/href
```

---

## Problema 2: onclick perdido na substituicao de img por span

### Diagnostico

No eProc, alguns `<img>` tem `onclick` **direto** (nao estao dentro de `<a>`). Exemplo:

```html
<img
    src="minuta_historico.gif"
    title="Historico do Julgamento"
    onclick="javascript:exibirSubFrm('controlador.php?acao=julgamento_historico_listar&...', 1200, 700);"
/>
```

Quando o sistema substituia o `<img>` por `<span><svg></span>`, o `onclick` e o `title` eram **perdidos**.

### Causa raiz

A funcao de substituicao (`img.parentNode.replaceChild(span, img)`) nao transferia atributos interativos do `<img>` original.

### Complicador: Mundos ISOLATED vs MAIN

- `main.js` roda no mundo **ISOLATED** (Manifest V3)
- `onclick` do eProc chama funcoes como `exibirSubFrm()` que so existem no mundo **MAIN**
- Mesmo transferindo o `onclick` via `setAttribute`, ele seria executado no ISOLATED e falharia

### Correcao aplicada

**Em `main.js` (substituicao de icones):** Transfere `title` e `onclick` do `<img>` original. Para o onclick, usa closure + `addEventListener` que dispara CustomEvent bridge:

```javascript
// Transferir title
var imgTitle = img.getAttribute("title");
if (imgTitle) span.setAttribute("title", imgTitle);

// Transferir onclick via CustomEvent bridge (ISOLATED -> MAIN)
var imgOnclick = img.getAttribute("onclick");
if (imgOnclick) {
    span.style.cursor = "pointer";
    (function (onclickCode) {
        span.addEventListener("click", function (ev) {
            ev.stopPropagation();
            document.dispatchEvent(
                new CustomEvent("eprobe-executar-onclick", {
                    detail: { onclick: onclickCode },
                }),
            );
        });
    })(imgOnclick);
}
```

**Em `debug-bridge.js` (mundo MAIN):** Handler generico para executar onclick de icones substituidos:

```javascript
document.addEventListener("eprobe-executar-onclick", function (e) {
    var onclickCode = e.detail && e.detail.onclick;
    if (!onclickCode) return;
    try {
        var fn = new Function(onclickCode);
        fn(); // Executa no mundo MAIN com acesso a exibirSubFrm etc
    } catch (err) {
        console.warn("BRIDGE ONCLICK: Erro:", err);
    }
});
```

### Fluxo completo

```
Usuario clica no SVG
  -> Evento sobe para span container (pointer-events: auto)
  -> EventListener dispara CustomEvent "eprobe-executar-onclick"
  -> debug-bridge.js (MAIN) recebe e executa o codigo via new Function()
  -> exibirSubFrm() abre o modal do eProc normalmente
```

---

## Licoes aprendidas

1. **Ao substituir `<img>` do DOM, SEMPRE transferir `onclick`, `title`, `style.cursor`** do original
2. **`onclick` de funcoes nativas do eProc DEVE usar CustomEvent bridge** (ISOLATED nao tem acesso)
3. **`pointer-events: none` em containers (span) bloqueia cliques** - aplicar apenas em SVGs/imgs visuais
4. **CSS pode contradizer seu proprio nome** - verificar o que realmente faz, nao confiar no comentario
5. **Icones decorativos vs interativos:** Verificar se `<img>` original tem `onclick` antes de assumir que e decorativo

## Arquivos modificados

- `src/main.js`: CSS injetado, `corrigirElementoClicavel()`, substituicao de icones
- `src/debug-bridge.js`: Handler generico `eprobe-executar-onclick`
