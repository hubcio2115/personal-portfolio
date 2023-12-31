import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			config: { applyBaseStyles: false },
		}),
	],
  site: "https://personal-portfolio-one-tan.vercel.app/"
});
