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
    category: "Exterieur",
  },
  {
    slug: "porsche-cockpit",
    title: "Porsche 911 Cockpit",
    label: "Innenraum Detail",
    description: "Leder, Kontraste und feine Oberflächen professionell aufbereitet.",
    asset: "assets/gallery/porsche-cockpit.jpg",
    layout: "tall",
    featured: true,
    category: "Innenraum",
  },
  {
    slug: "porsche-heck",
    title: "Porsche 911 Heck",
    label: "Exterieur Abschluss",
    description: "Finish für den finalen Eindruck mit gleichmäßigem Glanz.",
    asset: "assets/gallery/porsche-heck.jpg",
    layout: "tall",
    featured: true,
    category: "Exterieur",
  },
  {
    slug: "ford-transit-exterieur",
    title: "Ford Transit Custom",
    label: "Flächenfinish",
    description: "Gerade Flächen und Spiegelungen sauber herausgearbeitet.",
    asset: "assets/gallery/ford-transit-exterieur.jpg",
    layout: "tall",
    category: "Exterieur",
  },
  {
    slug: "ford-transit-cockpit",
    title: "Ford Transit Cockpit",
    label: "Cockpit Aufbereitung",
    description: "Strukturierte Flächen und ein sauberer Fahrerbereich.",
    asset: "assets/gallery/ford-transit-cockpit.jpg",
    layout: "square",
    category: "Innenraum",
  },
  {
    slug: "ford-transit-dashboard",
    title: "Ford Transit Dashboard",
    label: "Detail Reinigung",
    description: "Klare Displays und gepflegte Oberflächen bis ins Detail.",
    asset: "assets/gallery/ford-transit-dashboard.jpg",
    layout: "square",
    category: "Innenraum",
  },
  {
    slug: "citroen-reflexion",
    title: "Citroën C4 Picasso",
    label: "Reflexionskontrolle",
    description: "Reflexionslinien zeigen die Qualität von Politur und Lackfinish.",
    asset: "assets/gallery/citroen-reflexion.jpg",
    layout: "wide",
    category: "Exterieur",
  },
  {
    slug: "aston-martin-motorraum",
    title: "Aston Martin Vantage",
    label: "Motorraum Detail",
    description: "Saubere technische Flächen für ein komplettes Premium-Bild.",
    asset: "assets/gallery/aston-martin-motorraum.jpg",
    layout: "full",
    category: "Detail",
  },
  {
    slug: "ford-transit-reflexion-front",
    title: "Ford Transit Custom",
    label: "Reflexionskontrolle",
    description: "Hexagonale Lichtreflexionen zeigen die Qualität der Lackoberfläche nach der Aufbereitung.",
    asset: "assets/gallery/ford-transit-reflexion-front.jpg",
    layout: "tall",
    category: "Exterieur",
  },
  {
    slug: "mercedes-vito-exterieur",
    title: "Mercedes-Benz V-Klasse",
    label: "Exterieur Finish",
    description: "Tiefschwarzer Lack, poliert und versiegelt · ein Minivan auf Premium-Niveau.",
    asset: "assets/gallery/mercedes-vito-exterieur.jpg",
    layout: "wide",
    category: "Exterieur",
  },
  {
    slug: "aston-martin-rot-exterieur",
    title: "Aston Martin Vantage",
    label: "Exterieur Rot",
    description: "Kräftiges Rot, tiefe Reflexionen und ein perfektes Gesamtbild nach der Vollaufbereitung.",
    asset: "assets/gallery/aston-martin-rot-exterieur.jpg",
    layout: "square",
    category: "Exterieur",
  },
  {
    slug: "lack-reflexion-nahaufnahme",
    title: "Lackanalyse",
    label: "Reflexion Nahaufnahme",
    description: "Hexagonale Lichtmuster machen kleinste Unregelmäßigkeiten im Lack sichtbar.",
    asset: "assets/gallery/lack-reflexion-nahaufnahme.jpg",
    layout: "square",
    category: "Detail",
  },
  {
    slug: "aston-martin-motorraum-detail",
    title: "Aston Martin Vantage",
    label: "Motor Aufbereitung",
    description: "Jedes Detail zählt · aufbereiteter Motorraum für ein lückenloses Premium-Ergebnis.",
    asset: "assets/gallery/aston-martin-motorraum-detail.jpg",
    layout: "square",
    category: "Detail",
  },
  {
    slug: "audi-rs3-exterieur-heck",
    title: "Audi RS3 Sportback",
    label: "Exterieur Finish",
    description: "Tiefschwarzer Lack, poliert und versiegelt · sportliche Präzision auf einem anderen Level.",
    asset: "assets/gallery/Screenshot_1.png",
    layout: "full",
    category: "Exterieur",
  },
  {
    slug: "bmw-m3-yellow-side",
    title: "BMW M3 Competition",
    label: "Keramikversiegelung",
    description: "Sao-Paulo-Gelb, tiefer Glanz und keramisch versiegelt · jedes Detail unter Hexagon-Licht inszeniert.",
    asset: "assets/gallery/bmw1.jpeg",
    layout: "tall",
    featured: true,
    category: "Exterieur",
  },
  {
    slug: "bmw-m3-yellow-front",
    title: "BMW M3 Competition",
    label: "Front Detail",
    description: "Kräftiges Gelb mit Spiegelreflexionen · Lack wie am ersten Tag, optimal vorbereitet auf den Keramikschutz.",
    asset: "assets/gallery/bmw2.jpeg",
    layout: "tall",
    featured: true,
    category: "Exterieur",
  },
  {
    slug: "bmw-m3-carbon-roof",
    title: "BMW M3 Competition",
    label: "Carbondach Detail",
    description: "Hexagon-Reflexionen auf Carbon und Heckflügel · Beweis für eine perfekt versiegelte Oberfläche.",
    asset: "assets/gallery/bmw3.jpeg",
    layout: "tall",
    category: "Detail",
  },
  {
    slug: "bmw-m3-carbon-mirror",
    title: "BMW M3 Competition",
    label: "Carbon Spiegel",
    description: "Carbongewebe und Lack treffen sich · beides hochglänzend versiegelt für langen Schutz.",
    asset: "assets/gallery/bmw4.jpeg",
    layout: "square",
    category: "Detail",
  },
  {
    slug: "bmw-m3-yellow-wheel",
    title: "BMW M3 Competition",
    label: "Felgen & Bremse",
    description: "Schmiederäder, blaue Bremssättel und Lack im Hexagon-Spiegelbild · Detailing auf Showroom-Niveau.",
    asset: "assets/gallery/bmw5.jpeg",
    layout: "wide",
    category: "Exterieur",
  },
];

