Para realizar a ação de clicar no link "1" na primeira linha da coluna "Quantidade de Processos" na tabela do sistema eproc, utilizei uma abordagem automatizada de controle de navegador que pode ser comparada, em termos técnicos, a uma automação similar ao uso de bibliotecas como **Playwright** ou **Selenium**. Abaixo explico o passo a passo detalhado desse processo, do ponto de vista de programação e automação web:

* * *

**1. Captura do conteúdo da página**

* Inicialmente, obtenho o DOM completo do HTML atual da página alvo. Isso permite analisar sua estrutura de forma programática.

**2. Identificação da tabela alvo**

* Percorro o DOM em busca da tabela correspondente à listagem dos localizadores e processos.

* Normalmente, busco pelo seletor específico (por exemplo, `table`, `tbody`, `tr`, `td`) ou pelo texto do cabeçalho para identificar a coluna correta.

**3. Localização do link desejado**

* Analiso as linhas (`<tr>`) da tabela e seleciono a primeira (`index 0`).

* Dentro dessa linha, navego até a coluna referente à "Quantidade de Processos". Costuma ser feito pelo índice da coluna, ou pelo texto do cabeçalho.

* Dentro do `<td>` da coluna, busco pelo elemento `<a>` ou `<button>` que contenha o valor "1".

python

`# Exemplo genérico usando Selenium Python from selenium import webdriver driver = webdriver.Chrome() driver.get("URL_DA_PAGINA") # Encontrar tabela por XPATH, CSS SELECTOR ou direto pelo index, depende de estrutura tabela = driver.find_element(By.CSS_SELECTOR, "table.suaClasse") primeira_linha = tabela.find_elements(By.TAG_NAME, "tr")[1]  # desconsiderando headers col_quantidade = primeira_linha.find_elements(By.TAG_NAME, 'td')[N_index_coluna] link = col_quantidade.find_element(By.LINK_TEXT, "1") link.click()  # Executa o clique`

**4. Execução do clique programático**

* Depois que o elemento correto é localizado, executo um comando de clique sobre ele. Isso é realizado fazendo uma chamada ao método `click()` desse elemento DOM.

**5. Espera e processamento da navegação/requisição**

* Aguardo a resposta/navegação do sistema, monitorando carregamento de página ou alteração de rota/modal.

* Após o clique, a página geralmente faz uma requisição (GET/POST) e carrega a nova lista ou painel com detalhes.

**6. Confirmação do sucesso**

* Verifico se a nova tela ou conteúdo foi carregado corretamente (por exemplo, checando o título, URL, ou a presença dos dados esperados na tabela resultante).

* * *

**Resumo técnico**

* Todo o processo envolve manipulação do DOM da página, identificação do elemento por seletores contextuais, execução de um evento de clique, e espera do resultado.

* Em sistemas judiciais como o eproc, é comum que ids/classes sejam dinâmicas, então frequentemente a automação depende do texto ou ordem dos elementos.

* Esse mecanismo pode ser implementado em diversas linguagens/plataformas (Python + Selenium/Playwright, Node.js + Puppeteer, etc.), e exige acesso autenticado à sessão do usuário (cookies/session tokens), como em um browser real.

Se quiser um exemplo de automação real utilizando Playwright, Selenium ou Puppeteer, posso redigir um snippet da ação exata!

qual você utilizou: Playwright, Selenium ou Puppeteer?

qual você utilizou: Playwright, Selenium ou Puppeteer?

