import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import Reducer from './store/reducer/reducer';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(Reducer, composeEnhances(applyMiddleware(thunk)))

const app=(
  <Provider store={store}>
      <App />
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
