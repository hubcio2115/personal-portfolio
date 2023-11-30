import type { CollectionEntry } from "astro:content";

export function clearTextArea(input: HTMLTextAreaElement) {
	input.setSelectionRange(0, 0);
	input.focus();
	input.value = "";
}

export function toggleTheme(theme: "light" | "dark"): "light" | "dark" {
	if (theme === "dark") {
		document.documentElement.classList.remove("dark");
		localStorage.setItem("theme", "light");
		return "light";
	} else {
		document.documentElement.classList.add("dark");
		localStorage.setItem("theme", "dark");
		return "dark";
	}
}

export function parseBlogPosts(posts: CollectionEntry<"blog">[]) {
	return posts
		.map(
			({ id, data }) =>
				`.rw-r--r-- hubertkowalski staff ${data.publishDate.toLocaleDateString()} <a href="/blog/${id}">${id}</a>`,
		)
		.join("\n");
}
