// Vendor imports
import React from "react";
import { Link } from "react-router-dom";
// Imports
import { ReactComponent as ArrowSvg } from "../../assets/navigation arrow.svg";
// Style imports
import styles from "./BackButton.module.scss";

interface Props {
  pathUrl: string
}

const backButton = ({ pathUrl }: Props) => {
  return (
    <Link className={styles.backButton} to={pathUrl}>
      <ArrowSvg className={styles.backButtonArrow} />
      <span>Back</span>
    </Link>
  )
}

export default backButton;