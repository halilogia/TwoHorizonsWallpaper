# Two Horizons

Wallpaper Engine web wallpaper made with three.js: a ray-traced Schwarzschild black hole (real light bending, Keplerian accretion disk with Doppler beaming, lensed stars) rising over a quiet farm horizon. Orbiting disk flow, shooting stars, wind rolling through the grass, a turning windmill, drifting embers, sea reflection, slow camera drift.

Quality comes first: the default is full-quality per-pixel geodesic ray tracing. Lower the Quality option if your GPU struggles.

![preview](preview.jpg)

## Install in Wallpaper Engine

1. Wallpaper Engine → **Open Wallpaper Editor → Create Wallpaper**… or simply copy this folder to
   `Steam\steamapps\common\wallpaper_engine\projects\myprojects\TwoHorizons`.
2. In Wallpaper Engine press **Refresh**, pick *Two Horizons* from *My Wallpapers*.

The folder needs `project.json`, `index.html`, `dist/wallpaper.js` and `preview.jpg`. `dist/` is committed so no build is needed.

## Options (Wallpaper Engine properties)

Palette (Amber / Violet / Cycle), Quality (Low / Medium / High), FPS limit, Glow, Animation speed, Mouse parallax, Stars.
Low quality drops the render scale, grass count and bloom.

## Develop

```bash
npm install
npm run build      # src/ -> dist/wallpaper.js (single IIFE, works from file://)
npm run serve      # http://127.0.0.1:8123  (?palette=violet&q=medium&fps=30)
```

`window.__capture()` returns a JPEG of the current frame (used to make `preview.jpg`).

## Layout

- `src/shaders.js` – sky/black hole, grass, ground, embers, grade (GLSL)
- `src/main.js` – scene, post-processing (bloom, tone map, grain), quality/properties, loop

## 3D models

`assets/models/house.glb` (farmhouse with wing, porch, chimney) and `truck.glb` (pickup) were modelled in Blender through [Blender Copilot](https://github.com/halilogia/Blender-Copilot)'s MCP bridge; the scripts are in `tools/blender/`. `npm run build` embeds the `.glb` files into `dist/wallpaper.js` as data URLs, so the wallpaper needs no file access at run time. Materials named `glass` glow (windows, lamps); everything else is drawn as a rim-lit silhouette.
