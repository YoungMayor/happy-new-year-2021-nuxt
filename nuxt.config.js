import colors from 'vuetify/es5/util/colors'

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - Happy New Year \'22',
        title: 'Welcome',
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

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    loadingIndicator: {
        name: 'rectangle-bounce',
        color: '#e6d798',
        background: '#1a1517'
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/google-fonts',
        '@nuxtjs/google-analytics',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: process.env.NUXT_ENV_BACKEND_URL,
        // credentials: true,
        progress: true,
        headers: {
            common: {
                'X-Requested-With': 'XMLHttpRequest',
                'Accept': 'application/json'
            }
        }
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        icon: {
            fileName: 'icon.jpg'
        },
        meta: {
            name: 'HNY2021',
            author: 'Meyoron Aghogho',
            theme_color: '#1a1517'
        },
        manifest: {
            name: 'Happy New Year \' 2022',
            lang: 'en',
            // useWebmanifestExtension: false,
            short_name: 'hny22',
            background_color: '#1a1517'
        }
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: '#e6d798',
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },

    googleFonts: {
        families: {
            'Slabo 27px': true,
            Roboto: true,
            'Josefin+Sans': true,
            Lobster: true,
            Comfortaa: true,
            Lato: [100, 300],
            Raleway: {
                wght: [100, 400],
                ital: [100]
            },
        },
        preload: true,
        download: true,
        inject: true,
    },

    googleAnalytics: {
        id: process.env.GOOGLE_ANALYTICS_ID,
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}