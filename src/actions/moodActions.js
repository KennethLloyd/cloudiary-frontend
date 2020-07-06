import api from '../apis/api';
import {
  FETCH_MOODS,
  ADD_MOOD,
  EDIT_MOOD,
  DELETE_MOOD,
  START_LOADING,
  FINISH_LOADING,
  REFETCH_ENTRIES,
} from './types';
import { setError, clearErrors } from './errorActions';

export const fetchMoods = () => async (dispatch, getState) => {
  try {
    const response = await api.get('/moods', {
      headers: { Authorization: `Bearer ${getState().currentUser.token}` },
    });

    dispatch(clearErrors());

    dispatch({
      type: FETCH_MOODS,
      payload: response.data,
    });
  } catch (e) {
    dispatch(setError(e));
  }
};

export const addMood = (moodDetails) => async (dispatch, getState) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await api.post('/moods', moodDetails, {
      headers: { Authorization: `Bearer ${getState().currentUser.token}` },
    });

    dispatch({ type: FINISH_LOADING });

    dispatch(clearErrors());

    dispatch({
      type: ADD_MOOD,
      payload: response.data,
    });
  } catch (e) {
    dispatch({ type: FINISH_LOADING });
    dispatch(setError(e));
  }
};

export const editMood = (moodId, moodDetails) => async (dispatch, getState) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await api.put(`/moods/${moodId}`, moodDetails, {
      headers: { Authorization: `Bearer ${getState().currentUser.token}` },
    });

    response.data.oldId = moodId;

    dispatch({ type: FINISH_LOADING });

    dispatch(clearErrors());

    dispatch({
      type: EDIT_MOOD,
      payload: response.data,
    });

    dispatch({
      type: REFETCH_ENTRIES,
    });
  } catch (e) {
    dispatch({ type: FINISH_LOADING });
    dispatch(setError(e));
  }
};
