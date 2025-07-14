# Política de Privacidade - eProbe

**Última atualização: 14 de julho de 2025**

## 1. Sobre o eProbe

O eProbe é uma extensão do Chrome desenvolvida para servidores do Tribunal de Justiça de Santa Catarina (TJSC) que automatiza a detecção de documentos no sistema eProc, extrai texto e facilita a criação de resumos através de inteligência artificial.

## 2. Informações que Coletamos

### 2.1 Dados Locais

-   **Configurações da extensão**: Temas selecionados, preferências de automação
-   **Cache temporário**: Dados de sessão do eProc para evitar requisições repetidas
-   **Separadores personalizados**: Organizadores criados na página "Meus Localizadores"

### 2.2 Dados de Processo Judicial

-   **Texto de documentos**: Extraído temporariamente para processamento
-   **Metadados de processos**: Números, datas e descrições para organização
-   **Informações de sessão**: Datas de audiência detectadas automaticamente

## 3. Como Usamos as Informações

### 3.1 Funcionalidades Principais

-   Detectar automaticamente documentos relevantes (SENT1, INIC1)
-   Extrair texto de sentenças e petições
-   Organizar localizadores com separadores personalizados
-   Detectar datas de sessão em minutas processuais

### 3.2 API de Inteligência Artificial (Opcional)

Quando o usuário opta por usar a funcionalidade de resumo automático:

-   O texto extraído é enviado para a API Perplexity AI
-   Apenas para gerar resumos dos documentos processados
-   O usuário tem controle total sobre quando usar esta função

## 4. Compartilhamento de Dados

### 4.1 Dados Locais

-   Todas as configurações e preferências são armazenadas localmente no navegador
-   Nenhum dado pessoal é compartilhado com terceiros
-   Cache e separadores permanecem apenas no dispositivo do usuário

### 4.2 API Externa (Perplexity AI)

-   **Quando**: Apenas quando o usuário escolhe explicitamente usar o resumo automático
-   **O que**: Somente o texto do documento selecionado
-   **Finalidade**: Gerar resumo para facilitar análise processual
-   **Controle**: Usuário pode desabilitar ou usar método manual alternativo

## 5. Armazenamento e Segurança

### 5.1 Armazenamento Local

-   Configurações armazenadas no Chrome Storage Sync
-   Cache temporário com expiração automática
-   Separadores salvos no localStorage do navegador

### 5.2 Transmissão Segura

-   Conexões HTTPS para APIs externas
-   Criptografia de transporte padrão
-   Nenhum dado sensível armazenado permanentemente

## 6. Seus Direitos e Controles

### 6.1 Controle de Dados

-   **Desabilitar automação**: Controles nas configurações da extensão
-   **Limpar cache**: Função de reset disponível
-   **Remover separadores**: Opção de limpeza completa
-   **Desinstalar**: Remove todos os dados locais automaticamente

### 6.2 Transparência

-   Todo o processamento é local quando possível
-   APIs externas usadas apenas com consentimento explícito
-   Usuário sempre informado sobre o que está sendo processado

## 7. Conformidade Legal

### 7.1 LGPD (Lei Geral de Proteção de Dados)

-   Processamento baseado em legítimo interesse para automação processual
-   Consentimento explícito para uso de APIs externas
-   Direito de acesso, correção e exclusão de dados

### 7.2 Chrome Web Store

-   Conformidade com políticas de privacidade do Chrome Web Store
-   Uso limitado de dados conforme diretrizes do Google
-   Transparência completa sobre coleta e uso de dados

## 8. Limitações e Restrições

### 8.1 Dados Processuais

-   Extensão não armazena conteúdo de processos permanentemente
-   Processamento local sempre preferido
-   APIs externas usadas apenas para resumos opcionais

### 8.2 Acesso Restrito

-   Funciona apenas em domínios autorizados (eProc TJSC)
-   Não coleta dados de outros sites
-   Escopo limitado a automação processual específica

## 9. Contato

Para dúvidas sobre esta política de privacidade ou sobre o tratamento de dados:

-   **Desenvolvedor**: Alexandre Claudino Simas Santos
-   **Site**: https://e-probe.vercel.app/
-   **Suporte**: Através do repositório GitHub da extensão

## 10. Alterações na Política

Esta política pode ser atualizada para refletir mudanças na extensão ou requisitos legais. Alterações significativas serão comunicadas através de atualizações da extensão.

---

**Declaração de Conformidade com Chrome Web Store**: O uso de informações recebidas das APIs do Google será aderente à Política de Dados do Usuário do Chrome Web Store, incluindo os requisitos de Uso Limitado.
