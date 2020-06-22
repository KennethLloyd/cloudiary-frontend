import { SET_ERROR, HIDE_ERROR } from '../actions/types';

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
    case HIDE_ERROR:
      return {
        error: null,
        isOpen: false,
      };
    default:
      return state;
  }
};
