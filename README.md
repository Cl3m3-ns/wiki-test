# AMPEL Wiki

This repository contains the AMPEL Wiki, a static documentation website built with [VitePress](https://vitepress.dev/). The entire VitePress project lives in the `docs/` folder and can later be included as a package in a monorepo without modification.

## Content and structure

- `docs/index.md` is the homepage, with links to the implementation guides and evidence collection.
- `docs/*.md` and the subfolders contain the wiki content.
- `docs/.vitepress/config.ts` contains navigation, search, interface text, and metadata.
- `docs/.vitepress/theme/` extends the default VitePress theme with AMPEL colors and the project footer.
- `docs/public/` contains logos, images, and the social preview.

The version displayed in the header uses `version` from `docs/package.json`. To set a new version, run a command such as `npm version 0.2.0 --no-git-tag-version` in the `docs/` folder; this also updates the lockfile.

Regular content pages do not need YAML frontmatter. A new page starts directly with its H1 heading:

```md
# 1.6 New topic

The content starts here.
```

Then add the page at the desired position in the `sidebar` configuration in `docs/.vitepress/config.ts`. This order also controls the "Previous page" and "Next page" links.

Only the special homepage, `docs/index.md`, uses minimal frontmatter for the VitePress home layout.

## Local development

Node.js 20 or newer is required.

```bash
cd docs
npm ci
npm run docs:dev
```

VitePress then displays the local address in the terminal.

## Production build

```bash
cd docs
npm run docs:build
npm run docs:preview
```

The build output is stored in `docs/.vitepress/dist/`. To deploy under a subpath, set the base URL:

```bash
DOCS_BASE=/wiki-test/ npm run docs:build
```

In PowerShell:

```powershell
$env:DOCS_BASE = "/wiki-test/"
npm run docs:build
```

## Links and assets

Use standard relative Markdown links for internal pages:

```md
[Regulatory requirements](1-bauanleitung/1-3-regulatorik.md)
```

Public images are stored in `docs/public/assets/images/` and referenced in Markdown using an absolute site path:

```md
![AMPEL project logo](/assets/images/brand-default-logo.svg)
```

VitePress automatically accounts for the configured base URL.

## GitHub Pages

The `.github/workflows/pages.yml` workflow builds pull requests for validation.
On changes to `main` or a manual run on `main`, the website is built with
`DOCS_BASE=/wiki-test/` and published from `docs/.vitepress/dist/`.

Before the first deployment, select **GitHub Actions** in the GitHub repository
under **Settings → Pages → Build and deployment → Source**. This only needs to
be done once. The website is then available at:

```text
https://cl3m3-ns.github.io/wiki-test/
```
