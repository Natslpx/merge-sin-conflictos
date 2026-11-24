/**
 * Rutas internas que respetan la base del sitio. En GitHub Pages el sitio vive en
 * /<repositorio>/, así que ningún enlace interno debe empezar con "/" a secas.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function ruta(camino: string) {
  return `${base}${camino.startsWith('/') ? camino : `/${camino}`}`;
}
