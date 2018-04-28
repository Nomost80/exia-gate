import { omit, merge } from 'lodash';

const createNormalizedReducer = name => ({
  result: (state = [], { type, response }) => {
    switch (type) {
      case `FETCH_${name}_SUCCESS`:
        return response.result;
      case `CREATE_${name}_SUCCESS`:
        return [response.result, ...state];
      case `DELETE_${name}_SUCCESS`:
        return state.filter(id => id !== response.result);
      default:
        return state;
    }
  },
  entities: (state = {}, { type, response }) => {
    switch (type) {
      case `FETCH_${name}_SUCCESS`:
        return response.entities;
      case `UPDATE_${name}_SUCCESS`:
        return merge({}, state, response.entities);
      case `DELETE_${name}_SUCCESS`:
        return omit(state, `${name}.${response.result}`);
      default:
        return state;
    }
  }
});

export default name => createNormalizedReducer(name);