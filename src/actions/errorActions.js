import { SET_ERROR, HIDE_ERROR } from './types';

//manual triggers
export const setError = (error) => async (dispatch) => {
  dispatch({
    type: SET_ERROR,
    error,
  });
};

export const hideError = () => async (dispatch) => {
  dispatch({
    type: HIDE_ERROR,
  });
};
