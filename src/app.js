import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
import { skyVert, skyFrag, gradeShader } from './shaders.js';
import { createHud } from './hud.js';

// Shared engine for the wallpaper pages. A page (src/aurum.js, src/viola.js) hands over the worlds it wants and this runs them behind one camera.
// The black hole is a fixed direction in the sky (a celestial object), so the mouse only ever moves the camera and the whole world follows:
// near things slide over far ones, the hole barely moves. With two worlds there is a fade between them, a scene menu and an optional auto-cycle.
// worlds: [{ config, create(U) }]  (config = AURUM / VIOLA, create = createAurum / createViola)
export function startApp(worlds) {
  const SCENES = {}, WORLDS = {};
  const SCENE_LIST = worlds.map((w) => w.config.id);
  for (const w of worlds) { SCENES[w.config.id] = w.config; }
  const FIRST = SCENE_LIST[0];
  const ALT_MAX = 16, ALT_MIN = 0.7, MM_MIN = 23, MM_MAX = 107;   // per-scene altMin / altMax override the climb limits
  // A scene with a `rig` (keyframes [alt m, lens mm, horizon height on screen], ascending alt) ties lens and height together: climbing widens the lens,
  // dropping down zooms in, and the wheel / lens ruler move along the same curve. Interpolated linearly in log(alt).
  function rigAt(rig, alt) {
    const a = Math.log(alt);
    let i = 1;
    while (i < rig.length - 1 && a > Math.log(rig[i][0])) i++;
    const [a0, m0, h0] = rig[i - 1], [a1, m1, h1] = rig[i];
    const k = Math.min(1, Math.max(0, (a - Math.log(a0)) / (Math.log(a1) - Math.log(a0))));
    return { mm: m0 + (m1 - m0) * k, hs: h0 + (h1 - h0) * k };
  }
  function altForMm(rig, mm) {   // inverse of rigAt (lens falls as alt rises)
    let i = 1;
    while (i < rig.length - 1 && mm < rig[i][1]) i++;
    const [a0, m0] = rig[i - 1], [a1, m1] = rig[i];
    const k = Math.min(1, Math.max(0, (mm - m0) / (m1 - m0)));
    return Math.exp(Math.log(a0) + (Math.log(a1) - Math.log(a0)) * k);
  }
  const QUALITY = {
    low:    { pixelRatio: 0.6,  grass: 14000,  flowers: 18000,  embers: 60,  fireflies: 120, bloom: false, steps: 90 },
    medium: { pixelRatio: 0.85, grass: 45000,  flowers: 55000,  embers: 140, fireflies: 300, bloom: true,  steps: 160 },
    high:   { pixelRatio: 1.0,  grass: 120000, flowers: 110000, embers: 300, fireflies: 600, bloom: true,  steps: 240 }
  };

  const query = new URLSearchParams(location.search);
  const settings = {
    scene: query.get('scene') || (query.get('palette') === 'violet' ? 'viola' : query.get('palette') === 'cycle' ? 'cycle' : FIRST),
    quality: query.get('q') || 'high',
    fps: Number(query.get('fps')) || 60,
    bloom: 1.0,
    speed: 1.0,
    parallax: true,
    mode: query.get('mode') || 'follow',   // follow: the camera drifts with the cursor, no click needed (desktop). drag: hold the button. off.
    stars: 1.0
  };
  const freeze = query.get('freeze') === '1';   // debug: settle, render a few frames and stop (for screenshots)

  const U = {
    uTime: { value: 0 },
    uRes: { value: new THREE.Vector2(1, 1) },
    uHot: { value: new THREE.Color() },
    uMid: { value: new THREE.Color() },
    uCool: { value: new THREE.Color() },
    uStars: { value: 1 },
    uTanh: { value: 0.245 },
    uCamRot: { value: new THREE.Matrix3() },
    uHoleDir: { value: new THREE.Vector3(0, 0, -1) },
    uCamD: { value: 17.8 },
    uInc: { value: 0.115 },
    uROut: { value: 13 },
    uDopp: { value: 1 },
    uGain: { value: 1 },
    uSky: { value: 0 },
    uSkyTop: { value: new THREE.Color() },
    uSkyLow: { value: new THREE.Color() },
    uBandCol: { value: new THREE.Color() },
    uFogD: { value: 20 },
    uWind: { value: 1 }
  };

  const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 1500);
  camera.rotation.order = 'YXZ';

  // ---- sky -------------------------------------------------------------
  const sky = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    new THREE.ShaderMaterial({ vertexShader: skyVert, fragmentShader: skyFrag, uniforms: U, depthTest: false, depthWrite: false, defines: { STEPS: 240 } })
  );
  sky.frustumCulled = false;
  sky.renderOrder = -10;
  scene.add(sky);
  // ---- worlds ------------------------------------------------------------
  for (const w of worlds) {
    WORLDS[w.config.id] = w.create(U);
    WORLDS[w.config.id].group.visible = false;
    scene.add(WORLDS[w.config.id].group);
  }
  const world = () => WORLDS[current];

  // ---- post ------------------------------------------------------------
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.7, 0.4, 0.9);
  composer.addPass(bloomPass);
  composer.addPass(new OutputPass());
  const fxaa = new ShaderPass(FXAAShader);
  composer.addPass(fxaa);
  const grade = new ShaderPass(gradeShader);
  composer.addPass(grade);

  // ---- scene switching: fade to black, swap the world, fade back -----------
  let current = FIRST;
  let pending = null;
  let fade = 0;
  let cycleMode = false, cycleAt = 0;
  const view = { yaw: 0, alt: SCENES[FIRST].alt, tanh: 12 / SCENES[FIRST].mm, fx: 0, fy: 0 };
  const target = { yaw: 0, alt: view.alt, tanh: view.tanh };
  const cursor = { x: 0, y: 0 };   // -1..1, y up

  function applyScene(id) {
    const s = SCENES[id];
    current = id;
    U.uHot.value.setRGB(...s.hot); U.uMid.value.setRGB(...s.mid); U.uCool.value.setRGB(...s.cool);
    U.uSkyTop.value.setRGB(...s.skyTop); U.uSkyLow.value.setRGB(...s.skyLow); U.uBandCol.value.setRGB(...s.band);
    U.uCamD.value = s.camD; U.uInc.value = s.inc; U.uROut.value = s.rOut; U.uDopp.value = s.dopp; U.uGain.value = s.gain; U.uSky.value = s.sky;
    for (const k in WORLDS) WORLDS[k].group.visible = k === id;
    grade.uniforms.uHaze.value = s.sky;
    renderer.toneMappingExposure = s.exposure;
    setBloom();
    resetView();
  }
  const altMin = () => SCENES[current].altMin ?? ALT_MIN, altMax = () => SCENES[current].altMax ?? ALT_MAX;
  // the pan stays near the hole (it is a fixed direction in the sky); at long lenses the field of view is narrow, so the limit shrinks with it
  const yawLimit = () => (SCENES[current].yawMax ?? 1.2) * (SCENES[current].yawMax ? clamp(target.tanh / 0.31, 0.4, 1) : 1);
  function setLens(mm) {
    const s = SCENES[current];
    if (s.rig) target.alt = altForMm(s.rig, clamp(mm, s.rig[s.rig.length - 1][1], s.rig[0][1]));
    else target.tanh = 12 / mm;
  }
  function resetView() {
    const s = SCENES[current];
    target.yaw = 0; target.alt = s.alt; target.tanh = 12 / s.mm;
  }
  function requestScene(id) {
    if (id === 'cycle') {
      if (SCENE_LIST.length < 2) return; cycleMode = true; cycleAt = U.uTime.value + 45; return; }
    cycleMode = false;
    if (!SCENES[id] || (id === current && !pending)) return;
    pending = id;
  }
  function setBloom() {
    const s = SCENES[current];
    bloomPass.strength = s.bloom * settings.bloom;
    bloomPass.radius = s.bloomRadius;
    bloomPass.enabled = (QUALITY[settings.quality] || QUALITY.high).bloom && settings.bloom > 0.01;
  }

  // ---- HUD ---------------------------------------------------------------
  const hud = createHud({
    scenes: SCENE_LIST.map((id) => ({ id, name: SCENES[id].name, tagline: SCENES[id].tagline })),
    onScene: requestScene,
    onLens: (mm) => setLens(mm)
  });
  let fpsShown = 0, fpsCount = 0, fpsStamp = performance.now();
  hud.show(query.get('hud') !== '0');

  // ---- settings application -------------------------------------------
  function applyQuality() {
    const q = QUALITY[settings.quality] || QUALITY.high;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2) * q.pixelRatio);
    for (const k in WORLDS) WORLDS[k].build(q);
    if (sky.material.defines.STEPS !== q.steps) { sky.material.defines.STEPS = q.steps; sky.material.needsUpdate = true; }
    setBloom();
    resize();
  }
  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false);
    renderer.domElement.style.width = '100vw';
    renderer.domElement.style.height = '100vh';
    composer.setPixelRatio(renderer.getPixelRatio());
    composer.setSize(w, h);
    const pr = renderer.getPixelRatio();
    U.uRes.value.set(w * pr, h * pr);
    fxaa.material.uniforms.resolution.value.set(1 / (w * pr), 1 / (h * pr));
    grade.uniforms.uTexel.value = [1 / (w * pr), 1 / (h * pr)];
    for (const k in WORLDS) WORLDS[k].setPx(h * pr / 1080);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);

  // ---- camera controls -------------------------------------------------
  // follow (default): the camera drifts with the cursor, no click needed, because Wallpaper Engine passes mouse movement to a desktop wallpaper
  // but usually swallows the clicks. drag: hold the button. In follow and drag mode a held button also flies the camera, if the host delivers it:
  // drag sideways = pan, drag up = climb (ALT up to 16 m), wheel = lens, double click = reset, 1 / 2 = scenes, arrow up / down = climb.
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const evCount = { down: 0, move: 0, wheel: 0 };
  const drag = { on: false, x: 0, y: 0 };
  function onDown(x, y) { evCount.down++; if (settings.mode !== 'off') { drag.on = true; drag.x = x; drag.y = y; } }
  function onUp() { drag.on = false; }
  function onMove(x, y) {
    evCount.move++;
    cursor.x = (x / window.innerWidth) * 2 - 1;
    cursor.y = -((y / window.innerHeight) * 2 - 1);
    if (drag.on && settings.mode !== 'off') {
      target.yaw = clamp(target.yaw + (x - drag.x) * 0.0035 * clamp(view.tanh / 0.245, 0.3, 1.4), -yawLimit(), yawLimit());   // finer pan at long lenses
      target.alt = clamp(target.alt * Math.exp(-(y - drag.y) * 0.007), altMin(), altMax());
      drag.x = x; drag.y = y;
    }
  }
  function onWheel(dy) {
    evCount.wheel++;
    if (settings.mode !== 'off') setLens(clamp(12 / target.tanh * Math.exp(-dy * 0.0008), MM_MIN, MM_MAX));
  }
  for (const t of ['pointerdown', 'mousedown']) window.addEventListener(t, (e) => onDown(e.clientX, e.clientY));
  for (const t of ['pointerup', 'mouseup', 'mouseleave', 'blur']) window.addEventListener(t, onUp);
  for (const t of ['pointermove', 'mousemove']) window.addEventListener(t, (e) => onMove(e.clientX, e.clientY));
  window.addEventListener('wheel', (e) => onWheel(e.deltaY), { passive: true });
  window.addEventListener('dblclick', resetView);
  window.addEventListener('keydown', (e) => {
    if (e.key === '1' || e.key === '2') { if (SCENE_LIST[Number(e.key) - 1]) requestScene(SCENE_LIST[Number(e.key) - 1]); }
    else if (e.key === 'ArrowUp') target.alt = clamp(target.alt * 1.15, altMin(), altMax());
    else if (e.key === 'ArrowDown') target.alt = clamp(target.alt / 1.15, altMin(), altMax());
  });

  // Wallpaper Engine property bridge
  window.wallpaperPropertyListener = {
    applyUserProperties(p) {
      let rebuild = false;
      if (p.scene) requestScene(p.scene.value);
      if (p.quality && p.quality.value !== settings.quality) { settings.quality = p.quality.value; rebuild = true; }
      if (p.fps) settings.fps = p.fps.value;
      if (p.bloom) { settings.bloom = p.bloom.value; setBloom(); }
      if (p.speed) settings.speed = p.speed.value;
      if (p.parallax) settings.parallax = !!p.parallax.value;
      if (p.stars) { settings.stars = p.stars.value; U.uStars.value = settings.stars; }
      if (p.hud) hud.show(!!p.hud.value);
      if (p.mousemode) settings.mode = p.mousemode.value;
      if (p.rays) grade.uniforms.uRays.value = p.rays.value;
      if (rebuild) applyQuality();
    }
  };

  const camPos = new THREE.Vector3(), holeDir = new THREE.Vector3(), hv = new THREE.Vector3();
  let lastT = 0;
  function update(t) {
    const dt = clamp(t - lastT, 0, 0.1);
    lastT = t;
    sim = t;
    U.uTime.value = t;
    grade.uniforms.uTime.value = t;

    // scene switching and the optional auto-cycle
    if (cycleMode && !pending && t > cycleAt) { cycleAt = t + 45; pending = SCENE_LIST[(SCENE_LIST.indexOf(current) + 1) % SCENE_LIST.length]; }
    if (pending) {
      fade = Math.min(1, fade + dt / 0.55);
      if (fade >= 1) { applyScene(pending); pending = null; }
    } else if (fade > 0) fade = Math.max(0, fade - dt / 0.8);
    grade.uniforms.uFade.value = fade * fade * (3 - 2 * fade);

    const s = SCENES[current];
    const follow = settings.mode === 'follow' && settings.parallax && !drag.on;
    const ease = freeze ? 1 : 1 - Math.exp(-dt * 6.5);
    target.yaw = clamp(target.yaw, -yawLimit(), yawLimit());
    if (s.rig) target.tanh = 12 / rigAt(s.rig, target.alt).mm;
    const goal = { yaw: target.yaw, alt: target.alt, tanh: target.tanh, fx: follow ? cursor.x : 0, fy: follow ? cursor.y : 0 };
    for (const k in goal) view[k] += (goal[k] - view[k]) * ease;

    // unified camera: pan with the cursor, drift slowly, climb with drag / arrow keys, a hint of lateral travel so near things slide over far ones
    const alt = clamp(view.alt * Math.exp(view.fy * 0.4), altMin(), altMax());
    const f = clamp(Math.log(alt / s.alt) / Math.log(altMax() / s.alt), 0, 1);
    const hs = (s.rig ? rigAt(s.rig, view.alt).hs : s.hs0 + (s.hs1 - s.hs0) * f * f * (3 - 2 * f)) - view.fy * 0.05;   // where the horizon sits on screen: looks down as the camera climbs
    const yaw = view.yaw + view.fx * 0.09 + Math.sin(t * 0.05) * 0.02;
    camera.position.set(view.yaw * 3.5 + view.fx * 0.7 + Math.sin(t * 0.12) * 0.7, alt, Math.sin(t * 0.06) * 0.8 + Math.max(alt - s.alt, 0) * s.dolly);   // Viola: climbing also pulls back, so the astronaut stays in frame
    camera.rotation.set(Math.atan(-hs * view.tanh), -yaw, 0);
    camera.fov = 2 * Math.atan(view.tanh) * 180 / Math.PI;
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld(true);
    U.uTanh.value = view.tanh;
    U.uCamRot.value.setFromMatrix4(camera.matrixWorld);
    U.uFogD.value = 12 + 11 * alt;

    // the hole is a fixed direction in the sky (with a very slow breathing drift)
    const az = s.holeAz + Math.sin(t * 0.11) * 0.006, el = s.holeEl + Math.sin(t * 0.07) * 0.002;
    holeDir.set(Math.sin(az) * Math.cos(el), Math.sin(el), -Math.cos(az) * Math.cos(el));
    U.uHoleDir.value.copy(holeDir);
    camPos.copy(camera.position);
    hv.copy(holeDir).multiplyScalar(1000).add(camPos).project(camera);
    const inFront = holeDir.dot(new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion)) > 0;
    grade.uniforms.uHoleUV.value = inFront ? [(hv.x + 1) / 2, (hv.y + 1) / 2] : [-5, -5];

    world().update(t, camera);

    hud.update({ scene: current, mm: 12 / view.tanh, alt: camera.position.y, dist: s.camD, t, fps: fpsShown, scale: Math.round((QUALITY[settings.quality] || QUALITY.high).pixelRatio * 100) });
  }

  // debug: milliseconds per frame on the GPU, with parts of the scene switched off (used to see what the frame time is spent on)
  window.__bench = (n = 20, f = {}) => {
    const gl = renderer.getContext();
    const b = world().bench(), parts = [...b.models, ...(b.grass ? [b.grass] : [])];   // f.noModels hides the active scene's content, f.noGrass only the wheat
    const was = parts.map((o) => o.visible);
    const sv = sky.visible, bv = bloomPass.enabled;
    parts.forEach((o) => { o.visible = o === b.grass ? !f.noGrass : !f.noModels; });
    sky.visible = !f.noSky; bloomPass.enabled = bv && !f.noBloom;
    const px = new Uint8Array(4);
    const sync = () => gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);   // reading a pixel makes the CPU wait for the GPU
    composer.render(); sync();
    const t0 = performance.now();
    for (let i = 0; i < n; i++) { update(30 + i * 0.016); composer.render(); sync(); }
    const ms = (performance.now() - t0) / n;
    parts.forEach((o, i) => { o.visible = was[i]; });
    sky.visible = sv; bloomPass.enabled = bv;
    return ms;
  };
  // debug helper: window.__capture() returns a JPEG data URL of the current frame (used to make preview.jpg)
  window.__capture = (t) => { if (t !== undefined) update(t); composer.render(); return renderer.domElement.toDataURL('image/jpeg', 0.92); };
  window.__scene = (id) => { applyScene(id); fade = 0; pending = null; };

  // ---- loop ------------------------------------------------------------
  applyScene(settings.scene === 'cycle' || !SCENES[settings.scene] ? FIRST : settings.scene);
  if (settings.scene === 'cycle') requestScene('cycle');
  if (query.get('alt')) target.alt = view.alt = clamp(Number(query.get('alt')), altMin(), altMax());
  if (query.get('yaw')) target.yaw = view.yaw = Number(query.get('yaw'));
  if (query.get('lens')) { setLens(clamp(Number(query.get('lens')), MM_MIN, MM_MAX)); view.alt = target.alt; target.tanh = view.tanh = 12 / clamp(Number(query.get('lens')), MM_MIN, MM_MAX); }
  if (query.get('cx')) { cursor.x = Number(query.get('cx')); cursor.y = Number(query.get('cy') || 0); }
  applyQuality();
  const clock = new THREE.Clock();
  let sim = Number(query.get('t')) || 0, acc = 0, shots = 0;
  function frame() {
    requestAnimationFrame(frame);
    if (freeze && shots >= 4) return;
    const dt = clock.getDelta();
    acc += dt;
    const step = 1 / Math.max(settings.fps, 5);
    if (acc < step - 0.0005) return;
    const d = freeze ? 0.016 : Math.min(acc, 0.1) * settings.speed;
    acc = 0;
    update(sim + d);
    composer.render();
    shots++;
    fpsCount++;
    const now = performance.now();
    if (now - fpsStamp > 1000) { fpsShown = Math.round(fpsCount * 1000 / (now - fpsStamp)); fpsCount = 0; fpsStamp = now; }
  }
  lastT = sim;
  frame();

}
