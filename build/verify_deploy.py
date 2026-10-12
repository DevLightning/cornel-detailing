# -*- coding: utf-8 -*-
"""Compare the deployed site with this folder, file by file.

Two uploads in a row silently dropped files (a whole new image folder once,
index.html another time) and the site looked fine until someone noticed a
broken image or an untracked button. This says exactly which files are
missing or out of date, in one run.

    python build/verify_deploy.py
    python build/verify_deploy.py --url https://corneldetailing.com
"""
import hashlib, os, sys, urllib.error, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = "https://corneldetailing.com"

# not deployed (see .vercelignore) or not fetchable by path
SKIP_DIRS = {"build", ".claude", ".git"}
SKIP_FILES = {"BUILD-GUIDELINE.md", "README.md", ".htaccess", ".vercelignore",
              "vercel.json", "sitemap.xml.bak"}
TEXT = (".html", ".css", ".js", ".xml", ".txt", ".json")


def local_files():
    out = []
    for folder, dirs, files in os.walk(ROOT):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS and not d.startswith(".")]
        for f in sorted(files):
            if f in SKIP_FILES or f.startswith("."):
                continue
            path = os.path.join(folder, f)
            rel = os.path.relpath(path, ROOT).replace(os.sep, "/")
            out.append(rel)
    return out


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "cornel-deploy-check"})
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            return r.status, r.read()
    except urllib.error.HTTPError as e:
        return e.code, b""
    except Exception as e:
        return 0, str(e).encode()


def main():
    base = BASE
    if "--url" in sys.argv:
        base = sys.argv[sys.argv.index("--url") + 1].rstrip("/")
    files = local_files()
    print("comparing %d files against %s" % (len(files), base))
    print("")

    missing, stale, ok = [], [], 0
    for rel in files:
        local = open(os.path.join(ROOT, rel), "rb").read()
        # /index.html permanently redirects to /, so compare against the root
        url = base + "/" + ("" if rel == "index.html" else rel)
        status, body = fetch(url)
        if status == 404:
            missing.append(rel)
        elif status != 200:
            missing.append("%s (HTTP %s)" % (rel, status))
        elif hashlib.md5(body).digest() != hashlib.md5(local).digest():
            stale.append("%s  local %d B, live %d B" % (rel, len(local), len(body)))
        else:
            ok += 1

    for m in missing:
        print("  MISSING  " + m)
    for s in stale:
        print("  STALE    " + s)
    print("")
    print("%d up to date, %d stale, %d missing" % (ok, len(stale), len(missing)))
    if missing or stale:
        print("\nupload the files above, then run this again")
        return 1
    print("the deployed site matches this folder exactly")
    return 0


if __name__ == "__main__":
    sys.exit(main())
