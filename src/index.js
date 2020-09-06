import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home/Home.jsx';
import Class from './pages/Class/Class.jsx';
import Student from './pages/Student/Student.jsx';
import Error from './components/Error/Error.jsx';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/student" component={Student} />
      <Route path="/class" component={Class} />
      <Route component={Error} />
    </Switch>
  </ BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
