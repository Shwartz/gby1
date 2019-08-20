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
//https://migraine-detective.com/open-diary
export const WhiteBlueButton = (props) => (
  <a
    className={styles.openYourDiaryButton}
    href={props.href}
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
