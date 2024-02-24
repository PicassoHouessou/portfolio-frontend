// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript
      : {
    typeCheck
        : true
  },
  srcDir: 'src/',
  modules: [
      '@nuxtjs/i18n',
    "@pinia/nuxt",    '@vee-validate/nuxt',
  ],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
app:{
  rootId: 'wrapper'
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'https://localhost:8000/api',
      sentry: {
        dsn: process.env.SENTRY_DSN||'',
        environment: process.env.SENTRY_ENVIRONMENT||'development',
      }
    },
  },

  })