export default store => next => action => {
  try {
    return next(action);
  }
  catch (err) {
    console.error(err, store.getState(), action);
    throw err;
  }
};