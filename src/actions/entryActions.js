import api from '../apis/api';
import { FETCH_ENTRIES, ADD_ENTRY, EDIT_ENTRY, SET_ERROR } from './types';
import { toast } from 'react-toastify';

export const fetchEntries = (from, to) => async (dispatch, getState) => {
  try {
    const response = await api.get('/entries', {
      headers: { Authorization: `Bearer ${getState().currentUser.token}` },
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

export const addEntry = (entryDetails) => async (dispatch, getState) => {
  try {
    await api.post('/entries', entryDetails, {
      headers: { Authorization: `Bearer ${getState().currentUser.token}` },
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

export const editEntry = (entryId, entryDetails) => async (
  dispatch,
  getState,
) => {
  try {
    await api.put(`/entries/${entryId}`, entryDetails, {
      headers: { Authorization: `Bearer ${getState().currentUser.token}` },
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
