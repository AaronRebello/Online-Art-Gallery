import { combineReducers } from "redux";
import ArtReducer from "./Art/ArtReducer";
import authReducer from "./Authentication/AuthReducer";
// import artReducer from "./Art/ArtReducer";

export default combineReducers({
  auth: authReducer,
  art: ArtReducer,
});
