import { AUTH_ACTION_TYPES } from "./AuthAction";
import isEmpty from "../../utils/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {},
};

//  eslint-disable-next-line 
export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.ON_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
}
