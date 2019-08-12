import React from "react"
import PropTypes from "prop-types"
import { Navigation } from "../navigation/Navigation"
import Img from "gatsby-image"
import styles from "./Header.module.scss"

export const Header = (props) => {
  console.log('data header: ', props);
  return (
    <div className={styles.header}>
      <Img
      fixed={props.logo.childImageSharp.fixed}
      alt="Migraine Detective"
    />
      <Navigation/>
    </div>
  )
}

Header.propTypes = {
  headerText: PropTypes.string,
}
