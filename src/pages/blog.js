import React from "react"
import { Header } from "../components/header/Header"
import { Container } from "../templates/container/Container"
import { Link, graphql } from "gatsby"
import styles from "./blog.module.scss"

export default ({ data }) => {
  return (
    <Container>
      <Header
        logo={data.imgLogo}
      />
      <h1>Blog</h1>
      <p>Total amount of articles <b>{data.allMarkdownRemark.totalCount}</b></p>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            className={styles.excerpt}
          >
            <h3>
              {node.frontmatter.title}{" "}
              <span>
                  — {node.frontmatter.date}
                </span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </Container>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    imgLogo: file(relativePath: { eq: "icons/Logo.png" }) {    
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.    
        fixed(width: 243, height: 43) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }      
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
