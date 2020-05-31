// Vendor imports
import { lazy } from "react";

const CountriesArea = lazy(() => {
  return import("./CountriesContainer");
});

export default CountriesArea;
