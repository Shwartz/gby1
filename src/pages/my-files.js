import React from "react"
import { graphql, Link } from "gatsby"
import { Container } from "../templates/container/Container"
import { Header } from "../components/header/Header"
import { HeaderMetaData } from "../helpers/HeaderMetaData"

export default ({ data }) => {
  const pageStyle = {
    color: 'white',
    margin: '24px auto'
  }
  return (
    <Container>
      <HeaderMetaData
        title="Migraine Detective | Digital headache diary"
        description="Migraine Detective is a digital headache diary that helps to find your migraine triggers."
        link="https://migraine-detective.com"
      />
      <Header
        logo={data.imgLogo}
      />
      <div style={pageStyle}>
        <table>
          <thead>
          <tr>
            <th>relativePath</th>
            <th>prettySize</th>
            <th>extension</th>
            <th>birthTime</th>
          </tr>
          </thead>
          <tbody>
          {data.allFile.edges.map(({ node }, index) => (
            <tr key={index}>
              <td>{node.relativePath}</td>
              <td>{node.prettySize}</td>
              <td>{node.extension}</td>
              <td>{node.birthTime}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </Container>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
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
  }
`
