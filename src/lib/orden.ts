import type { CollectionEntry } from 'astro:content';
import { EJES_IDS } from '../data/ejes';

type Propuesta = CollectionEntry<'propuestas'>;

/**
 * Orden único de las propuestas en todo el sitio: primero por eje (en el orden de `ejes.ts`)
 * y, dentro de cada eje, por el campo `orden`. La lista y los enlaces anterior/siguiente lo usan.
 */
export function ordenarPropuestas(propuestas: Propuesta[]): Propuesta[] {
  return [...propuestas].sort(
    (a, b) => EJES_IDS.indexOf(a.data.eje) - EJES_IDS.indexOf(b.data.eje) || a.data.orden - b.data.orden,
  );
}
