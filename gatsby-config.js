/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 * https://www.gatsbyjs.org/docs/path-prefix/
 *
 * Issues with Gatsby markdown images:
 * https://github.com/gatsbyjs/gatsby/issues/15486
 */
const path = require("path")

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Migraine Detective",
  },
  pathPrefix:   `/gby1`,
  plugins:      [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: path.join(__dirname, `src`, `md`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `static`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
            },
          },
        ],
      },
    },
  ],
}

/*{
      resolve: `gatsby-transformer-remark`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: path.join(__dirname, `asdf`, `kdkdk`),
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 400,
              linkImagesToOriginal: true,
              sizeByPixelDensity: true,
              showCaptions: true,
            },
          },
        ],
      },
    },*/
