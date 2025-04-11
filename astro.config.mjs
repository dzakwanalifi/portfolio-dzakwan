// astro.config.mjs <-- KODE YANG BENAR
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; // <-- Gunakan integrasi Astro
import react from "@astrojs/react";

export default defineConfig({
  integrations: [
    tailwind(),
    react()
  ],
  // Add CSP configuration
  security: {
    csp: {
      directives: {
        'script-src': ["'self'", "'unsafe-inline'"],
        'style-src': ["'self'", "'unsafe-inline'"],
      }
    }
  }
});