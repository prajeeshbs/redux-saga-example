import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import * as actions from '../../redux/actions';

class Logout extends Component {

  static propTypes = {
    deleteAuthenticationToken: PropTypes.func,
    authToken: PropTypes.string,
  };

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    //this.deleteAuthenticationToken();
  }

  deleteAuthenticationToken = () => {
    this.props.logout();
  };

  render() {
    return <Link to="/" onClick={this.deleteAuthenticationToken} className="logout">Logout</Link>
  }
}

export default connect(state => ({
  ...state.auth,
}),{
  ...actions,
})(Logout);