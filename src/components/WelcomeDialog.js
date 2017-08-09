import React, { Component } from 'react';

function FancyBorder(props) {
  return (
    <div style={{ border: `3px solid ${props.color}`, padding: `${props.padding}`}}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="red" padding="30px">
      <h1>{props.title}
      </h1>
      <p>{props.message}</p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thanks for stopping by!" />
  );
}

export default WelcomeDialog;
