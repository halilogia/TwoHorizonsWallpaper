import json, sys, urllib.request

URL = "http://127.0.0.1:6592/mcp"
import os
TOKEN = os.environ["BLENDER_MCP_TOKEN"]  # same value you pass to serve_mcp_headless.py --token
_id = [0]


def rpc(method, params=None):
    _id[0] += 1
    body = json.dumps({"jsonrpc": "2.0", "id": _id[0], "method": method, "params": params or {}}).encode()
    req = urllib.request.Request(URL, data=body, headers={"Authorization": "Bearer " + TOKEN, "Content-Type": "application/json", "Accept": "application/json, text/event-stream"})
    with urllib.request.urlopen(req, timeout=120) as r:
        return json.loads(r.read().decode())


def call(name, args=None):
    res = rpc("tools/call", {"name": name, "arguments": args or {}})
    if "error" in res:
        return {"ERROR": res["error"]}
    r = res.get("result", {})
    sc = r.get("structuredContent")
    if sc is not None:
        return sc
    out = []
    for c in r.get("content", []):
        if c.get("type") == "text":
            out.append(c["text"])
    return "\n".join(out) or r


if __name__ == "__main__":
    if sys.argv[1] == "list":
        res = rpc("tools/list")
        print(json.dumps([t["name"] for t in res.get("result", {}).get("tools", [])] or res)[:3000])
    else:
        print(json.dumps(call(sys.argv[1], json.loads(sys.argv[2]) if len(sys.argv) > 2 else {}), indent=1)[:4000])
