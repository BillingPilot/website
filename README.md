# BillingPilot-Website

Dieser Ordner enthält die eigenständige, statische öffentliche Website von BillingPilot. Sie benötigt weder Abhängigkeiten noch einen Build-Schritt und kann über GitHub Pages veröffentlicht werden.

## Lokal ansehen

Öffnen Sie `index.html` direkt im Browser. Für die lokale Vorschau und die Website selbst wird kein Server benötigt.

## Aufbau

- `index.html`: Produktseite mit Funktionen, Einblicken, Sicherheit, Lizenzierung und Download
- `datenschutz.html` und `impressum.html`: rechtliche Seiten
- `assets/css/site.css`: Gestaltung und responsive Darstellung
- `assets/js/site.js`: Navigation, Screenshot-Karussell und Detailansicht
- `assets/images/screenshots/`: ausschließlich anonymisierte Produktabbildungen

## Neue Version veröffentlichen

1. Den signierten Installer als `BillingPilot_Setup.exe` an einen regulären GitHub-Release des Repositorys `BillingPilot/website` anhängen.
2. Einen Versions-Tag anlegen, beispielsweise `v0.7.13`, und die Release Notes pflegen.
3. In `index.html` beide Download-Links sowie den Link zu den Release Notes auf den neuen Tag aktualisieren. Auch die sichtbare Versionsnummer in der Downloadkarte anpassen.
4. Die veröffentlichte Prüfsumme auf der GitHub-Release-Seite kontrollieren.
5. Die aktualisierten Website-Dateien in das GitHub-Pages-Repository übertragen und die veröffentlichte Seite prüfen.

Der aktuelle Download verweist auf `v0.7.15`. Das Release sollte in GitHub als regulärer Release, nicht als Pre-release, veröffentlicht sein.

## Pflegehinweise

- Rechtliche Angaben in `datenschutz.html` und `impressum.html` bei Änderungen der tatsächlichen Verhältnisse fachlich beziehungsweise rechtlich prüfen lassen.
- Keine echten Patienten-, Zahlungs- oder Kontaktdaten in Screenshots oder Website-Dateien ablegen.
- Die Website und die Windows-Anwendung bleiben getrennt: Änderungen an dieser Website erfolgen ausschließlich unter `website/`.
