/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"home-desktop": "url('../../public/dk-home-bg.png')",
				"home-mobile": "url('../../public/mb-home-bg.png')",
			},
			colors: {
				main: "#0A0A0A",
				pink: {
					100: "#D2CEDC",
					200: "#D9CDEA",
				},
				accents: {
					purple: "#9740EF",
				},
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				staatliches: ["Staatliches", "cursive"],
			},
		},
	},
	plugins: [],
};
