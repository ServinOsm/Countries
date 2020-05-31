// Vendor imports
import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";
// Imports
import { LOAD_COUNTRIES } from "../actions/actionTypes";
import { setCountries, startFetching, stopFetching } from "../actions";
// Type imports
import { LoadCountries, Country } from "../../types";


function* requestCountries({ region }: LoadCountries) {
  try {
    yield put(startFetching());
    const { data }: { data: Country[] } = yield axios.get(`/region/${region}`);
    yield put(setCountries(data));
    yield put(stopFetching());
  } catch {
    alert("THE REQUEST HAS FAILED AND THIS IS ERROR HANDLER");
    yield put(stopFetching());
  }
}

export default function* watchCountriesSaga() {
  yield all([takeLatest(LOAD_COUNTRIES, requestCountries)]);
}