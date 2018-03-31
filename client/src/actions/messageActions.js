export const NOTIFICATION_ADDED = 'NOTIFICATION_ADDED';

export const notify = message => ({
  type: NOTIFICATION_ADDED,
  message
});