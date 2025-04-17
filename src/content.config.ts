import { glob } from 'astro/loaders';
import { defineCollection, z, type ImageFunction } from 'astro:content';

const seoSchema = (image: ImageFunction) =>
  z.object({
    title: z.string(),
    description: z.string(),
    type: z.string().optional(),
    image: image().optional(),
    keywords: z.string().optional(),
    canonicalUrl: z.string(),
  });

const modules = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/modules' }),
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
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().default(false),
      title: z.string(),
      featuredImage: image().optional(),
      publishedAt: z.date().nullable(),
      seo: seoSchema(image).optional(),
    }),
});

const courseModules = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/course' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    items: z.array(z.object({
      title: z.string(),
      description: z.string(),
      video: z.object({
        duration: z.string(),
        url: z.string(),
      })
    }))
  })
});

export const collections = { modules, articles, courseModules };