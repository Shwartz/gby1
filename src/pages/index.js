import React from "react"
import { Container } from "../templates/container/Container"
import { graphql } from "gatsby"
import { Header } from "../components/header/Header"
import { Hero } from "../components/home/hero/Hero"
import { WhyMigraine } from "../components/home/whyMigraine/WhyMigraine"
import { ReadMore } from "../components/home/readMore/ReadMore"

export default ({ data }) => {
  return (
    <Container>
      <Header
        logo={data.imgLogo}
      />
      <ReadMore/>
      <Hero
        images={data}
      />
      <WhyMigraine
        image={data.whyMigraine}
      />
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
    imgHero: file(relativePath: { eq: "hero/heroImage.png" }) {    
      childImageSharp {      
        fixed(width: 335, height: 657) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }      
      }
    }
    imgSlide1: file(relativePath: { eq: "hero/hero1.png" }) {    
      childImageSharp {      
        fixed(width: 272, height: 425) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }      
      }
    } 
    imgSlide2: file(relativePath: { eq: "hero/hero2.png" }) {    
      childImageSharp {      
        fixed(width: 272, height: 425) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }      
      }
    }
    imgSlide3: file(relativePath: { eq: "hero/hero3.png" }) {    
      childImageSharp {   
        fixed(width: 272, height: 425) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }      
      }
    }
    whyMigraine: file(relativePath: {eq: "why-migraine-bg.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 700) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }   
  }
`
