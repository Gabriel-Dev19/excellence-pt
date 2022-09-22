export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Excellence - Agência de detectives privados',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A Excellence Agência de investigação é uma empresa focada em fornecer o melhor serviço de investigação de Portugal! Fornecemos serviços de detective privado | Investigação empresarial | Investigação conjugal | Localização de pessoas desaparecidas' },
      { name: 'theme-color', content: '#eb4d4b' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#eb4d4b' },
      { name: 'msapplication-navbutton-color', content: '#eb4d4b' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css', integrity: 'sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p', crossorigin: 'anonymous' },
      { href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css', rel: 'stylesheet' }
    ],
    script: [
      {
        type: 'module',
        src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'
      },
      {
        nomodule: '',
        src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://excellencedetectives.pt/'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  router: {
    scrollBehavior () {}
  },

  loading: {
    color: '#00d86c',
    height: '3px',
    continuous: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
