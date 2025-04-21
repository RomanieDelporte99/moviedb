// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},

    runtimeConfig: {
        public: {
            MOVIE_DB_API_KEY: '',
        }
    },

    modules: [
        '@pinia/nuxt',
        '@primevue/nuxt-module',
        '@nuxtjs/tailwindcss',
    ],
    primevue: {
        components: {
            prefix: 'Movie'
        },
        options: {
            theme: 'none',
        }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    pinia: {
        storesDirs: ['./stores/**', './custom-folder/stores/**']
    },
})