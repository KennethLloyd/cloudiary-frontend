import { FETCH_ENTRIES, ADD_ENTRY, EDIT_ENTRY } from '../actions/types';

const INITIAL_STATE = {
  entries: [],
  refetchEntryTrigger: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ENTRIES:
      return {
        ...state,
        entries: action.payload,
      };
    case ADD_ENTRY:
    case EDIT_ENTRY:
      return {
        ...state,
        refetchEntryTrigger: !state.refetchEntryTrigger, // allows us to trigger refetch after a successful new entry
      };
    default:
      return state;
  }
};
