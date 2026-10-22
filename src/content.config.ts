import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z
    .object({
      publishDate: z.date().optional(),
      updateDate: z.date().optional(),
      draft: z.boolean().optional(),

      title: z.string(),
      excerpt: z.string().optional(),
      image: z.string().optional(),
      /** Alternative text for the cover image. Leave empty for decorative stock photos. */
      imageAlt: z.string().optional(),

      category: z.string().optional(),
      tags: z.array(z.string()).optional(),
      author: z.string().optional(),
      /** Fonte primaria ufficiale (per citation / isBasedOn). */
      /** Fonte primaria ufficiale: obbligatoria per le news (non per 'Circolari Studio'). */
      source: z.object({ name: z.string(), url: z.url() }).optional(),
      /** PDF della circolare in public/circolari/ (es. /circolari/2026-01.pdf). */
      pdf: z.string().optional(),
      /** Domande frequenti: mostrate a fine articolo e come FAQPage JSON-LD. */
      faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),

      metadata: metadataDefinition(),
    })
    .superRefine((d, ctx) => {
      if (d.category !== 'Circolari Studio' && !d.source) {
        ctx.addIssue({ code: 'custom', path: ['source'], message: 'source {name, url} obbligatoria per le news' });
      }
    }),
});

export const collections = {
  post: postCollection,
};
