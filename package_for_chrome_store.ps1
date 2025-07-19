# Script de Empacotamento eProbe para Chrome Web Store
# PowerShell Script - Windows

Write-Host ">> EMPACOTANDO EPROBE PARA CHROME WEB STORE" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# ⚠️ LEMBRETE: Antes do empacotamento, sempre verificar:
# ✅ Namespace consolidado está correto (src/main.js linhas ~19100)
# ✅ Todas as novas funções foram adicionadas entre os marcadores:
#     // ##### INÍCIO DO NAMESPACE CONSOLIDADO #####
#     // ##### FIM DO NAMESPACE CONSOLIDADO #####
Write-Host "LEMBRETE: Verificar namespace consolidado em src/main.js antes do empacotamento" -ForegroundColor Magenta

# Verificar se estamos na pasta correta
if (-Not (Test-Path "manifest.json")) {
    Write-Host "ERRO: Execute este script na pasta raiz do eProbe (onde esta o manifest.json)" -ForegroundColor Red
    exit 1
}

# Criar pasta temporária para empacotamento
$packageDir = "eProbe_Chrome_Store_Package"
Write-Host "Criando pasta de empacotamento: $packageDir" -ForegroundColor Yellow

if (Test-Path $packageDir) {
    Write-Host "Removendo pasta existente..." -ForegroundColor Yellow
    Remove-Item $packageDir -Recurse -Force
}

New-Item -ItemType Directory -Name $packageDir | Out-Null

# Lista de arquivos/pastas essenciais para Chrome Web Store
$essentialFiles = @(
    "manifest.json",
    "PRIVACY_POLICY.md",
    "src",
    "assets"
)

Write-Host "Copiando arquivos essenciais..." -ForegroundColor Yellow

foreach ($file in $essentialFiles) {
    if (Test-Path $file) {
        Write-Host "  OK Copiando: $file" -ForegroundColor Green
        if (Test-Path $file -PathType Container) {
            # É uma pasta
            Copy-Item $file -Destination $packageDir -Recurse
        } else {
            # É um arquivo
            Copy-Item $file -Destination $packageDir
        }
    } else {
        Write-Host "  AVISO Nao encontrado: $file" -ForegroundColor Yellow
    }
}

# Verificar arquivos no pacote
Write-Host "" 
Write-Host "Verificando conteudo do pacote..." -ForegroundColor Yellow
$packageContent = Get-ChildItem $packageDir -Recurse
$totalFiles = $packageContent.Count
Write-Host "  Total de arquivos: $totalFiles" -ForegroundColor Green

# Criar arquivo ZIP
$zipName = "eProbe_v1.0.1_Chrome_Store.zip"
Write-Host ""
Write-Host "Criando arquivo ZIP: $zipName" -ForegroundColor Yellow

if (Test-Path $zipName) {
    Write-Host "Removendo ZIP existente..." -ForegroundColor Yellow
    Remove-Item $zipName -Force
}

# Usar Compress-Archive para criar ZIP
try {
    Compress-Archive -Path "$packageDir\*" -DestinationPath $zipName -CompressionLevel Optimal
    Write-Host "OK ZIP criado com sucesso!" -ForegroundColor Green
} catch {
    Write-Host "ERRO ao criar ZIP: $_" -ForegroundColor Red
    exit 1
}

# Verificar tamanho do ZIP
$zipSize = (Get-Item $zipName).Length / 1MB
Write-Host "  Tamanho do ZIP: $([math]::Round($zipSize, 2)) MB" -ForegroundColor Green

# Limpar pasta temporária
Write-Host ""
Write-Host "Limpando arquivos temporarios..." -ForegroundColor Yellow
Remove-Item $packageDir -Recurse -Force

# Mostrar resumo final
Write-Host ""
Write-Host ">> EMPACOTAMENTO CONCLUIDO!" -ForegroundColor Green
Write-Host "=========================" -ForegroundColor Green
Write-Host ""
Write-Host "Arquivo criado: $zipName" -ForegroundColor Cyan
Write-Host "Tamanho: $([math]::Round($zipSize, 2)) MB" -ForegroundColor Cyan
Write-Host "Arquivos incluidos: $totalFiles" -ForegroundColor Cyan
Write-Host ""
Write-Host ">> PROXIMOS PASSOS:" -ForegroundColor Yellow
Write-Host "1. Acesse: https://chrome.google.com/webstore/devconsole" -ForegroundColor White
Write-Host "2. Faca upload do arquivo: $zipName" -ForegroundColor White
Write-Host "3. Preencha as informacoes da extensao" -ForegroundColor White
Write-Host "4. Submeta para revisao" -ForegroundColor White
Write-Host ""
Write-Host "Para informacoes detalhadas, consulte:" -ForegroundColor Yellow
Write-Host "   - GUIA_PUBLICACAO_CHROME_STORE.md" -ForegroundColor White
Write-Host "   - CHECKLIST_FINAL_CHROME_STORE.md" -ForegroundColor White
Write-Host ""
Write-Host ">> eProbe esta PRONTO para a Chrome Web Store!" -ForegroundColor Green
