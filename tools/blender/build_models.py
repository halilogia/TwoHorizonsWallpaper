"""Builds house.glb, truck.glb and windmill.glb through Blender Copilot's MCP bridge.

  blender --background --python "<Blender Copilot>/tools/serve_mcp_headless.py" -- --port 6592 --token <T> --export-dir <repo>/assets/models
  BLENDER_MCP_TOKEN=<T> python tools/blender/build_models.py house|truck|windmill
"""
import sys, math, json
import os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mcp_client as mcp

MATS = {
    "wall": dict(base_color=[0.72, 0.66, 0.56], roughness=0.9),
    "roof": dict(base_color=[0.22, 0.17, 0.16], roughness=0.95),
    "trim": dict(base_color=[0.82, 0.8, 0.76], roughness=0.8),
    "door": dict(base_color=[0.32, 0.2, 0.14], roughness=0.8),
    "paint": dict(base_color=[0.45, 0.12, 0.09], roughness=0.45, metallic=0.2),
    "tire": dict(base_color=[0.03, 0.03, 0.03], roughness=0.95),
    "chrome": dict(base_color=[0.7, 0.7, 0.72], roughness=0.25, metallic=1.0),
    "dark": dict(base_color=[0.05, 0.05, 0.05], roughness=0.8),
    "glass": dict(base_color=[0.05, 0.05, 0.05], emission_color=[1.0, 0.55, 0.18], emission_strength=6.0),
}
objs = []


def mesh(name, verts, faces, mat):
    r = mcp.call("create_mesh", {"name": name, "vertices": verts, "faces": faces})
    if not r.get("success"):
        raise SystemExit("create_mesh failed: %s %s" % (name, json.dumps(r)[:300]))
    nm = r["data"]["object_name"]
    s = mcp.call("set_material", dict(object_name=nm, material_name=mat, **MATS[mat]))
    if not s.get("success"):
        raise SystemExit("set_material failed: %s" % json.dumps(s)[:300])
    objs.append(nm)
    return nm


def box(name, x0, x1, y0, y1, z0, z1, mat):
    v = [[x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0], [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]]
    f = [[0, 3, 2, 1], [4, 5, 6, 7], [0, 1, 5, 4], [1, 2, 6, 5], [2, 3, 7, 6], [3, 0, 4, 7]]
    return mesh(name, v, f, mat)


def prism(name, poly, axis, a0, a1, mat):
    """poly: list of 2D points. axis 'y': points are (x, z) extruded along y. axis 'x': points are (y, z) extruded along x."""
    n = len(poly)
    v = []
    for (p, q) in poly:
        v.append([p, a0, q] if axis == "y" else [a0, p, q])
    for (p, q) in poly:
        v.append([p, a1, q] if axis == "y" else [a1, p, q])
    f = [list(range(n)), list(range(2 * n - 1, n - 1, -1))]
    for i in range(n):
        j = (i + 1) % n
        f.append([i, j, n + j, n + i])
    return mesh(name, v, f, mat)


def cyl(name, cx, cy, cz, r, length, n, mat):
    """axis along y"""
    v, f = [], []
    for k in range(n):
        a = 2 * math.pi * k / n
        x, z = cx + r * math.cos(a), cz + r * math.sin(a)
        v.append([x, cy - length / 2, z])
        v.append([x, cy + length / 2, z])
    c0, c1 = len(v), len(v) + 1
    v.append([cx, cy - length / 2, cz])
    v.append([cx, cy + length / 2, cz])
    for k in range(n):
        j = (k + 1) % n
        f.append([2 * k, 2 * j, 2 * j + 1, 2 * k + 1])
        f.append([c0, 2 * j, 2 * k])          # cap, y-
        f.append([c1, 2 * k + 1, 2 * j + 1])  # cap, y+
    return mesh(name, v, f, mat)


def finish(group, export_name, new_name):
    target = group[0]
    r = mcp.call("join_objects", {"object_names": group, "target_name": target, "new_name": new_name})
    print("join:", json.dumps(r)[:200])
    r = mcp.call("mesh_edit", {"object_name": new_name, "operation": "RECALC_NORMALS"})
    print("normals:", json.dumps(r)[:200])
    r = mcp.call("export_gltf", {"object_names": [new_name], "filename": export_name, "y_up": True})
    print("export:", json.dumps(r)[:400])


