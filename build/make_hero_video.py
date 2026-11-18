# -*- coding: utf-8 -*-
"""Writes the three hero videos from the owner's edit (needs ffmpeg on the PATH):

    python build/make_hero_video.py "D:\\Videos\\edits\\Comp 1_130.mp4"

    assets/gallery/hero-film-phone.mp4   540x600   screens up to 600px wide (portrait hero)
    assets/gallery/hero-film.mp4         1280x720  laptops and tablets
    assets/gallery/hero-film-wide.mp4    1920x738  from 1600px (the hero is a wide band there)

The source file stays OUTSIDE the project (it is 19 MB and must never be uploaded).

Why three files: the hero is portrait on a phone, about 2:1 on a laptop and up
to 3.7:1 on an ultrawide monitor. One 16:9 file would lose more than half of
its picture at either end, and it would lose the wrong half: in the polishing
scenes the person stands right of the middle. So the phone and the wide file
are cut to the shape of their hero, scene by scene (CUTS below).

The look is put into the file, never into the veil of the page (guideline
rule 87): a little less colour, cooler, the middle tones lifted so the
film reads through the dark veil, and the highlights capped so the headline
stays readable on the flash between two scenes. No sound track,
30 frames a second, the index at the front of the file so it starts to play
while it loads.

The scene list belongs to THIS edit. A new edit needs new times and centres:
look at the film, note where each scene starts and where its subject is."""
import os, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "assets", "gallery")

# scene start (seconds), centre of the subject across (0..1), centre of the subject down (0..1)
CUTS = [
    (0.00, 0.38, 0.52),   # the car in the workshop
    (1.12, 0.62, 0.60),   # polishing the bonnet (the hand and the machine are low in the picture)
    (2.65, 0.58, 0.55),   # hand on the dashboard
    (5.07, 0.62, 0.60),   # polishing again
    (6.42, 0.50, 0.58),   # the interior through the door
    (7.77, 0.46, 0.50),   # the wheel
]
LOOK = "eq=saturation=0.84,curves=all='0/0 0.25/0.36 0.5/0.62 1/0.86',colorbalance=bs=0.04:bm=0.02:rs=-0.02:rm=-0.01"


def steps(values):
    """An ffmpeg expression that holds each value from its scene start on."""
    expr = str(values[-1][1])
    for i in range(len(values) - 2, -1, -1):
        expr = "if(lt(t,%.2f),%d,%s)" % (values[i + 1][0], values[i][1], expr)
    return expr


def encode(name, crop_w, crop_h, out_w, out_h, crf):
    xs = [(t, max(0, min(1920 - crop_w, round(cx * 1920 - crop_w / 2)))) for t, cx, cy in CUTS]
    ys = [(t, max(0, min(1080 - crop_h, round(cy * 1080 - crop_h / 2)))) for t, cx, cy in CUTS]
    vf = "fps=30,crop=%d:%d:'%s':'%s',scale=%d:%d:flags=lanczos,%s,format=yuv420p" % (
        crop_w, crop_h, steps(xs), steps(ys), out_w, out_h, LOOK)
    out = os.path.join(OUT, name)
    subprocess.check_call([
        "ffmpeg", "-v", "error", "-y", "-i", SRC, "-an", "-vf", vf,
        "-c:v", "libx264", "-preset", "veryslow", "-crf", str(crf), "-profile:v", "high", "-level", "4.0",
        "-g", "60", "-movflags", "+faststart", out])
    print("%-22s %4dx%-4d %5d KB" % (name, out_w, out_h, os.path.getsize(out) // 1024))


if __name__ == "__main__":
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    SRC = sys.argv[1]
    encode("hero-film-phone.mp4", 972, 1080, 540, 600, 31)
    encode("hero-film.mp4", 1920, 1080, 1280, 720, 30)
    encode("hero-film-wide.mp4", 1920, 738, 1920, 738, 30)
