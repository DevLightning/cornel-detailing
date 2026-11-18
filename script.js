const packages = [
  {
    number: 2,
    title: "Spezial-Außen-Reinigung",
    category: "Außen",
    teaser: "Schonende Handwäsche mit Keramiksprühversiegelung für ein sauberes, gepflegtes Finish.",
    prices: { pkw: "€ 49,-", suv: "€ 69,-", van: "€ 99,-" },
    items: [
      "Vorwäsche",
      "Felgenreinigung mit Felgenbürste",
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
      "Intensive Felgenreinigung mit Felgenbürste und Pinsel",
      "Intensive Türfalzreinigung mit Pinsel",
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
      "Lack-Endkontrolle, um Hologramme und Haze (Grauschleier) zu vermeiden",
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
      "Lack-Endkontrolle, um Hologramme und Haze (Grauschleier) zu vermeiden",
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
      "Lack reinigen entfetten und somit perfekt auf die nachfolgende Versiegelung vorzubereiten",
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
      "Lack reinigen entfetten und somit perfekt auf die nachfolgende Versiegelung vorzubereiten",
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
      "Lackschonende ganzheitliche Handwäsche",
      "Entfernung von Teerflecken und Flugrost",
      "3-stufige Politur zur Entfernung eines Großteils der polierbaren Kratzer",
      "Auftragen von 2 Schichten Keramikversiegelung mit einer Standzeit von bis zu 60 Monaten",
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
    slug: "lamborghini-urus-front",
    title: "Lamborghini Urus SE",
    label: "Exterieur Finish",
    description: "Schwarzer Lack unter Hexagon-Licht · klare Spiegelungen auf Haube und Scheibe.",
    asset: "assets/gallery/urus-front.webp",
    layout: "wide",
    featured: true,
    category: "Exterieur",
  },
  {
    slug: "lamborghini-urus-werkstatt",
    title: "Lamborghini Urus SE",
    label: "Frontansicht",
    description: "Der Urus SE bei uns in der Werkstatt · tiefschwarzer Lack unter Hexagon-Licht.",
    asset: "assets/gallery/urus-werkstatt.webp",
    layout: "wide",
    category: "Exterieur",
  },
  {
    slug: "lamborghini-urus-cockpit",
    title: "Lamborghini Urus SE",
    label: "Interieur Detail",
    description: "Carbon, Leder und der Schriftzug am Armaturenbrett im Detail.",
    asset: "assets/gallery/urus-cockpit.webp",
    layout: "tall",
    category: "Innenraum",
  },
  {
    slug: "lamborghini-urus-fussraum",
    title: "Lamborghini Urus SE",
    label: "Fußraum",
    description: "Gesaugter Teppich mit sauberen Bahnen im Fußraum.",
    asset: "assets/gallery/urus-fussraum.webp",
    layout: "tall",
    category: "Innenraum",
  },
  {
    slug: "lamborghini-urus-felge",
    title: "Lamborghini Urus SE",
    label: "Felge und Emblem",
    description: "Feine Speichen und das goldene Emblem im Detail.",
    asset: "assets/gallery/urus-felge.webp",
    layout: "tall",
    category: "Detail",
  },
  {
    slug: "lamborghini-urus-heck",
    title: "Lamborghini Urus SE",
    label: "Heck Detail",
    description: "Der Schriftzug am Heck auf schwarzem Lack.",
    asset: "assets/gallery/urus-heck.webp",
    layout: "tall",
    category: "Detail",
  },
  {
    slug: "porsche-cabrio-finish",
    title: "Porsche 911 Cabrio",
    label: "Showcase Finish",
    description: "Kräftige Farbe, tiefer Lack und ein Premium-Auftritt.",
    asset: "assets/gallery/porsche-cabrio-finish.webp",
    layout: "wide",
    featured: true,
    category: "Exterieur",
  },
  {
    slug: "porsche-cockpit",
    title: "Porsche 911 Cockpit",
    label: "Innenraum Detail",
    description: "Leder, Kontraste und feine Oberflächen professionell aufbereitet.",
    asset: "assets/gallery/porsche-cockpit.webp",
    layout: "tall",
    featured: true,
    category: "Innenraum",
  },
  {
    slug: "porsche-heck",
    title: "Porsche 911 Heck",
    label: "Exterieur Abschluss",
    description: "Finish für den finalen Eindruck mit gleichmäßigem Glanz.",
    asset: "assets/gallery/porsche-heck.webp",
    layout: "tall",
    featured: true,
    category: "Exterieur",
  },
  {
    slug: "ford-transit-exterieur",
    title: "Ford Transit Custom",
    label: "Flächenfinish",
    description: "Gerade Flächen und Spiegelungen sauber herausgearbeitet.",
    asset: "assets/gallery/ford-transit-exterieur.webp",
    layout: "tall",
    category: "Exterieur",
  },
  {
    slug: "ford-transit-cockpit",
    title: "Ford Transit Cockpit",
    label: "Cockpit Aufbereitung",
    description: "Strukturierte Flächen und ein sauberer Fahrerbereich.",
    asset: "assets/gallery/ford-transit-cockpit.webp",
    layout: "square",
    category: "Innenraum",
  },
  {
    slug: "ford-transit-dashboard",
    title: "Ford Transit Dashboard",
    label: "Detail Reinigung",
    description: "Klare Displays und gepflegte Oberflächen bis ins Detail.",
    asset: "assets/gallery/ford-transit-dashboard.webp",
    layout: "square",
    category: "Innenraum",
  },
  {
    slug: "citroen-reflexion",
    title: "Citroën C4 Picasso",
    label: "Reflexionskontrolle",
    description: "Reflexionslinien zeigen die Qualität von Politur und Lackfinish.",
    asset: "assets/gallery/citroen-reflexion.webp",
    layout: "wide",
    category: "Exterieur",
  },
  {
    slug: "aston-martin-motorraum",
    title: "Aston Martin Vantage",
    label: "Motorraum Detail",
    description: "Saubere technische Flächen für ein komplettes Premium-Bild.",
    asset: "assets/gallery/aston-martin-motorraum.webp",
    layout: "full",
    category: "Detail",
  },
  {
    slug: "ford-transit-reflexion-front",
    title: "Ford Transit Custom",
    label: "Reflexionskontrolle",
    description: "Hexagonale Lichtreflexionen zeigen die Qualität der Lackoberfläche nach der Aufbereitung.",
    asset: "assets/gallery/ford-transit-reflexion-front.webp",
    layout: "tall",
    category: "Exterieur",
  },
  {
    slug: "mercedes-vito-exterieur",
    title: "Mercedes-Benz V-Klasse",
    label: "Exterieur Finish",
    description: "Tiefschwarzer Lack, poliert und versiegelt · ein Minivan auf Premium-Niveau.",
    asset: "assets/gallery/mercedes-vito-exterieur.webp",
    layout: "wide",
    category: "Exterieur",
  },
  {
    slug: "aston-martin-rot-exterieur",
    title: "Aston Martin Vantage",
    label: "Exterieur Rot",
    description: "Kräftiges Rot, tiefe Reflexionen und ein perfektes Gesamtbild nach der Vollaufbereitung.",
    asset: "assets/gallery/aston-martin-rot-exterieur.webp",
    layout: "square",
    category: "Exterieur",
  },
  {
    slug: "lack-reflexion-nahaufnahme",
    title: "Lackanalyse",
    label: "Reflexion Nahaufnahme",
    description: "Hexagonale Lichtmuster machen kleinste Unregelmäßigkeiten im Lack sichtbar.",
    asset: "assets/gallery/lack-reflexion-nahaufnahme.webp",
    layout: "square",
    category: "Detail",
  },
  {
    slug: "aston-martin-motorraum-detail",
    title: "Aston Martin Vantage",
    label: "Motor Aufbereitung",
    description: "Jedes Detail zählt · aufbereiteter Motorraum für ein lückenloses Premium-Ergebnis.",
    asset: "assets/gallery/aston-martin-motorraum-detail.webp",
    layout: "square",
    category: "Detail",
  },
  {
    slug: "audi-rs3-exterieur-heck",
    title: "Audi RS3 Sportback",
    label: "Exterieur Finish",
    description: "Tiefschwarzer Lack, poliert und versiegelt · sportliche Präzision auf einem anderen Level.",
    asset: "assets/gallery/Screenshot_1.webp",
    layout: "full",
    category: "Exterieur",
  },
  {
    slug: "bmw-m3-yellow-side",
    title: "BMW M3 Competition",
    label: "Keramikversiegelung",
    description: "Sao-Paulo-Gelb, tiefer Glanz und keramisch versiegelt · jedes Detail unter Hexagon-Licht inszeniert.",
    asset: "assets/gallery/bmw1.webp",
    layout: "tall",
    featured: true,
    category: "Exterieur",
  },
  {
    slug: "bmw-m3-yellow-front",
    title: "BMW M3 Competition",
    label: "Front Detail",
    description: "Kräftiges Gelb mit Spiegelreflexionen · Lack wie am ersten Tag, optimal vorbereitet auf den Keramikschutz.",
    asset: "assets/gallery/bmw2.webp",
    layout: "tall",
    featured: true,
    category: "Exterieur",
  },
  {
    slug: "bmw-m3-carbon-roof",
    title: "BMW M3 Competition",
    label: "Carbondach Detail",
    description: "Hexagon-Reflexionen auf Carbon und Heckflügel · Beweis für eine perfekt versiegelte Oberfläche.",
    asset: "assets/gallery/bmw3.webp",
    layout: "tall",
    category: "Detail",
  },
  {
    slug: "bmw-m3-carbon-mirror",
    title: "BMW M3 Competition",
    label: "Carbon Spiegel",
    description: "Carbongewebe und Lack treffen sich · beides hochglänzend versiegelt für langen Schutz.",
    asset: "assets/gallery/bmw4.webp",
    layout: "square",
    category: "Detail",
  },
  {
    slug: "bmw-m3-yellow-wheel",
    title: "BMW M3 Competition",
    label: "Felgen & Bremse",
    description: "Schmiederäder, blaue Bremssättel und Lack im Hexagon-Spiegelbild · Detailing auf Showroom-Niveau.",
    asset: "assets/gallery/bmw5.webp",
    layout: "wide",
    category: "Exterieur",
  },
];

/* Public Google reviews. Only what the card shows is kept here: no profile
   photos (those would load from Google's servers) and no "x days ago"
   dates (they go stale). Names are shortened when rendered. */
const reviews = [
  {
    name: "Liviu Cazacu",
    rating: 5,
    text: "corneldetailing arbeitet sehr sauber und leistet wirklich hervorragende Arbeit mit großer Liebe zum Detail. Ich kann ihn wärmstens empfehlen und komme definitiv wieder! 🎉",
  },
  {
    name: "daf ktm",
    rating: 5,
    text: "Tolle Arbeit!",
  },
  {
    name: "Anula Dev",
    rating: 5,
    text: "Super Aufbereitung!",
  },
  {
    name: "Marius Silviu Anghelache",
    rating: 5,
    text: "Das Beste!",
  },
  {
    name: "Alina Maldea",
    rating: 5,
    text: "Mein Auto ist wieder frisch, riecht toll und sieht aus wie neu. Cornel Detailing ist erstklassig.",
  },
  {
    name: "Claudia Strommer",
    rating: 5,
    text: "Mein Auto sieht nach jahrelangem Gebrauch wieder wie neu aus! Alles ist absolut perfekt! Vielen Dank!",
  },
  {
    name: "Alex Iancu",
    rating: 5,
    text: "Er hat mein Auto sehr professionell aufbereitet. Der Beste.",
  },
  {
    name: "Legacy P",
    rating: 5,
    text: "Beste Autoaufbereitung!",
  },
  {
    name: "Teodor Codrin Murariu",
    rating: 5,
    text: "Danke für die Autowäsche. Ein echter Profi.",
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

/* Vehicle-first pricing: the visitor picks their vehicle class once, every
   package shows exactly one price, and the choice carries into the WhatsApp
   prefill so the lead arrives with package + vehicle + price. */
const VEHICLE_LABELS = { pkw: "PKW", suv: "SUV / Kombi", van: "Van" };

/* The chosen vehicle class lives in sessionStorage only after the visitor
   taps it, and is gone when the tab closes (a requested function, so no
   consent needed). Older versions kept it permanently: clear that. */
try { localStorage.removeItem("cornel_vehicle"); } catch (e) { /* ok */ }

function getSelectedVehicle() {
  try {
    const v = sessionStorage.getItem("cornel_vehicle");
    if (v === "suv" || v === "van") return v;
  } catch (e) { /* storage blocked: default */ }
  return "pkw";
}

function getWhatsAppLinkForPackage(pkg, vehicle) {
  const { whatsappNumber } = window.SITE_CONFIG.business;
  if (!whatsappNumber) return "";
  const v = vehicle || getSelectedVehicle();
  const msg = `Hallo! Ich interessiere mich für Paket ${pkg.number} · ${pkg.title} (${VEHICLE_LABELS[v]}: ${pkg.prices[v]}). `;
  return `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
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
    <div class="media-card media-card--${project.layout} ${extraClass}">
      <img
        class="project-media"
        src="${project.asset}"
        alt="${project.title} · ${project.label}"
        loading="lazy"
      />
      <span class="media-badge">${project.label}</span>
      <div class="media-overlay">
        <strong>${project.title}</strong>
        <p>${project.description}</p>
      </div>
    </div>
  `;
}

function renderFeaturedProjects() {
  const target = document.getElementById("featuredProjects");
  if (!target) return;

  const featured = projects.filter((project) => project.featured).slice(0, 3);
  target.innerHTML = featured.map((project) => projectMarkup(project, "media-card--featured")).join("");
}

function renderShowcaseStrip() {
  const target = document.getElementById("showcaseStripTrack");
  if (!target) return;

  // Hand-picked, conversion-strong sequence: variety of brands + body styles
  const wantedSlugs = [
    "lamborghini-urus-front",
    "bmw-m3-yellow-side",
    "porsche-cabrio-finish",
    "audi-rs3-exterieur-heck",
    "aston-martin-rot-exterieur",
    "mercedes-vito-exterieur",
    "porsche-heck",
    "bmw-m3-yellow-front",
    "citroen-reflexion",
  ];
  const selected = wantedSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean);

  const cardsHtml = selected
    .map(
      (p, i) => `
        <a class="ss-card reveal" href="galerie.html#${p.slug}" style="--i:${i}" data-category="${p.category || ""}" aria-label="${p.title} · ${p.label}">
          <div class="ss-card-media">
            <img src="${p.asset}" alt="${p.title}" loading="lazy" decoding="async" />
          </div>
          <div class="ss-card-overlay" aria-hidden="true"></div>
          <div class="ss-card-info">
            <span class="ss-card-label">${p.label}</span>
            <h3 class="ss-card-title">${p.title}</h3>
          </div>
        </a>
      `
    )
    .join("");

  // Terminal card keeps users in the conversion funnel: straight to prices
  // instead of detouring to the gallery page.
  const allCardHtml = `
    <a class="ss-card ss-card--all reveal" href="${document.getElementById("autoaufbereitung-pakete") ? "" : "/"}#autoaufbereitung-pakete" style="--i:${selected.length}" aria-label="Pakete und Preise ansehen">
      <div class="ss-card-all-inner">
        <span class="ss-card-all-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </span>
        <span class="ss-card-all-label">Pakete und Preise</span>
        <span class="ss-card-all-count">${packages.length} Pakete ab ${lowestPkwPrice()}</span>
      </div>
    </a>
  `;

  target.innerHTML = cardsHtml + allCardHtml;
}

/* Showcase strip on phones: page dots that follow the swipe, plus a one-time
   "Wischen" hint (the photos glide left to reveal the next one, then settle
   back). Transform/opacity only, and it waits until the strip is on screen,
   so page load is untouched. */
function setupShowcaseSwipe() {
  const track = document.getElementById("showcaseStripTrack");
  const dotsWrap = document.getElementById("showcaseStripDots");
  const hint = document.getElementById("showcaseSwipeHint");
  if (!track || !dotsWrap) return;
  const cards = Array.from(track.children);
  if (cards.length < 2) return;

  dotsWrap.innerHTML = cards.map(() => "<span></span>").join("");
  const dots = Array.from(dotsWrap.children);
  let active = -1;
  const syncDots = () => {
    const mid = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - mid);
      if (dist < bestDist) { bestDist = dist; best = i; }
    });
    if (best === active) return;
    if (dots[active]) dots[active].classList.remove("is-active");
    dots[best].classList.add("is-active");
    active = best;
  };
  let queued = false;
  track.addEventListener("scroll", () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; syncDots(); });
  }, { passive: true });
  syncDots();

  // The hint plays once per visit, on phones, unless motion is reduced
  if (!window.matchMedia("(max-width: 720px)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!isNewVisit()) return;

  let touched = false;
  const stopHint = () => {
    touched = true;
    track.classList.remove("is-nudging");
    if (hint) hint.classList.remove("is-on");
  };
  track.addEventListener("pointerdown", stopHint, { passive: true });
  track.addEventListener("touchstart", stopHint, { passive: true });

  const play = () => {
    if (touched || track.scrollLeft > 4) return;
    track.classList.add("is-nudging");
    if (hint) hint.classList.add("is-on");
    cards[0].addEventListener("animationend", () => track.classList.remove("is-nudging"), { once: true });
    setTimeout(() => { if (hint) hint.classList.remove("is-on"); }, 2600);
  };

  const whenVisible = () => {
    const r = track.getBoundingClientRect();
    const onScreen = Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0);
    if (onScreen < r.height * 0.7) return;
    window.removeEventListener("scroll", whenVisible);
    setTimeout(play, 900);   // after the cards' own fade-in has finished
  };
  window.addEventListener("scroll", whenVisible, { passive: true });
  whenVisible();
}

