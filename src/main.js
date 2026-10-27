import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
import {
  skyVert, skyFrag, grassVert, grassFrag, groundVert, groundFrag,
  emberVert, emberFrag, gradeShader
} from './shaders.js';

const HORIZON = -0.40;   // screen-space y of the horizon, shared by sky shader and 3D camera
const PALETTES = {
  amber:  { hot: [1.00, 0.82, 0.50], mid: [1.00, 0.45, 0.10], cool: [0.50, 0.12, 0.03] },
  violet: { hot: [0.95, 0.78, 1.00], mid: [0.55, 0.28, 1.00], cool: [0.16, 0.06, 0.45] }
};
const QUALITY = {
  low:    { pixelRatio: 0.6, grass: 14000, embers: 60,  bloom: false, steps: 90 },
  medium: { pixelRatio: 0.85, grass: 45000, embers: 140, bloom: true, steps: 160 },
  high:   { pixelRatio: 1.0, grass: 120000, embers: 300, bloom: true, steps: 240 }
};

const query = new URLSearchParams(location.search);
const settings = {
  palette: query.get('palette') || 'amber',
  quality: query.get('q') || 'high',
  fps: Number(query.get('fps')) || 60,
  bloom: 1.0,
  speed: 1.0,
  parallax: true,
  stars: 1.0
};

const U = {
  uTime: { value: 0 },
  uRes: { value: new THREE.Vector2(1, 1) },
  uMouse: { value: new THREE.Vector2() },
  uHot: { value: new THREE.Color() },
  uMid: { value: new THREE.Color() },
  uCool: { value: new THREE.Color() },
  uHorizon: { value: HORIZON },
  uStars: { value: 1 },
  uWind: { value: 1 }
};

const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 200);
camera.position.set(0, 1.7, 0);

// ---- sky -------------------------------------------------------------
const sky = new THREE.Mesh(
  new THREE.PlaneGeometry(2, 2),
  new THREE.ShaderMaterial({ vertexShader: skyVert, fragmentShader: skyFrag, uniforms: U, depthTest: false, depthWrite: false, defines: { STEPS: 240 } })
);
sky.frustumCulled = false;
sky.renderOrder = -10;
scene.add(sky);

// ---- ground + grass --------------------------------------------------
const FAR_Z = -30;
const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(200, 40).rotateX(-Math.PI / 2).translate(0, 0, FAR_Z + 20),
  new THREE.ShaderMaterial({ vertexShader: groundVert, fragmentShader: groundFrag, uniforms: U })
);
scene.add(ground);

let grass = null;
function buildGrass(count) {
  if (grass) { scene.remove(grass); grass.geometry.dispose(); }
  const base = new THREE.InstancedBufferGeometry();
  base.setAttribute('position', new THREE.Float32BufferAttribute([-0.5, 0, 0, 0.5, 0, 0, 0, 1, 0], 3));
  const inst = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const z = -(1.5 + (-FAR_Z - 1.5) * Math.pow(Math.random(), 1.35));
    const spread = 6 + (-z) * 1.6;
    inst[i * 3] = (Math.random() * 2 - 1) * spread;
    inst[i * 3 + 1] = z;
    inst[i * 3 + 2] = Math.random();
  }
  base.setAttribute('aInst', new THREE.InstancedBufferAttribute(inst, 3));
  base.instanceCount = count;
  grass = new THREE.Mesh(base, new THREE.ShaderMaterial({
    vertexShader: grassVert, fragmentShader: grassFrag, uniforms: U, side: THREE.DoubleSide
  }));
  grass.frustumCulled = false;
  scene.add(grass);
}

// ---- silhouettes: farmhouse + windmill -------------------------------
const dark = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.018, 0.011, 0.008) });
const windowMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(5.0, 2.2, 0.55), toneMapped: false });

function buildFarm() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(4.6, 2.6, 3.2), dark);
  body.position.y = 1.3;
  const roofShape = new THREE.Shape([new THREE.Vector2(-2.7, 0), new THREE.Vector2(2.7, 0), new THREE.Vector2(0, 1.9)]);
  const roof = new THREE.Mesh(new THREE.ExtrudeGeometry(roofShape, { depth: 3.7, bevelEnabled: false }), dark);
  roof.position.set(0, 2.6, -1.85);
  const chimney = new THREE.Mesh(new THREE.BoxGeometry(0.45, 1.3, 0.45), dark);
  chimney.position.set(1.4, 4.1, -0.3);
  const porch = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.15, 1.0), dark);
  porch.position.set(-0.6, 1.5, 2.1);
  g.add(body, roof, chimney, porch);
  const wins = [[-1.7, 1.5], [-0.55, 1.5], [0.7, 1.5], [1.7, 1.5], [-0.8, 3.3], [0.8, 3.3]];
  wins.forEach(([x, y], i) => {
    if (i > 3) { y = 2.95; }
    const m = new THREE.Mesh(new THREE.PlaneGeometry(i > 3 ? 0.4 : 0.55, i > 3 ? 0.5 : 0.7), windowMat);
    m.position.set(x, y, 1.61);
    g.add(m);
  });
  return g;
}

