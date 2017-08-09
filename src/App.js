import React, { Component } from 'react';
import logo from './logo.svg';
import WelcomeDialog from './components/WelcomeDialog';
class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeDialog/>
      </div>
    );
  }
}

export default App;
