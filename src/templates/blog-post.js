import React from "react"
import { graphql, Link } from "gatsby"
import { Container } from "./container/Container"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Container>
      <Link
        to='/blog'>
        Back
      </Link>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }}/>
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }`
