import React from "react"
import { Header } from "../components/Header"
import { Container } from "../templates/container/Container"
import { Link, graphql } from "gatsby"
import { Button } from "../components/button/Button"

const linkBox = {
  background: 'white',
  border: '1px solid grey',
  marginTop: '12px',
  padding: '8px'
}

export default ({ data }) => {
  return (
    <Container>
      <p><Link to='/about/'>About Link..</Link></p>
      <p><Link to='/my-files/'>List of files</Link></p>
      <Header
        headerText='Home page title'
      />
      <h4>Meta data from graphQL: {data.site.siteMetadata.title}</h4>

      <Button>Styled component Button</Button>


      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div style={linkBox} key={node.id}>
          <Link
            to={node.fields.slug}
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
