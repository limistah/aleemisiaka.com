module.exports = {
  siteMetadata: {
    showThemeInfo: false,
    title: "AI's Notes",
    description: `Limistah's Notes`,
    author: "Aleem Isiaka",
  },
  plugins: [
    {
      resolve: "gatsby-theme-code-notes",
      options: {
        contentPath: "notes",
        basePath: "/",
        showThemeInfo: true,
        showDescriptionInSidebar: true,
        showDate: true,
        gitRepoContentPath:
          "https://github.com/limistah/aleemisiaka.com/tree/notes/notes",
        openSearch: {
          siteShortName: `AI's Notes`,
          siteUrl: "https://notes.aleemisiaka.com",
          siteTags: "code, writing, code, ideas",
          siteContact: "https://twitter.com/limisth",
          siteDescription: "Aleem Isiaka's Notes",
        },
      },
    },
  ],
};
