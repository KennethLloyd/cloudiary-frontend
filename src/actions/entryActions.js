import api from '../apis/api';
import { FETCH_ENTRIES, ADD_ENTRY, EDIT_ENTRY, SET_ERROR } from './types';
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

export const addEntry = (token, entryDetails) => async (dispatch) => {
  try {
    await api.post('/entries', entryDetails, {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({
      type: ADD_ENTRY,
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

export const editEntry = (token, entryId, entryDetails) => async (dispatch) => {
  try {
    await api.put(`/entries/${entryId}`, entryDetails, {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({
      type: EDIT_ENTRY,
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
