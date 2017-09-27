import React from "react";

export class ComponentDefinition extends React.Component {

  render () {
    return (
      <div>
        <h1>Components</h1>
        <p>
          Components, conceptually, are like JavaScript functions.
          They accept arbitrary inputs (called "props") and return React
          elements describing what should appear on the screen.
        </p>
      </div>
    );
  }
}

