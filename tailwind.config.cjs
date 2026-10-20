/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#1f6b4a",
				"primary-dark": "#0f3f2e",
				"primary-light": "#dcefe3",
				hero: {
					bg: "#ecf4ee",
					fg: "#0f3f2e",
					muted: "#475550",
					accent: "#1f6b4a",
					glow: "#a7d6b7",
				},
				cta: {
					DEFAULT: "#16a34a",
					fg: "#ffffff",
					icon: "#ffffff",
					hover: "#15803d",
				},
				sweetblack: "#0f172a",
				accent: "#f59e0b",
				sand: "#faf7f2",
				whatsapp: "#16a34a",
				"whatsapp-dark": "#15803d",
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Fraunces', 'Georgia', 'serif'],
			},
		},
	},
	plugins: [],
}
