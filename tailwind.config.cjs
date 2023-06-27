/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-body': '#282828',
        'dark-text': '#ebdbb2',
        'dark-caret': '#fe8019',

        'light-body': '#fbf1c7',
        'light-text': '#3c3836',
        'light-caret': '#d65d0e',
      },
      fontFamily: {
        sans: ['JetBrainsMono', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