const windmillRotor = new THREE.Group();
function buildWindmill() {
  const g = new THREE.Group();
  const tower = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.55, 7.5, 6), dark);
  tower.position.y = 3.75;
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 1.0), dark);
  head.position.set(0, 7.6, 0);
  windmillRotor.position.set(0, 7.6, 0.6);
  for (let i = 0; i < 4; i++) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.34, 3.2, 0.05), dark);
    blade.position.y = 1.7;
    const arm = new THREE.Group();
    arm.rotation.z = (i * Math.PI) / 2;
    arm.add(blade);
    windmillRotor.add(arm);
  }
  g.add(tower, head, windmillRotor);
  return g;
}

function buildTruck() {
  const g = new THREE.Group();
  const add = (geo, x, y, z) => { const m = new THREE.Mesh(geo, dark); m.position.set(x, y, z); g.add(m); return m; };
  // side profile of a pickup, extruded across its width
  const prof = new THREE.Shape([
    new THREE.Vector2(-2.5, 0.45), new THREE.Vector2(2.5, 0.45), new THREE.Vector2(2.55, 1.15),
    new THREE.Vector2(2.0, 1.35), new THREE.Vector2(1.35, 1.45), new THREE.Vector2(0.95, 2.2),
    new THREE.Vector2(-0.15, 2.2), new THREE.Vector2(-0.3, 1.5), new THREE.Vector2(-2.5, 1.5)
  ]);
  const body = new THREE.Mesh(new THREE.ExtrudeGeometry(prof, { depth: 1.9, bevelEnabled: false }), dark);
  body.position.z = -0.95;
  g.add(body);
  for (const x of [-1.5, 1.6]) for (const z of [-0.95, 0.95]) {
    const w = add(new THREE.CylinderGeometry(0.46, 0.46, 0.3, 14), x, 0.46, z);
    w.rotation.x = Math.PI / 2;
  }
  const lamp = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.12), windowMat);   // one dim tail lamp
  lamp.position.set(-2.52, 1.0, 0.7); lamp.rotation.y = -Math.PI / 2;
  g.add(lamp);
  return g;
}
function buildTree() {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.3, 3.2, 7), dark);
  trunk.position.y = 1.6;
  g.add(trunk);
  for (const [x, y, z, s] of [[0, 4.2, 0, 1.9], [-1.1, 3.6, 0.3, 1.3], [1.2, 3.7, -0.2, 1.4], [0.2, 5.3, 0.1, 1.1]]) {
    const b = new THREE.Mesh(new THREE.IcosahedronGeometry(s, 1), dark);
    b.position.set(x, y, z); b.scale.y = 0.85;
    g.add(b);
  }
  return g;
}
function buildFence() {
  const g = new THREE.Group();
  for (let x = -34; x <= 34; x += 3.2) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.15, 0.14), dark);
    post.position.set(x, 0.575, 0);
    g.add(post);
  }
  for (const y of [0.45, 0.9]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(68.6, 0.07, 0.05), dark);
    rail.position.set(0, y, 0);
    g.add(rail);
  }
  return g;
}
function buildPole() {
  const g = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 8.5, 6), dark);
  pole.position.y = 4.25;
  const arm = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.12, 0.12), dark);
  arm.position.y = 7.9;
  g.add(pole, arm);
  return g;
}

const truck = buildTruck();
truck.position.set(-3.2, 0, FAR_Z + 6);
truck.rotation.y = 0.18;
const tree = buildTree();
tree.position.set(-8.5, 0, FAR_Z + 2);
const fence = buildFence();
fence.position.set(0, 0, FAR_Z + 9);
const pole = buildPole();
pole.position.set(15, 0, FAR_Z + 7);
scene.add(truck, tree, fence, pole);

const farm = buildFarm();
farm.position.set(9.0, 0, FAR_Z + 2);
farm.rotation.y = -0.08;
const windmill = buildWindmill();
windmill.position.set(-13.0, 0, FAR_Z + 3);
scene.add(farm, windmill);

