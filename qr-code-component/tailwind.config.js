/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'light-gray': 'var(--light-gray)',
				'grayish-blue': 'var(--grayish-blue)',
				'dark-blue': 'var(--dark-blue)',
			},
		},
		fontFamily: {
			custom: ['Outfit', 'sans-serif'],
		},
	},
	plugins: [],
}
