import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://elenachikrizova.ru',
  output: 'static',
  adapter: vercel(),
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/spasibo') &&
        !page.includes('/anketa') &&
        !page.includes('/privacy') &&
        !page.includes('/terms') &&
        !page.includes('/oferta') &&
        !page.includes('/disclaimer'),
    }),
  ],
  vite: { plugins: [tailwindcss()] }
});
