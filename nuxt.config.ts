// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
  ],

  css: ['~/assets/css/fonts.css', '~/assets/css/main.css'],

  tailwindcss: {
    config: {
      darkMode: 'class',
    }
  },

  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  }
});