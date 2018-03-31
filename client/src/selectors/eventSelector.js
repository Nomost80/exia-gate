import { createSelectorCreator, defaultMemoize } from 'reselect';
import { isEqual } from 'lodash';
import { denormalize } from 'normalizr';
import schemas from '../schemas';

const createSelector = createSelectorCreator(defaultMemoize, isEqual);

const idsSelector = state => state.events.result;
const entitiesSelector = state => state.events.entities;
const idSelector = (state, props) => props.match.params.id;

export const getEvents = createSelector(
  idsSelector,
  entitiesSelector,
  (ids, entities) => denormalize(ids, schemas.events, entities)
);

export const getEvent = createSelector(
  idSelector,
  entitiesSelector,
  (id, entities) => denormalize(id, schemas.event, entities)
);