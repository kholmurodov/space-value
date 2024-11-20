// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-04-03',
//   devtools: { enabled: true }
// })

export default defineNuxtConfig({


  app: {
    head: {
      title: 'Space&Value',
      link: [{ rel: 'icon', type: 'image/png', href: "/education.png" }],

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
    '~/assets/css/animated.css',
    '~/assets/css/templatemo-space-dynamic.css',
    '~/assets/css/owl.css',
    '~/assets/styles/main.scss',
  ],

  ssr: false,

  plugins: [
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

  modules: ['@vesp/nuxt-fontawesome'],

  fontawesome: {
    icons: {
      solid: ['phone', 'calendar', 'user', 'folder'],
    }
  },

  compatibilityDate: '2024-11-19'
})