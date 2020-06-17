import { LOG_IN, SIGN_UP } from '../actions/types';

const INITIAL_STATE = {
  info: {},
  token: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        info: action.payload.user,
        token: action.payload.token
      };
    case SIGN_UP:
      return {
        ...state,
        info: action.payload.user,
        token: action.payload.token
      };
    default:
      return state;
  }
};
