/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 * https://www.gatsbyjs.org/docs/path-prefix/
 */
const path = require('path');

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Generic Site Title'
  },
  pathPrefix: `/gby1`,
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: path.join(__dirname, `src`, `md`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `static`, `images`),
      },
    },
  ]
}
