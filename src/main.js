import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import houseGlb from '../assets/models/house.glb';
import truckGlb from '../assets/models/truck.glb';
import {
  skyVert, skyFrag, grassVert, grassFrag, groundVert, groundFrag,
  emberVert, emberFrag, rimVert, rimFrag, smokeVert, smokeFrag, gradeShader
} from './shaders.js';
import { createHud } from './hud.js';
import { createViola } from './viola.js';

// Two worlds behind one camera. Everything is 1 unit = 1 metre; the black hole is a fixed direction in the sky (a celestial object),
// so the mouse only ever moves the camera and the whole world follows: grass, house and truck slide against each other, the hole barely moves.
const SCENES = {
  aurum: {
    name: 'Aurum', tagline: 'The last farm before the event horizon',
    hot: [1.00, 0.82, 0.50], mid: [1.00, 0.45, 0.10], cool: [0.50, 0.12, 0.03],
    camD: 17.8, inc: 0.10, rOut: 9, dopp: 1, gain: 1.0, sky: 0,
    skyTop: [0, 0, 0], skyLow: [0, 0, 0], band: [0, 0, 0],
    alt: 2.09, hs0: -0.57, hs1: 0.32, dolly: 0, mm: 49, holeAz: -0.04, holeEl: 0.078,
    bloom: 0.4, bloomRadius: 0.25, exposure: 0.85
  },
  viola: {
    name: 'Viola', tagline: 'A violet field beneath the arc of the disk',
    hot: [1.00, 0.86, 0.62], mid: [0.95, 0.62, 0.45], cool: [0.55, 0.30, 0.50],
    camD: 33.6, inc: 0.03, rOut: 6.5, dopp: 0.3, gain: 1.4, sky: 1,
    skyTop: [0.025, 0.022, 0.07], skyLow: [0.11, 0.08, 0.15], band: [1.0, 0.86, 0.62],
    alt: 1.11, hs0: 0.18, hs1: 0.55, dolly: 4.5, mm: 57, holeAz: 0.04, holeEl: 0.012,
    bloom: 0.35, bloomRadius: 0.4, exposure: 0.95
  }
};
const SCENE_LIST = ['aurum', 'viola'];
const ALT_MAX = 16, ALT_MIN = 0.7, MM_MIN = 23, MM_MAX = 107;
const QUALITY = {
  low:    { pixelRatio: 0.6,  grass: 14000,  flowers: 18000,  embers: 60,  fireflies: 120, bloom: false, steps: 90 },
  medium: { pixelRatio: 0.85, grass: 45000,  flowers: 55000,  embers: 140, fireflies: 300, bloom: true,  steps: 160 },
  high:   { pixelRatio: 1.0,  grass: 120000, flowers: 110000, embers: 300, fireflies: 600, bloom: true,  steps: 240 }
};

const query = new URLSearchParams(location.search);
const settings = {
  scene: query.get('scene') || (query.get('palette') === 'violet' ? 'viola' : query.get('palette') === 'cycle' ? 'cycle' : 'aurum'),
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

// ============================ Scene I: Aurum ============================
const aurum = new THREE.Group();
scene.add(aurum);

const FAR_Z = -58;   // the wheat ends here; beyond it the ground is a mirror of the sky and the house and truck stand in it
const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(600, 76).rotateX(-Math.PI / 2).translate(0, 0, 12 - 38),
  new THREE.ShaderMaterial({ vertexShader: groundVert, fragmentShader: groundFrag, uniforms: U })
);
aurum.add(ground);

const TRUCK_AT = new THREE.Vector3(-2.0, 0, -72), HOUSE_AT = new THREE.Vector3(22, 0, -92);
/** @type {THREE.Mesh | null} */
let grass = null;
function buildGrass(count) {
  if (grass) { aurum.remove(grass); grass.geometry.dispose(); }
  const base = new THREE.InstancedBufferGeometry();
  // five-row tapered blade: pairs of vertices up the stalk plus one tip vertex
  const rows = 4, pos = [], idx = [];
  for (let r = 0; r < rows; r++) pos.push(-0.5, r / rows, 0, 0.5, r / rows, 0);
  pos.push(0, 1, 0);
  for (let r = 0; r < rows - 1; r++) { const a = r * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  const t = (rows - 1) * 2; idx.push(t, t + 1, rows * 2);
  base.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  base.setIndex(idx);
  const inst = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const z = -(1.5 + (-FAR_Z - 2 - 1.5) * Math.pow(Math.random(), 2.0));
    const x = (Math.random() * 2 - 1) * (8 + (-z) * 1.0);
    inst[i * 3] = x;
    inst[i * 3 + 1] = z;
    inst[i * 3 + 2] = Math.random();
  }
  base.setAttribute('aInst', new THREE.InstancedBufferAttribute(inst, 3));
  base.instanceCount = count;
  grass = new THREE.Mesh(base, new THREE.ShaderMaterial({
    vertexShader: grassVert, fragmentShader: grassFrag, uniforms: U, side: THREE.DoubleSide
  }));
  grass.frustumCulled = false;
  aurum.add(grass);
}

