// GLSL: sky (ray-traced Schwarzschild black hole + lensed stars + water reflection), grass, ground, flowers, embers, final grade.
// The black hole is a fixed object in the world: the sky shader gets the camera rotation and the world direction of the hole,
// so panning / lifting the camera moves hole, horizon, house and field together.

export const skyVert = /* glsl */ `
void main() {
  gl_Position = vec4(position.xy, 0.9999, 1.0);
}`;

export const skyFrag = /* glsl */ `
uniform vec2 uRes;
uniform float uTime;
uniform vec3 uHot;
uniform vec3 uMid;
uniform vec3 uCool;
uniform float uStars;
uniform float uTanh;       // tan(fov/2): the lens (mouse wheel / ruler)
uniform mat3 uCamRot;      // camera -> world rotation
uniform vec3 uHoleDir;     // world direction from the camera to the black hole
uniform float uCamD;       // distance to the hole in Schwarzschild radii
uniform float uInc;        // how far above the disk plane the viewer sits
uniform float uROut;       // outer edge of the accretion disk
uniform float uDopp;       // strength of the Doppler asymmetry
uniform float uGain;       // brightness of the disk
uniform float uSky;        // 0 = night sky (Aurum), 1 = hazy dusk (Viola)
uniform vec3 uSkyTop;
uniform vec3 uSkyLow;
uniform vec3 uBandCol;     // light of the haze lying on the far ground (Viola)

#ifndef STEPS
#define STEPS 240
#endif

uniform float uRIn;        // inner edge of the disk (3 = the innermost stable orbit)
uniform float uRings;      // how many times a ray may cross the disk plane: 1 = only the primary image, no thin photon ring inside the shadow
#define RIN uRIn
const float K0 = 0.245;    // default lens (49 mm): the screen scale the water ripples and meteors were tuned for

vec3 gR; vec3 gU; vec3 gF; // frame attached to the hole: right, up, towards the hole

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
  if (uSky > 0.99) return vec3(0.0);   // Viola: the haze hides the stars
  vec3 acc = vec3(0.0);
  float band = exp(-pow(dot(d, normalize(vec3(0.35, 1.0, 0.25))) / 0.20, 2.0));
  for (int L = 0; L < 3; L++) {
    float K = L == 0 ? 60.0 : (L == 1 ? 130.0 : 260.0);
    vec3 g = d * K;
    vec3 id = floor(g);
    vec3 f = fract(g) - 0.5;
    float hh = h31(id + float(L) * 17.0);
    float on = step(0.90 - 0.10 * band, hh);   // the reference sky is dense with small white stars
    vec3 off = (vec3(h31(id + 3.1), h31(id + 5.7), h31(id + 9.3)) - 0.5) * 0.6;
    float dd = length(f - off);
    float tw = 0.7 + 0.3 * sin(uTime * (1.0 + hh * 5.0) + hh * 60.0);
    float s = on * smoothstep(0.11, 0.0, dd) * (0.35 + hh) * tw;
    vec3 tint = mix(vec3(0.95, 0.95, 1.0), vec3(1.0, 0.84, 0.62), h31(id + 9.0) * 0.6);
    acc += tint * s * (L == 0 ? 2.6 : 2.0);
  }
  // galactic band: layered cloud noise, dark dust lanes and colour drifting between the palette's tones (only evaluated where the band is)
  if (band < 0.02) return acc * uStars * (1.0 - 0.92 * uSky);
  vec3 w = d * 3.0 + vec3(1.7, 4.1, 2.3);
  float neb = vn(w * 1.3 + vn(w * 2.0) * 1.2) * 0.55 + vn(d * 9.0) * 0.3 + vn(d * 22.0) * 0.15;
  float dust = smoothstep(0.52, 0.78, vn(d * 6.5 + 3.0)) * band;
  vec3 tone = mix(uCool * 1.4, uHot, smoothstep(0.3, 0.8, vn(d * 2.2 + 9.0)));
  acc += tone * band * (0.12 + 1.1 * neb * neb) * 0.015 * (1.0 - 0.75 * dust);   // the reference sky is clean black: only a trace of the band, lensed into a faint ring
  return acc * uStars * (1.0 - 0.92 * uSky);
}

// accretion disk emission at a hit point on the equatorial plane
vec4 diskSample(vec3 hit, vec3 rayDir) {
  float rr = clamp(length(hit.xz), 0.5, 30.0);
  float edge = smoothstep(RIN, RIN + 0.6, rr) * smoothstep(uROut, uROut * 0.5, rr);
  float phi = atan(hit.z, hit.x);
  float omega = 2.6 / max(rr * sqrt(rr), 0.05);        // Keplerian: inner gas orbits much faster
  float ph = phi - uTime * omega * 0.45;
  float a01 = fract(ph / 6.2831853 + 0.5);
  float warp = pn(vec2(a01 * 5.0, rr * 1.3), 5.0);
  float coarse = pfbm(vec2(a01 * 6.0 + warp * 0.9, rr * 1.7), 6.0);
  float fine = pfbm(vec2(a01 * 20.0, rr * 9.0), 20.0);
  float fil = pfbm(vec2(a01 * 24.0 + warp, rr * 26.0), 24.0);          // thin strands along the orbit
  float turb = 0.15 + 1.7 * smoothstep(0.22, 0.82, coarse * 0.42 + fine * 0.28 + fil * 0.38);

  float T = pow(clamp(RIN / rr, 0.01, 8.0), 0.75) * 1.3;
  vec2 vxz = vec2(-hit.z, hit.x);
  float lvxz = max(length(vxz), 1e-4);
  vec3 vdir = vec3(vxz.x / lvxz, 0.0, vxz.y / lvxz);
  float beta = clamp(sqrt(max(0.5 / rr, 0.0)) * uDopp, 0.0, 0.92);
  float cosA = clamp(dot(vdir, -rayDir), -1.0, 1.0);
  float g = sqrt(max(1.0 - beta * beta, 0.01)) / max(1.0 - beta * cosA, 0.05) * sqrt(max(1.0 - 1.0 / rr, 0.03));
  g = clamp(g, 0.01, 8.0);

  float spot = 1.0 + 0.9 * exp(-pow((abs(fract(phi / 6.2831853 - uTime * 0.02 + 0.5) - 0.5)) / 0.06, 2.0));
  float I = clamp(pow(T, 2.2) * turb * pow(g, 3.2) * edge * spot * (1.0 + 0.08 * sin(uTime * 0.7)) * uGain, 0.0, 36.0);
  float tt = clamp(T * g, 0.0, 5.0);
  vec3 col = mix(uCool, uMid, smoothstep(0.1, 0.7, tt));
  col = mix(col, uHot, smoothstep(0.8, 1.9, tt));
  float alpha = clamp(edge * (0.30 + 0.55 * turb), 0.0, 0.92);
  return vec4(col * I, alpha);
}

// follow one world-space view ray through the curved space around the hole
vec3 trace(vec3 rdW) {
  vec3 l = vec3(dot(rdW, gR), dot(rdW, gU), dot(rdW, gF));
  if (l.z < 0.12) return background(rdW);
  float ll = max(length(l), 1e-4);
  l = l / ll;

  float inc = uInc + 0.03 * sin(uTime * 0.09);
  float yaw = sin(uTime * 0.05) * 0.20;
  vec3 ro = uCamD * vec3(sin(yaw) * cos(inc), sin(inc), -cos(yaw) * cos(inc));
  vec3 f = normalize(-ro);
  vec3 rgt = normalize(cross(vec3(0.0, 1.0, 0.0), f));
  vec3 up = cross(f, rgt);
  vec3 rd = normalize(rgt * l.x + up * l.y + f * l.z);

  // rays that pass far from the hole only get a weak-field deflection
  vec3 perp = ro - dot(ro, rd) * rd;
  float b = max(length(perp), 1e-3);
  vec3 vel = rd;
  bool swallowed = false;
  vec3 col = vec3(0.0);
  float trans = 1.0;
  float crossings = 0.0;
  if (b > uROut * 1.8 + 6.0) {
    vec3 defl = rd - (perp / b) * (2.0 / b);
    float ldefl = max(length(defl), 1e-4);
    vel = defl / ldefl;
  } else {
    vec3 pos = ro;
    for (int i = 0; i < STEPS; i++) {
      float r = clamp(length(pos), 0.5, 60.0);
      if (r < 1.0) { swallowed = true; break; }
      if (r > 50.0 && dot(pos, vel) > 0.0) break;
      vec3 L = cross(pos, vel);
      float h2 = clamp(dot(L, L), 0.0, 1000.0);
      float dt = clamp(0.055 * r + 0.012, 0.02, 1.2);
      vec3 acc = clamp(-1.5 * h2 * pos / max(r * r * r * r * r, 0.05), vec3(-100.0), vec3(100.0));
      vec3 nvel = vel + acc * dt;
      float lnvel = max(length(nvel), 1e-4);
      vec3 nv = nvel / lnvel;
      vec3 np = pos + nv * dt;
      if (pos.y * np.y < 0.0) {
        float denom = pos.y - np.y;
        float t = abs(denom) > 1e-5 ? clamp(pos.y / denom, 0.0, 1.0) : 0.5;
        vec3 hit = mix(pos, np, t);
        float rr = clamp(length(hit.xz), 0.1, 40.0);
        if (rr > RIN * 0.88 && rr < uROut) {
          crossings += 1.0;
          if (crossings > uRings) break;
          vec4 d = diskSample(hit, nv);
          col += trans * d.rgb;
          trans *= clamp(1.0 - d.a, 0.0, 1.0);
          if (trans < 0.02) break;
        }
      }
      pos = np; vel = nv;
    }
  }
  if (!swallowed && trans > 0.02) {
    vec3 wv = gR * dot(vel, rgt) + gU * dot(vel, up) + gF * dot(vel, f);   // back into world space
    float lwv = max(length(wv), 1e-4);
    vec3 nwv = wv / lwv;
    col += trans * background(nwv);
  }
  return clamp(col, vec3(0.0), vec3(48.0));
}

// fast trace for water reflections: 40 steps, preventing GPU TDR timeouts and context loss
vec3 traceFast(vec3 rdW) {
  vec3 l = vec3(dot(rdW, gR), dot(rdW, gU), dot(rdW, gF));
  if (l.z < 0.12) return background(rdW);
  float ll = max(length(l), 1e-4);
  l = l / ll;

  float inc = uInc + 0.03 * sin(uTime * 0.09);
  float yaw = sin(uTime * 0.05) * 0.20;
  vec3 ro = uCamD * vec3(sin(yaw) * cos(inc), sin(inc), -cos(yaw) * cos(inc));
  vec3 f = normalize(-ro);
  vec3 rgt = normalize(cross(vec3(0.0, 1.0, 0.0), f));
  vec3 up = cross(f, rgt);
  vec3 rd = normalize(rgt * l.x + up * l.y + f * l.z);

  vec3 perp = ro - dot(ro, rd) * rd;
  float b = max(length(perp), 1e-3);
  vec3 vel = rd;
  bool swallowed = false;
  vec3 col = vec3(0.0);
  float trans = 1.0;
  float crossings = 0.0;
  if (b > uROut * 1.8 + 6.0) {
    vec3 defl = rd - (perp / b) * (2.0 / b);
    float ldefl = max(length(defl), 1e-4);
    vel = defl / ldefl;
  } else {
    vec3 pos = ro;
    for (int i = 0; i < 40; i++) {
      float r = clamp(length(pos), 0.5, 50.0);
      if (r < 1.0) { swallowed = true; break; }
      if (r > 45.0 && dot(pos, vel) > 0.0) break;
      vec3 L = cross(pos, vel);
      float h2 = clamp(dot(L, L), 0.0, 800.0);
      float dt = clamp(0.08 * r + 0.02, 0.03, 1.8);
      vec3 acc = clamp(-1.5 * h2 * pos / max(r * r * r * r * r, 0.05), vec3(-80.0), vec3(80.0));
      vec3 nvel = vel + acc * dt;
      float lnvel = max(length(nvel), 1e-4);
      vec3 nv = nvel / lnvel;
      vec3 np = pos + nv * dt;
      if (pos.y * np.y < 0.0) {
        float denom = pos.y - np.y;
        float t = abs(denom) > 1e-5 ? clamp(pos.y / denom, 0.0, 1.0) : 0.5;
        vec3 hit = mix(pos, np, t);
        float rr = clamp(length(hit.xz), 0.1, 35.0);
        if (rr > RIN * 0.88 && rr < uROut) {
          crossings += 1.0;
          if (crossings > uRings) break;
          vec4 d = diskSample(hit, nv);
          col += trans * d.rgb;
          trans *= clamp(1.0 - d.a, 0.0, 1.0);
          if (trans < 0.03) break;
        }
      }
      pos = np; vel = nv;
    }
  }
  if (!swallowed && trans > 0.03) {
    vec3 wv = gR * dot(vel, rgt) + gU * dot(vel, up) + gF * dot(vel, f);
    float lwv = max(length(wv), 1e-4);
    vec3 nwv = wv / lwv;
    col += trans * background(nwv);
  }
  return clamp(col, vec3(0.0), vec3(48.0));
}

// a few meteors crossing the (world-fixed) sky; p is in default-lens screen units
vec3 meteor(vec2 p, float k) {
  float cyc = uTime / (5.0 + k) + k * 0.37;
  float id = floor(cyc), ph = fract(cyc);
  float on = step(0.4, h21(vec2(id, 3.0 + k * 7.0)));
  vec2 st = vec2(mix(-1.6, 1.4, h21(vec2(id, 1.0 + k * 7.0))), mix(0.1, 1.2, h21(vec2(id, 2.0 + k * 7.0))));
  vec2 dir = normalize(vec2(1.0, -0.45));
  vec2 rel = p - (st + dir * ph * 1.5);
  float along = dot(rel, -dir);
  float perp = dot(rel, vec2(-dir.y, dir.x));
  float tail = step(0.0, along) * exp(-along * 8.0) * exp(-perp * perp * 90000.0);
  return uHot * tail * 3.0 * on * smoothstep(0.0, 0.08, ph) * smoothstep(0.55, 0.3, ph);
}

vec3 sky(vec3 d) {
  float hxz = max(length(d.xz), 1e-4);
  float te = d.y / hxz;                      // tan(elevation)
  float eE = te / 0.39;                      // height above the horizon in the units the glows were tuned in
  float lz = dot(d, gF);
  float R = 2.57 / uCamD;                    // tan of the angular radius of the shadow
  vec2 ql = lz > 0.05 ? vec2(dot(d, gR), dot(d, gU)) / lz : vec2(9.0);
  float hx = ql.x / 0.39 * (uCamD / 22.0);

  vec3 night = uCool * 0.03 * (1.0 - clamp(eE * 0.6, 0.0, 1.0));
  night += uMid * 0.34 * exp(-eE / 0.26) * exp(-abs(hx) * 0.22);   // the gold haze that lies on the horizon and runs unbroken into the ground
  night *= smoothstep(0.9 * R, 1.07 * R, length(ql));   // the shadow stays black
  vec3 dusk = mix(uSkyLow, uSkyTop, smoothstep(0.0, 1.4, eE));
  dusk += uBandCol * 0.55 * exp(-eE * 9.0);
  vec3 col = mix(night, dusk, uSky);
  col += trace(d);
  float az = atan(d.x, -d.z);
  vec2 mp = vec2(az, te) / 0.39;
  vec3 met = meteor(mp, 0.0) + meteor(mp + vec2(0.7, 0.2), 2.0) + meteor(mp + vec2(-0.5, -0.1), 4.0);
  col += met * uStars * (1.0 - uSky) * smoothstep(0.0, 0.2, eE);
  return col;
}

vec3 skyFast(vec3 d) {
  float hxz = max(length(d.xz), 1e-4);
  float te = d.y / hxz;
  float eE = te / 0.39;
  float lz = dot(d, gF);
  float R = 2.57 / uCamD;
  vec2 ql = lz > 0.05 ? vec2(dot(d, gR), dot(d, gU)) / lz : vec2(9.0);
  float hx = ql.x / 0.39 * (uCamD / 22.0);

  vec3 night = uCool * 0.03 * (1.0 - clamp(eE * 0.6, 0.0, 1.0));
  night += uMid * 0.34 * exp(-eE / 0.26) * exp(-abs(hx) * 0.22);
  night *= smoothstep(0.9 * R, 1.07 * R, length(ql));
  vec3 dusk = mix(uSkyLow, uSkyTop, smoothstep(0.0, 1.4, eE));
  dusk += uBandCol * 0.55 * exp(-eE * 9.0);
  vec3 col = mix(night, dusk, uSky);
  col += traceFast(d);
  return col;
}

void main() {
  vec2 p = (gl_FragCoord.xy * 2.0 - uRes) / uRes.y;
  vec3 rd = normalize(uCamRot * vec3(p * uTanh, -1.0));
  gF = normalize(uHoleDir);
  gR = normalize(cross(gF, vec3(0.0, 1.0, 0.0)));
  gU = cross(gR, gF);

  float hxz = max(length(rd.xz), 1e-4);
  float te = rd.y / hxz;
  float az = atan(rd.x, -rd.z);
  vec3 col;
  if (rd.y >= 0.0) {
    col = sky(rd);
    col += uMid * exp(-abs(te) / 0.0014) * 0.45 * exp(-abs(dot(rd, gR) / max(dot(rd, gF), 0.05)) * 1.3) * (1.0 - uSky);
  } else {
    float dy = -te / K0;                     // depth below the horizon, in default-lens screen units
    float px = az / K0;
    float rip = pn(vec2(px * 2.5 + uTime * 0.2, dy * 70.0 - uTime * 0.6), 1000.0) - 0.5;
    float streak = 0.55 + 0.9 * pn(vec2(px * 4.0, dy * 200.0 + uTime * 0.4), 1000.0);
    vec3 rm = normalize(vec3(rd.x + rip * 0.012 * (dy * 5.0 + 0.2) * K0, -rd.y, rd.z));
    vec3 refl = vec3(0.0);
    if (dy < 0.65) {
      refl = skyFast(rm);                    // fast 40-step reflection, 100% immune to GPU TDR timeouts
    }
    float sink = exp(-dy * 3.2);
    float hxs = dot(rm, gR) / max(dot(rm, gF), 0.05) / 0.39;
    // Water reflection is concentrated under the black hole on the left
    float holeGlow = exp(-abs(hxs) * 0.85);
    vec3 water = (refl * 0.75 * streak * exp(-dy * 6.0) + uMid * 0.14 * holeGlow * (0.6 + 0.5 * streak)) * sink + uCool * 0.010;
    // glints dancing on the water under the hole
    float gl = pow(pn(vec2(px * 40.0 + uTime * 0.7, dy * 520.0 - uTime * 1.6), 1000.0), 9.0);
    float hxw = dot(rm, gR) / max(dot(rm, gF), 0.05) / 0.39;
    water += mix(uMid, uHot, 0.6) * gl * 3.2 * exp(-abs(hxw) * 2.8) * exp(-dy * 5.0);
    water += uMid * exp(-dy * 160.0) * 0.40 * exp(-abs(hxw) * 0.9);
    // Viola: the far ground is a bright haze lit by the disk, with only a faint reflection of the arc
    vec3 haze = uBandCol * (0.82 + 0.30 * exp(-dy * 2.5)) + refl * 0.10;
    col = mix(water, haze, uSky);
  }
  // Robust IEEE NaN & Inf filter without relying on buggy driver isnan():
  vec3 safeSky = uMid * 0.12 + uCool * 0.02;
  if (!(col.r >= 0.0 && col.r <= 64.0)) col.r = safeSky.r;
  if (!(col.g >= 0.0 && col.g <= 64.0)) col.g = safeSky.g;
  if (!(col.b >= 0.0 && col.b <= 64.0)) col.b = safeSky.b;
  gl_FragColor = vec4(clamp(col, 0.0, 48.0), 1.0);
}`;

