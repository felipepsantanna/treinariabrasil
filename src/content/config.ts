import { defineCollection, z } from 'astro:content';

const platforms = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    status: z.enum(['draft', 'published']),
    featured: z.boolean(),
    name: z.string(),
    logo: z.string(),
    rating: z.number().nullable(),
    reviewsCount: z.number().nullable().optional(),
    category: z.string(),
    badge: z.string().nullable(),
    tags: z.array(z.string()),
    pricing: z.object({
      min: z.number().nullable(),
      max: z.number().nullable(),
      currency: z.enum(['USD', 'BRL']),
      unit: z.string(),
      displayLabel: z.string().nullable(),
    }),
    affiliateUrl: z.string(),
    summary: z.string(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    technicalRequirements: z.object({
      duration: z.string().nullable(),
      format: z.string().nullable(),
      hands: z.string().nullable(),
      zoom: z.string().nullable(),
      compatiblePhones: z.object({
        iphone: z.string().nullable(),
        pixel: z.string().nullable(),
        galaxyS: z.string().nullable(),
      }),
    }),
    payment: z.object({
      minWithdrawal: z.string().nullable(),
      avgTime: z.string().nullable(),
      methods: z.array(z.string()),
    }),
    bonuses: z.array(z.object({ label: z.string(), value: z.string() })),
    support: z.object({
      channel: z.string().nullable(),
      active: z.boolean(),
    }),
    signupSteps: z.array(z.string()),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
  }),
});

const vagas = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    platformId: z.string(),
    platformName: z.string(),
    title: z.string(),
    status: z.enum(['aberta', 'fechada', 'em_breve']),
    category: z.string(),
    remuneration: z.string(),
    currency: z.enum(['USD', 'BRL']),
    spots: z.string().optional(),
    updatedAt: z.string(),
    requirements: z.array(z.string()),
    description: z.string(),
    applyUrl: z.string(), // Utiliza o link de afiliado da plataforma correspondente
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Equipe Treinar IA Brasil'),
    category: z.string(),
    tags: z.array(z.string()),
    readingTime: z.string().default('5 min'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { platforms, vagas, blog };
