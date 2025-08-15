# OBJETIVOS

1. Substituir o background do elemento "legMinutas" do eproc. Sempre que encontrar a cor de "background-color" informada em "substituições", substituir (com "important!") pelo background linear-gradient indicado.

2. Substituir o background dos elementos "infraTrClara" e "infraTrEscura" dentro de "conteudoInternoMinutas", todos do eproc. Sempre que encontrar a cor de "background-color" informada em "substituições", substituir (com "important!") pelo background linear-gradient indicado.

## O BACKGROUND DE QUAIS ELEMENTOS SUBSTITUIR?

1. Na capa do processo ("function isCapaProcessoPage"), procurar por <legend aria-label="Histórico" id="legMinutas" class="infraLegendObrigatorio"

2.1. Na capa do processo ("function isCapaProcessoPage"), procurar por "<div id="conteudoInternoMinutas_***">, onde "\*\*\*" é um número variável

2.2. Dentro de "conteudoInternoMinutas", procurar por <tr class="infraTrClara"> e <tr class="infraTrEscura"> e aplicar o gradiente mais claro em "infraTrClara" e o mais escuro em "InfraTrEscura".

### SUBSTITUIÇÕES "LEGMINUTAS"

**AZUL**

background-color: #98F5FF;

por

background: linear-gradient( #AFCFFA, #8DC0F7) !important;

**LARANJA INTENSO**

background-color: #FFA07A;

por

background: linear-gradient( #FFB8AF, #FF9C8D) !important;

**LARANJA CLARO**

background-color: #FFD39B;

por

background: linear-gradient( #FAD3AF, #F7C68D) !important;

**DOURADO**

background-color: #FFC125;

por

background: linear-gradient( #FFDE8F, #FFB84D) !important;

**LILÁS**

background-color: #CDB5CD;

por

background: linear-gradient( #D8C7D8, #C4A5C4) !important;

**CINZA**

background-color: #D3D3D3;

por

background: linear-gradient( #B5C9CF, #9CB0B7) !important;

**VERMELHA**

background-color: #EE6363;

por

background: linear-gradient( #FAAFAF, #F78D8D) !important;

**VERDE LIMÃO**

background-color: #FFFF00;

por

background: linear-gradient( #FFFF8F, #F0F04D) !important;

**ROSA CLARO**

background-color: #FFBBFF;

por

background: linear-gradient( #FFC9FF, #FF9CFF) !important;

**AMARELA**

background-color: #FFF68F;

por

background: linear-gradient( #F9EFAF, #F7E98D) !important;

**VERDE**

background-color: #90EE90;

por

background: linear-gradient( #AFFAB6, #8DF792) !important;

#### SUBSTITUIÇÕES "infraTrClara" e "infraTrEscura"

**AZUL**

infraTrClara:
background-color: #98F5FF;

infraTrEscura:
background-color: #7AC5CD;

_SUBSTITUIR POR_

infraTrClara:
background: linear-gradient( #AFCFFA, #8DC0F7) !important;

infraTrEscura:
background: linear-gradient( #7AB5F3, #5A9DEF) !important;

**LARANJA INTENSO**

infraTrClara:
background-color: #FFA07A;

infraTrEscura:
background-color: #CD8162;

_SUBSTITUIR POR_

infraTrClara:
background: linear-gradient( #FFB8AF, #FF9C8D) !important;

infraTrEscura:
background: linear-gradient( #FF8D7A, #FF6B58) !important;

**LARANJA CLARO**

infraTrClara:
background-color: #FFD39B;

infraTrEscura:
background-color: #CDAA7D;

_SUBSTITUIR POR_

infraTrClara:
background: linear-gradient( #FAD3AF, #F7C68D) !important;

infraTrEscura:
background: linear-gradient( #F5B87A, #F2A558) !important;

**DOURADO**

infraTrClara:
background-color: #FFC125;

infraTrEscura:
background-color: #CD9B1D;

_SUBSTITUIR POR_

infraTrClara:
background: linear-gradient( #FFDE8F, #FFB84D) !important;

infraTrEscura:
background: linear-gradient( #FFA93A, #FF9520) !important;

**LILÁS**

infraTrClara:
background-color: #CDB5CD;

infraTrEscura:
background-color: #8B7B8B;

_SUBSTITUIR POR_

infraTrClara:
background: linear-gradient( #D8C7D8, #C4A5C4) !important;

infraTrEscura:
background: linear-gradient( #B593B5, #A082A0) !important;

**CINZA**

infraTrClara:
background-color: #D3D3D3;

infraTrEscura:
background-color: #A9A9A9;

_SUBSTITUIR POR_

infraTrClara:
background: linear-gradient( #B5C9CF, #9CB0B7) !important;

infraTrEscura:
background: linear-gradient( #8A9EA5, #778C93) !important;

**VERMELHA**

infraTrClara:
background-color: #EE6363;

infraTrEscura:
background-color: #CD5555;

_SUBSTITUIR POR_

infraTrClara:
background: linear-gradient( #FAAFAF, #F78D8D) !important;

infraTrEscura:
background: linear-gradient( #F47A7A, #F15858) !important;

**VERDE LIMÃO**

infraTrClara:
background-color: #FFFF00;

infraTrEscura:
background-color: #CDCD00;

_SUBSTITUIR POR_

infraTrClara:
background: linear-gradient( #FFFF8F, #F0F04D) !important;

infraTrEscura:
background: linear-gradient( #E6E63A, #CCCC20) !important;

**ROSA CLARO**

infraTrClara:
background-color: #FFBBFF;

infraTrEscura:
background-color: #CD96CD;

_SUBSTITUIR POR_

infraTrClara:
background: linear-gradient( #FFC9FF, #FF9CFF) !important;

infraTrEscura:
background: linear-gradient( #FF7AFF, #FF58FF) !important;

**AMARELA**

infraTrClara:
background-color: #FFF68F;

infraTrEscura:
background-color: #CDC673;

_SUBSTITUIR POR_

infraTrClara:
background: linear-gradient( #F9EFAF, #F7E98D) !important;

infraTrEscura:
background: linear-gradient( #F5DC7A, #F3D058) !important;

**VERDE**

infraTrClara:
background-color: #90EE90;

infraTrEscura:
background-color: #7CCD7C;

_SUBSTITUIR POR_

infraTrClara:
background: linear-gradient( #AFFAB6, #8DF792) !important;

infraTrEscura:
background: linear-gradient( #7AF381, #58EF5F) !important;