/* ════════════════════════════════════════════════════════════════════════════
   GALLERY PAGE (galerie.html)
   The photos are written into galerie.html as plain HTML, so they are on
   screen before this file has loaded. The projects array above stays the one
   source: renderGallery() compares the page with the array on every visit and
   rebuilds the list when they differ, so adding a photo to the array is all
   it takes. Nothing here uses class "reveal": a photo is never invisible.
   ════════════════════════════════════════════════════════════════════════════ */

/* Photos fetched straight away; the rest load when they come near the screen.
   Six is three rows on a phone (nine visitors in ten). A wide monitor has up
   to ten in its first row: there the others are on screen, so the browser
   fetches them at once anyway, and a phone is spared four more downloads. */
const GALLERY_EAGER = 6;
const GALLERY_SIZES =
  "(max-width: 679px) 46vw, (max-width: 959px) 30vw, (max-width: 1279px) 23vw, " +
  "(max-width: 1359px) 18vw, (max-width: 1679px) 15vw, (max-width: 2199px) 13vw, " +
  "(max-width: 2499px) 11vw, 9vw";
const GALLERY_SIZES_WIDE = GALLERY_SIZES.replace("46vw", "92vw");
let galleryFilter = "all";

function galleryEscape(text) {
  return String(text == null ? "" : text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* Small copies of every photo for the grid (assets/gallery/p-gal-<slug>-400.webp
   and -640.webp). The full photo is only fetched when it is opened. */
function galleryThumb(project, width) {
  return `assets/gallery/p-gal-${project.slug}-${width}.webp`;
}

/* Photos whose titles start with the same make and model ("Porsche 911
   Cabrio", "Porsche 911 Cockpit") show the same vehicle. A title of one word
   ("Lackanalyse") names no vehicle. */
function galleryVehicle(project) {
  const words = String(project.title || "").trim().split(/\s+/);
  return words.length > 1 ? words.slice(0, 2).join(" ") : "";
}

/* The order on the gallery page: the order of the array, with every photo
   moved up next to the first photo of the same vehicle. The array itself is
   left alone, the homepage reads it too. */
function galleryList() {
  const firstSeen = {};
  const keyOf = (p) => galleryVehicle(p) || p.slug;
  projects.forEach((p, i) => {
    if (firstSeen[keyOf(p)] === undefined) firstSeen[keyOf(p)] = i;
  });
  return projects
    .map((p, i) => ({ p, i, group: firstSeen[keyOf(p)] }))
    .sort((a, b) => a.group - b.group || a.i - b.i)
    .map((entry) => entry.p);
}

// What the grid shows right now (the chosen category)
function galleryShown() {
  const list = galleryList();
  return galleryFilter === "all" ? list : list.filter((p) => p.category === galleryFilter);
}

function galleryTileMarkup(project, i) {
  const title = galleryEscape(project.title);
  const label = galleryEscape(project.label);
  // a name like "Mercedes-Benz" is never split over two lines at its hyphen
  const titleHtml = title.replace(/[^\s]+-[^\s]+/g, '<span class="gal-nb">$&</span>');
  return `
    <li class="gal-item" id="${project.slug}" data-slug="${project.slug}" data-category="${galleryEscape(project.category || "")}">
      <a class="gal-tile" href="${project.asset}" aria-label="${title} · ${label} · Foto vergrößern">
        <span class="gal-photo"><img src="${galleryThumb(project, 400)}" srcset="${galleryThumb(project, 400)} 400w, ${galleryThumb(project, 640)} 640w" sizes="${GALLERY_SIZES}" width="400" height="500" alt="${title} · ${label}" loading="${i < GALLERY_EAGER ? "eager" : "lazy"}" decoding="async" /></span>
        <span class="gal-cap"><strong>${titleHtml}</strong><span class="gal-label">${label}</span></span>
        <span class="gal-zoom" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg></span>
      </a>
    </li>
  `;
}

/* A small copy that is missing on the server (forgotten in an upload) must
   not leave a hole: the tile falls back to the full photo. */
function galleryImageFallback(holder) {
  const swap = (img) => {
    const link = img.closest("a[href]");
    const full = img.dataset.full || (link && link.getAttribute("href"));
    if (!full || img.dataset.fellBack) return;
    img.dataset.fellBack = "1";
    img.removeAttribute("srcset");
    img.removeAttribute("sizes");
    img.src = full;
  };
  holder.addEventListener("error", (e) => {
    if (e.target && e.target.tagName === "IMG") swap(e.target);
  }, true);
  // an image can fail before this script has started
  holder.querySelectorAll("img").forEach((img) => {
    if (img.getAttribute("src") && img.complete && img.naturalWidth === 0) swap(img);
  });
}

function renderGallery() {
  const grid = document.getElementById("galGrid");
  if (!grid) return;

  const list = galleryList();
  const onPage = Array.from(grid.querySelectorAll(".gal-item"));
  const text = (el, sel) => {
    const node = el.querySelector(sel);
    return node ? node.textContent : "";
  };
  const upToDate =
    onPage.length === list.length &&
    list.every((p, i) => {
      const el = onPage[i];
      const link = el.querySelector(".gal-tile");
      return (
        el.dataset.slug === p.slug &&
        el.dataset.category === (p.category || "") &&
        text(el, ".gal-cap strong") === p.title &&
        text(el, ".gal-label") === p.label &&
        !el.querySelector(".gal-desc") &&   // an older page had a sentence under each photo
        link && link.getAttribute("href") === p.asset
      );
    });

  if (!upToDate) {
    // the booking card at the end of the list is not touched
    onPage.forEach((el) => el.remove());
    grid.insertAdjacentHTML("afterbegin", list.map(galleryTileMarkup).join(""));
  }
  galleryImageFallback(grid);
}

/* The chip row scrolls sideways on a phone. An edge that still hides chips
   fades out (gallery.css), so a row that happens to be cut between two chips
   never looks complete. */
function galleryChipFade() {
  const row = document.getElementById("galFilters");
  if (!row) return;
  const max = row.scrollWidth - row.clientWidth;
  row.classList.toggle("can-left", max > 1 && row.scrollLeft > 4);
  row.classList.toggle("can-right", max > 1 && row.scrollLeft < max - 4);
}

/* The booking card ends the list. Beside the last photos it stands right
   after them; when the last row is full it has a row of its own, and there
   it is centred (gallery.css, .is-alone). */
function galleryBookFit() {
  const grid = document.getElementById("galGrid");
  const book = document.getElementById("galBook");
  if (!grid || !book) return;
  const shown = grid.querySelectorAll(".gal-item:not([hidden])");
  const last = shown[shown.length - 1];
  book.classList.toggle("is-alone", !last || book.offsetTop !== last.offsetTop);
}

/* One place that applies a category: chips, photos, the line under the grid.
   Photos are shown and hidden, never rebuilt, so nothing reloads or flickers. */
function galleryApplyFilter(filter, byVisitor) {
  const grid = document.getElementById("galGrid");
  const bar = document.getElementById("galFilters");
  if (!grid || !bar) return;

  galleryFilter = filter !== "all" && projects.some((p) => p.category === filter) ? filter : "all";

  bar.querySelectorAll(".gal-chip").forEach((chip) => {
    const on = chip.dataset.filter === galleryFilter;
    chip.classList.toggle("is-active", on);
    chip.setAttribute("aria-pressed", on ? "true" : "false");
    if (on) {
      /* The chosen chip slides into the row (sideways only) far enough that
         a piece of the chip before it and after it stays in view: the row
         never looks as if it ended at the chosen chip. */
      const peek = 32;
      const row = bar.getBoundingClientRect();
      const box = chip.getBoundingClientRect();
      if (box.left - peek < row.left) bar.scrollLeft += box.left - peek - row.left;
      else if (box.right + peek > row.right) bar.scrollLeft += box.right + peek - row.right;
    }
  });
  galleryChipFade();

  const items = Array.from(grid.querySelectorAll(".gal-item"));
  const shown = items.filter((item) => {
    const show = galleryFilter === "all" || item.dataset.category === galleryFilter;
    item.hidden = !show;
    return show;
  });
  /* Phones show two columns. With an odd number of photos the last one takes
     the whole row (the CSS does that below 680px only), so no photo is left
     alone beside an empty space. */
  items.forEach((item) => {
    const wide = shown.length % 2 === 1 && item === shown[shown.length - 1];
    item.classList.toggle("gal-item--wide", wide);
    const img = item.querySelector("img");
    const sizes = wide ? GALLERY_SIZES_WIDE : GALLERY_SIZES;
    if (img && img.hasAttribute("srcset") && img.getAttribute("sizes") !== sizes) img.setAttribute("sizes", sizes);
  });

  const status = document.getElementById("galStatus");
  const reset = document.getElementById("galReset");
  const line =
    `${shown.length} ${shown.length === 1 ? "Aufnahme" : "Aufnahmen"} · ` +
    (galleryFilter === "all" ? "alle Kategorien" : galleryFilter);
  if (status && status.textContent !== line) status.textContent = line;   // read out by screen readers
  if (reset) {
    reset.textContent = `Alle ${items.length} anzeigen`;
    reset.hidden = galleryFilter === "all";
  }
  galleryBookFit();

  if (!byVisitor) return;

  /* The chips stay where they are; if the visitor was further down, the grid
     starts again at its first row right under them instead of the page
     jumping to wherever the shorter list ends. */
  const holder = bar.closest(".gal-bar") || bar;
  const css = getComputedStyle(holder);
  const pinned = css.position === "sticky" || css.position === "-webkit-sticky";
  // where the chips rest once they are pinned: their distance from the top, their height, the gap below
  const edge = (pinned ? parseFloat(css.top) || 0 : 84) + holder.offsetHeight + (parseFloat(css.marginBottom) || 12);
  const target = window.scrollY + grid.getBoundingClientRect().top - edge;
  if (window.scrollY > target + 1) window.scrollTo({ top: Math.max(0, target), behavior: "instant" });

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    grid.classList.remove("is-swapping");
    void grid.offsetWidth;                 // restart the fade
    grid.classList.add("is-swapping");
    clearTimeout(galleryApplyFilter.timer);
    galleryApplyFilter.timer = setTimeout(() => grid.classList.remove("is-swapping"), 400);
  }
}

/* Runs in the first startup wave: on this page the photos are the first
   thing a visitor touches. Each step is isolated, so one failing step can
   never stop the rest of the page from starting. */
function startGallery() {
  if (!document.getElementById("galGrid")) return;   // not the gallery page
  [renderGallery, renderGalleryFilters, setupGalleryStats, setupGalleryFilter, setupLightbox].forEach((step) => {
    try {
      step();
    } catch (err) {
      console.error("[cornel] " + step.name + " failed:", err);
    }
  });
}

/* The one package marked "Empfohlen": 60 months of ceramic protection for
   €200 more than the 12-month sealing, the best long-term value for the
   client and the service the ceramic section and the FAQ already recommend. */
const RECOMMENDED_PACKAGE = 9;

/* Lowest PKW price in the packages array, e.g. "€ 49,-". Anything on the page
   that says "ab € ..." reads it from here, so a price change in the array
   can never leave a stale number behind. */
function lowestPkwPrice() {
  const amount = (p) => parseInt(p.prices.pkw.replace(/[^\d]/g, ""), 10);
  return packages.reduce((min, p) => (amount(p) < amount(min) ? p : min)).prices.pkw;
}

/* buildPackagesHtml() is the single source of the package markup.
   build/prerender_packages.py runs this very function in a real browser and
   writes the result into index.html, so the packages and prices sit in the
   served HTML (crawlers and the first paint both get them). renderPackages()
   then only hydrates that markup. */
function buildPackagesHtml() {
  const categoryIcons = {
    "Außen": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h1l2-5h12l2 5h1"/><path d="M5 12v5a1 1 0 001 1h1a1 1 0 001-1v-1h8v1a1 1 0 001 1h1a1 1 0 001-1v-5"/><circle cx="7.5" cy="14.5" r="1.5"/><circle cx="16.5" cy="14.5" r="1.5"/></svg>',
    // Steering wheel: reads as "inside the car" at a glance
    "Innen": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M10 12 3.3 10M14 12l6.7-2M12 14v7"/></svg>',
    "Politur": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/></svg>',
    "Versiegelung": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 4v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V7l7-4z"/><path d="M9 12l2 2 4-4"/></svg>',
    "Premium": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 6 6 .9-4.4 4.2 1 6L12 16.7 6.4 19l1-6L3 8.9 9 8l3-6z"/></svg>',
  };

  // Group packages by category preserving order
  const groups = {};
  const groupOrder = [];
  packages.forEach((pkg) => {
    if (!groups[pkg.category]) {
      groups[pkg.category] = [];
      groupOrder.push(pkg.category);
    }
    groups[pkg.category].push(pkg);
  });

  const catClass = {
    "Außen": "pkg-group-aussen",
    "Innen": "pkg-group-innen",
    "Politur": "pkg-group-politur",
    "Versiegelung": "pkg-group-versiegelung",
    "Premium": "pkg-group-premium",
  };

  const groupsHtml = groupOrder.map((cat) => {
    const pkgs = groups[cat];
    const icon = categoryIcons[cat] || categoryIcons["Premium"];
    const groupClass = catClass[cat] || "";

    const veh = getSelectedVehicle();
    const rowsHtml = pkgs.map((pkg) => {
      const checkSvg = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>`;
      const infoSvg = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.5h.01"/></svg>`;
      // Lines starting with "…" are conditions ("…nach erfolgter Lackpolitur"),
      // not services: no tick, and they don't count towards "N Leistungen"
      const isCondition = (item) => item.startsWith("…");
      const items = pkg.items.map((item) => isCondition(item)
        ? `<li class="pkg-item-pre"><span class="pkg-check" aria-hidden="true">${infoSvg}</span>${item}</li>`
        : `<li><span class="pkg-check" aria-hidden="true">${checkSvg}</span>${item}</li>`).join("");
      const serviceCount = pkg.items.filter((item) => !isCondition(item)).length;
      const recommended = pkg.number === RECOMMENDED_PACKAGE;
      const note = pkg.note ? `<p class="package-note">${pkg.note}</p>` : "";
      // Package-specific WhatsApp prefill — carries package + vehicle + price
      const waHref = getWhatsAppLinkForPackage(pkg, veh);
      const price = pkg.prices[veh];
      const priceTextClass = price.length > 9 ? " is-text" : "";

      return `
        <article class="pkg-card${recommended ? " is-recommended" : ""}" aria-labelledby="pkg-title-${pkg.number}">
          <div class="pkg-card-head">
            <p class="pkg-card-meta">
              <span class="pkg-row-num">Paket ${pkg.number}</span>
              ${recommended ? `<span class="pkg-badge">Empfohlen</span>` : ""}
            </p>
            <h3 id="pkg-title-${pkg.number}">${pkg.title}</h3>
            <div class="pkg-price-single" data-pkw="${pkg.prices.pkw}" data-suv="${pkg.prices.suv}" data-van="${pkg.prices.van}" aria-label="Preis">
              <strong class="${priceTextClass.trim()}">${price}</strong>
              <span class="pkg-price-for">für ${VEHICLE_LABELS[veh]}</span>
            </div>
            <p class="pkg-row-teaser">${pkg.teaser}</p>
          </div>
          <details class="pkg-details">
            <summary class="pkg-toggle">
              <span class="pkg-toggle-text">${serviceCount} ${serviceCount === 1 ? "Leistung" : "Leistungen"}<span class="pkg-sr">: ${pkg.title}</span></span>
              <span class="pkg-toggle-icon" aria-hidden="true">${icons.chevron}</span>
            </summary>
            <div class="pkg-items">
              <div class="pkg-items-inner">
                <ul>${items}</ul>
                ${note}
                <div class="package-content-actions">
                  <a class="button button-secondary button-small" data-call-link href="#kontakt">${icons.phone}<span>Anrufen</span></a>
                  ${waHref
                    ? `<a class="button button-primary button-small cta-pulse" data-pkg-wa="${pkg.number}" href="${waHref}" target="_blank" rel="noreferrer">${icons.whatsapp}<span>Dieses Paket anfragen</span></a>`
                    : `<a class="button button-primary button-small cta-pulse" data-whatsapp-link href="#kontakt">${icons.whatsapp}<span>WhatsApp</span></a>`}
                </div>
              </div>
            </div>
          </details>
        </article>
      `;
    }).join("");

    return `
      <div class="pkg-group ${groupClass}${pkgs.length === 1 ? " pkg-group--single" : ""}">
        <p class="pkg-group-header">
          <span class="pkg-group-icon" aria-hidden="true">${icon}</span>
          <span class="pkg-group-name">${cat}</span>
        </p>
        <div class="pkg-group-cards">${rowsHtml}</div>
      </div>
    `;
  }).join("");

  // Vehicle selector — big obvious buttons, icon + label, selected = green.
  // Sticky above the package list so the active class is always visible.
  const vehNow = getSelectedVehicle();
  const vehicleIcons = {
    pkw: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 13h1l2-5h12l2 5h1"/><path d="M5 13v4a1 1 0 001 1h1a1 1 0 001-1v-1h8v1a1 1 0 001 1h1a1 1 0 001-1v-4"/><circle cx="7.5" cy="15" r="1.4"/><circle cx="16.5" cy="15" r="1.4"/></svg>',
    suv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 14h1l1.5-4.5L8 7h8l2.5 2.5L20 14h1"/><path d="M4 14v3a1 1 0 001 1h1a1 1 0 001-1v-1h10v1a1 1 0 001 1h1a1 1 0 001-1v-3"/><circle cx="7.5" cy="15.5" r="1.5"/><circle cx="16.5" cy="15.5" r="1.5"/></svg>',
    van: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 16V7a1 1 0 011-1h11l4 4h1a1 1 0 011 1v5"/><path d="M3 16h2m4 0h6m4 0h2M14 6v4h5"/><circle cx="7" cy="16.5" r="1.6"/><circle cx="17" cy="16.5" r="1.6"/></svg>',
  };
  const selectorHtml = `
    <div class="vehicle-select" role="group" aria-label="Fahrzeugtyp wählen">
      <span class="vehicle-select-label">Welches Fahrzeug haben Sie?</span>
      <div class="vehicle-select-btns">
        ${["pkw", "suv", "van"].map((v) => `
          <button type="button" class="vsel${v === vehNow ? " is-active" : ""}" data-vehicle="${v}" aria-pressed="${v === vehNow}">
            ${vehicleIcons[v]}
            <span>${VEHICLE_LABELS[v]}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `;

  return `${selectorHtml}<div class="pkg-list">${groupsHtml}</div>`;
}

function renderPackages() {
  const grid = document.getElementById("packagesGrid");
  if (!grid) return;

  // Pre-rendered at build time: keep that markup (no flash, no layout shift)
  // and only re-apply the visitor's vehicle choice to it.
  if (grid.getAttribute("data-prerendered") === "1" && grid.firstElementChild) {
    setupVehicleSelect();
    applyVehicleSelection(getSelectedVehicle());
    return;
  }

  grid.innerHTML = buildPackagesHtml();
  setupVehicleSelect();
}

function applyVehicleSelection(v) {
  document.querySelectorAll(".vehicle-select [data-vehicle]").forEach((b) => {
    const active = b.getAttribute("data-vehicle") === v;
    b.classList.toggle("is-active", active);
    b.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll(".pkg-price-single").forEach((el) => {
    const price = el.getAttribute("data-" + v) || "";
    const strong = el.querySelector("strong");
    strong.textContent = price;
    strong.classList.toggle("is-text", price.length > 9);
    el.querySelector(".pkg-price-for").textContent = "für " + VEHICLE_LABELS[v];
  });
  document.querySelectorAll("[data-pkg-wa]").forEach((link) => {
    const num = Number(link.getAttribute("data-pkg-wa"));
    const pkg = packages.find((p) => p.number === num);
    if (pkg) link.href = getWhatsAppLinkForPackage(pkg, v);
  });
}

function setupVehicleSelect() {
  const wrap = document.querySelector(".vehicle-select");
  if (!wrap) return;
  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-vehicle]");
    if (!btn) return;
    const v = btn.getAttribute("data-vehicle");
    try { sessionStorage.setItem("cornel_vehicle", v); } catch (err) { /* ok */ }
    applyVehicleSelection(v);
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   Google Ads conversion tracking · 2 actions, both under AW-17936964522
   ───────────────────────────────────────────────────────────────────────
   1) Call           label: DWGhCNenjI0cEKq3gelC   (value €1)
      This is the "Contact" conversion action, read out of the Google Ads
      account on 12 Oct 2026. The site used to send -_FGCIXd37UcEKq3geIC,
      which belongs to no conversion action in this account at all, so no
      call click has ever been counted and Google reported the action as
      misconfigured. Labels end in cEKq3gelC with a lowercase L: l, I and 1
      look identical in most fonts, so copy them, never retype them.
   2) WhatsApp Click label: fOZQCIjd37UcEKq3gelC   (value €1)

   Google's guideline for click conversions (support.google.com/google-ads/
   answer/6331304): the conversion action is of type "Click", the page runs
   the Google tag, and a click on the tracked element sends
   gtag('event', 'conversion', { send_to: 'TAG_ID/LABEL', value, currency }).

   This file sends exactly that, for both channels, with no deviation: the
   click is cancelled, the conversion goes out, and event_callback takes the
   visitor to the tel: or wa.me target. A 900ms fallback follows the link
   anyway if the callback never arrives (ad blocker, offline, slow network),
   so a visitor can always reach us even when measurement fails.

   One delegated click listener is the only place a conversion is sent, so
   the same click can never be counted twice. Every tel: and wa.me link must
   match the CTA selectors below; build/verify_seo.py fails if one does not,
   and build/run_track_check.py clicks every one of them in a real browser.
   ─────────────────────────────────────────────────────────────────────── */
(function setupConversionDelegation() {
  if (window.__convDelegated) return;
  window.__convDelegated = true;

  /* ── When does a WhatsApp click count? ────────────────────────────────────
     "click"   Google's guideline: the click IS the conversion, sent with the
               documented snippet. A visitor who taps WhatsApp and then backs
               out still counts, exactly as Google defines it. (default)
     "handoff" Stricter: count only once the browser really hands off to
               WhatsApp. Fewer conversions, all of them confirmed. This sends
               while the page is being hidden, so it must use gtag's beacon
               transport instead of event_callback, which is a deliberate
               deviation from Google's snippet.
     Calls always use the documented snippet; a phone dialler does not hide
     the page, so there is nothing to confirm.

     Default is "handoff": the owner had real trouble with false conversions
     from misclicks, and this is the behaviour that has been recording
     WhatsApp leads in the Ads account. transport_type is a documented gtag
     field, so this stays within Google's tagging API; it is only the sample
     snippet in the help article that uses event_callback instead. */
  var WHATSAPP_COUNTS = "handoff";

  function isWhatsAppHref(href) {
    if (!href) return false;
    return /^https?:\/\/wa\.me\//i.test(href)
        || /^https?:\/\/api\.whatsapp\.com\//i.test(href)
        || /^whatsapp:/i.test(href);
  }
  function isCallHref(href) {
    if (!href) return false;
    return /^tel:/i.test(href);
  }

  /* ── Conversion-quality guards ─────────────────────────────────────────────
     Layered gates so only clicks that look like a real customer count.
     None of them change how the buttons look or feel.

     0) Consent        — no Google tag, no conversion, no session marker
        unless the visitor accepted the cookie banner.

     1) CTA scope      — only the real WhatsApp/call buttons count.
     2) isTrusted      — synthetic/bot clicks never count.
     3) Session dedupe — one WhatsApp + one call conversion per session,
        marked at FIRE time (a gated click doesn't burn the slot).
     4) Engagement     — visitor must have scrolled OR been on the page >4s.
        Instant taps straight off an ad click are bounces/fat-fingers.
     5) Bar cooldown   — taps on the floating bar within 450ms of it sliding
        in are swallowed entirely (the "under the finger" misclick).
     Both channels then send Google's documented click conversion and follow
     the link from event_callback. WhatsApp can be switched to the stricter
     hand off rule with WHATSAPP_COUNTS above.
  */
  /* Every styled contact button counts, plus the explicit data attributes, so
     a new button is still tracked if someone forgets the attribute.
     build/verify_seo.py fails the build when a tel: or wa.me link on any page
     is not covered by one of these selectors. */
  var WA_CTA = "a.button, a.button-whatsapp, a.topnav-cta, a.glass-wa, a[data-whatsapp-link], a[data-pkg-wa]";
  var CALL_CTA = "a.button, a.glass-call, a.topnav-call, a.topbar-phone, a[data-call-link], .mobile-cta a.button-secondary";

  /* (4) engagement: a real visitor has interacted with the page before
     tapping, or has been here a moment. Kept short so a decided visitor who
     taps straight away still counts; the misclick this gate was built for is
     caught by the 450ms bar cooldown in (5). */
  var ENGAGED_AFTER_MS = 1500;
  var pageLoadedAt = Date.now();
  var hasInteracted = false;
  function markInteracted() { hasInteracted = true; }
  ["scroll", "pointermove", "wheel", "keydown"].forEach(function (ev) {
    window.addEventListener(ev, markInteracted, { passive: true, once: true });
  });
  function visitorEngaged() {
    return hasInteracted || (Date.now() - pageLoadedAt > ENGAGED_AFTER_MS);
  }
  // exposed so build/track_check can read the gate state during the test
  window.__convGates = function () {
    return { engaged: visitorEngaged(), waCta: WA_CTA, callCta: CALL_CTA };
  };

  function alreadyCounted(key) {
    try { return sessionStorage.getItem(key) === "1"; } catch (e) { return false; }
  }
  function markCounted(key) {
    try { sessionStorage.setItem(key, "1"); } catch (e) { /* storage blocked — still fire */ }
  }

  /* Google's documented click-conversion snippet (support.google.com/
     google-ads/answer/6331304): send the conversion, then let event_callback
     take the visitor to the link target. Used for tel: links, which are a
     normal same tab navigation, exactly the case the snippet is written for.
     The 900ms fallback makes sure the dialler still opens if the callback
     never arrives (ad blocker, offline, slow network). */
  function reportConversionAndFollow(label, url, e) {
    if (typeof gtag !== "function") return;
    e.preventDefault();
    var navigated = false;
    function callback() {
      if (navigated) return;
      navigated = true;
      if (typeof url !== "undefined") { window.location = url; }
    }
    gtag("event", "conversion", {
      send_to: label,
      value: 1.0,
      currency: "EUR",
      event_callback: callback,
    });
    setTimeout(callback, 900);
  }

  /* Only used when WHATSAPP_COUNTS is "handoff": wait for the browser to
     actually leave for the app, then send. The page is being hidden at that
     moment, so the hit goes out as a beacon; an event_callback would never
     run. Nothing to navigate to either, the hand off already happened. */
  function fireOnWhatsAppOpen(label, key) {
    var done = false;
    function fire() {
      if (done) return;
      done = true;
      cleanup();
      markCounted(key);
      if (typeof gtag !== "function") return;
      gtag("event", "conversion", {
        send_to: label,
        value: 1.0,
        currency: "EUR",
        transport_type: "beacon",
      });
    }
    function onVis() { if (document.visibilityState === "hidden") fire(); }
    function cleanup() {
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pagehide", fire);
    }
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("pagehide", fire);
    setTimeout(function () { if (!done) cleanup(); }, 3500);
  }

  function onDocumentClick(e) {
    if (!e.isTrusted) return;                                       // (2)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (e.button !== undefined && e.button !== 0) return;

    var link = e.target && e.target.closest && e.target.closest("a[href]");
    if (!link) return;

    var rawHref = link.getAttribute("href") || link.href;

    /* (5) under-finger cooldown: the floating bar just slid in beneath a
       scrolling thumb — swallow the tap entirely (no nav, no conversion) */
    if (link.closest(".mobile-cta") && Date.now() - (window.__ctaBarShownAt || 0) < 450) {
      e.preventDefault();
      return;
    }

    /* (0) consent: consent.js defines gtag only after the visitor accepted
       Google Ads cookies. Without it nothing is sent and nothing is stored */
    if (typeof gtag !== "function") return;

    if (isWhatsAppHref(rawHref)) {
      if (!link.matches(WA_CTA)) return;                            // (1)
      if (alreadyCounted("cornel_wa_lead")) return;                 // (3)
      if (!visitorEngaged()) return;                                // (4) — link still works, untracked
      if (WHATSAPP_COUNTS === "handoff") {
        fireOnWhatsAppOpen("AW-17936964522/fOZQCIjd37UcEKq3gelC", "cornel_wa_lead");
      } else {
        markCounted("cornel_wa_lead");
        reportConversionAndFollow("AW-17936964522/fOZQCIjd37UcEKq3gelC", rawHref, e);
      }
    } else if (isCallHref(rawHref)) {
      if (!link.matches(CALL_CTA)) return;
      if (alreadyCounted("cornel_call_lead")) return;
      if (!visitorEngaged()) return;
      markCounted("cornel_call_lead");
      reportConversionAndFollow("AW-17936964522/DWGhCNenjI0cEKq3gelC", rawHref, e);
    }
  }

  function attach() {
    document.addEventListener("click", onDocumentClick);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", attach);
  } else {
    attach();
  }
})();

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
    // Conversion tracking handled by the unified delegated listener at the
    // top of this file (gtag_report_conversion / _whatsapp).
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
    // Conversion tracking handled by the unified delegated listener.
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

  const phoneDisplay = window.SITE_CONFIG.business.phoneDisplay || "";
  const callButton = phoneHref
    ? `<a class="button button-secondary" href="${phoneHref}" aria-label="Jetzt anrufen: ${phoneDisplay}">${icons.phone}<span>Anrufen</span></a>`
    : `<a class="button button-secondary is-disabled" href="#kontakt" aria-disabled="true">${icons.phone}<span>Anrufen</span></a>`;

  const whatsappButton = whatsappHref
    ? `<a class="button button-whatsapp" href="${whatsappHref}" target="_blank" rel="noreferrer" aria-label="Termin per WhatsApp anfragen">${icons.whatsapp}<span>WhatsApp</span></a>`
    : `<a class="button button-whatsapp is-disabled" href="#kontakt" aria-disabled="true">${icons.whatsapp}<span>WhatsApp</span></a>`;

  container.innerHTML = `${callButton}${whatsappButton}`;

  // Conversion tracking handled by the unified delegated listener at the
  // top of this file. No per-button listeners needed.
}

/* One-green-per-viewport rule: hide the sticky CTA bar while a section's own
   CTA block is on screen, so users never see duplicate contact buttons
   stacked on top of each other. Plain scroll + rect math (no
   IntersectionObserver) so behavior is identical everywhere. */
function setupCtaBarAutoHide() {
  const bar = document.querySelector(".mobile-cta");
  const backdrop = document.querySelector(".mobile-cta-backdrop");
  if (!bar) return;

  const targets = Array.from(
    // an open package's own buttons count too (closed packages are skipped below)
    document.querySelectorAll(".hero-actions, .mid-cta, .ceramic-actions, .glass-actions, .pkg-card .package-content-actions")
  );
  if (!targets.length) return;

  let pending = false;
  function check() {
    pending = false;
    const vh = window.innerHeight;
    const hide = targets.some((t) => {
      // Chrome still gives content inside a closed <details> a size, so skip it explicitly
      if (t.closest("details:not([open])")) return false;
      const r = t.getBoundingClientRect();
      if (r.height === 0) return false;
      const overlap = Math.min(r.bottom, vh) - Math.max(r.top, 0);
      return overlap > r.height * 0.3;
    });
    // Record hidden→visible transitions: taps on the bar right after it
    // slides in are treated as accidental (under-finger misclick cooldown)
    const wasHidden = bar.classList.contains("mobile-cta--hidden");
    if (wasHidden && !hide) window.__ctaBarShownAt = Date.now();
    bar.classList.toggle("mobile-cta--hidden", hide);
    if (backdrop) backdrop.classList.toggle("mobile-cta--hidden", hide);
  }
  function onScroll() {
    if (pending) return;
    pending = true;
    setTimeout(check, 80);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  check();
}


/* Click-to-load Google Maps: the iframe (and Google's cookies) only load
   after an explicit tap — faster initial page + consent-clean. */
function setupMapFacade() {
  const btn = document.getElementById("mapFacade");
  if (!btn) return;
  btn.addEventListener("click", function () {
    const iframe = document.createElement("iframe");
    iframe.src = btn.getAttribute("data-map-src");
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.cssText = "border:0;border-radius:var(--r-lg);min-height:240px;";
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    iframe.title = "Google Maps · Standort Cornel Detailing";
    btn.replaceWith(iframe);
  });
}

/* Packages: tap a card to open its services. The panel glides open and shut
   (the CSS animates its height, this only toggles classes), one package is
   open at a time, and side by side a pair opens together so both lists can
   be compared. Panels above the tapped card close instantly and the page is
   shifted by the same amount, so the card never jumps away from the finger. */
function setupPackageDetails() {
  const list = document.querySelector(".pkg-list");
  if (!list) return;
  const all = Array.from(list.querySelectorAll(".pkg-details"));
  const sideBySide = window.matchMedia("(min-width: 721px)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const root = document.documentElement;
  const runs = new WeakMap();

  // Finishes an animation on transitionend, with a timer in case none fires
  const settle = (details, after) => {
    const run = (runs.get(details) || 0) + 1;
    runs.set(details, run);
    const panel = details.querySelector(".pkg-items");
    let finished = false;
    const done = (e) => {
      if (finished || (e && (e.target !== panel || e.propertyName !== "grid-template-rows"))) return;
      finished = true;
      panel.removeEventListener("transitionend", done);
      if (runs.get(details) !== run) return;   // a newer open/close took over
      details.classList.remove("is-animating");
      if (after) after();
    };
    panel.addEventListener("transitionend", done);
    setTimeout(done, 320);
  };

  const open = (details) => {
    details.open = true;
    if (reducedMotion.matches) {
      runs.set(details, (runs.get(details) || 0) + 1);
      details.classList.remove("is-animating", "is-collapsed");
      return;
    }
    details.classList.add("is-animating", "is-collapsed");
    void details.offsetHeight;                 // start from zero height
    details.classList.remove("is-collapsed");
    settle(details);
  };

  const close = (details, animate) => {
    if (!details.open) return;
    if (!animate || reducedMotion.matches) {
      runs.set(details, (runs.get(details) || 0) + 1);
      details.open = false;
      details.classList.remove("is-animating", "is-collapsed");
      return;
    }
    details.classList.add("is-animating", "is-collapsed");
    settle(details, () => {
      details.open = false;
      details.classList.remove("is-collapsed");
    });
  };

  // After opening, bring the services and buttons into view without pushing
  // the card's title under the header or the sticky vehicle selector
  const reveal = (pair) => {
    const card = pair[0].closest(".pkg-card");
    const header = document.querySelector(".topbar");
    const selector = document.querySelector(".vehicle-select");
    let top = header ? header.getBoundingClientRect().bottom : 0;
    if (selector && getComputedStyle(selector).position === "sticky") {
      top = Math.max(top, parseFloat(getComputedStyle(selector).top) + selector.offsetHeight);
    }
    const bar = document.querySelector(".mobile-cta");
    const barSpace = bar && getComputedStyle(bar).display !== "none" ? bar.offsetHeight + 20 : 0;
    const bottom = Math.max(...pair.map((d) => d.getBoundingClientRect().bottom));
    const overflow = bottom - (window.innerHeight - barSpace - 16);
    const room = card.getBoundingClientRect().top - top - 12;
    const by = Math.min(overflow, room);
    if (by > 8) window.scrollBy({ top: by, behavior: reducedMotion.matches ? "auto" : "smooth" });
  };

  list.addEventListener("click", (e) => {
    const summary = e.target.closest(".pkg-toggle");
    if (!summary) return;
    e.preventDefault();                        // opening and closing happen here
    const details = summary.parentElement;
    const group = details.closest(".pkg-group-cards");
    const pair = sideBySide.matches && group ? Array.from(group.querySelectorAll(".pkg-details")) : [details];

    // Lets the call/WhatsApp bar re-check what is on screen once the panel has moved
    const recheckBar = () => setTimeout(() => window.dispatchEvent(new Event("scroll")), 280);

    if (details.open && !details.classList.contains("is-collapsed")) {
      pair.forEach((d) => close(d, true));
      recheckBar();
      return;
    }

    const before = summary.getBoundingClientRect().top;
    root.style.overflowAnchor = "none";        // we keep the position ourselves
    // Same row or further down: glide shut. Above: close instantly (see below)
    all.forEach((d) => {
      if (d.open && !pair.includes(d)) close(d, d.getBoundingClientRect().top >= before - 1);
    });
    const shift = summary.getBoundingClientRect().top - before;
    if (Math.abs(shift) > 1) {
      const behavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollBy(0, shift);
      root.style.scrollBehavior = behavior;
    }
    requestAnimationFrame(() => requestAnimationFrame(() => { root.style.overflowAnchor = ""; }));

    pair.forEach(open);
    setTimeout(() => reveal(pair), reducedMotion.matches ? 0 : 260);
    recheckBar();
  });

  // Opened another way (e.g. the browser's find in page): never leave it collapsed
  all.forEach((d) => d.addEventListener("toggle", () => {
    if (d.open && !d.classList.contains("is-animating")) d.classList.remove("is-collapsed");
  }));
}

/* A service card ("Was braucht Ihr Auto?") answers with one press: the page
   moves to that category of packages and the service list of its first
   package opens (on a wide layout the pair opens together), so the price, what
   is included and the request button are all on screen. Without this the card
   was a plain anchor: it only scrolled, and the visitor had to press again to
   see anything. If the packages are not on the page the link stays a normal
   anchor. */
function setupServiceCards() {
  const cards = document.querySelectorAll('a.value-card--link[href^="#pkg-title-"]');
  if (!cards.length) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let run = 0;

  // where the top of an element has to sit to clear the header and the sticky vehicle picker
  const clearance = () => {
    let top = 12;
    const bar = document.querySelector(".topbar");
    if (bar) top = Math.max(top, bar.getBoundingClientRect().bottom + 12);
    const picker = document.querySelector(".vehicle-select");
    if (picker && getComputedStyle(picker).position === "sticky") {
      top = Math.max(top, parseFloat(getComputedStyle(picker).top) + picker.offsetHeight + 12);
    }
    return top;
  };

  cards.forEach((card) => card.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.button > 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const title = document.getElementById(card.getAttribute("href").slice(1));
    const pkgCard = title && title.closest(".pkg-card");
    const group = pkgCard && (pkgCard.closest(".pkg-group") || pkgCard);
    if (!group) return;
    e.preventDefault();
    const mine = ++run;
    const anchor = group.querySelector(".pkg-group-header") || group;
    const goal = () => Math.max(0, Math.round(anchor.getBoundingClientRect().top + window.scrollY - clearance()));

    const arrive = () => {
      if (mine !== run) return;                // another card was pressed meanwhile
      // the page may have grown or shrunk while it moved: land exactly
      if (Math.abs(window.scrollY - goal()) > 4) {
        const root = document.documentElement;
        const behavior = root.style.scrollBehavior;
        root.style.scrollBehavior = "auto";
        window.scrollTo(0, goal());
        root.style.scrollBehavior = behavior;
      }
      const details = pkgCard.querySelector(".pkg-details");
      const toggle = details && details.querySelector(".pkg-toggle");
      if (toggle && !details.open) toggle.click();   // same path as a press on "Leistungen"
      title.setAttribute("tabindex", "-1");
      title.focus({ preventScroll: true });
    };

    const y = goal();
    if (reducedMotion.matches || Math.abs(window.scrollY - y) < 4) {
      window.scrollTo(0, y);
      arrive();
      return;
    }
    window.scrollTo({ top: y, behavior: "smooth" });
    // "scrollend" where the browser has it, and a timer as the floor under it
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      window.removeEventListener("scrollend", finish);
      arrive();
    };
    window.addEventListener("scrollend", finish, { once: true });
    setTimeout(finish, 1100);
  }));
}

/* Fade-in on scroll. The observer is kept at module scope because the
   showcase, gallery and review cards are built in the second startup wave,
   after this has already run: revealScan() picks those up. An element that
   is never observed is invisible, not merely unanimated, so a browser
   without IntersectionObserver shows everything instead of nothing. */
let revealObserver = null;

function revealAll() {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
}

// Safe to call as often as we like: observing an observed element is a no-op.
function revealScan() {
  if (!revealObserver) return;
  document
    .querySelectorAll(".reveal:not(.is-visible)")
    .forEach((el) => revealObserver.observe(el));
}

function setupReveal() {
  if (!("IntersectionObserver" in window)) {
    revealAll();
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );

  revealScan();
}

// Schema.org structured data is defined inline in <head> for optimal SEO crawlability.

function renderReviews() {
  const track = document.getElementById("reviewsTrack");
  if (!track) return;

  const stars = (n) =>
    Array.from({ length: 5 }, (_, i) =>
      `<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" style="fill:${i < n ? "#FBBC04" : "#e0e0e0"}"><path d="M12 2l3 6 6 .9-4.4 4.2 1 6L12 16.7 6.4 19l1-6L3 8.9 9 8l3-6z"/></svg>`
    ).join("");

  // Reviewers are shown by first name and last initial ("Claudia S.") with a
  // letter avatar: less personal data than the full Google profile
  const shortName = (name) => {
    const parts = name.trim().split(/\s+/);
    if (parts.length < 2) return parts[0];
    return `${parts[0]} ${parts[parts.length - 1].charAt(0).toUpperCase()}.`;
  };

  // Testimonial layout: stars + Google on top, the words, then the author
  // pinned to the bottom so names line up across every card in a row
  const cardHtml = (r) => `
    <article class="review-card">
      <div class="review-card-head">
        <div class="review-stars" role="img" aria-label="${r.rating} von 5 Sternen">${stars(r.rating)}</div>
        <svg class="review-google-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>
      <p class="review-text">${r.text}</p>
      <div class="review-author">
        <span class="review-avatar review-avatar--initial" aria-hidden="true">${r.name.trim().charAt(0).toUpperCase()}</span>
        <div class="review-meta">
          <strong>${shortName(r.name)}</strong>
          <span class="review-date">Google-Bewertung</span>
        </div>
      </div>
    </article>
  `;

  // Static swipeable cards: the six most detailed reviews, longest first, so
  // every card carries real words (one-liners stay on Google)
  const ordered = [...reviews].sort((a, b) => b.text.length - a.text.length).slice(0, 6);
  track.innerHTML = ordered.map(cardHtml).join("");
}

