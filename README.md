# Cornel Detailing

Statische, mobil optimierte Website fuer ein Auto-Detailing-Unternehmen im Raum Neukirchen. Kein Build-Step ist noetig: Die Seite kann direkt auf GitHub Pages, Netlify, Vercel, Cloudflare Pages oder jedem anderen Static Host deployed werden.

## Dateien

- `index.html`: Landingpage mit Hero, Paketbereich, FAQ und direkten CTA-Buttons
- `galerie.html`: separate Galerie-Seite fuer Referenzen und Showcase-Arbeiten
- `impressum.html`: Impressum (Text steht direkt im HTML)
- `datenschutz.html`: Datenschutzerklaerung (Text steht direkt im HTML, Stand-Datum bei Aenderungen anpassen)
- `consent.js`: Cookie-Banner; laedt Google Ads (gtag.js) erst nach Einwilligung, Widerruf ueber "Cookie-Einstellungen"
- `styles.css`: komplettes Designsystem, responsive Layout und Animationen
- `script.js`: Paketdaten, direkte WhatsApp-/Telefon-CTAs und dynamische Inhalte
- `legal.js`: Header und Anruf-Conversion auf Impressum und Datenschutz
- `site-config.js`: Kontaktdaten und kurze Texte fuer die Hauptseiten
- `assets/fonts/`: selbst gehostete Schriften (Inter, Poppins), keine Verbindung zu Google Fonts
- `assets/logo-cornel-detailing.svg`: neu gezeichnetes SVG-Logo im Stil der Vorlage
- `assets/favicon.svg`: Favicon
- `assets/gallery/README.txt`: erwartete Dateinamen fuer echte Galerie-Bilder

## Rechtliche Angaben aendern

Aendern sich Adresse, Telefon, E-Mail, Gewerbe oder Hosting-Anbieter, muessen drei Stellen angepasst werden: `site-config.js` (Hauptseiten), `impressum.html` und `datenschutz.html` (dort auch das Stand-Datum).

## Deployment

1. Kontaktdaten in `site-config.js`, `impressum.html` und `datenschutz.html` pruefen.
2. Falls gewuenscht, Domain mit eigener Adresse verbinden.
3. Den gesamten Ordner als statische Website deployen.
4. Falls echte Referenzbilder genutzt werden, die Dateien gemaess `assets/gallery/README.txt` ablegen.

## Hinweise

- Die Startseite verzichtet bewusst auf ein Formular und fuehrt direkt zu WhatsApp oder Telefon.
- Wenn im Galerie-Ordner noch keine echten Projektbilder liegen, nutzt die Website automatisch stilistische Bild-Fallbacks.
- Ohne Einwilligung werden keine Cookies gesetzt und keine Daten an Google gesendet. Google Maps laedt erst nach Klick.
- Neue externe Dienste (z. B. Google Analytics, Meta Pixel, Remarketing, Einbettungen von YouTube oder Instagram) duerfen nur ueber consent.js geladen werden, und Banner-Text sowie Datenschutzerklaerung muessen dann ergaenzt werden.
