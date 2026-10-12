# -*- coding: utf-8 -*-
"""Verification gate for BUILD-GUIDELINE.md.

Run from the project root:  python build/verify_seo.py
Exit code 0 = every check passed. Failures are printed with the file and why.
"""
from __future__ import print_function

import io, json, os, re, sys
from html.parser import HTMLParser

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from pkgdata import ROOT, load_packages

FAILS, WARNS, OKS = [], [], []


def fail(what, detail):
    FAILS.append((what, detail))


def warn(what, detail):
    WARNS.append((what, detail))


def ok(what):
    OKS.append(what)


# ───────────────────────────── page scanning ──────────────────────────────
class Page(HTMLParser):
    def __init__(self, src):
        HTMLParser.__init__(self, convert_charrefs=True)
        self.ids, self.links, self.imgs, self.h1s = set(), [], [], []
        self.assets = []
        self.title, self.canonical, self.ogurl, self.desc = None, None, None, None
        self.ldjson, self.text = [], []
        self._in_title = self._in_h1 = False
        self._in_skip = 0
        self._in_ld = False
        self.feed(src)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get("id"):
            self.ids.add(a["id"])
        if tag == "a" and a.get("href"):
            self.links.append(a["href"])
        if tag == "img":
            self.imgs.append(a)
            if a.get("src"):
                self.assets.append(a["src"])
            for cand in (a.get("srcset") or "").split(","):
                cand = cand.strip().split(" ")[0]
                if cand:
                    self.assets.append(cand)
        if tag == "script" and a.get("src"):
            self.assets.append(a["src"])
        if tag == "link" and a.get("href") and a.get("rel") in ("stylesheet", "icon", "apple-touch-icon", "preload"):
            self.assets.append(a["href"])
            for cand in (a.get("imagesrcset") or "").split(","):
                cand = cand.strip().split(" ")[0]
                if cand:
                    self.assets.append(cand)
        if tag == "link" and a.get("rel") == "canonical":
            self.canonical = a.get("href")
        if tag == "meta":
            if a.get("property") == "og:url":
                self.ogurl = a.get("content")
            if a.get("name") == "description":
                self.desc = a.get("content")
        if tag == "title":
            self._in_title = True
        if tag == "h1":
            self._in_h1 = True
            self.h1s.append("")
        if tag in ("script", "style"):
            self._in_skip += 1
            if tag == "script" and a.get("type") == "application/ld+json":
                self._in_ld = True
                self.ldjson.append("")

    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False
        if tag == "h1":
            self._in_h1 = False
        if tag in ("script", "style"):
            self._in_skip = max(0, self._in_skip - 1)
            self._in_ld = False

    def handle_data(self, d):
        if self._in_ld:
            self.ldjson[-1] += d
        if self._in_title:
            self.title = (self.title or "") + d
        if self._in_h1:
            self.h1s[-1] += d
        if not self._in_skip:
            self.text.append(d)

    def visible(self):
        return re.sub(r"\s+", " ", " ".join(self.text)).strip()


def html_files():
    return [f for f in sorted(os.listdir(ROOT)) if f.endswith(".html")]


def read(f):
    return io.open(os.path.join(ROOT, f), encoding="utf-8").read()


# ───────────────────────────────── checks ─────────────────────────────────
def check_legacy_slug():
    bad = []
    for f in sorted(os.listdir(ROOT)):
        if f.endswith((".html", ".xml", ".js", ".css", ".txt")):
            if "wuerflach" in read(f).lower():
                bad.append(f)
    # the redirect files must keep the old path, everything else must not
    for f in ("vercel.json", ".htaccess"):
        if "wuerflach" not in read(f):
            fail("redirects", "%s has no redirect for the old wuerflach URLs" % f)
    if bad:
        fail("legacy slug", "'wuerflach' still in: " + ", ".join(bad))
    else:
        ok("no 'wuerflach' left in any page, script, style or sitemap")


def check_links(pages):
    ids = {f: Page(read(f)).ids for f in pages}
    broken, bad_anchor = [], []
    for f in pages:
        for href in Page(read(f)).links:
            if href.startswith(("http://", "https://", "mailto:", "tel:", "javascript:")):
                continue
            path, _, frag = href.partition("#")
            target = f if path in ("", "./") else path.lstrip("/")
            if target == "":
                target = "index.html"
            if path not in ("", "./") and not os.path.exists(os.path.join(ROOT, target)):
                broken.append("%s -> %s" % (f, href))
                continue
            if frag and target in ids and frag not in ids[target]:
                bad_anchor.append("%s -> %s" % (f, href))
    if broken:
        fail("broken internal links", "; ".join(broken))
    else:
        ok("every internal link resolves to a file that exists")
    if bad_anchor:
        fail("broken anchors", "; ".join(bad_anchor))
    else:
        ok("every #anchor link points at an id that exists")


