/* eslint-disable import/no-named-as-default */
import React from 'react';

//import helpers from './utils/helpers';
import { connect } from 'react-redux';
import AppRouter from './route';

import  * as actions  from './actions';
//import AlertMessage from './components/AlertMessage';
//import LoadingIndicator from './components/LoadingIndicator';

class App extends React.Component {
  componentDidMount() {
    this.props.getBooks();
  }
  render() {
      return (
        <div className="App">
          <div>
            {
              this.props.books && 
              <div>
                {this.props.books[0].title}
              </div>
            }
            <AppRouter />
          </div>
        </div>
      );
  }
}

export default connect(state => ({
  ...state.books,
}),{
  ...actions,
})(App);
