import { SET_ERROR, CLEAR_ERRORS } from './types';

//manual triggers
export const setError = (e) => {
  const { error } = e.response.data;

  return {
    type: SET_ERROR,
    error,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
