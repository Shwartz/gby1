import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styles from './Header.module.scss';

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

export const Header = (props) => (
  <div className={styles.header}>
    <h1>{props.headerText}</h1>
    <nav className={styles.menu}>
      {mainMenu(mainMenuDefinition)}
    </nav>
  </div>
)

Header.propTypes = {
  headerText: PropTypes.string,
}
