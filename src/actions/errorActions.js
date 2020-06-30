import { toast } from 'react-toastify';
import { SET_ERROR, CLEAR_ERRORS } from './types';

//manual triggers
export const setError = (e) => {
  const { error } = e.response.data;

  toast.error(error);

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