export const grassVert = /* glsl */ `
uniform float uTime;
uniform float uWind;
uniform float uWheat;
attribute vec3 aInst;   // x, z, seed
varying float vH;
varying float vDepth;
varying float vX;
varying float vSeed;
varying float vFace;
varying float vGust;

void main() {
  float hgt = position.y;
  float side = position.x;                         // -0.5 .. 0.5 across the blade
  float seed = aInst.z;
  float depth = -aInst.y;
  float yaw = fract(seed * 91.7) * 3.14159;
  vec2 sideDir = vec2(cos(yaw), sin(yaw));
  float tall = step(0.91, fract(seed * 37.1));     // tall seed stalks with plump heads
  float height = mix(0.70, 1.35, fract(seed * 7.31)) * (1.0 + tall * 0.45);

  // Smooth edge fade across outer perimeter: height shrinks to 0 so there are ZERO sharp box edges
  float edgeX = smoothstep(165.0, 120.0, abs(aInst.x));
  float edgeZ = smoothstep(140.0, 105.0, abs(aInst.y + 5.0));
  height *= edgeX * edgeZ;

  float width = clamp(0.026 + depth * 0.00035, 0.024, 0.065) * (1.0 - hgt * 0.85);
  vec3 pos = vec3(aInst.x + sideDir.x * side * width, hgt * height, aInst.y + sideDir.y * side * width);

  // Dynamic sweeping wind waves across the wheat field
  float wave1 = sin(aInst.x * 0.065 + aInst.y * 0.11 - uTime * uWind * 2.4);
  float wave2 = sin(aInst.x * 0.13 - aInst.y * 0.055 - uTime * uWind * 3.6 + seed * 3.14159);
  float gust = wave1 * 0.68 + wave2 * 0.32;
  float flutter = sin(uTime * uWind * 5.0 + seed * 23.1 + aInst.x * 0.85) * 0.22;
  float bend = pow(hgt, 1.75);

  pos.x += (gust * 0.48 + flutter * 0.18 + 0.16) * bend * (1.0 + tall * 0.35);
  pos.z += (gust * 0.28 + flutter * 0.12 + 0.08) * bend;
  pos.y -= (abs(gust) * 0.22 + 0.06) * bend;

  vec4 mv = viewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  vH = hgt; vDepth = length(mv.xyz); vX = pos.x; vSeed = seed; vFace = abs(cos(yaw)); vGust = gust;
}`;
export const grassFrag = /* glsl */ `
uniform vec3 uHot;
uniform vec3 uMid;
uniform vec3 uCool;
varying float vH;
varying float vDepth;
varying float vX;
varying float vSeed;
varying float vFace;
varying float vGust;

void main() {
  float far = smoothstep(6.0, 95.0, vDepth);
  float lit = 0.55 + 0.6 * smoothstep(20.0, -75.0, vX);
  float s = fract(vSeed * 13.7);
  vec3 dry = mix(vec3(0.64, 0.40, 0.10), vec3(0.68, 0.48, 0.15), s);          // rich golden amber straw
  vec3 base = mix(dry * 0.04, dry * 0.25, vH);                                  // dark roots
  float back = pow(vH, 1.5) * mix(0.15, 1.0, far * far) * lit;                  // light shining through the blade
  float trans = 0.55 + 0.9 * vFace;
  vec3 glow = mix(uMid, uHot, smoothstep(0.5, 1.0, vH) * 0.8) * back * trans * (0.7 + 0.7 * s);
  float glint = step(0.96, fract(vSeed * 53.1)) * pow(vH, 2.8) * mix(0.4, 1.8, far);

  // Dynamic golden shimmer as wind ripples compress and tilt the wheat heads
  float sheen = smoothstep(0.35, 0.95, vGust * 0.5 + 0.5) * pow(vH, 2.2) * lit;
  vec3 col = base + glow + uHot * glint * 0.85 + mix(uMid, uHot, 0.75) * sheen * 0.85;

  col *= mix(0.25, 1.0, smoothstep(4.0, 55.0, vDepth));                         // foreground depth
  col = mix(col, uMid * 0.16, smoothstep(60.0, 110.0, vDepth) * 0.65);          // atmospheric blend
  gl_FragColor = vec4(col, 1.0);
}`;
export const groundVert = /* glsl */ `
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`;
export const groundFrag = /* glsl */ `
uniform vec3 uMid;
uniform vec3 uHot;
uniform vec3 uCool;
uniform float uTime;
varying vec3 vW;

float gh21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float gpn(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = gh21(i), b = gh21(i + vec2(1.0, 0.0));
  float c = gh21(i + vec2(0.0, 1.0)), d = gh21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

void main() {
  float vDist = length(vW - cameraPosition);
  float soilNoise = gpn(vW.xz * 0.45);
  vec3 soil = mix(vec3(0.012, 0.007, 0.003), vec3(0.028, 0.016, 0.007), soilNoise);
  soil += uMid * 0.028 * smoothstep(70.0, 10.0, vDist) * (0.4 + soilNoise);
  vec2 cell = floor(vW.xz * vec2(7.0, 4.0));
  float spark = step(0.965, gh21(cell)) * smoothstep(50.0, 5.0, vDist);
  soil += mix(uMid, uHot, 0.6) * spark * (0.5 + 1.1 * gh21(cell + 3.7));

  // Deep contact shadows anchoring the truck and house firmly into the soil
  vec2 dH = abs(vW.xz - vec2(15.5, -62.0));
  vec2 dT = abs(vW.xz - vec2(-3.7, -38.0));
  float houseShadow = 1.0 - smoothstep(0.0, 3.5, max(dH.x - 8.5, 0.0) + max(dH.y - 5.8, 0.0));
  float truckShadow = 1.0 - smoothstep(0.0, 2.5, max(dT.x - 3.4, 0.0) + max(dT.y - 1.6, 0.0));
  soil *= clamp(1.0 - 0.88 * houseShadow - 0.88 * truckShadow, 0.06, 1.0);

  // Under the farm on the right, ground is solid opaque earth; under the hole on the left, it blends to water reflection
  float waterMask = smoothstep(10.0, -25.0, vW.x) * smoothstep(12.0, 55.0, vDist);
  float alpha = clamp(1.0 - waterMask * 0.85, 0.15, 1.0);
  gl_FragColor = vec4(soil, alpha);
}`;


