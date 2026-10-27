// GLSL: sky (ray-traced Schwarzschild black hole + lensed stars + sea reflection), grass, ground, embers, final grade.

export const skyVert = /* glsl */ `
void main() {
  gl_Position = vec4(position.xy, 0.9999, 1.0);
}`;

export const skyFrag = /* glsl */ `
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform vec3 uHot;
uniform vec3 uMid;
uniform vec3 uCool;
uniform float uHorizon;
uniform float uStars;

#ifndef STEPS
#define STEPS 240
#endif

// units: Schwarzschild radius rs = 1. Disk spans ISCO (3 rs) to 13 rs. Camera sits 22 rs away.
const float RIN = 3.0;
const float ROUT = 13.0;
const float CAMD = 22.0;
const float TANH = 0.39;     // tan(fov/2): makes the shadow ~0.30 screen units wide

float h21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float h31(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.zyx + 31.32);
  return fract((p.x + p.y) * p.z);
}

// 2D value noise that wraps in x with the given period (no seam around the disk)
float pn(vec2 p, float per) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float x0 = mod(i.x, per), x1 = mod(i.x + 1.0, per);
  float a = h21(vec2(x0, i.y)), b = h21(vec2(x1, i.y));
  float c = h21(vec2(x0, i.y + 1.0)), d = h21(vec2(x1, i.y + 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float pfbm(vec2 p, float per) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * pn(p, per); p *= 2.0; per *= 2.0; a *= 0.5; }
  return v;
}
float vn(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = mix(mix(h31(i), h31(i + vec3(1, 0, 0)), f.x), mix(h31(i + vec3(0, 1, 0)), h31(i + vec3(1, 1, 0)), f.x), f.y);
  float b = mix(mix(h31(i + vec3(0, 0, 1)), h31(i + vec3(1, 0, 1)), f.x), mix(h31(i + vec3(0, 1, 1)), h31(i + vec3(1, 1, 1)), f.x), f.y);
  return mix(a, b, f.z);
}

// the celestial sphere the black hole bends: stars in 3D cells + a faint galactic band
vec3 background(vec3 d) {
  vec3 acc = vec3(0.0);
  float band = exp(-pow(dot(d, normalize(vec3(0.35, 1.0, 0.25))) / 0.20, 2.0));
  for (int L = 0; L < 3; L++) {
    float K = L == 0 ? 60.0 : (L == 1 ? 130.0 : 260.0);
    vec3 g = d * K;
    vec3 id = floor(g);
    vec3 f = fract(g) - 0.5;
    float hh = h31(id + float(L) * 17.0);
    float on = step(0.93 - 0.10 * band, hh);
    vec3 off = (vec3(h31(id + 3.1), h31(id + 5.7), h31(id + 9.3)) - 0.5) * 0.6;
    float dd = length(f - off);
    float tw = 0.7 + 0.3 * sin(uTime * (1.0 + hh * 5.0) + hh * 60.0);
    float s = on * smoothstep(0.11, 0.0, dd) * (0.35 + hh) * tw;
    vec3 tint = mix(vec3(0.75, 0.88, 1.0), vec3(1.0, 0.78, 0.55), h31(id + 9.0));
    acc += tint * s * (L == 0 ? 2.6 : 2.0);
  }
  float neb = vn(d * 4.0) * 0.6 + vn(d * 9.0) * 0.4;
  acc += mix(uCool, uMid, 0.35) * band * (0.25 + neb) * 0.07;
  return acc * uStars;
}

// accretion disk emission at a hit point on the equatorial plane
vec4 diskSample(vec3 hit, vec3 rayDir) {
  float rr = length(hit.xz);
  float edge = smoothstep(RIN, RIN + 0.6, rr) * smoothstep(ROUT, ROUT * 0.5, rr);
  float phi = atan(hit.z, hit.x);
  float omega = 2.6 / (rr * sqrt(rr));                  // Keplerian: inner gas orbits much faster
  float ph = phi - uTime * omega * 0.45;
  float a01 = ph / 6.2831853 + 0.5;
  float coarse = pfbm(vec2(a01 * 6.0, rr * 1.7), 6.0);
  float fine = pfbm(vec2(a01 * 18.0, rr * 7.0), 18.0);
  float turb = 0.25 + 1.5 * smoothstep(0.25, 0.85, coarse * 0.6 + fine * 0.55);

  float T = pow(RIN / rr, 0.75) * 1.3;
  vec3 vdir = normalize(vec3(-hit.z, 0.0, hit.x));      // sense of rotation (approaching side ends up on the left)
  float beta = sqrt(0.5 / rr);
  float cosA = dot(vdir, -rayDir);
  float g = sqrt(1.0 - beta * beta) / (1.0 - beta * cosA) * sqrt(max(1.0 - 1.0 / rr, 0.03));

  float spot = 1.0 + 0.9 * exp(-pow((abs(fract(phi / 6.2831853 - uTime * 0.02 + 0.5) - 0.5)) / 0.06, 2.0));
  float I = pow(T, 2.2) * turb * pow(g, 3.2) * edge * spot * (1.0 + 0.08 * sin(uTime * 0.7));
  float tt = T * g;
  vec3 col = mix(uCool, uMid, smoothstep(0.1, 0.7, tt));
  col = mix(col, uHot, smoothstep(0.8, 1.9, tt));
  float alpha = clamp(edge * (0.30 + 0.55 * turb), 0.0, 0.92);
  return vec4(col * I * 1.0, alpha);
}

// follow one camera ray through the curved space around the hole
vec3 trace(vec2 q) {
  float inc = 0.115 + 0.03 * sin(uTime * 0.09);
  float yaw = sin(uTime * 0.05) * 0.20;
  vec3 ro = CAMD * vec3(sin(yaw) * cos(inc), sin(inc), -cos(yaw) * cos(inc));
  vec3 f = normalize(-ro);
  vec3 rgt = normalize(cross(vec3(0.0, 1.0, 0.0), f));
  vec3 up = cross(f, rgt);
  vec3 rd = normalize(f + (rgt * q.x + up * q.y) * TANH);

  // rays that pass far from the hole only get a weak-field deflection
  vec3 perp = ro - dot(ro, rd) * rd;
  float b = length(perp);
  if (b > 30.0) return background(normalize(rd - normalize(perp) * (2.0 / b)));

  vec3 pos = ro, vel = rd;
  vec3 col = vec3(0.0);
  float trans = 1.0;
  bool swallowed = false;
  for (int i = 0; i < STEPS; i++) {
    float r = length(pos);
    if (r < 1.0) { swallowed = true; break; }
    if (r > 50.0 && dot(pos, vel) > 0.0) break;
    vec3 L = cross(pos, vel);
    float h2 = dot(L, L);
    float dt = clamp(0.045 * r + 0.01, 0.02, 1.2);
    vec3 acc = -1.5 * h2 * pos / (r * r * r * r * r);
    vec3 nv = normalize(vel + acc * dt);
    vec3 np = pos + nv * dt;
    if (pos.y * np.y < 0.0) {
      float t = pos.y / (pos.y - np.y);
      vec3 hit = mix(pos, np, t);
      float rr = length(hit.xz);
      if (rr > RIN * 0.9 && rr < ROUT) {
        vec4 d = diskSample(hit, nv);
        col += trans * d.rgb;
        trans *= 1.0 - d.a;
        if (trans < 0.02) break;
      }
    }
    pos = np; vel = nv;
  }
  if (!swallowed && trans > 0.02) col += trans * background(normalize(vel));
  return col;
}

vec2 holeCenter() {
  return vec2(-0.10, uHorizon + 0.52) + uMouse * 0.012
       + vec2(sin(uTime * 0.11) * 0.03, sin(uTime * 0.07) * 0.01);
}

vec3 meteor(vec2 p) {
  float cyc = uTime / 6.0;
  float id = floor(cyc), ph = fract(cyc);
  float on = step(0.5, h21(vec2(id, 3.0)));
  vec2 st = vec2(mix(-1.3, 1.0, h21(vec2(id, 1.0))), mix(0.15, 0.9, h21(vec2(id, 2.0))));
  vec2 dir = normalize(vec2(1.0, -0.45));
  vec2 rel = p - (st + dir * ph * 1.5);
  float along = dot(rel, -dir);
  float perp = dot(rel, vec2(-dir.y, dir.x));
  float tail = step(0.0, along) * exp(-along * 8.0) * exp(-perp * perp * 90000.0);
  return uHot * tail * 3.0 * on * smoothstep(0.0, 0.08, ph) * smoothstep(0.55, 0.3, ph);
}

vec3 sky(vec2 p) {
  vec2 c = holeCenter();
  vec3 col = uCool * 0.03 * (1.0 - clamp((p.y - uHorizon) * 0.6, 0.0, 1.0));
  col += uMid * 0.12 * exp(-(p.y - uHorizon) / 0.22) * exp(-abs(p.x - c.x) * 0.25);
  col *= smoothstep(0.27, 0.32, length(p - c));   // the shadow stays black
  col += trace(p - c);
  col += meteor(p) * uStars * smoothstep(uHorizon, uHorizon + 0.2, p.y);
  return col;
}

void main() {
  vec2 p = (gl_FragCoord.xy * 2.0 - uRes) / uRes.y;
  vec2 c = holeCenter();
  vec3 col;
  if (p.y >= uHorizon) {
    col = sky(p);
  } else {
    float dy = uHorizon - p.y;
    float rip = pn(vec2(p.x * 2.5 + uTime * 0.2, dy * 70.0 - uTime * 0.6), 1000.0) - 0.5;
    vec2 pm = vec2(p.x + rip * 0.03 * (dy * 8.0 + 0.2), uHorizon + dy);
    float streak = 0.55 + 0.9 * pn(vec2(p.x * 9.0, dy * 140.0 + uTime * 0.4), 1000.0);
    col = sky(pm) * 0.8 * streak + uCool * 0.012;
  }
  col += uMid * exp(-abs(p.y - uHorizon) / 0.0035) * 0.45 * exp(-abs(p.x - c.x) * 0.5);
  gl_FragColor = vec4(col, 1.0);
}`;

