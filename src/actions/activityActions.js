import api from '../apis/api';
import {
  FETCH_ACTIVITIES,
  ADD_ACTIVITY,
  EDIT_ACTIVITY,
  DELETE_ACTIVITY,
  START_LOADING,
  FINISH_LOADING,
  REFETCH_ENTRIES,
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
    dispatch(setError(e.response.data.error));
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
    dispatch(setError(e.response.data.error));
  }
};

export const editActivity = (activityId, activityDetails) => async (
  dispatch,
  getState,
) => {
  try {
    dispatch({ type: START_LOADING });

    const response = await api.put(
      `/activities/${activityId}`,
      activityDetails,
      {
        headers: { Authorization: `Bearer ${getState().currentUser.token}` },
      },
    );

    response.data.oldId = activityId;

    dispatch({ type: FINISH_LOADING });

    dispatch(clearErrors());

    dispatch({
      type: EDIT_ACTIVITY,
      payload: response.data,
    });

    dispatch({
      type: REFETCH_ENTRIES,
    });
  } catch (e) {
    dispatch({ type: FINISH_LOADING });
    dispatch(setError(e.response.data.error));
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
    dispatch(setError(e.response.data.error));
  }
};
