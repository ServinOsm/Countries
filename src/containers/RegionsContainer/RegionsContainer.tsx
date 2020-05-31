// Vendor imports
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
// Imports
import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";
import { loadRegions } from "../../store/actions";
// Style imports
import styles from "./RegionsContainer.module.scss";
// Type imports
import { StoreState } from "../../types";

type StateToProps = {
  regions: string[];
  isLoading: boolean;
};

type DispatchToProps = {
  onLoadRegions: () => void;
};

type Props = StateToProps & DispatchToProps;

function RegionsContainer({regions, isLoading, onLoadRegions}: Props) {
  useEffect(() => {
    onLoadRegions();
  }, [onLoadRegions]);

  const getCards = () => {
    return regions.map((region, index) => (
      <Card key={index} pathUrl={`/regions/${region}`}>
        <h2 className={styles.header}>{region}</h2>
      </Card>
    ));
  };

  const content = isLoading ? <Spinner /> : (
    <div className={styles.regionArea}>
      <h1 className={styles.header}>Choose The Region</h1>
      <div className={styles.regions}>{getCards()}</div>
    </div>
  )

  return content;
}

const mapStateToProps = ({regions, isLoading}: StoreState) => {
  return {
    regions,
    isLoading
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onLoadRegions: () => dispatch(loadRegions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegionsContainer);
