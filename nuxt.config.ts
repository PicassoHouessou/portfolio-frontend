// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path');
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  typescript
      : {
    typeCheck
        : true
  },
  srcDir: 'src/',
  dir:{public: path.join(__dirname, 'public')
  },
  modules: [
    '@nuxtjs/i18n',
    "@pinia/nuxt",
    '@vee-validate/nuxt',
    '@nuxtjs/color-mode',
    "@nuxt/image"
  ],
  i18n: {
    locales: [
      {
        code: 'en',
         iso: 'en-US',
        name:"English"
      },
      {
        code: 'fr',
          iso: 'fr-FR',
        name:"Français"
      }
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    },
    vueI18n: path.join(__dirname, 'i18n.config.ts') // if you are using custom path, default
  },
app:{
  rootId: 'wrapper'
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'https://localhost:8000',
      apiUrl : process.env.API_URL,
      sentry: {
        dsn: process.env.SENTRY_DSN||'',
        environment: process.env.SENTRY_ENVIRONMENT||'development',
      }
    },
  },
  })