import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  const posts = await getCollection("blog");

  return rss({
    title: "Hubert Kowaslski Personal Blog",
    description:
      "A collection of my personal thoughts about everything web dev.",
    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
};
