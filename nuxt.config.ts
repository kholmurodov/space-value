export default defineNuxtConfig({
  app: {
    head: {
      title: '(주)공간과가치',
      link: [{ rel: 'icon', type: 'image/png', href: "/icon.png" }],

      script: [
        { 'src': '/js/jquery.min.js', tagPosition: 'bodyClose' },
        { 'src': '/js/owl-carousel.js', tagPosition: 'bodyClose' },
        { 'src': '/js/animation.js', tagPosition: 'bodyClose' },
        { 'src': '/js/imagesloaded.js', tagPosition: 'bodyClose' },
        { 'src': '/js/templatemo-custom.js', tagPosition: 'bodyClose' },
      ],
    },
  },

  css: [
    '~/assets/styles/main.scss',
  ],

  ssr: false,

  plugins: [
    '~/plugins/ckeditor.ts'
  ],

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


  modules: ['@vesp/nuxt-fontawesome', '@nuxtjs/i18n', '@pinia/nuxt'],

  i18n: {
    // Module Options
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    defaultLocale: "kr", // Default Language
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true
    },
    locales: [
      { code: "kr", iso: "kr-KR", file: "kr.json" },
      { code: "en", iso: "en-US", file: "en.json" },
    ],
  },

  fontawesome: {
    icons: {
      solid: ['phone', 'calendar', 'user', 'folder', "pen-to-square", "message", "clock"],
    }
  },

  compatibilityDate: '2024-11-19'
})