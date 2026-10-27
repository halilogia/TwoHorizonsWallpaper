// GLSL for the sky (black hole + stars + sea reflection), grass, ground, embers and the final grade.

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

float h21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

// value noise that wraps in x with the given period (so rings have no seam)
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

vec3 holeLight(vec2 p, vec2 c, float R) {
  vec2 d = p - c;
  float r = length(d);
  float up = d.y / max(r, 1e-4);
  // the lensed arch is wider than the shadow: stretch it sideways, keep it round on top
  float sx = mix(0.55, 1.0, smoothstep(0.0, 0.95, up));
  float re = length(vec2(d.x * sx, d.y));
  float rr = (re - R) / R;
  float ang = atan(d.x, d.y);
  float a01 = ang / 6.2831853 + 0.5;
  // approaching side (left) is brighter
  float dop = 0.45 + 1.15 * smoothstep(0.85, -0.85, d.x / max(r, 1e-4));

  float th = mix(0.07, 0.62, smoothstep(-0.4, 0.95, up));
  float arch = step(0.0, rr) * step(R, r) * exp(-rr / th * 1.25) * 1.5;
  arch *= mix(0.10, 1.0, smoothstep(-0.6, 0.3, up));

  // inner strands orbit faster than outer ones (Keplerian-ish shear)
  float flow = uTime * 0.55 / (1.0 + 3.0 * max(rr, 0.0));
  float s = pfbm(vec2(a01 * 7.0 + flow, rr * 30.0 - uTime * 0.12), 7.0);
  float streak = 0.25 + 1.7 * smoothstep(0.22, 0.85, s);
  float I = arch * streak * dop;
  // a hot spot circling the disk + slow breathing
  float da = abs(fract(a01 - uTime * 0.045 + 0.5) - 0.5);
  I *= (1.0 + 1.6 * exp(-da * da * 90.0)) * (1.0 + 0.10 * sin(uTime * 0.7));

  float core = exp(-pow(rr / 0.014, 2.0)) * (0.8 + 2.2 * dop) * smoothstep(-0.15, 0.6, up);
  I += core;

  // thin lensed disk seen edge-on, running out to both sides
  float by = p.y - (c.y - 0.12 * R);
  float bx = abs(p.x - c.x);
  float bw = 0.010 + 0.018 * smoothstep(R, 3.0 * R, bx);
  float band = exp(-pow(by / bw, 2.0)) * exp(-max(bx - R, 0.0) / (2.2 * R)) * step(R, bx) * dop * 1.1;
  band *= 0.5 + 0.9 * pfbm(vec2((p.x - c.x) * 3.0, by * 30.0), 1000.0);
  I += band;

  vec3 col = mix(uCool, uMid, smoothstep(0.0, 0.5, I));
  col = mix(col, uHot, smoothstep(0.6, 2.0, I));
  col *= I;

  col += uMid * 0.16 * exp(-r / (R * 1.7)) * (0.4 + 0.6 * dop);
  col *= smoothstep(R * 0.99, R * 1.005, r);   // the shadow itself stays black
  return col;
}

vec3 starField(vec2 p, vec2 c, float R) {
  vec2 d = p - c;
  float r2 = max(dot(d, d), R * R * 0.6);
  vec2 q = p - d * (R * R / r2) * 0.55;        // gravitational lens pull
  vec3 acc = vec3(0.0);
  for (int L = 0; L < 2; L++) {
    float sc = L == 0 ? 140.0 : 70.0;
    vec2 g = q * sc;
    vec2 id = floor(g);
    vec2 f = fract(g) - 0.5;
    float hh = h21(id + float(L) * 37.0);
    float on = step(0.975 + 0.01 * float(L), hh);
    vec2 off = (vec2(h21(id + 3.1), h21(id + 7.7)) - 0.5) * 0.6;
    float dd = length(f - off);
    float tw = 0.65 + 0.35 * sin(uTime * (1.0 + hh * 4.0) + hh * 50.0);
    float s = on * smoothstep(0.13, 0.0, dd) * tw * (0.5 + hh);
    vec3 tint = mix(vec3(0.8, 0.9, 1.0), vec3(1.0, 0.78, 0.55), h21(id + 9.0));
    acc += tint * s * 3.6;
  }
  return acc * uStars * smoothstep(uHorizon, uHorizon + 0.3, p.y);
}

vec2 holeCenter() {
  return vec2(-0.10, uHorizon + 0.375) + uMouse * 0.012
       + vec2(sin(uTime * 0.11) * 0.035, sin(uTime * 0.07) * 0.012);
}

// an occasional shooting star
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
const float HOLE_R = 0.30;

vec3 sky(vec2 p) {
  vec2 c = holeCenter();
  vec3 col = uCool * 0.035 * (1.0 - clamp((p.y - uHorizon) * 0.6, 0.0, 1.0));
  col += uMid * 0.16 * exp(-(p.y - uHorizon) / 0.22) * exp(-abs(p.x - c.x) * 0.25);
  col += starField(p, c, HOLE_R);
  col += meteor(p) * uStars * smoothstep(uHorizon, uHorizon + 0.2, p.y);
  col *= smoothstep(HOLE_R * 0.99, HOLE_R * 1.005, length(p - c));   // the shadow stays pure black
  col += holeLight(p, c, HOLE_R);
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
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uAspect: { value: 1.78 }, uHole: { value: [0, 0] }, uHoleR: { value: 0.3 } },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uAspect;
    uniform vec2 uHole;
    uniform float uHoleR;
    varying vec2 vUv;
    float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 q = vUv - 0.5;
      vec2 ca = q * 0.0035;   // slight chromatic aberration toward the edges
      vec3 c = vec3(texture2D(tDiffuse, vUv + ca).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - ca).b);
      c *= 1.0 - dot(q, q) * 0.9;
      // bloom must not fill the shadow: keep the event horizon pure black
      vec2 p = vec2((vUv.x * 2.0 - 1.0) * uAspect, vUv.y * 2.0 - 1.0);
      c *= smoothstep(uHoleR * 0.985, uHoleR * 1.0, length(p - uHole));
      c += (h(vUv * 1000.0 + fract(uTime) * 7.0) - 0.5) * 0.018;
      gl_FragColor = vec4(c, 1.0);
    }`
};