export const grassVert = /* glsl */ `
uniform float uTime;
uniform float uWind;
attribute vec3 aInst;   // x, z, seed
varying float vH;
varying float vDepth;
varying float vX;
varying float vSeed;

void main() {
  float hgt = position.y;
  float seed = aInst.z;
  float depth = -aInst.y;
  float height = mix(0.45, 1.15, fract(seed * 7.31));
  float width = 0.03 + depth * 0.011;
  vec3 pos = vec3(aInst.x + position.x * width * (1.0 - hgt), hgt * height, aInst.y);
  float w = sin(uTime * uWind * 1.3 + aInst.x * 0.35 + aInst.y * 0.2 + seed * 6.0) * 0.5
          + sin(uTime * uWind * 2.1 + aInst.x * 0.8 + seed * 11.0) * 0.5;
  float gust = sin(aInst.x * 0.09 - uTime * uWind * 0.9 + aInst.y * 0.05);   // wind front rolling across the field
  pos.x += (w * 0.22 + gust * 0.30) * hgt * hgt;
  pos.z += (w * 0.06 + gust * 0.10) * hgt * hgt;
  vec4 mv = viewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  vH = hgt; vDepth = depth; vX = pos.x; vSeed = seed;
}`;

export const grassFrag = /* glsl */ `
uniform vec3 uHot;
uniform vec3 uMid;
uniform vec3 uCool;
varying float vH;
varying float vDepth;
varying float vX;
varying float vSeed;

void main() {
  float lit = 0.55 + 0.6 * smoothstep(8.0, -30.0, vX);
  float far = smoothstep(3.0, 30.0, vDepth);
  float rim = pow(vH, 1.8) * mix(0.10, 0.9, far * far) * lit;
  vec3 tip = mix(uMid, uHot, smoothstep(0.55, 1.0, vH) * 0.7);
  vec3 col = uCool * 0.05 + tip * rim * (0.7 + 0.6 * fract(vSeed * 13.7));
  col *= mix(0.22, 1.0, smoothstep(2.0, 26.0, vDepth));
  col = mix(col, uMid * 0.10, smoothstep(22.0, 31.0, vDepth) * 0.5);
  gl_FragColor = vec4(col, 1.0);
}`;

