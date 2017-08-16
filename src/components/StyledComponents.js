import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
padding: 4rem;
background: ${(props)=> props.primary ? 'black' : 'yellow'};
display: flex;
justify-content: center;
align-items: center;
`;
const Title = styled.h1`
font-size: 2rem;
color: firebrick;
text-align: center;
margin: 3px;
`
const Input = styled.input`
`;

function StyledComponents(){
  return (
    <Wrapper primary={true}>
      <Title>Hello World</Title>
      <Input placeholder="This is where you type"></Input>
    </Wrapper>
  );
}
export default StyledComponents;
