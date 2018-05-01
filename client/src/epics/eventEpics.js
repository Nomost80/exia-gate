import { push } from 'react-router-redux'
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

export const fetchEventEpic = (action$, store, { ajax }) =>
  action$.ofType(types.FETCH_EVENT_REQUEST)
    .switchMap(payload =>
      ajax.get(`/api/events/${payload.id}`)
        .map(response => actions.fetchEventFulfilled(response))
        .catch(response => actions.fetchEventFailure(response))
        .takeUntil(action$.ofType(types.FETCH_EVENT_ABORT))
    );

export const createEventEpic = (action$, store, { ajax, of }) =>
  action$.ofType(types.CREATE_EVENT_REQUEST)
    .switchMap(payload =>
      ajax.post('/api/events', {body: payload.event}, schemas.event)
        .mergeMap(response =>
          of(
            actions.createEventFulfilled(response),
            store.dispatch(push('/events')),
            notify("Event successfully created")
          )
        )
        .catch(response => actions.createEventFailure(response))
        .takeUntil(action$.ofType(types.CREATE_EVENT_ABORT))
    );

export const updateEventEpic = (action$, store, { ajax, of }) =>
  action$.ofType(types.UPDATE_EVENT_REQUEST)
    .switchMap(payload =>
      ajax.put(`/api/events/${event.id}`, {body: payload.event}, schemas.event)
        .mergeMap(response =>
          of(
            actions.updateEventFulfilled(response),
            store.dispatch(push('/events')),
            notify("Event successfully updated")
          )
        )
        .catch(response => actions.updateEventFailure(response))
        .takeUntil(action$.ofType(types.UPDATE_EVENT_ABORT))
    );

export const deleteEventEpic = (action$, store, { ajax, of }) =>
  action$.ofType(types.DELETE_EVENT_REQUEST)
    .switchMap(payload =>
      ajax.delete(`/api/events/${payload.id}`, schemas.event)
        .mergeMap(response =>
          of(
            actions.deleteEventFulfilled(response),
            notify("Event successfully deleted")
          )
        )
        .catch(response => actions.deleteEventFailure(response))
        .takeUntil(action$.ofType(types.DELETE_EVENT_ABORT))
    );