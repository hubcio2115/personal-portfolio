/** @import { Config } from "prettier" */

/** @type {Config} */
module.exports = {
	plugins: [
		"@trivago/prettier-plugin-sort-imports",
		"prettier-plugin-astro",
		"prettier-plugin-tailwindcss",
	],

	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],

	semi: true,
	useTabs: true,
	tabWidth: 2,

	singleQuote: false,
	trailingComma: "all",

	printWidth: 80,
};
