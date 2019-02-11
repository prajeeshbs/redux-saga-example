import React from 'react';
import './style.css'

class Home extends React.Component {
  render() {
    return (
      <div className="dashboard-wrapper">
        <h1>
          Redux Saga Example Application.
        </h1>
        <p>This is a sample application that works using Redux Saga.</p>
        <p>Click here to <a href="/login"> Login</a></p>
      </div>
    );
  }
}

export default Home;