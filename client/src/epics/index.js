import { combineEpics } from 'redux-observable';
import { fetchEventsEpic } from "./eventEpics";

export default combineEpics(
  fetchEventsEpic
);