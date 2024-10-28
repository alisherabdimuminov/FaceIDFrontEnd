// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: false },
	modules: [
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxtjs/color-mode'
	],

	colorMode: {
		classSuffix: "",
		classPrefix: "",
		preference: "dark",
	},

	runtimeConfig: {
		public: {
			api: "https://fc.uzfi.uz/api/v1/",
			// api: "http://localhost:8000/api/v1/",
		}
	},
});