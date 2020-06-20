import { FETCH_MOODS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOODS:
      return {
        ...state,
        moods: action.payload,
      };
    default:
      return state;
  }
};
