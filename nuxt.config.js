import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - 2tcorner_project',
    title: '2tcorner_project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  watchers: {
    webpack: {
      poll: true,
      ignored: /node_modules/, 
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/global.scss",
    "~/assets/css/theme.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    ['vue-currency-filter/nuxt', {
      symbol: 'Rp',
      thousandsSeparator: '.',
      fractionCount: 0,
      fractionSeparator: ',',
      symbolPosition: 'front',
      symbolSpacing: true
    }],
    "vue2-editor/nuxt"
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#E53935',
          disabled: '#F58D74',
          secondary: colors.amber.darken3,
          light: '#FFEBEE'
        }
      },
      treeShake: true,
    }
    
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    hotMiddleware: {
      client: {
        overlay: false, // Optional: Menampilkan error overlay di browser
      },
    },
  },

  auth: {
    strategies: {
      local: {
       
        token: {
          property: 'access_token',
          tokenType: 'bearer',
          global: true,
        },
        user: {
          property: '',
          autoFetch: true
        },
        endpoints: {
          login: { 
            url: process.env.API + '/users/token', 
            method: 'post',
          },
          logout: false,
          user: { 
            url: process.env.API + '/users/me', 
            method: 'get', 
            propertyName: false
          },
        },
      },
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home:'/admin/dashboard'
    },
  },

  publicRuntimeConfig: {
    api: process.env.API || 'http://localhost:8000',
  }
}
