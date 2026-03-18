const packages = [
  {
    number: 2,
    title: "Spezial-Außen-Reinigung",
    category: "Außen",
    teaser: "Schonende Handwäsche mit Keramiksprühversiegelung für ein sauberes, gepflegtes Finish.",
    prices: { pkw: "€ 49,-", suv: "€ 69,-", van: "€ 99,-" },
    items: [
      "Vorwäsche",
      "Felgen Reinigung mit Felgenbürste",
      "Lackschonende ganzheitliche Handwäsche",
      "Lack händisch abtrocknen",
      "Scheiben-/Spiegelreinigung",
      "Lackschutz mit Keramiksprühversiegelung",
    ],
  },
  {
    number: 3,
    title: "Intensiv-Außen-Reinigung",
    category: "Außen",
    teaser: "Mehr Tiefe, mehr Glanz, mehr Lackruhe mit Knete, Politur und versiegelter Frontscheibe.",
    prices: { pkw: "€ 199,-", suv: "€ 299,-", van: "€ 399,-" },
    items: [
      "Intensive Vorwäsche",
      "Ganzheitlich schmutzlösende Schaumbehandlung",
      "Intensive Felgen Reinigung mit Felgenbürste und Pinsel",
      "Intensive Türfalz Reinigung mit Pinsel",
      "Lackschonende ganzheitliche Handwäsche",
      "Ganzheitliche Reinigung von Lack und Scheiben mit Reinigungsknete",
      "Lack händisch abtrocknen",
      "Einstufige Lackpolitur für Lackglanz",
      "Intensive Scheiben-/Spiegelreinigung (Klare Sicht)",
      "Versiegelung der Windschutzscheibe",
    ],
  },
  {
    number: 4,
    title: "Spezial-Innen-Reinigung",
    category: "Innen",
    teaser: "Gründliche Innenreinigung für einen spürbar saubereren Alltag im Fahrzeug.",
    prices: { pkw: "€ 139,-", suv: "€ 179,-", van: "€ 279,-" },
    items: [
      "Absaugen des gesamten Innenraums (Sitzflächen, Kofferraum, Fußbereiche)",
      "Einsatz der Tornador Gun zur Beseitigung von Tiefenstaub und Verunreinigungen",
      "Fußmatten- und Teppichreinigung",
      "Reinigung vom Armaturenbrett, Lenkrad, Schalthebel, Radio, Mittelkonsole, Türinnenverkleidungen, Türfalzen, Kofferraum",
      "Scheibenreinigung",
    ],
    note: "Bei extremer Verschmutzung kann ein Aufschlag von bis zu €50,- dazu kommen.",
  },
  {
    number: 5,
    title: "Intensiv-Innen-Reinigung",
    category: "Innen",
    teaser: "Tiefere Innenaufbereitung inklusive Dachhimmel sowie Sitz- oder Lederpflege.",
    prices: { pkw: "€ 179,-", suv: "€ 229,-", van: "€ 349,-" },
    items: [
      "Absaugen des gesamten Innenraums (Sitzflächen, Kofferraum, Fußbereiche)",
      "Einsatz der Tornador Gun zur Beseitigung von Tiefenstaub und Verunreinigungen",
      "Intensive Fußmatten- und Teppichreinigung",
      "Reinigung und Pflege vom Armaturenbrett, Lenkrad, Schalthebel, Radio, Mittelkonsole, Türinnenverkleidungen, Türfalzen, Kofferraum",
      "Reinigung des Dachhimmels",
      "Nassreinigung der Sitzpolsterung oder Intensiv-Lederreinigung",
      "Intensive Scheibenreinigung",
    ],
    note: "Bei extremer Verschmutzung kann ein Aufschlag von bis zu €50,- dazu kommen.",
  },
  {
    number: 6,
    title: "Glanzpolitur",
    category: "Politur",
    teaser: "Zweistufige Politur für mehr Lackglanz und die Entfernung leichter Kratzer.",
    prices: { pkw: "€ 399,-", suv: "€ 499,-", van: "€ 599,-" },
    items: [
      "Lack analysieren und Lackdicke messen",
      "2-stufige Politur zur Entfernung von leichten Kratzern",
      "Lack Endkontrolle um Hologramme und Haze (Grauschleier) zu vermeiden",
    ],
  },
  {
    number: 7,
    title: "Hochglanzpolitur",
    category: "Politur",
    teaser: "Dreistufige Politur für ein deutlich stärker korrigiertes Lackbild.",
    prices: { pkw: "€ 499,-", suv: "€ 599,-", van: "€ 699,-" },
    items: [
      "Lack analysieren und Lackdicke messen",
      "3-stufige Politur zur Entfernung eines Großteils der polierbaren Kratzer",
      "Lack Endkontrolle um Hologramme und Haze (Grauschleier) zu vermeiden",
    ],
  },
  {
    number: 8,
    title: "Versiegelung bis zu 12 Monate",
    category: "Versiegelung",
    teaser: "Lackschutz auf vorbereiteter Oberfläche mit Standzeit bis zu 12 Monaten.",
    prices: { pkw: "€ 299,-", suv: "€ 399,-", van: "€ 499,-" },
    items: [
      "…nach erfolgter Lackpolitur!!!!",
      "Lack reinigen endfetten und somit perfekt auf die nachfolgende Versiegelung vorzubereiten",
      "Auftragen einer Schicht Keramik oder Wax mit einer Standzeit von bis zu 12 Monaten",
    ],
  },
  {
    number: 9,
    title: "Versiegelung bis zu 60 Monate",
    category: "Versiegelung",
    teaser: "Langzeit-Schutz mit zwei Schichten Keramikversiegelung für maximale Standzeit.",
    prices: { pkw: "€ 499,-", suv: "€ 699,-", van: "€ 899,-" },
    items: [
      "…nach erfolgter Lackpolitur!!!!",
      "Lack reinigen endfetten und somit perfekt auf die nachfolgende Versiegelung vorzubereiten",
      "Auftragen von 2 Schichten Keramikversiegelung mit einer Standzeit von bis zu 60 Monaten",
    ],
  },
  {
    number: 10,
    title: "Premium-Paket nach Fahrzeugbesichtigung",
    category: "Premium",
    teaser: "Individuelle Komplettaufbereitung nach Kundengespräch und Fahrzeugcheck.",
    prices: { pkw: "ab € 1.499,-", suv: "nach Besichtigung", van: "nach Besichtigung" },
    items: [
      "Individuelle Leistungszusammenstellung nach Kundengespräch",
      "Reinigung und Pflege vom Armaturenbrett, Lenkrad, Schalthebel, Radio, Mittelkonsole, Türinnenverkleidungen, Türfalzen, Kofferraum",
      "Reinigung des Dachhimmels",
      "Reinigung der Sitzpolsterung oder Intensiv-Lederreinigung",
      "Intensive Scheibenreinigung",
    ],
    note: "Preis nach Kundengespräch und Fahrzeugbesichtigung.",
  },
];

