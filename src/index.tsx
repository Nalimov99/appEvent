import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import store from "./store"
import { Provider } from 'react-redux';

import './index.scss'
import App from './components/app/app'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
          <Router>
            <App></App>
          </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


