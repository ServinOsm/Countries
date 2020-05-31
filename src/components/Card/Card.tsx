// Vendor imports
import React from "react";
import { Link } from "react-router-dom";
// Style imports
import styles from "./Card.module.scss";

interface Props {
  pathUrl: string;
  children: JSX.Element;
}

const card = ({ pathUrl, children}: Props) => {
  return (
    <Link to={pathUrl} className={styles.card}>
      {children}
    </Link>
  );
};

export default card;
