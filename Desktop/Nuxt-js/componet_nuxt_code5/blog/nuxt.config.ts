// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link:[{ rel: "stylesheet" ,href:"css/style.css"}],
      script: [{ src: "js/main.js", body: true }],
    }
  }


})
