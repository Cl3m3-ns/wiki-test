# 0 Start and overview

This wiki brings together the Markdown documentation for the AMPEL project. It covers the **implementation guides** for putting the system into practice and the **evidence collection** for scientific documentation.

## Chapters

- [1 Technical implementation guide](1-bauanleitung.md)
- [2 Regulatory implementation guide](/Open-Source-BA/overview.md)
- [3 Evidence](2-evidenzsammlung.md)

## Usage

Content is stored in standard Markdown files. Page order and nesting are managed centrally in `.vitepress/config.ts`. Regular wiki pages therefore do not need YAML frontmatter: an H1 heading at the beginning of the file is sufficient.

## Links

Use relative Markdown links to link to internal pages. The file extension can be retained; it is converted to the corresponding VitePress route during the build:

```md
[Link text](path/to/document.md)
```

For example:

```md
[Example subpage](3-beispiel-neues-kapitel/unterseite-beispiel.md)
```

This produces the following clickable link:

[Example subpage](3-beispiel-neues-kapitel/unterseite-beispiel.md)

VitePress checks that internal link targets exist when building the website. File paths must therefore match the capitalization of the actual files.

## Example: embedding media

This section shows examples of images, a YouTube video, and code in the AMPEL Wiki documentation.

![AMPEL project logo](/assets/images/brand-default-logo.svg)

<div class="ampel-video-wrap">
  <iframe
    src="https://www.youtube-nocookie.com/embed/KquYs9i_5fY"
    title="AMPEL at Hospital Day in Leipzig | MDR documentary | 2025 (German)"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

Inline code looks like this: `npm run docs:dev`.

A Bash example with syntax highlighting:

```bash
# Start the local preview
npm ci
npm run docs:dev
```

Markdown for an image looks like this:

```md
![AMPEL project logo](/assets/images/brand-default-logo.svg)
```

HTML for a responsive YouTube embed looks like this:

```html
<div class="ampel-video-wrap">
  <iframe
    src="https://www.youtube-nocookie.com/embed/KquYs9i_5fY"
    title="AMPEL at Hospital Day in Leipzig | MDR documentary | 2025 (German)"
    loading="lazy"
    allowfullscreen>
  </iframe>
</div>
```
