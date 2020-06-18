// Action Creators
import api from '../apis/api';
import { LOG_IN, SIGN_UP, SET_ERROR, HIDE_ERROR } from './types';
import history from '../history';
import { toast } from 'react-toastify';

export const logIn = (formValues) => async (dispatch) => {
  try {
    const response = await api.post('/users/logIn', formValues);

    dispatch({
      type: LOG_IN,
      payload: response.data,
    });

    dispatch({
      type: HIDE_ERROR,
    });

    history.push('/home');
  } catch (e) {
    const errorMessage = e.response.data.error;

    dispatch({
      type: SET_ERROR,
      error: errorMessage,
    });

    toast.error(errorMessage);

    history.push('/');
  }
};

export const signUp = (formValues) => async (dispatch) => {
  try {
    const response = await api.post('/users', formValues);

    dispatch({
      type: SIGN_UP,
      payload: response.data,
    });

    dispatch({
      type: HIDE_ERROR,
    });

    history.push('/home');
  } catch (e) {
    const errorMessage = e.response.data.error;

    dispatch({
      type: SET_ERROR,
      error: errorMessage,
    });

    toast.error(errorMessage);

    history.push('/sign-up');
  }
};

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
