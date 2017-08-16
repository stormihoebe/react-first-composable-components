import React from 'react';
import styled from 'styled-components';

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
function StyledComponents(){
  return (
    <Wrapper primary={true}>
      <PurpleTitle>Hello World</PurpleTitle>
      <Input placeholder="This is where you type"></Input>
    </Wrapper>
  );
}
export default StyledComponents;
