import i18n from "./config/i18n";

export default {
  env: {
    baseURL:
      process.env.NODE_ENV === "production"
        ? "https://production.url"
        : "https://localhost:3000",
  },
  publicRuntimeConfig: {
    globalMetaDesc: "Srovnejto",
    seoDescription: "Srovnejto",
    seoTitleSuffix: "- Srovnejto",
  },
  target: "static",
  server: {
    port: process.env.PORT, // default: 3000
    host: process.env.HOST, // de
  },
  head: {
    titleTemplate: "%s Srovnejto",
    htmlAttrs: {
      Lang: "cs",
    },
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "Srovnejto",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/svg+xml",
        //href: "/img/favicon.svg",
      },
      {
        rel: "icon",
        type: "image/x-icon",
        //href: "/img/favicon.ico",
      },
    ],
    script: [
      {
        src: "https://polyfill.io/v3/polyfill.min.js?features=Number.isNaN",
      },
    ],
  },
  plugins: [
    "~/plugins/observer.client",
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,

  build: {
    styleResources: {
      scss: [
      ],
    },
    loaders: {
      scss: { sourceMap: false },
    },
    splitChunks: {
      layouts: true,
    },
    babel:{
        plugins: [
          ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
        ]
      },
    postcss: {
        plugins: {
          "postcss-nested": {}
        }
      },

  },

  optimizedImages: {
    optimizeImages: true,
  },

  //css: ["@assets/css/swiper.min.css", "@assets/scss/base.scss"],

  modules: [
    "@nuxtjs/style-resources",
    "nuxt-i18n",
    ["@nuxtjs/robots", { UserAgent: "*", Allow: "/" }],
    "@nuxtjs/sitemap",
    '@nuxtjs/axios'
  ],
  axios: {},
  /*
   ** Nuxt.js dev-modules
   */
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: true,
    config: {},
  },

  buildModules: ["@nuxtjs/tailwindcss",'@nuxt/postcss8'],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  router: {
    linkActiveClass: "active",
    linkExactActiveClass: "active",
    prefetchLinks: false,
  },

  generate: {
    fallback: true, // if you want to use '404.html' instead of the default '200.html'
    dir: "dist_build",
  },

  loading: {
    color: "#FCD29B",
    height: "3px",
    continuous: true,
  },
};
