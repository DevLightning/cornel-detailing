/* Impressum and Datenschutz carry their full text in the HTML itself, so the
   legal information is readable even without JavaScript. This file only
   runs the shared header and the header call conversion. */

/* True when the visitor arrived from outside the site. Same helper as in
   script.js: one-time effects without storing anything on the device. */
function isNewVisit() {
  try {
    return !document.referrer || new URL(document.referrer).origin !== location.origin;
  } catch (e) {
    return true;
  }
}

/* Header: menu sheet, scrolled state and the one-time gloss sweep. Mirrors
   setupMobileMenu / setupScrollHeader / setupHeaderSheen in script.js. */
function setupHeader() {
  const topbar = document.querySelector(".topbar");
  if (!topbar) return;

  const onScroll = () => topbar.classList.toggle("is-scrolled", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (isNewVisit()) topbar.classList.add("is-sheen");

  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("topnav");
  if (!toggle || !nav) return;

  // Tap-outside layer: dims the page and swallows the closing tap
  const scrim = document.createElement("div");
  scrim.className = "topbar-scrim";
  scrim.setAttribute("aria-hidden", "true");
  topbar.insertAdjacentElement("afterend", scrim);

  let openedAtY = 0;
  const isOpen = () => nav.classList.contains("is-open");
  const setOpen = (open, returnFocus) => {
    nav.classList.toggle("is-open", open);
    toggle.classList.toggle("is-active", open);
    scrim.classList.toggle("is-visible", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    if (open) openedAtY = window.scrollY;
    else if (returnFocus) toggle.focus();
  };

  toggle.addEventListener("click", () => setOpen(!isOpen()));
  scrim.addEventListener("click", () => setOpen(false));
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) setOpen(false, true);
  });
  window.addEventListener("scroll", () => {
    if (isOpen() && Math.abs(window.scrollY - openedAtY) > 12) setOpen(false);
  }, { passive: true });
  const desktop = window.matchMedia("(min-width: 1025px)");
  const onBreakpoint = (e) => { if (e.matches) setOpen(false); };
  if (desktop.addEventListener) desktop.addEventListener("change", onBreakpoint);
  else if (desktop.addListener) desktop.addListener(onBreakpoint);
}

/* Header call button: same Google Ads call conversion as the main pages,
   with the same quality gates (consent given, trusted taps only, engaged
   visitors only, i.e. scrolled or >4s on the page, and once per session). */
function setupCallConversion() {
  const loadedAt = Date.now();
  let scrolled = false;
  window.addEventListener("scroll", () => { scrolled = true; }, { passive: true, once: true });

  document.addEventListener("click", (e) => {
    if (!e.isTrusted) return;
    // consent.js defines gtag only after the visitor accepted Google Ads cookies
    if (typeof gtag !== "function") return;
    const link = e.target.closest && e.target.closest('a.topbar-phone[href^="tel:"]');
    if (!link) return;
    if (!scrolled && Date.now() - loadedAt <= 4000) return;
    try {
      if (sessionStorage.getItem("cornel_call_lead") === "1") return;
      sessionStorage.setItem("cornel_call_lead", "1");
    } catch (err) { /* storage blocked: still count */ }
    gtag("event", "conversion", {
      send_to: "AW-17936964522/-_FGCIXd37UcEKq3geIC",
      value: 1.0,
      currency: "EUR",
      transport_type: "beacon",
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".reveal").forEach((node) => node.classList.add("is-visible"));
  setupHeader();
  setupCallConversion();
});
