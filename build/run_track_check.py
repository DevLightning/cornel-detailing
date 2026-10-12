# -*- coding: utf-8 -*-
"""Click every contact button on every page in headless Chrome and report
whether a Google Ads conversion was sent, with which label.

Google's own tag is never loaded: window.gtag is replaced by a recorder, so
no test hit can reach the live Ads account.

Usage:  python build/run_track_check.py
"""
import html as htmllib
import os, re, subprocess, sys, tempfile, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HOST = os.path.join(ROOT, "build", "_track_check.html")
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"


def run(page):
    url = ("file:" + urllib.request.pathname2url(HOST) + "?page=" + page)
    profile = tempfile.mkdtemp(prefix="cornel-track-")
    cmd = [CHROME, "--headless=new", "--disable-gpu", "--no-first-run",
           "--allow-file-access-from-files", "--user-data-dir=" + profile,
           "--virtual-time-budget=20000", "--dump-dom", url]
    dom = subprocess.check_output(cmd, stderr=subprocess.DEVNULL).decode("utf-8", "replace")
    m = re.search(r'<pre id="report">(.*?)</pre>', dom, re.S)
    if not m:
        return ["FAIL  no report produced for " + page]
    return htmllib.unescape(m.group(1)).strip().splitlines()


def main():
    pages = [f for f in sorted(os.listdir(ROOT)) if f.endswith(".html")]
    fails = total = 0
    for page in pages:
        for ln in run(page):
            ln = ln.rstrip()
            if ln.startswith("#"):
                print("\n" + ln)
            else:
                print("   " + ln)
                total += 1
                if ln.startswith("FAIL"):
                    fails += 1
    print("\nconversion tracking: %d checks, %d failing" % (total, fails))
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())
