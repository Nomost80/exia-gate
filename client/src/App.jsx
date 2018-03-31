import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
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
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>
);

export default App;