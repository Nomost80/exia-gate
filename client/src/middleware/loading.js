export default store => next => action => {
  if (action.type.includes('REQUEST')) {
    store.dispatch({
      type: 'SET_LOADING',

    })
  }
}