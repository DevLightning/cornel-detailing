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

document.addEventListener("DOMContentLoaded", () => {
  fillLegalPage();

  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("topnav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-active", open);
      toggle.setAttribute("aria-expanded", open);
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-active");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});
