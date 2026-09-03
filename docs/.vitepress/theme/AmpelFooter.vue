<script setup lang="ts">
import { withBase } from "vitepress";
</script>

<template>
  <footer class="ampel-footer">
    <div class="ampel-footer__inner">
      <div class="ampel-footer__projects">
        <a
          href="https://www.uniklinikum-leipzig.de/einrichtungen/ampel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="AMPEL-Projektseite des Universitätsklinikums Leipzig"
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
        <a
          href="https://github.com/Cl3m3-ns/wiki-test"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="AMPEL Wiki auf GitHub"
        >
          <img
            class="ampel-footer__github-logo"
            :src="withBase('/assets/images/GitHub_Lockup_Black_Clearspace.svg')"
            alt="GitHub"
          />
        </a>
      </div>
      <nav class="ampel-footer__legal" aria-label="Rechtliche Hinweise">
        <a :href="withBase('/impressum.html')">Impressum</a>
        <a :href="withBase('/datenschutz.html')">Datenschutz</a>
      </nav>
    </div>
  </footer>
</template>
