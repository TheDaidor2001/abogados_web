/** @type {import('tailwindcss').Config} */


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			fontFamily: {
			heebo: ["Heebo", "sans-serif"],
			maitree: ["Maitree", "serif"],
			overpass: ["Overpass Variable", "sans-serif"],
      },
		},
	},
	plugins: [require('flowbite/plugin')],
}
