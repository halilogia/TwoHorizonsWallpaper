@echo off
rem Opens the wallpaper full screen in its own Chrome window so you can fly around the black hole:
rem drag = orbit / tilt, mouse wheel = lens, double click = reset, Esc or Alt+F4 = close.
set "P=%~dp0"
set "P=%P:\=/%"
start "" chrome --app="file:///%P%index.html?hud=1" --start-fullscreen
