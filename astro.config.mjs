// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://renatelubaev.kz',
  integrations: [sitemap()],
  build: {
    assets: '_assets',
  },
});
