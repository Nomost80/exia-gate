export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';

export const notify = message => ({
  type: ADD_NOTIFICATION,
  message
});