// near-black bodies with a warm rim, as if lit from behind by the hole; glass parts glow
const dark = new THREE.ShaderMaterial({
  vertexShader: rimVert, fragmentShader: rimFrag,
  uniforms: { uHot: U.uHot, uMid: U.uMid, uBase: { value: new THREE.Color(0.016, 0.010, 0.007) }, uRim: { value: 1 } }
});
const windowMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(5.0, 2.2, 0.55), toneMapped: false });

// soft additive light pool (house windows, truck headlights) laid on the ground
function glowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const x = c.getContext('2d');
  if (!x) return new THREE.CanvasTexture(c);
  const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, 'rgba(255,255,255,1)');
  gr.addColorStop(0.35, 'rgba(255,255,255,0.35)');
  gr.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = gr; x.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}
const poolTex = glowTexture();
function lightPool(w, d, color, strength) {
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(w, d).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ map: poolTex, color: new THREE.Color(color).multiplyScalar(strength), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })
  );
  m.position.y = 0.05;
  return m;
}

// Blender models (modelled with Blender Copilot): glass parts glow, everything else is a rim-lit silhouette.
// Each .glb is bundled as a data URL so the wallpaper needs no file access at run time.
function attachModel(group, url, scale, onLoaded) {
  new GLTFLoader().load(url, (gltf) => {
    const root = gltf.scene;
    root.traverse((o) => {
      if (!o.isMesh) return;
      const swap = (m) => (m.name.startsWith('glass') ? windowMat : dark);
      o.material = Array.isArray(o.material) ? o.material.map(swap) : swap(o.material);
    });
    const box = new THREE.Box3().setFromObject(root);
    const c = box.getCenter(new THREE.Vector3());
    root.position.set(-c.x, -box.min.y, -c.z);
    const holder = new THREE.Group();
    holder.add(root);
    holder.scale.setScalar(scale);
    group.add(holder);
    group.updateMatrixWorld(true);
    if (onLoaded) onLoaded(group, root);
  });
}

// world position of the top of a model (average of the vertices within `band` of its highest point)
function topOf(root, band) {
  const v = new THREE.Vector3(), pts = [];
  let maxY = -Infinity;
  root.traverse((o) => {
    if (!o.isMesh) return;
    const pos = o.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i).applyMatrix4(o.matrixWorld);
      pts.push(v.clone());
      if (v.y > maxY) maxY = v.y;
    }
  });
  const top = pts.filter((p) => p.y > maxY - band);
  const out = new THREE.Vector3();
  top.forEach((p) => out.add(p));
  return out.multiplyScalar(1 / top.length);
}

// the dog on the porch (profile facing +x, looking out at the hole)
function buildDog() {
  const g = new THREE.Group();
  const part = (geo, x, y, z, rx = 0, ry = 0, rz = 0) => {
    const m = new THREE.Mesh(geo, dark);
    m.position.set(x, y, z); m.rotation.set(rx, ry, rz);
    g.add(m);
    return m;
  };
  part(new THREE.CapsuleGeometry(0.15, 0.42, 4, 10), 0, 0.46, 0, 0, 0, Math.PI / 2);          // body
  part(new THREE.CapsuleGeometry(0.075, 0.2, 4, 8), 0.34, 0.66, 0, 0, 0, -0.55);              // neck
  part(new THREE.SphereGeometry(0.105, 12, 10), 0.43, 0.8, 0);                                // head
  part(new THREE.CapsuleGeometry(0.045, 0.1, 4, 8), 0.55, 0.77, 0, 0, 0, Math.PI / 2 - 0.2);  // snout
  for (const z of [-0.05, 0.05]) part(new THREE.ConeGeometry(0.04, 0.12, 5), 0.39, 0.92, z, 0, 0, 0.2);   // ears
  for (const [x, z] of [[0.2, 0.07], [0.2, -0.07], [-0.2, 0.07], [-0.2, -0.07]]) part(new THREE.CylinderGeometry(0.03, 0.025, 0.38, 6), x, 0.19, z);   // legs
  part(new THREE.CapsuleGeometry(0.025, 0.3, 3, 6), -0.4, 0.56, 0, 0, 0, 1.0);                // tail
  return g;
}

const truck = new THREE.Group();
truck.position.copy(TRUCK_AT);
truck.rotation.y = 0.28;
attachModel(truck, truckGlb, 1.15, (g) => {
  const beam = lightPool(7, 3, new THREE.Color(1.0, 0.85, 0.6), 0.9);   // headlight spill on the grass
  beam.position.set(7.0, 0.05, 0);
  g.add(beam);
});