def build_house():
    start = len(objs)
    FY = -1.7  # front wall plane
    box("h_found", -2.7, 4.4, -1.8, 1.8, -0.1, 0.3, "trim")
    box("h_body", -2.6, 2.0, -1.7, 1.7, 0.0, 2.6, "wall")
    prism("h_roof", [(-3.0, 2.5), (2.4, 2.5), (-0.3, 4.5)], "y", -2.15, 2.15, "roof")
    box("h_wing", 2.0, 4.3, -1.4, 1.4, 0.0, 2.0, "wall")
    prism("h_wingroof", [(-1.8, 1.95), (1.8, 1.95), (0.0, 3.3)], "x", 1.75, 4.65, "roof")
    box("h_chim", -1.85, -1.35, 0.0, 0.5, 3.0, 5.0, "wall")
    box("h_chimcap", -1.93, -1.27, -0.08, 0.58, 5.0, 5.1, "trim")
    # porch
    box("h_pfloor", -2.45, 0.35, -2.7, -1.7, 0.0, 0.25, "trim")
    for i, x in enumerate((-2.35, 0.25)):
        box("h_ppost%d" % i, x - 0.07, x + 0.07, -2.65, -2.51, 0.25, 2.25, "trim")
    prism("h_proof", [(-1.7, 2.55), (-2.9, 2.1), (-2.9, 2.25), (-1.7, 2.7)], "x", -2.6, 0.5, "roof")
    box("h_step1", -1.25, -0.35, -3.0, -2.7, 0.0, 0.12, "trim")
    box("h_step2", -1.25, -0.35, -2.85, -2.7, 0.12, 0.2, "trim")
    box("h_door", -1.2, -0.5, -1.745, -1.7, 0.25, 2.05, "door")
    # windows on the front wall: glass + frame bars
    def window(prefix, cx, z0, z1, y, w=0.6):
        x0, x1 = cx - w / 2, cx + w / 2
        box(prefix + "_g", x0, x1, y - 0.03, y, z0, z1, "glass")
        t = 0.05
        box(prefix + "_t", x0 - t, x1 + t, y - 0.06, y - 0.02, z1, z1 + t, "trim")
        box(prefix + "_b", x0 - t * 2, x1 + t * 2, y - 0.08, y - 0.02, z0 - t, z0, "trim")
        box(prefix + "_l", x0 - t, x0, y - 0.06, y - 0.02, z0, z1, "trim")
        box(prefix + "_r", x1, x1 + t, y - 0.06, y - 0.02, z0, z1, "trim")
        box(prefix + "_m", cx - 0.02, cx + 0.02, y - 0.06, y - 0.02, z0, z1, "trim")
        box(prefix + "_h", x0, x1, y - 0.06, y - 0.02, (z0 + z1) / 2 - 0.02, (z0 + z1) / 2 + 0.02, "trim")
    window("w1", -2.0, 1.1, 2.1, FY)
    window("w2", 0.45, 1.1, 2.1, FY)
    window("w3", 1.45, 1.1, 2.1, FY)
    window("w4", 3.15, 0.85, 1.65, -1.4)
    window("wa", -0.3, 2.95, 3.65, -2.17, 0.5)
    return objs[start:]


def tool(tool_name, **args):
    r = mcp.call(tool_name, args)
    if not r.get("success"):
        raise SystemExit("%s failed: %s" % (tool_name, json.dumps(r)[:300]))
    return r["data"]["object_name"]


def paint(obj, mat):
    r = mcp.call("set_material", dict(object_name=obj, material_name=mat, **MATS[mat]))
    if not r.get("success"):
        raise SystemExit("set_material failed: %s" % json.dumps(r)[:300])
    objs.append(obj)
    return obj


def ext(name, profile, axis, a0, a1, mat, taper=1.0):
    return paint(tool("create_extrusion", name=name, profile=profile, axis=axis, start=a0, end=a1, taper=taper), mat)


def slab(name, x0, x1, y0, y1, z0, z1, mat):
    return ext(name, [[x0, y0], [x1, y0], [x1, y1], [x0, y1]], "Z", z0, z1, mat)


def bar(name, p0, p1, w, t, mat, shape="BOX", **kw):
    return paint(tool("create_beam", name=name, start=p0, end=p1, width=w, thickness=t, shape=shape, **kw), mat)


