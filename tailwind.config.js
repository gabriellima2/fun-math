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
				"exercise-desktop": "url('../../public/dk-exercises-bg.png')",
				"exercise-mobile": "url('../../public/mb-exercises-bg.png')"
			},
			colors: {
				main: "#0A0A0A",
				pink: {
					100: "#D2CEDC",
					200: "#D9CDEA",
				},
				util: "#171717B3",
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
					pink: {
						100: "#DCB0F0",
						900: "#D2278E",
					},
				},
				canvas: {
					area: "#141414",
					tools: "#171717",
				},
			},
			fontFamily: {
				main: ["Noto Sans", "sans-serif"],
				accent: ["Coda, cursive"],
			},
			fontSize: {
				"2xs": ".6rem",
			},
			gridTemplateColumns: {
				2: "repeat(2, minmax(230px, 340px))",
			},
			gridTemplateRows: {
				4: "repeat(4, minmax(auto, 160px))",
			},
		},
	},
	plugins: [],
};
