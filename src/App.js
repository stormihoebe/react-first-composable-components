import React, { Component } from 'react';
import logo from './logo.svg';
import  WelcomeDialog from './components/WelcomeDialog';
import  GoodbyeDialog from './components/GoodbyeDialog';
import Avatar from './components/Avatar';

function AvatarA(props){
  return(
    <Avatar>A</Avatar>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeDialog/>
        <GoodbyeDialog/>
        <Avatar>HEY</Avatar>
        <AvatarA/>
      </div>
    );
  }
}

export default App;
