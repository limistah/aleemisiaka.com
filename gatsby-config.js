module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: { basePath: "/blog", rootPath: "/" },
    },
    `gatsby-plugin-sharp`,
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
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `AI`,
    author: `Aleem Isiaka`,
    authorBio: `Double Engineer >>> Software & Machines | Student & Learner`,
    description: `Double Engineer >>> Software & Machines | Student & Learner`,
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
