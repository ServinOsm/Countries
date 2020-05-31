// Vendor imports
import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";
// Imports
import { LOAD_REGIONS } from "../actions/actionTypes";
import { setRegions, startFetching, stopFetching } from "../actions";
// Type imports
import { Country } from "../../types"

function* requestAllCountriesData() {
  try {
    yield put(startFetching());
    const { data }: { data: Country[] } = yield axios.get("/all");
    const set: Set<string> = new Set();
    data.forEach((country) => {
      if (country.region) {
        set.add(country.region);
      }
    });
    const regions: string[] = Array.from(set);
    yield put(setRegions(regions));
    yield put(stopFetching());
  } catch {
    alert("THE REQUEST HAS FAILED AND THIS IS ERROR HANDLER");
    yield put(stopFetching());
  }
}

export default function* watchRegionsSaga() {
  yield all([takeLatest(LOAD_REGIONS, requestAllCountriesData)]);
}
