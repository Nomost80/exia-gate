import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import rootEpic from '../epics'

const epicMiddleware = createEpicMiddleware(rootEpic);

export default initialState => (
  createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(epicMiddleware)
    )
  )
);