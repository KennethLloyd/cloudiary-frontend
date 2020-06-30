import api from '../apis/api';
import { FETCH_ACTIVITIES } from './types';
import { setError, clearErrors } from './errorActions';

export const fetchActivities = () => async (dispatch, getState) => {
  try {
    const response = await api.get('/activities', {
      headers: { Authorization: `Bearer ${getState().currentUser.token}` },
    });

    dispatch(clearErrors());

    dispatch({
      type: FETCH_ACTIVITIES,
      payload: response.data,
    });
  } catch (e) {
    dispatch(setError(e));
  }
};
