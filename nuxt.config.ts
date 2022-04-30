import { defineNuxtConfig } from "nuxt";
import eslintPlugin from "vite-plugin-eslint"

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    buildModules: [
        // pinia plugin - https://pinia.esm.dev
        "@pinia/nuxt",
    ],
    build: {
        transpile: ['@heroicons/vue'],
    },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    vite: {
        logLevel: "info",
        optimizeDeps: {
            include: [
                '@headlessui/vue', '@heroicons/vue/solid', '@heroicons/vue/outline', 'vue', 'pinia', 'ufo'
            ]
        },
        plugins: [
            eslintPlugin()
        ]
    },
    components: {
        dirs: [
          '~/components',
          {
            path: '~/types',
            extensions: ['ts'],
            prefix: ''
          }
        ]
      }
});