// ---- Viola: lavender field ------------------------------------------------
// one flower = a thin stalk plus a low-poly dome (position.xyz is the dome's own unit-sphere coordinate; aPart = 1 for the head)
export const flowerVert = /* glsl */ `
uniform float uTime;
attribute vec3 aInst;    // x, z, seed
attribute float aPart;
varying vec3 vN;
varying float vSeed;
varying float vDist;
varying float vPart;
varying float vTop;

void main() {
  float seed = aInst.z;
  float h = mix(0.22, 0.52, fract(seed * 7.31));
  float s = mix(0.03, 0.058, fract(seed * 3.7));
  vec3 base = vec3(aInst.x, 0.0, aInst.y);
  float w = sin(uTime * 1.1 + aInst.x * 0.5 + aInst.y * 0.3 + seed * 6.0) * 0.5 + sin(uTime * 1.9 + aInst.x * 0.9 + seed * 11.0) * 0.5;
  float gust = sin(aInst.x * 0.11 - uTime * 0.8 + aInst.y * 0.06);
  vec2 lean = vec2(w * 0.05 + gust * 0.09, w * 0.02 + gust * 0.03);
  vec3 pos;
  if (aPart > 0.5) {
    vec3 q = position;
    q.y *= 0.75;
    pos = base + vec3(lean.x, h, lean.y) + q * s;
    vN = normalize(position * vec3(1.0, 1.3, 1.0));
  } else {
    float k = position.y;                          // 0 at the ground, 1 at the head
    pos = base + vec3(lean.x * k * k + position.x * 0.012, h * k, lean.y * k * k);
    vN = vec3(0.0, 1.0, 0.0);
  }
  vec4 mv = viewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  vSeed = seed; vDist = length(mv.xyz); vPart = aPart; vTop = pos.y;
}`;

