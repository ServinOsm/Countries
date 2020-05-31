// Imports
import { LOAD_COUNTRY, SET_COUNTRY } from "./actionTypes";
// Type imports
import { Country } from "../../types";

export const loadCountry = (countryName: string) => {
  return {
    type: LOAD_COUNTRY,
    countryName
  };
};

export const setCountry = (country: Country) => {
  return {
    type: SET_COUNTRY,
    country,
  };
};