/* Reviews: small position dots that follow the swipe. The CSS makes cards
   fill the row exactly (--rv-n per breakpoint), so one step is always one
   card plus the gap. Desktop shows a still row, so the dots hide there. */
function setupReviewsCarousel() {
  const scroller = document.getElementById("reviewsScroller");
  const dotsWrap = document.getElementById("reviewsDots");
  if (!scroller || !dotsWrap) return;
  const all = Array.from(scroller.querySelectorAll(".review-card"));
  if (!all.length) return;

  let cards = all;
  let positions = 1;
  let active = -1;
  let lastWidth = 0;

  const step = () =>
    (cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : cards[0].offsetWidth) || 1;

  const sync = () => {
    const i = Math.min(positions - 1, Math.max(0, Math.round(scroller.scrollLeft / step())));
    if (i === active) return;
    const dots = dotsWrap.children;
    if (dots[active]) dots[active].classList.remove("is-active");
    if (dots[i]) dots[i].classList.add("is-active");
    active = i;
  };

  const layout = () => {
    if (scroller.clientWidth === lastWidth) return;   // ignore toolbar-only resizes
    lastWidth = scroller.clientWidth;
    cards = all.filter((c) => c.offsetParent !== null);   // desktop hides extra cards
    const visible = parseInt(getComputedStyle(scroller).getPropertyValue("--rv-n"), 10) || 1;
    positions = Math.max(1, cards.length - visible + 1);
    dotsWrap.hidden = positions <= 1;
    dotsWrap.innerHTML = "<span></span>".repeat(positions);
    active = -1;
    sync();
  };

  let queued = false;
  scroller.addEventListener("scroll", () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; sync(); });
  }, { passive: true });
  window.addEventListener("resize", layout, { passive: true });
  layout();
}

