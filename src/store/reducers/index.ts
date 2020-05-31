// Vendor imports
import { combineReducers } from "redux";
// Imports
import regionsReducer from "./regionsReducer"
import countriesReducer from "./countriesReducer";
import countryReducer from "./countryReducer";
import loadingReducer from "./loadingReducer";
// Type imports
import { StoreState } from "../../types";

export const rootReducer = combineReducers<StoreState>({
  regions: regionsReducer,
  countries: countriesReducer,
  country: countryReducer,
  isLoading: loadingReducer,
})