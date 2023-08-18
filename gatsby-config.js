module.exports = {
  flags: { DEV_SSR: false },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-HVZTY4XJ5F", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
          anonymize_ip: true,
        },
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: "/blog",
        assetPath: "content/assets",
        prismPreset: "prism-okaidia",
        preset: false,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        options: {
          icon: "content/assets/avatar.png",
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/icon-path*"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-favicons",
      options: {
        logo: "./static/author.png",
        appName: "Aleem Isiaka",
        background: "#fff",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          yandex: false,
          windows: false,
        },
      },
    },
    "gatsby-plugin-sitemap",
  ],
  // Customize your site metadata:
  siteMetadata: {
    siteUrl: "https://aleemisiaka.dev/",
    title: `Aleem Isiaka AI`,
    author: `Aleem Isiaka`,
    authorBio: `Software Engineer >>> Computer && Machines | Learner && Writer`,
    description: `Software Engineer >>> Computer && Machines | Learner && Writer`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/limistah`,
      },
      {
        name: `github`,
        url: `https://github.com/limistah`,
      },
    ],
  },
}
