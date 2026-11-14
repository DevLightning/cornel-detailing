# -*- coding: utf-8 -*-
"""Fill every "ab € ..." price outside the package list from the packages array.

A price in the hero or on a service card is a copy of a number that lives in
script.js. Typed by hand it goes stale the day a price changes. So those
places only carry a marker:

    <span data-price="min">€ 49,-</span>            lowest PKW price of all packages
    <strong data-price="min:innen">€ 139,-</strong>  lowest PKW price of one category
    <span data-price="pkg:9">€ 499,-</span>          PKW price of one package

and this script writes the text between the tags.

    python build/gen_price_marks.py           rewrite all pages
    python build/gen_price_marks.py --check   change nothing, fail if a page is stale
"""
import glob, io, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from pkgdata import ROOT, load_packages

CATEGORY = {"aussen": u"Außen", "innen": "Innen", "politur": "Politur",
            "versiegelung": "Versiegelung", "premium": "Premium"}
MARK = re.compile(r'(<(span|strong)\b[^>]*\bdata-price="([^"]+)"[^>]*>)(.*?)(</\2>)', re.S)


def amount(price):
    return int(re.sub(r"[^\d]", "", price))


def resolve(key, pkgs):
    if key == "min":
        pool = pkgs
    elif key.startswith("min:"):
        cat = CATEGORY[key[4:]]
        pool = [p for p in pkgs if p["category"] == cat]
    elif key.startswith("pkg:"):
        pool = [p for p in pkgs if p["number"] == int(key[4:])]
    else:
        raise KeyError(key)
    if not pool:
        raise KeyError(key)
    return min(pool, key=lambda p: amount(p["prices"]["pkw"]))["prices"]["pkw"]


def process(path, pkgs, write):
    src = io.open(path, encoding="utf-8", newline="").read()
    stale = []

    def sub(m):
        want = resolve(m.group(3), pkgs)
        if m.group(4) != want:
            stale.append((m.group(3), m.group(4), want))
        return m.group(1) + want + m.group(5)

    out = MARK.sub(sub, src)
    n = len(MARK.findall(src))
    if write and out != src:
        io.open(path, "w", encoding="utf-8", newline="").write(out)
    return n, stale


def main():
    check = "--check" in sys.argv
    pkgs = load_packages()
    total, bad = 0, 0
    for path in sorted(glob.glob(os.path.join(ROOT, "*.html"))):
        n, stale = process(path, pkgs, write=not check)
        total += n
        for key, have, want in stale:
            bad += 1
            print("  %s: %s shows %r, packages say %r" % (os.path.basename(path), key, have, want))
    if check:
        print("price marks: %d checked, %d stale" % (total, bad))
        sys.exit(1 if bad else 0)
    print("price marks: %d written (%d were stale)" % (total, bad))


if __name__ == "__main__":
    main()
