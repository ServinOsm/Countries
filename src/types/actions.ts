// Imports
import {
  LOAD_COUNTRIES,
  LOAD_COUNTRY,
  SET_COUNTRIES,
  SET_COUNTRY,
  SET_REGIONS
} from "../store/actions/actionTypes";
// Type imports
import { Country } from "./apiTypes";

export interface SetRegions {
  type: typeof SET_REGIONS;
  regions: string[];
}

export interface LoadCountries {
  type: typeof LOAD_COUNTRIES;
  region: string;
}

export interface SetCountries {
  type: typeof SET_COUNTRIES,
  countries: Country[]
}

export interface LoadCountry {
  type: typeof LOAD_COUNTRY;
  countryName: string;
}

export interface SetCountry {
  type: typeof SET_COUNTRY;
  country: Country;
}