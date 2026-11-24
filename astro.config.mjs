// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // PENDIENTE: URL definitiva del despliegue (Vercel o Netlify), necesaria para Open Graph.
  // site: 'https://…',
  vite: {
    plugins: [tailwindcss()],
  },
});
