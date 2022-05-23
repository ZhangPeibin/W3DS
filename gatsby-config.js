module.exports = {
  pathPrefix: "/w3ds-io",
  siteMetadata: {
    title: `W3DS`,
    description: `The goal of W3DS is to create a data metaverse for web3, dedicated to providing a detailed portrait of each data`,
    author: `@W3DS`,
    image: "/images/logo.png",
    url: "https://w3ds.io",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-copy-files",
      options: {
        source: `${__dirname}/specs/images`,
        destination: "images",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `specs`,
        path: `${__dirname}/specs`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `W3DS`,
        short_name: `w3ds`,
        start_url: `/`,
        background_color: `#28646E`,
        theme_color: `#28646E`,
        display: `minimal-ui`,
        icon: `static/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
