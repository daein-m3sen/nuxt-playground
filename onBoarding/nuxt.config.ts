export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  build: {
    transpile: ["vuetify"],
  },
});