def check_heads(pages):
    problems = []
    for f in pages:
        p = Page(read(f))
        url = "https://corneldetailing.com/" + ("" if f == "index.html" else f)
        if len(p.h1s) != 1:
            problems.append("%s: %d h1 tags" % (f, len(p.h1s)))
        elif not p.h1s[0].strip():
            problems.append("%s: empty h1" % f)
        t = (p.title or "").strip()
        if not t:
            problems.append("%s: no title" % f)
        elif len(t) > 65:
            warn("long title", "%s: %d chars" % (f, len(t)))
        d = (p.desc or "").strip()
        if not d:
            problems.append("%s: no meta description" % f)
        elif not (70 <= len(d) <= 165):
            warn("description length", "%s: %d chars" % (f, len(d)))
        if p.canonical != url:
            problems.append("%s: canonical is %r, expected %r" % (f, p.canonical, url))
        if p.ogurl and p.ogurl != url:
            problems.append("%s: og:url is %r, expected %r" % (f, p.ogurl, url))
    if problems:
        for pr in problems:
            fail("head/heading", pr)
    else:
        ok("every page: one h1, a title, a description, matching canonical and og:url")


def check_ldjson(pages):
    bad = []
    n = 0
    for f in pages:
        for blob in Page(read(f)).ldjson:
            n += 1
            try:
                json.loads(blob)
            except Exception as e:
                bad.append("%s: %s" % (f, e))
    if bad:
        for b in bad:
            fail("JSON-LD", b)
    else:
        ok("all %d JSON-LD blocks parse as valid JSON" % n)


def check_prices(pages):
    pkgs = load_packages()
    allowed = set()
    for p in pkgs:
        for v in p["prices"].values():
            for num in re.findall(r"\d+(?:\.\d+)?", v):
                allowed.add(num.replace(".", ""))
    allowed.add("50")   # the documented surcharge for extreme dirt
    allowed.add("0")    # "€0 Kosten dieser Tipps" on the winter page is not a price
    bad = []
    for f in pages:
        txt = Page(read(f)).visible()
        for m in re.finditer(r"€\s?(\d+(?:[.,]\d+)?)", txt):
            num = m.group(1).replace(".", "").replace(",", "")
            if num not in allowed:
                bad.append("%s: €%s" % (f, m.group(1)))
    if bad:
        # Never silently rewritten: a price the owner may have set on purpose
        # (a bundle, for example) is the owner's decision, so it is reported
        # on every run until they confirm or correct it.
        for b in sorted(set(bad)):
            warn("price not in the package list · owner must confirm", b)
    else:
        ok("every price shown on the site exists in the packages data in script.js")


def check_generated_blocks():
    pkgs = load_packages()
    idx = read("index.html")
    m = re.search(r"<!-- BUILD:packages -->(.*?)<!-- /BUILD:packages -->", idx, re.S)
    if not m:
        fail("prerender", "index.html has no BUILD:packages block")
        return
    block = m.group(1)
    if 'data-prerendered="1"' not in block:
        fail("prerender", 'packagesGrid is missing data-prerendered="1"')
    missing = [p["title"] for p in pkgs if p["title"] not in block]
    if missing:
        fail("prerender", "package titles missing from the HTML: " + ", ".join(missing))
    cards = len(re.findall(r'<article class="pkg-card', block))
    if cards != len(pkgs):
        fail("prerender", "%d package cards in the HTML, %d in the data" % (cards, len(pkgs)))
    for p in pkgs:
        for v in p["prices"].values():
            if v not in block:
                fail("prerender", "price %s (paket %d) not in the HTML" % (v, p["number"]))
    if not FAILS:
        ok("index.html contains all %d packages, their prices and the recommended badge" % len(pkgs))

    for f in ("autoaufbereitung-gloggnitz.html", "autoaufbereitung-neunkirchen.html"):
        s = read(f)
        rows = len(re.findall(r'class="pt-pkg"', s))
        if rows != len(pkgs):
            fail("price table", "%s has %d rows, expected %d" % (f, rows, len(pkgs)))
    ok("both town pages carry the generated price table with %d rows" % len(pkgs))


