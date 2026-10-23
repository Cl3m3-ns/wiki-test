import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { VPNavBarSearch } from "vitepress/theme";
import { h } from "vue";
import AmpelFooter from "./AmpelFooter.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      "sidebar-nav-before": () => h(VPNavBarSearch),
      "layout-bottom": () => h(AmpelFooter),
    }),
} satisfies Theme;
