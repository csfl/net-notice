const i18nConfig = require("./i18n/config.js");

module.exports = {
  head: {
    title: "Notice of Vite",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1, user-scalable=no"},
    ],
    link: [
      {rel: "icon", type: "image/x-icon", href: "/icon.png"}
    ],
    script: [
      {src: "https://hm.baidu.com/hm.js?adc53b8240fe5c62d3432d6efb0c1e2f"},
    ]
  },
  loading: {color: "#7FB2FE"},
  plugins: [{ src: "~/plugins/element-ui.js", ssr: true }, "~plugins/ga.js"],
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
    middleware: "i18n",
    fallback: true
  },
  css: [
    '~assets/css/main.scss'
  ],
  modules: [
    ["@nuxtjs/google-analytics"],
    ["nuxt-i18n", i18nConfig],
  ],
  "google-analytics": {
    id: "UA-124434981-1"
  },
};