const reviews = [
  {
    name: "Liviu Cazacu",
    photo: "https://lh3.googleusercontent.com/a/ACg8ocLtbJRqEfbh6kS7BiQTWo-drT0dUkBAlUVy_SE1NrAF2DWZFA=w96-h96-p-rp-mo-br100",
    rating: 5,
    text: "corneldetailing arbeitet sehr sauber und leistet wirklich hervorragende Arbeit mit großer Liebe zum Detail. Ich kann ihn wärmstens empfehlen und komme definitiv wieder! 🎉",
    date: "vor 5 Tagen",
  },
  {
    name: "daf ktm",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjX3YfHQBdYpNrNBfux_QISZmF8qyVTXfmRepKicSumiJxUPtCM=w96-h96-p-rp-mo-br100",
    rating: 5,
    text: "Tolle Arbeit!",
    date: "vor 1 Woche",
  },
  {
    name: "Anula Dev",
    photo: "https://lh3.googleusercontent.com/a/ACg8ocJbUibow_E72CizO_dQ-0fDTv6e6nV1tTOirdHunNGgVXMPUA=w96-h96-p-rp-mo-br100",
    rating: 5,
    text: "Super Aufbereitung!",
    date: "vor 1 Woche",
  },
  {
    name: "Marius Silviu Anghelache",
    photo: "https://lh3.googleusercontent.com/a/ACg8ocL9jyeE70SCd0BV3ZArDGU8OddSioYkrvowzvv9QlTsQzohyw=w96-h96-p-rp-mo-br100",
    rating: 5,
    text: "Das Beste!",
    date: "vor 2 Wochen",
  },
  {
    name: "Alina Maldea",
    photo: "https://lh3.googleusercontent.com/a/ACg8ocKnpyTwB-hjD_60J3doBehE5a2Lj75SnIMhUOAg1nPdQ2V1Vw=w96-h96-p-rp-mo-br100",
    rating: 5,
    text: "Mein Auto ist wieder frisch, riecht toll und sieht aus wie neu. Cornel Detailing ist erstklassig.",
    date: "vor 5 Tagen",
  },
  {
    name: "Claudia Strommer",
    photo: "https://lh3.googleusercontent.com/a/ACg8ocJec7E1PmMFWf08o6n6Y44_bWJWKlOqLhoVakAXaaWji7R6dA=w96-h96-p-rp-mo-br100",
    rating: 5,
    text: "Mein Auto sieht nach jahrelangem Gebrauch wieder wie neu aus! Alles ist absolut perfekt! Vielen Dank!",
    date: "vor 6 Tagen",
  },
  {
    name: "Alex Iancu",
    photo: "https://lh3.googleusercontent.com/a/ACg8ocJmJzaHaAGUrJquC8zK1O2Ud-VM_W6sWr26sxLbcB_JSC6yHw=w96-h96-p-rp-mo-br100",
    rating: 5,
    text: "Er hat mein Auto sehr professionell aufbereitet. Der Beste.",
    date: "vor 6 Tagen",
  },
  {
    name: "Legacy P",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjVXlHyXnWGRlgfgiY2vv9NmI4AzmyHE-ja_q2omZuIQLiuHK8aS=w96-h96-p-rp-mo-br100",
    rating: 5,
    text: "Beste Autoaufbereitung!",
    date: "vor 1 Woche",
  },
  {
    name: "Teodor Codrin Murariu",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjX0Jzug8VTe3SG3IkG1EPX0g7Ig5WPVMnGRmFWglTEl4YlZnww=w96-h96-p-rp-mo-br100",
    rating: 5,
    text: "Danke für die Autowäsche. Ein echter Profi.",
    date: "vor 1 Woche",
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

function getSelectedVehicle() {
  try {
    const v = localStorage.getItem("cornel_vehicle");
    if (v === "suv" || v === "van") return v;
  } catch (e) { /* storage blocked — default */ }
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
    <a class="ss-card ss-card--all reveal" href="#autoaufbereitung-pakete" style="--i:${selected.length}" aria-label="Pakete und Preise ansehen">
      <div class="ss-card-all-inner">
        <span class="ss-card-all-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </span>
        <span class="ss-card-all-label">Pakete &amp; Preise</span>
        <span class="ss-card-all-count">${packages.length} Pakete ab € 49,-</span>
      </div>
    </a>
  `;

  target.innerHTML = cardsHtml + allCardHtml;
}

function renderGallery() {
  const target = document.getElementById("galleryGrid");
  if (!target) return;

  target.innerHTML = projects
    .map(
      (project, i) => `
        <article
          class="gallery-tile gallery-tile--${project.layout} reveal"
          style="--i:${i}"
          data-category="${project.category || ""}"
        >
          ${projectMarkup(project)}
        </article>
      `
    )
    .join("");
}

function renderPackages() {
  const grid = document.getElementById("packagesGrid");
  if (!grid) return;

  const categoryIcons = {
    "Außen": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h1l2-5h12l2 5h1"/><path d="M5 12v5a1 1 0 001 1h1a1 1 0 001-1v-1h8v1a1 1 0 001 1h1a1 1 0 001-1v-5"/><circle cx="7.5" cy="14.5" r="1.5"/><circle cx="16.5" cy="14.5" r="1.5"/></svg>',
    "Innen": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9v6M17 9v6M7 12h10"/></svg>',
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
      const checkSvg = `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>`;
      const items = pkg.items.map((item) => `<li><span class="pkg-check" aria-hidden="true">${checkSvg}</span>${item}</li>`).join("");
      const note = pkg.note ? `<p class="package-note">${pkg.note}</p>` : "";
      // Package-specific WhatsApp prefill — carries package + vehicle + price
      const waHref = getWhatsAppLinkForPackage(pkg, veh);
      const price = pkg.prices[veh];
      const priceTextClass = price.length > 9 ? " is-text" : "";

      return `
        <article class="pkg-row">
          <details class="pkg-details">
            <summary class="pkg-row-summary">
              <span class="pkg-row-icon" aria-hidden="true">${icon}</span>
              <div class="pkg-row-info">
                <span class="pkg-row-num">Paket ${pkg.number}</span>
                <h3>${pkg.title}</h3>
                <p class="pkg-row-teaser">${pkg.teaser}</p>
              </div>
              <div class="pkg-price-single" data-pkw="${pkg.prices.pkw}" data-suv="${pkg.prices.suv}" data-van="${pkg.prices.van}" aria-label="Preis">
                <strong class="${priceTextClass.trim()}">${price}</strong>
                <span class="pkg-price-for">für ${VEHICLE_LABELS[veh]}</span>
              </div>
              <span class="pkg-toggle" aria-hidden="true"><span class="pkg-toggle-text">Leistungen</span>${icons.chevron}</span>
            </summary>
            <div class="pkg-items">
              <ul>${items}</ul>
              ${note}
              <div class="package-content-actions">
                <a class="button button-secondary button-small" data-call-link href="#kontakt">${icons.phone}<span>Anrufen</span></a>
                ${waHref
                  ? `<a class="button button-primary button-small cta-pulse" data-pkg-wa="${pkg.number}" href="${waHref}" target="_blank" rel="noreferrer">${icons.whatsapp}<span>Dieses Paket anfragen</span></a>`
                  : `<a class="button button-primary button-small cta-pulse" data-whatsapp-link href="#kontakt">${icons.whatsapp}<span>WhatsApp</span></a>`}
              </div>
            </div>
          </details>
        </article>
      `;
    }).join("");

    return `
      <div class="pkg-group ${groupClass}">
        <div class="pkg-group-header">
          <span class="pkg-group-icon">${icon}</span>
          <span class="pkg-group-name">${cat}</span>
        </div>
        ${rowsHtml}
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

  grid.innerHTML = `${selectorHtml}<div class="pkg-table">${groupsHtml}</div>`;
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
    try { localStorage.setItem("cornel_vehicle", v); } catch (err) { /* ok */ }
    applyVehicleSelection(v);
  });
}

