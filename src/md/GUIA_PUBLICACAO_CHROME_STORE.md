# 🚀 Guia de Publicação - Chrome Web Store

## 📋 Resumo Executivo

Sua extensão **eProbe** está **100% pronta** para publicação na Chrome Web Store! Todas as funcionalidades foram **mantidas conforme solicitado** e os ajustes de conformidade foram implementados sem remover nenhuma função.

---

## ✅ Status da Preparação

### 🔧 **Ajustes Realizados**

-   ✅ **Manifest atualizado**: Versão 1.0.1 com conformidade total
-   ✅ **Política de privacidade**: Criada e compatível com Chrome Web Store
-   ✅ **Permissões revisadas**: API Perplexity corretamente declarada
-   ✅ **Descrição otimizada**: Dentro do limite de 132 caracteres
-   ✅ **Relatório de conformidade**: Análise completa disponível

### 🛡️ **Funcionalidades Mantidas**

-   ✅ **Detecção automática** de documentos SENT1 e INIC1
-   ✅ **Extração de texto** de PDFs e documentos HTML
-   ✅ **API Perplexity** para resumos (com controles de transparência)
-   ✅ **Organizadores** para página de localizadores
-   ✅ **Sistema de temas** personalizáveis
-   ✅ **Cache inteligente** para otimização

---

## 📦 Passo a Passo para Publicação

### **1. Preparar o Pacote**

#### Opção A: Script Automático (Linux/Mac)

```bash
chmod +x prepare_for_store.sh
./prepare_for_store.sh
```

#### Opção B: Manual (Windows/Todos)

1. Criar uma pasta `eProbe_package`
2. Copiar para a pasta:
    - `manifest.json`
    - `PRIVACY_POLICY.md`
    - Pasta `src/` completa
    - Pasta `assets/` completa
3. Compactar em ZIP (nome sugerido: `eProbe_v1.0.1_chrome_store.zip`)

### **2. Acessar Chrome Web Store Developer Console**

1. 🌐 Acesse: https://chrome.google.com/webstore/devconsole
2. 🔑 Faça login com sua conta Google
3. 💳 **Taxa única**: US$ 5 para registro de desenvolvedor (se primeiro item)
4. ➕ Clique em **"Adicionar novo item"**

### **3. Upload da Extensão**

1. 📦 Faça upload do arquivo ZIP criado
2. ⏳ Aguarde processamento automático
3. ✅ Verifique se não há erros de validação

### **4. Preencher Informações da Loja**

#### **📝 Informações Básicas**

**Nome:**

```
eProbe - Automação eProc TJSC
```

**Descrição curta (máx. 132 caracteres):**

```
Automação para eProc TJSC: detecta documentos, extrai texto, organiza localizadores e facilita resumos com IA.
```

**Descrição detalhada:**

```
eProbe é uma extensão especializada para servidores do Tribunal de Justiça de Santa Catarina (TJSC) que automatiza tarefas repetitivas no sistema eProc.

FUNCIONALIDADES PRINCIPAIS:
• Detecção automática de documentos relevantes (SENT1, INIC1)
• Extração de texto de sentenças e petições (HTML e PDF)
• Organização de localizadores com separadores personalizados
• Detecção automática de datas de sessão em minutas processuais
• Sistema de temas personalizáveis para melhor experiência
• Facilitação de resumos com inteligência artificial (opcional)

BENEFÍCIOS:
• Reduz tempo de localização de documentos
• Agiliza análise processual
• Melhora organização do trabalho
• Facilita criação de resumos para capas de processo
• Interface integrada ao eProc sem interferir no sistema

SEGURANÇA E PRIVACIDADE:
• Processamento local de dados sempre que possível
• API externa apenas com consentimento explícito do usuário
• Controles granulares para todas as funcionalidades
• Conformidade com LGPD e políticas do Chrome Web Store

Desenvolvida especificamente para o ambiente de trabalho dos servidores do TJSC, respeitando as particularidades do sistema eProc e as necessidades do dia a dia forense.
```

#### **🏷️ Categoria e Tags**

-   **Categoria:** Produtividade
-   **Tags sugeridas:** automação, eproc, tjsc, juridico, documentos, produtividade

#### **🌐 Links**

-   **Website:** `https://e-probe.vercel.app/`
-   **Política de Privacidade:** Copiar conteúdo de `PRIVACY_POLICY.md`

### **5. Configurações de Privacidade**

#### **📊 No Painel "Privacidade":**

**O item coleta dados do usuário?**

-   ✅ Sim (para configurações locais e uso opcional de API)

**Tipos de dados coletados:**