/* Category chips with a count each. They are already in galerie.html; they
   are only rebuilt when the array no longer matches them. */
function renderGalleryFilters() {
  const container = document.getElementById("galFilters");
  if (!container) return;

  // Categories in the order they first appear in the array
  const cats = {};
  projects.forEach((p) => {
    if (p.category) cats[p.category] = (cats[p.category] || 0) + 1;
  });
  const wanted = [["all", "Alle", projects.length]].concat(
    Object.entries(cats).map(([cat, count]) => [cat, cat, count])
  );

  const chips = Array.from(container.querySelectorAll(".gal-chip"));
  const upToDate =
    chips.length === wanted.length &&
    wanted.every(([filter, , count], i) => {
      const n = chips[i].querySelector(".gal-chip-n");
      return chips[i].dataset.filter === filter && n && n.textContent === String(count);
    });
  if (upToDate) return;

  container.innerHTML = wanted
    .map(([filter, name, count]) => {
      const on = filter === galleryFilter;
      return `<button type="button" class="gal-chip${on ? " is-active" : ""}" data-filter="${galleryEscape(filter)}" aria-pressed="${on}">${galleryEscape(name)} <span class="gal-chip-n">${count}</span></button>`;
    })
    .join("");
}

function setupGalleryFilter() {
  const container = document.getElementById("galFilters");
  const grid = document.getElementById("galGrid");
  if (!container || !grid) return;

  container.addEventListener("click", (e) => {
    const chip = e.target.closest(".gal-chip");
    if (chip) galleryApplyFilter(chip.dataset.filter, true);
  });

  // "Alle 19 anzeigen" under a filtered list
  const reset = document.getElementById("galReset");
  if (reset) {
    reset.addEventListener("click", () => {
      galleryApplyFilter("all", true);
      const all = container.querySelector('.gal-chip[data-filter="all"]');
      if (all) all.focus({ preventScroll: true });   // the button that was pressed is gone now
    });
  }

  // The fade at the edges of the chip row and the place of the booking card
  // follow the row being scrolled and the window being resized or turned
  let queued = false;
  const refit = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      galleryChipFade();
      galleryBookFit();
    });
  };
  container.addEventListener("scroll", refit, { passive: true });
  window.addEventListener("resize", refit, { passive: true });
  window.addEventListener("load", refit, { once: true });   // the fonts are in: widths are final

  galleryApplyFilter(galleryFilter, false);   // brings a rebuilt list in line with the chips
}

function setupMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("topnav");
  const topbar = document.querySelector(".topbar");
  if (!toggle || !nav || !topbar) return;

  // Tap-outside layer: dims the page and swallows the closing tap, so a tap
  // meant to dismiss the menu can never land on a call/WhatsApp button
  const scrim = document.createElement("div");
  scrim.className = "topbar-scrim";
  scrim.setAttribute("aria-hidden", "true");
  topbar.insertAdjacentElement("afterend", scrim);

  let openedAtY = 0;
  const isOpen = () => nav.classList.contains("is-open");

  function setOpen(open, returnFocus) {
    nav.classList.toggle("is-open", open);
    toggle.classList.toggle("is-active", open);
    scrim.classList.toggle("is-visible", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    if (open) openedAtY = window.scrollY;
    else if (returnFocus) toggle.focus();
  }

  toggle.addEventListener("click", () => setOpen(!isOpen()));
  scrim.addEventListener("click", () => setOpen(false));
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) setOpen(false, true);
  });

  // Scrolling away closes it, and so does growing past the mobile breakpoint
  window.addEventListener("scroll", () => {
    if (isOpen() && Math.abs(window.scrollY - openedAtY) > 12) setOpen(false);
  }, { passive: true });
  const desktop = window.matchMedia("(min-width: 1025px)");
  const onBreakpoint = (e) => { if (e.matches) setOpen(false); };
  if (desktop.addEventListener) desktop.addEventListener("change", onBreakpoint);
  else if (desktop.addListener) desktop.addListener(onBreakpoint);
}

