# -*- coding: utf-8 -*-
"""End to end check against Google's REAL tag.

Loads the homepage over http://localhost:3456, accepts the cookie banner like
a visitor, clicks a call button and a WhatsApp button, and reports the
conversion request that Google's own gtag.js builds, including the label.

Nothing reaches Google: every network API in the page is patched to record and
block, and Chrome resolves googleadservices.com, doubleclick.net and google.com
to 127.0.0.1, so a hit cannot leave the machine even if a code path were
missed. Only www.googletagmanager.com stays reachable, to serve gtag.js.

Start the server first (preview "cornel-detailing" on port 3456), then:
    python build/run_live_tag_check.py
"""
import html as htmllib
import os, re, subprocess, sys, tempfile, urllib.error, urllib.request

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
URL = "http://localhost:3456/build/_live_tag_check.html"

# the same check can run against the deployed site: the harness page is served
# from localhost, the iframe points at production
#   python build/run_live_tag_check.py --url https://corneldetailing.com

BLACKHOLE = ",".join([
    "MAP googleadservices.com 127.0.0.1",
    "MAP *.googleadservices.com 127.0.0.1",
    "MAP doubleclick.net 127.0.0.1",
    "MAP *.doubleclick.net 127.0.0.1",
    "MAP google.com 127.0.0.1",
    "MAP *.google.com 127.0.0.1",
    "MAP *.google.at 127.0.0.1",
    "EXCLUDE www.googletagmanager.com",
])


PAGES = [
    "index.html", "autoaufbereitung-gloggnitz.html", "autoaufbereitung-neunkirchen.html",
    "keramikversiegelung-neunkirchen.html", "lackpolitur-neunkirchen.html",
    "innenreinigung-gloggnitz.html", "galerie.html",
    "autoaufbereitung-kosten-neunkirchen.html",
    "keramikversiegelung-vs-politur-neunkirchen.html",
    "auto-fruehjahrspflege-neunkirchen.html", "autopflege-tipps-winter-gloggnitz.html",
    "fahrzeugaufbereitung-gloggnitz-wichtig.html", "impressum.html", "datenschutz.html",
]


def check_one(target, page, profile_seed):
    url = URL + "?page=/" + page + ("&site=" + target if target else "")
    flags = [CHROME, "--headless=new", "--disable-gpu", "--no-first-run",
             "--user-data-dir=" + tempfile.mkdtemp(prefix="cornel-lt-%s-" % profile_seed)]
    if target:
        flags += ["--disable-web-security", "--disable-site-isolation-trials"]
    dom = subprocess.check_output(
        flags + ["--host-resolver-rules=" + BLACKHOLE,
                 "--virtual-time-budget=30000", "--dump-dom", url],
        stderr=subprocess.DEVNULL).decode("utf-8", "replace")
    m = re.search(r'<pre id="report">(.*?)</pre>', dom, re.S)
    return htmllib.unescape(m.group(1)).strip() if m else "FAIL  no report"


def sweep(target):
    print("sweeping " + (target or "the local build"))
    print("")
    print("  %-46s %-6s %-6s %-6s" % ("page", "call", "cta", "whats"))
    bad = 0
    for i, page in enumerate(PAGES):
        rep = check_one(target, page, i)
        def state(label):
            for ln in rep.splitlines():
                if label in ln:
                    if ln.startswith("PASS"): return "ok"
                    if ln.startswith("SKIP"): return "-"
                    return "NONE"
            return "?"
        cells = (state("header call button"), state("CTA card call button"), state("WhatsApp button"))
        bad += sum(1 for c in cells if c == "NONE")
        print("  %-46s %-6s %-6s %-6s" % ((page,) + cells))
    print("")
    print("%d button(s) sending no conversion" % bad)
    return 1 if bad else 0


def main():
    target = None
    if "--url" in sys.argv:
        target = sys.argv[sys.argv.index("--url") + 1].rstrip("/")
    try:
        urllib.request.urlopen("http://localhost:3456/index.html", timeout=3).read(1)
    except Exception:
        print("the local server is not running: start the 'cornel-detailing' preview on port 3456")
        return 1

    if "--all" in sys.argv:
        return sweep(target)

    page = "/index.html"
    if "--page" in sys.argv:
        # Git Bash rewrites a leading slash into a Windows path, so take the
        # file name whatever form it arrives in
        page = "/" + os.path.basename(sys.argv[sys.argv.index("--page") + 1])
    url = URL + "?page=" + page + ("&site=" + target if target else "")
    print("checking " + (target or "the local build") + page)
    profile = tempfile.mkdtemp(prefix="cornel-livetag-")
    flags = [CHROME, "--headless=new", "--disable-gpu", "--no-first-run",
             "--user-data-dir=" + profile]
    if target:
        # the harness is served from localhost while the iframe loads the
        # deployed site: a test only flag so the two can talk to each other
        flags += ["--disable-web-security", "--disable-site-isolation-trials"]
    dom = subprocess.check_output(
        flags + [
         "--host-resolver-rules=" + BLACKHOLE,
         "--virtual-time-budget=30000", "--dump-dom", url],
        stderr=subprocess.DEVNULL).decode("utf-8", "replace")
    m = re.search(r'<pre id="report">(.*?)</pre>', dom, re.S)
    if not m:
        print("FAIL  no report produced")
        return 1
    report = htmllib.unescape(m.group(1)).strip()
    print(report)
    fails = len([l for l in report.splitlines() if l.startswith("FAIL")])
    labels = set(re.findall(r"label=([A-Za-z0-9_-]+)", report))
    expected = {"DWGhCNenjI0cEKq3gelC", "fOZQCIjd37UcEKq3gelC"}
    if labels and not labels.issubset(expected):
        print("\nFAIL  labels in the live requests %s, expected %s" % (sorted(labels), sorted(expected)))
        fails += 1
    print("\nlive tag check: %d failing" % fails)
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())
