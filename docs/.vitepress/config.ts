import { defineConfig } from "vitepress";
import { version } from "../package.json";

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
      light: "/assets/images/brand-default-logo.svg",
      dark: "/assets/images/brand-default-logo-dark.svg",
      alt: "AMPEL-Welle",
    },
    siteTitle: false,
    nav: [
      { text: "Home", link: "/" },
      {
        text: `v${version}`,
        items: [
          { text: "Änderungsverlauf", link: "https://github.com/Cl3m3-ns/wiki-test/commits/main/" },
          { text: "Entwicklung", link: "https://github.com/Cl3m3-ns/wiki-test/tree/main/" },
        ],
      },
    ],
    sidebar: [
      { text: "Start und Übersicht", link: "0-start-und-uebersicht.md" },
      {
        text: "Technische Bauanleitung",
        link: "/1-bauanleitung",
        collapsed: false,
        items: [
          {
            text: "QMS documentation",
            link: "/1-bauanleitung/",
            collapsed: false,
            items: [
 
                  { text: "1.1 Test Plan", link: "/Open-Source-QM/test-plan.md" },
                  { text: "1.2 Architecture", link: "/Open-Source-QM/architecture.md" },
                  { text: "1.3 Risk Table", link: "/Open-Source-QM/risk-table.md" },
                
            ],
          },
        ],
      },
      {
        text: "Regulatische Bauanleitung",
        link: "/Open-Source-BA/overview.md",
        collapsed: true,
        items: [
          { text: "1. Medical devices (MDR)", link : "/Open-Source-BA/mdr-medical-devices.md"},
          { text: "2. AI Act", link : "/Open-Source-BA/ai-act.md"},
          { text: "3. In-house medical device software (MDSW)", link : "/Open-Source-BA/in-house-mdsw.md"}, 
          { text: "4. Quality management system (QMS)", link : "/Open-Source-BA/quality-management-system.md"},
          { text: "5. Data protection (GDPR)", link : "/Open-Source-BA/data-protection.md"},
          { text: "6. Studies", link : "/Open-Source-BA/studies.md"},
          { text: "7. Open source", link : "/Open-Source-BA/open-source.md"},
          { text: "8. Practical advice", link : "/Open-Source-BA/practical-advice.md"},
          { text: "9. More resources", link : "/Open-Source-BA/resources.md"},
        ],
      },
      {
        text: "Evidenz",
        link: "/3-beispiel-neues-kapitel",
        collapsed: true,
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
