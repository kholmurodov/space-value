// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-04-03',
//   devtools: { enabled: true }
// })

export default defineNuxtConfig({
  css: [
    '~/assets/css/animated.css',
    '~/assets/css/templatemo-space-dynamic.css',
    '~/assets/css/owl.css',
    '~/assets/styles/main.scss',
  ],

  ssr: false,

  plugins: [],

  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },

  $development: {
    //
  },

  $env: {
    staging: {
      // 
    }
  },

  modules: ['@vesp/nuxt-fontawesome'],
  fontawesome: {
    icons: {
      solid: ['phone'],
    }
  }
})