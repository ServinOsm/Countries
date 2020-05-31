// Vendor imports
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
// Imports
import CountriesArea from "./CounriesArea";
import Spinner from "../../components/Spinner/Spinner";
import { loadCountries } from "../../store/actions";
// Type imports
import { Dispatch } from "redux";
import { Country, StoreState } from "../../types";


type StateToProps = {
  countries: Country[];
  isLoading: boolean;
};

type DispatchToProps = {
  onLoadCountries: (region: string) => void;
};

type Props = StateToProps & DispatchToProps;

function CountriesContainer({onLoadCountries, countries, isLoading}: Props) {
  const { regionName } = useParams();
  useEffect(() => {
    onLoadCountries(regionName);
  }, [onLoadCountries, regionName]);

  const content = isLoading ? (
    <Spinner />
  ) : (
    <CountriesArea countries={countries} regionName={regionName}/>
  );
  return content;
}

const mapStateToProps = ({ countries, isLoading }: StoreState) => {
  return {
    countries,
    isLoading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onLoadCountries: (region: string) => dispatch(loadCountries(region)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountriesContainer);