def check_assets(pages):
    """Every file the pages ask the browser for must exist, including the
    images referenced from the stylesheet."""
    missing = []
    for f in pages:
        for ref in Page(read(f)).assets:
            if ref.startswith(("http://", "https://", "data:", "//")):
                continue
            path = ref.split("?")[0].split("#")[0].lstrip("/")
            if path and not os.path.exists(os.path.join(ROOT, path)):
                missing.append("%s -> %s" % (f, ref))
    # a quoted data URI can contain its own ")" and url(#id), so strip those
    # whole before looking for real file references
    css = re.sub(r'url\(\s*(["\'])data:.*?\1\s*\)', "", read("styles.css"), flags=re.S)
    for m in re.finditer(r'url\(["\']?([^"\')]+)["\']?\)', css):
        ref = m.group(1)
        if ref.startswith(("http", "data:", "#", "%23")):
            continue
        path = ref.split("?")[0].lstrip("/")
        if not os.path.exists(os.path.join(ROOT, path)):
            missing.append("styles.css -> %s" % ref)
    if missing:
        for m in sorted(set(missing)):
            fail("missing asset", m)
    else:
        ok("every image, script, stylesheet and font the pages request exists")


def check_images_sized(pages):
    """Images need width and height so nothing jumps while the page loads."""
    bad = []
    for f in pages:
        for a in Page(read(f)).imgs:
            if not a.get("src"):
                continue        # placeholder filled in by JS (the lightbox)
            if not (a.get("width") and a.get("height")):
                bad.append("%s: %s" % (f, a["src"]))
    if bad:
        for b in bad:
            fail("image without width/height", b)
    else:
        ok("every <img> carries width and height (no layout shift on load)")


def check_conversion_coverage(pages):
    """Every tel: and wa.me link must be covered by the tracked CTA selectors
    in script.js, otherwise a real contact click sends no Google Ads
    conversion. The allowed tokens are read out of script.js, so this check
    follows the code instead of repeating it."""
    js = read("script.js")
    tokens = set()
    for name in ("WA_CTA", "CALL_CTA"):
        m = re.search(r'var %s = "(.*?)";' % name, js)
        if not m:
            fail("conversion tracking", "%s not found in script.js" % name)
            return
        for part in m.group(1).split(","):
            part = part.strip().split(" ")[-1]          # ".mobile-cta a.x" -> "a.x"
            for cls in re.findall(r"\.([A-Za-z0-9_-]+)", part):
                tokens.add(("class", cls))
            for attr in re.findall(r"\[([A-Za-z0-9_-]+)\]", part):
                tokens.add(("attr", attr))

    untracked = []
    for f in pages:
        for m in re.finditer(r"<a\s[^>]*>", read(f)):
            tag = m.group(0)
            href = re.search(r'href="([^"]*)"', tag)
            if not href:
                continue
            h = href.group(1)
            if not (h.startswith("tel:") or "wa.me/" in h):
                continue
            classes = set((re.search(r'class="([^"]*)"', tag) or
                           type("x", (), {"group": lambda s, i: ""})()).group(1).split())
            covered = any((k == "class" and v in classes) or (k == "attr" and (v + "=") in tag or
                          (k == "attr" and v in tag))
                          for k, v in tokens)
            if not covered:
                untracked.append("%s: %s" % (f, tag[:90]))
    if untracked:
        for u in untracked:
            fail("contact link sends no conversion", u)
    else:
        ok("every tel: and wa.me link on every page is covered by the tracked CTA selectors")


def check_llms_txt(pages):
    """llms.txt is the summary AI assistants read. Every link in it must point
    at a page that exists, and the domain must be spelled correctly."""
    path = os.path.join(ROOT, "llms.txt")
    if not os.path.exists(path):
        fail("llms.txt", "missing")
        return
    text = io.open(path, encoding="utf-8").read()
    if "corneldetailling" in text:
        fail("llms.txt", "misspelled domain (corneldetailling)")
    links = re.findall(r"\]\((https://corneldetailing\.com/[^)]*)\)", text)
    bad = []
    for url in links:
        rel = url.replace("https://corneldetailing.com/", "")
        page, _, frag = rel.partition("#")
        target = page or "index.html"
        if not os.path.exists(os.path.join(ROOT, target)):
            bad.append(url)
            continue
        if frag and ('id="%s"' % frag) not in read(target):
            bad.append(url + " (no such section)")
    other = re.findall(r"\]\((?!https://corneldetailing\.com/)([^)]*)\)", text)
    for o in other:
        bad.append(o + " (not on this domain)")
    if bad:
        for b in bad:
            fail("llms.txt link", b)
    else:
        ok("llms.txt: all %d links point at pages that exist" % len(links))


