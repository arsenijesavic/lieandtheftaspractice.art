module.exports = {
  siteMetadata: {
    title: "lie and and theft as practice",
    author: "Arsenije Savic",
    description: `https://lieandtheftaspractice.art/`,
    homepage: `https://lieandtheftaspractice.art/`,
    keywords: "art",
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-styled-components`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: { maxWidth: 2048 },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: { destinationDir: "static" },
          },
        ],
      },
    },
    { resolve: "gatsby-plugin-netlify-cms" },
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],

  mapping: {
    "MarkdownRemark.fields._authors": "MarkdownRemark",
    "MarkdownRemark.fields._posts": "MarkdownRemark",
  },
}