/* ──────────────────────────────────────────────────────────────────────────
   Google Ads conversion tracking — 2 actions, both under AW-17936964522
   ──────────────────────────────────────────────────────────────────────────
   1) Call           label: -_FGCIXd37UcEKq3geIC   (value €1)
   2) WhatsApp Click label: fOZQCIjd37UcEKq3gelC   (value €1)

   The helper functions match the Google-provided snippet exactly so they
   can be used inline:
     <a onclick="return gtag_report_conversion('tel:+...')">…</a>
     <a onclick="return gtag_report_conversion_whatsapp('https://wa.me/…')">…</a>

   They're also wired up via a single delegated click listener so any
   anchor with a tel: / wa.me / api.whatsapp.com / whatsapp: href is
   auto-tracked — no per-button tagging needed.
   ────────────────────────────────────────────────────────────────────────── */
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof url !== "undefined") { window.location = url; }
  };
  if (typeof gtag === "function") {
    gtag("event", "conversion", {
      send_to: "AW-17936964522/-_FGCIXd37UcEKq3geIC",
      value: 1.0,
      currency: "EUR",
      event_callback: callback,
    });
  } else {
    callback();
  }
  return false;
}

function gtag_report_conversion_whatsapp(url) {
  var callback = function () {
    if (typeof url !== "undefined") { window.location = url; }
  };
  if (typeof gtag === "function") {
    gtag("event", "conversion", {
      send_to: "AW-17936964522/fOZQCIjd37UcEKq3gelC",
      value: 1.0,
      currency: "EUR",
      event_callback: callback,
    });
  } else {
    callback();
  }
  return false;
}

