import api from '../apis/api';
import { FETCH_MOODS } from './types';
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
