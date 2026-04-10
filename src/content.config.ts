import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const juryCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/jury" }),
  schema: z.object({
    order: z.number().optional(),
    name: z.string(),
    role: z.string(),
    title: z.string(),
    achievements: z.array(z.string()),
    bio: z.string().optional(),
    location: z.string(),
    image: z.string(),
  })
});

const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/pages" }),
  schema: z.object({
    heroEyebrow: z.string().optional(),
    heroTitle: z.string().optional(),
    heroSubtitle: z.string().optional(),
    heroImage: z.string().optional(),
    
    bioLead: z.string().optional(),
    bioText1: z.string().optional(),
    bioText2: z.string().optional(),
    profileImage: z.string().optional(),
    eventPhotos: z.array(z.object({ src: z.string() })).optional(),

    status: z.string().optional(),
    introText: z.string().optional(),
    currentEditionInfo: z.string().optional(),
    statsEvaluated: z.string().optional(),
    statsFormat: z.string().optional(),
  })
});

const settingsCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/settings" }),
  schema: z.object({
    formspreeId: z.string(),
    contactPhone: z.string(),
    contactEmail: z.string(),
    contactAddress: z.string(),
  })
});

const customPagesCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/custom_pages" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string().optional(),
  })
});

const galleryCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/gallery" }),
  schema: z.object({
    title: z.string(),
    year: z.string().optional(),
    description: z.string().optional(),
    image: z.string(),
  })
});

export const collections = {
  jury: juryCollection,
  pages: pagesCollection,
  settings: settingsCollection,
  custom_pages: customPagesCollection,
  gallery: galleryCollection,
};
