# -*- coding: utf-8 -*-
"""Rewrites the body of galerie.html (hero, gallery block, viewer) from the
projects array in script.js. Head, header, video block, final CTA and footer
are taken from the file as it is, so every ?v= number and the SEO head stay
untouched. Safe to run again.

When to run: after a photo was added to, removed from or changed in the
projects array in script.js. Order:
    python build/make_gallery_thumbs.py        (needs Pillow; writes assets/gallery/p-gal-<slug>-400.webp and -640.webp)
    python build/prerender_gallery.py
    python build/prerender_gallery.py --check  (writes nothing; exit code 1 when galerie.html is stale)
The page also repairs itself: script.js (renderGallery) compares the photos
in galerie.html with the array on every visit and rebuilds the list when
they differ. This script only keeps the HTML that a visitor and Google get
BEFORE any script runs in step with the array. The tile markup below must
stay the same as galleryTileMarkup() in script.js, and SIZES the same as
GALLERY_SIZES there."""
import io, os, re, html, sys
from gallery_data import ROOT, projects, ordered, vehicle

PATH = os.path.join(ROOT, "galerie.html")
src = io.open(PATH, encoding="utf-8").read()

WA = '<path d="M12.1 3a8.9 8.9 0 0 0-7.7 13.3L3 21l4.9-1.3A9 9 0 1 0 12.1 3zm0 16.3c-1.3 0-2.5-.3-3.6-.9l-.3-.1-2.9.8.8-2.8-.2-.3a7.3 7.3 0 1 1 6.2 3.3zm4-5.5c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.4.5c-.1.2-.3.2-.5.1-.2-.1-.9-.3-1.7-1.1-.7-.6-1.1-1.3-1.2-1.5-.1-.2 0-.3.1-.4l.3-.4.2-.3c.1-.1.1-.3 0-.4 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.1.9 2.2c.1.2 1.6 2.5 4 3.4 2.3.9 2.3.6 2.7.6.4-.1 1.4-.6 1.6-1.2.2-.6.2-1 .1-1.1-.1-.1-.3-.2-.5-.3z"/>'
TEL = '<path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3.1.5.6 0 1 .4 1 1V20a1 1 0 0 1-1 1C10.7 21 3 13.3 3 4a1 1 0 0 1 1-1h3.6c.6 0 1 .4 1 1 0 1.1.2 2.1.5 3.1.1.4 0 .9-.3 1.2l-2.2 2.5z"/>'

SIZES = "(max-width: 679px) 46vw, (max-width: 959px) 30vw, (max-width: 1279px) 23vw, (max-width: 1359px) 18vw, (max-width: 1679px) 15vw, (max-width: 2199px) 13vw, (max-width: 2499px) 11vw, 9vw"
SIZES_WIDE = "(max-width: 679px) 92vw, " + SIZES.split(", ", 1)[1]
EAGER = 6

ps = projects()
order = ordered(ps)
e = lambda s: html.escape(s, quote=True)


def tile(p, i, wide):
    t, l = e(p["title"]), e(p["label"])
    thumb = "assets/gallery/p-gal-%s-%%d.webp" % p["slug"]
    return (
        '            <li class="gal-item%s" id="%s" data-slug="%s" data-category="%s">\n'
        '              <a class="gal-tile" href="%s" aria-label="%s · %s · Foto vergrößern">\n'
        '                <span class="gal-photo"><img src="%s" srcset="%s 400w, %s 640w" sizes="%s" width="400" height="500" alt="%s · %s" loading="%s" decoding="async"%s /></span>\n'
        '                <span class="gal-cap"><strong>%s</strong><span class="gal-label">%s</span></span>\n'
        '                <span class="gal-zoom" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg></span>\n'
        '              </a>\n'
        '            </li>\n'
    ) % (" gal-item--wide" if wide else "", p["slug"], p["slug"], e(p["category"]), p["asset"], t, l,
         thumb % 400, thumb % 400, thumb % 640, SIZES_WIDE if wide else SIZES, t, l,
         "eager" if i < EAGER else "lazy", ' fetchpriority="high"' if i < 2 else "",
         re.sub(r'[^\s]+-[^\s]+', lambda m: '<span class="gal-nb">%s</span>' % m.group(0), t), l)


cats = []
for p in ps:
    if p["category"] not in [c for c, _ in cats]:
        cats.append((p["category"], sum(1 for q in ps if q["category"] == p["category"])))
chips = ['              <button type="button" class="gal-chip is-active" data-filter="all" aria-pressed="true">Alle <span class="gal-chip-n">%d</span></button>\n' % len(ps)]
for c, n in cats:
    chips.append('              <button type="button" class="gal-chip" data-filter="%s" aria-pressed="false">%s <span class="gal-chip-n">%d</span></button>\n' % (e(c), e(c), n))

n_vehicles = len(set(vehicle(p) for p in ps if vehicle(p)))
odd = len(order) % 2 == 1
tiles = "".join(tile(p, i, odd and i == len(order) - 1) for i, p in enumerate(order))

m = re.search(r'<!-- ── VIDEO.*?</section>\n', src, re.S)
video = m.group(0)
video = video.replace("<!-- ── VIDEO SHOWCASE ──────────────────────────────── -->", "<!-- ── VIDEO · the work in motion, after the photos ───── -->")
m = re.search(r'        <!-- ── CTA ─.*?</section>\n', src, re.S)
cta = m.group(0)

