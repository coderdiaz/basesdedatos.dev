import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://basesdedatos.dev/',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwind()],
  },
  integrations: [react(), mdx({
    optimize: true,
  })]
});