// Imports
import { SET_COUNTRY } from "../actions/actionTypes";
// Type imports
import { Country, SetCountry } from "../../types";

let initialState: Country = {
  name: "",
  topLevelDomain: [],
  alpha2Code: "",
  alpha3Code: "",
  callingCodes: [],
  capital: "",
  altSpellings: [],
  region: "",
  subregion: "",
  population: 0,
  latlng: [],
  demonym: "",
  area: 0,
  gini: 0,
  timezones: [],
  borders: [],
  nativeName: "",
  numericCode: "",
  currencies: [],
  languages: [],
  translations: {},
  flag: "",
  regionalBlocs: [],
  cioc: "",
}

const countriesReducer = (state = initialState, action: SetCountry) => {
  switch (action.type) {
    case SET_COUNTRY:
      return {...action.country};
    default:
      return {...state};
  }
};

export default countriesReducer;