export const flowerFrag = /* glsl */ `
uniform float uTime;
uniform vec3 uBandCol;
uniform float uFogD;
varying vec3 vN;
varying float vSeed;
varying float vDist;
varying float vPart;
varying float vTop;

void main() {
  // the instanced flowers dissolve into the carpet of the ground shader with distance (ordered dither), so the field has no visible edge
  float dn = 26.0 + 2.2 * uFogD * 0.1;
  if (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) < smoothstep(dn * 0.65, dn, vDist)) discard;
  float s = fract(vSeed * 13.7);
  vec3 vio = mix(vec3(0.045, 0.018, 0.17), vec3(0.14, 0.065, 0.40), s);
  vec3 col;
  if (vPart > 0.5) {
    float up = clamp(vN.y, 0.0, 1.0);
    float rim = pow(1.0 - abs(vN.z), 2.0) * 0.5;
    col = vio * (0.30 + 0.60 * up + 0.30 * max(-vN.z, 0.0)) + vec3(0.20, 0.14, 0.34) * rim * up * 0.5;
    // pollen glitter: a gold speck on the crown of some flowers, flickering like a firefly
    float on = step(0.45, fract(vSeed * 91.3));
    float tw = 0.5 + 0.5 * sin(uTime * (0.8 + s * 2.4) + vSeed * 80.0);
    col += vec3(2.2, 1.35, 0.35) * on * smoothstep(0.70, 0.95, vN.y) * (0.35 + 0.9 * tw);
  } else {
    col = vec3(0.035, 0.018, 0.08) * (0.4 + vTop);
  }
  col *= mix(0.55, 1.0, smoothstep(0.0, 0.5, vTop));              // shade between the flowers
  float fog = smoothstep(uFogD * 0.50, uFogD, vDist);
  col = mix(col, uBandCol * 0.92, fog * fog);
  gl_FragColor = vec4(col, 1.0);
}`;

