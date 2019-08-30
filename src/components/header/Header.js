import React from "react"
import PropTypes from "prop-types"
import { Navigation } from "../navigation/Navigation"
import Img from "gatsby-image"
import styles from "./Header.module.scss"
import { Link } from "gatsby"

export const Header = (props) => {

  return (
    <section className={styles.header}>
      <div className={styles.headerWrap}>
        <Link
          to="/"
        >
          <Img
            fixed={props.logo.childImageSharp.fixed}
            alt="Migraine Detective"
          />
        </Link>
        <Navigation/>
      </div>
    </section>
  )
}

Header.propTypes = {
  headerText: PropTypes.string,
}
