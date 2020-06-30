import { SET_ERROR, CLEAR_ERRORS } from '../actions/types';

const INITIAL_STATE = {
  error: null,
  isOpen: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        error: action.error,
        isOpen: true,
      };
    case CLEAR_ERRORS:
      return {
        error: null,
        isOpen: false,
      };
    default:
      return state;
  }
};
