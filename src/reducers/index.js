import { combineReducers } from 'redux';
import userReducer from './userReducer';
import moodReducer from './moodReducer';
import activityReducer from './activityReducer';
import entryReducer from './entryReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  currentUser: userReducer,
  moods: moodReducer,
  activities: activityReducer,
  entries: entryReducer,
  errors: errorReducer,
});
