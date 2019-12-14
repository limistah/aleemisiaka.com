module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: { basePath: "blog" },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Aleem Isiaka`,
    author: `Aleem Isika`,
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
