import { camelize } from 'humps';

export default (state = {}, { type }) => {
  const camelizedType = camelize(type);

  if (type.includes('REQUEST')) {
    return {
      ...state,
      [camelizedType]: true
    };
  }

  else if (!type.includes('REQUEST') && state[camelizedType]) {
    return {
      ...state,
      [camelizedType]: false
    };
  }

  return state;
};
