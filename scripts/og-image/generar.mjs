// Genera las imágenes para compartir con Chrome sin interfaz:
// - public/og-image.png (1200×630), la general, desde plantilla.html;
// - public/og/propuestas/<slug>.jpg (1200×630), una por propuesta, desde plantilla-propuesta.html.
// Uso: node scripts/og-image/generar.mjs   (CHROME=/ruta/a/chrome para otro navegador)
// Vuelve a ejecutarlo cada vez que agregues una propuesta o cambies un título.
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, readdirSync, rmSync } from 'node:fs';
import sharp from 'sharp';
import { basename, dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const aqui = dirname(fileURLToPath(import.meta.url));
const raiz = resolve(aqui, '../..');

// Mismos ejes que src/data/ejes.ts, con los colores del tema oscuro (el de la página).
const EJES = {
  academico: { nombre: 'Académico', color: 'color-mix(in srgb, #034da1 65%, white)' },
  oportunidades: { nombre: 'Oportunidades y talento', color: '#78c203' },
  integracion: { nombre: 'Integración y bienestar', color: 'color-mix(in srgb, #034da1 25%, white)' },
  participacion: { nombre: 'Participación y comunicación', color: 'color-mix(in srgb, #78c203 75%, #0b0f14)' },
};

// Chrome sin interfaz deja la zona visible algo más chica que la ventana: se captura
// en una ventana más alta y luego se recorta exactamente a 1200×630.
async function capturar(url, salida, formato) {
  mkdirSync(dirname(salida), { recursive: true });
  const captura = `${salida}.captura.png`;
  execFileSync(process.env.CHROME || 'google-chrome', [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--allow-file-access-from-files',
    '--force-device-scale-factor=1',
    '--window-size=1200,800',
    '--virtual-time-budget=3000',
    `--screenshot=${captura}`,
    url,
  ], { stdio: 'ignore' });
  const recorte = sharp(captura).extract({ left: 0, top: 0, width: 1200, height: 630 });
  await (formato === 'jpg' ? recorte.jpeg({ quality: 86, mozjpeg: true }) : recorte.png()).toFile(salida);
  rmSync(captura);
  console.log(`Imagen generada: ${salida}`);
}

// Lee titulo y eje del frontmatter (formato simple «clave: valor» de las propuestas).
function leerPropuesta(archivo) {
  const texto = readFileSync(archivo, 'utf8');
  const cabecera = texto.split('\n---\n')[0];
  const campo = (clave) => cabecera.match(new RegExp(`^${clave}:\\s*(.+)$`, 'm'))?.[1].trim().replace(/^"(.*)"$/, '$1');
  return { slug: basename(archivo, '.md'), titulo: campo('titulo'), eje: campo('eje') };
}

await capturar(pathToFileURL(resolve(aqui, 'plantilla.html')).href, resolve(raiz, 'public/og-image.png'), 'png');

const carpeta = resolve(raiz, 'src/content/propuestas');
const plantilla = pathToFileURL(resolve(aqui, 'plantilla-propuesta.html'));
for (const archivo of readdirSync(carpeta).filter((f) => f.endsWith('.md'))) {
  const { slug, titulo, eje } = leerPropuesta(resolve(carpeta, archivo));
  const datos = EJES[eje];
  if (!titulo || !datos) throw new Error(`Falta título o eje válido en ${archivo}`);
  const url = new URL(plantilla);
  url.search = new URLSearchParams({ titulo, eje: datos.nombre, color: datos.color }).toString();
  await capturar(url.href, resolve(raiz, `public/og/propuestas/${slug}.jpg`), 'jpg');
}
