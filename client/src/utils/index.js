import { normalize } from 'normalizr';
import { camelizeKeys } from 'humps';

export const format = (data, schema) => normalize(camelizeKeys(data), schema);