MAIN = u'''      <main>

        <!-- ── HERO · the homepage look in a short band: photo, gold line, white
             line. No sentence and no numbers here: the chips right below
             carry the counts, and the photos start on the first screen ── -->
        <section class="gallery-hero gal-hero">
          <div class="gallery-hero-bg" aria-hidden="true"></div>
          <div class="gallery-hero-inner">
            <p class="gal-hero-place">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
              </svg>
              Galerie · Enzenreith bei Gloggnitz
            </p>
            <h1><span class="gal-hero-accent">Ausgewählte Arbeiten</span> <span class="gal-hero-rest">und Referenzen.</span></h1>
          </div>
        </section>

        <!-- ── GALLERY · chips, photos, booking card ───────────────────────
             The photos below are a copy of the projects array in script.js,
             written into the page so they are there before any script runs.
             script.js compares them with the array on every visit and
             rebuilds the list by itself when a photo was added or changed. -->
        <section class="section gal-section" id="autoaufbereitung-galerie-gloggnitz" aria-label="Fotos abgeschlossener Arbeiten">
          <div class="gal-bar">
            <div class="gal-chips" id="galFilters" role="group" aria-label="Fotos nach Kategorie filtern">
%(chips)s            </div>
          </div>

          <ul class="gal-grid" id="galGrid" aria-label="Projektreferenzen">
%(tiles)s            <li class="gal-book" id="galBook">
              <div class="gal-book-in">
                <h2>So soll Ihr Auto auch aussehen?</h2>
                <div class="glass-actions">
                  <a class="button button-whatsapp" data-whatsapp-link href="/#kontakt">
                    <svg viewBox="0 0 24 24" aria-hidden="true">%(wa)s</svg>
                    <span>Termin anfragen</span>
                  </a>
                  <a class="button button-secondary" data-call-link href="tel:+436764391253">
                    <svg viewBox="0 0 24 24" aria-hidden="true">%(tel)s</svg>
                    <span>Anrufen</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>

          <p class="gal-status">
            <span id="galStatus" aria-live="polite">%(n)d Aufnahmen · alle Kategorien</span>
            <button type="button" class="gal-reset" id="galReset" hidden>Alle %(n)d anzeigen</button>
          </p>
        </section>

        %(video)s
%(cta)s
      </main>
'''

LIGHTBOX = u'''    <!-- ── PHOTO VIEWER (opened by a tap on a photo) ────────── -->
    <div class="glb" id="galLightbox" role="dialog" aria-modal="true" aria-labelledby="glbTitle" aria-hidden="true">
      <div class="glb-view">
        <div class="glb-stage" id="glbStage">
          <div class="glb-track" id="glbTrack">
            <div class="glb-slide"><img alt="" width="1100" height="1466" decoding="async" draggable="false" /></div>
            <div class="glb-slide"><img alt="" width="1100" height="1466" decoding="async" draggable="false" /></div>
            <div class="glb-slide"><img alt="" width="1100" height="1466" decoding="async" draggable="false" /></div>
          </div>
        </div>
        <div class="glb-ui">
          <button class="glb-btn glb-prev" id="glbPrev" type="button" aria-label="Vorheriges Foto">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <p class="glb-count" id="glbCount" aria-live="polite" aria-atomic="true">1 / %(n)d</p>
          <button class="glb-btn glb-next" id="glbNext" type="button" aria-label="Nächstes Foto">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>
          </button>
          <button class="glb-btn glb-close" id="glbClose" type="button" aria-label="Großansicht schließen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
      </div>

      <div class="glb-panel">
        <div class="glb-info">
          <span class="glb-label" id="glbLabel"></span>
          <h2 class="glb-title" id="glbTitle"></h2>
          <p class="glb-desc" id="glbDesc"></p>
        </div>
        <div class="glb-more">
          <p class="glb-more-title" id="glbMoreTitle">Weitere Fotos</p>
          <div class="glb-thumbs" id="glbThumbs"></div>
        </div>
        <div class="glb-book">
          <p class="glb-book-q">So soll Ihr Auto auch aussehen?</p>
          <div class="glb-actions">
            <a class="button button-whatsapp" data-whatsapp-link href="/#kontakt">
              <svg viewBox="0 0 24 24" aria-hidden="true">%(wa)s</svg>
              <span>Termin anfragen</span>
            </a>
            <a class="button button-secondary" data-call-link href="tel:+436764391253">
              <svg viewBox="0 0 24 24" aria-hidden="true">%(tel)s</svg>
              <span>Anrufen</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
'''

vals = dict(n=len(ps), nv=n_vehicles, nc=len(cats), chips="".join(chips), tiles=tiles, wa=WA, tel=TEL,
            video=video.strip("\n").lstrip(), cta=cta.rstrip("\n"))

out = src
out, n1 = re.subn(r'      <main>.*?</main>\n', lambda _: MAIN % vals, out, count=1, flags=re.S)
out, n2 = re.subn(r'    <!-- ── (?:LIGHTBOX|PHOTO VIEWER).*\Z', lambda _: LIGHTBOX % vals, out, count=1, flags=re.S)
assert n1 == 1 and n2 == 1, (n1, n2)
if 'href="gallery.css' not in out:
    out, n3 = re.subn(r'(    <link rel="stylesheet" href="styles\.css\?v=\d+" />\n)',
                      lambda m: m.group(1) + '    <link rel="stylesheet" href="gallery.css?v=1" />\n', out, count=1)
    assert n3 == 1
if "--check" in sys.argv:
    print("galerie.html is up to date" if out == src else "galerie.html is STALE: run python build/prerender_gallery.py")
    sys.exit(0 if out == src else 1)
io.open(PATH, "w", encoding="utf-8", newline="\n").write(out)
print("written", len(out), "chars ·", len(order), "photos ·", n_vehicles, "vehicles ·", len(cats), "categories")
