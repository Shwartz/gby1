import React, { useState } from "react"
import styles from "./ContactForm.module.scss"

const ContactForm = (props) => {
  // expect theme: light | dark
  const theme = props.theme === 'dark' ? styles.light : '';
  console.log('theme: ', theme);


  return (
    <div className={`${styles.wrap} ${theme}`}>
      <form
        action="https://formspree.io/svarcs.01@gmail.com"
        method="POST"
      >
        <label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
          />
        </label>
        <label>
        <textarea
          name="message"
          placeholder="Your message"
        />
        </label>
        <label>
          <input
            type="submit"
            value="Send"
          />
        </label>
      </form>
    </div>
  )
}

export default ContactForm




