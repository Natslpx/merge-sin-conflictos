import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { EJES_IDS } from './data/ejes';
import { SEMESTRES } from './data/gestion';

const propuestas = defineCollection({
  // El nombre del archivo es el slug de la URL.
  loader: glob({ pattern: '**/*.md', base: './src/content/propuestas' }),
  schema: z.object({
    titulo: z.string().min(1),
    eje: z.enum(EJES_IDS),
    resumen: z
      .string()
      .min(1)
      .max(140, { message: 'El resumen no puede pasar de 140 caracteres.' }),
    orden: z.number().int(),
    plazo: z.string().optional(),
    pasos: z.array(z.string()).optional(),
    // Hoja de ruta: semestre en que empieza y si se repite cada semestre.
    inicio: z.enum(SEMESTRES).optional(),
    recurrente: z.boolean().default(false),
  }),
});

const equipo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/equipo' }),
  schema: ({ image }) =>
    z.object({
      nombre: z.string().min(1),
      nombre_corto: z.string().min(1),
      apodo: z.string().optional(),
      cargo: z.enum(['Presidenta', 'Vicepresidente']),
      ciclo: z.string().optional(),
      // true mientras la presentación sea provisional (se muestra PENDIENTE).
      provisional: z.boolean().default(false),
      orden: z.number().int(),
      // Ruta relativa al .md, por ejemplo: ../../assets/equipo/natalie-lazo.jpg
      foto: image().optional(),
    }),
});

export const collections = { propuestas, equipo };
