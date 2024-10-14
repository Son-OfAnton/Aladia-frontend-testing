import type { Config } from "tailwindcss/types";
import colors from "tailwindcss/colors";
import { join } from "path";

export default <Partial<Config>>{
	content: [
		join(__dirname, "./components/**/*.{vue,ts}"),
		join(__dirname, "./stories/**/*.{vue,ts}"),
		join(__dirname, "./pages/**/*.{vue,ts}")
	],
	theme: {
		extend: {
			colors: {
				primary: colors.green,
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
