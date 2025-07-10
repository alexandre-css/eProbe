# Script para criar pacote limpo da extensao eProbe para Chrome Web Store
# Execute no PowerShell a partir do diretorio c:\eProbe

param(
    [string]$OutputDir = ".\build",
    [string]$PackageName = "eProbe-chrome-store"
)

Write-Host "Criando pacote para Chrome Web Store..." -ForegroundColor Green

# Definir caminhos
$sourceDir = Get-Location
$buildDir = Join-Path $OutputDir $PackageName
$zipPath = Join-Path $OutputDir "$PackageName.zip"

# Limpar build anterior
if (Test-Path $buildDir) {
    Write-Host "Limpando build anterior..." -ForegroundColor Yellow
    Remove-Item $buildDir -Recurse -Force
}

if (Test-Path $zipPath) {
    Remove-Item $zipPath -Force
}

# Criar diretorio de build
Write-Host "Criando estrutura de build..." -ForegroundColor Blue
New-Item -ItemType Directory -Path $buildDir -Force | Out-Null

# Arquivos obrigatorios para Chrome Web Store
$requiredFiles = @(
    "manifest.json",
    "README.md", 
    "PRIVACY_POLICY.md"
)

# Copiar arquivos obrigatorios
Write-Host "Copiando arquivos obrigatorios..." -ForegroundColor Blue
foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Copy-Item $file -Destination $buildDir
        Write-Host "  OK: $file" -ForegroundColor Green
    } else {
        Write-Host "  ERRO: $file (nao encontrado)" -ForegroundColor Red
    }
}

# Copiar pasta src
if (Test-Path "src") {
    Write-Host "Copiando pasta src..." -ForegroundColor Blue
    Copy-Item "src" -Destination $buildDir -Recurse
    
    # Remover arquivos desnecessarios da pasta src
    $srcCleanup = @(
        "$buildDir\src\md",
        "$buildDir\src\*.md",
        "$buildDir\src\*.log"
    )
    
    foreach ($pattern in $srcCleanup) {
        if (Test-Path $pattern) {
            Remove-Item $pattern -Recurse -Force -ErrorAction SilentlyContinue
        }
    }
    Write-Host "  OK: Pasta src copiada e limpa" -ForegroundColor Green
} else {
    Write-Host "  ERRO: Pasta src nao encontrada" -ForegroundColor Red
}

# Verificar se ha icones
$icons = @("src\icon16.png", "src\icon48.png", "src\icon128.png")
foreach ($icon in $icons) {
    $iconPath = Join-Path $buildDir $icon
    if (Test-Path $iconPath) {
        Write-Host "  OK: $icon" -ForegroundColor Green
    } else {
        Write-Host "  AVISO: $icon (nao encontrado)" -ForegroundColor Yellow
    }
}

# Criar ZIP
Write-Host "Criando arquivo ZIP..." -ForegroundColor Blue
try {
    Compress-Archive -Path "$buildDir\*" -DestinationPath $zipPath -Force
    Write-Host "Pacote criado com sucesso!" -ForegroundColor Green
    Write-Host "Local: $zipPath" -ForegroundColor Cyan
} catch {
    Write-Host "ERRO ao criar ZIP: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# Mostrar informacoes do pacote
$zipInfo = Get-Item $zipPath
$zipSizeMB = [math]::Round($zipInfo.Length / 1MB, 2)

Write-Host "`nInformacoes do Pacote:" -ForegroundColor Cyan
Write-Host "   Tamanho: $zipSizeMB MB" -ForegroundColor White
Write-Host "   Limite Chrome Web Store: 128 MB" -ForegroundColor Gray

if ($zipSizeMB -gt 128) {
    Write-Host "ATENCAO: Pacote excede o limite da Chrome Web Store!" -ForegroundColor Red
} else {
    Write-Host "Tamanho dentro do limite" -ForegroundColor Green
}

# Listar conteudo do pacote
Write-Host "`nConteudo do pacote:" -ForegroundColor Cyan
$files = Get-ChildItem $buildDir -Recurse -File | ForEach-Object {
    $_.FullName.Substring($buildDir.Length + 1)
}
$files | Sort-Object | ForEach-Object { Write-Host "   $_" -ForegroundColor White }

Write-Host "`nProximo passo: Faca upload de $PackageName.zip para a Chrome Web Store" -ForegroundColor Green
Write-Host "URL: https://chrome.google.com/webstore/devconsole" -ForegroundColor Cyan
