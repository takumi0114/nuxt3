// ttps://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['assets/css/style.css'],
  app: {
    pageTransition: false,
    head: {
      title: 'Nuxt3 practice',
      link: [{ rel: 'icon', href: '/icon-green.png'}]
    }
  },
  modules: [
    "@pinia/nuxt"
  ]
})
