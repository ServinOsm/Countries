// Vendor imports
import { lazy } from "react";

const CountryArea = lazy(() => {
  return import("./CountryArea");
});

export default CountryArea;
