@echo off
rem Usage: interactive.bat [index|viola]   (index = Aurum, the default; viola = Viola)
rem Opens the wallpaper full screen in its own Chrome window so you can fly around the black hole:
rem move the mouse = camera drifts, drag = pan / climb, wheel = lens, double click = reset, Esc or Alt+F4 = close.
set "P=%~dp0"
set "P=%P:\=/%"
set "PAGE=%~1"
if "%PAGE%"=="" set "PAGE=index"
start "" chrome --app="file:///%P%%PAGE%.html?hud=1" --start-fullscreen
