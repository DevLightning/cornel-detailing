function businessValueOrFallback(value) {
  if (!value || String(value).trim() === "") {
    return "–";
  }
  return value;
}

function getPhoneHref(business) {
  if (business.phoneHref) return business.phoneHref;
  if (!business.phoneDisplay) return "";
  const normalized = business.phoneDisplay.replace(/[^\d+]/g, "");
  return normalized ? `tel:${normalized}` : "";
}

function legalFieldMap(business) {
  const address = [business.address.street, [business.address.postalCode, business.address.city].filter(Boolean).join(" "), business.address.country]
    .filter(Boolean)
    .join("<br />");

  const contactParts = [];
  const phoneHref = getPhoneHref(business);
  if (business.phoneDisplay && phoneHref) contactParts.push(`Telefon: <a href="${phoneHref}">${business.phoneDisplay}</a>`);
  if (business.email) contactParts.push(`E-Mail: <a href="mailto:${business.email}">${business.email}</a>`);

  return {
    businessName: business.name,
    ownerName: business.ownerName,
    legalForm: business.legalForm,
    address,
    contact: contactParts.join("<br />"),
    businessPurpose: business.businessPurpose,
    gisa: business.gisa,
    uid: business.uid,
    chamber: business.chamber,
    supervisoryAuthority: business.supervisoryAuthority,
    tradeRegulation: `${business.tradeRegulation}<br /><a href="https://www.ris.bka.gv.at/" target="_blank" rel="noreferrer">https://www.ris.bka.gv.at/</a>`,
    consumerDisputeInfo: business.consumerDisputeInfo,
    controller: `${business.name}<br />${business.ownerName}<br />${address}<br />${contactParts.join("<br />")}`,
    hosting:
      business.hostingProvider.name && business.hostingProvider.address
        ? `Diese Website wird gehostet von ${business.hostingProvider.name}, ${business.hostingProvider.address}. Weitere Informationen zum Datenschutz des Hosting-Anbieters finden Sie unter${business.hostingProvider.privacyUrl ? `: <a href="${business.hostingProvider.privacyUrl}" target="_blank" rel="noreferrer">${business.hostingProvider.privacyUrl}</a>` : "."}`
        : "–",
    privacyDate: business.privacyDate,
  };
}

function hasMissingLegalInfo(business) {
  const required = [
    business.ownerName,
    business.address.street,
    business.address.postalCode,
    business.address.city,
    business.phoneDisplay,
    business.email,
    business.hostingProvider.name,
  ];

  return required.some((entry) => !entry || String(entry).trim() === "");
}

function fillLegalPage() {
  const business = window.SITE_CONFIG.business;
  const values = legalFieldMap(business);

  document.querySelectorAll("[data-legal]").forEach((node) => {
    const key = node.getAttribute("data-legal");
    node.innerHTML = businessValueOrFallback(values[key]);
  });

  const banner = document.getElementById("devBanner");
  if (banner) {
    banner.hidden = true;
  }

  const footerText = document.getElementById("footerText");
  if (footerText) {
    footerText.textContent = business.footerText;
  }

  document.querySelectorAll(".reveal").forEach((node) => {
    node.classList.add("is-visible");
  });
}

/* Header: menu sheet, scrolled state and the one-time gloss sweep. Mirrors
   setupMobileMenu / setupScrollHeader / setupHeaderSheen in script.js. */
function setupHeader() {
  const topbar = document.querySelector(".topbar");
  if (!topbar) return;

  const onScroll = () => topbar.classList.toggle("is-scrolled", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  let sheenSeen = false;
  try {
    sheenSeen = !!sessionStorage.getItem("cornel_sheen");
    sessionStorage.setItem("cornel_sheen", "1");
  } catch (e) { /* storage blocked: still play it */ }
  if (!sheenSeen) topbar.classList.add("is-sheen");

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
  const desktop = window.matchMedia("(min-width: 861px)");
  const onBreakpoint = (e) => { if (e.matches) setOpen(false); };
  if (desktop.addEventListener) desktop.addEventListener("change", onBreakpoint);
  else if (desktop.addListener) desktop.addListener(onBreakpoint);
}

/* Header call button: same Google Ads call conversion as the main pages,
   with the same quality gates (trusted taps only, engaged visitors only,
   i.e. scrolled or >4s on the page, and once per session). */
function setupCallConversion() {
  const loadedAt = Date.now();
  let scrolled = false;
  window.addEventListener("scroll", () => { scrolled = true; }, { passive: true, once: true });

  document.addEventListener("click", (e) => {
    if (!e.isTrusted) return;
    const link = e.target.closest && e.target.closest('a.topbar-phone[href^="tel:"]');
    if (!link) return;
    if (!scrolled && Date.now() - loadedAt <= 4000) return;
    try {
      if (sessionStorage.getItem("cornel_call_lead") === "1") return;
      sessionStorage.setItem("cornel_call_lead", "1");
    } catch (err) { /* storage blocked: still count */ }
    if (typeof gtag === "function") {
      gtag("event", "conversion", {
        send_to: "AW-17936964522/-_FGCIXd37UcEKq3geIC",
        value: 1.0,
        currency: "EUR",
        transport_type: "beacon",
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fillLegalPage();
  setupHeader();
  setupCallConversion();
});
