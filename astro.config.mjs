// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Publicación en GitHub Pages: el flujo de .github/workflows/deploy.yml pasa la URL
// (SITE) y la carpeta del repositorio (BASE) al compilar. En local se usa la raíz.
const env = /** @type {any} */ (globalThis).process?.env ?? {};

export default defineConfig({
  site: env.SITE || undefined,
  base: env.BASE || '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
