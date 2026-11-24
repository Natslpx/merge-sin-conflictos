/**
 * Enlace para compartir por WhatsApp. Sin `site` en astro.config.mjs no hay URL absoluta,
 * así que el mensaje se comparte solo con texto hasta que se defina (dato pendiente).
 */
export function enlaceWhatsApp(texto: string, ruta: string, site: URL | undefined) {
  const url = site ? new URL(ruta, site).href : undefined;
  const mensaje = url ? `${texto} ${url}` : texto;
  return { href: `https://wa.me/?text=${encodeURIComponent(mensaje)}`, tieneUrl: Boolean(url) };
}
