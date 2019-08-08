import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './Components/App/App';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/">
      <Route component={App} />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
