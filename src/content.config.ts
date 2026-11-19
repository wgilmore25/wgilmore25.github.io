import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    discipline: z.string(),
    context: z.string(),
    period: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    image: z.string(),
    imageAlt: z.string(),
    imageWidth: z.number(),
    imageHeight: z.number(),
    caption: z.string(),
    problem: z.string(),
    role: z.string(),
    methods: z.array(z.string()).min(1),
    outcomes: z.array(z.string()).min(1),
    limitations: z.array(z.string()).min(1),
    sources: z.array(z.string()).min(1),
    gallery: z.array(z.object({
      image: z.string(), alt: z.string(), caption: z.string(),
      width: z.number(), height: z.number(),
    })).default([]),
  }),
});
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(), description: z.string(), date: z.coerce.date(),
    url: z.url(), publication: z.string(),
    image: z.string(), imageAlt: z.string(),
  }),
});
export const collections = { work, writing };

