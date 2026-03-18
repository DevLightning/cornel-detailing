# Cornel Detailing

Statische, mobil optimierte Website fuer ein Auto-Detailing-Unternehmen im Raum Neukirchen. Kein Build-Step ist noetig: Die Seite kann direkt auf GitHub Pages, Netlify, Vercel, Cloudflare Pages oder jedem anderen Static Host deployed werden.

## Dateien

- `index.html`: Landingpage mit Hero, Paketbereich, FAQ und direkten CTA-Buttons
- `galerie.html`: separate Galerie-Seite fuer Referenzen und Showcase-Arbeiten
- `impressum.html`: Impressum fuer oesterreichische Unternehmenswebsites
- `datenschutz.html`: Datenschutzerklaerung fuer die aktuelle trackerfreie Static-Site
- `styles.css`: komplettes Designsystem, responsive Layout und Animationen
- `script.js`: Paketdaten, direkte WhatsApp-/Telefon-CTAs und dynamische Inhalte
- `legal.js`: Fuellt Impressum und Datenschutz aus der Konfiguration
- `site-config.js`: zentrale Business-, Kontakt- und Rechtsdaten
- `assets/logo-cornel-detailing.svg`: neu gezeichnetes SVG-Logo im Stil der Vorlage
- `assets/favicon.svg`: Favicon
- `assets/gallery/README.txt`: erwartete Dateinamen fuer echte Galerie-Bilder

## Vor dem Livegang ergaenzen

Die Seite ist technisch deployment-ready, aber fuer echte rechtliche Vollstaendigkeit muessen in `site-config.js` noch die unternehmensspezifischen Angaben eingetragen werden:

- Inhaber / Betreibername
- vollstaendige Adresse
- Telefonnummer und E-Mail
- WhatsApp-Nummer fuer die direkten CTA-Buttons
- UID-Nummer, falls vorhanden
- GISA-Nummer / Gewerberegisterangabe, falls vorhanden
- Aufsichtsbehoerde, falls anwendbar
- Hosting-Anbieter inkl. Anschrift und Datenschutzhinweis
- umsatzsteuerlicher Preis-Hinweis

## Deployment

1. `site-config.js` ausfuellen.
2. Falls gewuenscht, Domain mit eigener Adresse verbinden.
3. Den gesamten Ordner als statische Website deployen.
4. Falls echte Referenzbilder genutzt werden, die Dateien gemaess `assets/gallery/README.txt` ablegen.

## Hinweise

- Die Startseite verzichtet bewusst auf ein Formular und fuehrt direkt zu WhatsApp oder Telefon.
- Wenn im Galerie-Ordner noch keine echten Projektbilder liegen, nutzt die Website automatisch stilistische Bild-Fallbacks.
- Im aktuellen Setup werden keine Analyse- oder Marketing-Cookies gesetzt.
- Wenn spaeter externe Tools wie Google Fonts, Meta Pixel, Google Maps oder Termin-Widgets eingebunden werden, muss die Datenschutzerklaerung angepasst werden und moeglicherweise ist dann auch ein Cookie-Banner noetig.
