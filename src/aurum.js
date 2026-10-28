import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import houseGlb from '../assets/models/house.glb';
import truckGlb from '../assets/models/truck.glb';
import {
  groundVert, groundFrag, grassVert, grassFrag, rimVert, rimFrag, emberVert, emberFrag, smokeVert, smokeFrag
} from './shaders.js';

// Scene I: Aurum, the amber farm. Everything is 1 unit = 1 metre.
export const AURUM = {
  id: 'aurum',
  name: 'Aurum', tagline: 'The last farm before the event horizon',
  hot: [1.00, 0.85, 0.52], mid: [1.00, 0.48, 0.12], cool: [0.52, 0.14, 0.03],
  camD: 18.0, inc: 0.10, rOut: 8.4, dopp: 1.05, gain: 1.1, sky: 0,
  skyTop: [0, 0, 0], skyLow: [0, 0, 0], band: [0, 0, 0],
  // camera rig measured off the reference video (frames 020-028), see rigAt() in app.js:
  // [alt on the HUD (m), lens on the ruler (mm), horizon height on screen, camera y (m), camera z (m, dolly back), yaw bias (rad), lens the camera really uses (mm), camera x (m)].
  // Frame 025 (107 mm): truck 38 m ahead, house front 54 m, camera looks 0.085 rad right of the hole; frame 023: house 170 m away, camera 8.5 m up.
  rig: [
    [1.9, 107, -0.353, 1.9, 0, 0.085, 107, 0],
    [2.75, 55, -0.59, 1.9, 33, 0.04, 63, -4],
    [4.05, 39, -0.57, 5.3, 104, 0, 44, 0],
    [13, 29, -0.52, 7.5, 108, 0, 39, 0],
    [20, 26, -0.52, 8.0, 108, 0, 37, 0],
    [32, 23, -0.54, 8.5, 106, 0, 35, 0]
  ],
  altMin: 1.9, altMax: 32, yawMax: 0.18,
  alt: 4.05, hs0: -0.57, hs1: -0.36, dolly: 0, mm: 39, holeAz: -0.04, holeEl: 0.078,
  bloom: 0.65, bloomRadius: 0.35, exposure: 0.92
};

export function createAurum(U) {
  const aurum = new THREE.Group();

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(1600, 900).rotateX(-Math.PI / 2).translate(0, -0.01, -300),   // rich dark amber soil blending smoothly with water reflection
    new THREE.ShaderMaterial({ vertexShader: groundVert, fragmentShader: groundFrag, uniforms: U, transparent: true, depthWrite: true })
  );
  ground.renderOrder = -1;
  aurum.add(ground);

  // where the farm stands, measured off the reference: truck 38 m and house front 54 m from the close-up camera (frame 025)
  const TRUCK_AT = new THREE.Vector3(-3.7, -0.06, -38);
  const HOUSE_AT = new THREE.Vector3(15.5, -0.04, -62);

  /** @type {THREE.Mesh | null} */
  let grass = null;
  function buildGrass(count) {
    if (grass) { aurum.remove(grass); grass.geometry.dispose(); }
    const base = new THREE.InstancedBufferGeometry();
    const rows = 4, pos = [], idx = [];
    for (let r = 0; r < rows; r++) pos.push(-0.5, r / rows, 0, 0.5, r / rows, 0);
    pos.push(0, 1, 0);
    for (let r = 0; r < rows - 1; r++) { const a = r * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    const t = (rows - 1) * 2; idx.push(t, t + 1, rows * 2);
    base.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    base.setIndex(idx);
    const inst = new Float32Array(count * 3);
    // Continuous dense golden wheat field: rich foreground stalks across the camera, surrounding the truck and house,
    // and reaching deep into the distance with an organic radial distribution (zero straight cutoffs).
    for (let i = 0; i < count; i++) {
      const rz = Math.random();
      let z;
      if (rz < 0.28) {
        // Foreground in front of close camera (+25m down to -10m)
        z = 25.0 - 35.0 * (rz / 0.28);
      } else if (rz < 0.68) {
        // Midground around truck and house (-10m down to -75m)
        z = -10.0 - 65.0 * ((rz - 0.28) / 0.40);
      } else if (rz < 0.88) {
        // Background behind house (-75m down to -135m)
        z = -75.0 - 60.0 * ((rz - 0.68) / 0.20);
      } else {
        // Elevated wide camera foreground (+25m up to +125m) so from alt=32m camZ=106m the foreground is carpeted!
        z = 25.0 + 100.0 * ((rz - 0.88) / 0.12);
      }
      const depth = Math.abs(z - 15.0);
      const spread = 75.0 + depth * 0.65;
      const rx = (Math.random() - 0.5) * 2.0;
      const x = Math.sign(rx) * Math.pow(Math.abs(rx), 0.92) * spread;

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
  const windowMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.6, 1.15, 0.3), toneMapped: false });   // warm lamplight that keeps its mullions (the reference windows are not blown out)

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
  truck.rotation.y = 0.12;
  attachModel(truck, truckGlb, 0.85, (g) => {
    const beam = lightPool(6, 3, new THREE.Color(1.0, 0.85, 0.6), 1.0);   // headlight spill on the grass
    beam.position.set(-5.2, 0.05, 0);
    g.add(beam);
  });

  /** @type {THREE.Points | null} */
  let smoke = null;
  const farm = new THREE.Group();
  farm.position.copy(HOUSE_AT);
  farm.rotation.y = -0.03;
  attachModel(farm, houseGlb, 1.5, (g, root) => {
    const pool = lightPool(13, 7, new THREE.Color(1.0, 0.55, 0.18), 1.2);   // window light on the yard
    pool.position.set(0, 0.05, 6.5);
    g.add(pool);
    const dog = buildDog();
    dog.position.set(-5.4, 0.36, 3.6);   // at the left end of the porch, in front of the wall so it reads against the glow
    dog.scale.setScalar(0.85);
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

  return {
    group: aurum,
    bench: () => ({ models: [truck, farm], grass }),
    build(q) { buildGrass(q.grass); buildEmbers(q.embers); },
    setPx(px) {
      if (embers) embers.material.uniforms.uPx.value = px;
      if (smoke) smoke.material.uniforms.uPx.value = px;
    },
    update(t) {
      const fl = 0.92 + 0.08 * Math.sin(t * 7.0) * Math.sin(t * 3.1);   // lamplight flicker
      windowMat.color.setRGB(2.6 * fl, 1.15 * fl, 0.3 * fl);
    }
  };
}
