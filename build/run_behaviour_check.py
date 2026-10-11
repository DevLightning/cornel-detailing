# -*- coding: utf-8 -*-
"""Drive the real pages in headless Chrome and print what happened.

Usage:  python build/run_behaviour_check.py
"""
import os, re, subprocess, sys, tempfile, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HOST = os.path.join(ROOT, "build", "_behaviour_check.html")
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

RUNS = [
    ("homepage, desktop", "w=1280&h=900"),
    ("homepage, phone", "w=375&h=720&page=../index.html"),
    ("homepage, narrow phone", "w=360&h=740&page=../index.html"),
    ("Gloggnitz page, phone", "w=375&h=720&page=../autoaufbereitung-gloggnitz.html"),
    ("Gloggnitz page, narrow phone", "w=360&h=740&page=../autoaufbereitung-gloggnitz.html"),
    ("Neunkirchen page, phone", "w=375&h=720&page=../autoaufbereitung-neunkirchen.html"),
    ("Neunkirchen page, desktop", "w=1280&h=900&page=../autoaufbereitung-neunkirchen.html"),
    ("costs page, desktop", "w=1280&h=900&page=../autoaufbereitung-kosten-neunkirchen.html"),
    ("costs page, phone", "w=375&h=720&page=../autoaufbereitung-kosten-neunkirchen.html"),
    ("gallery, phone", "w=375&h=720&page=../galerie.html"),
    ("ceramic page, phone", "w=375&h=720&page=../keramikversiegelung-neunkirchen.html"),
    ("polish page, phone", "w=375&h=720&page=../lackpolitur-neunkirchen.html"),
    ("interior page, phone", "w=375&h=720&page=../innenreinigung-gloggnitz.html"),
    ("comparison page, phone", "w=375&h=720&page=../keramikversiegelung-vs-politur-neunkirchen.html"),
    ("spring page, phone", "w=375&h=720&page=../auto-fruehjahrspflege-neunkirchen.html"),
    ("winter page, phone", "w=375&h=720&page=../autopflege-tipps-winter-gloggnitz.html"),
    ("why page, phone", "w=375&h=720&page=../fahrzeugaufbereitung-gloggnitz-wichtig.html"),
    ("imprint, phone", "w=375&h=720&page=../impressum.html"),
    ("privacy, phone", "w=375&h=720&page=../datenschutz.html"),
    ("homepage, desktop wide", "w=1920&h=1000&page=../index.html"),
    ("Gloggnitz page, desktop wide", "w=1920&h=1000&page=../autoaufbereitung-gloggnitz.html"),
]


def run(query):
    url = "file:" + urllib.request.pathname2url(HOST) + "?" + query
    profile = tempfile.mkdtemp(prefix="cornel-behaviour-")
    cmd = [CHROME, "--headless=new", "--disable-gpu", "--no-first-run",
           "--allow-file-access-from-files", "--user-data-dir=" + profile,
           "--virtual-time-budget=9000", "--dump-dom", url]
    dom = subprocess.check_output(cmd, stderr=subprocess.DEVNULL).decode("utf-8", "replace")
    m = re.search(r'<pre id="report">(.*?)</pre>', dom, re.S)
    if not m:
        return ["FAIL  no report produced"]
    import html as htmllib
    return htmllib.unescape(m.group(1)).strip().splitlines()


def main():
    failed = 0
    for name, query in RUNS:
        print("== %s" % name)
        for line in run(query):
            print("   " + line)
            if line.startswith("FAIL"):
                failed += 1
        print("")
    print("behaviour check: %d failing assertions" % failed)
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
