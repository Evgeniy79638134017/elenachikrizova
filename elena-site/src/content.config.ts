import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['endokrinologiya', 'girudoterapiya', 'nutriciologiya', 'lifestyle']),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const cases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['endokrinologiya', 'girudoterapiya', 'nutriciologiya']),
    result: z.string(),
    disclaimer: z.string().default('Результаты индивидуальны и зависят от особенностей организма'),
    order: z.number().default(0),
  }),
});

export const collections = { blog, cases };
