import React, { Component } from 'react';



function Avatar(props) {
  const avatarStyle = {
    height: '50px',
    width: '50px',
    borderRadius: '25px',
    background: `${props.backgroundColor}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  return (
    <div style={avatarStyle}>
    {props.children}
    </div>
  );
}

export default Avatar;
