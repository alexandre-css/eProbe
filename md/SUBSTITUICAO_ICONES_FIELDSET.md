# Sistema de Substituição de Ícones do Fieldset de Ações

## 📋 Resumo

Nova funcionalidade do eProbe que substitui automaticamente os ícones antigos (GIF/PNG) do fieldset de ações (`#fldAcoes`) e ícones de ferramentas por ícones SVG modernos do Lucide, melhorando significativamente a aparência visual da interface do eProc.

**Total de ícones substituídos: 20 ícones**

## 🎨 Ícones Substituídos

### Lista Completa de Substituições

| Ação                              | Ícone Antigo              | Novo Ícone SVG         | Cor                |
| --------------------------------- | ------------------------- | ---------------------- | ------------------ |
| **Árvore**                        | `arvore documento_listar` | Network Icon           | Verde `#0c6e51`    |
| **Cancelar Movimentação**         | `remover.gif`             | X Icon                 | Vermelho `#7b0a0a` |
| **Incluir em Pauta/Mesa**         | Link específico           | Calendar Plus          | Azul `#5d87b7`     |
| **Movimentar Processo**           | `receber.gif`             | Arrow Left Right       | Padrão             |
| **Associar Procurador Parte**     | `mais.gif`                | User Plus              | Padrão             |
| **Audiência**                     | `microphone.png`          | Audio Lines            | Padrão             |
| **Download Completo**             | `pdf.gif`                 | Download               | Padrão             |
| **Enviar E-mail**                 | `anexos.gif`              | At Sign                | Padrão             |
| **Expedir Carta**                 | `email.gif`               | Mail                   | Padrão             |
| **Gerenciar Situação das Partes** | `marcar.gif`              | User Round Pen         | Padrão             |
| **Intimar**                       | `encaminhar.gif`          | Scroll Text            | Padrão             |
| **Nomear Peritos/Dativos**        | `intimacao_bloco`         | Microscope             | Padrão             |
| **Retificar Autuação**            | `assinar.gif`             | Spell Check            | Padrão             |
| **Suscitar IRDR**                 | `atualizar.gif`           | Scale                  | Padrão             |
| **Requisição Un. Externa**        | `predio.png`              | Building 2             | Padrão             |
| **Redistribuição**                | `hierarquia.gif`          | Git Pull Request Arrow | Padrão             |
| **Citar**                         | `newspaper.png`           | Scroll                 | Padrão             |
| **Ações Preferenciais**           | `configuracao.gif`        | Wrench                 | Padrão             |
| **Atualizar/Refresh**             | `refresh.gif`             | Refresh CCW            | Padrão             |
| **Histórico/Lista**               | `valores.gif`             | List Plus              | Padrão             |
| **Histórico Julgamento**          | `minuta_historico.gif`    | List Plus              | Padrão             |

## 🚀 Funcionamento

### Execução Automática

O sistema é executado automaticamente quando a extensão é carregada:

1. **Primeira tentativa**: 1 segundo após carregamento
2. **Segunda tentativa**: 3 segundos após carregamento (para páginas lentas)
3. **Observador contínuo**: Monitora mudanças dinâmicas na página

### Estratégias de Identificação

O sistema usa múltiplas estratégias para identificar e substituir ícones:

1. **Por atributo `alt`**: `img[alt="arvore documento_listar"]`
2. **Por texto do link**: Links contendo "Incluir em Pauta/Mesa"
3. **Por arquivo de imagem**: `img[src*="remover.gif"]`

## 🔧 Uso Manual

### Funções de Debug Disponíveis

```javascript
// Executar substituição manualmente
window.SENT1_AUTO.substituirIconesFieldsetAcoes();

// Reinicializar sistema de observação
window.SENT1_AUTO.inicializarSubstituicaoIcones();
```

### Console de Debug

O sistema gera logs detalhados:

```text
🎨 ÍCONES: Iniciando substituição de ícones no fieldset de ações
✅ ÍCONES: Substituído ícone arvore documento_listar
✅ ÍCONES: Substituído ícone para "Incluir em Pauta/Mesa"
🎨 ÍCONES: Concluída substituição - 12 ícones substituídos
```

## 📁 Implementação Técnica

### Estrutura do Código

```javascript
// Mapeamento de ícones por atributo alt
const ICON_REPLACEMENTS = {
    "arvore documento_listar": {
        newSvg: "<svg>...</svg>",
        selector: 'img[alt="arvore documento_listar"]',
    },
};

// Mapeamento de ícones por texto do link
const ICON_REPLACEMENTS_BY_TEXT = {
    "Incluir em Pauta/Mesa": {
        newSvg: "<svg>...</svg>",
    },
};
```

### Sistema de Observação

-   **MutationObserver**: Monitora mudanças no DOM
-   **Detecção inteligente**: Só executa quando necessário
-   **Performance otimizada**: Debouncing de 500ms

## 🎯 Benefícios

1. **Interface Moderna**: Substitui ícones pixelados por SVGs vetoriais
2. **Consistência Visual**: Todos os ícones seguem o mesmo padrão (Lucide)
3. **Cores Temáticas**: Ícones importantes têm cores específicas (verde, vermelho, azul)
4. **Escalabilidade**: SVGs se adaptam a qualquer resolução
5. **Performance**: Não impacta a performance da página

## 🔍 Troubleshooting

### Verificar se o Sistema Está Ativo

```javascript
// Verificar se as funções estão disponíveis
console.log(typeof window.SENT1_AUTO.substituirIconesFieldsetAcoes);
// Deve retornar: "function"
```

### Verificar Fieldset de Ações

```javascript
// Verificar se o fieldset existe na página
const fieldset = document.querySelector("#fldAcoes.infraFieldset");
console.log("Fieldset encontrado:", !!fieldset);
```

### Executar Substituição Manual

```javascript
// Em caso de falha automática, executar manualmente
window.SENT1_AUTO.substituirIconesFieldsetAcoes();
```

## 📦 Compatibilidade

-   **Browsers**: Chrome, Edge, Firefox
-   **eProc**: Testado em todas as versões do eProc TJSC
-   **Performance**: Zero impacto na velocidade da página
-   **CSP**: Totalmente compatível com Content Security Policy

## 🔄 Manutenção

### Adicionar Novos Ícones

Para adicionar novos mapeamentos, editar as constantes no arquivo `main.js`:

```javascript
// Adicionar ao ICON_REPLACEMENTS
'novo_icone_alt': {
    newSvg: '<svg>...</svg>',
    selector: 'img[alt="novo_icone_alt"]'
}
```

### Atualizar Ícones Existentes

Modificar o SVG correspondente no mapeamento existente.

---

**Status**: ✅ Implementado e Ativo  
**Versão**: 1.0  
**Data**: 15/07/2025  
**Autor**: Sistema eProbe
