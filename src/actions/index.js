// Action Creators
import api from '../apis/api';
import { LOG_IN, SIGN_UP } from './types';
import history from '../history';

export const logIn = formValues => async dispatch => {
  const response = await api.post('/users/logIn', formValues);

  dispatch({
    type: LOG_IN,
    payload: response.data
  });

  history.push('/home');
};

export const signUp = formValues => async dispatch => {
  const response = await api.post('/users', formValues);

  dispatch({
    type: SIGN_UP,
    payload: response.data
  });

  history.push('/home');
};