(function setupConversionDelegation() {
  if (window.__convDelegated) return;
  window.__convDelegated = true;

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

  function onDocumentClick(e) {
    // Let the browser handle modifier-click / middle-click (new tab/window)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (e.button !== undefined && e.button !== 0) return;

    var link = e.target && e.target.closest && e.target.closest("a[href]");
    if (!link) return;

    var rawHref = link.getAttribute("href") || link.href;
    var url = link.href;

    if (isWhatsAppHref(rawHref)) {
      e.preventDefault();
      gtag_report_conversion_whatsapp(url);
    } else if (isCallHref(rawHref)) {
      e.preventDefault();
      gtag_report_conversion(url);
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
    document.querySelectorAll(".hero-actions, .mid-cta, .ceramic-actions, .glass-actions")
  );
  if (!targets.length) return;

  let pending = false;
  function check() {
    pending = false;
    const vh = window.innerHeight;
    const hide = targets.some((t) => {
      const r = t.getBoundingClientRect();
      if (r.height === 0) return false;
      const overlap = Math.min(r.bottom, vh) - Math.max(r.top, 0);
      return overlap > r.height * 0.3;
    });
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

function setupPackageDetails() {
  const details = Array.from(document.querySelectorAll(".pkg-details"));
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

// Schema.org structured data is defined inline in <head> for optimal SEO crawlability.

function renderReviews() {
  const track = document.getElementById("reviewsTrack");
  if (!track) return;

  const stars = (n) =>
    Array.from({ length: 5 }, (_, i) =>
      `<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" style="fill:${i < n ? "#FBBC04" : "#e0e0e0"}"><path d="M12 2l3 6 6 .9-4.4 4.2 1 6L12 16.7 6.4 19l1-6L3 8.9 9 8l3-6z"/></svg>`
    ).join("");

  const cardHtml = (r) => `
    <div class="review-card">
      <div class="review-card-top">
        <img class="review-avatar" src="${r.photo}" alt="${r.name}" loading="lazy">
        <div class="review-meta">
          <strong>${r.name}</strong>
          <span class="review-date">${r.date}</span>
        </div>
        <svg class="review-google-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>
      <div class="review-stars">${stars(r.rating)}</div>
      <p class="review-text">${r.text}</p>
    </div>
  `;

  // Static swipeable cards — substantial reviews first so the opening
  // cards carry real content instead of one-liners.
  const ordered = [...reviews].sort((a, b) => b.text.length - a.text.length);
  track.innerHTML = ordered.map(cardHtml).join("");
}

function renderGalleryFilters() {
  const container = document.getElementById("galleryFilters");
  if (!container) return;

  // Build ordered category counts (preserving first-seen order)
  const cats = {};
  projects.forEach((p) => {
    if (p.category) cats[p.category] = (cats[p.category] || 0) + 1;
  });

  const allBtn = `<button class="gallery-filter-btn is-active" data-filter="all">Alle <span class="filter-count">${projects.length}</span></button>`;
  const catBtns = Object.entries(cats)
    .map(([cat, count]) => `<button class="gallery-filter-btn" data-filter="${cat}">${cat} <span class="filter-count">${count}</span></button>`)
    .join("");

  container.innerHTML = allBtn + catBtns;
}

function setupGalleryFilter() {
  const container = document.getElementById("galleryFilters");
  const grid = document.getElementById("galleryGrid");
  if (!container || !grid) return;

  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".gallery-filter-btn");
    if (!btn) return;

    // Update active button
    container.querySelectorAll(".gallery-filter-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    const filter = btn.dataset.filter;

    // Fade out
    grid.style.opacity = "0";
    grid.style.transform = "translateY(6px)";

    setTimeout(() => {
      const list = filter === "all" ? projects : projects.filter((p) => p.category === filter);

      grid.innerHTML = list
        .map(
          (project, i) => `
          <article
            class="gallery-tile gallery-tile--${project.layout} reveal is-visible"
            style="--i:${i}"
            data-category="${project.category || ""}"
          >
            ${projectMarkup(project)}
          </article>
        `
        )
        .join("");

      // Fade back in on next two frames to ensure DOM painted
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          grid.style.opacity = "1";
          grid.style.transform = "translateY(0)";
        });
      });
    }, 220);
  });
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
}

