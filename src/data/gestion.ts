/** Semestres de la gestión (de 2027-A a 2028-A). Los usan las propuestas y la hoja de ruta. */
export const SEMESTRES = ['2027-A', '2027-B', '2028-A'] as const;

export type Semestre = (typeof SEMESTRES)[number];
