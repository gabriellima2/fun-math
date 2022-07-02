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
				black: {
					100: "#292929",
					200: "#262626",
					300: "#232323",
					400: "#202020",
					500: "#171717",
					600: "#141414",
					700: "#111111",
					800: "#0F0F0F",
					900: "#0A0A0A",
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
