import * as types from './types/eventActionTypes';

export const fetchEvents = () => ({
  type: types.FETCH_EVENTS_REQUEST
});

export const fetchEventsFulfilled = response => ({
  type: types.FETCH_EVENTS_FULFILLED,
  response
});

export const fetchEventsFailure = response => ({
  type: types.FETCH_EVENTS_FAILURE,
  response
});

export const fetchEvent = id => ({
  type: types.FETCH_EVENT_REQUEST,
  id
});

export const fetchEventFulfilled = response => ({
  type: types.FETCH_EVENT_FULFILLED,
  response
});

export const fetchEventFailure = response => ({
  type: types.FETCH_EVENT_FAILURE,
  response
});

export const createEvent = event => ({
  type: types.CREATE_EVENT_REQUEST,
  event
});

export const createEventFulfilled = response => ({
  type: types.CREATE_EVENT_FULFILLED,
  response
});

export const createEventFailure = response => ({
  type: types.CREATE_EVENT_FAILURE,
  response
});

export const updateEvent = event => ({
  type: types.UPDATE_EVENT_REQUEST,
  event
});

export const updateEventFulfilled = response => ({
  type: types.UPDATE_EVENT_FULFILLED,
  response
});

export const updateEventFailure = response => ({
  type: types.UPDATE_EVENT_FAILURE,
  response
});

export const deleteEvent = id => ({
  type: types.DELETE_EVENT_REQUEST,
  id
});

export const deleteEventFulfilled = response => ({
  type: types.DELETE_EVENT_FULFILLED,
  response
});

export const deleteEventFailure = response => ({
  type: types.DELETE_EVENT_FAILURE,
  response
});