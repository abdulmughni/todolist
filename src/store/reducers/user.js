import * as types from "../constants";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return { ...state, loginRes: action.payload };
    case types.LOGIN_FAILURE:
      return { ...state, loginRes: action.payload };

    default:
      return state;
  }
};
