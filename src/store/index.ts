// Vendor imports
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import axios from "axios";
// Imports
import { rootReducer } from "./reducers";
import rootSaga from "./sagas";

function configureStore() {
  const saga = createSagaMiddleware();
  const composedMiddleware = composeWithDevTools(
    applyMiddleware(saga)
  );
  const store = createStore(rootReducer, composedMiddleware);
  saga.run(rootSaga);

  return store;
}

axios.defaults.baseURL = "https://restcountries.eu/rest/v2";

export default configureStore;
