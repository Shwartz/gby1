import React from "react"
import { Header } from "../components/header/Header"
import { Container } from "../templates/container/Container"
import { graphql } from "gatsby"
import styles from "../styles/global.module.scss"
import Footer from "../components/footer/Footer"
import ContactForm from "../components/contactForm/ContactForm"
import { HeaderMetaData } from "../helpers/HeaderMetaData"

export default class Contact extends React.Component {

  render() {
    return (
      <Container>
        <HeaderMetaData
          title="Migraine Detective | Digital headache diary"
          description="Migraine Detective is a digital headache diary that helps to find your migraine triggers."
          link="https://migraine-detective.com"
        />
        <Header
          logo={this.props.data.imgLogo}
        />
        <section className={styles.page}>
          <div className={styles.textWrap}>
            <ContactForm
              theme="dark"
            />
          </div>
        </section>
        <Footer/>
      </Container>
    )
  }
};

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
  }
`
