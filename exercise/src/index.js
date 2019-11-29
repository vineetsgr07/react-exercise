import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router-dom';

import history from './history';

import {Provider} from 'react-redux'
import {Store} from './redux/store';
import App from './routes/App';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

render((
  <Provider store={Store()}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>
), document.getElementById('root'));
