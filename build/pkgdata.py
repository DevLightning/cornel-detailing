# -*- coding: utf-8 -*-
"""Read the `packages` array out of script.js. script.js stays the only place
where package names, prices and service lists are defined."""
import io, json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def load_packages():
    src = io.open(os.path.join(ROOT, "script.js"), encoding="utf-8").read()
    start = src.index("const packages = [")
    end = src.index("\n];", start) + 3
    body = src[start + len("const packages = "):end].rstrip()
    body = body.rstrip(";")
    body = re.sub(r'([{,\[]\s*)([A-Za-z_]\w*)\s*:', r'\1"\2":', body)   # quote keys
    body = re.sub(r',(\s*[}\]])', r'\1', body)                          # trailing commas
    return json.loads(body)

def all_price_strings(pkgs):
    out = set()
    for p in pkgs:
        for v in p["prices"].values():
            out.add(v)
    return out

if __name__ == "__main__":
    pkgs = load_packages()
    print("%d packages" % len(pkgs))
    for p in pkgs:
        print("  %2d  %-45s %-18s %s" % (p["number"], p["title"], p["prices"]["pkw"], p["category"]))
