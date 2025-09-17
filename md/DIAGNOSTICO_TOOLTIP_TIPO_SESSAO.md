# DIAGNÓSTICO: Tooltip não mostra tipo de sessão "Incluído em Mesa"

## Problema Identificado

O tooltip do card de sessão não estava mostrando as informações de tipo de sessão (Física/Virtual) para eventos "Incluído em Mesa", mesmo havendo o evento com as informações necessárias:

```
Incluído em mesa para julgamento - Sessão Ordinária Física
Data da sessão: 02/10/2025 14:00
Sequencial: 1
```

## Análise dos Logs

### Logs Problemáticos:

-   ✅ Evento `trEvento37` encontrado: "Incluído em mesa para julgamento"
-   ✅ Sequencial detectado: 1
-   ❌ **Data encontrada: "null"** (PROBLEMA PRINCIPAL)
-   ❌ Data da sessão: "02/10/2025"
-   ❌ Coincidem: ❌

### Root Cause:

O sistema não estava conseguindo extrair a data correta do HTML do evento devido aos padrões regex serem muito específicos.

## Padrões Regex Originais (Muito Restritivos)

```javascript
const padroes = {
    // Esperava exatamente este formato HTML:
    sessaoFisica:
        /<b>Sessão Ordinária Física<\/b><br>Data da sessão: <b>(\d{1,2}\/\d{1,2}\/\d{4})/i,
    sessaoVirtual:
        /<b>Sessão Virtual[^<]*<\/b><br>Período da sessão: <b>(\d{1,2}\/\d{1,2}\/\d{4})/i,
    sequencial: /Sequencial:\s*(\d+)/i,
};
```

## Solução Implementada

### 1. Padrões Alternativos Flexíveis

Adicionei padrões regex mais flexíveis como fallback:

```javascript
// Padrões alternativos mais flexíveis
const padraoFisicoAlternativo =
    /[Ss]essão.*[Ff]ísica.*?(\d{1,2}\/\d{1,2}\/\d{4})/i;
const padraoVirtualAlternativo =
    /[Ss]essão.*[Vv]irtual.*?(\d{1,2}\/\d{1,2}\/\d{4})/i;
```

### 2. Sistema de Debug Aprimorado

Adicionei logs de debug para analisar o HTML quando a extração falha:

```javascript
// Se não encontrou modalidade, vamos analisar o HTML
if (!modalidade) {
    console.log(`🐛 DEBUG: ${eventoId} - HTML completo:`, htmlCompleto);
    console.log(`🐛 DEBUG: ${eventoId} - Texto do evento:`, textoEvento);

    // Tentar padrões alternativos...
}
```

### 3. Função de Debug Específica

Criada função `debugEventoProblematico()` no namespace para análise detalhada:

```javascript
window.SENT1_AUTO.debugEventoProblematico();
```

Esta função analisa especificamente o evento `trEvento37` e testa todos os padrões de extração.

## Como Testar a Correção

### 1. Recarregue a página e execute:

```javascript
window.SENT1_AUTO.debugEventoProblematico();
```

### 2. Observe os logs:

-   `🐛 DEBUG: trEvento37 - HTML completo:` (mostra o HTML real)
-   `🔍 Padrão [nome]:` (testa cada padrão regex)

### 3. Force nova detecção:

```javascript
window.SENT1_AUTO.detectarSessoesUnificado();
```

## Resultado Esperado

Após a correção, o sistema deve:

1. ✅ Detectar "Incluído em Mesa"
2. ✅ Extrair modalidade "Física" com padrão alternativo
3. ✅ Extrair data "02/10/2025" corretamente
4. ✅ Criar card com informações completas no tooltip
5. ✅ Tooltip mostrar: "Sessão Física" + data + sequencial

## Arquivos Modificados

-   **Local**: `src/main.js` - linhas ~3810-3850 (lógica de extração)
-   **Local**: `src/main.js` - linha ~36850 (função de debug)

## Próximos Passos

1. Teste a função de debug
2. Verifique se a extração agora funciona
3. Se necessário, ajuste os padrões regex baseado no HTML real encontrado
