import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// redux
import allReducers from './reducers'
import {Provider} from "react-redux";
import {applyMiddleware, createStore, compose } from "redux";
// redux saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    })
    : compose;

const store = createStore(allReducers, composeEnhancers(applyMiddleware(sagaMiddleware)));
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

sagaMiddleware.run(rootSaga);