export const violaGroundVert = /* glsl */ `
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`;

// the far field: the flowers become a violet speckled carpet, then dissolve into the haze
export const violaGroundFrag = /* glsl */ `
uniform float uTime;
uniform vec3 uBandCol;
uniform float uFogD;
varying vec3 vW;
float h21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
vec3 layer(vec2 c, float k) {
  vec2 id = floor(c);
  vec2 f = fract(c) - 0.5;
  float hh = h21(id + k);
  vec2 off = (vec2(h21(id + 3.0 + k), h21(id + 7.0 + k)) - 0.5) * 0.7;
  float blob = smoothstep(0.62, 0.12, length(f - off));
  vec3 vio = mix(vec3(0.04, 0.016, 0.15), vec3(0.15, 0.07, 0.40), hh);
  vec3 col = vio * blob;
  float spark = step(0.95, h21(id + 11.0 + k)) * smoothstep(0.34, 0.0, length(f - off));
  float tw = 0.5 + 0.5 * sin(uTime * (0.8 + hh * 2.0) + hh * 80.0);
  col += vec3(2.4, 1.6, 0.5) * spark * (0.3 + 0.9 * tw);
  return col;
}
void main() {
  float vDist = length(vW - cameraPosition);
  float sc = 9.0 * exp(-0.05 * max(vDist - 8.0, 0.0)) + 1.6;   // coarser cells with distance, so the far field stays a speckle instead of a flat colour
  vec2 c = vW.xz * sc;
  mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
  vec3 col = vec3(0.03, 0.02, 0.09) + layer(c, 0.0) + layer(rot * c * 1.37 + 17.0, 5.0) * 0.6;
  float avg = smoothstep(40.0, 140.0, vDist) * 0.5;
  col = mix(col, vec3(0.065, 0.03, 0.20) + vec3(1.6, 1.1, 0.4) * 0.014, avg);
  float fog = smoothstep(uFogD * 0.50, uFogD, vDist);
  col = mix(col, uBandCol * 0.92, fog * fog);
  gl_FragColor = vec4(col, 1.0);
}`;

