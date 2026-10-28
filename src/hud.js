// HUD overlay: title (top left), telemetry (bottom left), lens ruler (right edge), scene menu (bottom centre).
// Only the ruler and the menu take mouse input; everything else lets the pointer through to the wallpaper.

const MONO = "'JetBrains Mono','Cascadia Mono',Consolas,monospace";
const SERIF = "'Cormorant Garamond','Iowan Old Style','Palatino Linotype',Georgia,serif";
const LENS_TICKS = [[23, 0], [26, 0.155], [34, 0.384], [49, 0.613], [70, 0.806], [107, 1]];   // focal length (mm) -> position on the ruler

function mmToFrac(mm) {
  const t = LENS_TICKS;
  if (mm <= t[0][0]) return 0;
  for (let i = 1; i < t.length; i++) {
    if (mm <= t[i][0]) return t[i - 1][1] + (t[i][1] - t[i - 1][1]) * (mm - t[i - 1][0]) / (t[i][0] - t[i - 1][0]);
  }
  return 1;
}
function fracToMm(f) {
  const t = LENS_TICKS;
  for (let i = 1; i < t.length; i++) {
    if (f <= t[i][1]) return t[i - 1][0] + (t[i][0] - t[i - 1][0]) * (f - t[i - 1][1]) / (t[i][1] - t[i - 1][1]);
  }
  return t[t.length - 1][0];
}

function el(parent, css, text, tag = 'div') {
  const e = document.createElement(tag);
  e.style.cssText = css;
  if (text !== undefined) e.textContent = text;
  parent.appendChild(e);
  return e;
}

