/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
      sans: ['ui-sans-serif', 'system-ui', 'sans-serif', '"Apple Color Emoji"','"Segoe UI Emoji"', 'Segoe UI Symbol','"Noto Color Emoji"'],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    },
		extend: {},
	},
	plugins: [],
}
