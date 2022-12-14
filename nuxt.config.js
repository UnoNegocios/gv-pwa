export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'La televisión como siempre debió ser.',
    titleTemplate: 'GAMAVISION | %s',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'La televisión como siempre debió ser.'
      },

      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@gamavisionmx' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://www.gamavision.com/'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'GAMAVISION'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'La televisión como siempre debió ser.'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://gamavision.com/logo.png'
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://nuxtjs.org'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'GAMAVISION'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'La televisión como siempre debió ser.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://gamavision.com/logo.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://gamavision.com/logo.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'GAMAVISION'
      }
    ],
    // canonical
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `https://www.gamavision.com/`
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-agile'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-agile'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      }
    }
  }
}
