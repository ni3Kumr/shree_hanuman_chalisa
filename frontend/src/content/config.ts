import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const chalisa = defineCollection({
  loader: glob({ base: './src/content/chalisa', pattern: '**/*.md' }),
  schema: z.object({ title: z.string(), description: z.string(), updated: z.date() })
});

export const collections = { chalisa };
