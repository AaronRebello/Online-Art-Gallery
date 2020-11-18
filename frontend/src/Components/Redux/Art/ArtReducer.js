import { ART_ACTION_TYPES } from "./ArtAction";

const { DATA_STATE } = require("../dataState");

const initialState = {
  art: null,
  error: null,
  dataState: DATA_STATE.NOT_INITIALIZED,
};

//  eslint-disable-next-line 
export default function (state = initialState, action) {
  switch (action.type) {
    case ART_ACTION_TYPES.FETCHING:
      return {
        ...state,
        dataState: DATA_STATE.FETCHING,
      };
    case ART_ACTION_TYPES.ART_FETCH_SUCCESS:
      return {
        ...state,
        dataState: DATA_STATE.FETCH_SUCCESS,
        art: action.payload,
      };
    case ART_ACTION_TYPES.ART_FETCH_FAILED:
      return {
        ...state,
        dataState: DATA_STATE.FETCHED_FAILED,
        art: action.payload,
      };
    default:
      return state;
  }
}
