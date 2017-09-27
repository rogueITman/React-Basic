import React from "react";

export class MyWebDevTechStack extends React.Component {
  constructor(props) {
    super();
    this.state = {
      skills: props.user.skills,
      myTechStack: props.user.webDevLangs
    };
  }
  render() {
    return (
      <div>
        <div>
          <p>
            You have experience with the following Web Development Tech Stack:
          </p>
          <ul>
            {this.state.myTechStack.map( (skill, index) => <li key={index}>{skill}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}