# Clique para Buscar Dados da Sessão - eProbe

## 🎯 Funcionalidade

Implementada uma nova funcionalidade que permite ao usuário buscar dados completos da sessão de julgamento clicando no elemento da data da sessão exibido na capa do processo.

## 🔧 Como Funciona

### 1. **Detecção Automática**
- O sistema detecta automaticamente a data da sessão na página do processo
- Insere um elemento visual (`id="eprobe-data-sessao"`) na capa do processo
- Exibe inicialmente apenas a data detectada

### 2. **Interação do Usuário**
- O usuário vê o elemento da data da sessão na interface
- Ao passar o mouse, o elemento muda de cor indicando que é clicável
- Tooltip mostra: "🖱️ Clique para buscar dados completos da sessão"

### 3. **Cruzamento de Dados**
- Quando o usuário clica, o sistema:
  - Mostra feedback visual de carregamento
  - Força a busca de dados completos da sessão (ignora toggle de requisições automáticas)
  - Busca informações detalhadas na lista de sessões do eProc
  - Atualiza a interface com os dados completos

## 📋 Estados da Interface

### **Estado Inicial - Dados Básicos**
```
[📅] Processo Pautado
     25/06/2025
```
- Mostra apenas a data detectada
- Tooltip: "Clique para buscar dados completos da sessão"

### **Estado de Carregamento**
```
[🔄] Buscando dados...
     Aguarde...
```
- Ícone animado rotacionando
- Texto indicando carregamento

### **Estado Final - Dados Completos**
```
[📋] 1ª Vara Cível
     25/06/2025 14:00 | Virtual
     Encerrada
```
- Órgão julgador
- Data/hora completa + tipo de sessão
- Status da sessão (com cores diferenciadas)

## 🔒 Segurança e Controles

### **Controle de Requisições**
- A funcionalidade **ignora** o toggle de requisições automáticas
- Permite ao usuário buscar dados quando desejar
- Não faz requisições automáticas sem intervenção do usuário

### **Limite de Tentativas**
- Se o limite de tentativas foi atingido, o sistema reseta automaticamente
- Permite novas tentativas quando solicitado pelo usuário

### **Tratamento de Erros**
- Feedback visual claro em caso de erro
- Mensagens explicativas para o usuário
- Restaura o estado original em caso de falha

## 💻 Implementação Técnica

### **Arquivos Modificados**
- `main.js`: Implementação principal da funcionalidade

### **Funções Adicionadas**
- `cruzarDadosDataSessaoForcado()`: Cruzamento forçado independente do toggle
- Listeners de evento para clique e hover
- Atualização da interface com estados dinâmicos

### **Estilos Visuais**
- Hover effects para indicar interatividade
- Animação de loading durante busca
- Cores diferentes para status da sessão

## 🧪 Como Testar

### **Pré-requisitos**
1. Carregar a extensão no Chrome
2. Navegar para uma página de processo no eProc
3. Aguardar detecção automática da data da sessão

### **Passos do Teste**
1. **Verificar elemento visual**:
   - Deve aparecer elemento na capa do processo
   - Deve mostrar data detectada

2. **Testar interação**:
   - Passar mouse sobre o elemento (deve mudar cor)
   - Clicar no elemento
   - Verificar animação de loading

3. **Verificar resultado**:
   - Aguardar busca dos dados
   - Verificar atualização da interface
   - Conferir dados completos no tooltip

### **Logs de Debug**
Abrir Console (F12) e procurar por:
- `🖱️ CLIQUE: Usuário clicou na data da sessão`
- `🔓 CRUZAMENTO FORÇADO: Iniciando cruzamento manual`
- `✅ CRUZAMENTO FORÇADO: Dados da sessão encontrados!`

## 🎨 Experiência do Usuário

### **Benefícios**
- **Controle total**: Usuário decide quando buscar dados
- **Feedback visual**: Interface clara sobre o estado da busca
- **Informações ricas**: Dados completos da sessão disponíveis
- **Sem spam**: Não faz requisições automáticas desnecessárias

### **Fluxo de Uso**
1. Usuário visualiza processo no eProc
2. Sistema detecta data da sessão automaticamente
3. Usuário clica para ver detalhes
4. Sistema busca e exibe informações completas
5. Usuário tem acesso a dados ricos da sessão

## 🔍 Funcionalidades Debug

### **Comandos Disponíveis**
```javascript
// Forçar cruzamento manual
window.SENT1_AUTO.cruzarDadosDataSessaoForcado()

// Verificar dados completos
window.SENT1_AUTO.showDadosCompletosSessionJulgamento()

// Resetar controles se necessário
window.SENT1_AUTO.resetControlesRequisicao()
```

## 🚀 Resultado

A funcionalidade transforma uma detecção simples de data em uma interface rica e interativa, permitindo ao usuário obter informações detalhadas sobre a sessão de julgamento com um simples clique, mantendo o controle total sobre quando as requisições são feitas.