// ---- embers ----------------------------------------------------------
let embers = null;
function buildEmbers(count) {
  if (embers) { scene.remove(embers); embers.geometry.dispose(); }
  const pos = new Float32Array(count * 3);
  const seed = new Float32Array(count * 4);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() * 2 - 1) * 24;
    pos[i * 3 + 1] = Math.random() * 9;
    pos[i * 3 + 2] = -3 - Math.random() * 27;
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
  scene.add(embers);
}

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

// ---- settings application -------------------------------------------
let cycleMode = false;
function setPalette(name) {
  cycleMode = name === 'cycle';
  if (!cycleMode) applyPalette(PALETTES[name] ? name === 'violet' ? 1 : 0 : 0);
}
function applyPalette(t) {   // t: 0 = amber, 1 = violet
  const a = PALETTES.amber, b = PALETTES.violet;
  for (const key of ['hot', 'mid', 'cool']) {
    const u = U['u' + key[0].toUpperCase() + key.slice(1)].value;
    u.setRGB(a[key][0] + (b[key][0] - a[key][0]) * t, a[key][1] + (b[key][1] - a[key][1]) * t, a[key][2] + (b[key][2] - a[key][2]) * t);
  }
}
function applyQuality() {
  const q = QUALITY[settings.quality] || QUALITY.high;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2) * q.pixelRatio);
  buildGrass(q.grass);
  buildEmbers(q.embers);
  if (sky.material.defines.STEPS !== q.steps) { sky.material.defines.STEPS = q.steps; sky.material.needsUpdate = true; }
  bloomPass.enabled = q.bloom && settings.bloom > 0.01;
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
  if (embers) embers.material.uniforms.uPx.value = h * pr / 1080;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  // lens shift: put the 3D horizon at the same screen height as the sky shader's horizon
  camera.projectionMatrix.elements[9] = -HORIZON;
  camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();
}
window.addEventListener('resize', resize);

const mouse = new THREE.Vector2(), mouseS = new THREE.Vector2();
window.addEventListener('mousemove', (e) => {
  mouse.set((e.clientX / window.innerWidth) * 2 - 1, -((e.clientY / window.innerHeight) * 2 - 1));
});

// Wallpaper Engine property bridge
window.wallpaperPropertyListener = {
  applyUserProperties(p) {
    let rebuild = false;
    if (p.palette) { settings.palette = p.palette.value; setPalette(settings.palette); }
    if (p.quality && p.quality.value !== settings.quality) { settings.quality = p.quality.value; rebuild = true; }
    if (p.fps) settings.fps = p.fps.value;
    if (p.bloom) { settings.bloom = p.bloom.value; bloomPass.strength = 0.7 * settings.bloom; bloomPass.enabled = (QUALITY[settings.quality] || QUALITY.high).bloom && settings.bloom > 0.01; }
    if (p.speed) settings.speed = p.speed.value;
    if (p.parallax) settings.parallax = !!p.parallax.value;
    if (p.stars) { settings.stars = p.stars.value; U.uStars.value = settings.stars; }
    if (rebuild) applyQuality();
  }
};

// debug helper: window.__capture() returns a JPEG data URL of the current frame (used to make preview.jpg)
function update(t) {
  sim = t;
  U.uTime.value = t;
  grade.uniforms.uTime.value = t;
  if (cycleMode) applyPalette(0.5 - 0.5 * Math.cos(t * (Math.PI * 2) / 120));
  const pm = settings.parallax ? mouse : new THREE.Vector2();
  mouseS.lerp(pm, 0.05);
  U.uMouse.value.copy(mouseS);
  camera.position.x = mouseS.x * 0.5 + Math.sin(t * 0.12) * 1.1;
  camera.position.y = 1.7 + mouseS.y * 0.12 + Math.sin(t * 0.09) * 0.12;
  camera.position.z = Math.sin(t * 0.06) * 1.5;
  windmillRotor.rotation.z = -t * 0.8;
}
window.__capture = (t) => { if (t !== undefined) update(t); composer.render(); return renderer.domElement.toDataURL('image/jpeg', 0.92); };

// ---- loop ------------------------------------------------------------
setPalette(settings.palette);
applyQuality();
const clock = new THREE.Clock();
let sim = 0, acc = 0;
function frame() {
  requestAnimationFrame(frame);
  const dt = clock.getDelta();
  acc += dt;
  const step = 1 / Math.max(settings.fps, 5);
  if (acc < step - 0.0005) return;
  const d = Math.min(acc, 0.1) * settings.speed;
  acc = 0;
  update(sim + d);
  composer.render();
}
frame();
