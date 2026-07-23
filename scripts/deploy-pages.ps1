# Build et déploiement GitHub Pages — Acclamons Jésus 2026
$ErrorActionPreference = 'Stop'

Set-Location $PSScriptRoot\..

Write-Host "Build Next.js pour GitHub Pages..." -ForegroundColor Cyan
$env:GITHUB_PAGES = 'true'
$env:NEXT_PUBLIC_BASE_PATH = '/Acclamons-J-sus'
npm run build

if ($LASTEXITCODE -ne 0) {
  Write-Host "Echec du build." -ForegroundColor Red
  exit 1
}

$message = if ($args.Count -gt 0) { $args -join ' ' } else { "Deploy Acclamons Jésus $(Get-Date -Format 'yyyy-MM-dd HH:mm')" }

Write-Host "Publication sur la branche gh-pages..." -ForegroundColor Cyan
npx gh-pages -d out -b gh-pages -f -m $message

if ($LASTEXITCODE -ne 0) {
  Write-Host "Echec du deploiement." -ForegroundColor Red
  exit 1
}

Write-Host ""
Write-Host "Publie avec succes." -ForegroundColor Green
Write-Host "URL : https://trh10.github.io/Acclamons-J-sus/" -ForegroundColor Yellow
Write-Host "Attendre 1-3 min la propagation GitHub Pages avant verification." -ForegroundColor Gray
