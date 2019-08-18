import React, { useState, useEffect, useReducer } from "react"
import { useInterval } from "../../helpers/useInterval"
import Img from "gatsby-image"
import styles from "./Slideshow.module.scss"

/**
 *
 * @type {{count: number, imageToShow: number, step: number}}
 * Improvements: Steps should be percentage of delay
 */
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
    setTimeout(() => setState({ step: 1 }), 600)
    setTimeout(() => setState({ step: 2 }), 900)
    setTimeout(() => setState({ step: 3 }), 1300)
    setTimeout(() => setState({ step: 4 }), 1800)
  }

  useInterval(() => {
    // Interval still runs but won't execute method. Interval will stop once component is removed
    const { count } = state
    if (count < 100) {
      const nextCount       = count + 1
      const nextImageToShow = nextCount % slideArr.length

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

  const slide1 = (aCounts) => {
    return (
        <div className={`${styles.slide}`}>
          {slideArr[imgCounter(aCounts + 1)]}
        </div>
    )
  }

  const slide2 = (aCounts, step) => {
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
      dom
    )
  }

  const {
          imageToShow,
          step,
        } = state

  return (
      <div className={styles.phone}>
        <Img
          fixed={imgHero.childImageSharp.fixed}
          alt="Migraine Detective"
        />
        <div className={styles.wrap}>
          {slide1(imageToShow)}
          {slide2(imageToShow, step)}
        </div>
      </div>
  )
}
