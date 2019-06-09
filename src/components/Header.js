import React from "react"
import PropTypes from 'prop-types';

export const Header = (props) => (
  <h1>{props.headerText}</h1>
)

Header.propTypes = {
  headerText: PropTypes.string
}
