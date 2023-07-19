// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify from 'vite-plugin-vuetify'

const url = 'http://localhost:3000/'
const title = 'GrowlShoppe'
const image = 'https://via.placeholder.com/200x200.png'
const shortTitle = 'growlshoppe'
const description = 'Headless Shopify storefront built on Nuxt 3!'

export default defineNuxtConfig({
  app: {
    head: {
      title: title,
      titleTemplate: `%s | ${ title }`,
      // link: [
      //   { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
      //   { rel: "preconnect", href: "https://rsms.me/" },
      //   { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      //   { rel: "canonical", href: url },
      // ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: description,
        },
        { property: "og:site_name", content: title },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: url,
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: image,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: image,
        },
        //Twitter
        { name: "twitter:card", content: "summary_large_image" },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: url,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: image,
        },
      ],
    },
  },
  // ----------------------------------------------------------------------------->>>
  // DO NOT EDIT BELOW THIS MESSAGE! (Advanced Configuration Settings)
  // ----------------------------------------------------------------------------->>>
  debug: true,
  devtools: {
    enabled: true,
  },
  typescript: {
    shim: false
  },
  runtimeConfig: {
    shopifyDomain: '',
    shopifyApiKey: '',
    shopifyApiSecret: '',
    shopifyStorefrontToken: '',
    public: {
    }
  },
  css: [
    '@/assets/scss/main.scss'
  ],
  build: {
    transpile: ['vuetify']
  },
  modules: [
    '@pinia/nuxt',
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // @ts-ignore
        config.plugins.push(vuetify())
      )
    },
  ],
  plugins: [
    '@/plugins/utils.js'
  ]
  // nitro: {
  //   storage: {
  //     redis: {
  //       driver: 'redis',
  //       port: process.env.REDIS_PORT || 6379, // Redis port
  //       host: process.env.REDIS_URL || '127.0.0.1', // Redis host
  //       username: '', // needs Redis >= 6
  //       password: process.env.REDIS_AUTH || '',
  //       db: 0, // Defaults to 0,
  //     }
  //   }
  // },
})
