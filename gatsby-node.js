const path               = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath(
      {
        node,
        getNode,
        basePath: `pages`,
      },
    )

    createNodeField(
      {
        node,
        name:  `slug`,
        value: slug,
      },
    )
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
                title
              }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMdx.edges.forEach(({ node }) => {
      createPage(
        {
          path:      node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context:   {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
    })
  })
}
