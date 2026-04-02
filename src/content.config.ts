import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const juryCollection = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/jury" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    title: z.string(),
    achievements: z.array(z.string()),
    bio: z.string().optional(),
    location: z.string(),
    image: z.string(),
  }),
});

const pagesCollection = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/pages" }),
  schema: z.any()
});

const settingsCollection = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/settings" }),
  schema: z.any()
});

const customPagesCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/custom_pages" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string().optional(),
  })
});

export const collections = {
  jury: juryCollection,
  pages: pagesCollection,
  settings: settingsCollection,
  custom_pages: customPagesCollection,
};
