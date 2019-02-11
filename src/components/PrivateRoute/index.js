import React, {PureComponent} from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import  * as actions  from '../../redux/actions';

class PrivateRoute extends PureComponent {
  static propTypes = {
    token: PropTypes.string,
    location: PropTypes.any,
    component: PropTypes.any
  }
  render() {
    const { token, location, component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={ () =>
          (token && <Component {...this.props} />) ||

          <Redirect to={{pathname: '/login' }} />
        }
      />
    )
  }
}

export default connect(state => ({
  ...state.auth,
}),{
  ...actions,
})(PrivateRoute);