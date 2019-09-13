import React from "react"
import { Header } from "../components/header/Header"
import { Container } from "../templates/container/Container"
import { graphql } from "gatsby"
import styles from "../styles/global.module.scss"
import Footer from "../components/footer/Footer"
import { HeaderMetaData } from "../helpers/HeaderMetaData"

export default ({ data }) => {
  const shareConfig = {
    title:         "Migraine Detective",
    url:           "https://migraine-detective.com/404",
    hashTags:      ["migraine", "diary", "headache"],
    twitterHandle: data.site.siteMetadata.twitterHandle,
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
      <section className={styles.page}>
        <div className={styles.textWrap}>
          <h1>Page not found</h1>

          <p>The page you are looking has been removed or relocated</p>
        </div>
      </section>
      <Footer
        shareConfig={shareConfig}
      />
    </Container>
  )
}

export const query = graphql`
  query {   
    site {
      siteMetadata {
        twitterHandle
      }
    }
    imgLogo: file(relativePath: { eq: "icons/Logo.png" }) {    
      childImageSharp {        
        fixed(width: 243, height: 43) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }      
      }
    }   
  }
`
