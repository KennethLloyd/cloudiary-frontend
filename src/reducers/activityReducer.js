import {
  FETCH_ACTIVITIES,
  ADD_ACTIVITY,
  EDIT_ACTIVITY,
  DELETE_ACTIVITY,
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case ADD_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload.activity],
      };
    case EDIT_ACTIVITY:
      return {
        ...state,
        activities: [
          ...state.activities.map((activity) =>
            activity._id === action.payload.oldId
              ? action.payload.activity
              : activity,
          ),
        ],
      };
    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: [
          ...state.activities.filter(
            (activity) => activity._id !== action.payload.activity._id,
          ),
        ],
      };
    default:
      return state;
  }
};
