import type { CollectionEntry } from "astro:content";

export function getTheme() {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme"))
    return localStorage.getItem("theme");

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";

  return "light";
}

export function setTheme(theme: "light" | "dark") {
  switch (theme) {
    case "light":
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.documentElement.style.colorScheme = "light";
      localStorage.setItem("theme", "light");
      break;

    case "dark":
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.style.colorScheme = "dark";
      localStorage.setItem("theme", "dark");
      break;
  }
}

export function parseBlogPosts(posts: CollectionEntry<"blog">[]) {
  return posts
    .map(
      ({ id, data }) =>
        `.rw-r--r-- hubertkowalski staff ${data.pubDate.toLocaleDateString()} <a href="/blog/${id}">${id}</a>`,
    )
    .join("\n");
}
