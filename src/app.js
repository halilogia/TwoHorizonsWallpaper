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
  const ALT_MAX = 32, ALT_MIN = 0.7, MM_MIN = 23, MM_MAX = 107;   // per-scene altMin / altMax override the climb limits
  // A scene with a `rig` (keyframes [alt shown on the HUD, lens mm on the ruler, horizon height on screen, camera y, camera z, yaw bias, effective lens mm],
  // ascending alt) ties lens and camera together: climbing widens the lens and dollies back, dropping down zooms in, and the wheel / lens ruler move along
  // the same curve. Interpolated linearly in log(alt). The HUD numbers are labels; y / z / eff are what the camera really does (measured off the reference).
  function rigAt(rig, alt) {
    const a = Math.log(alt);
    let i = 1;
    while (i < rig.length - 1 && a > Math.log(rig[i][0])) i++;
    const A = rig[i - 1], B = rig[i];
    const k = Math.min(1, Math.max(0, (a - Math.log(A[0])) / (Math.log(B[0]) - Math.log(A[0]))));
    const m = (n) => A[n] + (B[n] - A[n]) * k;
    return { mm: m(1), hs: m(2), y: m(3), z: m(4), bias: m(5), eff: m(6), x: m(7) };
  }
  function altForMm(rig, mm) {   // inverse of rigAt (lens falls as alt rises)
    let i = 1;
    while (i < rig.length - 1 && mm < rig[i][1]) i++;
    const [a0, m0] = rig[i - 1], [a1, m1] = rig[i];
    const k = Math.min(1, Math.max(0, (mm - m0) / (m1 - m0)));
    return Math.exp(Math.log(a0) + (Math.log(a1) - Math.log(a0)) * k);
  }
  const QUALITY = {
    low:    { pixelRatio: 0.65, grass: 35000,  flowers: 20000,  embers: 60,  fireflies: 120, bloom: false, steps: 90 },
    medium: { pixelRatio: 0.85, grass: 80000,  flowers: 60000,  embers: 140, fireflies: 300, bloom: true,  steps: 160 },
    high:   { pixelRatio: 1.0,  grass: 160000, flowers: 110000, embers: 300, fireflies: 600, bloom: true,  steps: 240 }
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
    uRIn: { value: 3 },
    uRings: { value: 9 },
    uDopp: { value: 1 },
    uGain: { value: 1 },
    uSky: { value: 0 },
    uSkyTop: { value: new THREE.Color() },
    uSkyLow: { value: new THREE.Color() },
    uBandCol: { value: new THREE.Color() },
    uFogD: { value: 20 },
    uWind: { value: 1 },
    uWheat: { value: 1 }   // how much of the near wheat stands up (0 = flat dark ground, the reference only shows it on the mid lenses)
  };

  const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  document.body.appendChild(renderer.domElement);
  renderer.domElement.addEventListener('webglcontextlost', (e) => { e.preventDefault(); }, false);
  renderer.domElement.addEventListener('webglcontextrestored', () => { applyQuality(); }, false);

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
  const lensOf = (s, alt) => (s.rig ? rigAt(s.rig, alt).eff : s.mm);   // focal length the camera really uses (the HUD shows rig.mm)
  const view = { yaw: 0, alt: SCENES[FIRST].alt, tanh: 12 / lensOf(SCENES[FIRST], SCENES[FIRST].alt), fx: 0, fy: 0 };
  const target = { yaw: 0, alt: view.alt, tanh: view.tanh };
  const cursor = { x: 0, y: 0 };   // -1..1, y up

  function applyScene(id) {
    const s = SCENES[id];
    current = id;
    U.uHot.value.setRGB(...s.hot); U.uMid.value.setRGB(...s.mid); U.uCool.value.setRGB(...s.cool);
    U.uSkyTop.value.setRGB(...s.skyTop); U.uSkyLow.value.setRGB(...s.skyLow); U.uBandCol.value.setRGB(...s.band);
    U.uCamD.value = s.camD; U.uInc.value = s.inc; U.uROut.value = s.rOut; U.uDopp.value = s.dopp; U.uGain.value = s.gain; U.uSky.value = s.sky;
    U.uRIn.value = s.rIn ?? 3; U.uRings.value = s.rings ?? 9;
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
    target.yaw = 0; target.alt = s.alt; target.tanh = 12 / lensOf(s, s.alt);
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
  const smooth = (a, b, x) => { const k = clamp((x - a) / (b - a), 0, 1); return k * k * (3 - 2 * k); };   // GLSL smoothstep (a may be above b)
  // Drag grabs the world: the scene follows the hand sideways (cursor shows grab / grabbing), pulling up climbs. One event path only (pointer events,
  // mouse events only where the host has none), so a click is never counted twice; a lost button-up (cursor left the window) ends the drag on the next move.
  const drag = { on: false, x: 0, y: 0, id: -1 };
  const setCursor = (c) => { document.documentElement.style.cursor = settings.mode === 'off' ? 'default' : c; };
  const hasPointer = 'PointerEvent' in window;
  function onDown(x, y, id = -1) {
    if (settings.mode === 'off') return;
    drag.on = true; drag.x = x; drag.y = y; drag.id = id;
    setCursor('grabbing');
  }
  function onUp(id = -1) {
    if (id !== -1 && drag.id !== -1 && id !== drag.id) return;
    drag.on = false; drag.id = -1;
    setCursor('grab');
  }
  function onMove(x, y, buttons, id = -1) {
    cursor.x = clamp((x / window.innerWidth) * 2 - 1, -1, 1);
    cursor.y = clamp(-((y / window.innerHeight) * 2 - 1), -1, 1);
    if (!drag.on || settings.mode === 'off') return;
    if (buttons === 0 || (id !== -1 && drag.id !== -1 && id !== drag.id)) { if (buttons === 0) onUp(); return; }
    const dx = x - drag.x, dy = y - drag.y;
    drag.x = x; drag.y = y;
    const lensK = clamp(view.tanh / 0.245, 0.3, 1.4);   // finer pan at long lenses: one pixel is a smaller angle
    target.yaw = clamp(target.yaw - dx * 0.0012 * lensK, -yawLimit(), yawLimit());
    target.alt = clamp(target.alt * Math.exp(-dy * 0.006), altMin(), altMax());
  }
  function onWheel(e) {
    if (settings.mode === 'off') return;
    const dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 400 : 1);   // lines / pages -> pixels
    const s = SCENES[current];
    if (s.rig) target.alt = clamp(target.alt * Math.exp(dy * 0.0011), altMin(), altMax());   // wheel up zooms in along the rig (lens and dolly together)
    else setLens(clamp(12 / target.tanh * Math.exp(-dy * 0.0011), MM_MIN, MM_MAX));
  }
  setCursor('grab');
  document.documentElement.style.touchAction = 'none';
  if (hasPointer) {
    window.addEventListener('pointerdown', (e) => { if (e.button === 0 || e.pointerType !== 'mouse') onDown(e.clientX, e.clientY, e.pointerId); });
    window.addEventListener('pointerup', (e) => onUp(e.pointerId));
    window.addEventListener('pointercancel', (e) => onUp(e.pointerId));
    window.addEventListener('pointermove', (e) => onMove(e.clientX, e.clientY, e.pointerType === 'mouse' ? e.buttons : 1, e.pointerId));
  } else {
    window.addEventListener('mousedown', (e) => { if (e.button === 0) onDown(e.clientX, e.clientY); });
    window.addEventListener('mouseup', () => onUp());
    window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY, e.buttons));
  }
  window.addEventListener('blur', () => onUp());
  document.addEventListener('mouseleave', () => onUp());
  window.addEventListener('wheel', onWheel, { passive: true });
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
    if (s.rig) target.tanh = 12 / rigAt(s.rig, target.alt).eff;
    target.alt = clamp(isFinite(target.alt) ? target.alt : s.alt, altMin(), altMax());
    const goal = { yaw: target.yaw, alt: target.alt, tanh: target.tanh, fx: follow ? cursor.x : 0, fy: follow ? cursor.y : 0 };
    for (const k in goal) view[k] += (goal[k] - view[k]) * ease;
    // one bad value (NaN from a lost event or a divide) would poison the camera matrix and turn the whole frame black: fall back to the scene's rest pose
    for (const k in view) if (!isFinite(view[k])) { view[k] = k === 'alt' ? s.alt : k === 'tanh' ? 12 / lensOf(s, s.alt) : 0; target.alt = s.alt; target.yaw = 0; }
    view.tanh = Math.max(view.tanh, 0.05); view.alt = Math.max(view.alt, 0.5);

    // unified camera: pan with the cursor, drift slowly, climb with drag / arrow keys, a hint of lateral travel so near things slide over far ones
    const rg = s.rig ? rigAt(s.rig, view.alt) : null;
    const alt = rg ? Math.max(rg.y * Math.exp(view.fy * 0.1), 1.2) : clamp(view.alt * Math.exp(view.fy * 0.4), altMin(), altMax());
    const f = clamp(Math.log(alt / s.alt) / Math.log(altMax() / s.alt), 0, 1);
    const hs = (rg ? rg.hs : s.hs0 + (s.hs1 - s.hs0) * f * f * (3 - 2 * f)) - view.fy * 0.05;   // where the horizon sits on screen: looks down as the camera climbs
    const yaw = view.yaw + (rg ? rg.bias : 0) + view.fx * 0.09 + Math.sin(t * 0.05) * 0.02;
    const camZ = rg ? rg.z : Math.max(alt - s.alt, 0) * s.dolly;   // the rig dollies back as it climbs; Viola: climbing also pulls back, so the astronaut stays in frame
    camera.position.set((rg ? rg.x : 0) + view.yaw * 3.5 + view.fx * 0.7 + Math.sin(t * 0.12) * 0.7, alt, Math.sin(t * 0.06) * 0.8 + camZ);
    camera.rotation.set(Math.atan(-hs * view.tanh), -yaw, 0);
    camera.fov = 2 * Math.atan(view.tanh) * 180 / Math.PI;
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld(true);
    U.uTanh.value = view.tanh;
    U.uCamRot.value.setFromMatrix4(camera.matrixWorld);
    U.uFogD.value = 12 + 11 * alt;
    U.uWheat.value = 1.0;

    // the hole is a fixed direction in the sky (with a very slow breathing drift)
    const az = s.holeAz + Math.sin(t * 0.11) * 0.006, el = s.holeEl + Math.sin(t * 0.07) * 0.002;
    holeDir.set(Math.sin(az) * Math.cos(el), Math.sin(el), -Math.cos(az) * Math.cos(el));
    U.uHoleDir.value.copy(holeDir);
    camPos.copy(camera.position);
    hv.copy(holeDir).multiplyScalar(1000).add(camPos).project(camera);
    const inFront = holeDir.dot(new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion)) > 0;
    grade.uniforms.uHoleUV.value = inFront && isFinite(hv.x) && isFinite(hv.y)
      ? [clamp((hv.x + 1) / 2, -0.2, 1.2), clamp((hv.y + 1) / 2, -0.2, 1.2)]
      : [0.5, 0.5];

    world().update(t, camera);

    hud.update({ scene: current, mm: rg ? rg.mm : 12 / view.tanh, alt: rg ? view.alt : camera.position.y, dist: s.camD, t, fps: fpsShown, scale: Math.round((QUALITY[settings.quality] || QUALITY.high).pixelRatio * 100) });
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
  if (query.get('lens')) { setLens(clamp(Number(query.get('lens')), MM_MIN, MM_MAX)); view.alt = target.alt; target.tanh = view.tanh = 12 / (SCENES[current].rig ? lensOf(SCENES[current], target.alt) : clamp(Number(query.get('lens')), MM_MIN, MM_MAX)); }
  if (query.get('cx')) { cursor.x = Number(query.get('cx')); cursor.y = Number(query.get('cy') || 0); }
  applyQuality();
  const clock = new THREE.Clock();
  let sim = Number(query.get('t')) || 0, acc = 0, shots = 0;
  function frame() {
    requestAnimationFrame(frame);
    if (freeze && shots >= 15) return;
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
