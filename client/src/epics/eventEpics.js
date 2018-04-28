import * as types from '../actions/types/eventActionTypes';
import * as actions from '../actions/eventActions';
import { notify } from '../actions/messageActions';
import schemas from "../schemas";

export const fetchEventsEpic = (action$, store, { ajax }) =>
  action$.ofType(types.FETCH_EVENTS_REQUEST)
    .switchMap(() =>
      ajax.get('/api/events')
        .map(response => actions.fetchEventsFulfilled(response))
        .catch(response => actions.fetchEventsFailure(response))
        .takeUntil(action$.ofType(types.FETCH_EVENTS_ABORT))
    );

export const fetchEvent = (action$, store, { ajax }) =>
  action$.ofType(types.FETCH_EVENT_REQUEST)
    .switchMap(id =>
      ajax.get(`/api/events/${id}`)
        .map(response => actions.fetchEventFulfilled(response))
        .catch(response => actions.fetchEventFailure(response))
        .takeUntil(action$.ofType(types.FETCH_EVENT_ABORT))
    );

export const createEventEpic = (action$, store, { ajax, of }) =>
  action$.ofType(types.CREATE_EVENT_REQUEST)
    .switchMap(event =>
      ajax.post('/api/events', {body: event}, schemas.event)
        .mergeMap(response =>
          of(
            actions.createEventFulfilled(response),
            notify("Event successfully created")
          )
        )
        .catch(response => actions.createEventFailure(response))
        .takeUntil(action$.ofType(types.CREATE_EVENT_ABORT))
    );

export const updateEventEpic = (action$, store, { ajax, of }) =>
  action$.ofType(types.UPDATE_EVENT_REQUEST)
    .switchMap(event =>
      ajax.put(`/api/events/${event.id}`, {body: event}, schemas.event)
        .mergeMap(response =>
          of(
            actions.updateEventFulfilled(response),
            notify("Event successfully updated")
          )
        )
        .catch(response => actions.updateEventFailure(response))
        .takeUntil(action$.ofType(types.UPDATE_EVENT_ABORT))
    );

export const deleteEventEpic = (action$, store, { ajax, of }) =>
  action$.ofType(types.DELETE_EVENT_REQUEST)
    .switchMap(id =>
      ajax.delete(`/api/events/${id}`, schemas.event)
        .mergeMap(response =>
          of(
            actions.deleteEventFulfilled(response),
            notify("Event successfully deleted")
          )
        )
        .catch(response => actions.deleteEventFailure(response))
        .takeUntil(action$.ofType(types.DELETE_EVENT_ABORT))
    );