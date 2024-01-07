/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			Lambo: ['Lambo-icons, sans-serif'],
			sans:['Roboto,Helvetica Neue,Arial'],
		},
		colors: {
			'zinc': '#181818',
			'white':'#ffffff',
			'black':'#000000',
			'gray':{
				100:'#F3F4F6'
			},
			'transparent':'transparent',
		},
		extend: {},
	},
	plugins: [],
}
