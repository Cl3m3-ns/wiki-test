# 0 Start und Übersicht

Diese Wiki sammelt die Markdown-Dokumentation für das AMPEL-Projekt. Sie gliedert sich in zwei Einstiege: die **Bauanleitung** für die Umsetzung und die **Evidenzsammlung** für die wissenschaftliche Dokumentation.

## Kapitel

- [1 Bauanleitung](1-bauanleitung.md)
- [2 Evidenzsammlung](2-evidenzsammlung.md)
- [3 Beispiel neues Kapitel mit Unterkapitel](3-beispiel-neues-kapitel.md)

## Nutzung

Die Inhalte bleiben normale Markdown-Dateien. Ihre Reihenfolge und Verschachtelung wird zentral in `.vitepress/config.ts` gepflegt. Dadurch benötigen reguläre Wiki-Seiten keine YAML-Kopfzeilen: Eine H1-Überschrift am Anfang der Datei reicht aus.

## Verlinkung

Interne Seiten werden mit relativen Markdown-Links verknüpft. Die Dateiendung kann stehen bleiben und wird beim Build in die passende VitePress-Route übersetzt:

```md
[Linktext](pfad/zum/dokument.md)
```

Zum Beispiel:

```md
[Unterseite Beispiel](3-beispiel-neues-kapitel/unterseite-beispiel.md)
```

Das Ergebnis ist dieser anklickbare Link:

[Unterseite Beispiel](3-beispiel-neues-kapitel/unterseite-beispiel.md)

VitePress prüft beim Erstellen der Website, ob interne Ziele existieren. Dateipfade müssen deshalb die Groß- und Kleinschreibung der tatsächlichen Dateien übernehmen.

## Beispiel: Medien einbetten

Diese Sektion zeigt beispielhaft, wie Bilder, ein YouTube-Video und Code in der AMPEL-Wiki-Dokumentation aussehen können.

![AMPEL Projektlogo](/assets/images/brand-default-logo.svg)

<div class="ampel-video-wrap">
  <iframe
    src="https://www.youtube-nocookie.com/embed/KquYs9i_5fY"
    title="AMPEL beim Krankenhaustag in Leipzig | MDR Reportage | 2025"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

Inline-Code sieht so aus: `npm run docs:dev`.

Ein Bash-Beispiel mit Syntax-Highlighting:

```bash
# Lokale Vorschau starten
npm ci
npm run docs:dev
```

So sieht der Markdown-Code für ein Bild aus:

```md
![AMPEL Projektlogo](/assets/images/brand-default-logo.svg)
```

So sieht der HTML-Code für ein responsives YouTube-Embed aus:

```html
<div class="ampel-video-wrap">
  <iframe
    src="https://www.youtube-nocookie.com/embed/KquYs9i_5fY"
    title="AMPEL beim Krankenhaustag in Leipzig | MDR Reportage | 2025"
    loading="lazy"
    allowfullscreen>
  </iframe>
</div>
```
