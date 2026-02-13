# Etapa 1: Remocao de codigo morto do main.js
# Este script remove blocos de codigo morto/desabilitado com precisao cirurgica.
# Cada bloco eh identificado pela linha que o ANTECEDE e pela linha que o SEGUE.

$file = "c:\Apps\eProbe\src\main.js"
$lines = Get-Content $file
$totalOriginal = $lines.Count
Write-Host "Original: $totalOriginal linhas"

# Construir lista de ranges a remover (0-indexed, inclusive)
# Cada range: @{Start=...; End=...; Name=...}
$rangesToRemove = @()

# --- BLOCO 1: interceptacaoUltraPrecoce IIFE (L472-1401) ---
# Antes: L471 = blank line apos DISABLE_STAR_REPLACEMENTS
# Depois: L1402 = blank line antes de personalizarEstrelasEventos
$start1 = -1; $end1 = -1
for ($i = 470; $i -lt 480; $i++) {
    if ($lines[$i] -match 'function interceptacaoUltraPrecoce') { $start1 = $i; break }
}
for ($i = 1405; $i -gt 1390; $i--) {
    if ($lines[$i].Trim() -eq '})();') { $end1 = $i; break }
}
if ($start1 -gt 0 -and $end1 -gt 0) {
    # Incluir o comentario "// 🚨 INTERCEPTAÇÃO ULTRA-PRECOCE" que esta 1 linha antes
    $rangesToRemove += @{Start=($start1-1); End=$end1; Name="interceptacaoUltraPrecoce"}
}

# --- BLOCO 2: Localizadores desabilitados (3 blocos /* */ consecutivos) ---
# Antes: funcao limparSeparadoresExistentes() fecha com return false; } }
# Depois: "// Sistema robusto de criação de botão"
$start2 = -1; $end2 = -1
for ($i = 8510; $i -lt 8530; $i++) {
    if ($lines[$i] -match 'DESABILITADO.*interface de separadores') { $start2 = $i; break }
}
for ($i = 8850; $i -gt 8830; $i--) {
    if ($lines[$i].Trim() -eq '*/' -and $lines[$i+1].Trim() -eq '') { $end2 = $i + 1; break }
}
if ($start2 -gt 0 -and $end2 -gt 0) {
    $rangesToRemove += @{Start=$start2; End=$end2; Name="localizadores desabilitados"}
}

# --- BLOCO 3: PDF duplicado comentado ---
# Antes: "// ======== ... SEÇÃO COMENTADA: FUNÇÕES DUPLICADAS DE PDF"
# Depois: Algum codigo ativo
$start3 = -1; $end3 = -1
for ($i = 20410; $i -lt 20430; $i++) {
    if ($lines[$i] -match 'SEÇÃO COMENTADA.*FUNÇÕES DUPLICADAS') { 
        # Incluir os comentarios acima tambem (========)
        $start3 = $i - 1  # a linha ========
        break 
    }
}
# Encontrar o */ que fecha este bloco
for ($i = $start3 + 5; $i -lt $start3 + 100; $i++) {
    if ($lines[$i].Trim() -eq '*/') { $end3 = $i; break }
}
if ($start3 -gt 0 -and $end3 -gt 0) {
    $rangesToRemove += @{Start=$start3; End=$end3; Name="PDF duplicado"}
}

# --- BLOCO 4: Estrelas desabilitadas ---
$start4 = -1; $end4 = -1
for ($i = 29260; $i -lt 29290; $i++) {
    if ($lines[$i] -match 'DESABILITADO.*cones de estrela para preservar') { $start4 = $i; break }
}
for ($i = $start4 + 5; $i -lt $start4 + 40; $i++) {
    if ($lines[$i] -match 'FIM DAS SUBSTITUIÇÕES DE ESTRELA') { $end4 = $i; break }
}
if ($start4 -gt 0 -and $end4 -gt 0) {
    $rangesToRemove += @{Start=$start4; End=$end4; Name="estrelas desabilitadas"}
}

# --- BLOCO 5: criarNamespaceGlobal IIFE ---
$start5 = -1; $end5 = -1
for ($i = 38715; $i -lt 38730; $i++) {
    if ($lines[$i] -match 'CRIAÇÃO GLOBAL DO NAMESPACE') { $start5 = $i; break }
}
for ($i = $start5 + 20; $i -lt $start5 + 80; $i++) {
    if ($lines[$i].Trim() -eq '})();') { $end5 = $i; break }
}
if ($start5 -gt 0 -and $end5 -gt 0) {
    $rangesToRemove += @{Start=$start5; End=$end5; Name="criarNamespaceGlobal"}
}

