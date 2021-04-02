module.exports = {
  siteMetadata: {
    title: "My first Gatsby site",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
