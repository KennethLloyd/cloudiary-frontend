import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import moodReducer from './moodReducer';
import entryReducer from './entryReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  form: formReducer,
  currentUser: userReducer,
  moods: moodReducer,
  entries: entryReducer,
  errors: errorReducer
});
