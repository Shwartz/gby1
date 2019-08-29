import React from "react";
import styles from './Container.module.scss';

export const Container = (props) => (
  <div
    className={styles.container}
  >
    {props.children}
  </div>
)

