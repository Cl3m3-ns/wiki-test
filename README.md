# AMPEL Wiki

Dieses Repository enthält die AMPEL-Wiki als statische Dokumentationswebsite mit [VitePress](https://vitepress.dev/). Das VitePress-Projekt liegt vollständig im Ordner `docs/` und kann später unverändert als Paket in ein Monorepo aufgenommen werden.

## Inhalt und Struktur

- `docs/index.md` ist die Startseite mit den Einstiegen in Bauanleitung und Evidenzsammlung.
- `docs/*.md` und die Unterordner enthalten die eigentlichen Wiki-Inhalte.
- `docs/.vitepress/config.ts` enthält Navigation, Suche, Seitentexte und Metadaten.
- `docs/.vitepress/theme/` erweitert das VitePress-Standardtheme um AMPEL-Farben und den Projektfooter.
- `docs/public/` enthält Logos, Bilder und die Social-Preview.

Reguläre Inhaltsseiten brauchen kein YAML-Frontmatter. Eine neue Seite beginnt direkt mit ihrer H1-Überschrift:

```md
# 1.6 Neues Thema

Hier beginnt der Inhalt.
```

Anschließend wird die Seite an der gewünschten Position in der `sidebar` von `docs/.vitepress/config.ts` eingetragen. Diese Reihenfolge steuert zugleich die Links „Vorherige Seite“ und „Nächste Seite“.

Nur die besondere Startseite `docs/index.md` verwendet minimales Frontmatter für das VitePress-Home-Layout.

## Lokale Entwicklung

Voraussetzung ist Node.js 20 oder neuer.

```bash
cd docs
npm ci
npm run docs:dev
```

VitePress zeigt anschließend die lokale Adresse im Terminal an.

## Produktionsbuild

```bash
cd docs
npm run docs:build
npm run docs:preview
```

Der Build liegt unter `docs/.vitepress/dist/`. Für einen Unterpfad kann die Base-URL gesetzt werden:

```bash
DOCS_BASE=/wiki-test/ npm run docs:build
```

Unter PowerShell:

```powershell
$env:DOCS_BASE = "/wiki-test/"
npm run docs:build
```

## Verlinkung und Assets

Interne Seiten werden mit normalen relativen Markdown-Links verknüpft:

```md
[Regulatorik](1-bauanleitung/1-3-regulatorik.md)
```

Öffentliche Bilder liegen unter `docs/public/assets/images/` und werden vom Markdown aus mit einem absoluten Site-Pfad eingebunden:

```md
![AMPEL Projektlogo](/assets/images/brand-default-logo.svg)
```

VitePress berücksichtigt dabei automatisch die konfigurierte Base-URL.

## GitHub Pages

Der Workflow `.github/workflows/pages.yml` baut Pull Requests zur Prüfung. Bei
Änderungen auf `main` oder einem manuellen Start auf `main` wird die Website mit
`DOCS_BASE=/wiki-test/` gebaut und aus `docs/.vitepress/dist/` veröffentlicht.

Vor der ersten Veröffentlichung muss im GitHub-Repository unter
**Settings → Pages → Build and deployment → Source** einmalig **GitHub Actions**
ausgewählt werden. Danach ist die Website unter folgender Adresse erreichbar:

```text
https://cl3m3-ns.github.io/wiki-test/
```
