// Vendor imports
import React from "react";
// Imports
import BackButton from "../../../components/BackButton/BackButton";
// Style imports
import styles from "./CountryArea.module.scss";
// Type imports
import {MainInfo, SecondaryInfo, AdditionalInfo} from "./types";

interface Props {
  mainInfo: MainInfo,
  secondaryInfo: SecondaryInfo;
  additionalInfo: AdditionalInfo;
  flag: string,
  regionName: string
  name: string
}

function countryArea({mainInfo, secondaryInfo, additionalInfo, flag, regionName, name }: Props) {
  const getMainInfo = () => {
    const mainInfoData = Object.entries(mainInfo).map(([key, value], index) => (
      <li className={styles.listItem} key={`${value}_${index}`}>
        <span className={styles.itemHeader}>{key}: </span>
        {value}
      </li>
    ))
    return mainInfoData
  }

  const getSecondaryInfo = () => {
    const secondaryInfoData = Object.entries(secondaryInfo).map(([key, value], index) => (
      <li className={styles.listItem} key={index}>
        <span className={styles.itemHeader}>{key}: </span>
        {value.map((item) => item.name).join(",")}
      </li>
    ));
    return secondaryInfoData;
  }

  const getAdditionalInfo = () => {
    const additionalInfoData = Object.entries(additionalInfo).map(([key, value], index) => (
      <li className={styles.listItem} key={index}>
        <span className={styles.itemHeader}>{key}: </span>
        {value.join(", ")}
      </li>
    ));
    return additionalInfoData
  }

  return (
    <div className={styles.countryArea}>
      <BackButton pathUrl={`/regions/${regionName}`} />
      <div className={styles.countryDataArea}>
        <div className={styles.flag}>
          <img className={styles.flagImage} src={flag} alt={name} />
        </div>
        <div className={styles.countryInfo}>
          <h2 className={styles.header}>{name}</h2>
          <div className={styles.generalCountryInfo}>
            <div className={styles.info}>
              <ul className={styles.list}>{getMainInfo()}</ul>
              <ul className={styles.list}>{getSecondaryInfo()}</ul>
              <ul className={styles.list}>{getAdditionalInfo()}</ul>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default countryArea;