-   ✅ Dados de autenticação (API keys opcionais)
-   ✅ Dados do site (texto de documentos temporariamente)
-   ✅ Dados de personalização (temas e configurações)

**Finalidades:**

-   ✅ Funcionalidade do aplicativo
-   ✅ Personalização

**Você usa dados para fins publicitários?**

-   ❌ Não

**Dados são transmitidos para terceiros?**

-   ✅ Sim (apenas API Perplexity quando usuário escolhe usar resumos)

**Dados são vendidos para terceiros?**

-   ❌ Não

### **6. Adicionar Capturas de Tela**

**📸 Capturas Necessárias (1280x800 ou 640x400):**

1. Interface principal com botão de automação no eProc
2. Modal de seleção de documentos
3. Página de configurações/popup da extensão
4. Exemplo de organização de localizadores
5. Sistema de temas em funcionamento

**💡 Dicas para Capturas:**

-   Use o sistema eProc real para autenticidade
-   Mostre a extensão em ação
-   Capture interfaces limpas e profissionais
-   Evite dados pessoais/processuais reais

### **7. Público-Alvo**

-   **Audiência primária:** Profissionais/Trabalhadores
-   **Idade:** 18+
-   **Localização:** Brasil (especificamente Santa Catarina)

### **8. Revisão e Submissão**

1. 🔍 **Revisar todas as informações**
2. ✅ **Aceitar termos de desenvolvedor**
3. 🚀 **Clicar em "Submeter para revisão"**

---

## ⏱️ Cronograma de Publicação

### **📅 Prazos Típicos:**

-   **Upload e configuração:** 30-60 minutos
-   **Revisão inicial:** 1-3 dias úteis
-   **Revisão completa:** 3-7 dias úteis
-   **Publicação:** Imediata após aprovação

### **🔄 Possíveis Cenários:**

-   **✅ Aprovação direta:** 3-5 dias
-   **📝 Solicitação de ajustes:** 5-10 dias (+ tempo para correções)
-   **❌ Rejeição:** Raro com nossa preparação completa

---

## 🛠️ Monitoramento Pós-Publicação

### **📊 Acompanhar:**

-   Número de instalações
-   Avaliações dos usuários
-   Relatórios de problemas
-   Solicitações de funcionalidades

### **📱 Notificações:**

-   Configure notificações por email no Developer Console
-   Monitore feedback na Chrome Web Store
-   Acompanhe analytics de uso

---

## 🆘 Solução de Problemas

### **❓ Problemas Comuns:**

#### **"Manifesto inválido"**

-   ✅ **Status:** Já resolvido - usamos Manifest V3 correto

#### **"Política de privacidade necessária"**

-   ✅ **Status:** Já incluída - arquivo `PRIVACY_POLICY.md`

#### **"Permissões excessivas"**

-   ✅ **Status:** Otimizadas - apenas permissões necessárias

#### **"Funcionalidade não clara"**

-   ✅ **Status:** Bem documentada - descrição detalhada incluída

### **📞 Suporte Adicional:**

Se houver qualquer problema durante a publicação:

1. **Consulte:** `CHROME_STORE_COMPLIANCE_REPORT.md` (análise completa)
2. **Revise:** Todas as políticas foram seguidas rigorosamente
3. **Ajuste:** Qualquer feedback específico do Google pode ser implementado rapidamente

---

## 🎯 Estratégia de Lançamento

### **📢 Divulgação Recomendada:**

1. **Servidores TJSC:** Comunicação interna sobre a ferramenta
2. **Grupos profissionais:** Compartilhar em grupos de servidores públicos
3. **Redes sociais:** Demonstrar funcionalidades em vídeos curtos
4. **Documentação:** Landing page já disponível (e-probe.vercel.app)

### **📈 Crescimento:**

-   Coletar feedback dos primeiros usuários
-   Implementar melhorias baseadas no uso real
-   Adicionar funcionalidades solicitadas pela comunidade
-   Manter conformidade com atualizações das políticas

---

## ✨ Conclusão

Sua extensão eProbe está **perfeitamente preparada** para a Chrome Web Store. Todo o trabalho de conformidade foi realizado mantendo **100% das funcionalidades** que você desenvolveu.

### **🎉 Principais Conquistas:**

-   ✅ **Conformidade total** com políticas do Chrome Web Store
-   ✅ **Funcionalidades preservadas** - nenhuma função removida
-   ✅ **Documentação completa** - pronta para revisão
-   ✅ **Processo otimizado** - máxima chance de aprovação rápida

**🚀 Agora é só publicar e ver sua extensão ajudando servidores do TJSC em todo o estado!**

---

**Boa sorte com a publicação! 🍀**
