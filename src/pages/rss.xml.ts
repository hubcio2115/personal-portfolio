import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async (context) => {
	const posts = await getCollection("blog");

	return rss({
		title: "Hubert Kowaslski Personal Blog",
		description:
			"A collection of my personal thoughts about everything web dev.",
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/blog/${post.slug}/`,
		})),
		customData: `<language>en-us</language>`,
	});
};
