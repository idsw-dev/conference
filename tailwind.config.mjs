/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: "1rem"
		},
		extend: {
			colors: {
				primary: "rgb(var(--color-primary) / <alpha-value>)",
				text: "rgb(var(--color-text) / <alpha-value>)",
				dark: "rgb(var(--color-dark) / <alpha-value>)",
			}
		}
	},
	plugins: [],
}
