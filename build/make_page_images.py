# -*- coding: utf-8 -*-
"""Make the web sized images the town pages use.

Sources are the largest originals in assets/gallery (the JPGs are bigger than
the WebP copies, so they are the source). Originals are never touched.

Every photo is written at several widths so a phone downloads a small file and
a large screen gets a sharp one; the page picks with srcset. Nothing is ever
upscaled: a width larger than the source is skipped.

Usage:  python build/make_page_images.py
"""
import os, sys

from PIL import Image, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "assets", "gallery")
OUT = os.path.join(ROOT, "assets", "pages")

HERO_WIDTHS = (640, 960, 1200)
WORK_WIDTHS = (560, 840, 1120)

# name, source, aspect (w/h), widths, quality
JOBS = [
    ("hero-gloggnitz",   "porsche-cabrio-finish.jpg",     3 / 2.0, HERO_WIDTHS, 82),
    ("hero-neunkirchen", "ford-transit-cockpit.jpg",      3 / 2.0, HERO_WIDTHS, 82),

    ("work-g1", "porsche-heck.jpg",                       4 / 3.0, WORK_WIDTHS, 80),
    ("work-g2", "lack-reflexion-nahaufnahme.jpg",         4 / 3.0, WORK_WIDTHS, 80),
    ("work-g3", "porsche-cockpit.jpg",                    4 / 3.0, WORK_WIDTHS, 80),

    ("work-n1", "ford-transit-dashboard.jpg",             4 / 3.0, WORK_WIDTHS, 80),
    ("work-n2", "citroen-reflexion.jpg",                  4 / 3.0, WORK_WIDTHS, 80),
    ("work-n3", "aston-martin-rot-exterieur.jpg",         4 / 3.0, WORK_WIDTHS, 80),
]

# decorative backdrop behind the dark hero: softened on purpose, it sits under
# a near solid wash and only adds depth
SOFT = ("hero-bg-soft", "porsche-cabrio-finish.jpg", 16 / 9.0, (720,), 38)
# the shared subpage hero background (galerie and the service pages)
SHARED = ("hero-bg", "porsche-cabrio-finish.jpg", 16 / 9.0, (1200,), 48)


def crop_to(img, ratio):
    """Centre crop to the aspect ratio, keeping as many pixels as possible."""
    sw, sh = img.size
    if sw / float(sh) > ratio:
        nw = int(round(sh * ratio))
        box = ((sw - nw) // 2, 0, (sw - nw) // 2 + nw, sh)
    else:
        nh = int(round(sw / ratio))
        top = int((sh - nh) * 0.42)      # a little above centre: cars sit high
        box = (0, top, sw, top + nh)
    return img.crop(box)


def run(job, soften=False):
    name, src, ratio, widths, q = job
    path = os.path.join(SRC, src)
    if not os.path.exists(path):
        sys.exit("missing source image: " + path)
    base = crop_to(Image.open(path).convert("RGB"), ratio)
    made = []
    for w in widths:
        if w > base.size[0]:
            continue                      # never upscale
        h = int(round(w / ratio))
        img = base.resize((w, h), Image.LANCZOS)
        if soften:
            img = img.filter(ImageFilter.GaussianBlur(1.6))
        suffix = "" if len(widths) == 1 else "-%d" % w
        dst = os.path.join(OUT, name + suffix + ".webp")
        img.save(dst, "WEBP", quality=q, method=6)
        made.append((w, h, os.path.getsize(dst)))
    if not made:
        sys.exit("source too small for any requested width: " + src)
    print("%-18s source %dx%d  ->  %s"
          % (name, base.size[0], base.size[1],
             ", ".join("%dx%d %.0f kB" % (w, h, s / 1024.0) for w, h, s in made)))
    return sum(s for _, _, s in made)


def main():
    if not os.path.isdir(OUT):
        os.makedirs(OUT)
    for old in sorted(os.listdir(OUT)):
        os.remove(os.path.join(OUT, old))   # rebuild cleanly, no stale sizes
    total = 0
    for job in JOBS:
        total += run(job)
    total += run(SOFT, soften=True)
    total += run(SHARED)
    print("\n%.0f kB in assets/pages" % (total / 1024.0))


if __name__ == "__main__":
    main()
