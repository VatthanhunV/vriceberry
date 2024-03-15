// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    apiSecret: "1234",
    public: {
      apiBase: "/api",
    },
  },

  modules: ["@nuxt/image", "@element-plus/nuxt"],
  app: {
    head: {
      title: "VRiceberry",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
