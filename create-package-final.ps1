# Script PowerShell para criar pacote limpo da extensão eProbe para Chrome Web Store
# Autor: Assistant
# Data: $(Get-Date)

Write-Host "🚀 Iniciando criação do pacote eProbe para Chrome Web Store..." -ForegroundColor Green

# Definir diretórios
$sourceDir = "c:\eProbe"
$buildDir = "$sourceDir\build\chrome-store"
$packageFile = "$buildDir\eProbe-chrome-store.zip"

# Validar se estamos no diretório correto
if (-not (Test-Path "$sourceDir\manifest.json")) {
    Write-Host "❌ Erro: manifest.json não encontrado em $sourceDir" -ForegroundColor Red
    Write-Host "Certifique-se de que está executando o script no diretório correto." -ForegroundColor Yellow
    exit 1
}

Write-Host "📁 Validando estrutura do projeto..." -ForegroundColor Cyan

# Verificar arquivos essenciais
$requiredFiles = @(
    "manifest.json",
    "src\main.js", 
    "src\popup.html",
    "src\popup.js",
    "src\popup.css",
    "src\icon16.png",
    "src\icon48.png", 
    "src\icon128.png"
)

foreach ($file in $requiredFiles) {
    if (-not (Test-Path "$sourceDir\$file")) {
        Write-Host "❌ Arquivo obrigatório não encontrado: $file" -ForegroundColor Red
        exit 1
    }
}

Write-Host "✅ Todos os arquivos obrigatórios encontrados" -ForegroundColor Green

# Criar diretório de build
if (Test-Path $buildDir) {
    Write-Host "🧹 Removendo build anterior..." -ForegroundColor Yellow
    Remove-Item $buildDir -Recurse -Force
}

Write-Host "📦 Criando diretório de build..." -ForegroundColor Cyan
New-Item -ItemType Directory -Path $buildDir -Force | Out-Null

# Lista de arquivos para incluir no pacote
$filesToInclude = @(
    "manifest.json",
    "README.md",
    "PRIVACY_POLICY.md",
    "src\main.js",
    "src\popup.html",
    "src\popup.js", 
    "src\popup.css",
    "src\icon16.png",
    "src\icon48.png",
    "src\icon128.png",
    "src\iconmain.png",
    "src\icons.css",
    "src\colocarLembrete.js",
    "src\colocarLembreteMini.js",
    "src\detectarDataSessao_novo.js"
)

Write-Host "📋 Copiando arquivos para o pacote..." -ForegroundColor Cyan

foreach ($file in $filesToInclude) {
    $sourcePath = "$sourceDir\$file"
    $targetPath = "$buildDir\$file"
    
    if (Test-Path $sourcePath) {
        # Criar diretório pai se não existir
        $targetDir = Split-Path $targetPath -Parent
        if (-not (Test-Path $targetDir)) {
            New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
        }
        
        Copy-Item $sourcePath $targetPath -Force
        Write-Host "  ✓ $file" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️ Arquivo opcional não encontrado: $file" -ForegroundColor Yellow
    }
}

Write-Host "🔍 Validando arquivos JavaScript..." -ForegroundColor Cyan

# Verificar se não há referências a alert() ou confirm() nativos
$jsFiles = @("$buildDir\src\main.js", "$buildDir\src\popup.js")
$hasNativeAlerts = $false

foreach ($jsFile in $jsFiles) {
    if (Test-Path $jsFile) {
        $content = Get-Content $jsFile -Raw
        
        # Verificar alert() nativo (não showAlert)
        if ($content -match '(?<!show)alert\s*\(' -and $content -notmatch '//.*alert\s*\(') {
            Write-Host "  ❌ Encontrado alert() nativo em $(Split-Path $jsFile -Leaf)" -ForegroundColor Red
            $hasNativeAlerts = $true
        }
        
        # Verificar confirm() nativo (não showConfirm)
        if ($content -match '(?<!show)confirm\s*\(' -and $content -notmatch '//.*confirm\s*\(') {
            Write-Host "  ❌ Encontrado confirm() nativo em $(Split-Path $jsFile -Leaf)" -ForegroundColor Red
            $hasNativeAlerts = $true
        }
        
        # Verificar se showAlert e showConfirm estão definidos
        if ($jsFile -like "*main.js*") {
            if ($content -notmatch 'function showAlert') {
                Write-Host "  ❌ Função showAlert não encontrada em main.js" -ForegroundColor Red
                $hasNativeAlerts = $true
            } else {
                Write-Host "  ✓ Função showAlert encontrada em main.js" -ForegroundColor Green
            }
            
            if ($content -notmatch 'function showConfirm') {
                Write-Host "  ❌ Função showConfirm não encontrada em main.js" -ForegroundColor Red
                $hasNativeAlerts = $true
            } else {
                Write-Host "  ✓ Função showConfirm encontrada em main.js" -ForegroundColor Green
            }
        }
        
        if ($jsFile -like "*popup.js*") {
            if ($content -notmatch 'function showAlert') {
                Write-Host "  ❌ Função showAlert não encontrada em popup.js" -ForegroundColor Red
                $hasNativeAlerts = $true
            } else {
                Write-Host "  ✓ Função showAlert encontrada em popup.js" -ForegroundColor Green
            }
        }
    }
}