def build_house2():
    """Farmhouse v2, built with create_extrusion / create_beam (Blender Copilot): bigger windows with panes and shutters,
    dormer, porch with railing and a lantern, tapered chimney, fascia boards."""
    start = len(objs)
    FY = -1.7
    slab("h_found", -2.7, 4.4, -1.8, 1.8, -0.1, 0.3, "trim")
    slab("h_body", -2.6, 2.0, -1.7, 1.7, 0.0, 2.6, "wall")
    ext("h_roof", [[-3.05, 2.5], [2.45, 2.5], [-0.3, 4.6]], "Y", -2.2, 2.2, "roof")
    ext("h_fascia", [[-3.1, 2.46], [2.5, 2.46], [2.45, 2.56], [-3.05, 2.56]], "Y", -2.25, 2.25, "trim")
    slab("h_wing", 2.0, 4.3, -1.4, 1.4, 0.0, 2.0, "wall")
    ext("h_wingroof", [[-1.85, 1.95], [1.85, 1.95], [0.0, 3.35]], "X", 1.7, 4.7, "roof")
    # chimney: tapered stack with a cap
    ext("h_chim", [[-1.85, 0.0], [-1.35, 0.0], [-1.35, 0.5], [-1.85, 0.5]], "Z", 3.0, 5.0, "wall", taper=0.9)
    slab("h_chimcap", -1.95, -1.25, -0.1, 0.6, 5.0, 5.12, "trim")
    # porch: deck, posts, rail with balusters, slanted roof, steps, lantern
    slab("h_pfloor", -2.5, 0.4, -2.75, -1.7, 0.0, 0.25, "trim")
    for i, x in enumerate((-2.4, 0.3)):
        bar("h_ppost%d" % i, [x, -2.68, 0.25], [x, -2.68, 2.3], 0.16, 0.16, "trim")
    bar("h_prail", [-2.4, -2.68, 1.0], [0.3, -2.68, 1.0], 0.07, 0.1, "trim")
    for i in range(9):
        x = -2.3 + i * 0.3
        if -1.35 < x < -0.4:
            continue    # the steps are here
        bar("h_bal%d" % i, [x, -2.68, 0.25], [x, -2.68, 1.0], 0.05, 0.05, "trim")
    ext("h_proof", [[-1.7, 2.6], [-2.95, 2.12], [-2.95, 2.27], [-1.7, 2.75]], "X", -2.65, 0.55, "roof")
    slab("h_step1", -1.3, -0.4, -3.05, -2.7, 0.0, 0.12, "trim")
    slab("h_step2", -1.3, -0.4, -2.9, -2.7, 0.12, 0.2, "trim")
    slab("h_lamp", -0.35, -0.2, -2.74, -2.62, 1.7, 1.95, "glass")
    slab("h_door", -1.25, -0.45, -1.76, -1.7, 0.25, 2.1, "door")
    # windows: glass, frame, mullions and shutters
    def window(prefix, cx, z0, z1, y, w=0.78, shutters=True):
        x0, x1 = cx - w / 2, cx + w / 2
        slab(prefix + "_g", x0, x1, y - 0.03, y, z0, z1, "glass")
        t = 0.06
        slab(prefix + "_t", x0 - t, x1 + t, y - 0.07, y - 0.02, z1, z1 + t, "trim")
        slab(prefix + "_b", x0 - 2 * t, x1 + 2 * t, y - 0.1, y - 0.02, z0 - t, z0, "trim")
        slab(prefix + "_l", x0 - t, x0, y - 0.07, y - 0.02, z0, z1, "trim")
        slab(prefix + "_r", x1, x1 + t, y - 0.07, y - 0.02, z0, z1, "trim")
        slab(prefix + "_m", cx - 0.02, cx + 0.02, y - 0.07, y - 0.02, z0, z1, "trim")
        for k in (1, 2):
            zz = z0 + (z1 - z0) * k / 3
            slab(prefix + "_h%d" % k, x0, x1, y - 0.07, y - 0.02, zz - 0.02, zz + 0.02, "trim")
        if shutters:
            slab(prefix + "_sl", x0 - t - 0.34, x0 - t - 0.04, y - 0.06, y - 0.02, z0 - t, z1 + t, "door")
            slab(prefix + "_sr", x1 + t + 0.04, x1 + t + 0.34, y - 0.06, y - 0.02, z0 - t, z1 + t, "door")
    window("w1", -2.0, 0.95, 2.15, FY)
    window("w2", 0.55, 0.95, 2.15, FY)
    window("w3", 1.5, 0.95, 2.15, FY, shutters=False)
    window("w4", 3.15, 0.8, 1.7, -1.4, w=0.7)
    window("wa", -0.3, 2.95, 3.75, -2.23, w=0.6, shutters=False)
    return objs[start:]


