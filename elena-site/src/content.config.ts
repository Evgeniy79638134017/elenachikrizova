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

const conditions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    service: z.enum(['endokrinologiya', 'girudoterapiya', 'nutriciologiya']),
    // SEO
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    // Контент
    symptoms: z.array(z.string()).optional(),
    riskFactors: z.array(z.string()).optional(),
    tests: z.array(z.string()).optional(),
    // Связи
    relatedConditions: z.array(z.string()).optional(),
    // Мета
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, cases, conditions };
