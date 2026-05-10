/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#0f766e",
				"primary-dark": "#134e4a",
				"primary-light": "#ccfbf1",
				sweetblack: "#0f172a",
				accent: "#f59e0b",
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(135deg, #0c4a3a 0%, #0f766e 50%, #0d9488 100%)',
			},
		},
	},
	plugins: [],
}
