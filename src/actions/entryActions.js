import api from '../apis/api';
import {
  FETCH_ENTRIES,
  ADD_ENTRY,
  EDIT_ENTRY,
  DELETE_ENTRY,
  START_LOADING,
  FINISH_LOADING,
} from './types';
import { setError, clearErrors } from './errorActions';

export const fetchEntries = (from, to) => async (dispatch, getState) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await api.get('/entries', {
      headers: { Authorization: `Bearer ${getState().currentUser.token}` },
      params: {
        from,
        to,
      },
    });

    dispatch({ type: FINISH_LOADING });

    dispatch(clearErrors());

    dispatch({
      type: FETCH_ENTRIES,
      payload: response.data,
    });
  } catch (e) {
    dispatch({ type: FINISH_LOADING });
    dispatch(setError(e.response.data.error));
  }
};

export const addEntry = (entryDetails) => async (dispatch, getState) => {
  try {
    dispatch({ type: START_LOADING });

    await api.post('/entries', entryDetails, {
      headers: { Authorization: `Bearer ${getState().currentUser.token}` },
    });

    dispatch({ type: FINISH_LOADING });

    dispatch(clearErrors());

    dispatch({
      type: ADD_ENTRY,
    });
  } catch (e) {
    dispatch({ type: FINISH_LOADING });
    dispatch(setError(e.response.data.error));
  }
};

export const editEntry = (entryId, entryDetails) => async (
  dispatch,
  getState,
) => {
  try {
    dispatch({ type: START_LOADING });

    await api.put(`/entries/${entryId}`, entryDetails, {
      headers: { Authorization: `Bearer ${getState().currentUser.token}` },
    });

    dispatch({ type: FINISH_LOADING });

    dispatch(clearErrors());

    dispatch({
      type: EDIT_ENTRY,
    });
  } catch (e) {
    dispatch(setError(e.response.data.error));
  }
};

export const deleteEntry = (entryId) => async (dispatch, getState) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await api.delete(`/entries/${entryId}`, {
      headers: { Authorization: `Bearer ${getState().currentUser.token}` },
    });

    dispatch({ type: FINISH_LOADING });

    dispatch(clearErrors());

    dispatch({
      type: DELETE_ENTRY,
      payload: response.data.entry,
    });
  } catch (e) {
    dispatch({ type: FINISH_LOADING });
    dispatch(setError(e.response.data.error));
  }
};
