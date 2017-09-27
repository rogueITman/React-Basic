import React from "react";

export class Welcome extends React.Component {
  constructor (props) {
    super();
    this.state = {
      ...props,
      name: props.user.name,
      showChild: false
    };
  }
  render () {
    return (
      <div>
        <p>Welcome Back {this.state.name}!</p>
        <div>{this.props.children[0]}</div>
        <div>{this.props.children[1]}</div>
        <div>{this.state.showChild && this.props.children[1]}</div>
      </div>
    );
  }
}