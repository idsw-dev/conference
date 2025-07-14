import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2.5rem",
      screens: {
        xl: "1272px",
        lg: "1000px",
        md: "768px",
      },
    },
    extend: {
      transitionProperty: {
        "max-height": "max-height",
      },
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        lightblue: "rgb(var(--color-lightblue) / <alpha-value>)",
        body: "rgb(var(--color-body) / <alpha-value>)",
        "primary-dark": "rgb(var(--color-primary-dark) / <alpha-value>)",
      },
    },
    fontFamily: {
      sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
