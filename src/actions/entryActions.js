import api from '../apis/api';
import { FETCH_ENTRIES, ADD_ENTRY, EDIT_ENTRY, DELETE_ENTRY } from './types';
import { setError, clearErrors } from './errorActions';

export const fetchEntries = (from, to) => async (dispatch, getState) => {
  try {
    const response = await api.get('/entries', {
      headers: { Authorization: `Bearer ${getState().currentUser.token}` },
      params: {
        from,
        to,
      },
    });

    dispatch(clearErrors());

    dispatch({
      type: FETCH_ENTRIES,
      payload: response.data,
    });
  } catch (e) {
    dispatch(setError(e));
  }
};

export const addEntry = (entryDetails) => async (dispatch, getState) => {
  try {
    await api.post('/entries', entryDetails, {
      headers: { Authorization: `Bearer ${getState().currentUser.token}` },
    });

    dispatch(clearErrors());

    dispatch({
      type: ADD_ENTRY,
    });
  } catch (e) {
    dispatch(setError(e));
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

    dispatch(clearErrors());

    dispatch({
      type: EDIT_ENTRY,
    });
  } catch (e) {
    dispatch(setError(e));
  }
};

export const deleteEntry = (entryId) => async (dispatch, getState) => {
  try {
    await api.delete(`/entries/${entryId}`, {
      headers: { Authorization: `Bearer ${getState().currentUser.token}` },
    });

    dispatch(clearErrors());

    dispatch({
      type: DELETE_ENTRY,
    });
  } catch (e) {
    dispatch(setError(e));
  }
};
