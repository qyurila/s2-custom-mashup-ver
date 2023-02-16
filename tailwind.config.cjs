/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		fontFamily: {
			sans: ["Arial", "sans-serif", "system-ui"],
			display: ["establishRetrosansOTF", "sans-serif"],
		},
	},
	plugins: [
		require("tailwindcss-text-fill-stroke"),
		require("tailwindcss-easing"),
	],
}
