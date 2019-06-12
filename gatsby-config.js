/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 * https://www.gatsbyjs.org/docs/path-prefix/
 */

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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    }
  ]
}
