import {
  FETCH_MOODS,
  ADD_MOOD,
  EDIT_MOOD,
  DELETE_MOOD,
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOODS:
      return {
        ...state,
        moods: action.payload,
      };
    case EDIT_MOOD:
      return {
        ...state,
        moods: [
          ...state.moods.map((mood) =>
            mood._id === action.payload.oldId ? action.payload.mood : mood,
          ),
        ],
      };
    default:
      return state;
  }
};