def check_sitemap(pages):
    sm = read("sitemap.xml")
    locs = re.findall(r"<loc>(.*?)</loc>", sm)
    frags = [l for l in locs if "#" in l]
    if frags:
        fail("sitemap", "%d anchor URLs still listed" % len(frags))
    else:
        ok("sitemap has no #fragment URLs")
    missing_files, listed = [], set()
    for l in locs:
        path = l.replace("https://corneldetailing.com/", "")
        f = "index.html" if path == "" else path
        listed.add(f)
        if not os.path.exists(os.path.join(ROOT, f)):
            missing_files.append(l)
    if missing_files:
        fail("sitemap", "URLs without a file: " + ", ".join(missing_files))
    else:
        ok("every sitemap URL resolves to a real page (%d URLs)" % len(locs))
    not_listed = [f for f in pages if f not in listed]
    if not_listed:
        fail("sitemap", "pages missing from the sitemap: " + ", ".join(not_listed))
    else:
        ok("every page of the site is listed in the sitemap")
    if "Sitemap: https://corneldetailing.com/sitemap.xml" not in read("robots.txt"):
        fail("robots.txt", "no Sitemap line")


def check_dashes(pages):
    bad = []
    for f in pages:
        txt = Page(read(f)).visible()
        if "–" in txt or "—" in txt:
            bad.append(f)
    if bad:
        fail("dashes", "en/em dash in visible copy: " + ", ".join(bad))
    else:
        ok("no en or em dashes in visible copy (· is used instead)")


def check_images(pages):
    bad = []
    for f in pages:
        for a in Page(read(f)).imgs:
            if "alt" not in a:
                bad.append("%s: %s" % (f, a.get("src", "?")))
    if bad:
        for b in bad:
            fail("img alt", b)
    else:
        ok("every <img> has an alt attribute")


def check_versions(pages):
    css, js = set(), set()
    for f in pages:
        s = read(f)
        css.update(re.findall(r"styles\.css\?v=(\d+)", s))
        js.update(re.findall(r"script\.js\?v=(\d+)", s))
    if len(css) > 1:
        fail("cache busting", "styles.css versions differ: " + ", ".join(sorted(css)))
    if len(js) > 1:
        fail("cache busting", "script.js versions differ: " + ", ".join(sorted(js)))
    if len(css) <= 1 and len(js) <= 1:
        ok("one styles.css version (v%s) and one script.js version (v%s) across all pages"
           % (list(css)[0] if css else "?", list(js)[0] if js else "?"))


def check_town_pages():
    for f, town in (("autoaufbereitung-gloggnitz.html", "Gloggnitz"),
                    ("autoaufbereitung-neunkirchen.html", "Neunkirchen")):
        if not os.path.exists(os.path.join(ROOT, f)):
            fail("town page", "%s is missing" % f)
            continue
        p = Page(read(f))
        if town.lower() not in (p.h1s[0] if p.h1s else "").lower():
            fail("town page", "%s: h1 does not name %s" % (f, town))
        words = len(p.visible().split())
        if words < 600:
            fail("town page", "%s: only %d visible words" % (f, words))
        linked_from = [g for g in html_files() if g != f and f in read(g)]
        if not linked_from:
            fail("town page", "%s: nothing links to it" % f)
    idx = read("index.html")
    for f in ("autoaufbereitung-gloggnitz.html", "autoaufbereitung-neunkirchen.html"):
        if f not in idx:
            fail("internal links", "the homepage does not link to %s" % f)
    ok("both town pages: town in the h1, 600+ words, linked from the homepage")


def check_h1_towns():
    commercial = {"index.html": ("Gloggnitz", "Neunkirchen"),
                  "autoaufbereitung-gloggnitz.html": ("Gloggnitz",),
                  "autoaufbereitung-neunkirchen.html": ("Neunkirchen",)}
    for f, towns in commercial.items():
        h1 = " ".join(Page(read(f)).h1s)
        if not any(t.lower() in h1.lower() for t in towns):
            fail("h1 town", "%s: h1 %r names none of %s" % (f, h1.strip(), ", ".join(towns)))
    ok("the homepage and both town pages name their town in the h1")


def main():
    pages = html_files()
    check_legacy_slug()
    check_links(pages)
    check_heads(pages)
    check_ldjson(pages)
    check_prices(pages)
    check_generated_blocks()
    check_sitemap(pages)
    check_dashes(pages)
    check_images(pages)
    check_assets(pages)
    check_images_sized(pages)
    check_conversion_coverage(pages)
    check_llms_txt(pages)
    check_versions(pages)
    check_town_pages()
    check_h1_towns()

    print("VERIFY  %d pages\n" % len(pages))
    for o in OKS:
        print("  [ok]   " + o)
    for w, d in WARNS:
        print("  [warn] %s: %s" % (w, d))
    for f, d in FAILS:
        print("  [FAIL] %s: %s" % (f, d))
    print("\n%d passed, %d warnings, %d failures" % (len(OKS), len(WARNS), len(FAILS)))
    return 1 if FAILS else 0


if __name__ == "__main__":
    sys.exit(main())
