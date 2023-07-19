import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    defaults,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    // add theme
    theme: {
      defaultTheme: LIGHT_THEME,
      themes: {
        light,
        dark,
      },
      // add color variations
      // variations: {
      //   colors: ['primary', 'secondary'],
      //   lighten: 3,
      //   darken: 3,
      // },
    },
    // Add the custom iconset
    // icons: {
    //   defaultSet: 'custom',
    //   aliases,
    //   sets: {
    //     custom,
    //   },
    // },
  })

  app.vueApp.use(vuetify)
})
