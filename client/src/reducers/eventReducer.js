import { combineReducers } from 'redux';
import { uniq, merge, omit } from 'lodash';
import * as types from '../actions/types/eventActionTypes';

const loading = (state = false, {type}) => {
  switch (type) {
    case types.FETCH_EVENTS_REQUEST:
      return true;
    case types.FETCH_EVENTS_FULFILLED:
      return false;
    case types.FETCH_EVENTS_FAILURE:
      return false;
    case types.CREATE_EVENT_REQUEST:
      return true;
    case types.CREATE_EVENT_FULFILLED:
      return false;
    case types.CREATE_EVENT_FAILURE:
      return false;
    case types.UPDATE_EVENT_REQUEST:
      return true;
    case types.UPDATE_EVENT_FULFILLED:
      return false;
    case types.UPDATE_EVENT_FAILURE:
      return false;
    default:
      return state;
  }
};

const result = (state = [], { type, response }) => {
  switch (type) {
    case types.FETCH_EVENTS_FULFILLED:
      return uniq([...state, ...response.result]);
    case types.CREATE_EVENT_FULFILLED:
      return uniq([response.result, ...state]);
    case types.UPDATE_EVENT_FULFILLED:
      return uniq([response.result, ...state]);
    case types.DELETE_EVENT_FULFILLED:
      return state.filter(id => id !== response.result);
    default:
      return state;
  }
};

const entities = (state = {}, { type, response }) => {
  switch (type) {
    case types.FETCH_EVENTS_FULFILLED:
      return merge({}, state, response.entities);
    case types.FETCH_EVENT_FULFILLED:
      return merge({}, state, response.entities);
    case types.CREATE_EVENT_FULFILLED:
      return merge({}, state, response.entities);
    case types.UPDATE_EVENT_FULFILLED:
      return merge({}, state, response.entities);
    case types.DELETE_EVENT_FULFILLED:
      return omit(state, `events.${response.result}`);
    default:
      return state;
  }
};

// Les autres erreurs seront des toasts via un autre reducer
const errors = (state = {}, { type, response }) => {
  switch (type) {
    case types.CREATE_EVENT_FULFILLED:
      return {};
    case types.CREATE_EVENT_FAILURE:
      return response.errors;
    case types.UPDATE_EVENT_FULFILLED:
      return {};
    case types.UPDATE_EVENT_FAILURE:
      return response.errors;
    default:
      return state;
  }
};

export default combineReducers({
  loading,
  result,
  entities,
  errors
});