/* True when the visitor arrived from outside the site, false when they came
   from one of our own pages. Lets one-time effects run once per visit
   without storing anything on the device. */
function isNewVisit() {
  try {
    return !document.referrer || new URL(document.referrer).origin !== location.origin;
  } catch (e) {
    return true;
  }
}

/* One gloss sweep across the header per visit (the animation is pure CSS) */
function setupHeaderSheen() {
  const topbar = document.querySelector(".topbar");
  if (!topbar || !isNewVisit()) return;
  topbar.classList.add("is-sheen");
}

function setupScrollHeader() {
  const topbar = document.querySelector(".topbar");
  if (!topbar) return;

  const update = () => {
    topbar.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  window.addEventListener("scroll", update, { passive: true });
  update(); // run once on load in case page is already scrolled
}

function setupActiveNav() {
  const navLinks = Array.from(
    document.querySelectorAll('.topnav a[href^="#"]')
  );
  if (!navLinks.length) return;

  const sectionIds = navLinks
    .map((link) => link.getAttribute("href").slice(1))
    .filter(Boolean);

  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (!sections.length) return;

  // Map section id → nav link for fast lookup
  const linkMap = {};
  navLinks.forEach((link) => {
    const id = link.getAttribute("href").slice(1);
    if (id) linkMap[id] = link;
  });

  let activeId = null;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId = entry.target.id;
          navLinks.forEach((l) => l.classList.remove("is-active"));
          if (linkMap[activeId]) {
            linkMap[activeId].classList.add("is-active");
            if (window._moveNavPill) window._moveNavPill(linkMap[activeId]);
          }
        }
      });
    },
    { rootMargin: "-15% 0px -65% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));

  // The last menu section sits at the page end and cannot reach the
  // observer band on a tall window: mark it once the page is fully scrolled.
  const lastLink = linkMap[sections[sections.length - 1].id];
  const atEnd = () => {
    if (window.innerHeight + window.scrollY < document.documentElement.scrollHeight - 4) return;
    if (!lastLink || lastLink.classList.contains("is-active")) return;
    navLinks.forEach((l) => l.classList.remove("is-active"));
    lastLink.classList.add("is-active");
    if (window._moveNavPill) window._moveNavPill(lastLink);
  };
  window.addEventListener("scroll", atEnd, { passive: true });
}

function setupNavPill() {
  var pill = document.getElementById('navPill');
  var nav  = document.getElementById('topnav');
  if (!pill || !nav) return;

  function move(link) {
    if (!link || window.innerWidth <= 1024) {
      pill.classList.remove('is-visible');
      return;
    }
    var navRect  = nav.getBoundingClientRect();
    var linkRect = link.getBoundingClientRect();
    // measured positions are screen pixels, style values are page pixels: on a
    // wide screen the page is shown at nine tenths (styles.css, WIDE SCALE), so
    // the two differ and the measured values are converted
    var k = navRect.width ? nav.offsetWidth / navRect.width : 1;
    pill.style.left  = ((linkRect.left - navRect.left) * k) + 'px';
    pill.style.width = (linkRect.width * k) + 'px';
    pill.classList.add('is-visible');
  }

  // Expose so setupActiveNav can call it
  window._moveNavPill = move;

  // Hover preview — slide pill to hovered link, snap back on leave
  nav.querySelectorAll('a:not(.topnav-cta)').forEach(function(link) {
    link.addEventListener('mouseenter', function() { move(link); });
    link.addEventListener('mouseleave', function() {
      var active = nav.querySelector('.topnav a.is-active');
      if (active) move(active); else pill.classList.remove('is-visible');
    });
  });

  // Reposition on resize
  window.addEventListener('resize', function() {
    var active = nav.querySelector('.topnav a.is-active');
    move(active || null);
  }, { passive: true });
}

/* ── VIDEO SHOWCASE ─────────────────────────────────────── */
function setupAutoPlayVideo(opts) {
  var section   = opts.section;
  var video     = opts.video;
  var btn       = opts.btn;
  var inner     = opts.inner || section;
  var tapTarget = opts.tapTarget || section;  // Element that triggers tap-to-toggle
  if (!section || !video || !btn) return;

  var userPaused = false;
  var hasLoaded  = false;

  function tryPlay() {
    if (userPaused) return;
    if (!hasLoaded && inner) inner.classList.add("is-loading");
    var p = video.play();
    if (p !== undefined) {
      p.then(function () {
        if (inner) inner.classList.remove("is-loading");
        hasLoaded = true;
        btn.classList.remove("is-paused");
        btn.setAttribute("aria-label", "Video pausieren");
      }).catch(function () {
        // Autoplay blocked (unusual since muted) — show play button
        if (inner) inner.classList.remove("is-loading");
        btn.classList.add("is-paused");
        btn.setAttribute("aria-label", "Video abspielen");
      });
    }
  }

  // Autoplay / autopause via IntersectionObserver
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          tryPlay();
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.25 });
    io.observe(section);
  } else {
    // Fallback for very old browsers — just attempt play immediately
    tryPlay();
  }

  // Toggle button
  btn.addEventListener("click", function () {
    if (video.paused) {
      userPaused = false;
      tryPlay();
    } else {
      userPaused = true;
      video.pause();
      btn.classList.add("is-paused");
      btn.setAttribute("aria-label", "Video abspielen");
    }
  });

  // Touch-to-toggle on the configured tap target (section by default,
  // or just the video element for sections where we don't want surrounding
  // copy / CTAs to count as a tap)
  tapTarget.addEventListener("touchend", function (e) {
    // Ignore if the tap landed on the play/pause button itself
    if (btn.contains(e.target)) return;
    if (video.paused) {
      userPaused = false;
      tryPlay();
    } else {
      userPaused = true;
      video.pause();
      btn.classList.add("is-paused");
      btn.setAttribute("aria-label", "Video abspielen");
    }
  }, { passive: true });

  // Mouse click for desktop on the same tap target
  tapTarget.addEventListener("click", function (e) {
    if (btn.contains(e.target)) return;
    // Only toggle if the click target is actually inside the tap target
    if (e.target !== tapTarget && !tapTarget.contains(e.target)) return;
    if (video.paused) {
      userPaused = false;
      tryPlay();
    } else {
      userPaused = true;
      video.pause();
      btn.classList.add("is-paused");
      btn.setAttribute("aria-label", "Video abspielen");
    }
  });

  // Sync icon state with actual video events
  video.addEventListener("play", function () {
    if (inner) inner.classList.remove("is-loading");
    btn.classList.remove("is-paused");
    btn.setAttribute("aria-label", "Video pausieren");
  });
  video.addEventListener("pause", function () {
    if (!video.ended) {
      btn.classList.add("is-paused");
      btn.setAttribute("aria-label", "Video abspielen");
    }
  });
  video.addEventListener("waiting", function () {
    if (inner) inner.classList.add("is-loading");
  });
  video.addEventListener("canplay", function () {
    if (inner) inner.classList.remove("is-loading");
  });
}

function setupVideoShowcase() {
  var section = document.getElementById("video-showcase");
  setupAutoPlayVideo({
    section: section,
    video:   document.getElementById("showcaseVideo"),
    btn:     document.getElementById("videoToggle"),
    inner:   section ? section.querySelector(".video-showcase-inner") : null,
  });

  var ceramicSection = document.getElementById("keramik-schutz");
  var ceramicFrame   = ceramicSection ? ceramicSection.querySelector(".ceramic-video-frame") : null;
  setupAutoPlayVideo({
    section:   ceramicSection,
    video:     document.getElementById("keramicVideo"),
    btn:       document.getElementById("keramicVideoToggle"),
    inner:     ceramicFrame,
    // Tap-to-toggle ONLY on the video frame, not the whole section —
    // avoids accidental pauses when scrolling past benefits/copy
    tapTarget: ceramicFrame,
  });
}

/* The film in the hero. The photo is the first picture and stays the picture
   whenever the film may not or cannot run. The film gets its address only
   after the page has loaded, so it never competes with the photo, the fonts
   or the script; it shows itself only once it really plays.

   · no film for visitors who asked for less motion or for less data
   · one of three files, by the shape of the hero (see build/make_hero_video.py)
   · it plays by itself, always, with no button (the owner's decision); it
     only rests while the hero is out of sight and goes on when it is back */
function setupHeroFilm() {
  const film = document.getElementById("heroFilm");
  const hero = film && film.closest(".hero");
  if (!film || !hero || !film.play) return;

  const conn = navigator.connection || {};
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (conn.saveData || /(^|-)2g$/.test(conn.effectiveType || "")) return;

  let inSight = true;
  let started = false;

  const file = () => {
    if (window.matchMedia("(max-width: 600px)").matches) return film.dataset.phone;
    if (window.matchMedia("(min-width: 1600px)").matches) return film.dataset.wide;
    return film.dataset.mid;
  };
  const play = () => {
    if (!started || !inSight || document.hidden) return;
    const p = film.play();
    if (p && p.catch) p.catch(() => {});   // not allowed to start: the photo stays
  };

  film.addEventListener("playing", () => film.classList.add("is-playing"));
  film.addEventListener("error", () => film.classList.remove("is-playing"));
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((entries) => {
      inSight = entries[entries.length - 1].isIntersecting;
      if (inSight) play(); else film.pause();
    }, { threshold: 0.1 }).observe(hero);
  }
  document.addEventListener("visibilitychange", () => { if (!document.hidden) play(); });

  const start = () => {
    if (started) return;
    started = true;
    film.src = file();
    play();
  };
  const afterLoad = () => setTimeout(start, 400);
  if (document.readyState === "complete") afterLoad();
  else window.addEventListener("load", afterLoad, { once: true });
}

function setupReviewCount() {
  document.querySelectorAll("#heroReviewCount, #reviewStatCount").forEach((el) => {
    el.textContent = "50+";
  });
}

/* ════════════════════════════════════════════════════════════════════════════
   GALLERY · the three numbers in the hero and the full screen photo viewer
   ════════════════════════════════════════════════════════════════════════════ */

/* Photos, vehicles and categories, counted from the array. A vehicle is a
   make and model (see galleryVehicle): three photos of the same Porsche are
   one vehicle, and "Lackanalyse" is a photo, not a vehicle. */
function setupGalleryStats() {
  const photos = document.getElementById("galStatPhotos");
  const vehicles = document.getElementById("galStatVehicles");
  const categories = document.getElementById("galStatCategories");
  if (!photos || !vehicles || !categories) return;   // not on the gallery page

  const set = (el, n) => {
    if (el.textContent !== String(n)) el.textContent = n;
  };
  set(photos, projects.length);
  set(vehicles, new Set(projects.map(galleryVehicle).filter(Boolean)).size);
  set(categories, new Set(projects.map((p) => p.category).filter(Boolean)).size);
}

