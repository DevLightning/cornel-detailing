# -*- coding: utf-8 -*-
"""Generate /llms.txt, the summary of the site for AI assistants.

Every URL is checked against a real file in this folder, and the prices come
from the `packages` array in script.js, so the file cannot drift from the site.

Usage:  python build/gen_llms.py
"""
import io, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from pkgdata import ROOT, load_packages

BASE = "https://corneldetailing.com/"

# page, label, one line description
PAGES = [
    ("", "Startseite",
     "Überblick, alle neun Pakete mit Preisen, Bewertungen, Standort und Kontakt"),
    ("autoaufbereitung-gloggnitz.html", "Autoaufbereitung Gloggnitz",
     "Leistungen, Ablauf, Abholung und Preise für Gloggnitz und Umgebung"),
    ("autoaufbereitung-neunkirchen.html", "Autoaufbereitung Neunkirchen",
     "Leistungen, Abholung und Preise für Neunkirchen, Ternitz und den Bezirk"),
]

SERVICES = [
    ("lackpolitur-neunkirchen.html", "Lackpolitur",
     "Zwei- oder dreistufige Maschinenpolitur, entfernt Kratzer, Swirls und Hologramme"),
    ("keramikversiegelung-neunkirchen.html", "Keramikversiegelung",
     "Lackschutz mit bis zu 12 oder bis zu 60 Monaten Standzeit, auf poliertem Lack"),
    ("innenreinigung-gloggnitz.html", "Innenreinigung",
     "Tornador Gun, Teppiche, Polster, Dachhimmel, Lederpflege, Armaturen und Kofferraum"),
]

GUIDES = [
    ("autoaufbereitung-kosten-neunkirchen.html", "Was kostet Autoaufbereitung",
     "Preisrahmen, Dauer und was den Aufwand treibt"),
    ("keramikversiegelung-vs-politur-neunkirchen.html", "Keramikversiegelung oder Lackpolitur",
     "Unterschied, Reihenfolge und wann welche Leistung sinnvoll ist"),
    ("auto-fruehjahrspflege-neunkirchen.html", "Auto-Frühjahrspflege",
     "Salzrückstände entfernen und Lack nach dem Winter prüfen"),
    ("autopflege-tipps-winter-gloggnitz.html", "Autopflege im Winter",
     "Streusalz, Lackschutz und Innenraum in der kalten Jahreszeit"),
    ("fahrzeugaufbereitung-gloggnitz-wichtig.html", "Warum Fahrzeugaufbereitung wichtig ist",
     "Werterhalt, Lackschutz und Wiederverkauf"),
]

LEGAL = [
    ("galerie.html", "Galerie", "Fahrzeuge vor und nach der Aufbereitung"),
    ("impressum.html", "Impressum", "Anbieterkennzeichnung nach § 5 ECG und § 63 GewO"),
    ("datenschutz.html", "Datenschutz", "Datenschutzerklärung nach DSGVO"),
]


def link(path, label, desc):
    return "- [%s](%s%s): %s" % (label, BASE, path, desc)


def main():
    pkgs = load_packages()
    by_name = dict((p["title"], p) for p in pkgs)
    aussen = by_name["Spezial-Außen-Reinigung"]["prices"]["pkw"]
    innen = by_name["Spezial-Innen-Reinigung"]["prices"]["pkw"]
    politur = by_name["Glanzpolitur"]["prices"]["pkw"]
    keramik = by_name["Versiegelung bis zu 12 Monate"]["prices"]["pkw"]
    keramik60 = by_name["Versiegelung bis zu 60 Monate"]["prices"]["pkw"]

    missing = [p for p, _, _ in PAGES + SERVICES + GUIDES + LEGAL
               if p and not os.path.exists(os.path.join(ROOT, p))]
    if missing:
        sys.exit("these pages do not exist: " + ", ".join(missing))

    out = []
    out.append("# Cornel Detailing")
    out.append("")
    out.append("> Cornel Detailing ist ein Fahrzeugaufbereiter in Enzenreith bei Gloggnitz im "
               "südlichen Niederösterreich. Angeboten werden Außenreinigung, Innenreinigung, "
               "Lackpolitur, Keramikversiegelung und individuelle Komplettaufbereitung, für "
               "Privatkunden ebenso wie für Kfz-Werkstätten und Autohändler. Abholung und "
               "Rückbringung im Bezirk Neunkirchen sind inklusive.")
    out.append("")
    out.append("Standort: Fördergasse 290, 2640 Enzenreith, Österreich. Termine nur nach "
               "Vereinbarung, Anfrage per WhatsApp oder Telefon, Antwort meist innerhalb einer "
               "Stunde an Werktagen.")
    out.append("Einsatzgebiet: Gloggnitz, Enzenreith, Neunkirchen, Ternitz, Payerbach, Reichenau "
               "an der Rax, Wiener Neustadt und Umgebung.")
    out.append("Zielgruppen: Privatkunden aus der Region sowie Geschäftskunden (Kfz-Werkstätten, "
               "Autohändler), die die Aufbereitung auslagern wollen.")
    out.append("Preise (PKW, größere Fahrzeuge kosten mehr): Außenreinigung ab %s, "
               "Innenreinigung ab %s, Lackpolitur ab %s, Keramikversiegelung %s bis %s. "
               "Alle neun Pakete mit vollständiger Leistungsliste stehen auf der Startseite. "
               "Kleinunternehmer gemäß § 6 Abs. 1 Z 27 UStG, daher ohne Umsatzsteuer."
               % (aussen, innen, politur, keramik, keramik60))
    out.append("Sprache der Website: Deutsch (de-AT).")
    out.append("")

    out.append("## Hauptseiten")
    out.append("")
    for p, l, d in PAGES:
        out.append(link(p, l, d))
    out.append(link("#autoaufbereitung-pakete", "Pakete und Preise",
                    "Alle neun Pakete mit Preisen für PKW, SUV, Kombi und Van"))
    out.append(link("#kontakt", "Kontakt",
                    "Telefon, WhatsApp und Standort, kein Formular"))
    out.append("")

    out.append("## Leistungen im Detail")
    out.append("")
    for p, l, d in SERVICES:
        out.append(link(p, l, d))
    out.append("")

    out.append("## Ratgeber")
    out.append("")
    for p, l, d in GUIDES:
        out.append(link(p, l, d))
    out.append("")

    out.append("## Kontakt und Rechtliches")
    out.append("")
    out.append("- Telefon: +43 676 4391253")
    out.append("- E-Mail: kontakt@corneldetailing.at")
    out.append("- Adresse: Fördergasse 290, 2640 Enzenreith, Österreich")
    for p, l, d in LEGAL:
        out.append(link(p, l, d))
    out.append("")

    path = os.path.join(ROOT, "llms.txt")
    io.open(path, "w", encoding="utf-8", newline="\n").write("\n".join(out))
    print("llms.txt written: %d lines, %d links, all pointing at real pages"
          % (len(out), sum(1 for l in out if l.startswith("- ["))))


if __name__ == "__main__":
    main()
