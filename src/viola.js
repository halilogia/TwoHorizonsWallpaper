// Scene II (Viola): a lavender field to the horizon, golden fireflies, an astronaut watching the hole, soft out-of-focus petals near the lens.
import * as THREE from 'three';
import {
  flowerVert, flowerFrag, violaGroundVert, violaGroundFrag, fireflyVert, fireflyFrag, rimVert, rimFrag
} from './shaders.js';

export const ASTRONAUT_POS = new THREE.Vector3(0.15, 0, -6.6);

// one flower: a stalk triangle plus a low-poly dome (see flowerVert)
function flowerBase() {
  const base = new THREE.InstancedBufferGeometry();
  const pos = [], part = [], idx = [];
  const push = (x, y, z, p) => { pos.push(x, y, z); part.push(p); return pos.length / 3 - 1; };
  const top = push(0, 1, 0, 1);
  const SIDES = 8;
  const rings = [[0.55, 0.85], [0.0, 1.0], [-0.45, 0.5]];
  const ringStart = [];
  for (const [y, r] of rings) {
    ringStart.push(pos.length / 3);
    for (let i = 0; i < SIDES; i++) { const a = i / SIDES * Math.PI * 2; push(Math.cos(a) * r, y, Math.sin(a) * r, 1); }
  }
  const bottom = push(0, -0.6, 0, 1);
  for (let i = 0; i < SIDES; i++) {
    const j = (i + 1) % SIDES;
    idx.push(top, ringStart[0] + i, ringStart[0] + j);
    for (let k = 0; k < 2; k++) {
      const a = ringStart[k] + i, b = ringStart[k] + j, c = ringStart[k + 1] + i, d = ringStart[k + 1] + j;
      idx.push(a, c, b, b, c, d);
    }
    idx.push(bottom, ringStart[2] + j, ringStart[2] + i);
  }
  const s0 = push(-0.5, 0, 0, 0), s1 = push(0.5, 0, 0, 0), s2 = push(0, 1, 0, 0);
  idx.push(s0, s1, s2);
  base.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  base.setAttribute('aPart', new THREE.Float32BufferAttribute(part, 1));
  base.setIndex(idx);
  return base;
}

function softTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const x = c.getContext('2d');
  if (!x) return new THREE.CanvasTexture(c);
  const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.55, 'rgba(255,255,255,.85)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

function buildAstronaut(U) {
  const mat = new THREE.ShaderMaterial({
    vertexShader: rimVert, fragmentShader: rimFrag,
    uniforms: { uHot: U.uHot, uMid: U.uMid, uBase: { value: new THREE.Color(0.030, 0.024, 0.045) }, uRim: { value: 0.9 } }
  });
  const g = new THREE.Group();
  const add = (geo, x, y, z, sx = 1, sy = 1, sz = 1, rx = 0, rz = 0) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z); m.scale.set(sx, sy, sz); m.rotation.set(rx, 0, rz);
    g.add(m);
    return m;
  };
  add(new THREE.SphereGeometry(0.2, 28, 20), 0, 0.98, 0);                                  // helmet
  add(new THREE.TorusGeometry(0.15, 0.035, 10, 24), 0, 0.77, 0, 1, 1, 1, Math.PI / 2);   // neck ring
  add(new THREE.CapsuleGeometry(0.19, 0.38, 6, 14), 0, 0.5, 0, 1.45, 1, 0.9);              // torso
  add(new THREE.CapsuleGeometry(0.17, 0.26, 6, 12), 0, 0.55, 0.25, 1.25, 1, 0.75);          // life-support pack
  for (let i = 0; i < 5; i++) {                                                             // ridged shoulder caps
    for (const sx of [-1, 1]) add(new THREE.BoxGeometry(0.13, 0.018, 0.2), sx * (0.3 + i * 0.012), 0.72 - i * 0.03, 0.0, 1, 1, 1, 0, sx * (0.5 + i * 0.02));
  }
  for (const sx of [-1, 1]) add(new THREE.CapsuleGeometry(0.07, 0.2, 4, 10), sx * 0.31, 0.5, 0.06, 1, 1, 1, 0, sx * 0.12);   // arms
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.018, 10, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(5, 0.25, 0.2), toneMapped: false }));
  lamp.position.set(0.0, 0.5, 0.375);
  g.add(lamp);
  g.position.copy(ASTRONAUT_POS);
  g.position.y -= 0.13;
  g.scale.setScalar(0.95);
  return g;
}

