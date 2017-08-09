import React, { Component } from 'react';
import logo from './logo.svg';
import  WelcomeDialog from './components/WelcomeDialog';
import  GoodbyeDialog from './components/GoodbyeDialog';
import Avatar from './components/Avatar';

function AvatarA(props){
  return(
    <Avatar backgroundColor="red">A</Avatar>
  )
}
function AvatarPizza(props){
  return(
    <Avatar backgroundColor="yellow">🍕</Avatar>
  )
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeDialog/>
        <GoodbyeDialog/>
        <Avatar backgroundColor="blue">HEY</Avatar>
        <AvatarA />
        <AvatarPizza/>
      </div>
    );
  }
}

export default App;
