import type { CollectionEntry } from "astro:content";

export function clearTextArea(input: HTMLTextAreaElement) {
	input.setSelectionRange(0, 0);
	input.focus();
	input.value = "";
}

export function parseBlogPosts(posts: CollectionEntry<"blog">[]) {
	return posts
		.map(
			({ id, data }) =>
				`.rw-r--r-- hubertkowalski staff ${data.publishDate.toLocaleDateString()} <a href="/blog/${id}">${id}</a>`,
		)
		.join("\n");
}
