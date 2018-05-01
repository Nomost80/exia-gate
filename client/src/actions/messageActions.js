import makeActionCreator from './makeActionCreator';

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';

export const notify = makeActionCreator(ADD_NOTIFICATION, null, 'message');