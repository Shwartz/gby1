import React from "react"
import { Header } from "../components/Header"
import { Container } from "../components/container/Container"
import { Link, graphql } from "gatsby"
import { Button } from "../components/button/Button"

export default ({ data }) => {
  return (
    <Container>
      <p><Link to='/about'>About Link..</Link></p>
      <Header
        headerText='Home page title'
      />
      <h4>Meta data from graphQL: {data.site.siteMetadata.title}</h4>
      <p>Let's roll</p>
      <Button>Styled component Button</Button>
      <p>Some more content!!!</p>
      <p>..and even one more line here</p>
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
  }
`