# --- BLOCO 6: interceptacaoFinalBrutal IIFE ---
$start6 = -1; $end6 = -1
for ($i = $end5 + 1; $i -lt $end5 + 10; $i++) {
    if ($lines[$i] -match 'INTERCEPTAÇÃO FINAL BRUTAL') { $start6 = $i; break }
}
for ($i = $start6 + 50; $i -lt $start6 + 150; $i++) {
    if ($lines[$i].Trim() -eq '})();') { $end6 = $i; break }
}
if ($start6 -gt 0 -and $end6 -gt 0) {
    $rangesToRemove += @{Start=$start6; End=$end6; Name="interceptacaoFinalBrutal"}
}

# --- BLOCO 7: interceptacaoDefinitiva IIFE ---
$start7 = -1; $end7 = -1
for ($i = $end6 + 1; $i -lt $end6 + 10; $i++) {
    if ($lines[$i] -match 'INTERCEPTAÇÃO DEFINITIVA') { $start7 = $i; break }
}
for ($i = $start7 + 50; $i -lt $start7 + 120; $i++) {
    if ($lines[$i].Trim() -eq '})();') { $end7 = $i; break }
}
if ($start7 -gt 0 -and $end7 -gt 0) {
    $rangesToRemove += @{Start=$start7; End=$end7; Name="interceptacaoDefinitiva"}
}

# --- BLOCO 8: criarSistemaGradientesCompleto IIFE ---
$start8 = -1; $end8 = -1
for ($i = $end7 + 1; $i -lt $end7 + 10; $i++) {
    if ($lines[$i] -match 'SISTEMA FUNCIONAL DE GRADIENTES') { $start8 = $i; break }
}
for ($i = $start8 + 200; $i -lt $start8 + 400; $i++) {
    if ($lines[$i].Trim() -eq '})();') { $end8 = $i; break }
}
if ($start8 -gt 0 -and $end8 -gt 0) {
    $rangesToRemove += @{Start=$start8; End=$end8; Name="criarSistemaGradientesCompleto"}
}

# --- BLOCO 9: aplicarGradientesLegMinutasGlobal + console.log final ---
$start9 = -1; $end9 = $lines.Count - 1
for ($i = $end8 + 1; $i -lt $end8 + 10; $i++) {
    if ($lines[$i] -match 'FUNÇÃO GLOBAL INDEPENDENTE') { $start9 = $i; break }
}
if ($start9 -gt 0) {
    $rangesToRemove += @{Start=$start9; End=$end9; Name="aplicarGradientesGlobal"}
}

# Exibir resumo
Write-Host "`n--- BLOCOS A REMOVER ---"
$totalRemover = 0
foreach ($r in $rangesToRemove) {
    $count = $r.End - $r.Start + 1
    $totalRemover += $count
    Write-Host "  $($r.Name): L$($r.Start+1)-L$($r.End+1) ($count linhas)"
    Write-Host "    Antes: $($lines[$r.Start].Trim().Substring(0, [Math]::Min(70, $lines[$r.Start].Trim().Length)))"
    Write-Host "    Fim:   $($lines[$r.End].Trim().Substring(0, [Math]::Min(70, $lines[$r.End].Trim().Length)))"
}
Write-Host "`nTotal a remover: $totalRemover linhas"

# Criar set de indices a remover
$removeSet = New-Object System.Collections.Generic.HashSet[int]
foreach ($r in $rangesToRemove) {
    for ($i = $r.Start; $i -le $r.End; $i++) {
        [void]$removeSet.Add($i)
    }
}

# Construir resultado
$result = [System.Collections.Generic.List[string]]::new()
for ($i = 0; $i -lt $lines.Count; $i++) {
    if (-not $removeSet.Contains($i)) {
        $result.Add($lines[$i])
    } elseif ($i -eq $rangesToRemove[0].Start) {
        # Comentario substituto para interceptacao
        $result.Add("// Interceptacao de switchRelevancia: desabilitada (funcionalidade eProc preservada).")
        $result.Add("")
    }
}

Write-Host "`nResultado: $($result.Count) linhas (removidas: $($lines.Count - $result.Count))"

# Salvar
$result.ToArray() | Set-Content $file -Encoding UTF8
Write-Host "Arquivo salvo!"

# Validar sintaxe
$checkResult = node --check $file 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "`n*** SINTAXE OK ***" -ForegroundColor Green
} else {
    Write-Host "`n*** ERRO DE SINTAXE ***" -ForegroundColor Red
    Write-Host $checkResult
}
