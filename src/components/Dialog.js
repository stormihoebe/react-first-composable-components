import React from 'react';

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

export default Dialog;
