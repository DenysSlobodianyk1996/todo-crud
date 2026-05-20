import Aura from '@primevue/themes/aura'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    port: 4200
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],
  primevue: {
    autoImport: true,
    usePrimeVue: true,
    options: {
      ripple: true,
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'none'
        }
      },
    }
  },
  // nitro: {
  //   prerender: {
  //     crawlLinks: true
  //   }
  // },
  css: [
    'assets/styles/main.scss',
    'primeicons/primeicons.css'
  ],
  pages: true,
})