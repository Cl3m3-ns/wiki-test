import { defineConfig } from "vitepress";

const configuredBase = process.env.DOCS_BASE || "/";
const base = `/${configuredBase.replace(/^\/+|\/+$/g, "")}/`.replace("//", "/");
const siteOrigin = process.env.DOCS_ORIGIN || "https://cl3m3-ns.github.io";
const canonicalUrl = new URL(base, `${siteOrigin}/`).href;

export default defineConfig({
  lang: "de-DE",
  title: "AMPEL Wiki",
  titleTemplate: ":title | AMPEL Wiki",
  description: "Statischer Markdown-Implementationsleitfaden für das AMPEL-Projekt",
  base,
  cleanUrls: false,
  lastUpdated: true,
  sitemap: {
    hostname: canonicalUrl,
  },
  head: [
    [
      "script",
      {},
      "if (!localStorage.getItem('vitepress-theme-appearance')) localStorage.setItem('vitepress-theme-appearance', 'light')",
    ],
    ["link", { rel: "icon", type: "image/svg+xml", href: `${base}assets/images/ampel-wave.svg` }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "de_DE" }],
    ["meta", { property: "og:site_name", content: "AMPEL Wiki" }],
    ["meta", { property: "og:title", content: "AMPEL Wiki – Implementationsleitfaden" }],
    ["meta", { property: "og:description", content: "Bauanleitung und Evidenzsammlung für das AMPEL-Projekt" }],
    ["meta", { property: "og:url", content: canonicalUrl }],
    ["meta", { name: "twitter:card", content: "summary" }],
    ["meta", { name: "twitter:title", content: "AMPEL Wiki – Implementationsleitfaden" }],
    ["meta", { name: "twitter:description", content: "Bauanleitung und Evidenzsammlung für das AMPEL-Projekt" }],
  ],
  themeConfig: {
    logo: {
      light: "/assets/images/ampel-wave.svg",
      dark: "/assets/images/ampel-wave.svg",
      alt: "AMPEL-Welle",
    },
    siteTitle: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "Start und Übersicht", link: "/0-start-und-uebersicht" },
      { text: "GitHub", link: "https://github.com/Cl3m3-ns/wiki-test" },
    ],
    sidebar: [
      { text: "0 Start und Übersicht", link: "/0-start-und-uebersicht" },
      {
        text: "1 Bauanleitung",
        link: "/1-bauanleitung",
        collapsed: false,
        items: [
          { text: "1.1 Übersicht", link: "/1-bauanleitung/1-1-uebersicht" },
          { text: "1.2 QM-Dokumentation", link: "/1-bauanleitung/1-2-qm-dokumentation" },
          {
            text: "1.3 Regulatorik",
            link: "/1-bauanleitung/1-3-regulatorik",
            collapsed: true,
            items: [
              { text: "1.3.1 Medizinprodukt", link: "/1-bauanleitung/1-3-regulatorik/1-3-1-medizinprodukt" },
              { text: "1.3.2 Eigenherstellung", link: "/1-bauanleitung/1-3-regulatorik/1-3-2-eigenherstellung" },
              { text: "1.3.3 Klinische Prüfung", link: "/1-bauanleitung/1-3-regulatorik/1-3-3-klinische-pruefung" },
              { text: "1.3.4 AI Act", link: "/1-bauanleitung/1-3-regulatorik/1-3-4-ai-act" },
              { text: "1.3.5 Ethikanträge", link: "/1-bauanleitung/1-3-regulatorik/1-3-5-ethikantraege" },
              { text: "1.3.6 Datenschutz", link: "/1-bauanleitung/1-3-regulatorik/1-3-6-datenschutz" },
            ],
          },
          {
            text: "1.4 Templates für Studien",
            link: "/1-bauanleitung/1-4-templates-fuer-studien",
            collapsed: true,
            items: [
              { text: "1.4.1 RCT / PCT", link: "/1-bauanleitung/1-4-templates-fuer-studien/1-4-1-rct-pct" },
              { text: "1.4.2 Studien als QM-Maßnahme", link: "/1-bauanleitung/1-4-templates-fuer-studien/1-4-2-studien-als-qm-massnahme" },
              { text: "1.4.3 Retrospektiv", link: "/1-bauanleitung/1-4-templates-fuer-studien/1-4-3-retrospektiv" },
              { text: "1.4.4 Endpunkte und Datenerhebung", link: "/1-bauanleitung/1-4-templates-fuer-studien/1-4-4-endpunkte-und-datenerhebung" },
              { text: "1.4.5 Praktisches Design", link: "/1-bauanleitung/1-4-templates-fuer-studien/1-4-5-praktisches-design" },
            ],
          },
          {
            text: "1.5 Implementierungsleitfaden",
            link: "/1-bauanleitung/1-5-implementierungsleitfaden",
            collapsed: true,
            items: [
              { text: "1.5.1 Architektur", link: "/1-bauanleitung/1-5-implementierungsleitfaden/1-5-1-architektur" },
              { text: "1.5.2 Module", link: "/1-bauanleitung/1-5-implementierungsleitfaden/1-5-2-module" },
              { text: "1.5.3 Schnittstellen", link: "/1-bauanleitung/1-5-implementierungsleitfaden/1-5-3-schnittstellen" },
              { text: "1.5.4 Testdatensätze", link: "/1-bauanleitung/1-5-implementierungsleitfaden/1-5-4-testdatensaetze" },
              { text: "1.5.5 Installation der Bibliotheken", link: "/1-bauanleitung/1-5-implementierungsleitfaden/1-5-5-installation-der-bibliotheken" },
              { text: "1.5.6 Schulungsmaterial für Anwender", link: "/1-bauanleitung/1-5-implementierungsleitfaden/1-5-6-schulungsmaterial-fuer-anwender" },
            ],
          },
        ],
      },
      {
        text: "2 Evidenzsammlung",
        link: "/2-evidenzsammlung",
        collapsed: false,
        items: [
          {
            text: "2.1 Medizinisch-wissenschaftliche Dokumentation",
            link: "/2-evidenzsammlung/2-1-medizinisch-wissenschaftliche-dokumentation",
            collapsed: true,
            items: [
              { text: "2.1.1 Algorithmen", link: "/2-evidenzsammlung/2-1-medizinisch-wissenschaftliche-dokumentation/2-1-1-algorithmen" },
              { text: "2.1.2 Sonstige Studienergebnisse", link: "/2-evidenzsammlung/2-1-medizinisch-wissenschaftliche-dokumentation/2-1-2-sonstige-studienergebnisse" },
            ],
          },
        ],
      },
      {
        text: "3 Beispiel neues Kapitel",
        link: "/3-beispiel-neues-kapitel",
        collapsed: true,
        items: [
          { text: "Unterseite Beispiel", link: "/3-beispiel-neues-kapitel/unterseite-beispiel" },
          { text: "Unterseite Beispiel 2", link: "/3-beispiel-neues-kapitel/unterseite-beispiel-2" },
        ],
      },
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Suchen",
            buttonAriaLabel: "Wiki durchsuchen",
          },
          modal: {
            noResultsText: "Keine Ergebnisse gefunden für",
            resetButtonTitle: "Suche zurücksetzen",
            footer: {
              selectText: "Auswählen",
              navigateText: "Navigieren",
              closeText: "Schließen",
            },
          },
        },
      },
    },
    outline: {
      level: [2, 3],
      label: "Auf dieser Seite",
    },
    editLink: {
      pattern: "https://github.com/Cl3m3-ns/wiki-test/edit/main/docs/:path",
      text: "Diese Seite auf GitHub bearbeiten",
    },
    lastUpdated: {
      text: "Zuletzt aktualisiert",
      formatOptions: {
        dateStyle: "medium",
      },
    },
    docFooter: {
      prev: "Vorherige Seite",
      next: "Nächste Seite",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Cl3m3-ns/wiki-test" },
    ],
    sidebarMenuLabel: "Menü",
    returnToTopLabel: "Nach oben",
    darkModeSwitchLabel: "Darstellung",
    lightModeSwitchTitle: "Helles Design verwenden",
    darkModeSwitchTitle: "Dunkles Design verwenden",
  },
});
