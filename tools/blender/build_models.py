"""Builds house.glb and pickup truck.glb through Blender Copilot's MCP bridge.

  blender --background --python "<Blender Copilot>/tools/serve_mcp_headless.py" -- --port 6592 --token <T> --export-dir <repo>/assets/models
  BLENDER_MCP_TOKEN=<T> python tools/blender/build_models.py house
  BLENDER_MCP_TOKEN=<T> python tools/blender/build_models.py truck
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


if __name__ == "__main__":
    which = sys.argv[1]
    if which == "house":
        g = build_house()
        finish(g, "house.glb", "FarmHouse")
    elif which == "truck":
        g = build_truck()
        finish(g, "truck.glb", "PickupTruckB")