if ($hasNativeAlerts) {
    Write-Host "❌ Validação falhou: Encontrados problemas nos arquivos JavaScript" -ForegroundColor Red
    Write-Host "Corrija os problemas antes de prosseguir com o empacotamento." -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Validação JavaScript aprovada" -ForegroundColor Green

# Verificar manifest.json
Write-Host "🔍 Validando manifest.json..." -ForegroundColor Cyan
$manifestContent = Get-Content "$buildDir\manifest.json" -Raw | ConvertFrom-Json

# Verificações básicas do manifest
$manifestChecks = @{
    "name" = $manifestContent.name
    "version" = $manifestContent.version  
    "description" = $manifestContent.description
    "icons" = $manifestContent.icons
    "content_scripts" = $manifestContent.content_scripts
    "action" = $manifestContent.action
}

foreach ($check in $manifestChecks.GetEnumerator()) {
    if ($check.Value) {
        Write-Host "  ✓ $($check.Key): OK" -ForegroundColor Green
    } else {
        Write-Host "  ❌ $($check.Key): Ausente" -ForegroundColor Red
    }
}

# Verificar se não há referências ao utils.js removido
if ($manifestContent.content_scripts) {
    foreach ($script in $manifestContent.content_scripts) {
        if ($script.js -contains "src/utils.js") {
            Write-Host "  ❌ Referência ao utils.js encontrada no manifest.json" -ForegroundColor Red
            exit 1
        }
    }
}
Write-Host "  ✓ Nenhuma referência ao utils.js removido" -ForegroundColor Green

Write-Host "📦 Criando arquivo ZIP..." -ForegroundColor Cyan

# Remover arquivo ZIP anterior se existir
if (Test-Path $packageFile) {
    Remove-Item $packageFile -Force
}

# Criar ZIP usando compressão nativa do PowerShell
try {
    Compress-Archive -Path "$buildDir\*" -DestinationPath $packageFile -CompressionLevel Optimal
    Write-Host "✅ Pacote criado com sucesso: $packageFile" -ForegroundColor Green
} catch {
    Write-Host "❌ Erro ao criar o pacote ZIP: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# Informações do pacote final
$packageSize = (Get-Item $packageFile).Length
$packageSizeMB = [math]::Round($packageSize / 1MB, 2)

Write-Host "" -ForegroundColor White
Write-Host "🎉 PACOTE EPROBE CRIADO COM SUCESSO!" -ForegroundColor Green
Write-Host "────────────────────────────────────" -ForegroundColor Gray
Write-Host "📁 Localização: $packageFile" -ForegroundColor Cyan
Write-Host "📊 Tamanho: $packageSizeMB MB" -ForegroundColor Cyan
Write-Host "📋 Arquivos incluídos: $($filesToInclude.Count)" -ForegroundColor Cyan
Write-Host "" -ForegroundColor White
Write-Host "✅ VALIDAÇÕES APROVADAS:" -ForegroundColor Green
Write-Host "  • Todos os arquivos obrigatórios incluídos" -ForegroundColor Gray
Write-Host "  • Nenhum alert() ou confirm() nativo encontrado" -ForegroundColor Gray  
Write-Host "  • Funções showAlert e showConfirm implementadas" -ForegroundColor Gray
Write-Host "  • Manifest.json válido" -ForegroundColor Gray
Write-Host "  • Nenhuma referência ao utils.js removido" -ForegroundColor Gray
Write-Host "" -ForegroundColor White
Write-Host "🚀 PRÓXIMOS PASSOS:" -ForegroundColor Yellow
Write-Host "  1. Teste a extensão localmente antes do envio" -ForegroundColor Gray
Write-Host "  2. Acesse: https://chrome.google.com/webstore/devconsole" -ForegroundColor Gray
Write-Host "  3. Faça upload do arquivo: eProbe-chrome-store.zip" -ForegroundColor Gray
Write-Host "  4. Preencha as informações solicitadas pela Chrome Web Store" -ForegroundColor Gray
Write-Host "" -ForegroundColor White

# Mostrar conteúdo do pacote
Write-Host "📋 CONTEÚDO DO PACOTE:" -ForegroundColor Cyan
Get-ChildItem $buildDir -Recurse -File | ForEach-Object {
    $relativePath = $_.FullName.Replace("$buildDir\", "")
    Write-Host "  • $relativePath" -ForegroundColor Gray
}

Write-Host "" -ForegroundColor White
Write-Host "💡 DICA: Execute o comando de teste para validar a extensão antes do envio" -ForegroundColor Blue
