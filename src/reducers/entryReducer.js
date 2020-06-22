import { FETCH_ENTRIES } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ENTRIES:
      return {
        ...state,
        entries: action.payload,
      };
    default:
      return state;
  }
};
