import { glob } from 'astro/loaders';
import { defineCollection, z, type ImageFunction } from 'astro:content';

const seoSchema = (image: ImageFunction) => z.object({
  title: z.string(),
  description: z.string(),
  image: image().optional(),
  keywords: z.array(z.string()).optional(),
  canonicalUrl: z.string(),
})

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
});

const articles = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/articles' }),
  schema: ({ image }) => z.object({
    draft: z.boolean(),
    title: z.string(),
    featuredImage: image().optional(),
    publishedAt: z.date().nullable(),
    seo: seoSchema(image).optional()
  })
})

export const collections = { modules, articles };