def build_truck():
    start = len(objs)
    prism("t_body", [(-2.6, 0.5), (2.72, 0.5), (2.78, 0.95), (2.65, 1.18), (1.3, 1.25), (-0.45, 1.25), (-0.45, 1.0), (-2.6, 1.0)], "y", -0.95, 0.95, "paint")
    prism("t_cab", [(-0.45, 1.25), (1.45, 1.25), (1.0, 2.08), (0.75, 2.3), (-0.2, 2.3), (-0.45, 1.95)], "y", -0.85, 0.85, "paint")
    for s, nm in ((1, "r"), (-1, "l")):
        y0, y1 = (0.86, 0.95) if s > 0 else (-0.95, -0.86)
        box("t_bed_" + nm, -2.6, -0.5, y0, y1, 1.0, 1.48, "paint")
    box("t_bedfront", -0.55, -0.45, -0.95, 0.95, 1.0, 1.48, "paint")
    box("t_tailgate", -2.64, -2.58, -0.95, 0.95, 1.0, 1.5, "paint")
    prism("t_wind", [(1.43, 1.32), (1.46, 1.33), (1.05, 2.07), (1.02, 2.05)], "y", -0.72, 0.72, "dark")
    for nm, (y0, y1) in (("r", (0.855, 0.875)), ("l", (-0.875, -0.855))):
        prism("t_sidewin_" + nm, [(-0.3, 1.55), (1.0, 1.55), (0.84, 2.08), (0.68, 2.22), (-0.2, 2.22), (-0.3, 1.95)], "y", y0, y1, "dark")
    box("t_rearwin", -0.47, -0.44, -0.6, 0.6, 1.65, 2.15, "dark")
    for k, (x, y) in enumerate(((-1.65, 0.82), (-1.65, -0.82), (1.75, 0.82), (1.75, -0.82))):
        cyl("t_tire%d" % k, x, y, 0.46, 0.46, 0.32, 18, "tire")
        cyl("t_hub%d" % k, x, y + (0.02 if y > 0 else -0.02), 0.46, 0.22, 0.32, 12, "chrome")
    box("t_fbump", 2.74, 2.92, -0.9, 0.9, 0.52, 0.82, "chrome")
    box("t_rbump", -2.76, -2.62, -0.9, 0.9, 0.52, 0.76, "chrome")
    for s, nm in ((1, "r"), (-1, "l")):
        y0, y1 = (0.5, 0.82) if s > 0 else (-0.82, -0.5)
        box("t_head_" + nm, 2.7, 2.79, y0, y1, 0.85, 1.05, "glass")
        yy0, yy1 = (0.7, 0.9) if s > 0 else (-0.9, -0.7)
        box("t_tail_" + nm, -2.67, -2.6, yy0, yy1, 0.78, 0.9, "glass")
        mx = 0.98 if s > 0 else -1.08
        box("t_mirror_" + nm, 1.12, 1.2, mx, mx + 0.1, 1.7, 1.95, "dark")
        sy0, sy1 = (0.93, 1.07) if s > 0 else (-1.07, -0.93)
        box("t_step_" + nm, -0.2, 1.2, sy0, sy1, 0.55, 0.62, "dark")
    box("t_grille", 2.77, 2.82, -0.42, 0.42, 0.6, 0.95, "dark")
    return objs[start:]


def beam(name, p0, p1, w, t, ref, mat):
    """a rectangular beam between two points; width along cross(d, ref), thickness along the other axis"""
    d = [p1[i] - p0[i] for i in range(3)]
    L = math.sqrt(sum(c * c for c in d)); d = [c / L for c in d]
    def cross(a, b): return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
    def norm(a):
        n = math.sqrt(sum(c * c for c in a)); return [c / n for c in a]
    side = norm(cross(d, ref)); nrm = norm(cross(side, d))
    v = []
    for p in (p0, p1):
        for sw in (-1, 1):
            for sn in (-1, 1):
                v.append([p[i] + side[i] * w / 2 * sw + nrm[i] * t / 2 * sn for i in range(3)])
    # vertex order per end: (-,-) (-,+) (+,-) (+,+)
    f = [[0, 1, 3, 2], [4, 6, 7, 5], [0, 4, 5, 1], [2, 3, 7, 6], [0, 2, 6, 4], [1, 5, 7, 3]]
    return mesh(name, v, f, mat)


