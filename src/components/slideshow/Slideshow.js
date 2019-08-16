import React, { useState, useEffect } from "react"
import { useInterval } from "../../helpers/useInterval"
import Img from "gatsby-image"
import styles from "./Slideshow.module.scss"

export const Slideshow = (props) => {
  const [count, setCount]               = useState(0)
  const [animateCount, setAnimateCount] = useState(0)
  const [animClass, setAnimClass]       = useState([])
  const delay                           = 2000
  const {
          imgHero,
          imgSlide1,
          imgSlide2,
          imgSlide3,
        }                               = props.images
  const slideArr                        = [imgSlide1, imgSlide2, imgSlide3].map((slide) => {
    return (
      <Img
        fixed={slide.childImageSharp.fixed}
        alt="Migraine Detective"
      />
    )
  })

  const imgCounter = count => count > 2 ? 0 : count

  const runSlide = () => {
    //console.log('runSlide getIndex(index): ', getIndex(index));
    setAnimateCount(count % 3)

    setAnimClass([styles.slide])

    setTimeout(() => {
      setAnimClass([styles.slide, styles.slideOut])
      setTimeout(() => {
        setAnimClass([styles.slide, styles.hide])
      }, 400)
    }, delay - 1000)

    console.log("count % 3: ", count % 3)
  }

  useInterval(() => {
    // Interval still runs but won't execute method. Interval will stop once component is removed
    if (count < 10) {
      setCount(count + 1)
      runSlide()
    }
  }, delay)

  const imgChanger = (count) => {
    return (
      <React.Fragment>
        <div className={`${styles.slide}`}>
          {slideArr[imgCounter(count + 1)]}
        </div>
        <div className={`${animClass.join(' ')}`}>
          {slideArr[imgCounter(count)]}
        </div>
      </React.Fragment>
    )
  }

  return (
    <div>
      <p>slideshow</p>
      <div className={styles.phone}>
        <Img
          fixed={imgHero.childImageSharp.fixed}
          alt="Migraine Detective"
        />
        <div className={styles.wrap}>
          <div className={`${styles.slide}`}>
            {slideArr[imgCounter(count + 1)]}
          </div>
          {imgChanger(animateCount)}
        </div>
      </div>
    </div>
  )
}
