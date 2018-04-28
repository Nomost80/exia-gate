import { combineReducers } from 'redux';
import messages from './messageReducer';
import errors from './errorReducer';
import events from './eventReducer';

export default combineReducers({
  messages,
  errors,
  events,
});
