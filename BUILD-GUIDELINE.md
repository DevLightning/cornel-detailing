# Build guideline · local SEO work (2026-10-11)

Rules every change in this round had to satisfy. `build/verify_seo.py` enforces the
machine-checkable ones; the rest are review rules. Nothing ships unless the verifier
passes with 0 failures.

## 1. Honesty (no cheating)

1. **No invented facts.** Opening hours, certifications, social profiles, awards,
   years in business, review counts, addresses and prices are only written down if
   they already exist in the project or in `site-config.js`. Anything unknown is
   left out and reported to the owner instead of guessed.
2. **No hidden text, no cloaking.** Every keyword-bearing string must be visible to
   a human visitor on the rendered page. No `display:none` keyword blocks, no
   white-on-white, no text stuffed into `alt`/`aria-label` that is not a real
   description, no content served to crawlers that users do not see.
3. **No keyword stuffing.** A town name appears where it reads naturally. No
   misspelling bait ("Neukirchen"), no repeated city lists, no doorway pages: each
   new page must be genuinely useful to a person from that town.
4. **No fake structure.** Headings describe the section below them. Schema.org
   describes what is actually on the page.

## 2. Single source of truth

5. Package names, prices, service lists and the recommended package live **only** in
   the `packages` array in `script.js`. Prices are never retyped into HTML by hand.
6. Static package HTML in `index.html` and the price tables on the town pages are
   **generated** by `build/prerender_packages.py` between `BUILD:` markers. After any
   price change, re-run the script (see README) and re-verify.
6b. A price shown anywhere else (the "ab" price on the four homepage service
    cards) is never typed either. The tag carries a marker, `data-price="min:innen"`
    or `data-price="pkg:9"`, and `python build/gen_price_marks.py` writes the
    number from the packages array. `verify_seo.py` fails when a marked price
    is stale or a service card loses its marker. In `script.js` the same rule
    is `lowestPkwPrice()`.
7. The generated static markup must be byte-identical to what `buildPackagesHtml()`
   produces in the browser. This is checked in a real browser, not by eye.
8. Contact data (phone, WhatsApp, address, service area) stays in `site-config.js`.
8b. Generated page images are written by `build/make_page_images.py` into
    **`assets/gallery/` with a `p-` prefix**, never into a new folder. The
    site's upload carries existing folders but has twice failed to carry a
    newly created one, which left the pages with broken images in production.
    Each photo is written at two widths and referenced with `srcset`.

## 3. Design and code constraints

9. No new dependencies, frameworks or icon libraries. Vanilla HTML/CSS/JS only.
10. Reuse existing CSS tokens and component classes (`.section`, `.glass-row`,
    `.glass-card`, `.value-card`, `.faq-item`, `.cta-card`, `.button*`, `u-*`
    helpers). New CSS only when no existing class fits, and only with existing
    tokens (no new palette).
11. Side margins come from `var(--pad-x)`; never fixed px or a centred max-width
    column (see memory `layout-side-margins`).
12. Mobile first: 360px baseline, verified at 360 / 375 / 412 / 768 / 1280 / 1920.
    No horizontal overflow at any of them. Touch targets >= 44x44px.
13. Pricing section internals (nesting, card levels, recommended-card treatment)
    follow memory `pricing-section-design`. The hero follows section 16.

## 4. Copy rules

14. German, formal "Sie". Austrian spelling.
15. No em or en dashes in visible copy. Use `·` as the separator.
16. Prices, package names and package contents are never reworded.

## 5. Per-page SEO checklist

Every page must have:

17. One `<h1>`, containing the service and (on commercial pages) the town.
18. A unique `<title>` <= 65 characters and a unique meta description of 70-165
    characters.
19. A self-referencing `<link rel="canonical">` matching its real URL.
20. `og:url` matching the canonical.
21. Valid JSON-LD (parses as JSON) referencing `#business`, plus a `BreadcrumbList`.
22. An entry in `sitemap.xml`, and at least one internal link pointing to it.
23. `alt` on every `<img>`.

## 6. URL hygiene

24. No URL, anchor id or internal link may contain a town the business is not in
    (`wuerflach` is gone).
25. Every renamed file keeps a permanent 301 redirect from its old path in
    `vercel.json` (and `.htaccess` for the legacy host).
