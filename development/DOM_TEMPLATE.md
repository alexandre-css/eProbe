# Template de Captura DOM - eProc/TJSC

> Use este template para documentar a estrutura DOM de cada tipo de pagina do eProc.
> Para gerar automaticamente, execute no console da pagina alvo:
> `window.SENT1_AUTO.exportarEstruturaDOM_copyMarkdown()`

---

## Como capturar

1. Navegue ate a pagina alvo no eProc
2. Abra o DevTools (F12) > Console
3. Execute: `window.SENT1_AUTO.exportarEstruturaDOM_copyMarkdown()`
4. O markdown ja estara no clipboard
5. Cole neste arquivo na secao correspondente

---

## Paginas Alvo

### 1. processo_selecionar (Detalhes do Processo)

**URL**: `controlador.php?acao=processo_selecionar`
**Status**: Capturado (ver `estruturaDomProcesso.md`)

Seletores criticos:

- `#divInfraAreaProcesso` - Area principal
- `#conteudoMinutas` - Container de minutas
- `#fldMinutas` - Fieldset das minutas
- `#tblEventos` - Tabela de eventos
- `#fldCapa` - Capa do processo (data-classe, data-competencia)
- `#LegNovaMinuta` - Botao nova minuta
- `.navbar.bg-instancia` - Navbar do eProc

---

### 2. minuta_editar (Editor de Minutas)

**URL**: `controlador.php?acao=minuta_editar`
**Status**: Pendente

Seletores a capturar:

- `#divInfraAreaProcesso`
- `#frmEditor` / `#divEditor`
- `#txtConteudo`
- `#divInfraBarraComandosSuperior`
- `fieldset.infraFieldset`
- `.navbar.bg-instancia`

Notas:

- A extensao desabilita navbar e varios recursos nesta pagina
- Verificar se `acao=minuta_editar` esta na URL antes de executar

---

### 3. sessao_julgamento_listar (Lista de Sessoes)

**URL**: `controlador.php?acao=sessao_julgamento_listar`
**Status**: Pendente

Seletores a capturar:

- `#divInfraAreaProcesso`
- `#tblSessoes`
- `fieldset.infraFieldset`
- `#divInfraBarraComandosSuperior`
- `.navbar.bg-instancia`

---

### 4. sessao_julgamento_exibir_painel (Painel de Julgamento)

**URL**: `controlador.php?acao=sessao_julgamento_exibir_painel`
**Status**: Pendente

Seletores a capturar:

- `#divInfraAreaProcesso`
- `#divPainel`
- `fieldset.infraFieldset`
- `.navbar.bg-instancia`

---

### 5. usuario_tipo_monitoramento_localizador_listar (Localizadores)

**URL**: `controlador.php?acao=usuario_tipo_monitoramento_localizador_listar`
**Status**: Pendente

Seletores a capturar:

- `#divInfraAreaProcesso`
- `#tblLocalizadores`
- `fieldset.infraFieldset`
- `.navbar.bg-instancia`

---

## Checklist de Validacao

Apos cada captura, verificar:

- [ ] Seletores do `main.js` correspondem ao DOM real
- [ ] Elementos eProbe injetados estao presentes
- [ ] Dados sensiveis foram redactados (nomes, processos, hashes)
- [ ] Hierarquia DOM esta legivel no formato arvore
- [ ] Atributos `data-*` relevantes foram documentados
