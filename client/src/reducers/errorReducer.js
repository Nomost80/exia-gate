import { CLEAR_ERRORS } from "../actions/errorActions";

export default (state = null, { type, payload }) => {
  if (type.includes('FAILURE') && payload) {
    return payload;
  }

  else if (type === CLEAR_ERRORS)
    return null;

  return null;
}