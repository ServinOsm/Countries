// Imports
import { LOAD_COUNTRIES, SET_COUNTRIES } from "./actionTypes";
// Type imports
import { Country } from "../../types";

export const loadCountries = (region: string) => {
  return {
    type: LOAD_COUNTRIES,
    region
  };
};

export const setCountries = (countries: Country[]) => {
  return {
    type: SET_COUNTRIES,
    countries,
  };
};
