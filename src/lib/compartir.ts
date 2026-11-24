/**
 * Dirección pública del sitio en GitHub Pages. Al publicar, Astro la recibe como `site`
 * desde el flujo de despliegue; en local no existe, así que se usa esta para que los enlaces
 * que se comparten (WhatsApp, copiar enlace) apunten siempre a la página publicada.
 */
const URL_PUBLICA = 'https://natslpx.github.io/merge-sin-conflictos/';

/** URL absoluta de una ruta interna (ya pasada por `ruta()`), lista para compartir. */
export function urlPublica(ruta: string, site: URL | undefined) {
  if (site) return new URL(ruta, site).href;
  // En local la base es «/»: la ruta se cuelga de la carpeta del repositorio.
  return new URL(ruta.replace(/^\//, ''), URL_PUBLICA).href;
}

/** Enlace para compartir por WhatsApp con el texto y la URL pública. */
export function enlaceWhatsApp(texto: string, ruta: string, site: URL | undefined) {
  return `https://wa.me/?text=${encodeURIComponent(`${texto} ${urlPublica(ruta, site)}`)}`;
}
