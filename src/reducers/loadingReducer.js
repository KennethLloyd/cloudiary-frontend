import { START_LOADING, FINISH_LOADING } from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        isLoading: true,
      };
    case FINISH_LOADING:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};
