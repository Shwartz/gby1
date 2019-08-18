import React from "react";
// import PropTypes from "prop-types";
import styles from './Buttons.module.scss';

export const Buttons = (props) => (
  <button
    className={styles.button}
    type="button"
  >
    {props.children}
  </button>
)

export const OpenYourDiaryButton = (props) => (
  <a
    className={styles.openYourDiaryButton}
    href="https://migraine-detective.com/open-diary"
  >
    <span>{props.children}</span>
  </a>
)

export const BlackWhiteButton = (props) => (
  <a
    className={styles.blackWhiteButton}
    href={props.href}
  >
    <span>{props.children}</span>
  </a>
)
