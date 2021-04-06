module.exports = {
  siteMetadata: {
    title: "My portfolio",
    menuLinks:[
      {
        name:'Home',
        link:'/'
      },
      {
        name:'About me',
        link:'#about-me'
      },
      {
        name:'My projects',
        link:'#my-projects'
      },
      {
        name:'Education',
        link:'#education'
      },
      {
        name:'Contact me',
        link:'#contact-me'
      }
    ]
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images",
      },
    },
  ],
};
