import React, { useState, useEffect, useReducer } from "react"
import { useInterval } from "../../helpers/useInterval"
import Img from "gatsby-image"
import styles from "./Slideshow.module.scss"

const initialState = {
  count:       0,
  imageToShow: 0,
  step:        1,
}

export const Slideshow = (props) => {
  const [state, setState] = useReducer(
    // reducer function that will work the same way as React's setState function
    (oldState, newState) => ({ ...oldState, ...newState }),
    // initial state
    {
      ...initialState,
    },
  )

  /*  const [count, setCount]               = useState(0)
    const [imageToShow, setimageToShow] = useState(0)
    const [step, setStep]                 = useState(0)*/
  const delay    = 3000
  const {
          imgHero,
          imgSlide1,
          imgSlide2,
          imgSlide3,
        }        = props.images
  const slideArr = [imgSlide1, imgSlide2, imgSlide3].map((slide) => {
    return (
      <Img
        fixed={slide.childImageSharp.fixed}
        alt="Migraine Detective"
      />
    )
  })

  useEffect(() => {
    runSlide()
  }, [])

  const imgCounter = count => count > (slideArr.length - 1) ? 0 : count

  const runSlide = () => {
    setTimeout(() => setState({ step: 1 }), 500)
    setTimeout(() => setState({ step: 2 }), 900)
    setTimeout(() => setState({ step: 3 }), 1300)
    setTimeout(() => setState({ step: 4 }), 1800)
  }

  useInterval(() => {
    // Interval still runs but won't execute method. Interval will stop once component is removed
    const { count } = state
    if (count < 10) {
      const nextCount       = count + 1
      const nextImageToShow = nextCount % slideArr.length
      console.log("--- nextCount, nextImageToShow", nextCount, nextImageToShow)

      setState(
        {
          step:        1,
          count:       nextCount,
          imageToShow: nextImageToShow,
        },
      )
      runSlide()
    }
  }, delay)

  const slide1 = (aCounts, step) => {
    console.log("slide1 aCounts - step: ", aCounts, step)
    return (
      <React.Fragment>
        <div className={`${styles.slide}`}>
          {slideArr[imgCounter(aCounts + 1)]}
        </div>
      </React.Fragment>
    )
  }

  const slide2 = (aCounts, step) => {
    console.log("slide2 aCounts - step: ", aCounts, step)
    let dom = ""
    if (step === 1) {
      dom = (
        <div className={`${styles.slide}`}>
          {slideArr[imgCounter(aCounts)]}
        </div>
      )
    }
    if (step === 2) {
      dom = (
        <div className={`${styles.slide} ${styles.slideOut}`}>
          {slideArr[imgCounter(aCounts)]}
        </div>
      )
    }
    if (step === 3) {
      dom = (
        <div className={`${styles.slide} ${styles.hide}`}>
          {slideArr[imgCounter(aCounts + 1)]}
        </div>
      )
    }
    if (step === 4) {
      dom = (
        <div className={`${styles.slide}`}>
          {slideArr[imgCounter(aCounts + 1)]}
        </div>
      )
    }
    return (
      <React.Fragment>
        {dom}
      </React.Fragment>
    )
  }

  const {
          imageToShow,
          step,
        } = state

  return (
    <div>
      <p>slideshow</p>
      <div className={styles.phone}>
        <Img
          fixed={imgHero.childImageSharp.fixed}
          alt="Migraine Detective"
        />
        <div className={styles.wrap}>
          {slide1(imageToShow, step)}
          {slide2(imageToShow, step)}
        </div>
      </div>
    </div>
  )
}
