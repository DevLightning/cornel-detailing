/* consent.js — Google Consent Mode v2 banner + localStorage persistence
   Cornel Detailing | GDPR / TKG 2021 compliant
   ─────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var KEY = 'cornel_consent';

  /* ── Restore consent for returning visitors immediately ─────────────── */
  /* (Also done inline in <head> for speed — this is a safety net)         */
  if (localStorage.getItem(KEY) === 'accepted') {
    applyGrant();
    return; /* No banner needed */
  }
  if (localStorage.getItem(KEY) === 'declined') {
    return; /* Already declined — no banner */
  }

  /* ── New visitor → build and show the banner ─────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildBanner);
  } else {
    buildBanner();
  }

  /* ── Helpers ─────────────────────────────────────────────────────────── */
  function applyGrant() {
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        ad_storage:         'granted',
        ad_user_data:       'granted',
        ad_personalization: 'granted',
        analytics_storage:  'granted'
      });
    }
  }

  function hideBanner(el) {
    el.classList.remove('cb-visible');
    el.classList.add('cb-hiding');
    setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 420);
  }

  function buildBanner() {
    var el = document.createElement('div');
    el.id = 'cookie-banner';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'false');
    el.setAttribute('aria-label', 'Cookie-Einstellungen');
    el.innerHTML =
      '<div class="cb-inner">' +
        '<div class="cb-icon" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
            '<path d="M12 2l7 4v5c0 4.4-3 8.5-7 10C8 19.5 5 15.4 5 11V6l7-4z"/>' +
            '<path d="M9 12l2 2 4-4"/>' +
          '</svg>' +
        '</div>' +
        '<div class="cb-text">' +
          '<strong>Cookies &amp; Datenschutz</strong>' +
          '<p>Wir nutzen Google Ads Conversion&#8209;Tracking, um den Erfolg unserer Werbung zu messen. Kein Tracking ohne Ihre Zustimmung.</p>' +
        '</div>' +
        '<div class="cb-actions">' +
          '<button class="cb-btn cb-decline" id="cbDecline" type="button">Ablehnen</button>' +
          '<button class="cb-btn cb-accept"  id="cbAccept"  type="button">Akzeptieren</button>' +
        '</div>' +
        '<a class="cb-link" href="/datenschutz.html">Datenschutzerklärung lesen</a>' +
      '</div>';

    document.body.appendChild(el);

    /* Trigger entrance animation on next two frames */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        el.classList.add('cb-visible');
      });
    });

    el.querySelector('#cbAccept').addEventListener('click', function () {
      localStorage.setItem(KEY, 'accepted');
      applyGrant();
      hideBanner(el);
    });

    el.querySelector('#cbDecline').addEventListener('click', function () {
      localStorage.setItem(KEY, 'declined');
      hideBanner(el);
    });
  }
}());