26. `sitemap.xml` contains page URLs only, never `#fragment` URLs, and every `<loc>`
    must resolve to a file that exists.
27. No broken internal links and no links to anchor ids that do not exist.

## 7. Verification gate

Before the work is called done:

28. `python build/verify_seo.py` passes with 0 failures.
29. Browser check in a real Chrome: no console errors, static package markup equals
    the JS-rendered markup, the vehicle switcher still updates prices and WhatsApp
    links, package panels still open and close.
30. Pre-JS visible word count recorded per page (what a crawler sees without
    running JavaScript) and compared against the previous build.
31. Screenshots at 375px and 1920px reviewed for layout regressions.

## 8. Conversion tracking

32. Every `tel:` and `wa.me` link must match the CTA selectors in `script.js`.
    `build/verify_seo.py` fails the build when one does not.
33. Conversions follow Google's click-conversion guideline: a `conversion`
    event with `send_to`, `value` and `currency`, sent on the click, with
    `event_callback` carrying the visitor to the link (beacon only where the
    page is already being hidden, which a callback cannot survive).
34. Exactly one place sends a conversion: the delegated click listener. No
    inline `onclick` helpers, so a click can never be counted twice.
35. Before shipping a change to tracking, run `build/run_track_check.py`
    (clicks every contact link on every page) and, with the local preview
    running, `build/run_live_tag_check.py --all` (loads Google's real tag on
    every page and reads back the conversion request). Neither can reach the
    live Ads account: the endpoints are resolved to 127.0.0.1 and every
    network API is intercepted.
36. After deploying, run the same sweep against production:
    `python build/run_live_tag_check.py --url https://corneldetailing.com --all`
    Every row must read ok. A row reading NONE is a contact button whose
    clicks Google never sees.

## 9. Google Tag Manager

37. The container (GTM-WRSNR9RR) is loaded by `consent.js` after the visitor
    accepts, never from `<head>` and never for a visitor who declines. The
    standard snippet would contact Google on page load, which is what the
    consent gate exists to prevent.
38. The `<noscript>` iframe from Google's snippet is deliberately NOT on the
    pages: without JavaScript there is no banner, so there is no consent to
    rely on, and the iframe would contact Google anyway.
39. Do not add a Google Ads conversion tag inside the container for the labels
    the site already sends (`-_FGCIXd37UcEKq3geIC`, `fOZQCIjd37UcEKq3gelC`).
    The site fires those itself; a second tag would count every lead twice.
40. `build/run_gtm_check.py` must pass: nothing from Google before consent,
    the container and the Ads tag after it, and nothing at all when the
    visitor declines.

## 10. llms.txt

41. `/llms.txt` is the summary AI assistants read. It is generated by
    `build/gen_llms.py`: the prices come from the `packages` array and every
    link is checked against a real file, so it cannot drift from the site.
42. `build/verify_seo.py` fails the build if a link in it points at a page
    that does not exist, at a missing section anchor, or at a domain other
    than corneldetailing.com.

## 11. Snippets and speed

43. A meta description must fit a mobile snippet: at most ~670px at 14px
    Arial, roughly 100 characters. Measure, do not count characters.
44. Titles stay under ~580px at 20px Arial with the target keyword first.
45. Page scripts start in two waves: everything a visitor can touch
    immediately in the DOMContentLoaded handler, everything below the fold
    inside requestIdleCallback. No single task may exceed 50ms.
46. Long pages set `content-visibility: auto` on below-fold sections
    (`.tp-page .section`) so the first paint does not lay out the whole page.

## 12. Nothing may render blank

47. `class="reveal"` starts at `opacity: 0` and is only shown once an
    IntersectionObserver has seen it. The observer is created in the first
    startup wave, so anything rendered in the second wave must be handed to
    it afterwards with `revealScan()`. A card that is never observed is
    invisible, not merely unanimated: the image loads and the section is
    blank. This is what broke the homepage showcase and the gallery after
    rule 45 split startup into two waves.
48. `revealScan()` may be called as often as needed; observing an already
    observed element is a no-op. `setupReveal()` falls back to revealing
    everything when the browser has no IntersectionObserver, so a missing
    API never leaves the page empty.
