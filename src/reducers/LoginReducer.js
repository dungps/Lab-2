import { START_LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  token: null,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_LOGIN:
      return INITIAL_STATE;
    case LOGIN_FAIL:
      return { ...state, token: null, error: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload, error: null };
    default:
      return state;
  }
};
