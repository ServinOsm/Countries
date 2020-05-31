// Imports
import { LOAD_REGIONS, SET_REGIONS} from "./actionTypes";

export const loadRegions = () => {
  return {
    type: LOAD_REGIONS,
  };
};

export const setRegions = (regions: string[]) => {
  return {
    type: SET_REGIONS,
    regions,
  };
};
