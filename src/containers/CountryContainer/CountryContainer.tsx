
// Vendor imports
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useParams } from "react-router";
// Imports
import CountryArea from "./CountryArea";
import Spinner from "../../components/Spinner/Spinner";
import { loadCountry } from "../../store/actions";
// Type imports
import { Country, StoreState } from "../../types";

type StateToProps = {
  country: Country;
  isLoading: boolean;
};

type DispatchToProps = {
  onLoadCountry: (countryName: string) => void;
};

type Props = StateToProps & DispatchToProps;

function CountryContainer({
  country: {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    languages,
    currencies,
    borders,
    regionalBlocs,
    altSpellings,
    callingCodes,
    timezones,
    flag,
  },
  isLoading,
  onLoadCountry,
}: Props) {

  const { countryName, regionName } = useParams();
  useEffect(() => {
    onLoadCountry(countryName);
  }, [countryName, onLoadCountry]);

  const content = isLoading ? (
    <Spinner />
  ) : (
    <CountryArea
      name={name}
      flag={flag}
      regionName={regionName}
      mainInfo={{
        "Native Name": nativeName,
        Population: population,
        Region: region,
        Capital: capital,
        Subregion: subregion,
      }}
      secondaryInfo={{
        Languages: languages,
        Currencies: currencies,
        "Regional Blocks": regionalBlocs,
      }}
      additionalInfo={{
        Spellings: altSpellings,
        Borders: borders,
        "Calling Codes": callingCodes,
        "Time Zones": timezones,
      }}
    />
  );

  return content;
}

const mapStateToProps = ({ country, isLoading }: StoreState) => {
  return {
    country,
    isLoading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onLoadCountry: (countryName: string) => dispatch(loadCountry(countryName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryContainer);
