import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import loadings from './loadingReducer';
import messages from './messageReducer';
import errors from './errorReducer';
import events from './eventReducer';

export default combineReducers({
  router: routerReducer,
  loadings,
  messages,
  errors,
  events,
});
