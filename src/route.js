import React, {Component} from "react";
import {connect} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from './pages/Home/';
import Login from './pages/Login/';

import createHistory from 'history/createBrowserHistory';


class AppRouter extends Component {

  componentWillMount() {
    //this.props.checkAlreadyLoggedIn();
  }

  render() {
    const {authToken} = this.props;
    const params = {
      authToken
    };
    const history = createHistory();
    return ((
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} {...params} />
          <Route path="/login" component={Login} />
        </Switch>
      </ConnectedRouter>
    ));
  }
}

export default AppRouter;