// golden fireflies drifting between the flowers
export const fireflyVert = /* glsl */ `
uniform float uTime;
uniform float uPx;
attribute vec4 aSeed;
varying float vA;
void main() {
  vec3 p = position;
  p.x += sin(uTime * 0.35 + aSeed.x * 30.0) * 1.2;
  p.y = 0.25 + fract(position.y * 0.37 + uTime * 0.012 * (0.4 + aSeed.w)) * 1.8 + sin(uTime * 0.6 + aSeed.y * 20.0) * 0.12;
  p.z += cos(uTime * 0.3 + aSeed.z * 30.0) * 1.0;
  vec4 mv = viewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uPx * (0.9 + aSeed.w) * clamp(40.0 / max(-mv.z, 1.0), 2.0, 16.0);
  vA = pow(0.5 + 0.5 * sin(uTime * (0.7 + aSeed.w * 1.6) + aSeed.x * 60.0), 2.0) * smoothstep(120.0, 20.0, -mv.z);
}`;

export const fireflyFrag = /* glsl */ `
varying float vA;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float a = smoothstep(1.0, 0.0, d);
  gl_FragColor = vec4(vec3(2.4, 1.55, 0.5) * a * a * vA, 1.0);
}`;

// silhouettes: near-black bodies with a warm Fresnel rim, as if lit from behind by the hole
export const rimVert = /* glsl */ `
varying vec3 vN;
varying vec3 vV;
varying vec3 vW;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vN = normalize(normalMatrix * normal);
  vV = normalize(-mv.xyz);
  vW = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * mv;
}`;

