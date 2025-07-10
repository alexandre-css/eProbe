# ⚠️ MOVER ARQUIVOS SENSÍVEIS

## 📂 **Ação Necessária: Organizar Arquivos**

Para preparar o projeto para a Chrome Web Store, você precisa **mover manualmente** os seguintes arquivos:

### 🔐 **Arquivos a Mover para /private/**

1. **eProbe.crx** → `c:\eProbe\private\eProbe.crx`
2. **eProbe.pem** → `c:\eProbe\private\eProbe.pem`
3. **manifest-firefox.json** → `c:\eProbe\private\manifest-firefox.json`

### 📝 **Como Fazer:**

#### Método 1: Explorer do Windows

1. Abra a pasta `c:\eProbe`
2. Crie a pasta `private` (se não existir)
3. **Mova** (não copie) os arquivos para dentro de `private\`

#### Método 2: PowerShell

```powershell
# Execute no diretório c:\eProbe
New-Item -ItemType Directory -Path "private" -Force
Move-Item "eProbe.crx" -Destination "private\" -Force
Move-Item "eProbe.pem" -Destination "private\" -Force
Move-Item "manifest-firefox.json" -Destination "private\" -Force
```

### ✅ **Estrutura Final Esperada:**

```
c:\eProbe\
├── manifest.json           ← Para Chrome Web Store
├── README.md               ← Para Chrome Web Store
├── PRIVACY_POLICY.md       ← Para Chrome Web Store
├── src\                    ← Para Chrome Web Store
│   ├── main.js
│   ├── utils.js
│   ├── popup.html
│   └── ...
├── private\                ← NÃO incluir na Chrome Web Store
│   ├── eProbe.crx         ← Arquivo movido
│   ├── eProbe.pem         ← Arquivo movido
│   └── manifest-firefox.json
├── build\                  ← Pasta para pacotes
└── create-package.ps1      ← Script para criar pacote
```

### 🎯 **Após Mover os Arquivos:**

Execute o script para criar o pacote limpo:

```powershell
.\create-package.ps1
```

Isso criará: `build\eProbe-chrome-store.zip` pronto para envio!

### 🔒 **Por que Mover?**

-   **eProbe.pem**: Chave privada - NUNCA deve ser compartilhada
-   **eProbe.crx**: Pacote assinado - desnecessário para Chrome Web Store
-   **manifest-firefox.json**: Específico para Firefox - não precisa na versão Chrome

### ⚡ **Status Atual:**

-   [ ] Mover eProbe.crx para private\
-   [ ] Mover eProbe.pem para private\
-   [ ] Mover manifest-firefox.json para private\
-   [ ] Executar create-package.ps1
-   [ ] Enviar o .zip gerado para Chrome Web Store
