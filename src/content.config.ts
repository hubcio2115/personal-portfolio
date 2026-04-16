import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    readingTime: z.number(),
  }),
});

export const collections = {
  blog: blogCollection,
};
