// Vendor imports
import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// Imports
import RegionsContainer from "./containers/RegionsContainer";
import CountriesContainer from "./containers/CountriesContainer";
import CountryContainer from "./containers/CountryContainer";
import Spinner from "./components/Spinner/Spinner";
// Style imports
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route
            path="/regions/:regionName/:countryName"
            render={() => <CountryContainer />}
          />
          <Route
            path="/regions/:regionName/"
            render={() => <CountriesContainer />}
          />
          <Route path="/regions" render={() => <RegionsContainer />} />
          <Redirect to="/regions" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
