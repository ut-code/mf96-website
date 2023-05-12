// https://nuxt.com/docs/api/configuration/nuxt-config
const title = "あなたのためのプログラミング - ut.code(); 第96回五月祭企画";
const description =
  "どんどん身近なものとなるプログラミング。誰もがより興味を持てるような企画です。子供も大人も、未経験者も経験者もぜひ！";
const url = "https://mf96.utcode.net";
export default defineNuxtConfig({
  app: {
    head: {
      title,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: description },
        { name: "format-detection", content: "telephone=no" },
        { hid: "og:site_name", property: "og:site_name", content: title },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: url,
        },
        { hid: "og:title", property: "og:title", content: title },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `${url}/ogp.png`,
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@utokyo_code" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  css: ["vuetify/lib/styles/main.sass", "mdi/css/materialdesignicons.min.css"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
