# Two Horizons

Wallpaper Engine web wallpaper made with three.js: a ray-traced Schwarzschild black hole (real light bending, Keplerian accretion disk with Doppler beaming, lensed stars) over two different worlds. Each world is its own page and its own Wallpaper Engine project, so you open exactly the one you want:

- **Aurum** (`index.html`) – amber hole and disk, wheat blowing in the wind, a farmhouse with lit windows (and a dog on the porch), a pickup, sea-like mirror horizon, shooting stars and embers.
- **Viola** (`viola.html`) – a thin pale disk and its lensing arc, a lavender field to the horizon with golden fireflies, an astronaut with their back to the camera, out-of-focus petals at the lens, a bright haze on the far ground.

Each page is one 3D world: the black hole is a fixed object in the sky and the mouse only moves the camera, so grass, house, astronaut and hole slide against each other with correct depth.

Quality comes first: the default is full-quality per-pixel geodesic ray tracing. Lower the Quality option if your GPU struggles.

![preview](preview.jpg)

## Install in Wallpaper Engine

Run `powershell -File tools/deploy-we.ps1` (below): it installs two wallpapers, *Two Horizons - Aurum* and *Two Horizons - Viola*, and press **Refresh** in Wallpaper Engine if they are not listed yet. Or copy by hand into `Steam\steamapps\common\wallpaper_engine\projects\myprojects\<name>`: `project.json`, the page (`index.html` or `viola.html`), `dist/<page>-page.js` and `preview.jpg`. `dist/` is committed so no build is needed. The repository's `project.json` is the Aurum project; the deploy script derives the Viola one from it.

Both pages also open in any browser (`file://` works): `index.html` and `viola.html`, or `interactive.bat` / `interactive.bat viola` for a full-screen Chrome window.

## Updating the installed copy

`powershell -File tools/deploy-we.ps1 [-Open aurum|viola]` copies both builds into Wallpaper Engine, **restarts it** and puts the chosen one on the desktop. A plain copy is not enough: Wallpaper Engine ignores `openWallpaper` for a wallpaper that is already running, so the desktop keeps showing the old version.

## Options (Wallpaper Engine properties)

Quality (Low / Medium / High), FPS limit, Glow, Animation speed, Mouse parallax, Stars, Light rays, HUD, Mouse control (Follow cursor / Drag / Off).

Controls:
- **Follow cursor** (default): the camera pans, drifts and rises a little with the pointer, no click needed. Wallpaper Engine passes mouse *movement* to a desktop wallpaper but usually swallows the *clicks* (Explorer's desktop icons take them), so the default does not depend on them.
- **Drag** (when the host delivers button events, e.g. `interactive.bat` in a window): drag sideways = pan, drag up = climb (ALT 1.1 m → 16 m, in Viola the camera also pulls back so the astronaut stays in view), double click = reset. Works in Follow mode too.
- **Lens**: mouse wheel, or the ruler on the right edge (23 – 107 mm). The wheel works on the desktop as well.
- Arrow up / down also climb. With the HUD on, nothing else is shown except title, telemetry (ALT, HORIZON, time, FPS, render scale), ruler.

Low quality drops the render scale, grass / flower counts and bloom.

## Develop

```bash
npm install
npm run build      # src/ -> dist/aurum-page.js + dist/viola-page.js (one IIFE each, work from file://)
npm run serve      # http://127.0.0.1:8123  (index.html?q=medium&fps=30, viola.html)
```

`window.__capture()` returns a JPEG of the current frame (used to make `preview.jpg`).

## Layout

- `src/shaders.js` – sky/black hole (world-space rays), wheat, ground, flowers, fireflies, embers, grade (GLSL)
- `src/app.js` – shared engine: camera rig, post-processing (bloom, tone map, grain), quality/properties, loop; `startApp(worlds)` runs the worlds it is given (it can fade between several; each page passes one)
- `src/aurum.js` / `src/viola.js` – the two worlds (config + `create(U)`), Aurum: wheat, house, truck, dog, embers, smoke; Viola: flowers, field carpet, fireflies, astronaut, petals
- `src/aurum-page.js` / `src/viola-page.js` – the two entry points (3 lines each), bundled separately so Viola does not carry the `.glb` models
- `src/hud.js` – title, telemetry, lens ruler (scene menu only when a page has 2+ worlds)
- `tools/shot.sh` – headless Chrome screenshot (`tools/shot.sh out.png "t=30&alt=8" viola`); `freeze=1` stops after a few frames. URL parameters: `q`, `t`, `alt`, `yaw`, `lens`, `cx`/`cy` (simulated cursor), `hud=0`

## 3D models

`assets/models/house.glb` (farmhouse with wing, porch, chimney) and `truck.glb` (pickup) were modelled in Blender through [Blender Copilot](https://github.com/halilogia/Blender-Copilot)'s MCP bridge; the scripts are in `tools/blender/`. `npm run build` embeds the `.glb` files into `dist/aurum-page.js` as data URLs, so the wallpaper needs no file access at run time. Materials named `glass` glow (windows, lamps); everything else is drawn as a rim-lit silhouette. The dog and the astronaut are built in code from primitives. (`build_models.py` can still build a windmill; it was removed from the scene because the reference does not have one.)