/* The photo viewer. Three slides sit side by side (previous, current, next):
   a swipe drags the neighbour in with the finger, and the neighbours are
   already loaded when they are needed.

   · tap a photo: opens; the address gets #<slug>, so the photo can be linked
   · swipe, the arrow buttons, the arrow keys: previous and next
   · X, Escape, a tap beside the photo, pulling the photo down, the browser's
     Back button: close. Back never leaves the gallery while a photo is open
   · galerie.html#<slug> (the homepage strip links like this) opens that photo
   · focus stays inside while it is open and returns to the photo afterwards */
function setupLightbox() {
  const lb = document.getElementById("galLightbox");
  const grid = document.getElementById("galGrid");
  if (!lb || !grid) return;

  const byId = (id) => document.getElementById(id);
  const stage = byId("glbStage");
  const track = byId("glbTrack");
  const slides = Array.from(track.querySelectorAll(".glb-slide"));
  const countEl = byId("glbCount");
  const labelEl = byId("glbLabel");
  const titleEl = byId("glbTitle");
  const descEl = byId("glbDesc");
  const moreTitle = byId("glbMoreTitle");
  const thumbsEl = byId("glbThumbs");
  const btnPrev = byId("glbPrev");
  const btnNext = byId("glbNext");
  const btnClose = byId("glbClose");
  const waLink = lb.querySelector("[data-whatsapp-link]");
  const shell = document.querySelector(".site-shell");
  const root = document.documentElement;
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
  const GAP = 16;                 // px between two photos while they slide
  const STEP = `(100% + ${GAP}px)`;

  let list = [];                  // the photos the viewer walks through
  let index = 0;
  let order = [0, 1, 2];          // which slide is previous, current, next
  let isOpen = false;
  let busy = false;               // a slide animation is running
  let pushed = false;             // our own history entry is on top
  let opener = null;
  let drag = null;
  let swallowClick = false;
  let endSlide = null;            // finishes the slide animation that is running, at once
  let openedSlug = "";            // the photo the viewer was opened on ...
  let openedY = 0;                // ... and where the page stood at that moment
  let quietUntil = 0;
  let quietSpot = null;           // where the X was, kept quiet a little longer

  /* A second tap of a double tap must not land on whatever has just appeared
     or come free under the finger. Right after opening that is a small photo,
     an arrow or a booking button; right after closing it is the header's call
     button, which sits exactly where the X was. For a moment every click is
     swallowed, before anything else on the page (the conversion counter
     included) gets to see it; the spot of the X stays quiet for a second,
     for the visitor who presses it twice to be sure. */
  function quiet(ms, spot) {
    const now = performance.now();
    quietUntil = now + ms;
    quietSpot = spot ? { x: spot.left - 8, y: spot.top - 8, r: spot.right + 8, b: spot.bottom + 8, until: now + 1000 } : null;
  }
  window.addEventListener("click", (e) => {
    const now = performance.now();
    const s = quietSpot;
    const onSpot = s && now < s.until && e.clientX >= s.x && e.clientX <= s.r && e.clientY >= s.y && e.clientY <= s.b;
    if (now >= quietUntil && !onSpot) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }, true);

  const find = (slug) => grid.querySelector('.gal-item[data-slug="' + String(slug).replace(/["\\]/g, "") + '"]');

  // The grid photo is already in the cache: it stands in until the full one has arrived
  function loadedThumb(p) {
    const item = find(p.slug);
    const img = item && item.querySelector("img");
    return img && img.complete && img.naturalWidth ? img.currentSrc || img.src : "";
  }

  slides.forEach((slide) => {
    const img = slide.firstElementChild;
    img.addEventListener("load", () => {
      const slug = slide.dataset.slug;
      slide.classList.remove("is-loading");
      setTimeout(() => {
        if (slide.dataset.slug === slug) slide.style.backgroundImage = "";
      }, 300);
    });
    img.addEventListener("error", () => {
      slide.classList.remove("is-loading");
      // the small photo keeps standing in; the browser's broken image mark stays off it
      if (slide.style.backgroundImage) slide.classList.add("is-broken");
    });
  });

  function fill(slide, p) {
    const img = slide.firstElementChild;
    const slug = p ? p.slug : "";
    if (slide.dataset.slug === slug) return;
    slide.dataset.slug = slug;
    slide.classList.remove("is-broken");
    if (!p) {
      slide.classList.remove("is-loading");
      slide.style.backgroundImage = "";
      img.removeAttribute("src");
      img.alt = "";
      return;
    }
    const small = loadedThumb(p);
    slide.style.backgroundImage = small ? 'url("' + small + '")' : "";
    slide.classList.add("is-loading");
    img.alt = `${p.title} · ${p.label}`;
    img.src = p.asset;
    if (img.complete && img.naturalWidth) slide.classList.remove("is-loading");   // from the cache
  }

  function place() {
    order.forEach((slideIndex, pos) => {
      const slide = slides[slideIndex];
      slide.style.transform = pos === 1 ? "" : `translate3d(calc(${pos - 1} * ${STEP}), 0, 0)`;
      slide.setAttribute("aria-hidden", pos === 1 ? "false" : "true");
    });
  }

  function rest() {               // the track back in its place, without animating
    track.style.transition = "none";
    track.style.transform = "";
  }

  // The row of small photos: everything in the list, the same vehicle highlighted
  function buildStrip() {
    const keyOf = (p) => galleryVehicle(p) || p.slug;
    thumbsEl.innerHTML = list
      .map((p, i) => {
        const first = i > 0 && keyOf(p) !== keyOf(list[i - 1]);
        /* The file the grid already holds is used again, so opening a photo
           downloads no second copy of every picture. A photo the grid has
           not loaded yet gets its small picture only once it comes into
           view in the row (loadStrip). */
        const small = loadedThumb(p);
        const src = small ? `src="${galleryEscape(small)}"` : "data-wait";
        return `<button type="button" class="glb-thumb${first ? " is-first" : ""}" data-slug="${p.slug}" aria-label="${galleryEscape(p.title)} · ${galleryEscape(p.label)}"><img ${src} data-full="${p.asset}" width="400" height="500" alt="" decoding="async" draggable="false" /></button>`;
      })
      .join("");
  }

  function loadStrip() {
    const waiting = thumbsEl.querySelectorAll("img[data-wait]");
    if (!waiting.length) return;
    const row = thumbsEl.getBoundingClientRect();
    waiting.forEach((img) => {
      const box = img.getBoundingClientRect();
      if (!box.width || box.right < row.left - 120 || box.left > row.right + 120) return;
      img.removeAttribute("data-wait");
      const p = list.find((q) => q.slug === img.parentElement.dataset.slug);
      if (!p) return;
      const small = loadedThumb(p);
      const tile = find(p.slug);
      const from = tile && tile.querySelector("img");
      if (small) {
        img.src = small;
      } else if (from && from.getAttribute("srcset")) {
        // the same choice of file the grid will make for this photo
        img.sizes = from.getAttribute("sizes") || "";
        img.srcset = from.getAttribute("srcset");
        img.src = from.getAttribute("src");
      } else {
        img.src = galleryThumb(p, 400);
      }
    });
  }

  function markStrip(p) {
    const key = galleryVehicle(p);
    const same = key ? list.filter((q) => galleryVehicle(q) === key).length : 0;
    const title = same > 1 ? `Weitere Fotos · ${key}` : "Weitere Fotos";
    if (moreTitle.textContent !== title) moreTitle.textContent = title;
    Array.from(thumbsEl.children).forEach((thumb, i) => {
      thumb.classList.toggle("is-same", same > 1 && galleryVehicle(list[i]) === key);
      if (i !== index) {
        thumb.removeAttribute("aria-current");
        return;
      }
      thumb.setAttribute("aria-current", "true");
      // keep it in view inside its own row or box (the page itself does not move)
      const row = thumbsEl.getBoundingClientRect();
      const box = thumb.getBoundingClientRect();
      thumbsEl.scrollLeft += box.left + box.width / 2 - (row.left + row.width / 2);
      const holder = thumbsEl.parentElement;
      const frame = holder.getBoundingClientRect();
      if (box.top < frame.top) holder.scrollTop += box.top - frame.top - 8;
      else if (box.bottom > frame.bottom) holder.scrollTop += box.bottom - frame.bottom + 8;
    });
  }

  function show() {
    const n = list.length;
    const p = list[index];
    if (!p) return;
    fill(slides[order[1]], p);
    fill(slides[order[0]], n > 1 ? list[(index - 1 + n) % n] : null);
    fill(slides[order[2]], n > 1 ? list[(index + 1) % n] : null);
    place();
    countEl.textContent = `${index + 1} / ${n}`;
    labelEl.textContent = p.label || "";
    titleEl.textContent = p.title || "";
    descEl.textContent = p.description || "";
    btnPrev.disabled = btnNext.disabled = n < 2;
    markStrip(p);
    loadStrip();

    // The WhatsApp request says which photo it is about
    const business = window.SITE_CONFIG.business;
    const number = String(business.whatsappNumber || "").replace(/\D/g, "");
    if (waLink && number) {
      const text = `Hallo, ich habe in der Galerie das Foto „${p.title} · ${p.label}“ gesehen und möchte einen Termin bei ${business.name} anfragen.`;
      waLink.href = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
    }
  }

  function syncUrl() {
    const p = list[index];
    if (!p) return;
    try {
      history.replaceState(pushed ? { glb: p.slug } : history.state, "", "#" + p.slug);
    } catch (e) { /* no history here (opened as a file): the viewer works without it */ }
  }

  function clearHash() {
    try {
      if (location.hash) history.replaceState(null, "", location.pathname + location.search);
    } catch (e) { /* ok */ }
  }

  /* While a photo is open the browser must not put the page back where it
     was when Back is pressed: the viewer itself scrolls to the photo that
     was seen last. Switched back to the normal behaviour once it is closed. */
  function scrollMemory(mode) {
    try {
      if ("scrollRestoration" in history) history.scrollRestoration = mode;
    } catch (e) { /* ok */ }
  }

  /* The cookie question lies above the viewer, because it has to stay
     answerable. Where it covers the panel, the panel makes room for it
     (gallery.css, .has-cookie), so the caption and the booking buttons stay
     in view until the question has been answered. */
  const panel = lb.querySelector(".glb-panel");
  function cookieRoom() {
    const banner = document.getElementById("cookie-banner");
    let room = 0;
    if (isOpen && banner && panel && document.body.classList.contains("cookie-active")) {
      // it is centred at the bottom of the screen; measured without its slide in movement
      const left = (window.innerWidth - banner.offsetWidth) / 2;
      const top = window.innerHeight - (parseFloat(getComputedStyle(banner).bottom) || 0) - banner.offsetHeight;
      const box = panel.getBoundingClientRect();
      const book = lb.querySelector(".glb-book");
      const side = book ? book.getBoundingClientRect() : box;   // the width the panel's content really takes
      if (left < side.right && left + banner.offsetWidth > side.left && top < box.bottom) {
        room = Math.ceil(box.bottom - top);
      }
    }
    const had = lb.classList.contains("has-cookie");
    lb.classList.toggle("has-cookie", room > 0);
    if (room > 0) lb.style.setProperty("--glb-cookie", room + "px");
    else lb.style.removeProperty("--glb-cookie");
    if (had && !room && isOpen && list[index]) {   // the row of small photos is back
      markStrip(list[index]);
      loadStrip();
    }
  }
  if (window.MutationObserver) {
    new MutationObserver(() => {
      if (isOpen) cookieRoom();
    }).observe(document.body, { attributes: true, attributeFilter: ["class"] });
  }
  window.addEventListener("resize", () => {
    if (isOpen) cookieRoom();
  }, { passive: true });

  let slideRun = 0;               // counts slide animations, so one that was overtaken changes nothing

  function go(dir, animated) {
    if (!isOpen || list.length < 2) return;
    if (busy && endSlide) endSlide();   // the step still sliding lands at once: no press is lost
    if (busy) return;
    const run = ++slideRun;
    const finish = () => {
      if (run !== slideRun) return;
      busy = false;
      if (!isOpen) return;
      index = (index + dir + list.length) % list.length;
      order = dir > 0 ? [order[1], order[2], order[0]] : [order[2], order[0], order[1]];
      rest();
      show();
      syncUrl();
    };
    if (!animated || calm.matches) {
      finish();
      return;
    }
    busy = true;
    let done = false;
    const once = (e) => {
      if (done || (e && e.target !== track)) return;   // a photo fading in inside the track is not the end of the slide
      done = true;
      if (endSlide === once) endSlide = null;
      track.removeEventListener("transitionend", once);
      finish();
    };
    endSlide = once;
    track.addEventListener("transitionend", once);
    setTimeout(once, 360);        // transitionend can be skipped (tab in the background)
    void track.offsetWidth;       // start from rest, also right after a step that was cut short
    track.style.transition = "transform 0.26s cubic-bezier(0.22, 1, 0.36, 1)";
    track.style.transform = `translate3d(calc(${-dir} * ${STEP}), 0, 0)`;
  }

  function jump(to) {             // straight to a photo (the row of small photos)
    if (busy && endSlide) endSlide();
    if (!isOpen || busy || to === index || !list[to]) return;
    index = to;
    rest();
    show();
    syncUrl();
  }

  function open(slug, entry, from) {
    let shown = galleryShown();
    let i = shown.findIndex((p) => p.slug === slug);
    if (i < 0) {                  // not in the chosen category: show everything
      galleryApplyFilter("all", false);
      shown = galleryShown();
      i = shown.findIndex((p) => p.slug === slug);
      if (i < 0) return false;
    }
    list = shown;
    index = i;
    slideRun++;                   // a slide still running belongs to the list before
    endSlide = null;
    if (!isOpen) {
      isOpen = true;
      openedSlug = slug;
      openedY = window.scrollY;
      quiet(600);                 // the second tap of a double tap opens nothing else
      opener = from || (document.activeElement !== document.body ? document.activeElement : null);
      // the page behind does not scroll, and does not shift when its scrollbar goes
      root.style.setProperty("--glb-sbw", Math.max(0, window.innerWidth - root.clientWidth) + "px");
      root.classList.add("glb-open");
      if (shell) shell.inert = true;
      lb.style.removeProperty("--glb-dim");
      lb.classList.add("is-open");
      lb.setAttribute("aria-hidden", "false");
      document.addEventListener("keydown", onKey);
    }
    busy = false;
    rest();
    cookieRoom();
    buildStrip();
    show();
    if (entry === "push") {
      scrollMemory("manual");     // for the gallery entry and for the one added now
      try {
        history.pushState({ glb: slug }, "", "#" + slug);
        pushed = true;
      } catch (e) {
        pushed = false;
      }
    }
    btnClose.focus({ preventScroll: true });
    return true;
  }

  function shut() {
    if (!isOpen) return;
    isOpen = false;
    busy = false;
    drag = null;
    slideRun++;
    endSlide = null;
    quiet(500, btnClose.getBoundingClientRect());   // a second tap on the X must not reach the call button behind it
    const last = list[index];
    root.classList.remove("glb-open");
    root.style.removeProperty("--glb-sbw");
    if (shell) shell.inert = false;
    document.removeEventListener("keydown", onKey);

    // Back to the photo that was on screen last, so the visitor carries on from there
    grid.querySelectorAll(".gal-item.is-current").forEach((el) => el.classList.remove("is-current"));
    const item = last ? find(last.slug) : null;
    const tile = item && !item.hidden ? item.querySelector(".gal-tile") : null;
    if (tile) {
      /* The page only moves when it has to: never when the photo that was
         opened is closed again, and otherwise only when the photo seen last
         is out of sight (under the header and the chips, or below the screen). */
      const box = item.getBoundingClientRect();
      const same = last.slug === openedSlug && Math.abs(window.scrollY - openedY) < 2;
      if (!same && (box.bottom < 140 || box.top > window.innerHeight - 100)) {
        item.scrollIntoView({ block: "center", behavior: "instant" });
      }
      item.classList.add("is-current");
      setTimeout(() => item.classList.remove("is-current"), 2400);
      tile.focus({ preventScroll: true });
    } else if (opener && opener.focus) {
      opener.focus({ preventScroll: true });
    }
    opener = null;

    lb.classList.remove("is-open", "has-cookie");
    lb.setAttribute("aria-hidden", "true");
    lb.style.removeProperty("--glb-dim");
    lb.style.removeProperty("--glb-cookie");
    rest();
  }

  function close() {
    if (!isOpen) return;
    let own = false;
    try {
      own = pushed && !!(history.state && history.state.glb);
    } catch (e) { /* ok */ }
    pushed = false;
    shut();
    if (own) {
      try {
        history.back();           // drops our entry; the address is the plain gallery again
        return;
      } catch (e) { /* fall through */ }
    }
    clearHash();
  }

  // A photo named in the address: galerie.html#<slug>
  function fromHash() {
    let slug = "";
    try {
      slug = decodeURIComponent(location.hash.slice(1));
    } catch (e) { /* ok */ }
    if (!slug || !projects.some((p) => p.slug === slug)) return;
    let kept = false;
    try {
      kept = !!(history.state && history.state.glb);   // a reload with the photo open
      if (!kept) {
        // put the plain gallery underneath: Back then closes the photo and
        // the visitor stays in the gallery
        scrollMemory("manual");
        history.replaceState(null, "", location.pathname + location.search);
        history.pushState({ glb: slug }, "", "#" + slug);
        kept = true;
      }
    } catch (e) { /* no history: open it anyway */ }
    pushed = kept;
    if (!open(slug, "keep")) return;
    /* On a page that is still loading the browser takes the focus back to
       the page when it handles the #photo in the address. The close button
       gets it again, so the keyboard and a screen reader are in the viewer. */
    const refocus = () => {
      if (isOpen && !lb.contains(document.activeElement)) btnClose.focus({ preventScroll: true });
    };
    requestAnimationFrame(refocus);
    setTimeout(refocus, 250);
    if (document.readyState !== "complete") {
      window.addEventListener("load", () => setTimeout(refocus, 0), { once: true });
    }
  }

  window.addEventListener("popstate", (e) => {
    const slug = e.state && e.state.glb;
    if (slug) {                   // Forward, onto a photo again
      pushed = true;
      open(slug, "keep");
    } else if (isOpen) {          // Back: close and stay on the page
      pushed = false;
      shut();
    } else {
      fromHash();                 // a link to a photo was followed on the page itself
    }
    // Normal scroll memory again, but only after the browser has finished
    // this step: it decides about scrolling right after this event
    setTimeout(() => {
      if (!isOpen) scrollMemory("auto");
    }, 400);
  });

  function focusable() {
    return Array.from(lb.querySelectorAll("a[href], button:not([disabled])")).filter(
      (el) => el.getClientRects().length > 0
    );
  }

  function onKey(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      if (e.repeat && busy) return;   // a key held down moves at the pace of the slide
      go(e.key === "ArrowRight" ? 1 : -1, true);
    } else if (e.key === "Tab") {
      // the cookie question may be open above the viewer: it keeps its own focus
      const banner = document.getElementById("cookie-banner");
      const active = document.activeElement;
      if (banner && banner.contains(active)) return;
      const items = focusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (!lb.contains(active)) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  // Open: a tap or click on a photo (a click with Ctrl or Shift still opens the file in a new tab)
  grid.addEventListener("click", (e) => {
    const tile = e.target.closest(".gal-tile");
    if (!tile || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button > 0) return;
    const item = tile.closest(".gal-item");
    if (!item) return;
    e.preventDefault();
    open(item.dataset.slug, "push", tile);
  });

  btnPrev.addEventListener("click", () => go(-1, true));
  btnNext.addEventListener("click", () => go(1, true));
  btnClose.addEventListener("click", close);

  thumbsEl.addEventListener("click", (e) => {
    const thumb = e.target.closest(".glb-thumb");
    if (thumb) jump(list.findIndex((p) => p.slug === thumb.dataset.slug));
  });
  galleryImageFallback(thumbsEl);
  // Where the small photos are one sideways row: pictures load as they come
  // into view, and the mouse wheel moves the row
  let stripQueued = false;
  thumbsEl.addEventListener("scroll", () => {
    if (stripQueued) return;
    stripQueued = true;
    requestAnimationFrame(() => {
      stripQueued = false;
      loadStrip();
    });
  }, { passive: true });
  thumbsEl.addEventListener("wheel", (e) => {
    if (thumbsEl.scrollWidth <= thumbsEl.clientWidth + 1 || Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    e.preventDefault();
    thumbsEl.scrollLeft += e.deltaY;
  }, { passive: false });

  /* Swipe with the finger (or drag with the mouse). Sideways: previous and
     next. Downwards: close. */
  stage.addEventListener("pointerdown", (e) => {
    swallowClick = false;
    if (!isOpen || busy || (e.pointerType === "mouse" && e.button !== 0)) return;
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY, dx: 0, dy: 0, axis: "", at: e.timeStamp };
  });

  stage.addEventListener("pointermove", (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    drag.dx = e.clientX - drag.x;
    drag.dy = e.clientY - drag.y;
    if (!drag.axis) {
      if (Math.abs(drag.dx) < 8 && Math.abs(drag.dy) < 8) return;
      drag.axis = Math.abs(drag.dx) >= Math.abs(drag.dy) ? "x" : "y";
      try { stage.setPointerCapture(e.pointerId); } catch (err) { /* ok */ }
      track.style.transition = "none";
    }
    if (drag.axis === "x") {
      const dx = list.length > 1 ? drag.dx : drag.dx * 0.25;   // nothing to swipe to: resist
      track.style.transform = `translate3d(${dx}px, 0, 0)`;
    } else {
      const dy = Math.max(0, drag.dy);
      track.style.transform = `translate3d(0, ${dy}px, 0) scale(${Math.max(0.88, 1 - dy / 1400)})`;
      lb.style.setProperty("--glb-dim", String(Math.max(0.45, 1 - dy / 480)));
    }
  });

  const endDrag = (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const d = drag;
    drag = null;
    if (!d.axis) return;          // a tap, not a swipe: the click handler decides
    swallowClick = true;
    const ms = Math.max(1, e.timeStamp - d.at);
    const settle = () => {
      track.style.transition = calm.matches ? "none" : "transform 0.22s cubic-bezier(0.22, 1, 0.36, 1)";
      track.style.transform = "";
      lb.style.removeProperty("--glb-dim");
    };
    if (e.type === "pointercancel") {
      settle();
    } else if (d.axis === "x") {
      const far = Math.abs(d.dx) > Math.min(120, stage.clientWidth * 0.22);
      const quick = Math.abs(d.dx) > 28 && Math.abs(d.dx) / ms > 0.45;
      if ((far || quick) && list.length > 1) go(d.dx < 0 ? 1 : -1, true);
      else settle();
    } else if (d.dy > 110 || (d.dy > 40 && d.dy / ms > 0.6)) {
      close();
    } else {
      settle();
    }
  };
  stage.addEventListener("pointerup", endDrag);
  stage.addEventListener("pointercancel", endDrag);

  // A tap beside the photo closes; a tap on the photo does nothing
  stage.addEventListener("click", (e) => {
    if (swallowClick) {
      swallowClick = false;
      return;
    }
    const img = slides[order[1]].firstElementChild;
    const box = img.getBoundingClientRect();
    let w = box.width;
    let h = box.height;
    if (img.naturalWidth && img.naturalHeight) {   // the area the photo really covers inside its box
      const scale = Math.min(box.width / img.naturalWidth, box.height / img.naturalHeight);
      w = img.naturalWidth * scale;
      h = img.naturalHeight * scale;
    }
    const left = box.left + (box.width - w) / 2;
    const top = box.top + (box.height - h) / 2;
    const onPhoto = e.clientX >= left && e.clientX <= left + w && e.clientY >= top && e.clientY <= top + h;
    if (!onPhoto) close();
  });

  fromHash();
}

/* Startup in two waves. Wave one is everything a visitor can touch in the
   first moment: the call and WhatsApp buttons, the header, the floating bar
   and the reveal. Wave two is everything below the fold, moved off the
   critical path with requestIdleCallback so a tap right after load is not
   waiting behind gallery, reviews and lightbox work. */
document.addEventListener("DOMContentLoaded", () => {
  showDevBanner();
  setupStaticText();
  setupActionLinks();      // makes the call and WhatsApp buttons work
  setupMobileCta();
  setupMobileMenu();
  setupScrollHeader();
  setupCtaBarAutoHide();
  setupReveal();
  renderPackages();        // only hydrates: the markup is already in the HTML
  setupServiceCards();     // one press on a service card opens its packages
  revealScan();            // in case the hydration added anything
  startGallery();          // gallery page only: its photos are on the first screen

  const later = () => {
    // Everything below the fold is built here. One failing section must
    // not take the rest of the page down with it, so each step is isolated.
    const run = (fn) => {
      try {
        fn();
      } catch (err) {
        console.error("[cornel] " + fn.name + " failed:", err);
      }
    };

    run(renderFeaturedProjects);
    run(renderShowcaseStrip);
    run(renderReviews);
    run(setupMapFacade);
    run(setupPackageDetails);
    run(setupShowcaseSwipe);
    run(setupReviewsCarousel);
    run(setupHeaderSheen);
    run(setupActiveNav);
    run(setupNavPill);
    run(setupVideoShowcase);
    run(setupHeroFilm);
    run(setupReviewCount);
    // the cards above were built after setupReveal() observed the page
    run(revealScan);
  };
  if (window.requestIdleCallback) requestIdleCallback(later, { timeout: 1200 });
  else setTimeout(later, 1);
});

