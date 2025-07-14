#!/bin/bash

echo "🚀 EPROBE - PREPARAÇÃO PARA CHROME WEB STORE"
echo "============================================="
echo ""

# Verificar se estamos no diretório correto
if [ ! -f "manifest.json" ]; then
    echo "❌ Erro: Execute este script no diretório raiz do eProbe"
    exit 1
fi

echo "📋 1. Verificando arquivos obrigatórios..."

# Verificar arquivos essenciais
files_required=(
    "manifest.json"
    "PRIVACY_POLICY.md" 
    "src/main.js"
    "src/popup.js"
    "src/popup.html"
    "src/popup.css"
    "src/themeApply.js"
    "assets/icon16.png"
    "assets/icon48.png"
    "assets/icon128.png"
)

for file in "${files_required[@]}"; do
    if [ -f "$file" ]; then
        echo "   ✅ $file"
    else
        echo "   ❌ $file (OBRIGATÓRIO)"
        exit 1
    fi
done

echo ""
echo "🔍 2. Verificando conformidade do manifest.json..."

# Verificar versão do manifest
if grep -q '"manifest_version": 3' manifest.json; then
    echo "   ✅ Manifest V3"
else
    echo "   ❌ Manifest deve ser V3"
    exit 1
fi

# Verificar campos obrigatórios
if grep -q '"name"' manifest.json && grep -q '"version"' manifest.json && grep -q '"description"' manifest.json; then
    echo "   ✅ Campos obrigatórios presentes"
else
    echo "   ❌ Campos obrigatórios ausentes"
    exit 1
fi

echo ""
echo "📝 3. Verificando política de privacidade..."

if [ -f "PRIVACY_POLICY.md" ] && [ -s "PRIVACY_POLICY.md" ]; then
    echo "   ✅ Política de privacidade presente"
else
    echo "   ❌ Política de privacidade necessária"
    exit 1
fi

echo ""
echo "🎨 4. Verificando assets..."

# Verificar ícones
for size in 16 48 128; do
    if [ -f "assets/icon${size}.png" ]; then
        echo "   ✅ Ícone ${size}x${size}"
    else
        echo "   ❌ Ícone ${size}x${size} ausente"
        exit 1
    fi
done

echo ""
echo "📦 5. Criando pacote para Chrome Web Store..."

# Criar diretório temporário para o pacote
temp_dir="eProbe_package_$(date +%Y%m%d_%H%M%S)"
mkdir "$temp_dir"

echo "   📁 Criando estrutura em: $temp_dir"

# Copiar arquivos necessários
cp manifest.json "$temp_dir/"
cp PRIVACY_POLICY.md "$temp_dir/"
cp -r src "$temp_dir/"
cp -r assets "$temp_dir/"

# Remover arquivos desnecessários do pacote
find "$temp_dir" -name "*.md" ! -name "PRIVACY_POLICY.md" -delete
find "$temp_dir" -name "*.txt" -delete
find "$temp_dir" -name ".DS_Store" -delete
find "$temp_dir" -name "Thumbs.db" -delete

echo "   🗂️  Arquivos copiados"

# Criar ZIP para upload
zip_name="eProbe_v$(grep -o '"version": "[^"]*"' manifest.json | cut -d'"' -f4)_chrome_store.zip"

if command -v zip >/dev/null 2>&1; then
    cd "$temp_dir"
    zip -r "../$zip_name" ./* -x "*.DS_Store" "*.git*" "node_modules/*"
    cd ..
    echo "   📦 Pacote criado: $zip_name"
else
    echo "   ⚠️  ZIP não disponível. Compacte manualmente o diretório: $temp_dir"
fi

echo ""
echo "🔍 6. Validação final..."

# Verificar tamanho do pacote
if [ -f "$zip_name" ]; then
    size=$(du -h "$zip_name" | cut -f1)
    echo "   📏 Tamanho do pacote: $size"
    
    # Verificar se não excede 25MB (limite do Chrome Web Store)
    size_bytes=$(stat -c%s "$zip_name" 2>/dev/null || stat -f%z "$zip_name" 2>/dev/null)
    max_size=$((25 * 1024 * 1024))  # 25MB em bytes
    
    if [ "$size_bytes" -lt "$max_size" ]; then
        echo "   ✅ Tamanho dentro do limite (25MB)"
    else
        echo "   ❌ Pacote muito grande (limite: 25MB)"
        exit 1
    fi
fi

echo ""
echo "✅ PREPARAÇÃO CONCLUÍDA COM SUCESSO!"
echo "======================================"
echo ""
echo "📋 PRÓXIMOS PASSOS:"
echo ""
echo "1. 🌐 Acesse: https://chrome.google.com/webstore/devconsole"
echo "2. 🔑 Faça login com sua conta Google de desenvolvedor"
echo "3. ➕ Clique em 'Adicionar novo item'"
echo "4. 📦 Faça upload do arquivo: $zip_name"
echo "5. 📝 Preencha as informações na Chrome Web Store:"
echo ""
echo "   📌 TÍTULO:"
echo "   eProbe - Automação eProc TJSC"
echo ""
echo "   📝 DESCRIÇÃO CURTA:"
echo "   Automação para eProc TJSC: detecta documentos, extrai texto, organiza localizadores e facilita resumos com IA."
echo ""
echo "   🏷️ CATEGORIA:"
echo "   Produtividade"
echo ""
echo "   🌐 WEBSITE:"
echo "   https://e-probe.vercel.app/"
echo ""
echo "   🔒 POLÍTICA DE PRIVACIDADE:"
echo "   [Copie o conteúdo de PRIVACY_POLICY.md]"
echo ""
echo "6. 🖼️ Adicione capturas de tela da extensão em funcionamento"
echo "7. 📊 Configure as informações de privacidade no painel"
echo "8. 🎯 Defina público-alvo como 'Profissionais/Trabalhadores'"
echo "9. ✅ Submeta para revisão"
echo ""
echo "⏱️ TEMPO DE REVISÃO: Normalmente 3-7 dias úteis"
echo ""
echo "📞 SUPORTE:"
echo "   Em caso de dúvidas, consulte a documentação completa em:"
echo "   CHROME_STORE_COMPLIANCE_REPORT.md"
echo ""
echo "🎉 Boa sorte com a publicação!"

# Limpeza opcional
echo ""
read -p "🧹 Deseja remover o diretório temporário? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    rm -rf "$temp_dir"
    echo "   🗑️  Diretório temporário removido"
fi

echo ""
echo "✨ Script finalizado!"
