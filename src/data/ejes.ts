/**
 * Ejes de las propuestas. Cada eje es una "rama" que hace merge a main (la Escuela).
 * El color apunta a un token definido en src/styles/global.css.
 */
export const EJES_IDS = ['academico', 'oportunidades', 'integracion', 'participacion'] as const;

export type EjeId = (typeof EJES_IDS)[number];

export interface Eje {
  id: EjeId;
  nombre: string;
  /** Variable CSS del color del punto del eje. */
  color: string;
}

export const ejes: Eje[] = [
  { id: 'academico', nombre: 'Académico', color: 'var(--color-eje-academico)' },
  { id: 'oportunidades', nombre: 'Oportunidades y talento', color: 'var(--color-eje-oportunidades)' },
  { id: 'integracion', nombre: 'Integración y bienestar', color: 'var(--color-eje-integracion)' },
  { id: 'participacion', nombre: 'Participación y comunicación', color: 'var(--color-eje-participacion)' },
];

export const ejePorId: Record<EjeId, Eje> = Object.fromEntries(
  ejes.map((eje) => [eje.id, eje]),
) as Record<EjeId, Eje>;
