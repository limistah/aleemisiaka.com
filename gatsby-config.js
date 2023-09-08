module.exports = {
  flags: { DEV_SSR: false },
  plugins: [
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        sitemap: "https://aleemisiaka.dev/sitemap/sitemap-0.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-0TT6LT81J0", // Google Analytics / GA
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
        prismPreset: "dracula",
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
      {
        name: `linkedin`,
        url: `https://linkedin.com/in/limistah`,
      },
    ],
  },
}
