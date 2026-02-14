# DOM Snapshot - Estrutura Real do eProc (Pagina de Processo)

**Pagina**: `processo_selecionar`
**Tribunal**: TJSC - 2o Grau (eproc2g.tjsc.jus.br)
**Data da captura**: 14/02/2026
**Metodo**: Captura manual via console (snapshot bruto)

> Para gerar novos snapshots de forma automatizada e segura, use:
> `window.SENT1_AUTO.exportarEstruturaDOM()` (retorna JSON)
> `window.SENT1_AUTO.exportarEstruturaDOM_copyMarkdown()` (retorna Markdown, copia para clipboard)

---

## #conteudoMinutas

- **Tag**: `DIV`
- **ID**: `conteudoMinutas`
- **Classes**: (nenhuma)
- **Filhos diretos**: 11 (`conteudoMinutas_0` ate `conteudoMinutas_10`)
- **Caminho DOM**: `#divInfraAreaGlobal > #divInfraAreaProcesso > #conteudoMinutas`

### Hierarquia interna

```
#conteudoMinutas
|-- div#conteudoMinutas_0 (display:block)
|   L-- fieldset#fldMinutas.infraFieldset
|       L-- legend#legMinutas.infraLegendObrigatorio [aria-label="Historico"]
|           |-- span#historico
|           |   L-- button#legMinutasMaisMenos_0.infraLegendObrigatorio.btn.btn-link.btn-sm.p-0
|           |       |-- img#imgMinutas_0 (ver_resumo.gif) [title="Ocultar"]
|           |       L-- img#carregandoMinutas_0 (loader.gif) [display:none]
|           L-- span#LegNovaMinuta
|               L-- button.infraLegendObrigatorio.btn.btn-link.btn-sm.p-0 [title="Nova Minuta"]
|                   L-- span[data-eprobe-icon-container] > svg.lucide-file-plus-2 (icone eProbe)
|-- div#conteudoMinutas_1
|-- div#conteudoMinutas_2
|-- ... (ate conteudoMinutas_10)
```

### Observacoes

- Icones SVG Lucide ja injetados pelo eProbe (`data-eprobe-icon-replaced="true"`)
- Botao "Nova Minuta" abre `controlador.php?acao=minuta_cadastrar` em nova aba
- `infraAbrirFecharElementoHTML()` controla expandir/retrair das minutas

---

## #tblEventos

- **Tag**: `TABLE`
- **ID**: `tblEventos`
- **Classes**: `infraTable`, `table-not-hover`, `results`
- **Estrutura**: `thead` + `tbody`

### Colunas (thead)

| #   | Coluna     | Width | Conteudo do TH       |
| --- | ---------- | ----- | -------------------- |
| 1   | Relevancia | 18px  | img EstrelaAcesa.gif |
| 2   | Evento     | 56px  | "Evento"             |
| 3   | Data/Hora  | 10%   | "Data/Hora"          |
| 4   | Descricao  | auto  | "Descricao"          |
| 5   | Usuario    | 5%    | "Usuario"            |
| 6   | Documentos | 20%   | "Documentos"         |

### Estrutura de cada linha (tr)

```
tr#trEvento{N} .infraTrClara/.infraTrEscura [data-parte="INTERNO"]
|-- td > a > img#imgMarcarRelevanteM{N} (estrela acesa/apagada)
|-- td > span (numero do evento, ex: "27")
|-- td (data/hora: DD/MM/YYYY HH:MM:SS)
|-- td.infraEventoDescricao > label.infraEventoDescricao (texto do evento)
|-- td > div > label.infraEventoUsuario (login do usuario, ex: "alexandress")
|       [aria-label="NOME<br>CARGO<br>Lotacao"]
|       [onmouseover="carregarInfoUsuario(...)"]
L-- td (documentos vinculados)
```

### Funcao de relevancia (estrelas)

```javascript
// Chamada real do eProc (preservada pelo eProbe via DISABLE_STAR_REPLACEMENTS):
switchRelevanciaEvento(
    "M",
    "27",
    "controlador_ajax.php?acao_ajax=definir_relevancia_evento_processo&numProcesso=...&numSeqEvento=27&tipoGrauEvento=M&hash=...",
);
```

---

## #divInfraAreaProcesso

- **Tag**: `DIV`
- **ID**: `divInfraAreaProcesso`
- **Classes**: (nenhuma)
- **Filhos diretos**: 17

### #fldCapa (primeiro filho)

```
fieldset#fldCapa.infraFieldset.bootstrap-styles
  [data-classe="94"] [data-competencia="24"]
  [style="background: linear-gradient(rgb(251, 175, 223), rgb(247, 141, 199))"]
  |-- legend.infraLegendObrigatorio
  L-- div#divCapaProcesso > div.row (dados do processo)
```

### Observacoes

- Gradiente rosa indica processo criminal (classe 94)
- `data-classe` e `data-competencia` sao atributos uteis para deteccao de tipo
- Numero de processo no DOM interno: formato numerico sem pontuacao (20 digitos)

---

## Seletores Confirmados vs. main.js

| Seletor                 | DOM Real                 | Usado no main.js                      | Status |
| ----------------------- | ------------------------ | ------------------------------------- | ------ |
| `#conteudoMinutas`      | DIV, 11 filhos           | Sim (deteccao minutas)                | OK     |
| `#fldMinutas`           | fieldset.infraFieldset   | Sim (diagnosticarEstruturaDOMMinutas) | OK     |
| `#tblEventos`           | TABLE.infraTable         | Sim (processamento eventos)           | OK     |
| `#divInfraAreaProcesso` | DIV, 17 filhos           | Sim (area principal)                  | OK     |
| `.infraEventoDescricao` | label dentro de td       | Sim (deteccao documentos)             | OK     |
| `#fldCapa`              | fieldset com data-classe | Sim (cores de capa)                   | OK     |
| `.navbar.bg-instancia`  | nav elemento             | Sim (gradiente navbar)                | OK     |
| `#LegNovaMinuta`        | span com botao           | Sim (botao nova minuta)               | OK     |

---

## Elementos eProbe Injetados (confirmados no snapshot)

| Elemento                                      | Presente                       |
| --------------------------------------------- | ------------------------------ |
| `span[data-eprobe-icon-container]`            | Sim (dentro de #LegNovaMinuta) |
| `svg[data-eprobe-icon-replaced]`              | Sim (lucide-file-plus-2)       |
| Estrelas originais (EstrelaAcesa/Apagada.gif) | Preservadas                    |
| Classes eProbe no DOM                         | Sim (via CSS injetado)         |
