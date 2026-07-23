# Build et déploiement — domaine officiel acclamonsjesus.com
$ErrorActionPreference = 'Stop'

Set-Location $PSScriptRoot\..

Write-Host "Build pour acclamonsjesus.com (sans basePath)..." -ForegroundColor Cyan
Remove-Item Env:GITHUB_PAGES -ErrorAction SilentlyContinue
Remove-Item Env:NEXT_PUBLIC_BASE_PATH -ErrorAction SilentlyContinue
npm run build

if ($LASTEXITCODE -ne 0) {
  Write-Host "Echec du build." -ForegroundColor Red
  exit 1
}

if (-not (Test-Path "out/CNAME")) {
  Write-Host "Erreur : fichier CNAME absent du build." -ForegroundColor Red
  exit 1
}

$message = if ($args.Count -gt 0) { $args -join ' ' } else { "Deploy acclamonsjesus.com $(Get-Date -Format 'yyyy-MM-dd HH:mm')" }

Write-Host "Publication sur gh-pages..." -ForegroundColor Cyan
npx gh-pages -d out -b gh-pages -f -m $message

if ($LASTEXITCODE -ne 0) {
  Write-Host "Echec du deploiement." -ForegroundColor Red
  exit 1
}

Write-Host ""
Write-Host "Publie avec succes." -ForegroundColor Green
Write-Host "URL officielle : https://acclamonsjesus.com" -ForegroundColor Yellow
Write-Host ""
Write-Host "Verifiez dans GitHub : Settings > Pages > Custom domain = acclamonsjesus.com" -ForegroundColor Gray
Write-Host "DNS Namecheap : voir MISE-EN-LIGNE.md" -ForegroundColor Gray