export const groundVert = /* glsl */ `
varying float vDepth;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}`;

export const groundFrag = /* glsl */ `
uniform vec3 uMid;
uniform vec3 uCool;
varying float vDepth;
void main() {
  float far = smoothstep(4.0, 30.0, vDepth);
  vec3 col = uCool * 0.03 + uMid * 0.08 * far * far;
  gl_FragColor = vec4(col, 1.0);
}`;

export const emberVert = /* glsl */ `
uniform float uTime;
uniform float uPx;
attribute vec4 aSeed;
varying float vA;
void main() {
  float t = uTime * 0.14 * (0.5 + aSeed.w);
  vec3 p = position;
  p.y = mod(position.y + t * 4.0, 9.0) + 0.2;
  p.x += sin(uTime * 0.5 + aSeed.x * 20.0) * 1.2 + uTime * 0.25 * (0.3 + aSeed.z);
  p.x = mod(p.x + 26.0, 52.0) - 26.0;
  p.z += cos(uTime * 0.4 + aSeed.y * 20.0) * 0.8;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uPx * (0.6 + aSeed.z) / max(-mv.z, 1.0) * 14.0;
  vA = (0.4 + 0.6 * sin(uTime * (1.0 + aSeed.w * 2.0) + aSeed.x * 40.0)) * smoothstep(0.0, 1.5, p.y) * smoothstep(9.2, 6.0, p.y);
}`;

export const emberFrag = /* glsl */ `
uniform vec3 uHot;
varying float vA;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float a = smoothstep(1.0, 0.0, d);
  gl_FragColor = vec4(uHot * 1.6 * a * a * max(vA, 0.0), 1.0);
}`;

export const gradeShader = {
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 } },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    varying vec2 vUv;
    float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 q = vUv - 0.5;
      vec2 ca = q * 0.0035;   // slight chromatic aberration toward the edges
      vec3 c = vec3(texture2D(tDiffuse, vUv + ca).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - ca).b);
      c *= 1.0 - dot(q, q) * 0.9;
      c += (h(vUv * 1000.0 + fract(uTime) * 7.0) - 0.5) * 0.018;
      gl_FragColor = vec4(c, 1.0);
    }`
};
