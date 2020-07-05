import { FETCH_ACTIVITIES, ADD_ACTIVITY } from '../actions/types';

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
    default:
      return state;
  }
};
