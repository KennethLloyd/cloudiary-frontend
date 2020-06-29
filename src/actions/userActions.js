import api from '../apis/api';
import { LOG_IN, SIGN_UP, LOG_OUT, SET_ERROR, HIDE_ERROR } from './types';
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

    history.push('/');
  } catch (e) {
    const errorMessage = e.response.data.error;

    dispatch({
      type: SET_ERROR,
      error: errorMessage,
    });

    toast.error(errorMessage);

    history.push('/login');
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

    history.push('/');
  } catch (e) {
    const errorMessage = e.response.data.error;

    dispatch({
      type: SET_ERROR,
      error: errorMessage,
    });

    toast.error(errorMessage);

    history.push('/signup');
  }
};

export const logOut = () => async (dispatch, getState) => {
  try {
    await api.post('/users/logout', null, {
      headers: { Authorization: `Bearer ${getState().currentUser.token}` },
    });

    dispatch({
      type: LOG_OUT,
    });

    dispatch({
      type: HIDE_ERROR,
    });

    history.push('/login');
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
