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
    follow memory `pricing-section-design`. The hero keeps its existing composition.

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
53. A town page IS the homepage: same sections, same order, same components
    (hero, showcase strip, value grid, reviews, glass row, location card,
    FAQ, CTA), with only the headline, the lead and the location copy fitted
    to the town, plus the price table. Anything bespoke here made the pages
    drift away from the site they belong to. A bespoke town layout was tried
    twice and rejected both times.
54. Nothing in styles.css may style only a town page. The town layer holds
    exactly two things: .tp-more and the .tp-page content-visibility rule.
    If a town page needs a look, give it to the shared component so the
    homepage gets it too.
55. The town hero preloads the same background the homepage preloads
    (background_rs3.webp). Never preload an image the page does not show.
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
