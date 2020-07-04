import api from '../apis/api';
import {
  LOG_IN,
  SIGN_UP,
  LOG_OUT,
  START_LOADING,
  FINISH_LOADING,
} from './types';
import history from '../history';
import { setError, clearErrors } from './errorActions';

export const logIn = (formValues) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await api.post('/users/logIn', formValues);

    dispatch({ type: FINISH_LOADING });

    dispatch({
      type: LOG_IN,
      payload: response.data,
    });

    dispatch(clearErrors());

    history.push('/');
  } catch (e) {
    dispatch({ type: FINISH_LOADING });
    dispatch(setError(e));
    history.push('/login');
  }
};

export const signUp = (formValues) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await api.post('/users', formValues);

    dispatch({ type: FINISH_LOADING });

    dispatch({
      type: SIGN_UP,
      payload: response.data,
    });

    dispatch(clearErrors());

    history.push('/');
  } catch (e) {
    dispatch({ type: FINISH_LOADING });
    dispatch(setError(e));
    history.push('/signup');
  }
};

export const logOut = () => async (dispatch, getState) => {
  try {
    dispatch({ type: START_LOADING });

    await api.post('/users/logout', null, {
      headers: { Authorization: `Bearer ${getState().currentUser.token}` },
    });

    dispatch({ type: FINISH_LOADING });

    dispatch({
      type: LOG_OUT,
    });

    dispatch(clearErrors());

    history.push('/login');
  } catch (e) {
    dispatch({ type: FINISH_LOADING });
    dispatch(setError(e));
    history.push('/');
  }
};
