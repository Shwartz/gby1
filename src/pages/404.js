import React from "react"
import { Header } from "../components/header/Header"
import { Container } from "../templates/container/Container"
import { graphql } from "gatsby"
import styles from "../styles/global.module.scss"
import Footer from "../components/footer/Footer"

export default ({ data }) => (
  <Container>
    <Header
      logo={data.imgLogo}
    />
    <section className={styles.page}>
      <div className={styles.textWrap}>
        <h1>Page not found</h1>

        <p>The page you are looking has been removed or relocated</p>
      </div>
    </section>
    <Footer/>
  </Container>
)

export const query = graphql`
  query {   
    imgLogo: file(relativePath: { eq: "icons/Logo.png" }) {    
      childImageSharp {        
        fixed(width: 243, height: 43) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }      
      }
    }   
  }
`
