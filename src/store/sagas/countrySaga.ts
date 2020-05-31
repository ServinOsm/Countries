// Vendor imports
import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";
// Imports
import { LOAD_COUNTRY } from "../actions/actionTypes";
import { setCountry, startFetching, stopFetching } from "../actions";
// Type imports
import { LoadCountry, Country } from "../../types";


function* requestCountry({ countryName }: LoadCountry) {
  try {
    yield put(startFetching());
    const { data: [country] }: { data: Country[] } = yield axios.get(`/name/${countryName}`);
    yield put(setCountry(country));
    yield put(stopFetching());
  } catch {
    alert("THE REQUEST HAS FAILED AND THIS IS ERROR HANDLER");
    yield put(stopFetching());
  }
}

export default function* watchCountrySaga() {
  yield all([takeLatest(LOAD_COUNTRY, requestCountry)]);
}