function setupNavPill() {
  var pill = document.getElementById('navPill');
  var nav  = document.getElementById('topnav');
  if (!pill || !nav) return;

  function move(link) {
    if (!link || window.innerWidth <= 860) {
      pill.classList.remove('is-visible');
      return;
    }
    var navRect  = nav.getBoundingClientRect();
    var linkRect = link.getBoundingClientRect();
    pill.style.left  = (linkRect.left - navRect.left) + 'px';
    pill.style.width = linkRect.width + 'px';
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

function setupReviewCount() {
  document.querySelectorAll("#heroReviewCount, #reviewStatCount").forEach((el) => {
    el.textContent = "30+";
  });
}

/* ════════════════════════════════════════════════════════════════════════════
   GALLERY LIGHTBOX — full-size image viewer
   ════════════════════════════════════════════════════════════════════════════ */

function setupGalleryStats() {
  const aufnahmen = document.getElementById("statAufnahmen");
  const fahrzeuge = document.getElementById("statFahrzeuge");
  const kategorien = document.getElementById("statKategorien");
  if (!aufnahmen) return; // not on gallery page

  // Count distinct vehicles (by title) and categories
  const vehicleSet = new Set(projects.map((p) => p.title));
  const catSet = new Set(projects.map((p) => p.category).filter(Boolean));

  aufnahmen.textContent = projects.length;
  fahrzeuge.textContent = vehicleSet.size;
  kategorien.textContent = catSet.size;
}

function setupLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;

  const lbImg     = document.getElementById("lbImg");
  const lbLabel   = document.getElementById("lbLabel");
  const lbTitle   = document.getElementById("lbTitle");
  const lbDesc    = document.getElementById("lbDesc");
  const lbCounter = document.getElementById("lbCounter");
  const lbLoader  = document.getElementById("lbLoader");
  const lbPrev    = document.getElementById("lbPrev");
  const lbNext    = document.getElementById("lbNext");
  const grid      = document.getElementById("galleryGrid");
  if (!grid) return;

  // Filtered list — what's currently shown in the grid (matches active filter)
  let currentList = projects.slice();
  let currentIndex = 0;
  let touchStartX = 0;
  let touchStartY = 0;

  function getActiveList() {
    const filterBtn = document.querySelector(".gallery-filter-btn.is-active");
    const filter = filterBtn ? filterBtn.dataset.filter : "all";
    return filter === "all"
      ? projects.slice()
      : projects.filter((p) => p.category === filter);
  }

  function open(index) {
    currentList = getActiveList();
    if (index < 0 || index >= currentList.length) return;
    currentIndex = index;
    render();
    lb.setAttribute("aria-hidden", "false");
    lb.classList.add("is-open");
    document.body.classList.add("lb-locked");
    document.addEventListener("keydown", onKey);
    // Update URL hash (deep link)
    const slug = currentList[currentIndex].slug;
    if (slug) history.replaceState(null, "", "#" + slug);
  }

  function close() {
    lb.setAttribute("aria-hidden", "true");
    lb.classList.remove("is-open");
    document.body.classList.remove("lb-locked");
    document.removeEventListener("keydown", onKey);
    // Clear hash
    if (location.hash) history.replaceState(null, "", location.pathname);
  }

  function next() {
    if (currentList.length < 2) return;
    currentIndex = (currentIndex + 1) % currentList.length;
    render();
  }

  function prev() {
    if (currentList.length < 2) return;
    currentIndex = (currentIndex - 1 + currentList.length) % currentList.length;
    render();
  }

  function render() {
    const p = currentList[currentIndex];
    if (!p) return;
    lbLoader.classList.add("is-loading");
    lbImg.style.opacity = "0";
    const img = new Image();
    img.onload = () => {
      lbImg.src = p.asset;
      lbImg.alt = p.title + " · " + p.label;
      lbImg.style.opacity = "1";
      lbLoader.classList.remove("is-loading");
    };
    img.onerror = () => {
      lbLoader.classList.remove("is-loading");
    };
    img.src = p.asset;
    lbLabel.textContent = p.label || "";
    lbTitle.textContent = p.title || "";
    lbDesc.textContent = p.description || "";
    lbCounter.textContent = `${currentIndex + 1} / ${currentList.length}`;
    // Update hash
    if (p.slug) history.replaceState(null, "", "#" + p.slug);
  }

  function onKey(e) {
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
  }

  // Click any gallery tile to open
  grid.addEventListener("click", (e) => {
    const tile = e.target.closest(".gallery-tile");
    if (!tile) return;
    e.preventDefault();
    const list = getActiveList();
    // Find by matching the image src to the project asset
    const img = tile.querySelector("img");
    if (!img) return;
    const src = img.getAttribute("src");
    const idx = list.findIndex((p) => p.asset === src);
    if (idx >= 0) open(idx);
  });

  // Close handlers
  lb.querySelectorAll("[data-lb-close]").forEach((el) => {
    el.addEventListener("click", close);
  });
  lbNext.addEventListener("click", next);
  lbPrev.addEventListener("click", prev);

  // Swipe support
  lb.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  lb.addEventListener("touchend", (e) => {
    if (e.changedTouches.length !== 1) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    // Only trigger if horizontal swipe is dominant and >50px
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      if (dx < 0) next(); else prev();
    }
  }, { passive: true });

  // Open from URL hash on load
  if (location.hash) {
    const slug = location.hash.replace("#", "");
    const list = getActiveList();
    const idx = list.findIndex((p) => p.slug === slug);
    if (idx >= 0) {
      // Wait one frame for grid to render
      requestAnimationFrame(() => requestAnimationFrame(() => open(idx)));
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showDevBanner();
  renderFeaturedProjects();
  renderShowcaseStrip();
  renderGallery();
  renderPackages();
  renderReviews();
  renderGalleryFilters();
  setupGalleryStats();
  setupStaticText();
  setupActionLinks();
  setupMobileCta();
  setupCtaBarAutoHide();
  setupPackageDetails();
  setupReveal();
  setupMobileMenu();
  setupScrollHeader();
  setupActiveNav();
  setupNavPill();
  setupGalleryFilter();
  setupLightbox();
  setupVideoShowcase();
  setupReviewCount();
});
