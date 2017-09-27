import React from "react";

export class WelcomeGuest extends React.Component {
  constructor(props) {
    super();

    this.state = {
      isLoggedIn: props.isLoggedIn
    }
  }
  render() {
    return (
      <div >Hello and Welcome! We\'re looking forward to having you again as our guest.</div>
    );
  }
}