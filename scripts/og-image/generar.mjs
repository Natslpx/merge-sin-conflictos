// Genera public/og-image.png (1200×630) a partir de plantilla.html con Chrome sin interfaz.
// Uso: node scripts/og-image/generar.mjs   (CHROME=/ruta/a/chrome para otro navegador)
import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync } from 'node:fs';
import sharp from 'sharp';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const aqui = dirname(fileURLToPath(import.meta.url));
const plantilla = pathToFileURL(resolve(aqui, 'plantilla.html')).href;
const salida = resolve(aqui, '../../public/og-image.png');
mkdirSync(dirname(salida), { recursive: true });
// Chrome sin interfaz deja la zona visible algo más chica que la ventana: se captura
// en una ventana más alta y luego se recorta exactamente a 1200×630.
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
  plantilla,
], { stdio: 'inherit' });

await sharp(captura).extract({ left: 0, top: 0, width: 1200, height: 630 }).png().toFile(salida);
rmSync(captura);

console.log(`Imagen generada: ${salida}`);
