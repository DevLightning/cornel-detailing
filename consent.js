/* consent.js · Cookie consent for Google Ads conversion measurement
   Cornel Detailing · DSGVO and § 165 Abs. 3 TKG 2021
   ───────────────────────────────────────────────────────────────────────
   Nothing from Google loads before the visitor agrees: no gtag.js, no
   cookies, no connection to Google servers (Google's "basic" consent
   mode). Ad personalisation and remarketing stay switched off even after
   consent; the banner only asks for conversion measurement.

   The choice is kept for 12 months in localStorage (no identifier, never
   sent anywhere) and can be changed at any time through any element with
   [data-cookie-settings], e.g. "Cookie-Einstellungen" in the footer. */
(function () {
  'use strict';

  var KEY = 'cornel_consent_v2';
  var MAX_AGE = 365 * 24 * 60 * 60 * 1000;
  var ADS_ID = 'AW-17936964522';
  var googleLoaded = false;
  var returnFocusTo = null;

  /* The old key stored consent given through a less detailed banner:
     drop it so everyone decides again with the full information. */
  try { localStorage.removeItem('cornel_consent'); } catch (e) { /* ok */ }

  function readChoice() {
    try {
      var saved = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (saved && (saved.c === 'granted' || saved.c === 'denied') &&
          Date.now() - saved.t < MAX_AGE) {
        return saved.c;
      }
      localStorage.removeItem(KEY);
    } catch (e) { /* storage blocked: ask again on every page */ }
    return null;
  }

  function saveChoice(choice) {
    try {
      localStorage.setItem(KEY, JSON.stringify({ c: choice, t: Date.now() }));
    } catch (e) { /* ok */ }
  }

  /* Only ever called after consent. script.js and legal.js send
     conversions only while window.gtag exists, so no event (and no
     sessionStorage marker) can happen before this point. */
  function loadGoogleAds() {
    if (googleLoaded) return;
    googleLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied'
    });
    window.gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted'
    });
    window.gtag('js', new Date());
    window.gtag('config', ADS_ID, { allow_ad_personalization_signals: false });

    var tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + ADS_ID;
    document.head.appendChild(tag);
  }

  /* "Ablehnen": remove anything Google Ads stored on this site (also left
     over from an earlier visit). If the tag is already running, reload so
     it is gone as well. */
  function removeGoogleAds() {
    var running = typeof window.gtag === 'function';
    if (running) {
      window.gtag('consent', 'update', { ad_storage: 'denied', ad_user_data: 'denied' });
    }
    var parts = location.hostname.split('.');
    var domains = [''];
    for (var i = 0; i < parts.length - 1; i++) domains.push('; domain=.' + parts.slice(i).join('.'));
    document.cookie.split(';').forEach(function (pair) {
      var name = pair.split('=')[0].trim();
      if (!/^(_gcl_|_gac_)/.test(name)) return;
      domains.forEach(function (domain) {
        document.cookie = name + '=; Max-Age=0; path=/' + domain;
      });
    });
    /* Google also keeps click data in web storage (e.g. _gcl_ls) */
    ['localStorage', 'sessionStorage'].forEach(function (name) {
      try {
        var store = window[name];
        Object.keys(store).forEach(function (key) {
          if (/^(_gcl|_gac)/.test(key)) store.removeItem(key);
        });
        store.removeItem('cornel_call_lead');
        store.removeItem('cornel_wa_lead');
      } catch (e) { /* storage blocked */ }
    });
    if (running) setTimeout(function () { location.reload(); }, 480);
  }

  function hideBanner(el) {
    el.classList.remove('cb-visible');
    el.classList.add('cb-hiding');
    /* Hand the bottom slot back to the call/WhatsApp bar: removing
       'cookie-active' lets the bar slide up as the banner slides down.
       Also clear the scroll-driven hidden state so the bar is revealed. */
    document.body.classList.remove('cookie-active');
    var bar = document.querySelector('.mobile-cta');
    var backdrop = document.querySelector('.mobile-cta-backdrop');
    if (bar) bar.classList.remove('mobile-cta--hidden');
    if (backdrop) backdrop.classList.remove('mobile-cta--hidden');
    /* misclick cooldown: the bar just appeared where the cookie buttons were */
    window.__ctaBarShownAt = Date.now();
    if (returnFocusTo && document.contains(returnFocusTo)) returnFocusTo.focus();
    returnFocusTo = null;
    setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 460);
  }

  function showBanner(fromSettings) {
    var existing = document.getElementById('cookie-banner');
    if (existing && !existing.classList.contains('cb-hiding')) {
      existing.querySelector('.cb-btn').focus();
      return;
    }
    if (existing) existing.parentNode.removeChild(existing);

    var current = readChoice();
    var status = fromSettings && current
      ? '<p class="cb-status">Aktuelle Auswahl: <strong>' +
          (current === 'granted' ? 'akzeptiert' : 'abgelehnt') + '</strong></p>'
      : '';

    var el = document.createElement('div');
    el.id = 'cookie-banner';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'false');
    el.setAttribute('aria-labelledby', 'cbTitle');
    el.innerHTML =
      '<div class="cb-inner">' +
        '<div class="cb-copy">' +
          '<p class="cb-title" id="cbTitle">Cookie-Einstellungen</p>' +
          '<p class="cb-text">' +
            'Dürfen wir mit Cookies von Google Ads messen, ob unsere Anzeigen zu Anfragen führen? ' +
            'Dabei werden Daten an Google übermittelt, auch in die USA. ' +
            'Sie können das jederzeit unter „Cookie-Einstellungen“ ändern.' +
          '</p>' +
          status +
          '<p class="cb-links">' +
            '<a class="cb-link" href="/datenschutz.html">Datenschutz</a>' +
            '<span aria-hidden="true">·</span>' +
            '<a class="cb-link" href="/impressum.html">Impressum</a>' +
          '</p>' +
        '</div>' +
        '<div class="cb-actions">' +
          '<button class="cb-btn" data-choice="denied" type="button">Ablehnen</button>' +
          '<button class="cb-btn" data-choice="granted" type="button">Akzeptieren</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(el);
    /* Consent pending: CSS hides the call/WhatsApp bar on phones so the
       banner can use that bottom slot */
    document.body.classList.add('cookie-active');

    /* Entrance on the next frames; setTimeout fallback for throttled tabs */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { el.classList.add('cb-visible'); });
    });
    setTimeout(function () { el.classList.add('cb-visible'); }, 150);
    if (fromSettings) el.querySelector('.cb-btn').focus();

    el.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('[data-choice]');
      if (!btn) return;
      var choice = btn.getAttribute('data-choice');
      saveChoice(choice);
      hideBanner(el);
      if (choice === 'granted') loadGoogleAds();
      else removeGoogleAds();
    });
  }

  /* "Cookie-Einstellungen" anywhere on the page reopens the banner */
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest && e.target.closest('[data-cookie-settings]');
    if (!trigger) return;
    e.preventDefault();
    returnFocusTo = trigger;
    showBanner(true);
  });

  var choice = readChoice();
  if (choice === 'granted') {
    loadGoogleAds();
  } else if (choice === null) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { showBanner(false); });
    } else {
      showBanner(false);
    }
  }
}());
