import makeActionCreator from './makeActionCreator';
import * as types from './types/eventActionTypes';

export const fetchEvents = makeActionCreator(types.FETCH_EVENTS_REQUEST);
export const fetchEventsFulfilled = makeActionCreator(types.FETCH_EVENTS_FULFILLED);
export const fetchEventsFailure = makeActionCreator(types.FETCH_EVENTS_FAILURE);

export const fetchEvent = makeActionCreator(types.FETCH_EVENT_REQUEST, 'id');
export const fetchEventFulfilled = makeActionCreator(types.FETCH_EVENT_FULFILLED);
export const fetchEventFailure = makeActionCreator(types.FETCH_EVENT_FAILURE);

export const createEvent = makeActionCreator(types.CREATE_EVENT_REQUEST, 'event');
export const createEventFulfilled = makeActionCreator(types.CREATE_EVENT_FULFILLED);
export const createEventFailure = makeActionCreator(types.CREATE_EVENT_FAILURE);

export const updateEvent = makeActionCreator(types.UPDATE_EVENT_REQUEST, 'event');
export const updateEventFulfilled = makeActionCreator(types.UPDATE_EVENT_FULFILLED);
export const updateEventFailure = makeActionCreator(types.UPDATE_EVENT_FAILURE);

export const deleteEvent = makeActionCreator(types.DELETE_EVENT_REQUEST, 'id');
export const deleteEventFulfilled = makeActionCreator(types.DELETE_EVENT_FULFILLED);
export const deleteEventFailure = makeActionCreator(types.DELETE_EVENT_FAILURE);