import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styles from "./Navigation.module.scss"

const mainMenuDefinition = [
  { "Home": "/" },
  { "Blog": "/blog" },
  { "About": "/about" },
  { "Contact us": "/contact" },
]

const mainMenu = (arr) => {
  return arr.map((obj, index) => {
    const pageName = Object.keys(obj)[0]
    const slug     = obj[pageName]

    return (
      <Link
        key={index}
        to={slug}
        activeClassName={styles.active}
      >{pageName}
      </Link>
    )
  })
}

export const Navigation = () => (
  <div className={styles.header}>
    <nav className={styles.menu}>
      {mainMenu(mainMenuDefinition)}
    </nav>
  </div>
)
