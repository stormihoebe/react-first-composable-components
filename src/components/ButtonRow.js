import React from 'react';
import styled, {keyframes} from 'styled-components';

const Wrapper = styled.section`
`;

const Button = styled.button`
color: #FFFFFF;
background: firebrick;
border: none;
border-radius: 0.3rem;
box-shadow: 0 2px 5px 0 rgba(0,0,0,0.25);
padding: 1rem;
cursor: pointer;
font-size: 1rem;
transition: all 0.3s;
&:hover ${this} {
    background: red;
  }
`
const HoverButton = Button.extend`
box-shadow: none;
background: none;
color: #999999;
&:hover${this}{
  background: lightSkyBlue;
color: white;
}
`;
function ButtonRow(){
  return (
    <Wrapper primary={true}>
      <Button>Hey I'm a button</Button>
      <HoverButton>Hey I'm a button</HoverButton>

    </Wrapper>
  );
}
export default ButtonRow;
