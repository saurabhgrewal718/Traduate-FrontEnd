import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware,compose } from 'redux';
import { logger } from 'redux-logger';
import root from './saga/index';
import allfiles from './reducers/allfiles';


ReactDOM.render( <App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
