import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://basesdedatos.dev',
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-dark',
      },
    },
  },
  integrations: [react(), tailwind(), mdx({
    optimize: true,
    syntaxHighlight: 'shiki'
  })]
});