import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import  * as actions  from '../../redux/actions';
import './style.css'

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
    return (
      <div className="login-wrapper">
        <h3>Login</h3>
        <form>
          {
            this.props.invalidLogin &&
            <div className="alert">
              Invalid Credentials
            </div>
          }
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
  ...state.auth,
}),{
  ...actions,
})(Login);
