// Action Creators
import api from '../apis/api';
import { LOG_IN } from './types';
import history from '../history';

export const logIn = formValues => async dispatch => {
  const response = await api.post('/users/logIn', formValues);

  dispatch({
    type: LOG_IN,
    payload: response.data,
  });
  history.push('/');
};
