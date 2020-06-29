import { FETCH_ENTRIES, ADD_ENTRY } from '../actions/types';

const INITIAL_STATE = {
  entries: [],
  addEntryToggle: false,
};

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
        addEntryToggle: !state.addEntryToggle, // allows us to trigger refetch after a successful new entry
      };
    default:
      return state;
  }
};