const projects = [
  {
    slug: "porsche-cabrio-finish",
    title: "Porsche 911 Cabrio",
    label: "Showcase Finish",
    description: "Kräftige Farbe, tiefer Lack und ein Premium-Auftritt.",
    asset: "assets/gallery/porsche-cabrio-finish.jpg",
    layout: "wide",
    featured: true,
  },
  {
    slug: "porsche-cockpit",
    title: "Porsche 911 Cockpit",
    label: "Innenraum Detail",
    description: "Leder, Kontraste und feine Oberflächen professionell aufbereitet.",
    asset: "assets/gallery/porsche-cockpit.jpg",
    layout: "tall",
    featured: true,
  },
  {
    slug: "porsche-heck",
    title: "Porsche 911 Heck",
    label: "Exterieur Abschluss",
    description: "Finish für den finalen Eindruck mit gleichmäßigem Glanz.",
    asset: "assets/gallery/porsche-heck.jpg",
    layout: "square",
    featured: true,
  },
  {
    slug: "ford-transit-exterieur",
    title: "Ford Transit Custom",
    label: "Flächenfinish",
    description: "Gerade Flächen und Spiegelungen sauber herausgearbeitet.",
    asset: "assets/gallery/ford-transit-exterieur.jpg",
    layout: "tall",
  },
  {
    slug: "ford-transit-cockpit",
    title: "Ford Transit Cockpit",
    label: "Cockpit Aufbereitung",
    description: "Strukturierte Flächen und ein sauberer Fahrerbereich.",
    asset: "assets/gallery/ford-transit-cockpit.jpg",
    layout: "square",
  },
  {
    slug: "ford-transit-dashboard",
    title: "Ford Transit Dashboard",
    label: "Detail Reinigung",
    description: "Klare Displays und gepflegte Oberflächen bis ins Detail.",
    asset: "assets/gallery/ford-transit-dashboard.jpg",
    layout: "square",
  },
  {
    slug: "citroen-reflexion",
    title: "Citroën C4 Picasso",
    label: "Reflexionskontrolle",
    description: "Reflexionslinien zeigen die Qualität von Politur und Lackfinish.",
    asset: "assets/gallery/citroen-reflexion.jpg",
    layout: "wide",
  },
  {
    slug: "aston-martin-motorraum",
    title: "Aston Martin Vantage",
    label: "Motorraum",
    description: "Saubere technische Flächen für ein komplettes Premium-Bild.",
    asset: "assets/gallery/aston-martin-motorraum.jpg",
    layout: "square",
  },
];

