/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './theme.config.{js,tsx}',
    './src/**/*.{md,mdx,js,tsx}',
    './src/components/**/*.{md,mdx,js,tsx}',
  ],
  theme: {
    ...defaultTheme,
  },
};