/** @type {THREE.Points | null} */
let smoke = null;
const farm = new THREE.Group();
farm.position.copy(HOUSE_AT);
farm.rotation.y = -0.08;
attachModel(farm, houseGlb, 2.1, (g, root) => {
  const pool = lightPool(18, 10, new THREE.Color(1.0, 0.55, 0.18), 1.3);   // window light on the yard
  pool.position.set(0, 0.05, 9);
  g.add(pool);
  const dog = buildDog();
  dog.position.set(-8.1, 0.5, 4.9);   // at the left end of the porch, in front of the wall so it reads against the glow
  dog.scale.setScalar(1.15);
  g.add(dog);
  const top = topOf(root, 0.15);                                           // chimney: smoke starts here
  if (!smoke) return;
  const a = smoke.geometry.attributes.position;
  for (let i = 0; i < a.count; i++) a.setXYZ(i, top.x, top.y, top.z);
  a.needsUpdate = true;
});
aurum.add(truck, farm);

// ---- embers ----------------------------------------------------------
/** @type {THREE.Points | null} */
let embers = null;
function buildEmbers(count) {
  if (embers) { aurum.remove(embers); embers.geometry.dispose(); }
  const pos = new Float32Array(count * 3);
  const seed = new Float32Array(count * 4);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() * 2 - 1) * 60;
    pos[i * 3 + 1] = Math.random() * 9;
    pos[i * 3 + 2] = -4 - Math.random() * 66;
    for (let k = 0; k < 4; k++) seed[i * 4 + k] = Math.random();
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 4));
  embers = new THREE.Points(geo, new THREE.ShaderMaterial({
    vertexShader: emberVert, fragmentShader: emberFrag,
    uniforms: { uTime: U.uTime, uHot: U.uHot, uPx: { value: 1 } },
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
  }));
  embers.frustumCulled = false;
  aurum.add(embers);
}

// chimney smoke: soft dark puffs that rise, swell and drift with the wind
{
  const n = 36, pos = new Float32Array(n * 3), seed = new Float32Array(n);
  for (let i = 0; i < n; i++) { pos.set([HOUSE_AT.x + 4, 11, HOUSE_AT.z], i * 3); seed[i] = i / n; }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  smoke = new THREE.Points(geo, new THREE.ShaderMaterial({
    vertexShader: smokeVert, fragmentShader: smokeFrag,
    uniforms: { uTime: U.uTime, uPx: { value: 1 } }, transparent: true, depthWrite: false
  }));
  smoke.frustumCulled = false;
  smoke.renderOrder = 5;
  aurum.add(smoke);
}

// ============================ Scene II: Viola ============================
const viola = createViola(U);
scene.add(viola.group);

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
let current = 'aurum';
let pending = null;
let fade = 0;
let cycleMode = false, cycleAt = 0;
const view = { yaw: 0, alt: 2.09, tanh: 0.245, fx: 0, fy: 0 };
const target = { yaw: 0, alt: 2.09, tanh: 0.245 };
const cursor = { x: 0, y: 0 };   // -1..1, y up

function applyScene(id) {
  const s = SCENES[id];
  current = id;
  U.uHot.value.setRGB(...s.hot); U.uMid.value.setRGB(...s.mid); U.uCool.value.setRGB(...s.cool);
  U.uSkyTop.value.setRGB(...s.skyTop); U.uSkyLow.value.setRGB(...s.skyLow); U.uBandCol.value.setRGB(...s.band);
  U.uCamD.value = s.camD; U.uInc.value = s.inc; U.uROut.value = s.rOut; U.uDopp.value = s.dopp; U.uGain.value = s.gain; U.uSky.value = s.sky;
  aurum.visible = id === 'aurum';
  viola.group.visible = id === 'viola';
  grade.uniforms.uHaze.value = s.sky;
  renderer.toneMappingExposure = s.exposure;
  setBloom();
  resetView();
}
function resetView() {
  const s = SCENES[current];
  target.yaw = 0; target.alt = s.alt; target.tanh = 12 / s.mm;
}
function requestScene(id) {
  if (id === 'cycle') { cycleMode = true; cycleAt = U.uTime.value + 45; return; }
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
  onLens: (mm) => { target.tanh = 12 / mm; }
});
let fpsShown = 0, fpsCount = 0, fpsStamp = performance.now();
hud.show(query.get('hud') !== '0');

