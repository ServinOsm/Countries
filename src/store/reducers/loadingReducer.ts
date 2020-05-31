// Imports
import { START_FETCHING, STOP_FETCHING } from "../actions/actionTypes";

const loadingReducer = (state: boolean = true, action: { type: string }) => {
  switch (action.type) {
    case START_FETCHING:
      return true;
    case STOP_FETCHING:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
