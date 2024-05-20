import { transform } from 'typescript'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				Orange: '#52528C',
				BGColor: '#031522',
				Gray: '#ccc',
				White: '#fff'
			},
			fontFamily: {
				Poppins: ['Poppins'],
				Oswald: ['Oswald']
			},
			animation: {
				'loop-scroll': 'loop-scroll 7s linear infinite',
				Zoom: 'Zoom 2s linear infinite'
			},
			keyframes: {
				'loop-scroll': {
					from: { transform: 'translateX(100%)' },
					to: { transform: 'translateX(-110%)' }
				},
				Zoom: {
					from: { transform: 'scale(.6)' },
					to: { transform: 'scale(1)' }
				}
			}
		}
	},
	plugins: []
}
