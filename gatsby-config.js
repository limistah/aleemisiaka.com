module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: { basePath: "/blog", rootPath: "/" },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
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
