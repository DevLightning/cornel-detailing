# -*- coding: utf-8 -*-
"""Audit every page for the things the other checks do not cover.

Text size, contrast against the real resolved background, touch targets,
duplicate ids, missing accessible names, heading order, stray hyphens used as
punctuation and horizontal overflow · at phone and desktop width.

Usage:  python build/run_polish_check.py
"""
import os, re, subprocess, sys, tempfile, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HOST = os.path.join(ROOT, "build", "_polish_check.html")
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

PAGES = [f for f in sorted(os.listdir(ROOT)) if f.endswith(".html")]
WIDTHS = [("phone", 390, 800), ("desktop", 1440, 900)]

# Every run ends with this, so a harness that threw can never read as clean.
END = "END"


def run(page, w, h):
    url = ("file:" + urllib.request.pathname2url(HOST) +
           "?page=../%s&w=%d&h=%d" % (page, w, h))
    profile = tempfile.mkdtemp(prefix="cornel-polish-")
    cmd = [CHROME, "--headless=new", "--disable-gpu", "--no-first-run",
           "--allow-file-access-from-files", "--hide-scrollbars",
           "--user-data-dir=" + profile, "--window-size=%d,%d" % (w, h),
           "--virtual-time-budget=11000", "--dump-dom", url]
    dom = subprocess.check_output(cmd, stderr=subprocess.DEVNULL).decode("utf-8", "replace")
    m = re.search(r'<pre id="report">(.*?)</pre>', dom, re.S)
    if not m:
        return ["BROKEN  no report produced"]
    import html as htmllib
    lines = htmllib.unescape(m.group(1)).strip().splitlines()
    if END not in [l.strip() for l in lines]:
        lines.append("BROKEN  the check did not run to the end")
    return [l for l in lines if l.strip() != END]


def main():
    only = sys.argv[1] if len(sys.argv) > 1 else None
    pages = [p for p in PAGES if not only or only in p]
    findings = 0
    for page in pages:
        for label, w, h in WIDTHS:
            lines = run(page, w, h)
            issues = [l for l in lines if re.match(r"^(DUPID|SMALL|CONTRAST|TOUCH|NONAME|HEADING|HYPHEN|OVERFLOW|BROKEN|ONPHOTO)", l)]
            if not issues:
                continue
            print("== %s  (%s %dpx)" % (page, label, w))
            for l in issues:
                print("   " + l)
                findings += 1
            print("")
    print("polish check: %d finding(s) across %d pages" % (findings, len(pages)))
    return 1 if findings else 0


if __name__ == "__main__":
    sys.exit(main())
