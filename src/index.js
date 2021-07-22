import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from redux;

const App = () => (<div> Hello </div>)


ReactDOM.render(
  <Provider>
      <App />
  </Provider>
, document.getElementById('root'));