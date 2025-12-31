// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
    compatibilityDate: '2025-12-31',
    future: {
        compatibilityVersion: 4,
    },
    devtools: {enabled: true},
    typescript: {
        typeCheck: true,
    },
    srcDir: "app/",
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
    routeRules: {
        '/**': {
            headers: {
                'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
                'Content-Security-Policy': [
                    "default-src 'self'",
                    "img-src 'self' data: https:",
                    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
                    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                    // Added data: to allow Base64 encoded fonts
                    "font-src 'self' https://fonts.gstatic.com data:",
                    `connect-src 'self' *.sentry.io ${process.env.BACKEND || 'https://localhost:8000'}`,
                    // PERMISSIVE IFRAME: Allows you to embed any HTTPS website
                    "frame-src 'self' https:",
                    "frame-ancestors 'none'"
                ].join('; '),
                'X-Frame-Options': 'SAMEORIGIN',
                'X-Content-Type-Options': 'nosniff',
                'Referrer-Policy': 'strict-origin-when-cross-origin',
                'Permissions-Policy': 'geolocation=()'
            },
        },
    },
});
