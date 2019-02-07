import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

//import { authorize } from '../../reducers/authReducer';

import  * as actions  from '../../actions';
//import { tokenSelector, errorSelector } from './selectors';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { login: '', password: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let name = e.target.name,
      value = e.target.value;
    this.setState({[name]: value});
  }

  handleSubmit() {
    const { username, password } = this.state;
    this.props.handleAuth(username, password);
  }

  render() {
    const { error, token } = this.props;
    debugger
    return (
      <div className="login-wrapper">
        <h3>Login</h3>
        {
          this.props.token ?
            <div>
              present
              {this.props.token}
            </div>

          :
            <span>No token</span>
        }
        <form>
          <div>
            <label>Username</label>
            <input type="text" name="username" onChange={(e) => this.handleChange(e)} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" onChange={(e) => this.handleChange(e)}/>
          </div>
          <input type="button" className="btn" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default connect(state => ({
  ...state.token,
}),{
  ...actions,
})(Login);

// const mapStateToProps = (state) => ({
//   token: state.auth.token,
//   error: state.auth.error
// });

//export default connect(mapStateToProps)(Login);