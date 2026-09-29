import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://treinariabrasil.com.br',
  output: 'static',
  redirects: {
    '/plataformas/toloka': '/plataformas',
    '/plataformas/mindrift': '/plataformas',
    '/plataformas/placeholder-6': '/plataformas',
    '/plataformas/placeholder-7': '/plataformas',
    '/plataformas/placeholder-8': '/plataformas',
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
});