def build_windmill():
    UP = [0, 0, 1]
    start = len(objs)
    base, top, H = 1.35, 0.5, 9.0
    corners = [(1, 1), (-1, 1), (-1, -1), (1, -1)]
    def leg(c, h):
        k = h / H
        return [c[0] * (base + (top - base) * k), c[1] * (base + (top - base) * k), h]
    for i, c in enumerate(corners):
        beam("w_leg%d" % i, leg(c, 0), leg(c, H), 0.15, 0.15, [1, 0, 0.3], "dark")
    levels = [0.0, 2.25, 4.5, 6.75, 9.0]
    for fi in range(4):
        a, b = corners[fi], corners[(fi + 1) % 4]
        for li, h in enumerate(levels[1:], 1):
            beam("w_h%d_%d" % (fi, li), leg(a, h), leg(b, h), 0.08, 0.08, UP, "dark")
        for li in range(len(levels) - 1):
            h0, h1 = levels[li], levels[li + 1]
            beam("w_dx%d_%d" % (fi, li), leg(a, h0), leg(b, h1), 0.05, 0.05, UP, "dark")
            beam("w_dy%d_%d" % (fi, li), leg(b, h0), leg(a, h1), 0.05, 0.05, UP, "dark")
    box("w_platform", -0.7, 0.7, -0.7, 0.7, 9.0, 9.14, "dark")
    box("w_head", -0.3, 0.3, -0.6, 0.7, 9.2, 9.8, "dark")
    beam("w_boom", [0, 0.6, 9.5], [0, 3.7, 9.5], 0.1, 0.1, UP, "dark")
    prism("w_vane", [(3.3, 9.0), (4.5, 9.0), (4.7, 10.2), (3.5, 10.4)], "x", -0.025, 0.025, "dark")
    body = objs[start:]
    r0 = len(objs)
    cx, cy, cz = 0.0, -0.75, 9.5
    cyl("r_hub", cx, cy, cz, 0.28, 0.34, 14, "dark")
    N = 18
    for k in range(N):
        a = 2 * math.pi * k / N
        pa = [cx + 0.3 * math.cos(a), cy, cz + 0.3 * math.sin(a)]
        pb = [cx + 2.7 * math.cos(a), cy, cz + 2.7 * math.sin(a)]
        beam("r_blade%d" % k, pa, pb, 0.34, 0.035, [0, 1, 0], "dark")
    for rr in (1.55, 2.7):
        for k in range(N):
            a0, a1 = 2 * math.pi * k / N, 2 * math.pi * (k + 1) / N
            pa = [cx + rr * math.cos(a0), cy, cz + rr * math.sin(a0)]
            pb = [cx + rr * math.cos(a1), cy, cz + rr * math.sin(a1)]
            beam("r_ring%d_%d" % (int(rr * 10), k), pa, pb, 0.07, 0.06, [0, 1, 0], "dark")
    return body, objs[r0:]


if __name__ == "__main__":
    which = sys.argv[1]
    if which == "house":
        g = build_house()
        finish(g, "house.glb", "FarmHouse")
    elif which == "house2":
        g = build_house2()
        finish(g, "house.glb", "FarmHouse2")
    elif which == "truck":
        g = build_truck()
        finish(g, "truck.glb", "PickupTruckB")
    elif which == "windmill":
        body, rotor = build_windmill()
        for grp, nm in ((body, "WindBodyZ"), (rotor, "WindRotorZ")):
            print(json.dumps(mcp.call("join_objects", {"object_names": grp, "target_name": grp[0], "new_name": nm}))[:120])
            print(json.dumps(mcp.call("mesh_edit", {"object_name": nm, "operation": "RECALC_NORMALS"}))[:80])
        print(json.dumps(mcp.call("set_origin", {"object_name": "WindRotorZ", "mode": "BOUNDS_CENTER"}))[:200])
        r = mcp.call("export_gltf", {"object_names": ["WindBodyZ", "WindRotorZ"], "filename": "windmill.glb", "y_up": True, "recenter": False})
        print(json.dumps(r)[:400])
