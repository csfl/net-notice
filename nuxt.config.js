const i18nConfig = require("./i18n/config.js");

module.exports = {
  head: {
    title: "a public notice of Vite",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1, user-scalable=no"},
    ],
    link: [
      {rel: "icon", type: "image/x-icon", href: "https://vite.org/icon.png"}
    ]
  },
  loading: {color: "#7FB2FE"},
  plugins: [{ src: "~/plugins/element-ui.js", ssr: true }],
  build: {
    vendor: ["~/plugins/element-ui.js"],
    babel: {
      "plugins": [["component", {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }]]
    }
  },
  router: {
    middleware: "i18n"
  },
  css: [
  ],
  modules: [
    ["nuxt-i18n", i18nConfig],
  ]
};