import astro from "eslint-plugin-astro";
import tseslint from "@typescript-eslint/eslint-plugin";

export default [
  {
    ignores: [".astro/**", "dist/**"],
  },
  ...tseslint.configs["flat/strict"],
  ...astro.configs["flat/recommended"],
  {
    files: ["**/*.astro"],
    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
  {
    files: ["**/*.d.ts"],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
];