// ---- settings application -------------------------------------------
function applyQuality() {
  const q = QUALITY[settings.quality] || QUALITY.high;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2) * q.pixelRatio);
  buildGrass(q.grass);
  buildEmbers(q.embers);
  viola.build(q.flowers, q.fireflies);
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
  if (embers) embers.material.uniforms.uPx.value = h * pr / 1080;
  if (smoke) smoke.material.uniforms.uPx.value = h * pr / 1080;
  viola.setPx(h * pr / 1080);
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
    target.yaw = clamp(target.yaw + (x - drag.x) * 0.0035, -1.2, 1.2);
    target.alt = clamp(target.alt * Math.exp(-(y - drag.y) * 0.006), ALT_MIN, ALT_MAX);
    drag.x = x; drag.y = y;
  }
}
function onWheel(dy) {
  evCount.wheel++;
  if (settings.mode !== 'off') target.tanh = clamp(target.tanh * Math.exp(dy * 0.0008), 12 / MM_MAX, 12 / MM_MIN);
}
for (const t of ['pointerdown', 'mousedown']) window.addEventListener(t, (e) => onDown(e.clientX, e.clientY));
for (const t of ['pointerup', 'mouseup']) window.addEventListener(t, onUp);
for (const t of ['pointermove', 'mousemove']) window.addEventListener(t, (e) => onMove(e.clientX, e.clientY));
window.addEventListener('wheel', (e) => onWheel(e.deltaY), { passive: true });
window.addEventListener('dblclick', resetView);
window.addEventListener('keydown', (e) => {
  if (e.key === '1') requestScene('aurum');
  else if (e.key === '2') requestScene('viola');
  else if (e.key === 'ArrowUp') target.alt = clamp(target.alt * 1.15, ALT_MIN, ALT_MAX);
  else if (e.key === 'ArrowDown') target.alt = clamp(target.alt / 1.15, ALT_MIN, ALT_MAX);
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
  if (cycleMode && !pending && t > cycleAt) { cycleAt = t + 45; pending = current === 'aurum' ? 'viola' : 'aurum'; }
  if (pending) {
    fade = Math.min(1, fade + dt / 0.55);
    if (fade >= 1) { applyScene(pending); pending = null; }
  } else if (fade > 0) fade = Math.max(0, fade - dt / 0.8);
  grade.uniforms.uFade.value = fade * fade * (3 - 2 * fade);

  const s = SCENES[current];
  const follow = settings.mode === 'follow' && settings.parallax;
  const ease = freeze ? 1 : 1 - Math.exp(-dt * 6.5);
  const goal = { yaw: target.yaw, alt: target.alt, tanh: target.tanh, fx: follow ? cursor.x : 0, fy: follow ? cursor.y : 0 };
  for (const k in goal) view[k] += (goal[k] - view[k]) * ease;

  // unified camera: pan with the cursor, drift slowly, climb with drag / arrow keys, a hint of lateral travel so near things slide over far ones
  const alt = clamp(view.alt * Math.exp(view.fy * 0.4), ALT_MIN, ALT_MAX);
  const f = clamp(Math.log(alt / s.alt) / Math.log(ALT_MAX / s.alt), 0, 1);
  const hs = s.hs0 + (s.hs1 - s.hs0) * f * f * (3 - 2 * f) - view.fy * 0.05;   // where the horizon sits on screen: looks down as the camera climbs
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

  const fl = 0.92 + 0.08 * Math.sin(t * 7.0) * Math.sin(t * 3.1);   // lamplight flicker
  windowMat.color.setRGB(5.0 * fl, 2.2 * fl, 0.55 * fl);
  if (viola.group.visible) viola.update(t, camera);

  hud.update({ scene: current, mm: 12 / view.tanh, alt: camera.position.y, dist: s.camD, t, fps: fpsShown, scale: Math.round((QUALITY[settings.quality] || QUALITY.high).pixelRatio * 100) });
}

// debug: milliseconds per frame on the GPU, with parts of the scene switched off (used to see what the frame time is spent on)
window.__bench = (n = 20, f = {}) => {
  const gl = renderer.getContext();
  const parts = current === 'aurum' ? [truck, farm, ...(grass ? [grass] : [])] : [viola.group];   // f.noModels hides the active scene's content, f.noGrass only the wheat
  const was = parts.map((o) => o.visible);
  const sv = sky.visible, bv = bloomPass.enabled;
  parts.forEach((o) => { o.visible = o === grass ? !f.noGrass : !f.noModels; });
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
applyScene(settings.scene === 'cycle' ? 'aurum' : SCENES[settings.scene] ? settings.scene : 'aurum');
if (settings.scene === 'cycle') requestScene('cycle');
if (query.get('alt')) target.alt = view.alt = clamp(Number(query.get('alt')), ALT_MIN, ALT_MAX);
if (query.get('yaw')) target.yaw = view.yaw = Number(query.get('yaw'));
if (query.get('lens')) target.tanh = view.tanh = 12 / clamp(Number(query.get('lens')), MM_MIN, MM_MAX);
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
