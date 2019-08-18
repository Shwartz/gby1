import React from "react"
import styles from "./WhyMigraine.module.scss"

export const WhyMigraine = (props) => {

  return (
    <div className={styles.wrap}>
      <div className={styles.image}/>
      <div className={styles.content}>
        <h3>Why Migraine Detective?</h3>
        <p>If you are here, there is a good chance that your doctor had recommended you to keep a migraine diary to log
          your potential migraine triggers. We believe that a paperless diary provides many benefits for keeping your
          migraine triggers tracked.</p>
        <p>Learn More</p>
      </div>
    </div>
  )
}

