import api from '../apis/api';
import { FETCH_ACTIVITIES, SET_ERROR } from './types';
import { toast } from 'react-toastify';

export const fetchActivities = (token) => async (dispatch) => {
  try {
    const response = await api.get('/activities', {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({
      type: FETCH_ACTIVITIES,
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
