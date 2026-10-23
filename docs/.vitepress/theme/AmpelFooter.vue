<script setup lang="ts">
import { withBase } from "vitepress";
import { useSidebar } from "vitepress/theme";

const { hasSidebar } = useSidebar();
</script>

<template>
  <footer class="ampel-footer" :class="{ 'has-sidebar': hasSidebar }">
    <div class="ampel-footer__inner">
      <div class="ampel-footer__projects">
        <a
          href="https://www.uniklinikum-leipzig.de/einrichtungen/ampel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="AMPEL project page of University Hospital Leipzig"
        >
          <img
            class="ampel-footer__ampel-logo ampel-footer__ampel-logo--light"
            :src="withBase('/assets/images/footer-ampel-logo.svg')"
            alt="AMPEL"
          />
          <img
            class="ampel-footer__ampel-logo ampel-footer__ampel-logo--dark"
            :src="withBase('/assets/images/footer-ampel-logo-dark.svg')"
            alt=""
            aria-hidden="true"
          />
        </a>
      </div>
      <nav class="ampel-footer__legal" aria-label="Legal information">
        <a :href="withBase('/impressum.html')">Legal notice</a>
        <a :href="withBase('/datenschutz.html')">Privacy policy</a>
      </nav>
    </div>
  </footer>
</template>
