const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				gruvbox: {
					100: "#ddc7a1",
					200: "#d4be98",
					300: "#665c54",
					400: "#5b534d",
					500: "#504945",
					600: "#46413e",
					700: "#3c3836",
					800: "#32302f",
					900: "#252423",
				},
			},
			fontFamily: {
				sans: ["JetBrainsMono", ...defaultTheme.fontFamily.sans],
			},
			typography: ({ theme }) => ({
				gruvbox: {
					css: {
						"--tw-prose-body": theme("colors.gruvbox[800]"),
						"--tw-prose-headings": theme("colors.gruvbox[900]"),
						"--tw-prose-lead": theme("colors.gruvbox[700]"),
						"--tw-prose-links": theme("colors.gruvbox[900]"),
						"--tw-prose-bold": theme("colors.gruvbox[900]"),
						"--tw-prose-counters": theme("colors.gruvbox[600]"),
						"--tw-prose-bullets": theme("colors.gruvbox[400]"),
						"--tw-prose-hr": theme("colors.gruvbox[300]"),
						"--tw-prose-quotes": theme("colors.gruvbox[900]"),
						"--tw-prose-quote-borders": theme("colors.gruvbox[300]"),
						"--tw-prose-captions": theme("colors.gruvbox[700]"),
						"--tw-prose-code": theme("colors.gruvbox[900]"),
						"--tw-prose-pre-code": theme("colors.gruvbox[100]"),
						"--tw-prose-pre-bg": theme("colors.gruvbox[900]"),
						"--tw-prose-th-borders": theme("colors.gruvbox[300]"),
						"--tw-prose-td-borders": theme("colors.gruvbox[200]"),
						"--tw-prose-invert-body": theme("colors.gruvbox[200]"),
						"--tw-prose-invert-headings": theme("colors.gruvbox[100]"),
						"--tw-prose-invert-lead": theme("colors.gruvbox[300]"),
						"--tw-prose-invert-links": theme("colors.gruvbox[100]"),
						"--tw-prose-invert-bold": theme("colors.gruvbox[100]"),
						"--tw-prose-invert-counters": theme("colors.gruvbox[400]"),
						"--tw-prose-invert-bullets": theme("colors.gruvbox[600]"),
						"--tw-prose-invert-hr": theme("colors.gruvbox[700]"),
						"--tw-prose-invert-quotes": theme("colors.gruvbox[100]"),
						"--tw-prose-invert-quote-borders": theme("colors.gruvbox[700]"),
						"--tw-prose-invert-captions": theme("colors.gruvbox[400]"),
						"--tw-prose-invert-code": theme("colors.gruvbox[100]"),
						"--tw-prose-invert-pre-code": theme("colors.gruvbox[300]"),
						"--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
						"--tw-prose-invert-th-borders": theme("colors.gruvbox[600]"),
						"--tw-prose-invert-td-borders": theme("colors.gruvbox[700]"),
					},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
