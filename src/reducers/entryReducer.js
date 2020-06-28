import { FETCH_ENTRIES, ADD_ENTRY } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ENTRIES:
      return {
        ...state,
        entries: action.payload,
      };
    case ADD_ENTRY:
      return {
        ...state,
        entries: [...state.entries, action.payload.entry],
      };
    default:
      return state;
  }
};
