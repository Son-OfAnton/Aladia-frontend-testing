import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
	css: ["~/assets/css/tailwind.css"],
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	build: {
		transpile: [
			"@fortawesome/vue-fontawesome",
			"@fortawesome/fontawesome-svg-core",
			"@fortawesome/pro-solid-svg-icons",
			"@fortawesome/pro-regular-svg-icons",
			"@fortawesome/free-brands-svg-icons",
		],
	},
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/storybook",
		[
			"@nuxtjs/google-fonts",
			{
				families: {
					Inter: {
						wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
					},
				},
				display: "swap",
			},
		],
		"nuxt-icon",
	],
	plugins: ["~/plugins/fontawesome.ts"],
});
