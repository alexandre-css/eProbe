# OBJETIVO

Substituir o background do cabeçalho da capa do processo do eproc. Sempre que encontrar a cor de "background-color" informada em "substituições", substituir (com "important!") pelo background linear-gradient indicado.

## O BACKGROUND DE QUAL ELEMENTO SUBSTITUIR?

Na capa do processo ("function isCapaProcessoPage"), procurar por <fieldset id="fldCapa" class="infraFieldset bootstrap-styles" [...]

### SUBSTITUIÇÕES

**AMARELO**

background-color: #efd88f !important

por

background: linear-gradient( #F9EFAF, #F7E98D) !important;

**VERMELHO**

background-color: #db8080 !important;

por

background: linear-gradient( #FAAFAF, #F78D8D) !important;

**AZUL**

background-color: #c4dffb !important;

por

background: linear-gradient( #AFCFFA, #8DC0F7) !important;

**VERDE**

background-color: #a7eda7 !important;

por

background: linear-gradient( #AFFAB6, #8DF792) !important;

**LARANJA**

background-color: #f5b574 !important;

por

background: linear-gradient( #FAD3AF, #F7C68D) !important;

**CINZA**

background: #A0B9BF;

por

background-color: linear-gradient( #B5C9CF, #9CB0B7) !important;

**ROSA**

background: #fbc4df;

por

background-color: linear-gradient( #FBAFDF, #F78DC7) !important;
