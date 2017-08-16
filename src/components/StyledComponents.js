import React from 'react';
import styled, {keyframes} from 'styled-components';

const Wrapper = styled.section`
padding: 4rem;
background: ${(props)=> props.primary ? 'black' : 'yellow'};
`;
const Title = styled.h1`
font-size: 2rem;
color: firebrick;
text-align: center;
margin: 3px;
`
const Input = styled.input`
display:block;
margin: auto;
`;
const PurpleTitle = Title.extend`
color: purple;
`;

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;
const Spinner = styled.div`
  animation:${rotate} 2s linear infinite;
  display: inline-block;
  font-size: 30px;
  margin-left: 50%;
  height: 97px;
`;

function StyledComponents(){
  return (
    <Wrapper primary={true}>
      <PurpleTitle>Hello World</PurpleTitle>
      <Input placeholder="This is where you type"></Input>
      <Spinner>🦎</Spinner>
      <Spinner>🦉</Spinner>
    </Wrapper>
  );
}
export default StyledComponents;
