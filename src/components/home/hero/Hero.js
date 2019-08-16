import React from "react"
import { OpenYourDiaryButton } from "../../buttons/Buttons"
import styles from "./Hero.module.scss"
import {Slideshow} from "../../slideshow/Slideshow"

export const Hero = (props) => {

  return (
    <div className={styles.hero}>
      <h1>Migraine Detective is a digital headache diary that helps to find your migraine triggers.</h1>
      <OpenYourDiaryButton>
        Open your Diary
      </OpenYourDiaryButton>
      <Slideshow
        images={props.images}
      />
    </div>
  )
}

