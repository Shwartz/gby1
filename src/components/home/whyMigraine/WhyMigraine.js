import React from "react"
import Img from "gatsby-image"
import { BlackWhiteButton } from "../../buttons/Buttons"
import styles from "./WhyMigraine.module.scss"

export const WhyMigraine = (props) => {

  return (
    <div className={styles.wrap}>
      <div className={styles.image}>
        <Img
          fluid={props.image.childImageSharp.fluid}
        />
      </div>
      <div className={styles.content}>
        <h3>Why Migraine Detective?</h3>
        <p>If you are here, there is a good chance that your doctor had recommended you to keep a migraine diary to log
          your potential migraine triggers. We believe that a paperless diary provides many benefits for keeping your
          migraine triggers tracked.</p>
        <BlackWhiteButton
          href="learn-more"
        >
          Learn More
        </BlackWhiteButton>
      </div>
    </div>
  )
}

