# Copies the built wallpaper into Wallpaper Engine and reloads it.
# Needed because `wallpaper64.exe -control openWallpaper` does nothing when the same wallpaper is already running,
# so a plain copy leaves the OLD version on the desktop until Wallpaper Engine is restarted.
param(
  [string]$We = 'C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine',
  [string]$Name = 'TwoHorizons'
)
$root = Split-Path -Parent $PSScriptRoot
$dst = Join-Path $We "projects\myprojects\$Name"
New-Item -ItemType Directory -Force (Join-Path $dst 'dist') | Out-Null
foreach ($f in 'project.json', 'index.html', 'preview.jpg') { Copy-Item (Join-Path $root $f) $dst -Force }
Copy-Item (Join-Path $root 'dist\wallpaper.js') (Join-Path $dst 'dist') -Force
Stop-Process -Name wallpaper64, webwallpaper64 -Force -ErrorAction SilentlyContinue
Start-Sleep 2
Start-Process (Join-Path $We 'wallpaper64.exe') -WorkingDirectory $We
Start-Sleep 12
& (Join-Path $We 'wallpaper64.exe') -control openWallpaper -file (Join-Path $dst 'project.json')
Write-Output "deployed to $dst and reloaded"
