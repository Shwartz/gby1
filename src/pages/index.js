import React from "react"
import { Container } from "../templates/container/Container"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "typeface-roboto"
import { Header } from "../components/header/Header"
import { Hero } from "../components/home/hero/Hero"
import { WhyMigraine } from "../components/home/whyMigraine/WhyMigraine"
import ReadMore from "../components/home/readMore/ReadMore"
import CallToAction from "../components/callToAction/CallToAction"
import Security from "../components/security/Security"
import Footer from "../components/footer/Footer"

export default ({ data }) => {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Migraine Detective | Digital headache diary</title>
        <link rel="canonical" href="https://migraine-detective.com" />
        <meta property="og:url"           content="https://migraine-detective.com" />
        <meta property="og:type"          content="website" />
        <meta property="og:title"         content="Migraine Detective" />
        <meta property="og:description"   content="Migraine Detective is a digital headache diary that helps to find your migraine triggers." />
        <meta property="og:image"         content="./images/icons/Logo.png" />
      </Helmet>
      <Header
        logo={data.imgLogo}
      />
      <Hero
        images={data}
      />
      <WhyMigraine
        image={data.whyMigraine}
      />
      <ReadMore/>
      <CallToAction/>
      <Security/>
      <Footer/>
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
