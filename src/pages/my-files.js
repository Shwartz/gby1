import React from "react"
import { graphql, Link } from "gatsby"
import {Container} from "../templates/container/Container"
import { Header } from "../components/Header"

export default ({ data }) => {
  console.log(data);
  console.log('data.allFile.edges: ', data.allFile.edges)
  return (
    <Container>
      <p><Link to='/'>Home Link</Link></p>
      <Header
        headerText='My Files'
      />
      <div>
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
  }
`
