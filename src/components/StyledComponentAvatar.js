import React from 'react';
import styled, {keyframes} from 'styled-components';



function StyledComponentAvatar(props){
  const Avatar = styled.div`
    height: ${props.size};
    width: ${props.size};
    border-radius: 100%;
    background: ${props.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props.color};
    font-weight: bold;
    &:hover ${this} {
        background: ${props.hoverColor};
      }
  `
  return (
    <Avatar>{props.children}</Avatar>
  );
}
export default StyledComponentAvatar;
