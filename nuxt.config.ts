// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            script: [
                {
                    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
                    type: "text/javascript",
                },
            ],
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/_colors.scss" as *;'
                }
            }
        }
    },
    css: ["bootstrap/dist/css/bootstrap.min.css", '~/assets/fonts/onest.css'],
    components: true,
    modules: ['@pinia/nuxt'],
})
