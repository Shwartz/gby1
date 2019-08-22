import React from "react"
import styles from "./Footer.module.scss"

const Footer = (props) => {

  return (
    <section className={styles.wrap}>
      <h2>Reach out for us</h2>
      <div className={styles.content}>
        <div>
          <p>Contact form will be here</p>
          <p>FORM</p>
          <p>FORM</p>
          <p>FORM</p>
          <p>FORM</p>
          <p>FORM</p>
        </div>
        <div>
          <p>We are always looking for your feedback to help us improve. Let us know what you think by reaching out to
            us via the form or drop us a line via <a href="mailto:support@migraine-detective.com?subject=Feedback"
                                                     target="_self" data-content="support@migraine-detective.com"
                                                     data-type="mail">support@migraine-detective.com</a></p>
          <h3>Social</h3>
          <div className={styles.twitter}>
            TWITTER
          </div>
          <div className={styles.facebook}>
            FACEBOOK
          </div>
        </div>
      </div>
      <p>Copyright &copy; Migraine Detective 2018 - 2019.</p>
      <p>By using Migraine Detective you agree to our <a href="#">Terms and Conditions</a>. To find out how we are using and protecting
        your personal data, see our <a href="#">Privacy Policy</a> page.</p>
    </section>
  )
}

export default Footer
