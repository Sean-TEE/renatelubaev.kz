// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://renatelubaev.kz',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "kk", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  build: {
    assets: '_assets',
  },
});
