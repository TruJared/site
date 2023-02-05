// Import utilities from `astro:content`
// zod
import {z, defineCollection } from "astro:content";
// Define a schema for each collection you'd like to validate.
const postsCollection = defineCollection({
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string()),
      canonicalURL: z.string().url(),
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};
