import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory,applyRouterMiddleware } from 'react-router';
import {useTransitions, withTransition} from 'react-router-transition';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import App from 'components/app';
import Login from 'components/Login';


ReactDOM.render((	
  <Router history={hashHistory}>
    <Route path="/homepage" component={App} />
    <Route path="/login" component={Login} />
  </Router>
), document.getElementById('app'));
