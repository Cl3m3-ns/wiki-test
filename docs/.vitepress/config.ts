import { defineConfig } from "vitepress";
import { version } from "../package.json";

function wikiLinks(md: any) {
  const wikiTargets: Record<string, string> = {
    architecture: "architecture.md",
    "risk-table": "risk-table.md",
  };

  md.core.ruler.before("block", "escape_numeric_comparisons", (state: any) => {
    state.src = state.src.replace(/<(\s*\d)/g, "&lt;$1");
  });

  md.inline.ruler.before("image", "wiki_image", (state: any, silent: boolean) => {
    const start = state.pos;
    if (state.src.slice(start, start + 3) !== "![[") return false;
    const end = state.src.indexOf("]]", start + 3);
    if (end < 0) return false;
    if (!silent) {
      const filename = state.src.slice(start + 3, end).trim();
      const token = state.push("image", "img", 0);
      token.attrs = [
        ["src", `assets/${filename}`],
        ["alt", filename],
      ];
      token.children = [];
      token.content = filename;
    }
    state.pos = end + 2;
    return true;
  });

  md.inline.ruler.before("html_inline", "literal_comparison", (state: any, silent: boolean) => {
    const start = state.pos;
    if (state.src.charCodeAt(start) !== 0x3c || !/\d/.test(state.src[start + 1] || "")) return false;
    if (!silent) {
      const token = state.push("text", "", 0);
      token.content = "<";
    }
    state.pos += 1;
    return true;
  });

  md.inline.ruler.before("emphasis", "wiki_link", (state: any, silent: boolean) => {
    const start = state.pos;
    if (state.src.charCodeAt(start) !== 0x5b || state.src.charCodeAt(start + 1) !== 0x5b) return false;

    const end = state.src.indexOf("]]", start + 2);
    if (end < 0) return false;

    const value = state.src.slice(start + 2, end);
    const [target, label] = value.split("|", 2).map((part) => part.trim());
    if (!target) return false;
    if (silent) return true;

    const display = label || target;
    const imageTarget = /\.(png|jpe?g|gif|svg|webp)$/i.test(target)
      ? `assets/${target}`
      : undefined;
    const destination = wikiTargets[target.replace(/\.md$/, "")] || imageTarget;
    if (!destination) {
      const text = state.push("text", "", 0);
      text.content = display;
      state.pos = end + 2;
      return true;
    }

    const open = state.push("link_open", "a", 1);
    open.attrs = [["href", destination]];
    const text = state.push("text", "", 0);
    text.content = display;
    state.push("link_close", "a", -1);
    state.pos = end + 2;
    return true;
  });
}

const configuredBase = process.env.DOCS_BASE || "/";
const base = `/${configuredBase.replace(/^\/+|\/+$/g, "")}/`.replace("//", "/");
const siteOrigin = process.env.DOCS_ORIGIN || "https://cl3m3-ns.github.io";
const canonicalUrl = new URL(base, `${siteOrigin}/`).href;

export default defineConfig({
  markdown: {
    // Comparison values such as `<90%` in tables must stay Markdown text,
    // not be interpreted as raw HTML by Vue's template compiler.
    html: false,
    config: (md) => {
      md.options.html = false;
      md.use(wikiLinks);
    },
  },
  lang: "en-US",
  title: "AMPEL Wiki",
  titleTemplate: ":title | AMPEL Wiki",
  description: "A guide for healthcare institutions implementing and operating AMPEL as an in-house solution.",
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
    ["meta", { property: "og:locale", content: "en_US" }],
    ["meta", { property: "og:site_name", content: "AMPEL Wiki" }],
    ["meta", { property: "og:title", content: "AMPEL Wiki – Implementation Guide" }],
    ["meta", { property: "og:description", content: "An implementation guide and evidence base for the AMPEL project" }],
    ["meta", { property: "og:url", content: canonicalUrl }],
    ["meta", { name: "twitter:card", content: "summary" }],
    ["meta", { name: "twitter:title", content: "AMPEL Wiki – Implementation Guide" }],
    ["meta", { name: "twitter:description", content: "An implementation guide and evidence base for the AMPEL project" }],
  ],
  themeConfig: {
    logo: {
      light: "/assets/images/brand-default-logo.svg",
      dark: "/assets/images/brand-default-logo-dark.svg",
      alt: "AMPEL logo",
    },
    siteTitle: false,
    nav: [
      { text: "Home", link: "/" },
      {
        text: `v${version}`,
        items: [
          { text: "Changelog", link: "https://github.com/Cl3m3-ns/wiki-test/commits/main/" },
          { text: "Source code", link: "https://github.com/Cl3m3-ns/wiki-test/tree/main/" },
        ],
      },
    ],
    sidebar: [
      { text: "Start and overview", link: "0-start-und-uebersicht.md" },
      {
        text: "Technical implementation guide",
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
        text: "Regulatory implementation guide",
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
        text: "Evidence",
        link: "/3-beispiel-neues-kapitel",
        collapsed: true,
        items: [
                   {
            text: "2.1 Medical and scientific documentation",
            link: "/2-evidenzsammlung/2-1-medizinisch-wissenschaftliche-dokumentation",
            collapsed: true,
         items: [
              { text: "2.1.1 Algorithms", link: "/2-evidenzsammlung/2-1-medizinisch-wissenschaftliche-dokumentation/2-1-1-algorithmen" },
              { text: "2.1.2 Other study results", link: "/2-evidenzsammlung/2-1-medizinisch-wissenschaftliche-dokumentation/2-1-2-sonstige-studienergebnisse" },
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
            buttonText: "Search",
            buttonAriaLabel: "Search the wiki",
          },
          modal: {
            noResultsText: "No results for",
            resetButtonTitle: "Reset search",
            footer: {
              selectText: "Select",
              navigateText: "Navigate",
              closeText: "Close",
            },
          },
        },
      },
    },
    outline: {
      level: [2, 3],
      label: "On this page",
    },
    editLink: {
      pattern: "https://github.com/Cl3m3-ns/wiki-test/edit/main/docs/:path",
    text: "Edit this page on GitHub",
    },
    lastUpdated: {
      text: "Last updated",
      formatOptions: {
        dateStyle: "medium",
      },
    },
    docFooter: {
      prev: "Previous page",
      next: "Next page",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Cl3m3-ns/wiki-test" },
    ],
    sidebarMenuLabel: "Sidebar menu",
    returnToTopLabel: "Return to top",
    darkModeSwitchLabel: "Appearance",
    lightModeSwitchTitle: "Use light theme",
    darkModeSwitchTitle: "Use dark theme",
  },
});
