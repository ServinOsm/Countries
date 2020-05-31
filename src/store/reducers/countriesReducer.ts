// Imports
import { SET_COUNTRIES } from "../actions/actionTypes";
// Type imports
import { Country, SetCountries } from "../../types";

const countriesReducer = (state: Country[] = [], action: SetCountries) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return [...action.countries];
    default:
      return [...state];
  }
};

export default countriesReducer;
