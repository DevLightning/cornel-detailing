# -*- coding: utf-8 -*-
"""Reads the projects array out of script.js (the single source of truth)."""
import io, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))   # the site folder, one above build/


def projects():
    js = io.open(os.path.join(ROOT, "script.js"), encoding="utf-8").read()
    start = js.index("const projects = [")
    end = js.index("];", start)
    block = js[start:end]
    out = []
    for obj in re.findall(r"\{(.*?)\}", block, re.S):
        d = {}
        for k, v in re.findall(r'(\w+):\s*"((?:[^"\\]|\\.)*)"', obj):
            d[k] = v
        d["featured"] = "featured: true" in obj
        if "slug" in d:
            out.append(d)
    return out


def vehicle(p):
    words = p["title"].strip().split()
    return " ".join(words[:2]) if len(words) > 1 else ""


def ordered(ps):
    first = {}
    for i, p in enumerate(ps):
        k = vehicle(p) or p["slug"]
        first.setdefault(k, i)
    return [p for _, _, p in sorted(((first[vehicle(p) or p["slug"]], i, p) for i, p in enumerate(ps)), key=lambda t: (t[0], t[1]))]


if __name__ == "__main__":
    ps = projects()
    print(len(ps), "photos")
    for p in ordered(ps):
        print("%-34s %-26s %-24s %-10s %s" % (p["slug"], p["title"], p["label"], p["category"], vehicle(p)))
    print("vehicles:", sorted(set(vehicle(p) for p in ps if vehicle(p))))
    print("categories:", sorted(set(p["category"] for p in ps)))