// Scene II: Viola, the violet flower field.
export const VIOLA = {
  id: 'viola',
  name: 'Viola', tagline: 'A violet field beneath the arc of the disk',
  hot: [1.00, 0.86, 0.62], mid: [0.95, 0.62, 0.45], cool: [0.55, 0.30, 0.50],
  camD: 33.6, inc: 0.03, rOut: 6.5, dopp: 0.3, gain: 1.4, sky: 1,
  skyTop: [0.025, 0.022, 0.07], skyLow: [0.11, 0.08, 0.15], band: [1.0, 0.86, 0.62],
  alt: 1.11, hs0: 0.18, hs1: 0.55, dolly: 4.5, mm: 57, holeAz: 0.04, holeEl: 0.012,
  bloom: 0.35, bloomRadius: 0.4, exposure: 0.95
};

export function createViola(U) {
  const group = new THREE.Group();
  group.visible = false;

  const violaUniforms = { uTime: U.uTime, uBandCol: U.uBandCol, uFogD: U.uFogD };

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(1400, 900).rotateX(-Math.PI / 2).translate(0, -0.002, -330),
    new THREE.ShaderMaterial({ vertexShader: violaGroundVert, fragmentShader: violaGroundFrag, uniforms: violaUniforms })
  );
  group.add(ground);

  /** @type {THREE.Mesh | null} */
  let flowers = null;
  /** @type {THREE.Points | null} */
  let fireflies = null;
  function build({ flowers: count, fireflies: flies }) {
    if (flowers) { group.remove(flowers); flowers.geometry.dispose(); }
    const geo = flowerBase();
    const inst = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const z = 4 - 44 * Math.pow(Math.random(), 1.9);
      const spread = 16 + Math.abs(z) * 0.8;
      inst[i * 3] = (Math.random() * 2 - 1) * spread;
      inst[i * 3 + 1] = z;
      inst[i * 3 + 2] = Math.random();
    }
    geo.setAttribute('aInst', new THREE.InstancedBufferAttribute(inst, 3));
    geo.instanceCount = count;
    flowers = new THREE.Mesh(geo, new THREE.ShaderMaterial({ vertexShader: flowerVert, fragmentShader: flowerFrag, uniforms: violaUniforms, side: THREE.DoubleSide }));
    flowers.frustumCulled = false;
    group.add(flowers);

    if (fireflies) { group.remove(fireflies); fireflies.geometry.dispose(); }
    const pos = new Float32Array(flies * 3), seed = new Float32Array(flies * 4);
    for (let i = 0; i < flies; i++) {
      pos[i * 3] = (Math.random() * 2 - 1) * 26;
      pos[i * 3 + 1] = Math.random() * 5;
      pos[i * 3 + 2] = 3 - Math.random() * 45;
      for (let k = 0; k < 4; k++) seed[i * 4 + k] = Math.random();
    }
    const fg = new THREE.BufferGeometry();
    fg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    fg.setAttribute('aSeed', new THREE.BufferAttribute(seed, 4));
    fireflies = new THREE.Points(fg, new THREE.ShaderMaterial({
      vertexShader: fireflyVert, fragmentShader: fireflyFrag,
      uniforms: { uTime: U.uTime, uPx: { value: 1 } },
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
    }));
    fireflies.frustumCulled = false;
    group.add(fireflies);
  }

  const astronaut = buildAstronaut(U);
  group.add(astronaut);

  // out-of-focus petals close to the lens (the cream blobs in the corners of the reference)
  const soft = softTexture();
  const petals = [];
  for (const [x, y, z, s, a] of [[-0.36, 0.92, -1.0, 0.17, 0.8], [-0.2, 0.86, -0.9, 0.1, 0.7], [-0.52, 0.88, -1.1, 0.14, 0.75], [0.4, 0.95, -1.0, 0.18, 0.8], [0.24, 0.88, -0.95, 0.1, 0.7], [0.54, 0.85, -0.9, 0.13, 0.75]]) {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({ map: soft, color: new THREE.Color(0.78, 0.70, 0.66), transparent: true, opacity: a * 0.75, depthWrite: false })
    );
    m.position.set(x, y, z); m.scale.setScalar(s);
    group.add(m);
    petals.push(m);
  }

  return {
    group, astronaut,
    bench: () => ({ models: [group], grass: null }),
    build,
    setPx(px) { if (fireflies) fireflies.material.uniforms.uPx.value = px; },
    update(t, camera) {
      const near = camera.position.y < 3;   // the out-of-focus petals only belong to the low, close view
      for (const p of petals) { p.visible = near; p.quaternion.copy(camera.quaternion); }
      astronaut.position.y = Math.sin(t * 0.5) * 0.004;   // breathing
    }
  };
}
