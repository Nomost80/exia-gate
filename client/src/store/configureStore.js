import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { of } from 'rxjs/observable/of';
import rootReducer from '../reducers';
import rootEpic from '../epics';
import ajax from '../utils/ajax';
import errorMiddleware from '../middleware/error';

const epicsDependencies = {
  dependencies: { ajax, of }
};

const epicMiddleware = createEpicMiddleware(rootEpic, epicsDependencies);

export default initialState => (
  createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(errorMiddleware, epicMiddleware)
    )
  )
);