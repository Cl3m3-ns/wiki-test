---
title: 0 Start und Übersicht
layout: default
nav_order: 0
doc_order: 0
last_modified_date: 2026-06-19
authors:
  - AMPEL-Team
---

# 0 Start und Übersicht

Diese Wiki sammelt die Markdown-Dokumentation für das AMPEL-Projekt. Sie gliedert sich in zwei Einstiege: die **Bauanleitung** für die Umsetzung und die **Evidenzsammlung** für die wissenschaftliche Dokumentation.

## Kapitel

- [1 Bauanleitung](1-bauanleitung.md)
- [2 Evidenzsammlung](2-evidenzsammlung.md)
- [3 Beispiel neues Kapitel mit Unterkapitel]({% link docs/output/Teste das Wiki.md %})

## Nutzung

Die Navigation in der Seitenleiste wird aus dem Jekyll-Front-Matter der Markdown-Dateien in `docs/` erzeugt. Neue Seiten können dort als normale Markdown-Dateien angelegt und über `title`, `nav_order`, `parent` und `grand_parent` einsortiert werden.

## Verlinkung

Dokumente können mit dem Jekyll-Tag `link` verlinkt werden. Der Pfad zur
Markdown-Datei wird dabei immer vom Hauptverzeichnis des Repositorys aus
angegeben:

{% raw %}
```md
[Linktext]({% link pfad/zum/dokument.md %})
```
{% endraw %}

Zum Beispiel:

{% raw %}
```md
[Unterseite Beispiel]({% link docs/output/unterseite-beispiel/unterseite-beispiel.md %})
```
{% endraw %}

Das Ergebnis ist dieser anklickbare Link:

[Unterseite Beispiel]({% link docs/output/unterseite-beispiel/unterseite-beispiel.md %})

Jekyll prüft beim Erstellen der Website, ob die angegebene Datei existiert,
und erzeugt automatisch die richtige URL. Der Dateipfad muss die Endung `.md`
enthalten und die Groß- und Kleinschreibung des Dateinamens übernehmen.

## Beispiel: Medien einbetten

Diese Sektion zeigt beispielhaft, wie Bilder, ein YouTube-Video und Code in der AMPEL-Wiki-Dokumentation aussehen können.

<div class="ampel-example-grid">
  <figure class="ampel-media-example">
    <img src="{{ '/assets/images/brand-default-logo.svg' | relative_url }}" alt="AMPEL Projektlogo">
    <figcaption>Lokales Projektlogo aus dem Repository.</figcaption>
  </figure>
</div>

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

Inline-Code sieht so aus: `bundle exec jekyll serve`.

Ein Bash-Beispiel mit Syntax-Highlighting:

```bash
# Lokale Vorschau starten
bundle install
bundle exec jekyll serve --livereload
```

So sieht der Markdown-Code für ein Bild aus:

{% raw %}
```md
![AMPEL Projektlogo]({{ "/assets/images/brand-default-logo.svg" | relative_url }})
```
{% endraw %}

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
