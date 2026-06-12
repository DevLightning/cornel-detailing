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
    /* Hand the bottom slot back to the call/WhatsApp bar: removing
       'cookie-active' lets the bar slide up as the banner slides down,
       producing a smooth swap. Also clear the scroll-driven hidden state so
       the bar is actually revealed at the moment of the swap. */
    document.body.classList.remove('cookie-active');
    var bar = document.querySelector('.mobile-cta');
    var backdrop = document.querySelector('.mobile-cta-backdrop');
    if (bar) bar.classList.remove('mobile-cta--hidden');
    if (backdrop) backdrop.classList.remove('mobile-cta--hidden');
    setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 460);
  }

  function buildBanner() {
    var el = document.createElement('div');
    el.id = 'cookie-banner';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'false');
    el.setAttribute('aria-label', 'Cookie-Einstellungen');
    el.innerHTML =
      '<div class="cb-inner">' +
        '<p class="cb-text">' +
          'Wir nutzen Cookies für Conversion-Tracking. ' +
          '<a class="cb-link" href="/datenschutz.html">Datenschutz</a>' +
        '</p>' +
        '<div class="cb-actions">' +
          '<button class="cb-btn cb-decline" id="cbDecline" type="button">Ablehnen</button>' +
          '<button class="cb-btn cb-accept"  id="cbAccept"  type="button">Akzeptieren</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(el);
    /* Mark consent pending → CSS hides the call/WhatsApp bar on mobile so the
       cookie banner can occupy that same bottom slot. */
    document.body.classList.add('cookie-active');

    /* Trigger entrance animation on next two frames; setTimeout fallback for
       environments that throttle requestAnimationFrame (background tabs,
       some in-app webviews) */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        el.classList.add('cb-visible');
      });
    });
    setTimeout(function () { el.classList.add('cb-visible'); }, 150);

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