49. The second startup wave runs each step through `run()`, which catches and
    logs. One failing section must not take the rest of the page down with it.
50. `build/verify_seo.py` fails the build when script.js generates markup with
    `class="reveal"` and the startup sequence does not call `revealScan()`
    after it. `build/run_behaviour_check.py` asserts every `<img>` on every
    page actually decoded.
51. A verification harness that produces no assertions is a failure, not a
    pass. `run_behaviour_check.py` checks every run reached its final
    assertion, so a harness that throws or hangs can never report a clean
    sweep. Note that IntersectionObserver callbacks and requestAnimationFrame
    do not fire reliably under Chrome's `--virtual-time-budget`: assert
    reveal wiring statically, not by scrolling in the harness.

## 13. Town page layout

52. Regenerating the town pages writes an EMPTY `<!-- BUILD:pricetable -->`
    placeholder. `python build/gen_price_table.py` must run straight after
    `make_town_pages.py`, or three pages silently lose their price table.
    `verify_seo.py` catches it ("both town pages carry the generated price
    table with 9 rows"), so never skip the verifier after a regeneration.
53. A town page IS the homepage: same sections, same components (hero,
    showcase strip, value grid, reviews, contact card, location card, FAQ,
    CTA), with only the headline, the lead and the location copy fitted
    to the town, plus the price table. Anything bespoke here made the pages
    drift away from the site they belong to. A bespoke town layout was tried
    twice and rejected both times.
54. Nothing in styles.css may style only a town page. The town layer holds
    exactly two things: .tp-more and the .tp-page content-visibility rule.
    If a town page needs a look, give it to the shared component so the
    homepage gets it too.
55. The town hero preloads the same background the homepage preloads
    (hero-urus.webp). Never preload an image the page does not show.
56. Decorative lead-ins stay short. The FAQ answers carry the substance and
    the word count; `verify_seo.py` enforces 600+ visible words per town page,
    so trim the lead-ins, never the answers. Current counts: Gloggnitz 657,
    Neunkirchen 660.
57. `scratchpad/shot.py` forces `loading="lazy"` images to eager before
    capturing. The screenshot iframe is the full page height so nothing ever
    scrolls, and without this the shot shows blanks a real visitor never sees.
    Never diagnose a missing image from a screenshot alone: confirm in the
    browser with `naturalWidth > 0`.

## 14. Polish checks

58. `python build/run_polish_check.py` audits every page at phone and desktop
    width for text size, contrast against the resolved background, tap target
    size, duplicate ids, missing accessible names, heading order, stray
    hyphens and horizontal overflow. Run it after any visual change.
59. It reports contrast only where the backdrop is a solid colour. Text over a
    photo or a gradient is reported as ONPHOTO, because a computed ratio there
    would be fiction. Measure those by sampling the real pixels with a canvas,
    as was done for the service card prices (6.4:1 to 9.8:1).
60. Known and accepted: the Google star glyphs are 1.71:1 on white. They are
    `aria-hidden`, decorative, and the rating is printed beside them as "5,0"
    in dark text, so no information depends on the colour.
61. Text floor is 11.5px. Below that a label stops being readable on a phone.
62. Every control a finger hits is at least 44px tall. Where the visual must
    stay small, grow the hit area with a transparent `::after` carrying
    negative insets, never the box. Grow vertically first so an expanded area
    does not swallow the control next to it.
63. The header is identical on every page except the two legal pages: nav,
    then the phone number, then WhatsApp. The phone button was missing from
    twelve of fourteen pages, which on a local trade site is a conversion bug,
    not a style detail. It lives in `chrome_parts.py` for the town pages.

## 15. Search titles

64. One pattern for every page that targets a search: `Keyword Ort · Cornel
    Detailing`. The keyword comes first because that is what people type and
    what Google bolds. Guides keep their question or statement form, which is
    what wins those searches.
65. One town per title. A service page that named two towns matched neither
    search exactly; the second town lives in the body text and headings
    instead, where it still counts.
66. Never use `&` in a title, a meta value or structured data. Google rendered
    `&amp;` literally in the live snippet for corneldetailing.com, and inside a
    JSON-LD script block nothing decodes it at all. Write `und`. Enforced by
    `verify_seo.py` ("no ampersand in any title, meta value or structured
    data"), proven to fail when the entity is reintroduced.
67. The separator is a real `·` character, not `&middot;`, for the same reason.
68. og:title and twitter:title follow the title, with the brand appended when
    the title does not already carry it, so a shared link always names the
    business.
69. Measure snippets, never count characters: `Keramikversiegelung` costs far
    more width than nineteen average characters. `verify_seo.py` measures every
    title against 580px and every description against 680px in Arial, the
    mobile budgets. Two town descriptions had drifted to 1045px and 985px.

## 16. One system (November 2026)

The owner's brief: he likes the colours and the style, he dislikes the
proportions and the lack of symmetry. Two attempts that changed the look were
rejected on sight (a split hero on a flat panel; a flat skin without glow and
shadows: "too unprofessional, keep the feeling of the original"). So:

70. Polish means order, never a new look. The original surface stays: the dark
    workshop photo under the deep vignette, the gold keyword with its glow,
    the glowing gold button, white blocks with soft shadows, glass cards with
    the gold top line. Change sizes, spacing, alignment, order and the number
    of elements. Do not remove a shadow, gradient or glow he did not name.
71. Every size decision lives in one layer at the end of `styles.css`, between
    the markers `<<< SYSTEM 2 >>>` and `<<< /SYSTEM 2 >>>`. A new block reads
    its tokens (`--gap-head`, `--gap-grid`, `--gap-split`, `--pad-card`,
    `--pad-x`, `--pad-y`, `--btn-h`, `--ico-tile`, `--ico-glyph`, `--fs-h1`,
    `--fs-h2`, `--fs-h3`, `--fs-lead`, `--fs-body`, `--fs-meta`) and brings no
    size of its own. Spacing uses the steps 4 8 12 16 24 32 48 64.
72. Symmetry rule. A block that spans the page has its head (tag, title, at
    most one sentence) centred over a grid of equal columns, at every width.
    Only a block that pairs text with a photo, video or map is split in two
    (Inhaber, Keramik, Standort); there the text is left aligned from 1041px
    and centred below it. There is no third layout.
73. One of each. One button height (`--btn-h`: 52px, 60px from 1921px) and the
    pill shape at every width; one title size per level; three text sizes;
    one icon tile (`.icon-badge`, `.op-ico`, `.ceramic-benefit-icon`,
    `.map-facade-pin`); outline icons drawn with one line weight set in CSS
    (`svg[fill="none"]`, `--ico-stroke`), so a `stroke-width` attribute in the
    markup no longer matters. Solid marks are only the ones inside buttons,
    the rating stars and play and pause.
74. The hero is one centred column on the photo: the keyword in gold, the
    town line, one sentence, the single WhatsApp button "Termin anfragen", the
    link "Alle Pakete ansehen", two proof lines. No second button, no pill, no
    boxed promise. No price in the hero: the owner upsells, so the cheapest
    package must not be the first number a visitor reads.
75. The WhatsApp request is labelled "Termin anfragen" wherever it appears on
    the homepage and the call is "Anrufen". A label that fits a desktop and is
    cut off on a 390px phone ("Termin per WhatsApp anfr...") is a bug.
76. Homepage order (changed 2026-11-17, the owner: "pricing and contact are
    too far down, conversion over everything"): hero, Referenzen (is the work
    good), Leistungen (what do I need), Pakete (what does it cost), the call
    line under the packages with BOTH buttons (WhatsApp and phone), then
    Bewertungen, Inhaber, Keramik, FAQ, Standort, Kontakt. Nothing may stand
    between the four service cards and the price list: the links to the
    service pages sit under the FAQ for that reason. The page ends on the
    booking block. Measured: the prices start 2.6 screens down on a phone
    (was 4.9) and 2.0 on a 2560x1080 monitor (was 4.0).
77. Wide screens are filled, not framed, and get MORE COLUMNS AND MORE AIR,
    NOT BIGGER THINGS (changed 2026-11-17, the owner: "too packed, everything
    is too big"). From 1600px the shell follows the screen (70px margin at
    2560px). Text, buttons and icons keep their desktop size up to 2999px;
    only from 3000px is there one small step. The width goes into columns:
    photo strip 4.4 / 5.4 / 6.4 photos (1921 / 2400 / 3000px), reviews 4 / 5 / 6
    (1500 / 2200 / 3000px), packages four across from 2400px. Anything with a
    height follows the height of the screen, never its width: the hero is
    `min(760px, 60svh)`. An ultrawide monitor is wide and SHORT (2560x1080,
    3440x1440): judge every layout change by a real viewport screenshot at
    those two sizes, looking at what is above the fold. A full page screenshot
    hides exactly this mistake.
77b. A service card answers with one press: `setupServiceCards()` moves the
    page to that category and opens the service list of its package through
    the same path as a press on "Leistungen". It runs in the first startup
    wave. Hover effects on cards sit inside `@media (hover: hover)`; a touch
    screen gets a pressed state instead, because a hover state sticks after
    the tap.
78. When a component's rules are scattered over many layers of the file, lift
    them out whole and rewrite them in one place rather than adding another
    override on top. The classes this was done for: the hero, `.value-card`,
    `.icon-badge`, `.faq-item`, `.mid-cta`, `.location-*`, `.map-facade`.
    A class shared with other pages (`.hero-location` is also the pill of the
    subpage heroes) must be given back its rule: after lifting anything out,
    run the polish check against a copy of the old site and compare.
79. Stars and other small drawings repeated in a row are written with absolute
    coordinates, not with `transform` on each path: the screenshot tool and
    the fade in rules reset transforms inside `.reveal`.
80. The two town pages are patched in place. The generator that once wrote
    them lives outside the project and is stale; do not re-run it.

## 17. Gallery (rebuilt 2026-11-18)

81. The gallery page has its own stylesheet, `gallery.css` (root folder, loaded
    after `styles.css`, own `?v=`). New gallery rules go there, not into
    `styles.css`. It uses the SYSTEM 2 tokens and `--pad-x` like every page.
82. The photos are written into `galerie.html` as static tiles, so they are on
    screen before any script runs and Google reads the captions. The source is
    still the `projects` array in `script.js`. After adding, removing or
    changing a photo there:
    `python build/make_gallery_thumbs.py` (needs Pillow; writes
    `assets/gallery/p-gal-<slug>-400.webp` and `-640.webp`), then
    `python build/prerender_gallery.py`, then `--check`. The tile markup in
    that script must stay the same as `galleryTileMarkup()` in `script.js`.
    Do not hand edit the gallery block or the viewer in `galerie.html`: the
    next prerender overwrites it. Change the template in the script instead.
83. Upload as one set: `galerie.html`, `gallery.css`, `script.js` and the
    `p-gal-*.webp` thumbnails, thumbnails first, then the other files in one
    upload. Measured 2026-11-18: the new `script.js` with the gallery page from
    before the rebuild (ids `galleryGrid`, `galleryFilters`) shows NO photos.
    Between versions of the new page the script repairs the list itself when
    the array and the HTML differ, and a missing thumbnail falls back to the
    full photo.
84. Photos first. The hero is the homepage hero as a short band (same photo
    `hero-urus.webp`, as the cut down copy `assets/gallery/gal-hero-band.webp`:
    the top 2.4:1 of it, 1920px wide, quality 48; same dark veil, gold line and smaller white line)
    and carries one place line and the headline, nothing else: no sentence, no
    numbers, no button (the owner, 2026-11-18: "more professional to match
    the site theme, less text"). The counts live on the chips. Its rules are
    under `.gal-hero` in `gallery.css`; the eight other subpage heroes are not
    touched. Measured: 139px high on a 390px phone, 176px at 1920x1080, text
    at least 4.8:1 on the brightest pixel behind it. Nothing may be put
    between the hero and the grid except the category chips. Wide screens get
    more columns (2 on phones up to 10), never bigger tiles. The grid ends
    with the booking card (WhatsApp first, call second); the viewer carries
    the same two buttons under every photo.
85. All gallery startup runs through `startGallery()` in the first startup wave.
    No gallery markup uses class `reveal`. The viewer is `#galLightbox`
    (class `glb`); a link `galerie.html#<slug>` opens that photo.
86. Old gallery rules are still in `styles.css` and match nothing any more
    (`.gallery-filter*`, `.gallery-grid`, `.gallery-tile*`, every `.lightbox*`).
    They are harmless. Remove them only in a change of their own, with before
    and after screenshots of every page. `.gallery-hero*` and `.gallery-stat`
    are NOT dead: eight other pages use them.
87. The hero photo (changed 2026-11-18, the owner: replace the Audi with the
    Lamborghini Urus SE) is `assets/gallery/hero-urus.webp`, used by the
    homepage and both town pages. A new hero photo gets a NEW file name:
    images carry no `?v=`, so an overwritten file stays the old picture for
    returning visitors. Change together: the url in `.hero-bg`, the three
    preload links, both `primaryImageOfPage` entries, and the gallery band
    (`gal-hero-band.webp`, the top 2.4:1 of the hero file, 1920px, quality 48).
    The site feeling is put into the FILE, never into the veil: walls and
    reflections lifted (gamma 0.72), a little less colour, cool shadows, pale
    floor taken back, clutter in the corner darkened. A dealer plate with
    another company's name is painted plain in the hero file. The photo is
    16:9, so `.hero-bg` has a position per screen shape (phone 50% 50%,
    laptop 30%, from 1441px 52%, from 1921px 62%). Measured on real pixels:
    gold headline at least 4.0:1, small lines at least 5.2:1.
88. No sentence under the gallery photos (the owner, 2026-11-18: "less text
    under the images"). A tile shows vehicle and work; the sentence of the
    `description` field is shown in the viewer only. Removed from the markup,
    not hidden.
89. A landscape photo in the gallery: `make_gallery_thumbs.py` writes its
    small copies as tall as a portrait one (500px and 800px high), because a
    4:5 tile is filled by the height. Photos of one vehicle share the first
    two words of their title, which keeps them side by side and counts them
    as one vehicle. Labels say what the photo shows; name a service only if
    the owner said it was done.
90. The hero film (added 2026-11-18, the owner: "this video instead of the
    image on the header, the right size for all displays, compressed"). The
    PHOTO stays the first picture, the preload and the fallback; the film
    lies on it, under the veil, on the homepage and both town pages.
    - Three files, written by `python build/make_hero_video.py <source>`:
      `hero-film-phone.mp4` (up to 600px), `hero-film.mp4`,
      `hero-film-wide.mp4` (from 1600px). Each is cut to the shape of its
      hero, scene by scene; the scene list in the script belongs to one edit.
      About 0.5, 0.9 and 1.2 MB for 10 seconds. The 19 MB source stays outside
      the project.
    - The `<video>` has NO address in the HTML. `setupHeroFilm()` gives it one
      400ms after the load event, so the film never competes with the photo
      (measured: the largest picture of the page is still `hero-urus.webp`).
      It shows itself only on the `playing` event: a phone that will not start
      it (low power mode) shows the photo and nothing else.
    - No film for `prefers-reduced-motion`, for data saver, or on 2g.
    - It plays by itself, always, with NO button: a first version had a small
      pause button in the corner of the hero and the owner had it removed
      (2026-11-18: "remove the play button and just have it auto play all the
      time"). Do not add one back. It rests only while the hero is out of
      sight and goes on when it is back. Visitors who asked their device for
      less motion get the photo, which is the way to stop it now.
    - The look goes into the file (rule 87): less colour, cooler, middle tones
      lifted, highlights capped. Measured on the brightest frames at seven
      screen sizes: gold headline at least 4.6:1, small lines at least 6.2:1.
      Measure again for every new edit, the flash between scenes is the risk.
    - A new edit gets NEW file names (videos carry no `?v=` either).

## 18. Desktop placement and the wide scale (2026-11-18)

91. PLACEMENT. One rule for where things stand on a desktop screen (from
    1041px), in the layer `<<< PLACEMENT >>>` of `styles.css`. The owner:
    "some in the middle, some up, some down, some right, some left, I want
    all buttons and placements to make sense."
    - The centre line: label, heading and the one line under it stand on the
      centre line of the block, at the top. The block's own action (one
      button, or WhatsApp then call) stands on the same line at the bottom;
      text links follow under it, centred.
    - Inside a card or a column, text starts at the left edge and the card's
      action is on that same edge in every card of the row.
    - A split block (picture and text side by side) is built ONE way: heading
      across both, picture LEFT in a column of `--split-media`, three points
      stacked RIGHT and together as tall as the picture, button centred under
      both. Both pictures are square on desktop. Inhaber and Keramik are the
      two split blocks; do not invent a third variant.
    - A block with one wide thing (photo strip, reviews, map) puts it at the
      full width under the heading. Standort is built like this.
    - Phones and tablets are not touched by the layer.
    - Acceptance is measured, not judged: `audit.mjs` style table, every block
      heading reads "centre" and every block action is centred as a group, on
      the homepage and both town pages at 1440, 1920 and 2752 wide.
    `.op-side` and `.location-info` are `display: contents` on desktop so
    their children can take grid places; they must never get a background,
    padding or the class `reveal`. Children still inherit `text-align` from
    them.
92. THE WIDE SCALE. Screens wider than 1920px show the whole page at nine
    tenths: `body { zoom: var(--wide-scale) }` in the layer
    `<<< WIDE SCALE >>>` (the owner: "too big on ultrawides, make it like 90%
    of what it is now"). One factor for text, buttons, photos and gaps, so
    proportions stay. Change the factor in that one place only.
    - Width queries still see the real screen: column counts do not change.
    - Lengths inside the page are scaled, `svh` and `vw` included (the hero
      is 54% of the screen height instead of 60%).
    - The page cap is divided by the factor so the page still ends where it
      ended (`max-width: calc(2760px / var(--wide-scale))`).
    - The owner's screen is 3440x1440 at 125% Windows scaling: the browser is
      2752 CSS pixels wide at a pixel ratio of 1.25. TEST AT 2752x1040, not
      only at 2560 and 3440; the 3000px tier never reaches that screen.
    - Scripts must not mix zoomed and unzoomed numbers: positions from
      `getBoundingClientRect` and `scrollY` are screen pixels, `offsetLeft`
      and `scrollLeft` are page pixels; stay in one family per calculation.
    - Measured after the change: no page wider than the screen at 1920, 2560,
      2752 and 3440; smallest rendered text 12.6px (floor 11.5px); buttons
      47px high (floor 44px); gallery viewer covers the screen; service card
      presses land. Chrome only; Firefox and Safari untested.

93. The phone hero (2026-11-18, the owner: "sometimes it doesn't load well").
    - Phones up to 720px get `assets/gallery/hero-urus-phone.webp`, a portrait
      cut of the middle of the hero photo (828x1012, quality 60, 45 KB instead
      of 171 KB). Two preloads with `media` in the head of the three hero
      pages; the CSS uses the same 720px breakpoint, so a screen never fetches
      both. A new hero photo needs a new phone cut as well.
    - The ceramic video far down the homepage has `preload="none"`: it no
      longer downloads while the hero is still loading.
    - The film is skipped where the browser rates the connection slower than
      4g, and while it waits for data it fades back to the photo instead of
      standing still. The phone film is 540x600, about 350 KB.
    - `vercel.json` caches images and films for a week and fonts for a year,
      so a returning visitor does not ask the server again for every file.
      This is why a changed picture or film MUST get a new file name.
    - Measured on simulated fast 3G with a slowed phone CPU: hero photo ready
      at 1.8 s instead of 4.3 s. Real phones were not tested.

94. Side margins on wide screens (2026-11-18, the owner: "add more space for
    the ultra wides on the margins, it looks too stretched"). This REPLACES
    the older idea that a wide screen is filled edge to edge (rule 77 and the
    memory note on side margins). Above 1920px the shell leaves an empty band
    on each side that grows with the width: none at 1921px, 255px at 2560,
    320px at 2752 (the owner's screen), 549px at 3440. One line in the WIDE
    SCALE layer of styles.css. The gallery keeps 8 columns until 3200px,
    because its grid is now narrower than the screen.

## 19. The page for Betriebe (2026-11-23)

95. `fahrzeugaufbereitung-autohaus-werkstatt.html` is the page for Autohäuser,
    Werkstätten and Firmen mit Fuhrpark, built from the owner's brief
    "Landingpage Werkstätten und Autohäuser Text und Umsetzung.docx". Text is
    the brief's, word for word, except: "und" for "&" in the title (rule 66),
    a shorter description (snippet budget), the site's phone format, two typo
    fixes, no [BESTÄTIGEN] markers. Its own styles are the `<<< B2B PAGE >>>`
    layer of styles.css; everything else is the shared parts.
    - No sticky bottom bar on this page (the brief). The header stays
      identical to every page (rule 63). The brief also wanted no WhatsApp
      button and a form; the owner decided otherwise (rule 96).
    - The FAQ JSON-LD repeats the VISIBLE questions word for word.
    - Block 5 "Vor dem Verkauf" (Betriebe bring cars before selling or
      handing them to their customers) and the last FAQ question belong
      together: change one, change both (visible and JSON-LD).
    - Owner's answers, 23 Nov 2026: pickup for every Betrieb within 75 km
      of Enzenreith, free of charge ("kostenlos"), or the Betrieb brings
      the cars; on-site work only
      after agreement. No VAT or Kleinunternehmer text on this page.
    - Linked from the footer of every page ("Für Betriebe") and from the
      homepage link row under the FAQ; in sitemap.xml, llms.txt and the
      short-address redirects of vercel.json.
96. No contact form on the site (owner's decision, 23 Nov 2026, after a
    form and a mail function had been built and tested). The Betriebe page
    ends in the dark contact card `#anfrage` with three buttons: call
    (`button-light`, data-call-link), WhatsApp (`button-whatsapp`, its own
    prefilled text for Betriebe) and e-mail (mailto with a subject), plus the
    address written out. The hero "Angebot anfragen" jumps there.
    - The call and WhatsApp buttons are counted by the existing conversion
      listener (`a.button`, `a.button-whatsapp`); e-mail is not tracked.
    - datenschutz.html keeps "Kein Kontaktformular". Adding a form later
      means a privacy section, a way to send it (no backend exists: the
      site is static) and a real test inquiry before go-live.
97. The desktop version of the Betriebe page (23 Nov 2026, the owner: improve
    the laptop, PC and ultrawide version, "the mobile is fine"). Everything
    is in the DESKTOP part at the end of the `<<< B2B PAGE >>>` layer and
    starts at 1041px; phones and tablets were measured before and after and
    are identical (page height and every section, heading, card and button at
    360, 390, 768 and 1040 wide).
    - The four services stand in ONE row at every desktop width. Before, a
      laptop showed two rows of half empty cards. From 1041 to 1599px a card
      is too narrow for icon and text side by side, so the tile goes on top
      (as on the homepage service cards); from 1600px the icon stands at the
      left, like the rows above and below it.
    - Preise and Region stand side by side as two equal halves. They are
      wrapped in `<div class="b2b-pair">`, which is `display: contents`
      below 1041px. Both headings keep the one title size (rule 73); a block
      whose heading does not fit a half at that size stays at full width,
      which is why "Vor dem Verkauf" was not put in the row.
    - The closing question stands on one line.
    - Shared, in the PLACEMENT layer: an odd number of questions in the two
      column FAQ puts the last one in the middle at column width instead of
      alone on the left (this page has five; the winter guide's list of
      five tips is the only other odd list on the site).
    - The closing dark card was NOT changed to a full width block: the same
      card closes ten other pages, and a one page variant is what the owner
      calls random. Change it everywhere or nowhere.
    - Measure a wrapped block with `main section`, not `main > section`: the
      audit table silently skipped blocks inside a wrapper.
98. Betriebe page, round two (23 Nov 2026, the owner, on his ultrawide).
    - Hero: the long paragraph is gone ("too much text in the first hero");
      title, one line, two buttons and three facts remain. The background is
      the homepage photo `hero-urus.webp` (phones `hero-urus-phone.webp`)
      under the homepage's dark veil, with the same two preloads in the head.
      This changes phones too: the hero is shorter, nothing else moved.
    - "not every section has to be centered, it looks forced": from 1041px the
      titles stay centred and running text reads from the left edge (Vor dem
      Verkauf in a 68ch column, Preise and Region over the full half).
    - The closing contact card fills its block from 1041px, in one plain dark
      colour (#10141c), no gradient, no glow, no white box around it. Only on
      this page so far; the other ten pages still have the small card.
