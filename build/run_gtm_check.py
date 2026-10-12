# -*- coding: utf-8 -*-
"""Check the Google Tag Manager container on every page.

Asserts that nothing is requested from Google before the visitor accepts the
cookie banner, and that the container and the Ads tag both load afterwards.

Needs the local preview on port 3456.

    python build/run_gtm_check.py
"""
import html as htmllib
import os, re, subprocess, sys, tempfile, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
HOST = "http://localhost:3456/build/_gtm_check.html"


def run(page):
    profile = tempfile.mkdtemp(prefix="cornel-gtm-")
    dom = subprocess.check_output(
        [CHROME, "--headless=new", "--disable-gpu", "--no-first-run",
         "--user-data-dir=" + profile, "--virtual-time-budget=25000",
         "--dump-dom", HOST + "?page=/" + page],
        stderr=subprocess.DEVNULL).decode("utf-8", "replace")
    m = re.search(r'<pre id="report">(.*?)</pre>', dom, re.S)
    return htmllib.unescape(m.group(1)).strip().splitlines() if m else ["FAIL  no report for " + page]


def main():
    try:
        urllib.request.urlopen("http://localhost:3456/index.html", timeout=3).read(1)
    except Exception:
        print("the local server is not running: start the 'cornel-detailing' preview on port 3456")
        return 1

    pages = [f for f in sorted(os.listdir(ROOT)) if f.endswith(".html")]
    total = fails = 0
    for page in pages:
        for ln in run(page):
            if ln.startswith("#"):
                print("\n" + ln)
            else:
                print("   " + ln)
                total += 1
                if ln.startswith("FAIL"):
                    fails += 1
    print("\ntag manager: %d checks, %d failing" % (total, fails))
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())
