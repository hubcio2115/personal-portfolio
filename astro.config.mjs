import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"@components": fileURLToPath(
					new URL("./src/components", import.meta.url),
				),
				"@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
				"~": fileURLToPath(new URL("./src", import.meta.url)),
			},
		},
	},
	site: "https://personal-portfolio-one-tan.vercel.app/",
});
