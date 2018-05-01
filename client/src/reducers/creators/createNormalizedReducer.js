import { omit, merge } from 'lodash';

const createNormalizedReducer = name => ({
  result: (state = [], { type, payload }) => {
    switch (type) {
      case `CREATE_${name}_SUCCESS`:
        const result = payload.result;
        return result instanceof Array ?
          [...result, ...state] :
          [result, ...state];

      case `UPDATE_${name}_SUCCESS`:
        const result = payload.result;
        return result instanceof Array ?
          [...result, ...state] :
          [result, ...state];

      case `DELETE_${name}_SUCCESS`:
        const result = payload.result;
        return result instanceof Array ?
          state.filter(id => !result.includes(id)) :
          state.filter(id => id !== result);

      default:
        return state;
    }
  },
  entities: (state = {}, { type, payload }) => {
    switch (type) {
      case `CREATE_${name}_SUCCESS`:
        return merge({}, state, payload.entities);

      case `UPDATE_${name}_SUCCESS`:
        return merge({}, state, payload.entities);

      case `DELETE_${name}_SUCCESS`:
        const result = payload.result;
        const paths = result instanceof Array ?
          result.map(r => `${name}.${r}`) :
          `${name}.${result}`;
        return omit(state, paths);

      default:
        return state;
    }
  }
});

export default name => createNormalizedReducer(name);