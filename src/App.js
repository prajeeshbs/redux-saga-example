/* eslint-disable import/no-named-as-default */
import React from 'react';
import AppRouter from './route';
import FlashMessage from './components/FlashMessage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FlashMessage />
        <AppRouter />
      </div>
    );
  }
}
export default App;
