/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#aeded0",
				black: "#000000",
				white: "#ffffff",
			},
		},
	},
	plugins: [],
}
