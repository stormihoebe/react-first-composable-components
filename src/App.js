import React, { Component } from 'react';
import  WelcomeDialog from './components/WelcomeDialog';
import  GoodbyeDialog from './components/GoodbyeDialog';
import Avatar from './components/Avatar';
import StyledComponents from './components/StyledComponents';
import ButtonRow from './components/ButtonRow';
import StyledComponentAvatar from './components/StyledComponentAvatar';

function AvatarA(props){
  return(
    <Avatar color="white" backgroundColor="red">A</Avatar>
  )
}
function AvatarPizza(props){
  return(
    <Avatar color="pink" backgroundColor="yellow">🍕</Avatar>
  )
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <StyledComponentAvatar color="yellow" backgroundColor="orange" size="80px" hoverColor="red">🍕</StyledComponentAvatar>
        <ButtonRow/>
        <StyledComponents/>
        <WelcomeDialog/>
        <GoodbyeDialog/>
        <Avatar color="red" backgroundColor="blue">HEY</Avatar>
        <AvatarA />
        <AvatarPizza/>
      </div>
    );
  }
}

export default App;
