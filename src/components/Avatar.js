import React, { Component } from 'react';

const avatarStyle = {
  height: '50px',
  width: '50px',
  borderRadius: '25px',
  background: 'lightgrey',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

function Avatar(props) {
  return (
    <div style={avatarStyle}>
    {props.children}
    </div>
  );
}

export default Avatar;