// api: { scenes: [{ id, name, tagline }], onScene(id), onLens(mm) }
export function createHud(api) {
  const root = el(document.body, `position:fixed;inset:0;pointer-events:none;display:none;font:10px/1.7 ${MONO};letter-spacing:.16em;color:rgba(255,236,214,.86);text-shadow:0 0 10px rgba(0,0,0,.55);user-select:none;-webkit-user-select:none`);

  // corner brackets
  for (const [a, b] of [['left', 'top'], ['right', 'top'], ['left', 'bottom'], ['right', 'bottom']]) {
    el(root, `position:absolute;${a}:22px;${b}:22px;width:12px;height:12px;border:0 solid rgba(255,236,214,.28);border-${a}-width:1px;border-${b}-width:1px`);
  }

  // title
  const head = el(root, 'position:absolute;left:40px;top:38px');
  el(head, 'font-size:9px;letter-spacing:.34em;opacity:.55', 'TWO HORIZONS');
  const title = el(head, `font:400 34px/1.15 ${SERIF};letter-spacing:.01em;margin-top:2px;color:rgba(255,244,230,.96)`, '');
  const tagline = el(head, 'font-size:9.5px;letter-spacing:.1em;opacity:.55;margin-top:6px;max-width:190px;line-height:1.5', '');

  // telemetry
  const data = el(root, 'position:absolute;left:40px;bottom:36px;white-space:pre;font-size:9.5px;opacity:.9');
  const dim = 'opacity:.5';
  const rowA = el(data, '');
  const lab = (t) => el(rowA, dim + ';margin-right:.6em', t, 'span');
  lab('ALT'); const vAlt = el(rowA, 'margin-right:1.6em', '', 'span');
  lab('HORIZON'); const vHor = el(rowA, '', '', 'span'); el(rowA, 'font-size:.75em;margin-left:.2em;opacity:.6', 'Rs', 'span');
  const rowB = el(data, '');
  const lab2 = (t) => el(rowB, dim + ';margin-right:.6em', t, 'span');
  lab2('T'); const vTime = el(rowB, 'margin-right:1.6em', '', 'span');
  const vFps = el(rowB, '', '', 'span');

  // lens ruler
  const ruler = el(root, 'position:absolute;right:30px;top:30%;height:40%;width:78px;pointer-events:auto;cursor:ns-resize;touch-action:none');
  el(ruler, 'position:absolute;right:0;top:0;bottom:0;width:1px;background:linear-gradient(to bottom,transparent,rgba(255,236,214,.45) 12%,rgba(255,236,214,.45) 88%,transparent)');
  const tickEls = LENS_TICKS.map(([mm, f]) => {
    const t = el(ruler, `position:absolute;right:8px;top:${f * 100}%;transform:translateY(-50%);font-size:8px;opacity:.4;transition:opacity .2s`, String(mm));
    el(ruler, `position:absolute;right:0;top:${f * 100}%;width:4px;height:1px;background:rgba(255,236,214,.4)`);
    return t;
  });
  const thumb = el(ruler, 'position:absolute;right:-4px;top:0;width:9px;height:9px;margin-top:-4.5px;border:1px solid rgba(255,244,230,.95);border-radius:50%;box-shadow:0 0 8px rgba(255,200,140,.5)');
  const thumbLabel = el(ruler, 'position:absolute;right:18px;top:0;transform:translateY(-50%);font-size:9px;white-space:nowrap');
  let draggingLens = false;
  const lensFromEvent = (e) => {
    const r = ruler.getBoundingClientRect();
    api.onLens(fracToMm(Math.min(1, Math.max(0, (e.clientY - r.top) / r.height))));
  };
  ruler.addEventListener('pointerdown', (e) => { draggingLens = true; ruler.setPointerCapture?.(e.pointerId); lensFromEvent(e); e.stopPropagation(); });
  ruler.addEventListener('pointermove', (e) => { if (draggingLens) { lensFromEvent(e); e.stopPropagation(); } });
  const endLens = (e) => { draggingLens = false; ruler.releasePointerCapture?.(e.pointerId); };
  ruler.addEventListener('pointerup', endLens);
  ruler.addEventListener('pointercancel', endLens);
  for (const t of ['mousedown', 'dblclick']) ruler.addEventListener(t, (e) => e.stopPropagation());

  // scene menu: I Aurum ---- II Viola
  const menu = el(root, 'position:absolute;left:50%;bottom:30px;transform:translateX(-50%);display:flex;align-items:baseline;gap:26px;white-space:nowrap');
  const items = {};
  if (api.scenes.length < 2) menu.style.display = 'none';   // a single-scene page has nothing to switch to
  api.scenes.forEach((s, i) => {
    if (i > 0) el(menu, 'width:46px;height:1px;background:rgba(255,236,214,.22);align-self:center');
    const b = el(menu, `pointer-events:auto;cursor:pointer;display:flex;align-items:baseline;gap:8px;padding:6px 4px;transition:opacity .35s,color .35s`);
    el(b, 'font-size:7px;letter-spacing:.1em', ['I', 'II', 'III'][i], 'span');
    el(b, `font:400 17px ${SERIF};letter-spacing:.06em`, s.name, 'span');
    const bar = el(b, 'position:absolute;left:8px;right:8px;bottom:0;height:1px;background:rgba(255,236,214,.7);transition:opacity .35s');
    b.style.position = 'relative';
    b.addEventListener('click', (e) => { e.stopPropagation(); api.onScene(s.id); });
    for (const t of ['mousedown', 'pointerdown', 'dblclick']) b.addEventListener(t, (e) => e.stopPropagation());
    items[s.id] = { b, bar };
  });

  const pad2 = (n) => String(n).padStart(2, '0');
  const state = { scene: '', mm: -1, last: 0 };
  return {
    show(on) { root.style.display = on ? 'block' : 'none'; },
    get visible() { return root.style.display !== 'none'; },
    update(s) {
      if (s.scene !== state.scene) {
        state.scene = s.scene;
        const def = api.scenes.find((x) => x.id === s.scene);
        title.textContent = def.name;
        tagline.textContent = def.tagline;
        for (const id in items) {
          const on = id === s.scene;
          items[id].b.style.opacity = on ? '1' : '.38';
          items[id].bar.style.opacity = on ? '1' : '0';
        }
      }
      const f = mmToFrac(s.mm);
      thumb.style.top = f * 100 + '%';
      thumbLabel.style.top = f * 100 + '%';
      thumbLabel.textContent = Math.round(s.mm) + ' mm';
      tickEls.forEach((t, i) => { t.style.opacity = Math.abs(LENS_TICKS[i][1] - f) < 0.07 ? '0' : '.4'; });
      if (s.t - state.last < 0.2) return;
      state.last = s.t;
      vAlt.textContent = s.alt.toFixed(s.alt < 10 ? 2 : 1) + ' M';
      vHor.textContent = s.dist.toFixed(1);
      const sec = Math.floor(s.t);
      vTime.textContent = `00:${pad2(Math.floor(sec / 60) % 60)}:${pad2(sec % 60)}`;
      vFps.textContent = `${s.fps} FPS · ${s.scale}%`;
    }
  };
}
