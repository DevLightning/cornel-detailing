# -*- coding: utf-8 -*-
"""Make the web sized images the town pages use.

Output goes into assets/gallery/ with a "p-" prefix, NOT into a new folder:
the site's upload carries existing folders but has twice failed to carry a
newly created one, so these files live where the other images already are.

Sources are the largest originals in assets/gallery (the JPGs are bigger than
the WebP copies). Originals are never touched. Two widths per photo, picked by
the page with srcset. Nothing is upscaled.

Usage:  python build/make_page_images.py
"""
import os, sys

from PIL import Image, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GALLERY = os.path.join(ROOT, "assets", "gallery")
PREFIX = "p-"

HERO = (640, 1200)
CARD = (560, 1120)

# name, source, aspect (w/h), widths, quality
JOBS = [
    # one hero per town page
    ("hero-gloggnitz",   "porsche-cabrio-finish.jpg",  3 / 2.0, HERO, 82),
    ("hero-neunkirchen", "ford-transit-cockpit.jpg",   3 / 2.0, HERO, 82),
    # the four service cards, shared by both town pages
    ("aussen",           "mercedes-vito-exterieur.jpg", 4 / 3.0, CARD, 80),
    ("innen",            "porsche-cockpit.jpg",         4 / 3.0, CARD, 80),
    ("politur",          "lack-reflexion-nahaufnahme.jpg", 4 / 3.0, CARD, 80),
    ("versiegelung",     "aston-martin-rot-exterieur.jpg", 4 / 3.0, CARD, 80),
]

# backdrop behind the dark town hero: softened on purpose, it sits under a
# near solid wash and only adds depth
SOFT = ("hero-bg-soft", "porsche-cabrio-finish.jpg", 16 / 9.0, (720,), 38)
# the shared subpage hero background (galerie and the service pages)
SHARED = ("hero-bg", "porsche-cabrio-finish.jpg", 16 / 9.0, (1200,), 48)


def crop_to(img, ratio):
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
    path = os.path.join(GALLERY, src)
    if not os.path.exists(path):
        sys.exit("missing source image: " + path)
    base = crop_to(Image.open(path).convert("RGB"), ratio)
    made = []
    for w in widths:
        if w > base.size[0]:
            continue
        h = int(round(w / ratio))
        img = base.resize((w, h), Image.LANCZOS)
        if soften:
            img = img.filter(ImageFilter.GaussianBlur(1.6))
        suffix = "" if len(widths) == 1 else "-%d" % w
        dst = os.path.join(GALLERY, PREFIX + name + suffix + ".webp")
        img.save(dst, "WEBP", quality=q, method=6)
        made.append((os.path.basename(dst), w, h, os.path.getsize(dst)))
    if not made:
        sys.exit("source too small: " + src)
    for f, w, h, s in made:
        print("  %-30s %4dx%-4d %6.1f kB" % (f, w, h, s / 1024.0))
    return sum(s for _, _, _, s in made)


def main():
    # clear anything from the earlier assets/pages experiment
    old_dir = os.path.join(ROOT, "assets", "pages")
    if os.path.isdir(old_dir):
        for f in os.listdir(old_dir):
            os.remove(os.path.join(old_dir, f))
        os.rmdir(old_dir)
        print("removed the old assets/pages folder\n")
    for f in sorted(os.listdir(GALLERY)):
        if f.startswith(PREFIX):
            os.remove(os.path.join(GALLERY, f))

    total = 0
    for job in JOBS:
        total += run(job)
    total += run(SOFT, soften=True)
    total += run(SHARED)
    n = len([f for f in os.listdir(GALLERY) if f.startswith(PREFIX)])
    print("\n%d files, %.0f kB, all in assets/gallery/ next to the existing photos"
          % (n, total / 1024.0))


if __name__ == "__main__":
    main()
