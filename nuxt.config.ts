// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
    devtools: {enabled: true},
    typescript: {
        typeCheck: true,
    },
    srcDir: "src/",
    dir: {public: path.join(__dirname, "public")},
    //@ts-ignore remove Type instantiation is excessively deep and possibly infinite warning
    modules: [
        "@nuxtjs/i18n",
        "@pinia/nuxt",
        "@vee-validate/nuxt",
        "@nuxtjs/color-mode",
        "@nuxt/image",
        "@nuxtjs/seo",
        "@nuxt/eslint",
    ],
    eslint: {
        checker: true,
    },
    i18n: {
        locales: [
            {
                code: "en",
                iso: "en-US",
                name: "English",
            },
            {
                code: "fr",
                iso: "fr-FR",
                name: "Français",
            },
        ],
        defaultLocale: "en",
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "i18n_redirected",
            redirectOn: "root", // recommended
        },
        vueI18n: path.join(__dirname, "i18n.config.ts"), // if you are using custom path, default
    },
    app: {
        rootId: "wrapper",
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            titleTemplate: "%siteName %separator %s",
        },
    },
    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL || "https://localhost:8000",
            backendUrl: process.env.BACKEND,
            apiUrl: process.env.API_URL,
            sentry: {
                dsn: process.env.SENTRY_DSN || "",
                environment: process.env.SENTRY_ENVIRONMENT || "development",
            },
        },
    },
    site: {
        url: process.env.BASE_URL || "https://localhost:8000",
        name: "Picasso Houessou",
        description: "I am a Software Engineer with 4 years of experience",
    },
    seo: {
        fallbackTitle: true,
    },
});
