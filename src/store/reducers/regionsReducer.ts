// Imports
import { SET_REGIONS } from "../actions/actionTypes";
// Type imports
import { SetRegions } from "../../types";

const regionsReducer = (state: string[] = [], action: SetRegions) => {
  switch (action.type) {
    case SET_REGIONS:
      return [...action.regions];
    default:
      return [...state];
  }
};

export default regionsReducer;
