import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const modules = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/modules' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    video: z.object({
      duration: z.string(),
      url: z.string(),
    })
  })
})

export const collections = { modules };