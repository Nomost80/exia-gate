import * as Rx from 'rxjs';
import { decamelizeKeys } from 'humps';
import * as types from '../actions/types/eventActionTypes';
import * as actions from '../actions/eventActions';
import { notify } from '../actions/messageActions';
import schemas from "../schemas";
import { format } from "../utils";
import request from '../utils/request';

export const fetchEventsEpic = action$ =>
  action$.ofType(types.FETCH_EVENTS_REQUEST)
    .switchMap(count =>
      Rx.Observable.ajax.getJSON('/api/events')
        .map(response => actions.fetchEventsFulfilled(format(response, schemas.events)))
        .catch(response => actions.fetchEventsFailure(response))
    );

export const fetchEvent = action$ =>
  action$.ofType(types.FETCH_EVENT_REQUEST)
    .switchMap(id =>
      Rx.Observable.ajax.getJSON(`/api/events/${id}`)
        .map(response => actions.fetchEventFulfilled(format(response, schemas.event)))
        .catch(response => actions.fetchEventFailure(response))
    );

const createRequestSettings = event => ({
  method: 'POST',
  responseType: 'json',
  url: '/api/events',
  body: JSON.stringify(decamelizeKeys(event))
});

export const createEventEpic = action$ =>
  action$.ofType(types.CREATE_EVENT_REQUEST)
    .switchMap(event =>
      Rx.Observable.ajax(createRequestSettings(event))
        .mergeMap(response =>
          Rx.Observable.of(
            actions.createEventFulfilled(format(response, schemas.event)),
            notify("Event successfully created")
          )
        )
        .catch(response => actions.createEventFailure(response))
    );

const updateRequestSettings = event => ({
  method: 'PATCH',
  responseType: 'json',
  url: '/api/events',
  body: JSON.stringify(decamelizeKeys(event))
});

export const updateEventEpic = action$ =>
  action$.ofType(types.UPDATE_EVENT_REQUEST)
    .switchMap(event =>
      Rx.Observable.ajax(updateRequestSettings(event))
        .mergeMap(response =>
          Rx.Observable.of(
            actions.updateEventFulfilled(format(response, schemas.event)),
            notify("Event successfully updated")
          )
        )
        .catch(response => actions.updateEventFailure(response))
    );

const deleteRequestSettings = id => ({
  method: 'DELETE',
  responseType: 'json',
  url: `/api/events/${id}`
});

export const deleteEventEpic = action$ =>
  action$.ofType(types.DELETE_EVENT_REQUEST)
    .switchMap(id =>
      Rx.Observable.ajax(deleteRequestSettings(id))
        .mergeMap(response =>
          Rx.Observable.of(
            actions.deleteEventFulfilled(format(response, schemas.event)),
            notify("Event successfully deleted")
          )
        )
        .catch(response => actions.deleteEventFailure(response))
    );