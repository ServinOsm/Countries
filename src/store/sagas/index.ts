// Vendor imports
import { all, fork } from "redux-saga/effects";
// Imports
import regionsSaga from "./regionsSaga";
import countriesSaga from "./countriesSaga";
import countrySaga from "./countrySaga";

export default function* rootSaga() {
  yield all([fork(regionsSaga), fork(countriesSaga), fork(countrySaga)]);
}
