import React from "react"
import { Header } from "../components/header/Header"
import { Container } from "../templates/container/Container"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Container>
    <Header
      logo={data.imgLogo}
    />
    <h1>About</h1>
    <p>Page in progress</p>
  </Container>
)

export const query = graphql`
  query {   
    imgLogo: file(relativePath: { eq: "icons/Logo.png" }) {    
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.    
        fixed(width: 243, height: 43) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }      
      }
    }   
  }
`
