import React from "react";
// import PropTypes from "prop-types";
import styles from './Button.module.scss';

export const Button = (props) => (
  <button
    className={styles.button}
  >
    {props.children}
  </button>
)

