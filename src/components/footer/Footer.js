import React from "react"
import styles from "./Footer.module.scss"
import { Link } from "gatsby"
import ContactForm from "../contactForm/ContactForm"
import Share from "../share/Share"

const Footer = (props) => {
  const twitterHandle = "@migdetective"
  const title = "this is title"

  return (
    <section className={styles.wrap}>
      <h2>Reach out for us</h2>
      <div className={styles.content}>
        <div className={styles.form}>
          <ContactForm
            theme="light"
          />
        </div>
        <div className={styles.text}>
          <p>We are always looking for your feedback to help us improve. Let us know what you think by reaching out to
            us via the form or drop us a line via <br/> <a href="mailto:support@migraine-detective.com?subject=Feedback"
                                                           target="_self" data-content="support@migraine-detective.com"
                                                           data-type="mail">support@migraine-detective.com</a></p>
          <h3>Social</h3>

          <Share
            socialConfig={{
              twitterHandle,
              config: {
                url: `https://migraine-detective.com`,
                title,
              },
            }}
            tags={["social"]}
          />

          <div className={styles.twitter}>
            TWITTER
          </div>
          <div className={styles.facebook}>
            FACEBOOK
          </div>
        </div>
      </div>
      <div className={styles.footNote}>
        <p>Copyright &copy; Migraine Detective 2018 - 2019.</p>
        <p>By using Migraine Detective you agree to our <Link to="/blog/terms-and-conditions">Terms and
          Conditions</Link>. To find out how we are using and protecting
          your personal data, see our <Link to="/blog/privacy-policy">Privacy Policy</Link> page.</p>
      </div>
    </section>
  )
}

export default Footer
