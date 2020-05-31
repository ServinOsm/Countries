// Vendor imports
import { lazy } from "react";

const CountryContainer = lazy(() => {
  return import("./CountryContainer");
});

export default CountryContainer;