const homepageRequiredFields = ["phoneDisplay", "whatsappNumber"];

const icons = {
  chevron: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 15.5 5.5 9l1.4-1.4L12 12.7l5.1-5.1L18.5 9z" />
    </svg>
  `,
  phone: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3.1.5.6 0 1 .4 1 1V20a1 1 0 0 1-1 1C10.7 21 3 13.3 3 4a1 1 0 0 1 1-1h3.6c.6 0 1 .4 1 1 0 1.1.2 2.1.5 3.1.1.4 0 .9-.3 1.2l-2.2 2.5z" />
    </svg>
  `,
  whatsapp: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.1 3a8.9 8.9 0 0 0-7.7 13.3L3 21l4.9-1.3A9 9 0 1 0 12.1 3zm0 16.3c-1.3 0-2.5-.3-3.6-.9l-.3-.1-2.9.8.8-2.8-.2-.3a7.3 7.3 0 1 1 6.2 3.3zm4-5.5c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.4.5c-.1.2-.3.2-.5.1-.2-.1-.9-.3-1.7-1.1-.7-.6-1.1-1.3-1.2-1.5-.1-.2 0-.3.1-.4l.3-.4.2-.3c.1-.1.1-.3 0-.4 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.1.9 2.2c.1.2 1.6 2.5 4 3.4 2.3.9 2.3.6 2.7.6.4-.1 1.4-.6 1.6-1.2.2-.6.2-1 .1-1.1-.1-.1-.3-.2-.5-.3z" />
    </svg>
  `,
};

function getField(path) {
  return path.split(".").reduce((value, key) => (value ? value[key] : undefined), window.SITE_CONFIG.business);
}

function getPhoneHref() {
  const business = window.SITE_CONFIG.business;
  if (business.phoneHref) return business.phoneHref;
  if (!business.phoneDisplay) return "";
  const normalized = business.phoneDisplay.replace(/[^\d+]/g, "");
  return normalized ? `tel:${normalized}` : "";
}

function getWhatsAppLink() {
  const { whatsappNumber, whatsappPrefill } = window.SITE_CONFIG.business;
  if (!whatsappNumber) return "";
  return `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappPrefill)}`;
}

function hasMissingRequiredFields() {
  return homepageRequiredFields.some((field) => {
    const value = getField(field);
    return !value || String(value).trim() === "";
  });
}

function showDevBanner() {
  const banner = document.getElementById("devBanner");
  if (!banner) return;
  banner.hidden = true;
}

function projectMarkup(project, extraClass = "") {
  return `
    <article class="media-card media-card--${project.layout} ${extraClass}">
      <img
        class="project-media"
        src="${project.asset}"
        alt="${project.title} – ${project.label}"
        loading="lazy"
      />
      <div class="media-overlay">
        <span class="media-kicker">${project.label}</span>
        <strong>${project.title}</strong>
        <p>${project.description}</p>
      </div>
    </article>
  `;
}

function renderFeaturedProjects() {
  const target = document.getElementById("featuredProjects");
  if (!target) return;

  const featured = projects.filter((project) => project.featured).slice(0, 3);
  target.innerHTML = featured.map((project) => projectMarkup(project, "media-card--featured")).join("");
}

function renderGallery() {
  const target = document.getElementById("galleryGrid");
  if (!target) return;

  target.innerHTML = projects
    .map(
      (project) => `
        <article class="gallery-tile gallery-tile--${project.layout} reveal">
          ${projectMarkup(project)}
        </article>
      `
    )
    .join("");
}

function renderPackages() {
  const grid = document.getElementById("packagesGrid");
  if (!grid) return;

  // Calculate tier based on PKW price (extract number) and item count
  const priceValues = packages.map((pkg) => {
    const match = pkg.prices.pkw.match(/[\d.]+/);
    return match ? parseFloat(match[0].replace(".", "")) : 1500;
  });
  const maxPrice = Math.max(...priceValues);

  grid.innerHTML = packages
    .map((pkg, index) => {
      const items = pkg.items.map((item) => `<li>${item}</li>`).join("");
      const note = pkg.note ? `<p class="package-note">${pkg.note}</p>` : "";

      const price = priceValues[index];
      const priceRatio = price / maxPrice;
      const itemRatio = pkg.items.length / 10;
      const tierPercent = Math.round(Math.min((priceRatio * 0.6 + itemRatio * 0.4) * 100, 100));

      let tierLabel, tierClass;
      if (tierPercent <= 20) { tierLabel = "Einstieg"; tierClass = "tier-basic"; }
      else if (tierPercent <= 40) { tierLabel = "Standard"; tierClass = "tier-standard"; }
      else if (tierPercent <= 60) { tierLabel = "Intensiv"; tierClass = "tier-intensive"; }
      else if (tierPercent <= 80) { tierLabel = "Premium"; tierClass = "tier-premium"; }
      else { tierLabel = "Exklusiv"; tierClass = "tier-exclusive"; }

      const isPremium = price >= 300;
      const premiumClass = isPremium ? " package-card--premium" : "";
      const premiumBadge = isPremium ? '<span class="premium-badge">★ Premium</span>' : "";
      const titleClass = isPremium ? ' class="premium-title"' : "";

      return `
        <article class="package-card${premiumClass} reveal">
          <details class="package-details">
            <summary>
              <div class="package-summary">
                <div class="package-summary-top">
                  <span class="package-number">Paket ${pkg.number}</span>
                  ${premiumBadge}
                  <span class="package-group">${pkg.category}</span>
                </div>

                <h3${titleClass}>${pkg.title}</h3>
                <p>${pkg.teaser}</p>

                <div class="package-tier">
                  <div class="package-tier-bar">
                    <div class="package-tier-fill ${tierClass}" style="width:${tierPercent}%"></div>
                  </div>
                  <span class="package-tier-label">${tierLabel} · ${pkg.items.length} Leistungen</span>
                </div>

                <div class="package-prices" aria-label="Preisübersicht">
                  <div class="price-box">
                    <strong>${pkg.prices.pkw}</strong>
                    <span>PKW</span>
                  </div>
                  <div class="price-box">
                    <strong>${pkg.prices.suv}</strong>
                    <span>Kombi / SUV</span>
                  </div>
                  <div class="price-box">
                    <strong>${pkg.prices.van}</strong>
                    <span>Minivan</span>
                  </div>
                </div>

                <div class="package-summary-footer">
                  <span class="package-summary-meta">${pkg.items.length} Leistungen im Paket</span>
                  <span class="package-toggle">Mehr Infos ${icons.chevron}</span>
                </div>
              </div>
            </summary>

            <div class="package-content">
              <h4>Im Paket enthalten</h4>
              <ul>${items}</ul>
              ${note}

              <div class="package-content-actions">
                <a class="button button-secondary button-small" data-call-link href="#kontakt">${icons.phone}<span>Anrufen</span></a>
                <a class="button button-primary button-small cta-pulse" data-whatsapp-link href="#kontakt">${icons.whatsapp}<span>WhatsApp</span></a>
              </div>
            </div>
          </details>
        </article>
      `;
    })
    .join("");
}

function setupActionLinks() {
  const phoneHref = getPhoneHref();
  const whatsappHref = getWhatsAppLink();

  document.querySelectorAll("[data-call-link]").forEach((link) => {
    if (phoneHref) {
      link.href = phoneHref;
      link.classList.remove("is-disabled");
      link.removeAttribute("aria-disabled");
    } else {
      link.href = "#kontakt";
      link.classList.add("is-disabled");
      link.setAttribute("aria-disabled", "true");
    }
  });

  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    if (whatsappHref) {
      link.href = whatsappHref;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.classList.remove("is-disabled");
      link.removeAttribute("aria-disabled");
    } else {
      link.href = "#kontakt";
      link.classList.add("is-disabled");
      link.setAttribute("aria-disabled", "true");
    }
  });
}

function setupStaticText() {
  const business = window.SITE_CONFIG.business;
  const mappings = {
    priceNote: business.priceNote,
    footerText: business.footerText,
    serviceAreaHero: business.serviceArea,
    serviceAreaContact: business.serviceArea,
    appointmentHero: business.appointmentHint,
    appointmentContact: business.appointmentHint,
    galleryServiceArea: business.serviceArea,
  };

  Object.entries(mappings).forEach(([id, text]) => {
    const node = document.getElementById(id);
    if (node && text) node.textContent = text;
  });
}

function setupMobileCta() {
  const container = document.querySelector(".mobile-cta");
  if (!container) return;

  const phoneHref = getPhoneHref();
  const whatsappHref = getWhatsAppLink();

  const callButton = phoneHref
    ? `<a class="button button-secondary" href="${phoneHref}">${icons.phone}<span>Anrufen</span></a>`
    : `<a class="button button-secondary is-disabled" href="#kontakt" aria-disabled="true">${icons.phone}<span>Anrufen</span></a>`;

  const whatsappButton = whatsappHref
    ? `<a class="button button-primary cta-pulse" href="${whatsappHref}" target="_blank" rel="noreferrer">${icons.whatsapp}<span>WhatsApp</span></a>`
    : `<a class="button button-primary is-disabled" href="#kontakt" aria-disabled="true">${icons.whatsapp}<span>WhatsApp</span></a>`;

  container.innerHTML = `${callButton}${whatsappButton}`;
}

function setupPackageDetails() {
  const details = Array.from(document.querySelectorAll(".package-details"));
  details.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;

      details.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );

  items.forEach((item) => observer.observe(item));
}

function injectLocalBusinessSchema() {
  const business = window.SITE_CONFIG.business;

  if (!business.phoneDisplay) return;

  const schema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: business.name,
    areaServed: business.serviceArea,
    telephone: business.phoneDisplay,
    email: business.email || undefined,
    address:
      business.address.street && business.address.postalCode && business.address.city
        ? {
            "@type": "PostalAddress",
            streetAddress: business.address.street,
            postalCode: business.address.postalCode,
            addressLocality: business.address.city,
            addressCountry: business.address.country,
          }
        : undefined,
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

function setupMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("topnav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-active", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
  });

  // Close menu when a link is clicked
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-active");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showDevBanner();
  renderFeaturedProjects();
  renderGallery();
  renderPackages();
  setupStaticText();
  setupActionLinks();
  setupMobileCta();
  setupPackageDetails();
  setupReveal();
  setupMobileMenu();
  injectLocalBusinessSchema();
});
