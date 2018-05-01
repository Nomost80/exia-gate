import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './store/configureStore';
import history from './history';
import Navbar from './components/shared/navbar/Navbar';
import Body from './components/shared/Body';

const store = configureStore();

const Root = () => (
  <Fragment>
    <Navbar/>
    <Body/>
  </Fragment>
);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root/>
    </ConnectedRouter>
  </Provider>
);

export default App;