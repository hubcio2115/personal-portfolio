/** @type {import("prettier").Config} */
module.exports = {
	plugins: [
		"@trivago/prettier-plugin-sort-imports",
		"prettier-plugin-tailwindcss",
	],

	semi: true,
	useTabs: true,
	tabWidth: 2,

	singleQuote: false,
	trailingComma: "all",

	printWidth: 80,
};
