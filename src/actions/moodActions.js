import api from '../apis/api';
import { FETCH_MOODS, SET_ERROR } from './types';
import { toast } from 'react-toastify';

export const fetchMoods = (token) => async (dispatch) => {
  try {
    const response = await api.get('/moods', {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({
      type: FETCH_MOODS,
      payload: response.data,
    });
  } catch (e) {
    const errorMessage = e.response.data.error;

    dispatch({
      type: SET_ERROR,
      error: errorMessage,
    });

    toast.error(errorMessage);
  }
};
