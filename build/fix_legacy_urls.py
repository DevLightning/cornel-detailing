# -*- coding: utf-8 -*-
"""Remove the old 'wuerflach' location from every URL, anchor id and link.

Renames three pages, rewrites the references in every HTML/XML file, and leaves
the redirects to vercel.json / .htaccess (written separately).
"""
import io, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

RENAMES = {
    "innenreinigung-wuerflach.html": "innenreinigung-gloggnitz.html",
    "autopflege-tipps-winter-wuerflach.html": "autopflege-tipps-winter-gloggnitz.html",
    "fahrzeugaufbereitung-wuerflach-wichtig.html": "fahrzeugaufbereitung-gloggnitz-wichtig.html",
}

# Applied in order; the first is more specific than the generic rule below.
REPLACEMENTS = [
    ("standort-wuerflach-neunkirchen", "standort-enzenreith-gloggnitz"),
    ("wuerflach", "gloggnitz"),
]

def read(p):
    with io.open(p, "r", encoding="utf-8") as f:
        return f.read()

def write(p, s):
    with io.open(p, "w", encoding="utf-8", newline="") as f:
        f.write(s)

def main():
    # 1. rename the files
    for old, new in RENAMES.items():
        src, dst = os.path.join(ROOT, old), os.path.join(ROOT, new)
        if os.path.exists(src):
            write(dst, read(src))
            os.remove(src)
            print("renamed  %s -> %s" % (old, new))
        elif os.path.exists(dst):
            print("already  %s" % new)
        else:
            print("MISSING  %s" % old)
            return 1

    # 2. rewrite references
    targets = [f for f in os.listdir(ROOT)
               if f.endswith((".html", ".xml", ".txt")) or f == ".htaccess"]
    changed = 0
    for name in sorted(targets):
        p = os.path.join(ROOT, name)
        s = read(p)
        before = s
        for old, new in REPLACEMENTS:
            s = s.replace(old, new)
        if s != before:
            write(p, s)
            changed += 1
            print("rewrote  %s" % name)
    print("files rewritten: %d" % changed)
    return 0

if __name__ == "__main__":
    sys.exit(main())
