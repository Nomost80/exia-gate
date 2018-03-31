import { combineReducers } from 'redux';
import events from './eventReducer';
import messages from './messageReducer';

export default combineReducers({
  events,
  messages
});
