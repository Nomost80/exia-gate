import makeActionCreator from './makeActionCreator';

export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const clearErrors = makeActionCreator(CLEAR_ERRORS);