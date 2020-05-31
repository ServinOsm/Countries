// Vendor imports
import React from "react";
// Style imports
import styles from "./Spinner.module.scss";

const spinner = () => (
  <div className={styles.spinner}>
    <div className={styles.loadingspinner}></div>
  </div>
);

export default spinner;