export const rimFrag = /* glsl */ `
uniform vec3 uHot;
uniform vec3 uMid;
uniform vec3 uBase;
uniform float uRim;
varying vec3 vN;
varying vec3 vV;
varying vec3 vW;
void main() {
  float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
  float rim = pow(f, 3.6);
  float side = 0.55 + 0.6 * smoothstep(25.0, -35.0, vW.x);   // the left of the frame sits closer to the bright disk side
  float top = 0.7 + 0.5 * smoothstep(0.0, 6.0, vW.y);
  vec3 col = uBase + mix(uMid, uHot, 0.2) * rim * 1.1 * side * top * uRim;
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
  p.x = mod(p.x + 60.0, 120.0) - 60.0;
  p.z += cos(uTime * 0.4 + aSeed.y * 20.0) * 0.8;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uPx * (0.6 + aSeed.z) * clamp(70.0 / max(-mv.z, 1.0), 1.0, 14.0);
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

export const smokeVert = /* glsl */ `
uniform float uTime;
uniform float uPx;
attribute float aSeed;
varying float vA;
void main() {
  float life = fract(uTime * 0.06 + aSeed);
  vec3 p = position;
  p.y += life * 10.0;
  p.x += life * life * 9.0 + sin(life * 6.0 + aSeed * 20.0) * 0.5 * life;
  p.z += sin(aSeed * 30.0) * 0.4 * life;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uPx * 3900.0 * (0.6 + 3.0 * life) / max(-mv.z, 1.0);
  vA = smoothstep(0.0, 0.12, life) * (1.0 - life) * 0.55;
}`;

export const smokeFrag = /* glsl */ `
varying float vA;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float a = smoothstep(1.0, 0.0, d);
  gl_FragColor = vec4(vec3(0.03, 0.018, 0.011), a * a * vA);
}`;

export const gradeShader = {
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uTexel: { value: [1 / 1920, 1 / 1080] }, uHoleUV: { value: [0.5, 0.7] }, uRays: { value: 1.0 }, uFade: { value: 0 }, uHaze: { value: 0 } },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uTexel;
    uniform vec2 uHoleUV;
    uniform float uRays;
    uniform float uFade;
    uniform float uHaze;
    varying vec2 vUv;
    float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 q = vUv - 0.5;
      vec2 ca = q * 0.0035;   // slight chromatic aberration toward the edges
      vec3 c0 = texture2D(tDiffuse, vUv).rgb;
      float cr = texture2D(tDiffuse, vUv + ca).r;
      float cg = c0.g;
      float cb = texture2D(tDiffuse, vUv - ca).b;
      vec3 c = vec3(cr, cg, cb);
      if (!(c.r >= 0.0 && c.r <= 12.0)) c.r = 0.02;
      if (!(c.g >= 0.0 && c.g <= 12.0)) c.g = 0.015;
      if (!(c.b >= 0.0 && c.b <= 12.0)) c.b = 0.010;

      // anamorphic lens streak: bright pixels smear sideways with a cool tint
      vec3 streak = vec3(0.0);
      for (int i = -16; i <= 16; i++) {
        float fi = float(i);
        vec3 s = texture2D(tDiffuse, vUv + vec2(fi * uTexel.x * 5.0, 0.0)).rgb;
        if (s.r >= 0.0 && s.r <= 8.0 && s.g >= 0.0 && s.b >= 0.0) {
          streak += max(s - 0.82, 0.0) * exp(-abs(fi) * 0.16);
        }
      }
      c += streak * vec3(0.35, 0.55, 1.0) * 0.16 * (1.0 - 0.6 * uHaze);

      // crepuscular rays: bright light marched toward the hole
      vec3 rays = vec3(0.0);
      float decay = 1.0;
      for (int k = 0; k < 24; k++) {
        vec2 sp = clamp(mix(vUv, uHoleUV, float(k) / 24.0 * 0.6), 0.001, 0.999);
        vec3 samp = texture2D(tDiffuse, sp).rgb;
        if (samp.r >= 0.0 && samp.r <= 8.0 && samp.g >= 0.0 && samp.b >= 0.0) {
          rays += max(samp - 0.86, 0.0) * decay;
        }
        decay *= 0.93;
      }
      c += rays * 0.032 * uRays * (1.0 - 0.7 * uHaze);
      c *= 1.0 - dot(q, q) * 0.9;
      c += (h(vUv * 1000.0 + fract(uTime) * 7.0) - 0.5) * 0.018;
      c *= 1.0 - clamp(uFade, 0.0, 1.0);
      c = clamp(c, 0.0, 1.0);
      gl_FragColor = vec4(c, 1.0);
    }`
};
