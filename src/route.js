import React, {Component} from "react";
import {connect} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {Switch, Route, Redirect} from 'react-router-dom';

import Home from './pages/Home/';
import Login from './pages/Login/';
import Dashboard from './pages/Dashboard/';
import PrivateRoute from './components/PrivateRoute/';
import  * as actions  from './redux/actions';
import history from './history';

class AppRouter extends Component {

  componentWillMount() {
    this.props.checkAlreadyLoggedIn();
  }

  render() {
    const { token } = this.props;
    return ((
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" render={ () => (token && <Redirect to={{
            pathname: '/dashboard'
          }}/>) || <Login />}
          />
          <Route exact path="/logout" render={ () => !token && <Login />} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </ConnectedRouter>
    ));
  }
}


export default connect(state => ({
  ...state.auth,
}),{
  ...actions,
})(AppRouter);