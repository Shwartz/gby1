import React from "react"
import styles from "./CallToAction.module.scss"
import { WhiteBlueButton } from "../buttons/Buttons"

const CallToAction = (props) => {

  return (
    <section className={styles.wrap}>
      <div className={styles.content}>
        <h3>Start writing your migraine diary now</h3>
        <WhiteBlueButton
          href="https://migraine-detective.com/open-diary"
        >
          Open your diary
        </WhiteBlueButton>
      </div>
    </section>
  )
}

export default CallToAction
