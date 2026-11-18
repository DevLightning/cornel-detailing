# -*- coding: utf-8 -*-
"""Writes the gallery grid thumbnails: assets/gallery/p-gal-<slug>-400.webp and -640.webp.
Same picture, same proportions as the full photo, only smaller."""
import os
from PIL import Image
from gallery_data import ROOT, projects

total = 0
for p in projects():
    src = os.path.join(ROOT, p["asset"].replace("/", os.sep))
    im = Image.open(src).convert("RGB")
    for w, q in ((400, 70), (640, 66)):
        h = round(im.height * w / im.width)
        tw = w
        if im.width * 5 > im.height * 4:
            # a landscape photo fills a 4:5 tile by its height: the copy is as
            # tall as a portrait one (file name and srcset keep the tile width)
            h = round(w * 1.25)
            tw = round(im.width * h / im.height)
        out = os.path.join(ROOT, "assets", "gallery", "p-gal-%s-%d.webp" % (p["slug"], w))
        im.resize((tw, h), Image.LANCZOS).save(out, "WEBP", quality=q, method=6)
        total += os.path.getsize(out)
        print("%-52s %4dx%-4d %4d KB" % (os.path.basename(out), tw, h, os.path.getsize(out) // 1024))
print("total %d KB" % (total // 1024))
