import React from 'react';
import { connect } from 'react-redux';

import  * as actions  from '../../redux/actions';
import Logout from '../Logout'

class Dashboard extends React.Component {

  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    return (
      <div className="dashboard-wrapper">
        <p>
          This is the Dashboard page. This can be accessed only if the user is logged in.
        </p>
        <p>Click here to <Logout /></p>
      </div>
    );
  }
}

export default connect(state => ({
  ...state.books,
}),{
  ...actions,
})(Dashboard);
