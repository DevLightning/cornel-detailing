# -*- coding: utf-8 -*-
"""Make the small, web-sized images the town pages use.

Sources are the full size gallery photos; the originals are never touched.
Output goes to assets/pages/ as WebP, sized for how the pages actually display
them, so a town page stays light.

Usage:  python build/make_page_images.py
"""
import os, sys

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "assets", "gallery")
OUT = os.path.join(ROOT, "assets", "pages")

# name, source, target width, target height, quality
JOBS = [
    # hero photos (3:2)
    ("hero-gloggnitz",   "porsche-cabrio-finish.webp",     960, 640, 74),
    ("hero-neunkirchen", "ford-transit-cockpit.webp",      960, 640, 74),
    # proof photos (4:3)
    ("work-g1", "porsche-heck.webp",                       760, 570, 72),
    ("work-g2", "lack-reflexion-nahaufnahme.webp",         760, 570, 72),
    ("work-g3", "porsche-cockpit.webp",                    760, 570, 72),
    ("work-n1", "ford-transit-dashboard.webp",             760, 570, 72),
    ("work-n2", "citroen-reflexion.webp",                  760, 570, 72),
    ("work-n3", "audi-rs3-exterieur-heck.webp",            692, 519, 74),
    # decorative hero background, shown at 10% opacity on every subpage
    ("hero-bg", "porsche-cabrio-finish.webp",             1280, 720, 48),
    # the town hero backdrop sits under a near solid wash, so it is tiny
    # and softened on purpose: nobody can see the detail, it only adds depth
    ("hero-bg-soft", "porsche-cabrio-finish.webp",         720, 405, 38),
]


def cover(img, w, h):
    """Centre crop to the target ratio, then resize."""
    sw, sh = img.size
    target = w / float(h)
    if sw / float(sh) > target:          # source too wide: trim left/right
        nw = int(round(sh * target))
        box = ((sw - nw) // 2, 0, (sw - nw) // 2 + nw, sh)
    else:                                # source too tall: trim top/bottom
        nh = int(round(sw / target))
        top = int((sh - nh) * 0.42)      # slightly above centre: cars sit high
        box = (0, top, sw, top + nh)
    return img.crop(box).resize((w, h), Image.LANCZOS)


def main():
    if not os.path.isdir(OUT):
        os.makedirs(OUT)
    total_in = total_out = 0
    for name, src, w, h, q in JOBS:
        s = os.path.join(SRC, src)
        if not os.path.exists(s):
            sys.exit("missing source image: " + s)
        img = Image.open(s).convert("RGB")
        dst = os.path.join(OUT, name + ".webp")
        out = cover(img, w, h)
        if name.endswith("-soft"):
            from PIL import ImageFilter
            out = out.filter(ImageFilter.GaussianBlur(1.6))
        out.save(dst, "WEBP", quality=q, method=6)
        a, b = os.path.getsize(s), os.path.getsize(dst)
        total_in += a
        total_out += b
        print("%-18s %4dx%-4d  %6.1f kB  (source %6.1f kB)" % (name, w, h, b / 1024.0, a / 1024.0))
    print("\n%d images, %.0f kB total (sources were %.0f kB)"
          % (len(JOBS), total_out / 1024.0, total_in / 1024.0))


if __name__ == "__main__":
    main()
