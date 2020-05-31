// Vendor imports
import { lazy } from "react";

const CountriesArea = lazy(() => {
  return import("./CountriesArea");
});

export default CountriesArea;
