# 📝 Instruções para Documentação - eProbe

## 🎯 REGRA FUNDAMENTAL

**⚠️ IMPORTANTE**: Todos os novos arquivos `.md` devem ser criados EXCLUSIVAMENTE na pasta `src/md/`

## 📁 Estrutura Organizada

### Localização Principal

```
src/md/
├── 📚 Documentações técnicas principais
├── reorganizacao/          # Histórico de reorganizações
└── [subcategorias]         # Outras subcategorias conforme necessário
```

### Categorias de Documentação

#### 🔧 Documentações Técnicas (src/md/)

-   Guias de desenvolvimento
-   Especificações técnicas
-   Instruções de instalação
-   Relatórios de correções
-   Testes e validações

#### 📋 Documentações Históricas (src/md/reorganizacao/)

-   Relatórios de reorganização
-   Validações finais
-   Verificações de estrutura
-   Histórico de mudanças

## 📜 INSTRUÇÃO PARA IA/DESENVOLVEDOR

### 🤖 Regra para GitHub Copilot:

```
SEMPRE criar arquivos .md em: src/md/
NUNCA criar arquivos .md na raiz do projeto
```

### 📋 Checklist antes de criar .md:

1. ✅ Verificar se o arquivo pertence a `src/md/`
2. ✅ Definir subcategoria se necessário
3. ✅ Usar nomenclatura descritiva
4. ✅ Seguir padrão de formatação

### 🎨 Padrão de Nomenclatura:

```
CATEGORIA_DESCRICAO.md

Exemplos:
- GUIA_INSTALACAO_EDGE.md
- TESTE_FUNCIONALIDADE_X.md
- RELATORIO_CORRECAO_BUG.md
- ESPECIFICACAO_FEATURE_Y.md
```

## 🔄 Subcategorias Permitidas

### Criar subpastas em src/md/ quando necessário:

```
src/md/
├── testes/              # Documentações de teste
├── guias/               # Guias de usuário
├── relatorios/          # Relatórios técnicos
├── especificacoes/      # Especificações de features
├── reorganizacao/       # Histórico de reorganizações
└── validacoes/          # Validações e verificações
```

## ✅ Arquivos já Organizados

### 📚 Em src/md/ (Principais):

-   `BUSCA_DADOS_SESSAO.md`
-   `DESIGN_BRIEF.md`
-   `EXTRACAO_MINUTAS_DETALHADAS.md`
-   `INTERFACE_REUTILIZAVEL.md`
-   `QUICK_TEST_GUIDE.md`
-   `SEMANTIC_KERNEL_TESTS.md`
-   `EDGE_COMMANDS_GUIDE.md`
-   `GUIA_DIAGNOSTICO_EDGE.md`
-   `GUIA_INSTALACAO_EXTENSAO.md`
-   `SEMANTIC_KERNEL_DEMO.md`
-   `TESTE_TEMAS.md`
-   `CONTRAST_FIX_REPORT.md`
-   `ORGANIZACAO_DEMOS.md`

### 📁 Em src/md/reorganizacao/:

-   `REORGANIZACAO_FINAL.md`
-   `REORGANIZACAO_CONCLUIDA.md`
-   `VERIFICACAO_REORGANIZACAO.md`
-   `VALIDACAO_FINAL.md`
-   `ESTRUTURA.md`

## ✅ Validação Final da Organização

### 📊 Status da Reorganização (13/07/2025)

#### ✅ Completado:

-   [x] Todos os arquivos .md movidos para `src/md/`
-   [x] Subcategorias criadas (`reorganizacao/`)
-   [x] Duplicatas identificadas e removidas
-   [x] Pasta `docs/` removida (era duplicata)
-   [x] Índice completo criado (`README.md`)
-   [x] Instruções de documentação estabelecidas

#### 📁 Estrutura Final:

```
src/md/
├── README.md (índice principal)
├── INSTRUCOES_DOCUMENTACAO.md (este arquivo)
├── PRIVACY_POLICY.md
├── [13 arquivos de documentação técnica]
└── reorganizacao/ (5 arquivos sobre o processo)
```

#### 🚫 Arquivos Mantidos Fora de src/md:

-   `README.md` (raiz do projeto - obrigatório)
-   `PRIVACY_POLICY.md` (raiz - para GitHub)
-   `.github/copilot-instructions.md` (configuração Git)
-   `*/README.md` (em subpastas específicas como assets/, demo/, development/)

### 🎯 Resultado

-   **Total organizado**: 19 arquivos .md
-   **Localização centralizada**: ✅ src/md/
-   **Navegação**: ✅ Via README.md índice
-   **Duplicatas**: ✅ Removidas
-   **Organização**: ✅ Completa e funcional

## 🚫 NÃO Fazer

❌ Criar .md na raiz do projeto  
❌ Criar .md em outras pastas sem justificativa  
❌ Usar nomes genéricos como "doc.md"  
❌ Criar sem verificar organização existente

## ✅ Sempre Fazer

✅ Usar pasta `src/md/`  
✅ Nomear descritivamente  
✅ Criar subcategorias quando necessário  
✅ Manter estrutura organizada  
✅ Documentar adequadamente

---

**Data de Criação**: 13 de julho de 2025  
**Status**: ✅ Instruções ativas e obrigatórias  
**Atualização**: Sempre que necessário
