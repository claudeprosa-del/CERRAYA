import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { categoriasConsejo } from './data/consejos';

// Consejos: artículos y respuestas a preguntas de clientes. Se publican desde /admin o con un .md en src/content/consejos.

const consejos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/consejos' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      descripcion: z.string(),
      fecha: z.coerce.date(),
      categoria: z.enum(categoriasConsejo),
      imagen: image().optional(),
      destacado: z.boolean().default(false),
    }),
});

export const collections = { consejos };
