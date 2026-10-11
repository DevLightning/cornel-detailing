# -*- coding: utf-8 -*-
"""Rebuild sitemap.xml from the real page files.

Page URLs only: anchor (#fragment) URLs are not separate pages and Google
ignores them, so they are never written here.

Usage:  python build/gen_sitemap.py
"""
import io, os, sys, time

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = "https://corneldetailing.com/"
TODAY = time.strftime("%Y-%m-%d")

# file, url path, priority, changefreq
PAGES = [
    ("index.html",                                  "",                                             "1.0",  "weekly"),
    ("autoaufbereitung-gloggnitz.html",             "autoaufbereitung-gloggnitz.html",              "0.95", "weekly"),
    ("autoaufbereitung-neunkirchen.html",           "autoaufbereitung-neunkirchen.html",            "0.95", "weekly"),
    ("keramikversiegelung-neunkirchen.html",        "keramikversiegelung-neunkirchen.html",         "0.85", "monthly"),
    ("lackpolitur-neunkirchen.html",                "lackpolitur-neunkirchen.html",                 "0.85", "monthly"),
    ("innenreinigung-gloggnitz.html",               "innenreinigung-gloggnitz.html",                "0.85", "monthly"),
    ("galerie.html",                                "galerie.html",                                 "0.80", "monthly"),
    ("autoaufbereitung-kosten-neunkirchen.html",    "autoaufbereitung-kosten-neunkirchen.html",     "0.75", "monthly"),
    ("keramikversiegelung-vs-politur-neunkirchen.html", "keramikversiegelung-vs-politur-neunkirchen.html", "0.70", "monthly"),
    ("auto-fruehjahrspflege-neunkirchen.html",      "auto-fruehjahrspflege-neunkirchen.html",       "0.65", "monthly"),
    ("autopflege-tipps-winter-gloggnitz.html",      "autopflege-tipps-winter-gloggnitz.html",       "0.65", "monthly"),
    ("fahrzeugaufbereitung-gloggnitz-wichtig.html", "fahrzeugaufbereitung-gloggnitz-wichtig.html",  "0.65", "monthly"),
    ("impressum.html",                              "impressum.html",                               "0.20", "yearly"),
    ("datenschutz.html",                            "datenschutz.html",                             "0.20", "yearly"),
]


def main():
    missing = [f for f, _, _, _ in PAGES if not os.path.exists(os.path.join(ROOT, f))]
    if missing:
        sys.exit("missing page files: " + ", ".join(missing))

    out = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
           '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
           '']
    for f, path, prio, freq in PAGES:
        url = BASE + path
        lastmod = time.strftime("%Y-%m-%d", time.localtime(os.path.getmtime(os.path.join(ROOT, f))))
        out.append('  <url>')
        out.append('    <loc>%s</loc>' % url)
        out.append('    <lastmod>%s</lastmod>' % lastmod)
        out.append('    <changefreq>%s</changefreq>' % freq)
        out.append('    <priority>%s</priority>' % prio)
        if path not in ("impressum.html", "datenschutz.html"):
            for lang in ("de-AT", "de", "x-default"):
                out.append('    <xhtml:link rel="alternate" hreflang="%s" href="%s" />' % (lang, url))
        out.append('  </url>')
        out.append('')
    out.append('</urlset>')

    io.open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf-8", newline="").write("\n".join(out) + "\n")
    print("sitemap.xml: %d page URLs, 0 anchor URLs (generated %s)" % (len(PAGES), TODAY))


if __name__ == "__main__":
    main()
