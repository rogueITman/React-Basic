import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: props.user.name,
      skills: props.user.skills,
      addedSkills: "",
      description: "Hello",
      homeLink: "Changed Link"
    };

  }

  addSkills() {
    debugger;
    console.log('addSkills');
    var inputValue = this.state.addedSkills;
    var skillsArray = inputValue.split(',');
    skillsArray.map(skill => {
      if (skill !== "") {
        this.state.skills.push(skill)
      }
    });

    this.setState({
      skills: this.state.skills
    });
    console.log('NEW STATE of SKILLS ARRAY', this.state.skills);
  };

  changeHeaderLink() {
    console.log('CHL', this.props.changeLink);
    this.props.changeLink(this.state.homeLink);
  }

  displayDescription() {
    console.log('GD', this.props.getDescription);
    this.props.getDescription();
  }

  handleChangeEvent(event) {
    console.log('EVENT BEFORE', event);
    console.log('inside', event.target.value);
    this.setState({
      addedSkills: event.target.value
    });
    console.log('EVENT AFTER', event.target.value);
  }

  render() {
    return (
      <div>
        
        <form>
          <div className="form-group">
            <label className="pr-1">Add Skills</label>
            <input type="text" id="skills" placeholder="seperate with comma" onChange={(evt) => this.handleChangeEvent(evt)} />
          </div>
        </form>
        <button onClick={this.addSkills.bind(this)} className="btn btn-primary">Add Skills</button>

        <hr />
        <button onClick={this.changeHeaderLink.bind(this)} className="btn btn-primary">Change Header Link Name</button>
        <hr />
        <button onClick={this.displayDescription.bind(this)} className="btn btn-primary">Get Description</button>

      </div>
    );
  }
}
console.log('this', this);
Home.PropTypes = {
  user: React.PropTypes.object,
  children: React.PropTypes.isRequired,
  description: React.PropTypes.string,
  homeLink: React.PropTypes.string
}