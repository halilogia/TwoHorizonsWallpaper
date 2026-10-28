# Copies the built wallpapers into Wallpaper Engine and reloads one of them.
# Two independent projects are installed from the same sources: Aurum (index.html) and Viola (viola.html).
# project.json describes Aurum; the Viola project.json is derived from it (title, entry page, description, preview) so the settings stay in one place.
# Needed because `wallpaper64.exe -control openWallpaper` does nothing when the same wallpaper is already running,
# so a plain copy leaves the OLD version on the desktop until Wallpaper Engine is restarted.
param(
  [string]$We = 'C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine',
  [ValidateSet('aurum', 'viola')][string]$Open = 'aurum'   # which one to put on the desktop after the reload
)
$root = Split-Path -Parent $PSScriptRoot
$pages = @(
  @{ Id = 'aurum'; Folder = 'TwoHorizonsAurum'; Html = 'index.html'; Js = 'aurum-page.js'; Title = 'Two Horizons - Aurum' },
  @{ Id = 'viola'; Folder = 'TwoHorizonsViola'; Html = 'viola.html'; Js = 'viola-page.js'; Title = 'Two Horizons - Viola' }
)
$base = Get-Content (Join-Path $root 'project.json') -Raw | ConvertFrom-Json
foreach ($p in $pages) {
  $dst = Join-Path $We "projects\myprojects\$($p.Folder)"
  New-Item -ItemType Directory -Force (Join-Path $dst 'dist') | Out-Null
  Copy-Item (Join-Path $root $p.Html) $dst -Force
  Copy-Item (Join-Path $root "dist\$($p.Js)") (Join-Path $dst 'dist') -Force
  $previewSrc = Join-Path $root "preview-$($p.Id).jpg"
  if (-not (Test-Path $previewSrc)) { $previewSrc = Join-Path $root 'preview.jpg' }
  Copy-Item $previewSrc (Join-Path $dst 'preview.jpg') -Force
  $proj = $base | ConvertTo-Json -Depth 20 | ConvertFrom-Json
  $proj.file = $p.Html
  $proj.title = $p.Title
  if ($p.Id -eq 'viola') { $proj.description = 'Viola: a violet flower field beneath the arc of a black hole accretion disk, with an astronaut. Three.js, animated. (Amber twin: Two Horizons - Aurum)' }
  [IO.File]::WriteAllText((Join-Path $dst 'project.json'), ($proj | ConvertTo-Json -Depth 20), (New-Object Text.UTF8Encoding $false))   # no BOM
}
Stop-Process -Name wallpaper64, webwallpaper64 -Force -ErrorAction SilentlyContinue
Start-Sleep 2
Start-Process (Join-Path $We 'wallpaper64.exe') -WorkingDirectory $We
Start-Sleep 12
$chosen = $pages | Where-Object { $_.Id -eq $Open }
& (Join-Path $We 'wallpaper64.exe') -control openWallpaper -file (Join-Path $We "projects\myprojects\$($chosen.Folder)\project.json")
Write-Output "deployed Aurum + Viola to $We\projects\myprojects, opened $($chosen.Folder)"
