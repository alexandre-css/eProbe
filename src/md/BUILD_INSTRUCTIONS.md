# 📦 Guia de Empacotamento para Chrome Web Store

## 🗂️ Estrutura de Arquivos

### ✅ **Arquivos para INCLUIR no .zip da Chrome Web Store:**

```
eProbe-chrome-store.zip
├── manifest.json
├── README.md
├── PRIVACY_POLICY.md
└── src/
    ├── main.js
    ├── utils.js
    ├── popup.html
    ├── popup.css
    ├── popup.js
    ├── icon16.png
    ├── icon48.png
    ├── icon128.png
    ├── iconmain.png
    └── icons.css
```

### 🚫 **Arquivos para EXCLUIR do .zip (mas manter no projeto):**

```
/private/ (pasta criada para arquivos sensíveis)
├── eProbe.crx      ← Mover para cá
├── eProbe.pem      ← Mover para cá
├── manifest-firefox.json
└── chaves-desenvolvimento.txt

/build/ (pasta para builds locais)

Arquivos de desenvolvimento:
├── CHROME_STORE_CHECKLIST.md
├── FINAL_REPORT.md
├── STATUS_DESENVOLVIMENTO.md
├── CHANGELOG.md
├── eProbe workspace.code-workspace
└── src/md/ (documentação técnica)
```

## 🔧 **Instruções para Criar o Pacote:**

### Método 1: Manual (Recomendado)


1. Crie uma nova pasta temporária: `eProbe-chrome-store`
2. Copie APENAS os arquivos da lista "✅ INCLUIR"
3. Comprima a pasta em `eProbe-chrome-store.zip`
4. Envie este .zip para a Chrome Web Store


### Método 2: Script PowerShell (Automático)

```powershell
# Execute no diretório c:\eProbe
$sourceDir = "c:\eProbe"
$buildDir = "$sourceDir\build\chrome-store"
$zipPath = "$sourceDir\build\eProbe-chrome-store.zip"

# Criar diretório de build
if (Test-Path $buildDir) { Remove-Item $buildDir -Recurse -Force }
New-Item -ItemType Directory -Path $buildDir -Force

# Copiar arquivos necessários
Copy-Item "$sourceDir\manifest.json" -Destination $buildDir
Copy-Item "$sourceDir\README.md" -Destination $buildDir
Copy-Item "$sourceDir\PRIVACY_POLICY.md" -Destination $buildDir
Copy-Item "$sourceDir\src" -Destination $buildDir -Recurse

# Remover arquivos desnecessários da pasta src
Remove-Item "$buildDir\src\md" -Recurse -Force -ErrorAction SilentlyContinue

# Criar ZIP
Compress-Archive -Path "$buildDir\*" -DestinationPath $zipPath -Force

Write-Host "✅ Pacote criado: $zipPath"
```

## 🔒 **Segurança dos Arquivos Privados:**


### **eProbe.pem (Chave Privada)**

- ⚠️ **NUNCA compartilhar** este arquivo
- ⚠️ **NUNCA incluir** em repositórios públicos
- ⚠️ **NUNCA enviar** para Chrome Web Store

- ✅ **Manter** no projeto local para builds de desenvolvimento

### **eProbe.crx (Pacote Assinado)**

- 📦 Útil para distribuição interna/testes
- 🚫 Não necessário para Chrome Web Store
- ✅ Pode ser usado para instalação manual

## 📋 **Checklist Final Antes do Envio:**

- [ ] Arquivos .crx e .pem movidos para pasta /private/
- [ ] Apenas arquivos necessários no .zip
- [ ] Tamanho do .zip < 128MB
- [ ] Testado o .zip em ambiente limpo
- [ ] Manifest.json validado

- [ ] Screenshots preparadas
- [ ] Descrição da store preparada

## 🎯 **Próximo Passo:**

Execute o script PowerShell ou faça a cópia manual para criar o pacote limpo para envio.
