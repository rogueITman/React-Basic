import React from "react";

export class Clock extends React.Component {
  constructor(props) {
    super();
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h6>The time is {this.state.date.toLocaleTimeString()}</h6>
      </div>
    );
  }
}