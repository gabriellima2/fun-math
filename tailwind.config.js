/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-desktop": "url('../../public/dk-gradient-bg.png')",
				"gradient-mobile": "url('../../public/mb-gradient-bg.png')"
			},
			colors: {
				main: "#090909",
				font:  "#FBFBFB",
				utils: {
					primary: "#0D0D0D",
					secondary: "#111111"
				},
				accents: {
					primary: "#9740EF",
					secondary:  "#D121EE",
				},
			},
			fontFamily: {
				main: ["Noto Sans", "Helvetica", "sans-serif"],
				accent: ["Poppins", "sans-serif"],
			},
			fontSize: {
				"2xs": ".6rem",
			},
			spacing: {
        1: '4px',
				2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        13: '52px',
        14: '56px',
				15: '60px',
        16: '64px',
        17: '68px',
        18: '72px',
        19: '76px',
        20: '80px',
      }
		},
	},
	plugins: [],
};
