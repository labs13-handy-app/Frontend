import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './App';

import rootReducer from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
