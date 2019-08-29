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
        <h1>About Migraine Detective</h1>

        <p>A number of studies have concluded that smartphone diary applications provide a tangible benefit in treating migraine headaches.</p>

        <p>At Migraine Detective, we are on a mission to help people who suffer from chronic headaches to improve their quality of life. We are committed to bringing the latest research in the headache treatment field to your smartphone.</p>

        <p>Your smartphone becomes your personal assistant, helping you to take a deep look at the habits which may trigger your headaches.</p>

        <p>Our dedicated team is working closely with doctors and patients to create the simplest way to fill the migraine diary. Migraine Detective does not require any installation. It's a hassle-free digital experience suitable for any of your devices. As you fill in the diary, it will begin providing you with the reports on your potential migraine triggers.</p>

        <p>Intelligently, the diary will learn your everyday habits, and you soon enough notice that our App will suggest possible things you do at certain times. For example, daily train travel, coffee in the morning, tea in an evening, medicine. Minimum writing, saving time, working on any device, no needs to download an App.</p>

        <h2>Frequently Asked Questions</h2>

        <h3>What is Migraine Detective?</h3>
        <p>Migraine Detective is your personal assistant that helps to find the cause of your migraine headaches.</p>

        <h3>Is Migraine Detective free?</h3>
        <p>Yes, Migraine Detective is free of charge.</p>

        <h3>What's included for free?</h3>
        <p>Free access includes the following: Migraine diary, Migraine trigger reports</p>

        <h3>How can I contact with the development team?</h3>
        <p>We are working hard on improving the Migraine Detective experience, so please let us know what you think at support@migraine-detective.com.</p>
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
