// Type imports
import { Country } from "./apiTypes"

export interface StoreState {
  regions: string[];
  countries: Country[];
  country: Country;
  isLoading: boolean;
}