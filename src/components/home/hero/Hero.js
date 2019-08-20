import React from "react"
import { WhiteBlueButton } from "../../buttons/Buttons"
import styles from "./Hero.module.scss"
import {Slideshow} from "../../slideshow/Slideshow"

export const Hero = (props) => {

  return (
    <div className={styles.hero}>
      <h1>Migraine Detective is a digital headache diary that helps to find your migraine triggers.</h1>
      <WhiteBlueButton
        href="https://migraine-detective.com/open-diary"
      >
        Open your diary
      </WhiteBlueButton>
      <Slideshow
        images={props.images}
      />
    </div>
  )
}