[

](https://eproc2g.tjsc.jus.br/eproc/controlador.php?acao=localizador_processos_lista&acao_origem=localizador_orgao_listar&acao_retorno=principal&selLocalizador=321547666513191351115606411601&hash=40046460c9ee544fae6abc547abca739)

Não utilizei diretamente Playwright, Selenium ou Puppeteer. Minha interação com a página é feita através de um sistema de automação de navegador próprio, que funciona em um ambiente controlado e seguro, mas que se assemelha tecnicamente ao que é feito com Playwright ou Selenium.

**Como funciona na prática:**

* O meu agente de automação de navegador acessa o DOM da página aberta na sua sessão do navegador, identifica e manipula elementos da interface (tabelas, botões, links) de forma programática.

* O processo é quase idêntico ao que seria feito em scripts Playwright, Selenium ou Puppeteer: há parse do HTML, seleção precisa de elementos, execução de eventos (como click) e espera de respostas carregadas.

* A diferença é que todo esse controle ocorre dentro do próprio navegador do usuário, aproveitando já o login e sessão ativos, sem depender de uma instância externa automatizável.

Ou seja: em termos de efeito prático, minha automação equivale ao uso do **Playwright/Selenium** (e não Puppeteer, pois esse normalmente é usado para navegadores baseados em Chromium pelo Node.js), mas com implementação proprietária, nativa do meu ambiente de execução.

caso eu queira reproduzir isso em um navegador baseado em Chromium (Edge e Chrome, principalmente), qual seriam as minhas alternativas? como você evita que o CORS da página bloqueie a operação?

caso eu queira reproduzir isso em um navegador baseado em Chromium (Edge e Chrome, principalmente), qual seriam as minhas alternativas? como você evita que o CORS da página bloqueie a operação?

[

](https://eproc2g.tjsc.jus.br/eproc/controlador.php?acao=localizador_processos_lista&acao_origem=localizador_orgao_listar&acao_retorno=principal&selLocalizador=321547666513191351115606411601&hash=40046460c9ee544fae6abc547abca739)

Se você quiser **reproduzir essa automação em navegadores baseados em Chromium**, como Edge ou Chrome, existem três alternativas principais e considerações importantes quanto ao CORS:

* * *

1. **Automação de Navegador Completa**
--------------------------------------

**Ferramentas indicadas:**

* **Playwright** (Node.js, Python, Java, .NET)

* **Selenium WebDriver** (suporte multi-linguagem)

* **Puppeteer** (Node.js)

**Como funcionam:**

* Esses frameworks controlam uma instância real do navegador (pode ser Chrome, Edge ou Chromium), automatizando cliques, preenchimento de formulários, navegação e tudo mais exatamente como um usuário faria.

* O **CORS não afeta** ações simuladas via automação, porque toda requisição e renderização é realizada pelo navegador, na própria sessão autenticada.

* O script CLICA nos elementos reais do DOM, e o processamento navega conforme as permissões, cookies e contexto da sessão real.

**Exemplo Playwright (Node.js):**

javascript

`const { chromium } = require('playwright'); (async () => {   const browser = await chromium.launch({ headless: false });   const page = await browser.newPage();   await page.goto('https://eproc2g.tjsc.jus.br/...');   // fazer login manualmente, se necessário   // encontrar tabela, linha e clicar no link "1"   const linhas = await page.$$('table tr');   // Exemplo de seleção baseada no conteúdo da linha/coluna:   await linhas[1].$('text="1"').then(link => link.click());   // ...esperar a nova página/carregar/processar... })();`

* * *

2. **Extensão de Navegador**
----------------------------

* **Extensão Chrome/Edge**: pode manipular páginas via scripts de conteúdo, acessar o DOM, disparar cliques e ler dados.

* Você escreve um script JavaScript que roda na página como usuário logado.

* **CORS não bloqueia automação pelo DOM**: a extensão age como se fosse um usuário interagindo na interface, não via requests AJAX non-origin.

* * *

3. **Userscript (ex: Tampermonkey/Greasemonkey)**
-------------------------------------------------

* São pequenos scripts que você instala no navegador e que executam ao abrir a página.

* Conseguem interagir com o DOM, automatizar clique, preencher formulários etc.

* **CORS não impede clique DOM em scripts de usuários**.

* Só afeta tentativas de fazer requisições AJAX/fetch para outro domínio.

* * *

Sobre CORS no contexto dessas abordagens
----------------------------------------

* **CORS** (Cross-Origin Resource Sharing) só bloqueia requisições **JavaScript feitas via XHR/fetch** no navegador para domínios diferentes do da página carregada.

* Se sua automação **simula ações reais do usuário** (clique, navegação, scroll), **não há bloqueio de CORS**, porque todo processamento é feito "dentro" do navegador, autenticado e com contexto real.

* Só seria um problema se você tentasse acessar dados diretamente do back-end por scripts externos (por exemplo, rodando `fetch` para a API eproc de uma página em outro domínio), o que não é o caso ao usar Selenium, Playwright, Puppeteer, extensões ou user scripts para controlar a própria aba do eproc aberta.

* * *

Resumindo:
----------

* **Escolha uma automação de navegador clássica (Playwright/Selenium/Puppeteer), extensão ou userscript** para Edge/Chrome, conforme sua familiaridade e contexto.

* **Não se preocupe com CORS** nessas abordagens típicas de automação, pois ao atuar diretamente no DOM autenticado, o navegador manipula tudo internamente.

* Só precisa de cuidado com CORS quando faz **requisição programática entre domínios diferentes** via código JS. Automatização do navegador não sofre tal restrição.
