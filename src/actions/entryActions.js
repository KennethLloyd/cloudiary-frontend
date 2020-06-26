import api from '../apis/api';
import { FETCH_ENTRIES, SET_ERROR } from './types';
import { toast } from 'react-toastify';

export const fetchEntries = (token, from, to) => async (dispatch) => {
  try {
    const response = await api.get('/entries', {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        from,
        to,
      },
    });

    dispatch({
      type: FETCH_ENTRIES,
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

export const addEntry = (token, entryDetails) => {};
