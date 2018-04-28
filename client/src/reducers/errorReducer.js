import { CLEAR_ERRORS } from "../actions/errorActions";

export default (state = null, { type, errors }) => {
  if (type.includes('FAILURE') && errors) {
    return errors;
  }

  else if (type === CLEAR_ERRORS)
    return null;

  return null;
}