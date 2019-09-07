import React from "react"
import styles from "./Footer.module.scss"
import { Link } from "gatsby"
import ContactForm from "../contactForm/ContactForm"

const Footer = (props) => {

  return (
    <section className={styles.wrap}>
      <div id="fb-root"/>
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
          <div className={styles.twitter}>
            TWITTER
          </div>
          <div className={styles.facebook}>
            <div className="fb-like" data-href="https://migraine-detective.com" data-width="" data-layout="button_count"
                 data-action="like" data-size="small" data-show-faces="true" data-share="true"/>
          </div>
        </div>
      </div>
      <div className={styles.footNote}>
        <p>Copyright &copy; Migraine Detective 2018 - 2019.</p>
        <p>By using Migraine Detective you agree to our <Link to="/blog/terms-and-conditions">Terms and Conditions</Link>. To find out how we are using and protecting
          your personal data, see our <Link to="/blog/privacy-policy">Privacy Policy</Link> page.</p>
      </div>
    </section>
  )
}

export default Footer
