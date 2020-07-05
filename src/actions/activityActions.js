import api from '../apis/api';
import {
  FETCH_ACTIVITIES,
  ADD_ACTIVITY,
  DELETE_ACTIVITY,
  START_LOADING,
  FINISH_LOADING,
} from './types';
import { setError, clearErrors } from './errorActions';

export const fetchActivities = () => async (dispatch, getState) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await api.get('/activities', {
      headers: { Authorization: `Bearer ${getState().currentUser.token}` },
    });

    dispatch({ type: FINISH_LOADING });

    dispatch(clearErrors());

    dispatch({
      type: FETCH_ACTIVITIES,
      payload: response.data,
    });
  } catch (e) {
    dispatch({ type: FINISH_LOADING });
    dispatch(setError(e));
  }
};

export const addActivity = (activityDetails) => async (dispatch, getState) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await api.post('/activities', activityDetails, {
      headers: { Authorization: `Bearer ${getState().currentUser.token}` },
    });

    dispatch({ type: FINISH_LOADING });

    dispatch(clearErrors());

    dispatch({
      type: ADD_ACTIVITY,
      payload: response.data,
    });
  } catch (e) {
    dispatch({ type: FINISH_LOADING });
    dispatch(setError(e));
  }
};

export const deleteActivity = (activityId) => async (dispatch, getState) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await api.delete(`/activities/${activityId}`, {
      headers: { Authorization: `Bearer ${getState().currentUser.token}` },
    });

    dispatch({ type: FINISH_LOADING });

    dispatch(clearErrors());

    dispatch({
      type: DELETE_ACTIVITY,
      payload: response.data,
    });
  } catch (e) {
    dispatch({ type: FINISH_LOADING });
    dispatch(setError(e));
  }
};
